import { SectionHeader } from '../ui'

export function Gallery({ data }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Galería"
          title="Nuestros trabajos"
          subtitle="Algunos ejemplos de lo que podemos hacer por tu negocio."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-[1.75rem] overflow-hidden border border-[var(--color-border)] aspect-video hover:-translate-y-1.5 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}