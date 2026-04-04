---
date: 2024-11-16 20:54
title: power apps
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Desarrollo multiplataforma
tags:
  - powerapps
  - Windows
---
# Power Apps

## Concepto general
- Plataforma **low-code** de Microsoft para crear aplicaciones empresariales rápidamente.
- Orientada a **integraciones**, **cloud** y automatización de procesos.
- Parte de **Microsoft Power Platform** junto con Power Automate, Power BI y Power Virtual Agents.
- Pensada para **usuarios técnicos y no técnicos**, con posibilidad de extenderse mediante código.
- Uso frecuente en entornos corporativos, M365, Dynamics 365 y escenarios de [devops](/devops/devops/) ligeros (apps internas, flujos de aprobación, paneles operativos).

## Características clave
- Desarrollo visual basado en componentes y fórmulas tipo Excel (Power Fx).
- Conectores nativos y personalizados para múltiples servicios.
- Seguridad integrada con **Azure Active Directory** y control de permisos.
- Despliegue inmediato en web y móvil sin recompilación.
- Escalable mediante Dataverse, Azure Functions y APIs REST.

## Tipos de aplicaciones
- **Canvas Apps**
	- Diseño libre tipo lienzo.
	- Ideal para apps móviles, formularios y experiencias personalizadas.
	- Mayor control visual y de UX.
- **Model-driven Apps**
	- Basadas en **modelo de datos** (Dataverse).
	- UI generada automáticamente a partir de entidades, vistas y procesos.
	- Enfoque fuerte en **procesos de negocio** y consistencia.
- **Portals / Power Pages**
	- Apps web externas para usuarios fuera de la organización.
	- Integración con Dataverse y autenticación configurable.

## Modelo de datos
- **Microsoft Dataverse**
	- Almacenamiento estructurado y seguro.
	- Entidades, relaciones, reglas de negocio y validaciones.
	- Versionado y gobierno de datos.
- Orígenes externos
	- SharePoint Lists
	- SQL Server / Azure SQL
	- Excel, OneDrive
	- APIs REST
- Buenas prácticas
	- Normalizar entidades.
	- Separar datos operativos de catálogos.
	- Definir claves y relaciones desde el inicio.

## Procesos y automatización
- Integración nativa con **Power Automate**.
- Flujos de aprobación, notificaciones y sincronización de datos.
- Eventos disparados desde acciones en Power Apps.
- Uso en:
	- Onboarding de empleados.
	- Gestión de incidencias.
	- Flujos de CRM internos.
	- Automatización de tareas repetitivas.

## Integraciones
- Microsoft 365 (Outlook, Teams, Excel, SharePoint).
- Dynamics 365 (Sales, Customer Service, Field Service).
- Azure (Functions, Logic Apps, Service Bus).
- Conectores estándar y premium.
- Conectores personalizados para sistemas legacy.

## DevOps y ciclo de vida
- Entornos: Development, Test, Production.
- Soluciones para empaquetar apps, flujos y componentes.
- Exportación e importación controlada entre entornos.
- Integración con [devops](/devops/devops/) mediante:
	- Azure DevOps pipelines.
	- Control de versiones de soluciones.
	- Automatización de despliegues.

## Casos de uso habituales
- CRM interno y ligero.
- Aplicaciones de seguimiento de proyectos.
- Formularios corporativos y aprobaciones.
- Dashboards operativos conectados a procesos.
- Reemplazo rápido de hojas Excel complejas.
- Apps internas para soporte IT y operaciones.

## UI y experiencia de usuario
- Componentes reutilizables.
- Temas y estilos consistentes.
- Navegación avanzada y menús dinámicos.
- Soporte para responsive design.
- Optimización para móvil y tablet.

## Recursos oficiales
- [Microsoft Power Apps: compilación de aplicaciones con inteligencia artificial | Microsoft](https://www.microsoft.com/es-es/power-platform/products/power-apps)

## Cursos y aprendizaje
- [Curso COMPLETO Power Apps 2024 - YouTube](https://youtu.be/d8zHm-f1kVA)
- [Curso Creación de CRM con PowerApps - YouTube](https://youtu.be/v94ZGWwUUEo)
- [Expandable Navigation Menu in Power Apps - YouTube](https://youtu.be/TUF2Rg691Qw)

# Recursos Power Apps (estado 2025-2026)

## Documentación y actualización oficial
- **Novedades y versiones publicadas**  
	- Sitio oficial con **notas de versiones semanales y plan de versiones próximas** (incluye detalles de actualizaciones, correcciones y mejoras recientes).  
		- [Novedades de Power Apps](https://learn.microsoft.com/es-es/power-apps/whats-new)
- **Plan de versiones 2025 – Oleada 1 (Abr-Sep 2025)**  
	- Planea características modernizadas para crear apps con controles nuevos, capacidades sin conexión y navegación optimizada.  
		- [Power Apps 2025 Wave 1 – Planned features](https://learn.microsoft.com/es-es/power-platform/release-plan/2025wave1/power-apps/planned-features)
- **Plan de versiones 2025 – Oleada 2 (Oct 2025-Mar 2026)**  
	- Enfoque en apps modernas, controles responsivos, plantillas y colaboración mejorada con Copilot.  
		- [Power Apps 2025 Wave 2 – Release plan](https://learn.microsoft.com/es-es/power-platform/release-plan/2025wave2/power-apps)
- **Cambios próximos en Power Platform (fechas y deprecaciones)**  
	- Editor enriquecido clásico descontinuado desde *18 abr 2025*.  
	- Tarjetas para Power Apps se retirarán en *29 ago 2025*.  
	- Transformación de fórmulas por ejemplos descontinuada desde *19 feb 2025*.  
	- Conector Snowflake mejorado y retirada del conector antiguo en *26 may 2025*.  
	- BYOK (Bring Your Own Key) de Dataverse retirado a *6 ene 2026* (transición recomendada a CMK).  
		- [Cambios importantes en Power Platform](https://learn.microsoft.com/es-es/power-platform/important-changes-coming)

## Blogs de actualizaciones mensuales
- **Actualizaciones de características – Mar 2025**  
	- Interfaz de inicio de creación renovada, edición directa de tablas y mejoras del diseño Canvas.  
	- Copilot y desarrollo con IA más profundo.  
	- Gobernanza empresarial con *Managed Availability* y herramientas como *Power CAT Tools*.  
		- [What’s new in Power Apps – March 2025](https://www.microsoft.com/en-us/power-platform/blog/2025/04/04/whats-new-in-power-apps-march-2025-feature-update/)
- **Actualizaciones – May 2025**  
	- Introducción de *Plans* (definición de requisitos + arquitectura de solución con Copilot).  
	- Nuevos módulos de entrenamiento y documentación ampliada.  
		- [What’s new in Power Apps – May 2025](https://www.microsoft.com/en-us/power-platform/blog/2025/06/09/whats-new-in-power-apps-may-2025-feature-update/)
- **Actualizaciones – Jun 2025**  
	- *Enhanced Component Properties (ECPs)* disponibles.  
	- Renombrado de tipo de dato *UntypedObject* a *Dynamic*.  
	- Formación actualizada en navegación, Dataverse y uso de Copilot.  
		- [What’s new in Power Apps – June 2025](https://www.microsoft.com/en-us/power-platform/blog/power-apps/whats-new-in-power-apps-june-2025-feature-update/)

## Comunidad, blogs y canales
- **YouTube – novedades Power Platform 2025**  
	- Canal de DOCTOR 365 con resúmenes en vídeo mensuales de novedades de Power BI, Power Apps y Power Automate.  
		- [Doctor 365 – Power Platform Updates](https://www.youtube.com/watch?v=o-ZVTgXdUgM)
- **Power Community (recursos y eventos)**  
	- Secciones de Canvas Apps y Power Apps Portals con **free community bootcamps**, eventos y summits internacionales.  
		- [Power Apps Community](https://www.powercommunity.com/category/power-platform-community/power-apps/canvas-apps/)

## Cursos y formación actualizada (2025)
- **Udemy – Microsoft Power Apps 2025: Learn & Build 9 Apps + Automate**  
	- Curso práctico para crear 9 apps reales y flujos con Power Automate.  
		- [Microsoft Power Apps 2025 – Udemy](https://www.udemy.com/course/ms-powerapps-master-class-build-9-powerapps-from-scratch/)
- **Training agendas y planes de estudio 2025**  
	- Agendas detalladas para formación progresiva (Canvas, Dataverse, UI, responsive).  
		- [Power Apps Training Agenda 2025 (PDF)](https://www.be-terna.com/sites/5ebfc39e232fb906a3dfc34b/assets/67497b9e25461c6fa93685fd/Power_Apps_Training_Agenda_2025_BE-terna.pdf)

## Notas o discusiones de comunidad
- **Discusión sobre versiones y actualizaciones de aplicaciones en entornos reales**  
	- Problemas comunes relacionados con la actualización de apps en producción y caché en clientes.  
		- [Reddit – Power Apps update issues](https://www.reddit.com/r/PowerApps/comments/1oag9ad)
- **Opiniones y debates sobre relevancia y futuro de Power Apps**  
	- Conversaciones sobre evolución hacia enfoques pro-code y rol del low code.  
		- [Is Power Apps still relevant?](https://www.reddit.com/r/PowerApps/comments/1optkhe/is_power_apps_still_relevant_in_the_nocode_vibe/)
# Power Apps – Tools y alternativas Open Source (GitHub, estado 2025-2026)

## Tools y utilidades para Power Apps / Power Platform
- **Power Platform CLI (pac)**  
	- Herramienta oficial para desarrollo, empaquetado y despliegue de soluciones.  
	- Uso clave en pipelines y [devops](/devops/devops/).  
	- [Power Platform CLI](https://learn.microsoft.com/es-es/power-platform/developer/cli/introduction)

- **Power CAT Tools**  
	- Conjunto de herramientas avanzadas para gobierno, ALM y optimización.  
	- Incluye Solution Checker, análisis de rendimiento y buenas prácticas.  
	- [Power CAT Tools](https://learn.microsoft.com/es-es/power-platform/guidance/power-cat-tools)

- **Power Platform Build Tools (Azure DevOps)**  
	- Extensiones oficiales para CI/CD.  
	- Automatiza exportación/importación de soluciones y validaciones.  
	- [Power Platform Build Tools](https://learn.microsoft.com/es-es/power-platform/alm/devops-build-tools)

- **ALM Accelerator for Power Platform**  
	- Framework completo de ALM con Git, pipelines y control de versiones.  
	- Enfocado a entornos enterprise.  
	- [ALM Accelerator](https://learn.microsoft.com/es-es/power-platform/alm/accelerator/overview)

- **Power Apps Test Engine**  
	- Testing automatizado de Canvas Apps.  
	- Integrable en pipelines de CI.  
	- [Power Apps Test Engine](https://learn.microsoft.com/es-es/power-apps/maker/canvas-apps/test-engine/overview)

## Componentes reutilizables y UI
- **Fluent UI for Power Apps**  
	- Componentes alineados con el diseño moderno de Microsoft.  
	- [Fluent UI](https://github.com/microsoft/fluentui)

- **Power Apps Component Framework (PCF)**  
	- Desarrollo de componentes custom con TypeScript.  
	- Permite extender Power Apps con controles avanzados.  
	- [Power Apps PCF](https://learn.microsoft.com/es-es/power-apps/developer/component-framework/overview)

## Alternativas Open Source (low-code / no-code)
### Low-code platforms
- **Appsmith**  
	- Alternativa open source a Power Apps para apps internas.  
	- Integraciones con REST, SQL, NoSQL.  
	- [github.com/appsmithorg/appsmith](https://github.com/appsmithorg/appsmith)

- **Budibase**  
	- Low-code open source con backend integrado.  
	- Enfoque en apps empresariales rápidas.  
	- [github.com/Budibase/budibase](https://github.com/Budibase/budibase)

- **ToolJet**  
	- Plataforma open source para dashboards y apps internas.  
	- Integración fuerte con APIs y bases de datos.  
	- [github.com/ToolJet/ToolJet](https://github.com/ToolJet/ToolJet)

- **Lowdefy**  
	- Low-code basado en YAML y React.  
	- Ideal para desarrolladores que quieren control.  
	- [github.com/lowdefy/lowdefy](https://github.com/lowdefy/lowdefy)

### No-code / workflow
- **n8n**  
	- Automatización de flujos similar a Power Automate.  
	- Self-hosted y extensible.  
	- [github.com/n8n-io/n8n](https://github.com/n8n-io/n8n)

- **Node-RED**  
	- Flujos visuales orientados a integraciones y eventos.  
	- Muy usado en IoT y automatización.  
	- [github.com/node-red/node-red](https://github.com/node-red/node-red)

## Alternativas Open Source tipo CRM / Business Apps
- **ERPNext**  
	- ERP y CRM open source completo.  
	- Reemplaza muchos casos de uso típicos de Power Apps + Dataverse.  
	- [github.com/frappe/erpnext](https://github.com/frappe/erpnext)

- **Odoo Community**  
	- Plataforma modular de negocio.  
	- Amplia comunidad y ecosistema.  
	- [github.com/odoo/odoo](https://github.com/odoo/odoo)

- **SuiteCRM**  
	- CRM open source orientado a procesos.  
	- [github.com/salesagility/SuiteCRM](https://github.com/salesagility/SuiteCRM)

## Backend y datos (alternativas a Dataverse)
- **Supabase**  
	- Backend open source con PostgreSQL, auth y storage.  
	- Muy usado junto a low-code frontends.  
	- [github.com/supabase/supabase](https://github.com/supabase/supabase)

- **Appwrite**  
	- Backend open source para apps web y móviles.  
	- APIs, auth, DB y funciones serverless.  
	- [github.com/appwrite/appwrite](https://github.com/appwrite/appwrite)

- **Hasura**  
	- GraphQL engine sobre PostgreSQL.  
	- Enfoque pro-code con rapidez de desarrollo.  
	- [github.com/hasura/graphql-engine](https://github.com/hasura/graphql-engine)

## Comparativa conceptual
- **Power Apps**
	- Integración nativa Microsoft.
	- Gobierno y seguridad enterprise.
	- Coste por licencia.
- **Open source**
	- Control total y self-hosting.
	- Mayor esfuerzo de arquitectura.
	- Sin vendor lock-in.

## Casos donde usar alternativas
- Startups o equipos pequeños sin licencias M365.
- Requisitos de soberanía de datos.
- Arquitecturas cloud-native o híbridas.
- Necesidad de personalización profunda.
