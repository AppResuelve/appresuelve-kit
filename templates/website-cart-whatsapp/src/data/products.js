export const products = [
  {
    id: 1,
    slug: 'auriculares-bluetooth-pro',
    name: 'Auriculares Bluetooth Pro',
    shortDescription: 'Sonido Hi-Fi con cancelación de ruido',
    description:
      'Auriculares inalámbricos de alta fidelidad con tecnología de cancelación activa de ruido. Batería de 30 horas, conexión Bluetooth 5.2 y diseño plegable para máxima portabilidad. Ideales para música, trabajo y viajes.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
    ],
    category: 'Electrónica',
    featured: true,
    price: '$45.000',
    priceNumber: 45000,
    tags: ['nuevo', 'oferta'],
  },
  {
    id: 2,
    slug: 'remera-premium-cotton',
    name: 'Remera Premium Cotton',
    shortDescription: '100% algodón orgánico, suave y resistente',
    description:
      'Remera de alta calidad fabricada con algodón orgánico certificado. Corte moderno, disponible en varios talles y colores. Perfecta para uso diario o como parte de tu indentidad de marca.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    ],
    category: 'Indumentaria',
    featured: true,
    price: '$12.500',
    priceNumber: 12500,
    tags: ['bestseller'],
  },
  {
    id: 3,
    slug: 'lampara-led-smart',
    name: 'Lámpara LED Smart',
    shortDescription: 'Control desde tu celular, 16 millones de colores',
    description:
      'Lámpara inteligente LED compatible con Alexa y Google Home. Controla el color, intensidad y programá horarios desde tu celular. Ahorra energía y crea el ambiente perfecto.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    ],
    category: 'Hogar',
    featured: false,
    price: '$28.000',
    priceNumber: 28000,
    tags: [],
  },
  {
    id: 4,
    slug: 'consultoria-digital',
    name: 'Consultoría Digital',
    shortDescription: 'Estrategia personalizada para tu negocio online',
    description:
      'Servicio de consultoría profesional para potenciar tu presencia digital. Análisis de mercado, estrategia de contenidos, SEO y optimización de conversión. Sesiones individuales de 1 hora.',
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop',
    ],
    category: 'Servicios',
    featured: true,
    price: '$35.000',
    priceNumber: 35000,
    tags: ['nuevo'],
  },
  {
    id: 5,
    slug: 'camara-ip-wifi',
    name: 'Cámara IP WiFi',
    shortDescription: 'Videovigilancia HD con visión nocturna',
    description:
      'Cámara de seguridad con resolución HD, conexión WiFi y visión nocturna. Notificaciones en tiempo real al celular y almacenamiento en la nube. Fácil instalación.',
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop',
    ],
    category: 'Electrónica',
    featured: false,
    price: '$32.000',
    priceNumber: 32000,
    tags: [],
  },
  {
    id: 6,
    slug: 'buzo-classic-fleece',
    name: 'Buzo Classic Fleece',
    shortDescription: 'Frisa polar suave, ideal para el frío',
    description:
      'Buzo de frisa polar premium con capucha regulable y bolsillo canguro. Te mantiene abrigado sin perder estilo. Perfecto para días fríos o actividades al aire libre.',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop',
    ],
    category: 'Indumentaria',
    featured: false,
    price: '$18.000',
    priceNumber: 18000,
    tags: ['oferta'],
  },
  {
    id: 7,
    slug: 'juego-herramientas-24',
    name: 'Juego de Herramientas 24 Piezas',
    shortDescription: 'Todo lo que necesitás para tus reparaciones',
    description:
      'Set completo de herramientas para hogar y taller. Incluye martillo, destornilladores, alicates, llave adjustable y más. Presentación en estuche resistente.',
    images: [
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&h=600&fit=crop',
    ],
    category: 'Hogar',
    featured: true,
    price: '$42.000',
    priceNumber: 42000,
    tags: ['bestseller'],
  },
  {
    id: 8,
    slug: 'diseno-web-profesional',
    name: 'Diseño Web Profesional',
    shortDescription: 'Landing page o sitio web a medida',
    description:
      'Servicio de diseño y desarrollo web profesional. Incluye dominio gratis por 1 año, hosting optimizado, diseño responsive y SEO básico. Entrega en 7 días.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop',
    ],
    category: 'Servicios',
    featured: false,
    price: '$85.000',
    priceNumber: 85000,
    tags: ['nuevo'],
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category) {
  if (!category || category === 'Todos') return products
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}

export function searchProducts(query, category) {
  let filtered = products

  if (category && category !== 'Todos') {
    filtered = filtered.filter((p) => p.category === category)
  }

  if (query) {
    const lowerQuery = query.toLowerCase()
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.shortDescription.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    )
  }

  return filtered
}
