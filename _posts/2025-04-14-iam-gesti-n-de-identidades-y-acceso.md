---
date: 2025-04-14 19:20
title: IAM Gestión de Identidades y Acceso
tags:
  - autentication
  - Hacking
  - ciberseguridad
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
cssclasses:
  - hide-embedded-header1
  - wide
categories:
  - autenticacion
public_note: "true"
category: autenticacion
---
# IAM  Gestión de Identidades y Acceso
`$= dv.current().file.tags.join(" ")`

- [autenticacion](/uncategorized/autenticacion/)
- [ciberseguridad](/uncategorized/ciberseguridad/)
- protocolos
- [LDAP](/autenticacion/ldap/)
- [ABAC](/autenticacion/abac/)
- [RBAC](/autenticacion/rbac/)
- prevencion, recursos, fraude
- acceso por identidad (no solo IP)

## Conceptos clave
- Identidad como perímetro: usuarios, servicios, máquinas y workloads como entidades verificables.
- Zero Trust aplicado a IAM: verificación continua, menor privilegio, autenticación adaptativa.
- Ciclo de vida de identidad (IdLC): aprovisionamiento, activación, modificación, desactivación y revocación.
- Gobernanza de acceso (IAG): revisión, certificación de accesos, segregación de funciones (SoD).
- Integración con [SSO Single Sign-On](/autenticacion/sso-single-sign-on/), MFA y federación de identidad (SAML, OIDC, OAuth2).
- IAM para APIs: emisión y validación de tokens, scopes, claims y roles.
- IAM para infra: acceso privilegiado (PAM), credenciales efímeras, rotación automática.

## Arquitectura IAM
- Componentes:
	- **Directorio**: LDAP/AD/ADFS/Cloud Directory.
	- **Identity Provider (IdP)**: autenticación, MFA, política adaptativa.
	- **Service Provider (SP)**: aplicaciones que consumen la identidad.
	- **PAM**: bóveda de credenciales, acceso just-in-time.
- Modelos:
	- Centralizado (IdP único).
	- Distribuido (múltiples dominios).
	- Federado (trust entre dominios).
	- Hybrid IAM (on-prem + cloud).

## Flujos de autenticación
- Autenticación clásica (password + política).
- MFA adaptativo: riesgo, contexto, dispositivo.
- Passwordless: WebAuthn, FIDO2.
- Federation: intercambio de assertions o tokens entre dominios de confianza.

## Seguridad y riesgos
- Ataques: password spraying, MFA fatigue, session hijacking, token replay.
- Medidas:
	- Rotación y escaneo de credenciales expuestas.
	- Policies basadas en riesgo y contexto (geolocalización, device posture).
	- Auditoría continua de accesos y permisos.
	- Reglas SoD y RBAC/ABAC.
	- Hardening del IdP, TLS, signing keys, key rotation.

## Roles y modelos de acceso
- **RBAC**: acceso basado en rol.
- **ABAC**: acceso según atributos (contexto, dispositivo, horario).
- **PBAC**: políticas declarativas (OPA, Zanzibar-like).
- **CIEM**: gestión de privilegios en cloud, reducción de permisos efectivos.

## Herramientas y frameworks
- **Open Source**
	- Keycloak (IdP, SSO, MFA, federación).
	- Authelia (reverse proxy + 2FA).
	- Dex (OIDC IdP).
	- Zitadel (IdP moderno con RBAC/CIAM).
	- Kanidm (IAM moderno, reemplazo de LDAP).

- **Nube / Managed IAM**
	- AWS IAM / IAM Identity Center.
	- Azure AD / Entra ID.
	- Google IAM + Workforce Identity.
	- Auth0, Okta.

- **PAM**
	- HashiCorp Vault.
	- Teleport.
	- Boundary.

- **Frameworks y estándares**
	- OIDC, OAuth2, SAML, SCIM (aprovisionamiento), FIDO2/WebAuthn.
	- OPA (Open Policy Agent).
	- SPIFFE/SPIRE para identidad de workload.

## Casos de uso
- Workforce IAM: empleados, contratistas, proveedores.
- CIAM: clientes, gestión de consentimiento, privacidad.
- IAM para APIs: scopes, rate limit por identidad, API-keys rotables.
- IAM DevOps:
	- secretos efímeros,
	- credenciales de máquina,
	- firmar artefactos y pipelines,
	- comprobación de integridad.

## Automatización y operación
- SCIM: aprovisionamiento/desaprovisionamiento automático.
- GitOps IAM: políticas y roles como código (IaC).
- Auditoría continua: logs, correlación, UEBA.
- Rotación de claves y certificados automática.
- Cumplimiento: SoD, certificación periódica, reporting.

## Recursos
- **Tool**
	- [Keycloak](https://www.keycloak.org/)
- **Lecturas**
	- [Introducción a IAM - Auth0](https://auth0.com/es/intro-to-iam)
	- [¿Qué es IAM? - IBM](https://www.ibm.com/es-es/topics/identity-access-management)
