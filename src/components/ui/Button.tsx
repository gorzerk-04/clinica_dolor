import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  icon?: ReactNode
  ariaLabel?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-medical-600 text-white hover:bg-medical-700 shadow-soft hover:shadow-card',
  secondary:
    'bg-health-500 text-white hover:bg-health-600 shadow-glow hover:shadow-card',
  outline:
    'border-2 border-medical-600 text-medical-600 hover:bg-medical-50 bg-white/80',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-soft',
  ghost: 'text-medical-600 hover:bg-medical-50',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  icon,
  ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {icon}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={ariaLabel}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  )
}
