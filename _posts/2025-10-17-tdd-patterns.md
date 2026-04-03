---
date: 2025-10-17 14:15
title: TDD patterns
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: true
category: Testing
---

# TDD patterns

- [TDD - Test Driven Development](/testing/tdd---test-driven-development/)
- [Testing](/testing/testing/)
- patrones y estrategias comunes
	- En [TDD - Test Driven Development](/testing/tdd---test-driven-development/) existen patrones recurrentes que ayudan a estructurar mejor las pruebas, mantener consistencia y evitar errores de diseño o mantenimiento. Estos patrones promueven claridad, aislamiento y expresividad en el código de test.

## 🧩 Test Doubles
- Son objetos que reemplazan dependencias reales para aislar la unidad bajo prueba.
- Tipos comunes:
	- **Dummy**: solo rellena parámetros sin ser usado activamente.
	- **Stub**: devuelve datos predefinidos para controlar el flujo.
	- **Spy**: registra interacciones para verificarlas luego.
	- **Mock**: valida expectativas sobre llamadas y comportamientos.
	- **Fake**: implementa lógica simplificada (p. ej. una base de datos en memoria).
- Ejemplo en el bloque [[#🧪 Ejemplo - Test Doubles]]

### 🧪 Ejemplo - Test Doubles
{% raw %}
```js
const emailService = { send: jest.fn() };
loginUser('user', '1234', emailService);
expect(emailService.send).toHaveBeenCalledWith('user');
```
{% endraw %}`

## 🧠 Naming Patterns

- Los nombres de tests deben expresar **intención**, no implementación.
- Formatos recomendados:
    - `should_<comportamiento>_when_<condición>()`
    - `given_<context>_when_<action>_then_<result>()`
- Ejemplo en el bloque [[#🧪 Ejemplo - Naming Patterns]]

### 🧪 Ejemplo - Naming Patterns

{% raw %}
```js
test('should return 401 when user is unauthorized', () => {
	expect(login('user', 'badpass')).toBe(401);
});
```
{% endraw %}

## ⚖️ Assertions

- Las aserciones validan el resultado esperado de una prueba.
- Deben ser claras, atómicas y representativas del comportamiento.
- Reglas:
    - Una sola **intención** por test.
    - Evitar múltiples asserts no relacionados.
- Ejemplo en [[#🧪 Ejemplo - Assertions]]

### 🧪 Ejemplo - Assertions

{% raw %}
```js
expect(suma(2, 2)).toBe(4);
expect(resultado.error).toBeUndefined();
```
{% endraw %}

## 🔁 Parametrización de Tests

- Permite ejecutar el mismo test con diferentes entradas y resultados esperados.
- Reduce duplicación y mejora la cobertura de casos.
- Ejemplo en [[#🧪 Ejemplo - Parametrización de Tests]]

### 🧪 Ejemplo - Parametrización de Tests

{% raw %}
```js
test.each([
  [1, 2, 3],
  [5, 5, 10],
  [-1, 1, 0]
])('suma(%i, %i) = %i', (a, b, esperado) => {
  expect(suma(a, b)).toBe(esperado);
});
```
{% endraw %}

## ⚙️ Fixture Setup

- Los fixtures son datos o estados comunes para múltiples tests.
- Se definen en `beforeEach` o `beforeAll` para garantizar consistencia.
- Ejemplo en [[#🧪 Ejemplo - Fixture Setup]]

### 🧪 Ejemplo - Fixture Setup

{% raw %}
```js
let usuario;
beforeEach(() => {
  usuario = { nombre: 'Ana', activo: true };
});
test('usuario activo tiene acceso', () => {
  expect(usuario.activo).toBe(true);
});
```
{% endraw %}

## 🧱 Anti-patterns

- **Test frágiles**: dependen de detalles internos que cambian con facilidad.
- **Overtesting**: probar detalles irrelevantes o dependencias externas.
- **God tests**: pruebas demasiado largas o con múltiples objetivos.
- **Copy-paste tests**: duplicación sin parametrización o abstracción.
- **Silent tests**: sin asserts claros ni verificación de resultados.

## 🚀 Incremental Testing

- Aplicar [TDD - Test Driven Development](/testing/tdd---test-driven-development/) de forma incremental garantiza que cada nueva funcionalidad sea pequeña, verificable y segura.
- Mantiene un **ritmo de retroalimentación corto**, ideal para CI/CD.

## ✍️ Test Readability

- La legibilidad es clave: los tests deben comunicar **intención y propósito**.
- Uso recomendado de:
    - Bloques `describe()` para agrupar contexto.
    - Comentarios solo cuando añaden valor.
    - Separar preparación, acción y verificación visualmente.
- Ejemplo en [[#🧪 Ejemplo - Readability]]

### 🧪 Ejemplo - Readability

{% raw %}
```js
describe('Gestión de cuentas', () => {
  test('crea usuario correctamente', () => {
    const usuario = crearUsuario('Eva');
    expect(usuario.nombre).toBe('Eva');
  });
});
```
{% endraw %}

## ⏱️ Fake Time y Mocking Avanzado

- Se usa para simular pasos de tiempo, timers o eventos programados.
- Evita dependencias del reloj real, permitiendo tests reproducibles.
- Ejemplo en [[#🧪 Ejemplo - Fake Time]]

### 🧪 Ejemplo - Fake Time

{% raw %}
```js
jest.useFakeTimers();
const callback = jest.fn();
setTimeout(callback, 1000);
jest.advanceTimersByTime(1000);
expect(callback).toHaveBeenCalled();
```
{% endraw %}

## 🧩 Dependency Injection en Tests

- Permite reemplazar dependencias en tiempo de prueba.
- Favorece un diseño desacoplado y fácilmente testeable.
- Ejemplo en [[#🧪 Ejemplo - Dependency Injection]]

### 🧪 Ejemplo - Dependency Injection

{% raw %}
```js
class ServicioUsuarios {
  constructor(db) { this.db = db; }
  getAll() { return this.db.query('SELECT * FROM usuarios'); }
}
const fakeDb = { query: jest.fn().mockReturnValue([{ id: 1 }]) };
const servicio = new ServicioUsuarios(fakeDb);
expect(servicio.getAll()).toHaveLength(1);
```
{% endraw %}

## 🔄 Test-Driven Refactoring Patterns

- Refactorizar con soporte de tests garantiza que no se rompa la funcionalidad existente.
- Patrones comunes:
    - **Extract Function**: mover lógica repetida a una función auxiliar.
    - **Replace Conditional with Polymorphism**: mejorar mantenibilidad.
    - **Introduce Parameter Object**: agrupar parámetros repetidos.

## 🧍 Test Isolation

- Cada test debe ejecutarse de forma independiente y sin efecto colateral.
- Se recomienda limpiar estados compartidos con `afterEach` o mocks reseteados.
- Ejemplo en [[#🧪 Ejemplo - Test Isolation]]

### 🧪 Ejemplo - Test Isolation

{% raw %}
```js
afterEach(() => {
  jest.clearAllMocks();
});
```
{% endraw %}

## 🔁 Continuous Integration

- En entornos modernos, los patrones [TDD - Test Driven Development](/testing/tdd---test-driven-development/) se integran con CI/CD.
- Cada push ejecuta todos los tests, asegurando calidad continua y detección temprana de errores.

## 🧩 Ejemplo Completo - Patrones Combinados

{% raw %}
```js
describe('Gestor de pagos', () => {
  let servicio, mockAPI;
  beforeEach(() => {
    mockAPI = { procesarPago: jest.fn().mockResolvedValue('ok') };
    servicio = new GestorPagos(mockAPI);
  });
  test.each([
    [100, 'ok'],
    [0, 'error']
  ])('procesarPago(%i) devuelve %s', async (monto, esperado) => {
    const resultado = await servicio.procesarPago(monto);
    expect(resultado).toBe(esperado);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
```
{% endraw %}