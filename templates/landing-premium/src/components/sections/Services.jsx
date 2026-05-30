import { motion } from 'framer-motion'
import { SectionHeader } from '../ui'
import * as LucideIcons from 'lucide-react'

export function Services({ data }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Servicios"
          title="Soluciones para tu negocio"
          subtitle="Ofrecemos una amplia gama de servicios adaptados a tus necesidades."
          className="text-center mx-auto mb-16"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((service, index) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.Star
            return (
              <motion.div
                key={index}
                className="group relative rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 hover:border-cyan-500/40 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(6,182,212,0.15)] transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}