// Metadatos comunes para compartir (Open Graph / WhatsApp / redes) y URL canónica.
// Cada página mantiene su title y description SEO; aquí solo se generan las etiquetas derivadas.

export const SITE_URL = "https://centronerua.com";
export const SITE_NAME = "Centro NERÚA";

// Imagen social: recorte de la fotografía de la recepción (versión retocada que conserva mobiliario y distribución; madera ajustada al tono real), 1200×630 en JPG para WhatsApp.
export const OG_IMAGE = {
  url: "/images/og/nerua-og-recepcion.jpg",
  width: 1200,
  height: 630,
  alt: "Recepción de Centro NERÚA en Rincón de la Victoria",
};

// En Next.js el openGraph de una página sustituye al del layout, por eso se genera completo aquí.
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

// Datos estructurados solo para la home: Organization y WebSite (sin dirección, teléfono ni datos de ubicación).
export const HOME_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: "NERÚA",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/images/marca/centro-nerua-logo-transparente.png`,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "NERÚA",
    url: `${SITE_URL}/`,
  },
];
