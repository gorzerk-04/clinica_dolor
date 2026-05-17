import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MessageCircle, Shield } from 'lucide-react'
import { CLINIC, HERO_STATS } from '../../data/clinic'
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
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=1080&fit=crop&q=80"
          alt="Médicos atendiendo pacientes en consultorio moderno"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-900/95 via-medical-800/85 to-medical-700/70" />
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
              <Shield size={16} />
              Certificados por la Secretaría de Salud
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Tu salud en manos de{' '}
              <span className="text-health-400">especialistas de confianza</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
              Atención médica integral con tecnología moderna, profesionales
              certificados y atención personalizada.
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
        </div>

        <ScrollReveal delay={0.4} className="mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {HERO_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass rounded-2xl p-5 text-center hover:scale-[1.02] transition-transform"
              >
                <p className="text-2xl sm:text-3xl font-bold text-medical-600 font-display">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 mt-1 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <motion.a
          href="#especialidades"
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
