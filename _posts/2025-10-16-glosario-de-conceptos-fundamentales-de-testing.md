---
date: 2025-10-16 18:28
title: Glosario de Conceptos Fundamentales de Testing
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: "true"
category: Testing
---
# Glosario de Conceptos Fundamentales de Testing
`$= dv.current().file.tags.join(" ")`

# 🧩 Glosario de Conceptos Fundamentales de Testing (Complementario Final)

> Este glosario completa los anteriores reuniendo **conceptos esenciales** que aún no se habían tratado directamente.  
> Abarca fundamentos, tipologías básicas, ciclos, documentación, herramientas y roles, para consolidar una visión global del *Testing de Software*.

---

## 🧱 Fundamentos del Testing

### **Definición de Testing**
Proceso sistemático de ejecución y evaluación de un sistema para verificar que cumple con los requisitos especificados y detectar defectos antes de su liberación.

### **Error, Defecto y Falla**
- **Error:** Equivocación humana durante el desarrollo.  
- **Defecto (bug):** Manifestación técnica del error en el código.  
- **Falla (failure):** Comportamiento incorrecto del sistema al ejecutarse.

### **Objetivos del Testing**
- Detectar defectos antes de llegar al usuario.  
- Verificar conformidad con los requisitos.  
- Aumentar la confianza en la calidad del producto.  
- Prevenir futuros fallos mediante aprendizaje continuo.

### **Ciclo de Vida del Testing (STLC)**
Etapas estructuradas del proceso de pruebas:
1. Análisis de requerimientos  
2. Planificación del testing  
3. Diseño de casos de prueba  
4. Configuración del entorno  
5. Ejecución de pruebas  
6. Reporte de resultados y defectos  
7. Cierre y documentación final

---

## 🔍 Tipos de Testing por Nivel

### **Unit Testing**
Verifica el funcionamiento de componentes o funciones individuales.  
Ejemplo: Jest, Mocha, JUnit.

### **Integration Testing**
Comprueba la interacción entre varios módulos o servicios.

### **System Testing**
Evalúa el sistema completo en un entorno controlado.

### **Acceptance Testing**
Validación funcional final antes del lanzamiento (por el cliente o usuario).

### **Regression Testing**
Asegura que los cambios recientes no han roto funcionalidades existentes.

### **Smoke Testing**
Conjunto mínimo de pruebas rápidas para validar que una build es estable.

### **Sanity Testing**
Pruebas focalizadas tras pequeños cambios o correcciones.

---

## 🧩 Tipos de Testing por Propósito

### **Functional Testing**
Valida las funciones descritas en los requisitos del producto.

### **Non-Functional Testing**
Evalúa atributos como rendimiento, seguridad, usabilidad o compatibilidad.

### **Performance Testing**
Mide velocidad, estabilidad y capacidad de respuesta bajo carga.

### **Load Testing**
Evalúa el rendimiento bajo una carga de usuarios esperada.

### **Stress Testing**
Prueba los límites del sistema con cargas superiores a las normales.

### **Usability Testing**
Determina la facilidad de uso y comprensión por parte de usuarios reales.

### **Compatibility Testing**
Verifica comportamiento en distintos navegadores, dispositivos o sistemas.

### **Localization Testing**
Asegura que el sistema funciona correctamente con distintos idiomas y formatos regionales.

---

## ⚙️ Técnicas de Diseño de Pruebas

### **Black Box Testing**
Se evalúan las entradas y salidas del sistema sin conocer su código interno.

### **White Box Testing**
El tester conoce la estructura interna del código y diseña pruebas basadas en ella.

### **Gray Box Testing**
Combinación de las dos anteriores, con conocimiento parcial del sistema.

### **Equivalence Partitioning**
Divide los datos de entrada en grupos equivalentes para reducir casos redundantes.

### **Boundary Value Analysis**
Evalúa los límites superior e inferior de los valores de entrada.

### **Decision Table Testing**
Usa tablas de decisiones para probar combinaciones de condiciones y acciones.

### **State Transition Testing**
Evalúa el comportamiento del sistema ante cambios de estado.

---

## 🧪 Tipos de Automatización

### **Automated Testing**
Uso de herramientas y scripts para ejecutar pruebas repetitivas sin intervención manual.

### **Manual Testing**
Ejecutado por personas sin herramientas automatizadas, centrado en usabilidad y exploración.

### **Continuous Testing**
Integración de pruebas automatizadas en cada fase del desarrollo (parte esencial de CI/CD).

### **Regression Automation**
Automatización específica de regresión para verificar estabilidad continua.

### **Data-Driven Testing**
Los datos de entrada se parametrizan desde archivos externos (CSV, JSON, DB).

### **Keyword-Driven Testing**
Las pruebas se definen a partir de palabras clave que representan acciones o verificaciones.

---

## 🧠 Roles y Responsabilidades

### **Tester / QA Engineer**
Diseña, ejecuta y documenta pruebas, reporta defectos y valida correcciones.

### **Test Lead / QA Lead**
Coordina actividades de testing, define estrategias y supervisa métricas.

### **Test Architect**
Diseña la arquitectura de automatización y herramientas de testing.

### **SDET (Software Development Engineer in Test)**
Desarrollador con enfoque en pruebas automatizadas e infraestructura de QA.

### **UAT Tester (User Acceptance Tester)**
Usuario final que valida el producto antes del lanzamiento.

---

## 🧩 Documentación de Testing

### **Test Plan**
Documento maestro que define el alcance, estrategia, objetivos y recursos del proceso de prueba.

### **Test Case**
Conjunto estructurado de pasos, datos y resultados esperados.

### **Test Suite**
Agrupación de casos de prueba relacionados que se ejecutan juntos.

### **Test Scenario**
Descripción general de una funcionalidad a probar.

### **Test Data**
Datos reales o simulados utilizados para ejecutar las pruebas.

### **Defect Report**
Informe formal que describe un defecto encontrado, su impacto y pasos de reproducción.

### **Test Summary Report**
Documento final que resume el esfuerzo, cobertura, resultados y conclusiones del testing.

---

## 🧩 Entornos y Configuración

### **Test Environment**
Entorno técnico donde se ejecutan las pruebas, con configuraciones y dependencias controladas.

### **Staging Environment**
Clon de producción usado para pruebas finales antes del despliegue real.

### **Test Bed**
Conjunto de hardware, software y datos configurados para pruebas específicas.

### **Test Harness**
Infraestructura o conjunto de scripts que automatizan la ejecución de pruebas.

---

## 📈 Métricas Clave en Testing

- **Coverage:** Porcentaje de código o requisitos cubiertos por las pruebas.  
- **Defect Density:** Número de defectos por tamaño del módulo o línea de código.  
- **Mean Time to Detect (MTTD):** Tiempo promedio en descubrir un fallo.  
- **Mean Time to Repair (MTTR):** Tiempo promedio en corregirlo.  
- **Pass Rate:** Porcentaje de pruebas superadas.  
- **Reopen Rate:** Frecuencia con la que defectos cerrados vuelven a abrirse.  
- **Test Execution Progress:** Seguimiento del avance de las ejecuciones planificadas.

---

## 🧰 Herramientas Clásicas y Populares

### **Testing Unitario**
Jest, Mocha, JUnit, NUnit, Pytest.

### **Automatización de UI**
Selenium, Playwright, Cypress, Puppeteer.

### **API Testing**
Postman, Newman, Rest Assured, Karate.

### **Performance Testing**
JMeter, Gatling, K6, Locust.

### **Gestión de Casos**
TestRail, Zephyr, Qase, Xray.

### **Gestión de Bugs**
Jira, Bugzilla, MantisBT.

### **CI/CD Integrado**
GitHub Actions, Jenkins, GitLab CI, CircleCI.

---

## 📚 Principios Fundamentales del Testing

1. **El testing muestra la presencia de defectos, no su ausencia.**  
2. **Las pruebas exhaustivas son imposibles.**  
3. **El testing debe comenzar temprano.**  
4. **Los defectos se agrupan en áreas específicas.**  
5. **El efecto pesticida obliga a revisar y actualizar las pruebas.**  
6. **El testing depende del contexto.**  
7. **La ausencia de errores no implica que el sistema sea útil.**

---

> **Nota:** Este glosario complementa los anteriores (`Glosario Avanzado` y `Glosario de Conceptos de Testing`) y puede servir como base para una nota de referencia general.  
> **Etiquetas recomendadas:** `#testing #QA #fundamentos #automatizacion #STLC #ISTQB #quality-assurance`
