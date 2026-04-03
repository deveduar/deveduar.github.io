---
date: 2025-01-29 17:19
title: websockets
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Backend
tags:
  - websockets
  - protocolo
  - backend
---
# WebSockets

- [Backend](/backend/backend/)
- [Protocolos](/redes/protocolos/)
- [Sockets](/backend/sockets/)
- notificaciones, chat, streaming
- tiempo real
- protocolo TCP

## Concepto general
WebSockets es un protocolo de comunicación que permite la interacción bidireccional en tiempo real entre un cliente (como un navegador) y un servidor. A diferencia de HTTP, que es unidireccional y requiere múltiples solicitudes para obtener actualizaciones, WebSockets mantiene una conexión persistente abierta.

## Características principales
- Comunicación bidireccional (full-duplex).
- Baja latencia en la transmisión de datos.
- Permite enviar y recibir mensajes de manera simultánea.
- Ideal para aplicaciones que requieren tiempo real: chat, notificaciones, streaming, juegos en línea.

## Protocolo
- Basado en TCP.
- Comienza con un handshake HTTP/HTTPS para establecer la conexión.
- Una vez establecida, se mantiene abierta hasta que cliente o servidor decidan cerrarla.
- Mensajes transmitidos en formato de "frames" (text o binary).

## Usos comunes
- Chat en tiempo real.
- Notificaciones push en aplicaciones web.
- Streaming de datos (ejemplo: cotizaciones financieras, eventos deportivos).
- Juegos multijugador en línea.
- Monitoreo en tiempo real de sensores o dispositivos IoT.

## Ventajas
- Reducción de sobrecarga en comparación con polling HTTP.
- Conexión persistente permite ahorro de recursos.
- Actualización instantánea de datos entre cliente y servidor.

## Ejemplo de implementación en JavaScript (Cliente)
### Cliente
{% raw %}
```javascript
const socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => {
	console.log("Conexión abierta");
	socket.send("Hola servidor");
};

socket.onmessage = (event) => {
	console.log("Mensaje del servidor:", event.data);
};

socket.onclose = () => {
	console.log("Conexión cerrada");
};

socket.onerror = (error) => {
	console.error("Error en WebSocket:", error);
};
```
{% endraw %}`

### Servidor Node.js

{% raw %}
```javascript
const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
	console.log("Cliente conectado");

	socket.on("message", (message) => {
		console.log("Mensaje recibido:", message);
		socket.send(`Echo: ${message}`);
	});

	socket.on("close", () => {
		console.log("Cliente desconectado");
	});
});
```
{% endraw %}

## Buenas prácticas

* Manejar reconexiones automáticas en caso de caída de la conexión.
* Controlar el tamaño y la frecuencia de los mensajes para evitar saturar la red.
* Implementar autenticación y autorización antes de abrir la conexión.
* Usar subprotocolos si se requiere estandarización de mensajes específicos.

## Recursos y referencias
* [RFC 6455: The WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455)
* [Documentación MDN WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)


# WebSockets — conceptos ampliados

## Handshake y actualización de protocolo
El protocolo WebSocket inicia con un **Upgrade Request** desde HTTP/HTTPS:
- El cliente envía un encabezado `Upgrade: websocket` y `Connection: Upgrade`.
- El servidor acepta con `101 Switching Protocols`.
- Tras este punto, la conexión deja de ser HTTP y se convierte en WebSocket.
- Permite autenticación previa usando cookies, tokens JWT o encabezados personalizados.

## Subprotocolos
Los WebSockets permiten negociar subprotocolos para estructurar la comunicación:
- Ejemplos: `graphql-ws`, `wamp`, `json-rpc`.
- Útiles cuando se requiere un **contrato de mensajes estándar** entre cliente y servidor.
- Se negocian durante el handshake.

## Gestión de estado de conexión
Para aplicaciones en tiempo real es esencial manejar el ciclo de vida:
- *Keep-Alive*: uso de ping/pong para detectar desconexión.
- *Heartbeat*: intervalos definidos para comprobar actividad.
- *Backoff* exponencial al reconectar para evitar tormentas de solicitudes.

## Mensajería binaria y fragmentación
Además del texto:
- Envío de **frames binarios** para archivos, audio, blobs o mensajes compactos.
- Fragmentación automática: permite dividir mensajes grandes en frames más pequeños.
- Optimización para streaming de voz, vídeo o sensores IoT.

## Escalabilidad en backend
En sistemas productivos se deben manejar múltiples conexiones:
- Balanceo con sticky sessions o usando un *message broker*.
- Arquitectura típica:
	- WebSocket server ↔ Message Broker (Redis, NATS, Kafka) ↔ Servicios internos.
- Permite difundir mensajes a miles o millones de clientes simultáneamente.
- Uso de *pub/sub* para canales de chat, salas, dashboards, etc.

## Seguridad y cifrado
- WebSockets seguros usan **WSS** sobre TLS.
- Medidas recomendadas:
	- Validación de origen (`Origin` header).
	- Tokens de corta duración.
	- Rate limiting por usuario.
	- Filtrado de mensajes inválidos para evitar inyección o abuso.
- Importante para evitar conexiones no autorizadas al canal.

## Patrón de rooms o channels
Amplio en chats, juegos o apps colaborativas:
- Permite que cada cliente se suscriba solo a los canales relevantes.
- Los mensajes se transmiten únicamente a los miembros del grupo.
- Facilita segmentar la carga del servidor.

## Integración con HTTP/REST
Aunque WebSockets reemplazan al polling:
- Suelen convivir con API REST o [GraphQL](/backend/graphql/) para:
	- Autenticación
	- Carga inicial de datos
	- Envío de archivos o peticiones complejas
- WebSockets se limitan a **eventos y actualizaciones de estado**.

## Interoperabilidad con otros protocolos
WebSockets se combina con:
- SSE (Server-Sent Events) para notificaciones unidireccionales.
- WebRTC para transmisión multimedia, donde WebSockets puede actuar como:
	- Canal de señalización (*signaling channel*).
	- Coordinación de peers antes de establecer conexión P2P.

## Patrones avanzados de uso
- **Estado compartido**: múltiples usuarios editando un documento en tiempo real.
- **Sincronización distribuida**: dashboards financieros, métricas, IoT.
- **Streaming incremental**: envío progresivo de datos que se actualizan en vivo.
- **Procesamiento reactivo** usando librerías como RxJS o frameworks de eventos.

## Ejemplo: implementación con autenticación JWT
### Servidor Node.js — handshake validado
{% raw %}
```javascript
const WebSocket = require("ws");
const jwt = require("jsonwebtoken");

const server = new WebSocket.Server({
	verifyClient: ({ req }, done) => {
		try {
			const token = req.headers["sec-websocket-protocol"];
			jwt.verify(token, "mi_secreto");
			done(true);
		} catch {
			done(false, 401, "Unauthorized");
		}
	}
});
```
{% endraw %}`

### Cliente

{% raw %}
```javascript
const token = "mi.jwt.token";
const socket = new WebSocket("wss://miapp.com", token);
```
{% endraw %}

## Monitoreo y logging

- Métricas clave:
    - Nº conexiones activas
    - Mensajes por segundo
    - Latencia de broadcast
    - Errores de handshake
- Herramientas comunes: Prometheus, Grafana, Elastic APM.

## Testing

- Simulación de miles de conexiones con herramientas como:
    - wsloader
    - artillery
    - vegeta (HTTP + WebSocket en algunos modos)
- Testing de integración con servidores reales mediante scripts Node o Python.

## Alternativas y comparación

- **WebSockets**
    - bidireccional, persistente, muy flexible.
- **SSE**
    - solo servidor → cliente, más ligero, ideal para notificaciones.
- **Polling/Long Polling**
    - compatible con todo, pero menos eficiente.
- **WebRTC**
    - multimedia y P2P, no sustituye WebSockets.

## Recursos adicionales

- [WebSocket Compression (RFC 7692)](https://datatracker.ietf.org/doc/html/rfc7692)
- [WebSocket Extensions](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#extensions)