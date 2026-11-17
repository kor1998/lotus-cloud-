import type { ArtName } from '../components/Nav/Art'

/* All copy below is taken from the live lotuscloud.ai home page. */

export const OFFER = {
  title: 'Cloud, collaboration and AI for your enterprise',
  lede: 'From consulting and migration to implementation, training and enterprise support, start with the solution your business needs.',
  cards: [
    { title: 'Google Cloud', desc: 'Cloud architecture, implementation, migration, AI/ML and managed services.', href: '/services#cloud-architecture' },
    { title: 'Google Workspace', desc: 'Collaboration, migration, adoption and licensing consultation for your organization.', href: '/services#google-workspace' },
    { title: 'ChromeOS / Chromebooks', desc: 'Device strategy, deployment planning and enterprise adoption guidance.', href: '/services#chromeos' },
    { title: 'Lotus Cloud AI & Products', desc: 'PADMA™, HealthAura AI™ and focused applications for governed enterprise work.', href: '/platforms' },
    { title: 'Custom Client Solutions', desc: 'Architecture and implementation tailored to your business workflows and integration needs.', href: '/services#custom-solutions' },
  ],
  partner: {
    title: 'Google Cloud Partner',
    desc: 'Building governed cloud, data, and AI solutions with the Google Cloud ecosystem.',
  },
}

export const PLATFORMS = {
  title: 'AI platforms built to lead',
  lede: 'PADMA, PADMA Legal, and HealthAura AI anchor the Lotus Cloud platform portfolio across enterprise Agentic AI, governed legal intelligence, and healthcare intelligence.',
  all: { label: 'View all platforms', href: '/platforms' },
  cards: [
    {
      kind: 'Flagship Enterprise AI Platform',
      title: 'PADMA™',
      tagline: 'Personalized, Agentic, Digital, Multi-modal AI',
      desc: 'An enterprise Agentic AI and multimodal orchestration foundation for governed multi-agent operations, knowledge, workflows, and human oversight.',
      note: 'Public information; controlled enterprise preview/pilot. Unrestricted general availability is not offered.',
      cta: 'Learn about PADMA',
      href: '/products/padma',
      art: 'orbit' as ArtName,
    },
    {
      kind: 'Flagship Vertical AI Platform',
      title: 'PADMA™ Legal Intelligence Platform',
      tagline: 'Precision Research. Verifiable Citations. Governed Intelligence.',
      desc: 'A governed legal research and intelligence workspace for evidence-linked research, citation verification, source provenance, document intelligence, and human-reviewed legal workflows.',
      note: 'Public information and demos; controlled availability.',
      cta: 'Learn about PADMA Legal',
      href: '/products/padma-legal',
      art: 'docs' as ArtName,
    },
    {
      kind: 'Flagship AI Platform',
      title: 'HealthAura AI™',
      tagline: 'Powered by iHMDS™',
      desc: 'A governed healthcare AI platform supporting explainable, clinician-guided intelligence and coordinated operational workflows.',
      note: 'Public product information; controlled availability. No diagnostic, treatment or clinical-performance claims. Do not share protected health information in public Lotus Cloud conversations.',
      cta: 'Explore HealthAura AI',
      href: '/products/healthaura',
      art: 'pulse' as ArtName,
    },
  ],
}

export const ACADEMY = {
  label: 'Lotus Cloud Academy',
  title: 'Learning designed for enterprise practice',
  lede: 'Structured pathways connect foundational learning, certification preparation, mentored labs, and enterprise delivery practices.',
  cta: { label: 'Explore Academy', href: '/academy' },
  programs: [
    { title: 'Zero to Hero™', desc: 'A structured pathway from foundations through certification preparation and applied labs.', href: '/academy#zero-to-hero' },
    { title: 'Lotus Cloud Enterprise Residency™', desc: 'Where Learning Becomes Enterprise Experience. Learn. Build. Certify. Deliver.', href: '/academy#enterprise-residency' },
    { title: 'Master Programs', desc: 'Advanced professional learning across cloud, AI, Agentic AI, data, cybersecurity, and Physical AI.', href: '/academy#master-programs' },
  ],
}

export const RESEARCH = {
  panels: [
    {
      label: 'Research and emerging technology',
      title: 'iHMDS™ Core Platform Technology',
      desc: 'Lotus Cloud’s core platform technology for healthcare, data, and intelligence—supporting governed context, explainable decision support, and responsible healthcare AI.',
      cta: { label: 'Explore Research', href: '/research' },
      art: 'mesh' as ArtName,
    },
    {
      label: 'Strategic emerging area',
      title: 'Physical AI',
      desc: 'Exploring how intelligent systems can perceive, reason, and act responsibly across robotics, devices, and real-world enterprise environments.',
      cta: { label: 'Explore Physical AI', href: '/research#physical-ai' },
      art: 'stack' as ArtName,
    },
  ],
}

export const WHY = {
  title: 'Enterprise depth. Product speed. AI-native thinking.',
  lede: 'We combine strategic architecture with hands-on engineering to move enterprise AI from concept to reliable, scalable operations.',
  stats: [
    { value: '25+', label: 'Years experience' },
    { value: '15+', label: 'Enterprise AI solutions' },
    { value: 'Google Cloud', label: 'Partner' },
    { value: 'Global', label: 'Delivery' },
  ],
  cards: [
    { mono: 'AI', title: 'Enterprise AI', desc: 'AI systems designed around measurable outcomes, governance, and real operational workflows.' },
    { mono: 'GC', title: 'Google Cloud Expertise', desc: 'Cloud-native architecture built with Vertex AI, Gemini, BigQuery, Firebase, and serverless services.' },
    { mono: 'MA', title: 'Multi-Agent Architecture', desc: 'Supervisor-led AI agents that collaborate, reason, and act across specialized enterprise domains.' },
    { mono: 'ES', title: 'Enterprise Security', desc: 'Security-first engineering with identity, observability, isolation, and governance at every layer.' },
    { mono: 'RD', title: 'Rapid Delivery', desc: 'Reusable platform patterns accelerate delivery from enterprise discovery to production deployment.' },
    { mono: 'SP', title: 'Scalable Platforms', desc: 'Composable systems engineered to grow across teams, workloads, regions, and business units.' },
  ],
}

export const INDUSTRIES = {
  title: 'Enterprise AI shaped by real operating environments',
  lede: 'Lotus Cloud works across regulated, service-heavy, and mission-critical sectors where trustworthy architecture matters as much as innovation speed.',
  items: [
    { mono: 'HC', title: 'Healthcare', desc: 'Clinician-guided workflow support, care operations, and governed healthcare AI.' },
    { mono: 'ED', title: 'Education', desc: 'Academic modernization, learner experiences, and administrative intelligence.' },
    { mono: 'GV', title: 'Government', desc: 'Trusted automation and secure service delivery for public sector programs.' },
    { mono: 'FS', title: 'Financial Services', desc: 'Risk-aware platforms for documents, analytics, and customer decisioning.' },
    { mono: 'MF', title: 'Manufacturing', desc: 'Operational visibility, supply chain insight, and field process automation.' },
    { mono: 'RT', title: 'Retail', desc: 'Customer engagement, merchandising intelligence, and omnichannel operations.' },
    { mono: 'EN', title: 'Energy', desc: 'Asset intelligence and resilient workflows across distributed operations.' },
    { mono: 'NP', title: 'Nonprofit', desc: 'Mission-aligned platforms that extend service capacity with governed automation.' },
  ],
}

export const SERVICES = {
  title: 'Architecture through managed operations',
  lede: 'A complete delivery model for organizations building, modernizing, and operating intelligent platforms on Google Cloud.',
  cta: { label: 'Discuss your roadmap', href: '/contact#consultation' },
  items: [
    { title: 'Google Workspace', desc: 'Plan collaboration, migration, adoption and licensing needs through a guided consultation.' },
    { title: 'ChromeOS / Chromebooks', desc: 'Align ChromeOS and Chromebook deployment with your enterprise device and support requirements.' },
    { title: 'Custom Client Solutions', desc: 'Design and implement client-specific applications, integrations and business workflows.' },
    { title: 'FinOps / Cost Optimization', desc: 'Review cloud usage and architecture to identify practical cost optimization opportunities.' },
    { title: 'Cloud Architecture', desc: 'Design secure, scalable, and resilient Google Cloud foundations tailored to enterprise requirements.' },
    { title: 'AI Consulting', desc: 'Strategic guidance for AI adoption, use-case discovery, and enterprise roadmap development.' },
    { title: 'Application Modernization', desc: 'Transform legacy systems into cloud-native, AI-enabled platforms with modern architectures.' },
    { title: 'Data Engineering', desc: 'Build trusted data pipelines, analytics platforms, and data governance solutions.' },
    { title: 'MLOps & AI Operations', desc: 'Reliable model delivery, monitoring, governance, and continuous improvement frameworks.' },
    { title: 'Enterprise Training', desc: 'Custom cloud and AI enablement programs delivered for enterprise teams.' },
    { title: 'Managed Services', desc: 'Continuous optimization, operational support, and platform management for critical cloud environments.' },
  ],
}

export const FOOTPRINT = {
  title: 'Enterprise thinking without borders',
  lede: 'Supporting cloud modernization and AI transformation across major global business regions.',
  // lon/lat are the pin positions on the dot map; `side` is which way the label sits
  regions: [
    { name: 'USA', lon: -98, lat: 39, side: 'l' },
    { name: 'Canada', lon: -100, lat: 57, side: 'r' },
    { name: 'India', lon: 78, lat: 22, side: 'r' },
    { name: 'Europe', lon: 10, lat: 50, side: 'l' },
    { name: 'Middle East', lon: 45, lat: 26, side: 'l' },
    { name: 'Australia', lon: 134, lat: -25, side: 'l' },
  ] as { name: string; lon: number; lat: number; side: 'l' | 'r' }[],
}

export const CONSULT = {
  label: 'Free Architecture Consultation',
  title: 'Plan your enterprise AI platform with the right architecture first',
  desc: 'Work directly with Lotus Cloud to define platform strategy, governance, rollout priorities, and the fastest path to production value.',
  primary: { label: 'Schedule Meeting', href: '/contact' },
  secondary: { label: 'Contact Sales', href: '/contact' },
}

export const ECOSYSTEM = {
  title: 'Building Enterprise AI on Trusted Global Platforms',
  lede: 'Lotus Cloud composes secure AI, analytics, productivity, and cloud foundations across the world’s leading enterprise platforms.',
  items: [
    { icon: '/brand/icons/google-cloud.svg', title: 'Google Cloud', desc: 'Scalable cloud infrastructure for enterprise-grade AI workloads.' },
    { icon: '/brand/icons/google-workspace.svg', title: 'Google Workspace', desc: 'Collaboration and productivity services connected to secure AI workflows.' },
    { icon: '/brand/icons/vertex-ai.svg', title: 'Vertex AI', desc: 'Managed machine learning platform for governed model delivery.' },
    { icon: '/brand/icons/gemini.svg', title: 'Gemini', desc: 'Multimodal model capabilities for reasoning, generation, and agents.' },
    { icon: '/brand/icons/firebase.svg', title: 'Firebase', desc: 'Realtime application services for rapid, production-ready delivery.' },
    { icon: '/brand/icons/bigquery.svg', title: 'BigQuery', desc: 'Analytics at scale for governed insights and AI-ready data foundations.' },
    { icon: '/brand/icons/looker.svg', title: 'Looker', desc: 'Business intelligence experiences for transparent enterprise decisions.' },
    { icon: '/brand/icons/chrome-enterprise.svg', title: 'Chrome Enterprise', desc: 'Secure endpoint management and browser controls for modern work.' },
    { icon: '/brand/icons/aws.svg', title: 'AWS', desc: 'Flexible cloud services for resilient, multi-platform enterprise delivery.' },
    { icon: '/brand/icons/azure.svg', title: 'Microsoft Azure', desc: 'Hybrid cloud services that support governed AI and application estates.' },
  ],
}

export const LEADER = {
  title: 'Architecting the Future of Enterprise AI',
  name: 'Dr. Veera B. Dasari',
  role: 'CEO & Chief Architect, Lotus Cloud, Inc.',
  paragraphs: [
    'Dr. Veera B. Dasari serves as the CEO & Chief Architect of Lotus Cloud, Inc., leading the design and delivery of Enterprise AI, Google Cloud, and intelligent automation solutions.',
    'With nearly three decades of technology leadership, he specializes in Enterprise Architecture, Google Cloud, Vertex AI, Gemini, Multi-Agent AI, and production-scale enterprise transformation.',
    'His vision is to empower organizations with secure, scalable, and human-centered AI platforms.',
  ],
  badges: [
    '29+ Years IT Leadership',
    'Enterprise AI Strategist',
    'Google Cloud Champion Innovator',
    'Google Cloud Professional Architect',
    'AWS Solutions Architect Professional',
  ],
  primary: { label: 'Book a Consultation', href: '/contact#consultation' },
  secondary: { label: 'View Professional Profile', href: '/about' },
}

export const FOOTER = {
  blurb: 'Architecting intelligent enterprise platforms with Agentic AI, Google Cloud, and multi-agent systems.',
  hq: 'Lotus Cloud Inc., serving enterprise clients across North America and global delivery hubs.',
  email: 'contact@lotuscloud.ai',
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/lotuscloudAI' },
    { label: 'YouTube', href: 'https://youtube.com/@lotuscloudHQ' },
    { label: 'GitHub', href: 'https://github.com/lotuscloud' },
  ],
  groups: [
    {
      title: 'Platforms',
      links: [
        { label: 'About PADMA™', href: '/products/padma' },
        { label: 'PADMA™ platform', href: 'https://padma.lotuscloud.ai' },
        { label: 'About PADMA™ Legal', href: '/products/padma-legal' },
        { label: 'PADMA™ Legal demo', href: 'https://legal.padma.lotuscloud.ai' },
        { label: 'HealthAura AI™', href: '/products/healthaura' },
        { label: 'Platform Catalog', href: '/platforms' },
      ],
    },
    {
      title: 'Academy',
      links: [
        { label: 'Zero to Hero™', href: '/academy#zero-to-hero' },
        { label: 'Enterprise Residency™', href: '/academy#enterprise-residency' },
        { label: 'Master Programs', href: '/academy#master-programs' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Cloud', href: '/services#cloud-architecture' },
        { label: 'AI & Agentic AI', href: '/services' },
        { label: 'Data & Analytics', href: '/services' },
        { label: 'Enterprise Services', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Start here', href: '/start' },
        { label: 'About', href: '/about' },
        { label: 'Research', href: '/research' },
        { label: 'Industries', href: '/industries' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Support', href: '/contact#support' },
      ],
    },
  ],
}
