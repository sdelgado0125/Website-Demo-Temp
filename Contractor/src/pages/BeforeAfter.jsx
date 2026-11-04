import Compare from '../components/Compare.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { COMPARISONS, SHOP } from '../content.js'

export default function BeforeAfter() {
  return (
    <>
      <PageIntro
        eyebrow={SHOP.name}
        title="Before & After"
        lead="Drag the handle across the work."
      />
      <section className="compare-list">
        {COMPARISONS.map((item) => (
          <Compare key={item.title} item={item} />
        ))}
      </section>
    </>
  )
}
