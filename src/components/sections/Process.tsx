import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '../../data/clinic'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Process() {
  return (
    <section id="proceso" className="section-padding bg-gradient-to-b from-medical-50 to-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="Tu camino hacia una mejor salud"
          subtitle="Un proceso simple y transparente, diseñado para que te sientas acompañado en cada paso."
        />

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-medical-200 md:-translate-x-px hidden sm:block"
            aria-hidden
          />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.15}>
                <div
                  className={`relative flex flex-col md:flex-row gap-6 items-start ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right flex md:justify-end">
                    <motion.div
                      className={`w-full max-w-sm ${
                        i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto md:ml-0'
                      }`}
                    >
                      <span className="text-sm font-semibold text-health-500">
                        Paso {step.step}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-medical-900 mt-1">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <div
                    className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-medical-600 text-white font-bold text-lg flex items-center justify-center shadow-card z-10 ring-4 ring-white"
                    aria-hidden
                  >
                    {step.step}
                  </div>

                  <div className="md:w-1/2 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
