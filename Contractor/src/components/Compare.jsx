import { useState } from 'react'

export default function Compare({ item }) {
  const [pos, setPos] = useState(54)

  return (
    <figure className="compare">
      <div className="compare-frame">
        <img src={item.after} alt={`${item.title}, after`} />
        <div className="compare-before" style={{ width: `${pos}%` }}>
          <img src={item.before} alt={`${item.title}, before`} />
        </div>
        <span className="compare-tag is-before">Before</span>
        <span className="compare-tag is-after">After</span>
        <span className="compare-handle" style={{ left: `${pos}%` }} aria-hidden="true" />
        <input
          type="range"
          min="8"
          max="92"
          value={pos}
          aria-label={`Drag to compare before and after for ${item.title}`}
          onChange={(event) => setPos(Number(event.target.value))}
        />
      </div>
      <figcaption>
        <strong>{item.title}</strong>
        <span>{item.caption}</span>
      </figcaption>
    </figure>
  )
}
