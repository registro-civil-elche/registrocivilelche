# Agents.md — Reglas del Proyecto registrocivilelche.es

## SEO — Reglas Críticas (NUNCA violar)

### 1. Canonical Tags
- **NUNCA** poner un `<link rel="canonical">` estático en `index.html`. El canonical se gestiona dinámicamente con `react-helmet-async` en cada página/componente React.
- **CADA página** debe tener su propio `canonicalUrl` apuntando a su URL exacta (ej: `https://registrocivilelche.es/certificado-nacimiento`).
- **NUNCA** usar la URL de la homepage (`/`) como canonical de otra página.
- La página 404 (`NotFound`) **NO debe tener** canonical tag.
- Al crear una nueva página, **siempre** incluir `canonicalUrl` en `ServicePageTemplate` o `<link rel="canonical">` en `<Helmet>`.

### 2. Sitemap (`public/sitemap.xml`)
- **Cada vez que se cree una nueva página**, añadirla al sitemap con su `<loc>` correspondiente.
- **Cada vez que se modifique contenido significativo**, actualizar `<lastmod>` a la fecha actual en formato `YYYY-MM-DD`.
- Las URLs del sitemap deben coincidir **exactamente** con las `canonicalUrl` de cada página.
- Dominio base: `https://registrocivilelche.es` (sin trailing slash en subpáginas).

### 3. Meta Tags
- Cada página debe tener `<title>` y `<meta name="description">` únicos mediante `react-helmet-async`.
- Incluir Open Graph (`og:title`, `og:description`, `og:url`) en cada página.
- El `og:url` debe coincidir con el `canonicalUrl`.

### 4. Nuevas Páginas — Checklist Obligatorio
Al crear una nueva página de servicio:
1. ✅ Crear componente con `ServicePageTemplate` incluyendo `canonicalUrl`
2. ✅ Añadir ruta en `src/App.tsx` (lazy-loaded)
3. ✅ Añadir entrada en `public/sitemap.xml` con `lastmod` actual
4. ✅ Añadir enlace en la homepage si corresponde
5. ✅ Verificar que `canonicalUrl` coincide con la ruta en App.tsx y el `<loc>` del sitemap

### 5. index.html
- **NO** añadir `<link rel="canonical">` en `index.html`. Solo React Helmet gestiona canonicals.
- **NO** añadir `<title>` ni `<meta description>` estáticos que entren en conflicto con React Helmet (los que están son defaults que Helmet sobreescribe).
- **NO** añadir referencias a Lovable en metadata.

### 6. Dominio y URLs
- Dominio de producción: `https://registrocivilelche.es`
- Todas las URLs canónicas usan este dominio (no `registrocivilelche.lovable.app`).
- Sin trailing slash en URLs de subpáginas.

## Arquitectura

### Stack
- React + Vite + TypeScript + Tailwind CSS
- `react-helmet-async` para meta tags dinámicos
- `react-router-dom` para routing (SPA)
- shadcn/ui para componentes

### Patrón de Páginas de Servicio
- Todas las páginas de servicio usan `ServicePageTemplate` como componente base.
- Props obligatorias: `title`, `metaTitle`, `metaDescription`, `canonicalUrl`, `breadcrumbItems`, `description`, `whatIs`, `requirements`, `process`, `relatedServices`.
- Props opcionales: `faqs`, `additionalInfo`, `tips`, `icon`.

### Lazy Loading
- Solo `Home` se carga eagerly. Todas las demás páginas usan `lazy()` en `App.tsx`.

### 7. Longitud de Meta Tags
- `<title>`: **máximo 60 caracteres** (incluyendo espacios). Aplica tanto en `index.html` como en cada `metaTitle` de páginas React.
- `<meta name="description">`: **entre 50 y 160 caracteres**. Aplica también a `metaDescription` de páginas React y a `og:description` / `twitter:description`.
- Verificar la longitud antes de hacer commit; títulos/descripciones más largos se cortan en Google y bajan CTR.

### 8. Dirección Oficial y Datos de Contacto
- Dirección correcta del Registro Civil de Elche: **Calle Abogados de Atocha, 21, 03203 Elche, Alicante**.
- **NUNCA** usar "Calle Eucalipto, 21" (dirección antigua/incorrecta).
- Teléfono oficial: **966 91 70 96** (`+34 966 91 70 96` en JSON-LD).
- El JSON-LD `GovernmentOffice` en `index.html` debe incluir `streetAddress` y `telephone` correctos.
- Cualquier FAQ o texto visible que mencione la dirección debe usar la dirección correcta.

### 9. Jerarquía de Encabezados (H1 → H2 → H3)
- Cada página tiene exactamente **un `<h1>`** (el título principal del hero).
- Las secciones principales deben usar **`<h2>`**. No saltar de `<h1>` a `<h3>`.
- `CardTitle` de shadcn está configurado para renderizar `<h2>` en este proyecto: respetarlo y no sobrescribirlo a `<h3>` o `<div>`.
- Subsecciones dentro de una sección `<h2>` pueden usar `<h3>`.

### 10. Archivo /llms.txt
- Mantener `public/llms.txt` actualizado con todas las páginas públicas indexables del sitio.
- Cada vez que se cree o elimine una página, actualizar `llms.txt` y `sitemap.xml` a la vez.
