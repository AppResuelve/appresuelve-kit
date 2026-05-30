import { siteData, content } from '../data/siteData'
import { FAQ } from '../components/FAQ'
import { SectionHeader } from '../components/ui/SectionHeader'

const defaultFAQs = [
  {
    question: '¿Cuáles son los métodos de pago aceptados?',
    answer:
      'Aceptamos transferencias bancarias, MercadoPago y pagos en efectivo. Para pedidos grandes, podemos coordinar un plan de pago.',
  },
  {
    question: '¿Realizan envíos a todo el país?',
    answer:
      'Sí, enviamos a todas las provincias. Los costos y tiempos de envío varían según la ubicación. Consultanos para más detalles.',
  },
  {
    question: '¿Los productos tienen garantía?',
    answer:
      'Todos nuestros productos cuentan con garantía según las políticas del fabricante. La garantía cubre defectos de fábrica.',
  },
  {
    question: '¿Puedo devolver un producto?',
    answer:
      'Aceptamos devoluciones dentro de los 15 días posteriores a la compra, siempre que el producto esté en su estado original y con el packaging completo.',
  },
  {
    question: '¿Ofrecen descuentos por cantidad?',
    answer:
      'Sí, tenemos precios especiales para pedidos mayoristas. Contactanos para recibir una cotización personalizada.',
  },
]

export default function FAQPage() {
  const { badge, title, subtitle } = content.faq

  return (
    <section className="pt-20 md:pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          badge={badge}
          title={title}
          subtitle={subtitle}
          className="text-center mb-16"
        />

        <FAQ faqs={defaultFAQs} />
      </div>
    </section>
  )
}
