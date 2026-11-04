import { Link, useParams } from 'react-router-dom'
import { CtaBand } from '../components/HomeSections.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { SERVICES } from '../content.js'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = SERVICES.find((item) => item.id === id)

  if (!service) {
    return (
      <header className="page-intro">
        <p className="eyebrow">Services</p>
        <h1>That service is not on this site.</h1>
        <p>
          <Link to="/services">See every service</Link>
        </p>
      </header>
    )
  }

  const others = SERVICES.filter((item) => item.id !== service.id).slice(0, 3)

  return (
    <>
      <PageIntro eyebrow={service.price} title={service.name} lead={service.short} />
      <section className="detail">
        <img src={service.image} alt={service.name} />
        <div>
          <p className="detail-lead">{service.lead}</p>
          <ul>
            {service.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link className="btn-navy" to="/contact">
            Request this estimate
          </Link>
        </div>
      </section>
      <section className="related">
        <h2>Other work we do</h2>
        <div>
          {others.map((item) => (
            <Link key={item.id} to={`/services/${item.id}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
