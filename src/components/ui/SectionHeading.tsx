import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${
            light ? 'text-health-300' : 'text-health-500'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-medical-900'
        }`}
      >
        {title}
      </h2>
      {subtitle?.trim() && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-blue-100' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
