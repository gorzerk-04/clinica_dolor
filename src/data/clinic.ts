export const CLINIC = {
  name: 'Clínica del Dolor Huánuco',
  nameShort: 'Clínica del Dolor',
  tagline: 'Aliviamos tu dolor, recuperamos tu movilidad',
  phone1: '932 327 110',
  phone1Raw: '51932327110',
  phone2: '976 544 225',
  phone2Raw: '51976544225',
  email: 'clinicadeldolorhco@gmail.com',
  address: 'Jr. Constitución 920 — Huánuco',
  whatsapp:
    'https://wa.me/51932327110?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Cl%C3%ADnica%20del%20Dolor%20Hu%C3%A1nuco',
  whatsappRaw: '51932327110',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.5!2d-76.242!3d-9.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnNDguMCJTIDc2wrAxNCczMS4yIlc!5e0!3m2!1ses!2spe!4v1',
  hours: {
    schedule: 'Lunes — Sábado',
    time: '8:30 AM — 7:00 PM',
  },
  social: {
    facebook: '#',
    instagram: '#',
    tiktok: '#',
  },
} as const

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Especialistas', href: '#especialistas' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const HERO_BADGES = [
  '✓ Especialistas certificados',
  '✓ Cirugía mínimamente invasiva',
  '✓ Tecnología avanzada',
  '✓ Atención integral',
] as const

export const VALUES = [
  {
    title: 'Empatía',
    description: 'Nos ponemos en el lugar del paciente para entender su dolor.',
    icon: 'Heart',
  },
  {
    title: 'Experticia',
    description: 'Años de formación y experiencia respaldan cada diagnóstico.',
    icon: 'GraduationCap',
  },
  {
    title: 'Precisión',
    description: 'Diagnósticos certeros con tecnología de última generación.',
    icon: 'Target',
  },
  {
    title: 'Innovación',
    description: 'Tratamientos modernos y técnicas quirúrgicas avanzadas.',
    icon: 'Lightbulb',
  },
  {
    title: 'Transparencia',
    description: 'Comunicación clara sobre diagnóstico, tratamiento y costos.',
    icon: 'Eye',
  },
  {
    title: 'Compromiso con el paciente',
    description: 'Tu recuperación es nuestra prioridad en cada etapa.',
    icon: 'HandHeart',
  },
] as const

export const DIFFERENTIATORS = [
  {
    title: 'Equipo multidisciplinario',
    description:
      'Neurocirujanos, traumatólogos, reumatólogos y rehabilitación trabajando coordinadamente.',
    icon: 'Users',
  },
  {
    title: 'Diagnóstico preciso',
    description:
      'Tratamiento basado en evaluación especializada y tecnología moderna.',
    icon: 'Scan',
  },
  {
    title: 'Cirugía mínimamente invasiva',
    description: 'Menor recuperación y procedimientos avanzados.',
    icon: 'Microscope',
  },
  {
    title: 'Todo en un solo lugar',
    description: 'Diagnóstico, tratamiento y rehabilitación integrados.',
    icon: 'Building2',
  },
  {
    title: 'Tecnología avanzada',
    description: 'Equipamiento moderno y rehabilitación especializada.',
    icon: 'Cpu',
  },
  {
    title: 'Atención humana',
    description: 'Trato cercano, transparente y profesional.',
    icon: 'HeartHandshake',
  },
] as const

export const SERVICES = [
  {
    id: 'neurocirugia',
    title: 'Neurocirugía',
    doctor: 'Dr. Victor Cori',
    icon: 'Brain',
    color: 'from-blue-600 to-indigo-700',
    services: [
      'Cirugía endoscópica de columna',
      'Cirugía microscópica',
      'Infiltraciones ecoguiadas',
      'Arco en C',
      'Bloqueos de dolor',
    ],
    pathologies: [
      'Hernia discal',
      'Lumbalgia',
      'Cervicalgia',
      'Ciática',
      'Escoliosis',
      'Estenosis',
      'Tumores cerebrales',
      'Migraña',
      'Epilepsia',
      'Fibromialgia',
      'TEC',
      'Parkinson',
    ],
  },
  {
    id: 'traumatologia',
    title: 'Traumatología',
    doctor: 'Dr. Alfredo Araujo',
    icon: 'Bone',
    color: 'from-emerald-600 to-teal-700',
    services: [
      'Infiltraciones',
      'Prótesis de cadera',
      'Prótesis de rodilla',
      'Reconstrucción ligamentaria',
      'Artroscopia',
      'Artroplastia',
    ],
    pathologies: [
      'Fracturas',
      'Luxaciones',
      'Tendinitis',
      'Artrosis',
      'Lesiones deportivas',
      'Rodilla',
      'Hombro',
      'Cadera',
      'Fascitis plantar',
    ],
  },
  {
    id: 'reumatologia',
    title: 'Reumatología',
    doctor: 'Dr. Leonardo Gonzales',
    icon: 'Activity',
    color: 'from-violet-600 to-purple-700',
    services: ['Infiltraciones', 'Control farmacológico'],
    pathologies: [
      'Artritis reumatoide',
      'Osteoporosis',
      'Fibromialgia',
      'Lupus',
      'Gota',
      'Vasculitis',
      'Osteoartritis',
      'Dolor articular crónico',
    ],
  },
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación y Fisioterapia',
    doctor: '',
    icon: 'Dumbbell',
    color: 'from-amber-600 to-orange-700',
    services: [
      'Magnetoterapia Total Body',
      'Terapia manual',
      'Electroterapia',
      'Ultrasonido',
      'Termoterapia',
      'Crioterapia',
      'Ejercicio terapéutico',
    ],
    pathologies: [
      'Rehabilitación postquirúrgica',
      'Rehabilitación de columna',
      'Lesiones deportivas',
      'Neurorehabilitación',
      'Trastornos posturales',
    ],
  },
] as const

export const INTEGRAL_BENEFITS = [
  'Diagnóstico preciso',
  'Tratamiento especializado',
  'Recuperación coordinada',
  'Procedimientos mínimamente invasivos',
  'Infiltraciones rápidas y localizadas',
  'Rehabilitación avanzada',
] as const

export const SPECIALISTS = [
  {
    name: 'Dr. Victor Cori',
    specialty: 'Neurocirugía',
    image: 'https://images.unsplash.com/photo-1622253694242-abeb37a33e97?w=400&h=500&fit=crop&crop=face',
    experience: '13 años de formación médica',
    education: [
      'Medicina Humana — Universidad Nacional Hermilio Valdizán',
      'Neurocirugía — Universidad Ricardo Palma',
      'Rotaciones Hospital Nacional Hipólito Unanue',
    ],
    hasFullProfile: true,
  },
  {
    name: 'Dr. Alfredo Araujo',
    specialty: 'Traumatología y Ortopedia',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face',
    experience: 'Más de 15 años de experiencia',
    education: [
      'Especialista por Universidad San Martín de Porres',
      'Hospital Guillermo Almenara',
      'INEN',
      'Hospital Emergencias Pediátricas Grau',
    ],
    hasFullProfile: true,
  },
  {
    name: 'Dr. Leonardo Gonzales',
    specialty: 'Reumatología',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&crop=face',
    experience: 'Especialista en Reumatología',
    education: ['Perfil profesional en actualización'],
    hasFullProfile: false,
  },
] as const

export const TECHNOLOGIES = [
  {
    title: 'Cirugía endoscópica',
    description: 'Procedimientos de columna con mínima invasión y recuperación rápida.',
    icon: 'MonitorCheck',
  },
  {
    title: 'Cirugía microscópica',
    description: 'Precisión milimétrica en intervenciones neurológicas complejas.',
    icon: 'Microscope',
  },
  {
    title: 'Infiltraciones ecoguiadas',
    description: 'Inyecciones guiadas por ecografía para máxima precisión y alivio.',
    icon: 'Crosshair',
  },
  {
    title: 'Magnetoterapia Total Body',
    description: 'Terapia magnética avanzada para dolor y regeneración de tejidos.',
    icon: 'Zap',
  },
  {
    title: 'Rehabilitación avanzada',
    description: 'Equipamiento moderno para fisioterapia y recuperación funcional.',
    icon: 'Dumbbell',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: '¿Cómo puedo agendar una cita?',
    answer:
      'Puedes reservar en línea con el formulario de esta página, escribirnos por WhatsApp al 932 327 110 o llamarnos. Confirmamos tu cita a la brevedad.',
  },
  {
    question: '¿Qué especialidades atienden?',
    answer:
      'Contamos con Neurocirugía (Dr. Victor Cori), Traumatología (Dr. Alfredo Araujo), Reumatología (Dr. Leonardo Gonzales) y Rehabilitación con fisioterapia especializada.',
  },
  {
    question: '¿Qué es la cirugía mínimamente invasiva?',
    answer:
      'Son procedimientos quirúrgicos con incisiones pequeñas que permiten menor dolor postoperatorio, recuperación más rápida y menor riesgo de complicaciones comparado con la cirugía abierta tradicional.',
  },
  {
    question: '¿Cuál es el horario de atención?',
    answer:
      'Atendemos de lunes a sábado de 8:30 AM a 7:00 PM en Jr. Constitución 920, Huánuco.',
  },
  {
    question: '¿Realizan infiltraciones el mismo día?',
    answer:
      'Dependiendo de la evaluación médica, algunas infiltraciones pueden realizarse el mismo día de la consulta. El especialista determinará el mejor momento según tu caso.',
  },
  {
    question: '¿Qué debo llevar a mi primera consulta?',
    answer:
      'Trae tu DNI, estudios previos si los tienes (radiografías, resonancias, análisis), lista de medicamentos actuales y cualquier informe médico relevante.',
  },
] as const
