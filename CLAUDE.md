# CLAUDE.md

Portfolio personal (Christian García, frontend) en Astro + Tailwind v4. Una sola página: sidebar sticky con nav + secciones de contenido. Estética funk 70's.

## Comandos

pnpm. Sin tests. `pnpm lint && pnpm formatgit` antes de commit. Otros: `pnpm dev`, `pnpm build`, `pnpm format:check`.

## Gotchas

- Secciones = ficheros `src/content/main-sections/*.md` (`id`, `title`, `order`, `image?` URL absoluta). Los `href` de `src/components/Nav.astro` deben coincidir con los `id`.
- Nav activo: solo por clase `.active` en el `<a>` (variantes `[&.active]:` / `group-[.active]:` en `NavLink.astro`); `ScrollSpy.astro` la mueve. La prop `active` solo sirve para el render inicial — nada de ternarios por prop para estilos.
- Tailwind CSS-first: tokens `--color-*-cgh` en `@theme` de `src/styles/global.css`. Utilidades `text-funky*` con `@utility` (soportan variantes); no duplicarlas en `@layer utilities`.
- Error de ESLint en VS Code `The keyword 'interface' is reserved` en `.astro` = diagnóstico obsoleto si `pnpm lint` pasa; reiniciar servidor ESLint.
