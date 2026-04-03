---
date: 2025-05-17 17:40
title: Motor de plantillas
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Desarrollo web
tags:
  - template-engine
---
# Motor de plantillas

- [Desarrollo web](/desarrollo%20web/desarrollo-web/)
- Jekyll 

Los **motores de plantillas** permiten generar y renderizar contenido dinámico (HTML, emails, PDFs, documentos, etc.) mediante la combinación de datos y estructuras predefinidas. Son fundamentales en entornos donde se requiere **generar vistas desde el backend** o producir **archivos renderizados automáticamente** sin depender de un frontend completo.

## Conceptos clave

- **Generación de HTML en el backend**: el servidor procesa los datos y los combina con una plantilla para devolver un documento HTML ya renderizado. Ideal en entornos donde el cliente no necesita lógica compleja ni interacción dinámica.
- **Renderización dinámica**: se construyen vistas a partir de datos en tiempo real, manteniendo la coherencia entre las capas del sistema y permitiendo contenido personalizado.
- **Dashboards sin frontend**: posible mediante motores de plantillas que generan vistas completas a partir de datos del servidor, sin necesidad de frameworks de frontend como React o Vue.

## Tipos de renderización

### SSR (Server-Side Rendering)
El servidor genera la página completa en cada petición, enviando al cliente un HTML totalmente renderizado.

- Usos:
	- Email templates y notificaciones personalizadas
	- Generación de PDFs o documentos automáticos
	- Páginas con contenido dinámico pero dependiente del servidor
- Ventajas:
	- Mejor SEO
	- Carga inicial rápida
- Desventajas:
	- Mayor carga en el servidor
	- Interactividad limitada sin JavaScript adicional

### SPA (Single Page Application)
La aplicación se renderiza del lado del cliente, solicitando los datos al backend mediante APIs. El motor de plantillas puede emplearse para generar fragmentos dinámicos.

- Ejemplos:
	- Noticias, comentarios o feeds dinámicos
	- Aplicaciones con mucha interacción del usuario
- Características:
	- Se actualiza solo el contenido necesario sin recargar toda la página
	- Mayor complejidad en el enrutado y estado de la aplicación

### SSG (Static Site Generation)
Genera los archivos HTML de forma estática a partir de plantillas y datos durante la compilación, no en cada petición.

- Ejemplo de uso:
	- Blogs, portafolios o documentación técnica
- Ventajas:
	- Rendimiento máximo y seguridad
	- Escalabilidad sin servidor dinámico
- Desventajas:
	- Requiere recompilar para actualizar contenido

## Herramientas comunes

### Frameworks y motores de plantillas
- EJS: sintaxis sencilla y muy usada en Node.js 
- Jekyll: orientado a SSG, popular en GitHub Pages
- Twig: usado en entornos [PHP](/backend/php/)
- Nunjucks doc oficial: inspirado en Jinja2, potente y extensible
- Pug (antes Jade): sintaxis minimalista basada en sangría
- Mustache / Handlebars: plantillas lógicas sin código ejecutable, seguras y portables
- Thymeleaf: integración nativa con Spring para aplicaciones Java

## Uso en documentación y APIs

### Integración con [swagger](/backend/swagger/)
Los motores de plantillas permiten personalizar las vistas y documentación generadas por herramientas como Swagger o [OpenAPI](/backend/openapi/), adaptando el estilo y formato a las necesidades del proyecto (branding, layout, contenido dinámico).

## Casos avanzados de uso

- Generación de informes HTML convertibles a PDF o DOCX
- Composición de emails con variables personalizadas (nombre, fecha, contenido)
- Renderización de dashboards de datos en entornos internos o administrativos
- Generación de archivos estáticos para publicación automatizada en CI/CD

## Ejemplo básico (EJS)
{% raw %}
```ejs
<!DOCTYPE html>
<html>
	<head>
		<title><%= title %></title>
	</head>
	<body>
		<h1>Hola <%= user.name %></h1>
		<p>Tu pedido #<%= order.id %> está en proceso.</p>
	</body>
</html>
```
{% endraw %}`

Este ejemplo combina datos del backend (`title`, `user.name`, `order.id`) para generar contenido HTML dinámico.

# Motores de plantillas: conceptos avanzados y extensión

Los motores de plantillas no solo se limitan a la generación de HTML, sino que también son un componente estructural clave en arquitecturas modernas, integrando renderización, comunicación entre servicios y automatización de contenido.

## Arquitectura y flujo de renderización

1. **Entrada de datos**: provienen de una API, base de datos o archivo.
2. **Inyección en la plantilla**: el motor reemplaza las variables con valores dinámicos.
3. **Renderización**: se genera el documento (HTML, XML, texto, JSON o incluso PDF).
4. **Entrega o transformación**: el resultado se sirve directamente al cliente o se convierte (por ejemplo, a PDF o DOCX).

Este flujo puede ejecutarse tanto en el **backend** como en procesos de **build estáticos**, dependiendo del tipo de aplicación (SSR, SSG, SPA).

## Extensiones y ecosistema

### 1. **Internacionalización (i18n)**
Los motores suelen integrar sistemas de localización que permiten:
- Sustituir etiquetas y textos por traducciones.
- Adaptar formato de fechas, moneda y unidades.
- Generar múltiples versiones del mismo contenido para diferentes idiomas.

Ejemplo: usar `{{ i18n("welcome_message") }}` para mostrar el texto en el idioma configurado.

### 2. **Layouts y herencia**
Permite definir plantillas base que otras vistas pueden extender. Esto mejora la mantenibilidad y evita duplicación de código.

{% raw %}
```pug
//- layout.pug
html
	head
		block head
	body
		block content
```
{% endraw %}`

{% raw %}
```pug
//- index.pug
extends layout.pug

block content
	h1 Bienvenido al panel
```
{% endraw %}

### 3. **Componentes reutilizables**

Algunos motores admiten **componentes parciales** o “includes”:

* Fragmentos HTML comunes (headers, footers, menús).
* Elementos dinámicos reutilizables en distintas páginas.

Esto aproxima el concepto de **componentización del frontend**, pero desde el backend.

### 4. **Integración con frameworks**

Los motores se integran directamente en frameworks web:

* Express + EJS, Pug, Nunjucks doc oficial
* Spring Boot + Thymeleaf
* Django + Jinja2
* Laravel + Blade

En cada caso, el motor maneja la capa de vista mientras el framework gestiona rutas, lógica y datos.

## Motores en pipelines de contenido

En entornos de **CI/CD**, los motores de plantillas automatizan la generación de:

* Sitios de documentación técnica (SSG)
* Dashboards para reportes internos
* Emails programáticos
* Plantillas de contratos o informes corporativos
* HTML para integraciones de Swagger o documentación de API

Esta automatización se apoya en scripts que combinan plantillas con fuentes de datos (JSON, YAML o bases de datos).

## Rendimiento y caching

### Cache de plantillas

Para minimizar la carga del servidor, los motores pueden:

* Compilar plantillas a funciones preprocesadas.
* Guardar el resultado renderizado de vistas comunes.
* Usar *fragment caching* para secciones específicas.

### Estrategias:

* Cache en memoria (por ejemplo, Redis o memcached).
* Cache de archivos HTML estáticos para respuestas repetitivas.
* Renderización híbrida (pre-render + actualización parcial).

## Seguridad en motores de plantillas

1. **Escapado de variables**: evita ataques XSS escapando contenido dinámico (`<%= %>` vs `<%- %>` en EJS).
2. **Plantillas sandboxed**: restringen acceso a funciones del sistema.
3. **Separación de lógica**: limitar el uso de estructuras condicionales o bucles complejos dentro de las plantillas.
4. **Validación del contexto**: asegurarse de que los datos insertados sean del tipo esperado.

## Casos modernos y tendencias

* **Microfrontend SSR**: renderización distribuida donde cada microservicio entrega su fragmento HTML.
* **Email rendering services**: plataformas que usan motores de plantillas para personalizar campañas masivas.
* **Document automation pipelines**: generación automatizada de informes y contratos con [handlebars](/motor%20de%20plantillas/handlebars/) o Nunjucks doc oficial.
* **Templating headless**: motores que renderizan contenido desacoplado, consumido luego por una SPA o app móvil.

## Alternativas y evolución

* MDX: combina Markdown y JSX para generar contenido dinámico, útil en documentación interactiva.
* Liquid: motor de plantillas seguro usado por Shopify y Jekyll.
* HTMX y Alpine.js: no son motores de plantillas tradicionales, pero permiten renderización progresiva desde el backend.

## Glosario relacionado

* Partial: fragmento de plantilla reutilizable.
* Layout: plantilla base o estructura general.
* Contexto de renderizado: conjunto de variables accesibles por la plantilla.
* Precompilación: proceso de transformar una plantilla en una función lista para renderizar.
* Escape de contenido: técnica para evitar inyección de código o XSS.
* Rendering híbrido: mezcla entre SSR y SPA.
* Templating Headless: renderización desacoplada para APIs o microservicios.

---

**En resumen**, los motores de plantillas son una capa fundamental de generación de contenido estructurado, con aplicaciones que abarcan desde sitios estáticos y dashboards internos hasta servicios distribuidos y documentación dinámica. Su evolución apunta a integrarse con flujos de datos en tiempo real, pipelines automatizados y entornos sin frontend explícito.

# Motores de plantillas: temas complementarios y aplicaciones avanzadas

Los motores de plantillas han evolucionado para integrarse en contextos complejos donde la generación de vistas dinámicas, contenido automatizado y renderización modular se combinan con arquitecturas distribuidas y flujos de datos en tiempo real.

## Integración con arquitecturas modernas

### 1. **Headless CMS**
Los motores pueden conectarse a sistemas de contenido sin interfaz visual (como Strapi, Contentful o Sanity), actuando como capa de presentación:

- Renderizan el contenido proveniente de APIs REST o GraphQL.
- Permiten personalizar el layout según tipo de recurso (blog, producto, documento).
- Pueden generar versiones estáticas o dinámicas del contenido.

### 2. **Microservicios y renderizado distribuido**
Cada servicio puede ser responsable de generar un fragmento del HTML total (fragment rendering):
- Se ensamblan en un *layout container* o *edge template renderer*.
- Mejora la modularidad y reduce tiempos de render.
- Facilita despliegues independientes por servicio.

Ejemplo: una cabecera generada por un servicio, un bloque de noticias por otro, y un footer común integrado al vuelo.

### 3. **Edge Rendering**
Con la expansión de la computación en el borde (Cloudflare Workers, Vercel Edge Functions), los motores de plantillas pueden ejecutarse cerca del usuario:
- Renderizan HTML a baja latencia.
- Inyectan datos contextuales (geolocalización, idioma, autenticación).
- Permiten SSR sin depender de un backend centralizado.

## Aplicaciones industriales y documentales

### 1. **Generación de documentos empresariales**
Plantillas aplicadas en la automatización de:
- Facturas, presupuestos y contratos.
- Informes corporativos o financieros.
- Certificados y documentos PDF generados desde datos estructurados.

Integración con librerías como pdfkit, puppeteer, o WeasyPrint para convertir HTML en PDF.

### 2. **Automatización en DevOps**
Uso en:
- Plantillas YAML dinámicas (por ejemplo, en Ansible o [Terraform](/devops/terraform/)).
- Scripts de despliegue o configuración basados en plantillas parametrizadas.
- Generación automática de archivos `.env`, configuraciones o documentación de API.

### 3. **Email templating avanzado**
Motores especializados o adaptaciones (como MJML, Nunjucks doc oficial, Handlebars) permiten:
- Componentes reutilizables para distintos tipos de correos.
- Versiones adaptadas para escritorio y móvil.
- Variables personalizadas por usuario o evento.

Ejemplo: plantillas para notificaciones, resúmenes semanales o campañas de marketing automatizadas.

## Integración con APIs y datos externos

- Conexión directa a endpoints para obtener datos JSON o XML.
- Renderización basada en feeds dinámicos (noticias, precios, métricas).
- Uso combinado con fetch o librerías de backend para obtener datos en tiempo real.

### Renderización condicional
Los motores permiten condicionar la salida según valores recibidos:
{% raw %}
```handlebars
{{#if user.isAdmin}}
	<p>Bienvenido administrador, {{user.name}}</p>
{{else}}
	<p>Hola {{user.name}}, no tienes acceso a esta sección.</p>
{{/if}}
```
{% endraw %}`

## Testing y mantenimiento de plantillas

### 1. **Pruebas unitarias**

Se pueden crear tests que validen:

* La correcta renderización de variables.
* La estructura del HTML resultante.
* La ausencia de errores o etiquetas vacías.

### 2. **Linting y validación**

Herramientas que analizan plantillas para:

* Detectar variables sin definir.
* Verificar la coherencia de sintaxis.
* Garantizar accesibilidad y semántica.

Ejemplo: eslint-plugin-handlebars, pug-lint o validadores integrados en pipelines CI.

### 3. **Preprocesamiento y compilación**

Muchos motores ofrecen compilación previa de plantillas a funciones optimizadas:

* Mejora el rendimiento.
* Permite distribuir plantillas como módulos de código.
* Facilita la internacionalización en tiempo de build.

## Interoperabilidad y formatos híbridos

* **Plantillas Markdown + HTML**: permiten generar documentación técnica o blogs estáticos enriquecidos.
* **Plantillas JSON**: útiles para generar configuraciones o respuestas API parametrizadas.
* **Templating en CLI**: usado para scaffolding de proyectos (por ejemplo, `npm init`, `create-*`, o Yeoman).

## Diseño y UX en plantillas

Aunque se originan del backend, las plantillas también pueden incorporar:

* Variables de estilo dinámicas (por ejemplo, temas claros/oscuros).
* Estructuras accesibles para usuarios con discapacidad.
* Adaptabilidad según dispositivo (media queries en plantillas).

Esto permite crear *vistas consistentes y accesibles* sin necesidad de un framework frontend completo.

## Integración con sistemas de caching distribuido

* Plantillas renderizadas almacenadas en CDNs.
* Invalidación automática ante cambios en los datos.
* *Partial caching*: solo se vuelve a renderizar el bloque afectado.

## Tendencias emergentes

* **Templating declarativo**: plantillas que se describen como esquemas JSON en vez de sintaxis HTML.
* **Reactive templating**: integración con frameworks reactivas que re-renderizan solo los fragmentos necesarios.
* **Composable templating**: uso de componentes templados interoperables entre motores distintos.
* **Generación con IA**: motores que utilizan modelos de lenguaje para crear o completar plantillas dinámicamente a partir de descripciones o metadatos.

## Casos de uso inusuales

* Generación de código fuente (por ejemplo, scaffolding de microservicios).
* Creación de configuraciones automatizadas para [Docker](/software%20engineering/docker/) o [Kubernetes](/virtualizacion/kubernetes/).
* Renderización de contenido en CLI o terminal con plantillas basadas en texto.
* Generación de reportes técnicos o analíticos con datos en tiempo real (ej. Grafana o scripts Python).

---

**Conclusión extendida:**
Los motores de plantillas se han convertido en herramientas transversales entre backend, documentación, DevOps y automatización empresarial. Su evolución apunta hacia la **composición dinámica**, la **integración en pipelines de despliegue continuo**, y la **adaptación semántica y contextual** del contenido generado, posicionándolos como una capa esencial en la infraestructura de generación de interfaces, datos y comunicación entre sistemas.


