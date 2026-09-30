import SiteHeader from "../components/SiteHeader";
import { CtaButtons, StickyWhatsApp } from "../components/Cta";
import { SERVICES, formatPrice } from "../data/pricing";

const RESERVA_MSG = "Hola, me gustaría pedir cita para una primera sesión de regulación del sistema nervioso en Centro NERÚA.";
const DUDAS_MSG = "Hola, me gustaría información sobre la consulta de regulación del sistema nervioso en Centro NERÚA.";

// Tarifa leída del mismo sitio que "Consultas y precios" de la home
const REGULACION = SERVICES.find((s) => s.id === "regulacion");

export const metadata = {
  title: "Regulación del sistema nervioso en Rincón de la Victoria | Centro NERÚA",
  description:
    "Regulación del sistema nervioso en Rincón de la Victoria, Málaga: bruxismo, tinnitus, vértigos y migrañas. Enfoque neurofuncional. Consulta presencial.",
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
    <main style={{ fontFamily: "var(--font-sans), Montserrat, sans-serif", background: "#F5F1EB", color: "#3A3A3A", minHeight: "100vh" }}>
      <SiteHeader />

      <section style={{ ...section, paddingTop: "90px" }}>
        <p className="section-eyebrow service-eyebrow"><span className="eyebrow-text"><span className="nowrap">SISTEMA NERVIOSO ·</span> <span className="nowrap">ENFOQUE NEUROFUNCIONAL</span></span></p>
        <h1 className="service-h1" style={{ fontSize: "42px", marginTop: 0, marginBottom: 10 }}>
          Regulación del sistema nervioso en <span style={{ color: "#C6A96B" }}>Rincón de la Victoria</span>
        </h1>

        <p style={{ color: "#6B7D6D", fontWeight: 600, marginTop: 0, lineHeight: 1.7, maxWidth: 820 }}>
          Consulta presencial orientada a casos relacionados con bruxismo, tensión mandibular, migrañas, tinnitus, vértigos o
          tensión persistente, desde la regulación del sistema nervioso y un enfoque neurofuncional.
          <br />
          Presencial en Rincón de la Victoria, Málaga.
        </p>

        <CtaButtons reservaMsg={RESERVA_MSG} dudasMsg={DUDAS_MSG} hideDudasOnMobile style={{ marginTop: 22 }} />
        {REGULACION.rates.map((r) => (
          <p key={r.label} className="svc-price">
            {r.label} · {r.duration} · {formatPrice(r.price)}
          </p>
        ))}
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>¿Para quién es?</h2>
          <p style={{ margin: "0 0 8px", lineHeight: 1.8 }}>Acompañamos casos relacionados con:</p>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
            <li>Bruxismo o tensión mandibular.</li>
            <li>Migrañas o cefaleas.</li>
            <li>Tinnitus.</li>
            <li>Vértigos o sensación de inestabilidad.</li>
            <li>Tensión muscular persistente.</li>
            <li>Otros síntomas físicos en los que el estrés, la tensión y la regulación del sistema nervioso puedan estar influyendo.</li>
          </ul>
        </div>
      </section>

      <section style={section}>
        <h2>Cómo trabajamos</h2>
        <p style={{ lineHeight: 1.8, maxWidth: 820 }}>
          Empezamos con una primera valoración individual para comprender tu caso antes de plantear el trabajo: cómo son los
          síntomas, cuándo aparecen, tu historia y tu contexto.
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: 820 }}>
          Desde un <strong>enfoque neurofuncional</strong>, tenemos en cuenta cómo pueden estar relacionados los síntomas, la
          tensión, el estrés y el sistema nervioso cuando tiene sentido en cada caso. El trabajo se adapta a cada persona.
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: 820 }}>
          Durante el seguimiento revisamos contigo la evolución y ajustamos el proceso cuando es necesario.
        </p>
        <p className="svc-note">
          Esta consulta complementa, y no sustituye, la valoración y el seguimiento médico u odontológico cuando sean necesarios.
        </p>
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>Preguntas frecuentes</h2>
          <div style={{ display: "grid", gap: 14 }}>
            <div>
              <strong>¿Cómo es la primera sesión?</strong>
              <div style={{ lineHeight: 1.8 }}>
                La primera sesión permite conocer tu caso con detalle: qué síntomas tienes, cómo y cuándo aparecen y qué factores pueden estar influyendo. A partir de ahí te orientamos sobre cómo plantear el trabajo y los siguientes pasos.
              </div>
            </div>
            <div>
              <strong>¿Cuánto dura una sesión?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Las sesiones individuales duran 60 minutos.
              </div>
            </div>
            <div>
              <strong>¿Cuántas sesiones necesito?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Depende de cada caso, de tus necesidades y de cómo vaya evolucionando el proceso. Tras la primera valoración podemos orientarte sobre el seguimiento que puede tener más sentido para ti, aunque puede ajustarse según la evolución. No existe un número cerrado de sesiones válido para todas las personas.
              </div>
            </div>
            <div>
              <strong>¿Cada cuánto son las sesiones?</strong>
              <div style={{ lineHeight: 1.8 }}>
                La frecuencia se acuerda de forma individual según tus necesidades, el momento del proceso y su evolución. Puede ir ajustándose a medida que avanzamos.
              </div>
            </div>
            <div>
              <strong>¿Es solo relajación?</strong>
              <div style={{ lineHeight: 1.8 }}>
                No. Es una consulta que tiene en cuenta el sistema nervioso y cómo pueden estar relacionados los síntomas, la tensión y el estrés, desde un enfoque neurofuncional y adaptado a cada persona.
              </div>
            </div>
            <div>
              <strong>¿Cuándo se nota mejoría?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Cada persona y cada caso evolucionan de forma distinta, por lo que no podemos indicar un plazo concreto. Durante el seguimiento revisamos contigo la evolución y ajustamos el proceso cuando es necesario.
              </div>
            </div>
            <div>
              <strong>¿En qué se diferencia de Psicología?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Regulación del sistema nervioso está orientada especialmente a síntomas físicos como bruxismo, tinnitus, vértigos, migrañas o tensión persistente y se realiza de forma presencial. Psicología se centra principalmente en el acompañamiento psicológico y emocional. Si no sabes qué consulta elegir, te orientamos antes de reservar.
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
            src="/images/equipo/jose-manuel.webp"
            alt="José Manuel Gil Rueda"
            width="420"
            height="525"
            loading="lazy"
          />
          <div>
            <p className="svc-team-eyebrow">Quién te acompaña</p>
            <h2 className="svc-team-name">José Manuel Gil Rueda</h2>
            {/* Cada parte sin cortes internos; si la línea se parte, el "·" queda al final */}
            <p className="member-area">
              {["Psicólogo", "Regulación del sistema nervioso", "Enfoque neurofuncional"].map((part, i, arr) => (
                <span key={part}>
                  <span className="member-area-part">{part}{i < arr.length - 1 ? " ·" : ""}</span>
                  {i < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
            <p className="svc-team-sublabel">Formación complementaria</p>
            <ul className="member-credentials svc-team-credentials">
              <li>Licenciado en Ciencias de la Actividad Física y del Deporte (CAFD)</li>
              <li>Osteópata</li>
              <li>Formación en enfoques relacionados con el trauma y regulación del sistema nervioso</li>
            </ul>
          </div>
        </div>
      </section>

      <StickyWhatsApp message={DUDAS_MSG} />
    </main>
  );
}
