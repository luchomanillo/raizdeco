# Raíz Deco — landing estática (GitHub Pages)

1. Abrí `assets/js/config.js` y poné tu número de WhatsApp en `WHATSAPP_NUMBER`.
2. En el mismo archivo editá la lista `PRODUCTS` (nombres, categorías, precios, foto).
3. Subí las fotos a la carpeta `img/` con los nombres que pusiste en `image`.
4. Subí todo el contenido de esta carpeta a un repositorio de GitHub.
5. En el repo: Settings → Pages → Source: "Deploy from a branch" → rama `main`, carpeta `/ (root)` → Save.
6. En unos minutos queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.
   Para usar tu dominio propio: en Settings → Pages → "Custom domain".

## Dónde cambiar cada cosa
- Textos de la página (títulos, párrafos, menú): `index.html`
- Productos (nombre, categoría, precio, foto) y número de WhatsApp: `assets/js/config.js`
- Mensaje que llega por WhatsApp al tocar "Comprar": `assets/js/main.js` (buscá "Quiero comprar")
- Colores y tipografías: `assets/css/style.css` (variables al principio)
