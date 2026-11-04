import { Link } from 'react-router-dom'
import { NAV, SERVICES, SHOP } from '../content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">{SHOP.name}</div>
          <p>{SHOP.tagline}</p>
          <p className="footer-address">{SHOP.address}</p>
          <a href={`tel:${SHOP.phoneE164}`}>{SHOP.phoneDisplay}</a>
        </div>
        <div>
          <h2>Services</h2>
          {SERVICES.map((s) => (
            <Link key={s.id} to={`/services#${s.id}`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div>
          <h2>Shop</h2>
          {NAV.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Hours</h2>
          {SHOP.hours.map((h) => (
            <p key={h.day}>
              {h.day}
              <span>{h.time}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="footer-base">
        <span>
          © {new Date().getFullYear()} {SHOP.legal}. Demo template for local shops.
        </span>
        <span>{SHOP.ktsCredit}</span>
      </div>
    </footer>
  )
}
