import type { Pending } from '@/types/company';

export type Inline = string | Pending | { href: string; text: string; isExternal?: boolean };

export type Block = { paragraph: Inline[] } | { list: Inline[][] };

export type LegalSection = { id: string; heading: string; blocks: Block[] };

export type LegalDocument = { intro: Inline[]; sections: LegalSection[] };
