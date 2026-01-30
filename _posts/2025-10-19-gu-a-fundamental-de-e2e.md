creation date: 2025-10-19 14:43
tags:
keywords:
source:
status: 📌
Parent: "Area-Prog"
cssclasses:
  - hide-embedded-header1
categories:
public_note: "true"

# Guía Fundamental de [E2E - End to End Testing](/testing/e2e---end-to-end-testing/)
## 🧠 Conceptos Clave

- **Definición**
	- El testing **End to End (E2E)** verifica que una aplicación funcione correctamente **de principio a fin**, tal como lo haría un usuario real.
	- Evalúa todos los componentes del sistema (frontend, backend, base de datos, servicios externos, autenticación, etc.).
	- Su objetivo es asegurar que **los flujos críticos de negocio** se mantengan estables tras actualizaciones o cambios.

- **Objetivo**
	- Detectar errores de integración entre módulos.
	- Validar la experiencia completa del usuario.
	- Asegurar que el sistema responde correctamente en escenarios reales.
	- Prevenir **regresiones** (errores reintroducidos tras modificaciones).

- **Cuándo se usa**
	- Al finalizar un desarrollo o sprint, antes del despliegue.
	- En pipelines de CI/CD para validar automáticamente cada versión.
	- Cuando hay cambios significativos en funcionalidades clave (login, pagos, formularios, etc.).

## ⚙️ Componentes de una Prueba E2E

- **Entorno de pruebas**
	- Réplica del entorno real (staging o preproducción).
	- Configurado con datos de prueba, variables de entorno y servicios simulados si es necesario.

- **Flujos de usuario**
	- Secuencias de acciones reales (crear cuenta, iniciar sesión, enviar formulario, realizar compra, etc.).
	- Cada flujo debe tener una **prueba automatizada** que valide su resultado esperado.

- **Datos y estados**
	- Se pueden usar datos falsos (fixtures) o APIs de test.
	- Idealmente, las pruebas deben limpiar los datos tras cada ejecución.

- **Validaciones**
	- Incluyen tanto el **resultado visual** (UI) como la **respuesta lógica** (datos devueltos por la API).
	- Ejemplo: verificar que un mensaje de éxito aparezca y que el registro se guarde correctamente en la base de datos.

## 🧩 Herramientas Populares

- Cypress
	- Enfocada en aplicaciones web modernas.
	- Excelente para desarrolladores front-end.
	- Proporciona un panel visual de ejecución, time travel, y debugging integrado.

- [Playwright](/testing/playwright/)
	- Compatible con múltiples navegadores y dispositivos.
	- Permite pruebas paralelas, captura de trazas y simulación de condiciones reales (geolocalización, red lenta).
	- Ofrece integración directa con CI/CD.

- Selenium
	- Framework veterano basado en WebDriver.
	- Compatible con múltiples lenguajes y navegadores.
	- Ideal para grandes equipos o sistemas legacy.

- **Otros**
	- TestCafe, WebdriverIO, Puppeteer son opciones complementarias según el ecosistema.

## 🔍 Flujo Típico de una Prueba E2E

1. Abrir la aplicación (browser controlado).
2. Autenticarse o iniciar sesión.
3. Realizar una acción (rellenar formulario, enviar datos, navegar entre vistas).
4. Validar la respuesta visual y/o lógica.
5. Cerrar sesión o limpiar el entorno.

### Ejemplo: Envío de Formulario (Playwright)

{% raw %}
```js
import { test, expect } from '@playwright/test'

test('flujo de envío de formulario', async ({ page }) => {
	await page.goto('https://miapp.test')
	await page.fill('#nombre', 'Eduardo')
	await page.fill('#email', 'eduardo@example.com')
	await page.click('#enviar')
	await expect(page.locator('.mensaje-exito')).toHaveText('Formulario enviado correctamente')
})
```
{% endraw %}`

## 🧮 Cobertura de Flujos Críticos y Regresiones

* **Flujos críticos**

  * Login / Logout
  * Registro de usuario
  * Procesos de pago o compra
  * Edición o eliminación de datos importantes
  * Envío de formularios

* **Pruebas de regresión**

  * Validan que nuevas implementaciones **no rompan funcionalidades existentes**.
  * Se ejecutan automáticamente en cada commit o build.
  * Reducen riesgos en despliegues frecuentes.

## 📊 Estrategia y Buenas Prácticas

* **Planificación**

  * Identificar los flujos más críticos del negocio.
  * Priorizar las pruebas según el impacto del fallo.
  * Mantener un equilibrio entre pruebas unitarias, de integración y E2E.

* **Automatización**

  * Integrar las pruebas en pipelines CI/CD (ej: GitHub Actions, GitLab CI, Jenkins).
  * Usar entornos de staging o mocks controlados.

* **Estabilidad**

  * Evitar dependencias externas inestables (usar mocks o entornos sandbox).
  * Asegurar que los datos de prueba sean consistentes y repetibles.
  * Usar **esperas explícitas** o **selectores estables** para evitar fallos intermitentes.

* **Documentación**

  * Documentar los casos de prueba, sus pasos y resultados esperados.
  * Mantener una estructura clara de carpetas (`tests/e2e/flows/`, `tests/e2e/utils/`, etc.).
  * Generar reportes automáticos (Allure, Mochawesome, Playwright Reporter).

## 🧱 Pirámide de Testing

* **Unitarias:** prueban funciones o componentes aislados.
* **Integración:** validan comunicación entre módulos.
* **E2E:** prueban el sistema completo.
* Idealmente, las E2E deben ser menos numerosas pero de alto valor, cubriendo los **flujos más críticos**.

## 🚀 Conclusión

* Las pruebas E2E son la **última línea de defensa** antes de la producción.
* Garantizan que los usuarios puedan realizar sus tareas sin errores.
* Una buena estrategia E2E reduce regresiones, aumenta la confianza en los despliegues y mejora la calidad global del producto.
