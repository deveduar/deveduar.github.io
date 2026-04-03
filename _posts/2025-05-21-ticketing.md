---
date: 2025-05-21 19:54
title: ticketing
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: Management
tags:
  - ticketing
  - Management
  - odoo
  - ERP
---
# ticketing

- [QA](/testing/qa/)
- [CRM](/management/crm/)
- [ERP](/management/erp/)
- [Management](/management/management/)
- [infraestructura IT](/infraestructura%20it/infraestructura-it/)
- [Gestion de Negocio](/gestion%20de%20negocio/gestion-de-negocio/)
- [soporte tecnico](/infraestructura%20it/soporte-tecnico/)
- [ITIL](/infraestructura%20it/itil/)
- [Jira](/management/jira/)
- [Cloud Computing](/cloud/cloud-computing/)
	- [akamai](/cloud/akamai/) 
- [odoo](/infraestructura%20it/odoo/)
- freescout
- uvdesk
- ppermint

---

## Introducción
Los sistemas de **ticketing** permiten gestionar incidencias, solicitudes, tareas y procesos internos dentro de una organización. Son esenciales para soporte técnico, atención al cliente, operaciones, QA, ITSM, y departamentos de negocio.

Su objetivo es lograr:
* trazabilidad  
* priorización adecuada  
* control del ciclo de vida  
* colaboración entre equipos  
* métricas para mejora continua  

Se alinean frecuentemente con prácticas de [ITIL](/infraestructura%20it/itil/) y flujos de trabajo empresariales relacionados con [CRM](/management/crm/), [ERP](/management/erp/) y plataformas de [Gestion de Negocio](/gestion%20de%20negocio/gestion-de-negocio/).

---

## Componentes Clave de un Sistema de Ticketing

### 1. Recepción y Registro
* formularios personalizados  
* plantillas de entrada  
* canales múltiples: email, web, API, chat, integraciones con bots  
* categorización inicial para QA, soporte, operaciones, ventas, etc.  

### 2. Priorización
Basada en:
* impacto  
* urgencia  
* cliente afectado  
* KPIs definidos por la organización  
* SLAs y OLAs  

### 3. Flujo de Trabajo
* asignación automática o manual  
* escalado por niveles  
* estados: nuevo, en progreso, pendiente, resuelto, cerrado  
* automatizaciones basadas en reglas  

### 4. Comunicación
* comentarios internos  
* mensajes orientados al cliente  
* integraciones con plataformas de [CRM](/management/crm/)  
* notificaciones y recordatorios  
* histórico completo de interacciones  

### 5. Resolución y Cierre
* documentación y pasos aplicados  
* verificación de la solución con el usuario  
* encuesta de satisfacción opcional  
* clasificación final para análisis  

---

## Métricas y KPIs
* SLA cumplido / vencido  
* tiempo medio de resolución (MTTR)  
* volumen de tickets por categoría  
* tickets reabiertos  
* carga de trabajo por agente  
* satisfacción del usuario (CSAT)  
* detección de problemas recurrentes  

---

## Integraciones Habituales
Los sistemas de ticketing suelen interactuar con múltiples plataformas:

* [QA](/testing/qa/): registro de bugs y pruebas  
* [CRM](/management/crm/): gestión de clientes y comunicación  
* [ERP](/management/erp/): inventario, facturación y órdenes de servicio  
* [Management](/management/management/): planificación y seguimiento ejecutivo  
* [infraestructura IT](/infraestructura%20it/infraestructura-it/): monitoreo, alertas, provisioning automático  
* [Cloud Computing](/cloud/cloud-computing/): soporte a entornos distribuidos  
	* ej.: [akamai](/cloud/akamai/) como plataforma de edge o CDN  
* [Jira](/management/jira/): gestión de proyectos y devops  
* [odoo](/infraestructura%20it/odoo/): helpdesk e integración con ERP modular  

---

## Herramientas de Ticketing (Open Source y Comerciales)

### Freescout
Relacionado: freescout

Help desk de código abierto compatible con flujos estilo Zendesk / HelpScout.

* [Best open source help desk: Zendesk & Help Scout alternative](https://freescout.net/)  
* Despliegue en Docker:  
  [GitHub - tiredofit/docker-freescout](https://github.com/tiredofit/docker-freescout)

Características:
* bandeja compartida  
* automatización básica  
* múltiples buzones  
* integración con CRM externos  
* módulos de ampliación  

Acceso técnico:
* soporta acceso SSH al contenedor para mantenimiento  
* actualizaciones controladas por Docker y scripts internos  

---

### UVdesk
Relacionado: uvdesk

Helpdesk modular basado en PHP/Symfony.

* Instalación en NAS Synology:  
  [How to Install UVdesk on Your Synology NAS](https://mariushosting.com/how-to-install-uvdesk-on-your-synology-nas/)

Características:
* multicanal  
* panel avanzado  
* automatizaciones  
* integración con e-commerce  
* APIs y desarrollo de módulos  

---

### Peppermint (ppermint)
Relacionado: ppermint

Gestión de issues y helpdesk moderno, ligero y open source.

* Repositorio:  
  [Peppermint - Zendesk & Jira alternative](https://github.com/Peppermint-Lab/peppermint)  
* Ejemplo de docker-compose:  
  [tickets/docker-compose.yml · theNetworkChuck](https://github.com/theNetworkChuck/tickets/blob/main/docker-compose.yml)

Ventajas:
* interfaz minimalista  
* despliegue simple vía Docker  
* API clara  
* orientación a soporte interno y tareas rápidas  

---

## Ticketing en Entornos Cloud
Relacionado: [Cloud Computing](/cloud/cloud-computing/)

Integración con:
* servicios serverless (webhooks, lambdas)  
* bases de datos distribuidas  
* pipelines CI/CD  
* monitoreo de eventos  
* CDN y edge computing (ej.: [akamai](/cloud/akamai/))  

Automatizaciones posibles:
* apertura de tickets por alertas  
* cierre automático cuando un servicio se normaliza  
* sincronización con métricas de [monitoreo](/monitoreo/monitoreo/)  
* actualización de estados desde pipelines de QA o DevOps  

---

## Buenas Prácticas del Sistema de Ticketing

### Organización
* mantener categorías simples y comprensibles  
* evitar duplicados  
* usar etiquetas útiles y coherentes  

### Comunicación
* usar plantillas y respuestas rápidas  
* no cerrar sin validar la resolución  
* mantener tono claro y profesional  

### Escalado
* escalar según complejidad, no según carga del agente  
* documentar el motivo del escalado  
* incluir logs, capturas o pasos previos  

### Documentación
* incluir pasos detallados de solución  
* relacionar tickets repetidos  
* alimentar la base de conocimiento  
* registrar mejoras sugeridas para procesos o herramientas  

---

## Ejemplo de Flujo General
1. recepción del ticket  
2. clasificación y priorización  
3. asignación al agente adecuado  
4. análisis y reproducción del problema  
5. comunicación con el usuario  
6. aplicación de solución o escalado  
7. validación final  
8. documentación y cierre  

---
