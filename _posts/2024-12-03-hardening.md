---
date: 2024-12-03 03:34
title: hardening
keywords:
source:
status: 🚀
Parent: "[[Area-Sistemas]]"
public_note: true
category: ciberseguridad
tags:
  - Hacking
  - hardening
---
# Hardening  

- [ciberseguridad](/ciberseguridad/ciberseguridad/)
## Documentación y Recursos
- [Bastionado de sistemas y servidores. ¿Qué es y para qué sirve? | Grupo Atico34](https://protecciondatos-lopd.com/empresas/bastionado-de-sistemas/)
- [Bastionado de sistemas: el caso de Linux | INCIBE-CERT | INCIBE](https://www.incibe.es/incibe-cert/blog/bastionado-sistemas-el-caso-linux)
- [Bastionado de sistemas y activos OT: ¿Qué es y cómo aplicarlo?](https://www.mytra.es/blog-post/bastionado-ot-que-es-y-como-aplicarlo)
- [Bastionado de redes y sistemas: qué es y para qué sirve | S2 Grupo](https://s2grupo.es/bastionado-de-redes-y-sistemas-que-es-y-para-que-sirve/)
- [Endurecimiento (informática) - Wikipedia](https://es.wikipedia.org/wiki/Endurecimiento_(inform%C3%A1tica))
- [Hardening de Servidores: Qué Es, Pasos y Ventajas](https://www.deltaprotect.com/blog/hardening-de-servidores-pasos-y-ventajas)
- ¿Qué es el Hardening en Ciberseguridad-
- ¿Qué son los puntos de referencia del CIS - Explicación de los puntos de referencia del CIS - AWS-

## Conceptos Fundamentales del Hardening
- **Reducir superficie de ataque**: minimizar vectores de explotación eliminando o limitando componentes innecesarios.
- **Control estricto de configuración**: configuración segura, coherente y auditada del sistema, siguiendo marcos como CIS Benchmarks, NIST o ISO/IEC 27002.
- **Principio de mínimo privilegio (PoLP)**: usuarios, procesos y servicios solo tienen los permisos estrictamente necesarios.
- **Defensa en profundidad**: múltiples capas de protección: red, sistema, aplicación, identidad y datos.
- **Estado conocido y verificable**: uso de inventarios, control de cambios, e integridad (ej. AIDE, Tripwire).
- **Revisión continua**: hardening no es un evento único; requiere supervisión, escaneo y mantenimiento constante.
- **Hardening específico por entorno**:
	- Sistemas operativos (Windows/Linux/UNIX).
	- Equipamiento OT/ICS.
	- Contenedores y orquestadores (Docker/K8s).
	- Cloud y SaaS.
	- Hardware, BIOS/UEFI y firmware.

## Tareas de Hardening Esenciales
- **Puertos**
	- Cierre de puertos innecesarios.
	- Auditoría periódica con `nmap`, `ss`, `netstat`.
- **Protocolos**
	- Deshabilitar protocolos inseguros: Telnet, FTP, SMBv1, SSLv2/v3, TLS<1.2.
	- Forzar cifrado fuerte y suites criptográficas robustas.
- **Servicios**
	- Inventario y desactivación de servicios no utilizados.
	- Aislamiento y sandboxing cuando sea posible.
- **Backups**
	- Copias cifradas, versionadas y verificadas.
	- Pruebas de restauración periódicas.
- **Firewall**
	- Aplicar política "deny by default".
	- Reglas explícitas, documentadas y revisadas.
- **Actualizaciones**
	- Gestión de parches (OS, aplicaciones, firmware).
	- Uso de WSUS, Spacewalk, Landscape, etc. según entorno.
- **Autenticación**
	- MFA/2FA, contraseñas robustas, bloqueo de cuentas.
- **Registros y auditoría**
	- Habilitar logs detallados.
	- Envío centralizado a SIEM.
- **Integridad**
	- Monitorización con AIDE/Tripwire.
- **Seguridad física**
	- Control de acceso a racks, salas, dispositivos.

## Hardening por Capas

### Hardening de Sistema Operativo
- Eliminación de paquetes innecesarios.
- Configuración segura de kernel (sysctl).
- Control de acceso basado en roles (RBAC).
- SELinux / AppArmor.
- Listas de control de acceso (ACLs) afinadas.
- Cifrado de discos y particiones sensibles.

### Hardening de Red
- Segmentación y VLANs.
- Firewalls perimetrales y host-based.
- IDS/IPS.
- Filtros ARP/ICMP.
- DNS seguro (DNSSEC, DoT/DoH).

### Hardening de Aplicaciones
- Configuración segura por cada software.
- Deshabilitar módulos no utilizados.
- Políticas de cabeceras HTTP (CSP, HSTS, X-Frame-Options, etc.).
- Aislamiento mediante contenedores o VM.

### Hardening Cloud
- Políticas IAM estrictas.
- Límites de red y seguridad (SG, NACL).
- Control de claves y KMS.
- CIS Benchmarks para AWS, GCP, Azure.
- Escaneo continuo de configuración (ConfigHub, SecurityHub, Defender, etc.).

### Hardening OT / ICS
- Segmentación estricta entre IT/OT.
- Protocolos industriales seguros.
- Inventario detallado de activos.
- Parches condicionados (mantener disponibilidad).
- Sistemas de detección específicos OT.

## Marcos, Normativas y Estándares Relacionados
- **CIS Benchmarks**: guías detalladas por sistema.
- **NIST SP 800-53 / 800-171**: controles de seguridad.
- **ISO/IEC 27001 - 27002**: buenas prácticas de seguridad.
- **MITRE ATT&CK**: tácticas y técnicas para identificar necesidades de hardening.
- **ENS (España)**: medidas reforzadas para sistemas críticos.
- **PCI-DSS**: requisitos duros para entornos que manejan tarjetas.
- **OWASP** (ASVS, MASVS, Secure Coding).

## Mapas de Equivalencias de Controles (Crosswalk)
- CIS Benchmarks ↔ NIST 800-53.
- CIS Benchmarks ↔ ISO 27002.
- NIST 800-53 ↔ ENS.
- NIST ↔ PCI-DSS.
- OWASP ASVS ↔ NIST / ISO para aplicaciones.

## Ejemplos de Configuración / Comandos

### Auditoría de Puertos
{% raw %}
```bash
nmap -sV -Pn <IP>
ss -tulpen
```
{% endraw %}`

### Asegurar Kernel (Linux)

{% raw %}
```bash
cat /etc/sysctl.conf
net.ipv4.conf.all.rp_filter = 1
kernel.kptr_restrict = 2
kernel.dmesg_restrict = 1
```
{% endraw %}

### Verificación de Integridad

{% raw %}
```bash
aide --init
aide --check
```
{% endraw %}



# Hardening — Expansión de Conceptos Pendientes (SIN REPETIR)

## Áreas Avanzadas de Hardening No Cubiertas Previamente

- **Hardening del Ciclo de Vida del Software (SDLC)**
	- Integración de controles de seguridad en cada fase del desarrollo.
	- Revisión de código estática (SAST) y dinámica (DAST).
	- Dependencias seguras, SBOM y control de licencias.
	- Firmado de artefactos en CI/CD.

- **Hardening de Identidad y Acceso (IAM)**
	- Gobernanza de identidades: provisión y deprovisión automática.
	- Gestión de sesiones y tokens segura (rotación, expiración estricta).
	- Bastionado de cuentas de servicio y cuentas privilegiadas (PAM/PIM).

- **Hardening de Bases de Datos**
	- Cifrado en reposo y en tránsito.
	- Roles mínimos por tipo de aplicación.
	- Controles de auditoría, query logging, detección de anomalías.
	- Configuraciones seguras para motores específicos (PostgreSQL, MySQL, Oracle, MSSQL).

- **Hardening de Contenedores**
	- Imágenes firmadas, escaneadas y basadas en distroless o minimalistas.
	- Capabilities reducidas y sin privilegios.
	- Namespaces, seccomp y AppArmor/SELinux en runtime.
	- K8s: Pod Security Standards, Admission Controllers, NetworkPolicies.

- **Hardening de APIs**
	- Autenticación fuerte: OAuth2.1, mTLS, JWT rotativos.
	- Rate limiting y control de abuso.
	- Validación estricta de entrada y salida.
	- Aislamiento de API Gateways.

- **Hardening de Infraestructura como Código (IaC)**
	- Validación y escaneo de plantillas (Terraform, CloudFormation).
	- Políticas OPA/Rego para aplicar reglas de seguridad.
	- Trazabilidad de versiones y cambios inmutables.

- **Hardening de Virtualización**
	- Protección del hipervisor.
	- Configuraciones seguras de máquinas virtuales.
	- Aislamiento entre tenants y microVMs.
	- Paravirtualización segura y mitigación de side-channels.

## Nuevos Marcos y Estándares Relevantes

- **NIST SP 800-190 — Application Container Security Guide**
	- Buenas prácticas específicas para contenedores e imágenes.
- **NIST SP 800-207 — Zero Trust Architecture**
	- Enfoque moderno para hardening continuo basado en verificación constante.
- **NIST SP 800-82 — ICS/OT Security**
	- Marco fundamental para bastionado industrial.
- **NIST SSDF (Secure Software Development Framework)**
	- Marco para integrar seguridad en SDLC.
- **C2M2 (Cybersecurity Capability Maturity Model)**
	- Madurez del hardening en organizaciones críticas.
- **MITRE D3FEND**
	- Contramedidas mapeadas a técnicas ATT&CK, utilizable para definir controles.

## Controles y Técnicas Avanzadas Pendientes

- **Secure Boot / Measured Boot**
	- Garantizar integridad del arranque de firmware y nivel kernel.
- **Hardening de BIOS/UEFI**
	- Deshabilitar arranque externo, establecer contraseñas, TPM 2.0.
- **Cifrado de Memoria**
	- AMD SEV / Intel TME para contenedores y VMs.
- **Network Access Control (NAC)**
	- Control de dispositivos que se conectan a la red.
- **Microsegmentación**
	- Políticas granulares basadas en identidad (Zero Trust).
- **Estrategias de Control de Scripts**
	- AppLocker, WDAC, restrictivas en Windows.
	- Noexec en Linux, montajes seguros (nosuid, nodev).
- **Protecciones de RFI/RCE**
	- WAF avanzado, sanitización profunda, deserialización segura.
- **Gestión de Secretos**
	- Vault, KMS, rotación automática, prohibición de secretos en repos.

## Hardening de Monitorización y Respuesta (No Cubierto Antes)

- **Detección Proactiva**
	- eBPF/XDP para instrumentación de seguridad a nivel kernel.
	- Monitores de comportamiento (EDR, XDR, NDR).
- **Alertado Inteligente**
	- Correlación basada en MITRE ATT&CK.
- **Resiliencia y Contención**
	- Playbooks y automatización de respuesta (SOAR).
	- Snapshots para recuperación instantánea.
- **Honeytokens / Honeypots**
	- Engaños de bajo costo para detectar intrusiones tempranas.

## Hardening de Dispositivos y Hardware
- **Seguridad de USB**
	- Bloqueo físico/lógico, listas blancas por VID/PID.
- **Secure Elements / HSM**
	- Gestión de claves fuera del sistema.
- **Protección ante ataques físicos**
	- Tamper-resistant, sensores anti-manipulación.

## Hardening de Datos
- **Clasificación y etiquetado**
	- Flujos de protección según categoría.
- **Tokenización y seudonimización**
- **Data Loss Prevention (DLP)**
- **Políticas de retención y minimización**

## Hardening de Servicios Expuestos
- **Revisión de superficies externas**
	- Attack surface management.
	- Monitoreo de exposición en Shodan/Censys.
- **Protección contra bots**
	- mTLS, desafíos de integridad, fingerprinting de clientes.

## Hardening basados en Inteligencia de Amenazas
- Uso de TTPs actualizadas para reforzar configuraciones.
- Detección de configuraciones débiles en tendencia.
- Integración con fuentes externas (MISP, OpenCTI).

# Hardening — Expansión Final de Conceptos Restantes (SIN REPETIR)

## Ámbitos Avanzados que Aún No Estaban Cubiertos

- **Hardening de Protocolos de Identidad Federada**
	- Configuración segura de SAML: firmas obligatorias, clocksynchronization, deshabilitar bindings inseguros.
	- OIDC seguro: rotation de claves, PKCE obligatorio, tokens de corta vida.
	- Auditoría completa de proveedores de identidad externos.
- **Hardening de Cadena de Suministro Digital**
	- Validación de integridad de componentes externos.
	- Repositorios internos con imágenes/paquetes aprobados.
	- Control de origen (supply chain policy): evitar dependencias con historial inseguro.
	- Escaneo continuo de artefactos post-deployment.
- **Hardening de Comunicaciones Machine-to-Machine (M2M)**
	- Autenticación mutua fuerte (mTLS).
	- Certificados rotativos automáticos.
	- Minimización de endpoints expuestos en servicios internos.
	- Límite estricto del tamaño de mensajes, rate-limit y validación de payload.
- **Hardening de Infraestructuras Distribuidas**
	- Reglas estrictas de replicación segura.
	- Aislamiento de nodos por rol.
	- Topologías con separación entre nodos públicos, internos y de gestión.
	- Detección de nodos no autorizados mediante verificación criptográfica.
- **Hardening de Edge Computing**
	- Protección física reforzada para equipos remotos.
	- Arranque verificado y protección de firmware.
	- Mecanismos de auto-sanación (rollback seguro).
	- Telemetría cifrada y autenticada.
- **Hardening de Sistemas Serverless**
	- Principio de mínimo privilegio aplicado a funciones.
	- Restricción de invocaciones internas/externas.
	- Gestión de secretos solo vía vault nativo de la plataforma.
	- Observabilidad mínima exigida: logs, traces y métricas.
- **Hardening de Entornos Multi-Tenant**
	- Separación estricta de espacios de nombres, identidades y redes.
	- Limitación de recursos por tenant (DOS interno).
	- Auditoría cruzada prohibida: aislamiento de logs y métricas.
	- Políticas de metadatos seguras para evitar fugas laterales.

## Controles y Técnicas Especializadas Adicionales

- **Políticas de Bloqueo de Librerías y Cargas Dinámicas**
	- Validación estricta de DLLs / so.
	- Deshabilitar carga arbitraria de módulos.
	- Firmado obligatorio para extensiones o plugins.
- **Hardening de Cron/Task Schedulers**
	- Restricción de edición a usuarios privilegiados.
	- Comprobación de integridad de tareas.
	- Logs detallados de ejecución y modificaciones.
- **Hardening de Configuraciones Temporales**
	- Entornos de staging y pruebas con seguridad equivalente a producción.
	- Atajos temporalmente permitidos con expiración programada.
	- Auditoría de excepciones de seguridad.
- **Hardening de Canales Laterales**
	- Mitigaciones de Spectre/Meltdown y derivados.
	- Aislamiento de procesos sensibles.
	- Minimización de acceso a temporizadores de alta resolución.
- **Hardening de Archivos y Contenido**
	- Políticas de sanitización de documentos (PDFs, imágenes, ofimática).
	- Validación MIME estricta.
	- Restricción de ejecución en directorios de usuario.
- **Hardening de Procesos Batch / ETL**
	- Control de entradas masivas.
	- Validación de origen de datos.
	- Ejecución aislada en entornos no interactivos.

## Marcos, Prácticas y Modelos No Mencionados Previamente

- **CSA CCM (Cloud Controls Matrix)**  
	Matriz específica para evaluar madurez y gaps en seguridad cloud.
- **OWASP SAMM**  
	Madurez del desarrollo seguro aplicado al hardening de pipelines.
- **CMMC (Cybersecurity Maturity Model Certification)**  
	Modelo para entornos regulados con controles escalonados.
- **ISO/IEC 27034 — Seguridad de Aplicaciones**  
	Aporta controles complementarios para hardening a nivel de software.
- **ETSI EN 303 645 (IoT Security)**  
	Requisitos de hardening para dispositivos conectados.

## Áreas Emergentes de Hardening

- **Hardening de IA/ML**
	- Protección de modelos: cifrado, control de acceso, detección de manipulación.
	- Validación de datasets contra inyección de datos.
	- Robustez frente a ataques adversariales.
	- Auditoría de inferencias y límites de uso.
- **Hardening de Sistemas de Mensajería y Pub/Sub**
	- Filtrado de tópicos permitidos.
	- Cifrado extremo-a-extremo opcional.
	- Restricción de productores y consumidores por rol.
- **Hardening de Sistemas de Cache y KV Stores**
	- TTL forzado y expiración segura.
	- Evitar almacenamiento de secretos.
	- Limitación de comandos administrativos.
	- Protección contra CVEs clásicas (Redis/Memcached exploitation).
- **Hardening de Observabilidad**
	- Scraping seguro de métricas.
	- Protección de endpoints /metrics, /debug, /status.
	- Cifrado y autenticación en canales de logs y traces.
- **Hardening de Integraciones Externas**
	- Validación de proveedores a través de políticas de riesgo.
	- Aislamiento de integraciones críticas mediante API gateways dedicados.
	- Control de uso de claves API por contexto y origen.


# Hardening Práctico en Programación  

## Objetivo
Guía práctica para aplicar hardening **directamente en el código**, sin repetir conceptos previos y centrada únicamente en **técnicas concretas, implementaciones y patrones seguros**.

---

## 1. Validación y Saneamiento de Datos

- Validación estricta **del lado del servidor**, nunca confiar en validaciones de cliente.  
- Validar **tipo, tamaño, formato y rango**.  
- Saneamiento contextual:
	- HTML → escapado HTML.
	- SQL → parámetros preparados.
	- Shell → escapes o evitar invocación.
	- JSON/XML → parseo seguro, límites.  
- Rechazar por defecto; aceptar sólo lo esperado (whitelist).

## Ejemplo — Validación estricta (Python)
{% raw %}
```python
import re

def validar_usuario(u):
if not re.fullmatch(r"[A-Za-z0-9_]{4,20}", u):
	raise ValueError("Usuario inválido")
return True
```
{% endraw %}`

---

## 2. Hardening de Autenticación y Sesiones

- Contraseñas siempre hasheadas con algoritmos lentos (bcrypt, argon2id, scrypt).  
- Sesiones:
- Tokens opacos o JWT **con expiración muy corta**.
- Revocación activa y rotación.  
- Cookies con `HttpOnly`, `Secure`, `SameSite=Strict`.
- MFA obligatorio en áreas críticas.

## Ejemplo — Configuración segura de cookie de sesión (Node.js)

{% raw %}
```javascript
app.use(session({
secret: process.env.SESSION_KEY,
cookie: {
	httpOnly: true,
	secure: true,
	sameSite: "strict",
	maxAge: 10 * 60 * 1000
}
}));
```
{% endraw %}

---

## 3. Hardening contra Inyección

- **SQL** → consultas parametrizadas SIEMPRE.  
- **Command Injection** → evitar shells, usar APIs nativas.  
- **No interpolar variables dinámicas** en consultas/templates.  
- Limitar funcionalidad: listas blancas de comandos, rutas o parámetros.

## Ejemplo — SQL parametrizado (Go)

{% raw %}
```go
err := db.QueryRow("SELECT id FROM usuarios WHERE email = ?", email).Scan(&id)
```
{% endraw %}

---

## 4. Hardening de Serialización y Deserialización

- Prohibir deserialización de objetos arbitrarios.  
- Usar **formatos seguros**: JSON estructurado o Protobuf.  
- Establecer límites:
- Tamaño máximo de payload.
- Profundidad de anidamiento.
- Bloquear tipos peligrosos (gadgets RCE en Java/.NET).

## Ejemplo — JSON seguro (JavaScript)

{% raw %}
```javascript
const payload = JSON.parse(input, (_, v) => {
if (typeof v === "string" && v.length > 500) throw new Error("Exceso de tamaño");
return v;
});
```
{% endraw %}

---

## 5. Hardening de Gestión de Errores

- No revelar stacktraces en producción.  
- No filtrar rutas, consultas SQL, claves, versiones o configuración.  
- Logs con metadatos útiles pero sin información sensible.  
- Mensajes genéricos hacia el usuario.

## Ejemplo — Respuesta segura (Python Flask)

{% raw %}
```python
@app.errorhandler(Exception)
def error(e):
app.logger.error("Error: %s", str(e))
return {"error": "Ocurrió un problema"}, 500
```
{% endraw %}

---

## 6. Hardening de Acceso a Archivos y Directorios

- Normalizar rutas antes de usarlas.  
- Rechazar accesos con `..`, rutas absolutas o caracteres sospechosos.  
- Forzar directorio raíz restringido (chroot lógico).  
- No permitir escritura en rutas generadas por usuario.

## Ejemplo — Prevención de Path Traversal (Python)

{% raw %}
```python
from pathlib import Path

BASE = Path("/srv/static").resolve()

def abrir_seguro(ruta):
target = (BASE / ruta).resolve()
if BASE not in target.parents:
	raise PermissionError("Acceso no permitido")
return open(target)
```
{% endraw %}

---

## 7. Hardening Criptográfico

- Evitar funciones inseguras (MD5, SHA1, RC4, DES, ECB).  
- Usar bibliotecas modernas: libsodium, cryptography, BouncyCastle.  
- Generar claves con CSPRNG.  
- Versionar esquemas de cifrado (crypto agility).

## Ejemplo — Cifrado autenticado (Python)

{% raw %}
```python
from cryptography.fernet import Fernet

key = Fernet.generate_key()
f = Fernet(key)
token = f.encrypt(b"datos")
original = f.decrypt(token)
```
{% endraw %}

---

## 8. Hardening de APIs

- Limitar tamaño de peticiones.  
- Rate limiting + anti-abuso.  
- Declarar esquemas estrictos (OpenAPI/JSON Schema).  
- Filtrar headers, métodos y content-type.  
- Rechazar cuerpos no declarados en el esquema.

## Ejemplo — Validación JSON Schema (Node)

{% raw %}
```javascript
import { Validator } from 'jsonschema';
const v = new Validator();

const schema = {
type: "object",
properties: { id: { type: "integer" } },
required: ["id"],
additionalProperties: false
};

v.validate(data, schema);
```
{% endraw %}

---

## 9. Hardening en Programación Asíncrona y Concurrencia

- Evitar condiciones de carrera con locking explícito.  
- Usar colas y canales seguros.  
- No compartir estados mutables entre hilos.  
- Limitar el paralelismo para evitar DoS interno.

## Ejemplo — Sección crítica sincronizada (Rust)

{% raw %}
```rust
use std::sync::{Mutex, Arc};

let contador = Arc::new(Mutex::new(0));
{
let mut c = contador.lock().unwrap();
*c += 1;
}
```
{% endraw %}

---

## 10. Hardening en Microservicios

- Aislamiento: cada servicio con permisos mínimos.  
- Validación cruzada entre servicios (no confiar en el interior).  
- JWT de corta vida + validación de firma en cada microservicio.  
- Límite de conexiones y timeouts estrictos.  
- Resiliencia: circuit breakers, retries limitados.

## Ejemplo — Circuit Breaker (Python)

{% raw %}
```python
import pybreaker

breaker = pybreaker.CircuitBreaker(fail_max=3, reset_timeout=30)

@breaker
def llamar_servicio():
...
```
{% endraw %}

---

## 11. Hardening en Programación Orientada a Objetos

- Encapsulación estricta: no exponer atributos internos.  
- Objetos inmutables para datos sensibles.  
- Polimorfismo seguro: evitar sobrecarga de métodos que modifiquen reglas críticas.  
- Uso de factories para controlar creación de objetos.

## Ejemplo — Objeto inmutable (Java)

{% raw %}
```java
public final class Token {
private final String valor;
public Token(String v){ this.valor = v; }
public String get(){ return valor; }
}
```
{% endraw %}

---

## 12. Hardening en CI/CD (Enfocado al Código)

- Escaneo automático: SAST, SCA, secretos, dependencias.  
- Firmado de artefactos.  
- Reglas de protección de ramas.  
- Pipeline aislado, sin acceso a producción.  
- Variables de entorno seguras, jamás incluir secretos en código.

---

## 13. Hardening de Librerías y Dependencias

- Usar lockfiles (`package-lock.json`, `requirements.txt`).  
- Prohibir dependencias no versionadas.  
- Auditoría continua de CVEs.  
- Preferir librerías minimalistas y mantenidas.  
- Sustituir dependencias abandonadas.

---

## 14. Hardening para Prevención de Abuso Lógico

- Restricción de acciones sensibles (confirmación doble).  
- Verificación de identidad en operaciones críticas.  
- Control de flujos para evitar bypass de reglas.  
- Monitoreo de patrones anómalos (repentinos o repetitivos).

# 🛡️ Hardening Práctico en Programación  
## Design Patterns orientados a seguridad y robustez

Esta nota recopila **patrones de diseño específicamente orientados al hardening**, es decir, a aumentar la **resistencia, robustez y seguridad del software**, SIN repetir patrones clásicos si no aportan defensa directa.  
Todos los patrones aquí se centran en **mitigar vectores de ataque**, **reducir superficie**, **garantizar integridad**, **controlar acceso**, **sanear datos**, y **evitar estados corruptos**.

---

## 1. 🧱 **Secure Facade Pattern**
Un *Facade* diseñado para **encapsular recursos sensibles**, exponiendo solo operaciones sanitizadas y seguras.

### Objetivo
- Reducir superficie de ataque.
- Evitar acceso directo a servicios críticos.
- Envolver validaciones y controles antes de ejecutar acciones internas.

### Uso típico
- Acceso a BBDD
- Servicios criptográficos
- Recursos del sistema / APIs internas

### Beneficios
- Punto único para aplicar hardening.
- Menor probabilidad de bypass.

---

## 2. 🗝️ **Validated Builder Pattern**
Un *Builder* donde **cada campo es validado, sanetizado o normalizado** antes de construir el objeto final.

### Características
- No permite construir objetos inválidos.
- Sanitización temprana (*shift-left security*).
- Evita estados inseguros en memoria.

### Útil para
- Objetos que representan datos externos.
- Configuraciones cargadas desde archivos o inputs de usuario.

---

## 3. 🔐 **Privileged Execution Wrapper**
Patrón para aislar bloques de código que requieren permisos elevados dentro de un “wrapper” seguro.

### Protecciones
- Control estricto de parámetros.
- Auditoría del uso.
- Reversión automática de permisos temporales.

### Objetivo
- Evitar escaladas de privilegios por error.
- Minimizar tiempo con permisos elevados.

---

## 4. 🧽 **Input-Sanitizing Pipeline**
Pipeline modular y extensible donde cada etapa limpia o verifica entradas.

### Propósito
- Sanear datos antes de usar.
- Encadenar validaciones sin acoplamiento.

### Etapas típicas
- Normalización
- Validación de formato
- Análisis semántico
- Escapado o codificación (HTML, SQL, cmd, XML)

---

## 5. 🧩 **Fail-Safe Strategy Selector**
Patrón que aplica estrategias distintas según contexto, eligiendo SIEMPRE la opción “más segura disponible”.

### Ejemplos
- Elegir algoritmo criptográfico seguro según plataforma.
- Seleccionar métodos de acceso según política vigente.
- Cambiar flujo cuando detecta una anomalía.

---

## 6. 🛡️ **Immutable Security Object**
Todos los objetos relacionados con autenticación, autorización, secretos o tokens son **inmutables**.

### Motivos
- Reducir manipulación maliciosa.
- Garantizar integridad lógica.
- Evitar inconsistencias en concurrencia.

Ejemplos:
- Credenciales
- JWT decodificados
- Claims de sesión

---

## 7. 🧨 **Circuit-Breaker de Seguridad**
Aplica el patrón *Circuit Breaker* no solo para disponibilidad sino para **detectar comportamientos sospechosos**.

### Reacciona a:
- Demasiados intentos fallidos
- Inputs sospechosos
- Errores de integridad
- Timeouts anómalos

### Acciones
- Bloqueo temporal
- Restablecer sesión
- Activar capa defensiva

---

## 8. 🗂️ **Secure Adapter Pattern**
Adaptadores que aíslan librerías inseguras o legacy, imponiendo un contrato interno seguro.

### Beneficios
- Contención de vulnerabilidades.
- Sanitización automática de entradas/salidas.
- Auditoría del uso de librerías antiguas.

---

## 9. 🌐 **Context-Aware Escaper**
Un patrón para asegurar que **cada salida** se codifique según el **contexto**:

- HTML
- JavaScript
- URL
- SQL
- Shell
- XML / JSON

Evita:
- XSS
- Injection
- Insecure deserialization

---

## 10. 🔄 **Self-Healing Pattern**
El sistema se “cura” o revierte a estados seguros cuando detecta anomalías.

Incluye:
- Reemplazo de valores críticos corruptos.
- Restauración desde configuración estable.
- Reinicio controlado de subsistemas.

---

## 11. 📦 **Secure Dependency Manager**
Patrón para centralizar:

- verificación de firmas de dependencias  
- control de versiones seguras  
- sandboxing de librerías externas  
- verificación SBOM

Objetivo:
- Evitar riesgos de supply-chain.

---

## 12. 🧬 **Deterministic State Machine Pattern**
Todo flujo crítico es guiado por una **máquina de estados determinista**, evitando:

- Estados imposibles  
- Condiciones de carrera  
- Ejecuciones inconsistentes  

Se usa mucho en:
- Procesos de login  
- Flujos de pagos  
- Validación multicapa  

---

## 13. 🧊 **Secrets-Freezing Pattern**
Mantiene los secretos (tokens, claves, contraseñas) en estructuras:

- inmutables  
- opcionalmente encriptadas en memoria  
- con TTL integrado  
- acceso solo mediante funciones controladas  

---

## 14. 🕵️ **Anti-Tampering Proxy**
Proxy interno antes de ciertas operaciones que verifica:

- integridad del código
- firmas de módulos
- ausencia de hooks sospechosos
- comprobaciones de entorno (anticomposición, anti-debugging)

---

## 15. 🔎 **Secure Observer Pattern**
Oberservers dedicados solo a **auditar**, **monitorizar**, **detectar anomalías** y levantar eventos de seguridad.

No modifican el flujo principal → separan seguridad de lógica funcional.

---


