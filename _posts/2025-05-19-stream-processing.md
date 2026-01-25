---
date: 2025-05-19 04:38
title: Stream Processing
tags:
  - stream_processing
  - kafka
  - CS
keywords:
source:
status: 🚀
Parent: "[[Area-Prog]]"
cssclasses:
  - hide-embedded-header1
  - wide
categories:
  - Backend
public_note: "true"
category: Backend
---
# Stream Processing
`$= dv.current().file.tags.join(" ")`

- [Backend](/uncategorized/backend/)

## Conceptos Fundamentales
- Transporte y procesamiento continuo de eventos.
- Aplicaciones en tiempo real basadas en flujos de datos.
- Diferencias clave:
	- **Micro-batches**: pequeños lotes procesados en intervalos muy cortos. Más simple, pero mayor latencia.
	- **True Streaming**: procesamiento evento a evento, mínima latencia, mayor complejidad en estado y consistencia.
- Relación con sistemas distribuidos: particiones, replicación, tolerancia a fallos, consistencia y *exactly-once semantics*.

## Gestores de Colas y Eventos
- [gestor de colas](/backend/gestor-de-colas/): orientados a mensajería, entrega garantizada y desacoplamiento entre productores y consumidores.
	- pulsar
	- [RabbitMQ](/backend/rabbitmq/)
	- [apache flink](/backend/apache-flink/)
		- Motor de *stream processing*, no gestor de colas.
		- Procesa flujos sin bufferar en micro-batches.
		- Requiere un intermediario de eventos (Kafka, Pulsar, etc.).

## Apache Kafka
- [Apache Kafka](/backend/apache-kafka/)
	- Sistema de eventos distribuido basado en logs particionados.
	- Adecuado para ingestión masiva, pipelines de datos y streaming en tiempo real.
	- Componentes principales:
		- *Broker*: almacena y distribuye eventos.
		- *Producers/Consumers*: producen y consumen flujos.
		- *Kafka Streams*: librería para procesamiento embebido.
	- Casos de uso:
		- Telemetría, auditoría, analítica en tiempo real, ETL streaming.

## Apache Flink
- [apache flink](/backend/apache-flink/)
	- Motor de *stream processing* de baja latencia, altamente distribuido.
	- True streaming: procesamiento **evento a evento**.
	- Manejo avanzado de:
		- Estado distribuido.
		- Ventanas temporales complejas.
		- *Event time* y *watermarks*.
	- Más potente y genérico que Kafka Streams: adecuado para pipelines complejos, ML streaming, CEP (Complex Event Processing).

## Apache Spark en Streaming
- [apache spark](/data%20science/apache-spark/)
	- Enlazado con [Data Science](/uncategorized/data-science/) por su ecosistema de ML y análisis.
	- Apache Spark en el Ecosistema de Stream Processing
	- Spark Structured Streaming opera en micro-batches → buena consistencia, latencia mayor.
	- Ideal para pipelines donde la latencia sub-segundo no es crítica pero sí la integración con ML/ETL avanzados.

## Comparativa y Rol de Cada Tecnología
- Gestores de colas/eventos → Pulsar, RabbitMQ, Kafka.  
	- Kafka destaca para *streams* por su arquitectura de log distribuido.
- Motores de procesamiento → Flink, Kafka Streams, Spark.  
	- **Kafka Streams**: ligero, integrado con Kafka, bueno para apps embebidas.  
	- **Flink**: más avanzado, escalable y apto para cargas complejas.  
	- **Spark**: ideal cuando el ecosistema Spark ya está en uso.

## Patrones y Arquitecturas
- [Patrones de diseño](/computer%20science/patrones-de-dise-o/)
- *Event-Driven Architecture*: componentes reaccionan a eventos, dependencia mínima.
- *Streaming ETL*: transformación continua de datos sin lotes tradicionales.
- *CEP (Complex Event Processing)*: detectar patrones, anomalías o correlaciones en tiempo real.
- *Stateful Stream Processing*: mantener estado consistente distribuido (clave en Flink y Kafka Streams).
- *Exactly-Once Delivery*: coordinación entre motor y sistema de eventos para evitar duplicados.

## Retos y Consideraciones
- Semánticas temporales: *event time* vs *processing time*.
- Control de *backpressure* y congestión.
- Orquestación y tolerancia a fallos.
- Uso eficiente de memoria para estado.
- Selección adecuada del sistema según:
	- Latencia requerida.
	- Complejidad del pipeline.
	- Integración con ecosistemas existentes.
	- Escalabilidad horizontal.

# Stream Processing — Extensión Avanzada

### Modelos de Tiempo y Orden
- **Event Time vs Ingestion Time vs Processing Time**  
	- Impactan la precisión de ventanas, correlación de eventos y consistencia.
- **Watermarks avanzados**  
	- Estrategias adaptativas para manejar *out-of-order events*.
	- Técnicas híbridas: *punctuations*, *idleness detection*, *dynamic watermarks*.

### Ventanas Complejas y Patrones
- **Ventanas jerárquicas**: sesiones anidadas, ventanas escalonadas, *multi-level windows*.
- **Patrones temporales**  
	- Reglas orientadas a secuencias con limitaciones temporales.
	- Implementación típica en motores CEP sobre Flink.

### Procesamiento Stateful Avanzado
- **State Backends** más allá de RocksDB:
	- *Embedded KV stores*, backends en memoria off-heap, distribuidos tipo *remote state*.
- **Savepoints y rescaling**:
	- Migración de estado al aumentar o disminuir paralelismo.
	- Corte consistente de estado en procesos activos.

### Exactly-Once End-to-End (E2E)
- Coordinación entre:
	- Motor de streaming (ej. Flink).
	- Sistema de eventos (Kafka, Pulsar).
	- Sink transaccional (DB, Data Lake, OLAP).
- Protocolos de *two-phase commit* adaptados a flujos.

### Integración con Data Lakes y Lakehouses
- Protocolos y formatos:
	- **Delta Lake**, **Apache Hudi**, **Iceberg**.
	- Streams → tablas incrementales con *schema evolution* y *ACID*.
- Patrones:
	- *Change Data Capture (CDC)* con Debezium + Flink/Kafka.
	- *Upserts* y *merge-on-read* en tabulares transaccionales.

### Operación y Observabilidad
- Métricas críticas:
	- *Lag*, *throughput*, *latency*, *backpressure ratios*, *watermark drift*.
- *Distributed tracing* en pipelines de eventos:
	- Contexto propagado (OTEL).
- *Autoscaling* basado en:
	- Throughput dinámico.
	- Estado y memoria.
	- Watermark progression.

### Patrones de Despliegue
- **Streaming como microservicio**:
	- Apps autónomas con Kafka Streams o Flink Application Mode.
- **Motor centralizado**:
	- Clúster de Flink/Spark integrado en un ecosistema de datos.
- **Edge Streaming**:
	- Procesamiento temprano en dispositivos o gateways.
	- Sincronización eventual hacia el clúster central.

### Integración con Machine Learning en Tiempo Real
- **Feature Stores en streaming**:
	- Frescura de características, *point-in-time correctness*.
- **Inferencia en tiempo real**:
	- Modelos embebidos en Flink o Kafka Streams.
	- Gestión de versiones y *hot swap* de modelos.
- **Entrenamiento incremental / online learning**.

### Seguridad y Gobierno del Dato en Streaming
- **Encriptación y control de acceso**:
	- Row-level / field-level en sistemas de colas o flujos.
- **Mascaramiento dinámico**:
	- Aplicado en sinks o en operadores intermedios.
- **Lineaje de datos en tiempo real**:
	- Captura automática de transformaciones en pipelines.

### Infraestructura y Almacenamiento para Streaming
- **Logs distribuidos de larga retención**:
	- Segmentación, compactación, *tiered storage*.
- **Memoria y almacenamiento para estado**:
	- SSD NVMe locales.
	- Backends remotos tipo S3.
- **Network-aware scheduling**:
	- Ubicación de tareas según afinidad de datos.

# Stream Processing — Conceptos Explicados
`$= dv.current().file.tags.join(" ")`

## Modelos de Tiempo
- **Event Time**  
	- Tiempo original en el que ocurrió el evento.  
	- Permite análisis correctos aunque los eventos lleguen tarde u “out-of-order”.  
	- Requiere *watermarks* para decidir cuándo cerrar ventanas.

- **Processing Time**  
	- Tiempo del sistema que procesa el evento.  
	- Más simple, pero menos preciso si los eventos llegan desordenados o con retraso.

- **Ingestion Time**  
	- Tiempo en el que el sistema de eventos ingiere el dato.  
	- Punto medio entre precisión y simplicidad.

## Watermarks
- Marca lógica que indica hasta qué punto del tiempo se considera que “ya llegaron todos los eventos”.  
- Permite cerrar ventanas sin esperar indefinidamente.  
- Estrategias:
	- Basadas en retraso fijo.
	- Dinámicas según comportamiento del flujo.
	- Detectando inactividad en la fuente.

## Ventanas de Tiempo
- **Tumbling Windows**  
	- Intervalos fijos sin superposición.  
	- Ejemplo: agregación cada 1 minuto.

- **Sliding Windows**  
	- Intervalos superpuestos que avanzan con un *slide interval*.  
	- Más densidad de análisis.

- **Session Windows**  
	- Se abren con la actividad y se cierran tras un período de inactividad.  
	- Ideales para modelar sesiones de usuario.

- **Ventanas Jerárquicas**  
	- Ventanas que combinan varias granularidades (minutos → horas → días).

## Stateful Stream Processing
- Almacena información entre eventos.  
- Permite detectar patrones, correlaciones, sesiones o agregaciones complejas.

- **State Backends**  
	- Sistema donde se guarda el estado de forma persistente y distribuida.  
	- Ejemplos:
		- Almacenamiento embebido tipo RocksDB.
		- Memoria off-heap para acceso rápido.
		- Estado remoto en sistemas tipo S3.

- **Savepoints**  
	- Instantáneas del estado utilizadas para migrar, actualizar o escalar un job sin perder coherencia.

## Exactly-Once End-to-End
- Garantiza que cada evento afecta **exactamente una vez** al resultado final.  
- Requiere coordinar tres componentes:
	- Motor de streaming (Flink, Spark).
	- Sistema de eventos (Kafka, Pulsar).
	- Destino transaccional (DB, Data Lake).  
- Se basa en variantes de *two-phase commit* adaptadas al flujo continuo.

## CEP (Complex Event Processing)
- Detección de patrones complejos dentro de un flujo de eventos.  
- Puede incluir:
	- Secuencias con límites temporales.
	- Correlaciones entre distintos tipos de eventos.
	- Detección de anomalías, fraudes o comportamientos específicos.

## Integración con Data Lakes / Lakehouses
- Conexión con formatos transaccionales:
	- **Delta Lake**, **Hudi**, **Iceberg**.  
- Beneficios:
	- Esquemas con evolución segura.
	- Escrituras ACID.
	- Tablas optimizadas para ingestión continua.

- **CDC (Change Data Capture)**  
	- Convierte cambios de bases de datos tradicionales en eventos de streaming.

## ML en Tiempo Real
- **Feature Stores en Streaming**  
	- Mantienen características frescas y coherentes para modelos ML.

- **Inferencia en Tiempo Real**  
	- Modelos ejecutándose dentro del propio motor de streaming.

- **Entrenamiento Incremental**  
	- Aprende continuamente de datos entrantes.

## Observabilidad del Streaming
- **Lag**: cuánto se está retrasando el consumidor respecto al productor.  
- **Throughput**: cuántos eventos se procesan por unidad de tiempo.  
- **Latency**: tiempo desde que un evento se genera hasta que se procesa.  
- **Backpressure**: señal que aparece cuando un operador no puede procesar la carga a tiempo.  
- **Watermark Drift**: diferencia entre el tiempo real del flujo y la posición del watermark.

## Arquitecturas y Patrones
- **Event-Driven Architecture**  
	- Componentes que reaccionan a eventos, con bajo acoplamiento.

- **Streaming ETL**  
	- Transformación continua de datos sin depender de lotes.

- **Stateful Microservices**  
	- Microservicios que mantienen estado interno procesando eventos en tiempo real.

- **Edge Streaming**  
	- Procesamiento en dispositivos cercanos al origen del dato, reduciendo latencia y carga central.

## Infraestructura para Streaming
- **Logs Distribuidos**  
	- Sistemas como Kafka almacenan eventos de manera persistente y particionada.  
	- Conceptos clave: compactación, segmentación, *tiered storage*.

- **Network-Aware Scheduling**  
	- El motor planifica tareas cerca de los datos o de los nodos con estado relevante.

- **Almacenamiento de Estado**  
	- Desde SSD NVMe locales hasta almacenamiento remoto escalable.


# PKM de Conceptos de Stream Processing
`$= dv.current().file.tags.join(" ")`

## Conceptos Fundamentales
- [Stream Processing](/backend/stream-processing/)
- Event Streaming
- Micro-batches
- True Streaming
- Tiempo de Evento Event Time
- Tiempo de Proceso Processing Time
- Tiempo de Ingesta Ingestion Time
- Watermarks
- Out-of-Order Events
- Backpressure
- Lag
- Throughput
- Latency
- Exactly-Once Semantics
- Estado Distribuido Stateful Processing
- Ventanas de Tiempo
- Tumbling Windows
- Sliding Windows
- Session Windows
- Ventanas Jerarquicas
- Modelos Temporales en Streaming
- Event Driven Architecture EDA
- Streaming ETL
- Logs Distribuidos
- Tiered Storage
- Change Data Capture CDC

## Procesamiento Avanzado
- CEP Complex Event Processing
- Patrones Temporales
- Secuencias de Eventos
- Correlacion de Eventos
- Deteccion de Anomalias en Streaming
- Watermark Drift
- State Backends
- Savepoints
- Rescaling en Streaming
- Two Phase Commit en Streaming
- Consistencia en Flujos

## Integración con Ecosistemas de Datos
- Data Lakes
- Lakehouse
- Delta Lake
- Apache Hudi
- Apache Iceberg
- Upserts en Streaming
- Schema Evolution en Streaming
- Connectores CDC

## Streaming + Machine Learning
- Feature Store en Streaming
- Inferencia en Tiempo Real
- Entrenamiento Incremental Online Learning
- Modelos Embebidos en Flujos
- Hot Swap de Modelos

## Arquitecturas y Patrones de Despliegue
- Microservicios Basados en Eventos
- Stateful Microservices
- Edge Streaming
- Processing at the Edge
- Flink Application Mode
- Kafka Streams Applications

## Observabilidad y Operación
- Metricas de Streaming
- Monitoring en Streaming
- Distributed Tracing en Streaming
- OpenTelemetry en Flujos
- Autoscaling en Streaming
- Manejo de Congestion en Flujos

## Infraestructura
- [Apache Kafka](/backend/apache-kafka/)
- Apache Flink
- Apache Spark
- Kafka Streams
- Pulsar
- [RabbitMQ](/backend/rabbitmq/)
- Sistemas Distribuidos
- Gestor de Colas
- Compaction Logs
- Segmentacion de Logs
- Network Aware Scheduling
