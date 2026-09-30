// Pie común: marca, contacto y enlaces legales. Sin dirección: el domicilio legal solo figura en los textos legales.
import { whatsappHref, DUDAS_MSG, WHATSAPP_DISPLAY } from "./Cta";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-col">
          <p className="site-footer-brand">Centro NERÚA</p>
          <p className="site-footer-text">Rincón de la Victoria · Online</p>
        </div>

        <div className="site-footer-col site-footer-links">
          <a href="mailto:info@centronerua.com">info@centronerua.com</a>
          <a href={whatsappHref(DUDAS_MSG)} target="_blank" rel="noreferrer" data-cta="dudas-footer">
            WhatsApp<span className="site-footer-num"> · {WHATSAPP_DISPLAY}</span>
          </a>
        </div>

        <div className="site-footer-col site-footer-legal">
          <nav className="site-footer-links" aria-label="Información legal">
            <a href="/aviso-legal">Aviso legal</a>
            <a href="/politica-de-privacidad">Política de privacidad</a>
          </nav>
          <p className="site-footer-copy">© 2026 Centro NERÚA</p>
        </div>
      </div>
    </footer>
  );
}
