import LeadForm from "./components/LeadForm";
import SiteHeader from "./components/SiteHeader";
import { CtaButtons, DudasButton, ReservaButton, StickyWhatsApp, whatsappHref, DUDAS_MSG, WHATSAPP_DISPLAY } from "./components/Cta";
import { SERVICES, FOLLOWUP_NOTE, formatPrice } from "./data/pricing";
import { FAQ } from "./data/faq";

export const metadata = {
  title: "Centro NERÚA | Psicología, sistema nervioso y nutrición digestiva en Rincón de la Victoria",
  description:
    "Centro NERÚA en Rincón de la Victoria, Málaga. Psicología, regulación del sistema nervioso con enfoque neurofuncional y nutrición digestiva integrativa. Atención presencial y online.",
};

// app/page.js

export default function Home() {

 return (
  <>

    <main style={{ fontFamily: "var(--font-sans), Montserrat, sans-serif", background: "#F5F1EB", color: "#3A3A3A" }}>
    
      <SiteHeader />

      {/* HERO */}
      <section className="hero">
        <p className="hero-eyebrow"><span className="eyebrow-text"><span className="nowrap">CENTRO NERÚA ·</span> <span className="nowrap">RINCÓN DE LA VICTORIA</span></span></p>

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
          alt="Centro NERÚA · espacio de consulta"
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
            credentials={["Licenciado en Ciencias de la Actividad Física y del Deporte (CAFD)", "Osteópata", "Formación en enfoques relacionados con el trauma y regulación del sistema nervioso"]}
            href="/regulacion-bienestar-malaga"
            photoLabel="Fotografía de José Manuel"
          />
          <TeamMember
            name="María José Martínez Granados"
            area="Nutrición digestiva integrativa"
            approach="Acompaña el malestar digestivo con un enfoque individualizado que integra alimentación, hábitos y contexto de cada persona."
            credentials={["Técnico Superior en Dietética", "Finalizando el Grado en Nutrición Humana y Dietética", "Formación especializada en microbiota y patologías digestivas"]}
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

      {/* CONSULTAS Y PRECIOS */}
      <section id="consultas" className="rates">
        <div className="rates-head">
          <p className="section-eyebrow">CONSULTAS Y PRECIOS</p>
          <h2 className="rates-title">¿Por dónde empezamos?</h2>
          <p className="rates-intro">Elige tu punto de partida. Si dudas, te orientamos.</p>
        </div>

        <div className="rates-grid">
          {SERVICES.map((svc) => (
            <article key={svc.id} className="rate">
              <h3 className="rate-name">{svc.name}</h3>
              <p className="rate-summary">{svc.summary}</p>

              <dl className="rate-list">
                {svc.rates.map((r) => (
                  <div key={r.label} className="rate-row">
                    <dt>
                      {r.label} <span className="rate-duration">· {r.duration}</span>
                    </dt>
                    <dd>{formatPrice(r.price)}</dd>
                  </div>
                ))}
              </dl>

              {/* Cada parte de la modalidad sin cortes internos; si no cabe, el corte cae tras el "·" */}
              <p className="rate-modality">
                {svc.modality.split(" · ").map((part, i, arr) => (
                  <span key={part}>
                    <span className="nowrap">{part}{i < arr.length - 1 ? " ·" : ""}</span>
                    {i < arr.length - 1 ? " " : ""}
                  </span>
                ))}
              </p>

              <div className="rate-actions">
                <ReservaButton message={svc.reservaMsg} />
                <a href={svc.href} className="text-link">Ver consulta →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="rates-note">
          <p className="rates-note-title">{FOLLOWUP_NOTE.title}</p>
          <p className="rates-note-text">{FOLLOWUP_NOTE.text}</p>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section id="preguntas" className="faq">
        <div className="faq-head">
          <p className="section-eyebrow">ANTES DE EMPEZAR</p>
          <h2 className="faq-title">Preguntas frecuentes</h2>
        </div>

        <div className="faq-list">
          {FAQ.map((item) => (
            <details key={item.q} className="faq-item">
              <summary className="faq-q">{item.q}</summary>
              <p className="faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contact">
        <div className="contact-head">
          <p className="section-eyebrow">CONTACTO</p>
          <h2 className="contact-title">Hablemos de tu caso</h2>
          <p className="contact-intro">
            Atención presencial en Rincón de la Victoria y online para personas de Málaga y otras localidades.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-brand">CENTRO NERÚA</p>
            <p className="contact-status">
              <span>
                <span className="nowrap">Nueva ubicación ·</span>{" "}
                <span className="nowrap">a partir del 1 de diciembre</span>
              </span>
            </p>
            {/* Sin mapa, «Cómo llegar» ni datos estructurados hasta que se autorice (ver CLAUDE.md, regla 8). */}
            <address className="contact-address">
              Calle Acebuche, 8 · Puerta 8<br />
              29730 Rincón de la Victoria (Málaga)
            </address>
            <p className="contact-mode">Atención presencial y online</p>

            <div className="contact-channel">
              <p className="contact-label">WhatsApp</p>
              <DudasButton className="btn" />
              <p className="contact-phone">
                <a href={whatsappHref(DUDAS_MSG)} target="_blank" rel="noreferrer">WhatsApp · {WHATSAPP_DISPLAY}</a>
              </p>
            </div>

            <div className="contact-channel">
              <p className="contact-label">Email</p>
              <a href="mailto:info@centronerua.com" className="contact-mail">info@centronerua.com</a>
            </div>
          </div>

          <div className="contact-form">
            <p className="contact-label">Formulario de contacto</p>
            <LeadForm />
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
