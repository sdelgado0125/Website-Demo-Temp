import { useState } from 'react'
import { CONTACT_TOPICS, SHOP } from '../content.js'

const EMPTY = { name: '', phone: '', email: '', topic: CONTACT_TOPICS[0], city: '', message: '' }

export default function EstimateForm() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submit(event) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <h2>Request received.</h2>
        <p>
          Thanks, {form.name.split(' ')[0] || 'there'}. This demo keeps the request on the page only. On a live site it
          goes straight to {SHOP.email}.
        </p>
        <button type="button" className="btn-navy" onClick={() => { setSent(false); setForm(EMPTY) }}>
          Send another
        </button>
      </div>
    )
  }

  return (
    <form className="estimate" onSubmit={submit}>
      <label>
        Name
        <input name="name" value={form.name} onChange={update} required autoComplete="name" />
      </label>
      <label>
        Phone
        <input name="phone" value={form.phone} onChange={update} required autoComplete="tel" />
      </label>
      <label>
        Email
        <input name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
      </label>
      <label>
        Service
        <select name="topic" value={form.topic} onChange={update}>
          {CONTACT_TOPICS.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </label>
      <label>
        City
        <input name="city" value={form.city} onChange={update} autoComplete="address-level2" />
      </label>
      <label className="span-2">
        What needs doing
        <textarea name="message" rows="5" value={form.message} onChange={update} required />
      </label>
      <button className="btn-navy span-2" type="submit">
        Request a free estimate
      </button>
    </form>
  )
}
