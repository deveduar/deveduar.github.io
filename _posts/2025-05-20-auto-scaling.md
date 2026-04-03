---
date: 2025-05-20 17:32
title: Auto Scaling
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: cloud
tags:
  - cloud
  - backend
  - scaling
---
# Auto Scaling
``

- [cloud](/cloud/cloud/)  
- [Backend](/backend/backend/)  
- [Instance Scaling](/backend/instance-scaling/)

- [Qué es el Upskilling: plan, estrategias, ventajas y ejemplos – LISA Institute](https://www.lisainstitute.com/blogs/blog/upskilling-ventajas-estrategias-ejemplos#:~:text=es%20el%20Upskilling%3F-,El%20Upskilling%20es%20una%20tendencia%20laboral%20que%20facilita%20y%20favorece,de%20m%C3%A1s%20habilidades%20y%20competencias.)  
- [El autoscaling: ¿Cómo funciona? Todo lo que debes saber](https://ilimit.com/blog/como-funciona-autoscaling/)  
- [¿Qué es el autoescalado? | KeepCoding Bootcamps](https://keepcoding.io/blog/que-es-el-autoescalado/)  

## Conceptos Clave del Auto Scaling
- Ajuste automático de recursos según demanda.
- Optimización de costos al evitar sobreaprovisionamiento.
- Gestión dinámica basada en métricas de uso (CPU, memoria, red, colas, tiempos de respuesta).
- Integración con orquestadores y proveedores cloud.
- Diferencia frente a [Instance Scaling](/backend/instance-scaling/):
	- Auto Scaling = escalado dinámico.
	- Instance Scaling = escalado manual o programado pero no reactivo.

## Beneficios del Auto Scaling
- Ajuste en tiempo real ante picos de carga.
- Reducción de costos operativos.
- Mayor resiliencia y disponibilidad.
- Capacidad para absorber fallos mediante replicación automática.
- Mejor alineación entre demanda y aprovisionamiento.

## Tipos de Auto Scaling
- Horizontal (añadir/quitar instancias).
- Vertical (aumentar capacidades de una instancia existente).
- Predictivo (anticipación según patrones históricos).
- Basado en eventos (webhooks, colas, triggers externos).
- Basado en métricas de aplicación (APM, SLO/SLA, latencia, throughput).

## Plataformas de Auto Scaling en la Nube
- **AWS Auto Scaling**
	- Integración con EC2, ECS, DynamoDB y Aurora.
	- Grupos de Auto Scaling con políticas avanzadas (step, target tracking).
	- Escalado predictivo basado en ML.
- **Azure VM Scale Sets**
	- Escalado para máquinas virtuales con balanceadores integrados.
	- Integración con Application Insights para métricas.
- **GCP Managed Instance Groups**
	- Autoscaling basado en señales como CPU, HTTP Load Balancing o métricas personalizadas.
	- Reemplazo automático de instancias no saludables.

## Auto Scaling en Contenedores y Kubernetes
- Kubernetes Horizontal Pod Autoscaler (HPA)
	- [Kubernetes](/virtualizacion/kubernetes/)
	- Escala pods según CPU/Memoria o métricas personalizadas vía Metrics API o Prometheus.
	- Combinable con Cluster Autoscaler para ajustar nodos del clúster.
	- Vertical Pod Autoscaler (VPA) para ajustar memoria/CPU recomendada.
	- Event-based Autoscaling (KEDA) para triggers como Kafka, RabbitMQ, Azure Queue, AWS SQS.

## Factores de Costos y Optimización
- Uso de instancias spot/preemptibles para cargas tolerantes a fallo.
- Políticas híbridas (on-demand + spot).
- Rightsizing continuo.
- Eliminación de instancias infrautilizadas.
- Supervisión con dashboards APM/Observabilidad.
- Automatización con Terraform, Pulumi o CloudFormation para reproducibilidad.

## Casos de Uso Comunes
- Aplicaciones web con tráfico variable.
- Procesamiento batch que crece según colas.
- Microservicios que dependen de picos estacionales.
- APIs de alta concurrencia.
- Tareas de machine learning con demanda fluctuante.
- ETL/ELT donde la carga depende del volumen de datos diario.

## Bloques de Código

### Ejemplo AWS Auto Scaling Group (Terraform)
{% raw %}
```hcl
resource "aws_autoscaling_group" "app" {
	launch_template {
		id      = aws_launch_template.app.id
		version = "$Latest"
	}
	min_size = 2
	max_size = 10

	target_group_arns = [aws_lb_target_group.app.arn]

	tag {
		key                 = "Name"
		value               = "app-asg"
		propagate_at_launch = true
	}
}
```
{% endraw %}`

### Ejemplo de HPA en Kubernetes (YAML)

{% raw %}
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
	name: api-hpa
spec:
	scaleTargetRef:
		apiVersion: apps/v1
		kind: Deployment
		name: api
	minReplicas: 2
	maxReplicas: 12
	metrics:
	- type: Resource
	  resource:
	    name: cpu
	    target:
	      type: Utilization
	      averageUtilization: 70
```
{% endraw %}

### Ejemplo de Auto Scaling basado en Métricas Personalizadas (Prometheus Adapter)

{% raw %}
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
	name: worker-hpa
spec:
	scaleTargetRef:
		apiVersion: apps/v1
		kind: Deployment
		name: worker
	minReplicas: 1
	maxReplicas: 20
	metrics:
	- type: Pods
	  pods:
	    metric:
	      name: queue_length
	    target:
	      type: AverageValue
	      averageValue: "30"
```
{% endraw %}

# Auto Scaling — Conceptos Avanzados y Arquitecturas

## Estrategias de Auto Scaling Avanzado
- **Target Tracking Inteligente**
	- Ajuste dinámico para mantener un KPI estable (latencia, QPS, CPU).
	- Ideal para microservicios con carga errática.
- **Step Scaling Ajustado por Histéresis**
	- Evita el “flapping” (escalar/subir repetidamente).
	- Usa ventanas temporales amortiguadas.
- **Autoscaling por Demanda de Red (eBPF/Service Mesh)**
	- Mide conexiones activas, throughput, errores.
	- Integración con Istio, Linkerd, Cilium.
- **Escalado con Políticas Múltiples**
	- Capas combinadas: CPU + colas + latencia + eventos externos.

## Auto Scaling en Arquitecturas Distribuidas
- **Microservicios desacoplados**
	- Cada servicio con su propia política de escalado.
	- Menos dependencia entre ciclos de carga.
- **Event-Driven**
	- Los eventos definen el tamaño de los workers.
	- Integración con SQS, Pub/Sub, Kafka.
- **Data Pipelines**
	- Escalado de ingesta (producers), procesamiento (consumers) y persistencia.
- **Arquitecturas híbridas** (cloud + on-prem)
	- Escalado en bursts hacia la nube.
	- Uso de VPN/DirectConnect/Interconnect para sincronización.

## Métricas Profundas para Auto Scaling
- Métricas de aplicación:
	- Tiempo de respuesta P95/P99.
	- RPS/QPS.
	- Errores 5xx.
	- Saturación de base de datos.
- Métricas del sistema:
	- Throttling de CPU.
	- Page faults y swap.
	- Latencia de disco y IOPS.
- Métricas de red:
	- Conexiones activas.
	- Paquetes en colas.
	- Latencia inter-pod y entre AZ/regions.
- Métricas de negocio:
	- Órdenes por minuto.
	- Usuarios activos concurrentes.
	- Tiempo en colas transaccionales.

## Patrones de Diseño con Auto Scaling
- **Queue-Driven Workers**
	- Los workers suben según tamaño de la cola.
- **Sharding Dinámico**
	- Crear shards nuevos cuando se saturan.
- **Fan-Out / Fan-In**
	- Multiplicar workers temporalmente para tareas batch.
- **Throttling + Backpressure**
	- Mantiene los servicios estables ante explosiones de tráfico.
- **Warm Pools**
	- Instancias precalentadas para reducir cold start.

## Patrones de Despliegue ligados a Auto Scaling
- **Blue/Green**
	- Permite escalar la nueva versión antes del corte.
- **Canary Releases**
	- Escalado proporcional a la población canario.
- **Progressive Delivery**
	- Ajuste gradual basado en métricas reales de usuarios.

## Anti-Patrones del Auto Scaling
- **Escalar solo por CPU**
	- La CPU rara vez es el cuello de botella real.
- **No definir límites mínimos/máximos**
	- Riesgo de explosión de costo o saturación.
- **No usar histéresis**
	- Causa oscilaciones continuas.
- **Un solo autoscaler para todo el clúster**
	- Interdependencias peligrosas entre servicios.
- **Escalado vertical sin pruebas**
	- Puede provocar reinicios innecesarios y downtime.

## Auto Scaling en Serverless
- **Escalado prácticamente infinito**
	- AWS Lambda, Azure Functions, Cloud Functions.
- Consideraciones:
	- Cold starts.
	- Concurrencies máximas.
	- Límites de burst regionales.
	- Throttling al backend (DB, APIs).
- Recomendaciones:
	- Configurar reserved concurrency.
	- Mantener funciones pequeñas y especializadas.

## Auto Scaling en el Edge
- Edge Workers (Cloudflare, Fastly, Akamai):
	- Escalado global automático.
	- Replicación de funciones en POPs cercanos al usuario.
- Consideraciones especiales:
	- Latencia ultrabaja.
	- Límites por POP.
	- Distribución geográfica irregular.

## Gobernanza, Costos y FinOps
- **Cost-aware Auto Scaling**
	- Políticas que consideran precio por instancia.
- **Right-sizing continuo**
	- Ajuste periódico de tipo de instancia.
- **Programación de ventanas de escalado**
	- Reducir capacidad fuera de picos predecibles.
- **Integración con herramientas FinOps**
	- Monitoreo de coste por equipo/servicio.
	- Forecasts y alertas de sobrecoste.
- **Uso de spot/preemptible**
	- Mezcla controlada con estrategias de fallback.

## Auto Scaling y SRE
- SLO-driven Autoscaling:
	- Escalado para mantener un SLO (latencia, disponibilidad).
- Alertas centradas en saturación:
	- SRE prioriza métricas de latencia y errores.
- Capacidades mínimas para evitar quemar el error budget.
- Experimentación con chaos engineering:
	- Se verifica que la plataforma escala bajo fallos.

## Seguridad y Auto Scaling
- Rotación de instancias mejora postura de seguridad.
- Zero Trust combinado con escalado dinámico.
- Escalado de WAF, IDS/IPS, rate limiting.
- Cuarentena automática de instancias no saludables.

## Troubleshooting y Diagnóstico
- Flapping: revisar ventanas, thresholds y métricas ruidosas.
- Cold starts repetidos: usar warm pools o réplicas mínimas.
- Cuellos de botella ocultos:
	- Bases de datos monolíticas.
	- Sistemas de archivos compartidos.
- Métricas inconsistentes:
	- Problemas en Prometheus Adapter o en CloudWatch.
- Latencia en el provisionamiento (AWS/GCP/Azure).

## Integración con Infraestructura como Código
- Terraform: módulos estándar de autoscaling y escaladores.
- Pulumi: lógica programática para escalado.
- Ansible: integración declarativa para reglas.
- GitOps:
	- ArgoCD / Flux manejan escaladores HPA/VPA/KEDA.

# Glosario de Auto Scaling por Categorías

## 1. Conceptos Fundamentales
- **Auto Scaling**  
	Proceso automático que ajusta recursos según demanda.
- **Up Scaling / Down Scaling**  
	Aumentar o reducir capacidad de forma dinámica.
- **Horizontal Scaling**  
	Añadir o quitar instancias/pods.
- **Vertical Scaling**  
	Aumentar recursos (CPU/RAM) de una instancia existente.
- **Instance Scaling**  
	Escalado manual o programado de instancias sin reacción a métricas.

## 2. Tipos y Estrategias de Escalado
- **Target Tracking**  
	Mantiene una métrica objetivo (CPU, latencia, RPS).
- **Step Scaling**  
	Escalado por saltos basados en umbrales.
- **Predictive Scaling**  
	Anticipa picos mediante datos históricos.
- **Event-Driven Autoscaling**  
	Escalado basado en eventos (colas, mensajes).
- **Latency-Based Scaling**  
	Reacciona a métricas como P95/P99.
- **Throughput Scaling**  
	Escalado según cantidad de solicitudes procesadas.

## 3. Kubernetes: HPA, VPA y Cluster Autoscaler
- **HPA (Horizontal Pod Autoscaler)**  
	Escala pods según métricas (CPU, memoria, personalizadas).
- **VPA (Vertical Pod Autoscaler)**  
	Ajusta recursos de pods de forma recomendada o automática.
- **Cluster Autoscaler**  
	Ajuste automático del número de nodos.
- **KEDA**  
	Escalado por eventos externos (Kafka, SQS, Pub/Sub).

## 4. Mecanismos Cloud de Auto Scaling
- **AWS Auto Scaling Groups (ASG)**  
	Grupos que añaden/eliminan instancias según políticas.
- **Azure VM Scale Sets (VMSS)**  
	Escalado de máquinas virtuales gestionado por Azure.
- **GCP Managed Instance Groups (MIG)**  
	Grupos escalables de VMs en Google Cloud.
- **Serverless Autoscaling**  
	Escalado automático de funciones (Lambda, Azure Functions, Cloud Functions).

## 5. Métricas y Observabilidad
- **CPU Utilization / Memory Utilization**  
	Indicadores básicos para escalado reactivo.
- **Latency (P95/P99)**  
	Métrica crítica para experiencia de usuario.
- **RPS/QPS (Requests per second)**  
	Indicador de carga de tráfico.
- **Error Rates (5xx)**  
	Detecta saturación o fallos en servicios.
- **Queue Length**  
	Métrica clave para workers y pipelines.
- **IOPS (Input/Output Operations per Second)**  
	Escalado para servicios intensivos en disco.
- **Network Throughput**  
	Escalado por carga de red.
- **Prometheus Adapter / Metrics Server**  
	Fuentes de métricas para HPA.

## 6. Patrones de Diseño Relacionados con Auto Scaling
- **Queue-Driven Workers**  
	Workers que escalan según tamaño de colas.
- **Fan-Out / Fan-In**  
	Muchas tareas paralelas y consolidación final.
- **Sharding Dinámico**  
	Creación/eliminación de shards dependiendo de carga.
- **Warm Pools**  
	Instancias precalentadas listas para uso inmediato.
- **Backpressure**  
	Reducción controlada del flujo para evitar saturación.

## 7. Patrones de Despliegue con Autoscaling Integrado
- **Blue/Green Deployment**  
	Versiones paralelas: una activa y otra en preparación.
- **Canary Deployment**  
	Escalado y enrutado gradual a nueva versión.
- **Progressive Delivery**  
	Ajuste continuo basado en métricas reales.

## 8. Anti-Patrones y Errores Comunes
- **Escalar solo por CPU**  
	La métrica menos representativa para la mayoría de apps.
- **No aplicar histéresis**  
	Causa “flapping” (sube/baja constantemente).
- **Sin límites mínimos/máximos**  
	Riesgo de costes excesivos o colapsos.
- **Un solo autoscaler para todo el sistema**  
	Acoplamiento peligroso entre servicios.
- **Escalado vertical sin pruebas**  
	Provoca reinicios innecesarios.

## 9. Arquitecturas y Modelos de Carga
- **Microservicios Desacoplados**  
	Cada servicio con su propia política.
- **Event-Driven Architecture**  
	Escalado según intensidad de eventos.
- **Data Pipelines**  
	Workers que se ajustan al volumen de datos.
- **Hybrid Cloud Bursting**  
	Escalar hacia la nube desde on-prem en picos.

## 10. Seguridad y Auto Scaling
- **Zero Trust Scaling**  
	Políticas de seguridad aplicadas dinámicamente.
- **WAF/IDS Scaling**  
	Capacidad de seguridad escalable.
- **Rotación Automática de Instancias**  
	Mejora de postura de seguridad.

## 11. FinOps, Costos y Gobernanza
- **Cost-Aware Autoscaling**  
	Políticas que consideran el precio y la eficiencia.
- **Right-Sizing**  
	Ajuste óptimo de recursos por carga real.
- **Spot / Preemptible Instances**  
	Instancias más baratas que permiten ahorro significativo.
- **Scheduled Scaling**  
	Escalado por horarios o ventanas predictibles.

## 12. Diagnóstico, Depuración y Estabilidad
- **Flapping**  
	Escalar y desescalar repetidamente por mala configuración.
- **Cold Start**  
	Lentitud inicial al arrancar instancias o funciones.
- **Bottleneck Discovery**  
	Identificación de cuellos de botella en base de datos, red o disco.
- **SLO-Driven Debugging**  
	Investigación basada en objetivos de disponibilidad/latencia.

