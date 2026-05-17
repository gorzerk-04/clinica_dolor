import { BENEFITS } from '../../data/clinic'
import { getIcon } from '../../utils/icons'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="¿Por qué elegirnos?"
          title="Tu bienestar es nuestra prioridad"
          subtitle="Combinamos experiencia médica, tecnología de punta y un trato humano que te hace sentir en casa."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <div className="flex gap-5 p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-medical-500 to-medical-700 text-white flex items-center justify-center shadow-soft group-hover:shadow-card group-hover:scale-105 transition-all duration-300">
                  {getIcon(benefit.icon, 'w-8 h-8')}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-medical-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
