import type { PageData } from './types'

export const padma: PageData = {
  path: '/products/padma',
  title: 'PADMA™ | Vendor-Neutral Enterprise AI Platform | Lotus Cloud',
  hero: {
    eyebrow: 'Built for production enterprise AI',
    title: 'Turn enterprise complexity into intelligent action.',
    lede: 'Deploy an intelligent operating layer that coordinates agents, models, knowledge, people, and systems—with enterprise trust built in.',
    actions: [
      { label: 'Request Demo', href: '/contact#demo' },
      { label: 'Launch PADMA', href: 'https://padma.lotuscloud.ai' },
      { label: 'Explore the interactive brochure', href: '#padma-brochure' },
    ],
  },
  blocks: [
    {
      type: 'prose',
      sections: [
        {
          heading: 'PADMA™ — Flagship Enterprise AI Platform',
          paragraphs: [
            'Public information; controlled enterprise preview/pilot. Unrestricted general availability is not offered.',
            'PADMA Voice™ is a preview/emerging capability. PADMA Telephone Agent is planned/preview; live telephone service is not available.',
          ],
        },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Lotus Cloud', title: 'Enterprise AI Platform' },
      items: [
        { title: 'Governed', text: 'By design' },
        { title: 'Multi-agent', text: 'At scale' },
        { title: 'Enterprise', text: 'Ready' },
      ],
    },
    {
      type: 'cards',
      layout: 'bento5',
      head: { kicker: 'PADMA Control Plane', title: 'Live orchestration overview' },
      items: [
        { mono: 'SU', tag: 'Operational', title: 'Supervisor', tone: 'night' },
        { mono: 'KA', title: 'Knowledge' },
        { mono: 'WA', title: 'Workflow' },
        { mono: 'IA', title: 'Insights' },
        { mono: 'SA', title: 'Security' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid2',
      head: {
        kicker: 'Our Vision',
        title: 'An intelligent operating layer for the enterprise',
        lede: 'Enterprise AI should do more than answer questions. PADMA transforms knowledge into coordinated, governed action across the systems and teams that run your business.',
      },
      items: [
        { mono: '01', title: 'Move from isolated copilots to coordinated intelligence.' },
        { mono: '02', title: 'Build trust with visible controls and explainable execution.' },
        { mono: '03', title: 'Connect people, data, models, and workflows in one operating fabric.' },
        { mono: '04', title: 'Scale successful AI patterns without recreating governance.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: {
        kicker: 'Why PADMA Is Different',
        title: 'From AI experiments to an enterprise operating model',
        lede: 'PADMA is designed around the realities of complex organizations: distributed knowledge, regulated decisions, existing systems, and accountable human leadership.',
      },
      items: [
        { mono: '01', title: 'Supervisor-led orchestration', text: 'A dedicated PADMA supervisor plans, delegates, validates, and coordinates enterprise work from intent through outcome.', tone: 'night' },
        { mono: '02', title: 'Multi-agent platform', text: 'Specialized agents collaborate through one managed platform rather than operating as disconnected point solutions.' },
        { mono: '03', title: 'Enterprise memory', text: 'Durable, permission-aware context connects knowledge, decisions, and outcomes across long-running operations.' },
        { mono: '04', title: 'Human-in-the-loop', text: 'Configurable decision gates bring accountable experts into high-value, sensitive, or exceptional workflows.' },
        { mono: '05', title: 'Governance by design', text: 'Identity, policy, evaluation, risk controls, and audit evidence are embedded in every execution lifecycle.' },
        { mono: '06', title: 'Explainable execution', text: 'Trace plans, sources, agent actions, approvals, and outcomes so stakeholders can understand how work was completed.' },
        { mono: '07', title: 'Vendor-neutral architecture', text: 'Supported Enterprise AI Technologies integrate through a consistent control plane without dependency on a single vendor.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      items: [
        { title: 'Not another chatbot' },
        { title: 'Not locked to one model' },
        { title: 'Not governance bolted on' },
        { title: 'Not a disconnected point solution' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: {
        kicker: 'Features',
        title: 'Everything required for production agentic AI',
        lede: 'A complete capability set for turning powerful models into reliable, secure, outcome-driven enterprise systems.',
      },
      items: [
        { mono: 'OR', title: 'Intelligent orchestration', text: 'Coordinate specialized agents, models, tools, and human approvals through one governed supervisor.' },
        { mono: 'GR', title: 'Enterprise grounding', text: 'Connect trusted business knowledge and operational context without compromising source permissions.' },
        { mono: 'GV', title: 'Policy-first governance', text: 'Apply identity, policy, audit, and escalation controls to every agent decision and action.' },
        { mono: 'WM', title: 'Workflow memory', text: 'Preserve task context, decisions, and outcomes across long-running enterprise processes.' },
        { mono: 'HI', title: 'Human intelligence', text: 'Place experts in the loop at the right moments with configurable review and approval gates.' },
        { mono: 'OB', title: 'Full observability', text: 'Monitor quality, cost, latency, risk, and business outcomes across the complete agent lifecycle.' },
      ],
    },
    {
      type: 'steps',
      head: {
        kicker: 'Enterprise AI Platform',
        title: 'One governed control plane. Every intelligent workflow.',
        lede: 'PADMA provides the shared runtime, controls, and operational visibility required to deploy AI as durable enterprise infrastructure.',
      },
      steps: [
        { title: 'Build', text: 'Compose agents, prompts, tools, knowledge, and workflows.' },
        { title: 'Govern', text: 'Apply policies, permissions, approvals, and evaluation gates.' },
        { title: 'Operate', text: 'Run resilient agent solutions across models and systems.' },
        { title: 'Improve', text: 'Learn from quality, cost, risk, and business performance.' },
      ],
    },
    {
      type: 'steps',
      head: {
        kicker: 'Multi-Agent Architecture',
        title: 'Specialized intelligence, coordinated as one system',
        lede: 'The PADMA supervisor interprets intent, creates a plan, routes work to the right agents and tools, and manages the full execution lifecycle.',
      },
      steps: [
        { title: 'Intent', text: 'Understand goals and context' },
        { title: 'Plan', text: 'Decompose work and policy' },
        { title: 'Orchestrate', text: 'Route agents, models, and tools' },
        { title: 'Validate', text: 'Evaluate output and approvals' },
        { title: 'Act', text: 'Execute and learn from outcomes' },
      ],
    },
    {
      type: 'split',
      head: {
        kicker: 'Reference Architecture',
        title: 'Designed for secure enterprise integration',
        lede: 'A modular architecture connects experience, orchestration, intelligence, and enterprise systems through a common governance foundation.',
      },
      items: [
        { title: 'Experience layer', text: 'Employee apps · Customer channels · Operational workspaces · APIs' },
        { title: 'PADMA orchestration', text: 'Supervisor · Agent registry · Workflow runtime · Enterprise memory' },
        { title: 'Enterprise intelligence', text: 'Supported Enterprise AI Technologies · Enterprise search · Intelligence gateway' },
        { title: 'Enterprise systems', text: 'CRM · ERP · Data platforms · Documents · Business applications' },
        { title: 'Trust foundation', text: 'Identity · Policy · Security · Audit · Observability · FinOps' },
      ],
    },
    {
      type: 'cards',
      id: 'platform-capabilities',
      layout: 'grid4',
      head: {
        kicker: 'Platform Capabilities',
        title: 'A foundation that grows with your AI strategy',
        lede: 'Adopt the capabilities you need today and expand into a common enterprise agent platform over time.',
      },
      items: [
        { title: 'Multi-model routing' },
        { title: 'Agent registry' },
        { title: 'Tool and API gateway' },
        { title: 'Enterprise memory' },
        { title: 'Retrieval and grounding' },
        { title: 'Prompt lifecycle' },
        { title: 'Policy enforcement' },
        { title: 'Human approvals' },
        { title: 'Evaluation framework' },
        { title: 'Cost controls' },
        { title: 'Audit trails' },
        { title: 'Operational analytics' },
      ],
    },
    {
      type: 'split',
      head: {
        kicker: 'Optional Enterprise Integrations',
        title: 'Supported Enterprise Technology Ecosystem',
        lede: 'PADMA remains the independent orchestration, memory, governance, and execution platform. Organizations can connect their preferred enterprise technologies through secure, replaceable integration boundaries.',
      },
      items: [
        { title: 'Enterprise AI technologies', text: 'Optional intelligence runtimes and specialized enterprise capabilities.' },
        { title: 'Business applications', text: 'CRM, ERP, service management, productivity, and industry platforms.' },
        { title: 'Data and knowledge', text: 'Warehouses, lakes, search, document repositories, and governed knowledge sources.' },
        { title: 'Identity and security', text: 'Enterprise identity, secrets, policy, access, and security operations systems.' },
        { title: 'Observability and operations', text: 'Monitoring, audit, cost management, reliability, and service operations.' },
        { title: 'Developer ecosystem', text: 'APIs, event systems, workflow tools, delivery pipelines, and extension frameworks.' },
      ],
    },
    {
      type: 'prose',
      sections: [
        { paragraphs: ['Integration availability is determined by enterprise requirements. No single external AI provider or technology is required for PADMA platform positioning.'] },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: {
        kicker: 'Industries',
        title: 'Built for high-value, high-trust operations',
        lede: 'PADMA adapts to regulated environments, specialized knowledge, and complex workflows without sacrificing governance.',
      },
      items: [
        { mono: '01', title: 'Financial services', text: 'Governed operations, document intelligence, risk review, and customer service.' },
        { mono: '02', title: 'Healthcare', text: 'Clinical workflow assistance, coordinated intake, reporting, and operational intelligence.' },
        { mono: '03', title: 'Public sector', text: 'Policy-aware case management, constituent services, and auditable automation.' },
        { mono: '04', title: 'Manufacturing', text: 'Supply-chain coordination, maintenance intelligence, and frontline decision support.' },
        { mono: '05', title: 'Retail', text: 'Customer experience, merchandising intelligence, and multi-system operations.' },
        { mono: '06', title: 'Professional services', text: 'Knowledge activation, engagement delivery, and expert workflow acceleration.' },
      ],
    },
    {
      type: 'list',
      head: {
        kicker: 'Use Cases',
        title: 'Start where enterprise value is clearest',
        lede: "Deploy focused solutions that deliver measurable outcomes, then connect them through PADMA's shared intelligence and governance.",
      },
      items: [
        { title: 'Enterprise knowledge assistant' },
        { title: 'Complex case orchestration' },
        { title: 'Document-to-decision automation' },
        { title: 'Customer service resolution' },
        { title: 'Compliance review and evidence' },
        { title: 'Executive operations intelligence' },
        { title: 'Employee service delivery' },
        { title: 'IT and security operations' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: {
        kicker: 'Product Experience',
        title: 'Six enterprise workspaces. One PADMA control plane.',
        lede: 'Purpose-built experiences help technology, operations, risk, knowledge, and executive teams manage intelligent work from strategy through measurable outcomes.',
      },
      items: [
        { tag: 'Enterprise workspace', title: 'Supervisor Dashboard', text: 'Direct and monitor enterprise work across agents, workflows, systems, and human decision points.', tone: 'night' },
        { tag: 'Enterprise workspace', title: 'Workflow Studio', text: 'Design governed operating flows with policies, approvals, tools, and measurable outcomes.' },
        { tag: 'Enterprise workspace', title: 'Agent Registry', text: 'Manage specialized agent capabilities, ownership, lifecycle, permissions, and readiness.' },
        { tag: 'Enterprise workspace', title: 'Enterprise Knowledge', text: 'Connect trusted organizational context with source-aware access and reusable memory.' },
        { tag: 'Enterprise workspace', title: 'Governance Center', text: 'Control policies, evaluations, risk, audit evidence, and explainable execution.' },
        { tag: 'Enterprise workspace', title: 'Executive Dashboard', text: 'Translate platform activity into enterprise outcomes, risk, adoption, and value.' },
      ],
    },
    {
      type: 'cards',
      id: 'padma-brochure',
      layout: 'grid2',
      head: {
        kicker: 'Interactive Brochure',
        title: 'Share the PADMA enterprise story',
        lede: 'Explore the platform narrative on-page or download a concise PDF for your architecture, innovation, and executive teams.',
        action: { label: 'Download PDF', href: 'https://lotuscloud.ai/brochures/padma/PADMA_Brochure_2026.pdf' },
      },
      items: [
        {
          tag: 'Enterprise brief · 2026',
          title: 'The intelligent operating layer for enterprise action.',
          text: 'Supervisor-led multi-agent orchestration with governance, enterprise grounding, and operational intelligence built in.',
          bullets: ['Build', 'Govern', 'Scale'],
          tone: 'night',
        },
        {
          title: 'Download PDF',
          text: 'A concise overview of PADMA architecture, differentiators, capabilities, and adoption paths.',
          cta: { label: 'Download PDF', href: 'https://lotuscloud.ai/brochures/padma/PADMA_Brochure_2026.pdf' },
        },
      ],
    },
    {
      type: 'cards',
      id: 'pricing',
      layout: 'grid3',
      head: {
        kicker: 'Pricing',
        title: 'A commercial model aligned to enterprise outcomes',
        lede: 'Every PADMA engagement is scoped around your use cases, integration landscape, governance needs, and scale objectives.',
      },
      items: [
        {
          tag: 'Pilot',
          title: 'Custom',
          text: 'Validate a focused enterprise use case with production-minded foundations.',
          bullets: ['One priority workflow', 'Core agent orchestration', 'Solution architecture', 'Pilot success plan'],
          cta: { label: 'Contact Sales', href: '/contact' },
        },
        {
          tag: 'Enterprise',
          title: 'Custom',
          text: 'Deploy governed multi-agent operations across teams and business systems.',
          bullets: ['Multiple agent solutions', 'Enterprise integrations', 'Governance and observability', 'Priority support'],
          note: 'Recommended',
          cta: { label: 'Contact Sales', href: '/contact' },
          tone: 'night',
        },
        {
          tag: 'Enterprise Plus',
          title: 'Contact us',
          text: 'Scale strategic AI transformation across complex, global organizations.',
          bullets: ['Cross-business orchestration', 'Advanced controls', 'Dedicated architecture team', 'Custom success program'],
          cta: { label: 'Contact Sales', href: '/contact' },
        },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: {
        kicker: 'Documentation',
        title: 'Resources for every stage of adoption',
        lede: 'Give architects, builders, security teams, and operators the guidance they need to move confidently from strategy to production.',
      },
      items: [
        { tag: 'DOC 01', title: 'Platform overview', text: 'Core concepts, terminology, and platform orientation.', cta: { label: 'Read documentation', href: '/docs' } },
        { tag: 'DOC 02', title: 'Architecture guide', text: 'Reference patterns for secure enterprise deployment.', cta: { label: 'Read documentation', href: '/docs' } },
        { tag: 'DOC 03', title: 'Developer guide', text: 'Agent, tool, integration, and workflow implementation.', cta: { label: 'Read documentation', href: '/docs' } },
        { tag: 'DOC 04', title: 'Trust center', text: 'Security, privacy, governance, and compliance resources.', cta: { label: 'Read documentation', href: '/docs' } },
      ],
    },
    {
      type: 'cards',
      layout: 'lead',
      head: { title: 'Build with PADMA', action: { label: 'Contact Sales', href: '/contact' } },
      items: [
        {
          tag: 'Build with PADMA',
          title: 'Design your enterprise AI advantage.',
          text: 'Meet with Lotus Cloud architects to identify your highest-value use cases and define a secure path to production.',
          bullets: ['Architecture-led', 'Governance-ready', 'Outcome-focused'],
          cta: { label: 'Request Demo', href: '/contact#demo' },
        },
      ],
    },
  ],
}
