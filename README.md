# Cartel interactivo · Los recuerdos que se desvanecen

Prototipo de un cartel digital de sensibilización sobre las enfermedades neurodegenerativas, enfocado en el Alzheimer.

## Concepto

Una fotografía familiar aparece desenfocada como metáfora de la fragilidad de la memoria. Al acercar y mover el cursor, una zona circular recupera la nitidez. Al salir del cartel, el recuerdo vuelve a desvanecerse. No pretende reproducir de manera literal los síntomas de todas las personas con Alzheimer.

## Ejecutar

Abre `index.html` en un navegador moderno. No requiere dependencias, React ni servidor. **La foto provisional se carga desde Pexels y requiere Internet**; para una entrega autónoma, descarga una fotografía que tengas derecho a utilizar, guárdala como `assets/familia.jpg` y cambia la propiedad `background-image` de `.photo` en `style.css` a `url("assets/familia.jpg")`.

## Interacciones JavaScript

- `mouseenter`: hace visible la capa de fotografía nítida con una transición de opacidad.
- `mousemove`: mueve la máscara circular para revelar el fragmento de fotografía que está bajo el cursor.
- `mouseleave`: desvanece la capa nítida y recupera el desenfoque completo.

Los eventos se registran con `addEventListener()`. La función propia `moveMemoryLens()` gestiona las coordenadas y modifica las propiedades CSS `--cursor-x` y `--cursor-y`, mientras que `--lens-opacity` controla la aparición y desaparición del enfoque.

La composición usa dimensiones internas fijas de **848 × 1200 px**; `fitPosterToViewport()` la escala proporcionalmente cuando la ventana es más pequeña.

## Contenido provisional

La cabecera contiene la fecha, el tema y un pequeño texto `Lorem ipsum` que se sustituirá cuando se facilite el mensaje final. No hay slides ni clics en esta primera versión.

## Fotografía de prueba

Imagen provisional remota de Anna Shvets en Pexels: https://www.pexels.com/photo/a-family-eating-dinner-together-11368637/ . Se recomienda sustituirla por una fotografía elegida para el diseño definitivo.
