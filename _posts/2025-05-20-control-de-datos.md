---
date: 2025-05-20 18:10
title: control de datos
keywords:
source:
status: 🚀
Parent: "[[Area-Sistemas]]"
public_note: "true"
category: ciberseguridad
tags:
  - ciberseguridad
  - db
---
# control de datos

- [ciberseguridad](/ciberseguridad/ciberseguridad/)
- [autenticacion](/autenticacion/autenticacion/)
- [criptografia](/autenticacion/criptografia/)
- [hardening](/ciberseguridad/hardening/)
- [Expresiones regulares](/computer%20science/expresiones-regulares/)

El **control de datos** comprende el conjunto de prácticas, políticas, configuraciones y tecnologías destinadas a proteger la información en todas sus fases: creación, almacenamiento, uso, transmisión y destrucción.
- [Email DLP Protección Correo](/ciberseguridad/email-dlp-protecci-n-correo/)
- [Gestión de Activos Digitales (DAM)](/ciberseguridad/gesti-n-de-activos-digitales--dam-/)
- [DLP](/ciberseguridad/dlp/)
- [IRM manejo de derechos de la informacion](/ciberseguridad/irm-manejo-de-derechos-de-la-informacion/).

## Componentes Fundamentales del Control de Datos

### Protección de Datos
- Garantizar confidencialidad, integridad y disponibilidad.
- Políticas de clasificación: pública, interna, confidencial, restringida.
- Ciclo de vida del dato (Data Lifecycle Management): creación, uso, retención, archivo, destrucción.
- Controles basados en riesgo: priorizar activos según impacto y probabilidad.
- Técnicas de gobernanza: catálogos de datos, metadatos, trazabilidad.

### Correo
- Análisis de contenido y adjuntos.
- Identificación de fuga accidental o maliciosa.
- Escaneo de malware y enlaces maliciosos.
- Validación de remitentes (SPF, DKIM, DMARC).
- Prevención de envío de datos sensibles a destinatarios no autorizados.

### Cifrado
- Cifrado en tránsito: TLS/SSL, túneles VPN, SSH.
- Cifrado en reposo: discos, bases de datos, backups.
- Cifrado a nivel de aplicación: tokens, data masking, pseudonimización.
- Algoritmos simétricos y asimétricos: AES, RSA, ECC.
- Gestión de claves: HSM, rotación, segregación, custodia segura.

### Sistemas Corporativos
- Integración con identidades y accesos (IAM/IDP).
- Segmentación lógica y física de datos.
- Monitoreo de actividad del usuario: UBA/UEBA.
- Reducción de superficie de ataque mediante políticas de [hardening](/ciberseguridad/hardening/).
- Aplicación de Zero Trust: verificar explícitamente, acceso mínimo, segmentación.

---

## Soluciones, Tecnologías y Conceptos Asociados

### [ciberseguridad](/ciberseguridad/ciberseguridad/)
- Defensas preventivas (firewalls, WAF, EDR).
- Controles de detección y respuesta (SIEM, SOAR).
- Evaluación continua de vulnerabilidades.
- Analítica avanzada y correlación de eventos.

### [autenticacion](/autenticacion/autenticacion/)
- MFA, passwordless, biometría.
- Autenticación contextual/adaptativa.
- Federaciones (SAML, OAuth2, OIDC).
- Autorización granular con RBAC/ABAC.

### [criptografia](/autenticacion/criptografia/)
- Fundamentos matemáticos del cifrado.
- Funciones hash y firmas digitales.
- Protocolos criptográficos (TLS, IPsec).
- Estándares y cumplimiento: FIPS, NIST.

### [hardening](/ciberseguridad/hardening/)
- Restricción de servicios innecesarios.
- Configuración mínima viable.
- Políticas de auditoría y bloqueo.
- Control de privilegios y reducción de superficies.

---

## Gestión Avanzada de la Información

### [Email DLP Protección Correo](/ciberseguridad/email-dlp-protecci-n-correo/)
- Reglas por contenido, contexto, destinatario o adjunto.
- Fingerprinting de documentos confidenciales.
- Intercepción, cuarentena, bloqueo o cifrado automático.
- Integración con soluciones de IRM para restringir acceso post-envío.

### [Gestión de Activos Digitales (DAM)](/ciberseguridad/gesti-n-de-activos-digitales--dam-/)
- Inventario de activos digitales: documentos, multimedia, configuraciones.
- Control de permisos y versiones.
- Flujos de revisión y aprobación.
- Integración con sistemas de almacenamiento seguro.

### [DLP](/ciberseguridad/dlp/)
- Inspección de datos estructurados y no estructurados.
- Control en endpoints, red, nube y correo.
- Políticas según tipo de información (PII, PCI, IP, datos internos).
- Visibilidad en tiempo real de riesgos internos.
-  DLP - ¿Qué es la prevención de pérdida de datos- - Proofpoint ES
	- Foco en comportamiento humano (EITL: Error, Insider, Threat, Leak).
	- Clasificación dinámica basada en aprendizaje automático.
	- Integración con CASB y herramientas de colaboración.
	- Políticas adaptativas basadas en intención del usuario.
### [IRM manejo de derechos de la informacion](/ciberseguridad/irm-manejo-de-derechos-de-la-informacion/)
- Control de lectura, copia, impresión, reenvío.
- Revocación remota incluso tras la entrega del archivo.
- Auditoría de accesos a nivel de documento.
- Uso combinado con cifrado y DLP para protección persistente.

---

## Prácticas Avanzadas de Control de Datos

### Clasificación y Etiquetado Automático
- Análisis semántico del contenido.
- Etiquetas obligatorias según políticas corporativas.
- Integración con aplicaciones ofimáticas.

### Monitorización Continua
- Detección de anomalías en accesos a datos sensibles.
- Analítica de comportamiento de identidad.
- Alertas tempranas y respuesta automatizada.

### Minimización y Segmentación
- Reducción de datos recolectados.
- Silos segmentados por proyectos, departamentos o criticidad.
- Contenedores aislados y segregación en entornos cloud.

### Protección de Datos en Nube
- CASB para controlar SaaS, IaaS y PaaS.
- Restrictions de compartición externa.
- Escaneo de datos en repositorios colaborativos.

---

## Código de Ejemplo: Etiquetado Automático en O365
### Ejemplo de regla JSON (clasificación)
{% raw %}
```json
{
	"policyName": "Clasificación Automática - Confidencial",
	"conditions": {
		"keywords": ["PII", "Sensitive", "Internal Only"],
		"fileTypes": ["docx", "xlsx", "pdf"]
	},
	"actions": {
		"applyLabel": "Confidencial",
		"notifyUser": true
	}
}
```
{% endraw %}`

## Código de Ejemplo: Regex para Detección de Datos Sensibles

### Detección de DNI español

{% raw %}
```regex
\b\d{8}[A-Za-z]\b
```
{% endraw %}

---

# Control de Datos — Extensiones y Conceptos Avanzados

## Nuevas Dimensiones del Control de Datos

### Gobierno y Arquitectura del Dato
- **Data Governance Frameworks**: DAMA-DMBOK, NIST Privacy Framework.
- **Data Stewardship**: roles que garantizan calidad, coherencia y cumplimiento.
- **Líneas de responsabilidad (RACI)** sobre manipulación, custodias y decisiones.
- **Arquitecturas orientadas al dato**: Data Mesh, Data Fabric, Lago inteligente.

### Calidad de Datos (Data Quality)
- Métricas clave: completitud, unicidad, exactitud, validez, coherencia, actualidad.
- Controles automáticos de calidad en pipelines.
- Limpieza, normalización y reconciliación.
- Detección de drift en datasets sensibles.

### Observabilidad de Datos (Data Observability)
- Seguimiento del comportamiento de datasets en tiempo real.
- Trazado de linaje (lineage) extremo a extremo.
- Monitoreo de pipelines ETL/ELT para prevenir corrupción de información.
- Alertas por anomalías en volumen, distribución, esquema o frescura.

---

## Control de Datos en Infraestructura Moderna

### Controles en Contenedores y DevOps
- Escaneo de imágenes para evitar inclusión de datos sensibles.
- Políticas que evitan secreto duro (hardcoded secrets) en repositorios.
- Vaults para gestión centralizada de secretos.
- Limitación de volúmenes persistentes con cifrado granular.

### Control de Datos en APIs
- Rate limiting para evitar scraping de información.
- Validación y normalización estricta de payloads.
- **API Security Posture Management (APSM)** para inventariar y proteger endpoints.
- Firma y cifrado de respuestas en APIs críticas.

### Control de Datos en microservicios
- Segmentación por dominios de datos.
- Controles de autorización entre servicios (service-to-service auth).
- Minimización de payloads y contratos de datos estables.
- Telemetría orientada a consumo indebido.

---

## Técnicas Modernas de Protección y Minimización

### Tokenización
- Sustituye datos sensibles por tokens no reversibles salvo en un entorno controlado.
- Útil para PCI, salud, identidad.
- Permite analítica sin exponer el dato original.

### Data Masking Avanzado
- Masking dinámico vs. masking estático.
- Reglas basadas en rol → cada rol ve el dato de forma distinta.
- Preservación de formato para mantener integridad en pruebas.

### Pseudonimización y Anonimización
- Métodos k-anonymity, l-diversity, t-closeness.
- Métodos diferenciales (Differential Privacy) para entornos de ML.
- Aislamiento de atributos cuasi-identificadores.

---

## Control de Datos en IA y Machine Learning

### Riesgos Específicos
- Fugas por **training data extraction**.
- Inyección de datos sensibles en prompts o contexto.
- Exposición involuntaria por modelos no filtrados.

### Controles
- Políticas de **Data Loss Prevention for AI**.
- Enmascaramiento automático de datos en pipelines de entrenamiento.
- Control de acceso a features sensibles.
- Escaneos de datasets previos a entrenamiento.

### Auditoría y Trazabilidad
- Registros del origen de cada dato usado en un modelo.
- Versionado de datasets para reproducibilidad.
- Validaciones contra sesgos derivados de atributos confidenciales.

---

## Control de Datos en Plataformas Cloud

### Políticas en Multi-Nube
- Controles uniformes para AWS, Azure y GCP.
- Mapas de equivalencias de servicios de cifrado, IAM y redes.
- Restricción de egress para evitar exfiltración desde buckets.

### Data Residency & Soberanía
- Control de ubicaciones geográficas obligatorias.
- Reglas para evitar transferencia transfronteriza de datos.
- Data escrow y claves controladas por cliente (Customer Managed Keys).

### Shadow IT & Shadow Data
- Identificación de repositorios no autorizados.
- Descubrimiento automático de datos en SaaS externos.
- Clasificación inmediata de ficheros subidos a servicios ajenos a TI.

---

## Gestión del Riesgo del Dato

### Evaluación de Impacto (DPIA / PIA)
- Identificación de tratamiento de alto riesgo.
- Medidas técnicas y organizativas antes del despliegue.
- Evaluación continua cuando cambian procesos.

### Modelos de Amenazas Basados en Datos
- Data-Centric Threat Modeling (DCTM).
- Ataques por manipulación, corrupción, exfiltración o disponibilidad.
- Mapas de flujo de datos → identificar caminos de fuga posibles.

---

## Nuevas Tecnologías Relacionadas

### Confidential Computing
- Ejecución de datos cifrados en enclaves seguros.
- Protege datos **en uso**, no solo en tránsito o reposo.
- Compatible con IA, modelos sensibles y pipelines de ETL.

### Homomorphic Encryption (HE)
- Realiza operaciones sobre datos cifrados sin descifrarlos.
- Solución para entornos multi-empresa o colaboraciones sensibles.
- Coste computacional elevado → casos de uso muy específicos.

### Secure Multiparty Computation (MPC)
- Varias entidades procesan una función sin revelar sus datos entre sí.
- Útil para análisis conjuntos, benchmarking o verificación descentralizada.

---

## Núcleo Operacional del Control de Datos

### Auditoría Forense de Datos
- Identificación de puntos exactos de fuga.
- Trazabilidad completa de quién accedió y cuándo.
- Recuperación de versiones previas para análisis.

### Automatización con Playbooks
- Bloqueo inmediato ante detección de patrones sensibles.
- Cifrado o revocación automática vía IRM.
- Alertas a SOC con contexto del dato involucrado.

### Gestión de Ciclo de Vida de Permisos
- Revalidación periódica (re-certification).
- Detección de privilegios heredados o excesivos.
- Eliminación automatizada de acceso tras baja o cambio de rol.

---

## Complementos a Integrar en Notas Existentes
- Políticas de retención y destrucción segura.
- Métodos de hashing para verificación de integridad.
- Clasificación basada en sensibilidad + contexto + comportamiento.
- Técnicas contra insiders avanzados.
- Controles de sandboxing para analizar archivos sospechosos.
- Estrategias de compartición segura temporizada (links con expiración).

# Control de Datos — Frameworks, Normativas y Estándares (Extensión)

## Frameworks Internacionales de Seguridad y Control de Datos

### NIST Cybersecurity Framework (NIST CSF)
- Estructura en cinco funciones: Identify, Protect, Detect, Respond, Recover.
- Control de datos centrado en gestión de activos, protección de información y detección de anomalías.
- Vínculos directos con DLP, IRM, cifrado e IAM.
- Sección “PR.DS” (Protect – Data Security) especifica controles mínimos de integridad, confidencialidad y custodia.

### NIST Privacy Framework
- Complemento del CSF especializado en privacidad y uso legítimo del dato.
- Tres funciones clave: Identify–Govern–Control.
- Gestión de riesgo para datos personales, minimización, propósito, retención.
- Mapea requisitos con GDPR, CCPA y otros marcos regulatorios.

### NIST 800-53 / 800-171
- Controles técnicos y administrativos para sistemas federales y datos controlados.
- Reglas de cifrado, acceso mínimo, monitoreo continuo, auditoría y clasificación.
- NIST 800-171 es específico para CUI (Controlled Unclassified Information).

### ISO/IEC 27001 y 27002
- Base global de gestión de seguridad de la información.
- Controles para protección del dato: cifrado, clasificación, retención, integridad, intercambio seguro y logging.
- Anexos centrados en seguridad física, operativa y lógica del dato.
- Compatible con gestión de riesgos corporativos.

### ISO/IEC 27701 (Extensión de GDPR)
- Extiende ISO 27001 + 27002 para privacidad de datos personales.
- Implementa roles de Responsable y Encargado del Tratamiento.
- Directrices para eliminar, bloquear, anonimizar o pseudonimizar datos.

### CSA Cloud Controls Matrix (CCM)
- Estándar para control de datos en entornos cloud.
- Dominios: IAM, cifrado, continuidad, DLP cloud, integridad de metadatos, geolocalización del dato.
- Compatible con NIST y ISO → útil en entornos multinube.

### COBIT (Gobierno de TI)
- Se centra en gestión y gobierno de información corporativa.
- Dominios relevantes: EDM, APO, DSS.
- Políticas de ciclo de vida, calidad, disponibilidad, riesgo y auditoría del dato.

---

## Normativas de Protección de Datos (Regulaciones)

### GDPR (Reglamento General de Protección de Datos – UE)
- Principios: licitud, minimización, limitación del propósito, exactitud, retención limitada.
- DPIA para tratamientos de alto riesgo.
- Reglas estrictas de notificación de brechas (72h).
- Derechos del usuario: acceso, rectificación, olvido, portabilidad, oposición.
- Transferencias internacionales con garantías (SCC, BCR, etc.).

### CCPA / CPRA (California)
- Derechos de privacidad para consumidores: acceso, eliminación, opt-out.
- Obligaciones de evitar venta o compartición no autorizada de datos.
- Requiere ciclos de gobernanza y transparencia reforzados.

### HIPAA (Salud – EEUU)
- Protección de información médica (PHI).
- Controles de acceso, trazabilidad y cifrado obligatorio para ciertos contextos.
- Clasificación estricta de datos sensibles vinculados a tratamientos médicos.

### PCI-DSS (Pagos con tarjeta)
- Protege datos de tarjetas: PAN, CVC, expiración.
- Controles DLP, segmentación, cifrado en tránsito y reposo.
- Escaneos continuos y auditorías periódicas.

### SOX (Sarbanes-Oxley – EEUU)
- Protección e integridad de datos financieros.
- Auditoría estricta, trazabilidad y retención obligatoria.

### LGPD (Brasil)
- Muy similar a GDPR.
- Base legal para tratamiento, consentimiento inequívoco, transparencia.

### ISO 31700 (Privacy by Design)
- Estándar para diseño orientado a seguridad y privacidad desde el inicio.
- Minimización profunda → “data minimization as architecture”.

---

## Estándares Técnicos Específicos para Control de Datos

### Estándares de Cifrado
- AES (FIPS-197): estándar más utilizado para cifrado simétrico seguro.
- RSA (PKCS #1): cifrado asimétrico.
- ECC (Elliptic Curve Cryptography): cifrado de alto rendimiento.
- TLS 1.3: protocolo actual recomendado para comunicaciones cifradas.
- FIPS 140-3: certificación de módulos criptográficos (HSM).

### Estándares de Gestión de Claves (KMS)
- KMIP (Key Management Interoperability Protocol).
- Modelos Customer-Managed Keys (CMK) y Customer-Supplied Keys (CSK).
- Rotación automática y almacenes seguros (HSM, Vaults).

### Estándares para Integridad y Calidad de Datos
- ISO 8000: calidad de datos maestros.
- DAMA-DMBOK: guía de gobernanza y técnicas para gestión de datos.
- DCAM (Data Management Capability Assessment Model): madurez de gestión de datos.

### Estándares para Auditoría y Logging
- ISO 27037: preservación de evidencia digital.
- ISO 27041: directrices para validación forense.
- Syslog, CEF, LEEF: formatos estandarizados para auditoría y correlación.

### Estándares de Identidad y Autorización
- OAuth2, OIDC: acceso delegado y federado.
- SAML 2.0: federación entre organizaciones.
- SCIM: gestión automática de identidades y aprovisionamiento.
- XACML: control de acceso dinámico (ABAC).

---

## Estándares y Frameworks Específicos para Cloud y SaaS

### FedRAMP
- Certificación y seguridad para servicios cloud gubernamentales.
- Controles equivalentes a NIST 800-53.

### CIS Benchmarks
- Configuraciones seguras para sistemas, contenedores y nubes.
- Reglas estrictas aplicadas a control de datos indirecto (hardening).

### ISO 27018 (Privacidad en la nube)
- Protección de datos personales en entornos cloud públicos.
- Transparencia, portabilidad, territorialidad y borrado seguro.

### GDPR Code of Conduct para Servicios Cloud
- Estándares voluntarios que complementan GDPR para proveedores.

---

## Frameworks de Riesgo y Privacidad Avanzados

### FAIR (Factor Analysis of Information Risk)
- Cuantificación económica del riesgo asociado a pérdida de datos.
- Permite priorizar controles de forma objetiva.

### MITRE ATT&CK – Data Exfiltration Matrix
- Matriz focalizada en técnicas de exfiltración: red, correo, nube, USB.
- Útil para configurar DLP y SIEM.

### ENISA Cybersecurity Frameworks (UE)
- Modelos europeos de resiliencia digital.
- Recomendaciones para procesamiento, compartición y retención de datos.

---

## Complementos a Añadir a Otras Notas
- Marcos de adopción de Zero Trust centrados en datos.
- Normativas de sectores específicos (Finanzas, Energía, Gobierno).
- Controles para gestión documental (ISO 16175, MoReq).
- Estándares de ciclo de vida digital y destrucción segura (NIST 800-88).

# Controles obligatorios por estándar — Mapas de equivalencias

## Nota rápida sobre alcance
- Esta guía muestra **controles obligatorios** (o requisitos prescriptivos) de cada normativa/estándar y su **mapeo** hacia controles ISO/ NIST / NIST CSF cuando existe correspondencia práctica. Usa esto como **hoja de ruta** para reducir solapamientos entre auditorías y diseñar una matriz de evidencia única. :contentReference[oaicite:0]{index=0}

## Leyendas
- "Req." = requisito obligatorio / prescriptivo en el estándar.
- "Equiv." = control(s) ISO/ NIST que cubren la misma intención/objetivo.
- "Nota" = aclaración sobre gaps, alcance o evidencia típica.

---

## 1) GDPR (UE) — Controles/obligaciones clave y equivalencias
- Req.: Principio de **minimización de datos** (Art. 5).  
	- Equiv.: ISO/IEC 27001 A.8 (Gestión de activos / clasificación) + controles de acceso.  
	- Nota: GDPR exige base legal y DPIA para tratamientos de alto riesgo; ISO ayuda con procesos pero no sustituye obligaciones legales.
- Req.: **DPIA / evaluación de impacto** cuando el tratamiento genere alto riesgo.  
	- Equiv.: ISO/IEC 27001 cláusula de evaluación de riesgos y ISO/IEC 27701 procesos de PIMS.  
- Req.: **Notificación de brechas** (72 horas).  
	- Equiv.: ISO A.16 (Gestión de incidentes) + procedimientos de respuesta (NIST IR families).  
- Req.: **Derechos de los interesados** (acceso, rectificación, supresión, portabilidad).  
	- Equiv.: ISO A.9 (control de acceso) + registros y procedimientos de solicitud.  
- Req.: **Transferencias internacionales** (garantías: SCC, BCR).  
	- Equiv.: Controles de cifrado en tránsito y en reposo (ISO A.10 / A.13) y KMS.  
- Nota: Para mapeos prácticos GDPR→ISO/27701 existen matrices públicas que muestran correspondencias artículo→control. :contentReference[oaicite:1]{index=1}

## 2) ISO/IEC 27001:2022 — Controles “base” (obligaciones para certificar)
- Req.: Establecer ISMS (Alcance, Política, Objetivos, Riesgo, SOA).  
	- Equiv.: NIST CSF Identify (ID) + NIST 800-53: PM/RA families.
- Req.: Controles de seguridad técnica y organizativa documentados (Anexo A / controles).  
	- Equiv.: Cobertura amplia hacia NIST 800-53 families (AC, IA, SC, SI, AU, RA, CP...). :contentReference[oaicite:2]{index=2}
- Req.: Revisión y mejora continua (PDCA).  
	- Equiv.: NIST CSF Respond / Recover y subcontroles de continuous monitoring.

## 3) NIST SP 800-53 Rev.5 — Controles obligatorios (para sistemas federales) y mapeo
- Req.: Implementar controls especificados por familia (AC, AU, CA, CM, CP, IA, IR, MA, MP, PE, PL, PM, RA, SA, SC, SI, PM...).  
	- Equiv.: Muchos controles NIST 800-53 tienen mapeo directo a ISO/IEC 27001:2022 Annex A; NIST publica tablas oficiales de mapping 800-53 ↔ ISO 27001. :contentReference[oaicite:3]{index=3}
- Req.: Documentación detallada de implementación y pruebas (Assessment & Authorization).  
	- Equiv.: Evidencia requerida para ISO (SOA, reportes de auditoría), y para NIST CSF subcategorías de Detect/Respond.
- Nota: NIST es más prescriptivo técnicamente; ISO cubre gestión/organización.

## 4) NIST Cybersecurity Framework (CSF) — Controles “funcionales”
- Req. (funcional): Implementar funciones: Identify / Protect / Detect / Respond / Recover.  
	- Equiv.: ISO 27001 clauses + NIST 800-53 families; NIST OLIR proporciona mapeos ISO↔CSF. :contentReference[oaicite:4]{index=4}
- Req. (subcategorías críticas) ejemplo: "PR.DS — Data Security": cifrado, clasificación, gestión de integridad.  
	- Equiv.: ISO A.8, A.10, A.12 y NIST 800-53 (SC, MP, SI).

## 5) PCI-DSS v4.x — Requisitos prescriptivos para PAN y ecosistema de pagos
- Req.: 12 requisitos principales (con múltiples sub-requisitos) enfocados en protección de datos de tarjeta: red segmentada, cifrado de PAN, gestión de parches, monitoreo, MFA, prueba de pen-testing, control de acceso, logging retenido.  
	- Equiv.: ISO 27001 Annex A (control de accesos, operaciones, comunicaciones, cifrado) — mapping práctico disponible para PCI→ISO. :contentReference[oaicite:5]{index=5}
- Nota: PCI es altamente prescriptiva en técnicas (ej. longitud mínima, cifrado, logging) — cumple PCI no garantiza ISO y viceversa, pero gran parte de evidencia es reusables.

## 6) HIPAA (Security Rule) — Obligaciones esenciales y correspondencias
- Req.: Administración (políticas), física (control de acceso físico) y técnica (control de acceso lógico, cifrado cuando sea razonable/posible) salvaguardas; evaluaciones de riesgo y acuerdos con business associates.  
	- Equiv.: NIST CSF subcategorías y controles NIST SP 800-53; ISO 27001 cubre la mayoría de prácticas operativas. NIST/ HHS publican crosswalks HIPAA↔NIST/800-53. :contentReference[oaicite:6]{index=6}
- Nota: HIPAA es una regulación específica sectorial; si tu ISMS cumple NIST/ISO y documenta el tratamiento de ePHI, facilita el cumplimiento.

## 7) Mapas de equivalencias prácticos (formato simplificado)
- **Acceso y autenticación**  
	- GDPR (derechos de acceso) → ISO A.9 / NIST AC / CSF PR.AC.  
	- PCI (control de acceso y MFA) → ISO A.9 / NIST IA / CSF PR.AC. :contentReference[oaicite:7]{index=7}
- **Cifrado y gestión de claves**  
	- PCI (protección PAN) → ISO A.10 / NIST SC / CSF PR.DS.  
	- GDPR (protección de datos personales en tránsito/reposo) → ISO A.10 / 27701 evidencias. :contentReference[oaicite:8]{index=8}
- **Gestión de incidentes / notificación**  
	- GDPR (72h) → ISO A.16 + procedimientos IR; NIST: IR families & CSF Respond. :contentReference[oaicite:9]{index=9}
- **Evaluación de riesgos / DPIA**  
	- ISO 27001 (risk assessment) → apoya DPIA GDPR; NIST RA families ofrecen metodologías técnicas. :contentReference[oaicite:10]{index=10}
- **Registro y auditoría (logging)**  
	- PCI (logging requirements) → ISO A.12/A.16 / NIST AU families.  
	- HIPAA (auditoría de acceso) → NIST AU / ISO logging practices. :contentReference[oaicite:11]{index=11}

## 8) Gaps típicos al mapear (lo que debes verificar)
- G1: **Prescriptividad técnica vs. marco gerencial** — PCI y NIST 800-53 a menudo dictan cómo hacerlo; ISO define qué lograr.  
- G2: **Obligaciones legales** (GDPR/HIPAA) pueden exigir pasos administrativos (consentimientos, notificaciones, derechos) que una certificación ISO no cubre por sí sola.  
- G3: **Evidencia**: mapeo no equivale a evidencia; cada auditor/autoridad puede pedir artefactos distintos (logs, runbooks, contratos, pruebas). :contentReference[oaicite:12]{index=12}

## 9) Plantilla práctica para tu matriz de equivalencias (fila por requisito)
- Columnas sugeridas: Estándar origen | Requisito ID | Descripción | Control ISO equivalente | Control NIST equivalente | Evidencia sugerida | Gap (Sí/No)  
- Ejemplo relleno:  
	- PCI | Req 3.4 | "Render PAN unreadable" | ISO A.10 (cifrado) | NIST SC-13 / SC-28 | Config KMS, backup of keys, rekeying policy | No

## 10) Fuentes y referencias útiles (para descarga de crosswalks)
- NIST: mappings SP800-53 ↔ ISO/IEC 27001; CPRT para crosswalks (HIPAA, CSF, 800-53). :contentReference[oaicite:13]{index=13}  
- Documentos de terceros con tablas PCI↔ISO y GDPR↔ISO que facilitan plantillas prácticas. :contentReference[oaicite:14]{index=14}

---

## Enlaces internos relacionados
- [ciberseguridad](/ciberseguridad/ciberseguridad/)  
- [autenticacion](/autenticacion/autenticacion/)  
- [criptografia](/autenticacion/criptografia/)  
- [hardening](/ciberseguridad/hardening/)  
- [Email DLP Protección Correo](/ciberseguridad/email-dlp-protecci-n-correo/)  
- [Gestión de Activos Digitales (DAM)](/ciberseguridad/gesti-n-de-activos-digitales--dam-/)  
- [DLP](/ciberseguridad/dlp/)  
- [IRM manejo de derechos de la informacion](/ciberseguridad/irm-manejo-de-derechos-de-la-informacion/)  


