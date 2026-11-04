import { Link } from 'react-router-dom'
import { SERVICES, SHOP } from '../content.js'
import Logo from './Logo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <Link to="/" className="footer-logo" aria-label={SHOP.name}>
          <Logo />
        </Link>

        <div>
          <p className="foot-label">Contact</p>
          <p className="foot-quiet">Give us a call</p>
          <a className="foot-phone" href={`tel:${SHOP.mobileE164}`}>
            {SHOP.mobileDisplay}
          </a>
          <a className="foot-phone" href={`tel:${SHOP.officeE164}`}>
            {SHOP.officeDisplay}
          </a>
          <p className="foot-quiet foot-gap">Have a project in mind?</p>
          <a className="foot-mail" href={`mailto:${SHOP.email}`}>
            {SHOP.email}
          </a>
        </div>

        <div>
          <p className="foot-label">Services</p>
          <ul className="foot-links">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} {SHOP.legal}. All rights reserved.
        </p>
        <p>{SHOP.ktsCredit}</p>
      </div>
    </footer>
  )
}
