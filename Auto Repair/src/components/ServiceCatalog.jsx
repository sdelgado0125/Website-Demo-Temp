import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SERVICE_GROUPS, SERVICES, SHOP } from '../content.js'

export default function ServiceCatalog() {
  const [group, setGroup] = useState('All')
  const list = useMemo(
    () => (group === 'All' ? SERVICES : SERVICES.filter((s) => s.group === group)),
    [group],
  )
  const [activeId, setActiveId] = useState(list[0].id)
  const active = list.find((s) => s.id === activeId) ?? list[0]

  function selectGroup(next) {
    setGroup(next)
    const nextList = next === 'All' ? SERVICES : SERVICES.filter((s) => s.group === next)
    setActiveId(nextList[0].id)
  }

  return (
    <section className="catalog">
      <div className="catalog-tabs" role="tablist" aria-label="Service type">
        {SERVICE_GROUPS.map((g) => (
          <button
            key={g}
            type="button"
            role="tab"
            aria-selected={group === g}
            className={group === g ? 'is-active' : ''}
            onClick={() => selectGroup(g)}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="catalog-names">
        {list.map((s) => (
          <button
            key={s.id}
            type="button"
            className={s.id === active.id ? 'is-active' : ''}
            onClick={() => setActiveId(s.id)}
          >
            {s.name}
          </button>
        ))}
      </div>
      <div className="catalog-stage">
        <img src={active.catalogImage || active.image} alt="" />
        <div className="catalog-caption">
          <h2>{active.name}</h2>
          <p>{active.short}</p>
          <p className="catalog-price">{active.price}</p>
          <div className="hero-actions catalog-actions">
            <Link to={`/services#${active.id}`} className="btn btn-ghost-dark">
              Learn more
            </Link>
            <a className="btn btn-ghost-dark" href={`tel:${SHOP.phoneE164}`}>
              Call now
            </a>
            <Link to="/contact" className="btn btn-solid">
              Book service
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
