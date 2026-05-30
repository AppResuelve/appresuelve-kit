import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { SectionHeader } from '../ui'

export function FAQ({ data }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="FAQ"
          title="Preguntas frecuentes"
          subtitle="Todo lo que necesitás saber antes de comenzar."
          className="text-center mx-auto mb-16"
          align="center"
        />

        <div className="space-y-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-[var(--color-elevated)]/50 transition-colors"
              >
                <span className="text-lg font-bold text-[var(--color-text-primary)] pr-6">
                  {item.question}
                </span>
                <AnimatePresence mode="wait">
                  {openIndex === index ? (
                    <motion.div
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Minus className="w-5 h-5 text-cyan-400 shrink-0" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-8 text-[var(--color-text-secondary)] leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}