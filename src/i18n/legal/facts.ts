import { COMPANY } from '@/config/company';
import type { Locale } from '@/i18n/locales';
import type { Inline } from '@/i18n/legal/types';
import { isPending } from '@/lib/localize';
import type { Pending } from '@/types/company';

/** Resolves a legal fact to inline content, keeping pending markers intact for rendering. */
export function fact(value: string | Pending | Record<Locale, string>, locale: Locale): Inline {
  if (typeof value === 'string' || isPending(value)) return value;
  return value[locale];
}

export function contactLinks(): { email: Inline; phone: Inline; whatsapp: Inline } {
  const { contact } = COMPANY;
  return {
    email: { href: `mailto:${contact.email}`, text: contact.email },
    phone: { href: `tel:${contact.phoneE164}`, text: contact.phoneDisplay },
    whatsapp: {
      href: `https://wa.me/${contact.whatsappE164.replace(/\D/g, '')}`,
      text: `WhatsApp ${contact.phoneDisplay}`,
      isExternal: true,
    },
  };
}

export function fullAddress(): string {
  const { address } = COMPANY;
  return `${address.street}, ${address.district}, ${address.municipality}, ${address.department}, ${address.country}`;
}

export const LAWS = {
  dataProtection: {
    es: 'Ley para la Protección de Datos Personales (Decreto Legislativo n.º 144, Diario Oficial n.º 219, tomo 445, 15 de noviembre de 2024)',
    en: 'Personal Data Protection Act (Ley para la Protección de Datos Personales, Legislative Decree 144, Official Gazette No. 219, volume 445, 15 November 2024)',
  },
  consumer: {
    es: 'Ley de Protección al Consumidor (Decreto Legislativo n.º 776 de 2005 y sus reformas, incluida la del Decreto Legislativo n.º 405 de 2024)',
    en: 'Consumer Protection Act (Ley de Protección al Consumidor, Legislative Decree 776 of 2005 as amended, including Legislative Decree 405 of 2024)',
  },
  defensoria: {
    href: 'https://www.defensoria.gob.sv/',
    text: 'Defensoría del Consumidor',
    isExternal: true,
  },
  ace: {
    href: 'https://ace.gob.sv/',
    text: 'Agencia de Ciberseguridad del Estado (ACE)',
    isExternal: true,
  },
} as const;
