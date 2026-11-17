import type { PageData } from './types'

export const start: PageData = {
  path: '/start',
  title: 'Start here | Lotus Cloud',
  hero: {
    eyebrow: 'Welcome to Lotus Cloud',
    title: 'Find your next step',
    lede: 'Explore a product, enter your workspace or request a demonstration. Choose the path that matches what you need today.',
  },
  blocks: [
    {
      type: 'cards',
      layout: 'grid3',
      items: [
        { tag: 'Visitors & prospective customers', title: 'Explore our products', text: 'Discover Lotus Cloud platforms and services, or talk with us about your requirements.', cta: { label: 'Explore products', href: '/platforms' } },
        { tag: 'Existing clients & partners', title: 'Access your client workspace', text: 'Use your assigned account to access your authorized workspace. Your account determines which projects and services you can see.', cta: { label: 'Client & partner sign-in', href: '/login' } },
        { tag: 'Employees & administrators', title: 'Continue your work', text: 'Use your assigned work account. After sign-in, open an available workspace from My Workspaces.', cta: { label: 'Employee sign-in', href: '/login' } },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      items: [
        { tag: 'Visitors & prospective customers', title: 'Talk to Lotus Cloud', cta: { label: 'Talk to Lotus Cloud', href: '/contact' } },
        { tag: 'Existing clients & partners', title: 'Get access help', cta: { label: 'Get access help', href: '/contact#support' } },
        { tag: 'Employees & administrators', title: 'Get sign-in help', cta: { label: 'Get sign-in help', href: '/contact#support' } },
      ],
    },
    {
      type: 'cards',
      layout: 'grid2',
      head: {
        kicker: 'PADMA Legal · Controlled demonstration',
        title: 'Explore legal intelligence',
        lede: 'Start with the product overview, then visit the dedicated demo site for brochures and access requests. The demo uses fictional matters; real client matters and production actions remain disabled.',
        action: { label: 'Learn about PADMA Legal', href: '/products/padma-legal' },
      },
      items: [
        { title: 'Explore PADMA Legal Demo', tone: 'night', cta: { label: 'Explore PADMA Legal Demo', href: 'https://legal.padma.lotuscloud.ai' } },
        { title: 'Request Demo Access', note: 'These links open the PADMA Legal site. Demo access is reviewed separately from your Lotus Cloud portal account.', cta: { label: 'Request Demo Access', href: 'https://legal.padma.lotuscloud.ai/#request-access' } },
      ],
    },
    { type: 'leader' },
  ],
}
