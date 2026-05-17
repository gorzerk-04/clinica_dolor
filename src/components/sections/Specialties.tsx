import { ArrowRight } from 'lucide-react'
import { SPECIALTIES } from '../../data/clinic'
import { getIcon } from '../../utils/icons'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Specialties() {
  return (
    <section id="especialidades" className="section-padding bg-slate-50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Especialidades"
          title="Cuidado médico para cada etapa de tu vida"
          subtitle="Contamos con especialistas en diversas áreas para brindarte un diagnóstico preciso y un tratamiento efectivo."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SPECIALTIES.map((specialty, i) => (
            <ScrollReveal key={specialty.id} delay={i * 0.08}>
              <article className="group h-full bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-slate-100 hover:border-medical-200 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
                  {getIcon(specialty.icon, 'w-7 h-7')}
                </div>
                <h3 className="mt-5 font-display font-bold text-xl text-medical-900">
                  {specialty.title}
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed flex-grow">
                  {specialty.description}
                </p>
                <Button
                  href="#cita"
                  variant="ghost"
                  size="sm"
                  className="mt-5 -ml-2 group/btn"
                  icon={
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  }
                >
                  Más información
                </Button>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
