---
date: 2025-04-14 19:57
title: PKI infraestructura de clave pública
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
category: autenticacion
tags:
  - autenticacion
  - criptografia
  - pki
---
# PKI infraestructura de clave pública

- [criptografia](/autenticacion/criptografia/)  
- [autenticacion](/autenticacion/autenticacion/)
- control de acceso
- [¿Qué es PKI? Guía definitiva sobre la infraestructura de clave pública | Keyfactor](https://www.keyfactor.com/es/education-center/what-is-pki/) 
- [PKI - Istec Digital](https://www.istecdigital.es/certipedia/pki/) 
- [PKI - Glossary | CSRC](https://csrc.nist.gov/glossary/term/pki) 
-  [IETF Datatracker](https://datatracker.ietf.org/) 
- ¿Qué es una PKI (Infraestructura de clave pública)  Entrust-what-is-pkix
## Conceptos fundamentales de PKI
- Infraestructura que gestiona claves, certificados y la confianza entre entidades.
- Facilita [autenticacion](/autenticacion/autenticacion/), firma digital, control de acceso y cifrado seguro.
- Basada en criptografía **asimétrica** (par de claves) y soporte de cifrado **simétrico** para rendimiento.
- Se apoya en autoridades, políticas y procedimientos formales para garantizar identidad y no repudio.

## Componentes principales
- **CA (Certificate Authority)**:  
	- Emite, renueva, suspende y revoca certificados.  
	- Define políticas de emisión y validación (CP/CPS).
- **RA (Registration Authority)**:  
	- Valida identidades antes de la emisión.  
	- Delegada por la CA para escalar operaciones.
- **Repositorio / Directorio**:  
	- Publica certificados y listas de revocación (CRL/OCSP).  
	- Facilita verificación de confianza en tiempo real.
- **HSM (Hardware Security Module)**:  
	- Almacena claves privadas de la CA con garantías físicas y lógicas.  
	- Requisito para entornos de alta seguridad y cumplimiento.
- **End-Entities (usuarios, servicios, dispositivos)**:  
	- Consumen certificados: autenticación mutua, cifrado TLS, firma digital, S/MIME, SSH, IoT.

## Tipos de cifrado implicados
- **Simétrico**  
	- Rápido, usado para cifrado de sesión (AES, ChaCha20).  
	- Depende de una clave compartida negociada tras autenticación asimétrica.
- **Asimétrico**  
	- Par de claves pública/privada (RSA, ECC, Ed25519).  
	- Base para identidad y distribución segura de claves.
- **Híbrido**  
	- Combina ambos: intercambio asimétrico + cifrado simétrico.

## Ciclo de vida del certificado
- **Generación del par de claves** (en cliente o HSM).  
- **Solicitud CSR** firmada con la clave privada.  
- **Emisión** según políticas CP/CPS.  
- **Instalación** en servicio/usuario.  
- **Renovación** automática o manual (ACME, SCEP, EST).  
- **Revocación** mediante CRL u OCSP.  
- **Auditoría y cumplimiento** continuo.

## Modelos de confianza
- **Jerárquico**  
	- Raíz → Sub-CAs → End-entities.  
	- Modelo más común en entornos corporativos y públicos.
- **Bridge CA / Mallas**  
	- Interoperabilidad entre organizaciones, gobierno, federaciones.  
	- Usados en PKI de defensa, gubernamental o grandes consorcios.
- **WebPKI**  
	- Utilizado por HTTPS.  
	- Basado en confianza distribuida y auditorías obligatorias (CAB Forum, CT Logs).

## Protocolos, estándares y marcos de referencia
- **X.509**: formato del certificado.  
- **OCSP / CRL**: validación del estado del certificado.  
- **CMP / SCEP / EST / ACME**: aprovisionamiento y automatización.  
- **RFCs de IETF**:  
	- Repositorio central: https://datatracker.ietf.org/  
- **NIST**  
	- Definiciones formales del término PKI.  
	- Guías de seguridad para algoritmos y tamaños de clave.
- **Referencias**  
	- Keyfactor  
	- IstecDigital  
	- Entrust  
	- CSRC NIST

## Casos de uso principales
- **TLS/HTTPS** para servicios web internos/externos.  
- **S/MIME** para correo seguro.  
- **Firma y sellado de código** para integridad en despliegues.  
- **Autenticación de dispositivos IoT** y M2M.  
- **VPNs basadas en certificados** (IPSec, SSL-VPN).  
- **Zero Trust**: identidad atada a dispositivos, usuarios y cargas de trabajo.

## Automatización y operación segura
- **ACME interno** para renovación transparente.  
- **Rotación programada de claves** (key rollover).  
- **Auditoría continua**:  
	- Caducidades  
	- Publicación OCSP/CRL  
	- Validez de la cadena  
- **Políticas CP/CPS sólidas** que definan autenticación, procedimientos y controles.  
- **Protección del Root CA**  
	- Offline, firmando solo Sub-CAs.  
	- Custodia múltiple (M-of-N) y ceremonias de clave.

## Amenazas y mitigaciones
- **Compromiso de CA**  
	- Uso obligatorio de HSM, firmas offline, controles M-of-N.  
- **Certificados falsos o ilegítimos**  
	- CT Logs, auditorías externas, monitoreo de emisión.  
- **Claves débiles**  
	- Tallas mínimas recomendadas según NIST.  
	- Migración a ECC/EdDSA.  
- **Falta de rotación / expiración**  
	- Inventario dinámico, monitorización de expiración.  
- **MITM mediante validación incorrecta**  
	- Validación strict de hostname y cadena.  

## Integración práctica con otros conceptos
- Relación con [autenticacion](/autenticacion/autenticacion/): certificados como credenciales fuertes.  
- Relación con control de acceso: atar identidades a roles, dispositivos o servicios.  
- Relación con [criptografia](/autenticacion/criptografia/): base para todo el ecosistema de cifrado moderno.

# PKI avanzada: arquitecturas, automatización, post-quantum y operación

- [criptografia](/autenticacion/criptografia/)
- [PKI infraestructura de clave pública](/autenticacion/pki-infraestructura-de-clave-p-blica/)
- [autenticacion](/autenticacion/autenticacion/)
- control de acceso
- zero trust

## Arquitecturas avanzadas de PKI
- **Modelo híbrido (Root on-prem + Sub-CA cloud)**
	- Root CA offline con ceremonias de clave y control M-of-N.
	- Sub-CAs operativas en cloud para escalabilidad y emisión automatizada.
	- Requiere controles adicionales: FIPS 140-3, auditorías SOC2/WebTrust.
- **PKI distribuida para entornos federados**
	- Bridge CA para unir PKIs de organizaciones distintas.
	- Políticas cruzadas (cross-certification) con equivalencias CP/CPS.
	- Aplicada en gobiernos, defensa, consorcios industriales.
- **PKI orientada a cargas de trabajo (Workload Identity)**
	- Certificados emitidos a procesos, contenedores y microservicios.
	- Diseño basado en mTLS interno para comunicaciones este-oeste.
	- Integración clave con zero trust y validación continua.
- **Arquitecturas para IoT**
	- Identidades por lote o por dispositivo.
	- Infra ligera basada en EST-coaps, BRSKI, SUIT.
	- Certificados de corta vida y renovación autónoma.

## Automatización y operación continua
- **Infraestructura como código (IaC)**
	- Gestión declarativa de CA, políticas y plantillas.
	- Integración con Terraform, Ansible, Puppet.
- **CA programáticas**
	- APIs para emisión, revocación y renovación sin intervención humana.
	- Implementaciones: Smallstep CA, HashiCorp Vault PKI, Lemur.
- **Automatización en Kubernetes**
	- cert-manager para emisión dinámica.
	- Integración con SPIFFE/SPIRE para identidad de workloads.
	- Rotación continua y short-lived certificates como norma.
- **Monitoreo y observabilidad**
	- Dashboards de expiración, estado de OCSP/CRL y salud de Sub-CAs.
	- Integración con SIEM, detección de anomalías en emisión/revocación.
	- CT Logs internos para prevenir certificados ilegítimos.

## Post-Quantum PKI (PQC)
- **Riesgo “Store Now, Decrypt Later”**
	- Adversarios pueden capturar tráfico cifrado hoy y descifrarlo tras disponer de computación cuántica.
	- Impacta tanto en TLS como en firma digital.
- **Certificados híbridos**
	- Claves clásicas + claves post-cuánticas en un mismo certificado X.509.
	- Permite transición gradual sin ruptura de compatibilidad.
- **Algoritmos PQC relevantes**
	- Firma: Dilithium, Falcon, SPHINCS+.
	- Intercambio de claves: Kyber.
- **Crypto-agility**
	- Capacidad de rotar algoritmos sin rediseñar la PKI.
	- Plantillas dinámicas, soportes múltiples y validación flexible.
- **Impacto operativo**
	- Certificados más grandes → ajustes en MTU, buffers y proxies.
	- Revisión de HSMs para soporte de algoritmos PQC.

## Operación segura y gobernanza avanzada
- **Ceremonias de clave**
	- Inicialización, backup, recuperación y destrucción con testigos.
	- Uso obligatorio de controles M-of-N.
	- Registro formal y evidencia criptográfica de cada paso.
- **Segregación estricta de roles**
	- CA Manager, Security Officer, Auditor, Custodian.
	- Previene abuso de privilegios y emisión indebida.
- **Root CA offline**
	- Activada solo durante ceremonias.
	- Auditoría física, entorno controlado, verificación por múltiples custodios.
- **Cumplimiento normativo**
	- Niveles de garantía (Baseline Requirements, CAB Forum).
	- Auditorías WebTrust y ETSI EN 319 411-1/2.
	- Logs de confianza (CT) obligatorios para ciertas autoridades.

## Short-Lived Certificates como mecanismo de seguridad
- Vida útil de minutos u horas.
- Reducen impacto de compromisos sin depender tanto de revocación.
- Requieren automatización completa (ACME interno, APIs).
- Excelente para microservicios, mTLS y pipelines de CI/CD.

## Identidad fuerte en dispositivos y plataformas
- **TPM/TEE/Enclaves**
	- Generación de claves en hardware aislado.
	- Certificados ligados al hardware (device attestation).
- **Mobile App Attestation**
	- Uso del Secure Enclave / Titan M / Android Keystore.
	- Claves no exportables + certificados de atestación.

## PKI en entornos de alta criticidad
- **Industrial / OT**
	- Certificados para PLCs, sensores y gateways.
	- Requisitos especiales de latencia, disponibilidad y revalidación.
- **Finanzas**
	- PKI para firma transaccional, HSM FIPS 140-3 nivel 3+.
- **Gobiernos**
	- PKIs con certificados cualificados e identidad legal.

## Integración con modelos alternativos de identidad
- **DID (Decentralized Identifiers)**
	- Identidad descentralizada complementaria a X.509.
	- Adecuado para escenarios sin autoridad central fuerte.
- **Verifiable Credentials**
	- Credenciales verificables basadas en estándares W3C.
	- Compatibles con flujos PKI tradicionales mediante puentes criptográficos.

# PKI avanzada: frameworks, herramientas y casos de uso

- [PKI infraestructura de clave pública](/autenticacion/pki-infraestructura-de-clave-p-blica/)
- zero trust
- [criptografia](/autenticacion/criptografia/)
- control de acceso
- [autenticacion](/autenticacion/autenticacion/)

## Frameworks y toolkits para PKI
- **OpenSSL**
	- Toolkit estándar para gestión de claves, CSRs y certificados.
	- Base en múltiples librerías y aplicaciones de PKI en servidores.
- **CFSSL (Cloudflare)**
	- CA ligera y programática.
	- Ideal para emisión rápida y APIs REST.
- **Smallstep Certificates**
	- CA moderna con soporte para certificados short-lived.
	- Integraciones nativas con ACME, SSH, Kubernetes.
- **HashiCorp Vault PKI**
	- Secret management + PKI integrada con políticas dinámicas.
	- Extensamente usada en DevOps, microservicios, CI/CD.
- **EJBCA (PrimeKey)**
	- CA empresarial completa.
	- Certificados cualificados, OCSP, CRLs y alto rendimiento.
- **Dogtag (Red Hat)**
	- PKI empresarial open source.
	- Módulos para firmas, OCSP y gestión de usuarios.
- **Microsoft AD CS**
	- PKI empresarial integrada con Active Directory.
	- Adecuada para entornos corporativos Windows.
- **cert-manager (Kubernetes)**
	- Emisión automática dentro de clusters.
	- Integra ACME, Vault, Venafi, Step, estandarizando flujos.
- **SPIFFE / SPIRE**
	- Framework para identidad de workloads.
	- Certificados dinámicos para microservicios y mTLS universal.
- **Venafi**
	- Gestión centralizada de certificados.
	- Visibilidad completa, rotación automática y compliance.

## Herramientas operativas y utilidades complementarias
- **ACME Servers**
	- Boulder, Pebble, Step-ACME.
	- Emisión automática sin intervención humana.
- **HSM y módulos criptográficos**
	- SoftHSM (testing), AWS CloudHSM, Azure Key Vault HSM, YubiHSM2.
	- Garantizan custodia segura de claves críticas.
- **OCSP Responders**
	- EJBCA OCSP, Cloudflare OCSP Stapling, OpenSSL ocsp.
- **CT Logs y Monitores**
	- Google CT Logs, Sigsum, Nimbus.
	- Prevención de certificados falsos o no autorizados.
- **Auditoría y observabilidad**
	- Grafana dashboards para expiración, latencia OCSP.
	- Integración con SIEMs (Splunk, Elastic, QRadar).
	- Health checks para Sub-CAs y servicios.

## Casos de uso prácticos
- **Microservicios y mTLS interno**
	- Certificados por servicio, contenedor o pod.
	- Rotación automática (cert-manager, Vault, Step).
- **Dispositivos IoT**
	- Identidad segura de sensores, gateways y PLCs.
	- Uso de BRSKI/EST para onboarding automático.
- **DevOps / CI-CD**
	- Firmado de artefactos, contenedores y pipelines.
	- Certificados short-lived para runners de CI.
- **Infraestructura corporativa**
	- Autenticación de usuarios, equipos y servidores.
	- S/MIME, VPNs, IPSec, TLS interno.
- **Seguridad en aplicaciones móviles**
	- Device attestation via Secure Enclave/TPM.
	- Certificados ligados a hardware no exportable.
- **Entornos regulados**
	- Firma digital cualificada (EIDAS, ETSI).
	- Sellos electrónicos para integridad documental.
- **Zero Trust**
	- Identidad fuerte para usuarios y cargas de trabajo.
	- Validación continua + certificados efímeros.
- **Edge Computing**
	- Certificados automáticos para nodos distribuidos.
	- Renovación autónoma en redes intermitentes.
- **Software Supply Chain Security**
	- Firmado de binarios y contenedores (Fulcio, Cosign).
	- Certificados de corta vida para garantizar integridad.
- **PKI para APIs**
	- Autenticación mTLS entre servicios externos.
	- Control granular de acceso basado en certificados.

## Mapas de integración entre frameworks y casos de uso
- **Kubernetes + cert-manager + SPIRE**
	- Workload Identity + rotación automática.
- **Vault PKI + CI/CD**
	- Emisión on-demand para pipelines y runners.
- **Venafi + Infra global**
	- Gestión unificada para HA, multicloud, miles de certificados.
- **Smallstep + Edge/IoT**
	- Certificados efímeros y enrolamiento seguro en dispositivos distribuidos.
- **AD CS + Enterprise**
	- PKI interna para equipos, usuarios, GPOs y servicios Windows.

