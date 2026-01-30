---
date: 2025-10-17 01:08
title: Testing Fundamental Multilenguaje 2025 Prácticas y Ejemplos
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: "true"
category: Testing
---
# Testing Fundamental Multilenguaje 2025 Prácticas y Ejemplos


# 🧪 Testing Fundamental Multilenguaje 2025: Prácticas y Ejemplos

> Guía completa de prácticas y ejemplos de testing en **JavaScript/TypeScript, Python, Java y C#**, cubriendo todos los conceptos fundamentales y patrones de 2025.

---

## 🧩 1. Conceptos Fundamentales

- **Propósito del Testing:** Asegurar calidad, confiabilidad y mantenibilidad.
- **Principios Clave:**
  - Detectar errores temprano.
  - Reducir riesgos y costos.
  - Facilitar refactoring seguro.
  - Mantener tests rápidos y claros.

---

## ⚙️ 2. Patrones de Tests

### AAA (Arrange – Act – Assert)

{% raw %}
```js
// JavaScript (Jest)
describe('Calculator', () => {
  it('adds numbers correctly', () => {
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

{% raw %}
```python
# Python (pytest)
def test_add():
    a, b = 2, 3
    result = a + b
    assert result == 5
```
{% endraw %}

✅ **Prácticas**

- Separar claramente preparación, ejecución y validación.
- Nombrar los tests de forma natural y descriptiva.
- Evitar dependencias externas innecesarias.

---

## 🧪 3. Unit Testing

### JS/TS – Jest

{% raw %}
```ts
import { sum } from './math';

test('sum returns correct result', () => {
  expect(sum(2, 3)).toBe(5);
});
```
{% endraw %}

### Python – pytest

{% raw %}
```python
def multiply(a, b):
    return a * b

def test_multiply():
    assert multiply(2, 3) == 6
```
{% endraw %}

### Java – JUnit 5

{% raw %}
```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class MathTest {
    @Test
    void testSum() {
        assertEquals(5, 2 + 3);
    }
}
```
{% endraw %}

### C# – NUnit

{% raw %}
```csharp
using NUnit.Framework;

[TestFixture]
public class MathTests {
    [Test]
    public void TestAdd() {
        Assert.AreEqual(5, 2 + 3);
    }
}
```
{% endraw %}

✅ **Buenas Prácticas**

- Aislar dependencias (mocks/stubs).
- Probar casos normales y límite.
- Mantener tests rápidos (<1s).

---

## 🔗 4. Integration Testing

### JS – Supertest

{% raw %}
```js
import request from 'supertest';
import app from '../app';

test('POST /login returns token', async () => {
  const res = await request(app)
    .post('/login')
    .send({ email: 'test@test.com', password: '1234' });
  expect(res.status).toBe(200);
  expect(res.body.token).toBeDefined();
});
```
{% endraw %}

### Python – pytest + requests

{% raw %}
```python
import requests

def test_login_endpoint():
    res = requests.post('http://localhost:5000/login', json={'email': 'test@test.com', 'password': '1234'})
    assert res.status_code == 200
    assert 'token' in res.json()
```
{% endraw %}

### Java – REST Assured

{% raw %}
```java
given()
  .contentType("application/json")
  .body("{\"email\":\"test@test.com\",\"password\":\"1234\"}")
.when()
  .post("/login")
.then()
  .statusCode(200)
  .body("token", notNullValue());
```
{% endraw %}

### C# – RestSharp + NUnit

{% raw %}
```csharp
var client = new RestClient("http://localhost:5000/login");
var request = new RestRequest(Method.POST);
request.AddJsonBody(new { email = "test@test.com", password = "1234" });
IRestResponse response = client.Execute(request);
Assert.AreEqual(200, (int)response.StatusCode);
```
{% endraw %}

✅ **Tips**

- Usar bases de datos temporales o contenedores.
- Limpiar datos tras cada test.
- Simular servicios externos.

---

## 🌐 5. API Testing & Contract Testing

### JS – Pact (Contract)

{% raw %}
```js
const { Pact } = require('@pact-foundation/pact');
```
{% endraw %}

- Garantiza que los microservicios cumplan contratos.
- Integración CI/CD para pruebas continuas.

### Python – requests + pytest

{% raw %}
```python
def test_api_contract():
    res = requests.get('http://api.example.com/products')
    assert res.status_code == 200
    assert isinstance(res.json(), list)
```
{% endraw %}

---

## 🧠 6. Test Driven Development (TDD)

**Flujo:** Red → Green → Refactor

### JS – Jest

{% raw %}
```js
function sum(a, b) { return a + b; }

test('adds two numbers', () => {
  expect(sum(2,3)).toBe(5);
});
```
{% endraw %}

### Python – pytest

{% raw %}
```python
def test_sum():
    assert 2 + 3 == 5
```
{% endraw %}

✅ **Prácticas**

- Escribir test antes del código.
- Refactorizar con seguridad.
- Tests pequeños y claros.

---

## 🧩 7. Behavior Driven Development (BDD)

### Cucumber – Gherkin

{% raw %}
```gherkin
Feature: Login
  Scenario: Usuario inicia sesión
    Given el usuario existe con email "test@test.com"
    When envía POST a "/login"
    Then recibe código 200 y token JWT
```
{% endraw %}

✅ **Tips**

- Facilita colaboración QA-Dev-Product.
- Escenarios claros y comprensibles.

---

## 🧪 8. E2E Testing

### JS – Playwright

{% raw %}
```ts
import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('https://app.example.com');
  await page.fill('#email', 'test@test.com');
  await page.fill('#password', '1234');
  await page.click('button[type="submit"]');
  await expect(page.locator('h1')).toHaveText('Bienvenido');
});
```
{% endraw %}

### Python – Selenium

{% raw %}
```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://app.example.com")
driver.find_element_by_id("email").send_keys("test@test.com")
driver.find_element_by_id("password").send_keys("1234")
driver.find_element_by_tag_name("button").click()
assert "Bienvenido" in driver.page_source
driver.quit()
```
{% endraw %}

✅ **Consejos**

- Usar entornos staging o mockeados.
- Evitar tests frágiles.
- Integrar en CI/CD.

---

## ⚙️ 9. Mocking y Stubbing

### JS – Jest

{% raw %}
```js
jest.mock('axios');
axios.get.mockResolvedValue({ data: { name: 'Eduardo' } });
```
{% endraw %}

### Python – unittest.mock

{% raw %}
```python
from unittest.mock import patch

@patch('module.requests.get')
def test_mock(mock_get):
    mock_get.return_value.json.return_value = {'name': 'Eduardo'}
```
{% endraw %}

### Java – Mockito

{% raw %}
```java
UserService mockService = mock(UserService.class);
when(mockService.getUser(1)).thenReturn(new User("Eduardo"));
```
{% endraw %}

### C# – Moq

{% raw %}
```csharp
var mock = new Mock<IUserService>();
mock.Setup(x => x.GetUser(1)).Returns(new User("Eduardo"));
```
{% endraw %}

---

## 📊 10. Cobertura y Calidad

### JS – Jest

{% raw %}
```bash
npx jest --coverage
```
{% endraw %}

### Python – coverage.py

{% raw %}
```bash
coverage run -m pytest
coverage report
```
{% endraw %}

### Java – JaCoCo

{% raw %}
```xml
<plugin>
  <groupId>org.jacoco</groupId>
  <artifactId>jacoco-maven-plugin</artifactId>
</plugin>
```
{% endraw %}

### C# – Coverlet

{% raw %}
```bash
dotnet test /p:CollectCoverage=true
```
{% endraw %}

---

## 🔥 11. Performance & Load Testing

### JS – k6

{% raw %}
```js
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let res = http.get('https://api.example.com/products');
  check(res, { 'status is 200': (r) => r.status === 200 });
}
```
{% endraw %}

### Java – JMeter (CLI)

{% raw %}
```bash
jmeter -n -t test_plan.jmx -l results.jtl
```
{% endraw %}

---

## 🧭 12. Security & Accessibility

### JS – axe-core (Accessibility)

{% raw %}
```js
import AxeBuilder from '@axe-core/playwright';
```
{% endraw %}

### Security – OWASP ZAP CLI

{% raw %}
```bash
zap-cli quick-scan http://localhost:3000
```
{% endraw %}

---

## 🧩 13. Test Data & Fixtures

### JS – Faker

{% raw %}
```js
import { faker } from '@faker-js/faker';
faker.name.firstName();
faker.internet.email();
```
{% endraw %}

### Python – Faker

{% raw %}
```python
from faker import Faker
fake = Faker()
fake.name()
fake.email()
```
{% endraw %}

✅ **Buenas prácticas**

- Evitar datos reales.
- Generar datos consistentes.
- Reutilizar fixtures.

---

## 📌 Conclusión

Este documento **abarca todos los conceptos fundamentales de testing 2025**:

- Unit, Integration, API, E2E.
- TDD, BDD, Mocking, Coverage.
- Performance, Security y Test Data.
- Multilenguaje: JS/TS, Python, Java, C#.
- Buenas prácticas y patrones AAA, Setup/Teardown, CI/CD.

> Base sólida para avanzar hacia testing avanzado, observability, AI-assisted testing y microservicios.
