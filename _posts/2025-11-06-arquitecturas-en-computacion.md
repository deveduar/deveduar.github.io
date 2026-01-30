---
date: 2025-11-06 22:07
title: arquitecturas en computacion
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: "true"
category: Computer Science
tags:
  - CS
  - computer_Science
---
# Arquitecturas en Computación

- [Computer Science](/computer%20science/computer-science/)
- sistemas federados ibm
## Arquitectura Hexagonal
También conocida como *Ports and Adapters*, busca aislar la lógica del negocio del mundo exterior (interfaces, bases de datos, frameworks).

- **Ports**  
	- Interfaces definidas dentro del dominio que representan puntos de entrada/salida.  
	- El dominio no depende de implementaciones concretas, solo de las interfaces.
- **Adapters**  
	- Implementaciones concretas que conectan el dominio con el mundo externo (UI, DB, APIs).  
	- Permiten intercambiar frameworks o tecnologías sin modificar el núcleo.
- **Dominio / Negocio**  
	- Contiene las reglas del negocio, entidades, casos de uso.  
	- Totalmente independiente de infraestructura.
- **Desacoplamiento**  
	- Permite testear el dominio sin infraestructura real.  
	- Favorece la mantenibilidad, escalabilidad y sustitución de dependencias.

---

## Cliente / Servidor
Modelo base de comunicación en red donde:
- **Cliente** solicita recursos o servicios.  
- **Servidor** los provee, gestiona y responde.  
Usado en la mayoría de sistemas distribuidos, desde aplicaciones web hasta bases de datos.

---

## [serverless](/backend/serverless/)
Arquitectura donde el despliegue y escalado del servidor son gestionados por el proveedor (AWS Lambda, Azure Functions, GCP Functions).  
- Se paga por ejecución, no por infraestructura.  
- Favorece microservicios desacoplados y event-driven.  
- Ideal para funciones aisladas y tareas reactivas.  
- Integra bien con colas, eventos, y flujos de datos asincrónicos.

---

## Component Driven Design
Diseño centrado en componentes reutilizables e independientes.  
- Facilita el mantenimiento y la escalabilidad.  
- Cada componente tiene su propio estado, lógica y estilo.  
- Popular en frontends (React, Vue) y en sistemas modulares backend.

---

## Arquitectura Orientada a Eventos
Diseño basado en la emisión, recepción y reacción a **eventos**.

- **Command Query Responsibility Segregation (CQRS)**  
	- Separa las operaciones de lectura (Query) y escritura (Command) para optimizar rendimiento y coherencia.
- **Event Sourcing**  
	- En lugar de almacenar estados finales, se almacenan todos los eventos que llevaron a ese estado.  
	- Permite reconstruir el estado y mantener historial.
- **Arquitectura basada en eventos-**  
	- Usa colas, topics o buses de eventos para comunicar microservicios.
- **[inngest](/data%20science/inngest/)**  
	- Ejemplo moderno de plataforma para flujos event-driven serverless.

---

## Arquitectura en Capas (Layered)
Separación lógica de responsabilidades por capas.

- **3-Layer Architecture**  
	- **Presentación**: interfaz de usuario o API.  
	- **Negocio**: lógica de aplicación.  
	- **Datos**: acceso y persistencia.
- Aísla dependencias y permite probar cada capa de forma independiente.  
- Base de muchos frameworks tradicionales.

---

## [microservicios](/backend/microservicios/)
Arquitectura distribuida donde cada servicio es independiente y especializado en una función.

- **Saga Pattern**  
	- Coordina transacciones distribuidas mediante eventos y compensaciones en caso de error.  
	- Evita bloqueos de recursos entre servicios.
- **Transacciones Distribuidas**  
	- Mantienen la consistencia eventual en entornos descentralizados.  
	- Usan mensajes, colas y mecanismos de compensación.

---

## ECS (Entity Component System)
Patrón común en GameDev y sistemas de simulación.  
- **Entity**: identificador único sin lógica.  
- **Component**: datos o propiedades que describen la entidad.  
- **System**: lógica que actúa sobre componentes.  
Promueve la composición sobre la herencia, maximizando la flexibilidad y el rendimiento.

---

## Pages y Filters
Modelo derivado de arquitecturas web.  
- **Pages** representan controladores o vistas.  
- **Filters** permiten aplicar transformaciones o validaciones transversales (autenticación, logging, caching).  
Similar a middleware o pipelines.

---

## Arquitectura Monolítica
- Toda la aplicación en un único bloque.  
- Simplicidad inicial y despliegue rápido.  
- Dificulta la escalabilidad y evolución modular.  
Puede ser una buena opción para MVPs o sistemas pequeños.

---

## onion architecture
Variante de la arquitectura hexagonal, centrada en un **dominio núcleo**.

- **Dominio Núcleo**  
	- Entidades, casos de uso, lógica pura.  
- **Capas Concéntricas**  
	- Cada capa depende solo de la anterior hacia el centro.  
- **Dependencias**  
	- Las capas externas (UI, infraestructura) dependen del dominio, nunca al revés.  
- **Casos de Uso**  
	- Menor complejidad que *Clean Architecture*, pero con similar separación.

---

## Principios Fundamentales
- **YAGNI (You Aren’t Gonna Need It)**  
	- No implementes funcionalidad hasta que sea necesaria.
- **DRY (Don’t Repeat Yourself)**  
	- Evita duplicación de lógica o datos.
- **KISS (Keep It Simple, Stupid)**  
	- Prefiere soluciones simples y claras sobre diseños innecesariamente complejos.

# Arquitecturas en Computación — Expansión y Conceptos Avanzados

## Clean Architecture
Evolución de onion architecture y arquitectura hexagonal que enfatiza la **independencia total del dominio** frente a frameworks, bases de datos o interfaces.

- **Capas**  
	- **Entities (Dominio puro)**: reglas de negocio, invariantes.  
	- **Use Cases (Aplicación)**: coordinan el flujo entre entidades e interfaces.  
	- **Interface Adapters**: transforman datos entre capas.  
	- **Frameworks & Drivers**: infraestructura, UI, bases de datos.
- **Dependencias**  
	- Siempre apuntan hacia el dominio.  
	- Nada fuera puede afectar su lógica interna.
- Favorece pruebas unitarias, mantenibilidad y modularidad extrema.

---

## Microkernel (Plug-in Architecture)
Diseño que separa un **núcleo estable** de funcionalidades básicas y una colección de **plugins o módulos** extendibles.

- Núcleo: servicios esenciales y puntos de extensión.  
- Plugins: nuevas capacidades que se pueden añadir sin modificar el núcleo.  
- Usado en IDEs (VSCode, Eclipse), sistemas operativos, videojuegos o plataformas extensibles.

---

## Service-Oriented Architecture (SOA)
Antecesora de [microservicios](/backend/microservicios/), centrada en la **interoperabilidad** mediante servicios compartidos.

- Usa protocolos estándar (SOAP, XML-RPC, REST).  
- Integra sistemas heterogéneos.  
- Enfatiza contratos de servicio y orquestación.  
- Se diferencia de microservicios por su **menor granularidad** y **mayor centralización**.

---

## Data-Centric Architectures
Arquitecturas orientadas a los flujos y transformaciones de datos.

- **Data Flow Architecture**  
	- Procesos representados como nodos conectados por canales de datos.  
	- Ejemplo: sistemas ETL, pipelines, procesamiento en streaming.  
- **Data Lake / Data Mesh**  
	- Enfoques modernos para gestión de datos distribuidos y descentralizados.  
	- Cada dominio controla sus propios datos (autonomía y calidad).

---

## Reactive Architecture
Enfocada en la **reactividad**, **resiliencia** y **elasticidad** ante eventos asincrónicos.

- Basada en el *Reactive Manifesto*.  
- **Características**:  
	- *Responsive*: responde rápidamente a usuarios.  
	- *Resilient*: se recupera ante fallos.  
	- *Elastic*: escala dinámicamente.  
	- *Message Driven*: usa colas y eventos para comunicación.  
- Ideal para sistemas distribuidos, microservicios y tiempo real.

---

## Pipeline / Batch Architectures
Modelos para procesamiento **secuencial** o **masivo** de datos.

- **Pipeline Architecture**  
	- Flujo continuo de transformaciones (streaming, procesamiento incremental).  
	- Ejemplo: sistemas de CI/CD, audio/video, machine learning pipelines.  
- **Batch Architecture**  
	- Procesamiento en lotes programados.  
	- Común en ETL, big data y tareas programadas con cron o Airflow.

---

## Domain-Driven Design (DDD)
Complemento conceptual a las arquitecturas de dominio como hexagonal o onion architecture.

- **Ubiquitous Language**: lenguaje compartido entre negocio y desarrollo.  
- **Bounded Contexts**: división del sistema por dominios cohesivos.  
- **Aggregates, Entities, Value Objects**: estructuras del modelo de dominio.  
- **Context Mapping**: define relaciones entre dominios (shared kernel, customer-supplier, etc).  
- Base teórica de [microservicios](/backend/microservicios/) bien definidos.

---

## Space-Based Architecture
Diseñada para **alta escalabilidad y baja latencia**, usada en trading, e-commerce y sistemas intensivos.

- Divide el sistema en *processing units* independientes que comparten un *data grid*.  
- Usa almacenamiento distribuido en memoria (como Hazelcast o Redis).  
- Elimina el cuello de botella del almacenamiento centralizado.  
- Altamente paralelizable.

---

## Event Mesh & Choreography Patterns
Extensión avanzada de event driven architecture.

- **Event Mesh**: red de brokers distribuidos que propagan eventos globalmente.  
- **Choreography vs Orchestration**:  
	- *Orchestration*: un servicio central coordina las interacciones (como una Saga).  
	- *Choreography*: los servicios reaccionan a eventos sin control central.  
- Mejora la autonomía, resiliencia y escalabilidad de sistemas distribuidos.

---

## Edge & Fog Computing
Complemento a [serverless](/backend/serverless/) y cloud computing para procesamiento cercano a la fuente de datos.

- **Edge Computing**: procesamiento local (dispositivos IoT, gateways).  
	- Reduce latencia y consumo de ancho de banda.  
- **Fog Computing**: capa intermedia entre el *edge* y la nube.  
	- Filtra, agrega o enruta datos antes del procesamiento central.  
- Ideal para sistemas en tiempo real, IoT y automatización industrial.

---

## Actor Model
Modelo de concurrencia descentralizada.

- Cada *actor* es una unidad autónoma con estado, comportamiento y buzón de mensajes.  
- Se comunican exclusivamente por paso de mensajes asincrónicos.  
- Sin locks ni memoria compartida.  
- Implementado en frameworks como Akka, Erlang o Orleans.  
- Base conceptual de muchas arquitecturas reactivas y distribuidas.

---

## Self-Contained Systems (SCS)
Evolución práctica de los [microservicios](/backend/microservicios/), donde cada módulo es completamente autónomo.

- Incluye su propia UI, lógica y almacenamiento.  
- Reduce dependencias entre servicios.  
- Promueve despliegue y evolución independientes.  
- Ideal para grandes plataformas con equipos autónomos.

---

## Principios Avanzados
- **SOLID**: cinco principios fundamentales para código mantenible (Single Responsibility, Open/Closed, etc).  
- **High Cohesion & Low Coupling**: las partes internas deben estar muy relacionadas, y las externas poco dependientes.  
- **Separation of Concerns (SoC)**: divide responsabilidades para reducir complejidad.  
- **Composability**: los módulos deben combinarse fácilmente sin alterar su naturaleza.  
- **Observabilidad**: la arquitectura debe ser medible, trazable y auditable.

---

## Tendencias Modernas
- **Composable Architecture**: sistemas ensamblados mediante APIs, microfrontends y módulos dinámicos.  
- **Event-Driven Microservices + AI Orchestration**: integración de IA en pipelines de eventos.  
- **Infrastructure as Code (IaC)**: definición de infraestructura como parte del diseño arquitectónico.  
- **Quantum-Inspired & Neuromorphic Architectures**: exploración futura hacia hardware y patrones inspirados en el cerebro o la mecánica cuántica.


