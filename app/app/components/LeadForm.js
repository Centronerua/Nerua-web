"use client";
import { useState } from "react";

export default function leadForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      postal_code: form.get("postal_code"),
      message: form.get("message"),
      consent: form.get("consent") === "on",
    };

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));
    setLoading(false);

    if (!res.ok) {
      setError(data?.error || "No se pudo enviar");
      return;
    }

    setOk(true);
    e.currentTarget.reset();
  }

  if (ok) {
    return (
      <div style={{ padding: 14, border: "1px solid #ddd", borderRadius: 12 }}>
        ✅ Enviado. Te contactamos en breve.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
      {error ? (
        <div style={{ padding: 12, border: "1px solid #f2c2c2", borderRadius: 12 }}>
          {error}
        </div>
      ) : null}

      <label>
        Nombre *
        <input
          name="name"
          required
          style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd" }}
        />
      </label>

      <label>
        Email *
        <input
          name="email"
          type="email"
          required
          style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd" }}
        />
      </label>

      <label>
        Teléfono (opcional)
        <input
          name="phone"
          style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd" }}
        />
      </label>

      <label>
        Código Postal *
        <input
          name="postal_code"
          required
          inputMode="numeric"
          pattern="[0-9]{5}"
          maxLength={5}
          placeholder="Ej: 29013"
          style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd" }}
        />
      </label>

      <label>
        Mensaje *
        <textarea
          name="message"
          required
          rows={4}
          style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #ddd" }}
        />
      </label>

      <label style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 14 }}>
        <input name="consent" type="checkbox" required style={{ marginTop: 4 }} />
        Acepto la política de privacidad *
      </label>

      <button
        disabled={loading}
        style={{ padding: 12, borderRadius: 12, border: "1px solid #111", cursor: "pointer" }}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
