import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { siteData } from '../../data/siteData'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[var(--color-text-primary)]">
              {siteData.business.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {siteData.navbar.items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-cyan-400'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm font-semibold hover:-translate-y-0.5 transition-transform"
            >
              {siteData.navbar.ctaText}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--color-text-primary)]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-4">
              {siteData.navbar.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium ${
                    isActive(item.href)
                      ? 'text-cyan-400'
                      : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-sm font-semibold"
              >
                {siteData.navbar.ctaText}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
