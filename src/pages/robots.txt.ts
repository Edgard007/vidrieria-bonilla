import type { APIRoute } from 'astro';

import { LOCALES, DEFAULT_LOCALE } from '@/i18n/locales';

/** Paginated listings live under /page/ in each locale and must not be indexed. */
const PAGINATION_PATHS = LOCALES.map((locale) =>
  locale === DEFAULT_LOCALE ? '/page/' : `/${locale}/page/`,
);

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap-index.xml', site).href;
  const lines = [
    'User-agent: *',
    'Allow: /',
    ...PAGINATION_PATHS.map((path) => `Disallow: ${path}`),
    '',
    `Sitemap: ${sitemap}`,
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
