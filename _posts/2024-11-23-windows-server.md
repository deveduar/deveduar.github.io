---
date: 2024-11-23 01:59
title: Windows Server
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: devops
tags:
  - Windows
  - backend
  - devops
---
# Windows Server

## Contexto y alcance
- [devops](/devops/devops/)
- [Sistemas](/sistemas/sistemas/)
- [infraestructura IT](/infraestructura%20it/infraestructura-it/)

Windows Server es una plataforma de sistema operativo orientada a entornos empresariales que soporta servicios de red, identidades, virtualización, aplicaciones, almacenamiento y alta disponibilidad. Es clave en infraestructuras on-premise, híbridas y cloud, integrándose de forma nativa con soluciones Microsoft y de terceros.

## Servicios y roles principales

### Servicios de directorio e identidad
- [Active Directory](/sistemas/active-directory/)
	- Servicio centralizado de gestión de identidades, dispositivos y políticas.
	- Permite autenticación, autorización y administración basada en dominios.
	- Integra políticas de grupo (GPO) para control y estandarización.
- control de acceso
	- [control de datos](/ciberseguridad/control-de-datos/)
		- Definición de permisos sobre archivos, carpetas, recursos compartidos y bases de datos.
		- Integración con NTFS, SMB y servicios de cifrado.
	- [autenticacion](/autenticacion/autenticacion/)
		- Métodos basados en credenciales, certificados, [Kerberos](/autenticacion/kerberos/) y NTLM.
		- Soporte para autenticación multifactor (MFA) vía integración externa.
	- [SSO Single Sign-On](/autenticacion/sso-single-sign-on/)
		- Acceso unificado a múltiples servicios con una sola identidad.
		- Integración con Active Directory y servicios cloud.

### Servicios web y aplicaciones
- IIS web server
	- Servidor web nativo de Windows para aplicaciones empresariales.
	- Soporte para HTTP/HTTPS, ASP.NET, APIs y servicios REST.
	- Administración avanzada mediante módulos, pools de aplicaciones y bindings.
	- [Internet Information Services - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/Internet_Information_Services)

### Servicios de datos
- [sql server](/devops/sql-server/)
	- Motor de base de datos relacional para aplicaciones críticas.
	- Integración con Windows Server para seguridad, clustering y alta disponibilidad.
	- Uso conjunto con Active Directory para autenticación integrada.

### Servicios de red y transferencia
- FTP
	- Transferencia de archivos mediante protocolos FTP/FTPS.
	- Integrable con IIS y controlado por permisos de sistema.
	- Uso habitual en despliegues, integraciones y automatización.

## Alta disponibilidad y escalabilidad

### Clusters
- clusters
	- Agrupación de servidores para tolerancia a fallos y balanceo.
	- Uso en servicios críticos como bases de datos, archivos o aplicaciones.
	- Implementación mediante Microsoft Cluster Service (MSCS).
	- [Introducción a los clústeres de MSCS - Documentación de IBM](https://www.ibm.com/docs/es/ibm-mq/9.4?topic=mscs-introducing-clusters)

## Virtualización y aislamiento

### Virtualización
- [Virtualizacion](/devops/virtualizacion/)
	- Abstracción del hardware para ejecutar múltiples sistemas.
	- Optimiza recursos, mejora escalabilidad y facilita recuperación.
- Hyper-V
	- Hipervisor nativo de Windows Server.
	- Soporte para máquinas virtuales, snapshots y virtual switches.
	- Base para infraestructuras on-premise e híbridas.

## Integración cloud e híbrida

### Cloud
- [Azure](/cloud/azure/)
	- Integración directa con servicios cloud de Microsoft.
	- Escenarios híbridos: sincronización de identidades, backups y migraciones.
	- Extensión natural de Windows Server hacia la nube.

## Seguridad y gobierno
- Gestión centralizada de políticas y permisos.
- Auditoría, logs y cumplimiento normativo.
- Base para arquitecturas Zero Trust y entornos corporativos seguros.
