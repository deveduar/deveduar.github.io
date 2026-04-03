---
date: 2025-10-20 18:37
title: Cobertura de código en Jest y análisis con SonarQube
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: true
category: Testing
---
# Cobertura de código en Jest y análisis con SonarQube

- [Testing](/testing/testing/)
- [jest](/testing/jest/)
- [CICD](/devops/cicd/)
- Code coverage
- SonarQube
- SonarCloud
- [GitHub Actions](/devops/github-actions/)
- jest-sonar - npm
- [QA](/testing/qa/)

## 🧠 Conceptos clave

- La **cobertura de código (code coverage)** mide qué porcentaje del código fuente es ejecutado por los tests.  
  Es una métrica de [QA](/testing/qa/) que ayuda a detectar código no probado o rutas de ejecución sin validar.
- Jest incorpora un sistema de cobertura integrado que analiza automáticamente archivos `.js`, `.ts` o `.jsx` ejecutados durante las pruebas.
- Herramientas como SonarQube y SonarCloud permiten visualizar esos datos, generando reportes y dashboards de calidad continua.
- La cobertura **no garantiza calidad**, pero sí ayuda a identificar zonas no testeadas o código muerto.

## 📊 Tipos de cobertura que analiza Jest

- **Statements** → porcentaje de sentencias ejecutadas.  
- **Branches** → cubre condiciones, if/else, switch y operadores ternarios.  
- **Functions** → mide funciones llamadas durante los tests.  
- **Lines** → líneas de código ejecutadas al menos una vez.

Ejemplo de reporte en consola:
{% raw %}
```

| File      | % Stmts | % Branch | % Funcs | % Lines |
| --------- | ------- | -------- | ------- | ------- |
| All files | 92.3    | 88.7     | 91.5    | 93.2    |

```
{% endraw %}`

## ⚙️ Activar la cobertura en Jest

### 1. Desde línea de comandos
{% raw %}
```bash
npx jest --coverage
```
{% endraw %}`

### 2. En el archivo `package.json`

{% raw %}
```json
{
	"scripts": {
		"test:coverage": "jest --coverage"
	}
}
```
{% endraw %}

### 3. Configuración avanzada en `jest.config.js`

{% raw %}
```javascript
export default {
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.{js,jsx,ts,tsx}",
		"!src/**/*.d.ts"
	],
	coverageDirectory: "coverage",
	coverageReporters: ["text", "lcov", "cobertura"],
}
```
{% endraw %}

## 📂 Reportes generados

* **text-summary** → resumen en consola.
* **html** → visualización local (`coverage/lcov-report/index.html`).
* **lcov** → usado por herramientas externas como SonarQube.
* **cobertura/xml** → para integraciones CI y dashboards.

## 🧩 Integración con SonarQube

### 1. Instalar y configurar jest-sonar - npm

{% raw %}
```bash
npm install --save-dev jest-sonar
```
{% endraw %}

### 2. Agregar al `package.json`

{% raw %}
```json
"jestSonar": {
	"reportPath": "coverage",
	"reportFile": "sonar-report.xml",
	"indent": 4
}
```
{% endraw %}

### 3. Ejecutar los tests con reporter Sonar

{% raw %}
```bash
jest --coverage --testResultsProcessor jest-sonar
```
{% endraw %}

### 4. Configurar el análisis en SonarQube o SonarCloud

* En el archivo `sonar-project.properties`:

{% raw %}
```
sonar.projectKey=mi-proyecto
sonar.sources=src
sonar.tests=tests
sonar.javascript.lcov.reportPaths=coverage/lcov.info
sonar.testExecutionReportPaths=coverage/sonar-report.xml
```
{% endraw %}

## 🔄 Integración con [GitHub Actions](/devops/github-actions/)

Ejemplo de pipeline que genera y sube cobertura a SonarCloud:

{% raw %}
```yaml
name: Jest Coverage Report
on:
  push:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Run Jest coverage
        run: npm run test:coverage
      - name: Upload coverage to SonarCloud
        uses: SonarSource/sonarcloud-github-action@master
        with:
          args: >
            -Dsonar.projectKey=mi-proyecto
            -Dsonar.organization=mi-org
            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
```
{% endraw %}

## 📈 Análisis de resultados y métricas

* **Objetivo mínimo recomendado**:

  * 80% statements
  * 75% branches
  * 80% functions
  * 80% lines
* Las alertas de cobertura pueden configurarse en SonarQube para bloquear merges si no se cumplen umbrales.
* Puedes integrar badges de cobertura en README.md mediante servicios como Codecov o SonarCloud:

  {% raw %}
```markdown
  ![Coverage](https://sonarcloud.io/api/project_badges/measure?project=mi-proyecto&metric=coverage)
  ```
{% endraw %}

## 🧠 Ejemplo práctico

{% raw %}
```javascript
// math.js
export const dividir = (a, b) => {
	if (b === 0) throw new Error('División por cero')
	return a / b
}
```
{% endraw %}

{% raw %}
```javascript
// math.test.js
import { dividir } from './math'

describe('dividir()', () => {
	test('divide correctamente', () => {
		expect(dividir(10, 2)).toBe(5)
	})
	test('lanza error al dividir por cero', () => {
		expect(() => dividir(10, 0)).toThrow('División por cero')
	})
})
```
{% endraw %}

Ejecutar cobertura:

{% raw %}
```bash
npm run test:coverage
```
{% endraw %}

Generará reportes con información de líneas y ramas cubiertas, lo que permitirá a Sonar detectar que todos los flujos están probados.

## 💡 Buenas prácticas

* No busques 100% de cobertura sin propósito: prioriza código crítico.
* Excluye archivos irrelevantes (`*.config.js`, `index.tsx`, mocks).
* Mantén reportes limpios y centralizados en la carpeta `/coverage`.
* Automatiza los reportes en tu pipeline CI/CD.
* Usa SonarCloud para unificar métricas de calidad (bugs, smells, duplicaciones y cobertura).

## 📚 Recursos y documentación

* [Jest Coverage Docs](https://jestjs.io/docs/cli#--coverage)
* [jest-sonar en npm](https://www.npmjs.com/package/jest-sonar)
* [Integración con SonarQube](https://docs.sonarsource.com/sonarqube/latest/)
* [GitHub Action oficial de SonarCloud](https://github.com/SonarSource/sonarcloud-github-action)
* [CICD](/devops/cicd/) y control de calidad automatizado con [GitHub Actions](/devops/github-actions/)
