# Brasa Norte Restaurante

Proyecto Vite + React listo para desplegar en GitHub Pages como sitio estatico de produccion.

## Desarrollo

```bash
npm install
npm run build
```

La carpeta `dist` generada es el resultado de produccion y puede subirse completa a GitHub Pages.

## Despliegue en GitHub Pages

1. Ejecuta `npm install` y despues `npm run build`.
2. Sube unicamente el contenido de la carpeta `dist` al branch o fuente configurada para GitHub Pages.
3. En GitHub, ve a `Settings > Pages`, selecciona la fuente donde subiste `dist` y guarda.

El proyecto usa `base: "./"` en `vite.config.js`, por lo que los assets de produccion son relativos y funcionan en repositorios publicados como subruta.