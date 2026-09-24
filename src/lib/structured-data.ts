import { COMPANY } from '@/config/company';
import type { Locale } from '@/i18n/locales';
import { pathFor } from '@/i18n/routes';

/**
 * LocalBusiness markup built only from verified facts. Coordinates are omitted on purpose: the
 * current site does not publish them and the address is enough for search engines.
 */
export function localBusinessJsonLd(locale: Locale, site: URL): Record<string, unknown> {
  const url = new URL(pathFor('home', locale), site).href;
  const { address, contact, hours, social } = COMPANY;

  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${new URL('/', site).href}#business`,
    name: COMPANY.name,
    description: COMPANY.description[locale],
    slogan: COMPANY.tagline[locale],
    url,
    image: new URL('/og-image.jpg', site).href,
    logo: new URL('/logo-512.png', site).href,
    telephone: contact.phoneE164,
    email: contact.email,
    inLanguage: locale,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: `${address.district}, ${address.municipality}`,
      addressRegion: address.department,
      addressCountry: address.countryCode,
    },
    openingHoursSpecification: hours.map((slot) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    sameAs: [social.facebook, social.instagram],
    hasMap: address.mapsUrl,
    makesOffer: COMPANY.products.map((product) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: product.name[locale],
        description: product.summary[locale],
      },
    })),
  };
}
