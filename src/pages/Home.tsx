import { Hero } from '../components/Hero/Hero'
import { TrustStrip } from '../components/TrustStrip'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { Academy, Offer, Platforms, Research } from '../components/sections/Offer'
import { EnterpriseServices, Footprint, Industries, Why } from '../components/sections/Proof'
import { Consultation, Ecosystem, Leadership } from '../components/sections/Close'

export default function Home() {
  useDocumentTitle('Lotus Cloud | Agentic AI, Healthcare AI, Cloud, Academy & Research')
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
