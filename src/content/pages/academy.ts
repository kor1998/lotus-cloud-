import type { PageData } from './types'

export const academy: PageData = {
  path: '/academy',
  title: 'Lotus Cloud Academy | Lotus Cloud',
  hero: {
    eyebrow: 'Lotus Cloud Academy',
    title: 'Learn. Build. Certify. Deliver.',
    lede: 'Professional learning pathways that connect foundations, hands-on labs, certification preparation, mentoring, and enterprise practices.',
    actions: [
      { label: 'Explore Programs', href: '#programs' },
      { label: 'Apply / Admissions', href: '/training#residency-admissions' },
    ],
  },
  blocks: [
    {
      type: 'cards',
      id: 'programs',
      layout: 'grid3',
      head: { kicker: 'Academy programs', title: 'Three pathways. One professional learning ecosystem.' },
      items: [
        {
          id: 'zero-to-hero',
          mono: '01',
          title: 'Zero to Hero™',
          text: 'A structured pathway from foundations through certification preparation and applied labs.',
          cta: { label: 'Explore pathway →', href: '/contact#academy' },
        },
        {
          id: 'enterprise-residency',
          mono: '02',
          tag: 'Where Learning Becomes Enterprise Experience.',
          title: 'Lotus Cloud Enterprise Residency™',
          text: 'Where Learning Becomes Enterprise Experience. Learn. Build. Certify. Deliver.',
          cta: { label: 'Explore pathway →', href: '/training' },
        },
        {
          id: 'master-programs',
          mono: '03',
          title: 'Master Programs',
          text: 'Advanced professional learning across cloud, AI, Agentic AI, data, cybersecurity, and Physical AI.',
          bullets: ['Cloud', 'Artificial Intelligence', 'Agentic AI', 'Data', 'Cybersecurity', 'Physical AI'],
          cta: { label: 'Explore pathway →', href: '/contact#academy' },
        },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { title: 'Plan your Academy pathway' },
      items: [
        { title: 'Upcoming Cohorts', cta: { label: 'Upcoming Cohorts', href: '/contact#academy' } },
        { title: 'Certification Paths', cta: { label: 'Certification Paths', href: '/training#certification-paths' } },
        { title: 'Contact Academy', cta: { label: 'Contact Academy', href: '/contact#academy' } },
      ],
    },
    { type: 'leader' },
  ],
}
