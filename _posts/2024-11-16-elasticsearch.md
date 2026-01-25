---
date: 2024-11-16 17:21
title: Elasticsearch
tags:
  - db
  - elasticsearh
  - backend
  - devops
  - ELK
keywords:
  - ELK
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
cssclasses:
  - hide-embedded-header1
  - wide
categories:
  - monitoreo
public_note: "true"
category: monitoreo
---
# Elasticsearch
`$= dv.current().file.tags.join(" ")`

- [Databases](/uncategorized/databases/) 
- [ciberseguridad](/uncategorized/ciberseguridad/)
- [Data Science](/uncategorized/data-science/)
- [kibana](/monitoreo/kibana/)
- [logstash](/uncategorized/logstash/)

## Introducción a Elasticsearch

Elasticsearch es un motor de búsqueda y análisis distribuido de código abierto, construido sobre Apache Lucene. Diseñado para manejar grandes volúmenes de datos en tiempo real, permite realizar búsquedas rápidas y potentes análisis sobre información estructurada y no estructurada.

### Características Principales

- **Arquitectura distribuida**: Escala horizontalmente añadiendo más nodos al cluster
- **Alta disponibilidad**: Réplicas automáticas para garantizar continuidad del servicio
- **Búsqueda en tiempo real**: Resultados inmediatos tras la indexación
- **RESTful API**: Interfaz HTTP simple y universal para todas las operaciones
- **Schema-less**: Flexibilidad para indexar documentos JSON sin esquema predefinido
- **Potente análisis de texto**: Capacidades avanzadas de búsqueda full-text con Lucene

### Casos de Uso Típicos

- **Búsqueda empresarial**: Motores de búsqueda para aplicaciones y sitios web
- **Análisis de logs**: Agregación y análisis de logs de sistemas y aplicaciones
- **Security Information and Event Management (SIEM)**: Detección de amenazas y análisis de seguridad
- **Business Intelligence**: Análisis de datos empresariales y métricas
- **Application Performance Monitoring (APM)**: Monitorización del rendimiento de aplicaciones

### Componentes del Ecosistema Elastic

- **Elasticsearch**: Motor central de búsqueda y análisis
- **[kibana](/monitoreo/kibana/)**: Interfaz de visualización y dashboards
- **Logstash**: Procesamiento de pipelines de datos
- **Beats**: Agentes ligeros para envío de datos
- **APM**: Monitorización del rendimiento de aplicaciones

Esta combinación de herramientas forma el conocido **ELK Stack**, proporcionando una solución completa para ingesta, procesamiento, almacenamiento, búsqueda y visualización de datos.
## Conceptos Fundamentales
- **Métricas, anomalías en red**: Capacidades avanzadas de monitorización y detección de patrones
- **Framework open source**: Plataforma de código abierto para búsqueda y análisis
- **Motor de búsqueda distribuido**: Búsqueda, login, monitoring en arquitectura distribuida
- **Estructura de datos**: Documentos, índices, nodos como componentes base
- **Operaciones escalables**: Manejo de N documentos, queries, costos, servicios
- **Optimización**: Tests de performance y tiempo, configuración de shards
- **Indexación**: Proceso de indexar documentos en el sistema
- **Arquitectura**: Shards, clusters-nodo, estrategias de backups
- **Formato JSON**: Almacenamiento nativo en formato JSON flexible

### Documentación Oficial
- [Quick start guide | Elasticsearch Guide 8.14  | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html)
- [What is Elasticsearch? | Elasticsearch Guide 8.15 | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro-what-is-es.html)
- [Start the Elastic Stack with security enabled automatically | Elasticsearch Guide 8.16 | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/configuring-stack-security.html)

### Videos Tutoriales
- [Nodos, shards y réplicas en Elastic Search - YouTube](https://youtu.be/Gj9B-Ee5cxc)
- [Cómo indexar o insertar documentos en ElasticSearch (método POST - PUT) - YouTube](https://youtu.be/yjZbx-nZ_ls?list=PLlNuLwK_vaGND4FMd7E55kM8JG7JpCgA0)

## ELK Stack

### Documentación y Guías
- integraciones
- [¿Qué es ELK? ElasticSearch, Logstash y Kibana | OpenWebinars](https://openwebinars.net/blog/que-es-elk-elasticsearch-logstash-y-kibana/)
- [Modern Log Management | The Right Way with ELK Stack](https://insights.encora.com/insights/modern-log-management-the-right-way-with-elk-stack)
- [The Complete Guide to the ELK Stack | Logz.io](https://logz.io/learn/complete-guide-elk-stack/)
- [GitHub - elastic/elasticsearch: Free and Open Source, Distributed, RESTful Search Engine](https://github.com/elastic/elasticsearch)
- [elastic · GitHub](https://github.com/elastic)

### Casos de Uso
- **Logs centralizados**: Agregación unificada de registros
- **Almacenamiento escalable**: Gestión de grandes volúmenes de datos
- **Búsqueda avanzada**: Capacidades de consulta y filtrado
- **Métricas y análisis**: Monitorización de rendimiento y KPIs

### Beats
- [What are Beats? | Beats Platform Reference 8.16 Elastic](https://www.elastic.co/guide/en/beats/libbeat/current/beats-reference.html)

## Implementación en Docker

### Recursos Docker
- [Docker](/software%20engineering/docker/)
- [GitHub - deviantony/docker-elk: The Elastic stack (ELK) powered by Docker and Compose.](https://github.com/deviantony/docker-elk?tab=readme-ov-file)
- [Getting started with the Elastic Stack and Docker-Compose | Elastic Blog](https://www.elastic.co/blog/getting-started-with-the-elastic-stack-and-docker-compose)
- [hub.docker.com/\_/elasticsearch](https://hub.docker.com/_/elasticsearch)
- [hub.docker.com/r/bitnami/elasticsearch](https://hub.docker.com/r/bitnami/elasticsearch)

### Kibana en Docker
- [kibana](/monitoreo/kibana/)
- **Funcionalidades**: Dashboards, métricas, visualización
- [Install Kibana with Docker | Kibana Guide  8.16  | Elastic](https://www.elastic.co/guide/en/kibana/current/docker.html)

## Extensiones y Plugins

### X-Pack
- xpack
- **Plugin oficial**: Extensión de funcionalidades core
- **Características**: Alertas, monitoreo, informes, aprendizaje automático
- [Download X-Pack: Extend Elasticsearch and Kibana | Elastic](https://www.elastic.co/es/downloads/x-pack)
- [Set up X-Pack | Elasticsearch Guide 7.17 | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/setup-xpack.html)

### Logstash
- [logstash](/uncategorized/logstash/)
- **Pipeline de datos**: Procesamiento y transformación
- [Logstash Introduction | Logstash Reference  8.16  | Elastic](https://www.elastic.co/guide/en/logstash/current/introduction.html)

# Fundamentos de Elasticsearch - Teoría y Ejemplo Práctico

## Conceptos Básicos Fundamentales

### Arquitectura Core
- **Documento**: Unidad básica de información (JSON)
- **Índice**: Colección de documentos relacionados
- **Type** (deprecado): Antigua división dentro de índices
- **Mapping**: Esquema que define los campos y tipos de datos
- **Shard**: Partición horizontal de un índice
- **Réplica**: Copia de un shard para redundancia
- **Cluster**: Conjunto de nodos conectados
- **Node**: Instancia individual de Elasticsearch

### Operaciones CRUD
- **Index**: Crear o actualizar documento
- **Get**: Recuperar documento por ID
- **Search**: Buscar documentos mediante queries
- **Update**: Actualizar documento parcialmente
- **Delete**: Eliminar documento

## Ejemplo Práctico: Sistema de Gestión de Libros

### 1. Crear Índice con Mapping
```json
PUT /biblioteca
{
  "mappings": {
    "properties": {
      "titulo": { "type": "text" },
      "autor": { "type": "text" },
      "año_publicacion": { "type": "integer" },
      "genero": { "type": "keyword" },
      "precio": { "type": "float" },
      "disponible": { "type": "boolean" },
      "fecha_ingreso": { "type": "date" },
      "ubicacion": { "type": "geo_point" }
    }
  }
}
```

### 2. Indexar Documentos
```json
POST /biblioteca/_doc/1
{
  "titulo": "Cien años de soledad",
  "autor": "Gabriel García Márquez",
  "año_publicacion": 1967,
  "genero": "Realismo mágico",
  "precio": 25.50,
  "disponible": true,
  "fecha_ingreso": "2024-01-15",
  "ubicacion": {
    "lat": 40.4168,
    "lon": -3.7038
  }
}

POST /biblioteca/_doc/2
{
  "titulo": "1984",
  "autor": "George Orwell",
  "año_publicacion": 1949,
  "genero": "Distopía",
  "precio": 18.75,
  "disponible": false,
  "fecha_ingreso": "2024-02-01",
  "ubicacion": {
    "lat": 51.5074,
    "lon": -0.1278
  }
}
```

### 3. Búsquedas Básicas
```json
// Búsqueda por término exacto
GET /biblioteca/_search
{
  "query": {
    "term": {
      "genero": "Distopía"
    }
  }
}

// Búsqueda por texto completo
GET /biblioteca/_search
{
  "query": {
    "match": {
      "titulo": "años soledad"
    }
  }
}

// Búsqueda por rango
GET /biblioteca/_search
{
  "query": {
    "range": {
      "año_publicacion": {
        "gte": 1950,
        "lte": 2000
      }
    }
  }
}
```

### 4. Búsqueda Avanzada con Filtros
```json
GET /biblioteca/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "autor": "Gabriel"
          }
        }
      ],
      "filter": [
        {
          "range": {
            "precio": {
              "lte": 30.0
            }
          }
        },
        {
          "term": {
            "disponible": true
          }
        }
      ]
    }
  },
  "sort": [
    {
      "año_publicacion": {
        "order": "desc"
      }
    }
  ]
}
```

### 5. Aggregations para Análisis
```json
GET /biblioteca/_search
{
  "size": 0,
  "aggs": {
    "libros_por_genero": {
      "terms": {
        "field": "genero"
      }
    },
    "precio_promedio": {
      "avg": {
        "field": "precio"
      }
    },
    "publicacion_por_decada": {
      "histogram": {
        "field": "año_publicacion",
        "interval": 10
      }
    }
  }
}
```

### 6. Actualización y Eliminación
```json
// Actualizar precio
POST /biblioteca/_update/1
{
  "doc": {
    "precio": 22.99
  }
}

// Eliminar documento
DELETE /biblioteca/_doc/2
```

## Flujo de Trabajo Completo

### 1. Diseño del Mapping
- Definir tipos de datos apropiados
- Configurar análisis de texto
- Establecer campos keyword para agregaciones
- Considerar necesidades de búsqueda

### 2. Indexación de Datos
- Usar Bulk API para carga masiva
- Implementar error handling
- Validar documentos antes de indexar

### 3. Búsqueda y Consultas
- Combinar diferentes tipos de queries
- Usar filtros para mejorar performance
- Implementar paginación con `from` y `size`

### 4. Monitoreo y Mantenimiento
```json
// Verificar health del cluster
GET /_cluster/health

// Obtener estadísticas del índice
GET /biblioteca/_stats

// Revisar mapping actual
GET /biblioteca/_mapping
```

## Casos de Uso Comunes

### E-commerce
- Catálogo de productos
- Búsqueda facetada
- Recomendaciones
- Análisis de ventas

### Logging y Monitoring
- Centralización de logs
- Análisis de errores
- Métricas de performance
- Alertas automáticas

### Content Management
- Búsqueda de contenido
- Filtrado por categorías
- Búsqueda geoespacial
- Análisis de engagement

## Mejores Prácticas

### Performance
- Usar filtros en lugar de queries cuando sea posible
- Limitar el número de shards por nodo
- Monitorear uso de memoria y CPU
- Implementar circuit breakers

### Escalabilidad
- Diseñar índices por periodo de tiempo
- Planear estrategia de sharding
- Configurar réplicas apropiadas
- Implementar ILM (Index Lifecycle Management)
# Elasticsearch - Expansión de Conceptos
`$= dv.current().file.tags.join(" ")`

## Arquitectura Avanzada

### Tipos de Nodos
- **Master nodes**: Gestión del cluster y operaciones administrativas
- **Data nodes**: Almacenamiento y procesamiento de datos
- **Coordinating nodes**: Enrutamiento de peticiones de clientes
- **Ingest nodes**: Transformación de datos antes de la indexación
- **Machine Learning nodes**: Procesamiento de algoritmos de ML

### Estrategias de Sharding
- **Routing personalizado**: Control sobre la distribución de documentos
- **Shard sizing**: Optimización del tamaño de shards para performance
- **Force merge**: Optimización de segmentos para mejorar rendimiento
- **Shard allocation**: Políticas de distribución automática

## Consultas y Búsquedas Avanzadas

### Tipos de Queries
- **Full-text search**: Búsqueda por relevancia usando análisis de texto
- **Term-level queries**: Búsqueda exacta en campos no analizados
- **Compound queries**: Combinación de múltiples queries (bool, boosting)
- **Joining queries**: Relaciones entre documentos (nested, has_child)
- **Geo queries**: Búsquedas geoespaciales y por distancia

### Aggregations
- **Métricas**: Cálculos estadísticos (avg, sum, min, max, stats)
- **Bucketing**: Agrupación de documentos (terms, date_histogram, range)
- **Pipeline**: Aggregations sobre resultados de otras aggregations
- **Matrix**: Cálculos sobre múltiples campos (matrix_stats)

## Seguridad y Autenticación

### Security Features
- **Role-based access control (RBAC)**: Permisos granulares por índice
- **Field-level security**: Restricción a campos específicos
- **Document-level security**: Filtrado de documentos por usuario
- **Encryption**: TLS/SSL para datos en tránsito y en reposo
- **Audit logging**: Registro de actividades de seguridad

### Autenticación
- **Native realm**: Usuarios nativos de Elasticsearch
- **LDAP/Active Directory**: Integración con directorios empresariales
- **PKI authentication**: Certificados de cliente
- **SAML/OAuth**: Autenticación federada

## Performance y Optimización

### Tuning de Rendimiento
- **JVM heap sizing**: Optimización de memoria Java
- **Indexing performance**: Bulk API y optimización de escritura
- **Search performance**: Caching de queries y filtros
- **Disk I/O optimization**: Configuración de sistemas de archivos
- **Circuit breakers**: Prevención de OutOfMemory errors

### Monitoring y Metrics
- **Cluster health**: Estado general del cluster
- **Index stats**: Métricas por índice (tamaño, documentos, operaciones)
- **Node stats**: Recursos por nodo (CPU, memoria, disco)
- **Search performance**: Latencia y throughput de búsquedas
- **Indexing performance**: Velocidad de indexación

## Casos de Uso Específicos

### Logging y APM
- **Application Performance Monitoring**: Trazado de transacciones
- **Distributed tracing**: Seguimiento de requests entre servicios
- **Error tracking**: Agregación y análisis de errores
- **User experience monitoring**: Métricas de rendimiento frontend

### Enterprise Search
- **Workplace Search**: Búsqueda unificada empresarial
- **Site Search**: Motor de búsqueda para sitios web
- **App Search**: Búsqueda para aplicaciones
- **Search UI libraries**: Componentes React y otras tecnologías

### Security Analytics
- **SIEM integration**: Análisis de eventos de seguridad
- **Threat detection**: Reglas de detección de amenazas
- **Network flow analysis**: Análisis de tráfico de red
- **Endpoint security**: Datos de seguridad de endpoints

## Herramientas y Utilidades

### APIs Especializadas
- **Snapshot and Restore**: Backup y recuperación de clusters
- **Index Lifecycle Management**: Automatización de gestión de índices
- **Cross-cluster search**: Búsquedas entre múltiples clusters
- **SQL interface**: Consultas usando sintaxis SQL
- **Async search**: Búsquedas asíncronas para queries largas

### Clients y SDKs
- **Java High Level REST Client**: Cliente oficial para Java
- **Python Elasticsearch Client**: Integración con ecosistema Python
- **JavaScript/Node.js Client**: Desarrollo de aplicaciones web
- **Go Client**: Integración con servicios en Go
- **.NET Client**: Desarrollo en ecosistema Microsoft

## Operaciones en Producción

### Deployment Strategies
- **Blue-green deployment**: Actualizaciones sin downtime
- **Rolling upgrades**: Actualizaciones progresivas
- **Cluster migration**: Migración entre versiones o infraestructuras
- **Disaster recovery**: Planes de recuperación ante desastres

### Troubleshooting
- **Hot threads analysis**: Identificación de cuellos de botella
- **Slow log analysis**: Diagnóstico de queries lentas
- **Cluster troubleshooting**: Resolución de problemas de cluster
- **Memory issues**: Diagnóstico y solución de problemas de memoria

## Recursos Adicionales

### Certificaciones y Training
- **Elastic Certified Engineer**: Certificación oficial
- **Official training courses**: Cursos de Elastic
- **Community workshops**: Eventos y meetups
- **Online learning platforms**: Cursos en plataformas externas

### Comunidad y Soporte
- **Elastic Discuss Forums**: Comunidad oficial
- **Stack Overflow**: Soporte técnico comunitario
- **GitHub Issues**: Reporte de bugs y contribuciones
- **Elastic Support**: Soporte empresarial oficial
