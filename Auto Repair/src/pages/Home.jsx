import ContactPanel from '../components/ContactPanel.jsx'
import Hero from '../components/Hero.jsx'
import ReviewsPreview from '../components/ReviewsPreview.jsx'
import ServiceCatalog from '../components/ServiceCatalog.jsx'
import ServiceShowcase from '../components/ServiceShowcase.jsx'
import SplitStory from '../components/SplitStory.jsx'
import { SERVICES } from '../content.js'

export default function Home() {
  const emergency = SERVICES.find((s) => s.id === 'emergency')
  const oil = SERVICES.find((s) => s.id === 'oil')

  return (
    <>
      <Hero />
      <ServiceShowcase service={emergency} />
      <ServiceCatalog />
      <ServiceShowcase service={oil} />
      <SplitStory />
      <ReviewsPreview />
      <ContactPanel />
    </>
  )
}
