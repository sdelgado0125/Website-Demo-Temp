const img = (id, extra = '') =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=80${extra}`

export const SHOP = {
  name: 'Apex Auto',
  legal: 'Apex Auto Care',
  tagline: 'Honest repair. Same-day service.',
  city: 'Marietta, GA',
  address: '1840 Industrial Blvd, Marietta, GA 30060',
  phoneDisplay: '(770) 555-0142',
  phoneE164: '+17705550142',
  email: 'service@apexauto.demo',
  hours: [
    { day: 'Mon – Fri', time: '7:30 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 2:00 PM' },
    { day: 'Sunday', time: 'Emergency line only' },
  ],
  emergencyNote: '24/7 emergency dispatch for breakdowns, no-starts, and unsafe-to-drive vehicles.',
  ktsCredit: 'Website template by KTS General Solution LLC',
}

export const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const HERO_SLIDES = [
  {
    id: 'emergency',
    image: img('photo-1486006920555-c77dcf18193c'),
    kicker: 'When it will not start',
    title: 'Get back on the road',
    offerLabel: 'Emergency',
    offerValue: 'Same-day bays',
    offerNote: 'Call now — we hold two bays for breakdowns',
    pills: [
      { icon: 'bolt', label: 'Dispatch', value: '24/7 emergency' },
      { icon: 'clock', label: 'Most jobs', value: 'Same-day turnaround' },
      { icon: 'shield', label: 'Warranty', value: '12-month / 12k miles' },
    ],
  },
  {
    id: 'brakes',
    image: img('photo-1487754180451-c456f719a1fc'),
    kicker: 'Stop with confidence',
    title: 'Brakes you can trust',
    offerLabel: 'Inspection',
    offerValue: 'Free brake check',
    offerNote: 'Pads, rotors, and fluid — no upsell theater',
    pills: [
      { icon: 'gauge', label: 'Stopping', value: 'Measured, not guessed' },
      { icon: 'wrench', label: 'Parts', value: 'OEM-grade or better' },
      { icon: 'clock', label: 'In and out', value: 'Often 90 minutes' },
    ],
  },
  {
    id: 'diagnostics',
    image: img('photo-1492144534655-ae79c964c9d7'),
    kicker: 'Check engine light',
    title: 'We find it. We fix it.',
    offerLabel: 'Scan',
    offerValue: '$89 diagnostic',
    offerNote: 'Applied to the repair if you stay with us',
    pills: [
      { icon: 'chip', label: 'Scan tools', value: 'Factory-level software' },
      { icon: 'shield', label: 'No mystery', value: 'Plain-English report' },
      { icon: 'clock', label: 'Wait time', value: 'Usually under 1 hour' },
    ],
  },
]

export const SERVICES = [
  {
    id: 'emergency',
    name: 'Emergency Repairs',
    short: 'Breakdowns, no-starts, overheating, and unsafe-to-drive cars.',
    group: 'Emergency',
    price: 'Call for dispatch',
    image: img('photo-1449965408869-eaa3f722e40d'),
    catalogImage: img('photo-1486006920555-c77dcf18193c'),
    lead: 'If the car is stuck, smoking, or not safe to drive, skip the waitlist. We keep emergency bays open every weekday.',
    points: [
      'No-start, stalling, and overheating',
      'Flatbed drop-off welcome',
      'After-hours phone triage',
      'Loaner / rideshare help when we can',
    ],
  },
  {
    id: 'brakes',
    name: 'Brake Service',
    short: 'Pads, rotors, fluid, and the pedal feel you actually trust.',
    group: 'Repair',
    price: 'From $189',
    image: img('photo-1487754180451-c456f719a1fc'),
    catalogImage: img('photo-1599256621730-535171e28e50'),
    lead: 'A soft pedal or a squeal is not a suggestion. We measure thickness, machine or replace rotors, and bleed the system so the car stops the way it should.',
    points: [
      'Front and rear pad / rotor service',
      'Brake fluid flush',
      'ABS and sensor diagnosis',
      'Free follow-up inspection at 1,000 miles',
    ],
  },
  {
    id: 'diagnostics',
    name: 'Diagnostics',
    short: 'Factory-level scan tools. A written report you can understand.',
    group: 'Repair',
    price: 'From $89',
    image: img('photo-1530046339160-ce3e530c7d2f'),
    catalogImage: img('photo-1530046339160-ce3e530c7d2f'),
    lead: 'A code is a clue, not a diagnosis. We test the circuit, the sensor, and the mechanical side before we quote a part.',
    points: [
      'Check-engine, ABS, SRS, and drivability',
      'Battery / charging / no-start testing',
      'Written findings before any repair',
      'Scan fee waived if we do the work',
    ],
  },
  {
    id: 'oil',
    name: 'Oil Changes',
    short: 'The right oil, the right filter, and a real inspection — not a lube-rack rush.',
    group: 'Maintenance',
    price: 'From $49.95',
    image: img('photo-1486262715619-67b85e0b08d3'),
    catalogImage: img('photo-1486262715619-67b85e0b08d3'),
    lead: 'Full synthetic or conventional, per the manufacturer. We reset the monitor, check fluids, and look at brakes and belts while it is in the air.',
    points: [
      'Conventional, blend, and full synthetic',
      'Filter matched to the vehicle',
      'Multi-point inspection included',
      'Reminders when it is actually due',
    ],
  },
  {
    id: 'engine',
    name: 'Engine Repair',
    short: 'From misfires and leaks to timing jobs — quoted before we tear in.',
    group: 'Repair',
    price: 'Quoted after diagnosis',
    image: img('photo-1619642751034-765dfdf7c58e'),
    catalogImage: img('photo-1486262715619-67b85e0b08d3'),
    lead: 'Engine work is where shops lose trust. We photograph the job, explain the why, and will not start until you approve the number.',
    points: [
      'Misfires, oil leaks, overheating',
      'Timing belts / chains',
      'Head gaskets and water pumps',
      'Used and OEM-grade options when it makes sense',
    ],
  },
]

export const SERVICE_GROUPS = ['All', 'Emergency', 'Repair', 'Maintenance']

export const STORY = {
  eyebrow: 'Why Apex',
  title: 'A shop that talks like a neighbor — and works like a dealer.',
  body: 'Most people do not want a lecture on torque specs. They want the car back today, a price that matches the work, and a tech who will say when something can wait. That is the standard here.',
  image: img('photo-1625047509248-ec889cbff17f'),
  overlay: 'BUILT FOR COMMUTERS',
  cta: 'Meet the shop',
}

export const STATS = [
  { value: '15+', label: 'Years in Marietta' },
  { value: '4.9', label: 'Average review' },
  { value: 'ASE', label: 'Certified technicians' },
  { value: '12 mo', label: 'Parts & labor warranty' },
]

export const REVIEWS = [
  {
    name: 'Marisol R.',
    loc: 'Smyrna',
    rating: 5,
    date: 'Oct 2026',
    title: 'They told me what I did not need',
    body: 'Check engine light on a 2016 Camry. Another shop wanted a $1,400 coil pack job. Apex found a $42 sensor and had me out in an hour. I will not go anywhere else.',
  },
  {
    name: 'James T.',
    loc: 'Marietta',
    rating: 5,
    date: 'Sep 2026',
    title: 'Broke down on I-75',
    body: 'Overheated on the way to work. Called the emergency line, they walked me through it, and had a bay waiting. Radiator the same afternoon. Straight with the price.',
  },
  {
    name: 'Priya K.',
    loc: 'Kennesaw',
    rating: 5,
    date: 'Aug 2026',
    title: 'Brakes without the scare tactics',
    body: 'No “you cannot leave the lot” speech. They showed me the pads, quoted fronts only, and I was back before lunch. Pedal feels new.',
  },
  {
    name: 'Chris D.',
    loc: 'Vinings',
    rating: 5,
    date: 'Jul 2026',
    title: 'Oil change that is actually an inspection',
    body: 'They caught a leaking axle boot during a synthetic change. Fixed it the next morning. That kind of shop is rare now.',
  },
  {
    name: 'Elena M.',
    loc: 'Roswell',
    rating: 5,
    date: 'Jun 2026',
    title: 'Engine light, no runaround',
    body: 'Brought in my Honda with a misfire. They scoped it, showed me the video, and replaced one coil. No package deal. Just the part that failed.',
  },
  {
    name: 'Marcus W.',
    loc: 'Austell',
    rating: 4,
    date: 'May 2026',
    title: 'Waited a day for a part. Worth it.',
    body: 'Needed a specific OEM water pump. They would not install the cheap one. Car was ready the next afternoon and it has been perfect in the heat.',
  },
]

export const TEAM = [
  {
    name: 'Daniel Reyes',
    role: 'Owner / Master Tech',
    bio: 'ASE Master. Twenty years in European and domestic drivability.',
  },
  {
    name: 'Alicia Nguyen',
    role: 'Service advisor',
    bio: 'The person who translates the repair into English and a number you can plan around.',
  },
  {
    name: 'Omar Bennett',
    role: 'Diagnostic specialist',
    bio: 'Factory scan tools, wiring diagrams, and a stubborn streak with intermittent faults.',
  },
]

export const ABOUT = {
  heroImage: img('photo-1503376780353-7e6692767b70'),
  kicker: 'The shop',
  title: 'No mystery invoices.',
  lead: 'Apex Auto started as a two-bay shop off Industrial Boulevard. We still answer the phone like that — because the people who trust us with a daily driver should never feel like a ticket number.',
  story: [
    'We work on commuter cars, family SUVs, and the pickup that has to start at 5 a.m. If we cannot do it right, we will say so and point you to someone who can.',
    'Every job gets a written estimate, photos when it helps, and a warranty in plain language: 12 months or 12,000 miles on parts and labor we install.',
  ],
}

export const CONTACT_TOPICS = [
  'Emergency repair',
  'Brake service',
  'Diagnostics / check engine',
  'Oil change',
  'Engine repair',
  'General question',
]

export const CONTACT_IMAGE = img('photo-1486006920555-c77dcf18193c')
