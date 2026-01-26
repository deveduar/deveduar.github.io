---
date: 2024-11-06 23:27
title: Databases
keywords:
source:
status: 🚀
Parent: "[[Area-Prog]]"
aliases:
public_note: "true"
category: uncategorized
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
`$= dv.current().file.tags.join(" ")`

## Relacionado
- [Backend](/uncategorized/backend/)
- DevOps
- AWS
- [Data Science](/uncategorized/data-science/)
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
- 

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






