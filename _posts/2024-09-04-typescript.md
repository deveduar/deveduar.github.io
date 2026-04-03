---
date: 2024-09-04 19:15
title: typescript
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Software engineering
tags:
  - JS
  - typescript
---
# typescript

- [Software engineering](/software%20engineering/software-engineering/)
- [Computer Science](/computer%20science/computer-science/)
- [nextjs](/frontend/nextjs/)
- [angular](/frontend/angular/)

## Apuntes TypeScript 🔥

### Compilación y configuración
- Compilar con ``tsc``
- Superset de JavaScript: agrega tipado estático y comprobaciones en tiempo de compilación
- TypeScript como herramienta de desarrollo y static checking

### Tipos básicos
- `any`, `unknown`, `never`
- Arrays y tuplas
	- Tuples permiten varios tipos, no usar `.push()` directamente
- Enum
	- Definir estados en DB, tallas, loadingState
	- Usar PascalCase
	- Crear const con estados de API
	- Genera código IIFE
	- Acceso a keys y valores con *Object.values()*
	- Usar `as const` para mantener inmutabilidad

### Inferencia y tipado explícito
- Tipos inferidos permiten acceso a métodos según tipo
- Inicializar propiedades con tipado explícito
- Propiedades:
	- Opcionales con `?`
	- `readonly id: number`
	- Combinación con enums para valores fijos
- Definir objetos con `type Persona = {}` y hacerlos inalterables
- Composición: objetos dentro de objetos, arreglos de objetos
- Interfaces para tipado estructurado
- [TypeScript docs](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

### Avanzado
- Enum vs const enum para tipado
- Type alias y custom types: `type a = "b"`
- Union `|` vs Intersection `&`
	- Union permite uno u otro tipo
	- Intersection combina propiedades
- `unknown` vs `any` 
	- Casting con `as` o `<[]>a`
	- `unknown` exige castear antes de usar
- Generics `<T>`: `<T>(x:T) => x`
	- Problemas al usar `typeof` en condicionales
- Functional overloading: definir distintos retornos según parámetros
- Operador `in` para verificar existencia de propiedades
- `keyof` y dependencia tipada: `type Dependant<T extends {[prop: string]: any}> = T["prop"]`

### Clases y patrones
- Clases abstractas
	- `abstract class Em {}`
	- Extender solo mediante clases hijas `class Am extends Em {}`
	- Constructor y métodos abstractos
	- Jerarquía de clases y template pattern
	- Propiedades privadas y públicas
	- Métodos getter y abstractos: `abstract getSalary(): number`
	- Ejemplos prácticos: listar información con distintos formatos, desuscribirse en `ngOnDestroy`

### Otros conceptos clave
- `Record`, alias, optional `?`, `!` para propiedades por defecto
- `as` para type assertion
- Rest operator vs args operator
- Inference vs explicit types

### Recursos y cursos
- [Te enseño TODO de TypeScript con una Master Class #programacion #frontend #backend #typescript - YouTube](https://youtu.be/Xzf6qXSTlME) 
- [Clases abstractas con Typescript + Patrones de diseño - YouTube](https://youtu.be/b4tbai-8R-U)
- [Let's Fix The Fatal Flaw in TypeScript's Union Types! - YouTube](https://youtu.be/52vHiczZ3Bc)
- [Learn TypeScript – Full Tutorial](https://youtu.be/30LWjhZzg50?t=774)
- [video next typescript y shacdn](https://www.bilibili.com/video/BV18f42197Cd/?p=3)
- [video Next + TS](https://www.bilibili.com/video/BV1dm4y1G7ny/?spm_id_from=333.337.search-card.all.click)
- [You Might Be Using Typescript Wrong... - YouTube](https://youtu.be/RmGHnYUqQ4k)
- [Practical TypeScript – Course for Beginners - YouTube](https://youtu.be/JHEB7RhJG1Y)

### Cursos prácticos
- Fullstack TypeScript GraphQL & Node.js
	- API, queries
	- Twitter Clone
		- `nvm use 16`
		- Errores en `yarn dev`
	- GraphQL vs RESTful API
	- Optimización de consultas costosas
- Next.js + TypeScript + shadcn/ui
	- Integración de frontend moderno
	- Gestión de tipos y estados

# Fundamentos y Arquitectura de TypeScript

## Fundamentos de TypeScript

### Qué es TypeScript
- Superset de JavaScript que añade tipado estático y comprobaciones en tiempo de compilación
- Permite detectar errores antes de ejecutar el código
- Mejora mantenibilidad y escalabilidad en proyectos grandes
- Compatible con cualquier código JavaScript existente
- Proporciona herramientas avanzadas para desarrollo frontend y backend

### Tipos de datos
- **Primitivos:** `string`, `number`, `boolean`, `symbol`, `bigint`, `null`, `undefined`
- **Any y Unknown**
	- `any`: deshabilita el tipado, permite cualquier valor
	- `unknown`: exige validación/casteo antes de usar
- **Never**
	- Indica que una función nunca retorna o siempre lanza un error
- **Arrays y Tuples**
	- Arrays homogéneos: `number[]`
	- Tuples: tipos heterogéneos con posición fija `[string, number]`
	- Uso de `readonly` para inmutabilidad
- **Enums**
	- Definen un conjunto de valores con nombres
	- Usados para estados, configuraciones, flags
	- Const enum para optimización y tipado

### Tipado avanzado
- **Interfaces**
	- Describen la forma de un objeto
	- Se pueden extender y combinar
- **Type Alias**
	- Definen tipos personalizados
	- Combinables con unions `|` e intersections `&`
- **Generics `<T>`**
	- Permiten crear funciones, clases y tipos reutilizables
	- Mantienen tipado flexible y seguro
- **Keyof y Mapped Types**
	- `keyof T`: obtiene las claves de un tipo
	- Mapped types permiten modificar tipos existentes

### Funciones y objetos
- Tipado de parámetros y retorno
- Opcionales `?` y valores por defecto
- Desestructuración con tipado
- Functional overloading: funciones con distintos tipos de entrada y salida

### Clases y patrones
- Clases abstractas y herencia
	- `abstract class` como base para extender
	- Métodos abstractos y propiedades definidas
- Modificadores de acceso: `public`, `private`, `protected`, `readonly`
- Implementación de interfaces en clases
- Patrones de diseño aplicables (Template Pattern, Singleton, Strategy)

### Manejo de errores y seguridad de tipos
- Type assertions (`as`) y casting
- Control de tipos con `in`, `typeof`, `instanceof`
- Manejo seguro de propiedades opcionales `?` y `!`

## Arquitectura de TypeScript en proyectos

### Organización del proyecto
- Separación de módulos y capas (DOM, UI, lógica, datos)
- Uso de `tsconfig.json` para configurar compilación y target JS
- Modularización: export/import, namespaces y ES Modules
- Gestión de dependencias y librerías externas con tipado (`@types/...`)

### Estrategias de tipado
- Tipado explícito vs inferido
- Uso de interfaces y types para APIs y contratos
- Composición de tipos para objetos complejos
- Uso de enums y const assertions para estados y configuraciones
- Generics para reutilización de componentes y funciones

### Integración con frameworks
- Angular: tipado fuerte en componentes, servicios y formularios
- Next.js: tipado de props y APIs, integración con GraphQL
- Node.js: tipado en servicios backend, manejo de errores y validación de datos

### Testing y mantenimiento
- Tipado reduce errores en runtime
- Compatible con Jest, Mocha, y otros frameworks
- Integración con linters y formateadores (ESLint, Prettier)
- Mejora la escalabilidad y mantenibilidad de grandes proyectos

### Performance y compilación
- Compilación a JavaScript compatible con distintos entornos (`ES5`, `ES6`, `ESNext`)
- Optimización de enums y const assertions para evitar sobrecarga
- Uso de `tsc --watch` para desarrollo en tiempo real



# TypeScript: Avanzado, Fundamentos y Arquitectura Completa

## Tipos y Manejo Avanzado

### Literal Types
- Permiten restringir valores a literales específicos
	- Ej: `type Size = "S" | "M" | "L"`
	- Útiles para estados fijos, configuraciones o flags

### Conditional Types
- Tipos que dependen de condiciones
	- Ej: `type MessageOf<T> = T extends { message: unknown } ? T['message'] : never`
	- Base para utilidades genéricas y abstracciones de librerías

### Utility Types
- Tipos predefinidos para transformar otros tipos
	- `Partial<T>`: hace opcionales todas las propiedades
	- `Required<T>`: hace obligatorias todas las propiedades
	- `Readonly<T>`: convierte propiedades en solo lectura
	- `Pick<T, K>` / `Omit<T, K>`: seleccionar o excluir propiedades
	- `Record<K, T>`: define un objeto con claves K y valores T

### Advanced Generics
- Generics con constraints: limitar tipos aceptados
	- `T extends string | number`
- Generics anidados y combinados con conditional types
- Generics en clases, interfaces y funciones para máxima flexibilidad

### Template Literal Types
- Construcción de tipos usando literales de string
	- Ej: `type EventName<T extends string> = `${T}Changed``

### Mapped & Indexed Types Avanzados
- Transformar todos los keys de un tipo: `type OptionsFlags<Type> = { [Property in keyof Type]: boolean }`
- Index signatures dinámicos con `keyof` y `in`

## Arquitectura de Código y Escalabilidad

### Organización por Capas
- **Domain Layer:** lógica de negocio, entidades y reglas
- **Service Layer:** servicios y APIs, comunicación con backend
- **UI Layer:** componentes, hooks, vistas
- **Shared Layer:** utilidades, tipos y constantes compartidas

### Modularidad y Mantenibilidad
- Uso de `barrel files` (`index.ts`) para exportar múltiples módulos
- Separación de interfaces y tipos en carpetas `types/` o `interfaces/`
- Patrones de diseño aplicables:
	- Factory, Singleton, Strategy, Observer, Template
- Dependency Injection para desacoplar dependencias y mejorar testabilidad

### Buenas Prácticas de Tipado
- Siempre usar interfaces para contratos públicos de objetos
- Preferir `as const` para valores inmutables
- Evitar `any` y `unknown` salvo casos justificados
- Validación de datos entrantes con tipos estrictos y schemas (zod, io-ts)
- Uso de enums y literal types para estados controlados

### Integración con Frameworks Modernos
- **Next.js:** tipado de props, API routes y SWR/hooks
- **Angular:** servicios, formularios reactivos y observables tipados
- **Node.js / Express:** DTOs tipados, validación de inputs, patrones de servicios
- **GraphQL:** queries y mutations tipadas, autogeneración de tipos con codegen

### Testing Tipado
- Unit testing con Jest o Vitest usando tipos
- Testeo de utilidades genéricas y funciones puras
- Mocking y tipado seguro en dependencias
- Integración con linters y herramientas de calidad (`ESLint`, `ts-prune`)

## Optimización y Compilación

### Configuración de tsconfig.json
- `strict: true` para máxima seguridad de tipos
- `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`
- `target`, `module` y `lib` según el entorno de ejecución
- `paths` y `baseUrl` para resolución de módulos escalable

### Performance y Bundling
- Const enums para evitar código extra en runtime
- Optimización de tipos y módulos para tree-shaking
- Uso de `tsc --incremental` y build caching
- Integración con Vite, Webpack o esbuild

## Herramientas y Recursos Avanzados
- TypeScript Language Server (autocompletado y diagnósticos)
- Linters: ESLint con plugin `@typescript-eslint`
- Formatter: Prettier + soporte TS
- Validadores de runtime: Zod, io-ts, Yup
- Code generators: GraphQL Codegen, OpenAPI TS client





# Generics en TypeScript

## Concepto
- Los **generics** permiten crear componentes, funciones y clases **reutilizables** que mantienen tipado seguro.
- Permiten **parametrizar tipos**, evitando el uso de `any` y aumentando la flexibilidad del código.
- Sintaxis básica: `<T>` donde `T` representa un tipo genérico.

## Uso en Funciones

### Función genérica simple
{% raw %}
```ts
function identity<T>(arg: T): T {
	return arg;
}

const num = identity<number>(42); // número
const str = identity<string>("Hola"); // string
```
{% endraw %}`

### Inferencia de tipos

- TypeScript infiere automáticamente el tipo de `T` según el argumento pasado:

{% raw %}
```ts
const inferred = identity("texto"); // T inferido como string
```
{% endraw %}

### Funciones con múltiples generics

{% raw %}
```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
	return { ...obj1, ...obj2 };
}

const combined = merge({ name: "Alice" }, { age: 25 });
// combined es { name: string; age: number }
```
{% endraw %}

## Uso en Clases

### Clase genérica

{% raw %}
```ts
class Box<T> {
	private contents: T;

	constructor(value: T) {
		this.contents = value;
	}

	getContents(): T {
		return this.contents;
	}
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Texto");
```
{% endraw %}

### Generics con herencia

{% raw %}
```ts
class SpecialBox<T extends { name: string }> {
	constructor(private item: T) {}
	getName(): string {
		return this.item.name;
	}
}

const box = new SpecialBox({ name: "Alice", age: 25 });
```
{% endraw %}

## Uso en Interfaces y Tipos

### Interface genérica

{% raw %}
```ts
interface KeyValue<K, V> {
	key: K;
	value: V;
}

const pair: KeyValue<string, number> = { key: "edad", value: 30 };
```
{% endraw %}

### Type alias genérico

{% raw %}
```ts
type Response<T> = {
	data: T;
	error?: string;
};

const userResponse: Response<{ id: number; name: string }> = {
	data: { id: 1, name: "Alice" },
};
```
{% endraw %}

## Constraints y Utilidades

### Restricciones (extends)

- Limitar los tipos permitidos para un generic:

{% raw %}
```ts
function logLength<T extends { length: number }>(arg: T): void {
	console.log(arg.length);
}
logLength([1, 2, 3]); // 3
logLength("Hola TS"); // 7
```
{% endraw %}

### Default Generics

- Definir un tipo por defecto si no se pasa un generic:

{% raw %}
```ts
function createArray<T = string>(items: T[]): T[] {
	return [...items];
}
const defaultArray = createArray(["a", "b"]); // T inferido como string
```
{% endraw %}

## Generics Avanzados

### Conditional Generics

{% raw %}
```ts
type ElementType<T> = T extends (infer U)[] ? U : T;
type StrType = ElementType<string[]>; // string
```
{% endraw %}

### Mapped Types con Generics

{% raw %}
```ts
type ReadonlyProps<T> = {
	readonly [K in keyof T]: T[K];
};
type User = { id: number; name: string };
type ReadonlyUser = ReadonlyProps<User>; // { readonly id: number; readonly name: string }
```
{% endraw %}

### Aplicaciones prácticas

- Tipado de formularios dinámicos
- Wrappers de APIs genéricas
- Componentes React con props tipadas
- Colecciones y estructuras de datos reutilizables

## Buenas prácticas

- Evitar abusar de `any`; usar generics para mantener tipado seguro
- Nombrar generics de manera descriptiva (`T`, `U`, `K`, `V` para claves/valores)
- Usar constraints (`extends`) cuando se necesita un comportamiento mínimo
- Combinarlos con type alias, interfaces y mapped types para crear APIs robustas

# TypeScript Cheatsheet 2025 – Fundamentos, Avanzado y Arquitectura

## 1. Tipos Básicos
- `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`
- `any`: desactiva tipado
- `unknown`: requiere casting antes de usar
- `never`: función que nunca retorna o lanza error
- Arrays: `number[]`, `[string, number]` (tuples)
- Readonly arrays: `readonly number[]`
- Enum:  
{% raw %}
```ts
enum Size { S = "S", M = "M", L = "L" }
```
{% endraw %}`

* Const enum: optimiza runtime y tipado

## 2. Tipado Avanzado

* Interfaces: `interface User { id: number; name: string }`
* Type alias: `type ID = number | string`
* Union `|` e Intersection `&`
* Literal types: `type Direction = "left" | "right"`
* Generics `<T>`: reutilización con tipado seguro
* Conditional Types:

{% raw %}
```ts
type MessageOf<T> = T extends { message: unknown } ? T['message'] : never
```
{% endraw %}

* Mapped Types: `[K in keyof T]: T[K]`
* Template literal types: ``type Event<T extends string> = `${T}Changed` ``

## 3. Funciones

* Tipado parámetros y retorno: `function sum(a: number, b: number): number {}`
* Optional `?` y default params
* Functional overloading: distintas firmas según entrada
* Rest operator: `...args: number[]`

## 4. Clases y Objetos

* Clases y herencia:

{% raw %}
```ts
abstract class Em { abstract getSalary(): number }
class Am extends Em { getSalary() { return 1000; } }
```
{% endraw %}

* Modificadores: `public`, `private`, `protected`, `readonly`
* Getter/Setter: `get fullName(): string { return this.name; }`
* Interfaces implementadas por clases
* Abstract classes: base para extensiones, no se instancian

## 5. Generics

* Funciones:

{% raw %}
```ts
function identity<T>(arg: T): T { return arg; }
```
{% endraw %}

* Clases genéricas:

{% raw %}
```ts
class Box<T> { constructor(private value: T) {} getContents(): T { return this.value; } }
```
{% endraw %}

* Constraints: `T extends { length: number }`
* Type alias genéricos: `type Response<T> = { data: T; error?: string }`
* Mapped types genéricos: `[K in keyof T]: T[K]`

## 6. Utilidades y Helpers

* Utility Types: `Partial<T>`, `Required<T>`, `Readonly<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, T>`
* Type assertion: `value as string` o `<string>value`
* keyof: obtener claves de un tipo
* in: comprobar propiedad existente
* Object.values() y Object.keys() con tipado

## 7. Tipos de datos y estados

* Optional properties: `prop?: string`
* Non-null assertion: `prop!`
* Readonly properties: `readonly id: number`
* Tuples y arrays: `[string, number]`, `number[]`
* Enum y literal types para estados controlados

## 8. Arquitectura de Proyectos

* Capas:

  * Domain Layer: entidades y lógica
  * Service Layer: APIs, servicios
  * UI Layer: componentes, hooks
  * Shared Layer: utilidades, tipos
* Modularidad: barrel files, index.ts
* tsconfig.json:

  * `strict: true`, `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`
  * `target`, `module`, `lib`, `paths`, `baseUrl`
* Testing tipado: Jest, Vitest, mocks seguros
* Integración con frameworks: Angular, Next.js, Node.js, GraphQL

## 9. Buenas Prácticas

* Evitar `any`; preferir generics o union types
* Usar interfaces para contratos
* Prefiere `as const` para valores inmutables
* Separar tipos en `types/` o `interfaces/`
* Validar datos entrantes con zod, io-ts o Yup
* Mantener código escalable y modular

# TypeScript 2025 – Referencia Completa y Avanzada

## 1. Tipos Básicos
- `string`, `number`, `boolean`, `bigint`, `symbol`, `null`, `undefined`
- `any`: desactiva tipado
- `unknown`: requiere casting antes de usar
- `never`: función que nunca retorna o siempre lanza error
- Arrays: `number[]`, `[string, number]` (tuples)
- Readonly arrays: `readonly number[]`
- Enum:  
{% raw %}
```ts
enum Size { S = "S", M = "M", L = "L" }
```
{% endraw %}`

* Const enum: optimiza runtime y tipado

## 2. Tipos Avanzados

* Interfaces: `interface User { id: number; name: string }`
* Type alias: `type ID = number | string`
* Union `|` e Intersection `&`
* Literal types: `type Direction = "left" | "right"`
* Generics `<T>`: funciones, clases, interfaces reutilizables
* Conditional types: `type MessageOf<T> = T extends { message: unknown } ? T['message'] : never`
* Mapped types: `[K in keyof T]: T[K]`
* Template literal types: ``type Event<T extends string> = `${T}Changed` ``
* Recursive types: para estructuras anidadas como árboles o JSON

## 3. Funciones

* Tipado de parámetros y retorno: `function sum(a: number, b: number): number {}`
* Optional `?` y valores por defecto
* Rest parameters: `...args: number[]`
* Functional overloading: distintas firmas según entrada

## 4. Clases y Objetos

* Clases y herencia:

{% raw %}
```ts
abstract class Em { abstract getSalary(): number }
class Am extends Em { getSalary() { return 1000; } }
```
{% endraw %}

* Modificadores: `public`, `private`, `protected`, `readonly`
* Getter/Setter
* Abstract classes: no se instancian directamente
* Interfaces implementadas por clases
* Mixins y composición: combinar funcionalidades de múltiples clases

## 5. Generics

* Funciones:

{% raw %}
```ts
function identity<T>(arg: T): T { return arg; }
```
{% endraw %}

* Clases:

{% raw %}
```ts
class Box<T> { constructor(private value: T) {} getContents(): T { return this.value; } }
```
{% endraw %}

* Constraints: `T extends { length: number }`
* Multiple generics: `function merge<T, U>(a: T, b: U): T & U`
* Mapped types genéricos: `[K in keyof T]: T[K]`
* Utility types: `Partial<T>`, `Required<T>`, `Readonly<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, T>`

## 6. Decorators

* Añaden metadatos o lógica a clases, métodos, propiedades o parámetros
* Ejemplo:

{% raw %}
```ts
function Logger(target: Function) { console.log(`Class ${target.name} created`); }
@Logger
class Person {}
```
{% endraw %}

* Tipos: class, property, method, parameter
* Usados en Angular y NestJS

## 7. Namespaces y Modules

* Namespaces: organizar código sin módulos (menos usado hoy)
* Modules: `export` y `import` para encapsular lógica
* Recomendación: usar ES Modules para proyectos modernos

## 8. Ambient Declarations y Tipos Externos

* `declare` para variables globales o librerías JS:

{% raw %}
```ts
declare const myGlobalVar: string;
```
{% endraw %}

* `@types/` para tipado de librerías externas no escritas en TS

## 9. Runtime Type Checking

* TS es compile-time only
* Librerías para validación en runtime: `zod`, `io-ts`, `Yup`

## 10. Herramientas de Manipulación Avanzadas

* `keyof`, `in`, `as const`, `instanceof`, `typeof`
* Utility Types:

  * `NonNullable<T>`
  * `Parameters<T>` y `ReturnType<T>`
  * `InstanceType<T>`
  * Custom mapped types: `RequiredKeys<T>`, `OptionalKeys<T>`

## 11. Arquitectura de Proyectos

* Capas:

  * Domain Layer: entidades y lógica
  * Service Layer: APIs, servicios
  * UI Layer: componentes, hooks
  * Shared Layer: utilidades y tipos
* Barrel files (`index.ts`) para exportaciones
* tsconfig.json:

  * `strict: true`, `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`
  * `target`, `module`, `lib`, `paths`, `baseUrl`
* Testing tipado: Jest, Vitest
* Validación de datos y schemas
* Integración con frameworks: Angular, Next.js, Node.js, GraphQL

## 12. Buenas Prácticas

* Evitar `any`, usar generics o union types
* Interfaces para contratos públicos
* `as const` para inmutabilidad
* Separar tipos en `types/` o `interfaces/`
* Validar datos entrantes
* Modularidad y escalabilidad en grandes proyectos

## 13. Estrategias de Migración y Escalabilidad

* Migración gradual de JS a TS (`allowJs: true`)
* Uso de `strict` mode para seguridad de tipos
* Alias y paths en tsconfig para imports limpios
* Separación de capas y responsabilidades para equipos grandes



# Recursos Avanzados TypeScript 2025

## Artículos y Blogs
- *TypeScript Patterns That Will Make You a Better Developer in 2025*  
	- Patrones avanzados: utility types, conditional types, arquitecturas  
	- [grizzly-agency.com](https://www.grizzly-agency.com/blog/typescript-advanced-patterns-2025?utm_source=chatgpt.com)
- *15 Advanced TypeScript Patterns Every Developer Must Master in 2025*  
	- Patrones prácticos y ejemplos complejos  
	- [aimbytes.com](https://www.aimbytes.com/blog/typescript-advanced-patterns?utm_source=chatgpt.com)
- *Mastering TypeScript in 2025: Advanced Concepts & Pro-Level Patterns*  
	- Generics, inferencia, decoradores, arquitectura  
	- [medium.com](https://medium.com/%40Samira8872/%EF%B8%8F-mastering-typescript-in-2025-advanced-concepts-pro-level-patterns-74389e51b6c1?utm_source=chatgpt.com)
- *TypeScript Mastery Guide: Advanced Concepts, Patterns & Pro Tips*  
	- Técnicas pro, escalabilidad, mejores prácticas  
	- [medium.com](https://medium.com/%40Amanda10/typescript-mastery-guide-advanced-concepts-patterns-pro-tips-d23da45ef3e6?utm_source=chatgpt.com)
- *Mastering TypeScript in 2025: Advanced Patterns for Scalable and Robust Applications*  
	- Composición de tipos y patrones a gran escala  
	- [medium.com](https://medium.com/%40theHackHabitual/mastering-typescript-in-2025-advanced-patterns-for-scalable-and-robust-applications-33418c7996cf?utm_source=chatgpt.com)
- *Sumérgete en TypeScript Avanzado*  
	- Validación con Zod, type guards y migración  
	- [gitnation.com](https://gitnation.com/contents/sumergete-en-typescript-avanzado/es?utm_source=chatgpt.com)

## Cursos y Talleres
- *Advanced TypeScript Workshop* (AngularArchitects)  
	- Taller: tipos avanzados, generics, mapped types, conditional types  
	- [angulararchitects.io](https://www.angulararchitects.io/en/training/advanced-typescript/?utm_source=chatgpt.com)
- *Advanced TypeScript with OOP* (Coursera / Edureka)  
	- OOP, decoradores, tipos utilitarios  
	- [coursera.org](https://www.coursera.org/learn/advanced-typescript-with-oop?utm_source=chatgpt.com)
- *Master en TypeScript, JavaScript Moderno, ES2025, APIs HTML5* (Udemy)  
	- Curso completo en español  
	- [udemy.com](https://www.udemy.com/course/master-en-typescript-javascript-moderno-ecmascript-es12-apis-html5/?srsltid=AfmBOoqTqwoogU9A_l-8dd8F_rEUifx6FKbqaXWBxCWbHaKM6uxT3sVo&utm_source=chatgpt.com)
- *Curso de TypeScript (PDF)* por Diego Saavedra  
	- Teoría y ejemplos prácticos  
	- [statick88.github.io](https://statick88.github.io/course_of_typescript/curso_typescript.pdf?utm_source=chatgpt.com)
- *TypeScript Tutorial PDF* (riptutorial.com)  
	- Tutorial con ejemplos prácticos  
	- [riptutorial.com](https://riptutorial.com/Download/typescript-es.pdf?utm_source=chatgpt.com)

## Investigación y Papers
- *Dynamic Program Slices Change How Developers Diagnose Gradual Run-Time Type Errors*  
	- Debugging de errores de tipo en runtime  
	- [arxiv.org](https://arxiv.org/abs/2502.20533?utm_source=chatgpt.com)
- *TypeScript’s Evolution: An Analysis of Feature Adoption Over Time*  
	- Cómo se adoptan nuevas características en proyectos reales  
	- [arxiv.org](https://arxiv.org/abs/2303.09802?utm_source=chatgpt.com)
- *LambdaNet: Probabilistic Type Inference using Graph Neural Networks*  
	- Inferencia de tipos mediante redes neuronales  
	- [arxiv.org](https://arxiv.org/abs/2005.02161?utm_source=chatgpt.com)
{% raw %}
```

# omnivore typescript
```
{% endraw %}base
type: list
name: "Notas con #typescript en Omnivore"
order:
  - property: date_saved
    direction: desc
columns:
  - file.name
  - date_saved
filters:
  and:
    - file.inFolder("Omnivore")
    - file.hasTag("typescript", "Typescript")
views:
  - type: table
    name: Table
    sort:
      - property: file.mtime
        direction: DESC

```

