---
date: 2025-04-14 17:50
title: Burp Suite
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: true
category: ciberseguridad
tags:
  - Hacking
  - pentesting
  - burp-suite
  - tool
---
# Burp Suite
``

## Concepto y propósito
Burp Suite es una plataforma integral para pruebas de seguridad en aplicaciones web, ampliamente utilizada en [Pentesting](/ciberseguridad/pentesting/) y análisis de [vulnerabilidades](/ciberseguridad/vulnerabilidades/). Actúa como un proxy de interceptación entre el navegador y la aplicación, permitiendo inspeccionar, modificar y analizar el tráfico HTTP/S en tiempo real. Es una herramienta clave tanto para auditorías manuales como para procesos automatizados de detección de fallos de seguridad.

## Relación con otras áreas
-	[vulnerabilidades](/ciberseguridad/vulnerabilidades/): Identificación y validación de fallos como XSS, SQLi, CSRF, IDOR y deserialización insegura.
-	[Pentesting](/ciberseguridad/pentesting/): Uso durante fases de reconocimiento, análisis, explotación y validación de impactos.
-	[monitoreo](/monitoreo/monitoreo/): Observación continua del comportamiento de la aplicación, flujos de sesión y comunicaciones cliente-servidor.

## Componentes principales
-	**Proxy**
	-	Intercepta y modifica peticiones y respuestas HTTP/S.
	-	Permite manipular cabeceras, parámetros, cookies y cuerpos de mensajes.
-	**Repeater**
	-	Reenvío manual de peticiones para análisis detallado.
	-	Ideal para pruebas de lógica, validación de entradas y bypass de controles.
-	**Intruder**
	-	Fuerza bruta y ataques basados en payloads.
	-	Útil para enumeración, fuzzing y validación de controles de acceso.
-	**Scanner**
	-	Scanner vulnerabilities en apps web.
	-	Detecta automáticamente vulnerabilidades comunes y configuraciones inseguras.
-	**Sequencer**
	-	Análisis de aleatoriedad en tokens de sesión.
	-	Evaluación de la robustez criptográfica de identificadores.
-	**Decoder**
	-	Codificación y decodificación (Base64, URL, Hex, etc.).
	-	Apoyo en ingeniería inversa de parámetros y tokens.
-	**Comparer**
	-	Comparación de respuestas para identificar diferencias sutiles.
	-	Muy útil en pruebas de autorización y control de acceso.

## Scanner de vulnerabilidades
-	Análisis automático de aplicaciones web.
-	Detección de:
	-	Inyecciones (SQL, OS, LDAP).
	-	Cross-Site Scripting (reflejado, almacenado, DOM).
	-	Problemas de autenticación y sesión.
	-	Configuraciones inseguras y cabeceras débiles.
-	Complementa, pero no sustituye, el análisis manual.

## Flujo de trabajo típico en Pentesting
-	Configuración del navegador con el proxy de Burp.
-	Navegación controlada de la aplicación para mapear endpoints.
-	Análisis manual con Proxy y Repeater.
-	Uso de Intruder para fuzzing y enumeración.
-	Ejecución del Scanner para detección automatizada.
-	Validación manual de hallazgos y evaluación de impacto.

## Casos de uso comunes
-	Auditorías de seguridad web.
-	Revisión de APIs REST y GraphQL.
-	Pruebas de control de acceso y roles.
-	Análisis de flujos de autenticación y autorización.
-	Validación de parches y correcciones de seguridad.

## Buenas prácticas
-	Combinar el Scanner con pruebas manuales.
-	Definir correctamente el scope para evitar ruido.
-	Documentar cada hallazgo con evidencia reproducible.
-	Usar extensiones solo de fuentes confiables.
-	Integrar Burp Suite en metodologías estructuradas de [Pentesting](/ciberseguridad/pentesting/).

## Extensibilidad y ecosistema
-	Soporte de extensiones vía BApp Store.
-	Integración con scripts y herramientas externas.
-	Automatización parcial mediante APIs y flujos personalizados.

## Recursos de aprendizaje
-	[¿Qué es Burp Suite? | KeepCoding Bootcamps](https://keepcoding.io/blog/que-es-burp-suite/)
-	[Aprende Burp Suite Desde Cero | Curso De Burp Suite y La Web para Hacking Ético - YouTube](https://youtu.be/zf_dsBgGzxw)

# Burp Suite – Conceptos Avanzados y Temas Complementarios

## Arquitectura interna
-	Modelo cliente–proxy–servidor.
-	Procesamiento de tráfico mediante listeners y reglas.
-	Manejo de estados, sesiones y cookies a nivel interno.
-	Diferencias de arquitectura entre edición Community y Professional.

## Gestión de Scope y Target
-	Definición precisa de alcance para pruebas controladas.
-	Exclusión de dominios, rutas y tipos de contenido.
-	Impacto del scope en Scanner, Proxy e Intruder.
-	Reducción de falsos positivos y ruido operativo.

## Análisis de aplicaciones modernas
-	Aplicaciones SPA (React, Angular, Vue).
-	Manipulación de APIs REST.
-	Soporte y pruebas sobre GraphQL.
-	Interceptación y análisis de WebSockets.
-	Testing de aplicaciones con autenticación basada en tokens (JWT, OAuth).

## Pruebas de autenticación y sesión
-	Análisis avanzado de cookies de sesión.
-	Validación de flags de seguridad (HttpOnly, Secure, SameSite).
-	Pruebas de fijación y reutilización de sesiones.
-	Manipulación de tokens JWT:
	-	Header y payload.
	-	Algoritmos inseguros.
	-	Validación de firmas.

## Control de acceso y lógica de negocio
-	Pruebas de autorización horizontal y vertical.
-	Detección de IDOR mediante comparación de respuestas.
-	Análisis de workflows complejos.
-	Bypass de controles basados en cliente.
-	Validación de estados inconsistentes de la aplicación.

## Automatización avanzada
-	Macros para manejo automático de login.
-	Session handling rules.
-	Reutilización de sesiones en ataques automatizados.
-	Encadenamiento de acciones en flujos complejos.

## Extensiones personalizadas
-	Desarrollo de extensiones en Java, Python y Ruby.
-	Uso de la Burp Extender API.
-	Creación de herramientas internas para pruebas específicas.
-	Integración con flujos de trabajo propios de auditoría.

## Integración con otras herramientas
-	Interacción con herramientas de fuzzing externas.
-	Exportación de tráfico para análisis forense.
-	Uso conjunto con proxies adicionales.
-	Integración en pipelines de CI/CD para pruebas de seguridad continuas.

## Reportes y documentación
-	Generación de informes técnicos.
-	Adaptación de reportes para perfiles no técnicos.
-	Clasificación de riesgos y severidades.
-	Asociación de evidencias reproducibles.
-	Buenas prácticas de comunicación de hallazgos.

## Rendimiento y optimización
-	Configuración eficiente del Scanner.
-	Gestión de memoria y recursos.
-	Filtrado de contenido irrelevante.
-	Uso de reglas de exclusión para mejorar resultados.

## Consideraciones legales y éticas
-	Uso exclusivo en entornos autorizados.
-	Importancia del consentimiento explícito.
-	Registro de actividades durante auditorías.
-	Alineación con metodologías y estándares profesionales.

## Comparativa con otras herramientas
-	Diferencias frente a proxies alternativos.
-	Ventajas en pruebas manuales frente a scanners puros.
-	Casos donde Burp Suite es más efectivo.
-	Limitaciones conocidas y cómo mitigarlas.

## Uso en Blue Team y AppSec
-	Validación de hallazgos defensivos.
-	Reproducción de vulnerabilidades reportadas.
-	Apoyo en procesos de hardening.
-	Colaboración entre Red Team y Blue Team.

## Evolución y tendencias
-	Soporte para nuevas tecnologías web.
-	Mejoras en automatización y detección.
-	Aumento del foco en APIs y microservicios.
-	Integración con enfoques DevSecOps.

# Burp Suite – Recursos Actualizados a 2025
$= dv.current().file.tags.join(" ")

## Versiones y lanzamientos oficiales
-	**Burp Suite Professional / Community 2025.12**: última versión publicada en diciembre de 2025, con mejoras como soporte de OAuth2 Client Credentials para escaneo de APIs, mejoras en Comparer y atajos de extensiones.  
	-	[Notas de la versión 2025.12 – PortSwigger](https://portswigger.net/burp/releases/professional-community-2025-12)
-	Versiones intermedias relevantes en 2025 incluyen **2025.8** con soporte Burp AI en Repeater y mejoras para extensiones con IA, y **2025.9.5** con checks de escaneo personalizados y panel de configuración simplificado.  
	-	[Notas de la versión 2025.8 – PortSwigger](https://portswigger.net/burp/releases/professional-community-2025-8)
-	Actualizaciones de **Burp Suite Community Edition 2025.1.1** con parches de seguridad y correcciones de bugs.  
	-	[Burp Suite Community Edition 2025.1.1 – ManageEngine](https://www.manageengine.com/products/desktop-central/patch-management/Burp-Suite-Community-Edition-%28x64%29-patches/burpsuite_community_windows-x64_v2025_1_1_2025.1.1-patch.html)

## Cursos en línea y formación
-	**Curso práctico gratuito de Burp Suite para hacking ético – Hixec (2025)**: formación que cubre desde conceptos de web hasta configuración de Proxy, scope, Repeater e Intruder.  
	-	[Curso Burp Suite y la Web para Pentesting – Hixec](https://hixec.com/cursos/burp-suite-y-la-web-para-pentesting/)
-	**Online Course: Burp Suite – Introducción a las pruebas de penetración** en Coursera Project Network: curso guiado para aprender configuración de Burp, análisis de tráfico e identificación de vulnerabilidades básicas.  
	-	[Curso en Class Central / Coursera](https://www.classcentral.com/course/burpsuite-introcuccin-a-las-pruebas-de-penetracin-205796)
-	**Curso especializado de Burp Suite – Duriva University**: curso avanzado con secciones enfocadas en técnicas de ataque y uso profesional de Burp Suite.  
	-	[Curso de Burp Suite – Duriva University](https://duriva.university/courso/curso-de-burp-suite/)

## Tutoriales y guías prácticas
-	**Tutorial paso a paso de Burp Suite – ManuSoft.es**: desde instalación hasta uso de Proxy, Site Map e Intruder con ejemplos prácticos.  
	-	[Tutorial Burp Suite – ManuSoft](https://www.manusoft.es/tutorial-burp-suite/)
-	**Guía de inicio en Medium: Getting Started with Burp Suite (Jul 29 2025)**: introducción clara para principiantes con explicación de módulos principales.  
	-	[Getting Started with Burp Suite – Medium](https://medium.com/@paritoshblogs/%EF%B8%8Fgetting-started-with-burp-suite-for-beginners-f2f894329dfd)
-	Listas de recursos, tips y extensiones recomendadas para Burp Suite.  
	-	[Burp Suite Resources – AppSec Guide](https://appsec.guide/docs/web/burp/resources/)

## Recursos complementarios y comunidad
-	Repositorios y extensiones:
	-	**Burp_CVE-2025-31324**: extensión en Python para detectar un CVE crítico específico, útil para auditorías especializadas.  
		-	[Repositorio Burp_CVE-2025-31324 – GitHub](https://github.com/BlueOWL-overlord/Burp_CVE-2025-31324)
-	Comunidades y debates técnicos:
	-	Acciones personalizadas y tips avanzados para Burp Pro compartidos por la comunidad.  
		-	[Custom actions en Burp – Reddit](https://www.reddit.com/r/bugbounty/comments/1pc5ghr/burp_custom_actions_are_awesome/)
	-	Recomendaciones de recursos de aprendizaje y práctica.  
		-	[Recursos Burp y AppSec – Reddit](https://www.reddit.com/r/redteamsec/)

## Entornos y práctica con herramientas
-	Laboratorios prácticos con **Kali Linux** para pruebas web usando Burp Suite.  
	-	[Kali Web Testing with Burp Suite – LabEx](https://labex.io/es/tutorials/kali-kali-web-testing-with-burp-suite-552302)
-	Material académico y talleres de ciberseguridad 2025 que integran Burp Suite con FoxyProxy y herramientas estándar.  
	-	[Taller de Ciberseguridad 2025 – Scribd](https://es.scribd.com/document/865875418/Actividad-Final-Grupal-Taller-Ciberseguridad-2025)

## Enfoques emergentes (tendencias de la investigación)
-	Investigación sobre suites colaborativas de testing que integran herramientas como Burp Suite en contextos de IA y nuevas amenazas.  
	-	[Collaborative Security Testing Tools – arXiv](https://arxiv.org/abs/2510.19303)

## Recursos oficiales y útiles
-	PortSwigger – descargas, documentación oficial y notas de versiones.  
	-	[Burp Suite Releases – PortSwigger](https://portswigger.net/burp/releases)
-	PortSwigger Academy – laboratorio oficial para aprender web security con Burp Suite.  
	-	[PortSwigger Web Security Academy](https://portswigger.net/web-security)

## Repositorios útiles de GitHub para Burp Suite

### 📦 Extensiones y colecciones de plugins
-	**[snoopysecurity/awesome-burp-extensions](https://github.com/snoopysecurity/awesome-burp-extensions)**  
	Colección curada de extensiones para Burp Suite, incluyendo *Burp Beautifier*, *SocketSleuth*, *GraphQL Raider* y otras, organizadas por funcionalidad.

-	**[kh4sh3i/Awesome-Burp-Extensions](https://github.com/kh4sh3i/Awesome-Burp-Extensions)**  
	Lista curada de extensiones destacadas agrupadas por tipos de vulnerabilidades y funciones como *Autorize*, *Turbo Intruder*, *InQL Scanner*, entre otras.

-	**[doyensec/CSPTBurpExtension](https://github.com/doyensec/CSPTBurpExtension)**  
	Extensión para detectar y explotar *Client-Side Path Traversal* de forma automatizada mediante un scanner pasivo en Burp.

### 🧠 Integraciones y herramientas avanzadas
-	**[PortSwigger/autowasp](https://github.com/PortSwigger/autowasp)**  
	Extensión que integra Burp Suite con el checklist de **OWASP WSTG**, guiando pruebas de seguridad basadas en el estándar.

-	**[PortSwigger/BChecks](https://github.com/PortSwigger/BChecks)**  
	Colección de *BChecks* comunitarios para personalizar y ampliar las reglas de escaneo de Burp Suite.

-	**[Repositorios oficiales de PortSwigger](https://github.com/PortSwigger)**  
	Conjunto de proyectos oficiales relacionados con Burp Suite, extensiones, integraciones y herramientas auxiliares.

### 🔧 Extensiones de productividad y mejoras UI
-	**[irsdl/BurpSuiteSharpenerEx](https://github.com/irsdl/BurpSuiteSharpenerEx)**  
	Extensión para mejorar la usabilidad de Burp Suite con navegación avanzada, accesos rápidos, estilos y personalización de la interfaz.

### 🔄 Otras herramientas relacionadas con Burp
-	**Scripts de instalación y actualización**
	-	**[Latest-Burpsuite-Professional-v2025](https://github.com/0dayan0n/Latest-Burpsuite-Professional-v2025)**  
		Script para automatizar la instalación y actualización de Burp Suite Professional.

### 🧭 Temas y listados generales
-	Explorar el topic **burp-extensions** en GitHub para descubrir extensiones nuevas y mantenidas por la comunidad.  
	-	[GitHub Topic: burp-extensions](https://github.com/topics/burp-extensions)

## Recursos adicionales
-	**BApp Store oficial de PortSwigger**  
	Extensiones instalables directamente desde Burp Suite, muchas con enlace al código fuente en GitHub.  
	-	[BApp Store – PortSwigger](https://portswigger.net/bappstore)

# Burp Suite – Guía de Casos de Uso y Configuración

## Configuración inicial del entorno
-	Instalar Burp Suite (Community o Professional).
-	Configurar el navegador para usar el proxy local:
	-	Proxy HTTP/HTTPS: `127.0.0.1:8080`.
-	Instalar el certificado CA de Burp en el navegador o sistema.
-	Verificar interceptación correcta de tráfico HTTPS.
-	Configurar codificación y visualización de mensajes según necesidades.

## Gestión de Scope y Target
-	Definir dominios y subdominios en **Target → Scope**.
-	Excluir recursos irrelevantes:
	-	CDN, analytics, recursos estáticos.
-	Usar el scope para:
	-	Limitar el Scanner.
	-	Reducir ruido en Proxy e Intruder.
-	Revisar el Site Map solo con elementos en alcance.

## Caso de uso: Reconocimiento de aplicaciones web
-	Navegación manual controlada de la aplicación.
-	Construcción automática del Site Map.
-	Identificación de endpoints ocultos.
-	Análisis de parámetros, cookies y cabeceras.
-	Detección temprana de superficies de ataque.

## Caso de uso: Análisis manual de vulnerabilidades
-	Interceptar peticiones con **Proxy**.
-	Enviar peticiones relevantes a **Repeater**.
-	Modificar parámetros:
	-	Inputs de usuario.
	-	IDs numéricos.
	-	Tokens y flags booleanos.
-	Analizar respuestas para validar comportamientos inesperados.

## Caso de uso: Pruebas de inyección
-	Usar **Repeater** para validar inyecciones manuales.
-	Enviar peticiones a **Intruder**:
	-	Configuración de posiciones de ataque.
	-	Selección de payloads personalizados.
-	Detectar:
	-	SQL Injection.
	-	Command Injection.
	-	LDAP y XPath Injection.
-	Confirmar impacto y explotación controlada.

## Caso de uso: Fuzzing y enumeración
-	Configurar **Intruder** con:
	-	Attack type adecuado (Sniper, Battering Ram, Pitchfork, Cluster Bomb).
	-	Payloads incrementales y listas personalizadas.
-	Enumerar:
	-	Usuarios.
	-	Recursos.
	-	Endpoints.
-	Analizar diferencias de longitud, código HTTP y tiempos de respuesta.

## Caso de uso: Pruebas de autenticación
-	Interceptar procesos de login.
-	Analizar:
	-	Parámetros de autenticación.
	-	Respuestas ante credenciales inválidas.
-	Configurar **Macros** para login automático.
-	Definir **Session Handling Rules**.
-	Probar:
	-	Fuerza bruta.
	-	Bypass de autenticación.
	-	Reutilización de sesiones.

## Caso de uso: Gestión de sesiones
-	Analizar cookies de sesión.
-	Validar flags:
	-	Secure.
	-	HttpOnly.
	-	SameSite.
-	Usar **Sequencer** para analizar entropía.
-	Detectar:
	-	Fijación de sesión.
	-	Tokens predecibles.
	-	Reutilización indebida.

## Caso de uso: Control de acceso e IDOR
-	Identificar parámetros relacionados con IDs.
-	Comparar respuestas con **Comparer**.
-	Modificar identificadores en Repeater.
-	Detectar:
	-	Acceso horizontal no autorizado.
	-	Escalada vertical de privilegios.
-	Validar impactos reales en datos y funciones.

## Caso de uso: Testing de APIs REST
-	Importar colecciones OpenAPI / Swagger.
-	Enviar peticiones desde Repeater.
-	Probar:
	-	Métodos HTTP no documentados.
	-	Validación de tokens JWT.
	-	Falta de control de acceso.
-	Analizar respuestas JSON en profundidad.

## Caso de uso: Testing de GraphQL
-	Descubrir esquema mediante introspección.
-	Enumerar queries y mutations.
-	Manipular:
	-	Campos.
	-	Argumentos.
	-	Depth de queries.
-	Detectar:
	-	Exposición excesiva de datos.
	-	Falta de límites de complejidad.

## Caso de uso: Escaneo automático de vulnerabilidades
-	Configurar **Scanner** solo sobre scope definido.
-	Seleccionar perfiles de escaneo adecuados.
-	Revisar hallazgos automáticamente detectados.
-	Validar manualmente cada vulnerabilidad.
-	Evitar depender únicamente del escaneo automático.

## Caso de uso: Testing de aplicaciones SPA
-	Interceptar tráfico API subyacente.
-	Analizar peticiones AJAX y fetch.
-	Manipular estados del cliente.
-	Detectar validaciones solo en frontend.

## Caso de uso: WebSockets
-	Interceptar mensajes WebSocket.
-	Modificar payloads en tiempo real.
-	Detectar:
	-	Falta de autenticación.
	-	Validación insuficiente de mensajes.
-	Probar persistencia de sesión.

## Configuración de automatización
-	Crear macros para acciones repetitivas.
-	Configurar reglas de manejo de sesión.
-	Encadenar acciones complejas.
-	Reducir trabajo manual en pruebas extensas.

## Configuración de extensiones
-	Instalar extensiones desde BApp Store.
-	Revisar permisos y código fuente.
-	Actualizar extensiones periódicamente.
-	Eliminar extensiones no utilizadas.

## Configuración de reportes
-	Clasificar hallazgos por severidad.
-	Documentar pasos de reproducción.
-	Adjuntar evidencias técnicas.
-	Adaptar informes según audiencia:
	-	Técnica.
	-	Ejecutiva.

## Buenas prácticas operativas
-	Definir alcance claro antes de iniciar pruebas.
-	Registrar cambios y configuraciones usadas.
-	Combinar análisis manual y automático.
-	Repetir pruebas tras aplicar correcciones.
-	Usar Burp Suite solo en entornos autorizados.
