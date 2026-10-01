import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { StickyWhatsApp } from "../components/Cta";
import { ServiceHero, ServiceSection, ServiceList, ServiceFaq, ServicePro } from "../components/ServiceLayout";
import { SERVICES } from "../data/pricing";
import { pageMetadata } from "../data/seo";

const RESERVA_MSG = "Hola, me gustaría pedir cita para una primera sesión de regulación del sistema nervioso en Centro NERÚA.";
const DUDAS_MSG = "Hola, me gustaría información sobre la consulta de regulación del sistema nervioso en Centro NERÚA.";

// Tarifa leída del mismo sitio que "Consultas y precios" de la home
const REGULACION = SERVICES.find((s) => s.id === "regulacion");

export const metadata = pageMetadata({
  title: "Regulación del sistema nervioso en Rincón de la Victoria | Centro NERÚA",
  description:
    "Regulación del sistema nervioso en Rincón de la Victoria, Málaga: bruxismo, tinnitus, vértigos y migrañas. Enfoque neurofuncional. Consulta presencial.",
  path: "/regulacion-bienestar-malaga",
});

const FAQ = [
  {
    q: "¿Cómo es la primera sesión?",
    a: "La primera sesión permite conocer tu caso con detalle: qué síntomas tienes, cómo y cuándo aparecen y qué factores pueden estar influyendo. A partir de ahí te orientamos sobre cómo plantear el trabajo y los siguientes pasos.",
  },
  { q: "¿Cuánto dura una sesión?", a: "Las sesiones individuales duran 60 minutos." },
  {
    q: "¿Cuántas sesiones necesito?",
    a: "Depende de cada caso, de tus necesidades y de cómo vaya evolucionando el proceso. Tras la primera valoración podemos orientarte sobre el seguimiento que puede tener más sentido para ti, aunque puede ajustarse según la evolución. No existe un número cerrado de sesiones válido para todas las personas.",
  },
  {
    q: "¿Cada cuánto son las sesiones?",
    a: "La frecuencia se acuerda de forma individual según tus necesidades, el momento del proceso y su evolución. Puede ir ajustándose a medida que avanzamos.",
  },
  {
    q: "¿Es solo relajación?",
    a: "No. Es una consulta que tiene en cuenta el sistema nervioso y cómo pueden estar relacionados los síntomas, la tensión y el estrés, desde un enfoque neurofuncional y adaptado a cada persona.",
  },
  {
    q: "¿Cuándo se nota mejoría?",
    a: "Cada persona y cada caso evolucionan de forma distinta, por lo que no podemos indicar un plazo concreto. Durante el seguimiento revisamos contigo la evolución y ajustamos el proceso cuando es necesario.",
  },
  {
    q: "¿En qué se diferencia de Psicología?",
    a: "Regulación del sistema nervioso está orientada especialmente a síntomas físicos como bruxismo, tinnitus, vértigos, migrañas o tensión persistente y se realiza de forma presencial. Psicología se centra principalmente en el acompañamiento psicológico y emocional. Si no sabes qué consulta elegir, te orientamos antes de reservar.",
  },
];

export default function Page() {
  return (
    <main className="svc-page">
      <SiteHeader />

      <ServiceHero
        eyebrow={["SISTEMA NERVIOSO", "ENFOQUE NEUROFUNCIONAL"]}
        title="Regulación del sistema nervioso en"
        place="Rincón de la Victoria"
        lead={[
          "Consulta presencial orientada a casos relacionados con bruxismo, tensión mandibular, migrañas, tinnitus, vértigos o tensión persistente, desde la regulación del sistema nervioso y un enfoque neurofuncional.",
        ]}
        modality="Presencial en Rincón de la Victoria, Málaga."
        rates={REGULACION.rates}
        reservaMsg={RESERVA_MSG}
        dudasMsg={DUDAS_MSG}
      />

      <ServiceSection title="¿Para quién es?">
        <p className="svc-intro">Acompañamos casos relacionados con:</p>
        <ServiceList
          items={[
            "Bruxismo o tensión mandibular.",
            "Migrañas o cefaleas.",
            "Tinnitus.",
            "Vértigos o sensación de inestabilidad.",
            "Tensión muscular persistente.",
            "Otros síntomas físicos en los que el estrés, la tensión y la regulación del sistema nervioso puedan estar influyendo.",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Cómo trabajamos">
        <p>
          Empezamos con una primera valoración individual para comprender tu caso antes de plantear el trabajo: cómo son los
          síntomas, cuándo aparecen, tu historia y tu contexto.
        </p>
        <p>
          Desde un <strong>enfoque neurofuncional</strong>, tenemos en cuenta cómo pueden estar relacionados los síntomas, la
          tensión, el estrés y el sistema nervioso cuando tiene sentido en cada caso. El trabajo se adapta a cada persona.
        </p>
        <p>Durante el seguimiento revisamos contigo la evolución y ajustamos el proceso cuando es necesario.</p>
        <p className="svc-note">
          Esta consulta complementa, y no sustituye, la valoración y el seguimiento médico u odontológico cuando sean necesarios.
        </p>
      </ServiceSection>

      <ServiceFaq items={FAQ} reservaMsg={RESERVA_MSG} dudasMsg={DUDAS_MSG} />

      <ServicePro
        photo="/images/equipo/jose-manuel.webp"
        name="José Manuel Gil Rueda"
        area={["Psicólogo", "Regulación del sistema nervioso", "Enfoque neurofuncional"]}
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
