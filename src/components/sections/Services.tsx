import {
  Sparkles,
  Droplets,
  ShieldCheck,
  Sun,
  Waves,
  Sofa,
  Gem,
  CalendarCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"
import { services } from "@/data/site"
import { SectionHeading } from "@/components/primitives/SectionHeading"
import { Reveal } from "@/components/primitives/Reveal"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Droplets,
  ShieldCheck,
  Sun,
  Waves,
  Sofa,
  Gem,
  CalendarCheck,
}

export function Services() {
  return (
    <section id="services" className="relative bg-white py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Detailing Services, <span className="text-navy-500">Done Right</span>
            </>
          }
          description="From routine maintenance to multi-year ceramic protection, every service is tailored to your vessel and finished to a showroom standard."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles
            const featured = "featured" in service && service.featured
            return (
              <Reveal key={service.id} delay={(i % 4) * 70}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5",
                    featured
                      ? "border-navy-700 bg-navy-deep text-white shadow-lift"
                      : "border-silver-200 bg-silver-50/60 hover:border-navy-400/40 hover:bg-white hover:shadow-card"
                  )}
                >
                  {featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-white/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-silver-200">
                      Popular
                    </span>
                  )}
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105",
                      featured
                        ? "bg-white/10 text-silver-100"
                        : "bg-navy-800 text-silver-100 shadow-card"
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3
                    className={cn(
                      "mt-5 font-display text-xl font-semibold",
                      featured ? "text-white" : "text-navy-800"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 flex-1 text-sm leading-relaxed",
                      featured ? "text-silver-100/75" : "text-charcoal-700/70"
                    )}
                  >
                    {service.description}
                  </p>
                  <a
                    href="#quote"
                    className={cn(
                      "mt-5 inline-flex items-center gap-1.5 text-sm font-bold transition-colors",
                      featured
                        ? "text-silver-100 hover:text-white"
                        : "text-navy-700 hover:text-navy-500"
                    )}
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
