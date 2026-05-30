# Landing Premium Template

Plantilla premium para crear landing pages con animaciones y diseño refinado.

## Stack

- React + Vite
- TailwindCSS
- Framer Motion (animaciones)
- Lucide React (íconos)
- pnpm

## Estructura

```
src/
├── data/
│   └── siteData.js     ← COMPLETAR CON DATOS DEL CLIENTE
├── components/
│   ├── ui/
│   │   ├── Motion.jsx       # HOC para animaciones
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   └── SectionHeader.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Process.jsx
│       ├── Gallery.jsx
│       ├── Testimonials.jsx
│       ├── FAQ.jsx
│       ├── CTA.jsx
│       └── Footer.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Secciones

1. **Hero** - Stats animados, imagen, CTA dual
2. **About** - Historia, features, imagen
3. **Services** - Grid de servicios con hover
4. **Process** - 4 pasos con línea conectora
5. **Gallery** - Grid con overlay en hover
6. **Testimonials** - Cards con quotes
7. **FAQ** - Acordeón animado
8. **CTA** - Llamada a la acción
9. **Footer** - Info completa

## Animaciones

- Fade up on scroll
- Scale on hover
- Stagger children
- Accordion smooth

## Cómo usar

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build producción
pnpm build
```

## Checklist de datos

- [ ] Company info
- [ ] Hero (badge, título, stats, imagen)
- [ ] About (badge, título, descripción, features, imagen)
- [ ] Services (3+ servicios)
- [ ] Process (4 pasos)
- [ ] Gallery (6+ imágenes)
- [ ] Testimonials (3+ testimonios)
- [ ] FAQ (5+ preguntas)
- [ ] CTA (badge, título, subtítulo)