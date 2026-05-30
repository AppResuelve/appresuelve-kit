# Website Corporate Template

Sitio web corporativo multipágina con sistema de contacto funcional.

## Stack

- React + Vite
- TailwindCSS
- React Router v6
- Lucide React (íconos)
- Brevo API (emails)
- pnpm

## Estructura

```
src/
├── api/
│   └── contact.js              # API endpoint para emails (Vercel Functions)
├── components/
│   ├── ui/                     # Componentes reutilizables
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   └── SectionHeader.jsx
│   ├── layout/
│   │   ├── Navbar.jsx          # Navegación con scroll-aware
│   │   └── Footer.jsx          # Info + columnas + redes
│   └── ContactForm.jsx         # Formulario funcional
├── data/
│   └── siteData.js             # TODA la config del sitio
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── services/
│   └── contactService.js       # Cliente para API de contacto
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Datos centralizados

### siteData.js contiene:

```js
// Configuración del negocio
business: { name }

// Contacto (receiverEmail y whatsapp para formulario)
contact: { receiverEmail, whatsapp }

// Info de empresa
company: { name, slogan, description, logo, phone, email, address, social, businessHours }

// Branding (colores)
branding: { primaryColor, secondaryColor }

// Navegación
navbar: { items, ctaText }

// Footer (columnas)
footer: { columns }

// SEO
seo: { siteName, description, url }

// Contenido de todas las páginas
content: { home, about, services, contact, notFound }
```

## Sistema de Contacto con Brevo

### Flujo

1. Usuario completa formulario en `ContactForm.jsx`
2. `contactService.js` hace POST a `/api/contact`
3. `api/contact.js` envía email via Brevo API
4. Email llega a `contact.receiverEmail` desde `siteData.js`

### Configuración de entorno

```env
BREVO_API_KEY=your_api_key_here
BREVO_SENDER=formularios@tudominio.com
RECEIVER_EMAIL=tu@email.com
```

## Cómo usar

### Preview (con datos mock)

```bash
pnpm install
pnpm dev
```

### Duplicar para un cliente

1. Copiar carpeta `website-corporate` a `clientes/nombre-del-cliente`
2. Editar `src/data/siteData.js` con datos del cliente
3. Configurar variables de entorno para Brevo
4. Deploy a Vercel

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Home |
| `/nosotros` | About |
| `/servicios` | Services (lista) |
| `/contacto` | Contact (formulario funcional) |
| `*` | 404 Not Found |

## SEO

- Meta tags en `index.html` (completar con datos del cliente)
- Semantic HTML en todas las páginas
- Alt texts en imágenes
- Links con `rel="noopener noreferrer"` para externos

## Checklist para implementar

- [ ] Completar `siteData.js` con datos del cliente
- [ ] Configurar `index.html` (title, meta description)
- [ ] Agregar logo si existe
- [ ] Configurar `contact.receiverEmail` y `contact.whatsapp`
- [ ] Configurar redes sociales
- [ ] Configurar colores en `branding` y en `index.css`
- [ ] Deploy a Vercel con variables de entorno