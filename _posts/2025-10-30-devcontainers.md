---
date: 2025-10-30 16:37
title: devcontainers
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: Virtualizacion
tags:
  - virtualizacion
  - devtools
  - devcontainers
  - docker
---
# Devcontainers

- [Docker](/software%20engineering/docker/)
- [Development containers](https://containers.dev/) 
- [Devcontainers - Entornos de desarrollo como código con ‪@DockerInc‬ y ‪@code‬ - YouTube](https://youtu.be/ld-eeO2y6YI) 
- [GitHub - pabpereza/dockerfile-best-practices](https://github.com/pabpereza/dockerfile-best-practices)

---

## Qué son los Devcontainers

Los **Devcontainers** son entornos de desarrollo definidos mediante código, generalmente a través de archivos de configuración (`devcontainer.json` o `docker-compose.yml`), que permiten reproducir el mismo entorno en cualquier máquina.  
Su objetivo es garantizar que todos los desarrolladores trabajen en un entorno idéntico, independiente del sistema operativo o configuración local.

Un Devcontainer encapsula:
- Dependencias del proyecto (librerías, SDKs, herramientas).
- Variables de entorno.
- Extensiones del editor (VS Code, por ejemplo).
- Configuraciones personalizadas de entorno.

Esto lo convierte en una solución clave para el desarrollo **reproducible, portable y aislado**.

---

## Componentes principales

1. **Archivo `devcontainer.json`**
	Define la configuración del entorno, las extensiones, el contenedor base, puertos y comandos de inicialización.
	{% raw %}
```json
	{
		"name": "Mi Proyecto",
		"image": "node:18",
		"features": {
			"ghcr.io/devcontainers/features/docker-in-docker:1": {}
		},
		"postCreateCommand": "npm install",
		"customizations": {
			"vscode": {
				"extensions": ["dbaeumer.vscode-eslint"]
			}
		}
	}
	```
{% endraw %}

2. **Dockerfile o imagen base**
	Define cómo se construye el entorno. Puede extender imágenes oficiales o personalizadas.
	{% raw %}
```dockerfile
	FROM node:18
	WORKDIR /workspace
	COPY package*.json ./
	RUN npm install
	COPY . .
	```
{% endraw %}

3. **Configuraciones opcionales**
	- `docker-compose.yml`: permite definir servicios adicionales (por ejemplo, una base de datos).
	- `.devcontainer/docker-compose.yml`: cuando el proyecto requiere varios contenedores.

---

## Beneficios clave

- **Entorno reproducible:** elimina el clásico "en mi máquina funciona".
- **Configuración como código:** permite versionar el entorno junto al código fuente.
- **Portabilidad:** cualquier persona o CI/CD puede usar el mismo entorno.
- **Integración con VS Code y GitHub Codespaces:** facilita el desarrollo remoto o en la nube.
- **Compatibilidad con [Docker](/software%20engineering/docker/) y contenedores personalizados.**

---

## Uso en Visual Studio Code

VS Code detecta automáticamente la carpeta `.devcontainer/` y ofrece abrir el proyecto dentro del contenedor.

Pasos:
1. Instalar la extensión **Dev Containers**.
2. Ejecutar el comando `Dev Containers: Reopen in Container`.
3. VS Code reconstruirá el contenedor según la configuración del proyecto.
4. Una vez dentro, las extensiones, dependencias y variables se cargarán automáticamente.

---

## Integración con GitHub Codespaces

GitHub Codespaces utiliza los mismos archivos de configuración (`devcontainer.json`) para crear entornos remotos instantáneos basados en contenedores.  
Esto permite:
- Iniciar un entorno de desarrollo completo desde un repositorio de GitHub.
- Mantener consistencia entre el desarrollo local y remoto.
- Reducir el tiempo de onboarding de nuevos colaboradores.

---

## Mejores prácticas

- Utilizar **multi-stage builds** y distroless images para mejorar la seguridad y rendimiento.
- Mantener las imágenes lo más **ligeras posible** (evitar dependencias innecesarias).
- Usar **volúmenes persistentes** para evitar pérdida de datos entre reconstrucciones.
- Documentar comandos y variables de entorno dentro del `README.md` del proyecto.
- Versionar siempre los archivos `.devcontainer` junto con el código fuente.

---

## Casos de uso comunes

- Proyectos de Node.js, Python, Go o [Rust](/desarrollo%20multiplataforma/rust/).
- Entornos de desarrollo para microservicios.
- Integración con pipelines de CI/CD.
- Formación, talleres o repositorios educativos.
- Creación de entornos de desarrollo en la nube sin instalación local.

---

## Recursos adicionales

- [Documentación oficial de Development Containers](https://containers.dev/)
- [Repositorio de ejemplos de Microsoft](https://github.com/devcontainers/templates)
- [Docker + Devcontainers en YouTube](https://youtu.be/ld-eeO2y6YI)
- [Buenas prácticas en Dockerfiles](https://github.com/pabpereza/dockerfile-best-practices)

# Devcontainers – Ampliación de conceptos

## Configuraciones avanzadas  
- Uso de múltiples configuraciones por repositorio  
	- Puedes definir más de un archivo `devcontainer.json` dentro de un repositorio para distintas ramas o stacks tecnológicos. :contentReference[oaicite:1]{index=1}  
	- Cada configuración puede ubicarse en subcarpetas bajo `.devcontainer/` y se selecciona al crear el entorno (por ejemplo en GitHub Codespaces). :contentReference[oaicite:3]{index=3}  
- Esquema de metadata avanzada ( `devcontainer.metadata` )  
	- El fichero `devcontainer.json` admite muchas propiedades como `containerEnv`, `remoteEnv`, `capAdd`, `privileged`, etc. :contentReference[oaicite:4]{index=4}  
	- Uso de etiquetas de imagen (“image labels”) para almacenar metadatos adicionales reutilizables. :contentReference[oaicite:5]{index=5}  
- Plantillas (Templates) y Features reutilizables  
	- La especificación permite publicar “Features” reutilizables (instalación de herramientas comunes) y “Templates” (configuraciones base) para distintos stacks. :contentReference[oaicite:6]{index=6}  
	- Estas facilitan la creación rápida de entornos sin empezar desde cero.  

## Rendimiento y plataforma  
- Rendimiento en distintos sistemas operativos  
	- En macOS/Windows el montaje de volumen puede tener penalización; se recomienda usar volúmenes de contenedor en vez de bind-mount para mejora de rendimiento. :contentReference[oaicite:7]{index=7}  
- Compatibilidad con arquitecturas y entornos remotos  
	- Puedes usar contenedores en hosts remotos SSH, túneles, WSL2, incluso en entornos ARM. :contentReference[oaicite:8]{index=8}  
- Seguridad y aislamiento  
	- Los entornos están aislados del sistema local: evita conflictos de dependencias, versiones, variables de entorno, y minimiza el “works-on-my-machine”. :contentReference[oaicite:9]{index=9}  
	- Propiedades como `privileged: true`, `capAdd: ["SYS_PTRACE"]`, etc., tienen implicaciones de seguridad que deben evaluarse. :contentReference[oaicite:10]{index=10}  

## Flujos de trabajo en equipo  
- Onboarding rápido de nuevos desarrolladores  
	- Crear un contenedor predefinido con TODO lo necesario reduce el tiempo de puesta en marcha. :contentReference[oaicite:11]{index=11}  
- Integración CI/CD  
	- Los devcontainers se pueden usar no solo para el desarrollo local sino también en entornos de CI para garantizar consistencia. :contentReference[oaicite:12]{index=12}  
- Compartir configuración del entorno  
	- Versionar `.devcontainer/` junto al código permite que todos los desarrolladores y forks del proyecto usen exactamente la misma configuración.  

## Depuración, tasks y extensiones  
- Depuración (Debugging) dentro de contenedor  
	- Las herramientas como Visual Studio Code permiten adjuntar el depurador dentro del contenedor como si fuera local. :contentReference[oaicite:14]{index=14}  
	- Variables de entorno, puertos (forwardPorts) y otros deben definirse para facilitar el debug. :contentReference[oaicite:15]{index=15}  
- Tareas, comandos post-creación y automatización  
	- Propiedad `postCreateCommand` (o `postStartCommand`, `postAttachCommand`) permite ejecutar scripts automatizados al crear/abrir el contenedor. :contentReference[oaicite:16]{index=16}  
	- Se pueden definir tareas específicas del entorno, como `yarn install`, `dotnet restore`, etc.  
- Extensiones del editor en contenedor  
	- Puedes especificar qué extensiones del editor (por ejemplo VS Code) instalar automáticamente en el contenedor. :contentReference[oaicite:17]{index=17}  

## Persistencia, volúmenes y datos  
- Volúmenes persistentes vs bind-mounts  
	- Usar volúmenes de Docker mejora el rendimiento (especialmente en macOS/Windows) y evita problemas de permisos. :contentReference[oaicite:18]{index=18}  
- Almacenamiento de estado de la sandbox de desarrollo  
	- A veces se desea mantener ciertos datos entre reinicios del contenedor (por ejemplo cachés, bases de datos locales) y otras veces reiniciar limpio; la configuración debe contemplarlo.

## Buenas prácticas adicionales  
- Mantenibilidad de la imagen base  
	- Usar imágenes ligeras y comenzar desde un “official dev container image” cuando sea posible.  
- Seguridad de la cadena de suministro  
	- Pinchado de versiones, revisión de features públicas, minimización de capas innecesarias.  
- Documentación clara  
	- Incluir en README o wiki del proyecto cómo usar el devcontainer: comandos “Reopen in Container”, reconstrucción, solución de problemas.  
- Separación de dependencia de herramientas globales  
	- Evitar instalar herramientas de forma global en el host; todo estará definido dentro del contenedor.

## Consideraciones y limitaciones  
- No es sustituto completo de máquina virtual para todo tipo de carga (por ejemplo cargas GPU, hardware muy específico)  
- Dependencia de que el entorno host tenga Docker o compatible correctamente configurado.  
- Algunos editores/extensiones pueden no comportarse igual dentro del contenedor debido a dependencias nativas. :contentReference[oaicite:19]{index=19}  


