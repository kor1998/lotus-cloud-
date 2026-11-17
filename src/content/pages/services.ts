import type { PageData } from './types'

export const services: PageData = {
  path: '/services',
  title: 'Enterprise Services | Lotus Cloud',
  hero: {
    title: 'Enterprise Services for AI Transformation',
    lede: 'From cloud architecture to managed operations, we provide comprehensive services to design, build, and scale enterprise AI platforms.',
    actions: [
      { label: 'View Services', href: '#offerings' },
      { label: 'Schedule Consultation', href: '/contact#consultation' },
    ],
  },
  blocks: [
    {
      type: 'cards',
      id: 'offerings',
      layout: 'grid3',
      head: { kicker: 'Service Offerings', title: 'Complete enterprise solutions', lede: 'Our integrated service delivery model covers every stage of your AI and cloud transformation journey.' },
      items: [
        { id: 'google-workspace', tag: '01', title: 'Google Workspace', text: 'Plan collaboration, migration, adoption and licensing needs through a guided consultation.', bullets: ['Workspace assessment', 'Migration planning', 'Adoption and training', 'Licensing consultation'] },
        { id: 'chromeos', tag: '02', title: 'ChromeOS / Chromebooks', text: 'Align ChromeOS and Chromebook deployment with your enterprise device and support requirements.', bullets: ['Device strategy', 'Deployment planning', 'Enterprise adoption', 'Support consultation'] },
        { id: 'custom-solutions', tag: '03', title: 'Custom Client Solutions', text: 'Design and implement client-specific applications, integrations and business workflows.', bullets: ['Discovery and architecture', 'Implementation', 'Integration', 'Enterprise support'] },
        { id: 'finops', tag: '04', title: 'FinOps / Cost Optimization', text: 'Review cloud usage and architecture to identify practical cost optimization opportunities.', bullets: ['Cost assessment', 'Usage visibility', 'Optimization planning', 'Ongoing review'] },
        { id: 'cloud-architecture', tag: '05', title: 'Cloud Architecture', text: 'Design secure, scalable, and resilient Google Cloud foundations tailored to enterprise requirements.', bullets: ['System design', 'Security hardening', 'Cost optimization', 'Disaster recovery'] },
        { id: 'ai-consulting', tag: '06', title: 'AI Consulting', text: 'Strategic guidance for AI adoption, use-case discovery, and enterprise roadmap development.', bullets: ['Strategy sessions', 'Use case analysis', 'Technology selection', 'Roadmap planning'] },
        { id: 'application-modernization', tag: '07', title: 'Application Modernization', text: 'Transform legacy systems into cloud-native, AI-enabled platforms with modern architectures.', bullets: ['Architecture refactoring', 'Cloud migration', 'API development', 'Microservices'] },
        { id: 'data-engineering', tag: '08', title: 'Data Engineering', text: 'Build trusted data pipelines, analytics platforms, and data governance solutions.', bullets: ['Data pipelines', 'Data warehousing', 'Analytics engineering', 'Data governance'] },
        { id: 'mlops', tag: '09', title: 'MLOps & AI Operations', text: 'Reliable model delivery, monitoring, governance, and continuous improvement frameworks.', bullets: ['Model deployment', 'Monitoring & alerting', 'Model governance', 'Continuous training'] },
        { id: 'enterprise-training', tag: '10', title: 'Enterprise Training', text: 'Custom cloud and AI enablement programs delivered for enterprise teams.', bullets: ['Custom curriculum', 'Hands-on labs', 'Certification preparation', 'Ongoing support'] },
        { id: 'managed-services', tag: '11', title: 'Managed Services', text: 'Continuous optimization, operational support, and platform management for critical cloud environments.', bullets: ['Operational guidance', 'Platform optimization', 'Observability', 'Managed operations'] },
      ],
    },
    {
      type: 'split',
      id: 'services',
      head: {
        kicker: 'Enterprise Services',
        title: 'Architecture through managed operations',
        lede: 'A complete delivery model for organizations building, modernizing, and operating intelligent platforms on Google Cloud.',
        action: { label: 'Discuss Your Roadmap', href: '/contact#consultation' },
      },
      items: [
        { title: 'Google Workspace', text: 'Plan collaboration, migration, adoption and licensing needs through a guided consultation.' },
        { title: 'ChromeOS / Chromebooks', text: 'Align ChromeOS and Chromebook deployment with your enterprise device and support requirements.' },
        { title: 'Custom Client Solutions', text: 'Design and implement client-specific applications, integrations and business workflows.' },
        { title: 'FinOps / Cost Optimization', text: 'Review cloud usage and architecture to identify practical cost optimization opportunities.' },
        { title: 'Cloud Architecture', text: 'Design secure, scalable, and resilient Google Cloud foundations tailored to enterprise requirements.' },
        { title: 'AI Consulting', text: 'Strategic guidance for AI adoption, use-case discovery, and enterprise roadmap development.' },
        { title: 'Application Modernization', text: 'Transform legacy systems into cloud-native, AI-enabled platforms with modern architectures.' },
        { title: 'Data Engineering', text: 'Build trusted data pipelines, analytics platforms, and data governance solutions.' },
        { title: 'MLOps & AI Operations', text: 'Reliable model delivery, monitoring, governance, and continuous improvement frameworks.' },
        { title: 'Enterprise Training', text: 'Custom cloud and AI enablement programs delivered for enterprise teams.' },
        { title: 'Managed Services', text: 'Continuous optimization, operational support, and platform management for critical cloud environments.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: { kicker: 'Customer Success', title: 'Designed for measurable enterprise impact', lede: 'Lotus Cloud platforms focus AI investment on faster operations, better decisions, and scalable digital capability.' },
      items: [
        { title: '40%', text: 'Reduction in Processing Time' },
        { title: '3×', text: 'Productivity Increase' },
        { title: 'Real-Time', text: 'Decision Intelligence' },
        { title: 'Enterprise', text: 'Cloud-Native Scale' },
      ],
    },
    { type: 'consult' },
    { type: 'leader' },
  ],
}
