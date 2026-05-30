export const siteData = {
  business: {
    name: 'AppResuelve',
  },

  contact: {
    receiveEmailsAt: 'tu@email.com',
    whatsapp: '5491112345678',
  },

  company: {
    slogan: 'Soluciones digitales a medida',
    description:
      'Transformamos ideas en realidades digitales. Desarrollo web y móvil personalizado para empresas y emprendedores que buscan destacar.',
    logo: '',

    phone: '+54 11 1234-5678',
    email: 'tu@email.com',
    address: 'Buenos Aires, Argentina',

    businessHours: 'Lunes a Viernes 9:00 - 18:00',

    social: {
      instagram: 'https://instagram.com/tu_usuario',
      facebook: '',
      linkedin: '',
    },
  },

  branding: {
    primaryColor: '#06b6d4',
    secondaryColor: '#2563eb',
  },

  navbar: {
    items: [
      { label: 'Inicio', href: '/' },
      { label: 'Productos', href: '/productos' },
      { label: 'Carrito', href: '/carrito', showCartCount: true },
      { label: 'Contacto', href: '/contacto' },
    ],
    ctaText: 'Cotizar',
  },

  footer: {
    columns: [
      {
        title: 'Navegación',
        links: [
          { label: 'Inicio', href: '/' },
          { label: 'Productos', href: '/productos' },
          { label: 'Carrito', href: '/carrito' },
          { label: 'Contacto', href: '/contacto' },
        ],
      },
      {
        title: 'Categorías',
        links: [
          { label: 'Categoría 1', href: '/productos?cat=categoria-1' },
          { label: 'Categoría 2', href: '/productos?cat=categoria-2' },
          { label: 'Categoría 3', href: '/productos?cat=categoria-3' },
        ],
      },
      {
        title: 'Contacto',
        links: [
          { label: 'tu@email.com', href: 'mailto:tu@email.com' },
          { label: '+54 11 1234-5678', href: 'tel:+541112345678' },
          { label: 'WhatsApp', href: 'https://wa.me/5491112345678' },
        ],
      },
    ],
  },

  cart: {
    persistenceEnabled: true,
    persistenceKey: 'appresuelve-cart',
    showDeliveryModal: true,
  },
}

export const content = {
  home: {
    hero: {
      badge: 'Bienvenido',
      title: 'Productos de calidad',
      highlightedText: 'para tu negocio',
      subtitle:
        'Descubrí nuestra selección de productos diseñados para satisfacer tus necesidades.',
      primaryButtonText: 'Ver productos',
      primaryButtonLink: '/productos',
      secondaryButtonText: 'Contactar',
      secondaryButtonLink: '/contacto',
    },
    featuredTitle: 'Productos destacados',
    featuredSubtitle: 'Los más elegidos por nuestros clientes',
    categoriesTitle: 'Categorías',
    categoriesSubtitle: 'Explorá por tipo de producto',
    cta: {
      title: '¿No encontrás lo que buscás?',
      subtitle: 'Contactanos y te ayudamos a encontrar lo que necesitás.',
      buttonText: 'Escribinos',
      buttonLink: '/contacto',
    },
  },

  products: {
    badge: 'Catálogo',
    title: 'Nuestros productos',
    subtitle: 'Encontrá lo que necesitás',
    noResults: 'No hay productos que coincidan con tu búsqueda.',
    clearFilters: 'Limpiar filtros',
  },

  productDetail: {
    backTo: 'Volver a productos',
    categoryLabel: 'Categoría',
    tagsLabel: 'Etiquetas',
    addToCart: 'Agregar al carrito',
    addedToCart: '¡Agregado!',
    relatedTitle: 'Productos relacionados',
  },

  cart: {
    title: 'Tu carrito',
    emptyTitle: 'Tu carrito está vacío',
    emptyMessage: 'Agregá productos para poder solicitar tu pedido.',
    browseProducts: 'Ver productos',
    itemCount: '{count} producto(s)',
    subtotal: 'Subtotal',
    total: 'Total estimado',
    requestQuote: 'Solicitar por WhatsApp',
    removeItem: 'Eliminar',
    clearCart: 'Vaciar carrito',
    continueShopping: 'Seguir comprando',
  },

  contact: {
    badge: 'Contacto',
    title: 'Hablemos',
    subtitle:
      '¿Tenés alguna pregunta o necesitás una cotización? Escribinos y te respondemos a la brevedad.',
    infoTitle: 'Encontranos',
  },

  notFound: {
    title: '404',
    subtitle: 'Página no encontrada',
    message: 'Lo sentimos, la página que buscás no existe o fue movida.',
    buttonText: 'Volver al inicio',
    buttonLink: '/',
  },
}
