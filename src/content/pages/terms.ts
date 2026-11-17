import type { PageData } from './types'

export const terms: PageData = {
  path: '/terms',
  title: 'Terms | Lotus Cloud',
  description: 'The terms for using the Lotus Cloud website, which provides general information about Lotus Cloud products, services, and training.',
  hero: {
    eyebrow: 'Legal',
    title: 'Terms',
  },
  blocks: [
    {
      type: 'prose',
      sections: [
        {
          paragraphs: [
            'This website provides general information about Lotus Cloud products, services, and training. Content may change as our offerings evolve.',
            'Product names, trademarks, and materials remain the property of their respective owners. Specific services are governed by the applicable written agreement with Lotus Cloud.',
            'Questions about these terms may be sent to info@lotuscloud.ai.',
          ],
        },
      ],
    },
  ],
}
