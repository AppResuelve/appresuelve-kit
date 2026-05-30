# Website Catalog Template

Plantilla de catálogo de productos multipágina para negocios físicos.

## Características

- Listado de productos con filtros y búsqueda
- Detalle de producto con galería de imágenes
- Categorías planas
- Buscador con debounce
- Filtros por categoría (sidebar en desktop, drawer en mobile)
- FAQ integrado
- Formulario de contacto con Brevo
- Diseño moderno dark mode
- 100% configurable via `siteData.js`

## Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Brevo (Sendinblue) para emails

## Estructura

```
src/
├── data/
│   ├── siteData.js      # Configuración global
│   ├── products.js       # Productos mock
│   └── categories.js     # Categorías
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── ui/               # Button, Badge, SectionHeader
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── ProductGallery.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── FAQ.jsx
│   └── ContactForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   └── NotFound.jsx
├── hooks/
│   └── useProducts.js
└── services/
    └── contactService.js
```

## Configuración

### 1. Configurar siteData

Editar `src/data/siteData.js`:

```javascript
export const siteData = {
  business: {
    name: 'Tu Negocio',
  },
  contact: {
    receiveEmailsAt: 'tu@email.com',
    whatsapp: '5491112345678',
  },
  // ... más config
  catalog: {
    ctaType: 'whatsapp', // o 'contact'
    showPrices: true,
    showSearch: true,
    showCategories: true,
  },
}
```

### 2. Agregar productos

Editar `src/data/products.js`:

```javascript
export const products = [
  {
    id: 1,
    slug: 'nombre-del-producto',
    name: 'Nombre del Producto',
    shortDescription: 'Descripción corta',
    description: 'Descripción completa...',
    images: ['/ruta/imagen1.webp', '/ruta/imagen2.webp'],
    category: 'Categoría',
    featured: true,
    price: '$25.000',
    tags: ['nuevo'],
  },
]
```

### 3. Variables de entorno

Crear `.env` en la raíz:

```env
BREVO_API_KEY=tu_api_key
BREVO_SENDER=formularios@tudominio.com
RECEIVER_EMAIL=tu@email.com
```

## Scripts

```bash
pnpm install    # Instalar dependencias
pnpm dev        # Desarrollo local
pnpm build      # Build para producción
pnpm preview    # Preview del build
pnpm vercel:dev # Desarrollo con API local
```

## Deploy a Vercel

1. Push a GitHub
2. Importar en Vercel
3. Configurar variables de entorno
4. Deploy!

## Preparado para backend futuro

El formulario de contacto ya usa API routes de Vercel. La estructura está lista para migrar:
- Búsqueda de productos → API
- Filtros → API
- CRUD de productos → API

## Licencia

AppResuelve © 2024
