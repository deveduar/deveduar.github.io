---
date: 2026-01-13 15:22
title: Cloud Computing
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: cloud
tags:
  - cloud
---
# Cloud Computing

- [cloud](/cloud/cloud/)
- [Azure](/cloud/azure/)
- [FindOps](/infraestructura%20it/findops/)

## Introduction to Cloud Computing

### Definición de cloud computing
- Cloud computing es la entrega de servicios de TI bajo demanda a través de internet.
- Proporciona recursos como:
	- Virtual machines
	- Storage
	- Databases
	- Networking
- Permite el uso de tecnologías avanzadas sin gestionar infraestructura física:
	- Internet of Things (IoT)
	- Machine Learning (ML)
	- Artificial Intelligence (AI)
- Los recursos se alojan en un **datacenter** administrado por un proveedor de nube.

### Objetivos principales
- Escalabilidad rápida según la demanda.
- Reducción de costos iniciales.
- Alta disponibilidad y resiliencia.
- Acceso global a recursos y servicios.

## Shared Responsibility Model

### Concepto general
- El modelo de responsabilidad compartida define qué aspectos son responsabilidad del proveedor de nube y cuáles del consumidor.
- La distribución exacta depende del tipo de servicio en la nube utilizado.

### Responsabilidades del proveedor de nube
- Siempre es responsable de:
	- Physical datacenter
	- Physical network
	- Physical hosts
	- Power, cooling y conectividad
- Garantiza la disponibilidad básica de la infraestructura.

### Responsabilidades del consumidor
- Siempre es responsable de:
	- Información y datos almacenados en la nube
	- Seguridad del acceso a los datos
	- Dispositivos que se conectan a la nube (computadoras, teléfonos, etc.)
	- Cuentas, identidades y permisos de usuarios y servicios

### Responsabilidades compartidas según el servicio
- El modelo de servicio determina quién gestiona:
	- Operating systems
	- Network controls
	- Applications
	- Identity and infrastructure

### Ejemplo práctico
- Si despliegas una virtual machine y instalas una base de datos SQL:
	- El proveedor gestiona la infraestructura física.
	- Tú eres responsable de:
		- Parches y actualizaciones del sistema operativo
		- Actualizaciones de la base de datos
		- Seguridad y mantenimiento de los datos almacenados

## Cloud Service Types

### Infrastructure as a Service (IaaS)
- Proporciona recursos básicos de computación.
- El consumidor tiene mayor control y mayor responsabilidad.
- Casos de uso:
	- Migración lift-and-shift
	- Entornos altamente personalizados

### Platform as a Service (PaaS)
- Proporciona una plataforma lista para desarrollar y desplegar aplicaciones.
- Responsabilidad equilibrada entre proveedor y consumidor.
- Casos de uso:
	- Desarrollo rápido de aplicaciones
	- Reducción de tareas operativas

### Software as a Service (SaaS)
- Aplicaciones completas entregadas por el proveedor.
- El proveedor asume la mayoría de las responsabilidades.
- Casos de uso:
	- Correo electrónico
	- Herramientas de colaboración
	- CRM y ERP

## Cloud Models

### Comparación de modelos de nube

| Public cloud | Private cloud | Hybrid cloud |
| --- | --- | --- |
| No capital expenditures to scale up | Complete control over resources and security | Maximum flexibility |
| Rapid provisioning and deprovisioning | Data isolated from other organizations | Control over workload placement |
| Pay only for what you use | Hardware purchase and maintenance required | Meets compliance and legal needs |
| Limited control over infrastructure | Full responsibility for maintenance |  |

### Public Cloud
- Infraestructura construida, controlada y mantenida por un proveedor externo.
- Acceso abierto a cualquier organización o individuo.
- Ventajas:
	- Alta escalabilidad
	- Bajo costo inicial
- Desventajas:
	- Menor control sobre seguridad e infraestructura

### Private Cloud
- Infraestructura dedicada a una sola organización.
- Puede estar:
	- On-site en el datacenter de la empresa
	- Off-site en un datacenter dedicado de un tercero
- Ventajas:
	- Mayor control
	- Mejor cumplimiento normativo
- Desventajas:
	- Mayor costo
	- Gestión y mantenimiento propios

### Hybrid Cloud
- Combina public cloud y private cloud en un entorno interconectado.
- Casos de uso:
	- Escalado temporal de recursos (cloud bursting)
	- Separación de cargas sensibles y no sensibles
- Beneficios:
	- Flexibilidad
	- Capa adicional de seguridad

### Multi-cloud
- Uso de múltiples proveedores de public cloud.
- Escenarios comunes:
	- Evitar dependencia de un solo proveedor
	- Migraciones entre proveedores
- Desafíos:
	- Mayor complejidad operativa
	- Gestión de seguridad distribuida

## Azure Hybrid Capabilities

### Azure Arc
- Extiende servicios de Azure a entornos:
	- On-premises
	- Multi-cloud
- Permite gestión centralizada desde Azure.

### Azure VMware Solution
- Permite ejecutar workloads de VMware directamente en Azure.
- Beneficios:
	- Integración nativa con Azure
	- Escalabilidad sin rediseñar aplicaciones
	- Migración simplificada de entornos VMware existentes

## Consumption-Based Model

### Modelo de consumo
- Los recursos se pagan según el uso real.
- Permite ajustar costos dinámicamente.

### Tipos de gasto
- Capital Expenditure (CapEx)
	- Inversión inicial en infraestructura física.
	- Común en entornos tradicionales y private cloud.
- Operational Expenditure (OpEx)
	- Pago continuo basado en consumo.
	- Modelo predominante en public cloud.

### Ventajas del modelo de consumo
- Optimización de costos
- Eliminación de sobreaprovisionamiento
- Alineación del gasto con las necesidades reales del negocio

# Cloud Computing — Conceptos Complementarios y Avanzados

## Cloud Regions, Availability Zones y Geografía

### Regiones
- Una región es un conjunto geográfico específico donde un proveedor de nube tiene infraestructura.
- Cada región es independiente de otras para:
	- Cumplimiento legal
	- Residencia de datos
	- Reducción de latencia
- Elegir región impacta:
	- Rendimiento
	- Costos
	- Regulaciones

### Availability Zones (AZ)
- Son ubicaciones físicas separadas dentro de una misma región.
- Cada zona tiene:
	- Energía independiente
	- Red independiente
	- Refrigeración independiente
- Permiten:
	- Alta disponibilidad
	- Tolerancia a fallos sin salir de la región

### Pares de regiones
- Algunas nubes emparejan regiones para recuperación ante desastres.
- Beneficio:
	- Replicación automática
	- Actualizaciones escalonadas

## Alta Disponibilidad, Escalabilidad y Resiliencia

### Alta disponibilidad (High Availability)
- Capacidad de mantener servicios operativos ante fallos.
- Se logra mediante:
	- Redundancia
	- Balanceadores de carga
	- Múltiples instancias

### Escalabilidad
- Capacidad de ajustar recursos según demanda.
- Tipos:
	- Escalabilidad vertical: aumentar potencia de un recurso
	- Escalabilidad horizontal: agregar o quitar instancias

### Elasticidad
- Ajuste automático de recursos en tiempo real.
- Característica clave del public cloud.
- Reduce costos y mejora eficiencia.

### Resiliencia
- Capacidad del sistema para recuperarse de fallos.
- Incluye:
	- Backups
	- Replicación
	- Estrategias de failover

## Seguridad en la Nube (Cloud Security)

### Defensa en profundidad
- Seguridad aplicada en múltiples capas:
	- Física
	- Red
	- Identidad
	- Aplicación
	- Datos

### Identidad y acceso (IAM)
- Controla quién puede acceder a qué recursos.
- Principios clave:
	- Least privilege
	- Zero Trust
- Se aplica a:
	- Usuarios
	- Servicios
	- Dispositivos

### Cifrado
- Datos protegidos:
	- En reposo
	- En tránsito
- El proveedor puede ofrecer:
	- Claves gestionadas
	- Claves administradas por el cliente

## Gobernanza y Gestión

### Gobernanza en la nube
- Conjunto de políticas y controles para administrar el uso de la nube.
- Incluye:
	- Control de costos
	- Cumplimiento normativo
	- Estándares de seguridad

### Políticas y control
- Definen reglas sobre:
	- Qué recursos se pueden crear
	- Dónde se pueden desplegar
	- Quién puede administrarlos

### Gestión de costos
- Uso de presupuestos y alertas.
- Análisis de consumo para optimización.
- Etiquetado de recursos para:
	- Seguimiento
	- Reportes
	- Asignación de costos

## Cloud Pricing Models

### Pago por uso
- Se cobra por:
	- Tiempo de ejecución
	- Almacenamiento utilizado
	- Transferencia de datos
- No requiere compromiso inicial.

### Reservas y compromisos
- Descuentos por:
	- Uso comprometido a largo plazo
	- Capacidad reservada
- Reduce costos para cargas predecibles.

### Costos variables
- Algunos factores que impactan el precio:
	- Región
	- Tipo de recurso
	- Nivel de disponibilidad
	- Tráfico saliente

## Casos de Uso Comunes del Cloud

### Desarrollo y pruebas
- Entornos temporales.
- Rápida creación y eliminación de recursos.
- Ideal para equipos ágiles.

### Big Data y analítica
- Procesamiento de grandes volúmenes de datos.
- Escalado dinámico según carga.

### Recuperación ante desastres (DR)
- Replicación de sistemas críticos.
- Reducción de RTO y RPO.

### Aplicaciones globales
- Distribución de contenido a nivel mundial.
- Mejora de latencia para usuarios finales.

## Cloud-Native Concepts

### Arquitecturas cloud-native
- Diseñadas específicamente para la nube.
- Características:
	- Escalables
	- Distribuidas
	- Automatizadas

### Contenedores
- Empaquetan aplicaciones y dependencias.
- Beneficios:
	- Portabilidad
	- Consistencia entre entornos

### Microservicios
- Aplicaciones divididas en servicios pequeños e independientes.
- Facilitan:
	- Escalado individual
	- Despliegues rápidos
	- Resiliencia

### Automatización e Infraestructura como Código (IaC)
- Definición de infraestructura mediante archivos.
- Beneficios:
	- Repetibilidad
	- Control de versiones
	- Reducción de errores manuales

## Responsabilidad Operativa Continua

### Monitoreo
- Seguimiento de:
	- Rendimiento
	- Disponibilidad
	- Errores
- Permite respuestas proactivas.

### Logging
- Registro de eventos y actividades.
- Clave para:
	- Auditorías
	- Diagnóstico
	- Seguridad

### Optimización continua
- Revisión periódica de:
	- Arquitectura
	- Costos
	- Seguridad
- La nube es un modelo dinámico, no estático

# Cloud Computing — Recursos y Tools Actualizados (2025-2026)

## Infraestructura como Código (IaC)

### Herramientas Principales
- **[Terraform](https://en.wikipedia.org/wiki/Terraform_(software))** — Herramienta líder de IaC para definir y aprovisionar infraestructura en múltiples proveedores de nube con un enfoque declarativo (AWS, Azure, GCP, etc.).
- **[Documentación de IaC en IBM: ¿Qué es IaC?](https://www.ibm.com/es-es/topics/infrastructure-as-code)** — Explicación de cómo IaC encaja con CI/CD y DevOps.

### Recursos de Aprendizaje y Mejores Prácticas
- **[Infraestructura como Código — Atlassian](https://www.atlassian.com/es/microservices/cloud-computing/infrastructure-as-code)** — Introducción a IaC, su importancia y beneficios en equipos DevOps.

## Gestión de Nube y Multi-Cloud

### Plataformas de Gestión, Orquestación y Gobernanza
- **[Morpheus Data](https://morpheusdata.com/)** — Plataforma de gestión y automatización de nubes híbridas y multi-cloud con autoservicio y gobernanza integrada.
- **[CloudBolt](https://www.cloudbolt.io/)** — Plataforma que unifica orquestación, políticas y FinOps para entornos multi-cloud con gobernanza como código.

## FinOps y Gestión de Costos

### Estrategias y Tendencias de Costos en 2026
- **Cost controls “shift-left” y FinDevOps** — Integración de control de costos temprano en pipelines y automatización para reducción de gasto en la nube.

### Herramientas FinOps
- **[Herramientas FinOps en Microsoft Learn](https://learn.microsoft.com/es-es/cloud-computing/finops/framework/manage/tools-services)** — Revisión de herramientas y servicios para implementar FinOps a escala organizacional.

## Plataformas Cloud y Ecosistemas

### Proveedores y Comparativas
- **[Cloud computing en 2026: tendencias, beneficios y casos](https://www.dataprix.com/recurso/tendencias-tecnologicas/cloud-computing-en-2026-beneficios-por-sectores-tendencias-y-casos)** — Análisis de tendencias, cuota de mercado y fortalezas de AWS, Azure y GCP.

### Plataformas de Nube Privada / Open-Source
- **[OpenStack](https://es.wikipedia.org/wiki/OpenStack)** — Proyecto open-source para crear y gestionar nubes privadas (IaaS).
- **[Apache CloudStack](https://en.wikipedia.org/wiki/Apache_CloudStack)** — Plataforma de orquestación de máquinas virtuales y redes para nubes privadas o públicas.

## Seguridad, Zero Trust y Multi-Cloud

### Tendencias de Seguridad y Colaboraciones
- **[Google Cloud y Palo Alto Networks amplían alianza](https://www.reuters.com/business/google-cloud-lands-deal-with-palo-alto-networks-approaching-10-billion-per-2025-12-19/)** — Asociación estratégica para ofrecer capacidades avanzadas de ciberseguridad basadas en IA.
- **[AWS y Google lanzan interconexión multicloud](https://www.reuters.com/business/retail-consumer/amazon-google-launch-multicloud-service-faster-connectivity-2025-12-01/)** — Servicio de conectividad de alta velocidad entre nubes públicas con foco en resiliencia.

### Herramientas y Enfoques Relevantes
- Firewalls cloud-native
- Plataformas SASE / Zero Trust
- Identity providers:
	- **[Okta](https://www.okta.com/)**
	- **[Azure Active Directory](https://learn.microsoft.com/azure/active-directory/)**
	- **[Google Cloud Identity](https://cloud.google.com/identity)**
- Frameworks SRE y DevSecOps para seguridad distribuida

## Formación, Estándares y Tendencias

### Tendencias Cloud 2026
- Aumento continuo de estrategias **Hybrid y Multi-Cloud** orientadas a flexibilidad, resiliencia y reducción de vendor lock-in.
- Integración de modelos **FinDevOps** y optimización automática integrada en pipelines e Infraestructura como Código.

## Recursos de Comunidad y Apoyo
- Comunidades técnicas en:
	- **[Reddit – r/devops](https://www.reddit.com/r/devops/)**
	- **[Reddit – r/cloudcomputing](https://www.reddit.com/r/cloudcomputing/)**
	- Foros y comunidades de Terraform, DevSecOps y multi-cloud
- Espacios donde profesionales comparten prácticas reales, herramientas actuales y experiencias en cloud engineering
# Cloud Computing — Azure Recursos y Tools (Estado 2025-2026)

## Documentación Oficial y Arquitectura

### Documentación base
- **[Microsoft Learn — Azure](https://learn.microsoft.com/azure/)** — Documentación oficial, rutas de aprendizaje, laboratorios y guías prácticas actualizadas.
- **[Azure Architecture Center](https://learn.microsoft.com/azure/architecture/)** — Patrones de arquitectura, best practices y diseños de referencia.
- **[Cloud Adoption Framework for Azure](https://learn.microsoft.com/azure/cloud-adoption-framework/)** — Marco completo para adopción, gobernanza, landing zones y operación.

### Arquitecturas de referencia
- **[Azure Well-Architected Framework](https://learn.microsoft.com/azure/architecture/framework/)** — Cinco pilares:
	- Reliability
	- Security
	- Cost Optimization
	- Operational Excellence
	- Performance Efficiency

## [Infraestructura como Código](/devops/iinfraestructura-como-codigo/) en [Azure](/cloud/azure/)

### Herramientas nativas
- **[Azure Bicep](https://learn.microsoft.com/azure/azure-resource-manager/bicep/)** — Lenguaje declarativo recomendado por Microsoft para ARM.
- **[Azure Resource Manager (ARM)](https://learn.microsoft.com/azure/azure-resource-manager/)** — Motor de despliegue y control de recursos en Azure.

### Herramientas multi-cloud
- **[Terraform — Azure Provider](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)** — IaC ampliamente usado en entornos enterprise.
- **[Pulumi Azure](https://www.pulumi.com/registry/packages/azure/)** — IaC con lenguajes de programación.

## Gestión, Gobernanza y Control

### Gobernanza
- **[Azure Policy](https://learn.microsoft.com/azure/governance/policy/)** — Aplicación de reglas y cumplimiento.
- **[Azure Blueprints](https://learn.microsoft.com/azure/governance/blueprints/)** — Plantillas de gobernanza (uso en escenarios legacy, reemplazado progresivamente por Policy + IaC).
- **[Management Groups](https://learn.microsoft.com/azure/governance/management-groups/)** — Organización jerárquica de suscripciones.

### Identidad y acceso
- **[Microsoft Entra ID](https://learn.microsoft.com/entra/identity/)** — Gestión de identidades (antes Azure AD).
- **[Privileged Identity Management (PIM)](https://learn.microsoft.com/entra/id-governance/privileged-identity-management/)** — Acceso privilegiado just-in-time.
- **[Conditional Access](https://learn.microsoft.com/entra/identity/conditional-access/)** — Políticas basadas en riesgo y contexto.

## Seguridad en Azure

### Plataformas de seguridad
- **[Microsoft Defender for Cloud](https://learn.microsoft.com/azure/defender-for-cloud/)** — CNAPP nativo para Azure, híbrido y multi-cloud.
- **[Azure Key Vault](https://learn.microsoft.com/azure/key-vault/)** — Gestión de secretos, claves y certificados.
- **[Azure DDoS Protection](https://learn.microsoft.com/azure/ddos-protection/)** — Protección contra ataques de denegación de servicio.

### Zero Trust
- **[Zero Trust en Azure](https://learn.microsoft.com/security/zero-trust/)** — Implementación del modelo Zero Trust con herramientas Microsoft.

## Redes y Conectividad

### Servicios clave
- **[Azure Virtual Network](https://learn.microsoft.com/azure/virtual-network/)** — Redes privadas virtuales.
- **[Azure Load Balancer](https://learn.microsoft.com/azure/load-balancer/)** — Balanceo de carga L4.
- **[Azure Application Gateway](https://learn.microsoft.com/azure/application-gateway/)** — Balanceo L7 y WAF.
- **[Azure Front Door](https://learn.microsoft.com/azure/frontdoor/)** — CDN y entrada global.

### Conectividad híbrida
- **[Azure VPN Gateway](https://learn.microsoft.com/azure/vpn-gateway/)** — Conectividad segura.
- **[Azure ExpressRoute](https://learn.microsoft.com/azure/expressroute/)** — Conexión privada dedicada.

## Computación y Plataformas

### Compute
- **[Azure Virtual Machines](https://learn.microsoft.com/azure/virtual-machines/)** — IaaS clásico.
- **[Azure Scale Sets](https://learn.microsoft.com/azure/virtual-machine-scale-sets/)** — Escalado automático de VMs.

### PaaS y serverless
- **[Azure App Service](https://learn.microsoft.com/azure/app-service/)** — Hosting de aplicaciones web y APIs.
- **[Azure Functions](https://learn.microsoft.com/azure/azure-functions/)** — Serverless basado en eventos.
- **[Azure Container Apps](https://learn.microsoft.com/azure/container-apps/)** — Contenedores serverless gestionados.

### Contenedores
- **[Azure Kubernetes Service (AKS)](https://learn.microsoft.com/azure/aks/)** — Kubernetes administrado.
- **[Azure Container Registry](https://learn.microsoft.com/azure/container-registry/)** — Registro de imágenes.

## Datos y Almacenamiento

### Almacenamiento
- **[Azure Storage](https://learn.microsoft.com/azure/storage/)** — Blob, File, Queue y Table storage.
- **[Azure Backup](https://learn.microsoft.com/azure/backup/)** — Protección de datos.
- **[Azure Site Recovery](https://learn.microsoft.com/azure/site-recovery/)** — Recuperación ante desastres.

### Bases de datos
- **[Azure SQL Database](https://learn.microsoft.com/azure/azure-sql/)** — SQL PaaS.
- **[Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/)** — NoSQL global distribuido.
- **[Azure Database for PostgreSQL / MySQL](https://learn.microsoft.com/azure/postgresql/)** — Bases de datos open-source gestionadas.

## Observabilidad y Operación

### Monitorización
- **[Azure Monitor](https://learn.microsoft.com/azure/azure-monitor/)** — Métricas, logs y alertas.
- **[Log Analytics](https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-overview)** — Consultas y análisis de logs.
- **[Application Insights](https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview)** — Telemetría de aplicaciones.

### Automatización
- **[Azure Automation](https://learn.microsoft.com/azure/automation/)** — Runbooks y tareas operativas.
- **[Azure Logic Apps](https://learn.microsoft.com/azure/logic-apps/)** — Flujos de integración y automatización.

## FinOps y Costos

### Gestión de costos
- **[Azure Cost Management](https://learn.microsoft.com/azure/cost-management-billing/)** — Análisis, presupuestos y alertas.
- **[Azure Reservations](https://learn.microsoft.com/azure/cost-management-billing/reservations/)** — Optimización de costos por compromiso.
- **[Azure Savings Plans](https://learn.microsoft.com/azure/cost-management-billing/savings-plan/)** — Ahorro flexible en compute.

## Híbrido y Multi-Cloud

### Azure híbrido
- **[Azure Arc](https://learn.microsoft.com/azure/azure-arc/)** — Gestión de recursos on-prem y multi-cloud desde Azure.
- **[Azure Stack HCI](https://learn.microsoft.com/azure-stack/hci/)** — Infraestructura hiperconvergente híbrida.

### VMware
- **[Azure VMware Solution](https://learn.microsoft.com/azure/azure-vmware/)** — Ejecución de workloads VMware nativos en Azure.

## DevOps y Desarrollo

### DevOps
- **[Azure DevOps](https://learn.microsoft.com/azure/devops/)** — Repos, pipelines, boards y artifacts.
- **[GitHub Actions](https://docs.github.com/actions)** — CI/CD integrado con Azure.

### SDKs y herramientas
- **[Azure CLI](https://learn.microsoft.com/cli/azure/)** — Gestión desde línea de comandos.
- **[Azure PowerShell](https://learn.microsoft.com/powershell/azure/)** — Automatización basada en PowerShell.

## Certificaciones Azure (Relevantes 2025-2026)

### Fundamentales
- AZ-900 — Azure Fundamentals

### Rol técnico
- AZ-104 — Azure Administrator
- AZ-305 — Azure Solutions Architect Expert
- AZ-400 — DevOps Engineer Expert
- AZ-500 — Azure Security Engineer

### Datos y AI
- DP-203 — Data Engineering
- AI-102 — Azure AI Engineer
