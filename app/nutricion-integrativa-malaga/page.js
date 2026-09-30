import SiteHeader from "../components/SiteHeader";
import { StickyWhatsApp } from "../components/Cta";
import { ServiceHero, ServiceSection, ServiceList, ServiceFaq, ServicePro } from "../components/ServiceLayout";
import { SERVICES } from "../data/pricing";

const RESERVA_MSG = "Hola, me gustaría pedir cita para una primera sesión de nutrición digestiva integrativa en Centro NERÚA.";
const DUDAS_MSG = "Hola, me gustaría información sobre la consulta de nutrición digestiva integrativa en Centro NERÚA.";

// Tarifas leídas del mismo sitio que "Consultas y precios" de la home
const NUTRICION = SERVICES.find((s) => s.id === "nutricion");

export const metadata = {
  title: "Nutrición digestiva integrativa en Rincón de la Victoria (presencial y online) | Centro NERÚA",
  description:
    "Nutrición digestiva integrativa en Rincón de la Victoria, Málaga, y online: microbiota, SIBO, histamina, pérdida de peso y mejora de hábitos.",
};

const FAQ = [
  {
    q: "¿Es solo para problemas digestivos?",
    a: "No. Aunque existe una especial atención a salud digestiva, microbiota, SIBO y otros trastornos digestivos, también acompañamos procesos de pérdida de peso, mejora de hábitos y alimentación adaptada a las necesidades de cada persona.",
  },
  {
    q: "¿Trabajáis SIBO e histamina?",
    a: "Sí, dentro de un enfoque integrativo y personalizado. Te orientamos según tu caso y pruebas disponibles.",
  },
  {
    q: "¿Es solo dieta?",
    a: "No. También trabajamos hábitos, ritmo de vida y otros factores que influyen tanto en tu digestión como en tu alimentación diaria.",
  },
  {
    q: "¿Puedo hacer la consulta online?",
    a: "Sí. La consulta de nutrición puede realizarse de forma presencial en Rincón de la Victoria u online. Lo importante es el plan, el seguimiento y la continuidad.",
  },
];

export default function Page() {
  return (
    <main className="svc-page">
      <SiteHeader />

      <ServiceHero
        eyebrow={["SALUD DIGESTIVA", "MICROBIOTA", "HÁBITOS"]}
        title="Nutrición digestiva integrativa en"
        place="Rincón de la Victoria"
        lead={[
          "Acompañamiento nutricional integrativo con especial atención a la salud digestiva: hinchazón, microbiota, SIBO e histamina/histaminosis.",
          "También acompañamos procesos de pérdida de peso, mejora de hábitos y alimentación adaptada a cada persona.",
        ]}
        modality="Presencial en Rincón de la Victoria, Málaga · Online."
        rates={NUTRICION.rates}
        reservaMsg={RESERVA_MSG}
        dudasMsg={DUDAS_MSG}
      />

      <ServiceSection title="¿Para quién es?">
        {/* Lo digestivo es el área principal y diferencial; peso y hábitos, como acompañamiento adicional */}
        <p className="svc-group-label">Salud digestiva</p>
        <ServiceList
          items={[
            "Hinchazón, digestiones pesadas o malestar digestivo persistente.",
            "Microbiota y disbiosis.",
            "SIBO, incluido metano, y otros problemas digestivos.",
            "Sospecha de intolerancia a histamina / histaminosis.",
          ]}
        />
        <p className="svc-group-label">También te acompañamos en</p>
        <ServiceList
          items={[
            "Pérdida de peso, con un plan realista y adaptado a ti.",
            "Mejora de hábitos alimentarios.",
            "Alimentación individualizada según tus necesidades y tu contexto.",
          ]}
        />
      </ServiceSection>

      <ServiceSection title="Cómo trabajamos">
        <p>
          Te acompañamos con una estrategia personalizada y realista: alimentación, tolerancias, hábitos y contexto (estrés, descanso, ritmos).
          Buscamos claridad y progreso paso a paso, sin soluciones genéricas.
        </p>
      </ServiceSection>

      <ServiceFaq items={FAQ} reservaMsg={RESERVA_MSG} dudasMsg={DUDAS_MSG} />

      <ServicePro
        photo="/images/equipo/maria-jose.webp"
        name="María José Martínez Granados"
        area={["Nutrición digestiva integrativa"]}
        credentials={[
          "Técnico Superior en Dietética",
          "Finalizando el Grado en Nutrición Humana y Dietética",
          "Formación especializada en microbiota y patologías digestivas",
        ]}
      />

      <StickyWhatsApp message={DUDAS_MSG} />
    </main>
  );
}
