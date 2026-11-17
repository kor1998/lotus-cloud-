import type { FormEvent } from 'react'
import { PageHero } from '../components/page/PageHero'
import { Leadership } from '../components/sections/Close'
import { useDocumentTitle } from '../lib/useDocumentTitle'

/*
  Contact. The live form writes to the site's own database; this build has no backend, so the form
  composes an email instead: on submit it opens the visitor's mail app with every field filled in and
  addressed to contact@lotuscloud.ai. Nothing is "sent" by the page itself, so it never shows a fake success message.
*/
const CHANNELS = [
  { title: 'Enterprise Consultation', text: 'Discuss platform strategy, rollout sequencing, and delivery timelines.', href: '#consultation' },
  { title: 'Product Support', text: 'Get help with access, billing, usage, or service questions.', href: '#support' },
  { title: 'Partnerships', text: 'Explore referral, channel, integration, and strategic alliance opportunities.', href: '#partnerships' },
  { title: 'Careers', text: 'Send hiring and recruiting questions to the right team.', href: '#careers' },
]

const SIZES = ['1-50', '51-200', '201-1000', '1001-5000', '5000+']

const SOLUTIONS = [
  'PADMA™',
  'PADMA™ Legal Intelligence Platform',
  'HealthAura AI™',
  'QuickForm AI',
  'Lotus Drive Organizer',
  'Lotus Concierge AI',
  'Smart Receipt Scanner',
  'SRM Event Hub',
  'Google Cloud',
  'AI & Agentic AI',
  'Data & Analytics',
  'Enterprise Services',
  'Academy',
  'Workspace',
  'AI Consulting',
  'Application Modernization',
  'Enterprise Residency',
  'Managed Services',
  'Other',
]

const FIELDS: [string, string][] = [
  ['name', 'Full Name'],
  ['company', 'Company'],
  ['title', 'Job Title'],
  ['email', 'Business Email'],
  ['phone', 'Phone Number'],
  ['country', 'Country'],
  ['industry', 'Industry'],
  ['size', 'Company Size'],
  ['solution', 'Interested Solution'],
]

function sendByEmail(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const f = new FormData(e.currentTarget)
  const get = (k: string) => String(f.get(k) ?? '').trim()
  const lines = FIELDS.map(([k, label]) => (get(k) ? `${label}: ${get(k)}` : '')).filter(Boolean)
  const body = `${lines.join('\n')}\n\nMessage:\n${get('message')}`
  const subject = `Contact request${get('solution') ? ` — ${get('solution')}` : ''}${get('company') ? ` (${get('company')})` : ''}`
  window.location.href = `mailto:contact@lotuscloud.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  useDocumentTitle('Contact Lotus Cloud | Lotus Cloud')
  return (
    <>
      <PageHero
        hero={{
          eyebrow: 'Contact Lotus Cloud',
          title: 'Start a conversation with the team behind your next enterprise rollout.',
          lede: 'Use this form for demos, product guidance, partnerships, support, hiring, or Enterprise Residency inquiries. We route every request to the right team and respond as soon as possible.',
        }}
      />

      <section id="demo" className="sec sec--paper" aria-labelledby="form-title">
        <div className="wrap contact">
          <div className="contact__side">
            <ul className="contact__channels">
              {CHANNELS.map((c) => (
                <li key={c.title} className="tile tile--light">
                  <h2 className="tile__title">{c.title}</h2>
                  <p className="tile__text">{c.text}</p>
                  <a className="tile__go" href={c.href}>
                    Learn more
                  </a>
                </li>
              ))}
            </ul>

            <ul className="contact__mails">
              <li id="consultation" className="mailcard">
                <span id="enterprise" />
                <span className="mailcard__label">Enterprise Sales</span>
                <a href="mailto:sales@lotuscloud.ai">sales@lotuscloud.ai</a>
              </li>
              <li className="mailcard">
                <span className="mailcard__label">Support</span>
                <a href="mailto:support@lotuscloud.ai">support@lotuscloud.ai</a>
              </li>
              <li className="mailcard">
                <span className="mailcard__label">Partnerships</span>
                <a href="mailto:partners@lotuscloud.ai">partners@lotuscloud.ai</a>
              </li>
              <li className="mailcard">
                <span className="mailcard__label">Careers</span>
                <a href="mailto:careers@lotuscloud.ai">careers@lotuscloud.ai</a>
              </li>
            </ul>
          </div>

          <form className="cform tile tile--light" onSubmit={sendByEmail}>
            <div className="cform__head">
              <div>
                <p className="kicker">Contact Request</p>
                <h2 id="form-title" className="cform__title">
                  Tell us what you need
                </h2>
                <p className="card__text">Share enough detail for us to route your request quickly. Required fields are marked with an asterisk.</p>
              </div>
              <p className="cform__resp">
                <span>Response Time</span>
                1-2 business days
              </p>
            </div>

            <div className="cform__grid">
              <label className="field">
                <span>Full Name *</span>
                <input name="name" required autoComplete="name" placeholder="Jane Doe" />
              </label>
              <label className="field">
                <span>Company *</span>
                <input name="company" required autoComplete="organization" placeholder="Acme Corporation" />
              </label>
              <label className="field">
                <span>Job Title</span>
                <input name="title" autoComplete="organization-title" placeholder="Director of Engineering" />
              </label>
              <label className="field">
                <span>Business Email *</span>
                <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
              </label>
              <label className="field">
                <span>Phone Number</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="+1 555 123 4567" />
              </label>
              <label className="field">
                <span>Country</span>
                <input name="country" autoComplete="country-name" placeholder="United States" />
              </label>
              <label className="field">
                <span>Industry</span>
                <input name="industry" placeholder="Healthcare" />
              </label>
              <label className="field">
                <span>Company Size</span>
                <select name="size" defaultValue="">
                  <option value="">Select size</option>
                  {SIZES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="field field--wide">
                <span>Interested Solution</span>
                <select name="solution" defaultValue="">
                  <option value="">Select solution</option>
                  {SOLUTIONS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="field field--wide">
                <span>Message *</span>
                <textarea name="message" required rows={5} placeholder="Share your goals, timeline, and enterprise priorities." />
              </label>
            </div>

            <label className="cform__consent">
              <input name="consent" type="checkbox" required />
              <span>
                I agree to be contacted and acknowledge the <a href="/privacy">Privacy Policy</a>. *
              </span>
            </label>

            <div className="cform__actions">
              <button className="btn btn--dark" type="submit">
                Submit Inquiry
              </button>
              <button className="btn btn--outline" type="reset">
                Reset
              </button>
            </div>
            <p className="cform__note">Submitting opens your email app with this message ready to send to contact@lotuscloud.ai.</p>
          </form>
        </div>
      </section>

      <section id="support" className="sec sec--white" aria-labelledby="support-title">
        <div className="wrap contact2">
          <div>
            <p className="kicker">Support</p>
            <h2 id="support-title" className="head__title">
              Need help with an existing account?
            </h2>
            <p className="head__lede">For service issues, access questions, or account-specific help, use the support channel below so your request reaches the right operations team.</p>
          </div>
          <ul className="contact__mails contact__mails--2">
            <li id="partnerships" className="mailcard mailcard--white">
              <span className="mailcard__label">Partnerships</span>
              <a href="mailto:partners@lotuscloud.ai">partners@lotuscloud.ai</a>
            </li>
            <li id="careers" className="mailcard mailcard--white">
              <span className="mailcard__label">Careers</span>
              <a href="mailto:careers@lotuscloud.ai">careers@lotuscloud.ai</a>
            </li>
            <li id="residency" className="mailcard mailcard--white">
              <span id="academy" />
              <span className="mailcard__label">Residency Admissions</span>
              <a href="mailto:contact@lotuscloud.ai">contact@lotuscloud.ai</a>
            </li>
            <li id="general" className="mailcard mailcard--white">
              <span className="mailcard__label">General Inquiries</span>
              <a href="mailto:contact@lotuscloud.ai">contact@lotuscloud.ai</a>
            </li>
          </ul>
        </div>
      </section>

      <Leadership />
    </>
  )
}
