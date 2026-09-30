import SiteHeader from "../components/SiteHeader";
import { CtaButtons, StickyWhatsApp } from "../components/Cta";
import { SERVICES, formatPrice } from "../data/pricing";

const RESERVA_MSG = "Hola, me gustaría pedir cita para una primera sesión de acompañamiento psicológico en Centro NERÚA.";
const DUDAS_MSG = "Hola, me gustaría información sobre la consulta de psicología en Centro NERÚA.";

// Tarifa leída del mismo sitio que "Consultas y precios" de la home
const PSICOLOGIA = SERVICES.find((s) => s.id === "psicologia");

export const metadata = {
 title: "Acompañamiento psicológico en Rincón de la Victoria | Centro NERÚA",
  description:
    "Acompañamiento psicológico en Rincón de la Victoria, Málaga: estrés, ansiedad, bloqueo emocional y experiencias difíciles. Presencial y online según el caso.",
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
       <h1 className="service-h1" style={{ fontSize: "42px", marginTop: 0, marginBottom: 10 }}>
  Acompañamiento psicológico en <span style={{ color: "#C6A96B" }}>Rincón de la Victoria</span>
</h1>

      <p style={{ color: "#6B7D6D", fontWeight: 600, marginTop: 0, lineHeight: 1.7, maxWidth: 820 }}>
  Acompañamiento psicológico cercano y profesional para momentos de estrés, ansiedad, bloqueo emocional o dificultad
  para descansar y desconectar. Cuando tiene sentido, se integra también un enfoque neurofuncional, explicado de forma
  sencilla y aplicado a tu caso.
  <br />
  Presencial en Rincón de la Victoria, Málaga · Online según el caso.
</p>
        <CtaButtons reservaMsg={RESERVA_MSG} dudasMsg={DUDAS_MSG} hideDudasOnMobile style={{ marginTop: 22 }} />
        {PSICOLOGIA.rates.map((r) => (
          <p key={r.label} className="svc-price">
            {r.label} · {r.duration} · {formatPrice(r.price)}
          </p>
        ))}
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>¿Para quién es?</h2>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
            <li>Estrés mantenido, ansiedad o sensación de alerta constante.</li>
            <li>Bloqueo emocional, irritabilidad, tristeza o desconexión.</li>
            <li>Dificultad para descansar, dormir o desconectar.</li>
            <li>Situaciones vitales que generan malestar o que cuesta gestionar.</li>
            <li>Experiencias que dejan huella o experiencias traumáticas.</li>
            <li>Tensión o síntomas físicos que acompañan al malestar emocional.</li>
          </ul>
        </div>
      </section>

      <section style={section}>
        <h2>Cómo trabajamos</h2>
        <p style={{ lineHeight: 1.8, maxWidth: 820 }}>
          La primera sesión nos permite conocerte, escuchar qué está ocurriendo y comprender tu situación y tus objetivos.
          A partir de ahí planteamos un acompañamiento adaptado a cada caso.
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: 820 }}>
          Trabajamos desde una mirada integradora que tiene en cuenta emoción, cuerpo y sistema nervioso. Según las
          necesidades de cada persona, José puede incorporar diferentes herramientas psicológicas, recursos de terapia breve,
          enfoques relacionados con trauma y, cuando tiene sentido, un <strong>enfoque neurofuncional</strong>.
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: 820 }}>
          El proceso se plantea de forma cercana, clara y profesional, revisando su evolución y ajustándolo cuando es necesario.
        </p>
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>Preguntas frecuentes</h2>
          <div style={{ display: "grid", gap: 14 }}>
            <div>
              <strong>¿Cómo es la primera sesión?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Es una primera toma de contacto para conocerte, escuchar qué te trae y comprender tu situación. A partir de ahí valoramos contigo cómo plantear el acompañamiento y los siguientes pasos.
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
                Depende de cada caso, de tus necesidades y de cómo vaya evolucionando el proceso. En la primera sesión podemos orientarte sobre el seguimiento que puede tener más sentido para ti, aunque este puede ajustarse según la evolución. No existe un número cerrado de sesiones válido para todas las personas.
              </div>
            </div>
            <div>
              <strong>¿Cada cuánto son las sesiones?</strong>
              <div style={{ lineHeight: 1.8 }}>
                La frecuencia se acuerda de forma individual según tus necesidades, el momento del proceso y su evolución. Puede ir ajustándose a medida que avanzamos.
              </div>
            </div>
            <div>
              <strong>¿Puedo hacer la consulta online?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Sí, en función del caso y del tipo de acompañamiento. Cuando el proceso es principalmente psicológico puede realizarse online; si requiere una valoración o trabajo neurofuncional presencial, te orientaremos antes de empezar.
              </div>
            </div>
            <div>
              <strong>¿En qué se diferencia de Regulación del sistema nervioso?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Psicología se centra principalmente en el acompañamiento psicológico y emocional. Regulación del sistema nervioso está orientada a síntomas como bruxismo, tinnitus, vértigos, migrañas o tensión persistente y se realiza de forma presencial. Si no sabes qué consulta elegir, te orientamos antes de reservar.
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
              {["Psicólogo", "Enfoque neurofuncional"].map((part, i, arr) => (
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
