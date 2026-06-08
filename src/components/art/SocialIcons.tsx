/**
 * Inline brand-mark SVGs. lucide-react dropped its brand icons, so we ship our
 * own here. Each accepts a className and inherits `currentColor`.
 */
type IconProps = { className?: string }

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 9h2.5l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.3C16.7.2 15.8 0 14.7 0 12.1 0 10.4 1.6 10.4 4.4V6H8v3h2.4v9H14V9z" />
    </svg>
  )
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.6 15.5v-7l6.3 3.5-6.3 3.5z" />
    </svg>
  )
}

export function GoogleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 11v2.8h4a3.9 3.9 0 0 1-1.7 2.5l2.7 2.1A6.9 6.9 0 0 0 19 12c0-.5 0-1-.1-1.4H12z" opacity="0.9" />
      <path d="M12 19a7 7 0 0 0 4.9-1.8l-2.7-2.1a4.3 4.3 0 0 1-6.4-2.2l-2.8 2.2A7 7 0 0 0 12 19z" opacity="0.7" />
      <path d="M7.8 12.9a4.2 4.2 0 0 1 0-2.7L5 8A7 7 0 0 0 5 16l2.8-2.2z" opacity="0.5" />
      <path d="M12 7.6a3.8 3.8 0 0 1 2.7 1L17 6.3A6.7 6.7 0 0 0 12 5a7 7 0 0 0-7 3l2.8 2.2A4.2 4.2 0 0 1 12 7.6z" opacity="0.9" />
    </svg>
  )
}
