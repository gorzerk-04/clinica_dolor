import { TECHNOLOGIES } from '../../data/clinic'
import { getIcon } from '../../utils/icons'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Technology() {
  return (
    <section id="tecnologia" className="section-padding bg-slate-50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Tecnología y Tratamientos"
          title="Innovación para tu recuperación"
          subtitle="Utilizamos tecnología moderna para reducir el dolor, mejorar la movilidad y acelerar tu recuperación con la menor invasión posible."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TECHNOLOGIES.map((tech, i) => (
            <ScrollReveal key={tech.title} delay={i * 0.1}>
              <div className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-medical-200 shadow-soft hover:shadow-card transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-medical-50 to-medical-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-medical-500 group-hover:to-medical-600 group-hover:text-white text-medical-600 transition-all duration-500">
                  {getIcon(tech.icon, 'w-10 h-10')}
                </div>
                <h3 className="font-display font-bold text-xl text-medical-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
