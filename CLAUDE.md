# Centro NERÚA · web

## Reglas de marca permanentes (no negociables)

1. No modificar el logotipo de NERÚA (forma, proporciones, colores, composición ni tratamiento).
2. No modificar la paleta corporativa: crema `#F5F1EB`, verde salvia `#6B7D6D` y dorado `#C6A96B`. No introducir paletas alternativas.
3. No hacer un rebranding de NERÚA. Se eleva la marca existente; no se rediseña.
4. La serif editorial (Cormorant Garamond) solo se usa como complemento puntual (H1 del hero y, si encaja, algún titular editorial muy concreto). Nunca sustituye a la tipografía general, que es Montserrat.
5. No utilizar la palabra «clínica» hasta que se autorice expresamente.
6. No hacer promesas de curación ni afirmaciones médicas absolutas (evitar «curar», «resolver», «tratamos el origen»). El trabajo de NERÚA complementa, no sustituye, la atención médica u odontológica.
7. Usar preferentemente «enfoque neurofuncional». No presentar «neurología funcional» como especialidad médica.
8. Ubicación: la ubicación física y el posicionamiento local principal de NERÚA es **Rincón de la Victoria** (hero «CENTRO NERÚA · RINCÓN DE LA VICTORIA», header «Rincón de la Victoria · Online», H1 y títulos SEO). Málaga se mantiene solo como referencia provincial y secundaria, sin renunciar a captar personas de Málaga capital y del resto de la provincia: las meta descriptions usan «Rincón de la Victoria, Málaga»; en contacto figura «Atención presencial en Rincón de la Victoria y online para personas de Málaga y otras localidades.»; cuando corresponda puede usarse «Centro NERÚA en Rincón de la Victoria, Málaga.». Nunca escribir «centro en Málaga» ni nada que haga pensar que existe una sede física en Málaga capital. No usar «La Cala del Moral». No inventar direcciones: la dirección postal exacta, «Cómo llegar» y los datos estructurados `LocalBusiness` se añadirán cuando la dirección esté confirmada. No indicar que el nuevo centro ya está abierto sin autorización. Las URLs actuales terminadas en `-malaga` se mantienen hasta que se autorice su migración.
9. Priorizar una estética boutique, editorial, sofisticada, serena y profesional, evitando la imagen de centro de bienestar genérico (nada de «encuentra tu equilibrio», «tu espacio de bienestar», «cuida cuerpo y mente»).
10. La presentación pública de José Manuel Gil Rueda prioriza psicología, trauma, regulación del sistema nervioso y enfoque neurofuncional. En su ficha profesional («Quién te acompaña») está autorizado mostrar «Osteópata» como credencial o formación complementaria, sin desplazar el posicionamiento principal ni convertir su perfil en uno de masaje o terapia manual. No mostrar «Reflexólogo». No mencionar colegiación ni nº de colegiado hasta que se autorice.
11. No inventar ni completar titulaciones o formaciones del equipo: usar solo las confirmadas expresamente.
12. Áreas de NERÚA: al describirlas, usar «Psicología · Regulación del sistema nervioso · Nutrición digestiva integrativa». No usar «regulación» sola para describir el servicio; en la página de Regulación y bienestar debe quedar claro «Sistema nervioso · Enfoque neurofuncional».

## Forma de trabajar

- Cambios siempre en una rama de trabajo; no hacer merge a `main` ni publicar sin aprobación explícita.
- Proponer y enseñar (capturas en escritorio y móvil) antes de cambiar textos o diseño.
- No cambiar precios, dirección, teléfonos ni textos principales sin autorización.

## Notas técnicas

- Next.js 14 (App Router). Tipografías cargadas con `next/font` en `app/layout.js`: `--font-sans` (Montserrat) y `--font-serif` (Cormorant Garamond).
- El logotipo del header (`.site-logo`) conserva su declaración tipográfica original y no debe tocarse.
- Formulario: `app/components/LeadForm.js` → `app/api/leads/route.js` → tabla `leads` de Supabase + webhook de Make (Webhook → Gmail). No cambiar tablas, claves ni el webhook sin autorización.
- Algunos archivos usan saltos de línea CRLF (`app/page.js`, `app/layout.js`, `styles/globals.css`): conservarlos al editar.
