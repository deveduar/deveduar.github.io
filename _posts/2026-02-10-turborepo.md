---
date: 2026-02-11 00:33
title: Turborepo
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: true
category: Backend
tags:
  - backend
  - devops
  - monorepo
---
# Turborepo

- [Backend](/backend/backend/)
- [monorepo](/backend/monorepo/)
- [nx](/automatizacion%20y%20build/nx/)
- Installation-installation-turborepo
## Concepto

Turborepo es una herramienta de **orquestación y caching** para monorepos, diseñada para acelerar tareas como builds, tests y linting mediante **caché local y remoto**, ejecución incremental y paralelización inteligente. Es especialmente útil en proyectos grandes con múltiples paquetes interdependientes.

Se integra bien con gestores de paquetes modernos y prioriza la **velocidad**, la **consistencia** y la **escalabilidad** del flujo de trabajo.

## Características principales

* Caché de tareas (local y remoto)
* Ejecución incremental basada en dependencias
* Paralelización automática
* Configuración declarativa
* Optimizado para CI/CD
* Soporte para múltiples frameworks y runtimes

## Arquitectura y funcionamiento

Turborepo analiza el grafo de dependencias del monorepo y determina:

* Qué tareas pueden reutilizar resultados previos
* Qué tareas deben ejecutarse
* En qué orden y en paralelo

Esto reduce significativamente tiempos de ejecución en proyectos grandes.

## Comparación con otras herramientas

* Frente a [nx](/automatizacion%20y%20build/nx/):
  Turborepo es más ligero y con menor curva de aprendizaje, pero Nx ofrece más herramientas integradas (generadores, plugins, visualización).
* Frente a scripts manuales:
  Turborepo automatiza optimizaciones complejas que serían difíciles de mantener a mano.

## Casos de uso comunes

* Monorepos con múltiples aplicaciones frontend
* Monorepos full-stack con [Backend](/backend/backend/) compartido
* Librerías internas reutilizadas entre proyectos
* Pipelines de CI con builds costosos

## Buenas prácticas

* Definir tareas bien delimitadas
* Evitar dependencias implícitas entre paquetes
* Usar caché remoto en equipos grandes
* Versionar correctamente las configuraciones

## Ecosistema y compatibilidad

* Funciona bien con npm, pnpm y yarn
* Compatible con frameworks modernos
* Puede coexistir con otras herramientas de build


## Configuración clave

### turbo.json

Archivo central donde se definen:

- Pipelines de tareas
- Dependencias entre tareas
- Entradas y salidas para el sistema de caché

Permite modelar el flujo de trabajo del monorepo como un grafo explícito y reproducible.

---

## Sistema de caché

### Caché local

- Guarda resultados de tareas en la máquina del desarrollador
- Evita re-ejecutar tareas si las entradas no cambian

### Caché remoto

- Compartido entre el equipo y CI
- Reduce tiempos en pipelines distribuidos
- Fundamental en equipos grandes

---

## Inputs y outputs

Cada tarea define:
- Inputs: archivos, variables de entorno, dependencias
- Outputs: artefactos generados

Esto permite a Turborepo determinar con precisión cuándo una tarea es válida o debe rehacerse.

---

## Integración con CI/CD

Turborepo está pensado para:
- Reutilizar resultados entre ejecuciones
- Minimizar builds innecesarios
- Reducir costos de infraestructura

Se adapta bien a pipelines modernos y flujos de despliegue incremental.

---

## Escalabilidad del monorepo

A medida que crece el monorepo:
- Aumenta el número de paquetes
- Se vuelve crítico el control del grafo de dependencias
- Turborepo actúa como capa de optimización transversal

Esto lo hace especialmente útil en organizaciones con múltiples equipos.

---

## Limitaciones y trade-offs

- No incluye generadores de código
- No impone estructura de carpetas
- Menos opinado que [nx](/automatizacion%20y%20build/nx/)

Esto puede ser una ventaja o desventaja según el nivel de control deseado.

---

## Uso junto a otras herramientas

- Puede convivir con [nx](/automatizacion%20y%20build/nx/) en escenarios específicos
- Complementa gestores de paquetes y herramientas de build
- No sustituye herramientas de testing o linting, solo las orquesta

---

## Filosofía de diseño

Turborepo sigue el principio de:

- Hacer una cosa muy bien: ejecutar tareas rápido
- Delegar el resto al ecosistema existente
- Mantener una configuración mínima y explícita

# Turborepo – Recursos y estado a 2025-2026

## Documentación oficial

### Conceptos principales
- **Documentación oficial de Turborepo:** repositorio de recursos y guía completa para comenzar, usar y optimizar tu monorepo con Turborepo. Incluye recursos sobre pipelines, caching y ejemplos de integración con herramientas modernas.  
	👉 [Turborepo – Home](https://turborepo.com/)

### Remote Caching (caché remota)
- La caché remota permite **compartir artefactos entre máquinas y CI**, evitando trabajo duplicado en builds y acelerando flujos distribuidos. Soporta proveedores gestionados o caches propios mediante la Remote Cache API.  
	👉 [Remote Caching | Turborepo](https://turborepo.ai/docs/core-concepts/remote-caching)

### Caching detallado
- Explica cómo Turborepo cachea **outputs de tareas** y **logs**, y cómo los inputs se convierten en hashes para detectar cambios. Incluye troubleshooting y flags útiles como `--dry` y `--summarize`.  
	👉 [Caching | Turborepo](https://turborepo.dev/repo/docs/crafting-your-repository/caching)

### Integración con CI
- Documentación específica para usar Turborepo en pipelines de CI, incluyendo configuración de variables de entorno para habilitar Remote Caching en entornos automatizados.  
	👉 [CI Configuration | Turborepo](https://turborepo.ai/docs/crafting-your-repository/constructing-ci)

### Guías de uso y ejemplos
- Guías oficiales y comunitarias que cubren integración con frameworks, herramientas, repositorios multilenguaje y workflows avanzados.  
	👉 [Guides | Turborepo](https://turborepo.com/docs/guides)

## Blog y lanzamientos

### Versiones recientes (2024-2025)
- **Turborepo 2.7:** mejoras en devtools, configuración compuesta y soporte para Yarn 4  
- **Turborepo 2.6:** foco en microfrontends, estabilidad de Bun y mejoras en la TUI  
- **Turborepo 2.5:** rutas basadas en `$TURBO_ROOT$`, visor OpenAPI para caching remoto y tareas sidecar  
	👉 [Blog | Turborepo](https://turborepo.dev/blog)

## Recursos de aprendizaje y prácticas

### Artículos técnicos
- *Turbocharge Your Monorepo: A Deep Dive into Turborepo* (2026)  
	Guía práctica sobre **Remote Caching**, **incremental builds** y uso de `turbo prune` para optimizar Docker.  
	👉 [Medium – Deep Dive into Turborepo](https://medium.com/@gpslakshan/turbocharge-your-monorepo-a-deep-dive-into-turborepo-51dff45d417b)

## Herramientas y utilidades de terceros
- **turbo.nullvoxpopuli.com:** visor web de Run Summaries para analizar inputs y outputs de Turborepo  
- **turborepo-summary / turborepo-summary-action:** herramientas para generar reportes legibles y GitHub Actions para resumir ejecuciones de CI

## Comandos y prácticas comunes

### Habilitar caché remota
{% raw %}
```bash
npx turbo login
npx turbo link
```
{% endraw %}`

Esto vincula el repositorio a un proveedor de caché remoto (por defecto Vercel) y permite compartir artefactos entre desarrolladores y CI.

### Verificar el caché

{% raw %}
```bash
rm -rf ./.turbo/cache
turbo run build
```
{% endraw %}

Si las tareas se restauran desde el caché remoto sin ejecutarse localmente, la configuración es correcta.

## Tendencias y problemas reportados por la comunidad

### Variables de entorno para Remote Cache

- En configuraciones con caches personalizados (S3 o servidores propios) es común gestionar `TURBO_API`, `TURBO_TEAM` y `TURBO_TOKEN`.  
    👉 [Reddit – Remote cache env vars](https://www.reddit.com/r/nextjs/comments/1n7i2yr)

### Rendimiento de builds

- Reportes de reducciones de **~47% en tiempos de build** tras migrar a Turborepo con caching correctamente configurado, especialmente en monorepos grandes.  
    👉 [Reddit – Build time reduction](https://www.reddit.com/r/buildinpublic/comments/1p3ggir)

### Exclusiones recomendadas

- En proyectos con Next.js 16.1 se recomienda excluir `.next/dev/**` de los `outputs` para evitar cachear artefactos de desarrollo.  
    👉 [Reddit – Next.js exclusions](https://www.reddit.com/r/nextjs/comments/1qzuahr)

## Recursos externos adicionales

### Vercel Remote Caching

- Documentación de Vercel para conectar repositorios, validar el caché remoto y desvincular proyectos.  
    👉 [Vercel – Remote Caching](https://vercel.com/docs/monorepos/remote-caching)

# Turborepo – Guía de Entrevista

## Objetivo de la guía
Evaluar si el candidato:
- Entiende **monorepos** y sus problemas reales
- Sabe **cuándo y por qué** usar Turborepo
- Tiene **experiencia práctica**, no solo teórica
- Comprende trade-offs frente a alternativas como [nx](/automatizacion%20y%20build/nx/)

---

## Preguntas conceptuales

### ¿Qué es Turborepo y qué problema resuelve?
**Respuesta esperada:**
Turborepo es una herramienta de **orquestación de tareas y caching** para monorepos. Su objetivo principal es **reducir tiempos de ejecución** (build, test, lint, etc.) usando ejecución incremental, paralelización y caché local/remoto.

No gestiona dependencias ni genera código; acelera tareas existentes.

---

### ¿Qué es un monorepo y por qué puede volverse lento?
**Respuesta esperada:**
Un [monorepo](/backend/monorepo/) es un repositorio único con múltiples paquetes o aplicaciones. Se vuelve lento cuando:
- Muchas tareas se ejecutan siempre aunque nada haya cambiado
- Hay dependencias cruzadas mal definidas
- El CI recompila todo en cada commit

Turborepo ataca directamente estos problemas.

---

### ¿Qué diferencia hay entre Turborepo y [nx](/automatizacion%20y%20build/nx/)?
**Respuesta esperada:**
- Turborepo es **más ligero y menos opinado**
- Nx incluye generadores, plugins, análisis de dependencias y estructura impuesta
- Turborepo se centra solo en **ejecutar tareas rápido**

Buen criterio: elegir Turborepo cuando el problema es rendimiento, Nx cuando se necesita gobernanza.

---

## Preguntas técnicas

### ¿Qué es `turbo.json` y para qué sirve?
**Respuesta esperada:**
Es el archivo central de configuración donde se definen:
- Pipelines de tareas
- Dependencias entre tareas
- Inputs y outputs para el caché

Modela el flujo de ejecución del monorepo.

---

### ¿Cómo funciona el sistema de caché?
**Respuesta esperada:**
Turborepo:
- Calcula un hash basado en inputs (archivos, env vars, dependencias)
- Si el hash coincide, restaura outputs desde caché
- Soporta caché local y remoto

El caché es determinista y reproducible.

---

### ¿Qué diferencia hay entre caché local y remoto?
**Respuesta esperada:**
- **Local:** acelera ejecuciones en la misma máquina
- **Remoto:** comparte resultados entre desarrolladores y CI

El caché remoto es clave para equipos grandes y pipelines rápidos.

---

### ¿Qué son inputs y outputs en una tarea?
**Respuesta esperada:**
- Inputs: archivos y variables que afectan el resultado
- Outputs: archivos generados por la tarea

Definirlos bien evita:
- Rebuilds innecesarios
- Caché incorrecto

---

## Preguntas prácticas

### Describe un escenario real donde Turborepo marcó diferencia
**Respuesta esperada:**
Ejemplos como:
- Reducción drástica de tiempos de CI
- Evitar rebuilds de apps no afectadas
- Mejor experiencia de desarrollo en equipos grandes

Se valora que mencione métricas reales.

---

### ¿Cómo usarías Turborepo con Docker?
**Respuesta esperada:**
- Uso de `turbo prune` para generar builds mínimos
- Copiar solo lo necesario al contexto Docker
- Reutilizar caché entre builds

Indica experiencia avanzada.

---

### ¿Qué errores comunes has visto usando Turborepo?
**Respuesta esperada:**
- Outputs mal definidos
- Cachear artefactos de desarrollo
- Dependencias implícitas entre paquetes
- No usar caché remoto en CI

---

## Experiencia de uso (señales fuertes)

### Buenas señales
- Habla de trade-offs, no solo beneficios
- Entiende cuándo **no** usar Turborepo
- Menciona problemas reales y cómo los resolvió
- Distingue orquestación vs build tooling

### Malas señales
- Cree que Turborepo reemplaza npm/pnpm
- No sabe explicar inputs/outputs
- Solo lo usó siguiendo un tutorial
- Confunde Turborepo con un framework

---

## Pregunta de criterio

### ¿Cuándo NO usarías Turborepo?
**Respuesta esperada:**
- Repos pequeños
- Equipos muy junior sin disciplina
- Proyectos donde el bottleneck no es build/test
- Cuando se necesita una solución más opinada como [nx](/automatizacion%20y%20build/nx/)

---

## Nivel esperado según rol

### Junior
- Entiende el problema que resuelve
- Conoce conceptos básicos de caché y pipelines

### Mid
- Ha configurado `turbo.json`
- Usa caché remoto
- Optimiza CI

### Senior
- Diseña pipelines complejos
- Evalúa trade-offs organizacionales
- Integra Turborepo con Docker, CI y múltiples equipos

---

## Cierre
Turborepo es una herramienta simple en superficie, pero poderosa en contexto. En entrevistas, lo más valioso no es saber comandos, sino **demostrar criterio técnico y experiencia real**.

# Turborepo – Casos de Uso y Ejemplos de Código

## Contexto del caso de uso
Monorepo típico con:
- Apps frontend (Next.js)
- Backend compartido
- Librerías comunes
- CI con builds costosos

Objetivo:
- Reducir tiempos de build
- Evitar trabajo innecesario
- Escalar con más equipos sin degradar DX

---

## Estructura del monorepo (ejemplo)

{% raw %}
```text
apps/
	web/
	admin/
	api/
packages/
	ui/
	utils/
	config/
```
{% endraw %}`

Cada app consume librerías desde `packages/`.

---

## Caso de uso 1: Build incremental por dependencias

### Problema

Un cambio en `packages/ui` dispara:
- Build de `web`
- Build de `admin`
- Build de `api` (innecesario)

### Solución con Turborepo

Definir dependencias explícitas en el pipeline.

### Configuración `turbo.json`

{% raw %}
```json
{
	"pipeline": {
		"build": {
			"dependsOn": ["^build"],
			"outputs": ["dist/**", ".next/**"]
		},
		"lint": {
			"outputs": []
		},
		"test": {
			"dependsOn": ["build"],
			"outputs": ["coverage/**"]
		}
	}
}
```
{% endraw %}

Resultado:

- `api` no se rebuilda si no depende de `ui`
- Solo apps afectadas ejecutan tareas

---

## Caso de uso 2: Caché remoto en CI

### Problema

Cada PR recompila todo desde cero en CI.

### Solución

Activar Remote Caching.

### Comandos iniciales

{% raw %}
```bash
npx turbo login
npx turbo link
```
{% endraw %}

### Ejecución en CI

{% raw %}
```bash
turbo run build lint test
```
{% endraw %}

Resultado:

- CI descarga artefactos ya generados
- Builds que antes duraban 15 min bajan a 3–5 min

---

## Caso de uso 3: Desarrollo local más rápido

### Problema

Cada `turbo run build` tarda lo mismo, incluso sin cambios.

### Ejecución incremental

{% raw %}
```bash
turbo run build --filter=apps/web
```
{% endraw %}

Si no hay cambios relevantes:

- Resultado se restaura desde caché
- No se ejecuta el build real

---

## Caso de uso 4: Control fino de inputs y outputs

### Problema

Cambios en archivos irrelevantes invalidan el caché.

### Definición precisa

{% raw %}
```json
{
	"pipeline": {
		"build": {
			"inputs": [
				"src/**",
				"package.json",
				"tsconfig.json"
			],
			"outputs": ["dist/**"]
		}
	}
}
```
{% endraw %}

Beneficio:

- Cambios en docs o configs externas no rompen el caché
- Mayor predictibilidad

---

## Caso de uso 5: Optimización de Docker con `turbo prune`

### Problema

Contexto Docker enorme y lento.

### Prune para una app concreta

{% raw %}
```bash
turbo prune --scope=web --docker
```
{% endraw %}

Resultado:

- Genera un árbol mínimo de dependencias
- Ideal para builds multi-stage

### Uso en Dockerfile

{% raw %}
```dockerfile
COPY out/json/ .
RUN npm install

COPY out/full/ .
RUN npm run build
```
{% endraw %}

---

## Caso de uso 6: Monorepo full-stack

### Escenario

- Frontend y [Backend](/backend/backend/) comparten tipos y utilidades
- Cambios en contratos afectan múltiples apps

### Flujo

- Cambia `packages/utils`
- Turborepo:
    - Rebuilda solo apps dependientes
    - Reutiliza builds no afectados

Evita builds globales innecesarios.

---

## Anti-ejemplos (qué NO hacer)

### Cachear artefactos de desarrollo

{% raw %}
```json
"outputs": [".next/**"]
```
{% endraw %}

Malo si incluye `.next/dev/**`  
Puede causar bugs difíciles de detectar.

---

### Dependencias implícitas

- Scripts que leen archivos fuera del paquete
- Variables de entorno no declaradas como input

Rompen la validez del caché.

---

## Resultado práctico observado

- CI 40–60% más rápido
- Menos fricción al escalar equipos
- Feedback más rápido para developers
- Menos gasto en infraestructura

---

## Cierre

Turborepo brilla cuando:
- El monorepo ya existe
- El dolor está en **tiempos**
- El equipo entiende su grafo de dependencias

No es magia, es **disciplina + tooling bien aplicado**.

# Turborepo – Ejemplo de Implementación en una App Real

## Escenario
Monorepo con:
- App web (Next.js)
- App API (Node)
- Librería compartida
- Caché local y remoto
- CI-friendly

---

## Estructura del proyecto

{% raw %}
```text
repo/
	package.json
	turbo.json
	pnpm-workspace.yaml
	apps/
		web/
			package.json
			next.config.js
			src/
		api/
			package.json
			src/
	packages/
		ui/
			package.json
			src/
		utils/
			package.json
			src/
```
{% endraw %}`

---

## Workspace (pnpm)

### pnpm-workspace.yaml

{% raw %}
```yaml
packages:
	- "apps/*"
	- "packages/*"
```
{% endraw %}

---

## Configuración base de Turborepo

### turbo.json

{% raw %}
```json
{
	"$schema": "https://turbo.build/schema.json",
	"pipeline": {
		"build": {
			"dependsOn": ["^build"],
			"outputs": ["dist/**", ".next/**"]
		},
		"dev": {
			"cache": false
		},
		"lint": {
			"outputs": []
		},
		"test": {
			"dependsOn": ["build"],
			"outputs": ["coverage/**"]
		}
	}
}
```
{% endraw %}

---

## Package root

### package.json (raíz)

{% raw %}
```json
{
	"name": "my-turborepo",
	"private": true,
	"packageManager": "pnpm@9",
	"scripts": {
		"build": "turbo run build",
		"dev": "turbo run dev --parallel",
		"lint": "turbo run lint",
		"test": "turbo run test"
	},
	"devDependencies": {
		"turbo": "^2.7.0"
	}
}
```
{% endraw %}

---

## App Web (Next.js)

### apps/web/package.json

{% raw %}
```json
{
	"name": "web",
	"scripts": {
		"dev": "next dev",
		"build": "next build",
		"lint": "next lint"
	},
	"dependencies": {
		"@repo/ui": "*",
		"@repo/utils": "*"
	}
}
```
{% endraw %}

---

## App API (Node)

### apps/api/package.json

{% raw %}
```json
{
	"name": "api",
	"scripts": {
		"dev": "node src/index.js",
		"build": "tsc",
		"lint": "eslint ."
	},
	"dependencies": {
		"@repo/utils": "*"
	}
}
```
{% endraw %}

---

## Librería compartida

### packages/utils/package.json

{% raw %}
```json
{
	"name": "@repo/utils",
	"main": "dist/index.js",
	"scripts": {
		"build": "tsc",
		"lint": "eslint src"
	}
}
```
{% endraw %}

---

## Uso de dependencias internas

### packages/utils/src/math.ts

{% raw %}
```ts
export const sum = (a: number, b: number) => a + b
```
{% endraw %}

### apps/api/src/index.ts

{% raw %}
```ts
import { sum } from "@repo/utils"

console.log(sum(2, 3))
```
{% endraw %}

---

## Ejecución local

### Desarrollo

{% raw %}
```bash
pnpm dev
```
{% endraw %}

* Ejecuta `dev` en todas las apps
* No usa caché (correcto para desarrollo)

---

### Build incremental

{% raw %}
```bash
pnpm build
```
{% endraw %}

* Solo recompila lo afectado
* Usa caché local automáticamente

---

## Activar caché remoto (opcional)

{% raw %}
```bash
npx turbo login
npx turbo link
```
{% endraw %}

Permite:

* Compartir builds entre desarrolladores
* Acelerar CI/CD

---

## Ejemplo en CI

{% raw %}
```yaml
steps:
	- run: pnpm install
	- run: pnpm build
```
{% endraw %}

Si el caché remoto está activo:

* CI descarga artefactos ya generados
* No recompila innecesariamente

---

## Resultado final

* Apps desacopladas pero coordinadas
* Builds rápidos y reproducibles
* Escalable a múltiples equipos
* Configuración mínima y explícita

---

## Nota final

Este setup funciona igual para:

* Frontend + [Backend](/backend/backend/)
* Librerías internas
* Microfrontends
* CI distribuido

Turborepo actúa como **acelerador**, no como framework.

# Turborepo vs Nx

## ¿Son para lo mismo?
Sí y no.

Ambas herramientas están pensadas para **monorepos**, pero atacan el problema desde **niveles distintos**:

- **Turborepo**: optimiza **ejecución de tareas**
- **Nx**: gestiona **arquitectura + ejecución + gobernanza**

Comparten terreno, pero **no son intercambiables 1:1**.

---

## ¿Turborepo es solo para monorepos?
Sí.  
Turborepo **no tiene sentido fuera de un monorepo**.

Su valor aparece cuando:
- Hay múltiples paquetes/apps
- Las tareas se repiten innecesariamente
- El CI se vuelve lento

En un repo único, Turborepo añade complejidad sin beneficio real.

---

## Diferencia de enfoque

### Turborepo
- Orquestador de tareas
- Caché local y remoto
- Ejecución incremental
- Poco opinado
- No impone estructura

Piensa en Turborepo como:
> “Haz lo que ya haces, pero mucho más rápido”

---

### Nx
- Plataforma completa para monorepos
- Análisis de dependencias profundo
- Generadores de código
- Plugins por framework
- Reglas de arquitectura

Piensa en Nx como:
> “Te ayudo a diseñar, mantener y escalar el monorepo”

---

## Comparación directa

| Aspecto | Turborepo | Nx |
|------|----------|----|
| Enfoque | Velocidad | Gobernanza + velocidad |
| Caché | Local + remoto | Local + remoto |
| Opinión | Baja | Alta |
| Generadores | No | Sí |
| Plugins | No | Sí |
| Curva de aprendizaje | Baja | Media/Alta |
| Estructura impuesta | No | Sí |
| Ideal para | Equipos expertos | Equipos grandes |

---

## Casos de uso ideales

### Usar Turborepo cuando
- El monorepo **ya existe**
- El problema principal es **tiempo**
- El equipo domina su stack
- No quieres reglas impuestas

Ejemplo:
- Startup con seniority alto
- Monorepo flexible
- Necesidad de CI rápido

---

### Usar Nx cuando
- El monorepo está creciendo rápido
- Hay múltiples equipos
- Se necesita control arquitectónico
- Se quiere estandarizar prácticas

Ejemplo:
- Empresa grande
- Equipos con distintos niveles
- Necesidad de límites claros entre dominios

---

## ¿Compiten o se complementan?
Compiten **en parte**, pero también pueden coexistir.

Escenarios reales:
- Nx como capa de arquitectura
- Turborepo solo para ejecutar tareas rápido

No es común, pero es posible.

---

## Trade-offs reales

### Turborepo
**Pros**
- Configuración mínima
- Fácil adopción
- DX muy rápida

**Contras**
- No protege de malas decisiones
- Requiere disciplina
- Menos herramientas integradas

---

### Nx
**Pros**
- Arquitectura explícita
- Escala organizacionalmente
- Ecosistema amplio

**Contras**
- Más complejidad
- Más configuración
- Menos flexible

---

## Pregunta clave de decisión
> ¿Tu problema es **velocidad** o **organización**?

- Velocidad → Turborepo
- Organización + velocidad → Nx

---

## Conclusión
- **Sí**, ambos son para monorepos
- **No**, no hacen exactamente lo mismo
- Turborepo acelera
- Nx gobierna

Elegir bien evita reescribir el repo en 6 meses.

