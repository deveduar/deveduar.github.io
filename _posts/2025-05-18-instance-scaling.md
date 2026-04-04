---
date: 2025-05-18 03:59
title: Instance Scaling
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Backend
tags:
  - backend
  - devops
  - scaling
---
# Instance Scaling


## Conceptos Clave
- [Backend](/backend/backend/)
- [devops](/devops/devops/)
- [Databases](/databases/databases/)
- [Auto Scaling](/cloud/auto-scaling/)
- cache
	- [redis](/databases/redis/)
- [Kubernetes](/virtualizacion/kubernetes/)
- [Docker](/software%20engineering/docker/)
- [proxy](/backend/proxy/)
	- [nginx](/backend/nginx/)
	- load balancing
- clustering
- escalado horizontal container
	- ESS [Aws](/cloud/aws/) [Kubernetes](/virtualizacion/kubernetes/) EKS
	- containers, balanceo de carga
- [Lambda Functions](/computer%20science/lambda-functions/)
	- uso del server
	- proceso se apaga corto [microservicios](/backend/microservicios/)
	- api geta
- [node.js](/backend/node-js/)
	- Scaling Node.js Applications- Strategies and Challenges - by Logistic InfoTech - Medium
	- Scaling Node.js Applications- Techniques and Best Practices - DEV Community

## Fundamentos del Escalado
- Tipos:
	- Escalado horizontal: añadir más instancias o contenedores.
	- Escalado vertical: aumentar recursos por instancia.
- Estrategias:
	- Basado en métricas de CPU, RAM, IO o tiempo de respuesta.
	- Basado en colas/eventos para cargas asíncronas.
	- Autoscaling programado vs. dinámico.
- Objetivos:
	- Mantener rendimiento bajo alta demanda.
	- Optimizar costes.
	- Garantizar resiliencia y disponibilidad.

## Backend y Arquitectura
- Patrón stateless: facilita escalado horizontal.
- Uso de cache distribuida para reducir carga en [Databases](/databases/databases/).
- Separación de responsabilidades: [microservicios](/backend/microservicios/) o servicios modulares.
- Optimización de I/O: streaming, compresión, chunked responses.
- Health checks para detectar fallos y retirarlos del balanceo.

## Node.js y Escalado
- Escalado de procesos:
	- Cluster nativo (`cluster`) para usar múltiples cores.
	- [PM2](/backend/pm2/) para gestión de procesos, reinicios y clustering.
- Equilibrio de carga:
	- Externo: [nginx](/backend/nginx/), ELB/ALB (AWS).
	- Interno: worker threads o colas de trabajo.
- Prácticas recomendadas:
	- Mantener la aplicación stateless.
	- Mover sesiones a [redis](/databases/redis/).
	- Evitar bloqueos: usar async/await, workers para CPU-bound.
- Monitoreo:
	- Herramientas como Prometheus + Grafana.
	- Logs estructurados para debug distribuido.

## Caching y Rendimiento
- Tipos:
	- Cache de aplicación.
	- Cache distribuida ([redis](/databases/redis/)).
	- Cache reverse proxy.
- Patrones:
	- Cache-aside.
	- Write-through.
	- TTLs adecuados para evitar datos obsoletos.
- Objetivos:
	- Reducir latencia.
	- Disminuir número de queries a [Databases](/databases/databases/).
	- Soportar tráfico pico.

## Kubernetes y Orquestación
- Componentes relevantes:
	- Deployments: replicasets para escalado horizontal.
	- Horizontal Pod Autoscaler (HPA): según CPU, memoria o métricas personalizadas.
	- Vertical Pod Autoscaler (VPA): ajusta recursos por pod.
	- Cluster Autoscaler: escala nodos según demanda.
- Prácticas:
	- Health checks (`liveness`/`readiness` probes).
	- ConfigMaps y Secrets gestionados externamente.
	- Operadores para lógica avanzada de autoscaling.

## Docker y Contenedores
- Imagenes ligeras (Alpine, distroless).
- Optimización:
	- Capas mínimas.
	- Uso de multi-stage builds.
- Escalado:
	- Replicación a nivel de orquestador.
	- Networking para balanceo interno.
- Seguridad:
	- Limitar capacidades.
	- Firmado/verificación de imágenes.

## Proxy, Balanceo y Redes
- [nginx](/backend/nginx/):
	- Reverse proxy.
	- Load balancing round-robin, least connections, IP hash.
	- Cache de contenido estático.
- Balanceadores:
	- L7 (ALB, NGINX, Traefik) para rutas, headers y reglas.
	- L4 (ELB, HAProxy) para tráfico TCP/UDP.
- Optimización:
	- TLS termination.
	- Rate limiting y circuit breakers.

## Clustering y Distribución
- Clustering de servicios:
	- Coordinación con etcd, Consul o Zookeeper.
- Sincronización:
	- Locks distribuidos (Redis Redlock, Zookeeper).
- Alta disponibilidad:
	- Nodos redundantes.
	- Failover automático.

## Escalado Horizontal en Contenedores
- ESS (Elastic Service Scaling):
	- Integración con [Aws](/cloud/aws/) EKS.
	- Ajuste dinámico de pods, nodos y balanceo.
- Consideraciones:
	- Recursos de CPU/memoria bien definidos.
	- Pod disruption budgets para actualizaciones seguras.
	- Estrategias de rolling updates.

## [Lambda Functions](/computer%20science/lambda-functions/) y Serverless
- Características:
	- Compute efímero.
	- Se apaga cuando no se usa → ahorro en costes.
- Patrones:
	- Microservicios desacoplados mediante eventos (SNS, SQS).
	- APIs vía API Gateway (REST/WebSocket).
- Limitaciones:
	- Duración máxima por ejecución.
	- Conexiones persistentes limitadas.
	- Arranques en frío.
- Buenas prácticas:
	- Código mínimo y rápido de cargar.
	- Uso de capas externas.
	- Métricas y tracing con X-Ray.

## Código: Ejemplo de Autoscaling [Kubernetes](/virtualizacion/kubernetes/) (HPA)
{% raw %}
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 2
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```
{% endraw %}`

## Código: Ejemplo de Cluster Node.js con [PM2](/backend/pm2/)

{% raw %}
```bash
pm2 start app.js -i max
pm2 monit
pm2 reload all
```
{% endraw %}

## Código: Ejemplo de Cache-aside con Redis y Node.js

{% raw %}
```javascript
const redis = require("redis");
const client = redis.createClient();

async function getUser(id) {
	const cacheKey = `user:${id}`;
	const cached = await client.get(cacheKey);
	if (cached) return JSON.parse(cached);

	const user = await db.getUser(id);
	await client.set(cacheKey, JSON.stringify(user), { EX: 60 });
	return user;
}
```
{% endraw %}


# Instance Scaling — Conceptos Avanzados Pendientes

## Arquitecturas para Escalado
- Patrones orientados al escalado:
	- *Shared Nothing Architecture*: cada instancia funciona completamente independiente.
	- *Event-Driven Architecture*: se escala según la cantidad de eventos o mensajes en cola.
	- *CQRS*: separación de lectura/escritura para optimizar cargas asimétricas.
- Técnicas de desacoplo:
	- Pub/Sub distribuido (Kafka, SNS).
	- Webhooks escalables para fan-out masivo.
	- Outbox pattern para consistencia eventual en microservicios.

## Estrategias Avanzadas de Autoscaling
- Autoscaling multivariable:
	- Combina métricas: CPU + TPS + latencia + tamaño de cola.
	- Reglas compuestas por diferentes umbrales (p. ej. escala solo si latencia > 200ms Y CPU > 70%).
- Predictive Scaling:
	- Modelos ML: previsión del tráfico antes de los picos.
	- Aprendizaje histórico según patrones semanales/mensuales.
- Warm Pools:
	- Instancias precalentadas (AWS Warm Pools) para reducir ramp-up time.
	- Ideal para cargas que sufren por cold starts.

## Observabilidad de Escalado
- Telemetría crítica:
	- *Saturation Metrics*: cuellos de botella en colas, conexiones o pools.
	- *Concurrency Metrics*: usuarios concurrentes vs. capacidad real.
	- *Error Budget*: permite decisiones de escalado basadas en SLO.
- Trazabilidad distribuida:
	- OpenTelemetry para métricas, logs y traces unificados.
	- Sampling adaptativo para zonas de alta carga.

## Escalabilidad en Bases de Datos (Ampliación de conceptos)
- Patrones avanzados:
	- Sharding algorítmico vs. basado en rangos.
	- *Hot partition mitigation*: rotación de claves, hashing compuesto.
- Escalado de lectura:
	- Replicas globales.
	- Estrategias de *read/write splitting* con proxys inteligentes.
- Bases distribuidas:
	- Consistencia fuerte vs eventual.
	- Algoritmos de consenso (Raft, Paxos).

## Escalabilidad en Sistemas Distribuidos
- Tolerancia a fallos:
	- *Bulkheads*: aislar componentes críticos.
	- *Circuit Breakers*: evitar cascadas de fallos.
- Mecanismos de autosanación:
	- Reemplazo automático de nodos.
	- Reconciliación declarativa (Kubernetes Operators).
- Consideraciones de latencia:
	- Distribución multi-región.
	- Replica geográfica inteligente: cercanía a cliente vs consistencia.

## Diseño para Alta Concurrencia
- Control de concurrencia distribuida:
	- Tokens, semáforos y rate limits centralizados.
	- Request collapsing para reducir picos.
- Optimización de colas:
	- Backpressure.
	- Dead-letter queues.
	- Retries exponenciales con jitter.
- Conexiones:
	- Connection pooling adaptativo.
	- Gestión de límites en DB, Redis o APIs externas.

## Cost Optimization en Autoscaling
- Modelos híbridos:
	- Mezcla de instancias spot + on-demand.
	- Downscaling agresivo con buffers mínimos.
- Rightsizing:
	- Ajuste automático de recursos para evitar overprovisioning.
	- Medición por workload real (p. ej. milicores en Kubernetes).
- Apagado de entornos:
	- Off-hours autoscaling schedules.
	- Decommission de cargas temporales.

## Latencia y Redes en Escenarios de Escalado
- Edge Computing:
	- Funcionamiento near-client para reducir RTT.
	- Offloading de contenido estático y funciones ligeras.
- CDN + Dynamic Routing:
	- Optimización de tráfico hacia instancias activas.
	- Failover instantáneo multi-región.
- Balanceo inteligente:
	- Weighted Round Robin para despliegues progresivos.
	- *Request shadowing* para validar escalado sin afectar producción.

## Patrones de Despliegue que Impactan el Escalado
- Rolling vs. Blue/Green:
	- Menor fricción durante incrementos de instancias.
	- Pruebas paralelas sin afectar tráfico.
- Canary Release avanzado:
	- Métricas de degradación como trigger de rollback.
	- Control de tráfico con porcentajes dinámicos.
- Shadow Deployments:
	- Evaluación de rendimiento bajo carga real sin ser visible al usuario.

## Serverless Avanzado (más allá de lo ya mencionado)
- Escalado por tipo de carga:
	- Workloads bursty: triggers en paralelo con invocaciones masivas.
	- Workloads sostenidos: uso de Provisioned Concurrency.
- Orquestación:
	- Step Functions para flujos complejos.
	- Coreografías event-driven para microservicios efímeros.
- Limitaciones técnicas:
	- Límite de file descriptors.
	- Penalización por cold start en runtimes pesados.

## Edge Cases y Problemas Difíciles de Escalar
- Thundering Herd:
	- Mitigación mediante locks distribuidos y backoff.
	- Pre-warming de caches.
- Hot Keys en Redis:
	- Sharding inteligente por hash compuesto.
	- Replicación de la clave en múltiples nodos.
- Cascading Failures:
	- Timeouts agresivos.
	- Budget de reintentos.
	- Quotas por servicio para evitar saturación total.
