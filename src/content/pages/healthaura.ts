import type { PageData } from './types'

export const healthaura: PageData = {
  path: '/products/healthaura',
  title: 'HealthAura AI™ | Healthcare AI Platform | Lotus Cloud',
  hero: {
    eyebrow: 'HealthAura AI™',
    title: 'Enterprise Healthcare Intelligence Platform',
    lede: 'Support care and healthcare operations with explainable, policy-driven, and clinician-guided AI experiences powered by iHMDS™.',
    actions: [
      { label: 'Request Demo', href: '/contact#demo' },
      { label: 'Contact Sales', href: '/contact' },
    ],
  },
  blocks: [
    {
      type: 'prose',
      sections: [
        {
          heading: 'HealthAura AI™ — Flagship AI Platform',
          paragraphs: ['Public product information; controlled availability. No diagnostic, treatment or clinical-performance claims. Do not share protected health information in public Lotus Cloud conversations.'],
        },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: {
        kicker: 'Healthcare AI trust posture',
        title: 'Governance and compliance controls are deployment-specific by design.',
        lede: 'HealthAura is engineered for regulated healthcare environments without making blanket certification or zero-data-retention claims. Compliance depends on the customer architecture, enabled services, agreements, and operating controls.',
      },
      items: [
        { title: 'Human oversight', text: 'HealthAura is designed as assistive intelligence. Accountable clinical decisions remain with authorized healthcare professionals.' },
        {
          title: 'HIPAA deployment path',
          text: 'HIPAA-regulated deployments require covered cloud services, an applicable Business Associate Agreement, and customer-specific safeguards.',
          cta: { label: 'Google Cloud HIPAA guidance', href: 'https://cloud.google.com/security/compliance/hipaa-compliance' },
        },
        {
          title: 'Data governance',
          text: 'Model, prompt, and response handling is evaluated per selected Google Cloud service, feature, region, and contractual configuration.',
          cta: { label: 'Google Cloud AI/ML Privacy Commitment', href: 'https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-unveils-ai-and-ml-privacy-commitment' },
        },
        { title: 'Auditability', text: 'Role-aware access, evidence-linked workflows, review checkpoints, and audit trails are core platform design goals.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: { kicker: 'Powered by iHMDS™', title: 'Clinical and operational intelligence stack' },
      items: [
        { title: 'Knowledge grounding' },
        { title: 'Workflow orchestration' },
        { title: 'Governance controls' },
        { title: 'Outcome analytics' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: {
        kicker: 'Vision',
        title: 'Human-centered intelligence for connected healthcare',
        lede: 'HealthAura AI brings clinical teams, service teams, and leadership onto one governed operating surface for assistive intelligence and coordinated workflows.',
      },
      items: [
        { title: 'Healthcare intelligence that augments clinicians and operations teams with explainable AI.' },
        { title: 'Unified workflow support across clinical documentation, care coordination, and enterprise administration.' },
        { title: 'Policy-driven governance with privacy-first architecture for regulated environments.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: {
        kicker: 'Why HealthAura AI',
        title: 'Built for governed enterprise care workflows',
        lede: 'Designed to support healthcare environments where access control, human oversight, and operational accountability matter.',
      },
      items: [
        { title: 'Explore governed documentation workflows with authorized human review.' },
        { title: 'Assist authorized teams with role-aware copilots and evidence-linked insights.' },
        { title: 'Support quality, policy, and performance workflows across care networks.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid2',
      head: {
        kicker: 'Powered by iHMDS™',
        title: 'A healthcare-focused decision-support core',
        lede: 'iHMDS™ provides governed healthcare context, policy alignment, and explainable assistive outputs for authorized workflows.',
      },
      items: [],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: {
        kicker: 'Platform Features',
        title: 'Governed assistive workflow capabilities',
        lede: 'A configurable capability set for authorized provider, payer, delivery-network, and healthcare operations workflows.',
      },
      items: [
        { title: 'Clinical summarization and chart intelligence' },
        { title: 'Case triage and escalation orchestration' },
        { title: 'Clinician-guided care pathway workflow support' },
        { title: 'Medical document extraction and coding support' },
        { title: 'Outcome, utilization, and SLA analytics' },
        { title: 'Secure role-based collaboration workspace' },
        { title: 'Provider and payer workflow integrations' },
        { title: 'Healthcare governance and audit trails' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: {
        kicker: 'Healthcare Reference Architecture',
        title: 'Layered for reliability, policy alignment, and scale',
        lede: 'Reference architecture across access-controlled data, assistive intelligence, orchestration, and governance boundaries.',
      },
      items: [
        { tag: 'Layer 1', title: 'Access-Controlled Clinical Systems and Data Sources' },
        { tag: 'Layer 2', title: 'iHMDS™ Decision-Support Context Layer' },
        { tag: 'Layer 3', title: 'HealthAura AI Orchestration Runtime' },
        { tag: 'Layer 4', title: 'Governance, Security, and Observability' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: {
        kicker: 'Healthcare Use Cases',
        title: 'Operationalize intelligence across the care journey',
        lede: 'Use cases spanning clinical support, care workflows, administration, and strategic performance management.',
      },
      items: [
        { title: 'Clinical Documentation Assistant', text: 'Support documentation review and note-turnaround workflows for authorized care teams.' },
        { title: 'Care Coordination Command Center', text: 'Coordinate multidisciplinary teams with timeline-aware task routing and alerts.' },
        { title: 'Revenue Cycle Intelligence', text: 'Automate coding validation, prior authorization support, and exception routing.' },
        { title: 'Population Health Operations', text: 'Support authorized cohort review, governed follow-up planning, and operational tracking.' },
        { title: 'Patient Service Operations', text: 'Explore governed scheduling, inquiry handling, and care-navigation workflows.' },
        { title: 'Quality and Policy Workflow Support', text: 'Support policy checks, evidence collection, and readiness reviews without asserting regulatory certification.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: {
        kicker: 'Enterprise Screenshots',
        title: 'Preview the operating experience',
        lede: 'Representative interface previews for healthcare teams and executive stakeholders.',
      },
      items: [
        { title: 'Clinical Operations Console', text: 'Role-based overview of active cases, pending escalations, and service-level indicators.' },
        { title: 'Care Pathway Orchestrator', text: 'Visual workflow designer for triage, review, approvals, and handoff automation.' },
        { title: 'Executive Healthcare Dashboard', text: 'Enterprise trends for utilization, quality outcomes, and operational performance.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: {
        kicker: 'Product Videos',
        title: 'Watch HealthAura in motion',
        lede: 'Brief product films for platform walkthroughs, clinical workflows, and governance operations.',
      },
      items: [
        { title: 'HealthAura Platform Overview', text: 'End-to-end narrative of clinical and operational intelligence flows.' },
        { title: 'iHMDS™ in Action', text: 'How iHMDS™ supplies governed context for assistive healthcare AI outputs.' },
        { title: 'Deployment and Governance Walkthrough', text: 'How health systems configure controls, access, and rollout pathways.' },
      ],
    },
    {
      type: 'cards',
      id: 'pricing',
      layout: 'grid3',
      head: {
        kicker: 'Pricing',
        title: 'Commercial models for every stage',
        lede: 'Flexible packaging for pilot programs, enterprise rollouts, and strategic transformation initiatives.',
      },
      items: [
        {
          tag: 'Clinical Pilot',
          title: 'Custom',
          text: 'Evaluate one approved workflow in controlled, access-governed conditions.',
          bullets: ['One approved service line', 'Core iHMDS™ enablement', 'Solution architecture', 'Pilot evaluation framework'],
        },
        {
          tag: 'Enterprise Care Network',
          title: 'Custom',
          text: 'Scale secure healthcare intelligence across departments and facilities.',
          bullets: ['Multi-workflow orchestration', 'Operational analytics', 'Governance controls', 'Priority enablement support'],
        },
        {
          tag: 'Strategic Transformation',
          title: 'Contact Us',
          text: 'Drive enterprise-wide modernization with deeply integrated AI operations.',
          bullets: ['Cross-system integration', 'Executive value tracking', 'Dedicated architecture pod', 'Global rollout playbook'],
        },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: {
        kicker: 'Documentation',
        title: 'Implementation and governance resources',
        lede: 'Reference documentation for architecture, security, deployment, and operational readiness.',
      },
      items: [
        { title: 'Healthcare Security Architecture', cta: { label: 'Open in Docs', href: '/docs' } },
        { title: 'Deployment Guide', cta: { label: 'Open in Docs', href: '/docs' } },
        { title: 'Operations Manual', cta: { label: 'Open in Docs', href: '/docs' } },
        { title: 'Testing Strategy', cta: { label: 'Open in Docs', href: '/docs' } },
      ],
    },
    {
      type: 'cards',
      layout: 'grid2',
      head: {
        kicker: 'Contact Sales',
        title: 'Plan a governed HealthAura AI evaluation',
        lede: 'Speak with our healthcare product and architecture team to design the right deployment strategy for your organization.',
        action: { label: 'Request Healthcare Demo', href: '/contact#demo' },
      },
      items: [{ title: 'Contact Sales Team', cta: { label: 'Contact Sales Team', href: '/contact' } }],
    },
    { type: 'consult' },
    { type: 'leader' },
  ],
}
