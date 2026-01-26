---
date: 2025-10-10 11:20
title: better auth
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: "true"
category: autenticacion
tags:
  - autenticacion
  - auth
  - seguridad
  - framework
---
# Better Auth
`$= dv.current().file.tags.join(" ")`

- [autenticacion](/uncategorized/autenticacion/)

## Docs
- Introduction  Better Auth-introduction
- Installation  Better Auth-installation

## Conceptos
- **Framework de autenticación:** Sistema que permite gestionar identidades de usuarios, sesiones, permisos y roles de manera segura y escalable. Facilita la integración de distintos métodos de autenticación como contraseña, OAuth, JWT, SSO, entre otros.
- **Plugins:** Extensiones que permiten ampliar las capacidades del framework, añadiendo nuevos métodos de autenticación, proveedores externos o funcionalidades adicionales como logging, verificación de correo o gestión de tokens.

## Casos de uso
- **Autenticación de usuarios:** Validar credenciales y gestionar sesiones de manera segura.
- **Integración con servicios externos:** Conectar con proveedores de identidad como Google, Facebook o Azure AD.
- **Gestión de roles y permisos:** Controlar el acceso a recursos según roles definidos.
- **Autenticación multifactor (MFA):** Añadir capas de seguridad mediante SMS, email o apps de autenticación.
- **Single Sign-On (SSO):** Permitir acceso único a múltiples aplicaciones sin necesidad de múltiples logins.

## Ejemplos de código

### Instalación básica
{% raw %}
```bash
# Instalación usando npm
npm install better-auth
```
{% endraw %}`

### Configuración inicial

{% raw %}
```javascript
const BetterAuth = require('better-auth');

const auth = new BetterAuth({
	providers: ['local', 'google'],
	sessionSecret: 'miSecretoSuperSeguro'
});
```
{% endraw %}

### Autenticación de usuario

{% raw %}
```javascript
auth.login('usuario@example.com', 'contraseña123')
	.then(user => console.log('Usuario autenticado:', user))
	.catch(err => console.error('Error de autenticación:', err));
```
{% endraw %}

### Uso de plugins

{% raw %}
```javascript
const auditPlugin = require('better-auth-plugin-audit');

auth.use(auditPlugin({
	logFile: './audit.log'
}));
```
{% endraw %}

## Buenas prácticas

* **Seguridad de contraseñas:** Usar hashing fuerte (bcrypt o Argon2) y no almacenar contraseñas en texto plano.
* **Manejo de sesiones:** Limitar la duración de sesiones y usar tokens seguros.
* **Validación de entrada:** Evitar ataques de inyección y sanitizar datos de usuarios.
* **Registro de eventos:** Mantener logs de accesos y fallos de autenticación para auditoría.
* **Actualización de dependencias:** Mantener el framework y plugins siempre actualizados para evitar vulnerabilidades.

