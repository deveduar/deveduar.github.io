---
date: 2025-04-14 03:22
title: OpenShift
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: Virtualizacion
tags:
  - OpenShift
  - devops
  - virtualizacion
---
# OpenShift

- [CICD](/devops/cicd/)
- [Virtualizacion](/devops/virtualizacion/)
- [microservicios](/backend/microservicios/)
- [cloud](/cloud/cloud/) 
- [Kubernetes](/virtualizacion/kubernetes/)

## Introducción a OpenShift

**OpenShift** es una **plataforma de orquestación de contenedores** basada en [Kubernetes](/virtualizacion/kubernetes/) que añade una capa de automatización, seguridad y gestión empresarial.  
Pertenece a **Red Hat** (ahora parte de IBM) y su versión open source es **OKD** (*Origin Community Distribution of Kubernetes*).

OpenShift se sitúa dentro del modelo **PaaS (Platform as a Service)**, aunque también ofrece componentes que pueden considerarse **CaaS (Container as a Service)** y se integra fácilmente con soluciones **SaaS (Software as a Service)**.  
Su objetivo principal es **simplificar el ciclo de vida completo de las aplicaciones** (desde el desarrollo hasta el despliegue y monitoreo) en entornos híbridos o multi-nube.

### Referencias

- [¿Qué es OpenShift? Diferencias con Docker y Kubernetes • S&M Services](https://sm-services.es/que-es-openshift/)  
- [Qué es OpenShift y cómo utilizarlo](https://www.hackio.com/blog/que-es-openshift-y-como-utilizarlo)  
- [Cómo empezar a utilizar OpenShift - YouTube](https://youtu.be/HPEPPArfOfk)  
- [Installation overview | OKD 4](https://docs.okd.io/latest/installing/overview/index.html)

---

## Comparativa: OpenShift vs Kubernetes vs Docker

| Concepto | Docker | Kubernetes | OpenShift |
|-----------|---------|-------------|------------|
| Nivel | Contenedorización | Orquestación de contenedores | Plataforma PaaS basada en Kubernetes |
| Gestión de imágenes | Docker Hub | No gestiona directamente | Registro privado integrado (ImageStreams) |
| Seguridad | Control manual | Moderada | Política de seguridad reforzada (SecurityContextConstraints) |
| Acceso | CLI + API | kubectl | `oc` CLI + API + Web Console |
| CI/CD integrado | No | Parcial (requiere Jenkins u otros) | Sí, con pipelines (Tekton, Jenkins, GitOps) |
| Control de acceso | Básico | [RBAC](/autenticacion/rbac/) | RBAC + OAuth + control de acceso avanzado |
| Networking | Bridge/NAT | Pod network (CNI) | SDN + HAProxy + routing avanzado |
| Plantillas | Dockerfiles | Helm Charts | Templates nativos y Operators |

---

## Arquitectura de OpenShift

### Componentes principales

- **Master Nodes**
	- Ejecutan los componentes de control: API Server, Controller Manager, Scheduler.
- **Worker Nodes**
	- Alojan los contenedores de las aplicaciones.
- **etcd**
	- Base de datos distribuida para almacenar el estado del clúster.
- **Router (HAProxy)**
	- Gestiona el enrutamiento del tráfico hacia los pods.
- **Registry**
	- Repositorio interno de imágenes (sustituye o complementa Docker Hub).
- **Build y Deployment Configurations**
	- Permiten pipelines y despliegues automatizados.

---

## Seguridad y Control de Acceso

- **[RBAC](/autenticacion/rbac/)** (Role-Based Access Control): gestiona permisos por usuario o grupo.  
- **OAuth** integrado: autenticación centralizada.  
- **control de acceso** granular en recursos como Pods, Routes o Secrets.  
- **SCC (Security Context Constraints)**: control de privilegios a nivel de contenedor.  
- **HAProxy Router**: balanceo de carga y control del tráfico entrante.

---

## Despliegue y Gestión

### Instalación de OKD (versión open source)

OpenShift se puede desplegar en entornos **on-premises**, **virtualizados** o en **nube pública**.  
OKD ofrece documentación oficial detallada:

- [Installation overview - OKD 4](https://docs.okd.io/latest/installing/overview/index.html)

#### Métodos de instalación
- **IPI (Installer-Provisioned Infrastructure):** instalación automatizada (AWS, GCP, Azure, Bare Metal).  
- **UPI (User-Provisioned Infrastructure):** instalación manual con control total del entorno.

---

## Helm vs Templates de OpenShift

### Helm en Kubernetes
- Helm es el **package manager** para [Kubernetes](/virtualizacion/kubernetes/), usado para empaquetar, distribuir y gestionar aplicaciones mediante *charts*.
- Permite **versionar configuraciones**, reutilizar plantillas y desplegar aplicaciones complejas fácilmente.

### Templates en OpenShift
- Los **Templates** son archivos JSON/YAML que definen objetos reutilizables dentro del clúster (pods, servicios, routes, etc.).
- Pueden incluir parámetros dinámicos y son gestionables desde la **CLI (`oc`)** o la interfaz web.

> **Diferencia clave:**  
> OpenShift Templates están integrados en la plataforma, mientras que Helm requiere instalación adicional.  
> Sin embargo, OpenShift es **compatible con Helm**, lo que permite combinar ambos sistemas.

#### Enlaces
- [Helm | Quickstart Guide](https://helm.sh/docs/intro/quickstart/)

---

## API y Extensibilidad

- OpenShift expone una **API RESTful** compatible con Kubernetes.
- Permite integración con sistemas de CI/CD, monitoreo y automatización (por ejemplo, [CICD](/devops/cicd/) pipelines con Jenkins, Tekton o ArgoCD).
- Los **Operators** extienden la API para gestionar aplicaciones complejas mediante controladores personalizados.

---

## Integración con DevOps y CI/CD

- Pipelines declarativos basados en **Tekton** o **Jenkins**.
- Despliegue continuo con **GitOps**.
- Integración nativa con repositorios Git, Webhooks y control de versiones.
- Control del flujo de despliegue, rollback, pruebas y versionado de contenedores.

---

## Conclusión

OpenShift es una solución integral que **amplía las capacidades de Kubernetes**, añadiendo herramientas para desarrollo, seguridad, despliegue continuo y gestión empresarial.  
Su enfoque “*batteries included*” lo convierte en una de las plataformas más completas para **microservicios**, **automatización DevOps**, y **cloud híbrida**.

# OpenShift (ampliación de fundamentos)

- [CICD](/devops/cicd/)
- DevOps
- Infraestructura como código
- GitOps
- Observabilidad
- Service Mesh
- cloud híbrida
- edge computing
- Seguridad en contenedores

---

## Infraestructura como Código y GitOps

### GitOps en OpenShift
- En OpenShift, **GitOps** aplica el principio de que el **estado deseado del clúster** y las aplicaciones se definen y almacenan en un repositorio Git.
- Herramientas como **Argo CD** o **Flux** sincronizan el estado del clúster con el repositorio, garantizando despliegues consistentes y auditables.
- Cada cambio se realiza mediante *pull requests*, lo que aporta trazabilidad y control de versiones a toda la infraestructura.

#### Beneficios
- Versionado de configuraciones y despliegues.
- Revisión de código antes de aplicar cambios en producción.
- Rollbacks inmediatos desde commits previos.
- Reproducibilidad y coherencia entre entornos.

#### Recursos
- Argo CD
- Tekton
- Kustomize

---

## Observabilidad, Monitoreo y Logging

### Métricas y Alertas
- OpenShift integra nativamente **Prometheus** y **Alertmanager** para recolectar métricas de nodos, pods y aplicaciones.
- Los dashboards con **Grafana** permiten visualizar KPIs y SLOs en tiempo real.

### Logging Centralizado
- OpenShift utiliza el stack **EFK** (Elasticsearch, Fluentd, Kibana) o **Loki + Grafana** para unificar logs de los pods.
- Los logs pueden enviarse a sistemas externos como Splunk o Graylog mediante Fluentd.

### Trazabilidad Distribuida
- Integración con **Jaeger** o **Tempo** para rastrear flujos entre microservicios.
- Facilita la detección de cuellos de botella y latencias en sistemas distribuidos.

#### Buenas prácticas
- Establecer etiquetas y nombres coherentes para recursos.
- Definir alertas orientadas a negocio y SLOs claros.
- Mantener retención de logs ajustada a normativas y costes.

---

## Almacenamiento y Persistencia

### Persistencia en entornos de contenedores
- Uso de **PersistentVolume (PV)** y **PersistentVolumeClaim (PVC)** para manejar datos que sobreviven a los pods.
- Compatible con sistemas de almacenamiento como:
	- CephFS / RBD (nativo de Red Hat)
	- NFS, GlusterFS
	- EBS, GCP Persistent Disks, Azure Disks (en entornos cloud)
- Se soporta **Dynamic Provisioning**, donde los volúmenes se crean automáticamente según la clase de almacenamiento.

### Respaldo y recuperación
- Herramientas como **Velero** o **OADP (OpenShift API for Data Protection)** permiten realizar backups del clúster y datos persistentes.
- Las políticas de snapshot se gestionan a nivel de Storage Class.

---

## Redes, Service Mesh y Seguridad de Red

### Red en OpenShift
- Basada en **CNI (Container Network Interface)**, con soporte para SDN o redes externas (OVN-Kubernetes).
- Los **Services** exponen pods internamente, mientras que las **Routes** manejan tráfico externo vía HAProxy o Ingress Controllers.

### Service Mesh
- OpenShift puede integrar **Red Hat Service Mesh** (basado en **Istio**) para:
	- Comunicación segura mTLS entre microservicios.
	- Control granular de tráfico, retries, circuit breaking.
	- Trazabilidad integrada con Jaeger y Kiali.
- Permite definir políticas de seguridad, cuotas y enrutamiento avanzado sin modificar el código de las aplicaciones.

### Network Policies
- Controlan la comunicación entre pods según namespaces o etiquetas.
- Implementan aislamiento de red por defecto (Zero Trust a nivel de pod).

---

## Multi-Cloud, Edge y Modernización de Aplicaciones

### Despliegue Multi-Cloud
- OpenShift puede instalarse sobre AWS, Azure, GCP, VMware o bare metal, ofreciendo una capa unificada de orquestación.
- Permite **clusters federados** o **hub-and-spoke** gestionados desde **OpenShift Cluster Manager**.

### Edge Computing
- **OpenShift Edge** optimiza despliegues en entornos con recursos limitados o conectividad intermitente.
- Casos de uso: IoT, retail distribuido, manufactura, transporte.

### Modernización de Aplicaciones
- Migración de monolitos a microservicios con **Source-to-Image (S2I)** o **BuildConfig**.
- Contenerización automatizada y pipelines para transformar aplicaciones legadas en cloud-native.

---

## Operaciones “Day 2”

- **Escalado automático** de aplicaciones y nodos mediante **Horizontal/Vertical Pod Autoscaler** y **Cluster Autoscaler**.
- **Actualizaciones “rolling”** y **parcheo sin downtime**.
- Supervisión del estado del clúster con **oc adm top**, **oc get events**, y **must-gather**.
- **Tolerancia a fallos** mediante réplicas y distribución por zonas (Availability Zones).
- **Optimización de costes y recursos** con etiquetado (labels, annotations) y políticas de afinidad.

---

## Buenas Prácticas DevOps en OpenShift

- Adoptar **pipelines declarativos** (Tekton / Jenkins / GitOps).
- Separar entornos: *dev*, *staging*, *prod*, con promoción controlada.
- Integrar **scaneo de imágenes** y **firma** (Quay Security Scanner, Trivy).
- Aplicar el **principio de menor privilegio** en RBAC y SCC.
- Automatizar despliegues mediante **Webhooks** y **Build Triggers**.
- Supervisar métricas DORA: lead time, frecuencia de despliegue, tasa de fallos, MTTR.

---

## Recursos y documentación adicional

- [Argo CD Documentation](https://argo-cd.readthedocs.io/)
- [Red Hat OpenShift GitOps](https://docs.openshift.com/container-platform/latest/cicd/gitops/understanding-openshift-gitops.html)
- [OpenShift Service Mesh](https://docs.openshift.com/container-platform/latest/service_mesh/service_mesh_arch/understanding-ossm.html)
- [OKD Data Protection (OADP)](https://docs.openshift.com/container-platform/latest/backup_and_restore/oadp.html)
- [Monitoring and Logging in OpenShift](https://docs.openshift.com/container-platform/latest/observability/observability.html)

---

## Conclusión

Esta ampliación cubre los temas avanzados de OpenShift que extienden su rol más allá de la orquestación básica:
- Integración total con GitOps e IaC.  
- Observabilidad, trazabilidad y seguridad de red avanzadas.  
- Operaciones continuas y despliegues multi-cloud.  
- Enfoque DevOps moderno con pipelines declarativos, automatización y visibilidad completa del ciclo de vida.

Con estos bloques, se completa una visión **end-to-end** de OpenShift como **plataforma empresarial de contenedores, automatización y nube híbrida**.


# OpenShift Cheat Sheet

- [Kubernetes](/virtualizacion/kubernetes/)
- DevOps
- [CICD](/devops/cicd/)
- GitOps
- Helm
- Service Mesh
- [RBAC](/autenticacion/rbac/)
- SecurityContextConstraints
- Infraestructura como código

---

## 📦 Conceptos Clave

| Concepto | Descripción breve |
|-----------|------------------|
| **Pod** | Unidad mínima de ejecución (contenedor o grupo de contenedores). |
| **DeploymentConfig** | Controla versiones y despliegues de aplicaciones. |
| **BuildConfig** | Define cómo se construyen imágenes (Builds). |
| **Route** | Expone servicios al exterior del clúster (usando HAProxy). |
| **Service** | Abstracción que agrupa pods y gestiona su acceso interno. |
| **Project (Namespace)** | Espacio aislado de recursos dentro del clúster. |
| **ImageStream** | Mecanismo para gestionar versiones de imágenes de contenedor. |
| **Template** | Define múltiples objetos reutilizables (como YAML parametrizado). |
| **SCC (Security Context Constraints)** | Define políticas de seguridad para pods. |
| **Operator** | Extiende Kubernetes para gestionar apps complejas. |
| **Tekton / Jenkins** | Sistemas CI/CD integrados en OpenShift. |

---

## 🧠 Comandos básicos (`oc` CLI)

### Autenticación y contexto
{% raw %}
```bash
oc login https://api.openshift.example.com:6443 --token=<TOKEN>
oc whoami
oc project <nombre>
oc status
```
{% endraw %}`

### Gestión de proyectos y recursos

{% raw %}
```bash
oc new-project mi-app
oc get projects
oc delete project mi-app
```
{% endraw %}

### Pods, deployments y servicios

{% raw %}
```bash
oc get pods
oc describe pod <pod>
oc logs <pod>
oc get svc
oc get routes
```
{% endraw %}

### Creación rápida de recursos

{% raw %}
```bash
oc new-app <imagen> --name=mi-app
oc expose svc/mi-app
oc get route mi-app
```
{% endraw %}

### Builds e imágenes

{% raw %}
```bash
oc new-build <repo-git> --strategy=docker --name=mi-build
oc start-build mi-build --follow
oc get build
oc get imagestreams
```
{% endraw %}

---

## ⚙️ Administración y configuración

### Escalado

{% raw %}
```bash
oc scale deployment/mi-app --replicas=3
oc autoscale dc/mi-app --min=2 --max=5 --cpu-percent=80
```
{% endraw %}

### Actualizaciones y rollback

{% raw %}
```bash
oc rollout status dc/mi-app
oc rollout undo dc/mi-app
```
{% endraw %}

### Variables de entorno

{% raw %}
```bash
oc set env deployment/mi-app VAR1=valor
oc set env dc/mi-app --list
```
{% endraw %}

### Montaje de volúmenes

{% raw %}
```bash
oc set volume dc/mi-app --add --name=vol1 --type=persistentVolumeClaim --claim-name=mi-pvc --mount-path=/data
```
{% endraw %}

---

## 🧰 Gestión avanzada

### RBAC

{% raw %}
```bash
oc get rolebindings
oc adm policy add-role-to-user edit usuario -n mi-app
oc adm policy add-cluster-role-to-user cluster-admin admin
```
{% endraw %}

### Seguridad (SCC)

{% raw %}
```bash
oc get scc
oc describe scc restricted
oc adm policy add-scc-to-user anyuid usuario
```
{% endraw %}

### Networking

{% raw %}
```bash
oc get routes
oc expose svc/mi-servicio
oc get networkpolicy
oc describe networkpolicy
```
{% endraw %}

### Logs y depuración

{% raw %}
```bash
oc logs -f deployment/mi-app
oc rsh <pod>
oc exec <pod> -- ls /app
oc debug node/<nodo>
```
{% endraw %}

---

## 🧩 Helm y Templates

### Helm

{% raw %}
```bash
helm repo add openshift https://charts.openshift.io/
helm install mi-chart openshift/mi-app
helm list
helm uninstall mi-chart
```
{% endraw %}

### Templates

{% raw %}
```bash
oc get templates -n openshift
oc process -f template.yaml -p NOMBRE=valor | oc apply -f -
```
{% endraw %}

---

## 🔄 GitOps y CI/CD

### Tekton

{% raw %}
```bash
oc get pipelines
oc get pipelineruns
oc logs -f pipelinerun/<nombre>
```
{% endraw %}

### Argo CD

{% raw %}
```bash
argocd login <server>
argocd app list
argocd app sync mi-app
```
{% endraw %}

### Jenkins

{% raw %}
```bash
oc new-app jenkins-ephemeral
oc logs dc/jenkins
```
{% endraw %}

---

## 📈 Observabilidad y Monitoreo

{% raw %}
```bash
oc get pods -n openshift-monitoring
oc logs prometheus-k8s-0 -n openshift-monitoring
oc get routes -n openshift-monitoring
```
{% endraw %}

* **Prometheus:** métricas de clúster y aplicaciones.
* **Grafana:** dashboards de visualización.
* **Alertmanager:** alertas configurables.
* **EFK Stack:** Elasticsearch + Fluentd + Kibana para logs.
* **Jaeger / Kiali:** tracing y visualización de tráfico en Service Mesh.

---

## ☁️ Multi-Cloud y Edge

* **IPI (Installer Provisioned Infrastructure):** instalación automatizada (AWS, GCP, Azure).
* **UPI (User Provisioned Infrastructure):** instalación manual con control total.
* **OpenShift Edge:** despliegue en ubicaciones remotas, con recursos limitados.
* **Cluster Federation:** gestión de múltiples clústeres con OpenShift Cluster Manager.

---

## 🧱 Infraestructura como Código

{% raw %}
```bash
# Aplicar configuración declarativa
oc apply -f deployment.yaml

# Ver diferencias
oc diff -f deployment.yaml

# Eliminar recurso
oc delete -f deployment.yaml
```
{% endraw %}

* Integración con GitOps (Argo CD / Flux).
* Declarar infra con [Terraform](/devops/terraform/), Ansible o Kustomize.
* Control total del estado deseado de la plataforma y las apps.

---

## 🧩 Troubleshooting rápido

| Situación          | Comando útil                              |
| ------------------ | ----------------------------------------- |
| Pod no inicia      | `oc describe pod <pod>`                   |
| Error de build     | `oc logs build/<build>`                   |
| Fallo de permisos  | `oc auth can-i <acción> <recurso>`        |
| Nodo con problemas | `oc get nodes`, `oc describe node <nodo>` |
| Resetear proyecto  | `oc delete all --all -n <namespace>`      |

---

## 📚 Recursos oficiales

* [Documentación OpenShift](https://docs.openshift.com/)
* [CLI Reference](https://docs.openshift.com/container-platform/latest/cli_reference/openshift_cli/getting-started-cli.html)
* [OKD Documentation](https://docs.okd.io/latest/)
* [OpenShift GitOps](https://docs.openshift.com/container-platform/latest/cicd/gitops/understanding-openshift-gitops.html)
* [Red Hat Service Mesh](https://docs.openshift.com/container-platform/latest/service_mesh/)

---

## 💡 Consejo final

> OpenShift combina la potencia de [Kubernetes](/virtualizacion/kubernetes/) con herramientas integradas para CI/CD, seguridad, y observabilidad.
> Dominar la CLI `oc`, las políticas de seguridad y las pipelines declarativas es clave para aprovechar su potencial completo en entornos empresariales y cloud híbridos.


# OpenShift (temas avanzados complementarios)

- SRE
- Zero Trust
- Autoscaling
- Operators
- API Gateway
- Policy as Code
- Compliance
- Serverless
- Quarkus
- Knative
- Backup y recuperación
- Cost Optimization

---

## 🔐 Seguridad avanzada y Zero Trust

### Zero Trust en OpenShift
- Implementa una **seguridad por capas**, donde ningún componente se asume confiable por defecto.  
- Las políticas de red y RBAC se configuran para permitir **solo el tráfico explícitamente autorizado**.  
- Se recomienda combinar:
	- Network Policies + SCC (aislamiento de pods).
	- Autenticación federada vía OAuth, LDAP o SSO.
	- Módulos de auditoría de eventos (`oc adm top events`).

### Integración con Policy as Code
- OpenShift puede integrarse con **OPA (Open Policy Agent)** y **Gatekeeper** para validar configuraciones mediante políticas declarativas.
- Ejemplo: evitar despliegues que usen contenedores privilegiados o sin límites de recursos.

{% raw %}
```yaml
apiVersion: constraints.gatekeeper.sh/v1beta1
kind: K8sPSPPrivilegedContainer
metadata:
  name: no-privileged-containers
spec:
  match:
    kinds:
      - apiGroups: [""]
        kinds: ["Pod"]
```
{% endraw %}`

---

## ⚡ Serverless y Escalado Dinámico

### Knative y OpenShift Serverless

* OpenShift soporta **Knative**, permitiendo desplegar funciones y servicios que se escalan automáticamente según demanda.
* Ideal para cargas de trabajo event-driven y microservicios ligeros.

#### Ventajas

* Autoescalado a 0 cuando no hay tráfico.
* Integración con eventos (Kafka, CloudEvents, HTTP triggers).
* Compatible con pipelines CI/CD.

{% raw %}
```bash
oc get ksvc
oc describe ksvc mi-funcion
```
{% endraw %}

---

## 🧠 Operators y Extensibilidad

### Qué son los Operators

* Los **Operators** amplían Kubernetes/OpenShift con lógica de gestión automática para aplicaciones complejas.
* Basados en CRDs (*Custom Resource Definitions*) y controladores en Go o Ansible.

#### Tipos de Operators

* **Community Operators:** mantenidos por la comunidad (en OperatorHub.io).
* **Certified Operators:** validados por Red Hat.
* **Custom Operators:** creados internamente para tareas específicas.

#### Ejemplo de uso

* Base de datos PostgreSQL con operator que gestiona backups, escalado y actualizaciones.

{% raw %}
```bash
oc get operators
oc get crd | grep postgres
oc describe csv postgresql-operator.v5.3.0
```
{% endraw %}

---

## 🛡️ Compliance y Auditoría

### OpenShift Compliance Operator

* Permite escanear el clúster según normas de cumplimiento:

  * CIS Benchmarks
  * NIST 800-53
  * PCI-DSS
* Genera reportes automáticos con hallazgos y recomendaciones.

{% raw %}
```bash
oc get compliancescans
oc describe compliancesuite nist-suite
```
{% endraw %}

### Auditoría de eventos

* Los eventos se almacenan en `/var/log/audit/audit.log`.
* Puede integrarse con herramientas SIEM (Splunk, ELK) para correlación de incidentes.
* Uso del comando `oc adm node-logs` para inspeccionar nodos.

---

## 🌍 API Management y Gateways

### OpenShift API Gateway (3scale)

* Basado en **Red Hat 3scale**, permite gestionar APIs con control de acceso, métricas y cuotas.
* Ofrece:

  * Autenticación OAuth2 y API Keys.
  * Rate limiting y políticas de uso.
  * Portal de desarrolladores con documentación automática (Swagger/OpenAPI).
* Se integra con pipelines y microservicios expuestos como Routes o Istio Gateways.

#### Ejemplo de integración

{% raw %}
```bash
oc get apiproducts
oc describe apiproduct mi-api
```
{% endraw %}

---

## 💾 Backup, Restore y Disaster Recovery

### OADP (OpenShift API for Data Protection)

* Gestiona copias de seguridad y restauración de:

  * Recursos de Kubernetes (YAML).
  * Volúmenes persistentes (PV/PVC).
* Compatible con **Velero**, **Restic** y **S3** (AWS, MinIO, Ceph).

#### Comandos clave

{% raw %}
```bash
oc get backupstoragelocations
oc get backups
oc get restores
```
{% endraw %}

#### Ejemplo

{% raw %}
```bash
oc create -f backup.yaml
oc get backup -w
oc create -f restore.yaml
```
{% endraw %}

---

## 💰 Cost Optimization y Resource Management

### Etiquetado y cuotas

* Utilizar **labels** y **annotations** para rastrear consumo por proyecto o equipo.
* Implementar **ResourceQuotas** y **LimitRanges** para evitar desperdicio de CPU/RAM.
* Monitorizar consumo con Prometheus y métricas de proyecto.

{% raw %}
```bash
oc describe resourcequota
oc adm top pods -n mi-proyecto
oc adm top nodes
```
{% endraw %}

### Estrategias

* Automatizar apagado de entornos no productivos.
* Usar nodos spot/preemptibles (en nubes públicas).
* Adoptar containers livianos (Alpine, UBI minimal).

---

## 🚀 Integración con Red Hat Ecosystem

* **Quarkus:** framework Java optimizado para contenedores y OpenShift.
* **RHEL CoreOS:** sistema operativo inmutable usado en nodos OpenShift.
* **Red Hat Advanced Cluster Management (ACM):** permite gestionar múltiples clústeres OpenShift desde una sola consola.
* **Red Hat Ansible Automation Platform:** automatiza despliegues, parches y operaciones Day 2.
* **Red Hat OpenShift Data Foundation (ODF):** almacenamiento definido por software nativo para OpenShift.

---

## 🧩 Observabilidad extendida

### Kiali + Jaeger + Grafana

* Kiali: visualiza dependencias y métricas de microservicios en el mesh.
* Jaeger: traza peticiones entre servicios.
* Grafana: muestra dashboards personalizados de rendimiento y capacidad.

### Logs de Auditoría Avanzados

{% raw %}
```bash
oc get pods -n openshift-logging
oc logs elasticsearch-<id> -n openshift-logging
```
{% endraw %}

* Integración con **CloudWatch**, **Stackdriver** o **Azure Monitor** para entornos híbridos.

---

## ⚙️ Performance y Tuning del Clúster

### Node tuning

* Ajustes mediante el **Node Tuning Operator** para cargas sensibles a latencia o rendimiento.
* Permite definir perfiles de CPU pinning, HugePages o IRQ balancing.

{% raw %}
```bash
oc get tunedprofiles
oc describe tuned
```
{% endraw %}

### Scheduler y afinidad

* Uso de **affinity/anti-affinity** y **tolerations** para distribuir pods según tipo de carga o hardware.
* Ejemplo: separar cargas críticas de pods de desarrollo.

{% raw %}
```yaml
affinity:
  podAntiAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      - topologyKey: "kubernetes.io/hostname"
```
{% endraw %}

---

## 🧭 Roadmap Tecnológico (2025+)

* **eBPF en OpenShift:** inspección avanzada de red y seguridad.
* **Edge clusters livianos (MicroShift).**
* **Integración con AI/ML pipelines (OpenShift AI).**
* **Runtime Security:** detección de amenazas con Falco/Sysdig.
* **Infraestructura multi-runtime:** soporte extendido para cri-o, Kata Containers, y WebAssembly (Wasm).

---

## 🧠 Recomendaciones finales

* Adoptar mentalidad **SRE** para medir confiabilidad y rendimiento.
* Implementar **Zero Trust Networking** desde diseño.
* Usar **GitOps + IaC** como base operativa de despliegues.
* Automatizar monitoreo y remediación.
* Documentar flujos CI/CD, políticas y dependencias críticas.
* Aprovechar Operators y Service Mesh para lograr autosuficiencia y resiliencia a gran escala.

---

## 📚 Recursos útiles (avanzados)

* [Red Hat OpenShift Serverless](https://docs.openshift.com/serverless/)
* [Operator SDK](https://sdk.operatorframework.io/)
* [Compliance Operator Docs](https://docs.openshift.com/container-platform/latest/security/compliance_operator/)
* [Red Hat Advanced Cluster Management](https://www.redhat.com/en/technologies/management/advanced-cluster-management)
* [Node Tuning Operator](https://docs.openshift.com/container-platform/latest/scalability_and_performance/psap-node-tuning-operator.html)
* [OpenShift API Management (3scale)](https://www.redhat.com/en/technologies/jboss-middleware/3scale)

---

> 💬 *Esta nota cubre los aspectos avanzados y emergentes de OpenShift, esenciales para arquitectos, SREs y administradores que buscan optimizar, asegurar y escalar entornos híbridos y multinube.*


