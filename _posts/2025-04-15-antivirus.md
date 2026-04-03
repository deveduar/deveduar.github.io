---
date: 2025-04-15 16:45
title: Antivirus
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: ciberseguridad
tags:
  - Hacking
  - antivirus
  - malware
---
# Antivirus
``

## Concepto
Un **antivirus** es un software de [ciberseguridad](/ciberseguridad/ciberseguridad/) diseñado para **prevenir, detectar, analizar y eliminar [malware](/ciberseguridad/malware/)** de un sistema informático. Su función principal es proteger la **confidencialidad, integridad y disponibilidad** de la información frente a amenazas conocidas y emergentes.

## Funciones principales
- Detección de amenazas
	- Análisis por firmas para identificar malware conocido
	- Análisis heurístico para detectar comportamientos sospechosos
	- Detección basada en comportamiento en tiempo real
- Prevención
	- Bloqueo de archivos y procesos maliciosos antes de su ejecución
	- Protección en tiempo real del sistema de archivos
- Eliminación y recuperación
	- Cuarentena de archivos infectados
	- Limpieza o eliminación segura del malware
	- Restauración de archivos cuando es posible

## Tipos de protección
- Protección en tiempo real
	- Monitoriza constantemente procesos, memoria y archivos
- Análisis bajo demanda
	- Escaneos manuales completos o personalizados
- Protección web y correo
	- Filtrado de URLs maliciosas
	- Análisis de adjuntos y enlaces en emails
- Protección en la nube
	- Uso de bases de datos y análisis remotos para amenazas recientes

## Relación con la ciberseguridad
- Forma parte de una estrategia de defensa en profundidad
- Complementa otras medidas como:
	- Firewalls
	- Sistemas de detección de intrusiones
	- Buenas prácticas de usuario
- No sustituye la concienciación ni la actualización del sistema

## Amenazas que detecta
- [malware](/ciberseguridad/malware/)
	- Virus
	- Gusanos
	- Troyanos
	- Ransomware
	- Spyware
	- Adware
- Amenazas avanzadas
	- Zero-day
	- Rootkits
	- Fileless malware

## Limitaciones
- Dependencia de actualizaciones frecuentes
- Posibles falsos positivos
- Impacto en el rendimiento del sistema
- No garantiza protección total sin otras capas de seguridad

## Tools
### Software antivirus
- McAfee
- Panda

# Antivirus 2

## Arquitectura interna
- Motores de análisis
	- Motor de firmas con bases de datos locales
	- Motor heurístico con reglas y patrones
	- Motor de comportamiento con monitorización continua
- Componentes del sistema
	- Servicio residente en segundo plano
	- Interfaz de gestión para el usuario
	- Módulo de actualización automática
- Integración con el sistema operativo
	- Hooks a nivel de kernel
	- Intercepción de llamadas a disco y red
	- Control de procesos y memoria

## Ciclo de vida de una amenaza
- Entrada
	- Descarga desde web o correo
	- Dispositivos extraíbles
	- Explotación de vulnerabilidades
- Detección
	- Identificación inmediata o diferida
	- Correlación con eventos previos
- Respuesta
	- Bloqueo del proceso
	- Aislamiento del sistema
- Remediación
	- Eliminación del malware
	- Aplicación de parches
	- Revisión de configuraciones

## Actualizaciones y firmas
- Tipos de actualizaciones
	- Firmas de malware
	- Reglas heurísticas
	- Mejoras del motor de análisis
- Frecuencia
	- Actualizaciones incrementales
	- Sincronización en tiempo real con la nube
- Riesgos de no actualizar
	- Exposición a amenazas recientes
	- Incremento de falsos negativos

## Antivirus en entornos empresariales
- Gestión centralizada
	- Consolas de administración
	- Políticas de seguridad unificadas
- Escalabilidad
	- Protección de cientos o miles de endpoints
- Cumplimiento normativo
	- Soporte a auditorías
	- Registros y trazabilidad de eventos
- Integración con otros sistemas
	- [SIEM](/ciberseguridad/siem/)
	- [EDR](/ciberseguridad/edr/)
	- Plataformas de respuesta a incidentes

## Antivirus vs otras soluciones
- Diferencias con EDR
	- Antivirus enfocado en prevención
	- EDR orientado a detección y respuesta avanzada
- Diferencias con antimalware
	- Antivirus como solución integral
	- Antimalware especializado en amenazas concretas
- Convivencia de soluciones
	- Capas de protección complementarias
	- Reducción de superficies de ataque

## Configuración y buenas prácticas
- Ajustes recomendados
	- Activar protección en tiempo real
	- Programar escaneos periódicos
	- Habilitar análisis de dispositivos externos
- Uso responsable
	- Evitar desactivar el antivirus
	- Revisar alertas y registros
- Entornos de prueba
	- Uso de máquinas virtuales
	- Análisis de archivos sospechosos en sandbox

## Tendencias actuales
- Uso de inteligencia artificial
	- Modelos de detección predictiva
	- Reducción de falsos positivos
- Antivirus cloud-native
	- Menor consumo local
	- Respuesta más rápida ante amenazas
- Protección multiplataforma
	- Sistemas operativos de escritorio
	- Dispositivos móviles
	- Infraestructura híbrida

# Recursos Actualizados 2025 sobre Antivirus y Protección

## Guías y recursos generales
- **Guía completa de protección antivirus 2025:** Explica cómo funcionan los antivirus, por qué siguen siendo necesarios y qué considerar al elegir uno, con recomendaciones prácticas y de seguridad.
	- [A Complete Guide to Antivirus Protection & Internet Security 2025](https://www.security.org/antivirus/)
- **Guía de protección contra malware 2025:** Enfoque amplio de protección que complementa el uso de antivirus con controles adicionales y buenas prácticas.
	- [Malware Protection 2025 Guide](https://www.techternet.com/post/malware-protection-2025-guide-best-tools-security-tips/)
- **Business Security Test 2025:** Informe independiente con resultados de pruebas de seguridad empresarial, detección de malware y rendimiento.
	- [Business Security Test 2025 – AV-Comparatives](https://www.av-comparatives.org/tests/business-security-test-2025-august-november/)

## Rankings y comparativas de antivirus 2025
- **Top antivirus recomendados para 2025**
	- **Norton 360:** Protección integral con VPN, gestor de contraseñas y protección en tiempo real.
		- [Los 5 mejores antivirus de 2025](https://inversia.es/los-5-mejores-antivirus-para-proteger-tu-dispositivo/)
	- **Bitdefender Total Security:** Alta tasa de detección con bajo impacto en el rendimiento.
		- [Los 5 mejores antivirus de 2025](https://inversia.es/los-5-mejores-antivirus-para-proteger-tu-dispositivo/)
	- **Avast One / Premium Security:** Opción gratuita sólida con versiones avanzadas de pago.
		- [Mejores antivirus de 2025](https://www.seguridadweb20.es/mejores-antivirus-de-2025/)
	- **McAfee Total Protection:** Cobertura multidispositivo y herramientas de privacidad.
		- [Mejores antivirus de 2025](https://www.seguridadweb20.es/mejores-antivirus-de-2025/)
	- **Avira y otros:** Alternativas equilibradas en coste, rendimiento y protección.
		- [Los mejores antivirus de 2025](https://systemblog-systeminformatic.blogspot.com/2025/04/los-mejores-antivirus-de-2025.html)

## Recursos y comparativas online
- **Lista de los mejores antivirus 2025:** Comparativa general de soluciones según funciones, facilidad de uso y protección.
	- [Los 5 mejores antivirus 2025](https://inversia.es/los-5-mejores-antivirus-para-proteger-tu-dispositivo/)
- **Comparativa de herramientas antimalware 2025:** Análisis técnico de soluciones antimalware y antivirus con ventajas y limitaciones.
	- [Top 10 Anti-malware Tools in 2025](https://www.bestdevops.com/top-10-anti-malware-tools-in-2025-features-pros-cons-comparison/)

## Investigación y avances técnicos
### Estudios recientes
- **ByteShield:** Investigación académica sobre detección de malware resistente a técnicas evasivas y ataques adversariales.
	- [ByteShield – arXiv](https://arxiv.org/abs/2512.09883)
- **Detección de malware polimórfico:** Estudio sobre la combinación de reglas YARA, análisis dinámico y EDR para mejorar la detección.
	- [Polymorphic Malware Detection – arXiv](https://arxiv.org/abs/2511.21764)

## Noticias relevantes 2025
- **Nuevas amenazas reales:** *GhostPoster* infecta extensiones de navegador y evade defensas tradicionales.
	- [GhostPoster malware](https://www.tomsguide.com/computing/online-security/multiple-firefox-add-ons-infected-with-ghostposter-malware-how-to-stay-safe)
- **SantaStealer:** Malware orientado al robo de credenciales, datos bancarios y wallets.
	- [SantaStealer malware](https://www.techradar.com/pro/talk-about-coal-in-your-stocking-santastealer-malware-steals-data-from-browsers-and-crypto-wallets)
- **Botnet Kimwolf:** Botnet masiva que afectó millones de dispositivos Android.
	- [Kimwolf botnet](https://www.tomsguide.com/computing/malware-adware/nearly-2-million-android-devices-hijacked-by-massive-new-botnet-how-to-see-if-yours-are-infected)
- **Tendencias de defensa con IA:** Uso de IA defensiva para contrarrestar ciberataques avanzados.
	- [IA defensiva en ciberseguridad](https://cadenaser.com/nacional/2025/11/28/maquina-vs-maquina-el-cni-potencia-el-uso-de-la-ia-buena-para-neutralizar-los-ciberataques-disenados-con-inteligencia-artificial-cadena-ser/)
- **Caso de falso antivirus:** Software fraudulento distribuido como antivirus que resultó ser ransomware.
	- [Falso antivirus y ransomware](https://as.com/meristation/betech/instala-un-antivirus-para-evitar-lo-peor-y-al-rato-un-ciberhacker-llama-a-su-puerta-virtual-pidiendo-34000-euros-n/)

## Noticias y recursos de pruebas de software
- **Evaluaciones AV independientes:** Resultados de laboratorios independientes con métricas de protección, rendimiento y falsos positivos.
	- [AV-Comparatives – Tests 2025](https://www.av-comparatives.org/tests/)

# Fundamentos y Arquitectura de un Antivirus

## Principios de funcionamiento
- Defensa proactiva
	- Identificación de amenazas antes de su ejecución
	- Reducción de la superficie de ataque
- Defensa reactiva
	- Respuesta ante infecciones activas
	- Contención del daño y propagación
- Enfoque por capas
	- Protección simultánea en archivo, proceso, red y usuario
	- Coordinación entre módulos internos

## Modelos de detección
- Detección basada en firmas
	- Comparación de hashes y patrones binarios
	- Alta precisión frente a amenazas conocidas
- Detección heurística
	- Análisis estático del código
	- Identificación de instrucciones y estructuras sospechosas
- Detección por comportamiento
	- Monitorización de acciones en tiempo real
	- Identificación de patrones anómalos
- Detección asistida por IA
	- Modelos de aprendizaje automático
	- Clasificación predictiva de amenazas desconocidas

## Arquitectura lógica
- Capa de adquisición
	- Intercepción de archivos descargados o copiados
	- Monitorización de procesos y memoria
- Capa de análisis
	- Motores de firmas
	- Motores heurísticos
	- Motores de comportamiento
- Capa de decisión
	- Correlación de eventos
	- Evaluación de riesgo
- Capa de respuesta
	- Bloqueo
	- Cuarentena
	- Eliminación
	- Notificación al usuario

## Arquitectura técnica
- Componentes en modo usuario
	- Interfaz gráfica
	- Servicios de configuración
	- Agentes de monitorización
- Componentes en modo kernel
	- Drivers de sistema
	- Hooks de sistema de archivos
	- Control de procesos
- Comunicación interna
	- Canales seguros entre módulos
	- Control de integridad de componentes

## Flujo de análisis de archivos
- Recepción del archivo
	- Acceso local
	- Descarga desde red
- Preprocesamiento
	- Cálculo de hash
	- Normalización del contenido
- Análisis
	- Comparación con firmas
	- Evaluación heurística
	- Análisis de comportamiento
- Veredicto
	- Seguro
	- Sospechoso
	- Malicioso

## Integración con el sistema
- Sistema operativo
	- APIs nativas
	- Gestión de permisos
- Sistema de archivos
	- Escaneo en acceso
	- Escaneo en escritura
- Red
	- Inspección de tráfico
	- Filtrado de conexiones

## Rendimiento y optimización
- Técnicas de reducción de impacto
	- Caché de resultados
	- Exclusiones controladas
	- Escaneo incremental
- Balance seguridad-rendimiento
	- Priorización de procesos críticos
	- Uso adaptativo de recursos

## Seguridad del propio antivirus
- Autoprotección
	- Prevención de desactivación no autorizada
	- Protección contra manipulación
- Actualización segura
	- Canales cifrados
	- Verificación de integridad
- Aislamiento
	- Sandboxing interno
	- Separación de privilegios

## Evolución arquitectónica
- Antivirus tradicionales
	- Basados principalmente en firmas
- Antivirus híbridos
	- Combinación local + nube
- Plataformas de protección modernas
	- Integración con EDR
	- Telemetría avanzada
	- Respuesta automatizada

# Herramientas y Tools Open Source para Antivirus

## Motores antivirus open source
- **ClamAV**
	- Motor antivirus open source ampliamente usado
	- Detección basada en firmas y reglas personalizadas
	- Muy utilizado en servidores de correo y gateways
	- Integrable con otros sistemas
	- [ClamAV](https://www.clamav.net/)
- **OpenAntiVirus (OAV)**
	- Proyecto histórico de motor antivirus libre
	- Uso principalmente educativo y experimental
	- Base para entender arquitecturas antivirus clásicas
	- [OpenAntiVirus](http://www.openantivirus.org/)

## Herramientas de análisis de malware
- **YARA**
	- Lenguaje para definir reglas de detección de malware
	- Usado para análisis estático y forense
	- Complemento habitual a motores antivirus
	- [YARA](https://virustotal.github.io/yara/)
- **Cuckoo Sandbox**
	- Sandbox open source para análisis dinámico
	- Ejecución controlada de muestras sospechosas
	- Generación de informes de comportamiento
	- [Cuckoo Sandbox](https://cuckoosandbox.org/)
- **CAPEv2**
	- Fork avanzado de Cuckoo orientado a malware moderno
	- Mejor soporte para evasión y payloads complejos
	- [CAPEv2](https://github.com/kevoreilly/CAPEv2)

## Herramientas de detección complementaria
- **OSSEC / Wazuh**
	- HIDS open source con capacidades de detección de malware
	- Monitorización de integridad de archivos
	- Correlación de eventos de seguridad
	- [Wazuh](https://wazuh.com/)
- **rkhunter**
	- Detección de rootkits y backdoors
	- Análisis de configuraciones sospechosas
	- Orientado a sistemas Linux
	- [rkhunter](http://rkhunter.sourceforge.net/)
- **chkrootkit**
	- Herramienta ligera para detección de rootkits
	- Uso común en servidores Unix/Linux
	- [chkrootkit](http://www.chkrootkit.org/)

## Antivirus y seguridad en correo
- **Amavis**
	- Framework open source para filtrado de correo
	- Integración con ClamAV
	- Análisis de adjuntos y contenido
	- [Amavis](https://www.amavis.org/)
- **SpamAssassin**
	- Detección de spam con reglas y heurística
	- Complementa la detección de malware en correo
	- [Apache SpamAssassin](https://spamassassin.apache.org/)

## Seguridad en endpoints y servidores
- **Linux Malware Detect (LMD / Maldet)**
	- Detección de malware orientada a servidores Linux
	- Uso frecuente en entornos hosting
	- Integración con ClamAV
	- [Linux Malware Detect](https://www.rfxn.com/projects/linux-malware-detect/)
- **Falco**
	- Detección de comportamiento anómalo en tiempo real
	- Basado en reglas y eventos del kernel
	- Enfoque complementario al antivirus clásico
	- [Falco](https://falco.org/)

## Infraestructura de inteligencia de amenazas
- **MISP**
	- Plataforma open source de intercambio de indicadores
	- Integración con motores antivirus y SIEM
	- Uso en detección y respuesta
	- [MISP](https://www.misp-project.org/)
- **OpenCTI**
	- Gestión de inteligencia de amenazas
	- Correlación de campañas, malware y actores
	- [OpenCTI](https://www.opencti.io/)

## Integración y automatización
- **TheHive**
	- Plataforma open source de respuesta a incidentes
	- Integrable con antivirus y sandboxes
	- Gestión de alertas y casos
	- [TheHive](https://thehive-project.org/)
- **Shuffle**
	- SOAR open source
	- Automatización de respuestas ante detecciones
	- Integración con múltiples herramientas de seguridad
	- [Shuffle](https://shuffler.io/)

## Casos de uso habituales
- Escaneo antivirus en servidores Linux con ClamAV
- Análisis forense con YARA y sandboxes
- Protección de correo corporativo con Amavis + ClamAV
- Detección avanzada combinando antivirus + HIDS
- Automatización de respuesta ante malware con SOAR open source

# Casos de Uso y Configuraciones de Antivirus

## Protección de endpoint personal
- Caso de uso
	- Protección de equipos personales frente a descargas maliciosas
	- Prevención de ransomware y spyware
- Configuración recomendada
	- Activar protección en tiempo real
	- Habilitar análisis de descargas y dispositivos USB
	- Programar escaneo completo semanal
	- Activar protección web y phishing

## Entornos corporativos (endpoint empresarial)
- Caso de uso
	- Protección de estaciones de trabajo en red corporativa
	- Reducción de infecciones laterales
- Configuración recomendada
	- Gestión centralizada de políticas
	- Escaneo en tiempo real con exclusiones controladas
	- Integración con SIEM para alertas
	- Activar autoprotección del antivirus
	- Logs detallados para auditoría

## Servidores Linux
- Caso de uso
	- Detección de malware en servidores web y de aplicaciones
	- Cumplimiento de requisitos de seguridad
- Configuración recomendada
	- Uso de ClamAV o Linux Malware Detect
	- Escaneos programados fuera de horas pico
	- Exclusión de directorios críticos del sistema
	- Alertas por correo ante detecciones
	- Integración con cron y syslog

## Servidores de correo
- Caso de uso
	- Análisis de adjuntos y enlaces maliciosos
	- Reducción de infecciones vía phishing
- Configuración recomendada
	- Integración Amavis + ClamAV
	- Análisis de adjuntos comprimidos
	- Cuarentena automática
	- Registro de eventos para trazabilidad
	- Complementar con filtros antispam

## Gateways y proxies de red
- Caso de uso
	- Inspección de tráfico entrante y saliente
	- Bloqueo de descargas maliciosas
- Configuración recomendada
	- Escaneo de archivos HTTP/HTTPS
	- Integración con listas de reputación
	- Bloqueo automático de dominios maliciosos
	- Análisis bajo demanda para archivos grandes

## Entornos virtualizados
- Caso de uso
	- Protección de máquinas virtuales sin degradar rendimiento
	- Aislamiento de infecciones
- Configuración recomendada
	- Antivirus optimizado para virtualización
	- Escaneo coordinado para evitar picos simultáneos
	- Uso de agentes ligeros
	- Monitorización centralizada

## Entornos cloud e híbridos
- Caso de uso
	- Protección de cargas en la nube
	- Visibilidad unificada on-premise y cloud
- Configuración recomendada
	- Antivirus cloud-native o híbrido
	- Políticas basadas en roles
	- Integración con herramientas de seguridad cloud
	- Telemetría y respuesta automática

## Análisis forense y respuesta a incidentes
- Caso de uso
	- Investigación de archivos sospechosos
	- Confirmación de compromiso
- Configuración recomendada
	- Escaneo bajo demanda con reglas YARA
	- Uso de sandbox para análisis dinámico
	- Preservación de evidencias
	- Exportación de logs y hashes

## Protección de dispositivos extraíbles
- Caso de uso
	- Prevención de infecciones por USB
	- Control de medios externos
- Configuración recomendada
	- Escaneo automático al conectar dispositivos
	- Bloqueo de ejecución automática
	- Políticas diferenciadas por usuario

## Buenas prácticas transversales
- Mantener firmas y motores actualizados
- Revisar periódicamente falsos positivos
- Documentar exclusiones y excepciones
- Probar configuraciones en entornos de test
- Combinar antivirus con otras capas de seguridad
