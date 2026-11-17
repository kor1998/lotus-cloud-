import { PageHero } from '../components/page/PageHero'
import { usePageMeta } from '../lib/usePageMeta'

/*
  Sign-in belongs to the live Lotus Cloud portal (real accounts, Google sign-in). This build has no account
  system, so the page keeps the live wording and sends people on to the portal instead of showing a fake form.
*/
export default function Login() {
  usePageMeta({
    title: 'Lotus Cloud | Enterprise AI and Cloud Platforms',
    description: 'Sign in to the Lotus Cloud portal.',
    path: '/login',
    noindex: true,
  })
  return (
    <>
      <PageHero
        hero={{
          eyebrow: 'Lotus Cloud',
          title: 'One Secure Sign-In',
          lede: 'For clients, employees and partners. Use your assigned Lotus Cloud account; we will open the workspace you are authorized to access.',
        }}
      />
      <section className="sec sec--paper" aria-label="Sign in">
        <div className="wrap">
          <div className="tile tile--light signin">
            <h2 className="tile__title">Sign in with your Lotus Cloud account</h2>
            <p className="tile__text">Sign-in runs on the Lotus Cloud portal, where you can use your email and password or continue with Google.</p>
            <a className="btn btn--dark signin__btn" href="https://lotuscloud.ai/login" rel="noopener noreferrer">
              Continue to the sign-in portal
            </a>
            <p className="card__text">
              Need access? Contact your Lotus Cloud administrator or <a className="tlink" href="/contact#support">support</a>.
            </p>
            <p className="card__text">
              Looking for product information or the Legal demo? <a className="tlink" href="/start">Start here</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
