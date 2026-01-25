---
date: 2024-11-23 02:01
title: monitoreo
tags:
keywords:
source:
status: 🚀
Parent: "[[Area-Sistemas]]"
cssclasses: []
aliases:
public_note: "true"
category: devops
categories:
  - devops
  - monitoreo
  - tools
  - monitorizacin
---
# Monitoreo
`$= dv.current().file.tags.join(" ")`

Este documento expande y organiza los conceptos clave relacionados con el monitoreo de sistemas e infraestructura, integrando herramientas, prácticas y marcos de referencia esenciales.

- [devops](/uncategorized/devops/)
	- [CICD](/devops/cicd/)
- [soporte tecnico](/infraestructura%20it/soporte-tecnico/)
- [Redes](/uncategorized/redes/)
- [infraestructura IT](/uncategorized/infraestructura-it/)
- [Management](/uncategorized/management/)
- [ciberseguridad](/uncategorized/ciberseguridad/)
- tools
	- [Zabbix](/monitoreo/zabbix/)
	- [pandora](/monitoreo/pandora/)
	- [nagios](/monitoreo/nagios/)
	- [grafana](/monitoreo/grafana/)
	- [prometheus](/monitoreo/prometheus/)
	- PRTG
	- [Elasticsearch](/monitoreo/elasticsearch/)
- Logging
- observability
- [OpenTelemetry](/monitoreo/opentelemetry/)

## Otros Tools de Monitoreo

### Netdata
- **Monitorización en tiempo real** con métricas de sistema, aplicaciones y containers
- **Dashboard web unificado** con visualización inmediata de métricas
- **Arquitectura distribuida** para monitorización escalable
- **Alertas automáticas** basadas en umbrales y anomalías
- **Integración nativa** con cloud, on-premise y entornos híbridos

### Cockpit
- **Interfaz web para administración de servidores** Linux
- **Gestión de containers** mediante integración con Podman/Docker
- **Monitorización de recursos** del sistema (CPU, memoria, almacenamiento)
- **Configuración de red** y servicios del sistema
- **Acceso por sesiones** múltiples y gestión de usuarios

### SolarWinds
- **Suite completa de monitorización** de infraestructura IT
- **Detección automática** de dispositivos de red
- **Análisis de rendimiento** de aplicaciones y bases de datos
- **Gestión de logs** y eventos correlacionados
- **Reporting personalizado** y dashboards empresariales

### Lansweeper
- **Inventario automatizado** de activos IT
- **Descubrimiento de red** con escaneo de IP y detección de dispositivos
- **Gestión de licencias** y compliance de software
- **Reporting de hardware** y ciclo de vida de activos
- **Integración con directorio activo** y sistemas de identidad

### HP SiteScope
- **Monitorización sintética** de aplicaciones y servicios
- **Chequeos remotos** sin necesidad de instalar agentes
- **Soporte para múltiples protocolos** (HTTP, SNMP, JDBC, etc.)
- **Monitorización de performance** de aplicaciones web
- **Implementación via Docker**:
	{% raw %}
```bash
	docker run -d --name sitescope \
	-p 8080:8080 \
	-e SS_ADMIN_PASSWORD=your_password \
	microfocus/sitescope:latest
	```
{% endraw %}
- **Enlace oficial**: [hub.docker.com/r/microfocus/sitescope](https://hub.docker.com/r/microfocus/sitescope)

### Uptime Kuma
- **Monitorización de disponibilidad** de servicios y websites
- **Dashboard elegante** con interfaz moderna y responsive
- **Múltiples protocolos** soportados (HTTP, TCP, DNS, etc.)
- **Notificaciones push** a múltiples plataformas
- **Auto-discovery** de servicios y endpoints
- **Implementación auto-alojada**:
	{% raw %}
```bash
	# Usando Docker
	docker run -d \
	--restart=always \
	-p 3001:3001 \
	-v uptime-kuma:/app/data \
	louislam/uptime-kuma:1
	```
{% endraw %}
- **Características avanzadas**:
	- Certificados SSL/TLS monitoring
	- Heartbeat monitoring con intervalos personalizados
	- Status pages públicos para mostrar estado de servicios
	- API REST para integraciones externas
- **Repositorio oficial**: [GitHub - louislam/uptime-kuma](https://github.com/louislam/uptime-kuma)
## Control de Operaciones de TI

- **Control de activos IT y gestión de inventario de red**: Mantener un inventario actualizado de todos los componentes de hardware y software es fundamental para la seguridad y el monitoreo efectivo. Permite identificar activos no autorizados, gestionar vulnerabilidades y comprender el alcance del entorno bajo supervisión.
- [infraestructura IT](/uncategorized/infraestructura-it/)
- [omi](https://docs.microfocus.com/OMi/10.62/Content/OMi/ConceptsGuide/getStarted/getStarted_concepts.htm)

## Políticas y Controles de Seguridad

### Controles de Seguridad NIST SP 800-53

La publicación especial NIST SP 800-53 (Security and Privacy Controls for Information Systems and Organizations) es un marco integral de controles de seguridad utilizado para reducir el riesgo y proteger la información.

| Control | ID | Descripción y Aplicación |
| :--- | :--- | :--- |
| Gestión de Cuentas | AC-02 | Controla la creación, habilitación, modificación y deshabilitación de cuentas. Se puede aplicar mediante integración con proveedores de identidad (SSO) y roles de acceso basados en RBAC. |
| Aplicación de Acceso | AC-03 | Aplica políticas de autorización para el acceso al sistema. Se implementa con RBAC para controlar el acceso a nodos SSH, recursos de Kubernetes y configuraciones del cluster. |
| Notificaciones de Uso del Sistema | AC-08 | Muestra notificaciones de privacidad y uso del sistema antes del acceso. Se puede integrar con módulos PAM de Linux para mostrar mensajes personalizados durante el inicio de sesión. |
| Registro de Eventos de Auditoría | AU-03 | Contenido de los registros de auditoría: los registros deben capturar eventos como intentos de inicio de sesión fallidos, comandos ejecutados, transferencias de archivos y actividad de red. |
| Protección de la Información de Auditoría | AU-09 | Protección de los registros de auditoría contra modificaciones no autorizadas y accesos. |
| Inventario de Componentes del Sistema de Información | CM-08 | Mantener un inventario actualizado y preciso de los componentes del sistema. Las herramientas de monitoreo pueden mantener una lista en vivo de todos los nodos dentro de un cluster. |
| Autenticación de Dispositivos | IA-03 | Verificar la identidad de los dispositivos antes de establecer conexiones. Se puede lograr requiriendo certificados X.509 o SSH válidos emitidos por una Autoridad Certificadora (CA) de confianza. |

**Enlace al marco**: [NIST Security Controls](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final)

# Logging, Observability y Conceptos Relacionados

### Logging (Registro de Eventos)

**Definición**: El logging consiste en capturar y almacenar eventos discretos que ocurren en sistemas y aplicaciones, proporcionando un registro histórico de actividades.

**Componentes Clave**:
- **Niveles de log**: DEBUG, INFO, WARN, ERROR, FATAL
- **Formato estructurado**: JSON, XML, logfmt
- **Rotación de logs**: Gestión automática del ciclo de vida
- **Enriquecimiento**: Añadir contexto (timestamp, user_id, request_id)

**Herramientas Especializadas**:
- [Elasticsearch](/monitoreo/elasticsearch/) + Logstash + Kibana (ELK Stack)
- Splunk
- Graylog
- Fluentd
- Loki (Grafana)

### Observability (Observabilidad)

**Definición**: Capacidad de entender el estado interno de un sistema basándose en sus señales externas, permitiendo detectar y diagnosticar problemas sin necesidad de tests predefinidos.

**Tres Pilares Fundamentales**:

#### 1. Métricas (Metrics)
- **Series temporales numéricas**
- **Tipos**: Contadores, gauges, histogramas
- **Herramientas**: [prometheus](/monitoreo/prometheus/), [grafana](/monitoreo/grafana/), StatsD
- **Uso**: Detección de tendencias y establecimiento de alertas

#### 2. Trazas (Traces)
- **Seguimiento de requests** a través de sistemas distribuidos
- **Contexto de ejecución**: Timing, servicios involucrados
- **Herramientas**: Jaeger, Zipkin, OpenTracing
- **Uso**: Diagnóstico de latencia y dependencias

#### 3. Logs
- **Eventos discretos** con contexto completo
- **Estructura**: Timestamp, nivel, mensaje, metadata
- **Uso**: Debugging y auditoría

### Telemetría

**Definición**: Captura automática y transmisión de datos desde fuentes remotas para monitorización.

**Componentes**:
- **Recolectores**: Agentes que capturan datos
- **Exportadores**: Envían datos a backends
- **Procesadores**: Transforman y filtran datos

**Estándares**:
- [OpenTelemetry](https://opentelemetry.io/) - Framework unificado
- **Ventajas**:
	- Vendor-agnostic
	- Soporte multi-lenguaje
	- Instrumentación automática

### APM (Application Performance Monitoring)

**Monitorización del Rendimiento de Aplicaciones**:
- **Tiempo de respuesta** de transacciones
- **Throughput** y capacidad
- **Trazas de código** y profiling
- **Detección de cuellos de botella**

**Herramientas**:
- New Relic
- Dynatrace
- AppDynamics
- Datadog APM

### [SIEM](/ciberseguridad/siem/) (Security Information and Event Management)

**Gestión de Eventos e Información de Seguridad**:
- **Correlación de eventos** de seguridad
- **Detección de amenazas** en tiempo real
- **Cumplimiento normativo**
- **Forensic analysis**

### Conceptos Avanzados de Monitorización

#### Monitorización Sintética
- **Tests proactivos** desde ubicaciones externas
- **Medición de experiencia** del usuario final
- **Detección temprana** de problemas

#### Monitorización Real User Monitoring (RUM)
- **Captura de métricas** de usuarios reales
- **Performance web** (Core Web Vitals)
- **Análisis de experiencia** de usuario

#### eBPF (Extended Berkeley Packet Filter)
- **Instrumentación del kernel** sin modificar código
- **Monitorización de rendimiento** a bajo nivel
- **Seguridad** y tracing avanzado

### Best Practices en Logging y Observability

#### Logging Efectivo
{% raw %}
```json
{
  "timestamp": "2024-01-15T10:30:00Z",
  "level": "ERROR",
  "message": "Database connection failed",
  "service": "user-api",
  "trace_id": "abc-123-xyz",
  "user_id": "user-456",
  "duration_ms": 150,
  "error_details": {
    "code": "DB_CONN_REFUSED",
    "retry_count": 3
  }
}
```
{% endraw %}

#### Implementación de Observabilidad
- **Instrumentación consistente** across services
- **Context propagation** entre servicios
- **Sampling inteligente** para reducir volumen
- **Alerting basado en SLOs** (Service Level Objectives)

### Integración con DevOps y SRE

#### Site Reliability Engineering (SRE)
- **Service Level Indicators** (SLIs)
- **Service Level Objectives** (SLOs)
- **Service Level Agreements** (SLAs)
- **Error budgets** y políticas de alertas

#### DevOps Integration
- **Monitorización como código**
- **CI/CD pipeline monitoring**
- **Infrastructure as Code** visibility
- **Automated remediation**

### Tendencias Emergentes

- **AIOps**: Machine learning para operaciones IT
- **Continuous Profiling**: Always-on code profiling
- **Cloud Native Monitoring**: Específico para Kubernetes y microservicios
- **FinOps Integration**: Monitorización de costos cloud