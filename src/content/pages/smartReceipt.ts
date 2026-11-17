import type { PageData } from './types'

export const smartReceipt: PageData = {
  path: '/products/smart-receipt',
  title: 'Smart Receipt Scanner | Expense Intelligence | Lotus Cloud',
  hero: {
    eyebrow: 'Lotus Cloud Product',
    title: 'Smart Receipt Scanner',
    lede: 'AI-powered receipt and expense intelligence for finance operations and compliance workflows.',
    actions: [
      { label: 'Schedule Meeting', href: '/contact' },
      { label: 'Contact Sales', href: '/contact' },
    ],
  },
  blocks: [
    {
      type: 'list',
      head: { kicker: 'Product Overview', title: 'What Smart Receipt Scanner delivers', lede: 'Smart Receipt Scanner automates receipt ingestion, classification, and validation while integrating with finance systems for faster close cycles.' },
      items: [{ title: 'Smart Receipt Scanner — AI Product', text: 'Product information / preview until release readiness is established.' }],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Business Problems Solved', title: 'Built for enterprise constraints and outcomes', lede: 'Eliminate operational friction and improve decision quality across critical workflows.' },
      items: [
        { title: 'Manual receipt handling slows reimbursement and accounting cycles.' },
        { title: 'Classification errors create downstream reconciliation issues.' },
        { title: 'Limited policy validation increases compliance risk.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Key Features', title: 'Capabilities and controlled availability', lede: 'Purpose-built functions designed for real enterprise operations, governance, and scale.' },
      items: [
        { title: 'Receipt OCR and structured data extraction.' },
        { title: 'Automatic expense categorization and policy checks.' },
        { title: 'Duplicate detection and exception routing.' },
        { title: 'Bulk ingestion for enterprise expense workloads.' },
        { title: 'Finance-system integration for posting workflows.' },
        { title: 'Audit-ready history and evidence tracking.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: { kicker: 'Enterprise Architecture', title: 'Reference architecture', lede: 'Reference architecture illustrating integration layers for enterprise deployment.' },
      items: [
        { tag: 'Layer 1', title: 'Receipt capture and ingestion endpoints' },
        { tag: 'Layer 2', title: 'Extraction and policy validation engine' },
        { tag: 'Layer 3', title: 'Expense workflow and approval orchestration' },
        { tag: 'Layer 4', title: 'Finance integrations and reporting services' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Technology Stack', title: 'Platform and integration foundation', lede: 'Aligned with Lotus Cloud enterprise standards for security, scalability, and observability.' },
      items: [
        { title: 'Google Cloud document services' },
        { title: 'Vertex AI extraction models' },
        { title: 'Firestore and workflow metadata' },
        { title: 'Cloud Functions processing' },
        { title: 'Secure API integrations' },
        { title: 'Monitoring and compliance logs' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Business Benefits', title: 'Enterprise value realized', lede: 'Outcome-focused gains that matter to operations, leadership, and governance teams.' },
      items: [
        { title: 'Speeds expense processing and reimbursement timelines.' },
        { title: 'Improves classification accuracy and policy adherence.' },
        { title: 'Provides transparent audit evidence for finance teams.' },
      ],
    },
    { type: 'consult' },
  ],
}
