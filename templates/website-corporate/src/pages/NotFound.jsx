import { Link } from 'react-router-dom'
import { content } from '../data/siteData'
import { Navbar, Footer } from '../components/layout'
import { ButtonPrimary } from '../components/ui'

export function NotFound() {
  const { title, subtitle, message, buttonText, buttonLink } = content.notFound

  return (
    <>
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {title}
          </p>
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
            {subtitle}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            {message}
          </p>
          <div className="mt-10">
            <ButtonPrimary href={buttonLink}>
              {buttonText}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </ButtonPrimary>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}