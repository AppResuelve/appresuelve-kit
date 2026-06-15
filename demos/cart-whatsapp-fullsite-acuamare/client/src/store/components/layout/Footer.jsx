import { Link } from 'react-router-dom'
import { MapPin, Mail, MessageCircle } from 'lucide-react'
import { siteData } from '../../../data/siteData'
import { useStore } from '../../context/StoreContext'

export function Footer() {
  const { store, categories } = useStore()
  const currentYear = new Date().getFullYear()
  const whatsappNumber = (store?.whatsapp_number || '').replace(/\D/g, '')

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
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
            </ul>
          </div>

          {/* Horarios + Redes */}
          <div>
            {/* Horarios */}
            {store?.business_hours && (
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
                  Horarios
                </h4>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  {store.business_hours.split(' / ').map((block, i) => {
                    const parts = block.split(/\s+-\s+|\s+–\s+|\s+a\s+/)
                    const days = parts[0]?.trim()
                    const time = parts[1]?.trim()
                    return (
                      <li key={i} className="flex flex-col gap-0.5">
                        {days && <span className="font-semibold text-[var(--color-text-primary)]">{days}</span>}
                        {time && <span className="text-xs opacity-80 bg-[var(--color-primary)]/10 px-2 py-0.5 rounded-md inline-block w-fit">{time}</span>}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* Redes */}
            {(store?.instagram || store?.facebook || store?.tiktok || store?.youtube) && (
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
                  Síguenos
                </h4>
                <div className="flex gap-3 flex-wrap">
                  {store?.instagram && (
                    <a href={store.instagram} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                      style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  )}
                  {store?.facebook && (
                    <a href={store.facebook} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                      style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  )}
                  {store?.tiktok && (
                    <a href={store.tiktok} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                      style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                      </svg>
                    </a>
                  )}
                  {store?.youtube && (
                    <a href={store.youtube} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                      style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 11.75a29.94 29.94 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29.94 29.94 0 0 0 .46-5.25 29.94 29.94 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  )}
                </div>
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
