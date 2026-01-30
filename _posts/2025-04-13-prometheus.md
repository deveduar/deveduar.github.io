creation date: 2025-04-14 01:50
tags:
  - monitoreo
  - prometheus
keywords:
source:
status: 🌟
Parent: "Area-Sistemas"
cssclasses:
  - hide-embedded-header1
  - wide
categories: "[monitoreo](/monitoreo/monitoreo/)"
public_note: "true"
# prometheus

  * [monitoreo](/monitoreo/monitoreo/)
  * [Docker](/software%20engineering/docker/)
  * Grafana
  * [Kubernetes](/virtualizacion/kubernetes/)
  * Traefik
## Arquitectura de Prometheus
Prometheus es un sistema de monitorización orientado a métricas que sigue un modelo **pull**, altamente fiable y ligero. Su arquitectura se compone de varios elementos clave:

- **Prometheus Server**
	- Responsable de scrapear targets, guardar series temporales y ejecutar queries (PromQL).
	- Incluye:
		- *Scrape Manager*: extrae métricas vía HTTP.
		- *TSDB (Time Series Database)*: almacena métricas en bloques inmutables optimizados.
		- *Query Engine*: ejecuta consultas PromQL.
- **Exporters**
	- Componentes que exponen métricas en formato comprendido por Prometheus.
	- Tipos principales:
		- *Node Exporter*: métricas del sistema.
		- *App-specific Exporters*: MySQL, Redis, Nginx, etc.
		- *Custom Exporters*: desarrollados para aplicaciones propias.
- **Service Discovery**
	- Descubre dinámicamente targets en entornos dinámicos.
	- Integraciones: Kubernetes, Consul, EC2, Docker Swarm, archivos estáticos.
- **Alertmanager**
	- Gestión de alertas, deduplicación, inhibición, rutas y notificaciones.
	- Integración con email, Slack, PagerDuty, Webhooks, etc.
- **Pushgateway**
	- Permite registrar métricas de jobs efímeros que no pueden ser scrapeados.

## Métricas en Prometheus
Las métricas siguen un formato estructurado basado en **series temporales** con *labels*:

- **Tipos de métricas**
	- *Counter*: valores crecientes (ej: peticiones).
	- *Gauge*: valores que suben y bajan (ej: RAM utilizada).
	- *Histogram*: distribución en buckets, útil para latencia.
	- *Summary*: percentiles calculados localmente.
- **Buenas prácticas**
	- No abusar de labels con alta cardinalidad.
	- Mantener consistencia entre nombres y etiquetas.
	- Usar `snake_case` para nombres.
	- Usar prefijos adecuados (`http_`, `process_`, `go_`, etc.).

## Consultas PromQL
PromQL es un lenguaje muy expresivo para consultas de series temporales.

### Operaciones básicas
- Selección:
	- `metric_name`
	- `metric_name{label="value"}`
- Filtros:
	- `!=`, `=~`, `!~`
- Rango:
	- `rate(http_requests_total[5m])`

### Operaciones avanzadas
- Agregaciones:
	- `sum by (job) (rate(metric[1m]))`
	- `avg`, `max`, `min`, `count`, `histogram_quantile`
- Funciones comunes:
	- `rate()`, `irate()`, `increase()`
	- `predict_linear()`
	- `label_replace()`
	- `histogram_quantile(0.95, ...)`
- *Vector matching* para combinar métricas:
	- `sum(rate(a[5m])) / sum(rate(b[5m]))`
	- `on()`, `ignoring()`, `group_left`, `group_right`

### Ejemplos
#### Peticiones por segundo
{% raw %}
```promql
rate(http_requests_total[1m])
```
{% endraw %}`

#### Latencia P95 desde histogram

{% raw %}
```promql
histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))
```
{% endraw %}

#### Uso de CPU por job

{% raw %}
```promql
sum by (job) (rate(process_cpu_seconds_total[5m]))
```
{% endraw %}

## Alertas con Prometheus y Alertmanager

Las alertas se definen en archivos YAML y el servidor las evalúa continuamente.

### Componentes

* **Reglas de alerta (alerting rules)**
	* Expresiones PromQL que definen condiciones de disparo.
* **Alertmanager**
	* Encargado del envío, agrupación y silencios.

### Propiedades de alertas

* *Severity* (`warning`, `critical`)
* *For*: periodo de tiempo antes de disparar
* *Labels* y *Annotations*

### Ejemplo de alerta

{% raw %}
```yaml
groups:
- name: cpu_high
  rules:
  - alert: HighCPUUsage
    expr: rate(process_cpu_seconds_total[5m]) > 0.8
    for: 2m
    labels:
      severity: critical
    annotations:
      summary: "Uso de CPU alto"
      description: "El proceso {{ $labels.instance }} está usando >80% CPU."
```
{% endraw %}

## Despliegues y Docker
Imagen recomendada:
* Bitnami:
  * [https://hub.docker.com/r/bitnami/prometheus](https://hub.docker.com/r/bitnami/prometheus)
### Ejemplo de `docker-compose.yml`

{% raw %}
```yaml
services:
  prometheus:
    image: bitnami/prometheus
    container_name: prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/opt/bitnami/prometheus/conf/prometheus.yml
```
{% endraw %}

# prometheus (avanzado)

## TSDB Interno (Time Series Database)
La TSDB es el núcleo de Prometheus, optimizada para métricas de series temporales.

- **Estructura de Bloques**
	- Cada bloque contiene un rango de tiempo (por defecto 2h).
	- Componentes:
		- *Chunks*: segmentos comprimidos de datos.
		- *Index*: asignación de series → chunks.
		- *Meta.json*: metadatos del bloque.

- **WAL (Write-Ahead Log)**
	- Registro temporal en disco antes de compaction.
	- Acelera recuperación tras fallos.
	- Archivos: `00000001`, `00000002`…

- **Compaction**
	- Proceso que combina bloques pequeños en bloques mayores.
	- Elimina datos duplicados.
	- Optimiza compresión y almacenamiento.

- **Retención**
	- Controlada por flags:
		- `--storage.tsdb.retention.time`
		- `--storage.tsdb.retention.size`
	- Recomendado ajustar según cardinalidad y capacidad.

## Service Discovery Avanzado
Permite detectar dinámicamente instancias sin configuración estática.

- **[Kubernetes](/virtualizacion/kubernetes/) SD**
	- Tipos soportados:
		- *Pod*, *Endpoints*, *Service*, *Node*
	- Permite recolectar métricas en entornos altamente dinámicos.

- **File-Based SD**
	- Archivos JSON/YAML que se actualizan dinámicamente.
	- Útil para entornos con orquestadores propios.

- **Relabeling (clave en entornos dinámicos)**
	- Transforma labels antes del scrape.
	- Acciones:
		- `replace`, `keep`, `drop`, `hashmod`, `labelmap`
	- Usos:
		- Filtrado de targets.
		- Normalización de etiquetas.
		- Agrupación de métricas.

## Relabeling Detallado
### `relabel_configs`
Aplicado a targets antes del scrape.
{% raw %}
```yaml
relabel_configs:
  - source_labels: [__address__]
    regex: "(.+):80"
    replacement: "$1:9100"
    target_label: __address__
```
{% endraw %}`

### `metric_relabel_configs`

Perfecto para reducir cardinalidad tras el scrape.

{% raw %}
```yaml
metric_relabel_configs:
  - source_labels: [pod]
    regex: "test-.*"
    action: drop
```
{% endraw %}

## Federation

Permite que un Prometheus consulte a otros Prometheus para consolidar métricas.

- **Casos de uso**
    - Monitorización global y agregada.
    - Jerarquías multinodo.
    - Desacoplar scraping de agregación.
- **Modelos**
    - _Federación simple_: nodo A → nodo B.
    - _Federación jerárquica_: múltiples niveles.
    - _Federación selectiva_: solo métricas necesarias (`match[]`).

## Remote Write / Remote Read

Clave para escalabilidad y almacenamiento a largo plazo.
- **Remote Write**
    - Envía métricas a sistemas externos:
        - Thanos
        - Cortex / Mimir
        - VictoriaMetrics
        - InfluxDB remotamente
    - Diseñado para ingestión a gran escala.
- **Remote Read**
    - Permite consultar datos históricos almacenados remotamente.
- **Casos prácticos**
    - Métricas ilimitadas con almacenamiento externo.
    - Reducción de presión sobre la TSDB local.

## Prometheus en Kubernetes

### Prometheus Operator / kube-prometheus-stack

Facilita despliegues complejos con CRDs.
- **CRDs clave**
    - `ServiceMonitor`: descubre servicios.
    - `PodMonitor`: descubre pods.
    - `PrometheusRule`: reglas de alertas y grabación.
    - `Probe`: health checks externos.

### Ventajas
- Autogestión del ciclo de vida.
- Auto-scraping.
- Alertmanager configurado dinámicamente.
### Ejemplo de ServiceMonitor

{% raw %}
```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: app-monitor
spec:
  selector:
    matchLabels:
      app: myapp
  endpoints:
    - port: http
      interval: 15s
```
{% endraw %}

## Alertas Avanzadas

### Recording Rules

Permiten precalcular series para mejorar performance.

{% raw %}
```yaml
groups:
- name: recording
  rules:
  - record: job:http_requests:rate1m
    expr: rate(http_requests_total[1m])
```
{% endraw %}

### SLOs / SLIs

Alertas basadas en fiabilidad a nivel de servicio.

{% raw %}
```promql
sum(rate(http_request_errors_total[5m]))
/
sum(rate(http_requests_total[5m]))
> 0.01
```
{% endraw %}

### Alertas multi-etapa

Combinar recording rules + alertas para eficiencia y claridad.
## Seguridad

- **HTTPS**
    - Soportado, pero muchas veces se protege vía reverse proxy.
- **Autenticación**
    - No incluida nativamente → usar Nginx, Traefik, OAuth2-proxy.
- **Restricciones**
    - Network Policies
    - Firewalls
    - Control de acceso a endpoints `/api/v1/*`

## Escalabilidad y Limitaciones

- **Cardinalidad**
    - El factor más crítico.
    - Evitar etiquetas dinámicas: `pod_id`, `uuid`, `ip`, etc.
- **Límites del TSDB**
    - Diseñado para un solo nodo por instancia.
    - No distribuido.
    - Sharding via múltiples Prometheus o vía Thanos/Mimir.
- **Optimización**
    - Reducir frecuencias de scrape innecesarias.
    - Usar recording rules en vez de queries complejas repetidas.
    - Purgar métricas de alta cardinalidad con `metric_relabel_configs`.

# prometheus (casos de uso)

## Introducción
Esta guía reúne **casos de uso reales** y patrones prácticos para aplicar Prometheus de forma efectiva en diferentes entornos. Cada caso incluye su objetivo, enfoque recomendado y ejemplos útiles.

## Monitorización de Infraestructura
### Sistema Operativo y Servidores
- **Objetivo**
	- Monitorear CPU, RAM, disco, redes y procesos del sistema.
- **Enfoque**
	- Usar *Node Exporter* en cada nodo.
	- Crear recording rules para CPU y discos.
- **Ejemplo de métrica**
	{% raw %}
```promql
	node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes
	```
{% endraw %}

### Máquinas Virtuales / Bare Metal
- **Objetivo**
	- Visibilidad completa de hardware.
- **Enfoque**
	- Node Exporter + Textfile Collector para scripts adicionales.

## Monitorización de Aplicaciones
### Aplicaciones HTTP
- **Objetivo**
	- Medir peticiones, errores, latencias y throughput.
- **Enfoque**
	- Usar *client libraries* (Go, Python, Java, Node.js).
	- Exponer `/metrics` con histogramas.
- **Ejemplo**
	{% raw %}
```promql
	histogram_quantile(0.95, sum(rate(http_server_requests_seconds_bucket[5m])) by (le))
	```
{% endraw %}

### Microservicios
- **Objetivo**
	- Observar dependencias, tiempos de respuesta, límites.
- **Enfoque**
	- Exportar métricas por servicio.
	- Agregar `service`, `endpoint`, `version` como labels.
- **Casos comunes**
	- Detección de cuellos de botella.
	- Balanceo de carga.

## Monitorización en Kubernetes
### Descubrimiento Automático
- **Objetivo**
	- Scrape dinámico sin modificar configuraciones manuales.
- **Enfoque**
	- `ServiceMonitor` y `PodMonitor` con el Operator.
- **Ejemplo de query**
	{% raw %}
```promql
	sum by (namespace) (kube_pod_container_resource_limits_cpu_cores)
	```
{% endraw %}

### Estado del Clúster
- **Objetivo**
	- Salud de nodos, pods, schedulers y control plane.
- **Enfoque**
	- kube-state-metrics + cadvisor + apiserver metrics.

### Autoscaling Basado en Métricas
- **Objetivo**
	- Ajustar replicas según carga real.
- **Enfoque**
	- HPA con Prometheus Adapter.

## Monitorización de Bases de Datos
### PostgreSQL / MySQL
- **Objetivo**
	- Queries Lentas, conexiones, locks, uso de buffers.
- **Exporters**
	- postgres_exporter
	- mysqld_exporter
- **Ejemplo**
	{% raw %}
```promql
	rate(pg_stat_activity_total[5m])
	```
{% endraw %}

### Redis
- **Objetivo**
	- Latencia, keys, evicciones, hits vs misses.
- **Exporters**
	- redis_exporter

## Monitorización de Redes
### Routers / Switches (SNMP)
- **Objetivo**
	- Tráfico, errores, temperatura, estado de interfaces.
- **Enfoque**
	- Usar snmp_exporter con targets generados.
- **Ejemplo**
	{% raw %}
```promql
	rate(if_in_octets[1m])
	```
{% endraw %}

### Proxies y Gateways (Nginx / Traefik)
- **Objetivo**
	- Latencia, tráfico, errores y saturación.
- **Exporters**
	- nginx exporter
	- traefik metrics nativas

## Monitorización de Jobs Batch / ETL
### Jobs que no viven suficiente para ser scrapeados
- **Objetivo**
	- Monitorizar estados de ejecuciones cortas.
- **Enfoque**
	- Usar *Pushgateway*.
- **Ejemplo**
	{% raw %}
```promql
	sum by (job) (push_time_seconds)
	```
{% endraw %}

## Observabilidad de Contenedores
### Docker
- **Objetivo**
	- CPU, memoria, IO por contenedor.
- **Enfoque**
	- cadvisor en nodos.
- **Ejemplo**
	{% raw %}
```promql
	rate(container_cpu_usage_seconds_total[1m])
	```
{% endraw %}

### Críticas por Saturación
- **Objetivo**
	- Detectar contenedores en throttling.
- **Ejemplo**
	{% raw %}
```promql
	rate(container_cpu_cfs_throttled_seconds_total[5m])
	```
{% endraw %}

## SLOs y SLIs
### Error Budget
- **Objetivo**
	- Garantizar niveles de servicio (p. ej. 99.9%).
- **Enfoque**
	- recording rules con windows largos (30d).
- **Ejemplo**
	{% raw %}
```promql
	1 - (sum(rate(http_request_errors_total[30d])) / sum(rate(http_requests_total[30d])))
	```
{% endraw %}

## Capacidad y Rendimiento
### Predicción de Crecimiento
- **Objetivo**
	- Detectar saturación inminente.
- **Enfoque**
	- `predict_linear()`
- **Ejemplo**
	{% raw %}
```promql
	predict_linear(node_filesystem_free_bytes[1h], 4*3600)
	```
{% endraw %}

## Alertas Reales Usadas en Producción
### CPU Alta
{% raw %}
```promql
sum by (instance) (rate(process_cpu_seconds_total[5m])) > 0.8
```
{% endraw %}`

### Memoria Faltante

{% raw %}
```promql
node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes < 0.15
```
{% endraw %}

### Latencia Web Elevada

{% raw %}
```promql
histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 0.5
```
{% endraw %}

## Integraciones con el Ecosistema

- Grafana
- [Docker](/software%20engineering/docker/)
- [monitoreo](/monitoreo/monitoreo/)
- [Kubernetes](/virtualizacion/kubernetes/)