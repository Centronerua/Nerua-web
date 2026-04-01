import LeadForm from "./components/LeadForm";

// app/page.js
export default function Home() {
  
  const whatsappLink = "https://wa.me/34637541937";

  return (
    <main style={{ fontFamily: "Montserrat, sans-serif", background: "#F5F1EB", color: "#3A3A3A" }}>
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(245,241,235,0.9)",
          backdropFilter: "blur(6px)",
          padding: "18px 20px",
          zIndex: 10,
          borderBottom: "1px solid rgba(58,58,58,0.06)",
        }}
      >
        <nav style={{ display: "flex", justifyContent: "space-between", maxWidth: "1100px", margin: "auto", gap: 16 }}>
          <strong>NERÚA</strong>

          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href="#quehacemos" style={link}>Qué hacemos</a>
            <a href="#consultas" style={link}>Consultas</a>
            <a href="#equipo" style={link}>Equipo</a>
            <a href="#testimonios" style={link}>Testimonios</a>
            <a href="#reserva" style={link}>Reserva</a>
            <a href="#contacto" style={link}>Contacto</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "95px 20px 50px", maxWidth: "900px", margin: "auto" }}>
        <h1 style={{ fontSize: "44px", marginBottom: 10 }}>
          Centro <span style={{ color: "#C6A96B" }}>NERÚA</span>
        </h1>

        <p style={{ color: "#6B7D6D", marginTop: 0 }}>Espacio de bienestar integral en Málaga</p>

        <p style={{ marginTop: "24px", lineHeight: "1.7", maxWidth: 820, marginInline: "auto" }}>
          Bruxismo, migrañas, tinnitus, vértigos, digestiones difíciles o una sensación constante de estar en alerta.
          <br /><br />
          Puede que lleves tiempo intentando entender qué te pasa y que cada síntoma parezca distinto.
          <br /><br />
          En NERÚA trabajamos desde una visión integradora del cuerpo y el sistema nervioso para ayudarte a comprender qué está ocurriendo
          y recuperar tu equilibrio.
        </p>

        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#reserva" style={{ textDecoration: "none" }}>
            <button style={btn}>Reservar sesión</button>
          </a>
          <a href="#consultas" style={{ textDecoration: "none" }}>
            <button style={btnGhost}>Ver tipos de consulta</button>
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
          En NERÚA abordamos los problemas de salud desde una perspectiva integradora, teniendo en cuenta el sistema nervioso, el cuerpo y la historia de cada persona.
        </p>

        <p style={text}>
          Muchos síntomas no aparecen de forma aislada, sino que forman parte de procesos más amplios que el organismo ha ido desarrollando con el tiempo.
        </p>

        <p style={text}>
          Nuestro trabajo consiste en entender qué está sosteniendo ese proceso y acompañarte en un cambio real y progresivo, con un plan claro y personalizado.
        </p>
      </section>

      {/* TIPOS DE CONSULTA + PRECIOS */}
      <section id="consultas" style={section}>
        <h2>Tipos de consulta</h2>

        <p style={text}>
          En la reserva podrás elegir el tipo de consulta que mejor se adapte a tu situación.
        </p>

        <div style={{ display: "grid", gap: 18, marginTop: 18, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <PriceCard
            title="Nutrición digestiva integrativa"
            desc="Orientado a personas con malestar digestivo, inflamación abdominal, digestiones difíciles o alteraciones intestinales persistentes."
            first="49 €"
            follow="55 €"
            followLabel="Sesiones de seguimiento"
          />

          <PriceCard
            title="Acompañamiento psicológico"
            desc="Espacio para abordar situaciones personales que generan estrés, bloqueo o malestar emocional."
            first="49 €"
            follow="60 €"
            followLabel="Sesiones posteriores"
          />

          <PriceCard
            title="Regulación y bienestar"
            desc="Sesiones orientadas a síntomas como tinnitus, vértigos, bruxismo, tensión persistente, migrañas o estrés acumulado."
            first="49 €"
            follow="60 €"
            followLabel="Sesiones posteriores"
          />
        </div>

        <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#bonos" style={{ textDecoration: "none" }}>
            <button style={btn}>Consultar bonos</button>
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <button style={btnGhost}>Resolver dudas por WhatsApp</button>
          </a>
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

      {/* BONOS */}
      <section id="bonos" style={section}>
        <h2>Bonos</h2>
        <p style={text}>
          Si quieres un acompañamiento continuado, consulta nuestros bonos y opciones de seguimiento. Te orientamos para elegir el plan más adecuado según tu caso.
        </p>

        <div style={{ ...card, display: "flex", justifyContent: "space-between", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ maxWidth: 620 }}>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              Escríbenos y te explicamos las opciones disponibles (bonos y seguimiento) según el tipo de consulta.
            </p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <button style={btn}>Consultar bonos por WhatsApp</button>
          </a>
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

        <div style={{ display: "grid", gap: 18, marginTop: 18, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={card}>
            <h3 style={{ marginTop: 0 }}>José Manuel Gil Rueda</h3>
            <p style={{ margin: "8px 0 0", lineHeight: 1.7 }}>
              Psicólogo, CAFD y osteópata.
              <br /><br />
              Especializado en enfoques integrativos que trabajan la regulación del sistema nervioso y el bienestar global de la persona.
              Cuenta con formación en diferentes enfoques relacionados con el trauma y con métodos que integran cuerpo y mente desde la neurología funcional.
            </p>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0 }}>María José</h3>
            <p style={{ margin: "8px 0 0", lineHeight: 1.7 }}>
              Técnico Superior en Dietética y actualmente en formación en el Grado de Nutrición Humana.
              <br /><br />
              Especializada en nutrición digestiva integrativa y en el abordaje de alteraciones digestivas desde una perspectiva global.
              Cuenta con formación especializada en microbiota y patologías digestivas y continúa ampliando su formación en este ámbito.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" style={section}>
        <h2>Testimonios</h2>

        <div style={{ display: "grid", gap: 18, marginTop: 18, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <Testimonial
  name="Begoña"
  text="Era la primera vez que acudía a un centro con un enfoque integrador del sistema nervioso, y lo hice después de haber probado con otros profesionales sin encontrar una mejora estable. Tenía tensión muscular, insomnio y una sensación constante de desequilibrio. Tras la primera sesión noté un cambio enorme y esa misma noche dormí mucho mejor. Desde entonces sigo acudiendo cuando lo necesito. Estoy profundamente agradecida a Centro NERÚA."
/>

<Testimonial
  name="Marta"
  text="Gran profesional y mejor persona. Cuando tu vida se vuelve muy difícil, encontrar a alguien que te ayude a comprender lo que ocurre y a caminar con más calma no tiene precio. En mi caso, que es complejo, el acompañamiento ha sido muy importante. Además, tras cuatro sesiones trabajando el bruxismo y la tensión acumulada, he ido mejorando cada vez más y ahora estoy muchísimo mejor."
/>
    <Testimonial
  name="Bárbara"
  text="Tras años de malestar digestivo y varios tratamientos sin resultado, pude comprender mejor lo que estaba ocurriendo en mi caso. Con el acompañamiento en nutrición digestiva integrativa conseguí mejorar mi digestión y resolver un SIBO de metano junto con un problema de candidiasis. El proceso fue claro y me sentí muy acompañada en todo momento."
/>

<Testimonial
  name="Wilma"
  text="Después de mucho tiempo con inflamación abdominal y digestiones difíciles, el trabajo en nutrición digestiva integrativa me ayudó a identificar qué estaba influyendo en mi caso y a mejorar de forma progresiva. El proceso fue muy claro y el acompañamiento muy cercano."
/>
        </div>
      </section>

      {/* RESERVA */}
      <section id="reserva" style={section}>
        <h2>Reserva de sesión</h2>

        <p style={text}>
          Si sientes que algo de lo que has leído conecta contigo, puedes reservar una sesión.
          En la reserva podrás elegir el tipo de consulta que mejor se adapte a tu situación.
        </p>

        <div style={{ display: "grid", gap: 18, marginTop: 18, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div style={card}>
            <h3 style={{ marginTop: 0 }}>Opciones de reserva</h3>
            <ul style={list}>
              <li>Nutrición digestiva</li>
              <li>Acompañamiento psicológico</li>
              <li>Regulación y bienestar</li>
            </ul>

            <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button style={btn}>Reservar por WhatsApp</button>
              </a>
              <a href="#consultas" style={{ textDecoration: "none" }}>
                <button style={btnGhost}>Ver precios</button>
              </a>
            </div>
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0 }}>¿No sabes cuál elegir?</h3>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              Escríbenos y te orientamos para escoger el tipo de consulta que mejor encaje contigo.
            </p>

            <div style={{ marginTop: 14 }}>
              <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button style={btn}>Quiero orientación</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={section}>
        <h2>Contacto</h2>
     <div style={{ ...card, marginTop: 18 }}>
  <LeadForm />
</div>
        <div style={{ ...card, marginTop: 18 }}>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            <strong>Centro NERÚA</strong><br />
            Camino de los Almendrales 35<br />
            <span style={{ color: "#6B7D6D" }}>(dentro de AFA Málaga)</span><br />
            29013 Málaga
          </p>

          <div style={{ height: 14 }} />

          <p style={{ margin: 0, lineHeight: 1.8 }}>
            <strong>Email</strong><br />
            info@centronerua.com
          </p>

          <div style={{ height: 14 }} />

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              <button style={btn}>Hablar por WhatsApp</button>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Camino%20de%20los%20Almendrales%2035%2029013%20M%C3%A1laga%20AFA%20M%C3%A1laga"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button style={btnGhost}>Cómo llegar</button>
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp floating */}
      <a
        href={whatsappLink}
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
          fontWeight: "600",
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
function PriceCard({ title, desc, first, follow, followLabel }) {
  return (
    <div style={card}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ margin: "8px 0 14px", lineHeight: 1.7 }}>{desc}</p>

      <div style={{ borderTop: "1px solid rgba(58,58,58,0.08)", paddingTop: 14, display: "grid", gap: 10 }}>
        <div>
          <div style={{ color: "#6B7D6D", fontWeight: 600 }}>Primera consulta</div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>{first}</div>
        </div>

        <div>
          <div style={{ color: "#6B7D6D", fontWeight: 600 }}>{followLabel}</div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>{follow}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonial({ name, text }) {
  return (
    <div style={card}>
      <p style={{ marginTop: 0, lineHeight: 1.7 }}>
        “{text}”
      </p>
      <p style={{ marginBottom: 0, color: "#6B7D6D", fontWeight: 700 }}>
        — {name}
      </p>
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

const link = {
  textDecoration: "none",
  color: "#6B7D6D",
  fontSize: 14,
  fontWeight: 600,
};

const list = {
  margin: 0,
  paddingLeft: 18,
  lineHeight: 1.8,
};
