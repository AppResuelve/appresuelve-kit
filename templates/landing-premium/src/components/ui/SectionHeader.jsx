import { motion } from 'framer-motion'

export function SectionHeader({ label, title, subtitle, className = '', align = 'left' }) {
  const textAlign = align === 'center' ? 'text-center mx-auto' : ''
  
  return (
    <div className={`max-w-3xl ${textAlign} ${className}`}>
      {label && (
        <motion.p 
          className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.p>
      )}
      {title && (
        <motion.h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p 
          className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}