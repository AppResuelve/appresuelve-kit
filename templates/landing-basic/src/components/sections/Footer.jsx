import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react'
import { siteData } from '../../data/siteData'

export function Footer({ data }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
              {siteData.company.name}
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
              {siteData.company.description}
            </p>
            <div className="flex gap-4">
              {siteData.company.instagram && (
                <a
                  href={siteData.company.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteData.company.whatsapp && (
                <a
                  href={`https://wa.me/${siteData.company.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[#25D366] hover:border-[#25D366]/40 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400 mb-4">
              Contacto
            </h4>
            <div className="space-y-4">
              {siteData.company.address && (
                <div className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                  <MapPin className="w-4 h-4 shrink-0 mt-1" />
                  <span>{siteData.company.address}</span>
                </div>
              )}
              {siteData.company.phone && (
                <a href={`tel:${siteData.company.phone}`} className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>{siteData.company.phone}</span>
                </a>
              )}
              {siteData.company.email && (
                <a href={`mailto:${siteData.company.email}`} className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{siteData.company.email}</span>
                </a>
              )}
              {siteData.company.businessHours && (
                <div className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                  <Clock className="w-4 h-4 shrink-0 mt-1" />
                  <span>{siteData.company.businessHours}</span>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400 mb-4">
              {siteData.company.ctaText}
            </h4>
            <a
              href={`https://wa.me/${siteData.company.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] text-white font-semibold hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            © {currentYear} {siteData.company.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}