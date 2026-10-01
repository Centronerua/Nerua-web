// Llamadas a la acción unificadas: "Pedir cita" y "Tengo dudas → WhatsApp".
// Mientras no haya agenda online, la reserva se hace por WhatsApp con un mensaje específico.

export const WHATSAPP_NUMBER = "34637541937";
// Mismo número, formateado para mostrarlo (p. ej. «+34 637 541 937»); se deriva del anterior para que nunca diverjan.
export const WHATSAPP_DISPLAY = `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2).replace(/(\d{3})(?=\d)/g, "$1 ")}`;

export const RESERVA_MSG = "Hola, me gustaría pedir cita para una primera sesión en Centro NERÚA.";
export const DUDAS_MSG =
  "Hola, he visto la web de Centro NERÚA y me gustaría recibir información sobre mi caso";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

function WhatsAppIcon() {
  return (
    <svg className="wa-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d={WA_PATH} />
    </svg>
  );
}

export function whatsappHref(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function ReservaButton({ message = RESERVA_MSG, className = "btn" }) {
  return (
    <a href={whatsappHref(message)} target="_blank" rel="noreferrer" className={className} data-cta="reservar">
      Pedir cita
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

// hideDudasOnMobile: en móvil la barra inferior ya ofrece WhatsApp, así que no se repite.
export function CtaButtons({ reservaMsg, dudasMsg, center = false, hideDudasOnMobile = false, style }) {
  return (
    <div className={center ? "cta-row cta-row-center" : "cta-row"} style={style}>
      <ReservaButton message={reservaMsg} />
      <DudasButton message={dudasMsg} className={hideDudasOnMobile ? "btn-ghost hide-mobile" : "btn-ghost"} />
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
        <WhatsAppIcon />
        Tengo dudas → WhatsApp
      </a>
      <div className="mobile-cta-bar">
        <a href={href} target="_blank" rel="noreferrer" className="wa-bar-btn" data-cta="dudas-barra">
          <WhatsAppIcon />
          Tengo dudas → WhatsApp
        </a>
      </div>
    </>
  );
}
