import sitemap from '@astrojs/sitemap';
import { defineConfig, envField, fontProviders } from 'astro/config';

// The production domain is deployment configuration, not business data. Set SITE_URL in the
// hosting environment; the reserved .example TLD makes a missing value obvious in canonicals.
const SITE_URL = process.env.SITE_URL ?? 'https://vidrieriabonilla.example';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-SV', en: 'en' } },
    }),
  ],
  image: { layout: 'constrained' },
  env: {
    schema: {
      // Optional form-delivery endpoint (Formspree, Web3Forms or any service accepting a POST of
      // FormData and answering 2xx). Without it the quote form hands the request to WhatsApp.
      // Value of the google-site-verification meta tag from Search Console (HTML tag method).
      PUBLIC_GSC_VERIFICATION: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_FORM_ENDPOINT: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        url: true,
      }),
    },
  },
  fonts: [
    {
      // Archivo (SIL OFL), instanced to the axes the site uses (weight 400-800, width 100-118%) and
      // subset to Latin, which halves the file compared with the full Google Fonts variable file.
      provider: fontProviders.local(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/archivo-variable-latin.woff2'],
            weight: '400 800',
            style: 'normal',
            stretch: '100% 118%',
          },
        ],
      },
    },
  ],
});
