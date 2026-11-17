import { PageHero } from '../components/page/PageHero'
import { usePageMeta } from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page not found | Lotus Cloud',
    description: 'This page could not be found.',
    path: '/404',
    noindex: true,
  })
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
