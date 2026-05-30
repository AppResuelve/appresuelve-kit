import * as LucideIcons from 'lucide-react'
import { SectionHeader, ButtonWhatsApp } from '../ui'
import { siteData } from '../../data/siteData'

export function Services({ data }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Servicios"
          title="Soluciones pensadas para tu negocio"
          subtitle="Elegí el plan que mejor se adapte a vos."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {data.map((service, index) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.Star
            return (
              <div
                key={index}
                className="group rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 hover:border-cyan-500/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[var(--color-border)] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-black text-[var(--color-text-primary)] mb-4">{service.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">{service.description}</p>
                <ButtonWhatsApp href={`https://wa.me/${siteData.company.whatsapp.replace(/\D/g, '')}?text=Hola, me interesa el servicio: ${service.title}`}>
                  Solicitar
                </ButtonWhatsApp>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}