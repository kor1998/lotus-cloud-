import type { PageData } from './types'

export const padmaLegal: PageData = {
  path: '/products/padma-legal',
  title: 'PADMA™ Legal Intelligence Platform | Lotus Cloud | Lotus Cloud',
  hero: {
    eyebrow: 'Governed Multi-Jurisdictional Legal Intelligence',
    title: 'PADMA™ Legal Intelligence Platform',
    lede: 'Precision Research. Verifiable Citations. Governed Intelligence. A governed legal research and intelligence workspace designed to help teams organize multi-jurisdiction research, connect findings to evidence, verify citations and provenance, analyze documents, and keep qualified human review in control.',
    actions: [
      { label: 'Request Demo Access', href: 'https://legal.padma.lotuscloud.ai/#request-access' },
      { label: 'Explore PADMA Legal Demo', href: 'https://legal.padma.lotuscloud.ai' },
      { label: 'Need the client or employee portal? Start here', href: '/start' },
    ],
  },
  blocks: [
    {
      type: 'prose',
      sections: [
        {
          heading: 'PADMA™ Legal Intelligence Platform — Flagship Vertical AI Platform',
          paragraphs: ['Public information and demos; controlled availability.', 'The demo uses fictional matters. Access is reviewed; production legal workspaces are not yet available.'],
        },
      ],
    },
    {
      type: 'cards',
      layout: 'grid2',
      items: [
        { tag: 'PADMA identity', title: 'पद्म — Lotus', text: 'PADMA derives from the Sanskrit word पद्म , meaning Lotus. The name intentionally shares the same conceptual identity as Lotus Cloud.' },
        { tag: 'Controlling expansion', title: 'Personalized, Agentic, Digital, Multi-modal AI' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: {
        kicker: 'Research and verification',
        title: 'Legal intelligence built around evidence and review',
        lede: 'PADMA Legal emphasizes traceability, review, and governed workflows rather than unsupported model-generated conclusions.',
      },
      items: [
        { title: 'Multi-jurisdiction research', text: 'Structure research across supported jurisdictions while keeping authority, jurisdiction, and source context visible to the reviewer.' },
        { title: 'Evidence-linked intelligence', text: 'Connect findings to the underlying source material so reviewers can trace what supports each research conclusion.' },
        { title: 'Citation verification', text: 'Support citation-aware review workflows designed to make source checking a first-class step rather than an afterthought.' },
        { title: 'Source provenance', text: 'Preserve the origin and context of research materials to strengthen reviewability, auditability, and responsible reuse.' },
        { title: 'Document intelligence', text: 'Organize and analyze legal and business documents within controlled, review-oriented workflows.' },
        { title: 'Human review and governance', text: 'Keep qualified human judgment in control through review gates, provenance, governance controls, and transparent limitations.' },
      ],
    },
    {
      type: 'steps',
      head: { kicker: 'Governed workflow', title: 'Research → evidence → verification → human judgment' },
      steps: [
        { title: 'Define', text: 'Identify the jurisdiction, research question, source boundaries, and required review standard.' },
        { title: 'Research', text: 'Use governed AI-assisted workflows to organize relevant sources and evidence.' },
        { title: 'Verify', text: 'Review citations, source provenance, context, and conflicting authority before relying on a finding.' },
        { title: 'Review', text: 'Route the work to a qualified human reviewer for judgment, edits, and approval.' },
      ],
    },
    {
      type: 'cards',
      layout: 'bento5',
      head: {
        kicker: 'Responsible deployment',
        title: 'Human review is part of the architecture',
        lede: 'Legal research can be high consequence. PADMA Legal is positioned as an intelligence and research workspace with explicit boundaries around advice, representation, and final judgment.',
      },
      items: [
        { title: 'Designed for legal research and intelligence support, not autonomous legal advice.' },
        { title: 'Source provenance and citation review remain visible parts of the workflow.' },
        { title: 'Qualified human review is required before legal conclusions or actions are relied upon.' },
        { title: 'Multilingual and multimodal workflows are used only where the deployed capability supports them.' },
        { title: 'Demonstrations use fictional content unless a separately governed environment authorizes otherwise.' },
      ],
    },
    {
      type: 'prose',
      sections: [
        {
          heading: 'Legal-use notice',
          paragraphs: [
            'PADMA Legal provides AI-assisted legal research and intelligence capabilities. It does not provide autonomous legal advice, guarantee legal outcomes, create an attorney-client relationship, or act as legal counsel. Outputs may be incomplete or incorrect and must be independently verified by appropriately qualified human reviewers before being relied upon for legal decisions or actions.',
          ],
        },
      ],
    },
    { type: 'leader' },
  ],
}
