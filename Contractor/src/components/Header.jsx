import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, SERVICES, SHOP } from '../content.js'
import { Icon } from '../icons.jsx'
import Logo from './Logo.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setStuck(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="topbar">
        <a className="phone-block" href={`tel:${SHOP.officeE164}`}>
          <Icon name="phone" />
          <span>
            <small>{SHOP.officeLabel}</small>
            <strong>{SHOP.officeDisplay}</strong>
          </span>
        </a>
        <a className="phone-block" href={`tel:${SHOP.mobileE164}`}>
          <Icon name="phone" />
          <span>
            <small>{SHOP.mobileLabel}</small>
            <strong>{SHOP.mobileDisplay}</strong>
          </span>
        </a>
      </div>

      <header className={`site-header ${stuck ? 'is-stuck' : ''} ${open ? 'is-open' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="logo-link" aria-label={SHOP.name}>
            <Logo />
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            {NAV.map((item) =>
              item.menu === 'services' ? (
                <div className="nav-item" key={item.to}>
                  <NavLink to={item.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    {item.label}
                  </NavLink>
                  <div className="sub">
                    {SERVICES.map((service) => (
                      <Link key={service.id} to={`/services/${service.id}`}>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <button
            type="button"
            className={`menu-toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
          <nav aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
            <div className="mobile-services">
              {SERVICES.map((service) => (
                <Link key={service.id} to={`/services/${service.id}`}>
                  {service.name}
                </Link>
              ))}
            </div>
            <Link to="/contact">Contact</Link>
          </nav>
          <a className="btn-navy" href={`tel:${SHOP.mobileE164}`}>
            Call {SHOP.mobileDisplay}
          </a>
        </div>
      </header>
    </>
  )
}
