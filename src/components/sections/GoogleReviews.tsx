import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import { GOOGLE_REVIEWS } from '../../data/clinic'
import { ScrollReveal } from '../ui/ScrollReveal'

export function GoogleReviews() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-soft flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10" aria-hidden>
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-medical-900 font-display">
                    {GOOGLE_REVIEWS.rating}
                  </span>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-sm mt-1">
                  Basado en {GOOGLE_REVIEWS.totalReviews} reseñas en Google
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-1 lg:justify-end">
              {GOOGLE_REVIEWS.highlights.map((review) => (
                <p
                  key={review}
                  className="text-sm text-slate-600 italic max-w-xs px-4 py-3 bg-white rounded-xl border border-slate-100"
                >
                  {review}
                </p>
              ))}
            </div>

            <motion.a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-medical-600 font-semibold hover:text-medical-700 whitespace-nowrap"
              whileHover={{ x: 4 }}
            >
              Ver todas las reseñas
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
