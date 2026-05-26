import { AnimatePresence } from 'framer-motion'
import { WhatsAppButton } from './components/floating/WhatsAppButton'
import { Footer } from './components/layout/Footer'
import { Loader } from './components/layout/Loader'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { AppointmentForm } from './components/sections/AppointmentForm'
import { Benefits } from './components/sections/Benefits'
import { Contact } from './components/sections/Contact'
import { FAQ } from './components/sections/FAQ'
import { Hero } from './components/sections/Hero'
import { IntegralModel } from './components/sections/IntegralModel'
import { Services } from './components/sections/Services'
import { Specialists } from './components/sections/Specialists'
import { Technology } from './components/sections/Technology'

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
        <About />
        <Benefits />
        <Services />
        <IntegralModel />
        <Specialists />
        <Technology />
        <AppointmentForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
