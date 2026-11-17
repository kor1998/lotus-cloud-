import type { PageData } from './types'

export const drive: PageData = {
  path: '/drive',
  title: 'Lotus Drive Organizer | Lotus Cloud | Lotus Cloud',
  hero: {
    title: 'Lotus Drive Organizer',
    lede: 'Classify documents, organize files, extract key data, and create a searchable cloud drive with AI-assisted workflows.',
  },
  blocks: [
    {
      type: 'cards',
      layout: 'grid3',
      head: { title: 'Product Access', lede: 'Lotus Drive Organizer is being prepared for controlled commercial availability.' },
      items: [
        { title: 'AI-assisted folder organization by file type and category' },
        { title: 'Document labeling and classification workflows' },
        { title: 'Text extraction support for PDFs and scans' },
        { title: 'Searchable knowledge organization' },
        { title: 'Structured exports for business workflows' },
        { title: 'Online purchasing is not currently available.', tone: 'night', cta: { label: 'Contact Sales', href: '/contact?interest=lotus-drive' } },
      ],
    },
  ],
}
