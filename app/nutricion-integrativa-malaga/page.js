import SiteHeader from "../components/SiteHeader";
import { CtaButtons, StickyWhatsApp } from "../components/Cta";

const RESERVA_MSG = "Hola, me gustaría pedir cita para una primera sesión de nutrición digestiva integrativa en Centro NERÚA.";
const DUDAS_MSG = "Hola, me gustaría información sobre la consulta de nutrición digestiva integrativa en Centro NERÚA.";

export const metadata = {
  title: "Nutrición digestiva integrativa en Rincón de la Victoria (presencial y online) | Centro NERÚA",
  description:
    "Nutrición digestiva integrativa en Rincón de la Victoria, Málaga, y online: microbiota, SIBO, histamina, pérdida de peso y mejora de hábitos.",
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
        fontFamily: "var(--font-sans), Montserrat, sans-serif",
        background: "#F5F1EB",
        color: "#3A3A3A",
        minHeight: "100vh",
      }}
    >
      <SiteHeader />

      <section style={{ ...section, paddingTop: "90px" }}>
        <h1 className="service-h1" style={{ fontSize: "42px", marginTop: 0, marginBottom: 10 }}>
          Nutrición digestiva integrativa en <span style={{ color: "#C6A96B" }}>Rincón de la Victoria</span>
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
          Acompañamiento nutricional integrativo con especial atención a la salud digestiva: hinchazón, microbiota, SIBO e histamina/histaminosis.
          <br />
          También acompañamos procesos de pérdida de peso, mejora de hábitos y alimentación adaptada a cada persona.
          <br />
          Presencial en Rincón de la Victoria, Málaga · Online.
        </p>

        <CtaButtons reservaMsg={RESERVA_MSG} dudasMsg={DUDAS_MSG} hideDudasOnMobile style={{ marginTop: 22 }} />
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>¿Para quién es?</h2>
          {/* Lo digestivo es el área principal y diferencial; peso y hábitos, como acompañamiento adicional */}
          <p className="svc-group-label">Salud digestiva</p>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
            <li>Hinchazón, digestiones pesadas o malestar digestivo persistente.</li>
            <li>Microbiota y disbiosis.</li>
            <li>SIBO, incluido metano, y otros problemas digestivos.</li>
            <li>Sospecha de intolerancia a histamina / histaminosis.</li>
          </ul>

          <p className="svc-group-label">También te acompañamos en</p>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
            <li>Pérdida de peso, con un plan realista y adaptado a ti.</li>
            <li>Mejora de hábitos alimentarios.</li>
            <li>Alimentación individualizada según tus necesidades y tu contexto.</li>
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
              <strong>¿Es solo para problemas digestivos?</strong>
              <div style={{ lineHeight: 1.8 }}>
                No. Aunque existe una especial atención a salud digestiva, microbiota, SIBO y otros trastornos digestivos, también acompañamos procesos de pérdida de peso, mejora de hábitos y alimentación adaptada a las necesidades de cada persona.
              </div>
            </div>

            <div>
              <strong>¿Trabajáis SIBO e histamina?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Sí, dentro de un enfoque integrativo y personalizado. Te orientamos según tu caso y pruebas disponibles.
              </div>
            </div>

            <div>
              <strong>¿Es solo dieta?</strong>
              <div style={{ lineHeight: 1.8 }}>
                No. También trabajamos hábitos, ritmo de vida y otros factores que influyen tanto en tu digestión como en tu alimentación diaria.
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

      {/* QUIÉN TE ACOMPAÑA: bloque compacto; misma fotografía y credenciales que la ficha de la home */}
      <section style={section}>
        <div className="svc-team">
          <img
            className="svc-team-photo"
            src="/images/equipo/maria-jose.webp"
            alt="María José Martínez Granados"
            width="420"
            height="525"
            loading="lazy"
          />
          <div>
            <p className="svc-team-eyebrow">Quién te acompaña</p>
            <h2 className="svc-team-name">María José Martínez Granados</h2>
            <p className="member-area">Nutrición digestiva integrativa</p>
            <ul className="member-credentials svc-team-credentials">
              <li>Técnico Superior en Dietética</li>
              <li>Finalizando el Grado en Nutrición Humana y Dietética</li>
              <li>Formación especializada en microbiota y patologías digestivas</li>
            </ul>
          </div>
        </div>
      </section>

      <StickyWhatsApp message={DUDAS_MSG} />
    </main>
  );
}
