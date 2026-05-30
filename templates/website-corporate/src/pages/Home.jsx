import * as LucideIcons from 'lucide-react'
import { siteData, content } from '../data/siteData'
import { Navbar, Footer } from '../components/layout'
import { Badge, ButtonPrimary, ButtonSecondary, SectionHeader } from '../components/ui'

export function Home() {
  const { hero, features, stats, cta } = content.home

  return (
    <>
      <Navbar />
      
      {/* HERO */}
      <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {hero.badge && <Badge>{hero.badge}</Badge>}
            
            <h1 className="mt-10 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[var(--color-text-primary)]">
              {hero.title}
              <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                {hero.highlightedText}
              </span>
            </h1>

            <p className="mt-8 text-xl text-[var(--color-text-secondary)] leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {hero.primaryButtonText && (
                <ButtonPrimary href={hero.primaryButtonLink}>
                  {hero.primaryButtonText}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </ButtonPrimary>
              )}
              {hero.secondaryButtonText && (
                <ButtonSecondary href={hero.secondaryButtonLink}>
                  {hero.secondaryButtonText}
                </ButtonSecondary>
              )}
            </div>

            {/* Stats */}
            {stats && (
              <div className="mt-16 grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Por qué elegirnos"
            subtitle="Todo lo que necesitás para tener presencia online profesional"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = LucideIcons[feature.icon] || LucideIcons.Check
              return (
                <div
                  key={index}
                  className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 hover:-translate-y-1 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[var(--color-border)] flex items-center justify-center text-3xl mb-6">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{feature.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      {cta && (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <SectionHeader
              title={cta.title}
              subtitle={cta.subtitle}
              className="mx-auto mb-10"
              align="center"
            />
            {cta.buttonText && (
              <ButtonPrimary href={cta.buttonLink}>
                {cta.buttonText}
              </ButtonPrimary>
            )}
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}