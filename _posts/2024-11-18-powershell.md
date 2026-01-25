---
date: 2024-11-18 22:45
title: powershell
tags:
  - powershell
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
cssclasses:
  - hide-embedded-header1
  - wide
categories:
  - Sistemas
public_note: "true"
category: Sistemas
---
# PowerShell
`$= dv.current().file.tags.join(" ")`

## Enlaces internos y contexto
- [Sistemas](/uncategorized/sistemas/)
- Automatizacion
- script de hardening powershell
- script para comprobar puertos ocupados con powershell
- [net](/software%20engineering/net/)

## Estado y tareas
- [x] Actualizar PowerShell a la versión 7
- [x] Extensión Windows Terminal Integrator
- [x] Crear script para parar servicios
- [ ] Configurar Oh My Posh en PowerShell (sin WSL)
- [ ] Zsh y Oh My Zsh en WSL info primeros pasos
- [ ] Oh My Posh en Git Bash
- [ ] Monitorizar red
- [ ] Gestionar perfiles y extensiones según lenguaje

## PowerShell 7
- PowerShell 7 (pwsh) está basado en .NET (Core), es multiplataforma y reemplaza progresivamente a Windows PowerShell 5.1
- Permite mejor compatibilidad con herramientas modernas, módulos actualizados y scripting avanzado
- Convivencia:
	- Windows PowerShell 5.1 (`powershell.exe`)
	- PowerShell 7 (`pwsh.exe`)
- Recomendado usar PowerShell 7 como shell por defecto en Windows Terminal

## Personalización de PowerShell con Oh My Posh
- [Oh My Posh](https://ohmyposh.dev/) permite personalizar el prompt con temas, iconos y contexto dinámico
- Uso sin WSL, directamente en Windows
- Instalación recomendada mediante Chocolatey
- Uso de fuentes Nerd Font para iconos y ligaduras

### Instalación de Oh My Posh con Chocolatey
- Requiere Chocolatey previamente instalado
- Permite actualizaciones automáticas

### Fuente FiraCode Nerd Font
- Mejora legibilidad del código
- Soporte para iconos y símbolos usados por Oh My Posh
- Fuente recomendada:
	- `FiraCode Nerd Font Mono`

### Archivo de perfil de PowerShell
- El perfil permite ejecutar configuraciones automáticamente al iniciar PowerShell
- Ruta habitual:
	- `$PROFILE`

#### Crear perfil si no existe
{% raw %}
```powershell
New-Item -Path $PROFILE -Type File -Force
```
{% endraw %}`

#### Editar perfil

{% raw %}
```powershell
code $PROFILE
```
{% endraw %}

### Configuración de tema Oh My Posh

* Los temas se definen mediante archivos JSON
* Se puede:

  * Usar temas oficiales
  * Crear un tema personalizado
* En el perfil se inicializa Oh My Posh apuntando al JSON del tema
* Añadir colores, iconos y secciones dinámicas (git, ruta, estado, tiempo)

### Terminal Icons

* Añade iconos a la salida de `ls`, `dir` y otros comandos
* Mejora la experiencia visual en consola

#### Enlace

* [Terminal Icons](https://github.com/devblackops/Terminal-Icons)

#### Importar módulo

{% raw %}
```powershell
Import-Module Terminal-Icons
```
{% endraw %}

* Se recomienda añadir la importación al perfil para carga automática

### Predicción de comandos (PSReadLine)

* PowerShell 7 incluye predicción inteligente basada en historial
* Mejora la productividad y reduce errores

#### Documentación oficial

* [Predicción de comandos](https://learn.microsoft.com/es-es/powershell/module/psreadline/set-psreadlineoption?view=powershell-7.4)

#### Activar predicción en modo lista

{% raw %}
```powershell
Set-PSReadLineOption -PredictionViewStyle ListView
```
{% endraw %}

* Puede combinarse con colores personalizados

### Configuración de fuente en Visual Studio Code

* Necesario para que los iconos se muestren correctamente en la terminal integrada
* Configuración en `settings.json` del usuario

#### Ajuste recomendado

{% raw %}
```json
"editor.fontFamily": "FiraCode Nerd Font Mono"
```
{% endraw %}


## PowerShell y Git Bash
- Uso de Oh My Posh como prompt unificado entre distintos shells en Windows
- Permite coherencia visual y funcional entre PowerShell y Git Bash
- Facilita la adopción de flujos mixtos (Windows + herramientas Unix)
- Requiere configuración específica del perfil de Git Bash:
	- Inicialización manual de Oh My Posh en `.bashrc` o `.bash_profile`
	- Ajuste de la fuente Nerd Font en el emulador de terminal
	- Compatibilidad parcial con algunos segmentos avanzados del prompt
- Recomendado para usuarios que trabajan con Git y scripts Bash sin WSL

## PowerShell y WSL
- PowerShell puede convivir con zsh dentro de WSL sin interferencias
- Enfoque recomendado: separación clara de responsabilidades
	- PowerShell:
		- Automatización en Windows
		- Administración del sistema
		- Scripts de mantenimiento, hardening y gestión
	- Zsh:
		- Entorno Linux nativo
		- Desarrollo de software
		- Flujos DevOps, contenedores y cloud
- Integración habitual:
	- PowerShell como shell principal en Windows Terminal
	- Perfiles separados para cada distro WSL
- Evita mezclar lógica Windows/Linux en un mismo script

## Monitorización de red
- Uso de herramientas CLI para diagnóstico rápido y reproducible
- Adecuado para:
	- Troubleshooting
	- Monitorización periódica
	- Scripts de comprobación automática

### Speedtest CLI
- Herramienta CLI para pruebas de conectividad
- Permite medir:
	- Latencia
	- Velocidad de descarga
	- Velocidad de subida
- Útil para scripts de monitorización programada
- Integrable en PowerShell para:
	- Registro de resultados en logs
	- Exportación a CSV/JSON
	- Alertas basadas en umbrales
- Puede ejecutarse de forma manual o automatizada (Task Scheduler)

## Gestión de perfiles y extensiones por lenguaje
- Separar configuraciones según contexto de uso:
	- PowerShell puro
	- Desarrollo (Python, Node, Go, etc.)
	- Administración de sistemas
- Uso recomendado de:
	- Múltiples perfiles en Windows Terminal
	- Condicionales en `$PROFILE` según host, ruta o variables de entorno
- Beneficios:
	- Entornos más limpios
	- Menor carga innecesaria de módulos
	- Mejor rendimiento
	- Mayor claridad y mantenibilidad

## Scripts en PowerShell
- Scripts reutilizables como base de la automatización
- Enfoque modular y mantenible
- Buenas prácticas:
	- Uso de funciones bien definidas
	- Manejo de errores con `try/catch`
	- Logging estructurado
	- Ejecución con privilegios controlados
	- Comentarios y ayuda integrada (`Get-Help`)

### Script para parar servicios
- Útil para:
	- Mantenimiento programado
	- Hardening del sistema
	- Troubleshooting
- Puede ampliarse con:
	- Lista blanca y/o negra de servicios
	- Confirmación interactiva antes de detener servicios críticos
	- Ejecución remota sobre múltiples equipos
	- Registro de acciones y estados finales

# PowerShell 7 — Cheatsheet de comandos
`$= dv.current().file.tags.join(" ")`

## Comandos básicos
- `pwsh` → Inicia PowerShell 7
- `exit` → Cierra la sesión actual
- `Get-Help <cmd>` → Ayuda de un comando
- `Get-Help <cmd> -Examples` → Ejemplos de uso
- `Update-Help` → Actualiza la ayuda local
- `Get-Command` → Lista todos los comandos disponibles
- `Get-Command *service*` → Busca comandos por nombre
- `Get-Alias` → Lista alias
- `Set-Alias ll Get-ChildItem` → Crea un alias

## Navegación por el sistema de archivos
- `Get-Location` → Directorio actual
- `Set-Location <ruta>` → Cambiar directorio
- `Get-ChildItem` → Listar archivos (alias: `ls`, `dir`)
- `Get-ChildItem -Recurse` → Listado recursivo
- `Get-ChildItem -Hidden` → Incluye ocultos
- `New-Item <nombre> -ItemType File` → Crear archivo
- `New-Item <nombre> -ItemType Directory` → Crear carpeta
- `Remove-Item <ruta>` → Eliminar
- `Remove-Item <ruta> -Recurse -Force` → Eliminación forzada
- `Copy-Item origen destino` → Copiar
- `Move-Item origen destino` → Mover
- `Rename-Item <archivo> <nuevo>` → Renombrar

## Visualización y manipulación de contenido
- `Get-Content <archivo>` → Ver contenido
- `Get-Content <archivo> -Tail 20` → Últimas líneas
- `Set-Content <archivo> "texto"` → Sobrescribir contenido
- `Add-Content <archivo> "texto"` → Añadir contenido
- `Clear-Content <archivo>` → Vaciar archivo
- `Out-File <archivo>` → Redirigir salida
- `Select-String "texto" <archivo>` → Buscar texto (similar a grep)

## Pipes y filtrado
- Uso del pipe `|`
- `Where-Object` → Filtrado
- `Select-Object` → Selección de propiedades
- `Sort-Object` → Ordenar
- `Measure-Object` → Medidas

### Ejemplos de pipeline
{% raw %}
```powershell
Get-Process | Where-Object CPU -gt 100
```
{% endraw %}`

{% raw %}
```powershell
Get-Service | Select-Object Name, Status
```
{% endraw %}

{% raw %}
```powershell
Get-ChildItem | Sort-Object Length -Descending
```
{% endraw %}

## Gestión de procesos

* `Get-Process` → Lista procesos
* `Get-Process -Name chrome` → Proceso específico
* `Stop-Process -Id <pid>` → Detener proceso
* `Stop-Process -Name chrome -Force` → Forzar cierre
* `Start-Process notepad.exe` → Iniciar proceso
* `Start-Process cmd.exe -Verb RunAs` → Ejecutar como admin

## Gestión de servicios

* `Get-Service` → Lista servicios
* `Get-Service | Where-Object Status -eq Running`
* `Start-Service <nombre>`
* `Stop-Service <nombre>`
* `Restart-Service <nombre>`
* `Set-Service <nombre> -StartupType Disabled`

## Red y conectividad

* `Test-Connection <host>` → Ping
* `Test-NetConnection <host> -Port 443` → Test de puerto
* `Get-NetIPAddress` → IPs del sistema
* `Get-NetAdapter` → Interfaces de red
* `Get-NetTCPConnection` → Conexiones activas
* `Resolve-DnsName <dominio>` → DNS lookup

## Gestión de usuarios y permisos

* `whoami` → Usuario actual
* `Get-LocalUser` → Usuarios locales
* `Get-LocalGroup` → Grupos locales
* `Add-LocalUser <nombre>`
* `Add-LocalGroupMember -Group Administrators -Member <usuario>`
* `Get-Acl <ruta>` → Permisos
* `Set-Acl <ruta> <acl>`

## Variables y entorno

* `$variable = "valor"` → Crear variable
* `$env:PATH` → Variable de entorno
* `Get-Variable` → Lista variables
* `Remove-Variable <nombre>`
* `Get-ChildItem Env:` → Variables de entorno
* `$PROFILE` → Ruta del perfil actual

## Scripts y ejecución

* `.\script.ps1` → Ejecutar script
* `Get-ExecutionPolicy` → Política actual
* `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
* `Get-Command -CommandType Script`
* `Get-History` → Historial
* `Invoke-History <id>` → Reejecutar comando

## Funciones

### Definir función

{% raw %}
```powershell
function Get-Hello {
	Write-Output "Hola PowerShell"
}
```
{% endraw %}

### Ejecutar función

{% raw %}
```powershell
Get-Hello
```
{% endraw %}

## Manejo de errores

* `try { } catch { } finally { }`
* `$Error` → Errores recientes
* `$?` → Último comando correcto/incorrecto
* `Throw "mensaje de error"`

### Ejemplo

{% raw %}
```powershell
try {
	Get-Item archivo.txt
} catch {
	Write-Error "Archivo no encontrado"
}
```
{% endraw %}

## Módulos

* `Get-Module` → Módulos cargados
* `Get-Module -ListAvailable` → Módulos instalados
* `Install-Module <nombre>` → Instalar módulo
* `Import-Module <nombre>` → Cargar módulo
* `Update-Module <nombre>`
* `Remove-Module <nombre>`

## Formatos y salida

* `Format-Table` → Tabla
* `Format-List` → Lista
* `Out-GridView` → Vista gráfica
* `ConvertTo-Json`
* `ConvertFrom-Json`
* `Export-Csv archivo.csv -NoTypeInformation`
* `Import-Csv archivo.csv`

## PowerShell Remoting

* `Enable-PSRemoting`
* `Enter-PSSession -ComputerName host`
* `Invoke-Command -ComputerName host -ScriptBlock { Get-Process }`
* `Exit-PSSession`

## Tips rápidos

* Tab → Autocompletado
* `Ctrl + R` → Búsqueda en historial
* `Get-Member` → Descubrir propiedades y métodos
* `$_` → Objeto actual en pipelines
* `--%` → Stop parsing (útil para comandos externos)


# PowerShell 7 — Conceptos avanzados y temas complementarios
`$= dv.current().file.tags.join(" ")`

## Tipos de datos y objetos .NET
- PowerShell trabaja nativamente con objetos .NET, no solo texto
- Cada comando devuelve objetos ricos en propiedades y métodos
- Permite:
	- Acceso directo a clases .NET
	- Conversión explícita de tipos
	- Uso de métodos nativos

### Uso de tipos .NET
{% raw %}
```powershell
[datetime]::Now
```
{% endraw %}`

{% raw %}
```powershell
[System.IO.File]::ReadAllText("archivo.txt")
```
{% endraw %}

## Clases en PowerShell

* PowerShell permite definir clases propias
* Útil para:

  * Scripts complejos
  * Automatización estructurada
  * Reutilización avanzada

### Definición de clase

{% raw %}
```powershell
class Server {
	[string]$Name
	[string]$IP

	Server($name, $ip) {
		$this.Name = $name
		$this.IP = $ip
	}
}
```
{% endraw %}

## Enumeraciones (Enums)

* Definen valores constantes legibles
* Mejoran claridad y validación

{% raw %}
```powershell
enum EnvironmentType {
	Dev
	Test
	Prod
}
```
{% endraw %}

## Parámetros avanzados

* Permiten crear scripts y funciones profesionales
* Soportan:

  * Validación
  * Parámetros obligatorios
  * Valores por defecto

### Ejemplo

{% raw %}
```powershell
param (
	[Parameter(Mandatory)]
	[string]$Path,

	[ValidateSet("Start","Stop","Restart")]
	[string]$Action
)
```
{% endraw %}

## Cmdlets avanzados y Common Parameters

* Todos los cmdlets soportan parámetros comunes:

  * `-Verbose`
  * `-Debug`
  * `-WhatIf`
  * `-Confirm`
* Permiten pruebas seguras y debugging

{% raw %}
```powershell
Stop-Service Spooler -WhatIf
```
{% endraw %}

## Background Jobs

* Ejecución asíncrona de tareas
* Útil para:

  * Scripts largos
  * Operaciones en paralelo

### Jobs

{% raw %}
```powershell
Start-Job { Get-Process }
```
{% endraw %}

{% raw %}
```powershell
Get-Job | Receive-Job
```
{% endraw %}

## Parallelismo (ForEach-Object -Parallel)

* Disponible en PowerShell 7+
* Permite ejecución concurrente

{% raw %}
```powershell
1..10 | ForEach-Object -Parallel {
	Start-Sleep 1
}
```
{% endraw %}

## Acceso a APIs REST

* PowerShell es ideal para automatizar APIs
* Soporta JSON de forma nativa

{% raw %}
```powershell
Invoke-RestMethod -Uri https://api.github.com
```
{% endraw %}

## Seguridad y hardening en PowerShell

* Firmado de scripts
* Restricción de ejecución
* Control de credenciales

### Firmado de scripts

{% raw %}
```powershell
Set-AuthenticodeSignature script.ps1 $cert
```
{% endraw %}

## Gestión segura de credenciales

* Evitar credenciales en texto plano
* Uso de SecureString y Credential Objects

{% raw %}
```powershell
$cred = Get-Credential
```
{% endraw %}

## PowerShell y CI/CD

* Integración directa con pipelines

* Uso frecuente en:

  * GitHub Actions
  * Azure DevOps
  * GitLab CI

* Casos de uso:

  * Build
  * Test
  * Deploy
  * Validaciones de infraestructura

## PowerShell Desired State Configuration (DSC)

* Declarar el estado deseado de un sistema
* Automatiza configuración y cumplimiento
* Casos comunes:

  * Servicios
  * Features
  * Configuración de sistema

## PowerShell y contenedores

* Administración de Docker desde PowerShell
* Automatización de imágenes y contenedores
* Uso frecuente en entornos híbridos Windows/Linux

## Logging avanzado

* Separar niveles de log:

  * Info
  * Warning
  * Error
* Escritura estructurada:

  * JSON
  * CSV
  * Event Viewer

{% raw %}
```powershell
Write-EventLog -LogName Application -Source PowerShell -EntryType Error -Message "Error crítico"
```
{% endraw %}

## Testing con Pester

* Framework de testing para PowerShell
* Permite:

  * Tests unitarios
  * Validación de scripts
  * Control de regresiones

{% raw %}
```powershell
Describe "Test básico" {
	It "Debe ser verdadero" {
		$true | Should -BeTrue
	}
}
```
{% endraw %}

## Gestión de versiones y compatibilidad

* Detección de versión activa

{% raw %}
```powershell
$PSVersionTable
```
{% endraw %}

* Scripts compatibles:

  * Windows PowerShell 5.1
  * PowerShell 7+

## PowerShell como lenguaje de propósito general

* No solo administración:

  * Automatización
  * Integración
  * Procesamiento de datos
  * Orquestación de sistemas
* Especialmente potente en entornos híbridos Windows/Linux

## Buenas prácticas avanzadas

* Un script = una responsabilidad clara
* Uso de módulos propios
* Versionado de scripts
* Documentación integrada
* Revisión de código
* Separación lógica (core, helpers, config)
