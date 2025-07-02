# alsantuarioxabia

Este proyecto es una aplicación web desarrollada con Angular para el sitio oficial de "Restaurante Al Santuario", un restaurante mediterráneo en Jávea. El objetivo principal es ofrecer una plataforma moderna y responsiva que permita a los usuarios consultar el menú, realizar reservas y obtener información relevante del restaurante.

## Características técnicas
- Framework: Angular (TypeScript)
- Arquitectura basada en componentes
- Diseño responsivo adaptado a dispositivos móviles y escritorio
- Estructura modular para facilitar la escalabilidad y el mantenimiento
- Código fuente organizado en carpetas por funcionalidad

## Instrucciones para desplegar el proyecto en local

1. **Clona el repositorio:**
   ```bash
   git clone <URL-del-repositorio>
   cd alsantuarioxabia
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Luego abre tu navegador en [http://localhost:4200](http://localhost:4200)

4. **Personalización:**
   - Modifica los archivos en `src/app/` para adaptar el contenido, menú o estilos según las necesidades del restaurante.

---

## Scripts disponibles

Estos son los comandos principales que puedes ejecutar con `npm run`:

- **dev**: Inicia el servidor de desarrollo usando Vite. Permite ver los cambios en tiempo real mientras desarrollas la aplicación.
  ```bash
  npm run dev
  ```
- **build**: Genera una versión optimizada y lista para producción del sitio en la carpeta `dist`.
  ```bash
  npm run build
  ```
- **lint**: Ejecuta ESLint para analizar el código y detectar posibles errores o malas prácticas.
  ```bash
  npm run lint
  ```
- **preview**: Sirve localmente la versión de producción generada en `dist` para comprobar cómo se verá el sitio una vez desplegado.
  ```bash
  npm run preview
  ```
