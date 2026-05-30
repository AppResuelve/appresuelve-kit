import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Tag, Check } from 'lucide-react'
import { content } from '../data/siteData'
import { products, getProductBySlug, getProductsByCategory } from '../data/products'
import { ProductGallery } from '../components/ProductGallery'
import { ProductGrid } from '../components/ProductGrid'
import { Badge } from '../components/ui/Badge'
import { useCart } from '../context/CartContext'
import { useState } from 'react'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem, getItemQuantity } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <section className="pt-20 md:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            Producto no encontrado
          </h1>
          <Link
            to="/productos"
            className="text-cyan-400 font-medium hover:underline"
          >
            Volver a productos
          </Link>
        </div>
      </section>
    )
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addItem(product.id)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  const quantity = getItemQuantity(product.id)

  return (
    <section className="pt-20 md:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {content.productDetail.backTo}
        </button>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <ProductGallery images={product.images} productName={product.name} />

          <div>
            <div className="mb-6">
              <p className="text-sm text-[var(--color-text-muted)] mb-2">
                {content.productDetail.categoryLabel}
              </p>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              {product.name}
            </h1>

            <p className="text-lg text-[var(--color-text-secondary)] mb-6">
              {product.shortDescription}
            </p>

            <div className="mb-8">
              <span className="text-4xl font-bold text-cyan-400">
                {product.price}
              </span>
            </div>

            {product.tags.length > 0 && (
              <div className="mb-8">
                <p className="text-sm text-[var(--color-text-muted)] mb-3 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {content.productDetail.tagsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="prose prose-invert mb-8">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {product.description}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className={`flex items-center justify-center gap-2 w-full px-8 py-4 rounded-2xl font-semibold transition-all ${
                justAdded
                  ? 'bg-emerald-500 text-white'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  {content.productDetail.addedToCart}
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {content.productDetail.addToCart}
                  {quantity > 0 && ` (${quantity} en carrito)`}
                </>
              )}
            </button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
              {content.productDetail.relatedTitle}
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </section>
  )
}
