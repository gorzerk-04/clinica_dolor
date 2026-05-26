import { motion } from 'framer-motion'
import { CheckCircle, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { CLINIC, SERVICES } from '../../data/clinic'
import {
  isGoogleSheetsConfigured,
  submitAppointmentToSheet,
} from '../../services/submitAppointment'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

interface FormData {
  nombre: string
  email: string
  telefono: string
  especialidad: string
  fecha: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
  especialidad?: string
  fecha?: string
}

const initialData: FormData = {
  nombre: '',
  email: '',
  telefono: '',
  especialidad: '',
  fecha: '',
  mensaje: '',
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.nombre.trim() || data.nombre.trim().length < 2) {
    errors.nombre = 'Ingresa tu nombre completo'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email.trim() || !emailRegex.test(data.email)) {
    errors.email = 'Ingresa un correo electrónico válido'
  }

  const phoneRegex = /^[\d\s+()-]{9,}$/
  if (!data.telefono.trim() || !phoneRegex.test(data.telefono.replace(/\s/g, ''))) {
    errors.telefono = 'Ingresa un teléfono válido (mín. 9 dígitos)'
  }

  if (!data.especialidad) {
    errors.especialidad = 'Selecciona una especialidad'
  }

  if (!data.fecha) {
    errors.fecha = 'Selecciona una fecha preferida'
  } else {
    const selected = new Date(data.fecha)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selected < today) {
      errors.fecha = 'La fecha debe ser hoy o posterior'
    }
  }

  return errors
}

export function AppointmentForm() {
  const [data, setData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate(data)
    setErrors(validationErrors)
    setSubmitError(null)

    if (Object.keys(validationErrors).length > 0) return

    if (!isGoogleSheetsConfigured()) {
      setSubmitError(
        'El envío a Google Sheets no está configurado. Crea un archivo .env con VITE_GOOGLE_SHEETS_URL y VITE_GOOGLE_SHEETS_TOKEN. Ver docs/GOOGLE_SHEETS.md'
      )
      return
    }

    setLoading(true)
    try {
      await submitAppointmentToSheet(data)
      setSubmitted(true)
    } catch {
      setSubmitError(
        'No se pudo enviar la solicitud. Revisa tu conexión e inténtalo de nuevo, o contáctanos por WhatsApp.'
      )
    } finally {
      setLoading(false)
    }
  }

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-medical-500 focus:border-transparent ${
      errors[field] ? 'border-red-400' : 'border-slate-200'
    }`

  if (submitted) {
    return (
      <section id="cita" className="section-padding bg-medical-50">
        <div className="container-narrow max-w-xl text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-10 shadow-card"
          >
            <CheckCircle className="w-16 h-16 text-health-500 mx-auto" />
            <h2 className="mt-6 font-display text-2xl font-bold text-medical-900">
              ¡Solicitud enviada con éxito!
            </h2>
            <p className="mt-3 text-slate-600">
              Nos pondremos en contacto contigo en menos de 2 horas para confirmar tu
              cita. También puedes escribirnos por WhatsApp.
            </p>
            <Button href={CLINIC.whatsapp} variant="whatsapp" className="mt-8">
              Ir a WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="cita" className="section-padding bg-medical-50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Agenda tu cita"
          title="Solicita tu evaluación médica"
          subtitle="Completa el formulario y nuestro equipo te contactará para confirmar fecha y hora."
        />

        <ScrollReveal>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-card border border-slate-100"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label htmlFor="nombre" className="block text-sm font-semibold text-medical-900 mb-2">
                  Nombre completo *
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={data.nombre}
                  onChange={(e) => update('nombre', e.target.value)}
                  className={inputClass('nombre')}
                  placeholder="Ej. María González"
                  aria-invalid={!!errors.nombre}
                  aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                />
                {errors.nombre && (
                  <p id="nombre-error" className="mt-1 text-sm text-red-500" role="alert">
                    {errors.nombre}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-medical-900 mb-2">
                  Correo electrónico *
                </label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={inputClass('email')}
                  placeholder="correo@ejemplo.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-medical-900 mb-2">
                  Teléfono *
                </label>
                <input
                  id="telefono"
                  type="tel"
                  value={data.telefono}
                  onChange={(e) => update('telefono', e.target.value)}
                  className={inputClass('telefono')}
                  placeholder="932 327 110"
                  aria-invalid={!!errors.telefono}
                />
                {errors.telefono && (
                  <p className="mt-1 text-sm text-red-500" role="alert">
                    {errors.telefono}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="especialidad" className="block text-sm font-semibold text-medical-900 mb-2">
                  Especialidad *
                </label>
                <select
                  id="especialidad"
                  value={data.especialidad}
                  onChange={(e) => update('especialidad', e.target.value)}
                  className={inputClass('especialidad')}
                  aria-invalid={!!errors.especialidad}
                >
                  <option value="">Seleccionar...</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.especialidad && (
                  <p className="mt-1 text-sm text-red-500" role="alert">
                    {errors.especialidad}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="fecha" className="block text-sm font-semibold text-medical-900 mb-2">
                  Fecha preferida *
                </label>
                <input
                  id="fecha"
                  type="date"
                  value={data.fecha}
                  onChange={(e) => update('fecha', e.target.value)}
                  className={inputClass('fecha')}
                  min={new Date().toISOString().split('T')[0]}
                  aria-invalid={!!errors.fecha}
                />
                {errors.fecha && (
                  <p className="mt-1 text-sm text-red-500" role="alert">
                    {errors.fecha}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="block text-sm font-semibold text-medical-900 mb-2">
                  Motivo de consulta (opcional)
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  value={data.mensaje}
                  onChange={(e) => update('mensaje', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-medical-500 resize-none"
                  placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
                />
              </div>
            </div>

            {submitError && (
              <p
                className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm"
                role="alert"
              >
                {submitError}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-8"
              icon={<Send size={20} />}
            >
              {loading ? 'Enviando...' : 'Solicitar evaluación médica'}
            </Button>

            <p className="mt-4 text-center text-xs text-slate-500">
              Al enviar aceptas nuestra política de privacidad. Tus datos están protegidos.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
