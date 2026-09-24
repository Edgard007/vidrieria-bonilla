# Vidriería Bonilla website

Static landing page in Spanish (default) and English for Vidriería Bonilla, a glass and aluminium workshop in
Jayaque, La Libertad, El Salvador. It replaces https://vidrieriabonilla.wordpress.com/.

Designed and built by [Edgardo Palacios](https://edgardpalacios.dev/).

Stack: Astro 7, TypeScript (strict), plain CSS, Motion (vanilla, for scroll and interaction animation), Lucide
icons. No UI framework, no trackers, no cookies.

## Run it

Requires Node 22.12+ and pnpm.

```sh
pnpm install
pnpm dev            # http://localhost:4321
pnpm build          # typecheck + static build into dist/
pnpm preview        # serve dist/
```

| Command             | What it does                                                          |
| ------------------- | --------------------------------------------------------------------- |
| `pnpm lint`         | ESLint (TypeScript strict rules, Astro, `@/` alias enforcement)       |
| `pnpm typecheck`    | `astro check`                                                         |
| `pnpm format`       | Prettier write (`format:check` to verify)                             |
| `pnpm design:lint`  | Validates `DESIGN.md` against the design.md spec                      |
| `pnpm qa`           | Format check, lint, typecheck, design lint and build in sequence      |

### Environment

| Variable               | Required | Purpose                                                                                         |
| ---------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| `SITE_URL`             | Yes, in production | Canonical URLs, hreflang, sitemap, Open Graph. Defaults to `https://vidrieriabonilla.example`. |
| `PUBLIC_FORM_ENDPOINT` | No       | Form delivery endpoint. Without it, the form hands the request to WhatsApp.                     |
| `PUBLIC_GSC_VERIFICATION` | No    | `content` value of the Google Search Console HTML tag. Adds the verification meta tag.          |

## Structure

```
src/
  config/company.ts        single source of business data and business copy (ES/EN)
  config/site.ts           website creator credit
  types/company.ts         types for that config
  i18n/locales.ts          locales and the Localized<T> type
  i18n/routes.ts           route table: every page x locale, localized slugs
  i18n/ui.ts               generic interface strings (ES/EN)
  i18n/legal/{es,en}.ts    legal page text; business facts come from company.ts
  pages/[...route].astro   one page file renders home and legal pages for both locales
  pages/404.astro, robots.txt.ts
  layouts/BaseLayout.astro
  components/
    sections/              Hero, About (mission and vision), Products (catalog), Materials (frame and
                           glass configurator), Process, Gallery, Faq, Contact
    navigation/            SiteHeader (with popover mobile menu), LanguageSwitch, SiteFooter
    forms/                 QuoteForm, FormField
    gallery/Lightbox.astro native <dialog>
    legal/                 LegalPage, InlineContent (renders pending markers)
    seo/Seo.astro          meta, Open Graph, canonical, hreflang, LocalBusiness JSON-LD
    ui/                    Button, Elevation (line drawings)
  lib/                     quote-form validation, WhatsApp links, structured data, helpers
  scripts/motion.ts        section entrances and scroll-linked lines (data-reveal / data-scroll-line)
  styles/global.css        tokens (mirror DESIGN.md), reset, motion tokens
DESIGN.md                  design system (design.md format)
```

Astro components use PascalCase file names (Astro convention); every other file is kebab-case. Internal imports
always use `@/`.

## Editing business data

Everything specific to the business lives in `src/config/company.ts`: name, tagline, phone, WhatsApp, email,
address, map link, hours, Facebook and Instagram, hero copy and slideshow, about text, mission and vision, products
(from the WhatsApp catalog), frame materials and colours, glass colours, the four-step process, gallery, FAQ and the
facts the legal pages need. Every photo is declared once in `PHOTOS` and reused. Each text has an `es` and an `en` value; TypeScript fails the build if a translation is
missing. Components never hardcode business values.

- **Phone or WhatsApp:** change `PHONE_DISPLAY` / `PHONE_E164` (or `whatsappE164` if WhatsApp moves to another
  number). All links, the form and the structured data update.
- **Hours:** edit `hours`. `opens`/`closes` feed schema.org; `display` is what visitors read.
- **Interface text** (buttons, labels, errors, section titles) lives in `src/i18n/ui.ts`.
- **Legal text** lives in `src/i18n/legal/es.ts` and `en.ts`. Replace each `{ pending: ... }` value in
  `company.ts` (`legal`) with the confirmed fact; the red "Pendiente de confirmar" markers disappear.

`public/og-image.jpg` bakes in the name, a photo and the phone number. Regenerate it if those change.

## Adding a product, colour or photo

1. Put the photo in `src/assets/images/work/` (kebab-case name, JPEG, the business's own photo).
2. Import it at the top of `company.ts` and add it to `PHOTOS` with a descriptive `alt` in both languages.
3. Reference it from a product's `photos`, from `gallery` (with `caption` and `category`) or from `hero.photos`.
4. New product: add an entry to `products` and its id to `ProductId` in `src/types/company.ts`. The catalog,
   the quote form options and the structured data pick it up.
5. New frame or glass colour: add a swatch to `materials.frameColors` or `materials.glassColors`. The
   configurator preview reads the `hex` value.

Astro generates AVIF/WebP at several widths. Photos are never cropped in the catalog or the gallery: the catalog
letterboxes them and the gallery is a column mosaic at each photo's own proportions.

## Fonts

Archivo (SIL Open Font License, `src/assets/fonts/OFL.txt`) is self-hosted as one variable file instanced to the
axes the site uses (weight 400-800, width 100-118%) and subset to Latin: 49 KB instead of 90 KB. To use other
weights or widths, regenerate the file with fontTools from the full Archivo variable font.

## Loading states

Image frames in the catalog, gallery and about section show a shimmering skeleton until their photo arrives,
then the photo fades in (`.skeleton` in `global.css`, marked loaded by `src/scripts/motion.ts`). Without
JavaScript the photos show normally; with reduced motion the skeleton is static.

## Motion

Entrances use Motion from `src/scripts/motion.ts`, enabled per element with `data-reveal="rise|stagger|mask|frame"`
and `data-scroll-line`. Content is visible by default: initial states are applied from JavaScript only to elements
below the fold, and nothing animates when the visitor prefers reduced motion. The hero slideshow has a pause
control and stops in the background tab. Timing tokens live in `global.css` (`--dur-*`, `--ease-*`).

## Quote form

Two delivery modes, chosen at build time:

- **No `PUBLIC_FORM_ENDPOINT` (current):** after validation the form opens WhatsApp with a pre-filled message to
  the business. Nothing is sent by the site itself.
- **With `PUBLIC_FORM_ENDPOINT`:** the form POSTs `FormData` (`name`, `phone`, `email`, `service`, `message`,
  `hasAcceptedPrivacy`, `locale`, honeypot `_gotcha`) and expects a 2xx answer. Works with Formspree
  (`https://formspree.io/f/<id>`) or any compatible endpoint. Failures show a message and the direct contact
  channels; the typed data stays in the form.

When enabling an endpoint, name the provider and its country in the privacy policy (`src/i18n/legal/*.ts`,
section "encargados"/"processors").

## SEO

- **URLs** carry no connector words: `/politica-privacidad/`, `/terminos-condiciones/`, `/politica-cookies/`,
  `/politica-reembolsos/`, `/en/privacy-policy/`, `/en/terms-conditions/`, `/en/cookie-policy/`,
  `/en/refund-policy/`. Slugs live in `src/i18n/routes.ts`.
- **Titles, descriptions and H1**: every page has its own title (`COMPANY.seo.homeTitle`, `ui.legal.metaTitles`),
  its own description (120-160 characters) and exactly one H1 that differs from the title.
- **Search intent first**: the hero (home) and the first paragraph (legal pages) answer the query, followed by a
  call to action, then a summary with five key points (`COMPANY.summary`, `keyPoints` in `src/i18n/legal/*.ts`).
- **Heading hierarchy** H1 > H2 > H3 with no skipped levels; FAQ questions are H3.
- **Lists and tables**: at most three per page of content.
- **Internal links**: summary points link to home sections; legal pages have breadcrumbs, a "see also" line
  linking the other legal pages, and a call to action back to WhatsApp; the footer links every page.
- **Structured data** (`src/lib/structured-data.ts`): `HomeAndConstructionBusiness` (local business), `WebSite`
  and `FAQPage` on the home page; `BreadcrumbList` and `FAQPage` on legal pages.
- **Images** have descriptive Spanish file names (`ventana-guillotina-vidrio-azul-reflectivo.jpg`) and alt text
  in both languages.
- **`/robots.txt`** allows crawling, disallows the pagination folders `/page/` and `/en/page/`, and points to the
  sitemap. **`/sitemap-index.xml`** is generated at build time. **`/llms.txt`** is a Markdown overview of the
  business, products, contact details, pages and FAQ, generated from `company.ts`.
- **Mobile call bar**: phones get a fixed bar with Call, WhatsApp and Share. A Share button (native share sheet,
  or copy link) also sits in the footer and at the end of each legal page.
- **Analytics**: not installed, by decision. Adding Google Analytics would require a consent banner (the personal
  data law requires express consent for cookies) and updates to the privacy and cookie policies.

### Google Search Console

Once the site is deployed on its domain and `SITE_URL` is set:

1. Open https://search.google.com/search-console and add a property. The **Domain** type is verified with a DNS
   TXT record at the domain registrar. The **URL prefix** type can use the HTML tag method instead.
2. For the HTML tag method, copy the `content` value of the `google-site-verification` tag into
   `PUBLIC_GSC_VERIFICATION`, redeploy and press **Verify**.
3. Go to **Sitemaps**, enter `sitemap-index.xml` and press **Submit**.
4. Use **URL inspection** on the home page and request indexing. Check **Pages** after a few days for coverage.

## Integrations and privacy

The site loads nothing from third parties: fonts are self-hosted by Astro's font API, Google Maps and Facebook are
plain links, there is no analytics. Because of that there is no consent banner. If an analytics tool, map embed or
video is added later, it needs a consent mechanism that blocks it until the visitor accepts, and the cookie policy
must be updated.

## Design and writing guidelines

- **Impeccable** design guidelines: no eyebrow labels, no identical card grids, no decorative glass effects, one
  authored motion moment, themed browser surfaces. Checked with `npx impeccable detect src/` (0 findings).
- **Taste**: a different layout per section, a single action colour, one call-to-action label per intent,
  labels above inputs.
- **Google design.md** spec for `DESIGN.md`, validated with `pnpm design:lint`; **Awesome Design MD** as a format
  reference.
- **Stop Slop** and **Humanizer** style rules for the copy in both languages: plain wording, no filler, no dashes;
  the business's own mission and vision are kept word for word.

## Sources and pending confirmation

Content sources, checked 2026-09-24:

- The old site (vidrieriabonilla.wordpress.com): contact, address, hours, mission, vision, service list.
- The business's WhatsApp catalog: 6 products with their descriptions and 18 photos (read through the project
  owner's WhatsApp Web session; photos captured at close to original resolution).
- The business's Facebook page: "servicio completo: asesoría, medida, fabricación e instalación", and two photos.
  A visible vehicle licence plate in one photo was blurred.
- Glass colours quoted by the business to the project owner on WhatsApp: super gris (dark grey), bronze, blue
  reflective (can be fitted reflective side out). Clear and frosted/textured glass appear in catalog photos.
- Instagram requires login; only the profile link is used.

Business data to confirm:

- Legal name of the owner or company, and NIT.
- Whether "Vidriería" (with accent, used on the site) or "Vidrieria" (logo, old site) is the registered name.
- PVC frames and grey frames: stated by the project owner, not shown in the catalog or photos (flagged in
  `company.ts` with `pendingConfirmation`). Wood-tone frames are shown because they appear in catalog photos.
- Availability of each glass colour (the business mentioned super gris running out with its supplier).
- No own photos of decorative mirrors yet; that product shows a labelled reference drawing.
- Consent to publish the photo of the staff member repairing a car mirror (face not visible).
- Production domain (`SITE_URL`) and hosting provider.

Legal (drafts, not legal advice; review with a lawyer before publishing):

- Privacy policy follows the Ley para la Protección de Datos Personales (DL 144, 2024). Confirm retention period,
  form provider and hosting provider. The September 2026 reform removing the private-sector data protection
  officer requirement was passed but its publication in the Diario Oficial was not confirmed.
- Refund policy: deposit terms, cancellation once fabrication has started, returns of made-to-measure pieces,
  warranties for installations and car mirror repairs.
- Terms: responsibility when the customer supplies measurements.
- The business must issue signed receipts for deferred delivery, itemised invoices and complaint reference numbers
  (Ley de Protección al Consumidor, reformed by DL 405/2024).
- Consider the free Defensoría del Consumidor e-commerce registry; the site does not sell online, so it is
  arguably out of scope.

## Quality checks (2026-09-24)

- `pnpm qa` passes: formatting, ESLint, `astro check`, design.md lint and a production build.
- Verified during development in desktop and mobile browsers: every route in both languages, metadata and
  hreflang, language switch, mobile menu, product catalog (keyboard and without JavaScript), frame and glass
  configurator, gallery filters and lightbox, quote form errors and WhatsApp hand-off, reduced motion, and no
  horizontal overflow from 320 px to 1920 px.
- Accessibility: 0 WCAG 2.2 AA violations reported by axe-core on all 10 pages.
- Privacy: no cookies, no browser storage and no third-party requests on page load.
- Lighthouse (local preview): performance 98 mobile and 100 desktop; accessibility, best practices and SEO 100.
  Mobile LCP 2.3 s, CLS 0, TBT 0 ms.
- Not verified: a real form endpoint (none configured), physical devices and screen readers.

## Git workflow

The repository follows Git Flow:

- `main` holds released versions, each tagged (`v1.0.0`, ...).
- `develop` is the integration branch.
- New work goes in `feature/<name>` branches created from `develop` and merged back with `--no-ff`.
- Releases are prepared in `release/<version>` from `develop`, merged into `main` and `develop`, and tagged.
- Urgent production fixes use `hotfix/<version>` from `main`.

Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).

## Author

Designed and developed by **Edgardo Palacios** - [edgardpalacios.dev](https://edgardpalacios.dev/)
