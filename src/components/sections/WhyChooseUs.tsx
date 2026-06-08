import {
  Truck,
  Wrench,
  FlaskConical,
  CalendarClock,
  ScanEye,
  BadgeCheck,
  Check,
  type LucideIcon,
} from "lucide-react"
import { whyUs } from "@/data/site"
import { SectionHeading } from "@/components/primitives/SectionHeading"
import { Reveal } from "@/components/primitives/Reveal"

const iconMap: Record<string, LucideIcon> = {
  Truck,
  Wrench,
  FlaskConical,
  CalendarClock,
  ScanEye,
  BadgeCheck,
}

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-silver-50 py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Silver Strike"
          title={
            <>
              The Standard Your Boat <span className="text-navy-500">Deserves</span>
            </>
          }
          description="We pair craftsmanship with reliability — the details that separate a true marine detailing service from a quick wash."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-silver-200 bg-silver-200 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Check
            return (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <div className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-navy-deep">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-silver-100 transition-colors duration-300 group-hover:bg-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-silver-100 text-navy-700 transition-colors duration-300 group-hover:bg-white/10 group-hover:text-silver-100">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy-800 transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-700/70 transition-colors duration-300 group-hover:text-silver-100/75">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
