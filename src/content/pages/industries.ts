import type { PageData } from './types'

export const industries: PageData = {
  path: '/industries',
  title: 'Industry Solutions | Lotus Cloud',
  hero: {
    title: 'Industry-Specific AI Solutions',
    lede: 'Specialized expertise in healthcare, finance, manufacturing, and government. We understand industry-specific challenges and compliance requirements.',
    actions: [
      { label: 'Explore Industries', href: '#verticals' },
      { label: 'Get Expert Insights', href: '/contact#consultation' },
    ],
  },
  blocks: [
    {
      type: 'cards',
      id: 'verticals',
      layout: 'grid4',
      head: { kicker: 'Industry Expertise', title: 'Solutions for every sector', lede: 'Domain-focused solutions tailored to industry-specific challenges, compliance requirements, and business objectives.' },
      items: [
        { mono: 'HC', title: 'Healthcare', bullets: ['Clinician-guided decision-support workflows', 'Access-controlled healthcare data workflows', 'Medical imaging analysis with AI'] },
        { mono: 'FS', title: 'Financial Services', bullets: ['Fraud detection and prevention', 'Risk assessment and modeling', 'Personalized financial advisory'] },
        { mono: 'MF', title: 'Manufacturing', bullets: ['Predictive maintenance systems', 'Supply chain optimization', 'Quality assurance automation'] },
        { mono: 'RT', title: 'Retail', bullets: ['Customer analytics and insights', 'Inventory optimization', 'Personalized recommendations'] },
        { mono: 'EN', title: 'Energy & Utilities', bullets: ['Grid optimization and forecasting', 'Predictive maintenance', 'Energy demand prediction'] },
        { mono: 'GV', title: 'Government', bullets: ['Citizen services optimization', 'Public safety analytics', 'Process automation'] },
        { mono: 'ED', title: 'Education', bullets: ['Adaptive learning systems', 'Student success prediction', 'Administrative automation'] },
        { mono: 'NP', title: 'Nonprofit', bullets: ['Donor analytics and engagement', 'Impact measurement', 'Operations optimization'] },
      ],
    },
    {
      type: 'cards',
      id: 'industries',
      layout: 'grid4',
      head: { kicker: 'Trusted Industries', title: 'Enterprise AI shaped by real operating environments', lede: 'Lotus Cloud works across regulated, service-heavy, and mission-critical sectors where trustworthy architecture matters as much as innovation speed.' },
      items: [
        { id: 'healthcare', mono: 'HC', title: 'Healthcare', text: 'Clinician-guided workflow support, care operations, and governed healthcare AI.' },
        { id: 'education', mono: 'ED', title: 'Education', text: 'Academic modernization, learner experiences, and administrative intelligence.' },
        { id: 'government', mono: 'GV', title: 'Government', text: 'Trusted automation and secure service delivery for public sector programs.' },
        { id: 'financial-services', mono: 'FS', title: 'Financial Services', text: 'Risk-aware platforms for documents, analytics, and customer decisioning.' },
        { id: 'manufacturing', mono: 'MF', title: 'Manufacturing', text: 'Operational visibility, supply chain insight, and field process automation.' },
        { id: 'retail', mono: 'RT', title: 'Retail', text: 'Customer engagement, merchandising intelligence, and omnichannel operations.' },
        { id: 'energy', mono: 'EN', title: 'Energy', text: 'Asset intelligence and resilient workflows across distributed operations.' },
        { id: 'nonprofit', mono: 'NP', title: 'Nonprofit', text: 'Mission-aligned platforms that extend service capacity with governed automation.' },
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
