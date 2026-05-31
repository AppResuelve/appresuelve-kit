import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Badge } from './ui/Badge'
import { useCart } from '../context/CartContext'
import { siteData } from '../data/siteData'

export function ProductCard({ product }) {
  const { addItem, getItemQuantity } = useCart()
  const quantity = getItemQuantity(product.id)

  const getBadgeVariant = (tag) => {
    if (tag === 'nuevo') return 'new'
    if (tag === 'oferta') return 'sale'
    if (tag === 'bestseller') return 'bestseller'
    return 'default'
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    addItem(product.id)
  }

  return (
    <div className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden hover:border-[var(--color-primary)]/30 transition-all duration-300 flex flex-col">
      <div className="relative">
        <Link to={`/producto/${product.slug}`} className="block">
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
        <Link to={`/producto/${product.slug}`} className="block flex-1">
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto pt-4">
          <span className="text-lg font-bold text-[var(--color-primary)] block mb-3">
            {product.price}
          </span>

          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[var(--color-primary)] text-white text-sm font-semibold hover:opacity-90 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {quantity > 0 ? `Agregado (${quantity})` : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  )
}
