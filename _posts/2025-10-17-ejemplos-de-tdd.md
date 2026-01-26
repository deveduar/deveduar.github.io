---
date: 2025-10-17 13:26
title: ejemplos de TDD
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: "true"
category: Testing
tags:
  - Testing
---
# ejemplos de TDD
`$= dv.current().file.tags.join(" ")`

- [TDD - Test Driven Development](/testing/tdd---test-driven-development/)
- [BDD](/testing/bdd/)
- [Testing](/testing/testing/)
- ejemplos avanzados
- mocking
- dependency injection
- integración CI/CD
- refactor continuo
- unit y integration tests
- coverage y pipelines

---

## 🧩 Ejemplo 1: Unit Test clásico (TypeScript)

Este ejemplo demuestra el flujo básico **Red → Green → Refactor**, aplicando TDD en una función pura y aislada.

{% raw %}
```ts
// utils/math.ts
export function multiply(a: number, b: number): number {
	return a * b;
}
```
{% endraw %}`

{% raw %}
```ts
// tests/math.test.ts
import { multiply } from '../utils/math';

describe('multiply', () => {
	it('debería multiplicar dos números', () => {
		expect(multiply(2, 3)).toBe(6);
	});

	it('debería manejar multiplicación por cero', () => {
		expect(multiply(7, 0)).toBe(0);
	});
});
```
{% endraw %}

➡️ Primero se define el test (falla).  
➡️ Luego se implementa la función mínima.  
➡️ Finalmente se refactoriza si es necesario, manteniendo los tests en verde.

---

## 🧠 Ejemplo 2: Mocking y Aislamiento (Jest)

TDD promueve pruebas **unitarias puras**. Si una función depende de una API o servicio externo, se debe **mockear** esa dependencia.

{% raw %}
```js
import axios from 'axios';
import { fetchUser } from '../services/user';

jest.mock('axios');

test('debería retornar datos de usuario simulados', async () => {
	axios.get.mockResolvedValue({ data: { id: 1, name: 'Eduardo' } });
	const user = await fetchUser(1);
	expect(user.name).toBe('Eduardo');
});
```
{% endraw %}

✅ El mock elimina la dependencia real del servicio externo.  
✅ El test se enfoca en el comportamiento esperado, no en la red.

---

## 🧩 Ejemplo 3: Dependency Injection en TDD

El uso de **Inyección de Dependencias (DI)** facilita aplicar TDD, ya que permite reemplazar fácilmente componentes o servicios en los tests.

{% raw %}
```ts
// services/emailService.ts
export class EmailService {
	send(email: string, message: string) {
		console.log(`Email enviado a ${email}: ${message}`);
	}
}
```
{% endraw %}

{% raw %}
```ts
// app/userManager.ts
import { EmailService } from './emailService';

export class UserManager {
	constructor(private emailService: EmailService) {}

	registerUser(email: string) {
		this.emailService.send(email, 'Bienvenido!');
		return true;
	}
}
```
{% endraw %}

{% raw %}
```ts
// tests/userManager.test.ts
import { UserManager } from '../app/userManager';

const mockEmailService = { send: jest.fn() };

test('debería enviar correo al registrar usuario', () => {
	const manager = new UserManager(mockEmailService);
	const result = manager.registerUser('test@test.com');
	expect(result).toBe(true);
	expect(mockEmailService.send).toHaveBeenCalledWith('test@test.com', 'Bienvenido!');
});
```
{% endraw %}

✅ DI facilita el TDD porque las dependencias son inyectadas y simulables.

---

## ⚙️ Ejemplo 4: Integración con CI/CD

El TDD se integra perfectamente en pipelines de **Integración Continua**.  
Cada commit ejecuta los tests automáticamente para validar la estabilidad del sistema.

{% raw %}
```bash
# Comandos básicos
npm ci
npm run test
npm run coverage
```
{% endraw %}

Ejemplo de pipeline simplificado (GitHub Actions adaptado al formato Markdown):

{% raw %}
```bash
# .github/workflows/test-pipeline
- name: Run tests
  run: npm test

- name: Generate coverage
  run: npm run coverage
```
{% endraw %}

✅ El pipeline ejecuta todas las pruebas en cada _push_.  
✅ Garantiza que ningún cambio rompa la funcionalidad.

---

## 🔁 Ejemplo 5: Refactor continuo y mantenimiento

El TDD impulsa una cultura de **refactorización constante**, donde el código mejora mientras los tests garantizan su estabilidad.

{% raw %}
```js
// versión inicial
function isEven(num) {
	return num % 2 === 0;
}

// refactorizado sin romper tests
const isEven = (num) => !(num & 1);

test('valida número par', () => {
	expect(isEven(4)).toBe(true);
	expect(isEven(3)).toBe(false);
});
```
{% endraw %}

✅ Los tests sirven de escudo ante errores al refactorizar.  
✅ El código se simplifica progresivamente.

---

## 🧪 Ejemplo 6: Integration Tests guiados por TDD

El TDD no se limita a funciones puras. También puede aplicarse en pruebas de integración progresiva entre componentes.

{% raw %}
```js
import request from 'supertest';
import app from '../app';

test('POST /login retorna token', async () => {
	const res = await request(app)
		.post('/login')
		.send({ email: 'user@test.com', password: '1234' });

	expect(res.statusCode).toBe(200);
	expect(res.body.token).toBeDefined();
});
```
{% endraw %}

➡️ Este tipo de prueba se construye tras definir un caso de uso funcional (p. ej., "un usuario puede autenticarse correctamente").  
➡️ Luego se implementa el endpoint y la lógica mínima para que el test pase.

---

## 📈 Ejemplo 7: Coverage y métricas

El TDD se complementa con la medición de cobertura para garantizar que todos los casos importantes están probados.

{% raw %}
```bash
npx vitest run --coverage
```
{% endraw %}

Salida esperada:

{% raw %}
```
Statements   : 98%
Branches     : 95%
Functions    : 100%
Lines        : 97%
```
{% endraw %}

✅ Cuanto mayor la cobertura, mayor la confianza en el código.  
✅ Las métricas ayudan a detectar módulos poco probados.

---

## 💡 Ejemplo 8: Flujo TDD aplicado a casos de uso reales

Ejemplo de ciclo completo: desarrollo de un módulo de tareas con TDD.

1. Escribir test que falle.
2. Implementar lo mínimo.
3. Refactorizar.
4. Añadir nuevos casos.
    

{% raw %}
```js
// test/todo.test.js
import { TodoList } from '../todo';

test('agregar tarea', () => {
	const list = new TodoList();
	list.add('Aprender TDD');
	expect(list.getAll()).toContain('Aprender TDD');
});
```
{% endraw %}

{% raw %}
```js
// src/todo.js
export class TodoList {
	constructor() {
		this.todos = [];
	}
	add(task) {
		this.todos.push(task);
	}
	getAll() {
		return this.todos;
	}
}
```
{% endraw %}

✅ Test primero, código después.  
✅ Refactor continuo y crecimiento incremental.

---

## 🧭 Conclusión

El TDD no solo es una técnica de testing, sino un **paradigma de diseño**.  
Cada test escrito se convierte en una pieza viva de documentación, validación y control de calidad.  
Combinado con [BDD](/testing/bdd/), CI/CD y herramientas de cobertura, forma la base del **desarrollo sostenible y confiable** en 2025.

{% raw %}
```

---

¿Quieres que te prepare ahora la versión complementaria `# TDD patterns`  
con patrones de diseño y estrategias típicas de TDD (test doubles, naming, anti-patterns, asserts, parametrización, etc.)  
en el mismo formato limpio y con headings?
```
{% endraw %}