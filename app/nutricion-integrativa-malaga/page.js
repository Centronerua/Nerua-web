import SiteHeader from "../components/SiteHeader";
import { CtaButtons, StickyWhatsApp } from "../components/Cta";

const RESERVA_MSG = "Hola, me gustaría reservar una primera sesión de nutrición digestiva integrativa en Centro NERÚA.";
const DUDAS_MSG = "Hola, me gustaría información sobre nutrición integrativa (enfoque digestivo, SIBO, histamina) en Centro NERÚA.";

export const metadata = {
  title: "Nutrición integrativa en Málaga (presencial y online) | Centro NERÚA",
  description:
    "Nutrición integrativa en Málaga con enfoque digestivo, microbiota, SIBO e histaminosis. Acompañamiento personalizado. Presencial y online.",
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
    <main
      style={{
        fontFamily: "Montserrat, sans-serif",
        background: "#F5F1EB",
        color: "#3A3A3A",
        minHeight: "100vh",
      }}
    >
      <SiteHeader badgeText="Presencial + Online" />

      <section style={{ ...section, paddingTop: "90px" }}>
        <h1 style={{ fontSize: "42px", marginTop: 0, marginBottom: 10 }}>
          Nutrición integrativa en <span style={{ color: "#C6A96B" }}>Málaga</span>
        </h1>

        <p
          style={{
            color: "#6B7D6D",
            fontWeight: 600,
            marginTop: 0,
            lineHeight: 1.7,
            maxWidth: 820,
          }}
        >
          Acompañamiento nutricional integrativo con especialidad digestiva: hinchazón, microbiota, SIBO e histamina/histaminosis.
          Presencial en Málaga y también online.
        </p>

        <CtaButtons reservaMsg={RESERVA_MSG} dudasMsg={DUDAS_MSG} style={{ marginTop: 22 }} />
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>¿Para quién es?</h2>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
            <li>Hinchazón, digestiones pesadas o malestar digestivo persistente.</li>
            <li>SIBO (incluido metano) y disbiosis / microbiota.</li>
            <li>Sospecha de intolerancia a histamina / histaminosis.</li>
            <li>Necesidad de un plan por fases y seguimiento claro.</li>
          </ul>
        </div>
      </section>

      <section style={section}>
        <h2>Cómo trabajamos</h2>
        <p style={{ lineHeight: 1.8, maxWidth: 820 }}>
          Te acompañamos con una estrategia personalizada y realista: alimentación, tolerancias, hábitos y contexto (estrés, descanso, ritmos).
          Buscamos claridad y progreso paso a paso, sin soluciones genéricas.
        </p>
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>Preguntas frecuentes</h2>

          <div style={{ display: "grid", gap: 14 }}>
            <div>
              <strong>¿Trabajáis SIBO e histamina?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Sí, dentro de un enfoque integrativo y personalizado. Te orientamos según tu caso y pruebas disponibles.
              </div>
            </div>

            <div>
              <strong>¿Es solo dieta?</strong>
              <div style={{ lineHeight: 1.8 }}>
                No. También trabajamos hábitos, ritmo de vida y factores que influyen en el sistema digestivo.
              </div>
            </div>

            <div>
              <strong>¿Online funciona?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Sí, en muchos casos. Lo importante es el plan, el seguimiento y la continuidad.
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
