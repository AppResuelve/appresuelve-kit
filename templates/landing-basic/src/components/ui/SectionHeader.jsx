export function SectionHeader({ label, title, subtitle, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {label && (
        <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-400 mb-4">
          {label}
        </p>
      )}
      {title && (
        <h2 className="text-4xl sm:text-5xl font-black text-[var(--color-text-primary)] leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-5 text-lg text-[var(--color-text-secondary)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}