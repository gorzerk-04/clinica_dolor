import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onAnimationComplete={() => setVisible(false)}
      role="status"
      aria-label="Cargando"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative w-16 h-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-2xl border-4 border-medical-100" />
          <div className="absolute inset-0 rounded-2xl border-4 border-transparent border-t-medical-600 border-r-health-500" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="font-display font-bold text-xl text-medical-800">
            Clínica Vitalis
          </p>
          <p className="text-sm text-slate-500 mt-1">Cuidando tu salud</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
