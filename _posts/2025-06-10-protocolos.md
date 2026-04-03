---
date: 2025-06-10 15:21
title: Protocolos
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
aliases:
public_note: true
category: Redes
tags:
  - protocolo
  - redes
---
# Protocolos

## Clasificación General de Protocolos
- Transferencia de Datos:
	- AS1
		- Correo electrónico seguro usando SMTP con cifrado y firma digital (S/MIME).
	- AS2, AS3, AS4
		- Intercambio [EDI Intercambio Electrónico de datos](/gestion%20de%20negocio/edi-intercambio-electr-nico-de-datos/) sobre HTTP/HTTPS.
		- Soporte para no repudio, integridad y auditoría.
	- OFTP
		- Transferencia financiera y logística (sector automoción).
		- Compatibilidad con OFTP2 sobre TLS.

- Transporte:
	- TCP
		- Conexión orientada, garantías de entrega, control de flujo y congestión.
	- UDP
		- Orientado a datagramas, baja latencia, sin garantías de entrega.
		- Usado en VoIP, streaming y DNS.

- Aplicación:
	- Web:
		- HTTP
		- HTTPS
			- Uso de TLS para cifrado, autenticación del servidor y canal seguro.
		- SOAP
			- Protocolo basado en XML para servicios web estructurados.
		- WebDAV
			- Extensión de HTTP para edición colaborativa de recursos.
	- Correo:
		- SMTP, POP3, IMAP, X400
		- POP3: descarga simple.
		- IMAP: sincronización avanzada y carpetas.
		- X.400: estándar OSI para mensajería empresarial.
	- Transferencia:
		- FTP, OFTP, AS2, AS3, AS4
		- FTP/SFTP/FTPS diferencias rápidas:
			- FTP: sin cifrado.
			- FTPS: FTP + TLS.
			- SFTP: parte de SSH (no relacionado con FTP real).
	- Otros:
		- TELNET
			- Acceso remoto sin cifrado (obsoleto, reemplazado por SSH).
		- DNS
			- Sistema de resolución de nombres.
			- Extensiones:
				- DNSSEC
					- Firmado criptográfico de zonas DNS.
					- Prevención de ataques como cache poisoning.
					- Guía: [Guía de implantación y buenas prácticas de DNSSEC \| INCIBE-CERT \| INCIBE](https://www.incibe.es/incibe-cert/guias-y-estudios/guias/guia-de-implantacion-y-buenas-practicas-de-dnssec)

## Protocolos Modernos y Extensiones Importantes
- Seguridad y cifrado:
	- TLS
		- Base de la seguridad en transporte para HTTPS, FTPS, SMTP-S, IMAP-S, POP3-S.
		- Versiones modernas: 1.2 y 1.3.
	- SSH
		- Acceso remoto seguro, tunelización y SFTP.
- Optimización y rendimiento:
	- HTTP/2
		- Multiplexación, compresión HPACK, persistencia.
	- HTTP/3 (QUIC)
		- Basado en UDP para reducir latencia.
		- Mitiga head-of-line blocking.
- Protocolos para IoT:
	- MQTT
		- Publicación/suscripción ligera.
	- CoAP
		- Similar a HTTP pero sobre UDP.
	- AMQP
		- Mensajería fiable en sistemas distribuidos.

## Protocolos por Capa (Modelo OSI)
- Capa 7 — Aplicación:
	- HTTP, HTTPS, FTP, SMTP, IMAP, DNS, SSH, TELNET, SOAP, WebDAV.
- Capa 6 — Presentación:
	- TLS/SSL (en la práctica funciona entre aplicación y transporte).
- Capa 5 — Sesión:
	- RPC, NetBIOS.
- Capa 4 — Transporte:
	- TCP, UDP.
- Capa 3 — Red:
	- IP, ICMP, IGMP.
- Capa 2 — Enlace:
	- Ethernet, PPP, Frame Relay.
- Capa 1 — Física:
	- Cables, fibra, radio.

## Protocolos Críticos para Seguridad
- TLS
- SSH
- DNSSEC
- DANE
	- Autenticación de claves TLS usando DNSSEC.
- SPF, DKIM, DMARC
	- Protección de correo contra spoofing.
- IPsec
	- Cifrado a nivel de red.

## Protocolos para Integración Empresarial / Automatización
- [EDI Intercambio Electrónico de datos](/gestion%20de%20negocio/edi-intercambio-electr-nico-de-datos/)
	- Intercambio estructurado entre organizaciones.
- AS2/AS4
	- Canales seguros y auditables para EDI.
- REST/JSON
	- Integraciones modernas orientadas a APIs.
- gRPC
	- RPC de alto rendimiento sobre HTTP/2.

## Casos de Uso y Comparativas Clave
- Acceso remoto:
	- SSH vs TELNET
		- SSH cifrado, TELNET no.
- Transferencia segura:
	- SFTP vs FTPS vs AS2
		- SFTP: simplicidad, SSH.
		- FTPS: compatibilidad con FTP tradicional.
		- AS2: cumplimiento y auditoría empresarial.
- Web:
	- HTTP/1.1 vs HTTP/2 vs HTTP/3
		- Latencia y multiplexación como principales diferencias.

# Protocolos (Extensión Avanzada)

## Protocolos de Enrutamiento
- Interior Gateway Protocols (IGP):
	- OSPF
		- Enrutamiento basado en estado de enlace.
		- Convergencia rápida, jerarquías de áreas.
	- IS-IS
		- Diseño modular, usado en entornos ISP.
	- RIPng
		- Versión para IPv6, métrica por saltos.
- Exterior Gateway Protocols (EGP):
	- BGP
		- Base del enrutamiento de Internet.
		- Políticas, comunidades, path attributes.
- Funciones avanzadas:
	- Route aggregation (supernetting).
	- Multipath (ECMP).
	- Traffic engineering (TE).

## Protocolos para Monitorización y Gestión
- SNMP
	- Gestión de dispositivos en red usando MIBs.
	- Versiones: v1/v2c (inseguras), v3 (seguridad real).
- NetFlow / IPFIX
	- Exportación de flujos para análisis y seguridad.
- Syslog
	- Registro centralizado para auditorías y correlación.
- Telemetría en tiempo real:
	- gNMI / gRPC-based streaming.
	- Optimizado para automatización y SDN.

## Protocolos de Sincronización
- NTP
	- Sincronización fiable a milisegundos.
	- Importante para registros, certificados y SIEM.
- PTP (IEEE 1588)
	- Sincronización de microsegundos para entornos industriales, 5G, trading.
- Chrony
	- Implementación moderna y más precisa que NTP clásico.

## Protocolos para Descubrimiento y Administración de Servicios
- mDNS
	- Resolución de nombres local sin servidor DNS.
- DNS-SD
	- Descubrimiento de servicios via DNS.
- LLDP
	- Descubrimiento de topología entre switches y hosts.
- SLP
	- Registro y descubrimiento de servicios en redes corporativas.

## Protocolos para Virtualización y Data Centers
- VXLAN
	- Extiende redes L2 sobre L3.
	- Utiliza encapsulación UDP y VTEP.
- EVPN
	- Usa BGP para señalizar VXLAN.
	- Reducción de broadcast, ARP suppression.
- NVGRE y Geneve
	- Alternativas de encapsulación para SDN.

## Protocolos de Balanceo y Alta Disponibilidad
- VRRP
	- Redundancia de gateway virtual.
- HSRP
	- Alternativa propietaria de Cisco.
- LACP (parte de 802.1AX)
	- Agrupación de enlaces con negociación dinámica.

## Protocolos en Telefonía IP y Comunicaciones Unificadas
- SIP
	- Señalización para VoIP, videollamadas, mensajería.
- RTP/RTCP
	- Transporte multimedia en tiempo real.
- MGCP / H.248
	- Control de gateways de voz.

## Protocolos para Networking Industrial y OT
- Modbus/TCP
	- Amplio uso en SCADA y PLC.
- OPC-UA
	- Interoperabilidad segura en OT.
- PROFINET
	- Ethernet industrial con baja latencia.

## Protocolos Críticos para Cloud y Microservicios
- gRPC
	- RPC de alto rendimiento basado en HTTP/2.
- OpenAPI / Swagger
	- Descripción de APIs REST.
- GraphQL
	- Query language orientado a clientes.
- WireGuard
	- VPN moderna con diseño minimalista y alto rendimiento.
- SPIFFE / SPIRE
	- Identidades para servicios en mallas Zero Trust.

## Protocolos de Mensajería Distribuida
- Kafka Protocol
	- Protocolo binario optimizado para throughput.
- AMQP (avanzado)
	- Transacciones, colas, routing flexible.
- NATS
	- Latencia ultrabaja, orientado a microservicios.

## Protocolos para IoT Avanzados
- LwM2M
	- Gestión remota de dispositivos IoT.
- Thread
	- Malla IPv6 para IoT doméstico.
- Zigbee / Z-Wave
	- Capas específicas de IoT residencial.

## Protocolos para Identidad y Autenticación
- [OAuth](/autenticacion/oauth/)
- OpenID Connect
	- Token ID estructurado en JWT.
- SCEP / EST
	- Aprovisionamiento automático de certificados.
- FIDO2/WebAuthn
	- Autenticación sin contraseñas.

## Protocolos Emergentes / Tendencias
- QUIC (más allá de HTTP/3)
	- Aplicable a VPN, DNS y servicios en tiempo real.
- MASQUE
	- Tunelización avanzada sobre QUIC.
- Oblivious HTTP (OHTTP)
	- Privacidad reforzada en peticiones web.
- SCITT (IETF)
	- Transparencia y trazabilidad en cadenas de suministro digitales.

# Protocolos (Extensión Final — Áreas No Cubiertas Previamente)

## Protocolos de Capa Física y Enlace Avanzados
- 802.1X
	- Control de acceso a nivel de puerto.
	- Integración con RADIUS para autenticación.
- 802.1Q (VLAN)
	- Segmentación lógica del tráfico.
	- Base para redes multi-tenant.
- 802.1p
	- Prioridad de tráfico para QoS.
- 802.3ad / LAG
	- Agregación física sin mecanismos dinámicos (pre-LACP).
- DOCSIS
	- Estándar para comunicaciones en redes híbridas fibra-coaxial.

## Protocolos de Seguridad en Comunicaciones Inalámbricas
- WPA3
	- Sustituye a WPA2 con SAE (Simultaneous Authentication of Equals).
- EAP Variants
	- EAP-TLS: autenticación robusta con certificados.
	- EAP-TTLS, PEAP: túneles para credenciales internas.
- 802.11r
	- Roaming rápido entre puntos de acceso.
- 802.11w
	- Protección de management frames.

## Protocolos Especializados para Contenedores y Service Mesh
- Envoy xDS
	- Protocolo de control para proxies modernos.
- Istio mTLS
	- Cifrado transparente entre microservicios.
- CNI Plugins
	- Especificación para redes de contenedores (Calico, Weave, Cilium).
- SPIFFE/SVID (avanzado)
	- Distribución automática de identidades verificables para workloads.

## Protocolos de Edge Computing
- ETSI MEC API
	- Interfaces estandarizadas para edge cloud.
- OpenNESS y Akraino
	- Protocolos y arquitecturas para offloading y proximidad.

## Protocolos de 5G y Redes Móviles
- NGAP
	- Comunicación entre gNB y núcleo 5G.
- PFCP
	- Gestión del plano de usuario (UPF).
- GTP-U/GTP-C
	- Transporte de datos y control en 4G/5G.
- Diameter (avanzado)
	- Autenticación AAA en redes móviles.

## Protocolos de Almacenamiento y Data Fabric
- iSCSI
	- Transporte de bloques SCSI sobre IP.
- FCoE
	- Fibre Channel encapsulado en Ethernet.
- NVMe-oF
	- Acceso a almacenamiento NVMe mediante RDMA/TCP.
- SMB Direct (SMB3 + RDMA)
	- Transferencia con baja latencia para entornos Windows.

## Protocolos de Difusión y Multicast Avanzado
- PIM-SM / PIM-SSM
	- Distribución multicast para grandes topologías.
- IGMPv3 / MLDv2
	- Administración moderna de grupos multicast (IPv4/IPv6).
- AMT
	- Tunelización de tráfico multicast sobre redes no multicast.

## Protocolos para Resiliencia y Recuperación
- RSTP/MSTP
	- Evoluciones de STP con convergencia rápida.
- BFD
	- Detección de fallos de enlace ultra-rápida.
- LFA/Remote-LFA
	- Protección local en enrutamiento IGP.

## Protocolos para Blockchain y Redes Descentralizadas
- Libp2p
	- Multiplexación, NAT traversal, discovery.
- GossipSub
	- Difusión eficiente y resistente a ataques.
- Raft/IBFT
	- Protocolos de consenso tolerantes a fallos.

## Protocolos de Computación Confidencial
- Remote Attestation (TPM/TEE)
	- Validación criptográfica del entorno de ejecución.
- DICE/RIoT
	- Identidades derivadas de hardware.
- Encrypted Computing Channels
	- Canal criptográfico entre enclaves sin exponer claves al SO.

## Protocolos para Alto Rendimiento (HPC)
- RDMA
	- Acceso remoto directo a memoria con latencia mínima.
- InfiniBand Subnet Manager Protocol
	- Gestión y ruteo en redes IB.
- MPI (Message Passing Interface a nivel de protocolo)
	- Comunicación distribuida en clústeres HPC.

## Protocolos Científicos y Especializados
- FITS
	- Estándar para intercambio de datos astronómicos.
- OPeNDAP
	- Acceso remoto a datasets científicos multidimensionales.
- HL7 FHIR (sanitario)
	- Interoperabilidad clínica mediante REST estructurado.

## Protocolos de Privacidad y Anonimato
- Tor (Onion Routing)
	- Encapsulación en capas para anonimato.
- Oblivious DNS (ODoH)
	- Resolución DNS sin exponer al cliente.
- Mixnets (Nym)
	- Mezcla probabilística para ocultación de patrones de tráfico.

## Protocolos de Integridad y Transparencia
- CT (Certificate Transparency)
	- Registro verificable de certificados.
- RPKI (avanzado)
	- Validación criptográfica de anuncios BGP.

## Protocolos de Distribución de Software y Paquetes
- OSTree
	- Distribución inmutable orientada a imágenes del sistema.
- Flatpak Portal Protocol
	- Intermediación segura entre apps y sistema.
- TUF (The Update Framework)
	- Distribución resiliente ante compromisos de repositorios.

## Protocolos de Automatización de Red (NetDevOps)
- NETCONF
	- Edición transaccional de configuración.
- RESTCONF
	- Variante RESTful de NETCONF.
- OpenConfig y YANG Models
	- Modelado estándar para equipos multivendor.


# Protocolos (Programadores y Streaming)

## Protocolos para Programadores / Desarrollo de Software
- gRPC (avanzado)
	- Generación automática de clientes/servidores desde `.proto`.
	- Streaming bidireccional y compresión integrada.
- Protobuf / FlatBuffers / Cap’n Proto
	- Serialización binaria altamente eficiente.
	- FlatBuffers y Cap’n Proto permiten acceso "zero-copy".
- Thrift
	- RPC multi-lenguaje con múltiples transportes (HTTP, TCP, named pipes).
	- Orientado a microservicios heterogéneos.
- JSON-RPC / XML-RPC
	- RPC ligero usando JSON o XML.
	- Útiles en entornos embebidos o sistemas simples.
- WebSockets
	- Canal full-duplex persistente.
	- Fundamental para aplicaciones en tiempo real (chats, dashboards, juegos).
- Server-Sent Events (SSE)
	- Canal unidireccional desde el servidor al cliente.
	- Ideal para notificaciones y actualizaciones ligeras.
- GraphQL (nivel de protocolo de consulta)
	- Declarativo, orientado al cliente.
	- Suscripciones para eventos en tiempo real.
- gRPC-Web
	- Adaptación de gRPC para navegadores.
	- Usa HTTP/2 y un proxy Envoy para compatibilidad.
- Webhook Protocols
	- Mecanismo push basado en HTTP POST.
	- Eventos desacoplados en integraciones SaaS.
- ActivityPub
	- Interoperabilidad federada entre servicios sociales.
	- Basado en JSON-LD y HTTP.

## Protocolos para Streaming de Video/Audio
- HLS (HTTP Live Streaming)
	- Segmentación en `.ts` o `.fmp4`.
	- Adaptative Bitrate (ABR) basado en playlists M3U8.
- MPEG-DASH
	- Alternativa a HLS, totalmente abierta.
	- Manifiestos MPD, múltiples perfiles y codecs.
- CMAF
	- Fragmentos comunes para HLS y DASH.
	- Reduce latencia y duplicación de recursos.
- WebRTC
	- Streaming P2P de baja latencia.
	- Incluye:
		- ICE (descubrimiento de rutas).
		- STUN (descubrimiento de IP pública).
		- TURN (relay cuando no hay conexión directa).
	- Ideal para videollamadas, gaming, live media con latencia sub-segundo.
- RTMP
	- Protocolo clásico de ingestión hacia plataformas (YouTube, Twitch).
	- Habitualmente se usa RTMP → HLS/DASH internamente.
- SRT (Secure Reliable Transport)
	- Optimizado para redes impredecibles.
	- Bajísima latencia, corrección de errores, cifrado AES.
- RIST (Reliable Internet Stream Transport)
	- Alternativa interoperable para broadcasting profesional.
- HDS / Smooth Streaming (legado)
	- Formatos antiguos aún presentes en sistemas legacy.
- ICE/SDP (detalles de WebRTC)
	- SDP describe codecs, puertos y capacidades.
	- ICE coordina la negociación de rutas de media.

## Protocolos para Streaming de Datos en Tiempo Real
- Kafka Protocol
	- Protocolo binario de muy alto throughput.
	- Claves: particiones, offsets, retención.
- NATS
	- Latencia mínima, orientado a microservicios.
	- Soporta JetStream para persistencia.
- MQTT (streaming IoT)
	- Calidad de servicio (QoS 0/1/2).
	- Mantiene sesiones persistentes y estados.
- AMQP (avanzado)
	- Cambios (exchanges) y colas flexibles.
	- Ideal para pipelines distribuidos.
- Redis Streams Protocol
	- Streams con offsets por consumidor.
	- Útil para eventos ligeros en escenarios web.

## Protocolos para Juegos Online / Tiempo Real Extremo
- ENet
	- Confiabilidad opcional sobre UDP con canales.
- RakNet / LiteNetLib Protocols
	- Orientados a sincronización de estado y eventos de juegos.
- QUIC (streaming interactivo)
	- Evita el head-of-line blocking.
	- Adecuado para cloud gaming y streaming interactivo.

## Protocolos para Transmisión de Medios Profesionales
- SMPTE ST 2110
	- Transporte en tiempo real de video, audio y metadatos sin comprimir.
- AES67
	- Audio sobre IP de alta calidad.
- NDI (Network Device Interface)
	- Video profesional sobre red IP para producción en vivo.
