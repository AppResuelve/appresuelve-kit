export function SectionHeader({
  badge,
  title,
  subtitle,
  className = '',
}) {
  return (
    <div className={`mb-12 ${className}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
