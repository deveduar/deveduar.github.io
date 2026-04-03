---
date: 2025-12-31 15:49
title: MITRE ATT&CK
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: ciberseguridad
tags:
  - ciberseguridad
  - Hacking
  - pentesting
---
# MITRE ATT&CK

## Enlaces relacionados
- ttps ciberseguridad - Buscar con Google-
- [ciberseguridad](/ciberseguridad/ciberseguridad/)
- [Pentesting](/ciberseguridad/pentesting/)

## ¿Qué es MITRE ATT&CK?
MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) es un **framework de conocimiento** que documenta y clasifica el comportamiento de atacantes reales a lo largo de todo el ciclo de un ataque.  
Se basa en **observaciones del mundo real**, informes de amenazas, análisis forense y campañas documentadas, y se utiliza como referencia común entre equipos **Red Team, Blue Team, Purple Team, SOC y GRC**.

No es una herramienta ni un estándar de cumplimiento, sino una **base de conocimiento viva** que permite:
- Describir ataques de forma estructurada
- Comparar técnicas entre distintos grupos de amenazas
- Evaluar capacidades defensivas
- Diseñar detecciones y simulaciones realistas

## Objetivos principales del framework
- Proporcionar un **lenguaje común** para describir actividades ofensivas y defensivas
- Mejorar la **detección y respuesta** ante amenazas avanzadas
- Facilitar el **mapeo de controles de seguridad** frente a técnicas reales
- Ayudar en la **simulación de adversarios** y ejercicios de Purple Team
- Servir como base para **análisis de brechas de seguridad**

## Estructura general de ATT&CK
ATT&CK está organizado jerárquicamente en distintos niveles que permiten describir un ataque desde lo abstracto hasta lo técnico.

### Tácticas (Tactics)
Representan el **objetivo del atacante** en una fase concreta del ataque.  
Responden a la pregunta: *¿qué intenta lograr el adversario en este momento?*

Ejemplos:
- Initial Access
- Execution
- Persistence
- Privilege Escalation
- Defense Evasion
- Credential Access
- Lateral Movement
- Command and Control
- Exfiltration
- Impact

### Técnicas (Techniques)
Describen **cómo** el atacante logra una táctica específica.  
Son comportamientos observables, no herramientas concretas.

Ejemplo:
- T1059 – Command and Scripting Interpreter
- T1021 – Remote Services
- T1078 – Valid Accounts

### Subtécnicas (Sub-techniques)
Aportan **mayor granularidad**, detallando variantes específicas de una técnica.

Ejemplo:
- T1059.001 – PowerShell
- T1059.003 – Windows Command Shell
- T1021.002 – SMB/Windows Admin Shares

## Matrices MITRE ATT&CK
ATT&CK se divide en varias matrices según el entorno atacado.

### Enterprise ATT&CK
Enfocada en entornos corporativos:
- Windows
- Linux
- macOS
- Active Directory
- Cloud (AWS, Azure, GCP, SaaS)
- Containers y virtualización

Es la matriz más utilizada en **pentesting, detección y threat hunting**.

### Mobile ATT&CK
Centrada en:
- Android
- iOS

Documenta técnicas específicas de ataques móviles como abuso de permisos, spyware y persistencia en dispositivos.

### ICS ATT&CK
Diseñada para **sistemas industriales y OT**:
- SCADA
- PLC
- Infraestructuras críticas

Tiene tácticas y técnicas adaptadas a entornos donde la disponibilidad es prioritaria.

## Componentes clave de cada técnica
Cada técnica en ATT&CK incluye información estructurada que facilita su uso operativo.

### Descripción
Explica el comportamiento del atacante y su finalidad.

### Procedimiento de ataque
Ejemplos reales de cómo los adversarios han ejecutado la técnica en campañas conocidas.

### Mitigaciones
Controles defensivos recomendados para reducir el impacto o probabilidad:
- Hardening
- Configuraciones de seguridad
- Políticas
- Controles técnicos

### Detecciones
Ideas y enfoques para identificar la técnica:
- Logs relevantes
- Eventos de sistema
- Telemetría
- Indicadores de comportamiento

### Referencias
Enlaces a:
- Informes de amenazas
- Análisis de APTs
- Publicaciones técnicas

## Relación con actores y campañas
ATT&CK conecta técnicas con:
- **Grupos APT**
- **Malware**
- **Campañas de ataque**

Esto permite responder preguntas como:
- ¿Qué técnicas usa un APT específico?
- ¿Qué tácticas son más comunes en ataques de ransomware?
- ¿Qué técnicas comparten distintos grupos?

## Uso de MITRE ATT&CK en Pentesting
Durante un pentest, ATT&CK se utiliza para:
- Planificar ataques realistas
- Justificar técnicas utilizadas
- Documentar hallazgos con terminología estándar
- Mapear acciones ofensivas a tácticas concretas

Ejemplo de uso:
- Initial Access → Phishing
- Execution → PowerShell
- Lateral Movement → SMB
- Credential Access → LSASS Dumping

## Uso de MITRE ATT&CK en Blue Team y SOC
En defensa, ATT&CK se usa para:
- Diseñar reglas de detección
- Priorizar casos de uso SIEM
- Realizar threat hunting
- Medir cobertura defensiva

Se responde a preguntas como:
- ¿Qué técnicas no estamos detectando?
- ¿Qué tácticas están peor cubiertas?
- ¿Qué logs son críticos?

## Purple Team y simulación de adversarios
ATT&CK es la base de:
- Ejercicios de Purple Team
- Breach & Attack Simulation
- Red Team basado en amenazas reales

Permite:
- Alinear ataque y defensa
- Validar detecciones existentes
- Mejorar procesos de respuesta

## Mapeo con otros frameworks
ATT&CK se integra fácilmente con otros modelos de seguridad.

### Relación con Kill Chain
- Kill Chain describe **fases lineales**
- ATT&CK describe **comportamientos reutilizables**
Ambos se complementan para análisis estratégico y táctico.

### Relación con controles de seguridad
ATT&CK se mapea frecuentemente con:
- NIST CSF
- ISO 27001
- CIS Controls
- Detection Engineering

Esto permite traducir técnicas ofensivas a **controles defensivos medibles**.

## Limitaciones de MITRE ATT&CK
- No mide impacto ni riesgo por sí solo
- No prioriza automáticamente técnicas
- No sustituye análisis contextual del negocio
- No describe vulnerabilidades, sino comportamientos

Debe usarse como **base de conocimiento**, no como checklist cerrado.

## Casos de uso avanzados
- Gap analysis de detección
- Benchmarking de SOC
- Threat modeling basado en adversarios
- Diseño de laboratorios y CTFs
- Evaluación de herramientas EDR/XDR

## Evolución y mantenimiento
MITRE ATT&CK es un framework **vivo**:
- Se actualiza varias veces al año
- Añade nuevas técnicas y subtécnicas
- Refina descripciones y detecciones
- Incorpora feedback de la comunidad

Es fundamental mantener las referencias actualizadas en cualquier programa de seguridad.

# Recursos y herramientas MITRE ATT&CK (2025)

## Core Tools del framework
### ATT&CK Navigator
Herramienta **web para visualizar y anotar** matrices ATT&CK, útil para:
- Mapear cobertura de detecciones
- Planificación red/blue team
- Identificar brechas de seguridad en controles  
Disponible en el sitio oficial ATT&CK.  
[ATT&CK Navigator](https://attack.mitre.org/resources/attack-navigator/)

### ATT&CK Workbench
Aplicación para:
- Explorar, crear y compartir contenido ATT&CK
- Anotar y compartir extensiones personalizadas
Ideal para adaptar el framework a necesidades internas.  
[ATT&CK Workbench](https://attack.mitre.org/resources/attack-workbench/)

### Python Utilities (utilidades programáticas)
Scripts y **bibliotecas Python** para:
- Consultar datos ATT&CK en STIX
- Automatizar análisis y consultas
- Integrar ATT&CK con pipelines de datos  
Repositorios oficiales MITRE.  
[ATT&CK Python Utilities](https://github.com/mitre/cti)

### ATT&CK STIX & TAXII
Representación **machine-readable** del dataset ATT&CK:
- STIX 2.0 / 2.1 para ingestión y automatización
- TAXII servidor para acceso vía API  
Útil para workflows avanzados y automatización.  
[ATT&CK STIX/TAXII](https://attack.mitre.org/resources/attack-data-and-tools/)

## Emulación & pruebas
### CALDERA
Framework de **emulación de adversarios** automatizado:
- Simula TTP reales según ATT&CK
- Soporta escenarios red team y validación de defensas  
Muy empleado para ejercicios de threat emulation.  
[CALDERA](https://github.com/mitre/caldera)

### Atomic Red Team
Colección de **“átomos” de técnicas** ATT&CK:
- Pruebas independientes por técnica
- Scripts reutilizables para validar detecciones
- Integración con orquestadores (Ansible, Jenkins, etc.)  
[Atomic Red Team](https://github.com/redcanaryco/atomic-red-team)

### CISA Decider
Herramienta guiada para:
- Mapear técnicas adversarias a ATT&CK
- Apoyar análisis de amenazas con visualización
- Integrarse con Navigator u otras herramientas  
Desarrollado por CISA.  
[CISA Decider](https://decider.cisa.gov/)

## Repositorios y colecciones de detecciones
### MITRE Cyber Analytics Repository (CAR)
Repositorio de **analíticas listas para usar**:
- Reglas y consultas alineadas con ATT&CK
- Detecciones reutilizables para SIEM/EDR  
[MITRE CAR](https://car.mitre.org/)

### Sigma
Framework de reglas genéricas para SIEM:
- Traducción de detecciones a formatos interoperables
- Compatible con múltiples plataformas  
[Sigma HQ](https://github.com/SigmaHQ/sigma)

## Integraciones y plataformas
### SIEMs y soluciones XDR
Plataformas con contenido ATT&CK integrado:
- **Splunk Enterprise Security**  
- **IBM QRadar**  
- **Elastic Security**  
- **Microsoft Sentinel**  
Contextualizan alertas directamente en la matriz ATT&CK.  
[ATT&CK Integrations Overview](https://attack.mitre.org/resources/)

## Evaluaciones y análisis comparativos
### ATT&CK Evaluations 2025
Evaluaciones oficiales MITRE basadas en ataques reales:
- Escenarios APT y ransomware
- Cobertura on-prem y cloud
- Enfoque en visibilidad y detección  
[ATT&CK Evaluations](https://attackevals.mitre-engenuity.org/)

## Recursos de comunidad y documentación
### Threat-Informed Defense (MITRE Engenuity)
Recursos avanzados para defensores:
- **Mappings Explorer**
- **M3TID**
- **Sightings Ecosystem**
- **Security Stack Mappings** (AWS, Azure, GCP, M365)  
[Threat-Informed Defense](https://www.mitre-engenuity.org/cybersecurity/threat-informed-defense/)

### Matrices y datos descargables
MITRE mantiene:
- Matrices Excel
- JSON / STIX oficiales
- Changelogs por versión (v17–v18)  
[ATT&CK Data Downloads](https://attack.mitre.org/resources/attack-data-and-tools/)

## Workshops, eventos y comunidad
### ATT&CKcon & Workshops comunitarios
Eventos oficiales y comunitarios:
- Grabaciones
- Slides
- Casos prácticos y nuevas metodologías  
[ATT&CKcon](https://attack.mitre.org/resources/attackcon/)

## Recursos académicos emergentes (2025)
### AegisShield
Framework de **IA generativa para threat modeling** integrado con ATT&CK y STRIDE.  
[AegisShield – arXiv](https://arxiv.org/abs/2509.10482)

### KillChainGraph
Modelo ML para **predicción y mapeo de técnicas ATT&CK** a Kill Chain.  
[KillChainGraph – arXiv](https://arxiv.org/abs/2508.18230)

### Honeypot Cloud Threat Framework
Framework para correlación automática de ataques cloud con ATT&CK.  
[Honeypot Cloud Threat Framework – arXiv](https://arxiv.org/abs/2512.05321)

## Documentación y formación
### PDFs, guías y prácticas recomendadas
Recursos formativos clave:
- Best Practices for MITRE ATT&CK Mapping (CISA)
- **MAD – MITRE ATT&CK Defender**  
[CISA ATT&CK Mapping Guide](https://www.cisa.gov/resources-tools/resources/best-practices-mitre-attck-mapping)  
[MITRE ATT&CK Defender](https://attack.mitre.org/resources/attack-defender/)

# Guía práctica MITRE ATT&CK – Uso, configuraciones y labs

## Casos de uso habituales
MITRE ATT&CK se utiliza como **eje central operativo** para alinear ataque, detección y respuesta. Los casos más comunes en entornos reales incluyen pentesting, SOC, threat hunting y Purple Team.

### Pentesting y Red Team
Uso del framework para:
- Diseñar ataques realistas basados en TTPs reales
- Documentar hallazgos con lenguaje estándar
- Justificar técnicas más allá de CVEs

Ejemplo de mapeo en informe:
- Initial Access → T1566 Phishing
- Execution → T1059.001 PowerShell
- Credential Access → T1003.001 LSASS
- Lateral Movement → T1021.002 SMB
- Command and Control → T1071.001 Web Protocols

### Blue Team y SOC
Uso defensivo orientado a:
- Crear reglas de detección
- Priorizar casos de uso SIEM
- Medir cobertura defensiva

Ejemplo:
- Técnica: T1059.001 PowerShell
- Log fuente: Windows Event Logs + Sysmon
- Objetivo: detectar ejecución anómala de scripts

### Purple Team
ATT&CK como lenguaje común para:
- Validar detecciones existentes
- Ajustar reglas tras cada prueba ofensiva
- Mejorar tiempos de respuesta

Flujo típico:
- Red Team ejecuta técnica
- Blue Team valida detección
- Ambos ajustan controles

## Uso práctico con ATT&CK Navigator
### Caso: análisis de cobertura defensiva
1. Cargar matriz Enterprise en Navigator
2. Marcar técnicas detectadas en verde
3. Marcar técnicas no cubiertas en rojo
4. Priorizar tácticas críticas (Initial Access, Credential Access)

Resultado:
- Visualización clara de brechas
- Base para roadmap de detección

### Caso: planificación de ataque
1. Seleccionar APT conocido
2. Exportar técnicas asociadas
3. Construir cadena de ataque realista
4. Ejecutar solo técnicas permitidas por alcance

## Configuración de detecciones (ejemplos)
### Sysmon + ATT&CK
#### Técnica: T1059 – Command and Scripting Interpreter
Configuración típica:
- Event ID 1 (Process Create)
- Capturar:
	- ParentImage
	- CommandLine
	- Hashes

Uso:
- Correlación de powershell.exe con argumentos sospechosos
- Detección de living-off-the-land

### Sigma rule básica
#### Técnica: T1021.002 – SMB Lateral Movement
{% raw %}
```yaml
title: SMB Lateral Movement
id: attack-t1021-002
status: experimental
logsource:
product: windows
service: security
detection:
selection:
	EventID: 4624
	LogonType: 3
	AccountName|endswith: "$"
condition: selection
tags:
- attack.lateral_movement
- attack.t1021.002
```
{% endraw %}`

### SIEM (ejemplo genérico)

Flujo de correlación:
- Evento de login remoto
- Acceso a recurso administrativo
- Ejecución remota posterior

Resultado:
- Alerta contextualizada con táctica y técnica

## Emulación de adversarios

### Atomic Red Team – uso básico

#### Técnica: T1059.001 PowerShell

{% raw %}
```bash
Invoke-AtomicTest T1059.001
```
{% endraw %}

Uso:
- Ejecutar prueba controlada
- Verificar si EDR/SIEM detecta
- Ajustar detección si falla

Buenas prácticas:
- Ejecutar en entornos aislados
- Registrar antes y después
- Mapear resultado a ATT&CK Navigator

### CALDERA – concepto operativo

Flujo:
- Definir adversary profile (técnicas ATT&CK)
- Desplegar agent
- Ejecutar operación
- Medir detecciones y respuesta

Ventaja:
- Automatiza cadenas completas de ataque
- Ideal para Purple Team continuo

## Threat Hunting guiado por ATT&CK

### Ejemplo: Credential Access

1. Seleccionar táctica Credential Access
2. Listar técnicas más comunes:

* T1003 LSASS
* T1555 Credentials from Password Stores
1. Buscar comportamientos:

* Acceso a procesos sensibles
* Dumps de memoria
1. Documentar hallazgos con IDs ATT&CK

Resultado:
- Hunting estructurado
- Menos falsos positivos

## Labs prácticos (hands-on)

### Lab 1 – Mapeo ofensivo

Objetivo:
- Simular un ataque básico
- Mapear cada paso a ATT&CK

Pasos:
1. Acceso inicial con credenciales válidas
2. Enumeración local
3. Escalada de privilegios
4. Movimiento lateral

Entrega:
- Tabla con tácticas y técnicas
- Evidencias por paso

### Lab 2 – Validación de detecciones

Objetivo:
- Validar cobertura defensiva

Pasos:
1. Ejecutar Atomic Red Team
2. Revisar logs generados
3. Verificar alertas
4. Ajustar reglas SIEM

Entrega:
- Técnicas detectadas
- Técnicas no detectadas
- Reglas creadas o mejoradas

### Lab 3 – Purple Team

Objetivo:
- Alinear ataque y defensa

Pasos:
1. Red Team ejecuta TTPs
2. Blue Team analiza detecciones
3. Revisión conjunta
4. Mejora continua

Métrica:
- Tiempo de detección
- Calidad de alerta
- Visibilidad por táctica

### Lab 4 – Gap analysis

Objetivo:
- Identificar brechas reales

Pasos:
1. Importar matriz en Navigator
2. Marcar técnicas cubiertas
3. Identificar tácticas críticas sin detección
4. Priorizar mejoras

## Documentación y reporting

### Buenas prácticas

* Usar IDs ATT&CK en todos los informes
* Relacionar técnica → impacto
* No listar técnicas sin evidencia
* Mantener versión ATT&CK usada

### Plantilla de reporte

Campos mínimos:
- Técnica ATT&CK
- Evidencia
- Riesgo
- Detección existente
- Recomendación

## Uso avanzado

### Integración con Threat Intelligence

* Mapear campañas reales a ATT&CK
* Priorizar técnicas observadas recientemente
* Ajustar defensas según contexto

### Integración con GRC

* Traducir técnicas a controles
* Mapear ATT&CK con NIST / ISO
* Justificar inversiones defensivas

MITRE ATT&CK debe usarse como **sistema vivo**, iterativo y adaptado al entorno, no como checklist estático.


