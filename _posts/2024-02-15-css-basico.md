tags:
  - CSS
status: 📌
Parent: "Area-Prog"
creation date: 2024-02-15 16:30
keywords:
source:
cssclasses:
  - hide-embedded-header1
categories:
public_note: "true"
# CSS-basico

## Introducción a CSS
- Sintaxis básica: `selector { propiedad: valor }`
- CSS puede incluirse en `<style>` dentro del `<head>` o en archivos externos.
- Sirve para controlar colores, fuentes, tamaños, espaciados, posicionamiento, etc.

### Ejemplo básico
{% raw %}
```css
body {
background: pink;
font-family: Arial;
}
```
{% endraw %}`

{% raw %}
```html
<style>
h1, h2, h3 {
color: pink;
font-family: Arial;
}
</style>
```
{% endraw %}

## Tipos de Estilos CSS

- **Internal CSS**: Dentro del `<head>`  
`<style> ... </style>`
- **Inline CSS**: En una etiqueta HTML  
`<p style="color:blue; font-size:35px;">Texto</p>`
- **External CSS**: Archivo externo  
`<link rel="stylesheet" href="style.css">`

## Colores en CSS

{% raw %}
```css
color: red;
color: #33adff;
color: rgb(255, 0, 255);
```
{% endraw %}

## Clases y Span

- Las clases pueden reutilizarse múltiples veces en un documento.
- `span` sirve para aplicar estilos dentro de una línea.

{% raw %}
```css
.blueboldtext {
font-size: small;
font-weight: bold;
color: blue;
}
.largegreentext {
font-size: large;
color: green;
font-weight: bold;
}
.underline {
text-decoration: underline;
}
```
{% endraw %}

{% raw %}
```html
<td class="blueboldtext">
<span class="largegreentext underline">text</span>text
</td>
```
{% endraw %}

## Uso de DIV

- Elementos de bloque para organizar layout, secciones, videos, texto, etc.

`<div>text</div>`

## Selectores por ID

- Los **id** deben usarse solo una vez por documento.
- Se usan para identificar elementos específicos.

{% raw %}
```css
#div1 {
width: 80%;
border: 3px solid black;
background: yellow;
color: black;
}
.underline {
text-decoration: underline;
}
```
{% endraw %}

{% raw %}
```html
<div id="div1" class="underline">text</div>
```
{% endraw %}

## Margen (CSS Margin)

- Controla el espacio externo del elemento.

{% raw %}
```css
#div1 {
width: 80%;
border: 3px solid black;
background: yellow;
color: black;
margin: 0px 0px 50px 30px;
}
```
{% endraw %}

## Padding

- Controla el espacio interno del elemento.

{% raw %}
```css
#div1 {
width: 80%;
border: 3px solid black;
background: yellow;
color: black;
margin: 0px 0px 50px 30px;
padding: 20px;
}
```
{% endraw %}

{% raw %}
```css
padding: 30px 0px 0px 30px;
```
{% endraw %}

## Propiedades de Texto

{% raw %}
```css
color;
letter-spacing;
word-spacing: 10px;
text-align: left;
text-decoration: underline;
text-transform: capitalize; /* uppercase, lowercase */
```
{% endraw %}

## Propiedades de Fuente

{% raw %}
```css
.textstyle {
font-family: verdana, sans-serif;
font-size: large; /* medium, small, %, rem, etc */
font-style: oblique; /* italic, normal */
line-height: 200%; /* Default 110–120% */
}
```
{% endraw %}

## Bordes

- Se pueden aplicar a cada lado o completos.

{% raw %}
```css
.myborder {
border: 4px;
border-color: #333;
border-style: dashed; /* dotted, double, ridge, etc */
}
```
{% endraw %}

## Fondos

- Control de color, imágenes, repetición y posición.

{% raw %}
```css
#div1 {
width: 100%;
height: 500px;
border: 3px solid black;
background-color: blue;
background-image: url(img.jpg);
background-repeat: repeat-y;
background-position: center;
}
```
{% endraw %}

## Transparencia

{% raw %}
```css
img {
opacity: 0.4;
}
img:hover {
opacity: 1;
}
```
{% endraw %}

## Width y Height

- Controla tamaños fijos o adaptativos.

{% raw %}
```css
#div1 {
width: 100%;
min-width: 600px;
max-width: 800px;
height: 500px;
background-color: blue;
}
```
{% endraw %}

{% raw %}
```css
width: auto;   /* tamaño automático */
height: 100vh; /* altura completa del viewport */
```
{% endraw %}

## Texto Encima de Imagen (Nested DIVs)

{% raw %}
```css
#background {
background-image: url(img.jpg);
padding: 40px;
}
#textbox {
width: auto;
height: 100px;
opacity: 0.8;
background-color: black;
padding: 10px;
}
.text {
color: white;
}
```
{% endraw %}

{% raw %}
```html
<div id="background">
<div id="textbox">
	<div class="text">texto</div>
</div>
</div>
```
{% endraw %}

## Propiedad DISPLAY

- Cambia cómo se muestran los elementos.

{% raw %}
```css
#div1 {
width: 50px;
height: 50px;
background-color: yellow;
display: inline-block;
}
#div2 {
width: 50px;
height: 50px;
background-color: blue;
display: inline-block;
}
#div3 {
width: 50px;
height: 50px;
background-color: red;
display: none;
}
```
{% endraw %}

## Positioning

### STATIC

- Posición por defecto.

### RELATIVE

{% raw %}
```css
position: relative;
top: 50px;
left: 50px;
```
{% endraw %}

### ABSOLUTE

- Posición respecto al contenedor padre con `position: relative`.

{% raw %}
```css
position: absolute;
```
{% endraw %}

### FIXED

- El elemento no se mueve al hacer scroll.

{% raw %}
```css
position: fixed;
```
{% endraw %}

## Propiedad FLOAT

{% raw %}
```css
img {
float: right;
margin: 0 0 10px 10px;
}
```
{% endraw %}

## Propiedad CLEAR

- Controla cómo interactúan los elementos flotantes.

`clear: left;`

## Z-INDEX

- Controla qué elemento se superpone.

{% raw %}
```css
z-index: 1;
z-index: 2;
```
{% endraw %}

## Estilos para Enlaces

{% raw %}
```css
a:link {
color: red;
text-decoration: none;
}
a:visited {
color: blue;
}
a:hover {
color: purple;
text-decoration: underline;
background-color: yellow;
}
a:active {
color: blue;
}
```
{% endraw %}

{% raw %}
```html
<p><a href="#" target="_blank">Sample Link</a></p>
```
{% endraw %}

## Tablas en CSS

{% raw %}
```css
table, td, th {
border: 1px solid #ddd;
text-align: left;
}
table {
border-collapse: collapse;
width: 100%;
}
th, td {
padding: 15px;
}
tr:hover {
background-color: cyan;
}
```
{% endraw %}

## Proyecto CSS – Metas Responsivas

{% raw %}
```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
```
{% endraw %}