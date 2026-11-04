import { Link } from 'react-router-dom'
import { REVIEWS } from '../content.js'
import { Stars } from '../icons.jsx'

export default function ReviewsPreview({ limit = 3 }) {
  return (
    <section className="reviews-preview">
      <div className="section-head">
        <p className="eyebrow">Reviews</p>
        <h2>Neighbors who got back on the road.</h2>
        <Link to="/reviews" className="text-link">
          Read all reviews
        </Link>
      </div>
      <div className="review-grid">
        {REVIEWS.slice(0, limit).map((r) => (
          <article key={r.name} className="review-card">
            <Stars count={r.rating} />
            <h3>{r.title}</h3>
            <p>{r.body}</p>
            <footer>
              <b>{r.name}</b>
              <span>
                {r.loc} · {r.date}
              </span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
