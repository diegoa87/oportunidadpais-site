# Oportunidad País · Sitio web v1.10

**Stack:** HTML estático multi-página + CSS vanilla + JS vanilla. Sin build step. Sin frameworks.

---

## 📋 Changelog

**v1.10 (Julio 2026):**
- ✅ **Cap 6 y Cap 9 mapeados a sus YouTube IDs reales** — identificados los 2 videos faltantes en la playlist de YouTube:
  - `w6zXPnNhyzI` = **C6 Varinka Farren** (Hub APTA, transferencia tecnológica)
  - `QoWBA62rA1w` = **C9 Cristóbal Aravena Concha** (Abastible, propósito PYME)
- ✅ Total: **9 capítulos publicados** (C1-C9), 3 en producción (C10-C12).
- ✅ Personas nuevas con data real verificada:
  - **Varinka Farren**, Directora ejecutiva de Hub APTA · Premio Her Global 2026 · Gestora Tecnológica de Chile 2016 · LinkedIn `vfarren`
  - **Cristóbal Aravena Concha**, Líder de Propósito y Relacionamiento de Abastible · Ingeniero Comercial UC · LinkedIn `cristóbal-aravena-concha-16a82b117`
- ✅ Cada persona ahora tiene `keyPoints[]` (3 ideas clave específicas, no genéricas).
- ✅ Hero del home ahora muestra el **último episodio publicado** (C9) en vez del placeholder C12. Personas del hero son los **5 guests más recientes** (no más slugs ficticios).
- ✅ Stat "capítulos publicados" se calcula automáticamente desde data.js (9 actualmente).
- ✅ Eliminado **Google Podcasts** del footer (servicio descontinuado en 2024).
- ✅ Readme refleja v1.10.

**v1.9 (Julio 2026):**
- ✅ Auditoría completa de voseo (variant argentino). Arreglados **15 usos** encontrados en data.js, persona.html, reportes.html, capitulos.html, README.md.
- ✅ Reemplazos: formas voseantes → formas neutras (conoces, tienes, quieres, escríbenos, cuéntanos, para ti, Busca, Mira, etc.).
- ✅ Resuelta duplicación de keyIdea entre Luz María García y Carolina García Berguecio. Carolina ahora tiene frase propia: *"Donde hay pertenencia, sube la producción, baja el ausentismo y mejora la innovación."*
- ✅ Auditoría ampliada con marcadores regionales argentinos — cero matches en HTML/JS.

**v1.8 (Julio 2026):**
- ✅ **Personas actualizadas con data real**. Reemplazadas las 12 personas ficticias por las personas reales del podcast encontradas en YouTube.
- ✅ LinkedIn URLs reales para los 7 guests confirmados en ese momento (Justo Vargas, Jeannette Escudero, Francisco Mardones, Luz María García, Elizabeth Cameron, Camila Forno, Carolina García Berguecio).
- ✅ Bios basadas en datos reales de cada guest (formación, rol actual, trayectoria).
- ✅ Auditoría de links en `reportes.html`. Arreglados: OECD (`/en/` en lugar de `/es/`), CMF NCG 461 (URL actualizada), ENTEL (informacioncorporativa.entel.cl), CAP (`/en/sustainability/`), LSEG/Refinitiv (URL correcta), SQM (IR reports page).
- ✅ Cada capítulo conocido apunta a la persona real según YouTube. (v1.10 completó C6 y C9 que faltaban.)

**v1.7 (Julio 2026):**
- ✅ `reportes.html` reescrito de cero: ya no es "estamos construyendo reportes", ahora es **un directorio curado**.
- ✅ 6 fuentes oficiales y reguladoras (CMF NCG 461, Memorias Integradas, Bolsa de Santiago DJSI / IPSA ESGT, MMA, OCDE).
- ✅ 6 agencias de rating independientes (MSCI, Sustainalytics, CDP, S&P CSA, ISS ESG, Refinitiv).
- ✅ 8 empresas chilenas que publican reportes ESG (Falabella, CMPC, SQM, BHP, ENTEL, LATAM, CAP, Parque Arauco).
- ✅ 4 comunidades y observatorios (Pacto Global Chile, Acción Empresas, Diario Sustentable, Chile Sustentable).
- ✅ Nuevo bloque "Cómo leer un reporte ESG en 30 minutos" — 4 pasos accionables para entrar rápido.
- ✅ Cross-link con los capítulos del podcast donde se tocó ESG (C5 BHP, C7 Falabella, C8 Inclusión).
- ✅ CTA: "Falta algo en este índice?" con wzp pre-armado de sugerencia.

**v1.6 (Junio 2026):**
- ✅ Nuevo campo `linkedinUrl` + `gender` por persona.
- ✅ Badge LinkedIn azul en la foto de cada persona (persona.html y personas.html).
- ✅ Bloque "CONECTÁ CON ÉL/ELLA" en persona.html con dos CTAs: **Seguirlo/la en LinkedIn** y **Agradecer por WhatsApp** (este último abre un mensaje predirigido al wzp del podcast agradeciendo por el capítulo con esa persona).
- ✅ Texto del CTA es gender-aware: "seguilo/seguiLA" y "sumar a él/ella" según `gender`.

**v1.5 (Junio 2026):**
- ✅ Nuevo campo `whyKnow` por persona — argumento de una o dos frases para explicar por qué vale la pena conocer a cada invitado.
- ✅ Bloque destacado "POR QUÉ HAY QUE CONOCERLA" en la página individual de cada persona.
- ✅ Versión corta del mismo argumento en la card de `personas.html` (italic con divider punteado).

**v1.4 (Junio 2026):**
- ✅ Links reales de YouTube para los capítulos publicados (1-5, 7, 8)
- ✅ Spotify show URL real: `https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ`
- ✅ **Eliminado Apple Podcasts** — el podcast no está disponible ahí
- ✅ Player del capítulo ahora muestra: YouTube + Spotify + Compartir (wzp)

**v1.3 (Junio 2026):**
- ✅ Eliminado voseo argentino en todo el copy (conoces/tienes/puedes/quieres/dime/escríbeme/etc.)
- ✅ Eliminada sección "Recomendar" — todo el flujo va directo a WhatsApp
- ✅ Eliminado `/ranking.html` y todas sus referencias
- ✅ Creado `/reportes.html` (Reportes ESG, en construcción)
- ✅ Avatares de personas ahora cargan **foto real** (Pravatar como placeholder, reemplazable con URL real)
- ✅ Nav actualizado: Personas · Capítulos · Reportes · Sobre
- ✅ Floating CTA: "Escríbenos por WhatsApp"

**v1.2 (Junio 2026):**
- ✅ Newsletter integrado con CRM agentsmind
- ✅ Captura automática de UTMs
- ✅ Estados del form: idle / loading / success / error

**v1.1 (Junio 2026):**
- ✅ Formularios redirigen a WhatsApp (`https://w.app/fqbnbn`)
- ✅ SEO meta tags completos
- ✅ JSON-LD para `PodcastSeries`
- ✅ Avatares con tratamiento editorial (ring + accent hover)
- ✅ Player block rediseñado

---

## 🗂 Estructura

```
web/
├── index.html              Home
├── personas.html           Grid de personas (con fotos reales)
├── persona.html            Detalle (?slug=)
├── capitulos.html          Grid de capítulos
├── capitulo.html           Detalle con player + wzp share
├── reportes.html           Reportes ESG (en construcción)
├── sobre.html              Diego + Desafío Latam
├── assets/
│   ├── css/
│   │   ├── tokens.css      Variables (color, type, spacing)
│   │   ├── reset.css
│   │   └── main.css        Componentes + páginas
│   ├── js/
│   │   ├── data.js         Personas + capítulos (12 c/u)
│   │   └── main.js         Filtros + nav + newsletter
│   └── brand/              SVGs del logo (8 archivos)
└── README.md
```

---

## 📧 Integración WhatsApp

Todos los CTAs de participación van directo a WhatsApp: `https://w.app/fqbnbn`

**Formularios eliminados** — los reemplazos son links directos. La sección `/recomendar.html` no existe más.

**Compartir capítulo por wzp** — Cada capítulo tiene su propio `shareText` que se prepende a la URL actual con `Helpers.wzpUrlForCap(c, pageUrl)`. Genera un link tipo:

```
https://wa.me/?text=Carolina%20Garc%C3%ADa%3A%20incluir%20no%20es%20caridad%2C%20es%20productividad.%20Cap%2012%20de%20Oportunidad%20Pa%C3%ADs.%20https%3A%2F%2Foportunidadpais.cl%2Fcapitulo.html%3Fnum%3D12
```

Para apuntar a un número de WhatsApp específico en vez de selector libre, cambiá `wa.me/` por `wa.me/569XXXXXXXX`.

---

## 🖼 Fotos de personas

Cada persona tiene un campo `photoUrl` en `data.js`. Hoy está en `null`, así que el sitio usa **Pravatar** (`https://i.pravatar.cc/600?u={slug}`) como placeholder — un retrato random pero consistente por persona.

**Para usar fotos reales:**

```js
// assets/js/data.js
{
  slug: 'carolina-garcia',
  photoUrl: 'https://oportunidadpais.cl/assets/photos/carolina-garcia.jpg',
  // ... resto
}
```

Si la imagen falla, JS hace fallback automático a iniciales. Formato recomendado: **600×600 JPG/WebP**.

---

## 🎧 Links de plataformas

**El podcast NO está en Apple Podcasts.** Solo en YouTube + Spotify.

Cada capítulo tiene 2 URLs en `data.js`:

| Campo | Qué es | Ejemplo |
|---|---|---|
| `spotifyUrl` | Link al show de Spotify (no hay episode IDs públicos) | `https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ` |
| `youtubeUrl` | Link directo al episodio en YouTube | `https://www.youtube.com/watch?v=aYCqxOal1uk` |
| `shareText` | Texto pre-llenado para wzp | `"Justo Miguel Vargas: la IA dejó de ser exploratoria, ahora es ejecución. Cap 1 de Oportunidad País."` |

**Playlist oficial de YouTube:** `https://youtube.com/playlist?list=PLFgaQL-UJJiVNDg8Ro7NBEq6opW1amO33`
**Canal de YouTube:** `https://www.youtube.com/@academiadesafiolatam`
**Show de Spotify:** `https://open.spotify.com/show/2nGzjakwUUOf7AAqui0TnQ`

---

## 📧 Newsletter (agentsmind CRM)

El form de newsletter (en `/`) está conectado al CRM agentsmind.

**Endpoint:** `https://crm.agentsmind.ai/api/form-submit/a6622847-98f1-4842-9f78-9228cf9b7783`

**Payload:**
```json
{
  "email": "...", "name": "...", "source": "oportunidadpais.cl",
  "page": "/", "referrer": "...",
  "subscribed_at": "ISO timestamp",
  "utm_source": "...", "utm_medium": "...", ...
}
```

**Estados:** idle / loading (spinner dorado) / success (✓) / error (con reintentar).
**Fallback:** Si CORS falla con JSON, intenta `application/x-www-form-urlencoded`.
**Persistencia:** `localStorage` evita mostrar form a quien ya se suscribió.

---

## 🎨 Sistema visual

**Colores:**
- `--navy: #0E1B33` (60% — base)
- `--gold: #E8B341` (10% — acento cotidiano)
- `--red: #C8341E` (5% — acento fuerte)
- `--paper: #F5F1E8` (25% — fondo)

**Tipografías (Google Fonts):**
- Bricolage Grotesque (marca, UI, botones)
- Fraunces (titulares editoriales, italic)
- Inter Tight (cuerpo)
- JetBrains Mono (tags, meta)

---

## 🛠️ Cómo correrlo / deployarlo

```bash
# Local
python3 -m http.server 8000

# Deploy
# Arrastrá la carpeta a netlify.com/drop
# O: vercel deploy
# O: hosting tradicional (FTP)
```

---

## 📋 Próximos pasos sugeridos

1. **Reemplazar `photoUrl`** en `data.js` con fotos reales (600×600 JPG)
2. **Reemplazar `spotifyUrl`/`appleUrl`** con los IDs reales de tus 12 episodios
3. **Custom WA number** — cambiar `wa.me/` por `wa.me/56XXXXXXXXX` si quieres que el wzp apunte directo a tu número
4. **OG images por página** — actualmente apuntan a paths que no existen todavía
5. **Embed real de Spotify** en `/capitulo.html` — reemplazar el `player-block` por el iframe oficial cuando tengas los episode IDs

---

## 📐 Decisiones de diseño

- **Sin voseo:** todo el copy usa formas neutras (conoces/tienes/quieres/dime/escríbeme).
- **Sin sección "Recomendar":** todos los CTAs van directo a WhatsApp.
- **Sin Ranking:** reemplazado por Reportes ESG, en construcción.
- **Reportes ESG:** nueva página con roadmap, metodología y CTA para sugerir empresas.
- **Personas con fotos:** Pravatar como placeholder, fácil de reemplazar con URLs reales.
- **Capítulos con wzp share:** cada uno tiene su `shareText` + URL dinámica para compartir.Sat Jul  4 02:20:56 UTC 2026
