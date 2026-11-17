import type { ArtName } from '../../components/Nav/Art'
import type { PlatformRowData } from '../../components/sections/Offer'

/*
  A page is a compact dark intro followed by a list of blocks. Every block is drawn with the
  same card system as the home page (light / blue / night tiles, ruled lists, dot art).
  Copy is taken word for word from the live lotuscloud.ai pages.
*/
export type Tone = 'light' | 'blue' | 'night'

export interface Link {
  label: string
  href: string
}

export interface HeadData {
  kicker?: string
  title: string
  lede?: string
  action?: Link
}

export interface CardItem {
  id?: string
  mono?: string
  tag?: string
  title: string
  text?: string
  bullets?: string[]
  note?: string
  cta?: Link
  tone?: Tone
}

export interface StepItem {
  title: string
  text: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface ProseSection {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
}

export type Block =
  | { type: 'rows'; id?: string; head?: HeadData; rows: PlatformRowData[] }
  | { type: 'cards'; id?: string; head?: HeadData; layout: 'bento5' | 'grid2' | 'grid3' | 'grid4' | 'lead'; items: CardItem[] }
  | { type: 'steps'; id?: string; head: HeadData; steps: StepItem[] }
  | { type: 'list'; id?: string; head: HeadData; items: CardItem[] }
  | { type: 'split'; id?: string; head: HeadData; items: StepItem[]; art?: ArtName }
  | { type: 'accordion'; id?: string; head: HeadData; items: FaqItem[] }
  | { type: 'prose'; id?: string; sections: ProseSection[] }
  | { type: 'leader'; id?: string }
  | { type: 'footprint'; id?: string }
  | { type: 'consult'; id?: string }

export interface PageData {
  path: string
  title: string
  hero: { eyebrow?: string; title: string; lede?: string; actions?: Link[] }
  blocks: Block[]
}
