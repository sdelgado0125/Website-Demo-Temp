import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { ABOUT, SHOP, STATS, TEAM } from '../content.js'

export default function About() {
  return (
    <>
      <PageHero image={ABOUT.heroImage} kicker={ABOUT.kicker} title={ABOUT.title} lede={ABOUT.lead} />
      <section className="stats-row">
        {STATS.map((s) => (
          <div key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </section>
      <section className="about-story">
        {ABOUT.story.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>
      <section className="team">
        <div className="section-head">
          <p className="eyebrow">People</p>
          <h2>Who is actually working on the car.</h2>
        </div>
        <div className="team-grid">
          {TEAM.map((m) => (
            <article key={m.name}>
              <h3>{m.name}</h3>
              <p className="role">{m.role}</p>
              <p>{m.bio}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="cta-band">
        <h2>Bring the car in.</h2>
        <p>{SHOP.address}</p>
        <div className="hero-actions">
          <a className="btn btn-solid-light" href={`tel:${SHOP.phoneE164}`}>
            Call now
          </a>
          <Link to="/contact" className="btn btn-ghost">
            Book service
          </Link>
        </div>
      </section>
    </>
  )
}
