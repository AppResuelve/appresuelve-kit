import { motion } from 'framer-motion'
import { SectionHeader } from '../ui'
import { Quote } from 'lucide-react'

export function Testimonials({ data }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="Historias de éxito que nos enorgullecen."
          className="text-center mx-auto mb-16"
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-8 hover:border-cyan-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="w-10 h-10 text-cyan-400/30 mb-6" />
              
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-border)]"
                  />
                )}
                <div>
                  <p className="font-bold text-[var(--color-text-primary)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}