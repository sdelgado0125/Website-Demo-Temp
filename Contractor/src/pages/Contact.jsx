import EstimateForm from '../components/EstimateForm.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { SHOP } from '../content.js'

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SHOP.address)}&z=14&output=embed`

  return (
    <>
      <PageIntro eyebrow="Contact" title="Have a project in mind?" lead="Tell us the surface and the city. We will call with a time, not a script." />
      <section className="contact-grid">
        <EstimateForm />
        <aside className="contact-card">
          <p className="foot-label">Call</p>
          <a href={`tel:${SHOP.mobileE164}`}>{SHOP.mobileDisplay}</a>
          <a href={`tel:${SHOP.officeE164}`}>{SHOP.officeDisplay}</a>
          <p className="foot-label">Email</p>
          <a href={`mailto:${SHOP.email}`}>{SHOP.email}</a>
          <p className="foot-label">Shop</p>
          <p>{SHOP.address}</p>
          <p className="foot-label">Hours</p>
          <ul>
            {SHOP.hours.map((row) => (
              <li key={row.day}>
                <span>{row.day}</span>
                <strong>{row.time}</strong>
              </li>
            ))}
          </ul>
        </aside>
      </section>
      <div className="map-wrap">
        <iframe title={`Map to ${SHOP.name}`} src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </>
  )
}
