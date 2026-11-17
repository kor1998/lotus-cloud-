import { PLATFORMS } from '../home'
import type { PageData } from './types'

export const platforms: PageData = {
  path: '/platforms',
  title: 'Enterprise AI Platforms | Lotus Cloud',
  hero: {
    eyebrow: 'Lotus Cloud Platforms',
    title: 'Enterprise platforms for intelligent operations',
    lede: 'Explore flagship Agentic AI, governed legal intelligence, and healthcare AI platforms alongside focused applications for modern enterprise work.',
  },
  blocks: [
    {
      type: 'rows',
      head: { kicker: 'Flagship platforms', title: 'The foundations of the Lotus Cloud ecosystem' },
      rows: PLATFORMS.cards,
    },
    {
      type: 'cards',
      layout: 'bento5',
      head: { kicker: 'Additional platforms', title: 'Focused intelligence for everyday operations' },
      items: [
        { mono: 'QF', tag: 'AI Product', title: 'QuickForm AI', text: 'AI-assisted business forms, data capture, and validation.', note: 'Product information; controlled preview.', cta: { label: 'Learn more', href: '/products/quickform' } },
        { mono: 'LD', tag: 'AI Product', title: 'Lotus Drive Organizer', text: 'Intelligent classification and organization for shared content.', note: 'Controlled availability / preview.', cta: { label: 'Learn more', href: '/drive' } },
        { mono: 'LC', tag: 'AI Product', title: 'Lotus Concierge AI', text: 'Context-aware assistance and governed enterprise knowledge access for employees and customers.', note: 'Coming Soon / Preview.', cta: { label: 'Learn more', href: '/products/concierge' } },
        { mono: 'SR', tag: 'AI Product', title: 'Smart Receipt Scanner', text: 'AI-powered receipt capture, structured extraction, validation, and expense workflows.', note: 'Product information / preview until release readiness is established.', cta: { label: 'Learn more', href: '/products/smart-receipt' } },
        { mono: 'EH', tag: 'Enterprise Platform', title: 'SRM Event Hub', text: 'Connected planning, stakeholder engagement, and event operations.', note: 'Information / controlled deployment; unrestricted general availability is not offered.', cta: { label: 'Learn more', href: '/products/srm-eventhub' } },
      ],
    },
    { type: 'leader' },
  ],
}
