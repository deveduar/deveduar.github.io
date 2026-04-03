---
date: 2025-10-17 17:02
title: Guía de Entrevista tdd
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: true
category: Testing
---

# Guía de Entrevista: TDD

> Esta guía recopila preguntas, respuestas y ejemplos prácticos sobre [TDD - Test Driven Development](/testing/tdd---test-driven-development/) para entrevistas técnicas, incluyendo cómo mostrar experiencia de uso real en proyectos.

---

## 1. Conceptos Fundamentales

**Pregunta:** ¿Qué es [TDD - Test Driven Development](/testing/tdd---test-driven-development/) y por qué es útil?  
**Respuesta:** Test-Driven Development es un enfoque de desarrollo donde **los tests se escriben antes del código de producción** para guiar el diseño, garantizar calidad y reducir defectos en producción.  
**Experiencia de uso:** "En mi último proyecto de e-commerce, implementé TDD para la funcionalidad de carrito de compras, escribiendo primero tests unitarios para calcular descuentos, luego la lógica mínima y finalmente refactorizando el código con confianza."

**Pregunta:** ¿Qué diferencia hay entre [TDD - Test Driven Development](/testing/tdd---test-driven-development/) y [BDD](/testing/bdd/)?  
**Respuesta:** [BDD](/testing/bdd/) es una extensión de TDD que utiliza lenguaje natural y escenarios de negocio para definir pruebas, enfocándose en la **comunicación con stakeholders**.  
**Ejemplo práctico:** Usamos Cucumber para definir escenarios de login y dashboard usando `Given-When-Then`, lo que permitió a QA y Product Owners validar requisitos.

---

## 2. Ciclo Red-Green-Refactor

**Pregunta:** Explícame el ciclo Red-Green-Refactor.  
**Respuesta:**  
- **Red:** Escribir un test que falle.  
- **Green:** Implementar el código mínimo para pasar el test.  
- **Refactor:** Mejorar la estructura del código manteniendo los tests verdes.  

**Código de ejemplo:**
{% raw %}
```ts
// Red
test('should fail login with wrong password', () => {
  const result = login('user@test.com', 'wrong');
  expect(result.success).toBe(false);
});

// Green
function login(email: string, password: string) {
  return (email === 'user@test.com' && password === '1234') 
    ? { success: true, token: 'jwt-token' } 
    : { success: false };
}

// Refactor
const validUser = { email: 'user@test.com', password: '1234' };
function login(email: string, password: string) {
  return (email === validUser.email && password === validUser.password) 
    ? { success: true, token: 'jwt-token' } 
    : { success: false };
}
```
{% endraw %}`

**Experiencia de uso:** "Implementé este ciclo en un microservicio de autenticación, logrando tests unitarios confiables y cobertura completa antes de mergear."

---

## 3. Test Doubles y Mocks

**Pregunta:** ¿Qué son Test Doubles y cuándo se usan?  
**Respuesta:** Objetos que reemplazan dependencias reales para aislar unidades bajo prueba. Incluye Dummy, Stub, Spy, Mock y Fake.  
**Ejemplo:**

{% raw %}
```ts
import axios from 'axios';
jest.mock('axios');
axios.get.mockResolvedValue({ data: { name: 'Empresa ABC' } });
```
{% endraw %}

**Experiencia de uso:** "Mockeamos APIs externas en integración de pagos para tests rápidos y consistentes."

---

## 4. Estrategias y Buenas Prácticas

**Pregunta:** ¿Qué prácticas sigues en TDD para mantener tests limpios?  
**Respuesta:**

- AAA Pattern (Arrange-Act-Assert)
- Naming Patterns: `should_<comportamiento>_when_<condición>()`
- Test Isolation
- Fixture Setup
- Refactor Patterns y Continuous Quality

**Ejemplo práctico:**

{% raw %}
```ts
describe('calculateDiscount', () => {
  beforeEach(() => resetDatabase());
  it('should apply 10% discount for premium users', () => {
    const result = calculateDiscount(100, 'premium');
    expect(result).toBe(90);
  });
});
```
{% endraw %}

---

## 5. Cobertura y Métricas

**Pregunta:** ¿Cómo mides la efectividad de tus tests TDD?  
**Respuesta:**

- Test Coverage (Statements, Branches, Functions, Lines)
- Pass Rate por suite
- MTTR y tiempo de ciclo
- Anti-Flakiness

**Experiencia de uso:** "Usamos Codecov y SonarQube en pipelines CI/CD para asegurar cobertura ≥90% en módulos críticos."

---

## 6. Escenarios de Entrevista Comportamental

**Pregunta:** Describe un desafío al aplicar TDD y cómo lo resolviste.  
**Respuesta sugerida:**  
"En un proyecto con múltiples microservicios, algunos tests eran frágiles por dependencias externas. Implementé mocks y test doubles, asegurando que los tests unitarios fueran rápidos y confiables, integrando todo en CI/CD para feedback inmediato."

**Pregunta:** ¿Cómo integras [BDD](/testing/bdd/) con TDD en la empresa?  
**Respuesta:**  
"Primero se escriben tests unitarios (TDD) para la lógica crítica y luego escenarios de [BDD](/testing/bdd/) para flujos de negocio usando Cucumber. Esto permite comunicación clara con QA y Product Owners."

---

## 7. Preguntas Avanzadas

**Pregunta:** ¿Qué son tests intermitentes y cómo los gestionas?  
**Respuesta:** Flaky tests son tests que fallan aleatoriamente. Se gestionan mediante:

- Entornos controlados
- Mocks consistentes
- Esperas explícitas y timeouts ajustados

**Pregunta:** ¿Qué patrones de refactorización sigues con TDD?  
**Respuesta:** Extract Function, Replace Conditional with Polymorphism, Introduce Parameter Object, siempre asegurando tests verdes antes de cualquier cambio.

---

## 8. Resumen de Herramientas

- [PHPUnit](/testing/phpunit/): Framework PHP compatible con [TDD - Test Driven Development](/testing/tdd---test-driven-development/)
- Vitest / Jest: Unit testing JS/TS
- Playwright / Cypress: E2E Testing
- Cucumber / Behat / SpecFlow: [BDD](/testing/bdd/)
- Codecov / SonarQube: Cobertura y métricas
- MSW / WireMock / Sinon: Mocks y test doubles

---

> **Tip final para entrevistas:** Siempre vincula tu respuesta con **experiencia real**: muestra tests que escribiste, cómo aplicaste Red-Green-Refactor y cómo los resultados impactaron la calidad y confiabilidad del software.