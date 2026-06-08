import { useEffect, useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { business, nav } from "@/data/site"
import { Wordmark } from "@/components/art/Logo"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "glass border-b border-silver-200/70 shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="container-px flex h-[68px] items-center justify-between gap-4">
        <a href="#home" aria-label="Silver Strike Marine Detailing — home" className="shrink-0">
          <Wordmark tone={solid ? "light" : "dark"} />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "group relative text-sm font-semibold transition-colors",
                  solid ? "text-charcoal-700 hover:text-navy-700" : "text-silver-100 hover:text-white"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-bold transition-colors",
              solid ? "text-navy-800 hover:text-navy-600" : "text-white hover:text-silver-200"
            )}
          >
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-full bg-navy-800 px-5 py-2.5 text-sm font-bold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-lift"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden",
            solid
              ? "border-silver-200 text-navy-800"
              : "border-white/25 text-white"
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-silver-200/70 bg-white transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container-px flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-silver-100 py-3 text-base font-semibold text-charcoal-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-px flex flex-col gap-3 pb-5">
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-silver-300 py-3 text-sm font-bold text-navy-800"
          >
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-navy-800 py-3 text-sm font-bold text-white"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  )
}
