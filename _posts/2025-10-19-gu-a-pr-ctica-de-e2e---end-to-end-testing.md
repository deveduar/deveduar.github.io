---
date: 2025-10-19 15:42
title: Guía Práctica de E2E - End to End Testing
tags:
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
cssclasses:
public_note: "true"
category: hide-embedded-header1
categories:
  - hide-embedded-header1
  - Testing
---
# Guía Práctica de [E2E - End to End Testing](/testing/e2e---end-to-end-testing/)
`$= dv.current().file.tags.join(" ")`
## 🚀 Objetivo

Esta guía práctica muestra cómo implementar pruebas E2E completas con las herramientas más utilizadas: Cypress, [Playwright](/testing/playwright/) y Selenium. Incluye configuración, ejemplos de uso, comandos, CI/CD y recomendaciones de mantenimiento.

---

## 🧩 1. Cypress

### 🧰 Instalación

{% raw %}
```bash
npm install cypress --save-dev
npx cypress open
```
{% endraw %}`

Esto abrirá el panel visual de Cypress, donde puedes crear pruebas E2E dentro de `cypress/e2e/`.

### 📂 Estructura recomendada

{% raw %}
```
cypress/
 ├── e2e/
 │   ├── login.cy.js
 │   ├── formulario.cy.js
 │   └── compra.cy.js
 ├── fixtures/
 │   └── user.json
 ├── support/
 │   ├── commands.js
 │   └── e2e.js
 └── cypress.config.js
```
{% endraw %}

### 🧠 Ejemplo: flujo de login

{% raw %}
```js
describe('Flujo de login', () => {
	beforeEach(() => {
		cy.visit('https://miapp.test/login')
	})

	it('Inicia sesión correctamente con credenciales válidas', () => {
		cy.get('#email').type('usuario@example.com')
		cy.get('#password').type('123456')
		cy.get('button[type="submit"]').click()
		cy.url().should('include', '/dashboard')
		cy.contains('Bienvenido').should('be.visible')
	})
})
```
{% endraw %}

### 🧾 Ejemplo: flujo de formulario

{% raw %}
```js
describe('Flujo de envío de formulario', () => {
	it('Envía correctamente el formulario', () => {
		cy.visit('/contacto')
		cy.get('#nombre').type('Eduardo')
		cy.get('#email').type('eduardo@example.com')
		cy.get('#mensaje').type('Esto es un test de E2E con Cypress.')
		cy.intercept('POST', '/api/contacto').as('enviarFormulario')
		cy.get('form').submit()
		cy.wait('@enviarFormulario').its('response.statusCode').should('eq', 200)
		cy.get('.alert-success').should('contain', 'Mensaje enviado')
	})
})
```
{% endraw %}

### ⚙️ Ejecución

* Ejecutar en modo headless:

{% raw %}
```bash
npx cypress run
```
{% endraw %}

* Ejecutar una suite específica:

{% raw %}
```bash
npx cypress run --spec cypress/e2e/formulario.cy.js
```
{% endraw %}

### 🧭 Integración en CI/CD (GitHub Actions)

{% raw %}
```yaml
name: E2E Tests
on: [push]
jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Instalar dependencias
        run: npm ci
      - name: Ejecutar Cypress
        uses: cypress-io/github-action@v6
        with:
          browser: chrome
          headless: true
```
{% endraw %}

---

## 🧩 2. [Playwright](/testing/playwright/)

### 🧰 Instalación

{% raw %}
```bash
npm init playwright@latest
```
{% endraw %}

Selecciona:

* E2E Testing
* TypeScript o JavaScript
* Browser(s): Chromium, Firefox, WebKit

### 📂 Estructura recomendada

{% raw %}
```
tests/
 ├── login.spec.ts
 ├── formulario.spec.ts
 ├── compra.spec.ts
 └── utils/
     └── helpers.ts
playwright.config.ts
```
{% endraw %}

### 🧠 Ejemplo: flujo de login

{% raw %}
```ts
import { test, expect } from '@playwright/test'

test('flujo de login exitoso', async ({ page }) => {
	await page.goto('https://miapp.test/login')
	await page.fill('#email', 'usuario@example.com')
	await page.fill('#password', '123456')
	await page.click('button[type="submit"]')
	await expect(page).toHaveURL(/.*dashboard/)
	await expect(page.locator('h1')).toContainText('Bienvenido')
})
```
{% endraw %}

### 🧾 Ejemplo: flujo de compra

{% raw %}
```ts
test('flujo de compra completo', async ({ page }) => {
	await page.goto('https://miapp.test')
	await page.click('text=Productos')
	await page.click('.producto:first-child button.agregar-carrito')
	await page.click('a[href="/carrito"]')
	await page.click('button.comprar')
	await expect(page.locator('.mensaje-exito')).toHaveText('Compra realizada con éxito')
})
```
{% endraw %}

### ⚙️ Ejecución

* Ejecutar todas las pruebas:

{% raw %}
```bash
npx playwright test
```
{% endraw %}

* Ejecutar una sola prueba:

{% raw %}
```bash
npx playwright test tests/login.spec.ts
```
{% endraw %}

* Ver resultados visuales:

{% raw %}
```bash
npx playwright show-report
```
{% endraw %}

### 📦 CI/CD (GitHub Actions)

{% raw %}
```yaml
name: Playwright E2E
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Instalar dependencias
        run: npm ci
      - name: Ejecutar pruebas E2E
        run: npx playwright test --reporter=html
      - name: Subir reporte
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
```
{% endraw %}

---

## 🧩 3. Selenium

### 🧰 Instalación (JavaScript)

{% raw %}
```bash
npm install selenium-webdriver chromedriver
```
{% endraw %}

### 🧠 Ejemplo: flujo de login

{% raw %}
```js
import { Builder, By, until } from 'selenium-webdriver'

async function flujoLogin() {
	const driver = await new Builder().forBrowser('chrome').build()
	try {
		await driver.get('https://miapp.test/login')
		await driver.findElement(By.id('email')).sendKeys('usuario@example.com')
		await driver.findElement(By.id('password')).sendKeys('123456')
		await driver.findElement(By.css('button[type="submit"]')).click()
		await driver.wait(until.urlContains('/dashboard'), 5000)
		console.log('✅ Login exitoso')
	} finally {
		await driver.quit()
	}
}
flujoLogin()
```
{% endraw %}

### ⚙️ Ejecución

{% raw %}
```bash
node tests/login.js
```
{% endraw %}

---

## 🧮 Ejemplo Comparativo de Flujos

| Acción           | Cypress                    | Playwright                       | Selenium                            |
| ---------------- | -------------------------- | -------------------------------- | ----------------------------------- |
| Instalación      | Sencilla (`npm i cypress`) | Asistida (`npm init playwright`) | Manual (`npm i selenium-webdriver`) |
| Ejecución        | Visual / CLI               | Headless o con reporter          | Script manual                       |
| Reportes         | Integrados (Dashboard)     | HTML y Traces                    | Externos (Allure, ExtentReports)    |
| Velocidad        | Alta                       | Muy alta                         | Media                               |
| Entornos móviles | Limitado                   | Sí                               | Depende del driver                  |
| Lenguajes        | JS/TS                      | JS/TS, Python, C#                | Multilenguaje                       |

---

## 🧠 Buenas Prácticas

* Mantener cada test **independiente y determinista**.
* Evitar pruebas demasiado largas: dividir flujos en pasos reutilizables.
* Usar **fixtures** y **mocks** para datos repetitivos.
* Estandarizar **nombres de tests** según el comportamiento esperado.
* Usar **capturas de pantalla y vídeos** para análisis de errores.
* Integrar con dashboards para visibilidad del equipo QA/DevOps.
* Asegurar limpieza del entorno tras cada ejecución.

---

## 🧭 Recursos Útiles

* [Cypress Docs](https://docs.cypress.io)
* [Playwright Docs](https://playwright.dev/docs/intro)
* [Selenium Docs](https://www.selenium.dev/documentation/)
* [MSW (Mock Service Worker)](https://mswjs.io)
* [Allure Reports](https://docs.qameta.io/allure/)

---

## ✅ Conclusión

Las pruebas E2E no solo validan la experiencia real del usuario, sino que garantizan la estabilidad y confianza en cada despliegue.
La elección de herramienta dependerá de tus necesidades:

* **Cypress:** facilidad de uso y debugging visual.
* **Playwright:** rendimiento, trazas y escalabilidad.
* **Selenium:** soporte multiplataforma y madurez.

Una estrategia sólida integra E2E en el **pipeline de entrega continua**, cubre **flujos críticos** y mantiene los tests **estables y representativos** del negocio real.

