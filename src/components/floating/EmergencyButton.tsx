import { motion } from 'framer-motion'
import { Siren } from 'lucide-react'
import { CLINIC } from '../../data/clinic'

export function EmergencyButton() {
  return (
    <motion.a
      href={`tel:${CLINIC.phoneRaw}`}
      className="fixed bottom-4 right-4 sm:right-6 z-40 flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-full shadow-card hover:bg-red-700 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.2, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Emergencia 24 horas - Llamar ahora"
    >
      <Siren size={20} className="animate-pulse" />
      <span className="font-bold text-sm">Emergencia 24/7</span>
    </motion.a>
  )
}
