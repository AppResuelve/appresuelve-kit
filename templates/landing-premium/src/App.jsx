import { siteData } from './data/siteData'
import { Hero, About, Services, Process, Gallery, Testimonials, FAQ, CTA, Footer } from './components/sections'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Hero data={siteData.hero} />
      <About data={siteData.about} />
      <Services data={siteData.services} />
      <Process data={siteData.process} />
      <Gallery data={siteData.gallery} />
      <Testimonials data={siteData.testimonials} />
      <FAQ data={siteData.faq} />
      <CTA data={siteData.cta} />
      <Footer />
    </div>
  )
}

export default App