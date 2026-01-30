creation date: 2025-10-17 18:38
tags:
keywords:
source:
status: 📌
Parent: "Area-Prog"
cssclasses:
  - hide-embedded-header1
categories: "[Testing](/testing/testing/)"
public_note: "true"

# Mocks MSW - patrones de validación y depuración

- Mocks MSW
- [Testing](/testing/testing/)
- [TDD - Test Driven Development](/testing/tdd---test-driven-development/)
- [profiler](/testing/profiler/)


## 🎯 Objetivo
Esta nota reúne **estrategias, patrones y técnicas de depuración** para entornos que usan MSW (Mock Service Worker), facilitando el diagnóstico de fallos, la verificación de llamadas y la observación de comportamiento de red en entornos locales y CI.


## 🧠 Conceptos Clave

- **Validación de Mocks**: Asegurar que los handlers realmente interceptan las peticiones esperadas.
- **Depuración Contextual**: Usar logs, `ctx` y `server.events` para inspeccionar comportamiento.
- **Análisis de Flujo**: Observar el orden y frecuencia de llamadas de red.
- **Detección de Errores Silenciosos**: Configurar `onUnhandledRequest` como `"error"` para detectar endpoints no mockeados.
- **Reproducción Controlada**: Emular errores HTTP o latencias sin depender del backend real.
- **Instrumentación**: Registrar actividad de red y estados del mock server para trazabilidad.


## 🧩 Patrón 1 — Validación de Handlers Activos

### Descripción
Asegura que los mocks cargados sean los correctos antes de ejecutar los tests.

### Ejemplo
{% raw %}
```ts
import { server } from '@/mocks/server';
import { handlers } from '@/mocks/handlers';

test('todos los handlers activos están registrados', () => {
	expect(server.listHandlers().length).toBe(handlers.length);
});
```
{% endraw %}`

### Consejo

Si `server.listHandlers()` devuelve menos handlers de los esperados, revisa si se están sobrescribiendo en algún `beforeEach()`.


## 🧩 Patrón 2 — Logs Detallados de Request/Response

### Descripción

Registrar la información completa de las solicitudes interceptadas y sus respuestas.

### Ejemplo

{% raw %}
```ts
import { server } from '@/mocks/server';

server.events.on('request:start', (req) => {
	console.log(`🟢 [MSW] → ${req.method} ${req.url.href}`);
});

server.events.on('response:mocked', (res, req) => {
	console.log(`🧩 [MSW] Mock response for ${req.url.href}:`, res.status);
});
```
{% endraw %}

🧭 _Ideal para entornos CI/CD_ donde los logs de consola pueden ayudar a identificar mocks fallidos.


## 🧩 Patrón 3 — Depuración de Handlers Dinámicos

### Descripción

Sobrescribir un handler temporalmente dentro de un test sin afectar al resto.

### Ejemplo

{% raw %}
```ts
import { rest } from 'msw';
import { server } from '@/mocks/server';

test('mock temporal de error 500', async () => {
	server.use(
		rest.get('/api/user', (_, res, ctx) =>
			res(ctx.status(500), ctx.json({ error: 'Server down' }))
		)
	);
	const response = await fetch('/api/user');
	expect(response.status).toBe(500);
});
```
{% endraw %}

🧠 Usa este patrón cuando quieras simular fallos o respuestas lentas (`ctx.delay()`).


## 🧩 Patrón 4 — Fallback de Handlers

### Descripción

Define un mock por defecto para endpoints desconocidos.

### Ejemplo

{% raw %}
```ts
import { server } from '@/mocks/server';

beforeAll(() => {
	server.listen({
		onUnhandledRequest: (req) => {
			console.warn(`⚠️ Unhandled request: ${req.method} ${req.url.href}`);
		},
	});
});
```
{% endraw %}

💡 Esto evita falsos positivos y te alerta si un endpoint no está cubierto por un handler.


## 🧩 Patrón 5 — Visualización de Tráfico Mockeado

### Descripción

Monitoriza la actividad de MSW con herramientas externas o dashboards personalizados.

### Ejemplo Integración

{% raw %}
```ts
server.events.on('request:start', (req) => {
	window.__MOCK_TRAFFIC__ = window.__MOCK_TRAFFIC__ || [];
	window.__MOCK_TRAFFIC__.push({
		url: req.url.href,
		method: req.method,
		timestamp: Date.now(),
	});
});
```
{% endraw %}

👁️ _Puedes inspeccionar `window.__MOCK_TRAFFIC__` desde la consola del navegador para ver todas las llamadas interceptadas._


## 🧩 Patrón 6 — Debugging Integrado con `ctx`

### Descripción

Usa `ctx` para inyectar headers, tiempos y logs durante la simulación.

### Ejemplo

{% raw %}
```ts
rest.get('/api/products', (req, res, ctx) => {
	console.info('Fetching products mock:', req.url.searchParams);
	return res(
		ctx.status(200),
		ctx.set('x-debug', 'true'),
		ctx.delay(300),
		ctx.json([{ id: 1, name: 'Mocked Vase' }])
	);
});
```
{% endraw %}

📦 Ideal para validar cómo maneja tu frontend retrasos o cabeceras específicas.


## 🧩 Patrón 7 — Validación en CI/CD

### Descripción

Detecta errores de mocks directamente en pipelines.

### Ejemplo (Jest + GitHub Actions)

{% raw %}
```ts
test('no hay peticiones sin mock en CI', async () => {
	server.events.on('request:unhandled', (req) => {
		throw new Error(`Unhandled: ${req.method} ${req.url.href}`);
	});
	await runAppSimulation();
});
```
{% endraw %}

🧩 _Esto evita fallos silenciosos cuando un test nuevo introduce endpoints sin cubrir._


## 🧩 Patrón 8 — Uso de `afterAll` y `resetHandlers` Correcto

### Descripción

Garantiza limpieza total del entorno de mock tras cada test suite.

### Ejemplo

{% raw %}
```ts
import { server } from '@/mocks/server';

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```
{% endraw %}

🧹 _Evita que un handler modificado persista y afecte otros tests._


## 🧩 Patrón 9 — Test de Performance con Mocks Activos

### Descripción

Combina [profiler](/testing/profiler/) con MSW para medir impacto del tráfico mockeado.

### Ejemplo

{% raw %}
```ts
import { startProfiler, stopProfiler } from '@/utils/profiler';

test('performance del flujo login', async () => {
	startProfiler();
	await fetch('/api/login', { method: 'POST' });
	const metrics = stopProfiler();
	expect(metrics.responseTime).toBeLessThan(100);
});
```
{% endraw %}

🧠 Esto permite validar no solo la respuesta funcional, sino también el tiempo de simulación.


## 🧩 Patrón 10 — Inspección en Navegador (DevTools)

### Descripción

En modo browser, puedes activar `window.msw` para depurar desde consola:

{% raw %}
```js
window.msw.worker.printHandlers();
```
{% endraw %}

📘 Muestra todos los endpoints simulados y sus métodos.


## 🧩 Patrón 11 — Depuración Avanzada con Breakpoints

### Descripción

Permite pausar la ejecución del handler para inspeccionar contexto.

### Ejemplo

{% raw %}
```ts
rest.get('/api/profile', (req, res, ctx) => {
	debugger; // pausa ejecución al interceptar
	return res(ctx.status(200), ctx.json({ user: 'debug-mode' }));
});
```
{% endraw %}

🪲 Ideal cuando no sabes si el mock se ejecuta realmente.


## 🔍 Diagnóstico Rápido

|Síntoma|Causa común|Solución|
|---|---|---|
|Peticiones reales en tests|`server.listen()` no llamado|Añadir `beforeAll()` en setup|
|Mocks no actualizados|Handlers no reseteados|Usar `server.resetHandlers()`|
|Logs duplicados|Setup repetido|Verificar configuración global de Jest/Vitest|
|CI falla sin motivo|Endpoint no mockeado|Usar `onUnhandledRequest: 'error'`|
|Respuestas vacías|JSON no devuelto|Asegurar `ctx.json()` en handlers|


## 🔗 Referencias

- Mocks MSW
- [Mocks MSW - integración avanzada con Jest, Vitest y Playwright](/testing/mocks-msw---integraci-n-avanzada-con-jest--vitest-y-playwright/)
- [TDD patterns](/testing/tdd-patterns/)
- [profiler](/testing/profiler/)
- [MSW Debugging Guide](https://mswjs.io/docs/troubleshooting)
- [Vitest MSW Integration Docs](https://vitest.dev/guide/mocking.html#mock-service-worker)