// ============================================
// SITE DATA - MOCK DATA PARA PREVIEW
// Completar al clonar para un cliente real
// ============================================

export const siteData = {
  company: {
    name: 'Tu Empresa',
    slogan: 'Soluciones digitales a medida',
    description: 'Transformamos ideas en realidades digitales. Desarrollo web y móvil personalizado para empresas y emprendedores.',
    logo: '',

    phone: '+54 9 XXX XXX XXXX',
    whatsapp: '+54 9 XXX XXX XXXX',

    email: 'hola@tuempresa.com',

    address: 'Buenos Aires, Argentina',

    googleMapsUrl: '',

    instagram: '',
    facebook: '',
    linkedin: '',

    businessHours: 'Lunes a Viernes 9:00 - 18:00',

    ctaText: 'Solicitar presupuesto',
  },

  branding: {
    primaryColor: '#06b6d4',
    secondaryColor: '#2563eb',
    darkMode: true,
  },

  hero: {
    badge: 'Bienvenido a tu nuevo sitio',
    title: 'Hacemos crecer',
    highlightedText: 'tu negocio online',
    subtitle: 'Creamos experiencias digitales que conectan marcas con personas. Diseño moderno, desarrollo profesional y resultados medibles.',
    primaryButtonText: 'Comenzar proyecto',
    primaryButtonLink: '#contacto',
    secondaryButtonText: 'Ver trabajos',
    secondaryButtonLink: '#trabajos',
    stats: [
      { value: '10+', label: 'Años de experiencia' },
      { value: '200+', label: 'Proyectos completados' },
      { value: '100%', label: 'Clientes satisfechos' },
    ],
  },

  about: {
    badge: 'Sobre Nosotros',
    title: 'Equipo apasionado por crear',
    description: 'Somos un equipo de diseñadores y desarrolladores obsesionados con crear experiencias digitales que generan impacto real. Cada proyecto es una oportunidad para resolver problemas y crear valor.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop',
    features: [
      { icon: 'Check', title: 'Diseño centrado en el usuario', description: 'Creamos interfaces intuitivas que facilitan la navegación y aumentan conversiones.' },
      { icon: 'Zap', title: 'Rendimiento optimizado', description: 'Sites rápidos y eficientes que cargan en menos de 2 segundos.' },
      { icon: 'Heart', title: 'Soporte continuo', description: 'Acompañamiento post-lanzamiento para asegurar el éxito de tu proyecto.' },
    ],
  },

  services: [
    {
      title: 'Diseño Web',
      description: 'Interfaces modernas y responsivas que reflejan la identidad de tu marca y mejoran la experiencia del usuario.',
      icon: 'Palette',
    },
    {
      title: 'Desarrollo Full Stack',
      description: 'Aplicaciones web robustas y escalables construidas con las mejores tecnologías del mercado.',
      icon: 'Code',
    },
    {
      title: 'E-commerce',
      description: 'Tiendas online completas con integración de pagos, inventario y análisis de ventas.',
      icon: 'ShoppingCart',
    },
  ],

  process: [
    {
      step: '01',
      title: 'Descubrimiento',
      description: 'Analizamos tus necesidades, objetivos y mercado para definir la estrategia correcta.',
    },
    {
      step: '02',
      title: 'Diseño',
      description: 'Creamos prototipos y mockups interactivos para visualizar el producto final.',
    },
    {
      step: '03',
      title: 'Desarrollo',
      description: 'Construimos tu proyecto con código limpio, performante y escalable.',
    },
    {
      step: '04',
      title: 'Lanzamiento',
      description: 'Publicamos tu sitio y te capacitamos para que puedas gestionarlo con confianza.',
    },
  ],

  gallery: [
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop', alt: 'Dashboard empresarial' },
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop', alt: 'Aplicación móvil' },
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop', alt: 'E-commerce' },
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop', alt: 'Landing page' },
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop', alt: 'Sitio corporativo' },
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop', alt: 'Plataforma SaaS' },
  ],

  testimonials: [
    {
      name: 'María García',
      role: 'CEO, Startup XYZ',
      text: 'El equipo superó todas nuestras expectativas. El sitio web que crearon nos ayudó a triplicar nuestras ventas en el primer mes.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Director, Empresa ABC',
      text: 'Profesionalismo y creatividad definen a este equipo. Nos entregaron un proyecto impecable en tiempo récord.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      name: 'Ana Martínez',
      role: 'Fundadora, Negocio Local',
      text: 'Gracias a su trabajo, mi negocio tiene presencia online que genera clientes todos los días.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
  ],

  faq: [
    {
      question: '¿Cuánto cuesta un sitio web?',
      answer: 'Cada proyecto es único. Comenzamos desde $500 USD para landing pages básicas y los precios aumentan según complejidad y funcionalidades requeridas.',
    },
    {
      question: '¿Cuánto tiempo tarda en estar listo?',
      answer: 'Una landing page puede estar lista en 2 semanas. Proyectos más grandes pueden tomar 4-8 semanas dependiendo del alcance.',
    },
    {
      question: '¿Incluyen hosting y dominio?',
      answer: 'Ofrecemos paquetes de hosting y dominio como servicio adicional, pero también podés gestionar los tuyos si ya los tenés.',
    },
    {
      question: '¿Hacen mantenimiento post-lanzamiento?',
      answer: 'Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, backups y soporte técnico.',
    },
    {
      question: '¿Pueden trabajar con diseños existentes?',
      answer: 'Sí, podemos implementar diseños existentes o trabajar con tu equipo de diseño para desarrollar el producto final.',
    },
  ],

  cta: {
    badge: '¡Empezá hoy!',
    title: '¿Listo para impulsar tu negocio?',
    subtitle: 'Agenda una llamada y conversemos sobre cómo podemos ayudarte a crecer online.',
    buttonText: 'Hablar por WhatsApp',
  },
}