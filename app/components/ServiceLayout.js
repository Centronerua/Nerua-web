// Estructura común de las páginas de servicio (Regulación, Psicología, Nutrición).
// Cada página aporta sus textos aprobados; aquí solo vive la composición visual compartida.
import { CtaButtons } from "./Cta";
import { formatPrice } from "../data/pricing";

// Parte un texto por " · " sin cortes internos; si no cabe, el corte cae tras el "·"
function Parts({ parts }) {
  return parts.map((part, i, arr) => (
    <span key={part}>
      <span className="nowrap">{part}{i < arr.length - 1 ? " ·" : ""}</span>
      {i < arr.length - 1 ? " " : ""}
    </span>
  ));
}

export function ServiceHero({ eyebrow, title, place, lead, modality, rates, reservaMsg, dudasMsg }) {
  return (
    <section className="svc-hero">
      <div className="svc-hero-inner">
        {eyebrow ? (
          <p className="section-eyebrow service-eyebrow">
            <span className="eyebrow-text"><Parts parts={eyebrow} /></span>
          </p>
        ) : null}
        <h1 className="service-h1 svc-h1">
          {title} <span className="svc-h1-place">{place}</span>
        </h1>
        {lead.map((line) => (
          <p key={line} className="svc-lead">{line}</p>
        ))}
        <CtaButtons reservaMsg={reservaMsg} dudasMsg={dudasMsg} hideDudasOnMobile style={{ marginTop: 30 }} />
        {/* Tarifa (desde app/data/pricing.js) y modalidad, integradas bajo "Pedir cita" */}
        <div className="svc-meta">
          {rates.map((r) => (
            <p key={r.label} className="svc-meta-price">
              {r.label} · {r.duration} · {formatPrice(r.price)}
            </p>
          ))}
          <p className="svc-meta-mode">{modality}</p>
        </div>
      </div>
    </section>
  );
}

export function ServiceSection({ title, children, className = "" }) {
  return (
    <section className={`svc-block ${className}`}>
      <div className="svc-block-inner">
        <h2 className="svc-h2">{title}</h2>
        <div className="svc-body">{children}</div>
      </div>
    </section>
  );
}

export function ServiceList({ items }) {
  return (
    <ul className="svc-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ServiceFaq({ items, reservaMsg, dudasMsg }) {
  return (
    <ServiceSection title="Preguntas frecuentes">
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.q} className="faq-item">
            <summary className="faq-q">{item.q}</summary>
            <p className="faq-a">{item.a}</p>
          </details>
        ))}
      </div>
      <CtaButtons reservaMsg={reservaMsg} dudasMsg={dudasMsg} style={{ marginTop: 36 }} />
    </ServiceSection>
  );
}

export function ServicePro({ photo, name, area, sublabel, credentials }) {
  return (
    <section className="svc-block">
      <div className="svc-block-inner svc-pro">
        <img className="svc-pro-photo" src={photo} alt={name} width="420" height="525" loading="lazy" />
        <div className="svc-pro-text">
          <p className="svc-team-eyebrow">Quién te acompaña</p>
          <h2 className="svc-pro-name">{name}</h2>
          <p className="member-area"><Parts parts={area} /></p>
          {sublabel ? <p className="svc-team-sublabel">{sublabel}</p> : null}
          <ul className="member-credentials svc-team-credentials">
            {credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
