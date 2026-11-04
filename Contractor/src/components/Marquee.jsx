import { MARQUEE, SHOP } from '../content.js'

export default function Marquee() {
  const line = (
    <span>
      {MARQUEE}
      <a href={`tel:${SHOP.mobileE164}`}>{SHOP.mobileDisplay}</a>
    </span>
  )

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {line}
        {line}
      </div>
    </div>
  )
}
