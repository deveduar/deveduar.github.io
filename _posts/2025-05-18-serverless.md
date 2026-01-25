---
date: 2025-05-18 04:04
title: serverless
tags:
  - backend
  - server_less
  - server
  - devops
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
cssclasses:
  - hide-embedded-header1
  - wide
categories:
  - Backend
public_note: "true"
category: Backend
---
# Serverless
``$= dv.current().file.tags.join(" ")``

## Conceptos Clave
- [Backend](/uncategorized/backend/)
- [Instance Scaling](/backend/instance-scaling/)
- [Lambda Functions](/computer%20science/lambda-functions/)
	- AWS Lambda
	- Trigger: ejecución basada en eventos, sin servidor dedicado.
	- Corto: diseñado para tareas breves y acotadas.
	- Pocas ejecuciones: ideal para cargas intermitentes o picos eventuales.
	- Tiempo de respuesta: muy rápido cuando está en “warm”, puede tener “cold start”.
	- Menor costo que una [api](/backend/api/) tradicional cuando el tráfico es bajo o irregular.
	- Riesgo de recursión: cuidado con auto-disparos, bucles por eventos encadenados o colas que se reinyectan.

## Arquitectura Serverless
- Modelo totalmente administrado: no hay servidores, solo se pagan invocaciones y tiempo de ejecución.
- Escalado automático: el proveedor crea instancias efímeras para cada petición.
- Integración nativa con colas, tópicos, buckets y cron jobs.
- Ideal para sistemas reactivos, pipelines event-driven y microtareas aisladas.
- Limita el *statefulness*: los estados persistentes requieren servicios externos (bases de datos, colas, caches).

## Comparativa: ETL vs [api](/backend/api/)
- **ETL (Extract–Transform–Load)**  
	- Procesos por lotes, ventanas programadas o eventos de ingesta.  
	- Coste optimizado para cargas pesadas y puntuales.  
	- Uso frecuente de lambdas encadenadas, colas (SQS), buckets (S3) o streams (Kinesis).  
	- Permite fan-out/fan-in, paralelización masiva y flujos de datos.  
	- Tolerancia a fallos, reintentos y DLQ (Dead Letter Queue).  

- **API (interactiva, request–response)**  
	- Respuesta inmediata para clientes (web/móvil/sistema).  
	- Puede montarse con API Gateway + [Lambda Functions](/computer%20science/lambda-functions/).  
	- Adecuada para operaciones cortas, CRUD ligeros o endpoints event-driven.  
	- Si la carga se vuelve constante o pesada, puede volverse más costosa que usar contenedores o instancias gestionadas.  

## Patrones Típicos en Serverless
- Funciones múltiples pequeñas (FaaS) orientadas a un único objetivo.
- Orquestación con Step Functions (workflows, compensaciones, paralelismo).
- Event routing mediante servicios nativos (SNS, SQS, EventBridge).
- Almacenamiento serverless: DynamoDB, Firestore, FaunaDB.
- Trigger-based pipelines: cargas de archivos, notificaciones, cron, streams.
- Sistemas híbridos: serverless + contenedores para cargas largas o persistentes.

## Uso Responsable y Anti-patterns
- Evitar funciones demasiado grandes (*monolambda*).
- No abusar de ejecuciones >15 minutos (límite o mala práctica según proveedor).
- Evitar el arranque frío en sistemas críticos de baja latencia (usar provisioned concurrency).
- Prevenir bucles infinitos en triggers (S3 → Lambda → S3).
- No almacenar estado en /tmp más allá de la sesión, no es persistente.

## Casos de Uso
- Procesamiento de logs en tiempo real.
- Mini-APIs para formularios o webhooks.
- Validación de archivos cargados en buckets.
- Procesos ETL bajo demanda o en cron.
- Integración con servicios externos vía webhooks/queues.
- Automatización operativa (infra, seguridad, auditoría de eventos).

## Código – Ejemplo de Lambda en Node.js
```javascript
exports.handler = async (event) => {
	const input = event.detail || {};
	// Transformación simple
	const result = {
		received: input,
		timestamp: new Date().toISOString()
	};
	return { statusCode: 200, body: JSON.stringify(result) };
};
````

## Código – Ejemplo de Trigger EventBridge (Infra IaC)

```json
{
	"source": ["app.sales"],
	"detail-type": ["order.created"],
	"detail": {
		"orderId": ["*"]
	}
}
```


# Serverless: Conceptos Avanzados y Arquitectura 2025

## Seguridad en Entornos Serverless
- Zero-trust por función: aplicar políticas IAM mínimas para cada ejecución.
- Segmentación lógica: separar funciones por dominio y permisos.
- Rotación automática de credenciales mediante servicios gestionados.
- Gestión de secretos: uso de Secret Manager o KMS, nunca en variables de entorno planas.
- Endpoints firmados y autenticación basada en tokens efímeros.

## Observabilidad y Trazabilidad
- Logging estructurado obligatorio para pipelines y APIs serverless.
- Trazas distribuidas integradas con X-Ray, CloudTrace o OpenTelemetry.
- Métricas esenciales:
	- Duración
	- Cold starts
	- Tasa de error
	- Concurrencia
- Dashboards automatizados para picos de invocación o latencias anómalas.

## Límites y Restricciones Técnicas
- Restricciones típicas:
	- Memoria limitada por función (según proveedor).
	- Tiempo máximo de ejecución.
	- /tmp limitado y no persistente.
	- Conectividad a VPC opcional pero incrementa latencia.
- Límites de concurrencia: ajustar reservas para evitar throttling.
- Límites de tamaño:
	- Payloads de eventos
	- Tamaño del paquete de despliegue
	- Logs por invocación

## Costes y Optimización
- Principales factores de coste:
	- Invocaciones
	- Duración de ejecución
	- Concurrencia reservada
- Estrategias:
	- Reducir tiempo de arranque mediante runtimes optimizados.
	- Uso de funciones pequeñas para minimizar ejecución innecesaria.
	- Reemplazar llamadas sincrónicas por colas (más barato y resiliente).
	- Consolidar funciones solo cuando hay afinidad técnica real.

## Integraciones y Ecosistema
- Modelos event-driven basados en:
	- SNS/SQS
	- Pub/Sub
	- EventBridge
	- Streams (Kinesis/BigQuery Streaming)
- Integración natural con:
	- Bases serverless (DynamoDB, Aurora Serverless)
	- Almacenamiento de objetos
	- Sistemas de mensajería IoT
	- Webhooks externos

## Arquitecturas Híbridas
- Cuando usar serverless + contenedores:
	- Procesos largos o CPU intensivos.
	- Modelos ML que requieren GPU.
	- API de tráfico constante que encarece Lambda.
- Patrones híbridos comunes:
	- Front serverless + backend en contenedores.
	- ETL pesado en contenedores + transformación ligera en funciones.
	- Workers serverless para automatización operativa.

## Patrones de Diseño Avanzados
- Fan-out/Fan-in: procesamiento masivo paralelo con agregación al final.
- Orquestación vs coreografía:
	- Orquestación: Step Functions.
	- Coreografía: eventos entre funciones sin controlador central.
- Sidecar lógico: no existe contenedor sidecar, se reemplaza con servicios externos (logs, secrets, caches).
- Transactional outbox serverless: consistencia eventual con colas + streams.

## Casos de Uso Avanzados
- Procesamiento de eventos en *real-time analytics*.
- Validación y enriquecimiento de datos en streaming.
- Data mesh serverless (product teams independientes).
- Automatización de gobernanza y compliance.
- Offloading de tareas de sistemas legacy mediante eventos.

## Heading: Código – Métrica de Cold Start (OTel)
```javascript
import { trace } from "@opentelemetry/api";

const tracer = trace.getTracer("lambda");
exports.handler = async () => {
	const span = tracer.startSpan("cold-start-check");
	span.end();
	return "ok";
};
````

## Heading: Código – Patrón Fan-out con Mensajería

```json
{
	"fanout": {
		"topic": "events.data.raw",
		"subscribers": [
			"lambda.cleaner",
			"lambda.enricher",
			"lambda.dispatcher"
		]
	}
}
```

# Glosario Serverless
## Conceptos Generales
- **Serverless**: Modelo donde la infraestructura es totalmente gestionada y se paga por uso.
- **FaaS (Function as a Service)**: Ejecución de funciones desencadenadas por eventos.
- **BaaS (Backend as a Service)**: Servicios backend mantenidos por el proveedor (auth, storage, DB).
- **Event-driven**: Arquitectura basada en eventos que activan procesos.
- **Cold Start**: Latencia inicial cuando la función arranca sin estar en memoria.
- **Warm Start**: Función ya inicializada, tiempo de respuesta bajo.
- **Concurrencia**: Número de ejecuciones simultáneas permitidas para una función.

## Integraciones y Triggers
- **Trigger**: Evento que activa una función.
- **Cron Serverless**: Programación de ejecuciones periódicas sin servidores.
- **Webhook**: Notificación externa que dispara una ejecución.
- **EventBridge / Event Router**: Sistema para enrutar eventos entre servicios.
- **Fan-out**: Disparar múltiples funciones a partir de un solo evento.
- **Fan-in**: Agregar resultados múltiples en un único proceso.

## Procesos ETL y Datos
- **ETL**: Extract, Transform, Load; procesamiento por lotes o eventos.
- **Streams**: Flujos continuos de datos, útiles para procesamiento en tiempo real.
- **DLQ (Dead Letter Queue)**: Cola de mensajes fallidos para análisis.
- **Ingestion Pipeline**: Circuito de entrada de datos compuesto por triggers, colas y funciones.
- **Idempotencia**: Garantía de que un proceso repetido no causa duplicados.

## Componentes Operativos
- **IAM**: Control de permisos a nivel función/servicio.
- **Secret Manager**: Gestión segura de credenciales.
- **VPC Integration**: Conexión de funciones a redes privadas.
- **Provisioned Concurrency**: Mantener instancias precalentadas.
- **Throttling**: Límite impuesto cuando se supera la concurrencia configurada.

## Patrones de Diseño
- **Orquestación**: Secuencia centralizada de pasos (p.ej. Step Functions).
- **Coreografía**: Eventos independientes que coordinan procesos.
- **Circuit Breaker**: Prevención de fallos repetidos ante servicios externos inestables.
- **Retry Policy**: Configuración de reintentos automáticos.
- **Transactional Outbox**: Garantiza entrega de eventos sin pérdida.
- **Bulk Processing**: Procesamiento de lotes en una única invocación.

## Rendimiento y Costes
- **Execution Time**: Duración total de la función, afecta al coste.
- **Memory Allocation**: Memoria asignada que impacta precio y velocidad.
- **Payload Size**: Tamaño máximo permitido para solicitudes o respuestas.
- **Timeout**: Límite de tiempo de ejecución.
- **Billing Granularity**: Unidad mínima de facturación (ms, GB-segundo).
- **Warm Pools**: Técnicas para mantener instancias listas para cargar.

## Observabilidad y Logs
- **Structured Logging**: Logs en formato JSON para análisis.
- **Tracing**: Seguimiento de solicitudes entre servicios.
- **Metrics**: Indicadores clave (errores, duración, concurrencia).
- **Monitoring Dashboard**: Vista de rendimiento en tiempo real.
- **Alerting**: Notificaciones basadas en umbrales o anomalías.

## Anti-patterns Comunes
- **Monolambda**: Función gigante con demasiado código.
- **Stateful Functions**: Guardar estado dentro de la función en vez de fuera.
- **Exceso de Llamadas Sincrónicas**: Aumenta costes y latencia.
- **Bucles de Eventos**: Triggers recursivos accidentales.
- **Sobredimensionar Memoria**: Costes innecesarios sin beneficio real.

## Arquitecturas Híbridas
- **Serverless + Contenedores**: Combina funciones y microservicios persistentes.
- **Batch Containers**: Tareas largas movidas a contenedores temporales.
- **Data Lake Serverless**: Procesos ligeros con almacenamiento en objetos.
- **API Híbrida**: Endpoint serverless para tráfico bajo + contenedores para tráfico constante.
