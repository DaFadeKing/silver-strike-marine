import { useState, type FormEvent } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  ShieldCheck,
} from "lucide-react"
import { business, boatTypes, serviceOptions } from "@/data/site"
import { Reveal } from "@/components/primitives/Reveal"
import { cn } from "@/lib/utils"

type Fields = {
  name: string
  phone: string
  email: string
  boatType: string
  boatLength: string
  service: string
  message: string
}

const empty: Fields = {
  name: "",
  phone: "",
  email: "",
  boatType: "",
  boatLength: "",
  service: "",
  message: "",
}

const labelCls = "block text-sm font-semibold text-navy-800"
const baseField =
  "mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal-800 shadow-sm outline-none transition-colors placeholder:text-charcoal-700/40 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15"

export function QuoteForm() {
  const [values, setValues] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(v: Fields) {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (!v.name.trim()) next.name = "Please enter your name."
    const digits = v.phone.replace(/\D/g, "")
    if (!v.phone.trim()) next.phone = "Please enter a phone number."
    else if (digits.length < 10) next.phone = "Enter a valid phone number."
    if (!v.email.trim()) next.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      next.email = "Enter a valid email address."
    if (!v.boatType) next.boatType = "Select a boat type."
    if (!v.service) next.service = "Select a service."
    return next
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length > 0) {
      // focus first invalid field
      const first = Object.keys(next)[0]
      document.getElementById(`field-${first}`)?.focus()
      return
    }
    // No backend in this static build — wire this up to your email service.
    // Easiest option: create a Formspree form and POST `values` to it, e.g.
    //   await fetch("https://formspree.io/f/your-id", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json", Accept: "application/json" },
    //     body: JSON.stringify(values),
    //   })
    setSubmitted(true)
  }

  const contactItems = [
    { icon: Phone, label: "Call or text", value: business.phoneDisplay, href: business.phoneHref },
    { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
    { icon: MapPin, label: "Service area", value: business.serviceAreaShort },
    { icon: Clock, label: "Hours", value: business.hours },
  ]

  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28"
    >
      <div className="absolute inset-0 bg-dot-grid opacity-25" />
      <div
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-navy-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-px relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: pitch + contact details */}
        <Reveal>
          <span className="eyebrow text-silver-300">
            <span className="h-px w-6 bg-silver-400/60" />
            Free Estimate
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tightest text-white sm:text-4xl lg:text-[2.85rem]">
            Request Your Free Quote
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-silver-200/80">
            Tell us about your vessel and we'll get back to you with a tailored
            estimate — usually the same day. Prefer to talk? Call us anytime.
          </p>

          <a
            href={business.phoneHref}
            className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-silver-300/25 bg-white/5 px-5 py-4 backdrop-blur transition-colors hover:bg-white/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-navy-900">
              <Phone className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-widest text-silver-200/70">
                Call now
              </span>
              <span className="font-display text-2xl font-semibold text-white">
                {business.phoneDisplay}
              </span>
            </span>
          </a>

          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {contactItems.map((c) => (
              <div key={c.label} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/8 text-silver-200">
                  <c.icon className="h-4 w-4" />
                </span>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-silver-200/60">
                    {c.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-white">
                    {c.href ? (
                      <a href={c.href} className="hover:text-silver-200">
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-silver-200/60">
            <ShieldCheck className="h-4 w-4 text-silver-300" />
            Licensed &amp; fully insured · No obligation
          </p>
        </Reveal>

        {/* Right: the form */}
        <Reveal delay={100}>
          <div className="rounded-3xl border border-silver-200 bg-white p-6 text-charcoal-800 shadow-lift sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-9 w-9" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-navy-800">
                  Request received — thank you!
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-charcoal-700/70">
                  Thanks, {values.name.split(" ")[0] || "there"}. We'll review
                  your request and reach out shortly with your free quote. Need
                  us sooner? Call {business.phoneDisplay}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setValues(empty)
                    setSubmitted(false)
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-silver-300 px-5 py-2.5 text-sm font-bold text-navy-800 transition-colors hover:bg-silver-50"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="field-name" className={labelCls}>
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="field-name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    className={cn(baseField, errors.name ? "border-destructive" : "border-silver-300")}
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="field-phone" className={labelCls}>
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="field-phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(206) 555-0188"
                    aria-invalid={!!errors.phone}
                    className={cn(baseField, errors.phone ? "border-destructive" : "border-silver-300")}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="field-email" className={labelCls}>
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="field-email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@email.com"
                    aria-invalid={!!errors.email}
                    className={cn(baseField, errors.email ? "border-destructive" : "border-silver-300")}
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="field-boatType" className={labelCls}>
                    Boat Type <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="field-boatType"
                    value={values.boatType}
                    onChange={(e) => update("boatType", e.target.value)}
                    aria-invalid={!!errors.boatType}
                    className={cn(
                      baseField,
                      "appearance-none bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10",
                      errors.boatType ? "border-destructive" : "border-silver-300",
                      !values.boatType && "text-charcoal-700/40"
                    )}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A2342' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="" disabled>
                      Select boat type
                    </option>
                    {boatTypes.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.boatType && (
                    <p className="mt-1 text-xs text-destructive">{errors.boatType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="field-boatLength" className={labelCls}>
                    Boat Length
                  </label>
                  <input
                    id="field-boatLength"
                    type="text"
                    value={values.boatLength}
                    onChange={(e) => update("boatLength", e.target.value)}
                    placeholder="e.g. 32 ft"
                    className={cn(baseField, "border-silver-300")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="field-service" className={labelCls}>
                    Requested Service <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="field-service"
                    value={values.service}
                    onChange={(e) => update("service", e.target.value)}
                    aria-invalid={!!errors.service}
                    className={cn(
                      baseField,
                      "appearance-none bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10",
                      errors.service ? "border-destructive" : "border-silver-300",
                      !values.service && "text-charcoal-700/40"
                    )}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230A2342' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-destructive">{errors.service}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="field-message" className={labelCls}>
                    Message
                  </label>
                  <textarea
                    id="field-message"
                    rows={4}
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your boat, its condition, and where it's moored…"
                    className={cn(baseField, "resize-none border-silver-300")}
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-navy-800 px-7 py-4 text-base font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-lift"
                  >
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    Request Free Quote
                  </button>
                  <p className="mt-3 text-center text-xs text-charcoal-700/55">
                    Or call us directly at{" "}
                    <a href={business.phoneHref} className="font-bold text-navy-700">
                      {business.phoneDisplay}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
