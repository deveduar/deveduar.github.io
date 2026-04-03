---
date: 2025-11-19 16:56
title: OpenTelemetry
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: monitoreo
tags:
  - monitoreo
  - telemetry
  - open_telemetry
---
# OpenTelemetry
- [monitoreo](/monitoreo/monitoreo/)
- [Docker](/software%20engineering/docker/)

- [OpenTelemetry](https://opentelemetry.io/)
- [What is OpenTelemetry? | OpenTelemetry](https://opentelemetry.io/docs/what-is-opentelemetry/)
- [Docker deployment | OpenTelemetry](https://opentelemetry.io/docs/demo/docker-deployment/)

OpenTelemetry es un **estándar abierto** para la generación, recolección, procesamiento y exportación de telemetría (métricas, trazas y logs). Unifica el ecosistema de observabilidad proporcionando APIs, SDKs, agentes y un Collector capaz de trabajar con múltiples protocolos y backends.

Su objetivo principal es **eliminar la dependencia del proveedor**, simplificar la observabilidad y adoptar un modelo consistente para aplicaciones distribuidas (microservicios, contenedores, serverless, etc.).

---

## Conceptos Fundamentales de OpenTelemetry

### *Signals* de Telemetría
OpenTelemetry trabaja con tres tipos principales de señales:

- **Trazas (Traces)**  
	Representan el recorrido de una petición a través de varios servicios.  
	- Span: unidad mínima de una traza.  
	- Trace ID: correlación completa de la solicitud.

- **Métricas (Metrics)**  
	Valores numéricos y agregables para medir estado del sistema.  
	Ej.: latencia, uso de CPU, throughput.

- **Logs**  
	Registros semiestructurados con contexto adicional, integrados ahora en el pipeline estándar del Collector.

### Componentes Clave

- **APIs y SDKs**  
	Incorporados en tu aplicación para instrumentar código en lenguajes como Java, Go, Python, JS, .NET, Rust, PHP, etc.

- **Auto-Instrumentación**  
	Inserta automáticamente spans, métricas y logs sin modificar código (cuando el lenguaje lo soporta).

- **OpenTelemetry Collector**  
	Un servicio altamente configurable que:
	- Recibe telemetría.
	- La procesa mediante *pipelines*.
	- La exporta a backends como Jaeger, Prometheus, Grafana Tempo, Loki, Elastic, Datadog, etc.

- **Protocolo OTLP**  
	Formato estándar (HTTP/gRPC) para enviar telemetría entre servicios y Collector.

---

## Ventajas Clave

- **Neutralidad frente a proveedores**  
	Se integra con cualquier backend de análisis y almacenamiento.

- **Escalabilidad y Flexibilidad**  
	Puede desplegarse como:
	- *Agent*: en cada host/sidecar.
	- *Gateway*: centralizado.
	- Híbrido.

- **Configuración Declarativa**  
	Pipelines que permiten:
	- Filtración  
	- Enriquecimiento con atributos  
	- Transformaciones con Processors  
	- Sampling avanzado  

- **Estandarización del Ecosistema**  
	Reducción del acoplamiento con agentes propietarios.

---

## Arquitectura General

Servicio → SDK/Auto-Inst → Collector → Procesamiento → Backend

- Las aplicaciones generan telemetría.
- El Collector unifica toda la gestión.
- La exportación es modular y reemplazable sin cambiar el código de la aplicación.

---

## Proceso Completo de Gestión de Logs con OpenTelemetry

La gestión de logs con OTel se integra en un *pipeline unificado* junto con métricas y trazas.

1. **Instrumentación y Recolección**
	- SDKs o auto-instrumentación generan logs con contexto de trazas (trace_id, span_id).
	- Receivers del Collector aceptan logs desde:
		- OTLP
		- FluentBit / Fluentd
		- Syslog
		- Filelog receiver (lectura directa de archivos)

2. **Centralización e Indexación**
	- El Collector consolida todos los logs.
	- Permite normalización previa a enviarlos a backends como:
		- Loki
		- Elastic
		- Splunk
		- ClickHouse
		- S3 (archiving)

3. **Procesamiento y Análisis**
	- **Transform Processor** para enriquecer entradas.
	- **Attribute Processor** para limpiar/renombrar.
	- **Groupby / batch / filter** para control de volumen.
	- **Correlation**: une traces ↔ logs ↔ métricas.

4. **Monitoreo y Alertas**
	- Los logs se visualizan y correlacionan con dashboards y reglas de alerta externas.

5. **Dashboards**
	- Dashboards en Grafana, Kibana u otros backends.
	- Integración nativa con Prometheus para métricas.

---

## Despliegue de OpenTelemetry con Docker

Desplegar el Collector con Docker proporciona un entorno reproducible y portable.

---

## Ejemplo de Configuración del Collector

Crear un archivo `otel-collector-config.yaml`:

{% raw %}
```yaml
receivers:
	otlp:
		protocols:
			grpc:
			http:
	filelog:
		include: ["/var/log/*.log"]
		start_at: beginning

processors:
	batch:
		timeout: 5s
		transient_error_removal: true
	attributes:
		actions:
			- key: service.environment
				value: "production"
				action: upsert
	resource:
		attributes:
			- key: host.name
				action: insert
	transform:
		log_statements:
			- context: log
				statements:
					- replace(match(attributes["level"], "warn"), attributes["level"], "warning")

exporters:
	logging:
		loglevel: debug
	prometheus:
		endpoint: "0.0.0.0:8889"
	otlphttp:
		endpoint: "http://localhost:4318"

service:
	pipelines:
		traces:
			receivers: [otlp]
			processors: [batch]
			exporters: [logging]
		metrics:
			receivers: [otlp]
			processors: [batch]
			exporters: [prometheus]
		logs:
			receivers: [otlp, filelog]
			processors: [batch, attributes, transform]
			exporters: [logging]
```
{% endraw %}`

---

## Ejecutar el Collector con Docker

{% raw %}
```bash
docker run -p 4317:4317 -p 4318:4318 -p 8889:8889 \
	-v $(pwd)/otel-collector-config.yaml:/etc/otel/config.yaml \
	otel/opentelemetry-collector:latest \
	--config=/etc/otel/config.yaml
```
{% endraw %}

---

## Docker Compose (Collector + Sistema Extensible)

Archivo `docker-compose.yml`:

{% raw %}
```yaml
version: '3'
services:
	otel-collector:
		image: otel/opentelemetry-collector:latest
		container_name: otel-collector
		volumes:
			- ./otel-collector-config.yaml:/etc/otel/config.yaml
		command: ["--config=/etc/otel/config.yaml"]
		ports:
			- "4317:4317"   # OTLP gRPC
			- "4318:4318"   # OTLP HTTP
			- "8889:8889"   # Prometheus exporter

	jaeger:
		image: jaegertracing/all-in-one
		ports:
			- "16686:16686"
			- "14250:14250"
```
{% endraw %}

Lanzar los servicios:

{% raw %}
```bash
docker compose up -d
```
{% endraw %}

---

## Casos de Uso Relevantes

- Observabilidad completa de **microservicios**.
- Monitoreo para **entornos Kubernetes** mediante auto-instrumentación y agentes.
- Obtención de telemetría para **API Gateways**, **Service Mesh** (Istio/Envoy), Sidecars.
- Uso en pipelines de seguridad (detección de outliers mediante logs).
- Unificación de telemetría en sistemas multi-backend.

---

## Buenas Prácticas

- Usar OTLP siempre que sea posible (estándar moderno).
- Mantener Collector separado del plano de aplicación.
- Aplicar _sampling_ avanzado para reducir costos en traces.
- Versionar los pipelines del Collector.
- Añadir atributos consistentes (service.name, env, version).

---

# Prácticas Recomendadas para Pipelines de OpenTelemetry Collector

## Introducción
Esta nota recopila prácticas recomendadas para diseñar pipelines sólidos en el **OpenTelemetry Collector**, asegurando recolección confiable, escalabilidad global, gobernanza del flujo de datos y compatibilidad en arquitecturas complejas (service mesh, multi-región, multi-nube y despliegues progresivos).

Los pipelines siguen la estructura:
{% raw %}
```

receivers → processors → exporters

```
{% endraw %}

---

## Principios Generales de Diseño
- Pipelines cortos y especializados (evitar pipelines "todo en uno").
- Separar **pipelines por tipo de señal**: logs, métricas, traces.
- Mantener configuraciones modulares usando `include`, `yaml anchors` o toolings.
- Minimizar parsers complejos en el Collector (hacerlo antes si es posible).
- Estrategia de **redudancia**: al menos 2 collectors por zona/region.
- Diseñar con **backpressure awareness** (cola, batch, memory_limiter).

---

## Receivers: Buenas Prácticas
### Configuración recomendada
- Usar OTLP gRPC como protocolo principal (más eficiente que HTTP).
- Habilitar TLS siempre que sea posible.
- Mantener puertos dedicados por señal.
- Evitar receptores experimentales en producción.

### Recomendaciones clave
- Separar receivers por servicio/entorno (dev/stage/prod).
- En service mesh, usar sidecar o gateway (ingestión por agente local).
- Para logs, preferir receivers nativos (filelog, journald, docker).

---

## Processors: Prácticas Recomendadas
Los processors son el corazón del pipeline. Las prácticas más importantes:

### Processors esenciales a incluir
- `batch`: casi obligatorio en producción.
- `memory_limiter`: evitar OOM y caídas.
- `attributes`: enmascarar datos sensibles.
- `resource`: añadir metadata (cluster, región, servicio).
- `filter`: para higiene y eliminación de ruido.
- `transform`: normalización avanzada (OTTL).

### Orden recomendado
{% raw %}
```

memory_limiter → batch → transform → resource → attributes → filter

```
{% endraw %}

### Estándares
- Normalizar nombres de servicios antes de exportar.
- Eliminar trazas ruidosas (health checks repetitivos).
- Enriquecer con etiquetas obligatorias:
	- `cloud.region`
	- `k8s.cluster.name`
	- `deployment.environment`
	- `service.version`

---

## Exporters: Buenas Prácticas
### Reglas generales
- Exportar a múltiples backends sólo mediante **pipelines separados** (no mezclar).
- Evitar exporters que carezcan de capacidades de reintento.
- Usar OTLP como formato estándar hacia data-lakes o collectors centrales.

### Patrones de exportación
- Local → Gateway → Backend
- Local → Gateway → Enriquecimiento → Multiples destinos
- Multi-región con failover automático (OTLP multi-endpoint)

### Exporters recomendados
- OTLP exporter (estándar)
- Prometheus exporter (para métricas)
- Loki export vía gateway intermedio
- Kafka exporter para arquitecturas streaming-first

---

## Pipelines en Service Mesh (Istio/Linkerd)
### Recomendaciones
- Recibir telemetría directamente desde sidecars.
- Filtrar tráfico interno no relevante (pings, probes).
- Enriquecer con etiquetas del mesh:
	- `mesh.traffic.direction`
	- `mesh.source_workload`
	- `mesh.destination_workload`

### Procesamiento estándar
- Normalizar trazas duplicadas generadas por sidecars.
- Correlación automática entre spans de mesh y spans de app.

---

## Pipelines Multi-Región / Multi-Cluster
### Arquitectura recomendada
{% raw %}
```

Agente Local (Pod/VM)
→ Collector Regional
→ Collector Global
→ Backend(s)

```
{% endraw %}`

### Buenas prácticas
- Exportación regional → corte por región, no global.
- Enriquecer con `cloud.region`, `k8s.cluster.name`.
- Rollouts graduales de pipelines:
	1. Región secundaria
	2. Región menos crítica
	3. Región principal

### Mesh multi-cluster
- Alinear nombres de servicios entre clusters para evitar cardinalidad infinita.
- Normalizar latencias entre clusters.

---

## Pipelines para Canary Releases
### Objetivos
- Observar versiones canary vs stable en paralelo.
- Validar latencia, errores y throughput por versión.

### Prácticas recomendadas
- Añadir atributo `service.version` o `deployment.version`.
- Filtrado avanzado por versión usando OTTL:
	{% raw %}
```yaml
	processors:
		filter/canary:
			traces:
				include:
					match_type: strict
					attributes:
						service.version: "canary"
	```
{% endraw %}

- Exportadores distintos:
	- Canary → backend temporal
	- Estable → backend principal

- Activar comparación automática en dashboards.

---

## Pipelines con Enriquecimiento Avanzado (OTTL)
### Casos de uso
- Reducción de cardinalidad en métricas.
- Limpieza de logs sensibles.
- Reglas para mover atributos entre signals.

### Ejemplo de regla OTTL
{% raw %}
```yaml
- set(attributes["http.method"], "REDACTED") where attributes["http.method"] == "TRACE"
```
{% endraw %}`

---

## Gobernanza y Control de Calidad del Pipeline

### Prácticas esenciales

* Versionar configuraciones del Collector como IaC.
* Tests automatizados de configuración (Conftest, OPA).
* Validaciones de schema OTEL vía CI.
* No aplicar nuevas reglas sin:

  1. Canary interno del Collector
  2. Métricas de fallback
  3. Pruebas de compatibilidad

### Monitorizar el Collector mismo

* CPU, memoria, dropped spans/logs/metrics.
* Export failures.
* Queue length.
* Latencias internas.

---

## Seguridad

* TLS obligatorio entre agentes y collectors.
* Firmar binarios del collector.
* Sanitizar logs automáticamente:

  * Tokens
  * Emails
  * IPs sensibles
* Aislar collectors por función:

  * Ingestión
  * Procesamiento pesado
  * Exportación

---

## Ejemplos de Arquitecturas Recomendadas

### 1. Pipeline Complejo Estándar

{% raw %}
```
Agent (host/app)
	→ Collector Local
		→ Processor: batch, attributes, transform
	→ Collector Global
		→ Exporters: Prometheus, Jaeger, Loki, Kafka
```
{% endraw %}

### 2. Service Mesh + Multi-Cluster

{% raw %}
```
Sidecars Istio
	→ Node Agent
	→ Cluster Collector
	→ Global Collector
```
{% endraw %}

### 3. Canary vs Stable

{% raw %}
```
Local Collector
	→ Pipeline A (stable)
	→ Pipeline B (canary)
	→ Backends separados
```
{% endraw %}

---

## Checklist Final de Mejores Prácticas

1. Separar pipelines por señal.
2. Always-on processors: `memory_limiter` + `batch`.
3. Normalización estricta de recursos.
4. Filtrar ruido (health checks, tráficos internos).
5. Exportar con OTLP siempre que sea posible.
6. Multi-región escalonado.
7. Pipelines paralelos para canary.
8. Validar collectors con tests y canaries.
9. Monitorear el propio collector.
10. Documentar el flujo completo (Mermaid).

# OpenTelemetry — Conceptos Avanzados y Arquitectura Profunda

## Modelo de Arquitectura Avanzada

OpenTelemetry proporciona distintos patrones de despliegue según el tipo de carga, topología y madurez de la observabilidad. Estos patrones se combinan para asegurar resiliencia y minimizar el acoplamiento.

### Patrones de Despliegue

- **Collector como Gateway Único**
	- Todos los servicios envían telemetría a un Collector central.
	- Ideal para entornos con control de latencia y un solo dominio de red.

- **Collector como Sidecar**
	- Un Collector por servicio o pod.
	- Garantiza aislamiento, reduce overhead en la aplicación y permite procesar localmente.

- **Collector por Nodo (Node Agent)**
	- Muy común en Kubernetes.
	- Ideal para recolectar métricas del host, logs de nodos y telemetría de contenedores.

- **Híbrido**
	- Combinación de sidecars + gateway centralizado.
	- Da resiliencia y reducción de cargas hacia el backend.

---

## OpenTelemetry y Service Mesh

Service Mesh (como **Istio**, **Linkerd**, **Consul**) transforma la forma de generar telemetría:

- Los proxies (Envoy) generan:
	- Métricas (latencia, errores, throughput)
	- Spans automáticos de solicitudes entre servicios
	- Logs de acceso enriquecidos

- OpenTelemetry integra directamente con Envoy via:
	- **OTLP Access Log Service**
	- **HTTP/gRPC tracing service**
	- **In-band context propagation**

### Beneficios

- Correlación automática entre tráfico L7 y servicios upstream/downstream.
- Eliminación de instrumentación manual en muchas rutas.
- Observabilidad “zero-touch”.

---

## Context Propagation

La propagación de contexto evita “trazas partidas”.  
OpenTelemetry implementa **W3C TraceContext**, **Baggage** y formatos heredados.

Tipos de contexto:

1. **Trace Context**  
	Propaga `trace_id`, `span_id`, `trace_flags`.

2. **Baggage**  
	Atributos arbitrarios que viajan por todas las capas:  
	ej. `user_id`, `tenant`, `region`.

3. **Custom Propagators**
	- Se usan para compatibilidad con sistemas legados.
	- Pueden transformar o añadir metadata para correlación.

---

## Sampling Avanzado

OpenTelemetry incluye modelos flexibles para controlar el volumen de trazas.

### Estrategias de Sampling

- **Always On**  
	100% de las trazas. Útil en entornos de desarrollo.

- **Always Off**  
	No captura spans excepto manuales.

- **TraceIDRatioBased**
	Captura un porcentaje configurable.

- **ParentBased**
	Hereda la decisión del span padre.

- **Tail Sampling (Collector)**  
	El más poderoso:
	- Permite seleccionar trazas basadas en atributos.
	- Ejemplo:
		- Errores 100%.
		- Latencias >500ms.
		- Usuarios premium.

Se ejecuta en el Collector (no en los SDK), permitiendo decisiones basadas en la traza completa.

---

## Procesadores Avanzados

Además del *batch processor*, existen procesadores más específicos:

- **tailsampling processor**
	- Decide qué trazas conservar.

- **filter processor**
	- Permite incluir/excluir telemetría según reglas.

- **resourcedetection processor**
	- Detecta automáticamente información de:
		- Kubernetes
		- AWS / GCP / Azure
		- Host
		- VM metadata

- **routing processor**
	- Envía distintos pipelines a diferentes exportadores.
	- Ejemplo: métricas → Prometheus, trazas → Tempo, logs → Loki.

---

## Exporters y Backends Compatibles

OpenTelemetry soporta una amplia gama de destinos:

### Exporters Populares

- **Tempo** (traces)
- **Jaeger**
- **Zipkin**
- **Prometheus**
- **Loki** (logs)
- **Elastic**
- **Kafka** (buffer y recolección masiva)
- **S3 / GCS / Azure Blob** (archiving)
- **OTLP exporter** para encadenar múltiples Collectors

### Exporters Empresariales

- Datadog
- New Relic
- Dynatrace
- Lightstep
- Splunk
- Honeycomb
- AppDynamics

---

## Receivers Especializados

OpenTelemetry Collector puede recibir telemetría desde múltiples fuentes:

- **hostmetrics receiver**
	- CPU, memoria, filesystem, network, loadavg.
- **kubeletstats receiver**
	- Métricas de pods y containers.
- **journald receiver**
	- Logs de sistemas Linux.
- **syslog receiver**
- **filelog receiver**
- **prometheus receiver**
	- Actúa como un Prometheus server parcial.
- **tail sampling receiver**
	- Ingresa trazas de sampling avanzado.

---

## Instrumentación Automática (Auto-Instrumentation)

Disponible en:

- **Java Agent**
- **Node.js**
- **Python**
- **.NET**
- **Go (con wrappers)**
- **Ruby**
- **PHP**
- **Rust (en evolución)**

### Ventajas

- No requiere modificar código.
- Inserta spans en:
	- HTTP servers/clients  
	- DB drivers  
	- ORMs  
	- MQ (Kafka, RabbitMQ)  
	- Frameworks web  

---

## OpenTelemetry en Kubernetes: Recolección Completa

Patrón típico:

- Collector modo **DaemonSet**
	- Recepción de:
		- Logs de contenedores via filelog receiver  
		- Métricas node/hostmetrics  
		- Métricas kubeletstats  
	- Exportación a backend

- Collector modo **Deployment**
	- Recibe OTLP de aplicaciones
	- Hace tail sampling
	- Reenvía trazas filtradas

- Sidecar opcional para apps sin SDK nativo

---

## Integración con Herramientas CI/CD

- Publicar *service version* como recurso.
- Añadir atributos como:
	- `deployment.environment`
	- `build.commit`
	- `build.pipeline.id`
- Permite correlación entre despliegues y degradaciones.

---

## Observabilidad Unificada

OpenTelemetry permite:

- Correlación *logs ↔ traces ↔ metrics*
- Atribuir métricas a spans
- Insertar logs enriquecidos dentro de spans
- Crear paneles de:
	- errores por ruta  
	- latencias por servicio  
	- anomalías por log pattern  
	- saturación de recursos  

---

## Patrones de Diseño en Observabilidad

- **RED Metrics** (Rate, Errors, Duration)
- **USE Metrics** (Utilización, Saturación, Errores)
- **SLOs basados en trazas**
- **Análisis de cuellos de botella con spans jerárquicos**

---

## Casos de Uso Avanzados

- Observabilidad para sistemas **event-driven** (Kafka, NATS, RabbitMQ).
- Monitoreo de pipelines ML con trazas de etapas.
- Trazabilidad distribuida en **APIs multi región**.
- Recolección de logs masivos en entornos edge.
- Telemetría para sistemas IoT mediante OTLP/HTTP.


# OpenTelemetry — Ejemplos de Pipelines Completos

Esta nota recopila pipelines listos para usar en el Collector, cada uno diseñado para un caso de uso real distinto. Incluye trazas, métricas y logs, así como enrutamiento avanzado, transformaciones, sampling y exportación a múltiples backends.

---

## Pipeline 1 — Traces + Tail Sampling + Exportación Múltiple

{% raw %}
```yaml
receivers:
	otlp:
		protocols:
			http:
			grpc:

processors:
	batch:
	tailsampling:
		policies:
			- name: errors
				type: status_code
				status_code:
					statuses: ["ERROR"]
			- name: high_latency
				type: latency
				latency:
					threshold_ms: 500
			- name: user_premium
				type: string_attribute
				string_attribute:
					key: user.tier
					values: ["premium"]

exporters:
	otlp:
		endpoint: tempo:4317
		tls:
			insecure: true
	logging:
		loglevel: info

service:
	pipelines:
		traces:
			receivers: [otlp]
			processors: [tailsampling, batch]
			exporters: [otlp, logging]
```
{% endraw %}`

**Aporta:**
✓ Mantiene 100% de errores
✓ Guarda trazas lentas
✓ Sampling condicional por atributos
✓ Exporta simultáneamente a Tempo y logs

---

## Pipeline 2 — Logs desde archivos + Normalización + Loki

{% raw %}
```yaml
receivers:
	filelog:
		include: ["/var/log/app/*.log"]
		start_at: beginning
		operators:
			- type: regex_parser
				regex: '^(?P<ts>[^ ]+) (?P<level>[^ ]+) (?P<msg>.*)$'
				timestamp:
					parse_from: ts
					layout: "%Y-%m-%dT%H:%M:%SZ"

processors:
	filter:
		logs:
			include:
				match_type: regexp
				expressions:
					- 'attributes["level"] == "ERROR"'
	attributes:
		actions:
			- key: level
				action: update
				value: error

exporters:
	loki:
		endpoint: http://loki:3100/loki/api/v1/push

service:
	pipelines:
		logs:
			receivers: [filelog]
			processors: [filter, attributes]
			exporters: [loki]
```
{% endraw %}

**Aporta:**
✓ Ingresa logs desde archivos
✓ Aplica parsing con regex
✓ Solo guarda errores
✓ Envía a Loki

---

## Pipeline 3 — Métricas del Host + Node Exporter Replacement

{% raw %}
```yaml
receivers:
	hostmetrics:
		collection_interval: 10s
		scrapers:
			cpu:
			memory:
			filesystem:
			network:
			load:

processors:
	batch:

exporters:
	prometheus:
		endpoint: 0.0.0.0:9090

service:
	pipelines:
		metrics:
			receivers: [hostmetrics]
			processors: [batch]
			exporters: [prometheus]
```
{% endraw %}

**Aporta:**
✓ Reemplaza a node_exporter
✓ Métricas del sistema
✓ Exposición en /metrics

---

## Pipeline 4 — Enrutamiento según tipo de señal → (Prometheus, Tempo, Loki)

{% raw %}
```yaml
receivers:
	otlp:
		protocols:
			grpc:
			http:

processors:
	batch:

exporters:
	prometheus:
		endpoint: 0.0.0.0:9000
	otlp_tempo:
		endpoint: tempo:4317
		tls:
			insecure: true
	loki:
		endpoint: http://loki:3100/loki/api/v1/push

service:
	pipelines:
		metrics:
			receivers: [otlp]
			processors: [batch]
			exporters: [prometheus]

		traces:
			receivers: [otlp]
			processors: [batch]
			exporters: [otlp_tempo]

		logs:
			receivers: [otlp]
			processors: [batch]
			exporters: [loki]
```
{% endraw %}

**Aporta:**
✓ Separación por señal
✓ Ideal para Grafana Stack (Tempo + Loki + Prometheus)

---

## Pipeline 5 — Kubernetes Logs + Metadata Enrichment

{% raw %}
```yaml
receivers:
	filelog:
		include: ["/var/log/containers/*.log"]
		include_file_path: true
		operators:
			- type: container_parser

processors:
	k8sattributes:
		filter:
			node_from_env_var: K8S_NODE_NAME
	metadata:
		annotations:
			extract: ["team", "project"]
			replace: ["owner"]
	labels:
		extract: ["app", "pod_template_hash"]
	batch:

exporters:
	loki:
		endpoint: http://loki:3100/loki/api/v1/push

service:
	pipelines:
		logs:
			receivers: [filelog]
			processors: [k8sattributes, batch]
			exporters: [loki]
```
{% endraw %}

**Aporta:**
✓ Recolecta logs de contenedores Kubernetes
✓ Enrich con metadata del pod
✓ Team / project / owner
✓ Exportación a Loki

---

## Pipeline 6 — Métricas Prometheus + Reetiquetado → OTLP

{% raw %}
```yaml
receivers:
	prometheus:
		config:
			scrape_configs:
				- job_name: "apps"
					static_configs:
						- targets: ["app1:8080", "app2:8080"]

processors:
	attributes:
		actions:
			- action: insert
				key: environment
				value: staging

exporters:
	otlp:
		endpoint: collector-upstream:4317
		tls:
			insecure: true

service:
	pipelines:
		metrics:
			receivers: [prometheus]
			processors: [attributes]
			exporters: [otlp]
```
{% endraw %}

**Aporta:**
✓ Collector actuando como mini Prometheus
✓ Reetiquetado
✓ Exportación vía OTLP

---

## Pipeline 7 — Logs + Traces Correlacionados (Insertar TraceID en Logs)

{% raw %}
```yaml
receivers:
	otlp:
		protocols:
			grpc:
			http:

processors:
	resource:
		attributes:
			- key: service.source
				value: "api-gateway"
				action: upsert
	transform:
		log_statements:
			- context: log
				statements:
					- set(attributes["trace_id"], trace_id)
					- set(attributes["span_id"], span_id)

exporters:
	loki:
		endpoint: http://loki:3100/loki/api/v1/push
	otlp:
		endpoint: tempo:4317
		tls:
			insecure: true

service:
	pipelines:
		logs:
			receivers: [otlp]
			processors: [resource, transform]
			exporters: [loki]

		traces:
			receivers: [otlp]
			processors: [resource]
			exporters: [otlp]
```
{% endraw %}

**Aporta:**
✓ Enriquecimiento automático
✓ Inserta trace_id/span_id en logs
✓ Correlación garantizada en Loki + Tempo

---

## Pipeline 8 — Kafka como Buffer de Telemetría

{% raw %}
```yaml
receivers:
	otlp:
		protocols:
			http:
			grpc:

processors:
	batch:

exporters:
	kafka:
		protocol_version: 2.0.0
		brokers: ["kafka:9092"]
		topic: otel-telemetry
		encoding: otlp_json

service:
	pipelines:
		traces:
			receivers: [otlp]
			processors: [batch]
			exporters: [kafka]

		metrics:
			receivers: [otlp]
			processors: [batch]
			exporters: [kafka]

		logs:
			receivers: [otlp]
			processors: [batch]
			exporters: [kafka]
```
{% endraw %}

**Aporta:**
✓ Buffer masivo
✓ Ideal para cargas muy altas
✓ Telemetría enviada a Kafka para procesadores offline

---

## Pipeline 9 — Filtrado Avanzado (Excluir Salud, Incluir Errores 5xx)

{% raw %}
```yaml
receivers:
	otlp:

processors:
	filter:
		traces:
			exclude:
				match_type: regexp
				expressions:
					- 'attributes["http.target"] == "/health"'
		transform:
			trace_statements:
				- context: span
					statements:
						- keep_if(attributes["http.status_code"] >= 500)

exporters:
	logging:
	otlp:
		endpoint: tempo:4317
		tls:
			insecure: true

service:
	pipelines:
		traces:
			receivers: [otlp]
			processors: [filter, transform]
			exporters: [logging, otlp]
```
{% endraw %}

**Aporta:**
✓ Excluye tráfico irrelevante (/health)
✓ Solo guarda spans 5xx
✓ Reduce consumo de backend

---

## Pipeline 10 — Collector como Router por Atributos (Multi-Tenant)

{% raw %}
```yaml
receivers:
	otlp:
		protocols:
			grpc:

processors:
	routing:
		from_attribute: tenant
		table:
			tenantA: [exporter_a]
			tenantB: [exporter_b]
			default: [exporter_default]

exporters:
	exporter_a:
		endpoint: tempo-a:4317
		tls:
			insecure: true
	exporter_b:
		endpoint: tempo-b:4317
		tls:
			insecure: true
	exporter_default:
		endpoint: tempo-default:4317
		tls:
			insecure: true

service:
	pipelines:
		traces:
			receivers: [otlp]
			processors: [routing]
			exporters: [exporter_default]
```
{% endraw %}

**Aporta:**
✓ Multi-tenant real
✓ Routing por atributo
✓ Ideal para SaaS

# Pipelines CI/CD Avanzados

## Pipeline 1: Despliegue Multi-Región + Service Mesh (Istio) + Validación Automática
Pipeline orientado a empresas que despliegan la misma app en varias regiones con control de tráfico inteligente.

### Flujo
1. **Trigger**
	- Commit → Build incremental optimizado.
2. **Build**
	- Imagen Docker con firma (cosign).
	- SBOM generado (Syft, Trivy).
3. **Tests**
	- Unit → Integration → Contract tests.
	- e2e simulando regiones (mock de edge routers).
4. **Infra as Code**
	- Terraform plan para `eu-west-1` y `us-east-1`.
	- Validación automática con OPA/Conftest.
5. **Despliegue a Staging**
	- Helm chart aplicado.
	- Inyección automática de sidecars Istio.
6. **Service Mesh Checks**
	- Pruebas de:
		- mTLS
		- Policies
		- VirtualServices / DestinationRules correctas
7. **Shadow Traffic**
	- 5% de tráfico real replicado a la nueva versión sin afectar usuarios.
8. **Despliegue Multi-Región**
	- Orden:
		1. Región secundaria (`eu-west-1`)
		2. Región primaria (`us-east-1`)
	- Cada paso exige health checks de mesh + app.
9. **Rollback automático**
	- Basado en métricas:
		- p95 latency
		- error_rate
		- 5xx spikes
10. **Notificación + Auditoría**
	- Slack + registro en CMDB + firma de artefactos.

### Artefactos Generados
- Imagen versionada y firmada.
- Terraform plan + apply logs.
- Helm release.
- Reporte de observabilidad/métricas.

---

## Pipeline 2: Canary Progressive Delivery con Argo Rollouts + Tracking Inteligente
Pipeline usado para despliegues de alto riesgo donde el canario se evalúa por métricas, no por tiempo.

### Flujo
1. **Trigger**
	- PR con revisión obligatoria.
2. **Build**
	- Docker + análisis estático (Sonar, CodeQL).
3. **Tests avanzados**
	- Mutation testing.
	- API contract verificando backward compatibility.
4. **Deploy Canary con Argo Rollouts**
	- Weight inicial: 1%
	- Pasos automáticos:
		- 1% → 5% → 25% → 50% → 100%
		- Sólo si:
			- error_rate < 0.5%
			- Latencia p95 < 200ms
			- No hay degradación en logs (Loki / ELK)
5. **Canary Tracking Inteligente**
	- ML simple (Z-score) para detectar anomalías.
	- Evaluación en tiempo real de usuarios reales.
6. **Experimentos A/B dentro del canario**
	- Sólo usuarios chrome verán la nueva feature.
7. **Rollback Automático**
	- Si hay spike de errores o aumento de latencia:
		- Rollback inmediato.
		- Cierre del rollout + alerta a equipo.
8. **Promoción**
	- Argo marca el despliegue como “Stable”.
	- Kubernetes actualiza todos los replicasets.

### Integraciones
- Argo Rollouts
- Prometheus/Grafana para métricas
- Loki para logs
- OPA para políticas
- Sentry para errores

---

## Pipeline 3: Microservicios con Service Mesh + Testing de Resiliencia + Chaos Engineering
Modelo empresarial orientado a resiliencia en tiempo real.

### Flujo
1. **Build por servicio**
	- Cada servicio genera su propio artefacto.
	- Build caching + Reproducible builds.
2. **Tests**
	- Unitarios
	- Contract (Pact)
	- e2e distribuidos simulando fallos de red
3. **Despliegue a entorno Mesh**
	- Inyección de sidecar Envoy.
	- Configuración automática de:
		- Retries
		- Timeouts
		- Circuit Breakers
4. **Chaos Tests Automáticos**
	- Escenario:
		- Matar pods aleatorios.
		- Inject latency 200ms.
		- Drop 10% de paquetes.
5. **Validación de Resiliencia**
	- Golden signals deben mantenerse:
		- Latency
		- Traffic
		- Errors
		- Saturation
6. **Promoción**
	- Si resiliencia ≥ threshold, se publica.
7. **Rollback**
	- Si resiliencia se degrada, rollback inmediato.

---

## Pipeline 4: Multi-Cloud Activo/Activo con Replicación de Datos
Despliega en AWS + GCP simultáneamente.

### Flujo
1. **Build y firma**
	- Docker + cosign.
2. **Terraform Multi-Cloud**
	- AWS:
		- EKS
		- RDS
	- GCP:
		- GKE
		- CloudSQL
3. **Sincronización de Datos**
	- CDC (Change Data Capture) con Debezium.
	- Replicación entre nubes.
4. **Despliegue Blue/Green**
	- En ambas nubes.
5. **Routing Global**
	- Cloudflare / Traffic Director:
		- 50% tráfico AWS
		- 50% tráfico GCP
6. **Failover Automático**
	- Si un proveedor cae:
		- Todo el tráfico se redirige a la otra nube.
7. **Promoción**
	- Se sincroniza la versión “green” como master.

---

## Pipeline 5: Infraestructuras Regulatorias con Auditoría y Gates de Seguridad
Diseñado para entornos fintech/health.

### Flujo
1. **Build**
	- Imagen Docker escaneada (Clair/Trivy).
	- Comprobación SBOM obligatoria.
2. **Tests**
	- Unit → Integration → Compliance tests.
3. **Security Gates**
	- CodeQL
	- SAST
	- DAST
	- OPA para políticas de infraestructura
	- Comprobaciones de secreto (git-secrets)
4. **Infra as Code**
	- Terraform + Sentinel (políticas obligatorias)
5. **Despliegue a Entorno Aislado**
	- Zero-trust networking.
	- Service mesh mTLS obligatorio.
6. **Aprobación Manual (Dual Approval)**
	- Dos personas distintas deben aprobar.
7. **Despliegue controlado**
	- Blue/Green
	- Validación con test automatizados post-deploy
8. **Auditoría**
	- Registro inmutable (Loki / Elasticsearch / AWS AuditLogs).

# Prácticas Recomendadas para Pipelines CI/CD

## Introducción
Esta nota resume un conjunto de **buenas prácticas avanzadas** para diseñar, implementar y gestionar pipelines CI/CD robustos, auditables y altamente escalables. Está orientada a entornos modernos con contenedores, orquestadores, IaC, service mesh, multi-región y despliegues progresivos.

---

## Diseño General del Pipeline
Un pipeline debe ser **modular, declarativo, idempotente** y **observable**. Cada etapa debe aportar valor, validar calidad o asegurar consistencia entre cambios.

### Principios clave
- Minimizar la lógica imperativa en el pipeline.
- Usar archivos declarativos: YAML, Terraform, Helm, Kustomize.
- Evitar pipelines monolíticos → fomentar pipelines por servicio/módulo.
- Mantener tiempos de ejecución predecibles y razonables.
- Todo cambio debe ser auditable y reproducible.

---

## Fase de Build
### Recomendaciones
- Builds determinísticas (reproducible builds).
- Cacheo agresivo: dependencias, compilación, capas Docker.
- Versionado semántico automatizado o convencional (SemVer).
- Generación de **SBOM** con Syft/Trivy.
- Firmas de artefactos (cosign, sterna).

### Artefactos generados
- Imágenes Docker inmutables.
- Binarios, librerías, charts o manifests empaquetados.

---

## Fase de Testing
### Tipos de pruebas a incluir
- Unitarias: rápidas y completas.
- Integración: red, I/O, bases de datos.
- Contratos: validación entre microservicios.
- E2E: simulación de usuario real.
- Mutación: resistencia de las pruebas.
- Regresión: escenarios críticos.
- Performance: latencias, cargas sostenidas.
- Seguridad: SAST, DAST, secret scanning.

### Buenas prácticas
- Fallar rápido (fail-fast).
- Paralelizar tests.
- Generar reportes: cobertura, resultados y métricas.

---

## Fase de Seguridad (DevSecOps)
### Checks recomendados
- Análisis estático de código (CodeQL, Sonar).
- Análisis dinámico (DAST).
- Escaneo de dependencias.
- Validación de IaC con OPA/Conftest/Sentinel.
- Comprobación de políticas de seguridad obligatorias.
- Escaneo de contenedores antes de publicar.

### Reglas clave
- No despliegue sin firmar imágenes.
- Eliminación automática de secretos incrustados.
- Zero-trust en todos los entornos.

---

## Fase de Infraestructura como Código (IaC)
### Prácticas
- Modo “plan → review → apply” siempre.
- Revisar y versionar todos los cambios.
- Validar políticas y configuración antes del apply.
- Aplicar en entornos siempre iguales (ephemeral environments).

### Recomendaciones
- Estandarizar módulos/proveedores Terraform.
- Integrar Helm, Kustomize o ArgoCD para Kubernetes.

---

## Despliegues Progresivos
### Estrategias recomendadas
- **Blue/Green**: alta seguridad.
- **Canary**: despliegue gradual basado en porcentajes.
- **Shadow**: replicación de tráfico real sin impacto.
- **Feature flags**: desacoplar deploy de release.

### Reglas de oro
- Los despliegues deben ser reversibles automáticamente.
- Guardar siempre métricas pre y post-release.
- Reducir riesgos basándose en observabilidad, no en tiempos.

---

## Multi-Región y Multi-Cloud
### Buenas prácticas
- Despliegues regionales escalonados.
- Sincronización de estados y metadatos.
- Control de versión homogéneo entre regiones.
- Replicación/CDC para bases de datos.
- Failover automático con health checks globales.

### Consideraciones
- La región secundaria debe probarse primero.
- Evitar drift entre configuraciones multi-nube.

---

## Service Mesh en Pipeline
### Validaciones obligatorias
- Inyección de sidecars correcta.
- mTLS forzado.
- VirtualServices y DestinationRules validados.
- Retries, timeouts, circuit breaking testeados.
- Observabilidad: métricas y trazas de sidecar.

### Prácticas avanzadas
- Validar políticas de tráfico antes del rollout.
- Ensayos de resiliencia dentro del pipeline (latency injection).

---

## Observabilidad Integrada
### Métricas recomendadas
- P95/P99 latency.
- Error rate.
- Throughput.
- Saturación.
- Health de endpoints críticos.
- Logs clave y trazas distribuidas.

### Reglas
- No promover una versión si hay degradación.
- Integrar Prometheus, Grafana, Loki, OpenTelemetry.

---

## Automatización de Rollbacks
### Criterios típicos
- Spike de errores 5xx.
- Aumento en latencia p95/p99.
- Downtime detectado por health checks.
- Anomalías en logs detectadas por ML simple.

### Prácticas
- Rollback automático debe ser inmediato.
- Registrar siempre razón del rollback.
- Mantener política de retención para imágenes previas.

---

## Gobernanza, Auditoría y Cumplimiento
### Reglas de compliance
- Aprobaciones dobles en entornos regulados.
- Trazabilidad completa del pipeline.
- Logs inmutables de auditoría.
- Controles de acceso RBAC/ABAC en CI/CD.
- Escaneo automático de permisos excesivos.

### Integración
- CMDB, sistemas ITSM, plataformas de auditoría.

---

## Eficiencia y Confiabilidad del Pipeline
### Recomendaciones
- Niveles de caché bien diseñados.
- Ejecución de jobs en paralelo.
- Workers escalables y autoservicio.
- Uso de pipelines efímeros por PR.
- Reutilización de módulos, plantillas y jobs estándar.

---

## Gestión de Secretos
### Prácticas
- Nada de secretos en repositorios.
- Rotación obligatoria.
- Uso de Vault, KMS, SOPS o Sealed Secrets.
- Acceso basado en identidad, no en archivos.

---

## Buenas Prácticas para Monorepos y Multi-Repo
### Monorepo
- Determinar cambios para ejecutar sólo pipelines necesarios.
- Caching optimizado.
- Dependencias aisladas por servicio.

### Multi-Repo
- Pipelines independientes y reproducibles.
- Versionado estricto entre servicios.

---

## Entornos efímeros (Preview Environments)
### Beneficios
- Cada PR se prueba en un entorno real.
- Pruebas E2E reales sin afectar otros equipos.
- Acelera el merge y reduce bugs.

---

## Documentación y Conocimiento
- Documentar pipelines con diagrams-as-code (Mermaid).
- Mantener un catálogo de procesos CI/CD.
- Registrar flujos de despliegue y estándares.

---

## Lista Resumida de Prácticas Recomendadas
1. Pipelines declarativos y modulares.  
2. Build reproducible + firma de artefactos.  
3. Pruebas completas (unit, integration, contract, e2e).  
4. Validaciones de seguridad en cada paso.  
5. IaC revisado y auditado antes de aplicar.  
6. Despliegues progresivos (canary/blue-green).  
7. Observabilidad integrada y accionable.  
8. Rollbacks automáticos basados en métricas.  
9. Multi-región escalonado.  
10. Service mesh validado en pipeline.  
11. Gestión estricta de secretos.  
12. Entornos efímeros para pruebas realistas.  
13. Auditoría y cumplimiento obligatorios.  
14. Documentación actualizada y accesible.  

---

