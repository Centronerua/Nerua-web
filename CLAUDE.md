# Centro NERÚA · web

## Reglas de marca permanentes (no negociables)

1. No modificar el logotipo de NERÚA (forma, proporciones, colores, composición ni tratamiento).
2. No modificar la paleta corporativa: crema `#F5F1EB`, verde salvia `#6B7D6D` y dorado `#C6A96B`. No introducir paletas alternativas.
3. No hacer un rebranding de NERÚA. Se eleva la marca existente; no se rediseña.
4. La serif editorial (Cormorant Garamond) solo se usa como complemento puntual (H1 del hero y, si encaja, algún titular editorial muy concreto). Nunca sustituye a la tipografía general, que es Montserrat.
5. No utilizar la palabra «clínica» hasta que se autorice expresamente.
6. No hacer promesas de curación ni afirmaciones médicas absolutas (evitar «curar», «resolver», «tratamos el origen»). El trabajo de NERÚA complementa, no sustituye, la atención médica u odontológica.
7. Usar preferentemente «enfoque neurofuncional». No presentar «neurología funcional» como especialidad médica.
8. No mencionar Rincón de la Victoria ni cambiar la ubicación actual (Málaga) hasta que se autorice expresamente.
9. Priorizar una estética boutique, editorial, sofisticada, serena y profesional, evitando la imagen de centro de bienestar genérico (nada de «encuentra tu equilibrio», «tu espacio de bienestar», «cuida cuerpo y mente»).
10. La presentación pública de José Manuel Gil Rueda prioriza psicología, trauma, regulación del sistema nervioso y enfoque neurofuncional. No mostrar «Osteópata» ni «Reflexólogo» ni asociar su perfil a masaje o terapia manual. No mencionar colegiación ni nº de colegiado hasta que se autorice.
11. No inventar ni completar titulaciones o formaciones del equipo: usar solo las confirmadas expresamente.

## Forma de trabajar

- Cambios siempre en una rama de trabajo; no hacer merge a `main` ni publicar sin aprobación explícita.
- Proponer y enseñar (capturas en escritorio y móvil) antes de cambiar textos o diseño.
- No cambiar precios, dirección, teléfonos ni textos principales sin autorización.

## Notas técnicas

- Next.js 14 (App Router). Tipografías cargadas con `next/font` en `app/layout.js`: `--font-sans` (Montserrat) y `--font-serif` (Cormorant Garamond).
- El logotipo del header (`.site-logo`) conserva su declaración tipográfica original y no debe tocarse.
- Formulario: `app/components/LeadForm.js` → `app/api/leads/route.js` → tabla `leads` de Supabase + webhook de Make (Webhook → Gmail). No cambiar tablas, claves ni el webhook sin autorización.
- Algunos archivos usan saltos de línea CRLF (`app/page.js`, `app/layout.js`, `styles/globals.css`): conservarlos al editar.
