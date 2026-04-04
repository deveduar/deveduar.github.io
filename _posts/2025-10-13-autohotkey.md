---
date: 2025-10-13 15:20
title: autohotkey
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: Automatizacion y Build
tags:
  - automation
  - autohotkey
  - Productividad
  - sistemas
  - Linux
  - Windows
---
# autohotkey

- [Automatizacion y Build](/automatizacion%20y%20build/automatizacion-y-build/)
- [Sistemas](/sistemas/sistemas/)
- windows
- [powershell](/sistemas/powershell/)

- [AutoHotkey v2 — Documentación oficial](https://www.autohotkey.com/docs/v2/)
- Automatización de flujos en Obsidian y GitHub
- Integración con Python mediante [ahkpy](https://ahkpy.readthedocs.io/en/latest/install.html)

## ¿Qué es AutoHotkey?
AutoHotkey (AHK) es un **lenguaje de scripting para Windows** orientado a la **automatización de tareas repetitivas**, creación de atajos de teclado, macros avanzadas y manipulación del sistema operativo a bajo nivel.  
Está diseñado para ser:
- Rápido de escribir
- Altamente expresivo
- Integrable con otras herramientas del ecosistema Windows

## Casos de uso principales
- Automatización del escritorio (GUI, ventanas, menús)
- Creación de hotkeys y hotstrings globales
- Macros para aplicaciones (navegadores, IDEs, editores)
- Orquestación de flujos entre herramientas (Git, terminales, editores)
- Automatización de tareas sin API oficial
- Productividad personal y scripting ligero

## AutoHotkey en Windows
- Acceso directo a APIs de Windows
- Control de ventanas, procesos y entradas de usuario
- Ideal para complementar PowerShell cuando:
	- No existe CLI
	- La automatización es visual o interactiva
	- Se requieren atajos globales

## AutoHotkey y Automatización de GitHub
- Creación de macros para:
	- Commits repetitivos
	- Apertura de repositorios
	- Gestión de issues y PRs vía navegador
- Automatización de flujos locales previos a CI/CD
- Integración con scripts de [Automatizacion y Build](/automatizacion%20y%20build/automatizacion-y-build/)

## AutoHotkey y Obsidian
- Automatización de:
	- Creación de notas
	- Inserción de plantillas
	- Atajos personalizados para workflows Zettelkasten
- Control del portapapeles para transformar contenido
- Integración con plugins y flujos personalizados

## AutoHotkey + Python
- Uso de AutoHotkey como capa de automatización del sistema
- Python como motor lógico o de datos
- Comunicación bidireccional:
	- Python ejecuta scripts AHK
	- AHK invoca scripts Python
- Librería oficial: [ahkpy](https://ahkpy.readthedocs.io/en/latest/install.html)

## Arquitectura típica de un script AHK
- Definición de hotkeys / hotstrings
- Lógica de control
- Interacción con ventanas y procesos
- Manejo de errores y estados
- Opcional: comunicación con otros lenguajes

## Hotkeys y Hotstrings
- Hotkeys: combinaciones de teclas
- Hotstrings: expansión automática de texto
- Uso común:
	- Abreviaturas técnicas
	- Snippets reutilizables
	- Comandos rápidos

## Automatización de Ventanas
- Identificación por:
	- Título
	- Clase
	- Proceso
- Acciones:
	- Activar
	- Mover
	- Redimensionar
	- Minimizar / maximizar
- Base para flujos multi-aplicación

## Integración con otros sistemas
- Complemento natural de:
	- PowerShell
	- Bash en Windows
	- Herramientas de build
- Automatización híbrida:
	- AHK → interacción visual
	- CLI → ejecución lógica

## Buenas prácticas
- Separar hotkeys y lógica
- Modularizar scripts grandes
- Documentar atajos personalizados
- Versionar scripts con Git
- Evitar automatizaciones frágiles basadas solo en posiciones

## AutoHotkey v2
- Sintaxis más consistente
- Mejor manejo de objetos
- Enfoque más moderno
- Recomendado para nuevos proyectos
- Documentación oficial: [AutoHotkey  v2](https://www.autohotkey.com/docs/v2/)

## Relación con [Sistemas](/sistemas/sistemas/)
- Automatización a nivel de usuario
- Puente entre usuario y sistema operativo
- Ideal para entornos Windows administrados
- Soporte para flujos DevOps locales

# autohotkey — conceptos avanzados y áreas no cubiertas

## Modelo de ejecución
- Scripts interpretados en tiempo real
- Persistencia en memoria mientras el script esté activo
- Soporte para ejecución en segundo plano (tray)
- Diferencia entre scripts persistentes y de ejecución puntual

## Manejo de eventos
- Hooks de teclado y ratón
- Eventos del sistema (cambio de ventana, foco, estado)
- Temporizadores (`SetTimer`) para automatización reactiva
- Automatización basada en estado, no solo en atajos

## Interacción avanzada con el sistema
- Llamadas directas a WinAPI
- Uso de DLL externas
- Manipulación avanzada de procesos:
	- Prioridad
	- Afinidad de CPU
	- Monitoreo de estado

## GUI con AutoHotkey
- Creación de interfaces gráficas nativas
- Formularios, botones, listas y menús
- GUIs como paneles de control de automatización
- Uso de GUI para scripts complejos en lugar de hotkeys

## Gestión del portapapeles
- Manipulación avanzada de texto
- Transformaciones automáticas:
	- Markdown
	- Código
	- Snippets reutilizables
- Uso como middleware entre aplicaciones

## Automatización basada en contexto
- Hotkeys dependientes de aplicación activa
- Comportamiento distinto según:
	- Ventana
	- Workspace
	- Monitor
- Automatización consciente del entorno

## Integración con línea de comandos
- Ejecución de comandos PowerShell
- Invocación de scripts Bash en Windows
- Captura de salida estándar
- AHK como orquestador de comandos

## AutoHotkey como glue language
- Conecta herramientas que no se comunican entre sí
- Ideal para flujos legacy
- Sustituye automatizaciones manuales sin reescribir sistemas
- Puente entre UI y backend

## Testing y depuración
- Uso de `MsgBox` y `ToolTip` para debugging
- Logs personalizados
- Ejecución paso a paso
- Aislamiento de hotkeys problemáticos

## Seguridad y control
- Riesgos de scripts globales
- Firmado de scripts
- Control de permisos en entornos corporativos
- Buenas prácticas para evitar keyloggers involuntarios

## Distribución de scripts
- Compilación a ejecutables
- Portabilidad sin dependencias
- Uso en USB o entornos restringidos
- Versionado y releases internos

## Performance y optimización
- Uso correcto de timers
- Evitar bucles bloqueantes
- Reducción de hooks innecesarios
- Scripts ligeros vs scripts monolíticos

## Automatización multi-monitor
- Detección de monitores
- Posicionamiento inteligente de ventanas
- Flujos de trabajo por pantalla
- Productividad avanzada en setups complejos

## Accesibilidad
- Automatización para usuarios con limitaciones físicas
- Reemplazo de acciones repetitivas
- Interfaces simplificadas
- Macros como soporte de accesibilidad

## Comparativa conceptual
- AutoHotkey vs PowerShell:
	- UI vs CLI
	- Interacción humana vs automatización lógica
- AutoHotkey vs herramientas RPA:
	- Ligero vs pesado
	- Local vs enterprise
- AutoHotkey vs scripts Python:
	- Sistema vs lógica

## Casos donde NO usar AutoHotkey
- Automatización en servidores sin UI
- Procesos críticos sin supervisión
- Flujos altamente frágiles basados en coordenadas
- Sustitución de APIs existentes

## Evolución y mantenimiento
- Migración de scripts v1 a v2
- Refactorización progresiva
- Modularización avanzada
- Documentación interna del workflow

## Relación con [Automatizacion y Build](/automatizacion%20y%20build/automatizacion-y-build/)
- Automatización previa a pipelines
- Preparación de entornos locales
- Estandarización de acciones humanas
- Complemento a CI/CD

## Relación con windows
- Automatización nativa del ecosistema
- Extensión del sistema operativo
- Personalización profunda del entorno
- Control fino sin herramientas externas

# autohotkey — casos de uso y ejemplos de código

## Casos de uso comunes
- **Automatización de tareas repetitivas**
	- Abrir aplicaciones y carpetas específicas
	- Llenar formularios automáticamente
	- Renombrar archivos en lote
- **Productividad en Obsidian**
	- Crear notas con plantillas predefinidas
	- Insertar links internos automáticamente
	- Generar tablas de contenido rápidas
- **Automatización de GitHub**
	- Crear commits con mensaje estándar
	- Abrir repositorios y lanzar scripts de build
	- Gestionar issues y pull requests mediante macros
- **Macros para aplicaciones**
	- Editor de texto: expandir snippets
	- Navegador: rellenar formularios web
	- Excel: automatizar cálculos y copiado de datos
- **Control del sistema**
	- Ajustar volumen o brillo
	- Gestionar ventanas (minimizar, maximizar, mover)
	- Automatizar backups locales
- **Integración con Python**
	- Procesar datos con Python y automatizar la entrada de resultados en GUIs
	- Comunicación bidireccional entre scripts

## Ejemplos de código

### Hotkeys básicos
{% raw %}
```ahk
; Abrir calculadora con Ctrl+Alt+C
^!c::Run calc.exe

; Minimizar todas las ventanas con Win+M
#M::WinMinimizeAll
```
{% endraw %}`

### Hotstrings (expansión de texto)

{% raw %}
```ahk
::fecha::%A_YYYY%-%A_MM%-%A_DD%
::addr::123 Calle Principal, Ciudad, País
```
{% endraw %}

### Automatización de ventanas

{% raw %}
```ahk
; Mover la ventana activa a la esquina superior izquierda
^!Left::
	WinGetPos, , , Width, Height, A
	WinMove, A, , 0, 0, Width, Height
return
```
{% endraw %}

### Uso de temporizadores

{% raw %}
```ahk
; Mostrar mensaje cada 10 segundos
SetTimer, Aviso, 10000
return

Aviso:
	ToolTip, ¡No olvides tomar un descanso!
return
```
{% endraw %}

### Automatización de Obsidian

{% raw %}
```ahk
; Crear nueva nota con plantilla
^!n::
	Send, ^t
	Sleep, 100
	Send, Nueva Nota{Enter}
return
```
{% endraw %}

### Integración con Python

{% raw %}
```ahk
; Ejecutar script Python y mostrar resultado
^!p::
	RunWait, python.exe "C:\Scripts\procesar_datos.py", , Hide
	MsgBox, Script Python ejecutado correctamente
return
```
{% endraw %}

### GUI básica

{% raw %}
```ahk
; Crear ventana con botones
Gui, Add, Text,, Selecciona una acción:
Gui, Add, Button, gAccion1, Acción 1
Gui, Add, Button, gAccion2, Acción 2
Gui, Show,, Panel de Automatización
return

Accion1:
	MsgBox, Acción 1 ejecutada
return

Accion2:
	MsgBox, Acción 2 ejecutada
return

GuiClose:
	ExitApp
```
{% endraw %}

## Automatización avanzada

- Scripts que combinan hotkeys, hotstrings y temporizadores
- Flujos multi-aplicación
- Integración con APIs externas (Python, PowerShell)
- Gestión de errores y logs automáticos
- Personalización según ventana activa o monitor