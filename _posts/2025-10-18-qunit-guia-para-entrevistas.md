---
date: 2025-10-18 15:22
title: qunit guia para entrevistas
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: true
category: Testing
---
# QUnit - Guía completa para entrevistas y uso profesional


* [QUnit](/testing/qunit/)
* [Testing](/testing/testing/)
* [TDD - Test Driven Development](/testing/tdd---test-driven-development/)
* [javascript](/desarrollo%20web/javascript/)
* [node.js](/backend/node-js/)
* [MSW Mocks service worker](/testing/msw-mocks-service-worker/)
* Entrevistas
* CI/CD
* nyc
* c8
* docs

## 🧠 Conceptos clave a dominar

* Framework minimalista para tests unitarios y de integración en [javascript](/desarrollo%20web/javascript/) y [node.js](/backend/node-js/).
* Módulos (`QUnit.module`) y tests (`QUnit.test`) como unidad de organización.
* Assertions: `assert.ok`, `assert.equal`, `assert.strictEqual`, `assert.deepEqual`, `assert.throws`.
* Hooks: `before`, `beforeEach`, `after`, `afterEach`.
* Soporte para tests asíncronos con `assert.async()`.
* Integración con pipelines CI/CD y cobertura moderna (`nyc`, `c8`).
* Compatibilidad con mocks HTTP mediante [MSW Mocks service worker](/testing/msw-mocks-service-worker/).
* Buenas prácticas: tests atómicos, deterministas, independientes y con nombres descriptivos.

## ❓ Preguntas frecuentes de entrevistas y respuestas

* **Q:** Diferencia entre `QUnit.test` y `QUnit.module`  
  **R:** `QUnit.module` agrupa tests relacionados bajo un mismo contexto y permite usar hooks. `QUnit.test` define cada caso de prueba individual con assertions.

* **Q:** ¿Qué son las assertions y por qué son importantes?  
  **R:** Son comprobaciones dentro de un test que verifican el resultado esperado. Garantizan que la lógica funciona correctamente y detectan regresiones.

* **Q:** ¿Cómo manejarías tests asíncronos en QUnit?  
  **R:** Con `assert.async()` se obtiene un callback `done()` que indica a QUnit cuándo finalizar el test. También se pueden usar `async/await` o promesas.

* **Q:** Diferencia entre `assert.equal` y `assert.strictEqual`  
  **R:** `assert.equal` compara valores con igualdad débil (`==`). `assert.strictEqual` compara con igualdad estricta (`===`).

* **Q:** Cómo aislar efectos colaterales entre tests  
  **R:** Usando hooks `beforeEach` y `afterEach` para limpiar estado compartido y mantener cada test independiente.

* **Q:** Comparación con frameworks modernos: Jest, Mocha, Vitest  
  **R:** QUnit es minimalista y procedural, ideal para librerías JS y legacy. Jest/Vitest tienen más features, integración con ESM y frontend moderno. Mocha+Chai es modular y flexible.

* **Q:** Estrategias para medir cobertura con `nyc` o `c8`  
  **R:** Instrumentar tests con `nyc` o `c8`, excluir mocks/fixtures para no distorsionar resultados, establecer thresholds y generar reportes `lcov` y `html`.

* **Q:** Buenas prácticas para naming, estructura y mantenimiento  
  **R:** Módulos claros por funcionalidad, tests atómicos, nombres descriptivos, mantener independencia y determinismo.

## 🏢 Día de trabajo típico usando QUnit en proyecto

* 09:00 Revisar nuevos tickets o features.
* 09:30 Escribir tests unitarios para nuevas funciones JS/Node.
* 11:00 Ejecutar tests en local y revisar cobertura.
* 12:00 Integrar mocks con [MSW Mocks service worker](/testing/msw-mocks-service-worker/) para endpoints externos.
* 14:00 Commit y push de tests junto a cambios de código.
* 14:30 Validación de tests en pipeline CI/CD con coverage (`nyc` o `c8`).
* 16:00 Analizar fallos, depurar y actualizar tests existentes.
* 17:30 Revisar pull requests de compañeros y asegurar consistencia en estructura y coverage.

## 🧩 Ejemplo de uso en proyecto

{% raw %}
```js
// utils/math.js
export function sum(a,b){ return a+b; }
export function fetchData(api){ return fetch(api).then(r=>r.json()); }

// tests/unit/math.test.js
import { sum, fetchData } from '../../utils/math.js';
QUnit.module("Math Utils", hooks => {
  let value;
  hooks.beforeEach(()=>{ value=0; });

  QUnit.test("sum basic", assert => {
    value = sum(2,3);
    assert.equal(value, 5, "2+3 debe ser 5");
  });

  QUnit.test("async fetch mock", async assert => {
    const done = assert.async();
    setTimeout(() => { assert.ok(true, "Datos simulados correctamente"); done(); }, 300);
  });
});
```
{% endraw %}

*Integración con pipeline CI/CD y cobertura:*

{% raw %}
```json
// package.json scripts
{
  "scripts": {
    "test": "nyc qunit 'tests/**/*.test.js'"
  },
  "nyc": {
    "reporter":["text-summary","html"], 
    "exclude":["tests/**","mocks/**"], 
    "all":true
  }
}
```
{% endraw %}

*Pipeline GitHub Actions:*

{% raw %}
```yaml
name: QUnit CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run test
      - name: Upload Coverage
        uses: actions/upload-artifact@v4
        with: { name: coverage-report, path: coverage }
```
{% endraw %}

## 💡 Experiencia de uso en empresa

* Implementación de QUnit en librerías legacy de [javascript](/desarrollo%20web/javascript/) y servicios [node.js](/backend/node-js/).
* Cobertura de tests >90% usando `nyc`, resultados integrados en CI/CD.
* Uso de [MSW Mocks service worker](/testing/msw-mocks-service-worker/) para aislar APIs externas.
* Capacitación de nuevos desarrolladores en buenas prácticas de tests.
* Migración parcial a Jest para proyectos frontend modernos, manteniendo QUnit en backend legacy.

## ❓ Consejos para entrevistas técnicas

* Explica claramente módulos y tests, y su flujo de ejecución.
* Muestra cómo manejas tests asíncronos y mocks.
* Describe experiencia real: cobertura, pipelines, debugging.
* Presenta ejemplos de código claros y bien organizados.
* Señala diferencias con otros frameworks y ventajas de QUnit.
