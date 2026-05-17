import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { FAQ_ITEMS } from '../../data/clinic'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-narrow max-w-3xl">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          subtitle="Todo lo que necesitas saber antes de tu primera visita."
        />

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={item.question} delay={i * 0.05}>
              <motion.div
                className="rounded-xl border border-slate-200 overflow-hidden bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-medical-900 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-500"
                  aria-expanded={openIndex === i}
                >
                  {item.question}
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-medical-600 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
