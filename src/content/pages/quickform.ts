import type { PageData } from './types'

export const quickform: PageData = {
  path: '/products/quickform',
  title: 'QuickForm AI | Enterprise Document Intelligence | Lotus Cloud',
  hero: {
    eyebrow: 'Lotus Cloud Product',
    title: 'QuickForm AI',
    lede: 'Enterprise document and form intelligence platform for extraction, validation, and workflow automation.',
    actions: [
      { label: 'Book a Demo', href: '/contact' },
      { label: 'Contact Sales', href: '/contact' },
    ],
  },
  blocks: [
    {
      type: 'list',
      head: { kicker: 'Product Overview', title: 'What QuickForm AI delivers', lede: 'QuickForm AI transforms unstructured documents into structured, workflow-ready data with validation controls and enterprise-grade reliability.' },
      items: [{ title: 'QuickForm AI — AI Product', text: 'Product information; controlled preview.' }],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Business Problems Solved', title: 'Built for enterprise constraints and outcomes', lede: 'Eliminate operational friction and improve decision quality across critical workflows.' },
      items: [
        { title: 'Manual document processing creates delays and data entry errors.' },
        { title: 'Inconsistent form formats across vendors, departments, and regions.' },
        { title: 'Limited visibility into document SLA, quality, and throughput.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Key Features', title: 'Capabilities and controlled availability', lede: 'Purpose-built functions designed for real enterprise operations, governance, and scale.' },
      items: [
        { title: 'AI field extraction for PDFs, scans, and images.' },
        { title: 'Smart validation and exception routing.' },
        { title: 'Template learning for recurring enterprise forms.' },
        { title: 'Bulk processing with queue-based orchestration.' },
        { title: 'Secure export to downstream ERP and workflow systems.' },
        { title: 'Operator review console with confidence scoring.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: { kicker: 'Enterprise Architecture', title: 'Reference architecture', lede: 'Reference architecture illustrating integration layers for enterprise deployment.' },
      items: [
        { tag: 'Layer 1', title: 'Document ingestion and classification' },
        { tag: 'Layer 2', title: 'Extraction and validation engine' },
        { tag: 'Layer 3', title: 'Workflow routing and exception management' },
        { tag: 'Layer 4', title: 'System integration and reporting' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Technology Stack', title: 'Platform and integration foundation', lede: 'Aligned with Lotus Cloud enterprise standards for security, scalability, and observability.' },
      items: [
        { title: 'Google Cloud Storage' },
        { title: 'Vertex AI document models' },
        { title: 'Firestore metadata services' },
        { title: 'Cloud Functions automation' },
        { title: 'Next.js operator interface' },
        { title: 'Enterprise API connectors' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Business Benefits', title: 'Enterprise value realized', lede: 'Outcome-focused gains that matter to operations, leadership, and governance teams.' },
      items: [
        { title: 'Cuts document turnaround times for critical operations.' },
        { title: 'Improves data quality with automated validation rules.' },
        { title: 'Scales processing capacity without linear headcount growth.' },
      ],
    },
    { type: 'consult' },
  ],
}
