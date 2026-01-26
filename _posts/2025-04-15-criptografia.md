---
date: 2025-04-15 19:15
title: criptografia
keywords:
source:
status: 🚀
Parent: "[[Area-Sistemas]]"
public_note: "true"
category: autenticacion
tags:
  - Hacking
  - ciberseguridad
  - criptografia
---
# Criptografía
`$= dv.current().file.tags.join(" ")` 

- [control de datos](/ciberseguridad/control-de-datos/)
- [autenticacion](/uncategorized/autenticacion/)
	- [SSO Single Sign-On](/autenticacion/sso-single-sign-on/)
	- [OAuth](/autenticacion/oauth/) 🔥
	- [JWT](/autenticacion/jwt/)  🔥
- [Protocolos](/redes/protocolos/)
- tokens
- [PKI infraestructura de clave pública ](/autenticacion/pki-infraestructura-de-clave-p-blica/)

## Concepto general
La **criptografía** es la disciplina que estudia las técnicas para proteger la información mediante la transformación de datos, garantizando su **confidencialidad**, **integridad**, **autenticidad** y **no repudio**.  
Su objetivo es asegurar que solo las partes autorizadas puedan acceder o modificar la información transmitida o almacenada.

## Fundamentos
- [control de datos](/ciberseguridad/control-de-datos/)  
	La criptografía garantiza el control del acceso y la manipulación de datos sensibles, protegiéndolos de accesos no autorizados o alteraciones maliciosas.
- [autenticacion](/uncategorized/autenticacion/)  
	Permite verificar la identidad de los usuarios, sistemas o entidades que participan en una comunicación segura. Puede implementarse mediante contraseñas, claves, certificados o protocolos especializados.
## [Protocolos](/redes/protocolos/) y Estándares Criptográficos
- [OAuth](/autenticacion/oauth/) 🔥  
	Protocolo de autorización que permite a las aplicaciones acceder a recursos de usuario en otros servicios sin necesidad de compartir credenciales.  
	Utiliza **tokens de acceso** temporales y seguros.
- [JWT](/autenticacion/jwt/) 🔥  
	(**JSON Web Token**) es un formato de token compacto y seguro que se usa para transmitir información firmada entre partes.  
	Estructura:  
	1. **Header:** indica el tipo de token y el algoritmo de firma.  
	2. **Payload:** contiene los datos o “claims” del usuario.  
	3. **Signature:** asegura la integridad del token.

## Protocolos de Seguridad

- **Let’s Encrypt**  
	Autoridad certificadora gratuita y automatizada que emite certificados digitales para habilitar conexiones HTTPS seguras.
- **HTTPS**  
	Protocolo de comunicación segura basado en HTTP que utiliza **SSL/TLS** para cifrar los datos transmitidos entre cliente y servidor.
- SSL vs TLS  
	- **SSL (Secure Sockets Layer):** protocolo original de cifrado de comunicaciones en red. Actualmente obsoleto.  
	- **TLS (Transport Layer Security):** sucesor de SSL, ofrece mayor seguridad y eficiencia.  
	Ambos se utilizan para establecer canales cifrados sobre TCP/IP.

---

## [PKI infraestructura de clave pública](/autenticacion/pki-infraestructura-de-clave-p-blica/)

La **Infraestructura de Clave Pública (PKI)** proporciona los mecanismos necesarios para gestionar, emitir, revocar y validar certificados digitales y pares de claves (pública y privada).

### Componentes
- **Autoridades de Certificación (CA):** emiten y firman certificados digitales.  
- **Autoridades de Registro (RA):** validan la identidad antes de emitir un certificado.  
- **Repositorios de Certificados:** almacenan certificados y listas de revocación (CRL).  
- **Usuarios:** entidades que utilizan los certificados para firmar, cifrar o autenticar.

### Certificados digitales
Documento electrónico emitido por una CA que vincula una **clave pública** con una **identidad** (persona, organización o dispositivo).  
Permite autenticar y establecer conexiones seguras.

---

## Tipos de cifrado

### Cifrado simétrico
Utiliza la **misma clave** para cifrar y descifrar la información.  
Ventajas: rápido y eficiente para grandes volúmenes de datos.  
Desventajas: requiere un canal seguro para compartir la clave.  
Ejemplos: **AES**, **DES**, **ChaCha20**.

{% raw %}
```text
Cifrado simétrico:
Clave → Cifrado → Descifrado → Mismo secreto
```
{% endraw %}`

### Cifrado asimétrico

Emplea un **par de claves**: una **pública** (para cifrar) y una **privada** (para descifrar).  
Ventajas: no necesita compartir la clave privada.  
Desventajas: más lento computacionalmente.  
Ejemplos: **RSA**, **ECC**, **Diffie-Hellman**.

{% raw %}
```text
Cifrado asimétrico:
Clave pública → Cifrado
Clave privada → Descifrado
```
{% endraw %}

---

## Recursos y guías de estándares criptográficos

- [Cryptography Standards (NIST FIPS)](https://csrc.nist.gov/publications/fips)
- [Cryptographic Standards and Guidelines | CSRC](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines)
    

# Criptografía — Extensión de conceptos avanzados

## Criptografía Moderna y Funciones Fundamentales

### Funciones hash criptográficas
Las funciones hash producen un valor fijo (digest) a partir de un mensaje de longitud arbitraria, garantizando:
- **No colisión:** difícil encontrar dos mensajes diferentes con el mismo hash.
- **Preimagen:** difícil obtener un mensaje a partir de su hash.
- **Segunda preimagen:** difícil encontrar otro mensaje que produzca el mismo hash.

Ejemplos relevantes: **SHA-256**, **SHA-3**, **BLAKE3**.

### HMAC (Hash-based Message Authentication Code)
Mecanismo que combina un hash criptográfico con una clave secreta para garantizar:
- Integridad del mensaje  
- Autenticación entre las partes  
Usado en APIs, protocolos de red y firma de tokens.

---

## Operaciones y Construcciones Criptográficas Comunes

### Firmas digitales
Permiten autenticar documentos o transacciones sin compartir secretos. Aseguran:
- Autenticidad  
- Integridad  
- No repudio  

Esquemas comunes: **RSA-PSS**, **ECDSA**, **Ed25519**.

### Intercambio seguro de claves
Métodos para que dos entidades generen una clave compartida sin haberla acordado previamente.  
Ejemplos:  
- **Diffie–Hellman clásico**  
- **ECDH (Elliptic Curve Diffie–Hellman)**  

### Derivación de claves (KDF)
Procesos para generar claves fuertes a partir de contraseñas o material base.  
Funciones típicas: **PBKDF2**, **scrypt**, **Argon2**.

---

## Criptografía aplicada en sistemas

### Gestión de claves
Incluye generación, almacenamiento, rotación, revocación y destrucción de claves criptográficas.  
Buenas prácticas:  
- Uso de HSM (Hardware Security Module)  
- Rotación periódica  
- Separación de claves de cifrado y firmas  

### Almacenamiento seguro de contraseñas
No se almacenan contraseñas en claro; se guardan:
- Hash salado (salt)
- Hash lento (Argon2, bcrypt)  
- Opcional: pepper a nivel de servidor

---

## Criptografía en tránsito y en reposo

### Cifrado en reposo (data at rest)
Se aplica a bases de datos, discos y backups.  
Estrategias:
- Cifrado completo de disco (FDE)  
- Cifrado a nivel de archivo  
- Cifrado a nivel de columna o campo  

### Cifrado en tránsito (data in transit)
Protege los datos mientras viajan por la red.  
Ejemplos:
- TLS
- VPN  
- Túneles cifrados SSH  

---

## Criptografía Post-Cuántica (PQC)

### Amenaza cuántica
Los ordenadores cuánticos podrían romper algoritmos actuales:  
- RSA  
- ECC  
- DH  

### Algoritmos post-cuánticos (NIST 2022+)
Nuevos estándares resistentes a ataques cuánticos:  
- **CRYSTALS-Kyber** (intercambio de claves)  
- **CRYSTALS-Dilithium** (firmas)  
- **FALCON** (firmas)  
- **SPHINCS+** (firmas basadas en hash)  

---

## Modos de operación en cifrado simétrico

### Modos de bloque
Definen cómo un cifrado de bloque procesa datos mayores que su tamaño:
- **ECB (prohibido):** no segura; mantiene patrones.  
- **CBC:** usa IV; sensible a padding oracle.  
- **CFB / OFB:** convierten bloque en flujo.  
- **CTR:** modo de contadores; paralelizable.  
- **GCM:** cifrado + autenticación (AEAD).  

### AEAD (Authenticated Encryption with Associated Data)
Combina cifrado y autenticación en una operación.  
Modos comunes:
- **AES-GCM**  
- **ChaCha20-Poly1305**

---

## Criptografía funcional avanzada

### Zero-Knowledge Proofs (ZKP)
Pruebas donde una parte demuestra conocer un valor sin revelarlo.  
Aplicaciones:  
- Identidad sin exponer datos  
- Privacidad en blockchains  
- Autenticación avanzada  

### Homomorphic Encryption
Permite realizar operaciones sobre datos cifrados sin descifrarlos.  
Tipos:  
- Parcialmente homomórfico  
- Completamente homomórfico (FHE)  

### Secret Sharing
Divide un secreto en múltiples partes, requiriendo un mínimo para reconstruirlo.  
Ejemplo: **Shamir’s Secret Sharing**.

---

## Seguridad en APIs y Servicios

### CORS, CSRF y ataques comunes
- **CSRF:** utiliza sesiones activas del usuario.  
- **Mitigación:** tokens anti-CSRF, cabeceras SameSite.  
- **[CORS](/backend/cors/):** controla quién puede acceder a recursos.

### Tokens de acceso
Más allá de JWT:
- Access Token  
- Refresh Token  
- Proof-of-Possession tokens (PoP)

---

## Análisis Criptográfico

### Ataques típicos
- Ataques de fuerza bruta  
- Análisis diferencial (cifrados en bloque)  
- Ataques por canal lateral (tiempo, energía, EM)  
- Replay attacks  
- Padding oracle attacks  

### Hardening criptográfico
- Minimizaciones de superficie  
- Const-time operations  
- Eliminación segura de memoria  
- Claves de larga entropía  


# Criptografía — Extensión Final de Conceptos Avanzados 

## Modelos de Seguridad Criptográfica

### Seguridad bajo CPA y CCA
- **CPA (Chosen Plaintext Attack):** el atacante puede elegir textos en claro y obtener sus cifrados.  
	Un cifrado seguro bajo CPA evita que el atacante aprenda algo del mensaje.
- **CCA (Chosen Ciphertext Attack):** el atacante puede solicitar el descifrado de textos alterados.  
	Un cifrado seguro bajo CCA resiste manipulación de mensajes cifrados.

### IND-CCA e IND-CPA
Modelos formales usados en investigación y certificaciones para asegurar que:
- El esquema no revela información del mensaje (IND = indistinguishability).
- Proveen garantías matemáticas bajo escenarios realistas.

---

## Arquitecturas Criptográficas en Sistemas Reales

### Criptografía híbrida
Combina cifrado asimétrico (para intercambio de claves) y simétrico (para cifrado de datos).  
Usado en:
- TLS  
- PGP  
- Protocolos de mensajería segura  

### Forward Secrecy (FS)
Propiedad que impide que la revelación de una clave privada permita descifrar mensajes pasados.  
Los protocolos modernos usan **claves efímeras** (ECDHE).

### Backward Secrecy
Garantiza que un atacante no pueda descifrar mensajes futuros incluso si compromete claves actuales.

---

## Criptografía en Mensajería Segura

### Protocolos modernos
- **Signal Protocol:** ratchet system, doble ratchet, X3DH.  
- **OMEMO:** cifrado para XMPP.  
- **MLS (Messaging Layer Security):** cifrado para grupos grandes.

### Ratcheting
Mecanismo de rotación continua y automática de claves que mejora seguridad:
- *Symmetric-key ratchet*  
- *Diffie-Hellman ratchet*  
- *Double ratchet*

---

## Criptografía en Blockchain y Web3

### Árboles de Merkle
Estructura que permite verificar integridad sobre grandes cantidades de datos utilizando solo hashes.  
Fundamental en:
- Bitcoin  
- Ethereum  
- Sistemas distribuidos

### Pruebas de Merkle (Merkle proofs)
Permiten verificar que un elemento está incluido en un conjunto sin revelar el resto del conjunto.

### Billeteras y claves
- **Claves determinísticas (HD wallets):** basadas en BIP32, BIP39, BIP44.  
- **Frases mnemónicas:** representación humana de una semilla criptográfica.

### Hashing en minería y consenso
- *Proof of Work:* hashes repetidos y medición de dificultad  
- *Proof of Stake:* firmas y validación

---

## Criptografía en Hardware

### TPM (Trusted Platform Module)
Chip dedicado para:
- Generación segura de claves  
- Almacenamiento protegido  
- Verificación de integridad del arranque (Secure Boot)

### SGX, TrustZone y enclaves seguros
Áreas de procesamiento aisladas diseñadas para proteger operaciones sensibles:
- Firmas  
- Cifrado  
- ML seguro  
- Procesamiento de datos privados

### PUF (Physical Unclonable Functions)
Generación de claves a partir de micro-variaciones físicas de un chip.  
Clave que nunca se almacena, solo se “reproduce”.

---

## Cifrado de Flujo y Cifrado de Bloque (Aprofundización)

### Cifrados de flujo
Cifran bit a bit o byte a byte con un keystream:
- RC4 (inseguro)  
- Salsa20  
- ChaCha20  

Propiedades:
- Rápidos  
- Sin padding  
- Sensibles a reutilización del nonce

### Cifrados de bloque (propiedades internas)
- Confusión  
- Difusión  
- Redes Feistel  
- Redes SPN (Substitution-Permutation Network)  
Esquemas icónicos: AES (SPN), DES (Feistel)

---

## Criptografía de Curvas Elípticas — Más allá de lo básico

### Parámetros importantes
- Punto generador  
- Orden del grupo  
- Cofactor  
- Representación de puntos (Weierstrass, Montgomery, Edwards)

### Curvas modernas
- **Curve25519** (DH moderno)  
- **Ed25519** (firmas rápidas y seguras)  
- **P-256** (estándar NIST)  
- **secp256k1** (Bitcoin)

### Ventajas frente a RSA
- Menor tamaño de clave  
- Más eficiente  
- Menor carga computacional en dispositivos móviles

---

## Criptografía en el Desarrollo Seguro

### Gestión correcta de nonces e IV
- No repetir jamás el nonce con la misma clave  
- IV aleatorios o contadores seguros  
- Requisitos estrictos en GCM y CTR  

### Entropía y fuentes de aleatoriedad
Calidad del RNG = seguridad total.
Fuentes:
- /dev/urandom  
- HRNG (hardware RNG)  
- DRBG (deterministic random bit generators)

### Políticas de rotación de claves
- Intervalos temporales  
- Rotación por uso  
- Rotación ante incidentes  
- Versionado de claves

---

## Criptografía y Privacidad de Usuario

### Differential Privacy
Permite procesar datos agregados introduciendo ruido para proteger identidades individuales.

### Privacidad de metadatos
Técnicas para evitar filtración de información indirecta:
- Padding de tráfico  
- Tor / Mixnets  
- Blind signatures  

### Blind Signatures
Firmas donde el firmante no ve el mensaje real.  
Usado en:
- E-cash  
- Sistemas de votación electrónicos

---

## Criptografía en Infraestructura de Redes

### IPsec
Cifrado a nivel de red:
- AH (integridad y autenticación)  
- ESP (cifrado + autenticación)  
- Modo túnel vs transporte  

### SSH (visión avanzada)
- Intercambio de claves dinámico  
- Host keys  
- Forward secrecy  
- Reenvío seguro de puertos

### DNSSEC
Protege integridad de consultas DNS mediante firmas digitales.

---

## Auditoría Criptográfica

### Validación y verificación
- Revisión de parámetros  
- Detección de claves débiles  
- Pruebas de robustez  
- Comprobación de resistencias ante side-channel attacks

### Certificaciones reconocidas
- FIPS 140-3  
- Common Criteria  
- eIDAS para certificados avanzados

