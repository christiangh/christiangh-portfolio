# christiangh-portfolio

Portfolio personal de **Christian García**, desarrollador frontend. Web de una sola página con estética inspirada en los colores y el diseño funk de los 70.

Construido con [Astro](https://astro.build) y [Tailwind CSS v4](https://tailwindcss.com).

## Requisitos

- Node.js 18.20+ / 20.3+ / 22+
- [pnpm](https://pnpm.io)

## Comandos

Todos se ejecutan desde la raíz del proyecto:

| Comando             | Acción                                          |
| :------------------ | :---------------------------------------------- |
| `pnpm install`      | Instala dependencias                            |
| `pnpm dev`          | Servidor de desarrollo en `localhost:4321`      |
| `pnpm build`        | Genera la web de producción en `./dist/`        |
| `pnpm preview`      | Sirve la build de producción en local           |
| `pnpm astro ...`    | CLI de Astro, p. ej. `pnpm astro check`         |
| `pnpm lint`         | ESLint (Astro, TypeScript, accesibilidad)       |
| `pnpm lint:fix`     | ESLint corrigiendo lo que pueda automáticamente |
| `pnpm formatgit`    | Formatea todo el repo con Prettier              |
| `pnpm format:check` | Comprueba el formato sin escribir cambios       |

Antes de hacer commit: `pnpm lint && pnpm formatgit`.

## Estructura

```text
/
├── public/                    # Favicons, logo, imagen de fondo (rutas absolutas: /psycho-waves.png)
├── src/
│   ├── components/
│   │   ├── CghHeader.astro    # Logo + navegación del sidebar
│   │   ├── Nav.astro          # Lista de enlaces del menú
│   │   ├── NavLink.astro      # Enlace con estrella y estados reposo / hover / activo
│   │   ├── Star.astro         # Estrella SVG (hereda currentColor)
│   │   ├── ScrollSpy.astro    # Marca el enlace activo según la sección visible
│   │   ├── CursorAnimation.astro # Parallax del fondo con el cursor
│   │   └── Logo.astro
│   ├── content/
│   │   ├── config.ts          # Esquema de la colección main-sections
│   │   └── main-sections/     # Una sección de la home por cada .md
│   ├── layouts/Layout.astro   # <head>, sidebar sticky y <main>
│   ├── pages/index.astro      # Única página: pinta las secciones ordenadas
│   └── styles/global.css      # Tokens de tema (@theme) y utilidades text-funky*
└── package.json
```

## Contenido

Las secciones de la home salen de la colección `main-sections`. Cada fichero `.md` en [src/content/main-sections/](src/content/main-sections/) define una sección:

```md
---
id: projects # id del <section> y ancla del menú (#projects)
title: Proyectos
order: 4 # posición en la página
image: https://example.com/foo.png # opcional, URL absoluta
---

Contenido en markdown…
```

Para añadir, quitar o reordenar secciones basta con editar estos ficheros. Si cambias un `id`, actualiza también el `href` correspondiente en [Nav.astro](src/components/Nav.astro).

## Estilos

Tailwind v4 se configura desde CSS (no hay `tailwind.config.js`). Los colores (`--color-marigold-cgh`, `--color-pacific-cgh`, …) y fuentes están en el bloque `@theme` de [global.css](src/styles/global.css), junto con las utilidades tipográficas:

- `text-funky` / `text-funky-active`: títulos grandes con sombras por capas.
- `text-funky-small` / `text-funky-small-active`: versión para el menú.

El enlace activo del menú se controla con la clase `.active`, que añade `ScrollSpy` al hacer scroll o clic.
