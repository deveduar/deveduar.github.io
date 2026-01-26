---
date: 2024-02-18 17:50
title: Auditorias
Parent: "[[Area-Sistemas]]"
keywords:
source:
status: 🌟
public_note: "true"
category: Hacking
tags:
  - Hacking
  - ciberseguridad
---
# Auditorías
``$= dv.current().file.tags.join(" ")``

- [ciberseguridad](/uncategorized/ciberseguridad/)
- 
## Alcance de Auditorías de Seguridad
- Evaluación técnica y organizativa de controles de seguridad
- Identificación de fallos comunes en empresas y entornos corporativos
- Simulación de ataques reales para medir impacto y detección
- Revisión de configuraciones, políticas y procedimientos

## Lista de Ataques y Tecnologías Evaluadas
- Advanced endpoint protection para correo electrónico
- Seguridad y gestión de tokens [OAuth](/autenticacion/oauth/)
- [OSINT](/ciberseguridad/osint/) aplicado a reconocimiento pasivo y activo
- Gestores de contraseñas corporativos
- Hardening de sistemas Linux
- Ataque [SMBRELAY](/ciberseguridad/smbrelay/)
- Autenticación NTLM y gestión de hashes
- Protocolos de resolución de nombres LLMNR y NBNS
- Active directory para pentesting

## Concienciación y Fallos Comunes
- [Este es el FALLO de SEGURIDAD MÁS COMÚN en EMPRESAS](https://www.youtube.com/watch?v=Ekw4X_QrHJ0)
- Uso de contraseñas débiles o reutilizadas
- Falta de segmentación de red
- Servicios legacy habilitados por compatibilidad
- Configuraciones inseguras por defecto

## Ataque SMB Relay
- Ataque basado en interceptar autenticaciones NTLM
- El atacante se coloca en medio de la red
- Se reutiliza el desafío-respuesta NTLM contra otro servicio
- Especialmente efectivo si la firma SMB está deshabilitada
- Permite acceso remoto, ejecución de comandos o movimiento lateral

## NT LAN Manager (NTLM)
- Protocolo de autenticación basado en challenge-response
- No transmite la contraseña en claro
- Utiliza hashes NTLM
- Vulnerable a relay si no hay protecciones adicionales
- Uso frecuente en entornos Windows legacy

## Escucha y Envenenamiento de Red
- El atacante queda a la espera de conexiones
- Envenenamiento de resolución de nombres
- Redirección de tráfico legítimo al atacante
- Técnicas de Man-in-the-Middle
- Paso del desafío de autenticación a un segundo objetivo

## Herramientas de Ataque en Red
- [Responder.py](http://responder.py)
	- Envenenamiento LLMNR, NBNS y MDNS
	- Captura de hashes NTLMv1 y NTLMv2
	- Simulación de servicios SMB, HTTP, LDAP, MSSQL
- Scripts en Python para:
	- Procesar hashes desde rutas específicas
	- Automatizar NTLM Relay
	- Ataques multi-relay hacia múltiples objetivos
	- Abusar de usuarios privilegiados

## Crackeo Offline de Hashes
- Ataque fuera de línea sin alertar sistemas
- Uso de diccionarios como rockyou
- Fuerza bruta y reglas de mutación
- Dependiente de la complejidad de la contraseña
- Riesgo elevado si existen contraseñas débiles

## NTLM Relay Avanzado
- Reenvío del hash capturado a servicios vulnerables
- Posibilidad de:
	- Crear usuarios
	- Ejecutar comandos remotos
	- Acceder a recursos compartidos
- Impacto crítico si se ataca un usuario con privilegios elevados

## Compromiso del Controlador de Dominio
- Objetivo final en muchos pentest internos
- Recolección de información desde memoria caché
- Acceso a credenciales almacenadas
- Control total del dominio si se logra el compromiso

## Active Directory – Reconocimiento
- Enumeración mediante sesiones nulas
- Uso de RPC client
- Enumeración de servicios Microsoft remotos
- Acceso a servidores SMB remotos
- Identificación de usuarios de Active Directory

## AS-REP Roasting
- Ataque contra cuentas sin preautenticación Kerberos
- Requiere IP del Domain Controller
- Opción “Do not require Kerberos preauthentication” habilitada
- Obtención de hashes para crackeo offline
- No requiere credenciales previas

## Enumeración RPC y Credenciales
- Enumeración RPC mediante herramientas públicas
- Referencias a proyectos en GitHub para RPCenum
- Identificación de contraseñas débiles en el dominio
- Enumeración de políticas y usuarios

## Dumping de Credenciales
- Uso de Mimikatz
- Extracción de contraseñas en texto claro
- Obtención de hashes NTLM y tickets Kerberos
- Riesgo alto si el atacante tiene acceso local o admin

## Segmentación de Red
- Separación de redes por función y nivel de riesgo
- Limitación del movimiento lateral
- Reducción del impacto de compromisos internos
- Control de tráfico entre segmentos

## Medidas Mitigadoras
- Habilitar y forzar la firma SMB
- Deshabilitar LLMNR y NBNS
- Limitar administradores locales y de dominio
- Uso de contraseñas robustas y únicas
- Implementar autenticación moderna
- Monitoreo de tráfico y detección de anomalías
- Hardening de sistemas y servicios
- Aplicación del principio de mínimo privilegio

# Auditorías 2

## Superficie de Ataque No Cubierta en Profundidad
- Servicios heredados expuestos internamente
- Configuraciones por defecto no auditadas
- Dependencias entre servicios de autenticación
- Falta de visibilidad en tráfico este-oeste

## [LDAP](/autenticacion/ldap/) Relay
- Variante del NTLM Relay enfocada en LDAP
- Permite modificar objetos de Active directory
- Posible abuso para:
	- Añadir equipos al dominio
	- Modificar ACLs
	- Escalada de privilegios persistente
- Crítico cuando LDAP signing no está habilitado

## Firma y Seguridad en LDAP
- LDAP signing y channel binding
- Prevención de ataques de relay
- Requiere configuración explícita en Domain Controller
- Frecuentemente omitido por compatibilidad legacy

## [Kerberos](/autenticacion/kerberos/) – Ataques Avanzados
- Pass-the-Ticket
- Overpass-the-Hash
- Golden Ticket
- Silver Ticket
- Abuso de tickets Kerberos para persistencia
- Impacto mayor que NTLM en dominios modernos

## DNS como Vector de Ataque
- Envenenamiento DNS interno
- Redirección de tráfico legítimo
- Captura indirecta de credenciales
- Abuso combinado con NTLM y Kerberos
- Falta de validación DNS segura

## IPv6 en Redes Corporativas
- IPv6 habilitado por defecto en Windows
- Falta de controles y monitoreo
- Ataques de spoofing y MITM
- Uso de herramientas para forzar resolución IPv6
- Puente hacia ataques NTLM Relay

## Movimiento Lateral
- Uso de credenciales válidas
- Abuso de servicios remotos
- WMI, WinRM, SMB, RDP
- Persistencia silenciosa dentro del dominio
- Escalada progresiva de privilegios

## Persistencia en Active Directory
- Creación de usuarios ocultos
- Modificación de GPOs
- Abuso de permisos delegados
- Backdoors en objetos del dominio
- Persistencia incluso tras cambio de contraseñas

## Detección y Monitoreo
- Eventos de autenticación anómalos
- Repetición de intentos NTLM
- Uso inesperado de protocolos legacy
- Correlación de eventos en SIEM
- Falta de alertas específicas para relay

## Evasión de Controles de Seguridad
- Bypass de EDR mediante herramientas legítimas
- Living-off-the-Land
- Uso de binarios firmados por Microsoft
- Reducción de huella del atacante
- Dificultad de detección sin telemetría avanzada

## Hardening Específico de Active Directory
- Eliminación total de NTLM cuando sea posible
- Forzar Kerberos con configuraciones seguras
- Revisión periódica de cuentas sin preautenticación
- Auditoría de permisos excesivos
- Protección de cuentas privilegiadas

## Auditoría de Credenciales
- Identificación de contraseñas reutilizadas
- Longitud y complejidad insuficiente
- Uso de hashes históricos
- Riesgos en cuentas de servicio
- Falta de rotación periódica

## Seguridad de Cuentas de Servicio
- Uso de contraseñas estáticas
- Permisos excesivos
- Falta de monitoreo
- Migración a cuentas gestionadas
- Reducción del impacto en caso de compromiso

## Respuesta ante Incidentes
- Aislamiento de equipos comprometidos
- Rotación de credenciales críticas
- Revisión de logs históricos
- Eliminación de persistencia
- Lecciones aprendidas para hardening futuro

## Madurez del Programa de Seguridad
- Evaluación continua
- Red Team / Blue Team
- Simulación de ataques internos
- Mejora progresiva de controles
- Reducción de superficie de ataque real
