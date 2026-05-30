import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteData, content } from '../data/siteData'
import { ContactForm } from '../components/ContactForm'
import { SectionHeader } from '../components/ui/SectionHeader'

export default function Contact() {
  const { badge, title, subtitle, infoTitle } = content.contact

  return (
    <>
      <section className="relative pt-20 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
                {badge}
              </span>
            )}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[var(--color-text-primary)] mb-6">
              {title}
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />

            <div>
              <SectionHeader title={infoTitle} className="mb-10" />

              <div className="space-y-6">
                {siteData.company.address && (
                  <div className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-text-muted)] mb-1">
                        Dirección
                      </p>
                      <p className="text-[var(--color-text-primary)]">
                        {siteData.company.address}
                      </p>
                    </div>
                  </div>
                )}

                {siteData.company.phone && (
                  <a
                    href={`tel:${siteData.company.phone}`}
                    className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-text-muted)] mb-1">
                        Teléfono
                      </p>
                      <p className="text-[var(--color-text-primary)]">
                        {siteData.company.phone}
                      </p>
                    </div>
                  </a>
                )}

                {siteData.company.email && (
                  <a
                    href={`mailto:${siteData.company.email}`}
                    className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-text-muted)] mb-1">
                        Email
                      </p>
                      <p className="text-[var(--color-text-primary)]">
                        {siteData.company.email}
                      </p>
                    </div>
                  </a>
                )}

                {siteData.company.businessHours && (
                  <div className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-text-muted)] mb-1">
                        Horarios
                      </p>
                      <p className="text-[var(--color-text-primary)]">
                        {siteData.company.businessHours}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
