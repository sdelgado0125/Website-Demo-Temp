import { Link } from 'react-router-dom'
import { CtaBand, MoreServices } from '../components/HomeSections.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { SERVICE_BAND, SERVICES } from '../content.js'

export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow={SERVICE_BAND.eyebrow}
        title={SERVICE_BAND.title}
        lead="Pick the surface. We will quote the job, not a package you do not need."
      />
      <section className="service-grid">
        {SERVICES.map((service) => (
          <Link key={service.id} to={`/services/${service.id}`} className="service-tile">
            <img src={service.image} alt="" />
            <div>
              <h2>{service.name}</h2>
              <p>{service.short}</p>
              <span>{service.price}</span>
            </div>
          </Link>
        ))}
      </section>
      <MoreServices />
      <CtaBand />
    </>
  )
}
