import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { BeforeAfter } from "@/components/sections/BeforeAfter"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { CtaBanner } from "@/components/sections/CtaBanner"
import { Testimonials } from "@/components/sections/Testimonials"
import { Faq } from "@/components/sections/Faq"
import { QuoteForm } from "@/components/sections/QuoteForm"
import { Footer } from "@/components/sections/Footer"
import { MobileCallBar } from "@/components/sections/MobileCallBar"

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <CtaBanner />
        <Testimonials />
        <Faq />
        <QuoteForm />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  )
}

export default App
