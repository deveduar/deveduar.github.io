---
date: 2025-10-16 18:18
title: glosario de terminos de testing de nota principal
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: "true"
category: Testing
tags:
  - Testing
---
# glosario de terminos de testing principal
`$= dv.current().file.tags.join(" ")`

# 🧠 Glosario de Términos de Testing

> Compilación de definiciones, conceptos clave, metodologías y herramientas relacionadas con el testing de software, QA y CI/CD.  
> Referencia cruzada con la nota principal `[Testing](/testing/testing/)`.

---

## ⚙️ Ecosistema y Entornos

### **DevOps**
Cultura y conjunto de prácticas que integran desarrollo (Dev) y operaciones (Ops) para automatizar y mejorar los procesos de entrega continua (CI/CD). Promueve la colaboración, la automatización y la observabilidad.

### **CI/CD (Continuous Integration / Continuous Deployment)**
Pipeline automatizado que compila, ejecuta tests y despliega el código de forma continua.  
- **CI (Integración continua):** verifica que cada commit sea válido.  
- **CD (Entrega/Despliegue continuo):** automatiza la entrega a entornos de staging o producción.

### **Staging Environment**
Entorno intermedio entre desarrollo y producción usado para validar cambios en condiciones casi reales antes del despliegue final.

### **Arquitectura y System Design**
Diseño de alto nivel del sistema (módulos, servicios, dependencias) que influye en la estrategia de testing y aislamiento de componentes.

### **Mocks (MSW)**
Técnica para simular dependencias externas (APIs, servicios, DB).  
- **MSW (Mock Service Worker):** intercepta peticiones HTTP en tests para devolver respuestas simuladas.

### **Profiler**
Herramienta que mide el rendimiento del código (uso de CPU, memoria, tiempos de ejecución) para detectar cuellos de botella.

### **Debugger**
Utilidad que permite inspeccionar el estado del programa durante la ejecución paso a paso, detectar errores y comprender el flujo.

### **Linter**
Herramienta que analiza el código fuente para identificar errores de estilo, sintaxis o prácticas inseguras.  
Ejemplo: `ESLint`, `Prettier`.

### **Monitoring Feedback Loop**
Ciclo continuo de mejora entre testing, despliegue y observación en producción. Permite ajustar el código en base a métricas reales.

---

## 🤖 Test Automation, CI/CD y DevOps

### **Test Automation**
Uso de herramientas y scripts para ejecutar pruebas sin intervención manual.  
Permite repetir validaciones y acelerar los ciclos de desarrollo.

### **Scaffolding Tests**
Generación automática de plantillas de pruebas (tests base) al crear módulos o componentes. Común en frameworks CLI (Angular, Nest, etc.).

### **Plugins de Testing**
Extensiones o librerías que facilitan la integración de pruebas en pipelines o IDEs. Ejemplo: Jest Plugin, Cypress Dashboard.

### **Build Automation**
Proceso automatizado de compilación, ejecución de pruebas y empaquetado del código. Se usa en pipelines CI/CD.

### **Feature Flags**
Mecanismo que habilita o deshabilita funcionalidades en tiempo real sin necesidad de redeploy. Facilita pruebas A/B y despliegues controlados.

### **Canary Releases**
Despliegues graduales a un subconjunto de usuarios o servidores antes de la publicación completa, para detectar errores en entornos reales.

---

## 💡 Metodologías, Estrategias y Prácticas

### **TDD (Test Driven Development)**
Metodología en la que los tests se escriben antes del código funcional.  
Ciclo: *Red → Green → Refactor.*

### **BDD (Behavior Driven Development)**
Extensión de TDD enfocada en el comportamiento observable del sistema, usando lenguaje natural (ej. *Given-When-Then*).

### **E2E (End-to-End Testing)**
Pruebas que validan todo el flujo de usuario desde la interfaz hasta la base de datos.

### **Testing Pyramid**
Modelo que sugiere más tests unitarios que integraciones o E2E, priorizando eficiencia y mantenimiento.

### **Testing Trophy**
Enfoque moderno (Kent C. Dodds) que equilibra la pirámide con más peso en pruebas de integración y menos en E2E.

### **Regression Testing**
Garantiza que nuevas versiones no rompan funcionalidades existentes.

### **Exploratory Testing**
Pruebas manuales sin casos predefinidos. Se basa en la experiencia del tester para encontrar fallos inesperados.

### **Acceptance Testing (UAT)**
Validación realizada por el cliente o negocio para asegurar que el sistema cumple los requisitos funcionales.

### **Snapshot Testing**
Compara salidas actuales con versiones guardadas previamente (snapshots) para detectar cambios involuntarios.

### **Smoke Testing**
Pruebas rápidas que verifican si el sistema arranca y las funciones básicas operan correctamente.

### **Sanity Testing**
Validación superficial después de cambios menores, para confirmar que no se introdujeron errores evidentes.

### **Agile Testing**
Práctica de testing continua dentro de ciclos ágiles. Se enfoca en la colaboración y el feedback inmediato.

---

## 🧩 Tipos de Pruebas y Frameworks

### **Unit Test**
Validan funciones o métodos individuales en aislamiento.  
Ejemplo: probar `sum(a,b)` retorna el valor esperado.

### **Integration Test**
Verifican la interacción entre módulos (ej. backend + DB).  
Aseguran que los componentes colaboren correctamente.

### **Contract Testing**
Comprueba que los microservicios cumplen los contratos de comunicación esperados.  
Ejemplo: herramienta `Pact`.

### **Service Virtualization**
Simula servicios externos o dependencias complejas (bases de datos, APIs). Ej: `WireMock`, `Hoverfly`.

### **Testcontainers**
Crea entornos efímeros con Docker para pruebas realistas (DB, Redis, Kafka).

### **Docker Compose**
Permite ejecutar múltiples servicios en conjunto para pruebas de integración locales.

### **E2E Testing Tools**
- **Cypress:** framework rápido para tests E2E de frontend.  
- **Playwright:** alternativa moderna, multibrowser.  
- **Selenium:** automatización tradicional de navegadores.

### **API Testing**
Validan endpoints y respuestas de APIs REST.  
Herramientas: `Postman`, `Newman`, `REST Assured` (Java).

---

## 💻 Frontend y Visual Testing

### **Screenshot Testing**
Captura imágenes del resultado visual del componente y las compara para detectar cambios.

### **Visual Regression Testing**
Detecta diferencias visuales entre versiones. Ej: `Percy`, `Applitools`.

### **Accessibility Testing**
Evalúa el cumplimiento de estándares de accesibilidad (WCAG).  
Herramientas: `axe-core`, `Lighthouse CI`.

### **Storybook**
Entorno aislado para desarrollar y testear componentes UI.

### **Vitest**
Framework ultrarrápido de testing para proyectos con Vite.

### **Testing Library**
Ecosistema moderno de testing enfocado en la experiencia del usuario (React, Angular, Vue).

### **Supertest**
Framework para testear endpoints HTTP en Node.js.

### **Nock**
Permite hacer mocking de peticiones HTTP en tests de Node.

---

## 🧰 QA, Monitoreo y Cobertura

### **QA (Quality Assurance)**
Proceso que asegura la calidad del software mediante planificación, ejecución de pruebas, análisis y reporting.

### **Legacy Code Testing**
Introducir pruebas gradualmente en código antiguo sin tests.

### **Production Validation**
Pruebas o monitoreo en producción para validar comportamiento real post-deploy.

### **Logging y Métricas**
Recolección de datos de ejecución, errores y tiempos para análisis posterior.

### **Benchmark Testing**
Evalúa la duración o eficiencia de funciones específicas.

### **Performance Testing**
Mide el rendimiento general bajo carga. Ej: `JMeter`, `k6`.

### **Load Testing**
Evalúa la respuesta del sistema ante usuarios concurrentes.

### **Stress Testing**
Mide la estabilidad del sistema ante condiciones extremas.

### **Chaos Testing**
Simula fallos deliberados para evaluar la resiliencia (ej. Gremlin).

### **Security Testing**
Identifica vulnerabilidades (OWASP ZAP, Burp Suite).

### **Allure Report**
Herramienta de informes visuales de resultados de pruebas.

### **TestRail / Xray**
Plataformas de gestión de casos de prueba, trazabilidad y reporting.

### **SonarQube**
Analiza la calidad, mantenibilidad y seguridad del código fuente (análisis estático).

### **Coveralls / Codecov**
Miden la cobertura de código (porcentaje de líneas probadas por tests).

### **Mutation Testing**
Evalúa la calidad de los tests alterando el código (mutaciones) para comprobar si los tests detectan errores.  
Ej: `StrykerJS`, `PIT`.

---

## 🔄 Patrones de Dependencias y Dobles de Test

### **Test Doubles**
Objetos o componentes simulados usados para aislar partes del sistema bajo prueba.

#### **Stub**
Componente simple que devuelve valores predefinidos sin lógica interna.  
Ejemplo: devolver un usuario simulado.

#### **Mock**
Objeto que valida interacciones: cuántas veces se llamó un método, con qué parámetros, etc.  
Ejemplo: mock de envío de correo.

#### **Fake**
Implementación funcional simplificada usada en lugar de una dependencia real (DB en memoria, servicio local, etc.).  
Ejemplo: fake de inventario.

---

## 📊 Herramientas Complementarias

- **JMeter:** herramienta clásica de carga y rendimiento.  
- **k6:** alternativa moderna (JavaScript).  
- **Lighthouse:** mide performance, SEO y accesibilidad.  
- **OWASP ZAP / Burp Suite:** seguridad y pentesting automatizado.  
- **ESLint / Prettier:** linting y formateo.  
- **Allure / Jest Docs:** generación de documentación automática de tests.

---

## 📘 Conceptos Clave

- **Border Cases:** entradas límite o valores extremos que prueban la robustez.  
- **Use Cases:** escenarios funcionales que reflejan casos de uso reales.  
- **Feature Flag:** control de visibilidad de funciones en entornos específicos.  
- **Build:** proceso de compilación y empaquetado de código.  
- **Pipeline:** secuencia automatizada de pasos de integración, test y despliegue.  
- **Refactoring:** reestructuración del código sin alterar su comportamiento observable.  
- **Repository Pattern:** patrón para desacoplar acceso a datos de la lógica del negocio.  
- **Time-based Test:** prueba que depende del tiempo (ej. expiración de tokens).  

---

> **Referencia cruzada:** [Testing](/testing/testing/), [CICD](/devops/cicd/), [QA](/testing/qa/), [devops](/uncategorized/devops/), Automation, [BDD](/testing/bdd/), [TDD - Test Driven Development](/testing/tdd---test-driven-development/), [E2E - End to End Testing](/testing/e2e---end-to-end-testing/), SonarQube, Coveralls Docs-, [JMeter](/testing/jmeter/), Cypress, [Playwright](/testing/playwright/), Testing Library, [MSW Mocks service worker](/testing/msw-mocks-service-worker/), Testcontainers.
