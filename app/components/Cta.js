// Llamadas a la acción unificadas: "Reservar primera sesión" y "Tengo dudas → WhatsApp".
// Mientras no haya agenda online, la reserva se hace por WhatsApp con un mensaje específico.

export const WHATSAPP_NUMBER = "34637541937";

export const RESERVA_MSG = "Hola, me gustaría reservar una primera sesión en Centro NERÚA.";
export const DUDAS_MSG =
  "Hola, he visto la web de Centro NERÚA y me gustaría recibir información sobre mi caso";

export function whatsappHref(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function ReservaButton({ message = RESERVA_MSG, className = "btn" }) {
  return (
    <a href={whatsappHref(message)} target="_blank" rel="noreferrer" className={className} data-cta="reservar">
      Reservar primera sesión
    </a>
  );
}

export function DudasButton({ message = DUDAS_MSG, className = "btn-ghost" }) {
  return (
    <a href={whatsappHref(message)} target="_blank" rel="noreferrer" className={className} data-cta="dudas">
      Tengo dudas → WhatsApp
    </a>
  );
}

export function CtaButtons({ reservaMsg, dudasMsg, center = false, style }) {
  return (
    <div className={center ? "cta-row cta-row-center" : "cta-row"} style={style}>
      <ReservaButton message={reservaMsg} />
      <DudasButton message={dudasMsg} />
    </div>
  );
}

// Escritorio: botón flotante. Móvil: barra inferior con hueco reservado para no tapar contenido.
export function StickyWhatsApp({ message = DUDAS_MSG }) {
  const href = whatsappHref(message);
  return (
    <>
      <div className="mobile-cta-spacer" aria-hidden="true" />
      <a href={href} target="_blank" rel="noreferrer" className="wa-float" data-cta="dudas-flotante">
        Tengo dudas → WhatsApp
      </a>
      <div className="mobile-cta-bar">
        <a href={href} target="_blank" rel="noreferrer" className="wa-bar-btn" data-cta="dudas-barra">
          Tengo dudas → WhatsApp
        </a>
      </div>
    </>
  );
}
