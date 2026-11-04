/**
 * Contractor template — everything a new client changes lives in this file.
 *
 * Rebrand checklist
 * 1. SHOP        name, logo lines, phones, email, address, hours
 * 2. THEME       navy, accent (the rotating word), sky (the blue bands)
 * 3. HERO        big trade word + the rotating service words and photos
 * 4. SERVICES    names, photos, and copy — this also fills the menu and footer
 * 5. PROJECTS, GALLERY, COMPARISONS, REVIEWS
 *
 * One layout sells to roofers, painters, remodelers, flooring, landscapers,
 * and pressure-washing crews. Swap the words, the colors, and the photos.
 */

const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80`

export const THEME = {
  navy: '#283b91',
  navyDeep: '#002c5f',
  accent: '#ff7a1a',
  sky: '#26ace2',
  ink: '#1c2b3a',
  muted: '#5d6b7a',
  footer: '#070707',
}

export function applyTheme() {
  const root = document.documentElement
  const map = {
    '--navy': THEME.navy,
    '--navy-deep': THEME.navyDeep,
    '--accent': THEME.accent,
    '--sky': THEME.sky,
    '--ink': THEME.ink,
    '--muted': THEME.muted,
    '--footer': THEME.footer,
  }
  Object.entries(map).forEach(([key, value]) => root.style.setProperty(key, value))
}

export const SHOP = {
  name: 'Ridgeway Exteriors',
  legal: 'Ridgeway Exteriors LLC',
  logoLines: ['Ridgeway', 'EXTERIORS'],
  tagline: 'Let us handle the hard work.',
  description:
    'Ridgeway Exteriors is a pressure-washing and exterior cleaning crew in Marietta, GA. Houses, gutters, fences, decks, driveways, and pavers. Free estimates.',
  city: 'Marietta, GA',
  address: '920 Cobb Parkway, Marietta, GA 30060',
  email: 'hello@ridgewayexteriors.demo',
  officeLabel: 'Office',
  officeDisplay: '(770) 555-0194',
  officeE164: '+17705550194',
  mobileLabel: 'Mobile',
  mobileDisplay: '(770) 555-0168',
  mobileE164: '+17705550168',
  hours: [
    { day: 'Mon – Fri', time: '7:30 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  areas: ['Marietta', 'Kennesaw', 'Smyrna', 'Roswell', 'Vinings', 'Acworth', 'Woodstock', 'Atlanta'],
  reviewLabel: 'Excellent',
  reviewScore: '5.0',
  reviewCount: '48',
  ctaTitle: 'Let us handle the hard work!',
  ctaButton: 'Get in Touch',
  ctaImage: img('photo-1600585154340-be6161a56a0c'),
  watermark: 'Services',
  ktsCredit: 'Website template by KTS General Solution LLC',
}

export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services', menu: 'services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/before-after', label: 'Before & After' },
  { to: '/reviews', label: 'Reviews' },
]

export const HERO = {
  headline: 'Power Washing',
  tagline: 'Let us handle the hard work.',
  button: 'Contact Us',
  slides: [
    { word: 'Houses', image: img('photo-1564013799919-ab600027ffc6') },
    { word: 'Gutters', image: img('photo-1568605114967-8130f3a36994') },
    { word: 'Fences', image: img('photo-1570129477492-45c003edd2be') },
    { word: 'Decks', image: img('photo-1600047509807-ba8f99d2cdbc') },
    { word: 'Patios', image: img('photo-1600596542815-ffad4c1539a9') },
    { word: 'Driveways', image: img('photo-1572120360610-d971b9d7767c') },
    { word: 'Pavers', image: img('photo-1449844908441-8829872d2607') },
  ],
}

export const MARQUEE =
  'Have a project in mind? Call us now — insured crews, a written price, and a finish you can see from the street.'

export const ABOUT = {
  eyebrow: 'About',
  title: 'Exterior cleaning that protects the property.',
  intro:
    'A clean house is not only a curb-appeal job. Siding, brick, gutters, and wood collect algae, grit, and mildew that stain surfaces and hold moisture against the material. We wash at the right pressure for the surface, so the property looks sharp and stays intact.',
  image: img('photo-1605276374104-dee2a0ed3cd6'),
  benefitsTitle: 'What a professional wash actually does',
  benefitsLead:
    'Curb appeal is the part everyone notices. The reasons owners book us again are quieter than that.',
  benefits: [
    {
      title: 'Holds the value you already paid for',
      body: 'Mildew and oxidation make a sound house look neglected. A careful wash brings the color back without grinding the finish off siding, brick, or wood.',
    },
    {
      title: 'Catches damage while it is still small',
      body: 'Dirt hides cracked mortar, soft deck boards, and gutters that have pulled away. Once the surface is clean, you can see what actually needs a repair.',
    },
    {
      title: 'Gets the surface ready for the next job',
      body: 'Paint, stain, and sealer fail on a dirty surface. We wash first so the coating bonds, instead of peeling off next season.',
    },
  ],
  close:
    'Ridgeway Exteriors works on homes and small commercial buildings around Marietta. We show up when we say we will, protect the plants, and leave the place cleaner than we found it — including the walkways we used to get there.',
}

export const MORE = {
  title: 'More Services:',
  items: [
    'Soft washing for roofs and delicate siding',
    'Debris haul-away',
    'Deck and wood fence staining',
    'Paint prep',
    'Concrete sealing',
  ],
}

export const SERVICE_BAND = {
  eyebrow: 'Our services',
  title: 'Power Washing Services',
}

export const PROJECT_BAND = {
  eyebrow: 'Our projects',
  title: 'Recent Works',
}

export const SERVICES = [
  {
    id: 'houses',
    name: 'House Washing',
    short: 'Siding, brick, and trim, washed at a pressure the surface can take.',
    price: 'Free estimate',
    image: img('photo-1564013799919-ab600027ffc6'),
    lead: 'House washing is not “turn the wand up until the stain disappears.” Vinyl, fiber cement, brick, and painted wood each need a different mix of pressure, detergent, and rinse. We match the method to the material.',
    points: [
      'Soft wash for painted and vinyl siding',
      'Brick, stone, and foundation cleanup',
      'Windows and trim rinsed, not blasted',
      'Plants wet down and covered before we start',
    ],
  },
  {
    id: 'gutters',
    name: 'Gutter Cleaning',
    short: 'Cleared by hand, then flushed so the water actually leaves the roof.',
    price: 'From $149',
    image: img('photo-1568605114967-8130f3a36994'),
    lead: 'A gutter full of leaves dumps water behind the fascia and into the basement. We pull the debris, bag it, and run water through every downspout so you know the line is open.',
    points: [
      'Hand-cleaned, not just blown around the yard',
      'Downspouts flushed to the outlet',
      'Notes if a hanger, seam, or pitch is failing',
      'Haul-away included on standard residential jobs',
    ],
  },
  {
    id: 'fences',
    name: 'Fence Cleaning',
    short: 'Wood, vinyl, and metal fences brought back without stripping the grain.',
    price: 'Free estimate',
    image: img('photo-1570129477492-45c003edd2be'),
    lead: 'Green film on a fence is usually algae, not “just shade.” We lift it off wood without furring the grain, and we brighten vinyl without the chalky look a hard wash leaves behind.',
    points: [
      'Wood, vinyl, aluminum, and composite',
      'Optional brightener for grayed cedar and pine',
      'Both sides when the neighbor agrees',
      'Ready for stain if you want that scheduled next',
    ],
  },
  {
    id: 'decks',
    name: 'Deck Cleaning',
    short: 'Boards, rails, and the stairs people actually walk.',
    price: 'Free estimate',
    image: img('photo-1600047509807-ba8f99d2cdbc'),
    lead: 'A deck wash should leave the grain standing, not fuzzy. We clean the walking surface, the rails, and the skirt, then tell you honestly whether it needs stain or can wait a season.',
    points: [
      'Soft wash and brightener for wood and composite',
      'Rails, stairs, and under-deck cleanup',
      'Staining available once the boards dry',
      'Furniture moved and put back',
    ],
  },
  {
    id: 'driveways',
    name: 'Driveway Cleaning',
    short: 'Oil, rust, and tire shadow lifted off concrete and asphalt.',
    price: 'From $199',
    image: img('photo-1572120360610-d971b9d7767c'),
    lead: 'The black lanes down a driveway are rubber and mildew, not a stain you have to live with. We surface-clean concrete in even passes so you do not get zebra stripes, and we treat oil before we rinse.',
    points: [
      'Concrete, aggregate, and asphalt-safe methods',
      'Oil and rust pretreatment',
      'Even, striped-free finish',
      'Walkways and the apron included when you ask',
    ],
  },
  {
    id: 'pavers',
    name: 'Paver Cleaning & Sealing',
    short: 'Sand, weeds, and a sealer that keeps the joint where it belongs.',
    price: 'Quoted on site',
    image: img('photo-1600596542815-ffad4c1539a9'),
    lead: 'Pavers fail at the joints. We clean the surface, re-sand, and seal so water and weeds stop winning. You pick a natural look or a color boost — we will show you both before anything goes down.',
    points: [
      'Polymeric sand where the joints need it',
      'Sealer in natural or color-enhancing finish',
      'Pool decks, patios, and walkways',
      'Weeds and moss removed, not painted over',
    ],
  },
]

export const PROJECTS = [
  { image: img('photo-1583608205776-bfd35f0d9f83'), alt: 'Front porch and siding after a house wash', tall: false },
  { image: img('photo-1600585154340-be6161a56a0c'), alt: 'Clean modern exterior', tall: true },
  { image: img('photo-1512917774080-9991f1c4c750'), alt: 'Washed home with a clear driveway', tall: false },
  { image: img('photo-1613490493576-7fde63acd811'), alt: 'Exterior walls and glass after cleaning', tall: false },
  { image: img('photo-1560184897-ae75f418493e'), alt: 'Residential exterior ready for the season', tall: false },
]

export const GALLERY = [
  { image: img('photo-1564013799919-ab600027ffc6'), alt: 'Two-story home after a soft wash', category: 'Houses' },
  { image: img('photo-1568605114967-8130f3a36994'), alt: 'Roof edge and siding', category: 'Houses' },
  { image: img('photo-1570129477492-45c003edd2be'), alt: 'Front yard and fence line', category: 'Fences' },
  { image: img('photo-1583608205776-bfd35f0d9f83'), alt: 'Porch columns and walkway', category: 'Houses' },
  { image: img('photo-1600047509807-ba8f99d2cdbc'), alt: 'Back of a home opening to the yard', category: 'Decks' },
  { image: img('photo-1600596542815-ffad4c1539a9'), alt: 'Evening view of a cleaned exterior', category: 'Driveways' },
  { image: img('photo-1572120360610-d971b9d7767c'), alt: 'Suburban front elevation', category: 'Driveways' },
  { image: img('photo-1449844908441-8829872d2607'), alt: 'Cottage exterior and garden edge', category: 'Fences' },
  { image: img('photo-1416331108676-a22ccb276e35'), alt: 'Bright siding and trimmed landscaping', category: 'Pavers' },
]

export const COMPARISONS = [
  {
    title: 'Front elevation',
    caption: 'Siding, trim, and the walk up to the porch.',
    before: img('photo-1570129477492-45c003edd2be'),
    after: img('photo-1564013799919-ab600027ffc6'),
  },
  {
    title: 'Drive approach',
    caption: 'Concrete lanes and the plant beds along the apron.',
    before: img('photo-1449844908441-8829872d2607'),
    after: img('photo-1600585154340-be6161a56a0c'),
  },
  {
    title: 'Side yard and trim',
    caption: 'The elevation guests never see, until it is clean.',
    before: img('photo-1568605114967-8130f3a36994'),
    after: img('photo-1583608205776-bfd35f0d9f83'),
  },
]

export const REVIEWS = [
  {
    name: 'Danielle P.',
    loc: 'Marietta',
    date: 'Oct 2026',
    rating: 5,
    body: 'They washed the back of the house I had given up on. The mildew under the deck is gone and they texted me when they were ten minutes out. That is the whole review.',
  },
  {
    name: 'Andre H.',
    loc: 'Kennesaw',
    date: 'Sep 2026',
    rating: 5,
    body: 'Driveway had two black tire lanes and an oil spot from the mower. It looks like the concrete did the week we poured it. Price matched the quote.',
  },
  {
    name: 'Priya S.',
    loc: 'Smyrna',
    date: 'Aug 2026',
    rating: 5,
    body: 'Asked them to do the fence before we stained. They told us to wait a dry day, came back, and the stain actually soaked in. Previous painter had skipped the wash.',
  },
  {
    name: 'Chris L.',
    loc: 'Roswell',
    date: 'Jul 2026',
    rating: 5,
    body: 'Gutters on a two-story with pines overhead. They bagged everything, showed me a downspout that was crushed, and did not try to sell me a new gutter system.',
  },
  {
    name: 'Elena V.',
    loc: 'Vinings',
    date: 'Jun 2026',
    rating: 5,
    body: 'Paver patio by the pool was slick and green. They re-sanded the joints and sealed it. Kids can walk it barefoot again. Crew was careful around the water line.',
  },
  {
    name: 'Marcus W.',
    loc: 'Acworth',
    date: 'May 2026',
    rating: 4,
    body: 'Had to reschedule once for rain. They moved us to the front of the next dry morning and the deck looks new. I will book the stain with them in the fall.',
  },
]

export const CONTACT_TOPICS = [
  'House washing',
  'Gutter cleaning',
  'Fence cleaning',
  'Deck cleaning',
  'Driveway cleaning',
  'Paver cleaning and sealing',
  'Not sure yet',
]
