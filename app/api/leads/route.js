import { createClient } from "@supabase/supabase-js";

// Protección antispam sin CAPTCHA (no cambia Supabase ni Make):
// 1) Campo trampa (honeypot) y 2) tiempo mínimo de envío: si saltan, se responde "ok"
//    sin guardar ni avisar a Make, para que el bot no aprenda a esquivarlos.
// 3) Validación estricta: solo JSON, mismo origen, longitudes máximas y como mucho 2 enlaces.
// 4) Límite aproximado por IP (en memoria; la IP no se guarda en ningún sitio).
// El límite por email se ha omitido: no se ha podido confirmar la columna created_at sin tocar la tabla.

const MIN_FILL_MS = 3000; // menos de 3 s desde que se cargó el formulario: envío automático
const MAX_BODY_BYTES = 10_000;
const MAX = { name: 100, email: 254, phone: 30, message: 3000 };
const MAX_LINKS = 2;
const RATE_LIMIT = 5; // envíos guardados por IP…
const RATE_WINDOW_MS = 10 * 60 * 1000; // …cada 10 minutos
const RATE_MSG =
  "Ya hemos recibido una consulta tuya hace un momento. Si quieres añadir algo, espera unos minutos o escríbenos por WhatsApp.";

// Memoria por instancia del servidor: en Vercel es aproximado, pero frena envíos en ráfaga.
const recentByIp = new Map();

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isPostalCodeES(v) {
  return /^[0-9]{5}$/.test(v);
}
function isPhone(v) {
  return /^[0-9+\-\s().]*$/.test(v);
}
function countLinks(v) {
  return (v.match(/https?:\/\/|www\./gi) || []).length;
}
// Texto plano: sin caracteres de control (se conservan saltos de línea y tabuladores en el mensaje)
function clean(v, keepNewlines = false) {
  const s = typeof v === "string" ? v : "";
  return (keepNewlines ? s.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "") : s.replace(/[\u0000-\u001F\u007F]/g, " ")).trim();
}

function clientIp(req) {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0] : req.headers.get("x-real-ip") || "desconocida").trim();
}
function recentCount(ip, now) {
  const list = (recentByIp.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (list.length) recentByIp.set(ip, list);
  else recentByIp.delete(ip);
  return list.length;
}
function remember(ip, now) {
  recentByIp.set(ip, [...(recentByIp.get(ip) || []), now]);
  if (recentByIp.size > 5000) {
    for (const [key, list] of recentByIp) if (!list.some((t) => now - t < RATE_WINDOW_MS)) recentByIp.delete(key);
  }
}

// El envío solo se acepta desde la propia web (los navegadores siempre envían Origin en un POST)
function sameOrigin(req) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

const ok = () => Response.json({ ok: true }, { status: 200 });
const fail = (error, status = 400) => Response.json({ error }, { status });

export async function POST(req) {
  try {
    if (!(req.headers.get("content-type") || "").toLowerCase().startsWith("application/json"))
      return fail("Formato no admitido", 415);
    if (!sameOrigin(req)) return fail("Origen no permitido", 403);

    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) return fail("Petición demasiado grande", 413);
    const body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) return fail("Petición inválida");

    // Bots: campo trampa relleno o envío demasiado rápido → se descarta sin guardar ni avisar a Make
    if (clean(body.website)) return ok();
    const elapsed = Number(body.elapsed_ms);
    if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) return ok();

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const postal_code = clean(body.postal_code);
    const message = clean(body.message, true);
    const consent = body.consent === true;

    if (name.length < 2 || name.length > MAX.name) return fail("Nombre inválido");
    if (email.length > MAX.email || !isEmail(email)) return fail("Email inválido");
    if (phone.length > MAX.phone || !isPhone(phone)) return fail("Teléfono inválido");
    // Código postal opcional: si se indica, debe tener 5 cifras; si no, se guarda NULL.
    if (postal_code && !isPostalCodeES(postal_code)) return fail("Código postal inválido (5 números)");
    if (message.length < 10) return fail("Mensaje demasiado corto (mínimo 10)");
    if (message.length > MAX.message) return fail(`Mensaje demasiado largo (máximo ${MAX.message} caracteres)`);
    if (countLinks(`${name} ${message}`) > MAX_LINKS) return fail(`El mensaje no puede incluir más de ${MAX_LINKS} enlaces`);
    if (!consent) return fail("Debes aceptar la política de privacidad");

    const ip = clientIp(req);
    const now = Date.now();
    if (recentCount(ip, now) >= RATE_LIMIT) return fail(RATE_MSG, 429);

    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false } }
    );

    const { error } = await supabase.from("leads").insert({
      name,
      email,
      phone: phone || null,
      postal_code: postal_code || null,
      message,
      consent,
      source: "web",
      status: "new",
    });

    if (error) return fail("No se pudo guardar", 500);
    remember(ip, now);

    // Enviar a Make (gratis). Si Make falla, no rompemos el formulario (ya está guardado en Supabase)
    if (process.env.MAKE_WEBHOOK_URL) {
      try {
        await fetch(process.env.MAKE_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone: phone || null,
            postal_code: postal_code || null,
            message,
            consent,
            source: "web",
            status: "new",
            created_at: new Date().toISOString(),
          }),
        });
      } catch (e) {
        console.error("Make webhook failed", e);
      }
    }

    return ok();
  } catch {
    return fail("Petición inválida");
  }
}
