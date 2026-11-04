import { useState } from 'react'
import { CONTACT_IMAGE, CONTACT_TOPICS, SHOP } from '../content.js'

export default function ContactPanel({ heading = 'Contact us' }) {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact-panel" id="book">
      <div className="contact-photo" style={{ backgroundImage: `url(${CONTACT_IMAGE})` }} />
      <div className="contact-form-wrap">
        <h2>{heading}</h2>
        {sent ? (
          <p className="form-thanks">
            Request received. This demo does not send email yet — in a live shop site, this goes to the service desk.
            Call {SHOP.phoneDisplay} if you need a bay today.
          </p>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <label>
                First name *
                <input name="first" required autoComplete="given-name" />
              </label>
              <label>
                Last name
                <input name="last" autoComplete="family-name" />
              </label>
            </div>
            <label>
              Email *
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label>
              Phone *
              <input type="tel" name="phone" required autoComplete="tel" placeholder={SHOP.phoneDisplay} />
            </label>
            <label>
              Vehicle
              <input name="vehicle" placeholder="Year, make, model" />
            </label>
            <label>
              Service needed *
              <select name="topic" required defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {CONTACT_TOPICS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label>
              What is going on?
              <textarea name="message" rows={4} placeholder="Noise, light on the dash, smell, when it started…" />
            </label>
            <button type="submit" className="btn btn-solid-light">
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
