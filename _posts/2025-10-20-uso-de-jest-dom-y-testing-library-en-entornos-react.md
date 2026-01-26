---
date: 2025-10-20 20:03
title: Uso de jest-dom y Testing Library en entornos React
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: "true"
category: Testing
tags:
  - Testing
---
# Uso de jest-dom y Testing Library en entornos React
`$= dv.current().file.tags.join(" ")`

- [Testing](/testing/testing/)
- [react](/frontend/react/)
- [jest](/testing/jest/)
- testing-library
- frontend
- Unit test
- integration test
- [CICD](/devops/cicd/)
- [QA](/testing/qa/)

## 🧠 Conceptos clave

- **Testing Library** es un conjunto de utilidades que facilitan las pruebas de componentes React desde la perspectiva del usuario final, priorizando el comportamiento sobre la implementación interna.  
- **jest-dom** añade _matchers_ personalizados a Jest (como `toBeInTheDocument`, `toHaveTextContent`, `toHaveStyle`) para verificar el DOM de forma más semántica.  
- Esta combinación (React Testing Library + jest-dom + Jest) constituye el estándar moderno para testeo de interfaces.  
- Se centra en la **experiencia del usuario (UX)** y no en detalles internos del componente.  

---

## ⚙️ Instalación y configuración

{% raw %}
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest
```
{% endraw %}`

Archivo: `jest.setup.ts`

{% raw %}
```typescript
import '@testing-library/jest-dom'
```
{% endraw %}

Archivo: `jest.config.ts`

{% raw %}
```typescript
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
}
```
{% endraw %}

---

## 🧩 Ejemplo básico

{% raw %}
```tsx
// src/components/Saludo.tsx
import React from 'react'

export const Saludo = ({ nombre }: { nombre: string }) => {
  return <h1 data-testid="titulo">Hola, {nombre} 👋</h1>
}
```
{% endraw %}

{% raw %}
```tsx
// src/components/Saludo.test.tsx
import { render, screen } from '@testing-library/react'
import { Saludo } from './Saludo'

describe('Saludo', () => {
  test('muestra el nombre correctamente', () => {
    render(<Saludo nombre="Eduardo" />)
    expect(screen.getByText('Hola, Eduardo 👋')).toBeInTheDocument()
  })
})
```
{% endraw %}

Resultado:

{% raw %}
```
PASS src/components/Saludo.test.tsx
✓ muestra el nombre correctamente (12 ms)
```
{% endraw %}

---

## ⚙️ Testing de interacción con `userEvent`

{% raw %}
```tsx
// src/components/Contador.tsx
import React, { useState } from 'react'

export const Contador = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <p data-testid="contador">Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  )
}
```
{% endraw %}

{% raw %}
```tsx
// src/components/Contador.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contador } from './Contador'

describe('Contador', () => {
  test('incrementa al hacer clic', async () => {
    const user = userEvent.setup()
    render(<Contador />)

    const boton = screen.getByRole('button', { name: /incrementar/i })
    await user.click(boton)

    expect(screen.getByTestId('contador')).toHaveTextContent('Valor: 1')
  })
})
```
{% endraw %}

> 💡 `userEvent` simula acciones reales (click, tab, input, teclado, etc.), a diferencia de `fireEvent`, que es más bajo nivel.

---

## 🧠 Ejemplo de pruebas de formularios

{% raw %}
```tsx
// src/components/LoginForm.tsx
import React, { useState } from 'react'

export const LoginForm = ({ onLogin }: { onLogin: (u: string, p: string) => void }) => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onLogin(user, pass)
      }}
    >
      <input placeholder="Usuario" value={user} onChange={e => setUser(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={pass} onChange={e => setPass(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  )
}
```
{% endraw %}

{% raw %}
```tsx
// src/components/LoginForm.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

test('envía los datos correctos al login', async () => {
  const mockLogin = vi.fn()
  const user = userEvent.setup()
  render(<LoginForm onLogin={mockLogin} />)

  await user.type(screen.getByPlaceholderText('Usuario'), 'admin')
  await user.type(screen.getByPlaceholderText('Contraseña'), '1234')
  await user.click(screen.getByRole('button', { name: /entrar/i }))

  expect(mockLogin).toHaveBeenCalledWith('admin', '1234')
})
```
{% endraw %}

---

## 🧩 Testing de componentes con hooks o efectos

{% raw %}
```tsx
// src/components/Loader.tsx
import React, { useEffect, useState } from 'react'

export const Loader = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return <div>{ready ? 'Listo ✅' : 'Cargando...'}</div>
}
```
{% endraw %}

{% raw %}
```tsx
// src/components/Loader.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import { Loader } from './Loader'

test('muestra "Listo ✅" después de 1s', async () => {
  render(<Loader />)
  expect(screen.getByText(/cargando/i)).toBeInTheDocument()
  await waitFor(() => expect(screen.getByText(/listo/i)).toBeInTheDocument())
})
```
{% endraw %}

> 🧩 `waitFor` es útil para pruebas con temporizadores, efectos o peticiones asíncronas.

---

## 🧠 Comparativa rápida: `fireEvent` vs `userEvent`

| Característica       | `fireEvent`              | `userEvent`                        |
| -------------------- | ------------------------ | ---------------------------------- |
| Nivel de abstracción | Bajo                     | Alto                               |
| Simulación realista  | ❌ No                     | ✅ Sí                               |
| Manejo de focus/blur | Manual                   | Automático                         |
| Eventos encadenados  | No                       | Sí                                 |
| Uso recomendado      | Casos simples o internos | Simular acciones del usuario final |

---

## 💡 Buenas prácticas

* Usa `screen` en lugar de destructuring de `render()` → mejora legibilidad.
* Evita probar **implementaciones internas**, céntrate en la experiencia del usuario.
* Usa `getByRole` o `getByLabelText` en lugar de `getByTestId` siempre que sea posible.
* Configura `jest.setup.ts` para importar `@testing-library/jest-dom` globalmente.
* Simula interacciones reales con `userEvent` en lugar de `fireEvent`.
* Usa `waitFor` o `findBy...` para elementos renderizados de forma asíncrona.
* Añade estos tests en pipelines [CICD](/devops/cicd/) y ejecuta con `--coverage` en github actions.

---

## 📊 Ejemplo de integración en [CICD](/devops/cicd/)

{% raw %}
```yaml
name: Jest UI Tests
on: [push, pull_request]

jobs:
  test-ui:
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

---

## 📚 Recursos recomendados

* [Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
* [jest-dom Matchers](https://github.com/testing-library/jest-dom)
* [user-event API](https://testing-library.com/docs/user-event/intro/)
* Testing asíncrono en Jest con Promises y async/await
* Testeo de hooks personalizados en React con Jest
* [Guía avanzada de Jest con mocks y spies](/testing/gu-a-avanzada-de-jest-con-mocks-y-spies/)


