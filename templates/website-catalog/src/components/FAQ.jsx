import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="text-lg font-semibold text-[var(--color-text-primary)] pr-4">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-[var(--color-text-secondary)]">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
