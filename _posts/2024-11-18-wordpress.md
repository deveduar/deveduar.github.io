---
date: 2024-11-18 17:46
title: Wordpress
tags:
  - wordpress
  - PHP
  - ecomerce
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
cssclasses:
  - hide-embedded-header1
  - wide
categories:
  - Desarrollo web
public_note: "true"
category: Desarrollo web
---
# Wordpress
`$= dv.current().file.tags.join(" ")`

## Enlaces Base y Contexto
- PHP-web-wp-webapps-book
- [PHP](/backend/php/)

## Tareas y Objetivos Iniciales
- [ ] crear template para wp
- [ ] [ecomerce](/desarrollo%20web/ecomerce/) con wp con local
	- canvas-web-store.canvas
	- [zotero coleccion ecomerce](zotero://select/library/collections/X5WTJKSJ)

---

## WordPress con Local — Guías, Recursos y Conceptos
- wordpress con local guias:
	- https://developer.wordpress.org/
	- [How to install WordPress](https://developer.wordpress.org/advanced-administration/before-install/howto-install/)
	- [Installing Multiple WordPress Instances  Edit](https://developer.wordpress.org/advanced-administration/before-install/multiple-instances/)
	- [Creating Database for WordPress](https://developer.wordpress.org/advanced-administration/before-install/creating-database/)
	- [How can I integrate my WooCommerce store with Printify?](https://help.printify.com/hc/en-us/articles/4483637152401-How-can-I-integrate-my-WooCommerce-store-with-Printify-)
	- [Which Features are Free vs. Paid in the WordPress Jetpack Plugin?](https://www.lireo.com/which-features-are-free-vs-paid-in-the-wordpress-jetpack-plugin/)
	- [Dashboard docs](https://wordpress.org/documentation/category/dashboard/)
	- [What is Router Mode?](https://localwp.com/help-docs/advanced/router-mode/)
	- [ecomerce](/desarrollo%20web/ecomerce/)

### Conceptos Clave para Desarrollo en Local
- Arquitectura WP en local con LocalWP
	- Virtualización vs Router Mode
	- Control de logs, overrides, mailpit
	- Bases de datos separadas por instancia
- Flujo recomendado de trabajo
	- Crear blueprint → clonar plantillas → versionado con Git
	- Distinción entre base WP y tema Custom
- Configuraciones importantes
	- Rewrites
	- WP_DEBUG activo solo en local
	- Control de wp-config en entornos

---

## Proyectos y Modelos de Negocio Soportados
- own print on demand business
- foto stock business

### Marketing
- alura
- video marketing

### Afiliados
- links asociados
	- amazon
	- clickbank

---

## Integraciones
- API printify afiliados
- Integracion printify y etsy
- integracion printify y wordpress

---

## Tareas para una WooCommerce Store con Printify
- Responsive **Print On Demand store** design and setup
- **Integration** de Print On Demand apps (**Printify, Printful, Customcat, Spod…**)
- Premium **theme installation**
- Estructura de páginas:
	- Home Page
	- Collection Page
	- Product Page
- **Legal pages** (about us, contact us, returns, policy, terms, etc)
- Configuración de:
	- Auto Shipping rates
	- Taxes
- Uploading your **own designs**
- Gestión de **plugins esenciales**
- Shops con integración en **Facebook y Instagram**
- Adding **Live Chat**
- **Coupon & Discount** System

---

## Notas y Archivos Relacionados
- Info de wp local server visualevoke wp
- app warez canvas laravel
- info curso-wordpress-old


## curso-wp-crear-custom-templates
- [How to Create a Custom WordPress Theme - Full Course](https://www.youtube.com/watch?v=-h7gOJbIpmo)
- [github blog-site-template](https://github.com/wilsmex/blog-site-template)
- [Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/)
- php wp jerarquia.png

### Conceptos Clave
- **enqueue css styles files:** 
	- hooks
	- array de dependencias
	- prioridad de carga
	- uso de versiones para cache busting
	- ubicación correcta: `functions.php`
- Jerarquía de plantillas:
	- estructura de fallback
	- relación entre archivos (`index.php`, `single.php`, `page.php`, etc.)
	- uso de `template_include`
- Custom templates:
	- declaración de template con comentarios en cabecera
	- mapeo con páginas desde el dashboard
	- uso de `get_header()`, `get_footer()`, `get_sidebar()`
- Buenas prácticas:
	- mantener assets en `/assets/css`, `/assets/js`
	- separación lógica entre estilos del tema y estilos específicos de secciones
	- evitar cargar scripts innecesarios en páginas donde no se usan

---

## Snippets

### custom-templates — Enqueue de estilos
{% raw %}
```php
<?php  
    function devedublog_register_styles() {
        wp_enqueue_style(
            'devedublog-bootstrap',
            get_template_directory_uri() . "/style.css",
            array(),       // dependencias
            '1.0',         // versión
            'all'          // media
        );
    }

    add_action('wp_enqueue_scripts', 'devedublog_register_styles');
?>
```
{% endraw %}`


## curso-wp-crear-custom-templates — Extensión de Conceptos Pendientes

A continuación se añaden los **conceptos que aún no estaban cubiertos**, ampliando el tema sin repetir lo anterior.

### Arquitectura Interna de un Tema
- Archivos mínimos:
	- `style.css` con cabecera declarativa
	- `index.php` como fallback global
	- `functions.php` para registrar hooks y assets
- Archivos opcionales más comunes:
	- `header.php`, `footer.php`, `sidebar.php`
	- `front-page.php` vs `home.php`
	- `single-{posttype}.php`
	- `archive-{posttype}.php`
- Uso de `get_template_part()` para modularizar:
	- componentes reutilizables
	- bloques de contenido repetidos
	- naming: `template-parts/{nombre}/contenido.php`

### Diseño Modular y Reutilizable
- Creación de *component templates*:
	- tarjetas de posts
	- banners
	- sliders
	- bloques hero
- Patrones de carga condicional:
	- cargar CSS/JS solo en plantillas específicas
	- detectar páginas con `is_page_template()`
- Integración con Theme JSON:
	- presets de colores, tipografías y layout
	- control global de estilos desde `theme.json`
	- overrides por bloque

### Custom Templates Avanzados
- **Page Templates**:
	- plantillas para landing pages
	- plantillas sin header/footer
	- plantillas con estructura modular
- **Templates para Custom Post Types (CPT)**:
	- creación de CPTs con `register_post_type()`
	- asignación automática de plantillas por jerarquía
	- template para archivos: `archive-{cpt}.php`
- **Templates para Taxonomías**:
	- `taxonomy-{tax}.php`
	- `taxonomy-{tax}-{term}.php`
	- estructura para categorías, etiquetas y taxonomías personalizadas

### Integración con Gutenberg (Editor de Bloques)
- Templates basados en bloques:
	- archivos `.html` en `/templates`
	- composición de diseño sin PHP en algunos casos
- Partes del tema:
	- `/parts/header.html`, `/parts/footer.html`
- Bloques personalizados:
	- creación de bloques con scripts y estilos propios
	- registro con `register_block_type()`

### Optimización del Tema
- Control de cargas:
	- desregistrar scripts nativos que no se usan
	- cargar scripts en el footer para mejorar rendimiento
- Internacionalización (i18n):
	- uso de `__()` y `_e()`
	- cargar textdomain
- Seguridad:
	- sanitización de datos con `esc_html()`, `esc_attr()`, `esc_url()`
	- uso de `wp_nonce_*` en formularios personalizados

### Snippets Adicionales

#### Template Header para páginas personalizadas
{% raw %}
```php
<?php
/*
Template Name: Landing Page Clean
*/
get_header();
?>
```
{% endraw %}`

#### Carga condicional de scripts solo para una plantilla

{% raw %}
```php
<?php
function mytheme_conditional_assets() {
    if (is_page_template('templates/landing-clean.php')) {
        wp_enqueue_style('landing-clean', get_template_directory_uri() . '/assets/css/landing.css', array(), '1.0', 'all');
    }
}
add_action('wp_enqueue_scripts', 'mytheme_conditional_assets');
?>
```
{% endraw %}

#### Registro de Custom Post Type con plantilla propia

{% raw %}
```php
<?php
function mytheme_register_portfolio_cpt() {
    register_post_type('portfolio', array(
        'label' => 'Portfolio',
        'public' => true,
        'supports' => array('title','editor','thumbnail'),
        'has_archive' => true,
        'rewrite' => array('slug' => 'portfolio')
    ));
}
add_action('init', 'mytheme_register_portfolio_cpt');
?>
```
{% endraw %}

### Qué falta por cubrir (si deseas expandir más)

- Creación completa de un tema desde cero (estructura + build system)
- Integración con herramientas modernas (Vite, Webpack)
- Headless WordPress + WP REST API
- Patrones para eCommerce con WooCommerce + custom templates
- Creación de Shortcodes y Blocks dinámicos
- Estructura de diseño atómica aplicada a temas WP

## Fundamentos y Arquitectura de WordPress (Tema: Custom Themes)

### 1. Fundamentos del Sistema WordPress
- **CMS basado en PHP y MySQL**
	- WordPress opera bajo un ciclo de ejecución definido por PHP.
	- Todo contenido y configuración se guarda en MySQL/MariaDB.

- **Arquitectura Clásica (Tema + Plugins)**
	- El *tema* controla presentación.
	- Los *plugins* controlan funcionalidad.
	- Los *themes* no deben incluir lógica compleja → principio de *separación de responsabilidades*.

- **Ciclo de carga (Request Lifecycle)**
	- `index.php` (root) → carga WP core.
	- Se procesa el *Loop*: consulta del tipo de contenido.
	- WordPress determina qué plantilla usar según jerarquía.
	- Se aplica el tema usado (activa funciones + estilos + templates).
	- Render final → HTML enviado al navegador.

---

### 2. Arquitectura General de un Tema
- **Estructura mínima**
	- `style.css` — contiene metadatos del tema.
	- `index.php` — fallback principal.
	- `functions.php` — registro de scripts, funciones y hooks.

- **Estructura completa recomendada**
	- `/assets/`
		- `/css/`
		- `/js/`
		- `/images/`
	- `/template-parts/` — piezas reutilizables.
	- `/templates/` — plantillas para páginas específicas.
	- `/inc/` — funciones adicionales separadas.

- **Archivos esenciales**
	- `header.php` → zona `<head>` + navegación.
	- `footer.php`
	- `sidebar.php`
	- `single.php` → posts individuales.
	- `page.php` → páginas estáticas.
	- `archive.php` → listados.
	- `functions.php` → configuración central.

- **Principio: Tema = Presentación**
	- Evitar guardar lógica de negocio en el tema.
	- Plugins gestionan funcionalidad reutilizable.

---

### 3. Hooks y Extensibilidad
- **Acciones (`do_action`, `add_action`)**
	- Se ejecutan en puntos clave del ciclo de WordPress.
	- Ej: `wp_enqueue_scripts`, `init`, `admin_menu`.

- **Filtros (`apply_filters`, `add_filter`)**
	- Permiten transformar datos antes de imprimirlos.
	- Ej: modificar títulos, contenido, metadatos.

- **Buenas prácticas**
	- Agrupar hooks en archivos del directorio `inc/`.
	- No saturar `functions.php`.

---

### 4. Jerarquía de Plantillas
- Concepto fundamental: WordPress elige el archivo más específico posible.
- Ejemplo:
	- `single-product.php`
	- `single.php`
	- `singular.php`
	- `index.php`

- Prioridades por tipo:
	- Páginas → `front-page.php`, `home.php`, `page-{slug}.php`
	- Custom Post Types → `single-{cpt}.php`, `archive-{cpt}.php`
	- Taxonomías → `taxonomy-{tax}-{term}.php`

- Ventaja: control granular sin lógica compleja.

---

### 5. El Loop
- Núcleo del render:
	- WordPress consulta la BD.
	- Determina si hay posts o elementos.
	- Recorre resultados con `while ( have_posts() )`.

- Extensiones del Loop:
	- Loops secundarios usando `WP_Query`.
	- Parámetros para queries personalizadas.

---

### 6. Arquitectura de Estilos y Scripts
- **Carga siempre vía `wp_enqueue_*`**
	- Evita conflictos y duplicados.
	- Permite dependencias y control de versiones.

- **Dependencias típicas**
	- `jquery`
	- scripts propios
	- librerías externas como Bootstrap o Swiper

- **Buenas prácticas**
	- Cargar scripts en footer cuando sea posible.
	- Cargar CSS específico según plantilla (optimización).

---

### 7. Gutenberg y Theme JSON (Arquitectura Moderna)
- WordPress evoluciona a un sistema *Block Based*.
- `theme.json` permite:
	- definir colores globales
	- tipografías
	- espaciados
	- presets de bloques
	- estilos globales sin usar CSS

- Plantillas `.html` permiten crear themes sin PHP en partes del diseño.

---

### 8. Custom Post Types y Taxonomías
- Arquitectura basada en contenido personalizado.
- Uso de:
	- `register_post_type()`
	- `register_taxonomy()`

- Permiten crear estructuras tipo:
	- Portfolio
	- Eventos
	- Productos
	- Documentación

- Cada CPT puede tener sus propias plantillas jerárquicas.

---

### 9. Arquitectura de Plugins vs Temas
- **Temas**:
	- Contenido visual, layout, UI.
	- CSS, JS y templates.

- **Plugins**:
	- Funcionalidad: APIs, lógica, workflows.
	- CPTs, shortcodes, integraciones externas.
	- Guardar en el plugin todo lo que no dependa del diseño.

- Reglas:
	- Un tema no debe registrar CPTs permanentes → rompe portabilidad.
	- Plugins no deben sobrescribir diseño → romperían el tema.

---

### 10. Seguridad y Buenas Prácticas
- Sanitizar:
	- `esc_html()`, `esc_attr()`, `esc_url()`
- Validar formularios con nonces:
	- `wp_nonce_field()`, `wp_verify_nonce()`
- Evitar exponer datos sensibles en templates.
- Respetar la estructura del core.

---

### 11. Optimización y Rendimiento
- Minificación de CSS/JS.
- Carga condicional de assets.
- Uso de `preload`, `prefetch`.
- Evitar consultas pesadas en templates.
- Cache en funciones complejas.

---

### 12. Arquitectura para Desarrollo en Local y Entornos
- Entorno Local:
	- LocalWP / DevKinsta / XAMPP / Docker
	- `WP_DEBUG`, `SCRIPT_DEBUG` activados
	- PHPCS y WP Coding Standards

- Entorno Staging:
	- pruebas de temas y plugins
	- métricas de rendimiento

- Entorno Producción:
	- caché activa
	- minificación
	- backups automáticos

---

### Qué puedes expandir después
- Arquitectura Headless: WP + NextJS/React
- WordPress como API (REST / GraphQL)
- Creación completa de un tema modular desde cero
- Patrones de diseño en temas (Atomic Design, BEM)


## Fundamentos y Arquitectura de WordPress (Enfoque en el Core, no en Temas)

### 1. Arquitectura General del Core de WordPress
- **CMS basado en PHP + MySQL/MariaDB**
	- Código escrito mayormente en PHP procedural.
	- Base de datos relacional compuesta por tablas predefinidas.
	- Estructura flexible basada en posts y taxonomías (incluso para contenido no visible).

- **Estructura del núcleo (Core)**
	- `/wp-admin/` → interfaz administrativa (dashboard).
	- `/wp-includes/` → funciones fundamentales del CMS.
	- `/wp-content/` → temas, plugins, uploads (única carpeta donde el usuario debe trabajar).
	- Carga inicial controlada desde `wp-load.php` y `wp-config.php`.

- **Filosofía del sistema**
	- *Backwards compatibility* estricta.
	- Extensibilidad por medio de hooks.
	- Diseño monolítico pero modularizable.

---

### 2. Ciclo Interno de Carga (WordPress Request Lifecycle)
1. El navegador hace una petición: `https://tusitio.com/ejemplo`
2. `index.php` en la raíz carga el core.
3. `wp-config.php` define conexión con la BD y constantes globales.
4. Se inicializa WordPress:
	- Carga plugins activos.
	- Ejecuta hooks iniciales (`plugins_loaded`, `init`…).
5. Se procesa el **Query**:
	- `WP::main()` determina qué contenido corresponde.
	- `WP_Query` ejecuta la consulta a la base de datos.
6. WordPress decide qué tipo de vista se necesita (post, página, archivo, etc.).
7. Se manda la información al sistema de templates.
8. Se genera el HTML final.

Este ciclo es clave, incluso cuando no estás creando temas, porque afecta:
- seguridad
- rendimiento
- carga de plugins
- APIs internas

---

### 3. Base de Datos Interna y Estructura de Contenidos
WordPress usa un modelo flexible basado en **posts** para casi todo.

#### Tablas principales
- `wp_posts`
- `wp_postmeta`
- `wp_users`
- `wp_usermeta`
- `wp_terms`
- `wp_term_taxonomy`
- `wp_term_relationships`
- `wp_options`
- `wp_comments`
- `wp_commentmeta`

#### Conceptos de arquitectura de datos
- **Post Types** → páginas, entradas, adjuntos, menús, bloques…
- **Taxonomías** → categorías, etiquetas, taxonomías personalizadas.
- **Metadatos** → información adicional asociada a posts, usuarios, términos o comentarios.
- **Opciones** → clave-valor para configuración del sitio.

WordPress es esencialmente un *sistema orientado a entidades dinámicas*, lo que le permite ser un CMS, LMS, ecommerce, intranet, foro o API.

---

### 4. Hooks (Acciones y Filtros)
Los hooks son la arquitectura de extensibilidad principal del core.

- **Acciones** → ejecutar código en momentos concretos.
	- `init`, `admin_init`, `wp_loaded`, `wp_enqueue_scripts`, etc.
- **Filtros** → modificar datos antes de que WordPress los use o imprima.
	- `the_title`, `the_content`, `pre_get_posts`, etc.

Características:
- Permiten añadir o modificar funcionalidad sin tocar el core.
- Todos los plugins y gran parte del core funcionan gracias a ellos.
- Facilitan un modelo de *event-driven architecture*.

---

### 5. API Internas del Core
WordPress tiene múltiples APIs internas que forman parte de su arquitectura:

#### **WP REST API**
- JSON endpoints
- Operaciones CRUD sobre posts, usuarios, taxonomías, medios
- Autenticación por cookie, token o OAuth

#### **Options API**
- `get_option`, `update_option`
- Ideal para almacenar configuración global del sitio

#### **Metadata API**
- `get_post_meta`, `get_user_meta`, `get_term_meta`, etc.

#### **HTTP API**
- Manejo interno de solicitudes externas
- Usa cURL o Streams dependiendo del servidor

#### **Settings API**
- Manejo estructurado de páginas de ajustes
- Validaciones y sanitización

#### **Rewrite API**
- Reglas de reescritura (URLs amigables)
- Motor basado en regex
- Uso de `add_rewrite_rule`

#### **Roles y Capacidades**
- Sistema RBAC simple
- Permite definir permisos granularmente

---

### 6. Seguridad desde la Arquitectura
WordPress implementa seguridad en múltiples capas:

- Escapado y sanitización estándar:
	- `esc_html()`, `sanitize_text_field()`, etc.
- Nonces:
	- Evitan CSRF en formularios del dashboard y del frontend.
- Permisos (“capabilities”) integrados:
	- `current_user_can('edit_post')`, etc.
- Autenticación y gestión de cookies seguras.
- Auto-updates opcionales desde el core.

**Regla crucial:**  
No se debe modificar el core → rompe actualizaciones y seguridad del sistema.

---

### 7. Arquitectura de Plugins
- Cargados antes que el tema.
- Tienen acceso completo al ciclo de vida del core.
- Pueden engancharse en prácticamente cualquier hook.
- Permiten crear:
	- CPTs
	- APIs
	- integraciones externas
	- lógica de negocio
	- paneles en el admin
- Deben ser independientes del tema.

---

### 8. Multisite: Arquitectura Avanzada
WordPress Multisite extiende la arquitectura del core:

- Un solo WordPress → múltiples sitios independientes.
- Base de datos con tablas duplicadas por sitio (`wp_2_posts`, `wp_3_posts`, etc.).
- Un único conjunto de plugins.
- Ideal para intranets, SaaS simples, portales multi-marca.

---

### 9. Performance y Arquitectura Interna
WordPress optimiza varios aspectos:

- Cache de objetos en memoria (`WP_Object_Cache`)
- Cache persistente opcional con Redis/Memcached
- Minificación y concatenación del core
- Lazy loading de imágenes
- Previews estáticos de bloques Gutenberg

Optimizaciones recomendadas:
- Reducir consultas pesadas
- Deshabilitar plugins innecesarios
- Carga condicional de scripts
- Transients para cachear operaciones costosas

---

### 10. Arquitectura del Admin (wp-admin)
- Sistema propio de pantallas:
	- `WP_Screen`
	- menús y submenús admin
- Form fields generados mediante Settings API
- Editor Gutenberg:
	- bloques
	- patrones
	- motor React integrado dentro del admin
- Media Library:
	- sistema de adjuntos vinculado a posts

---

### 11. WordPress como Plataforma Extensible
WordPress no es solo un CMS: es una plataforma completa.

Usos arquitectónicos comunes:
- **Blog / Sitio corporativo**
- **Tiendas online con WooCommerce**
- **Headless CMS** con Next.js
- **SaaS modulares** usando multisite
- **Intranets** y portales documentales
- **Sistemas de e-learning** (LMS)
- **APIs para móviles**

Gracias a:
- REST API
- Hooks
- Plugins
- CPTs
- Tema o Block Theme

---

### Qué se puede expandir si lo deseas
- Arquitectura Headless en detalle
- Migraciones de sitios grandes
- Arquitectura WordPress + WooCommerce
- Arquitectura para alta escalabilidad (cluster, CDN, Redis)
- Arquitectura de seguridad avanzada (hardening)
- Arquitectura para automatización CI/CD en WordPress

{% raw %}
```
# omnivore Wordpress
```
{% endraw %}basej
type: list
name: "Notas con #wordpress en Omnivore"
order:
  - property: date_saved
    direction: desc
columns:
  - file.name
  - date_saved
filters:
  and:
    - file.inFolder("Omnivore")
    - file.hasTag("wp")
views:
  - type: table
    name: Table
    sort:
      - property: file.mtime
        direction: DESC

```





