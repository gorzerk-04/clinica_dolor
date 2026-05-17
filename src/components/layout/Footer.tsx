import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react'
import { CLINIC, NAV_LINKS } from '../../data/clinic'

const socialIcons = [
  { icon: Facebook, href: CLINIC.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: CLINIC.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: CLINIC.social.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: CLINIC.social.youtube, label: 'YouTube' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-medical-900 text-blue-100">
      <div className="container-narrow section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-health-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <span className="font-display font-bold text-xl text-white">
                {CLINIC.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-blue-200/80">
              Atención médica integral con calidez humana y tecnología de vanguardia.
              Tu salud, nuestra prioridad.
            </p>
            <div className="flex gap-3 mt-6">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-health-500 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-health-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="flex-shrink-0 text-health-400 mt-0.5" />
                <span>{CLINIC.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="flex-shrink-0 text-health-400" />
                <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-white transition-colors">
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="flex-shrink-0 text-health-400" />
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CLINIC.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="flex-shrink-0 text-health-400 mt-0.5" />
                <div>
                  <p>{CLINIC.hours.weekdays}</p>
                  <p>{CLINIC.hours.saturday}</p>
                  <p className="text-health-400 font-semibold mt-1">
                    {CLINIC.hours.emergency}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Ubicación</h3>
            <div className="rounded-xl overflow-hidden h-48 bg-medical-800">
              <iframe
                title="Ubicación de Clínica del Dolor en Google Maps"
                src={CLINIC.mapsEmbed}
                className="w-full h-full border-0 grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-blue-200/60">
          <p>© {currentYear} {CLINIC.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Aviso de privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
