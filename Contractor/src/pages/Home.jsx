import { AboutBlock, CtaBand, MoreServices, ProjectBand, ServiceBand } from '../components/HomeSections.jsx'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import ReviewCarousel, { ReviewSummary } from '../components/ReviewCarousel.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <section className="reviews-home">
        <ReviewSummary />
        <ReviewCarousel />
      </section>
      <AboutBlock />
      <MoreServices />
      <ServiceBand />
      <ProjectBand />
      <CtaBand />
    </>
  )
}
