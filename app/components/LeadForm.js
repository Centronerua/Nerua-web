"use client";
import { useRef, useState } from "react";

// Opciones de "¿Qué te preocupa?". No hay columna propia en Supabase: la opción elegida
// se añade al principio del mensaje, así llega igual a Supabase y a Make sin cambiar nada.
const CONCERNS = [
  "Bruxismo / tensión mandibular",
  "Digestivo",
  "Ansiedad / estrés",
  "Migrañas / tensión",
  "Tinnitus / vértigos",
  "Otro",
];

export default function LeadForm() {
  const formRef = useRef(null);
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
      postal_code: form.get("postal_code"),
      message: concern ? `Motivo: ${concern}\n\n${text}` : text,
      consent: form.get("consent") === "on",
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
        Código postal (opcional)
        <input
          name="postal_code"
          inputMode="numeric"
          autoComplete="postal-code"
          pattern="[0-9]{5}"
          maxLength={5}
          placeholder="5 cifras"
          className="lead-input"
        />
      </label>

      <label className="lead-field">
        ¿Qué te preocupa?
        <select name="concern" defaultValue="" className="lead-input lead-select">
          <option value="">Selecciona una opción</option>
          {CONCERNS.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <label className="lead-field">
        Mensaje *
        <textarea name="message" required rows={4} className="lead-input lead-textarea" />
      </label>

      <label className="lead-consent">
        <input name="consent" type="checkbox" required />
        Acepto la política de privacidad *
      </label>

      <button type="submit" disabled={loading} className="btn lead-submit">
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
