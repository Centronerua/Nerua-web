"use client";
import { useEffect, useRef, useState } from "react";
import { ReservaButton } from "./Cta";

const SERVICES = [
  { href: "/acompanamiento-psicologico-malaga", label: "Acompañamiento psicológico" },
  { href: "/nutricion-integrativa-malaga", label: "Nutrición digestiva integrativa" },
  { href: "/regulacion-bienestar-malaga", label: "Regulación y bienestar" },
];

const SECTIONS = [
  { href: "/#quehacemos", label: "Qué hacemos" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#contacto", label: "Contacto" },
];

export default function SiteHeader({ badgeText = "Presencial + Online" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;
    function onKey(e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    }
    function onClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen, servicesOpen]);

  const close = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="site-nav" aria-label="Principal">
        <div className="site-brand">
          <a href="/" className="site-logo">
            <strong>NERÚA</strong>
          </a>
          <span className="site-badge">{badgeText}</span>
        </div>

        <div className="site-links">
          <a href="/#quehacemos" className="site-link">Qué hacemos</a>

          <div className={servicesOpen ? "site-dropdown open" : "site-dropdown"}>
            <button
              type="button"
              className="site-link"
              aria-expanded={servicesOpen}
              aria-controls="menu-consultas"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Consultas ▾
            </button>
            <div className="site-dropdown-panel" id="menu-consultas">
              <div className="site-dropdown-box">
                {SERVICES.map((s) => (
                  <a key={s.href} href={s.href} className="site-dropdown-link" onClick={close}>
                    {s.label}
                  </a>
                ))}
                <a href="/#consultas" className="site-dropdown-link site-dropdown-muted" onClick={close}>
                  Ver precios
                </a>
              </div>
            </div>
          </div>

          {SECTIONS.slice(1).map((s) => (
            <a key={s.href} href={s.href} className="site-link">{s.label}</a>
          ))}
        </div>

        <div className="site-actions">
          <ReservaButton className="btn header-cta" />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <div id="menu-movil" className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
        <p className="mobile-menu-title">Consultas</p>
        {SERVICES.map((s) => (
          <a key={s.href} href={s.href} className="mobile-menu-link" onClick={close}>
            {s.label}
          </a>
        ))}
        <a href="/#consultas" className="mobile-menu-link mobile-menu-muted" onClick={close}>
          Ver precios
        </a>
        <div className="mobile-menu-sep" />
        {SECTIONS.map((s) => (
          <a key={s.href} href={s.href} className="mobile-menu-link" onClick={close}>
            {s.label}
          </a>
        ))}
        <span className="site-badge mobile-menu-badge">{badgeText}</span>
      </div>
    </header>
  );
}
