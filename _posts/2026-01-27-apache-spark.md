tags:
  - GCP
  - IA
status: 🌟
Parent: "Area-Prog"
categories: "[Data Science](/data%20science/data-science/)"
public_note: "true"
# APACHE SPARK
``

- hadoop
- [apache](/backend/apache/)
- [cloud](/cloud/cloud/)
- [Data Science](/data%20science/data-science/)
- IA
- Big Data
- [Stream Processing](/backend/stream-processing/)
- Apache Spark vs. Hadoop Diferencias Clave y Cuándo Usar Cada Uno

## Fundamentos de Apache Spark
Apache Spark es un motor de procesamiento distribuido de código abierto diseñado para el procesamiento rápido de grandes volúmenes de datos, tanto batch como en tiempo real. Su arquitectura permite escalabilidad horizontal y procesamiento en memoria, lo que lo hace más rápido que los sistemas tradicionales basados en disco como Hadoop MapReduce.

### Características Principales
- Procesamiento en memoria: reduce el tiempo de lectura/escritura en disco.
- Soporte para múltiples lenguajes: Scala, Java, Python y R.
- Compatibilidad con hadoop y otros sistemas de almacenamiento como S3, HDFS y bases de datos NoSQL.
- Capacidad para procesamiento batch y stream en un mismo framework.
- Extensiones para análisis avanzado: [Data Science](/data%20science/data-science/) y IA.
- Optimización automática de consultas mediante Catalyst Optimizer y Tungsten Engine.

### Componentes Clave
- **Spark Core:** motor central que maneja la planificación, distribución y ejecución de tareas.
- **Spark SQL:** módulo para trabajar con datos estructurados y consultas SQL.
- **Spark Streaming:** permite el procesamiento de datos en tiempo real.
- **MLlib:** librería de aprendizaje automático.
- **GraphX:** para procesamiento y análisis de grafos.
- **SparkR y PySpark:** interfaces para R y Python respectivamente.

## Arquitectura de Apache Spark
Apache Spark sigue una arquitectura maestro-esclavo basada en cluster:

- **Driver:** componente principal que coordina la ejecución de aplicaciones, mantiene el DAG (Directed Acyclic Graph) de tareas y comunica con los ejecutores.
- **Cluster Manager:** gestiona los recursos del cluster. Puede ser:
	- Spark Standalone
	- YARN
	- Mesos
	- Kubernetes
- **Executors:** nodos que ejecutan tareas en paralelo y almacenan datos en memoria o disco.
- **Task:** unidad de trabajo mínima que se ejecuta en un executor.
- **RDD (Resilient Distributed Dataset):** estructura de datos distribuida y tolerante a fallos.
- **DataFrame y Dataset:** abstracciones de datos estructurados optimizadas.

## Procesamiento y Optimización
- **Transformaciones:** operaciones que crean nuevos RDD sin ejecutar tareas inmediatamente (lazy evaluation).
- **Acciones:** operaciones que devuelven un resultado o escriben datos, desencadenando la ejecución.
- **Particionamiento:** clave para la eficiencia; permite distribuir datos y tareas de manera óptima.
- **Caching y Persistencia:** almacenamiento temporal de RDD/DataFrame en memoria para acelerar consultas repetidas.

## Integración y Ecosistema
- Compatible con hadoop para almacenamiento y procesamiento.
- Se integra con [cloud](/cloud/cloud/) para despliegues escalables (AWS EMR, Azure Databricks, GCP Dataproc).
- Se conecta con bases de datos y sistemas de mensajería: Kafka, Cassandra, HBase, MongoDB.

## Casos de Uso
- Procesamiento de grandes volúmenes de datos batch.
- Análisis en tiempo real de logs y métricas de aplicaciones.
- Machine Learning y predicciones sobre grandes datasets.
- Procesamiento de grafos para redes sociales, recomendaciones y detección de fraudes.
- ETL distribuido y optimizado para Big Data.

## Ejemplo de Código: PySpark
### Creación de SparkSession
{% raw %}
```python
from pyspark.sql import SparkSession

spark = SparkSession.builder \
	.appName("EjemploSpark") \
	.getOrCreate()
```
{% endraw %}`

### Creación y Transformación de DataFrame

{% raw %}
```python
data = [("Eduardo", 30), ("Ana", 25), ("Luis", 35)]
columns = ["Nombre", "Edad"]

df = spark.createDataFrame(data, columns)
df.show()

df_filtered = df.filter(df.Edad > 28)
df_filtered.show()
```
{% endraw %}

### Lectura y Escritura de Datos

{% raw %}
```python
# Leer desde CSV
df_csv = spark.read.csv("datos.csv", header=True, inferSchema=True)

# Escribir en parquet
df_csv.write.parquet("salida.parquet")
```
{% endraw %}

## Optimización y Buenas Prácticas

- Usar **DataFrames/Datasets** en lugar de RDD cuando sea posible.
- Aplicar **persistencia** solo cuando sea necesario.
- Ajustar el **número de particiones** según tamaño de datos y recursos.
- Monitorear y depurar con Spark UI para identificar cuellos de botella.
- Evitar **shuffles innecesarios** para reducir tiempo de ejecución.

## Recursos y Referencias

- [Documentación oficial de Apache Spark](https://spark.apache.org/docs/latest/)
- Apache Spark vs. Hadoop Diferencias Clave y Cuándo Usar Cada Uno

# APACHE SPARK AVANZADO
## Optimización Avanzada
### Catalyst Optimizer
- Motor de optimización de consultas de Spark SQL.
- Aplica reglas de reescritura lógica para mejorar el plan de ejecución.
- Optimiza joins, filtros y proyecciones de manera automática.

### Tungsten Engine
- Optimización a nivel de memoria y CPU.
- Usa código generado dinámicamente para operaciones en columnas.
- Reduce el overhead de Java Virtual Machine (JVM) en procesos masivos.

### Broadcast Variables y Accumulators
- **Broadcast Variables:** permiten enviar una copia de datos a todos los nodos sin replicarla en cada tarea.
- **Accumulators:** variables compartidas para sumar valores de manera segura en tareas distribuidas.

### Shuffle Optimization
- Evitar wide transformations innecesarias (reduceByKey vs groupByKey).
- Ajustar número de particiones para minimizar movimientos de datos.
- Usar **salting** para manejar keys muy grandes o skewed.

## Tolerancia a Fallos
- Spark re-ejecuta tareas fallidas basándose en el DAG.
- **Checkpointing:** guardado de estados intermedios en RDD o Structured Streaming para recuperación.
- Persistencia selectiva para asegurar consistencia y eficiencia.

## Structured Streaming
- **Micro-batch Processing:** procesamiento en pequeños lotes de datos.
- **Continuous Processing:** baja latencia para flujos de datos casi en tiempo real.
- **Watermarking:** manejo de eventos tardíos y ventanas de tiempo.
- **Output Modes:**
	- Append: solo nuevos registros.
	- Update: registros modificados.
	- Complete: resultados completos.

## Integraciones Avanzadas
- **Kafka:** ingestión de streams en tiempo real.
- **Delta Lake:** almacenamiento con transacciones ACID, manejo de versiones y upserts.
- **MLlib:** pipelines de machine learning distribuido.
- **Bases de datos y almacenamiento:** Cassandra, HBase, S3, JDBC.

## Seguridad y Despliegue
- Autenticación: Kerberos y LDAP.
- Autorización: ACLs y roles.
- Encriptación de datos en tránsito y reposo.
- Despliegue en cloud: AWS EMR, Azure Databricks, GCP Dataproc.

## Buenas Prácticas para Producción
- Ajustar recursos: número de ejecutores, cores por executor, memoria.
- Evitar anti-patrones: shuffles innecesarios, caching excesivo.
- Monitoreo: Spark UI, Ganglia, Prometheus.
- Logging estructurado y alertas tempranas.

## Casos de Uso Avanzados
- Recomendadores en tiempo real.
- Análisis de grafos complejos con GraphX.
- Entrenamiento distribuido de modelos ML y deep learning.
- ETL masivo y optimizado para Big Data.
- Procesamiento de logs y métricas en streaming.

## Ejemplo de Código: Broadcast y Accumulator en PySpark
### Broadcast
{% raw %}
```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("BroadcastExample").getOrCreate()
data = [("Ana", 25), ("Luis", 35), ("Eduardo", 30)]
df = spark.createDataFrame(data, ["Nombre", "Edad"])

factor = 2
broadcast_factor = spark.sparkContext.broadcast(factor)

df_rdd = df.rdd.map(lambda row: (row.Nombre, row.Edad * broadcast_factor.value))
df_rdd.collect()
```
{% endraw %}`

### Accumulator

{% raw %}
```python
accum = spark.sparkContext.accumulator(0)

def increment(x):
	global accum
	if x > 30:
		accum += 1
	df_rdd.collect()

print("Cantidad de mayores de 30:", accum.value)
```
{% endraw %}

## Ejemplo de Código: Structured Streaming con Kafka

{% raw %}
```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import expr

spark = SparkSession.builder.appName("StreamingKafkaExample").getOrCreate()

df_stream = spark.readStream \
	.format("kafka") \
	.option("kafka.bootstrap.servers", "localhost:9092") \
	.option("subscribe", "topic_test") \
	.load()

df_parsed = df_stream.selectExpr("CAST(key AS STRING)", "CAST(value AS STRING)")

query = df_parsed.writeStream \
	.outputMode("append") \
	.format("console") \
	.start()

query.awaitTermination()
```
{% endraw %}

## Recursos y Referencias Avanzadas

- [Documentación oficial de Apache Spark](https://spark.apache.org/docs/latest/)
- Apache Spark vs. Hadoop Diferencias Clave y Cuándo Usar Cada Uno
- [Delta Lake](https://delta.io/)
- MLlib
- Kafka
# APACHE SPARK Hadoop
Objetivo: Al finalizar el módulo el alumno será capaz de importar datos a Apache Hadoop Cluster y procesarlos con Spark, Hive, Flume, Sqoop, Impala, y otras herramientas del ecosistema de Hadoop.

- Parte 1
	-   Introduction to Hadoop and the Hadoop Ecosystem
	-   Hadoop Architecture and HDFS
	-   Importing Relational Data with Apache Sqoop
- Parte 2
	-   Introduction to Impala and Hive
	-   Modeling and Managing Data with Impala and Hive
	-   Data Formats
	-   Data Partitioning
- Parte 3
	-   Capturing Data with Apache Flume
	-   Spark Basics
	-   Working with RDDs in Spark
	-   Writing and Deploying Spark Applications
- Parte 4
	-   Parallel Programming with Spark
	-   Spark Caching and Persistence
	-   Common Patterns in Spark Data Processing
	-   Preview: Spark SQL
	-   Conclusion

## Parte 1: Introduction to Hadoop and the Hadoop Ecosystem
Apache Hadoop es un framework de código abierto diseñado para el almacenamiento y procesamiento distribuido de grandes volúmenes de datos (Big Data) en clusters de servidores. Su diseño permite tolerancia a fallos, escalabilidad horizontal y procesamiento paralelo masivo.

### Componentes del Ecosistema Hadoop
- **Hadoop Distributed File System (HDFS):** sistema de archivos distribuido que almacena datos en bloques replicados en varios nodos del cluster para garantizar tolerancia a fallos.
- **MapReduce:** modelo de programación para procesamiento distribuido de datos en paralelo.
- **YARN (Yet Another Resource Negotiator):** gestor de recursos del cluster que coordina la ejecución de aplicaciones.
- **Hive:** motor de SQL sobre Hadoop para consultas de datos estructurados.
- **Pig:** lenguaje de alto nivel para procesamiento de datos grandes, basado en scripts.
- **HBase:** base de datos NoSQL distribuida para acceso en tiempo real a datos masivos.
- **Sqoop:** herramienta para importar/exportar datos entre Hadoop y bases de datos relacionales.
- **Flume:** sistema de ingestión de datos en streaming hacia Hadoop.
- **Impala:** motor SQL en tiempo real para Hadoop, optimizado para consultas rápidas.

### Beneficios del Ecosistema
- Escalabilidad: fácil de ampliar agregando nodos al cluster.
- Resiliencia: replicación de datos y recuperación ante fallos de nodos.
- Flexibilidad: soporte para diferentes tipos de datos (estructurados, semiestructurados y no estructurados).
- Integración: interoperabilidad entre componentes para ETL, análisis y procesamiento en tiempo real.

## Parte 1: Hadoop Architecture and HDFS
Hadoop se basa en una arquitectura maestro-esclavo, diseñada para procesar datos en paralelo y distribuir la carga de manera eficiente.

### Componentes Clave
- **NameNode:** nodo maestro que mantiene el metadata del sistema de archivos y coordina el acceso a los datos.
- **DataNode:** nodos esclavos que almacenan bloques de datos y ejecutan operaciones de lectura/escritura.
- **Secondary NameNode:** nodo auxiliar que realiza checkpoints del NameNode para evitar pérdida de metadata.
- **HDFS:** sistema de archivos distribuido que divide los archivos en bloques (por defecto 128 MB) y los replica en varios DataNodes (replicación por defecto 3).

### Funcionalidades Principales de HDFS
- **Tolerancia a fallos:** mediante replicación de bloques en múltiples nodos.
- **Acceso paralelo:** permite que múltiples tareas accedan a diferentes bloques al mismo tiempo.
- **Almacenamiento escalable:** adecuado para datos masivos de petabytes.
- **Optimización para lectura secuencial:** ideal para grandes volúmenes de datos en procesamiento batch.

## Parte 1: Importing Relational Data with Apache Sqoop
Apache Sqoop es una herramienta diseñada para transferir datos entre sistemas de almacenamiento relacionales (RDBMS) y Hadoop.

### Funcionalidades Principales
- Importación de datos desde bases de datos relacionales a HDFS, Hive o HBase.
- Exportación de datos desde Hadoop hacia bases de datos relacionales.
- Soporte para múltiples RDBMS: MySQL, PostgreSQL, Oracle, SQL Server, entre otros.
- Integración con Hadoop para generar automáticamente ficheros CSV o Avro a partir de tablas relacionales.

### Ejemplo de Uso Básico
{% raw %}
```bash
# Importar una tabla de MySQL a HDFS
sqoop import \
--connect jdbc:mysql://localhost:3306/empresa \
--username usuario \
--password clave \
--table empleados \
--target-dir /hadoop/empleados \
--m 1
```
{% endraw %}`

- `--m 1` indica número de mappers (tareas paralelas) para la importación.
- Los datos importados pueden ser procesados posteriormente con Spark, Hive o Impala.

### Beneficios de Usar Sqoop

- Automatiza la transferencia de grandes volúmenes de datos.
- Mantiene la integridad de los datos durante la importación/exportación.
- Reduce el tiempo de desarrollo en procesos ETL hacia Hadoop.
## Parte 2: Introduction to Impala and Hive
### Apache Hive
Hive es un sistema de data warehouse sobre Hadoop que permite consultar y analizar datos estructurados usando un lenguaje similar a SQL llamado HiveQL. Está optimizado para procesamiento batch de grandes volúmenes de datos almacenados en HDFS.

- Permite transformar consultas SQL en trabajos MapReduce, Tez o Spark.
- Integra con HDFS y soporta múltiples formatos de archivo.
- Facilita la creación de tablas, vistas y particiones para organizar datos.

### Apache Impala
Impala es un motor de consultas SQL de baja latencia para Hadoop, diseñado para consultas interactivas en tiempo real.

- Proporciona acceso rápido a datos almacenados en HDFS o en Hive Metastore.
- Evita la sobrecarga de MapReduce, permitiendo ejecución de queries en segundos.
- Compatible con HiveQL, lo que permite interoperabilidad entre Hive e Impala.

### Diferencias Clave
- Hive: optimizado para procesamiento batch; ideal para análisis complejos y ETL.
- Impala: optimizado para consultas interactivas; ideal para dashboards y reporting en tiempo real.

## Parte 2: Modeling and Managing Data with Impala and Hive
### Tablas y Esquemas
- **Tablas Internas (Managed Tables):** Hive/Impala gestiona el ciclo de vida de los datos; eliminarlas borra los archivos subyacentes.
- **Tablas Externas:** los datos existen fuera del metastore; eliminar la tabla no elimina los datos.
- **Vistas:** consultas guardadas que simplifican consultas complejas o recurrentes.

### Gestión de Datos
- Creación y modificación de tablas con HiveQL.
- Uso de comandos DDL (CREATE, ALTER, DROP) para definir estructuras.
- Integración con Spark para procesamiento distribuido de tablas.

### Optimización
- Definir tipos de datos correctos para reducir espacio y mejorar performance.
- Utilizar particiones y buckets para segmentar datos y acelerar consultas.

## Parte 2: Data Formats
Hadoop y sus motores de procesamiento soportan múltiples formatos de datos, cada uno con ventajas específicas:

- **Text/CSV:** simple y legible, pero poco eficiente en almacenamiento y lectura.
- **Avro:** soporta esquemas evolutivos, eficiente para serialización de datos.
- **Parquet:** columna orientada, ideal para analytics y consultas con filtros, alta compresión.
- **ORC:** optimizado para Hive, almacenamiento columna orientado, alta eficiencia en lectura y compresión.

### Consideraciones
- Elegir formato columna orientado (Parquet, ORC) para queries analíticas.
- Usar Avro para interoperabilidad entre sistemas y evolución de esquemas.
- CSV/Text útil para interoperabilidad con sistemas externos o exportación de datos.

## Parte 2: Data Partitioning
La partición de datos es clave para mejorar la eficiencia en procesamiento y consultas sobre grandes volúmenes de datos.

### Conceptos Clave
- **Particiones:** división lógica de tablas basadas en columnas (ej. fecha, región). Cada partición se almacena como subdirectorio en HDFS.
- **Buckets:** subdivisión dentro de una partición que distribuye filas según un hash de columnas; útil para joins y sampling.
- **Ventajas:**
	- Reduce la cantidad de datos escaneados en consultas.
	- Mejora el rendimiento de joins y agregaciones.
	- Facilita la organización y mantenimiento de datos históricos.

### Ejemplo de Creación de Tabla Particionada en Hive
{% raw %}
```sql
CREATE TABLE ventas (
	id INT,
	producto STRING,
	monto DOUBLE
)
PARTITIONED BY (anio INT, mes INT)
STORED AS PARQUET;
```
{% endraw %}`

### Ejemplo de Consulta Particionada

{% raw %}
```sql
SELECT producto, SUM(monto)
FROM ventas
WHERE anio = 2025 AND mes = 12
GROUP BY producto;
```
{% endraw %}

* Solo se escanean los datos correspondientes a la partición seleccionada, mejorando el rendimiento de la consulta.




## Parte 3: Capturing Data with Apache Flume
Apache Flume es un sistema distribuido diseñado para la ingestión eficiente de grandes volúmenes de datos de manera confiable hacia Hadoop.

### Componentes Principales
- **Source:** origen de los datos (logs de aplicaciones, sensores, sistemas de mensajería).
- **Channel:** almacenamiento temporal de eventos mientras esperan ser enviados al destino.
- **Sink:** destino final de los datos, como HDFS, HBase o Kafka.

### Funcionalidades
- Captura de datos en tiempo real desde múltiples fuentes.
- Tolerancia a fallos mediante canales persistentes.
- Escalabilidad horizontal mediante agentes Flume adicionales.
- Integración con Spark para procesamiento en tiempo real o batch.

### Ejemplo de Configuración Básica
{% raw %}
```properties
# Flume agent configuration
agent.sources = source1
agent.channels = channel1
agent.sinks = sink1

agent.sources.source1.type = exec
agent.sources.source1.command = tail -F /var/log/app.log
agent.sources.source1.channels = channel1

agent.channels.channel1.type = memory
agent.sinks.sink1.type = hdfs
agent.sinks.sink1.hdfs.path = hdfs://namenode:8020/logs/
agent.sinks.sink1.channel = channel1
```
{% endraw %}`

## Parte 3: Spark Basics

Apache Spark es un motor de procesamiento distribuido diseñado para procesamiento en memoria de grandes volúmenes de datos.

### Conceptos Fundamentales

* **Driver Program:** coordina la ejecución de la aplicación Spark.
* **Cluster Manager:** administra los recursos del cluster (YARN, Standalone, Mesos, Kubernetes).
* **Executors:** nodos donde se ejecutan las tareas en paralelo.
* **Task:** unidad mínima de trabajo ejecutada en un executor.
* **RDD (Resilient Distributed Dataset):** colección distribuida de datos tolerante a fallos.
* **DataFrame/Dataset:** abstracciones de datos estructurados que facilitan consultas y optimizaciones.

### Ventajas

* Procesamiento en memoria para alta velocidad.
* APIs unificadas para batch y stream.
* Soporte para múltiples lenguajes: Scala, Java, Python y R.
* Optimización automática con Catalyst y Tungsten.

## Parte 3: Working with RDDs in Spark

Los RDDs son la base de Spark y permiten el procesamiento distribuido y tolerante a fallos de los datos.

### Operaciones Principales

* **Transformations:** operaciones que crean nuevos RDDs (p. ej., map, filter, flatMap, reduceByKey). Se ejecutan de manera perezosa (lazy evaluation).
* **Actions:** operaciones que devuelven resultados o escriben datos (p. ej., collect, count, saveAsTextFile).

### Persistencia y Particionamiento

* **Caching/Persisting:** almacena RDD en memoria o disco para acelerar consultas repetidas.
* **Particionamiento:** distribuir datos entre nodos para paralelismo y minimizar shuffles.

### Ejemplo Básico en PySpark

{% raw %}
```python
rdd = spark.sparkContext.parallelize([1, 2, 3, 4, 5])
rdd_filtered = rdd.filter(lambda x: x % 2 == 0)
rdd_sum = rdd_filtered.reduce(lambda a, b: a + b)
print(rdd_sum)  # Output: 6
```
{% endraw %}

## Parte 3: Writing and Deploying Spark Applications

### Estructura de una Aplicación Spark

* Definir **SparkSession** o **SparkContext**.
* Leer y transformar datos usando RDDs, DataFrames o Datasets.
* Aplicar transformaciones y acciones según la lógica de negocio.
* Guardar resultados en HDFS, bases de datos o sistemas de almacenamiento compatibles.

### Ejemplo de Aplicación PySpark

{% raw %}
```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("EjemploAppSpark").getOrCreate()

df = spark.read.csv("hdfs://namenode:8020/data/ventas.csv", header=True, inferSchema=True)
df_filtered = df.filter(df.monto > 100)
df_agg = df_filtered.groupBy("producto").sum("monto")
df_agg.write.parquet("hdfs://namenode:8020/output/ventas_agg.parquet")

spark.stop()
```
{% endraw %}

### Despliegue

* **Modo Local:** para desarrollo y pruebas en máquina local.
* **Modo Cluster:** enviar la aplicación a un cluster Hadoop/Spark para ejecución distribuida.
* **Comando spark-submit:**

{% raw %}
```bash
spark-submit \
--master yarn \
--deploy-mode cluster \
--num-executors 4 \
--executor-memory 4G \
--executor-cores 2 \
mi_aplicacion.py
```
{% endraw %}

* Parámetros importantes:

  * `--master`: tipo de cluster manager.
  * `--deploy-mode`: modo de despliegue (client o cluster).
  * `--num-executors`, `--executor-memory`, `--executor-cores`: configuración de recursos para optimización del rendimiento.





## Parte 4: Parallel Programming with Spark
Spark permite el procesamiento paralelo de grandes volúmenes de datos mediante la distribución de tareas entre múltiples nodos de un cluster.

### Conceptos Clave
- **Task:** unidad mínima de trabajo que se ejecuta en un executor.
- **Stage:** conjunto de tareas que se pueden ejecutar en paralelo sin necesidad de shuffle.
- **Shuffle:** redistribución de datos entre nodos durante operaciones que requieren agregación o joins, puede ser costosa en términos de rendimiento.
- **Partitioning:** división de RDD/DataFrame en particiones que se distribuyen entre nodos para paralelismo.
- **Lazy Evaluation:** las transformaciones no se ejecutan inmediatamente, se construye un DAG (Directed Acyclic Graph) de operaciones que se ejecuta al llamar a una acción.

### Buenas Prácticas
- Minimizar shuffles usando operaciones como `reduceByKey` en lugar de `groupByKey`.
- Alinear el número de particiones con la cantidad de cores disponibles en el cluster.
- Usar `mapPartitions` para optimizar procesamiento cuando se necesita inicializar recursos costosos por partición.

## Parte 4: Spark Caching and Persistence
Caching y persistence permiten almacenar RDD o DataFrames en memoria o disco para acelerar operaciones repetidas.

### Tipos de Persistencia
- **MEMORY_ONLY:** almacena en memoria RAM, más rápido pero depende de la memoria disponible.
- **MEMORY_AND_DISK:** almacena en memoria y si se llena se escribe en disco.
- **DISK_ONLY:** almacena solo en disco, útil para datasets muy grandes.
- **MEMORY_ONLY_SER / MEMORY_AND_DISK_SER:** versiones serializadas que ocupan menos espacio en memoria.

### Ejemplo en PySpark
{% raw %}
```python
rdd = spark.sparkContext.textFile("hdfs://namenode:8020/logs/app.log")
rdd_filtered = rdd.filter(lambda line: "ERROR" in line)
rdd_filtered.persist(storageLevel=StorageLevel.MEMORY_AND_DISK)
count_errors = rdd_filtered.count()
```
{% endraw %}`

### Beneficios

* Reducción del tiempo de ejecución en pipelines iterativos.
* Mejora del rendimiento de algoritmos de ML o procesamiento de grafos.
* Control del uso de memoria según tamaño del dataset y recursos disponibles.

## Parte 4: Common Patterns in Spark Data Processing

Algunos patrones comunes que facilitan el desarrollo de aplicaciones Spark:

* **Map-Reduce:** transformación seguida de agregación.
* **Filtering:** eliminación de registros irrelevantes antes de análisis pesado.
* **Joining:** combinación de datasets basados en claves; optimizar usando broadcast joins si un dataset es pequeño.
* **Aggregation:** sumarización de datos por columnas o grupos.
* **Windowing:** cálculos sobre ventanas de tiempo o grupos de filas para análisis temporales o secuenciales.

### Ejemplo de Patrón Map-Reduce

{% raw %}
```python
rdd = spark.sparkContext.parallelize([("a",1), ("b",1), ("a",2)])
rdd_agg = rdd.reduceByKey(lambda x, y: x + y)
rdd_agg.collect()  # Output: [('a',3), ('b',1)]
```
{% endraw %}

## Parte 4: Preview: Spark SQL

Spark SQL permite consultar datos estructurados usando SQL y DataFrames, integrando optimizaciones automáticas del motor Catalyst.

* Permite ejecutar consultas sobre RDD, DataFrames o tablas Hive.
* Ofrece funciones integradas para agregaciones, joins y operaciones complejas.
* Soporta integración con BI tools y visualización de datos.
* Ejemplo básico:

{% raw %}
```python
df.createOrReplaceTempView("ventas")
result = spark.sql("SELECT producto, SUM(monto) as total FROM ventas GROUP BY producto")
result.show()
```
{% endraw %}

## Parte 4: Conclusion

* Apache Spark proporciona un entorno unificado para procesamiento batch, streaming, SQL y machine learning.
* Aprovecha la distribución de datos y el paralelismo para manejar grandes volúmenes de información.
* La combinación de RDDs, DataFrames, caching, persistencia y patrones de programación paralela permite desarrollar aplicaciones eficientes y escalables.
* Spark SQL y la integración con el ecosistema Hadoop (Hive, HDFS, Sqoop, Flume, Impala) amplían las capacidades de análisis y procesamiento de datos estructurados y semiestructurados.

# DESARROLLADOR CLOUDERA PARA APACHE SPARK II
Objetivo: Al finalizar el módulo el alumno será capaz de: simplificar el desarrollo con Kite SDK, definir y usar Data Sets, importar datos relacionales con Apache Sqoop, capturar datos con Apache Flume y desarrollar componentes personalizados, manejar Workflows con Apache Oozie, procesar pipeline de datos con Apache Crunch, leer y analizar formatos de datos customizados en Apache Hive, responder queries interactivas con Impala, transformar Data Streams con Morphlines, autorizar búsqueda completa en los datos guardados con HDFS y presentar resultados a los usuarios.

## Parte 1: Arquitectura de aplicaciones
La arquitectura de aplicaciones en el ecosistema Cloudera está diseñada para facilitar el procesamiento de datos masivos de manera distribuida y escalable, integrando herramientas de ingestión, almacenamiento, análisis y visualización.

### Componentes Principales
- **Apache Spark:** motor central para procesamiento batch y streaming.
- **HDFS:** almacenamiento distribuido que garantiza tolerancia a fallos y escalabilidad.
- **Hive y Impala:** motores para consultas SQL sobre datos estructurados.
- **Sqoop y Flume:** herramientas de ingestión de datos relacionales y streaming.
- **Kite SDK:** simplifica el desarrollo y manejo de datasets en Hadoop.
- **Oozie:** coordinador de workflows para tareas programadas y pipelines complejos.

### Patrones de Arquitectura
- **Lambda Architecture:** combina procesamiento batch (Spark/Hive) con procesamiento en tiempo real (Spark Streaming/Flume).
- **Data Lake:** almacenamiento centralizado de datos crudos y procesados en HDFS, accesible por múltiples herramientas.
- **Pipelines de datos:** definición de flujos ETL desde ingestión, transformación, almacenamiento y consumo por aplicaciones.

## Parte 1: Simplificando el desarrollo con Kite SDK
Kite SDK es un framework que simplifica la interacción con datasets en Hadoop, proporcionando APIs de alto nivel para lectura, escritura y validación de datos.

### Funcionalidades Clave
- Manejo de **Data Sets** con esquemas definidos.
- Operaciones de lectura/escritura en HDFS sin necesidad de manejar directamente el bajo nivel del sistema.
- Validación automática de datos contra el esquema definido.
- Integración con herramientas de desarrollo y testing para pipelines de datos.

### Ejemplo de Uso Básico (Java)
{% raw %}
```java
Dataset<Record> dataset = Datasets.create("ventas", Record.class);
Record record = new Record();
record.put("producto", "Laptop");
record.put("monto", 1200.0);
dataset.write(record);
```
{% endraw %}`

## Parte 1: Definiendo y usando Data Sets

Los Data Sets son abstracciones de colecciones de datos con esquema, optimizadas para Hadoop y Spark.

### Ventajas

- Estandarización de datos y consistencia de esquemas.
- Integración con Spark para procesamiento distribuido.
- Facilita la serialización y deserialización de datos.
- Permite validaciones automáticas al escribir datos.

### Operaciones Comunes

- **Creación:** definir nombre y tipo de esquema.
- **Lectura:** acceder a los datos mediante API de alto nivel.
- **Escritura:** persistir datos en HDFS o en formatos column-oriented (Avro, Parquet).
- **Transformación:** map, filter y agregaciones usando APIs de Spark integradas.

## Parte 1: Importación de datos relacionales con Apache Sqoop

Apache Sqoop permite la transferencia eficiente de datos entre bases de datos relacionales (RDBMS) y Hadoop.

### Funcionalidades Principales

- Importar tablas de bases de datos relacionales a HDFS, Hive o HBase.
- Exportar datos desde Hadoop hacia bases de datos.
- Soporte para múltiples RDBMS: MySQL, PostgreSQL, Oracle, SQL Server.
- Integración con Spark y Hive para procesamiento posterior.

### Ejemplo de Importación Básica

{% raw %}
```bash
sqoop import \
--connect jdbc:mysql://localhost:3306/empresa \
--username usuario \
--password clave \
--table empleados \
--target-dir /user/hadoop/empleados \
--m 1
```
{% endraw %}

- `--m 1` indica el número de mappers (tareas paralelas) para la importación.
- Los datos importados pueden ser procesados con Spark, Hive o Impala.

## Parte 2: Captura de datos con Apache Flume
Apache Flume es un sistema distribuido diseñado para recolectar, agregar y mover grandes volúmenes de datos de manera confiable hacia HDFS u otros sistemas de almacenamiento.

### Componentes Principales
- **Source:** origen de los datos, como logs de aplicaciones, sensores o sistemas de mensajería.
- **Channel:** almacenamiento temporal de eventos mientras esperan ser enviados al destino.
- **Sink:** destino final de los datos, como HDFS, HBase o Kafka.

### Funcionalidades
- Captura de datos en tiempo real desde múltiples fuentes.
- Tolerancia a fallos mediante canales persistentes.
- Escalabilidad horizontal mediante múltiples agentes Flume.
- Integración con Spark para procesamiento posterior.

### Ejemplo de Configuración Básica
{% raw %}
```properties
agent.sources = source1
agent.channels = channel1
agent.sinks = sink1

agent.sources.source1.type = exec
agent.sources.source1.command = tail -F /var/log/app.log
agent.sources.source1.channels = channel1

agent.channels.channel1.type = memory
agent.sinks.sink1.type = hdfs
agent.sinks.sink1.hdfs.path = hdfs://namenode:8020/logs/
agent.sinks.sink1.channel = channel1
```
{% endraw %}`

## Parte 2: Desarrollo de componentes Flume customizados

Flume permite extender su funcionalidad mediante la creación de componentes personalizados: Sources, Channels o Sinks.

### Ejemplos de Customización

* **Custom Source:** leer datos de APIs o sistemas propietarios.
* **Custom Sink:** enviar datos a sistemas de almacenamiento no soportados por defecto.
* **Custom Channel:** implementar políticas de almacenamiento temporal específicas.

### Ventajas

* Flexibilidad para adaptarse a arquitecturas de ingestión complejas.
* Posibilidad de aplicar lógica de filtrado o transformación antes del envío.
* Integración transparente con pipelines de datos existentes.

## Parte 2: Manejo de Workflows con Apache Oozie

Apache Oozie es un coordinador de workflows que permite automatizar y programar la ejecución de tareas en Hadoop y Spark.

### Funcionalidades Clave

* Definición de workflows con DAG de tareas.
* Soporte para tareas Hadoop, Spark, Hive, Pig y shell scripts.
* Programación de trabajos mediante triggers de tiempo o eventos.
* Manejo de dependencias y reintentos automáticos.

### Ejemplo de Workflow Básico (XML)

{% raw %}
```xml
<workflow-app name="ejemplo_workflow" xmlns="uri:oozie:workflow:0.5">
    <start to="spark-node"/>
    <action name="spark-node">
        <spark xmlns="uri:oozie:spark-action:1.0">
            <job-tracker>${jobTracker}</job-tracker>
            <name-node>${nameNode}</name-node>
            <master>yarn-cluster</master>
            <mode>cluster</mode>
            <name>EjemploSparkApp</name>
            <class>com.ejemplo.SparkApp</class>
            <jar>hdfs://user/jars/ejemplo-spark.jar</jar>
        </spark>
        <ok to="end"/>
        <error to="fail"/>
    </action>
    <kill name="fail">
        <message>Workflow falló</message>
    </kill>
    <end name="end"/>
</workflow-app>
```
{% endraw %}

## Parte 2: Procesamiento de pipeline de datos con Apache Crunch

Apache Crunch es un framework para construir pipelines de datos escalables sobre Hadoop y Spark, ofreciendo APIs de alto nivel para procesamiento batch.

### Conceptos Clave

* **PCollections:** colecciones distribuidas de datos, equivalentes a RDDs o DataFrames.
* **Pipelines:** secuencias de transformaciones y acciones sobre PCollections.
* **Operations:** map, filter, groupByKey, join y combinaciones complejas.

### Ventajas

* Simplifica la creación de pipelines de datos sin manejar directamente MapReduce.
* Permite expresividad mediante APIs funcionales.
* Integración con Hive y otros componentes del ecosistema Hadoop para entrada/salida de datos.

### Ejemplo de Pipeline Básico en Java

{% raw %}
```java
Pipeline pipeline = new MRPipeline(EjemploCrunch.class, getConf());
PCollection<String> lines = pipeline.readTextFile("hdfs://user/data/input.txt");
PCollection<String> errors = lines.filter(new FilterFn<String>() {
    public boolean accept(String line) { return line.contains("ERROR"); }
});
errors.write(To.textFile("hdfs://user/data/errors_output.txt"));
pipeline.run();
```
{% endraw %}

* El pipeline lee datos desde HDFS, filtra registros de error y los escribe en un directorio de salida.

## Parte 3: Leer y analizar formatos de datos customizados en Apache Hive
Apache Hive permite trabajar con datos estructurados y semi-estructurados, incluyendo formatos customizados mediante **SerDes (Serializer/Deserializer)**.

### Conceptos Clave
- **SerDe:** mecanismo que convierte datos desde su representación en archivos a estructuras internas de Hive y viceversa.
- **Formatos Customizados:** datos no estándar como JSON, XML, Avro o formatos propios de la organización.
- **Tabla Externa:** permite leer datos existentes en HDFS sin moverlos ni copiarlos.

### Ejemplo de Tabla con Formato JSON
{% raw %}
```sql
CREATE EXTERNAL TABLE logs_json (
    user_id STRING,
    action STRING,
    timestamp STRING
)
ROW FORMAT SERDE 'org.apache.hive.hcatalog.data.JsonSerDe'
STORED AS TEXTFILE
LOCATION '/user/hive/logs_json';
```
{% endraw %}`

* Hive utiliza el SerDe para interpretar los archivos JSON y permitir consultas SQL sobre ellos.

### Ventajas

* Flexibilidad para trabajar con datos de diferentes formatos.
* Integración con pipelines de ingestión de Flume o Sqoop.
* Capacidad de análisis usando HiveQL, Spark SQL o Impala.

## Parte 3: Responder queries interactivas con Impala

Impala permite ejecutar consultas SQL de baja latencia sobre datos almacenados en HDFS o Hive Metastore.

### Características

* Consulta rápida, ideal para dashboards o reporting.
* Compatible con HiveQL, lo que facilita interoperabilidad con Hive.
* Optimización interna para reducir I/O y acelerar joins y agregaciones.

### Ejemplo de Query Interactiva

{% raw %}
```sql
SELECT producto, SUM(monto) as total_ventas
FROM ventas
WHERE fecha BETWEEN '2025-01-01' AND '2025-12-31'
GROUP BY producto
ORDER BY total_ventas DESC;
```
{% endraw %}

* Solo escanea las particiones necesarias si la tabla está particionada, mejorando rendimiento.

### Buenas Prácticas

* Particionar y bucketing para mejorar eficiencia.
* Mantener estadísticas de tablas actualizadas para optimizador de Impala.
* Usar views para consultas complejas reutilizables.

## Parte 3: Transformación de Data Streams con Morphlines

Morphlines es un framework ligero que permite procesar, limpiar y transformar datos en tiempo real antes de almacenarlos en HDFS o bases de datos.

### Funcionalidades

* Parsing de formatos complejos como JSON, XML, CSV, Avro.
* Limpieza y normalización de datos (trimming, conversión de tipos, filtrado).
* Enriquecimiento de datos mediante transformaciones y reglas definidas.
* Integración con Flume para ingestión continua hacia Hadoop.

### Ejemplo Básico de Configuración Morphlines

{% raw %}
```json
{
  "commands": [
    { "readJson": {} },
    { "setFields": { "fields": { "timestamp": "${currentTime}" } } },
    { "removeFields": { "fields": ["temp"] } },
    { "writeHDFS": { "path": "/user/hadoop/processed_logs" } }
  ]
}
```
{% endraw %}

## Parte 3: Autorizar Búsqueda completa en los datos guardados con HDFS

HDFS permite implementar mecanismos de autorización y seguridad para controlar el acceso a los datos.

### Conceptos Clave

* **Permisos POSIX:** lectura, escritura y ejecución sobre archivos y directorios.
* **ACLs (Access Control Lists):** control granular de usuarios y grupos.
* **Integración con Kerberos:** autenticación segura en entornos corporativos.
* **HDFS Search / Full-Text Indexing:** integración con herramientas de búsqueda para localizar datos rápidamente.

### Beneficios

* Seguridad y control de acceso centralizado sobre datos críticos.
* Auditoría y trazabilidad de accesos y modificaciones.
* Capacidad de habilitar búsquedas eficientes sin comprometer la integridad de los datos.



## Parte 4: Presentación de resultados a los usuarios
La presentación de resultados en el ecosistema Hadoop/Spark implica transformar los datos procesados en formatos útiles para análisis, dashboards o reportes interactivos.

### Estrategias Comunes
- **Exportación a Hive/Impala:** permite que los usuarios consulten los resultados mediante SQL.
- **Dashboards y BI Tools:** integración con herramientas como Tableau, Power BI o Hue para visualización de datos.
- **Archivos planos o formatos column-oriented:** CSV, Parquet u ORC para interoperabilidad y análisis adicional.
- **APIs o servicios REST:** exponer resultados procesados para aplicaciones externas o servicios web.

### Buenas Prácticas
- Guardar resultados particionados para mejorar rendimiento en consultas.
- Documentar esquemas y metadatos de los resultados.
- Mantener consistencia y versionado de datos procesados.

## Parte 4: Trabajo de RDDs
Los RDDs (Resilient Distributed Datasets) son la unidad fundamental de procesamiento en Spark.

### Operaciones Básicas
- **Transformaciones:** map, filter, flatMap, reduceByKey; se ejecutan de forma perezosa (lazy evaluation).
- **Acciones:** collect, count, take, saveAsTextFile; disparan la ejecución de las transformaciones.
- **Persistencia:** caching en memoria o disco para optimizar pipelines iterativos.
- **Particionamiento:** distribución de datos entre nodos para paralelismo y eficiencia en joins/aggregations.

### Ejemplo PySpark
{% raw %}
```python
rdd = spark.sparkContext.parallelize([1,2,3,4,5])
rdd_squared = rdd.map(lambda x: x**2)
print(rdd_squared.collect())  # Output: [1,4,9,16,25]
```
{% endraw %}`

## Parte 4: El Hadoop Distributed File System

HDFS es el sistema de almacenamiento distribuido de Hadoop que garantiza tolerancia a fallos y escalabilidad.

### Conceptos Clave

* **NameNode:** nodo maestro que mantiene el metadata del sistema de archivos.
* **DataNode:** nodos esclavos que almacenan bloques de datos.
* **Replicación de bloques:** por defecto 3, asegura disponibilidad y resiliencia.
* **Particiones de archivos:** HDFS divide archivos en bloques de tamaño configurable (default 128 MB).

### Ventajas

* Almacenamiento escalable para grandes volúmenes de datos.
* Tolerancia a fallos mediante replicación de bloques.
* Optimizado para lectura secuencial en batch processing.

## Parte 4: Ejecutar Spark en un Cluster

Spark puede ejecutarse en diferentes modos para aprovechar recursos de un cluster distribuido.

### Modos de Ejecución

* **Local:** para desarrollo y pruebas en una sola máquina.
* **Standalone Cluster:** Spark gestiona sus propios recursos.
* **YARN:** Spark se integra con Hadoop YARN para gestión de recursos.
* **Mesos/Kubernetes:** integración con otros gestores de cluster.

### Uso de spark-submit

{% raw %}
```bash
spark-submit \
--master yarn \
--deploy-mode cluster \
--num-executors 4 \
--executor-memory 4G \
--executor-cores 2 \
mi_aplicacion.py
```
{% endraw %}

* `--master`: tipo de cluster manager.
* `--deploy-mode`: cluster o client.
* `--num-executors`, `--executor-memory`, `--executor-cores`: ajuste de recursos según tamaño del dataset y capacidad del cluster.

### Buenas Prácticas

* Ajustar particiones de datos según número de cores y nodos disponibles.
* Evitar shuffles innecesarios.
* Monitorear ejecución con Spark UI para identificar cuellos de botella.

## Parte 5: Programación paralela con Spark
La programación paralela en Spark permite distribuir tareas y datos a través de múltiples nodos de un cluster para un procesamiento eficiente y escalable.

### Conceptos Clave
- **Tasks:** unidades mínimas de trabajo ejecutadas en los executors.
- **Stages:** conjuntos de tareas que pueden ejecutarse en paralelo sin necesidad de shuffle.
- **Shuffle:** redistribución de datos entre nodos para operaciones de join, groupBy o agregación; costosa en términos de rendimiento.
- **Lazy Evaluation:** las transformaciones se registran pero no se ejecutan hasta que se llama a una acción, optimizando el flujo de trabajo.
- **Partitioning:** dividir RDD/DataFrame en particiones distribuidas para maximizar paralelismo y minimizar movimiento de datos.

### Buenas Prácticas
- Minimizar shuffles usando `reduceByKey` o broadcast joins.
- Alinear número de particiones con la cantidad de cores disponibles.
- Usar `mapPartitions` cuando la inicialización de recursos por elemento sea costosa.

## Parte 5: Caching y Persistence
El caching y persistence permiten almacenar RDDs o DataFrames en memoria o disco para acelerar operaciones iterativas o repetidas.

### Tipos de Persistencia
- **MEMORY_ONLY:** almacena en memoria, rápido pero depende de RAM disponible.
- **MEMORY_AND_DISK:** almacena en memoria y si se llena, guarda en disco.
- **DISK_ONLY:** almacena solo en disco; útil para datasets muy grandes.
- **MEMORY_ONLY_SER / MEMORY_AND_DISK_SER:** versiones serializadas para reducir uso de memoria.

### Ejemplo PySpark
{% raw %}
```python
from pyspark import StorageLevel

rdd = spark.sparkContext.textFile("hdfs://namenode:8020/logs/app.log")
rdd_errors = rdd.filter(lambda line: "ERROR" in line)
rdd_errors.persist(StorageLevel.MEMORY_AND_DISK)
count_errors = rdd_errors.count()
```
{% endraw %}`

### Beneficios

* Reducción del tiempo de ejecución en pipelines iterativos.
* Mejor rendimiento en algoritmos de ML o procesamiento de grafos.
* Flexibilidad en la gestión de memoria según tamaño del dataset.

## Parte 5: Escritura de aplicaciones Spark

Desarrollar aplicaciones Spark implica estructurar el flujo de procesamiento de manera eficiente y escalable.

### Estructura Típica

* **SparkSession/SparkContext:** inicializa la aplicación.
* **Lectura de datos:** desde HDFS, Hive, Kafka o bases de datos.
* **Transformaciones y Acciones:** RDDs, DataFrames o Datasets.
* **Escritura de resultados:** HDFS, Hive, bases de datos o sistemas externos.
* **Cierre de la aplicación:** liberar recursos del cluster.

### Ejemplo PySpark

{% raw %}
```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("EjemploAppSpark").getOrCreate()

df = spark.read.csv("hdfs://namenode:8020/data/ventas.csv", header=True, inferSchema=True)
df_filtered = df.filter(df.monto > 100)
df_agg = df_filtered.groupBy("producto").sum("monto")
df_agg.write.parquet("hdfs://namenode:8020/output/ventas_agg.parquet")

spark.stop()
```
{% endraw %}

### Despliegue con spark-submit

{% raw %}
```bash
spark-submit \
--master yarn \
--deploy-mode cluster \
--num-executors 4 \
--executor-memory 4G \
--executor-cores 2 \
mi_aplicacion.py
```
{% endraw %}

## Parte 5: Spark, Hadoop y el Enterprise Data Center

La integración de Spark y Hadoop en un Enterprise Data Center permite aprovechar recursos de infraestructura corporativa para procesamiento y análisis de Big Data.

### Beneficios

* **Escalabilidad:** distribuir procesamiento y almacenamiento entre múltiples nodos físicos.
* **Seguridad:** autenticación y autorización centralizadas mediante Kerberos y ACLs.
* **Integración:** interoperabilidad con Hive, Impala, Flume, Sqoop, Morphlines y otros componentes del ecosistema.
* **Optimización de recursos:** Spark permite paralelismo y caching; Hadoop provee almacenamiento tolerante a fallos.
* **Flexibilidad:** soporte para datos batch, streaming y analítica en tiempo real.

### Buenas Prácticas

* Planificación de recursos según carga de trabajo.
* Monitorización con Spark UI, Ganglia o Prometheus.
* Uso de pipelines de datos y workflows coordinados para tareas ETL y analíticas.
* Implementación de políticas de seguridad y auditoría para datos críticos.

## Parte 6: Spark Streaming
Spark Streaming permite procesar flujos de datos en tiempo real utilizando la misma API de Spark que para batch, facilitando la integración y reutilización de código.

### Conceptos Clave
- **DStreams (Discretized Streams):** abstracción de flujos de datos como series de RDDs.
- **Micro-batches:** procesamiento de datos en pequeños lotes para reducir latencia.
- **Integración con Fuentes de Datos:** Kafka, Flume, sockets TCP, HDFS.
- **Sinks:** salida de datos a HDFS, bases de datos, dashboards o sistemas externos.

### Ejemplo Básico en PySpark
{% raw %}
```python
from pyspark.sql import SparkSession
from pyspark.streaming import StreamingContext

spark = SparkSession.builder.appName("StreamingApp").getOrCreate()
ssc = StreamingContext(spark.sparkContext, 5)  # micro-batch cada 5 segundos

lines = ssc.socketTextStream("localhost", 9999)
errors = lines.filter(lambda line: "ERROR" in line)
errors.pprint()

ssc.start()
ssc.awaitTermination()
```
{% endraw %}`

### Buenas Prácticas

* Ajustar tamaño de micro-batches según volumen de datos y recursos.
* Usar checkpointing para tolerancia a fallos.
* Aplicar transformaciones eficientes y persistir datos cuando sea necesario.

## Parte 6: Algoritmos usuales en Spark

Spark proporciona soporte nativo para algoritmos comunes en Big Data y Machine Learning, a través de MLlib y GraphX.

### Ejemplos

* **Filtrado y agregación:** map, filter, reduceByKey.
* **Machine Learning:** regresión, clasificación, clustering (KMeans, LogisticRegression, Decision Trees).
* **Procesamiento de grafos:** PageRank, Connected Components, Graph Traversals.
* **Operaciones de joins y aggregations:** para analytics en grandes datasets.

### Buenas Prácticas

* Elegir algoritmos distribuidos y optimizados para Spark.
* Evitar operaciones que generan shuffles innecesarios.
* Persistir datos intermedios cuando se reutilizan en múltiples pasos.

## Parte 6: Mejora de rendimiento Spark

Optimizar aplicaciones Spark es clave para eficiencia y reducción de costos en clusters.

### Estrategias

* **Uso de persistencia/caching:** guardar RDD/DataFrame que se reutiliza.
* **Particionamiento adecuado:** ajustar número y tamaño de particiones según cores y nodos.
* **Minimizar shuffles:** usar reduceByKey en lugar de groupByKey, broadcast joins para datasets pequeños.
* **Optimización de queries SQL:** Spark SQL optimiza consultas con Catalyst y Tungsten.
* **Uso de formatos columna orientados:** Parquet u ORC para acelerar lectura y reducir I/O.

### Monitoreo y Tuning

* Spark UI: identificar cuellos de botella, tiempos de stage y task.
* Ajuste de memoria y recursos: executor-memory, executor-cores, number of executors.
* Análisis de DAG para optimizar transformaciones y reducir overhead.

## Parte 6: Conclusion

* Spark es una plataforma unificada para procesamiento batch, streaming, SQL y ML sobre grandes volúmenes de datos.
* Su integración con Hadoop y el ecosistema Cloudera permite ingesta, almacenamiento, transformación y análisis eficientes.
* Las buenas prácticas de programación paralela, caching, particionamiento y optimización de consultas son clave para maximizar rendimiento.
* Con Spark Streaming, pipelines de datos, algoritmos de ML y herramientas de visualización, se pueden entregar insights en tiempo real y batch a los usuarios y aplicaciones del Enterprise Data Center.

