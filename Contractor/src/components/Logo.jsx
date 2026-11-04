import { SHOP } from '../content.js'

export default function Logo() {
  const [line1, line2] = SHOP.logoLines

  return (
    <span className="badge">
      <svg viewBox="0 0 160 160" role="img" aria-label={SHOP.name}>
        <circle cx="80" cy="80" r="76" fill="#fff" />
        <circle cx="80" cy="80" r="70" fill="none" stroke="var(--sky)" strokeWidth="8" />
        <circle cx="80" cy="80" r="60" fill="none" stroke="var(--navy)" strokeWidth="2.5" />
        <path d="M46 74 80 48l34 26" fill="none" stroke="var(--navy)" strokeWidth="4" strokeLinejoin="round" />
        <path d="M56 74v26h48V74" fill="var(--navy)" />
        <path d="M74 100V84h12v16" fill="#fff" />
        <path d="M108 52c8 6 12 14 12 22" stroke="var(--sky)" strokeWidth="3" strokeLinecap="round" fill="none" />
        <circle cx="124" cy="48" r="3" fill="var(--accent)" />
        <circle cx="132" cy="58" r="2" fill="var(--sky)" />
        <text x="80" y="118" textAnchor="middle" className="badge-line">
          {line1}
        </text>
        <text x="80" y="132" textAnchor="middle" className="badge-sub">
          {line2}
        </text>
      </svg>
    </span>
  )
}
