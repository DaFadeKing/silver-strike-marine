import { cn } from "@/lib/utils"

/**
 * Hand-built luxury marine scene used as the hero backdrop.
 * Pure SVG + CSS so it always renders, loads instantly and stays on-brand.
 *
 * To use a real photo instead, drop an <img> with object-cover behind the
 * overlay in Hero.tsx and keep this as a graceful fallback.
 */
export function OceanScene({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050F1F" />
          <stop offset="45%" stopColor="#0A2342" />
          <stop offset="100%" stopColor="#103156" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="78%" r="48%">
          <stop offset="0%" stopColor="#DCE3EC" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#9FB4CC" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0A2342" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0C2A4D" />
          <stop offset="100%" stopColor="#06182E" />
        </linearGradient>
        <linearGradient id="silverline" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0" />
          <stop offset="50%" stopColor="#EAECEE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A3A5F" />
          <stop offset="100%" stopColor="#0A2342" />
        </linearGradient>
      </defs>

      {/* Sky + horizon glow */}
      <rect width="1440" height="900" fill="url(#sky)" />
      <rect width="1440" height="640" fill="url(#glow)" />

      {/* Stars */}
      <g fill="#E8E8EA">
        <circle cx="180" cy="90" r="1.2" opacity="0.7" />
        <circle cx="320" cy="150" r="1" opacity="0.5" />
        <circle cx="520" cy="70" r="1.4" opacity="0.8" />
        <circle cx="900" cy="120" r="1" opacity="0.5" />
        <circle cx="1120" cy="80" r="1.3" opacity="0.7" />
        <circle cx="1290" cy="160" r="1" opacity="0.5" />
        <circle cx="1010" cy="200" r="0.9" opacity="0.4" />
        <circle cx="660" cy="180" r="0.9" opacity="0.4" />
      </g>

      {/* Distant yacht silhouette on the horizon */}
      <g className="animate-float" style={{ transformOrigin: "center", animationDuration: "9s" }}>
        <g transform="translate(792 396)" fill="url(#hull)" stroke="#16406F" strokeWidth="1">
          <path d="M-86 26 L86 26 L66 50 L-66 50 Z" />
          <path d="M-58 26 L-50 4 L58 4 L66 26 Z" fill="#14365f" />
          <rect x="-30" y="-14" width="62" height="20" rx="3" fill="#1E5288" />
          <path d="M-2 -52 L-2 -14 L26 -14 Z" fill="#C0C0C0" opacity="0.85" />
          <path d="M-6 -50 L-6 -14 L-30 -14 Z" fill="#9FB4CC" opacity="0.7" />
          <rect x="-2" y="-54" width="2" height="42" fill="#DCE3EC" />
        </g>
        {/* reflection */}
        <g transform="translate(792 452) scale(1 -0.5)" opacity="0.18" fill="#C0C0C0">
          <path d="M-86 26 L86 26 L66 50 L-66 50 Z" />
        </g>
      </g>

      {/* Sea */}
      <rect y="446" width="1440" height="454" fill="url(#sea)" />

      {/* Silver glint line on the water */}
      <rect x="360" y="448" width="720" height="3" fill="url(#silverline)" />

      {/* Layered waves */}
      <g className="animate-float" style={{ animationDuration: "7s" }}>
        <path
          d="M0 520 C 240 488, 480 552, 720 520 S 1200 488, 1440 520 L1440 900 L0 900 Z"
          fill="#0B2647"
          opacity="0.9"
        />
      </g>
      <g className="animate-float" style={{ animationDuration: "8.5s", animationDelay: "-2s" }}>
        <path
          d="M0 600 C 260 568, 520 632, 760 600 S 1220 568, 1440 604 L1440 900 L0 900 Z"
          fill="#091F3A"
        />
      </g>
      <g className="animate-float" style={{ animationDuration: "10s", animationDelay: "-1s" }}>
        <path
          d="M0 700 C 300 672, 560 728, 820 700 S 1240 676, 1440 706 L1440 900 L0 900 Z"
          fill="#06182E"
        />
      </g>

      {/* Foreground silver foam highlights */}
      <g stroke="#C0C0C0" strokeWidth="1.5" fill="none" opacity="0.25">
        <path d="M120 560 C 200 548, 280 572, 360 560" />
        <path d="M980 648 C 1060 636, 1140 660, 1220 648" />
      </g>
    </svg>
  )
}
