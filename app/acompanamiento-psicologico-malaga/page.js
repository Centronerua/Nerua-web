import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { StickyWhatsApp } from "../components/Cta";
import { ServiceHero, ServiceSection, ServiceList, ServiceFaq, ServicePro } from "../components/ServiceLayout";
import { SERVICES } from "../data/pricing";
import { pageMetadata } from "../data/seo";

const RESERVA_MSG = "Hola, me gustaría pedir cita para una primera sesión de acompañamiento psicológico en Centro NERÚA.";
const DUDAS_MSG = "Hola, me gustaría información sobre la consulta de psicología en Centro NERÚA.";

// Tarifa leída del mismo sitio que "Consultas y precios" de la home
const PSICOLOGIA = SERVICES.find((s) => s.id === "psicologia");

export const metadata = pageMetadata({
  title: "Acompañamiento psicológico en Rincón de la Victoria | Centro NERÚA",
  description:
    "Acompañamiento psicológico en Rincón de la Victoria, Málaga: estrés, ansiedad, bloqueo emocional y experiencias difíciles. Presencial y online según el caso.",
  path: "/acompanamiento-psicologico-malaga",
});

const FAQ = [
  {
    q: "¿Cómo es la primera sesión?",
    a: "Es una primera toma de contacto para conocerte, escuchar qué te trae y comprender tu situación. A partir de ahí valoramos contigo cómo plantear el acompañamiento y los siguientes pasos.",
  },
  {
    q: "¿Trabajáis experiencias traumáticas?",
    a: "Sí. José cuenta con formación en enfoques relacionados con trauma y regulación del sistema nervioso. El acompañamiento se adapta a cada persona y a su momento, sin forzar el proceso ni establecer un ritmo igual para todos.",
  },
  { q: "¿Cuánto dura una sesión?", a: "Las sesiones individuales duran 60 minutos." },
  {
    q: "¿Cuántas sesiones necesito?",
    a: "Depende de cada caso, de tus necesidades y de cómo vaya evolucionando el proceso. En la primera sesión podemos orientarte sobre el seguimiento que puede tener más sentido para ti, aunque este puede ajustarse según la evolución. No existe un número cerrado de sesiones válido para todas las personas.",
  },
  {
    q: "¿Cada cuánto son las sesiones?",
    a: "La frecuencia se acuerda de forma individual según tus necesidades, el momento del proceso y su evolución. Puede ir ajustándose a medida que avanzamos.",
  },
  {
    q: "¿Puedo hacer la consulta online?",
    a: "Sí, en función del caso y del tipo de acompañamiento. Cuando el proceso es principalmente psicológico puede realizarse online; si requiere una valoración o trabajo neurofuncional presencial, te orientaremos antes de empezar.",
  },
  {
    q: "¿En qué se diferencia de Regulación del sistema nervioso?",
    a: "Psicología se centra principalmente en el acompañamiento psicológico y emocional. Regulación del sistema nervioso está orientada a síntomas como bruxismo, tinnitus, vértigos, migrañas o tensión persistente y se realiza de forma presencial. Si no sabes qué consulta elegir, te orientamos antes de reservar.",
  },
];

export default function Page() {
  return (
    <main className="svc-page">
      <SiteHeader />

      <ServiceHero
        eyebrow={["ESTRÉS", "ANSIEDAD", "BLOQUEO EMOCIONAL"]}
        title="Acompañamiento psicológico en"
        place="Rincón de la Victoria"
        lead={[
          "Acompañamiento psicológico cercano y profesional para momentos de estrés, ansiedad, bloqueo emocional o dificultad para descansar y desconectar. Cuando tiene sentido, se integra también un enfoque neurofuncional, explicado de forma sencilla y aplicado a tu caso.",
        ]}
        modality="Presencial en Rincón de la Victoria, Málaga · Online según el caso."
        rates={PSICOLOGIA.rates}
        reservaMsg={RESERVA_MSG}
        dudasMsg={DUDAS_MSG}
      />

      <ServiceSection title="¿Para quién es?">
        <ServiceList
          items={[
            "Estrés mantenido, ansiedad o sensación de alerta constante.",
            "Bloqueo emocional, irritabilidad, tristeza o desconexión.",
            "Dificultad para descansar, dormir o desconectar.",
            "Situaciones vitales que generan malestar o que cuesta gestionar.",
            "Experiencias que dejan huella o experiencias traumáticas.",
            "Tensión o síntomas físicos que acompañan al malestar emocional.",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Cómo trabajamos">
        <p>
          La primera sesión nos permite conocerte, escuchar qué está ocurriendo y comprender tu situación y tus objetivos.
          A partir de ahí planteamos un acompañamiento adaptado a cada caso.
        </p>
        <p>
          Trabajamos desde una mirada integradora que tiene en cuenta emoción, cuerpo y sistema nervioso. Según las
          necesidades de cada persona, José puede incorporar diferentes herramientas psicológicas, recursos de terapia breve,
          enfoques relacionados con trauma y, cuando tiene sentido, un <strong>enfoque neurofuncional</strong>.
        </p>
        <p>El proceso se plantea de forma cercana, clara y profesional, revisando su evolución y ajustándolo cuando es necesario.</p>
      </ServiceSection>

      <ServiceFaq items={FAQ} reservaMsg={RESERVA_MSG} dudasMsg={DUDAS_MSG} />

      <ServicePro
        photo="/images/equipo/jose-manuel.webp"
        name="José Manuel Gil Rueda"
        area={["Psicólogo", "Enfoque neurofuncional"]}
        sublabel="Formación complementaria"
        credentials={[
          "Licenciado en Ciencias de la Actividad Física y del Deporte (CAFD)",
          "Osteópata",
          "Formación en enfoques relacionados con el trauma y regulación del sistema nervioso",
        ]}
      />

      <SiteFooter />

      <StickyWhatsApp message={DUDAS_MSG} />
    </main>
  );
}
