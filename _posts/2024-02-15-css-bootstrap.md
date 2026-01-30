tags:
  - CSS
status: 📌
Parent: "Area-Prog"
creation date: 2024-02-15 16:32
keywords:
source:
cssclasses:
  - hide-embedded-header1
categories:
public_note: "true"
# bootstrap
- [CSS](/frontend/css/)


Framework front-end orientado a la creación rápida de interfaces **responsive**, consistentes y reutilizables. Proporciona estilos predefinidos, componentes interactivos y un sistema de diseño basado en utilidades.

## Relación con otras tecnologías
- [CSS](/frontend/css/): Bootstrap está construido sobre CSS y lo abstrae mediante clases reutilizables.
- JavaScript: añade comportamiento interactivo (modales, dropdowns, tooltips).
- HTML semántico: la estructura base sigue dependiendo de un marcado correcto.
- [Frontend](/frontend/frontend/)
- [sass](/frontend/sass/)
## Características principales

### Sistema de grillas
- Basado en **flexbox**.
- Divide el layout en **12 columnas**.
- Permite diseños responsivos mediante *breakpoints*:
	- `sm`, `md`, `lg`, `xl`, `xxl`
- Uso de contenedores:
	- `.container`
	- `.container-fluid`

### Componentes UI
- Botones (`.btn`, `.btn-primary`, `.btn-outline-*`)
- Formularios
- Cards
- Navbars
- Modals
- Alerts
- Badges
- Accordions
- Carousels

Cada componente tiene:
- Estilos CSS predefinidos
- Comportamiento JS opcional
- Accesibilidad incorporada (ARIA)

### Utilidades
- Espaciado (`m-*`, `p-*`)
- Tipografía (`text-*`, `fw-*`)
- Colores (`bg-*`, `text-*`)
- Display y flex (`d-*`, `flex-*`)
- Posicionamiento (`position-*`, `top-*`, etc.)

Pensadas para evitar escribir CSS personalizado innecesario.

## Enfoque responsive
- *Mobile first*: los estilos base están pensados para pantallas pequeñas.
- Escala progresivamente a pantallas mayores.
- Reduce la necesidad de *media queries* manuales.

## Personalización
- Variables Sass para:
	- Colores
	- Tipografías
	- Espaciados
	- Breakpoints
- Posibilidad de compilar una versión personalizada.
- Alternativa: sobrescribir clases con CSS propio.

## Ventajas
- Rapidez de desarrollo.
- Consistencia visual.
- Gran comunidad y documentación.
- Compatibilidad entre navegadores.

## Desventajas
- Estilos reconocibles si no se personaliza.
- HTML con muchas clases.
- Dependencia del framework.

## Uso común
- Prototipado rápido.
- Dashboards.
- Aplicaciones internas.
- Proyectos donde prima la velocidad sobre el diseño único.

## Integración
- CDN
- Instalación vía npm
- Integración con frameworks como React, Vue o Angular mediante wrappers o librerías específicas.

## Versiones y evolución
- Bootstrap 3
	- Dependiente de jQuery.
	- Sistema de grillas basado en floats.
- Bootstrap 4
	- Introduce flexbox.
	- Mejora en utilidades y componentes.
- Bootstrap 5
	- Elimina jQuery.
	- Mejora accesibilidad.
	- Añade nuevos breakpoints y utilidades.
	- Soporte moderno para navegadores actuales.

## Sistema de diseño

### Sistema de grillas
- Basado en **flexbox**.
- 12 columnas configurables.
- Breakpoints responsivos:
	- `sm`, `md`, `lg`, `xl`, `xxl`
- Layouts:
	- Columnas anidadas.
	- Reordenamiento de columnas.
	- Offsets y auto-layout.

### Tipografía
- Escala tipográfica predefinida.
- Clases para encabezados y texto:
	- `.fs-*`
	- `.lh-*`
- Soporte para tipografía responsive.

### Colores y temas
- Paleta de colores semánticos:
	- `primary`, `secondary`, `success`, `danger`, `warning`, `info`
- Modo oscuro (Bootstrap 5.3+).
- Sistema de *theming* mediante variables CSS.

## Componentes interactivos (JS)

### Plugins incluidos
- Modal
- Tooltip
- Popover
- Collapse
- Dropdown
- Offcanvas
- Scrollspy
- Toast

Características:
- Inicialización automática por data attributes.
- Inicialización manual vía JS.
- Eventos personalizados para control avanzado.

## Accesibilidad (a11y)
- Uso de roles ARIA por defecto.
- Navegación por teclado en componentes interactivos.
- Contraste adecuado en temas base.
- Estados `focus`, `active` y `disabled` bien definidos.
- Responsabilidad del desarrollador:
	- Usar HTML semántico.
	- No romper la jerarquía de encabezados.

## Personalización avanzada

### Sass
- Variables globales.
- Mixins reutilizables.
- Mapas de configuración.
- Importación selectiva de componentes.

### CSS Variables
- Modificación de temas en tiempo real.
- Soporte para dark/light mode dinámico.
- Menor necesidad de recompilación.

## Bootstrap Icons
- Librería oficial de íconos SVG.
- Uso inline o como fuente.
- Integración directa con componentes.
- Alternativa a Font Awesome.

## Rendimiento y buenas prácticas
- Importar solo lo necesario.
- Evitar sobreuso de utilidades.
- No sobrescribir estilos sin criterio.
- Usar componentes cuando aporten valor real.
- Minimizar dependencias JS no usadas.

## Integración con frameworks modernos
- React: React-Bootstrap, Next.js compatible.
- Vue: BootstrapVue (comunidad).
- Angular: ng-bootstrap.
- Uso común como sistema de estilos base.

## Casos de uso ideales
- MVPs.
- Paneles administrativos.
- Herramientas internas.
- Proyectos con equipos grandes.
- Aplicaciones donde prima la consistencia.

## Limitaciones
- Curva de aprendizaje para personalización profunda.
- Estilo genérico sin theming.
- HTML más verboso.
- No es un sistema de diseño completo por sí solo.

## Alternativas
- Tailwind CSS
- Bulma
- Material UI
- Chakra UI
- Foundation

# Bootstrap — Recursos y herramientas (2025-2026)

## Repositorios y colecciones de componentes
- **Bootstrap-5-Design-Resources (GitHub)**: colección de UI components, extensiones JS, plugins y plantillas para Bootstrap 5+.
	- [Bootstrap-5-Design-Resources](https://github.com/jqueryscript/Bootstrap-5-Design-Resources)
- **UI Deck — Bootstrap UI Kits (2025)**: kits UI gratuitos con cientos de componentes y secciones modernas.
	- [UI Deck Bootstrap UI Kits](https://uideck.com/blog/bootstrap-ui-kits/)
- **Gentelella (GitHub)**: plantilla de dashboard admin Bootstrap 5 con widgets, layouts y gráficos.
	- [Gentelella](https://github.com/ColorlibHQ/gentelella)

## Plugins y extensiones útiles
- **Plugins UI adicionales (jQuery Script)**: recopilación de extensiones como toasts, tablas dinámicas, dark mode toggles y selects avanzados.
	- [Bootstrap 5 Plugins](https://www.jqueryscript.net/bootstrap-5/)
- **Bootstrap Expo Resources**: catálogo comunitario de add-ons y extensiones para Bootstrap.
	- [Bootstrap Expo Resources](https://expo.getbootstrap.com/resources/)
- **Extensiones recomendadas (2025)**: selección curada de componentes y extensiones Bootstrap 5.
	- [Best Bootstrap 5 Extensions](https://www.jqueryscript.net/blog/best-bootstrap-5-component-extension.html)

## Generadores y herramientas de ayuda
- **Mobirise**: generador visual de sitios Bootstrap con soporte de IA.
	- [Mobirise Bootstrap Templates](https://mobirise.com/bootstrap-template/es/)
- **Bootstrapr.io**: herramienta online para generar layouts y componentes Bootstrap personalizados.
	- [Bootstrapr.io](https://bootstrapr.io)

## Temas y plantillas modernas
- **Bootswatch**: temas gratuitos para Bootstrap basados en variables CSS.
	- [Bootswatch](https://bootswatch.com)
- **Silicon – Business / Tech UI Kit**: plantilla profesional Bootstrap para productos SaaS y corporativos.
	- [Silicon UI Kit](https://themes.getbootstrap.com/product/silicon-business-technology-template-ui-kit/)
- **Nota**: el marketplace oficial de Bootstrap fue descontinuado; se recomienda usar kits de terceros como UI Deck, Webpixels o Tabler.

## Recursos de aprendizaje actualizado
- **Documentación en español (no oficial)**: guía práctica de Bootstrap 5 con ejemplos.
	- [Bootstrap 5 Docs ES](https://bootstrap21.org/es/docs/5.0/getting-started/introduction/)
- **Relación con [CSS](/frontend/css/)**: uso combinado de utilidades modernas, variables y custom properties.

## Integración y ecosistema
- **Bootstrap Icons**: librería oficial de íconos SVG.
	- [Bootstrap Icons](https://icons.getbootstrap.com)
- **Frameworks relacionados**:
	- **CoreUI**: UI kit extendido compatible con Bootstrap.
		- [CoreUI](https://coreui.io)
	- **Alternativas compatibles**:
		- Halfmoon: [https://www.gethalfmoon.com](https://www.gethalfmoon.com)
		- Tabler: [https://tabler.io](https://tabler.io)
		- Webpixels: [https://webpixels.io](https://webpixels.io)

## Plantillas y diseño visual
- Repositorios y marketplaces:
	- [BootstrapMade](https://bootstrapmade.com)
	- [W3Layouts](https://w3layouts.com)
	- [One Page Love](https://onepagelove.com)
	- [Theme Wagon](https://themewagon.com)

## Herramientas de validación y calidad
- **WebChecker**: herramienta de validación HTML/CSS orientada a frameworks como Bootstrap.
	- [WebChecker (arXiv)](https://arxiv.org/abs/2502.07479)

## Proyectos complementarios (UI y assets)
- **Figma UI Kits para Bootstrap**: kits de diseño para prototipado antes del desarrollo.
	- [Bootstrap Figma Kits](https://www.jqueryscript.net/bootstrap-5/)
- **Dashboards y UI Kits avanzados**: plantillas listas para producción y prototipado rápido.
	- [UI Deck Resources](https://uideck.com)

## Consejos de uso en 2026
- Priorizar **Bootstrap 5+** y componentes sin dependencia de jQuery.
- Usar kits UI para acelerar desarrollo manteniendo consistencia visual.
- Integrar validación, accesibilidad y control de calidad desde el inicio del proyecto.

# curso-CSS-bootstrap-basico
## INTRO

HTML CSS templates for typography, froms,buttons,tables,navigation, modals and image carrousels. Also includes optional JS Plugins. Streamlines the development process, use built-in components Responsiveness, styling and cross-browser functions already tested

## EMBEDDING

{% raw %}
```css
<link rel="stylesheet" href="<https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css>">
<script src="<https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js>"></script>
<script src="<https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js>"></script>
```
{% endraw %}

## BASIC PAGE (mobile-first)

Container types: Fixed width container / Fluid Container

{% raw %}
```css
<!DOCTYPE html>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

<div class="container">
	<h2>Text</h2>
	<p>text long</p>
</div>

.container {
	background-color: blue;
	padding: 0 90px;
}
```
{% endraw %}

Fluid:

{% raw %}
```css
<div class="container-fluid">
	<h2>Text</h2>
	<p>text long</p>
</div>

.container-fluid {
	background-color: blue;
	padding: 0 90px;
}
```
{% endraw %}

## BOOTSTRAP GRID SYSTEM

(max 12 colums) sums of grid column numbers must= 12 Colum Size: xs(extra small) sm (small) md(medium) lg(Larger)

{% raw %}
```css
.bg {
	background-color: cyan;
}
.bg2 {
	background-color: yellow;
}

<div class="container-fluid">
	<div class="row" >
	<div class="col-lg-6 bg1">text</div>
	<div class="col-lg-6 bg2">text</div>
	</div>
</div>
```
{% endraw %}

## BOOTSTRAP THREE COLUMN LAYOUTS

tablet in landscape mode without stacking. only if the tables screen resolution is 992px

{% raw %}
```css
<div class="container-fluid">
	<div class="row" >
	<div class="col-lg-4 bg1">text</div>
	<div class="col-lg-4 bg2">text</div>
	<div class="col-lg-4 bg1">text</div>
	</div>
</div>

<div class="container-fluid">
	<div class="row" >
	<div class="col-lg-3 bg1">text</div>
	<div class="col-lg-7 bg2">text</div>
	<div class="col-lg-2 bg1">text</div>
	</div>
</div>
```
{% endraw %}

## BOOTSTRAP TYPOGRAPHY

{% raw %}
```css
<div class="container">
<!--Headings-->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<hr />

<!--Secondary Text-->		
<h1>Heading 1<small>secondary text</small></h1>
<h2>Heading 2<small>secondary text</small></h2>
<h3>Heading 3<small>secondary text</small></h3>
<h4>Heading 4<small>secondary text</small></h4>
<h5>Heading 5<small>secondary text</small></h5>
<h6>Heading 6<small>secondary text</small></h6>
<hr />

<!--Highlight-->
<p>With Bootstrap we can <mark>highlight</mark> text.</p>
<!--Dotted Underline-->
<p>We can also <abbr title="Explanation">Underline</abbr> text with a dotted line.</p>
<hr />

<!--Blockquotes-->
<h1>Blockquotes</h1>
<blockquote>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
<footer>Lorem Ipsum Source</footer>
</blockquote>
<hr />

<!--Blockquotes Reverse-->
<h1>Blockquotes Reverse</h1>
<blockquote class="blockquote-reverse">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
<footer>Lorem Ipsum Source</footer>
</blockquote>
<hr />

<!--Code Snippets-->
<h1>Code Snippets</h1>
<p>HTML elements: <code>div</code>, <code>section</code>, and <code>span</code></p>
<h1>Keyboard Inputs</h1>
<p>Use <kbd>ctrl + v</kbd> to paste copied text.</p>
<hr />

<!--Pre Element-->
<h1>Pre Element</h1>
<pre>
Text in a pre element
displays spaces       and line
breaks that are normally     only
visible   in html    code.
</pre>
<hr />

<!--Contextual Classes-->
<h1>Contextual Classes</h1>
<p class="text-muted">Muted Text.</p>
	<p class="text-primary">Important Text.</p>
	<p class="text-success">Success Text.</p>
	<p class="text-info">Informational Text.</p>
	<p class="text-warning">Warning Text.</p>
	<p class="text-danger">Danger Text.</p>
<hr />
<!--Contextual Background Classes-->
<h1>Contextual Background Classes</h1>
<p class="bg-primary">Important Text.</p>
<p class="bg-success">Success Text.</p>
<p class="bg-info">Informational Text.</p>
<p class="bg-warning">Warning Text.</p>
<p class="bg-danger">Danger Text.</p>
</div>
```
{% endraw %}

## BOOTSTRAP TABLES

`table-hover table-condensed table-striped table-bordered`

{% raw %}
```css
<div class="container">
   <table class="table table-hover">
   <thead>
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Grade</th>
      </tr>
    </thead>
<tbody>
      <tr  class="success">
        <td>John</td>
        <td>smith</td>
        <td>80</td>
      </tr>
      <tr  class="danger">
        <td>Ted</td>
        <td>Crow</td>
        <td>90</td>
      </tr>
      <tr  class="info">
        <td>Molly</td>
        <td>Doe</td>
        <td>93</td>
      </tr>
    </tbody>
</table>
</div>
```
{% endraw %}

## BOOTSTRAP STYLE IMAGES

`img-circle img-thumbnail img-responsive`

{% raw %}
```css
<div class="container">            
  <img class="img-rounded" src="beach.jpg" width="500" height="300">
```
{% endraw %}

## BOOTSTRAP JUMBOTROM

jumbotron Outside the div container full viewport

{% raw %}
```css
<div class="container">
  <div class="jumbotron">
   <h1>Heading</h1>   
	<p>Sub-Title</p>
</div>
  <p>Page content can start here...</p>
</div>
```
{% endraw %}

{% raw %}
```css
<div class="container">
  <div class="page-header">
   <h1>Heading</h1>   
</div>
  <p>Page content can start here...</p>
</div>
```
{% endraw %}

## BOOTSTRAP WELLS

{% raw %}
```css
<div class="container">
<br>
  <div class="well well-sm">Small Well</div>
  <div class="well">Normal Well</div>
  <div class="well well-lg">Large Well</div>
</div>
```
{% endraw %}

## BOOTSTRAP ALERTS

{% raw %}
```css
<div class="container">
<br>  
<div class="alert alert-success fade in">
<a href="#" class="close" data-dismiss="alert">&times;</a>
 <strong>Success!</strong>
 </div>
  <div class="alert alert-info">
  <strong>Info!</strong>
  </div>
  <div class="alert alert-warning">
   <strong>Warning!</strong>
  </div>
  <div class="alert alert-danger">
   <strong>Danger!</strong>
 </div>
</div>
```
{% endraw %}

## BOOTSTRAP BUTTONS

{% raw %}
```css
<div class="container">
<br>
 <!-- Button Styles -->
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Home</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-link">Link</button>  
<hr />
<a href="#" class="btn btn-info" role="button">Link Button</a>
<input type="button" class="btn btn-primary" value="Input Button">
<input type="submit" class="btn btn-warning" value="Company">

<!-- Button Sizes -->
<hr />
<button type="button" class="btn btn-primary btn-lg">Large</button>
<button type="button" class="btn btn-primary btn-md">Medium</button>    
<button type="button" class="btn btn-primary btn-sm">Small</button>
<button type="button" class="btn btn-primary btn-xs">XSmall</button>

<!-- Block Level buttons -->
<hr />
<button type="button" class="btn btn-primary btn-block">Button 1</button>
<button type="button" class="btn btn-default btn-block">Button 2</button>

<button type="button" class="btn btn-primary btn-lg btn-block">Button 1</button>
<button type="button" class="btn btn-default btn-lg btn-block">Button 2</button>

<button type="button" class="btn btn-primary btn-sm btn-block">Button 1</button>
<button type="button" class="btn btn-default btn-sm btn-block">Button 2</button>

<!-- Active/Disabled Buttons -->
<hr />
<button type="button" class="btn btn-primary active">Active Primary</button>
<button type="button" class="btn btn-primary disabled">Disabled Primary</button>
 </div>
```
{% endraw %}

## BUTTON GROUPS btn-group

{% raw %}
```css
<div class="container">
<h4>Large Buttons:</h4>
 <div class="btn-group-vertical btn-group-lg">
    <button type="button" class="btn btn-primary">Home</button>
    <button type="button" class="btn btn-primary">Company</button>
    <button type="button" class="btn btn-primary">Contact</button>
  </div>
   <h4>Extra Small Buttons:</h4>
  <div class="btn-group-vertical btn-group-xs">
    <button type="button" class="btn btn-primary">Home</button>
    <button type="button" class="btn btn-primary">Company</button>
    <button type="button" class="btn btn-primary">Contact</button>
  </div>
</div>
```
{% endraw %}

## JUSTIFIED BUTTONS GROUPS

btn-group-justified

{% raw %}
```css
<div class="container">
 <!--Justified Button Groups Using Link Elements -->

 <h4>Justified Button Groups</h4>
  <div class="btn-group btn-group-justified">
    <a href="#" class="btn btn-primary">Home</a>
    <a href="#" class="btn btn-primary">Company</a>
    <a href="#" class="btn btn-primary">Contact</a>
  </div>
   <hr />

   <!--Justified Button Groups Using Button Elements -->

 <div class="btn-group btn-group-justified">
<div class="btn-group">
<button type="button" class="btn btn-primary">Home</button>
</div>
<div class="btn-group">
<button type="button" class="btn btn-primary">Company</button>
</div>
<div class="btn-group">
<button type="button" class="btn btn-primary">Contact</button>
</div>
</div>
  </div>
```
{% endraw %}

## BOOTSTRAP GLYPHICONS

{% raw %}
```css
<div class="container">
<h2>Glyphicons</h2>
<p>Envelope: <span class="glyphicon glyphicon-envelope"></span></p>    
<p>Search: <span class="glyphicon glyphicon-search"></span></p>
<p>Heart: <span class="glyphicon glyphicon-heart"></span></p>
<p>Star: <span class="glyphicon glyphicon-star-empty"></span></p>
<button type="button" class="btn btn-default">
<span class="glyphicon glyphicon-search"></span> Search
</button>
<button type="button" class="btn btn-warning">
<span class="glyphicon glyphicon-search"></span> Search
</button>
<p>Print: <span class="glyphicon glyphicon-print"></span></p>      
<a href="#" class="btn btn-success btn-lg">
<span class="glyphicon glyphicon-print"></span> Print 
</a>
</div>
```
{% endraw %}

## BADGETS AND LABELS

{% raw %}
```css
<div class="container">
<h4>Badges</h4>
<a href="#">Members <span class="badge">8</span></a><br>
<a href="#">Messages <span class="badge">5</span></a><br>
<a href="#">New Users <span class="badge">7</span></a>
<hr />
<button type="button" class="btn btn-primary">Primary <span class="badge">10</span></button>
  <hr />
<h1>Example <span class="label label-primary">New</span></h1>
<h2>Example <span class="label label-warning">New</span></h2>
<h3>Example <span class="label label-danger">New</span></h3>
<h4>Example <span class="label label-info">New</span></h4>
<hr />
	<span class="label label-default">Default</span>
	<span class="label label-primary">Primary</span>
	<span class="label label-success">Success</span>
	<span class="label label-info">Info</span>
	<span class="label label-warning">Warning</span>
	<span class="label label-danger">Danger</span>
</div>
```
{% endraw %}

## PROGRESS BAR

progress-bar-striped active

{% raw %}
```css
<div class="container">
<h4>Progress Bar</h4>
 <div class="progress">
 <div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" style="width:80%">
80%
</div>
 </div>
```
{% endraw %}

## PAGINATION

{% raw %}
```css
<div class="container">
 <h4>Pagination</h4>
  <p> Page Content... </p>
<ul class="pagination pagination-lg">
    <li><a href="#">1</a></li>
	<li class="active"><a href="#">2</a></li>
	<li class="disabled"><a href="#">3</a></li>
	<li><a href="#">4</a></li>
	<li><a href="#">5</a></li>
 </ul>
 </div>
```
{% endraw %}

## BREADCRUMB

{% raw %}
```css
<div class="container">
 <h4>Pagination</h4>
  <p> Page Content... </p>
<ul class="breadcrumb">
    <li><a href="#">HOME</a></li>
	<li class="active"><a href="#">Company</a></li>
	<li class="disabled"><a href="#">Contact</a></li>
	<li><a href="#">4</a></li>
	<li><a href="#">5</a></li>
 </ul>
 </div>
```
{% endraw %}

## BOOSTRAP PAGER PAGINATION

{% raw %}
```css
<div class="container">
  <h4>Pager</h4>
 <ul class="pager">
    <li class="previus"><a href="#">Previous</a></li>
    <li class="next"><a href="#">Next</a></li>
  </ul>
</div>
```
{% endraw %}

## BOOSTRAP LIST GROUP

{% raw %}
```css
<div class="container">
 <h4>Basic List Group</h4>
 <ul class="list-group">
    <li class="list-group-item"><span class="badge">12</span>Item 1</li>
	<li class="list-group-item"><span class="badge">12</span>Item 2</li>
	<li class="list-group-item">Item 1</li>
  </ul>
  </div>
```
{% endraw %}

{% raw %}
```css
<div class="container">
 <h4>Basic List Group</h4>
 <ul class="list-group">
	<a href="#" class="list-group-item active">Item 1 </a>
	<a href="#" class="list-group-item disable">Item 2 </a>
	<a href="#" class="list-group-item list-group-item-danger">Item 3 </a>
  </ul>
  </div>
```
{% endraw %}

## CUSTOM CONTENT

{% raw %}
```css
<div class="container">
 <h4>Basic List Group</h4>
 <ul class="list-group">
	<a href="#" class="list-group-item-success">Item 1 
	<h4 class="list-group-item-heading"> item1 heading </h4>
	<p class="list-group-item-text">List item text</p>
</a>
	<a href="#" class="list-group-item  list-group-item-warning">
	<h4 class="list-group-item-heading"> item2 heading </h4>
	<p class="list-group-item-text">List item text</p>

</a>
	<a href="#" class="list-group-item list-group-item-danger">Item 3
	<h4 class="list-group-item-heading"> item3 heading </h4>
	<p class="list-group-item-text">List item text</p>
 </a>
  </ul>
  </div>
```
{% endraw %}

## BOOSTRAP PANELS

{% raw %}
```css
<div class="container">
  <h4>Panel</h4>

  <!-- Basic Panel -->
<div class="panel panel-default">
	<div class="panel-heading">Panel heading</div>
    <div class="panel-body">Sample Text Content.</div>
	<div class="panel-footer">Panel footer</div>
  </div>
  <!-- Panel Group -->
  <div class="panel-group">
    <div class="panel panel-primary">
      <div class="panel-heading">Panel Header</div>
      <div class="panel-body">Panel Content</div>
    </div>
    <div class="panel panel-warning">
      <div class="panel-heading">Panel Header</div>
      <div class="panel-body">Panel Content</div>
    </div>
    <div class="panel panel-danger">
      <div class="panel-heading">Panel Header</div>
      <div class="panel-body">Panel Content</div>
    </div>
  </div>
  </div>
```
{% endraw %}

## DROPDOWN MENU

dropdown-menu-right dropup

{% raw %}
```css
<div class="container">
 <h4>Dropdown Menu</h4>
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Menu
<span class="caret"></span>
</button>
<ul class="dropdown-menu ">
<li class="dropdown-header">Header 1</li>
	<li><a href="#">Option 1</a></li>
	<li class="disabled"><a href="#">Option 2</a></li>
	<li><a href="#">Option 3</a></li>
	<li><a href="#">Option 4</a></li>
	<li class="divider"></li>
<li class="dropdown-header">Header 2</li>
	<li><a href="#">Option 5</a></li>
	<li><a href="#">Option 6</a></li>
</ul>
 </div>
</div>
```
{% endraw %}

## BOOTSTRAP COLLAPSIBLES

{% raw %}
```css
<div class="container">
  <br>
  <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#ex1">Collapse</button>  
  <div id="ex1" class="collapse in">
    long texxxxxxxxxxxxxxxxxxt.
  </div>
  <hr />
  <a href="#ex2" class="btn btn-info" data-toggle="collapse">Simple collapsible</a>
  <div id="ex2" class="collapse">
   Long texxxxxxxxxxxxxxxxxxxxxxxxxxxxxt.
  </div>
 </div>
```
{% endraw %}

## COLLAPSE PANEL

{% raw %}
```css
<div class="container">
  <br>
  <div class="panel-group">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" href="#expand">Collapsible panel</a>
        </h4>
      </div>
      <div id="expand" class="panel-collapse collapse">
        <div class="panel-body">Panel Body</div>
        <div class="panel-footer">Panel Footer</div>
      </div>
    </div>
  </div>
  </div>
```
{% endraw %}

## COLLAPSE LIST GROUP

{% raw %}
```css
<div class="container">
  <br>
  <div class="panel-group">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" href="#expand">Collapse</a>
        </h4>
      </div>
      <div id="expand" class="panel-collapse collapse">
        <ul class="list-group">
          <li class="list-group-item">Item 1</li>
          <li class="list-group-item">Item 2</li>
          <li class="list-group-item">Item 3</li>
        </ul>
        <div class="panel-footer">Footer</div>
      </div>
    </div>
  </div>
</div>
```
{% endraw %}

## BOOSTRAP ACCORDIAN

{% raw %}
```css
<div class="container">
 <div class="panel-group" id="accordion">
   <div class="panel panel-default">
     <div class="panel-heading">
       <h4 class="panel-title">
    <a data-toggle="collapse" data-parent="#accordion" href="#ex1">Heading 1</a>
    </h4>
   </div>
   <div id="ex1" class="panel-collapse collapse in">
     <div class="panel-body">Sample Content.</div>
    </div>
    </div>
<div class="panel panel-default">
   <div class="panel-heading">
    <h4 class="panel-title">
     <a data-toggle="collapse" data-parent="#accordion" href="#ex2">Heading 2</a>
    </h4>
    </div>
   <div id="ex2" class="panel-collapse collapse in">
    <div class="panel-body">Sample Content.</div>
    </div>
    </div>
<div class="panel panel-default">
     <div class="panel-heading">
       <h4 class="panel-title">
  <a data-toggle="collapse" data-parent="#accordion" href="#ex3">Heading 3</a>
     </h4>
     </div>
     <div id="ex3" class="panel-collapse collapse in">
      <div class="panel-body">Sample Content.</div>
      </div>
    </div>
```
{% endraw %}

## BOOSTRAP TAB MENUS

{% raw %}
```css
<div class="container">
  <h4>Inline List Menu</h4>
  <ul class="nav nav-tabs">
    <li class="active"><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
    <li><a href="#">Link 4</a></li>
  </ul>
</div>

<hr />
<!-- Tab Menu with Drop Down -->
  <ul class="nav nav-tabs">
    <li class="active"><a href="#">Link 1</a></li>  
<li class="dropdown">
<a class="dropdown-toggle" data-toggle="dropdown" href="#">Link 2 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="#">Sub Link 1</a></li>
        <li><a href="#">Sub Link 2</a></li>
        <li><a href="#">Sub Link 3</a></li>                        
      </ul>
    </li>
    <li><a href="#">Link 3</a></li>
    <li><a href="#">Link 4</a></li>
  </ul>
```
{% endraw %}

## BOOTSTRAP PILL MENUS

{% raw %}
```css
<div class="container">
  <h4>Pill Menu</h4>
  <ul class="nav nav-pills nav-stacked">
    <li class="active"><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
    <li><a href="#">Link 4</a></li>
  </ul>
<hr />
 <!-- Pill Menu with Dropdown -->

<ul class="nav nav-pills nav-stacked">
<li class="active"><a href="#">Link 1</a></li>
	<li class="dropdown">
	<a class="dropdown-toggle" data-toggle="dropdown" href="#">Link 2
	<span class="caret"></span></a>
	<ul class="dropdown-menu">
	<li><a href="#">Sub Link 1</a></li>
	<li><a href="#">Sub Link 2</a></li>
 	<li><a href="#">Sub Link 3</a></li> 
	</ul>
</li>
<li><a href="#">Link 3</a></li>
<li><a href="#">Link 4</a></li>
</ul>
 </div>
```
{% endraw %}

## DINAMIC TAB AND PILLS MENUS

(nav-pills, data-toggle="pill")

{% raw %}
```css
<div class="container">
 <h4>Dynamic Tabs and Pills</h4>
  <ul class="nav nav-tabs"> //(nav-pills)
    <li class="active"><a data-toggle="tab" href="#link1">Link 1</a></li>  //data-toggle="pill"
    <li><a data-toggle="tab" href="#link2">Link 2</a></li>
    <li><a data-toggle="tab" href="#link3">Link 3</a></li>
    <li><a data-toggle="tab" href="#link4">Link 4</a></li>
  </ul>
  <div class="tab-content">
    <div id="link1" class="tab-pane fade in active">
      <h3>Link 1</h3>
      Content.
    </div>
    <div id="link2" class="tab-pane fade">
      <h3>Link 2</h3>
      Content.
    </div>
    <div id="link3" class="tab-pane fade">
      <h3>Link 3</h3>
      Content.
    </div>
    <div id="link4" class="tab-pane fade">
      <h3>Link 4</h3>
      Content.
    </div>
  </div>
</div>
```
{% endraw %}

## BOOSTRAP NAVIGATION BAR

.navbar-fixed-top .navbar-fixed-bottom .container-fluid

{% raw %}
```css
<nav class="navbar navbar-inverse">
 <div class="container">
  <div class="navbar-header">
<a class="navbar-brand" href="#">MyWebsite</a>
   </div>
	<ul class="nav navbar-nav">	
<li class="dropdown">
	<a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu
<span class="caret"></span></a>
	<ul class="dropdown-menu">
	<li><a href="#">Sub Link 1</a></li>
	<li><a href="#">Sub Link 2</a></li>
 	<li><a href="#">Sub Link 3</a></li> 
	</ul>
</li>
	  <li class="active"><a href="#">Link 1</a></li>		  
	  <li><a href="#">Link 2</a></li>
	  <li><a href="#">Link 3</a></li>
	  <li><a href="#">Link 4</a></li>
	</ul>	
<ul class="nav navbar-nav navbar-right">
 <li><a href="#"><span class="glyphicon glyphicon-star-empty"></span> RLink 1</a></li>
 <li><a href="#"><span class="glyphicon glyphicon-search"></span> RLink 2</a></li>
</ul>
</div>
</nav>
 <div class="container">
  <h3>Heading</h3>
  <p>Content.</p>
</div>
```
{% endraw %}

## BOOSTRAP COLLAPSIBLE NAVIGATION BAR

{% raw %}
```css
<nav class="navbar navbar-inverse">
 <div class="container">
  <div class="navbar-header">
<!-- button block --!>
<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav1">
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<!-- // --!>
<a class="navbar-brand" href="#">MyWebsite</a>
   </div>
<!-- Collapse Div --!>
<div class="collapse navbar-collapse" id="nav1">
<!-- // --!>
	<ul class="nav navbar-nav">	
<li class="dropdown">
	<a class="dropdown-toggle" data-toggle="dropdown" href="#">Menu
<span class="caret"></span></a>
	<ul class="dropdown-menu">
	<li><a href="#">Sub Link 1</a></li>
	<li><a href="#">Sub Link 2</a></li>
 	<li><a href="#">Sub Link 3</a></li> 
	</ul>
</li>
	  <li class="active"><a href="#">Link 1</a></li>		  
	  <li><a href="#">Link 2</a></li>
	  <li><a href="#">Link 3</a></li>
	  <li><a href="#">Link 4</a></li>
	</ul>	
<ul class="nav navbar-nav navbar-right">
 <li><a href="#"><span class="glyphicon glyphicon-star-empty"></span> RLink 1</a></li>
 <li><a href="#"><span class="glyphicon glyphicon-search"></span> RLink 2</a></li>
</ul>
<!-- Close Div --!>
</div>
<!-- // --!>
</div>
</nav>
 <div class="container">
  <h3>Heading</h3>
  <p>Content.</p>
</div>
```
{% endraw %}

## BOOSTRAP FORMS

Vertical (Default), Horizontal, Inline

{% raw %}
```css
<div class="container">
  <h4>Form:</h4>
  <form class="form-inline" role="form">
  <div class="form-group">
<label for="email">Email:</label>
<input type="email" class="form-control" id="email" placeholder="Enter email">  
</div>
<div class="form-group">
<label for="pwd">Password:</label>
<input type="password" class="form-control" id="pwd" placeholder="Enter password">
</div>
<div class="checkbox">        	
<label><input type="checkbox"> Remember me</label>
</div>
<button type="submit" class="btn btn-default">Submit</button>
</form>
 </div>
```
{% endraw %}

## BOOSTRAP INPUTS

{% raw %}
```css
<div class="container">
 <h4>Form inputs</h4>
<form role="form">
<!-- Input Fields -->
    <div class="form-group">
      <label for="usr">Name:</label>
      <input type="text" class="form-control" id="usr">
    </div>

<!-- Text Area -->
<div class="form-group">
<label for="comment">Comment:</label>
<textarea class="form-control" rows="5" id="comment"></textarea>
</div>

<!-- Check Boxes -->
<div class="checkbox">
<label><input type="checkbox" value="">Option 1</label>
</div>
<div class="checkbox">
 <label><input type="checkbox" value="">Option 2</label>
</div>
<!-- Radio Buttons --> // una opcion solo
<div class="radio">
<label><input type="radio" name="optradio">Option 1</label>
</div>
<div class="radio">
<label><input type="radio" name="optradio">Option 2</label>
</div>
<!-- Select Menu -->
<div class="form-group">
	<label for="sel">Select list:</label>
	 <select class="form-control" id="sel">
	<option>1</option>
	<option>2</option>
	<option>3</option>
	<option>4</option>
	 </select>
</div>

<!-- Multiple Select Menu -->
	<div class="form-group">
	<label for="msel">Mutiple select list:</label>
      <select multiple class="form-control" id="msel">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
	</div>
  </form>
  </div>
```
{% endraw %}

## BOOSTRAP FORMS CONTROL STATES

{% raw %}
```css
<div class="container">
  <h4>Horizontal form: control states</h4>
   <form class="form-horizontal" role="form">
   <div class="form-group">
      <label class="col-sm-2 control-label" for="focused">Focused</label>
      <div class="col-sm-10">
        <input class="form-control" id="focused" type="text" value="Click to Focus">
      </div>
    </div>
<div class="form-group">
      <label class="col-sm-2 control-label" for="disabled">Disabled</label>
      <div class="col-sm-10">
        <input class="form-control" id="disabled" type="text" placeholder="Disabled" disabled>
      </div>
    </div>
 <div class="form-group has-success has-feedback">
      <label class="col-sm-2 control-label" for="success">Success</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="success">
        <span class="glyphicon glyphicon-ok form-control-feedback"></span>
      </div>
    </div>
<div class="form-group has-warning has-feedback">
      <label class="col-sm-2 control-label" for="warning">Warning</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="warning">
     <span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>
      </div>
    </div>
<div class="form-group has-error has-feedback">
      <label class="col-sm-2 control-label" for="error">Error</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="error">
        <span class="glyphicon glyphicon-remove form-control-feedback"></span>
      </div>
    </div>
</form>
 </div>
```
{% endraw %}

## BOOSTRAP INPUT SIZING

{% raw %}
```css
<div class="container">
<h4>Input Sizing</h4>
<!-- For Vertical Form Layout -->

  <form role="form">
    <div class="form-group">
      <label for="inp1">Input</label>
      <input class="form-control input-sm" id="inp1" type="text">
    </div>
 <div class="form-group">
      <label for="sel1">Select</label>
      <select class="form-control input-sm" id="sel1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
 </form>
  <hr />
  <!-- For Horizontal Form Layout -->

  <form class="form-horizontal" role="form">
    <div class="form-group form-group-lg">
      <label class="col-sm-2 control-label" for="lg">Large</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" id="lg">
      </div>
    </div>
    <div class="form-group form-group-sm">
      <label class="col-sm-2 control-label" for="sm">Small</label>
      <div class="col-sm-10">
        <input class="form-control" type="text" id="sm">
      </div>
    </div>
  </form>
  <hr />
  <!-- Column Sizing -->

	<div class="col-xs-2">
	  <label for="in1">col-xs-2</label>
	  <input class="form-control" id="in1" type="text">
	</div>
	<div class="col-xs-3">
	  <label for="in2">col-xs-3</label>
	  <input class="form-control" id="in2" type="text">
	</div>
	<div class="col-xs-6">
	  <label for="in3">col-xs-4</label>
	  <input class="form-control" id="in3" type="text">
	</div>
  </div>
```
{% endraw %}

## BOOSTRAP CAROUSEL

{% raw %}
```css
.carousel-inner > .item > img {
      width: 80%;
      margin: auto;
  }
<div class="container">
  <br>
  <div id="carousel" class="carousel slide" data-ride="carousel">
<!-- Carousel Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1" ></li>
      <li data-target="#carousel" data-slide-to="2"></li>
      <li data-target="#carousel" data-slide-to="3"></li>
   </ol>
 <!-- Wrapper for Slides -->
    <div class="carousel-inner" role="listbox">
	<div class="item active">
        <img src="cars/car1.jpg" width="450" height="340">
        <div class="carousel-caption">
          <h3>Car 1</h3>
          <p>Description 1</p>
        </div>
      </div>
      <div class="item">
        <img src="cars/car2.jpg" width="450" height="340">
        <div class="carousel-caption">
          <h3>Car 2</h3>
          <p>Description 2</p>
        </div>
      </div>
      <div class="item">
        <img src="cars/car3.jpg" width="450" height="340">
        <div class="carousel-caption">
          <h3>Car 3</h3>
          <p>Description 3</p>
        </div>
      </div>
      <div class="item">
        <img src="cars/car4.jpg" width="450" height="340">
        <div class="carousel-caption">
          <h3>Car 4</h3>
          <p>Description 4</p>
        </div>
      </div>
    </div>

    <!-- Left and Right Control Links -->
    <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    </a>
    <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    </a>
  </div>
</div>
```
{% endraw %}

## BOOSTRAP MODAL

{% raw %}
```css
<div class="container">
  <br>
  <!-- Modal Button -->
  <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#Modal1">Launch Modal</button>

<!-- Modal -->
  <div class="modal fade" id="Modal1">
    <div class="modal-dialog">
<!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
       <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Header</h4>
        </div>
        <div class="modal-body">
          <p>Content</p>
        </div>
        <div class="modal-footer">
       <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
```
{% endraw %}

## BOOSTRAP TOOLTIP

{% raw %}
```jsx
<div class="container">
<br><br><br>
 <a href="#" data-toggle="tooltip" data-placement="top" title="Insert Tip">Tooltip</a>
</div>

<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
</script>
```
{% endraw %}

## BOOSTRAP POPOVER

(data-trigger="hover")

{% raw %}
```jsx
<div class="container">
<br><br><br><br>
<a href="#" data-trigger="focus" data-toggle="popover" title="Test Header" data-content="Sample Paragraph." data-placement="right">Popover</a>
 </div>

<script>
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});
</script>
```
{% endraw %}

## BOOSTRAP SCROLLSPY PLUGIN

{% raw %}
```jsx
body {
      position: relative; 
  }
  #section1 {padding-top:45px;height:500px; background-color: cyan;}
  #section2 {padding-top:45px;height:500px; background-color: yellow;}
  #section3 {padding-top:45px;height:500px; background-color: pink;}
  #section4 {padding-top:45px;height:500px; background-color: magenta;}

<body data-spy="scroll" data-target=".navbar">
<!-- Navbar -->
<nav class="navbar navbar-inverse navbar-fixed-top">
  <!-- Container -->
  <div class="container-fluid">
	<!-- Collapse Icon -->
	<div class="navbar-header">
  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav1">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
    </button>
      <a class="navbar-brand" href="#">MyWebsite</a>
    </div>	
	<!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="nav1">
        <ul class="nav navbar-nav">
          <li><a href="#section1">Link 1</a></li>
          <li><a href="#section2">Link 2</a></li>
          <li><a href="#section3">Link 3</a></li>
		  <li><a href="#section4">Link 4</a></li>			  
        </ul>
      </div>
  </div>
</nav>    

<!-- Content Sections -->
<div id="section1" class="container-fluid">
  <h1>Link 1</h1>
  <p>Content.</p>
</div>
<div id="section2" class="container-fluid">
  <h1>Link 2</h1>
  <p>Content.</p>
</div>
<div id="section3" class="container-fluid">
  <h1>Link 3</h1>
  <p>Content.</p>
</div>
<div id="section4" class="container-fluid">
  <h1>Link 4</h1>
  <p>Content.</p>
</div>
</body>
```
{% endraw %}

## BOOSTRAP PROJECT

Themes intro:

[Free Bootstrap Themes, Templates, Snippets, and Guides](https://startbootstrap.com/)

