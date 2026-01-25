---
date: 2025-10-19 14:54
title: E2E - Conceptos Avanzados y Estrategia Completa
tags:
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
cssclasses:
  - hide-embedded-header1
categories:
  - Testing
public_note: "true"
category: Testing
---
# E2E - Conceptos Avanzados y Estrategia Completa
`$= dv.current().file.tags.join(" ")`

## 🧩 Arquitectura del Testing E2E

- **Capas del sistema**
	- El testing E2E debe considerar todas las capas: UI, API, base de datos, colas de mensajería, y servicios externos.
	- Una prueba efectiva verifica no solo la interfaz, sino también que los datos viajen correctamente entre capas.

- **Entornos**
	- Se recomienda usar entornos dedicados: `staging`, `sandbox`, o `preprod`.
	- Estos entornos deben reflejar la configuración de producción, pero con datos y permisos limitados.
	- Evita ejecutar E2E en local si los servicios dependen de redes externas o autenticaciones complejas.

- **Mocks y Stubs**
	- Para servicios externos no controlados (pagos, correos, APIs públicas), usa simulaciones con [MSW Mocks service worker](/testing/msw-mocks-service-worker/) o interceptores de red.
	- Permite estabilidad en las pruebas y evita costos o límites de API.
	- Los mocks deben reflejar **respuestas reales**, incluyendo errores y latencias.

## ⚙️ Diseño y Organización de Tests

- **Estructura recomendada**
	- `tests/e2e/flows/`: flujos completos (ej. login, compra, registro)
	- `tests/e2e/pages/`: objetos de página (Page Object Model)
	- `tests/e2e/utils/`: funciones comunes (login rápido, limpiar datos, mocks)
	- `tests/e2e/config/`: configuración del entorno, reporter y hooks

- **Page Object Model (POM)**
	- Patrón que separa la lógica de los tests de los selectores de UI.
	- Mejora la mantenibilidad y reduce duplicación.
	- Ejemplo:

{% raw %}
```js
class LoginPage {
	constructor(page) { this.page = page }
	async login(usuario, clave) {
		await this.page.fill('#usuario', usuario)
		await this.page.fill('#clave', clave)
		await this.page.click('button[type="submit"]')
	}
}
```
{% endraw %}`

## 🚀 Estrategias de Ejecución y Escalabilidad

* **Paralelización**

  * Divide las pruebas en suites independientes para ejecución simultánea.
  * [Playwright](/testing/playwright/) y Cypress soportan paralelización nativa o mediante runners de CI.
  * Mejora la velocidad total de ejecución en proyectos grandes.

* **Retries y Reintentos**

  * Configura reintentos automáticos ante errores intermitentes (flaky tests).
  * Ejemplo: en Playwright `retries: 2` o en Cypress `retries: { runMode: 2, openMode: 1 }`.

* **CI/CD Integration**

  * Ejecuta los tests automáticamente en cada commit o PR.
  * Genera reportes visuales y artefactos (screenshots, vídeos, logs).
  * Integraciones comunes: GitHub Actions, GitLab CI, Jenkins, CircleCI.

* **Reporte y Métricas**

  * Herramientas como Allure, Mochawesome o Playwright Trace Viewer permiten analizar fallos visualmente.
  * Guarda capturas, vídeos, logs de red y tiempos de ejecución.
  * Las métricas más útiles:

    * **Tasa de éxito**
    * **Duración promedio por suite**
    * **Flakiness Rate** (porcentaje de tests inestables)
    * **Cobertura de flujos críticos**

## 🔐 E2E y Seguridad

* **Pruebas de autenticación**

  * Incluye validaciones de login/logout, tokens caducados, y control de permisos.
  * Asegura que rutas protegidas no sean accesibles sin sesión.

* **Inyección de datos**

  * Verifica que el sistema maneje correctamente inputs peligrosos (XSS, SQLi, CSRF).
  * Usa datos controlados para simular ataques comunes y validar sanitización.

* **Roles y permisos**

  * Ejecuta los flujos con distintos perfiles de usuario (admin, cliente, invitado).
  * Asegura que cada rol tenga acceso solo a sus secciones correspondientes.

## ⚡ E2E y Rendimiento

* **Medición básica**

  * Registra tiempos de carga y respuesta durante los flujos críticos.
  * Detecta degradaciones en el rendimiento tras nuevas versiones.

* **Simulación de condiciones reales**

  * [Playwright](/testing/playwright/) y Selenium permiten simular red lenta, desconexión, geolocalización o diferentes resoluciones.
  * Ideal para probar apps responsivas y móviles.

* **Carga y estrés**

  * Aunque no es su propósito principal, E2E puede usarse junto a herramientas como k6 o Locust para medir rendimiento bajo carga.

## 🧠 Troubleshooting y Mantenimiento

* **Identificación de Flaky Tests**

  * Los tests inestables suelen deberse a:

    * Dependencias de tiempo (timeouts o animaciones)
    * Datos inconsistentes entre ejecuciones
    * Selectores poco estables (clases generadas dinámicamente)
  * Solución: usar `await` con condiciones precisas (`toBeVisible`, `toHaveText`), mocks controlados y datos aislados.

* **Refactor periódico**

  * Revisar y limpiar flujos obsoletos o redundantes.
  * Actualizar selectores y datos de prueba.
  * Dividir pruebas largas en pasos reutilizables.

* **Documentación**

  * Mantener registro de flujos cubiertos y dependencias.
  * Generar reportes automáticos y dashboards accesibles al equipo.

## 🧱 Integración con Otras Capas de Testing

* **Pruebas unitarias**

  * Validan funciones o componentes aislados.
  * Son rápidas y abundantes.

* **Pruebas de integración**

  * Validan que los módulos se comuniquen correctamente.
  * Ejemplo: frontend ↔ API.

* **E2E**

  * Simula al usuario final y valida la cadena completa.
  * Más lentas, pero con mayor valor de negocio.

* **Relación ideal (Pirámide de Testing)**

  * 70% Unitarias
  * 20% Integración
  * 10% E2E

## 📘 Recomendaciones Finales

* Ejecutar E2E en pipelines automáticos y entornos controlados.
* Documentar claramente los flujos y casos de uso.
* Mantener mocks actualizados y basados en respuestas reales.
* Evitar usar E2E como sustituto de pruebas unitarias o de integración.
* Asegurar que cada test aporte **valor real de negocio** y cubra escenarios representativos.
* Incluir reportes de fallos automáticos y notificaciones al equipo de QA o DevOps.
