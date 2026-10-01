import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Política de cambios y cancelaciones | Centro NERÚA",
  description: "Política de cambios y cancelaciones de citas de Centro NERÚA.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/politica-de-cancelaciones" },
};

export default function Page() {
  return (
    <main className="svc-page">
      <SiteHeader />

      <article className="legal">
        <h1 className="legal-h1">Política de cambios y cancelaciones</h1>

        <section className="legal-section">
          <p>
            Las citas pueden modificarse o cancelarse sin coste avisando con al menos 24 horas de antelación.
          </p>
          <p>
            En caso de cancelación con menos de 24 horas de antelación o de no asistencia, podrá cobrarse el importe íntegro de
            la sesión o, en caso de disponer de un bono, descontarse una sesión, salvo causa de fuerza mayor o circunstancia
            excepcional debidamente justificada.
          </p>
          <p>Agradecemos que cualquier cambio se comunique con la mayor antelación posible.</p>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
