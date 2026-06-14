import { Link } from 'react-router-dom'
import { MapPin, Mail, Clock, MessageCircle } from 'lucide-react'
import { siteData } from '../../../data/siteData'
import { useStore } from '../../context/StoreContext'

export function Footer() {
  const { store, categories } = useStore()
  const currentYear = new Date().getFullYear()
  const whatsappNumber = (store?.whatsapp_number || '').replace(/\D/g, '')

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {store?.logo_url ? (
                <img
                  src={store?.logo_url}
                  alt={store?.business_name || ''}
                  className="h-20 w-auto rounded-md object-contain"
                />
              ) : (
                <div className="w-20 h-20 rounded-md bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {(store?.business_name || '')[0] || 'A'}
                  </span>
                </div>
              )}
              {(!siteData.navbar.logoOnly) && (
                <span className="text-xl font-bold text-[var(--color-text-primary)]">
                  {store?.business_name || ''}
                </span>
              )}
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm mb-6">
              {store?.description || ''}
            </p>
          </div>

          {/* Navegación */}
          {siteData.footer.columns.map((column, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Categorías desde API */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
              Categorías
            </h4>
            {categories.length > 0 ? (
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to={`/productos?cat=${encodeURIComponent(cat.name)}`}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-[var(--color-text-muted)]">Cargando...</p>
            )}
          </div>

          {/* Contacto desde API */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-4">
              {whatsappNumber && (
                <li>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                    <span>WhatsApp</span>
                  </a>
                </li>
              )}
              {store?.address && (
                <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                  <MapPin className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                  <span>{store?.address}</span>
                </li>
              )}
              {store?.email && (
                <li>
                  <a
                    href={`mailto:${store?.email}`}
                    className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <Mail className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                    <span>{store?.email}</span>
                  </a>
                </li>
              )}
              {store?.business_hours && (
                <li className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                  <Clock className="w-5 h-5 shrink-0 text-[var(--color-primary)]" />
                  <span>{store?.business_hours}</span>
                </li>
              )}
            </ul>

            {/* Redes */}
            {(store?.instagram || store?.facebook) && (
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[var(--color-border)]">
                {store?.instagram && (
                  <a
                    href={store.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Instagram
                  </a>
                )}
                {store?.facebook && (
                  <a
                    href={store.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    Facebook
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-text-muted)] text-center">
            © {currentYear} {store?.business_name || ''}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
