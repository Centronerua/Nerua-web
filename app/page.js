import LeadForm from "./components/LeadForm";
import SiteHeader from "./components/SiteHeader";
import { CtaButtons, DudasButton, StickyWhatsApp, whatsappHref, DUDAS_MSG } from "./components/Cta";

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

      {/* EN QUÉ PODEMOS ACOMPAÑARTE */}
      <section id="quehacemos" className="areas">
        <p className="section-eyebrow">ÁREAS DE TRABAJO</p>
        <h2 className="areas-title">En qué podemos acompañarte</h2>
        <p className="areas-intro">Tres áreas de trabajo que se integran de forma personalizada según cada caso.</p>

        <div className="areas-grid">
          <AreaCard
            href="/regulacion-bienestar-malaga"
            title="Regulación y bienestar"
            tagline="Sistema nervioso · Enfoque neurofuncional"
            items={["Bruxismo y tensión mandibular", "Migrañas y cefaleas tensionales", "Tinnitus y vértigos", "Tensión muscular persistente"]}
          />
          <AreaCard
            href="/acompanamiento-psicologico-malaga"
            title="Acompañamiento psicológico"
            tagline="Terapia breve · Estrés y estado emocional"
            items={["Estrés y ansiedad", "Bloqueo emocional", "Dificultad para descansar", "Experiencias que dejan huella"]}
          />
          <AreaCard
            href="/nutricion-integrativa-malaga"
            title="Nutrición digestiva integrativa"
            tagline="Digestión · Microbiota"
            items={["Hinchazón y digestiones difíciles", "SIBO y microbiota", "Sospecha de histaminosis", "Plan por fases y seguimiento"]}
          />
        </div>

        <p className="areas-outro">
          ¿No sabes por dónde empezar? En la primera sesión dedicamos tiempo a comprender tu caso y orientarte sobre el enfoque más adecuado.{" "}
          <a href={whatsappHref(DUDAS_MSG)} target="_blank" rel="noreferrer" className="text-link" data-cta="dudas-areas">
            Tengo dudas → WhatsApp
          </a>
        </p>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section id="enfoque" className="method">
        <p className="section-eyebrow">NUESTRO ENFOQUE</p>
        <h2 className="method-title">Cómo trabajamos</h2>
        <p className="method-intro">
          Cada caso requiere tiempo, escucha y una mirada amplia. Partimos de comprender qué está ocurriendo antes de decidir cómo acompañarte.
        </p>

        <ol className="method-steps">
          <li className="method-step">
            <span className="method-num" aria-hidden="true">01</span>
            <h3 className="method-step-title">Primera valoración</h3>
            <p className="method-step-text">
              Escuchamos tu historia, revisamos tus síntomas y buscamos entender qué factores pueden estar influyendo.
            </p>
          </li>
          <li className="method-step">
            <span className="method-num" aria-hidden="true">02</span>
            <h3 className="method-step-title">Plan individualizado</h3>
            <p className="method-step-text">
              Definimos un enfoque adaptado a tu situación, integrando las áreas que tengan sentido en tu caso.
            </p>
          </li>
          <li className="method-step">
            <span className="method-num" aria-hidden="true">03</span>
            <h3 className="method-step-title">Seguimiento cercano</h3>
            <p className="method-step-text">
              Revisamos la evolución y ajustamos el proceso cuando es necesario, sin protocolos rígidos.
            </p>
          </li>
        </ol>
      </section>

      {/* QUIÉN TE ACOMPAÑA */}
      <section id="equipo" className="team">
        <div className="team-head">
          <p className="section-eyebrow">EL EQUIPO</p>
          <h2 className="team-title">Quién te acompaña</h2>
          <p className="team-intro">
            NERÚA nace de una forma de trabajar cercana, rigurosa y muy individualizada. Dos áreas profesionales que se complementan para mirar cada caso con más amplitud.
          </p>
        </div>

        <div className="team-grid">
          <TeamMember
            name="José Manuel Gil Rueda"
            area="Psicólogo · Regulación del sistema nervioso · Enfoque neurofuncional"
            approach="Trabaja la relación entre síntomas físicos, tensión, estrés y estado emocional desde la regulación del sistema nervioso y un enfoque neurofuncional."
            credentials={["CAFD", "Formación en enfoques relacionados con el trauma y regulación del sistema nervioso"]}
            href="/regulacion-bienestar-malaga"
            photoLabel="Fotografía de José Manuel"
          />
          <TeamMember
            name="María José Martínez"
            area="Nutrición digestiva integrativa"
            approach="Acompaña el malestar digestivo con un enfoque individualizado que integra alimentación, hábitos y contexto de cada persona."
            credentials={["Técnico Superior en Dietética", "Formación especializada en microbiota y patologías digestivas"]}
            href="/nutricion-integrativa-malaga"
            photoLabel="Fotografía de María José"
            offset
          />
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section id="testimonios" className="voices">
        <div className="voices-head">
          <p className="section-eyebrow">EXPERIENCIAS</p>
          <h2 className="voices-title">Lo que cuentan quienes han pasado por NERÚA</h2>
          <p className="voices-intro">
            Cada proceso es único. Compartimos algunas experiencias reales de personas a las que hemos acompañado.
          </p>
        </div>

        <div className="voices-band">
          <Voice {...EXPERIENCES.lead} variant="lead" />
          <div className="voices-col voices-col-center">
            {EXPERIENCES.side.map((v) => (
              <Voice key={v.name} {...v} variant="accent" />
            ))}
          </div>
        </div>

        <div className="voices-band voices-band-mirror">
          <div className="voices-col">
            {EXPERIENCES.minor.map((v) => (
              <Voice key={v.name} {...v} variant="minor" />
            ))}
          </div>
          <div className="voices-col">
            {EXPERIENCES.medium.map((v) => (
              <Voice key={v.name} {...v} variant="medium" />
            ))}
          </div>
        </div>
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
// Experiencias reales (texto literal; "[…]" marca una omisión del original).
// Para añadir una nueva experiencia basta con incluirla en una de las listas:
// side (junto a la protagonista), minor o medium (segunda banda).
const EXPERIENCES = {
  lead: {
    name: "Marta",
    text: "Gran profesional y mejor persona. Cuando tu vida se vuelve muy difícil, encontrar a alguien que te ayude a comprender lo que ocurre y a caminar con más calma no tiene precio. En mi caso, que es complejo, el acompañamiento ha sido muy importante.",
  },
  side: [
    { name: "Bárbara", text: "El proceso fue claro y me sentí muy acompañada en todo momento." },
  ],
  minor: [
    {
      name: "Begoña",
      text: "Era la primera vez que acudía a un centro con un enfoque integrador del sistema nervioso […] Desde entonces sigo acudiendo cuando lo necesito. Estoy profundamente agradecida a Centro NERÚA.",
    },
  ],
  medium: [
    {
      name: "Wilma",
      text: "Después de mucho tiempo con inflamación abdominal y digestiones difíciles, el trabajo en nutrición digestiva integrativa me ayudó a identificar qué estaba influyendo en mi caso y a mejorar de forma progresiva. El proceso fue muy claro y el acompañamiento muy cercano.",
    },
  ],
};

function Voice({ name, text, variant }) {
  return (
    <figure className={`voice voice-${variant}`}>
      <blockquote>{text}</blockquote>
      <figcaption>{name}</figcaption>
    </figure>
  );
}

function TeamMember({ name, area, approach, credentials, href, photoLabel, offset }) {
  return (
    <article className={offset ? "member member-offset" : "member"}>
      {/* Espacio reservado para la fotografía real (retrato 4:5) */}
      <div className="member-photo" role="img" aria-label={photoLabel}>
        <span>{photoLabel}</span>
      </div>
      {/* Cada parte va sin cortes internos; si la línea se parte, el "·" queda al final */}
      <p className="member-area">
        {area.split(" · ").map((part, i, arr) => (
          <span key={part}>
            <span className="member-area-part">
              {part}
              {i < arr.length - 1 ? " ·" : ""}
            </span>
            {i < arr.length - 1 ? " " : ""}
          </span>
        ))}
      </p>
      <h3 className="member-name">{name}</h3>
      <p className="member-approach">{approach}</p>
      <ul className="member-credentials">
        {credentials.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <a href={href} className="text-link member-link">Conocer su enfoque →</a>
    </article>
  );
}

function AreaCard({ href, title, tagline, items }) {
  return (
    <a href={href} className="area-card">
      <h3 className="area-card-title">{title}</h3>
      <p className="area-card-tagline">{tagline}</p>
      <ul className="area-card-list">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      <span className="area-card-link">Ver consulta →</span>
    </a>
  );
}

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

