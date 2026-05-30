import * as LucideIcons from 'lucide-react'
import { siteData, content } from '../data/siteData'
import { Navbar, Footer } from '../components/layout'
import { Badge, SectionHeader, ButtonPrimary } from '../components/ui'

export function About() {
  const { badge, title, description, mission, values, features } = content.about

  return (
    <>
      <Navbar />
      
      {/* HERO */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
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
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      {mission && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-400 mb-4">Nuestra misión</p>
            <p className="text-2xl sm:text-3xl font-light text-[var(--color-text-primary)] leading-relaxed">
              "{mission}"
            </p>
          </div>
        </section>
      )}

      {/* VALUES */}
      {values && (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Nuestros valores"
              subtitle="Los principios que guían nuestro trabajo"
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = LucideIcons[value.icon] || LucideIcons.Check
                return (
                  <div
                    key={index}
                    className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 text-center hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[var(--color-border)] flex items-center justify-center mx-auto mb-5">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{value.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {features && (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Cómo trabajamos"
              subtitle="Lo que nos diferencia"
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = LucideIcons[feature.icon] || LucideIcons.Check
                return (
                  <div
                    key={index}
                    className="flex items-start gap-5 p-8 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{feature.title}</h3>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader
            title="¿Querés trabajar con nosotros?"
            subtitle="Contactanos y te contamos cómo podemos ayudarte a crecer online."
            className="mx-auto mb-10"
            align="center"
          />
          <ButtonPrimary href="/contacto">
            Contacto
          </ButtonPrimary>
        </div>
      </section>

      <Footer />
    </>
  )
}