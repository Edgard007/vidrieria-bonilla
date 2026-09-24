import type { ImageMetadata } from 'astro';

import type { Localized } from '@/i18n/locales';

export type ProductCategory = 'windows' | 'doors' | 'mirrors' | 'custom';

export type ProductId =
  | 'french-window-black'
  | 'sliding-window-white'
  | 'sash-window'
  | 'fixed-glass'
  | 'garden-door'
  | 'bathroom-door'
  | 'decorative-mirrors'
  | 'car-mirrors'
  | 'custom-work';

/** Which line drawing represents a product when no own photo exists. */
export type ElevationKind = 'window' | 'door' | 'mirror' | 'car-mirror' | 'custom';

export type Photo = {
  src: ImageMetadata;
  alt: Localized;
  /** Focal point for `object-position` where a crop is unavoidable, e.g. `50% 30%`. */
  focus?: string;
};

export type Product = {
  id: ProductId;
  category: ProductCategory;
  name: Localized;
  /** Short label used by the business in its WhatsApp catalog, e.g. "Premium". */
  label?: Localized;
  summary: Localized;
  features: Localized<string[]>;
  photos: Photo[];
  elevation: ElevationKind;
  /**
   * Set when a detail comes from the owner or the brief but is not published by the business.
   * Rendered normally; listed in the README under items to confirm.
   */
  pendingConfirmation?: Localized;
};

export type GalleryItem = Photo & {
  caption: Localized;
  category: ProductCategory;
};

export type Swatch = {
  id: string;
  name: Localized;
  /** Colour used for the swatch and the illustrative preview. */
  hex: string;
  note?: Localized;
  pendingConfirmation?: Localized;
};

export type FrameMaterial = {
  id: 'aluminium' | 'pvc';
  name: Localized;
  description: Localized;
  pendingConfirmation?: Localized;
};

export type ProcessStep = {
  id: 'advice' | 'measure' | 'fabrication' | 'installation';
  title: Localized;
  body: Localized;
};

export type OpeningHours = {
  /** schema.org day names, used for structured data. */
  days: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[];
  label: Localized;
  opens: string;
  closes: string;
  display: Localized;
};

export type FaqItem = {
  question: Localized;
  answer: Localized;
};

/** A fact the owner must confirm before publishing. Rendered visibly on legal pages. */
export type Pending = { pending: Localized };

export type LegalFacts = {
  /** Registered name of the person or company responsible. */
  legalName: string | Pending;
  /** Tax ID (NIT). Recommended by the consumer protection law for online commerce. */
  taxId: string | Pending;
  lastUpdated: string;
  retention: Localized | Pending;
  refunds: {
    deposit: Localized | Pending;
    warranty: Localized | Pending;
    carMirrorWarranty: Localized | Pending;
  };
};
