---
date: 2025-04-14 03:12
title: Combodo itop
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: "true"
category: infraestructura IT
tags:
  - ITIL
  - monitoreo
---
# Combodo iTop
`$= dv.current().file.tags.join(" ")`

## Descripción general
- **iTop (IT Operational Portal)** es una herramienta web de **IT Service Management (ITSM)** y **IT Operations Management (ITOM)** orientada a la gestión integral de [infraestructura IT](/uncategorized/infraestructura-it/).
- Proporciona un **CMDB extensible**, gestión de servicios y soporte IT alineado con **ITIL**.
- Está diseñada para ser **modular**, **personalizable** y **orientada a procesos**, adecuada tanto para equipos pequeños como para entornos corporativos complejos.

## Características principales
- **CMDB (Configuration Management Database)**
	- Modelado de CIs: servidores, redes, aplicaciones, servicios, contratos, usuarios.
	- Relaciones entre CIs (dependencias, impactos, jerarquías).
	- Versionado lógico y control de cambios.
- **Service Management Tool**
	- Gestión de Incidentes, Problemas y Cambios.
	- Catálogo de servicios.
	- Gestión de SLAs, OLAs y contratos.
- **Automatización y flujos**
	- Workflows configurables por tipo de objeto.
	- Estados, transiciones y reglas de negocio.
	- Automatización basada en triggers.
- **Gestión de usuarios y roles**
	- Control de acceso basado en roles (RBAC).
	- Perfiles diferenciados: agentes, usuarios finales, administradores.
- **Extensibilidad**
	- Plugins oficiales y de terceros.
	- Personalización mediante datamodels XML.
	- Integración con sistemas externos (LDAP, correo, APIs).
- **Reporting**
	- Dashboards configurables.
	- Consultas OQL (Object Query Language).
	- Exportación de datos.

## Casos de uso habituales
- Inventario centralizado de activos IT.
- Soporte técnico y mesa de ayuda.
- Gestión de cambios en infraestructuras críticas.
- Control de dependencias e impacto ante incidencias.
- Auditoría y cumplimiento (ITIL / ISO 20000).
- Base de datos de activos para SOC, NOC y equipos de seguridad.

## Arquitectura y componentes
- Aplicación web PHP.
- Base de datos MySQL / MariaDB.
- Servidor web (Apache / Nginx).
- Compatible con despliegues:
	- On-premise.
	- Contenedores Docker.
	- Entornos virtualizados.

## Repositorios y recursos oficiales
- Código fuente principal: [GitHub - Combodo/iTop: A simple, web based IT Service Management tool](https://github.com/Combodo/iTop)
- Imagen Docker comunitaria: [GitHub - vbkunin/itop-docker: Combodo iTop docker image](https://github.com/vbkunin/itop-docker)
- Documentación oficial: What is iTop iTop Documentation-pageid=start

## Instalación
- Método recomendado para laboratorio y pruebas: **Docker**
- Método recomendado para producción: instalación manual controlada o contenedores gestionados.

### Instalación en [Docker](/software%20engineering/docker/)
- Pendiente de completar:
	- [ ] instalar en docker
- Documentación oficial de instalación y upgrade:
	- [Install and Upgrade your iTop [iTop Documentation]](https://www.itophub.io/wiki/page?id=3_2_0:install:start)

## Integraciones comunes
- Directorios corporativos (LDAP / AD).
- Correo electrónico para creación automática de tickets.
- Herramientas de monitorización.
- Plataformas de automatización y orquestación.
- Sistemas de seguridad y auditoría.

## Ventajas y limitaciones
- **Ventajas**
	- Open Source.
	- CMDB potente y flexible.
	- Alto nivel de personalización.
	- Comunidad activa.
- **Limitaciones**
	- Curva de aprendizaje elevada.
	- Personalización avanzada requiere conocimientos técnicos.
	- UI menos moderna frente a alternativas comerciales.

## Relación con otros conceptos
- Complementa herramientas de:
	- [ITSM](/infraestructura%20it/itsm/).
	- ITOM.
	- Gestión de activos.
	- Gobierno de infraestructura.
- Base sólida para integrar con procesos de:
	- Seguridad.
	- Cumplimiento.
	- Continuidad de negocio.
# Combodo iTop — Conceptos avanzados y temas no cubiertos

## Modelo de datos interno (Datamodel)
- iTop se basa en un **modelo de datos declarativo** definido en XML.
- Cada objeto (CI, Ticket, Servicio) es una **clase** con:
	- Atributos (campos simples, externos, calculados).
	- Relaciones (1–N, N–N).
	- Reglas de presentación y comportamiento.
- Permite:
	- Crear nuevos tipos de activos.
	- Extender clases existentes sin modificar el core.
	- Versionar el modelo para upgrades seguros.

## Object Query Language (OQL)
- Lenguaje propio de consulta orientado a objetos.
- Usado para:
	- Dashboards.
	- Informes.
	- Filtros avanzados.
	- Automatizaciones.
- Soporta:
	- JOINs lógicos entre objetos.
	- Filtros por estado, impacto, SLA.
	- Subconsultas y agregaciones.

## API y automatización externa
- API REST y SOAP disponibles.
- Casos de uso:
	- Alta automática de tickets desde otras plataformas.
	- Sincronización de inventario.
	- Integración con SOC, NOC y pipelines DevOps.
- Permite operaciones CRUD sobre casi todos los objetos.
- Autenticación basada en usuarios y perfiles de iTop.

## Gestión avanzada de workflows
- Los workflows están ligados a:
	- Estados.
	- Transiciones.
	- Acciones automáticas.
- Soporta:
	- Validaciones condicionales.
	- Acciones post-transición.
	- Notificaciones dinámicas.
- Permite implementar procesos ITIL complejos sin código.

## Seguridad interna de iTop
- Control de acceso granular:
	- A nivel de clase.
	- A nivel de campo.
	- A nivel de objeto.
- Separación clara entre:
	- Usuarios finales.
	- Agentes.
	- Administradores.
- Auditoría:
	- Historial de cambios por objeto.
	- Trazabilidad completa de tickets y CIs.

## Autenticación y federación
- Autenticación local nativa.
- Integración con:
	- LDAP.
	- Active Directory.
- Posibilidad de SSO mediante extensiones.
- Gestión centralizada de identidades para entornos corporativos.

## Escalabilidad y rendimiento
- Adecuado para miles de CIs y tickets.
- Factores críticos:
	- Optimización de base de datos.
	- Indexación adecuada.
	- Diseño eficiente del datamodel.
- Separación de frontend y base de datos para grandes despliegues.

## Alta disponibilidad y resiliencia
- No incluye HA nativa, pero puede desplegarse en:
	- Clústeres de base de datos.
	- Balanceadores de carga web.
- Recomendaciones:
	- Backups frecuentes de base de datos.
	- Versionado del datamodel.
	- Entornos separados (dev / test / prod).

## Gestión de backups y recuperación
- Backups críticos:
	- Base de datos.
	- Directorio de extensiones.
	- Configuración.
- Restauración implica:
	- Compatibilidad de versión.
	- Reimportación del datamodel.
	- Verificación de workflows.

## Ecosistema de extensiones
- Extensiones oficiales:
	- Service Management.
	- Change Management.
	- Incident Management.
- Extensiones comunitarias:
	- Automatización.
	- UI enhancements.
	- Integraciones externas.
- Buenas prácticas:
	- Aislar personalizaciones.
	- Evitar modificar el core.

## Uso de iTop en seguridad y operaciones
- Fuente de verdad para:
	- Activos críticos.
	- Dependencias de servicios.
- Integración con:
	- [SIEM](/ciberseguridad/siem/).
	- [SOAR](/ciberseguridad/soar/).
	- Herramientas de monitorización.
- Análisis de impacto ante:
	- Incidentes de seguridad.
	- Cambios no autorizados.

## Gobierno IT y cumplimiento
- Alineado con:
	- ITIL.
	- ISO 20000.
	- ISO 27001 (como soporte documental).
- Facilita:
	- Auditorías.
	- Evidencias de control.
	- Gestión de riesgos basada en activos.

## Límites conceptuales de iTop
- No es una herramienta de monitorización.
- No es un SIEM.
- No sustituye a herramientas EDR o NDR.
- Actúa como **capa de gobierno y control**, no de ejecución técnica.

## Relación con arquitecturas modernas
- Compatible con:
	- Infraestructura híbrida.
	- Entornos cloud.
	- Contenedores y microservicios.
- Requiere modelado explícito de servicios dinámicos.
- Útil como CMDB lógica en arquitecturas complejas.

# Combodo iTop — Casos de uso, aplicación práctica y configuraciones
`$= dv.current().file.tags.join(" ")`

## Gestión de CMDB en entornos corporativos
- Uso de iTop como **fuente única de verdad** para activos IT.
- Modelado de:
	- Infraestructura física.
	- Máquinas virtuales.
	- Servicios de negocio.
- Relación directa entre CIs para análisis de impacto.

### Configuración de relaciones de CI
- Definir dependencias entre:
	- Aplicaciones → Servidores.
	- Servidores → Hipervisores.
	- Servicios → Aplicaciones.
- Permite:
	- Evaluar impacto de incidencias.
	- Priorizar tickets automáticamente.

## Mesa de ayuda (Helpdesk) centralizada
- Uso de iTop como Service Desk para usuarios finales.
- Flujo típico:
	- Usuario crea ticket.
	- Clasificación automática.
	- Asignación por cola o equipo.
	- Resolución y cierre con SLA.

### Configuración de tickets por correo
- Integración con buzón IMAP/POP.
- Creación automática de tickets desde emails.
- Asociación por remitente.

## Gestión de Incidentes ([ITIL](/infraestructura%20it/itil/))
- Registro estructurado de incidentes.
- Clasificación por:
	- Impacto.
	- Urgencia.
	- Prioridad calculada.
- Seguimiento completo del ciclo de vida.

### Workflow de incidente
- Estados típicos:
	- Nuevo.
	- Asignado.
	- En progreso.
	- Resuelto.
	- Cerrado.
- Transiciones con validaciones obligatorias.

## Gestión de Cambios
- Uso de Change Management para controlar modificaciones críticas.
- Tipos:
	- Cambios estándar.
	- Cambios normales.
	- Cambios de emergencia.
- Asociación directa con CIs afectados.

### Configuración de aprobación de cambios
- Flujos de aprobación por:
	- Tipo de cambio.
	- Impacto.
	- Servicio afectado.
- Evidencia automática para auditoría.

## Gestión de SLAs y contratos
- Definición de SLAs por:
	- Cliente.
	- Servicio.
	- Prioridad.
- Medición automática de tiempos de respuesta y resolución.

### Configuración de SLA
- Parámetros:
	- Horarios laborales.
	- Días festivos.
	- Objetivos de tiempo.
- Acciones automáticas ante incumplimientos.

## Automatización operativa
- Uso de triggers para ejecutar acciones automáticas.
- Casos comunes:
	- Notificaciones por estado.
	- Escalado automático.
	- Cambio de prioridad.

### Configuración de triggers
- Basados en:
	- Cambio de estado.
	- Modificación de atributos.
	- Fechas límite (SLA).

## Integración con sistemas externos
- iTop como hub de información.
- Sincronización con:
	- Herramientas de monitorización.
	- Plataformas de seguridad.
	- Sistemas de inventario.

### Uso de la API REST
- Creación automática de tickets.
- Consulta de CIs desde herramientas externas.
- Actualización de estados.

## Uso en [SOC](/ciberseguridad/soc/) y NOC
- Inventario de activos críticos para seguridad.
- Asociación de incidentes de seguridad a servicios.
- Apoyo a análisis forense y respuesta a incidentes.

### Configuración orientada a seguridad
- Etiquetado de activos críticos.
- Clasificación por nivel de riesgo.
- Control de accesos reforzado.

## Gestión de infraestructuras híbridas y cloud
- Modelado de:
	- Recursos on-premise.
	- Servicios cloud.
	- Dependencias híbridas.
- Soporte para arquitecturas dinámicas mediante abstracción lógica.

### Buenas prácticas de modelado cloud
- Representar servicios, no recursos efímeros.
- Relacionar servicios con cuentas y regiones.
- Evitar exceso de CIs volátiles.

## Auditoría y cumplimiento
- Uso de iTop como repositorio de evidencias.
- Registro completo de:
	- Cambios.
	- Incidentes.
	- Aprobaciones.

### Configuración para auditoría
- Activar logs detallados.
- Restringir edición de historiales.
- Uso de roles separados.

## Entornos multi-equipo y multi-cliente
- Uso de organizaciones y contactos.
- Separación lógica de datos.
- Delegación de permisos.

### Configuración multi-organización
- Aislamiento de visibilidad.
- SLAs específicos por organización.
- Catálogos de servicios diferenciados.

## Buenas prácticas de configuración
- No modificar el core.
- Versionar el datamodel.
- Probar cambios en entorno de test.
- Documentar workflows y personalizaciones.

## Errores comunes en despliegues reales
- Modelar exceso de detalle innecesario.
- No definir relaciones críticas.
- Ignorar impacto de SLAs.
- Falta de gobierno del datamodel.

## Uso estratégico de iTop
- Plataforma de gobierno IT.
- Soporte a decisiones operativas.
- Base estructural para seguridad y cumplimiento.
- Complemento a herramientas técnicas, no sustituto.

