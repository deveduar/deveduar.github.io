---
date: 2025-10-18 16:31
title: glosario de QA Avanzado
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: "true"
category: Testing
---
# Glosario de QA Avanzado
`$= dv.current().file.tags.join(" ")`
## Estrategias de Testing Avanzadas
- **Test Driven Development (TDD)**: Metodología donde las pruebas se escriben antes del código, guiando el diseño y desarrollo
- **Behavior Driven Development (BDD)**: Enfoque colaborativo que define comportamiento mediante lenguaje natural estructurado
- **Shift-Left Testing**: Integración de actividades QA en fases tempranas del ciclo de desarrollo
- **Shift-Right Testing**: Pruebas en producción y feedback continuo de usuarios reales
- **Testing Exploratorio**: Técnica no scriptada donde el tester diseña y ejecuta pruebas simultáneamente

## Automatización de QA
- **Frameworks de Automatización**: Arquitecturas como Page Object Model para mantener pruebas escalables
- **Pruebas API**: Automatización de endpoints REST, SOAP y GraphQL con herramientas como Postman, RestAssured
- **Pruebas Mobile**: Automatización para aplicaciones iOS y Android usando Appium, Espresso, XCUITest
- **Pruebas Cross-Browser**: Verificación de compatibilidad entre diferentes navegadores y versiones
- **Integración con CI/CD**: Pipeline automation con Jenkins, GitLab CI, GitHub Actions

## Gestión de Defectos
- **Clasificación de Severidad**: Critical, High, Medium, Low según impacto en funcionalidad
- **Priorización**: Urgent, High, Medium, Low basado en criterios de negocio
- **Estados del Defecto**: New, Assigned, In Progress, Resolved, Reopened, Closed
- **SLA de Resolución**: Acuerdos de nivel de servicio para tiempos de corrección
- **Análisis de Causa Raíz**: Técnicas como 5 Whys para identificar origen de problemas

## QA en Diferentes Metodologías
- **QA en Waterfall**: Proceso secuencial con fase de testing dedicada al final
- **QA en Agile**: Testing continuo integrado en cada iteración y sprint
- **QA en DevOps**: Cultura de responsabilidad compartida y automatización total
- **QA en Scrum**: Rol del QA en ceremonias y artefactos del framework
- **QA en Kanban**: Gestión del flujo de trabajo de testing con WIP limits

## Especializaciones de QA
- **QA de Seguridad**: OWASP testing, análisis de vulnerabilidades, pruebas de penetración
- **QA de Performance**: Load testing, stress testing, endurance testing, spike testing
- **QA de Accesibilidad**: WCAG compliance, screen reader testing, keyboard navigation
- **QA de Localización**: Verificación de internacionalización y adaptación cultural
- **QA de Big Data**: Validación de pipelines ETL, calidad de datos, procesamiento distribuido

## Herramientas Especializadas
- **Gestión de Pruebas**: TestRail, Zephyr, QTest para organización de casos de prueba
- **Monitoreo en Producción**: New Relic, Datadog, Dynatrace para observabilidad continua
- **Análisis Estático**: SonarQube, Checkmarx para revisión de código sin ejecución
- **Pruebas de Carga**: JMeter, Gatling, LoadRunner para simulaciones de alto tráfico
- **Virtualización de Servicios**: WireMock, Mountebank para simular dependencias externas

## Métricas Avanzadas
- **Defect Removal Efficiency**: Porcentaje de defectos encontrados antes de producción
- **Test Case Effectiveness**: Capacidad de casos de prueba para encontrar defectos
- **Requirements Traceability**: Cobertura de requisitos por casos de prueba
- **Test Automation ROI**: Retorno de inversión en automatización vs testing manual
- **Code Quality Index**: Indicador compuesto de calidad técnica del código

## Certificaciones y Estándares
- **ISTQB**: Certificación internacional en testing de software
- **ISO 25010**: Estándar internacional para calidad de productos software
- **ISO 9001**: Sistema de gestión de calidad aplicable a procesos de desarrollo
- **CMMI**: Modelo de madurez de capacidad para procesos organizacionales
- **TMMi**: Modelo de mejora del proceso de testing

## Tendencias Emergentes
- **AI en Testing**: Machine learning para generación automática de casos de prueba
- **Testing en Contenedores**: Estrategias para entornos Docker y Kubernetes
- **Observability**: Monitoreo profundo mediante logs, métricas y traces
- **Chaos Engineering**: Pruebas de resiliencia mediante inyección controlada de fallos
- **Quality Engineering**: Evolución de QA hacia enfoque de ingeniería de calidad integral