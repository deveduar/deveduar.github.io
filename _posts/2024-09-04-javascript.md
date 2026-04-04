---
date: 2024-09-04T03:13:00
title: javascript
status: 🌟
Parent: "[[Area-Prog]]"
category: Desarrollo web
tags:
  - JS
  - Scraping
---
# JavaScript

- [Desarrollo web](/desarrollo%20web/desarrollo-web/)
- [typescript](/software%20engineering/typescript/)
- [Expresiones regulares](/computer%20science/expresiones-regulares/)

---

## 📺 Entrevistas

- [Entrevistando para Javascript Senior Developer - Prueba Técnica - YouTube](https://youtu.be/1tazdyy4Zqw)

---

## 🧠 Conceptos Clave

### Funciones y Estructuras Avanzadas

- **Closures**, **callbacks** y **eventos**  
	Fundamentales para el manejo de la asincronía y encapsulamiento de estado.
- **Reduce y acumuladores**  
	Permiten transformar colecciones en un único valor. Base de muchos patrones funcionales.
- **Generadores**  
	Similares a `async/await`, permiten la ejecución pausable y reanudable.  
	Aplicaciones:
	- Peticiones a API de forma secuencial o “lazy”.
	- Control de asincronía y flujos complejos.
- **Two-way binding**  
	Mecanismo de sincronización bidireccional entre vista y modelo.  
	Relacionado con:
	- `yield` y `next()` en generadores.
	- Patrones como *reducers* en React y estados compartidos.

### Optimización y Depuración

- **Herramientas de optimización**  
	- Profilers, Lighthouse, Performance Tab (DevTools).
	- Minificación y tree shaking con Webpack, Rollup o esbuild.
- **Debugging**  
	- Uso de `console`, `debugger`, breakpoints, y stack traces.
	- Integración con VSCode, Chrome DevTools.

### Módulos y Estandarización

- **CommonJS vs ESM**  
	Comparativa de sistemas de módulos:
	- CommonJS → `require`, `module.exports` (Node.js tradicional)
	- ESM → `import`, `export` (estándar moderno y compatible con navegador)
	- CommonJS vs ES Modules - Javascript en español - Lenguaje JS

---

## 🎓 Cursos y Formación

### Cursos Olds

### 🧩 Curso Essentials 1 🎈

- 00-Contenido
- 01-Fundamentos de JavaScript 1 (JSE)
- 02-Variables, Tipos de Datos, Conversión de Tipos de Datos y Comentarios
- 03-Tipos de datos y sus conversiones 1
- 04-Tipos de datos y su conversión 2
- 05-Comentarios
- 06-Operadores e Interacción con el Usuario
- 07-Cadenas, comparación y otros operadores JS
- 08-Interacción con el usuario
- 09-Control de Flujo Ejecución Condicional y Bucles
- 10-Bucles
- 11-Funciones Parte 1
- 12-Funciones Parte 2
- 13-Errores y Excepciones Parte 1
- 14-Errores y Excepciones Parte 2
- 15-Depuración de Código y Resolución de Problemas

### 🧩 Curso Essentials 2 🎈

- 01 Introduccion
- 02 Classless objects, literals, properties, dot y bracket,test y enumeration
- 03 References, Methods, flags
- 04 Ways create object, prototypes
- 05 Classes declaration, properties4
- 06 Getters and setters,inheritance, static member, classes vs constructors
- 07 Built-in objects, class declaration, string, date
- 08 Composite data types
- 09 JSON, Math and RegExp1
- 10 Extending built-in types
- 11 Advanced function y decorators
- 12 Generators and iterators
- 13 Asynchronous programming
- 14 Promesas async await
- A1 Resumen y Labs Classless objects
- A2 Resumen y LABS Classes and class-based approach
- A3 Resumen y Labs Built-in objects
- A4 Resumen y LABS
- A5 FINAL PROJECT

### 🧩 Curso The Advanced Concepts ✔

- 01-JS-Foundation-1
- 02-JS-Foundation-2
- 03-JS-Tipos
- 04-Clousures-Prototypal-inheritance
- 05-OPP
- 06-Funcional Programing
- 07-OOP vs FP
- 08-Asynchronous JS
- 10-Modules In JavaScript
- 11-Error Handling
- 13-Extra Data Structures In JavaScript
- 14-Appendix I Javascript Basics
- 15-Appendix II Intermediate Javascript

### 🧩 Curso JS - Paradigmas de Programación ✔

- 01-POO intro y ES6
- 02-Entendiendo this en JS
- 03-Programación asincrónica
- 04-AJAX y JSON
- 05-Fetch API
- 06-Programacion Funcional
- 07-Programacion Reactiva
- 08-Flujo de trabajo isomorfico vanilla
- 09-TO-DO list proyecto
- 10-POO con clases
- 11-poo_prototipica

---

## 🧮 Otros Cursos y Recursos

### 🧱 Proyectos y Guías

- JS-20-Projects-merged
- JS-Interview-merged
- JS-GUIA-ES6-merged
- JS y desarrollo web basico old

### 💻 Curso Frontend: Landing Page Banco

- Configuración de **SASS** para compilar y exportar CSS a `/dist`
- canvas-web-easybank.canvas
- [How to Make a Landing Page using HTML, SCSS, and JavaScript - Full Course](https://www.youtube.com/watch?v=aoQ6S1a32j8)
- [GitHub fem-easybank project](https://github.com/thecodercoder/fem-easybank)
- [DynamicDrive DHTML & JavaScript scripts](http://dynamicdrive.com/)

### 🌐 Curso Frontend: Portfolio 3D

- [3D Portfolio Website Three.js](https://www.youtube.com/watch?v=Q7AOvWpIVHU)
- [Three.js Creating a scene](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
- **Comandos básicos**
{% raw %}
```bash
npm run dev
```
{% endraw %}
{% raw %}
```bash
npm init @vitejs/app
```
{% endraw %}
- Plantilla recomendada: *vanilla js*
{% raw %}
```bash
npm install three
```
{% endraw %}

---

## 🔧 Tópicos Sugeridos para Expansión

- Event Loop y su impacto en la asincronía real de JS.
- Memory Management: recolector de basura, referencias y fugas de memoria.
- JS Engine Internals: V8, interprete y compilación JIT.
- Metaprogramming: `Proxy`, `Reflect`, y patrones de interceptación.
- Patterns JS: módulos, factories, singletons, observer, decorator.
- Testing en JavaScript: Jest, Vitest, y testing asíncrono.
- Security JS: XSS, CSRF, y sanitización en frontend/backend.

---

# JavaScript — Expansión de Conceptos Avanzados

Esta nota amplía los temas fundamentales del ecosistema JavaScript, abordando su **motor interno**, **modelos de ejecución**, **patrones de diseño**, y **buenas prácticas** para entornos modernos de desarrollo. Se evitan repeticiones respecto a notas anteriores.

---

## ⚙️ Núcleo del Lenguaje y Ejecución

### Event Loop y Concurrencia

El Event Loop es el mecanismo que gestiona la ejecución de código, la espera de eventos y las operaciones asíncronas.  
Su flujo principal combina:

- **Call Stack** → ejecución sincrónica.
- **Task Queue** → callbacks de `setTimeout`, `setInterval`, etc.
- **Microtask Queue** → promesas, `MutationObserver`, `queueMicrotask`.

**Prioridad:** las *microtareas* siempre se ejecutan antes de procesar nuevas *tareas*.  
Esto explica por qué `Promise.resolve().then()` se ejecuta antes que un `setTimeout(...)`.

{% raw %}
```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Salida: 1, 4, 3, 2
```
{% endraw %}`

---

### Memory Management

El Memory Management en JS es automático, pero conocer su funcionamiento evita fugas:

* **Mark and Sweep**: el recolector de basura marca los objetos accesibles desde *roots* (variables globales, closures activos) y elimina el resto.
* **Fugas comunes**:

  * Variables globales no eliminadas.
  * Closures que retienen referencias innecesarias.
  * Listeners no removidos en DOM o Node.js.
* **Herramientas**: Chrome DevTools → *Memory Profiler*, *Heap Snapshot*.

---

### JS Engine Internals

Motores como V8 (Chrome, Node.js) o SpiderMonkey (Firefox) ejecutan código JS con un flujo mixto:

1. **Parsing**: se genera un AST (Abstract Syntax Tree).
2. **Interpretación**: el *Ignition Interpreter* traduce a bytecode.
3. **Optimización**: el *TurboFan Compiler* convierte el código caliente en máquina nativa.
4. **Desoptimización**: si el tipo de dato cambia, el motor vuelve al intérprete.

**Consecuencia práctica:**
Evita estructuras dinámicas con tipos inconsistentes para mejorar la optimización JIT.

---

## 🧱 Patrones de Diseño en JavaScript

Los Patterns JS ayudan a mantener un código escalable y expresivo.

### Factory Pattern

Crea objetos sin especificar la clase exacta:

{% raw %}
```js
function createUser(type) {
	if (type === "admin") return { role: "admin", permissions: ["*"] };
	return { role: "user", permissions: ["read"] };
}
```
{% endraw %}

### Module Pattern

Encapsula lógica privada usando closures:

{% raw %}
```js
const Counter = (() => {
	let count = 0;
	return {
		inc: () => ++count,
		dec: () => --count,
		get: () => count
	};
})();
```
{% endraw %}

### Observer Pattern

Permite la suscripción a cambios:

{% raw %}
```js
class Observable {
	constructor() { this.subs = []; }
	subscribe(fn) { this.subs.push(fn); }
	notify(data) { this.subs.forEach(fn => fn(data)); }
}
```
{% endraw %}

### Decorator Pattern

Agrega funcionalidad sin modificar la estructura original:

{% raw %}
```js
function withLogging(fn) {
	return (...args) => {
		console.log("Call:", fn.name, args);
		return fn(...args);
	};
}
```
{% endraw %}

---

## ⚡ Asincronía Moderna y Patrones

### Async/Await Interno

`async/await` se construye sobre promesas y *microtasks*.
Internamente, `await` pausa la función hasta que la promesa se resuelve, permitiendo escribir código secuencial sin bloquear el hilo principal.

{% raw %}
```js
async function fetchData() {
	const res = await fetch("/api");
	const json = await res.json();
	return json;
}
```
{% endraw %}

### Generadores Asíncronos

Los generadores `async function*` permiten flujos de datos asíncronos iterables (por ejemplo, streaming o paginación):

{% raw %}
```js
async function* fetchPaginated(urls) {
	for (const url of urls) {
		const res = await fetch(url);
		yield await res.json();
	}
}
```
{% endraw %}

---

## 🧩 Metaprogramación

JavaScript permite modificar su propio comportamiento a través de Proxy y Reflect.

### Proxy

Permite interceptar operaciones sobre objetos:

{% raw %}
```js
const person = { name: "Ada", age: 30 };
const proxy = new Proxy(person, {
	get(target, prop) {
		console.log(`Accessed ${prop}`);
		return target[prop];
	}
});
proxy.name; // Accessed name
```
{% endraw %}

### Reflect

API que ofrece acceso controlado a las operaciones del lenguaje (análoga a meta-operadores en otros lenguajes):

{% raw %}
```js
Reflect.set(person, "age", 31);
console.log(Reflect.get(person, "age"));
```
{% endraw %}

---

## 🧪 Testing y Buenas Prácticas

### Testing Moderno

Herramientas como **Jest**, **Vitest** o **Mocha** facilitan testing de:

* Promesas y async/await
* Mocking de APIs
* Snapshot testing en frontends

Ejemplo:

{% raw %}
```js
test("suma básica", () => {
	expect(1 + 2).toBe(3);
});
```
{% endraw %}

### Clean Code JS

Buenas prácticas recomendadas:

* Funciones puras y cortas.
* Uso de `const`/`let` coherente.
* Evitar variables globales.
* Nombres semánticos (acciones para funciones, sustantivos para objetos).
* Comentarios solo donde aporten contexto adicional, no para repetir el código.

---

## 🛡️ Seguridad en JavaScript

### XSS y Sanitización

Evita inyecciones en DOM:

{% raw %}
```js
element.innerHTML = userInput; // ❌ peligroso
element.textContent = userInput; // ✅ seguro
```
{% endraw %}

### CSRF y Autenticación

* Usa tokens CSRF y encabezados personalizados.
* Implementa autenticación basada en `JWT` y refresco de tokens seguro.

### Seguridad en Node.js

* Escapa siempre los datos en plantillas.
* Usa `helmet` y `express-rate-limit`.
* Deshabilita cabeceras innecesarias en respuestas HTTP.

---

## 🧰 Ecosistema Moderno y Build Tools

* Node.js: entorno de ejecución basado en V8.
* NPM / Yarn / pnpm: gestión de dependencias.
* Vite: bundler ultrarrápido basado en ESBuild.
* Webpack y Rollup: empaquetado avanzado.
* Babel: transpila a versiones compatibles.
* ESLint y Prettier: linting y formateo automatizado.

---

## 🧠 Conceptos Avanzados Relacionados

* Functional Programming → composición, inmutabilidad, curryficación.
* Reactive Programming → flujos de datos con RxJS y observables.
* Isomorphic JS → ejecución compartida entre servidor y cliente.
* Data Structures → mapas, sets, weakmaps, iteradores personalizados.
* [Web Components](/frontend/web-components/) → encapsulación nativa y shadow DOM.

---

## 🚀 Sugerencia de Expansión Futura

* WebAssembly y su integración con JS.
* Deno y Bun como runtimes alternativos.
* Streams API y procesamiento de datos en tiempo real.
* Workers y OffscreenCanvas para paralelismo en frontend.
* TypeScript Deep Dive: tipado estructural y generics avanzados.
* Performance Patterns: optimización de renderizado y memoria.
* Edge Computing JS: ejecución serverless distribuida (Cloudflare Workers, Vercel Edge).

# JavaScript — Conceptos Avanzados y Ecosistema Extendido

Esta nota continúa la expansión de temas avanzados de JavaScript, profundizando en su integración con entornos modernos, nuevos estándares, y áreas donde el lenguaje evoluciona más allá del frontend tradicional. No se repiten contenidos de notas previas.

---

## 🧩 Arquitectura y Entornos de Ejecución

### Node.js Internals

Node.js combina el motor V8 con la librería **libuv**, que implementa un *thread pool* y un *event loop* propio.

Componentes principales:
- **Single Thread Loop**: gestiona la cola de tareas y eventos de I/O no bloqueante.
- **Thread Pool (libuv)**: maneja tareas costosas (cripto, file system, DNS).
- **Bindings C++**: puente entre código JS y librerías nativas.
- **Process.nextTick() vs setImmediate()**:
	- `nextTick()` → antes del siguiente ciclo del loop (microtask).
	- `setImmediate()` → en la fase de *check* del loop (macrotask).

{% raw %}
```js
setImmediate(() => console.log("Immediate"));
process.nextTick(() => console.log("Next tick"));
console.log("Start");
// Salida: Start → Next tick → Immediate
```
{% endraw %}`

---

### Deno y Bun

#### Deno

Runtime seguro y moderno creado por el mismo autor de Node.js:

* Escrito en **Rust**.
* Soporte nativo para **TypeScript**.
* Sin `node_modules`, usa **URLs como imports**.
* Seguridad granular: requiere permisos explícitos (`--allow-net`, `--allow-read`).

#### Bun

* Desarrollado en **Zig**, con enfoque en velocidad.
* Combina *runtime*, *bundler*, y *test runner*.
* Alta compatibilidad con Node.js y NPM.
* Excelente rendimiento para SSR y edge computing.

---

## 🌍 JavaScript en el Lado del Servidor y la Nube

### Serverless y Edge Functions

El JavaScript moderno se ejecuta cada vez más en el *edge*:

* Cloudflare Workers, Vercel Edge Functions, Deno Deploy.
* Modelo basado en **Request/Response streaming**.
* Sin procesos persistentes, estado efímero y escalado instantáneo.

Ejemplo básico en Cloudflare Worker:

{% raw %}
```js
export default {
	async fetch(request) {
		return new Response("Hola desde el edge!", { status: 200 });
	}
};
```
{% endraw %}

### Microservicios con JavaScript

Frameworks:

* **Fastify** → rápido, tipado, y compatible con plugins.
* **NestJS** → arquitectura modular inspirada en Angular.
* **Express** → base clásica y minimalista.

Patrones comunes:

* Controladores + Servicios + Inyección de dependencias.
* API Gateways con autenticación JWT.
* Balanceo mediante reverse proxies o *load balancers*.

---

## 🧠 Modelos de Programación Emergentes

### Reactive Programming

Reactive Programming trata los valores como *flujos de datos* que pueden ser observados:

* **RxJS**: librería base para observables.
* Operadores (`map`, `filter`, `mergeMap`, `switchMap`).
* Ideal para UI reactivas, sockets y streams en tiempo real.

{% raw %}
```js
import { fromEvent } from "rxjs";
fromEvent(document, "click").subscribe(() => console.log("Click detectado"));
```
{% endraw %}

### Functional Reactive Systems

Combinan programación funcional + reactiva:

* Pureza + Observables = lógica predecible y testeable.
* Patrones: *store as a function*, *intent-model-view*.

---

## 🧬 Programación Funcional Avanzada

* **Currying y Partial Application** → transformar funciones con múltiples argumentos en una serie de funciones unarias.
* **Composición** → `compose(f, g)(x)` → ejecuta `f(g(x))`.
* **Transducers** → optimizan pipelines de operaciones (`map` + `filter` sin crear arrays intermedios).
* **Functor, Monad, Applicative** → estructuras matemáticas para manejar efectos de manera pura (p. ej. Maybe, Either, Task).

Ejemplo de currificación:

{% raw %}
```js
const add = a => b => a + b;
const inc = add(1);
console.log(inc(5)); // 6
```
{% endraw %}

---

## 📚 Estandarización y Evolución del Lenguaje

### TC39 y ECMAScript

El comité TC39 desarrolla nuevas propuestas de ECMAScript en 5 etapas:

1. Idea (Stage 0)
2. Propuesta formal (Stage 1)
3. Implementación inicial (Stage 2)
4. Implementaciones y feedback (Stage 3)
5. Aprobación final (Stage 4)

**Propuestas recientes**:

* `Temporal API` → reemplazo de `Date` con precisión temporal robusta.
* `Pattern Matching` → sintaxis similar a `match` en otros lenguajes.
* `Record & Tuple` → estructuras inmutables y comparables por valor.

Ejemplo de *Pattern Matching* propuesto:

{% raw %}
```js
match (user.role) {
	when ("admin") { console.log("Permisos totales") }
	when ("guest") { console.log("Acceso limitado") }
}
```
{% endraw %}

---

## 🧠 Data Structures Modernas

### WeakMap y WeakSet

Permiten referencias *débiles* a objetos sin evitar su recolección:

{% raw %}
```js
const cache = new WeakMap();
function memo(fn) {
	return arg => {
		if (cache.has(arg)) return cache.get(arg);
		const res = fn(arg);
		cache.set(arg, res);
		return res;
	};
}
```
{% endraw %}

### Iteradores Personalizados

Los objetos pueden definir su propio protocolo de iteración:

{% raw %}
```js
const contador = {
	current: 0,
	end: 3,
	[Symbol.iterator]() {
		return {
			next: () => ({
				value: this.current,
				done: this.current++ >= this.end
			})
		};
	}
};
for (const n of contador) console.log(n);
```
{% endraw %}

---

## 🖥️ WebAssembly (WASM) y Rendimiento

WebAssembly permite ejecutar código compilado (C, Rust, Go) dentro del navegador a velocidad casi nativa.
JS puede interoperar con módulos WASM para tareas intensivas:

{% raw %}
```js
const wasmModule = await WebAssembly.instantiateStreaming(fetch("math.wasm"));
wasmModule.instance.exports.add(2, 3);
```
{% endraw %}

Usos comunes:

* Procesamiento de imágenes/audio/video.
* Criptografía y compresión.
* Juegos 3D y motores de física.
* Cálculos científicos o financieros.

---

## 🧭 Web Workers y Paralelismo

### Tipos de Workers

* **Dedicated Workers** → un hilo por archivo.
* **Shared Workers** → compartidos entre pestañas.
* **Service Workers** → proxy entre app y red.
* **OffscreenCanvas** → renderizado paralelo sin bloquear el hilo principal.

Ejemplo básico:

{% raw %}
```js
// worker.js
onmessage = e => postMessage(e.data * 2);

// main.js
const worker = new Worker("worker.js");
worker.onmessage = e => console.log("Resultado:", e.data);
worker.postMessage(10);
```
{% endraw %}

---

## 🪶 Performance Patterns

### Minimizar Bloqueo del Main Thread

* Usa `requestIdleCallback()` para tareas no críticas.
* Prioriza *lazy loading* y *code splitting*.
* Reemplaza bucles grandes con *chunked loops* o *web workers*.

### Optimización de Memoria

* Evita arrays esparcidos.
* Prefiere `ArrayBuffer` o `TypedArray` en cálculos numéricos.
* Usa `Object.freeze()` para estructuras estáticas.

---

## 🌐 Interoperabilidad y APIs del Navegador

* **Web Streams API** → lectura/escritura eficiente de datos binarios.
* **Web Crypto API** → generación y verificación de firmas.
* **IntersectionObserver** → detección de visibilidad de elementos.
* **WebSockets y SSE** → comunicación bidireccional en tiempo real.
* **WebGPU** → API moderna para gráficos y computación paralela.

---

## 🧱 Integración con TypeScript

TypeScript amplía JS con tipado estructural y metaprogramación de tipos.

Temas avanzados:

* **Conditional Types** (`T extends U ? X : Y`)
* **Mapped Types** (`{ [K in keyof T]: T[K] }`)
* **Inferencia avanzada** (`infer` para extraer tipos)
* **Decoradores experimentales** (`@` syntax para clases y propiedades)

Ejemplo:

{% raw %}
```ts
type Awaited<T> = T extends Promise<infer U> ? U : T;
type Result = Awaited<Promise<number>>; // number
```
{% endraw %}

---

## 🔮 Futuros Horizontes

* AI & JavaScript: integración con TensorFlow.js, ONNX y WebGPU.
* Quantum JS Experiments: simulación de circuitos cuánticos con frameworks JS.
* Edge AI: ejecución de modelos ML ligeros directamente en el navegador.
* WebContainers: ejecución completa de Node.js en el navegador (StackBlitz).
* Zero-copy Data Exchange: mejora de rendimiento entre JS y WASM.

---

## ✅ Conclusión

El ecosistema JavaScript trasciende su rol tradicional:
hoy abarca **frontend, backend, edge, IA, render 3D, y computación paralela**, manteniendo su esencia de lenguaje interpretado, flexible y en constante expansión.

**Siguientes notas recomendadas:**

* JS Engines Internals
* Reactive Systems JS
* Performance y Observabilidad JS
* Edge y Serverless JavaScript
* WebAssembly Integration
* TypeScript Deep Patterns

