# Clínica del Dolor — Landing Page

Landing page premium para clínica médica privada. React 18, TypeScript, Tailwind CSS y Framer Motion.

## Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Formulario → Google Sheets

Las citas del formulario se guardan en Google Sheets vía Apps Script. Guía completa: **[docs/GOOGLE_SHEETS.md](docs/GOOGLE_SHEETS.md)**

```bash
cp .env.example .env
# Edita .env con la URL del script y el token secreto
```

## Personalización

Edita `src/data/clinic.ts` para actualizar:

- Nombre, teléfono, email y dirección
- Enlace de WhatsApp (`phoneRaw` sin espacios ni símbolos)
- Horarios y redes sociales
- Contenido de especialidades, testimonios y FAQ

## Build producción

```bash
npm run build
npm run preview
```

## Estructura

- `src/components/sections/` — Secciones de la landing
- `src/components/ui/` — Botones, animaciones, contadores
- `src/components/layout/` — Navbar, Footer, Loader
- `src/components/floating/` — WhatsApp y Emergencia 24/7
- `src/data/clinic.ts` — Datos centralizados
