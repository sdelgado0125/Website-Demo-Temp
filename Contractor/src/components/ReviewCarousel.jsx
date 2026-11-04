import { useRef } from 'react'
import { REVIEWS, SHOP } from '../content.js'
import { Stars } from '../icons.jsx'

export function ReviewSummary() {
  return (
    <div className="rating-bar">
      <strong>{SHOP.reviewLabel}</strong>
      <Stars value={5} />
      <span className="rating-score">{SHOP.reviewScore}</span>
      <span className="rating-rule" />
      <span>{SHOP.reviewCount} reviews</span>
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-top">
        <span className="avatar" aria-hidden="true">
          {review.name.slice(0, 1)}
        </span>
        <div>
          <h3>{review.name}</h3>
          <p>
            {review.loc} · {review.date}
          </p>
        </div>
      </div>
      <Stars value={review.rating} />
      <p className="review-body">{review.body}</p>
    </article>
  )
}

export function ReviewGrid({ items = REVIEWS }) {
  return (
    <div className="review-grid">
      {items.map((review) => (
        <ReviewCard key={review.name + review.date} review={review} />
      ))}
    </div>
  )
}

export default function ReviewCarousel() {
  const scroller = useRef(null)

  function move(direction) {
    const node = scroller.current
    if (!node) return
    node.scrollBy({ left: direction * (node.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <div className="review-carousel">
      <button type="button" className="arrow-btn" aria-label="Previous reviews" onClick={() => move(-1)}>
        ‹
      </button>
      <div className="review-scroller" ref={scroller}>
        {REVIEWS.map((review) => (
          <ReviewCard key={review.name + review.date} review={review} />
        ))}
      </div>
      <button type="button" className="arrow-btn arrow-right" aria-label="Next reviews" onClick={() => move(1)}>
        ›
      </button>
    </div>
  )
}
