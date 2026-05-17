import { useAnimatedCounter } from '../../hooks/useAnimatedCounter'
import { useInView } from '../../hooks/useInView'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
  light?: boolean
}

export function AnimatedCounter({
  value,
  suffix = '',
  label,
  light = false,
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView(0.3)
  const count = useAnimatedCounter(value, 2200, isInView)

  const display =
    suffix === '%'
      ? `${count}${suffix}`
      : suffix === '+'
        ? `${count.toLocaleString('es-MX')}${suffix}`
        : `${count}${suffix}`

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-4xl md:text-5xl font-bold font-display ${
          light ? 'text-white' : 'text-medical-600'
        }`}
      >
        {display}
      </div>
      <p
        className={`mt-2 text-sm md:text-base ${
          light ? 'text-blue-100' : 'text-slate-600'
        }`}
      >
        {label}
      </p>
    </div>
  )
}
