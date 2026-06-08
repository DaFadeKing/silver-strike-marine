import { Award, Sparkles, Truck, ThumbsUp, Phone } from "lucide-react"
import { business, stats } from "@/data/site"
import { Reveal } from "@/components/primitives/Reveal"

const highlights = [
  {
    icon: Award,
    title: "Experienced Service",
    text: "Seasoned marine detailers who treat every vessel like our own.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    text: "Professional-grade coatings, compounds and sealants built for saltwater.",
  },
  {
    icon: Truck,
    title: "Mobile Convenience",
    text: "We arrive fully equipped at your marina — you never lift a finger.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    text: "We aren't finished until your boat looks flawless. Period.",
  },
]

export function About() {
  return (
    <section id="about" className="relative bg-silver-50 py-24 sm:py-28">
      <div className="container-px grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-navy-400/50" />
              About Silver Strike
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tightest text-navy-800 sm:text-4xl lg:text-[2.85rem]">
              Your Boat Deserves Professional Care
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-700/75">
              Silver Strike Marine Detailing provides professional detailing for
              fishing boats, wake boats, cruisers and luxury yachts. We combine
              premium products, proven techniques and meticulous attention to
              detail to deliver results that genuinely turn heads on the water.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-700/75">
              From a quick wash &amp; wax to a multi-year ceramic coating, every
              service is performed with the same standard: showroom-quality,
              every time.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-silver-100 shadow-card">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-800">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal-700/70">
                      {h.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <a
              href={business.phoneHref}
              className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-navy-800 px-6 py-3.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-lift"
            >
              <Phone className="h-4 w-4" />
              Talk to a Detailer · {business.phoneDisplay}
            </a>
          </Reveal>
        </div>

        {/* Visual panel */}
        <Reveal delay={120} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Polished-hull panel */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-silver-200 bg-navy-deep shadow-lift">
              <div className="absolute inset-0 bg-dot-grid opacity-50" />
              {/* Specular gloss sweep */}
              <div className="absolute -inset-x-10 top-0 h-2/3 rotate-[-12deg] bg-gradient-to-b from-white/25 via-white/5 to-transparent blur-md" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                <span className="text-silver-sheen font-display text-6xl font-semibold sm:text-7xl">
                  12+
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-silver-200/80">
                  Years Perfecting Boats
                </span>
                <span className="mt-2 h-px w-16 bg-silver-300/40" />
                <p className="max-w-xs text-sm leading-relaxed text-silver-100/70">
                  Trusted by yacht owners, charter captains and weekend cruisers
                  across the Puget Sound.
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-silver-200 bg-white p-5 shadow-lift sm:block">
              <div className="flex items-center gap-4">
                {stats.slice(0, 2).map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-2xl font-semibold text-navy-800">
                      {s.value}
                    </div>
                    <div className="text-[0.7rem] font-medium uppercase tracking-wide text-charcoal-700/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Insured badge */}
            <div className="absolute -right-3 -top-3 rotate-3 rounded-full border border-silver-200 bg-white px-4 py-2 text-xs font-bold text-navy-800 shadow-lift">
              ✓ Licensed &amp; Insured
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
