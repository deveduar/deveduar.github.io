---
date: 2024-02-19 03:15
title: GCP Big Data Developer y Apache Hadoop
status: 🌟
Parent: "[[Area-IA]]"
keywords:
source:
category: Data Science
tags:
  - GCP
  - IA
---
# GCP Big Data Developer y Apache Hadoop

- [apache](/backend/apache/)
- [GCP Google cloud](/data%20science/gcp-google-cloud/)
- [Data Science](/data%20science/data-science/)
## Temario del curso
- Fundamentos de Big Data y Hadoop
- Ecosistema Apache Hadoop
- Apache Spark y procesamiento distribuido
- Ingesta, almacenamiento y formatos de datos
- Desarrollo de aplicaciones Big Data
- Orquestación y flujos de trabajo
- Optimización, depuración y buenas prácticas
- Preparación para certificación Cloudera CCA
### Examen de certificación
- **Cloudera Certified Associate Spark and Hadoop Developer (CCA)**
## Referencias y notas relacionadas
- Apache Spark vs. Hadoop Diferencias Clave y Cuándo Usar Cada Uno

## Objetivo General
Preparar al alumno para analizar y resolver problemas del mundo real utilizando **Apache Hadoop** y las herramientas asociadas al centro de datos empresariales.

El curso cubre todo el ciclo de diseño y construcción de soluciones Big Data:
- Ingesta de datos desde múltiples fuentes
- Selección del formato de archivo adecuado para almacenamiento
- Procesamiento eficiente de datos distribuidos
- Presentación de resultados al usuario final de forma clara y accionable

Se va más allá de **MapReduce**, incorporando componentes avanzados del ecosistema Hadoop para desarrollar aplicaciones de **convergencia de datos**, altamente relevantes para el negocio y orientadas a la toma de decisiones.

## Competencias y conocimientos adquiridos
- Fundamentos del lenguaje **Java** aplicados al desarrollo Big Data
- Comprensión profunda de los componentes principales de Hadoop:
	- HDFS
	- MapReduce
	- YARN
- Desarrollo de aplicaciones utilizando la **API de Hadoop**
- Depuración y optimización de programas MapReduce
- Introducción práctica a otros elementos clave del ecosistema Hadoop:
	- Hive
	- Pig
	- HBase
	- Flume
	- Oozie
- Uso de **Apache Spark** como motor de procesamiento distribuido en memoria
- Diseño de arquitecturas Big Data escalables y tolerantes a fallos

## Ecosistema Hadoop
### HDFS (Hadoop Distributed File System)
- Sistema de archivos distribuido y tolerante a fallos
- Optimizado para grandes volúmenes de datos
- Replicación automática de bloques
- Acceso secuencial de alta eficiencia

### MapReduce
- Modelo de programación distribuido
- Procesamiento por lotes
- Separación en fases Map y Reduce
- Escalable horizontalmente

### YARN
- Gestor de recursos del clúster
- Permite ejecutar múltiples motores de procesamiento
- Base para la convivencia de MapReduce, Spark y otras herramientas

## Herramientas del ecosistema
### Apache Hive
- Lenguaje SQL-like (HiveQL)
- Ideal para análisis y consultas sobre HDFS
- Uso frecuente en entornos de data warehousing

### Apache Pig
- Lenguaje de alto nivel (Pig Latin)
- Procesamiento de datos semiestructurados
- Enfoque procedural

### Apache HBase
- Base de datos NoSQL orientada a columnas
- Acceso aleatorio en tiempo casi real
- Integración directa con HDFS

### Apache Flume
- Ingesta de datos en tiempo real
- Recolección de logs y eventos
- Flujo de datos hacia HDFS o HBase

### Apache Oozie
- Orquestador de flujos de trabajo
- Programación y coordinación de jobs Hadoop
- Integración con Hive, Pig y MapReduce

### Apache Spark
- Motor de procesamiento distribuido en memoria
- Mucho más rápido que MapReduce para ciertos casos de uso
- Soporte para:
	- Batch processing
	- Streaming
	- Machine Learning
	- Graph processing
- APIs en Scala, Java y Python


## Estructura modular
### Módulo 1: Fundamentos de Desarrollo de Aplicaciones Python
- Sintaxis básica y avanzada de Python
- Estructuras de datos
- Programación orientada a objetos
- Preparación para el uso de Python en entornos Big Data

### Módulo 2: Developer Training for Spark & Hadoop
- Arquitectura Hadoop
- Desarrollo con MapReduce
- Introducción y uso práctico de Apache Spark
- Integración Spark + HDFS

### Módulo 3: Designing and Building Big Data Applications
- Diseño de arquitecturas Big Data
- Selección de herramientas adecuadas según el caso de uso
- Buenas prácticas de rendimiento y escalabilidad
- Casos reales de aplicación empresarial

# modulos expandidos python y hadoop Big Data
## Preparación para el uso de Python en entornos Big Data

### Rol de Python en Big Data
- Lenguaje principal para análisis de datos, automatización y desarrollo rápido
- Amplio ecosistema de librerías orientadas a datos y procesamiento distribuido
- Integración directa con motores Big Data como Apache Spark y Hadoop
- Uso frecuente en pipelines de datos, prototipado y validación de modelos

### Fundamentos de Python aplicados a datos
- Tipos de datos básicos y avanzados
	- int, float, str, bool
	- list, tuple, set, dict
- Control de flujo
	- condicionales
	- bucles
	- comprensiones de listas y diccionarios
- Funciones
	- definición y reutilización
	- argumentos por defecto
	- *args y **kwargs
- Manejo de errores
	- try / except / finally
	- creación de excepciones personalizadas

### Programación orientada a objetos para Big Data
- Clases y objetos
- Encapsulación y modularidad
- Herencia y composición
- Diseño de código reutilizable para pipelines de datos
- Buenas prácticas de organización de proyectos Python

### Manejo de archivos y formatos de datos
- Lectura y escritura de archivos
	- CSV
	- JSON
	- Parquet
	- Avro
- Serialización y deserialización de datos
- Procesamiento de grandes volúmenes sin cargar todo en memoria
- Uso de generadores e iteradores

### Librerías clave de Python para Big Data
- NumPy
	- Cálculo numérico
	- Operaciones vectorizadas
- Pandas
	- DataFrames
	- Limpieza y transformación de datos
	- Análisis exploratorio
- PyArrow
	- Intercambio de datos columnar
	- Integración con Parquet y sistemas distribuidos
- Dask
	- Paralelismo y escalado en Python
	- Procesamiento tipo Pandas distribuido

### Introducción a PySpark
- Qué es PySpark y por qué se utiliza
- Diferencias entre Spark con Scala y Spark con Python
- Arquitectura básica de Spark
	- Driver
	- Executors
	- Cluster Manager
- Creación de aplicaciones Spark con Python

### RDDs y DataFrames en PySpark
- RDDs
	- Transformations
	- Actions
- DataFrames
	- Esquemas
	- Operaciones SQL-like
- Comparación RDD vs DataFrame
- Casos de uso recomendados para cada enfoque

### Integración de Python con Hadoop
- Acceso a datos almacenados en HDFS
- Ejecución de jobs Spark sobre Hadoop
- Uso de Python para preprocesamiento y postprocesamiento
- Comunicación con Hive y HBase desde Python

### Buenas prácticas de Python en entornos Big Data
- Escritura de código eficiente
- Minimizar operaciones costosas
- Uso adecuado de memoria
- Logging y monitorización
- Testing de pipelines de datos
- Versionado de código y entornos virtuales

### Preparación para entornos productivos
- Estructuración de proyectos Big Data en Python
- Configuración de entornos virtuales
- Gestión de dependencias
- Ejecución en clúster frente a ejecución local
- Adaptación del código a entornos distribuidos

## Preparación para el uso de Python en entornos Big Data — Ejemplos de código

### Manejo eficiente de grandes volúmenes de datos en Python
#### Lectura de archivos grandes usando iteradores
{% raw %}
```python
def read_large_file(path):
	with open(path, "r") as f:
		for line in f:
			yield line

for row in read_large_file("datos_grandes.csv"):
	process(row)
```
{% endraw %}`

### Uso de generadores para optimizar memoria

#### Generadores aplicados a pipelines de datos

{% raw %}
```python
def clean_data(rows):
	for r in rows:
		yield r.strip().lower()

data = clean_data(read_large_file("input.txt"))
for row in data:
	print(row)
```
{% endraw %}

### Programación orientada a objetos aplicada a Big Data

#### Clase para un pipeline de procesamiento

{% raw %}
```python
class DataPipeline:
	def __init__(self, source):
		self.source = source

	def extract(self):
		for row in self.source:
			yield row

	def transform(self, rows):
		for r in rows:
			yield r.upper()

	def load(self, rows):
		for r in rows:
			print(r)

pipeline = DataPipeline(read_large_file("data.txt"))
pipeline.load(pipeline.transform(pipeline.extract()))
```
{% endraw %}

### Manejo de formatos comunes en Big Data

#### Lectura y escritura de CSV con Pandas

{% raw %}
```python
import pandas as pd

df = pd.read_csv("data.csv")
df["total"] = df["price"] * df["quantity"]
df.to_csv("output.csv", index=False)
```
{% endraw %}

#### Lectura y escritura de Parquet

{% raw %}
```python
df = pd.read_parquet("data.parquet")
df.to_parquet("output.parquet")
```
{% endraw %}

### Uso de NumPy para cálculo eficiente

#### Operaciones vectorizadas

{% raw %}
```python
import numpy as np

data = np.array([10, 20, 30, 40])
result = data * 1.21
print(result)
```
{% endraw %}

### Procesamiento distribuido con Dask

#### DataFrame distribuido tipo Pandas

{% raw %}
```python
import dask.dataframe as dd

df = dd.read_csv("large_*.csv")
df_filtered = df[df["sales"] > 1000]
df_filtered.compute()
```
{% endraw %}

### Introducción a PySpark

#### Creación de una sesión Spark

{% raw %}
```python
from pyspark.sql import SparkSession

spark = SparkSession.builder \
	.appName("BigDataApp") \
	.getOrCreate()
```
{% endraw %}

### RDDs en PySpark

#### Transformations y Actions

{% raw %}
```python
rdd = spark.sparkContext.parallelize([1, 2, 3, 4, 5])
rdd_squared = rdd.map(lambda x: x * x)
print(rdd_squared.collect())
```
{% endraw %}

### DataFrames en PySpark

#### Creación y operaciones básicas

{% raw %}
```python
data = [("Ana", 34), ("Luis", 45), ("Eva", 29)]
df = spark.createDataFrame(data, ["name", "age"])
df.filter(df.age > 30).show()
```
{% endraw %}

### Operaciones SQL-like en Spark

#### Uso de Spark SQL

{% raw %}
```python
df.createOrReplaceTempView("people")
spark.sql("SELECT name FROM people WHERE age > 30").show()
```
{% endraw %}

### Lectura de datos desde HDFS con PySpark

#### Acceso a archivos distribuidos

{% raw %}
```python
df = spark.read.csv("hdfs:///data/input.csv", header=True)
df.show()
```
{% endraw %}

### Integración de Python con Hive

#### Lectura de tablas Hive desde Spark

{% raw %}
```python
spark.sql("SELECT * FROM sales_db.transactions").show()
```
{% endraw %}

### Buenas prácticas de logging

#### Logging en pipelines Big Data

{% raw %}
```python
import logging

logging.basicConfig(level=logging.INFO)
logging.info("Inicio del procesamiento de datos")
```
{% endraw %}

### Testing básico de funciones de datos

#### Prueba unitaria simple

{% raw %}
```python
def transform(x):
	return x * 2

def test_transform():
	assert transform(3) == 6
```
{% endraw %}

### Estructuración de proyectos Big Data en Python

#### Estructura típica

{% raw %}
```text
project/
├── src/
│	├── extract.py
│	├── transform.py
│	└── load.py
├── tests/
│	└── test_transform.py
├── requirements.txt
└── main.py
```
{% endraw %}

### Ejecución local vs clúster

#### Envío de una aplicación PySpark a clúster

{% raw %}
```bash
spark-submit --master yarn app.py
```
{% endraw %}

# Developer Training for Spark & Hadoop — Arquitectura Hadoop

## Temario
- Visión general de Hadoop
- Principios de diseño
- Componentes principales
- Arquitectura HDFS
- Arquitectura YARN
- Arquitectura MapReduce
- Alta disponibilidad y tolerancia a fallos
- Escalabilidad y rendimiento
- Seguridad en Hadoop
- Despliegues y modos de operación

## Visión general de Hadoop
- Framework de **procesamiento distribuido** orientado a Big Data
- Diseñado para:
	- Grandes volúmenes de datos
	- Hardware commodity
	- Tolerancia a fallos
- Separación clara entre:
	- Almacenamiento
	- Gestión de recursos
	- Procesamiento

## Principios de diseño
- **Escalabilidad horizontal**
	- Añadir nodos en lugar de aumentar potencia
- **Tolerancia a fallos**
	- Replicación de datos
	- Reintentos automáticos de tareas
- **Procesamiento cerca de los datos**
	- Minimiza tráfico de red
- **Modelo batch**
	- Optimizado para grandes volúmenes, no baja latencia

## Componentes principales de Hadoop
- HDFS
- YARN
- MapReduce
- Hadoop Common

## Hadoop Common
- Librerías y utilidades compartidas
- Configuración
- Gestión de E/S
- Base para el resto del ecosistema

## Arquitectura HDFS
### Componentes de HDFS
- NameNode
	- Gestiona metadatos
	- Mantiene el namespace del sistema de archivos
	- Controla permisos y localización de bloques
- DataNode
	- Almacena bloques de datos
	- Ejecuta operaciones de lectura y escritura
- Secondary NameNode
	- Checkpoints del estado del NameNode
	- No es un backup activo

### Bloques y replicación
- Tamaño de bloque grande (128 MB o superior)
- Replicación por defecto: 3
- Distribución automática entre DataNodes
- Re-replicación ante fallos

### Flujo de lectura y escritura
- Cliente consulta al NameNode
- Acceso directo a DataNodes
- Escritura en pipeline
- Confirmaciones encadenadas

## Arquitectura YARN
### Rol de YARN
- Gestor de recursos del clúster
- Permite múltiples frameworks de procesamiento
- Base para Spark, MapReduce, Tez, Flink

### Componentes de YARN
- ResourceManager
	- Gestión global de recursos
	- Planificación de aplicaciones
- NodeManager
	- Gestión de recursos por nodo
	- Monitorización de contenedores
- ApplicationMaster
	- Gestión del ciclo de vida de cada aplicación
	- Negociación de recursos con ResourceManager

### Contenedores
- Unidad básica de asignación de recursos
- Define:
	- Memoria
	- CPU
- Aislados por aplicación

## Arquitectura MapReduce
### Modelo de ejecución
- Job
	- Unidad completa de procesamiento
- Task
	- Map Task
	- Reduce Task

### Fases de MapReduce
- Input Split
- Map
- Shuffle & Sort
- Reduce
- Output

### Características clave
- Procesamiento batch
- Escritura intermedia a disco
- Alta fiabilidad
- Menor rendimiento frente a motores en memoria

## Alta disponibilidad y tolerancia a fallos
### HDFS HA
- NameNode activo y en standby
- JournalNodes para sincronización
- Failover automático

### YARN HA
- ResourceManager activo/standby
- Recuperación de aplicaciones en ejecución

### Manejo de fallos
- Reejecución automática de tareas
- Detección de nodos caídos
- Redistribución de bloques

## Escalabilidad y rendimiento
- Escalado añadiendo nodos
- Balanceo automático de datos
- Optimización mediante:
	- Tamaño de bloque
	- Compresión
	- Formatos columnar (Parquet, ORC)
	- Ajuste de memoria y CPU en YARN

## Seguridad en Hadoop
- Autenticación mediante Kerberos
- Autorización:
	- Permisos HDFS
	- ACLs
- Cifrado:
	- Datos en reposo
	- Datos en tránsito
- Auditoría y logs

## Modos de despliegue
- Local Mode
	- Desarrollo y pruebas
- Pseudo-distributed Mode
	- Todos los servicios en una sola máquina
- Fully Distributed Mode
	- Clúster real
	- Producción


# Developer Training for Spark & Hadoop — Desarrollo con MapReduce [java](/software%20engineering/java/)

## Temario
- Introducción a MapReduce
- Modelo de programación MapReduce
- Flujo de ejecución de un Job
- Componentes clave
- Desarrollo de MapReduce con Java
- Tipos de datos y formatos de entrada/salida
- Shuffle y Sort
- Partitioner y Combiner
- Optimización de Jobs MapReduce
- Casos de uso comunes
- Limitaciones de MapReduce

## Introducción a MapReduce
- Modelo de programación distribuido incluido en Hadoop
- Orientado a **procesamiento batch**
- Diseñado para grandes volúmenes de datos
- Basado en dos fases principales:
	- Map
	- Reduce
- Alta tolerancia a fallos y escalabilidad

## Modelo de programación MapReduce
### Concepto clave
- Procesamiento de datos como pares **clave–valor**
- Cada fase transforma pares clave–valor en otros nuevos

### Funciones principales
- Mapper
	- Procesa datos de entrada
	- Genera pares intermedios
- Reducer
	- Agrega y procesa datos intermedios
	- Produce el resultado final

## Flujo de ejecución de un Job MapReduce
- Input Data
- InputFormat
- Input Split
- Mapper
- Shuffle & Sort
- Reducer
- OutputFormat
- Output Data

## Componentes clave
### Job
- Representa una ejecución completa de MapReduce
- Define:
	- Clases Mapper y Reducer
	- Tipos de clave y valor
	- Formatos de entrada y salida

### Task
- Unidad mínima de ejecución
- Tipos:
	- Map Task
	- Reduce Task

## Desarrollo de MapReduce con Java
### Estructura básica de un Job
- Driver
	- Configuración y lanzamiento del Job
- Mapper
	- Lógica de transformación
- Reducer
	- Lógica de agregación

### Mapper
{% raw %}
```java
public class WordCountMapper
	extends Mapper<LongWritable, Text, Text, IntWritable> {

	private final static IntWritable one = new IntWritable(1);
	private Text word = new Text();

	@Override
	protected void map(LongWritable key, Text value, Context context)
		throws IOException, InterruptedException {

		String[] tokens = value.toString().split(" ");
		for (String token : tokens) {
			word.set(token);
			context.write(word, one);
		}
	}
}
```
{% endraw %}`

### Reducer

{% raw %}
```java
public class WordCountReducer
	extends Reducer<Text, IntWritable, Text, IntWritable> {

	@Override
	protected void reduce(Text key, Iterable<IntWritable> values, Context context)
		throws IOException, InterruptedException {

		int sum = 0;
		for (IntWritable val : values) {
			sum += val.get();
		}
		context.write(key, new IntWritable(sum));
	}
}
```
{% endraw %}

### Driver

{% raw %}
```java
public class WordCountDriver {

	public static void main(String[] args) throws Exception {

		Configuration conf = new Configuration();
		Job job = Job.getInstance(conf, "word count");

		job.setJarByClass(WordCountDriver.class);
		job.setMapperClass(WordCountMapper.class);
		job.setReducerClass(WordCountReducer.class);

		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(IntWritable.class);

		FileInputFormat.addInputPath(job, new Path(args[0]));
		FileOutputFormat.setOutputPath(job, new Path(args[1]));

		System.exit(job.waitForCompletion(true) ? 0 : 1);
	}
}
```
{% endraw %}

## Tipos de datos en MapReduce

- Writable
    - IntWritable
    - LongWritable
    - Text
    - DoubleWritable
- Serialización eficiente para entorno distribuido

## Formatos de entrada y salida

### InputFormat

- TextInputFormat
- KeyValueTextInputFormat
- SequenceFileInputFormat

### OutputFormat
- TextOutputFormat
- SequenceFileOutputFormat

## Shuffle y Sort

- Fase intermedia automática
- Redistribución de datos entre nodos
- Agrupación por clave
- Ordenación previa a Reduce
- Impacto crítico en el rendimiento

## Partitioner

### Función
- Determina a qué Reducer va cada clave
- Por defecto: HashPartitioner

### Uso

- Controlar distribución de carga
- Evitar skew de datos

## Combiner

### Propósito

- Reducer local
- Reduce volumen de datos transferidos
- Optimización opcional

### Requisitos

- Operación asociativa y conmutativa

## Optimización de Jobs MapReduce

- Uso de Combiner
- Ajuste del número de Reducers
- Compresión de datos intermedios
- Uso de formatos eficientes (SequenceFile, Avro)
- Minimizar datos en Shuffle
- Evitar lógica pesada en Reducer

## Casos de uso comunes

- Conteo y agregaciones masivas
- Procesamiento de logs
- ETL batch
- Análisis histórico de datos
- Procesos nocturnos de gran volumen

## Limitaciones de MapReduce

- Alta latencia
- Escritura frecuente a disco
- Poco eficiente para:
    - Procesos iterativos
    - Análisis interactivo
    - Streaming
- Motivo principal de la adopción de Apache Spark

# Developer Training for Spark & Hadoop — Desarrollo de MapReduce con Python, PySpark

## Temario
- MapReduce con Python en Hadoop
- Hadoop Streaming
- Arquitectura de Hadoop Streaming
- Desarrollo de Mapper en Python
- Desarrollo de Reducer en Python
- Tipos de entrada y salida
- Ejecución de Jobs MapReduce con Python
- Debugging y pruebas locales
- Buenas prácticas y limitaciones

## MapReduce con Python en Hadoop
- Hadoop permite usar lenguajes distintos a Java mediante **Hadoop Streaming**
- Hadoop Streaming:
	- Ejecuta programas externos como Mapper y Reducer
	- Comunicación vía **STDIN / STDOUT**
- Python es ideal para:
	- Prototipado rápido
	- Procesamiento de texto
	- ETL batch sencillo

## Hadoop Streaming
### Qué es
- Utilidad incluida en Hadoop
- Permite usar cualquier lenguaje que lea de entrada estándar y escriba a salida estándar
- Hadoop se encarga de:
	- Distribución
	- Shuffle & Sort
	- Gestión de fallos

### Flujo de ejecución
- Input desde HDFS
- Hadoop lanza el Mapper Python
- Salida del Mapper → Shuffle & Sort
- Entrada ordenada al Reducer Python
- Salida final a HDFS

## Arquitectura de Hadoop Streaming
- Mapper
	- Script Python
	- Procesa línea a línea
- Reducer
	- Script Python
	- Recibe datos ordenados por clave
- Driver
	- Comando `hadoop jar`

## Desarrollo de Mapper en Python
### Mapper básico (WordCount)
{% raw %}
```python
#!/usr/bin/env python3
import sys

for line in sys.stdin:
	line = line.strip()
	words = line.split()
	for word in words:
		print(f"{word}\t1")
```
{% endraw %}`

## Desarrollo de Reducer en Python

### Reducer básico (WordCount)

{% raw %}
```python
#!/usr/bin/env python3
import sys

current_word = None
current_count = 0

for line in sys.stdin:
	word, count = line.strip().split("\t")
	count = int(count)

	if current_word == word:
		current_count += count
	else:
		if current_word:
			print(f"{current_word}\t{current_count}")
		current_word = word
		current_count = count

if current_word:
	print(f"{current_word}\t{current_count}")
```
{% endraw %}

## Formato de entrada y salida

* Entrada:

  * Texto plano
  * Una línea por registro
* Salida:

  * Formato clave–valor
  * Separador por defecto: tabulación (`\t`)
* Hadoop se encarga de ordenar por clave antes del Reducer

## Ejecución de un Job MapReduce con Python

### Subida de datos a HDFS

{% raw %}
```bash
hdfs dfs -put input.txt /user/hadoop/input
```
{% endraw %}

### Ejecución del Job

{% raw %}
```bash
hadoop jar /usr/lib/hadoop-mapreduce/hadoop-streaming.jar \
	-input /user/hadoop/input \
	-output /user/hadoop/output \
	-mapper mapper.py \
	-reducer reducer.py \
	-file mapper.py \
	-file reducer.py
```
{% endraw %}

## Visualización del resultado

### Lectura de resultados desde HDFS

{% raw %}
```bash
hdfs dfs -cat /user/hadoop/output/part-00000
```
{% endraw %}

## Debugging y pruebas locales

### Prueba local del Mapper

{% raw %}
```bash
cat input.txt | python3 mapper.py
```
{% endraw %}

### Prueba local del flujo completo

{% raw %}
```bash
cat input.txt | python3 mapper.py | sort | python3 reducer.py
```
{% endraw %}

## Casos de uso comunes

* Conteo de palabras
* Procesamiento de logs
* Agregaciones simples
* Limpieza y normalización de texto
* ETL batch sencillo

## Buenas prácticas en MapReduce con Python

* Mantener lógica simple
* Evitar operaciones costosas en Reducer
* Usar Combiner cuando sea posible
* Validar entrada y salida
* Manejar errores de parsing
* Usar `#!/usr/bin/env python3` y permisos de ejecución

## Limitaciones de MapReduce con Python

* Menor rendimiento que Java
* Overhead de procesos externos
* Difícil manejo de tipos complejos
* No recomendado para:

  * Procesos iterativos
  * Machine Learning
  * Análisis interactivo

## Comparación con alternativas

* MapReduce con Python:
	* Simple
	* Batch
	* Bajo rendimiento
* PySpark:
	* Procesamiento en memoria
	* APIs de alto nivel
	* Mejor opción para la mayoría de casos modernos

# Developer Training for Spark & Hadoop — Introducción y uso práctico de Apache Spark

## Temario
- Qué es Apache Spark
- Motivación y comparación con MapReduce
- Arquitectura de Spark
- Componentes principales
- Modos de despliegue
- APIs y lenguajes soportados
- Conceptos fundamentales
- Uso práctico con ejemplos
- Integración con Hadoop
- Casos de uso comunes
- Buenas prácticas

## Qué es Apache Spark
- Motor de procesamiento distribuido
- Diseñado para:
	- Alto rendimiento
	- Procesamiento en memoria
	- Baja latencia
- Parte del ecosistema Big Data moderno
- Compatible con Hadoop

## Motivación y comparación con MapReduce
- Evita escritura frecuente a disco
- Procesamiento en memoria
- Ideal para:
	- Procesos iterativos
	- Análisis interactivo
	- Machine Learning
- MapReduce:
	- Batch
	- Más lento
- Spark:
	- Batch + Streaming + ML + Graph

## Arquitectura de Spark
### Componentes principales
- Driver
	- Punto de entrada de la aplicación
	- Coordina ejecución
- Cluster Manager
	- YARN
	- Standalone
	- Mesos
	- Kubernetes
- Executors
	- Ejecutan tareas
	- Mantienen datos en memoria

### Flujo de ejecución
- Driver crea el DAG
- Planificación de tareas
- Ejecución distribuida
- Recolección de resultados

## Componentes del ecosistema Spark
- Spark Core
- Spark SQL
- Spark Streaming
- MLlib
- GraphX

## Modos de despliegue
- Local Mode
- Standalone Mode
- YARN Mode
- Kubernetes Mode

## APIs y lenguajes soportados
- Scala
- Java
- Python (PySpark)
- R

## Conceptos fundamentales
### RDD
- Resilient Distributed Dataset
- Inmutable
- Distribuido
- Tolerante a fallos

### DataFrame
- Estructura tabular distribuida
- Esquema definido
- Optimización automática (Catalyst)

### Dataset
- Tipado fuerte (Scala/Java)
- Combina RDD y DataFrame

### Transformations y Actions
- Transformations
	- map
	- filter
	- flatMap
- Actions
	- collect
	- count
	- save

### Lazy Evaluation
- Las transformaciones no se ejecutan hasta una acción

## Uso práctico de Apache Spark
### Creación de una SparkSession
{% raw %}
```python
from pyspark.sql import SparkSession

spark = SparkSession.builder \
	.appName("SparkIntro") \
	.getOrCreate()
```
{% endraw %}`

### Lectura de datos desde HDFS

{% raw %}
```python
df = spark.read.csv("hdfs:///data/input.csv", header=True)
df.show()
```
{% endraw %}

### Transformaciones básicas

{% raw %}
```python
df_filtered = df.filter(df["age"] > 30)
df_filtered.select("name", "age").show()
```
{% endraw %}

### Agregaciones

{% raw %}
```python
df.groupBy("country").count().show()
```
{% endraw %}

### Uso de Spark SQL

{% raw %}
```python
df.createOrReplaceTempView("people")
spark.sql("SELECT country, COUNT(*) FROM people GROUP BY country").show()
```
{% endraw %}

### Escritura de resultados

{% raw %}
```python
df_filtered.write.parquet("hdfs:///data/output")
```
{% endraw %}

## Integración con Hadoop

* Lectura y escritura directa sobre HDFS
* Ejecución sobre YARN
* Convivencia con MapReduce
* Uso de Hive Metastore

## Casos de uso comunes

* ETL distribuido
* Procesamiento de logs
* Análisis interactivo
* Machine Learning
* Streaming de datos

## Buenas prácticas

* Preferir DataFrames frente a RDDs
* Persistir solo cuando sea necesario
* Evitar collect() en grandes volúmenes
* Ajustar recursos de ejecución
* Usar formatos columnar
* Monitorear con Spark UI

# Developer Training for Spark & Hadoop — Integración Spark + HDFS

## Temario
- Relación entre Spark y HDFS
- Arquitectura de integración
- Acceso a datos en HDFS desde Spark
- Formatos de archivo soportados
- Lectura y escritura distribuida
- Persistencia y cacheo
- Ejecución de Spark sobre YARN
- Gestión de permisos y seguridad
- Rendimiento y optimización
- Casos de uso habituales

## Relación entre Spark y HDFS
- HDFS actúa como:
	- Sistema de almacenamiento distribuido
	- Fuente y destino de datos
- Spark actúa como:
	- Motor de procesamiento distribuido
	- No sustituye a HDFS
- Separación clara:
	- HDFS → almacenamiento
	- Spark → cómputo

## Arquitectura de integración
- Spark se ejecuta:
	- Sobre YARN
	- En modo Standalone
	- En Kubernetes
- Acceso a HDFS mediante:
	- Hadoop FileSystem API
	- Configuración heredada de Hadoop
- Data locality:
	- Spark intenta ejecutar tareas cerca de los bloques HDFS

## Acceso a datos en HDFS desde Spark
### Requisitos
- Hadoop configurado correctamente
- Variables de entorno:
	- HADOOP_CONF_DIR
	- YARN_CONF_DIR
- Permisos adecuados en HDFS

## Lectura de datos desde HDFS
### Lectura de CSV
{% raw %}
```python
df = spark.read \
	.option("header", "true") \
	.csv("hdfs:///data/input.csv")

df.show()
```
{% endraw %}`

### Lectura de Parquet

{% raw %}
```python
df = spark.read.parquet("hdfs:///data/input_parquet")
df.printSchema()
```
{% endraw %}

### Lectura de JSON

{% raw %}
```python
df = spark.read.json("hdfs:///data/input.json")
df.show()
```
{% endraw %}

## Escritura de datos en HDFS

### Escritura en CSV

{% raw %}
```python
df.write \
	.mode("overwrite") \
	.option("header", "true") \
	.csv("hdfs:///data/output_csv")
```
{% endraw %}

### Escritura en Parquet

{% raw %}
```python
df.write \
	.mode("overwrite") \
	.parquet("hdfs:///data/output_parquet")
```
{% endraw %}

## Formatos de archivo soportados

* Texto plano
* CSV
* JSON
* Parquet
* ORC
* Avro
* SequenceFile

### Recomendaciones

* Usar formatos columnares:
	* Parquet
	* ORC
* Mejor compresión
* Mejor rendimiento en consultas

## Persistencia y cacheo

### Cacheo de DataFrames

{% raw %}
```python
df.cache()
df.count()
```
{% endraw %}

### Persistencia con nivel de almacenamiento

{% raw %}
```python
from pyspark import StorageLevel

df.persist(StorageLevel.MEMORY_AND_DISK)
```
{% endraw %}

## Ejecución de Spark sobre YARN

### Envío de aplicación Spark

{% raw %}
```bash
spark-submit \
	--master yarn \
	--deploy-mode cluster \
	app.py
```
{% endraw %}

### Beneficios

* Uso compartido de recursos
* Integración con ecosistema Hadoop
* Escalabilidad y alta disponibilidad

## Gestión de permisos y seguridad

* Permisos HDFS:
	* Lectura
	* Escritura
	* Ejecución
* Integración con Kerberos
* Spark hereda identidad del usuario
* Control de acceso a datos sensibles

## Rendimiento y optimización

* Ajustar:
	* Número de particiones
	* Tamaño de bloques HDFS
* Evitar:
	* Archivos pequeños
	* collect() en grandes volúmenes
* Usar:
	* Parquet con compresión
	* Predicate pushdown
	* Partition pruning

## Casos de uso habituales
* ETL distribuido sobre HDFS
* Reemplazo de jobs MapReduce
* Análisis interactivo de datos históricos
* Preparación de datos para Machine Learning
* Procesamiento batch a gran escala

# Designing and Building Big Data Applications — Diseño de arquitecturas Big Data

## Temario
- Introducción al diseño de arquitecturas Big Data
- Principios de arquitectura Big Data
- Tipos de arquitecturas Big Data
- Capas de una arquitectura Big Data
- Arquitecturas batch
- Arquitecturas streaming
- Arquitecturas híbridas
- Selección de herramientas
- Escalabilidad y tolerancia a fallos
- Seguridad y gobierno del dato
- Buenas prácticas de diseño

## Introducción al diseño de arquitecturas Big Data
- El diseño de arquitecturas Big Data busca:
	- Procesar grandes volúmenes de datos
	- Gestionar variedad y velocidad
	- Garantizar fiabilidad y escalabilidad
- No existe una arquitectura única
- El diseño depende del:
	- Caso de uso
	- Tipo de datos
	- Requisitos de negocio

## Principios de arquitectura Big Data
- Escalabilidad horizontal
- Tolerancia a fallos
- Separación de responsabilidades
- Procesamiento distribuido
- Observabilidad y monitorización
- Automatización

## Tipos de arquitecturas Big Data
### Arquitectura Lambda
- Capa batch
- Capa speed (streaming)
- Capa serving
- Alta complejidad
- Consistencia eventual

### Arquitectura Kappa
- Streaming como fuente principal
- Simplificación respecto a Lambda
- Reprocesamiento mediante replay
- Menor complejidad operativa

### Arquitectura Batch tradicional
- Procesamiento periódico
- Orientada a históricos
- Alta latencia

### Arquitectura Streaming
- Procesamiento en tiempo real
- Baja latencia
- Enfoque en eventos

## Capas de una arquitectura Big Data
### Capa de ingesta
- Captura de datos desde múltiples fuentes
- Batch o streaming
- Herramientas comunes:
	- Kafka
	- Flume
	- Sqoop
	- APIs

### Capa de almacenamiento
- Almacenamiento distribuido
- Persistencia a largo plazo
- Herramientas comunes:
	- HDFS
	- Object Storage
	- HBase

### Capa de procesamiento
- Transformación y análisis de datos
- Batch y/o streaming
- Herramientas comunes:
	- Spark
	- MapReduce
	- Flink

### Capa de serving
- Exposición de datos procesados
- Consultas y consumo
- Herramientas comunes:
	- Hive
	- Presto
	- Bases de datos analíticas

### Capa de visualización
- Dashboards y reporting
- Herramientas BI
- Consumo por usuario final

## Arquitecturas batch
- Procesamiento periódico
- Jobs programados
- Alta fiabilidad
- Ejemplos:
	- ETL nocturno
	- Análisis histórico

## Arquitecturas streaming
- Procesamiento continuo
- Eventos en tiempo real
- Baja latencia
- Ejemplos:
	- Monitorización
	- Detección de fraude
	- IoT

## Arquitecturas híbridas
- Combinan batch y streaming
- Casos de uso complejos
- Balance entre latencia y consistencia

## Selección de herramientas
- Volumen de datos
- Latencia requerida
- Complejidad operativa
- Coste
- Ecosistema existente

## Escalabilidad y tolerancia a fallos
- Replicación de datos
- Reintentos automáticos
- Balanceo de carga
- Diseño sin single points of failure

## Seguridad y gobierno del dato
- Autenticación
- Autorización
- Cifrado
- Auditoría
- Calidad del dato
- Catálogo de datos

## Buenas prácticas de diseño
- Diseñar para el fallo
- Automatizar despliegues
- Usar formatos eficientes
- Documentar arquitectura
- Monitorizar desde el inicio
- Revisar periódicamente la arquitectura

# Designing and Building Big Data Applications — Selección de herramientas adecuadas según el caso de uso

## Temario
- Importancia de la selección de herramientas
- Factores clave de decisión
- Herramientas por capa de arquitectura
- Casos de uso batch
- Casos de uso streaming
- Casos de uso analíticos
- Casos de uso operacionales
- Comparativas habituales
- Anti-patrones comunes
- Buenas prácticas de selección

## Importancia de la selección de herramientas
- Una mala elección impacta en:
	- Rendimiento
	- Coste
	- Mantenibilidad
- No existe una herramienta universal
- La herramienta debe adaptarse al caso de uso
- Priorizar simplicidad y alineación con negocio

## Factores clave de decisión
- Volumen de datos
- Velocidad de ingestión
- Latencia requerida
- Tipo de datos
	- Estructurados
	- Semiestructurados
	- No estructurados
- Frecuencia de procesamiento
- Complejidad operativa
- Escalabilidad
- Ecosistema existente
- Coste

## Herramientas por capa de arquitectura
### Ingesta
- Batch
	- Sqoop
	- Scripts Python
- Streaming
	- Kafka
	- Flume
	- APIs

### Almacenamiento
- HDFS
- Object Storage
- HBase
- Data Lake

### Procesamiento
- Batch
	- Spark
	- MapReduce
- Streaming
	- Spark Structured Streaming
	- Flink

### Consulta y serving
- Hive
- Presto / Trino
- Impala
- Bases analíticas

### Orquestación
- Oozie
- Airflow

## Casos de uso batch
### Características
- Alta latencia aceptable
- Grandes volúmenes
- Procesamiento periódico

### Herramientas recomendadas
- HDFS
- Spark
- Hive
- Oozie

### Ejemplos
- ETL nocturno
- Análisis histórico
- Reprocesamiento completo de datos

## Casos de uso streaming
### Características
- Baja latencia
- Eventos continuos
- Procesamiento en tiempo real

### Herramientas recomendadas
- Kafka
- Spark Structured Streaming
- Flink
- HBase

### Ejemplos
- Detección de fraude
- Monitorización en tiempo real
- IoT

## Casos de uso analíticos
### Características
- Consultas interactivas
- Grandes datasets
- Agregaciones complejas

### Herramientas recomendadas
- Parquet / ORC
- Hive
- Presto / Trino
- Spark SQL

### Ejemplos
- BI
- Reporting
- Data exploration

## Casos de uso operacionales
### Características
- Acceso casi en tiempo real
- Baja latencia de lectura
- Consultas por clave

### Herramientas recomendadas
- HBase
- Cassandra
- Redis

### Ejemplos
- Perfiles de usuario
- Recomendaciones
- Sistemas de scoring

## Comparativas habituales
### Spark vs MapReduce
- Spark
	- Procesamiento en memoria
	- Rápido
- MapReduce
	- Batch
	- Alta fiabilidad

### Hive vs Presto
- Hive
	- Batch
	- Integración Hadoop
- Presto
	- Interactivo
	- Baja latencia

### HDFS vs HBase
- HDFS
	- Almacenamiento masivo
- HBase
	- Acceso aleatorio

## Anti-patrones comunes
- Usar streaming para procesos batch
- Usar HBase como data lake
- Procesar pequeños volúmenes con herramientas complejas
- Ignorar costes operativos

## Buenas prácticas de selección
- Empezar simple
- Validar con pruebas de concepto
- Medir rendimiento
- Escalar progresivamente
- Documentar decisiones técnicas

# Designing and Building Big Data Applications — Buenas prácticas de rendimiento y escalabilidad

## Temario
- Principios generales de rendimiento
- Escalabilidad horizontal vs vertical
- Buenas prácticas en almacenamiento
- Buenas prácticas en procesamiento
- Gestión de particiones
- Uso eficiente de memoria
- Optimización de Spark
- Gestión de archivos pequeños
- Monitorización y tuning
- Anti-patrones comunes

## Principios generales de rendimiento
- Diseñar pensando en el crecimiento
- Minimizar movimiento de datos
- Procesar cerca del almacenamiento
- Evitar cuellos de botella centralizados
- Medir antes de optimizar

## Escalabilidad horizontal vs vertical
### Escalabilidad horizontal
- Añadir nodos al clúster
- Modelo preferido en Big Data
- Mayor tolerancia a fallos
- Coste predecible

### Escalabilidad vertical
- Aumentar recursos de un nodo
- Limitada físicamente
- Menor tolerancia a fallos

## Buenas prácticas en almacenamiento
- Usar sistemas distribuidos
	- HDFS
	- Object Storage
- Elegir formatos eficientes
	- Parquet
	- ORC
- Activar compresión
- Evitar archivos muy pequeños
- Definir tamaños de bloque adecuados

## Buenas prácticas en procesamiento
- Preferir motores en memoria
	- Spark
- Evitar reprocesamientos innecesarios
- Reutilizar resultados intermedios
- Separar lógica batch y streaming
- Paralelizar tareas de forma equilibrada

## Gestión de particiones
### Importancia de las particiones
- Determinan paralelismo
- Impactan directamente en rendimiento
- Afectan uso de red y disco

### Buenas prácticas
- Particionar por columnas de uso frecuente
- Evitar:
	- Particiones demasiado grandes
	- Particiones demasiado pequeñas
- Ajustar número de particiones según clúster

## Uso eficiente de memoria
- No cargar datasets completos innecesariamente
- Liberar recursos tras su uso
- Persistir solo cuando aporta beneficio
- Elegir nivel de persistencia adecuado

### Persistencia en Spark
{% raw %}
```python
from pyspark import StorageLevel

df.persist(StorageLevel.MEMORY_AND_DISK)
```
{% endraw %}`

## Optimización de Spark

### Buenas prácticas generales

* Usar DataFrames en lugar de RDDs
* Evitar `collect()` en grandes volúmenes
* Usar `filter` y `select` lo antes posible
* Aprovechar Catalyst Optimizer

### Ajuste de recursos

* Memoria del driver
* Memoria de executors
* Número de cores por executor

### Ejemplo de envío optimizado

{% raw %}
```bash
spark-submit \
	--executor-memory 4G \
	--executor-cores 2 \
	--num-executors 10 \
	app.py
```
{% endraw %}

## Gestión de archivos pequeños

### Problema

* Sobrecargan NameNode
* Reducen eficiencia del procesamiento

### Soluciones

* Compactar archivos
* Usar formatos columnar
* Reparticionar antes de escribir

### Reparticionado en Spark

{% raw %}
```python
df.repartition(10).write.parquet("hdfs:///data/output")
```
{% endraw %}

## Monitorización y tuning

* Usar Spark UI
* Analizar:
	* DAG
	* Stages
	* Tasks
* Identificar skew de datos
* Ajustar configuración progresivamente

## Anti-patrones comunes

* Sobreparticionar datos
* Usar un único reducer
* Ignorar el tamaño de los archivos
* Persistir todo indiscriminadamente
* Optimizar sin métricas

## Buenas prácticas finales

* Diseñar para el fallo
* Escalar de forma incremental
* Automatizar despliegues
* Documentar configuraciones
* Revisar periódicamente el rendimiento


# Designing and Building Big Data Applications — Casos reales de aplicación empresarial

## Temario
- Introducción
- Casos en retail y e-commerce
- Casos en banca y finanzas
- Casos en telecomunicaciones
- Casos en salud
- Casos en IoT y Smart Cities
- Casos en medios y entretenimiento
- Beneficios obtenidos
- Lecciones aprendidas
- Buenas prácticas

## Introducción
- Las aplicaciones Big Data buscan resolver problemas reales de negocio:
	- Mejora de decisiones
	- Optimización de procesos
	- Personalización de servicios
- Integran ingesta, almacenamiento, procesamiento y visualización
- Casos variados muestran impacto en distintos sectores

## Casos en retail y e-commerce
- Análisis de comportamiento de clientes
	- Segmentación y recomendaciones personalizadas
	- Herramientas: Spark, Hive, Kafka
- Optimización de inventario y logística
	- Predicción de demanda
	- Alertas de stock en tiempo real
- Ejemplo: Amazon utiliza Big Data para recomendaciones de productos y optimización logística

## Casos en banca y finanzas
- Detección de fraude en transacciones
	- Procesamiento en tiempo real
	- Spark Streaming + Kafka + HBase
- Análisis de riesgos y scoring crediticio
	- Modelos predictivos en batch
	- Hadoop + Spark MLlib
- Regulación y cumplimiento normativo
	- Auditoría y trazabilidad de transacciones

## Casos en telecomunicaciones
- Monitorización de redes
	- Detección de anomalías
	- Streaming de logs y eventos
- Optimización de planes y ofertas
	- Segmentación de clientes
	- Personalización de servicios
- Ejemplo: análisis de tráfico móvil para mejorar cobertura y calidad de servicio

## Casos en salud
- Análisis de historiales médicos
	- Spark + HDFS para procesamiento masivo
	- Identificación de patrones de enfermedad
- Investigación genética y bioinformática
	- Procesamiento de secuencias genómicas
	- Big Data para descubrimiento de fármacos
- Monitorización de pacientes en tiempo real
	- IoT y streaming de dispositivos médicos

## Casos en IoT y Smart Cities
- Monitorización de sensores urbanos
	- Tráfico, calidad del aire, energía
	- Procesamiento en tiempo real con Spark Streaming
- Mantenimiento predictivo de infraestructuras
	- Análisis de datos de sensores industriales
- Ejemplo: Smart meters para consumo eléctrico eficiente

## Casos en medios y entretenimiento
- Análisis de comportamiento de usuarios
	- Recomendaciones de contenido
	- Optimización de campañas publicitarias
- Procesamiento de logs y métricas
	- Streaming y batch combinados
- Ejemplo: Netflix usa Spark y Hadoop para recomendaciones personalizadas y análisis de streaming

## Beneficios obtenidos
- Reducción de costes operativos
- Mejora en la experiencia del cliente
- Aceleración en la toma de decisiones
- Predicción y prevención de problemas
- Mayor eficiencia en procesos internos

## Lecciones aprendidas
- Elegir la herramienta adecuada según el caso de uso
- Combinar procesamiento batch y streaming según necesidad
- Diseñar arquitecturas escalables y tolerantes a fallos
- Importancia de la calidad y gobernanza de datos
- Monitorización y optimización continua

## Buenas prácticas
- Empezar con pruebas de concepto
- Iterar y escalar progresivamente
- Integrar monitoreo desde el inicio
- Documentar arquitectura y decisiones
- Mantener seguridad y cumplimiento regulatorio
