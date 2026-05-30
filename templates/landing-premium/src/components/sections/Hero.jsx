import { motion } from 'framer-motion'
import { Badge, ButtonPrimary, ButtonSecondary } from '../ui'

export function Hero({ data }) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-600/5" />
      
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute top-[30%] right-[-5%] w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[80px]" />
        <div className="absolute bottom-[20%] left-[20%] w-[200px] h-[200px] rounded-full bg-cyan-400/8 blur-[60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - Content */}
          <div>
            {data.badge && <Badge>{data.badge}</Badge>}

            <motion.h1 
              className="mt-10 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[var(--color-text-primary)]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {data.title}
              <span className="block mt-3 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                {data.highlightedText}
              </span>
            </motion.h1>

            <motion.p 
              className="mt-8 text-xl sm:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {data.subtitle}
            </motion.p>

            <motion.div 
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {data.primaryButtonText && (
                <ButtonPrimary href={data.primaryButtonLink}>
                  {data.primaryButtonText}
                </ButtonPrimary>
              )}
              {data.secondaryButtonText && (
                <ButtonSecondary href={data.secondaryButtonLink}>
                  {data.secondaryButtonText}
                </ButtonSecondary>
              )}
            </motion.div>

            {/* Stats */}
            {data.stats && (
              <motion.div 
                className="mt-16 grid grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {data.stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* RIGHT - Image */}
          {data.image && (
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-[var(--color-border)]">
                <img 
                  src={data.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-2xl" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}