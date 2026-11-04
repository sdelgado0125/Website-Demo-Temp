import { CtaBand } from '../components/HomeSections.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { ReviewGrid, ReviewSummary } from '../components/ReviewCarousel.jsx'
import { SHOP } from '../content.js'

export default function Reviews() {
  return (
    <>
      <PageIntro
        eyebrow={SHOP.name}
        title="Reviews"
        lead="Homeowners around Marietta, in their own words."
      />
      <section className="reviews-page">
        <ReviewSummary />
        <ReviewGrid />
      </section>
      <CtaBand />
    </>
  )
}
