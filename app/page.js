// app/page.js
export default function Home() {
  return (
    <main style={{ fontFamily: "Montserrat, sans-serif", background: "#F5F1EB", color: "#3A3A3A" }}>
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(245,241,235,0.9)",
          backdropFilter: "blur(6px)",
          padding: "25px 20px",
          zIndex: 10,
          borderBottom: "1px solid rgba(58,58,58,0.06)",
        }}
      >
        <nav style={{ display: "flex", justifyContent: "space-between", maxWidth: "1100px", margin: "auto" }}>
          <strong>NERÚA</strong>

          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href="#quehacemos" style={link}>Qué hacemos</a>
            <a href="#tratamos" style={link}>Qué tratamos</a>
            <a href="#metodo" style={link}>Cómo trabajamos</a>
            <a href="#servicios" style={link}>Terapias</a>
            <a href="#proceso" style={link}>Proceso</a>
            <a href="#equipo" style={link}>Equipo</a>
            <a href="#contacto" style={link}>Contacto</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "110px 20px 55px", maxWidth: "900px", margin: "auto" }}>
        <h1 style={{ fontSize: "44px", marginBottom: 10 }}>
          Centro <span style={{ color: "#C6A96B" }}>NERÚA</span>
        </h1>

        <p style={{ color: "#6B7D6D", marginTop: 0 }}>Bienestar integral en Málaga</p>

        <p style={{ marginTop: "28px", lineHeight: "1.7", maxWidth: 820, marginInline: "auto" }}>
          Bruxismo, migrañas, tinnitus, vértigos, digestiones difíciles o una sensación constante de estar en alerta.
          <br /><br />
          Puede que lleves tiempo intentando entender qué te pasa y que cada síntoma parezca distinto.
          <br /><br />
          En NERÚA trabajamos desde una visión integradora del cuerpo y el sistema nervioso para ayudarte a comprender qué está ocurriendo
          y recuperar tu equilibrio.
        </p>

        <div style={{ marginTop: 28, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contacto" style={{ textDecoration: "none" }}>
            <button style={btn}>Pedir cita</button>
          </a>
          <a href="#servicios" style={{ textDecoration: "none" }}>
            <button style={btnGhost}>Ver terapias</button>
          </a>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section style={{ padding: "0 20px 40px", maxWidth: "950px", margin: "auto" }}>
        <img
          src="/images/Hero-sillon.webp"
          alt="Centro Nerúa - espacio terapéutico"
          style={{
            width: "100%",
            borderRadius: "18px",
            maxHeight: "320px",
            objectFit: "cover",
            display: "block",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
          }}
        />
      </section>

      {/* QUÉ HACEMOS */}
      <section id="quehacemos" style={section}>
        <h2>Qué hacemos</h2>

        <p style={text}>
          En NERÚA abordamos la salud desde una perspectiva integradora, teniendo en cuenta el sistema nervioso, el cuerpo y la historia de cada persona.
        </p>

        <p style={text}>
          Muchos síntomas no aparecen de forma aislada: forman parte de procesos más amplios que el organismo ha ido desarrollando con el tiempo.
        </p>

        <p style={text}>
          Nuestro trabajo consiste en entender qué está sosteniendo ese proceso y acompañarte en un cambio real y progresivo, con un plan claro y personalizado.
        </p>
      </section>

      {/* QUÉ TRATAMOS vs CÓMO TRABAJAMOS */}
      <section id="tratamos" style={section}>
        <h2>Qué tratamos y cómo lo trabajamos</h2>

        <p style={text}>
          Para que sea fácil orientarte, lo organizamos en dos partes: lo que suele traer a las personas al centro (síntomas/áreas)
          y las herramientas con las que intervenimos (método).
        </p>

        <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", marginTop: 22 }}>
          <div style={card}>
            <h3 style={{ marginTop: 0 }}>Qué tratamos</h3>
            <ul style={list}>
              <li>Bruxismo, tensión mandibular, cuello y sobrecarga</li>
              <li>Migrañas, cefaleas, tinnitus, vértigos</li>
              <li>Malestar digestivo, hinchazón, digestiones pesadas</li>
              <li>Ansiedad, estrés, hiperalerta, bloqueo</li>
              <li>Sueño, cansancio, irritabilidad</li>
              <li>Relaciones, autoestima, autoexigencia</li>
              <li>Impacto de trauma y experiencias difíciles</li>
            </ul>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0 }}>Cómo trabajamos</h3>
            <ul style={list}>
              <li>Regulación del sistema nervioso (cuerpo + recursos)</li>
              <li>Terapia breve (orientada a objetivos y cambios prácticos)</li>
              <li>Enfoque de trauma y apego (seguridad, ritmo, integración)</li>
              <li>Hipnosis terapéutica (cuando está indicada)</li>
              <li>Psicología integrativa</li>
              <li>Nutrición integrativa (digestivo/hábitos/energía)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IMAGEN CALMA */}
      <section style={{ padding: "0 20px 70px", maxWidth: "950px", margin: "auto" }}>
        <img
          src="/images/espacio-consulta.webp"
          alt="Centro Nerúa - espacio de calma"
          style={{
            width: "100%",
            borderRadius: "18px",
            maxHeight: "260px",
            objectFit: "cover",
            display: "block",
            boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
          }}
        />
      </section>

      {/* TERAPIAS / SERVICIOS */}
      <section id="servicios" style={section}>
        <h2>Terapias y áreas de acompañamiento</h2>

        <p style={text}>
          En NERÚA no trabajamos “por partes”: integramos cuerpo, sistema nervioso y experiencia. Si no sabes qué encaja contigo,
          te orientamos en la primera toma de contacto.
        </p>

        <div style={{ display: "grid", gap: 18, marginTop: 22, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <Card
            title="Trauma y apego"
            text="Acompañamiento especializado para integrar experiencias difíciles (hiperalerta, bloqueo, desconexión, relaciones, autoexigencia). Priorizamos seguridad, regulación y ritmo respetuoso."
          />
          <Card
            title="Terapia breve"
            text="Intervenciones enfocadas a objetivos para avanzar con claridad en menos tiempo. Útil en ansiedad puntual, bloqueos, decisiones, hábitos, miedos o momentos de cambio."
          />
          <Card
            title="Hipnosis terapéutica"
            text="Herramienta clínica para acceder a recursos internos, reducir síntomas y facilitar cambios. Se utiliza cuando procede y siempre dentro de un plan terapéutico (no es espectáculo)."
          />
          <Card
            title="Psicología integrativa"
            text="Un espacio seguro para comprender lo que te pasa, regular emociones y construir recursos. Ansiedad, autoestima, relaciones, duelo, procesos vitales y estrés sostenido."
          />
          <Card
            title="Nutrición integrativa"
            text="Plan realista y sostenible para mejorar digestión, energía y relación con la comida. Enfoque por hábitos, educación y estrategia personalizada (sin rigidez)."
          />
          <Card
            title="Bruxismo, migrañas y malestar digestivo"
            text="Abordaje integrador de tensión y síntomas persistentes conectando estrés, hábitos, descanso, cuerpo y sistema nervioso. Buscamos reducir carga y recuperar equilibrio."
          />
        </div>

        <div style={{ marginTop: "25px" }}>
          <a href="#contacto" style={{ textDecoration: "none" }}>
            <button style={btn}>Quiero orientación</button>
          </a>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section id="metodo" style={section}>
        <h2>Cómo trabajamos</h2>

        <p style={text}>
          Nuestro enfoque es práctico y personalizado. No buscamos “tapar” síntomas: buscamos entender qué los sostiene y ayudarte a recuperar regulación y bienestar de forma progresiva.
        </p>

        <div style={{ display: "grid", gap: 18, marginTop: 22, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <MiniCard
            title="Regulación primero"
            text="Creamos seguridad interna y recursos: respiración, cuerpo, ritmo, hábitos y señales. Sin regulación, todo cuesta más."
          />
          <MiniCard
            title="Intervención terapéutica"
            text="Terapia breve e hipnosis cuando está indicado para desbloquear bucles de ansiedad, miedo, evitación y respuestas automáticas."
          />
          <MiniCard
            title="Profundidad cuando hace falta"
            text="En trauma y apego trabajamos con ritmo, recursos y coherencia. El objetivo es reorganizar lo que sigue influyendo hoy."
          />
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" style={section}>
        <h2>Proceso</h2>

        <div style={{ display: "grid", gap: "18px", marginTop: "25px" }}>
          <Step title="1) Valoración y mapa del caso" text="Historia, síntomas, contexto y patrones (cuerpo, emociones, hábitos, estrés). Identificamos qué activa el sistema nervioso y qué mantiene el problema." />
          <Step title="2) Plan personalizado" text="Objetivos claros, prioridades y herramientas realistas. Definimos el camino más útil para tu caso." />
          <Step title="3) Seguimiento y ajustes" text="Revisiones para consolidar cambios y adaptar el plan. Buscamos mejoras sostenibles en tu día a día." />
        </div>
      </section>

      {/* IMAGEN DETALLE */}
      <section style={{ padding: "0 20px 60px", maxWidth: "950px", margin: "auto" }}>
        <img
          src="/images/detalle-mesa-planta.webp"
          alt="Centro Nerúa - espacio cuidado"
          style={{
            width: "100%",
            borderRadius: "18px",
            maxHeight: "260px",
            objectFit: "cover",
            display: "block",
            boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
          }}
        />
      </section>

      {/* EQUIPO */}
      <section id="equipo" style={section}>
        <h2>Quiénes somos</h2>

        <p style={{ maxWidth: "700px", lineHeight: "1.7" }}>
          NERÚA nace de la necesidad de abordar la salud desde una mirada más amplia, donde sistema nervioso, cuerpo y experiencia están conectados.
        </p>

        <div style={{ display: "grid", gap: 18, marginTop: 22, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={card}>
            <p style={{ marginTop: 0 }}>
              <strong><em>José Manuel Gil Rueda</em></strong><br />
              Psicólogo, CAFD y osteópata. Especializado en regulación del sistema nervioso y abordaje de síntomas persistentes desde un enfoque global.
            </p>
          </div>

          <div style={card}>
            <p style={{ marginTop: 0 }}>
              <strong><em>María José Martínez Granados</em></strong><br />
              Especializada en nutrición digestiva integrativa y microbiota, trabajando desde una visión funcional, cercana y personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={section}>
        <h2>Contacto</h2>

        <p style={{ marginBottom: 6 }}>📍 Málaga</p>
        <p style={{ marginTop: 0 }}>📧 info@centronerua.com</p>

        <a href="https://wa.me/34637541937" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
          <button style={btn}>Hablar por WhatsApp</button>
        </a>
      </section>

      {/* WhatsApp floating */}
      <a
        href="https://wa.me/34637541937"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "white",
          borderRadius: "30px",
          padding: "12px 18px",
          fontSize: "14px",
          fontWeight: "500",
          textDecoration: "none",
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}

/* COMPONENTES */
function Card({ title, text }) {
  return (
    <div style={card}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ marginBottom: 0, lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

function MiniCard({ title, text }) {
  return (
    <div style={{ ...card, padding: 20 }}>
      <h3 style={{ marginTop: 0, fontSize: 18 }}>{title}</h3>
      <p style={{ marginBottom: 0, lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

function Step({ title, text }) {
  return (
    <div style={card}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ marginBottom: 0, lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}

/* ESTILOS */
const section = { maxWidth: "900px", margin: "auto", padding: "80px 20px" };
const text = { marginBottom: "20px", lineHeight: "1.7", maxWidth: 820 };

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
};

const btnGhost = {
  background: "transparent",
  color: "#6B7D6D",
  padding: "10px 20px",
  borderRadius: "22px",
  border: "1px solid rgba(107,125,109,0.6)",
  cursor: "pointer",
};

const link = {
  textDecoration: "none",
  color: "#6B7D6D",
  fontSize: 14,
};

const list = {
  margin: 0,
  paddingLeft: 18,
  lineHeight: 1.8,
};
