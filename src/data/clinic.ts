export const CLINIC = {
  name: 'Clínica Vitalis',
  tagline: 'Salud integral con excelencia humana',
  phone: '+52 55 1234 5678',
  phoneRaw: '525512345678',
  email: 'contacto@clinicavitalis.com',
  address: 'Av. Reforma 245, Col. Juárez, Ciudad de México, CP 06600',
  whatsapp: 'https://wa.me/525512345678?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Cl%C3%ADnica%20Vitalis',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.888!2d-99.167!3d19.428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzQxLjAiTiA5OcKwMTAnMDEuMiJX!5e0!3m2!1ses!2smx!4v1',
  hours: {
    weekdays: 'Lun – Vie: 7:00 – 21:00',
    saturday: 'Sábado: 8:00 – 14:00',
    emergency: 'Emergencias 24/7',
  },
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
} as const

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
] as const

export const HERO_STATS = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '24h', label: 'Atención inmediata' },
  { value: '100%', label: 'Especialistas certificados' },
  { value: 'HD', label: 'Equipamiento moderno' },
] as const

export const SPECIALTIES = [
  {
    id: 'general',
    title: 'Medicina General',
    description:
      'Evaluación integral, prevención y tratamiento de enfermedades comunes con seguimiento cercano.',
    icon: 'Stethoscope',
  },
  {
    id: 'pediatria',
    title: 'Pediatría',
    description:
      'Cuidado especializado para bebés, niños y adolescentes en un ambiente cálido y seguro.',
    icon: 'Baby',
  },
  {
    id: 'cardiologia',
    title: 'Cardiología',
    description:
      'Diagnóstico cardiovascular avanzado con estudios de última generación y plan personalizado.',
    icon: 'HeartPulse',
  },
  {
    id: 'ginecologia',
    title: 'Ginecología',
    description:
      'Salud femenina integral: control prenatal, prevención y tratamientos con total privacidad.',
    icon: 'Flower2',
  },
  {
    id: 'traumatologia',
    title: 'Traumatología',
    description:
      'Atención de lesiones musculoesqueléticas, rehabilitación y recuperación funcional.',
    icon: 'Bone',
  },
  {
    id: 'dermatologia',
    title: 'Dermatología',
    description:
      'Cuidado de piel, cabello y uñas con procedimientos mínimamente invasivos y resultados visibles.',
    icon: 'Sparkles',
  },
  {
    id: 'laboratorio',
    title: 'Laboratorio Clínico',
    description:
      'Análisis clínicos precisos con resultados digitales rápidos para un diagnóstico oportuno.',
    icon: 'FlaskConical',
  },
] as const

export const BENEFITS = [
  {
    title: 'Atención rápida y segura',
    description:
      'Tiempos de espera reducidos y protocolos de bioseguridad certificados para tu tranquilidad.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Médicos especializados',
    description:
      'Equipo con cédula profesional, especialidad y años de experiencia en hospitales de referencia.',
    icon: 'UserCheck',
  },
  {
    title: 'Tecnología avanzada',
    description:
      'Equipamiento de diagnóstico de última generación para resultados precisos desde la primera visita.',
    icon: 'Cpu',
  },
  {
    title: 'Historia clínica digital',
    description:
      'Tu expediente siempre disponible, seguro y accesible para un seguimiento continuo sin papeles.',
    icon: 'FileDigit',
  },
  {
    title: 'Atención personalizada',
    description:
      'Cada paciente es único. Diseñamos planes de tratamiento adaptados a tus necesidades reales.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Emergencias y soporte',
    description:
      'Línea de emergencias 24/7 y acompañamiento post-consulta para que nunca te sientas solo.',
    icon: 'Siren',
  },
] as const

export const STATS = [
  { value: 15000, suffix: '+', label: 'Pacientes atendidos' },
  { value: 35, suffix: '', label: 'Especialistas' },
  { value: 12, suffix: '+', label: 'Años de experiencia' },
  { value: 98, suffix: '%', label: 'Índice de satisfacción' },
] as const

export const TESTIMONIALS = [
  {
    name: 'María Elena Ríos',
    role: 'Paciente de cardiología',
    comment:
      'Llegué con mucho miedo por mis palpitaciones. El Dr. Mendoza me explicó todo con paciencia y hoy me siento tranquila. La clínica es impecable.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Carlos Alberto Vega',
    role: 'Paciente de traumatología',
    comment:
      'Después de mi lesión de rodilla pensé que tardaría meses en recuperarme. El equipo de rehabilitación fue excepcional. Recomiendo Vitalis al 100%.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Ana Lucía Herrera',
    role: 'Madre de paciente pediátrico',
    comment:
      'Mi hijo de 4 años odia los hospitales, pero aquí la Dra. Soto lo trató con tanto cariño que salió sonriendo. Eso no tiene precio.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Roberto Jiménez',
    role: 'Paciente de medicina general',
    comment:
      'Reservé cita por WhatsApp en minutos. Me atendieron el mismo día, con estudios de laboratorio listos en 24 horas. Servicio de primer nivel.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Reserva tu cita',
    description: 'Agenda en línea, por WhatsApp o teléfono en menos de 2 minutos.',
  },
  {
    step: 2,
    title: 'Evaluación médica',
    description: 'Valoración integral con historial digital y estudios si los necesitas.',
  },
  {
    step: 3,
    title: 'Diagnóstico especializado',
    description: 'Plan de tratamiento claro, explicado en lenguaje que entiendas.',
  },
  {
    step: 4,
    title: 'Seguimiento continuo',
    description: 'Recordatorios, consultas de control y acceso a tu expediente digital.',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: '¿Cómo puedo agendar una cita?',
    answer:
      'Puedes reservar en línea con el formulario de esta página, escribirnos por WhatsApp o llamar a nuestra recepción. Confirmamos tu cita en minutos.',
  },
  {
    question: '¿Aceptan seguros médicos?',
    answer:
      'Trabajamos con las principales aseguradoras del país. Al agendar, indícanos tu póliza y validamos cobertura antes de tu consulta.',
  },
  {
    question: '¿Cuánto tardan los resultados de laboratorio?',
    answer:
      'La mayoría de estudios de rutina están listos en 24 horas. Recibirás tus resultados por correo y en tu portal de paciente digital.',
  },
  {
    question: '¿Qué debo llevar a mi primera consulta?',
    answer:
      'Identificación oficial, estudios previos si los tienes, lista de medicamentos actuales y tu póliza de seguro si aplica.',
  },
  {
    question: '¿Tienen servicio de urgencias?',
    answer:
      'Sí. Contamos con línea de emergencias 24/7 y médico de guardia para situaciones que requieran atención inmediata.',
  },
] as const

export const BLOG_POSTS = [
  {
    title: '5 señales de que debes visitar al cardiólogo',
    excerpt: 'Conocer los síntomas tempranos puede salvar vidas. Te explicamos cuándo actuar.',
    date: '12 May 2026',
    category: 'Prevención',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
  {
    title: 'Vacunación infantil: calendario actualizado 2026',
    excerpt: 'Guía clara para padres sobre las vacunas esenciales por edad.',
    date: '8 May 2026',
    category: 'Pediatría',
    image:
      'https://images.unsplash.com/photo-1631217868264-e5b9bb5e4a1e?w=600&h=400&fit=crop',
  },
  {
    title: 'Cuidado de la piel en temporada de calor',
    excerpt: 'Consejos dermatológicos para proteger tu piel del sol y la deshidratación.',
    date: '3 May 2026',
    category: 'Dermatología',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
  },
] as const

export const GOOGLE_REVIEWS = {
  rating: 4.9,
  totalReviews: 287,
  highlights: [
    '“Excelente atención y instalaciones modernas.”',
    '“Los médicos son muy profesionales y humanos.”',
    '“Sin esperas largas, muy recomendable.”',
  ],
} as const
