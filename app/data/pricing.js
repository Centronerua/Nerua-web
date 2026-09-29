// Tarifas de NERÚA (iniciales; pueden modificarse más adelante).
// Para cambiar un precio, una duración, una modalidad o un texto basta con editar este archivo:
// la sección "Consultas y precios" de la home se genera a partir de estos datos.
// Orden: Regulación del sistema nervioso → Psicología → Nutrición digestiva integrativa.

export const SERVICES = [
  {
    id: "regulacion",
    name: "Regulación del sistema nervioso",
    href: "/regulacion-bienestar-malaga",
    summary: "Bruxismo · tinnitus · migrañas · vértigos",
    rates: [{ label: "Sesión individual", duration: "60 min", price: 50 }],
    modality: "Presencial en Rincón de la Victoria · Online según el caso",
    reservaMsg: "Hola, me gustaría pedir cita para una primera sesión de regulación del sistema nervioso en Centro NERÚA.",
  },
  {
    id: "psicologia",
    name: "Psicología",
    href: "/acompanamiento-psicologico-malaga",
    summary: "Estrés · ansiedad · bloqueo emocional",
    rates: [{ label: "Sesión individual", duration: "60 min", price: 50 }],
    modality: "Presencial en Rincón de la Victoria · Online",
    reservaMsg: "Hola, me gustaría pedir cita para una primera sesión de acompañamiento psicológico en Centro NERÚA.",
  },
  {
    id: "nutricion",
    name: "Nutrición digestiva integrativa",
    href: "/nutricion-integrativa-malaga",
    summary: "Digestión · microbiota · SIBO",
    rates: [
      { label: "Primera valoración", duration: "60 min", price: 60 },
      { label: "Seguimiento", duration: "60 min", price: 50 },
    ],
    modality: "Presencial en Rincón de la Victoria · Online",
    reservaMsg: "Hola, me gustaría pedir cita para una primera sesión de nutrición digestiva integrativa en Centro NERÚA.",
  },
];

// Nota discreta bajo las tarifas, vinculada a Nutrición digestiva integrativa.
export const NUTRITION_NOTE = {
  title: "¿Necesitas un acompañamiento más continuado en nutrición?",
  text: "Después de la primera valoración podemos orientarte sobre las opciones de seguimiento que mejor encajen con tu caso.",
};

export function formatPrice(value) {
  return `${value} €`;
}
