---
date: 2025-04-15 17:05
title: tecnicas de explotacion
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: ciberseguridad
tags:
  - vulnerabilidades
  - Hacking
---
# tecnicas de explotacion

## Conceptos relacionados
- [vulnerabilidades](/ciberseguridad/vulnerabilidades/)
- [malware](/ciberseguridad/malware/)
- exploit development
- [ingenieria inversa](/ciberseguridad/ingenieria-inversa/)
- [Metasploit](/ciberseguridad/metasploit/)
- pwntools
- exploits
- [OWASP](/ciberseguridad/owasp/)
- OWASP FSTM, Etapa 9 Explotación de ejecutables-

## Explotación de binarios
La explotación de binarios se centra en identificar y abusar de fallos en programas compilados (ELF, PE, Mach-O) para alterar su flujo de ejecución, obtener ejecución de código, elevar privilegios o extraer información sensible.

### Marcos y referencias
- [MITRE ATT&CK](/ciberseguridad/mitre-att-ck/)
- Get Started  MITRE ATT&CK®-
- [Techniques - Enterprise | MITRE ATT&CK®](https://attack.mitre.org/techniques/enterprise/)
	- Relación directa con técnicas como **Exploitation for Privilege Escalation**, **Exploitation for Client Execution** y **Command and Scripting Interpreter**.
- [GTFOBins](https://gtfobins.github.io/)
	- Abuso de binarios legítimos en sistemas Unix/Linux para bypass de restricciones, escalada de privilegios y ejecución de comandos.
- [LOLBAS](https://lolbas-project.github.io/)
	- Equivalente en entornos Windows, enfocado en binarios y scripts firmados por Microsoft.

### Tipos de binarios objetivo
- Binarios SUID/SGID en Linux.
- Servicios de red escritos en C/C++.
- Aplicaciones de escritorio y drivers.
- Componentes embebidos y firmware.

## Estrategias de explotación
### Buffer Overflow
- Sobrescritura de memoria adyacente en pila o heap.
- Control del **Instruction Pointer** (EIP/RIP).
- Dependiente de mitigaciones como ASLR, NX, PIE y Stack Canaries.

### ROP (Return-Oriented Programming)
- Encadenamiento de *gadgets* existentes en memoria.
- Permite ejecución incluso con NX habilitado.
- Uso común junto a *leaks* de direcciones para romper ASLR.

### Format String Attacks
- Abuso de funciones inseguras (`printf`, `sprintf`).
- Lectura y escritura arbitraria de memoria.
- Útil para *information disclosure* y control de flujo.

### Heap Exploitation
- Corrupción de estructuras dinámicas.
- Técnicas como *use-after-free*, *double free* y *heap overflow*.
- Dependiente del *allocator* (ptmalloc, jemalloc, tcmalloc).

## Técnicas avanzadas
### Bypass de mitigaciones
- ASLR: filtrado de direcciones, info leaks.
- NX: ROP, JOP, SROP.
- PIE: fugas de base address.
- DEP/CFG (Windows): reutilización de código legítimo.

### Shellcoding
- Desarrollo de payloads compactos y sin bytes prohibidos.
- Arquitecturas x86, x64, ARM.
- Integración con *stagers* y *egghunters*.

### Fuzzing orientado a explotación
- Identificación automática de crashes explotables.
- Uso de fuzzers generacionales y basados en cobertura.
- Integración con análisis dinámico y simbólico.

## Herramientas clave
- pwntools
	- Framework en Python para desarrollo y automatización de exploits.
- [Metasploit](/ciberseguridad/metasploit/)
	- Framework de explotación y post-explotación.
- GDB + extensiones (pwndbg, gef).
- Radare2, Ghidra, IDA.
- AFL, libFuzzer, Honggfuzz.

## Uso y contextos
- En **CTFs de hacking**
	- Retos *pwn* enfocados en binarios vulnerables.
	- Práctica de explotación realista y controlada.
- En **análisis de malware**
	- Comprensión de técnicas usadas por atacantes.
	- Reproducción de exploits para *reverse engineering*.
- En **auditorías de seguridad**
	- Evaluación de software cerrado y componentes legacy.
	- Validación del impacto real de vulnerabilidades.
- En **Red Team / [Purple Team](/ciberseguridad/purple-team/)**
	- Simulación de ataques avanzados.
	- Mejora de detección y respuesta defensiva.

# tecnicas de explotacion — expansion avanzada

## Explotación a nivel kernel
La explotación del kernel busca comprometer el núcleo del sistema operativo para obtener control total del sistema.

### Vulnerabilidades comunes
- *Use-After-Free* en drivers.
- Desbordamientos en syscalls.
- Condiciones de carrera en subsistemas de memoria y red.

### Impacto
- Escalada de privilegios a root/SYSTEM.
- Desactivación de mecanismos de seguridad.
- Persistencia a bajo nivel.

## Explotación de condiciones de carrera
Las *Race Conditions* permiten alterar el comportamiento del sistema explotando accesos concurrentes a recursos compartidos.

### Técnicas relevantes
- *Time-of-Check Time-of-Use (TOCTOU)*.
- Abuso de locks mal implementados.
- Manipulación de enlaces simbólicos.

### Contextos típicos
- Sistemas multiusuario.
- Servicios con acceso a archivos temporales.
- Procesos privilegiados.

## Explotación de deserialización
La deserialización insegura permite ejecución de código al procesar objetos manipulados.

### Vectores habituales
- Aplicaciones Java, .NET y PHP.
- APIs y servicios expuestos.
- Comunicación entre microservicios.

### Consecuencias
- Ejecución remota de código.
- Compromiso lateral dentro de la aplicación.
- Bypass de controles lógicos.

## Explotación de sandbox y escapes
Las sandboxes limitan el impacto de código no confiable, pero pueden ser evadidas.

### Técnicas de escape
- Abuso de syscalls permitidas.
- Fallos en virtualización o contenedores.
- Interacción con dispositivos o drivers.

### Escenarios comunes
- Navegadores web.
- Contenedores Docker mal configurados.
- Entornos de ejecución restringidos.

## Explotación en entornos cloud
La explotación en la nube combina vulnerabilidades técnicas con errores de configuración.

### Superficies de ataque
- Metadatos de instancias.
- Roles y permisos excesivos.
- Servicios expuestos internamente.

### Objetivos
- Escalada de privilegios en la cuenta cloud.
- Acceso a datos sensibles.
- Persistencia mediante recursos legítimos.

## Explotación de firmware y hardware
Este nivel se centra en componentes por debajo del sistema operativo.

### Áreas clave
- BIOS/UEFI.
- Firmware de dispositivos de red.
- Controladores embebidos.

### Riesgos
- Persistencia casi indetectable.
- Compromiso previo al arranque del sistema.
- Difícil erradicación.

## Explotación post-autenticación
No todas las explotaciones ocurren antes del acceso.

### Técnicas frecuentes
- Abuso de funcionalidades legítimas.
- Escalada de privilegios internos.
- Movimiento lateral dentro del sistema.

### Relación con ATT&CK
- *Privilege Escalation*.
- *Lateral Movement*.
- *Persistence*.

## Cadena de explotación
Las explotaciones modernas suelen combinar múltiples fallos.

### Ejemplo de flujo
- Vulnerabilidad de entrada → info leak.
- Info leak → bypass de mitigaciones.
- Bypass → ejecución de código.
- Ejecución → persistencia.

## Tendencias actuales
### Explotación asistida por automatización
- Generación de exploits semi-automática.
- Integración con fuzzing inteligente.
- Uso de análisis simbólico.

### Defensa ofensiva informada
- Uso de técnicas reales para mejorar detección.
- Simulación de adversarios avanzados.
- Enfoque en impacto real, no solo en bugs.

# tecnicas de explotacion — cobertura complementaria

## Explotación de fallos lógicos
No dependen de errores de memoria ni de corrupción directa, sino de un diseño incorrecto del flujo de la aplicación.

### Características
- No generan crashes evidentes.
- Difíciles de detectar con fuzzing clásico.
- Requieren comprensión profunda del dominio funcional.

### Ejemplos
- Bypass de validaciones.
- Escalada de privilegios por errores de autorización.
- Abuso de estados inconsistentes.

## Explotación de protocolos
Se basa en debilidades en la implementación o diseño de protocolos de comunicación.

### Superficies comunes
- Protocolos propietarios.
- Implementaciones parciales de estándares.
- Manejo incorrecto de estados y retransmisiones.

### Técnicas habituales
- *State machine confusion*.
- Manipulación de campos de longitud.
- Inyección a nivel de protocolo.

## Explotación criptográfica
No rompe el algoritmo, sino su uso incorrecto.

### Vectores frecuentes
- Reutilización de nonces o IVs.
- Comparaciones inseguras (*timing attacks*).
- Almacenamiento débil de claves.

### Impacto
- Divulgación de información sensible.
- Suplantación de identidad.
- Escalada indirecta de privilegios.

## Explotación basada en información
El objetivo principal es obtener *leaks* que habiliten ataques posteriores.

### Tipos de información
- Direcciones de memoria.
- Versiones de software.
- Configuraciones internas.
- Credenciales parciales.

### Uso táctico
- Preparar bypass de mitigaciones.
- Ajustar exploits de forma precisa.
- Reducir entropía defensiva.

## Explotación de APIs
Las APIs modernas amplían significativamente la superficie de ataque.

### Debilidades comunes
- Exposición excesiva de métodos.
- Falta de control de tasas.
- Confianza implícita entre servicios.

### Consecuencias
- Acceso no autorizado a datos.
- Ejecución de acciones privilegiadas.
- Pivotaje entre servicios.

## Explotación de supply chain
Ataques dirigidos a componentes externos integrados en el sistema.

### Objetivos
- Librerías de terceros.
- Dependencias transitivas.
- Actualizaciones automáticas.

### Ventajas para el atacante
- Alcance masivo.
- Alta persistencia.
- Detección tardía.

## Explotación de configuraciones
No explota código vulnerable, sino decisiones inseguras.

### Casos típicos
- Permisos excesivos.
- Servicios expuestos innecesariamente.
- Credenciales por defecto.

### Relación con explotación
- Facilita ejecución de código.
- Permite escalada sin exploits complejos.
- Reduce la necesidad de técnicas avanzadas.

## Explotación de confianza implícita
Se basa en relaciones de confianza mal definidas.

### Escenarios
- Dominios Windows.
- Relaciones entre contenedores.
- Integraciones entre plataformas.

### Técnicas
- Abuso de tokens.
- Reutilización de sesiones.
- Impersonación de servicios.

## Explotación orientada a persistencia
No busca solo acceso inicial, sino permanencia.

### Métodos
- Backdoors lógicos.
- Modificación de flujos legítimos.
- Persistencia sin malware tradicional.

### Ventaja táctica
- Bajo ruido.
- Difícil atribución.
- Alta resiliencia ante limpieza.

## Explotación como parte de campañas
La explotación rara vez es un evento aislado.

### Integración con otras fases
- Reconocimiento previo.
- Movimiento lateral.
- Exfiltración progresiva.

### Enfoque moderno
- Explotación modular.
- Reutilización de acceso.
- Adaptación continua al entorno defensivo.

# labs de tecnicas de explotacion

## Listado de labs propuestos
- **Lab 01 – Buffer Overflow clásico (stack-based)**
	- Control de EIP/RIP sin mitigaciones.
- **Lab 02 – Buffer Overflow con mitigaciones**
	- ASLR + NX + Canary.
- **Lab 03 – ROP básico en binarios ELF**
	- Construcción de cadena ROP.
- **Lab 04 – Format String Vulnerability**
	- Lectura y escritura arbitraria.
- **Lab 05 – Heap Exploitation (Use-After-Free)**
	- Manipulación de estructuras dinámicas.
- **Lab 06 – Explotación de binario SUID**
	- Escalada de privilegios local.
- **Lab 07 – Abuso de GTFOBins**
	- Post-explotación sin payloads personalizados.
- **Lab 08 – Race Condition (TOCTOU)**
	- Ataque a binario privilegiado.
- **Lab 09 – Kernel Exploitation (introductorio)**
	- Escalada local controlada.
- **Lab 10 – Exploiting Logic Flaws**
	- Bypass sin corrupción de memoria.

---

## Lab desarrollado – Buffer Overflow con mitigaciones

### Objetivo del lab
Explotar un binario vulnerable mediante *Buffer Overflow* en un entorno con mitigaciones modernas habilitadas, logrando ejecución de comandos controlada.

### Escenario
- Binario ELF de 64 bits.
- Servicio local que recibe entrada por `stdin`.
- Mitigaciones activas:
	- NX
	- ASLR
	- PIE
	- Stack Canary

### Configuración del entorno
- Sistema: Linux x86_64.
- Herramientas:
	- pwntools
	- GDB + pwndbg
	- checksec
- Compilación del binario vulnerable:
	- `-fstack-protector`
	- `-pie -fPIE`
	- `-z noexecstack`

### Análisis inicial
#### Enumeración de mitigaciones
- Uso de `checksec` para confirmar protecciones.
- Identificación de:
	- Canary presente.
	- NX habilitado.
	- PIE activo.

#### Análisis estático
- Revisión de funciones vulnerables:
	- Uso de `gets` / `scanf` sin límite.
- Localización de función objetivo (*win()* o syscall alcanzable).
- Identificación de llamadas a `puts` / `printf` para *info leak*.

#### Análisis dinámico
- Ejecución bajo GDB.
- Detección del offset exacto hasta RIP.
- Confirmación del crash controlado sin canary bypass.

### Técnicas empleadas
#### Leak de información
- Abuso de función vulnerable para:
	- Filtrar valor del stack canary.
	- Obtener dirección base del binario (PIE).
- Uso de *format string* indirecto o lectura fuera de límites.

#### Bypass de Stack Canary
- Reinyección del canary exacto en el payload.
- Evitar modificación del valor original.

#### Bypass de ASLR y PIE
- Cálculo dinámico de direcciones:
	- Base del binario.
	- Dirección de funciones internas.
- Uso de offsets constantes.

#### ROP básico
- Construcción de cadena ROP:
	- Control de registros (pop rdi; ret).
	- Llamada a `system("/bin/sh")` o función interna.
- Alineación de pila para evitar crashes.

### Payload final
#### Estructura lógica
- Padding hasta canary.
- Canary original.
- Relleno hasta RIP.
- Cadena ROP calculada dinámicamente.

### Automatización
#### Script con pwntools
- Conexión al proceso local/remoto.
- Extracción automática de leaks.
- Cálculo de direcciones en tiempo real.
- Envío del payload final.

### Resultado esperado
- Obtención de shell interactiva.
- Ejecución de comandos arbitrarios.
- Demostración práctica de bypass completo de mitigaciones.

### Variantes del lab
- Sustituir ROP por *ret2libc*.
- Ejecutar el servicio de forma remota.
- Introducir rate limiting o restricciones de input.

### Relación con frameworks
- [MITRE ATT&CK](/ciberseguridad/mitre-att-ck/)
	- Exploitation for Client Execution.
	- Privilege Escalation.
- [OWASP](/ciberseguridad/owasp/)
	- Fallos de validación de entrada.
- exploit development
	- Cadena completa de explotación moderna.

# recursos y herramientas 2025 — ciberseguridad y explotacion

## Bases de datos y repositorios de exploits
- **ExploitDB** – Base de datos pública de vulnerabilidades y *proof-of-concepts* para aprendizaje y pruebas de exploits.  
	- [Exploit Database](https://www.exploit-db.com/)
- **AEAS: Actionable Exploit Assessment System** – Sistema automatizado para evaluar y priorizar exploits accionables mediante análisis estático y métricas de funcionalidad y complejidad.  
	- [AEAS – Research Paper](https://arxiv.org/abs/2509.17832)

## Plataformas y frameworks de explotación
- **[Metasploit](/ciberseguridad/metasploit/)** – Framework líder para desarrollo y ejecución de exploits, con módulos de post-explotación y automatización.  
	- [Metasploit Framework](https://www.metasploit.com/)
- **Dradis Framework** – Plataforma colaborativa para consolidar resultados de pruebas de penetración y generar reportes profesionales.  
	- [Dradis Framework](https://dradisframework.com/)

## Distribuciones y entornos integrados
- **Kali Linux 2025.2** – Distribución especializada en pentesting con herramientas actualizadas y soporte extendido para testing avanzado.  
	- [Kali Linux](https://www.kali.org/)

## Herramientas esenciales por categoría
### Reconocimiento y escaneo
- **Nmap** – Escaneo de redes, servicios y hosts con scripting NSE para automatización avanzada.  
	- [Nmap](https://nmap.org/)
- **Wireshark** – Análisis profundo de tráfico de red y protocolos.  
	- [Wireshark](https://www.wireshark.org/)

### Vulnerabilidad y enumeración
- **Nessus** – Escáner de vulnerabilidades con soporte para cumplimiento y entornos híbridos/cloud.  
	- [Nessus](https://www.tenable.com/products/nessus)
- **Burp Suite** – Suite para testing de aplicaciones web con fuzzing y escaneo activo/pasivo.  
	- [Burp Suite](https://portswigger.net/burp)
- **Nuclei** – Escáner basado en plantillas YAML para detección rápida y extensible de vulnerabilidades.  
	- [Nuclei](https://nuclei.projectdiscovery.io/)
- **sqlmap** – Automatización avanzada de ataques de inyección SQL.  
	- [sqlmap](https://sqlmap.org/)

### Password cracking y post-explotación
- **Hashcat** – Cracking de hashes optimizado para GPU y arquitecturas modernas.  
	- [Hashcat](https://hashcat.net/hashcat/)
- **John the Ripper Jumbo** – Suite de cracking con múltiples formatos y modos de ataque.  
	- [John the Ripper](https://www.openwall.com/john/)

### Otras herramientas útiles
- **BloodHound CE** – Análisis gráfico de rutas de ataque en Active Directory.  
	- [BloodHound](https://bloodhoundenterprise.io/)
- **Masscan** – Escáner de puertos de alta velocidad para grandes rangos IP.  
	- [Masscan](https://github.com/robertdavidgraham/masscan)
- **Amass** – Enumeración avanzada de superficies externas y subdominios.  
	- [OWASP Amass](https://owasp.org/www-project-amass/)
- **Recon-ng / theHarvester / SpiderFoot** – Herramientas OSINT para recopilación y correlación de información pública.  
	- [Recon-ng](https://github.com/lanmaster53/recon-ng)  
	- [theHarvester](https://github.com/laramies/theHarvester)  
	- [SpiderFoot](https://www.spiderfoot.net/)

## AI y automatización en pruebas de seguridad
- **PenTest++** – Enfoque experimental de automatización asistida por IA para pentesting controlado.  
	- [PenTest++ – Research](https://arxiv.org/abs/2502.09484)
- **garak (Generative AI Red-teaming & Assessment Kit)** – Framework para evaluar riesgos y vulnerabilidades en modelos LLM.  
	- [garak](https://github.com/leondz/garak)

## Recopilación y análisis de inteligencia
- **1 TRACE** – Plataforma web orientada a OSINT y análisis de amenazas.  
	- [1 TRACE](https://1trace.io/)

## Recursos académicos y tendencias relevantes
- **AI-based Binary Function Similarity Detection** – Investigación aplicada a detección de similitud en binarios para análisis de vulnerabilidades y malware.  
	- [Research Paper](https://arxiv.org/abs/2511.01180)
- **HackWorld Framework** – Evaluación de agentes capaces de explotar vulnerabilidades web en entornos realistas.  
	- [HackWorld](https://arxiv.org/abs/2510.12200)

## Cursos y formación actualizados
- **Curso “Hacking web (Pentesting 2025)” – Udemy** – Cobertura práctica de vulnerabilidades web y reporting moderno.  
	- [Udemy – Hacking Web Pentesting 2025](https://www.udemy.com/course/hacking-web-pentesting-2025/)

## Noticias y contexto 2025
- Incremento de exploits activos contra sistemas Linux y Windows, ampliando la superficie de ataque real.  
	- [Kaspersky – Aumento de exploits](https://www.kaspersky.es/about/press-releases/se-disparan-los-exploits-en-sistemas-linux-y-windows)
- Crecimiento del uso de IA en campañas ofensivas y automatización de ataques.  
	- [CincoDías – IA y ciberdelincuencia](https://cincodias.elpais.com/smartlife/pymes/2025-11-05/google-aumento-ia-entre-ciberdelincuentes.html)
