---
date: 2025-10-17 18:19
title: Mocks MSW - patrones y casos reales
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: true
category: Testing
---
# Mocks MSW - patrones y casos reales

- MSW
- [Testing](/testing/testing/)
- [TDD - Test Driven Development](/testing/tdd---test-driven-development/)
- [MSW Mocks service worker](/testing/msw-mocks-service-worker/)

- propósito  
	- Explorar **patrones de diseño y casos de uso reales** con MSW (Mock Service Worker) en entornos frontend y backend.
	- Mostrar cómo **parametrizar, modularizar y adaptar mocks** según escenarios complejos, pipelines y entornos CI/CD.
	- Integrar estrategias de **mock dinámico**, **errores controlados**, **headers**, **autenticación simulada**, **latencia realista** y **testing resiliente**.

---

## Patrón 1 — Mock Dinámico Basado en Parámetros

Usa los valores del request (`req.params`, `req.url.searchParams`, `req.body`) para devolver respuestas personalizadas.

{% raw %}
```ts
rest.get('/api/user/:id', (req, res, ctx) => {
	const { id } = req.params;
	const includePosts = req.url.searchParams.get('includePosts') === 'true';

	const user = { id, name: `Usuario ${id}` };
	const data = includePosts ? { ...user, posts: [{ id: 1, title: 'Hola mundo' }] } : user;

	return res(ctx.status(200), ctx.json(data));
});
```
{% endraw %}`

🧭 Ideal cuando:

- Simulas endpoints con rutas dinámicas.
- Quieres testear componentes dependientes de filtros o queries.

---

## Patrón 2 — Mock Condicional según Headers o Auth

Útil para pruebas de seguridad o de comportamiento según autenticación.

{% raw %}
```ts
rest.get('/api/secure', (req, res, ctx) => {
	const token = req.headers.get('Authorization');
	if (!token || token !== 'Bearer 12345') {
		return res(ctx.status(401), ctx.json({ error: 'Unauthorized' }));
	}
	return res(ctx.status(200), ctx.json({ message: 'Access granted' }));
});
```
{% endraw %}

🧩 Caso real:

- Validar que tu `fetch` o `axios` maneja correctamente 401/403.
- Evitar mockear manualmente middlewares de auth.

---

## Patrón 3 — Retrasos y Latencia Controlada

Simula condiciones reales de red o tests de UX (spinners, loaders, timeouts).

{% raw %}
```ts
rest.get('/api/data', (req, res, ctx) => {
	return res(ctx.delay(1500), ctx.status(200), ctx.json({ data: 'ok' }));
});
```
{% endraw %}

🔄 También puedes usar:

{% raw %}
```ts
ctx.delay('infinite'); // bloquea hasta que se cancele manualmente
ctx.delay(0); // sin delay
```
{% endraw %}

---

## Patrón 4 — Fallback de Handlers (redefinir durante test)

Permite reemplazar respuestas temporalmente en un test específico sin alterar los mocks globales.

{% raw %}
```ts
server.use(
	rest.get('/api/user/1', (req, res, ctx) => {
		return res(ctx.status(404), ctx.json({ error: 'Usuario no encontrado' }));
	})
);
```
{% endraw %}

✅ Esto es útil para:

- Simular errores de API o estados edge.
- Asegurar que tu UI reacciona correctamente ante fallos.

---

## Patrón 5 — Mock de Errores con Contexto Realista

Define respuestas HTTP personalizadas con headers y mensajes de error.

{% raw %}
```ts
rest.post('/api/login', (req, res, ctx) => {
	const { username } = req.body;
	if (username === 'blocked') {
		return res(
			ctx.status(403),
			ctx.set('Retry-After', '3600'),
			ctx.json({ error: 'Cuenta bloqueada temporalmente' })
		);
	}
	return res(ctx.status(200), ctx.json({ token: 'jwt-token' }));
});
```
{% endraw %}

🧠 Este patrón refuerza tests de UI para mostrar mensajes claros y manejar headers HTTP.

---

## Patrón 6 — Múltiples Entornos (Desarrollo / Test / CI)

Puedes usar **configuración condicional** para iniciar MSW solo en los contextos adecuados.

{% raw %}
```ts
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
	const { worker } = await import('./mocks/browser');
	await worker.start({ onUnhandledRequest: 'bypass' });
}
```
{% endraw %}

🔹 `onUnhandledRequest: 'bypass'` permite que peticiones reales pasen cuando no hay handler definido.

🔹 En CI:

{% raw %}
```ts
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
```
{% endraw %}

Así los tests fallan si haces una request sin definir su mock explícitamente.

---

## Patrón 7 — Composición de Handlers

Organiza tus mocks modularmente por dominio.

{% raw %}
```ts
// src/mocks/handlers/index.ts
import { userHandlers } from './user';
import { productHandlers } from './product';

export const handlers = [...userHandlers, ...productHandlers];
```
{% endraw %}

📦 Ventajas:

- Escalable a medida que crece la aplicación.
- Facilita mantenimiento y reuso de mocks.
- Permite desactivar grupos de handlers durante un test concreto.

---

## Patrón 8 — Simulación de Estados Concurrentes

Ejemplo de cómo devolver diferentes respuestas en sucesivas llamadas (useful para reintentos o paginación).

{% raw %}
```ts
let callCount = 0;

rest.get('/api/status', (req, res, ctx) => {
	callCount++;
	if (callCount < 3) return res(ctx.status(500));
	return res(ctx.status(200), ctx.json({ ok: true }));
});
```
{% endraw %}

🔁 Reproduce fallos intermitentes y prueba resiliencia del cliente.

---

## Patrón 9 — Testing Resiliente con Assertions Post-Mock

Verifica que los mocks se invocan correctamente, asegurando que el cliente usa la API esperada.

{% raw %}
```ts
import { fetchUser } from '../api';
import { server } from '../mocks/server';

test('debería llamar a /api/user con método GET', async () => {
	const spy = jest.fn();

	server.use(
		rest.get('/api/user', (req, res, ctx) => {
			spy(req.method);
			return res(ctx.status(200), ctx.json({ ok: true }));
		})
	);

	await fetchUser();
	expect(spy).toHaveBeenCalledWith('GET');
});
```
{% endraw %}

🧪 Este patrón es especialmente útil para validar integración cliente–API.

---

## Patrón 10 — Integración Full Stack con Backend Mock

Simula un backend completo local para desarrollo offline o demos.

Estructura:

{% raw %}
```
/mocks
 ├── browser.ts
 ├── server.ts
 ├── handlers/
 │   ├── user.ts
 │   ├── product.ts
 │   └── order.ts
```
{% endraw %}

Ejemplo de `browser.ts`:

{% raw %}
```ts
import { setupWorker } from 'msw';
import { handlers } from './handlers';
export const worker = setupWorker(...handlers);
```
{% endraw %}

🚀 Con esto puedes iniciar tu app frontend sin un backend real:

{% raw %}
```bash
npm run dev
# y MSW interceptará todas las llamadas API
```
{% endraw %}

---

## Casos Reales de Uso en Empresas

- **GitHub Copilot** — usa MSW en tests internos para simular respuestas de APIs sin exponer endpoints reales.
- **Vercel** — emplea MSW en componentes Next.js para validar `getServerSideProps` y `fetch`.
- **Shopify** — combina MSW + Playwright para simular entornos E2E realistas.
- **Startups SaaS** — lo usan para demos interactivas sin necesidad de servidores temporales.

---

## Mejores Prácticas Finales

- Mantén los mocks **sincronizados** con la documentación de API real.
- Usa **nombres de handlers descriptivos**.
- Limpia `server.resetHandlers()` después de cada test.
- Simula errores y delays deliberadamente.
- Añade **logging condicional** (`console.log(req.url.href)`) para debugging.
- Versiona los mocks junto al código de frontend (no en repos aparte).

---

### 🔗 Referencias recomendadas

- [https://mswjs.io/docs/](https://mswjs.io/docs/)
- [MSW Recipes](https://github.com/mswjs/msw-examples)
- [TDD patterns](/testing/tdd-patterns/)
- Integration tests