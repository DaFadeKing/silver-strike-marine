import { Phone, MessageCircleQuestion } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { business, faqs } from "@/data/site"
import { Reveal } from "@/components/primitives/Reveal"

export function Faq() {
  return (
    <section id="faq" className="relative bg-silver-50 py-24 sm:py-28">
      <div className="container-px grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Intro / aside */}
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-navy-400/50" />
            Good To Know
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tightest text-navy-800 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal-700/75">
            Everything you need to know before booking. Still have a question
            about your specific boat? We're happy to talk it through.
          </p>

          <div className="mt-8 rounded-2xl border border-silver-200 bg-white p-6 shadow-card">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-silver-100">
              <MessageCircleQuestion className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-navy-800">
              Prefer to just ask?
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700/70">
              Call and we'll give you straight answers and a fast, free estimate.
            </p>
            <a
              href={business.phoneHref}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-800 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-700"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
          </div>
        </Reveal>

        {/* Accordion */}
        <Reveal delay={100}>
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`item-${i}`}
                className="mb-3 overflow-hidden rounded-2xl border border-silver-200 bg-white px-5 shadow-sm transition-colors data-[state=open]:border-navy-400/40"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-navy-800 hover:no-underline sm:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-charcoal-700/75 sm:text-[0.95rem]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
