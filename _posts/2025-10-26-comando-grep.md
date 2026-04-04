---
date: 2025-10-26 13:56
title: comando grep
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: Sistemas
tags:
  - sistemas
  - search
  - search_tool
  - Productividad
---
# grep

- [GitHub - BurntSushi/ripgrep: ripgrep recursively searches directories for a regex pattern while respecting your gitignore · GitHub](https://github.com/BurntSushi/ripgrep) 


## Contexto y propósito
`grep` y herramientas modernas basadas en él permiten realizar búsquedas de texto rápidas, expresivas y escalables dentro de sistemas de archivos, repositorios de código y bases de conocimiento como [Sistemas](/sistemas/sistemas/). Son clave para:
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

## Mejora de búsqueda en [Sistemas](/sistemas/sistemas/)
- Estrategias:
	- Usar tags de Obsidian como filtros conceptuales.
	- Mapear carpetas de [Sistemas](/sistemas/sistemas/) a rutas de búsqueda.
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

## Integración con [Sistemas](/sistemas/sistemas/)

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


# ejemplos de uso ripgrep
## ejemplos basicos

- **Búsqueda básica** (en el directorio actual y subdirectorios):  
    `rg "formatTime"`
- **Limitar a archivos JavaScript y TypeScript**:  
    `rg -tjs -tts "formatTime"`
- **Mostrar solo los nombres de los archivos que contienen la cadena**:  
    `rg -l "formatTime"`
- **Ignorar archivos que coincidan con un patrón** (por ejemplo, excluir archivos minificados):  
    `rg -g '!*.min.js' "formatTime"`
- **Búsqueda insensible a mayúsculas/minúsculas**:  
    `rg -i "formatTime"`
- **Incluir archivos ocultos** (como `.env` o `.gitignore`):  
    `rg --hidden "formatTime"`
- **Usar expresiones regulares** (por defecto ya las soporta):  
    `rg "format(Time|Date)"`
- **Buscar la palabra exacta** (evita coincidencias parciales como `formatTimeNow`):  
    `rg -w "formatTime"`
- **Mostrar contexto** (3 líneas antes y después de cada coincidencia):  
    `rg -C 3 "formatTime"`
- **Buscar en un directorio específico** (por ejemplo, dentro de `src`):  
    `rg "formatTime" src/`
- **Contar el número de coincidencias por archivo**:  
    `rg -c "formatTime"`
- **Búsqueda con límite de profundidad** (solo hasta 2 niveles de subdirectorios):  
    `rg --max-depth 2 "formatTime"`
- **Usar word boundaries con regex** para mayor precisión (similar a `-w`):  
    `rg "\bformatTime\b"`
- **Combinar opciones** (ej. insensible, solo archivos TypeScript, con contexto):  
    `rg -i -tts -C 2 "formatTime"`

## ejemplos para coders

- **Refactorizar: buscar y reemplazar con `xargs` y `sed`**:  
  `rg -l "formatTime" | xargs sed -i 's/formatTime/formatDate/g'`

- **Filtrar por extensiones y excluir patrones en nombre**:  
  `rg -g '*.{js,ts}' -g '!*test*' -g '!*spec*' "function\s+\w+"`

- **Contar ocurrencias por tipo de archivo**:  
  `rg -c "formatTime" -g '*.rs' -g '*.go' -g '*.py'`

- **Reemplazo interactivo con `nvim`**:  
  `rg -l "old_function" | xargs -o nvim +'bufdo %s/old_function/new_function/gc'`

- **Estadísticas de la búsqueda**:  
  `rg --stats "formatTime"`

- **Búsqueda multilínea con `-U`**:  
  `rg -U 'function\s+\w+\s*\([^)]*\)\s*\{[^}]*\}'`

- **Navegación interactiva con `fzf` y `bat`**:  
  `rg --line-number --column "formatTime" | fzf --delimiter=':' --preview='bat {1} --highlight-line {2}'`

- **Vigilar cambios con `entr`**:  
  `ls *.js | entr -c rg "console.log" /_`

- **Buscar solo archivos versionados en git**:  
  `git ls-files | xargs rg "pattern"`

- **Primera coincidencia por archivo con número de línea**:  
  `rg -m1 -n "pattern"`

- **Contexto ampliado con formato legible**:  
  `rg -C 5 --heading --line-number "TODO|FIXME"`

- **Buscar usando un archivo de patrones**:  
  `rg -f patrones.txt`

- **Forzar color en pipes**:  
  `rg --color=always "pattern" | less -R`

- **Buscar TODOs con urgencia**:  
  `rg -i 'TODO|FIXME|XXX|HACK' -C 2 --color=always | grep -E 'FIXME|XXX' --color=always`

- **Buscar y exportar a CSV**:  
  `rg --json "pattern" | jq -r 'select(.type=="match") | [.data.path.text, .data.line_number, .data.lines.text] | @csv' > resultados.csv`

- **Filtrar por fecha con `find` y luego buscar**:  
  `find . -name '*.py' -mtime -7 | xargs rg "TODO"`

- **Comparar dos búsquedas**:  
  `rg -c "pattern1" && rg -c "pattern2"`

- **Mostrar solo el contexto con números de línea**:  
  `rg -C 2 --no-heading --with-filename "pattern" | cut -d: -f2-`

- **Usar lookarounds (PCRE) para excluir comentarios**:  
  `rg -P '(?<!//\s*)formatTime'`

- **Contar líneas totales coincidentes**:  
  `rg "pattern" | wc -l`

## ejemplos para hackers

- **Buscar en archivos ignorados por `.gitignore`**:  
  `rg --no-ignore --hidden -g '!node_modules' "password"`

- **Salida en JSON para procesar con `jq`**:  
  `rg --json "formatTime" | jq 'select(.type == "match") | .data.path.text'`

- **Detectar cadenas base64 largas (posibles credenciales)**:  
  `rg '[A-Za-z0-9+/]{40,}' --no-filename | head`

- **Extraer direcciones IP únicas**:  
  `rg -o '\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b' --no-filename | sort -u`

- **Ignorar binarios y listar solo archivos con coincidencias**:  
  `rg -I -l "secret"`

- **Profundidad limitada e incluir ocultos**:  
  `rg --max-depth 3 --hidden "API_KEY"`

- **Buscar posibles tokens JWT**:  
  `rg 'eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+'`

- **Buscar en logs grandes solo coincidencias**:  
  `rg -No "error.*" /var/log/ --max-filesize=10M`

- **Buscar dentro de archivos comprimidos**:  
  `unzip -p archive.zip | rg "pattern"`

- **Patrones de inclusión/exclusión complejos**:  
  `rg -g '*.log' -g '!old/*' "error"`

- **Buscar en historial de shell**:  
  `rg "git" ~/.zsh_history`

- **Detección de secretos (patrones combinados)**:  
  `rg -i '(api[_-]?key|secret|token|password|credential|auth).{0,20}["'\''][A-Za-z0-9+/]{20,}'`

- **Buscar en archivos con permisos específicos (pentesting)**:  
  `find . -perm 755 -type f | xargs rg "#!/bin/bash"`

- **Eliminar archivos que contengan una palabra (precaución)**:  
  `rg -l "malware" | xargs rm -v`

- **Buscar correos electrónicos**:  
  `rg -o '\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b'`

- **Buscar URLs**:  
  `rg -o 'https?://[^\s<>"{}|\\^`\[\]]+'`

- **Buscar números de tarjetas de crédito (simplificado)**:  
  `rg '\b[0-9]{4}[- ]?[0-9]{4}[- ]?[0-9]{4}[- ]?[0-9]{4}\b'`

- **Buscar llaves de API en código fuente**:  
  `rg -i 'key["\s:=]+[A-Za-z0-9_\-]{20,}'`

- **Buscar archivos con permisos SUID**:  
  `find / -perm -4000 2>/dev/null | xargs rg -l "pattern" 2>/dev/null`

- **Buscar contraseñas en archivos de configuración**:  
  `rg -i --hidden 'password\s*[=:]\s*\S+' /etc/`

- **Enumerar archivos con información sensible**:  
  `rg --files-with-matches --hidden --no-ignore -g '*.{conf,config,env,yml,yaml,json,xml,ini}' "api_key|secret|token|password"`