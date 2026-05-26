import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, ChevronRight, Stethoscope } from 'lucide-react'
import { useState } from 'react'
import { SERVICES } from '../../data/clinic'
import { getIcon } from '../../utils/icons'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id)

  const activeService = SERVICES.find((s) => s.id === activeTab)

  return (
    <section id="servicios" className="section-padding bg-slate-50">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Nuestros Servicios"
          title="Atención médica integral en un solo lugar"
          subtitle="Ofrecemos un enfoque completo para el diagnóstico, tratamiento y rehabilitación de patologías del dolor y sistema musculoesquelético."
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12">
          {/* Tabs Sidebar */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`relative flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 focus:outline-none ${
                  activeTab === service.id
                    ? 'bg-white shadow-card ring-1 ring-slate-100'
                    : 'hover:bg-white/60 text-slate-600 hover:text-medical-900'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    activeTab === service.id
                      ? `bg-gradient-to-br ${service.color} text-white shadow-soft`
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {getIcon(service.icon, 'w-6 h-6')}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-display font-bold text-lg ${
                      activeTab === service.id ? 'text-medical-900' : ''
                    }`}
                  >
                    {service.title}
                  </h3>
                  {service.doctor && (
                    <p
                      className={`text-sm mt-0.5 ${
                        activeTab === service.id ? 'text-medical-600' : 'text-slate-500'
                      }`}
                    >
                      {service.doctor}
                    </p>
                  )}
                </div>
                <ChevronRight
                  size={20}
                  className={`transition-transform duration-300 ${
                    activeTab === service.id
                      ? 'text-medical-600 translate-x-1'
                      : 'text-slate-300'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-100 h-full"
                >
                  <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeService.color} text-white flex items-center justify-center shadow-soft`}
                    >
                      {getIcon(activeService.icon, 'w-8 h-8')}
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-medical-900">
                        {activeService.title}
                      </h2>
                      {activeService.doctor && (
                        <div className="flex items-center gap-2 text-medical-600 mt-2 font-medium">
                          <Stethoscope size={18} />
                          <span>{activeService.doctor}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-10">
                    <div>
                      <h4 className="font-display font-bold text-lg text-medical-900 mb-5 flex items-center gap-2">
                        <span className="w-8 h-px bg-medical-200" />
                        Servicios
                      </h4>
                      <ul className="space-y-3">
                        {activeService.services.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-700 leading-relaxed"
                          >
                            <CheckCircle2
                              className="text-health-500 mt-1 flex-shrink-0"
                              size={18}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-lg text-medical-900 mb-5 flex items-center gap-2">
                        <span className="w-8 h-px bg-medical-200" />
                        Patologías
                      </h4>
                      <ul className="space-y-3">
                        {activeService.pathologies.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-600 leading-relaxed"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-medical-400 mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
