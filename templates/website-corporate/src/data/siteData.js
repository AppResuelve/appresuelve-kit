// ============================================
// SITE DATA - CONFIGURACIÓN GLOBAL DEL SITIO
// Completar al clonar para un cliente
// ============================================

export const siteData = {
  // Nombre del negocio
  business: {
    name: "AppResuelve",
  },

  // Configuración de contacto
  contact: {
    receiveEmailsAt: "tomascallenius96@gmail.com",
    whatsapp: "5493834971799",
  },

  // Información de la empresa
  company: {
    slogan: "Soluciones digitales a medida",
    description:
      "Transformamos ideas en realidades digitales. Desarrollo web y móvil personalizado para empresas y emprendedores que buscan destacar.",
    logo: "",

    phone: "+54 383 497-1799",
    email: "tomascallenius96@gmail.com",
    address: "Buenos Aires, Argentina",

    businessHours: "Lunes a Viernes 9:00 - 18:00",

    social: {
      instagram: "https://instagram.com/app.resuelve",
      facebook: "",
      linkedin: "",
    },
  },

  // Branding - estos colores se usan para generar la paleta
  branding: {
    primaryColor: "#06b6d4",
    secondaryColor: "#2563eb",
  },

  // Navegación
  navbar: {
    items: [
      { label: "Inicio", href: "/" },
      { label: "Nosotros", href: "/nosotros" },
      { label: "Servicios", href: "/servicios" },
      { label: "Contacto", href: "/contacto" },
    ],
    ctaText: "Solicitar presupuesto",
  },

  // Footer - columnas de navegación
  footer: {
    columns: [
      {
        title: "Navegación",
        links: [
          { label: "Inicio", href: "/" },
          { label: "Nosotros", href: "/nosotros" },
          { label: "Servicios", href: "/servicios" },
          { label: "Contacto", href: "/contacto" },
        ],
      },
      {
        title: "Servicios",
        links: [
          { label: "Landing Pages", href: "/servicios" },
          { label: "Sitios Web", href: "/servicios" },
          { label: "E-commerce", href: "/servicios" },
          { label: "Sistemas", href: "/servicios" },
        ],
      },
      {
        title: "Contacto",
        links: [
          {
            label: "tomascallenius96@gmail.com",
            href: "mailto:tomascallenius96@gmail.com",
          },
          { label: "+54 383 497-1799", href: "tel:+5493834971799" },
          { label: "WhatsApp", href: "https://wa.me/5493834971799" },
        ],
      },
    ],
  },
};

// ============================================
// DATOS DE CONTENIDO
// Completar al clonar para un cliente
// ============================================

export const content = {
  home: {
    hero: {
      badge: "Bienvenido a AppResuelve",
      title: "Hacemos crecer",
      highlightedText: "tu negocio online",
      subtitle:
        "Creamos experiencias digitales que conectan marcas con personas. Diseño moderno, desarrollo profesional y resultados medibles.",
      primaryButtonText: "Comenzar proyecto",
      primaryButtonLink: "/contacto",
      secondaryButtonText: "Ver servicios",
      secondaryButtonLink: "/servicios",
    },
    features: [
      {
        icon: "Zap",
        title: "Rápidos y eficientes",
        description:
          "Sites que cargan en menos de 2 segundos. Optimizados para SEO y conversions.",
      },
      {
        icon: "Smartphone",
        title: "Mobile first",
        description:
          "Diseño responsivo que se adapta perfectamente a cualquier dispositivo.",
      },
      {
        icon: "Shield",
        title: "Seguridad garantizada",
        description:
          "Implementamos las mejores prácticas de seguridad para proteger tu sitio.",
      },
      {
        icon: "Heart",
        title: "Soporte continuo",
        description:
          "Acompañamiento post-lanzamiento para asegurar el éxito de tu proyecto.",
      },
      {
        icon: "TrendingUp",
        title: "Escalables",
        description: "Arquitectura preparada para crecer junto con tu negocio.",
      },
      {
        icon: "Award",
        title: "Calidad premium",
        description:
          "Código limpio, maintainable y siguiendo los mejores estándares.",
      },
    ],
    stats: [
      { value: "3+", label: "Años de experiencia" },
      { value: "50+", label: "Proyectos completados" },
      { value: "100%", label: "Clientes satisfechos" },
    ],
    cta: {
      title: "¿Tenés un proyecto en mente?",
      subtitle:
        "Conversemos y hagamos realidad tu idea. Primera consulta sin costo.",
      buttonText: "Solicitar presupuesto",
      buttonLink: "/contacto",
    },
  },

  about: {
    badge: "Sobre Nosotros",
    title: "Equipo apasionado por crear",
    description:
      "Somos un equipo de diseñadores y desarrolladores obsesionados con crear experiencias digitales que generan impacto real. Cada proyecto es una oportunidad para resolver problemas y crear valor para vos y tus clientes.",
    mission:
      "Democratizar el acceso a presencia digital profesional para negocios de todos los tamaños.",
    values: [
      {
        title: "Transparencia",
        description: "Comunicación clara y honesta durante todo el proceso.",
        icon: "MessageCircle",
      },
      {
        title: "Calidad",
        description: "No entregamos nada que no esté listo para producción.",
        icon: "Award",
      },
      {
        title: "Rapidez",
        description: "Tiempo de entrega cortos sin sacrificar calidad.",
        icon: "Zap",
      },
      {
        title: "Innovación",
        description: "Siempre buscando las mejores tecnologías y prácticas.",
        icon: "Lightbulb",
      },
    ],
    features: [
      {
        icon: "Code",
        title: "Código limpio",
        description: "Desarrollamos con las mejores prácticas de la industria.",
      },
      {
        icon: "Palette",
        title: "Diseño estratégico",
        description: "Cada elemento tiene un propósito orientado a resultados.",
      },
    ],
  },

  services: {
    badge: "Servicios",
    title: "Soluciones para cada necesidad",
    subtitle:
      "Ofrecemos una amplia gama de servicios digitales adaptados a tu presupuesto y objetivos. Desde landing pages hasta sistemas complejos.",
    list: [
      {
        title: "Landing Pages",
        description:
          "Páginas rápidas y optimizadas para generar consultas y ventas. Ideales para lanzamientos, promociones o mostrar tu negocio de forma profesional.",
        icon: "Layout",
        features: [
          "WhatsApp integrado",
          "Google Maps",
          "Responsive",
          "SEO básico",
          "Entrega en 72hs",
        ],
      },
      {
        title: "Sitios Web Corporativos",
        description:
          "Sitios multipágina con secciones personalizadas. Perfectos para empresas que necesitan mostrar credibilidad y servicios.",
        icon: "Globe",
        features: [
          "Multipágina",
          "Panel de admin",
          "Autogestionable",
          "Blog incluido",
          "SSL gratis",
        ],
      },
      {
        title: "E-commerce",
        description:
          "Tiendas online completas con catálogo de productos, carrito de compras y integración de pagos. Pensadas para vender.",
        icon: "ShoppingBag",
        features: [
          "Catálogo de productos",
          "Carrito de compras",
          "Pagos online",
          "Inventario",
          "Reportes",
        ],
      },
      {
        title: "Sistemas a Medida",
        description:
          "Desarrollamos herramientas digitales personalizadas para automatizar procesos y resolver problemas específicos de tu negocio.",
        icon: "Settings",
        features: [
          "A medida",
          "Automatizaciones",
          "Dashboards",
          "APIs",
          "Integraciones",
        ],
      },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Analizamos tu negocio, objetivos y competencia para definir la mejor estrategia.",
      },
      {
        step: "02",
        title: "Diseño",
        description:
          "Creamos mockups interactivos para visualizar el producto antes de desarrollar.",
      },
      {
        step: "03",
        title: "Desarrollo",
        description:
          "Construimos tu proyecto con código limpio y las mejores tecnologías.",
      },
      {
        step: "04",
        title: "Lanzamiento",
        description:
          "Publicamos tu sitio y te capacitamos para que puedas gestionarlo.",
      },
    ],
  },

  contact: {
    badge: "Contacto",
    title: "Hablemos de tu proyecto",
    subtitle:
      "¿Tenés una idea en mente? ¿Necesitás mejorar tu presencia digital? Escribinos y te respondemos a la brevedad.",
    infoTitle: "Encontranos",
  },

  notFound: {
    title: "404",
    subtitle: "Página no encontrada",
    message: "Lo sentimos, la página que buscás no existe o fue movida.",
    buttonText: "Volver al inicio",
    buttonLink: "/",
  },
};
