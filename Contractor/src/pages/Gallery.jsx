import { useMemo, useState } from 'react'
import PageIntro from '../components/PageIntro.jsx'
import { GALLERY, SHOP } from '../content.js'

export default function Gallery() {
  const categories = useMemo(() => ['All', ...new Set(GALLERY.map((item) => item.category))], [])
  const [active, setActive] = useState('All')
  const photos = active === 'All' ? GALLERY : GALLERY.filter((item) => item.category === active)

  return (
    <>
      <PageIntro eyebrow={SHOP.name} title="Photo Gallery" lead={SHOP.tagline} />
      <div className="filters">
        {categories.map((category) => (
          <button key={category} type="button" className={category === active ? 'is-on' : undefined} onClick={() => setActive(category)}>
            {category}
          </button>
        ))}
      </div>
      <section className="gallery-grid">
        {photos.map((photo) => (
          <figure key={photo.alt}>
            <img src={photo.image} alt={photo.alt} />
            <figcaption>{photo.category}</figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}
