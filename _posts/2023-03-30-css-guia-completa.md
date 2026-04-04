---
date: 2023-03-30 18:36
title: CSS-Guia completa
status: 📌
Parent: "[[Area-Prog]]"
keywords:
source:
category: uncategorized
tags:
  - CSS
---
# CSS-Guia completa


# 01-CSS Intro

## Introducción
- Conceptos básicos: **reglas**, **selectores**, **propiedades**, **valores**, estilos en conflicto.
- Uso de **Google Fonts**:  
	[Google Fonts](https://fonts.google.com/)
- CSS controla presentación visual y estructura responsiva de elementos HTML.

## Selectores
- Tipos principales:
	- **Elementos**: `p`, `h1`, `div`
	- **Clases**: `.btn`, `.title`
	- **Universal**: `*`
	- **IDs**: `#header`
	- **Atributos**: `[disabled]`, `[type="text"]`
- Estilo de nombres: **kebab-case** (`main-title`, `product-overview`).
- Se pueden asignar **múltiples clases** a un mismo elemento.
- El **orden dentro del selector importa**, ya que afecta la especificidad combinada.

## Especificidad (Specificity)
- CSS es *cascading*: múltiples estilos pueden aplicarse al mismo elemento.
- Orden de prioridad (de mayor a menor):
	1. **Inline styles**
	2. **IDs**
	3. **Clases**, **pseudo-clases**, **atributos**
	4. **Etiquetas (elementos)** y **pseudo-elementos**
- **Herencia**:
	- Algunas propiedades se heredan automáticamente.
	- Otras requieren: `font-family: inherit;`
	- La herencia tiene **baja prioridad** frente a reglas específicas.

## Combinators
- Permiten seleccionar elementos basados en su relación en el DOM.
- Ejemplo común:
	`#product-overview h1` → selecciona `h1` dentro de ese ID.

### Tipos de combinators
- **Adjacent sibling (`+`)**
	- Selecciona el elemento que viene **inmediatamente después**.
	- Requiere que compartan el mismo padre.
	- Ejemplo: `h2 + p`
- **General sibling (`~`)**
	- Selecciona **todos los elementos posteriores** al primero, compartiendo el mismo padre.
	- Ejemplo: `h2 ~ p`
- **Child (`>`)**
	- Selecciona **solo hijos directos**.
	- Ejemplo: `div > p`
	- No selecciona elementos dentro de niveles más profundos.
- **Descendant (espacio)**
	- Selecciona elementos dentro del otro **en cualquier profundidad**.
	- Ejemplo: `div p`

## Propiedades Básicas
- Ejemplos comunes:
	- `background-color`
	- `width`
	- `color`
	- `margin`
	- `display`
- Ejemplos de valores:
	- `red`, `30%`, `#fafafa`, `10px`, `block`
- Ejemplos de selectores:
	- `div .blog.post #main-title [disabled] *`
- Índice de palabras clave CSS:  
	[Índice de palabras clave - MDN](https://developer.mozilla.org/es/docs/Web/CSS/Reference#%C3%ADndice_de_palabras_clave)

## Tipos de Valores
- **Opciones predefinidas**:
	- `display: block;`
	- `overflow: auto;`
- **Colores**:
	- `background: red;`
	- `color: #ffffff;`
- **Longitudes, tamaños y números**:
	- `height: 1400px;`
	- `width: 20%;`
	- `order: 1;`
- **Funciones**:
	- `background: url(image.jpg);`
	- `transform: scale(1.2);`

# 02 CSS Box model, propiedades

## Conceptos Clave
- Box model, height y width, display, propiedades, pseudo-clases y pseudo-elementos.
- CSS trata cada elemento como una **caja**: contenido, padding, border y margin.

## Box Model
- **Margin por defecto**: los navegadores aplican márgenes a elementos como `body` y `h1`.
- Para reiniciar márgenes: `body { margin: 0; }`
- **Block-level elements** ocupan todo el ancho disponible por defecto (`width: 100%`).
- **Height** se calcula en relación con el contenedor padre o contenido directo.

### Margin Collapsing
- [Mastering margin collapsing - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- **Reglas**:
	- Entre elementos adyacentes, solo se aplica el **mayor margen**.
	- Para elementos padre con hijos, los márgenes del primer o último hijo pueden colapsar con el padre.
	- Elementos vacíos con márgenes: se aplica el margen más grande.
- Shorthand y propiedades individuales:
{% raw %}
```css
border: 2px dashed orange; /* width style color */
margin: 5px 10px 5px 10px; /* top right bottom left */
margin: 5px 10px;          /* top/bottom, left/right */
margin: 10px;              /* todas las direcciones */
```
{% endraw %}`

### Box-sizing

- **Content-box**: ancho y alto solo incluyen contenido, padding y border se suman fuera.
- **Border-box**: ancho y alto incluyen padding y border.
- Uso recomendado: aplicar globalmente `* { box-sizing: border-box; }` para consistencia.
- **Errores comunes**:
- Elementos `section` como block-level no heredan `box-sizing` del `body`.

## Display y Layout

- Propiedad `display`:
- `block`: ocupa todo el ancho.
- `inline`: ocupa solo el espacio necesario.
- `inline-block`: mezcla de block y inline.
- `none`: elimina del flujo visual, pero sigue en el DOM.
- [Inline box model](https://hacks.mozilla.org/2015/03/understanding-inline-box-model/)

### Alineación y BEM

- Clases BEM ejemplo: `main-nav__items`, `main-nav__item`, `main-nav`.
- Problemas de alineación entre `div` y `nav`:
- Usar `inline` o `inline-block` y combinators.
- Ajustar `width` y padding de `ul` a 0.
- Calcular `width` con `calc()`: `width: calc(100% - 54px);`
- Centrar verticalmente: `vertical-align: middle;`
- Ajustar márgenes laterales: `margin: 0 16px;`

### Pseudo-clases y Pseudo-elementos

- **Pseudo-clases**: definen estilos en un estado especial del elemento.  
- Ejemplo: `:hover`, `:active`, `:first-of-type`
- [Pseudo-classes - MDN](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes)
- **Pseudo-elementos**: definen estilo en una parte específica del elemento.  
- Ejemplo: `p::first-letter`, `::before`, `::after`
- [Pseudo-elements - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- Ejemplo práctico:

{% raw %}
```css
.main-nav__item a {
font-weight: bold;
padding: 3px 0;
border-bottom: 5px solid white; /* en hover o active */
}
.main-nav__item a:hover,
.main-nav__item a:active {
border-bottom-color: white;
}
```
{% endraw %}

- **Call-to-action link**:

{% raw %}
```html
<li class="main-nav__item main-nav__item--cta">
```
{% endraw %}

- BEM naming para sobrescribir estilos: `border: none;`, background con imagen, etc.

## Propiedades que recordar

- `color`, `background-color`, `display`, `padding`, `border`, `margin`, `width`, `height`

## Resumen de Conceptos

- **Box model**: content, padding, border, margin.
- **Inline elements**: margin-top/bottom no afecta; width/height no se aplica.
- **Block elements**: ocupan todo el ancho disponible, respetan margin y height.
- **Display property**: controlar block, inline, inline-block y none.
- **Pseudo-clases y pseudo-elements**: aplicar estilos en estados o partes específicas del elemento.
- **Margin collapsing**: entre elementos adyacentes, el mayor margen prevalece.

## Display None vs Visibility Hidden

- `display: none`:
- Oculta y elimina del flujo del documento.
- Elemento sigue en el DOM, accesible por JS.
- `visibility: hidden`:
- Oculta, pero mantiene el espacio ocupado.
- Elemento sigue en el DOM, no altera el flujo.
## Codigo 

{% raw %}
```css
.main-nav__items {
	margin: 0;
	padding: 0;
	list-style: none;
}
```
{% endraw %}

{% raw %}
```css
.main-header__brand {
color: rgb(24, 24, 151);
text-decoration: none;
font-weight: bold;
font-size: 22px;
}
```
{% endraw %}

{% raw %}
```css
.main-nav__item a::after {
	content: " (link)";
	color: red;
}
.main-nav__item a:active {
	color: white;
}
```
{% endraw %}

{% raw %}
```css
.main-nav__item a:hover,
.main-nav__item a:active {
color: white;
}
```
{% endraw %}

{% raw %}
```css
	.main-nav__item--cta a {
	color: white;
	background: rgb(87, 87, 194);
	padding: 8px 16px;
	border-radius: 8px;
	}
```
{% endraw %}

{% raw %}
```css
.main-nav__item--cta a {
	color: white;
	background: rgb(74, 198, 236);
	padding: 8px 16px;
	border-radius: 8px;
}

.main-nav__item--cta a:hover,
.main-nav__item--cta a:active {
	color: blue;
	background-color: white;
	border: none;
}
```
{% endraw %}

{% raw %}
```css
.box-1 {
display: none;
}

.box-2 {
display: inline-block;
}
```
{% endraw %}

{% raw %}
```css
.box-1 {
visibility: hidden;
}

.box-2 {
display: inline-block;
}
```
{% endraw %}

# 03-Selectores y Características

## Clases en CSS
- Se pueden asignar **múltiples clases** a un elemento: `class="class1 class2"`.
- Se pueden **encadenar selectores** para mayor especificidad:  
	`a.active { color: red; }`
- Si dos clases definen la **misma propiedad**, se aplican:
	- **Especificidad (specificity)**
	- **Orden de declaración**: la clase definida **después** sobrescribe la anterior.
- Encadenamiento separado:  
	`a .active` → selecciona cualquier elemento con clase `active` que esté dentro de un `a` (descendiente), no necesariamente un hijo directo.

## Class selectors vs ID selectors
- **Clases (`.class`)**: se recomiendan para la mayoría de estilos reutilizables.
- **IDs (`#id`)**: más semánticos, útiles para enlaces internos y elementos únicos.
- Preferencia: usar clases para CSS, IDs para anclas o manipulación con JavaScript.

## Uso de `!important`
- Sobrescribe **toda especificidad y reglas de orden**.
- Ejemplo: `color: red !important;`
- Usar con **precaución**: solo en casos muy específicos (paquetes externos o JS).
- Puede afectar propiedades como `border` o altura.

## Pseudo-clases y Pseudo-elementos
- **Pseudo-clases**: aplican estilo en un **estado especial** del elemento.  
	- Ejemplos: `:hover`, `:active`, `:first-of-type`
- **Pseudo-elementos**: aplican estilo a una **parte específica** del elemento.  
	- Ejemplos: `::first-letter`, `::after`, `::before`

## Selector `:not()`
- Excluye elementos que coinciden con un selector: `a:not(.active)`
- Usar **preferentemente casos positivos**, ya que `:not()` puede complicar la especificidad.
- No sobrescribe selectores con mayor especificidad: `a.active` sigue prevaleciendo.

## Soporte de Navegadores
- Revisar compatibilidad para características avanzadas y pseudo-clases/elements.
- [MDN Pseudo-classes](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes)
- [MDN Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)

## Resumen
- Los **class selectors** (`.class`) son la base: se pueden combinar y encadenar (`a.active .priority-highlighted`).
- Evitar `!important` salvo casos necesarios.
- Pseudo-clases más usadas: `:hover`, `:active`.
- `:not()` útil para excluir elementos, usar con precaución.
- Encadenar selectores y usar clases permite **control preciso** y **resolución de casos extremos**.
## Codigo
{% raw %}
```css
    .main-section {
        height: 800px;
        border: 1px solid #ccc;
        padding: 16px;
    }
    .highlighted {
        border: 2px solid #fa923f;
    }
```
{% endraw %}
{% raw %}
```css
    .highlighted {
        border: 2px solid #fa923f;
    }
    .main-section {
        height: 800px;
        border: 1px solid #ccc;
        padding: 16px;
    }
    ```
{% endraw %}
{% raw %}
```css
    a.active {
        color: #521751;
    }
```
{% endraw %}

{% raw %}
```css
.main-section {
    height: 800px;
    border: 1px solid #ccc !important;
    padding: 16px;
}

.highlighted {
    border: 2px solid #3fdefa;
    height: 200px;
}
```
{% endraw %}

{% raw %}
```css
a:not(.active) {
    color: rgb(109, 128, 0);
}
```
{% endraw %}

{% raw %}
```css
a.active {
    color: #521751;
}

a {
    color: blue;
}
```
{% endraw %}

# 04-Práctica Básica

## Estructura de Clases y Elementos
- Clases usadas en ejemplos:
	- `class="plan__annotation"`
	- `class="plan plan--highlighted"`
	- `<ul class="plan__features">`
- Usar **BEM naming** para mantener consistencia y escalabilidad.

## Box Shadow
- Aplicar sombras en elementos: [box-shadow - MDN](https://developer.mozilla.org/es/docs/Web/CSS/box-shadow)
- Ejemplo:
{% raw %}
```css
.plan {
	box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```
{% endraw %}`

## Flexbox

- Para alinear tarjetas o elementos horizontalmente.
- Problema común: elementos **no alineados exactamente** a la izquierda y derecha.

{% raw %}
```css
.plan__list {
	display: flex;
	justify-content: center; /* centra horizontalmente */
	gap: 20px; /* espacio entre cards */
}
```
{% endraw %}

## Action Button

- Revisar valores por **default del navegador**.
- La herencia puede ser sobrescrita: `font: inherit;` fuerza la herencia de CSS.
- Quitar outline predeterminado:  

{% raw %}
```css
button {
	outline: none; /* outline no forma parte del box model */
}
```
{% endraw %}

## Características Clave

- Vertical-align: [pr_pos_vertical-align.asp](https://www.w3schools.com/cssref/pr_pos_vertical-align.asp)
- Centrado horizontal con `margin: 0 auto;` (solo funciona horizontalmente)
- Footer:
	- Márgenes heredados por `ul`
	- Colores pueden ser sobrescritos por navegador, ajustar según necesidad.

## Package Page

- Crear **CSS compartido** para main section y link section.
- Asegurar que enlaces ocupen ancho completo: `display: block;`
- Para cada plan: usar **ID selector** y background distinto.
- Hover effect en cada plan:

{% raw %}
```css
#plan-1:hover {
	background-color: #f0f0f0;
}
```
{% endraw %}

- Posicionar paquetes a la derecha:
	- `float: right;`  
	- [Float - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
	- Explica: mueve el elemento a izquierda/derecha y saca del flujo del documento.
- Limpiar floats:

{% raw %}
```html
<div class="clearfix"></div>
```
{% endraw %}

{% raw %}
```css
.clearfix::after {
	content: "";
	display: table;
	clear: both;
}
```
{% endraw %}

- Mejor usar **flexbox** para alineaciones limpias y responsivas.

## Bordes y Hover

- Problema: border a la izquierda no funciona con hover debido a especificidad.
- Solución rápida: usar `!important` solo si es necesario para librerías externas.

{% raw %}
```css
.plan--highlighted {
	border-left: 5px solid #ff0000 !important;
}
```
{% endraw %}

## Centrado de Plan List

- Para centrar varios planes:

{% raw %}
```css
.plan__list {
	display: flex;
	justify-content: center;
}
```
{% endraw %}

- Problema común: títulos no alineados correctamente debido a **inline-block** y espacio entre elementos.
- Soluciones:
	- Eliminar espacios en HTML entre los elementos.
	- Usar `flexbox` en lugar de `inline-block`.

{% raw %}
```css
.plan {
	display: flex;
	flex-direction: column;
	align-items: center;
}
```
{% endraw %}

## Resumen de Buenas Prácticas

- Usar **BEM** para clases.
- Preferir **flexbox** sobre floats para layout.
- Evitar `!important` salvo en casos específicos.
- Revisar herencia de propiedades y sobrescribir con cuidado (`font: inherit;`).
- Limpiar floats si se usan (`.clearfix`).
- Asegurar alineación y centrado con `display: flex` y `justify-content/align-items`.
## Codigo

{% raw %}
```css
.plan {
background-color: rgb(199, 238, 250);
text-align: center;
padding: 16px;
margin: 8px;
display: inline-block;
width: 30%;
vertical-align: middle;
}
```
{% endraw %}

{% raw %}
```css
.section-title {
color: #3140ca;
text-align: center;
}
```
{% endraw %}

{% raw %}
```css
.plan--highlighted {
background-color: rgb(82, 82, 167);
color: white;
box-shadow: 2px 4px 2px 2px rgba(82, 82, 167, 0.5);
}
```
{% endraw %}

{% raw %}
```css
.plan__annotation {
background-color: rgb(255, 255, 255);
color: black;
padding: 8px;
box-shadow: 2px 2px 2px 2px rgba(76, 76, 95, 0.5);
border-radius: 8px;
}
```
{% endraw %}

{% raw %}
```css
.plan__features {
list-style: none;
padding: 0;
margin: 0;
}
```
{% endraw %}

{% raw %}
```css
.plan__features li {
padding: 8px 0;
}
```
{% endraw %}

{% raw %}
```css
.plan__title {
color: rgb(82, 82, 167);
}

.plan__price {
color: rgb(67, 58, 83);
}

.plan--highlighted .plan__title {
color: white;
}

.plan--highlighted .plan__price {
color: rgb(14, 17, 19);
}
```
{% endraw %}

{% raw %}
```css
.button {
background:rgb(82, 82, 167);
color: white;
}
```
{% endraw %}

{% raw %}
```css
.button {
background:rgb(48, 48, 95);
color: white;
font: inherit;
border: 1px solid rgb(48, 48, 95);
padding: 8px;
border-radius: 8px;
font-weight: bold;
cursor: pointer;
}

.button:hover,
.button:active {
background: white;
color: rgb(14, 17, 19);
outline: none;
}
```
{% endraw %}

{% raw %}
```css
#key-features {
background: #3140ca;
margin-top: 80px;
padding: 16px;
}

#key-features .section-title {
color: white;
margin: 32px;
}
```
{% endraw %}

{% raw %}
```css
.key-feature__list {
list-style: none;
margin: 0;
padding: 0;
text-align: center;
}

.key-feature {
display: inline-block;
width: 30%;
vertical-align: top;
}

.key-feature__description {
text-align: center;
font-weight: bold;
color: white;
font-size: 20px;
}
```
{% endraw %}

{% raw %}
```css
.key-feature__image {
background: rgb(88, 125, 226);
width: 120px;
height: 120px;
border: 2px solid rgb(14, 11, 48);
border-radius: 50%;
margin: 0 auto;
}
```
{% endraw %}

{% raw %}
```css
.main-footer {
background: black;
padding: 32px;
margin-top: 48px;
}

.main-footer__links {
list-style: none;
margin: 0;
padding: 0;
text-align: center;
}

.main-footer__link {
display: inline-block;
margin: 0 16px;
}

.main-footer__link a {
color: white;
text-decoration: none;
}

.main-footer__link a:hover,
.main-footer__link a:active {
color: #ccc;
}
```
{% endraw %}

{% raw %}
```html
<link rel="stylesheet" href="shared.css">
<link rel="stylesheet" href="main.css">
```
{% endraw %}

{% raw %}
```css
main {
padding-top: 32px;
}

.package {
width: 80%;
margin: 16px 0px;
border: solid 2px rgb(14, 11, 48);
border-left: none;
}

.package a {
text-decoration: none;
color: inherit;
display: block;
padding: 32px;

}
```
{% endraw %}

{% raw %}
```css
#plus {
background-color: rgba(199, 239, 255, 0.95);
}

#free {
background: rgba(152, 231, 245, 0.95);
}

#premium {
background: rgba(85, 180, 184, 0.95);
}

#premium .package__title {
color: white;
}

#premium  .package__subtitle {
color: rgb(110, 109, 109);
}
```
{% endraw %}

{% raw %}
```css
.package:hover,
.package:active {
box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.5) ;
border-color: rgb(92, 92, 230);
}
```
{% endraw %}

{% raw %}
```css
.clearfix {
	clear: both;
}
```
{% endraw %}

{% raw %}
```css
#free {
background: rgba(152, 231, 245, 0.95);
float: right;
border-right: none;
border-left: solid 4px rgb(84, 157, 199);
text-align: right;
}
```
{% endraw %}

{% raw %}
```css
#free:hover,
#free:active {
	border-left-color:  rgb(92, 92, 230);
}
```
{% endraw %}

{% raw %}
```css
.package {
	width: 80%;
	margin: 16px 0px;
	border: solid 4px rgb(84, 157, 199);
	/* border-left: none; */
}

#plus {
	background-color: rgba(199, 239, 255, 0.95);
	border-left: none;
}

#free {
	background: rgba(152, 231, 245, 0.95);
	float: right;
	border-right: none;
	/* border-left: solid 4px rgb(84, 157, 199); */
	text-align: right;
}

#premium {
	background: rgba(88, 205, 235, 0.95);
	border-left: none;
}
```
{% endraw %}


{% raw %}
```css
	.package:hover,
	.package:active {
		box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.5) ;
		border-color: rgb(92, 92, 230) !important;
	}
	```
{% endraw %}

{% raw %}
```css
.plan__list {
width: 80%;
margin: auto;
}
```
{% endraw %}


{% raw %}
```css
.plan__list {
width: 80%;
margin: auto;
text-align: center;
}
```
{% endraw %}

# 05-Posicionar Elementos

## Introducción
- Propiedad `position`: controla la ubicación de un elemento.
- Tipos principales: `static` (default), `relative`, `absolute`, `fixed`, `sticky`.
- Uso de `z-index` para controlar el orden de apilamiento.
- Aplicaciones comunes:
	- Fixed navbars
	- Badges en elementos destacados
	- Stacking content (apilamiento de elementos)
	- Posicionamiento sticky

## Teoría de Position Property
- Cambiar posición de imágenes, divs y navbars.
- `top`, `left`, `right`, `bottom` se aplican según el **contexto posicional**:
	- Viewport (`fixed`)
	- Ancestro con `position` distinto a `static` (`absolute`)
	- Propio elemento (`relative`)
- Posición por defecto: `static`.
- Valores menos soportados en algunos browsers: `sticky`.

### Contexto Posicional
- Si ningún ancestro tiene `position`, el contexto es el elemento `<html>`.
- Si hay un ancestro con `position`, el elemento se posiciona respecto al más cercano.
- `absolute` y `fixed` **sacan elementos del document flow**.
- `relative` **mantiene el flujo**, pero mueve el elemento desde su posición original.
- `sticky` es un híbrido: actúa como `relative` hasta un límite, luego como `fixed`.

## Practica de Posicionamiento
- Valores solo aplican si `position != static`.
- Elemento fuera del flujo: los demás no lo consideran.
- Ejemplo: badge en paquete Plus:
{% raw %}
```html
<h2 class="package__badge">RECOMMENDED</h2>
```
{% endraw %}`

{% raw %}
```css
.package__badge {
	position: absolute; 
	top: 0;
	left: 0;
}
```
{% endraw %}

- `position: fixed;` usa el viewport como referencia.
- Ajustes con `box-sizing: border-box;` para borders y padding.

## Fixed Nav

- Añadir al proyecto:

{% raw %}
```html
<header class="main-header"></header>
```
{% endraw %}

{% raw %}
```css
.main-header {
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 5;
}
```
{% endraw %}

- Margin aplicado al `html` no afecta al viewport, debe aplicarse al elemento padre.
- Background image detrás de contenido:

{% raw %}
```css
.background {
	position: fixed;
	width: 100%;
	height: 500px;
	z-index: -1;
}
```
{% endraw %}

## Z-Index

- Controla **apilamiento** de elementos posicionados.
- Valores:
	- `auto` o `0` por defecto
	- Positivo: encima de otros elementos
	- Negativo: debajo
- No funciona si el elemento no tiene `position` distinto a `static`.

## Relative Position

- Elemento mantiene su posición en el flujo.
- Se mueve relativo a su posición inicial:

{% raw %}
```css
.child {
	position: relative;
	top: 50px;
	left: 50px;
}
```
{% endraw %}

- `overflow: hidden;` en el padre evita que el hijo se salga visualmente.

## Sticky Position

- Comportamiento híbrido entre `relative` y `fixed`.
- Se mueve con el flujo hasta un límite definido:

{% raw %}
```css
.header-sticky {
	position: sticky;
	top: 0;
}
```
{% endraw %}

- Soporte parcial en algunos navegadores.

## Stacking Content

- Elementos con `position: fixed/absolute/relative/sticky` crean **stacking context**.
- Controla el orden de apilamiento con `z-index`.
- Elementos hijos respetan el contexto del padre.
- Ejemplo: imagen detrás de nav:

{% raw %}
```css
.background-image {
	position: fixed;
	z-index: 0;
}
.main-header {
	z-index: 5;
}
```
{% endraw %}

## Resumen

- `position`: `static`, `relative`, `absolute`, `fixed`, `sticky`.
- Document flow:
	- `static` y `relative` mantienen flujo.
	- `absolute` y `fixed` sacan elementos del flujo.
- Top, bottom, left, right: determinan distancia desde el **contexto posicional**.
- Z-index:
	- Controla apilamiento vertical.
	- Solo afecta elementos posicionados (`!= static`).
- Stacking context:
	- Se crea con posición + z-index.
	- Elementos hijos se apilan dentro del contexto.
	- Un elemento con z-index bajo dentro de un contexto alto puede quedar encima de otro contexto vecino.
## Codigo

{% raw %}
```css
    html {
        background: #b3b3b3;
        padding: 15px;
        border: 5px solid white;
        margin: 15px;
        height: 2000px;
    }
    body {
        background: #45d1e4;
        padding: 20px;
        border: 5px solid black;
        margin: 0;
      }
    .parent {
        background: white;
        padding: 20px;
        border: 5px solid black;
        margin: 0;
      }
    .parent div {
        background: rgb(105, 107, 109);
        color: white;
        padding: 10px;
        border: 5px solid black;
        margin: 10px;
    }
    ```
{% endraw %}

{% raw %}
```css
.parent .child-1 {
  position: fixed;
  top: 100px;
}
```
{% endraw %}

{% raw %}
```css
.parent .child-1 {
  position: fixed;
  /* top: 100px; */
  width: 400px;
  top: 0;
  margin: 0;
}
```
{% endraw %}

{% raw %}
```css
.parent .child-1 {
  position: fixed;
  /* top: 100px; */
  width: 400px;
  left: 0;
  top: 0;
  margin: 0;
  width: 100%;
}
```
{% endraw %}

{% raw %}
```css
.main-header {
    width: 100%;
    position: fixed;
    /* height: 100%; */
    background: rgb(167, 233, 253);
    /* color: white; */
    padding: 8px 16px;
    /* margin: 10px; */
}
```
{% endraw %}

{% raw %}
```css
html {
margin: 30px;
}
```
{% endraw %}

{% raw %}
```css
.main-header {
    width: 100%;
    position: fixed;
    /* height: 100%; */
    background: rgb(167, 233, 253);
    /* color: white; */
    padding: 8px 16px;
    /* margin: 10px; */
    top: 0;
    left: 0;
}
```
{% endraw %}

{% raw %}
```css
.background {
    background: url(../images/plans-background.jpg);
    width: 100%;
    height: 100%;
}
```
{% endraw %}

{% raw %}
```css
.background {
    background: url(../images/plans-background.jpg);
    width: 500px;
    height: 500px;
}
```
{% endraw %}

{% raw %}
```css
.background {
    background: url(../images/plans-background.jpg);
    width: 100%;
    height: 100%;
    position: fixed;
}
```
{% endraw %}

{% raw %}
```css
.background {
    background: url(../images/plans-background.jpg);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
}
```
{% endraw %}

{% raw %}
```css
.main-header {
    width: 100%;
    position: fixed;
    /* height: 100%; */
    background: rgb(167, 233, 253);
    /* color: white; */
    padding: 8px 16px;
    /* margin: 10px; */
    top: 0;
    left: 0;
    z-index: 0; 
}
```
{% endraw %}

{% raw %}
```css
.package__badge {
    position: fixed;
    top: 0;
    left: 0;

}
```
{% endraw %}

{% raw %}
```css
.package__badge {
    position: fixed;
    top: 50px;
    left: 400px;
    margin: 20px;

}
```
{% endraw %}

{% raw %}
```css
    .package {
        width: 80%;
        margin: 16px 0px;
        border: solid 4px rgb(84, 157, 199);
        /* border-left: none; */
        position: absolute;
    }
    ```
{% endraw %}

{% raw %}
```css
.package__badge {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    font-size: 12px;
    color: white;
    background-color: rgb(77, 77, 233);
    padding: 8px;
}
```
{% endraw %}

{% raw %}
```css
.main-header {
    width: 100%;
    position: fixed;
    /* height: 100%; */
    background: rgb(167, 233, 253);
    /* color: white; */
    padding: 8px 16px;
    /* margin: 10px; */
    top: 0;
    left: 0;
    z-index: 1; 
}
```
{% endraw %}

{% raw %}
```css
.parent {
    background: white;
    padding: 20px;
    border: 5px solid black;
    margin: 0;
    /* overflow: hidden; */
    position: relative;
    top: 100px;
  }
```
{% endraw %}

{% raw %}
```css
.parent .country {
    background: #fa923f;
    color: white;
    padding: 10px;
    border: 5px solid black;
    margin: 10px;
    position: sticky;
    top: 0;
}
```
{% endraw %}


{% raw %}
```css
.navigation, .headline, .contact-us {
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    position: fixed;
}
```
{% endraw %}

# 06-Background Images & Images

## Contenido
- Background property
- Images y background images
- Gradients (linear y radial)
- Filters

## Background Property
- `background-color` no sobreescribe a `background-image`.
- Tamaño de la imagen:
	- `background-size: 300px 100px;` define ancho y alto explícitamente.
	- `background-size: 50%;` 50% del contenedor.
	- `background-size: cover;` cubre todo el contenedor, recortando si es necesario.
	- `background-size: contain;` mantiene toda la imagen dentro del contenedor, no recorta.
	- `background-size: auto 100%;` mantiene aspect ratio sin distorsión.
- Posición de la imagen:
	- `background-position: center;` centra la imagen.
	- `background-position: left top;` alinea con top-left del contenedor.
	- Valores combinados con % y px para ajustes finos.
- `background-repeat`: por defecto `repeat`, puede ser `no-repeat`.
- `background-attachment`: fija (`fixed`) o scroll (`scroll`).

## Background-Origin & Background-Clip
- `background-origin`: determina área para posicionamiento
	- `content-box`, `padding-box`, `border-box` (default: padding-box)
- `background-clip`: determina área visible del fondo
	- `content-box`, `padding-box`, `border-box`
- Shorthand:
{% raw %}
```css
background: url(./freedom.jpg) left 10% bottom 20%/cover no-repeat border-box padding-box;
```
{% endraw %}`

{% raw %}
```
- El primer valor después de la posición es **origin**, el segundo **clip**.
```
{% endraw %}

## Logos e imágenes en página

{% raw %}
```
- `.main-header__brand` es contenedor, no afecta directamente a la imagen.
- Por defecto, imágenes usan su width y height originales.
- Para ajustar al contenedor:
	- `display: inline-block;` respeta dimensiones del contenedor.
	- `display: block;` elimina espacios en blanco por inline element.
	- Ajustar texto al lado de la imagen: `vertical-align: middle;`.
	- Sombra: `box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);`.
```
{% endraw %}

## Gradients

### Linear Gradients

{% raw %}
```
- Tratados como imágenes de fondo.
- Sintaxis básica:
```
{% endraw %}

{% raw %}
```css
background-image: linear-gradient(red, blue);
background-image: linear-gradient(to bottom, red, blue);
background-image: linear-gradient(30deg, red, blue);
background-image: linear-gradient(180deg, red, transparent);
background-image: linear-gradient(180deg, red 70%, blue 80%, rgba(0,0,0,0.5));
```
{% endraw %}

### Radial Gradients

{% raw %}
```
- Sintaxis básica:
```
{% endraw %}

{% raw %}
```css
background-image: radial-gradient(red, blue);
background-image: radial-gradient(circle, red, blue);
background-image: radial-gradient(circle at top left, red, blue);
background-image: radial-gradient(ellipse 80px 30px at 20% 50%, red, blue);
background-image: radial-gradient(ellipse farthest-side at 20% 50%, red, blue);
```
{% endraw %}

{% raw %}
```
- Parametros: `shape`, `size`, `position`, `color stops`.
```
{% endraw %}

## Multiples Backgrounds

{% raw %}
```
- Apilar imágenes de fondo usando comas:
```
{% endraw %}

{% raw %}
```css
background: linear-gradient(to bottom, red, blue), url(./freedom.jpg) left 10% bottom 20%/cover no-repeat, red;
```
{% endraw %}

{% raw %}
```
- Solo un solid color puede estar debajo.
- Usar transparencia para combinar capas.
```
{% endraw %}

## Filters

{% raw %}
```
- [Filter Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#syntax)
- Filtros aplicables a `background-image` o `img`.
- Limitaciones en Internet Explorer.
- Compatible con SVG.
```
{% endraw %}

## Resumen

- **Background Property**
	- `background-image`, `background-color`, `background-position`, `background-size`, `background-origin`, `background-clip`, `background-repeat`, `background-attachment`.
	- Shorthands sobrescriben otras propiedades.
- **Gradients**
	- Linear: dirección + stops
	- Radial: forma + tamaño + posición + stops
- **Multiples Backgrounds**
	- Apilar capas
	- Solo un solid color como base
	- Transparencias permiten mezcla visual
- **Estilizar imágenes**
	- `img` para accesibilidad, más difícil de estilizar
	- `background-image` más flexible para tamaño, posición y efectos
- **Filters**
	- Permiten efectos visuales sin alterar la imagen original

## Codigos
{% raw %}
```css
background-image: url(./freedom.jpg);
background-color: red;
```
{% endraw %}

{% raw %}
```css
background-size: 150px;
background-repeat: no-repeat;
```
{% endraw %}

{% raw %}
```css
background-repeat: repeat-x;
background-repeat: repeat-y;
```
{% endraw %}

{% raw %}
```css
#product-overview {

    /* background: url(./freedom.jpg); */
    background-image: url(./freedom.jpg);
    /* background-color: rgb(88, 125, 226); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left 10% bottom 20%;
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;
}
```
{% endraw %}

{% raw %}
```css
		background-attachment: fixed;
    background-attachment: scroll;
    background-attachment: local;
```
{% endraw %}

{% raw %}
```css
#product-overview {

    /* background: url(./freedom.jpg); */
    background-image: url(./freedom.jpg);
    /* background-color: rgb(88, 125, 226); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left 10% bottom 20%;
    background-origin: border-box;
    background-clip: border-box;
    /* background-attachment: fixed;
    background-attachment: scroll;
    background-attachment: local; */
    width: 100%;
    height: 528px;
    padding: 10px;
    margin-top: 43px;
    position: relative;
    border: 5px dashed red;
}
```
{% endraw %}

{% raw %}
```css
.main-header__brand {
    color: rgb(6, 26, 27);
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
    height: 22px;

}
```
{% endraw %}

{% raw %}
```css
.main-header__brand img {
    height: 22px;
}
```
{% endraw %}

{% raw %}
```css
.testimonial__image-container {
    width: 80%;
    display: inline-block;

  }
  .testimonial__image {
    width: 100%;
  }
```
{% endraw %}

{% raw %}
```css
.testimonial__info {
    text-align: right;
    padding: 14px;
    display: inline-block;
    vertical-align: middle;
    width: 20%;
  }
```
{% endraw %}

{% raw %}
```css
.testimonial__image-container {
    width: 70%;
    display: inline-block;

  }
```
{% endraw %}

{% raw %}
```css
.testimonial__image-container {
    width: 70%;
    display: inline-block;
    vertical-align: middle;

  }
```
{% endraw %}

{% raw %}
```css
.testimonial__image-container {
    width: 65%;
    display: inline-block;
    vertical-align: middle;

  }
  .testimonial__image {
    width: 100%;
  }

  .testimonial__info {
    text-align: right;
    padding: 14px;
    display: inline-block;
    vertical-align: middle;
    width: 30%;
  }
```
{% endraw %}

{% raw %}
```css
.testimonial__image-container {
    width: 65%;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  }
```
{% endraw %}

{% raw %}
```css
.testimonial__image {
    width: 100%;
    vertical-align: top;
  }
```
{% endraw %}

{% raw %}
```css
background: linear-gradient(to top, rgba(89,68,18,0.6) 10%, transparent), url(./images/freedom.jpg) left 10% bottom 20%/cover no-repeat border-box, red;
```
{% endraw %}

{% raw %}
```css
.background {
    background: url(../images/plans-background.jpg) center/cover;
    filter: grayscale(40%);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
}
```
{% endraw %}

{% raw %}
```css
.key-feature__image {
    background: rgb(88, 125, 226);
    width: 120px;
    height: 120px;
    border: 2px solid rgb(14, 11, 48);
    border-radius: 50%;
    margin: auto;
    padding: 20px;
}
```
{% endraw %}

# 07-Dimensions, Sizes & Units
- **Hiding Scrollbars on Windows**
	- Al usar `vw`, Windows incluye las barras de scroll, por lo que `width: 100vw` puede exceder el ancho visible. En Mac no ocurre.
	- Soluciones:
		- Usar `width: 100%` en lugar de `100vw`.
		- Ocultar scroll horizontal: `overflow-x: hidden;` en `body`.
		- Ocultar scroll vertical: `overflow-y: hidden;`.
		- Alternativa: usar pseudo-elemento `::-webkit-scrollbar`:
			{% raw %}
```
			body::-webkit-scrollbar { width: 0; }
			```
{% endraw %}
	- Referencia: [Hiding vertical scrollbars - blog MSDN](https://web.archive.org/web/20180505112131/https://blogs.msdn.microsoft.com/kurlak/2013/11/03/hiding-vertical-scrollbars-with-pure-css-in-chrome-ie-6-firefox-opera-and-safari/)
- **Font Size Properties**
	- Referencia: [MDN Font Size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
	- Unidades relativas permiten al usuario escalar el tamaño según configuración del navegador.
	- `rem`: relativo al root element (`html`).
	- `em`: relativo al tamaño del elemento padre.
- **Viewport Units**
	- `vh` y `vw` representan porcentaje del viewport.
	- `vmin` = valor más pequeño de `vh` o `vw`.
	- `vmax` = valor más grande de `vh` o `vw`.
	- Compatibilidad: [Can I use - vh](https://caniuse.com/#search=vh)
- **Teoría de unidades**
	- `%`: relativo al *containing block*.
	- `min-width` / `max-width`: limitar elementos relativos.
	- `rem` vs `em`: para escalabilidad de fuentes y consistencia.
	- `px`: unidad absoluta, ignora configuración de usuario en la mayoría de casos.
	- `vw` / `vh`: útiles para adaptar elementos al viewport.
	- Reglas generales al escalar:
		- `font-size` en root: `%` o `rem`.
		- Padding y margin: `rem`.
		- Width y height: `%`, `vh`, `vw`.
		- Top, bottom, left, right: `%` relativo al containing block.
- **Absolute vs Fixed vs Relative**
	- `position: absolute` → el porcentaje se refiere al ancestro más cercano con `position` distinta a `static`.
	- `position: relative` → mueve el elemento respecto a su posición actual; no sale del document flow.
	- `position: fixed` → contexto es siempre el viewport.
	- `position: sticky` → híbrido entre relative y fixed; depende del viewport y del contenido del padre.
- **Containing Block**
	- Punto de referencia cuando aplicamos `%` a un elemento.
	- Depende del `position` del elemento.
	- Puede ser:
		- Ancestro más cercano con `position` distinto de `static`.
		- El viewport en caso de `fixed`.
- **Backdrop y Full Height**
	- Elementos con `height: 100%` requieren que todos los ancestros tengan `height: 100%` si usan `position: static/relative`.
	- Alternativa: `position: fixed` o unidades viewport (`vh`, `vw`) para cubrir toda la pantalla.
	- Problema común: margin collapsing y padding afectan el 100% height.
	- Solución: definir `html { height: 100%; }` y `body { height: 100%; }`.
- **Font Size y escalabilidad**
	- `em` hereda del elemento padre y se multiplica.
	- `rem` siempre referencia el root (`html`) y es consistente.
	- `px` no escala automáticamente.
	- Ejemplo: `margin: 3rem;` → escala con el font-size del root.
- **Min / Max Width y Height**
	- Usar en combinación con `width` / `height`.
	- Ejemplo:
		- `width: 80%; max-width: 1200px; min-width: 400px;`
	- Permite diseños fluidos y control sobre tamaños extremos.
- **Centrado de elementos**
	- `margin: auto;` funciona para centrar bloques.
	- Debe aplicarse a elementos con width definido.
- **Resumen de unidades**
	- **Absolutas:** `px`
	- **Relativas a contenedor:** `%`
	- **Relativas a fuente:** `em`, `rem`
	- **Viewport:** `vh`, `vw`, `vmin`, `vmax`
	- **Automáticas:** `auto` (depende del contexto)
- **Reglas prácticas**
	1. Escoger unidades según el tipo de propiedad.
	2. Asegurar que los ancestros tengan medidas definidas si usamos `%`.
	3. Para elementos de pantalla completa, usar `vh` y `vw`.
	4. Para tipografía, preferir `rem` para consistencia y accesibilidad.
	5. Combinar unidades relativas y absolutas según diseño y compatibilidad.
- **Ejemplo práctico**
	{% raw %}
```css
	html { font-size: 16px; height: 100%; }
	body { font-size: 1rem; height: 100%; }
	.backdrop {
	    position: fixed;
	    width: 100vw;
	    height: 100vh;
	    top: 0;
	    left: 0;
	    background: rgba(0,0,0,0.5);
	}
	h1 { font-size: 2rem; }
	p { font-size: 1em; margin-bottom: 1.5rem; }
	```
{% endraw %}
### Codigo

{% raw %}
```css
.main-header {
width: 100%;
position: fixed;
/* height: 100%; */
background: rgb(167, 233, 253);
/* color: white; */
padding: 8px 16px;
/* margin: 10px; */
top: 0;
left: 0;
z-index: 1; 
}
```
{% endraw %}

{% raw %}
```css
#product-overview {

/* background-color: rgb(88, 125, 226); */

background: linear-gradient(to top, rgba(89,68,18,0.6) 10%, transparent), url(./images/freedom.jpg) left 10% bottom 20%/cover no-repeat border-box, red;

width: 100%;
height: 528px;
padding: 10px;
margin-top: 43px;
position: relative;
/* border: 5px dashed red; */
}
```
{% endraw %}

{% raw %}
```css
#product-overview h1 {
color: white;
font-family: 'Anton', sans-serif;
/* font-weight: 100px; */
position: absolute;
bottom: 5%;
left: 3%;
width: 100%;
}
```
{% endraw %}

{% raw %}
```css
.testimonial__image-container {
width: 100%;
display: inline-block;
vertical-align: middle;
box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.3);
}
```
{% endraw %}

{% raw %}
```css
.testimonial {
font-size: 20px;
margin: 48px 0;
padding: 0 10px;
}
```
{% endraw %}

{% raw %}
```css
.testimonial__image-container {
width: 50%;
display: inline-block;
vertical-align: middle;
box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.3);
position: relative;
}
```
{% endraw %}

{% raw %}
```css
.backdrop {
position: relative;
z-index: 100;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);  
}
```
{% endraw %}

{% raw %}
```css
body {
font-family: 'Montserrat', sans-serif;
margin: 0;
height: 100%;

}
```
{% endraw %}

{% raw %}
```css
body {
font-family: 'Montserrat', sans-serif;
/* font-family: 'Anton', sans-serif; */
margin: 0;

}

.backdrop {
position: absolute;
z-index: 100;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);  
}
```
{% endraw %}

{% raw %}
```css
.backdrop {
position: fixed;
top: 0;
left: 0;
z-index: 100;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.5);  
}
```
{% endraw %}

{% raw %}
```css
html {
/* height: 100%; */
font-size: 75%;
}
```
{% endraw %}

{% raw %}
```css
.testimonial__image-container {
width: 65%;
max-width: 580px;
display: inline-block;
vertical-align: middle;
box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.3);
}
```
{% endraw %}

{% raw %}
```css
.testimonial {
font-size: 1.2em;
margin: 48px 0;
padding: 0 10px;
}
```
{% endraw %}

{% raw %}
```css
.testimonial__name {
margin: 3px;
color: #ff5454;
font-size: 2em;
}
```
{% endraw %}

{% raw %}
```css
.testimonial__subtitle {
margin: 0;
font-size: 1.1em;
color: #ccc;
}
```
{% endraw %}

{% raw %}
```css
.testimonial__subtitle {
margin: 0;
font-size: 1.1rem;
color: #ccc;
}
```
{% endraw %}

{% raw %}
```css
.testimonial__name {
margin: 3px;
color: #ff5454;
font-size: 2rem;
}
```
{% endraw %}

{% raw %}
```css
.testimonial {
font-size: 1.2rem;
margin: 48px 0;
padding: 0 10px;
}
```
{% endraw %}

{% raw %}
```css
.testimonial {
font-size: 1.2rem;
margin: 3rem 0;
padding: 0 10px;
}

```
{% endraw %}

{% raw %}
```css
.testimonial:first-of-type {
margin-top: 96px;
}
```
{% endraw %}

{% raw %}
```css
.testimonial:first-of-type {
margin-top: 6rem;
}
```
{% endraw %}

{% raw %}
```css
.testimonial__info {
text-align: right;
padding: 0.9rem;
display: inline-block;
vertical-align: middle;
width: 30%;
}
```
{% endraw %}

{% raw %}
```css
.testimonial__name {
margin: 0.2rem;
color: #ff5454;
font-size: 2rem;
}
```
{% endraw %}

{% raw %}
```css
.backdrop {
position: fixed;
/* display: none; */
top: 0;
left: 0;
z-index: 100;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.5);  
}
```
{% endraw %}

{% raw %}
```css
.backdrop {
position: fixed;
/* display: none; */
top: 0;
left: 0;
z-index: 100;
width: 80vmin;
height: 50vh;
background: rgba(0, 0, 0, 0.5);  
} 

```
{% endraw %}

{% raw %}
```css
#product-overview {
background: linear-gradient(to top, rgba(89,68,18,0.6) 10%, transparent), url(./images/freedom.jpg) left 10% bottom 70%/cover no-repeat border-box, red;
width: 100vw;
height: 33vh;
margin-top: 2.75rem;
position: relative;
}
```
{% endraw %}

{% raw %}
```css
.plan__list {
width: 80%;
margin: auto;
text-align: center;
}
```
{% endraw %}

{% raw %}
```css
.background {
background: url(../images/plans-background.jpg) center/cover;
filter: grayscale(40%);
width: 100vw;
height: 100vh;
position: fixed;
z-index: -1;
}
```
{% endraw %}

# 08-Trabajando con CSS y JS

- **Contenido**
	- Manipular estilos con JavaScript.
	- Añadir o quitar clases CSS dinámicamente.
	- Crear modales y side navigation bars.
	- Interacción con el DOM (Document Object Model).
- **Creación de un Modal**
	- Modal compuesto por:
		- **Overlay**: fondo semi-transparente detrás del modal.
		- **Modal container**: ventana emergente con contenido.
	- Selección de elementos en JS:
		- `document.querySelector(selector)` → selecciona **el primer elemento** que coincide.  
		- `document.querySelectorAll(selector)` → devuelve **NodeList** de todos los elementos.
	- Propiedades de estilo:
		- `element.style` → permite modificar **inline styles**.  
		- Inline styles tienen **prioridad sobre CSS externo**.
		- En JS, los nombres de propiedades CSS se escriben en **camelCase**, por ejemplo:
			{% raw %}
```js
			element.style.backgroundColor = 'red';
			element.style.fontSize = '16px';
			```
{% endraw %}
		- Alternativa con notación de strings para propiedades multi-word:
			{% raw %}
```js
			console.dir(element.style['background-image']);
			```
{% endraw %}
- **Añadir Event Listeners**
	- Seleccionar botones dentro de un contenedor usando combinadores:
		{% raw %}
```js
		const buttons = document.querySelectorAll('.plan button');
		buttons.forEach(btn => {
		    btn.addEventListener('click', () => {
		        // código
		    });
		});
		```
{% endraw %}
	- Se recomiendan **funciones anónimas** si no se reutilizan.
	- Manejar cierre de modal y backdrop con el mismo patrón:
		- Añadir clase `.open` para mostrar.
		- Quitar clase `.open` para ocultar.
- **Problemas comunes**
	- `Cannot read properties of null (reading 'addEventListener')`
		- Ocurre si el selector no encuentra elementos en la página actual.
		- Solución: condicional:
			{% raw %}
```js
			if (selectPlanButtons) {
			    // añadir event listeners
			}
			```
{% endraw %}
	- Clase `.open` sobreescrita por `.modal` debido al **CSS specificity**.
		- Soluciones:
			- Aumentar prioridad con `!important` (no recomendado salvo casos específicos).
			- Colocar el código del selector `.modal` antes del `.open` en CSS.
- **Side Navigation Bar para dispositivos móviles**
	- Crear barra lateral responsive:
		- Añadir media queries en CSS para tamaños móviles.
		- Ajustar ancho del nav con `calc()`, por ejemplo:
			{% raw %}
```css
			width: calc(100% - 74px);
			width: calc(100% - 122px);
			```
{% endraw %}
		- Vertical align para centrar logo: `vertical-align: middle;`.
	- Abrir/cerrar con **hamburger menu**:
		- Alternativa: cambiar estilos directamente o añadir/quitar clases CSS.
		- Acceso al modal a través de `className` o `classList`:
			{% raw %}
```js
			modal.classList.add('open');
			modal.classList.remove('open');
			```
{% endraw %}
		- No es necesario poner `.` al usar `classList`.
- **Buenas prácticas JS/CSS**
	- Revisar que el elemento exista antes de ejecutar código JS:
		{% raw %}
```js
		const modal = document.querySelector('.modal');
		if (modal) {
		    modal.addEventListener('click', closeModal);
		}
		```
{% endraw %}
	- Evitar errores al correr código en páginas donde no existen ciertos elementos (por ejemplo `modal` o `selectPlanButtons`).
	- Evitar conflictos de CSS asegurando el **orden de carga**: CSS global primero, CSS específico de modales después.
- **Resumen**
	- Modificar estilos dinámicamente con JS usando `style` o `classList`.
	- Controlar visibilidad de modales y navs móviles mediante clases.
	- Usar selectores precisos y condicionales para evitar errores.
	- Considerar el **specificity** de CSS para asegurar que los estilos aplicados desde JS sean visibles.
	- Siempre probar en todas las páginas, ya que ciertos elementos pueden no existir.
- Resumen
- **Acceder a style properties**
	- aceder a styles en el DOM elements
	- acceder via camelCase o usando strings
- **Añadir o borrar css clases**
	- usar className o classList (mas facil y flexible)
### Codigo
{% raw %}
```html
<div class="modal">
        <h1 class="modal__title">Do you want to continue?</h1>
        <div class="modal__actions">
            <a href="start-hosting/index.html" class="modal__action">Yes!</a>
            <button class="modal__action modal__action--negative" type="button">No!</button>
        </div>
    </div>
```
{% endraw %}

{% raw %}
```jsx
var backdrop = document.querySelector('.backdrop');
console.log(backdrop);
```
{% endraw %}

{% raw %}
```jsx
var backdrop = document.querySelector('.backdrop');
console.dir(backdrop);
```
{% endraw %}

{% raw %}
```jsx
var backdrop = document.querySelectorAll('.backdrop');
console.dir(backdrop);
```
{% endraw %}

{% raw %}
```jsx
var backdrop = document.querySelector('.backdrop');
// console.dir(backdrop);
backdrop.style.display = 'block';
```
{% endraw %}

{% raw %}
```jsx
var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');

console.dir(selectPlanButtons);
```
{% endraw %}

{% raw %}
```jsx
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}
```
{% endraw %}

{% raw %}
```jsx
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', closeModal);
modalNoButton.addEventListener('click', closeModal);

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}
```
{% endraw %}

{% raw %}
```css
.main-nav__item a,
.mobile-nav__item a {
    text-decoration: none;
    color: rgb(3, 4, 53);
    font-weight: bold;
    padding: 0.2rem 0;

}

.main-nav__item--cta a,
.mobile-nav__item--cta a {
    color: white;
    background: rgb(74, 198, 236);
    padding: 0.5rem 1rem;
    border-radius: 8px;
}

.main-nav__item--cta a:hover,
.main-nav__item--cta a:active,
.mobile-nav__item--cta a:hover,
.mobile-nav__item--cta a:active {
    color: blue;
    background-color: white;
    border: none;
}
```
{% endraw %}

{% raw %}
```css
.main-nav {
    display: inline-block;
    text-align: right;
    width: calc(100% - 122px);
    vertical-align: middle;
}
```
{% endraw %}

{% raw %}
```css
.main-header__brand {
    color: rgb(6, 26, 27);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    height: 1.5rem;
    /* width: 40px; */
    display: inline-block;
    vertical-align: middle;
}
```
{% endraw %}

{% raw %}
```jsx
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('mobile-nav');
```
{% endraw %}

{% raw %}
```jsx
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    closeModal();

});

modalNoButton.addEventListener('click', closeModal);

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';

});
```
{% endraw %}

{% raw %}
```css
.open {
    display: block;
}
```
{% endraw %}

{% raw %}
```jsx
modal.className = 'open'; //sobreescribe la lista completa de clases
```
{% endraw %}

{% raw %}
```jsx
modal.classList.add('open')
```
{% endraw %}

{% raw %}
```jsx
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; //sobreescribe la lista completa de clases
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}
```
{% endraw %}

{% raw %}
```css
.open {
    display: block !important;
}
```
{% endraw %}

{% raw %}
```jsx
function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');

}
```
{% endraw %}

{% raw %}
```jsx
backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal(); 
});
```
{% endraw %}

{% raw %}
```jsx
toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

});
```
{% endraw %}

{% raw %}
```jsx
modalNoButton.addEventListener('click', closeModal);
```
{% endraw %}

{% raw %}
```jsx
if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}
```
{% endraw %}

{% raw %}
```jsx
function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');

    }
    backdrop.classList.remove('open');
}
```
{% endraw %}

# 09-Hacer la Web Responsiva

- **Contenido**
	- Hardware vs Software pixels.
	- Viewport `<meta>` tag en HTML.
	- Media queries `@media`.
	- Problemas de footer y soluciones.
- **Longitudes absolutas**
	- [Lógica de pixeles](https://www.w3.org/TR/css-values-3/#absolute-lengths)
	- 1 inch → 2.54 cm → 96px.
	- Problema: la densidad de píxeles varía entre dispositivos.
	- Comparar dispositivos: [My Device](https://www.mydevice.io/).
	- Pixel ratio: altura física dividida por 2.
	- Meta viewport detecta dispositivo y convierte hardware pixels a software pixels:
		- Permite que CSS px coincida con visualización en mobile simulada.
- **Comparación: viewport meta tag vs media queries**
	- **Viewport meta tag**
		- Ajusta tamaño del dispositivo al viewport.
		- Convierte hardware px en software px según device.
		- No cambia diseño.
	- **Media queries**
		- Permite cambiar diseño dependiendo del tamaño.
		- Se aplican reglas CSS según width, height u otras características.
- **Viewport meta tag**
	{% raw %}
```html
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	```
{% endraw %}
	- `width=device-width`: ajusta al ancho del dispositivo.
	- `initial-scale=1.0`: zoom inicial.
	- `user-scalable=yes` (por defecto, se puede omitir).
	- Restringir zoom: `user-scalable=no`.
	- Limitar zoom: `maximum-scale`, `minimum-scale`.
- **Media queries**
	- Rangos comunes:
		- 250px – 640px (≈ 40rem) → mobile view.
		- Ajustar font-size, navbar, imágenes y disposición de planes.
	- Estrategia **mobile first**:
		- Comenzar con estilos para <640px.
		- Desktop y tablet se ajustan con media queries.
	- Ejemplo:
	{% raw %}
```css
	@media (max-width: 40rem) { 
	    /* estilos desktop first */
	}
	```
{% endraw %}
	- Ajustes landscape:
	{% raw %}
```css
	@media (min-width: 40rem) and (min-height: 60rem) { 
	    /* landscape desktop */
	}
	```
{% endraw %}
	- `orientation: portrait/landscape` puede ser útil, pero no siempre confiable en desktop.
- **Arreglos en el diseño responsivo**
	- **Background images**
		- Ajustar posición y tamaño: `left 10% bottom 70%`, `center/cover`.
	- **Plans**
		- Quitar `display: inline-block;`.
		- Ajustar width: `width: 30%;`.
		- Ajustar container: `width: 80%; margin: auto;`.
		- Quitar margen interno de planes: `margin: 0.5rem 0;`.
		- Quitar vertical-align innecesario.
		- `.plan__list { width: 100%; text-align: center; }`.
		- Quitar `box-shadow` en vista móvil.
	- **Caja Recommended**
		- Ajustar `min-width: 13rem;` y `max-width: 25rem;` para evitar escalado excesivo.
	- **Zona Features**
		- Ajustar vertical alignment en media queries: `vertical-align: top;`.
		- Limitar `max-width: 25rem;`.
	- **Página Customers**
		- Ajustar contenedor de imágenes: `width: 66%;`.
		- Testimonial info: espacio suficiente, max-width 1500px.
		- Mantener contenido alineado a la izquierda.
	- **Página Packages**
		- Limitar width del contenedor.
		- Ajustar min-height de main: de 60rem a 40rem.
		- Añadir bordes en vista desktop.
	- **Navbar y logo**
		- Ajustar altura y padding para centrar imagen y texto.
		- `height total = 2.5rem icono + 2.05rem padding = 3.5rem`.
	- **Footer**
		- Posicionar footer al fondo.
		- Evitar problemas de margin collapsing.
		- Ajustar margin-top del main: `margin-top: 3.5rem;`.
- **Buenas prácticas**
	- Mobile first: diseñar primero para pantallas pequeñas.
	- Ordenar media queries según **width** para evitar conflictos.
	- Ajustar margenes, paddings y box-sizing para mantener consistencia.
	- Verificar en diferentes dispositivos y resoluciones.
- **Resumen**
	- **Responsive design**: adaptar diseño a todos los dispositivos.
	- **Viewport meta tag**: convierte hardware px en software px, ajusta zoom y tamaño de viewport.
	- **Media queries**: cambiar propiedades CSS según width, height, orientación.
	- Ajustes específicos: images, plans, navbar, footer, cajas de contenido.
	- Estrategia: mobile first, breaking points claros, margen y padding consistentes.

### codigo

{% raw %}
```css
@media (min-width: 40rem) {
    #product-overview h1 {
        font-size: 3rem;
    }
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    #product-overview {
        height: 40vh;
        background-position: 50% 25%;
    }

    #product-overview h1 {
        font-size: 3rem;
    }
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 60rem) {
    #product-overview {
        height: 50vh;
        background-position: 50% 25%;
    }

    #product-overview h1 {
        font-size: 5rem;
    }
}
```
{% endraw %}

{% raw %}
```css
background: linear-gradient(to top, rgba(89,68,18,0.6) 10%, transparent), url(./images/freedom.jpg) left 10% bottom 70%/cover no-repeat border-box, red;
```
{% endraw %}

{% raw %}
```css
background: linear-gradient(to top, rgba(89,68,18,0.6) 10%, transparent), url(./images/freedom.jpg) center/cover no-repeat border-box, red;
```
{% endraw %}


{% raw %}
```css
@media (min-width: 40rem) {
    .plan {
        display: inline-block;
    }
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {

    .plan__list {
        width: 100%;
        text-align: center;
}
    .plan {
        display: inline-block;
        width: 30%;
        vertical-align: middle;
    }
    .plan--highlighted {
        box-shadow: 2px 2px 2px 2px rgba(82, 82, 167, 0.5);
    }
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {

    .plan__list {
        width: 100%;
        text-align: center;
}
    .plan {
        display: inline-block;
        width: 30%;
        vertical-align: middle;
        min-width: 13rem;
        max-width: 25rem;
    }
    .plan--highlighted {
        box-shadow: 2px 2px 2px 2px rgba(82, 82, 167, 0.5);
    }
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .key-feature {
        display: inline-block;
        width: 30%;
    }
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .key-feature {
        display: inline-block;
        width: 30%;
        vertical-align: top;
    }
}
```
{% endraw %}

{% raw %}
```css
.key-feature {
/* width: 100%; */
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .key-feature {
        display: inline-block;
        width: 30%;
        max-width: 25rem;
        vertical-align: top;

    }
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) and (orientation: portrait) {
    #product-overview {
        height: 40vh;
        background-position: 50% 25%;
    }

    #product-overview h1 {
        font-size: 3rem;
    }
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) and (orientation: landscape) {
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) and (orientation: landscape) {

    .plan__list {
        width: 100%;
        text-align: center;
}
    .plan {
        display: inline-block;
        width: 30%;
        vertical-align: middle;
        min-width: 13rem;
        max-width: 25rem;
    }
    .plan--highlighted {
        box-shadow: 2px 2px 2px 2px rgba(82, 82, 167, 0.5);
    }
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem), (orientation: landscape) {
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) and (min-height: 60rem) {
    #product-overview {
        height: 40vh;
        background-position: 50% 25%;
    }

    #product-overview h1 {
        font-size: 3rem;
    }
}
```
{% endraw %}

Arreglar navbar

{% raw %}
```css
.main-header__brand {
    color: rgb(6, 26, 27);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    /* height: 1.5rem; */
    /* width: 40px; */
    display: inline-block;
    vertical-align: middle;
}
```
{% endraw %}

{% raw %}
```css
.main-header__brand img {
    /* height: 100%; */
    height: 2.5rem;
    /* width: 100%; */
}
```
{% endraw %}

{% raw %}
```css
.main-nav {
    display: none;
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .toggle-button {
        display: none;
    }

    .main-nav {
        display: inline-block;
        text-align: right;
        width: calc(100% - 44px);
        vertical-align: middle;
    }

}
```
{% endraw %}

arreglar footer

{% raw %}
```css
.main-footer__link {
    display: block;
    margin: 1rem 0;
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .main-footer__link {
        display: inline-block;
        margin: 0 1rem;
    }
}
```
{% endraw %}

Mejorando la pagina de customers

{% raw %}
```css
.testimonial__image-container {
    width: 65%;
    max-width: 580px;
    /* display: inline-block; */
    vertical-align: middle;
    box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.3);
  }
```
{% endraw %}

{% raw %}
```css
.testimonial__info {
    text-align: right;
    padding: 0.9rem;
    /* display: inline-block; */
    /* vertical-align: middle;
    width: 30%; */
  }
```
{% endraw %}

{% raw %}
```css
.testimonial {
    font-size: 1.2rem;
    /* margin: 3rem 0; */
    padding: 0 10px;
  }
```
{% endraw %}

{% raw %}
```css
/* .testimonial__list {
    width: 80%;
    margin: auto;
  } */
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .testimonial {
      margin: 3rem 0;
    }
    .testimonial__image-container {
      display: inline-block;
      vertical-align: middle;
    }
  }
```
{% endraw %}

{% raw %}
```css
.testimonial__image-container {
    width: 100%;
    max-width: 40rem;
    /* display: inline-block; */
    /* vertical-align: middle; */
    box-shadow: 3px 3px 5px 3px rgba(0, 0, 0, 0.3);
  }
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .testimonial {
      margin: 3rem 0;
    }
    .testimonial__image-container {
      display: inline-block;
      vertical-align: middle;
    }

    .testimonial__info {
      display: inline-block; 
      vertical-align: middle;
      width: 30%;
    }
  }
```
{% endraw %}


{% raw %}
```css
@media (min-width: 40rem) {
    .testimonial {
      margin: 3rem 0;
    }
    .testimonial__image-container {
      display: inline-block;
      vertical-align: middle;
      width: 66%;
    }

    .testimonial__info {
      display: inline-block; 
      vertical-align: middle;
      width: 30%;
    }
  }
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .testimonial {
      margin: 3rem 0;
      max-width: 1500px;
    }
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .testimonial {
      margin: 3rem auto;
      max-width: 1500px;
    }
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    main {
      margin: 3rem auto;
      max-width: 1500px;
    } 
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 1500px) {
    .package {
    border-left: solid 4px rgb(84, 157, 199);

    }
    #free {
    border-right: solid 4px rgb(84, 157, 199);;
    }

    #free:hover,
    #free:active {
    border-right-color:  rgb(92, 92, 230);
}
}
```
{% endraw %}


{% raw %}
```
/* border-left: none; */
```
{% endraw %}

{% raw %}
```css
.package {
    width: 80%;
    margin: 1rem 0px;
    border: solid 4px rgb(84, 157, 199);
    border-left: none;
    position: relative;
}
```
{% endraw %}

{% raw %}
```
@media (min-width: 40rem) and (min-height: 40rem) {
```
{% endraw %}

{% raw %}
```css
.main-header__brand img {
    /* height: 100%; */
    height: 2.5rem;
    /* width: 100%; */
}
```
{% endraw %}

{% raw %}
```css
.main-header__brand {
    color: rgb(6, 26, 27);
    text-decoration: none;
    font-weight: bold;
    /* font-size: 1.5rem; */

    display: inline-block;
    vertical-align: middle;
}
```
{% endraw %}

{% raw %}
```css
.main-header__brand {
    color: rgb(6, 26, 27);
    text-decoration: none;
    font-weight: bold;
    /* font-size: 1.5rem; */
    height: 2.5rem;
    display: inline-block;
    vertical-align: middle;
}
```
{% endraw %}

{% raw %}
```css
.main-header__brand img {
    /* height: 100%; */
    height: 100%;
    /* width: 100%; */
}
```
{% endraw %}

{% raw %}
```css
#product-overview {
    background: linear-gradient(to top, rgba(89,68,18,0.6) 10%, transparent), url(./images/freedom.jpg) center/cover no-repeat border-box, red;
    width: 100vw;
    height: 33vh;
    margin-top: 3.5rem;
    position: relative;
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .toggle-button {
        display: none;
    }

    .main-nav {
        display: inline-block;
        text-align: right;
        width: calc(100% - 44px);
        vertical-align: middle;
    }

}
```
{% endraw %}

{% raw %}
```css
main {
    min-height: calc(100vh - 3.5rem - 8rem);
}
```
{% endraw %}

{% raw %}
```css
#product-overview {
    background: linear-gradient(to top, rgba(89,68,18,0.6) 10%, transparent), url(./images/freedom.jpg) center/cover no-repeat border-box, red;
    width: 100vw;
    height: 33vh;
    position: relative;
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    main {
      /* margin: 3rem auto; */
      max-width: 1500px;
    } 
}
```
{% endraw %}

{% raw %}
```css
.testimonial:first-of-type {
    margin-top: 6rem;
  }
```
{% endraw %}

{% raw %}
```css
main {
    padding-top: 2.5rem;
  }
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    main {
      /* margin: 3rem auto; */
      max-width: 1500px;
      margin-right: auto;
      margin-left: auto;
    } 
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .testimonial {
      margin: 3rem auto;
      max-width: 1500px;
    }
```
{% endraw %}



# 10-Añadir Estilos a Formularios

- **Contenido**
	- Solucionar enlaces rotos.
	- Estilizar inputs y buttons.
	- Validation feedback styles.
	- Attribute selectors avanzados.
	- Focus, outline y pseudo-selectors.
	- Botones deshabilitados y dinámicos.
	- Buenas prácticas para formularios responsivos.

## 1. Solucionando un enlace roto
- En la página **Customers** (`index.html` dentro de la carpeta "customers") hay un enlace roto:
	- El enlace "Start Hosting" debería apuntar a:  
	  `"../start-hosting/index.html"`.
- Se puede arreglar ahora o más adelante en los videos.

---

## 2. Estructura y estilización de formularios
- Cada grupo de elementos del form debe ir dentro de un **div** (block element) porque inputs y labels son inline por defecto.
- Apuntar a labels e inputs individualmente para estilos específicos.
- **Checkboxes**:
	- Mantener como inline-element para alinear con su label.
	- Posible reestilización del checkbox y dropdown (`select`).

---

## 3. Attribute selectors avanzados
- Seleccionar elementos por atributo:
	- `[attr]` → todos los elementos con ese atributo.
	- `[attr="value"]` → atributo con valor exacto.
	- `[attr~="value"]` → atributo con valor dentro de una lista de palabras.
	- `[attr|="value"]` → atributo igual o que empiece con valor seguido de guion (ej: `lang|="en"`).
	- `[attr^="value"]` → atributo cuyo valor **empieza** con "value".
	- `[attr$="value"]` → atributo cuyo valor **termina** con "value".
	- `[attr*="value"]` → atributo cuyo valor **contiene** "value".
	- `[attr="value" i]` → case-insensitive (ignora mayúsculas/minúsculas).

---

## 4. Focus y outline
- `outline`:
	- Comparable a border.
	- Se muestra **después del border**.
	- No afecta box size ni box shadow.
- Inputs:
	- Selección general:  
	  {% raw %}
```css
	  .signup-form input:not([type="checkbox"])
	  ```
{% endraw %}
	- Para evitar conflicto con pseudo-selectors `:focus` y `:invalid`.

---

## 5. Validación de formularios
- Clases especiales:
	- Manual: `<input type="email" id="email" class="invalid">`.
	- Automática: pseudo-selectors CSS:
	  - `:valid` → input válido.
	  - `:invalid` → input inválido.
- Problemas:
	- `:not([type="checkbox"])` puede sobreescribir `:invalid`.
- Soluciones:
	- Usar `!important` en reglas temporales.
	- Añadir clases dinámicamente vía JS:
	  {% raw %}
```js
	  .signup-form.needs-validation
	  ```
{% endraw %}
	  cuando se hace submit.

---

## 6. Estilización de botones
- Botón submit:
	{% raw %}
```html
	<button type="submit" class="button" disabled>Sign Up</button>
	```
{% endraw %}
- CSS:
	- Estado deshabilitado: `.button[disabled]`.
	- Hover no aplica mientras esté `disabled`.
- Activación dinámica:
	- JS elimina atributo `disabled` cuando el form es válido.
- Buenas prácticas:
	- Sobrescribir estilos por defecto del navegador.
	- Mantener consistencia en feedback visual para el usuario.

---

## 7. Resumen
- **Estilización de formularios**:
	- Agrupar elementos en block elements.
	- Usar attribute selectors para targeting avanzado.
	- Focus y outline para feedback visual.
	- Sobrescribir estilos por defecto del navegador según necesidad.
- **Validation feedback**:
	- Pseudo-selectors `:valid` y `:invalid`.
	- Validación manual vía clases (`invalid`).
- **Botones**:
	- Estado `disabled` controlado por JS y CSS.
	- Hover y estilos especiales mientras está deshabilitado.
`
### Codigo

{% raw %}
```css
main {
    padding-top: 1rem;
}

.signup-title {
    text-align: center;
    font-size: 1.8rem;
    color: #ff5454;
}
```
{% endraw %}

{% raw %}
```css
.signup-form label,
.signup-form input,
.signup-form select {
    display: block;
    margin-top: 1rem;
    width: 100%;
}
```
{% endraw %}

{% raw %}
```css
[type] {
	color: red;
}

<input type="text">
```
{% endraw %}

{% raw %}
```css
[type="email"] { 
	color: red;
}

<input type="email">
```
{% endraw %}

{% raw %}
```css
[lang~="en-us"]
{ 
color: red;
}

<p lang="en-us en-gb"> Hi!</p>
```
{% endraw %}

{% raw %}
```css
[lang|="en"] {
color: red;
}

<p lang="en-us">Hi!</p>
```
{% endraw %}

{% raw %}
```css
[href^="#"] {
color: red;
}

<a href="#all">Link</a>
```
{% endraw %}

{% raw %}
```css
[href$=".de"] {
color: red;
}
<a href="ab.de">Link</a>
```
{% endraw %}

{% raw %}
```css
[src*="cdn"] {
color: red;
}
<img src="i.cdn.com">
```
{% endraw %}

{% raw %}
```css
[src*="cdn i"] {
color: red;
}
<img src="i.CDN.com">

```
{% endraw %}

{% raw %}
```html
<input type="checkbox" id="agree-terms">
```
{% endraw %}

{% raw %}
```css
/* .signup-form input[type="checkbox"] */
.signup-form input[id*="terms"],
.signup-form input[id*="terms"] + label {
    display: inline-block;
    width: auto;
}

.signup-form button[type="submit"] {
    display: block;
    margin-top: 1rem;
}
```
{% endraw %}

{% raw %}
```css
.signup-form {
    padding: 1rem;
}
```
{% endraw %}

{% raw %}
```css
label {
    font-weight: bold;
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem)  {
    .signup-form {
        margin: auto;
        width: 25rem;
    }
}
```
{% endraw %}

{% raw %}
```css
.signup-form input,
.signup-form select {
    border: 1px solid #ccc;
    padding: 0.2rem 0.5rem;
    font: inherit;

}
```
{% endraw %}

{% raw %}
```css
.signup-form input:focus,
.signup-form select:focus {
 outline: none;
 background: #d8e9f3; 
 border-color: rgb(167, 233, 253); 
}
```
{% endraw %}

{% raw %}
```css
.signup-form input:not([type="chekbox"]),
.signup-form select {
    border: 1px solid #ccc;
    padding: 0.2rem 0.5rem;
    font: inherit;

}
.signup-form input:focus:not([type="chekbox"]),
.signup-form select:focus {
 outline: none;
 background: #d8e9f3; 
 border-color: rgb(167, 233, 253); 
}
```
{% endraw %}

{% raw %}
```css
.signup-form input[type="checkbox"] {
    border: 1px solid #ccc;
    background: white;
    width: 1rem;
    height: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
```
{% endraw %}

{% raw %}
```css
.signup-form input[id*="terms"],
.signup-form input[id*="terms"] + label {
    display: inline-block;
    width: auto;
    vertical-align: bottom;
}
```
{% endraw %}

{% raw %}
```css
.signup-form input[type="checkbox"]:checked {
    background: rgb(167, 233, 253);
    border: rgb(98, 139, 153);
}
```
{% endraw %}


{% raw %}
```css
.signup-form input:focus,
.signup-form select:focus {
 outline: none;
 background: #d8e9f3; 
 border-color: rgb(167, 233, 253); 
}
```
{% endraw %}

{% raw %}
```css
.signup-form input.invalid,
.signup-form select.invalid {
    border-color:red;
    background: #faacac;

}
```
{% endraw %}

{% raw %}
```css
.signup-form input.invalid,
.signup-form select.invalid, 
.signup-form :invalid {
    border-color:red;
    background: #faacac;

}
```
{% endraw %}

{% raw %}
```css
.signup-form input:not([type="checkbox"]),
.signup-form select {
    border: 1px solid #ccc;
    padding: 0.2rem 0.5rem;
    font: inherit;

}
```
{% endraw %}

{% raw %}
```css
.signup-form input.invalid,
.signup-form select.invalid, 
.signup-form :invalid {
    border-color:red !important;
    background: #faacac;

}
```
{% endraw %}

{% raw %}
```css
.signup-form input.invalid,
.signup-form select.invalid, 
.signup-form :invalid,
.signup-form input:not([type="checkbox"]):invalid {
    border-color:red ;
    background: #faacac;

}
```
{% endraw %}

{% raw %}
```css
.button[disabled] {
    cursor: not-allowed;
    border: grey;
    background: #ccc;
    color: grey;

}
```
{% endraw %}

# 11-Text y Fonts

---

## 1. Introducción
- Conceptos principales:
	- Generic vs Font families.
	- Importar y usar font families.
	- Propiedades de font.
	- Font shorthand.

---

## 2. Generic vs Font Families
- **Generic fonts**: categorías genéricas de fuentes usadas como fallback:
	- `serif`, `sans-serif`, `cursive`, `monospace`, `fantasy`.
- **Font families específicas**:
	- Ejemplos: `Times New Roman`, `Georgia`, `Helvetica`, `Verdana`, `Courier New`, `Lucida Bright`, `Brush Script`, `Mistral`.
- Selección de la fuente a mostrar:
	- Depende de la configuración del navegador y preferencias del usuario.
	- Si una font no está instalada, se utiliza el fallback (generic font).
	- Posible usar **web fonts** o importar fonts desde el servidor.

---

## 3. Configuración de fonts en el proyecto
- Ejemplo en `.package__info`:
	{% raw %}
```css
	font-family: 'Montserrat', sans-serif;
	```
{% endraw %}
- Tips:
	- Comenzar por la fuente específica y terminar con la generic.
	- Varias font families:  
	  {% raw %}
```css
	  font-family: 'Montserrat', 'Verdana', sans-serif;
	  ```
{% endraw %}
- Herramientas y referencias:
	- [CSS Font Stack](https://www.cssfontstack.com/)
	- [Google Fonts Roboto](https://fonts.google.com/specimen/Roboto?preview.text=dghdhdhy&preview.text_type=custom)
	- [Google Fonts Anonymous Pro](https://fonts.google.com/specimen/Anonymous+Pro?query=anony&preview.text=dghdhdhy&preview.text_type=custom)

---

## 4. Font Faces
- Importación de fonts personalizadas con `@font-face`.
- Propiedades importantes:
	- `font-weight` (solo los valores importados están disponibles, ej: 400 regular).
	- `font-style` (`normal`, `italic`).
- Precauciones:
	- Importar font desde `@import` o server, no solo desde `<link>` para que no afecte todas las páginas.
	- URL del font en minúsculas por compatibilidad con Internet Explorer.
	- Soporte de formatos: `ttf`, `woff`, `woff2`, `eot`.
		- Compatibilidad: [TTF](https://caniuse.com/ttf), [WOFF](https://caniuse.com/?search=woff), [EOT](https://caniuse.com/?search=eot).

---

## 5. Propiedades de texto y estilo
- **Font size y line-height**:
	- `font-size: 40px;`
	- `line-height: 1.2;` (número recomendado sobre porcentaje).
	- Valores por defecto: `line-height: normal`.
	- Line-height define espacio entre el top y bottom del content box.
	- Referencia: [MDN line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

- **Otras propiedades**:
	- `font-variant: small-caps;`
	- `font-stretch: ultra-condensed;` (compatibilidad variable).
	- `letter-spacing: 5px;`
	- `white-space: normal | nowrap | pre | pre-wrap | pre-line`

- **Text decoration y text-shadow**:
	- `text-decoration: underline | overline | line-through | none;`
	- `text-decoration: underline dotted red;`
	- `text-shadow: x-offset y-offset blur color;`  
	  Ej: `text-shadow: 2px 2px 7px grey;`

---

## 6. Font Shorthand
- Sintaxis general:
	{% raw %}
```css
	font: [font-style] [font-variant] [font-weight] font-size[/line-height] font-family;
	```
{% endraw %}
- Ejemplos:
	{% raw %}
```css
	font: italic small-caps 700 1.2rem/2 'AnonymousPro', sans-serif;
	font: 700 1.2rem 'AnonymousPro', sans-serif;
	```
{% endraw %}
- Shorthand para **system fonts**:
	- `font: menu;`
	- `font: status-bar;`
	- Referencia: [MDN Font](https://developer.mozilla.org/es/docs/Web/CSS/font)

---

## 7. Performance y font-display
- Controla cómo se cargan las fuentes externas.
- Valores principales:
	- `auto` → browser decide.
	- `swap` → fallback visible, luego cambia a custom font.
	- `block` → periodo corto de invisible, luego swap.
	- `optional` → depende de conexión.
- Loading process:
	- **Block period** → reserva espacio invisible para font.
	- **Swap period** → browser reemplaza fallback por custom font.
- Compatibilidad limitada: [caniuse font-display](https://caniuse.com/?search=font-display)

---

## 8. Resumen
- **Generic y Font families**: definir fallback y fonts específicas.
- **Importar fonts**: local vs embebida (`@font-face`) vs Google Fonts.
- **Propiedades de font**:
	- `font-size`, `font-style`, `font-weight`, `font-stretch`, `font-variant`
	- `letter-spacing`, `white-space`, `line-height`, `text-decoration`, `text-shadow`.
- **Font shorthand**: combina múltiples propiedades; `font-size` y `font-family` son obligatorios.
- **Font-display**: controlar visibilidad y rendimiento de fuentes personalizadas.

## codigo
{% raw %}
```css
.package__info {
padding: 1rem;
border: 1px solid rgb(110, 181, 199);
font-size: 1.2rem;
color: rgb(51, 63, 66);
background-color: white;
font-family: 'Roboto', sans-serif;
font-weight: 900;
}
```
{% endraw %}

{% raw %}
```css
.package__info {
padding: 1rem;
border: 1px solid rgb(110, 181, 199);
font-size: 1.2rem;
color: rgb(51, 63, 66);
background-color: white;
font-family: 'Roboto', sans-serif;
font-weight: 100;
font-style: italic;
}
```
{% endraw %}

{% raw %}
```
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@400,900;1,100&display=swap');
```
{% endraw %}

{% raw %}
```css
@font-face {
font-family: "AnonymousPro";
src: url("AnonymousPro-Regular.ttf");
}
```
{% endraw %}

{% raw %}
```css
.package__info {
padding: 1rem;
border: 1px solid rgb(110, 181, 199);
font-size: 1.2rem;
color: rgb(51, 63, 66);
background-color: white;
font-family: 'AnonymousPro', sans-serif;
/* font-weight: 900;
font-style: italic; */
}
```
{% endraw %}

{% raw %}
```css
@font-face {
font-family: "AnonymousPro";
src: url("AnonymousPro-Bold.ttf");
}
```
{% endraw %}

{% raw %}
```css
@font-face {
font-family: "AnonymousPro";
src: url("AnonymousPro-Bold.ttf");
font-weight: 700;
}
```
{% endraw %}

{% raw %}
```css
@font-face {
font-family: "AnonymousPro";
src: url("anonymousPro-Regular.ttf");
}

@font-face {
font-family: "AnonymousPro";
src: url("anonymousPro-Bold.ttf");
font-weight: 700;
}
```
{% endraw %}

{% raw %}
```css
src: url("anonymousPro-Bold.ttf") format("truetype");
```
{% endraw %}

{% raw %}
```css
@font-face {
font-family: "AnonymousPro";
src: url("anonymousPro-Regular.woff2") format("woff2"),
	 url("anonymousPro-Regular.woff") format("woff"),
	 url("anonymousPro-Regular.ttf") format("truetype");
}
```
{% endraw %}

{% raw %}
```css
.testimonial__text {
margin: 0.2rem;
}
```
{% endraw %}

{% raw %}
```css
@font-face {
font-family: "AnonymousPro";
src: url("anonymousPro-Regular.ttf") format("truetype");
font-display: swap;
font-display: block;
font-display: fallback;
font-display: auto;
	font-display: optional;

}
```
{% endraw %}



# 12-Flexbox

---

## 1. Introducción
- Flexbox permite cambiar la forma en que se muestran los elementos.
- Conceptos clave:
	- **Flex container**: elemento padre que contiene los flex items.
	- **Flex items**: elementos hijos dentro de un flex container.
	- **Main axis** y **Cross axis**: ejes que definen dirección y alineamiento.
- Ventaja: simplifica la alineación de elementos frente a `inline-block` o `float`.

---

## 2. Flexbox y Z-Index
- Normalmente `z-index` solo funciona si el elemento tiene `position` diferente de `static`.
- Excepción: **flex-items** dentro de un flex container pueden usar `z-index` sin necesidad de `position`.
- Útil para cambiar el orden visual de los flex items.

---

## 3. Entendiendo Flexbox
### Parent: Flex Container
- Propiedades importantes:
	- `display: flex;` / `display: inline-flex;`
	- `flex-flow: <direction> <wrap>;` (shorthand)
	- `justify-content`: alinea items a lo largo del **main axis**.
	- `align-items`: alinea items a lo largo del **cross axis**.
	- `align-content`: alinea líneas de items cuando hay wrap.

### Children: Flex Items
- Propiedades:
	- `order`: define el orden de aparición.
		- `0` → default
		- `1` → al final
		- `-1` → al frente
	- `flex`: shorthand para `flex-grow flex-shrink flex-basis`.
	- `align-self`: sobreescribe `align-items` para un item.
		- Valores: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.
	- `flex-grow`: define cuánto crecerá un item en el espacio disponible.
	- `flex-shrink`: define cuánto se reducirá un item si el espacio es limitado.
	- `flex-basis`: tamaño inicial del item en el **main axis**.
- Referencia: [MDN align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

---

## 4. Main Axis vs Cross Axis
- **Flex-direction** define el main axis:
	- `row` → left → right
	- `row-reverse` → right → left
	- `column` → top → bottom
	- `column-reverse` → bottom → top
- **Cross axis** siempre perpendicular al main axis.
- Ejemplos de propiedades según el eje:
	- `justify-content` → controla la posición en el main axis.
	- `align-items` → controla la posición en el cross axis.
- Con `flex-wrap` activado, los items pueden saltar a otra línea y ocupar el espacio disponible.

---

## 5. Propiedades de Flex Container
- `display: flex | inline-flex`
- `flex-direction: row | row-reverse | column | column-reverse`
- `flex-wrap: nowrap | wrap | wrap-reverse`
- `flex-flow: <direction> <wrap>` → shorthand
- `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`
- `align-items: flex-start | flex-end | center | baseline | stretch`
- `align-content: flex-start | flex-end | center | space-between | space-around | stretch`

---

## 6. Propiedades de Flex Items
- `order: <number>` → controla el orden visual.
- `flex-grow: <number>` → controla cómo se distribuye espacio extra.
- `flex-shrink: <number>` → controla cómo se reduce el item si falta espacio.
- `flex-basis: <length | auto>` → tamaño base del item.
- `flex: <grow> <shrink> <basis>` → shorthand.
- `align-self: auto | flex-start | flex-end | center | baseline | stretch` → sobreescribe `align-items`.

---

## 7. Aplicación práctica
- Convertir navigation bar y mobile nav en flex container.
- Quitar `display: inline-block` y `width: calc(...)`.
- Problemas comunes:
	- Imagen toma 100% del alto → quitar height del contenedor y asignarlo al `<img>`.
	- Items que se mueven → revisar `display: none` o `order`.
	- Mobile nav: centrar items uno debajo de otro.

---

## 8. Ejemplo shorthand flex
{% raw %}
```css
flex: 0 1 auto; /* flex-grow: 0; flex-shrink: 1; flex-basis: auto; */
```
{% endraw %}`

- Distribución proporcional:
    - `flex-grow: 1` en ambos items → espacio disponible se reparte igual.
    - `flex-grow: 2` y `flex-grow: 4` → espacio dividido 2/6 y 4/6.
- Con wrap → items saltan a otra línea y ocupan todo el ancho disponible.

---

## 9. Resumen

- **Flexbox**: organiza elementos en un contenedor flexible.
- **Flex container**:
    - Propiedades: `display`, `flex-direction`, `flex-wrap`, `flex-flow`, `justify-content`, `align-items`, `align-content`.
- **Flex items**:
    - Propiedades: `order`, `align-self`, `flex-grow`, `flex-shrink`, `flex-basis`, `flex` (shorthand).
- **Ejes**:
    - **Main axis** → definido por `flex-direction`.
    - **Cross axis** → perpendicular al main axis.
    - Propiedades se aplican según el eje.


## Codigo

{% raw %}
```css
.main-header > div {
    /* display: none; */
    display: inline-block;
    vertical-align: middle;
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .toggle-button {
        display: none;
    }

    .main-nav {
        display: inline-block;
        text-align: right;
        width: calc(100% - 44px);
        vertical-align: middle;
    }

}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .testimonial {
      margin: 3rem auto;
      max-width: 1500px;
    }
    .testimonial__image-container {
      display: inline-block;
      vertical-align: middle;
      width: 66%;
    }

    .testimonial__info {
      display: inline-block; 
      vertical-align: middle;
      width: 30%;
    }
  }
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {

    .plan__list {
        width: 100%;
        text-align: center;
}
    .plan {
        display: inline-block;
        width: 30%;
        vertical-align: middle;
        min-width: 13rem;
        max-width: 25rem;
    }
    .plan--highlighted {
        box-shadow: 2px 2px 2px 2px rgba(82, 82, 167, 0.5);
    }
}
```
{% endraw %}

Theory proyect

{% raw %}
```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
  }
```
{% endraw %}

{% raw %}
```css
flex-direction: row;
flex-wrap: nowrap;
```
{% endraw %}

!Data/Data-Prog/CSS-Guia completa/image.png

{% raw %}
```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
```
{% endraw %}

{% raw %}
```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
```
{% endraw %}

{% raw %}
```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-end;
  }
```
{% endraw %}


!Data/Data-Prog/CSS-Guia completa/image1.png


{% raw %}
```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
  }
```
{% endraw %}

{% raw %}
```css
.flex-container {
    background: white;
    padding: 10px;
    border: 5px solid black;
    height: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
```
{% endraw %}

{% raw %}
```css
.main-header {
    width: 100%;
    position: fixed;
    /* height: 100%; */
    background: rgb(167, 233, 253);
    /* color: white; */
    padding: 0.5rem 1rem;
    /* margin: 10px; */
    top: 0;
    left: 0;
    z-index: 1; 
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```
{% endraw %}

{% raw %}
```css borrar:
.main-header > div {
    /* display: none; */
    display: inline-block;
    vertical-align: middle;
}
```
{% endraw %}

{% raw %}
```css borrar display y vertical align:
.main-header__brand {
    color: rgb(6, 26, 27);
    text-decoration: none;
    font-weight: bold;
    height: 2.5rem;
    display: inline-block;
    vertical-align: middle;
}
```
{% endraw %}

{% raw %}
```css
.main-header__brand img {
    /* height: 100%; */
    height: 100%;
    /* width: 100%; */
}
```
{% endraw %}

{% raw %}
```css
.main-header__brand {
    color: rgb(6, 26, 27);
    text-decoration: none;
    font-weight: bold;

}

.main-header__brand img {
    height: 2.5rem;
}
```
{% endraw %}

{% raw %}
```css
.main-header__brand img {
    height: 2.5rem;
    vertical-align: middle;
}
```
{% endraw %}

{% raw %}
```css quitar inline block
.main-nav__item {
    display: inline-block;
    margin: 0 1rem;
}
```
{% endraw %}

{% raw %}
```css
.main-nav__items {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}

.main-nav__item {
    margin: 0 1rem;
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .toggle-button {
        display: none;
    }

    .main-nav {
        display: inline-block;
        text-align: right;
        width: calc(100% - 44px);
        vertical-align: middle;
    }

}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .toggle-button {
        display: none;
    }

    .main-nav {
        /* display: inline-block;
        text-align: right;
        width: calc(100% - 44px);
        vertical-align: middle; */
    }

}
```
{% endraw %}


{% raw %}
```css
.main-nav {
    display: none;
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .toggle-button {
        display: none;
    }

    .main-nav {
        /* display: inline-block;
        text-align: right;
        width: calc(100% - 44px);
        vertical-align: middle; */
        display: flex;
    }

}
```
{% endraw %}

{% raw %}
```css
.mobile-nav__items {
    width: 90%;
    height: 100%;
    list-style: none;
    margin: 10% auto;
    padding: 0;
    text-align: center;
  }
```
{% endraw %}

cambiar margen a 0

{% raw %}
```css
.mobile-nav__items {
    width: 90%;
    height: 100%;
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
```
{% endraw %}

Añadir al footer

{% raw %}
```css
.main-footer__links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
```
{% endraw %}

{% raw %}
```css
.main-footer__link {
    margin: 0.5rem 0;
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem) {
    .main-footer__link {
        margin: 0 1rem;
    }

    .main-footer__links {
        flex-direction: row;
        justify-content: center;
    }
}
```
{% endraw %}

flexbox a plans

{% raw %}
```css
@media (min-width: 40rem) {

    .plan__list {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
}
    .plan {
        width: 30%;
        min-width: 13rem;
        max-width: 25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 28rem;
    }
    .plan--highlighted {
        box-shadow: 2px 2px 2px 2px rgba(82, 82, 167, 0.5);
        height: 30rem;
        z-index: 50;
    }
}
```
{% endraw %}

flexbox a keyfeatures

{% raw %}
```css
@media (min-width: 40rem) {
    .key-feature {
        width: 30%;
        max-width: 25rem;

    }
    .key-feature__list {
        display: flex;
        justify-content: center;
    }
}
```
{% endraw %}

flexbox a customers

{% raw %}
```css
@media (min-width: 40rem) {
    .testimonial {
      margin: 3rem auto;
      max-width: 1500px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .testimonial__image-container {
      width: 66%;
    }

    .testimonial__info {
      width: 30%;
    }
  }
```
{% endraw %}

# 13-CSS Grid

---

## 1. Introducción
- CSS Grid permite crear layouts bidimensionales: filas (**rows**) y columnas (**columns**).
- Diferencias clave con Flexbox:
	- Grid → 2D (filas y columnas)
	- Flexbox → 1D (horizontal o vertical)
- No soporta versiones antiguas de Internet Explorer.
- Solo los **hijos directos** del contenedor forman parte del grid.
- Activar rejillas en DevTools para depuración.

---

## 2. Propiedades básicas del Grid
### Contenedor
- `display: grid;`
- `grid-template-columns: <valores>;` → define columnas.
	- Ej: `grid-template-columns: 200px 150px 20% 1fr;`
	- `fr` → fracción del espacio disponible.
	- Método helper: `repeat()`
		- `grid-template-columns: repeat(4, 25%);`
- `grid-template-rows: <valores>;`
	- Ej: `grid-template-rows: 5rem auto;`
	- `minmax(min, max)` → tamaño mínimo y máximo.
- `grid-gap` / `gap` → espacios entre filas y columnas.

### Posicionar elementos
- `grid-column-start`, `grid-column-end`
- `grid-row-start`, `grid-row-end`
- Shorthand:
	- `grid-column: 1 / -1;`
	- `grid-row: row-2-start / span 1;`
	- `grid-area: row-1-start / 2 / row-2-end / span 3;`
- **Span cells**
	- `grid-column-end: span 2;` → ocupar 2 columnas
	- `grid-row-end: span 1;` → ocupar 1 fila (por defecto)
- Elementos se pueden sobreponer → usar `z-index`.

### Nombres de líneas y áreas
- Nombrar líneas:
	{% raw %}
```css
	grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px, auto) [row-2-end];
	```
{% endraw %}
- Asignar nombres a áreas:
	- Crear un patrón en un string.
	- Usar `.` para celdas vacías.
	- DOM order no se respeta → visualmente se reorganiza.
	- DevTools permite mostrar nombres de área y líneas.

---

## 3. Propiedades avanzadas
- **Auto rows y columns**
	- `grid-auto-rows: 12em;` → filas generadas automáticamente.
	- `grid-auto-columns: 5rem;`
	- `grid-auto-flow: row | column | dense;`
- **Auto-fill y Auto-fit**
	- Generan columnas automáticamente según espacio disponible.
	- Centran y distribuyen items dinámicamente.
- **Gutters y gap**
	- Espacios uniformes entre filas y columnas:
		- `gap: 1rem;` → fila y columna
- **Implicit vs Explicit Grid**
	- Explícito → definido en `grid-template-columns/rows`.
	- Implícito → generado automáticamente con `grid-auto-*`.

---

## 4. Alineamiento en Grid
- Alinear elementos individuales:
	- `justify-items` → eje X
	- `align-items` → eje Y
- Alinear todo el grid dentro del contenedor:
	- `justify-content` → eje X
	- `align-content` → eje Y

---

## 5. Aplicación en proyectos
- Grid para layout principal (`body`):
	- Definir filas para header, main y footer.
	- Footer flexible → auto para ocupar espacio restante.
	- Ajustes responsive con media queries:
		- Móvil: agregar filas, reorganizar áreas.
		- Desktop: labels al lado de inputs, form organizado en varias columnas.
- Anidar grids:
	- Ej: formulario con checkboxes y dropdowns.
	- Ajustar distancias con `gap` en lugar de `margin`.
- Solución a problemas comunes:
	- Imagen posicionada incorrectamente → quitar `margin-top` y alinear con grid.
	- Footer que crece en smartphones → ajustar `grid-template-rows` o usar Flexbox dentro del footer.

---

## 6. Comparación Grid vs Flexbox
| Característica | Grid | Flexbox |
|----------------|------|---------|
| Dimensiones | 2D | 1D |
| Filas y Columnas | Sí | No |
| Layouts complejos | Sí | Limitado |
| Recomendado para | Layouts de página | Filas o columnas simples |
| Responsive | Sí, con auto-fill / auto-fit | Flex-wrap |

---

## 7. Resumen
- `display: grid;` → convierte el contenedor en grid.
- Estructura:
	- `grid-template-columns` y `grid-template-rows` → explícitas
	- `repeat(times, size)` → repetir columnas/filas
	- `auto-fill` / `auto-fit` → derivar número de columnas automáticamente
	- `minmax(min, max)` → tamaño dinámico
- Posicionar elementos:
	- `grid-row`, `grid-column`, `span X`, nombres de línea, nombres de áreas.
- Alinear:
	- `justify-items` / `align-items` → items
	- `justify-content` / `align-content` → contenido del grid
- Grid vs Flexbox → Grid para layouts complejos 2D, Flexbox para filas o columnas 1D.

## Codigos

!Data/Data-Prog/CSS-Guia completa/image2.png
{% raw %}
```css
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 2fr 20% 1fr;
    grid-template-rows: 5rem 2.5rem;
}
```
{% endraw %}

{% raw %}
```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}
```
{% endraw %}

{% raw %}
```css
.container {
    margin: 20px;
    display: grid;
    height: 500px;
    grid-template-columns: 200px 5rem 20% auto;
    grid-template-rows: 5rem 2rem;
}
```
{% endraw %}


{% raw %}
```css
.container {
    margin: 20px;
    display: grid;
    height: 500px;
    /* grid-template-columns: 200px 5rem 20% auto; */
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 5rem minmax(10px, auto) 100px;
}
```
{% endraw %}

{% raw %}
```css
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 2;
    grid-column-end: span 3;
    grid-row-start: 1;
    grid-row-end: 3; 
}
```
{% endraw %}

{% raw %}
```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column-start: 1;
    grid-column-end: -1;
}
```
{% endraw %}

{% raw %}
```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: 2;
    grid-row-end: span 1;
}

.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 2;
    grid-column-end: span 3;
    grid-row-start: 1;
    grid-row-end: 3; 
}
```
{% endraw %}

{% raw %}
```css
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: row-2-start;
    grid-row-end: span 1;
    z-index: 10;
}

.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 2;
    grid-column-end: span 3;
    grid-row-start: row-1-start;
    grid-row-end: row-2-end; 
}
```
{% endraw %}

{% raw %}
```css
.container {
grid-column-gap: 20px;
grid-row-gap: 10px;
grid-gap: 10px 20px;
}
```
{% endraw %}

{% raw %}
```css
.el3 {
grid-area: header;
}

.container {
 grid-template-areas: 
 "header header header header"
 ". . main main"
 "footer footer footer footer";
}
```
{% endraw %}

{% raw %}
```css
.container {
grid-template-columns: repeat(4, [col-start] 25% [col-end]);
}
.el1 {
grid-column: col-start 2 / col-end 2;
}
```
{% endraw %}

{% raw %}
```css
.container {
grid-template-columns: repeat(4, [col-start] 25% [col-end]);
}
.el1 {
grid-column: col-start 2 / col-end 2;
}
```
{% endraw %}


{% raw %}
````css
.container {
grid-template-columns: repeat(4, [col-start] 25% [col-end]);
}
.el1 {
grid-column: col-start 2 / col-end 2;
}
```
{% endraw %}`

{% raw %}
```
body
 display: grid;
 grid-template-rows: auto 8rem;

main
/* min-height: calc(100vh - 3.5rem - 8rem); */

```
{% endraw %}
{% raw %}
```
body
padding-top: 3.5rem;
height: 100%;

```
{% endraw %}

{% raw %}
```css
html {
    height: 100%;
}
```
{% endraw %}

{% raw %}
```
body
 grid-template-rows: 3.5rem auto 8rem;

main
 margin-top: 3.5rem;
 grid-row: 2 / 3;

main-footer
 grid-row: 3 / 4;
```
{% endraw %}

{% raw %}
```
body
 grid-template-areas: "header" "main" "footer";
main
 grid-area: main;
main-footer
 grid-area: footer;
```
{% endraw %}

{% raw %}
```
body
 grid-template-rows: 3.5rem auto auto;

```
{% endraw %}

{% raw %}
```
body
grid-template-rows: 3.5rem auto fit-content(8rem);
```
{% endraw %}

{% raw %}
```
el2
 justify-self: center;
 align-self: center;
```
{% endraw %}

{% raw %}
```css
@media (max-width: 48rem) {

    .container {

        grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px, 20rem) [row-2-end row-3-start] 150px [row-3-end row-4-start] 100px [row-4-end];

        grid-template-areas: "header header header header"

                             "main main main main"

                             "side side side side"

                             "footer footer footer footer";

    }

}
```
{% endraw %}

{% raw %}
```css
.el1 {
grid-area: side;
}
```
{% endraw %}

{% raw %}
```
grid-template-areas: "header header header header" ". side main main" "footer footer footer footer";
```
{% endraw %}

{% raw %}
```css
grid-template-columns: repeat(2, 15rem);
grid-auto-rows: auto;
```
{% endraw %}

{% raw %}
```css
.container {
 grid-template-columns: repeat(auto-fill, 10rem);
}
```
{% endraw %}

{% raw %}
```css
grid-template-columns: repeat(auto-fit, 10rem);
```
{% endraw %}


{% raw %}
```css
grid-template-columns: repeat(3, 10rem);
```
{% endraw %}

{% raw %}
```css
.quote:nth-of-type(2) {
  grid-column: span 2;
}
```
{% endraw %}

{% raw %}
```css
.signup-form {
    display: grid;
}

@media (min-width: 40rem)  {
 .signup-form {
 grid-template-columns: 10rem auto;
}}
```
{% endraw %}

{% raw %}
```css
.signup-form label,
.signup-form input,
.signup-form select {
    display: block;
    /* margin-top: 1rem; */
    width: 100%;
}
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem)  {
    .signup-form {
        margin: auto;
        width: 30rem;
        grid-template-columns: 10rem auto;
        grid-row-gap: 1rem;
        grid-column-gap: 0.5rem;
    }
}
```
{% endraw %}

{% raw %}
```html
<div class="signup-form__checkbox">
<input type="checkbox" id="agree-terms" required>
<label for="agree-terms">Agree to
<a href="#">Terms &amp; Conditions</a>
</label>
</div>
```
{% endraw %}

{% raw %}
```css
@media (min-width: 40rem)  {
    .signup-form__checkbox {
        grid-column: span 2;
    }
}
```
{% endraw %}

{% raw %}
```css
    .signup-form [id="title"] {
        grid-row: 2;
    }
```
{% endraw %}

{% raw %}
```css
    .signup-form [id="title"] {
        /* grid-row: 2; */
        grid-column: span 2;

    }
```
{% endraw %}

{% raw %}
```css
.signup-form {
    padding: 1rem;
    display: grid;
    grid-auto-rows: 2rem;
    grid-row-gap: 0.5rem;

}
```
{% endraw %}


# 15. Transforming Elements with CSS Transforms

## Contenido del módulo
1. Introducción al módulo
2. Rotación de elementos y uso de `transform-origin`
3. Uso combinado de `rotate()` y `translate()`
4. Trabajando con `skew()` y `scale()`
5. Shorthands de transformaciones
6. Rotaciones 3D
7. Imagen: 6.2 css-transform-rotate (img)

## Temario ampliado
1. Entendiendo la propiedad `perspective`
2. Movimiento en el eje Z con `translateZ()`
3. Rotación de contenedores y `transform-style`
4. Flip de elementos (volteo)
5. `backface-visibility`
6. Conclusión y wrap-up

---

## Transformaciones en el Proyecto Final

## Rotar elementos (packages.css)
- `transform` **no afecta el document flow** → el espacio del elemento no cambia.
- Permite **mover, rotar, escalar o distorsionar elementos**.
- `transform-origin: center;` es el valor por defecto.
- Ejemplo práctico de la clase:
	- `transform: rotate(45deg) translateX(3.5rem) translateY(-2rem);`
		- En `translate()`:  
			- Primer valor = eje X  
			- Segundo valor = eje Y

---

## Movimiento del badge en el proyecto
- Con `top` y `right` **no es posible** mover el badge si el elemento no tiene `position: absolute`.
- Alternativa correcta: `translate()`
- Para cortar lo sobrante del badge:
	- Usar `overflow: hidden;` en el contenedor.

---

## Transformaciones en customers.css (Proyecto Final)

## Uso de skew
- `transform: skewX(20deg) skewY(20deg);`
- Shorthand:
	- `transform: skew(20deg);`
- La **imagen se deforma** → aplicar skew **al contenedor**, no a la imagen.
- Problema típico:  
	- La imagen no se adapta → requiere recorte (`overflow: hidden`).
	- Espacios en blanco → ajustar dimensiones del contenedor.

## Uso de scale
- `scale()` puede distorsionar la imagen si no se mantiene aspect ratio.
- Soluciones:
	- Escalar ambos ejes: `scale(1.2, 1.2)`
	- Ajustar tamaño del contenedor.
	- Mejoras para mobile: escalar o ajustar layout según breakpoints.

---

## Transformaciones 3D

## Rotaciones básicas
- `transform: rotateX(30deg);`
	- A los 90°, el elemento se hace “invisible” (de canto).
- Volteos:
	- `rotateX(100deg);`
- Combinaciones:
	- `transform: rotateX(0) rotateY(80deg);`

## Perspectiva con función
- `transform: perspective(1000px) rotateX(...) rotateY(...);`
	- Menor valor = mayor profundidad / distorsión.
	- Mayor valor = efecto más suave y realista.

## Propiedad perspective (padre)
- `perspective: 1000px;`
	- — Si la aplicas al hijo: **no hace nada**.
	- — Debe aplicarse al elemento padre.
	- Afecta a **todos los hijos**.
- Cambiar el ángulo visual:
	- `perspective-origin: right;`
	- `perspective-origin: 500px;`

## Combinaciones 3D
- `transform: rotateX(30deg) rotateY(80deg) rotateZ(30deg);`
	- Cada eje aporta su propio giro.

---

## Transformación 3D de múltiples elementos
- Requiere `position: absolute;` para superposición.
- Movimiento en 3D:
	- `translateX(1rem)`
	- `translateX(1rem) translateZ(-100rem);` → alejar el elemento del usuario.
- Control de perspectiva:
	- `perspective-origin: center;`

---

## Aplicando transformaciones al contenedor
- Rotar el contenedor:
	- `transform: rotateY(90deg);`
- Control de renderizado de hijos:
	- `transform-style: flat;`  
	- `transform-style: preserve-3d;` (para 3D real)
- Ejemplo:
	- box1 → `z-index: 1;`
	- box2 → `transform: translateZ(-10rem);`

---

## Voltear elementos (flip)
- `backface-visibility: hidden;`
	- Oculta el contenido cuando se voltea.
	- No soportado en todos los navegadores, especialmente en algunos móviles.

---

## Resumen General del Módulo
- Transformaciones 2D:
	- `translate()`
	- `scale()`
	- `skew()`
	- `rotate()`
	- Shorthands de transform
- Transformaciones 3D:
	- Uso del eje Z (`translateZ`, `rotateX`, `rotateY`)
	- `transform-style`
	- `backface-visibility`
- Perspectiva:
	- `perspective`
	- `perspective-origin`
	- Aplicar al padre para efectos válidos.

---

## The “transform” Property (Resumen técnico)
- Permite `translate()`, `scale()`, `rotate()`, `skew()`, y combinaciones.
- Soporta transformaciones 3D.
- Control adicional:
	- `transform-origin`
	- `transform-style`

## Perspective (Resumen técnico)
- Define la perspectiva del observador.
- `perspective-origin` ajusta desde dónde se percibe la transformación.

## Codigos
{% raw %}
```css
.package__badge {
 transform: rotateZ(45deg);
 transform-origin: 25% 50%;
}
```
{% endraw %}

{% raw %}
```css
transform: rotateZ(45deg) translateX(2rem) translateY(0.5rem);
```
{% endraw %}

{% raw %}
```css
transform: rotateZ(45deg) translateX(3.5rem) translateY(-1rem);
transform-origin: center;
width: 12rem;
text-align: center;
```
{% endraw %}

{% raw %}
```css
.package {
    overflow: hidden;
}
```
{% endraw %}

{% raw %}
```css
  .testimonial__image-container {
    transform: skewX(20deg);
  }
```
{% endraw %}

{% raw %}
```css
  .testimonial__image {
    width: 100%;
    vertical-align: top;
    transform: skew(-20deg);
  }
```
{% endraw %}

{% raw %}
```css
  .testimonial__image-container {
    transform: skew(20deg);
    overflow: hidden;
  }
```
{% endraw %}

{% raw %}
```css
  .testimonial__image {
    width: 100%;
    vertical-align: top;
    transform: skew(-20deg) scaleX(2);
  }
```
{% endraw %}

{% raw %}
```css
	transform: skew(-20deg) scale(1.2);
```
{% endraw %}

{% raw %}
```css
.testimonial__image-container {
    width: 60%;
  }
```
{% endraw %}

{% raw %}
```css
transform: rotate(45deg) translate(3.5rem, -2rem);
```
{% endraw %}

{% raw %}
```css
.container {
    perspective: 1000px;
}
```
{% endraw %}

!Data/Data-Prog/CSS-Guia completa/image3.png

# 16. Transitions & Animations in CSS

## Contenido del módulo
1. Introducción al módulo
2. Understanding & Applying Transitions
3. Timing Functions
4. Transitions & `display`
5. CSS Animations
6. Keyframes múltiples
7. Animaciones en Customers Page
8. JavaScript Animation Event Listeners
9. Wrap Up

---

## 1. CSS Transitions

### Conceptos base
- La propiedad `transition`:
- `transition: WHAT DURATION DELAY TIMING-FUNCTION;`
- Ejemplo:  
	`transition: opacity 200ms 1s ease-out;`
	- Cambia `opacity` en 200ms  
	- Empieza tras 1s  
	- `ease-out`: rápido → lento

### Timing functions
- `ease-out`
- `ease-in`
- `linear`
- `cubic-bezier()`

---

## 2. CSS Animations

### Propiedad `animation`
- `animation: NAME DURATION DELAY TIMING-FUNCTION ITERATION DIRECTION FILL-MODE PLAY-STATE;`

Ejemplo:
- `animation: wiggle 200ms 1s ease-out 8 alternate forwards running;`

### Animations summary
- **Keyframes**
- Definen pasos con `from/to` o `%`
- Interpolaciones mediante timing functions
- **animation**
	- Controla keyframes, duración, delay, iteraciones
	- `animation-fill-mode`
		- `forwards`, `backwards`, `both`, `none`
	- Eventos JS: `animationstart`, `iteration`, `end`

---

## 3. Transitions en el Proyecto Final

### Modal (main.css)
- No se pueden animar cambios de `display`.
- Solución: usar `opacity` + `transform`.

### Ajustes
- Clase `.open` activada desde JS
- `transform: translateY(0);`
- `transition: opacity 500ms, transform 500ms;`
- Con easing:
	`transition: opacity 200ms ease-out, transform 500ms ease-out;`
- Con delay:
	`transition: opacity 200ms ease-out 1s, transform 500ms ease-out 1s;`

---

## 4. Timing Functions en el Proyecto Final

- Efecto “bump”
- Curvas personalizadas: https://easings.net/
- Ejemplo:
	`transform 500ms cubic-bezier(0.32, 0, 0.67, 0);`

---

## 5. Transición del Backdrop

### Problemas y soluciones
- `display: none;` no anima  
- JS:
	- `backdrop.style.display = 'block';`
	- `setTimeout(() => { ... }, 10);`
- CSS:
	- `opacity: 0;`
	- `transition: opacity 0.2s linear;`

### Cierre del backdrop
- Necesaria sincronización entre duración del CSS y el timeout de JS.

---

## 6. Animaciones del Proyecto Final

### Ejemplos
- Animar color, transformaciones, wiggle, CTA

### Keyframes
- Control total sobre rotaciones, opacidad, movimiento
- Activables mediante eventos JS

### Fill states
- `forwards` → conserva último frame  
- `backwards` → conserva el inicial  
- `both`  
- `none`

### Ejemplos
- Mantener rotación final:
	`animation: wiggle 200ms 3s 8 forwards;`
- Mantener estado inicial:
	`animation: wiggle 200ms 3s 8 backwards;`

---

## 7. Keyframes Avanzados

### Múltiples pasos
{% raw %}
```css
@keyframes wiggle {
	0% { transform: rotate(0deg); }
	25% { transform: rotate(3deg); }
	75% { transform: rotate(-3deg); }
	100% { transform: rotate(0deg); }
}
```
{% endraw %}`

### Notas

- `alternate` puede producir resultados inesperados
- Funciones de tiempo por animación:  
    `animation: wiggle 400ms 3s 8 ease-out none;`

---

## 8. Animaciones en Customers Page

- En `customers.css`
- Problema: `transform` de la animación sobrescribe `skew()`
- Solución: incluir **skew dentro del keyframe**

{% raw %}
```css
@keyframes rotateCard {
	from { transform: skew(20deg) rotate(0); }
	to { transform: skew(20deg) rotate(5deg); }
}
```
{% endraw %}

- En móviles sin hover → animación via click o JS

---

## 9. Eventos JS extras para Animación

### Eventos

- `animationstart`
- `animationiteration`
- `animationend`

### Uso

- Listener en el botón CTA
- `elapsedTime` útil para detectar finalización

---

## Resumen General

### Keyframes

- from/to y %
- Animación de múltiples propiedades
- Interpolación con timing functions

### animation property

- Keyframe set seleccionado
- Duración, delay
- Iteraciones, dirección
- animation-fill-mode
- Eventos de animación (JS)

## Codigos

{% raw %}
```css
.modal {
    /* display: none; */
    opacity: 0;
    transform: translateY(-3rem);
  }
```
{% endraw %}

{% raw %}
```js
for (var i = 0; i < selectPlanButtons.length; i++) {
electPlanButtons[i].addEventListener('click', function() {
 modal.classList.add('open');
 backdrop.classList.add('open');
    });
}
```
{% endraw %}

{% raw %}
```css
.open {
    display: block !important;
}
```
{% endraw %}

{% raw %}
```css
.open {
    display: block !important;
    opacity: 1 !important;
    transform: translateY(0) !important;
}
```
{% endraw %}

{% raw %}
```js
function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.style.display = 'none';
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    backdrop.classList.add('open');
});
```
{% endraw %}

{% raw %}
```js
toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function(){
        backdrop.classList.add('open');
    },10);
});
```
{% endraw %}

{% raw %}
```js
function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.style.display = 'none';
    setTimeout(function(){
        backdrop.classList.remove('open');
    },10);
}
```
{% endraw %}

{% raw %}
```js
for (var i = 0; i < selectPlanButtons.length; i++) {

selectPlanButtons[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function(){
            backdrop.classList.add('open');
        },10);
    });
}
```
{% endraw %}

{% raw %}
```js
function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function(){
    backdrop.style.display = 'none';
    },200);
}
```
{% endraw %}

{% raw %}
```css
.main-nav__item--cta a,
.mobile-nav__item--cta a {
    color: white;
    background: rgb(74, 198, 236);
    padding: 0.5rem 1rem;
    border-radius: 8px;
}
.main-nav__item--cta a:hover,
.main-nav__item--cta a:active,
.mobile-nav__item--cta a:hover,
.mobile-nav__item--cta a:active {
    color: blue;
    background-color: white;
    border: none;
}
```
{% endraw %}

{% raw %}
```css
@keyframes wiggle {
    from {
        transform: rotateZ(0);
    }
    to {
        transform: rotateZ(10deg);
    }
}
```
{% endraw %}

{% raw %}
```css
.main-nav__item--cta {
    animation: wiggle 200ms 3s 8 alternate;
}
```
{% endraw %}

{% raw %}
```css
@keyframes wiggle {
    0% {
        transform: rotateZ(0);
    }
    50% {
        transform: rotateZ(-10deg);
    }
    100% {
        transform: rotateZ(10deg);
    }
}
```
{% endraw %}

{% raw %}
```css
.main-nav__item--cta {
    animation: wiggle 400ms 3s 8 none;
}
```
{% endraw %}

{% raw %}
```css
  @keyframes flip-customer {
    0% {
      transform: rotateY(0);
    }
    50% {
      transform: rotateY(160deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
```
{% endraw %}

{% raw %}
```css
#customer-1:hover .testimonial__image-container {
 animation: flip-costumer 1s ease-out forwards;
  }
```
{% endraw %}

{% raw %}
```css
  @keyframes flip-customer {
    0% {
      transform: rotateY(0) skew(20deg);
    }
    50% {
      transform: rotateY(160deg) skew(20deg);
    }
    100% {
      transform: rotateY(360deg) skew(20deg);
    }
  }
```
{% endraw %}

{% raw %}
```js 
var ctaButton = document.querySelector('.main-nav__item--cta');
ctaButton.addEventListener('animationstart', function(event){
    console.log('animation started', event);
})
ctaButton.addEventListener('animationend', function(event){
    console.log('animation ended', event);
})ctaButton.addEventListener('animationiteration', function(event){
    console.log('animation iteration', event);
})
```
{% endraw %}


# 17. Writing Future-Proof CSS Code

## Contenido
1. Module Introduction
2. CSS Modules & Their Working Groups
3. CSS Variables
4. Vendor Prefixes
5. Detectar qué prefijos usar
6. @supports (Feature Queries)
7. Polyfills
8. Eliminar inconsistencias entre navegadores
9. Naming CSS Classes
10. Vanilla CSS vs Frameworks
11. Wrap Up

---

## CSS Variables
- Reutilización de valores: definir una vez, usar múltiples veces.
- Fallbacks cuando una variable no está definida:
	- `color: var(--my-color, #fa923f);`
- Compatibilidad:
	- Modern browsers OK.
	- IE **no soporta** variables CSS.
- Uso típico en proyectos:
	- `background: var(--dark-blue, rgb(48, 48, 95));`
	- `border: 1px solid var(--dark-blue);`
	- `color: var(--highlight-color);`
- Alternativa:
	- Sistemas de variables con Sass (preprocessing), sin soporte dinámico en runtime.

---

## Vendor Prefixes
- Los navegadores implementan nuevas features a distinta velocidad.
- Se crean versiones “prefixed” mientras la feature aún no es estándar.
- Ejemplo clásico: Flexbox en versiones antiguas.
- Consideraciones:
	- Las versiones antiguas no cambian aunque el estándar evolucione.
- Implementación en el proyecto:
	- Añadir primero la regla más antigua para evitar sobrescritura.
	- Ubicación: shared.css → `.main-header`
- Herramientas recomendadas:
	- Autoprefixer: https://github.com/postcss/autoprefixer
	- Web UI: https://autoprefixer.github.io/
	- Consulta de prefijos: http://shouldiprefix.com/

---

## Support Queries (@supports)
- Permite verificar si un value o propiedad es soportado.
- Las reglas dentro de `@supports` **solo se aplican** si el navegador reconoce esa característica.
- Uso en el proyecto:
	- Verificar soporte de Grid.
	- Evitar overlap del header aplicando padding-top en fallback.
	- Si `display: grid` es soportado → se sobrescriben los estilos fallback.
- Concepto clave:
	- *Progressive Enhancement*: primero diseño base; luego mejoras si el navegador soporta la feature.

---

## Polyfills
- Paquetes JavaScript que añaden features CSS en navegadores que no las soportan.
- Coste: requieren cargar y parsear JS adicional.
- Consideraciones:
	- No existe polyfill real para CSS Grid (solo fallbacks de layout).
	- Útiles para rem→px, backgrounds o features simples.
	- Evitar polyfills para layouts complejos; preferir fallbacks bien diseñados.

---

## Eliminar Inconsistencias Entre Navegadores
- Los navegadores tienen defaults distintos:
	- Margins, paddings, `box-sizing`, tamaños base…
- Opciones:
	- **Normalize.css**
		- Consistencia entre navegadores.
		- Más peso; incluye elementos que puede que no uses.
	- **Reset manual**
		- Control granular.
		- Ideal para proyectos pequeños o específicos.

---

## Naming CSS Classes Correctamente
### Do
- Usar **kebab-case** (CSS es case-insensitive).
- Nombrar por **función**, no por apariencia:
	- `.page-title`
### Don’t
- Usar `snake_case`.
- Nombrar por estilo:
	- `.title-blue`
### BEM (Block Element Modifier)
- Estructura recomendada:
	- `.BLOCK__ELEMENT--MODIFIER`
	- `.menu-main__item--size-big`
	- `.button__action--success`
- Evita choques entre clases y mejora la escalabilidad.

---

## “Vanilla CSS” vs CSS Frameworks

### Vanilla CSS
- + Control total.
- + Sin código innecesario.
- + Libertad al nombrar clases.
- – Requiere experiencia y disciplina.
- – Mayor tiempo de desarrollo.

### Component Frameworks (Bootstrap, etc.)
- + Desarrollo rápido.
- + Buenas prácticas incorporadas.
- + No requiere ser experto.
- – Poca personalización.
- – Overhead de código.
- – Interfaces “todas iguales”.

### Utility Frameworks (Tailwind CSS)
- + Desarrollo rápido.
- + Buenas prácticas técnicas.
- + Curva de aprendizaje baja.
- – Menos control semántico.
- – Overhead.
- – Clases mezclan estructura + estilo (si no se usa bien).

---

## Summary
### CSS Variables
- Definir una vez, reusar siempre.
- `your-name: 1rem;`
- Solo soporte en navegadores modernos.

### Naming CSS
- Usar kebab-case.
- Nombrar por función.
- BEM para evitar conflictos.

### Cross-Browser Support
- Los navegadores implementan features a distinta velocidad.
- Usar vendor-prefixes para maximizar compatibilidad.
- Usar `@supports` para aplicar mejoras solo si el navegador puede.
- Polyfills útiles pero costosos.
- Considerar reset / normalize.

### Vanilla CSS vs Frameworks
- Vanilla = máximo control.
- Frameworks = velocidad y consistencia.
- Utility frameworks = equilibrio orientado a productividad.


## Codigos

{% raw %}
```jsx
.element-1 {
color: #fa923f;
}
.element-2 {
color: #fa923f;
}
.element-3 {
color: #fa923f;
}
```
{% endraw %}

{% raw %}
```jsx
:root {
--my-color: #fa923f;
}

.element-1 {
color: var(--my-color);
}
.element-2 {
color: var(--my-color);
}
.element-3 {
color: var(--my-color, #fa923f);
}
```
{% endraw %}

{% raw %}
```css
:root {
    --dark-blue: rgb(48, 48, 95);
    --hightlight-color: blue;
}
```
{% endraw %}

{% raw %}
```jsx
.container {
display: -webkit-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
}
```
{% endraw %}

{% raw %}
```jsx
@supports (display: grid) {
.container {
display: grid;
}
}
```
{% endraw %}

{% raw %}
```css
body {
    font-family: 'Montserrat', sans-serif;
    padding-top: 3.5rem;
    margin: 0;
}

@supports (display: grid;) {
    body {
        display: grid;
        grid-template-rows: 3.5rem auto fit-content(8rem);
        grid-template-areas: "header" "main" "footer";
        padding-top: 0;
        height: 100%;
    }
}
```
{% endraw %}

{% raw %}
```css
* {
    box-sizing: border-box;
}
```
{% endraw %}



# 18 Sass (Syntactically Awesome Style Sheets)

## Contenido
1. Module Introduction  
2. What is Sass & Scss  
3. Installing Sass  
4. Things to be Improved with Sass  
5. Nesting Selectors  
6. Adding Nested Properties  
7. Understanding Variables  
8. Storing Lists & Maps in Variables  
9. Built-In Functions  
10. Adding Simple Arithmetics  
11. Import & Partials  
12. Improving Media Queries  
13. Inheritance  
14. Mixins  
15. Ampersand Operator  
16. Wrap Up  

---

## Introducción: Sass & SCSS
- Sitio oficial: https://sass-lang.com/guide
- Es una **herramienta de desarrollo**, no corre en el navegador.
- Extiende CSS con características avanzadas.
- Se compila a CSS en producción (workflow build).
- Dos sintaxis:
	- **SASS** (.sass): sin llaves ni `;`, basada en indentación.
	- **SCSS** (.scss): superset de CSS, mantiene llaves y `;`.
- Features principales:
	- Nested Rules (anidación de selectores)
	- Helper Functions (color, math, listas, maps…)
	- Inheritance (`@extend`)
	- Mixins (`@mixin`, `@include`)
	- Conditions & Loops
	- Partials (`_file.scss`)
	- Variables

---

## Instalación
- Método clásico:
	- Instalar **Ruby**.
	- Usar `gem install sass`.
- Método moderno:
	- Usar **Dart Sass**, el compilador oficial (recomendado).
	- Instalación: `npm install -g sass`.

---

## Mejorar el Proyecto con Sass
- Crear mixins para vendor prefixes → reutilizables.
- Mejorar nesting en estructuras como `.documentation-links`.
- Variables para colores, tamaños y espaciamiento.
- División del proyecto en partials para organización modular.

---

## Nested Rules
- Con `.sass`:
	- Se usa indentación en vez de `{}` y `;`.
- Con `.scss`:
	- Sintaxis igual a CSS pero con capacidad de anidación.
- Ejemplo de compilación:
	- `sass main.scss main.css`
	- Se genera también `main.css.map`
- Watch mode:
	- `sass --watch main.scss:main.css`

---

## Nested Properties
- Permiten agrupar propiedades que comparten namespace.
- Ejemplo:
	{% raw %}
```scss
	border: {
		color: red;
		width: 2px;
	}
	```
{% endraw %}

---

## Variables en SCSS
- Funciona en todos los navegadores porque es compilado.
- Reemplazo directo del valor en CSS final.
- Ideal para colores, fuentes, z-index, breakpoints:
	{% raw %}
```scss
	$primary-color: #3498db;
	```
{% endraw %}

---

## Variables con Listas y Maps
- **Listas**:
	{% raw %}
```scss
	$sizes: 10px 20px 30px;
	```
{% endraw %}
- **Maps** (clave/valor):
	{% raw %}
```scss
	$colors: (
		primary: #3498db,
		secondary: #2ecc71
	);
	```
{% endraw %}
- Acceso rápido:
	- `map-get($colors, primary)`
- Sass permite comentarios con `//` y funciones integradas.

---

## Funciones Incluidas (Built-in)
- Manipulación de colores:
	- `lighten($color, amount)`
	- `darken($color, amount)`
	- `mix()`, `adjust-hue()`, etc.
- Rango de 0% a 100%.
- Al cambiar el color base, las variaciones cambian automáticamente.

---

## Aritmética Simple
- Permite calcular valores derivados (padding, tamaños, layouts).
- Ejemplo:
	{% raw %}
```scss
	$base: 1rem;
	padding: $base * 2;
	```
{% endraw %}

---

## Imports y Partials
- `@import "typography.css"`
	- El compilado será: `@import url(typography.css)`.
	- Importa CSS estándar.
- **Partials**:
	- Archivos con `_nombre.scss`.
	- Usados para dividir estilos y compartir variables.
	- Ejemplo:
		{% raw %}
```scss
		@import "_variables.scss";
		```
{% endraw %}
- Nota: Sass moderno recomienda `@use` y `@forward`, pero `@import` sigue siendo común en proyectos legacy.

---

## Media Queries Mejoradas
- Mantener media queries **cerca del selector** que modifican.
- Anidar:
	{% raw %}
```scss
	.button {
		font-size: 1rem;

		@media (min-width: 600px) {
			font-size: 1.5rem;
		}
	}
	```
{% endraw %}
- Múltiples queries por selector, más organizado.

---

## Inheritance (`@extend`)
- Hereda reglas completas de otra clase.
- Útil para agrupar capacidades compartidas.
- Evita duplicar estilos.
- Ejemplo:
	{% raw %}
```scss
	.message {
		padding: 1rem;
		border-radius: 4px;
	}

	.success {
		@extend .message;
		background: green;
	}
	```
{% endraw %}

---

## Mixins
- Snippets reutilizables de código.
- Útiles para estilos repetidos, vendor prefixes y media queries.
- Ejemplo:
	{% raw %}
```scss
	@mixin flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	```
{% endraw %}
- Con argumentos:
	{% raw %}
```scss
	@mixin respond($breakpoint) {
		@media (min-width: $breakpoint) {
			@content;
		}
	}
	```
{% endraw %}
- Uso:
	{% raw %}
```scss
	@include respond(800px) {
		font-size: 2rem;
	}
	```
{% endraw %}

---

## Ampersand Operator `&`
- Controla cómo se refiere el selector al nivel actual.
- Perfecto para pseudo-selectores:
	{% raw %}
```scss
	.button {
		&:hover {
			background: red;
		}
	}
	```
{% endraw %}
- También funciona con clases:
	{% raw %}
```scss
	.button {
		&--large {
			padding: 2rem;
		}
	}
	```
{% endraw %}

---

## Wrap Up / Tips
- Integrar Sass con Webpack o Vite.
- Usar `sass-loader` para compilar automáticamente.
- Combinar Sass + Autoprefixer para producir CSS moderno y compatible.
- Mantener el proyecto modular usando partials y `@use`.
## Codigo

{% raw %}
```scss
.documentation-links {

li {
}
.documentation-link {

}
.documentation-link:hover,
.documentation-link:active {

}
}
```
{% endraw %}

{% raw %}
```css
.container {
flex-direction: column;
flex-wrap: nowrap;
}
```
{% endraw %}

{% raw %}
```scss
.container {
flex: {
direction: column;
wrap: nowrap;
}
}
```
{% endraw %}

{% raw %}
```scss
$main-color: #51568;
```
{% endraw %}

{% raw %}
```scss
$border-default: 0.85rem solid $main-color;
```
{% endraw %}

{% raw %}
```scss
$colors: (main: #456854, secondary: #000156);
```
{% endraw %}

{% raw %}
```scss
$order-default: 0.85rem solid map-get($colors, main);
```
{% endraw %}

{% raw %}
```scss
background: map-get($colors, secondary);
color: map-get($colors, main);
```
{% endraw %}

{% raw %}
```scss
background: lighten(map-get($colors, main), 68%);
```
{% endraw %}

{% raw %}
```scss
padding: $size-default * 3 0;
box-shadow: $size-tiny $size-tiny $size-tiny / 2 #ccc;
margin: $size-default * 2;
```
{% endraw %}

{% raw %}
```scss
html {
@media () {

}
}
```
{% endraw %}

{% raw %}
```scss
.sass-section {

}
.sass-introduction {
@extend .sass-section;
}
```
{% endraw %}

{% raw %}
```scss
.sass-section, .sass-introduction, .sass-details {

}
```
{% endraw %}

{% raw %}
```scss
@mixin display-flex() {

}
.container {
@include display-flex();
}
```
{% endraw %}

{% raw %}
```scss
@mixin media-min-width($width){
	@media (min-width: $width) {
	@content;
	}
}
html {
	@include media-min-width(40 rem) {
		font-size: 125%;
	}
}
```
{% endraw %}

{% raw %}
```scss
.documentation-link {
&:hover,
&:active {
}
}
```
{% endraw %}