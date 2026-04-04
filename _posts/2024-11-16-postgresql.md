---
date: 2024-11-16 17:15
title: postgreSQL
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Databases
tags:
  - postgres
  - db
---
# postgreSQL

- [PostgreSQL: Documentation](https://www.postgresql.org/docs/)

## Fundamentos del Modelo y Estructura
- ACID  
	- Atómico  
	- Consistente  
	- Aislado  
	- Durable
- Concurrencia y MVCC  
	- Control de transacciones  
	- Versionado de filas  
	- Lecturas consistentes sin bloquear
- Herencia y polimorfismo  
	- Tablas que heredan columnas  
	- Consultas polimórficas que afectan jerarquías
- Schemas  
	- Organización lógica de objetos  
	- Separación de dominios de datos  
	- wordpress schemas

## Objetos, Procedimientos y Extensibilidad
- Objetos y procedimientos  
	- `CREATE FUNCTION`  
	- `CREATE PROCEDURE`  
	- Procedimientos transaccionales y no transaccionales  
- Extensiones  
	- Geoespacial **PostGIS**  
	- Distribución horizontal escalable **Citus**  
	- Embedding e inferencia para IA (PG-Vector y variantes)  
	- **hstore**: pares key-value  
- *Custom types*  
	- `CREATE TYPE` para definir tipos compuestos  
	- Reutilización en otras tablas (`details Human`)  
- Operadores y funciones custom  
	- Registro de operadores (`CREATE OPERATOR`)  
	- Castings definidos por usuario

## Tipos Avanzados
- JSON y JSONB  
	- Indexación GIN  
	- Queries con `->`, `->>`, `#>`  
- Hstore  
	- Key-value ligero, conversión con `::hstore`
- Arrays  
	- Tipos nativos de arrays  
	- Indexación parcial y búsqueda rápida  
- Rangos  
	- `int4range`, `tsrange`, etc.  
	- Overlaps, contains, union

## Inserciones, Casting y Uso de Objetos
- Insertos con tipos personalizados  
	- `INSERT INTO client (details) VALUES (ROW())`  
	- Casting explícito (`::json`, `::hstore`, `::Human`)
- Notación punto para objetos  
	- `SELECT (details).bio FROM client`  
	- Acceso a atributos internos  
- Trabajo con JSON  
	- Conversión de cadenas a JSON  
	- Validación y comprobación de tipos

## Claves, Identidad y Organización de Tablas
- Primary key  
	- `SERIAL PRIMARY KEY`  
	- `GENERATED ALWAYS AS IDENTITY`
- Foreign keys  
	- Cascadas  
	- Deferrable constraints  
- Particionamiento  
	- Rango, lista y hash  
	- Evitar tablas extremadamente grandes monolíticas  
	- Planificación y routing de queries

## Performance, Indexación y Optimización
- Índices  
	- B-Tree, GIN, GiST, BRIN  
	- Índices parciales  
	- Índices funcionales
- EXPLAIN y EXPLAIN ANALYZE  
	- Lecturas secuenciales vs index scans  
	- Costo del plan  
- Gestión de VACUUM y AUTOVACUUM  
	- Prevención de bloat  
	- Freeze y mantenimiento de visibilidad

## Seguridad, Roles y Políticas
- Roles y privilegios  
	- `GRANT`, `REVOKE`  
	- Role inheritance  
- Row-Level Security (RLS)  
	- Control granular por fila  
	- Políticas multi-tenant
- Auditoría  
	- pg_audit y logs nativos  
	- Detección de accesos no autorizados

## Replicación, Backup y Alta Disponibilidad
- Replicación física (streaming)  
- Replicación lógica  
- Hot standby y failover  
- pg_basebackup  
- WAL archiving  
- Herramientas externas: Patroni, Stolon, pgBackRest

## Codificación Ejemplos

### Crear un tipo compuesto
{% raw %}
```sql
CREATE TYPE Human AS (
	name text,
	age int,
	bio text
);
```
{% endraw %}`

### Insertar valores usando tipos compuestos

{% raw %}
```sql
INSERT INTO client (details)
VALUES (ROW('Eduardo', 30, 'developer')::Human);
```
{% endraw %}

### Acceso por notación punto

{% raw %}
```sql
SELECT (details).bio
FROM client;
```
{% endraw %}

### Conversión a JSON o hstore

{% raw %}
```sql
SELECT '{"name":"edu"}'::jsonb;
SELECT 'name=>edu,age=>20'::hstore;
```
{% endraw %}


Aquí tienes un **cheat sheet de PostgreSQL** claro, práctico y compacto, listo para pegar en Obsidian si quieres:

# PostgreSQL — Cheat Sheet

## Conexión y Gestión Básica
- Conectarse a una BD  
	- `psql -U usuario -d basedatos`
- Listar DBs  
	- `\l`
- Cambiar de BD  
	- `\c basedatos`
- Listar tablas  
	- `\dt`
- Describir tabla  
	- `\d tabla`
- Salir  
	- `\q`

---

## CRUD Básico
**SELECT**
{% raw %}
```sql
SELECT columna1, columna2 FROM tabla;
SELECT * FROM tabla WHERE condicion;
SELECT DISTINCT columna FROM tabla;
```
{% endraw %}`

**INSERT**

{% raw %}
```sql
INSERT INTO tabla (col1, col2)
VALUES (val1, val2);
```
{% endraw %}

**UPDATE**

{% raw %}
```sql
UPDATE tabla SET col1 = valor WHERE id = 1;
```
{% endraw %}

**DELETE**

{% raw %}
```sql
DELETE FROM tabla WHERE id = 1;
```
{% endraw %}

---

## Filtrado y Orden

{% raw %}
```sql
SELECT * FROM tabla
WHERE col > 10 AND col2 LIKE '%text%'
ORDER BY col DESC
LIMIT 10 OFFSET 20;
```
{% endraw %}

---

## Joins

{% raw %}
```sql
SELECT *
FROM a
JOIN b ON a.id = b.a_id;

LEFT JOIN, RIGHT JOIN, FULL JOIN
```
{% endraw %}

---

## Funciones de Agregado

{% raw %}
```sql
SELECT COUNT(*), SUM(col), AVG(col), MAX(col), MIN(col)
FROM tabla
GROUP BY otra_columna
HAVING SUM(col) > 100;
```
{% endraw %}

---

## Transacciones

{% raw %}
```sql
BEGIN;
UPDATE tabla SET col = val;
COMMIT;

-- Cancelar
ROLLBACK;
```
{% endraw %}

---

## Tipos Avanzados

**JSON / JSONB**

{% raw %}
```sql
SELECT data->'name', data->>'age'
FROM usuarios;

UPDATE usuarios SET data = data || '{"nuevo": true}';
```
{% endraw %}

**Arrays**

{% raw %}
```sql
SELECT * FROM tabla WHERE 3 = ANY(mi_array);
```
{% endraw %}

**HSTORE**

{% raw %}
```sql
SELECT h->'key' FROM tabla;
```
{% endraw %}

**Custom Types**

{% raw %}
```sql
CREATE TYPE human AS (name text, age int);
```
{% endraw %}

---

## Crear y Modificar Tablas

{% raw %}
```sql
CREATE TABLE personas (
	id SERIAL PRIMARY KEY,
	nombre TEXT NOT NULL,
	edad INT,
	info JSONB
);

ALTER TABLE personas ADD COLUMN activo BOOL DEFAULT TRUE;
ALTER TABLE personas DROP COLUMN edad;
```
{% endraw %}

---

## Índices

{% raw %}
```sql
CREATE INDEX idx_name ON tabla(columna);
CREATE INDEX idx_json ON tabla USING GIN(json_col);

-- Índice parcial
CREATE INDEX idx_active ON tabla(col) WHERE activo = true;
```
{% endraw %}

---

## Vistas y Materialized Views

{% raw %}
```sql
CREATE VIEW vista AS
SELECT * FROM tabla WHERE activo = true;

CREATE MATERIALIZED VIEW vista_mat AS
SELECT * FROM tabla;

REFRESH MATERIALIZED VIEW vista_mat;
```
{% endraw %}

---

## Funciones y Procedimientos

{% raw %}
```sql
CREATE FUNCTION sumar(a INT, b INT)
RETURNS INT AS $$
BEGIN
	RETURN a + b;
END; $$ LANGUAGE plpgsql;

SELECT sumar(3,5);
```
{% endraw %}

---

## Esquemas

{% raw %}
```sql
CREATE SCHEMA admin;
SET search_path TO admin, public;

CREATE TABLE admin.users (...);
```
{% endraw %}

---

## Copias y Restauración

{% raw %}
```sql
pg_dump basedatos > backup.sql
pg_restore -d nuevaBD backup.dump
```
{% endraw %}

---

## EXPLAIN

{% raw %}
```sql
EXPLAIN ANALYZE
SELECT * FROM tabla WHERE col = 10;
```
{% endraw %}

---

## Particionamiento

{% raw %}
```sql
CREATE TABLE logs (
	id SERIAL,
	fecha DATE,
	msg TEXT
) PARTITION BY RANGE (fecha);

CREATE TABLE logs_2025 PARTITION OF logs
FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');
```
{% endraw %}


# PostgreSQL — Conceptos Avanzados y Completos

- [PostgreSQL: Documentation](https://www.postgresql.org/docs/)

## Modelo de Datos y Abstracción
- Herencia y polimorfismo de tablas  
	- Tablas hijas heredan columnas de tablas padre  
	- Consultas polimórficas con `SELECT * FROM padre UNION ALL SELECT * FROM hijo`
- Schemas  
	- Organización lógica de objetos  
	- Separación de dominios de datos  
	- wordpress schemas

## Tipos de Datos Avanzados
- JSON y JSONB  
	- Manipulación con `->`, `->>`, `#>`  
	- Indexación GIN para búsquedas rápidas
- Hstore  
	- Key-value para almacenamiento flexible  
	- Conversión con `::hstore`
- Arrays y Rangos  
	- `int4[]`, `text[]`  
	- Rangos `int4range`, `tsrange`, `daterange`
- Custom Types  
	- `CREATE TYPE` para estructuras complejas reutilizables

## Objetos y Extensiones
- Funciones y procedimientos  
	- `CREATE FUNCTION` y `CREATE PROCEDURE`  
	- Funciones PL/pgSQL, PL/Python, PL/v8
- Extensiones útiles  
	- **PostGIS**: datos geoespaciales  
	- **Citus**: distribución y escalabilidad  
	- **PG-Vector**: embeddings para IA  
	- **uuid-ossp**: generación de UUID  
	- **pgcrypto**: funciones criptográficas

## Integridad y Claves
- Primary Key: `SERIAL PRIMARY KEY` o `GENERATED ALWAYS AS IDENTITY`  
- Foreign Key: referencias con `ON DELETE CASCADE` o `SET NULL`  
- Unique constraints  
- Check constraints
- Deferrable constraints  
	- Ejecutadas al final de la transacción

## Transacciones y Concurrencia
- ACID: Atómico, Consistente, Aislado, Durable  
- MVCC: control de versiones para lecturas concurrentes  
- Locking: row-level y table-level locks  
- Serializable vs Read Committed isolation levels

## Indexación y Performance
- Tipos de índices  
	- B-Tree (por defecto), GIN, GiST, BRIN  
	- Funcionales, parciales y compuestos  
- EXPLAIN y EXPLAIN ANALYZE  
	- Planificación y costo de queries
- VACUUM y AUTOVACUUM  
	- Limpieza de tuplas muertas y prevención de bloat

## Seguridad
- Roles y permisos: `GRANT`, `REVOKE`, role inheritance  
- Row-Level Security (RLS)  
- Auditoría con `pg_audit` y logs nativos

## Replicación y Alta Disponibilidad
- Replicación física (streaming replication)  
- Replicación lógica y suscripción  
- Hot standby y failover  
- Herramientas externas: Patroni, Stolon, pgBackRest

## Operaciones Avanzadas
- Particionamiento de tablas: por rango, lista y hash  
- Materialized Views y refresh automático  
- Upsert con `INSERT ... ON CONFLICT`  
- CTEs (Common Table Expressions) y recursivas

## Consultas Avanzadas
- Notación punto para acceder a campos de tipos compuestos  
	- `SELECT (details).bio FROM clients;`
- JSON operators y funciones  
	- `jsonb_set`, `jsonb_insert`, `jsonb_path_query`  
- Funciones agregadas avanzadas  
	- `string_agg`, `array_agg`, `json_agg`
- Window functions  
	- `ROW_NUMBER()`, `RANK()`, `LEAD()`, `LAG()`

## Copias, Backup y Restore
- `pg_dump` y `pg_restore`  
- WAL archiving  
- Base backups con `pg_basebackup`

## Ejemplos de Código

### Crear un tipo compuesto
{% raw %}
```sql
CREATE TYPE human AS (
	name text,
	age int,
	bio text
);
```
{% endraw %}`

### Insertar usando tipo compuesto

{% raw %}
```sql
INSERT INTO client (details)
VALUES (ROW('Eduardo', 30, 'developer')::human);
```
{% endraw %}

### Notación punto

{% raw %}
```sql
SELECT (details).bio
FROM client;
```
{% endraw %}

### JSON y hstore

{% raw %}
```sql
SELECT '{"name":"edu"}'::jsonb;
SELECT 'name=>edu,age=>20'::hstore;
```
{% endraw %}

### Upsert

{% raw %}
```sql
INSERT INTO clientes(id, nombre)
VALUES (1, 'Eduardo')
ON CONFLICT(id) DO UPDATE SET nombre = EXCLUDED.nombre;
```
{% endraw %}

### CTE recursiva

{% raw %}
```sql
WITH RECURSIVE nums AS (
	SELECT 1 AS n
	UNION ALL
	SELECT n+1 FROM nums WHERE n < 10
)
SELECT * FROM nums;
```
{% endraw %}


