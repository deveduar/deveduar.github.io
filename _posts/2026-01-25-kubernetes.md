---
title: Kubernetes
tags:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: "true"
category: Devops
categories:
  - Devops
  - Kubernetes
  - Virtualizacion
---
# Kubernetes
`$= dv.current().file.tags.join(" ")`

- PaaS platform as a service
- [Virtualizacion](/devops/virtualizacion/)
- [cloud](/uncategorized/cloud/)
- [infraestructura IT](/uncategorized/infraestructura-it/)
- docs
	- [Kubernetes Crash Course for Absolute Beginners \[NEW\] - YouTube](https://youtu.be/s_o8dwzRlu4)
	- [KUBERNETES De NOVATO a PRO](https://youtu.be/DCoBcpOA7W4?t=984)
	- [¿Qué es Kubernetes? | IBM](https://www.ibm.com/es-es/topics/kubernetes) 
	- [Install Tools kubectl](https://kubernetes.io/docs/tasks/tools/)
	- [minikube start](https://minikube.sigs.k8s.io/docs/start/)

---

## INTRO
- docker-compose no escala adecuadamente para producción
- las apps modernas requieren múltiples instancias y nodos distribuidos
- Kubernetes **orquesta contenedores** y automatiza su despliegue
- enfoque **declarativo**: defines el estado deseado, Kubernetes lo aplica
- kubelet: conecta nodos *worker* al cluster y ejecuta los pods
- un **cluster** es un conjunto de nodos que ejecutan apps containerizadas
- gestiona **cargas de trabajo** (apps, microservicios, jobs)
- objetivo: alta disponibilidad, escalabilidad y autorreparación

---

## CONCEPTOS CLAVE
- [¿Qué es Kubernetes?](https://kubernetes.io/es/docs/concepts/overview/what-is-kubernetes/)
- orquestación: ejecución automatizada de flujos definidos (pods, servicios)
- arquitectura basada en **contenedores** y **microservicios**
- API declarativa y extensible
- replicas para alta disponibilidad
- escalado automático (Horizontal Pod Autoscaler)
- coordinación de pods, nodos y servicios mediante el orquestador
- virtualización a nivel del sistema operativo (no de hardware)
- integración con Open Service Broker para servicios externos

---

## ARQUITECTURA
- **Pod**: unidad básica de ejecución (1 o más contenedores), volátil, con IP propia
- **Servicio (Service)**: capa de red estable que expone pods dentro o fuera del cluster  
	- LoadBalancer  
	- Ingress  
	- ClusterIP  
	- NodePort
- **Manifiestos** (YAML declarativos):
	- Deployment, StatefulSet, DaemonSet (plantillas de ejecución)
	- Controller Manager: gestiona pods según los manifiestos
	- Scheduler: asigna pods a nodos según recursos y restricciones
	- etcd: almacén distribuido del estado del cluster
	- API Server: punto central de comunicación y control declarativo

---

## LABELS
- [Etiquetas y Selectores](https://kubernetes.io/es/docs/concepts/overview/working-with-objects/labels/) 
- clave/valor
- permiten seleccionar y agrupar objetos del cluster
- esenciales para filtrado, targeting de deployments y organización lógica

---

## ANNOTATIONS
- [Annotations \| Kubernetes](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/)
- metadatos clave/valor arbitrarios (estructurados o no)
- formato: `prefijo/nombre`  
	- nombre ≤63 caracteres, alfanumérico  
	- prefijo opcional: subdominio DNS (para distinguir anotaciones de sistema/usuario)
- prefijos reservados: `kubernetes.io/`, `k8s.io/`
- usadas por componentes del sistema (`kube-scheduler`, `kube-controller-manager`, `kubectl`, etc.)

---

## SETUP
- [Setup Kubernetes](https://kubernetes.io/es/docs/setup/)
- modelos de infraestructura:
	- SaaS → software como servicio  
	- IaaS → infraestructura como servicio  
	- On-Premises → virtualización local
- herramientas de instalación y gestión:
	- Minikube, kubeadm, k3s, kind
- integración con cloud providers:
	- AWS EKS, GCP GKE, Azure AKS

---

## RECURSOS Y REFERENCIAS
- kubectl cheatsheet: comandos básicos y avanzados
- Helm: gestor de paquetes para Kubernetes
- Operators: automatización de aplicaciones complejas
- ConfigMaps y Secrets: gestión de configuración y credenciales
- Persistent Volumes y StatefulSets: almacenamiento persistente
- HPA y Cluster Autoscaler: autoescalado de pods y nodos

# Kubernetes Avanzado y Fundamentos Complementarios

## Gestión de Cargas de Trabajo
- Deployments: actualización declarativa de pods
- StatefulSets: aplicaciones con estado, persistencia y orden
- DaemonSets: ejecutar un pod por nodo (monitorización, logging)
- Jobs y CronJobs: ejecución de tareas puntuales o programadas
- ReplicaSets: mantener número deseado de pods activos
- HPA (Horizontal Pod Autoscaler): escalar pods según CPU, memoria o métricas personalizadas
- VPA (Vertical Pod Autoscaler): ajustar recursos de pods dinámicamente
- Cluster Autoscaler: escalar nodos según demanda de pods

## Networking en Kubernetes
- Pod Network: comunicación interna entre pods
- Service Network: comunicación estable usando ClusterIP, NodePort, LoadBalancer
- Ingress y Ingress Controller: gestión de rutas HTTP/HTTPS externas
- Network Policies: control de tráfico entre pods usando reglas de firewall
- CNI (Container Network Interface): plugins como Calico, Flannel, Cilium para redes de pods

## Almacenamiento
- Volúmenes: almacenamiento temporal o compartido dentro de pods
- PersistentVolumes (PV) y PersistentVolumeClaims (PVC): almacenamiento persistente
- StorageClasses: definición de tipos de almacenamiento dinámico
- StatefulSets + PVC: asegurar persistencia y orden en pods con estado
- CSI (Container Storage Interface): integración con proveedores externos de almacenamiento

## Configuración y Secretos
- ConfigMaps: configuración no sensible inyectada en pods
- Secrets: información sensible como credenciales, tokens o certificados
- Mounted volumes vs Env variables: métodos para inyectar ConfigMaps y Secrets
- Herramientas de gestión: SealedSecrets, HashiCorp Vault, External Secrets

## Observabilidad
- Logging: Fluentd, Loki, Elasticsearch
- Monitoring: Prometheus, Grafana
- Tracing distribuido: OpenTelemetry, Jaeger, Tempo
- Metrics Server: métricas de CPU/memoria para HPA
- Alerts y dashboards: definición de reglas y visualización centralizada

## Seguridad
- RBAC: control de acceso basado en roles
- ServiceAccounts y Roles: permisos por pod/namespace
- PodSecurityPolicies / OPA Gatekeeper: reglas de seguridad para pods
- Network Policies: restringir tráfico interno
- Secrets cifrados en etcd y en tránsito (TLS)
- Image scanning: detección de vulnerabilidades en imágenes de contenedor
- Admission Controllers: validaciones y mutaciones automáticas

## Gestión de Clústeres
- etcd: almacenamiento de estado distribuido
- kube-apiserver: interfaz principal declarativa
- kube-scheduler: asignación de pods a nodos
- kube-controller-manager: controladores de replicación, deployments y estado
- kubelet: agente en cada nodo
- kube-proxy: gestión de networking y servicios
- Backup y Disaster Recovery: Velero, snapshots de etcd, estrategias multi-cluster

## Helm y Operators
- Helm: gestor de paquetes de Kubernetes, charts para apps complejas
- Operators: automatización de tareas específicas de aplicaciones
- Custom Resources (CRD): extender Kubernetes con nuevos tipos de recursos

## Buenas Prácticas
- Declarativo > Imperativo: versionar manifiestos
- Namespaces: aislar entornos y recursos
- Labels y Annotations: organización y metadata extendida
- Revisar logs y métricas antes de escalar
- Versionar ConfigMaps y Secrets para reproducibilidad
- Automatizar despliegues con CI/CD (ArgoCD, FluxCD, Jenkins X)

## Referencias
- [Documentación oficial Kubernetes](https://kubernetes.io/es/docs/)
- [Kubernetes Patterns](https://www.oreilly.com/library/view/kubernetes-patterns/9781492050285/)
- [Kubernetes Networking Deep Dive](https://kubernetes.io/docs/concepts/cluster-administration/networking/)
- [Helm Charts](https://helm.sh/docs/topics/charts/)

# Kubernetes Cheatsheet 2025
`$= dv.current().file.tags.join(" ")`

## Clúster y Componentes
- **Cluster**: conjunto de nodos que ejecutan aplicaciones containerizadas
- **Node**: máquina física o virtual
- **Pod**: unidad mínima de ejecución, puede contener uno o más contenedores
- **Deployment**: gestión declarativa de pods
- **StatefulSet**: pods con estado y persistencia
- **DaemonSet**: ejecutar pod en todos los nodos
- **Job / CronJob**: tareas puntuales o programadas
- **ReplicaSet**: mantener número deseado de pods

### Componentes Principales
- **kube-apiserver**: API declarativa
- **etcd**: almacenamiento distribuido de estado
- **kube-scheduler**: asigna pods a nodos
- **kube-controller-manager**: mantiene estado deseado
- **kubelet**: agente en cada nodo
- **kube-proxy**: networking y servicios

## Comandos Básicos `kubectl`
- `kubectl get pods` → listar pods
- `kubectl get nodes` → listar nodos
- `kubectl get svc` → listar servicios
- `kubectl describe pod <nombre>` → detalles del pod
- `kubectl logs <pod>` → ver logs de contenedor
- `kubectl exec -it <pod> -- /bin/bash` → acceder a contenedor
- `kubectl apply -f <archivo.yaml>` → crear o actualizar recursos
- `kubectl delete -f <archivo.yaml>` → eliminar recursos
- `kubectl scale deployment <name> --replicas=<n>` → escalar replicas

## Networking
- **Pod IP**: comunicación interna
- **ClusterIP**: IP estable interna
- **NodePort**: exponer servicio en nodo
- **LoadBalancer**: servicio accesible desde fuera del cluster
- **Ingress**: rutas HTTP/HTTPS externas
- **NetworkPolicy**: reglas de tráfico entre pods
- CNI Plugins: Calico, Flannel, Cilium

## Storage
- **Volumes**: almacenamiento temporal
- **PersistentVolume (PV)**: recurso de almacenamiento
- **PersistentVolumeClaim (PVC)**: solicitud de almacenamiento
- **StorageClass**: define tipo de almacenamiento dinámico
- CSI (Container Storage Interface): integración con proveedores externos

## Configuración
- **ConfigMap**: configuración no sensible
- **Secret**: información sensible
- Inyección: variables de entorno o volúmenes montados

## Observabilidad
- **Logging**: Fluentd, Loki, Elasticsearch
- **Monitoring**: Prometheus, Grafana
- **Tracing**: OpenTelemetry, Jaeger, Tempo
- **Metrics Server**: métricas para HPA
- Alertas y dashboards

## Escalado
- **HPA (Horizontal Pod Autoscaler)**: escalar pods según métricas
- **VPA (Vertical Pod Autoscaler)**: ajustar recursos de pods
- **Cluster Autoscaler**: escalar nodos automáticamente

## Seguridad
- **RBAC**: control de acceso por roles
- **ServiceAccounts**: permisos por pod/namespace
- **PodSecurityPolicies / OPA Gatekeeper**: reglas de seguridad
- **Network Policies**: restringir tráfico interno
- **Secrets cifrados** en etcd y en tránsito

## Helm y Operators
- **Helm**: gestor de paquetes, charts para apps
- **Operators**: automatización de tareas específicas
- **CRD**: Custom Resource Definitions

## Labels y Annotations
- **Labels**: clave/valor para organizar y seleccionar objetos
- **Annotations**: clave/valor para metadatos arbitrarios

## Buenas Prácticas
- Declarativo > Imperativo
- Versionar manifiestos, ConfigMaps y Secrets
- Usar Namespaces para aislar entornos
- Revisar logs y métricas antes de escalar
- Automatizar despliegues con CI/CD (ArgoCD, FluxCD, Jenkins X)

# Kubernetes Temas Avanzados y Complementarios

## Observabilidad Avanzada
- **Sidecar Containers**: contenedores auxiliares para logging, monitoring o proxy
- **Service Mesh**: Istio, Linkerd, Consul para gestión de tráfico, resiliencia y seguridad
- **Tracing distribuido**: seguimiento de requests entre microservicios
- **Metrics y Alerts avanzadas**: Prometheus + Alertmanager + Grafana dashboards
- **Logging centralizado**: Fluentd → Elasticsearch → Kibana/Loki

## Autoscaling y Optimización
- **Cluster Autoscaler**: ajuste dinámico de nodos según demanda
- **HPA avanzado**: escalar según métricas personalizadas (latencia, queue length)
- **VPA avanzado**: ajuste de recursos según tendencias históricas
- **Pod Disruption Budget (PDB)**: asegura disponibilidad mínima durante mantenimientos

## Networking Avanzado
- **Ingress Controllers**: NGINX, Traefik, HAProxy
- **Load Balancing interno**: kube-proxy + IPVS
- **Multicluster Networking**: comunicación entre clusters (Federation v2, Submariner)
- **DNS interno**: CoreDNS para resolución de servicios
- **CNI avanzadas**: políticas de aislamiento con Calico, Cilium
- **eBPF**: observabilidad y seguridad en networking a bajo nivel

## Seguridad Avanzada
- **Pod Security Standards**: baseline, restricted, privileged
- **Admission Controllers**: validación y mutación automática
- **Image Policy / Scanning**: integración con Trivy, Anchore, Clair
- **Secrets Management externo**: HashiCorp Vault, External Secrets Operator
- **TLS y certificados**: cert-manager para certificados automáticos
- **Control de acceso granular**: RBAC + ABAC + Network Policies

## Almacenamiento Avanzado
- **Dynamic Provisioning**: PV creados automáticamente según StorageClass
- **Volume Snapshots**: backup/restauración de volúmenes
- **StatefulSets + PVCs**: asegurar persistencia con pods con estado
- **CSI Drivers**: integración con cloud providers y soluciones on-premises

## Extensibilidad
- **Custom Resource Definitions (CRD)**: añadir nuevos tipos de recursos
- **Operators**: automatización de tareas complejas (DB, apps empresariales)
- **Webhooks**: Validating y Mutating Webhooks para políticas dinámicas
- **Kubernetes API Aggregation**: extender API de Kubernetes con APIs externas

## CI/CD Integrado
- **GitOps**: ArgoCD, FluxCD para despliegues declarativos desde repositorio Git
- **Integración con Jenkins / GitHub Actions / GitLab CI**
- **Automatización de tests y despliegues**: integración con pods de staging
- **Rollback automático**: estrategias de despliegue Canary, Blue/Green

## Observabilidad de Aplicaciones
- **Prometheus Metrics Exporters**: Node Exporter, cAdvisor
- **Tracing y Logs correlacionados**: OpenTelemetry + Jaeger
- **Dashboards centralizados**: Grafana dashboards por namespace, app y pod
- **Alertas proactivas**: umbrales de CPU, memoria, latencia, errores 5xx

## Buenas Prácticas Avanzadas
- Separar entornos con Namespaces y ResourceQuotas
- Versionar todo (manifiestos, charts, ConfigMaps, Secrets)
- Evitar pods privilegiados y usar SecurityContext
- Monitorear eventos de Kubernetes con `kubectl get events -A`
- Revisión periódica de cluster y nodos (kube-bench, kube-hunter)
- Uso de etiquetas y anotaciones para trazabilidad y organización

## Referencias Avanzadas
- [Kubernetes Patterns](https://www.oreilly.com/library/view/kubernetes-patterns/9781492050285/)
- [Service Mesh con Istio](https://istio.io/latest/docs/)
- [Observabilidad Kubernetes](https://kubernetes.io/docs/tasks/debug-application-cluster/)
- [CI/CD GitOps](https://argo-cd.readthedocs.io/en/stable/)
