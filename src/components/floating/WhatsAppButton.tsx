import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { CLINIC } from '../../data/clinic'

export function WhatsAppButton() {
  return (
    <motion.a
      href={CLINIC.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 sm:right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-card hover:shadow-glow transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="font-semibold text-sm hidden sm:inline">WhatsApp</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-health-400 rounded-full animate-pulse" />
    </motion.a>
  )
}
