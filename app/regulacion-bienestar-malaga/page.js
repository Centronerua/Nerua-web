import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Regulación y bienestar en Málaga (presencial y online) | Centro NERÚA",
  description:
    "Regulación y bienestar en Málaga: bruxismo, tinnitus, vértigos, migrañas y tensión persistente con enfoque integrador y sistema nervioso. Presencial y online.",
};

export default function Page() {
  const whatsappLink =
    "https://wa.me/34637541937?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20regulaci%C3%B3n%20y%20bienestar%20(bruxismo%2C%20tinnitus%2C%20v%C3%A9rtigos)%20en%20Centro%20NER%C3%9AA.";

  const section = { maxWidth: "900px", margin: "auto", padding: "70px 20px" };
  const card = {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    border: "1px solid rgba(58,58,58,0.06)",
  };
  const btn = {
    background: "#6B7D6D",
    color: "white",
    padding: "10px 20px",
    borderRadius: "22px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
  };
  const btnGhost = {
    background: "transparent",
    color: "#6B7D6D",
    padding: "10px 20px",
    borderRadius: "22px",
    border: "1px solid rgba(107,125,109,0.6)",
    cursor: "pointer",
    fontWeight: 600,
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

        <div style={{ marginTop: 22, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <button style={btn}>Quiero orientación</button>
          </a>
          <a href="/#reserva" style={{ textDecoration: "none" }}>
            <button style={btnGhost}>Ver reserva</button>
          </a>
        </div>
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

          <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <button style={btn}>Escríbenos</button>
            </a>
            <a href="/" style={{ textDecoration: "none" }}>
              <button style={btnGhost}>Volver a la web</button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
