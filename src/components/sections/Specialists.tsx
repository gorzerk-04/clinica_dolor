import { GraduationCap } from 'lucide-react'
import { SPECIALISTS } from '../../data/clinic'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Specialists() {
  return (
    <section id="especialistas" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Nuestro Equipo"
          title="Especialistas de primer nivel a tu servicio"
          subtitle="Conoce al equipo médico multidisciplinario dedicado a recuperar tu bienestar."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SPECIALISTS.map((doctor, i) => (
            <ScrollReveal key={doctor.name} delay={i * 0.1}>
              <div className="group h-full flex flex-col bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                {/* Image Header */}
                <div className="relative h-72 overflow-hidden bg-medical-100">
                  {doctor.hasFullProfile ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400" aria-hidden><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="inline-block px-3 py-1 bg-health-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                      {doctor.specialty}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {doctor.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <p className="text-medical-700 font-medium mb-6">
                    {doctor.experience}
                  </p>

                  <div className="flex-1">
                    <h4 className="flex items-center gap-2 font-display font-bold text-slate-800 mb-4">
                      <GraduationCap size={20} className="text-medical-500" />
                      Formación y Experiencia
                    </h4>
                    <ul className="space-y-3">
                      {doctor.education.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-medical-300 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
