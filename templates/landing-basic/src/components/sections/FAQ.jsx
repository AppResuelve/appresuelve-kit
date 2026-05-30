import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from '../ui'

export function FAQ({ data }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Preguntas frecuentes"
          title="Respuestas rápidas"
          subtitle="Todo lo que necesitás saber antes de empezar."
          className="mb-16 text-center mx-auto"
        />

        <div className="space-y-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-7 text-left"
              >
                <span className="text-lg font-bold text-[var(--color-text-primary)] pr-4">{item.question}</span>
                <ChevronDown className={`w-5 h-5 text-[var(--color-text-secondary)] shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                <p className="px-7 pb-7 text-[var(--color-text-secondary)] leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}