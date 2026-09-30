import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { TITULAR, LEGAL_UPDATED } from "../data/legal";

export const metadata = {
  title: "Política de privacidad | Centro NERÚA",
  description: "Política de privacidad de Centro NERÚA.",
  robots: { index: false, follow: true },
};

const MAIL = <a href={`mailto:${TITULAR.email}`}>{TITULAR.email}</a>;

export default function Page() {
  return (
    <main className="svc-page">
      <SiteHeader />

      <article className="legal">
        <h1 className="legal-h1">Política de privacidad</h1>

        <section className="legal-section">
          <h2>1. Responsable del tratamiento</h2>
          <ul>
            <li>
              Responsable: {TITULAR.name} ({TITULAR.tradeName})
            </li>
            <li>NIF: {TITULAR.nif}</li>
            <li>Domicilio del titular: {TITULAR.address}</li>
            <li>Email de contacto y de protección de datos: {MAIL}</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. Qué datos tratamos</h2>
          <p>Solo tratamos los datos que nos facilitas al contactar con nosotros:</p>
          <ul>
            <li>
              <strong>Formulario de contacto:</strong> nombre, email, teléfono (opcional), área sobre la que quieres información
              (opcional) y el mensaje que escribas.
            </li>
            <li>
              <strong>WhatsApp:</strong> tu número de teléfono, tu nombre de perfil y el contenido de la conversación.
            </li>
            <li>
              <strong>Email:</strong> tu dirección de correo y el contenido de tus mensajes.
            </li>
          </ul>
          <p>Nombre, email y mensaje son necesarios para poder responder a tu consulta a través del formulario.</p>
        </section>

        <section className="legal-section">
          <h2>3. Datos de salud</h2>
          <p>
            El formulario no te pide información sobre tu salud. Te recomendamos no incluir en el primer contacto información
            médica detallada. Si decides incluir en tu mensaje datos relacionados con tu salud, los trataremos únicamente para
            responder a tu consulta, sobre la base de tu consentimiento explícito.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Para qué usamos tus datos</h2>
          <ul>
            <li>Responder a tu consulta.</li>
            <li>
              Orientarte sobre el tipo de consulta que puede encajar mejor contigo y, si lo solicitas, gestionar una cita.
            </li>
          </ul>
          <p>No usamos tus datos para enviarte publicidad ni para elaborar perfiles.</p>
        </section>

        <section className="legal-section">
          <h2>5. Base legal</h2>
          <ul>
            <li>
              Tu consentimiento, que prestas al enviar el formulario o al escribirnos (art. 6.1.a del RGPD), y tu consentimiento
              explícito para los datos de salud que decidas incluir (art. 9.2.a del RGPD).
            </li>
            <li>
              Cuando solicitas una cita, la aplicación de medidas precontractuales a petición tuya (art. 6.1.b del RGPD).
            </li>
          </ul>
          <p>
            Puedes retirar tu consentimiento en cualquier momento escribiendo a {MAIL}, sin que ello afecte a la licitud del
            tratamiento anterior.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Cuánto tiempo conservamos tus datos</h2>
          <p>
            Si no llegas a ser paciente, conservaremos tus datos durante 12 meses desde la última comunicación y después los
            suprimiremos. Si inicias un proceso con nosotros, te informaremos de forma específica sobre el tratamiento de tus
            datos en ese contexto.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Quién accede a tus datos</h2>
          <p>
            Tus datos solo son tratados por el responsable y por las personas del equipo de Centro NERÚA autorizadas para
            gestionar las consultas, sujetas a deber de confidencialidad.
          </p>
          <p>
            No cedemos tus datos a terceros, salvo obligación legal. Para el funcionamiento de la web y la gestión de las
            consultas utilizamos los siguientes proveedores, que actúan como encargados del tratamiento o, en el caso de
            WhatsApp, como servicio que utilizas para contactarnos:
          </p>
          <ul>
            <li>Vercel: alojamiento del sitio web.</li>
            <li>Supabase: almacenamiento de los mensajes del formulario, en servidores de la Unión Europea (Irlanda).</li>
            <li>Make: envío automático de los mensajes del formulario a nuestro correo, desde su región europea.</li>
            <li>Namecheap (Private Email): alojamiento del buzón de correo {TITULAR.email}.</li>
            <li>Google (Gmail): gestión del correo de {TITULAR.email}.</li>
            <li>
              WhatsApp (Meta): mensajería, cuando decides contactar por esta vía. Su uso se rige también por la política de
              privacidad de WhatsApp.
            </li>
          </ul>
          <p>
            Si alguno de estos proveedores trata datos fuera del Espacio Económico Europeo, lo hace con las garantías previstas
            en el RGPD, como una decisión de adecuación o cláusulas contractuales tipo.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Tus derechos</h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y
            portabilidad escribiendo a {MAIL}, indicando el derecho que quieres ejercer.
          </p>
          <p>
            Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia
            Española de Protección de Datos (
            <a href="https://www.aepd.es" target="_blank" rel="noreferrer">
              www.aepd.es
            </a>
            ).
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Menores de edad</h2>
          <p>
            Si eres menor de 14 años, necesitaremos el consentimiento de tu madre, padre o tutor legal para tratar tus datos
            personales.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a accesos no autorizados,
            pérdida o alteración.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Cookies</h2>
          <p>
            Este sitio web no utiliza cookies de análisis ni publicitarias. Si en algún momento se incorporaran, se informaría
            previamente y se solicitaría tu consentimiento cuando sea necesario.
          </p>
        </section>

        <section className="legal-section">
          <h2>12. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política para adaptarla a cambios legales o del servicio. La versión vigente estará siempre
            publicada en esta página.
          </p>
        </section>

        <p className="legal-updated">Última actualización: {LEGAL_UPDATED}</p>
      </article>

      <SiteFooter />
    </main>
  );
}
