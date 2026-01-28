---
date: 2024-02-04 19:03
title: Linux entrevistas
status: 🌟
Parent: "[[Area-Sistemas]]"
keywords:
source:
public_note: "true"
category: Linux
tags:
  - Linux
---
# Linux entrevistas
``

## Recursos y referencias
- [Top 10 Linux Job Interview Questions](https://youtu.be/l0QGLMwR-lY)
- [How to Start, Stop & Restart Services in Ubuntu and Other Linux Distributions](https://itsfoss.com/start-stop-restart-services-linux/)
- [Linux Less Command with Example](https://linuxhint.com/linux-less-command/)

## Comandos del sistema
- [Linux comandos y administracion](/linux/linux-comandos-y-administracion/)

### Información del kernel
- `uname -a` — muestra toda la información del kernel.
- `uname -v` — versión del kernel.
- `uname -r` — release del kernel.

### Información de red
- `ifconfig` — muestra interfaces de red y configuraciones IP.
- `ip addr show` — muestra todas las interfaces con sus direcciones.
- `ip addr show eth0` — muestra información específica de la interfaz `eth0`.

### Espacio en disco
- `df -ah` — espacio libre en discos y sistemas de archivos.
- `du -sh code/` — tamaño de un directorio específico.

### Manejo de servicios
- `service udev status` — estado de un servicio usando el init clásico.
- `systemctl status udev` — estado de un servicio usando systemd.
- `systemctl list-unit-files --type service --all` — lista todos los servicios del sistema.
- `sudo systemctl | grep running` — filtra servicios activos (systemd o init).
- Para servicios específicos: reemplazar `udev` con el nombre del servicio, por ejemplo, `mysql` o `nginx`.

### Procesos y uso de CPU
- `ps aux | grep nginx` — verifica procesos activos de `nginx`.
- `top` — muestra en tiempo real los procesos con mayor consumo de CPU y memoria.

### Gestión de particiones y mounts
- `ls /mnt` — listar montajes en `/mnt`.
- `mount /dev/sda2 /mnt` — montar una partición manualmente.
- `mount` — listar todos los mounts activos.
- Editar `/etc/fstab` para montajes automáticos al iniciar el sistema:
  - Ver contenido: `less /etc/fstab` (salir con `q`).

### Puertos y conexiones
- `netstat` — listar conexiones de red.
- `netstat -tulpn` — ver puertos TCP/UDP y procesos asociados.
- Instalar herramientas necesarias: `sudo apt install net-tools`.

# Linux entrevistas — Conceptos y Temas Avanzados

## Arquitectura y fundamentos del sistema
- Diferencia entre kernel space y user space.
- Tipos de kernels: monolítico vs microkernel.
- Proceso de arranque: BIOS/UEFI → Bootloader (GRUB) → Kernel → init/systemd.
- Runlevels vs targets en systemd (por ejemplo: `multi-user.target`, `graphical.target`).
- Tipos de sistemas de archivos soportados: ext4, xfs, btrfs, tmpfs.
- Concepto de inodos y su rol en el almacenamiento de archivos.

## Administración avanzada de procesos
- Estados de procesos: running, sleeping, zombie, stopped.
- Señales y manejo con `kill`, `pkill`, `trap`.
- Foreground y background: `fg`, `bg`, `jobs`.
- Procesos demonio y cómo crearlos.
- Concepto de `cgroups` y control de recursos por proceso.

## Redes y seguridad avanzada
- Diferencia entre NAT, SNAT y DNAT.
- Firewall: conceptos de zones (firewalld), chains y policies.
- Concepto de SELinux/AppArmor y modos de seguridad (enforcing, permissive).
- Uso de `tcpdump` y `wireshark` para inspección de paquetes.
- Conexiones persistentes y sockets UNIX vs TCP/UDP.
- Configuración de interfaces virtuales y bonding.

## Almacenamiento avanzado y LVM
- Concepto de volúmenes físicos, grupos de volúmenes y volúmenes lógicos en LVM.
- Snapshots y redimensionamiento de volúmenes.
- RAID software: niveles RAID 0, 1, 5, 10 y sus ventajas/desventajas.
- Montaje de sistemas de archivos temporales (`tmpfs`) y persistentes.
- Fstab options avanzadas: `noatime`, `nodiratime`, `defaults`, `user`, `auto`.

## Scripts y automatización
- Uso de shell scripting para tareas repetitivas.
- Variables, loops y condicionales en bash.
- Cron jobs y systemd timers para automatización de tareas.
- Manejo de logs y rotación automática (`logrotate`).
- Variables de entorno y configuración global vs usuario.

## Contenedores y virtualización
- Diferencia entre contenedores (Docker/LXC) y máquinas virtuales.
- Namespaces de Linux: PID, NET, MNT, UTS, IPC.
- Concepto de cgroups aplicado a contenedores.
- Administración básica de contenedores: creación, parada, inspección.

## Preguntas típicas de entrevistas Linux
- Explica cómo funciona el sistema de permisos y cómo resolver conflictos.
- Diferencia entre soft link y hard link, y cuándo usar cada uno.
- Qué pasa si un proceso zombie se acumula en el sistema.
- Cómo monitorear recursos de un proceso sin herramientas gráficas.
- Cómo identificar cuellos de botella en CPU, memoria y disco.
- Estrategias para asegurar un servidor Linux expuesto a Internet.
- Explica el flujo de arranque del sistema y cómo solucionar fallos en boot.


# Linux entrevistas 2025 — Conceptos, Áreas y Respuestas Clave

## Arquitectura y fundamentos del sistema
- **Kernel space vs User space:**  
  El kernel maneja recursos críticos y comunicación hardware, mientras que user space contiene procesos de usuario y aplicaciones. Esta separación mejora seguridad y estabilidad.
- **Tipos de kernel:**  
  - Monolítico: todo el código en un solo espacio (Linux).  
  - Microkernel: funciones básicas en kernel, resto en user space (Minix, QNX).
- **Proceso de arranque:**  
  BIOS/UEFI → Bootloader (GRUB) → Kernel → init/systemd → targets o runlevels.
- **Runlevels vs Targets:**  
  Runlevels tradicionales (0-6) son reemplazados por targets en systemd:
  - `multi-user.target`: sin GUI, servicios esenciales.  
  - `graphical.target`: incluye GUI.  
- **Sistemas de archivos:** ext4, xfs, btrfs, tmpfs.  
  - Los inodos almacenan metadatos sobre archivos (propietario, permisos, tamaño, timestamps).

## Administración avanzada de procesos
- **Estados de procesos:** running, sleeping, zombie, stopped.  
- **Señales:**  
  - `kill PID` envía señales, `SIGKILL` termina un proceso, `SIGTERM` solicita cierre ordenado.  
  - `trap` captura señales en scripts.  
- **Foreground y background:**  
  - `&` ejecuta en background, `fg` y `bg` manejan procesos suspendidos.  
- **Demonios:** procesos que corren en background sin terminal.  
- **cgroups:** limitan CPU, memoria, I/O por procesos o grupos de procesos.

## Redes y seguridad avanzada
- **NAT/SNAT/DNAT:** traducción de direcciones para acceso externo.  
- **Firewall:** reglas y chains controlan tráfico; firewalld maneja zones y policies.  
- **SELinux/AppArmor:** control de acceso obligatorio; modos: enforcing (activo), permissive (solo registra).  
- **Monitoreo de tráfico:** `tcpdump` o `wireshark` inspeccionan paquetes en tiempo real.  
- **Sockets:** UNIX (local) vs TCP/UDP (red).  
- **Interfaces virtuales y bonding:** combinan múltiples interfaces para redundancia o velocidad.

## Almacenamiento avanzado y LVM
- **LVM:**  
  - Volúmenes físicos → grupos de volúmenes → volúmenes lógicos.  
  - Permite snapshots y redimensionamiento dinámico.  
- **RAID software:**  
  - RAID 0: striping, rendimiento.  
  - RAID 1: mirror, redundancia.  
  - RAID 5: paridad, balance.  
  - RAID 10: combinación de mirror + striping.  
- **fstab options:** `noatime`, `nodiratime`, `defaults`, `user`, `auto` permiten control de rendimiento y permisos.

## Scripts y automatización
- **Shell scripting:** variables, loops, condicionales para automatización.  
- **Cron jobs / systemd timers:** ejecutar tareas periódicas.  
- **Logs:** `logrotate` para rotación automática.  
- **Variables de entorno:** globales (`/etc/profile`) vs locales (`~/.bashrc`).

## Contenedores y virtualización
- **Diferencia contenedor vs VM:** contenedores comparten kernel, VMs tienen kernel propio.  
- **Namespaces:** PID, NET, MNT, UTS, IPC aíslan recursos.  
- **cgroups:** limitan recursos de contenedores.  
- **Administración básica:** crear, iniciar, inspeccionar, detener contenedores.

## Preguntas típicas de entrevistas Linux y respuestas

- **Explica el sistema de permisos y cómo resolver conflictos:**  
  - Cada archivo tiene permisos `rwx` para propietario, grupo y otros.  
  - Conflictos se resuelven cambiando permisos (`chmod`) o propietario (`chown`).

- **Diferencia entre soft link y hard link:**  
  - Hard link apunta al mismo inodo; eliminar archivo original no afecta.  
  - Soft link apunta a la ruta; eliminar original rompe el link.

- **Qué pasa si un proceso zombie se acumula:**  
  - Zombie es proceso terminado pero con entrada en la tabla de procesos.  
  - Se elimina matando al proceso padre (`kill -s SIGCHLD padre`) o reiniciando init/systemd.

- **Cómo monitorear recursos de un proceso sin herramientas gráficas:**  
  - `top`, `ps aux`, `/proc/PID/status` permiten ver CPU, memoria, IO.

- **Cómo identificar cuellos de botella en CPU, memoria y disco:**  
  - CPU: `top`/`htop` y `mpstat`.  
  - Memoria: `free -h`, `/proc/meminfo`.  
  - Disco: `iostat`, `iotop`, `df -h`.

- **Estrategias para asegurar un servidor Linux expuesto a Internet:**  
  - Actualizaciones periódicas, firewall, SSH key authentication, deshabilitar servicios innecesarios, SELinux/AppArmor.

- **Explica el flujo de arranque y solución de fallos:**  
  - Bootloader carga kernel → init/systemd inicia servicios → targets o runlevels.  
  - Fallos: revisar `journalctl -xb`, `dmesg`, modo rescue, editar `/etc/fstab` si hay problemas de montaje.

