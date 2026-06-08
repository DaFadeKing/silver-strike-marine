import { useEffect, useState } from "react"
import { Phone, CalendarCheck } from "lucide-react"
import { business } from "@/data/site"
import { cn } from "@/lib/utils"

/** Fixed bottom action bar on mobile — keeps the phone number one tap away. */
export function MobileCallBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-silver-200 bg-white/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2.5">
        <a
          href={business.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-800 py-3.5 text-sm font-bold text-white"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href="#quote"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-navy-700 py-3.5 text-sm font-bold text-navy-800"
        >
          <CalendarCheck className="h-4 w-4" />
          Free Quote
        </a>
      </div>
    </div>
  )
}
