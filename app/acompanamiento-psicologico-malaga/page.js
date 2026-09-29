import SiteHeader from "../components/SiteHeader";
import { CtaButtons, StickyWhatsApp } from "../components/Cta";

const RESERVA_MSG = "Hola, me gustaría pedir cita para una primera sesión de acompañamiento psicológico en Centro NERÚA.";
const DUDAS_MSG = "Hola, me gustaría información sobre acompañamiento psicológico y sistema nervioso en Centro NERÚA.";

export const metadata = {
 title: "Acompañamiento psicológico en Málaga (presencial y online) | Centro NERÚA",
  description:
    "Acompañamiento psicológico en Málaga con enfoque integrador y regulación del sistema nervioso (neurología funcional). Estrés, ansiedad, bloqueo emocional y síntomas asociados. Presencial y online.",
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
      <SiteHeader badgeText="Presencial + Online" />

      <section style={{ ...section, paddingTop: "90px" }}>
       <h1 style={{ fontSize: "42px", marginTop: 0, marginBottom: 10 }}>
  Acompañamiento psicológico en <span style={{ color: "#C6A96B" }}>Málaga</span>
</h1>

      <p style={{ color: "#6B7D6D", fontWeight: 600, marginTop: 0, lineHeight: 1.7, maxWidth: 820 }}>
  Un espacio cercano y profesional para reducir estrés y ansiedad, salir del bloqueo y recuperar calma.
  Enfoque de terapia breve: sesiones orientadas a objetivos, prácticas y centradas en cambios reales.
  Trabajamos desde una mirada integradora (cuerpo, emoción y sistema nervioso) y utilizamos herramientas inspiradas en
  neurología funcional, explicadas de forma sencilla y aplicadas a tu caso. Presencial en Málaga y también online.
</p>
        <CtaButtons reservaMsg={RESERVA_MSG} dudasMsg={DUDAS_MSG} hideDudasOnMobile style={{ marginTop: 22 }} />
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>¿Para quién es?</h2>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
            <li>Estrés mantenido, ansiedad o sensación de alerta constante.</li>
            <li>Bloqueo emocional, irritabilidad, tristeza o desconexión.</li>
            <li>Dificultad para descansar, dormir o recuperar energía.</li>
            <li>Síntomas físicos ligados al estrés (tensión, malestar, sobrecarga).</li>
            <li>Experiencias que dejan huella en el cuerpo (trauma).</li>
          </ul>
        </div>
      </section>

      <section style={section}>
        <h2>Cómo trabajamos</h2>
        <p style={{ lineHeight: 1.8, maxWidth: 820 }}>
          Trabajamos desde una mirada integradora: emoción, cuerpo y sistema nervioso. Utilizamos herramientas de
          regulación y, cuando encaja, enfoques inspirados en <strong>neurología funcional</strong>, explicados de forma
          sencilla y aplicados a tu caso.
        </p>
        <p style={{ lineHeight: 1.8, maxWidth: 820 }}>
          El objetivo es recuperar calma, seguridad interna y capacidad de respuesta, con un acompañamiento empático,
          claro y profesional.
        </p>
      </section>

      <section style={section}>
        <div style={card}>
          <h2 style={{ marginTop: 0 }}>Preguntas frecuentes</h2>
          <div style={{ display: "grid", gap: 14 }}>
            <div>
              <strong>¿Online funciona?</strong>
              <div style={{ lineHeight: 1.8 }}>
                En muchos casos sí. Lo importante es el proceso, el marco de trabajo y la continuidad.
              </div>
            </div>
            <div>
              <strong>¿Cuántas sesiones necesito?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Depende del caso. En las primeras sesiones orientamos objetivos y un ritmo realista.
              </div>
            </div>
            <div>
              <strong>¿Es un enfoque cercano?</strong>
              <div style={{ lineHeight: 1.8 }}>
                Sí: buscamos que te sientas acompañado/a, comprendido/a y con claridad para avanzar paso a paso.
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
