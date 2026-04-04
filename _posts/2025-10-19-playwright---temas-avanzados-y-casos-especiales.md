---
date: 2025-10-19 21:46
title: Playwright - Temas Avanzados y Casos Especiales
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
category: Testing
---
# Playwright - Temas Avanzados y Casos Especiales  

- [Testing](/testing/testing/)  
- [QA](/testing/qa/)  
- [E2E - End to End Testing](/testing/e2e---end-to-end-testing/)  
- Playwright Trace Viewer  
- [Playwright](https://playwright.dev/docs/writing-tests)

---

## 🧩 Integración con Frameworks Modernos

### React / Next.js
- **Component Testing** permite probar componentes aislados sin levantar un servidor completo.  
- Se ejecuta dentro del mismo entorno de renderizado del framework.  
- Soporta **hooks, estados, y efectos** como en un entorno real.  

{% raw %}
```ts
import { test, expect } from '@playwright/experimental-ct-react';
import { TodoList } from '../components/TodoList';

test('añadir una tarea en el componente', async ({ mount }) => {
	const component = await mount(<TodoList />);
	await component.getByPlaceholder('Nueva tarea...').fill('Aprender Playwright');
	await component.getByRole('button', { name: 'Agregar' }).click();
	await expect(component).toContainText('Aprender Playwright');
});
```
{% endraw %}`

### Angular / Vue / Svelte

* Los adaptadores oficiales de Playwright soportan estos frameworks.
* Facilitan **testeo de reactividad, eventos y props**, permitiendo verificar cambios dinámicos en tiempo real.
* Ideal para validar **renderizados condicionales**, **ciclos de vida**, y **transiciones**.

---

## 🧠 Testing de APIs y Mock de Red

* Playwright no solo prueba UI; puede interceptar y validar **peticiones HTTP/GraphQL**.
* Permite **mockear respuestas**, validar cabeceras o retrasar respuestas para simular condiciones reales.

{% raw %}
```ts
import { test, expect } from '@playwright/test';

test('mock de API para simular respuesta del servidor', async ({ page }) => {
	await page.route('**/api/tareas', async (route) => {
		const mockResponse = { tareas: [{ id: 1, titulo: 'Tarea simulada' }] };
		await route.fulfill({ status: 200, body: JSON.stringify(mockResponse) });
	});
	await page.goto('/tareas');
	await expect(page.locator('.tarea-item')).toHaveText('Tarea simulada');
});
```
{% endraw %}

**Casos de uso:**

* Testear comportamiento offline o con errores (`500`, `404`, `timeout`).
* Validar **retry logic**, **caché** o **fallbacks**.
* Medir tiempos de respuesta o logs del backend.

---

## 🧩 Fixtures y Reutilización de Estado

* Las **fixtures** permiten configurar datos, sesiones o recursos compartidos.
* Se definen en `test.extend()` y ayudan a mantener el código modular.

{% raw %}
```ts
import { test as base } from '@playwright/test';

const test = base.extend({
	authenticatedPage: async ({ page }, use) => {
		await page.goto('/login');
		await page.fill('#user', 'admin');
		await page.fill('#pass', '1234');
		await page.click('button[type="submit"]');
		await use(page);
	},
});

test('validar flujo con sesión iniciada', async ({ authenticatedPage }) => {
	await authenticatedPage.goto('/perfil');
	await authenticatedPage.waitForSelector('text=Bienvenido');
});
```
{% endraw %}

**Ventajas:**

* Evita repetición en múltiples tests.
* Mejora la velocidad reutilizando estados de sesión o tokens.
* Facilita la paralelización de flujos autenticados.

---

## 🧰 Integración con CI/CD y Contenedores

### CI/CD

* Ejecución automática de suites en pipelines.
* Estrategia de **sharding** (división de tests en grupos) para reducir tiempos.
* Exportación de reportes JSON o HTML como artefactos.

**Ejemplo con GitHub Actions:**

{% raw %}
```yaml
name: Playwright Tests
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
      - run: npx playwright install --with-deps
      - run: npx playwright test
```
{% endraw %}

### Docker

* Permite ejecutar tests en entornos aislados y reproducibles.

{% raw %}
```dockerfile
FROM mcr.microsoft.com/playwright:v1.49.0-jammy
WORKDIR /app
COPY . .
RUN npm ci
CMD ["npx", "playwright", "test"]
```
{% endraw %}

---

## 📸 Testing Visual y Accesibilidad

### Visual Regression Testing

* Permite comparar capturas entre versiones para detectar cambios visuales inesperados.

{% raw %}
```ts
await expect(page).toHaveScreenshot('home.png');
```
{% endraw %}

* Útil para detectar **desalineaciones, temas, o errores de estilo CSS**.
* Puede integrarse con herramientas como **Percy** o **Applitools**.

### Accesibilidad (A11y)

* Integración con librerías como `axe-core/playwright` para validar accesibilidad.

{% raw %}
```ts
import AxeBuilder from '@axe-core/playwright';
const results = await new AxeBuilder({ page }).analyze();
console.log(results.violations);
```
{% endraw %}

---

## 🔐 Autenticación y Seguridad

* Soporta **OAuth2**, **cookies persistentes**, y **autenticación por token**.
* Permite exportar y reutilizar estados de login (`storageState`).

{% raw %}
```ts
await page.context().storageState({ path: 'auth.json' });
// Reutilizar en otra suite
use: { storageState: 'auth.json' }
```
{% endraw %}

* Puede detectar **errores CORS**, cabeceras inseguras y restricciones CSP.

---

## 📡 Testing de Performance

* Integración con APIs de medición (`performance.getEntries()`) y métricas Lighthouse.
* Permite capturar **tiempo de carga, TTFB, LCP y renderizado**.

{% raw %}
```ts
const timing = await page.evaluate(() => performance.timing);
console.log('Carga total:', timing.loadEventEnd - timing.navigationStart);
```
{% endraw %}

* Puede simular condiciones de red adversas:

{% raw %}
```ts
await page.route('**/*', (route) =>
	route.continue({ delay: 1000 }) // simula latencia de 1s
);
```
{% endraw %}

---

## 🧬 Integración con Herramientas de Desarrollo

* **VSCode Extension:** autocompletado, depuración y ejecución de tests individuales.
* **Playwright Inspector:** ejecuta paso a paso, captura selectores, pausa pruebas.
* **Trace Viewer:** permite revisar ejecuciones históricas, capturas, logs y red.

---

## 🧩 Testing de Aplicaciones Complejas

### SPA / PWA

* Control preciso del **estado del Service Worker**, **cache storage** y **manifest**.
* Verificación de **modo offline**, **instalación** y **notificaciones push**.

### Aplicaciones con WebSockets o Streaming

* Soporte para interceptar y validar mensajes en **tiempo real**.
* Ideal para dashboards, chats, o aplicaciones IoT.

{% raw %}
```ts
const ws = await page.waitForEvent('websocket');
ws.on('framereceived', (frame) => console.log(frame.payload));
```
{% endraw %}

---

## 🧠 Estrategias Avanzadas

* **Pruebas en paralelo con fixtures compartidas.**
* **Reintentos inteligentes** con `retries` configurados por test.
* **Tests orientados a comportamiento (BDD)** integrados con Cucumber.
* **Ejecución selectiva** por etiquetas (`grep`, `grepInvert`).
* **Cobertura de código integrada** con `nyc` o `c8`.
* **Snapshots dinámicos** con control de versiones en CI.

---

## 🔮 Tendencias Avanzadas 2025

* **IA para generación automática de casos de prueba** a partir de la UI o logs de usuarios.
* **Playwright Cloud Execution** → ejecución distribuida y análisis predictivo.
* **Integración nativa con LLMs** para generación de aserciones contextuales.
* **Soporte ampliado para WebAssembly y Edge APIs**.
* **Pruebas basadas en observabilidad** (trazas, métricas y logs integrados).
* **Auditorías de rendimiento en streaming y entornos 3D/WebGPU.**

---

## 📚 Recursos Recomendados

* [Playwright Component Testing](https://playwright.dev/docs/components/overview)
* [Playwright API Testing](https://playwright.dev/docs/api-testing)
* [Playwright CI/CD Integration](https://playwright.dev/docs/ci)
* [Axe-Core Accessibility Testing](https://github.com/dequelabs/axe-core-npm)
* [Playwright Docker Images](https://playwright.dev/docs/docker)


# Playwright – Temas Especializados y Casos de Uso Avanzados  

- [Testing](/testing/testing/)  
- [QA](/testing/qa/)  
- [E2E - End to End Testing](/testing/e2e---end-to-end-testing/)  
- Playwright Trace Viewer  
- [Playwright](https://playwright.dev)

---

## 🧩 Testing Multinavegador y Multiplataforma

- Playwright ejecuta pruebas en **Chromium, Firefox, WebKit y Edge**, con soporte completo para **Android** y **iOS (via WebKit)**.  
- Permite detectar errores específicos de motor o sistema operativo.  
- Puede configurarse para ejecutar tests simultáneamente en varios navegadores con `projects[]`.

{% raw %}
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
	projects: [
		{ name: 'Chromium', use: { browserName: 'chromium' } },
		{ name: 'Firefox', use: { browserName: 'firefox' } },
		{ name: 'WebKit', use: { browserName: 'webkit' } },
	],
});
```
{% endraw %}`

* Ideal para validación de compatibilidad, CSS cross-browser y rendering visual.
* Se puede usar `--project` para filtrar ejecución.

---

## 📱 Testing en Dispositivos Móviles y Responsivos

* Playwright ofrece **emulación nativa** de dispositivos móviles (resolución, user agent, geolocalización, sensores).
* Ejemplo con iPhone 14:

{% raw %}
```ts
import { devices, test } from '@playwright/test';

test.use({ ...devices['iPhone 14 Pro'] });

test('visualización móvil correcta', async ({ page }) => {
	await page.goto('https://miapp.com');
	await expect(page).toHaveScreenshot('mobile-home.png');
});
```
{% endraw %}

* Soporte para **gestos táctiles**, **rotación de pantalla** y **modo oscuro**.
* Útil para validar experiencias móviles reales sin usar simuladores externos.

---

## 🔄 Testing de Integraciones Externas

* Puede interactuar con **OAuth2, SSO, APIs de terceros, pagos o redes sociales**.
* Ejemplo: integración con PayPal, Stripe o Auth0 simulando callbacks.

{% raw %}
```ts
await page.route('**/auth0/callback', (route) => 
	route.fulfill({ status: 200, body: JSON.stringify({ token: 'fake-jwt' }) })
);
```
{% endraw %}

* También permite **verificar redirecciones** y **tokens JWT** en cookies.
* Es posible testear integraciones reales en entornos sandbox de APIs públicas.

---

## 🧠 Testing de Internacionalización (i18n) y Localización (L10n)

* Validar que la app cambia correctamente de idioma, formato de moneda, fecha y textos.
* Ejemplo: detectar errores de traducción o truncamiento visual.

{% raw %}
```ts
await page.goto('/es');
await expect(page.locator('h1')).toHaveText('Bienvenido');
await page.goto('/en');
await expect(page.locator('h1')).toHaveText('Welcome');
```
{% endraw %}

* Compatible con pruebas dinámicas en múltiples idiomas dentro del mismo flujo.

---

## 🧩 Testing en Entornos Server-Side Rendering (SSR)

* Compatible con frameworks SSR como **Next.js, Nuxt, Remix, SvelteKit**.
* Permite verificar render inicial y rehidratación del cliente.

**Prueba de render inicial (sin JS habilitado):**

{% raw %}
```ts
test.use({ javaScriptEnabled: false });

test('el SSR muestra contenido accesible', async ({ page }) => {
	await page.goto('https://miapp.com/productos');
	const contenido = await page.textContent('h1');
	expect(contenido).toContain('Productos Destacados');
});
```
{% endraw %}

* Ayuda a validar SEO, accesibilidad y consistencia del HTML inicial.

---

## 🧪 Testing de Microfrontends y Aplicaciones Modulares

* Playwright puede testear sistemas **compuestos por múltiples apps independientes** (Microfrontends).
* Verifica la correcta comunicación entre módulos (iframes, módulos federados, eventos).

{% raw %}
```ts
const frame = page.frame({ name: 'checkout-mfe' });
await expect(frame.locator('text=Pago')).toBeVisible();
```
{% endraw %}

* También permite inyectar mocks para microservicios que alimentan cada módulo.

---

## 🧰 Estrategias de Sincronización y Esperas Inteligentes

* Playwright implementa **auto-waiting** pero también permite control manual.
* Recomendaciones:

  * `page.waitForSelector()` solo si el contenido es dinámico.
  * Usar `locator.waitFor()` para evitar race conditions.
  * Configurar `expect.poll()` para verificar cambios progresivos.

{% raw %}
```ts
await expect.poll(async () => page.locator('#contador').textContent()).toBe('5');
```
{% endraw %}

* Evita flakiness al depender del estado real del DOM y eventos.

---

## 🧬 Testing de Integraciones con Web Workers / Service Workers

* Detecta y controla **workers activos**, simulando condiciones offline o interrupciones.
* Ejemplo: deshabilitar red y comprobar respuesta en modo caché.

{% raw %}
```ts
await page.context().serviceWorkers();
await page.context().setOffline(true);
await page.goto('/offline');
await expect(page).toHaveText('Modo sin conexión activo');
```
{% endraw %}

* También puede escuchar mensajes del Service Worker y medir tiempos de sincronización.

---

## 🔍 Análisis de Logs, Errores y Cobertura

* Puede registrar **logs de consola**, **peticiones fallidas** y **excepciones no capturadas**.

{% raw %}
```ts
page.on('console', (msg) => console.log('Log:', msg.text()));
page.on('pageerror', (err) => console.error('Error:', err.message));
```
{% endraw %}

* Integración con **Cobertura de Código (Code Coverage)** mediante `@playwright/test` + `v8-to-istanbul`.
* Permite ver qué partes del código se ejecutaron durante el test.

---

## 🧠 Testing Distribuido y Paralelismo Avanzado

* Soporte para **sharding dinámico**, **test retries**, y **test workers** paralelos.
* Escalable en entornos con cientos de pruebas simultáneas.

{% raw %}
```bash
npx playwright test --shard=1/3
```
{% endraw %}

* Se integra con CI/CD para dividir suites entre runners o contenedores.
* Soporta **priorización adaptativa de tests** (ejecución de los más críticos primero).

---

## ⚙️ Extensibilidad y Plugins

* Playwright permite crear **custom reporters, fixtures y contextos extendidos**.
* Ejemplo: reporter personalizado JSON + consola.

{% raw %}
```ts
import { Reporter } from '@playwright/test';

class JsonConsoleReporter implements Reporter {
	onEnd(result) {
		console.log(JSON.stringify(result));
	}
}
export default JsonConsoleReporter;
```
{% endraw %}

* También existen integraciones con **Allure**, **TestRail**, **Jira** o **Slack** para informes automáticos.

---

## 📡 Integración con Observabilidad y Métricas

* Se pueden capturar métricas de red, tiempos de render y traces para análisis de rendimiento.
* En entornos avanzados, se integran con **OpenTelemetry**, **Grafana** o **Prometheus**.

{% raw %}
```ts
await page.tracing.start({ screenshots: true, snapshots: true });
await page.goto('/dashboard');
await page.tracing.stop({ path: 'trace.zip' });
```
{% endraw %}

* Permite correlacionar errores de test con logs y métricas del sistema.

---

## 🧭 Buenas Prácticas Avanzadas

* Evitar dependencias entre tests: cada test debe ser independiente.
* Centralizar **selectores estables** (roles, data-testid).
* Emplear `test.describe()` para agrupar flujos coherentes.
* Definir **Page Objects** para separar lógica de UI.
* Integrar `eslint-plugin-playwright` para detectar errores comunes.
* Usar **fixtures globales** para manejo de entorno (DB, seeds, usuarios).
* Mantener balance entre cobertura visual, API y E2E.

---

## 🔮 Innovaciones y Ecosistema 2025

* **Playwright AI Assist** (experimental): generación automática de pruebas desde descripciones naturales.
* **Playwright Cloud Grid**: ejecución paralela bajo demanda con métricas históricas.
* **Soporte completo para WebGPU, WASM y XR (realidad extendida)**.
* **Simulación de sensores avanzados**: giroscopio, geolocalización dinámica, cámara virtual.
* **Testing híbrido UI + API + DB** integrado en un mismo flujo de trace.
* **Integración con observabilidad generativa** para detección predictiva de flakiness.

---

## 📚 Recursos Adicionales

* [Playwright Reporters](https://playwright.dev/docs/test-reporters)
* [Playwright Mobile Emulation](https://playwright.dev/docs/emulation)
* [Playwright Network Mocking](https://playwright.dev/docs/network)
* [Playwright Accessibility Testing](https://playwright.dev/docs/accessibility-testing)
* [Playwright Tracing & Profiling](https://playwright.dev/docs/trace-viewer)

{% raw %}
```
```
{% endraw %}
