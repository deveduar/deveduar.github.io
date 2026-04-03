---
date: 2024-11-06 23:27
title: Databases
keywords:
source:
status: 🚀
Parent: "[[Area-Prog]]"
aliases:
public_note: true
category: Databases
tags:
  - db
  - MySQL
  - postgres
  - redis
  - JSON
  - DBML
  - elasticsearh
  - json
  - mongodb
  - backend
---
# Databases

## Relacionado
- [Backend](/backend/backend/)
- DevOps
- AWS
- [Data Science](/data%20science/data-science/)
- [Cloud Computing](/cloud/cloud-computing/)
- [microservicios](/backend/microservicios/)

## Tipos de Bases de Datos

### Relacionales (SQL)
- PostgreSQL
- MySQL
- Oracle
- SQL Server
- **Características**
	- ACID (Atomicity, Consistency, Isolation, Durability)
	- Esquema rígido y relaciones entre tablas
	- Normalización para evitar redundancia
	- Soporte para transacciones complejas

### NoSQL
- MongoDB
- [apache cassandra](/cloud/apache-cassandra/)
- [DynamoDB](/databases/dynamodb/)
- **Tipos**
	- Documentales (MongoDB)
	- Clave-valor (Redis, DynamoDB)
	- Columnar (Cassandra)
	- Grafos (Neo4j)
- **Características**
	- Esquema flexible
	- Escalabilidad horizontal
	- Consistencia eventual (opcional)
	- Ideal para datos no estructurados

## Conceptos Fundamentales
- ¿Qué es ACID en bases de datos Guía completa 2025-
- Bases de datos ACID en comparación con las BASE Diferencia entre bases de datos AWS-
- Sharding y Replicación
- Consistencia eventual vs fuerte
- Índices, claves primarias y foráneas
- Normalización y desnormalización
- Transacciones y rollbacks
- Backup, Recovery y Snapshots
- Optimización de consultas y performance tuning
- [DB-Fundamentos y documentos](/databases/db-fundamentos-y-documentos/) 

## ORM y Mapeo de Datos
- ORM
- Mapeo Objeto-Relacional (ORM)
- [Sequelize](/backend/sequelize/)
- TypeORM
- Node.js
- Migraciones de esquemas
- Relaciones: uno a uno, uno a muchos, muchos a muchos
- Soporte para SQL y NoSQL según framework
- Buenas prácticas: evitar consultas N+1, uso de índices, caching

## Herramientas y Plataformas

### Gestión de Bases de Datos
- [TablePlus | Modern, Native Tool for Database Management](https://tableplus.com/)
- [Postgres Sandbox](https://postgres.new/)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)
- [RedisInsight](https://redis.com/redis-enterprise/redis-insight/)

### Servicios Cloud
- Supabase
- AWS
	- [DynamoDB](/databases/dynamodb/)
	- RDS
	- Aurora

### Lenguajes y Frameworks
- [PLSQL](/databases/plsql/)
- Node.js
- [Sequelize](/backend/sequelize/)
- TypeORM

### Documentación y Modelado
- [DBML](/databases/dbml/)
- [JSON](/databases/json/)
- [XML](/databases/xml/)
- SQL
- Cache

## Buenas Prácticas y Estrategias
- Seguridad: roles de acceso, encriptación, autenticación
- Monitoreo y logging de bases de datos
- Gestión de índices y estadísticas
- Versionado de esquemas y migraciones
- Escalabilidad horizontal y vertical según necesidad
- Estrategias de caching (Redis, Memcached)
- Testing de integridad de datos y consistencia

# Formas normales en las bases de datos relacionales

## Introducción y propósito
Las formas normales son reglas de diseño que se aplican a esquemas de bases de datos relacionales para reducir redundancia, evitar anomalías (inserción, actualización y borrado) y mejorar la integridad de los datos. Se basan principalmente en el concepto de Dependencia funcional y en la correcta definición de claves.

La normalización no es un objetivo absoluto: es un proceso guiado por el equilibrio entre consistencia, claridad del modelo y rendimiento.

## Conceptos fundamentales
- Relación: conjunto de tuplas (filas) con los mismos atributos (columnas).
- Atributo: característica o campo de una relación.
- Clave primaria: atributo o conjunto de atributos que identifican de forma única una tupla.
- Clave candidata: conjunto mínimo de atributos que puede actuar como clave primaria.
- Dependencia funcional: relación donde un atributo (o conjunto) determina el valor de otro.
- Dependencia funcional parcial: ocurre cuando un atributo depende solo de una parte de una clave compuesta.
- Dependencia transitiva: cuando un atributo no clave depende de otro atributo no clave.

## Primera forma normal (1FN)
Una relación está en 1FN si:
- Todos los atributos contienen valores atómicos (indivisibles).
- No existen grupos repetidos ni atributos multivaluados.
- Cada campo contiene un solo valor por registro.

Objetivo principal:
- Eliminar listas, arrays o valores compuestos dentro de una misma columna.

Ejemplo conceptual:
- Incorrecto: `telefonos = {123, 456}`
- Correcto: una tabla separada o múltiples filas.

## Segunda forma normal (2FN)
Una relación está en 2FN si:
- Está en 1FN.
- Todos los atributos no clave dependen de la clave primaria completa.
- No existen dependencias funcionales parciales.

Aplica únicamente cuando la clave primaria es compuesta.

Problema que resuelve:
- Evita que atributos dependan solo de una parte de la clave.

Ejemplo típico:
- Clave compuesta: (id_estudiante, id_curso)
- Error: `nombre_estudiante` depende solo de `id_estudiante`.

## Tercera forma normal (3FN)
Una relación está en 3FN si:
- Está en 2FN.
- No existen dependencias transitivas entre atributos no clave.
- Los atributos no clave dependen únicamente de la clave primaria.

Problema que resuelve:
- Evita que un atributo no clave determine otro atributo no clave.

Ejemplo conceptual:
- `id_empleado → id_departamento`
- `id_departamento → nombre_departamento`
- `nombre_departamento` debe estar en otra relación.

## Forma normal de Boyce-Codd (BCNF)
Una relación está en BCNF si:
- Para toda dependencia funcional X → Y, X es una superclave.
- Es una versión más estricta de la 3FN.

Diferencia con 3FN:
- 3FN permite ciertas dependencias si Y es atributo primo.
- BCNF no permite excepciones.

Se utiliza cuando:
- Existen múltiples claves candidatas y dependencias complejas entre ellas.

## Cuarta forma normal (4FN)
Una relación está en 4FN si:
- Está en BCNF.
- No existen dependencias multivaluadas no triviales.

Problema que resuelve:
- Evita almacenar múltiples hechos independientes en una misma relación.

Ejemplo conceptual:
- Un profesor puede tener múltiples idiomas y múltiples materias, sin relación entre sí.
- Deben separarse en relaciones independientes.

## Quinta forma normal (5FN)
Una relación está en 5FN si:
- No existen dependencias de unión no triviales.
- No puede descomponerse en tablas más pequeñas sin pérdida de información.

Características:
- Rara vez se aplica en sistemas reales.
- Se enfoca en casos muy específicos de recomposición de relaciones.

## Consideraciones prácticas
- Normalizar reduce redundancia pero puede aumentar el número de joins.
- En sistemas reales se usa a veces Desnormalización por razones de rendimiento.
- La mayoría de los diseños prácticos llegan hasta 3FN o BCNF.
- La normalización depende del entendimiento correcto del dominio del problema.

## Relación con el diseño lógico
Las formas normales forman parte del diseño lógico de bases de datos, posterior al Modelo entidad-relación y previo a la implementación física en un SGBD concreto.

Un buen diseño normalizado:
- Facilita el mantenimiento.
- Reduce inconsistencias.
- Mejora la evolución del esquema a largo plazo.

# Formas normales en bases de datos relacionales: casos de uso y ejemplos en PostgreSQL

## Objetivo práctico de la normalización
La normalización se aplica para:
- Evitar duplicación de datos.
- Prevenir anomalías de inserción, actualización y borrado.
- Facilitar la evolución del esquema.
- Garantizar coherencia en sistemas con múltiples operaciones concurrentes.

En PostgreSQL, una base bien normalizada suele combinarse con índices, claves foráneas y restricciones para reforzar la integridad.

## Primera forma normal (1FN)

### Caso de uso
Un sistema de usuarios donde cada usuario puede tener varios correos electrónicos.

### Problema sin 1FN
Se almacenan múltiples valores en una sola columna.

{% raw %}
```sql
CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
	nombre TEXT,
	emails TEXT
);
```
{% endraw %}`

Ejemplo de dato incorrecto:

* emails = '[a@mail.com](mailto:a@mail.com),[b@mail.com](mailto:b@mail.com),[c@mail.com](mailto:c@mail.com)'

Esto impide búsquedas eficientes y rompe la atomicidad.

### Solución en 1FN

Separar los valores multivaluados en otra tabla.

{% raw %}
```sql
CREATE TABLE usuarios (
	id SERIAL PRIMARY KEY,
	nombre TEXT
);

CREATE TABLE usuarios_emails (
	id SERIAL PRIMARY KEY,
	usuario_id INT REFERENCES usuarios(id),
	email TEXT
);
```
{% endraw %}

## Segunda forma normal (2FN)

### Caso de uso

Un sistema de matrículas donde un estudiante se inscribe en cursos.

### Problema sin 2FN

Atributos que dependen solo de parte de una clave compuesta.

{% raw %}
```sql
CREATE TABLE inscripciones (
	estudiante_id INT,
	curso_id INT,
	nombre_estudiante TEXT,
	nombre_curso TEXT,
	PRIMARY KEY (estudiante_id, curso_id)
);
```
{% endraw %}

Problemas:

* `nombre_estudiante` depende solo de `estudiante_id`
* `nombre_curso` depende solo de `curso_id`

### Solución en 2FN

Separar las entidades.

{% raw %}
```sql
CREATE TABLE estudiantes (
	id SERIAL PRIMARY KEY,
	nombre TEXT
);

CREATE TABLE cursos (
	id SERIAL PRIMARY KEY,
	nombre TEXT
);

CREATE TABLE inscripciones (
	estudiante_id INT REFERENCES estudiantes(id),
	curso_id INT REFERENCES cursos(id),
	PRIMARY KEY (estudiante_id, curso_id)
);
```
{% endraw %}

## Tercera forma normal (3FN)

### Caso de uso

Sistema de empleados con departamentos.

### Problema sin 3FN

Dependencias transitivas entre atributos no clave.

{% raw %}
```sql
CREATE TABLE empleados (
	id SERIAL PRIMARY KEY,
	nombre TEXT,
	departamento_id INT,
	nombre_departamento TEXT
);
```
{% endraw %}

Problema:

* `departamento_id → nombre_departamento`
* Dependencia transitiva respecto a la clave primaria.

### Solución en 3FN

Extraer la entidad dependiente.

{% raw %}
```sql
CREATE TABLE departamentos (
	id SERIAL PRIMARY KEY,
	nombre TEXT
);

CREATE TABLE empleados (
	id SERIAL PRIMARY KEY,
	nombre TEXT,
	departamento_id INT REFERENCES departamentos(id)
);
```
{% endraw %}

## Boyce-Codd Normal Form (BCNF)

### Caso de uso

Sistema académico donde un profesor dicta una asignatura en un aula específica.

Suposiciones:

* Un profesor dicta solo una asignatura.
* Cada asignatura puede tener varios profesores.

### Problema

Dependencias donde el determinante no es superclave.

{% raw %}
```sql
CREATE TABLE clases (
	profesor TEXT,
	asignatura TEXT,
	aula TEXT,
	PRIMARY KEY (profesor, aula)
);
```
{% endraw %}

Dependencia:

* profesor → asignatura
* profesor no es superclave.

### Solución en BCNF

Descomposición basada en dependencias.

{% raw %}
```sql
CREATE TABLE profesores_asignaturas (
	profesor TEXT PRIMARY KEY,
	asignatura TEXT
);

CREATE TABLE clases (
	profesor TEXT REFERENCES profesores_asignaturas(profesor),
	aula TEXT,
	PRIMARY KEY (profesor, aula)
);
```
{% endraw %}

## Cuarta forma normal (4FN)

### Caso de uso

Sistema universitario con profesores, idiomas y materias.

Suposiciones:

* Un profesor puede hablar varios idiomas.
* Un profesor puede dictar varias materias.
* Idiomas y materias no están relacionados entre sí.

### Problema sin 4FN

Dependencias multivaluadas.

{% raw %}
```sql
CREATE TABLE profesores (
	profesor TEXT,
	idioma TEXT,
	materia TEXT
);
```
{% endraw %}

Esto genera combinaciones redundantes.

### Solución en 4FN

Separar los hechos independientes.

{% raw %}
```sql
CREATE TABLE profesores_idiomas (
	profesor TEXT,
	idioma TEXT,
	PRIMARY KEY (profesor, idioma)
);

CREATE TABLE profesores_materias (
	profesor TEXT,
	materia TEXT,
	PRIMARY KEY (profesor, materia)
);
```
{% endraw %}

## Quinta forma normal (5FN)

### Caso de uso

Escenario de contratos entre proveedores, productos y regiones donde solo ciertas combinaciones son válidas.

Características:

* Las restricciones no pueden expresarse solo con claves o dependencias funcionales.
* La relación completa se obtiene solo mediante joins.

### Uso práctico

* Muy poco común.
* Aplicable en modelos altamente formales o académicos.
* Rara vez necesario en PostgreSQL de producción.

## Consideraciones prácticas en PostgreSQL

* PostgreSQL refuerza la normalización mediante:

  * FOREIGN KEY
  * UNIQUE
  * CHECK
  * NOT NULL
* La normalización suele complementarse con:

  * Índices para rendimiento
  * Desnormalización selectiva en lecturas intensivas
* La mayoría de sistemas reales se quedan en 3FN o BCNF.

## Relación con consultas y rendimiento

Un esquema normalizado:

* Requiere más JOINs
* Reduce inconsistencias
* Facilita cambios estructurales

PostgreSQL maneja bien JOINs complejos si:

* Existen índices adecuados
* Las estadísticas están actualizadas
* El modelo refleja correctamente el dominio

{% raw %}
```
```
{% endraw %}

# Docs Databases
{% raw %}
```base
type: list
name: "Notas con #db en Projects"
order:
  - property: date_saved
    direction: desc
columns:
  - file.name
  - date_saved
filters:
  and:
    - file.path.contains("Projects")
views:
  - type: table
    name: Table
    filters:
      or:
        - categories == link("Databases")
        - file.hasTag("db")
    order:
      - file.name
      - status
    sort:
      - property: file.mtime
        direction: DESC
    columnSize:
      file.name: 443

```
{% endraw %}
# omnivore db
{% raw %}
```base
type: list
name: "Notas con #db en Omnivore"
order:
  - property: date_saved
    direction: desc
columns:
  - file.name
  - date_saved
filters:
  and:
    - file.inFolder("Omnivore")
    - file.hasTag("db")
views:
  - type: table
    name: Table
    sort:
      - property: file.mtime
        direction: DESC

```
{% endraw %}






