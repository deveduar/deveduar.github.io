---
date: 2024-02-18 18:02
title: Crear varias carpetas con powershell
keywords:
source:
status: 📌
Parent: "[[Area-Sistemas]]"
public_note: true
category: powershell
tags:
  - Windows
---
# Crear varias carpetas con PowerShell

- [powershell](/sistemas/powershell/)

## Descripción general
Este apunte documenta una forma simple y reutilizable de crear múltiples carpetas de una sola vez usando PowerShell.  
Es útil en la inicialización de proyectos web, scripts de automatización, plantillas de trabajo o estructuras base repetitivas.

El enfoque se basa en:
- Definir una lista de nombres de carpetas.
- Iterar sobre esa lista.
- Crear cada carpeta de manera automática en el directorio actual.

## Casos de uso comunes
- Estructura inicial de proyectos web (CSS, JS, imágenes, includes, etc.).
- Automatización de entornos de desarrollo.
- Preparación rápida de carpetas administrativas o internas.
- Scripts reutilizables para onboarding de proyectos.

## Consideraciones importantes
- El script crea las carpetas en el **directorio actual** desde donde se ejecuta PowerShell.
- Si una carpeta ya existe, PowerShell mostrará un error a menos que se gestione explícitamente.
- Se puede adaptar fácilmente para:
	- Crear carpetas anidadas.
	- Cambiar la ruta base.
	- Validar existencia previa.

## Código PowerShell: creación de carpetas

{% raw %}
```c
// Crear varias carpetas powershell
$folderNames = "adminpages", "classes", "css", "js", "images", "includes"

foreach ($folderName in $folderNames) {
	New-Item -ItemType Directory -Name $folderName
}
```
{% endraw %}`

## Posibles extensiones

- Añadir comprobación con `Test-Path` para evitar errores.
- Usar rutas absolutas en lugar del directorio actual.
- Convertirlo en una función reutilizable.
- Leer los nombres desde un archivo o entrada dinámica.
- Integrarlo en scripts de despliegue o setup automático.