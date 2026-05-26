import { motion } from 'framer-motion'
import { ArrowRight, Calendar, CheckCircle2, MessageCircle } from 'lucide-react'
import { CLINIC, HERO_BADGES } from '../../data/clinic'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&h=1080&fit=crop&q=80"
          alt="Especialistas en tratamiento del dolor y rehabilitación en clínica moderna"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-900/95 via-medical-800/90 to-medical-700/75" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(52,199,123,0.3) 0%, transparent 50%)',
          }}
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container-narrow section-padding pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-health-300 text-sm font-medium mb-6">
              <CheckCircle2 size={16} />
              Equipo multidisciplinario en Huánuco
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Clínica del Dolor{' '}
              <span className="text-health-400">Huánuco</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-xl sm:text-2xl text-blue-50 leading-relaxed max-w-2xl font-medium">
              Aliviamos tu dolor, recuperamos tu movilidad y te ayudamos a
              volver a tu vida normal.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-blue-200/90 leading-relaxed max-w-2xl">
              Equipo multidisciplinario especializado en Neurocirugía,
              Traumatología, Reumatología y Rehabilitación, con tecnología
              avanzada y tratamientos integrales en un solo lugar.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                href="#cita"
                variant="secondary"
                size="lg"
                icon={<Calendar size={20} />}
              >
                Reservar Cita
              </Button>
              <Button
                href={CLINIC.whatsapp}
                variant="whatsapp"
                size="lg"
                icon={<MessageCircle size={20} />}
              >
                Hablar por WhatsApp
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-3">
              {HERO_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/95 text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <motion.a
          href="#nosotros"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-white/70 hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Ver más contenido"
        >
          <span className="text-xs mb-2">Descubre más</span>
          <ArrowRight className="rotate-90" size={20} />
        </motion.a>
      </div>
    </section>
  )
}
