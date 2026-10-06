import { COMPANY } from '@/config/company';
import { contactLinks, fact, fullAddress, LAWS } from '@/i18n/legal/facts';
import type { LegalDocument } from '@/i18n/legal/types';
import type { LegalPageKey } from '@/i18n/routes';
import { pathFor } from '@/i18n/routes';

const L = 'es';
const { legal, name } = COMPANY;
const { email, phone, whatsapp } = contactLinks();
const cookiePolicy = { href: pathFor('cookies', L), text: 'política de cookies' };
const privacyPolicy = { href: pathFor('privacy', L), text: 'política de privacidad' };
const refundPolicy = { href: pathFor('refunds', L), text: 'política de reembolsos' };

const controller: LegalDocument['sections'][number] = {
  id: 'responsable',
  heading: 'Quién es el responsable',
  blocks: [
    {
      table: {
        head: ['Dato', 'Detalle'],
        rows: [
          ['Nombre comercial', name],
          ['Titular', fact(legal.legalName, L)],
          ['NIT', fact(legal.taxId, L)],
          ['NRC', legal.taxpayerNumber],
          ['Socio', legal.partner],
          ['Dirección', fullAddress()],
          ['Correo', email],
          ['Teléfono y WhatsApp', phone],
        ],
      },
    },
  ],
};

export const LEGAL_ES: Record<LegalPageKey, LegalDocument> = {
  privacy: {
    intro: [
      `Esta política explica qué datos personales trata ${name} cuando usted visita este sitio o nos pide una cotización, y cómo puede ejercer sus derechos según la `,
      LAWS.dataProtection.es,
      '.',
    ],
    summary:
      'Solo pedimos los datos necesarios para responder su cotización, no los usamos para publicidad y usted puede pedir que los corrijamos o borremos cuando quiera.',
    keyPoints: [
      ['Pedimos nombre, teléfono, servicio y detalle; el correo es opcional.'],
      ['Usamos los datos solo para responder y, si nos contrata, coordinar el trabajo.'],
      ['No enviamos publicidad ni vendemos sus datos.'],
      ['Algunos servicios, como WhatsApp y Gmail, guardan datos fuera de El Salvador.'],
      ['Puede ejercer sus derechos escribiendo a ', email, '.'],
    ],
    faq: [
      {
        question: '¿Qué datos piden al cotizar?',
        answer:
          'Nombre, teléfono o WhatsApp, el servicio que le interesa y el detalle de lo que necesita. El correo electrónico es opcional.',
      },
      {
        question: '¿Usan mis datos para enviarme publicidad?',
        answer:
          'No. Solo los usamos para responder su solicitud y, si nos contrata, coordinar el trabajo. No vendemos ni cedemos sus datos.',
      },
      {
        question: '¿Cómo pido que borren mis datos?',
        answer:
          'Escríbanos por correo o WhatsApp indicando qué dato quiere borrar. Respondemos en un máximo de 20 días hábiles.',
      },
    ],
    sections: [
      controller,
      {
        id: 'datos',
        heading: 'Qué datos recogemos',
        blocks: [
          { paragraph: ['Solo los que usted nos da al pedir una cotización:'] },
          {
            list: [
              ['Nombre.'],
              ['Teléfono o número de WhatsApp.'],
              ['Correo electrónico, si decide darlo.'],
              [
                'El servicio que le interesa y la descripción de lo que necesita, con medidas o fotos si las envía.',
              ],
            ],
          },
          {
            paragraph: [
              'No pedimos datos sensibles. Le pedimos no incluirlos en su mensaje. Este sitio no usa cookies ni herramientas de analítica o publicidad, y no guarda los datos del formulario en el propio sitio.',
            ],
          },
        ],
      },
      {
        id: 'finalidad',
        heading: 'Para qué los usamos',
        blocks: [
          {
            paragraph: [
              'Usamos sus datos para responder su consulta, preparar la cotización que pidió y, si contrata el trabajo, coordinar la fabricación, la entrega o la reparación.',
            ],
          },
          {
            paragraph: [
              'No usamos sus datos para enviarle publicidad y no los vendemos ni los cedemos a terceros para sus propios fines. Si algún día quisiéramos enviarle promociones, le pediríamos un consentimiento aparte, que usted podría negar sin afectar su cotización.',
            ],
          },
        ],
      },
      {
        id: 'base-legal',
        heading: 'Con qué base legal',
        blocks: [
          {
            paragraph: [
              'Tratamos sus datos porque usted nos lo pide para recibir una cotización (medidas previas a un contrato) y con el consentimiento que nos da al marcar la casilla del formulario o al escribirnos. Puede retirar ese consentimiento cuando quiera.',
            ],
          },
        ],
      },
      {
        id: 'encargados',
        heading: 'Quién más interviene y transferencias internacionales',
        blocks: [
          {
            paragraph: [
              'Para recibir y contestar su mensaje usamos servicios de terceros que pueden guardar los datos en servidores fuera de El Salvador, principalmente en Estados Unidos: WhatsApp, de WhatsApp LLC (Meta Platforms), si nos escribe por ese medio o usa el botón de WhatsApp del formulario; Gmail, de Google LLC, donde recibimos los correos; el servicio que entrega el formulario por correo, si está activo (',
              {
                pending: {
                  es: 'Nombre y país del proveedor del formulario',
                  en: 'Form provider name and country',
                },
              },
              '); y Netlify, de Netlify, Inc. (Estados Unidos), donde se aloja este sitio.',
            ],
          },
          {
            paragraph: [
              'Al enviarnos su solicitud usted consiente esta transferencia, que se limita a lo necesario para responderle. Cada servicio aplica sus propias políticas de privacidad.',
            ],
          },
        ],
      },
      {
        id: 'conservacion',
        heading: 'Cuánto tiempo los guardamos',
        blocks: [
          {
            paragraph: [
              'Guardamos su solicitud el tiempo necesario para atenderla y, si contrata el trabajo, durante el plazo que exijan las obligaciones legales y fiscales. Plazo aplicado: ',
              fact(legal.retention, L),
              '.',
            ],
          },
        ],
      },
      {
        id: 'seguridad',
        heading: 'Cómo los protegemos',
        blocks: [
          {
            paragraph: [
              'El sitio se sirve con conexión cifrada (HTTPS). Solo las personas de nuestro equipo que atienden cotizaciones pueden ver los mensajes. Si ocurriera una brecha de seguridad que afecte sus datos, se lo notificaríamos a usted y a las autoridades en los plazos que marca la ley.',
            ],
          },
        ],
      },
      {
        id: 'derechos',
        heading: 'Sus derechos',
        blocks: [
          {
            paragraph: [
              'Puede pedirnos acceso a sus datos, su rectificación, cancelación u olvido, oponerse a su uso, limitarlo, pedir su portabilidad o retirar su consentimiento. Es gratuito. Escríbanos a ',
              email,
              ' o por ',
              whatsapp,
              ' indicando qué derecho quiere ejercer y cómo identificarle.',
            ],
          },
          {
            paragraph: [
              'Respondemos en un máximo de 20 días hábiles, prorrogables una vez por el mismo plazo si el caso lo requiere. Si retira su consentimiento, dejamos de usar sus datos en un máximo de 5 días hábiles. Si no está conforme con nuestra respuesta, puede acudir a la ',
              LAWS.ace,
              ', autoridad de protección de datos en El Salvador.',
            ],
          },
        ],
      },
      {
        id: 'cookies',
        heading: 'Cookies',
        blocks: [
          {
            paragraph: [
              'Este sitio no usa cookies. Encontrará el detalle en la ',
              cookiePolicy,
              '.',
            ],
          },
        ],
      },
      {
        id: 'cambios',
        heading: 'Cambios en esta política',
        blocks: [
          {
            paragraph: [
              'Si cambiamos esta política, publicaremos la nueva versión en esta página con su fecha de actualización. Si el cambio afecta la forma en que usamos sus datos, se lo informaremos antes.',
            ],
          },
        ],
      },
    ],
  },

  terms: {
    intro: [
      `Estos términos regulan el uso de este sitio web y las solicitudes de cotización que se hacen a ${name} por medio de él. Al usar el sitio usted los acepta.`,
    ],
    summary:
      'Una respuesta por WhatsApp o teléfono es orientativa: el precio y el plazo quedan fijos cuando usted acepta la cotización escrita.',
    keyPoints: [
      ['El sitio es informativo; no vende en línea ni recibe pagos.'],
      ['La cotización escrita detalla medidas, materiales, precio con impuestos y plazo.'],
      ['El precio aceptado no cambia salvo que usted pida cambios.'],
      ['Las fotos, el logotipo y los textos pertenecen a la vidriería.'],
      [
        'Damos seguimiento a los reclamos por ',
        whatsapp,
        '. También puede acudir a la ',
        LAWS.defensoria,
        '.',
      ],
    ],
    faq: [
      {
        question: '¿Una respuesta por WhatsApp es una cotización formal?',
        answer:
          'No. Es orientativa hasta que le entreguemos una cotización por escrito con medidas, materiales, precio y plazo.',
      },
      {
        question: '¿Puede cambiar el precio después de aceptar la cotización?',
        answer: 'No, salvo que usted pida cambios en las medidas, los materiales o el diseño.',
      },
      {
        question: '¿Qué pasa si di mal las medidas?',
        answer:
          'Usted asume el costo de corregir la pieza o de fabricar una nueva, según lo necesario. El anticipo sigue aplicado al pedido. Si las medidas las tomamos nosotros y el error es nuestro, lo corregimos sin costo.',
      },
      {
        question: '¿Dónde presento un reclamo?',
        answer:
          'Escríbanos por WhatsApp o correo. Le damos seguimiento a su reclamo por WhatsApp hasta resolverlo. También puede acudir a la Defensoría del Consumidor.',
      },
    ],
    sections: [
      controller,
      {
        id: 'uso',
        heading: 'Uso del sitio',
        blocks: [
          {
            paragraph: [
              'El sitio es informativo. Muestra nuestros servicios, fotos de trabajos hechos por nuestro equipo y las formas de contactarnos. No vende productos en línea ni recibe pagos.',
            ],
          },
          {
            paragraph: [
              'Los dibujos que acompañan algunos servicios son referencias ilustrativas y no representan un trabajo específico.',
            ],
          },
        ],
      },
      {
        id: 'cotizaciones',
        heading: 'Cotizaciones',
        blocks: [
          {
            list: [
              [
                'Una respuesta por WhatsApp, teléfono o correo es orientativa hasta que le entreguemos una cotización por escrito.',
              ],
              [
                'La cotización escrita detalla el producto o servicio, las medidas, los materiales, el precio total con impuestos y el plazo de entrega.',
              ],
              [
                'Una vez que usted acepta la cotización, el precio no cambia salvo que usted pida cambios en medidas, materiales o diseño.',
              ],
              [
                'Al pagar el anticipo le entregamos un comprobante de adelanto. Al entregar el producto le emitimos factura de consumidor final o, si lo solicita, comprobante de crédito fiscal.',
              ],
            ],
          },
          {
            paragraph: [
              'Le recomendamos que nuestro equipo tome las medidas, sobre todo si el proyecto lo requiere o si usted no tiene experiencia midiendo. La visita de medición puede tener un costo, que le informamos antes y que, según el proyecto, se puede descontar del total si confirma la compra.',
            ],
          },
          {
            paragraph: ['Responsabilidad según quién tome las medidas:'],
          },
          {
            list: [
              [
                'Antes de fabricar le pedimos confirmar las medidas, de preferencia por escrito (WhatsApp, cotización u orden de trabajo). Si usted las proporcionó, al confirmarlas asume que son correctas.',
              ],
              [
                'Si la pieza no encaja porque sus medidas eran incorrectas, usted asume el costo de corregirla o de fabricar una nueva. El monto depende de lo necesario (modificación, materiales adicionales, mano de obra o fabricación completa); no siempre se cobra de nuevo el precio completo.',
              ],
              [
                'En ese caso el anticipo del 50 % no se pierde: sigue aplicado al pedido original, y los costos adicionales corren por su cuenta.',
              ],
              [
                'Si nosotros tomamos las medidas y la pieza no encaja por un error de medición, fabricación o instalación nuestro, la corregimos o la fabricamos de nuevo sin costo para usted. Esto no aplica si después se modificó el espacio, cambiaron las condiciones del lugar o hubo otra causa ajena a nosotros.',
              ],
            ],
          },
          {
            paragraph: [
              'Anticipos, cancelaciones y garantías se explican en la ',
              refundPolicy,
              '.',
            ],
          },
        ],
      },
      {
        id: 'propiedad',
        heading: 'Propiedad intelectual',
        blocks: [
          {
            paragraph: [
              `El logotipo, las fotografías y los textos de este sitio pertenecen a ${name}. No se pueden reproducir sin nuestra autorización, salvo para compartir un enlace al sitio.`,
            ],
          },
        ],
      },
      {
        id: 'enlaces',
        heading: 'Enlaces a otros sitios',
        blocks: [
          {
            paragraph: [
              'El sitio enlaza a WhatsApp, Facebook y Google Maps. Al abrirlos usted sale de nuestro sitio y se aplican las condiciones y políticas de privacidad de esas empresas.',
            ],
          },
        ],
      },
      {
        id: 'exactitud',
        heading: 'Exactitud de la información',
        blocks: [
          {
            paragraph: [
              'Mantenemos la información del sitio al día. Si encontramos un error en un dato que afecte una oferta, lo corregiremos públicamente en esta misma página.',
            ],
          },
        ],
      },
      {
        id: 'reclamos',
        heading: 'Reclamos',
        blocks: [
          {
            paragraph: [
              'Si tiene un reclamo, escríbanos a ',
              email,
              ' o por ',
              whatsapp,
              '. Le daremos seguimiento por WhatsApp hasta resolverlo. También puede acudir a la ',
              LAWS.defensoria,
              '.',
            ],
          },
        ],
      },
      {
        id: 'ley',
        heading: 'Ley aplicable',
        blocks: [
          {
            paragraph: [
              'Estos términos se rigen por las leyes de El Salvador, en particular la ',
              LAWS.consumer.es,
              '. Los datos personales se tratan según nuestra ',
              privacyPolicy,
              '.',
            ],
          },
        ],
      },
    ],
  },

  cookies: {
    intro: [
      'Una cookie es un pequeño archivo que un sitio guarda en su navegador. Este sitio no usa ninguna, ni propia ni de terceros, y por eso no le muestra un aviso para aceptarlas.',
    ],
    summary:
      'Este sitio no usa cookies propias ni de terceros, por eso no le pide que acepte ninguna.',
    keyPoints: [
      ['No hay cookies propias ni de terceros.'],
      ['No usamos herramientas de analítica, seguimiento ni publicidad.'],
      ['Las tipografías se sirven desde nuestro propio servidor.'],
      ['No hay mapas, videos ni redes sociales incrustados.'],
      ['Si algún día agregamos cookies no esenciales, pediremos su consentimiento antes.'],
    ],
    faq: [
      {
        question: '¿Este sitio usa cookies?',
        answer: 'No. El sitio no guarda cookies ni datos en el almacenamiento de su navegador.',
      },
      {
        question: '¿Por qué no aparece un aviso de cookies?',
        answer:
          'Porque no hay cookies que aceptar. Si en el futuro agregamos alguna no esencial, le pediremos su consentimiento antes de activarla.',
      },
      {
        question: '¿Qué pasa si abro WhatsApp, Facebook o Google Maps desde el sitio?',
        answer:
          'Sale de nuestro sitio y esos servicios pueden usar sus propias cookies, según sus políticas.',
      },
    ],
    sections: [
      {
        id: 'inventario',
        heading: 'Qué tecnologías intervienen',
        blocks: [
          {
            table: {
              head: ['Tecnología', 'Cómo funciona en este sitio', '¿Usa cookies?'],
              rows: [
                [
                  'Tipografías',
                  'Se sirven desde nuestro propio servidor, sin Google Fonts ni otros servicios.',
                  'No',
                ],
                [
                  'Analítica y publicidad',
                  'No usamos herramientas de medición, seguimiento ni publicidad.',
                  'No',
                ],
                [
                  'Mapas, videos y redes sociales',
                  'No hay contenido incrustado; los enlaces a WhatsApp, Facebook y Google Maps solo se abren si usted hace clic.',
                  'No',
                ],
                [
                  'Almacenamiento del navegador',
                  'El sitio no guarda datos en localStorage, sessionStorage ni similares.',
                  'No',
                ],
                [
                  'Formulario',
                  [
                    'Los datos solo salen al pulsar enviar, hacia WhatsApp o el servicio indicado en la ',
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
        id: 'terceros',
        heading: 'Sitios de terceros',
        blocks: [
          {
            paragraph: [
              'Si abre WhatsApp, Facebook o Google Maps desde nuestros enlaces, esos sitios pueden usar sus propias cookies. Consulte sus políticas en cada servicio.',
            ],
          },
        ],
      },
      {
        id: 'cambios',
        heading: 'Si esto cambia',
        blocks: [
          {
            paragraph: [
              'Si en el futuro agregamos alguna herramienta que use cookies no esenciales, le pediremos su consentimiento antes de activarla y actualizaremos esta página.',
            ],
          },
        ],
      },
    ],
  },

  refunds: {
    intro: [
      `Casi todo lo que hacemos en ${name} se fabrica a la medida de su espacio. Esta política explica cómo funcionan los anticipos, las cancelaciones, las devoluciones y las garantías, conforme a la `,
      LAWS.consumer.es,
      '.',
    ],
    summary:
      'Como casi todo se fabrica a la medida, fabricamos cuando usted acepta la cotización escrita y respondemos si el trabajo tiene defectos o no coincide con lo cotizado.',
    keyPoints: [
      [
        'Empezamos a fabricar cuando usted acepta la cotización escrita y deposita el 50 % de anticipo.',
      ],
      ['Puede cancelar avisándonos por escrito; se cobra lo invertido hasta ese momento.'],
      ['Si contrató a distancia, puede retractarse en ocho días si el servicio no ha comenzado.'],
      ['Reparamos o cambiamos sin costo los defectos que sean nuestros, reportados en 1 semana.'],
      ['Los reembolsos se pagan por el mismo medio, en un máximo de 15 días.'],
    ],
    faq: [
      {
        question: '¿Puedo cancelar un pedido?',
        answer:
          'Sí, avisándonos por escrito, pero se cobrará todo lo invertido hasta el momento de la cancelación. Si contrató completamente a distancia, puede retractarse en los ocho días siguientes, salvo que el servicio ya haya comenzado.',
      },
      {
        question: '¿Qué pasa si el trabajo tiene defectos?',
        answer:
          'Avísenos en un máximo de 1 semana. Revisamos el trabajo y lo reparamos o cambiamos sin costo si el defecto es nuestro. Si la reparación no lo resuelve, usted elige entre cambio, rebaja o devolución.',
      },
      {
        question: '¿Cuánto tarda un reembolso?',
        answer:
          'Cuando corresponde, devolvemos el dinero por el mismo medio de pago en un máximo de 15 días.',
      },
    ],
    sections: [
      {
        id: 'alcance',
        heading: 'A qué se aplica',
        blocks: [
          {
            paragraph: [
              'Se aplica a los productos fabricados a la medida: ventanas, puertas de vidrio, vidrios fijos y espejos.',
            ],
          },
        ],
      },
      {
        id: 'anticipo',
        heading: 'Cotización y anticipo',
        blocks: [
          {
            paragraph: [
              'Empezamos a fabricar cuando usted acepta la cotización escrita. Anticipo: ',
              fact(legal.refunds.deposit, L),
              '.',
            ],
          },
        ],
      },
      {
        id: 'cancelacion',
        heading: 'Si usted cancela',
        blocks: [
          {
            paragraph: [
              'Puede cancelar avisándonos por escrito. Aplicaremos lo que establece la Ley de Protección al Consumidor para contratos con entrega posterior. Si el contrato se cerró por completo a distancia (por teléfono, WhatsApp o correo, sin visitarnos), usted tiene derecho a retractarse en los ocho días siguientes, salvo que el servicio ya haya comenzado.',
            ],
          },
          {
            paragraph: [
              'Condiciones de cancelación una vez iniciada la fabricación: ',
              fact(legal.refunds.cancellation, L),
              '.',
            ],
          },
        ],
      },
      {
        id: 'devoluciones',
        heading: 'Devoluciones y defectos',
        blocks: [
          {
            paragraph: [
              'Devoluciones de una pieza ya fabricada a la medida: ',
              fact(legal.refunds.returns, L),
              '. En todos los casos respondemos cuando el trabajo no coincide con lo cotizado o tiene defectos:',
            ],
          },
          {
            list: [
              ['Avísenos en cuanto note el problema, con fotos si puede.'],
              [
                'Revisaremos el trabajo y lo repararemos o cambiaremos sin costo si el defecto es nuestro.',
              ],
              [
                'Si la reparación no resuelve el problema, usted puede elegir entre el cambio de la pieza, una rebaja del precio o la devolución de lo pagado, como establece la ley.',
              ],
            ],
          },
        ],
      },
      {
        id: 'garantia',
        heading: 'Garantía',
        blocks: [
          { paragraph: ['Ventanas, puertas y espejos: ', fact(legal.refunds.warranty, L), '.'] },
          {
            paragraph: [
              'Cualquier garantía que ofrezcamos constará por escrito en la cotización o la factura, con su plazo y lo que cubre.',
            ],
          },
        ],
      },
      {
        id: 'reembolsos',
        heading: 'Cómo se hacen los reembolsos',
        blocks: [
          {
            paragraph: [
              'Cuando corresponda devolver dinero, lo haremos por el mismo medio de pago que usted usó, en un máximo de 15 días.',
            ],
          },
        ],
      },
      {
        id: 'solicitud',
        heading: 'Cómo solicitarlo',
        blocks: [
          {
            paragraph: [
              'Escríbanos a ',
              email,
              ', por ',
              whatsapp,
              ' o llame al ',
              phone,
              ', con su nombre y la fecha de la cotización. Si no llegamos a un acuerdo, puede acudir a la ',
              LAWS.defensoria,
              '.',
            ],
          },
        ],
      },
    ],
  },
};
