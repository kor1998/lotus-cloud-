import { useDocumentTitle } from '../../lib/useDocumentTitle'
import type { PageData } from '../../content/pages/types'
import { Blocks } from './Blocks'
import { PageHero } from './PageHero'

export function ContentPage({ data }: { data: PageData }) {
  useDocumentTitle(data.title)
  return (
    <>
      <PageHero hero={data.hero} />
      <Blocks blocks={data.blocks} />
    </>
  )
}
