---
date: 2024-11-23 01:58
title: sql server
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: devops
tags:
  - MySQL
  - sql-server
---
# SQL Server

- [Docker](/software%20engineering/docker/)
- [Azure](/cloud/azure/)
- [Databases](/databases/databases/)
- [cloud](/cloud/cloud/)
- [csharp](/software%20engineering/csharp/)
- [ASP NET](/backend/asp-net/)

## Documentación Oficial
- [Documentación técnica de SQL Server - Microsoft Learn](https://learn.microsoft.com/es-es/sql/sql-server/?view=sql-server-ver16)
- [¿Qué es SQL Server? - Microsoft Learn](https://learn.microsoft.com/es-es/sql/sql-server/what-is-sql-server?view=sql-server-ver16)
- [Instalación de SQL Server en Docker (Linux) - Microsoft Learn](https://learn.microsoft.com/es-es/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&tabs=cli&pivots=cs1-bash)

## Introducción General
SQL Server es un **motor de bases de datos relacionales** desarrollado por Microsoft con enfoque empresarial. Ofrece un ecosistema completo para almacenamiento, consulta, procesamiento analítico, integración de datos y capacidades híbridas en la nube mediante Azure.

## Características Principales
- **Motor relacional (RDBMS):** soporte para T-SQL, transacciones ACID, índices avanzados, vistas, triggers y procedimientos almacenados.
- **Escalabilidad empresarial:** particionado, replicación, distribución de cargas, Always On, clustering.
- **Integración con ecosistema Microsoft:** [csharp](/software%20engineering/csharp/), [ASP NET](/backend/asp-net/), Visual Studio, Azure Data Studio, Power BI.
- **Alta disponibilidad y recuperación ante desastres:** Always On Availability Groups, Log Shipping, Mirroring.
- **Seguridad robusta:** cifrado transparente (TDE), Always Encrypted, Row-Level Security, Dynamic Data Masking, autenticación integrada.
- **Analítica y Big Data:** integración con Hadoop, Spark, PolyBase y ejecución de R/Python dentro del motor.
- **Opciones de despliegue:** on-premise, contenedores [Docker](/software%20engineering/docker/), máquinas virtuales Azure, Azure SQL Managed Instance.

## Componentes y Servicios del Ecosistema SQL Server
- **Motor Relacional:** núcleo del sistema para almacenamiento, consultas y transacciones.
- **SQL Server Agent:** automatización de jobs, alertas y tareas programadas.
- **SSMS (SQL Server Management Studio):** herramienta principal de administración.
- **Azure Data Studio:** alternativa moderna multiplataforma.
- **Servicio Full-Text Search:** búsquedas semánticas y lingüísticas avanzadas.
- **PolyBase:** consultas distribuidas a sistemas externos (Hadoop, Azure Blob, otros RDBMS).

## Data Warehousing y BI
SQL Server incluye un conjunto de servicios orientados a integración, análisis y construcción de pipelines empresariales:

### SSIS – SQL Server Integration Services
- Integración de datos desde múltiples orígenes.
- ETL/ELT para sistemas analíticos.
- Automatización de cargas hacia Data Warehouses.

### SSAS – SQL Server Analysis Services
- Modelos multidimensionales y Tabulares.
- Procesamiento analítico (OLAP).
- Lenguajes MDX y DAX.
- Integración directa con Power BI.

### SSRS – SQL Server Reporting Services
- Informes interactivos y paginados.
- Exportación a PDF, Excel, Web.
- Integración con aplicaciones corporativas.

## SQL Server y la Nube (Azure)
- **Azure SQL Database:** versión PaaS totalmente administrada.
- **SQL Managed Instance:** compatibilidad casi total con instancias on-premise.
- **Azure Arc Enabled SQL:** operación híbrida en nube y on-premise.
- **Backup y migración:** Azure Backup, Azure Migrate, replicación a la nube.

## SQL Server en Contenedores (Docker)
- Ideal para entornos de desarrollo y CI/CD.
- Despliegue rápido, reproducible y ligero.
- Compatible con Linux y Windows.
- Permite levantar múltiples instancias aisladas para testing.

### Ejemplo de Comandos Docker (Bajo su Propio Heading)

#### Crear Contenedor SQL Server en Linux
{% raw %}
```bash
docker run -e "ACCEPT_EULA=Y" \
-e "SA_PASSWORD=YourPassword123!" \
-p 1433:1433 \
--name sqlserver \
-d mcr.microsoft.com/mssql/server:2022-latest
```
{% endraw %}`

#### Conectarse al Contenedor

{% raw %}
```bash
docker exec -it sqlserver /opt/mssql-tools/bin/sqlcmd \
-S localhost -U SA -P "YourPassword123!"
```
{% endraw %}

## Arquitectura Interna

- **Páginas y Extents:** almacenamiento interno de datos (8 KB).
- **Planificador y Scheduler:** modelo SQLOS.
- **Buffer Pool:** gestión inteligente de memoria.
- **Lock Manager:** control de concurrencia ANSI-SQL.
- **Query Optimizer:** optimizador basado en costes con estadísticas avanzadas.

## Seguridad y Gobierno de Datos

- **TDE:** cifrado en reposo.
- **Always Encrypted:** cifrado en cliente para datos sensibles.
- **Row-Level Security:** control de filas por usuario.
- **Dynamic Data Masking:** ocultación de datos para entornos de lectura.
- **Auditoría y trazabilidad:** SQL Audit, Extended Events.

## Administración y Mantenimiento

- **Backups automáticos y manuales:** FULL, DIFF, LOG.
- **Índices:** planificación, mantenimiento, reconstrucción y reorganización.
- **Estadísticas:** actualización para rendimiento óptimo.
- **Monitoring & Performance:** Extended Events, Profiler, DMVs.

## Integración con Desarrollo y Aplicaciones

- Conexión directa desde [csharp](/software%20engineering/csharp/) mediante ADO.NET, EF Core y Dapper.
- Integración con [ASP NET](/backend/asp-net/) para APIs REST, Auth y servicios empresariales.
- Pipelines de DevOps usando contenedores [Docker](/software%20engineering/docker/) y Azure DevOps.

