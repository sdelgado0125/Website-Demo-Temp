import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HERO_SLIDES, SHOP } from '../content.js'
import { Icon } from '../icons.jsx'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = HERO_SLIDES.length
  const slide = HERO_SLIDES[index]

  useEffect(() => {
    if (paused) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, 7000)
    return () => window.clearInterval(id)
  }, [paused, total])

  function go(dir) {
    setIndex((i) => (i + dir + total) % total)
  }

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {HERO_SLIDES.map((item, i) => (
        <div
          key={item.id}
          className={`hero-slide ${i === index ? 'is-active' : ''}`}
          style={{ backgroundImage: `url(${item.image})` }}
          aria-hidden={i !== index}
        />
      ))}
      <div className="hero-shade" />

      <button type="button" className="hero-arrow prev" onClick={() => go(-1)} aria-label="Previous slide">
        <Icon name="chevron" />
      </button>
      <button type="button" className="hero-arrow next" onClick={() => go(1)} aria-label="Next slide">
        <Icon name="chevron" />
      </button>

      <div className="hero-copy">
        <p className="hero-kicker">{slide.kicker}</p>
        <h1>{slide.title}</h1>
      </div>

      <div className="hero-offer">
        <span className="offer-label">{slide.offerLabel}</span>
        <strong>{slide.offerValue}</strong>
        <em>{slide.offerNote}</em>
      </div>

      <aside className="hero-pills">
        {slide.pills.map((pill) => (
          <div key={pill.value} className="spec-pill">
            <Icon name={pill.icon} />
            <div>
              <span>{pill.label}</span>
              <b>{pill.value}</b>
            </div>
          </div>
        ))}
      </aside>

      <div className="hero-actions">
        <Link to="/contact" className="btn btn-ghost">
          Book service
        </Link>
        <a className="btn btn-ghost" href={`tel:${SHOP.phoneE164}`}>
          Call now
        </a>
        <Link to="/services" className="btn btn-solid-light">
          See services
        </Link>
      </div>

      <div className="hero-meter">
        <span className="hero-track">
          <span style={{ width: `${((index + 1) / total) * 100}%` }} />
        </span>
        <span className="hero-count">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
    </section>
  )
}
