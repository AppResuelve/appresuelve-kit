import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react'
import { siteData } from '../../data/siteData'

export function Footer({ data }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
              {siteData.company.name}
            </h3>
            <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-md mb-6">
              {siteData.company.description}
            </p>
            
            <div className="flex gap-4">
              {siteData.company.instagram && (
                <a href={siteData.company.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-cyan-400 hover:border-cyan-400/40 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteData.company.facebook && (
                <a href={siteData.company.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-cyan-400 hover:border-cyan-400/40 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteData.company.linkedin && (
                <a href={siteData.company.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-cyan-400 hover:border-cyan-400/40 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {siteData.company.whatsapp && (
                <a href={`https://wa.me/${siteData.company.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[#25D366] hover:border-[#25D366]/40 transition-all">
                  <MessageCircle className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400 mb-6">
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
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400 mb-6">
              {siteData.company.ctaText}
            </h4>
            <a
              href={`https://wa.me/${siteData.company.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            © {currentYear} {siteData.company.name}. Todos los derechos reservados.
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Hecho con ❤️ por AppResuelve
          </p>
        </div>
      </div>
    </footer>
  )
}