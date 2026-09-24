import type { APIRoute } from 'astro';

import { COMPANY } from '@/config/company';
import { PAGE_KEYS, isLegalPage, pathFor } from '@/i18n/routes';
import { UI } from '@/i18n/ui';

/** Plain Markdown overview of the site for search and answer engines, built from company.ts. */
export const GET: APIRoute = ({ site }) => {
  const url = (path: string): string => new URL(path, site).href;
  const ui = UI.es;
  const { contact, address, hours } = COMPANY;

  const lines = [
    `# ${COMPANY.name}`,
    '',
    `> ${COMPANY.description.es}`,
    '',
    COMPANY.summary.intro.es,
    '',
    '## Productos y servicios',
    '',
    ...COMPANY.products.map((product) => `- ${product.name.es}: ${product.summary.es}`),
    '',
    '## Contacto',
    '',
    `- Teléfono y WhatsApp: ${contact.phoneDisplay}`,
    `- Correo: ${contact.email}`,
    `- Dirección: ${address.street}, ${address.district}, ${address.municipality}, ${address.department}, ${address.country}`,
    ...hours.map((slot) => `- ${slot.label.es}: ${slot.display.es}`),
    '',
    '## Páginas',
    '',
    `- [Inicio](${url(pathFor('home', 'es'))}): ${COMPANY.seo.homeTitle.es}`,
    `- [Home (English)](${url(pathFor('home', 'en'))}): ${COMPANY.seo.homeTitle.en}`,
    ...PAGE_KEYS.filter(isLegalPage).map(
      (page) =>
        `- [${ui.legal.titles[page]}](${url(pathFor(page, 'es'))}): ${ui.legal.descriptions[page](COMPANY.name)}`,
    ),
    '',
    '## Preguntas frecuentes',
    '',
    ...COMPANY.faq.flatMap((item) => [`### ${item.question.es}`, '', item.answer.es, '']),
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
