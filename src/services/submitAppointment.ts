export interface AppointmentPayload {
  nombre: string
  email: string
  telefono: string
  especialidad: string
  fecha: string
  mensaje: string
}

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL ?? ''
const SCRIPT_TOKEN = import.meta.env.VITE_GOOGLE_SHEETS_TOKEN ?? ''

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(SCRIPT_URL.trim() && SCRIPT_TOKEN.trim())
}

/**
 * Envío en segundo plano (sin iframe, sin popup).
 * mode: 'no-cors' — el navegador no muestra la respuesta de Google.
 */
export async function submitAppointmentToSheet(
  data: AppointmentPayload
): Promise<void> {
  if (!isGoogleSheetsConfigured()) {
    throw new Error(
      'Google Sheets no está configurado. Añade VITE_GOOGLE_SHEETS_URL y VITE_GOOGLE_SHEETS_TOKEN en el archivo .env'
    )
  }

  const body = new URLSearchParams({
    token: SCRIPT_TOKEN,
    nombre: data.nombre.trim(),
    email: data.email.trim(),
    telefono: data.telefono.trim(),
    especialidad: data.especialidad,
    fecha: data.fecha,
    mensaje: data.mensaje.trim(),
  })

  await fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    body,
  })
}
