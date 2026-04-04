---
date: 2025-06-10 22:34
title: Active Directory
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: Sistemas
tags:
  - active_directory
  - Windows
  - roles
  - sistemas
---
# Active Directory

- [infraestructura IT](/infraestructura%20it/infraestructura-it/)
- Windows

## Active Directory Domain Services (AD DS)
Servicio central de Microsoft para la **gestión de identidades, equipos y recursos** dentro de una red corporativa basada en dominios.

### Componentes principales
- **Dominio**
	- Límite administrativo y de seguridad.
	- Comparte una base de datos de objetos y políticas.
- **Controlador de Dominio (DC)**
	- Servidor que autentica y autoriza usuarios y equipos.
	- Mantiene una copia de la base de datos de AD.
- **Bosque (Forest)**
	- Nivel más alto de confianza.
	- Contiene uno o varios dominios.
- **Árbol de dominios**
	- Conjunto de dominios con espacio de nombres contiguo.
- **Unidades Organizativas (OU)**
	- Contenedores lógicos para organizar usuarios, equipos y grupos.
	- Permiten delegación administrativa y aplicación de GPOs.

### Objetos de Active Directory
- **Usuarios**
	- Identidades para personas o servicios.
- **Grupos**
	- Seguridad o distribución.
	- Facilitan asignación de permisos.
- **Equipos**
	- Dispositivos unidos al dominio.
- **Contactos**
	- Objetos informativos sin capacidad de inicio de sesión.

### Autenticación y autorización
- **[Kerberos](/autenticacion/kerberos/)**
	- Protocolo principal de autenticación.
	- Basado en tickets y claves simétricas.
- **NTLM**
	- Protocolo legado, menos seguro.
	- Usado solo por compatibilidad.
- **Listas de control de acceso (ACL)**
	- Definen permisos sobre objetos y recursos.

### Replicación y disponibilidad
- Replicación automática entre DCs.
- Uso de **sitios y subredes** para optimizar tráfico.
- Soporte para alta disponibilidad y tolerancia a fallos.

### Referencia oficial
- [Introducción a Active Directory Domain Services | Microsoft Learn](https://learn.microsoft.com/es-es/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview)

## ADFS (Active Directory Federation Services)
Servicio de **federación de identidades** que permite autenticación única (SSO) entre organizaciones y aplicaciones externas.

### Funciones clave
- Autenticación basada en **claims**.
- Integración con aplicaciones SaaS y servicios externos.
- Extiende identidades locales de AD a entornos externos.

### Protocolos soportados
- **SAML 2.0**
- **OAuth 2.0**
- **OpenID Connect**

### Casos de uso
- SSO con aplicaciones cloud.
- Acceso federado para partners o proveedores.
- Integración con gestores de identidad externos.

### Integración destacada
- [Servicios de federación de Active Directory (ADFS) - LastPass](https://www.lastpass.com/es/solutions/integrations/adfs#:~:text=Utilizar%20ADFS&text=Es%20un%20componente%20del%20sistema,en%20Active%20Directory%20(AD).)

## Group Policy Objects (GPOs)
GPOs Group Policy Objects

Mecanismo para **configurar y controlar** el comportamiento de usuarios y equipos de forma centralizada.

### Tipos de configuración
- **Configuración de equipo**
	- Seguridad, firewall, scripts de inicio.
- **Configuración de usuario**
	- Escritorio, software, redirección de carpetas.

### Ámbitos de aplicación
- Sitio
- Dominio
- Unidad Organizativa (OU)

### Buenas prácticas
- GPOs pequeñas y específicas.
- Uso mínimo de herencia forzada.
- Documentar cambios y versiones.

## Auditorías y seguridad
Conjunto de mecanismos para **monitorizar, registrar y analizar** la actividad dentro del dominio.

### Auditoría de eventos
- Inicio y cierre de sesión.
- Cambios en objetos de AD.
- Accesos a recursos críticos.

### Herramientas comunes
- Visor de eventos de Windows.
- Políticas de auditoría avanzadas.
- Integración con SIEM (Splunk, Sentinel, Elastic).

### Objetivos
- Cumplimiento normativo.
- Detección de accesos no autorizados.
- Análisis forense y trazabilidad.

## Exchange y Active Directory
Exchange

Active Directory es la **base de identidad y directorio** para Microsoft Exchange.

### Relación AD–Exchange
- Usuarios de correo vinculados a cuentas AD.
- Grupos de distribución basados en grupos AD.
- Atributos de Exchange almacenados en el esquema de AD.

### Dependencias clave
- Esquema extendido de Active Directory.
- Autenticación centralizada.
- Delegación administrativa mediante OUs.

## Integración de equipos en la red corporativa
Proceso mediante el cual dispositivos pasan a formar parte del dominio.

### Unión al dominio
- Equipos Windows unidos directamente a AD.
- Creación automática de objeto equipo.
- Aplicación inmediata de GPOs.

### Beneficios
- Autenticación centralizada.
- Gestión unificada de seguridad.
- Control de acceso a recursos internos.

### Escenarios comunes
- Entornos on-premises.
- Entornos híbridos (AD + Azure AD).
- Dispositivos corporativos y de usuarios.
