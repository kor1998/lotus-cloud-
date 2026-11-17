import type { PageData } from './types'

export const research: PageData = {
  path: '/research',
  title: 'iHMDS Core Platform Technology & Physical AI | Lotus Cloud',
  hero: {
    eyebrow: 'Lotus Cloud Research',
    title: 'iHMDS™ Core Platform Technology',
    lede: "Lotus Cloud's public research covers the iHMDS™ Core Platform Technology for healthcare intelligence, Physical AI, and responsible intelligent systems.",
  },
  blocks: [
    {
      type: 'cards',
      id: 'ihmds',
      layout: 'grid3',
      head: {
        kicker: 'Research foundation',
        title: 'From research to governed platform intelligence',
        lede: 'iHMDS researches governed healthcare context, explainable decision-support patterns, and privacy-conscious data foundations. HealthAura AI is the flagship healthcare platform that can apply this foundation to authorized, clinician-guided workflows.',
        action: { label: 'Explore HealthAura AI — Powered by iHMDS™', href: '/products/healthaura' },
      },
      items: [
        { title: 'Healthcare context', text: 'Researching structured, governed context for assistive healthcare intelligence.' },
        { title: 'Explainable intelligence', text: 'Advancing transparent decision-support patterns with traceable inputs and human review.' },
        { title: 'Data foundations', text: 'Exploring interoperable, privacy-conscious data and knowledge architectures.' },
      ],
    },
    {
      type: 'cards',
      id: 'physical-ai',
      layout: 'grid2',
      head: {
        kicker: 'Strategic emerging technology',
        title: 'Physical AI',
        lede: 'Lotus Cloud is exploring Physical AI systems that connect perception, reasoning, and responsible action across physical enterprise environments.',
      },
      items: [
        {
          title: 'Research priorities',
          bullets: [
            'Multimodal perception and spatial understanding',
            'Human oversight and safe autonomy',
            'Agentic orchestration across digital and physical systems',
            'Enterprise governance and observability',
          ],
          tone: 'night',
        },
      ],
    },
    { type: 'leader' },
  ],
}
