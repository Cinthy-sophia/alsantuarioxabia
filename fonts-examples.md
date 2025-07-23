# Ejemplos de fuentes soportadas por las librerías del proyecto

A continuación se muestran ejemplos de las fuentes que puedes utilizar en el proyecto, especialmente con Tailwind CSS y las fuentes web estándar:

---

## 1. Inter
- Ejemplo CSS: `font-family: 'Inter', sans-serif;`
- Ejemplo Tailwind: `font-sans`
- Uso: Moderno, legible, ideal para interfaces limpias.

## 2. Serif (Georgia, Times New Roman, etc.)
- Ejemplo CSS: `font-family: 'Georgia', 'Times New Roman', serif;`
- Ejemplo Tailwind: `font-serif`
- Uso: Elegante, tradicional, ideal para títulos y textos destacados.

## 3. Monospace (Menlo, Monaco, Consolas, etc.)
- Ejemplo CSS: `font-family: 'Menlo', 'Monaco', 'Consolas', monospace;`
- Ejemplo Tailwind: `font-mono`
- Uso: Código, datos, textos técnicos.

## 4. System Fonts
- Ejemplo CSS: `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;`
- Uso: Rápido, consistente con el sistema operativo.

## 5. Google Fonts (puedes añadir más en tu proyecto)
- Ejemplo: [https://fonts.google.com/](https://fonts.google.com/)
- Ejemplo de uso en HTML:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Montserrat', sans-serif; }
  </style>
  ```

## 6. Tailwind CSS Font Utilities
- `font-sans` → Fuente sans-serif (por defecto Inter si está instalada)
- `font-serif` → Fuente serif
- `font-mono` → Fuente monoespaciada

---

## Ejemplo de uso en JSX/React
```jsx
<h1 className="font-serif text-4xl">Título con fuente Serif</h1>
<p className="font-sans text-lg">Texto con fuente Sans</p>
<code className="font-mono">console.log('Fuente monoespaciada')</code>
```

---

Puedes personalizar las fuentes en el archivo `tailwind.config.js` para añadir otras fuentes o modificar las existentes.
