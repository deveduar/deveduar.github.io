---
creation date: 2025-04-14 19:45
tags:
  - JWT
  - autenticacion
  - criptografia
keywords: 
source: 
status: 📌
Parent: "Area-Sistemas"
cssclasses:
  - hide-embedded-header1
  - wide
categories: "autenticacion"
public_note: true
public_note1: true
---
# JWT
`$= dv.current().file.tags.join(" ")`


- autenticacion
- [criptografia](/Projects/Autenticacion/criptografia.md)
- 
- compartir data
- JSON web tokens
- [JSON Web tokens (JWT): claves para usarlos de manera segura | BBVA](https://www.bbva.com/es/innovacion/json-web-tokens-jwt-claves-para-usarlos-de-manera-segura/) 
- [Qué es Json Web Token y cómo funciona | OpenWebinars](https://openwebinars.net/blog/que-es-json-web-token-y-como-funciona/) 
- header, payload, Signature
- [¿Qué es JSON Web Token? \[2024\] | KeepCoding Bootcamps](https://keepcoding.io/blog/que-es-json-web-token/)  
- [RFC 7515 - JSON Web Signature (JWS)](https://datatracker.ietf.org/doc/html/rfc7515) 
- clave publica y privada
- **JOSE Header**: Contains metadata about the token
- **JWS payload**: Contains claims
- **JWS signature**: Validates that the token is trustworthy
- 
- What is JWT, JWS, JWE, and JWK
- JWS   Signature
	- firmar data
	- JSON Web Signature
	- [JSON Web Signature - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/JSON_Web_Signature) 
	- [JSON Web Signature ( JWS )](https://blog.pleets.org/article/es/json-web-signature) 
	- [Creación de una firma JWS - Documentación de IBM](https://www.ibm.com/docs/es/datapower-gateway/10.5.x?topic=encryption-creating-jws-signature) 
	- [jwe-jws](https://developer.visa.com/pages/encryption_guide/jwe-jws) 
- JWE  Encryption
	- JSON Web Encryption 
	- JWE is used to encrypt the data as well as make it integrity-protected
	- integridad
	- [JSON Web Encryption - Wikipedia](https://en.wikipedia.org/wiki/JSON_Web_Encryption) 
	- [What are JWT, JWS, JWE, JWK, and JWA?](https://www.loginradius.com/blog/engineering/guest-post/what-are-jwt-jws-jwe-jwk-jwa/) 
- JWK Key Set
	- generacion de keys
	- JWKS
	-  public keys used to verify any JSON Web Token
	-  JSON Web Key Set (JWKS)
	- [RFC 7517 - JSON Web Key (JWK)](https://datatracker.ietf.org/doc/html/rfc7517) 