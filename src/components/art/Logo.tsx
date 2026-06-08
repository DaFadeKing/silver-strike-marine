import { cn } from "@/lib/utils"

/** Silver Strike monogram — a marlin "strike" arc over a silver glint. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="Silver Strike Marine Detailing logo"
    >
      <defs>
        <linearGradient id="logo-silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8A8D91" />
          <stop offset="45%" stopColor="#EEF0F2" />
          <stop offset="100%" stopColor="#9197A0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="#0A2342" />
      <rect x="1" y="1" width="62" height="62" rx="14" fill="none" stroke="#C0C0C0" strokeOpacity="0.35" />
      <path
        d="M16 46c10 0 9-26 16-26s6 26 16 26"
        fill="none"
        stroke="url(#logo-silver)"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path d="M32 12l3.4 7.6L32 25l-3.4-5.4z" fill="#E8E8EA" />
    </svg>
  )
}

export function Wordmark({
  className,
  tone = "light",
}: {
  className?: string
  tone?: "light" | "dark"
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-semibold tracking-tight",
            tone === "light" ? "text-navy-800" : "text-white"
          )}
        >
          Silver Strike
        </span>
        <span
          className={cn(
            "text-[0.62rem] font-semibold uppercase tracking-[0.28em]",
            tone === "light" ? "text-navy-500/80" : "text-silver-300/80"
          )}
        >
          Marine Detailing
        </span>
      </span>
    </span>
  )
}
