import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CLINIC, NAV_LINKS } from '../../data/clinic'
import { Button } from '../ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`transition-all duration-500 ${
          scrolled
            ? 'glass shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
        aria-label="Navegación principal"
      >
        <div className="container-narrow flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2 group" aria-label="Ir al inicio">
            <div className="w-10 h-10 rounded-xl bg-medical-600 flex items-center justify-center shadow-soft group-hover:bg-medical-700 transition-colors">
              <span className="text-white font-bold text-lg">+</span>
            </div>
            <div>
              <span
                className={`font-display font-bold text-lg block leading-tight ${
                  scrolled ? 'text-medical-900' : 'text-white'
                }`}
              >
                {CLINIC.name}
              </span>
              <span
                className={`text-xs hidden sm:block ${
                  scrolled ? 'text-slate-500' : 'text-blue-100'
                }`}
              >
                {CLINIC.tagline}
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-health-500 ${
                  scrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className={`flex items-center gap-2 text-sm font-medium ${
                scrolled ? 'text-medical-600' : 'text-white'
              }`}
              aria-label="Llamar a la clínica"
            >
              <Phone size={16} />
              {CLINIC.phone}
            </a>
            <Button href="#cita" size="sm" variant="secondary">
              Reservar Cita
            </Button>
          </div>

          <button
            type="button"
            className={`lg:hidden p-2 rounded-lg ${
              scrolled ? 'text-medical-900' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28 }}
            className="fixed inset-0 top-0 z-40 lg:hidden bg-white"
          >
            <div className="flex flex-col h-full pt-24 px-6 pb-8 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-lg font-medium text-medical-900 border-b border-slate-100"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <Button href={CLINIC.whatsapp} variant="whatsapp" className="w-full">
                  WhatsApp
                </Button>
                <Button href="#cita" variant="primary" className="w-full">
                  Reservar Cita
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
