---
date: 2025-01-29 19:28
title: Supervisor
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Backend
tags:
  - supervisor
  - procesos
  - backend
  - pythoon
---
# Supervisor

## Recursos y enlaces
- [Backend](/backend/backend/)
- [python](/software%20engineering/python/)
- [Linux](/sistemas/linux/)
- Supervisor- A Process Control System — Supervisor 4.2.5 documentation

## Conceptos generales
- Supervisor es un **sistema de control de procesos** que permite gestionar aplicaciones en segundo plano de forma consistente y supervisada.
- Facilita **iniciar, detener, reiniciar y monitorear** procesos.
- Proporciona una interfaz uniforme para aplicaciones que no fueron diseñadas como servicios del sistema.
- Útil en entornos donde se ejecutan aplicaciones Python, workers, colas, scrapers o cualquier servicio "siempre activo".

## Características principales
- Control centralizado de múltiples procesos.
- Auto-reinicio cuando un proceso falla.
- Registro automático (stdout y stderr).
- Permite configurar el número de procesos, prioridades y reinicios.
- Se gestiona a través de `supervisord` (demonio) y `supervisorctl` (cliente de control).
- Arquitectura basada en archivos de configuración `.conf`.

## Procesos en segundo plano
- Los procesos en segundo plano son tareas que se ejecutan sin intervención del usuario.
	- Workers de colas (ej. Celery).
	- Scripts de scraping.
	- APIs o microservicios simples.
	- Tareas programadas que requieren persistencia.
- Supervisor permite mantenerlos vivos incluso ante errores o desconexiones de terminal.

## Instalación
- En la mayoría de distribuciones Linux:
	- `sudo apt install supervisor`
- En entornos Python:
	- `pip install supervisor`

## Archivos de configuración
- El archivo principal suele ser:
	- `/etc/supervisor/supervisord.conf`
- Las configuraciones individuales se colocan en:
	- `/etc/supervisor/conf.d/*.conf`
- También posible usar configuraciones locales para proyectos.

## Configuración básica de un programa
### Ejemplo de configuración
{% raw %}
```ini
[program:mi_app]
command=/usr/bin/python3 /ruta/app.py
directory=/ruta
autostart=true
autorestart=true
stderr_logfile=/var/log/mi_app.err.log
stdout_logfile=/var/log/mi_app.out.log
```
{% endraw %}`

### Explicación de parámetros clave

* **command**: comando que ejecutará el proceso.
* **directory**: carpeta donde se ejecutará.
* **autostart**: inicia el proceso al arrancar `supervisord`.
* **autorestart**: reinicia el proceso si falla.
* **stdout_logfile / stderr_logfile**: logs gestionados automáticamente.
* **user**: define el usuario del sistema que ejecutará el programa.
* **environment**: permite definir variables de entorno.

## Comandos esenciales de control

### Uso de supervisorctl

{% raw %}
```bash
supervisorctl status
supervisorctl start mi_app
supervisorctl stop mi_app
supervisorctl restart mi_app
supervisorctl reread
supervisorctl update
```
{% endraw %}

## Gestión avanzada

* **reread**: detecta nuevos programas en el directorio `.conf`.
* **update**: aplica los cambios sin detener todo el sistema.
* **priority**: establece el orden de inicio y parada.
* **numprocs**: ejecuta múltiples instancias del mismo programa.
* **startretries**: número de reintentos en caso de fallo.

## Supervisord como servicio

### Ejemplo systemd

{% raw %}
```ini
[Unit]
Description=Supervisor daemon

[Service]
ExecStart=/usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf

[Install]
WantedBy=multi-user.target
```
{% endraw %}

## Logging

* Supervisor genera logs detallados:

  * Logs de cada proceso.
  * Logs internos de supervisord.
* Posibles rotaciones automáticas mediante:

  * `logfile_maxbytes`
  * `logfile_backups`.

## Casos de uso típicos

* Ejecutar microservicios Python sin necesidad de Docker.
* Mantener workers siempre activos.
* Reemplazo simple de systemd cuando se requiere flexibilidad o entornos no root.
* Gestión de proyectos en VPS pequeños.

## Buenas prácticas

* Mantener logs rotados.
* Nombrar programas con prefijos según el proyecto.
* Usar rutas absolutas para evitar problemas.
* Asegurar permisos correctos en archivos de logs y directorios.
* Cargar la configuración con `reread` y `update` antes de reiniciar todo.

