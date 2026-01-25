---
date: 2025-10-20 18:43
title: Configuración de Jest en proyectos TypeScript
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
# Configuración de Jest en proyectos TypeScript
`$= dv.current().file.tags.join(" ")`

- [Testing](/testing/testing/)
- [jest](/testing/jest/)
- [typescript](/software%20engineering/typescript/)
- babel-jest
- ts-jest
- [node.js](/backend/node-js/)
- [CICD](/devops/cicd/)
- [QA](/testing/qa/)

## 🧠 Conceptos clave

- Jest es un framework de testing mantenido por Meta (Facebook) que se integra de forma nativa con proyectos de JavaScript y TypeScript.  
- TypeScript requiere una capa de transformación previa para que Jest pueda interpretar el código (ya que Jest no entiende TS por defecto).  
- Para ello existen dos herramientas principales:  
  - **`ts-jest`** → Transpila directamente desde TypeScript.  
  - **`babel-jest`** → Usa Babel como transformador intermedio.  
- Ambos pueden coexistir, pero la elección depende del proyecto:  
  - `ts-jest` → ideal si el proyecto se compila con `tsc`.  
  - `babel-jest` → preferido si ya usas Babel (React, Next.js, Vite, etc.).

---

## ⚙️ Configuración básica con `ts-jest`

### 1. Instalación

```bash
npm install --save-dev jest ts-jest @types/jest typescript
````

### 2. Inicialización del entorno

```bash
npx ts-jest config:init
```

Esto genera un archivo `jest.config.js` optimizado para TypeScript.

### 3. Ejemplo de configuración generada

```javascript
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
}
```

### 4. Archivo `tsconfig.json` ajustado para Jest

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "commonjs",
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "moduleResolution": "node",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src", "**/*.test.ts"]
}
```

---

## ⚙️ Configuración alternativa con `babel-jest`

### 1. Instalación

```bash
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-typescript @types/jest
```

### 2. Archivo `.babelrc`

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript"
  ]
}
```

### 3. Configuración `jest.config.js`

```javascript
export default {
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
}
```

> 💡 `babel-jest` es ideal en proyectos con Next.js, Vite o React, donde Babel ya está configurado y no se desea compilar dos veces.

---

## 🧩 Configuración mixta (React + TS + Jest)

Si tu proyecto usa **React + TypeScript**, el setup recomendado incluye:

```bash
npm install --save-dev jest ts-jest @types/jest @testing-library/react @testing-library/jest-dom
```

**jest.config.js**

```javascript
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
```

**jest.setup.ts**

```typescript
import '@testing-library/jest-dom'
```

---

## 🧠 Ejemplo práctico

```typescript
// utils/sumar.ts
export const sumar = (a: number, b: number): number => a + b
```

```typescript
// utils/sumar.test.ts
import { sumar } from './sumar'

describe('sumar()', () => {
  test('suma dos números correctamente', () => {
    expect(sumar(2, 3)).toBe(5)
  })
})
```

Ejecución:

```bash
npm test
```

Salida:

```
 PASS  src/utils/sumar.test.ts
  sumar()
    ✓ suma dos números correctamente (3 ms)
```

---

## 📊 Integración con [CICD](/devops/cicd/) y cobertura

Para combinar Jest + TypeScript + cobertura en pipelines CI:

**package.json**

```json
"scripts": {
  "test": "jest --passWithNoTests",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

**github actions:**

```yaml
name: Jest TypeScript Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run test:coverage
```

---

## 🧠 Depuración de errores comunes

| Error                                          | Causa probable                       | Solución                                         |
| ---------------------------------------------- | ------------------------------------ | ------------------------------------------------ |
| `Cannot use import statement outside a module` | Módulo no compilado como CommonJS    | Ajusta `"module": "commonjs"` en `tsconfig.json` |
| `Jest encountered an unexpected token`         | Falta transformador para TS/JSX      | Añade `transform` en `jest.config.js`            |
| `ReferenceError: window is not defined`        | Se usa entorno Node en test de React | Usa `testEnvironment: 'jsdom'`                   |
| Tests lentos                                   | `ts-jest` recompila todo             | Usa `isolatedModules: true` o cachea compilación |
| Problemas con alias `@/`                       | Falta `moduleNameMapper`             | Define rutas en `jest.config.js`                 |

---

## 💡 Buenas prácticas

* Usa `ts-jest` para entornos Node y APIs.
* Usa `babel-jest` para entornos frontend (React, Next, Vite).
* Define alias con `moduleNameMapper` para evitar paths largos.
* Separa configuraciones por entorno (`jest.config.api.js`, `jest.config.ui.js`).
* Usa `test:coverage` como parte del pipeline CI.
* Integra SonarQube o SonarCloud para análisis de cobertura.

---

## 📚 Recursos recomendados

* [Jest Docs - TypeScript](https://jestjs.io/docs/getting-started#using-typescript)
* [ts-jest Docs](https://kulshekhar.github.io/ts-jest/)
* [babel-jest Docs](https://jestjs.io/docs/code-transformation)
* [Testing Library](https://testing-library.com/docs/)
* Configuración de Jest en proyectos React
* [Cobertura de código en Jest y análisis con SonarQube](/testing/cobertura-de-c-digo-en-jest-y-an-lisis-con-sonarqube/)


