/**
 * Silver Strike Marine Detailing — site content
 * ------------------------------------------------
 * Everything a non-developer is likely to change lives here:
 * phone number, copy, services, testimonials, FAQs and service areas.
 * Edit the values below and the whole site updates.
 */

export const business = {
  name: "Silver Strike Marine Detailing",
  shortName: "Silver Strike",
  phoneDisplay: "206-550-5739",
  phoneHref: "tel:+12065505739",
  email: "hello@silverstrikemarine.com",
  serviceAreaShort: "Seattle & the Greater Puget Sound",
  serviceAreas: [
    "Seattle",
    "Bellevue",
    "Kirkland",
    "Tacoma",
    "Edmonds",
    "Gig Harbor",
    "Lake Union",
    "Shilshole Bay",
  ],
  hours: "Mon–Sat · 8:00 AM – 6:00 PM",
  ratingValue: "5.0",
  reviewCount: 127,
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Google", href: "#" },
  ],
} as const

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
] as const

/** Icon names map to lucide-react icons in the Services component. */
export const services = [
  {
    id: "full-detail",
    icon: "Sparkles",
    title: "Full Detail Packages",
    description:
      "Exterior wash, decontamination, polishing, waxing and protection — a complete, showroom-quality transformation.",
    featured: true,
  },
  {
    id: "wash-wax",
    icon: "Droplets",
    title: "Wash & Wax",
    description:
      "Routine maintenance and shine enhancement that keeps your gel coat slick, bright and protected between full details.",
  },
  {
    id: "ceramic",
    icon: "ShieldCheck",
    title: "Ceramic Coatings",
    description:
      "Long-lasting, high-gloss protection that repels water, UV and grime for years — not weeks.",
    featured: true,
  },
  {
    id: "oxidation",
    icon: "Sun",
    title: "Oxidation Removal",
    description:
      "Cut through chalky, faded gel coat and paint to restore deep, reflective color and a mirror finish.",
  },
  {
    id: "hull",
    icon: "Waves",
    title: "Hull Cleaning",
    description:
      "Keep your vessel pristine above and below the waterline, removing scum lines, stains and growth.",
  },
  {
    id: "interior",
    icon: "Sofa",
    title: "Interior Detailing",
    description:
      "Deep cleaning and conditioning of cabins, upholstery, vinyl, carpet and every interior surface.",
  },
  {
    id: "metal",
    icon: "Gem",
    title: "Metal Polishing",
    description:
      "Restore stainless steel, aluminum and chrome rails, hardware and fittings to a brilliant shine.",
  },
  {
    id: "maintenance",
    icon: "CalendarCheck",
    title: "Maintenance Programs",
    description:
      "Recurring, scheduled service plans that keep your boat protected and turn-key all season long.",
  },
] as const

export const whyUs = [
  {
    icon: "Truck",
    title: "Mobile Service",
    description: "We come to your slip, marina or dry stack — no haul-out required.",
  },
  {
    icon: "Wrench",
    title: "Professional Equipment",
    description: "Marine-grade tools, polishers and filtered water systems.",
  },
  {
    icon: "FlaskConical",
    title: "Premium Products",
    description: "Pro-tier coatings and compounds built for the marine environment.",
  },
  {
    icon: "CalendarClock",
    title: "Reliable Scheduling",
    description: "On-time arrivals and clear communication, every appointment.",
  },
  {
    icon: "ScanEye",
    title: "Attention To Detail",
    description: "Meticulous, hand-finished work on every inch of your vessel.",
  },
  {
    icon: "BadgeCheck",
    title: "Fully Insured",
    description: "Licensed and insured for complete peace of mind on the water.",
  },
] as const

export const stats = [
  { value: "500+", label: "Vessels Detailed" },
  { value: "5.0★", label: "Average Rating" },
  { value: "12+", label: "Years on the Water" },
  { value: "100%", label: "Satisfaction Promise" },
] as const

export const testimonials = [
  {
    name: "Mark Halvorsen",
    role: "48' Motor Yacht Owner",
    location: "Shilshole Bay Marina",
    rating: 5,
    quote:
      "Silver Strike brought my boat back to life. The oxidation removal alone made it look years newer — the gel coat is glassy again. Worth every dollar.",
  },
  {
    name: "Danielle Cho",
    role: "Wake Boat Owner",
    location: "Lake Union",
    rating: 5,
    quote:
      "The ceramic coating is unreal. Water beads right off and a quick rinse keeps it spotless. Booking was easy and they showed up right on time at my slip.",
  },
  {
    name: "Captain Rey Alonzo",
    role: "Charter Operator",
    location: "Elliott Bay",
    rating: 5,
    quote:
      "I run a charter and presentation is everything. Their maintenance program keeps all three of my vessels looking charter-ready week after week.",
  },
  {
    name: "Tom & Linda Pierce",
    role: "Cabin Cruiser Owners",
    location: "Edmonds Marina",
    rating: 5,
    quote:
      "Professional, insured and genuinely meticulous. The interior detail made our cabin feel brand new. We won't trust our boat to anyone else.",
  },
  {
    name: "Sofia Marchetti",
    role: "Sailboat Owner",
    location: "Lake Washington",
    rating: 5,
    quote:
      "From the first quote to the final walkthrough, the whole experience felt high-end. The metal polishing on my rails and stanchions is mirror-bright.",
  },
] as const

export const faqs = [
  {
    q: "How long does detailing take?",
    a: "It depends on the size and condition of your vessel and the services selected. A wash & wax on a smaller boat may take a few hours, while a full detail with oxidation removal or a ceramic coating on a larger yacht can take one to three days. We'll give you a clear time estimate with your quote.",
  },
  {
    q: "Do you come to my marina?",
    a: "Yes. We're a fully mobile service and bring our own equipment, filtered water and power solutions to your slip, marina or dry-stack facility throughout Seattle and the greater Puget Sound. There's nothing for you to haul or arrange.",
  },
  {
    q: "How often should I detail my boat?",
    a: "For most owners we recommend a wash & wax every 4–8 weeks during boating season, a full detail once or twice a year, and a ceramic coating every few years for long-term protection. Our maintenance programs build the right cadence around how you use your boat.",
  },
  {
    q: "What is a ceramic coating?",
    a: "A ceramic coating is a liquid nano-polymer that chemically bonds to your gel coat or paint, forming a durable, hydrophobic layer. It delivers deep gloss, repels water and contaminants, blocks UV fading and makes routine cleaning dramatically easier — lasting years rather than weeks like traditional wax.",
  },
  {
    q: "Do you service yachts?",
    a: "Absolutely. We detail everything from fishing boats and wake boats to cruisers and luxury yachts. Larger vessels are quoted individually so we can scope the exact level of care your yacht deserves.",
  },
] as const

/** Options for the quote form selects. */
export const boatTypes = [
  "Fishing Boat",
  "Wake / Ski Boat",
  "Cabin Cruiser",
  "Sailboat",
  "Motor Yacht",
  "Pontoon",
  "Other",
] as const

export const serviceOptions = [
  "Full Detail Package",
  "Wash & Wax",
  "Ceramic Coating",
  "Oxidation Removal",
  "Hull Cleaning",
  "Interior Detailing",
  "Metal Polishing",
  "Maintenance Program",
  "Not sure — recommend something",
] as const
