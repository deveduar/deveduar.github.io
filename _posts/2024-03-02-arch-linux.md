---
date: 2024-03-02 01:11
title: arch linux
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: Linux
tags:
  - Linux
  - Sistemas
---
# Arch Linux
## Recursos y Enlaces
- [Linux](/sistemas/linux/)
- [Linux personalizacion de entorno](/linux/linux-personalizacion-de-entorno/)
- systemctl
- [Arch Wiki](https://wiki.archlinux.org)
- [Guía de instalación oficial](https://wiki.archlinux.org/title/Installation_guide)

## Introducción a Arch Linux
Arch Linux es una distribución de Linux ligera, flexible y orientada a usuarios avanzados que buscan un control total sobre su sistema operativo. Se caracteriza por:
- Filosofía KISS (Keep It Simple, Stupid): busca la simplicidad y transparencia en su diseño.
- Rolling release: el sistema se actualiza continuamente, evitando la necesidad de reinstalaciones mayores.
- Gestión de paquetes mediante Pacman y AUR (Arch User Repository) para software adicional.

## Instalación
- Arch Linux no ofrece un instalador gráfico por defecto; la instalación es manual y permite personalización total.
- La documentación oficial y la Arch Wiki son recursos fundamentales para guiar el proceso de instalación.
- Pasos generales:
	1. Preparar medio de instalación (USB/DVD).
	2. Configurar red y particiones.
	3. Montar sistemas de archivos.
	4. Instalar base del sistema.
	5. Configurar sistema y gestor de arranque.

## Gestión de Paquetes
- **Pacman**: gestor de paquetes oficial.
	- Instalación: `sudo pacman -S paquete`
	- Actualización del sistema: `sudo pacman -Syu`
	- Búsqueda de paquetes: `pacman -Ss palabra_clave`
	- Eliminación de paquetes: `sudo pacman -R paquete`
- **AUR (Arch User Repository)**: repositorio comunitario para software no oficial.
	- Requiere herramientas como `yay` o `paru` para gestionar paquetes.
	- Ejemplo: `yay -S paquete`

## Personalización de Entorno
- Arch permite personalización completa del entorno de escritorio y shell.
- Entornos gráficos populares:
	- GNOME, KDE Plasma, XFCE, i3, Sway.
- Gestores de ventanas ligeros y tiling para usuarios avanzados.
- Personalización de terminal:
	- Zsh + Oh-My-Zsh o Bash avanzado.
	- Temas y prompt personalizados.
	- Alias y funciones personalizadas.

## Seguridad y Mantenimiento
- Mantener el sistema actualizado: `sudo pacman -Syu`
- Auditorías de seguridad periódicas.
- Configuración de firewall (ej. `ufw` o `iptables`).
- Copias de seguridad y snapshots con `rsync` o BTRFS/ZFS.

## Comandos útiles
### Pacman
{% raw %}
```bash
sudo pacman -Syu           # Actualizar sistema
sudo pacman -S paquete     # Instalar paquete
sudo pacman -R paquete     # Eliminar paquete
pacman -Ss palabra_clave   # Buscar paquete
```
{% endraw %}`

### AUR con Yay

{% raw %}
```bash
yay -S paquete             # Instalar paquete desde AUR
yay -Syu                   # Actualizar sistema incluyendo AUR
yay -R paquete             # Eliminar paquete desde AUR
```
{% endraw %}

### Gestión de servicios

{% raw %}
```bash
sudo systemctl start servicio       # Iniciar servicio
sudo systemctl enable servicio      # Activar servicio al arranque
sudo systemctl status servicio      # Ver estado de servicio
sudo systemctl stop servicio        # Detener servicio
```
{% endraw %}



# Configuración de Arch Linux en VirtualBox

## Entornos y Window Managers
- **Window Manager**: gestión de ventanas ligera y personalizable.
	- **BSPWM**: gestor de ventanas tipo tiling, altamente configurable.
	- **i3**: tiling window manager popular, fácil de configurar.
	- **Qtile**: gestor de ventanas en Python, permite scripting avanzado.
- **Launcher**: herramientas para lanzar aplicaciones rápidamente.
	- **Rofi**: lanzador y switcher de ventanas altamente configurable.
- **Paneles y barras**
	- **Polybar**: barra de estado personalizable, compatible con varios WMs.
- **Notificaciones**: sistema de notificaciones para alertas y eventos del sistema.

## Terminales
- **Alacritty**: terminal GPU-accelerated, rápida y ligera.
- **Kitty**: terminal con soporte para gráficos y multiplexing.

## Personalización y estética
- **Neofetch**: muestra información del sistema en la terminal.
- **Feh**: gestor de fondos de pantalla.
- **Barra de navegación**: configuraciones personalizadas en Polybar o el WM.
- **Gestor de archivos**
	- **lf**: gestor de archivos basado en terminal, minimalista.
	- **Tunner**: gestor de archivos en terminal con navegación rápida.

## Gestión de paquetes
### Pacman
- Configuración en `pacman.conf`:
	- Mostrar **progressbar** en instalaciones.
- Actualización de mirrors:
	- Crear backup de la lista actual.
	- Instalar **Reflector** para actualizar repositorios automáticamente.
- Actualizar Pacman y sistema:
{% raw %}
```bash
sudo pacman -Syu
```
{% endraw %}`

### AUR y Flatpak

- **Yay**: herramienta para instalar paquetes de AUR.
- **Flatpak**: gestión de aplicaciones sandbox.
- Ejemplos:

{% raw %}
```bash
yay -S paquete
flatpak install nombre_paquete
```
{% endraw %}

## Software adicional

- **Redes y conectividad**  
     - Bluetooth: instalar y configurar según necesidad.
- **Compresión y herramientas**  
     - `p7zip`, `unrar`, `rsync`, `aria2`, `ntfs-3g`, `fuse-exfat`, `exfat-utils`, `jasper`.
- **Java**: instalar paquetes necesarios para desarrollo o ejecución de aplicaciones.
- **Firefox, VLC, Thunderbird**: navegadores, multimedia y correo.

## Optimización y hardware

- Ajuste de CPU:  
     - `lscpu` para información de CPU.  
     - `intel-ucode` para microcódigo actualizado.
- Auto CPU frequency:  
     - `auto-cpufreq` instalado desde GitHub.
- Preload para acelerar aplicaciones:

{% raw %}
```bash
yay -S preload
sudo systemctl enable preload
sudo systemctl start preload
```
{% endraw %}

## Kernel y arranque

- Múltiples kernels:  
     - `linux-lts` y `linux-lts-headers` para estabilidad.  
     - Ver versión actual: `uname -a`.
- Actualización de GRUB:

{% raw %}
```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```
{% endraw %}

## Seguridad y mantenimiento

- **Firewall** con UFW:

{% raw %}
```bash
sudo ufw deny 22/tcp
sudo ufw enable
sudo ufw start
sudo ufw status
sudo ufw list
```
{% endraw %}

- **Timeshift**: snapshots y restauración del sistema.
## Hibernación y gestión de energía

- Configuración de hibernación nativa del sistema.
- Shortcuts para togglear barra, lanzar aplicaciones y gestionar ventanas.

## Comodidad y productividad

- Historial de comandos y autocompletado en shell.
- Shortcuts personalizados y keybindings:  
     - En Qtile, configurar `scrot` y `sclip` para capturas de pantalla rápidas.
- Soporte para múltiples pantallas y configuraciones multi-monitor.

## Editores

- **Emacs**: configuración avanzada para productividad.
- **[VIM](/sistemas/vim/)**: edición eficiente en terminal.  
     - Integración con Rofi para comandos y scripts.

## Capturas y documentación
- Screenshots y organización de imágenes.
- Uso de man pages para consulta rápida de comandos y configuraciones.