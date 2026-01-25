---
date: 2023-03-31 01:29
title: Linux Shell Scripting
tags:
  - Linux
status: 🌟
Parent: "[[Area-Sistemas]]"
keywords:
source:
cssclasses:
  - hide-embedded-header1
categories:
  - Linux
public_note: "true"
category: Linux
---
# Linux Shell Scripting
`$= dv.current().file.tags.join(" ")`

- [Linux](/sistemas/linux/)
- [bash](/desarrollo%20multiplataforma/bash/)
- [Linux kernel](/linux/linux-kernel/)
- [bash](/desarrollo%20multiplataforma/bash/)

## Fundamentos de Shell Scripting
El **Shell scripting** es una forma de automatizar tareas en sistemas Linux utilizando scripts que contienen comandos de shell. Permite:
- Automatizar tareas repetitivas.
- Administrar sistemas de manera eficiente.
- Integrar herramientas y utilidades del sistema.
- Facilitar la gestión de usuarios, archivos y procesos.

### Tipos de Shell
Linux soporta varios shells, los más comunes son:
- **Bash (Bourne Again Shell)**: Predeterminado en la mayoría de distribuciones Linux.
- **sh (Bourne Shell)**: Shell original de Unix, compatible con scripts básicos.
- **csh / tcsh**: Inspirados en C, útiles para usuarios que prefieren sintaxis tipo C.
- **ksh (Korn Shell)**: Combina características de Bourne y C shell, buena para scripting avanzado.
- **zsh**: Shell moderno con funcionalidades mejoradas, como autocompletado y globbing avanzado.

### Estructura básica de un script
Un script de shell tiene:
- **Shebang**: Línea inicial que indica qué shell ejecutar.
{% raw %}
```bash
#!/bin/bash
```
{% endraw %}`

* **Comentarios**: Líneas que comienzan con `#`.
* **Comandos y lógica**: Comandos Linux, condicionales, bucles y funciones.

Ejemplo mínimo:

{% raw %}
```bash
#!/bin/bash
# Este script imprime un mensaje
echo "Hola, mundo"
```
{% endraw %}

## Variables y Tipos de Datos

* Variables simples:

{% raw %}
```bash
nombre="Eduardo"
echo $nombre
```
{% endraw %}

* Variables de entorno:

{% raw %}
```bash
export PATH=$PATH:/mi/ruta
```
{% endraw %}

* Variables especiales:

  * `$0` - Nombre del script.
  * `$1, $2,...` - Parámetros pasados al script.
  * `$#` - Número de argumentos.
  * `$?` - Código de salida del último comando.
  * `$$` - PID del script actual.

## Operadores y Expresiones

* **Aritméticos**: `+`, `-`, `*`, `/`, `%`
* **Comparación**: `-eq`, `-ne`, `-lt`, `-le`, `-gt`, `-ge`
* **Condicionales**: `&&`, `||`
* **Cadenas**:

{% raw %}
```bash
if [ "$var1" = "$var2" ]; then
	echo "Iguales"
fi
```
{% endraw %}

## Estructuras de Control

### Condicionales

{% raw %}
```bash
if [ condición ]; then
	comandos
elif [ condición ]; then
	comandos
else
	comandos
fi
```
{% endraw %}

### Bucles

* **for**:

{% raw %}
```bash
for i in 1 2 3; do
	echo $i
done
```
{% endraw %}

* **while**:

{% raw %}
```bash
while [ condición ]; do
	comandos
done
```
{% endraw %}

* **until**:

{% raw %}
```bash
until [ condición ]; do
	comandos
done
```
{% endraw %}

## Funciones

Definir y llamar funciones:

{% raw %}
```bash
mi_funcion() {
	echo "Esto es una función"
}
mi_funcion
```
{% endraw %}

## Manejo de Archivos y Directorios

* Crear, mover y eliminar:

{% raw %}
```bash
mkdir directorio
mv archivo1 archivo2
rm archivo
```
{% endraw %}

* Leer archivos:

{% raw %}
```bash
while read linea; do
	echo $linea
done < archivo.txt
```
{% endraw %}

* Redirecciones:

  * `>` sobrescribe archivo
  * `>>` añade al final
  * `<` entrada desde archivo
  * `|` tuberías entre comandos

## Entrada y Salida

* **Lectura de usuario**:

{% raw %}
```bash
read -p "Ingrese su nombre: " nombre
echo "Hola $nombre"
```
{% endraw %}

* **Redirecciones y pipes**:

{% raw %}
```bash
ls -l > listado.txt
cat listado.txt | grep "doc"
```
{% endraw %}

## Expresiones Regulares y Grep

* Buscar patrones en archivos:

{% raw %}
```bash
grep "patrón" archivo.txt
grep -i "patrón" archivo.txt  # Ignora mayúsculas/minúsculas
```
{% endraw %}

* Uso con sed y awk para manipulación avanzada:

{% raw %}
```bash
sed 's/viejo/nuevo/g' archivo.txt
awk '{print $1, $3}' archivo.txt
```
{% endraw %}

## Depuración de Scripts

* Comprobar errores:

{% raw %}
```bash
bash -n script.sh  # Sintaxis
bash -x script.sh  # Ejecución paso a paso
```
{% endraw %}

* Manejo de errores:

{% raw %}
```bash
comando || echo "Falló el comando"
```
{% endraw %}

## Buenas Prácticas

* Usar comentarios claros y descriptivos.
* Indentar correctamente bucles y condicionales.
* Validar entradas de usuario.
* Manejar errores y códigos de salida.
* Reutilizar código mediante funciones.

## Argumentos Avanzados y Opciones de Scripts
- Parseo de opciones con `getopts`:
{% raw %}
```bash
#!/bin/bash
while getopts "f:v" opt; do
	case $opt in
		f) archivo="$OPTARG" ;;
		v) verbose=1 ;;
		*) echo "Uso: $0 [-f archivo] [-v]"; exit 1 ;;
	esac
done
echo "Archivo: $archivo, Verbose: $verbose"
```
{% endraw %}`

- Parámetros posicionales y valores por defecto:
    

{% raw %}
```bash
nombre=${1:-"Usuario"}
echo "Hola $nombre"
```
{% endraw %}

## Arrays y Manejo Avanzado de Variables

- Arrays unidimensionales:
    

{% raw %}
```bash
frutas=("manzana" "banana" "cereza")
echo ${frutas[1]}  # banana
```
{% endraw %}

- Arrays asociativos:
    

{% raw %}
```bash
declare -A edades
edades=(["Juan"]=30 ["Ana"]=25)
echo ${edades["Ana"]}
```
{% endraw %}

- Iteración sobre arrays:
    

{% raw %}
```bash
for fruta in "${frutas[@]}"; do
	echo $fruta
done
```
{% endraw %}

- Expansión de variables y manipulación de strings:
    

{% raw %}
```bash
texto="Hola Mundo"
echo ${texto:0:4}   # Hola
echo ${texto//o/0}  # H0la Mund0
```
{% endraw %}

## Trap y Manejo de Señales

- Capturar señales y ejecutar limpieza:
    

{% raw %}
```bash
trap "echo 'Script interrumpido'; exit" SIGINT SIGTERM
```
{% endraw %}

- Uso en scripts largos para liberar recursos:
    

{% raw %}
```bash
trap "rm /tmp/archivo_tmp; exit" EXIT
```
{% endraw %}

## Subshells y Procesos en Segundo Plano

- Ejecutar comandos en segundo plano:
    

{% raw %}
```bash
comando &
pid=$!
wait $pid
echo "Proceso $pid finalizado"
```
{% endraw %}

- Diferencia entre subshell y shell actual:
    

{% raw %}
```bash
( cd /tmp; ls )  # subshell, directorio no cambia fuera del paréntesis
cd /tmp          # shell actual
```
{% endraw %}

- Redirecciones avanzadas:
    

{% raw %}
```bash
comando > salida.txt 2> errores.txt
comando &> todo.txt
```
{% endraw %}

## Scripting Modular y Librerías

- Reutilizar scripts con `source`:
    

{% raw %}
```bash
source funciones.sh
mi_funcion
```
{% endraw %}

- Modularización permite mantener código limpio y organizado.
    

## Automatización Avanzada y Cron Jobs

- Programar tareas con cron:
    

{% raw %}
```bash
crontab -e
# Ejemplo: Ejecutar script.sh cada día a las 2am
0 2 * * * /ruta/script.sh
```
{% endraw %}

- Usar `at` para tareas puntuales:
    

{% raw %}
```bash
echo "/ruta/script.sh" | at now + 1 minute
```
{% endraw %}

- Logging de tareas automatizadas:
    

{% raw %}
```bash
./script.sh >> /var/log/script.log 2>&1
```
{% endraw %}

## Seguridad y Permisos en Scripts

- Cambiar permisos de ejecución:
    

{% raw %}
```bash
chmod +x script.sh
```
{% endraw %}

- Ejecutar comandos con sudo dentro de scripts:
    

{% raw %}
```bash
sudo apt update
```
{% endraw %}

- Validación de usuario y permisos:
    

{% raw %}
```bash
if [ "$EUID" -ne 0 ]; then
	echo "Ejecute como root"
	exit 1
fi
```
{% endraw %}

- Evitar inyección de comandos:
    

{% raw %}
```bash
usuario=$(echo "$1" | tr -cd '[:alnum:]')
```
{% endraw %}


# libro Linux Command Line and Shell Scripting Bible, 3rd Edition - 2015 (hasta el 10)

## Starting with [Linux kernel](/linux/linux-kernel/)

### System Memory Management
- **Virtual memory**: combination of physical memory and swap space; the kernel handles swapping pages in and out.
- Memory is divided into blocks called **pages**.

### Software Program Management
- **First process**: `init` process, manages virtual memory and system initialization.
- Process table: `/etc/inittab`
- Scripts for starting/stopping applications at boot:
	- `/etc/init.d`
	- Ubuntu: scripts executed via `/etc/rcX.d` folders (`X` = **run level**)
- **Run levels**:
	- 1: single-user mode, emergency
	- 3: standard init, network, software
	- 5: graphical X Window, login with GUI
- View processes: `ps`

### Hardware Management
- Driver code inserted inside the kernel:
	- Compiled in the kernel
	- Added as modules without recompilation
- Hardware devices represented as **device files**:
	- Character: one character at a time (e.g., modems, terminals)
	- Block: large blocks at a time (e.g., drives)
	- Network: packets for network devices (network cards, loopbacks)
- Linux creates **nodes** for each device:
	- Device node enables communication
	- Identified by **major** and **minor device numbers**
		- Major: groups similar devices
		- Minor: identifies specific devices within the group

### Filesystem Management
- Filesystems: ext3, UFS, XFS...
- **Virtual File System (VFS)**:
	- Standard interface for kernel communication with any filesystem
	- Caches information in memory as filesystems are mounted and used

## The GNU Utilities

### Core GNU Utilities
- `coreutils` package: handling files, text manipulation, process management

### Shell
- The shell passes program names to the kernel to start execution.
- **Shell scripts**: group of commands for automation
- Common shells: `ash`, `korn`, `tcsh`, `zsh`, `bash`

## The Linux Desktop Environment

### The X Window System
- Display servers: `X.org`, Mir, Wayland
- Configuration: X Window config files
- Provides graphical environment: KDE, GNOME, Unity, Xfce

### Linux Distributions
- Core, Specialized, LiveCD
## Getting to the Shell

### Command Line Interface (CLI)
- Provides text-based access to the system.
- Can be accessed via **virtual consoles** or **terminal emulators**.

### Linux Graphical Desktop Environment Components
- **Client**: application requesting display
- **Display Server**: handles input/output to display and devices
- **Window Manager**: controls placement and appearance of windows
- **Widgets Library**: provides GUI elements like buttons, menus, sliders

### Accessing CLI via Linux Console Terminal
- Commands executed directly on the system.
- **Virtual consoles (tty)**: switch with `Ctrl+Alt+F1` ... `F7`.
- Terminal customization with `setterm`:
{% raw %}
```bash
setterm -inversescreen on
setterm -background white
setterm -foreground black
setterm -reset
setterm -store
```
{% endraw %}`

### Accessing CLI via Graphical Terminal Emulation

* Popular emulators: GNOME Terminal, Konsole, Yakuake, xterm.
* Provide GUI window for command execution and multiple tabs.

### GNOME Terminal Emulator

* Open terminal: `Ctrl+Alt+T` (Ubuntu Unity)
* Open new window: `Shift+Ctrl+N`
* Open new tab: `Shift+Ctrl+T`
* Close tab: `Shift+Ctrl+W`
* Close window: `Shift+Ctrl+Q`
* Shift+Ctrl+C / Shift+Ctrl+V for copy/paste
* Resize text: `Ctrl+0` (normal), `Ctrl++` (zoom in), `Ctrl+-` (zoom out)
* Find: `Shift+Ctrl+F`, Find Previous: `Shift+Ctrl+G`
* Next tab: `Ctrl+Page Down`
* Reset/clear via menu options
* Profiles and save options: typically `None` by default

### Konsole Terminal Emulator

* KDE default terminal emulator
* Supports tabs, profiles, session management
* Advanced customization for colors, fonts, and shortcuts

### xterm Terminal Emulator

* Lightweight, standard X Window terminal
* Minimal features but highly compatible
* Useful for remote sessions and scripting environments
## Basic Bash Shell Commands

### Starting the Shell
- **ID configuration** and system users:
	- User accounts listed in `/etc/passwd`
	- Example entry: `christine:x:501:501:Christine Bresnahan:/home/christine:/bin/bash`

### Shell Prompt
- Format: `christine@server01:~$`

### Bash Manual
- Access manual pages: `man xterm`
- Navigation in pager: spacebar, enter
- Search manual: `man -k keyword`
- Manual sections:
	1. Executable programs or shell commands  
	2. System calls  
	3. Library calls  
	4. Special files  
	5. File formats and conventions  
	6. Games  
	7. Overviews, conventions, and miscellaneous  
	8. Super user and system administration commands  
	9. Kernel routines
- Specify section: `man section# topic`  
	- Examples: `man 1 hostname`, `man 7 hostname`, `man 3 intro`
- Info pages: `info info`
- Command help: `hostname --help`

## Navigating the Filesystem
- Linux uses a **virtual directory** structure, root `/` as base.
- **Special directories**:
	- `/bin`: essential binaries  
	- `/boot`: boot files  
	- `/dev`: device nodes  
	- `/etc`: system configuration files  
	- `/home`: user directories  
	- `/lib`: system and application libraries  
	- `/media`, `/mnt`: mount points for removable media  
	- `/opt`: optional third-party software  
	- `/proc`: process and hardware info  
	- `/root`: root user home  
	- `/sbin`: admin binaries  
	- `/run`: runtime data  
	- `/srv`: service data  
	- `/sys`: system hardware info  
	- `/tmp`: temporary files  
	- `/usr`: user binaries and utilities  
	- `/var`: variable data (logs, spool files)
- [Filesystem Hierarchy Standard](https://www.pathname.com/fhs/)

### Traversing Directories
- Absolute paths: `/usr/bin`
- Relative paths: `Documents/`
- Commands:
{% raw %}
```bash
cd /var/log
cd .
cd ..
cd ../Downloads
cd ../../etc
pwd
```
{% endraw %}`

## Listing Files and Directories

* `ls` command variations:

  * `ls -F`: append `*` for executables, `/` for directories
  * `ls -a`: show hidden files
  * `ls -R`: recursive
  * `ls -l`: detailed listing
* **Pattern matching (globbing)**:

  * `?`: one character
  * `*`: any number of characters
  * `[a-i]`: character range
  * `[!a]`: exclude character

{% raw %}
```bash
ls -l my_scr?pt
ls -l my*
ls -l f[a-i]ll
ls -l f[!a]ll
```
{% endraw %}

## Handling Files

### Creating Files

{% raw %}
```bash
touch test_one
touch -a test_one
ls -l --time=atime test_one
```
{% endraw %}

### Copying Files

{% raw %}
```bash
cp source destination
cp -i test_one test_two
cp -R Scripts/ Mod_Scripts
cp *script Mod_Scripts/
```
{% endraw %}

### Tab Auto-Complete

{% raw %}
```bash
ls really*
cp really_ridiculously_long_file_name Mod_Scripts/
```
{% endraw %}

### Linking Files

* **Symbolic link**: `ln -s data_file sl_data_file`
* **Hard link**: `ln code_file hl_code_file`
* Check inode: `ls -i *data_file`

### Renaming/Moving Files

{% raw %}
```bash
mv fall fzll
mv fzll Pictures/
mv Mod_Scripts Old_Scripts
```
{% endraw %}

* Options: `-i` to prompt before overwrite

### Deleting Files

{% raw %}
```bash
rm -i fall
rm -i f?ll
rm -f file
```
{% endraw %}

## Managing Directories

* Create directories:

{% raw %}
```bash
mkdir New_Dir
mkdir -p New_Dir/Sub_Dir/Under_Dir
```
{% endraw %}

* Delete directories:

{% raw %}
```bash
rmdir New_Dir        # empty only
rm -ri My_Dir
rm -rf Small_Dir
tree Small_Dir
```
{% endraw %}

## Viewing File Contents

### File Type

{% raw %}
```bash
file my_file
file sl_data_file
file /bin/ls
```
{% endraw %}

### View Entire File

{% raw %}
```bash
cat test1
cat -n test1    # number lines
cat -b test1
cat -T test1    # show tabs
```
{% endraw %}

### Paginated Viewing

* `more /etc/bash.bashrc`
* `less /etc/bash.bashrc` (can scroll without loading full file)

### Viewing Parts of a File

* Tail:

{% raw %}
```bash
tail log_file        # last 10 lines
tail -n 2 log_file
tail -f log_file     # real-time monitoring
```
{% endraw %}

* Head:

{% raw %}
```bash
head log_file        # first 10 lines
head -5 log_file
```
{% endraw %}

{% raw %}
```
```
{% endraw %}

## More Bash Shell Commands

### Monitoring Programs with `ps`
- **Peeking at processes** using `ps` command.
- **Unix-style options**:
	- `A` - all processes  
	- `-N` - inverse selection  
	- `a` - all except session headers/without terminal  
	- `d` - all except session headers  
	- `-e` - all processes  
	- `-C cmdlist` - processes in list  
	- `-G grplist` - processes with group ID  
	- `-U userlist` - processes owned by users  
	- `-p pidlist` - processes by PID  
	- `-t ttylist` - processes by terminal  
	- `-u userlist` - processes by effective user ID  
	- `-f` - full format listing  
	- `-l` - long listing  
	- `-H` - hierarchical format  
	- `-L` - show threads
- Example: `ps -ef` lists all running processes.
- Columns: PID, UID, PPID, C, STIME, TTY, TIME, CMD
- Process states:
	- `O`: running on processor  
	- `S`: sleeping  
	- `R`: runnable  
	- `Z`: zombie  
	- `T`: stopped
- BSD-style parameters:
	- `a`, `x`, `r`, `T`, `p`, `u`, `v`, `f`, `h` and more.
- GNU long options:
	- `--forest` - hierarchical process listing  
	- `--pid`, `--ppid`, `--sid`, `--tty`, `--user`  
	- `--format format` - custom columns  
	- `--sort order` - sort columns  
	- `--cols`, `--lines` - adjust terminal display  
	- `--version`, `--help`, `--info`

### Real-Time Process Monitoring with `top`
- **Command**: `top`  
- Displays:
	- System uptime, number of users, load average  
	- CPU and memory usage
- Process columns:
	- `PID` - process ID  
	- `USER` - owner  
	- `PR` - priority  
	- `NI` - nice value  
	- `VIRT` - virtual memory  
	- `RES` - physical memory  
	- `SHR` - shared memory  
	- `S` - process status (D, R, S, T, Z)  
	- `%CPU` - CPU usage  
	- `%MEM` - memory usage  
	- `TIME+` - total CPU time used  
	- `COMMAND` - command line
- Interactive commands:
	- `f` - select fields  
	- `d` - change polling interval  
	- `q` - exit
## Stopping Processes

### Linux Process Signals
Processes communicate using **signals**:
- `1 HUP` - Hang up  
- `2 INT` - Interrupt  
- `3 QUIT` - Stop running  
- `9 KILL` - Unconditionally terminate  
- `11 SEGV` - Segment violation  
- `15 TERM` - Terminate politely  
- `17 STOP` - Stop unconditionally, does not terminate  
- `18 TSTP` - Stop/pause, continues in background  
- `19 CONT` - Resume after STOP/TSTP  

### kill Command
- Sends signals to processes by PID.
- Default signal: `TERM`
{% raw %}
```bash
kill 3940
kill -s HUP 3940   # specify another signal
```
{% endraw %}`

* Must be owner of the process or root.
* Use `ps` or `top` to verify results.

### killall Command

* Sends signals by **process name** instead of PID.
* Supports wildcards:

{% raw %}
```bash
killall http*   # kills all processes starting with 'http'
```
{% endraw %}

* Use with caution; may terminate multiple critical processes.

## Monitoring Disk Space

### mount Command

* Mount removable media:

{% raw %}
```bash
mount
mount -t vfat /dev/sdb1 /media/disk
```
{% endraw %}

* Parameters:

  * `-a`: mount all from `/etc/fstab`
  * `-f`: simulate mount
  * `-v`: verbose
  * `-r`: read-only
  * `-w`: read-write
  * `-L label`: mount by label
  * `-U uuid`: mount by UUID
  * `-o options`: comma-separated options (e.g., `ro`, `rw`, `user`, `loop`, `check=none`)

### unmount Command

* Remove mounted media:

{% raw %}
```bash
umount [directory | device]
umount /home/rich/mnt
```
{% endraw %}

### df Command

* Show disk space usage per filesystem:

{% raw %}
```bash
df
df -h   # human-readable (M, G)
```
{% endraw %}

* Displays: device, total blocks, used, available, usage %, mount point.

### du Command

* Show disk usage per directory:

{% raw %}
```bash
du
du -c   # grand total
du -h   # human-readable
du -s   # summary per argument
```
{% endraw %}

* Lists all files, directories, subdirectories with block usage.

{% raw %}
```
```
{% endraw %}

## Working with Data Files

### Sorting Data
- View file contents: `cat file1`
- Sort alphabetically: `sort file1`
- Sort numerically: `sort -n file2`
- Sort by month: `sort -M file3`
- Sort by timestamp: `sort file3`

- **Sort parameters**:
	- `-b` : ignore leading blanks  
	- `-c, --check` : check if already sorted  
	- `-d` : dictionary order (alphanumeric only)  
	- `-f` : ignore case  
	- `-g` : general numeric sort  
	- `-i` : ignore non-printing characters  
	- `-k POS1[,POS2]` : sort by field positions  
	- `-M` : month sort  
	- `-m` : merge sorted files  
	- `-n` : numeric sort  
	- `-o file` : write output to file  
	- `-R` : random sort  
	- `--random-source=FILE` : source for -R  
	- `-r` : reverse sort  
	- `-S SIZE` : buffer size  
	- `-s` : stable sort  
	- `-T DIR` : temporary working directory  
	- `-t SEP` : field separator  
	- `-u` : unique  
	- `-z` : zero-terminated lines

- **Example**: Sort `/etc/passwd` numerically by UID:
{% raw %}
```bash
sort -t ':' -k 3 -n /etc/passwd
```
{% endraw %}`

* Reverse numerical sort of directory sizes:

{% raw %}
```bash
du -sh * | sort -nr
```
{% endraw %}

### Searching for Data with grep

* Syntax: `grep [options] pattern [file]`

{% raw %}
```bash
grep three file1          # search for "three"
grep t file1              # search for "t"
grep -v t file1           # reverse search
grep -n t file1           # show line numbers
grep -c t file1           # count matching lines
grep -e t -e f file1      # multiple patterns
grep [tf] file1           # regex character class
```
{% endraw %}

* **Variants**:

  * `egrep` : POSIX extended regex
  * `fgrep` : fixed string search, no regex

### Compressing Data

* Utilities:

  * `bzip2` (.bz2), `compress` (.Z), `gzip` (.gz), `zip` (.zip)
* Example:

{% raw %}
```bash
gzip myprog
gzcat myprog.gz
gunzip myprog.gz
gzip my*
```
{% endraw %}

### Archiving Data with tar

* Syntax: `tar function [options] object1 object2 ...`

* **Functions**:

  * `-A, --concatenate` : append archive to another archive
  * `-c, --create` : create archive
  * `-d, --diff` : check differences
  * `--delete` : remove from archive
  * `-r, --append` : append files
  * `-t, --list` : list contents
  * `-u, --update` : update files if newer
  * `-x, --extract` : extract files

* **Options**:

  * `-C dir` : change directory
  * `-f file` : archive filename
  * `-j` : bzip2 compression
  * `-p` : preserve permissions
  * `-v` : verbose
  * `-z` : gzip compression

* **Examples**:

{% raw %}
```bash
tar -cvf test.tar test/ test2/   # create archive
tar -tf test.tar                 # list contents
tar -xvf test.tar                # extract archive
tar -zxvf filename.tgz           # extract gzipped tar file
```
{% endraw %}

{% raw %}
```
```
{% endraw %}

## Understanding the Shell

### Shell Types
- User default shell is defined in `/etc/passwd` field #7.
{% raw %}
```bash
cat /etc/passwd
Christine:x:501:501:Christine B:/home/Christine:/bin/bash
```
{% endraw %}`

* Common shells:

  * `/bin/bash` - default interactive shell
  * `/bin/sh` - default system shell
  * `/bin/tcsh`, `/bin/dash`, `/bin/csh` - other variants
* Start shell via virtual console or terminal emulator.
* Check shell type: `ls -lF /bin/bash`

### Parent and Child Shell Relationships

* Parent shell spawns **child shells** or **subshells**.
* Child shell inherits some parent environment variables.
* Subshell creation:

{% raw %}
```bash
bash          # new shell instance
(ps --forest) # view nested shells
```
{% endraw %}

* `$BASH_SUBSHELL` indicates subshell depth:

  * `0` - no subshell
  * `1+` - subshell

### Bash Command Line Parameters

* `-c string` : execute commands from string
* `-i` : interactive shell
* `-l` : login shell
* `-r` : restricted shell
* `-s` : read commands from standard input

### Command Grouping and Subshells

* `(command1; command2)` creates a subshell
* `{ command1; command2; }` runs commands in current shell
* Grandchild subshells can be created via nested parentheses.

### Background Processes

* Execute without blocking CLI:

{% raw %}
```bash
sleep 3000 &
jobs
jobs -l
```
{% endraw %}

* Background process info: job number, PID, status, command.
* Process lists can also run in background:

{% raw %}
```bash
(sleep 2; echo $BASH_SUBSHELL; sleep 2)&
```
{% endraw %}

### Co-Processing

* `coproc` spawns a background subshell:

{% raw %}
```bash
coproc sleep 10
coproc My_Job { sleep 10; }
coproc (sleep 10; sleep 2)
```
{% endraw %}

* Check with `jobs` and `ps --forest`.

### External vs Built-In Commands

* **External commands**: reside outside shell, create child process on execution.

{% raw %}
```bash
ps -f
which ps
type -a ps
ls -l /bin/ps
```
{% endraw %}

* **Built-in commands**: part of the shell, no child process needed.

{% raw %}
```bash
type -a echo
which echo
type -a pwd
which pwd
```
{% endraw %}

* Built-ins improve efficiency for frequent operations.

### Command History

* View and recall previous commands:

{% raw %}
```bash
history
!!          # last command
!20         # recall command #20
history -a  # append session history
history -n  # read new history
cat ~/.bash_history
```
{% endraw %}

* Control number of commands saved: `HISTSIZE`.

### Command Aliases

* Create shortcuts for frequently used commands:

{% raw %}
```bash
alias li='ls -li'
alias -p         # list active aliases
```
{% endraw %}

* Aliases last only for the current shell session.

{% raw %}
```
```
{% endraw %}

## Environment Variables

### Overview
- Environment variables store information about the shell session and working environment.
- Can be **global** (visible to shell and child subshells) or **local** (available only in the shell that defines them).
- Used for persistent data needed by processes, scripts, and commands.

### Viewing Environment Variables
- Show all variables: 
{% raw %}
```bash
env
printenv
set   # includes local and global variables
```
{% endraw %}`

* Show specific variable:

{% raw %}
```bash
printenv HOME
echo $HOME
ls $HOME
```
{% endraw %}

### Global Variables

* Accessible by the shell session and any child subshells.
* Examples: `PATH`, `HOME`, `USER`, `SHELL`.
* Example usage:

{% raw %}
```bash
echo $PATH
export MYVAR="Hello World"
bash          # child shell inherits MYVAR
echo $MYVAR
```
{% endraw %}

### Local Variables

* Only available in the shell process where they are defined.
* Do not propagate to child processes or subshells.
* Define a local variable:

{% raw %}
```bash
MYLOCAL="Temporary Value"
echo $MYLOCAL
```
{% endraw %}

### Using Environment Variables in Scripts

* Access variables:

{% raw %}
```bash
echo "Home directory is $HOME"
echo "Script running as $USER"
```
{% endraw %}

* Modify variables for session:

{% raw %}
```bash
export PATH=$PATH:/custom/bin
```
{% endraw %}

### Variable Arrays

* Bash supports arrays for storing multiple values:

{% raw %}
```bash
myarray=(one two three)
echo ${myarray[0]}    # output: one
echo ${myarray[@]}    # output all elements
```
{% endraw %}

### Environment Files

* Global shell environment configuration:

  * `/etc/profile`
  * `/etc/bash.bashrc`
* User-specific configuration:

  * `~/.bash_profile`
  * `~/.bashrc`
  * `~/.profile`
* Files are sourced at shell startup to set environment variables.

{% raw %}
```
```
{% endraw %}

## User-Defined Environment Variables

### Creating Local Variables
- Assign a value:
{% raw %}
```bash
my_variable=Hello
echo $my_variable        # Hello
```
{% endraw %}`

* For values with spaces, enclose in quotes:

{% raw %}
```bash
my_variable="Hello World"
echo $my_variable        # Hello World
```
{% endraw %}

* **Important:** No spaces around `=` when defining variables.

### Scope of Local Variables

* Local variables are **available only in the shell process where they are defined**.
* They do not propagate to child shells:

{% raw %}
```bash
my_variable="Hello World"
bash                     # start a child shell
echo $my_variable         # no output
exit
echo $my_variable         # Hello World
```
{% endraw %}

### Creating Global Environment Variables

* Export a variable to make it **visible to child processes**:

{% raw %}
```bash
my_variable="I am Global now"
export my_variable
echo $my_variable         # I am Global now

bash                      # child shell
echo $my_variable         # I am Global now
```
{% endraw %}

* Changing a global variable in a child shell does **not** affect the parent shell:

{% raw %}
```bash
my_variable="I am Global now"
export my_variable
bash
my_variable="Changed in child"
export my_variable
exit
echo $my_variable         # I am Global now
```
{% endraw %}

### Removing Variables

* Use `unset` to remove variables:

{% raw %}
```bash
echo $my_variable
unset my_variable
echo $my_variable         # no output
```
{% endraw %}

* Unsetting in a child shell does **not** affect the parent shell:

{% raw %}
```bash
bash
unset my_variable
exit
echo $my_variable         # remains set in parent shell
```
{% endraw %}

### Default Bash Shell Environment Variables

* **Bourne Variables:**

  * `HOME`: User’s home directory
  * `PATH`: Directories to search for commands
  * `PS1`, `PS2`: Prompt strings
  * `IFS`: Field separator for word splitting
  * `MAIL`, `MAILPATH`: Mailbox file(s)
  * `OPTARG`, `OPTIND`: Used with `getopts`
* **Bash-Specific Variables:**

  * `BASH`, `BASH_VERSION`, `BASH_VERSINFO`
  * `BASH_SUBSHELL`: Subshell nesting level
  * `BASH_LINENO`, `BASH_SOURCE`, `BASH_REMATCH`
  * `BASHOPTS`: Enabled bash options
  * `BASHPID`: PID of current bash shell
  * `COLUMNS`, `LINES`: Terminal dimensions
  * `COMP_*`: Completion-related variables
  * `DIRSTACK`: Directory stack
  * `HIST*`: History-related variables (`HISTFILE`, `HISTSIZE`, etc.)
  * `HOSTNAME`, `HOSTTYPE`, `MACHTYPE`
  * `PPID`: Parent process ID
  * `PWD`, `OLDPWD`: Current and previous working directories
  * `RANDOM`: Pseudo-random number generator
  * `SHELL`: Path to shell executable
  * `SHLVL`: Shell nesting level
  * `TMOUT`: Timeout for `read` and `select` commands
  * `UID`, `EUID`, `GROUPS`: User and group IDs
* Not all variables are shown with `set`; use `env`, `printenv`, or `declare -p` for full listing.

### Summary

* **Local variables**: temporary, confined to shell session.
* **Global variables**: exported with `export`, inherited by child processes.
* **Child shells cannot modify parent environment variables**.
* Default variables provide system, user, shell, and session context.

## Setting and Managing Environment Variables

### PATH Environment Variable
- Defines directories the shell searches for commands and programs.
{% raw %}
```bash
echo $PATH
```
{% endraw %}`

* If a program is not in `$PATH`, you must provide its absolute path.
* Adding a directory to `$PATH`:

{% raw %}
```bash
PATH=$PATH:/home/christine/Scripts
export PATH
```
{% endraw %}

* Execute programs from anywhere:

{% raw %}
```bash
myprog
```
{% endraw %}

* Adding the current directory:

{% raw %}
```bash
PATH=$PATH:.
export PATH
```
{% endraw %}

* **Note:** Changes are temporary and last only until you log out or reboot.

---

### Locating System Environment Variables

* Environment variables are set in **startup files** based on the type of shell:

  * Login shell
  * Interactive shell (subshell)
  * Non-interactive shell (script execution)

#### Login Shell Startup Files

* System-wide:

  * `/etc/profile`
  * Files in `/etc/profile.d/*.sh` (system or application-specific)
* User-specific:

  * `$HOME/.bash_profile`
  * `$HOME/.bashrc`
  * `$HOME/.bash_login`
  * `$HOME/.profile`
* **Execution order for user-specific files**: `.bash_profile` → `.bash_login` → `.profile`

  * `.bashrc` is typically sourced from `.bash_profile` or `.bash_login`.

#### /etc/profile Examples

* **Ubuntu** uses `/etc/bash.bashrc` to store system-wide environment variables.
* **CentOS** defines functions like `pathmunge()` to manage `$PATH` and executes scripts in `/etc/profile.d/`.

---

### Interactive Shell Process

* Started with `bash` in CLI without logging in.
* Does **not** process `/etc/profile`.
* Checks for `$HOME/.bashrc`:

{% raw %}
```bash
# .bashrc example
if [ -f /etc/bashrc ]; then
  . /etc/bashrc
fi
# User-specific aliases and functions
```
{% endraw %}

* `.bashrc` provides a place for:

  * Personal command aliases
  * Custom shell functions
  * Private scripts

---

### Non-Interactive Shell Process

* Used for running shell scripts.
* `$BASH_ENV` points to a file that is sourced before script execution.
* Child shell inherits **exported parent variables**, but not local variables.
* Local variables of the parent are **not inherited** unless exported.

---

### Making Environment Variables Persistent

* **Global variables**:

  * Add to `/etc/profile` or create `.sh` files in `/etc/profile.d/`.
  * System upgrades may overwrite `/etc/profile`, so `/etc/profile.d/*.sh` is safer.
* **User-specific persistent variables**:

  * Store in `$HOME/.bashrc` for interactive shells.
  * Set `$BASH_ENV` for non-interactive shells if needed.
* **Persistent aliases**:

  * Define them in `$HOME/.bashrc`:

{% raw %}
```bash
alias ll='ls -alF'
```
{% endraw %}

---

### Summary

* `$PATH` controls command search locations.
* System and user startup files determine which environment variables are loaded.
* `.bash_profile` handles login shells; `.bashrc` handles interactive shells.
* Non-interactive shells inherit **exported** variables only.
* Use `/etc/profile.d/*.sh` or `$HOME/.bashrc` for persistent global and user-specific environment variables.

{% raw %}
```
```
{% endraw %}

## Working with Variable Arrays

### Creating and Accessing Arrays
- Define an array:
{% raw %}
```bash
mytest=(one two three four five)
```
{% endraw %}`

* Access an individual element:

{% raw %}
```bash
echo ${mytest[2]}  # Outputs: three
```
{% endraw %}

* Access all elements:

{% raw %}
```bash
echo ${mytest[*]}  # Outputs: one two three four five
```
{% endraw %}

### Modifying Arrays

* Change an element at a specific index:

{% raw %}
```bash
mytest[2]=seven
```
{% endraw %}

* Remove an individual element (leaves an empty slot):

{% raw %}
```bash
unset mytest[2]
```
{% endraw %}

* Remove the entire array:

{% raw %}
```bash
unset mytest
```
{% endraw %}

**Note:** Arrays in bash are **not portable** to all shells; use with caution in scripts that need cross-shell compatibility.

---

## Environment Variables — Summary

### Types

* **Global variables**
  Available to any child process spawned by the parent shell where they are defined.
* **Local variables**
  Only available in the shell process in which they are defined.

### Key Points

* Store information about the system, user, and session.
* Accessible in the interactive shell and shell scripts.
* Bash shell maintains **system environment variables** inherited from Unix Bourne shell.
* `$PATH`
  Defines directories to search for executable programs. Can be modified to add custom directories or the current working directory.
* Environment variables last for the duration of the shell session unless made persistent.

### Startup Files

* System-wide:

  * `/etc/profile` — contains standard environment variable definitions.
  * `/etc/profile.d/*.sh` — modular startup scripts for applications and services.
* User-specific:

  * `$HOME/.bash_profile`
  * `$HOME/.bash_login`
  * `$HOME/.profile`
* These files can be customized to include user-defined variables, aliases, and startup scripts.

### Arrays in Environment

* Arrays use **numerical indexing**.
* Can be used to store multiple values in a single variable.
* Example:

{% raw %}
```bash
mytest=(one two three four five)
echo ${mytest[0]}  # first element
echo ${mytest[*]}  # all elements
```
{% endraw %}

* Modify or unset elements as needed; whole array can be unset with:

{% raw %}
```bash
unset mytest
```
{% endraw %}

* Useful for managing lists of items, but keep portability in mind.

{% raw %}
```
```
{% endraw %}

## 07 File Permissions and User Accounts

### User Accounts and Security

### /etc/passwd
- Maps login names to UIDs (user IDs).
- Example entry:
{% raw %}
```bash
rich:x:500:500:Rich Blum:/home/rich:/bin/bash
```
{% endraw %}`

Fields in `/etc/passwd`:

1. Login name
2. Password placeholder (`x`) — actual passwords stored in `/etc/shadow`
3. UID — user ID
4. GID — primary group ID
5. Comment field — description of the user
6. Home directory
7. Default shell

* **UID 0** is always `root`.
* UIDs < 500 typically for system accounts.
* UIDs ≥ 500 for normal users.

### /etc/shadow

* Stores encrypted passwords (accessible only by `root`).
* Fields in `/etc/shadow`:

1. Login name
2. Encrypted password
3. Last password change (days since Jan 1, 1970)
4. Minimum days before password change
5. Maximum days before password change
6. Warning days before expiration
7. Days after expiration until account is disabled
8. Date when account was disabled
9. Reserved field

---

### Adding a New User

* `useradd` creates a new user and optionally their home directory.

{% raw %}
```bash
useradd -m test
```
{% endraw %}

* Default user creation values:

{% raw %}
```bash
GROUP=100
HOME=/home
INACTIVE=-1
EXPIRE=
SHELL=/bin/bash
SKEL=/etc/skel
CREATE_MAIL_SPOOL=yes
```
{% endraw %}

* Command-line parameters:

  * `-c "comment"` — user description
  * `-d home_dir` — custom home directory
  * `-e YYYY-MM-DD` — account expiration date
  * `-f inactive_days` — days after password expiration to disable
  * `-g initial_group` — primary group
  * `-G group,...` — supplementary groups
  * `-k /etc/skel` — copy skeleton files
  * `-m` — create home directory
  * `-M` — do not create home directory
  * `-n` — create group with same name as user
  * `-r` — system account
  * `-p password` — default password
  * `-s shell` — default shell
  * `-u uid` — assign UID

* Modify default new user values with `useradd -D`, e.g.:

{% raw %}
```bash
useradd -D -s /bin/tsch
```
{% endraw %}

---

### Removing Users

* `userdel username` — removes user info from `/etc/passwd`
* `userdel -r username` — removes user and home directory

---

### Modifying Users

### usermod

* Change user attributes:

  * `-c` comment
  * `-e` expiration date
  * `-g` primary group
  * `-l` login name
  * `-L` lock account
  * `-p` change password
  * `-U` unlock account

### passwd and chpasswd

* `passwd test` — change user password
* `chpasswd` — batch password update from file

{% raw %}
```bash
chpasswd < users.txt
```
{% endraw %}

### chsh, chfn, chage

* `chsh -s /bin/csh test` — change default shell
* `chfn test` — change comment field (used by `finger`)
* `chage` — manage password aging:

  * `-d` last password change
  * `-E` account expiration date
  * `-I` inactivity period after expiration
  * `-m` minimum days between changes
  * `-W` warning days before expiration
* Dates can be in `YYYY-MM-DD` format or as number of days since Jan 1, 1970.

---

### Summary

* System accounts (< UID 500) handle background processes.
* Regular users start at UID 500.
* User account info split between `/etc/passwd` (general info) and `/etc/shadow` (passwords).
* New users can have customized home directories, default shells, and group memberships.
* `usermod`, `passwd`, `chfn`, `chsh`, and `chage` allow modification of existing user accounts.
* Proper management ensures system security and controlled access.

{% raw %}
```
```
{% endraw %}

## 08 Linux Groups and File Permissions

### Using Linux Groups

### Group Concepts
- Groups provide a way to manage permissions for multiple users.
- Each group has a **GID** (group ID) and a unique name.
- System accounts: GID < 500
- Normal groups: GID ≥ 500

### /etc/group
- Structure:
{% raw %}
```bash
group_name:group_password:GID:user_list
```
{% endraw %}`

Example:

{% raw %}
```bash
rich:x:500:
```
{% endraw %}

* Group password allows temporary membership (rarely used).
* Users should **not manually edit `/etc/group`**; use `usermod`.

---

### Creating Groups

{% raw %}
```bash
groupadd shared
usermod -G shared rich
usermod -G shared test
```
{% endraw %}

* `-G` appends the group to the user's supplementary group list.
* `-g` replaces the user's default primary group.

### Modifying Groups

* `groupmod -n newname oldname` — rename a group
* `groupmod -g newGID groupname` — change GID
* Group name changes **do not affect GID or members**; permissions depend on GID.

---

### Decoding File Permissions

### Understanding `ls -l` Output

Example:

{% raw %}
```bash
-rwxrwxr-x 1 rich rich 4882 2010-09-18 13:58 myprog
```
{% endraw %}

* First character: object type

  * `-` file
  * `d` directory
  * `l` link
  * `c` character device
  * `b` block device
  * `n` network device
* Next 9 characters: permissions in triplets

  * Owner, group, others
  * `r` read, `w` write, `x` execute
  * `-` no permission

### Example Permission Breakdown

{% raw %}
```bash
-rwxrwxr-x 1 rich rich 4882 myprog
```
{% endraw %}

* Owner (`rich`): `rwx` — read, write, execute
* Group (`rich`): `rwx` — read, write, execute
* Others: `r-x` — read, execute

---

### Default File Permissions: `umask`

* Determines default permissions for newly created files and directories.
* Default full permissions:

  * File: `666` (rw-rw-rw-)
  * Directory: `777` (rwxrwxrwx)
* `umask` subtracts permissions from full default:

{% raw %}
```bash
$ umask
0022
```
{% endraw %}

* Example:

{% raw %}
```bash
umask 022
touch newfile
ls -l newfile
# -rw-r--r-- (644)
```
{% endraw %}

* For directories:

{% raw %}
```bash
mkdir newdir
ls -l newdir
# drwxr-x--x (751)
```
{% endraw %}

### Octal Representation of Permissions

* Permissions are represented as a 3-digit octal number:

{% raw %}
```
rwx = 111 = 7
rw- = 110 = 6
r-- = 100 = 4
-wx = 011 = 3
--x = 001 = 1
--- = 000 = 0
```
{% endraw %}

* Example: `rw-r-----` = `640`

---

### Changing Permissions

* `chmod` command sets permissions explicitly:

{% raw %}
```bash
chmod 755 myprog
chmod u+x,g-w,o-r file
```
{% endraw %}

* `chown` changes ownership (user and group):

{% raw %}
```bash
chown rich:sharing myprog
```
{% endraw %}

* `chgrp` changes group ownership:

{% raw %}
```bash
chgrp sharing myprog
```
{% endraw %}

---

### Summary

* Groups simplify permission management.
* Use `groupadd`, `groupmod`, `usermod` to manage groups safely.
* File permissions follow `rwx` for user, group, others.
* `umask` sets default permissions for new files/directories.
* Octal values provide a concise way to represent permissions.
* Ownership and permissions combined control access securely.

{% raw %}
```
```
{% endraw %}

## 10 Working with Editors — [VIM](/sistemas/vim/)

### Locating the Vim Editor

- `alias vi` — check if `vi` is aliased
- `which vim` — locate the vim executable
- `ls -l /usr/bin/vim` — check permissions and file type
- Vim may be linked to a smaller feature set editor, like `vim.tiny`.

### Example: Ubuntu File Links
{% raw %}
```bash
$ which vi
/usr/bin/vi
$ ls -l /usr/bin/vi
lrwxrwxrwx 1 root root 20 Apr 22 12:39 /usr/bin/vi -> /etc/alternatives/vi
$ ls -l /etc/alternatives/vi
lrwxrwxrwx 1 root root 17 Apr 22 12:33 /etc/alternatives/vi -> /usr/bin/vim.tiny
$ ls -l /usr/bin/vim.tiny
-rwxr-xr-x 1 root root 884360 Jan 2 14:40 /usr/bin/vim.tiny
$ readlink -f /usr/bin/vi
/usr/bin/vim.tiny
```
{% endraw %}`

* Installing full Vim package:

{% raw %}
```bash
sudo apt-get install vim
readlink -f /usr/bin/vi
# /usr/bin/vi now points to /usr/bin/vim.basic
```
{% endraw %}

---

### Vim Basics

* Vim operates on a **memory buffer**.
* Start Vim:

{% raw %}
```bash
vim myprog.c      # edit existing file
vim               # new buffer
```
{% endraw %}

#### Modes of Operation

1. **Normal mode** — default; navigation and commands

   * `h` left, `j` down, `k` up, `l` right
   * `PageDown` / `Ctrl+F` — scroll forward
   * `PageUp` / `Ctrl+B` — scroll backward
   * `G` — go to last line
   * `numG` — go to line `num`
   * `gg` — go to first line
   * `:` — command-line mode for save/quit

     * `:q` — quit
     * `:q!` — quit without saving
     * `:w filename` — save as `filename`
     * `:wq` — save and quit
2. **Insert mode** — insert data

   * `i` — insert before cursor
   * `a` — append after cursor
   * `A` — append at end of line
   * `R` — overwrite until Escape
   * `Escape` — return to Normal mode

---

### Editing Commands (Normal Mode)

* `x` — delete character
* `dd` — delete line
* `dw` — delete word
* `d$` — delete to end of line
* `J` — join line with next
* `u` — undo last edit
* `r char` — replace character
* Numeric prefix: perform command multiple times

  * `2x` — delete 2 characters
  * `5dd` — delete 5 lines
* `p` — paste copied/deleted text

#### Notes

* Delete key behaves like `x` in Normal mode
* Backspace may not work in Normal mode
* Use command and insert modes carefully for editing large files

---

### Navigation and Editing Summary

* **Navigation:** h, j, k, l, G, gg, PageUp/Down
* **Editing:** x, dd, dw, d$, J, u, r, R
* **Insert/Append:** i, a, A, R
* **Copy/Paste:** `y` (yank), `p` (paste)
* **File Management:** `:w`, `:q`, `:wq`, `:q!`

Vim provides a powerful and flexible editor for system administration, coding, and file manipulation, especially in environments without graphical interfaces.

