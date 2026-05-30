import * as LucideIcons from 'lucide-react'
import { SectionHeader } from '../ui'

export function Benefits({ data }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Beneficios"
          title="Todo lo que tu negocio necesita"
          subtitle="Te ayudamos a crecer con las mejores herramientas."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((benefit, index) => {
            const IconComponent = LucideIcons[benefit.icon] || LucideIcons.Star
            return (
              <div
                key={index}
                className="group rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-7 hover:-translate-y-1.5 hover:border-cyan-500/30 hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[var(--color-border)] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{benefit.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}