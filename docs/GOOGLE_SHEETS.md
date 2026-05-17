# Conectar el formulario de citas con Google Sheets

Cada envío del formulario **Reservar cita** se guarda como una fila nueva en tu hoja de Google.

## Paso 1 — Crear la hoja

1. Abre [Google Sheets](https://sheets.google.com) y crea una hoja nueva (ej. `Citas Clínica del Dolor`).
2. Opcional: en la primera fila escribe los encabezados (el script también puede crearlos solos):
   - `Fecha registro` | `Nombre` | `Email` | `Teléfono` | `Especialidad` | `Fecha preferida` | `Mensaje`

## Paso 2 — Apps Script

1. En la hoja: **Extensiones** → **Apps Script**.
2. Borra el código por defecto y pega el contenido de `google-apps-script/Code.gs` del proyecto.
3. Edita `SECRET_TOKEN` y pon una clave larga y difícil de adivinar (guárdala, la usarás en `.env`).

## Paso 3 — Publicar como aplicación web

1. **Implementar** → **Nueva implementación**.
2. Tipo: **Aplicación web**.
3. **Ejecutar como:** Yo (tu cuenta).
4. **Quién tiene acceso:** Cualquier persona.
5. **Implementar** y autoriza los permisos (acceso a la hoja).
6. Copia la **URL de la aplicación web** (termina en `/exec`).

## Paso 4 — Configurar el proyecto

En la raíz del proyecto crea un archivo `.env` (copia de `.env.example`):

```env
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/XXXXXXXX/exec
VITE_GOOGLE_SHEETS_TOKEN=la_misma_clave_que_SECRET_TOKEN
```

Reinicia el servidor de desarrollo:

```bash
npm run dev
```

## Paso 5 — Probar

1. Envía el formulario en la landing.
2. Revisa la pestaña **Citas** (o la hoja activa) en Google Sheets: debe aparecer una fila nueva.

## Despliegue (Vercel, Netlify, etc.)

Añade las mismas variables en el panel del hosting:

- `VITE_GOOGLE_SHEETS_URL`
- `VITE_GOOGLE_SHEETS_TOKEN`

Vuelve a desplegar después de guardarlas.

## Notas

- El formulario usa `mode: no-cors` porque Google Apps Script no devuelve CORS estándar; los datos **sí se guardan** aunque el navegador no lea la respuesta.
- No subas `.env` a GitHub (ya está en `.gitignore`).
- Si cambias el script, crea una **nueva implementación** y actualiza la URL si cambia.
