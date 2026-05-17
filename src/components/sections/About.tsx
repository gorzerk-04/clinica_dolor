import { CheckCircle2 } from 'lucide-react'
import { STATS } from '../../data/clinic'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="nosotros" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=900&fit=crop"
                  alt="Equipo médico de Clínica Vitalis"
                  className="w-full h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 max-w-xs hidden sm:block">
                <p className="text-3xl font-bold text-medical-600 font-display">12+</p>
                <p className="text-sm text-slate-600 font-medium">
                  Años cuidando familias en la Ciudad de México
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <SectionHeading
              align="left"
              eyebrow="Sobre nosotros"
              title="Más que una clínica, tu aliado en salud"
              subtitle=""
            />

            <p className="text-slate-600 leading-relaxed -mt-8 mb-6">
              Clínica Vitalis nació en 2014 con una visión clara: democratizar el acceso
              a atención médica de calidad sin sacrificar el trato humano. Hoy somos
              referencia en atención integral gracias a nuestro equipo multidisciplinario
              y tecnología de diagnóstico de primer nivel.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-5 rounded-xl bg-white border border-slate-100">
                <h3 className="font-display font-bold text-medical-800 mb-2">Misión</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Brindar atención médica integral, accesible y personalizada que mejore
                  la calidad de vida de nuestros pacientes con ética, calidez y excelencia.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-100">
                <h3 className="font-display font-bold text-medical-800 mb-2">Visión</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ser la clínica privada de referencia en México por innovación,
                  resultados clínicos y experiencia del paciente excepcional.
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-10">
              {[
                'Instalaciones certificadas y protocolos de bioseguridad',
                'Expediente clínico digital seguro',
                'Convenios con aseguradoras principales',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="text-health-500 flex-shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-white shadow-soft">
              {STATS.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
