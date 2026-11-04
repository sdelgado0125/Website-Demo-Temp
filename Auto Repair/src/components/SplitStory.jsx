import { Link } from 'react-router-dom'
import { STORY } from '../content.js'

export default function SplitStory() {
  return (
    <section className="split">
      <div className="split-media" style={{ backgroundImage: `url(${STORY.image})` }}>
        <h2>{STORY.overlay}</h2>
      </div>
      <div className="split-copy">
        <p className="eyebrow">{STORY.eyebrow}</p>
        <h2>{STORY.title}</h2>
        <p>{STORY.body}</p>
        <Link to="/about" className="btn btn-ghost-dark">
          {STORY.cta}
        </Link>
      </div>
    </section>
  )
}
