---
date: 2025-10-15 11:48
title: E2E - End to End Testing
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Testing
tags:
  - testing
  - e2e
---
# E2E - End to End Testing

- docs
	- [Guía Fundamental de E2E](/uncategorized/gu-a-fundamental-de-e2e/)
	- [E2E - Conceptos Avanzados y Estrategia Completa](/testing/e2e---conceptos-avanzados-y-estrategia-completa/)
	- [Guía Práctica de E2E - End to End Testing](/testing/gu-a-pr-ctica-de-e2e---end-to-end-testing/)
	- [E2E - Ejemplos Prácticos Avanzados](/testing/e2e---ejemplos-pr-cticos-avanzados/)
	- [Guía Actualizada 2025 de E2E End-to-End Testing](/testing/gu-a-actualizada-2025-de-e2e-end-to-end-testing/)
- [Testing](/testing/testing/)
	- Proceso para validar que una aplicación funciona correctamente de principio a fin.
	- Reproduce la experiencia real del usuario, probando múltiples capas del sistema: frontend, backend, base de datos y servicios externos.
	- Garantiza que los flujos críticos de negocio no se rompan tras cambios en el código.
	- Se ejecuta generalmente después de las pruebas unitarias e integradas, como validación final antes del despliegue.

- End to End
	- Implica probar el sistema completo, desde la interfaz de usuario hasta las APIs y bases de datos.
	- Simula interacciones reales del usuario, asegurando que cada componente se comunique correctamente.
	- Se usa para prevenir regresiones y asegurar la consistencia del flujo de trabajo.
	- Puede incluir pasos complejos, como autenticación, pagos o carga de archivos.

- Flujo de la app
	- Representa la secuencia completa de acciones que un usuario realiza dentro de la aplicación.
	- Ejemplo: iniciar sesión → crear tarea → editar → marcar como completada → cerrar sesión.
	- Cada flujo debe tener pruebas automatizadas que verifiquen tanto la lógica visible (UI) como la invisible (respuestas del servidor).

- Todos los sistemas
	- E2E implica verificar la integración entre subsistemas: cliente, servidor, API, base de datos, servicios externos (como pasarelas de pago o APIs de terceros).
	- Se busca detectar fallos en la comunicación entre módulos o errores en la configuración del entorno.
	- Puede requerir entornos de staging o sandbox para replicar el sistema real.

- Escenarios de user
	- Describen comportamientos y caminos posibles del usuario dentro del sistema.
	- Se usan como base para definir casos de prueba.
	- Ejemplo: “Como usuario registrado, quiero poder restablecer mi contraseña para recuperar acceso”.
	- Cada escenario se convierte en una prueba automatizada que valida el resultado esperado.

- Ejemplo: flujo al enviar form
	- Caso típico en pruebas E2E: rellenar formulario, enviar datos y verificar respuesta.
	- Verifica validaciones, errores del servidor, feedback visual y persistencia de datos.
	- Permite detectar regresiones cuando cambian las reglas del backend o el diseño del frontend.

## Herramientas E2E

- Selenium
	- Marco de pruebas veterano basado en control de navegadores reales mediante WebDriver.
	- Compatible con múltiples lenguajes: Java, Python, JS, C#, etc.
	- Ideal para aplicaciones legacy o entornos que requieran múltiples navegadores.
	- Su configuración es más compleja, pero ofrece flexibilidad total.

- [Playwright](/testing/playwright/)
	- Framework moderno mantenido por Microsoft.
	- Soporta múltiples navegadores (Chromium, Firefox, WebKit) y entornos móviles.
	- Permite ejecutar pruebas en paralelo, grabar vídeos, hacer screenshots y simular condiciones reales (geolocalización, red lenta, etc.).
	- Integra test runner propio y API intuitiva para flujos complejos.

- Cypress
	- Herramienta moderna orientada a desarrolladores front-end.
	- Corre en el mismo contexto del navegador, ofreciendo depuración visual y tiempo real.
	- Excelente para flujos rápidos y entornos CI/CD.
	- Menor soporte para pruebas multi-pestaña o navegadores fuera de Chromium, pero gran productividad.

## Cobertura de flujos críticos y regresiones

- La cobertura se centra en los procesos clave para el negocio: login, pagos, creación/edición de datos, notificaciones, integraciones externas.
- Cada flujo debe tener al menos una prueba automatizada que verifique su correcto funcionamiento.
- Las pruebas de regresión aseguran que una nueva versión del código no rompa funcionalidades previamente operativas.
- Se recomienda usar pipelines automáticos (CI/CD) para ejecutar los tests E2E antes de cada despliegue.

## Buenas prácticas

- Mantener los datos de prueba aislados y reutilizables (fixtures o mocks).
- Nombrar los tests según el comportamiento esperado, no solo la función técnica.
- Automatizar tanto como sea posible, pero priorizar la estabilidad sobre la cantidad.
- Integrar los resultados con reportes visuales o dashboards (ej: Allure, Cypress Dashboard, Playwright Trace Viewer).
- Combinar E2E con pruebas unitarias e integradas para una estrategia de testing completa.
