import { motion } from 'framer-motion'
import { SectionHeader } from '../ui'

export function Process({ data }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Proceso"
          title="Cómo trabajamos"
          subtitle="Un proceso transparente y eficiente para hacer realidad tu proyecto."
          className="text-center mx-auto mb-16"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Connector line */}
              {index < data.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-cyan-400/50 to-blue-600/50" />
              )}
              
              <div className="w-24 h-24 rounded-full border-2 border-cyan-400/30 bg-[var(--color-card)] flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  {step.step}
                </span>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl" />
              </div>
              
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}