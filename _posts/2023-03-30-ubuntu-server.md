---
date: 2023-03-31 01:05
title: ubuntu server
status: 🌟
Parent: "[[Area-Sistemas]]"
keywords:
source:
public_note: true
category: Linux
tags:
  - Linux
---
# ubuntu server

# Ubuntu Server — Fundamentos y Arquitectura (2025)

## ¿Qué es Ubuntu Server?
Ubuntu Server es una versión **especializada de Ubuntu diseñada para funcionar como sistema operativo de servidores**, ideal para centros de datos, infraestructura en la nube, clústeres de contenedores o servicios empresariales robustos. Está pensada para ofrecer **escalabilidad económica y técnica**, con enfoque en rendimiento y estabilidad para entornos productivos.  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)

## Propósito y uso
- Proporciona una base estable y segura para servicios como **web, DNS, bases de datos, almacenamiento o virtualización** sin entorno gráfico por defecto.  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)
- Puede ser instalado en hardware físico, **máquinas virtuales y entornos en la nube**.  
[https://documentation.ubuntu.com/server/tutorial/](https://documentation.ubuntu.com/server/tutorial/)
- Es ampliamente usado en redes empresariales, servidores de aplicaciones, contenedores (por ejemplo con Kubernetes) o plataformas de alto rendimiento.  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)

## Arquitectura general
### Núcleo y componentes base
- Ubuntu Server está basado en **Debian GNU/Linux**, lo que le da compatibilidad con la mayoría de herramientas y paquetes del ecosistema Linux.  
[https://wiki.ubuntu.com/UbuntuArchitecture](https://wiki.ubuntu.com/UbuntuArchitecture)
- Utiliza el **kernel Linux** adaptado para tareas de servidor con soporte a múltiples arquitecturas de hardware (amd64, arm64, ppc64el, s390x, etc.).  
[https://invgate.com/es/itdb/ubuntu-server-24](https://invgate.com/es/itdb/ubuntu-server-24)
- Su instalación predeterminada es minimalista, sin GUI, para **minimizar superficie de ataque y maximizar eficiencia de recursos**.  
[https://documentation.ubuntu.com/server/tutorial/](https://documentation.ubuntu.com/server/tutorial/)

### Sistema de paquetes
- Usa **paquetes Debian (.deb)** y herramientas como `apt`, `dpkg` para gestión de software.  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)
- Permite instalar paquetes más recientes o especializados mediante **Snap**, formato independiente con dependencias empaquetadas.  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)

### Configuración y gestión
- Se gestiona principalmente desde línea de comandos, lo que es ideal para automatización, scripting y administración remota.  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)
- La arquitectura de configuración sigue estándares POSIX y del mundo Unix (usuarios, permisos, servicios systemd, etc.).  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)

## Soporte y actualizaciones
- Las **versiones LTS (Long-Term Support)**, como **Ubuntu Server 24.04 LTS**, reciben actualizaciones de seguridad y mantenimiento por al menos **5 años** tras su lanzamiento.  
[https://invgate.com/es/itdb/ubuntu-server-24](https://invgate.com/es/itdb/ubuntu-server-24)
- Con suscripciones como **Ubuntu Pro** se puede extender soporte de seguridad hasta **10 o incluso 15 años**.  
[https://invgate.com/es/itdb/ubuntu-server-24](https://invgate.com/es/itdb/ubuntu-server-24)
- Las actualizaciones estables (SRUs) buscan equilibrar nuevas funcionalidades y estabilidad en producción.  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)

## Arquitectura de despliegue
### Hardware
- Compatible con una gran variedad de hardware de servidor y plataformas modernas.  
[https://invgate.com/es/itdb/ubuntu-server-24](https://invgate.com/es/itdb/ubuntu-server-24)
- Capaz de aprovechar extensiones de CPU y arquitecturas emergentes.  
[https://www.reddit.com/r/Ubuntu_ES18011979/comments/1ooy098](https://www.reddit.com/r/Ubuntu_ES18011979/comments/1ooy098)

### Virtualización y contenedores
- Se integra con tecnologías de virtualización como **KVM, LXD y QEMU**.  
[https://documentation.ubuntu.com/server/how-to/](https://documentation.ubuntu.com/server/how-to/)
- Preparado para despliegues de **contenedores (Docker, Kubernetes)** y servicios nativos de la nube.  
[https://documentation.ubuntu.com/server/how-to/](https://documentation.ubuntu.com/server/how-to/)

## Recursos oficiales de aprendizaje
- Documentación principal de Ubuntu Server con tutoriales, explicación de conceptos y guías paso a paso: **Ubuntu Server documentation**.  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)
- Tutoriales específicos sobre instalación y operación del sistema: **Ubuntu Server tutorial**.  
[https://documentation.ubuntu.com/server/tutorial/](https://documentation.ubuntu.com/server/tutorial/)
- Guías de cómo realizar tareas concretas (red, seguridad, software, almacenamiento, contenedores, alta disponibilidad, etc.): **Ubuntu Server how-to guides**.  
[https://documentation.ubuntu.com/server/how-to/](https://documentation.ubuntu.com/server/how-to/)

## Beneficios clave
- **Estabilidad y soporte prolongado** con LTS.  
[https://invgate.com/es/itdb/ubuntu-server-24](https://invgate.com/es/itdb/ubuntu-server-24)
- **Amplio ecosistema de software** y herramientas de servidor.  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)
- **Gestión eficiente desde CLI** y automatización con herramientas modernas.  
[https://ubuntu.com/server/docs](https://ubuntu.com/server/docs)
- **Flexibilidad para hardware, nube y contenedores**.  
[https://documentation.ubuntu.com/server/tutorial/](https://documentation.ubuntu.com/server/tutorial/)



# master de ubuntu server libro

## Recursos
### Libros
- LaCroix J. - *Mastering Ubuntu Server, 3rd edition* - 2020

### Software y hardware
- Lista de software recomendado para servidores Linux:
	libre y de código abierto, herramientas de automatización y virtualización.
	- [Ansible](https://www.ansible.com/) — Automatización de configuración y despliegue.
	- [MicroK8s](https://microk8s.io/) — Kubernetes ligero para entornos de desarrollo y producción.
	- [Kubernetes](https://kubernetes.io/) — Orquestación de contenedores a escala.
	- [AWS](https://aws.amazon.com/) — Infraestructura como servicio (IaaS) para despliegues en la nube.
	- [Terraform](https://terraform.io/) — Infraestructura como código para automatizar despliegues.

### Código y proyectos
- Repositorios y ejemplos de código:
	- [Packt · GitHub](https://github.com/PacktPublishing/)
	- Código fuente del libro *Mastering Ubuntu Server*: [GitHub](https://github.com/PacktPublishing/Mastering-Ubuntu-Server_Third-Edition)
	- Ubicación local de los ejemplos:  
		`C:\Users\Admin\Desktop\Docs Hp\0 books\LaCroix J. - Mastering Ubuntu Server, 3rd edition - 2020\code`

## Info server pruebas
### Visualización
- Imágenes de referencia del servidor de pruebas:  
	!Data/Data-Sistemas/Data-Linux/image.png  
	!Data/Data-Sistemas/Data-Linux/image2.png

### Configuración y usuarios
- Usuario de desarrollo: `dev1 desarrollador1 - key`
- Estado de instalación de servicios:
	- [x] Instalado OpenSSH Server
	- Servidor LAMP (Linux, Apache, MySQL, PHP)
	- Servidor Tomcat para aplicaciones Java

## 00-Ubuntu server

### Determining your server's role
- Al planificar el rol de un servidor, se deben considerar los servicios que ofrecerá y cómo afectarán a otros sistemas y usuarios.  
	- Por ejemplo, un **servidor DNS** impacta en la capacidad de los colegas para resolver nombres locales y acceder a recursos necesarios.  
	- Es recomendable **agregar un segundo servidor DNS** como respaldo en caso de que el servidor principal falle.  
- Ubuntu Server ofrece durante la instalación **encriptación en reposo (encryption at rest)**, protegiendo los datos almacenados en disco.

### Setting up our server
- Tipos de servidores:
	- **Virtual Machine (VM)**: Configurable en cualquier host físico, ideal para pruebas y entornos controlados.  
	- **Physical server**: Servidor físico dedicado para producción o entornos de alto rendimiento.  
	- **Virtual Private Server (VPS)**:  
		- Servicios disponibles: Amazon Web Services, Google Cloud, Linode, Microsoft Azure, Digital Ocean.  
		- Permiten instalar Ubuntu Server en la nube y conectarse mediante OpenSSH para administración remota.  
	- **Spare desktop or laptop**:  
		- Se recomienda un **UPS (Uninterruptible Power Supply)** para proteger contra cortes de energía.  
		- La mayoría de los desktops soportan virtualización, permitiendo crear VMs o ejecutar contenedores (Docker, Podman).  
	- **Raspberry Pi**: Opciones económicas y de bajo consumo energético para servidores pequeños o de pruebas.

### Planning the partitioning layout
- Separar directorios críticos en particiones independientes ayuda a **gestionar el almacenamiento y aumentar la seguridad**:
	- `/home`: Para archivos de usuarios; permite conservar datos en caso de reinstalación del sistema.  
	- `/var`: Contiene logs, ideal para partición separada y evitar que aplicaciones saturen la raíz.  
	- `/`: Partición raíz mínima requerida.  
	- Swap: Aunque antes se utilizaban particiones de swap, en versiones modernas de Ubuntu se crea automáticamente un **swap file**.  
- Beneficios de particionar:
	- Colocar archivos compartidos por el **servidor Apache** en su propia partición.  
	- Limitar aplicaciones que consumen grandes cantidades de almacenamiento, evitando afectar otras áreas del sistema.

### Installing Ubuntu Server
- La configuración de red predeterminada es **DHCP**, mostrando la IP asignada si la conexión inicial es exitosa.  
- Para una **IP estática**:
	- Seleccionar la tarjeta de red y presionar Enter.  
	- Elegir **Edit IPv4** y configurar la conexión personalizada.  
- Conexión remota:
	- Instalar y habilitar **OpenSSH** para administración remota.  
- Opciones de almacenamiento:
	- Durante la instalación, se puede configurar el **disco como un grupo LVM** para mayor flexibilidad en la gestión de volúmenes.

## 03 resumen Managing users and permissions

### Conceptos básicos
- **Usuarios y directorios:**
	- `adduser` — Crear un usuario nuevo.  
	- `/home/dscully` — Directorio home del usuario.  
	- `/etc/skel` — Plantilla de archivos para nuevos usuarios.  
	- **UID / GID** — Identificadores únicos para usuarios y grupos.  
- **Archivos críticos:**
	- `/etc/passwd` — Información de los usuarios del sistema.  
	- `/etc/shadow` — Contraseñas cifradas y estado de las cuentas.  
- **Shells disponibles:**
	- `/bin/bash`, `/bin/sh`  
- **Estado de cuentas:**
	- `x` encripted o `!` bloquea la cuenta.  
	- `L` indica contraseña bloqueada.  
- **GECOS field:** Información adicional de usuario (nombre completo, teléfono, etc.).  
- **Grupos y opciones:**
	- `-aG` — Añadir usuario a grupo secundario.  
	- Primary group — Grupo principal del usuario.  
- **Pluggable Authentication Module (PAM):** Sistema modular de autenticación.  
- **Password policy:** Políticas de contraseñas configurables.  

### Crear y administrar usuarios
- Crear usuario y home:
{% raw %}
```bash
sudo useradd -d /home/jdoe -m jdoe
ls -l /home
sudo passwd jdoe
```
{% endraw %}`

* Alternativa con adduser:

{% raw %}
```bash
sudo adduser jdoe
nano /usr/sbin/adduser
Ctrl + x
```
{% endraw %}

* Eliminar usuario:

{% raw %}
```bash
sudo userdel dscully
sudo mv /home/dscully /store/file_archive
sudo mkdir -p /store/file_archive
sudo userdel -r dscully
sudo rm -r /home/dscully  # !! DANGER: cuidado con espacios
```
{% endraw %}

* Ver usuarios y contraseñas:

{% raw %}
```bash
cat /etc/passwd
sudo cat /etc/shadow
sudo cat /etc/shadow | grep root
```
{% endraw %}

* Bloquear/Desbloquear cuentas:

{% raw %}
```bash
passwd -l <username>  # bloquear
sudo passwd -u <username>  # desbloquear
```
{% endraw %}

* Switch users:

{% raw %}
```bash
sudo su -
su - <username>
sudo su - <username>
```
{% endraw %}

### Administrar grupos

* Listar grupos:

{% raw %}
```bash
cat /etc/group
```
{% endraw %}

* Crear/eliminar grupos:

{% raw %}
```bash
sudo groupadd admins
sudo groupdel admins
```
{% endraw %}

* Modificar membresía de usuario:

{% raw %}
```bash
sudo usermod -aG admins myuser
sudo usermod -g <group-name> <username>
sudo usermod -d /home/jsmith jdoe -m
sudo usermod -l jsmith jdoe
sudo gpasswd -d <username> <grouptoremove>
```
{% endraw %}

### Políticas de contraseñas

* Cambiar configuración de expiración y bloqueo:

{% raw %}
```bash
sudo chage -l <username>
sudo chage -d 0 <username>
sudo chage -M 90 <username>
sudo chage -m 5 dscully
```
{% endraw %}

* Requisitos de historial y complejidad:

{% raw %}
```bash
sudo apt install libpam-cracklib
sudo nano /etc/pam.d/common-password

# Ejemplo:
password required pam_pwhistory.so remember=99 use_authok
```
{% endraw %}

### Dar acceso sudo

* Añadir usuario al grupo sudo:

{% raw %}
```bash
sudo usermod -aG sudo <username>
```
{% endraw %}

* Configuración en `/etc/sudoers` mediante `visudo` o `nano`:

{% raw %}
```bash
%sudo ALL=(ALL:ALL) ALL  # Acceso completo para miembros de sudo
root ALL=(ALL:ALL) ALL   # Acceso completo root
```
{% endraw %}

* Limitar comandos sudo a usuarios específicos:

{% raw %}
```bash
# Ejemplo:
charlie ALL=(ALL:ALL) /sbin/reboot,/sbin/shutdown
charlie ubuntu=(ALL:ALL) /usr/bin/apt
charlie ubuntu=/usr/bin/apt  # Sin opción -u
charlie ubuntu=(dscully:admins) ALL  # Ejecutar como usuario y grupo específicos
```
{% endraw %}

### Permisos en archivos y directorios

* Componentes de la lista de permisos: tipo de objeto, usuario, grupo, mundo, tamaño, fecha y nombre.
* Ejemplos de permisos:

{% raw %}
```
- rw-  rw-  rw-
- rw-  r--  r--
- rwx  rwx  r-x
```
{% endraw %}

* Modificar permisos:

{% raw %}
```bash
chmod o-r budget.txt
chmod o-r /home/sue/budget.txt
chmod u+rw
chmod g+r
chmod o-rw
```
{% endraw %}

* Equivalentes octales: r=4, w=2, x=1

{% raw %}
```
600: -rw------
740: -rwxr-----
770: -rwxrwx---
777: -rwxrwxrwx
```
{% endraw %}

* Recursivo:

{% raw %}
```bash
chmod 770 -R mydir
```
{% endraw %}

* Aplicar permisos a archivos y directorios por separado:

{% raw %}
```bash
find /path/to/dir/ -type f -exec chmod 644 {} \;
find /path/to/dir/ -type d -exec chmod 755 {} \;
```
{% endraw %}

### Cambiar propietario y grupo

{% raw %}
```bash
sudo chown sue myfile.txt
sudo chown -R sue mydir
sudo chown sue:sales myfile.txt
sudo chgrp sales myfile.txt
```
{% endraw %}



## 03-Managing Users and Permissions

[Documentación oficial Ubuntu Server](https://ubuntu.com/server/docs/security-users)  
[File Permissions en Ubuntu](https://help.ubuntu.com/community/FilePermissions)

### Understanding when to use root
- LDAP (Lightweight Directory Access Protocol) permite centralizar autenticación de usuarios.  
- Organizaciones avanzadas pueden usar **Active Directory (AD)** o LDAP estándar.  
- Linux gestiona usuarios, grupos y permisos al estilo Unix.  
- Existen **usuarios del sistema** usados por aplicaciones y procesos en segundo plano (backup jobs, procesos automáticos).  

#### Root user
- Se recomienda que un administrador tenga su propia cuenta y utilice **sudo** para ejecutar comandos privilegiados:  
{% raw %}
```bash
sudo apt install tmux
```
{% endraw %}`

* Ubuntu bloquea la cuenta root por defecto para seguridad.

### Creating and removing users

#### useradd

{% raw %}
```bash
sudo useradd -d /home/jdoe -m jdoe
ls -l /home
sudo passwd jdoe  # contraseña ejemplo: pepe1
```
{% endraw %}

* `-d` define el directorio home.
* `-m` crea automáticamente el directorio home si no existe.

#### adduser

* Comando más amigable y interactivo que `useradd`.
* Crea home basado en `/etc/skel` y asigna UID y GID automáticamente.
* `adduser` es un script en Perl que guía al usuario mediante prompts.

{% raw %}
```bash
nano /usr/sbin/adduser  # ver script
Ctrl + x  # salir
```
{% endraw %}

#### Removing users

{% raw %}
```bash
sudo userdel dscully
ls -l /home
sudo mkdir -p /store/file_archive
sudo mv /home/dscully /store/file_archive
sudo userdel -r dscully  # elimina usuario y home
sudo rm -r /home/dscully  # si no se eliminó con -r
```
{% endraw %}

* ¡Cuidado! `sudo rm -r / home/dscully` con espacio es destructivo.

### Understanding /etc/passwd and /etc/shadow

* `/etc/passwd`: Información de cuentas de usuario (UID, GID, home, shell).
* `/etc/shadow`: Contraseñas cifradas y estado de cuentas (solo accesible por root).

{% raw %}
```bash
cat /etc/passwd
sudo cat /etc/shadow
sudo cat /etc/shadow | grep root
```
{% endraw %}

* `x` en /etc/passwd indica contraseña cifrada en /etc/shadow.
* Bloquear cuenta: `passwd -l <username>`.
* Desbloquear: `passwd -u <username>`.

#### Columns importantes en /etc/shadow

1. Hash de la contraseña.
2. Estado: L=locked, P=set, NP=no password.
3. Fecha del último cambio de contraseña.
4. Días mínimos para cambio de contraseña.
5. Días máximos para cambio de contraseña.
6. Días de advertencia antes de expiración.
7. Días después de expiración antes de deshabilitar cuenta.

### Distributing default configuration files with /etc/skel

* Archivos de configuración predeterminados para nuevos usuarios se copian desde `/etc/skel`.

{% raw %}
```bash
ls -la /etc/skel
```
{% endraw %}

* Incluir archivos de configuración de editores o sistemas de control de versiones.

### Switching users

{% raw %}
```bash
sudo passwd          # establecer contraseña root
sudo su -            # cambiar a root
exit                 # volver al usuario anterior
su - <username>
sudo su - <username>
```
{% endraw %}

* Con sudo, se puede cambiar a cualquier usuario sin conocer su contraseña.

### Managing groups

* Asignar grupos controla acceso a archivos y recursos.
* Cada archivo/directorio tiene un **usuario y un grupo principal**.

{% raw %}
```bash
ls -l
cat /etc/group
```
{% endraw %}

* Crear/eliminar grupos:

{% raw %}
```bash
sudo groupadd admins
sudo groupdel admins
```
{% endraw %}

* Añadir usuario a grupo secundario:

{% raw %}
```bash
sudo usermod -aG admins myuser
sudo gpasswd -a <username> <group>  # alternativa
```
{% endraw %}

* Cambiar grupo principal:

{% raw %}
```bash
sudo usermod -g <group-name> <username>
```
{% endraw %}

* Cambiar home o renombrar usuario:

{% raw %}
```bash
sudo usermod -d /home/jsmith jdoe -m
sudo usermod -l jsmith jdoe
```
{% endraw %}

* Eliminar usuario de un grupo:

{% raw %}
```bash
sudo gpasswd -d <username> <grouptoremove>
```
{% endraw %}

## Managing passwords and password policies

### Changing passwords
- El comando `passwd` permite cambiar la contraseña del usuario actualmente logueado.  
- Como root, se puede cambiar la contraseña de cualquier usuario:
{% raw %}
```bash
sudo passwd <username>
```
{% endraw %}`

### Locking and unlocking user accounts

* Bloquear usuario:

{% raw %}
```bash
sudo passwd -l <username>
```
{% endraw %}

* Desbloquear usuario:

{% raw %}
```bash
sudo passwd -u <username>
```
{% endraw %}

* Nota: Bloquear una cuenta **no impide el acceso por SSH con clave pública**. Para restringir completamente, hay que limitar acceso SSH a usuarios de grupos específicos.

### Setting password expiration

* Se puede definir expiración de contraseña y políticas de cambio usando `/etc/shadow` y `chage`.
* Ver información de expiración de un usuario:

{% raw %}
```bash
sudo chage -l <username>
```
{% endraw %}

* Forzar cambio de contraseña en el próximo login:

{% raw %}
```bash
sudo chage -d 0 <username>
```
{% endraw %}

* Configurar máximo de días entre cambios de contraseña:

{% raw %}
```bash
sudo chage -M 90 <username>
```
{% endraw %}

* Configurar mínimo de días entre cambios de contraseña:

{% raw %}
```bash
sudo chage -m 5 dscully
```
{% endraw %}

* Esto evita que los usuarios regresen a su contraseña anterior inmediatamente, manteniendo seguridad y flexibilidad.

### Setting a password policy (PAM)

* Usar Pluggable Authentication Modules (PAM) para configurar políticas de contraseñas:

{% raw %}
```bash
sudo apt install libpam-cracklib
sudo nano /etc/pam.d/common-password
```
{% endraw %}

* Configurar historial de contraseñas para evitar reutilización:

{% raw %}
```bash
password required pam_pwhistory.so remember=99 use_authok
```
{% endraw %}

* `difok=3` — al menos 3 caracteres deben ser diferentes de la contraseña anterior para ser aceptada.
* Previene contraseñas simples y aumenta la seguridad sin generar frustración en los usuarios.


{% raw %}
```
```
{% endraw %}

### Configuring administrator access with sudo
- Puedes restringir a usuarios para ejecutar solo comandos específicos, limitando lo que pueden hacer en el sistema.  
- Miembros del grupo `sudo` pueden usar sudo sin restricciones:
{% raw %}
```bash
sudo usermod -aG sudo <username>
```
{% endraw %}`

* En algunas distribuciones, sudo debe instalarse manualmente y usar otro grupo, como `wheel`.
* Configuración de sudo:

{% raw %}
```bash
sudo visudo
# o con nano:
sudo nano /etc/sudoers
```
{% endraw %}

* Guardar cambios en nano: `Ctrl + w`, salir: `Ctrl + x`.
* Ejemplo de acceso sudo por grupo:

{% raw %}
```bash
%sudo ALL=(ALL:ALL) ALL
```
{% endraw %}

* Para usuarios específicos (sin %):

{% raw %}
```bash
root ALL=(ALL:ALL) ALL
```
{% endraw %}

* Significado de las columnas:

  * Primer ALL: desde cualquier terminal.
  * Segundo ALL: puede impersonar a cualquier usuario.
  * Tercer ALL: puede impersonar a cualquier grupo.
  * Cuarto ALL: comandos permitidos.
* Ejemplos de permisos restringidos:

{% raw %}
```bash
charlie ALL=(ALL:ALL) /sbin/reboot,/sbin/shutdown
charlie ubuntu=(ALL:ALL) /usr/bin/apt
charlie ubuntu=/usr/bin/apt       # no puede usar -u
charlie ubuntu=(dscully:admins) ALL  # puede actuar en nombre de un usuario y grupo específico
```
{% endraw %}

* Buenas prácticas: usar grupos específicos (apt, reboot, etc.) para mayor control y responsabilidad.

### Setting permissions on files and directories

* Ver permisos:

{% raw %}
```bash
ls -l
```
{% endraw %}


* Columnas importantes:

  1. String de permisos (`-rw-r--r--`)
  2. Número de enlaces
  3. Usuario propietario
  4. Grupo propietario
  5. Tamaño en bytes
  6. Fecha de última modificación
  7. Nombre del archivo

#### Desglose de permisos

* Cada string de permisos tiene 4 secciones: tipo de objeto, usuario, grupo, mundo.
* Ejemplo de archivo:

{% raw %}
```
-rw-rw-rw- 1 doctor doctor 5 Jan 11 12:52 welcome
```
{% endraw %}

* `r` = read, `w` = write, `x` = execute
* `-` = permiso no asignado
* Directorios (`d`) y enlaces (`l`) tienen significados especiales.
* Ejemplo directorio:

{% raw %}
```
drwxr-xr-x 1 bob sales 4096 Jan 11 12:52 annual_projects
```
{% endraw %}

* Propietario: bob, grupo: sales, permisos: rwx para propietario, ningún permiso para otros.

#### Cambiar permisos

{% raw %}
```bash
chmod o-r budget.txt          # quitar lectura a otros
chmod u+rw <filename>         # añadir rw a usuario
chmod g+r <filename>          # añadir lectura a grupo
chmod o-rw <filename>         # quitar rw a otros
```
{% endraw %}

* Uso de octales: r=4, w=2, x=1

  * 600 = -rw------
  * 740 = -rwxr-----
  * 770 = -rwxrwx---
  * 777 = -rwxrwxrwx

{% raw %}
```bash
chmod 770 -R mydir            # recursivo
```
{% endraw %}

* Diferenciar archivos y directorios:

{% raw %}
```bash
find /path/to/dir/ -type f -exec chmod 644 {} \;
find /path/to/dir/ -type d -exec chmod 755 {} \;
```
{% endraw %}

#### Cambiar propietario y grupo

{% raw %}
```bash
sudo chown sue myfile.txt         # cambiar propietario
sudo chown -R sue mydir           # recursivo
sudo chown sue:sales myfile.txt   # cambiar propietario y grupo
sudo chgrp sales myfile.txt       # cambiar solo grupo
sudo chgrp -R sales mydir         # recursivo
```
{% endraw %}


## 04-Managing Software Packages

### Understanding Linux package management
- Los paquetes en los repositorios cambian constantemente; los mantenedores publican **actualizaciones** por nuevas funcionalidades o vulnerabilidades de seguridad.  
- Se prefieren paquetes **estables** y de **long-term support (LTS)**.  
- Stable Release Updates (SRUs) aseguran estabilidad y seguridad.  
- **Dependency resolution**: el sistema maneja dependencias automáticamente.

### Differences between Debian and Snap packages
- Ubuntu utiliza **Debian packages** (`.deb`) y los comandos `apt` y `dpkg`.  
- CentOS/Red Hat usan **RPM packages** y el comando `dnf`.  

#### Debian packages
- Kernel, librerías, actualizaciones de seguridad y muchos servicios son paquetes Debian.  
- Problemas: Apache, MariaDB u otros pueden generar conflictos si dependen de librerías diferentes.  
- Si una librería del sistema se corrompe, todo el software que depende de ella falla.

#### Snap packages
- Formato universal, independiente de paquetes del sistema.  
- Incluyen todas sus dependencias → menos conflictos.  
- Comparación: Flatpak y AppImage no son recomendados para servidores (solo GUI).  
- Snap soporta aplicaciones GUI y no-GUI.  
- Son más grandes porque incluyen librerías completas.

### Installing and removing software

#### Managing Debian packages with apt
- APT (Advanced Package Tool) maneja dependencias automáticamente.  
{% raw %}
```bash
sudo apt update
sudo apt install openssh-server
sudo apt install <package1> <package2> <package3>
```
{% endraw %}`

* Para confirmar automáticamente: `-y`.
* Opcional: `--install-suggests` instala paquetes sugeridos (puede ser innecesario).
* Eliminación:

{% raw %}
```bash
sudo apt remove <package>
sudo apt remove <package1> <package2> <package3>
sudo apt remove --purge <package>  # elimina configuración
```
{% endraw %}

* Configuración de paquetes: la mayoría inicia automáticamente servicios y daemons al instalarse.

#### Managing Snap packages

* Buscar paquetes Snap:

{% raw %}
```bash
snap find <keyword>
snap find nmap
```
{% endraw %}

* Instalar paquete Snap:

{% raw %}
```bash
sudo snap install nmap
```
{% endraw %}

* Ubicación del binario:

{% raw %}
```bash
which nmap   # Snap: /snap/bin/nmap, APT: /usr/bin/nmap
```
{% endraw %}

* Ejecutar versión específica usando path completo.
* Eliminar y actualizar paquetes Snap:

{% raw %}
```bash
sudo snap remove nmap
sudo snap refresh <package>  # actualizar un paquete
sudo snap refresh            # actualizar todos los Snap
```
{% endraw %}

* Snap es independiente de los paquetes APT; ambos pueden coexistir.


### Searching for packages
- Buscar paquetes con apt:
{% raw %}
```bash
apt search <search term>
```
{% endraw %}`

* Ejemplo: buscar plugin PHP para Apache:

{% raw %}
```bash
apt search apache php
```
{% endraw %}

* Ver información detallada de un paquete:

{% raw %}
```bash
apt-cache show libapache2-mod-php
```
{% endraw %}

* Nota: `libapache2-mod-php` depende de PHP.
* Repositorio oficial de paquetes: [Ubuntu Packages](http://packages.ubuntu.com/)

### Managing package repositories

* Ubuntu no ofrece todos los paquetes por defecto. Algunas aplicaciones requieren **compilar desde fuente** o **agregar repositorios adicionales**.

#### Adding additional repositories

* Lista principal de repositorios: `/etc/apt/sources.list`
* Archivos adicionales: `/etc/apt/sources.list.d/*.list`
* Formato de línea típica:

{% raw %}
```text
deb http://us.archive.ubuntu.com/ubuntu/ focal main restricted
```
{% endraw %}

* Significado de los campos:

  * `deb` o `deb-src`: binario o fuente.
  * `focal`: codename de Ubuntu (20.04).
  * Componente: `main` (oficial, libre), `restricted` (licencia limitada), `universe` (comunidad), `multiverse` (no libre/no soportado).
* Método recomendado: crear un archivo `.list` en `/etc/apt/sources.list.d/` para agregar repositorios; eliminarlo elimina el repositorio.
* Clave de seguridad: algunas veces se requiere instalar **GnuPG key** para verificar paquetes firmados.

{% raw %}
```bash
sudo apt update
```
{% endraw %}

* Actualiza la caché local de paquetes disponibles.

#### Adding Personal Package Archives (PPAs)

* PPAs: pequeños repositorios que generalmente contienen una sola aplicación.
* Útiles cuando el proveedor no ofrece repositorio propio o solo código fuente.
* Riesgo: si el PPA deja de estar activo, no habrá más actualizaciones de seguridad.
* Ejemplo de agregar un PPA:

{% raw %}
```bash
sudo apt-add-repository ppa:username/myawesomesoftware-1.0
```
{% endraw %}

* Automatiza la adición del archivo de repositorio y su clave; eliminar archivo desinstala el PPA.
* Información adicional: [Launchpad PPAs](https://launchpad.net/ubuntu/+ppas)

{% raw %}
```
```
{% endraw %}

### Adding Personal Package Archives (PPAs)
- PPAs: pequeños repositorios que usualmente contienen una sola aplicación.  
- Útiles cuando un proveedor no ofrece repositorio propio o solo proporciona código fuente.  
- Riesgo: si el PPA deja de estar disponible, se detienen las actualizaciones de seguridad.  
- Permite acceso a aplicaciones no disponibles en repositorios predeterminados o versiones más recientes.  
- Comando para agregar un PPA:
{% raw %}
```bash
sudo apt-add-repository ppa:username/myawesomesoftware-1.0
```
{% endraw %}`

* Automatiza la creación del archivo en `/etc/apt/sources.list.d` y la instalación de la clave.
* Para desinstalar un PPA: simplemente eliminar el archivo del directorio.
* Más información: [Launchpad PPAs](https://launchpad.net/ubuntu/+ppas)

### Backing up and restoring Debian packages

* Exportar lista de paquetes instalados:

{% raw %}
```bash
dpkg --get-selections > packages.list
```
{% endraw %}

* Permite reinstalar paquetes en un servidor limpio o similar.
* Actualizar índice de paquetes:

{% raw %}
```bash
sudo apt update
```
{% endraw %}

* Usar `dselect` para restaurar paquetes:

{% raw %}
```bash
sudo apt install dselect
which dselect  # comprobar ubicación
sudo dselect update
sudo dpkg --set-selections < packages.list
sudo apt-get dselect-upgrade
```
{% endraw %}

* Nota: `dselect-upgrade` funciona solo con `apt-get`.
* Confirmar cambios instalará los paquetes faltantes según la lista.

### Cleaning up orphaned APT packages

* Paquetes huérfanos: dependencias de paquetes eliminados que no se borran automáticamente.
* Eliminar paquetes huérfanos:

{% raw %}
```bash
sudo apt autoremove
```
{% endraw %}

* Precaución: no eliminar kernels antiguos hasta verificar que el nuevo funciona correctamente.
* Si reinstalas un paquete marcado para auto-removal, no aparecerá como huérfano en el futuro.

### Hardware Enablement (HWE) Updates

* HWE stack: incluye kernel y drivers más recientes en releases LTS.
* Backport de compatibilidad de la última versión no-LTS, para aprovechar nuevo hardware.
* Instalación de Ubuntu Server con opción HWE: el sistema incluirá estos paquetes para mejor compatibilidad y soporte de hardware reciente.

{% raw %}
```
```
{% endraw %}

## 04-Managing Software Packages — Resumen

## Key Concepts
- **Long-Term Support (LTS)**: versiones de Ubuntu con soporte extendido.  
- **Stable Release Updates (SRUs)**: actualizaciones estables para correcciones de errores y seguridad.

## Package Types
- **Debian packages**: utilizados por Ubuntu y Debian; gestionados con `apt` y `dpkg`.  
- **Snap packages**: formato universal independiente del sistema; incluye todas las dependencias; útil para aplicaciones GUI y non-GUI.  
- Otros formatos: Flatpak, AppImage (generalmente para escritorio, no para servidores).

## Managing Debian packages with apt
- Instalar paquetes:
{% raw %}
```bash
sudo apt install openssh-server
sudo apt install <package1> <package2> <package3>
sudo apt install apache2
```
{% endraw %}`

- `apt-get install` funciona de forma similar a `apt install`.
- Opciones útiles:
    - `--install-suggests`: instala paquetes sugeridos (puede incluir muchos extras).
    - `-y`: asume "sí" a la confirmación, automatizando la instalación.

