---
date: 2025-10-26 13:56
title: search tool grep
tags:
  - sistemas
  - search
  - search_tool
  - Productividad
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
cssclasses:
  - hide-embedded-header1
categories:
  - Sistemas
public_note: "true"
category: Sistemas
---
# search tool grep
`$= dv.current().file.tags.join(" ")`

## Contexto y propósito
`grep` y herramientas modernas basadas en él permiten realizar búsquedas de texto rápidas, expresivas y escalables dentro de sistemas de archivos, repositorios de código y bases de conocimiento como [Sistemas](/uncategorized/sistemas/). Son clave para:
- Localizar configuraciones, logs y referencias técnicas.
- Auditar código y documentación.
- Potenciar flujos de trabajo de análisis, debugging y documentación en Obsidian.

## Relación con Obsidian y Dataview
- Permite obtener dinámicamente los tags del archivo actual.
- Útil para:
	- Construir consultas automáticas.
	- Integrar búsquedas externas (grep/ripgrep) basadas en metadatos.
	- Generar pipelines donde los tags de Obsidian actúan como filtros semánticos.

## grep — fundamentos
- Herramienta clásica de búsqueda por patrones (regex) en texto plano.
- Características principales:
	- Búsqueda línea a línea.
	- Soporte de expresiones regulares POSIX.
	- Uso eficiente en scripts y automatizaciones.
- Limitaciones:
	- Más lenta en grandes repositorios.
	- Manejo básico de binarios.
	- Menor ergonomía comparado con herramientas modernas.

## Opciones clave de grep
- `-r` búsqueda recursiva en directorios.
- `-i` ignora mayúsculas/minúsculas.
- `-n` muestra número de línea.
- `-l` lista solo archivos con coincidencias.
- `-v` invierte la coincidencia (exclusión).
- `-E` habilita regex extendidas.

## ripgrep (rg) — evolución moderna
BurntSushiripgrep ripgrep recursively searches directories
- Reemplazo moderno y optimizado de grep.
- Ventajas principales:
	- Extremadamente rápido (usa Rust).
	- Respeta `.gitignore` por defecto.
	- Manejo eficiente de binarios y grandes volúmenes.
	- Mejor soporte de Unicode.
- Ideal para:
	- Repositorios grandes.
	- Monorepos.
	- Integración con editores y sistemas de notas.

## Comparación grep vs ripgrep
- Rendimiento:
	- grep: adecuado para casos simples.
	- ripgrep: superior en cualquier escala.
- Experiencia de uso:
	- grep: más flags manuales.
	- ripgrep: defaults inteligentes.
- Integración:
	- ripgrep se integra mejor con editores, IDEs y herramientas modernas.

## Mejora de búsqueda en [Sistemas](/uncategorized/sistemas/)
- Estrategias:
	- Usar tags de Obsidian como filtros conceptuales.
	- Mapear carpetas de [Sistemas](/uncategorized/sistemas/) a rutas de búsqueda.
	- Automatizar búsquedas recurrentes con scripts.
- Ejemplos de uso:
	- Localizar patrones arquitectónicos.
	- Detectar configuraciones duplicadas.
	- Auditar referencias cruzadas entre notas técnicas.

## Uso combinado con herramientas
- grep / ripgrep + shell:
	- Pipes con `sed`, `awk`, `xargs`.
	- Exportación de resultados a markdown.
- grep / ripgrep + Obsidian:
	- Generar enlaces automáticos.
	- Crear índices de conocimiento.
	- Sincronizar resultados con Dataview.

## Documentación y recursos
- Manual oficial grep:
	- [GNU Grep Manual](https://www.gnu.org/software/grep/manual/)
- ripgrep:
	- [ripgrep GitHub](https://github.com/BurntSushi/ripgrep)
	- [ripgrep Guide](https://github.com/BurntSushi/ripgrep/blob/master/GUIDE.md)

## Casos de uso avanzados
- Búsqueda semántica aproximada combinando:
	- Tags.
	- Convenciones de nombres.
	- Expresiones regulares estructuradas.
- Indexación previa para acelerar búsquedas frecuentes.
- Integración con tareas automatizadas de documentación y auditoría técnica.
# grep — Cheatsheet de comandos

## Búsqueda básica
### Buscar una palabra en un archivo
{% raw %}
```bash
grep "error" archivo.log
```
{% endraw %}`

### Buscar ignorando mayúsculas y minúsculas

{% raw %}
```bash
grep -i "error" archivo.log
```
{% endraw %}

## Búsqueda recursiva

### Buscar en todos los archivos de un directorio

{% raw %}
```bash
grep -r "TODO" .
```
{% endraw %}

### Buscar recursivamente mostrando número de línea

{% raw %}
```bash
grep -rn "config" .
```
{% endraw %}

## Información del resultado

### Mostrar solo nombres de archivos con coincidencias

{% raw %}
```bash
grep -rl "password" .
```
{% endraw %}

### Mostrar líneas que NO coinciden

{% raw %}
```bash
grep -v "debug" app.log
```
{% endraw %}

### Contar coincidencias

{% raw %}
```bash
grep -c "WARN" app.log
```
{% endraw %}

## Expresiones regulares

### Regex extendidas

{% raw %}
```bash
grep -E "error|fail|fatal" system.log
```
{% endraw %}

### Coincidencia al inicio de línea

{% raw %}
```bash
grep "^ERROR" system.log
```
{% endraw %}

### Coincidencia al final de línea

{% raw %}
```bash
grep "completed$" system.log
```
{% endraw %}

### Coincidencia de palabras completas

{% raw %}
```bash
grep -w "root" /etc/passwd
```
{% endraw %}

## Contexto de líneas

### Mostrar líneas antes y después

{% raw %}
```bash
grep -C 3 "exception" app.log
```
{% endraw %}

### Mostrar solo líneas anteriores

{% raw %}
```bash
grep -B 2 "timeout" app.log
```
{% endraw %}

### Mostrar solo líneas posteriores

{% raw %}
```bash
grep -A 4 "startup" app.log
```
{% endraw %}

## Archivos y formatos

### Buscar solo en archivos con extensión específica

{% raw %}
```bash
grep -r "SELECT" --include="*.sql" .
```
{% endraw %}

### Excluir extensiones

{% raw %}
```bash
grep -r "token" --exclude="*.min.js" .
```
{% endraw %}

### Excluir directorios

{% raw %}
```bash
grep -r "secret" --exclude-dir=node_modules .
```
{% endraw %}

## Uso con pipes

### Filtrar salida de otro comando

{% raw %}
```bash
ps aux | grep "python"
```
{% endraw %}

### Excluir el propio proceso grep

{% raw %}
```bash
ps aux | grep "nginx" | grep -v grep
```
{% endraw %}

## Logs y sistemas

### Buscar múltiples patrones desde un archivo

{% raw %}
```bash
grep -f patrones.txt app.log
```
{% endraw %}

### Seguimiento de logs (combinado con tail)

{% raw %}
```bash
tail -f app.log | grep "ERROR"
```
{% endraw %}

## Rendimiento

### Limitar número de coincidencias

{% raw %}
```bash
grep -m 5 "failure" system.log
```
{% endraw %}

### Forzar tratamiento de binarios como texto

{% raw %}
```bash
grep -a "version" archivo.bin
```
{% endraw %}

## Integración con [Sistemas](/uncategorized/sistemas/)

### Auditar configuraciones sensibles

{% raw %}
```bash
grep -r "password" /etc
```
{% endraw %}

### Buscar referencias cruzadas en notas

{% raw %}
```bash
grep -r "\[\[.*Sistemas.*\]\]" .
```
{% endraw %}

## Alternativas modernas

### Equivalente rápido usando ripgrep

{% raw %}
```bash
rg "error"
```
{% endraw %}

