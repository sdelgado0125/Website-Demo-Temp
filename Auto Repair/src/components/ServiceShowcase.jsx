import { Link } from 'react-router-dom'
import { SHOP } from '../content.js'

export default function ServiceShowcase({ service }) {
  return (
    <section className="showcase" style={{ backgroundImage: `url(${service.image})` }}>
      <div className="showcase-shade" />
      <div className="showcase-copy">
        <p className="eyebrow">{service.group}</p>
        <h2>{service.name}</h2>
        <p>{service.lead}</p>
      </div>
      <div className="showcase-actions">
        <Link to={`/services#${service.id}`} className="btn btn-ghost">
          Learn more
        </Link>
        <a className="btn btn-ghost" href={`tel:${SHOP.phoneE164}`}>
          Call now
        </a>
        <Link to="/contact" className="btn btn-solid-light">
          Book this service
        </Link>
      </div>
    </section>
  )
}
