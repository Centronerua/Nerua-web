import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { TITULAR, LEGAL_UPDATED } from "../data/legal";

export const metadata = {
  title: "Aviso legal | Centro NERÚA",
  description: "Aviso legal del sitio web de Centro NERÚA.",
  robots: { index: false, follow: true },
};

// PENDIENTE: el apartado 2 (información profesional) se completará cuando se confirme la colegiación (ver app/data/legal.js).
export default function Page() {
  return (
    <main className="svc-page">
      <SiteHeader />

      <article className="legal">
        <h1 className="legal-h1">Aviso legal</h1>

        <section className="legal-section">
          <h2>1. Titular del sitio web</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y
            de Comercio Electrónico (LSSI), se informa de los datos del titular de este sitio web:
          </p>
          <ul>
            <li>Titular: {TITULAR.name}, profesional autónomo</li>
            <li>Nombre comercial: {TITULAR.tradeName}</li>
            <li>NIF: {TITULAR.nif}</li>
            <li>Domicilio del titular: {TITULAR.address}</li>
            <li>
              Email: <a href={`mailto:${TITULAR.email}`}>{TITULAR.email}</a>
            </li>
            <li>Sitio web: {TITULAR.web}</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. Información profesional</h2>
          <p>
            {TITULAR.name} es {TITULAR.degree}
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Objeto</h2>
          <p>
            Este sitio web ofrece información sobre los servicios de Centro NERÚA en las áreas de Psicología, Regulación del
            sistema nervioso y Nutrición digestiva integrativa, y permite contactar con el centro. El acceso y uso de este sitio
            web se rigen por el presente Aviso Legal.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Carácter de la información</h2>
          <p>
            Los contenidos de este sitio tienen carácter informativo y general. No constituyen un diagnóstico ni sustituyen la
            valoración, el diagnóstico o el tratamiento médico u odontológico. Cada caso requiere una valoración individual.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Propiedad intelectual e industrial</h2>
          <p>
            Los textos, imágenes, logotipo, diseño y demás contenidos de este sitio pertenecen a su titular o se utilizan con
            autorización. No se permite su reproducción, distribución, comunicación pública ni transformación sin autorización
            expresa, salvo en los casos permitidos por la ley.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Responsabilidad</h2>
          <p>
            El titular procura que la información del sitio sea correcta y esté actualizada, pero no garantiza la ausencia de
            errores ni la disponibilidad ininterrumpida del sitio. No se hace responsable del uso que se haga de la información
            publicada ni de los daños derivados de interrupciones o fallos técnicos ajenos a su control.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Enlaces externos</h2>
          <p>
            Este sitio puede incluir enlaces a servicios de terceros, como WhatsApp. El titular no es responsable del contenido
            ni de las condiciones de esos servicios, que se rigen por sus propias políticas.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Protección de datos</h2>
          <p>
            El tratamiento de los datos personales se explica en la <a href="/politica-de-privacidad">Política de privacidad</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Legislación aplicable</h2>
          <p>
            Este aviso legal se rige por la legislación española. Para cualquier controversia, serán competentes los juzgados y
            tribunales que correspondan conforme a la normativa aplicable, incluida la de protección de las personas
            consumidoras.
          </p>
        </section>

        <p className="legal-updated">Última actualización: {LEGAL_UPDATED}</p>
      </article>

      <SiteFooter />
    </main>
  );
}
