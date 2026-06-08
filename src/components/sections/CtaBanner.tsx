import { Phone, ArrowRight } from "lucide-react"
import { business, stats } from "@/data/site"
import { Reveal } from "@/components/primitives/Reveal"

export function CtaBanner() {
  return (
    <section className="relative bg-white py-10">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-navy-700 bg-navy-deep px-7 py-12 shadow-lift sm:px-12">
            <div className="absolute inset-0 bg-dot-grid opacity-25" />
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-navy-400/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-semibold leading-tight tracking-tightest text-white sm:text-4xl">
                  Ready to make your boat{" "}
                  <span className="text-silver-sheen">look its best?</span>
                </h2>
                <p className="mt-3 text-silver-200/80">
                  Book your detail today and see why owners across{" "}
                  {business.serviceAreaShort} trust Silver Strike.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={business.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-navy-900 shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-silver-50"
                  >
                    <Phone className="h-4 w-4" />
                    Call {business.phoneDisplay}
                  </a>
                  <a
                    href="#quote"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-silver-300/40 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <dl className="grid w-full max-w-sm grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:w-auto">
                {stats.map((s) => (
                  <div key={s.label} className="bg-navy-900/60 px-6 py-5 text-center">
                    <dt className="font-display text-3xl font-semibold text-silver-sheen">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wide text-silver-200/70">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
