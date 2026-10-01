"use client";
import { useEffect, useRef, useState } from "react";

// Opciones de "¿Sobre qué área quieres información?" (sin preguntar por síntomas: minimización de datos de salud).
// No hay columna propia en Supabase: el área elegida se añade al principio del mensaje ("Área: …"),
// así llega igual a Supabase y a Make sin cambiar nada. El campo interno sigue llamándose "concern".
const AREAS = [
  "Regulación del sistema nervioso",
  "Psicología",
  "Nutrición",
  "No lo tengo claro",
  "Otro",
];

const PRIVACY_HREF = "/politica-de-privacidad";

export default function LeadForm() {
  const formRef = useRef(null);
  // Momento en que el formulario queda listo (antispam: un envío en menos de 3 s se considera automático)
  const readyAt = useRef(0);
  useEffect(() => {
    readyAt.current = Date.now();
  }, []);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    const form = new FormData(formRef.current);
    const concern = (form.get("concern") || "").trim();
    const text = (form.get("message") || "").trim();

    // Misma regla que el servidor (mínimo 10), aplicada al texto escrito por la persona.
    if (text.length < 10) {
      setError("Cuéntanos un poco más en el mensaje (mínimo 10 caracteres).");
      return;
    }

    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: concern ? `Área: ${concern}\n\n${text}` : text,
      consent: form.get("consent") === "on",
      // Antispam: campo trampa (vacío para las personas) y tiempo desde que se cargó el formulario
      website: form.get("nerua_web") || "",
      elapsed_ms: readyAt.current ? Date.now() - readyAt.current : 0,
    };

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data?.error || "No se pudo enviar");
        return;
      }

      formRef.current?.reset();
      setOk(true);
    } catch {
      setError("No se pudo enviar. Revisa tu conexión e inténtalo de nuevo, o escríbenos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  if (ok) {
    return (
      <div className="lead-success" role="status">
        <p className="lead-success-title">Gracias por escribirnos.</p>
        <p className="lead-success-text">
          Hemos recibido tu consulta y te responderemos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="lead-form">
      {error ? (
        <div className="lead-error" role="alert">
          {error}
        </div>
      ) : null}

      {/* Campo trampa: invisible y fuera del orden de tabulación; solo lo rellenan los bots */}
      <div className="lead-hp" aria-hidden="true">
        <label>
          No rellenes este campo
          <input name="nerua_web" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="lead-field">
        Nombre *
        <input name="name" required autoComplete="name" className="lead-input" />
      </label>

      <label className="lead-field">
        Email *
        <input name="email" type="email" required autoComplete="email" inputMode="email" className="lead-input" />
      </label>

      <label className="lead-field">
        Teléfono (opcional)
        <input name="phone" type="tel" autoComplete="tel" inputMode="tel" className="lead-input" />
      </label>

      <label className="lead-field">
        ¿Sobre qué área quieres información?
        <select name="concern" defaultValue="" className="lead-input lead-select">
          <option value="">Selecciona una opción</option>
          {AREAS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <label className="lead-field">
        Mensaje *
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Cuéntanos brevemente en qué podemos ayudarte. No es necesario incluir información médica detallada."
          className="lead-input lead-textarea"
        />
      </label>

      <label className="lead-consent">
        <input name="consent" type="checkbox" required />
        <span>
          He leído la{" "}
          <a href={PRIVACY_HREF} target="_blank" rel="noopener" className="lead-link">
            Política de privacidad
          </a>{" "}
          y consiento el tratamiento de mis datos para responder a mi consulta, incluidos, en su caso, los datos de salud que
          decida comunicar voluntariamente en el mensaje. *
        </span>
      </label>

      <button type="submit" disabled={loading} className="btn lead-submit">
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {/* Primera capa de información sobre protección de datos */}
      <p className="lead-info">
        Responsable: José Manuel Gil Rueda (Centro NERÚA). Finalidad: responder a tu consulta. Legitimación: tu
        consentimiento. Destinatarios: no cedemos tus datos; solo los tratan los proveedores técnicos necesarios para
        gestionar tu consulta. Derechos: acceso, rectificación, supresión y otros, en info@centronerua.com. Más información
        en la{" "}
        <a href={PRIVACY_HREF} target="_blank" rel="noopener" className="lead-link">
          Política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
