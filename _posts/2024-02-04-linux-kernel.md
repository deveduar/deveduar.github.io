---
date: 2024-02-04 19:06
title: Linux kernel
tags:
  - Linux
status: 🌟
Parent: "[[Area-Sistemas]]"
keywords:
source:
cssclasses:
  - hide-embedded-header1
categories:
  - Linux
public_note: "true"
category: Linux
---
# Linux kernel curso LFD103 (entorno comun)
`$= dv.current().file.tags.join(" ")`

## Introducción y alcance
- El curso **LFD103** introduce a desarrolladores al proceso de desarrollo del kernel de Linux, incluyendo las reglas explícitas e implícitas que rigen la colaboración en la comunidad.
- Se centra en el flujo completo: desde la preparación del entorno hasta la interacción con mantenedores y revisores.
- Proporciona una base práctica para contribuir de forma correcta y sostenible al kernel principal (*mainline*).

## Preparación del entorno de desarrollo
- Selección del sistema operativo y distribución adecuados para desarrollo del kernel.
- Instalación de dependencias esenciales:
	- Compiladores (gcc/clang).
	- Herramientas de construcción (make, binutils).
	- Librerías y utilidades necesarias para la configuración del kernel.
- Configuración del entorno de trabajo:
	- Uso de máquinas virtuales o sistemas dedicados.
	- Configuración de acceso a hardware real o emulado para pruebas.
- Consideraciones de rendimiento y espacio en disco para builds frecuentes.

## Repositorios del kernel y ciclos de lanzamiento
- Visión general de los repositorios del kernel de Linux:
	- Repositorio principal (*mainline*).
	- Árboles mantenidos por subsistemas.
	- Árboles -stable y -longterm.
- Comprensión del ciclo de releases:
	- Ventana de *merge*.
	- Versiones -rc (release candidates).
	- Publicación de versiones estables.
- Importancia de elegir la rama correcta para desarrollar y enviar parches.

## Fundamentos de Git aplicados al kernel
- Uso de git en el contexto específico del kernel de Linux.
- Operaciones básicas:
	- Clonar repositorios oficiales.
	- Crear y gestionar ramas de trabajo.
	- Revisar historial y cambios.
- Buenas prácticas:
	- Commits pequeños y enfocados.
	- Historial limpio y legible.
- Flujo típico de trabajo con parches (*patch-based workflow*).

## Construcción e instalación del kernel
- Configuración inicial del kernel:
	- Uso de configuraciones por defecto.
	- Ajustes manuales mediante herramientas de configuración.
- Proceso de compilación:
	- Compilación incremental.
	- Manejo de errores comunes.
- Instalación y arranque:
	- Instalación en sistemas de prueba.
	- Convivencia con otros kernels instalados.
- Verificación básica del kernel compilado.

## Normas de conducta y gobernanza
- Comprensión del **Linux kernel Contributor Covenant Code of Conduct**.
- Importancia del respeto y la comunicación profesional.
- Conocimiento del **Enforcement Statement**:
	- Cómo se gestionan violaciones al código de conducta.
	- Rol de los responsables de hacer cumplir las normas.
- Impacto de la gobernanza en la colaboración a largo plazo.

## Desarrollo y prueba de parches
- Escritura de parches para el kernel:
	- Identificación de problemas o mejoras.
	- Cambios mínimos y bien justificados.
- Pruebas de parches:
	- Pruebas funcionales.
	- Pruebas de regresión.
	- Uso de herramientas de validación automática.
- Importancia de probar en diferentes configuraciones cuando sea posible.

## Mensajes de commit y documentación
- Estructura correcta de un mensaje de commit:
	- Línea de asunto clara y concisa.
	- Descripción detallada del problema y la solución.
- Inclusión de contexto técnico relevante.
- Uso de etiquetas y referencias cuando corresponda.
- Valor del commit log como documentación histórica.

## Envío de parches
- Identificación de los destinatarios correctos:
	- Uso de `checkpatch.pl` para validar estilo y formato.
	- Uso de `get_maintainers.pl` para localizar mantenedores y listas de correo.
- Envío de parches por correo electrónico:
	- Formato correcto.
	- Series de parches (*patch series*).
- Importancia de seguir las convenciones establecidas.

## Comunicación con la comunidad del kernel
- Do’s and don’ts en la comunicación:
	- Claridad y cortesía.
	- Respuestas técnicas fundamentadas.
- Comprensión de la cultura de revisión:
	- Críticas directas orientadas al código, no a la persona.
- Gestión de discusiones técnicas en listas de correo.

## Revisión y re-trabajo de parches
- Interpretación del feedback de revisores y mantenedores.
- Re-trabajo de parches:
	- Incorporar sugerencias.
	- Justificar decisiones cuando sea necesario.
- Envío de versiones revisadas (*v2, v3, …*).
- Persistencia y aprendizaje continuo como parte del proceso.

# Linux kernel — Conceptos avanzados y temas complementarios
`$= dv.current().file.tags.join(" ")`

## Arquitectura interna del kernel
- Separación conceptual entre espacio de usuario y espacio de kernel.
- Diseño monolítico modular:
	- Núcleo principal.
	- Módulos cargables dinámicamente.
- Flujo de ejecución:
	- Llamadas al sistema.
	- Interrupciones y excepciones.
- Portabilidad del kernel entre arquitecturas.

## Subsistemas principales
- **Gestión de procesos y scheduler**
	- Estados de procesos.
	- Planificadores y políticas de scheduling.
- **Gestión de memoria**
	- Memoria virtual.
	- Paginación y swapping.
	- Slab, SLUB y SLOB allocators.
- **Sistema de archivos**
	- VFS (Virtual File System).
	- Soporte para múltiples sistemas de archivos.
- **Red**
	- Stack TCP/IP.
	- Netfilter y routing.
- **Drivers y dispositivos**
	- Modelo de drivers.
	- Bus, dispositivos y controladores.

## Modelo de módulos del kernel
- Qué es un módulo del kernel.
- Carga y descarga dinámica de módulos.
- Dependencias entre módulos.
- Casos de uso comunes:
	- Drivers de hardware.
	- Extensiones específicas de funcionalidad.

## Gestión de configuraciones del kernel
- Archivos de configuración del kernel.
- Opciones de configuración y dependencias.
- Impacto de la configuración en:
	- Rendimiento.
	- Seguridad.
	- Tamaño del kernel.
- Buenas prácticas para mantener configuraciones reproducibles.

## Depuración y diagnóstico
- Técnicas básicas de debugging del kernel.
- Uso de logs del kernel.
- Herramientas de diagnóstico:
	- Tracing.
	- Profiling.
- Manejo de fallos críticos:
	- Kernel oops.
	- Panics.
- Importancia de los símbolos de depuración.

## Seguridad en el kernel
- Superficie de ataque del kernel.
- Controles de acceso y mecanismos de aislamiento.
- Hardening del kernel:
	- Configuraciones de seguridad.
	- Restricción de funcionalidades.
- Impacto de vulnerabilidades en el kernel.
- Importancia de parches de seguridad y actualizaciones.

## Rendimiento y optimización
- Identificación de cuellos de botella.
- Coste de llamadas al sistema.
- Optimización de drivers y subsistemas.
- Medición y análisis de rendimiento.
- Balance entre rendimiento, estabilidad y mantenibilidad.

## Estabilidad y mantenimiento a largo plazo
- Diferencia entre kernels mainline, stable y LTS.
- Backports de parches.
- Gestión de regresiones.
- Importancia del testing continuo.
- Uso del kernel en entornos de producción.

## Licencias y aspectos legales
- Licencia GPL del kernel de Linux.
- Implicaciones para desarrolladores y empresas.
- Distribución de binarios y código fuente.
- Relación entre licencias y contribuciones al upstream.

## Ecosistema y roles en el desarrollo
- Rol de Linus Torvalds y mantenedores.
- Maintainers de subsistemas.
- Contribuidores individuales y corporativos.
- Importancia del upstream-first.
- Relación entre distribuciones y kernel upstream.

## Evolución futura del kernel
- Tendencias en desarrollo del kernel.
- Soporte para nuevas arquitecturas y hardware.
- Integración de nuevas tecnologías.
- Enfoque en escalabilidad, seguridad y eficiencia energética.

# Linux kernel — Recursos actualizados 2025
`$= dv.current().file.tags.join(" ")`

## Documentación oficial y guías completas
- **Linux kernel documentation** — La documentación oficial del kernel de Linux en `docs.kernel.org`, cubre:
	- Proceso de desarrollo y *workflow*.
	- Cómo enviar parches y trabajar con la comunidad.
	- APIs internas para subsistemas y drivers.
	- Código de conducta y manual del mantenedor.  
	[Linux Kernel Documentation](https://docs.kernel.org)
- **[Cómo participar en el desarrollo del kernel de Linux](https://docs.kernel.org/v6.3/translations/sp_SP/howto.html)** — Guía principal para nuevos desarrolladores: filosofía del desarrollo, estructura organizativa y cómo integrarse correctamente.
- **The Linux Kernel Module Programming Guide** — Guía clásica (basada en *LKMPG*) para aprender módulos del kernel, útil para comprender la creación y manejo de módulos.  
	[Linux Kernel Module Programming Guide](https://sysprog21.github.io/lkmpg/)

## Cursos y formación (2025)
- **[Linux Kernel Internals and Development](https://training.linuxfoundation.org/training/linux-kernel-internals-and-development/)** — Curso avanzado de la Linux Foundation: arquitectura interna, gestión de memoria, modularización y *debugging*.
- **Recursos de educación de la Linux Foundation** — Incluye formación gratuita y de pago sobre desarrollo del kernel y temas relacionados (*Linux kernel development*, *GitHub para estándares abiertos*, *Introducción al desarrollo de drivers*, webinars, etc).  
	[Linux Foundation Training Resources](https://training.linuxfoundation.org/resources/)
- **Introduction to Linux Kernel Development (slashprog.com)** — Curso introductorio sobre compilación, módulos y contribución al kernel (incluye pasos para compilar y probar).  
	[Introduction to Linux Kernel Development](https://slashprog.com/courses/introduction-to-linux-kernel-development/)
- **Catálogo de cursos sobre Linux Kernel Development** — Listado de cursos, charlas y recursos actualizados para 2025.  
	[Linux Kernel Development Courses](https://www.classcentral.com/subject/linux-kernel-development)

## Artículos y guías técnicas
- **Guía de *tuning* del kernel Linux 2025** — Recomendaciones para optimizar rendimiento en producción (memoria, red, E/S y más).  
	[Kernel Linux Tuning Guide](https://www.devopsfreelance.pro/blog/posts/tunning-kernel-linux/)

## Libros y guías de referencia para 2025
- **Linux Kernel Programming 2025: A Complete Guide for Developers** — Guía completa en formato *ebook* actualizada para 2025, cubre fundamentos y prácticas de desarrollo.  
	[Linux Kernel Programming 2025](https://www.amazon.com/Linux-Kernel-Programming-2025-Developers-ebook/dp/B0FVTLPX5K)

## Cursos y formación en sistemas relacionados
- **Embedded Linux Online Course (Arm)** — Curso que cubre configuración y desarrollo de drivers para sistemas embebidos basados en Linux, relevante para desarrollo de kernel orientado a hardware específico.  
	[Embedded Linux Online Course](https://www.arm.com/resources/education/online-courses/embedded-linux)

## Comunidades y foros de discusión
- **Reddit – kernel development resources** — Listado de recursos sugeridos por la comunidad para aprender y avanzar en desarrollo del kernel.  
	[r/kernel](https://www.reddit.com/r/kernel/)
- YouTube y charlas técnicas:
	- Guías prácticas y talleres sobre Linux y desarrollo del kernel.  
		[Linux Kernel Development Videos](https://www.youtube.com/results?search_query=linux+kernel+development)
	- Talleres paso a paso sobre cómo enviar parches y estructura del kernel.  
		[Linux Kernel Patch Workflow](https://www.youtube.com/results?search_query=linux+kernel+patch+workflow)

## Herramientas prácticas para desarrollo
- **Dynamic Kernel Module Support (DKMS)** — Herramienta para recompilar módulos automáticamente al actualizar el kernel, útil para desarrollo y mantenimiento de drivers fuera de árbol.  
	[Dynamic Kernel Module Support](https://en.wikipedia.org/wiki/Dynamic_Kernel_Module_Support)
- **Yocto Project** — Proyecto de la Linux Foundation para crear distribuciones Linux embebidas; clave para trabajos de kernel en entornos *embedded*.  
	[Yocto Project](https://www.yoctoproject.org/)

## Investigación y avances recientes (2025)
- **Principled Performance Tunability** — Investigación sobre ajuste dinámico de parámetros críticos del kernel en tiempo de ejecución.  
	[arXiv: Principled Performance Tunability](https://arxiv.org/abs/2512.12530)
- **LLM-Driven Kernel Evolution** — Estudio sobre automatización de actualizaciones de drivers mediante *large language models*.  
	[arXiv: LLM-Driven Kernel Evolution](https://arxiv.org/abs/2511.18924)
- **CrashFixer: agentes de reparación de fallos para el kernel** — Investigación aplicada al uso de IA para detección y corrección de bugs del kernel.  
	[arXiv: CrashFixer](https://arxiv.org/abs/2504.20412)
- **Linux Kernel Configurations at Scale** — Dataset e investigación sobre configuraciones del kernel a gran escala y su impacto en rendimiento y fiabilidad.  
	[arXiv: Linux Kernel Configurations at Scale](https://arxiv.org/abs/2505.07487)

# Linux kernel — Fundamentos, arquitectura y roadmap para desarrolladores
`$= dv.current().file.tags.join(" ")`

## Fundamentos del kernel de Linux
- El kernel de Linux es el núcleo del sistema operativo responsable de:
	- Gestión de CPU, memoria y dispositivos.
	- Proveer abstracciones seguras al espacio de usuario.
	- Coordinar concurrencia y aislamiento entre procesos.
- Funciona como intermediario entre hardware y software de usuario.
- Implementa políticas mínimas, delegando decisiones a subsistemas especializados.

## Espacio de usuario vs espacio de kernel
- **Espacio de usuario**
	- Ejecuta aplicaciones sin acceso directo al hardware.
	- Interactúa con el kernel mediante llamadas al sistema.
- **Espacio de kernel**
	- Ejecuta código con privilegios completos.
	- Accede directamente a CPU, memoria y dispositivos.
- Separación crítica para:
	- Seguridad.
	- Estabilidad.
	- Aislamiento de fallos.

## Arquitectura general del kernel
- Arquitectura monolítica modular:
	- Núcleo central siempre residente.
	- Módulos cargables dinámicamente.
- Componentes principales:
	- Scheduler.
	- Gestor de memoria.
	- Subsistemas de E/S.
	- Stack de red.
	- VFS.
- Comunicación interna mediante:
	- Estructuras de datos compartidas.
	- Callbacks y notifiers.
	- APIs internas estables a nivel de subsistema.

## Flujo de ejecución
- Arranque del sistema:
	- Bootloader carga el kernel.
	- Inicialización temprana de CPU y memoria.
- Inicialización de subsistemas:
	- Drivers esenciales.
	- Planificador.
	- Sistema de archivos raíz.
- Ejecución normal:
	- Procesos de usuario generan eventos.
	- El kernel responde mediante interrupciones y syscalls.

## Llamadas al sistema
- Punto de entrada principal desde user-space.
- Proveen una API controlada al kernel.
- Características:
	- Coste controlado.
	- Validación estricta de argumentos.
- Evolución cuidadosa para mantener compatibilidad.

## Gestión de procesos y scheduling
- Abstracción de proceso e hilo.
- Estados de proceso:
	- Running.
	- Sleeping.
	- Zombie.
- Planificadores:
	- CFS (Completely Fair Scheduler).
	- Políticas en tiempo real.
- Balance entre:
	- Latencia.
	- Throughput.
	- Consumo energético.

## Gestión de memoria
- Memoria virtual por proceso.
- Paginación y manejo de fallos de página.
- Asignadores de memoria del kernel:
	- SLAB.
	- SLUB.
	- SLOB.
- Separación entre:
	- Memoria de usuario.
	- Memoria del kernel.

## Sistema de archivos y VFS
- VFS como capa de abstracción.
- Permite múltiples sistemas de archivos simultáneamente.
- Operaciones unificadas:
	- open
	- read
	- write
	- mount
- Facilita extensibilidad y portabilidad.

## Drivers y modelo de dispositivos
- Drivers como puente entre hardware y kernel.
- Modelo de dispositivos:
	- Bus.
	- Device.
	- Driver.
- Soporte para hotplug.
- Uso extensivo de módulos del kernel.

## Seguridad a nivel de arquitectura
- Principio de mínimo privilegio.
- Aislamiento entre procesos.
- Mecanismos de protección:
	- Namespaces.
	- Control groups.
	- Capacidades.
- Impacto directo en diseño y APIs del kernel.

## Roadmap para nuevos desarrolladores técnicos
- Orientado a desarrolladores con base en C, sistemas operativos o bajo nivel.

## Fase 1 — Bases imprescindibles
- Dominio del lenguaje C orientado a sistemas.
- Comprensión de:
	- Arquitectura de CPU.
	- Memoria virtual.
	- Concurrencia básica.
- Uso sólido de git y flujos basados en parches.

## Fase 2 — Introducción práctica al kernel
- Compilar el kernel desde fuentes.
- Ejecutar kernels personalizados en entorno de prueba.
- Explorar el árbol de código fuente:
	- include/
	- kernel/
	- mm/
	- fs/
- Lectura guiada de código existente.

## Fase 3 — Módulos y primeros cambios
- Crear y cargar módulos simples.
- Interactuar con:
	- Logs del kernel.
	- Parámetros del kernel.
- Realizar cambios pequeños y autocontenidos.
- Entender el impacto de cambios en estabilidad.

## Fase 4 — Herramientas y debugging
- Uso de herramientas de análisis:
	- Tracing.
	- Profiling.
- Interpretar:
	- Oops.
	- Panics.
- Compilar con símbolos de depuración.
- Reproducir y aislar fallos.

## Fase 5 — Contribución al upstream
- Selección de subsistema adecuado.
- Uso de herramientas de validación de parches.
- Envío de parches a listas de correo.
- Iteración basada en feedback técnico.

## Fase 6 — Especialización
- Foco en un área concreta:
	- Scheduler.
	- Memoria.
	- Drivers.
	- Red.
- Seguimiento de discusiones técnicas.
- Revisión de parches de otros desarrolladores.
- Evolución hacia mantenedor o experto de subsistema.

## Mentalidad y buenas prácticas
- Priorizar corrección y claridad sobre optimización prematura.
- Cambios pequeños y bien justificados.
- Documentar decisiones técnicas.
- Aprender del feedback y del historial del proyecto.
