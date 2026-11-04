import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { REVIEWS, SHOP } from '../content.js'
import { Stars } from '../icons.jsx'

export default function Reviews() {
  const avg = (
    REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
  ).toFixed(1)

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
        kicker="Reviews"
        title="What the lot next door says"
        lede={`${avg} from regulars in Marietta, Smyrna, Kennesaw, and the rest of the commute.`}
      />
      <section className="review-summary">
        <div>
          <p className="big-stat">{avg}</p>
          <Stars count={5} />
          <p>{REVIEWS.length} featured reviews from the Atlanta commute</p>
        </div>
        <p>
          We ask every customer the same thing: did we explain the work, hit the number we quoted, and give the car
          back when we said we would? If the answer is no, we want the phone call first.
        </p>
      </section>
      <section className="review-grid review-grid-page">
        {REVIEWS.map((r) => (
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
      </section>
      <section className="cta-band">
        <h2>Need a bay today?</h2>
        <p>Call the shop or send the year, make, model, and what it is doing.</p>
        <div className="hero-actions">
          <a className="btn btn-solid-light" href={`tel:${SHOP.phoneE164}`}>
            Call {SHOP.phoneDisplay}
          </a>
          <Link to="/contact" className="btn btn-ghost">
            Book service
          </Link>
        </div>
      </section>
    </>
  )
}
