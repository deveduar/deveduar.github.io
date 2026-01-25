---
date: 2025-10-16 18:25
title: Glosario Avanzado de Testing
tags:
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
cssclasses:
public_note: "true"
category: hide-embedded-header1
categories:
  - hide-embedded-header1
  - Testing
---
# Glosario Avanzado de Testing
`$= dv.current().file.tags.join(" ")`

# 🧠 Glosario Avanzado de Testing (Tercera Parte)

> Esta nota amplía los glosarios previos de *Testing*, abordando conceptos especializados, prácticas modernas, enfoques organizativos, técnicas cognitivas, métricas psicológicas y automatización inteligente en QA.  
> Su propósito es ofrecer una comprensión completa del ecosistema contemporáneo del testing más allá de los fundamentos.

---

## ⚙️ Conceptos Estratégicos y Avanzados

### **Test Governance**
Marco de gestión que define políticas, procesos y roles de QA en la organización.  
Incluye control de versiones, auditorías, trazabilidad y métricas de calidad.

### **Quality Engineering (QE)**
Evolución del QA tradicional: enfoque preventivo donde la calidad se diseña desde el inicio, integrando automatización, datos y métricas continuas.

### **Quality Assistance**
Modelo donde los desarrolladores son responsables de la calidad con apoyo de especialistas QA, promoviendo autonomía y cultura compartida.

### **Quality Culture**
Práctica organizativa que promueve responsabilidad colectiva por la calidad del producto, no limitada al equipo QA.

### **Defect Prevention**
Estrategia proactiva para evitar defectos mediante buenas prácticas de desarrollo, revisiones de código y diseño orientado a pruebas.

### **Continuous Quality**
Integración permanente de la evaluación de calidad en cada etapa del ciclo de vida del software (planificación, desarrollo, despliegue y operación).

---

## 🤖 Testing Inteligente y Basado en Datos

### **AI-Powered Testing**
Uso de inteligencia artificial y machine learning para generar casos de prueba, detectar anomalías, priorizar suites o predecir fallos.

### **Model-Based Testing (MBT)**
Diseño automático de pruebas a partir de modelos formales del sistema (diagramas de estados, flujos o reglas de negocio).

### **Risk-Based Testing (RBT)**
Asignación de esfuerzo de prueba proporcional al riesgo o impacto potencial de cada módulo.

### **Predictive Quality Analytics**
Uso de datos históricos y métricas para anticipar áreas del sistema más propensas a fallos.

### **Anomaly Detection Testing**
Monitoreo automatizado para detectar comportamientos inusuales en métricas de rendimiento, consumo o logs.

### **Self-Healing Tests**
Pruebas automatizadas que se ajustan dinámicamente ante cambios en el entorno, UI o dependencias (por ejemplo, actualizando selectores en UI tests).

### **Test Optimization**
Selección dinámica de subconjuntos de pruebas relevantes según cambios en el código (por cobertura, historial o riesgo).

---

## 🧩 Testing en Contextos Modernos

### **Microservices Testing**
Estrategia para sistemas distribuidos: pruebas de contrato, integración parcial, resiliencia y observabilidad entre servicios.

### **Serverless Testing**
Validación de funciones en la nube sin servidor (ej. AWS Lambda, Cloud Functions), considerando tiempos de ejecución, cold starts y permisos.

### **Containerized Testing**
Ejecución de pruebas en entornos Docker reproducibles, útiles para CI/CD y aislamiento.

### **Cloud-Native Testing**
Pruebas diseñadas para sistemas desplegados en entornos Kubernetes o multicloud, integrando monitoreo y resiliencia.

### **Edge Testing**
Validación en entornos perimetrales (edge computing) donde la latencia, desconexión y sincronización son factores críticos.

### **IoT Testing**
Evaluación de dispositivos conectados, redes, firmware y protocolos de comunicación (MQTT, CoAP, BLE).

---

## 🧱 Testing de Infraestructura y Configuración

### **Infrastructure Testing**
Valida la configuración y despliegue de servidores, redes, balanceadores y servicios mediante herramientas como Terraform o Ansible.

### **Configuration Drift Testing**
Detecta desviaciones entre entornos configurados automáticamente (por ejemplo, staging vs producción).

### **Backup & Recovery Testing**
Evalúa procesos de respaldo y restauración ante pérdida o corrupción de datos.

### **Disaster Recovery Testing**
Pruebas planificadas para validar la continuidad operativa frente a fallos críticos o interrupciones totales.

### **Failback Testing**
Verifica que el sistema puede volver a su estado primario tras un failover o recuperación.

---

## 💡 Técnicas Cognitivas y Humanas en Testing

### **Error Guessing**
Basado en la experiencia del tester para adivinar áreas propensas a errores.

### **Exploratory Chartering**
Diseño intencional de sesiones exploratorias con objetivos específicos, registrando hallazgos y riesgos.

### **Cognitive Bias Testing**
Identifica cómo los sesgos humanos (por ejemplo, familiaridad o confirmación) pueden afectar la efectividad del testing.

### **Session-Based Test Management (SBTM)**
Estructura de pruebas exploratorias con sesiones cronometradas, objetivos definidos y reportes cualitativos.

### **Heuristic Testing**
Uso de reglas prácticas o principios generales para encontrar defectos sin guiones rígidos.

### **Pair Testing**
Dos personas (usualmente un QA y un dev) testean juntas, combinando perspectivas técnicas y funcionales.

### **Bug Advocacy**
Habilidad para comunicar un defecto con evidencia, contexto y argumentación convincente para su corrección prioritaria.

---

## 📊 Métricas Psicológicas y de Eficiencia del Testing

### **Defect Removal Efficiency (DRE)**
Porcentaje de defectos eliminados antes de llegar a producción.  
Indicador de la efectividad global del proceso de testing.

### **Test Case Effectiveness**
Proporción de casos de prueba que detectan al menos un defecto relevante.

### **Defect Clustering**
Tendencia de los errores a concentrarse en módulos o funcionalidades específicas.

### **Error Seeding**
Inserción intencional de defectos para medir la eficacia de detección del equipo de testing.

### **Test Execution Velocity**
Número de pruebas ejecutadas y validadas por unidad de tiempo.

### **Defect Arrival Rate**
Frecuencia con la que se descubren defectos durante el ciclo de pruebas, útil para estimar estabilidad del sistema.

---

## 🧰 Testing de Integración Continua y Operaciones

### **Pipeline Testing**
Verificación del propio flujo CI/CD, asegurando que los pasos de build, deploy y test sean correctos.

### **Canary Testing**
Liberación controlada de una nueva versión a un subconjunto de usuarios reales para validar comportamiento antes del despliegue total.

### **Blue-Green Deployment Testing**
Pruebas entre entornos paralelos (azul y verde) que facilitan el rollback sin interrupciones.

### **Shadow Deployment**
Ejecución de la nueva versión en paralelo sin afectar usuarios reales, observando métricas y errores.

### **Rollback Testing**
Verifica que las versiones anteriores se restauran correctamente tras una reversión.

### **Feature Monitoring Testing**
Integración entre observabilidad y QA: validar métricas de comportamiento y errores después de activar una nueva funcionalidad.

---

## 🔄 Testing en Arquitecturas Emergentes

### **Event-Driven Testing**
Pruebas basadas en eventos y colas (Kafka, RabbitMQ), validando la consistencia, orden y entrega de mensajes.

### **API Contract Evolution Testing**
Verifica la compatibilidad de versiones de APIs con clientes antiguos (backward compatibility).

### **Chaos Engineering**
Introducción intencional de fallos para evaluar la resiliencia del sistema en producción.

### **Observability Testing**
Pruebas que validan la trazabilidad, logging y alertas adecuadas para diagnóstico efectivo.

### **Digital Twin Testing**
Simulación virtual del sistema físico para probar comportamientos sin riesgos reales (especialmente en IoT o industria 4.0).

---

## 🧮 Testing de Seguridad y Cumplimiento Avanzado

### **Threat Modeling**
Análisis sistemático de amenazas potenciales antes del desarrollo o pruebas.

### **Security Regression Testing**
Garantiza que las correcciones de seguridad no generen nuevas vulnerabilidades.

### **Privacy Testing**
Evalúa cumplimiento con normativas de privacidad (GDPR, HIPAA) y manejo correcto de datos personales.

### **API Fuzzing**
Variación masiva y aleatoria de parámetros API para descubrir vulnerabilidades no documentadas.

### **Zero Trust Validation**
Pruebas que aseguran políticas de acceso y autenticación continua dentro de arquitecturas *Zero Trust*.

---

## 🧩 Testing Organizativo, Escalable y Evolutivo

### **Test Orchestration**
Gestión de múltiples suites, entornos y pipelines distribuidos mediante orquestadores centralizados.

### **Cross-Browser & Cross-Device Matrix**
Matriz de compatibilidad que define combinaciones mínimas de navegadores y dispositivos a validar.

### **Distributed Testing**
Ejecución de tests en paralelo sobre múltiples máquinas para optimizar tiempos y cargas.

### **Test Environment Virtualization**
Simulación completa de entornos (servidores, redes, dependencias) mediante virtualización o contenedores.

### **TestOps**
Enfoque que fusiona QA con DevOps, priorizando automatización, trazabilidad, métricas y feedback continuo.

### **Test Data Virtualization**
Generación de datos sintéticos o clonados a partir de fuentes reales sin exponer información sensible.

---

## 📘 Buenas Prácticas Avanzadas y Principios Éticos

### **Ethical Testing**
Aplicación de principios éticos al diseño y ejecución de pruebas, especialmente en IA, datos personales y comportamiento de usuario.

### **Dark Launch Testing**
Liberación oculta de características a subconjuntos internos o invisibles al usuario para medir estabilidad.

### **Progressive Rollout**
Despliegue incremental basado en métricas en tiempo real y feedback de usuarios.

### **Test Architecture**
Diseño estructural de cómo se organizan, ejecutan y mantienen las pruebas dentro del sistema.

### **Knowledge Sharing in QA**
Práctica de documentación continua, pairing y comunidades internas de calidad dentro del equipo.

---

> **Tip:** Relacionar esta nota con `Glosario Complementario de Testing` y `[Testing](/testing/testing/)`  
> Etiquetas sugeridas: `#testing #QA #automatizacion #inteligencia-artificial #devops #quality-engineering`
