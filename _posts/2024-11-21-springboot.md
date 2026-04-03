---
date: 2024-11-21 01:17
title: Springboot
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Backend
tags:
  - spring
  - java
  - api
  - backend
---
# Springboot 

- [java](/software%20engineering/java/)
- [Backend](/backend/backend/) 🔥
- [api](/backend/api/)
- [angular](/frontend/angular/)
-  📁
-  📕

## 1. Fundamentos de Spring Framework
- **Concepto base**
	- Framework modular para aplicaciones Java empresariales
	- Promueve código limpio y desacoplado
- **Principios Clave**
	- IoC (Inversión de Control)
	- DI (Inyección de Dependencias)
	- AOP (Programación Orientada a Aspectos)
- **Recursos**
	- [Inversión de Control VS Inyección de dependencias Parte 1 - YouTube](https://youtu.be/uv5AWym2Aok)
	- [Cómo se maneja la INYECCIÓN DE DEPENDENCIAS en Spring Boot - YouTube](https://youtu.be/v9xEpMFsLck)
- [Computer Science](/computer%20science/computer-science/) → Aplicación de patrones como Factory, Singleton, Proxy, Adapter

## 2. Spring Boot
- [Spring Boot](https://spring.io/projects/spring-boot) simplifica la configuración del framework
- Ventajas:
	- Configuración automática
	- Servidores embebidos: **Tomcat**, Jetty, Undertow
	- Preparado para microservicios
- Lenguajes: Java, Kotlin, Groovy
- Empaquetadores: [maven](/automatizacion%20y%20build/maven/) vs Gradle (Kotlin DSL)
- [Documentation Overview Spring Boot](https://docs.spring.io/spring-boot/documentation.html)

### 2.1. Estructura de Proyecto
- Paquetes comunes:
	- `controller/` → controladores REST
	- `service/` → lógica de negocio
	- `repository/` → persistencia con JPA
	- `model/` → entidades y DTOs
- Arquitectura recomendada:
	- **Capas desacopladas**: Controller → Service → Repository
	- **Arquitectura hexagonal** o limpia (Domain-Driven Design)
	- Ejemplo: [TODO App Java Hexagonal](https://github.com/DanielEspanadero/arquitectura-hexagonal-java)

### 2.2. Creación de Proyectos
- [Spring Initializr](https://start.spring.io/)
	- Tipo: JAR (standalone) o WAR (servidor externo)
	- Dependencias: Web, JPA, Lombok, Security, DevTools
- Templates:
	- [Kotlin API Skeleton](https://github.com/CodelyTV/kotlin-api-skeleton)
	- [Java Basic Skeleton](https://github.com/CodelyTV/java-basic-skeleton)
	- Seguridad:
		- [Spring Security Example](https://github.com/DanielEspanadero/spring-security)

### 2.3. Configuración y Entorno
- Variables de entorno y propiedades:
	- `application.properties` o `application.yml`
	- Perfiles: `spring.profiles.active=dev|prod|test`
	- Acceso: `@Value("${prop.name}")` o `@ConfigurationProperties`
- Configuración jerárquica:
	- Propiedades por entorno: `application-dev.yml`, `application-prod.yml`
- JDK recomendado: 17 o superior
- IDEs: IntelliJ IDEA, VSCode  

## 3. Desarrollo de APIs REST
- Principios:
	- CRUD, consistencia en endpoints, respuestas estandarizadas (JSON)
- Anotaciones:
	- *@RestController*, *@GetMapping*, *@PostMapping*, *@PutMapping*, *@DeleteMapping*
	- *@RequestMapping*, *@PathVariable*, *@RequestParam*
- Documentación:
	- **Javadoc**, OpenAPI, Swagger UI
	- [OpenAPI Specification v3.1.1](https://spec.openapis.org/oas/latest.html#openapi-description)
- Ejemplo de curso:
	- [Curso Spring Boot #4 – @RestController y @GetMapping](https://youtu.be/3mEVNxcBOaA)
	- [DESARROLLO DE API REST CON JAVA | CRUD MySQL](https://youtu.be/M7lhQMzzHWU)
	- [Spring Data JPA Reference](https://docs.spring.io/spring-data/jpa/reference/index.html)
	- [Ejemplo API REST](https://github.com/DanielEspanadero/api-rest-spring-boot)

### 3.1. Persistencia y ORM
- **Spring Data JPA**
	- Simplifica el acceso a BD relacionales
	- Interfaz `JpaRepository` → CRUD genérico
	- Queries personalizadas: `@Query`, `findByNombre()`
- **Datasource**
	- Configuración: URL, usuario, contraseña
	- Soporte: MySQL, PostgreSQL, H2 (testing)

### 3.2. Validación y Excepciones
- Validación con anotaciones:
	- `@NotNull`, `@Size`, `@Email`, `@Pattern`
	- `@Valid` en controladores
- Manejo global de errores:
	- `@ControllerAdvice`, `@ExceptionHandler`
	- Respuestas uniformes con objetos `ErrorResponse`

### 3.3. Seguridad y Autenticación
- Spring Security
	- Autenticación básica y JWT
	- Roles y permisos
	- Configuración con `SecurityFilterChain`
- Recursos:
	- [GitHub - DanielEspanadero/spring-security](https://github.com/DanielEspanadero/spring-security)

## 4. Integración Frontend
- [angular](/frontend/angular/) + Spring Boot
	- Comunicación por APIs REST (JSON)
	- CORS configurado con `@CrossOrigin`
	- [Spring Boot and Angular GitHub](https://github.com/PacktPublishing/Spring-Boot-and-Angular)
- Testing del frontend: Postman o Insomnia

## 5. Testing y Observabilidad
- **Testing**
	- Unit: JUnit5 + Mockito
	- Integration: `@SpringBootTest`
- **Actuator**
	- Endpoints `/actuator/health`, `/metrics`
	- Integración con Prometheus y Grafana
- Logs:
	- `application.yml`: `logging.level.root=INFO`
	- Librerías: SLF4J + Logback

## 6. Despliegue y Contenedores
- [Docker](/software%20engineering/docker/)
	- [Spring Boot con Docker](https://spring.io/guides/gs/spring-boot-docker)
	- Dockerfile básico:
		{% raw %}
```dockerfile
		FROM openjdk:17-jdk-slim
		COPY target/app.jar app.jar
		ENTRYPOINT ["java","-jar","/app.jar"]
		```
{% endraw %}
- Integración con CI/CD:
	- GitHub Actions, Jenkins o GitLab CI
- Cloud:
	- Despliegue en Heroku, AWS, Azure, GCP
	- Externalización de configuración: Spring Cloud Config, Consul, Vault

## 7. Instalación y Recursos
- Guía: [Beginner’s Guide](https://nginx.org/en/docs/beginners_guide.html)
- [Instalación oficial Spring Boot](https://docs.spring.io/spring-boot/docs/1.0.2.RELEASE/reference/html/getting-started-installing-spring-boot.html#getting-started-installation-instructions-for-java)
- Spring Boot Reference Guide-index.html
- Libro y referencia:
	- [Spring Boot and Angular - Packt](https://github.com/PacktPublishing/Spring-Boot-and-Angular)

# Spring Boot — Conceptos Avanzados y Expansión

> Extensión complementaria de la nota base sobre [Springboot](/backend/springboot/), enfocada en temas intermedios y avanzados **no tratados anteriormente**, sin repeticiones.

---

## 1. Auto-Configuración y Starters Personalizados
- **Auto-Configuration**: Spring Boot detecta beans y configura automáticamente componentes comunes (DataSource, MVC, Security, etc.)
	- Se activa mediante `@EnableAutoConfiguration`
	- Puede excluir configuraciones específicas con `exclude = { ... }`
- **Starters**:
	- Paquetes preconfigurados que simplifican dependencias (ej: `spring-boot-starter-web`, `spring-boot-starter-jpa`)
	- Se pueden crear **starters personalizados** para proyectos internos:
		- Incluir dependencias comunes
		- Añadir configuraciones automáticas (`META-INF/spring.factories`)
	- Ideal para ecosistemas corporativos con módulos compartidos

---

## 2. Programación Reactiva con Spring WebFlux
- **WebFlux**: alternativa no bloqueante a Spring MVC
	- Basado en **Reactor** (implementación de Reactive Streams)
	- Usa tipos `Mono<T>` (valor único) y `Flux<T>` (flujo de valores)
- Beneficios:
	- Mejor rendimiento en IO intensivo
	- Escalabilidad en microservicios reactivos
- Componentes:
	- `@RestController` → puede devolver `Mono` o `Flux`
	- `WebClient` → cliente HTTP reactivo
- Ejemplo:
	{% raw %}
```java
	@GetMapping("/users")
	public Flux<User> getUsers() {
		return userService.findAllReactive();
	}
	```
{% endraw %}

---

## 3. Microservicios Avanzados
- **Resiliencia y comunicación distribuida**
	- Integración con herramientas como **Spring Cloud**:
		- Config Server (externalización de configuración)
		- Eureka (Service Discovery)
		- OpenFeign (clientes declarativos)
		- Gateway (API Gateway)
	- **Circuit Breaker y tolerancia a fallos**:
		- Implementación con Resilience4j
		- Anotaciones: `@CircuitBreaker`, `@Retry`, `@RateLimiter`
- **Transacciones distribuidas**
	- Uso de patrones **Saga** o **Outbox**
	- Mensajería con RabbitMQ, Kafka o EventBridge

---

## 4. Caching y Optimización
- **Caching** integrado con `@EnableCaching`
	- `@Cacheable` → guarda resultados en memoria
	- `@CacheEvict` → limpia entradas
	- `@CachePut` → actualiza cache sin borrar
- **Backends compatibles**:
	- Ehcache, Caffeine, Redis
- Ejemplo:
	{% raw %}
```java
	@Cacheable("users")
	public List<User> getAllUsers() { ... }
	```
{% endraw %}
- **Optimización de performance**:
	- Pool de conexiones (HikariCP)
	- Lazy initialization de beans
	- Reducción de carga con WebFlux o caching distribuido

---

## 5. Configuración Avanzada y Multi-Tenancy
- **Externalización avanzada**
	- Configuración jerárquica mediante YAML y perfiles (`application-dev.yml`, `application-prod.yml`)
	- Variables externas: `.env`, argumentos CLI, Config Server
- **Multi-Tenancy**
	- Separación de datos por cliente o instancia
	- Estrategias:
		- **Schema-based**: cada tenant usa un esquema distinto
		- **Database-based**: cada tenant tiene su base de datos
		- **Discriminator-based**: una tabla compartida con campo `tenant_id`
- Implementación con Hibernate MultiTenantConnectionProvider

---

## 6. Observabilidad y Monitorización
- **Spring Boot Actuator** extendido:
	- Endpoints: `/actuator/metrics`, `/health`, `/env`, `/beans`
	- Integración con Prometheus y Grafana para métricas
- **Tracing distribuido**:
	- Spring Cloud Sleuth (añade IDs de trazas a logs)
	- Zipkin / OpenTelemetry para trazabilidad de microservicios
- **Métricas personalizadas**:
	{% raw %}
```java
	@Autowired
	MeterRegistry registry;
	public void contador() {
		registry.counter("api.requests.total").increment();
	}
	```
{% endraw %}

---

## 7. Asincronía y Tareas Programadas
- **Ejecución asíncrona**
	- Habilitar con `@EnableAsync`
	- Métodos anotados con `@Async` ejecutan en hilos separados
	- Configurar un `TaskExecutor` personalizado
- **Tareas programadas**
	- `@EnableScheduling` + `@Scheduled`
	- Ejemplo:
		{% raw %}
```java
		@Scheduled(fixedRate = 5000)
		public void logStatus() { ... }
		```
{% endraw %}
- Uso en limpieza de logs, sincronización, o envío de notificaciones

---

## 8. CI/CD y Contenedorización Avanzada
- **Buildpacks** (desde Spring Boot 2.3+):
	- Crear imágenes Docker sin Dockerfile:
		{% raw %}
```bash
		./mvnw spring-boot:build-image
		```
{% endraw %}
	- Usa Cloud Native Buildpacks (Paketo)
- **Kubernetes Deployment**
	- ConfigMaps y Secrets para configuración
	- Health checks y liveness/readiness probes
- **Integración continua**
	- Pipelines con GitHub Actions o Jenkins
	- Ejemplo de workflow YAML:
		{% raw %}
```yaml
		name: Spring CI
		on: [push]
		jobs:
		  build:
		    runs-on: ubuntu-latest
		    steps:
		      - uses: actions/checkout@v4
		      - uses: actions/setup-java@v3
		        with:
		          java-version: 17
		      - run: mvn clean package
		```
{% endraw %}

---

## 9. Extensión del Framework
- **Creación de Starters Internos**
	- Definir librerías compartidas entre microservicios
	- Empaquetar beans comunes (logging, métricas, seguridad)
- **Personalización de Auto-configuración**
	- Crear clase con `@Configuration` y `@ConditionalOnClass`
	- Registrar en `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports`
- **Uso en ecosistemas empresariales**:
	- Permite estandarizar patrones y dependencias

---

## 10. Buenas Prácticas Avanzadas
- **Codebase limpia**
	- Separar módulos por responsabilidad
	- Aplicar DDD (Domain-Driven Design)
- **Testing avanzado**
	- Testcontainers para BDs reales en entornos de CI
	- MockMvc para controladores
- **Optimización y rendimiento**
	- `spring.main.lazy-initialization=true`
	- Monitoreo del contexto de beans
- **Versionado y mantenibilidad**
	- Gestionar dependencias con BOMs (`spring-boot-dependencies`)
	- Mantener versiones alineadas entre microservicios

---

## Recursos Adicionales
- [Advanced Spring Boot Concepts (dev.to)](https://dev.to/vijayskr/advanced-spring-boot-concepts-every-java-developer-should-know-4j9g)
- [Reactor Project](https://projectreactor.io/)
- [Resilience4j Docs](https://resilience4j.readme.io/)
- [Spring Cloud Reference](https://spring.io/projects/spring-cloud)
- [OpenTelemetry Java Agent](https://opentelemetry.io/docs/instrumentation/java/)

---

**Relación con otras notas**  
- [Docker](/software%20engineering/docker/) — despliegue y empaquetado  
- [microservicios](/backend/microservicios/) — comunicación, resiliencia y arquitectura  
- [Backend](/backend/backend/) — integración de servicios  
- [java](/software%20engineering/java/) — fundamentos del lenguaje  
- [Computer Science](/computer%20science/computer-science/) — patrones aplicados a Spring  
# Spring Boot – Actualización info 2025

## 🚀 Novedades Generales

- **Versión actual:** Spring Boot 3.4.x (noviembre 2024)  
	- Fin de soporte principal: **diciembre 2025**  
- **En desarrollo:** Spring Boot 3.5.x (milestone M3, 2025)  
- **Próxima versión mayor:** Spring Boot 4.0 prevista para **noviembre 2025** junto con Spring Framework 7  
- **Base tecnológica:** Jakarta EE 11 y compatibilidad con Java 21+  
- **Mantenimiento extendido:** ramas 3.2 y 3.3 finalizan soporte OSS en junio 2025  

---

## ⚙️ Cambios Técnicos Clave

### 1. Compatibilidad y entorno
- Requiere **Java 17+**, recomendado **Java 21 o 23** por soporte LTS.  
- Migración completa a `jakarta.*` en lugar de `javax.*`.  
- Mejor gestión de variables de entorno y propiedades obsoletas (avisos automáticos).  
- Integración más fluida con **Buildpacks** y **GraalVM Native Image**.  

### 2. Core y configuración
- Refactorización de auto-configuraciones en módulos más pequeños.  
- Mejora de rendimiento del arranque (AOT) y análisis de dependencias.  
- **Binding avanzado**: validación automática y detección temprana de errores de configuración.  
- Perfilado por entorno con variables personalizables (`spring.profiles.group`).  

### 3. Observabilidad y monitoreo
- Micrometer 2 y soporte nativo para [OpenTelemetry](/monitoreo/opentelemetry/).  
- Nuevos endpoints en Actuator:
	- `ssl.chains` y `ssl.chain.expiry` para métricas SSL.  
	- `application.ready` y `application.liveness` para health-checks en despliegues cloud.  
- Integración directa con herramientas de tracing distribuidas (Zipkin, Prometheus, Grafana).  

### 4. Seguridad y autenticación
- **LDAP mejorado:** nueva clase `LdapDockerComposeConnectionDetailsFactory`.  
- Nuevas métricas y trazas de autenticación.  
- Refuerzo en configuración HTTPS/SSL para conexiones a BD y mensajería.  
- Mayor integración con Spring Security 6.4 (recordatorios OAuth2, tokens JWT mejorados).  

### 5. Despliegue y contenedores
- Mejoras en imágenes nativas con **GraalVM**:  
	- Menor consumo de memoria.  
	- Compilación más rápida (optimización AOT).  
- Configuración ampliada de Tomcat embebido:
	- `server.tomcat.max-part-count`  
	- `server.tomcat.max-part-header-size`  
- Optimización para despliegues en [Docker](/software%20engineering/docker/) y [Kubernetes](/virtualizacion/kubernetes/) con detección automática de recursos.  

---

## 🧩 Integraciones y Ecosistema

- Compatibilidad completa con **Jakarta EE 11**: Servlets 6.1, JPA 3.2, Bean Validation 3.1.  
- Spring Data refactorizado con soporte para QueryDSL 6 y paginación reactiva.  
- Spring WebFlux actualizado: rendimiento mejorado, nuevas utilidades para backpressure y compatibilidad con Project Loom.  
- Spring AI: integración experimental para servicios de IA (OpenAI, Azure AI, Hugging Face).  
- Soporte extendido para **NoSQL**: MongoDB 7.x, Redis 7, Cassandra 5.  
- Spring Cloud 2025: incluye mejoras en Circuit Breaker, Config Server y observabilidad distribuida.  

---

## 🧠 Buenas Prácticas 2025

- Utilizar Java 21 con GraalVM CE para despliegues cloud-ready.  
- Activar perfiles de observabilidad (`management.metrics.export.*`).  
- Revisar dependencias en `pom.xml` con:
	{% raw %}
```bash
	./mvnw dependency:tree -Dincludes=org.springframework.boot
	```
{% endraw %}
- Adoptar arquitectura **modular y reactiva** con WebFlux o Kotlin Coroutines.  
- Externalizar configuración mediante Spring Config Server o Vault.  

---

## 📚 Recursos actualizados

- [Spring Boot 3.5.0 M3 Release Notes – GitHub](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.5.0-M3-Release-Notes)  
- [Spring Boot 4 – Spring Framework 7 Overview (Baeldung, 2025)](https://www.baeldung.com/spring-boot-4-spring-framework-7)  
- [Top 10 Must-Know Spring Boot Concepts 2025 – Coding Shuttle](https://www.codingshuttle.com/blogs/top-10-must-know-spring-boot-concepts-for-java-developers)  
- [Advanced Spring Boot Concepts 2025 – Dev.to](https://dev.to/vijayskr/advanced-spring-boot-concepts-every-java-developer-should-know-4j9g)  
- [Comprehensive Spring Boot Concepts – Medium (2025)](https://codefarm0.medium.com/comprehensive-list-of-advanced-spring-boot-concepts-every-java-developer-should-master-1e46d9e30459)  
- [Spring.io Blog – Road to GA (2025)](https://spring.io/blog/2025/09/02/road_to_ga_introduction)  
- [InfoQ – Spring News Roundup (2025)](https://www.infoq.com/news/2025/06/spring-news-roundup-jun16-2025)  

