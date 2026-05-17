import { motion } from 'framer-motion'
import { Calendar, MessageCircle } from 'lucide-react'
import { CLINIC } from '../../data/clinic'
import { Button } from '../ui/Button'

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <motion.div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=600&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-800/95 to-medical-600/90" />
      </motion.div>

      <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Agenda tu cita hoy mismo
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            No esperes a sentirte mal. La prevención es la mejor medicina y nuestro
            equipo está listo para atenderte con calidez y profesionalismo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="#cita"
              variant="secondary"
              size="lg"
              icon={<Calendar size={20} />}
            >
              Reservar ahora
            </Button>
            <Button
              href={CLINIC.whatsapp}
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={20} />}
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
