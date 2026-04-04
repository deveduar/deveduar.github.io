---
date: 2025-04-14 18:17
title: Gestión de Activos Digitales (DAM)
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: ciberseguridad
tags:
  - Hacking
  - hardening
---
# Gestión de Activos Digitales (DAM)

- [hardening](/ciberseguridad/hardening/)
- [¿Qué es la Gestión de Activos Digitales? - Términos y Definiciones de Ciberseguridad](https://www.vpnunlimited.com/es/help/cybersecurity/digital-asset-management?srsltid=AfmBOorweymdrqr85a3xrBlCzSrw7GMjxn5lv1e__pepR3cMWjaSVUUj) 
- [Organización de Archivo de Gestión - YouTube](https://youtu.be/9doxVZf_ccY?list=PLi1TR3k1TML4d76UbGkEMkvxAXqAx35wb) 

## Concepto General
La **Gestión de Activos Digitales (DAM)** se centra en identificar, clasificar, proteger, monitorizar y mantener el ciclo de vida completo de todos los activos digitales que forman parte de la organización. Incluye tanto activos técnicos como información crítica, metadatos, software y elementos asociados a la operación del negocio.

El DAM se relaciona directamente con [hardening](/ciberseguridad/hardening/) ya que sin una visión clara de los activos no es posible aplicar controles, reforzar configuraciones ni priorizar riesgos.

## Tipos de Activos Digitales
- **Activos de Información**
	- Documentos, bases de datos, informes, datasets, archivos multimedia.
	- Metadatos y taxonomías internas.
- **Activos Técnicos**
	- Servidores, endpoints, contenedores, VMs.
	- Repositorios de código, pipelines CI/CD.
- **Activos Lógicos**
	- Aplicaciones, librerías, APIs, microservicios.
	- Configuraciones, plantillas, orquestadores.
- **Activos de Identidad**
	- Cuentas, roles, tokens, secretos, credenciales.
- **Activos de Procesos**
	- Procedimientos, flujos de trabajo, automatizaciones, playbooks.

## Ciclo de Vida de los Activos Digitales
- **Inventario y Descubrimiento**
	- Descubrimiento automático de activos mediante agentes, escáneres o integraciones.
	- Clasificación por criticidad, valor, sensibilidad y dependencia.
- **Registro y Normalización**
	- Normalización de atributos (ownership, etiquetas, estado).
	- Definir taxonomías uniformes.
- **Protección y Control**
	- Aplicación de controles de seguridad según clasificación.
	- Asociación con políticas de [hardening](/ciberseguridad/hardening/) y compliance.
- **Monitorización Continua**
	- Alertas de cambio, modificaciones de configuración y eventos.
	- Atención al “asset drift”.
- **Retiro y Deprecación**
	- Eliminación segura de activos y preservación de evidencias.
	- Registro de obsolescencia y cierre de ciclo.

## Modelos de Organización de Activos
- **Modelo Centralizado**
	- Un repositorio único (CMDB madura).
	- Excelente para auditoría y normativas.
- **Modelo Federado**
	- Diversas fuentes sincronizadas.
	- Se integra en pipelines, repositorios y sistemas cloud.
- **Modelo Distribuido con Metacatálogo**
	- Un índice central pero sin mover los datos.
	- Común en ecosistemas multicloud y Zero-Trust.

## Requisitos para un DAM Efectivo
- **Propiedad clara (Ownership)**
	- Cada activo debe tener un responsable técnico y de negocio.
- **Clasificación precisa**
	- Sensibilidad, impacto, dependencias.
- **Estructura de carpetas y nomenclaturas coherentes**
	- Estandarización de nombres de archivo, versiones y repositorios.
- **Metadatos completos**
	- Tiempo, origen, relación con otros activos.
- **Gobernanza y políticas**
	- Retención, acceso, cifrado, versionado, auditoría.

## Herramientas y Sistemas DAM
- **DAM Empresarial**
	- Bynder, Canto, Adobe Experience Manager.
- **CMDBs / ITAM**
	- ServiceNow CMDB, GLPI, Lansweeper.
- **Gestión Documental**
	- SharePoint, Alfresco, Confluence, Nextcloud.
- **Gestión de Repositorios**
	- GitLab, GitHub Enterprise, Bitbucket.
- **Sistemas de Almacenamiento**
	- S3, Azure Blob, GCS con políticas de ciclo de vida.

## Integración del DAM con [hardening](/ciberseguridad/hardening/)
- **Aplicación automática de configuraciones seguras**
	- Endpoints, contenedores, software.
- **Políticas basadas en clasificación**
	- Cifrado obligatorio para activos sensibles.
- **Control de versiones y rollback seguro**
	- Evita corrupción, drift o configuraciones inseguras.
- **Visibilidad de vulnerabilidades asociadas a activos**
	- Mapear CVEs a versiones específicas.
- **Restricción de acceso según criticidad**
	- IAM granular + Zero-Trust.

## Nuevos Conceptos y Expansión de la Nota

### Gestión de Estados de los Activos
- **Estado Activo**
	- En uso y con protección completa.
- **Estado Latente**
	- No usado pero todavía accesible → riesgo.
- **Estado Huérfano**
	- Sin propietario asignado → alta prioridad de regularización.
- **Estado Sombra**
	- Activos no declarados creados por equipos (Shadow IT).

### Arquitectura de Carpetas y Organización Documental
- **Estructura funcional**
	- Basada en departamentos.
- **Estructura por procesos**
	- Basada en el flujo de vida.
- **Estructura híbrida**
	- Contenidos, proyectos y tiempo combinados.
- **Buenas prácticas**
	- Versionado (v1, v2, final…).
	- Etiquetado automático.
	- Metadatos obligatorios: autor, fecha, estado, confidencialidad.

### Control de Riesgos Basado en Activos
- Identificación del valor del activo vs. costo de protección.
- Evaluación de amenazas específicas por tipo de activo.
- Modelos de dependencia entre activos para identificar puntos únicos de fallo.

### Relación entre DAM y Compliance
- Mapeo directo con normativas:
	- ISO 27001 (Anexo A: inventario, clasificación, control de acceso).
	- NIST CSF (Identify → Asset Management).
	- ENS Categorías y niveles.
	- GDPR (registro de actividades de tratamiento).

### Procesos y Señales de Madurez DAM
- **Nivel 1 — Inventario Básico**
	- Listados manuales.
- **Nivel 2 — Inventario Estructurado**
	- Clasificación inicial, taxonomías.
- **Nivel 3 — Integración Parcial**
	- Con CI/CD, CMDB y almacenamiento.
- **Nivel 4 — Automatización**
	- Políticas automáticas por criticidad.
- **Nivel 5 — DAM Predictivo**
	- Identificación de obsolescencia, riesgos y dependencias por IA.


