---
date: 2026-01-02 17:28
title: vulnerabilidades
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
aliases:
public_note: true
category: ciberseguridad
tags:
  - vulnerabilidades
  - owasp
---
# vulnerabilidades
``

## Enlaces y notas relacionadas
- [OWASP](/ciberseguridad/owasp/)
- [bug bounty](/ciberseguridad/bug-bounty/)
- [tecnicas de explotacion](/ciberseguridad/tecnicas-de-explotacion/)
- [manejo de parches](/ciberseguridad/manejo-de-parches/)
- [ciclo de vida de vulnerabilidades](/ciberseguridad/ciclo-de-vida-de-vulnerabilidades/)
- [manejo de vulnerabilidades](/ciberseguridad/manejo-de-vulnerabilidades/)
- [Auditorias](/ciberseguridad/auditorias/)

## Concepto y alcance
Las vulnerabilidades son debilidades técnicas, lógicas u operativas que pueden ser explotadas para comprometer la **confidencialidad, integridad o disponibilidad** de sistemas, aplicaciones, infraestructuras y datos. Su análisis abarca desde errores de código hasta fallos de diseño, configuración y procesos.

## Vulnerabilidades en aplicaciones
Incluyen fallos presentes en aplicaciones web, móviles y APIs, tanto del lado cliente como servidor.
- Errores de validación de entrada
- Fallos de [autenticacion](/autenticacion/autenticacion/) y autorización
- Exposición de información sensible
- Dependencias vulnerables
- Configuraciones inseguras

### Aplicaciones Web y Móviles
- [OWASP](/ciberseguridad/owasp/) Top 10 Web y Mobile como referencia base
- Riesgos específicos:
	- Web: inyección, XSS, CSRF, SSRF, deserialización insegura
	- Móvil: almacenamiento inseguro, tráfico sin cifrar, ingeniería inversa, uso indebido de permisos
- Integración con [bug bounty](/ciberseguridad/bug-bounty/) y pruebas continuas en CI/CD

## Vulnerable [Docker](/software%20engineering/docker/) Environments
Entornos deliberadamente vulnerables usados para aprendizaje, pruebas y validación de técnicas.
- [Vulhub – Pre-Built Vulnerable Environments Based on Docker-Compose](https://github.com/vulhub/vulhub)
- Uso de laboratorios con múltiples CVEs reproducibles
- Integración con herramientas de escaneo dinámico y explotación manual
- Hack The Box con Docker:
	- Requiere VPN y configuración de red especial
	- Útil para escenarios realistas de explotación y post-explotación

## Análisis de código
Evaluación del código fuente o binario para identificar vulnerabilidades antes de que lleguen a producción.
- [Análisis estático/dinámico de código – OWASP](https://owasp.org/www-community/Source_Code_Analysis_Tools)

### Tipos de análisis
- Análisis estático (SAST):
	- Revisión sin ejecutar el código
	- Detección temprana de errores lógicos y patrones inseguros
- Análisis dinámico (DAST):
	- Evaluación en tiempo de ejecución
	- Identificación de fallos explotables reales
- Análisis interactivo (IAST) y composición de software (SCA) como capas complementarias

## Vulnerabilidades de red y servicios
Debilidades en protocolos, servicios y configuraciones de red.
- Servicios expuestos innecesariamente
- Autenticación débil o inexistente
- Protocolos heredados o inseguros

### Samba relay
- Ataque de relay contra servicios SMB mal configurados
- Aprovecha NTLM sin firma
- Permite movimiento lateral y escalada de privilegios
- Relacionado directamente con [SMBRELAY](/ciberseguridad/smbrelay/)

## Vulnerabilidades del lado cliente
Fallos que afectan al navegador, sesiones y la interacción del usuario.

### Cross-Site Scripting (XSS)
- Inyección de scripts en contenido confiable
- Tipos:
	- Reflejado
	- Almacenado
	- DOM-based
- Impacto:
	- Robo de cookies
	- Secuestro de sesión
	- Ejecución de acciones en nombre del usuario

### Cross-Site Request Forgery (CSRF)
- Ejecución de acciones no autorizadas usando la sesión activa del usuario
- Explotación basada en confianza implícita
- Mitigaciones:
	- Tokens CSRF
	- SameSite cookies
	- Validación de origen

### Cookies y sesiones
- Cookies sin flags de seguridad:
	- Secure
	- HttpOnly
	- SameSite
- Sesiones predecibles o reutilizables
- Falta de rotación de sesión tras autenticación
- Almacenamiento inseguro de tokens

## Gestión y ciclo de vida de vulnerabilidades
- [ciclo de vida de vulnerabilidades](/ciberseguridad/ciclo-de-vida-de-vulnerabilidades/) 
- [manejo de vulnerabilidades](/ciberseguridad/manejo-de-vulnerabilidades/).
- Identificación
- Clasificación por riesgo (CVSS, contexto de negocio)
- Remediación o mitigación
- Validación
- Cierre y documentación

## Manejo de parches
- [manejo de parches](/ciberseguridad/manejo-de-parches/)
- Fallos comunes:
	- Retrasos en aplicar parches críticos
	- Dependencias no inventariadas
	- Parches aplicados sin pruebas previas
- Integración con escáneres automáticos y gestión de activos

## Auditorías de seguridad
-  [Auditorias](/ciberseguridad/auditorias/)
- Evaluación periódica del estado de vulnerabilidades
- Incluye:
	- Auditorías de código
	- Auditorías de configuración
	- Auditorías de cumplimiento
- Base para planes de mejora continua

## Análisis de Hardware y Firmware
Vulnerabilidades a bajo nivel, fuera del alcance del software tradicional.
- Firmware inseguro o sin firmar
- Interfaces de depuración expuestas (UART, JTAG)
- Credenciales embebidas
- Riesgos en IoT, OT y dispositivos industriales
- Relevante para pentesting avanzado y Red Team

# vulnerabilidades avanzadas

## Vulnerabilidades de infraestructura y nube
Fallos en la infraestructura física, virtual y cloud que permiten compromiso de sistemas y datos críticos.

### Exposición de API de nube inseguras
- APIs accesibles públicamente sin autenticación o autorización adecuada
- Filtrado insuficiente de datos sensibles en respuestas
- Ausencia de rate limiting y logging de accesos
- Riesgos: robo de información, manipulación de recursos, escalada de privilegios

### Configuraciones de IAM mal definidas
- Políticas excesivamente permisivas (por ejemplo, `AdministratorAccess` para todos)
- Roles no segmentados según principio de menor privilegio
- Uso de credenciales compartidas o estáticas
- Riesgos: acceso no autorizado a recursos críticos, persistencia de atacante

### Bucket S3 u otros storage públicos
- Buckets expuestos sin control de acceso
- Archivos sensibles sin cifrado o con ACL pública
- Riesgos: filtración de información, modificación de datos, uso indebido de almacenamiento

### Escalación de privilegios en entornos virtualizados y contenedores
- Contenedores corriendo como root
- Falta de aislamiento entre pods o máquinas virtuales
- Vulnerabilidades en hypervisores o runtimes de contenedores
- Riesgos: movimiento lateral, toma de control de infraestructura

### Misconfiguración de Kubernetes y pods inseguros
- Pods sin restricciones de seguridad (`privileged`, `hostPath`)
- Exposición de dashboards sin autenticación
- Falta de Network Policies y RBAC correctos
- Riesgos: ejecución remota de código, filtración de secretos, escalación de privilegios

## Vulnerabilidades criptográficas
Debilidades en el uso de algoritmos, protocolos y almacenamiento de secretos.

### Algoritmos débiles o desfasados
- MD5, SHA1, RC4, DES
- Riesgos: colisiones, ataques de preimagen, descifrado de datos críticos

### Uso incorrecto de TLS/SSL
- Versiones obsoletas (TLS 1.0, 1.1)
- Certificados autofirmados o expirados
- Protocolos de cifrado débiles habilitados
- Riesgos: MITM, robo de credenciales, intercepción de datos

### Fallos en almacenamiento de claves y secretos
- Claves embebidas en código fuente o repositorios públicos
- Secretos sin cifrado en almacenamiento local o cloud
- Riesgos: acceso no autorizado a sistemas y datos sensibles

## Ataques a autenticación multifactor (MFA) y federación
Técnicas que comprometen la autenticación avanzada y sistemas federados.

### Bypass de MFA
- Phishing dirigido con capturas de token o códigos
- Push fatigue: bombardeo de notificaciones para aceptar sin revisar
- Intercepción de tokens temporales

### Ataques a SAML, OAuth y OpenID Connect
- Manipulación de assertions [SAML](/autenticacion/saml/)
- Uso indebido de tokens OAuth
- Riesgos: login sin credenciales, acceso a recursos protegidos

## Vulnerabilidades de terceros y supply chain
Riesgos derivados de dependencias externas y librerías de terceros.

### Dependencias de software vulnerable
- Uso de librerías con CVEs conocidos
- Actualizaciones no aplicadas
- Riesgos: ejecución de código remoto, escalación de privilegios

### Bibliotecas desactualizadas
- Funcionalidades obsoletas y vulnerables
- Compatibilidad con entornos antiguos
- Riesgos: explotación de fallos conocidos

### Integración de paquetes de terceros no confiables
- Código malicioso incluido en dependencias
- Riesgos: malware persistente, acceso a datos internos

## Vulnerabilidades de sesión y API
Errores en gestión de sesiones y APIs que permiten comprometer autenticación y autorización.

### Token JWT mal configurados
- Algoritmo `none` permitido
- Expiración inexistente o demasiado larga
- Riesgos: suplantación de identidad, escalación de privilegios

### API expuestas sin controles
- Falta de rate limiting
- Ausencia de validación de acceso
- Riesgos: DoS, fuga de información, abuso de funcionalidad

### Inyección de parámetros y over-permission
- Endpoints aceptando parámetros inseguros
- Roles de usuario con permisos excesivos
- Riesgos: acceso a recursos no autorizados, manipulación de datos

## Vulnerabilidades físicas y de seguridad social
Exposición humana o física que permite comprometer sistemas.

### Ingeniería social y phishing
- Emails o llamadas dirigidas a obtener credenciales
- Manipulación psicológica de usuarios
- Riesgos: robo de cuentas, acceso interno

### Exposición física de servidores o dispositivos IoT
- Acceso a racks, servidores o dispositivos sin control
- Interfaces abiertas (JTAG, UART)
- Riesgos: extracción de datos, modificación de firmware

### Robo de credenciales por social engineering
- Obtención de contraseñas mediante engaños internos o externos
- Riesgos: acceso no autorizado, escalación de privilegios

## Automatización y escalamiento en pruebas de vulnerabilidades
Herramientas y metodologías que permiten gestión masiva y priorización de riesgos.

### Escaneo continuo de vulnerabilidades
- Vulnerability Management automatizado
- Integración con inventario de activos
- Beneficio: identificación temprana y constante de fallos

### Integración con pipelines [DevSecOps](/devops/devsecops/)
- Escaneo automático en CI/CD
- Validación de código y dependencias antes de producción
- Beneficio: reducción de vulnerabilidades en despliegues

### Herramientas de correlación y priorización de riesgos
- Análisis de impacto y probabilidad
- Focalización en vulnerabilidades críticas primero
- Beneficio: optimización de recursos de remediación

# recursos vulnerabilidades 2025

## Informes y reportes de vulnerabilidades
- **Microsoft corrige vulnerabilidades críticas en la nube:** Microsoft mitigó fallos graves en servicios de Azure como Azure DevOps, Azure Automation, Azure Storage y Power Apps, incluyendo una vulnerabilidad con **CVSS 10/10** que permitía escalar privilegios y mantener acceso persistente.  
	- [Microsoft corrige cuatro vulnerabilidades críticas en la nube](https://revistacloud.com/microsoft-corrige-cuatro-vulnerabilidades-criticas-en-la-nube-una-alcanza-el-nivel-maximo-de-peligrosidad/)
- **Reporte de ataques 2025 | Fluid Attacks:** El informe identifica que el **control de autorización inadecuado en servicios web** representa más del 27% de la exposición al riesgo, siendo sistemas web y APIs puntos especialmente críticos.  
	- [State of Attacks 2025 – Fluid Attacks](https://fluidattacks.com/es/reports/state-of-attacks-2025)
- **Vulnerabilidades semanales | CISA:** Resúmenes de vulnerabilidades recientes, incluido un bypass de autenticación en toolkits **SAML** que permiten ataques de *signature wrapping*.  
	- [CISA Security Bulletin](https://www.cisa.gov/news-events/bulletins)

## Seguridad en la nube e infraestructura
- **Desafíos de seguridad en la nube en 2025:** El **secuestro de cuentas cloud** mediante phishing o autenticación débil sigue siendo uno de los principales vectores de ataque; se recomienda **MFA y monitoreo de accesos anómalos**.  
	- [Top Cloud Security Challenges in 2025](https://vizologi.com/es/top-cloud-security-challenges-in-2025-and-how-to-overcome-them/)
- **España en el top 5 europeo de ciberataques 2025:** Recomendaciones para entornos cloud-first, incluyendo **MFA resistente a phishing**, inventario continuo de activos y protección de consolas privilegiadas.  
	- [España en el top 5 europeo de ciberataques](https://revistacloud.com/espana-en-el-top-5-europeo-de-ciberataques-en-2025-claves-y-prioridades-para-un-mundo-cloud-first/)

## APIs e interfaces críticas
- **API como superficie de ataque:** Casos reales de APIs expuestas que filtraron grandes volúmenes de datos debido a configuraciones inseguras y falta de controles de autenticación y validación.  
	- [APIs: la nueva superficie de ataque](https://www.encryptionconsulting.com/es/APIs-la-nueva-superficie-de-ataque/)
- **IA y vectores de ataque en APIs:** Incremento de ataques como **Broken Object Level Authorization (BOLA)** y exposición excesiva de datos en APIs.  
	- [Auge de ataques web y API según Akamai](https://virtuabarcelona.com/2025/04/23/ia-ciberseguridad-el-auge-exponencial-de-ataques-web-y-api-en-2024-segun-akamai/)

## Criptografía y autenticación
- **Criptografía post-cuántica:** Tendencia hacia algoritmos resistentes a ataques cuánticos como **CRYSTALS-Kyber** para proteger datos a largo plazo.  
	- [Tecnologías modernas de ciberseguridad y protección de datos](https://noticiasmercedinas.com/site/2025/07/03/tecnologias-modernas-de-ciberseguridad-y-proteccion-de-datos/)
- **Gestión de MFA en 2025:** La falta de MFA incluso en cuentas sin privilegios sigue siendo un riesgo relevante; se recomienda habilitar MFA de forma global.  
	- [Tenable Identity Exposure – Release Notes 2025](https://es.docs.tenable.com/release-notes/Content/identity-exposure/saas/2025.htm)

## Kubernetes, contenedores y cloud-native
- **KubeFence – Seguridad del API de Kubernetes:** Enfoque de filtrado fino del API para reducir la superficie de ataque más allá del [RBAC](/autenticacion/rbac/) tradicional.  
	- [KubeFence – arXiv](https://arxiv.org/abs/2504.11126)
- **KubeGuard – Endurecimiento de Kubernetes:** Marco asistido por LLM para generar recomendaciones de configuración basadas en *least privilege*.  
	- [KubeGuard – arXiv](https://arxiv.org/abs/2509.04191)

## Supply chain y CI/CD
- **ARGO-SLSA – Seguridad de la cadena de suministro:** Extensión para Argo Workflows que implementa firmas criptográficas y atestaciones de procedencia conforme a **SLSA**.  
	- [ARGO-SLSA – arXiv](https://arxiv.org/abs/2503.20079)
- **OWASP Top 10 Cloud Security Risks 2025:** Riesgos clave de *Insecure Software Supply Chain*, uso de **SBOM** y herramientas como Snyk, Dependency-Check y Dependabot.  
	- [OWASP Top 10 Cloud Security Risks 2025](https://www.appsecmaster.net/blog/owasp-top-10-cloud-security-risks-explained-for-2025/)

# guía vulnerabilidades actuales 2025

## OWASP Top 10:2025 – Riesgos críticos de aplicaciones web
Una de las referencias más actualizadas sobre vulnerabilidades en software moderno. La versión 2025 reestructura y prioriza los riesgos según datos recientes de incidencias y explotación real.  
- [OWASP Top 10 2025 – Introducción](https://owasp.org/Top10/2025/0x00_2025-Introduction/)

### Categorías principales
1. **A01: Broken Access Control** – Fallos de control de acceso, incluyendo SSRF.  
	- [Broken Access Control – OWASP](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)
2. **A02: Security Misconfiguration** – Configuraciones inseguras en aplicaciones, servicios cloud y contenedores.  
	- [Security Misconfiguration – OWASP](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)
3. **A03: Software Supply Chain Failures** – Fallos en dependencias, procesos de build y despliegue.  
	- [Software Supply Chain Failures – OWASP](https://owasp.org/Top10/2025/A03_2025-Software_Supply_Chain_Failures/)
4. **A04: Cryptographic Failures** – Criptografía débil o incorrectamente implementada.  
	- [Cryptographic Failures – OWASP](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)
5. **A05: Injection** – Inyección de código o comandos (SQLi, XSS, OS Command Injection).  
	- [Injection – OWASP](https://owasp.org/Top10/2025/A05_2025-Injection/)
6. **A06: Insecure Design** – Errores de diseño y lógicas inseguras desde fases tempranas.  
	- [Insecure Design – OWASP](https://owasp.org/Top10/2025/A06_2025-Insecure_Design/)
7. **A07: Authentication Failures** – Fallos de autenticación y gestión de sesión.  
	- [Authentication Failures – OWASP](https://owasp.org/Top10/2025/A07_2025-Authentication_Failures/)
8. **A08: Software and Data Integrity Failures** – Compromiso de integridad en datos o componentes.  
	- [Software and Data Integrity Failures – OWASP](https://owasp.org/Top10/2025/A08_2025-Software_and_Data_Integrity_Failures/)
9. **A09: Logging and Monitoring Failures** – Falta de registros y alertas efectivas.  
	- [Logging and Monitoring Failures – OWASP](https://owasp.org/Top10/2025/A09_2025-Logging_and_Monitoring_Failures/)
10. **A10: Mishandling of Exceptional Conditions** – Manejo incorrecto de errores y estados excepcionales.  
	- [Mishandling of Exceptional Conditions – OWASP](https://owasp.org/Top10/2025/A10_2025-Mishandling_of_Exceptional_Conditions/)

## Vulnerabilidades críticas explotadas en 2025

### Fallos de ejecución remota (RCE)
- **SmarterMail RCE:** Vulnerabilidad crítica que permitía ejecución remota de código sin autenticación.  
	- [SmarterMail RCE – TechRadar](https://www.techradar.com/pro/security/this-smartermail-vulnerability-allows-remote-code-execution-heres-what-we-know)

### Zero-days en plataformas de uso masivo
- **Apple WebKit:** Zero-days explotados activamente permitían corrupción de memoria y ejecución de código al visitar contenido malicioso.  
	- [Apple corrige zero-days en WebKit](https://nypost.com/2025/12/28/tech/apple-patches-two-zero-day-vulnerabilities-attackers-exploited-in-targeted-attacks/)

### IA y sistemas asistidos por AI
- **M365 Copilot – Command / Prompt Injection:** Riesgo de ejecución de instrucciones no previstas y exfiltración de datos mediante *prompt injection*.  
	- [OWASP GenAI Incident Exploit Round-Up](https://genai.owasp.org/2025/07/14/owasp-gen-ai-incident-exploit-round-up-q225/)

## Tipos de vulnerabilidades y tendencias actuales

### Control de acceso inadecuado
- Principal causa de brechas exitosas en 2025.
- Errores en roles, políticas IAM y autorización a nivel de objeto.  
- [OWASP – Broken Access Control](https://owasp.org/Top10/2025/A01_2025-Broken_Access_Control/)

### Configuraciones inseguras
- Servicios expuestos, credenciales por defecto y APIs sin protección adecuada.  
- [OWASP – Security Misconfiguration](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)

### Supply chain y dependencias
- Crecimiento de ataques vía librerías, contenedores y pipelines CI/CD comprometidos.  
- [OWASP – Software Supply Chain Failures](https://owasp.org/Top10/2025/A03_2025-Software_Supply_Chain_Failures/)

### Criptografía deficiente
- Algoritmos obsoletos y mala gestión de claves siguen siendo críticos.  
- [OWASP – Cryptographic Failures](https://owasp.org/Top10/2025/A04_2025-Cryptographic_Failures/)

### Inyección de código
- SQLi, XSS y command injection continúan apareciendo en CVEs recientes.  
- [OWASP – Injection](https://owasp.org/Top10/2025/A05_2025-Injection/)

## Casos y contextos de explotación
- **WordPress:** Bloqueo de miles de ataques por segundo debido a plugins vulnerables, permisos excesivos y credenciales débiles.  
	- [WordPress y la magnitud de los ataques actuales](https://cincodias.elpais.com/smartlife/lifestyle/2025-10-31/wordpress-bloquea-una-media-de-12000-ataques-por-segundo-dejando-clara-la-magnitud-de-las-amenazas-actuales.html)

## Referencias y recursos

### Documentación oficial OWASP
- [OWASP Top 10 2025 – Introducción](https://owasp.org/Top10/2025/0x00_2025-Introduction/)
- [A02 – Security Misconfiguration](https://owasp.org/Top10/2025/A02_2025-Security_Misconfiguration/)

### Análisis y artículos
- [Top 10 vulnerabilidades web según OWASP 2025](https://fustibus.com/es/blog/ciberseguridad/top-10-vulnerabilidades-web-owasp-2025)
- [Cambios y tendencias en OWASP Top 10 2025](https://confiden.cl/iso27001/owasp-top-10-2025-nuevos-riesgos-y-tendencias-en-seguridad-de-aplicaciones/)

## Recomendaciones para manejo actual
- Escaneo y **gestión continua de vulnerabilidades** con priorización por riesgo real.
- **Integración DevSecOps** en CI/CD (SAST, DAST, SCA).
- Auditorías periódicas de **configuración cloud y APIs**.
- **MFA resistente a phishing** y hardening de accesos privilegiados.
