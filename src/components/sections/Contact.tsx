import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { CLINIC } from '../../data/clinic'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'

export function Contact() {
  return (
    <section id="contacto" className="section-padding bg-white relative">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal direction="left">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-health-500 mb-3">
                Contacto
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-medical-900 mb-6">
                Estamos aquí para ayudarte
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Agenda tu consulta con nuestros especialistas o contáctanos para
                resolver cualquier duda sobre nuestros tratamientos.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-medical-900 mb-1">
                      Dirección
                    </h3>
                    <p className="text-slate-600">{CLINIC.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-medical-900 mb-1">
                      Teléfonos
                    </h3>
                    <div className="flex flex-col gap-1">
                      <a
                        href={`tel:${CLINIC.phone1Raw}`}
                        className="text-slate-600 hover:text-medical-600 transition-colors"
                      >
                        {CLINIC.phone1}
                      </a>
                      <a
                        href={`tel:${CLINIC.phone2Raw}`}
                        className="text-slate-600 hover:text-medical-600 transition-colors"
                      >
                        {CLINIC.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-medical-900 mb-1">
                      Correo Electrónico
                    </h3>
                    <a
                      href={`mailto:${CLINIC.email}`}
                      className="text-slate-600 hover:text-medical-600 transition-colors"
                    >
                      {CLINIC.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-medical-50 text-medical-600 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-medical-900 mb-1">
                      Horario de Atención
                    </h3>
                    <p className="text-slate-600">{CLINIC.hours.schedule}</p>
                    <p className="text-slate-600 font-medium">
                      {CLINIC.hours.time}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100">
                <Button
                  href={CLINIC.whatsapp}
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Escríbenos por WhatsApp
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="h-full min-h-[400px]">
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-card border border-slate-200">
              <iframe
                title="Ubicación Clínica del Dolor Huánuco"
                src={CLINIC.mapsEmbed}
                className="w-full h-full min-h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
