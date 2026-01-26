---
date: 2025-06-15 11:46
title: TDD - Test Driven Development
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: "true"
category: TDD
tags:
  - TDD
  - testing
  - Testing
---
# TDD - Test Driven Development
`$= dv.current().file.tags.join(" ")`

- [BDD](/testing/bdd/)
- [Testing](/testing/testing/)
- [PHPUnit](/testing/phpunit/)
- docs
	- [ejemplos de TDD](/testing/ejemplos-de-tdd/)
	- [Glosario de TDD](/testing/glosario-de-tdd/)
	- [TDD patterns](/testing/tdd-patterns/)
	- [roadmap de TDD con ejemplo de uso en una empresa](/testing/roadmap-de-tdd-con-ejemplo-de-uso-en-una-empresa/)
	- [Guía de Entrevista tdd](/testing/gu-a-de-entrevista-tdd/)
- conceptos
	- testear antes de programar
	- incrementar logica con los test
	- unidad a aunidad
	- refactoring, run tests BDD
	- given, when, them
	- ej: test a login, existe dashboard
	- tareas, casos de uso
	- flujo TDD
---

## 🧩 Concepto General

**Test-Driven Development (TDD)** es una metodología de desarrollo basada en escribir primero los **tests** antes del código funcional.  
Su objetivo es asegurar que cada unidad del sistema cumpla con un comportamiento esperado desde el principio, permitiendo construir software más confiable, modular y fácil de mantener.  

El ciclo TDD clásico se conoce como **Red → Green → Refactor**:
1. **Red:** escribir un test que falle.
2. **Green:** escribir el código mínimo para pasar el test.
3. **Refactor:** mejorar el código manteniendo todos los tests en verde.

---

## 🔄 Testear antes de programar

El principio fundamental del TDD es **definir los requisitos mediante tests automáticos** antes de implementar la funcionalidad.  
Esto obliga al desarrollador a pensar en el **comportamiento esperado del sistema** y no en la implementación inmediata.  

Ventajas:
- Define una especificación viva del sistema.
- Evita sobreprogramar o escribir código innecesario.
- Facilita el debugging y reduce la deuda técnica.

### 💻 Ejemplo (JavaScript + Jest)
{% raw %}
```js
// test/login.test.js
import { login } from '../login';

test('debería retornar token válido con credenciales correctas', () => {
	const result = login('user', 'password');
	expect(result).toMatch(/^[A-Za-z0-9]{10,}$/);
});
```
{% endraw %}`

Primero se crea el test (falla). Luego se implementa el código necesario para hacerlo pasar.

---

## 🧠 Incrementar lógica con los test

Cada test nuevo amplía o refina la lógica de negocio.  
El flujo TDD permite que el sistema crezca de forma **controlada y comprobada**.  
En lugar de escribir código libremente, se evoluciona la lógica en base a **casos de prueba concretos**.

Beneficios:

- El sistema crece mediante requisitos validados.
    
- Se previenen regresiones al añadir nuevas funcionalidades.
    
- Los tests actúan como documentación técnica viva.
    

### 💻 Ejemplo incremental (Python)

{% raw %}
```python
def suma(a, b):
	return a + b
```
{% endraw %}

{% raw %}
```python
def test_suma():
	assert suma(2, 3) == 5
```
{% endraw %}

Luego se agregan más tests:

{% raw %}
```python
def test_suma_negativos():
	assert suma(-1, -4) == -5
```
{% endraw %}

---

## 🔬 Unidad a unidad

El TDD se aplica principalmente a **unit tests**, que verifican el comportamiento de una función, clase o componente de manera aislada.  
Cada unidad debe ser **independiente de otras dependencias** y cubrir solo un caso funcional específico.

Ventajas:

- Código modular y desacoplado.
    
- Menor tiempo de depuración.
    
- Facilita los cambios futuros.
    

### 💻 Ejemplo (PHPUnit)

{% raw %}
```php
<?php
use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase {
	public function testAddition() {
		$calc = new Calculator();
		$this->assertEquals(4, $calc->add(2, 2));
	}
}
```
{% endraw %}

---

## ♻️ Refactoring, run tests BDD

Una vez que los tests pasan (fase Green), se realiza **refactoring** del código para mejorar su calidad, legibilidad y estructura interna, sin cambiar el comportamiento observable.  
Durante esta fase, los tests aseguran que las modificaciones no rompan nada.

El TDD y el [BDD](/testing/bdd/) (Behavior-Driven Development) se complementan:
- TDD se enfoca en la **unidad técnica del código**.
- BDD se centra en el **comportamiento observable del sistema**.
    

Ambos utilizan ciclos iterativos y refactoring continuo.

### 💻 Ejemplo (JavaScript)

{% raw %}
```js
// refactorización después de pasar tests
function isAdult(age) {
	return age >= 18;
}
```
{% endraw %}

{% raw %}
```js
test('verifica si el usuario es adulto', () => {
	expect(isAdult(20)).toBe(true);
	expect(isAdult(17)).toBe(false);
});
```
{% endraw %}

---

## ⚙️ [PHPUnit](/testing/phpunit/)

Es una de las herramientas más utilizadas en el ecosistema PHP para aplicar TDD.  
Permite definir tests unitarios, integrarlos en pipelines CI/CD y generar reportes de cobertura.

Características principales:

- Compatible con [composer](/backend/composer/) y frameworks como Laravel o Symfony.
    
- Admite mocks, fixtures y tests parametrizados.
    
- Se integra fácilmente con Coveralls Docs- o SonarQube.
    

### 💻 Ejemplo CLI

{% raw %}
```bash
vendor/bin/phpunit --testdox
```
{% endraw %}

---

## 🧩 Given, When, Then

Aunque el TDD no se basa directamente en Gherkin, puede aprovechar su estructura narrativa para definir los casos de prueba.  
Este patrón viene del [BDD](/testing/bdd/) y ayuda a describir **escenarios de comportamiento claros**.

Formato:
- **Given:** contexto o estado inicial.
- **When:** acción ejecutada.
- **Then:** resultado esperado.
    

### 💻 Ejemplo adaptado (pseudo BDD)

{% raw %}
```js
// Given un usuario registrado
const user = { username: 'edu', password: '1234' };

// When intenta iniciar sesión
const result = login(user.username, user.password);

// Then debe obtener un token válido
expect(result.token).not.toBeNull();
```
{% endraw %}

---

## 🔐 Ejemplo práctico: test a login y dashboard

TDD puede aplicarse a funcionalidades completas partiendo de los tests.  
El flujo comienza validando pequeñas piezas (p.ej., validación de credenciales)  
y crece hasta cubrir escenarios más amplios (como la existencia del dashboard tras login exitoso).

### 💻 Ejemplo (E2E simulado)

{% raw %}
```js
test('login exitoso muestra dashboard', async () => {
	await page.goto('/login');
	await page.fill('#email', 'user@test.com');
	await page.fill('#password', '123456');
	await page.click('button[type=submit]');
	await expect(page).toHaveURL('/dashboard');
});
```
{% endraw %}

---

## 📋 Tareas y casos de uso

Cada test debe representar una **tarea o caso de uso concreto**.  
El flujo TDD favorece la **planificación modular**, donde cada test corresponde a una unidad de trabajo.  
Los casos de uso se documentan automáticamente gracias a los nombres de test descriptivos.

Ejemplo:

- `test_crear_usuario_valido`
- `test_rechazar_usuario_sin_password`
- `test_login_con_token_invalido`
    
## 🔁 Flujo TDD

1. Escribir un test que falle (**Red**).
    
2. Implementar el código mínimo que lo haga pasar (**Green**).
    
3. Refactorizar el código sin romper los tests (**Refactor**).
    
4. Repetir el ciclo para cada nueva funcionalidad.
    

**Integración con CI/CD:**  
Los tests TDD se ejecutan automáticamente en cada commit o _pull request_, asegurando la estabilidad continua del sistema.

### 💻 Ejemplo de flujo simplificado

{% raw %}
```bash
# Paso 1: ejecutar test (falla)
npm test

# Paso 2: escribir código hasta que pase
npm test

# Paso 3: refactorizar
npm run lint && npm test
```
{% endraw %}

---

## 🧭 Resumen

El [TDD - Test Driven Development](/tdd/tdd---test-driven-development/) promueve una forma de desarrollo **disciplinada, incremental y segura**, donde el diseño del software se guía por pruebas automatizadas.  
Combinado con [BDD](/testing/bdd/) y frameworks como [PHPUnit](/testing/phpunit/), proporciona una base sólida para sistemas **mantenibles, testables y escalables**.  
Su flujo de **Red → Green → Refactor** garantiza calidad constante y reduce drásticamente la aparición de errores en producción.
