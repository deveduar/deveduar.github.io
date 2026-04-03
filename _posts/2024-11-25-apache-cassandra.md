---
date: 2024-11-25 17:49
title: apache cassandra
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
aliases:
public_note: true
category: cloud
tags:
  - apache
  - apache-cassandra
  - db
---
# apache cassandra

- [Databases](/databases/databases/)
- [apache](/backend/apache/)
- [cloud](/cloud/cloud/)
- [Docker](/software%20engineering/docker/)
- [Apache Cassandra Documentation](https://cassandra.apache.org/_/quickstart.html)
- [Cassandra Basics](https://cassandra.apache.org/_/cassandra-basics.html)
- [Wikipedia](https://es.wikipedia.org/wiki/Apache_Cassandra)
- [Apache HBase Reference Guide](https://hbase.apache.org/book.html#getting_started)
- CQL  
- nosql
## Descripción General
Apache Cassandra es una base de datos NoSQL distribuida, orientada a columnas, diseñada para ofrecer **alta disponibilidad**, **tolerancia a fallos**, **escalabilidad horizontal masiva** y bajas latencias en operaciones de lectura y escritura. Se utiliza ampliamente en sistemas que requieren manejar **grandes volúmenes de datos distribuidos globalmente**, manteniendo rendimiento constante.

## Arquitectura
### Características Clave
- **Distribuida y descentralizada**
	- No existe un *single point of failure*.
	- Todos los nodos del clúster tienen el mismo rol (arquitectura *peer-to-peer*).
- **Escalabilidad horizontal real**
	- Añadir nodos incrementa capacidad y rendimiento sin reconfiguración centralizada.
- **Alta disponibilidad**
	- Uso intensivo de replicación entre nodos y datacenters.
- **Consistencia ajustable**
	- Permite elegir nivel de consistencia por operación (tuneable consistency).

### Componentes Principales
- **Nodo**: unidad básica de almacenamiento y cómputo.
- **Clúster**: conjunto de nodos funcionando como un sistema distribuido.
- **Keyspace**: análogo a un esquema en sistemas relacionales.
- **Tabla (Column Family)**: colección de datos organizada en filas distribuidas.
- **Snitch**: determina topología de red para optimizar replicación.
- **Replication Strategy**
	- SimpleStrategy
	- NetworkTopologyStrategy

## Modelo de Datos
### Estilo Orientado a Columnas
Cassandra utiliza un modelo basado en **column families** optimizado para lecturas por clave y patrones de acceso definidos.

- **Clave de partición**: define en qué nodo se almacena la fila.
- **Clave de clustering**: define el orden dentro de la partición.
- **Filas anchas**: Cassandra es especialmente eficiente para modelos *wide-row*.

### Diseño Basado en Consultas
El diseño del modelo de datos en Cassandra se basa en las consultas previstas:
- No se normaliza; se **desnormaliza** para optimizar velocidad.
- Las tablas son altamente específicas para cada patrón de acceso.

## Consistencia y Replicación
### Niveles de Consistencia
- ONE
- QUORUM
- ALL
- LOCAL_QUORUM
- EACH_QUORUM
- ANY (solo escritura)

### Replicación
- Replicación síncrona/asíncrona entre nodos.
- Diseño multi-datacenter extremadamente maduro.

## Particionamiento y Distribución
### Particionamiento por Hash
- Hash de la clave de partición mediante el *partitioner*.
- Distribución uniforme para evitar *hotspots*.

### Estrategias de Topología
- SimpleStrategy
- NetworkTopologyStrategy (recomendada en producción)

## Operaciones y Rendimiento
### Ventajas
- Escrituras extremadamente rápidas (log-structured merge trees).
- Lecturas consistentes y eficientes con índices internos.
- Muy robusta en entornos con fallos de red o hardware.

### Limitaciones
- No soporta JOINs ni transacciones complejas (solo *lightweight transactions*).
- Requiere modelado cuidadoso y entendimiento del patrón de acceso.
- No apto para consultas analíticas complejas sin herramientas externas.

## Query Language (CQL)
### Conceptos de CQL
Cassandra Query Language es similar a SQL, pero:
- No hay JOINs.
- No hay subconsultas complejas.
- Las consultas deben respetar índices y claves de partición.

### DDL Básico
{% raw %}
```sql
CREATE KEYSPACE mi_keyspace
WITH replication = {
	'class': 'NetworkTopologyStrategy',
	'datacenter1': '3'
};

CREATE TABLE usuarios (
	id UUID,
	nombre TEXT,
	email TEXT,
	PRIMARY KEY (id)
);
```
{% endraw %}`

### DML Básico

{% raw %}
```sql
INSERT INTO usuarios (id, nombre, email)
VALUES (uuid(), 'Ana', 'ana@example.com');

SELECT * FROM usuarios WHERE id = 1234;
```
{% endraw %}


## Casos de Uso

* Sistemas con **altísimos volúmenes de escritura**.
* Sistemas distribuidos globalmente con replicación entre datacenters.
* Time-series data.
* IoT y telemetría.
* Mensajería y plataformas sociales.
* Motores de recomendación y análisis en tiempo real.

## Operación en Docker

### Ejemplo de docker-compose

{% raw %}
```yaml
version: '3'
services:
	cassandra:
		image: cassandra:latest
		container_name: cassandra
		environment:
			- CASSANDRA_CLUSTER_NAME=cluster_local
			- CASSANDRA_NUM_TOKENS=16
		ports:
			- "9042:9042"
		volumes:
			- ./data:/var/lib/cassandra
```
{% endraw %}

## Comparación con Otros Sistemas

### Cassandra vs HBase
* Cassandra es completamente peer-to-peer.
* HBase depende de Hadoop + HDFS.
* Cassandra tiene latencias más bajas en escrituras.
* HBase puede ser más apto para analítica con Hadoop.

### Cassandra vs RDBMS
* Sin transacciones ACID complejas.
* No hay JOINs.
* Mucho más escalable horizontalmente.
* Modelo de datos totalmente distinto (basado en consultas).

## Buenas Prácticas
* Modelar siempre basándose en consultas.
* Elegir cuidadosamente keys de partición.
* Evitar particiones enormes.
* Usar NetworkTopologyStrategy en producción.
* Ajustar nivel de consistencia según necesidad.
* Monitorizar con métricas internas (latencias, compaction, GC).

## Herramientas Útiles
* cqlsh
* nodetool
* Cassandra Reaper (reparaciones)
* Prometheus + Grafana
* Drivers oficiales (Java, Python, Node.js, Go)


# Más Lenguajes Dentro del Ecosistema de CQL

## DDL vs DML vs CQL

### DDL (Data Definition Language)
Lenguaje para **definir y modificar la estructura** de los objetos de la base de datos.  
En Cassandra, forma parte del conjunto de comandos disponibles dentro de CQL.

- Crear, modificar o eliminar:
	- Keyspaces
	- Tablas
	- Índices
	- Tipos (UDTs)
- Ejemplos:
{% raw %}
```sql
CREATE KEYSPACE demo WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};
CREATE TABLE usuarios (id UUID PRIMARY KEY, nombre TEXT);
ALTER TABLE usuarios ADD email TEXT;
DROP TABLE usuarios;
```
{% endraw %}

### DML (Data Manipulation Language)
Lenguaje para **manipular los datos dentro de las tablas**.  
Incluye operaciones de inserción, actualización, eliminación y lectura.

- Operaciones principales:
	- INSERT
	- UPDATE
	- DELETE
	- SELECT
- Ejemplos:
{% raw %}
```sql
INSERT INTO usuarios (id, nombre) VALUES (uuid(), 'Ana');
SELECT * FROM usuarios WHERE id = 1234;
UPDATE usuarios SET nombre = 'Ana María' WHERE id = 1234;
DELETE FROM usuarios WHERE id = 1234;
```
{% endraw %}

### CQL (Cassandra Query Language)
Lenguaje de consulta propio de Cassandra, inspirado en SQL pero adaptado al **modelo distribuido y orientado a columnas**.

- Incluye **DDL**, **DML** y elementos adicionales específicos de Cassandra.
- Restricciones importantes:
	- No hay JOINs.
	- No hay subconsultas complejas.
	- Las consultas deben seguir el modelo de datos (clave de partición + clustering).
- Ejemplo general:
{% raw %}
```sql
CREATE TABLE sensores (
	device_id TEXT,
	ts TIMESTAMP,
	lectura DOUBLE,
	PRIMARY KEY (device_id, ts)
);

SELECT * FROM sensores WHERE device_id = 'A1' AND ts > '2025-01-01';
```
{% endraw %}

### Resumen Comparativo
- **DDL**: define la estructura de la base de datos.  
- **DML**: manipula los datos almacenados.  
- **CQL**: es el lenguaje completo que engloba ambos y añade capacidades específicas para Cassandra.

## DCL (Data Control Language)
En Cassandra **no existe DCL como tal**, pero sí hay comandos para gestionar **roles, permisos y autenticación**, que se consideran equivalentes.

### Comandos Principales
- **CREATE ROLE**
- **GRANT**
- **REVOKE**
- **DROP ROLE**
- **LIST ROLES**

### Ejemplo
{% raw %}
```sql
CREATE ROLE admin WITH PASSWORD = '1234' AND SUPERUSER = true AND LOGIN = true;

GRANT SELECT ON KEYSPACE demo TO usuario1;

REVOKE MODIFY ON KEYSPACE demo FROM usuario1;

DROP ROLE usuario1;
```
{% endraw %}`

---

## TCL (Transaction Control Language)

En Cassandra **no existen transacciones complejas** como en sistemas ACID tradicionales.
Sin embargo, sí hay un mecanismo parcial: **Lightweight Transactions (LWT)**.

### Características

* Basadas en *Compare-and-Set (CAS)*.
* Garantizan **serialización** para una única fila.
* Útiles para asegurar unicidad o actualizaciones condicionadas.

### Ejemplo (IF EXISTS / IF NOT EXISTS)

{% raw %}
```sql
INSERT INTO usuarios (id, email)
VALUES (1, 'a@a.com')
IF NOT EXISTS;
```
{% endraw %}

{% raw %}
```sql
UPDATE usuarios
SET email = 'nuevo@a.com'
WHERE id = 1
IF email = 'a@a.com';
```
{% endraw %}

---

## DQL (Data Query Language)

En SQL se diferencia a veces DML (manipulación) de DQL (solo lectura).
En Cassandra **SELECT** forma parte de DML, pero conceptualmente puede separarse.

### Ejemplo

{% raw %}
```sql
SELECT nombre, email
FROM usuarios
WHERE id = 1;
```
{% endraw %}

---

## Lenguajes y Categorías Adicionales en Cassandra

### Schema Management Interno

Cassandra maneja internamente:

* **Metadata schema**
* **Propagation del schema entre nodos**
* Sin equivalente explícito a SQL "system catalogs", pero se accede mediante:

  * `DESCRIBE TABLE`
  * `DESCRIBE KEYSPACE`
  * `system_schema.*`

### Comandos de Administración Especiales

No son DDL/DML pero forman parte del ecosistema:

#### Consultas al *schema*

{% raw %}
```sql
DESCRIBE KEYSPACE demo;
DESCRIBE TABLE demo.usuarios;
```
{% endraw %}

#### Gestión de índices

{% raw %}
```sql
CREATE INDEX idx_email ON usuarios(email);
DROP INDEX idx_email;
```
{% endraw %}

#### User Defined Types (UDT)

{% raw %}
```sql
CREATE TYPE direccion (
	calle TEXT,
	numero INT
);

ALTER TYPE direccion ADD codigo_postal INT;
```
{% endraw %}

#### User Defined Functions (UDF) y Aggregates

* Permiten lógica en el servidor (no recomendadas para cargas críticas).

{% raw %}
```sql
CREATE FUNCTION sumar(a int, b int)
RETURNS NULL ON NULL INPUT
RETURNS int
LANGUAGE java
AS 'return Integer.valueOf(a + b);';
```
{% endraw %}

---

## Resumen Ampliado

| Categoría          | Existe en Cassandra | Descripción                                          |
| ------------------ | ------------------- | ---------------------------------------------------- |
| **DDL**            | ✔                   | Estructura de keyspaces, tablas, índices, UDTs.      |
| **DML**            | ✔                   | INSERT, UPDATE, DELETE, SELECT.                      |
| **DQL**            | Parcial             | Lecturas (SELECT), aunque oficialmente parte de DML. |
| **DCL**            | ✔                   | Gestión de roles y permisos.                         |
| **TCL**            | Parcial             | Solo LWT (IF EXISTS, IF NOT EXISTS).                 |
| **UDF/UDA**        | ✔                   | Funciones definidas por el usuario.                  |
| **Admin Commands** | ✔                   | DESCRIBE, ALTER, schema metadata.                    |


