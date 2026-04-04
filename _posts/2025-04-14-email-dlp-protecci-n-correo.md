---
date: 2025-04-14 18:16
title: Email DLP Protección Correo
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: ciberseguridad
tags:
  - Hacking
  - ciberseguridad
  - hardening
---
# Email DLP — Protección de Correo


- [control de datos](/ciberseguridad/control-de-datos/)
- [hardening](/ciberseguridad/hardening/)
- [What is Email Data Loss Prevention (DLP)? Meaning & Examples](https://darktrace.com/cyber-ai-glossary/email-data-loss-prevention-dlp)
- [¿Qué es la seguridad de correo electrónico? | Seguridad de Microsoft](https://www.microsoft.com/es-es/security/business/security-101/what-is-email-security)

## Conceptos Fundamentales
- **Email DLP (Data Loss Prevention)**  
	- Conjunto de controles para evitar fuga, manipulación o exposición no autorizada de datos a través del correo electrónico.  
	- Se integra con soluciones de seguridad como **Secure Email Gateway (SEG)**, **CASB**, **MTA con inspección avanzada**, y servicios nativos de proveedores (Microsoft Defender for Office, Google Workspace, etc.).
- **Vectores de Riesgo en Correo**  
	- Exfiltración accidental: enviar datos sensibles por error.  
	- Exfiltración maliciosa: insiders o cuentas comprometidas enviando datos críticos.  
	- Reglas de reenvío automático a dominios externos.  
	- Adjuntos no cifrados, enlaces públicos, o archivos con metadata sensible.  
	- Filtros insuficientes para datos estructurados (PII, PCI, PHI).

## Objetivos del Email DLP
- **Identificación del dato sensible**  
	- PII, PCI, PHI, secretos de negocio, código fuente, IP corporativa.  
	- Detección por patrones (regex), fingerprints, clasificación automática, etiquetas de sensibilidad.
- **Prevención de fuga**  
	- Bloqueo, cifrado automático, cuarentena o advertencia al usuario.  
	- Reglas adaptativas según contexto (usuario, destino, volumen, comportamiento).
- **Trazabilidad y auditoría**  
	- Registro y evidencia de flujos de datos.  
	- Integración con SIEM, SOAR y sistemas de clasificación.

## Funciones Clave del Email DLP
- **Detección basada en contenido**  
	- Reglas personalizadas, diccionarios, expresiones regulares, análisis semántico.  
	- OCR en adjuntos e imágenes.  
- **Clasificación y etiquetado automático**  
	- Autoaplicación de etiquetas MIP / Sensitivity Labels.  
	- Normalización de políticas entre sistemas internos y cloud.  
- **Cifrado automatizado**  
	- S/MIME, OME (Office Message Encryption), PGP, TLS obligado.  
- **Acciones de Control**  
	- Bloquear envío.  
	- Cuarentena administrativa.  
	- Requiere justificación.  
	- Remediación automática (cifrar, redirigir, anonimizar).  
- **Monitorización del Comportamiento (Behavioral DLP)**  
	- Detección de desvío respecto al comportamiento normal.  
	- Activación de controles solo ante riesgo contextual.

## Hardening Aplicado al Correo Electrónico
- Política estricta de **DMARC, SPF, DKIM**.  
- Validación de adjuntos, sandboxing, desarmado de contenido (CDR).  
- Restricción de reenvíos externos automáticos.  
- Aplicación de etiquetas obligatorias antes del envío.  
- Autenticación reforzada (MFA, tokens FIDO2).  
- Limitación de envío masivo o volumétrico.  
- Análisis de anomalías para detectar exfiltración tras compromisos de cuenta.  
- Control de acceso granular a listas de distribución sensibles.

## Modelos de Políticas DLP
- **Basado en ubicación (Location-Based)**  
	- Detecta salida hacia dominios externos o listas no autorizadas.  
- **Basado en contenido (Content-Based)**  
	- Patrones, etiquetas, clasificación automática.  
- **Basado en comportamiento (Behavior-Based)**  
	- Comparación con el uso típico del usuario.  
- **Basado en rol / identidad (Identity-Based)**  
	- Sensibilidad según cargo, área, privilegios.

## Arquitecturas de Email DLP
- **On-premise (MTA propio)**  
	- Reglas totalmente personalizadas.  
	- Mayor control, mayor mantenimiento.  
- **Cloud-native (O365 / GWS)**  
	- Integración con clasificación, autoetiquetado y ML.  
- **Híbrida**  
	- Gateway + servicios cloud + agentes endpoint.  
- **Inline vs API-based**  
	- *Inline*: inspección en tiempo real.  
	- *API-based*: análisis postenvío y aplicación correctiva.

## Controles Avanzados
- **Fingerprinting de documentos sensibles**  
	- Identifica versiones parciales o modificadas de documentos.  
- **Desidentificación y mascaramiento automático**  
	- Reemplazo dinámico de PII/PCI antes del envío.  
- **Control de adjuntos dinámico**  
	- Conversión automática a PDF seguro.  
	- Eliminación de metadata EXIF, comentarios, historial.  
- **Políticas adaptativas**  
	- Reglas que cambian según contexto, hora, país, canal, reputación del destinatario.  
- **Detección de dominios confusos**  
	- Homógrafos, typosquatting, lookalike domains.

## Integración con Otros Sistemas
- **SIEM/SOAR**  
	- Correlación con anomalías de login, movimientos laterales o exfiltraciones multicanal.  
- **CASB**  
	- Políticas unificadas para correo, colaboración y almacenamiento cloud.  
- **MIP / Sensitivity Labels**  
	- Consistencia entre correo, SharePoint, Teams y endpoints.  
- **EDR/XDR**  
	- Alineación con estados de riesgo de los dispositivos.

## Métricas y Auditoría
- Volumen de incidentes por tipo de dato.  
- Tasa de falsos positivos.  
- Tiempo de remediación.  
- Usuarios reincidentes.  
- Dominios críticos o de riesgo elevado.  
- Indicadores de exfiltración interna.

## Ejemplos de Contenidos a Proteger
- Listados de clientes o proveedores.  
- Información financiera interna.  
- Planes estratégicos, contratos, propiedad intelectual.  
- Datos de empleados (nóminas, DNI, direcciones).  
- Código fuente o claves API.

## Buenas Prácticas
- Clasificación obligatoria del correo antes del envío.  
- Revisiones periódicas de políticas y simulaciones de exfiltración.  
- Capacitación continua: ingeniería social, envío accidental, sensibilidad del dato.  
- Revisiones de reglas de reenvío y permisos delegados.  
- Alertas silenciosas para SOC en correos sospechosos.

# Herramientas, Frameworks y Enfoque Práctico para Email DLP

- [hardening](/ciberseguridad/hardening/)
- [Email DLP Protección Correo](/ciberseguridad/email-dlp-protecci-n-correo/)

## Frameworks y Estándares Relevantes
- **NIST 800-53 / 800-171**  
	- Controles específicos como AC, AU, SC, SI, MP aplicables a email: control de información, etiquetado, auditoría y protección de datos en tránsito.
- **ISO/IEC 27001 / 27002 / 27701**  
	- Reglas de clasificación, cifrado, gestión de transferencias y privacidad.
- **CIS Controls v8**  
	- Control 3 (Protección de datos), Control 13 (Email & Web Protections).  
- **MITRE ATT&CK**  
	- Técnicas relacionadas con exfiltración por correo: T1567.  
- **Framework Zero Trust (ZTA)**  
	- Validación continua de identidad, contexto y clasificación antes del envío.
- **Data Classification Frameworks**  
	- Modelos para categorías de sensibilidad, reglas de negocio y automatización del etiquetado.

## Herramientas de Email DLP en Cloud
- **Microsoft Purview Data Loss Prevention (M365)**  
	- Autoetiquetado, reglas por contenido, análisis de comportamiento y cifrado automático (OME).  
	- Integración con Sensitivity Labels, Defender XDR y políticas adaptativas.
- **Google Workspace DLP**  
	- Reglas personalizadas, detección OCR, control de adjuntos, análisis ML para anomalías.
- **Proofpoint Email Protection + TAP + DLP**  
	- Detección avanzada, fingerprinting, sandboxing, bloqueo adaptativo.
- **Mimecast Secure Email Gateway + DLP**  
	- Reglas sofisticadas, CDR, integraciones con CASB/EDR.
- **Cisco Secure Email (antiguo IronPort)**  
	- Reglas de contenido, cifrado, protección contra phishing y dominios lookalike.
- **Symantec/Broadcom DLP Email**  
	- Fingerprinting robusto, políticas granulares y alta visibilidad.

## Herramientas de Email DLP On-Premise / Híbrido
- **Postfix + Amavis + OpenDLP / Regex Engines**  
	- Solución modular: inspección profunda, regex avanzados, filtrado de adjuntos.
- **Zimbra DLP Engine**  
	- Reglas de contenido y flujos personalizados.
- **FortiMail**  
	- DLP nativo, reglas basadas en contenido y adjuntos, sandboxing.
- **Barracuda Email Security Gateway**  
	- Filtros de fuga, bloqueo contextual.
- **SEGs Personalizados**  
	- Integración de motores de clasificación internos y CDR.

## Herramientas Transversales para Potenciar Email DLP
- **CASB (Cloud Access Security Broker)**  
	- Ej: Netskope, Microsoft CASB, Lookout.  
	- Coherencia de políticas entre correo, aplicaciones SaaS y almacenamiento.
- **MIP / Sensitivity Labels**  
	- Etiquetado automático y manual; inline enforcement.
- **SIEM/SOAR (Splunk, Sentinel, QRadar)**  
	- Correlación de eventos, alertas y respuesta automatizada.
- **CDR (Content Disarm & Reconstruction)**  
	- Eliminación de contenido activo en adjuntos (macros, scripts).
- **ML/UEBA**  
	- Sistemas como Azure UEBA, Vectra o Darktrace para detectar usuarios con desviaciones de comportamiento.

## Enfoque Práctico para Implementar Email DLP
### 1. Descubrimiento y Clasificación Inicial
- Catalogar tipos de datos a proteger: PII, PCI, PHI, secretos de negocio.  
- Identificar flujos reales: destinos frecuentes, departamentos más críticos.  
- Crear taxonomía: Público, Interno, Confidencial, Restringido.

### 2. Piloto de Políticas DLP
- Comenzar con modo “audit-only”.  
- Ajustar falsos positivos y analizar patrones reales de fuga.  
- Crear políticas progresivas: advertir → bloquear.

### 3. Integración con Etiquetado y Cifrado
- Definir Sensitivity Labels obligatorias en correos sensibles.  
- Cifrado automático según reglas (PCI, datos personales, adjuntos).  
- Deshabilitar envío no cifrado de ciertos adjuntos.

### 4. Reglas Técnicas Prácticas
- **Detectar PII/PCI**  
	- Regex específicas (DNI, IBAN, tarjetas de crédito).  
- **Bloqueo de dominios externos no autorizados**  
	- Whitelist de partners aprobados.  
- **Alertas de envío masivo**  
	- Volumen anormal de mensajes o adjuntos.  
- **Bloqueo de reglas de reenvío automático**  
	- Prohibir reglas hacia Gmail/Yahoo.  
- **Control de adjuntos**  
	- Permitir solo formatos seguros.  
	- Aplicar CDR o conversión a PDF.

### 5. Monitorización y Detección Avanzada
- Análisis comportamental: volumetría, horarios inusuales, destinos críticos.  
- Correlación con eventos IAM: login sospechoso + exfiltración.  
- Alertas silenciosas para SOC ante comportamientos anómalos.

### 6. Capacitación y Concienciación
- Simulaciones de envío accidental.  
- Formación en clasificación de información.  
- Recordatorios en-client (pop-up: “¿Estás seguro de enviar esto?”).

### 7. Operaciones y Mejora Continua
- Revisiones de políticas cada trimestre.  
- Ajuste de etiquetas y flujos de cifrado.  
- Revisión de permisos delegados y reenvíos.

## Arquitecturas Prácticas
- **Cloud-native con M365 Purview**  
	- Autoetiquetado + reglas de contenido + cifrado + UEBA.  
- **Híbrida (SEG + M365)**  
	- SEG para sandboxing + Purview para reglas DLP y etiquetado.  
- **On-premise reforzado**  
	- Postfix/Exchange on-prem + motor DLP interno + SIEM + CDR.

## KPIs para Medir Eficacia
- Falsos positivos vs falsos negativos.  
- Tiempo medio de remediación.  
- Correo bloqueado por tipo de dato.  
- Usuarios reincidentes.  
- Impacto en productividad (latencia, uso de cifrado).  
