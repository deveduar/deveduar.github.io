---
date: 2025-12-20 18:20
title: Linux Filesystem
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: Linux
tags:
  - Linux
---
# Linux Filesystem


[Linux Filesystem Cheat Sheet PDF](39.1_Section_3_Cheat_Sheet.pdf)

## Estructura del sistema de archivos Linux

Referencias:  
- [File System Cheat Sheet PDF](2.1_File_System_Cheat_Sheet.pdf)  
- [Understanding Unix/Linux File System - Part I](https://www.cyberciti.biz/tips/understanding-unixlinux-file-system-part-i.html)

### Comandos básicos de navegación
- `pwd` — Mostrar directorio actual  
- `ls` — Listar archivos y carpetas  
	- `ls -F` — Añade indicadores a los nombres de archivos (`/` para directorios, `*` para ejecutables)  
	- `ls -l` — Listado largo  
	- `ls -lh` — Listado largo, tamaños legibles  
	- `ls -a` — Mostrar archivos ocultos  
- `cd [ruta]` — Cambiar de directorio  
	- `cd /` — Ir a raíz  
	- `cd .` — Directorio actual  
	- `cd ..` — Directorio padre  
	- `Tab` — Autocompletado de rutas  
- Directorios ocultos: `.` y `..`  

### Archivos y extensiones
- `file tux.png` — Detecta tipo de archivo por cabecera  

## Wildcards (comodines)
- Permiten trabajar con múltiples archivos o carpetas a la vez  
- Ejemplos:
{% raw %}
```bash
ls *           # Todos los archivos
ls D*          # Archivos que empiezan con D
ls *.txt       # Archivos que terminan en .txt
ls ?.txt       # Archivos de un solo caracter seguido de .txt
ls ?? .pdf     # Archivos con dos caracteres antes de .pdf
```
{% endraw %}`

* Corchetes para rangos específicos:

{% raw %}
```bash
ls file[0-9].txt
ls file[A-Z].txt
ls file[0-9][A-Z][a-z].txt
ls file[0-9-abc].txt
```
{% endraw %}

Referencias:

* [Wildcards](https://tldp.org/LDP/GNU-Linux-Tools-Summary/html/x11655.htm)
* [How to use wildcards](http://www.linfo.org/wildcard.html)

## Crear archivos y directorios

* `touch file1` — Crear archivo vacío
* `echo "Hello" > hello.txt` — Crear archivo con contenido
* `mkdir folder` — Crear directorio
* `mkdir -p path/to/folder` — Crear ruta completa de directorios
* Uso de espacios: `mkdir "happy birthday"` (mejor usar `_`)
* Crear múltiples directorios:

{% raw %}
```bash
mkdir proyect
mkdir {jan,feb,mar,apr,may,jun,aug,sep,oct,nov,dec}_{2017..2022}
```
{% endraw %}

* Crear múltiples archivos en carpetas con brace expansion:

{% raw %}
```bash
cd proyect
touch {jan,feb,mar,apr,may,jun,aug,sep,oct,nov,dec}_{2017..2022}/file{1..100}
```
{% endraw %}

* Brace expansion en otros comandos:

{% raw %}
```bash
touch file{A,B,C}.txt
touch file{A..C}.txt
touch file{F..V}.txt
```
{% endraw %}

## Eliminar archivos

* `rm file.txt` — Eliminar archivo
* Con comodines:

{% raw %}
```bash
rm *.txt         # Todos los archivos .txt
rm *2*           # Archivos que contengan "2"
rm *[2,3]*       # Archivos que contengan "2" o "3"
```
{% endraw %}

* Eliminar múltiples archivos:

{% raw %}
```bash
rm file1.txt file2.png file3.jpg
```
{% endraw %}

## Eliminar directorios

* `rmdir folder` — Eliminar carpeta vacía
* `rm -r folder` — Eliminar carpeta y contenido recursivamente
* Ejemplo:

{% raw %}
```bash
mkdir delfolder/deleteme{1,2,3}
touch delfolder/deleteme{1,2,3}/file{1,2,3}
rm -r delfolder
```
{% endraw %}

## Resumen

* La estructura de Linux es jerárquica, case-sensitive y permite el uso de comodines y brace expansions para manejar grandes cantidades de archivos y directorios de manera eficiente.