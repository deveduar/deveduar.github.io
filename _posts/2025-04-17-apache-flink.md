creation date: 2025-04-17 22:25
tags:
  - apache
  - stream_processing
  - kafka
keywords:
source:
status: 🌟
Parent: "Area-Prog"
cssclasses:
  - hide-embedded-header1
  - wide
categories: "[Backend](/backend/backend/)"
public_note: "true"
# apache flink
``

- [apache](/backend/apache/)
- [Apache Kafka](/backend/apache-kafka/)
- [apache spark](/data%20science/apache-spark/)
- [java](/software%20engineering/java/)
- [Scala](/data%20science/scala/)
- [Stream Processing](/backend/stream-processing/)

## Concepto general
- Apache Flink es un framework de [Stream Processing](/backend/stream-processing/) diseñado para procesar datos en tiempo real con baja latencia y alta fiabilidad.
- Está orientado a flujos de datos continuos (unbounded streams), aunque también soporta procesamiento batch como un caso particular de streaming.
- Se integra de forma nativa con lenguajes como [java](/software%20engineering/java/) y [Scala](/data%20science/scala/), ofreciendo APIs de alto nivel y control detallado del estado y el tiempo.

## Flink y Kafka en arquitecturas de streaming
- Kafka es un almacén de eventos distribuido o un búfer de mensajes persistente.
- Flink es un marco de procesamiento de flujos que puede consumir datos desde Kafka u otras fuentes.
- Kafka no procesa eventos, los almacena y distribuye; Flink ejecuta la lógica de negocio sobre los eventos.
- En arquitecturas típicas:
	- Kafka actúa como sistema ascendente (upstream), desacoplando productores y consumidores.
	- Flink consume eventos desde Kafka, los procesa en tiempo real y produce resultados hacia Kafka u otros sinks.
- Kafka puede ser tanto una fuente como un destino (downstream) para Flink, dependiendo del diseño del pipeline.
- Esta separación permite:
	- Reprocesamiento de eventos históricos.
	- Escalabilidad independiente entre ingestión y procesamiento.
	- Mayor resiliencia ante fallos.

## Modelo de procesamiento
- Flink utiliza un modelo de flujo de datos continuo.
- Cada evento se procesa individualmente a medida que llega.
- Soporta semánticas de procesamiento:
	- Exactly-once
	- At-least-once
- El procesamiento batch se implementa internamente como un flujo acotado (bounded stream).

## Gestión del estado
- El estado es un componente central en Flink.
- Permite mantener información entre eventos, por ejemplo:
	- Contadores
	- Ventanas de agregación
	- Modelos incrementales
- El estado puede ser:
	- Local (memoria)
	- Persistente (RocksDB u otros backends)
- El sistema de snapshots distribuidos garantiza consistencia y tolerancia a fallos.

## Manejo del tiempo
- Flink distingue entre distintos conceptos de tiempo:
	- Event time
	- Processing time
	- Ingestion time
- El uso de event time permite resultados correctos incluso con eventos retrasados.
- Las watermarks indican el progreso del tiempo de evento en el flujo.

## Casos de uso comunes
- Procesamiento de eventos en tiempo real.
- Análisis de streams de logs y métricas.
- Detección de fraudes.
- Monitorización de sistemas y alertas.
- Pipelines de datos en arquitecturas orientadas a eventos.
- Enriquecimiento de streams mediante joins con datos históricos.

## Comparativa con Apache Spark
### Diferencias principales
| Característica           | [apache spark](/data%20science/apache-spark/)                                           | [apache flink](/uncategorized/apache-flink/)                  |
| ------------------------ | ---------------------------------------------------------- | --------------------------------- |
| Modelo de procesamiento  | Batch processing                                           | Data streaming                    |
| Procesamiento de eventos | Microlotes                                                 | En tiempo real                    |
| Escalabilidad            | Procesamiento por lotes                                    | Procesamiento en tiempo real      |
| Tolerancia a fallos      | Recuperación de fallos basada en linaje                    | Instantáneas distribuidas         |
| Ecosistema               | Más maduro, con más conectores, bibliotecas y herramientas | Menos maduro, pero en crecimiento |

- Spark Structured Streaming simula streaming mediante micro-batches.
- Flink procesa evento a evento, lo que reduce latencia y mejora el control temporal.
- Spark es más fuerte en workloads batch y analítica general.
- Flink destaca en aplicaciones de streaming complejas y con estado.

## Comparativa con Apache Kafka
### Roles dentro del flujo de datos
|                 | [Apache Kafka](/backend/apache-kafka/)                        | [apache flink](/uncategorized/apache-flink/)                                               |
| --------------- | --------------------------------------- | -------------------------------------------------------------- |
| Función         | Almacén de eventos distribuido          | Marco de procesamiento de flujos                               |
| Uso             | Ideal para ingerir datos en tiempo real | Ideal para aplicaciones de streaming complejas y a gran escala |
| Características | Modelo de publicación-suscripción       | Modelo de flujo de datos                                       |
| Procesamiento   | Procesamiento de eventos ilimitados     | Procesamiento de datos en tiempo real y por lotes              |
| Arquitectura    | Búfer distribuido                       | Cluster-based                                                  |

- Kafka garantiza durabilidad y orden dentro de particiones.
- Flink garantiza procesamiento consistente y control del estado.
- Ambos se complementan, no se sustituyen.

## Ecosistema y componentes
- APIs principales:
	- DataStream API
	- Table API
	- SQL
- Conectores comunes:
	- Kafka
	- Sistemas de archivos
	- Bases de datos
	- Sistemas cloud
- Integración con herramientas de observabilidad y despliegue en clusters.

## Recursos relacionados
- Flink vs. Kafka y su papel en el flujo de datos en streaming-event-stream-processing-flink-vs-kafka
- First steps-apache-flink

# apache flink · fundamentos y arquitectura

## Principios de diseño
- El streaming es el paradigma principal, no una extensión del batch.
- Todo flujo de datos se modela como un stream, sea infinito o acotado.
- El sistema está diseñado para ser:
	- Distribuido
	- Stateful por defecto
	- Consistente frente a fallos
- El control del estado y del tiempo es parte del núcleo del motor, no una capa externa.

## Arquitectura general del cluster
- Flink sigue una arquitectura maestro-trabajador.
- El cluster se compone de:
	- Un nodo coordinador
	- Varios nodos de ejecución
- La arquitectura permite escalar horizontalmente añadiendo nodos de cómputo.
- El despliegue puede realizarse:
	- En clusters dedicados
	- Sobre gestores de recursos
	- En entornos cloud o on-premise

## JobManager
- Es el componente maestro del cluster.
- Responsabilidades principales:
	- Coordinación de la ejecución de jobs.
	- Planificación y distribución de tareas.
	- Gestión de checkpoints y recuperación ante fallos.
- Mantiene el estado global del job y su grafo de ejecución.
- Puede operar en modo:
	- Standalone
	- Alta disponibilidad (HA) con múltiples instancias coordinadas externamente.

## TaskManager
- Son los nodos trabajadores.
- Ejecutan las tareas reales del job.
- Cada TaskManager:
	- Dispone de uno o varios slots de ejecución.
	- Aloja sub-tareas paralelas.
- Gestionan:
	- Estado local de las tareas.
	- Comunicación de red entre operadores.
- El número de TaskManagers determina la capacidad de procesamiento del cluster.

## Slots y paralelismo
- Un slot representa una unidad de recursos dentro de un TaskManager.
- El paralelismo define cuántas instancias de una operación se ejecutan en paralelo.
- El paralelismo se puede configurar:
	- A nivel de job
	- A nivel de operador
- La asignación flexible de slots permite optimizar el uso de recursos.

## Grafo de ejecución
- Cada job se transforma internamente en un grafo dirigido.
- El grafo describe:
	- Operadores
	- Dependencias
	- Flujo de datos entre tareas
- Existen varias representaciones internas:
	- Grafo lógico
	- Grafo físico optimizado
- Esta transformación permite optimizaciones antes de la ejecución.

## Flujo de datos interno
- Los datos fluyen entre operadores mediante canales de red.
- El intercambio puede ser:
	- Local (dentro del mismo nodo)
	- Remoto (entre nodos distintos)
- Flink gestiona automáticamente:
	- Serialización
	- Buffering
	- Backpressure
- El backpressure se propaga río arriba para evitar sobrecarga.

## Gestión del estado distribuido
- El estado se reparte entre las tareas paralelas.
- Cada operador mantiene su porción de estado.
- El estado puede almacenarse:
	- En memoria
	- En almacenamiento embebido
	- En sistemas externos para persistencia
- La arquitectura desacopla el cómputo del almacenamiento del estado.

## Checkpointing y consistencia
- Flink utiliza un mecanismo de snapshots distribuidos.
- Los checkpoints:
	- Capturan el estado consistente de todo el job.
	- Se realizan de forma periódica.
- Permiten:
	- Recuperación automática ante fallos.
	- Garantías fuertes de consistencia.
- El mecanismo es transparente para el desarrollador.

## Arquitectura orientada a operadores
- Cada transformación se modela como un operador.
- Los operadores se encadenan para reducir latencia.
- El chaining:
	- Reduce la sobrecarga de red.
	- Mejora el rendimiento.
- Puede configurarse o desactivarse si es necesario.

## Integración con fuentes y sinks
- La arquitectura separa claramente:
	- Sources (entrada de datos)
	- Operators (procesamiento)
	- Sinks (salida de resultados)
- Esto facilita:
	- Sustituir sistemas externos.
	- Reutilizar pipelines.
	- Diseñar arquitecturas desacopladas.

## Modelo de fallos y recuperación
- Los fallos se asumen como parte normal del sistema.
- Ante un fallo:
	- Se cancelan las tareas afectadas.
	- Se restaura el estado desde el último checkpoint.
	- Se reanuda la ejecución automáticamente.
- El objetivo es minimizar:
	- Pérdida de datos
	- Duplicación de resultados

## Relación con arquitecturas event-driven
- Flink encaja de forma natural en arquitecturas orientadas a eventos.
- Actúa como motor de procesamiento entre sistemas productores y consumidores.
- Permite construir:
	- Pipelines reactivos
	- Sistemas desacoplados
	- Procesamiento continuo con estado persistente
