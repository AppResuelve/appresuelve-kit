import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useStore } from './context/StoreContext'
import { Navbar, Footer } from './components/layout'
import { ScrollToTop } from './ScrollToTop'
import { StoreBlocked } from './components/StoreBlocked'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { TopBanner } from './components/shared/TopBanner'
import { FloatingWhatsAppButton } from './components/ui/FloatingWhatsAppButton'
import { generatePalette, applyPalette } from './utils/generatePalette'

export default function StorePages() {
  const { store, loading } = useStore()

  useEffect(() => {
    if (store?.primary_color) {
      const palette = generatePalette({
        primaryColor: store.primary_color,
        secondaryColor: store.secondary_color,
      })
      applyPalette(palette)
    }
  }, [store])

  if (loading) return null

  const status = store?.store_status || 'active'

  if (status !== 'active') {
    return <StoreBlocked status={status} />
  }

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <TopBanner
          text="¡Aprovechá con un 24% OFF hasta el 15/6!"
          backgroundColor="#022179"
          textColor="#ffffff"
          dismissible={true}
        />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/producto/:slug" element={<ProductDetail />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </>
  )
}
