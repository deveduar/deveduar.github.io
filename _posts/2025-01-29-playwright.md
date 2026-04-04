---
date: 2025-01-29 18:46
title: Playwright
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Testing
tags:
  - playwright
  - testing
---
# Playwright  

- [Testing](/testing/testing/)  
- [QA](/testing/qa/)  
- [Playwright](https://playwright.dev/docs/writing-tests)  
- Playwright Trace Viewer → inspección visual de ejecución [E2E - End to End Testing](/testing/e2e---end-to-end-testing/)
- [Playwright - Temas Avanzados y Casos Especiales](/testing/playwright---temas-avanzados-y-casos-especiales/)
- Playwright – Temas Especializados y Casos de Uso Avanzados

---

## 🧩 Conceptos Fundamentales

- **Playwright** es un framework de automatización de pruebas de extremo a extremo (E2E) desarrollado por Microsoft, diseñado para probar aplicaciones web modernas con alta fiabilidad y velocidad.  
- Permite ejecutar pruebas en **navegadores reales** (Chromium, Firefox, WebKit) y en diferentes dispositivos o contextos (móvil, escritorio, headless o headed).  
- Está construido sobre **promesas asincrónicas**, lo que facilita la sincronización automática con el navegador.  

---

## ⚙️ Características Clave

- **Soporte multiplataforma** → ejecuta pruebas en Windows, macOS y Linux.  
- **Soporte multilenguaje** → TypeScript, JavaScript, Python, C#, Java.  
- **Auto-waiting inteligente** → Playwright espera automáticamente a que los elementos estén listos para interactuar, evitando errores por sincronización.  
- **Contextos aislados** → permite crear múltiples sesiones o usuarios dentro de una misma instancia del navegador.  
- **Grabador de pruebas (Codegen)** → genera código automáticamente a partir de las acciones del usuario.  
- **Inspector visual** → depura interacciones, selectores y pasos de prueba.  
- **Playwright Trace Viewer** → herramienta visual para revisar ejecuciones paso a paso, capturando red, DOM, capturas y logs.  
- **Soporte para API testing y componentes** → permite validar tanto UI como endpoints REST o GraphQL.

---

## 🧠 Estructura de una Prueba

{% raw %}
```ts
import { test, expect } from '@playwright/test';

test('flujo de login y navegación', async ({ page }) => {
	await page.goto('https://app.ejemplo.com');
	await page.fill('#email', 'usuario@demo.com');
	await page.fill('#password', '123456');
	await page.click('button[type="submit"]');
	await expect(page).toHaveURL(/dashboard/);
	await page.click('text=Perfil');
	await expect(page.locator('h1')).toHaveText('Perfil de usuario');
});
```
{% endraw %}`

### 🔍 Explicación

* `test` → define un escenario de prueba.
* `page` → representa una pestaña o contexto de navegador.
* `expect` → validaciones de comportamiento y contenido.
* El flujo simula **inicio de sesión**, **navegación**, y **validación de interfaz**.

---

## 🧪 Configuración Básica

Archivo: `playwright.config.ts`

{% raw %}
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	timeout: 30_000,
	use: {
		baseURL: 'https://app.ejemplo.com',
		headless: true,
		trace: 'on-first-retry',
		screenshot: 'only-on-failure',
		video: 'retain-on-failure',
	},
	projects: [
		{ name: 'Chromium', use: { browserName: 'chromium' } },
		{ name: 'Firefox', use: { browserName: 'firefox' } },
		{ name: 'WebKit', use: { browserName: 'webkit' } },
	],
});
```
{% endraw %}

---

## 🧭 Estrategias de Pruebas

* **Pruebas paralelas** → ejecuta suites simultáneamente para optimizar tiempos.
* **Reutilización de contexto** → acelera flujos de autenticación persistiendo cookies o estados previos.
* **Data-driven testing** → parametriza entradas mediante `test.describe` y `test.each`.
* **Mocking y network interception** → simula respuestas HTTP y condiciones de red.
* **Testing visual** → compara capturas con imágenes base usando `toHaveScreenshot`.
* **Integración continua (CI/CD)** → integración con GitHub Actions, GitLab CI, Jenkins o Azure Pipelines.

---

## 🧰 Integración con QA y DevOps

* **Reportes avanzados** → genera HTML, JSON y Allure Reports.
* **Monitoreo de regresiones** → ejecuta tests críticos en cada despliegue.
* **CI pipelines optimizados** → integración con Docker y estrategias de shard/parallel.
* **Testing híbrido** → combina pruebas API + UI + componentes en un mismo flujo.

---

## 🚀 Ejemplo Avanzado: Flujos con Estado Persistente

{% raw %}
```ts
import { test, expect } from '@playwright/test';

test.describe('Gestión de tareas', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/login');
		await page.fill('#user', 'admin');
		await page.fill('#pass', 'securePass');
		await page.click('button:has-text("Entrar")');
	});

	test('crear y completar una tarea', async ({ page }) => {
		await page.click('text=Nueva tarea');
		await page.fill('#titulo', 'Preparar informe mensual');
		await page.click('button:has-text("Guardar")');
		await expect(page.locator('.tarea-item')).toContainText('Preparar informe mensual');
		await page.click('.tarea-item >> text=Completar');
		await expect(page.locator('.tarea-item.completed')).toBeVisible();
	});
});
```
{% endraw %}

---

## 📊 Mejores Prácticas

* Mantener **selectors semánticos** y estables (`data-testid`, `role`, `aria-label`).
* Separar la **configuración**, **fixtures**, y **flujos comunes**.
* Usar `page.locator()` en lugar de selectores genéricos.
* Evitar esperas manuales (`waitForTimeout`), confiar en `auto-waiting`.
* Revisar ejecuciones con Playwright Trace Viewer tras errores.
* Agrupar flujos críticos dentro de [E2E - End to End Testing](/testing/e2e---end-to-end-testing/).

---

## 🔮 Tendencias 2025

* **Testing distribuido con contenedores efímeros** (Docker + Playwright Cluster).
* **Integración con IA** para sugerir tests, detectar flujos no cubiertos o generar aserciones.
* **Playwright Component Testing** para frameworks como React, Vue o Svelte.
* **Simulación avanzada de red** (latencia, pérdida de paquetes, throttling).
* **Snapshots dinámicos y accesibilidad automatizada** (`toHaveAccessibleName`, `axe-core`).
* **Ejecuciones en paralelo en la nube** (BrowserStack, LambdaTest, Azure Testing Grid).

---

## 📚 Recursos

* [Documentación oficial](https://playwright.dev/docs/intro)
* [Playwright Test Reporter](https://playwright.dev/docs/test-reporters)
* [Trace Viewer Guide](https://playwright.dev/docs/trace-viewer)
* [Playwright GitHub Repo](https://github.com/microsoft/playwright)


