---
date: 2025-10-20 18:02
title: Guía avanzada de Jest con mocks y spies
keywords:
aliases:
source:
status: 📌
Parent: "[[Area-Prog]]"
category: Testing
tags:
  - Codes
---
# Guía avanzada de Jest con mocks y spies

- [javascript](/desarrollo%20web/javascript/)
- [react](/frontend/react/)
- [Testing](/testing/testing/)
- Unit test
- Mocking
- jest.fn
- jest.spyOn
- jest.mock
- Asynchronous testing
- [MSW Mocks service worker](/testing/msw-mocks-service-worker/)

## 🧠 Conceptos clave

- En Jest, **mocks** y **spies** permiten aislar dependencias externas y observar cómo se comporta el código bajo prueba.
- Un **mock** reemplaza una función, módulo o clase para simular su comportamiento.
- Un **spy** rastrea llamadas y argumentos de una función real sin reemplazarla por completo.
- Son esenciales en pruebas unitarias y de integración para evitar efectos secundarios (como peticiones HTTP, acceso a DB, o temporizadores).
- Se pueden aplicar a funciones, módulos completos o librerías externas (como `axios` o `fetch`).

## 🧩 Tipos de mocks

1. **Funciones simuladas**  
   Se crean con `jest.fn()` y pueden registrar llamadas o devolver valores personalizados.
   {% raw %}
```javascript
   const mockCallback = jest.fn(x => x * 2)
   [1, 2, 3].forEach(mockCallback)
   expect(mockCallback).toHaveBeenCalledTimes(3)
   expect(mockCallback).toHaveBeenCalledWith(2)
```
{% endraw %}

2. **Espías (spies)**  
    Usan `jest.spyOn(obj, 'método')` para observar llamadas sin reemplazar el método original.
    {% raw %}
```javascript
    const user = { save: () => 'ok' }
    const spy = jest.spyOn(user, 'save')
    user.save()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
    ```
{% endraw %}
3. **Mocks de módulos completos**  
    Simulan dependencias completas como librerías o servicios HTTP.
    {% raw %}
```javascript
    jest.mock('axios')
    import axios from 'axios'
    axios.get.mockResolvedValue({ data: { message: 'ok' } })
    ```
{% endraw %}

## ⚙️ Mocking de dependencias externas

- Ideal cuando una función depende de servicios externos o módulos de terceros.
- Ejemplo con `fetch` y [MSW Mocks service worker](/testing/msw-mocks-service-worker/):
    {% raw %}
```javascript
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ id: 1, name: 'Eduardo' }) })
    )
    import { getUser } from '../api'
    test('obtiene datos de usuario', async () => {
      const user = await getUser(1)
      expect(user.name).toBe('Eduardo')
      expect(fetch).toHaveBeenCalledWith('/users/1')
    })
    ```
{% endraw %}
- Para entornos más realistas (sin sobrescribir `fetch` global), usa [MSW Mocks service worker](/testing/msw-mocks-service-worker/) para interceptar peticiones en test suites o E2E.

## 🧱 Mocks parciales y restauración

- `jest.requireActual()` permite usar partes reales de un módulo mockeado.
- `mockRestore()` y `clearAllMocks()` evitan contaminación entre tests.
    {% raw %}
```javascript
    const utils = { sumar: (a, b) => a + b }
    jest.spyOn(utils, 'sumar').mockImplementation(() => 42)
    test('usa mock temporal', () => {
      expect(utils.sumar(2, 2)).toBe(42)
    })
    afterEach(() => {
      jest.restoreAllMocks()
    })
    ```
{% endraw %}

## 🔄 Mocks en [react](/frontend/react/) y componentes

- Para componentes que usan hooks o contextos:
    {% raw %}
```javascript
    import { render, screen } from '@testing-library/react'
    import * as hooks from '../useAuth'
    import Dashboard from '../Dashboard'
    jest.spyOn(hooks, 'useAuth').mockReturnValue({ user: { name: 'Edu' } })
    test('muestra el nombre del usuario', () => {
      render(<Dashboard />)
      expect(screen.getByText(/Edu/)).toBeInTheDocument()
    })
    ```
{% endraw %}
- Este enfoque es útil cuando el hook o contexto obtiene datos externos, como autenticación o configuración remota.

## 📊 Casos avanzados de uso

- **Timers simulados**
    {% raw %}
```javascript
    jest.useFakeTimers()
    const timer = jest.fn()
    setTimeout(timer, 1000)
    jest.advanceTimersByTime(1000)
    expect(timer).toHaveBeenCalled()
    ```
{% endraw %}
- **Mocks dinámicos por test**
    {% raw %}
```javascript
    beforeEach(() => {
      jest.resetModules()
    })
    ```
{% endraw %}
- **Reemplazo temporal de dependencias** para probar rutas o comportamientos alternos.

## 💡 Buenas prácticas

- Mantén los mocks **locales a cada test** siempre que sea posible.
- Usa `jest.clearAllMocks()` en `afterEach()` para evitar contaminación.
- Prefiere `jest.spyOn()` a `jest.fn()` cuando quieras conservar la funcionalidad original.
- Documenta qué dependencias se mockean y por qué.
- Evita mocks innecesarios en tests de integración: usa datos reales o entornos simulados.

## 🔍 Recursos recomendados

- [Documentación oficial de Mocks en Jest](https://jestjs.io/docs/mock-functions)
- [Guía de mocks automáticos y manuales](https://jestjs.io/docs/manual-mocks)
- [MSW Mocks service worker](/testing/msw-mocks-service-worker/) para simular APIs REST/GraphQL.
- Testing Library para testear componentes React que dependen de hooks o APIs.