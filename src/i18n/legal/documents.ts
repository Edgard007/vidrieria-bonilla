import { LEGAL_EN } from '@/i18n/legal/en';
import { LEGAL_ES } from '@/i18n/legal/es';
import type { LegalDocument } from '@/i18n/legal/types';
import type { Locale } from '@/i18n/locales';
import type { LegalPageKey } from '@/i18n/routes';

const DOCUMENTS: Record<Locale, Record<LegalPageKey, LegalDocument>> = {
  es: LEGAL_ES,
  en: LEGAL_EN,
};

export function getLegalDocument(locale: Locale, page: LegalPageKey): LegalDocument {
  return DOCUMENTS[locale][page];
}
