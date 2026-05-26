import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { INTEGRAL_BENEFITS } from '../../data/clinic'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function IntegralModel() {
  return (
    <section id="modelo-integral" className="section-padding bg-gradient-to-b from-medical-900 to-medical-800 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-medical-600/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-health-600/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
      </div>

      <div className="container-narrow relative z-10">
        <SectionHeading
          eyebrow="Beneficios del Modelo Integral"
          title="Tratamos el dolor desde su origen"
          subtitle="Integramos Neurocirugía, Traumatología, Reumatología y Rehabilitación para brindarte la mejor atención."
          light
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {INTEGRAL_BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-health-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-health-400" size={24} />
                  </div>
                  <span className="text-lg font-medium text-blue-50">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-health-500 to-medical-500 rounded-3xl blur-2xl opacity-30" />
              <div className="relative glass-dark p-10 sm:p-12 rounded-3xl text-center border-white/20">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-health-400 to-health-600 rounded-2xl flex items-center justify-center mb-8 shadow-glow rotate-3 hover:rotate-6 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Resultado final:
                </h3>
                <p className="text-2xl text-health-300 font-medium leading-relaxed">
                  Todo tu tratamiento en un solo lugar.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-blue-200">
                    Evita derivaciones entre múltiples clínicas. Diagnóstico,
                    procedimientos y rehabilitación coordinados por un mismo equipo.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
