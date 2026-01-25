---
date: 2025-10-17 16:28
title: Glosario de TDD
tags:
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
cssclasses:
public_note: "true"
category: hide-embedded-header1
categories:
  - hide-embedded-header1
  - Testing
---
# Glosario de TDD
`$= dv.current().file.tags.join(" ")`

## Fundamentos
- [TDD - Test Driven Development](/testing/tdd---test-driven-development/): Test-Driven Development, enfoque de desarrollo donde **los tests se escriben antes del código de producción** para guiar el diseño y garantizar calidad desde el inicio.
- [BDD](/testing/bdd/): Behavior-Driven Development, extensión de [TDD - Test Driven Development](/testing/tdd---test-driven-development/) que usa lenguaje natural y escenarios de negocio para definir tests.
- Red-Green-Refactor Cycle: Ciclo clásico de [TDD - Test Driven Development](/testing/tdd---test-driven-development/) donde primero falla un test (Red), luego se implementa código mínimo para pasar el test (Green) y finalmente se refactoriza el código (Refactor).
- Behavior Specification: Especificación clara de cómo debería comportarse la unidad bajo prueba, base de [BDD](/testing/bdd/).
- Incremental Testing: Aplicación de [TDD - Test Driven Development](/testing/tdd---test-driven-development/) de forma progresiva para cada nueva funcionalidad pequeña y verificable.
- Run Tests BDD: Ejecutar tests definidos bajo escenarios de [BDD](/testing/bdd/).

## Patrones y Estructura
- AAA Pattern (Arrange-Act-Assert): Patrón que estructura los tests en preparación, acción y verificación.
- Given-When-Then: Sintaxis típica de [BDD](/testing/bdd/) para estructurar escenarios de prueba.
- Naming Patterns: Convenciones para nombrar tests de forma expresiva e intencional.
	- Ejemplo: `should_<comportamiento>_when_<condición>()`.
- Refactor Patterns en TDD: Patrones seguros de reestructuración apoyados por tests para mejorar mantenibilidad.
- Test-Driven Refactoring Patterns: Patrones de refactorización seguros apoyados por tests, como:
	- Extract Function
	- Replace Conditional with Polymorphism
	- Introduce Parameter Object
- Readable Test Structure: Organización clara de `describe`, `beforeEach`, `afterEach` y `test` para legibilidad.
- Self-Documenting Tests: Tests que actúan como documentación viva del comportamiento esperado del sistema.

## Tipos de Tests
- Unit Test: Pruebas unitarias de funciones o métodos aislados.
- Integration Test: Pruebas de interacción entre módulos o servicios.
- E2E Test: Pruebas End-to-End que simulan flujos completos de usuario.
- Test Suites: Agrupación de tests relacionados para facilitar organización y ejecución.
- Parametrized Assertions: Aserciones ejecutadas con múltiples datos de prueba.
- Parameterized Test Suites: Conjuntos de tests que se ejecutan con diferentes parámetros para maximizar cobertura.

## Test Doubles y Mocks
- Test Doubles: Objetos que reemplazan dependencias reales para aislar unidades bajo prueba.
	- Dummy: parámetros de relleno sin lógica.
	- Stub: retorna datos predefinidos para controlar el flujo.
	- Spy: registra interacciones para verificarlas.
	- Mock: valida expectativas sobre llamadas y comportamiento.
	- Fake: implementación simplificada de dependencias reales.
- Mocking y Stubbing Avanzado: Técnicas para simular dependencias complejas, API externas o eventos de tiempo.
- Mock Verification: Verificación explícita de interacciones con mocks (número de llamadas, parámetros, orden).

## Calidad y Métricas
- Test Coverage: Medición de porcentaje de código cubierto por tests.
- Coverage Criteria: Diferentes tipos de cobertura (statement, branch, function, line, path) utilizados para medir calidad de tests.
- Continuous Integration: Integración de [TDD - Test Driven Development](/testing/tdd---test-driven-development/) en pipelines de CI/CD, ejecutando todos los tests en cada push o PR.
- Continuous Quality: Estrategia para mantener alta calidad mediante tests automáticos y métricas.
- Continuous Test Feedback: Integración de resultados de tests en el flujo de trabajo para feedback inmediato a desarrolladores.

## Datos y Entorno
- Fixture Setup: Datos o estados comunes configurados antes de cada test para garantizar consistencia.
- Test Isolation: Cada test se ejecuta de forma independiente y sin efectos colaterales.
- Test Data Management: Estrategias para generar, limpiar y reutilizar datos de prueba consistentes.
- Fake Time: Técnica para simular timers, fechas o eventos temporales en tests.
- Dependency Injection en Tests: Permite reemplazar dependencias en tiempo de prueba para un diseño desacoplado.

## Buenas Prácticas y Anti-patterns
- Test Readability: Legibilidad de los tests, que comunica intención y propósito.
- Test Maintenance: Práctica de actualizar tests ante cambios de requisitos o refactorización, manteniendo su relevancia.
- Flaky Test Detection: Estrategias para identificar tests inestables o intermitentes.
- Anti-patterns: Patrones de test a evitar:
	- Test frágiles
	- Overtesting
	- God tests
	- Copy-paste tests
	- Silent tests
- Code Smells en Tests: Señales de tests mal diseñados, como dependencias implícitas o pruebas demasiado largas.
- Anti-Flakiness: Técnicas para evitar tests intermitentes, como espera explícita, mocks y entornos controlados.

## Frameworks y Ejemplos
- PHPUnit: Framework de testing para PHP compatible con [TDD - Test Driven Development](/testing/tdd---test-driven-development/).
- Ejemplos de Tests:
	- Login y dashboard
	- Casos de uso y tareas
	- Flujo TDD completo
