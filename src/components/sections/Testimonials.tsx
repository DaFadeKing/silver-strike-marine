import { Star, Quote } from "lucide-react"
import { business, testimonials } from "@/data/site"
import { SectionHeading } from "@/components/primitives/SectionHeading"
import { Reveal } from "@/components/primitives/Reveal"
import { cn } from "@/lib/utils"

function Stars({ count }: { count: number }) {
  return (
    <span className="flex" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < count ? "fill-amber-400 text-amber-400" : "fill-silver-200 text-silver-200"
          )}
        />
      ))}
    </span>
  )
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
}

export function Testimonials() {
  return (
    <section id="reviews" className="relative bg-white py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Owner Reviews"
          title={
            <>
              Trusted On The Water,{" "}
              <span className="text-navy-500">Slip After Slip</span>
            </>
          }
          description={
            <span className="inline-flex flex-wrap items-center justify-center gap-2">
              <Stars count={5} />
              <span className="font-semibold text-navy-800">
                {business.ratingValue} average
              </span>
              <span className="text-charcoal-700/60">
                from {business.reviewCount}+ verified customers
              </span>
            </span>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 80}
              className={cn(i === 0 && "lg:row-span-2")}
            >
              <figure
                className={cn(
                  "flex h-full flex-col rounded-2xl border border-silver-200 bg-silver-50/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-400/30 hover:bg-white hover:shadow-card",
                  i === 0 && "bg-navy-deep text-white lg:p-9"
                )}
              >
                <Quote
                  className={cn(
                    "h-8 w-8",
                    i === 0 ? "text-silver-300/60" : "text-navy-400/40"
                  )}
                />
                <blockquote
                  className={cn(
                    "mt-4 flex-1 text-pretty leading-relaxed",
                    i === 0
                      ? "font-display text-xl text-silver-100/90 lg:text-2xl"
                      : "text-charcoal-700/80"
                  )}
                >
                  “{t.quote}”
                </blockquote>
                <div className="mt-6">
                  <Stars count={t.rating} />
                  <figcaption className="mt-3 flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-semibold",
                        i === 0
                          ? "bg-white/10 text-silver-100"
                          : "bg-navy-800 text-silver-100"
                      )}
                    >
                      {initials(t.name)}
                    </span>
                    <span>
                      <span
                        className={cn(
                          "block text-sm font-bold",
                          i === 0 ? "text-white" : "text-navy-800"
                        )}
                      >
                        {t.name}
                      </span>
                      <span
                        className={cn(
                          "block text-xs",
                          i === 0 ? "text-silver-200/70" : "text-charcoal-700/55"
                        )}
                      >
                        {t.role} · {t.location}
                      </span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
