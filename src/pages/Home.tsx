import { Hero } from '../components/Hero/Hero'
import { TrustStrip } from '../components/TrustStrip'
import { usePageMeta } from '../lib/usePageMeta'
import { Academy, Offer, Platforms, Research } from '../components/sections/Offer'
import { EnterpriseServices, Footprint, Industries, Why } from '../components/sections/Proof'
import { Consultation, Ecosystem, Leadership } from '../components/sections/Close'

export default function Home() {
  usePageMeta({
    title: 'Lotus Cloud | Agentic AI, Healthcare AI, Cloud, Academy & Research',
    description: 'Lotus Cloud builds Agentic AI and healthcare AI platforms, cloud and enterprise solutions, professional education, and applied research.',
    path: '/',
  })
  return (
    <>
      <Hero />
      <TrustStrip />
      <Offer />
      <Platforms />
      <Academy />
      <Research />
      <Why />
      <Industries />
      <EnterpriseServices />
      <Footprint />
      <Consultation />
      <Ecosystem />
      <Leadership />
    </>
  )
}
