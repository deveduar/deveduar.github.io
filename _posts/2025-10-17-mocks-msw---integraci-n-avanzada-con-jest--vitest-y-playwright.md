---
date: 2025-10-17 18:23
title: Mocks MSW - integración avanzada con Jest, Vitest y Playwright
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: true
category: Testing
---

# Mocks MSW - integración avanzada con Jest, Vitest y Playwright

- MSW
- [TDD - Test Driven Development](/testing/tdd---test-driven-development/)
- [MSW Mocks service worker](/testing/msw-mocks-service-worker/)
- Integration tests

---

## 🎯 Propósito
Guía práctica y completa para integrar **Mock Service Worker (MSW)** en entornos de testing modernos — **Jest**, **Vitest** y **Playwright** — cubriendo configuración, estrategias, hooks de ciclo de vida y patrones de validación.

Incluye ejemplos funcionales y referencias cruzadas a [TDD patterns](/testing/tdd-patterns/).

---

## 🧩 Estructura de Mocks Base

Todos los entornos comparten esta base:

{% raw %}
```

src/  
├── mocks/  
│ ├── handlers.ts  
│ ├── browser.ts  
│ └── server.ts  
├── setupTests.ts  
├── app/  
└── ...

```
{% endraw %}`

### `handlers.ts`
{% raw %}
```ts
import { rest } from 'msw';

export const handlers = [
	rest.get('/api/user', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ name: 'Edu', role: 'admin' }));
	}),
	rest.post('/api/login', (req, res, ctx) => {
		const { username } = req.body;
		if (username === 'fail') return res(ctx.status(401));
		return res(ctx.status(200), ctx.json({ token: 'jwt' }));
	}),
];
```
{% endraw %}`

---

## ⚙️ Integración con Jest (React, Node)

### `server.ts`

{% raw %}
```ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';
export const server = setupServer(...handlers);
```
{% endraw %}

### `jest.setup.ts`

{% raw %}
```ts
import { server } from './src/mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```
{% endraw %}

### `jest.config.ts`

{% raw %}
```ts
setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
testEnvironment: 'jsdom',
```
{% endraw %}

### ✅ Ejemplo de test con mock dinámico

{% raw %}
```ts
import { fetchUser } from '../api';

test('fetchUser devuelve datos simulados', async () => {
	const data = await fetchUser();
	expect(data.name).toBe('Edu');
});
```
{% endraw %}

🧠 _Consejo:_  
Usa `server.use(...)` dentro del test para sobrescribir handlers en tiempo real → ver [Mocks MSW - patrones y casos reales > Patrón 4 — Fallback de Handlers](/testing/mocks-msw---patrones-y-casos-reales/#patrn-4--fallback-de-handlers).

---

## ⚡ Integración con Vitest (Vite, React, Svelte, etc.)

Vitest soporta MSW nativamente en modo Node y Browser.

### `vitest.setup.ts`

{% raw %}
```ts
import { server } from './src/mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```
{% endraw %}

### `vitest.config.ts`

{% raw %}
```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		setupFiles: ['./vitest.setup.ts'],
		environment: 'jsdom',
	},
});
```
{% endraw %}

### 🧪 Ejemplo de test

{% raw %}
```ts
import { fetchData } from '@/api';

test('mock de login exitoso', async () => {
	const result = await fetchData('/api/login', { username: 'ok' });
	expect(result.token).toBe('jwt');
});
```
{% endraw %}

💡 Usa `vi.spyOn(fetch, 'default')` o mocks de red nativos si necesitas verificar llamadas de red reales.

---

## 🧭 Integración con Playwright (E2E Testing)

MSW puede actuar como **proxy de mock** para pruebas end-to-end, interceptando fetch y XHR en el navegador real.

### Estructura

{% raw %}
```
tests/
 ├── e2e/
 │   ├── example.spec.ts
 │   └── playwright.config.ts
 └── mocks/
     ├── browser.ts
     ├── handlers.ts
     └── server.ts
```
{% endraw %}

### `browser.ts`

{% raw %}
```ts
import { setupWorker } from 'msw';
import { handlers } from './handlers';
export const worker = setupWorker(...handlers);
```
{% endraw %}

### `example.spec.ts`

{% raw %}
```ts
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.addInitScript(() => {
		window.msw = {};
	});

	await page.route('**/*', (route, request) => {
		if (request.url().includes('/api/user')) {
			route.fulfill({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify({ name: 'Playwright User' }),
			});
		} else {
			route.continue();
		}
	});
});

test('renderiza datos mockeados', async ({ page }) => {
	await page.goto('http://localhost:5173');
	await expect(page.getByText('Playwright User')).toBeVisible();
});
```
{% endraw %}

🧭 _Opcional:_ Puedes cargar `mockServiceWorker.js` directamente en el contexto del navegador para una simulación total de red.

---

## 🔄 MSW + CI/CD Integration (GitHub Actions / Docker)

Ejemplo de uso en CI (con Vitest o Jest):

{% raw %}
```yaml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm test
    env:
      NODE_ENV: test
```
{% endraw %}

📦 En entornos Docker:

- Inicia los mocks con `server.listen()` solo si `NODE_ENV === 'test'`.
- Usa `onUnhandledRequest: 'error'` para asegurar cobertura completa.

---

## 🧠 Estrategias de Testing con MSW

|Estrategia|Entorno|Uso|
|---|---|---|
|**Mock Persistente**|Dev|Simular backend completo offline|
|**Mock Temporal**|Jest / Vitest|Sobrescribir handlers por test|
|**Mock E2E**|Playwright|Validar UX real sin backend|
|**Mock Failover**|CI|Simular errores de red o auth|
|**Mock Condicional**|Multi-env|Cambiar respuestas según headers o entorno|

---

## 🪶 Mejores Prácticas Globales

- Define **nombres consistentes** en endpoints (`/api/...`).
- Resetea handlers tras cada test (`server.resetHandlers()`).
- Mantén mocks cerca del código fuente (no en repos externos).
- Usa `ctx.delay()` para simular condiciones reales.
- Documenta tus mocks en la wiki o junto al [Glosario de TDD](/testing/glosario-de-tdd/).
- Evita mezclar MSW con interceptores manuales (axios/fetch mocks) en el mismo entorno.

---

## 🔗 Referencias

- [MSW Docs — Integration Guides](https://mswjs.io/docs/integrations)
- [Vitest + MSW Example](https://vitest.dev/guide/mocking.html#mock-service-worker)
- [Playwright Intercept Requests](https://playwright.dev/docs/network#modify-requests)
- [Mocks MSW - patrones y casos reales](/testing/mocks-msw---patrones-y-casos-reales/)
- [TDD patterns](/testing/tdd-patterns/)