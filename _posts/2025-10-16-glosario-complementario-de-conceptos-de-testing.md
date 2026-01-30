---
date: 2025-10-16 18:21
title: Glosario Complementario de Conceptos de Testing
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: "true"
category: Testing
---
# Glosario Complementario de Conceptos de Testing

# 🧾 Glosario Complementario de Conceptos de Testing (Términos No Tratados)

> Glosario ampliado de conceptos, prácticas y herramientas complementarias al documento principal de *Testing*.  
> Se enfoca en técnicas, métricas, filosofías, herramientas emergentes y aspectos organizativos que complementan la estrategia de calidad.

---

## ⚙️ Conceptos Generales y Filosofías de Testing

### **Test Strategy**
Plan global que define el enfoque, niveles, tipos y objetivos del testing dentro de un proyecto o producto.  
Incluye herramientas, responsabilidades, entorno, tipos de pruebas y criterios de éxito.

### **Test Plan**
Documento operativo derivado de la estrategia. Describe qué, cómo y cuándo se testeará, quién lo hará y qué recursos se necesitan.

### **Test Case**
Caso específico de prueba con entradas, pasos, resultados esperados y criterios de validación.

### **Test Suite**
Conjunto estructurado de casos de prueba agrupados por funcionalidad, módulo o tipo de prueba.

### **Test Scenario**
Descripción de alto nivel de un flujo funcional que será cubierto por uno o varios casos de prueba.

### **Test Data Management (TDM)**
Gestión de los datos de prueba — creación, anonimización, refresco y versionado — para garantizar consistencia y reproducibilidad.

### **Test Environment Management (TEM)**
Administración y configuración de entornos dedicados al testing, asegurando que reflejen fielmente las condiciones de producción.

### **Test Readiness Review (TRR)**
Evaluación previa que determina si el entorno, los datos y los criterios están listos para comenzar la fase de pruebas.

---

## 🧩 Tipos y Niveles de Testing Avanzados

### **Component Testing**
Evalúa unidades funcionales más grandes que una función (por ejemplo, un módulo o componente).  
Es un nivel intermedio entre pruebas unitarias y de integración.

### **System Testing**
Validación del sistema completo como un todo integrado. Incluye funcionalidad, rendimiento, compatibilidad y seguridad.

### **Interface Testing**
Prueba de comunicación entre sistemas o componentes. Asegura que las API, endpoints o sockets funcionen correctamente.

### **Parallel Testing**
Comparación de resultados entre una versión antigua y una nueva del sistema, asegurando que las salidas no cambien inesperadamente.

### **A/B Testing**
Comparación de dos versiones de una característica (A y B) con usuarios reales o simulados para determinar cuál tiene mejor rendimiento o aceptación.

### **Monkey Testing**
Pruebas aleatorias y no estructuradas para descubrir errores inesperados mediante inputs impredecibles.

### **Ad-hoc Testing**
Pruebas exploratorias informales sin guion previo, basadas en la experiencia y curiosidad del tester.

### **Usability Testing**
Evalúa la facilidad de uso, accesibilidad y satisfacción del usuario con la interfaz y experiencia general del sistema.

### **Compatibility Testing**
Comprueba la correcta ejecución en diferentes navegadores, dispositivos, sistemas operativos o configuraciones.

### **Localization Testing**
Verifica traducciones, formatos regionales y adaptaciones culturales en software multilingüe o globalizado.

### **Smoke Testing**
Conjunto mínimo de pruebas para validar que las funcionalidades críticas del sistema funcionan antes de pasar a pruebas más profundas.

### **Sanity Testing**
Pruebas rápidas y específicas tras pequeñas modificaciones para confirmar que los errores previos fueron corregidos.

---

## 🧰 Herramientas, Integraciones y Entornos

### **CI/CD Orchestration**
Automatización del flujo de integración y entrega continua.  
Ejemplos: Jenkins, GitHub Actions, GitLab CI, CircleCI, Azure Pipelines.

### **Static Code Analysis**
Revisión automática del código fuente sin ejecutarlo, para detectar vulnerabilidades, errores o malas prácticas (ej. SonarQube, ESLint).

### **Dynamic Analysis**
Ejecución del programa en tiempo real para analizar comportamiento, consumo de recursos o errores de ejecución.

### **Artifact Repository**
Sistema de almacenamiento de builds y binarios versionados para pruebas e implementación (ej. Nexus, Artifactory).

### **Test Reporting Dashboards**
Paneles visuales que consolidan métricas de ejecución, cobertura y defectos. Ejemplo: Allure, TestRail, ReportPortal.

### **Infrastructure as Code (IaC)**
Gestión de entornos de testing mediante código reproducible (Terraform, Ansible, Pulumi).

### **Mock Servers**
Simulan APIs o microservicios externos para pruebas controladas. Ej: MSW, WireMock, JSON Server.

---

## 🧪 Métricas y Evaluación de Calidad

### **Test Coverage**
Porcentaje del código ejecutado por los tests. Se analiza por líneas, ramas, funciones o clases.

### **Defect Density**
Número de defectos detectados por módulo o línea de código. Mide la calidad relativa del software.

### **Defect Leakage**
Proporción de errores que escaparon a fases anteriores de testing y fueron encontrados en producción.

### **Mean Time to Detect (MTTD)**
Tiempo promedio entre la introducción de un defecto y su detección.

### **Mean Time to Repair (MTTR)**
Tiempo promedio necesario para corregir un defecto desde su detección.

### **Flaky Test**
Prueba no determinista que puede fallar o pasar aleatoriamente, generando falsos negativos.

### **Regression Suite**
Conjunto de pruebas que se ejecutan tras cambios en el código para asegurar que no se rompan funcionalidades existentes.

### **Test Stability Index**
Porcentaje de ejecuciones exitosas de tests a lo largo del tiempo, útil para medir la confiabilidad de los tests.

### **Bug Reopen Rate**
Porcentaje de errores reabiertos después de haberse marcado como resueltos.

---

## 🧱 Pruebas de Rendimiento, Seguridad y Resiliencia

### **Load Testing**
Evalúa el comportamiento del sistema bajo carga esperada o media, midiendo rendimiento y estabilidad.

### **Stress Testing**
Lleva el sistema más allá de sus límites para observar cómo falla y se recupera.

### **Spike Testing**
Pruebas con incrementos súbitos de carga para simular picos de tráfico.

### **Endurance Testing (Soak Testing)**
Evalúa el comportamiento del sistema bajo carga sostenida durante periodos prolongados.

### **Scalability Testing**
Verifica si el sistema mantiene el rendimiento al aumentar la carga o los recursos.

### **Failover Testing**
Comprueba la capacidad del sistema para recuperarse tras un fallo o caída de servicio.

### **Penetration Testing (Pentest)**
Simulación de ataques reales para descubrir vulnerabilidades de seguridad antes de que sean explotadas.

### **Fuzz Testing**
Envía entradas malformadas o aleatorias al sistema para detectar vulnerabilidades o errores inesperados.

---

## 🧩 Testing Organizativo y Cultural

### **Shift-Left Testing**
Estrategia que promueve integrar pruebas desde las primeras fases del desarrollo, acercando QA al diseño y la codificación.

### **Shift-Right Testing**
Extiende el testing a entornos de producción y operación (observabilidad, feature flags, feedback en tiempo real).

### **Continuous Testing**
Ejecución continua de pruebas automáticas a lo largo del pipeline de desarrollo.

### **Exploratory Testing Charter**
Documento que guía pruebas exploratorias: objetivos, áreas a investigar y criterios de finalización.

### **Defect Triage**
Proceso colaborativo donde QA, desarrollo y producto priorizan y clasifican los defectos según impacto y urgencia.

### **Test Debt**
Analogía del “technical debt” aplicada al testing: acumulación de pruebas faltantes, obsoletas o inestables.

### **Quality Gates**
Puntos de control automáticos en el pipeline que impiden avanzar si no se cumplen ciertos criterios de calidad (ej. cobertura mínima o análisis estático sin errores críticos).

---

## 🧠 Conceptos de Diseño Aplicados al Testing

### **Testability**
Medida de qué tan fácil es probar un sistema, influenciada por su arquitectura, modularidad y diseño de dependencias.

### **Observability**
Capacidad del sistema de exponer información útil para entender su estado interno mediante logs, métricas o trazas.

### **Decoupling**
Separación de componentes para facilitar el testeo aislado de cada uno (por ejemplo, mediante inyección de dependencias).

### **Dependency Injection (DI)**
Patrón que permite sustituir dependencias reales por dobles de prueba (mocks, stubs, fakes) de forma controlada.

### **Resilience Testing**
Evalúa la capacidad del sistema para resistir y recuperarse de fallos de hardware, red o software.

---

## 🧮 Pruebas Especializadas

### **Database Testing**
Evalúa consultas, triggers, índices y consistencia de datos en entornos de base de datos reales o simulados.

### **Configuration Testing**
Prueba el sistema bajo diferentes combinaciones de configuraciones para asegurar estabilidad.

### **Compliance Testing**
Garantiza el cumplimiento de estándares regulatorios (ISO, GDPR, PCI-DSS, etc.).

### **Accessibility Compliance**
Evalúa conformidad con estándares WCAG, ARIA y normativas de accesibilidad web.

### **Data Integrity Testing**
Comprueba que los datos no se pierdan, corrompan o modifiquen indebidamente durante los procesos.

### **Version Compatibility Testing**
Verifica compatibilidad con diferentes versiones de dependencias, librerías o navegadores.

---

## 📚 Recursos y Buenas Prácticas

### **Test Design Techniques**
Técnicas como equivalence partitioning, boundary value analysis, decision tables, y state transition testing.

### **Heuristic Evaluation**
Uso de principios empíricos para identificar posibles errores en la interfaz o flujo.

### **Bug Taxonomy**
Clasificación sistemática de defectos por tipo, severidad, impacto o componente afectado.

### **Retrospectivas QA**
Revisión periódica de la estrategia de testing, identificando oportunidades de mejora continua.

---

> **Sugerencia:** Vincular esta nota a la principal mediante `[Testing](/testing/testing/)` y añadir etiquetas:
> `#glosario #testing #QA #calidad #metodologias`
