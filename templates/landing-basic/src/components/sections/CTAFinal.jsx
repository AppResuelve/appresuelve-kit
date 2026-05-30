import { ButtonWhatsApp } from '../ui'
import { siteData } from '../../data/siteData'

export function CTAFinal({ data }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-card)] p-12 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-80px] left-[-80px] w-[200px] h-[200px] rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute bottom-[-80px] right-[-80px] w-[200px] h-[200px] rounded-full bg-blue-600/10 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-black text-[var(--color-text-primary)] leading-tight">
              {data.title}
            </h2>
            <p className="mt-5 text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
              {data.subtitle}
            </p>
            <div className="mt-10">
              <ButtonWhatsApp href={`https://wa.me/${siteData.company.whatsapp.replace(/\D/g, '')}`}>
                {data.buttonText}
              </ButtonWhatsApp>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}