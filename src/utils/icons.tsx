import {
  Baby,
  Bone,
  Cpu,
  FileDigit,
  FlaskConical,
  Flower2,
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  Siren,
  Sparkles,
  Stethoscope,
  UserCheck,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  Baby,
  HeartPulse,
  Flower2,
  Bone,
  Sparkles,
  FlaskConical,
  ShieldCheck,
  UserCheck,
  Cpu,
  FileDigit,
  HeartHandshake,
  Siren,
}

export function getIcon(name: string, className = 'w-7 h-7') {
  const Icon = iconMap[name] ?? Stethoscope
  return <Icon className={className} aria-hidden />
}
