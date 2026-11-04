export function Icon({ name, className = 'icon' }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': 'true',
  }

  if (name === 'phone') {
    return (
      <svg {...common}>
        <path
          d="M8.2 3.8h2.1l1.2 3-1.5 1.1a12.5 12.5 0 0 0 5.1 5.1l1.1-1.5 3 1.2v2.1c0 .8-.6 1.6-1.4 1.7A15.2 15.2 0 0 1 4.5 5.2c.1-.8.9-1.4 1.7-1.4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (name === 'star') {
    return (
      <svg {...common} viewBox="0 0 20 20">
        <path
          d="m10 2.4 2.1 4.4 4.8.7-3.5 3.4.8 4.8L10 13.4 5.8 15.7l.8-4.8L3.1 7.5l4.8-.7L10 2.4Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (name === 'chevron') {
    return (
      <svg {...common}>
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return null
}

export function Stars({ value = 5 }) {
  return (
    <span className="stars" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" className={i < value ? 'icon star is-on' : 'icon star'} />
      ))}
    </span>
  )
}
