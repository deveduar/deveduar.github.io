---
date: 2024-02-04 19:03
title: Linux en arch con virtualbox
status: 🌟
Parent: "[[Area-Sistemas]]"
keywords:
source:
category: uncategorized
tags:
  - Linux
---
# Linux en Arch con VirtualBox

## Recursos y Guías
- [How to Install Arch Linux on VirtualBox on Windows 10 | Beginners Guide | 2021 Arch Linux Tutorial](https://www.youtube.com/watch?v=LaJ1yl6NckI&ab_channel=SavvyNik) — Guía completa para instalar Arch Linux en VirtualBox desde Windows 10, paso a paso para principiantes.

## Configuración de Fuente en Consola
- Para cambiar la fuente de la consola virtual, Arch Linux permite usar `setfont`:
	setfont ter-232b.psf.gz  
	setfont ter-224b.psf.gz

- Listar todas las fuentes de consola disponibles:
	ls /usr/share/kbd/consolefonts

## Configuración del Teclado
- Para cambiar la distribución del teclado, se utilizan los keymaps de Linux:
	loadkeys /usr/share/kbd/keymaps/i386/qwerty/*.map.gz

- Arch Linux incluye múltiples mapas de teclado por arquitectura y distribución. Ejemplos:
	- `i386/qwerty/` — teclados QWERTY estándar  
	- `i386/azerty/` — teclados AZERTY  
	- `i386/dvorak/` — distribución Dvorak

## Comandos útiles durante la instalación
- `ls` — Listar directorios y archivos, útil para verificar rutas y fuentes.  
- `setfont` — Cambiar la fuente de la consola durante instalación o configuración post-boot.  
- `loadkeys` — Aplicar una distribución de teclado temporal sin reiniciar.  

## Consejos de uso en VirtualBox
- Configurar la memoria RAM y CPU adecuadas para Arch Linux (mínimo 2 GB RAM y 2 CPUs recomendados).  
- Habilitar soporte de virtualización en BIOS/UEFI para un rendimiento óptimo.  
- Crear discos duros dinámicos para mayor flexibilidad y no ocupar espacio innecesario.  

## Referencias adicionales
- [Arch Linux Wiki — Console Fonts](https://wiki.archlinux.org/title/Console_fonts)  
- [Arch Linux Wiki — Keyboard Configuration](https://wiki.archlinux.org/title/Keyboard_configuration)  
- [Arch Linux Installation Guide](https://wiki.archlinux.org/title/Installation_guide)
