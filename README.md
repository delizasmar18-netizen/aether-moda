# AETHER STUDIO | Tienda de Ropa Urbana & Moda

Página web de e-commerce moderna para la práctica de aula y laboratorio sobre control de versiones con Git y GitHub.

## Estructura
- `index.html`: Catálogo con imágenes estéticas de prendas, filtros interactivos, lookbook y carrito de compras.
- `css/styles.css`: Estilos visuales con tipografía *Plus Jakarta Sans*, efectos hover y paleta minimalista.
- `js/app.js`: Carrito de compras funcional, filtros en tiempo real y suscripción.

## Comandos Git para tu Entrega de Laboratorio
1. Inicializar o clonar en tu equipo:
   ```bash
   git clone <URL_REPOSITORIO>
   cd aether_moda_urbana
   ```
2. Realizar un commit inicial:
   ```bash
   git add .
   git commit -m "feat: lanzar tienda AETHER Studio con catalogo y lookbook"
   git push origin main
   ```
3. Consultar historial para capturas:
   ```bash
   git log --oneline --graph --all
   git show <hash_del_commit>
   git log -p index.html
   ```
