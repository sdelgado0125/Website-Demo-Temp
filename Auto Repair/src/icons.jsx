export function Icon({ name, className = 'icon' }) {
  const paths = {
    bolt: (
      <path
        d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4.5L15 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    shield: (
      <path
        d="M12 3 5 6v6c0 4.2 2.8 7.4 7 8.7 4.2-1.3 7-4.5 7-8.7V6l-7-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
    gauge: (
      <>
        <path
          d="M5.5 16a7.5 7.5 0 1 1 13 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M12 16 15 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    wrench: (
      <path
        d="M14.5 6.5a3.5 3.5 0 0 0-4.7 4.7L4 16.9 7.1 20l5.7-5.8a3.5 3.5 0 0 0 4.7-4.7L15 7l-2 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    chip: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </>
    ),
    pin: (
      <path
        d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    ),
    phone: (
      <path
        d="M7 3.8h3.2l1.2 3-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2 3 1.2V16c0 1-.8 1.8-1.8 1.8C8.6 17.8 3.2 12.4 3.2 5.6 3.2 4.6 4 3.8 5 3.8H7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
    chevron: (
      <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    ),
    star: (
      <path
        d="M12 3.2 14.4 9l6.2.5-4.7 4 1.5 6.1L12 16.6 6.6 19.6 8.1 13.5 3.4 9.5 9.6 9Z"
        fill="currentColor"
      />
    ),
  }

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name] ?? null}
    </svg>
  )
}

export function Stars({ count = 5 }) {
  return (
    <span className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" className={`icon star ${i < count ? 'is-on' : ''}`} />
      ))}
    </span>
  )
}
