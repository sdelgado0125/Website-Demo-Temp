import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV, SHOP } from '../content.js'
import { Icon } from '../icons.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true">
            A
          </span>
          <span className="logo-word">{SHOP.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-tools">
          <Link to="/contact" className="header-loc">
            <Icon name="pin" />
            <span>{SHOP.city}</span>
          </Link>
          <a className="header-call" href={`tel:${SHOP.phoneE164}`}>
            Call now
          </a>
          <button
            type="button"
            className={`menu-toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <a className="btn btn-solid" href={`tel:${SHOP.phoneE164}`} onClick={() => setOpen(false)}>
          Call {SHOP.phoneDisplay}
        </a>
      </div>
    </header>
  )
}
