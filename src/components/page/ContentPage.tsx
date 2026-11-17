import { usePageMeta } from '../../lib/usePageMeta'
import type { PageData } from '../../content/pages/types'
import { Blocks } from './Blocks'
import { PageHero } from './PageHero'

export function ContentPage({ data }: { data: PageData }) {
  usePageMeta({
    title: data.title,
    description: data.description ?? data.hero.lede ?? `${data.hero.title} — Lotus Cloud.`,
    path: data.path,
  })
  return (
    <>
      <PageHero hero={data.hero} />
      <Blocks blocks={data.blocks} />
    </>
  )
}
