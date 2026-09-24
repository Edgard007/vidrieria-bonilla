import { COMPANY } from '@/config/company';
import { contactLinks, fact, fullAddress, LAWS } from '@/i18n/legal/facts';
import type { LegalDocument } from '@/i18n/legal/types';
import type { LegalPageKey } from '@/i18n/routes';
import { pathFor } from '@/i18n/routes';

const L = 'en';
const { legal, name } = COMPANY;
const { email, phone, whatsapp } = contactLinks();
const cookiePolicy = { href: pathFor('cookies', L), text: 'cookie policy' };
const privacyPolicy = { href: pathFor('privacy', L), text: 'privacy policy' };
const refundPolicy = { href: pathFor('refunds', L), text: 'refund policy' };
const defensoria = {
  ...LAWS.defensoria,
  text: 'Defensoría del Consumidor (consumer protection agency)',
};
const ace = {
  ...LAWS.ace,
  text: 'Agencia de Ciberseguridad del Estado (ACE), the data protection authority',
};

const controller: LegalDocument['sections'][number] = {
  id: 'controller',
  heading: 'Who is responsible',
  blocks: [
    {
      table: {
        head: ['Item', 'Details'],
        rows: [
          ['Trade name', name],
          ['Owner', fact(legal.legalName, L)],
          ['Tax ID (NIT)', fact(legal.taxId, L)],
          ['Address', fullAddress()],
          ['Email', email],
          ['Phone and WhatsApp', phone],
        ],
      },
    },
  ],
};

export const LEGAL_EN: Record<LegalPageKey, LegalDocument> = {
  privacy: {
    intro: [
      `This policy explains what personal data ${name} processes when you visit this site or ask us for a quote, and how you can exercise your rights under El Salvador's `,
      LAWS.dataProtection.en,
      '.',
    ],
    summary:
      'We only ask for the data needed to answer your quote, never use it for advertising, and you can ask us to correct or delete it at any time.',
    keyPoints: [
      ['We ask for your name, phone, service and details; email is optional.'],
      ['We use your data only to reply and, if you hire us, arrange the job.'],
      ['We send no advertising and never sell your data.'],
      ['Some services, such as WhatsApp and Gmail, store data outside El Salvador.'],
      ['You can exercise your rights by writing to ', email, '.'],
    ],
    faq: [
      {
        question: 'What data do you ask for when I request a quote?',
        answer:
          'Your name, phone or WhatsApp number, the service you are interested in and a description of what you need. Email is optional.',
      },
      {
        question: 'Do you use my data to send me advertising?',
        answer:
          'No. We only use it to answer your request and, if you hire us, arrange the job. We never sell or share your data.',
      },
      {
        question: 'How do I ask you to delete my data?',
        answer:
          'Write to us by email or WhatsApp saying which data you want deleted. We reply within 20 business days.',
      },
    ],
    sections: [
      controller,
      {
        id: 'data',
        heading: 'What data we collect',
        blocks: [
          { paragraph: ['Only what you give us when you ask for a quote:'] },
          {
            list: [
              ['Name.'],
              ['Phone or WhatsApp number.'],
              ['Email address, if you choose to give it.'],
              [
                'The service you are interested in and a description of what you need, with measurements or photos if you send them.',
              ],
            ],
          },
          {
            paragraph: [
              'We do not ask for sensitive data; please do not include any in your message. This site uses no cookies, analytics or advertising tools, and it does not store form data on the site itself.',
            ],
          },
        ],
      },
      {
        id: 'purpose',
        heading: 'What we use it for',
        blocks: [
          {
            paragraph: [
              'We use your data to answer your enquiry, prepare the quote you asked for and, if you hire us, arrange fabrication, delivery or repair.',
            ],
          },
          {
            paragraph: [
              'We do not use your data to send you advertising, and we do not sell it or give it to third parties for their own purposes. If we ever wanted to send you promotions, we would ask for separate consent, which you could refuse without affecting your quote.',
            ],
          },
        ],
      },
      {
        id: 'legal-basis',
        heading: 'Legal basis',
        blocks: [
          {
            paragraph: [
              'We process your data because you ask us to in order to receive a quote (steps prior to a contract), and with the consent you give by ticking the form checkbox or by writing to us. You can withdraw that consent at any time.',
            ],
          },
        ],
      },
      {
        id: 'processors',
        heading: 'Who else is involved and international transfers',
        blocks: [
          {
            paragraph: [
              'To receive and answer your message we use third-party services that may store data on servers outside El Salvador, mainly in the United States: WhatsApp, by WhatsApp LLC (Meta Platforms), if you message us there or use the form’s WhatsApp button; Gmail, by Google LLC, where we receive email; the service that delivers the form by email, when enabled (',
              {
                pending: {
                  es: 'Nombre y país del proveedor del formulario',
                  en: 'Form provider name and country',
                },
              },
              '); and the website hosting provider (',
              {
                pending: {
                  es: 'Nombre y país del proveedor de alojamiento',
                  en: 'Hosting provider name and country',
                },
              },
              ').',
            ],
          },
          {
            paragraph: [
              'By sending your request you consent to this transfer, which is limited to what we need to reply. Each service applies its own privacy policy.',
            ],
          },
        ],
      },
      {
        id: 'retention',
        heading: 'How long we keep it',
        blocks: [
          {
            paragraph: [
              'We keep your request for as long as we need to handle it and, if you hire us, for as long as legal and tax obligations require. Period applied: ',
              fact(legal.retention, L),
              '.',
            ],
          },
        ],
      },
      {
        id: 'security',
        heading: 'How we protect it',
        blocks: [
          {
            paragraph: [
              'The site is served over an encrypted connection (HTTPS). Only the team members who handle quotes can read messages. If a security breach affected your data, we would notify you and the authorities within the time limits set by law.',
            ],
          },
        ],
      },
      {
        id: 'rights',
        heading: 'Your rights',
        blocks: [
          {
            paragraph: [
              'You can ask us for access to your data, its correction, cancellation or erasure, object to its use, restrict it, request portability or withdraw your consent. It is free. Write to ',
              email,
              ' or via ',
              whatsapp,
              ', saying which right you want to exercise and how we can identify you.',
            ],
          },
          {
            paragraph: [
              'We reply within 20 business days, extendable once by the same period if needed. If you withdraw consent, we stop using your data within 5 business days. If you are not satisfied with our answer, you can contact the ',
              ace,
              '.',
            ],
          },
        ],
      },
      {
        id: 'cookies',
        heading: 'Cookies',
        blocks: [
          { paragraph: ['This site uses no cookies. See our ', cookiePolicy, ' for details.'] },
        ],
      },
      {
        id: 'changes',
        heading: 'Changes to this policy',
        blocks: [
          {
            paragraph: [
              'If we change this policy, we will publish the new version on this page with its update date. If the change affects how we use your data, we will tell you beforehand.',
            ],
          },
        ],
      },
    ],
  },

  terms: {
    intro: [
      `These terms govern the use of this website and the quote requests made to ${name} through it. By using the site you accept them.`,
    ],
    summary:
      'A reply on WhatsApp or by phone is only a guide: price and delivery time are fixed once you accept the written quote.',
    keyPoints: [
      ['The site is informational; it sells nothing online and takes no payments.'],
      ['The written quote details measurements, materials, price with taxes and delivery time.'],
      ['An accepted price does not change unless you ask for changes.'],
      ['Photos, logo and text belong to the business.'],
      ['Complaints are handled via ', whatsapp, ' or email, and by the ', defensoria, '.'],
    ],
    faq: [
      {
        question: 'Is a reply on WhatsApp a formal quote?',
        answer:
          'No. It is only a guide until we give you a written quote with measurements, materials, price and delivery time.',
      },
      {
        question: 'Can the price change after I accept the quote?',
        answer: 'No, unless you ask for changes to measurements, materials or design.',
      },
      {
        question: 'Where do I file a complaint?',
        answer:
          'Write to us by email or WhatsApp and we will give you a reference number. You can also contact the consumer protection agency (Defensoría del Consumidor).',
      },
    ],
    sections: [
      controller,
      {
        id: 'use',
        heading: 'Use of the site',
        blocks: [
          {
            paragraph: [
              'The site is informational. It shows our services, photos of work done by our team and ways to contact us. It does not sell products online or take payments.',
            ],
          },
          {
            paragraph: [
              'The drawings shown with some services are illustrative references and do not depict a specific job.',
            ],
          },
        ],
      },
      {
        id: 'quotes',
        heading: 'Quotes',
        blocks: [
          {
            list: [
              [
                'A reply by WhatsApp, phone or email is only a guide until we give you a written quote.',
              ],
              [
                'The written quote details the product or service, measurements, materials, total price including taxes, and delivery time.',
              ],
              [
                'Once you accept the quote, the price does not change unless you ask for changes to measurements, materials or design.',
              ],
              [
                'When delivery happens after the order, we give you a receipt signed by both parties stating the place, the delivery date and what happens if we are late.',
              ],
            ],
          },
          {
            paragraph: [
              'Responsibility when the customer supplies the measurements: ',
              {
                pending: {
                  es: 'Qué ocurre si la pieza se fabrica con medidas dadas por el cliente y no encaja',
                  en: 'What happens if a piece made to customer-supplied measurements does not fit',
                },
              },
              '.',
            ],
          },
          {
            paragraph: [
              'Deposits, cancellations and warranties are covered in our ',
              refundPolicy,
              '.',
            ],
          },
        ],
      },
      {
        id: 'intellectual-property',
        heading: 'Intellectual property',
        blocks: [
          {
            paragraph: [
              `The logo, photos and text on this site belong to ${name}. They may not be reproduced without our permission, except to share a link to the site.`,
            ],
          },
        ],
      },
      {
        id: 'links',
        heading: 'Links to other sites',
        blocks: [
          {
            paragraph: [
              'The site links to WhatsApp, Facebook and Google Maps. When you open them you leave our site and those companies’ terms and privacy policies apply.',
            ],
          },
        ],
      },
      {
        id: 'accuracy',
        heading: 'Accuracy of information',
        blocks: [
          {
            paragraph: [
              'We keep the information on this site up to date. If we find an error that affects an offer, we will correct it publicly on this page.',
            ],
          },
        ],
      },
      {
        id: 'complaints',
        heading: 'Complaints',
        blocks: [
          {
            paragraph: [
              'If you have a complaint, write to ',
              email,
              ' or via ',
              whatsapp,
              '. We will give you a reference number and a reply. You can also contact the ',
              defensoria,
              '.',
            ],
          },
        ],
      },
      {
        id: 'law',
        heading: 'Governing law',
        blocks: [
          {
            paragraph: [
              'These terms are governed by the laws of El Salvador, in particular the ',
              LAWS.consumer.en,
              '. Personal data is handled under our ',
              privacyPolicy,
              '. The Spanish version of these terms prevails.',
            ],
          },
        ],
      },
    ],
  },

  cookies: {
    intro: [
      'A cookie is a small file a website stores in your browser. This site uses none, first-party or third-party, which is why it does not ask you to accept any.',
    ],
    summary:
      'This site uses no first-party or third-party cookies, which is why it never asks you to accept any.',
    keyPoints: [
      ['No first-party or third-party cookies.'],
      ['No analytics, tracking or advertising tools.'],
      ['Fonts are served from our own server.'],
      ['No embedded maps, videos or social media.'],
      ['If we ever add non-essential cookies, we will ask for your consent first.'],
    ],
    faq: [
      {
        question: 'Does this site use cookies?',
        answer: 'No. The site stores no cookies and nothing in your browser storage.',
      },
      {
        question: 'Why is there no cookie banner?',
        answer:
          'Because there are no cookies to accept. If we ever add a non-essential one, we will ask for your consent before enabling it.',
      },
      {
        question: 'What happens if I open WhatsApp, Facebook or Google Maps from the site?',
        answer:
          'You leave our site, and those services may use their own cookies under their own policies.',
      },
    ],
    sections: [
      {
        id: 'inventory',
        heading: 'Which technologies are involved',
        blocks: [
          {
            table: {
              head: ['Technology', 'How it works on this site', 'Cookies?'],
              rows: [
                [
                  'Fonts',
                  'Served from our own server, without Google Fonts or similar services.',
                  'No',
                ],
                [
                  'Analytics and advertising',
                  'We use no measurement, tracking or advertising tools.',
                  'No',
                ],
                [
                  'Maps, videos and social media',
                  'Nothing is embedded; links to WhatsApp, Facebook and Google Maps open only if you click them.',
                  'No',
                ],
                [
                  'Browser storage',
                  'The site stores nothing in localStorage, sessionStorage or similar.',
                  'No',
                ],
                [
                  'Form',
                  [
                    'Data leaves your browser only when you press send, to WhatsApp or the service named in our ',
                    privacyPolicy,
                    '.',
                  ],
                  'No',
                ],
              ],
            },
          },
        ],
      },
      {
        id: 'third-parties',
        heading: 'Third-party sites',
        blocks: [
          {
            paragraph: [
              'If you open WhatsApp, Facebook or Google Maps from our links, those sites may use their own cookies. Check each service’s policy.',
            ],
          },
        ],
      },
      {
        id: 'changes',
        heading: 'If this changes',
        blocks: [
          {
            paragraph: [
              'If we ever add a tool that uses non-essential cookies, we will ask for your consent before enabling it and update this page.',
            ],
          },
        ],
      },
    ],
  },

  refunds: {
    intro: [
      `Almost everything ${name} makes is built to the measurements of your space. This policy explains how deposits, cancellations, returns and warranties work under the `,
      LAWS.consumer.en,
      '.',
    ],
    summary:
      'Because almost everything is made to measure, we start once you accept the written quote and we respond if the work is defective or does not match the quote.',
    keyPoints: [
      ['We start fabrication once you accept the written quote.'],
      ['You can cancel by telling us in writing.'],
      [
        'If you hired us at a distance, you may withdraw within eight days if work has not started.',
      ],
      ['We repair or replace defects that are ours at no cost.'],
      ['Refunds are paid by the same method within 15 days.'],
    ],
    faq: [
      {
        question: 'Can I cancel an order?',
        answer:
          'Yes, by telling us in writing. If you hired us entirely at a distance, you may withdraw within the following eight days unless the service has already started.',
      },
      {
        question: 'What happens if the work is defective?',
        answer:
          'We inspect it and repair or replace it at no cost if the defect is ours. If the repair does not solve it, you choose a replacement, a price reduction or a refund.',
      },
      {
        question: 'How long does a refund take?',
        answer: 'When money is due back, we return it by the same payment method within 15 days.',
      },
    ],
    sections: [
      {
        id: 'scope',
        heading: 'What it covers',
        blocks: [
          {
            paragraph: [
              'It applies to made-to-measure products (windows, glass doors, mirrors and custom pieces) and to repair services, such as replacing car mirror glass.',
            ],
          },
        ],
      },
      {
        id: 'deposit',
        heading: 'Quote and deposit',
        blocks: [
          {
            paragraph: [
              'We start fabrication once you accept the written quote. Deposit: ',
              fact(legal.refunds.deposit, L),
              '.',
            ],
          },
        ],
      },
      {
        id: 'cancellation',
        heading: 'If you cancel',
        blocks: [
          {
            paragraph: [
              'You can cancel by telling us in writing. We apply what the Consumer Protection Act sets for contracts with later delivery. If the contract was made entirely at a distance (by phone, WhatsApp or email, without visiting us), you may withdraw within the following eight days, unless the service has already started.',
            ],
          },
          {
            paragraph: [
              'Cancellation once fabrication has started: ',
              {
                pending: {
                  es: 'Qué parte del anticipo se reintegra si la pieza ya se cortó o fabricó (revisar con asesoría legal)',
                  en: 'How much of the deposit is returned once the piece has been cut or made (review with legal counsel)',
                },
              },
              '.',
            ],
          },
        ],
      },
      {
        id: 'returns',
        heading: 'Returns and defects',
        blocks: [
          {
            paragraph: [
              'Returns of a made-to-measure piece because you changed your mind: ',
              {
                pending: {
                  es: 'Si se aceptan o no, y en qué condiciones',
                  en: 'Whether they are accepted, and on what terms',
                },
              },
              '. In every case we respond when the work does not match the quote or is defective:',
            ],
          },
          {
            list: [
              ['Tell us as soon as you notice the problem, with photos if you can.'],
              [
                'We will inspect the work and repair or replace it at no cost if the defect is ours.',
              ],
              [
                'If the repair does not solve the problem, you can choose a replacement, a price reduction or a refund, as the law provides.',
              ],
            ],
          },
        ],
      },
      {
        id: 'warranty',
        heading: 'Warranty',
        blocks: [
          { paragraph: ['Windows, doors and mirrors: ', fact(legal.refunds.warranty, L), '.'] },
          { paragraph: ['Car mirror repair: ', fact(legal.refunds.carMirrorWarranty, L), '.'] },
          {
            paragraph: [
              'Any warranty we offer will be stated in writing on the quote or invoice, with its term and what it covers.',
            ],
          },
        ],
      },
      {
        id: 'refunds',
        heading: 'How refunds are paid',
        blocks: [
          {
            paragraph: [
              'When money is due back to you, we return it by the same payment method you used, within 15 days.',
            ],
          },
        ],
      },
      {
        id: 'request',
        heading: 'How to ask',
        blocks: [
          {
            paragraph: [
              'Write to ',
              email,
              ', message us on ',
              whatsapp,
              ' or call ',
              phone,
              ' with your name and the date of the quote. If we cannot reach an agreement, you can contact the ',
              defensoria,
              '.',
            ],
          },
        ],
      },
    ],
  },
};
