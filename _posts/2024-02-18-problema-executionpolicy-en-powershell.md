---
date: 2024-02-18 18:02
title: Problema ExecutionPolicy en PowerShell
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: Sistemas
tags:
  - Windows
  - powershell
---
# Problema ExecutionPolicy en PowerShell

## Descripción general
El error o bloqueo relacionado con **ExecutionPolicy** ocurre cuando PowerShell impide la ejecución de scripts por motivos de seguridad.  
Esto es común al intentar ejecutar scripts locales (`.ps1`) descargados de Internet o creados manualmente.

PowerShell aplica políticas de ejecución para:
- Prevenir la ejecución accidental de código malicioso
- Controlar el origen y firma de los scripts
- Restringir comportamientos no deseados en entornos corporativos

Este problema suele aparecer al trabajar con:
- Automatización
- Scripts de instalación
- Herramientas de desarrollo
- Configuraciones locales de Windows

Relacionado directamente con: [powershell](/sistemas/powershell/)

## Causas comunes
- Política de ejecución establecida como `Restricted`
- Scripts descargados desde Internet marcados como no confiables
- Uso de PowerShell sin privilegios adecuados
- Entornos donde la política está controlada por el sistema o dominio

## Solución recomendada (usuario actual)

### Cambiar la ExecutionPolicy
Esta solución modifica la política **solo para el usuario actual**, evitando impactos a nivel global del sistema.

~~~powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
~~~

## Explicación del comando
- `Set-ExecutionPolicy`  
	Cambia la política de ejecución de PowerShell

- `RemoteSigned`  
	Permite:
	- Scripts locales sin firmar
	- Scripts descargados solo si están firmados por un editor confiable

- `-Scope CurrentUser`  
	Aplica el cambio únicamente al usuario actual  
	No requiere modificar políticas del sistema completo

## Otras ExecutionPolicy relevantes
- `Restricted`  
	No permite ejecutar ningún script

- `AllSigned`  
	Todos los scripts deben estar firmados

- `Unrestricted`  
	Permite todos los scripts (menos seguro)

- `Bypass`  
	Ignora completamente las restricciones (usar solo para pruebas controladas)

## Verificar la política actual
~~~powershell
Get-ExecutionPolicy -List
~~~

## Consideraciones de seguridad
- No usar `Unrestricted` o `Bypass` en entornos de producción
- Preferir `RemoteSigned` para desarrollo local
- Verificar el origen de los scripts antes de ejecutarlos
- En entornos corporativos, la política puede estar forzada por Group Policy

## Contextos donde aparece el problema
- Instalación de herramientas vía scripts
- Uso de frameworks o CLIs
- Ejecución de scripts de automatización
- Configuración inicial de entornos de desarrollo

# Recursos actualizados (2025-2026) sobre **PowerShell ExecutionPolicy**

## Documentación oficial y guías recientes

### 💻 Conceptos y detalles del cmdlet `Set-ExecutionPolicy`
- Explicación moderna de **`Set-ExecutionPolicy`** con sintaxis, scopes y ejemplos aplicables a PowerShell en Windows (incluyendo PS7).  
	Utiliza ejemplos reales de cómo aplicar distintos valores y scopes de política.  
	[Set-ExecutionPolicy - J-Docs](https://jdocs.mdbgo.io/PowerShell/Microsoft.PowerShell.Security/Set-ExecutionPolicy/)

### 📊 Webinar / mejores prácticas de seguridad (2024-2025)
- PDF sobre **seguridad de PowerShell y Execution Policy** con definiciones de cada nivel (`Restricted`, `RemoteSigned`, `AllSigned`, `Unrestricted`, `Bypass`, `Undefined`) y su recomendación para entornos corporativos.  
	También menciona que la política puede sobrescribirse por GPO.  
	[Securing PowerShell in the enterprise](https://www.cyber.gov.au/sites/default/files/2025-03/Securing%20PowerShell%20in%20the%20enterprise%20%28October%202021%29.pdf)

### 🛠 Recursos prácticos para cambiar ExecutionPolicy (Publicado dic 2025)
- Guía paso a paso para:
	- ver la política actual (`Get-ExecutionPolicy`)
	- cambiar la política para el usuario actual o la máquina
	- usar `Unblock-File` si solo necesitas ejecutar un script sin cambiar la política global  
	[Change PowerShell Execution Policy | Dahln Farnes](https://dahln.com/change-powershell-execution-policy.html)

## Comandos básicos y útiles (2025-2026)

### 🎯 Consultar y entender la política actual
{% raw %}
```powershell
Get-ExecutionPolicy
Get-ExecutionPolicy -List
```
{% endraw %}`

- Muestra la política efectiva actual y por scope.
- En Windows cliente suele venir por defecto en `Restricted`; en Windows Server suele estar en `RemoteSigned` o superior.  
    [PowerShell Execution Policies: How They Control Script Execution](https://serverspace.io/support/help/about-execution-policies-powershell/)

### 🧰 Cambiar la política local o por usuario

{% raw %}
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
{% endraw %}

- Permite ejecutar scripts propios localmente y requiere firma para scripts descargados de Internet.
    [Change PowerShell Execution Policy | Dahln Farnes](https://dahln.com/change-powershell-execution-policy.html)

### 🔒 Alternativas de scopes para casos especiales

{% raw %}
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```
{% endraw %}

- Cambia la política **solo para la sesión actual**, útil cuando no deseas afectar otros contextos.  
    [Gist – PowerShell Execution Policy Scopes](https://gist.github.com/sergiomas/3abdfe5d449392a7d27faf08dbe7421f)

## Seguridad y consideraciones 2025-2026

### 🔐 ¿Qué significa realmente ExecutionPolicy?

- Es **una barrera leve** para prevenir ejecuciones accidentales, no un mecanismo de seguridad completo.
- No impide que un usuario con privilegios ejecute scripts si decide hacerlo explícitamente.
- Para seguridad real se recomiendan controles como **AppLocker**, **Device Guard** o políticas de firma obligatoria.  
    [Securing PowerShell in the enterprise](https://www.cyber.gov.au/sites/default/files/2025-03/Securing%20PowerShell%20in%20the%20enterprise%20%28October%202021%29.pdf)

### ⚠️ Riesgos al modificar ExecutionPolicy

- `Unrestricted` y `Bypass` permiten ejecución sin advertencias, útiles para pruebas pero con menor protección.  
    [PowerShell dice que “la ejecución de scripts está deshabilitada en este sistema”](https://stackovercoder.es/programming/4037939/powershell-says-execution-of-scripts-is-disabled-on-this-system)
- `RemoteSigned` ofrece un equilibrio sólido entre usabilidad y seguridad para desarrollo moderno.  
    [PowerShell Execution Policies](https://serverspace.io/support/help/about-execution-policies-powershell/)

## Casos prácticos observados en 2025

### 🧩 Problemas con scripts comunes

- Tras actualizar herramientas (por ejemplo Node.js), scripts como `npm.ps1` pueden bloquearse por ExecutionPolicy.  
    Solución típica:

{% raw %}
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
{% endraw %}

- Caso reportado por desarrolladores en 2025.  
    [PowerShell npm.ps1 script blocked after updating Node.js](https://www.reddit.com/r/node/comments/1lm0bsx)

### 🧠 Administración avanzada

- En entornos con políticas estrictas como **`AllSigned`**, algunos módulos legítimos pueden no cargarse sin firma.
- Opciones habituales:
    - usar `Bypass` en `Scope Process` para tareas puntuales
    - firmar módulos internos para producción  
        [Execution Policy Block Import Of New Modules](https://www.reddit.com/r/PowerShell/comments/1pdy383/execution_policy_block_import_of_new_modules/)

## Enlaces de referencia y aprendizaje

### 🧾 Lecturas oficiales y prácticas

- [Set-ExecutionPolicy - J-Docs](https://jdocs.mdbgo.io/PowerShell/Microsoft.PowerShell.Security/Set-ExecutionPolicy/)
- [Change PowerShell Execution Policy | Dahln Farnes](https://dahln.com/change-powershell-execution-policy.html)
- [PowerShell Execution Policies: How They Control Script Execution](https://serverspace.io/support/help/about-execution-policies-powershell/)

## Recursos comunitarios útiles

### 📌 Gist práctico con comandos

- Ejemplos por scope (`Process`, `CurrentUser`, `LocalMachine`) y recomendaciones de uso.  
    [Gist – PowerShell Execution Policy](https://gist.github.com/sergiomas/3abdfe5d449392a7d27faf08dbe7421f)

## Comandos de referencia rápida

{% raw %}
```powershell
Get-ExecutionPolicy -List
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```
{% endraw %}