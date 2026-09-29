import LeadForm from "./components/LeadForm";
import SiteHeader from "./components/SiteHeader";
import { CtaButtons, DudasButton, StickyWhatsApp, whatsappHref } from "./components/Cta";

export const metadata = {
  title: "Centro NERÚA | Bienestar integral y acompañamiento psicológico en Málaga",
  description:
    "Centro NERÚA en Málaga. Bienestar integral, acompañamiento psicológico, nutrición digestiva, bruxismo, tinnitus, vértigos y tensión persistente desde una mirada humana e integradora.",
};

// app/page.js

export default function Home() {

 return (
  <>

    <main style={{ fontFamily: "var(--font-sans), Montserrat, sans-serif", background: "#F5F1EB", color: "#3A3A3A" }}>
    
      <SiteHeader badgeText="Presencial + Online" />

      {/* HERO */}
      <section className="hero">
        <p className="hero-eyebrow">CENTRO NERÚA · MÁLAGA</p>

        <h1 className="hero-h1">Entender antes de intervenir</h1>

        <p className="hero-sub">
          Regulación del sistema nervioso, enfoque neurofuncional, psicología y nutrición digestiva integrativa.
        </p>

        <p className="hero-text">
          Bruxismo, migrañas, tinnitus, vértigos o molestias digestivas pueden requerir una mirada más amplia. En NERÚA dedicamos tiempo a comprender cada caso y plantear un acompañamiento individualizado.
        </p>

        <CtaButtons center hideDudasOnMobile style={{ marginTop: 28 }} />

        <p style={{ marginTop: 18, marginBottom: 0 }}>
          <a href="#consultas" className="text-link">
            Ver consultas y precios ↓
          </a>
        </p>

        <p className="hero-boutique">
          <span>Valoración individual</span>
          <span className="hero-boutique-sep" aria-hidden="true">·</span>
          <span>Plan a medida</span>
          <span className="hero-boutique-sep" aria-hidden="true">·</span>
          <span>Seguimiento cercano</span>
        </p>
      </section>

      {/* HERO IMAGE */}
      <section style={{ padding: "0 20px 40px", maxWidth: "950px", margin: "auto" }}>
        <img
          src="/images/Hero-sillon.webp"
          alt="Centro NERÚA - espacio terapéutico en Málaga"
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
          En NERÚA abordamos los problemas de salud desde una perspectiva integradora, teniendo en cuenta el sistema nervioso, el cuerpo, la historia personal y el momento vital de cada persona.
        </p>

        <p style={text}>
          Muchos síntomas no aparecen de forma aislada, sino que forman parte de procesos más amplios que el organismo ha ido desarrollando con el tiempo.
        </p>

        <p style={text}>
          Nuestro trabajo consiste en entender qué está sosteniendo ese proceso y acompañarte en un cambio real y progresivo, con una mirada humana, profesional y personalizada.
        </p>
      </section>

      {/* TIPOS DE CONSULTA + PRECIOS */}
      <section id="consultas" style={section}>
        <h2>¿Por dónde empezamos?</h2>

      <p style={text}>
  Elige tu punto de partida. Si dudas, te orientamos.
</p>

        <div style={{ display: "grid", gap: 18, marginTop: 18, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
    

          <PriceCard
            title="Acompañamiento psicológico"
            href="/acompanamiento-psicologico-malaga"
            desc="Terapia breve y regulación del sistema nervioso para estrés, ansiedad, bloqueo emocional y síntomas físicos asociados."
            first="49 €"
            follow="60 €"
            followLabel="Sesiones posteriores"
          />
                    <PriceCard
            title="Nutrición digestiva integrativa"
            href="/nutricion-integrativa-malaga"
            desc="Orientado a personas con malestar digestivo, inflamación abdominal, digestiones difíciles, SIBO u otras alteraciones intestinales persistentes."
            first="49 €"
            follow="55 €"
            followLabel="Sesiones de seguimiento"
          />

          <PriceCard
            title="Regulación y bienestar"
            href="/regulacion-bienestar-malaga"
            desc="Sesiones orientadas a síntomas como tinnitus, vértigos, bruxismo, tensión persistente, migrañas o estrés acumulado."
            first="49 €"
            follow="60 €"
            followLabel="Sesiones posteriores"
          />
        </div>

        <CtaButtons style={{ marginTop: 18 }} />
      </section>

      {/* IMAGEN CALMA */}
      <section style={{ padding: "0 20px 70px", maxWidth: "950px", margin: "auto" }}>
        <img
          src="/images/espacio-consulta.webp"
          alt="Centro NERÚA - espacio de calma en Málaga"
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
              Escríbenos y te explicamos las opciones disponibles según el tipo de consulta y el proceso que quieras iniciar.
            </p>
          </div>
          <a
            href={whatsappHref("Hola, me gustaría información sobre los bonos de Centro NERÚA.")}
            target="_blank"
            rel="noreferrer"
            className="btn"
            data-cta="bonos"
          >
            Consultar bonos por WhatsApp
          </a>
        </div>
      </section>

      {/* IMAGEN DETALLE */}
      <section style={{ padding: "0 20px 60px", maxWidth: "950px", margin: "auto" }}>
        <img
          src="/images/detalle-mesa-planta.webp"
          alt="Centro NERÚA - espacio cuidado"
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
            <h3 style={{ marginTop: 0 }}>María José Martínez</h3>
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
            text="Gran profesional y mejor persona. Cuando tu vida se vuelve muy difícil, encontrar a alguien que te ayude a comprender lo que ocurre y a caminar con más calma no tiene precio. En mi caso, que es complejo, el acompañamiento ha sido muy importante. Además, tras varias sesiones trabajando el bruxismo y la tensión acumulada, he ido mejorando cada vez más y ahora estoy muchísimo mejor."
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

            <CtaButtons style={{ marginTop: 14 }} />
          </div>

          <div style={card}>
            <h3 style={{ marginTop: 0 }}>¿No sabes cuál elegir?</h3>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              Escríbenos y te orientamos para escoger el tipo de consulta que mejor encaje contigo.
            </p>

            <div style={{ marginTop: 14 }}>
              <DudasButton />
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
            Camino de los Almendales 35<br />
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
            <DudasButton className="btn" />

            <a
              href="https://www.google.com/maps/search/?api=1&query=Camino%20de%20los%20Almendales%2035%2029013%20M%C3%A1laga%20AFA%20M%C3%A1laga"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      <StickyWhatsApp />
   </main>
</>
);
}

/* COMPONENTES */
function PriceCard({ title, desc, first, follow, followLabel, href }) {
  return (
    <div style={card}>
      <h3 style={{ marginTop: 0 }}>
  {href ? (
    <a href={href} style={{ color: "#3A3A3A", textDecoration: "none" }}>
      {title}
    </a>
  ) : (
    title
  )}
</h3>
      <p style={{ margin: "8px 0 14px", lineHeight: 1.7 }}>{desc}</p>

      {href ? (
        <p style={{ margin: "0 0 14px" }}>
          <a href={href} style={{ color: "#6B7D6D", fontWeight: 700, textDecoration: "none" }}>
            Ver consulta →
          </a>
        </p>
      ) : null}

      <div style={{ borderTop: "1px solid rgba(58,58,58,0.08)", paddingTop: 14, display: "grid", gap: 10 }}>
        <div>
          <div style={{ color: "#6B7D6D", fontWeight: 600 }}>Primera sesión</div>
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

const list = {
  margin: 0,
  paddingLeft: 18,
  lineHeight: 1.8,
};
