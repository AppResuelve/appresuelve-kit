import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react'
import { siteData } from '../../data/siteData'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              {siteData.company.logo ? (
                <img src={siteData.company.logo} alt={siteData.business.name} className="w-10 h-10 object-contain" />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {siteData.business.name.charAt(0)}
                </div>
              )}
              <span className="text-xl font-bold text-[var(--color-text-primary)]">
                {siteData.business.name}
              </span>
            </Link>
            <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-md mb-6">
              {siteData.company.description}
            </p>
            
            {/* Social */}
            <div className="flex gap-4">
              {siteData.company.social.instagram && (
                <a href={siteData.company.social.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-cyan-400 hover:border-cyan-400/40 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteData.company.social.facebook && (
                <a href={siteData.company.social.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-cyan-400 hover:border-cyan-400/40 transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteData.company.social.linkedin && (
                <a href={siteData.company.social.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-cyan-400 hover:border-cyan-400/40 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Columns */}
          {siteData.footer.columns.map((column, index) => (
            <div key={index}>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400 mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-cyan-400 mb-4">
              Contacto
            </h4>
            <div className="space-y-3">
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
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            © {currentYear} {siteData.business.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}