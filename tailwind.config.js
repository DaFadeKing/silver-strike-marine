/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ---- Brand palette ----
        navy: {
          DEFAULT: "#0A2342",
          950: "#050F1F",
          900: "#081B33",
          800: "#0A2342",
          700: "#103156",
          600: "#16406F",
          500: "#1E5288",
          400: "#3E72A8",
        },
        silver: {
          DEFAULT: "#C0C0C0",
          50: "#F7F8FA",
          100: "#EDEFF2",
          200: "#DDE1E6",
          300: "#C7CCD3",
          400: "#AEB4BC",
          500: "#9197A0",
        },
        charcoal: {
          DEFAULT: "#2D2D2D",
          900: "#1A1A1A",
          800: "#242424",
          700: "#2D2D2D",
          600: "#3A3A3A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(192,192,192,0.18), 0 24px 60px -20px rgba(5,15,31,0.65)",
        card: "0 1px 2px rgba(10,35,66,0.04), 0 14px 40px -18px rgba(10,35,66,0.25)",
        lift: "0 30px 70px -28px rgba(10,35,66,0.55)",
      },
      backgroundImage: {
        "silver-sheen":
          "linear-gradient(100deg, #8A8D91 0%, #E8E8EA 25%, #C0C0C0 50%, #F4F5F6 70%, #9197A0 100%)",
        "navy-deep":
          "radial-gradient(120% 120% at 50% 0%, #103156 0%, #0A2342 45%, #050F1F 100%)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%, 100%": { transform: "scale(1.7)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
