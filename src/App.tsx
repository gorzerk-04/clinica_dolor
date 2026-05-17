import { AnimatePresence } from 'framer-motion'
import { EmergencyButton } from './components/floating/EmergencyButton'
import { WhatsAppButton } from './components/floating/WhatsAppButton'
import { Footer } from './components/layout/Footer'
import { Loader } from './components/layout/Loader'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { AppointmentForm } from './components/sections/AppointmentForm'
import { Benefits } from './components/sections/Benefits'
import { BlogPreview } from './components/sections/BlogPreview'
import { CTA } from './components/sections/CTA'
import { FAQ } from './components/sections/FAQ'
import { GoogleReviews } from './components/sections/GoogleReviews'
import { Hero } from './components/sections/Hero'
import { Process } from './components/sections/Process'
import { Specialties } from './components/sections/Specialties'
import { Testimonials } from './components/sections/Testimonials'

function App() {
  return (
    <>
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-medical-600 focus:text-white focus:rounded-lg"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Specialties />
        <Benefits />
        <About />
        <GoogleReviews />
        <Testimonials />
        <Process />
        <AppointmentForm />
        <CTA />
        <BlogPreview />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <EmergencyButton />
    </>
  )
}

export default App
