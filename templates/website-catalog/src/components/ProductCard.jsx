import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Badge } from './ui/Badge'
import { siteData } from '../data/siteData'

export function ProductCard({ product }) {
  const { catalog } = siteData
  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el producto: ${product.name} - ${product.price}`
  )
  const whatsappLink = `https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}?text=${whatsappMessage}`

  const getBadgeVariant = (tag) => {
    if (tag === 'nuevo') return 'new'
    if (tag === 'oferta') return 'sale'
    if (tag === 'bestseller') return 'bestseller'
    return 'default'
  }

  return (
    <div className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden hover:border-cyan-500/30 transition-all duration-300 flex flex-col">
      <div className="relative">
        <Link to={`/productos/${product.slug}`} className="block">
          <div className="aspect-square overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {product.tags.length > 0 && (
            <div className="absolute top-3 left-3 flex gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant={getBadgeVariant(tag)}>
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </Link>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-[var(--color-text-muted)] mb-1">
          {product.category}
        </p>
        <Link to={`/productos/${product.slug}`} className="block flex-1">
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-cyan-400 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto pt-4">
          {catalog.showPrices && (
            <span className="text-lg font-bold text-cyan-400 block mb-3">
              {product.price}
            </span>
          )}

          {catalog.ctaType === 'whatsapp' ? (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          ) : (
            <Link
              to={`/contacto?product=${product.slug}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-600 transition-colors"
            >
              Consultar
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
