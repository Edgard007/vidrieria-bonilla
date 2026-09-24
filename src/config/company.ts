/**
 * Single source of truth for everything specific to Vidriería Bonilla: identity, contact, products,
 * materials, photos, FAQ and the business facts that the legal pages depend on. Generic interface
 * copy lives in `src/i18n/ui.ts`; nothing in this file should be repeated anywhere else.
 *
 * Sources, checked 2026-09-24:
 * - https://vidrieriabonilla.wordpress.com/ (home, Catálogo, Contáctanos)
 * - The business's WhatsApp catalog (6 products, descriptions and photos)
 * - The business's Facebook page (service description and photos)
 * - Glass options quoted by the business to the owner of this project over WhatsApp
 * Anything else is marked `pending` or `pendingConfirmation`.
 */
import bathDoorBlackFrostedWide from '@/assets/images/work/puerta-bano-aluminio-negro-vidrio-texturizado-toallero.jpg';
import bathDoorBlackFrosted from '@/assets/images/work/puerta-bano-aluminio-negro-vidrio-texturizado.jpg';
import bathDoorWhiteFrosted from '@/assets/images/work/puerta-bano-aluminio-blanco-vidrio-esmerilado.jpg';
import carMirrorRepair from '@/assets/images/work/reparacion-retrovisor-carro.jpg';
import doorWindowWhiteCombo from '@/assets/images/work/puerta-ventana-aluminio-blanco.jpg';
import fixedGlassBlackFacade from '@/assets/images/work/vidrios-fijos-fachada-aluminio-negro.jpg';
import fixedGlassBlackTerrace from '@/assets/images/work/vidrios-fijos-terraza-aluminio-negro.jpg';
import frenchWindowBlackWorkshop from '@/assets/images/work/ventana-aluminio-negro-taller.jpg';
import frenchWindowBlack from '@/assets/images/work/ventana-francesa-aluminio-negro.jpg';
import frenchWindowWhite from '@/assets/images/work/ventana-francesa-aluminio-blanco.jpg';
import gardenDoorBlackBalcony from '@/assets/images/work/puerta-corrediza-balcon-aluminio-negro.jpg';
import gardenDoorBlackLivingRoom from '@/assets/images/work/puerta-jardin-aluminio-negro-sala.jpg';
import gardenDoorBlackPatio from '@/assets/images/work/puerta-jardin-aluminio-negro-patio.jpg';
import gardenDoorWoodDarkGlass from '@/assets/images/work/puerta-corrediza-tono-madera-vidrio-oscuro.jpg';
import sashWindowWhiteBlueReflective from '@/assets/images/work/ventana-guillotina-vidrio-azul-reflectivo.jpg';
import sashWindowWhiteClear from '@/assets/images/work/ventana-guillotina-aluminio-blanco.jpg';
import slidingWindowBlackGreenGlass from '@/assets/images/work/ventana-corrediza-aluminio-negro-cuadricula.jpg';
import slidingWindowWhiteClear from '@/assets/images/work/ventana-corrediza-aluminio-blanco-vidrio-claro.jpg';
import slidingWindowWoodDarkGlass from '@/assets/images/work/ventana-corrediza-tono-madera-vidrio-oscuro.jpg';
import slidingWindowWoodGridDarkGlass from '@/assets/images/work/ventana-tono-madera-cuadricula-vidrio-oscuro.jpg';
import windowBronzeGlass from '@/assets/images/work/ventana-corrediza-vidrio-bronce.jpg';
import windowWhiteBlueReflective from '@/assets/images/work/ventana-aluminio-blanco-vidrio-azul-reflectivo.jpg';
import windowWhiteGridArches from '@/assets/images/work/ventana-corrediza-aluminio-blanco-arcos.jpg';
import windowWhiteGridBlueSky from '@/assets/images/work/ventana-aluminio-blanco-cuatro-hojas.jpg';
import windowWhiteGridGarden from '@/assets/images/work/ventana-francesa-aluminio-blanco-patio.jpg';
import windowWhiteSlidingTransom from '@/assets/images/work/ventana-corrediza-aluminio-blanco-fijo-superior.jpg';
import windowWhiteSliding from '@/assets/images/work/ventana-aluminio-blanco-cuadricula.jpg';
import workshopJayaque from '@/assets/images/taller-vidrieria-bonilla-jayaque.jpg';
import logo from '@/assets/brand/logo-vidrieria-bonilla.png';
import type { Localized } from '@/i18n/locales';
import type {
  FaqItem,
  FrameMaterial,
  GalleryItem,
  LegalFacts,
  OpeningHours,
  Photo,
  ProcessStep,
  Product,
  SummaryPoint,
  Swatch,
} from '@/types/company';

const PHONE_DISPLAY = '2382-1308';
const PHONE_E164 = '+50323821308';

/** Every photo is declared once and reused by products and the gallery. */
const PHOTOS = {
  frenchWindowBlack: {
    src: frenchWindowBlack,
    alt: {
      es: 'Ventana francesa de aluminio negro con cuadrícula, terminada en el taller.',
      en: 'Black aluminium French window with grid bars, finished in the workshop.',
    },
  },
  frenchWindowBlackWorkshop: {
    src: frenchWindowBlackWorkshop,
    alt: {
      es: 'Ventana de aluminio negro recién terminada, apoyada en la pared del taller.',
      en: 'A newly finished black aluminium window leaning against the workshop wall.',
    },
  },
  slidingWindowBlackGreenGlass: {
    src: slidingWindowBlackGreenGlass,
    alt: {
      es: 'Ventana corrediza de aluminio negro con cuadrícula y vidrio oscuro de tono verdoso.',
      en: 'Black aluminium sliding window with grid bars and dark, greenish glass.',
    },
  },
  slidingWindowWoodDarkGlass: {
    src: slidingWindowWoodDarkGlass,
    alt: {
      es: 'Ventana corrediza de dos hojas con marco tono madera y vidrio oscuro.',
      en: 'Two-panel sliding window with a wood-tone frame and dark glass.',
    },
  },
  slidingWindowWoodGridDarkGlass: {
    src: slidingWindowWoodGridDarkGlass,
    alt: {
      es: 'Ventana corrediza con cuadrícula, marco tono madera y vidrio oscuro.',
      en: 'Sliding window with grid bars, a wood-tone frame and dark glass.',
    },
  },
  slidingWindowWhiteClear: {
    src: slidingWindowWhiteClear,
    alt: {
      es: 'Ventana corrediza de aluminio blanco con cuadrícula y vidrio claro.',
      en: 'White aluminium sliding window with grid bars and clear glass.',
    },
  },
  windowWhiteGridArches: {
    src: windowWhiteGridArches,
    alt: {
      es: 'Ventana corrediza de aluminio blanco instalada frente a un corredor con arcos.',
      en: 'White aluminium sliding window installed facing an arched corridor.',
    },
  },
  windowWhiteGridBlueSky: {
    src: windowWhiteGridBlueSky,
    alt: {
      es: 'Ventana de aluminio blanco con cuadrícula; a través del vidrio se ve el cielo azul.',
      en: 'White aluminium window with grid bars; blue sky shows through the glass.',
    },
    focus: '50% 45%',
  },
  frenchWindowWhite: {
    src: frenchWindowWhite,
    alt: {
      es: 'Ventana francesa de aluminio blanco; afuera se ven árboles y un terreno con piedras.',
      en: 'White aluminium French window; trees and a stony yard are visible outside.',
    },
  },
  windowWhiteGridGarden: {
    src: windowWhiteGridGarden,
    alt: {
      es: 'Ventana de aluminio blanco con cuadrícula en un cuarto sin repellar, con vista a un patio.',
      en: 'White aluminium window with grid bars in an unplastered room, looking onto a yard.',
    },
  },
  windowWhiteSliding: {
    src: windowWhiteSliding,
    alt: {
      es: 'Ventana de aluminio blanco con cuadrícula en una pared gris, vista en ángulo.',
      en: 'White aluminium window with grid bars in a grey wall, seen at an angle.',
    },
  },
  windowBronzeGlass: {
    src: windowBronzeGlass,
    alt: {
      es: 'Ventana corrediza con marco de aluminio y vidrio bronce, cortinas detrás.',
      en: 'Sliding window with an aluminium frame and bronze glass, curtains behind it.',
    },
  },
  sashWindowWhiteBlueReflective: {
    src: sashWindowWhiteBlueReflective,
    alt: {
      es: 'Ventana guillotina de aluminio blanco en pared de bloque; la parte superior lleva vidrio azul reflectivo.',
      en: 'White aluminium sash window in a block wall; the upper sash has blue reflective glass.',
    },
  },
  sashWindowWhiteClear: {
    src: sashWindowWhiteClear,
    alt: {
      es: 'Ventana guillotina de aluminio blanco con cuadrícula, vista desde un corredor.',
      en: 'White aluminium sash window with grid bars, seen from a corridor.',
    },
  },
  windowWhiteBlueReflective: {
    src: windowWhiteBlueReflective,
    alt: {
      es: 'Ventana de aluminio blanco con cuadrícula y vidrio azul reflectivo en una fachada repellada.',
      en: 'White aluminium window with grid bars and blue reflective glass on a plastered facade.',
    },
  },
  windowWhiteSlidingTransom: {
    src: windowWhiteSlidingTransom,
    alt: {
      es: 'Ventana corrediza de aluminio blanco de cuatro hojas con fijo superior, detrás de una verja.',
      en: 'Four-panel white aluminium sliding window with a fixed upper pane, behind a security grille.',
    },
  },
  fixedGlassBlackFacade: {
    src: fixedGlassBlackFacade,
    alt: {
      es: 'Segundo piso cerrado con vidrios fijos y perfiles de aluminio negro, visto desde la calle.',
      en: 'Upper floor enclosed with fixed glass panes and black aluminium profiles, seen from the street.',
    },
  },
  fixedGlassBlackTerrace: {
    src: fixedGlassBlackTerrace,
    alt: {
      es: 'Terraza cerrada con vidrios fijos y perfiles de aluminio negro al atardecer.',
      en: 'Terrace enclosed with fixed glass panes and black aluminium profiles at dusk.',
    },
  },
  gardenDoorBlackLivingRoom: {
    src: gardenDoorBlackLivingRoom,
    alt: {
      es: 'Puerta corrediza de aluminio negro con vidrio claro entre la sala y el exterior.',
      en: 'Black aluminium sliding door with clear glass between the living room and outside.',
    },
  },
  gardenDoorBlackPatio: {
    src: gardenDoorBlackPatio,
    alt: {
      es: 'Puerta corrediza de aluminio negro que abre hacia un patio techado con piso de azulejo.',
      en: 'Black aluminium sliding door opening onto a covered patio with tiled floor.',
    },
  },
  gardenDoorBlackBalcony: {
    src: gardenDoorBlackBalcony,
    alt: {
      es: 'Puerta corrediza de aluminio negro de dos hojas hacia un balcón.',
      en: 'Two-panel black aluminium sliding door leading to a balcony.',
    },
  },
  gardenDoorWoodDarkGlass: {
    src: gardenDoorWoodDarkGlass,
    alt: {
      es: 'Puerta corrediza con marco tono madera y vidrio oscuro, en una obra gris.',
      en: 'Sliding door with a wood-tone frame and dark glass, in a building under construction.',
    },
  },
  doorWindowWhiteCombo: {
    src: doorWindowWhiteCombo,
    alt: {
      es: 'Ventana corrediza con fijo superior y puerta de aluminio blanco con vidrio claro, lado a lado.',
      en: 'Sliding window with a fixed upper pane next to a white aluminium door with clear glass.',
    },
  },
  bathDoorBlackFrosted: {
    src: bathDoorBlackFrosted,
    alt: {
      es: 'Puerta de baño corrediza de aluminio negro con vidrio texturizado, entre paredes enchapadas.',
      en: 'Black aluminium sliding bathroom door with textured glass, between tiled walls.',
    },
  },
  bathDoorBlackFrostedWide: {
    src: bathDoorBlackFrostedWide,
    alt: {
      es: 'Puerta de baño de aluminio negro con vidrio texturizado y barra toallera.',
      en: 'Black aluminium bathroom door with textured glass and a towel bar.',
    },
  },
  bathDoorWhiteFrosted: {
    src: bathDoorWhiteFrosted,
    alt: {
      es: 'Puerta de baño de aluminio blanco con vidrio esmerilado, en un baño en construcción.',
      en: 'White aluminium bathroom door with frosted glass, in a bathroom under construction.',
    },
  },
  carMirrorRepair: {
    src: carMirrorRepair,
    alt: {
      es: 'Un trabajador de Vidriería Bonilla repara el retrovisor lateral de un carro.',
      en: 'A Vidriería Bonilla worker repairs the side mirror of a car.',
    },
  },
} satisfies Record<string, Photo>;

export const COMPANY = {
  name: 'Vidriería Bonilla',
  logo,
  logoLine: 'Glass.Original',
  tagline: {
    es: 'Calidad y confianza en vidrio y aluminio',
    en: 'Quality and trust in glass and aluminium',
  } satisfies Localized,
  description: {
    es: 'Vidriería en Jayaque, La Libertad: ventanas, puertas de jardín y baño, vidrios fijos y espejos a la medida, con instalación. Reparamos retrovisores.',
    en: 'Glass shop in Jayaque, El Salvador: made-to-measure windows, garden and bathroom doors, fixed glass and mirrors, installed. Car mirror repair too.',
  } satisfies Localized,

  contact: {
    phoneDisplay: PHONE_DISPLAY,
    phoneE164: PHONE_E164,
    /** The current site lists this same number as the WhatsApp line. */
    whatsappE164: PHONE_E164,
    whatsappGreeting: {
      es: 'Hola, Vidriería Bonilla. Quisiera una cotización.',
      en: 'Hello, Vidriería Bonilla. I would like a quote.',
    } satisfies Localized,
    email: 'vidrieriabonilla@gmail.com',
  },

  address: {
    street: 'Colonia Llano Verde, Pasaje Las Acacias 54D, carretera a Jayaque',
    district: 'Jayaque',
    municipality: 'La Libertad Oeste',
    department: 'La Libertad',
    country: 'El Salvador',
    countryCode: 'SV',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Vidrieria%20Bonilla%2C%20Colonia%20Llano%20Verde%2C%20Jayaque%2C%20La%20Libertad%2C%20El%20Salvador',
  },

  hours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      label: { es: 'Lunes a viernes', en: 'Monday to Friday' },
      opens: '08:00',
      closes: '17:00',
      display: { es: '8:00 a.m. a 5:00 p.m.', en: '8:00 a.m. to 5:00 p.m.' },
    },
    {
      days: ['Saturday'],
      label: { es: 'Sábado', en: 'Saturday' },
      opens: '08:00',
      closes: '12:00',
      display: { es: '8:00 a.m. a 12:00 m.', en: '8:00 a.m. to 12:00 noon' },
    },
  ] satisfies OpeningHours[],

  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61570816670084',
    instagram: 'https://www.instagram.com/vidrieriabonilla/',
  },

  seo: {
    homeTitle: {
      es: 'Vidriería en Jayaque, La Libertad | Vidriería Bonilla',
      en: 'Glass Shop in Jayaque, El Salvador | Vidriería Bonilla',
    } satisfies Localized,
  },

  /** Short answer to what a visitor is looking for, shown right after the hero. */
  summary: {
    intro: {
      es: 'Vidriería Bonilla fabrica e instala ventanas, puertas, vidrios fijos y espejos a la medida en Jayaque, La Libertad, y repara espejos de carro.',
      en: 'Vidriería Bonilla makes and installs made-to-measure windows, doors, fixed glass and mirrors in Jayaque, La Libertad, and repairs car mirrors.',
    } satisfies Localized,
    points: [
      {
        section: 'products',
        text: {
          es: 'Ventanas francesas, corredizas y guillotina, vidrios fijos, puertas de jardín y de baño, y espejos decorativos.',
          en: 'French, sliding and sash windows, fixed glass, garden and bathroom doors, and decorative mirrors.',
        },
      },
      {
        section: 'process',
        text: {
          es: 'Servicio completo: asesoría, medida, fabricación en nuestro taller e instalación.',
          en: 'Full service: advice, measuring, fabrication at our workshop and installation.',
        },
      },
      {
        section: 'materials',
        text: {
          es: 'Marcos blancos, negros, grises o tono madera; vidrio claro, gris oscuro, azul reflectivo, bronce o esmerilado.',
          en: 'White, black, grey or wood-tone frames; clear, dark grey, blue reflective, bronze or frosted glass.',
        },
      },
      {
        section: 'work',
        text: {
          es: 'Más de 20 fotos de trabajos reales hechos por nuestro equipo en casas y negocios.',
          en: 'Over 20 photos of real jobs done by our team in homes and businesses.',
        },
      },
      {
        section: 'contact',
        text: {
          es: 'Cotización por WhatsApp o al 2382-1308, de lunes a viernes de 8:00 a.m. a 5:00 p.m. y sábados hasta el mediodía.',
          en: 'Quotes on WhatsApp or at 2382-1308, Monday to Friday 8:00 a.m. to 5:00 p.m. and Saturday until noon.',
        },
      },
    ] satisfies SummaryPoint[],
  },

  hero: {
    title: {
      es: 'Vidrio y aluminio a la medida de su espacio',
      en: 'Glass and aluminium, made to your measurements',
    } satisfies Localized,
    lede: {
      es: 'Ventanas, puertas y vidrios fijos para su casa o negocio. Le asesoramos, medimos, fabricamos en Jayaque e instalamos.',
      en: 'Windows, doors and fixed glass for your home or business. We advise, measure, fabricate in Jayaque and install.',
    } satisfies Localized,
    /** Shown in turn inside the hero frame; the first one is the largest contentful paint. */
    photos: [
      PHOTOS.windowWhiteGridBlueSky,
      PHOTOS.gardenDoorBlackBalcony,
      PHOTOS.fixedGlassBlackTerrace,
      PHOTOS.bathDoorBlackFrosted,
    ],
  },

  about: {
    intro: {
      es: 'Somos una vidriería de la colonia Llano Verde, sobre la carretera a Jayaque. Nuestro servicio incluye asesoría, medida, fabricación e instalación, con materiales de calidad y cumplimiento en los tiempos acordados.',
      en: 'We are a glass shop in Colonia Llano Verde, on the road to Jayaque. Our service covers advice, measuring, fabrication and installation, with quality materials and delivery on the agreed dates.',
    } satisfies Localized,
    mission: {
      es: 'Brindar soluciones en vidrio y aluminio con altos estándares de calidad, seguridad y diseño, ofreciendo un servicio confiable, accesible y eficiente, enfocado en satisfacer las necesidades de cada cliente y construir relaciones de confianza a largo plazo.',
      en: 'To provide glass and aluminium solutions with high standards of quality, safety and design, offering reliable, accessible and efficient service focused on meeting each customer’s needs and building long-term relationships of trust.',
    } satisfies Localized,
    vision: {
      es: 'Convertirnos en una empresa reconocida en el mercado por nuestra calidad, responsabilidad y excelente servicio, logrando un crecimiento sostenido que nos permita expandir operaciones, generar estabilidad económica y posicionarnos como una de las mejores vidrierías de la zona.',
      en: 'To become a company known for our quality, responsibility and excellent service, growing steadily so we can expand, build economic stability and become one of the best glass shops in the area.',
    } satisfies Localized,
    photo: {
      src: workshopJayaque,
      alt: {
        es: 'Interior del local de Vidriería Bonilla, con perfiles de aluminio en el piso y una lámina de vidrio oscuro apoyada en la pared.',
        en: 'Inside the Vidriería Bonilla shop, with aluminium profiles on the floor and a dark glass sheet leaning against the wall.',
      },
    } satisfies Photo,
    featurePhoto: PHOTOS.fixedGlassBlackFacade,
  },

  products: [
    {
      id: 'french-window-black',
      category: 'windows',
      name: { es: 'Ventana francesa', en: 'French window' },
      label: { es: 'Elegante', en: 'Elegant' },
      summary: {
        es: 'Ventana corrediza moderna para fachadas contemporáneas y casas minimalistas.',
        en: 'Modern sliding window for contemporary facades and minimalist homes.',
      },
      features: {
        es: [
          'Diseño elegante y moderno',
          'Buena ventilación',
          'Combina con fachadas contemporáneas',
        ],
        en: ['Elegant, modern design', 'Good ventilation', 'Suits contemporary facades'],
      },
      photos: [
        PHOTOS.frenchWindowBlack,
        PHOTOS.slidingWindowBlackGreenGlass,
        PHOTOS.slidingWindowWoodGridDarkGlass,
        PHOTOS.slidingWindowWoodDarkGlass,
      ],
      elevation: 'window',
    },
    {
      id: 'sliding-window-white',
      category: 'windows',
      name: { es: 'Ventana corrediza blanca', en: 'White sliding window' },
      label: { es: 'Económica', en: 'Budget' },
      summary: {
        es: 'La opción práctica y accesible para cuartos y baños.',
        en: 'The practical, affordable choice for bedrooms and bathrooms.',
      },
      features: {
        es: [
          'Buena ventilación',
          'Diseño funcional',
          'Fácil mantenimiento',
          'Ideal para cuartos y baños',
        ],
        en: [
          'Good ventilation',
          'Functional design',
          'Easy upkeep',
          'Suited to bedrooms and bathrooms',
        ],
      },
      photos: [
        PHOTOS.windowWhiteGridArches,
        PHOTOS.slidingWindowWhiteClear,
        PHOTOS.windowWhiteGridBlueSky,
        PHOTOS.frenchWindowWhite,
      ],
      elevation: 'window',
    },
    {
      id: 'sash-window',
      category: 'windows',
      name: { es: 'Ventana guillotina', en: 'Sash window' },
      label: { es: 'Premium', en: 'Premium' },
      summary: {
        es: 'Ventana de guillotina con vidrio reflectivo para salas y fachadas.',
        en: 'Sash window with reflective glass for living rooms and facades.',
      },
      features: {
        es: [
          'Reduce la entrada de calor',
          'Más privacidad con vidrio reflectivo',
          'Mejor sellado contra el polvo',
          'Ideal para salas y fachadas',
        ],
        en: [
          'Lets in less heat',
          'More privacy with reflective glass',
          'Better seal against dust',
          'Suited to living rooms and facades',
        ],
      },
      photos: [
        PHOTOS.sashWindowWhiteBlueReflective,
        PHOTOS.sashWindowWhiteClear,
        PHOTOS.windowWhiteBlueReflective,
      ],
      elevation: 'window',
    },
    {
      id: 'fixed-glass',
      category: 'windows',
      name: { es: 'Vidrios fijos', en: 'Fixed glass' },
      label: { es: 'Elegancia', en: 'Elegance' },
      summary: {
        es: 'Paños de vidrio fijo con perfil negro para cerrar terrazas y vestir fachadas.',
        en: 'Fixed glass panes with black profiles to enclose terraces and dress facades.',
      },
      features: {
        es: [
          'Estilo elegante',
          'Mayor contraste visual',
          'Alta durabilidad',
          'Para fachadas modernas',
        ],
        en: ['Elegant style', 'Strong visual contrast', 'Built to last', 'For modern facades'],
      },
      photos: [PHOTOS.fixedGlassBlackFacade, PHOTOS.fixedGlassBlackTerrace],
      elevation: 'custom',
    },
    {
      id: 'garden-door',
      category: 'doors',
      name: { es: 'Puerta de jardín', en: 'Garden door' },
      label: { es: 'Elegante', en: 'Elegant' },
      summary: {
        es: 'Puerta corrediza que conecta la casa con el patio o la terraza.',
        en: 'Sliding door that connects your home with the patio or terrace.',
      },
      features: {
        es: ['Más luz natural', 'Fácil apertura', 'Diseño moderno', 'Ideal para patio o terraza'],
        en: [
          'More natural light',
          'Opens easily',
          'Modern design',
          'Suited to patios and terraces',
        ],
      },
      photos: [
        PHOTOS.gardenDoorBlackLivingRoom,
        PHOTOS.gardenDoorBlackPatio,
        PHOTOS.gardenDoorBlackBalcony,
        PHOTOS.gardenDoorWoodDarkGlass,
      ],
      elevation: 'door',
    },
    {
      id: 'bathroom-door',
      category: 'doors',
      name: { es: 'Puerta de baño', en: 'Bathroom door' },
      label: { es: 'Elegante', en: 'Elegant' },
      summary: {
        es: 'Puerta de aluminio con vidrio texturizado o esmerilado para baños y duchas.',
        en: 'Aluminium door with textured or frosted glass for bathrooms and showers.',
      },
      features: {
        es: ['Resistente a la humedad', 'Da privacidad', 'Fácil limpieza', 'Material duradero'],
        en: ['Moisture resistant', 'Gives privacy', 'Easy to clean', 'Durable material'],
      },
      photos: [
        PHOTOS.bathDoorBlackFrosted,
        PHOTOS.bathDoorBlackFrostedWide,
        PHOTOS.bathDoorWhiteFrosted,
      ],
      elevation: 'door',
    },
    {
      id: 'decorative-mirrors',
      category: 'mirrors',
      name: { es: 'Espejos decorativos', en: 'Decorative mirrors' },
      summary: {
        es: 'Espejos cortados a la medida de la pared donde van, para su casa o su negocio.',
        en: 'Mirrors cut to fit the wall they go on, for your home or business.',
      },
      features: {
        es: ['Cortados a la medida', 'Para casa o negocio'],
        en: ['Cut to size', 'For homes or businesses'],
      },
      photos: [],
      elevation: 'mirror',
    },
    {
      id: 'car-mirrors',
      category: 'mirrors',
      name: { es: 'Espejos de carro', en: 'Car mirrors' },
      summary: {
        es: 'Reparamos retrovisores y cambiamos el vidrio del espejo de su carro.',
        en: 'We repair side mirrors and replace the mirror glass on your car.',
      },
      features: {
        es: ['Reparación de retrovisores', 'Cambio de vidrio'],
        en: ['Side mirror repair', 'Glass replacement'],
      },
      photos: [PHOTOS.carMirrorRepair],
      elevation: 'car-mirror',
    },
    {
      id: 'custom-work',
      category: 'custom',
      name: { es: 'Fabricación personalizada', en: 'Custom fabrication' },
      summary: {
        es: 'Si lo que necesita en vidrio o aluminio no aparece aquí, envíenos las medidas y lo cotizamos.',
        en: 'If the glass or aluminium piece you need is not listed, send us the measurements and we will quote it.',
      },
      features: {
        es: ['Combinaciones de puerta y ventana', 'Ventanas con fijo superior', 'Piezas a pedido'],
        en: ['Door and window combinations', 'Windows with fixed upper panes', 'Made to order'],
      },
      photos: [
        PHOTOS.doorWindowWhiteCombo,
        PHOTOS.windowWhiteSlidingTransom,
        PHOTOS.frenchWindowBlackWorkshop,
      ],
      elevation: 'custom',
    },
  ] satisfies Product[],

  materials: {
    frames: [
      {
        id: 'aluminium',
        name: { es: 'Aluminio', en: 'Aluminium' },
        description: {
          es: 'Liviano y resistente a la humedad. Es el material de la mayoría de nuestros trabajos.',
          en: 'Light and moisture resistant. It is the material of most of our work.',
        },
      },
      {
        id: 'pvc',
        name: { es: 'PVC', en: 'PVC' },
        description: {
          es: 'Otra opción de marco para ventanas y puertas. Consúltenos disponibilidad.',
          en: 'Another frame option for windows and doors. Ask us about availability.',
        },
        pendingConfirmation: {
          es: 'Marcos de PVC: los indicó el propietario del proyecto; no aparecen en el catálogo ni en fotos publicadas.',
          en: 'PVC frames: stated by the project owner; not shown in the catalog or published photos.',
        },
      },
    ] satisfies FrameMaterial[],
    frameColors: [
      { id: 'white', name: { es: 'Blanco', en: 'White' }, hex: '#F3F4F1' },
      { id: 'black', name: { es: 'Negro', en: 'Black' }, hex: '#1D1F22' },
      {
        id: 'grey',
        name: { es: 'Gris', en: 'Grey' },
        hex: '#8B9096',
        pendingConfirmation: {
          es: 'Marco gris: lo indicó el propietario del proyecto; no aparece en fotos publicadas.',
          en: 'Grey frame: stated by the project owner; not shown in published photos.',
        },
      },
      {
        id: 'wood',
        name: { es: 'Tono madera', en: 'Wood tone' },
        hex: '#8A5A35',
        note: { es: 'Visto en trabajos del catálogo', en: 'Seen in catalog work' },
      },
    ] satisfies Swatch[],
    glassColors: [
      {
        id: 'clear',
        name: { es: 'Claro', en: 'Clear' },
        hex: '#D9E8EE',
        note: {
          es: 'Transparente, deja pasar toda la luz.',
          en: 'Transparent, lets all the light in.',
        },
      },
      {
        id: 'dark-grey',
        name: { es: 'Gris oscuro', en: 'Dark grey' },
        hex: '#2C3036',
        note: {
          es: 'También llamado super gris. Da privacidad y reduce el brillo.',
          en: 'Also called super grey. Gives privacy and cuts glare.',
        },
      },
      {
        id: 'blue-reflective',
        name: { es: 'Azul reflectivo', en: 'Blue reflective' },
        hex: '#2F5C9A',
        note: {
          es: 'Refleja la luz del sol. Se puede instalar con el reflectivo hacia afuera.',
          en: 'Reflects sunlight. It can be fitted with the reflective side facing out.',
        },
      },
      {
        id: 'bronze',
        name: { es: 'Bronce', en: 'Bronze' },
        hex: '#8A7258',
        note: { es: 'Tono cálido que suaviza la luz.', en: 'A warm tone that softens the light.' },
      },
      {
        id: 'frosted',
        name: { es: 'Esmerilado o texturizado', en: 'Frosted or textured' },
        hex: '#E6ECEE',
        note: {
          es: 'Deja pasar la luz sin dejar ver. Para baños y duchas.',
          en: 'Lets light through without showing what is behind. For bathrooms and showers.',
        },
      },
    ] satisfies Swatch[],
  },

  process: [
    {
      id: 'advice',
      title: { es: 'Asesoría', en: 'Advice' },
      body: {
        es: 'Le ayudamos a elegir el tipo de ventana o puerta, el marco y el color del vidrio.',
        en: 'We help you choose the type of window or door, the frame and the glass colour.',
      },
    },
    {
      id: 'measure',
      title: { es: 'Medida', en: 'Measuring' },
      body: {
        es: 'Tomamos las medidas del espacio para que la pieza encaje.',
        en: 'We measure the opening so the piece fits.',
      },
    },
    {
      id: 'fabrication',
      title: { es: 'Fabricación', en: 'Fabrication' },
      body: {
        es: 'Cortamos y armamos cada pieza en nuestro taller de Jayaque.',
        en: 'We cut and assemble each piece at our workshop in Jayaque.',
      },
    },
    {
      id: 'installation',
      title: { es: 'Instalación', en: 'Installation' },
      body: {
        es: 'Nuestro equipo la instala en su casa o negocio.',
        en: 'Our team installs it at your home or business.',
      },
    },
  ] satisfies ProcessStep[],

  gallery: [
    {
      ...PHOTOS.fixedGlassBlackFacade,
      category: 'windows',
      caption: { es: 'Vidrios fijos en fachada', en: 'Fixed glass facade' },
    },
    {
      ...PHOTOS.gardenDoorBlackLivingRoom,
      category: 'doors',
      caption: { es: 'Puerta de jardín en aluminio negro', en: 'Black aluminium garden door' },
    },
    {
      ...PHOTOS.bathDoorBlackFrosted,
      category: 'doors',
      caption: {
        es: 'Puerta de baño con vidrio texturizado',
        en: 'Bathroom door with textured glass',
      },
    },
    {
      ...PHOTOS.sashWindowWhiteBlueReflective,
      category: 'windows',
      caption: {
        es: 'Guillotina con vidrio azul reflectivo',
        en: 'Sash window with blue reflective glass',
      },
    },
    {
      ...PHOTOS.slidingWindowWoodGridDarkGlass,
      category: 'windows',
      caption: {
        es: 'Ventana tono madera con vidrio oscuro',
        en: 'Wood-tone window with dark glass',
      },
    },
    {
      ...PHOTOS.carMirrorRepair,
      category: 'mirrors',
      caption: { es: 'Reparación de retrovisor', en: 'Side mirror repair' },
    },
    {
      ...PHOTOS.windowWhiteGridBlueSky,
      category: 'windows',
      caption: { es: 'Ventana blanca de cuatro hojas', en: 'Four-panel white window' },
    },
    {
      ...PHOTOS.gardenDoorBlackBalcony,
      category: 'doors',
      caption: { es: 'Puerta corrediza hacia el balcón', en: 'Sliding door to the balcony' },
    },
    {
      ...PHOTOS.fixedGlassBlackTerrace,
      category: 'windows',
      caption: { es: 'Terraza cerrada con vidrio fijo', en: 'Terrace enclosed with fixed glass' },
    },
    {
      ...PHOTOS.frenchWindowBlack,
      category: 'windows',
      caption: { es: 'Ventana francesa en aluminio negro', en: 'Black aluminium French window' },
    },
    {
      ...PHOTOS.doorWindowWhiteCombo,
      category: 'custom',
      caption: { es: 'Puerta y ventana en aluminio blanco', en: 'White aluminium door and window' },
    },
    {
      ...PHOTOS.windowWhiteBlueReflective,
      category: 'windows',
      caption: {
        es: 'Ventana con vidrio azul reflectivo',
        en: 'Window with blue reflective glass',
      },
    },
    {
      ...PHOTOS.gardenDoorWoodDarkGlass,
      category: 'doors',
      caption: { es: 'Puerta tono madera con vidrio oscuro', en: 'Wood-tone door with dark glass' },
    },
    {
      ...PHOTOS.windowWhiteGridArches,
      category: 'windows',
      caption: { es: 'Ventana corrediza con cuadrícula', en: 'Sliding window with grid bars' },
    },
    {
      ...PHOTOS.bathDoorWhiteFrosted,
      category: 'doors',
      caption: { es: 'Puerta de baño en aluminio blanco', en: 'White aluminium bathroom door' },
    },
    {
      ...PHOTOS.windowBronzeGlass,
      category: 'windows',
      caption: { es: 'Ventana con vidrio bronce', en: 'Window with bronze glass' },
    },
    {
      ...PHOTOS.slidingWindowBlackGreenGlass,
      category: 'windows',
      caption: { es: 'Ventana negra con cuadrícula', en: 'Black window with grid bars' },
    },
    {
      ...PHOTOS.gardenDoorBlackPatio,
      category: 'doors',
      caption: { es: 'Puerta corrediza hacia el patio', en: 'Sliding door to the patio' },
    },
    {
      ...PHOTOS.windowWhiteSlidingTransom,
      category: 'custom',
      caption: { es: 'Ventana con fijo superior', en: 'Window with fixed upper pane' },
    },
    {
      ...PHOTOS.windowWhiteGridGarden,
      category: 'windows',
      caption: { es: 'Ventana francesa hacia el patio', en: 'French window facing the yard' },
    },
    {
      ...PHOTOS.sashWindowWhiteClear,
      category: 'windows',
      caption: { es: 'Guillotina con vidrio claro', en: 'Sash window with clear glass' },
    },
    {
      ...PHOTOS.slidingWindowWhiteClear,
      category: 'windows',
      caption: { es: 'Ventana corrediza blanca', en: 'White sliding window' },
    },
    {
      ...PHOTOS.windowWhiteSliding,
      category: 'windows',
      caption: { es: 'Ventana de aluminio blanco', en: 'White aluminium window' },
    },
    {
      ...PHOTOS.slidingWindowWoodDarkGlass,
      category: 'windows',
      caption: { es: 'Ventana corrediza tono madera', en: 'Wood-tone sliding window' },
    },
  ] satisfies GalleryItem[],

  faq: [
    {
      question: { es: '¿Dónde está el local?', en: 'Where is the shop?' },
      answer: {
        es: 'En Colonia Llano Verde, Pasaje Las Acacias 54D, sobre la carretera a Jayaque, La Libertad.',
        en: 'At Colonia Llano Verde, Pasaje Las Acacias 54D, on the road to Jayaque, La Libertad.',
      },
    },
    {
      question: { es: '¿Qué horario tienen?', en: 'What are your opening hours?' },
      answer: {
        es: 'De lunes a viernes, de 8:00 a.m. a 5:00 p.m. Los sábados, de 8:00 a.m. a 12:00 m.',
        en: 'Monday to Friday, 8:00 a.m. to 5:00 p.m. Saturdays, 8:00 a.m. to 12:00 noon.',
      },
    },
    {
      question: { es: '¿Instalan los trabajos?', en: 'Do you install the work?' },
      answer: {
        es: 'Sí. El servicio incluye asesoría, medida, fabricación e instalación.',
        en: 'Yes. The service covers advice, measuring, fabrication and installation.',
      },
    },
    {
      question: {
        es: '¿Qué colores de marco y de vidrio tienen?',
        en: 'Which frame and glass colours do you offer?',
      },
      answer: {
        es: 'Marcos en blanco, negro, gris y tono madera. Vidrio claro, gris oscuro, azul reflectivo, bronce, y esmerilado o texturizado para baños. Pregúntenos por la disponibilidad al cotizar.',
        en: 'Frames in white, black, grey and wood tone. Clear, dark grey, blue reflective and bronze glass, plus frosted or textured glass for bathrooms. Ask us about availability when you request a quote.',
      },
    },
    {
      question: { es: '¿Cómo pido una cotización?', en: 'How do I ask for a quote?' },
      answer: {
        es: `Escríbanos por WhatsApp o llame al ${PHONE_DISPLAY}, mande un correo o llene el formulario de esta página. Si ya tiene las medidas o una foto del espacio, inclúyalas.`,
        en: `Message us on WhatsApp or call ${PHONE_DISPLAY}, send an email or fill in the form on this page. If you already have measurements or a photo of the space, include them.`,
      },
    },
    {
      question: { es: '¿Reparan espejos de carro?', en: 'Do you repair car mirrors?' },
      answer: {
        es: 'Sí, reparamos retrovisores y cambiamos el vidrio del espejo. Escríbanos la marca, el modelo y qué lado necesita.',
        en: 'Yes, we repair side mirrors and replace mirror glass. Send us the make, model and which side you need.',
      },
    },
  ] satisfies FaqItem[],

  legal: {
    legalName: {
      pending: {
        es: 'Nombre legal del titular o razón social',
        en: 'Registered name of the owner or company',
      },
    },
    taxId: { pending: { es: 'NIT del titular', en: 'Owner’s tax ID (NIT)' } },
    lastUpdated: '2026-09-24',
    retention: {
      pending: {
        es: 'Plazo de conservación de las solicitudes de cotización (por ejemplo, 12 meses desde el último contacto)',
        en: 'How long quote requests are kept (for example, 12 months after last contact)',
      },
    },
    refunds: {
      deposit: {
        pending: {
          es: 'Si se pide anticipo, qué porcentaje y en qué casos se devuelve',
          en: 'Whether a deposit is required, how much, and when it is returned',
        },
      },
      warranty: {
        pending: {
          es: 'Si se ofrece garantía en ventanas, puertas y espejos, su plazo y qué cubre',
          en: 'Whether windows, doors and mirrors carry a warranty, its term and what it covers',
        },
      },
      carMirrorWarranty: {
        pending: {
          es: 'Si se ofrece garantía en reparaciones de retrovisores, su plazo y qué cubre',
          en: 'Whether car mirror repairs carry a warranty, its term and what it covers',
        },
      },
    },
  } satisfies LegalFacts,
} as const;

export type Company = typeof COMPANY;
