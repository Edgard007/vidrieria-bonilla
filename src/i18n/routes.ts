import { DEFAULT_LOCALE, LOCALES, type Locale, type Localized } from '@/i18n/locales';

export const PAGE_KEYS = ['home', 'privacy', 'terms', 'cookies', 'refunds'] as const;

export type PageKey = (typeof PAGE_KEYS)[number];

export type LegalPageKey = Exclude<PageKey, 'home'>;

/** Paths without leading or trailing slash, relative to the locale prefix. */
const SLUGS: Record<PageKey, Localized> = {
  home: { es: '', en: '' },
  privacy: { es: 'politica-privacidad', en: 'privacy-policy' },
  terms: { es: 'terminos-condiciones', en: 'terms-conditions' },
  cookies: { es: 'politica-cookies', en: 'cookie-policy' },
  refunds: { es: 'politica-reembolsos', en: 'refund-policy' },
};

export function isLegalPage(page: PageKey): page is LegalPageKey {
  return page !== 'home';
}

function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '' : locale;
}

/** Route param for the catch-all page, `undefined` meaning the site root. */
export function routeParam(page: PageKey, locale: Locale): string | undefined {
  const parts = [localePrefix(locale), SLUGS[page][locale]].filter(Boolean);
  return parts.length > 0 ? parts.join('/') : undefined;
}

export function pathFor(page: PageKey, locale: Locale, hash?: string): string {
  const param = routeParam(page, locale);
  const path = param ? `/${param}/` : '/';
  return hash ? `${path}#${hash}` : path;
}

export function allRoutes(): { page: PageKey; locale: Locale }[] {
  return PAGE_KEYS.flatMap((page) => LOCALES.map((locale) => ({ page, locale })));
}
