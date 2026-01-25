---
date: 2025-10-29 19:55
title: administracion de sistemas
tags:
keywords:
source:
status: 📌
Parent: "[[Area-Sistemas]]"
cssclasses:
public_note: "true"
category: sistemas
categories:
  - sistemas
  - administracion
  - hide-embedded-header1
---
# administracion de sistemas
`$= dv.current().file.tags.join(" ")`

- [Sistemas](/uncategorized/sistemas/)
- sysadmin-conceptos y rutas 
- [Windows Server](/devops/windows-server/)
	- [powershell](/sistemas/powershell/)
	- FSRM File Server Resource Manager
		- Introducción al Administrador de recursos del servidor de archivos (FSRM)-fsrm-overview 
		- [monitoreo](/uncategorized/monitoreo/)
		- clasificar, cuotas, informes
	- gestión de usuarios, aplicaciones, actualizaciones de software, seguridad y configuración del sistema, 
	- herramientas de administración remota del servidor (RSAT)
	- [firewall](/ciberseguridad/firewall/) 
	- administracion de servicios
		- Agrupación de hosts de servicio en Windows 10-svchost-service-refactoring 
- [Active Directory](/sistemas/active-directory/)
	- GPO objeto de directiva de grupo (GPO)
		- Introducción a la directiva de grupo para Windows Server-group-policy-overview 
	- 
- WSUS
	- actualizaciones en red
	- Información general de Windows Server Update Services (WSUS)-windows-server-update-services-wsus 
- [Virtualizacion](/devops/virtualizacion/)
	- Hyper-V 
		- Introducción a la tecnología de Hyper-V-hyper-v-overviewpivots=windows 
		- 
	- comutacion por error
		- Clústeres de conmutación por error-failover-clustering-overview 
	- 
- [Redes](/uncategorized/redes/)
	- DNS
	- dhcp
- [Linux](/sistemas/linux/)
	- [bash](/desarrollo%20multiplataforma/bash/)
	- systemd
	- Gestión de usuarios y permisos
		- Servicios comunes 
			- Apache, 
			- Nginx, 
			- SSH
	- [Automatizacion y Build](/uncategorized/automatizacion-y-build/)
		- [cron jobs](/backend/cron-jobs/)
- [ciberseguridad](/uncategorized/ciberseguridad/)
	- [Antivirus](/ciberseguridad/antivirus/)
		- tipos de configuraciones empresariales de antivirus 
		- [hardening](/ciberseguridad/hardening/)
	- [manejo de parches](/ciberseguridad/manejo-de-parches/) actualizaciones
		- wannacry
		- [Windows Server](/devops/windows-server/)
		- WSUS Windows Server Update Services
			- Implementación de actualizaciones mediante Windows Server Update Services-waas-manage-updates-wsus 
		- SCCM old
			- Microsoft Endpoint Configuration Manager
			- MECM
			- System Center Configuration Manager - Wikipedia, la enciclopedia libre-System_Center_Configuration_Manager
	- backups
		- Veeam
		- [Azure](/cloud/azure/) Backup

# tareas de un sis admin
- cuentas de users
	- niveles de usuarios
	- cuentas
	- incidentes
- mantener software, hardware
	- drivers
	- virtualizacion, nube centro de datos
	- licencias, dpendencias, 
	- repositorio, seguro
		- firma digital, funciones hash, cifrado
- backups
	- completa, incremental, diferencial
	- RAID
	- Pruebas de Restauracion
	- scripts, politica,
	- tareas programadas.
- vigilancia, seguridad
	- politicas de seguridad,
	- detecion de intrusiones
	- SGSI
- Soporte
	- Resolver problemas:
	- metodologia, planes de contingencia, continuidad del negocio
	- documentacion de problemas
- crontab
	- [Cómo usar Cron para automatizar tareas en Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-ubuntu-1804-es)
	- [crontab guru validar expresiones](https://crontab.guru/) 
	- mantener docs
	- monitorear sistema
	- logs, auditorias, documentar
- (SNMP) - protocolos TCPIP
	- [Cómo instalar y configurar un demonio y cliente SNMP en Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-an-snmp-daemon-and-client-on-ubuntu-18-04-es)
	- [Ejercicios con SNMPl](https://nsrc.org/activities/agendas/sp/nmm-5-days-es/netmgmt/es/snmp/exercises-snmp.es.html)

# sysadmin-conceptos y rutas
- adduser 
- /home/dscully 
- /etc/skel
- UID - GID 
- /etc/passwd
- /etc/shadow
- /bin/bash
- /bin/sh
- x encripted
* or !  lock an account en el archivo o usar comando.
- password hashes
- L password bloqueado
- GECOS field
- -a option hidden files
- aG secondary group ,-a append
- primary group
- Pluggable Authentication Module (PAM)
- password policy