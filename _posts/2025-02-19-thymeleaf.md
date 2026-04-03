---
date: 2025-02-19 17:54
title: thymeleaf
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Motor de plantillas
tags:
  - thymeleaf
  - java
  - spring
  - springboot
  - template-engine
---
# thymeleaf

## Relación con el ecosistema Java
- [java](/software%20engineering/java/)
- [Springboot](/backend/springboot/)
- [XML](/databases/xml/)

Thymeleaf es un **motor de plantillas del lado servidor** diseñado principalmente para aplicaciones Java. Se integra de forma nativa con Spring y Spring Boot, siendo una opción estándar para la **capa de vista (View)** en arquitecturas MVC.

A diferencia de otros motores, Thymeleaf prioriza la **legibilidad del HTML incluso sin procesar**, permitiendo abrir las vistas directamente en un navegador sin romper la estructura.

## Documentación oficial
- docs
	- [Tutorial: Using Thymeleaf](https://www.thymeleaf.org/doc/tutorials/3.1/usingthymeleaf.html#what-is-thymeleaf)

La documentación oficial cubre:
- Expresiones estándar
- Dialectos
- Integración con Spring MVC y Spring Security
- Internacionalización
- Procesamiento condicional y bucles
- Templates reutilizables (fragments)

## Thymeleaf como View en MVC
- mvc view layer

En el patrón **MVC**, Thymeleaf actúa como la **capa de presentación**, recibiendo datos desde el controlador (Controller) y renderizando HTML dinámico.

Flujo típico:
- Controller recibe la petición HTTP
- Controller añade datos al `Model`
- Se retorna el nombre de la vista
- Thymeleaf procesa el template y genera HTML final

Ventajas en MVC:
- Separación clara de responsabilidades
- Templates tipados y validados
- Integración directa con Spring Validation y BindingResult

## Comparación: Thymeleaf vs Java JSP

Diferencias clave:

- **HTML válido**
	- Thymeleaf mantiene HTML5 válido
	- JSP introduce tags que rompen la vista sin servidor

- **Curva de aprendizaje**
	- Thymeleaf usa atributos HTML (`th:*`)
	- JSP depende de tags JSTL y scriptlets (obsoletos)

- **Mantenimiento**
	- Thymeleaf es más legible para equipos frontend
	- JSP es más difícil de mantener en proyectos grandes

- **Seguridad**
	- Thymeleaf escapa expresiones por defecto
	- JSP requiere mayor cuidado manual

- **Estado actual**
	- JSP está en desuso en proyectos modernos
	- Thymeleaf es estándar de facto en Spring Boot

## Arquitectura basada en atributos
Thymeleaf utiliza **atributos HTML personalizados** en lugar de etiquetas propietarias.

Ejemplos conceptuales:
- `th:text` → renderizado de texto
- `th:if` / `th:unless` → lógica condicional
- `th:each` → iteración
- `th:href` / `th:src` → enlaces dinámicos

Esto permite:
- Plantillas naturales (Natural Templates)
- Mejor compatibilidad con herramientas frontend
- Menor fricción entre backend y frontend

## Integración con Spring Boot
Thymeleaf se configura automáticamente en Spring Boot mediante:
- Dependencia `spring-boot-starter-thymeleaf`
- Convención de templates en `/resources/templates`
- Resolución automática de vistas

Características clave:
- Acceso directo a beans de Spring
- Soporte para Spring Expression Language (SpEL)
- Integración con Spring Security (`sec:*`)

## Uso de Fragments y Layouts
Thymeleaf soporta **reutilización de vistas** mediante fragments.

Casos comunes:
- Headers y footers
- Menús de navegación
- Layouts base

Beneficios:
- DRY en la capa de vista
- Mejor mantenibilidad
- Estructura consistente

## Internacionalización (i18n)
Soporta internacionalización de forma nativa:
- Archivos `messages.properties`
- Resolución automática por locale
- Integración con Spring LocaleResolver

Uso típico:
- Textos traducibles en vistas
- Mensajes de validación
- Soporte multi-idioma sin lógica extra

## Seguridad y buenas prácticas
- Escape automático de HTML
- Prevención de XSS por defecto
- Integración con CSRF de Spring Security
- Evitar lógica compleja en templates
- Delegar reglas de negocio al Controller o Service

## Casos de uso comunes
- Aplicaciones web tradicionales server-side
- Paneles administrativos
- Dashboards internos
- Formularios con validación
- Aplicaciones híbridas (SSR + JS ligero)

## Limitaciones y consideraciones
- No pensado para SPAs puras
- Menor flexibilidad que frameworks JS modernos
- Renderizado en servidor implica mayor carga backend
- No sustituye frameworks frontend complejos

## Alternativas modernas
- JSP (legacy)
- FreeMarker
- Velocity (deprecated)
- SSR con frameworks JS (Next.js, Nuxt)
- Arquitecturas API + SPA (React, Vue, Angular)

Thymeleaf sigue siendo una opción sólida cuando se prioriza:
- Simplicidad
- Seguridad
- Integración con Spring
- Renderizado server-side tradicional

# thymeleaf — conceptos avanzados y no cubiertos

## Dialectos de Thymeleaf
Thymeleaf es extensible mediante **dialectos**, que permiten añadir nuevos atributos y comportamientos al motor de plantillas.

Tipos:
- Dialectos estándar (`th:*`)
- Dialectos de Spring (`#dates`, `#messages`, `#fields`)
- Dialectos personalizados

Casos de uso:
- Integraciones corporativas
- Reglas de renderizado específicas
- Extensión del lenguaje de plantillas sin modificar Thymeleaf core

## Spring Expression Language (SpEL) en profundidad
Thymeleaf utiliza **SpEL** para evaluar expresiones dinámicas.

Capacidades avanzadas:
- Acceso a beans de Spring
- Evaluación condicional compleja
- Operadores ternarios y lógicos
- Navegación segura de propiedades (`?.`)

Buenas prácticas:
- Limitar lógica compleja
- Precalcular datos en el Controller
- Evitar llamadas costosas desde la vista

## Binding de formularios y validación
Thymeleaf se integra estrechamente con el sistema de formularios de Spring MVC.

Características:
- Binding automático con objetos del modelo
- Acceso a errores de validación
- Resaltado de campos inválidos
- Compatibilidad con Bean Validation (JSR-380)

Ventaja clave:
- Reducción de código boilerplate
- Manejo consistente de errores de usuario

## Integración con Spring Security
Thymeleaf ofrece soporte nativo para **control de acceso en vistas**.

Capacidades:
- Mostrar u ocultar contenido según roles
- Acceso a información del usuario autenticado
- Control visual de permisos

Uso típico:
- Menús dinámicos según rol
- Botones condicionados por permisos
- Mensajes personalizados según autenticación

## Procesamiento condicional avanzado
Además de `th:if`, Thymeleaf permite:
- Evaluaciones complejas con SpEL
- Composición de condiciones
- Renderizado dinámico de atributos

Casos de uso:
- Feature flags
- Estados de workflows
- Renderizado basado en contexto de negocio

## Manejo avanzado de URLs y routing
Thymeleaf abstrae la generación de URLs:
- Compatibilidad con rutas dinámicas
- Parámetros seguros
- Integración con `@Controller` mappings

Ventajas:
- Evita hardcoding de rutas
- Refactorización segura
- Mejor mantenimiento a largo plazo

## Natural Templates (concepto clave)
Uno de los diferenciadores principales de Thymeleaf.

Características:
- HTML completamente válido sin procesar
- Visualizable directamente en navegador
- Compatible con diseñadores frontend

Impacto en equipos:
- Separación real entre diseño y backend
- Mejor colaboración frontend-backend
- Menor dependencia de entorno Java para maquetar

## Preprocesamiento y postprocesamiento
Thymeleaf permite **procesar templates en distintas fases**.

Usos avanzados:
- Templates base que generan otros templates
- Configuración dinámica de layouts
- Optimización del renderizado

Este enfoque es poco conocido pero útil en sistemas grandes.

## Performance y caching
Aspectos no evidentes pero críticos:

- Cache de templates en producción
- Desactivación de cache en desarrollo
- Coste de expresiones complejas
- Impacto del tamaño del modelo

Buenas prácticas:
- Activar cache en entornos productivos
- Evitar bucles anidados innecesarios
- Minimizar lógica en vistas

## Testing de vistas Thymeleaf
Estrategias comunes:
- Tests de Controller con MockMvc
- Verificación de renderizado HTML
- Validación de fragmentos críticos

Beneficios:
- Prevención de regresiones visuales
- Mayor confianza en cambios
- Integración con pipelines CI/CD

## Uso fuera de Spring
Aunque es común con Spring, Thymeleaf puede usarse:
- En aplicaciones Java SE
- Como motor de emails HTML
- En generación de documentos estáticos

Limitaciones fuera de Spring:
- Menor soporte automático
- Configuración más manual
- Pérdida de integración con seguridad y binding

## Emails y plantillas no web
Caso de uso frecuente:
- Emails transaccionales
- Notificaciones HTML
- Templates reutilizables

Ventajas:
- Reutilización de fragments
- HTML limpio y mantenible
- Compatibilidad con clientes de correo

## Versionado y compatibilidad
Consideraciones importantes:
- Compatibilidad entre Thymeleaf y Spring Boot
- Cambios entre versiones mayores
- Evolución de dialectos

Recomendación:
- Alinear versiones con el BOM de Spring Boot
- Evitar dependencias explícitas innecesarias

## Thymeleaf en arquitecturas modernas
Encaje actual:
- Server-Side Rendering tradicional
- Backend for Frontend (BFF)
- Aplicaciones híbridas SSR + JS

No recomendado para:
- SPAs complejas
- Aplicaciones altamente interactivas
- Casos donde el frontend domina la lógica

## Comparación conceptual con SSR moderno
Diferencias frente a SSR JS:
- Renderizado más simple
- Menor complejidad de build
- Sin hydration ni estado cliente

Trade-offs:
- Menor dinamismo
- Menor reutilización frontend
- Mayor dependencia del backend

## Escenarios donde Thymeleaf sigue siendo ideal
- Aplicaciones internas
- Backoffices
- Sistemas legacy modernizados
- Proyectos con equipos Java-centric
- Requisitos fuertes de seguridad y control

Esta expansión cubre los **aspectos avanzados, operativos y arquitectónicos** que normalmente no se abordan en introducciones a Thymeleaf.

# thymeleaf — casos de uso con ejemplos de código y configuración

## Renderizado MVC clásico (Controller → View)
Caso típico de uso en aplicaciones Spring Boot con SSR.

### Controller Spring MVC
{% raw %}
```java
@Controller
@RequestMapping("/users")
public class UserController {

	@GetMapping
	public String listUsers(Model model) {
		model.addAttribute("users", userService.findAll());
		return "users/list";
	}
}
```
{% endraw %}`

### Template Thymeleaf

{% raw %}
```html
<ul>
	<li th:each="user : ${users}" th:text="${user.name}"></li>
</ul>
```
{% endraw %}

Uso común:

* Listados
* Vistas detalle
* CRUD administrativos

## Formularios con binding y validación

Caso de uso central en aplicaciones empresariales.

### DTO con validación

{% raw %}
```java
public class UserForm {

	@NotBlank
	private String username;

	@Email
	private String email;
}
```
{% endraw %}

### Controller con validación

{% raw %}
```java
@PostMapping("/create")
public String create(
	@Valid @ModelAttribute("userForm") UserForm form,
	BindingResult result
) {
	if (result.hasErrors()) {
		return "users/form";
	}
	userService.save(form);
	return "redirect:/users";
}
```
{% endraw %}

### Template de formulario

{% raw %}
```html
<form th:object="${userForm}" method="post">
	<input type="text" th:field="*{username}">
	<span th:if="${#fields.hasErrors('username')}"
		  th:errors="*{username}"></span>

	<input type="email" th:field="*{email}">
	<button type="submit">Guardar</button>
</form>
```
{% endraw %}

Ventaja:

* Manejo automático de errores
* Sin JavaScript obligatorio

## Control de acceso en vistas (Spring Security)

Caso de uso frecuente en backoffices.

### Dependencia necesaria

{% raw %}
```xml
<dependency>
	<groupId>org.thymeleaf.extras</groupId>
	<artifactId>thymeleaf-extras-springsecurity6</artifactId>
</dependency>
```
{% endraw %}

### Template con control de roles

{% raw %}
```html
<div sec:authorize="hasRole('ADMIN')">
	<a th:href="@{/admin}">Panel Admin</a>
</div>
```
{% endraw %}

Casos:
* Menús dinámicos
* Botones restringidos
* Información contextual del usuario

## Layouts y fragments reutilizables

Uso clave para proyectos medianos y grandes.

### Fragment base

{% raw %}
```html
<!DOCTYPE html>
<html th:fragment="layout(content)">
<head>
	<title th:text="${title}">App</title>
</head>
<body>
	<header>Header común</header>
	<main th:replace="${content}"></main>
	<footer>Footer común</footer>
</body>
</html>
```
{% endraw %}

### Uso del layout

{% raw %}
```html
<html th:replace="layout :: layout(~{::section})">
<section>
	<h1>Contenido de la página</h1>
</section>
</html>
```
{% endraw %}

Beneficio:
* Consistencia visual
* DRY en vistas

## Internacionalización (i18n)

Caso de uso en aplicaciones multi-idioma.

### messages.properties

{% raw %}
```properties
title.users=Usuarios
button.save=Guardar
```
{% endraw %}

### Template

{% raw %}
```html
<h1 th:text="#{title.users}"></h1>
<button th:text="#{button.save}"></button>
```
{% endraw %}

Configuración típica:
* Soporte automático por locale
* Integración con navegador

## Generación de URLs seguras

Caso de uso para routing mantenible.

### Template

{% raw %}
```html
<a th:href="@{/users/{id}(id=${user.id})}">
	Ver detalle
</a>
```
{% endraw %}

Ventaja:
* Sin rutas hardcodeadas
* Refactorización segura

## Emails HTML con Thymeleaf

Uso fuera del contexto web.

### Servicio de email

{% raw %}
```java
Context context = new Context();
context.setVariable("username", user.getName());

String html = templateEngine.process("emails/welcome", context);
```
{% endraw %}

### Template de email

{% raw %}
```html
<p>Hola <span th:text="${username}"></span>, bienvenido.</p>
```
{% endraw %}

Casos:
* Emails transaccionales
* Notificaciones
* Reutilización de fragments

## Uso condicional avanzado

Caso de uso para estados de negocio.

### Template

{% raw %}
```html
<span th:if="${order.paid}">Pagado</span>
<span th:unless="${order.paid}">Pendiente</span>
```
{% endraw %}

O con expresión compleja:

{% raw %}
```html
<div th:if="${order.status.name() == 'CANCELLED'}">
	Pedido cancelado
</div>
```
{% endraw %}

## Configuración en Spring Boot

Configuración estándar y avanzada.

### application.yml

{% raw %}
```yaml
spring:
	thymeleaf:
		cache: true
		prefix: classpath:/templates/
		suffix: .html
		mode: HTML
```
{% endraw %}

Buenas prácticas:
* Cache desactivado en desarrollo
* Cache activado en producción

## Performance y caching de templates

Caso de uso en sistemas con alta carga.
Consideraciones:
* Templates cacheados por defecto
* Expresiones SpEL costosas afectan rendimiento
* Evitar bucles grandes en vistas

Configuración recomendada:

{% raw %}
```yaml
spring:
	thymeleaf:
		cache: true
```
{% endraw %}

## Testing de vistas

Uso en pipelines CI/CD.

### Test con MockMvc

{% raw %}
```java
mockMvc.perform(get("/users"))
	.andExpect(status().isOk())
	.andExpect(view().name("users/list"))
	.andExpect(content().string(containsString("Usuarios")));
```
{% endraw %}

Beneficio:
* Validación del renderizado
* Detección temprana de errores

## Backend for Frontend (BFF)

Caso moderno híbrido.

Uso:
* Thymeleaf renderiza HTML base
* JS añade interactividad puntual
* Backend expone APIs internas

Ideal para:
* Paneles internos
* Aplicaciones corporativas
* Sistemas con seguridad estricta

## Integración con JS ligero

Caso de uso realista actual.

Ejemplo:
* Thymeleaf renderiza datos iniciales
* JS maneja eventos y AJAX

{% raw %}
```html
<script>
	const userId = /*${user.id}*/ 0;
</script>
```
{% endraw %}

Permite:
* Evitar SPA completa
* Mantener simplicidad

## Casos donde este enfoque es óptimo

* CRUD empresariales
* Backoffice y admin panels
* Aplicaciones internas
* Sistemas legacy modernizados
* SSR con bajo coste de mantenimiento
