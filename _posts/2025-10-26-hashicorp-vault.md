---
date: 2025-10-26 14:13
title: HashiCorp Vault
tags:
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
cssclasses:
public_note: "true"
category: vault
categories:
  - vault
  - ciberseguridad
  - sistemas
  - hide-embedded-header1
---
# HashiCorp Vault
`$= dv.current().file.tags.join(" ")`

- [Sistemas](/uncategorized/sistemas/)
- [ciberseguridad](/uncategorized/ciberseguridad/)
- [autenticacion](/uncategorized/autenticacion/)

## Documentación
- Vault  HashiCorp Developer

## Visión general
HashiCorp Vault es una plataforma centralizada para la **gestión segura de secretos**, enfocada en proteger credenciales, tokens, certificados y claves de cifrado a lo largo de todo su ciclo de vida. Está diseñada para integrarse con infraestructuras modernas (cloud, contenedores, CI/CD) y aplicar principios de **zero trust** y **mínimo privilegio**.

## Conceptos clave
- conceptos
	- gestion del ciclo de vida de autenticacion y encriptacion

## Gestión de secretos
- Almacenamiento cifrado de secretos usando cifrado fuerte (AES-256-GCM)
- Acceso controlado mediante políticas declarativas
- Versionado de secretos (KV v2)
- Rotación automática o manual de credenciales
- Auditoría completa de accesos y operaciones

## Autenticación
Vault separa **autenticación** (quién eres) de **autorización** (qué puedes hacer).

- Métodos de autenticación integrados
	- Token
	- AppRole
	- Kubernetes
	- [LDAP](/autenticacion/ldap/) / Active Directory
	- GitHub
	- Cloud (AWS IAM, Azure AD, GCP IAM)
- Autenticación dinámica y efímera
- Tokens con TTL y renovación controlada
- Revocación inmediata de accesos comprometidos

## Autorización y políticas
- Políticas escritas en HCL o JSON
- Control de acceso basado en paths
- Permisos granulares: read, list, create, update, delete, sudo
- Separación de responsabilidades por entorno (dev, staging, prod)

## Cifrado como servicio
Vault no solo guarda secretos, también **cifra datos sin almacenarlos**.

- Transit Secrets Engine
	- Cifrado y descifrado bajo demanda
	- Firmado y verificación de datos
	- Rotación de claves sin re-cifrar datos históricos
- Ideal para:
	- Protección de datos sensibles en aplicaciones
	- Cumplimiento normativo
	- Externalizar la gestión criptográfica

## Motores de secretos (Secrets Engines)
- Estáticos
	- Key/Value (KV)
	- Certificados
- Dinámicos
	- Bases de datos (PostgreSQL, MySQL, MSSQL)
	- Cloud (AWS, Azure, GCP)
	- PKI
- Credenciales dinámicas con:
	- TTL definido
	- Creación bajo demanda
	- Revocación automática

## Auditoría y compliance
- Registro detallado de:
	- Quién accede
	- Qué secreto
	- Cuándo y desde dónde
- Backends de auditoría:
	- File
	- Syslog
	- Socket
- Soporte para requisitos de cumplimiento (ISO 27001, SOC2, PCI-DSS)

## Alta disponibilidad y sellado
- Arquitectura HA con backends de almacenamiento:
	- Consul
	- Raft integrado
	- Cloud storage
- Sellado (seal/unseal)
	- Vault inicia sellado por defecto
	- Unseal manual o automático
	- Auto-unseal con HSM o KMS (AWS KMS, Azure Key Vault, GCP KMS)

## Integración con sistemas
- Integración nativa con:
	- Kubernetes
	- Terraform
	- CI/CD (GitHub Actions, GitLab CI, Jenkins)
- Uso como backend de secretos para aplicaciones
- Eliminación de secretos hardcodeados en código y pipelines

## Casos de uso comunes
- Gestión centralizada de secretos de aplicaciones
- Rotación automática de credenciales de base de datos
- Autenticación segura de workloads en Kubernetes
- Cifrado de datos sensibles sin exponer claves
- Control de accesos temporales para operadores y servicios

## Relación con otros componentes HashiCorp
- [Terraform](/devops/terraform/)
	- Vault como proveedor de secretos
	- Generación dinámica de credenciales durante despliegues
- Consul
	- Service mesh con mTLS gestionado por Vault
- Nomad
	- Inyección segura de secretos en jobs

## Buenas prácticas
- Usar secretos dinámicos siempre que sea posible
- Definir TTL cortos para tokens y credenciales
- Aplicar políticas de mínimo privilegio
- Activar auditoría desde el inicio
- Separar instancias o namespaces por entorno
- Automatizar unseal con KMS en producción

# HashiCorp Vault — Conceptos Avanzados y Temas Complementarios

## Arquitectura interna
- Core
	- Motor central que gestiona cifrado, políticas y routing
	- Stateless respecto a secretos (dependencia total del storage backend)
- Storage Backend
	- Persistencia cifrada de datos
	- Impacta en HA, rendimiento y recuperación
- Barrier
	- Capa criptográfica que protege todos los datos en reposo
	- Usa la master key derivada tras el unseal
- Logical Backends
	- Implementación interna de auth methods y secrets engines

## Namespaces (Vault Enterprise)
- Aislamiento lógico fuerte dentro de una misma instancia
- Jerarquía padre/hijo
- Casos de uso
	- Multi-tenant
	- Grandes organizaciones
	- Separación por unidades de negocio
- Diferencia frente a políticas
	- Los namespaces aíslan paths, auth y secrets engines completos

## Control de identidad (Identity Secrets Engine)
- Entidades (Entities)
	- Representan identidades reales (usuarios, servicios)
- Aliases
	- Mapeo entre métodos de autenticación y entidades
- Grupos
	- Lógicos y externos
	- Integración con LDAP / OIDC
- Beneficios
	- Unificación de identidades entre múltiples auth methods
	- Auditoría coherente de accesos

## Tokens en profundidad
- Tipos de tokens
	- Service tokens
	- Batch tokens
	- Periodic tokens
- Propiedades clave
	- TTL
	- Period
	- Renewable / Non-renewable
- Token wrapping
	- Entrega segura de secretos sensibles
	- Uso común en bootstrap de sistemas
- Token accessor
	- Identificador no sensible para gestión y revocación

## Seguridad operativa
- Protección del root token
	- Uso exclusivo para bootstrap
	- Revocación tras configuración inicial
- Break-glass procedures
	- Accesos de emergencia controlados
- Hardening
	- TLS obligatorio
	- Restricción de listeners
	- Network segmentation
- Rate limiting
	- Protección contra abuso y ataques de fuerza bruta

## Gestión de claves criptográficas
- Master Key
	- Nunca se almacena en texto plano
	- Fragmentada mediante Shamir Secret Sharing
- Rekey
	- Rotación de claves de unseal
	- No requiere downtime
- Key rotation
	- Separada entre:
		- Barrier keys
		- Transit keys
		- Engine-specific keys

## Observabilidad y operación
- Métricas
	- Exposición vía Prometheus
	- Métricas de rendimiento, errores y latencia
- Logging
	- Separación entre logs operativos y auditoría
- Health checks
	- Endpoints específicos para HA y readiness
- Performance tuning
	- Cacheo interno
	- Ajuste de TTLs
	- Optimización del storage backend

## Vault en entornos Kubernetes
- Vault Agent
	- Autenticación automática
	- Renovación de tokens
	- Renderizado de secretos en templates
- Sidecar pattern
	- Inyección de secretos sin modificar la aplicación
- CSI Driver
	- Montaje de secretos como volúmenes
- Seguridad
	- ServiceAccount binding
	- Namespaces de Kubernetes vs namespaces de Vault

## Vault Agent
- Funciones principales
	- Auto-auth
	- Token renewal
	- Template rendering
	- Cache local
- Modos de ejecución
	- Daemon
	- Sidecar
	- Init container
- Reducción de exposición de tokens en aplicaciones

## Backup y disaster recovery
- Snapshots
	- Raft snapshots
- Replicación (Enterprise)
	- Performance Replication
	- Disaster Recovery Replication
- Restore
	- Procedimientos controlados
	- Validación post-restauración

## Threat model y riesgos comunes
- Compromiso del host
- Exposición de tokens de larga duración
- Políticas demasiado permisivas
- Falta de auditoría activa
- Dependencia excesiva del root token

## Límites y consideraciones
- Vault no es:
	- Un gestor de configuración
	- Un reemplazo de IAM cloud
- Trade-offs
	- Complejidad operativa
	- Curva de aprendizaje
	- Coste en entornos Enterprise

## Evolución y tendencias
- Adopción de zero trust
- Integración profunda con plataformas cloud-native
- Uso creciente como crypto service
- Centralización de identidad máquina-a-máquina
- Automatización completa del ciclo de vida de secretos

# HashiCorp Vault — Glosario de Conceptos

## Conceptos generales
- Vault
	- Plataforma de gestión segura de secretos y cifrado
- Secret
	- Información sensible como credenciales, tokens o claves
- Zero Trust
	- Modelo de seguridad donde nada es confiable por defecto
- Principio de mínimo privilegio
	- Concesión estricta de los permisos necesarios

## Autenticación
- Auth Method
	- Mecanismo para verificar identidades en Vault
- Token
	- Credencial emitida por Vault tras autenticación
- AppRole
	- Método de autenticación orientado a aplicaciones y servicios
- Identity
	- Sistema interno que correlaciona identidades entre auth methods
- Entity
	- Representación lógica de una identidad real
- Alias
	- Vínculo entre un auth method y una entity

## Autorización
- Policy
	- Documento que define permisos sobre paths
- Capability
	- Acción permitida sobre un recurso (read, list, create, etc.)
- Path-based access control
	- Control de acceso basado en rutas de Vault
- Deny by default
	- Todo acceso es denegado salvo que una policy lo permita

## Tokens
- Service Token
	- Token estándar con TTL y renovación
- Batch Token
	- Token no persistente y no renovable
- Periodic Token
	- Token sin TTL fijo que requiere renovación periódica
- Token TTL
	- Tiempo de vida de un token
- Token Wrapping
	- Entrega segura de secretos en una única lectura
- Token Accessor
	- Identificador no sensible para gestión y revocación

## Motores de secretos
- Secrets Engine
	- Componente que gestiona un tipo específico de secreto
- KV Engine
	- Almacenamiento clave-valor de secretos
- KV v2
	- Versión con versionado y soft delete
- Dynamic Secrets
	- Credenciales creadas bajo demanda
- Static Secrets
	- Secretos persistentes definidos manualmente

## Cifrado
- Transit Engine
	- Cifrado como servicio sin almacenar datos
- Encryption as a Service
	- Uso de Vault como proveedor criptográfico
- Data Key
	- Clave usada para cifrar datos específicos
- Key Rotation
	- Cambio periódico de claves criptográficas
- Signing
	- Firma digital de datos
- Verification
	- Validación de firmas digitales

## Arquitectura interna
- Core
	- Motor central de Vault
- Barrier
	- Capa criptográfica que protege los datos en reposo
- Storage Backend
	- Sistema de persistencia cifrada
- Raft
	- Backend de almacenamiento integrado y distribuido
- Logical Backend
	- Implementación interna de auth methods y engines

## Sellado y arranque
- Seal
	- Estado inicial bloqueado de Vault
- Unseal
	- Proceso para habilitar el acceso a los datos
- Unseal Key
	- Fragmento de clave para desbloquear Vault
- Shamir Secret Sharing
	- Esquema de fragmentación de claves
- Auto-unseal
	- Desbloqueo automático usando KMS o HSM

## Auditoría y observabilidad
- Audit Device
	- Backend de auditoría de Vault
- Audit Log
	- Registro detallado de operaciones
- Immutable logs
	- Registros que no pueden ser modificados
- Metrics
	- Datos de rendimiento y uso
- Health Check
	- Endpoint para verificar estado de Vault

## Alta disponibilidad y escalabilidad
- HA
	- Modo de alta disponibilidad
- Active Node
	- Nodo líder que procesa peticiones
- Standby Node
	- Nodo en espera listo para failover
- Leader Election
	- Proceso de elección del nodo activo

## Kubernetes y automatización
- Vault Agent
	- Proceso auxiliar para autenticación y renovación
- Auto-auth
	- Autenticación automática de workloads
- Sidecar
	- Contenedor adicional para inyección de secretos
- CSI Driver
	- Montaje de secretos como volúmenes
- Template Rendering
	- Generación dinámica de archivos con secretos

## Operación y seguridad
- Root Token
	- Token con privilegios totales
- Break-glass
	- Acceso de emergencia controlado
- Hardening
	- Refuerzo de seguridad de la configuración
- Rate Limiting
	- Limitación de peticiones para protección
- Revocation
	- Invalidación inmediata de accesos

## Enterprise
- Namespaces
	- Aislamiento lógico jerárquico
- Performance Replication
	- Replicación optimizada para lectura
- DR Replication
	- Replicación para recuperación ante desastres
- Multi-tenancy
	- Soporte para múltiples organizaciones

# Recursos actualizados sobre HashiCorp Vault (2025)

## Documentación oficial
- **Vault Tutorials & Docs**  
	Acceso a tutoriales y guías paso a paso sobre gestión de secretos, engines, autenticación y casos de uso concretos. Incluye rutas para principiantes y avanzados.  
	- Página principal de Vault en HashiCorp Developer  
		- [HashiCorp Vault – Developer Docs](https://developer.hashicorp.com/vault)
	- Tutoriales interactivos (KV, credenciales dinámicas, SSH, Terraform, Kubernetes)  
		- [Vault Secrets Management Tutorials](https://developer.hashicorp.com/vault/tutorials/secrets-management)
- **HashiCorp Blog — Sección Vault**  
	Artículos oficiales con noticias, mejores prácticas, anuncios de versiones y estrategias de seguridad.  
	- [HashiCorp Blog – Vault](https://www.hashicorp.com/blog/products/vault)

## Noticias y actualizaciones de 2025
- **HashiConf 2025 – Novedades de Vault**  
	Resumen de funcionalidades presentadas en HashiConf 2025.  
	- Vault Enterprise 1.21  
	- Identidades basadas en SPIFFE  
	- Vault Secrets Operator (VSO) sin persistencia de secretos en Kubernetes  
	- Mejoras en rotación de credenciales cloud y reporting  
	- [HashiConf 2025 – Vault Announcements](https://www.hashicorp.com/blog/strengthen-security-with-vault-boundary-and-radar-features-at-hashiconf-2025)

## Recursos formativos
- **Workshops y eventos formativos**  
	Talleres prácticos oficiales de HashiCorp, incluyendo sesiones en español.  
	- [HashiCorp Events & Workshops](https://events.hashicorp.com/)
- **Cursos y videos externos recomendados**  
	- Tutorial introductorio en YouTube  
		- [HashiCorp Vault Tutorial for Beginners](https://www.youtube.com/results?search_query=hashicorp+vault+tutorial)
	- Guías prácticas y enfoque Platform Engineering  
		- [Platform Engineering Playbook – Vault](https://platformengineeringplaybook.com/technical/vault)

## Estado de servicios y productos relacionados
- **Retiro de HCP Vault Secrets**  
	HashiCorp descontinuó *HCP Vault Secrets* (Vault como SaaS) el **30 de junio de 2025**.  
	- Análisis y contexto del cierre  
		- [HCP Vault Secrets Shutdown](https://infisical.com/blog/hashicorp-vault-secrets-shutdown)

## Seguridad y vulnerabilidades recientes
- **Boletines de seguridad 2025**  
	Advisories oficiales con vulnerabilidades corregidas en Vault Community y Enterprise.  
	- Elevación de privilegios  
	- Fallos en métodos de autenticación  
	- Recomendación de upgrade inmediato  
	- [HashiCorp Security Advisories – Vault](https://support.hashicorp.com/hc/en-us/sections/360004671911-Security-Advisories)

## Integraciones y casos de uso del mundo real
- **Integración con UiPath Orchestrator (2025)**  
	Uso de Vault como backend de credenciales para RPA.  
	- [UiPath + HashiCorp Vault Integration](https://docs.uipath.com/orchestrator/standalone/2025.10/user-guide/storing-assets-in-hashicorp-vault-read-only)
- **Vault en Azure**  
	Integración de Vault con servicios de Azure e identidades cloud.  
	- [HashiCorp Vault on Azure – Microsoft Learn](https://learn.microsoft.com/shows/azure-friday/hashicorp-vault-on-azure)

## Repositorios y herramientas de la comunidad
- **Herramientas para sincronización y backup de secretos**  
	Proyectos comunitarios para migración, backup y sincronización entre instancias Vault.  
	- [Medusa – Vault Backup Tool](https://github.com/jonasvinther/medusa)
	- Discusiones y herramientas alternativas  
		- [r/hashicorp – Vault tools](https://www.reddit.com/r/hashicorp/)

## Insights comunitarios y estudios prácticos
- **Casos prácticos y enfoques reales**  
	Experiencias de producción con Vault, Kubernetes, ArgoCD y CI/CD.  
	- [Vault in Production – Community Discussions](https://www.reddit.com/r/hashicorp/search/?q=vault%20production&restrict_sr=1)
- **Discusión sobre arquitectura y operativa real**  
	Análisis de patrones, errores comunes y soluciones operativas.  
	- [Vault Architecture & Operations – Community](https://www.reddit.com/r/hashicorp/search/?q=vault%20architecture&restrict_sr=1)
