# Silver Strike Marine Detailing — Website

A premium, mobile-first marketing site for **Silver Strike Marine Detailing** —
boat & yacht detailing, ceramic coatings, oxidation removal and more.

Built with **React + TypeScript + Vite + Tailwind CSS** and bundled into a single,
self-contained `bundle.html` you can open anywhere — no server or build step
required to view it.

- 📞 Phone: **206-550-5739**
- 🎨 Brand colors: Deep Navy `#0A2342` · Metallic Silver `#C0C0C0` · White `#FFFFFF` · Charcoal `#2D2D2D`
- 🔤 Type: **Fraunces** (display serif) + **Manrope** (sans)

---

## Quick start

### Just want to see it?
Open **`bundle.html`** in any browser. That's the whole site in one file.
(An internet connection is used only to load Google Fonts.)

### Develop / edit locally
```bash
# 1. Install dependencies (uses pnpm; install with: npm i -g pnpm)
pnpm install

# 2. Start the dev server with hot reload
pnpm dev          # → http://localhost:5173
```

### Rebuild the single-file artifact after edits
```bash
bash build-bundle.sh
```
This runs a production Parcel build and inlines the CSS + JS into a fresh
`bundle.html`. (See **Build notes** below for why a small custom script is used.)

---

## What's on the page

| Section | Component | Notes |
|---|---|---|
| Sticky nav | `Navbar.tsx` | Transparent over hero → frosted glass on scroll; mobile menu |
| Hero | `Hero.tsx` | Headline, phone CTA, dual CTAs, hand-built SVG ocean scene |
| About | `About.tsx` | Story + 4 highlights + floating stat card |
| Services | `Services.tsx` | 8 service cards with icons + "Learn More" |
| Before / After | `BeforeAfter.tsx` | 3 interactive drag-to-compare sliders |
| Why Choose Us | `WhyChooseUs.tsx` | 6 feature boxes |
| CTA banner | `CtaBanner.tsx` | Stats + call-to-action strip |
| Testimonials | `Testimonials.tsx` | 5 reviews with star ratings |
| FAQ | `Faq.tsx` | Accordion, 5 questions |
| Quote form | `QuoteForm.tsx` | Validated form + contact details |
| Footer | `Footer.tsx` | Branding, links, services, contact, socials |
| Mobile call bar | `MobileCallBar.tsx` | Sticky bottom Call / Quote bar on phones |

---

## ✏️ Editing content (no React knowledge needed)

**Almost everything you'll want to change lives in one file:**

### [`src/data/site.ts`](src/data/site.ts)
- **Phone, email, hours, service areas** → `business`
- **Services** (titles + descriptions) → `services`
- **"Why choose us" boxes** → `whyUs`
- **Stats** → `stats`
- **Testimonials** → `testimonials`
- **FAQ questions/answers** → `faqs`
- **Form dropdown options** → `boatTypes`, `serviceOptions`

Change the text, save, and the whole site updates. After editing, run
`bash build-bundle.sh` to refresh `bundle.html`.

### SEO / metadata
- Title, description, Open Graph & Twitter tags → [`index.html`](index.html) `<head>`
- Local Business structured data (JSON-LD) → [`src/lib/seo.ts`](src/lib/seo.ts)

---

## 🖼️ Swapping in real photos

The site ships with hand-built CSS/SVG visuals so it looks polished out of the box
with **zero image dependencies** (nothing to break, instant load). To use real
photography later:

- **Hero background** — in [`Hero.tsx`](src/components/sections/Hero.tsx), replace
  `<OceanScene />` with:
  ```tsx
  <img src="/your-hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
  ```
  (Keep the dark overlay `<div>`s below it for text legibility.)
- **Before / After** — in [`BeforeAfter.tsx`](src/components/sections/BeforeAfter.tsx),
  swap the `HullSurface` panels for two `<img>` tags (a real "before" and "after"
  photo) inside the same wrappers.

Drop image files into the `public/` folder and reference them as `/filename.jpg`.

---

## 📨 Making the quote form send real emails

The form validates on the client and shows a success message, but doesn't send
anywhere yet (it's a static site). Easiest option — **Formspree** (free tier):

1. Create a form at [formspree.io](https://formspree.io) and copy your form ID.
2. In [`QuoteForm.tsx`](src/components/sections/QuoteForm.tsx), find the `onSubmit`
   handler and replace the `setSubmitted(true)` line with the commented `fetch`
   example already included there, using your Formspree URL.

Other options: Netlify Forms, Web3Forms, or your own API endpoint.

---

## 🧩 Tech stack & structure

```
silver-strike-marine/
├─ index.html                 # <head>: SEO meta, OG tags, fonts, favicon
├─ bundle.html                # ← the single-file deliverable (generated)
├─ build-bundle.sh            # production build → bundle.html
├─ src/
│  ├─ main.tsx                # entry; injects JSON-LD schema
│  ├─ App.tsx                 # page composition (section order)
│  ├─ index.css               # theme tokens, fonts, utilities, animations
│  ├─ data/site.ts            # ⭐ all editable content
│  ├─ lib/
│  │  ├─ seo.ts               # LocalBusiness structured data
│  │  └─ utils.ts             # cn() class helper
│  └─ components/
│     ├─ art/                 # Logo, OceanScene, social icons (SVG)
│     ├─ primitives/          # Reveal (scroll animation), SectionHeading
│     ├─ sections/            # all page sections (see table above)
│     └─ ui/                  # shadcn/ui components
├─ tailwind.config.js         # brand palette, fonts, animations
└─ package.json
```

**Highlights**
- Fully responsive (mobile / tablet / desktop), tested down to 375px
- Sticky nav + smooth scrolling + scroll-reveal animations
- Accessible: semantic landmarks, labelled form fields, keyboard-operable
  sliders & accordion, `prefers-reduced-motion` support
- SEO: meta + Open Graph + Twitter cards + JSON-LD LocalBusiness schema
- No external image requests — fast first paint

---

## Build notes

> A small `build-bundle.sh` is included instead of relying on `html-inline`.
> The site loads **Google Fonts** and sets a `canonical` URL via `<link>` tags;
> the generic `html-inline` tool tries to read those remote URLs as local files
> and crashes. The script instead inlines only the local Parcel CSS/JS (using a
> function-based replace so `$` characters in minified JS aren't mis-interpreted)
> and leaves the font/canonical links intact. The result is one portable
> `bundle.html`.

---

## A note on the stack

The original brief mentioned Next.js 15. This build uses **Vite + React** because
it produces a single, portable `bundle.html` with no server needed — ideal for a
one-page marketing site you can host anywhere (or preview by double-clicking).
The components are plain React, so they can be moved into a Next.js `app/` route
later if you want server rendering, a blog, or multiple pages — let me know and I
can port it.
