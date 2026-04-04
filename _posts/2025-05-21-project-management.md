---
date: 2025-05-21 20:08
title: Project Management
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: Management
tags:
  - Management
  - project_management
---
# Project Management

Automatizacion · [monitoreo](/monitoreo/monitoreo/) · [Management](/management/management/) · [Jira](/management/jira/) · Confluence · Redmine · Slack · Google Workspace · PMO

---

## Fundamentos de Project Management
El **Project Management** es la disciplina que permite planificar, ejecutar y controlar proyectos para cumplir objetivos dentro de un alcance, tiempo y coste definidos. Incluye metodologías, herramientas y prácticas que estructuran el trabajo y facilitan la coordinación entre equipos.

### Conceptos Clave
- **Alcance (Scope)**  
	Define qué se va a entregar exactamente y qué queda fuera del proyecto.
- **Cronograma (Schedule)**  
	Plan temporal del proyecto: fases, hitos, dependencias y duración.
- **Costes y Presupuesto**  
	Estimaciones financieras y control del gasto.
- **Calidad**  
	Estandares y criterios que deben cumplir los entregables.
- **Riesgos**  
	Identificación, análisis y estrategias para mitigar riesgos.
- **Stakeholders**  
	Personas o grupos afectados por el proyecto o interesados en él.
- **Metodologías de Trabajo**  
	Ágiles, híbridas y tradicionales (ej.: Scrum, Kanban, Waterfall).
- **Comunicación**  
	Punto central para asegurar alineación, transparencia y toma de decisiones.

---

## Herramientas Principales

### Jira
[Jira](/management/jira/) se usa para el **seguimiento de incidencias**, gestión de tareas y flujos de trabajo (workflows).
- **Casos de uso**
	- Gestión de backlog.
	- Creación de epics, historias y tareas.
	- Automatización de estados.
	- Control de capacidad y burndown (Scrum/Kanban).

### Confluence
Confluence sirve para documentar **ideas, planes, informes y conocimiento** del proyecto.
- **Casos de uso**
	- Wikis internos.
	- Repositorio de decisiones (ADR).
	- Documentación de procesos y diseño.
- **Recursos**
	- [Confluence Installation Guide | Confluence Data Center 9.1 | Atlassian Documentation](https://confluence.atlassian.com/doc/confluence-installation-guide-135681.html)
	- [hub.docker.com/r/atlassian/confluence](https://hub.docker.com/r/atlassian/confluence)

### Redmine
Redmine es una herramienta de **gestión de proyectos e incidencias** de código abierto.
- **Casos de uso**
	- Gestión tradicional con Gantt.
	- Workflow configurable.
	- Repositorios integrados.
- **Recursos**
	- [hub.docker.com/_/redmine](https://hub.docker.com/_/redmine)

### Slack
Slack es una plataforma de **comunicación** en tiempo real.
- **Casos de uso**
	- Integración con CI/CD.
	- Canales por proyecto o área funcional.
	- Notificaciones automáticas desde herramientas de PM.

### Google Workspace
Suite colaborativa que incluye Documentos, Drive, Hojas y Calendar.  
Se integra con Jira, Slack y herramientas de automatización.

---

## PMO
PMO (Project Management Office) es la entidad encargada de estandarizar procesos, gobernanza y métricas del portafolio de proyectos.
- **Funciones principales**
	- Definir metodologías.
	- Alinear proyectos con la estrategia corporativa.
	- Asegurar la calidad en los procesos.
	- Proporcionar reporting ejecutivo.
- **Recursos**
	- Qué es un PMO manager y cuáles son sus funciones principales-  
	- ¿Qué es una Oficina de Gestión de Proyectos (PMO) 2025  Asana-pmo-project-management-office

---

## Procesos Esenciales de un Proyecto

### Inicio
- Identificación de stakeholders.
- Definición inicial de alcance y objetivos.
- Documentación en Confluence o Google Docs.

### Planificación
- Construcción del cronograma.
- Definición de recursos, costes y riesgos.
- Configuración del proyecto en Jira o Redmine.
- Estructurar documentación en Confluence.

### Ejecución
- Coordinación del equipo.
- Seguimiento diario o semanal.
- Comunicación a través de Slack o Workspace.

### Monitoreo y Control
- Revisión de KPIs (tiempo, coste, calidad).
- Control del burndown o Gantt.
- Gestión de riesgos e incidencias.
- Reuniones de seguimiento.

### Cierre
- Validación de entregables.
- Retrospectivas (Scrum) o lecciones aprendidas.
- Archivado de documentación.

---

## Metodologías de Trabajo

### Agile (Scrum / Kanban)
- Iterativa, incremental, colaborativa.
- Foco en entregas frecuentes.  
- Jira es la herramienta más común.

### Waterfall
- Secuencial: análisis → diseño → implementación → pruebas → entrega.
- Adecuado para proyectos con requisitos muy estables.

### Híbrida
- Combina planificación inicial sólida + iteraciones ágiles.
- Ideal para empresas en transición Agile.

---

## Integración de Herramientas en un Flujo de Trabajo

### Ejemplo de Flujo Completo
1. **Inicio y documentación** en Confluence / Google Docs.  
2. **Desglose del trabajo** y backlog en Jira o Redmine.  
3. **Comunicación diaria** por Slack.  
4. **Automatización** con Automatizacion (notificaciones, pipelines).  
5. **Dashboard de métricas** con [monitoreo](/monitoreo/monitoreo/).  
6. **Control y reporting** para la PMO.  

# Project Management — Conceptos Avanzados

## Triángulo de Proyecto (Triple Constraint)
El equilibrio entre **alcance**, **tiempo** y **coste** determina la viabilidad del proyecto.  
Cambiar uno implica ajustar los otros dos.

---

## WBS (Work Breakdown Structure)
Estructura jerárquica que desglosa el proyecto en componentes manejables.
- Facilita estimaciones.
- Sirve de base para el cronograma y asignación de recursos.
- Reduce la ambigüedad del alcance.

---

## Matriz RACI
Define roles y responsabilidades dentro del proyecto:
- **R**: Responsible – quien ejecuta.
- **A**: Accountable – quien aprueba.
- **C**: Consulted – quien aporta información.
- **I**: Informed – quien debe mantenerse al tanto.

---

## Gestión de Riesgos (Risk Management)
Proceso estructurado para tratar incertidumbres.
- Identificación sistemática.
- Análisis de probabilidad e impacto.
- Planes de mitigación.
- Planes de contingencia.
- Registro de riesgos (Risk Register).

---

## Técnicas de Estimación
Aportes esenciales para planificar esfuerzo y tiempo.
- T-Shirt sizing.
- Planning Poker.
- Puntos de historia.
- Estimación analógica.
- Estimación paramétrica.
- Three-Point / PERT.

---

## KPIs y Métricas de Rendimiento
Indicadores clave para medir la salud del proyecto.
- CPI (Cost Performance Index).
- SPI (Schedule Performance Index).
- EVA (Earned Value Analysis).
- Velocidad del equipo (Agile).
- Lead Time / Cycle Time.

---

## Governance del Proyecto
Estructuras de control y toma de decisiones.
- Comités de dirección.
- Aprobación de cambios.
- Informes ejecutivos.
- Marco de accountability.

---

## Gestión del Cambio (Change Management)
Control de modificaciones durante el proyecto.
- Change Requests.
- Evaluación de impacto.
- Aprobación bajo governance.
- Comunicación de cambios a stakeholders.

---

## Stakeholder Management Avanzado
Técnicas para mapear y gestionar interesados.
- Matriz poder/interés.
- Estrategias de influencia.
- Comunicación adaptada según stakeholder.
- Expectation management continuo.

---

## Gestión de Configuración
Mantiene control sobre artefactos y entregables.
- Control de versiones.
- Baselines.
- Registros de cambios.
- Aprobación de entregables.

---

## Soft Skills del Project Manager
Competencias que impactan directamente el éxito.
- Negociación.
- Liderazgo situacional.
- Facilitación y coaching.
- Gestión de conflictos.
- Comunicación ejecutiva.

---

## Metodologías Avanzadas
Enfoques formales para diferentes tipos de proyectos.
- **PRINCE2:** basado en procesos y control por fases.
- **PMBOK 7:** principios y dominios de desempeño.
- **SAFe:** escalado Agile para organizaciones complejas.
- **Lean Project Management:** eliminación de desperdicio y optimización del flujo.

---

## Ciclo de Vida Ampliado del Proyecto
Fases más allá del tradicional inicio–cierre:
- **Pre-Proyecto:** business case, análisis de viabilidad.
- **Ejecución y control extendido:** gestión del valor entregado.
- **Transición:** handover a operaciones.
- **Post-Proyecto:** análisis de beneficios y seguimiento del valor generado.

---

## Project Charter
Documento esencial en el inicio del proyecto.
- Objetivos.
- Alcance preliminar.
- Principales stakeholders.
- Presupuesto estimado.
- Riesgos iniciales.
- Criterios de éxito.

---

## Lecciones Aprendidas
Proceso estructurado para capturar conocimiento.
- Registro de aprendizajes.
- Clasificación por áreas (riesgos, planificación, ejecución).
- Revisión periódica.
- Incorporación a metodologías futuras.

---

## Gestión de Proveedores (Vendor Management)
Clave en proyectos con dependencias externas.
- RFP (Request for Proposal).
- Contratos T&M y Fixed Price.
- SLAs y penalizaciones.
- Control y aceptación de entregables externos.

---

## Project Budgeting
Gestión avanzada de costes.
- CAPEX vs OPEX.
- Forecasting periódico.
- Control de desviaciones.
- Ajustes en base al desempeño.

---

## Gestión de Recursos
Optimiza la capacidad del equipo y la planificación.
- Asignación y planificación de cargas.
- Control de disponibilidad.
- Resolución de conflictos entre proyectos.
- Modelos de matriz funcional.

---

# Project Management — Conceptos Experto

---

## Program Management
Gestión coordinada de múltiples proyectos relacionados para obtener beneficios estratégicos que no se lograrían de manera independiente.
- Gestión de dependencias.
- Sincronización de hitos entre proyectos.
- Control consolidado de presupuesto, riesgos y recursos.
- Priorización según impacto en el programa.

---

## Portfolio Management
Nivel más alto de gobierno de proyectos, centrado en maximizar el valor total de la organización.
- Priorización basada en valor, riesgo y estrategia.
- Balance del portafolio (riesgo/retorno).
- Revisión continua del ROI.
- Alineación con objetivos corporativos.
- Evaluación y cierre de inversiones.

---

## OKRs Aplicados a Proyectos
Integración de los objetivos estratégicos con el trabajo del proyecto.
- Definición de Objetives claros.
- Key Results medibles ligados al avance.
- Revisión trimestral.
- Trazabilidad proyecto → resultado organizacional.

---

## Análisis de Viabilidad
Validación previa al Project Charter.
- Viabilidad técnica.
- Viabilidad operativa.
- Análisis económico (NPV, ROI, Payback).
- Consideraciones legales y de compliance.

---

## Workshops y Facilitación Avanzada
Talleres colaborativos para alinear equipos y clarificar información.
- Story Mapping.
- Event Storming.
- Risk Workshops.
- Alignment Workshops.
- Kick-off estructurado con agenda y outcomes.

---

## Value Delivery Management
Enfoque centrado en maximizar el valor entregado.
- Value Planning (definir valor esperado).
- Value Tracking (medir valor entregado).
- Eliminación de desperdicio (Lean).
- Priorización basada en valor, no en esfuerzo.

---

## Modelos de Madurez Organizacional
Estructuras para evaluar el nivel de project management de una empresa.
- OPM3.
- P3M3.
- CMMI aplicado a gestión de proyectos.
- Evaluación de procesos, personas y herramientas.

---

## Project Recovery Management
Técnicas para recuperar proyectos en estado crítico.
- Diagnóstico rápido del estado real.
- Revisión del alcance y prioridades.
- Nuevo plan de recuperación.
- Ajuste de stakeholders y gobernanza.
- Control exhaustivo durante la recuperación.

---

## Expectation Management
Gestión avanzada de expectativas para evitar conflictos.
- Expectation Baseline.
- Identificación de gaps.
- Comunicación preventiva.
- Ajuste de expectativas durante el proyecto.

---

## Project Audits
Revisiones independientes del estado del proyecto.
- Auditorías metodológicas.
- Auditorías técnicas.
- Auditorías financieras.
- Auditorías de calidad y cumplimiento.

---

## Project Assurance
Supervisión formal que garantiza que el proyecto cumple estándares.
- Validación del cumplimiento metodológico.
- Revisión de riesgos, calidad y controles.
- Detección temprana de fallos estructurales.
- Asegurar la trazabilidad del proyecto.

---

## Modelos de Decisión
Frameworks para decisiones críticas dentro del proyecto.
- DACI.
- RAPID.
- Decision Logs.
- Modelos de criterios ponderados (Weighted Scoring).

---

## Cost Management Avanzado
Técnicas financieras para control de costes.
- EAC (Estimate at Completion).
- ETC (Estimate to Complete).
- ACWP / BCWP / BCWS.
- Reforecast financiero.
- Control de variaciones (VAC).

---

## Quality Management
Gestión avanzada de la calidad del proyecto.
- Plan de calidad.
- QA (Quality Assurance) vs QC (Quality Control).
- Checklists de calidad.
- Control estadístico del proceso (SPC).

---

## Critical Path y Critical Chain
Métodos avanzados de planificación temporal.
- Identificación de la ruta crítica.
- Fast Tracking y Crashing.
- CCPM (Critical Chain Project Management).
- Gestión de buffers.

---

## Comunicación Multinivel y Multicanal
Gestión estructurada de comunicaciones.
- Comunicación ejecutiva (C-level).
- Comunicación operativa (equipo).
- Comunicación con proveedores.
- Plan de comunicación por audiencia.

---

## Project Constraints Ampliadas
Restricciones más allá del triángulo clásico.
- Calidad.
- Recursos.
- Riesgo.
- Satisfacción del cliente.
- Valor entregado.

---

## Artefactos Avanzados de Proyecto
Documentos esenciales para control y trazabilidad.
- RAID Log (Risks, Assumptions, Issues, Dependencies).
- Issue Log.
- Dependency Tracker.
- Decision Log.
- Registro de supuestos del proyecto.

---
