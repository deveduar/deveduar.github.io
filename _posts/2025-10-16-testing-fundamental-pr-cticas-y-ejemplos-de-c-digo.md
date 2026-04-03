---
date: 2025-10-17 01:05
title: Testing Fundamental Prácticas y Ejemplos de Código
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: true
category: Testing
---
# Testing Fundamental Prácticas y Ejemplos de Código

# 🧪 Testing Fundamental: Prácticas y Ejemplos de Código

> Guía completa de prácticas y ejemplos de testing sobre **conceptos fundamentales**, orientada a desarrolladores que buscan aprender, reforzar y aplicar pruebas de software correctamente.

---

## 🧩 1. Conceptos Fundamentales

### 📘 Definición
El testing de software es la práctica de **verificar y validar** que un sistema cumple sus requisitos funcionales y no funcionales, detectando errores antes de llegar a producción.

### 🧠 Objetivos Clave
- Asegurar calidad y confiabilidad.
- Detectar errores tempranamente.
- Reducir costos y riesgos asociados al desarrollo.
- Mejorar mantenibilidad y confianza del software.

---

## ⚙️ 2. Patrones de Pruebas

### AAA Pattern (Arrange – Act – Assert)
Estructura clásica para escribir tests claros:

{% raw %}
```js
// JavaScript (Jest)
describe('Calculator', () => {
  it('should add numbers correctly', () => {
    // Arrange
    const a = 2, b = 3;

    // Act
    const result = a + b;

    // Assert
    expect(result).toBe(5);
  });
});
```
{% endraw %}`

✅ **Prácticas**

- Separar claramente preparación, ejecución y validación.
- Mantener tests simples y legibles.
- Nombrar las pruebas de forma natural y descriptiva.

---

### Test Setup / Teardown

Preparar y limpiar el entorno antes/después de cada test.

{% raw %}
```ts
// TypeScript + Jest
beforeEach(() => {
  // inicializar datos
});

afterEach(() => {
  // limpiar estado global
});
```
{% endraw %}

---

## 🧪 3. Unit Testing (Pruebas Unitarias)

### 📘 Concepto

Evalúa **funciones o métodos individuales** de manera aislada.

### 💻 Ejemplo (Python + pytest)

{% raw %}
```python
def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5
```
{% endraw %}

### 💡 Buenas Prácticas

- Evitar dependencias externas.
- Mantener tests rápidos (<1s por función).
- Probar casos normales y límites (border cases).
- Usar mocks o stubs para dependencias.

---

## 🔗 4. Integration Testing (Pruebas de Integración)

### 📘 Concepto

Verifica que **varios componentes funcionen correctamente juntos**.

### 💻 Ejemplo (Node.js + Supertest)

{% raw %}
```js
import request from 'supertest';
import app from '../app.js';

describe('POST /login', () => {
  it('retorna token válido', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'user@test.com', password: '1234' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
```
{% endraw %}

✅ **Tips**

- Usar bases de datos temporales o contenedores.
- Limpiar datos tras cada prueba.
- Simular servicios externos si es necesario.

---

## 🌐 5. Functional & API Testing

### 📘 Concepto

Validar **funcionalidad completa** o endpoints REST/API.

### 💻 Ejemplo (REST Assured – Java)

{% raw %}
```java
import io.restassured.RestAssured;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class LoginAPITest {
  @Test
  void testLoginEndpoint() {
    RestAssured.baseURI = "https://api.example.com";

    given()
      .contentType("application/json")
      .body("{\"email\":\"user@test.com\",\"password\":\"1234\"}")
    .when()
      .post("/login")
    .then()
      .statusCode(200)
      .body("token", notNullValue());
  }
}
```
{% endraw %}

✅ **Prácticas**

- Automatizar tests para CI/CD.
- Probar validaciones de datos, errores y límites.
- Documentar respuestas esperadas.

---

## 🧠 6. Test Driven Development (TDD)

### 💡 Flujo Clásico

1. Red: escribir un test que falle.
2. Green: escribir código mínimo que pase el test.
3. Refactor: mejorar código sin romper el test.

### 💻 Ejemplo (JavaScript + Jest)

{% raw %}
```js
function sum(a, b) {
  return a + b;
}

test('sum adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
```
{% endraw %}

✅ **Prácticas**

- Mantener tests pequeños y claros.
- Refactorizar con confianza.
- Escribir tests antes del código funcional.

---

## 🧩 7. Behavior Driven Development (BDD)

### 📘 Concepto

Se centra en **comportamiento esperado** usando lenguaje natural.

### 💻 Ejemplo (Cucumber + Gherkin)

{% raw %}
```gherkin
Feature: Login
  Scenario: Usuario correcto inicia sesión
    Given el usuario existe con email "test@test.com" y password "1234"
    When envía POST a "/login"
    Then recibe un código 200 y token JWT
```
{% endraw %}

✅ **Prácticas**

- Colaborar con QA y Product.
- Usar escenarios claros y comprensibles.
- Integrar con automatización (Cucumber, SpecFlow).

---

## 🧪 8. End-to-End Testing (E2E)

### 📘 Concepto

Simula **flujo completo de usuario** desde interfaz hasta base de datos.

### 💻 Ejemplo (Playwright)

{% raw %}
```ts
import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('https://app.example.com');
  await page.fill('#email', 'user@test.com');
  await page.fill('#password', '1234');
  await page.click('button[type="submit"]');
  await expect(page.locator('h1')).toHaveText('Bienvenido');
});
```
{% endraw %}

✅ **Prácticas**

- Evitar tests frágiles (flaky tests).
- Usar entornos de staging o mockeados.
- Ejecutar en pipelines CI/CD.

---

## ⚙️ 9. Mocking y Stubbing

### 📘 Concepto

Simular dependencias externas para **aislar pruebas**.

### 💻 Ejemplo (Jest)

{% raw %}
```js
import axios from 'axios';
import { fetchUser } from './user';

jest.mock('axios');

test('fetchUser returns mocked user', async () => {
  axios.get.mockResolvedValue({ data: { name: 'Eduardo' } });
  const user = await fetchUser(1);
  expect(user.name).toBe('Eduardo');
});
```
{% endraw %}

✅ **Tipos**

- **Mock:** Comportamiento dinámico.
- **Stub:** Respuesta fija.
- **Fake:** Implementación simplificada.
- **Spy:** Verifica invocaciones y parámetros.

---

## 📊 10. Coverage & Quality Metrics

### 💻 Ejemplo (Jest coverage)

{% raw %}
```bash
npx jest --coverage
```
{% endraw %}

### 📈 Métricas

- Statements: líneas ejecutadas.
- Branches: decisiones lógicas cubiertas.
- Functions: funciones ejecutadas.
- Lines: cobertura total.

✅ **Herramientas**

- Jest / Istanbul
- Codecov / Coveralls
- SonarQube

---

## 🧩 11. Smoke, Sanity y Regression Tests

### 📘 Concepto

- **Smoke:** verificación rápida de funcionalidades críticas.
- **Sanity:** validaciones básicas tras cambios menores.
- **Regression:** asegura que cambios no rompan funcionalidades existentes.

### 💻 Ejemplo (JS)

{% raw %}
```js
test('smoke test home page', async () => {
  const response = await fetch('https://app.example.com');
  expect(response.status).toBe(200);
});
```
{% endraw %}

✅ **Prácticas**

- Ejecutar antes de despliegues.
- Integrar en pipelines automáticos.

---

## 🔥 12. Pruebas de Rendimiento

### 💻 Ejemplo (k6)

{% raw %}
```js
import http from 'k6/http';
import { sleep, check } from 'k6';

export default function () {
  const res = http.get('https://api.example.com/products');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
```
{% endraw %}

✅ **Objetivos**

- Medir latencia, throughput y cuellos de botella.
- Simular carga real de usuarios.
- Integrar en CI/CD para monitorización continua.

---

## 📌 Conclusión

El testing fundamental cubre **unit, integration, functional, E2E, TDD, BDD y mocks**, proporcionando:

- Estructura clara y patrones reproducibles.
- Automatización inicial para pipelines.
- Base sólida para ampliar hacia prácticas avanzadas y emergentes (ML, DevSecOps, UX).

> Este documento es una **guía extensiva de conceptos fundamentales** que todo desarrollador debe dominar antes de avanzar hacia testing avanzado o especializado.
