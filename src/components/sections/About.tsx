import { VALUES } from '../../data/clinic'
import { getIcon } from '../../utils/icons'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="nosotros" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Quiénes somos"
          title="Expertos en tratamiento del dolor y recuperación funcional"
          subtitle=""
        />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-slate-600 text-lg leading-relaxed">
              La Clínica del Dolor en Huánuco nace con el propósito de ofrecer un
              enfoque integral para el tratamiento del dolor y problemas
              musculoesqueléticos.
            </p>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Reunimos especialistas en{' '}
              <strong className="text-medical-700">Neurocirugía</strong>,{' '}
              <strong className="text-medical-700">Traumatología</strong>,{' '}
              <strong className="text-medical-700">Reumatología</strong> y{' '}
              <strong className="text-medical-700">Rehabilitación</strong> — todo
              bajo un mismo lugar para evitar que el paciente tenga que derivarse
              entre múltiples clínicas.
            </p>
          </div>
        </ScrollReveal>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="relative p-8 rounded-2xl bg-white border border-slate-100 shadow-soft h-full overflow-hidden group hover:shadow-card transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-medical-500 to-medical-700" />
              <div className="w-12 h-12 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center mb-4 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="font-display font-bold text-xl text-medical-900 mb-3">
                Misión
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Aliviar el dolor y recuperar la movilidad de nuestros pacientes
                mediante un equipo multidisciplinario, tecnología avanzada y
                atención humana.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative p-8 rounded-2xl bg-white border border-slate-100 shadow-soft h-full overflow-hidden group hover:shadow-card transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-health-500 to-health-600" />
              <div className="w-12 h-12 rounded-xl bg-health-50 text-health-600 flex items-center justify-center mb-4 group-hover:bg-health-500 group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="font-display font-bold text-xl text-medical-900 mb-3">
                Visión
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ser la clínica referente en Huánuco en tratamientos de columna,
                articulaciones y rehabilitación.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Valores */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-medical-900 text-center mb-10">
            Nuestros Valores
          </h3>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <div className="group h-full bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-slate-100 hover:border-medical-200 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
                  {getIcon(value.icon, 'w-7 h-7')}
                </div>
                <h4 className="mt-5 font-display font-bold text-lg text-medical-900">
                  {value.title}
                </h4>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
