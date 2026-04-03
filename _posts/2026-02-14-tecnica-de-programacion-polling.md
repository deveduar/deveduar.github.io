---
date: 2026-02-14 15:17
title: tecnica de programacion polling
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
aliases:
public_note: true
category: Backend
tags:
  - polling
  - backend
---
# Técnica de Programación: Polling

- [Computer Science](/computer%20science/computer-science/)
- [gestor de colas](/backend/gestor-de-colas/)
- [angular](/frontend/angular/)
- [Backend](/backend/backend/)
- [websockets](/backend/websockets/)
- [Sockets](/backend/sockets/)
- [api](/backend/api/)

## Definición

El **polling** es una técnica de comunicación en la que un cliente consulta repetidamente a un servidor para verificar si existe nueva información disponible. En lugar de que el servidor envíe datos automáticamente cuando ocurre un evento, el cliente realiza solicitudes periódicas en intervalos definidos.

Es un mecanismo común en arquitecturas cliente-servidor cuando no se dispone de tecnologías como WebSockets o cuando se requiere una solución simple y controlada.

## Funcionamiento General

1. El cliente envía una petición HTTP al servidor.
2. El servidor responde con el estado actual o los datos solicitados.
3. El cliente espera un intervalo determinado.
4. El cliente vuelve a realizar la petición.
5. El ciclo se repite hasta que:
	- Se obtiene la información deseada.
	- Se cancela el proceso.
	- Ocurre un error.
	- Se alcanza un límite de intentos.

## Tipos de Polling

### Short Polling

El cliente realiza solicitudes a intervalos fijos (por ejemplo, cada 5 segundos), independientemente de si hay nuevos datos.

Características:
- Implementación sencilla.
- Mayor consumo de recursos si el intervalo es muy corto.
- Latencia dependiente del intervalo configurado.

### Long Polling

El cliente envía una petición y el servidor mantiene la conexión abierta hasta que:
- Hay nueva información disponible.
- Se alcanza un timeout.

Después de recibir la respuesta, el cliente vuelve a iniciar la petición inmediatamente.

Ventajas:
- Reduce solicitudes innecesarias.
- Menor latencia que el short polling.
- Simula comportamiento en tiempo real sin WebSockets.

## Casos de Uso

- Actualización de estados de procesos en [Backend](/backend/backend/).
- Consulta periódica de tareas en un [gestor de colas](/backend/gestor-de-colas/).
- Refresco de notificaciones en aplicaciones web.
- Verificación de progreso en cargas o procesos largos.
- Sincronización simple entre cliente y servidor.

## Ejemplo en [angular](/frontend/angular/)

### Implementación con RxJS y interval

{% raw %}
```ts
import { interval, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

constructor(private http: HttpClient) {}

startPolling() {
  interval(5000)
    .pipe(
      switchMap(() => this.http.get('/api/status'))
    )
    .subscribe(response => {
      console.log(response);
    });
}
```
{% endraw %}`

Explicación:

- `interval(5000)` genera un evento cada 5 segundos.
- `switchMap` ejecuta la petición HTTP en cada intervalo.
- Se puede combinar con `takeUntil` para cancelar el polling.
- Es recomendable manejar errores con `catchError`.

## Control y Optimización

### Intervalo de Consulta

La frecuencia debe balancear:
- Tiempo de respuesta deseado.
- Consumo de recursos del servidor.
- Consumo de red.

Un intervalo demasiado corto puede saturar el sistema.

### Cancelación

Es importante detener el polling cuando:
- El componente se destruye.
- El usuario abandona la vista.
- Se obtiene el resultado esperado.

### Backoff Exponencial

En caso de error:
- Aumentar progresivamente el intervalo.
- Evitar sobrecargar el servidor si está fallando.

Ejemplo conceptual:

- 1s → 2s → 4s → 8s.

## Comparación con Otras Técnicas

|Técnica|Comunicación|Latencia|Complejidad|Uso Ideal|
|---|---|---|---|---|
|Polling|Cliente → Servidor|Media|Baja|Sistemas simples|
|Long Polling|Cliente → Servidor (bloqueante)|Baja|Media|Casi tiempo real|
|WebSockets|Bidireccional|Muy baja|Alta|Tiempo real continuo|
|Server-Sent Events|Servidor → Cliente|Baja|Media|Notificaciones push|

## Ventajas

- Implementación sencilla.
- Compatible con HTTP estándar.
- No requiere infraestructura especial.
- Fácil de integrar en arquitecturas tradicionales.

## Desventajas

- Puede generar tráfico innecesario.
- No es verdaderamente en tiempo real.
- Escalabilidad limitada si hay muchos clientes.
- Mayor carga en el [Backend](/backend/backend/) si no se optimiza correctamente.

## Buenas Prácticas

- Definir claramente la condición de finalización.
- Usar long polling cuando sea posible.
- Implementar backoff en errores.
- Registrar métricas de uso.
- Integrarlo adecuadamente con un [gestor de colas](/backend/gestor-de-colas/) cuando se consulte el estado de tareas asíncronas.
- Evaluar alternativas como WebSockets si el sistema requiere alta frecuencia de eventos.

## Consideraciones Arquitectónicas

El polling suele aparecer en sistemas distribuidos donde:
- El procesamiento es asíncrono.
- Existen workers desacoplados.
- Se consulta el estado de procesos largos.
- Se requiere simplicidad antes que sofisticación.

En [Computer Science](/computer%20science/computer-science/), el polling representa un modelo de espera activa (active waiting) desde la perspectiva del cliente, aunque a nivel de red no necesariamente implica busy waiting en CPU.

Su correcta implementación depende del equilibrio entre:

- Responsividad.
- Consumo de recursos.
- Escalabilidad.

# Técnica de Programación: Polling (Ampliación y Profundización)

## Conceptos Avanzados No Cubiertos

### Polling Adaptativo

El **polling adaptativo** ajusta dinámicamente el intervalo de consulta según el contexto:

- Si el sistema está inactivo → intervalos más largos.
- Si se detecta actividad reciente → intervalos más cortos.
- Si hay errores → aplicar backoff exponencial.
- Si el usuario no está activo (pestaña oculta) → reducir frecuencia.

Esto mejora:
- Escalabilidad.
- Experiencia de usuario.
- Consumo de recursos en el [Backend](/backend/backend/).

Puede implementarse combinando:
- Eventos del navegador (`visibilitychange`).
- Métricas de respuesta.
- Estado interno de la aplicación.

---

### Polling Condicional (ETag / Last-Modified)

Para reducir carga innecesaria:

- El servidor devuelve un `ETag` o `Last-Modified`.
- El cliente envía `If-None-Match` o `If-Modified-Since`.
- El servidor responde `304 Not Modified` si no hubo cambios.

Ventajas:
- Reduce transferencia de datos.
- Mantiene simplicidad HTTP.
- Optimiza consumo en arquitecturas REST.

---

### Idempotencia y Consistencia

El polling debe diseñarse considerando:

- Operaciones idempotentes.
- Posibles respuestas duplicadas.
- Estados intermedios inconsistentes.
- Tolerancia a fallos de red.

En sistemas distribuidos:
- Puede existir latencia entre productor y consumidor.
- El estado puede estar “eventualmente consistente”.

Esto es común cuando se integra con un [gestor de colas](/backend/gestor-de-colas/).

---

## Profundización: Long Polling

### Flujo Interno del Long Polling

1. Cliente envía petición.
2. Servidor:
	- Si hay datos → responde inmediatamente.
	- Si no hay datos → bloquea la conexión.
3. Ocurre uno de los siguientes:
	- Se genera un evento → responde.
	- Se alcanza timeout → responde vacío.
4. Cliente vuelve a iniciar petición inmediatamente.

Este modelo reduce consultas innecesarias pero introduce:

- Conexiones abiertas prolongadas.
- Uso de hilos o async workers.
- Necesidad de infraestructura no bloqueante.

---

### Implementación en el Servidor

En un [Backend](/backend/backend/) moderno se recomienda:

- Servidores no bloqueantes (Node.js, async frameworks).
- Uso de event loops.
- Promesas o Futures.
- Control explícito de timeout.

Problema común:
- Si el servidor usa modelo thread-per-request, puede agotarse el pool de hilos.

---

### Manejo de Timeouts

Se deben definir:

- Timeout del servidor (ej: 30s).
- Timeout del cliente (ligeramente mayor).
- Estrategia de reconexión inmediata.

Evitar:
- Reconexiones masivas simultáneas (thundering herd problem).

---

## Long Polling vs WebSockets (Profundización Técnica)

Long Polling:
- Basado en HTTP tradicional.
- Stateless entre requests.
- Reconexión continua.
- Más simple para infraestructuras legacy.

WebSockets:
- Conexión persistente.
- Full duplex real.
- Requiere manejo de estado de conexión.
- Mejor para alta frecuencia de eventos.

Long polling es adecuado cuando:
- La frecuencia de eventos es baja o moderada.
- Se necesita compatibilidad universal.
- No se quiere infraestructura adicional.

---

## Integración con Arquitecturas Asíncronas

### Caso: Procesamiento en [gestor de colas](/backend/gestor-de-colas/)

Escenario típico:

1. Cliente envía petición de procesamiento.
2. [Backend](/backend/backend/) coloca tarea en cola.
3. Worker procesa.
4. Cliente hace long polling consultando:
	- Estado (pending / processing / done / failed).
	- Resultado parcial.
	- Resultado final.

Este patrón desacopla:
- Frontend.
- API.
- Workers.

---

## Escalabilidad y Long Polling

Problemas potenciales:

- Miles de conexiones abiertas.
- Consumo de memoria por conexión.
- Balanceadores de carga con timeouts.
- Reverse proxies (NGINX) cerrando conexiones.

Buenas prácticas:

- Ajustar keep-alive.
- Configurar correctamente proxy timeouts.
- Usar arquitectura event-driven.
- Limitar número máximo de conexiones concurrentes.

---

## Seguridad en Polling

Aspectos críticos:

- Autenticación en cada request.
- Tokens con expiración.
- Prevención de abuso (rate limiting).
- Protección contra DDoS.

En long polling:
- Validar credenciales antes de bloquear conexión.
- Cancelar conexiones si el token expira.

---

## Observabilidad

Para sistemas productivos se recomienda medir:

- Número de conexiones activas.
- Latencia promedio.
- Tiempo promedio hasta evento.
- Tasa de reconexión.
- Errores por timeout.

Esto permite decidir cuándo migrar a:
- WebSockets.
- Event-driven push.
- Server-Sent Events.

---

## Polling en Arquitecturas Modernas

En [Computer Science](/computer%20science/computer-science/), el polling se considera:

- Un mecanismo de sincronización externo.
- Una forma de coordinación distribuida.
- Un patrón de comunicación cliente-activo.

No es solo una técnica HTTP:
- Existe polling a nivel hardware.
- Existe polling en sistemas embebidos.
- Existe polling interno entre procesos.

En aplicaciones web modernas (incluyendo [angular](/frontend/angular/)), se mantiene vigente por:

- Simplicidad.
- Compatibilidad.
- Facilidad de implementación.
- Bajo costo conceptual.

---

## Cuándo NO usar Long Polling

Evitarlo cuando:

- Se requieren actualizaciones en milisegundos.
- Existen miles de eventos por segundo.
- Hay gran número de clientes concurrentes.
- Se necesita comunicación bidireccional constante.

En esos casos, WebSockets o arquitecturas basadas en eventos son más adecuadas.

---

## Conclusión Conceptual

El polling, y especialmente el long polling, es un punto intermedio entre:

- Sistemas completamente pasivos.
- Sistemas totalmente reactivos.

Su correcta aplicación depende de:

- Carga esperada.
- Frecuencia de eventos.
- Infraestructura disponible.
- Requisitos de latencia.
- Complejidad que se esté dispuesto a asumir.

No es una solución obsoleta: es una herramienta que debe usarse estratégicamente dentro del diseño de sistemas distribuidos.

# Polling: Ejemplos de Código y Casos de Uso

## Caso de Uso 1: Consultar Estado de Tarea Asíncrona

### Escenario

1. El cliente envía una solicitud para procesar un archivo.
2. El [Backend](/backend/backend/) encola la tarea en un [gestor de colas](/backend/gestor-de-colas/).
3. Un worker procesa el trabajo.
4. El cliente consulta periódicamente el estado.

Estados posibles:
- pending
- processing
- completed
- failed

---

## Backend (Node.js + Express) — Short Polling

### Endpoint de creación de tarea

{% raw %}
```js
app.post('/tasks', async (req, res) => {
  const taskId = createTaskInQueue(req.body);
  res.status(202).json({ taskId });
});
```
{% endraw %}`

---

### Endpoint de consulta de estado

{% raw %}
```js
app.get('/tasks/:id/status', async (req, res) => {
  const status = await getTaskStatus(req.params.id);
  res.json({ status });
});
```
{% endraw %}

---

## Frontend en [angular](/frontend/angular/) — Short Polling con RxJS

### Servicio de polling

{% raw %}
```ts
import { interval, switchMap, takeWhile } from 'rxjs';

startPolling(taskId: string) {
  return interval(3000).pipe(
    switchMap(() => this.http.get(`/api/tasks/${taskId}/status`)),
    takeWhile((response: any) => 
      response.status !== 'completed' && response.status !== 'failed', 
      true
    )
  );
}
```
{% endraw %}

Características:

* Consulta cada 3 segundos.
* Se detiene automáticamente cuando la tarea finaliza.
* Incluye la última respuesta gracias al `true` en `takeWhile`.

---

## Caso de Uso 2: Long Polling para Notificaciones

### Escenario

Un sistema de notificaciones donde el cliente espera hasta que haya un nuevo evento.

---

## Backend — Long Polling Básico

{% raw %}
```js
app.get('/notifications', async (req, res) => {
  const timeout = 30000; // 30 segundos

  const notification = await waitForNotification(req.user.id, timeout);

  if (notification) {
    res.json(notification);
  } else {
    res.status(204).end();
  }
});
```
{% endraw %}

`waitForNotification`:

* Espera hasta que haya evento.
* Resuelve cuando ocurre algo o se cumple timeout.

---

## Cliente JavaScript — Reconexión Inmediata

{% raw %}
```js
async function longPoll() {
  try {
    const response = await fetch('/api/notifications');
    if (response.status === 200) {
      const data = await response.json();
      console.log('Nueva notificación:', data);
    }

  } catch (err) {
    console.error('Error en long polling', err);
  }

  longPoll(); // Reinicia inmediatamente
}

longPoll();
```
{% endraw %}

Este patrón:

* Mantiene latencia baja.
* Reduce consultas innecesarias.
* Simula comportamiento en tiempo real.

---

## Caso de Uso 3: Polling con Backoff Exponencial

### Escenario

Servicio externo puede fallar temporalmente.

---

## Cliente con Backoff Manual

{% raw %}
```js
let delay = 1000;

async function pollWithBackoff() {
  try {
    const response = await fetch('/api/status');
    if (!response.ok) throw new Error('Error');

    const data = await response.json();
    console.log(data);

    delay = 1000; // Reset si éxito

  } catch (err) {
    delay = Math.min(delay * 2, 30000);
  }

  setTimeout(pollWithBackoff, delay);
}

pollWithBackoff();
```
{% endraw %}

Ventajas:

* Evita saturar el [Backend](/backend/backend/).
* Maneja fallos temporales.
* Mejora resiliencia.

---

## Caso de Uso 4: Polling Condicional con ETag

### Backend con ETag

{% raw %}
```js
app.get('/resource', (req, res) => {
  const resource = getResource();
  const etag = generateETag(resource);

  if (req.headers['if-none-match'] === etag) {
    return res.status(304).end();
  }

  res.set('ETag', etag);
  res.json(resource);
});
```
{% endraw %}

---

### Cliente con Validación

{% raw %}
```js
let etag = null;

async function pollResource() {
  const headers = etag ? { 'If-None-Match': etag } : {};

  const response = await fetch('/api/resource', { headers });

  if (response.status === 200) {
    etag = response.headers.get('ETag');
    const data = await response.json();
    console.log(data);
  }

  setTimeout(pollResource, 5000);
}

pollResource();
```
{% endraw %}

Beneficios:

* Reduce transferencia innecesaria.
* Mantiene modelo HTTP puro.
* Optimiza recursos de red.

---

## Caso de Uso 5: Polling en Dashboard de Monitoreo

### Escenario

Panel que muestra:

* Métricas de sistema.
* Estado de workers.
* Longitud de cola en [gestor de colas](/backend/gestor-de-colas/).

---

## Ejemplo Simple

{% raw %}
```ts
interval(2000)
  .pipe(
    switchMap(() => this.http.get('/api/metrics'))
  )
  .subscribe(metrics => {
    this.cpu = metrics.cpu;
    this.memory = metrics.memory;
    this.queueSize = metrics.queueSize;
  });
```
{% endraw %}

Uso típico:

* Dashboards internos.
* Herramientas DevOps.
* Sistemas administrativos.

---

## Caso de Uso 6: Polling Controlado por Visibilidad

### Optimización por pestaña inactiva

{% raw %}
```js
let intervalId;

function startPolling() {
  intervalId = setInterval(() => {
    fetch('/api/data');
  }, 3000);
}

function stopPolling() {
  clearInterval(intervalId);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopPolling();
  } else {
    startPolling();
  }
});

startPolling();
```
{% endraw %}

Reduce:

* Consumo innecesario.
* Carga del [Backend](/backend/backend/).
* Uso de red.

---

## Patrones Combinados

En sistemas reales se suele combinar:

* Long polling para eventos críticos.
* Short polling para métricas.
* Backoff para resiliencia.
* Validación condicional con ETag.
* Cancelación al destruir componente en [angular](/frontend/angular/).

---

## Casos Donde Polling Es Ideal

* Procesos largos asincrónicos.
* Sistemas legacy sin WebSockets.
* Integraciones simples REST.
* Comunicación con workers desacoplados.
* Monitorización periódica.

---

## Casos Donde NO Es Ideal

* Chat en tiempo real de alta frecuencia.
* Streaming continuo de datos.
* Sistemas con miles de eventos por segundo.
* Comunicación bidireccional constante.

---

El polling no es solo una técnica básica: es un patrón arquitectónico de sincronización activa que, bien implementado, permite construir sistemas robustos y desacoplados en entornos distribuidos.

# Recursos Actualizados sobre Polling y Long Polling (2025–2026)

Este resumen recoge **recursos, artículos, tutoriales y explicaciones actualizadas hasta 2026** sobre técnicas de polling y long polling, con ejemplos de código, patrones prácticos, comparativas y recomendaciones para uso moderno en desarrollo web.

---

## 🧠 Introducciones y Conceptos (Explicaciones Modernas)

### Long Polling — Explicación y Comparación
- Explicación técnica de **long polling** como forma de reducir tráfico innecesario y acercarse a un comportamiento cercano al tiempo real usando HTTP tradicional. Incluye comparaciones con short polling y métricas de carga vs. latencia.  
[Long Polling – AlgoMaster](https://algomaster.io/learn/system-design/long-polling)

### Polling en Aplicaciones Web con RxJS ([angular](/frontend/angular/))
- Tutorial con **ejemplos de RxJS y Angular** para implementar polling que espera hasta que se cumpla una condición (por ejemplo un `status == true`) antes de terminar.  
[Polling in Angular using RxJS – Lorenzo Miscoli](https://lorenzomiscoli.com/polling-in-angular-using-rxjs/)

### Estrategias de Polling en Producción
- Artículo avanzado (noviembre 2025) con **patrones de uso de `RxJS interval()` para producción** que evitan peticiones redundantes, cancelan solicitudes aún activas y previenen fugas de memoria.  
[5 Genius Ways to Build a Polling Service Using RxJS – Medium](https://medium.com/@sourabhda1998/5-genius-ways-to-build-a-polling-service-using-rxjs-interval-that-actually-work-in-production-414cdccd1e35)

---

## 🧪 Ejemplos y Tutoriales (Código y Casos Reales)

### Curso Online de Polling y Long Polling
- Curso que incluye introducción y configuración de backend para *long polling*, ideal para casos como chats o notificaciones sin WebSockets.  
[Frontend Masters – Long Polling Overview](https://frontendmasters.com/courses/realtime/long-polling-overview-backend-setup/)

### Polling en Backend con NestJS
- Ejemplo de un **backend NestJS** que maneja tareas con polling para procesos largos (usa HTTP 202 y consultas de estado).  
[Data Polling on the Backend – Dev.to](https://dev.to/yevheniia_br/data-polling-on-the-backend-for-long-running-http-requests-nestjs-example-28jb)

### Ejemplo de Long Polling en React
- Guía paso a paso sobre cómo implementar *long polling* en un proyecto React manteniendo la petición abierta hasta que haya nuevos eventos.  
[Implementing Long Polling in React](https://rishandigital.com/reactjs/implementing-long-polling-in-react/)

---

## 🔁 Patrón y Alternativas

### Polling vs Event-Driven (Tendencia 2025–2026)
- Artículo que explica por qué **polling está siendo sustituido por arquitecturas event-driven** en muchas aplicaciones modernas (WebSockets, SSE, Kafka, etc.).  
[Why Polling Is Slowly Dying – Medium](https://medium.com/@chinmayshringi4/why-polling-is-slowly-dying-and-event-based-systems-are-taking-over-2025-8e9f94ca9b30)

### Técnicas Relacionadas

#### Comet / Reverse AJAX
- El patrón **Comet** consiste en mantener conexiones abiertas para simular “push” sobre HTTP; incluye long polling como una de las técnicas posibles.  
[Comet (programming) – Wikipedia](https://en.wikipedia.org/wiki/Comet_(programming))

---

## 📘 Repos y Ejemplos de Código

### GitHub — Servicio de Long Polling en Angular
- Ejemplo de un servicio en Angular que ejecuta polling cada 60 segundos usando `interval()`, `switchMap()` y `startWith()` para iniciar inmediatamente.  
[Angular Polling Service – Gist](https://gist.github.com/vkbharadwazkopalle/91813078a91d1f005beb7e6fadaf48c5)

> Este tipo de servicio puede reutilizarse en componentes para separar lógica de consulta de UI.

---

## 🛠️ Mejores Prácticas y Patrones (2025)

### Polling con Backoff Exponencial
- Estrategias modernas de **backoff exponencial y polling adaptativo** para reducir carga cuando no hay datos nuevos.  
[Modern JavaScript Polling – Medium](https://medium.com/tech-pulse-by-collatzinc/modern-javascript-polling-adaptive-strategies-that-actually-work-part-1-9909f5946730)

### Polling Sensible a Visibilidad
- Uso de `document.visibilityState` para reducir consumo cuando la pestaña está inactiva.

### Cuándo Evitar Polling
- Sistemas de alta frecuencia (chat en tiempo real, gaming, feeds en vivo) donde WebSockets o SSE son preferibles para reducir latencia y carga del servidor.

---

## 📚 Lecturas y Videos Recomendados

### Polling Explicado en Video
- Resumen en video del uso de polling en aplicaciones web y cuándo utilizarlo para procesos largos.  
[Video – Long Polling Overview](https://glasp.co/youtube/ZPh2Hapjd64)

---

## 📌 Estado a 2026

- El polling sigue vigente en sistemas REST tradicionales.
- Long polling continúa siendo usado como alternativa cuando no se quiere o no se puede usar WebSockets.
- La tendencia arquitectónica dominante en 2025–2026 favorece modelos **event-driven y push-based**, especialmente en sistemas con alta concurrencia.
- Polling se mantiene como patrón válido en:
	- Sistemas con baja frecuencia de eventos.
	- Procesos largos asincrónicos.
	- Integraciones simples sobre HTTP estándar.

