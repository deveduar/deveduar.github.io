creation date: 2025-10-20 18:33
tags:
keywords:
source:
status: 📌
Parent: "Area-Prog"
cssclasses:
  - hide-embedded-header1
categories: "[Testing](/testing/testing/)"
public_note: "true"
# testing asíncrono en Jest con Promises y async await

- [javascript](/desarrollo%20web/javascript/)
- [Testing](/testing/testing/)
- Asynchronous testing
- [jest](/testing/jest/)
- Promises
- async await
- Mocking
- Unit test
- integration test

## 🧠 Conceptos clave

- En Jest, las pruebas **asíncronas** validan comportamientos que dependen de operaciones no bloqueantes como llamadas HTTP, temporizadores o acceso a bases de datos.
- Es fundamental manejar correctamente la **resolución o rechazo** de promesas para evitar falsos positivos.
- Jest ofrece tres principales formas de manejar asincronía:
	1. Devolviendo una *Promise* desde el test.
	2. Usando la función `done()` (callback tradicional).
	3. Empleando funciones `async/await` para una sintaxis más clara y controlada.

## ⚙️ Estructura básica de un test asíncrono

### 1. Devolviendo una Promise
El test finaliza cuando la Promise se resuelve o rechaza.
{% raw %}
```javascript
test('devuelve datos del usuario', () => {
	return fetchUser().then(user => {
		expect(user.name).toBe('Eduardo')
	})
})
```
{% endraw %}`

### 2. Usando el callback `done`

El método más antiguo, útil en casos con múltiples callbacks.

{% raw %}
```javascript
test('usa done para esperar finalización', done => {
	getData(data => {
		expect(data).toBeDefined()
		done()
	})
})
```
{% endraw %}

### 3. Con `async/await` (recomendado)

Ofrece la sintaxis más clara y moderna.

{% raw %}
```javascript
test('resuelve correctamente con async/await', async () => {
	const data = await fetchUser()
	expect(data.id).toBe(1)
})
```
{% endraw %}

## 🚫 Manejo de errores y rechazos

Jest necesita saber cuándo una promesa **falla correctamente**.  
Puedes testear rechazos de varias formas:

{% raw %}
```javascript
// con async/await
test('rechaza con error', async () => {
	await expect(fetchUser(999)).rejects.toThrow('User not found')
})

// con Promises
test('rechaza usando then/catch', () => {
	return fetchUser(999).catch(e => {
		expect(e.message).toMatch(/not found/i)
	})
})
```
{% endraw %}

## 🧩 Combinando async y mocks

Puedes usar `jest.fn()` o `jest.mock()` para simular funciones asíncronas.

{% raw %}
```javascript
const getUser = jest.fn(async id => ({ id, name: 'TestUser' }))

test('usa mock async', async () => {
	const user = await getUser(5)
	expect(user.name).toBe('TestUser')
	expect(getUser).toHaveBeenCalledWith(5)
})
```
{% endraw %}

También se puede usar `mockResolvedValue()` o `mockRejectedValue()`:

{% raw %}
```javascript
import axios from 'axios'
jest.mock('axios')

test('llamada HTTP mockeada', async () => {
	axios.get.mockResolvedValue({ data: { name: 'Edu' } })
	const res = await axios.get('/api/user')
	expect(res.data.name).toBe('Edu')
})
```
{% endraw %}

## 🕒 Testing de temporizadores asíncronos

Jest permite simular tiempo para tests que dependen de `setTimeout` o `setInterval`.

{% raw %}
```javascript
jest.useFakeTimers()
test('simula timeout', () => {
	const callback = jest.fn()
	setTimeout(callback, 2000)
	jest.advanceTimersByTime(2000)
	expect(callback).toHaveBeenCalled()
})
```
{% endraw %}

Esto evita esperas reales y mantiene los tests deterministas.

## 🧱 Ejemplo práctico de test asíncrono real

{% raw %}
```javascript
// api.js
export const fetchUser = async (id) => {
	const response = await fetch(`/users/${id}`)
	if (!response.ok) throw new Error('User not found')
	return response.json()
}
```
{% endraw %}

{% raw %}
```javascript
// api.test.js
global.fetch = jest.fn()

test('obtiene usuario correctamente', async () => {
	fetch.mockResolvedValueOnce({
		ok: true,
		json: async () => ({ id: 1, name: 'Eduardo' })
	})

	const data = await fetchUser(1)
	expect(data.name).toBe('Eduardo')
})

test('lanza error si no se encuentra el usuario', async () => {
	fetch.mockResolvedValueOnce({ ok: false })
	await expect(fetchUser(2)).rejects.toThrow('User not found')
})
```
{% endraw %}

## 🔄 Tests asíncronos en integration test

- En tests de integración, las operaciones asíncronas son comunes (p. ej. APIs, DBs).
- Usa `beforeAll` y `afterAll` para preparar y limpiar datos.

{% raw %}
```javascript
beforeAll(async () => await connectDB())
afterAll(async () => await disconnectDB())

test('inserta y lee un registro', async () => {
	await saveUser({ id: 1, name: 'Ana' })
	const user = await getUser(1)
	expect(user.name).toBe('Ana')
})
```
{% endraw %}

## 💡 Buenas prácticas

- Evita el uso de `done()` salvo en casos heredados.
- No mezcles `async/await` con `done`, puede causar falsos positivos.
- Usa `await expect(...).rejects` para errores, nunca `try/catch` si no es necesario.
- Mantén tus mocks asíncronos simples y consistentes.
- En [CICD](/devops/cicd/), usa `--runInBand` si tienes problemas de sincronización con recursos compartidos.

## 📚 Recursos y documentación

- [Jest - Testing Asynchronous Code](https://jestjs.io/docs/asynchronous)
- [Async/Await en JavaScript - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Promises)
- Mocking avanzado con funciones asíncronas.
- integration test en entornos con datos reales.

{% raw %}
```

¿Quieres que la próxima nota sea **[Cobertura de código en Jest y análisis con SonarQube](/testing/cobertura-de-c-digo-en-jest-y-an-lisis-con-sonarqube/)**?  
Puedo generarla siguiendo el mismo formato ampliado, centrado en cobertura, reportes y análisis de calidad.
```
{% endraw %}