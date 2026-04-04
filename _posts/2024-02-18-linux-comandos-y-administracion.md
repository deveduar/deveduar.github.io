---
date: 2024-02-18 17:32
title: Linux comandos y administracion
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: Linux
tags:
  - Linux
---
# Linux comandos
# Comandos sysadmin

## Gestión de usuarios
### Creación de usuarios
- `sudo useradd -d /home/jdoe -m jdoe`
	- Crea el usuario `jdoe`
	- Define explícitamente su directorio home
	- `-m` crea el directorio si no existe
- `sudo adduser`
	- Script interactivo de alto nivel
	- Configura usuario, grupo primario, contraseña y datos adicionales
- `nano /usr/sbin/adduser`
	- Permite revisar o modificar el comportamiento por defecto del script `adduser`

### Contraseñas y credenciales
- `sudo passwd jdoe`
	- Asigna o cambia la contraseña del usuario
- `passwd -l <username>`
	- Bloquea la cuenta (deshabilita autenticación por contraseña)
- `sudo passwd -S <username>`
	- Muestra el estado de la contraseña (bloqueada, fecha de cambio, etc.)

### Eliminación de usuarios
- `sudo userdel dscully`
	- Elimina el usuario sin borrar su directorio home
- `sudo userdel -r dscully`
	- Elimina el usuario y su home
- `sudo rm -r /home/dscully`
	- Elimina manualmente el directorio home (no recomendado sin respaldo)
- `sudo rm -r / home/dscully !! DANGER`
	- El espacio después de `/` puede provocar borrados catastróficos

## Gestión de directorios home
- `ls -l /home`
	- Lista usuarios con directorio home
- `sudo mkdir -p /store/file_archive`
	- Crea estructura de directorios para archivado
- `sudo mv /home/dscully /store/file_archive`
	- Mueve el home antes de eliminar el usuario (buena práctica)

## Información de cuentas del sistema
- `cat /etc/passwd`
	- Lista usuarios del sistema y servicios
- `sudo cat /etc/shadow`
	- Contiene hashes de contraseñas (solo root)
- `sudo cat /etc/shadow | grep root`
	- Filtra información específica del usuario root
- `ls -la /etc/skel`
	- Archivos plantilla copiados al crear nuevos usuarios

## Cambio de usuario (Switching users)
- `sudo passwd`
	- Cambia contraseña del usuario actual
- `sudo su -`
	- Inicia sesión como root con entorno completo
- `su - <username>`
	- Cambia a otro usuario (requiere su contraseña)
- `sudo su - <username>`
	- Cambia a otro usuario usando privilegios sudo

## Gestión de grupos
- `cat /etc/group`
	- Lista grupos del sistema
- `sudo groupadd admins`
	- Crea un nuevo grupo
- `sudo groupdel admins`
	- Elimina un grupo
- `sudo usermod -aG admins myuser`
	- Añade un usuario a un grupo suplementario
- `sudo usermod -g <group-name> <username>`
	- Cambia el grupo primario del usuario
- `sudo usermod -d /home/jsmith jdoe -m`
	- Cambia el directorio home y mueve los archivos
- `sudo usermod -l jsmith jdoe`
	- Cambia el nombre del usuario
- `sudo gpasswd -d <username> <grouptoremove>`
	- Elimina un usuario de un grupo específico

## Bloqueo y políticas de cuentas
### Bloqueo y desbloqueo
- `sudo passwd -l <username>`
	- Bloquea la cuenta
- `sudo passwd -u <username>`
	- Desbloquea la cuenta

### Caducidad y políticas de contraseña
- `sudo chage -l <username>`
	- Muestra políticas de expiración
- `sudo chage -d 0 <username>`
	- Obliga a cambiar la contraseña en el próximo login
- `sudo chage -M 90 <username>`
	- Define caducidad máxima de contraseña
- `sudo chage -m 5 dscully`
	- Define días mínimos entre cambios

### Refuerzo de contraseñas
- `sudo apt install libpam-cracklib`
	- Añade validaciones de complejidad
- `sudo nano /etc/pam.d/common-password`
	- Configura longitud mínima, historial y complejidad

## Edición de archivos
### Editor nano
- `nano /usr/sbin/adduser`
	- Edición directa de scripts o configuración
- `Ctrl + x`
	- Salir del editor (confirma guardar cambios)

## Procesos y control del sistema
- `ps`
	- Lista procesos en ejecución
- `top`
	- Monitorización interactiva de procesos y recursos
- `& (o Ctrl + z)`
	- Envía proceso al background
- `fg`
	- Trae proceso al foreground

## Programación de tareas
- `at`
	- Ejecuta tareas una sola vez en el futuro
- `cron`
	- Programación recurrente de tareas mediante `crontab`

## Linux comandos más usados
- [sed - Modificación de archivos de texto](https://man.cx/sed/es)
	- Búsqueda y reemplazo, edición en flujo
- [awk - Manejo de CSV](https://man.cx/awk/es)
	- Procesamiento de texto estructurado por columnas
- [wc - Conteo de palabras](https://man.cx/wc/es)
	- Cuenta líneas, palabras y caracteres

# Administración Linux — Conceptos y áreas no cubiertas

## Gestión de permisos y ownership
- `chmod`
	- Controla permisos de lectura, escritura y ejecución
	- Uso simbólico (`u,g,o,a`) y numérico (755, 644)
- `chown user:group file`
	- Cambia propietario y grupo
- `chgrp group file`
	- Cambia solo el grupo
- `umask`
	- Define permisos por defecto para nuevos archivos
- Permisos especiales
	- SUID, SGID, Sticky Bit
	- Uso frecuente en binarios del sistema y directorios compartidos como `/tmp`

## Gestión de paquetes
### Debian / Ubuntu
- `apt update`
	- Sincroniza índices de paquetes
- `apt upgrade`
	- Actualiza paquetes instalados
- `apt install <package>`
	- Instala software
- `apt remove / purge`
	- Elimina paquetes (con o sin configuración)
- `dpkg -l`
	- Lista paquetes instalados

### RedHat / CentOS / Rocky
- `dnf install <package>`
- `dnf update`
- `dnf remove`
- `rpm -qa`
	- Lista paquetes instalados vía RPM

## Servicios y systemd
- `systemctl status <service>`
	- Estado del servicio
- `systemctl start | stop | restart <service>`
	- Control del ciclo de vida
- `systemctl enable | disable <service>`
	- Arranque automático
- `journalctl`
	- Logs centralizados de systemd
- `journalctl -u <service>`
	- Logs por servicio
- `journalctl -xe`
	- Diagnóstico de errores críticos

## Arranque y niveles de ejecución
- `systemctl get-default`
	- Target por defecto
- `systemctl set-default multi-user.target`
	- Modo servidor (sin GUI)
- `systemctl isolate rescue.target`
	- Modo rescate
- GRUB
	- Parámetros de kernel
	- Recuperación del sistema

## Gestión de discos y almacenamiento
- `lsblk`
	- Vista de discos y particiones
- `blkid`
	- UUID y tipo de sistema de archivos
- `mount / umount`
	- Montaje manual
- `/etc/fstab`
	- Montaje persistente
- `df -h`
	- Espacio usado y disponible
- `du -sh`
	- Uso por directorio
- `mkfs`
	- Creación de sistemas de archivos
- `fsck`
	- Comprobación y reparación

## LVM (Logical Volume Manager)
- `pvcreate / vgcreate / lvcreate`
	- Gestión de volúmenes físicos, grupos y lógicos
- `lvextend / lvreduce`
	- Redimensionado de volúmenes
- `resize2fs / xfs_growfs`
	- Ajuste del sistema de archivos

## Red y conectividad
- `ip a`
	- Interfaces y direcciones IP
- `ip r`
	- Tabla de rutas
- `ss -tulnp`
	- Puertos y servicios escuchando
- `ping`
	- Conectividad básica
- `traceroute`
	- Diagnóstico de rutas
- `nmcli`
	- Gestión de red en sistemas modernos
- `/etc/hosts`
	- Resolución local de nombres
- `/etc/resolv.conf`
	- DNS

## Firewall y seguridad
- `ufw status`
	- Firewall simple (Ubuntu)
- `ufw allow / deny`
	- Reglas básicas
- `firewalld`
	- Firewall dinámico (RedHat)
- `iptables / nftables`
	- Control avanzado de tráfico
- SELinux / AppArmor
	- Control de acceso obligatorio
	- Modos enforcing, permissive, disabled

## Logs y auditoría
- `/var/log/syslog`
	- Eventos generales
- `/var/log/auth.log`
	- Autenticación y sudo
- `last`
	- Historial de inicios de sesión
- `lastlog`
	- Último login por usuario
- `who / w`
	- Usuarios conectados
- `auditd`
	- Auditoría de seguridad

## Monitorización y rendimiento
- `free -h`
	- Uso de memoria
- `uptime`
	- Carga del sistema
- `vmstat`
	- Estadísticas de memoria y CPU
- `iostat`
	- Rendimiento de disco
- `htop`
	- Monitor interactivo avanzado

## Backups y recuperación
- `rsync`
	- Copias incrementales
- `tar`
	- Archivado y compresión
- Snapshots
	- LVM snapshots
	- Filesystems con soporte (Btrfs, ZFS)
- Estrategias
	- 3-2-1 backup
	- Verificación y restauración periódica

## Automatización y scripting
- Bash scripting
	- Variables, bucles, condiciones
- `crontab -e`
	- Automatización recurrente
- Variables de entorno
	- `/etc/environment`
	- `.bashrc` y `.profile`
- Infraestructura como código
	- Ansible
	- Scripts de aprovisionamiento

## Gestión remota
- `ssh user@host`
	- Acceso remoto seguro
- `ssh-keygen`
	- Autenticación por clave
- `scp / rsync over ssh`
	- Transferencia segura
- `fail2ban`
	- Protección contra ataques de fuerza bruta

## Buenas prácticas sysadmin
- Principio de mínimo privilegio
- Separación de entornos
- Documentación de cambios
- Control de versiones para configuración
- Monitorización proactiva
- Pruebas antes de producción


# Recursos Linux y Administración — Estado y herramientas 2025

## Cursos y formación actualizada 2025
## Cursos online recomendados
- 🎓 [Linux System Administrator Certification 2025](https://market.tutorialspoint.com/certification/linux-system-administrator-certification/index.asp)
	- Certificación desde nivel básico a avanzado en administración Linux, shell scripting y entornos empresariales
- 🌐 [Introduction to Linux (LFS101)](https://training.linuxfoundation.org/training/introduction-to-linux/)
	- Curso gratuito de la **Linux Foundation** con fundamentos de Linux, CLI, configuración de sistemas y procesos
- 📜 [Linux System Administration Essentials (LFS207)](https://training.linuxfoundation.org/training/linux-system-administration-essentials-lfs207/)
	- Curso esencial para desarrollar habilidades profesionales como sysadmin
- 📺 **Vídeos formativos 2025**
	- [Linux Full Course — Complete Linux Tutorial (10h)](https://www.youtube.com/watch?v=oDgkM7G8ezU)
	- [Linux Administration & Commands Playlist](https://www.youtube.com/playlist?list=PLGyKZJoyKdOcMghwWPviN7hnjVkQtdVPE)
	- [Cómo aprender Linux desde cero](https://www.youtube.com/watch?v=HKp_Vn8H-K4)

## Listados y comparativas de cursos
- 🧠 🧑‍💻 [Top Linux Online Courses 2025 — GeeksforGeeks](https://www.geeksforgeeks.org/blogs/best-linux-online-courses/)
- 📚 [Coursera — Linux Courses](https://www.coursera.org/courses?query=linux)
- 📘 [Top Linux Courses (17+) — MentorCruise](https://mentorcruise.com/courses/linux/)
- 🎓 [Top Free Linux Courses 2025 — Class Central](https://www.classcentral.com/report/best-linux-courses/)
- 📚 [Linux System Administration Tutorials — Hackr.io](https://hackr.io/tutorials/learn-linux-system-administration)

## Tutoriales, guías y rutas de aprendizaje
- 🛣️ [Linux Roadmap 2025 — roadmap.sh](https://roadmap.sh/linux)
- 🧰 [Beginner’s Guide to Linux System Administration — GeeksforGeeks](https://www.geeksforgeeks.org/linux-unix/beginners-guide-to-linux-system-administration/)
- 🌐 [Linux Guides & Resources — CBT Nuggets](https://www.cbtnuggets.com/blog/training-resources/linux-guides-resources)

## Plataformas educativas de referencia
- 📜 [Linux Foundation — Free Courses](https://training.linuxfoundation.org/resources/free-courses/)
- 🆓 [Udemy — Free Linux Administration Courses](https://www.udemy.com/topic/linux-administration/free/)

## Libros y documentación recomendada 2025
- 📘 [Top Linux Books — MentorCruise](https://mentorcruise.com/books/linux/)
- 📚 [Linux From Scratch — Proyecto oficial](https://www.linuxfromscratch.org/)
- 📖 [Filesystem Hierarchy Standard (FHS)](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html)

## Comunidades, proyectos y guías prácticas
- 🌐 [Hackr.io — Linux Administration Tutorials](https://hackr.io/tutorials/learn-linux-system-administration)
- 🛠️ [Linux Server Setup Guides — linuxblog.io](https://linuxblog.io/linux-server-setup/)

## Formación certificada y profesional
- 📜 [Canonical Academy](https://ubuntu.com/academy)
	- Formación oficial y certificaciones enfocadas en Ubuntu Server y entornos empresariales

## Herramientas de práctica
- 🐧 [OverTheWire — Bandit](https://overthewire.org/wargames/bandit/)
- 🧪 [LabEx — Linux Journey & Labs](https://labex.io/skilltrees/linux)
