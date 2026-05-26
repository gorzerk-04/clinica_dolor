import {
  Activity,
  Bone,
  Brain,
  Building2,
  Cpu,
  Crosshair,
  Dumbbell,
  Eye,
  GraduationCap,
  Heart,
  HeartHandshake,
  Lightbulb,
  Microscope,
  MonitorCheck,
  Scan,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Bone,
  Brain,
  Building2,
  Cpu,
  Crosshair,
  Dumbbell,
  Eye,
  GraduationCap,
  Heart,
  HeartHandshake,
  Lightbulb,
  Microscope,
  MonitorCheck,
  Scan,
  Target,
  Users,
  Zap,
}

export function getIcon(name: string, className = 'w-7 h-7') {
  const Icon = iconMap[name] ?? Heart
  return <Icon className={className} aria-hidden />
}
