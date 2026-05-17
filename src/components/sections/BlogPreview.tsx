import { ArrowRight, Calendar } from 'lucide-react'
import { BLOG_POSTS } from '../../data/clinic'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function BlogPreview() {
  return (
    <section id="blog" className="section-padding bg-slate-50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Blog de salud"
          title="Consejos médicos para tu día a día"
          subtitle="Información confiable de nuestros especialistas para cuidar tu salud con conocimiento."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <article className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-medical-600 text-white text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <h3 className="mt-3 font-display font-bold text-lg text-medical-900 group-hover:text-medical-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-medical-600 font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Leer artículo
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
