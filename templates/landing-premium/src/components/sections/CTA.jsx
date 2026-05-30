import { motion } from 'framer-motion'
import { ButtonWhatsApp } from '../ui'
import { siteData } from '../../data/siteData'

export function CTA({ data }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="relative rounded-[3rem] border border-[var(--color-border)] bg-[var(--color-card)] p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[80px]" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[80px]" />
          </div>

          <div className="relative">
            {data.badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-semibold mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                {data.badge}
              </div>
            )}

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text-primary)] leading-tight">
              {data.title}
            </h2>
            
            <p className="mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
              {data.subtitle}
            </p>

            <div className="mt-10">
              <ButtonWhatsApp href={`https://wa.me/${siteData.company.whatsapp.replace(/\D/g, '')}`}>
                {data.buttonText}
              </ButtonWhatsApp>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}