import ContactPanel from '../components/ContactPanel.jsx'
import { SHOP } from '../content.js'

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SHOP.address)}&z=14&output=embed`

  return (
    <>
      <ContactPanel heading="Contact us" />
      <section className="contact-details">
        <div>
          <h2>Shop</h2>
          <p>{SHOP.address}</p>
          <p>
            <a href={`tel:${SHOP.phoneE164}`}>{SHOP.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a>
          </p>
          <p className="emergency">{SHOP.emergencyNote}</p>
        </div>
        <div>
          <h2>Hours</h2>
          {SHOP.hours.map((h) => (
            <p key={h.day} className="hours-line">
              <span>{h.day}</span>
              <b>{h.time}</b>
            </p>
          ))}
        </div>
      </section>
      <div className="map-wrap">
        <iframe title={`Map to ${SHOP.name}`} src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </>
  )
}
