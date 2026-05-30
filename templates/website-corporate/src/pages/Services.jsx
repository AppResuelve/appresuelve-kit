import * as LucideIcons from 'lucide-react'
import { content } from '../data/siteData'
import { Navbar, Footer } from '../components/layout'
import { Badge, SectionHeader } from '../components/ui'
import { ButtonPrimary } from '../components/ui'

export function Services() {
  const { badge, title, subtitle, list, processTitle, process } = content.services

  return (
    <>
      <Navbar />
      
      {/* HERO */}
      <section className="relative pt-20 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {badge && <Badge>{badge}</Badge>}
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[var(--color-text-primary)]">
              {title}
            </h1>
            <p className="mt-8 text-xl text-[var(--color-text-secondary)] leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {list.map((service, index) => {
              const IconComponent = LucideIcons[service.icon] || LucideIcons.Star
              return (
                <div
                  key={index}
                  className="group rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 hover:border-cyan-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[var(--color-border)] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-black text-[var(--color-text-primary)] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features?.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      {process && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title={processTitle}
              subtitle="Un proceso transparente y eficiente"
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative text-center">
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[55%] w-[90%] h-[2px] bg-gradient-to-r from-cyan-400/30 to-blue-600/30" />
                  )}
                  <div className="w-20 h-20 rounded-full border-2 border-cyan-400/30 bg-[var(--color-card)] flex items-center justify-center mx-auto mb-5 relative">
                    <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                      {step.step}
                    </span>
                    <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader
            title="¿Necesitás algo específico?"
            subtitle="Conversemos sobre tu proyecto y encontremos la mejor solución."
            className="mx-auto mb-10"
            align="center"
          />
          <ButtonPrimary href="/contacto">
            Solicitar presupuesto
          </ButtonPrimary>
        </div>
      </section>

      <Footer />
    </>
  )
}