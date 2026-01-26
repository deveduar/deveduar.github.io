---
date: 2023-08-31 16:47
title: Comunicación entre Procesos
status: 🌟
Parent: "[[Area-Prog]]"
keywords:
aliases:
source:
public_note: "true"
category: Computer Science
tags:
  - CS
  - Codes
---
# Comunicación entre Procesos
`$= dv.current().file.tags.join(" ")`
 
- [Computer Science](/uncategorized/computer-science/)
- [Sockets](/backend/sockets/)
- [search tool grep](/sistemas/search-tool-grep/)


## Conceptos Fundamentales

### ¿Qué es la Comunicación entre Procesos?
La **comunicación entre procesos** (IPC - Inter Process Communication) permite que programas independientes intercambien información y se coordinen, incluso si están escritos en lenguajes de programación diferentes.

### Casos de Uso Comunes
- Filtrado de datos entre programas
- Coordinación de servicios distribuidos
- Procesamiento en paralelo
- Integración de sistemas heterogéneos

## Métodos de Comunicación

### Tuberías (Pipes)
Las **tuberías** permiten conectar la salida de un proceso con la entrada de otro.

#### Ejemplo Práctico con Comandos
{% raw %}
```bash
ls | grep hello
```
{% endraw %}
Este comando conecta la salida de `ls` con la entrada de `grep`, filtrando solo los archivos que contienen "hello".

### Sockets
Los [Sockets](/backend/sockets/) permiten la comunicación entre procesos en la misma máquina o en máquinas diferentes, independientemente del lenguaje de programación.

#### Protocolo de Ejemplo
- Cliente envía mensaje al servidor
- Servidor responde con "RECEIVED" si es exitoso
- Mensaje "END" cierra la conexión

## Ejemplos de Implementación

### Programa en C - Procesamiento de Argumentos
{% raw %}
```c
#include <stdio.h>
int main(int argc, char **argv) {
    for (int i = 1; i < argc; i++) {
        printf("%s ", argv[i]);
    }
    printf("\n");
}
```
{% endraw %}

### Programa en Python - Ordenamiento de Números
{% raw %}
```python
from sys import stdin

def main():
    for num in sorted(map(int, next(stdin).split(' ')[:-1])):
        print(num, end=" ")
    print()

if __name__ == '__main__':
    main()
```
{% endraw %}

## Flujo de Comunicación

### Arquitectura Básica
!Data/Data-Prog/CS Data/image.png

### Filtrado con Tuberías
!Data/Data-Prog/CS Data/image2.png

## Recursos

### Enlaces de Referencia
- [Video explicativo](https://www.youtube.com/watch?v=7f9NzvvPo9g)
- [Códigos de ejemplo](https://github.com/antoniosarosi/sockets-examples)

# Comunicación entre Procesos - Conceptos Avanzados

## Mecanismos de IPC

### Memoria Compartida
- **Definición**: Región de memoria accesible por múltiples procesos
- **Ventajas**: Alta velocidad de comunicación
- **Desventajas**: Requiere sincronización (semáforos, mutex)
- **Uso típico**: Aplicaciones de alto rendimiento

### Colas de Mensajes
- **Características**: Comunicación asíncrona mediante mensajes
- **Estructura**: FIFO (First-In-First-Out) o con prioridades
- **Persistencia**: Pueden ser persistentes o volátiles

### Semáforos
- **Función**: Sincronización entre procesos
- **Tipos**: Binarios, contadores
- **Operaciones**: wait/signal (P/V)

## Sockets - Detalles Técnicos

### Tipos de Sockets
- **SOCK_STREAM**: Conexión orientada (TCP)
- **SOCK_DGRAM**: Sin conexión (UDP)
- **SOCK_RAW**: Acceso directo al protocolo

### Estados de Conexión TCP
{% raw %}
```python
# Ejemplo de estados en conexión socket
ESTADOS = {
    "LISTEN": "Servidor esperando conexiones",
    "SYN_SENT": "Cliente envió SYN",
    "SYN_RECEIVED": "Servidor recibió SYN",
    "ESTABLISHED": "Conexión establecida",
    "CLOSE_WAIT": "Esperando cierre local",
    "TIME_WAIT": "Esperando paquetes tardíos"
}
```
{% endraw %}

### Buffering y Blocking
- **Buffering**: Almacenamiento temporal de datos
- **Blocking/Non-blocking**: Comportamiento de las operaciones E/S
- **Select/Poll**: Múltiples conexiones simultáneas

## Patrones de Comunicación

### Cliente-Servidor
- **Arquitectura**: Un servidor, múltiples clientes
- **Roles**: Servidor provee servicios, cliente los consume
- **Ejemplos**: Web servers, bases de datos

### Publicador-Suscriptor (Pub/Sub)
- **Característica**: Comunicación desacoplada
- **Mecanismo**: Los publicadores envían, suscriptores reciben
- **Ventaja**: Escalabilidad horizontal

### Pipeline (Tuberías)
- **Flujo**: Procesamiento en cadena
- **Ejemplo**: `proceso1 | proceso2 | proceso3`
- **Beneficio**: Especialización de tareas

## Consideraciones de Implementación

### Serialización de Datos
- **Necesidad**: Convertir estructuras de datos a formato transferible
- **Formatos comunes**: JSON, XML, Protocol Buffers, MessagePack
- **Lenguajes heterogéneos**: Deben usar mismo formato de serialización

### Manejo de Errores
- **Timeout**: Límites de espera en operaciones
- **Reconexión**: Estrategias ante fallos de conexión
- **Deadlocks**: Prevención en comunicación bidireccional

### Seguridad en IPC
- **Autenticación**: Verificación de identidad de procesos
- **Autorización**: Control de acceso a recursos
- **Cifrado**: Protección de datos sensibles

## Ejemplos Avanzados

### Socket con Múltiples Clientes
{% raw %}
```python
import socket
import threading

def handle_client(client_socket):
    while True:
        data = client_socket.recv(1024)
        if data.decode() == "END":
            break
        client_socket.send(b"RECEIVED")
    client_socket.close()

# Servidor multihilo
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('localhost', 8080))
server.listen(5)

while True:
    client, addr = server.accept()
    thread = threading.Thread(target=handle_client, args=(client,))
    thread.start()
```
{% endraw %}

### Memoria Compartida en C
{% raw %}
```c
#include <sys/shm.h>
#include <stdio.h>

int main() {
    int shmid = shmget(1234, 1024, 0666|IPC_CREAT);
    char *str = (char*) shmat(shmid, NULL, 0);
    
    sprintf(str, "Hello Shared Memory");
    printf("Data: %s\n", str);
    
    shmdt(str);
    shmctl(shmid, IPC_RMID, NULL);
    return 0;
}
```
{% endraw %}

## Herramientas de Diagnóstico

### Comandos de Monitoreo
{% raw %}
```bash
# Ver sockets abiertos
netstat -tulpn
ss -tulpn

# Ver procesos comunicándose
lsof -i

# Monitorear uso de pipes
lsof | grep FIFO
```
{% endraw %}

### Performance y Optimización
- **Throughput**: Cantidad de datos por unidad de tiempo
- **Latencia**: Tiempo de respuesta
- **Escalabilidad**: Comportamiento con múltiples conexiones

# Comunicación entre Procesos - Temas Avanzados

## Protocolos de Comunicación

### Protocolos a Nivel de Aplicación
- **HTTP/REST**: Comunicación web basada en solicitud-respuesta
- **WebSockets**: Comunicación bidireccional en tiempo real
- **gRPC**: Llamadas a procedimientos remotos de alto rendimiento
- **MQTT**: Protocolo ligero para IoT (publicador-suscriptor)

### Protocolos de Transporte
- **TCP**: Orientado a conexión, confiable, con control de flujo
- **UDP**: Sin conexión, más rápido, sin garantías de entrega
- **SCTP**: Combina características de TCP y UDP

## Comunicación en Sistemas Distribuidos

### Middleware
- **Definición**: Capa de software que facilita la comunicación entre aplicaciones
- **Ejemplos**: CORBA, DCOM, RabbitMQ, Apache Kafka
- **Funciones**: Abstracción de red, serialización, descubrimiento de servicios

### Service Mesh
- **Concepto**: Infraestructura dedicada para comunicación entre microservicios
- **Componentes**: Sidecar proxies, control plane, data plane
- **Herramientas**: Istio, Linkerd, Consul

## Técnicas de Sincronización

### Exclusión Mutua
- **Mutex**: Exclusión mutua entre procesos
- **Semáforos contadores**: Control de acceso a recursos limitados
- **Variables de condición**: Notificación entre procesos

### Algoritmos de Elección
- **Líder distribuido**: Elección de coordinador en sistemas distribuidos
- **Algoritmo de Bully**: Elección basada en identificadores de proceso
- **Algoritmo de Ring**: Elección en topología circular

## Comunicación Interdominio

### RPC (Remote Procedure Call)
{% raw %}
```c
// Ejemplo conceptual de RPC
struct rpc_call {
    int function_id;
    void* parameters;
    size_t param_size;
};

// Cliente llama función remota como si fuera local
result = remote_function(arg1, arg2);
```
{% endraw %}

### Marshalling/Unmarshalling
- **Marshalling**: Empaquetado de parámetros para transmisión
- **Unmarshalling**: Desempaquetado en el destino
- **Stub/Skeleton**: Código generado que maneja la comunicación

## Patrones de Diseño para IPC

### Reactor Pattern
- **Arquitectura**: Manejo de múltiples E/S con un solo hilo
- **Componentes**: Demultiplexor, despachador, manejadores
- **Uso**: Servidores de alta concurrencia

### Producer-Consumer
- **Elementos**: Cola compartida, productores, consumidores
- **Sincronización**: Locks para acceso a cola
- **Variantes**: Multiple producers, multiple consumers

### Monitor Pattern
- **Concepto**: Objeto que sincroniza acceso a recursos
- **Operaciones**: Entrada y salida con exclusión mutua
- **Implementación**: Semáforos binarios

## Comunicación en Tiempo Real

### Colas de Prioridad
- **Clasificación**: Mensajes con diferentes niveles de urgencia
- **Implementación**: Heaps, listas ordenadas
- **Aplicaciones**: Sistemas embebidos, tiempo real

### QoS (Quality of Service)
- **Parámetros**: Latencia, ancho de banda, pérdida de paquetes
- **Mecanismos**: Reserva de recursos, priorización
- **Protocolos**: RSVP, DiffServ

## Comunicación entre Containers

### Docker Networking
- **Bridge network**: Comunicación entre containers en mismo host
- **Overlay network**: Comunicación entre containers en diferentes hosts
- **Macvlan**: Asignación de dirección MAC directa

### Service Discovery
- **DNS-based**: Resolución automática de servicios
- **Client-side discovery**: Cliente consulta registry de servicios
- **Server-side discovery**: Load balancer como intermediario

## Seguridad en Comunicación

### Autenticación Mutua
- **Certificados TLS**: Verificación bidireccional de identidad
- **Tokens JWT**: Autenticación sin estado
- **mTLS**: TLS mutuo para autenticación cliente-servidor

### Cifrado de Comunicación
- **Transport Layer**: TLS/SSL para canal seguro
- **Application Layer**: Cifrado extremo a extremo
- **Algoritmos**: AES, ChaCha20, RSA, ECC

## Monitorización y Debugging

### Tracing Distribuido
- **OpenTracing**: Estándar para tracing entre servicios
- **Jaeger**: Herramienta de tracing distribuido
- **Zipkin**: Sistema de seguimiento de peticiones

### Métricas de Comunicación
{% raw %}
```python
# Métricas clave para monitorizar IPC
metricas = {
    "throughput": "mensajes/segundo",
    "latencia": "tiempo respuesta promedio",
    "error_rate": "porcentaje de errores",
    "conexiones_activas": "número de conexiones simultáneas"
}
```
{% endraw %}

## Optimización de Performance

### Técnicas de Batching
- **Agrupación**: Envío múltiple de mensajes pequeños
- **Buffer management**: Gestión eficiente de buffers
- **Window sizing**: Optimización del tamaño de ventana TCP

### Connection Pooling
- **Reutilización**: Mantener conexiones abiertas para reuso
- **Pool management**: Gestión de pools de conexiones
- **Load balancing**: Distribución entre múltiples conexiones

## Casos de Estudio Específicos

### Database Replication
- **Log shipping**: Replicación mediante envío de logs
- **Multi-master**: Escritura en múltiples nodos
- **Conflict resolution**: Resolución de conflictos en replicación

### Message Brokers
- **Apache Kafka**: Streaming platform para datos en tiempo real
- **RabbitMQ**: Message broker con múltiples protocolos
- **Redis Pub/Sub**: Sistema simple de publicador-suscriptor

### Cluster Computing
- **MPI**: Message Passing Interface para computación paralela
- **Hadoop**: Framework para procesamiento distribuido
- **Spark**: Procesamiento en memoria para big data

# Comunicación entre Procesos - Temas Especializados

## Arquitecturas de Comunicación

### Event-Driven Architecture
- **Event Sourcing**: Almacenamiento del estado como secuencia de eventos
- **CQRS**: Separación de lecturas y escrituras
- **Event Carrying**: Los eventos contienen toda la información necesaria

### Data Streaming
- **Stream Processing**: Procesamiento continuo de flujos de datos
- **Window Operations**: Agregaciones sobre ventanas de tiempo
- **Stateful Streams**: Mantenimiento de estado en procesamiento stream

## Patrones de Resiliencia

### Circuit Breaker
{% raw %}
```python
class CircuitBreaker:
    def __init__(self):
        self.state = "CLOSED"
        self.failure_count = 0
        
    def call_service(self, request):
        if self.state == "OPEN":
            raise CircuitOpenError()
        try:
            response = service.call(request)
            self._on_success()
            return response
        except Exception:
            self._on_failure()
            raise
```
{% endraw %}

### Retry Patterns
- **Exponential Backoff**: Espera exponencial entre reintentos
- **Jitter**: Aleatoriedad para evitar sincronización
- **Fallback Strategies**: Alternativas cuando el servicio falla

## Comunicación Asíncrona Avanzada

### Message Queues Persistents
- **Durable Queues**: Supervivencia a reinicios del broker
- **Message Persistence**: Mensajes almacenados en disco
- **Delivery Guarantees**: Exactly-once, at-least-once, at-most-once

### Event Buses
- **Enterprise Service Bus**: Integración de sistemas empresariales
- **Event-Driven Middleware**: Middleware orientado a eventos
- **Message Routing**: Enrutamiento inteligente de mensajes

## Comunicación en Edge Computing

### Fog Computing
- **Edge Nodes**: Procesamiento cerca del origen de datos
- **Latency Sensitivity**: Comunicación de baja latencia
- **Bandwidth Optimization**: Minimización de uso de ancho de banda

### MEC (Multi-access Edge Computing)
- **5G Integration**: Comunicación en redes 5G
- **Network Slicing**: Segmentación de red para diferentes servicios
- **Ultra-Reliable Low Latency**: Comunicación ultra confiable

## Protocolos Especializados

### Industrial Protocols
- **OPC UA**: Comunicación industrial unificada
- **Modbus**: Protocolo serial para automatización
- **PROFIBUS**: Bus de campo para automatización industrial

### Financial Protocols
- **FIX Protocol**: Comunicación en mercados financieros
- **SWIFT**: Comunicación interbancaria
- **ISO 20022**: Estándar para mensajes financieros

## Comunicación en Machine Learning

### Federated Learning
- **Edge Training**: Entrenamiento en dispositivos edge
- **Model Aggregation**: Agregación de modelos distribuidos
- **Privacy Preservation**: Entrenamiento sin compartir datos

### Distributed Training
- **Parameter Servers**: Sincronización de parámetros en entrenamiento
- **All-Reduce**: Operación colectiva para gradientes
- **Model Parallelism**: Distribución del modelo entre dispositivos

## Comunicación para Blockchain

### Consensus Protocols
- **Proof of Work**: Consenso mediante trabajo computacional
- **Proof of Stake**: Consenso basado en participación
- **Byzantine Fault Tolerance**: Tolerancia a fallos bizantinos

### P2P Networking
- **Gossip Protocols**: Diseminación de información en red P2P
- **DHT**: Tablas hash distribuidas para descubrimiento
- **NAT Traversal**: Técnicas para atravesar NAT

## Comunicación Cuántica

### Quantum Key Distribution
- **BB84 Protocol**: Protocolo de distribución cuántica de claves
- **Quantum Entanglement**: Comunicación mediante entrelazamiento
- **Quantum Repeaters**: Amplificación de señales cuánticas

### Post-Quantum Cryptography
- **Lattice-based**: Criptografía basada en retículos
- **Hash-based**: Firmas basadas en funciones hash
- **Code-based**: Criptografía basada en códigos de corrección

## Comunicación en Realidad Virtual/Aumentada

### Low-Latency Streaming
- **6DoF Tracking**: Transmisión de datos de posición y orientación
- **Foveated Rendering**: Transmisión adaptada al punto de mirada
- **Haptic Feedback**: Comunicación de feedback táctil

### Spatial Computing
- **Anchor Sharing**: Compartición de anclajes espaciales
- **Collaborative Sessions**: Sesiones colaborativas en tiempo real
- **World Mapping**: Sincronización de mapas espaciales

## Tendencias Emergentes

### Named Data Networking
- **Content-Centric**: Comunicación centrada en contenido, no en ubicación
- **In-Network Caching**: Almacenamiento en caché dentro de la red
- **Interest Packets**: Paquetes de interés para solicitar datos

### Service Mesh Evolution
- **eBPF-based**: Service mesh usando eBPF para mejor performance
- **WebAssembly**: Extensiones usando WASM para personalización
- **Ambient Mesh**: Service mesh sin sidecars

### Confidential Computing
- **Enclaves**: Ejecución en entornos aislados de hardware
- **Secure Channels**: Comunicación entre enclaves seguros
- **Remote Attestation**: Verificación de integridad remota

## Herramientas y Frameworks Especializados

### Cloud-Native Communication
- **Dapr**: Distributed application runtime
- **NATS**: Sistema de mensajería de alto rendimiento
- **Envoy**: Proxy de red para microservicios

### IoT Communication Stacks
- **LoRaWAN**: Protocolo para IoT de largo alcance
- **NB-IoT**: IoT en bandas licenciadas
- **Thread**: Protocolo mesh para hogar conectado

## Métricas Avanzadas y Observabilidad

### Distributed Tracing Avanzado
- **Baggage**: Propagación de contexto personalizado
- **Span Links**: Relaciones entre trazas independientes
- **Sampling Strategies**: Estrategias de muestreo adaptativo

### eBPF para Observabilidad
- **Kernel-Level Tracing**: Trazado a nivel de kernel sin instrumentación
- **Network Monitoring**: Monitorización de red sin overhead
- **Security Observability**: Detección de amenazas en tiempo real

# Comunicación entre Procesos - Tópicos No Cubiertos

## Comunicación por Archivos

### File Locking Mechanisms
- **Advisory Locks**: Bloqueos cooperativos entre procesos
- **Mandatory Locks**: Bloqueos forzados a nivel de sistema
- **Region Locking**: Bloqueo de regiones específicas de archivos

### Memory-Mapped Files
{% raw %}
```c
#include <sys/mman.h>
// Mapear archivo a memoria
void* mapped = mmap(NULL, file_size, PROT_READ|PROT_WRITE, 
                   MAP_SHARED, fd, 0);
// Procesos acceden al mismo espacio de memoria
```
{% endraw %}

## Comunicación por Señales

### Signal Handling Avanzado
- **Real-time Signals**: Señales en tiempo real (SIGRTMIN to SIGRTMAX)
- **Signal Queues**: Colas de señales para evitar pérdidas
- **Signal Masking**: Bloqueo temporal de señales

### Process Groups y Sessions
- **Process Group Leaders**: Líderes de grupos de procesos
- **Session Leaders**: Procesos que controlan terminales
- **Orphaned Process Groups**: Grupos sin proceso padre

## Comunicación Inter-Máquina Avanzada

### RDMA (Remote Direct Memory Access)
- **Zero-Copy**: Transferencia directa memoria a memoria
- **Kernel Bypass**: Evitación del kernel para mejor rendimiento
- **InfiniBand**: Tecnología de alta velocidad para clusters

### Protocolos de Cluster
- **Heartbeat Protocols**: Detección de nodos activos/inactivos
- **Gossip Protocols**: Diseminación de estado del cluster
- **Quorum Systems**: Sistemas de consenso para decisiones

## Comunicación en Tiempo Real Estricto

### Deterministic IPC
- **Worst-Case Execution Time**: Tiempo máximo de ejecución garantizado
- **Priority Inheritance**: Herencia de prioridades para evitar inversión
- **Resource Reservations**: Reserva de recursos para procesos críticos

### Real-Time Schedulers
- **Rate Monotonic**: Planificación por prioridad fija
- **Earliest Deadline First**: Planificación por deadline más próximo
- **Priority Ceiling Protocol**: Protocolo para evitar deadlocks

## Comunicación en Sistemas Embebidos

### Bus Systems
- **CAN Bus**: Controller Area Network para automoción
- **I2C**: Inter-Integrated Circuit para dispositivos embebidos
- **SPI**: Serial Peripheral Interface para comunicación síncrona

### Hardware-Assisted IPC
- **DMA Controllers**: Transferencia directa de memoria
- **Mailbox Registers**: Comunicación mediante registros hardware
- **Interrupt Controllers**: Gestión de interrupciones entre procesadores

## Comunicación para High-Frequency Trading

### Kernel Bypass Techniques
- **DPDK**: Data Plane Development Kit
- **Solarflare EF_VI**: Virtual Interface para bypass de kernel
- **Mellanox VMA**: Verb Memory Access

### Multicast Protocols
- **PGM**: Pragmatic General Multicast
- **Reliable Multicast**: Multicast con garantías de entrega
- **IP Multicast**: Multicast a nivel de red

## Comunicación en Sistemas de Tiempo Crítico

### Avionics Protocols
- **ARINC 429**: Protocolo aeronáutico punto a punto
- **MIL-STD-1553**: Bus de datos para aplicaciones militares
- **AFDX**: Avionics Full-Duplex Switched Ethernet

### Automotive Protocols
- **FlexRay**: Protocolo para sistemas de seguridad crítica
- **LIN Bus**: Local Interconnect Network para componentes simples
- **MOST**: Media Oriented Systems Transport para entretenimiento

## Comunicación para Supercomputación

### MPI Avanzado
{% raw %}
```c
// Operaciones colectivas avanzadas en MPI
MPI_Alltoallv();  // Comunicación todos-a-todos con desplazamientos
MPI_Reduce_scatter(); // Reducción y dispersión combinadas
MPI_Exscan();     // Scan exclusivo
```
{% endraw %}

### PGAS Languages
- **UPC**: Unified Parallel C
- **Coarray Fortran**: Fortran con arrays distribuidos
- **Chapel**: Lenguaje diseñado para computación paralela

## Comunicación en Virtualización

### Hypervisor IPC
- **Xen Event Channels**: Comunicación entre dominios
- **KVM virtio**: Dispositivos virtuales para comunicación
- **VMCI**: VMware Communication Interface

### Container Runtime Communication
- **CRI**: Container Runtime Interface
- **OCI Runtime Spec**: Especificación para runtimes de containers
- **gVisor**: Comunicación con sandbox de aplicaciones

## Comunicación para Big Data

### Shuffle Operations
- **MapReduce Shuffle**: Transferencia intermedia en MapReduce
- **Spark Shuffle**: Mecanismo de shuffle en Apache Spark
- **Shuffle Optimization**: Técnicas para optimizar operaciones shuffle

### Data Lake Communication
- **Delta Lake**: Transacciones ACID en data lakes
- **Iceberg Table Format**: Formatos tabulares para big data
- **Hudi**: Upserts e incremental processing

## Comunicación en Edge Computing Avanzado

### Federated Learning Communication
- **Secure Aggregation**: Agregación segura de modelos
- **Differential Privacy**: Privacidad diferencial en comunicación
- **Federated Analytics**: Análisis distribuido sin compartir datos

### Edge-Cloud Coordination
- **Edge Orchestration**: Orquestación de procesos en edge
- **Cloudlet Communication**: Comunicación con cloudlets intermedios
- **Fog Computing Coordination**: Coordinación en arquitecturas fog

## Comunicación Cuántica Distribuida

### Quantum Internet
- **Quantum Repeaters**: Repetidores para redes cuánticas largas
- **Quantum Memory**: Almacenamiento cuántico para redes
- **Quantum Network Protocols**: Protocolos para redes cuánticas

### Distributed Quantum Computing
- **Teleportation-Based Computation**: Computación basada en teletransporte
- **Distributed Quantum Algorithms**: Algoritmos para computación cuántica distribuida
- **Quantum Error Correction**: Corrección de errores en sistemas distribuidos

## Comunicación para Blockchain Scaling

### Layer 2 Protocols
- **State Channels**: Canales de estado para transacciones off-chain
- **Plasma**: Cadenas laterales para escalado
- **Rollups**: Agregación de transacciones on-chain

### Sharding Communication
- **Cross-Shard Transactions**: Transacciones entre shards
- **Beacon Chain Communication**: Comunicación con cadena de beacon
- **State Sync**: Sincronización de estado entre shards

## Comunicación en Sistemas Autónomos

### V2X Communication
- **V2V**: Vehicle-to-Vehicle
- **V2I**: Vehicle-to-Infrastructure
- **V2N**: Vehicle-to-Network

### Drone Swarm Communication
- **Swarm Intelligence**: Comunicación para inteligencia de enjambre
- **Formation Control**: Control de formaciones coordinadas
- **Collision Avoidance**: Evasión de colisiones distribuida

## Comunicación para Realidad Extendida (XR)

### Haptic Communication
- **Tactile Internet**: Internet táctil para feedback háptico
- **Force Feedback**: Comunicación de fuerzas en tiempo real
- **Haptic Codecs**: Compresión de datos hápticos

### Spatial Audio Communication
- **3D Audio Streaming**: Transmisión de audio espacial
- **Binaural Rendering**: Renderizado binaural en tiempo real
- **Acoustic Environment Sync**: Sincronización de entornos acústicos

# Comunicación entre Procesos en Entorno Web y Desarrollo

## Web Workers y Comunicación en Navegador

### Tipos de Web Workers
- **Dedicated Workers**: Comunicación 1:1 con script principal
- **Shared Workers**: Comunicación múltiples scripts/pestañas
- **Service Workers**: Proxy para network requests

### Message Passing en Workers
{% raw %}
```javascript
// Main thread
const worker = new Worker('worker.js');
worker.postMessage({ type: 'PROCESS_DATA', data: largeArray });
worker.onmessage = (e) => {
    if (e.data.type === 'RESULT') {
        updateUI(e.data.result);
    }
};

// Worker.js
self.onmessage = (e) => {
    if (e.data.type === 'PROCESS_DATA') {
        const result = heavyComputation(e.data.data);
        self.postMessage({ type: 'RESULT', result });
    }
};
```
{% endraw %}

## Comunicación entre Tabs/Windows

### Broadcast Channel API
{% raw %}
```javascript
// Emisor
const channel = new BroadcastChannel('app-channel');
channel.postMessage({ action: 'USER_UPDATED', user: userData });

// Receptor
const channel = new BroadcastChannel('app-channel');
channel.onmessage = (e) => {
    if (e.data.action === 'USER_UPDATED') {
        syncUserData(e.data.user);
    }
};
```
{% endraw %}

### LocalStorage Events
{% raw %}
```javascript
// Una pestaña escribe
localStorage.setItem('shared-data', JSON.stringify(data));

// Otra pestaña escucha
window.addEventListener('storage', (e) => {
    if (e.key === 'shared-data') {
        const data = JSON.parse(e.newValue);
        handleSharedDataUpdate(data);
    }
});
```
{% endraw %}

## Comunicación en Microservicios Web

### API Gateways y Comunicación
- **Request Routing**: Enrutamiento inteligente de peticiones
- **Protocol Translation**: Traducción entre REST/gRPC/GraphQL
- **Service Discovery**: Descubrimiento dinámico de servicios

### Circuit Breaker en APIs Web
{% raw %}
```javascript
class APICircuitBreaker {
    constructor() {
        this.state = 'CLOSED';
        this.failureCount = 0;
        this.nextAttempt = Date.now();
    }

    async call(url) {
        if (this.state === 'OPEN') {
            if (Date.now() < this.nextAttempt) {
                throw new Error('Circuit breaker OPEN');
            }
            this.state = 'HALF_OPEN';
        }

        try {
            const response = await fetch(url);
            if (response.ok) {
                this._onSuccess();
                return response;
            }
            throw new Error('Request failed');
        } catch (error) {
            this._onFailure();
            throw error;
        }
    }
}
```
{% endraw %}

## Comunicación en Aplicaciones Isomórficas

### Server-Client State Sync
- **Hydration**: Rehidratación de estado del servidor al cliente
- **Universal Data Fetching**: Fetching de datos que funciona en server y client
- **Progressive Enhancement**: Mejora progresiva de funcionalidad

### Next.js API Routes Communication
{% raw %}
```javascript
// pages/api/users/[id].js
export default function handler(req, res) {
    const { id } = req.query;
    
    if (req.method === 'GET') {
        const user = getUserById(id);
        res.status(200).json(user);
    }
    
    if (req.method === 'POST') {
        updateUser(id, req.body);
        res.status(200).json({ success: true });
    }
}
```
{% endraw %}

## Comunicación en Aplicaciones Multiplataforma

### React Native Bridge
{% raw %}
```javascript
// Native Module
import { NativeModules } from 'react-native';
const { CalendarManager } = NativeModules;

CalendarManager.addEvent('Birthday Party', {
    date: Date.now(),
    location: 'My House'
});

// MessageQueue para debugging
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';
MessageQueue.spy((msg) => {
    console.log(msg);
});
```
{% endraw %}

### Flutter Platform Channels
{% raw %}
```dart
// Flutter side
static const platform = MethodChannel('com.example/app');
final String result = await platform.invokeMethod('getBatteryLevel');

// Android side
public class MainActivity extends FlutterActivity {
    private static final String CHANNEL = "com.example/app";
    
    @Override
    public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.configureFlutterEngine(flutterEngine);
        new MethodChannel(flutterEngine.getDartExecutor().getBinaryMessenger(), CHANNEL)
            .setMethodCallHandler((call, result) -> {
                if (call.method.equals("getBatteryLevel")) {
                    int batteryLevel = getBatteryLevel();
                    result.success(batteryLevel);
                }
            });
    }
}
```
{% endraw %}

## Comunicación en PWA y Apps Web

### Background Sync
{% raw %}
```javascript
// Registrar sync
navigator.serviceWorker.ready.then(registration => {
    return registration.sync.register('sync-data');
});

// Service Worker
self.addEventListener('sync', event => {
    if (event.tag === 'sync-data') {
        event.waitUntil(syncData());
    }
});
```
{% endraw %}

### Push Notifications Communication
{% raw %}
```javascript
// Suscripción
const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: vapidPublicKey
});

// Envío desde servidor
await fetch('/api/push/send', {
    method: 'POST',
    body: JSON.stringify({
        subscription: subscription,
        data: { message: 'New data available' }
    })
});
```
{% endraw %}

## Comunicación en GraphQL

### Subscriptions para Comunicación en Tiempo Real
{% raw %}
```javascript
// Schema
type Subscription {
    messageAdded(channelId: ID!): Message
}

// Resolver
const resolvers = {
    Subscription: {
        messageAdded: {
            subscribe: withFilter(
                () => pubsub.asyncIterator(['MESSAGE_ADDED']),
                (payload, variables) => 
                    payload.messageAdded.channelId === variables.channelId
            )
        }
    }
};
```
{% endraw %}

### Apollo Client State Management
{% raw %}
```javascript
// Comunicación entre componentes via Apollo Cache
const GET_LOCAL_STATE = gql`
    query GetLocalState {
        cartItems @client
        userPreferences @client
    }
`;

// Mutación local
const ADD_TO_CART = gql`
    mutation AddToCart($product: Product!) {
        addToCart(product: $product) @client
    }
`;
```
{% endraw %}

## Comunicación en Serverless

### Function-to-Function Communication
{% raw %}
```javascript
// AWS Lambda invocation
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

const result = await lambda.invoke({
    FunctionName: 'image-processor',
    InvocationType: 'Event', // Async
    Payload: JSON.stringify({ imageUrl, operations })
}).promise();
```
{% endraw %}

### Event Bridge Patterns
{% raw %}
```javascript
// Publicar evento
await eventBridge.putEvents({
    Entries: [{
        Source: 'order.service',
        DetailType: 'OrderCreated',
        Detail: JSON.stringify(order),
        EventBusName: 'default'
    }]
}).promise();
```
{% endraw %}

## Comunicación en WebSockets Avanzado

### Room-based Communication
{% raw %}
```javascript
// Socket.io rooms
io.on('connection', (socket) => {
    socket.join('room-' + userId);
    
    // Enviar a room específica
    io.to('room-' + userId).emit('private-message', message);
    
    // Broadcasting
    socket.broadcast.to('room-' + roomId).emit('user-joined', user);
});
```
{% endraw %}

### Connection Pooling y Load Balancing
{% raw %}
```javascript
// Sticky sessions para WebSocket load balancing
const io = require('socket.io')(server, {
    adapter: redisAdapter({ host: 'redis-host', port: 6379 })
});

// Health checks
setInterval(() => {
    socket.emit('ping', { timestamp: Date.now() });
}, 30000);
```
{% endraw %}

## Comunicación para E-commerce en Tiempo Real

### Real-time Inventory Updates
{% raw %}
```javascript
// WebSocket para actualizaciones de inventario
socket.on('inventory-update', (data) => {
    updateProductStock(data.productId, data.newStock);
    showLowStockWarningIfNeeded(data);
});

// Redis pub/sub para sincronización entre instancias
redisSubscriber.subscribe('inventory-channel');
redisSubscriber.on('message', (channel, message) => {
    if (channel === 'inventory-channel') {
        handleInventoryUpdate(JSON.parse(message));
    }
});
```
{% endraw %}

### Shopping Cart Sync
{% raw %}
```javascript
// Sincronización de carrito entre dispositivos
class CartSync {
    async syncCart(userId, cartData) {
        // Conflict resolution
        const serverCart = await getServerCart(userId);
        const mergedCart = this.mergeCarts(serverCart, cartData);
        
        // Broadcast a otros dispositivos
        this.broadcastToUserDevices(userId, 'cart-updated', mergedCart);
        return mergedCart;
    }
}
```
{% endraw %}

## Comunicación para Analytics y Monitoring

### Real User Monitoring (RUM)
{% raw %}
```javascript
// Performance metrics collection
const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach(entry => {
        sendMetricToBackend({
            type: 'performance',
            name: entry.name,
            value: entry.duration,
            timestamp: Date.now()
        });
    });
});

observer.observe({ entryTypes: ['measure', 'navigation'] });
```
{% endraw %}

### Error Tracking Communication
{% raw %}
```javascript
// Global error handler
window.addEventListener('error', (event) => {
    sendErrorToService({
        message: event.message,
        stack: event.error.stack,
        url: event.filename,
        line: event.lineno,
        column: event.colno,
        userAgent: navigator.userAgent
    });
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    sendErrorToService({
        type: 'promise-rejection',
        reason: event.reason
    });
});
```
{% endraw %}

# Fundamentos de Comunicación entre Procesos - Temas Clave No Cubiertos

## Modelos Teóricos Fundamentales

### Modelo de Pase de Mensajes (Actor Model)
{% raw %}
```erlang
% Ejemplo conceptual en estilo Erlang
actor_process(State) ->
    receive
        {add, Value} ->
            NewState = State + Value,
            actor_process(NewState);
        {get, Pid} ->
            Pid ! {result, State},
            actor_process(State);
        stop ->
            ok
    end.
```
{% endraw %}

### Modelo de Memoria Compartida
- **Consistencia Sequential**: Memoria como si fuera secuencial
- **Consistencia Causal**: Preservación del orden causal
- **Consistencia eventual**: Convergencia sin garantías temporales

## Constructores de Sincronización Avanzados

### Barreras de Sincronización
{% raw %}
```c
pthread_barrier_t barrier;

// Inicialización
pthread_barrier_init(&barrier, NULL, NUM_THREADS);

// Uso en threads
void* worker(void* arg) {
    // Trabajo antes de la barrera
    work_before();
    
    // Esperar a todos los threads
    pthread_barrier_wait(&barrier);
    
    // Trabajo después de la barrera
    work_after();
}
```
{% endraw %}

### Monitores y Variables de Condición
{% raw %}
```java
public class BoundedBuffer<T> {
    private final T[] buffer;
    private int count = 0, in = 0, out = 0;
    
    public synchronized void put(T item) throws InterruptedException {
        while (count == buffer.length) {
            wait();  // Esperar hasta que haya espacio
        }
        buffer[in] = item;
        in = (in + 1) % buffer.length;
        count++;
        notifyAll();  // Notificar a consumidores
    }
}
```
{% endraw %}

## Patrones Arquitectónicos de Comunicación

### Arquitectura Reactor
{% raw %}
```cpp
class Reactor {
    std::map<int, EventHandler*> handlers;
    Selector selector;
    
public:
    void register_handler(int handle, EventHandler* handler) {
        handlers[handle] = handler;
        selector.register(handle);
    }
    
    void event_loop() {
        while (true) {
            auto ready_handles = selector.select();
            for (auto handle : ready_handles) {
                handlers[handle]->handle_event();
            }
        }
    }
};
```
{% endraw %}

### Patrón Proactor
- **Iniciación asíncrona**: Operaciones iniciadas asíncronamente
- **Completación manejada**: Callbacks para manejar completación
- **Overlap E/S y procesamiento**: Solapamiento de operaciones

## Protocolos de Consenso Distribuido

### Paxos Algorithm
- **Fases**: Prepare, Promise, Accept, Learn
- **Quorums**: Mayorías para tomar decisiones
- **Líder**: Optimización mediante líder

### Raft Consensus
{% raw %}
```go
type RaftNode struct {
    currentTerm int
    votedFor    int
    log         []LogEntry
    state       NodeState // Follower, Candidate, Leader
}

func (r *RaftNode) startElection() {
    r.currentTerm++
    r.state = Candidate
    // Solicitar votos a otros nodos
    for _, peer := range r.peers {
        go r.requestVote(peer)
    }
}
```
{% endraw %}

## Comunicación en Sistemas de Tiempo Real

### Priority Inversion Solutions
- **Priority Inheritance**: Herencia temporal de prioridades
- **Priority Ceiling Protocol**: Techos de prioridad para recursos
- **Immediate Inheritance**: Herencia inmediata

### Rate Monotonic Analysis
- **Prioridad por periodo**: Tareas con periodo más corto = mayor prioridad
- **Test de schedulability**: Análisis de factibilidad
- **Utilización límite**: Límite teórico de utilización

## Comunicación para Tolerancia a Fallos

### Checkpointing y Recovery
- **Checkpoint consistente**: Estado consistente del sistema
- **Rollback recovery**: Retroceso a checkpoint anterior
- **Message logging**: Registro de mensajes para recuperación

### Byzantine Fault Tolerance
{% raw %}
```python
class ByzantineAgreement:
    def __init__(self, nodes, f):
        self.nodes = nodes
        self.f = f  # Máximo nodos faulty
        
    def agree(self, value):
        # Fase de pre-prepare
        # Fase de prepare  
        # Fase de commit
        return self._reach_consensus(value)
```
{% endraw %}

## Modelos de Consistencia de Datos

### Modelos de Consistencia
- **Linearizability**: Orden total de operaciones
- **Sequential Consistency**: Orden consistente por proceso
- **Causal Consistency**: Preservación de relaciones causales

### Conflict-free Replicated Data Types (CRDTs)
{% raw %}
```rust
#[derive(Debug, Clone)]
struct GSet<T> {
    elements: HashSet<T>,
}

impl<T: Eq + Hash + Clone> GSet<T> {
    fn add(&mut self, element: T) {
        self.elements.insert(element);
    }
    
    fn merge(&mut self, other: &GSet<T>) {
        self.elements.extend(other.elements.iter().cloned());
    }
}
```
{% endraw %}

## Comunicación en Sistemas de Memoria Distribuida

### Distributed Shared Memory (DSM)
- **Coherencia de caché**: Mantenimiento de coherencia
- **Protocolos de invalidación**: Invalidación de copias
- **Protocolos de actualización**: Actualización de copias

### NUMA Architecture Communication
- **Local vs Remote Memory**: Acceso a memoria local/remota
- **Affinity Scheduling**: Programación considerando afinidad
- **Memory Migration**: Migración de páginas entre nodos

## Comunicación para Stream Processing

### Backpressure Mechanisms
{% raw %}
```java
public class BackpressureQueue<T> {
    private final Queue<T> queue;
    private final int capacity;
    private final Semaphore semaphore;
    
    public void put(T item) throws InterruptedException {
        semaphore.acquire();  // Esperar si está lleno
        synchronized (this) {
            queue.add(item);
        }
    }
    
    public T take() {
        T item;
        synchronized (this) {
            item = queue.poll();
        }
        if (item != null) {
            semaphore.release();  // Liberar espacio
        }
        return item;
    }
}
```
{% endraw %}

### Watermarks en Stream Processing
- **Event Time**: Tiempo de los eventos
- **Watermark Generation**: Generación de marcas de agua
- **Late Data Handling**: Manejo de datos tardíos

## Comunicación en Sistemas de Archivos Distribuidos

### Distributed File System Protocols
- **NFS**: Network File System
- **CIFS/SMB**: Common Internet File System
- **Cluster File Systems**: Sistemas para clusters

### Consistency Models en DFS
- **Session Semantics**: Consistencia por sesión
- **Immutable Files**: Archivos inmutables
- **Leases**: Arrendamientos para caché

## Comunicación para Load Balancing

### Algorithmos de Distribución
- **Round Robin**: Distribución circular
- **Least Connections**: Menor número de conexiones
- **Consistent Hashing**: Hashing consistente para redistribución mínima

### Health Checking y Failover
{% raw %}
```go
type HealthChecker struct {
    targets    []string
    timeouts   map[string]time.Duration
    failures   map[string]int
    threshold  int
}

func (h *HealthChecker) checkTarget(target string) bool {
    resp, err := http.Get(target + "/health")
    if err != nil || resp.StatusCode != 200 {
        h.failures[target]++
        return h.failures[target] < h.threshold
    }
    h.failures[target] = 0
    return true
}
```
{% endraw %}

## Comunicación en Sistemas de Bases de Datos Distribuidas

### Two-Phase Commit (2PC)
{% raw %}
```sql
-- Fase 1: Prepare
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- Marcar como preparado

-- Fase 2: Commit/Rollback
-- Si todos prepararon: COMMIT
-- Si alguno falló: ROLLBACK
```
{% endraw %}

### Replication Protocols
- **Primary-Backup**: Réplicas primaria-secundaria
- **Multi-Master**: Múltiples maestros
- **Chain Replication**: Replicación en cadena

## Comunicación para Service Mesh

### Sidecar Pattern
{% raw %}
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
  - name: app
    image: my-app:latest
  - name: sidecar
    image: envoy:latest
    # Maneja toda la comunicación de red
```
{% endraw %}

### Traffic Management
- **Traffic Splitting**: División de tráfico
- **Fault Injection**: Inyección de fallos para testing
- **Circuit Breaking**: Abrir circuito ante fallos

## Comunicación en Serverless Computing

### Cold Start Communication
- **Initialization Hooks**: Ganchos de inicialización
- **Pooling Strategies**: Estrategias de agrupamiento
- **Warm-up Requests**: Peticiones de calentamiento

### Function Chaining
{% raw %}
```javascript
// Ejemplo AWS Step Functions
const stepFunction = new StepFunctions();
const execution = await stepFunction.startExecution({
    stateMachineArn: 'arn:aws:states...',
    input: JSON.stringify({ data: inputData })
}).promise();
```
{% endraw %}

## Comunicación para Observabilidad

### Distributed Tracing Context Propagation
{% raw %}
```java
public class TracingInterceptor implements ClientInterceptor {
    @Override
    public <ReqT, RespT> ClientCall<ReqT, RespT> interceptCall(
            MethodDescriptor<ReqT, RespT> method,
            CallOptions callOptions, Channel next) {
        
        // Propagar headers de tracing
        String traceId = Tracing.getCurrentTraceId();
        String spanId = Tracing.getCurrentSpanId();
        
        return new ForwardingClientCall.SimpleForwardingClientCall<ReqT, RespT>(
            next.newCall(method, callOptions)) {
            @Override
            public void start(Listener<RespT> responseListener, Metadata headers) {
                headers.put(Tracing.TRACE_HEADER, traceId);
                headers.put(Tracing.SPAN_HEADER, spanId);
                super.start(responseListener, headers);
            }
        };
    }
}
```
{% endraw %}

### Metrics Collection y Aggregation
- **Push vs Pull**: Modelos de colección de métricas
- **Dimensional Metrics**: Métricas dimensionales
- **Histograms y Summaries**: Agregaciones estadísticas


# Glosario: Comunicación entre Procesos

## 🔄 Modelos y Arquitecturas

**Actor Model**  
Modelo de concurrencia donde "actores" se comunican exclusivamente mediante mensajes asíncronos sin estado compartido.

**Arquitectura Reactor**  
Patrón de diseño para manejar peticiones concurrentes de forma desmultiplexada y despachada a handlers.

**Arquitectura Proactor**  
Patrón para operaciones asíncronas donde la iniciación y completación están separadas.

**Microservicios**  
Arquitectura donde aplicaciones se componen de servicios pequeños e independientes que se comunican via APIs.

**Service Mesh**  
Infraestructura dedicada para manejar comunicación entre microservicios mediante sidecar proxies.

## 📡 Mecanismos de IPC

**Memoria Compartida**  
Región de memoria accesible por múltiples procesos, requiere sincronización.

**Tuberías (Pipes)**  
Canal unidireccional que conecta salida de un proceso con entrada de otro.

**Sockets**  
Endpoint para comunicación bidireccional entre procesos, misma máquina o diferentes.

**Colas de Mensajes**  
Comunicación asíncrona mediante mensajes en estructura FIFO o con prioridades.

**Semáforos**  
Mecanismo de sincronización que controla acceso a recursos compartidos.

**Señales**  
Notificaciones asíncronas enviadas a procesos para indicar eventos.

## 🌐 Protocolos y Estándares

**TCP**  
Protocolo orientado a conexión, confiable, con control de flujo y congestión.

**UDP**  
Protocolo sin conexión, más rápido pero sin garantías de entrega.

**gRPC**  
Framework RPC de alto rendimiento usando HTTP/2 y Protocol Buffers.

**HTTP/REST**  
Protocolo de aplicación para comunicación web basado en solicitud-respuesta.

**WebSockets**  
Protocolo para comunicación bidireccional en tiempo real sobre TCP.

**MQTT**  
Protocolo ligero de mensajería publish-subscribe para IoT.

## ⚡ Patrones de Comunicación

**Cliente-Servidor**  
Arquitectura donde cliente solicita servicios y servidor los provee.

**Publicador-Suscriptor**  
Patrón desacoplado donde publicadores envían mensajes a tópicos y suscriptores los reciben.

**Producer-Consumer**  
Patrón donde productores generan datos y consumidores los procesan mediante cola compartida.

**Pipeline**  
Cadena de procesos donde salida de uno es entrada del siguiente.

**Circuit Breaker**  
Patrón que previene llamadas a servicios fallidos, permitiendo recovery.

## 🔒 Sincronización y Consenso

**Mutex**  
Mecanismo de exclusión mutua para proteger recursos compartidos.

**Monitores**  
Constructores de alto nivel que encapsulan sincronización y datos compartidos.

**Barreras**  
Puntos de sincronización donde threads esperan hasta que todos lleguen.

**Paxos**  
Algoritmo de consenso para sistemas distribuidos tolerante a fallos.

**Raft**  
Algoritmo de consenso más entendible que Paxos, con líder y log replicado.

## 🏗️ Construcciones Avanzadas

**Web Workers**  
API de navegador para ejecutar scripts en background threads.

**Service Workers**  
Proxy entre navegador y red para manejar cache y requests.

**Memory-Mapped Files**  
Técnica que mapea archivos a memoria virtual para acceso eficiente.

**RDMA**  
Remote Direct Memory Access - transferencia directa memoria a memoria sin CPU.

**CRDTs**  
Tipos de datos replicados sin conflictos para sistemas distribuidos.

## 🎯 Dominios Especializados

**Sistemas de Tiempo Real**  
Comunicación con garantías temporales estrictas y determinismo.

**Edge Computing**  
Procesamiento y comunicación cerca del origen de datos.

**High-Frequency Trading**  
Comunicación ultra baja latencia para mercados financieros.

**Federated Learning**  
Entrenamiento ML distribuido sin compartir datos sensibles.

**Blockchain**  
Comunicación P2P con consenso distribuido y inmutabilidad.

## 🛡️ Seguridad y Resiliencia

**mTLS**  
Mutual TLS - autenticación bidireccional con certificados.

**OAuth 2.0**  
Framework de autorización para acceso delegado.

**Rate Limiting**  
Control de frecuencia de requests para prevenir abuso.

**Health Checking**  
Monitoreo continuo de disponibilidad de servicios.

**Load Balancing**  
Distribución de carga entre múltiples instancias de servicio.

## 📊 Observabilidad y Monitoreo

**Distributed Tracing**  
Seguimiento de requests a través de múltiples servicios.

**Metrics Collection**  
Recolección y agregación de métricas de performance.

**Log Aggregation**  
Centralización y análisis de logs distribuidos.

**APM**  
Application Performance Monitoring - monitoreo de performance de aplicaciones.

## 🚀 Optimización y Performance

**Connection Pooling**  
Reutilización de conexiones para reducir overhead.

**Caching**  
Almacenamiento temporal de datos para acceso rápido.

**Compresión**  
Redución de tamaño de datos para transmisión eficiente.

**Batch Processing**  
Procesamiento por lotes para mejorar throughput.

**Lazy Loading**  
Carga bajo demanda de recursos para mejor performance inicial.

## 🔄 Técnicas de Comunicación Web

**Server-Sent Events**  
Comunicación unidireccional servidor→cliente sobre HTTP.

**Long Polling**  
Técnica donde cliente mantiene conexión abierta esperando respuesta del servidor.

**WebRTC**  
Comunicación peer-to-peer en tiempo real para audio/video.

**GraphQL Subscriptions**  
Comunicación en tiempo real en GraphQL mediante WebSockets.

## 🏭 Sistemas Distribuidos

**Sharding**  
Particionamiento horizontal de datos across múltiples nodos.

**Replication**  
Copiado de datos across múltiples nodos para redundancia.

**Consistent Hashing**  
Distribución de datos que minimiza reorganización en cambios de cluster.

**Leader Election**  
Selección de coordinador en sistemas distribuidos.

## 🔧 Herramientas y Tecnologías

**Docker Networking**  
Sistemas de red para comunicación entre containers.

**Kubernetes Services**  
Abstracción para descubrimiento y load balancing en clusters.

**Apache Kafka**  
Plataforma de streaming para procesamiento en tiempo real.

**Redis Pub/Sub**  
Sistema de mensajería publish-subscribe en memoria.

**Envoy Proxy**  
Proxy de alta performance para service mesh.

## 📈 Conceptos de Performance

**Latencia**  
Tiempo que toma para un mensaje viajar de origen a destino.

**Throughput**  
Cantidad de mensajes procesados por unidad de tiempo.

**Concurrencia**  
Número de conexiones o requests manejados simultáneamente.

**Escalabilidad**  
Capacidad del sistema para manejar crecimiento de carga.

## 🛠️ Técnicas de Desarrollo

**Serialización**  
Conversión de estructuras de datos a formato transferible.

**Marshalling**  
Empaquetado de parámetros para llamadas remotas.

**Stub/Skeleton**  
Código generado que maneja comunicación en RPC.

**Service Discovery**  
Mecanismo automático para encontrar servicios en red.