---
date: 2024-12-10 02:53
title: Sonarqube
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: devops
tags:
  - sonarqube
  - Hacking
  - devops
  - IaC
---
# SonarQube

- [devops](/devops/devops/)
- [CICD](/devops/cicd/)
- [Testing](/testing/testing/)
- [IInfraestructura como codigo](/devops/iinfraestructura-como-codigo/)

## Descripción general
SonarQube es una plataforma open-source orientada a la **inspección continua de la calidad del código**, integrándose de forma natural en flujos [CICD](/devops/cicd/) y entornos [devops](/devops/devops/). Permite detectar problemas de forma temprana mediante **análisis estático**, aplicando reglas consistentes a múltiples lenguajes y frameworks.

Su objetivo principal es **mejorar la mantenibilidad, fiabilidad y seguridad** del software antes de que el código llegue a producción.

## Conceptos clave
- Análisis estático de código (SAST)
- Calidad de código y deuda técnica
- Seguridad y vulnerabilidades
- Integración en pipelines CI/CD
- Automatización de controles de calidad

## Métricas
SonarQube basa sus evaluaciones en métricas cuantificables que permiten medir la salud del proyecto a lo largo del tiempo.

### Métricas principales
- Bugs
- Vulnerabilidades
- Code Smells
- Duplicación de código
- Coverage de tests
- Complejidad ciclomática
- Líneas de código (LOC)

### Calidad y deuda técnica
- Technical Debt: estimación del esfuerzo necesario para corregir problemas
- Maintainability Rating
- Reliability Rating
- Security Rating

Estas métricas se agregan y visualizan mediante dashboards, facilitando el seguimiento histórico y la toma de decisiones técnicas.

## Quality Gates
Los **Quality Gates** definen criterios mínimos que el código debe cumplir para considerarse aceptable.

- Umbrales configurables sobre métricas
- Bloqueo de pipelines si no se cumplen
- Evaluación automática en cada análisis

Son fundamentales para asegurar estándares de calidad consistentes en equipos y organizaciones.

## Análisis de código
SonarQube analiza el código fuente sin necesidad de ejecutarlo.

### Tipos de análisis
- Bugs lógicos y potenciales errores en runtime
- Vulnerabilidades de seguridad (OWASP, CWE)
- Code Smells relacionados con malas prácticas
- Duplicaciones y complejidad excesiva

### Lenguajes soportados
- Java, JavaScript, TypeScript
- Python, C#, C/C++
- Go, PHP, Ruby
- Infraestructura y configuración (YAML, Docker, Terraform)

Incluye soporte específico para **[IInfraestructura como codigo](/devops/iinfraestructura-como-codigo/)**, detectando errores comunes en definiciones de infraestructura.

## Integraciones
SonarQube está diseñado para integrarse con herramientas habituales del ecosistema DevOps.

### CI/CD
- Jenkins
- GitHub Actions
- GitLab CI
- Azure DevOps
- Bitbucket Pipelines

### Control de versiones
- GitHub
- GitLab
- Bitbucket

Permite análisis automáticos en cada commit, pull request o merge request, con feedback directo en el repositorio.

## SonarScanner
El análisis se realiza mediante **SonarScanner**, disponible en varias formas:
- CLI
- Plugins para CI
- Integraciones nativas con build tools (Maven, Gradle, npm)

### Ejecución básica con Docker
{% raw %}
```bash
docker run -d \
	--name sonarqube \
	-p 9000:9000 \
	sonarqube
```
{% endraw %}`

## Despliegue y arquitectura

SonarQube se compone principalmente de:
- SonarQube Server
- Base de datos (PostgreSQL recomendada)
- SonarScanner (cliente)

Puede desplegarse:
- On-premise
- En contenedores Docker
- En Kubernetes

## Seguridad
- [ciberseguridad](/ciberseguridad/ciberseguridad/)
- SonarQube ayuda a detectar:
	- Inyecciones SQL
	- XSS
	- Uso inseguro de criptografía
	- Gestión incorrecta de credenciales

Se apoya en estándares reconocidos como:
- [OWASP](/ciberseguridad/owasp/) Top 10
- CWE
- SANS Top 25

## Casos de uso

- Control de calidad automático en pipelines
- Auditorías de seguridad de código
- Reducción progresiva de deuda técnica
- Revisión de pull requests
- Análisis de proyectos legacy

## Documentación y recursos
- [Docker](/software%20engineering/docker/)
	- [hub.docker.com/_/sonarqube](https://hub.docker.com/_/sonarqube)
- [DevOps Tool: SonarQube. SonarQube is an open-source platform… | by Sagar Kulkarni | Medium](https://medium.com/@mesagarkulkarni/devops-tool-sonarqube-09b84fd1b4ea)
- [SonarQube Server 10.8 | Documentation](https://docs.sonarsource.com/sonarqube-server/latest/)
- [SonarQube: Free Open-source Code Security & Quality Gate Platform - YouTube](https://www.youtube.com/watch?v=Th36URejhZ0)
- Qué es SonarQube Verifica y analiza la calidad de tu código-
- SonarSourcesonarqube Continuous Inspection-sonarqube
# SonarQube — Conceptos Avanzados y Temas Complementarios

## Arquitectura interna detallada
SonarQube utiliza una arquitectura modular orientada a escalabilidad y análisis concurrente.

### Componentes internos
- Compute Engine
	- Procesa los resultados enviados por SonarScanner
	- Calcula métricas, ratings y Quality Gates
- Web Server
	- Interfaz UI
	- API REST
	- Gestión de proyectos y usuarios
- Elasticsearch
	- Indexación de métricas
	- Búsquedas y dashboards
- Base de datos
	- Persistencia de resultados, configuraciones y permisos

## Branch Analysis y Pull Requests
Permite analizar código sin afectar la rama principal.

### Branch Analysis
- Análisis independiente por rama
- Comparación con rama base
- Ideal para feature branches

### Pull / Merge Request Decoration
- Comentarios automáticos en PR
- Resumen de issues nuevos
- Evaluación de Quality Gate solo sobre código nuevo

## New Code Period
SonarQube prioriza el **código nuevo** para evitar penalizar proyectos legacy.

### Conceptos
- Definición temporal (últimos X días)
- Comparación contra versión anterior
- Calidad incremental

Esto permite mejorar la base de código de forma progresiva sin refactorizaciones masivas.

## Reglas y perfiles de calidad
Las reglas determinan qué se considera un problema.

### Quality Profiles
- Conjunto de reglas por lenguaje
- Herencia y personalización
- Activación / desactivación granular

### Tipos de reglas
- Bug
- Vulnerability
- Code Smell
- Security Hotspot

## Security Hotspots
Identifican zonas sensibles del código que requieren revisión humana.

- No se consideran vulnerabilidades automáticas
- Obligan a validación manual
- Reducen falsos positivos en seguridad

## Análisis de IaC avanzado
SonarQube extiende el análisis a configuraciones de infraestructura.

### Recursos analizados
- Terraform
- Kubernetes manifests
- Dockerfiles
- CloudFormation

### Problemas detectados
- Recursos expuestos públicamente
- Configuraciones inseguras
- Falta de cifrado
- Uso incorrecto de permisos

## APIs y automatización
SonarQube expone una API REST completa.

### Usos comunes
- Gestión de proyectos
- Consulta de métricas
- Automatización de auditorías
- Integración con herramientas externas

Permite construir dashboards personalizados o integrar calidad en procesos corporativos.

## Permisos y gobernanza
Modelo de seguridad basado en roles.

### Niveles
- Global
- Proyecto
- Aplicación
- Portafolio

Facilita la separación entre desarrolladores, revisores y administradores.

## Portfolios y Applications
Pensado para organizaciones grandes.

### Portfolios
- Agrupación de proyectos
- Visión ejecutiva
- Métricas agregadas

### Applications
- Relación lógica entre proyectos
- Visión de arquitectura distribuida
- Seguimiento de calidad por sistema

## Escalabilidad y rendimiento
Buenas prácticas para entornos grandes.

### Recomendaciones
- PostgreSQL dedicado
- Ajuste de JVM Heap
- Separación de servicios
- Uso de workers adicionales

## Limitaciones y consideraciones
- No sustituye revisiones manuales
- No detecta errores en tiempo de ejecución
- Reglas genéricas pueden requerir ajuste
- Análisis depende de la calidad del build

## Uso en entornos enterprise
Características avanzadas (según edición):
- Branch analysis completo
- Governance avanzada
- Soporte oficial
- Integraciones extendidas

## SonarQube en cultura de calidad
Más allá de la herramienta:
- Fomenta estándares comunes
- Reduce deuda técnica acumulada
- Integra calidad como requisito
- Mejora colaboración entre equipos

## Relación con Testing
SonarQube no ejecuta tests, pero:
- Consume reportes de cobertura
- Evalúa calidad de pruebas
- Refuerza prácticas TDD/BDD

## Observabilidad de la calidad
- Dashboards históricos
- Tendencias de deuda
- Métricas accionables
- Alertas tempranas en CI

# SonarQube — Casos de Uso Desarrollados y Ejemplos Prácticos

## Caso de uso 1: Control de calidad en pipeline CI/CD
Escenario típico donde SonarQube actúa como **gatekeeper** antes de permitir un merge o despliegue.

### Flujo
- Commit de código
- Ejecución de tests
- Análisis con SonarQube
- Evaluación de Quality Gate
- Aprobación o bloqueo del pipeline

### GitHub Actions — análisis automático
{% raw %}
```yaml
name: SonarQube Analysis

on:
	push:
		branches: [ main ]
	pull_request:

jobs:
	sonarqube:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4

			- name: SonarQube Scan
				uses: SonarSource/sonarqube-scan-action@v2
				env:
					SONAR_HOST_URL: ${{ secrets.SONAR_HOST_URL }}
					SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```
{% endraw %}`

## Caso de uso 2: Quality Gate como bloqueo de despliegue

Evita que código con problemas críticos llegue a producción.

### Quality Gate típico

* Bugs críticos = 0
* Vulnerabilidades críticas = 0
* Coverage en código nuevo ≥ 80%
* Duplicación ≤ 3%

### Evaluación automática en CI

{% raw %}
```bash
sonar-scanner \
	-Dsonar.projectKey=app-backend \
	-Dsonar.qualitygate.wait=true
```
{% endraw %}

## Caso de uso 3: Análisis de Pull Requests

Feedback inmediato para revisores.

### Configuración PR decoration

{% raw %}
```properties
sonar.pullrequest.key=123
sonar.pullrequest.branch=feature/login
sonar.pullrequest.base=main
sonar.pullrequest.github.repository=org/repo
```
{% endraw %}

Resultados:

* Comentarios automáticos
* Issues solo en código nuevo
* Estado del Quality Gate visible en el PR

## Caso de uso 4: Proyecto Java con Maven

Integración nativa con herramientas de build.

### pom.xml

{% raw %}
```xml
<plugin>
	<groupId>org.sonarsource.scanner.maven</groupId>
	<artifactId>sonar-maven-plugin</artifactId>
	<version>3.10.0.2594</version>
</plugin>
```
{% endraw %}

### Ejecución

{% raw %}
```bash
mvn clean verify sonar:sonar \
	-Dsonar.projectKey=java-app \
	-Dsonar.host.url=http://localhost:9000 \
	-Dsonar.login=$SONAR_TOKEN
```
{% endraw %}

## Caso de uso 5: Proyecto JavaScript / TypeScript

Análisis de frontend con cobertura de tests.

### sonar-project.properties

{% raw %}
```properties
sonar.projectKey=frontend-app
sonar.sources=src
sonar.tests=src
sonar.test.inclusions=**/*.spec.ts
sonar.javascript.lcov.reportPaths=coverage/lcov.info
```
{% endraw %}

### Ejecución

{% raw %}
```bash
sonar-scanner
```
{% endraw %}

## Caso de uso 6: Análisis de infraestructura como código

Control de seguridad en definiciones de infraestructura.

### Terraform inseguro

{% raw %}
```hcl
resource "aws_s3_bucket" "public_bucket" {
	bucket = "example-bucket"
	acl    = "public-read"
}
```
{% endraw %}

### Issue detectado

* Bucket expuesto públicamente
* Riesgo de filtración de datos
* Violación de buenas prácticas de seguridad

## Caso de uso 7: Dockerfile

Detección de malas prácticas en contenedores.

### Dockerfile analizado

{% raw %}
```dockerfile
FROM ubuntu:latest
RUN apt-get update && apt-get install -y curl
USER root
```
{% endraw %}

### Problemas detectados

* Uso de `latest`
* Ejecución como root
* Imagen base no fijada

## Caso de uso 8: Gestión de código legacy

Mejora progresiva sin refactorización masiva.

### New Code Period

{% raw %}
```properties
sonar.newCode.referenceBranch=main
```
{% endraw %}

Resultados:

* Métricas solo sobre código nuevo
* No penaliza deuda histórica
* Enfoque incremental de calidad

## Caso de uso 9: Seguridad y Security Hotspots

Revisión manual de código sensible.

### Ejemplo Java

{% raw %}
```java
MessageDigest md = MessageDigest.getInstance("MD5");
```
{% endraw %}

Detección:

* Algoritmo criptográfico débil
* Marcado como Security Hotspot
* Requiere validación manual

## Caso de uso 10: Automatización con API REST

Consulta de métricas desde sistemas externos.

### Consulta de issues críticos

{% raw %}
```bash
curl -u $SONAR_TOKEN: \
	"http://localhost:9000/api/issues/search?severities=CRITICAL"
```
{% endraw %}

## Caso de uso 11: Gobierno de múltiples proyectos

Uso en organizaciones grandes.

### Portfolios

* Vista ejecutiva
* Métricas agregadas
* Seguimiento transversal

### Applications

* Relación entre microservicios
* Calidad por sistema
* Impacto cruzado

## Caso de uso 12: Auditoría continua

Uso como herramienta de compliance técnico.

### Beneficios

* Evidencia objetiva de calidad
* Históricos auditables
* Integración con procesos corporativos
* Reducción de riesgos técnicos

# SonarQube — Recursos Actualizados y Estado 2025

## Versiones y lanzamientos oficiales (2025)
- **SonarQube Server 2025.6** — Última versión activa en 2025, con mejoras en rendimiento, análisis de lenguajes modernos e integraciones.
	- [What’s New in SonarQube](https://www.sonarsource.com/products/sonarqube/whats-new/)
- **SonarQube Server 2025 Release 3** — Introduce Advanced Security, SAST ampliado para Kotlin y Rust, AI CodeFix y reglas móviles.
	- [SonarQube Server 2025 Release 3](https://community.sonarsource.com/)
- **SonarQube Server 2025 Release 1 LTA** — Nueva línea de soporte a largo plazo (LTA), detección de código generado por IA y mejoras de experiencia de desarrollador.
	- [SonarQube Server 2025 Release 1 LTA](https://community.sonarsource.com/)
- **SonarQube Server 2025 Release 4.1 LTA** — Mejora de SAST para Go y PHP, nuevas reglas para Python y Java, detección de dependencias.
	- [SonarQube Server 2025 Release 4.1 LTA](https://community.sonarsource.com/)
- **SonarQube Server 2025 Release 2** — Expansión de reglas de seguridad y soporte de Azure OpenAI para AI CodeFix.
	- [SonarQube Server 2025 Release 2](https://community.sonarsource.com/)

## Funcionalidades destacadas en 2025
### Integraciones y flujo de trabajo
- Integración nativa con **Jira Cloud** para crear tickets directamente desde hallazgos de SonarQube.
	- [SonarQube + Jira Integration](https://www.sonarsource.com/products/sonarqube/integrations/)
- **Notificaciones en Slack** para estados de Quality Gate y métricas clave.
	- [SonarQube Notifications](https://docs.sonarsource.com/sonarqube-server/latest/)
- **Sonar Integration Program** — Programa oficial para conectar SonarQube con todo el SDLC.
	- [Introducing the Sonar Integration Program](https://community.sonarsource.com/)

### Lenguajes y cobertura ampliada
- Soporte completo para **Swift (5.9–6.1)** y **Python 3.14**, con SAST y detección de secretos.
	- [Supported Languages](https://www.sonarsource.com/products/sonarqube/features/languages/)
- Análisis específico para **PyTorch**, **Apex**, **Ruby** y lenguajes emergentes.
	- [Language Analyzer Updates](https://www.sonarsource.com/products/sonarqube/whats-new/)
- Soporte mejorado para **Shell/Bash**, Go y Ruby.
	- [Shell Analysis in SonarQube](https://docs.sonarsource.com/sonarqube-server/latest/analysis/languages/shell/)

### Seguridad y compliance
- Cobertura de estándares **MISRA C++:2023**, **OWASP Top 10 (2025)** y **SBOM** (CycloneDX / SPDX).
	- [Security Standards in SonarQube](https://www.sonarsource.com/solutions/security/)
- Expansión de reglas para detección de secretos y SAST profundo en stacks modernos.
	- [Advanced SAST](https://www.sonarsource.com/products/sonarqube/features/security/)

## Documentación y experiencia de usuario
- Rediseño de la **documentación oficial de SonarQube**, con mejor búsqueda y experiencia visual.
	- [SonarQube Documentation](https://docs.sonarsource.com/sonarqube-server/latest/)

## Ediciones y descargas
- **Community Build (open-source)** — Análisis de más de 20 lenguajes con detección básica de bugs y vulnerabilidades.
	- [SonarQube Community Download](https://www.sonarsource.com/products/sonarqube/downloads/)
- **Developer, Enterprise y Data Center Editions** — Escalabilidad, alta disponibilidad y gobierno avanzado.
	- [SonarQube Editions](https://www.sonarsource.com/products/sonarqube/editions/)

## Ecosistema y herramientas de soporte
- **RedCoffee** — CLI para generar informes PDF desde SonarQube Community.
	- [RedCoffee on GitHub](https://github.com/)
- **sonarqube.nvim** — Integración de SonarQube con Neovim.
	- [sonarqube.nvim](https://github.com/)

## Comunidad y problemas comunes reportados
- Reportes de incidencias tras upgrades y cambios de versión en foros oficiales.
	- [SonarSource Community](https://community.sonarsource.com/)

## Opinión de usuarios (2025)
- Opiniones mixtas sobre soporte y facturación en SonarQube Cloud, con valoración técnica positiva del motor de análisis.
	- [SonarQube Reviews](https://www.capterra.com/p/210481/SonarQube/)

## Recursos oficiales
- Notas de versión y actualizaciones:
	- [SonarQube Server Release Notes](https://docs.sonarsource.com/sonarqube-server/server-update-and-maintenance/release-notes)
- Descargas oficiales:
	- [SonarQube Downloads](https://www.sonarsource.com/es/products/sonarqube/downloads/)
- Roadmap y novedades:
	- [What’s New in SonarQube](https://www.sonarsource.com/products/sonarqube/whats-new/)
