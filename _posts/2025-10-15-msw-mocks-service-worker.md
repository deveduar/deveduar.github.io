---
date: 2025-10-15 12:14
title: MSW Mocks service worker
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: "true"
category: Testing
tags:
  - MSW
  - testing
---

# MSW Mocks service worker 

- [Testing](/testing/testing/)
- docs gpt
	- [Mocks MSW - patrones y casos reales](/testing/mocks-msw---patrones-y-casos-reales/)
	- [Mocks MSW - integración avanzada con Jest, Vitest y Playwright](/testing/mocks-msw---integraci-n-avanzada-con-jest--vitest-y-playwright/)
	- [Mocks MSW - patrones de validación y depuración](/testing/mocks-msw---patrones-de-validaci-n-y-depuraci-n/)
	- [Mocks MSW - patrones de diseño y arquitectura de mocks](/testing/mocks-msw---patrones-de-dise-o-y-arquitectura-de-mocks/)
- docs
	- Simplifying API Mocking with Mock Service Worker (msw)-simplifying-api-mocking-with-mock-service-worker-msw-4o4j
	- Introduction-msw-mock-de-tesing
- concepto
	- MSW (Mock Service Worker) es una herramienta para interceptar peticiones HTTP y simular respuestas de API, permitiendo tests realistas sin depender de servidores reales.
	- Utiliza **Service Workers** en el navegador o **node interceptors** en entorno de test para capturar `fetch`, `XMLHttpRequest` y `GraphQL`.
	- Ideal para [TDD - Test Driven Development](/testing/tdd---test-driven-development/) y [BDD](/testing/bdd/) porque desacopla la lógica del cliente de servicios externos.
	- Permite ejecutar tests más rápidos, reproducibles y sin necesidad de mockear manualmente cada endpoint.
- ventajas
	- Aislamiento total de la capa de red.
	- Comportamiento realista (no requiere reescribir mocks).
	- Compatible con entornos de desarrollo y testing.
	- Integración fluida con frameworks como Jest, Vitest, [Playwright](/testing/playwright/) o Cypress.
	- Facilita desarrollo offline y debugging de API.
- componentes principales
	- **Handlers**: Definen qué endpoints interceptar y qué respuestas devolver.
	- **Server**: Configura los handlers en entorno de test (Node).
	- **Worker**: Registra el interceptador en entorno de navegador.
	- **Context (ctx)**: Proporciona utilidades para crear respuestas HTTP simuladas (status, delay, JSON, etc.).

## Ejemplo: Mock de API REST con MSW
{% raw %}
```ts
// src/mocks/handlers.ts
import { rest } from 'msw';

export const handlers = [
	rest.get('/api/users', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([{ id: 1, name: 'Eduardo' }, { id: 2, name: 'Lucía' }])
		);
	}),
];
```
{% endraw %}`

## Ejemplo: Configuración del servidor en entorno de test

{% raw %}
```ts
// src/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

// Configuración global para Jest o Vitest
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```
{% endraw %}

## Ejemplo: Test real usando el mock

{% raw %}
```ts
import { fetchUsers } from '../api';
import { server } from '../mocks/server';
import { rest } from 'msw';

test('debería devolver lista de usuarios', async () => {
	const users = await fetchUsers();
	expect(users).toHaveLength(2);
	expect(users[0].name).toBe('Eduardo');
});
```
{% endraw %}

## Ejemplo: Sobrescribir respuesta temporalmente

{% raw %}
```ts
server.use(
	rest.get('/api/users', (req, res, ctx) => {
		return res(ctx.status(500));
	})
);
```
{% endraw %}

- integración con frameworks
    - React Testing Library: MSW intercepta las llamadas `fetch` dentro de componentes sin necesidad de mocks manuales.
    - Cypress: Permite ejecutar tests E2E interceptando peticiones reales en desarrollo.
    - [Playwright](/testing/playwright/): Puede combinarse con fixtures para simular diferentes estados de API.
    - Vitest / Jest: Configurable mediante setup files globales.
- buenas prácticas
    - Centralizar los `handlers` por dominio o funcionalidad.
    - Utilizar `ctx.delay()` para simular latencia real de red.
    - Crear handlers dinámicos con `req.params` o `req.body`.
    - Documentar los endpoints simulados para coherencia con backend.
    - Resetear el servidor entre tests (`server.resetHandlers()`).

## Ejemplo: Mock dinámico con parámetros

{% raw %}
```ts
rest.get('/api/user/:id', (req, res, ctx) => {
	const { id } = req.params;
	return res(ctx.status(200), ctx.json({ id, name: `Usuario ${id}` }));
});
```
{% endraw %}

## Ejemplo: Mock de GraphQL

{% raw %}
```ts
import { graphql } from 'msw';

export const handlers = [
	graphql.query('GetUser', (req, res, ctx) => {
		return res(ctx.data({ user: { id: '1', name: 'Eduardo' } }));
	}),
];
```
{% endraw %}

## Ejemplo: Uso en entorno de desarrollo (frontend)

{% raw %}
```ts
if (process.env.NODE_ENV === 'development') {
	const { worker } = await import('./mocks/browser');
	worker.start();
}
```
{% endraw %}

- relación con otras técnicas
    - Complementa integration test y [E2E - End to End Testing](/testing/e2e---end-to-end-testing/) al simular capa de red realista.
    - Sustituye mocks manuales en unit test de componentes con dependencias HTTP.
    - Ideal para Continuous Testing en pipelines de CI/CD.
    - Compatible con Feature Flags y Test Data Management.