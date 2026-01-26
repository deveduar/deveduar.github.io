---
date: 2025-04-14 03:14
title: OTRS Znuny
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: "true"
category: infraestructura IT
tags:
  - Znuny
  - OTRS
  - ITIL
---
# OTRS Znuny
``$= dv.current().file.tags.join(" ")``

- [ticketing](/management/ticketing/)
## Descripción General
OTRS (Open Ticket Request System) es un sistema de **gestión de tickets** ampliamente utilizado para soporte al cliente, helpdesk y [Management](/uncategorized/management/) de servicios IT.  
La versión moderna y mantenida de OTRS Community Edition se conoce como **Znuny**, aunque para nuevos proyectos se recomienda evaluar alternativas modernas, dado que OTRS original está descontinuado.

## Historia y Estado Actual
- **OTRS Community Edition**: versión original, ampliamente utilizada en entornos corporativos y de soporte técnico. Actualmente **descontinuada**.
- **Znuny LTS**: fork de OTRS Community Edition, manteniendo compatibilidad con la mayoría de configuraciones y flujos de trabajo de OTRS, con soporte extendido y actualizaciones de seguridad.
	- Repositorio oficial: [GitHub - Znuny](https://github.com/znuny/Znuny)
	- Documentación de administración: [OTRS 6 - Admin Manual](https://otrscommunityedition.com/doc/manual/admin/6.0/en/html/index.html)

## Funcionalidades Clave
- Gestión de **tickets de soporte**, incluyendo:
	- Creación, asignación y seguimiento de tickets.
	- Priorización y categorización de incidencias.
	- Automatización de respuestas y notificaciones.
- **SLA Management**: definición y seguimiento de niveles de servicio.
- **Integraciones y extensibilidad**:
	- Conectores para correo electrónico, sistemas de chat y aplicaciones externas.
	- Soporte para extensiones y módulos personalizados.
- Informes y métricas:
	- Estadísticas de rendimiento del equipo de soporte.
	- Historial de tickets y tendencias de incidencias.

## Componentes y Arquitectura
- **Backend**: Perl + base de datos (MySQL, PostgreSQL o SQLite).
- **Frontend**: interfaz web responsiva para agentes y administradores.
- **Opcional**: integración con [infraestructura IT](/uncategorized/infraestructura-it/) mediante API y módulos de terceros.

## Migración y Actualización
- Las instalaciones de OTRS pueden migrar a Znuny para obtener soporte LTS y actualizaciones de seguridad.
- Znuny mantiene compatibilidad con la mayoría de configuraciones existentes de OTRS.
- Recomendado para organizaciones que requieren continuidad operativa sin reconstruir flujos de trabajo existentes.

## Recursos Adicionales
- [Documentación oficial de Znuny](https://github.com/znuny/Znuny)
- [Foros de la comunidad Znuny](https://forums.znuny.org)
- [ticketing](/management/ticketing/): conceptos y mejores prácticas en gestión de tickets.
- [Management](/uncategorized/management/): integración de OTRS/Znuny en procesos de gestión de servicios IT.
