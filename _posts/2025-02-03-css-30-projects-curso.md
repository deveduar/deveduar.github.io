---
date: 2025-02-03 21:05
title: CSS 30 projects curso
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: "true"
category: uncategorized
tags:
  - CSS
---
# curso CSS 30 projects
`$= dv.current().file.tags.join(" ")`

- [CSS](/frontend/css/)
# CSS — Guía Completa + 30 Proyectos con Soluciones

Esta nota reúne:
- Fundamentos y técnicas modernas de CSS (2025).
- Particularidades, patrones y buenas prácticas reales.
- Un **cheatsheet ampliado**.
- Los **30 proyectos CSS** con explicación + solución.

---

## Fundamentos Modernos de CSS (2025)

### Selectores
- Selectores avanzados: `:is()`, `:where()`, `:has()`.
- Selectores relacionales: `:has(.error)` para validar estados desde el padre.
- Selectores de atributo avanzados: `input[type="file"]`.

### Variables CSS
- Variables globales: `:root { --color: #... }`
- Variables contextuales (herencia controlada).
- Variación con `@property` para animaciones tipadas.

### Layouts Modernos
- **Flexbox** (1D): alineación, wrapping, gap.
- **Grid** (2D): `auto-fit`, `minmax()`, `clamp()`, fr units.
- Layouts fluidos: `min()`, `max()`, `clamp()`, `vw`, `lvh`.

### Fluidez y Responsividad
- Container Queries → `@container`.
- Media Queries modernas: `@media (prefers-color-scheme)`.

### Tipografía
- Font stack system-ui.
- Control avanzado con `font-variation-settings`.
- Line-height unitless recomendado.

### Animaciones
- `@keyframes`, `animation-play-state`, `animation-timeline`.
- Transiciones: `transition: opacity 300ms ease;`
- Motion-safe: `@media (prefers-reduced-motion: reduce)`.

### Efectos y Técnicas
- Glassmorphism, neumorphism, frosted blur.
- Filtros: `filter: blur() grayscale() drop-shadow()`.
- Clipping: `clip-path`, `mask-image`.

### Accesibilidad en CSS
- Focus visible.
- Preferencias de usuario.
- Contraste mínimo AA/AAA.

---

## Cheatsheet Avanzado CSS (2025)

### Unidades
- Absolutas: `px`, `cm`, `pt`
- Relativas: `rem`, `em`, `%`
- Viewport: `vw`, `vh`, `dvh`, `lvh`, `svh`
- Funciones: `min()`, `max()`, `clamp()`

### Propiedades útiles
- `aspect-ratio`
- `backdrop-filter`
- `scroll-snap-type`
- `accent-color`

### Snippets claves
{% raw %}
```css
/* Centering absoluto */
.parent {
	display: grid;
	place-items: center;
}

/* Card responsiva */
.card {
	width: min(90%, 400px);
	padding: 1.5rem;
	border-radius: 1rem;
}

/* Grilla auto-ajustable */
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1rem;
}
```
{% endraw %}`

---

# 30 Proyectos CSS — Explicación + Solución

Cada proyecto incluye:
- Qué se aprende
- Solución mínima
- Técnicas usadas
    
---

## 1. Fancy Buttons

**Aprendes:** estados hover, transiciones, pseudoelementos.

{% raw %}
```css
.button {
	padding: 1rem 2rem;
	border: none;
	color: white;
	background: #6200ea;
	border-radius: .5rem;
	position: relative;
	overflow: hidden;
	transition: transform .25s ease;
}
.button:hover {
	transform: translateY(-3px);
}
.button::after {
	content: "";
	position: absolute;
	inset: 0;
	background: rgba(255,255,255,.2);
	opacity: 0;
	transition: opacity .3s;
}
.button:hover::after {
	opacity: 1;
}
```
{% endraw %}

---

## 2. Navbar Responsiva

{% raw %}
```css
nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
}
nav ul {
	display: flex;
	gap: 1.5rem;
}
@media (max-width: 600px) {
	nav ul {
		flex-direction: column;
		display: none;
	}
	nav.active ul {
		display: flex;
	}
}
```
{% endraw %}

---

## 3. Gallery Grid Auto-fit

{% raw %}
```css
.gallery {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1rem;
}
```
{% endraw %}

---

## 4. Glassmorphism Card

{% raw %}
```css
.card {
	backdrop-filter: blur(20px) saturate(180%);
	background: rgba(255,255,255,.1);
	border-radius: 1rem;
	padding: 2rem;
}
```
{% endraw %}

---

## 5. Animated Gradient Background

{% raw %}
```css
.bg {
	background: linear-gradient(120deg, #6a11cb, #2575fc);
	background-size: 200% 200%;
	animation: move 6s ease infinite;
}
@keyframes move {
	0%, 100% { background-position: 0% 50%; }
	50% { background-position: 100% 50%; }
}
```
{% endraw %}

---

## 6. Loader Spinner

{% raw %}
```css
.loader {
	width: 50px;
	height: 50px;
	border: 5px solid #ccc;
	border-top-color: #6200ea;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}
@keyframes spin {
	to { transform: rotate(360deg); }
}
```
{% endraw %}

---

## 7. Tooltip

{% raw %}
```css
.tooltip {
	position: relative;
}
.tooltip:hover::after {
	content: attr(data-tip);
	position: absolute;
	top: -40px;
	left: 0;
	padding: .5rem 1rem;
	background: black;
	color: white;
	border-radius: .3rem;
	white-space: nowrap;
}
```
{% endraw %}

---

## 8. Accordion

{% raw %}
```css
.accordion input:checked + .content {
	max-height: 500px;
}
.content {
	max-height: 0;
	overflow: hidden;
	transition: max-height .4s ease;
}
```
{% endraw %}

---

## 9. Modal

{% raw %}
```css
.modal {
	position: fixed;
	inset: 0;
	background: rgba(0,0,0,.6);
	display: grid;
	place-items: center;
	opacity: 0;
	pointer-events: none;
	transition: opacity .3s;
}
.modal.open {
	opacity: 1;
	pointer-events: auto;
}
```
{% endraw %}

---

## 10. Tabs con CSS

{% raw %}
```css
.tabs input:checked + label + .panel {
	display: block;
}
.panel {
	display: none;
	padding: 1rem;
}
```
{% endraw %}

---

## 11. Pricing Table

{% raw %}
```css
.pricing {
	display: grid;
	gap: 1.5rem;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```
{% endraw %}

---

## 12. Hero Section Fluid

{% raw %}
```css
.hero {
	height: 90svh;
	display: grid;
	place-items: center;
	background: url(hero.jpg) center/cover no-repeat;
}
```
{% endraw %}

---

## 13. Landing Page Layout

{% raw %}
```css
.layout {
	display: grid;
	grid-template-rows: auto 1fr auto;
	min-height: 100svh;
}
```
{% endraw %}

---

## 14. Footer Sticky

{% raw %}
```css
body {
	min-height: 100svh;
	display: grid;
	grid-template-rows: 1fr auto;
}
```
{% endraw %}

---

## 15. CSS Masonry

{% raw %}
```css
.masonry {
	column-count: 3;
	column-gap: 1rem;
}
.masonry > * {
	break-inside: avoid;
	margin-bottom: 1rem;
}
```
{% endraw %}

---

## 16. Icon Buttons

{% raw %}
```css
.icon-btn {
	display: inline-flex;
	align-items: center;
	gap: .5rem;
	padding: .7rem 1rem;
	border-radius: .5rem;
	background: #eee;
}
```
{% endraw %}

---

## 17. Timeline

{% raw %}
```css
.timeline {
	border-left: 2px solid #bbb;
	padding-left: 2rem;
}
.timeline-item {
	position: relative;
	padding: 1rem 0;
}
.timeline-item::before {
	content: "";
	position: absolute;
	left: -11px;
	top: 1rem;
	width: 14px;
	height: 14px;
	background: #6200ea;
	border-radius: 50%;
}
```
{% endraw %}

---

## 18. Hover Cards

{% raw %}
```css
.card {
	transition: transform .3s, box-shadow .3s;
}
.card:hover {
	transform: translateY(-5px) scale(1.02);
	box-shadow: 0 15px 40px rgba(0,0,0,.1);
}
```
{% endraw %}

---

## 19. Login Form UI

{% raw %}
```css
form {
	display: grid;
	gap: 1rem;
	max-width: 350px;
	margin: auto;
}
input {
	padding: .8rem;
	border-radius: .5rem;
	border: 1px solid #ccc;
}
```
{% endraw %}

---

## 20. Product Card + Hover

{% raw %}
```css
.product img {
	transition: transform .3s;
}
.product:hover img {
	transform: scale(1.1);
}
```
{% endraw %}

---

## 21. Offcanvas Menu

{% raw %}
```css
.menu {
	position: fixed;
	inset: 0 0 0 -250px;
	width: 250px;
	background: #222;
	transition: left .3s;
}
.menu.open {
	left: 0;
}
```
{% endraw %}

---

## 22. CSS Parallax

{% raw %}
```css
.parallax {
	background-attachment: fixed;
	background-size: cover;
	height: 60svh;
}
```
{% endraw %}

---

## 23. Card Flip

{% raw %}
```css
.flip {
	perspective: 1000px;
}
.flip-inner {
	transition: transform .6s;
	transform-style: preserve-3d;
}
.flip:hover .flip-inner {
	transform: rotateY(180deg);
}
.front, .back {
	backface-visibility: hidden;
	position: absolute;
	inset: 0;
}
.back {
	transform: rotateY(180deg);
}
```
{% endraw %}

---

## 24. Animated Border

{% raw %}
```css
.box {
	border: 3px solid transparent;
	background: linear-gradient(white, white) padding-box,
	linear-gradient(45deg, #6a11cb, #2575fc) border-box;
}
```
{% endraw %}

---

## 25. Notification Badge

{% raw %}
```css
.badge {
	position: relative;
}
.badge::after {
	content: attr(data-count);
	position: absolute;
	top: -6px;
	right: -6px;
	background: red;
	color: white;
	font-size: .7rem;
	padding: .2rem .4rem;
	border-radius: 50%;
}
```
{% endraw %}

---

## 26. Chat Bubbles

{% raw %}
```css
.msg {
	max-width: 70%;
	padding: .8rem;
	border-radius: 1rem;
}
.msg.mine {
	background: #6200ea;
	color: white;
	margin-left: auto;
}
.msg.other {
	background: #eee;
}
```
{% endraw %}

---

## 27. Image Overlay Text

{% raw %}
```css
.card {
	position: relative;
}
.card::after {
	content: "Ver más";
	position: absolute;
	inset: 0;
	display: grid;
	place-items: center;
	background: rgba(0,0,0,.5);
	opacity: 0;
	transition: opacity .3s;
	color: white;
	font-size: 1.5rem;
}
.card:hover::after {
	opacity: 1;
}
```
{% endraw %}

---

## 28. Progress Bar

{% raw %}
```css
.progress {
	height: 10px;
	background: #ddd;
}
.progress span {
	display: block;
	height: 100%;
	width: 70%;
	background: #6200ea;
}
```
{% endraw %}

---

## 29. Stepper UI

{% raw %}
```css
.stepper {
	display: flex;
	gap: 2rem;
}
.step {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background: #ccc;
}
.step.active {
	background: #6200ea;
}
```
{% endraw %}

---

## 30. Responsive Dashboard Layout

{% raw %}
```css
.dashboard {
	display: grid;
	grid-template-columns: 240px 1fr;
	min-height: 100svh;
}
@media (max-width: 800px) {
	.dashboard {
		grid-template-columns: 1fr;
	}
}
```
{% endraw %}

---


# CSS — 30 Proyectos Extra (Avanzados, Modernos y sin Repetición)

Esta nota amplía la colección anterior con **30 nuevos proyectos**, 100% distintos, orientados a técnicas modernas, soluciones reales y patrones reutilizables.

---

## 1. Menú tipo Mega-Dropdown
**Qué aprendes:** posicionamiento, overlays, layouts internos.
{% raw %}
```css
.nav-item:hover .mega {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background: white;
	padding: 2rem;
}
.mega { display: none; }
```
{% endraw %}`

---

## 2. Tarjeta con efecto Tilt (sin JS)

**Qué aprendes:** `perspective` + `transform` con pseudo-elemento.

{% raw %}
```css
.card {
	perspective: 800px;
}
.card:hover .inner {
	transform: rotateX(8deg) rotateY(8deg);
}
.inner {
	transition: .4s;
	transform-style: preserve-3d;
}
```
{% endraw %}

---

## 3. Imagen con zoom animado y pan suave

{% raw %}
```css
.img-container:hover img {
	transform: scale(1.3) translate(-10px, -10px);
}
img {
	transition: transform .6s ease;
}
```
{% endraw %}

---

## 4. Tabs verticales responsivos

{% raw %}
```css
.tabs {
	display: grid;
	grid-template-columns: 200px 1fr;
}
@media (max-width: 700px) {
	.tabs { grid-template-columns: 1fr; }
}
```
{% endraw %}

---

## 5. Cursor personalizado

{% raw %}
```css
body {
	cursor: url(cursor.svg) 4 4, auto;
}
```
{% endraw %}

---

## 6. Campo input con animación de etiqueta flotante

{% raw %}
```css
.group {
	position: relative;
}
label {
	position: absolute;
	left: 1rem;
	top: 1rem;
	transition: .3s;
}
input:focus + label,
input:not(:placeholder-shown) + label {
	top: -.6rem;
	font-size: .8rem;
}
```
{% endraw %}

---

## 7. Skeleton loading

{% raw %}
```css
.skeleton {
	background: linear-gradient(90deg, #eee, #ddd, #eee);
	background-size: 200%;
	animation: shimmer 1.4s infinite;
}
@keyframes shimmer {
	100% { background-position: -200% 0; }
}
```
{% endraw %}

---

## 8. Checkbox toggle iOS-style

{% raw %}
```css
.toggle {
	width: 50px;
	height: 26px;
	background: #ccc;
	border-radius: 20px;
	position: relative;
	transition: .3s;
}
.toggle::after {
	content: "";
	position: absolute;
	left: 2px; top: 2px;
	width: 22px; height: 22px;
	background: white;
	border-radius: 50%;
	transition: .3s;
}
input:checked + .toggle {
	background: #4caf50;
}
input:checked + .toggle::after {
	transform: translateX(24px);
}
```
{% endraw %}

---

## 9. Botón tipo ripple (CSS-only)

{% raw %}
```css
.btn {
	position: relative;
	overflow: hidden;
}
.btn:active::after {
	content: "";
	position: absolute;
	inset: 0;
	background: radial-gradient(circle, rgba(255,255,255,.6) 0%, transparent 60%);
	animation: ripple .4s;
}
@keyframes ripple { to { transform: scale(4); opacity: 0; } }
```
{% endraw %}

---

## 10. Lista con líneas conectadas

{% raw %}
```css
.steps {
	border-left: 2px solid #ccc;
	margin-left: 1rem;
}
.step {
	position: relative;
	padding: 1rem;
}
.step::before {
	content: "";
	position: absolute;
	left: -10px;
	top: 1rem;
	width: 12px; height: 12px;
	background: #6200ea;
	border-radius: 50%;
}
```
{% endraw %}

---

## 11. Menú lateral plegable (hover expand)

{% raw %}
```css
.sidebar {
	width: 60px;
	transition: width .3s;
}
.sidebar:hover {
	width: 200px;
}
```
{% endraw %}

---

## 12. Botón 3D con sombra neumórfica

{% raw %}
```css
.button {
	background: #e8e8e8;
	border-radius: 12px;
	box-shadow: 8px 8px 16px #bebebe,
	            -8px -8px 16px #ffffff;
}
```
{% endraw %}

---

## 13. Divider con texto centrado

{% raw %}
```css
.divider {
	display: flex;
	align-items: center;
	text-align: center;
}
.divider::before,
.divider::after {
	content: "";
	flex: 1;
	border-bottom: 1px solid #ccc;
}
.divider::before { margin-right: .5rem; }
.divider::after { margin-left: .5rem; }
```
{% endraw %}

---

## 14. Modal inferior tipo mobile-sheet

{% raw %}
```css
.sheet {
	position: fixed;
	bottom: -300px;
	left: 0;
	right: 0;
	background: white;
	transition: bottom .35s ease;
}
.sheet.open {
	bottom: 0;
}
```
{% endraw %}

---

## 15. Card con borde doble animado

{% raw %}
```css
.card {
	padding: 2rem;
	border: 3px solid transparent;
	background: linear-gradient(white, white) padding-box,
	            conic-gradient(#6a11cb, #2575fc) border-box;
	animation: spin 6s linear infinite;
}
@keyframes spin { to { transform: rotate(1turn); } }
```
{% endraw %}

---

## 16. Menú contextual estilo OS

{% raw %}
```css
.context {
	position: fixed;
	display: none;
	background: white;
	border: 1px solid #ddd;
	box-shadow: 0 10px 30px rgba(0,0,0,.1);
}
.context.show {
	display: block;
}
```
{% endraw %}

---

## 17. Card con auto-resize según contenido

{% raw %}
```css
.card {
	width: clamp(250px, 40vw, 450px);
}
```
{% endraw %}

---

## 18. Chip tags con hover de selección

{% raw %}
```css
.tag {
	background: #f3f3f3;
	padding: .4rem .8rem;
	border-radius: 50px;
	transition: background .25s;
}
.tag:hover {
	background: #ddd;
}
```
{% endraw %}

---

## 19. Lista sortable visual (solo UI)

{% raw %}
```css
.item {
	background: #fafafa;
	margin-bottom: .5rem;
	padding: .8rem;
	border-radius: .4rem;
	cursor: move;
}
```
{% endraw %}

---

## 20. Avatar con estatus online

{% raw %}
```css
.avatar {
	position: relative;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	overflow: hidden;
}
.avatar::after {
	content: "";
	position: absolute;
	bottom: 2px; right: 2px;
	width: 12px; height: 12px;
	background: #4caf50;
	border-radius: 50%;
	border: 2px solid white;
}
```
{% endraw %}

---

## 21. Tarjetas con gradiente rotativo

{% raw %}
```css
.card {
	background: linear-gradient(135deg,#ff8a00,#e52e71);
	animation: rotate 8s linear infinite;
	background-size: 200% 200%;
}
@keyframes rotate {
	50% { background-position: 100% 50%; }
}
```
{% endraw %}

---

## 22. Scroll suave interno con snap Y

{% raw %}
```css
.container {
	height: 300px;
	overflow-y: auto;
	scroll-snap-type: y mandatory;
}
.section {
	scroll-snap-align: start;
	padding: 2rem;
}
```
{% endraw %}

---

## 23. Efecto de texto “stroke + fill”

{% raw %}
```css
.text {
	color: transparent;
	-webkit-text-stroke: 2px #6200ea;
}
.text.fill:hover {
	color: #6200ea;
}
```
{% endraw %}

---

## 24. Menú hamburguesa animado (solo CSS)

{% raw %}
```css
.ham span {
	display: block;
	height: 3px;
	width: 25px;
	background: black;
	margin: 6px 0;
	transition: .3s;
}
.ham.active .line1 { transform: translateY(9px) rotate(45deg); }
.ham.active .line2 { opacity: 0; }
.ham.active .line3 { transform: translateY(-9px) rotate(-45deg); }
```
{% endraw %}

---

## 25. Tooltip con flecha personalizada

{% raw %}
```css
.tooltip::after {
	content: "";
	position: absolute;
	bottom: -6px; left: 10px;
	border-width: 6px;
	border-style: solid;
	border-color: #333 transparent transparent transparent;
}
```
{% endraw %}

---

## 26. Input con borde gradiente animado

{% raw %}
```css
.input {
	border: none;
	padding: .8rem;
	border-radius: .6rem;
	background: linear-gradient(white, white) padding-box,
	            linear-gradient(90deg,#6a11cb,#2575fc) border-box;
	border: 3px solid transparent;
	background-size: 200%;
	animation: move 4s linear infinite;
}
@keyframes move { to { background-position: 200%; } }
```
{% endraw %}

---

## 27. Botón sticky flotante (FAB)

{% raw %}
```css
.fab {
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	background: #6200ea;
	color: white;
	padding: 1rem;
	border-radius: 50%;
}
```
{% endraw %}

---

## 28. Grid alineado por baseline

{% raw %}
```css
.list {
	display: grid;
	align-items: baseline;
	gap: 1rem;
}
```
{% endraw %}

---

## 29. Modo oscuro automático

{% raw %}
```css
@media (prefers-color-scheme: dark) {
	body { background: #121212; color: #eee; }
}
```
{% endraw %}

---

## 30. Imagen con borde recortado (clip-path)

{% raw %}
```css
.img {
	clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
}
```
{% endraw %}

---

Fin de la nota.

{% raw %}
```

---

Si quieres, puedo crear:

✅ **30 proyectos CSS mucho más avanzados** (solo animaciones, solo Grid, solo efectos UI, etc.)  
✅ un **pack de 100 proyectos**  
✅ una **versión orientada a entrevistas**  
✅ o una nota específica para **JavaScript + CSS + DOM**  

¿Qué tipo de proyectos quieres ahora?
```
{% endraw %}