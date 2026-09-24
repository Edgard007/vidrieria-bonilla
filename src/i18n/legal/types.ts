import type { Pending } from '@/types/company';

export type Inline = string | Pending | { href: string; text: string; isExternal?: boolean };

export type Block =
  | { paragraph: Inline[] }
  | { list: Inline[][] }
  | { table: { head: string[]; rows: (Inline | Inline[])[][] } };

export type LegalSection = { id: string; heading: string; blocks: Block[] };

export type LegalFaq = { question: string; answer: string };

export type LegalDocument = {
  intro: Inline[];
  /** One-sentence answer to what the reader came to find. */
  summary: string;
  keyPoints: Inline[][];
  sections: LegalSection[];
  faq: LegalFaq[];
};
