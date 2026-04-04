---
date: 2025-10-17 18:43
title: Mocks MSW - patrones de diseño y arquitectura de mocks
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
category: Testing
---
# Mocks MSW - patrones de diseño y arquitectura de mocks

# Mocks MSW - patrones de diseño y arquitectura de mocks

- [MSW Mocks service worker](/testing/msw-mocks-service-worker/)
- [Mocks MSW - patrones de validación y depuración](/testing/mocks-msw---patrones-de-validaci-n-y-depuraci-n/)
- [Testing](/testing/testing/)
- [TDD - Test Driven Development](/testing/tdd---test-driven-development/)
- [profiler](/testing/profiler/)

---

## 🧩 Objetivo

Definir estrategias avanzadas para **estructurar, escalar y mantener mocks MSW** en proyectos grandes, garantizando modularidad, trazabilidad y fácil mantenimiento.  
Estos patrones se aplican a entornos con múltiples endpoints, microservicios o flujos de testing complejos.

---

## 🧠 Conceptos Clave

- **Arquitectura de Mocks**: Organización lógica de handlers y servidores de prueba.
- **Separación por Dominio**: Agrupar mocks según áreas funcionales (auth, users, products...).
- **Composición Modular**: Reutilizar handlers comunes mediante `composeHandlers()`.
- **Tipado y Validación**: Usar TypeScript para garantizar consistencia entre mocks y tipos de API.
- **Escalabilidad**: Facilitar crecimiento del proyecto sin romper la estructura existente.
- **Sincronía con la API real**: Mantener paridad con esquemas y rutas reales del backend.

---

## 🏗️ Estructura Recomendada de Carpetas

{% raw %}
```plaintext
src/
└── mocks/
	├── handlers/
	│	├── auth.ts
	│	├── users.ts
	│	├── products.ts
	│	└── index.ts
	├── factories/
	│	├── userFactory.ts
	│	└── productFactory.ts
	├── utils/
	│	├── delay.ts
	│	└── logger.ts
	├── browser.ts
	├── server.ts
	└── setupTests.ts
```
{% endraw %}

💡 **Consejo**: Cada archivo en `handlers/` debe exponer un array de mocks agrupados por dominio.

---

## 🧩 Patrón 1 — Composición Modular de Handlers

### Descripción

Agrupa y combina handlers desde diferentes dominios en un único punto de entrada.

### Ejemplo

{% raw %}
```ts
// src/mocks/handlers/index.ts
import { authHandlers } from './auth';
import { userHandlers } from './users';
import { productHandlers } from './products';

export const handlers = [
	...authHandlers,
	...userHandlers,
	...productHandlers,
];
```
{% endraw %}

🧠 *Facilita mantener independencia de módulos y evita un único archivo monolítico.*

---

## 🧩 Patrón 2 — Mock Factories Reutilizables

### Descripción

Genera datos dinámicos de prueba con funciones puras o librerías como Faker.js.

### Ejemplo

{% raw %}
```ts
// src/mocks/factories/userFactory.ts
import { faker } from '@faker-js/faker';

export const createMockUser = (overrides = {}) => ({
	id: faker.number.int(),
	name: faker.person.fullName(),
	email: faker.internet.email(),
	role: 'user',
	...overrides,
});
```
{% endraw %}

📦 *Ideal para mantener consistencia entre diferentes tests que requieren usuarios simulados.*

---

## 🧩 Patrón 3 — Handlers con Tipado Estricto

### Descripción

Asegura coherencia entre los tipos usados en mocks y en las interfaces de API.

### Ejemplo

{% raw %}
```ts
import { http, HttpResponse } from 'msw';
import type { User } from '@/types';

export const userHandlers = [
	http.get('/api/users', () => {
		const users: User[] = [{ id: 1, name: 'Eduardo', email: 'edu@dev.io' }];
		return HttpResponse.json(users);
	}),
];
```
{% endraw %}

🔒 *Evita mocks obsoletos o con propiedades incorrectas.*

---

## 🧩 Patrón 4 — Jerarquía de Handlers por Contexto

### Descripción

Clasifica handlers según el entorno: `base`, `error`, `auth`, `integration`, etc.

### Ejemplo

{% raw %}
```ts
// src/mocks/handlers/context/index.ts
export { baseHandlers } from './base';
export { errorHandlers } from './error';
export { authHandlers } from './auth';
```
{% endraw %}

Luego combínalos dinámicamente:

{% raw %}
```ts
export const handlers = [
	...baseHandlers,
	...(process.env.MOCK_ERROR ? errorHandlers : []),
];
```
{% endraw %}

⚙️ *Permite cambiar comportamientos globales sin modificar código de producción.*

---

## 🧩 Patrón 5 — Reutilización con Utilidades Compartidas

### Descripción

Centraliza funciones comunes como delays, logs o respuestas estándar.

### Ejemplo

{% raw %}
```ts
// src/mocks/utils/delay.ts
export const simulateDelay = (ms = 500) =>
	new Promise((resolve) => setTimeout(resolve, ms));
```
{% endraw %}

{% raw %}
```ts
// uso dentro del handler
await simulateDelay(800);
return HttpResponse.json({ status: 'ok' });
```
{% endraw %}

💡 Mejora legibilidad y uniformidad del tiempo de respuesta en todos los tests.

---

## 🧩 Patrón 6 — Configuración de Entornos Diferenciados

### Descripción

Permite inicializar distintos conjuntos de handlers según el entorno (`dev`, `test`, `staging`).

### Ejemplo

{% raw %}
```ts
// src/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

const env = process.env.NODE_ENV;

export const server = setupServer(
	...(env === 'test' ? handlers.test : handlers.dev)
);
```
{% endraw %}

🔧 *Facilita tener respuestas distintas sin duplicar lógica.*

---

## 🧩 Patrón 7 — Mock Layer Composition

### Descripción

Combina respuestas simuladas con datos reales (parcial mocking).

### Ejemplo

{% raw %}
```ts
http.get('/api/settings', async () => {
	const response = await fetch('/__real__/settings');
	const realData = await response.json();
	return HttpResponse.json({ ...realData, mode: 'mocked' });
});
```
{% endraw %}

🧬 *Útil para entornos híbridos donde parte de la API real está disponible.*

---

## 🧩 Patrón 8 — Documentación de Mocks

### Descripción

Cada handler debe incluir un comentario de propósito y dependencias.

### Ejemplo

{% raw %}
```ts
// [users.ts]
// Mock de /api/users
// Dependencias: userFactory, authHandlers

export const userHandlers = [
	http.get('/api/users', () => HttpResponse.json([])),
];
```
{% endraw %}

📘 *Permite a nuevos desarrolladores entender fácilmente el alcance del mock.*

---

## 🧩 Patrón 9 — Convenciones de Nombres

| Tipo de archivo       | Sufijo recomendado | Ejemplo                |
| --------------------- | ------------------ | ---------------------- |
| Handler por dominio   | `*.handlers.ts`    | `users.handlers.ts`    |
| Factory de datos      | `*.factory.ts`     | `user.factory.ts`      |
| Utilidad compartida   | `*.utils.ts`       | `delay.utils.ts`       |
| Configuración global  | `server.ts`        | `server.ts`            |

🪶 *Establece coherencia y facilita búsquedas en grandes repositorios.*

---

## 🧩 Patrón 10 — Testing de Mocks en Aislamiento

### Descripción

Valida que los mocks respondan correctamente antes de integrarlos en tests de UI.

### Ejemplo

{% raw %}
```ts
import { handlers } from '@/mocks/handlers';
import { setupServer } from 'msw/node';

const testServer = setupServer(...handlers);

testServer.listen();

test('endpoint /api/users mockeado', async () => {
	const res = await fetch('/api/users');
	const data = await res.json();
	expect(data).toBeInstanceOf(Array);
});
```
{% endraw %}

✅ *Permite garantizar calidad de los mocks como si fueran un microservicio.*

---

## 🔍 Diagnóstico Rápido

| Problema                         | Causa                         | Solución                                     |
| -------------------------------- | ------------------------------ | -------------------------------------------- |
| Handlers duplicados              | Importación circular           | Centralizar en `handlers/index.ts`           |
| Mock no intercepta peticiones    | URL incorrecta o prefijo       | Verificar coincidencia exacta con endpoint   |
| Demasiada lógica en handlers     | Falta de factorías o utils     | Mover generación de datos a `/factories`     |
| Mock no actualiza con cambios    | Cache del Service Worker       | Ejecutar `navigator.serviceWorker.getRegistrations()` |
| Dificultad al escalar mocks      | Estructura monolítica          | Separar por dominio y entorno                |

---

## 🔗 Referencias

* Mocks MSW
* [Mocks MSW - patrones de validación y depuración](/testing/mocks-msw---patrones-de-validaci-n-y-depuraci-n/)
* [TDD - Test Driven Development](/testing/tdd---test-driven-development/)
* [Testing](/testing/testing/)
* [profiler](/testing/profiler/)
* [MSW Docs — Structuring Handlers](https://mswjs.io/docs/recipes/handlers)
* [Testing Library Patterns](https://testing-library.com/docs/)
* [Faker.js for Mock Data](https://fakerjs.dev/)

