creation date: 2025-10-22 12:19
tags:
keywords:
source:
status: 📌
Parent: "Area-Prog"
cssclasses:
  - hide-embedded-header1
categories:
public_note: "true"
# Estrategias de mocking para APIs y servicios externos con Jest

- [jest](/testing/jest/)
- [Testing](/testing/testing/)
- API
- Mocks
- [MSW Mocks service worker](/testing/msw-mocks-service-worker/)
- [QA](/testing/qa/)
- Node.js
- [CICD](/devops/cicd/)
- integration test
- Unit test
- fetch
- [axios](/backend/axios/)

## 🧠 Conceptos clave

- **Mocking** es una técnica para simular el comportamiento de dependencias externas durante los tests, evitando llamadas reales a APIs, bases de datos o servicios de terceros.  
- Jest ofrece utilidades integradas para crear mocks, espías y sustituciones dinámicas de módulos.  
- El objetivo: **aislar la lógica interna** del código sin depender de factores externos (latencia, credenciales, red).  
- Se usa tanto en **Unit test** (mocks simples) como en **integration test** (mocks más realistas con herramientas como [MSW Mocks service worker](/testing/msw-mocks-service-worker/)).


## ⚙️ Tipos de mocks en Jest

| Tipo | Descripción | Uso recomendado |
|------|--------------|----------------|
| **Manual mocks** | Definidos en `__mocks__` | APIs o SDKs externos |
| **Automáticos** | Generados por `jest.mock()` | Dependencias pequeñas o funciones internas |
| **Mock functions** | Con `jest.fn()` o `jest.spyOn()` | Lógica interna o callbacks |
| **Service Workers** | Con [MSW Mocks service worker](/testing/msw-mocks-service-worker/) | Pruebas de red realistas (front o backend) |


## 🧩 Ejemplo 1: Mock de `fetch` global

{% raw %}
```typescript
// src/api/users.ts
export async function getUsers() {
  const response = await fetch('https://api.example.com/users')
  if (!response.ok) throw new Error('Error al obtener usuarios')
  return response.json()
}
```
{% endraw %}`

{% raw %}
```typescript
// src/api/users.test.ts
import { getUsers } from './users'

describe('getUsers', () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  test('retorna lista de usuarios', async () => {
    const fakeData = [{ id: 1, name: 'Eduardo' }]
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => fakeData,
    })

    const data = await getUsers()
    expect(data).toEqual(fakeData)
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users')
  })

  test('lanza error si la API falla', async () => {
    ;(fetch as jest.Mock).mockResolvedValueOnce({ ok: false })
    await expect(getUsers()).rejects.toThrow('Error al obtener usuarios')
  })
})
```
{% endraw %}

> ✅ Ideal para servicios basados en `fetch` o `window.fetch` en entornos frontend.


## 🧩 Ejemplo 2: Mock de [axios](/backend/axios/)

{% raw %}
```typescript
// src/api/login.ts
import axios from 'axios'
export const login = async (user: string, pass: string) => {
  const { data } = await axios.post('/auth/login', { user, pass })
  return data.token
}
```
{% endraw %}

{% raw %}
```typescript
// src/api/login.test.ts
import axios from 'axios'
import { login } from './login'
vi.mock('axios')

test('devuelve token al hacer login', async () => {
  ;(axios.post as jest.Mock).mockResolvedValueOnce({ data: { token: 'abc123' } })
  const token = await login('admin', '1234')
  expect(token).toBe('abc123')
  expect(axios.post).toHaveBeenCalledWith('/auth/login', { user: 'admin', pass: '1234' })
})
```
{% endraw %}

> 💡 `vi.mock` o `jest.mock` interceptan las importaciones y permiten sustituir módulos enteros.


## 🧠 Ejemplo 3: Mock manual con `__mocks__`

Estructura:

{% raw %}
```
src/
├─ api/
│  ├─ payments.ts
│  └─ __mocks__/payments.ts
```
{% endraw %}

{% raw %}
```typescript
// src/api/payments.ts
export const getPaymentStatus = async (id: string) => {
  const res = await fetch(`/payments/${id}`)
  return res.json()
}
```
{% endraw %}

{% raw %}
```typescript
// src/api/__mocks__/payments.ts
export const getPaymentStatus = vi.fn().mockResolvedValue({ status: 'mocked-paid' })
```
{% endraw %}

{% raw %}
```typescript
// src/tests/payment.test.ts
import { getPaymentStatus } from '../api/payments'
vi.mock('../api/payments')

test('usa el mock manual correctamente', async () => {
  const res = await getPaymentStatus('123')
  expect(res.status).toBe('mocked-paid')
})
```
{% endraw %}

> ✅ Los mocks manuales son ideales para reutilizar respuestas simuladas complejas o centralizar comportamientos de APIs externas.


## 🧩 Ejemplo 4: Mock con [MSW Mocks service worker](/testing/msw-mocks-service-worker/)

MSW permite interceptar peticiones `fetch` o `XMLHttpRequest` sin modificar el código original.

### Instalación

{% raw %}
```bash
npm install msw --save-dev
```
{% endraw %}

### Handlers (`src/mocks/handlers.ts`)

{% raw %}
```typescript
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/users', () =>
    HttpResponse.json([{ id: 1, name: 'Mocked User' }])
  ),
]
```
{% endraw %}

### Setup (`src/mocks/server.ts`)

{% raw %}
```typescript
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```
{% endraw %}

### Test

{% raw %}
```typescript
import { getUsers } from '../api/users'
import { server } from '../mocks/server'

test('retorna usuario simulado desde MSW', async () => {
  const users = await getUsers()
  expect(users[0].name).toBe('Mocked User')
})
```
{% endraw %}

> 🧩 MSW es la opción más realista: intercepta las peticiones HTTP como lo haría el navegador o Node, sin necesidad de reescribir código ni usar `vi.mock`.


## 🧠 Ejemplo 5: Mock dinámico para errores controlados

{% raw %}
```typescript
import { server } from '../mocks/server'
import { http, HttpResponse } from 'msw'
import { getUsers } from '../api/users'

test('maneja errores del servidor', async () => {
  server.use(
    http.get('https://api.example.com/users', () =>
      HttpResponse.json({ message: 'Internal Error' }, { status: 500 })
    )
  )

  await expect(getUsers()).rejects.toThrow()
})
```
{% endraw %}


## 🧩 Ejemplo 6: Mock de módulos del sistema (ej. `fs`, `path`)

{% raw %}
```typescript
// src/utils/file.ts
import fs from 'fs'
export const readConfig = () => fs.readFileSync('config.json', 'utf8')
```
{% endraw %}

{% raw %}
```typescript
// src/utils/file.test.ts
import fs from 'fs'
import { readConfig } from './file'
vi.mock('fs')

test('lee el archivo simulado', () => {
  ;(fs.readFileSync as jest.Mock).mockReturnValue('{"env":"test"}')
  expect(readConfig()).toContain('test')
})
```
{% endraw %}

> 💡 Los mocks de módulos internos permiten testear sin acceder al sistema de archivos, red o procesos reales.


## 💡 Buenas prácticas

* Usa **mocks automáticos** (`jest.mock`) para dependencias simples.
* Centraliza **respuestas falsas** en `__mocks__` o `fixtures`.
* Usa [MSW Mocks service worker](/testing/msw-mocks-service-worker/) para tests de integración y entorno [CICD](/devops/cicd/).
* Limpia los mocks entre pruebas (`jest.clearAllMocks()`).
* Evita mocks excesivos: solo simula dependencias externas.
* Usa `mockRejectedValue` para simular errores o timeouts.
* Define tipados correctos en mocks (`as jest.Mock` o `Mocked<T>`).
* Simula latencia con `await waitFor()` o `mockImplementation(async () => ...)`.


## 🧠 Depuración y errores comunes

| Problema                       | Causa                               | Solución                                             |
| ------------------------------ | ----------------------------------- | ---------------------------------------------------- |
| “fetch is not defined”         | Jest corre en Node sin fetch global | Instala `whatwg-fetch` o usa MSW                     |
| Mocks persistentes entre tests | Falta `jest.resetAllMocks()`        | Añadir a `beforeEach()`                              |
| “Module not mocked”            | Ruta incorrecta en `jest.mock()`    | Usa paths relativos correctos                        |
| Mock incompleto                | Falta `default` export              | Usa `vi.mock('axios', () => ({ default: { ... } }))` |
| Llamadas reales en CI          | Falta setup global de MSW           | Importar `server.listen()` en setup global           |


## 📊 Integración con [CICD](/devops/cicd/)

{% raw %}
```yaml
name: Jest API Mocks
on: [push, pull_request]

jobs:
  test-api:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run test -- --coverage
```
{% endraw %}

> 📈 Se recomienda almacenar las respuestas mock en JSONs versionados (`/fixtures`) y validarlas con SonarQube para consistencia.


## 📚 Recursos recomendados

* [Jest Docs - Mock Functions](https://jestjs.io/docs/mock-functions)
* [Jest Docs - Manual Mocks](https://jestjs.io/docs/manual-mocks)
* [MSW Docs](https://mswjs.io/)
* [Axios Mocking Example](https://jestjs.io/docs/mock-functions#mocking-modules)
* [Guía avanzada de Jest con mocks y spies](/testing/gu-a-avanzada-de-jest-con-mocks-y-spies/)
* Testing asíncrono en Jest con Promises y async/await


