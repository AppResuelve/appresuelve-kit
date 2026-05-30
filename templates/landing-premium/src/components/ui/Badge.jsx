import { motion } from 'framer-motion'

export function Badge({ children, className = '' }) {
  return (
    <motion.div 
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/70 backdrop-blur-xl text-sm text-[var(--color-text-secondary)] ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      {children}
    </motion.div>
  )
}

export function BadgeStatic({ children, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text-secondary)] ${className}`}>
      {children}
    </div>
  )
}