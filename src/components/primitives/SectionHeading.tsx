import { cn } from "@/lib/utils"
import { Reveal } from "./Reveal"

type SectionHeadingProps = {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark"
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow",
            align === "center" && "justify-center",
            dark && "text-silver-300"
          )}
        >
          <span className={cn("h-px w-6", dark ? "bg-silver-400/60" : "bg-navy-400/50")} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tightest sm:text-4xl lg:text-[2.85rem]",
          dark ? "text-white" : "text-navy-800"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-silver-200/80" : "text-charcoal-700/70"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
