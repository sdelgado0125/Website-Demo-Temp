import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HERO, SHOP } from '../content.js'
import { Icon } from '../icons.jsx'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % HERO.slides.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  const slide = HERO.slides[index]

  return (
    <section className="hero" aria-label="Featured services">
      {HERO.slides.map((item, i) => (
        <div
          key={item.word}
          className={`hero-bg ${i === index ? 'is-on' : ''}`}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      ))}
      <div className="hero-shade" />

      <div className="hero-copy">
        <h1>
          <span className="hero-title">{HERO.headline}</span>
          <span className="hero-word" key={slide.word}>
            {slide.word}
          </span>
        </h1>
        <p className="hero-tag">{HERO.tagline}</p>
        <div className="hero-actions">
          <Link className="btn-contact" to="/contact">
            {HERO.button} <span aria-hidden="true">›</span>
          </Link>
          <a className="hero-phone" href={`tel:${SHOP.mobileE164}`}>
            <Icon name="phone" />
            <span>
              <small>call us now</small>
              <strong>{SHOP.mobileDisplay}</strong>
            </span>
          </a>
        </div>
      </div>

      <div className="hero-dots">
        {HERO.slides.map((item, i) => (
          <button
            key={item.word}
            type="button"
            className={i === index ? 'is-on' : undefined}
            aria-label={`Show ${item.word}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
