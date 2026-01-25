---
date: 2025-04-14 18:18
title: IRM manejo de derechos de la informacion
tags:
  - hardening
  - Hacking
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
# IRM — Manejo de Derechos de la Información  
``$= dv.current().file.tags.join(" ")``

- [hardening](/ciberseguridad/hardening/) 
- [control de datos](/ciberseguridad/control-de-datos/)
* [https://www.acerodocs.com/es/blog/tecnologia-irm/](https://www.acerodocs.com/es/blog/tecnologia-irm/)
* [https://en.wikipedia.org/wiki/Information_rights_management](https://en.wikipedia.org/wiki/Information_rights_management)
---

# Concepto General de IRM
Information Rights Management (IRM) es un conjunto de tecnologías orientadas al **control persistente** de la información digital, incluso cuando esta **sale del perímetro corporativo**.  
A diferencia de los controles tradicionales (ACL, permisos NTFS, políticas de correo), IRM **viaja con el archivo**, aplicando cifrado, restricciones de uso y trazabilidad continua.

Sus objetivos principales son:
- Prevenir el acceso no autorizado a documentos.
- Limitar acciones: copiar, reenviar, imprimir, capturar pantalla, descargar.
- Forzar el cifrado granular y obligatorio.
- Registrar actividad del usuario y del documento (auditoría continua).
- Revocar acceso **después** de haber compartido el documento.
- Integrarse con políticas de DLP, clasificación, etiquetas de sensibilidad y flujos de aprobación.

---

# Elementos Clave de IRM
## Control Persistente del Archivo  
El archivo contiene:
- Clave de cifrado propia.  
- Políticas embebidas que definen lo que puede o no hacer el receptor.  
- Identidad obligatoria del usuario para acceder (autenticación federada o mediante proveedor corporativo).

## Gestión de Claves y Cifrado  
- Cifrado fuerte basado en KMS corporativo (Azure RMS, AWS KMS, GCP KMS, HSM locales).  
- Renegociación automática de claves ante revocaciones.  
- Claves rotadas y versionadas para cumplir normativas.

## Identidad y Autorización
- Autenticación MFA obligatoria para abrir o manipular el archivo.  
- Integración con directorios: AAD, LDAP, PAM, SSO.  
- Autorización dinámica basada en rol, atributo o contexto.

## Restricciones de Uso Internas al Documento
- Lectura solo online/offline.  
- Deshabilitar *print screen* y herramientas de captura.  
- Marca de agua dinámica con usuario, hora, GPS aproximado.  
- Bloqueo de macros o ejecución controlada de scripts internos.  
- Caducidad (tiempo de vida del archivo).  
- Visualización solo en dispositivos corporativos o gestionados.

## Auditoría, Trazabilidad y Pruebas Forenses
- Registro de apertura, cierre, reenvío, intento de exportación.  
- Registro de violaciones de política y bloqueos.  
- Correlación con incidentes DLP y SIEM.

---

# IRM dentro de un Sistema de Seguridad Integrado
La tecnología IRM se considera parte del enfoque de **Data-Centric Security** y se integra con:

## DLP (Data Loss Prevention)
- IRM se aplica como **acción** del DLP (cifrar, bloquear, etiquetar).  
- Activación basada en patrones, clasificadores, ML o contexto.  
- IRM reduce falsos positivos del DLP permitiendo compartir información bajo reglas estrictas.

## Clasificación y Etiquetado de Datos
- Integración con etiquetas: *Público*, *Interno*, *Confidencial*, *Alto Secreto*.  
- Las etiquetas disparan políticas IRM automáticamente.  
- Alineación con frameworks: ISO 27001/27002, ENS, NIST 800-53, CIS Controls.

## Zero Trust Data Layer
- IRM implementa el principio “**Nunca confíes en el archivo**”, incluso dentro de la red.  
- Autorización por contexto: dispositivo, localización, riesgo del usuario, postura de seguridad.

---

# Arquitectura IRM — Componentes y Flujo
1. **Clasificación inicial**  
	- Automática, manual o asistida por ML.
2. **Aplicación de la política IRM**  
	- Se embeben permisos y se cifra el archivo.
3. **Distribución**  
	- Correo, nube, USB, canales no controlados.
4. **Acceso seguro**  
	- El receptor se autentica contra el IRM server.
5. **Enforcement**  
	- El visor o agente aplica las restricciones.
6. **Monitorización y revocación**  
	- Auditoría, alertas y revocación remota.

---

# Casos de Uso Avanzados
## Protección de Información Crítica
- Planos, contratos, ofertas comerciales, I+D.  
- Documentos M&A o datos financieros sensibles.

## Protección en Colaboración Externa
- Proveedores, partners, auditorías.  
- Permite mantener control sin depender de la seguridad del tercero.

## Protección en Dispositivos No Confiables
- BYOD, móviles, dispositivos de terceros.  
- Acceso solo mediante visor protegido.

## Escenarios Forenses y de Cumplimiento
- Trazabilidad completa para ISO 27001, SOX, GDPR, ENS.  
- Evidencias válidas para análisis de incidentes.

---

# Modelos de Implementación  
## IRM Local / On-Prem
- Servidores RMS locales.  
- Integrado con Active Directory clásico.  
- Ideal para entornos aislados o con datos altamente regulados.

## IRM Cloud / SaaS
- Microsoft Purview Information Protection.  
- Google Workspace Client-Side Encryption.  
- Box Shield, Adobe AEM IRM.  
- Ventaja: escalabilidad, actualización continua, análisis de riesgo.

## IRM Híbrido  
- Política centralizada.  
- Aplicación distribuida en agentes (endpoint, cliente de correo, aplicaciones ofimáticas).

---

# Integración con [hardening](/ciberseguridad/hardening/)
IRM es una pieza esencial del hardening a nivel **documental**, complementando los enfoques tradicionales:

- **Hardening de identidades:** IRM exige MFA, certificados, tokens de acceso y políticas de riesgo.  
- **Hardening de endpoints:** Los agentes IRM refuerzan el control de uso y bloquean exportaciones inseguras.  
- **Hardening de aplicaciones:** Control dentro del propio visor, sandboxing y eliminación de APIs inseguras.  
- **Hardening del flujo de información:** Cifrado end-to-end, clasificación y restricciones dinámicas.

---

# Ventajas y Limitaciones
## Ventajas
- Control persistente, incluso fuera de la empresa.  
- Trazabilidad total del ciclo de vida del archivo.  
- Cumplimiento normativo simplificado.  
- Reducción drástica de filtraciones accidentales o maliciosas.

## Limitaciones
- Dependencia de agentes o visores.  
- Algunas acciones pueden ser burladas si el atacante tiene cámara física.  
- Requiere buena gestión de identidad, roles y clasificación.  
- Puede afectar a la usabilidad si no se diseña bien.

---

# Enfoque Práctico de Implementación
1. **Definir el esquema corporativo de clasificación.**  
2. **Inventariar flujos de información sensibles.**  
3. **Configurar modelos de permisos reutilizables.**  
4. **Mapear roles↔permisos↔etiquetas.**  
5. **Integrar IRM con correo, OneDrive/Drive, SharePoint/Confluence.**  
6. **Configurar agentes en endpoints críticos.**  
7. **Establecer auditoría continua y alertas de abuso.**  
8. **Definir política de caducidad y revocación automática.**  
9. **Probar escenarios reales:**  
	- Envío externo  
	- Dispositivo no confiable  
	- Usuario revocado  
	- Fuga simulada  
10. **Revisiones trimestrales y rotación de claves.**

---

# Bloques de Código (Cada uno con Heading Propio)

## Ejemplo de Política IRM en Pseudocódigo
{% raw %}
```yaml
document_policy:
  classification: "Confidencial"
  encryption: "AES256"
  permissions:
    allow:
      - read
    deny:
      - print
      - copy
      - screenshot
  expiry: "2025-12-31"
  watermark:
    enabled: true
    template: "${user} - ${timestamp}"
  audit:
    track:
      - open
      - forward_attempt
      - print_attempt
```
{% endraw %}`

## Ejemplo de Flujo de Verificación de Identidad Antes de Abrir Archivo

{% raw %}
```python
def verify_access(user, document):
    if not user.is_authenticated():
        raise AccessDenied("User not authenticated")
    if not document.policy.allows(user.role):
        raise AccessDenied("Role not permitted")
    if document.policy.is_expired():
        raise AccessDenied("Document expired")
    return decrypt_document(document, user.keys)
```
{% endraw %}

---
