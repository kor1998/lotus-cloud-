import type { PageData } from './types'

export const about: PageData = {
  path: '/about',
  title: 'About Lotus Cloud | Lotus Cloud',
  hero: {
    title: 'Building the Future of Enterprise AI',
    lede: 'Lotus Cloud empowers enterprise organizations to architect, deploy, and scale intelligent platforms powered by PADMA, Google Cloud, and multi-agent AI systems.',
    actions: [
      { label: 'Our Story', href: '#story' },
      { label: 'Get in Touch', href: '/contact' },
    ],
  },
  blocks: [
    {
      type: 'cards',
      id: 'story',
      layout: 'grid3',
      head: { kicker: 'Our Foundation', title: 'Built on core values', lede: 'These principles guide everything we do, from product development to customer relationships.' },
      items: [
        { title: 'Innovation First', text: "We pioneer new approaches to enterprise AI, always pushing the boundaries of what's possible." },
        { title: 'Customer Success', text: "Your success is our success. We're committed to delivering measurable value for every engagement." },
        { title: 'Security & Trust', text: 'Enterprise-grade security and governance are built into everything we deliver.' },
        { title: 'Global Expertise', text: 'Our team brings 15+ years of Google Cloud and enterprise AI experience across industries.' },
        { title: 'Thought Leadership', text: 'We share knowledge through training, research, and industry contributions.' },
        { title: 'Execution Excellence', text: 'We deliver production-ready solutions on time, every time.' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: { kicker: 'Deep Expertise', title: 'Where we excel', lede: 'Our team combines technical mastery with industry knowledge across critical enterprise domains.' },
      items: [
        { title: 'Enterprise Architecture', text: 'Designing scalable, secure systems for Fortune 500 companies' },
        { title: 'Agentic AI & PADMA', text: 'Leading platform for multi-agent enterprise AI systems' },
        { title: 'Google Cloud Platform', text: 'Expert implementation of GCP services and cloud-native solutions' },
        { title: 'Vertex AI & Gemini', text: 'Advanced machine learning and large language model expertise' },
        { title: 'Data Engineering', text: 'Building trusted data platforms and analytics solutions' },
        { title: 'Enterprise Training', text: 'Certified instructors delivering world-class enablement programs' },
      ],
    },
    { type: 'leader', id: 'leadership' },
    { type: 'footprint', id: 'global-footprint' },
    { type: 'consult' },
  ],
}
