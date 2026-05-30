import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Tag } from 'lucide-react'
import { siteData, content } from '../data/siteData'
import { products, getProductBySlug, getProductsByCategory } from '../data/products'
import { ProductGallery } from '../components/ProductGallery'
import { ProductGrid } from '../components/ProductGrid'
import { Badge } from '../components/ui/Badge'
import { ButtonWhatsApp } from '../components/ui/Button'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
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

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa el producto: ${product.name} - ${product.price}`
  )
  const whatsappLink = `https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}?text=${whatsappMessage}`

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

            {siteData.catalog.showPrices && (
              <div className="mb-8">
                <span className="text-4xl font-bold text-cyan-400">
                  {product.price}
                </span>
              </div>
            )}

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

            <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] mb-8">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                {content.productDetail.contactTitle}
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                {content.productDetail.contactSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contactar por WhatsApp
                </a>
                <Link
                  to={`/contacto?product=${product.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold hover:border-cyan-500/50 transition-colors"
                >
                  Enviar consulta
                </Link>
              </div>
            </div>
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
