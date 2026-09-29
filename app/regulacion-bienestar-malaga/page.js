import SiteHeader from "../components/SiteHeader";
import { CtaButtons, StickyWhatsApp } from "../components/Cta";

const RESERVA_MSG = "Hola, me gustaría pedir cita para una primera sesión de regulación y bienestar en Centro NERÚA.";
const DUDAS_MSG = "Hola, me gustaría información sobre regulación y bienestar (bruxismo, tinnitus, vértigos) en Centro NERÚA.";

export const metadata = {
  title: "Regulación y bienestar en Málaga (presencial y online) | Centro NERÚA",
  description:
    "Regulación y bienestar en Málaga: bruxismo, tinnitus, vértigos, migrañas y tensión persistente con enfoque integrador y sistema nervioso. Presencial y online.",
};

export default function Page() {
  const section = { maxWidth: "900px", margin: "auto", padding: "70px 20px" };
  const card = {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    border: "1px solid rgba(58,58,58,0.06)",
  };

  return (
    <main style={{ fontFamily: "Montserrat, sans-serif", background: "#F5F1EB", color: "#3A3A3A", minHeight: "100vh" }}>
      <SiteHeader badgeText="Presencial + Online" />

      <section style={{ ...section, paddingTop: "90px" }}>
        <h1 style={{ fontSize: "42px", marginTop: 0, marginBottom: 10 }}>
          Regulación y bienestar en <span style={{ color: "#C6A96B" }}>Málaga</span>
        </h1>

        <p style={{ color: "#6B7D6D", fontWeight: 600, marginTop: 0, lineHeight: 1.7, maxWidth: 820 }}>
          Sesiones orientadas a tensión persistente y síntomas como bruxismo, tinnitus, vértigos o migrañas, desde una mirada integradora
          centrada en el sistema nervioso. Presencial en Málaga y también online.
        </p>

        <CtaButtons reservaMsg={RESERVA_MSG} dudasMsg={DUDAS_MSG} hideDudasOnMobile style={{ marginTop: 22 }} />
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>¿Para quién es?</h2>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
            <li>Bruxismo, tensión mandibular o tensión muscular persistente.</li>
            <li>Tinnitus y sobrecarga/estrés asociado.</li>
            <li>Vértigos o sensación de inestabilidad.</li>
            <li>Migrañas o cefaleas relacionadas con tensión y estrés.</li>
            <li>Estrés acumulado y sensación de “cuerpo en alerta”.</li>
          </ul>
        </div>
      </section>

      <section style={section}>
        <h2>Cómo trabajamos</h2>
        <p style={{ lineHeight: 1.8, maxWidth: 820 }}>
          Observamos el conjunto (síntoma, tensión, hábitos, historia y contexto) y trabajamos regulación y bienestar con un enfoque integrador
          centrado en el sistema nervioso. Buscamos reducir carga y mejorar calidad de vida con un proceso claro y progresivo.
        </p>
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>Preguntas frecuentes</h2>
          <div style={{ display: "grid", gap: 14 }}>
            <div>
              <strong>¿Es solo “relajación”?</strong>
              <div style={{ lineHeight: 1.8 }}>
                No. Es un enfoque de regulación y bienestar que tiene en cuenta el sistema nervioso y cómo el cuerpo sostiene el síntoma.
              </div>
            </div>
            <div>
              <strong>¿Online sirve?</strong>
              <div style={{ lineHeight: 1.8 }}>
                En algunos casos sí, especialmente para acompañamiento y pautas. Te orientamos según tu situación.
              </div>
            </div>
            <div>
              <strong>¿Cuándo se nota mejoría?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Depende del caso. El objetivo es un cambio progresivo y estable, no parches puntuales.
              </div>
            </div>
          </div>

          <CtaButtons reservaMsg={RESERVA_MSG} dudasMsg={DUDAS_MSG} style={{ marginTop: 18 }} />
        </div>
      </section>

      <StickyWhatsApp message={DUDAS_MSG} />
    </main>
  );
}
