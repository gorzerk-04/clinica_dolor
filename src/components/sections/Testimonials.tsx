import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/clinic'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { StarRating } from '../ui/StarRating'

export function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros pacientes"
          subtitle="Historias reales de personas que confiaron su salud en nuestras manos."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <blockquote className="relative h-full bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-card transition-shadow">
                <Quote
                  className="absolute top-6 right-6 text-medical-100"
                  size={48}
                  aria-hidden
                />
                <StarRating rating={t.rating} />
                <p className="mt-5 text-slate-700 leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt=""
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-medical-100"
                    loading="lazy"
                  />
                  <div>
                    <cite className="not-italic font-semibold text-medical-900">
                      {t.name}
                    </cite>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
