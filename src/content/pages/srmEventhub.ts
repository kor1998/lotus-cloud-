import type { PageData } from './types'

export const srmEventhub: PageData = {
  path: '/products/srm-eventhub',
  title: 'SRM Event Hub | Enterprise Event Operations | Lotus Cloud',
  hero: {
    eyebrow: 'Lotus Cloud Product',
    title: 'SRM Event Hub',
    lede: 'Unified event operations platform for enterprise engagement, planning, and performance analytics.',
    actions: [
      { label: 'Book a Demo', href: '/contact' },
      { label: 'Free Architecture Consultation', href: '/contact' },
    ],
  },
  blocks: [
    {
      type: 'list',
      head: { kicker: 'Product Overview', title: 'What SRM Event Hub delivers', lede: 'SRM Event Hub centralizes event lifecycle management from planning through post-event analytics with workflow automation and stakeholder visibility.' },
      items: [{ title: 'SRM Event Hub — Enterprise Platform', text: 'Information / controlled deployment; unrestricted general availability is not offered.' }],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Business Problems Solved', title: 'Built for enterprise constraints and outcomes', lede: 'Eliminate operational friction and improve decision quality across critical workflows.' },
      items: [
        { title: 'Event operations spread across disconnected tools and teams.' },
        { title: 'Low visibility into planning status and delivery risks.' },
        { title: 'Difficult post-event analysis and ROI measurement.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Key Features', title: 'Capabilities and controlled availability', lede: 'Purpose-built functions designed for real enterprise operations, governance, and scale.' },
      items: [
        { title: 'End-to-end event lifecycle orchestration.' },
        { title: 'Stakeholder communication and approval workflows.' },
        { title: 'Task, timeline, and vendor coordination controls.' },
        { title: 'Engagement and performance analytics dashboards.' },
        { title: 'Integration with CRM and marketing systems.' },
        { title: 'Template-based event playbooks for repeatability.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: { kicker: 'Enterprise Architecture', title: 'Reference architecture', lede: 'Reference architecture illustrating integration layers for enterprise deployment.' },
      items: [
        { tag: 'Layer 1', title: 'Event planning and intake systems' },
        { tag: 'Layer 2', title: 'Workflow and stakeholder orchestration' },
        { tag: 'Layer 3', title: 'Engagement capture and analytics processing' },
        { tag: 'Layer 4', title: 'Executive reporting and governance services' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Technology Stack', title: 'Platform and integration foundation', lede: 'Aligned with Lotus Cloud enterprise standards for security, scalability, and observability.' },
      items: [
        { title: 'Google Cloud platform services' },
        { title: 'Workflow automation and APIs' },
        { title: 'Firestore operational data' },
        { title: 'BI and dashboard integrations' },
        { title: 'Next.js management interface' },
        { title: 'Security and compliance controls' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Business Benefits', title: 'Enterprise value realized', lede: 'Outcome-focused gains that matter to operations, leadership, and governance teams.' },
      items: [
        { title: 'Improves delivery consistency for enterprise events.' },
        { title: 'Increases visibility and accountability across stakeholders.' },
        { title: 'Strengthens event ROI analysis and strategic planning.' },
      ],
    },
    { type: 'consult' },
  ],
}
