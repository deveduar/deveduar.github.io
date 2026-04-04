---
date: 2025-01-29 00:32
title: Apache Kafka
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Backend
tags:
  - apache
  - kafka
  - microservicios
  - devops
---
# Apache Kafka

## Relación con otros dominios
- Big Data
- [Stream Processing](/backend/stream-processing/)
- [Data Science](/data%20science/data-science/)
- [apache](/backend/apache/)
- Kafka Streams vs [apache flink](/backend/apache-flink/)

## Definición y propósito
Apache Kafka es una plataforma distribuida de **event streaming** diseñada para manejar grandes volúmenes de datos en **tiempo real**. Permite publicar, almacenar, procesar y suscribirse a flujos de eventos de forma desacoplada, tolerante a fallos y escalable horizontalmente.

Se utiliza como **backbone de datos** en arquitecturas modernas orientadas a eventos, microservicios y sistemas de análisis en tiempo real.

## Procesamiento en tiempo real
- Ingesta continua de eventos sin necesidad de batch
- Baja latencia en publicación y consumo
- Procesamiento incremental de datos conforme llegan
- Soporte para pipelines de datos y arquitecturas event-driven

## Conceptos fundamentales
### Flujos de datos y desacoplamiento
- Productores y consumidores no se conocen entre sí
- Los productores solo escriben en topics
- Los consumidores se suscriben a topics según sus necesidades
- Facilita escalabilidad, resiliencia y evolución independiente de servicios

### Topics
- Un **topic** es una categoría o stream lógico de eventos
- Los eventos se almacenan de forma inmutable
- Un mismo topic puede ser consumido por múltiples aplicaciones

### Particiones
- Cada topic se divide en **particiones**
- Permiten paralelismo y escalado
- Cada partición es un log ordenado e inmutable
- El orden **solo está garantizado dentro de una partición**

### Offset
- El **offset** es el puntero que indica la posición de lectura en una partición
- Cada consumidor gestiona su propio offset
- Permite relectura, replay y tolerancia a fallos

### Orden de eventos
- Orden garantizado por partición
- No existe orden global entre particiones
- Consideraciones:
	- Eventos duplicados pueden ocurrir
	- El consumidor debe ser idempotente cuando sea necesario

### Grupos de consumidores
- Un **consumer group** es un conjunto lógico de consumidores
- Cada partición es consumida por un solo consumidor dentro del grupo
- Permite balanceo automático de carga
- Escalabilidad horizontal de aplicaciones consumidoras

### Listas de consumidores en aplicaciones
- Una aplicación puede tener múltiples instancias consumidoras
- Kafka gestiona la asignación de particiones
- Rebalanceos automáticos ante fallos o escalado

## Logging y streams
- Kafka funciona como un **commit log distribuido**
- Casos comunes:
	- Logging centralizado
	- Auditoría de eventos
	- Sistemas de recomendación
	- Métricas en tiempo real
	- Tracking de actividad de usuarios

## Integraciones y protocolos
- Basado en TCP con su propio protocolo binario
- Integración con:
	- Bases de datos
	- Sistemas de streaming
	- Data lakes
	- Sistemas de análisis
- Compatible con múltiples lenguajes mediante clientes oficiales y comunitarios

## Kafka Streams
- Librería para procesar datos directamente desde Kafka
- Permite:
	- Transformaciones
	- Agregaciones
	- Joins
- Se ejecuta como parte de la aplicación
- Comparativa habitual: Kafka Streams vs [apache flink](/backend/apache-flink/)
	- Kafka Streams: simple, embebido, acoplado a Kafka
	- Flink: motor independiente, más potente para streaming complejo

## Casos de uso habituales
- Procesamiento de eventos en tiempo real
- Arquitecturas de microservicios desacopladas
- Pipelines de datos
- Sistemas de recomendación
- Detección de fraude
- Sincronización de estados entre sistemas
- Event sourcing

## Documentación y lecturas
### Docs internas
- Understanding Apache Kafka A Deep Dive into its Architecture-understanding-apache-kafka-a-deep-dive-into-its-architecture-9fed765507a3
- ¿Qué es Apache Kafka Google Cloud-what-is-apache-kafkahl=es
- [apache](/backend/apache/)
- Flink vs. Kafka y su papel en el flujo de datos en streaming-event-stream-processing-flink-vs-kafka

### Documentación oficial
- [Apache Kafka](https://kafka.apache.org/documentation/#gettingStarted)
- [Apache Kafka](https://kafka.apache.org/quickstart)

## Kafka con Docker
### Imágenes oficiales y populares
- [hub.docker.com/r/apache/kafka](https://hub.docker.com/r/apache/kafka)
- [hub.docker.com/r/bitnami/kafka](https://hub.docker.com/r/bitnami/kafka)

### Guías y ejemplos
- Guide to Setting Up Apache Kafka Using Docker  Baeldung on Ops-kafka-docker-setup
- Ejemplo en Git [Docker](/software%20engineering/docker/)
	- [GitHub - ProgramandoConEstilo/kafka: Arquitectura de mensajeria local con Kafka](https://github.com/ProgramandoConEstilo/kafka)
# Apache Kafka · Fundamentos y Arquitectura

## Fundamentos de diseño
### Event Streaming Platform
- Kafka está diseñado como una **plataforma de eventos**, no solo mensajería
- Los eventos representan hechos inmutables ocurridos en el sistema
- Los datos se tratan como una secuencia continua, no como mensajes efímeros

### Inmutabilidad y persistencia
- Los eventos nunca se modifican una vez escritos
- La persistencia en disco es un principio clave, no un efecto secundario
- El rendimiento se logra mediante escrituras secuenciales y page cache del SO

### Escalabilidad horizontal
- Escala añadiendo brokers al clúster
- El paralelismo se basa en particiones
- No existe un nodo central de procesamiento

### Tolerancia a fallos
- Replicación de datos entre brokers
- Elección automática de líderes
- Capacidad de continuar operando ante caídas parciales

## Arquitectura general
### Componentes principales
- **Brokers**
	- Nodos del clúster Kafka
	- Almacenan datos y sirven lecturas/escrituras
- **Clúster**
	- Conjunto de brokers coordinados
	- Permite alta disponibilidad y escalado

### Arquitectura distribuida
- Cada broker es independiente
- El estado del sistema está distribuido
- No hay single point of failure a nivel lógico

## Arquitectura de almacenamiento
### Log distribuido
- Cada partición es un log append-only
- Escrituras secuenciales optimizadas para disco
- Lecturas eficientes mediante offsets

### Segmentos
- Las particiones se dividen internamente en **segmentos**
- Cada segmento es un archivo físico en disco
- Facilitan:
	- Retención
	- Borrado
	- Compactación

### Retención de datos
- Basada en:
	- Tiempo
	- Tamaño
- Los datos se eliminan de forma automática
- La retención es independiente del consumo

### Log Compaction
- Mantiene solo el último valor por clave
- Útil para:
	- Estados
	- Configuraciones
	- Snapshots lógicos
- No elimina el log, lo compacta

## Arquitectura de replicación
### Leader y Followers
- Cada partición tiene un **líder**
- Los followers replican los datos del líder
- Solo el líder acepta escrituras

### ISR (In-Sync Replicas)
- Conjunto de réplicas sincronizadas
- Garantiza consistencia y durabilidad
- Una réplica fuera del ISR no puede ser líder

### Durabilidad
- Confirmaciones configurables (acks)
- Control entre latencia y fiabilidad
- Persistencia en disco antes de confirmar

## Coordinación y metadatos
### Metadata distribuida
- Kafka mantiene metadatos sobre:
	- Brokers
	- Topics
	- Particiones
	- Líderes
- Los clientes cachean metadatos para eficiencia

### Control plane vs Data plane
- **Control plane**
	- Gestión del clúster
	- Metadatos
	- Rebalanceos
- **Data plane**
	- Flujo real de eventos
	- Lecturas y escrituras de datos

## Arquitectura de red
### Comunicación cliente-broker
- Los clientes se conectan directamente al broker líder
- No hay proxy intermedio
- Reduce latencia y cuellos de botella

### Pull model
- Los consumidores **piden** datos
- Evita sobrecargar al consumidor
- Permite control de backpressure

## Consistencia y semántica
### At-least-once y exactly-once
- Kafka soporta distintas garantías según configuración
- Exactly-once mediante:
	- Idempotent producers
	- Transacciones
- Especialmente relevante en pipelines complejos

### Idempotencia
- Evita duplicados a nivel de productor
- Clave para arquitecturas robustas

## Arquitectura orientada a eventos
### Event-driven architecture
- Kafka actúa como backbone central
- Servicios reaccionan a eventos
- Reduce acoplamiento temporal y lógico

### Event sourcing
- El estado se deriva de eventos
- Kafka almacena la fuente de verdad
- Permite reconstrucción y auditoría completa

## Comparativa arquitectónica
### Kafka vs sistemas tradicionales
- No es un message queue clásico
- No elimina mensajes tras consumirlos
- Está pensado para múltiples consumidores y replay

### Kafka como infraestructura
- Similar a una base de datos de eventos
- Usado como capa fundamental de datos
- Base para sistemas analíticos y operacionales

## Relación con otros sistemas
- Se integra con motores de streaming
- Actúa como buffer, backbone y fuente de eventos
- Complementa, no reemplaza, otros sistemas de procesamiento

# Apache Kafka · Conceptos Avanzados y Temas Complementarios

## Seguridad
### Autenticación
- Soporte para SASL
- Mecanismos comunes:
	- SASL/PLAIN
	- SASL/SCRAM
	- Kerberos (SASL/GSSAPI)
- Controla quién puede conectarse al clúster

### Autorización
- Basada en ACLs
- Permisos por:
	- Topic
	- Consumer Group
	- Operaciones (READ, WRITE, DESCRIBE, CREATE)
- Enfoque de mínimo privilegio

### Cifrado
- TLS para tráfico en red
- Protege datos en tránsito
- Compatible con entornos regulados

## Gobernanza del dato
### Esquemas
- Kafka no impone esquema
- Uso habitual de:
	- Avro
	- Protobuf
	- JSON Schema
- Externalización del esquema para evolución controlada

### Schema Registry
- Versionado de esquemas
- Compatibilidad hacia atrás y adelante
- Reduce errores entre productores y consumidores

## Operación del clúster
### Dimensionamiento
- Factores clave:
	- Throughput esperado
	- Retención
	- Tamaño de mensajes
	- Número de particiones
- Impacto directo en coste y rendimiento

### Particionamiento estratégico
- Claves mal elegidas generan hot partitions
- Claves bien distribuidas maximizan paralelismo
- Diseño crítico a largo plazo

### Rebalanceos
- Ocurren cuando:
	- Entran o salen consumidores
	- Cambian particiones
- Impacto en latencia
- Estrategias para minimizarlos

## Rendimiento
### Batch y compresión
- Productores envían mensajes en batch
- Compresión soportada:
	- gzip
	- snappy
	- lz4
	- zstd
- Trade-off entre CPU y ancho de banda

### Zero-copy
- Uso de `sendfile`
- Evita copias innecesarias en memoria
- Alto rendimiento en lectura

### Page cache
- Kafka confía en el SO
- No cachea datos en memoria de la JVM
- Diseño simple y eficiente

## Gestión del tiempo
### Event time vs Processing time
- Kafka maneja eventos sin imponer semántica temporal
- El tiempo del evento es responsabilidad del payload
- Importante para motores de streaming aguas abajo

### Retención y replay
- El replay es una característica central
- Permite:
	- Reprocesar datos históricos
	- Corregir errores lógicos
	- Backfilling de sistemas nuevos

## Integración con ecosistema
### Kafka Connect
- Framework para integraciones
- Conectores:
	- Source
	- Sink
- Uso común:
	- Bases de datos
	- Sistemas de archivos
	- Servicios externos

### Conectores distribuidos
- Escalan horizontalmente
- Gestión centralizada
- Configuración declarativa

## Multi-cluster y replicación
### Replicación entre clústeres
- Necesaria para:
	- DR (Disaster Recovery)
	- Latencia geográfica
	- Separación de cargas
- No es nativa entre clústeres

### MirrorMaker
- Herramienta para replicación
- Replica topics entre clústeres
- Usada en arquitecturas multi-región

## Observabilidad
### Métricas
- Métricas JMX expuestas por brokers
- Monitorización de:
	- Latencia
	- Throughput
	- ISR
	- Uso de disco

### Logging operativo
- Logs del broker para:
	- Diagnóstico
	- Auditoría
	- Debugging
- Diferentes niveles de log configurables

## Evolución y compatibilidad
### Cambios de versión
- Compatibilidad hacia atrás en protocolos
- Rolling upgrades posibles
- Importancia de revisar cambios de comportamiento

### APIs estables
- APIs de productor y consumidor estables
- Bajo impacto en aplicaciones al actualizar brokers

## Antipatrones comunes
### Uso como cola clásica
- Borrar mensajes tras consumirlos
- Un solo consumidor por topic
- No aprovechar replay

### Exceso de topics
- Demasiados topics pequeños
- Sobrecarga operativa
- Problemas de metadata

### Mala gestión de offsets
- Commit automático sin control
- Riesgo de pérdida o duplicados
- Necesidad de estrategia consciente

## Kafka como pieza de arquitectura
### Rol estratégico
- Infraestructura base, no librería
- Impacto transversal en la organización
- Requiere gobierno y estándares claros

### Madurez organizativa
- Diseños event-driven requieren:
	- Disciplina
	- Observabilidad
	- Contratos de eventos
- Kafka amplifica buenas y malas decisiones

# Apache Kafka · Glosario de Conceptos

## Conceptos básicos
- **Evento**
	- Hecho inmutable ocurrido en un sistema
	- Unidad fundamental de datos en Kafka
- **Event Streaming**
	- Flujo continuo de eventos en tiempo real
	- Modelo central de Kafka
- **Productor (Producer)**
	- Aplicación que publica eventos en Kafka
- **Consumidor (Consumer)**
	- Aplicación que lee eventos desde Kafka
- **Clúster**
	- Conjunto de brokers Kafka trabajando de forma coordinada
- **Broker**
	- Nodo individual dentro del clúster
	- Almacena datos y gestiona lecturas/escrituras

## Topics y particiones
- **Topic**
	- Canal lógico donde se publican eventos
	- Similar a una tabla o stream
- **Partición**
	- Subdivisión de un topic
	- Permite paralelismo y escalabilidad
- **Clave (Key)**
	- Atributo usado para decidir la partición
	- Garantiza orden por clave dentro de una partición
- **Orden**
	- Garantizado únicamente dentro de una partición
	- No existe orden global

## Almacenamiento y offsets
- **Log**
	- Estructura append-only donde se almacenan eventos
- **Offset**
	- Posición numérica de un evento dentro de una partición
	- Actúa como puntero de lectura
- **Segmento**
	- Archivo físico que compone una partición
	- Facilita retención y compactación
- **Retención**
	- Política que define cuánto tiempo o tamaño se conservan los datos
- **Log Compaction**
	- Retiene solo el último valor por clave
	- Útil para estados y configuraciones

## Consumo y escalado
- **Consumer Group**
	- Conjunto lógico de consumidores
	- Cada partición se asigna a un solo consumidor del grupo
- **Rebalanceo**
	- Reasignación de particiones entre consumidores
	- Ocurre al escalar o fallar instancias
- **Pull Model**
	- El consumidor solicita datos al broker
	- Permite control de backpressure

## Replicación y tolerancia a fallos
- **Leader**
	- Réplica principal de una partición
	- Única que acepta escrituras
- **Follower**
	- Réplica secundaria
	- Copia datos del líder
- **Replica**
	- Copia de una partición en otro broker
- **ISR (In-Sync Replicas)**
	- Réplicas sincronizadas con el líder
	- Base para la durabilidad
- **acks**
	- Nivel de confirmación de escritura
	- Controla latencia vs fiabilidad

## Semántica de entrega
- **At-least-once**
	- Un evento puede procesarse más de una vez
- **At-most-once**
	- Un evento puede perderse pero no duplicarse
- **Exactly-once**
	- Garantía de procesamiento único
	- Requiere productores idempotentes y transacciones
- **Idempotencia**
	- Capacidad de evitar duplicados al reintentar envíos

## Procesamiento y ecosistema
- **Kafka Streams**
	- Librería para procesar datos directamente desde Kafka
- **State Store**
	- Almacenamiento local de estado en Kafka Streams
- **Kafka Connect**
	- Framework de integración con sistemas externos
- **Source Connector**
	- Inserta datos desde sistemas externos a Kafka
- **Sink Connector**
	- Envía datos desde Kafka a sistemas externos

## Tiempo y replay
- **Event Time**
	- Momento en que ocurrió el evento
- **Processing Time**
	- Momento en que el evento es procesado
- **Replay**
	- Relectura de eventos históricos
	- Clave para reprocesamiento y auditoría

## Seguridad
- **SASL**
	- Mecanismo de autenticación
- **ACL**
	- Reglas de autorización por recurso
- **TLS**
	- Cifrado de datos en tránsito

## Arquitectura y gobierno
- **Event-driven Architecture**
	- Sistemas que reaccionan a eventos
- **Event Sourcing**
	- El estado se deriva de una secuencia de eventos
- **Schema Registry**
	- Servicio para gestionar y versionar esquemas
- **Contrato de eventos**
	- Acuerdo sobre estructura y significado de los eventos
- **Backbone de datos**
	- Kafka como infraestructura central de intercambio de eventos

## Operación y observabilidad
- **Throughput**
	- Cantidad de datos procesados por unidad de tiempo
- **Latencia**
	- Tiempo desde la publicación hasta el consumo
- **JMX**
	- Interfaz para métricas del broker
- **Rolling Upgrade**
	- Actualización del clúster sin parada completa
```