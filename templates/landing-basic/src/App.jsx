import { siteData } from './data/siteData'
import { Hero, Benefits, Services, Gallery, FAQ, CTAFinal, Footer } from './components/sections'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Hero data={siteData.hero} />
      <Benefits data={siteData.benefits} />
      <Services data={siteData.services} />
      <Gallery data={siteData.gallery} />
      <FAQ data={siteData.faq} />
      <CTAFinal data={siteData.cta} />
      <Footer />
    </div>
  )
}

export default App