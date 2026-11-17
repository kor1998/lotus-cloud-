import type { ArtName } from './Art'

export interface Cell {
  title: string
  desc: string
  href: string
  art: ArtName
  tag?: string
}

export interface MenuItem {
  id: string
  label: string
  href: string
  cells: Cell[] // 1–3 illustrated cells
  more?: { label: string; href: string }[] // extra links shown as chips under the cells
  moreLabel?: string
}

/*
  Item names, order and the bottom promo come from lotuscloud.ai.
  Cell descriptions are working copy — review before launch.
  Illustrations repeat across menus (never inside one menu) until each gets its own artwork.
*/
export const PROMO = {
  title: 'Free architecture consultation',
  desc: 'Plan your enterprise AI platform with the right architecture first.',
  cta: 'Book now',
  href: '/contact#consultation',
}

export const MENU: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    cells: [{ title: 'Lotus Cloud', desc: 'One enterprise ecosystem for intelligent transformation.', href: '/', art: 'orbit' }],
  },
  {
    id: 'platforms',
    label: 'Platforms',
    href: '/platforms',
    cells: [
      { title: 'PADMA', desc: 'Personalized, agentic, digital, multi-modal AI.', href: '/products/padma', art: 'orbit', tag: 'Flagship' },
      { title: 'PADMA Legal Intelligence', desc: 'Precision research with verifiable citations.', href: '/products/padma-legal', art: 'docs' },
      { title: 'HealthAura AI', desc: 'Healthcare AI powered by iHMDS.', href: '/products/healthaura', art: 'pulse' },
    ],
  },
  {
    id: 'academy',
    label: 'Academy',
    href: '/academy',
    cells: [
      { title: 'Zero to Hero', desc: 'Start from the fundamentals.', href: '/academy#zero-to-hero', art: 'steps' },
      { title: 'Enterprise Residency', desc: 'Learn. Build. Certify. Deliver.', href: '/academy#enterprise-residency', art: 'stack' },
      { title: 'Master Programs', desc: 'Cloud, AI, agentic AI, data, cybersecurity and Physical AI.', href: '/academy#master-programs', art: 'blocks' },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    cells: [
      { title: 'Google Cloud', desc: 'Architecture, migration and optimization.', href: '/services#cloud-architecture', art: 'cloud' },
      { title: 'Google Workspace', desc: 'Collaboration rollout and administration.', href: '/services#google-workspace', art: 'blocks' },
      { title: 'ChromeOS / Chromebooks', desc: 'Managed devices for teams and classrooms.', href: '/services#chromeos', art: 'mesh' },
    ],
    moreLabel: 'Also',
    more: [
      { label: 'Lotus Cloud AI & Products', href: '/platforms' },
      { label: 'Custom Client Solutions', href: '/services#custom-solutions' },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    href: '/industries',
    cells: [
      { title: 'Healthcare', desc: 'Clinical operations and data.', href: '/industries#healthcare', art: 'pulse' },
      { title: 'Education', desc: 'Institutions and learners.', href: '/industries#education', art: 'steps' },
      { title: 'Government', desc: 'Public-sector services.', href: '/industries#government', art: 'docs' },
    ],
    moreLabel: 'Also',
    more: [
      { label: 'Financial Services', href: '/industries#financial-services' },
      { label: 'Manufacturing', href: '/industries#manufacturing' },
      { label: 'Retail', href: '/industries#retail' },
      { label: 'Energy', href: '/industries#energy' },
      { label: 'Nonprofit', href: '/industries#nonprofit' },
    ],
  },
  {
    id: 'research',
    label: 'Research',
    href: '/research',
    cells: [
      { title: 'iHMDS Core Platform', desc: 'Core technology for healthcare, data and intelligence.', href: '/research#ihmds', art: 'mesh' },
      { title: 'Physical AI', desc: 'Our strategic emerging area.', href: '/research#physical-ai', art: 'orbit', tag: 'Emerging' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    cells: [{ title: 'About Lotus Cloud', desc: 'A Google Cloud Partner delivering across the USA, Canada, India, Europe, the Middle East and Australia.', href: '/about', art: 'globe' }],
    moreLabel: 'See also',
    more: [{ label: 'Leadership', href: '/about#leadership' }],
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    cells: [{ title: 'Talk to the team', desc: 'Book a consultation or ask a question. We reply to every message.', href: '/contact', art: 'mesh' }],
  },
  {
    id: 'start',
    label: 'Start here',
    href: '/start',
    cells: [{ title: 'Not sure where to begin?', desc: 'A short guide to the right platform, service or program for you.', href: '/start', art: 'steps' }],
  },
]
