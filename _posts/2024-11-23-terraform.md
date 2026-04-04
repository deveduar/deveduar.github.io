---
date: 2024-11-23 03:43
title: Terraform
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: devops
tags:
  - devops
  - terraform
  - cloud
  - infraestructura
---
# Terraform

## Conceptos base y ecosistema
- [IInfraestructura como codigo](/devops/iinfraestructura-como-codigo/)
- [devops](/devops/devops/)
- [cloud](/cloud/cloud/)
- Automatizacion
- [Aws](/cloud/aws/)
- [GCP Google cloud](/data%20science/gcp-google-cloud/)
- Terraform permite definir, versionar y desplegar infraestructura mediante archivos declarativos
- Lenguajes soportados:
	- HCL (HashiCorp Configuration Language) como estándar
	- JSON como alternativa menos legible
- Enfoque declarativo:
	- Se define el **estado deseado**
	- Terraform calcula el delta entre estado actual y deseado

## Casos de uso y ejemplos
- Gestión de recursos de proveedores cloud
	- Máquinas virtuales, almacenamiento, bases de datos, IAM
- Redes y seguridad
	- Redes privadas (VPC/VNet)
	- Subredes públicas y privadas
	- Reglas de firewall y security groups
- Balanceo de carga
	- Load balancers para distribuir tráfico entre instancias
- Gestión de entornos híbridos
	- Infraestructura local + cloud
	- Conexión de red on-premise con VPC de AWS
- DNS y routing
	- Gestión de DNS con Route53 o Cloudflare
- Automatización de despliegues
	- Integración con GitLab CI/CD o GitHub Actions
	- Infraestructura desplegada como parte de pipelines
- Contenedores y orquestación
	- Implementación de clústeres [Kubernetes](/virtualizacion/kubernetes/)
	- EKS (AWS), AKS (Azure), GKE (GCP)

## Infraestructura mutable vs inmutable
- Infraestructura mutable
	- Cambios aplicados directamente sobre recursos existentes
	- Herramientas típicas: Ansible, Puppet
- Infraestructura inmutable
	- Recursos se reemplazan en lugar de modificarse
	- Mayor trazabilidad y consistencia
- Versionado y migraciones
	- Control de cambios mediante Git
	- Rollback sencillo a versiones previas
## Configuración vs estado
- Configuración
	- Archivos `.tf` que definen recursos deseados
- Estado (state)
	- Archivo que refleja la infraestructura real
	- Puede contener información sensible
- Backend de estado
	- Local (por defecto)
	- Backend cloud (recomendado en equipos)
		- Terraform Cloud / Enterprise
		- S3 + DynamoDB (AWS)
	- Control de bloqueos y concurrencia
- Gestión de apply
	- Evitar ejecuciones simultáneas
	- Auditoría de cambios

## Planificación y aplicación
- `terraform plan`
	- Simula los cambios sin aplicarlos
	- Muestra:
		- values
		- instance_type
		- ami
		- arn, id, IPs
	- Detecta diferencias entre AWS y el estado de Terraform
- `terraform apply`
	- Aplica los cambios calculados
	- Opción de corrección directa:
		- `terraform apply -auto-approve`

## Integración con on-premise
- Interacción con infraestructura local
	- Cisco Intersight (ITS)
	- Conectores híbridos
- Casos habituales
	- Extensión de red local a la nube
	- Gestión centralizada de recursos

## Documentación y recursos
- [Infrastructure as Code (IaC) con Terraform](https://www.deloitte.com/es/es/services/consulting/blogs/todo-tecnologia/infrastructure-as-code-iac-con-terraform.html)
- [Docker | Terraform | HashiCorp Developer](https://developer.hashicorp.com/terraform/tutorials/docker-get-started)
- [¿Qué son los archivos de configuración en Terraform? - YouTube](https://youtu.be/abTxS9JJ6W4)
- [Comandos comunes en Terraform - YouTube](https://youtu.be/ECEW-P4l7Xg)
- [Terraform Registry providers](https://registry.terraform.io/namespaces/hashicorp)
- Conceptos adicionales
	- Workspaces
	- Providers
	- Modules reutilizables

## Pasos básicos de trabajo
- Curso y ejemplos
	- [GitHub - ingjavierpinilla/curso-terraform](https://github.com/ingjavierpinilla/curso-terraform)
- Acceso y credenciales
	- IAM en [Aws](/cloud/aws/)
	- Uso de access key y secret key
	- Variables de entorno:
		- `TF_VAR_name`
		- `var.access_key`

## Comandos principales
### Inicialización y formato
{% raw %}
```bash
terraform init
terraform fmt
```
{% endraw %}`

### Planificación

{% raw %}
```bash
terraform plan
```
{% endraw %}

### Aplicación y destrucción

{% raw %}
```bash
terraform apply
terraform destroy
terraform apply -auto-approve
```
{% endraw %}

## Configuración inicial de proyecto

- Archivos base
    - `main.tf`
    - `vars.tf`
- Provider
    - Definición del proveedor cloud
    - Uso de credenciales por variables o entorno
- Variables
    - Uso de `.tfvars`
        - `terraform apply -var-file=vars.tfvars`
        - `-var`
        - `-var-file`
        - `.auto.tfvars` o `auto.tfvars.json`
- Variables locales
    - Constructor de objetos locales
        - Ejemplo: `extra_tag = "extra_tag"`

## Recursos y outputs

- Definición de recursos
    - `resource`
- Outputs
    - Mostrar IPs y datos relevantes

{% raw %}
```hcl
output "instance_ip_addr" {
	value = aws_instance.example.private_ip
}
```
{% endraw %}

## Creación de instancias EC2 en AWS

- Recursos EC2
    - Definición de AMI, tipo de instancia y tags
- Uso de funciones y bucles
    - `for_each` para múltiples instancias
    - Interpolación de claves

{% raw %}
```hcl
tags = {
	Name = "EC2-${each.key}"
	ExtraTag = local.extra_tagName
}
```
{% endraw %}

## Integración con CloudWatch

- Creación de recursos adicionales

{% raw %}
```hcl
resource "aws_cloudwatch_log_group" "ec2_log_group" {
	tags = {
		Environment = "test"
		Service = each.key
	}
}
```
{% endraw %}

### Output de logs y direcciones

{% raw %}
```hcl
output "ec2_private_ips" {
	value = {
		for service, i in aws_instance.example :
		service => i.private_ip
	}
}
```
{% endraw %}

## Uso de módulos: VPC y Security Groups

- Registro oficial
    - [Terraform Registry vpc](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc)
- Ventajas de módulos
    - Reutilización
    - Código más limpio
    - Buenas prácticas integradas
- Configuración de networking

{% raw %}
```hcl
module "vpc" {
	source = "terraform-aws-modules/vpc/aws"
}
```
{% endraw %}

{% raw %}
```hcl
module "terraform-sg" {
	source = "terraform-aws-modules/security-group/aws"
	vpc_id = module.vpc.vpc_id
}
```
{% endraw %}

### Referencia de módulos en recursos

{% raw %}
```hcl
resource "aws_instance" "example" {
	subnet_id = module.vpc.public_subnets[0]
	vpc_security_group_ids = [module.terraform-sg.security_group_id]
}
```
{% endraw %}

## Workspaces y diseño de código

- Uso de workspaces
    - Separación lógica de entornos
    - dev, prod, test
- Comandos

{% raw %}
```bash
terraform workspace list
terraform workspace new prod
terraform workspace select default
```
{% endraw %}

### Lógica condicional por entorno

{% raw %}
```hcl
resource "aws_instance" "example" {
	count = terraform.workspace == "prod" ? 2 : 1

	tags = {
		env  = terraform.workspace
		Name = format("%s-%s", terraform.workspace, count.index)
	}
}
```
{% endraw %}`
# Ejemplos de app web con [Aws](/cloud/aws/)

* [GitHub - caosbinario/webinar-terraform: Código utilizado para el webinar de terraform](https://github.com/caosbinario/webinar-terraform)

## Arquitectura base
- Aplicación web simple sobre instancia EC2 `t3_micro`
- Servidor web [nginx](/backend/nginx/)
- Despliegue automatizado con Terraform
- Acceso remoto mediante ssh
- Red aislada mediante VPC

## EC2 con Nginx usando user_data
- Instalación automática de Nginx
- Uso de `user_data` en el recurso `aws_instance`
- Script bash ejecutado al iniciar la instancia

### Script user_data (bash)
{% raw %}
```bash
#!/bin/bash
yum update -y
amazon-linux-extras install nginx1 -y
systemctl start nginx
systemctl enable nginx
```
{% endraw %}`


## Red y seguridad

* Uso de VPC dedicada
* Puertos abiertos:
	* 80 (HTTP)
	* 22 (SSH)
* Acceso permitido desde `0.0.0.0/0` (solo para pruebas)

## Gestión de claves SSH

* Generar par de claves

{% raw %}
```bash
ssh-keygen -t rsa 2048 -f "nginx-server.key"
```
{% endraw %}

* Subir clave pública a AWS
* Uso del recurso `aws_key_pair`

### Recurso aws_key_pair

{% raw %}
```hcl
resource "aws_key_pair" "nginx-server-ssh" {
	key_name   = "nginx-server-key"
	public_key = file("nginx-server.key.pub")
}
```
{% endraw %}

## Security Group

* Definición de reglas de entrada y salida
* Asociación a la VPC
* Asignación del security group a la instancia

### Recurso aws_security_group

{% raw %}
```hcl
resource "aws_security_group" "nginx-server-sg" {
	name   = "nginx-server-sg"
	vpc_id = aws_vpc.main.id

	ingress {
		from_port   = 22
		to_port     = 22
		protocol    = "tcp"
		cidr_blocks = ["0.0.0.0/0"]
	}

	ingress {
		from_port   = 80
		to_port     = 80
		protocol    = "tcp"
		cidr_blocks = ["0.0.0.0/0"]
	}

	egress {
		from_port   = 0
		to_port     = 0
		protocol    = "-1"
		cidr_blocks = ["0.0.0.0/0"]
	}
}
```
{% endraw %}

### Asociación del SG a la instancia

{% raw %}
```hcl
vpc_security_group_ids = [aws_security_group.nginx-server-sg.id]
```
{% endraw %}

## Tags y metadatos

* Uso de variables como objeto de tags
* Identificación clara del entorno y recurso

### Tags en recursos

{% raw %}
```hcl
tags = {
	Name        = var.server_name
	Environment = var.environment
}
```
{% endraw %}

## Outputs y verificación

* Visualización de información tras el despliegue
* Uso de `terraform output`

### Outputs definidos

{% raw %}
```hcl
output "server_public_ip" {
	value = aws_instance.nginx-server.public_ip
}

output "server_public_dns" {
	value = aws_instance.nginx-server.public_dns
}
```
{% endraw %}

## Pruebas de acceso

* Probar servidor web

{% raw %}
```bash
curl http://<public_ip>
```
{% endraw %}

* Conexión SSH

{% raw %}
```bash
ssh ec2-user@3.232.132.177 -i ./nginx-server.key
```
{% endraw %}

## Variables y entornos

* Variables con valores por defecto
* Separación por entorno: dev, qa, prod
* Archivos:
  * `variables.tf`
  * `terraform.tfvars`

### Variable de ejemplo

{% raw %}
```hcl
variable "server_name" {
	type    = string
	default = "nginx-server"
}
```
{% endraw %}

## Uso de módulos

* Reutilización de código
* Mismo módulo para distintos entornos
* Diferentes claves SSH por entorno
* Outputs expuestos por módulo

### Output desde módulo

{% raw %}
```hcl
value = module.nginx_server_dev.server_public_ip
```
{% endraw %}

## Gestión de estado (tf state)

* Colaboración en equipos
* Almacenamiento remoto en [Backend](/backend/backend/)
* Uso de buckets S3 en [Aws](/cloud/aws/)

## Planes en pipelines CI/CD

* Guardar plan para revisión

{% raw %}
```bash
terraform plan -out server_qa.tfplan
```
{% endraw %}

* Integración con [CICD](/devops/cicd/)

## Importación de infraestructura existente

* Importar recursos creados manualmente en AWS
* Ejemplo: instancia EC2 existente

### Importar recurso

{% raw %}
```bash
terraform import aws_instance.server-web i-23234235fdg
```
{% endraw %}

### Recurso vacío inicial

{% raw %}
```hcl
resource "aws_instance" "server-web" {}
```
{% endraw %}

### Inspección del estado

{% raw %}
```bash
terraform state show aws_instance.server-web
```
{% endraw %}

* Copiar propiedades al recurso:
	* ami
	* instance_type
	* tags
	* vpc_security_group_ids

## AWS CLI
* Uso de [Aws](/cloud/aws/) CLI
* Configuración inicial

{% raw %}
```bash
aws configure
```
{% endraw %}

## Ciclo de vida de recursos

* Inicialización de plugins con `terraform init`
* Creación con `plan`
* Aplicación con `apply`
* Verificación desde el panel de AWS

## Terraform con [Aws](/cloud/aws/) y [Docker](/software%20engineering/docker/)

* Ejemplo completo con CI/CD
* [GitHub - culturadevops/terraform-docker-and-codepipeline](https://github.com/culturadevops/terraform-docker-and-codepipeline)

## Terraform como imagen Docker

* [Containerizing Terraform - DEV Community](https://dev.to/morethancertified/containerizing-terraform-3h3e)
* Imagen oficial:
  * [hashicorp/terraform](https://hub.docker.com/r/hashicorp/terraform)
* No requiere Dockerfile propio
* Ejecución directa de comandos Terraform
## AWS CodePipeline y CodeBuild

* Automatización completa del despliegue
* Uso de:
	* CodePipeline
	* CodeBuild
	* Artifacts en S3
	* Recursos Terraform
* `aws_codepipeline`
* Fases:
	* Source (Git / Bitbucket)
	* Build (buildspec.yml)
	* Deploy
	* Limpieza de buckets S3 al destruir
	* Ejecución manual vs automática
* Documentación oficial:
	* [What is AWS CodeCommit? - AWS CodeCommit](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html)
	* [What is AWS CodePipeline? - AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html)
	* [¿Qué es AWS CodeBuild? - AWS CodeBuild](https://docs.aws.amazon.com/es_es/codebuild/latest/userguide/welcome.html)
	* [¿Qué es AWS Secrets Manager? - AWS Secrets Manager](https://docs.aws.amazon.com/es_es/secretsmanager/latest/userguide/intro.html)

## Buckets S3

* Almacenamiento de artifacts
* Almacenamiento del estado Terraform

### Recursos S3

{% raw %}
```hcl
resource "aws_s3_bucket" "codepipeline_artifacts" {}
resource "aws_s3_bucket" "terraformstate" {}
```
{% endraw %}

## Makefile y automatización

* Uso de [bash](/desarrollo%20multiplataforma/bash/) y Makefile
* Ejecución de Terraform en Docker
* Gestión de variables de entorno

### Comando de ejemplo

{% raw %}
```bash
make apply
```
{% endraw %}

## Backend remoto y provider

### Configuración de backend S3

{% raw %}
```hcl
backend "s3" {
	bucket = "es3"
}
```
{% endraw %}

### Provider AWS

{% raw %}
```hcl
provider "aws" {
	region = "eu-west-1"
}
```
{% endraw %}

## Docker Compose

* Volumen compartido `/infra`
* Persistencia de estado y configuraciones

## Credenciales [IAM Gestión de Identidades y Acceso](/autenticacion/iam-gesti-n-de-identidades-y-acceso/)

* Uso de roles y policies
* Acceso mínimo necesario
* Integración con CI/CD
* Compatibilidad con [jenkins](/devops/jenkins/)

# Terraform – conceptos avanzados y temas no cubiertos

## Fuentes de datos (data sources)
- Permiten **leer información existente** sin crear recursos
- Casos comunes:
	- Obtener AMIs oficiales o custom
	- Consultar VPCs, subredes o security groups existentes
- Diferencia clave:
	- `resource` crea o gestiona
	- `data` solo consulta

### Uso típico
{% raw %}
```hcl
data "aws_ami" "amazon_linux" {
	most_recent = true
	owners      = ["amazon"]
}
```
{% endraw %}`

## Dependencias explícitas

* Terraform infiere dependencias por referencias
* En casos complejos se usa `depends_on`
* Útil cuando:
	* Recursos externos
	* Scripts o side-effects no detectables

### Ejemplo

{% raw %}
```hcl
depends_on = [aws_security_group.nginx-server-sg]
```
{% endraw %}

## Ciclo de vida de recursos

* Control del comportamiento ante cambios
* Prevención de errores en producción

### lifecycle

{% raw %}
```hcl
lifecycle {
	prevent_destroy = true
	create_before_destroy = true
}
```
{% endraw %}

* `prevent_destroy`
	* Evita borrados accidentales
* `create_before_destroy`
	* Minimiza downtime

## Bloques dinámicos

* Generación dinámica de configuraciones repetitivas
* Ideal para:
	* Reglas de firewall
	* Configuraciones variables

### dynamic block

{% raw %}
```hcl
dynamic "ingress" {
	for_each = var.ingress_rules
	content {
		from_port   = ingress.value.port
		to_port     = ingress.value.port
		protocol    = "tcp"
		cidr_blocks = ingress.value.cidr
	}
}
```
{% endraw %}

## Locals avanzados

* Centralizan lógica de negocio
* Reducen duplicación
* Permiten expresiones complejas

### locals

{% raw %}
```hcl
locals {
	env_prefix = "${var.project}-${var.environment}"
	common_tags = {
		Project = var.project
		Env     = var.environment
	}
}
```
{% endraw %}

## IAM Roles para EC2

* Alternativa segura a access keys
* Uso recomendado en producción
* Integración con servicios AWS
* Ventajas:
	* No credenciales hardcodeadas
	* Rotación automática
	* Menor superficie de ataque

## TLS, HTTPS y certificados
* Uso de AWS ACM
* Integración con:
	* Load Balancer
	* CloudFront
* Automatización completa del ciclo TLS
## Load Balancer y Auto Scaling

* Arquitecturas escalables y resilientes
* Componentes:
	* ALB / NLB
	* Auto Scaling Group
	* Launch Templates
* Casos de uso:
	* Alta disponibilidad
	* Escalado automático
	* Zero-downtime deployments

## DNS y enrutamiento avanzado

* Integración con Route53
* Gestión de:
	* Registros A / CNAME
	* Alias a ALB
* Infraestructura declarativa de DNS

## Imágenes inmutables (AMI baking)

* Crear AMIs preconfiguradas
* Flujo recomendado:
	* Packer + Terraform
* Beneficios:
	  * Arranque más rápido
	  * Menos lógica en `user_data`
	  * Mayor reproducibilidad

## Provisioners (uso limitado)

* `remote-exec`
* `file`
* Considerados último recurso
* Riesgos:
	* No idempotentes
	* Dependientes de red
* Recomendación:
	* Usar AMIs o herramientas de configuración externas
## Testing y calidad de infraestructura

* Validaciones:
	* `terraform validate`
	* `terraform fmt`
* Testing:
	* `terraform test`
* Linting:
	* tflint
	* tfsec

## Seguridad y buenas prácticas

* No subir `terraform.tfstate` a repositorios
* Uso de:
	* Backends remotos cifrados
	* Secrets Manager
	* Variables sensibles

### sensitive outputs

{% raw %}
```hcl
output "db_password" {
	value     = var.db_password
	sensitive = true
}
```
{% endraw %}

## Gestión de costes

* Etiquetado obligatorio
* Uso de `terraform plan` para estimar impacto
* Integración con:

  * AWS Cost Explorer
  * Presupuestos por entorno

## Drift detection

* Detección de cambios manuales en cloud
* `terraform plan` como herramienta de auditoría
* Importante en entornos compartidos

## Destrucción controlada

* Separación clara de entornos
* Uso de workspaces o cuentas distintas
* Protección de recursos críticos

## Escalado organizativo

* Terraform Cloud / Enterprise
* Features clave:
	* Remote runs
	* Policy as Code (Sentinel)
	* Control de acceso por equipos

## Integración con otras herramientas

* Ansible para configuración post-provisión
* [Kubernetes](/virtualizacion/kubernetes/) para workloads
* Packer para imágenes
* [HashiCorp Vault](/ciberseguridad/hashicorp-vault/) para secretos

## Casos de uso empresariales

* Landing zones
* Multi-account AWS
* Infraestructura regulada
* Auditoría y compliance automatizado


# Recursos Terraform (estado 2025)

## Documentación y tutoriales oficiales
- **Terraform Tutorials – HashiCorp Developer**  
  Colección de tutoriales paso a paso para múltiples proveedores y casos de uso, incluyendo AWS, Azure, GCP y Docker.  
  [Terraform Tutorials](https://developer.hashicorp.com/terraform/tutorials)

- **Terraform AWS Get Started – HashiCorp Developer**  
  Tutorial interactivo completo para crear, gestionar y destruir infraestructura AWS con Terraform.  
  [Terraform AWS Get Started](https://developer.hashicorp.com/terraform/tutorials/aws-get-started)

## Guías y artículos actualizados
- **Terraform on AWS — The Most Complete Beginner Guide for 2025**  
  Guía reciente que cubre fundamentos, estructura de proyectos, módulos, estado remoto y buenas prácticas actuales.  
  [Terraform on AWS 2025](https://medium.com/atmosly/terraform-on-aws-the-most-complete-beginner-guide-for-2025-f1c2cdf1ed4d)

- **Terraform Tutorial for Beginners 2025**  
  Guía actualizada para principiantes con los conceptos esenciales y primeros pasos en Terraform.  
  [Terraform Beginners Guide 2025](https://k21academy.com/terraform/terraform-beginners-guide/)

- **Complete Terraform Guide (BuzzClan, 2025)**  
  Visión global de Terraform IaC, ciclo de vida, estado, módulos y uso empresarial.  
  [Complete Terraform Guide](https://buzzclan.com/cloud/terraform-complete-guide/)

## Libros y cursos recomendados
- **Terraform YouTube & Video Playlists (2025 Edition)**  
  Curso completo en vídeo desde nivel básico hasta avanzado con ejemplos prácticos.  
  [Terraform Playlist](https://www.youtube.com/playlist?list=PLGyKZJoyKdOfehoKuFC1PKTGzMtRwnGNd)

- **Tutorials en YouTube sobre IaC con Terraform (2025)**  
  Guías prácticas centradas en casos reales y buenas prácticas actuales.  
  [Terraform IaC YouTube](https://www.youtube.com/watch?v=p8_-jvlEYTo)

## Versiones y estado del software
- **Terraform (software)**  
  Herramienta IaC desarrollada por HashiCorp en Go.  
  Estado a 2025: versión estable **Terraform v1.14.x**.  
  [Terraform – Wikipedia](https://en.wikipedia.org/wiki/Terraform_(software))

## Buenas prácticas y guías prescriptivas
- **AWS Guía prescriptiva – Terraform AWS Provider Best Practices**  
  Recomendaciones oficiales de AWS para el uso de Terraform con AWS: módulos, versiones, estado remoto y seguridad IAM.  
  [Terraform AWS Provider Best Practices](https://docs.aws.amazon.com/prescriptive-guidance/latest/terraform-aws-provider-best-practices/terraform-aws-provider-best-practices.pdf)

- **HashiCorp Module Creation Patterns**  
  Patrones recomendados para crear módulos reutilizables y mantenibles.  
  [Terraform Module Creation Patterns](https://www.hashicorp.com/blog/terraform-tutorial-module-creation-recommended-pattern)

## Investigación y tendencias
### IaC y automatización con IA
- **Multi-Agent Code-Orchestrated Generation for Reliable IaC (2025)**  
  Investigación sobre generación de IaC modular y gobernada por políticas usando múltiples agentes de IA.  
  [arXiv – Multi-Agent IaC](https://arxiv.org/abs/2510.03902)

- **IaC Generation with LLMs: Error Taxonomy and Configuration Knowledge Injection**  
  Estudio sobre errores comunes en IaC generado por LLMs y técnicas para mejorar Terraform generado por IA.  
  [arXiv – IaC Generation with LLMs](https://arxiv.org/abs/2512.14792)

### Calidad y sostenibilidad en IaC
- **Smells-sus: Sustainability Smells in IaC (2025)**  
  Investigación sobre patrones de IaC que impactan en costes y sostenibilidad.  
  [arXiv – Sustainability Smells in IaC](https://arxiv.org/abs/2501.07676)

- **Multi-IaC-Eval: Benchmarking Cloud IaC Across Formats (2025)**  
  Benchmark para evaluar IaC en distintos formatos, incluyendo Terraform.  
  [arXiv – Multi-IaC-Eval](https://arxiv.org/abs/2509.05303)

## Proyectos alternativos y ecosistema
- **OpenTofu**  
  Proyecto open-source bajo la Linux Foundation como alternativa compatible con Terraform.  
  [OpenTofu](https://opentofu.org/)

## Recursos adicionales
### Herramientas complementarias para Terraform
- Validación y seguridad
	- TFLint
	- tfsec
	- Checkov

### Integración y colaboración
- Estado remoto
	- S3 + DynamoDB
	- Terraform Cloud / Enterprise
- CI/CD
	- GitHub Actions
	- GitLab CI/CD
	- Pipelines automatizados

## Repositorios útiles
- **Terraform (HashiCorp) GitHub**  
  Código fuente oficial y releases.  
  [Terraform GitHub](https://github.com/hashicorp/terraform)

- **Terraform Registry**  
  Proveedores y módulos oficiales y comunitarios.  
  [Terraform Registry](https://registry.terraform.io/)

## Canales de aprendizaje rápido
- Comunidad HashiCorp Discuss
- Meetups y grupos DevOps
- Blogs técnicos centrados en IaC y Terraform

# Terraform – explicación con ejemplos de código

## Estructura básica de un proyecto Terraform
- Un proyecto Terraform se compone de archivos `.tf`
- No importa el orden de los archivos
- Terraform carga todo el directorio como una única configuración

Estructura típica:
- `main.tf` → recursos principales
- `providers.tf` → proveedores
- `variables.tf` → definición de variables
- `outputs.tf` → valores de salida
- `backend.tf` → estado remoto

## Provider
- Define el proveedor cloud o servicio externo
- Gestiona autenticación y región

### Provider AWS
{% raw %}
```hcl
provider "aws" {
	region = "eu-west-1"
}
```
{% endraw %}`

## Recursos (resource)

* Representan infraestructura real
* Cada recurso tiene:
	* tipo
	* nombre lógico
	* configuración

### Recurso EC2 básico

{% raw %}
```hcl
resource "aws_instance" "web" {
	ami           = "ami-0abcdef1234567890"
	instance_type = "t3.micro"
}
```
{% endraw %}

## Variables

* Permiten reutilizar código
* Evitan valores hardcodeados
* Se pueden sobreescribir por entorno

### Definición de variable

{% raw %}
```hcl
variable "instance_type" {
	type    = string
	default = "t3.micro"
}
```
{% endraw %}

### Uso de variable

{% raw %}
```hcl
instance_type = var.instance_type
```
{% endraw %}

## Variables por entorno (.tfvars)

* Separan configuraciones dev, qa, prod
* Se cargan automáticamente o por CLI

### Archivo `dev.tfvars`

{% raw %}
```hcl
instance_type = "t3.micro"
```
{% endraw %}

### Aplicar variables

{% raw %}
```bash
terraform apply -var-file=dev.tfvars
```
{% endraw %}

## Variables locales (locals)

* Lógica reutilizable dentro del proyecto
* Ideal para tags y nombres compuestos

### locals

{% raw %}
```hcl
locals {
	name_prefix = "${var.project}-${var.environment}"
}
```
{% endraw %}

## Tags

* Clave para costes, auditoría y organización
* Buenas prácticas en AWS

### Tags comunes

{% raw %}
```hcl
tags = {
	Name        = local.name_prefix
	Environment = var.environment
}
```
{% endraw %}

## Outputs

* Devuelven información útil tras el despliegue
* Usados por humanos o por otros módulos

### Output de IP pública

{% raw %}
```hcl
output "public_ip" {
	value = aws_instance.web.public_ip
}
```
{% endraw %}

## Data sources

* Consultan recursos existentes
* No crean infraestructura

### Obtener AMI más reciente

{% raw %}
```hcl
data "aws_ami" "amazon_linux" {
	most_recent = true
	owners      = ["amazon"]
}
```
{% endraw %}

### Uso del data source

{% raw %}
```hcl
ami = data.aws_ami.amazon_linux.id
```
{% endraw %}

## user_data

* Script ejecutado al arrancar la instancia
* Ideal para bootstrap básico

### user_data con Nginx

{% raw %}
```hcl
user_data = <<EOF
#!/bin/bash
yum install -y nginx
systemctl start nginx
systemctl enable nginx
EOF
```
{% endraw %}

## Security Groups

* Controlan tráfico de red
* Reglas ingress y egress

### Security Group básico

{% raw %}
```hcl
resource "aws_security_group" "web_sg" {
	name = "web-sg"

	ingress {
		from_port   = 80
		to_port     = 80
		protocol    = "tcp"
		cidr_blocks = ["0.0.0.0/0"]
	}

	egress {
		from_port   = 0
		to_port     = 0
		protocol    = "-1"
		cidr_blocks = ["0.0.0.0/0"]
	}
}
```
{% endraw %}

## Dependencias

* Terraform infiere dependencias automáticamente
* `depends_on` fuerza el orden cuando es necesario

### depends_on

{% raw %}
```hcl
depends_on = [aws_security_group.web_sg]
```
{% endraw %}

## Bucles y for_each

* Permiten crear múltiples recursos dinámicamente

### Crear varias instancias

{% raw %}
```hcl
resource "aws_instance" "servers" {
	for_each = var.servers

	ami           = each.value.ami
	instance_type = each.value.type
	tags = {
		Name = each.key
	}
}
```
{% endraw %}

## Condiciones

* Cambian comportamiento según entorno

### count condicional

{% raw %}
```hcl
count = var.environment == "prod" ? 2 : 1
```
{% endraw %}

## Módulos

* Agrupan recursos reutilizables
* Aumentan mantenibilidad y escalabilidad

### Llamada a módulo

{% raw %}
```hcl
module "web_server" {
	source        = "./modules/web"
	instance_type = "t3.micro"
}
```
{% endraw %}

## Outputs en módulos

* Exponen información del módulo al root

### Output en módulo

{% raw %}
```hcl
output "server_ip" {
	value = aws_instance.web.public_ip
}
```
{% endraw %}

## Backend remoto

* Permite colaboración en equipo
* Evita conflictos de estado

### Backend S3

{% raw %}
```hcl
terraform {
	backend "s3" {
		bucket = "terraform-states"
		key    = "web/terraform.tfstate"
		region = "eu-west-1"
	}
}
```
{% endraw %}

## Workspaces

* Separan entornos lógicos
* Usan el mismo código

### Uso de workspace

{% raw %}
```bash
terraform workspace new prod
terraform workspace select prod
```
{% endraw %}

### Uso en código

{% raw %}
```hcl
tags = {
	Environment = terraform.workspace
}
```
{% endraw %}

## lifecycle

* Controla cómo se crean o destruyen recursos

### lifecycle

{% raw %}
```hcl
lifecycle {
	prevent_destroy = true
	create_before_destroy = true
}
```
{% endraw %}

## Importar infraestructura existente

* Permite adoptar recursos manuales

### Import

{% raw %}
```bash
terraform import aws_instance.legacy i-0123456789abcdef0
```
{% endraw %}

## Plan y apply

* `plan` muestra cambios
* `apply` los ejecuta

### Guardar plan

{% raw %}
```bash
terraform plan -out=tfplan
terraform apply tfplan
```
{% endraw %}

## Buenas prácticas

* Un módulo por responsabilidad
* Variables explícitas
* Estado remoto siempre
* No usar provisioners salvo excepción
* Usar IAM Roles en vez de access keys

# Terraform – glosario de conceptos

## Conceptos generales
- **Terraform**
	- Herramienta de [IInfraestructura como codigo](/devops/iinfraestructura-como-codigo/) para definir y gestionar infraestructura declarativamente
- **Infrastructure as Code (IaC)**
	- Práctica de definir infraestructura mediante código versionable
- **Declarativo**
	- Se describe el estado deseado, no los pasos para alcanzarlo
- **Idempotencia**
	- Ejecutar varias veces produce el mismo resultado
- **Drift**
	- Diferencia entre la infraestructura real y la definida en Terraform

## Lenguaje y sintaxis
- **HCL (HashiCorp Configuration Language)**
	- Lenguaje principal de Terraform, legible y expresivo
- **Bloque**
	- Unidad básica de configuración (`resource`, `provider`, `variable`, etc.)
- **Interpolación**
	- Uso de valores dinámicos dentro de strings
- **Expresiones**
	- Operaciones lógicas, condicionales y matemáticas

## Providers
- **Provider**
	- Plugin que permite a Terraform interactuar con APIs externas
- **Provider AWS**
	- Permite gestionar recursos en [Aws](/cloud/aws/)
- **Inicialización de providers**
	- Descarga automática mediante `terraform init`
- **Versionado de providers**
	- Control de compatibilidad y estabilidad

## Recursos
- **Resource**
	- Representa un objeto de infraestructura real
- **Tipo de recurso**
	- Define la clase del recurso (`aws_instance`, `aws_s3_bucket`)
- **Nombre lógico**
	- Identificador interno del recurso en Terraform
- **Lifecycle**
	- Controla creación, actualización y destrucción

## Variables
- **Variable**
	- Parámetro reutilizable y configurable
- **Variable por defecto**
	- Valor usado si no se sobrescribe
- **Variables de entorno**
	- Variables exportadas como `TF_VAR_name`
- **tfvars**
	- Archivos de valores por entorno
- **Variables sensibles**
	- Ocultan valores en outputs y logs

## Variables locales
- **locals**
	- Valores calculados internos
- **Normalización**
	- Centralización de nombres y tags
- **Reutilización**
	- Evita duplicación de lógica

## Estado (state)
- **State**
	- Representación de la infraestructura real
- **Archivo de estado**
	- Mapea recursos Terraform con recursos reales
- **Estado local**
	- Guardado en disco
- **Estado remoto**
	- Guardado en [Backend](/backend/backend/) compartido
- **Locking**
	- Evita ejecuciones simultáneas
- **Sensitive data**
	- El estado puede contener secretos

## Backend
- **Backend**
	- Mecanismo de almacenamiento del estado
- **S3 Backend**
	- Uso de buckets S3 con bloqueo DynamoDB
- **Terraform Cloud**
	- Backend gestionado por HashiCorp
- **Migración de estado**
	- Cambio de backend sin perder datos

## Planificación y ejecución
- **Plan**
	- Vista previa de cambios
- **Apply**
	- Ejecución real de cambios
- **Destroy**
	- Eliminación de infraestructura
- **Auto-approve**
	- Salta confirmación manual
- **Saved plan**
	- Plan guardado para ejecución controlada

## Outputs
- **Output**
	- Valores exportados tras el apply
- **Outputs sensibles**
	- No visibles en consola
- **Outputs para módulos**
	- Comunicación entre módulos

## Data sources
- **Data source**
	- Lectura de recursos existentes
- **No gestionados**
	- Terraform no crea ni destruye
- **Uso típico**
	- AMIs, VPCs, subredes existentes

## Dependencias
- **Dependencia implícita**
	- Inferida por referencias
- **depends_on**
	- Fuerza orden de creación
- **Grafo de dependencias**
	- Orden interno de ejecución

## Bucles y condiciones
- **count**
	- Crea múltiples recursos indexados
- **for_each**
	- Crea recursos basados en mapas o sets
- **Condicional**
	- Expresiones ternarias
- **Dynamic blocks**
	- Generación dinámica de bloques

## Módulos
- **Module**
	- Conjunto reutilizable de recursos
- **Root module**
	- Directorio principal del proyecto
- **Child module**
	- Módulo importado
- **Module registry**
	- Repositorio de módulos reutilizables
- **Versionado de módulos**
	- Control de cambios y compatibilidad

## Workspaces
- **Workspace**
	- Entorno lógico aislado
- **Default workspace**
	- Workspace inicial
- **Uso típico**
	- dev, qa, prod
- **Limitación**
	- No sustituyen cuentas cloud separadas

## Seguridad
- **IAM**
	- Gestión de identidades y permisos en [Aws](/cloud/aws/)
- **IAM Role**
	- Autenticación recomendada para EC2 y CI/CD
- **Secrets Manager**
	- Almacenamiento seguro de secretos
- **Least privilege**
	- Permisos mínimos necesarios

## Networking
- **VPC**
	- Red virtual aislada
- **Subnet**
	- Segmento de red dentro de la VPC
- **Security Group**
	- Firewall a nivel de instancia
- **Ingress / Egress**
	- Reglas de entrada y salida
- **CIDR**
	- Rango de direcciones IP

## Compute y servicios
- **EC2**
	- Máquina virtual en [Aws](/cloud/aws/)
- **AMI**
	- Imagen de sistema
- **user_data**
	- Script de inicialización
- **Auto Scaling**
	- Escalado automático de instancias
- **Load Balancer**
	- Distribución de tráfico

## Contenedores y orquestación
- **Docker**
	- Contenedores y entornos reproducibles
- **Terraform en Docker**
	- Ejecución aislada de Terraform
- **Kubernetes**
	- Orquestación de contenedores
- **EKS**
	- Kubernetes gestionado en [Aws](/cloud/aws/)

## CI/CD
- **Pipeline**
	- Flujo automatizado de despliegue
- **Plan en CI**
	- Validación antes del apply
- **Apply automático**
	- Despliegue sin intervención
- **Artifacts**
	- Outputs del pipeline
- **[CICD](/devops/cicd/)**
	- Integración y despliegue continuos

## Testing y calidad
- **terraform validate**
	- Validación sintáctica
- **terraform fmt**
	- Formato estándar
- **terraform test**
	- Tests de infraestructura
- **tflint**
	- Linting de buenas prácticas
- **tfsec / checkov**
	- Análisis de seguridad

## Importación y adopción
- **terraform import**
	- Adopta recursos existentes
- **State show**
	- Inspección del estado
- **Refactor**
	- Reorganización sin recrear recursos

## Alternativas y ecosistema
- **OpenTofu**
	- Fork open-source compatible con Terraform
- **Packer**
	- Creación de imágenes inmutables
- **Ansible**
	- Configuración post-provisión
- **Vault**
	- Gestión avanzada de secretos

# Terraform – cheatsheet de comandos y código

## Inicialización y configuración
- Inicializar proyecto y descargar providers
{% raw %}
```bash
terraform init
```
{% endraw %}`

* Reconfigurar backend

{% raw %}
```bash
terraform init -reconfigure
```
{% endraw %}

* Actualizar providers

{% raw %}
```bash
terraform init -upgrade
```
{% endraw %}

## Formato y validación

* Formatear archivos `.tf`

{% raw %}
```bash
terraform fmt
```
{% endraw %}

* Formatear recursivamente

{% raw %}
```bash
terraform fmt -recursive
```
{% endraw %}

* Validar configuración

{% raw %}
```bash
terraform validate
```
{% endraw %}

## Planificación

* Generar plan

{% raw %}
```bash
terraform plan
```
{% endraw %}

* Plan con variables

{% raw %}
```bash
terraform plan -var="env=dev"
```
{% endraw %}

* Plan con archivo tfvars

{% raw %}
```bash
terraform plan -var-file=dev.tfvars
```
{% endraw %}

* Guardar plan

{% raw %}
```bash
terraform plan -out=tfplan
```
{% endraw %}

## Aplicación y destrucción

* Aplicar cambios

{% raw %}
```bash
terraform apply
```
{% endraw %}

* Aplicar plan guardado

{% raw %}
```bash
terraform apply tfplan
```
{% endraw %}

* Aplicar sin confirmación

{% raw %}
```bash
terraform apply -auto-approve
```
{% endraw %}

* Destruir infraestructura

{% raw %}
```bash
terraform destroy
```
{% endraw %}

* Destruir sin confirmación

{% raw %}
```bash
terraform destroy -auto-approve
```
{% endraw %}

## Variables

* Variable por CLI

{% raw %}
```bash
terraform apply -var="instance_type=t3.micro"
```
{% endraw %}

* Variable por entorno

{% raw %}
```bash
export TF_VAR_instance_type=t3.micro
```
{% endraw %}

## Outputs

* Mostrar outputs

{% raw %}
```bash
terraform output
```
{% endraw %}

* Output específico

{% raw %}
```bash
terraform output public_ip
```
{% endraw %}

* Output en JSON

{% raw %}
```bash
terraform output -json
```
{% endraw %}

## Estado (state)

* Listar recursos en el estado

{% raw %}
```bash
terraform state list
```
{% endraw %}

* Mostrar recurso

{% raw %}
```bash
terraform state show aws_instance.web
```
{% endraw %}

* Mover recurso

{% raw %}
```bash
terraform state mv aws_instance.old aws_instance.new
```
{% endraw %}

* Eliminar recurso del estado

{% raw %}
```bash
terraform state rm aws_instance.temp
```
{% endraw %}

* Reemplazar recurso

{% raw %}
```bash
terraform apply -replace="aws_instance.web"
```
{% endraw %}

## Importación de recursos

* Importar recurso existente

{% raw %}
```bash
terraform import aws_instance.server i-0123456789abcdef0
```
{% endraw %}

## Workspaces

* Listar workspaces

{% raw %}
```bash
terraform workspace list
```
{% endraw %}

* Crear workspace

{% raw %}
```bash
terraform workspace new prod
```
{% endraw %}

* Seleccionar workspace

{% raw %}
```bash
terraform workspace select dev
```
{% endraw %}

* Mostrar workspace actual

{% raw %}
```bash
terraform workspace show
```
{% endraw %}

## Providers

* Bloque provider

{% raw %}
```hcl
provider "aws" {
	region = "eu-west-1"
}
```
{% endraw %}

## Recursos

* Recurso básico

{% raw %}
```hcl
resource "aws_instance" "web" {
	ami           = "ami-xxxx"
	instance_type = "t3.micro"
}
```
{% endraw %}

## Variables

* Definición

{% raw %}
```hcl
variable "environment" {
	type    = string
	default = "dev"
}
```
{% endraw %}

* Uso

{% raw %}
```hcl
environment = var.environment
```
{% endraw %}

## Variables locales

{% raw %}
```hcl
locals {
	name_prefix = "${var.project}-${var.environment}"
}
```
{% endraw %}

## Tags

{% raw %}
```hcl
tags = {
	Name        = local.name_prefix
	Environment = var.environment
}
```
{% endraw %}

## Data sources

{% raw %}
```hcl
data "aws_ami" "amazon_linux" {
	most_recent = true
	owners      = ["amazon"]
}
```
{% endraw %}

## Outputs

{% raw %}
```hcl
output "public_ip" {
	value = aws_instance.web.public_ip
}
```
{% endraw %}

## user_data

{% raw %}
```hcl
user_data = <<EOF
#!/bin/bash
yum install -y nginx
systemctl start nginx
EOF
```
{% endraw %}

## Security Groups

{% raw %}
```hcl
resource "aws_security_group" "web_sg" {
	ingress {
		from_port   = 80
		to_port     = 80
		protocol    = "tcp"
		cidr_blocks = ["0.0.0.0/0"]
	}
}
```
{% endraw %}

## count y for_each

* count

{% raw %}
```hcl
count = var.environment == "prod" ? 2 : 1
```
{% endraw %}

* for_each

{% raw %}
```hcl
for_each = var.servers
```
{% endraw %}

## Dynamic blocks

{% raw %}
```hcl
dynamic "ingress" {
	for_each = var.ingress_rules
	content {
		from_port = ingress.value.port
	}
}
```
{% endraw %}

## Dependencias explícitas

{% raw %}
```hcl
depends_on = [aws_security_group.web_sg]
```
{% endraw %}

## lifecycle

{% raw %}
```hcl
lifecycle {
	prevent_destroy = true
	create_before_destroy = true
}
```
{% endraw %}

## Módulos

* Llamada a módulo

{% raw %}
```hcl
module "web" {
	source = "./modules/web"
}
```
{% endraw %}

## Backend remoto (S3)

{% raw %}
```hcl
terraform {
	backend "s3" {
		bucket = "terraform-states"
		key    = "app/terraform.tfstate"
		region = "eu-west-1"
	}
}
```
{% endraw %}

## Debug y troubleshooting

* Logs detallados

{% raw %}
```bash
export TF_LOG=TRACE
```
{% endraw %}

* Log a archivo

{% raw %}
```bash
export TF_LOG_PATH=terraform.log
```
{% endraw %}

## Limpieza

* Borrar caché local

{% raw %}
```bash
rm -rf .terraform
```
{% endraw %}

## Utilidades

* Mostrar versión

{% raw %}
```bash
terraform version
```
{% endraw %}

* Ayuda

{% raw %}
```bash
terraform -help
```
{% endraw %}
