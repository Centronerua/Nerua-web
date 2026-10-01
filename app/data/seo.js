// Metadatos comunes para compartir (Open Graph / WhatsApp / redes) y URL canónica.
// Cada página mantiene su title y description SEO; aquí solo se generan las etiquetas derivadas.

export const SITE_URL = "https://centronerua.com";
export const SITE_NAME = "Centro NERÚA";

// Imagen social: derivada de /images/Hero-sillon.webp (sin modificar el original), 1200×630 en JPG para WhatsApp.
export const OG_IMAGE = {
  url: "/images/og/nerua-og.jpg",
  width: 1200,
  height: 630,
  alt: "Centro NERÚA · sillón y lámpara en un espacio de consulta",
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
