import type { PageData } from './types'

export const training: PageData = {
  path: '/training',
  title: 'Lotus Cloud Enterprise Residency™ | Lotus Cloud',
  hero: {
    eyebrow: 'Lotus Cloud Academy presents',
    title: 'Lotus Cloud Enterprise Residency™',
    lede: 'Where Learning Becomes Enterprise Experience. Don’t just learn the technology. Build with it. Move from guided foundations and certification preparation into hands-on labs, architecture practice, mentored delivery, and portfolio-ready enterprise work. Learn. Build. Certify. Deliver.',
    actions: [
      { label: 'Explore Residency', href: '#residency-programs' },
      { label: 'Apply for Residency', href: '#residency-admissions' },
    ],
  },
  blocks: [
    {
      type: 'cards',
      layout: 'grid4',
      head: {
        title: 'Beyond Training. Beyond Certification.',
        lede: 'Lotus Cloud Academy provides the learning and certification foundation. Enterprise Residency adds immersive, mentored professional experience.',
      },
      items: [
        { mono: '01', title: 'Learn' },
        { mono: '02', title: 'Build' },
        { mono: '03', title: 'Certify' },
        { mono: '04', title: 'Deliver' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid2',
      head: { kicker: 'Brand architecture', title: 'Academy builds the foundation. Residency builds enterprise experience.' },
      items: [
        { mono: '01', title: 'Lotus Cloud Academy', text: 'Learning & certification foundation' },
        { mono: '02', title: 'Enterprise Residency™', text: 'Enterprise experience', tone: 'night' },
      ],
    },
    {
      type: 'prose',
      sections: [
        {
          paragraphs: [
            'The experience is designed as a progression, not a shortcut. Participants build knowledge, practice under guidance, and demonstrate professional delivery habits within approved project scope.',
          ],
        },
      ],
    },
    {
      type: 'cards',
      layout: 'grid4',
      head: { kicker: 'The Residency journey', title: 'Learn. Build. Certify. Deliver.' },
      items: [
        { mono: '01', title: 'Foundations' },
        { mono: '02', title: 'Advanced learning' },
        { mono: '03', title: 'Hands-on labs' },
        { mono: '04', title: 'Certification preparation' },
        { mono: '05', title: 'Mentoring' },
        { mono: '06', title: 'Architecture practice' },
        { mono: '07', title: 'Enterprise project experience' },
        { mono: '08', title: 'Portfolio and professional readiness' },
      ],
    },
    {
      type: 'list',
      head: { kicker: 'Professional delivery practices', title: 'Experience that goes beyond course completion' },
      items: [
        { title: 'Architecture decisions and technical documentation' },
        { title: 'Git-based collaboration and review workflows' },
        { title: 'Testing, quality gates, and secure delivery practices' },
        { title: 'CI/CD concepts and operational readiness' },
        { title: 'Professional communication and delivery checkpoints' },
        { title: 'Portfolio evidence grounded in approved work' },
      ],
    },
    {
      type: 'cards',
      layout: 'grid2',
      head: { kicker: 'Beyond Training. Beyond Certification.', title: 'Traditional learning and Enterprise Residency' },
      items: [
        { title: 'Traditional training', text: 'Builds knowledge through instruction, demonstrations, exercises, and course completion.' },
        { title: 'Enterprise Residency™', text: 'Extends learning through mentored labs, architecture decisions, review cycles, approved project exposure, and professional delivery evidence.', tone: 'night' },
      ],
    },
    {
      type: 'prose',
      sections: [
        {
          paragraphs: [
            'Selected Enterprise Residency participants may receive guided exposure to approved Lotus Cloud enterprise projects, subject to project scope, confidentiality requirements, access controls, and cohort eligibility. Project exposure depends on approved scope, confidentiality requirements, access controls, and cohort eligibility. Participants do not receive unrestricted production, repository, or credential access. Enterprise Residency does not provide access to real patient data.',
          ],
        },
      ],
    },
    {
      type: 'cards',
      layout: 'grid3',
      head: {
        kicker: 'Academy foundations',
        title: 'Learning paths that support the Residency',
        lede: 'Build the technical foundation required for advanced labs, certification preparation, and enterprise delivery practice.',
      },
      items: [
        { mono: '01', title: 'Google Cloud foundations', text: 'Core cloud services, IAM, networking, operations, and cost-aware design.' },
        { mono: '02', title: 'Vertex AI & generative AI', text: 'Guided implementation patterns for managed AI and generative applications.' },
        { mono: '03', title: 'Gemini applications', text: 'Responsible solution design, evaluation, integration, and governance.' },
        { mono: '04', title: 'Enterprise architecture', text: 'Secure, scalable, resilient, and observable cloud-native systems.' },
        { mono: '05', title: 'Agentic & multi-agent systems', text: 'Orchestration, tool use, guardrails, testing, and human oversight.' },
        { mono: '06', title: 'Technical leadership', text: 'Architecture communication, decision records, delivery planning, and stakeholder readiness.' },
      ],
    },
    {
      type: 'cards',
      id: 'certification-paths',
      layout: 'grid3',
      head: {
        kicker: 'Google Cloud certification preparation',
        title: 'Preparation aligned to official Google Cloud credentials',
        lede: 'Lotus Cloud provides guided preparation, labs, and review support. Google Cloud awards its certifications; participation does not guarantee an exam result or certification.',
        action: { label: 'Discuss certification preparation', href: '/contact#academy' },
      },
      items: [
        { tag: 'PATH 01', title: 'Cloud foundations', bullets: ['Associate Cloud Engineer'] },
        { tag: 'PATH 02', title: 'Architecture & development', bullets: ['Professional Cloud Architect', 'Professional Cloud Developer'] },
        { tag: 'PATH 03', title: 'Data & machine learning', bullets: ['Professional Data Engineer', 'Professional Machine Learning Engineer'] },
      ],
    },
    {
      type: 'cards',
      layout: 'grid2',
      head: {
        kicker: 'Signature experiences',
        title: 'Residencies built around enterprise practices',
        lede: 'Focused tracks combine guided learning with hands-on practice and professional delivery habits.',
      },
      items: [
        {
          title: 'PADMA™ Enterprise AI Residency',
          text: 'Practice enterprise AI platform architecture through guided solution design, integration patterns, governance, testing, and delivery reviews.',
          bullets: ['Platform architecture', 'Agentic AI patterns', 'Governance and evaluation', 'Mentored delivery reviews'],
          cta: { label: 'Explore Residency', href: '#residency-programs' },
        },
        {
          title: 'Lotus Cloud Cloud Engineering Residency™',
          text: 'Develop professional cloud engineering habits through Google Cloud labs, secure architecture, automation, observability, and documented delivery.',
          bullets: ['Google Cloud architecture', 'Secure delivery', 'CI/CD concepts', 'Operational readiness'],
          cta: { label: 'Explore Residency', href: '#residency-programs' },
        },
      ],
    },
    {
      type: 'list',
      head: {
        kicker: 'Corporate Enterprise Residency',
        title: 'Build enterprise capability through a guided team experience',
        lede: 'Private programs can combine Academy foundations, labs, architecture practice, mentoring, and delivery simulations around an approved organizational scope.',
        action: { label: 'Request a Corporate Residency Plan', href: '/contact#academy' },
      },
      items: [
        { title: 'Cohort scope aligned to organizational objectives' },
        { title: 'Private remote or agreed delivery formats' },
        { title: 'Hands-on labs using approved environments' },
        { title: 'Architecture and technical-leadership sessions' },
        { title: 'Mentored review and delivery checkpoints' },
        { title: 'Certification preparation where relevant' },
      ],
    },
    {
      type: 'prose',
      sections: [
        {
          paragraphs: [
            'Program scope, schedule, access, outcomes, and commercial terms are confirmed through Residency Admissions. No certification, employment, internship, salary, or business-result guarantee is made.',
          ],
        },
      ],
    },
    {
      type: 'cards',
      id: 'residency-programs',
      layout: 'grid2',
      head: {
        kicker: 'Enterprise Residency Programs',
        title: 'Supported tracks for guided enterprise experience',
        lede: 'Each track combines practical labs, mentoring, review checkpoints, and an admissions path for individuals or enterprise cohorts.',
      },
      items: [
        {
          title: 'Lotus Cloud Physical AI Enterprise Residency™',
          text: 'AI and agentic systems that perceive context, reason, and support action in physical environments through cloud-based labs and architecture exercises.',
          bullets: [
            'Audience: Engineering teams, Automation teams, Applied AI practitioners',
            'Duration: 6 weeks',
            'Prerequisites: Programming fundamentals, Cloud basics, Linux command line',
            'Pricing: Contact Residency Admissions',
            'Hands-on Labs: Guided cloud labs and simulations; no specific hardware access is promised.',
            'Enterprise Project Experience: A supervised concept or simulation may be reviewed within approved cohort scope.',
            'Certification Alignment: Aligned to enterprise AI engineering and cloud deployment competency tracks.',
            'Curriculum / Modules: Physical AI architecture patterns, Perception and context, Agentic orchestration, Safety and observability',
            'Outcomes: Explain Physical AI architecture patterns, Build and evaluate a governed workflow, Present a reviewed architecture portfolio',
          ],
          cta: { label: 'Apply for Residency', href: '#residency-admissions' },
        },
        {
          title: 'Lotus Cloud Master Certification + Enterprise Residency™',
          text: 'Google Cloud certification preparation combined with labs, mentoring, architecture, and enterprise delivery practice.',
          bullets: [
            'Audience: Cloud engineers, Solution architects, AI platform teams',
            'Duration: 12–16 weeks',
            'Prerequisites: Intermediate cloud knowledge, Application deployment experience, Comfort with APIs and data workflows',
            'Pricing: Contact Residency Admissions',
            'Hands-on Labs: Guided labs spanning approved Google Cloud, application, data, AI, and delivery workflows.',
            'Enterprise Project Experience: Supervised solution work with delivery checkpoints and architecture feedback.',
            'Certification Alignment: Preparation may cover official Google Cloud credentials selected for the participant’s role.',
            'Curriculum / Modules: Cloud foundations, Architecture, Application delivery, Data and AI, DevOps and security, Enterprise Residency',
            'Outcomes: Reviewed project portfolio, Certification preparation plan, Professional delivery readiness',
          ],
          cta: { label: 'Apply for Residency', href: '#residency-admissions' },
        },
        {
          title: 'Guided Enterprise Project Residency',
          text: 'Mentored delivery artifacts, implementation workflows, testing, review cycles, and professional readiness.',
          bullets: [
            'Audience: Students, Graduates, Working professionals',
            'Duration: 8 weeks',
            'Prerequisites: Basic software development, Version control familiarity, Cloud fundamentals',
            'Pricing: Contact Residency Admissions',
            'Hands-on Labs: Delivery labs on API integration, workflow automation, and quality validation.',
            'Enterprise Project Experience: Selected Enterprise Residency participants may receive guided exposure to approved Lotus Cloud enterprise projects, subject to project scope, confidentiality requirements, access controls, and cohort eligibility.',
            'Certification Alignment: Complements cloud and AI certification preparation through applied practice.',
            'Curriculum / Modules: Discovery, Architecture, Implementation and testing, Portfolio readiness',
            'Outcomes: Approved portfolio artifacts, Mentored code and architecture reviews, Professional delivery readiness',
          ],
          cta: { label: 'Apply for Residency', href: '#residency-admissions' },
        },
        {
          title: 'Lotus Cloud Cloud & AI Engineering Residency™',
          text: 'Cloud and AI capability development with mentoring, labs, architecture, governance, and reviewed outcomes.',
          bullets: [
            'Audience: Working engineers, Team leads, Consulting professionals',
            'Duration: 10 weeks',
            'Prerequisites: Development experience, Cloud account setup, Availability for weekly labs',
            'Pricing: Contact Residency Admissions',
            'Hands-on Labs: Structured hands-on labs with checkpoints and technical feedback.',
            'Enterprise Project Experience: A guided capstone mapped to approved enterprise implementation standards.',
            'Certification Alignment: Mapped to professional cloud and AI competency outcomes.',
            'Curriculum / Modules: Cloud modernization, AI orchestration, Security and governance, Portfolio delivery',
            'Outcomes: Reviewed cloud and AI solution, Professional transition readiness, Portfolio evidence',
          ],
          cta: { label: 'Apply for Residency', href: '#residency-admissions' },
        },
      ],
    },
    {
      type: 'steps',
      id: 'residency-admissions',
      head: {
        kicker: 'Enterprise Residency Admissions',
        title: 'Residency Admissions Flow',
        lede: 'Submit your Residency Inquiry. Share your program interest and goals. We will follow up with eligibility, schedule, and next-step guidance.',
        action: { label: 'Submit Residency Inquiry', href: '/contact#academy' },
      },
      steps: [
        { title: 'Discover', text: 'Program selection' },
        { title: 'Review', text: 'Curriculum and pricing' },
        { title: 'Apply', text: 'Submit Residency details' },
        { title: 'Confirm', text: 'Admissions response' },
        { title: 'Onboard', text: 'Cohort kickoff' },
      ],
    },
    { type: 'consult' },
  ],
}
