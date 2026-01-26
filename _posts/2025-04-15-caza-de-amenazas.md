---
date: 2025-04-15 03:34
title: caza de amenazas
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
aliases:
public_note: "true"
category: ciberseguridad
tags:
  - Hacking
  - amenazas
---
# Caza de amenazas
``$= dv.current().file.tags.join(" ")``

## Definición y objetivos
**Threat Hunting** es un enfoque **proactivo** de ciberseguridad centrado en buscar amenazas que han evadido controles preventivos y detecciones automáticas.
- No depende únicamente de alertas
- Se basa en hipótesis
- Combina análisis humano + telemetría
- Reduce *dwell time* del atacante

Relación directa con:
- [amenazas](/ciberseguridad/amenazas/)
- [monitoreo](/uncategorized/monitoreo/)

## Diferencias frente a detección tradicional
- Detección tradicional:
	- Reactiva
	- Basada en firmas y reglas
	- Dependiente de alertas
- Threat Hunting:
	- Proactiva
	- Basada en comportamiento
	- Orientada a hipótesis y exploración

## Fuentes de datos para Threat Hunting
### Endpoints
- Procesos en ejecución
- Creación de archivos
- Conexiones de red
- Uso de credenciales
- Actividad de memoria
- Telemetría [EDR](/ciberseguridad/edr/)/XDR

### Bases de datos
- Accesos anómalos
- Consultas fuera de horario
- Cambios en privilegios
- Exfiltración de grandes volúmenes
- Uso indebido de cuentas de servicio

### Logging
- Logs de sistemas operativos
- Logs de aplicaciones
- Logs de red
- Logs de autenticación
- Eventos de seguridad

### Auditorías
- Cambios de configuración
- Altas y bajas de usuarios
- Elevaciones de privilegios
- Accesos administrativos
- Acciones sensibles no habituales

## Metodologías de Threat Hunting
### Basada en hipótesis
- Formular hipótesis a partir de:
	- TTPs conocidos
	- Inteligencia de amenazas
	- Incidentes previos
- Validar hipótesis contra datos reales

### Basada en indicadores
- IOC (Indicators of Compromise)
- IOA (Indicators of Attack)
- Comportamientos sospechosos
- Desviaciones de la línea base

### Basada en modelos
- MITRE ATT&CK
- Kill Chain
- Diamond Model
- Análisis de campañas conocidas

## Frameworks y referencias clave
### MITRE ATT&CK
- Catálogo de técnicas y tácticas
- Base para estructurar hunts
- Permite mapear hallazgos
- Facilita priorización de riesgos

### Threat Intelligence
- Uso de feeds externos
- Análisis de actores y campañas
- Correlación con eventos internos

## Herramientas para Threat Hunting
### Plataformas de monitoreo
- [kibana](/monitoreo/kibana/) **tool**
	- Visualización avanzada
	- Búsqueda por patrones
	- Análisis temporal
	- Detección de anomalías  
	- [Kibana: Explora, visualiza y descubre datos | Elastic](https://www.elastic.co/es/kibana)

### Herramientas Open Source (estado 2024–2025)
- Elastic Stack
- Sigma (reglas genéricas)
- Osquery
- Zeek
- Velociraptor
- Wazuh
- YARA
- MISP

Referencia:
- [10 Free & Open-Source Threat-Hunting Tools for 2024](https://heimdalsecurity.com/blog/10-free-open-source-threat-hunting-tools/)

## Ejemplos de hipótesis de caza
### Movimiento lateral
- ¿Existen autenticaciones exitosas desde múltiples equipos en poco tiempo?
- ¿Uso de cuentas administrativas fuera de su patrón habitual?

### Persistencia
- ¿Creación de tareas programadas no documentadas?
- ¿Servicios nuevos en endpoints críticos?

### Exfiltración
- ¿Transferencias grandes de datos fuera de horario?
- ¿Uso anómalo de protocolos cifrados?

## Flujo típico de Threat Hunting
- Definición de hipótesis
- Recolección de datos
- Exploración y análisis
- Confirmación o descarte
- Documentación de hallazgos
- Mejora de detecciones

## Resultados esperados
- Detección temprana de ataques
- Mejora de reglas SIEM/EDR
- Reducción del tiempo de permanencia
- Aumento de visibilidad real
- Aprendizaje continuo del entorno

## Integración con el SOC
- Alimenta reglas de detección
- Mejora playbooks
- Aporta contexto a incidentes
- Refuerza [monitoreo](/uncategorized/monitoreo/)

## Formación y recursos recomendados
- [Compañía especializada en digitalización y ciberseguridad - Ikusi](https://ikusi.com/mx/blog/threat-hunting/)
- [Threat Hunting: Aprende qué es y cómo usarlo [2024]](https://keepcoding.io/blog/que-es-threat-hunting/)
- [CALENTANDO MOTORES - Cyber Threat Hunting en Español #0 - YouTube](https://youtu.be/JdBO8zNmnc8?list=PLPC-uborOKn2AYrTz74s-rz_Vspv0wndl)
- [Introducción al Threat Hunting - YouTube](https://youtu.be/ohMNnebaWXk)

## Madurez en Threat Hunting
- Nivel básico:
	- Uso de búsquedas manuales
- Nivel intermedio:
	- Hipótesis recurrentes
	- Uso de MITRE ATT&CK
- Nivel avanzado:
	- Automatización parcial
	- Threat Hunting continuo
	- Integración con inteligencia y SOAR

# Caza de amenazas — Conceptos Avanzados y Áreas Complementarias

## Tipos de Threat Hunting según madurez
### Threat Hunting dirigido
- Basado en inteligencia específica
- Orientado a actores, campañas o malware concreto
- Priorización por riesgo real
- Uso intensivo de TTPs conocidos

### Threat Hunting no dirigido
- Exploración libre de datos
- Identificación de anomalías desconocidas
- Descubrimiento de amenazas *living-off-the-land*
- Alto valor en entornos maduros

## Threat Hunting y comportamiento del atacante
### Living-off-the-Land (LotL)
- Uso de herramientas nativas del sistema
- Difícil detección por firmas
- Ejemplos:
	- PowerShell
	- WMI
	- PsExec
	- Scheduled Tasks
- Requiere análisis conductual profundo

### Abuso de credenciales
- Pass-the-Hash
- Pass-the-Ticket
- Token theft
- Reutilización de sesiones válidas

## Threat Hunting en la nube
### SaaS
- Abuso de cuentas legítimas
- Accesos desde ubicaciones anómalas
- Uso indebido de APIs
- Manipulación de permisos y roles

### IaaS / PaaS
- Cambios no autorizados en recursos
- Creación de instancias efímeras
- Uso de claves expuestas
- Movimiento lateral entre servicios cloud

## Threat Hunting basado en identidad
- Identidad como nuevo perímetro
- Correlación de:
	- Login
	- MFA
	- Elevaciones de privilegios
- Detección de:
	- Fatiga MFA
	- Accesos imposibles
	- Uso indebido de cuentas de servicio

Relación directa con:
- [monitoreo](/uncategorized/monitoreo/)
- [amenazas](/ciberseguridad/amenazas/)

## Threat Hunting y análisis de memoria
### Casos de uso
- Malware fileless
- Inyección de procesos
- Shellcode en memoria
- Hooks y rootkits

### Indicadores comunes
- Procesos sin ruta en disco
- Regiones RWX
- DLLs no firmadas
- Comportamiento anómalo en tiempo de ejecución

## Threat Hunting y red
### Análisis avanzado de tráfico
- Beaconing
- DNS tunneling
- Protocolos encubiertos
- C2 sobre HTTPS

### Correlación red + endpoint
- Conexiones salientes inusuales
- Procesos asociados a tráfico sospechoso
- Patrones periódicos de comunicación

## Threat Hunting en bases de datos
### Escenarios críticos
- Acceso masivo fuera de horario
- Consultas sin relación con rol
- Uso indebido de cuentas técnicas
- Exfiltración silenciosa

### Señales débiles
- Incremento gradual de consultas
- Cambios sutiles en permisos
- Accesos desde aplicaciones no habituales

## Automatización aplicada al Threat Hunting
### Qué automatizar
- Recolección de datos
- Enriquecimiento de eventos
- Correlación básica
- Triage inicial

### Qué no automatizar
- Análisis contextual profundo
- Validación final
- Decisiones estratégicas

## Threat Hunting continuo
- Hunts recurrentes
- Hipótesis vivas
- Retroalimentación constante
- Evolución de reglas y modelos

## Métricas específicas de Threat Hunting
- Dwell time detectado
- Número de hunts ejecutados
- Hipótesis validadas
- Detecciones creadas post-hunt
- Incidentes reales descubiertos

## Documentación y conocimiento
### Repositorio de conocimiento
- Hipótesis usadas
- Resultados
- Técnicas detectadas
- Mejores consultas

### Transferencia al SOC
- Nuevas reglas
- Ajuste de alertas
- Mejora de playbooks

## Threat Hunting y Red Team
- Uso de ejercicios ofensivos
- Purple Teaming
- Validación de hunts
- Mejora continua de cobertura

## Aspectos humanos del Threat Hunting
- Pensamiento crítico
- Conocimiento del entorno
- Curiosidad técnica
- Comprensión del negocio

## Riesgos de una mala práctica
- Caza sin objetivos claros
- Saturación de datos
- Falsos positivos constantes
- Falta de documentación
- Hunts aislados sin impacto operativo

## Threat Hunting como disciplina estratégica
- No es solo técnica
- Aporta inteligencia defensiva
- Reduce dependencia de firmas
- Incrementa resiliencia organizacional
- Pilar de seguridad moderna

# Recursos de Threat Hunting — 2025

## Informes y tendencias actuales
- **Informe sobre Threat Hunting 2025 (CrowdStrike)**: análisis de tendencias de amenazas, uso de IA y estadísticas recientes de intrusiones y técnicas avanzadas.  
	- [Threat Hunting Report 2025 (CrowdStrike)](https://www.crowdstrike.com/resources/reports/threat-hunting-report)

## Repositorios y colecciones de recursos
- **GitHub – CyberThreatHunting**: colección de herramientas, scripts y recursos para threat hunters, con enfoque en Open Source, visualización y hunting con AI.  
	- [CyberThreatHunting (GitHub)](https://github.com/A3sal0n/CyberThreatHunting)

## Cursos, eventos y formación
- **Webinar 2025 – Threat Hunting con Google Threat Intelligence**: sesión práctica sobre uso de APIs de inteligencia de Google para hunting.  
	- [Threat Hunting con Google Threat Intelligence (Webinar)](https://tecnowebinars.com/webinar/107661/threat-hunting-con-google-threat-intelligence-episodio-4-version-en-espanol/)

## Herramientas Open Source esenciales para 2025
## Plataformas integradas y stacks de análisis
- **Security Onion**: distribución Linux completa para monitorización, NIDS y threat hunting vía ELK/Kibana, Zeek, Suricata y OSSEC.  
	- [Security Onion](https://securityonion.net)

- **Wazuh**: SIEM + EDR open source con capacidades de log centralizado, correlación, dashboards y mapeo a MITRE ATT&CK para hunting.  
	- [Wazuh](https://wazuh.com)

## Herramientas específicas útiles
- **Velociraptor**: recopilación forense, endpoint monitoring y threat hunting en tiempo real.  
	- [Velociraptor](https://www.velocidex.com/velociraptor/)

- **Osquery**: consultas tipo SQL para inspección del estado de endpoints.  
	- [Osquery](https://osquery.io)

- **Zeek**: análisis profundo de tráfico de red con scripting para detección avanzada.  
	- [Zeek](https://zeek.org)

- **MISP**: plataforma colaborativa de inteligencia de amenazas para alimentar hunts con IOC y TTP.  
	- [MISP Project](https://www.misp-project.org)

- **TheHive y Cortex**: respuesta a incidentes colaborativa y análisis automatizado de observables.  
	- [TheHive Project](https://thehive-project.org)

## Detección y reglas
- **Sigma**: formato estándar para reglas de detección reutilizables entre SIEMs.  
	- [Sigma HQ](https://github.com/SigmaHQ/sigma)

- **YARA**: identificación de patrones en archivos, procesos y memoria.  
	- [YARA](https://virustotal.github.io/yara/)

## Integración con pilares de defensa
- **SIEM y dashboards**: análisis visual y búsquedas avanzadas en eventos centralizados.  
	- [kibana](/monitoreo/kibana/) **tool**  
	- [Kibana](https://www.elastic.co/es/kibana)

- **Threat Intelligence Feeds**: enriquecimiento de hunts con fuentes externas.  
	- [AlienVault OTX](https://otx.alienvault.com)  
	- [VirusTotal](https://www.virustotal.com)

## Guías, playbooks y ejemplos prácticos
- **Playbooks de Blue Team**: estrategias de hunting con Sigma, YARA y Velociraptor.  
	- [Blue Team Playbooks](https://github.com/Purp1eW0lf/Blue-Team-Notes)

## Servicios y apoyo comercial
- **Threat Hunting como servicio (ESET)**: caza de amenazas gestionada combinando XDR y analistas humanos.  
	- [ESET Threat Hunting](https://www.eset.com/int/business/enterprise-solutions/threat-hunting/)

## Recursos adicionales y comunidades
- **Comunidades técnicas**:
	- Reglas y detecciones comunitarias actualizadas regularmente.  
		- [Detection Rules (Elastic)](https://github.com/elastic/detection-rules)
	- Laboratorios SOC Open Source para práctica.  
		- [Open Source SOC Lab](https://github.com/StratosphereIPS/SecurityDatasets)

## Tendencias avanzadas (IA y Threat Hunting)
- **IA aplicada a threat hunting**:
	- Análisis asistido de logs
	- Correlación automática de TTP
	- Soporte a analistas con LLM
	- [Wazuh AI Use Cases](https://documentation.wazuh.com/current/user-manual/capabilities/ai/index.html)

## Estrategias y métricas recomendadas
- **Medición de eficacia**:
	- Detecciones validadas
	- Reducción del *dwell time*
	- Conversión de hunts en detecciones automáticas
- **Optimización continua**:
	- Integración de inteligencia externa
	- Correlación endpoint + red + identidad

## Lecturas académicas y metodológicas
- **LLM-Assisted Blue Teaming**: uso de modelos de lenguaje para soporte en hunting y respuesta.  
	- [Benchmarking LLM-Assisted Blue Teaming](https://arxiv.org)

- **Technique Inference Engine**: inferencia de TTPs basada en observables.  
	- [Technique Inference Engine](https://arxiv.org)

- **Visual Forensic Toolkit**: visualización avanzada para análisis forense y hunting.  
	- [Visual Forensic Toolkit](https://github.com)
# Guía de Threat Hunting — Casos de Uso y Pipelines de Trabajo

## Casos de uso principales de Threat Hunting
## Compromiso de endpoints
- Detección de ejecución anómala de procesos
- Persistencia mediante claves de registro, servicios o tareas programadas
- Uso de LOLBins (PowerShell, rundll32, mshta)
- Movimiento lateral entre hosts
- Relación directa con [amenazas](/ciberseguridad/amenazas/) y telemetría de EDR

## Amenazas en identidad y credenciales
- Uso indebido de cuentas privilegiadas
- Accesos fuera de horario o geolocalización
- Pass-the-Hash / Pass-the-Ticket
- Abuso de tokens OAuth en entornos cloud
- Correlación con auditorías y logs de identidad

## Threat Hunting en red
- C2 encubierto en HTTPS/DNS
- Beaconing periódico
- Tráfico lateral inesperado
- Uso de protocolos no estándar
- Análisis profundo de tráfico y metadatos

## Amenazas en entornos cloud
- Abuso de APIs
- Creación sospechosa de recursos
- Exfiltración desde buckets o storage
- Cambios de configuración sin ticket
- Integración con [cloud](/uncategorized/cloud/) y hardening preventivo

## Compromiso de bases de datos
- Consultas masivas anómalas
- Acceso fuera de patrón
- Escaladas de privilegios
- Exportaciones no autorizadas
- Relación con auditorías y logging de DB

## Casos de uso prácticos con ejemplos
## Ejemplo 1: PowerShell anómalo en endpoints
- Hipótesis:
	- Un atacante usa PowerShell para descarga y ejecución remota
- Datos:
	- Logs de endpoint
	- Eventos de procesos
- Búsqueda:
	- Procesos `powershell.exe` con flags sospechosos
- Resultado esperado:
	- Identificación de hosts comprometidos
	- Conversión del hallazgo en regla de detección

## Ejemplo 2: Beaconing de C2 en red
- Hipótesis:
	- Malware comunicándose periódicamente con C2
- Datos:
	- Netflow
	- Zeek logs
- Búsqueda:
	- Intervalos de comunicación constantes
- Resultado esperado:
	- Detección de infraestructura maliciosa
	- Bloqueo y enriquecimiento con TI

## Ejemplo 3: Compromiso de cuenta privilegiada
- Hipótesis:
	- Robo de credenciales administrativas
- Datos:
	- Logs de autenticación
	- Auditorías de identidad
- Búsqueda:
	- Accesos atípicos
	- Elevaciones repentinas
- Resultado esperado:
	- Reseteo de credenciales
	- Hardening de políticas

## Ejemplo 4: Exfiltración en cloud storage
- Hipótesis:
	- Descarga masiva de datos sensibles
- Datos:
	- Logs de API
	- Eventos de storage
- Búsqueda:
	- Transferencias fuera de baseline
- Resultado esperado:
	- Contención
	- Mejora de alertas automáticas

## Pipelines de trabajo de Threat Hunting
## Pipeline clásico basado en hipótesis
- Definir hipótesis alineada a MITRE ATT&CK
- Seleccionar fuentes de datos relevantes
- Ejecutar búsquedas iterativas
- Validar resultados
- Documentar hallazgos
- Convertir en detección automática

## Pipeline orientado a datos (Data-Driven)
- Ingesta masiva de logs
- Análisis estadístico y baselines
- Detección de anomalías
- Investigación manual
- Ajuste continuo de modelos

## Pipeline integrado con SIEM
- Centralización de logs
- Correlación multi-fuente
- Visualización con dashboards
- Hunting ad-hoc
- Escalado a alertas SIEM
- Integración con respuesta

## Pipeline EDR-centric
- Telemetría profunda de endpoints
- Queries recurrentes
- Live response
- Forense remoto
- Retroalimentación a reglas EDR

## Pipeline con Threat Intelligence
- Ingesta de feeds externos
- Mapeo IOC/TTP
- Hunts guiados por campañas
- Validación contextual
- Ajuste de prioridades de riesgo

## Pipeline asistido por IA
- Preprocesado de logs
- Resúmenes automáticos de eventos
- Sugerencia de hipótesis
- Correlación avanzada
- Apoyo al analista en investigación

## Integración de herramientas en pipelines
## Stack Open Source típico
- Recolección:
	- Beats, agentes EDR
- Análisis:
	- [kibana](/monitoreo/kibana/)
	- SIEM
- Hunting:
	- Osquery
	- Velociraptor
- Red:
	- Zeek
	- Suricata
- TI:
	- MISP
- Respuesta:
	- TheHive
	- Cortex

## Conversión de hunting a detección
- Documentar TTP
- Crear reglas Sigma
- Validar falsos positivos
- Medir impacto
- Automatizar despliegue
- Revisar periódicamente

## Métricas clave en los pipelines
- Tiempo medio de investigación
- Detecciones nuevas generadas
- Reducción de *dwell time*
- Ratio de falsos positivos
- Cobertura MITRE ATT&CK

## Buenas prácticas operativas
- Hunts regulares y programados
- Documentación sistemática
- Revisión cruzada entre analistas
- Mejora continua del logging
- Alineación con [monitoreo](/uncategorized/monitoreo/) y hardening
