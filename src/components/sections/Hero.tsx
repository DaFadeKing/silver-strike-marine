import { Phone, Star, ArrowRight, ShieldCheck, Truck } from "lucide-react"
import { business } from "@/data/site"
import { OceanScene } from "@/components/art/OceanScene"

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-navy-950">
      {/* Backdrop: hand-built marine scene. Swap for a photo by placing an
          <img className="absolute inset-0 h-full w-full object-cover" /> here. */}
      <div className="absolute inset-0 -z-10">
        <OceanScene />
        {/* Depth + legibility overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-900/35 to-navy-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
      </div>

      <div className="container-px relative flex min-h-[100svh] flex-col justify-center pb-20 pt-28">
        <div className="max-w-3xl">
          {/* Rating chip */}
          <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-silver-300/25 bg-white/5 px-4 py-1.5 backdrop-blur">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-silver-200 text-silver-200" />
              ))}
            </span>
            <span className="text-xs font-semibold tracking-wide text-silver-100">
              {business.ratingValue} · {business.reviewCount}+ five-star reviews
            </span>
          </div>

          <h1
            className="animate-fade-up mt-6 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tightest text-white sm:text-6xl lg:text-[4.1rem]"
            style={{ animationDelay: "80ms" }}
          >
            Professional Marine Detailing{" "}
            <span className="text-silver-sheen">That Turns Heads</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-silver-100/85"
            style={{ animationDelay: "160ms" }}
          >
            Restore, protect and maintain your vessel with premium detailing
            designed to keep your boat looking its best year-round — brought
            right to your slip across {business.serviceAreaShort}.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={business.phoneHref}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-base font-bold text-navy-900 shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-silver-50"
            >
              <Phone className="h-5 w-5" />
              Call Now
              <span className="hidden font-extrabold text-navy-700 sm:inline">
                {business.phoneDisplay}
              </span>
            </a>
            <a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-silver-300/40 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition-all duration-300 hover:border-silver-200 hover:bg-white/10"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Phone number — prominent for mobile callers */}
          <a
            href={business.phoneHref}
            className="animate-fade-up mt-6 inline-flex items-baseline gap-2 text-silver-100/80 sm:hidden"
            style={{ animationDelay: "300ms" }}
          >
            <span className="text-sm">Call us directly:</span>
            <span className="text-lg font-extrabold text-white">{business.phoneDisplay}</span>
          </a>

          {/* Trust badges */}
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-silver-100/75"
            style={{ animationDelay: "360ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4 text-silver-300" /> Mobile — we come to you
            </span>
            <span className="hidden h-4 w-px bg-silver-300/25 sm:block" />
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-silver-300" /> Licensed &amp; fully insured
            </span>
            <span className="hidden h-4 w-px bg-silver-300/25 sm:block" />
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 fill-silver-300 text-silver-300" /> Showroom-quality finish
            </span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-silver-200/60 lg:flex">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em]">Scroll</span>
        <span className="h-9 w-5 rounded-full border border-silver-300/40 p-1">
          <span className="block h-2 w-full animate-float rounded-full bg-silver-200/70" />
        </span>
      </div>
    </section>
  )
}
