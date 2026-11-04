import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ABOUT, MORE, PROJECT_BAND, PROJECTS, SERVICE_BAND, SERVICES, SHOP } from '../content.js'

export function AboutBlock() {
  return (
    <section className="about">
      <p className="eyebrow">{ABOUT.eyebrow}</p>
      <h2>{ABOUT.title}</h2>
      <p className="about-intro">{ABOUT.intro}</p>

      <div className="benefits">
        <img src={ABOUT.image} alt="Crew finishing an exterior wash" />
        <div>
          <h3>{ABOUT.benefitsTitle}</h3>
          <p className="benefits-lead">{ABOUT.benefitsLead}</p>
          {ABOUT.benefits.map((item) => (
            <div key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="about-close">{ABOUT.close}</p>
      <p className="areas">
        Serving {SHOP.areas.slice(0, -1).join(', ')}, and {SHOP.areas.at(-1)}.
      </p>
    </section>
  )
}

export function MoreServices() {
  return (
    <section className="more">
      <h2>{MORE.title}</h2>
      <ul>
        {MORE.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export function ServiceBand() {
  const scroller = useRef(null)

  function move(direction) {
    const node = scroller.current
    if (!node) return
    node.scrollBy({ left: direction * 360, behavior: 'smooth' })
  }

  return (
    <section className="service-band">
      <div className="sky-head">
        <p className="pill">{SERVICE_BAND.eyebrow}</p>
        <h2>{SERVICE_BAND.title}</h2>
      </div>
      <div className="service-stage">
        <p className="watermark" aria-hidden="true">
          {SHOP.watermark}
        </p>
        <button type="button" className="arrow-btn stage-arrow" aria-label="Previous services" onClick={() => move(-1)}>
          ‹
        </button>
        <div className="service-scroller" ref={scroller}>
          {SERVICES.map((service) => (
            <Link className="service-card" key={service.id} to={`/services/${service.id}`}>
              <img src={service.image} alt="" />
              <h3>{service.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectBand() {
  return (
    <section className="project-band">
      <div className="project-head">
        <p className="pill">{PROJECT_BAND.eyebrow}</p>
        <h2>{PROJECT_BAND.title}</h2>
      </div>
      <div className="mosaic">
        {PROJECTS.map((project, index) => (
          <img key={project.alt} src={project.image} alt={project.alt} className={`m${index + 1}`} />
        ))}
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="cta-band" style={{ backgroundImage: `url(${SHOP.ctaImage})` }}>
      <div>
        <h2>{SHOP.ctaTitle}</h2>
        <Link className="btn-contact" to="/contact">
          {SHOP.ctaButton} <span aria-hidden="true">›</span>
        </Link>
      </div>
    </section>
  )
}
