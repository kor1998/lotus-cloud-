import { PageHero } from '../components/page/PageHero'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Page not found | Lotus Cloud')
  return (
    <>
      <PageHero
        hero={{
          eyebrow: '404',
          title: 'This page does not exist',
          lede: 'The link may be old, or the address may have a typo. Start from the home page or pick a section from the menu.',
          actions: [
            { label: 'Go to home', href: '/' },
            { label: 'Start here', href: '/start' },
          ],
        }}
      />
      <div className="sec sec--paper" style={{ paddingBlock: 0 }} />
    </>
  )
}
