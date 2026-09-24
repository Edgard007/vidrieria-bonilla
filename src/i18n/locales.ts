export const LOCALES = ['es', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

export const LOCALE_META: Record<Locale, { label: string; htmlLang: string; ogLocale: string }> = {
  es: { label: 'Español', htmlLang: 'es-SV', ogLocale: 'es_SV' },
  en: { label: 'English', htmlLang: 'en', ogLocale: 'en_US' },
};

/** Localized text owned by a single source. Every locale is required so missing copy fails typecheck. */
export type Localized<T = string> = Record<Locale, T>;
