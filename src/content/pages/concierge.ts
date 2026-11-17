import type { PageData } from './types'

export const concierge: PageData = {
  path: '/products/concierge',
  title: 'Lotus Concierge AI | Enterprise Assistance and Workflow Support | Lotus Cloud',
  hero: {
    eyebrow: 'Lotus Cloud Product',
    title: 'Lotus Concierge AI',
    lede: 'Context-aware enterprise assistant for workforce, customer, and support operations.',
    actions: [
      { label: 'Book a Demo', href: '/contact' },
      { label: 'Contact Sales', href: '/contact' },
    ],
  },
  blocks: [
    {
      type: 'list',
      head: { kicker: 'Product Overview', title: 'What Lotus Concierge AI delivers', lede: 'Lotus Concierge AI provides role-specific assistance, guided workflows, and enterprise knowledge access across employee and customer touchpoints.' },
      items: [{ title: 'Lotus Concierge AI — AI Product', text: 'Coming Soon / Preview.' }],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Business Problems Solved', title: 'Built for enterprise constraints and outcomes', lede: 'Eliminate operational friction and improve decision quality across critical workflows.' },
      items: [
        { title: 'Teams lose time searching for policies, procedures, and system knowledge.' },
        { title: 'Inconsistent service responses impact customer satisfaction.' },
        { title: 'Support operations lack context continuity across channels.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Key Features', title: 'Capabilities and controlled availability', lede: 'Purpose-built functions designed for real enterprise operations, governance, and scale.' },
      items: [
        { title: 'Role-based conversational assistance.' },
        { title: 'Knowledge-grounded answers with source traceability.' },
        { title: 'Workflow-triggered actions for service tasks.' },
        { title: 'Multi-channel integration across portals and help desks.' },
        { title: 'Escalation to human teams with full context handoff.' },
        { title: 'Usage analytics and quality monitoring.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: { kicker: 'Enterprise Architecture', title: 'Reference architecture', lede: 'Reference architecture illustrating integration layers for enterprise deployment.' },
      items: [
        { tag: 'Layer 1', title: 'Enterprise knowledge and support systems' },
        { tag: 'Layer 2', title: 'Conversation and context orchestration layer' },
        { tag: 'Layer 3', title: 'Action automation and escalation flows' },
        { tag: 'Layer 4', title: 'Analytics, governance, and quality controls' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Technology Stack', title: 'Platform and integration foundation', lede: 'Aligned with Lotus Cloud enterprise standards for security, scalability, and observability.' },
      items: [
        { title: 'Gemini-powered assistants' },
        { title: 'Enterprise search and retrieval' },
        { title: 'Firestore context storage' },
        { title: 'API orchestration services' },
        { title: 'Next.js portal surfaces' },
        { title: 'Security and audit tooling' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Business Benefits', title: 'Enterprise value realized', lede: 'Outcome-focused gains that matter to operations, leadership, and governance teams.' },
      items: [
        { title: 'Reduces response time for employee and customer requests.' },
        { title: 'Improves service consistency through governed responses.' },
        { title: 'Increases operational capacity without service quality trade-offs.' },
      ],
    },
    { type: 'consult' },
  ],
}
