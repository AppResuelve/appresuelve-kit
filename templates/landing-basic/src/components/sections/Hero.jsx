import { Badge, ButtonPrimary, ButtonSecondary } from '../ui'

export function Hero({ data }) {
  return (
    <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl">
        {data.badge && <Badge>{data.badge}</Badge>}

        <h1 className="mt-10 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[var(--color-text-primary)]">
          {data.title}
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            {data.highlightedText}
          </span>
          <span className="block mt-1">{data.subtitle}</span>
        </h1>

        <div className="mt-10 flex flex-wrap gap-4">
          {data.primaryButtonText && (
            <ButtonPrimary href={data.primaryButtonLink}>
              {data.primaryButtonText}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </ButtonPrimary>
          )}
          {data.secondaryButtonText && (
            <ButtonSecondary href={data.secondaryButtonLink}>
              {data.secondaryButtonText}
            </ButtonSecondary>
          )}
        </div>
      </div>
    </section>
  )
}