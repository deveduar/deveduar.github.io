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
```bash
grep "error" archivo.log
````

### Buscar ignorando mayúsculas y minúsculas

```bash
grep -i "error" archivo.log
```

## Búsqueda recursiva

### Buscar en todos los archivos de un directorio

```bash
grep -r "TODO" .
```

### Buscar recursivamente mostrando número de línea

```bash
grep -rn "config" .
```

## Información del resultado

### Mostrar solo nombres de archivos con coincidencias

```bash
grep -rl "password" .
```

### Mostrar líneas que NO coinciden

```bash
grep -v "debug" app.log
```

### Contar coincidencias

```bash
grep -c "WARN" app.log
```

## Expresiones regulares

### Regex extendidas

```bash
grep -E "error|fail|fatal" system.log
```

### Coincidencia al inicio de línea

```bash
grep "^ERROR" system.log
```

### Coincidencia al final de línea

```bash
grep "completed$" system.log
```

### Coincidencia de palabras completas

```bash
grep -w "root" /etc/passwd
```

## Contexto de líneas

### Mostrar líneas antes y después

```bash
grep -C 3 "exception" app.log
```

### Mostrar solo líneas anteriores

```bash
grep -B 2 "timeout" app.log
```

### Mostrar solo líneas posteriores

```bash
grep -A 4 "startup" app.log
```

## Archivos y formatos

### Buscar solo en archivos con extensión específica

```bash
grep -r "SELECT" --include="*.sql" .
```

### Excluir extensiones

```bash
grep -r "token" --exclude="*.min.js" .
```

### Excluir directorios

```bash
grep -r "secret" --exclude-dir=node_modules .
```

## Uso con pipes

### Filtrar salida de otro comando

```bash
ps aux | grep "python"
```

### Excluir el propio proceso grep

```bash
ps aux | grep "nginx" | grep -v grep
```

## Logs y sistemas

### Buscar múltiples patrones desde un archivo

```bash
grep -f patrones.txt app.log
```

### Seguimiento de logs (combinado con tail)

```bash
tail -f app.log | grep "ERROR"
```

## Rendimiento

### Limitar número de coincidencias

```bash
grep -m 5 "failure" system.log
```

### Forzar tratamiento de binarios como texto

```bash
grep -a "version" archivo.bin
```

## Integración con [Sistemas](/uncategorized/sistemas/)

### Auditar configuraciones sensibles

```bash
grep -r "password" /etc
```

### Buscar referencias cruzadas en notas

```bash
grep -r "\[\[.*Sistemas.*\]\]" .
```

## Alternativas modernas

### Equivalente rápido usando ripgrep

```bash
rg "error"
```

