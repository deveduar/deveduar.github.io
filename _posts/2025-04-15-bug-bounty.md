---
date: 2025-04-15 17:00
title: bug bounty
tags:
  - vulnerabilidades
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
cssclasses:
  - hide-embedded-header1
categories:
  - ciberseguridad
public_note: "true"
category: ciberseguridad
---
# Bug Bounty
``$= dv.current().file.tags.join(" ")``

## Relación con otros dominios
- [ciberseguridad](/uncategorized/ciberseguridad/)
- [vulnerabilidades](/ciberseguridad/vulnerabilidades/)

## Concepto de Bug Bounty
El **Bug Bounty** es un modelo de seguridad colaborativa en el que organizaciones permiten que investigadores externos identifiquen y reporten vulnerabilidades reales en sus sistemas a cambio de recompensas económicas, reconocimiento o ambos.  
Se basa en escenarios reales, con alcance definido, reglas claras y un proceso formal de divulgación responsable.

## Objetivos del Bug Bounty
- Identificar vulnerabilidades críticas antes de que sean explotadas
- Complementar auditorías y pentesting tradicionales
- Mejorar la madurez del programa de seguridad
- Incentivar la investigación ética y continua

## Tipos de vulnerabilidades habituales
- Fallos de autenticación y autorización
- Inyección (SQLi, Command Injection, XSS)
- Exposición de datos sensibles
- Errores de configuración
- Vulnerabilidades en APIs
- Problemas criptográficos
- Lógica de negocio

## Plataformas y programas de Bug Bounty
### Plataformas públicas
- [Managed Bug Bounty | Bugcrowd](https://www.bugcrowd.com/products/bug-bounty/)
- [Bug Bounty Program for Businesses | HackerOne](https://www.hackerone.com/product/bug-bounty-platform-old)

### Plataformas formativas y nacionales
- [Atenea – CCN-CERT](https://atenea.ccn-cert.cni.es/escuela/home)

## Atenea (CCN-CERT)
Plataforma española orientada a la formación práctica en ciberseguridad mediante retos técnicos similares a escenarios de Bug Bounty y CTF.
- Enfoque educativo y progresivo
- Retos guiados y evaluables
- Ideal para iniciarse en investigación de vulnerabilidades

## Capture The Flag (CTF)
Los **CTF** son competiciones prácticas que simulan problemas reales de seguridad y sirven como entrenamiento directo para Bug Bounty.
- Modalidades: Jeopardy, Attack/Defense
- Enfoque en resolución técnica y análisis
- Desarrollo de mentalidad ofensiva y defensiva

### Áreas técnicas frecuentes en CTF
- Criptografía
- Análisis de tráfico de red
- Forense digital
- Web hacking
- Ingeniería inversa

## Ejemplo práctico: reto Double Agent (Atenea)
- [Resolviendo el reto Double Agent de ATENEA - YouTube](https://youtu.be/phHjM3AVpdc)

### Técnicas y conceptos aplicados
- Cifrado y descifrado de información
- Análisis de metadatos
- Inspección de tráfico con Wireshark
- Análisis de headers HTTP
- Correlación de pistas técnicas

## Herramientas útiles para Bug Bounty
### Análisis y utilidades
- Wireshark
- Burp Suite
- Nmap
- Metasploit
- Herramientas de scripting y automatización

### Recursos avanzados
- [Didier Stevens | blog](https://blog.didierstevens.com/)
	- Herramientas para análisis de malware
	- Scripts para PDF, tráfico, encoding y forense
	- Enfoque práctico para investigadores de seguridad

## Flujo típico de un Bug Bounty Hunter
- Reconocimiento y enumeración
- Identificación de superficie de ataque
- Pruebas manuales y automatizadas
- Validación de impacto real
- Documentación clara y reproducible
- Reporte responsable a la plataforma

## Habilidades clave para Bug Bounty
- Networking y protocolos
- HTTP y APIs
- Programación básica (Python, Bash, JS)
- Criptografía aplicada
- Pensamiento crítico y análisis
- Documentación técnica clara

## Diferencias con Pentesting tradicional
- Alcance dinámico y continuo
- No hay informe cerrado, sino hallazgos independientes
- Recompensa por impacto real
- Comunidad global y colaborativa

## Ética y legalidad
- Respetar siempre el scope definido
- No explotar datos reales
- Divulgación responsable
- Cumplimiento legal y contractual

# Bug Bounty – Conceptos Avanzados y Temas Complementarios

## Modelos de programas Bug Bounty
- Programas públicos: abiertos a cualquier investigador
- Programas privados: acceso por invitación
- Programas híbridos: fases privadas antes de hacerse públicos
- Programas internos: orientados a equipos externos seleccionados

## Scope y reglas de compromiso
- Definición clara de dominios, IPs y aplicaciones permitidas
- Exclusiones explícitas (DoS, ingeniería social, phishing)
- Límites de automatización
- Gestión de datos sensibles y PII
- Ventanas de prueba y tiempos de respuesta esperados

## Severidad e impacto
- Uso de métricas como CVSS
- Evaluación basada en impacto real y explotabilidad
- Diferencia entre bug válido y comportamiento esperado
- Priorización según riesgo de negocio

## Recompensas y reconocimiento
- Recompensas monetarias escaladas por severidad
- Hall of Fame
- Puntos de reputación en plataformas
- Acceso anticipado a programas privados

## Reportes efectivos
- Pruebas de concepto reproducibles
- Evidencias claras (requests, responses, capturas)
- Explicación del impacto real
- Recomendaciones de mitigación
- Lenguaje técnico claro y conciso

## Automatización en Bug Bounty
- Uso responsable de escáneres
- Scripts personalizados para recon y fuzzing
- Integración de herramientas en pipelines locales
- Gestión de falsos positivos

## [OSINT](/ciberseguridad/osint/) aplicado a Bug Bounty
- Descubrimiento de subdominios
- Enumeración de servicios expuestos
- Análisis de repositorios públicos
- Correlación de fugas de información

## APIs y Bug Bounty
- Autenticación (OAuth, tokens, JWT)
- Rate limiting y bypass
- Validación de inputs
- Exposición de endpoints internos
- Lógica de negocio en APIs

## Cloud y Bug Bounty
- Configuraciones inseguras en cloud
- Almacenamiento expuesto
- Roles y permisos excesivos
- Errores en servicios gestionados
- Impacto de la compartición multi-tenant

## Mobile Bug Bounty
- Análisis de APK/IPA
- Comunicación cliente-servidor
- Almacenamiento inseguro
- Certificados y pinning
- Ingeniería inversa básica

## Bug Bounty en entornos empresariales
- Integración con SOC y Blue Team
- Gestión de tickets y SLAs
- Validación interna de reportes
- Coordinación con [DevSecOps](/devops/devsecops/)
- Ciclo de remediación

## Divulgación responsable
- Coordinación con el vendor
- Tiempos de embargo
- Publicación técnica posterior
- Gestión de CVEs cuando aplica

## Evolución profesional
- De CTF a Bug Bounty real
- Especialización por dominio (web, cloud, mobile)
- Construcción de portfolio técnico
- Reputación en plataformas
- Aprendizaje continuo basado en fallos reales

## Riesgos y errores comunes
- Falta de comprensión del scope
- Reportes sin impacto real
- Automatización excesiva
- Duplicados
- Documentación incompleta

## Tendencias actuales en Bug Bounty
- Aumento de foco en APIs
- Cloud y SaaS como superficie principal
- IA aplicada a recon y triage
- Mayor exigencia en calidad de reportes
- Programas orientados a impacto de negocio

## Relación con otros enfoques
- Pentesting continuo
- Red Team
- Purple Team
- DevSecOps
- Gestión de vulnerabilidades

# Recursos y Tools para Bug Bounty (2025)

## Plataformas de Bug Bounty
Estas plataformas son esenciales para practicar, encontrar programas activos y formar parte de la comunidad global de investigadores.

- **HackerOne** — Plataforma líder con programas públicos y privados, feed de “Hacktivity” para aprender de reportes divulgados. [securitytoolkits.com](https://www.securitytoolkits.com/blog/top-5-bug-bounty-platforms-2025?utm_source=chatgpt.com)
- **Bugcrowd** — Sistema de clasificación de investigadores y acceso a CTFs formativos junto con programas reales. [bugcrowd.com](https://www.bugcrowd.com/blog/join-bugcrowd-and-hack-the-box-for-the-ultimate-ctf/?utm_source=chatgpt.com)
- **Intigriti** — Fuerte presencia en Europa, con comunidad activa y noticias mensuales que muestran técnicas y bypasses recientes. [intigriti.com](https://www.intigriti.com/researchers/blog/bug-bytes/bug-bytes-220-january-2025?utm_source=chatgpt.com)
- **BugHunt** — Referencia en Latinoamérica para programas de Bug Bounty gestionados y con informes estandarizados. [bughunt.com.br](https://bughunt.com.br/es/?utm_source=chatgpt.com)

## Herramientas de Reconocimiento y Enumeración
Herramientas modernas que se utilizan para descubrir activos, mapas de superficie de ataque y enumerar vectores útiles en bug bounty.

- **[Subfinder](https://github.com/projectdiscovery/subfinder)** — Enumeración de subdominios automática, rápida y eficaz. [medium.com](https://medium.com/%40kailasv678/the-best-bug-bounty-tools-in-2025-with-pro-tips-to-use-them-effectively-e525878969e1?utm_source=chatgpt.com)
- **Amass** — Enumeración pasiva y activa de dominios con opciones exhaustivas de descubrimiento. [medium.com](https://medium.com/%40kailasv678/the-best-bug-bounty-tools-in-2025-with-pro-tips-to-use-them-effectively-e525878969e1?utm_source=chatgpt.com)
- **httpx** — Probar qué hosts responden, detección de tecnologías, títulos y códigos. [medium.com](https://medium.com/%40kailasv678/the-best-bug-bounty-tools-in-2025-with-pro-tips-to-use-them-effectively-e525878969e1?utm_source=chatgpt.com)
- **Nuclei** — Escáner de vulnerabilidades basado en templates comunitarios. [medium.com](https://medium.com/%40kailasv678/the-best-bug-bounty-tools-in-2025-with-pro-tips-to-use-them-effectively-e525878969e1?utm_source=chatgpt.com)

## Frameworks y Plataformas de Testing
Proporcionan capacidades más profundas para análisis de vulnerabilidades y explotación.

- **Metasploit** — Framework tradicional para desarrollar y ejecutar exploits. [en.wikipedia.org](https://en.wikipedia.org/wiki/Metasploit?utm_source=chatgpt.com)
- **Dradis Framework** — Plataforma colaborativa para centralizar findings y reportes durante pruebas de seguridad. [en.wikipedia.org](https://en.wikipedia.org/wiki/Dradis_Framework?utm_source=chatgpt.com)
- **WebVigil** — Kit de pentesting web que automatiza recon, fuzzing y pruebas OWASP Top 10 (comunidad). [reddit.com](https://www.reddit.com/r/Hacking_Tutorials/comments/1lf6zhb?utm_source=chatgpt.com)

## Repositorios y Metodologías
Guías y colecciones que consolidan pasos, técnicas y prácticas recomendadas.

- **Bug Bounty Hunting Methodology 2025** — Repositorio con etapas y herramientas sugeridas para navegar un objetivo en 2025. [github.com](https://github.com/amrelsagaei/Bug-Bounty-Hunting-Methodology-2025?utm_source=chatgpt.com)
- **Directorio de herramientas (comunidad)** — Listado colaborativo desde Discord/foros con numerosas herramientas clasificadas. [reddit.com](https://www.reddit.com//r/cybersecurity/comments/1pfkxex/i_made_a_bug_bounty_tools_directory/?utm_source=chatgpt.com)

## Recursos de Aprendizaje y Comunidades
Contenidos que ayudan a aprender técnicas modernas o estar al día con novedades.

- **Intigriti Bug Bytes** — Newsletter mensual con técnicas recientes como bypasses de WAF, CSRF, CORS y trucos prácticos. [intigriti.com](https://www.intigriti.com/researchers/blog/bug-bytes/bug-bytes-220-january-2025?utm_source=chatgpt.com)
- **Partnership CTF Bugcrowd × Hack the Box** — Eventos CTF colaborativos para mejorar habilidades y oportunidades en Bug Bounty. [bugcrowd.com](https://www.bugcrowd.com/blog/join-bugcrowd-and-hack-the-box-for-the-ultimate-ctf/?utm_source=chatgpt.com)

## IA y Automatización en Seguridad
Tendencias emergentes hacia IA aplicada al análisis de vulnerabilidades.

- **CAI: Open Bug Bounty-ready AI** — Framework de IA diseñado para acelerar la investigación de vulnerabilidades y retos CTF con agentes integrados. [arxiv.org](https://arxiv.org/abs/2504.06017?utm_source=chatgpt.com)
- **HexStrike-AI** — Herramienta ofensiva que integra LLMs con más de 150 herramientas para automatizar análisis y explotación (uso ofensivo observado). [techradar.com](https://www.techradar.com/pro/security/new-ai-powered-hexstrike-tool-is-being-used-to-target-multiple-citrix-security-flaws?utm_source=chatgpt.com)

## Tendencias y Programas Relevantes 2025
Información sobre la evolución de programas y recompensas top del año.

- **Google AI bounty** — Programa de recompensas específico para bugs en productos de IA con pagos de hasta $30K. [theverge.com](https://www.theverge.com/news/793362/google-ai-security-vulnerability-rewards?utm_source=chatgpt.com)
- **Microsoft “In Scope by Default”** — Expansion del programa Bug Bounty para incluir vulnerabilidades críticas incluso sin bounty formal previo. [techradar.com](https://www.techradar.com/pro/security/microsoft-will-expand-bug-bounties-even-on-programs-without-official-payouts?utm_source=chatgpt.com)
- **Apple Security Bounty ($2M+)** — Incremento histórico de recompensas con bonos adicionales para vulnerabilidades avanzadas. [tomshardware.com](https://www.tomshardware.com/tech-industry/cyber-security/apple-doubles-security-bounty-to-usd2-million-with-bonuses-potentially-increasing-rewards-to-usd5-million?utm_source=chatgpt.com)

## Consejos para utilizar estos recursos (2025)
- **Canaliza reconocimiento con pipelines:** encadena herramientas como `subfinder → httpx → nuclei` para automatizar recon inicial. [medium.com](https://medium.com/%40kailasv678/the-best-bug-bounty-tools-in-2025-with-pro-tips-to-use-them-effectively-e525878969e1?utm_source=chatgpt.com)
- **Prioriza aprendizaje de reports:** leer reportes divulgados en HackerOne ayuda a entender qué bugs califican y cómo se documentan.
- **Participa en CTF:** eventos como los de Bugcrowd + Hack the Box son una forma práctica de afinar habilidades. [bugcrowd.com](https://www.bugcrowd.com/blog/join-bugcrowd-and-hack-the-box-for-the-ultimate-ctf/?utm_source=chatgpt.com)
- **Actualiza herramientas constantemente:** la comunidad de bug bounty evoluciona rápido, con nuevos templates y scripts cada mes.

# Bug Bounty – Casos de Uso y Ejemplos Prácticos

## Caso de uso 1: Subdomain Takeover en aplicación SaaS
### Contexto
Una empresa SaaS mantiene múltiples subdominios para entornos de pruebas, marketing y APIs. Algunos servicios externos han sido dados de baja sin eliminar los registros DNS asociados.

### Objetivo del investigador
Identificar subdominios apuntando a servicios inexistentes que puedan ser reclamados por un tercero.

### Flujo práctico
- Enumeración de subdominios
- Identificación de CNAME hacia servicios externos
- Validación de servicio inexistente
- Toma de control del recurso

### Impacto
- Compromiso de reputación
- Posible robo de sesiones
- Phishing bajo dominio legítimo

### Severidad
Alta / Crítica según uso del subdominio

## Caso de uso 2: IDOR en aplicación web
### Contexto
Aplicación web con panel de usuario donde se accede a recursos mediante identificadores numéricos.

### Objetivo del investigador
Acceder a recursos de otros usuarios manipulando identificadores sin autorización.

### Flujo práctico
- Interceptar petición con proxy
- Modificar parámetro `user_id`
- Validar acceso no autorizado
- Confirmar exposición de datos

### Impacto
- Exposición de datos personales
- Incumplimiento de normativas
- Riesgo legal y reputacional

### Severidad
Alta

## Caso de uso 3: Exposición de API interna
### Contexto
Aplicación moderna con frontend SPA que consume múltiples endpoints REST no documentados públicamente.

### Objetivo del investigador
Descubrir y explotar endpoints internos accesibles desde Internet.

### Flujo práctico
- Análisis de tráfico del navegador
- Enumeración de endpoints
- Pruebas de autenticación y autorización
- Acceso a funciones administrativas

### Impacto
- Acceso a información sensible
- Ejecución de acciones privilegiadas
- Escalada de privilegios

### Severidad
Alta / Crítica

## Caso de uso 4: SSRF en integración cloud
### Contexto
Servicio que permite importar recursos externos mediante URL para procesamiento interno.

### Objetivo del investigador
Forzar al servidor a realizar peticiones internas no previstas.

### Flujo práctico
- Identificación de input controlado por URL
- Pruebas hacia IPs internas
- Acceso a metadata cloud
- Obtención de credenciales temporales

### Impacto
- Compromiso de infraestructura cloud
- Acceso a servicios internos
- Movimiento lateral

### Severidad
Crítica

## Caso de uso 5: Lógica de negocio defectuosa
### Contexto
Plataforma de e‑commerce con sistema de cupones y descuentos acumulables.

### Objetivo del investigador
Obtener beneficios económicos explotando flujos no previstos.

### Flujo práctico
- Análisis del proceso de compra
- Manipulación de estados intermedios
- Reutilización de cupones
- Bypass de validaciones

### Impacto
- Pérdidas económicas directas
- Abuso del sistema
- Escalado a fraude masivo

### Severidad
Media / Alta según impacto

## Caso de uso 6: XSS almacenado en panel interno
### Contexto
Aplicación corporativa con panel interno para soporte técnico accesible a múltiples roles.

### Objetivo del investigador
Ejecutar código JavaScript persistente en el navegador de otros usuarios.

### Flujo práctico
- Identificación de input no sanitizado
- Inserción de payload persistente
- Ejecución en sesión de usuario privilegiado
- Robo de tokens o acciones forzadas

### Impacto
- Compromiso de cuentas internas
- Escalada de privilegios
- Persistencia del ataque

### Severidad
Alta

## Caso de uso 7: Fuga de secretos en repositorios públicos
### Contexto
Organización con repositorios públicos para proyectos open source.

### Objetivo del investigador
Detectar claves, tokens o credenciales expuestas.

### Flujo práctico
- OSINT en repositorios
- Búsqueda de patrones sensibles
- Validación de credenciales activas
- Acceso no autorizado a servicios

### Impacto
- Acceso a infraestructura
- Compromiso de datos
- Uso abusivo de recursos

### Severidad
Alta / Crítica

## Estructura recomendada del reporte
- Resumen ejecutivo
- Descripción técnica
- Pasos de reproducción
- Evidencias
- Impacto real
- Recomendación de mitigación

## Aprendizajes clave
- El impacto pesa más que la complejidad técnica
- La lógica de negocio es una fuente frecuente de bugs válidos
- La claridad del reporte influye en la aceptación
- Menos automatización y más análisis manual suele dar mejores resultados

# Bug Bounty – Tools y Casos de Uso
$= dv.current().file.tags.join(" ")

## Reconocimiento y Enumeración
### Subfinder
**Caso de uso**
- Descubrimiento de subdominios olvidados o no documentados

**Aplicación práctica**
- Identificar entornos de staging, dev o legacy
- Base para subdomain takeover o surface mapping

### Amass
**Caso de uso**
- Enumeración profunda de dominios y relaciones DNS

**Aplicación práctica**
- Correlación de ASN, IPs y dominios
- Detección de activos fuera del scope visible

### httpx
**Caso de uso**
- Verificar qué subdominios están activos

**Aplicación práctica**
- Filtrar hosts vivos
- Identificar tecnologías, headers y códigos de estado
- Detección rápida de endpoints interesantes

## Escaneo y Detección de Vulnerabilidades
### Nuclei
**Caso de uso**
- Detección automatizada de vulnerabilidades conocidas

**Aplicación práctica**
- CVEs recientes
- Misconfigurations
- Exposición de archivos sensibles
- Validación rápida antes de análisis manual

### Nikto
**Caso de uso**
- Detección básica de malas configuraciones web

**Aplicación práctica**
- Headers inseguros
- Archivos por defecto
- Versiones vulnerables de servidores

## Análisis Manual y Explotación Web
### Burp Suite
**Caso de uso**
- Interceptación y manipulación de tráfico HTTP

**Aplicación práctica**
- IDOR
- XSS
- CSRF
- Lógica de negocio
- Bypass de validaciones cliente

### OWASP ZAP
**Caso de uso**
- Análisis dinámico de aplicaciones web

**Aplicación práctica**
- Descubrimiento de endpoints ocultos
- Escaneo pasivo complementario a Burp

## APIs y Aplicaciones Modernas
### Postman
**Caso de uso**
- Interacción directa con APIs REST y GraphQL

**Aplicación práctica**
- Pruebas de autorización
- Enumeración de endpoints
- Manipulación de tokens y scopes

### GraphQL Voyager / GraphiQL
**Caso de uso**
- Análisis de esquemas GraphQL

**Aplicación práctica**
- Descubrimiento de queries y mutations
- Acceso a datos no previstos
- Abuso de introspection

## Cloud y Entornos Distribuidos
### ScoutSuite
**Caso de uso**
- Auditoría de configuraciones cloud

**Aplicación práctica**
- Roles y permisos excesivos
- Servicios expuestos
- Storage público

### Prowler
**Caso de uso**
- Evaluación de seguridad en AWS

**Aplicación práctica**
- Detección de malas prácticas
- Apoyo a reportes de impacto cloud

## Análisis de Tráfico y Red
### Wireshark
**Caso de uso**
- Inspección de tráfico de red

**Aplicación práctica**
- Tokens en claro
- Protocolos inseguros
- Análisis forense en CTFs

### tcpdump
**Caso de uso**
- Captura rápida de tráfico

**Aplicación práctica**
- Análisis en servidores
- Validación de comunicaciones internas

## OSINT y Recolección de Información
### GitHub Search
**Caso de uso**
- Descubrimiento de secretos y configuraciones

**Aplicación práctica**
- Tokens expuestos
- URLs internas
- Credenciales hardcodeadas

### theHarvester
**Caso de uso**
- Recolección de correos y dominios

**Aplicación práctica**
- Ampliar superficie de ataque
- Identificar patrones organizativos

## Criptografía y Forense
### CyberChef
**Caso de uso**
- Decodificación y transformación de datos

**Aplicación práctica**
- JWT
- Base64
- Hashes
- Análisis rápido de payloads

### Didier Stevens Tools
**Caso de uso**
- Análisis avanzado de archivos

**Aplicación práctica**
- PDFs maliciosos
- Archivos ofuscados
- Metadatos ocultos

## Automatización y Scripting
### Python
**Caso de uso**
- Automatización de tareas repetitivas

**Aplicación práctica**
- Fuzzing personalizado
- Validación masiva de endpoints
- Procesamiento de resultados

### Bash
**Caso de uso**
- Orquestación de pipelines de herramientas

**Aplicación práctica**
- Recon encadenado
- Limpieza y filtrado de outputs

## Mobile Bug Bounty
### JADX
**Caso de uso**
- Ingeniería inversa de APKs

**Aplicación práctica**
- Endpoints ocultos
- Claves embebidas
- Lógica cliente

### Frida
**Caso de uso**
- Instrumentación dinámica

**Aplicación práctica**
- Bypass de validaciones
- Análisis de runtime
- Hooking de funciones sensibles

## Enfoque recomendado
- Recon amplio pero controlado
- Automatizar detección, no validación
- Priorizar impacto real
- Combinar tools con análisis manual
- Documentar cada hallazgo desde el inicio

# Repositorios GitHub Útiles para Bug Bounty y Ciberseguridad (2025)

## Listados generales y colecciones de herramientas
- **[awesome-bugbounty-tools](https://github.com/vavkamil/awesome-bugbounty-tools)** — Lista curada de herramientas para reconocimiento, DNS, subdominios y otros recursos útiles en Bug Bounty.
- **[0xKayala/BugBountyTools](https://github.com/0xKayala/BugBountyTools)** — Colección de herramientas para pruebas de aplicaciones web, APIs, móviles y cloud (recon, fuzzing, escaneo, explotación).
- **[MaMad4Ever/Bug-Bounty-Tools](https://github.com/MaMad4Ever/Bug-Bounty-Tools)** — Enlaces a diversas herramientas de Bug Bounty (proxies, sniffers, escáneres).
- **[Hack-with-Github/Awesome-Hacking](https://github.com/Hack-with-Github/Awesome-Hacking)** — Lista extensa de recursos de hacking, bug bounty, CTF tools, CVE PoCs, criptografía y más.
- **[nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters](https://github.com/nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters)** — Recursos y herramientas orientadas a principiantes en Bug Bounty y web hacking.
- **[dwisiswant0/awesome-oneliner-bugbounty](https://github.com/dwisiswant0/awesome-oneliner-bugbounty)** — Conjunto de *one‑liners* para distintos escenarios de Bug Bounty.

## Metodologías y guías de proceso
- **[amrelsagaei/Bug-Bounty-Hunting-Methodology-2025](https://github.com/amrelsagaei/Bug-Bounty-Hunting-Methodology-2025)** — Guía metodológica actualizada para estructurar pruebas de Bug Bounty en 2025.

## Repositorios específicos de técnicas
- **[abu76/Google-Dorking-for-Bug-Bounty-](https://github.com/abu76/Google-Dorking-for-Bug-Bounty-)** — Listado de Google Dorks útiles para localizar información sensible, paneles expuestos y superficies de ataque.

## Recursos auxiliares y orientados a ciberseguridad general
*(Aunque no son exclusivamente de bug bounty, complementan el flujo de seguridad y análisis)*
- **[bst04/CyberSources](https://github.com/bst04/CyberSources)** — Hub de herramientas y recursos para profesionales de ciberseguridad (escaneo, aprendizaje, listas útiles).

## Categorías sugeridas para explorar (GitHub Topics)
Además de los repos anteriores, puedes explorar estas etiquetas directamente en GitHub para descubrir más proyectos actualizados:
- **[bugbounty-tools](https://github.com/topics/bugbounty-tools)** — Repositorios relacionados con herramientas de Bug Bounty.
- **[bug-bounty](https://github.com/topics/bug-bounty)** — Proyectos, guías y herramientas para bug bounty y pentesting.

## Cómo usar estos repositorios
- **Recon y superficie de ataque:** `awesome-bugbounty-tools`, `BugBountyTools`
- **Metodologías de flujo:** `Bug-Bounty-Hunting-Methodology-2025`
- **Recursos de aprendizaje:** `Resources-for-Beginner-Bug-Bounty-Hunters`
- **Técnicas puntuales:** `awesome-oneliner-bugbounty`, `Google-Dorking-for-Bug-Bounty-`
- **Lista amplia de seguridad:** `Awesome-Hacking`, `CyberSources`

## Consejos de exploración
- Filtra por fecha de última actualización para herramientas activas en 2025.
- Revisa *issues* y *pull requests* recientes para evaluar comunidad activa.
- Usa GitHub Topics para descubrir proyectos por lenguaje o área de interés.
