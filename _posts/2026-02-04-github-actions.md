---
date: 2026-02-04 14:05
title: GitHub Actions
keywords:
source:
status: 📌
Parent: "[[Area-Sistemas]]"
aliases:
public_note: true
category: devops
tags:
  - github
  - devops
  - cloud
---
# GitHub Actions

## Visión general
GitHub Actions es una plataforma de automatización integrada en GitHub que permite crear flujos de trabajo (workflows) para automatizar procesos de desarrollo, integración, despliegue y operaciones. Está profundamente alineada con prácticas de [devops](/devops/devops/) y es una pieza clave en estrategias de [CICD](/devops/cicd/) modernas.

Se basa en eventos del repositorio (push, pull request, releases, issues, cron, etc.) para ejecutar tareas definidas como código, directamente desde el propio repositorio.

## Relación con otros conceptos
- [CICD](/devops/cicd/)
	- Automatiza integración continua (tests, builds, análisis estático).
	- Facilita despliegue continuo a entornos como staging y producción.
- [pipeline de datos ETL](/backend/etl/)
	- Permite orquestar pipelines de datos: extracción, transformación y carga.
	- Puede integrarse con scripts en Python, contenedores o servicios cloud.
- [devops](/devops/devops/)
	- Reduce fricción entre desarrollo y operaciones.
	- Infraestructura y automatización definidas como código.
- [IaC](/devops/iinfraestructura-como-codigo/)

## Componentes principales
### Workflows
Archivos YAML ubicados en `.github/workflows/` que definen:
- Cuándo se ejecuta el flujo (triggers).
- Qué trabajos (jobs) se ejecutan.
- En qué orden y bajo qué condiciones.

### Eventos (Triggers)
Acciones que disparan un workflow:
- Eventos de GitHub: `push`, `pull_request`, `release`.
- Programados: `schedule` (cron).
- Manuales: `workflow_dispatch`.
- Externos: `repository_dispatch`.

### Jobs
Un workflow puede contener múltiples jobs:
- Se ejecutan en paralelo por defecto.
- Pueden depender unos de otros.
- Se ejecutan en runners independientes.

### Steps
Cada job se compone de pasos:
- Ejecutar comandos (`run`).
- Usar acciones reutilizables (`uses`).
- Compartir variables y artefactos.

### Actions
Bloques reutilizables:
- Oficiales de GitHub.
- De la comunidad.
- Acciones personalizadas.
Permiten abstraer lógica común como checkout de código, setup de lenguajes o despliegues.

### Runners
Entornos donde se ejecutan los jobs:
- Runners hospedados por GitHub (Ubuntu, Windows, macOS).
- Runners auto-hospedados para mayor control, seguridad o rendimiento.

## Casos de uso comunes
- Ejecución automática de tests y linters en cada PR.
- Builds y publicación de artefactos.
- Despliegue continuo a cloud (AWS, GCP, Azure).
- Automatización de pipelines de datos [pipeline de datos ETL](/backend/etl/).
- Generación de documentación.
- Gestión de versiones y releases.
- Automatización de tareas operativas repetitivas.

## Buenas prácticas
- Mantener workflows pequeños y específicos.
- Reutilizar acciones y workflows compuestos.
- Usar secretos para credenciales sensibles.
- Limitar permisos con `permissions`.
- Versionar acciones (`@v1`, `@v2`, commits SHA).
- Separar workflows por responsabilidad (test, build, deploy).

## Seguridad
- Uso de `secrets` y `environment secrets`.
- Revisión de acciones de terceros.
- Principio de menor privilegio.
- Protección de branches y entornos.
- Auditoría mediante logs de ejecución.

## Integración con el ecosistema
- Funciona nativamente con GitHub Issues, PRs y Releases.
- Compatible con Docker, Kubernetes y herramientas de infraestructura como código.
- Fácil integración con servicios externos vía APIs y webhooks.

## Ventajas clave
- No requiere herramientas externas.
- Configuración declarativa y versionada.
- Escalable desde proyectos pequeños a sistemas complejos.
- Gran ecosistema de acciones reutilizables.

## Limitaciones
- Dependencia del ecosistema GitHub.
- Tiempo de ejecución y concurrencia limitados según plan.
- YAML complejo en workflows grandes si no se estructura bien.

## Contexto dentro de DevOps
GitHub Actions actúa como motor de automatización central dentro de una cultura [devops](/devops/devops/), facilitando ciclos de feedback rápidos, despliegues frecuentes y mayor confiabilidad del software mediante automatización consistente.

# GitHub Actions: Avanzado y Estrategias Complementarias

## Métricas y monitoreo
Medir y auditar workflows es clave para mantener la confiabilidad y eficiencia de los procesos. Algunas prácticas incluyen:  
- **Logs de ejecución**: cada step genera logs detallados accesibles desde la interfaz de GitHub Actions. Permite depurar errores y revisar tiempos de ejecución.  
- **Métricas de desempeño**:
	- Tiempo promedio por job o workflow.
	- Tasa de fallos por workflow, job o branch.
	- Uso de recursos de runners.
- **Alertas y notificaciones**: integración con Slack, Teams, correo o sistemas externos usando pasos `run` o acciones de notificación.
- **Auditoría de seguridad**: revisar accesos a secretos, acciones de terceros y permisos de workflows para cumplir estándares de seguridad.

## Optimización y mantenimiento
Para workflows sostenibles y rápidos:  
- **Paralelización de jobs**: ejecutar trabajos independientes en paralelo.  
- **Uso de caches**: almacenar dependencias entre ejecuciones con `actions/cache`.  
- **Separación de responsabilidades**: workflows específicos para test, build, deploy, documentación.  
- **Reutilización de acciones**: centralizar lógica común en acciones propias o compartidas.  
- **Revisión periódica**: eliminar workflows obsoletos, actualizar versiones de acciones y dependencias.  
- **Métricas de eficiencia**: combinar con monitoreo para detectar pasos que consumen más tiempo o recursos de manera recurrente.

## Flujos avanzados
### Matrices (matrix strategy)
- Permite ejecutar jobs con combinaciones de variables: sistemas operativos, versiones de lenguaje, entornos de configuración.
- Ejemplo: tests en Ubuntu, Windows y macOS con Python 3.9, 3.10 y 3.11.

### Estrategias de branching
- Workflows por branch (main, develop, feature/*).
- Deploys condicionales según rama, usando `if: github.ref == 'refs/heads/main'`.

### Dependencias complejas
- Jobs dependientes (`needs`) para controlar orden de ejecución.
- Workflows anidados mediante `workflow_call` para modularidad.

## Integración con contenedores y microservicios
- **Docker**:
	- Crear, testear y desplegar imágenes como parte del workflow.
	- Reutilización de contenedores para jobs.
- **Kubernetes**:
	- Despliegue automático a clusters.
	- Uso de `kubectl` y `kubeconfig` en workflows.
- **Serverless**:
	- Automatización de funciones Lambda (AWS), Cloud Functions (GCP) o Azure Functions.
	- Integración con herramientas de IaC (Infrastructure as Code).

## Casos de uso emergentes
- **IA/ML pipelines**:
	- Entrenamiento, validación y despliegue de modelos.
	- Uso de GPUs en runners auto-hospedados.
- **Gestión de datos**:
	- Orquestación de pipelines ETL/ELT con triggers automáticos.
	- Validación y transformación de datasets.
- **DevSecOps**:
	- Escaneo de vulnerabilidades y análisis de dependencias.
	- Integración de pruebas de seguridad automáticas antes del deploy.

## Automatización cross-repositorio
- Workflows que interactúan con múltiples repositorios:
	- Uso de `repository_dispatch` para disparar workflows en repos externos.
	- Orquestación de pipelines multi-repo para proyectos monorepo o microservicios.
	- Manejo centralizado de versiones y dependencias compartidas.

## Plantillas y comunidad
- **Reutilización de workflows**:
	- `workflow_call` permite invocar workflows desde otros repositorios.
	- Estandarización de procesos comunes en la organización.
- **GitHub Marketplace**:
	- Acceso a miles de acciones oficiales y de la comunidad.
	- Facilita integración rápida con CI/CD, testing, despliegue y automatización.
- **Contribución y colaboración**:
	- Publicar acciones propias para la comunidad.
	- Adoptar buenas prácticas de mantenimiento y documentación de acciones.
# GitHub Actions: Ejemplos de Código y Casos de Uso

## Ejemplo 1: Workflow básico de CI para Node.js
Archivo: `.github/workflows/ci-nodejs.yml`
{% raw %}
```yaml
name: CI Node.js

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```
{% endraw %}`

**Caso de uso**: Automatizar la instalación de dependencias y la ejecución de tests en cada push o PR para garantizar calidad de código en proyectos Node.js.

---

## Ejemplo 2: Deploy a AWS S3

Archivo: `.github/workflows/deploy-s3.yml`

{% raw %}
```yaml
name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Sync files to S3
        run: aws s3 sync ./dist s3://my-bucket-name --delete
```
{% endraw %}

**Caso de uso**: Desplegar automáticamente archivos estáticos a un bucket S3 cada vez que se hace push a la rama `main`.

---

## Ejemplo 3: Matrix testing (Python + OS)

Archivo: `.github/workflows/python-matrix.yml`

{% raw %}
```yaml
name: Python CI Matrix

on: [push, pull_request]

jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        python: [3.9, 3.10, 3.11]

    steps:
      - uses: actions/checkout@v3
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: ${{ matrix.python }}

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Run tests
        run: pytest
```
{% endraw %}

**Caso de uso**: Ejecutar tests en múltiples sistemas operativos y versiones de Python automáticamente, garantizando compatibilidad.

---

## Ejemplo 4: Orquestación cross-repositorio

Archivo: `.github/workflows/cross-repo.yml`

{% raw %}
```yaml
name: Trigger external workflow

on:
  workflow_dispatch:

jobs:
  trigger-other-repo:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger workflow in another repo
        uses: peter-evans/repository-dispatch@v2
        with:
          token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          repository: user/other-repo
          event-type: run-workflow
```
{% endraw %}

**Caso de uso**: Orquestar pipelines multi-repositorios, por ejemplo un repositorio central que coordina despliegues de microservicios.

---

## Ejemplo 5: Workflow para IA/ML

Archivo: `.github/workflows/ml-pipeline.yml`

{% raw %}
```yaml
name: ML Pipeline

on:
  push:
    branches:
      - main

jobs:
  train-model:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: 3.10

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Train model
        run: python scripts/train.py

      - name: Save model artifact
        uses: actions/upload-artifact@v3
        with:
          name: trained-model
          path: models/
```
{% endraw %}

**Caso de uso**: Automatizar entrenamiento de modelos ML y almacenar artefactos para despliegue o validación posterior.

---

## Ejemplo 6: Notificaciones y monitoreo

Archivo: `.github/workflows/notify.yml`

{% raw %}
```yaml
name: Notify Slack on failure

on:
  workflow_run:
    workflows: ["CI Node.js"]
    types:
      - completed

jobs:
  notify:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    steps:
      - name: Send Slack notification
        uses: slackapi/slack-github-action@v1.23.0
        with:
          channel-id: C1234567890
          slack-message: "El workflow CI Node.js ha fallado en ${{ github.ref }}"
          slack-token: ${{ secrets.SLACK_TOKEN }}
```
{% endraw %}

**Caso de uso**: Monitorear workflows críticos y enviar alertas inmediatas a canales de comunicación.

---

Estos ejemplos cubren CI, CD, matrices, orquestación multi-repo, pipelines de ML y notificaciones, mostrando la flexibilidad de GitHub Actions para distintos escenarios reales.

# Recursos actualizados sobre GitHub Actions (2025–2026)

## Documentación oficial y guías prácticas
- **Documentación principal de GitHub Actions** – Centro de recursos, guías, sintaxis, referencia completa para workflows, seguridad, despliegues, cómo reutilizar acciones y más. [docs.github.com](https://docs.github.com/en/actions?utm_source=chatgpt.com)  
- **Tutoriales paso a paso en GitHub Docs** – Incluye ejercicios prácticos: crear workflows, compilar y probar código, usar `GITHUB_TOKEN`, artefactos, contenedores y migrar pipelines existentes a GitHub Actions. [docs.github.com](https://docs.github.com/es/actions/tutorials?utm_source=chatgpt.com)  
- **Guía de inicio rápido** – Crear tu primer workflow desde cero con ejemplos descargables y explicación visual de la interfaz. [docs.github.com](https://docs.github.com/es/actions/writing-workflows/quickstart?utm_source=chatgpt.com)

## Guías especializadas por plataforma o lenguaje
- **Tutorial .NET para crear acciones personalizadas** – Aprende a construir una acción de GitHub con .NET, incluyendo inputs/outputs y empaquetado de contenedores. [learn.microsoft.com](https://learn.microsoft.com/es-es/dotnet/devops/create-dotnet-github-action?utm_source=chatgpt.com)  
- **Uso de GitHub Actions con Microsoft Power Platform** – Automatiza pipelines para soluciones de Power Platform (Dataverse, entornos, permisos, etc.). [learn.microsoft.com](https://learn.microsoft.com/es-es/power-platform/alm/tutorials/github-actions-start?utm_source=chatgpt.com)  
- **Entrega contínua en Azure con IaC y GitHub Actions** – Guía para integrar CI/CD con Infraestructura como Código en Azure. [learn.microsoft.com](https://learn.microsoft.com/es-es/devops/deliver/iac-github-actions?utm_source=chatgpt.com)  
- **Automatización de despliegue ARM con GitHub Actions** – Usa acciones para implementar plantillas de Azure Resource Manager de forma automática. [learn.microsoft.com](https://learn.microsoft.com/es-es/azure/azure-resource-manager/templates/deploy-github-actions?utm_source=chatgpt.com)

## Recursos educativos de la comunidad y posts recientes
- **“A Practical Guide to GitHub Actions” (enero 2026)** – Artículo práctico que explica patrones reales de automatización, triggers y mejores prácticas, con ejemplos actualizados. [medium.com](https://medium.com/%40ifeoluwa1201/a-practical-guide-to-github-actions-f4dcf1a3c74c?utm_source=chatgpt.com)  
- **Tutorial paso a paso (KeepCoding, 2025)** – Guía en español centrada en automatizar y optimizar tus workflows en 7 pasos prácticos. [keepcoding.io](https://keepcoding.io/blog/github-actions-tutorial-ci-cd-paso-a-paso/?utm_source=chatgpt.com)  
- **Workshops y contenido educativo** – Presentaciones y materiales (por ejemplo en GitNation) sobre CI/CD con GitHub Actions, matrices, dependencias y estrategias de reutilización. [gitnation.com](https://gitnation.com/contents/potenciando-tu-cicd-con-github-actions/es?utm_source=chatgpt.com)

## Herramientas complementarias y proyectos útiles
- **GitHub Workflow Dashboard (open source)** – Interfaz para monitorear y visualizar ejecuciones de workflows a través de repositorios. [reddit.com](https://www.reddit.com/r/devops/comments/1noee2p/introducing_github_workflow_dashboard/)  
- **Herramienta para actualizar GitHub Actions con SHA pinning** – CLI que facilita asegurar versiones de acciones por SHA para mayor seguridad y consistencia de workflows. [reddit.com](https://www.reddit.com/r/devops/comments/1n2qd2c/)

## Cambios relevantes y actualizaciones de plataforma
- **Cambios de precios y estructura de runners (2026)** – GitHub anunció reducciones de precio para runners hospedados y cambios en cargos por uso de runners auto-hospedados, con ajustes tras feedback de la comunidad. [resources.github.com](https://resources.github.com/actions/2026-pricing-changes-for-gith)  
- **Discusiones y feedback en la comunidad** – Conversaciones sobre guías para principiantes, consejos de setup y experiencias de uso real que complementan la documentación oficial. [github.com](https://github.com/orgs/community/discussions/166741)

## Investigación académica sobre prácticas de workflows (2025–2026)
- **Automatización y reutilización en GitHub Actions** – Estudio que analiza cómo los desarrolladores automatizan tareas y reutilizan acciones, incluyendo retos de mantenimiento y versionado. [arxiv.org](https://arxiv.org/abs/2601.11299)  
- **Granite: aplicación de seguridad granular** – Investigación sobre mejorar la seguridad de permisos de GitHub Actions a nivel granular, reduciendo riesgos de abuso de permisos en workflows. [arxiv.org](https://arxiv.org/abs/2512.11602)  
- **Análisis de builds intermitentes (flaky)** – Estudio sobre fallos no deterministas en builds de GitHub Actions y propuestas para su detección. [arxiv.org](https://arxiv.org/abs/2602.02307)

## Videos y otros formatos
- **Tutorial en video para principiantes** – Explicación visual paso a paso de cómo crear y entender tus primeros workflows y estructuras YAML. [reddit.com](https://www.reddit.com/r/github/comments/1q0w5qc/notes_on_building_a_simple_github_actions_workflow/)  
- **Experimentos con agentes AI en CI** – Ejemplos avanzados donde un agente IA participa en tareas de revisión de PRs, mantenimiento y gating de CI mediante workflows. [reddit.com](https://www.reddit.com/r/AI_Agents/comments/1qpj49h/i_built_a_github_actions_setup_where_an_ai_agent/)

