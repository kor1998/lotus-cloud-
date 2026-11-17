import type { PageData } from './types'

export const docs: PageData = {
  path: '/docs',
  title: 'Documentation | Lotus Cloud',
  hero: {
    eyebrow: 'Lotus Cloud Resources',
    title: 'Documentation',
    lede: 'Find product guidance, platform concepts, and learning resources for building with Lotus Cloud enterprise solutions.',
  },
  blocks: [
    {
      type: 'cards',
      layout: 'grid3',
      items: [
        { title: 'Platform guides', text: 'Architecture, deployment, governance, and administration guidance for Lotus Cloud platforms.', cta: { label: 'Explore products →', href: '/platforms' } },
        { title: 'PADMA documentation', text: 'Concepts and implementation guidance for enterprise multi-agent orchestration with PADMA.', cta: { label: 'View PADMA →', href: '/products/padma' } },
        { title: 'Learning resources', text: 'Training paths and practical resources for AI, cloud, and enterprise platform teams.', cta: { label: 'Browse training →', href: '/training' } },
      ],
    },
  ],
}
