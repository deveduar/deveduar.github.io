---
date: 2024-11-16 17:32
title: microservicios
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Backend
tags:
  - backend
  - devops
  - docker
  - microservicios
---
# microservicios

- [devops](/devops/devops/)
- [Computer Science](/computer%20science/computer-science/)
- [Backend](/backend/backend/)
- [Docker](/software%20engineering/docker/)
- [api](/backend/api/)
- [Virtualizacion](/devops/virtualizacion/)
- [microfrontend](/frontend/microfrontend/)
- microservicios-ejemplos
- Microservicios vs Microlitos vs Monolitos ventajas y desventajas-

## Conceptos fundamentales
- **Arquitectura distribuida**
	- Cada servicio es una unidad independiente que ejecuta una única responsabilidad.
	- Comunicación típica mediante HTTP/REST, gRPC, mensajería (RabbitMQ, Kafka), o eventos.
- **Endpoints**
	- Puntos de acceso públicos para interactuar con cada servicio.
	- Suelen versionarse (`/api/v1/...`) y desacoplarse mediante API Gateways.
- **Monolitos vs Microservicios**
	- **Monolito**: una única base de código, despliegue conjunto, alta cohesión, baja separación.
	- **Microservicios**: servicios independientes, despliegue autónomo, escalado granular.
	- **Microlitos**: diseño modular pero desplegado como un único artefacto.
- **Demanda y escalado**
	- Escalar horizontalmente solo los servicios que tienen mayor carga (ej. facturación, catálogo, autenticación).
	- Uso de contenedores para replicar instancias en Kubernetes, ECS, Nomad, etc.
- **Desacoplamiento**
	- Las dependencias directas se minimizan; se favorece comunicación asíncrona.
	- Bases de datos separadas por servicio para evitar coupling transaccional.
- **Resiliencia**
	- Circuit Breakers, timeouts, backoff, retry, observabilidad (logs, métricas, trazas).
- **Versionado**
	- APIs externas deben mantener compatibilidad o proporcionar múltiples versiones.
- **Observabilidad**
	- Métricas orientadas a SLIs, dashboards (Grafana), tracing distribuido (OpenTelemetry), logging centralizado.

## Implementaciones

### Con [net](/software%20engineering/net/), ASP.NET Core y Swagger
- net, swagger, SQL Server, ASP Core.
- [Curso de Microservicios (capítulo 1): Aprendiendo a crear una API mínima con .NET y SQL Azure - YouTube](https://youtu.be/LFo1Vaz3s_M)
- [GitHub - aminespinoza10/Curso-Microservicios](https://github.com/aminespinoza10/Curso-Microservicios/tree/main)
- Componentes comunes:
	- API Gateway con **YARP** o **Ocelot**.
	- Comunicación con **gRPC** para alto rendimiento.
	- Integración con **EF Core**, **Dapper** o servicios externos.
	- Uso de **Docker Compose** para orquestar varios servicios.
	- Autenticación y autorización usando **IdentityServer** u **OAuth2**.
- Prácticas habituales:
	- Versionado de controladores.
	- Implementación de CQRS y MediatR.
	- Despliegue en Azure App Services o AKS.

### Con [java](/software%20engineering/java/) [Springboot](/backend/springboot/) y [Aws](/cloud/aws/)
- [Arquitectura de MICROSERVICIOS | Conceptos | Ejemplo con Java y AWS - YouTube](https://youtu.be/NBF8fN-qnjs)
- Introducción a DDD y arquitectura hexagonal con un ejemplo de aplicación en Java
- [GitHub - manuelzapata/curso-patrones-arquitectura](https://github.com/manuelzapata/curso-patrones-arquitectura/tree/main)

#### Dominio y estructura (DDD + Hexagonal)
- **Contextos, dominios y entidades**
	- Separación por bounded contexts: billing, customers, orders, marketing, mensajería.
	- Cada dominio posee su propio modelo, reglas y repositorios.
- **Capa de dominio**
	- Entidades, agregados, repositorios y servicios de dominio.
- **Capa de aplicación**
	- Casos de uso orquestados mediante controladores o eventos.
- **Adaptadores**
	- Entrantes: REST, gRPC, colas.
	- Salientes: bases de datos, S3, SNS/SQS, DynamoDB, Kafka.
- **AWS stack típico**
	- API Gateway, Lambda o ECS, RDS/DynamoDB, SQS/SNS, EKS para orquestación.

#### Conceptos adicionales
- **Balanceo de carga**
	- ALB, NLB, o Service Mesh (Istio, Linkerd).
- **Eventos y arquitectura event-driven**
	- Integración suelta mediante mensajería.
	- Event Sourcing, CQRS cuando es necesario.
- **Containers**
	- Docker como base, ECR para imágenes, EKS/ECS para despliegue.

### Con [FastApi](/backend/fastapi/)
- Microservicios Python orientados a APIs ligeras y alto rendimiento.
- Características:
	- Validación automática con Pydantic.
	- Documentación incorporada estilo Swagger/OpenAPI.
	- Ideal para servicios especializados: IA, procesamiento de datos, autenticación ligera.
- Prácticas comunes:
	- Uvicorn/Gunicorn como servidores productivos.
	- Middlewares para logs, tracing y seguridad.
	- Distribución en Docker + Kubernetes.
- Integración:
	- RabbitMQ/Kafka para eventos.
	- Redis para cacheo y rate limiting.
	- SQLModel/PostgreSQL para persistencia.

## Bloques de código ejemplos basicos

### Ejemplo API mínima en .NET
{% raw %}
```csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/ping", () => "pong");
app.Run();
```
{% endraw %}`

### Ejemplo controlador básico en Spring Boot

{% raw %}
```java
@RestController
@RequestMapping("/orders")
public class OrderController {

	@GetMapping("/{id}")
	public OrderDTO getOrder(@PathVariable Long id) {
		return service.find(id);
	}
}
```
{% endraw %}

### Ejemplo de servicio en FastAPI

{% raw %}
```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/ping")
async def ping():
	return {"status": "ok"}
```
{% endraw %}

# microservicios – conceptos adicionales 

## Adicionales arquitectónicos
- **API Gateway avanzado**
	- Funciones: autenticación centralizada, rate limiting, agregación de respuestas, routing inteligente.
	- Patrones:
		- *BFF (Backend For Frontend)*: un gateway por tipo de cliente.
		- *Edge services*: servicios en el borde para minimizar latencia.
- **Service Mesh**
	- Añade un plano de datos que gestiona comunicación entre servicios sin modificar código.
	- Beneficios:
		- Retries, circuit breaker, mTLS, telemetría.
		- Despliegues canary, mirror traffic.
	- Ejemplos: Istio, Linkerd, Consul.

## Comunicación y patrones avanzados
- **Event Sourcing**
	- El estado del sistema se reconstruye desde eventos inmutables.
	- Útil cuando se necesita auditabilidad total.
- **Saga Pattern**
	- Orquestación o coreografía de transacciones distribuidas.
	- Garantiza consistencia eventual sin transacciones globales.
- **Outbox Pattern**
	- Asegura que los eventos se publiquen de forma atómica con la base de datos local.
- **Choreography vs Orchestration**
	- *Choreography*: servicios reaccionan a eventos sin un coordinador.
	- *Orchestration*: un servicio central dirige el flujo.

## Bases de datos en microservicios
- **Per-Service Database**
	- La regla por defecto: evitar bases de datos compartidas.
	- Permite evolución independiente del esquema.
- **Poliglot Persistence**
	- Cada servicio puede elegir su motor óptimo: SQL, NoSQL, Graph, TimeSeries.
- **Sincronización y consistencia**
	- Consistencia eventual mediante eventos.
	- Replicación de datos o *materialized views* para consultas rápidas.

## Seguridad y gobernanza
- **Zero Trust aplicado a microservicios**
	- Autenticación mutua (mTLS).
	- Autorización contextual por servicio.
- **Secret Management**
	- Vault, AWS Secrets Manager, KMS.
- **Governance API**
	- Definición de contratos, versionado, catálogo de servicios (Service Registry).

## Escalabilidad y despliegue
- **Autoescalado inteligente**
	- Basado en métricas de negocio (nº de pedidos, colas, eventos) y no solo CPU/RAM.
- **Warm pools**
	- Precalentado de instancias para responder rápido en picos de tráfico.
- **Blue/Green y Canary**
	- Prácticas estándar en Kubernetes + Service Mesh.

## Observabilidad (profundización)
- **Tracing distribuido**
	- Correlación de llamadas multi-servicio.
	- Estandarización con OpenTelemetry.
- **Logging estructurado**
	- JSON logs con claves consistentes para análisis automatizado.
- **Dashboards por dominio**
	- Observabilidad organizada por bounded context, no solo por infraestructura.
- **SLIs y SLOs**
	- Disponibilidad, latencia, error rate, saturación.

## Patrones de diseño adicionales
- **Strangler Fig Pattern**
	- Migración progresiva de monolitos hacia microservicios.
- **Anti-Corruption Layer**
	- Aislamiento del dominio cuando se integra con sistemas antiguos.
- **Bulkhead Pattern**
	- Compartimentos aislados para evitar cascadas de fallos.
- **Sidecar Pattern**
	- Funcionalidades auxiliares: logs, métricas, proxies, secrets.

## Testing en microservicios
- **Contract Testing**
	- Pact.io o Spring Cloud Contract: asegura que consumidores y proveedores cumplen el contrato.
- **Chaos Engineering**
	- Introducción controlada de fallos para asegurar resiliencia.
- **End-to-End (limitado)**
	- Deben minimizarse; lo principal es testear componentes y contratos.
- **Test de integración entre servicios**
	- Broker tests, API mocks, contenedores efímeros.

## Infraestructura y operación
- **Kubernetes avanzado**
	- Operators, CRDs, autohealing, node autoscaling.
- **Infraestructura inmutable**
	- AMIs, contenedores versionados, GitOps.
	- Herramientas: ArgoCD, Flux.
- **Service Discovery**
	- DNS, Consul, Eureka, Kubernetes nativo.
- **Edge Computing**
	- Descentralización para reducir latencia en servicios críticos.

## Modelado de dominios
- **Domain Map para microservicios**
	- Mapeo de límites, dependencias, flujos de eventos.
- **Core domains vs supporting domains**
	- Inversión en servicios core; soporte más flexible o tercerizado.
- **Context Mapping**
	- Relaciones: Partnership, Customer/Supplier, Conformist, Anti-Corruption Layer.

## Microservicios y datos analíticos
- **Event Streams como fuente de verdad**
	- Kafka como backbone del ecosistema.
- **Data Mesh**
	- Dominio como propietario de su propio *data product*.
- **Materialized Views distribuidas**
	- Lecturas rápidas en APIs mediante proyecciones.

## Seguridad para APIs públicas/privadas
- **OAuth2 / OIDC**
	- Autorización delegada.
- **mTLS interno**
	- Validación mutua entre servicios.
- **Rate Limiting**
	- Gateway + Redis para límites globales y por cliente.

## Orquestación de workflows
- **Temporal.io / Cadence / Step Functions**
	- Gestión robusta de workflows distribuidos.
	- Ideal para procesos de larga duración.

## Antipatrones comunes
- **Distributed Monolith**
	- Microservicios dependientes entre sí sin autonomía real.
- **Sobrefragmentación**
	- Servicios demasiado pequeños → complejidad excesiva.
- **Orquestación manual**
	- Integraciones ad-hoc sin patrones claros.
- **Sin ownership**
	- Equipos sin responsabilidad clara por servicio.

## Checklist de diseño
- Bounded context claro.
- Base de datos propia.
- API versionada.
- Logging estructurado.
- Tracing distribuido.
- Autoscaling definido.
- Dashboard de métricas.
- Circuit breakers.
- Pipelines CI/CD independientes.
- Estrategia de despliegue segura.

# Preparación para entrevistas de microservicios

- [microservicios](/backend/microservicios/)
- [Backend](/backend/backend/)
- [Computer Science](/computer%20science/computer-science/)
- [api](/backend/api/)
- [Docker](/software%20engineering/docker/)
- [devops](/devops/devops/)

## Enfoque general de la entrevista
- El objetivo es evaluar:
	- Dominio de arquitectura distribuida.
	- Capacidad de diseñar sistemas escalables y robustos.
	- Conocimiento de patrones avanzados (eventos, sagas, outbox, DDD).
	- Claridad en comunicación técnica.
	- Toma de decisiones razonada y orientada a negocio.

## Temas clave que debes dominar
- **Diseño de servicios**
	- Identificar bounded contexts.
	- Elegir correctamente el tamaño del servicio.
	- Definir contratos claros en APIs.
- **Comunicación**
	- REST, gRPC, mensajería.
	- Sincronía vs asincronía.
	- Event-driven: SNS/SQS, RabbitMQ, Kafka.
- **Persistencia**
	- Per-service database.
	- Replicación, materialized views, consistencia eventual.
- **Patrones esenciales**
	- Saga (orquestada / coreografiada).
	- Outbox.
	- Strangler Fig.
	- Circuit Breaker.
	- API Gateway + BFF.
- **Infraestructura**
	- Docker, Kubernetes, autoscaling.
	- CI/CD, rolling updates, canary.
- **Seguridad**
	- OAuth2, OIDC, rate limiting, mTLS.
- **Observabilidad**
	- Logs estructurados, métricas, trazas distribuidas.

## Preguntas típicas y cómo responderlas

### “Diseña un sistema de pedidos para un e-commerce usando microservicios”
**Qué evaluarían:** capacidad de descomponer el dominio, comunicación entre servicios, manejo de consistencia.

**Respuesta estructurada:**
- Bounded contexts:
	- *Orders*, *Payments*, *Inventory*, *Shipping*, *Notifications*.
- Comunicación:
	- REST para consultas simples.
	- Eventos para procesos largos (pedido creado → reservar stock → pago → envío).
- Bases de datos:
	- Cada servicio con su propia BD.
- Consistencia:
	- Patrones **Saga** y **Outbox** para coordinar pasos.
- Observabilidad:
	- Cada servicio exporta métricas + tracing con OpenTelemetry.

**Diagrama verbal de flujo:**
1. Orders crea el pedido (estado: `CREATED`).
2. Emite evento `OrderCreated`.
3. Inventory consume → reserva stock → publica `StockReserved`.
4. Payments procesa el pago → `PaymentCompleted`.
5. Orders actualiza estado a `CONFIRMED`.
6. Shipping prepara el envío.

### “¿Cómo manejar fallos en microservicios?”
**Puntos clave:**
- Retries con backoff.
- Circuit breaker para aislar fallos.
- Timeouts obligatorios.
- Compensaciones (Saga).
- Idempotencia en handlers de eventos.
- Logging estructurado para diagnósticos rápidos.

### “¿Cuándo NO usar microservicios?”
- Equipo pequeño sin capacidad de mantener complejidad.
- Dominio no bien entendido (mejor empezar monolito modular).
- Latencia extremadamente baja entre componentes.
- Requisitos de consistencia fuerte y transacciones complejas.

### “Explica escalado horizontal en microservicios”
- Replicar instancias según métricas de negocio o infraestructura.
- Usar contenedores y Kubernetes.
- Balanceadores de carga (ALB, Nginx, Envoy).
- Cada servicio escala de forma independiente según su demanda.

## Ejemplos prácticos para entrevistas

### Ejemplo: microservicio de autenticación
**Requerimientos:**
- Login/registro.
- Emisión de tokens JWT.
- Validación por un API Gateway.

**Diseño rápido:**
- Servicio *Auth* con endpoints `/login`, `/register`.
- DB propia con usuarios.
- Generación JWT con expiración.
- Gateway verifica JWT y pasa claims al servicio final.

### Ejemplo: microservicio de notificaciones
**Objetivo:** enviar emails/SMS sin bloquear flujo principal.

**Diseño:**
- Orders publica `OrderConfirmed`.
- NotificationService consume mensaje.
- Envia email/SMS usando un proveedor externo.
- Registra resultado en su propia BD.

### Ejemplo: microservicio de facturación
**Objetivo:** generar facturas PDF.

**Diseño:**
- Events: `PaymentCompleted`.
- Facturación genera factura y almacena en S3.
- API `/invoice/{id}` para descargarla.

## Preguntas de razonamiento arquitectónico
- ¿Cómo manejarías una operación que afecta a varios servicios?
	- Con **Saga** coreografiada u orquestada.
- ¿Qué harías si un servicio crítico empieza a fallar?
	- Circuit breaker + fallback + autoscaling + logs/traces.
- ¿Cómo evitarías el “distributed monolith”?
	- Bases de datos independientes.
	- APIs versionadas.
	- Evitar cross-calls excesivas.
	- Uso de eventos.

## Checklist de estudio para entrevistas técnicas
- Conocer diferencias entre monolitos, microlitos y microservicios.
- Saber dibujar arquitecturas rápidamente.
- Entender trade-offs de cada decisión.
- Dominar patrones de comunicación.
- Saber explicar consistencia eventual con ejemplos.
- Practicar explicaciones de *event-driven design*.
- Tener ejemplos claros de proyectos reales o simulados.
- Explicar cómo implementar una tubería CI/CD.
- Entender despliegues canary y blue/green.
- Tener experiencia con logs, métricas y trazas.

## Ejercicios recomendados para practicar
- Diseñar un sistema de reservas de hotel.
- Diseñar un sistema de gestión de colas (tipo soporte).
- Construir un microservicio simple con FastAPI / Spring Boot / .NET.
- Simular un flujo de eventos usando Kafka o RabbitMQ.
- Implementar idempotencia con claves de deduplicación.
- Crear una estrategia Outbox con PostgreSQL.

# Glosario de conceptos de microservicios

## Arquitectura general
- **Microservicio**
	- Servicio pequeño, autónomo, con responsabilidad única y despliegue independiente.
- **Arquitectura distribuida**
	- Sistema compuesto por múltiples servicios que cooperan entre sí.
- **Dominio**
	- Área funcional del negocio que un servicio modela y gestiona.
- **Bounded Context**
	- Límite conceptual donde un modelo de dominio tiene significado coherente.
- **Monolito**
	- Aplicación única donde todas las funcionalidades viven dentro del mismo artefacto.
- **Microlito**
	- Monolito modularizado internamente pero no desplegado de manera independiente.

## Comunicación
- **REST**
	- Protocolo estándar sobre HTTP basado en recursos y operaciones CRUD.
- **gRPC**
	- Comunicación binaria de alto rendimiento que usa Protocol Buffers.
- **Mensajería**
	- Comunicación asincrónica mediante colas o streams (RabbitMQ, Kafka).
- **Event-driven**
	- Arquitectura basada en eventos que notifican cambios en el sistema.
- **Síncrono**
	- Requiere respuesta inmediata (REST/gRPC).
- **Asíncrono**
	- No bloqueante; comunicación mediante eventos/mensajes.

## Patrones esenciales
- **Saga**
	- Mecanismo para coordinar transacciones distribuidas (orquestada o coreografiada).
- **Outbox Pattern**
	- Garantiza la publicación de eventos junto con transacciones locales.
- **CQRS**
	- Separar comandos (escrituras) de consultas (lecturas).
- **Event Sourcing**
	- Persistencia del estado como secuencia de eventos.
- **API Gateway**
	- Punto único de entrada y control para todas las APIs.
- **BFF (Backend for Frontend)**
	- Gateway especializado para cada tipo de cliente.
- **Circuit Breaker**
	- Evita llamadas a servicios que ya están fallando.
- **Bulkhead**
	- Aislamiento de recursos para evitar fallos en cascada.
- **Sidecar Pattern**
	- Colocar funciones auxiliares junto al servicio (logging, proxy, seguridad).
- **Strangler Fig**
	- Migración progresiva desde monolito hacia microservicios.

## Infraestructura y despliegue
- **Contenedores**
	- Empaquetado aislado de aplicaciones (Docker).
- **Orquestación**
	- Gestión de despliegue, escalado y salud de contenedores (Kubernetes).
- **Service Mesh**
	- Capa de red que gestiona la comunicación entre servicios: mTLS, retries, metrics.
- **Autoscaling**
	- Aumento o reducción de instancias según demanda.
- **CI/CD**
	- Automatización de integración y despliegue continuo.
- **Blue/Green Deployment**
	- Dos entornos activos; se cambia el tráfico al nuevo cuando está listo.
- **Canary Deployment**
	- Despliegue gradual con porcentaje de tráfico controlado.

## Bases de datos y persistencia
- **Per-Service Database**
	- Cada servicio posee su propia base de datos.
- **Poliglot Persistence**
	- Uso de diferentes motores según necesidades.
- **Consistencia eventual**
	- Los datos convergen con el tiempo, no de inmediato.
- **Materialized Views**
	- Proyecciones de datos generadas mediante eventos.
- **Replicación**
	- Copias de datos distribuidas para aumentar disponibilidad.

## Seguridad
- **OAuth2**
	- Protocolo de autorización.
- **OIDC**
	- Capa de identidad sobre OAuth2.
- **JWT**
	- Token basado en JSON usado para autenticación.
- **mTLS**
	- Autenticación mutua con certificados.
- **Rate Limiting**
	- Control de número de peticiones por cliente.
- **Secret Management**
	- Almacenaje seguro de credenciales y claves.

## Observabilidad
- **Logging estructurado**
	- Registros en formato JSON con claves claras para análisis automático.
- **Tracing distribuido**
	- Seguimiento de una petición a través de múltiples servicios.
- **Métricas**
	- Datos cuantitativos como latencia, uso de CPU, errores.
- **SLI**
	- Indicadores reales de servicio (latencia, disponibilidad).
- **SLO**
	- Objetivo cuantificable basado en SLIs.
- **Dashboard**
	- Interfaz visual para monitorear métricas y trazas.

## Testing en microservicios
- **Contract Testing**
	- Pruebas para asegurar que proveedores y consumidores cumplen el contrato.
- **Integration Testing**
	- Pruebas entre servicios y recursos externos.
- **End-to-End Testing**
	- Pruebas completas del flujo final del usuario.
- **Chaos Engineering**
	- Introducción de fallos controlados para validar resiliencia.
- **Mocking**
	- Simulación de servicios externos durante pruebas.

## Operación, escalado y resiliencia
- **Fallback**
	- Respuesta alternativa cuando un servicio falla.
- **Retry con Backoff**
	- Reintentos espaciados para evitar carga excesiva.
- **Timeout**
	- Tiempo máximo permitido para una operación.
- **Health Checks**
	- Comprobaciones automáticas de disponibilidad.
- **Service Discovery**
	- Ubicación dinámica de servicios (Consul, Eureka, DNS).
- **Load Balancer**
	- Distribución de tráfico entre instancias.

## Modelado de dominio (DDD)
- **Entidad**
	- Objeto con identidad estable en el dominio.
- **Valor**
	- Objeto inmutable definido solo por sus atributos.
- **Agregado**
	- Conjunto de entidades bajo una raíz lógica que garantiza consistencia.
- **Servicio de dominio**
	- Lógica que no pertenece directamente a entidades o valores.
- **Context Mapping**
	- Mapa de relaciones entre bounded contexts.

## Antipatrones
- **Distributed Monolith**
	- Microservicios con demasiadas dependencias internas.
- **Over-Engineering**
	- Fragmentar demasiado pronto sin un dominio claro.
- **Shared Database**
	- Varias APIs accediendo a la misma BD (acoplamiento).
- **Cross Calls excesivas**
	- Llamadas en cadena que aumentan latencia y fallos.
