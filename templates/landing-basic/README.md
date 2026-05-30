# Landing Basic Template

Plantilla base para crear landing pages profesionales para negocios locales.

## Estructura

```
src/
├── data/
│   └── siteData.js     ← COMPLETAR CON DATOS DEL CLIENTE
├── components/
│   ├── ui/             ← Componentes reutilizables
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   └── SectionHeader.jsx
│   └── sections/       ← Secciones de la página
│       ├── Hero.jsx
│       ├── Benefits.jsx
│       ├── Services.jsx
│       ├── Gallery.jsx
│       ├── FAQ.jsx
│       ├── CTAFinal.jsx
│       └── Footer.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Cómo usar

1. **Duplicar la carpeta** `landing-basic` con el nombre del cliente
   ```
   cp -r landing-basic ../clientes/veterinaria-patitas
   ```

2. **Completar `src/data/siteData.js`** con los datos del cliente

3. **Correr el proyecto**
   ```bash
   pnpm install
   pnpm dev
   ```

## Datos necesarios del cliente

### Empresa
- [ ] Nombre
- [ ] Logo
- [ ] Descripción corta
- [ ] WhatsApp
- [ ] Email
- [ ] Dirección
- [ ] Redes sociales

### Contenido
- [ ] Hero (badge, título, subtítulo, botones)
- [ ] Servicios (título, descripción, icono)
- [ ] Beneficios (título, descripción, icono)
- [ ] Galería (imágenes con alt)
- [ ] FAQs (pregunta + respuesta)

### Branding
- [ ] Color primario
- [ ] Color secundario

## Checklist de implementación

- [ ] Completar siteData.ts
- [ ] Agregar imágenes reales
- [ ] Configurar meta tags en index.html
- [ ] Probar en mobile
- [ ] Verificar links de WhatsApp
- [ ] Probar navegación