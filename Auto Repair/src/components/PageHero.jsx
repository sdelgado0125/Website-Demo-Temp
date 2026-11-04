export default function PageHero({ image, kicker, title, lede }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-hero-shade" />
      <div className="page-hero-copy">
        {kicker ? <p className="hero-kicker">{kicker}</p> : null}
        <h1>{title}</h1>
        {lede ? <p className="page-hero-lede">{lede}</p> : null}
      </div>
    </section>
  )
}
