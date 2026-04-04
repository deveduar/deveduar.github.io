---
date: 2025-04-14 19:00
title: SSO Single Sign-On
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
aliases:
category: autenticacion
tags:
  - autentication
  - Hacking
---
# SSO Single Sign-On

## Conceptos Fundamentales
- [autenticacion](/autenticacion/autenticacion/)
- [Protocolos](/redes/protocolos/)
- [SAML](/autenticacion/saml/)
- [Kerberos](/autenticacion/kerberos/)
- El **Single Sign-On (SSO)** permite a un usuario autenticarse una sola vez y reutilizar esa sesión para acceder a múltiples servicios sin volver a introducir credenciales o factores adicionales.
- Mejora la experiencia de usuario y reduce la fatiga de autenticación.
- Permite centralizar políticas de seguridad y auditoría.

## Ventajas Clave del SSO
- **Reducción de fricción**: una sola autenticación para múltiples apps.
- **Menos riesgo por contraseñas débiles** gracias a la centralización y MFA unificado.
- **Control centralizado**: políticas unificadas desde un IdP.
- **Menor superficie de ataque**: menos puntos donde se gestionan credenciales.
- **Auditoría única**: los eventos de autenticación se registran desde un punto central.

## Desventajas y Riesgos
- **Punto único de fallo**: si el IdP cae, los servicios dependientes también.
- **Compromiso crítico**: si la cuenta raíz del IdP es comprometida, se comprometen todos los servicios.
- **Complejidad** en interoperabilidad entre protocolos (SAML/OIDC/Kerberos).

## Integraciones con AWS
- [Aws](/cloud/aws/)
	- [sso aws](https://aws.amazon.com/es/what-is/sso/)
	- ¿Qué es el SSO - Explicación sobre el inicio de sesión único - AWS-

### AWS Identity-Centric SSO
- Acceso a múltiples cuentas AWS con un único login.
- Control de permisos mediante **Permission Sets**.
- Integración con IdPs externos vía **SAML 2.0**.
- Delegación de MFA desde el IdP.

### Conceptos Avanzados en AWS SSO
- **Account Assignments** para automatizar accesos.
- **SCIM Provisioning** para sincronización automática de identidades.
- **Auditoría centralizada** mediante CloudTrail.
- **Session Policies** para controlar duración y permisos dinámicos.

## SLO (Single Logout)
- SLO Single Logout 
	- [Single Sign-On - Wikipedia](https://es.wikipedia.org/wiki/Single-Sign-On) 
	- [Qué es SSO, cómo funciona y ventajas](https://blog.hubspot.es/website/que-es-sso#tipos) 
	- [Single Sign-On vs. Single Logout](https://fusionauth.io/blog/single-sign-on-vs-single-log-out) 
	- [Configuring Single Logout (SLO)](https://support.absorblms.com/hc/en-us/articles/26377498381075-Configuring-Single-Logout-SLO)

### Explicación del SLO
- Cierre de sesión sincronizado en todas las aplicaciones federadas.
- Reduce riesgos al evitar sesiones huérfanas.
- Fundamental en dispositivos compartidos o entornos corporativos.

### Desafíos del SLO
- Implementación inconsistente entre SPs.
- Sincronización compleja entre flujos front-channel y back-channel.
- Dependencia fuerte del IdP.

### Funcionamiento General
1. IdP envía solicitudes de logout a cada SP.
2. SPs invalidan su sesión local.
3. IdP finaliza la sesión principal.

## Tipos de SSO
### SSO Basado en Cookies
- Requiere dominio/control común.
- Usado en ecosistemas de productos internos.

### SSO Federado (SAML/OIDC)
- Basado en intercambio de tokens/aserciones.
- Ideal para SaaS y servicios externos.

### SSO Kerberos (AD)
- Basado en tickets y un KDC.
- Común en entornos corporativos Windows.

## Arquitectura y Flujos
### Roles Involucrados
- **IdP**: gestiona autenticación y atributos.
- **SP**: confía en el IdP para autenticar.
- **Usuario**: solicita acceso.

### Flujo General
1. Usuario solicita acceso a un SP.
2. El SP redirige al IdP.
3. IdP autentica y genera un token/aserción.
4. El SP valida el token.
5. El usuario accede sin reautenticar.

## Consideraciones de Seguridad
### Duración de Sesión
- Sesiones cortas reducen el riesgo.
- Opcionalmente se usa **session refresh**.

### MFA Centralizado
- Se implementa en el IdP.
- MFA basado en contexto: dispositivo, ubicación, riesgo.

### Integridad de Certificados/Tokens
- Rotación periódica de claves.
- Validación estricta de metadatos SAML.

### Protección contra Replay
- Nonces, timestamps, validación de audiencia y expiración.

## Buenas Prácticas
- Definir un IdP central confiable.
- Documentar federaciones y SPs conectados.
- Reforzar caducidad y límites de sesión.
- Activar auditoría centralizada.
- Revisar periodicamente permisos y SSO mappings.
- Usar SCIM o JIT para aprovisionamiento automatizado.

## Ejemplos de Código

### Metadatos SAML (SP → IdP)
{% raw %}
```xml
<EntityDescriptor entityID="https://sp.example.com/metadata">
	<SPSSODescriptor AuthnRequestsSigned="true" WantAssertionsSigned="true">
		<AssertionConsumerService 
			Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
			Location="https://sp.example.com/acs"
			index="1"/>
	</SPSSODescriptor>
</EntityDescriptor>
```
{% endraw %}`

### Política IAM para AWS SSO

{% raw %}
```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": ["ec2:DescribeInstances"],
			"Resource": "*"
		}
	]
}
```
{% endraw %}


# Frameworks y Tecnologías SSO

## Protocolos Fundamentales
### SAML 2.0
- Utilizado ampliamente en entornos corporativos y SaaS.
- Basado en **XML** y **Aserciones** firmadas.
- Ideal para federaciones entre empresas.
- Soporta **SSO** y **SLO**.
- Enlaces: [SAML](/autenticacion/saml/)

### OAuth 2.0 / OIDC
- OAuth 2.0 → Autorización.
- OIDC (OpenID Connect) → Autenticación + Perfil del usuario.
- Basado en **JSON** y tokens **JWT**.
- Ideal para aplicaciones modernas, móviles y APIs.
- Amplio soporte en proveedores cloud.

### Kerberos
- Protocolo basado en tickets y un **KDC** (Key Distribution Center).
- Usado en entornos Windows/Active Directory.
- Apropiado para SSO corporativo en redes internas.
- Enlace: [Kerberos](/autenticacion/kerberos/)

---

## Frameworks y Librerías de Implementación

### IdentityServer (OIDC / OAuth 2.0)
- Solución open source basada en .NET.
- Permite crear un IdP completo y personalizable.
- Compatible con flujos OIDC, OAuth2, tokens JWT.
- Ideal para entornos Microsoft o apps .NET.

### Keycloak (Open Source)
- Plataforma IAM con soporte para:
	- SAML 2.0
	- OAuth 2.0
	- OpenID Connect
	- SCIM
- Funcionalidades:
	- MFA integrado.
	- Control de sesiones.
	- Provisionamiento automático.
	- Adaptadores para múltiples lenguajes.
- Extremadamente útil para proyectos self-hosted.

### Auth0 (SaaS / Managed)
- Servicio administrado de autenticación y SSO.
- Proporciona:
	- Conexiones sociales.
	- Integración OIDC, SAML, Passwordless.
	- Dashboards avanzados.
- Ideal para productos que requieren simplicidad y rapidez.

### Okta
- Solución empresarial SaaS.
- Soporte para SSO federado, aprovisionamiento SCIM y MFA avanzado.
- Integración con miles de aplicaciones preconfiguradas.
- Amplio ecosistema de APIs.

### Azure AD / Entra ID
- Plataforma IAM de Microsoft.
- SSO para Office 365, Azure Portal y aplicaciones externas via SAML/OIDC.
- Integración profunda con entornos Windows y Azure.
- Identity Governance (PIM, recertificaciones).

### AWS IAM Identity Center
- SSO centralizado para cuentas AWS.
- Integración con IdPs externos vía SAML.
- Permission Sets, SCIM, MFA delegado.
- Enlace: [Aws](/cloud/aws/)

### Google Identity Platform / Workspace
- SSO basado en OIDC/SAML para servicios de Google.
- Integración con miles de aplicaciones.
- MFA, context-aware access, políticas de riesgo.

---

## Tecnologías y Estándares Complementarios

### SCIM (System for Cross-domain Identity Management)
- Protocolo para aprovisionamiento y sincronización automática de usuarios.
- Usado junto a SSO para:
	- Crear, actualizar y eliminar cuentas.
	- Gestionar roles y grupos.

### FIDO2 / WebAuthn
- Autenticación sin contraseña.
- Se integra con OIDC y SAML.
- Fortalece el SSO eliminando dependencias de passwords.

### JWT (JSON Web Token)
- Tokens firmados utilizados principalmente en OIDC.
- Contienen claims sobre el usuario.
- Soportan expiración, audiencias y scopes.

### WS-Federation
- Protocolo anterior a OIDC y SAML, todavía usado en entornos Microsoft.
- Puede interoperar con AD FS.

---

## Implementaciones Específicas por Lenguaje

### Java
- **Spring Security + Spring Authorization Server**
	- Compatible con OAuth2/OIDC.
- **Shibboleth**
	- Muy usado para SAML en entornos educativos.

### Python
- **django-allauth**
- **python-social-auth**
- **Flask-JWT/OIDC adapters**

### JavaScript / Node.js
- **passport.js**
	- Gran variedad de estrategias (SAML, OIDC, OAuth).
- **NextAuth.js**
	- Mechanismos integrados para OIDC y OAuth2.

### Go
- **golang.org/x/oauth2**
- **coreos/go-oidc** (muy robusto para validación OIDC).

---

## Plataformas de IAM / IdP Relevantes

### Open Source
- **Keycloak**
- **WSO2 Identity Server**
- **Gluu Server**
- **Apache Syncope**

### Comerciales
- **Okta**
- **Auth0**
- **Ping Identity**
- **CyberArk Identity**

---

## Criterios para Seleccionar un Framework
### Escalabilidad
- Requiere IdP autogestionado (Keycloak) o SaaS (Okta/Auth0).

### Protocolos Soportados
- [SAML](/autenticacion/saml/) para entornos heredados.
- OIDC para arquitecturas modernas.
- Kerberos para intranets corporativas.

### Integración con Sistemas Existentes
- AD/LDAP corporativo.
- Aplicaciones legacy.

### Seguridad
- MFA nativo.
- Rotación de claves.
- Gestión de sesiones.

### Gobernanza y Cumplimiento
- SCIM.
- Auditoría centralizada.
- Certificaciones (ISO 27001, SOC2).

---

## Ejemplo: Configuración Básica OIDC (Keycloak)

### Código (JSON de un Client OIDC)
{% raw %}
```json
{
	"clientId": "my-app",
	"enabled": true,
	"redirectUris": [
		"https://app.example.com/callback"
	],
	"publicClient": false,
	"protocol": "openid-connect",
	"standardFlowEnabled": true,
	"directAccessGrantsEnabled": false
}
```
{% endraw %}`

## Ejemplo: Configuración SAML (AD FS → SaaS)

{% raw %}
```xml
<EntityDescriptor entityID="https://saas.example.com/sp">
	<SPSSODescriptor WantAssertionsSigned="true">
		<AssertionConsumerService
			Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"
			Location="https://saas.example.com/saml/acs"
			index="0"/>
	</SPSSODescriptor>
</EntityDescriptor>
```
{% endraw %}

{% raw %}
```
```
{% endraw %}
