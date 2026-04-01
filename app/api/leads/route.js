import { createClient } from "@supabase/supabase-js";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isPostalCodeES(v) {
  return /^[0-9]{5}$/.test(v);
}

export async function POST(req) {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false } }
    );

    const body = await req.json();

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const postal_code = (body.postal_code || "").trim();
    const message = (body.message || "").trim();
    const consent = !!body.consent;

    if (name.length < 2) return Response.json({ error: "Nombre inválido" }, { status: 400 });
    if (!isEmail(email)) return Response.json({ error: "Email inválido" }, { status: 400 });
    if (!isPostalCodeES(postal_code))
      return Response.json({ error: "Código postal inválido (5 números)" }, { status: 400 });
    if (message.length < 10)
      return Response.json({ error: "Mensaje demasiado corto (mínimo 10)" }, { status: 400 });
    if (!consent)
      return Response.json({ error: "Debes aceptar la política de privacidad" }, { status: 400 });

    const { error } = await supabase.from("leads").insert({
      name,
      email,
      phone: phone || null,
      postal_code,
      message,
      consent,
      source: "web",
      status: "new",
    });

    if (error) return Response.json({ error: "No se pudo guardar" }, { status: 500 });

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json({ error: "Petición inválida" }, { status: 400 });
  }
}
