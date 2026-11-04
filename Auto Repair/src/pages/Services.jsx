import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { SERVICES, SHOP } from '../content.js'

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <PageHero
        image={SERVICES[1].image}
        kicker="Services"
        title="Five things we do every day"
        lede="Emergency repairs, brakes, diagnostics, oil, and engines — quoted before we turn a wrench."
      />
      <div className="service-list">
        {SERVICES.map((s, i) => (
          <article key={s.id} id={s.id} className={`service-row ${i % 2 ? 'is-flip' : ''}`}>
            <div className="service-row-media" style={{ backgroundImage: `url(${s.image})` }} />
            <div className="service-row-copy">
              <p className="eyebrow">{s.group}</p>
              <h2>{s.name}</h2>
              <p className="lede">{s.lead}</p>
              <p className="catalog-price">{s.price}</p>
              <ul>
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="hero-actions">
                <a className="btn btn-ghost-dark" href={`tel:${SHOP.phoneE164}`}>
                  Call now
                </a>
                <Link to="/contact" className="btn btn-solid">
                  Book this service
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
