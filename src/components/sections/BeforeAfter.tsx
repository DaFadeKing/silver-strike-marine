import { useId, useState } from "react"
import { MoveHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/components/primitives/SectionHeading"
import { Reveal } from "@/components/primitives/Reveal"

type Tone = "navy" | "white" | "teal"

/**
 * CSS-rendered hull surface. `variant="before"` looks chalky / oxidized,
 * `variant="after"` looks glossy and restored. Replace the inner markup with an
 * <img> to use real photography (keep the same wrapper sizing).
 */
function HullSurface({
  variant,
  tone,
  label,
}: {
  variant: "before" | "after"
  tone: Tone
  label: string
}) {
  const palettes: Record<Tone, { before: string; after: string }> = {
    navy: {
      before: "linear-gradient(135deg,#5b6b7d 0%,#7d8a98 45%,#69788a 100%)",
      after:
        "linear-gradient(135deg,#0A2342 0%,#16406F 40%,#1E5288 60%,#0A2342 100%)",
    },
    white: {
      before: "linear-gradient(135deg,#b9bcc0 0%,#d6d8da 50%,#c4c7ca 100%)",
      after:
        "linear-gradient(135deg,#e9edf2 0%,#ffffff 45%,#cfd6de 70%,#eef2f6 100%)",
    },
    teal: {
      before: "linear-gradient(135deg,#5e7378 0%,#7f9499 50%,#6c8186 100%)",
      after:
        "linear-gradient(135deg,#0c3b41 0%,#13616b 45%,#1d8a96 60%,#0c3b41 100%)",
    },
  }
  const isAfter = variant === "after"
  return (
    <div
      className="absolute inset-0"
      style={{ background: palettes[tone][variant] }}
      aria-hidden="true"
    >
      {/* Oxidation haze for "before" */}
      {!isAfter && (
        <div
          className="absolute inset-0 opacity-60 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1.4px)",
            backgroundSize: "5px 5px",
          }}
        />
      )}
      {/* Glossy specular sweep for "after" */}
      {isAfter && (
        <>
          <div className="absolute -inset-y-8 left-[12%] w-1/3 rotate-[18deg] bg-gradient-to-r from-transparent via-white/45 to-transparent blur-md" />
          <div className="absolute -inset-y-8 left-[58%] w-[14%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
        </>
      )}
      {/* Waterline */}
      <div className="absolute inset-x-0 bottom-[18%] h-px bg-white/15" />
      <span
        className={cn(
          "absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest backdrop-blur",
          isAfter ? "bg-navy-900/70 text-silver-100" : "bg-black/30 text-white/90"
        )}
      >
        {label}
      </span>
    </div>
  )
}

function CompareSlider({ tone }: { tone: Tone }) {
  const [pos, setPos] = useState(50)
  const id = useId()
  return (
    <div className="group relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-silver-200 shadow-card">
      {/* Base = AFTER */}
      <HullSurface variant="after" tone={tone} label="After" />
      {/* Overlay = BEFORE, clipped to the left */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <HullSurface variant="before" tone={tone} label="Before" />
      </div>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-silver-200 bg-white text-navy-800 shadow-lift">
          <MoveHorizontal className="h-5 w-5" />
        </span>
      </div>

      {/* Accessible range control spanning the image */}
      <label htmlFor={id} className="sr-only">
        Reveal before and after — drag to compare
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="ba-range absolute inset-0 z-30 h-full w-full opacity-0"
        aria-label="Before and after comparison slider"
      />
    </div>
  )
}

const showcases: { tone: Tone; title: string; text: string }[] = [
  {
    tone: "navy",
    title: "Oxidation Removal",
    text: "Chalky, sun-faded gel coat cut back to deep, reflective color.",
  },
  {
    tone: "white",
    title: "Ceramic Coating",
    text: "A flat, dull finish transformed into a slick, mirror-bright shell.",
  },
  {
    tone: "teal",
    title: "Full Restoration",
    text: "Years of wear and waterline staining brought back to showroom shine.",
  },
]

export function BeforeAfter() {
  return (
    <section id="results" className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-28">
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      <div className="container-px relative">
        <SectionHeading
          tone="dark"
          eyebrow="Real Results"
          title={
            <>
              See The <span className="text-silver-sheen">Difference</span>
            </>
          }
          description="Drag the slider on each panel to reveal the transformation. This is the kind of finish we deliver, vessel after vessel."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {showcases.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="flex h-full flex-col">
                <CompareSlider tone={s.tone} />
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-silver-200/70">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-silver-200/60">
            <MoveHorizontal className="mr-1.5 inline h-4 w-4 align-text-bottom" />
            Tip: grab a handle and drag to compare before &amp; after.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
