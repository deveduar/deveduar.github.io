---
date: 2025-04-15 03:33
title: modelado de amenazas
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
aliases:
public_note: "true"
category: Hacking
tags:
  - Hacking
  - amenazas
  - ciberseguridad
---
# Modelado de Amenazas
`$= dv.current().file.tags.join(" ")`

## Concepto de Threat Modeling
El **Threat Modeling** (modelado de amenazas) es una disciplina sistemática dentro de la seguridad de la información que permite **identificar, analizar y priorizar amenazas** potenciales contra un sistema, aplicación o infraestructura antes de que sean explotadas.

Su objetivo principal es **reducir riesgos desde la fase de diseño**, integrando la seguridad como parte del ciclo de vida del desarrollo y de la arquitectura del sistema, no como una acción reactiva posterior.

Está estrechamente relacionado con:
- [OWASP](/ciberseguridad/owasp/)
- [Pentesting](/ciberseguridad/pentesting/)

Mientras que el pentesting valida vulnerabilidades existentes, el modelado de amenazas **anticipa escenarios de ataque**, permitiendo diseñar controles de seguridad efectivos desde etapas tempranas.

## Objetivos del Modelado de Amenazas
- Identificar activos críticos (datos, procesos, sistemas).
- Comprender cómo fluye la información dentro del sistema.
- Descubrir amenazas técnicas y lógicas antes de la implementación.
- Evaluar impacto y probabilidad de explotación.
- Priorizar mitigaciones basadas en riesgo real.
- Reducir costos de seguridad al prevenir vulnerabilidades en diseño.

## Componentes Fundamentales
### Activos
Elementos que requieren protección:
- Datos sensibles (PII, credenciales, secretos).
- Servicios críticos.
- Infraestructura y recursos de red.
- Reputación y cumplimiento normativo.

### Amenazas
Eventos o acciones que pueden comprometer un activo:
- Accesos no autorizados.
- Manipulación de datos.
- Denegación de servicio.
- Escalada de privilegios.
- Persistencia y movimiento lateral.

### Vulnerabilidades
Debilidades técnicas o de diseño que permiten que una amenaza se materialice:
- Errores de lógica.
- Configuraciones inseguras.
- Falta de controles de autenticación/autorización.
- Dependencias vulnerables.

### Contramedidas
Controles diseñados para mitigar amenazas:
- Técnicos (WAF, autenticación fuerte, cifrado).
- Organizativos (políticas, procedimientos).
- Operacionales (monitorización, respuesta a incidentes).

## Proceso de Modelado de Amenazas ([OWASP](/ciberseguridad/owasp/))
Basado en el enfoque recomendado por OWASP:

### 1. Definir el Alcance
- Identificar qué sistema o componente será analizado.
- Determinar límites, dependencias externas y supuestos.
- Alinear el análisis con objetivos de negocio.

### 2. Crear Diagramas de Arquitectura
- Diagramas de flujo de datos (DFD).
- Componentes internos y externos.
- Puntos de entrada y salida.
- Zonas de confianza y fronteras de seguridad.

### 3. Identificar Amenazas
- Analizar cada componente y flujo.
- Aplicar metodologías como STRIDE.
- Considerar amenazas internas y externas.

### 4. Evaluar Riesgos
- Impacto potencial.
- Probabilidad de explotación.
- Nivel de exposición.
- Priorización basada en riesgo.

### 5. Definir Mitigaciones
- Cambios de diseño.
- Controles técnicos adicionales.
- Reglas de seguridad y validaciones.
- Planes de respuesta y monitoreo.

Referencia oficial:
- [Threat Modeling Process | OWASP Foundation](https://owasp.org/www-community/Threat_Modeling_Process)

## Metodologías Comunes de Modelado de Amenazas
### STRIDE
Modelo desarrollado por Microsoft que clasifica amenazas en:
- Suplantación (Spoofing).
- Manipulación (Tampering).
- Repudio (Repudiation).
- Divulgación de información (Information Disclosure).
- Denegación de servicio (Denial of Service).
- Elevación de privilegios (Elevation of Privilege).

### DREAD
Modelo de evaluación de riesgo:
- Daño potencial.
- Reproducibilidad.
- Explotabilidad.
- Usuarios afectados.
- Detectabilidad.

### PASTA
Enfoque orientado al negocio:
- Análisis de impacto.
- Objetivos del atacante.
- Correlación con riesgos empresariales.

### LINDDUN
Centrado en privacidad:
- Identificación de amenazas a la privacidad.
- Útil en entornos con requisitos de cumplimiento (GDPR).

## Relación con Pentesting
- El modelado de amenazas **guía el pentesting**, indicando qué áreas son más críticas.
- Permite crear casos de prueba más realistas.
- Reduce el enfoque puramente técnico al incorporar contexto de negocio.
- Mejora la cobertura de ataques complejos y encadenados.

Relacionado directamente con [Pentesting](/ciberseguridad/pentesting/).

## Amenazas Avanzadas y Modelado
### APT (Advanced Persistent Threat)
Las **APT** representan atacantes altamente sofisticados que:
- Mantienen persistencia a largo plazo.
- Utilizan técnicas avanzadas de evasión.
- Realizan reconocimiento profundo.
- Se enfocan en objetivos estratégicos.

El modelado de amenazas ayuda a:
- Identificar puntos de persistencia.
- Analizar movimientos laterales.
- Diseñar defensas en profundidad.
- Anticipar ataques dirigidos.

Referencia:
- [¿Qué es una amenaza persistente avanzada (APT)? | Fortinet](https://www.fortinet.com/lat/resources/cyberglossary/advanced-persistent-threat)

## Herramientas de [Threat modeling](/hacking/modelado-de-amenazas/)
- Microsoft Threat Modeling Tool.
- OWASP Threat Dragon.
- IriusRisk.
- Threatspec.
- securiCAD.
- Draw.io + plantillas DFD.
- Modelado manual en Obsidian con diagramas y listas estructuradas.

## Beneficios Clave
- Reducción temprana de vulnerabilidades críticas.
- Mejora del diseño seguro.
- Menor dependencia de controles reactivos.
- Alineación entre equipos técnicos y de negocio.
- Mayor madurez del programa de seguridad.

## Recursos y Lecturas
- [Threat modeling: claves y técnicas del modelado de amenazas | S2 Grupo](https://s2grupo.es/threat-modeling-claves-y-tecnicas-del-modelado-de-amenazas/)
- [Threat model - Wikipedia](https://en.wikipedia.org/wiki/Threat_model)
- [OWASP](/ciberseguridad/owasp/)

# Modelado de Amenazas — Expansión Avanzada
`$= dv.current().file.tags.join(" ")`

## Integración en el Ciclo de Vida del Desarrollo ([SDLC](/devops/sdlc/))
El modelado de amenazas debe integrarse como una **actividad continua** dentro del SDLC y no como un evento puntual.

- Fase de requisitos:
	- Identificación temprana de riesgos de negocio.
	- Definición de requisitos de seguridad no funcionales.
- Fase de diseño:
	- Validación de arquitecturas seguras.
	- Análisis de fronteras de confianza.
- Fase de desarrollo:
	- Alineación con prácticas de [OWASP](/ciberseguridad/owasp/) Secure Coding.
	- Validación de controles definidos en el modelo.
- Fase de pruebas:
	- Priorización de pruebas de seguridad.
	- Apoyo directo al [Pentesting](/ciberseguridad/pentesting/).
- Fase de operación:
	- Revisión del modelo ante cambios.
	- Adaptación a nuevas amenazas.

## Identificación de Actores de Amenaza
El análisis de amenazas se fortalece cuando se definen **perfiles de atacante** realistas.

- Atacantes externos:
	- Script kiddies.
	- Ciberdelincuentes organizados.
	- Grupos APT.
- Atacantes internos:
	- Usuarios maliciosos.
	- Empleados negligentes.
	- Proveedores comprometidos.
- Capacidades del atacante:
	- Nivel técnico.
	- Recursos disponibles.
	- Motivación (económica, política, espionaje).

## Clasificación y Valoración de Activos
La correcta priorización depende de entender **qué proteger y por qué**.

- Clasificación de datos:
	- Público.
	- Interno.
	- Confidencial.
	- Crítico.
- Impacto del compromiso:
	- Impacto financiero.
	- Impacto legal y regulatorio.
	- Impacto operativo.
	- Impacto reputacional.
- Relación activo–amenaza:
	- Qué amenazas afectan a cada activo.
	- Qué controles existen y cuáles faltan.

## Fronteras de Confianza (Trust Boundaries)
Las fronteras de confianza son puntos críticos donde:
- Cambia el nivel de confianza.
- Se incrementa el riesgo de ataque.

Ejemplos comunes:
- Usuario → Aplicación web.
- Aplicación → Base de datos.
- On-premise → Cloud.
- Microservicio → Microservicio.

Cada cruce de frontera debe:
- Validar entradas.
- Autenticar y autorizar correctamente.
- Registrar eventos relevantes.

## Casos de Uso Maliciosos (Misuse / Abuse Cases)
Extensión directa de los casos de uso funcionales.

- Describen **cómo un atacante abusaría del sistema**.
- Ayudan a detectar fallos lógicos.
- Complementan STRIDE y DFD.

Ejemplo conceptual:
- Caso de uso legítimo: “Usuario restablece contraseña”.
- Caso malicioso: “Atacante fuerza restablecimiento para secuestrar cuenta”.

## Árboles de Ataque (Attack Trees)
Modelo gráfico para representar:
- Objetivo final del atacante.
- Caminos alternativos de ataque.
- Dependencias entre pasos.

Ventajas:
- Visualización clara de ataques complejos.
- Identificación de controles más efectivos.
- Análisis de ataques encadenados.

Se pueden combinar con:
- STRIDE para clasificación.
- DREAD para priorización.

## Análisis de Riesgo Cuantitativo
Más allá del enfoque cualitativo tradicional.

- Probabilidad basada en datos históricos.
- Impacto expresado en términos económicos.
- Uso de métricas como:
	- Pérdida anual esperada.
	- Coste de mitigación vs riesgo.
- Útil para justificar decisiones ante negocio y dirección.

## Modelado de Amenazas en Cloud y Microservicios
Nuevos paradigmas introducen nuevos riesgos:

- Entornos cloud:
	- Gestión de identidades y accesos.
	- Exposición de APIs.
	- Configuraciones inseguras.
- Microservicios:
	- Superficie de ataque ampliada.
	- Comunicación este-oeste.
	- Dependencia de service mesh.

El modelo debe adaptarse a:
- Infraestructura dinámica.
- Escalado automático.
- Componentes efímeros.

## Amenazas Relacionadas con IA y Automatización
Sistemas modernos incorporan IA y automatización, lo que introduce amenazas específicas:

- Envenenamiento de datos.
- Manipulación de modelos.
- Abuso de APIs de IA.
- Fugas de información a través de prompts.

El modelado de amenazas debe incluir:
- Protección del ciclo de vida del modelo.
- Control de entradas y salidas.
- Monitorización de comportamientos anómalos.

## Threat Modeling en [DevSecOps](/devops/devsecops/)
En entornos DevSecOps, el modelado de amenazas debe ser:

- Ligero.
- Repetible.
- Automatizable.

Buenas prácticas:
- Modelos vivos versionados junto al código.
- Revisiones automáticas ante cambios.
- Integración con pipelines CI/CD.
- Uso de plantillas reutilizables.

## Documentación y Mantenimiento del Modelo
Un modelo de amenazas obsoleto pierde valor.

- Actualizar ante:
	- Cambios arquitectónicos.
	- Nuevas dependencias.
	- Nuevas amenazas emergentes.
- Documentar:
	- Decisiones de diseño.
	- Riesgos aceptados.
	- Controles compensatorios.
- Mantener trazabilidad entre:
	- Amenazas.
	- Controles.
	- Incidentes reales.

## Madurez en Modelado de Amenazas
Indicadores de madurez elevada:

- Modelado aplicado a todos los sistemas críticos.
- Participación de múltiples roles (dev, ops, negocio).
- Uso continuo, no puntual.
- Alineación con métricas de riesgo empresarial.
- Retroalimentación desde incidentes reales.

# Guía Práctica de Modelado de Amenazas — Caso Aplicado
`$= dv.current().file.tags.join(" ")`

## Contexto del Caso
Sistema a analizar:
- Aplicación web de gestión de usuarios.
- Autenticación y autorización por roles.
- API REST consumida por frontend web y móvil.
- Base de datos relacional.
- Despliegue en cloud.

Objetivo del modelado:
- Identificar amenazas reales antes de pasar a pruebas de [Pentesting](/ciberseguridad/pentesting/).
- Priorizar controles de seguridad desde diseño.
- Reducir superficie de ataque crítica.

## Paso 1: Definición del Alcance
Elementos incluidos:
- Frontend web.
- API backend.
- Sistema de autenticación.
- Base de datos.
- Integraciones externas (correo, APIs de terceros).

Elementos fuera de alcance:
- Infraestructura física del proveedor cloud.
- Seguridad del endpoint del usuario final.

Supuestos:
- El proveedor cloud gestiona la seguridad física.
- TLS está habilitado en todas las comunicaciones externas.

## Paso 2: Identificación de Activos
Activos críticos:
- Credenciales de usuario.
- Tokens de sesión y JWT.
- Datos personales (PII).
- Roles y permisos.
- Registros de auditoría.

Clasificación:
- Datos personales → Crítico.
- Tokens y sesiones → Crítico.
- Logs → Confidencial.

## Paso 3: Identificación de Actores
Actores legítimos:
- Usuario estándar.
- Usuario administrador.
- Servicio externo autorizado.

Actores maliciosos:
- Atacante externo no autenticado.
- Usuario autenticado malicioso.
- Atacante automatizado (bots).
- Atacante con credenciales robadas.

## Paso 4: Diagrama de Flujo de Datos (DFD)
Componentes:
- Usuario → Navegador / App móvil.
- Navegador → API REST.
- API REST → Base de datos.
- API REST → Servicio de correo.

Flujos críticos:
- Envío de credenciales.
- Generación y validación de tokens.
- Consultas a base de datos.
- Cambios de rol.

Fronteras de confianza:
- Internet ↔ API.
- API ↔ Base de datos.
- API ↔ Servicios externos.

## Paso 5: Identificación de Amenazas (STRIDE)
### Suplantación
- Robo de credenciales.
- Uso de tokens robados.
- Fuerza bruta en login.

### Manipulación
- Alteración de parámetros en requests.
- Modificación de roles en llamadas API.
- Manipulación de tokens JWT.

### Repudio
- Acciones administrativas sin logging.
- Falta de trazabilidad en cambios críticos.

### Divulgación de Información
- Enumeración de usuarios.
- Exposición de datos sensibles en respuestas API.
- Filtrado insuficiente de logs.

### Denegación de Servicio
- Abuso de endpoints sin rate limiting.
- Ataques de fuerza bruta masivos.
- Consultas costosas repetidas.

### Elevación de Privilegios
- Escalada de rol mediante APIs.
- Fallos en control de autorización.
- Uso indebido de endpoints administrativos.

## Paso 6: Casos de Uso Maliciosos
- Atacante automatiza login para descubrir credenciales válidas.
- Usuario estándar accede a endpoints de administrador.
- Atacante reutiliza un token JWT expirado.
- Manipulación de IDs para acceder a datos de otros usuarios.

## Paso 7: Árbol de Ataque (Ejemplo Conceptual)
Objetivo final:
- Acceso no autorizado a datos personales.

Ramas principales:
- Comprometer credenciales.
- Abusar de fallos de autorización.
- Explotar tokens mal gestionados.

Subpasos:
- Fuerza bruta → login.
- Token robado → reutilización.
- IDOR → acceso directo a recursos.

## Paso 8: Evaluación y Priorización de Riesgos
Criterios:
- Impacto sobre datos críticos.
- Probabilidad de explotación.
- Facilidad de automatización.

Ejemplos:
- Fuerza bruta sin rate limit → Riesgo alto.
- Enumeración de usuarios → Riesgo medio.
- DoS puntual → Riesgo bajo.

## Paso 9: Definición de Mitigaciones
Controles técnicos:
- Rate limiting en autenticación.
- MFA para roles sensibles.
- Validación estricta de tokens.
- Control de acceso por rol en cada endpoint.
- Protección contra IDOR.

Controles operativos:
- Logging centralizado.
- Alertas ante patrones anómalos.
- Monitorización de intentos fallidos.

Controles de diseño:
- Principio de mínimo privilegio.
- Separación de funciones.
- Expiración corta de sesiones.

## Paso 10: Validación con Pentesting
Uso del modelo para:
- Definir casos de prueba prioritarios.
- Simular ataques realistas.
- Validar controles implementados.

Relación directa con [Pentesting](/ciberseguridad/pentesting/):
- El modelo guía qué probar primero.
- Reduce pruebas irrelevantes.
- Mejora la cobertura de ataques lógicos.

## Paso 11: Documentación del Modelo
El modelo debe documentar:
- Amenazas identificadas.
- Riesgos aceptados.
- Controles implementados.
- Decisiones de diseño.

Formato recomendado:
- Notas estructuradas en Obsidian.
- Diagramas versionados.
- Historial de cambios.

## Paso 12: Mantenimiento y Revisión
Actualizar el modelo cuando:
- Se añadan nuevas funcionalidades.
- Cambie la arquitectura.
- Se detecten incidentes reales.
- Aparezcan nuevas amenazas.

Indicador clave:
- Un modelo de amenazas es **un documento vivo**, no un entregable estático.

# Recursos y Herramientas de Modelado de Amenazas (2025)
`$= dv.current().file.tags.join(" ")`

## Repositorios y Proyectos OWASP
- **[OWASP](/ciberseguridad/owasp/) Threat Model Library**  
	Biblioteca abierta con modelos de amenazas estructurados y revisados por la comunidad, ideal para aprender de ejemplos reales y estandarizar tus modelos.  
	[OWASP Threat Model Library](https://owasp.org/www-project-threat-model-library/)

- **OWASP Threat Dragon**  
	Herramienta gratuita para crear **diagramas de flujo de datos (DFD)**, registrar amenazas y generar reportes. Soporta metodologías como STRIDE.  
	[OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)

- **OWASP pytm**  
	Biblioteca en Python para modelado de amenazas programático (modelo como código), integrable en pipelines automatizados.  
	[OWASP pytm](https://owasp.org/www-project-pytm/)

- **Guía de Modelado de Amenazas – OWASP Developer Guide**  
	Guía oficial con técnicas, metodologías y referencias prácticas para threat modeling.  
	[OWASP Developer Guide – Threat Modeling](https://owasp.org/www-project-developer-guide/release/design/threat_modeling/)

## Herramientas de Modelado de Amenazas (2025)
### Gratuitas / Open-source
- **Microsoft Threat Modeling Tool**  
	Herramienta clásica y gratuita para Windows que sigue evolucionando y aplicando STRIDE de forma automática.  
	[Microsoft Threat Modeling Tool](https://learn.microsoft.com/azure/security/develop/threat-modeling-tool)

- **OWASP Threat Dragon**  
	Solución visual, comunitaria y multiplataforma, adecuada para equipos pequeños y medianos.  
	[OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)

- **Threagile**  
	Toolkit open source orientado a modelado ágil usando archivos YAML, muy alineado con DevOps y DevSecOps.  
	[Threagile](https://github.com/Threagile/threagile)

- **CAIRIS**  
	Plataforma open source que integra **requisitos, usabilidad, riesgo y seguridad** en un único modelo.  
	[CAIRIS](https://cairis.org/)

- **Devici**  
	Herramienta colaborativa basada en navegador para threat modeling estructurado (modelo freemium).  
	[Devici](https://www.devici.com/)

### Comerciales / Empresariales
- **ThreatModeler Platform**  
	Plataforma empresarial para modelado automatizado, escalable y alineado con grandes organizaciones.  
	[ThreatModeler](https://threatmodeler.com/)

- **IriusRisk**  
	Solución SaaS con generación automática de amenazas y mitigaciones, integrable en CI/CD.  
	[IriusRisk](https://www.iriusrisk.com/)

- **SD Elements**  
	Herramienta enfocada en diseño seguro que combina políticas, controles y generación de amenazas.  
	[SD Elements](https://www.securitycompass.com/sdelements/)

### Otras Herramientas y Enfoques Relacionados
- **Seezo**  
	Mapeo de arquitectura y exposición a amenazas en tiempo casi real, con enfoque en seguridad continua.  
	[Seezo](https://www.seezo.io/)

- **Herramientas de diagramación**  
	Draw.io, Miro, Lucidchart y herramientas visuales para complementar DFD y arquitecturas.  
	[Draw.io](https://www.diagrams.net/)  
	[Miro](https://miro.com/)  
	[Lucidchart](https://www.lucidchart.com/)

- **1 TRACE**  
	Plataforma orientada a OSINT y análisis de inteligencia para enriquecer el contexto de amenazas externas.  
	[1 TRACE](https://en.wikipedia.org/wiki/1_Trace)

## Marcos, Catálogos y Estándares
- **STRIDE**  
	Modelo clásico de clasificación de amenazas ampliamente usado en threat modeling.  
	[STRIDE Model](https://en.wikipedia.org/wiki/STRIDE_model)

- **Cloud Threat Modeling 2025 (CSA)**  
	Guía actualizada para modelar amenazas en arquitecturas cloud modernas.  
	[Cloud Security Alliance – Cloud Threat Modeling](https://cloudsecurityalliance.org/artifacts/cloud-threat-modeling-2025/)

- **MITRE ATT&CK**  
	Catálogo global de tácticas y técnicas que puede mapearse directamente desde modelos de amenazas.  
	[MITRE ATT&CK](https://attack.mitre.org/)

- **OWASP Top 10: 2025**  
	Listado actualizado de los riesgos más críticos en aplicaciones web, útil como entrada para threat modeling.  
	[OWASP Top 10 2025](https://owasp.org/Top10/)

## Recursos Educativos y Lecturas
- **Cloud Threat Modeling 2025**  
	Publicación centrada en arquitecturas cloud, riesgos modernos y ejemplos prácticos.  
	[Cloud Threat Modeling 2025](https://cloudsecurityalliance.org/artifacts/cloud-threat-modeling-2025/)

- **Cursos y formación online**  
	Formaciones prácticas sobre Threat Modeling, STRIDE y DREAD.  
	[Udemy – Modelado de Amenazas](https://www.udemy.com/)

## Extensiones de Modelado Moderno
### Frameworks de IA y Automatización
- **AegisShield**  
	Propuesta de integración de IA para acelerar el modelado de amenazas y mapearlo contra MITRE ATT&CK.  
	[AegisShield (arXiv)](https://arxiv.org/abs/2509.10482)

- **ASTRIDE**  
	Framework emergente orientado a modelar amenazas en sistemas basados en agentes de IA.  
	[ASTRIDE (arXiv)](https://arxiv.org/abs/2512.04785)

- **DoomArena**  
	Framework experimental para evaluar agentes de IA frente a amenazas configurables.  
	[DoomArena (arXiv)](https://arxiv.org/abs/2504.14064)

## Buenas Prácticas Complementarias
- Mantener una **biblioteca de activos y amenazas** viva y versionada.
- Integrar el modelado de amenazas en **CI/CD y DevSecOps**.
- Combinar modelos internos con catálogos como OWASP Top 10 y MITRE ATT&CK.
- Documentar riesgos aceptados y controles compensatorios.
- Revisar periódicamente el modelo ante cambios técnicos o de negocio.
