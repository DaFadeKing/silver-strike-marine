/**
 * Injects LocalBusiness JSON-LD structured data into <head> at runtime.
 * Kept out of index.html so the bundler doesn't need a JSON-LD transformer.
 * For the production site you can also paste this object into a static
 * <script type="application/ld+json"> tag in index.html.
 */
export function injectLocalBusinessSchema() {
  if (typeof document === "undefined") return
  if (document.getElementById("ld-localbusiness")) return

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://silverstrikemarine.com/#business",
    name: "Silver Strike Marine Detailing",
    image: "https://silverstrikemarine.com/og-image.jpg",
    description:
      "Premium mobile marine detailing for boats and yachts — ceramic coatings, oxidation removal, wash & wax, hull cleaning, interior detailing and metal polishing.",
    telephone: "+1-206-550-5739",
    url: "https://silverstrikemarine.com/",
    priceRange: "$$$",
    areaServed: ["Seattle, WA", "Bellevue, WA", "Tacoma, WA", "Puget Sound"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
    },
    makesOffer: [
      "Full Detail Packages",
      "Wash & Wax",
      "Ceramic Coatings",
      "Oxidation Removal",
      "Hull Cleaning",
      "Interior Detailing",
      "Metal Polishing",
      "Maintenance Programs",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  }

  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.id = "ld-localbusiness"
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}
