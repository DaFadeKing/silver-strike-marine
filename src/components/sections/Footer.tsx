import { Phone, Mail, MapPin, Star, ArrowUp } from "lucide-react"
import { business, nav, services } from "@/data/site"
import { LogoMark } from "@/components/art/Logo"
import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  GoogleIcon,
} from "@/components/art/SocialIcons"

const socialIcon: Record<string, (p: { className?: string }) => JSX.Element> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  YouTube: YoutubeIcon,
  Google: GoogleIcon,
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-silver-100">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div className="hairline opacity-20" />

      <div className="container-px relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-10 w-10" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold text-white">
                Silver Strike
              </span>
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-silver-300/80">
                Marine Detailing
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver-200/65">
            Premium mobile detailing for boats and yachts across{" "}
            {business.serviceAreaShort}. Showroom-quality results, brought right
            to your slip.
          </p>
          <div className="mt-6 flex gap-2.5">
            {business.social.map((s) => {
              const Icon = socialIcon[s.label] ?? GoogleIcon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-silver-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-silver-300/40 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-silver-300/70">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-silver-200/75 transition-colors hover:text-white"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#quote" className="font-semibold text-white hover:text-silver-200">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-silver-300/70">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <a
                  href="#services"
                  className="text-silver-200/75 transition-colors hover:text-white"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-silver-300/70">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={business.phoneHref}
                className="flex items-start gap-3 text-silver-200/80 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-silver-300" />
                <span className="font-semibold">{business.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-start gap-3 text-silver-200/80 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-silver-300" />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-silver-200/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-silver-300" />
              <span>
                Serving {business.serviceAreas.slice(0, 4).join(", ")} &amp; more
                across the Puget Sound.
              </span>
            </li>
            <li className="flex items-center gap-2 pt-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-silver-200/80">
                {business.ratingValue} · {business.reviewCount}+ reviews
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline opacity-15" />
      <div className="container-px relative flex flex-col items-center justify-between gap-4 py-6 text-xs text-silver-200/55 sm:flex-row">
        <p>
          © {year} {business.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-silver-100">
            Privacy
          </a>
          <a href="#" className="hover:text-silver-100">
            Terms
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 hover:text-silver-100"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
