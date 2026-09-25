import { existsSync } from 'node:fs';

import sitemap from '@astrojs/sitemap';
import { defineConfig, envField, fontProviders } from 'astro/config';

// Astro evaluates this file before loading .env, so read it here for the variables the config
// itself needs. Values already set by the hosting environment take precedence.
if (existsSync('.env')) process.loadEnvFile('.env');

// The production domain is deployment configuration, not business data.
const SITE_URL = process.env.SITE_URL || 'https://vidrieriabonilla.com';

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
