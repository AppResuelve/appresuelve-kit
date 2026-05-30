import { motion } from 'framer-motion'
import { SectionHeader } from '../ui'
import * as LucideIcons from 'lucide-react'

export function About({ data }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - Image */}
          {data.image && (
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-square border border-[var(--color-border)]">
                <img 
                  src={data.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-cyan-400/30 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-600/10 blur-2xl" />
            </motion.div>
          )}

          {/* RIGHT - Content */}
          <div>
            <SectionHeader
              label={data.badge}
              title={data.title}
              subtitle={data.description}
              className="mb-10"
            />

            <div className="space-y-6">
              {data.features?.map((feature, index) => {
                const IconComponent = LucideIcons[feature.icon] || LucideIcons.Check
                return (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--color-text-primary)]">{feature.title}</h4>
                      <p className="mt-1 text-[var(--color-text-secondary)]">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}