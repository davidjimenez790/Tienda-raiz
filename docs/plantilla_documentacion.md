# Portada
Desarrollo de una interfaz web responsiva — Tienda virtual «Raíz»
Nombre(s), programa, curso, docente, fecha.

# 1. Introducción
Raíz es una tienda virtual de plantas de interior y macetas. La página muestra el catálogo, permite filtrar por tipo de luz, simular un carrito y contactar a la tienda.

# 2. Objetivo de la interfaz
Permitir que una persona elija una planta según la luz de su casa y la contacte, desde cualquier dispositivo, sin desplazamiento horizontal.

# 3. Estructura HTML5
header (logo, menú nav, botón del carrito) · main con sections (portada, productos, beneficios, preguntas, contacto) · article para cada producto · aside para el carrito · footer · details/summary para preguntas frecuentes · form con label.

# 4. Estilos CSS3
Archivo css/estilos.css. Variables CSS para los colores (verde, amarillo), fuente Segoe UI/Arial, sombras, bordes redondeados, efecto hover en tarjetas y botones.

# 5. Estrategia responsiva
- Mobile First: los estilos base son para celular (una columna).
- Media Queries: min-width 600px (tableta, 2 columnas) y 900px (computador, 3 columnas y menú horizontal).
- Flexbox: encabezado, filtros, filas de producto y carrito.
- CSS Grid: portada, productos, beneficios y pie de página.
- Imágenes con max-width: 100%. En celular el menú se abre con el botón ☰.

# 6. Interacción (JavaScript)
Archivo js/main.js: menú del celular, filtros por categoría, carrito (agregar, cambiar cantidad, eliminar, vaciar, total, guardado en localStorage), aviso emergente y validación del formulario.

# 7. Evidencias
Capturas en computador (1366 px), tableta (768 px) y móvil (375 px). [Insertar]
Enlace del video de validación: [pegar]

# 8. Pruebas y correcciones
Problemas encontrados y cómo los resolviste. [Completar]

# 9. Conclusiones
[Completar]

# 10. Referencias
Sharma, S. K. (2023). Web designing using HTML, DHTML and JavaScript. Laxmi Publications.
Fraile, A. (2015). ¿Qué es un diseño responsive? YouTube.
