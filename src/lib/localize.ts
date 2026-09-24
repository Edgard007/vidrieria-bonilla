import type { Locale } from '@/i18n/locales';
import type { Pending } from '@/types/company';

export function isPending(value: unknown): value is Pending {
  return typeof value === 'object' && value !== null && 'pending' in value;
}

export function formatDate(isoDate: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-SV' : 'en-US', {
    dateStyle: 'long',
    timeZone: 'America/El_Salvador',
  }).format(new Date(`${isoDate}T12:00:00-06:00`));
}
