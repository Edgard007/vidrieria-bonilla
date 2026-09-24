import type { Locale } from '@/i18n/locales';
import type { QuoteErrorCode } from '@/lib/quote-form';
import type { LegalPageKey } from '@/i18n/routes';

export type SectionId = 'about' | 'products' | 'materials' | 'process' | 'work' | 'faq' | 'contact';

type UiStrings = {
  skipToContent: string;
  sections: Record<SectionId, { id: string; nav: string; title: string; lede?: string }>;
  nav: {
    label: string;
    openMenu: string;
    closeMenu: string;
    home: string;
    languageLabel: string;
  };
  cta: {
    whatsapp: string;
    seeServices: string;
  };
  hero: {
    measureLabel: string;
    pause: string;
    play: string;
    slideLabel: (n: number, total: number) => string;
  };
  products: {
    listLabel: string;
    categories: Record<'windows' | 'doors' | 'mirrors' | 'custom', string>;
    photoFallback: string;
    showPhoto: (n: number) => string;
    features: string;
    quote: string;
    seeColours: string;
  };
  materials: {
    frameMaterial: string;
    frameColour: string;
    glassColour: string;
    previewLabel: string;
    previewNote: string;
    summary: string;
    quoteCombination: string;
    combinationMessage: (frame: string, frameColour: string, glass: string) => string;
  };
  process: { stepLabel: (n: number, total: number) => string };
  work: { filterLabel: string; all: string; showMore: string; showLess: string };
  gallery: {
    open: string;
    close: string;
    previous: string;
    next: string;
    counter: (current: number, total: number) => string;
    dialogLabel: string;
  };
  about: { mission: string; vision: string; visit: string; statementsLabel: string };
  contact: {
    channelsTitle: string;
    whatsapp: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    facebook: string;
    instagram: string;
    openMap: string;
    formTitle: string;
    formIntro: string;
  };
  form: {
    name: string;
    phone: string;
    phoneHint: string;
    email: string;
    optional: string;
    service: string;
    servicePlaceholder: string;
    message: string;
    messageHint: string;
    privacy: (name: string) => { before: string; link: string; after: string };
    submitEmail: string;
    submitWhatsapp: string;
    whatsappNote: string;
    sending: string;
    success: string;
    whatsappOpened: string;
    failure: string;
    failureFallback: string;
    errorSummary: (count: number) => string;
    errors: Record<QuoteErrorCode, string>;
    whatsappTemplate: {
      name: string;
      phone: string;
      email: string;
      service: string;
      message: string;
    };
    honeypot: string;
  };
  footer: {
    legalTitle: string;
    contactTitle: string;
    rights: (year: number, name: string) => string;
    noCookies: string;
    createdBy: string;
    logoAlt: (name: string) => string;
  };
  legal: {
    titles: Record<LegalPageKey, string>;
    metaTitles: Record<LegalPageKey, string>;
    breadcrumbLabel: string;
    legalHub: string;
    summaryTitle: string;
    keyPoints: string;
    ctaText: string;
    ctaButton: string;
    faqTitle: string;
    seeAlso: string;
    descriptions: Record<LegalPageKey, (name: string) => string>;
    lastUpdated: string;
    pendingLabel: string;
    draftNotice: string;
    backHome: string;
    onThisPage: string;
  };
  summary: { title: string; keyPoints: string; label: string };
  share: { button: string; copied: string; failed: string; call: string };
  notFound: { heading: string; title: string; body: string; back: string };
};

export const UI: Record<Locale, UiStrings> = {
  es: {
    skipToContent: 'Saltar al contenido',
    sections: {
      about: { id: 'nosotros', nav: 'Nosotros', title: 'Nuestro taller en Jayaque' },
      products: {
        id: 'productos',
        nav: 'Productos',
        title: 'Lo que fabricamos',
        lede: 'Elija un producto para ver fotos de trabajos reales y sus características.',
      },
      materials: {
        id: 'colores',
        nav: 'Colores',
        title: 'Marcos y vidrios a su gusto',
        lede: 'Combine el material y el color del marco con el color del vidrio.',
      },
      process: {
        id: 'proceso',
        nav: 'Proceso',
        title: 'De la medida a la instalación',
        lede: 'Nos encargamos de todo el trabajo, de principio a fin.',
      },
      work: {
        id: 'trabajos',
        nav: 'Trabajos',
        title: 'Trabajos del taller',
        lede: 'Fotos de ventanas, puertas y vidrios instalados por nuestro equipo.',
      },
      faq: { id: 'preguntas', nav: 'Preguntas', title: 'Preguntas frecuentes' },
      contact: {
        id: 'contacto',
        nav: 'Contacto',
        title: 'Pida su cotización',
        lede: 'Cuéntenos qué necesita. Le respondemos en horario de atención.',
      },
    },
    nav: {
      label: 'Principal',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      home: 'Inicio',
      languageLabel: 'Idioma',
    },
    cta: {
      whatsapp: 'Cotizar por WhatsApp',
      seeServices: 'Ver productos',
    },
    hero: {
      measureLabel: 'a su medida',
      pause: 'Pausar fotos',
      play: 'Reanudar fotos',
      slideLabel: (n, total) => `Foto ${n} de ${total}`,
    },
    products: {
      listLabel: 'Productos',
      categories: {
        windows: 'Ventanas y vidrios',
        doors: 'Puertas',
        mirrors: 'Espejos',
        custom: 'A la medida',
      },
      photoFallback: 'Dibujo de referencia. Pronto agregaremos fotos de este trabajo.',
      showPhoto: (n) => `Ver foto ${n}`,
      features: 'Características',
      quote: 'Cotizar este producto',
      seeColours: 'Ver colores de marco y vidrio',
    },
    materials: {
      frameMaterial: 'Material del marco',
      frameColour: 'Color del marco',
      glassColour: 'Color del vidrio',
      previewLabel: 'Vista previa de la combinación elegida',
      previewNote: 'Vista ilustrativa. El tono real del vidrio cambia con la luz.',
      summary: 'Su combinación',
      quoteCombination: 'Cotizar esta combinación',
      combinationMessage: (frame, frameColour, glass) =>
        `Me interesa una ventana con marco de ${frame.toLowerCase()} color ${frameColour.toLowerCase()} y vidrio ${glass.toLowerCase()}.`,
    },
    process: { stepLabel: (n, total) => `Paso ${n} de ${total}` },
    work: {
      filterLabel: 'Filtrar trabajos',
      all: 'Todos',
      showMore: 'Ver más trabajos',
      showLess: 'Ver menos',
    },
    gallery: {
      open: 'Ver foto ampliada',
      close: 'Cerrar',
      previous: 'Foto anterior',
      next: 'Foto siguiente',
      counter: (current, total) => `${current} de ${total}`,
      dialogLabel: 'Galería de trabajos',
    },
    about: {
      mission: 'Misión',
      vision: 'Visión',
      visit: 'Cómo llegar',
      statementsLabel: 'Misión y visión',
    },
    contact: {
      channelsTitle: 'Escríbanos o visítenos',
      whatsapp: 'WhatsApp',
      phone: 'Teléfono',
      email: 'Correo',
      address: 'Dirección',
      hours: 'Horario',
      facebook: 'Facebook',
      instagram: 'Instagram',
      openMap: 'Abrir en Google Maps',
      formTitle: 'Formulario de cotización',
      formIntro: 'Los campos marcados como opcionales se pueden dejar en blanco.',
    },
    form: {
      name: 'Nombre',
      phone: 'Teléfono o WhatsApp',
      phoneHint: 'Le contactaremos a este número.',
      email: 'Correo',
      optional: 'opcional',
      service: 'Servicio',
      servicePlaceholder: 'Elija un servicio',
      message: 'Qué necesita',
      messageHint: 'Incluya medidas aproximadas si las tiene.',
      privacy: (name) => ({
        before: `Acepto que ${name} use estos datos solo para responder mi solicitud, incluso mediante servicios con servidores fuera de El Salvador, según la `,
        link: 'política de privacidad',
        after: '.',
      }),
      submitEmail: 'Enviar solicitud',
      submitWhatsapp: 'Enviar por WhatsApp',
      whatsappNote:
        'Al enviar se abrirá WhatsApp con su mensaje listo. Usted decide si lo manda desde ahí.',
      sending: 'Enviando…',
      success: 'Recibimos su solicitud. Le contactaremos en horario de atención.',
      whatsappOpened:
        'Abrimos WhatsApp con su mensaje. Si no se abrió, escríbanos directamente al número de contacto.',
      failure: 'No pudimos enviar su solicitud.',
      failureFallback:
        'Sus datos siguen en el formulario. Puede intentar de nuevo o escribirnos por:',
      errorSummary: (count) =>
        count === 1 ? 'Revise 1 campo antes de enviar.' : `Revise ${count} campos antes de enviar.`,
      errors: {
        required: 'Este campo es obligatorio.',
        tooShort: 'Escriba un poco más.',
        tooLong: 'El texto es demasiado largo.',
        invalidPhone: 'Escriba un teléfono de al menos 8 dígitos.',
        invalidEmail: 'Revise el correo; parece incompleto.',
        privacyRequired: 'Necesitamos su autorización para responderle.',
      },
      whatsappTemplate: {
        name: 'Nombre',
        phone: 'Teléfono',
        email: 'Correo',
        service: 'Servicio',
        message: 'Detalle',
      },
      honeypot: 'No llene este campo',
    },
    footer: {
      legalTitle: 'Legal',
      contactTitle: 'Contacto',
      rights: (year, name) => `© ${year} ${name}`,
      noCookies: 'Este sitio no usa cookies ni herramientas de seguimiento.',
      createdBy: 'Sitio web creado por',
      logoAlt: (name) => `Logo de ${name}`,
    },
    legal: {
      metaTitles: {
        privacy: 'Privacidad y protección de datos',
        terms: 'Condiciones de uso y cotizaciones',
        cookies: 'Uso de cookies en este sitio',
        refunds: 'Anticipos, garantías y devoluciones',
      },
      breadcrumbLabel: 'Ruta de navegación',
      legalHub: 'Legal',
      summaryTitle: 'En resumen',
      keyPoints: 'Puntos clave',
      ctaText: '¿Tiene dudas sobre este documento? Escríbanos y se las aclaramos.',
      ctaButton: 'Preguntar por WhatsApp',
      faqTitle: 'Preguntas frecuentes',
      seeAlso: 'Consulte también',
      titles: {
        privacy: 'Política de privacidad',
        terms: 'Términos y condiciones',
        cookies: 'Política de cookies',
        refunds: 'Reembolsos, devoluciones y cancelaciones',
      },
      descriptions: {
        privacy: (name) =>
          `Qué datos pide ${name} al cotizar, para qué los usa, quién más interviene y cómo ejercer sus derechos según la ley de El Salvador.`,
        terms: (name) =>
          `Condiciones de uso del sitio de ${name}: cómo funcionan las cotizaciones, el precio aceptado, la propiedad de las fotos y los reclamos.`,
        cookies: () =>
          `Este sitio no usa cookies propias ni de terceros. Vea qué tecnologías intervienen y por qué no le pedimos que acepte ninguna.`,
        refunds: () =>
          `Cómo funcionan anticipos, cancelaciones, devoluciones, garantías y reembolsos en trabajos de vidrio y aluminio hechos a la medida.`,
      },
      lastUpdated: 'Última actualización',
      pendingLabel: 'Pendiente de confirmar',
      draftNotice:
        'Borrador preparado con base en la legislación salvadoreña vigente. Debe revisarlo el negocio y, de preferencia, un profesional en derecho antes de publicarlo.',
      backHome: 'Volver al inicio',
      onThisPage: 'En esta página',
    },
    summary: { title: 'En resumen', keyPoints: 'Cinco puntos clave', label: 'Resumen' },
    share: {
      button: 'Compartir',
      copied: 'Enlace copiado',
      failed: 'No se pudo compartir. Copie la dirección de la página.',
      call: 'Llamar',
    },
    notFound: {
      heading: 'No encontramos esta página',
      title: 'Página no encontrada',
      body: 'La dirección que buscó no existe o cambió.',
      back: 'Ir al inicio',
    },
  },
  en: {
    skipToContent: 'Skip to content',
    sections: {
      about: { id: 'about', nav: 'About', title: 'Our workshop in Jayaque' },
      products: {
        id: 'products',
        nav: 'Products',
        title: 'What we make',
        lede: 'Pick a product to see photos of real jobs and what it offers.',
      },
      materials: {
        id: 'colours',
        nav: 'Colours',
        title: 'Frames and glass your way',
        lede: 'Combine the frame material and colour with the glass colour.',
      },
      process: {
        id: 'process',
        nav: 'Process',
        title: 'From measuring to installation',
        lede: 'We handle the whole job, start to finish.',
      },
      work: {
        id: 'work',
        nav: 'Work',
        title: 'From our workshop',
        lede: 'Photos of windows, doors and glass installed by our team.',
      },
      faq: { id: 'faq', nav: 'FAQ', title: 'Frequently asked questions' },
      contact: {
        id: 'contact',
        nav: 'Contact',
        title: 'Ask for a quote',
        lede: 'Tell us what you need. We reply during opening hours.',
      },
    },
    nav: {
      label: 'Main',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'Home',
      languageLabel: 'Language',
    },
    cta: {
      whatsapp: 'Get a quote on WhatsApp',
      seeServices: 'See products',
    },
    hero: {
      measureLabel: 'made to measure',
      pause: 'Pause photos',
      play: 'Play photos',
      slideLabel: (n, total) => `Photo ${n} of ${total}`,
    },
    products: {
      listLabel: 'Products',
      categories: {
        windows: 'Windows and glass',
        doors: 'Doors',
        mirrors: 'Mirrors',
        custom: 'Made to order',
      },
      photoFallback: 'Reference drawing. Photos of this work are coming soon.',
      showPhoto: (n) => `Show photo ${n}`,
      features: 'Features',
      quote: 'Get a quote for this',
      seeColours: 'See frame and glass colours',
    },
    materials: {
      frameMaterial: 'Frame material',
      frameColour: 'Frame colour',
      glassColour: 'Glass colour',
      previewLabel: 'Preview of the chosen combination',
      previewNote: 'Illustrative view. Real glass tones change with the light.',
      summary: 'Your combination',
      quoteCombination: 'Get a quote for this combination',
      combinationMessage: (frame, frameColour, glass) =>
        `I am interested in a window with a ${frameColour.toLowerCase()} ${frame.toLowerCase()} frame and ${glass.toLowerCase()} glass.`,
    },
    process: { stepLabel: (n, total) => `Step ${n} of ${total}` },
    work: {
      filterLabel: 'Filter work',
      all: 'All',
      showMore: 'Show more work',
      showLess: 'Show less',
    },
    gallery: {
      open: 'View larger photo',
      close: 'Close',
      previous: 'Previous photo',
      next: 'Next photo',
      counter: (current, total) => `${current} of ${total}`,
      dialogLabel: 'Work gallery',
    },
    about: {
      mission: 'Mission',
      vision: 'Vision',
      visit: 'Get directions',
      statementsLabel: 'Mission and vision',
    },
    contact: {
      channelsTitle: 'Message or visit us',
      whatsapp: 'WhatsApp',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Opening hours',
      facebook: 'Facebook',
      instagram: 'Instagram',
      openMap: 'Open in Google Maps',
      formTitle: 'Quote request form',
      formIntro: 'Fields marked optional can be left blank.',
    },
    form: {
      name: 'Name',
      phone: 'Phone or WhatsApp',
      phoneHint: 'We will contact you on this number.',
      email: 'Email',
      optional: 'optional',
      service: 'Service',
      servicePlaceholder: 'Choose a service',
      message: 'What you need',
      messageHint: 'Include approximate measurements if you have them.',
      privacy: (name) => ({
        before: `I agree that ${name} may use this information only to answer my request, including through services with servers outside El Salvador, as described in the `,
        link: 'privacy policy',
        after: '.',
      }),
      submitEmail: 'Send request',
      submitWhatsapp: 'Send on WhatsApp',
      whatsappNote:
        'Sending opens WhatsApp with your message ready. You decide whether to send it from there.',
      sending: 'Sending…',
      success: 'We received your request. We will contact you during opening hours.',
      whatsappOpened:
        'We opened WhatsApp with your message. If it did not open, message us directly at our contact number.',
      failure: 'We could not send your request.',
      failureFallback: 'Your details are still in the form. You can try again or reach us by:',
      errorSummary: (count) =>
        count === 1 ? 'Check 1 field before sending.' : `Check ${count} fields before sending.`,
      errors: {
        required: 'This field is required.',
        tooShort: 'Please write a little more.',
        tooLong: 'This text is too long.',
        invalidPhone: 'Enter a phone number with at least 8 digits.',
        invalidEmail: 'Check the email address; it looks incomplete.',
        privacyRequired: 'We need your permission to reply to you.',
      },
      whatsappTemplate: {
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        service: 'Service',
        message: 'Details',
      },
      honeypot: 'Leave this field empty',
    },
    footer: {
      legalTitle: 'Legal',
      contactTitle: 'Contact',
      rights: (year, name) => `© ${year} ${name}`,
      noCookies: 'This site uses no cookies or tracking tools.',
      createdBy: 'Website by',
      logoAlt: (name) => `${name} logo`,
    },
    legal: {
      metaTitles: {
        privacy: 'Privacy and data protection',
        terms: 'Terms of use and quotes',
        cookies: 'Use of cookies on this site',
        refunds: 'Deposits, warranties and returns',
      },
      breadcrumbLabel: 'Breadcrumb',
      legalHub: 'Legal',
      summaryTitle: 'In short',
      keyPoints: 'Key points',
      ctaText: 'Questions about this document? Message us and we will clear them up.',
      ctaButton: 'Ask on WhatsApp',
      faqTitle: 'Frequently asked questions',
      seeAlso: 'See also',
      titles: {
        privacy: 'Privacy policy',
        terms: 'Terms and conditions',
        cookies: 'Cookie policy',
        refunds: 'Refunds, returns and cancellations',
      },
      descriptions: {
        privacy: (name) =>
          `What data ${name} asks for when you request a quote, what it is used for, who else is involved and how to exercise your rights.`,
        terms: (name) =>
          `Terms of use for the ${name} website: how quotes work, what an accepted price means, who owns the photos and how to complain.`,
        cookies: () =>
          `This site uses no first-party or third-party cookies. See which technologies are involved and why you are never asked to accept any.`,
        refunds: () =>
          `How deposits, cancellations, returns, warranties and refunds work for made-to-measure glass and aluminium work.`,
      },
      lastUpdated: 'Last updated',
      pendingLabel: 'Pending confirmation',
      draftNotice:
        'Draft prepared under current Salvadoran law. The business, and ideally a lawyer, must review it before publication. The Spanish version prevails.',
      backHome: 'Back to home',
      onThisPage: 'On this page',
    },
    summary: { title: 'In short', keyPoints: 'Five key points', label: 'Summary' },
    share: {
      button: 'Share',
      copied: 'Link copied',
      failed: 'Could not share. Copy the page address instead.',
      call: 'Call',
    },
    notFound: {
      heading: 'We could not find this page',
      title: 'Page not found',
      body: 'The address you requested does not exist or has moved.',
      back: 'Go to home',
    },
  },
};
