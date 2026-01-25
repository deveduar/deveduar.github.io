---
date: 2025-10-19 16:49
title: E2E - Ejemplos Prácticos Avanzados
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
# E2E - Ejemplos Prácticos Avanzados
`$= dv.current().file.tags.join(" ")`
## ⚙️ Objetivo

Estos ejemplos avanzados de [E2E - End to End Testing](/testing/e2e---end-to-end-testing/) profundizan en casos reales de automatización compleja, simulaciones, paralelización, autenticación persistente, manejo de datos dinámicos, interceptores de red, y validación de estados internos.  
Se utilizan principalmente [Playwright](/testing/playwright/) y Cypress como base, con técnicas aplicables también a Selenium o WebdriverIO.

---

## 🧩 1. Autenticación Persistente y Reutilización de Sesión (Playwright)

Guardar la sesión de un usuario autenticado para evitar logins repetitivos y acelerar la suite E2E.

{% raw %}
```ts
// tests/auth.setup.ts
import { test as setup, expect } from '@playwright/test'
import fs from 'fs'

const STORAGE_STATE = 'playwright/.auth/user.json'

setup('guardar sesión autenticada', async ({ page }) => {
	await page.goto('https://miapp.test/login')
	await page.fill('#email', 'usuario@example.com')
	await page.fill('#password', '123456')
	await page.click('button[type="submit"]')
	await expect(page).toHaveURL(/dashboard/)
	await page.context().storageState({ path: STORAGE_STATE })
})
```
{% endraw %}`

{% raw %}
```ts
// playwright.config.ts
use: {
	storageState: 'playwright/.auth/user.json'
}
```
{% endraw %}

Ahora todas las pruebas posteriores reutilizan la sesión, evitando autenticarse en cada ejecución.

---

## 🧩 2. Interceptar y Modificar Respuestas de API (Playwright)

Simular respuestas dinámicas del backend sin alterar el servidor.

{% raw %}
```ts
import { test, expect } from '@playwright/test'

test('interceptar respuesta del servidor', async ({ page }) => {
	await page.route('**/api/productos', route => {
		const mockResponse = {
			status: 200,
			contentType: 'application/json',
			body: JSON.stringify([
				{ id: 1, nombre: 'Producto Falso A', precio: 10 },
				{ id: 2, nombre: 'Producto Falso B', precio: 20 }
			])
		}
		route.fulfill(mockResponse)
	})
	await page.goto('https://miapp.test/tienda')
	const productos = await page.locator('.producto').allTextContents()
	expect(productos).toContain('Producto Falso A')
})
```
{% endraw %}

Ideal para aislar pruebas de la infraestructura backend o validar comportamiento ante respuestas personalizadas.

---

## 🧩 3. Validar Estados Internos del Frontend (Cypress + Redux / Zustand)

Ejemplo de cómo verificar que el estado global del frontend cambie correctamente tras una acción del usuario.

{% raw %}
```js
describe('Gestión de estado global (Redux)', () => {
	it('Verifica que el carrito se actualiza en el store', () => {
		cy.visit('/tienda')
		cy.window().its('store').invoke('getState').then(initial => {
			expect(initial.carrito.items).to.have.length(0)
		})
		cy.get('.producto:first-child button.agregar-carrito').click()
		cy.window().its('store').invoke('getState').then(final => {
			expect(final.carrito.items).to.have.length(1)
		})
	})
})
```
{% endraw %}

Permite probar la lógica interna de la aplicación sin depender únicamente del DOM.

---

## 🧩 4. Pruebas Condicionales y Entornos Variables (Playwright)

Ejecutar flujos diferentes según el entorno o rol del usuario.

{% raw %}
```ts
import { test, expect } from '@playwright/test'

test('acceso según rol de usuario', async ({ page }) => {
	const role = process.env.USER_ROLE || 'user'
	await page.goto('https://miapp.test/dashboard')

	if (role === 'admin') {
		await expect(page.locator('text=Panel de Administración')).toBeVisible()
	} else {
		await expect(page.locator('text=Acceso Denegado')).toBeVisible()
	}
})
```
{% endraw %}

Permite validar permisos y comportamientos adaptados a distintos contextos de despliegue (QA, staging, producción).

---

## 🧩 5. Pruebas Multitab y Comunicación Entre Pestañas (Playwright)

Simular interacciones entre pestañas, útil en flujos como notificaciones o webs colaborativas.

{% raw %}
```ts
test('sincronización entre pestañas', async ({ browser }) => {
	const contexto = await browser.newContext()
	const tab1 = await contexto.newPage()
	const tab2 = await contexto.newPage()

	await tab1.goto('https://miapp.test/documento')
	await tab2.goto('https://miapp.test/documento')

	await tab1.fill('#titulo', 'Documento E2E')
	await tab1.keyboard.press('Control+S')

	await tab2.reload()
	const titulo = await tab2.inputValue('#titulo')
	expect(titulo).toBe('Documento E2E')
})
```
{% endraw %}

Demuestra control avanzado del entorno multi-pestaña y sincronización de estados.

---

## 🧩 6. Validación Visual (Visual Regression Testing)

Comparar capturas de pantalla actuales con imágenes base para detectar cambios visuales no deseados.

{% raw %}
```ts
import { test, expect } from '@playwright/test'

test('comparación visual del dashboard', async ({ page }) => {
	await page.goto('https://miapp.test/dashboard')
	await expect(page).toHaveScreenshot('dashboard-base.png', {
		fullPage: true,
		maxDiffPixels: 100
	})
})
```
{% endraw %}

Detecta regresiones visuales provocadas por cambios de CSS, layout o componentes UI.

---

## 🧩 7. Datos Dinámicos y Factories (Playwright + Faker)

Generar datos aleatorios pero coherentes para evitar dependencias de datos fijos.

{% raw %}
```ts
import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test('crear usuario dinámico', async ({ page }) => {
	const usuario = {
		nombre: faker.person.fullName(),
		email: faker.internet.email(),
		password: faker.internet.password(8)
	}
	await page.goto('https://miapp.test/registro')
	await page.fill('#nombre', usuario.nombre)
	await page.fill('#email', usuario.email)
	await page.fill('#password', usuario.password)
	await page.click('button[type="submit"]')
	await expect(page.locator('.mensaje-exito')).toHaveText(/cuenta creada/i)
})
```
{% endraw %}

Los factories permiten tests más realistas y resistentes a cambios de datos.

---

## 🧩 8. Control de Red, Tiempos y Retrasos (Cypress)

Simular respuestas lentas o errores de red para probar la resiliencia del frontend.

{% raw %}
```js
describe('Simulación de red lenta y error 500', () => {
	it('Muestra mensaje de error cuando el servidor falla', () => {
		cy.intercept('GET', '/api/usuarios', {
			statusCode: 500,
			delay: 2000,
			body: { error: 'Error interno del servidor' }
		}).as('usuariosFallan')

		cy.visit('/usuarios')
		cy.wait('@usuariosFallan')
		cy.contains('No se pudieron cargar los usuarios').should('be.visible')
	})
})
```
{% endraw %}

Útil para validar comportamiento bajo condiciones reales de latencia o caída del backend.

---

## 🧩 9. Tests Paralelos y Data-driven (Playwright)

Ejecutar el mismo flujo con múltiples conjuntos de datos.

{% raw %}
```ts
import { test, expect } from '@playwright/test'

const casos = [
	{ nombre: 'Eduardo', email: 'eduardo@example.com' },
	{ nombre: 'Lucía', email: 'lucia@example.com' },
	{ nombre: 'Mario', email: 'mario@example.com' }
]

for (const caso of casos) {
	test(`formulario con ${caso.nombre}`, async ({ page }) => {
		await page.goto('https://miapp.test/contacto')
		await page.fill('#nombre', caso.nombre)
		await page.fill('#email', caso.email)
		await page.fill('#mensaje', 'Prueba de mensaje')
		await page.click('button[type="submit"]')
		await expect(page.locator('.mensaje-exito')).toBeVisible()
	})
}
```
{% endraw %}

Cada caso se ejecuta como prueba independiente, lo que facilita cobertura de múltiples combinaciones de entrada.

---

## 🧩 10. Integración con CI/CD y Artifacts Avanzados (Playwright)

Ejemplo de pipeline con reportes HTML, vídeos, trazas y reintentos automáticos.

{% raw %}
```yaml
name: Advanced E2E Suite
on: [push, pull_request]
jobs:
  playwright-tests:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        browser: [chromium, firefox, webkit]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Instalar dependencias
        run: npm ci
      - name: Ejecutar tests
        run: npx playwright test --browser=${{ matrix.browser }} --reporter=html
      - name: Subir artefactos
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report-${{ matrix.browser }}
          path: playwright-report/
```
{% endraw %}

Este flujo genera reportes detallados por navegador y permite análisis visual tras cada ejecución CI.

---

## 🧠 Conclusiones Prácticas

* La potencia del E2E radica en **reproducir condiciones reales**: usuarios, red, roles y datos dinámicos.
* Los tests avanzados deben ser **modulares, configurables y paralelizables**.
* Los **mocks, interceptores y factories** reducen la fragilidad y aumentan la velocidad.
* La **reutilización de sesión y entorno** mejora la eficiencia de ejecución.
* La **observabilidad (logs, vídeos, trazas)** facilita el diagnóstico y mantenimiento.
* Una buena estrategia incluye tanto **validaciones visuales como de estado lógico**.

Estos patrones y ejemplos permiten diseñar suites E2E robustas, adaptables y preparadas para integrarse en pipelines empresariales con calidad de producción.

