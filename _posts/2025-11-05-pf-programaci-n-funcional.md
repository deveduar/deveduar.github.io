---
date: 2025-11-05 13:46
title: PF Programación Funcional
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
aliases:
public_note: true
category: Computer Science
tags:
  - CS
  - arquitectura
  - programming
---
# PF Programación Funcional
``

- [Computer Science](/computer%20science/computer-science/)

La **programación funcional (PF)** es un paradigma de programación que se centra en la evaluación de **funciones puras**, la **inmutabilidad de los datos** y la **ausencia de efectos secundarios**. Su objetivo es producir código más predecible, modular y fácil de razonar matemáticamente.

## Fundamentos de la Programación Funcional

### Funciones puras
Una **función pura** siempre devuelve el mismo resultado para los mismos argumentos y **no altera el estado global** ni produce efectos externos (como modificar una variable fuera de su ámbito o realizar operaciones de E/S).

{% raw %}
```js
// Ejemplo de función pura
const suma = (a, b) => a + b;

// Ejemplo de función impura
let x = 0;
const sumaImpura = (a) => (x += a); // modifica el estado global
```
{% endraw %}`

### Inmutabilidad

Los datos no se modifican; en su lugar, se crean **nuevas estructuras** con los cambios aplicados. Esto evita errores por efectos colaterales y mejora la trazabilidad del estado.

{% raw %}
```js
// Inmutable
const nums = [1, 2, 3];
const nuevos = [...nums, 4];

// Mutable
nums.push(4);
```
{% endraw %}

### Funciones de orden superior

Las **funciones de orden superior** son aquellas que reciben o devuelven otras funciones, permitiendo la composición y reutilización de lógica.

{% raw %}
```js
const aplicarOperacion = (operacion, x, y) => operacion(x, y);
const multiplicar = (a, b) => a * b;
console.log(aplicarOperacion(multiplicar, 2, 3)); // 6
```
{% endraw %}

### Composición de funciones

La **composición** consiste en combinar funciones pequeñas para formar funciones más complejas, reduciendo el acoplamiento y mejorando la claridad.

{% raw %}
```js
const doble = x => x * 2;
const cuadrado = x => x * x;
const dobleYCuadrado = x => cuadrado(doble(x));
```
{% endraw %}

### Evaluación perezosa (Lazy evaluation)

Evalúa expresiones **solo cuando son necesarias**, mejorando el rendimiento y permitiendo trabajar con estructuras infinitas.

{% raw %}
```js
function* numerosNaturales() {
	let n = 0;
	while (true) yield n++;
}
const generador = numerosNaturales();
console.log(generador.next().value); // 0
console.log(generador.next().value); // 1
```
{% endraw %}

## Principios y conceptos clave

* **Transparencia referencial:** una expresión puede reemplazarse por su valor sin cambiar el comportamiento del programa.
* **Recursión:** sustituye los bucles iterativos tradicionales.
* **Currificación (Currying):** convierte una función con múltiples argumentos en una secuencia de funciones de un solo argumento.
* **Partial application:** permite fijar algunos parámetros de una función para crear nuevas funciones más específicas.
* **Reducir efectos secundarios:** se prioriza el retorno de valores sobre la mutación del estado o el uso de variables globales.
* **Programación declarativa:** se centra en el *qué* hacer más que en el *cómo* hacerlo.

## Currificación y Aplicación Parcial

### Currificación

{% raw %}
```js
const suma = a => b => a + b;
console.log(suma(2)(3)); // 5
```
{% endraw %}

### Aplicación parcial

{% raw %}
```js
const sumar = (a, b, c) => a + b + c;
const sumarParcial = sumar.bind(null, 1, 2);
console.log(sumarParcial(3)); // 6
```
{% endraw %}

## Funciones comunes en PF

### map, filter y reduce

{% raw %}
```js
const numeros = [1, 2, 3, 4, 5];
const dobles = numeros.map(n => n * 2);
const pares = numeros.filter(n => n % 2 === 0);
const sumaTotal = numeros.reduce((acc, n) => acc + n, 0);
```
{% endraw %}

### pipe y compose

{% raw %}
```js
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const incrementar = x => x + 1;
const duplicar = x => x * 2;

const pipeline = pipe(incrementar, duplicar);
console.log(pipeline(3)); // 8
```
{% endraw %}

## Ventajas

* Código más **predecible**, sin estados ocultos.
* Mayor **modularidad** y reutilización de funciones.
* Facilita **testeo y depuración**.
* Ideal para entornos **concurrencia o asincronía**, al evitar mutaciones compartidas.

## Desventajas

* Menor rendimiento si no se optimiza adecuadamente.
* Curva de aprendizaje más pronunciada para quienes vienen de paradigmas imperativos.
* No siempre es óptima para tareas intensivas en estado mutable.

## Ecosistema y Herramientas

* **Lenguajes puros:** Haskell, Elm, PureScript.
* **Lenguajes híbridos:** JavaScript, Python, Scala, Kotlin.
* **Librerías destacadas:** Ramda, Lodash/fp, RxJS.
* **Conceptos avanzados:** Monadas, funtores, semigrupos, aplicativos.

## Casos de uso comunes

* Transformación de colecciones de datos (ETL, pipelines).
* Programación reactiva y flujos de eventos (RxJS).
* Procesamiento concurrente sin estados compartidos.
* Lógica declarativa en interfaces funcionales o frameworks como React.

## Buenas prácticas

* Usar funciones pequeñas y puras.
* Evitar mutaciones y variables globales.
* Componer funciones en lugar de anidarlas.
* Reducir el número de dependencias externas.
* Priorizar expresividad sobre complejidad sintáctica.

## Glosario

* **Función pura:** función sin efectos colaterales.
* **Inmutabilidad:** principio de no modificar datos originales.
* **Transparencia referencial:** propiedad que permite sustituir una expresión por su valor.
* **Currificación:** conversión de funciones multiargumento en funciones unarias.
* **Composición:** combinación de funciones para crear flujos de transformación.
* **Monada:** estructura que modela secuencias de operaciones con contexto.
* **Functor:** tipo que implementa `map` para transformar su valor interno.
* **Aplicativo:** extensión de los funtores que permite aplicar funciones encapsuladas.

## Referencias cruzadas

* POO vs PF
* Paradigmas de programación
* Principios SOLID
* Inmutabilidad
* Composición de funciones

# PF Programación Funcional (Ampliación)

## Conceptos avanzados

### Monadas
Las **mónadas** encapsulan un valor y un contexto (como errores, asincronía o estado) permitiendo **encadenar operaciones** de forma segura y declarativa.  
Siguen tres leyes: **identidad izquierda**, **identidad derecha** y **asociatividad**.

{% raw %}
```js
// Ejemplo de mónada Maybe en JS
const Maybe = x => ({
	map: f => (x == null ? Maybe(null) : Maybe(f(x))),
	value: x
});

const resultado = Maybe(5).map(x => x * 2).map(x => x + 3).value; // 13
```
{% endraw %}`

### Functores y Aplicativos

Un **functor** es un contenedor que implementa `map`, permitiendo transformar su contenido sin modificar la estructura.
Un **aplicativo** amplía la idea permitiendo aplicar funciones también encapsuladas.

{% raw %}
```js
// Ejemplo de functor simple
const Box = x => ({
	map: f => Box(f(x)),
	value: x
});

const res = Box(2).map(x => x * 3).map(x => x + 1).value; // 7
```
{% endraw %}

### Monad Maybe y Either

Se utilizan para manejar errores o valores opcionales sin lanzar excepciones.

{% raw %}
```js
const Either = (left, right) => ({
	map: f => (right === null ? Either(left, null) : Either(left, f(right))),
	flatMap: f => (right === null ? Either(left, null) : f(right)),
	getOrElse: def => (right === null ? def : right)
});

const safeDivide = (a, b) => (b === 0 ? Either("División por cero", null) : Either(null, a / b));
const resultado = safeDivide(10, 2).map(x => x * 2).getOrElse(0); // 10
```
{% endraw %}

### Inmutabilidad estructural

Las estructuras inmutables no se modifican, sino que generan nuevas versiones compartiendo memoria con versiones previas mediante **estructuras persistentes**.

**Ejemplo:** Librerías como `Immutable.js` o `Immer` permiten trabajar con objetos inmutables de forma eficiente.

{% raw %}
```js
import { produce } from "immer";

const estado = { usuario: { nombre: "Ana", edad: 30 } };
const nuevo = produce(estado, draft => {
	draft.usuario.edad = 31;
});
console.log(estado.usuario.edad); // 30
console.log(nuevo.usuario.edad); // 31
```
{% endraw %}

## Programación funcional y asincronía

### Funciones puras en contextos asíncronos

Aunque las funciones asíncronas dependen de temporizadores o promesas, se puede mantener la pureza si devuelven nuevas promesas sin alterar el entorno.

{% raw %}
```js
const obtenerDatos = url =>
	fetch(url)
		.then(res => res.json())
		.then(data => procesar(data)); // devuelve una nueva promesa
```
{% endraw %}

### Composición de Promesas

Se pueden **componer funciones asíncronas** con utilidades como `Promise.all`, `async/await`, o librerías de flujo funcional (`fp-ts`, `Ramda`).

{% raw %}
```js
const getUser = id => Promise.resolve({ id, nombre: "Juan" });
const getPosts = id => Promise.resolve([{ id: 1, userId: id }]);

async function pipeline() {
	const usuario = await getUser(1);
	const posts = await getPosts(usuario.id);
	return { usuario, posts };
}
```
{% endraw %}

## Composición avanzada

### Point-free style

La **programación point-free** elimina argumentos explícitos al encadenar funciones, haciendo el código más declarativo.

{% raw %}
```js
import { compose } from "ramda";

const upper = s => s.toUpperCase();
const exclaim = s => `${s}!`;
const shout = compose(exclaim, upper);
console.log(shout("hola")); // "HOLA!"
```
{% endraw %}

### Composición con datos inmutables

Usar funciones puras facilita la **composición de transformaciones** sobre datos complejos.

{% raw %}
```js
const actualizarUsuario = pipe(
	u => ({ ...u, activo: true }),
	u => ({ ...u, nombre: u.nombre.toUpperCase() })
);
```
{% endraw %}

## PF en lenguajes imperativos

### JavaScript

JS permite aplicar PF con librerías y patrones, aunque no es puramente funcional:

* Uso de funciones puras con `map`, `filter`, `reduce`.
* Empleo de `const` y spread para inmutabilidad.
* Librerías: **Ramda**, **Folktale**, **fp-ts**.

### Python

Soporta PF con funciones como `map`, `filter`, `reduce`, `lambda`, `functools` y `itertools`.

{% raw %}
```python
from functools import reduce

numeros = [1, 2, 3, 4]
resultado = reduce(lambda a, b: a + b, map(lambda x: x * 2, numeros))
print(resultado)  # 20
```
{% endraw %}

### Scala y Kotlin

Lenguajes híbridos que integran POO y PF:

* **Funciones como ciudadanos de primera clase**
* **Inmutabilidad por defecto**
* **Pattern matching** y **expresiones puras**

## PF y diseño de software

### Efectos controlados

Los **efectos controlados** se gestionan encapsulando interacciones externas (E/S, logs, etc.) dentro de contenedores monádicos o funciones puras que devuelven acciones a ejecutar.

### Testing funcional

Las funciones puras son más **testeables**, pues no dependen del estado global ni del tiempo. Se testean por **entradas y salidas**.

{% raw %}
```js
const sumar = (a, b) => a + b;
console.assert(sumar(2, 3) === 5);
```
{% endraw %}

### Refactorización funcional

Transformar código imperativo a funcional implica:

1. Reemplazar bucles por `map`, `filter`, `reduce`.
2. Sustituir mutaciones por objetos nuevos.
3. Aislar funciones impuras en la periferia.
4. Centralizar la lógica de negocio en funciones puras.

## PF y arquitectura de software

* **Arquitecturas funcional-reactivas:** combinan PF con eventos asincrónicos (ej. RxJS, ReactiveX).
* **Functional core, imperative shell:** el núcleo del sistema es funcional, mientras la periferia (UI, I/O) es imperativa.
* **Event sourcing:** modelo funcional del estado derivado de eventos inmutables.

## Ejemplo: Functional Core, Imperative Shell

{% raw %}
```js
// Núcleo funcional
const procesarPedido = pedido => ({
	...pedido,
	total: pedido.items.reduce((sum, item) => sum + item.precio, 0)
});

// Capa imperativa
function main() {
	const pedido = { items: [{ precio: 10 }, { precio: 20 }] };
	const resultado = procesarPedido(pedido);
	console.log(resultado);
}
main();
```
{% endraw %}

## Enfoques modernos y tendencias

* **Programación funcional reactiva (FRP):** modela flujos de datos con funciones puras y observables.
* **Efectos algebraicos:** alternativa a monadas para describir efectos de manera declarativa.
* **Type-level programming:** PF aplicada a sistemas de tipos para garantizar propiedades del programa.
* **Transformaciones puras en sistemas distribuidos:** PF aplicada a microservicios y procesamiento en streaming.

## Glosario ampliado

* **Monad Transformer:** patrón para combinar diferentes mónadas.
* **Side Effect:** operación que modifica el estado externo.
* **Pure Core:** sección del sistema totalmente funcional.
* **Lazy Evaluation:** retrasar la evaluación hasta que sea estrictamente necesaria.
* **Efectos algebraicos:** manejo estructurado de efectos sin abandonar la pureza.
* **Functional Reactive Programming (FRP):** paradigma basado en flujos de datos y observables.
* **Pattern Matching:** selección estructural basada en forma y contenido.
* **Persistent Data Structure:** estructura inmutable que conserva versiones previas de forma eficiente.
* **Higher-Kinded Types:** tipos parametrizados sobre otros tipos, base de abstracciones funcionales complejas.

## Referencias cruzadas

* Monad
* Functional Reactive Programming
* Inmutabilidad estructural
* Pureza referencial
* Arquitectura funcional
* Librerías FP modernas
* Comparativa paradigmas

# PF Programación Funcional (Extensión final)

Esta extensión complementa las notas previas abordando temas **avanzados, prácticos y de integración** de la Programación Funcional con otros paradigmas, entornos y patrones de diseño. No repite conceptos previos, sino que los amplía hacia su aplicación real en desarrollo moderno.

## Integración con otros paradigmas

### FP y POO (enfoque híbrido)
En lenguajes multiparadigma (JavaScript, Python, Kotlin, Scala) es común integrar **conceptos funcionales** dentro de sistemas orientados a objetos:

- **Objetos inmutables**: estado interno solo mediante constructores o métodos que devuelven nuevas instancias.  
- **Métodos puros**: evitan mutar propiedades del objeto.  
- **Clases como contenedores de funciones puras**.  
- **Uso de lambdas o closures** como reemplazo de patrones como Strategy o Command.

{% raw %}
```js
class Calculadora {
	constructor() {}
	sumar = (a, b) => a + b;
	elevar = (a, b) => Math.pow(a, b);
}
const calc = new Calculadora();
console.log(calc.sumar(3, 4)); // 7
```
{% endraw %}`

### FP y Arquitectura orientada a eventos

La PF encaja con sistemas **event-driven** porque cada evento puede tratarse como una **transformación pura** sobre un flujo de datos inmutable.

{% raw %}
```js
import { fromEvent } from "rxjs";
fromEvent(document, "click")
	.map(e => ({ x: e.clientX, y: e.clientY }))
	.subscribe(console.log);
```
{% endraw %}

### FP y programación declarativa reactiva

Frameworks como **React**, **Svelte** o **SolidJS** aplican PF indirectamente: el estado se deriva de funciones puras que describen la interfaz como una proyección del estado actual.

{% raw %}
```js
function Componente({ contador }) {
	return <p>El doble es {contador * 2}</p>;
}
```
{% endraw %}

## Aplicaciones prácticas de PF en entornos reales

### PF en bases de datos

El enfoque funcional ayuda a:

* Definir **consultas puras** y deterministas.
* Implementar **ETL funcionales** donde cada transformación es una función pura.
* Facilitar auditorías mediante datos inmutables (event sourcing).

### PF en sistemas distribuidos

En entornos distribuidos, PF:

* Simplifica el manejo de concurrencia.
* Permite **replicar estados sin conflictos** gracias a la inmutabilidad.
* Es base de sistemas como MapReduce o Apache Spark.

{% raw %}
```python
# Ejemplo de transformación funcional en Spark (PySpark)
rdd = sc.parallelize([1, 2, 3, 4])
resultado = rdd.map(lambda x: x * 2).filter(lambda x: x > 4).collect()
```
{% endraw %}

## PF y control de efectos

### Efectos algebraicos

Son una forma más expresiva que las mónadas para **describir efectos** (E/S, errores, estado mutable) sin romper la pureza funcional.
Permiten definir *qué efectos* puede tener una función sin ejecutarlos inmediatamente.

Ejemplo conceptual (pseudocódigo):

{% raw %}
```
effect Log: { log(msg: String): Void }

function calcular(x) {
  perform Log.log("Calculando...")
  return x * 2
}
```
{% endraw %}

### IO Monads

Encapsulan efectos de entrada/salida dentro de una estructura funcional, ejecutándose solo al final del programa.

{% raw %}
```js
const IO = effect => ({
	run: () => effect()
});

const imprimir = IO(() => console.log("Hola funcionalidad pura"));
imprimir.run(); // ejecución explícita
```
{% endraw %}

## PF y optimización

### Memoización

Técnica funcional para **almacenar resultados de funciones puras** y evitar recalcular valores costosos.

{% raw %}
```js
const memoizar = f => {
	const cache = new Map();
	return (...args) => {
		const key = JSON.stringify(args);
		if (!cache.has(key)) cache.set(key, f(...args));
		return cache.get(key);
	};
};
const fib = memoizar(n => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));
console.log(fib(40));
```
{% endraw %}

### Evaluación diferida

Evita cálculos innecesarios mediante la construcción de **pipelines perezosos**.

{% raw %}
```js
const lazy = (gen, fn) => {
	for (const val of gen) yield fn(val);
};
```
{% endraw %}

## FP en dominios específicos

### PF en inteligencia artificial

* Definición funcional de **pipelines de datos**.
* Entrenamientos reproducibles gracias a la **inmutabilidad**.
* Composición de transformaciones para **features** o **modelos**.

### PF en DevOps y pipelines CI/CD

* Scripts declarativos en herramientas como **Terraform**, **Ansible**, **GitHub Actions**.
* Modelado de despliegues como **funciones puras idempotentes**.
* Facilita reproducibilidad y trazabilidad.

### PF en seguridad

* Minimiza efectos colaterales y puntos de mutación.
* Fomenta sistemas **deterministas** que previenen ataques basados en estado mutable.
* Simplifica verificación formal de funciones críticas.

## Paradigmas relacionados

* **Reactive Programming:** flujos de datos declarativos.
* **Declarative Programming:** describe el resultado deseado, no el proceso.
* **Dataflow Programming:** procesamiento como red de transformaciones puras.
* **Category Theory:** base teórica de la PF moderna.

## Enfoques formales y matemáticos

### Cálculo lambda

Fundamento teórico de la PF, donde todo se expresa como **función anónima** y aplicación de funciones.
Ejemplo de reducción lambda:

{% raw %}
```
(λx. x + 1) 4  ⇒  4 + 1  ⇒  5
```
{% endraw %}

### Teoría de categorías

Modela funciones como **morfismos** y tipos como **objetos**, sirviendo de base a estructuras como funtores, mónadas y semigrupos.

* **Objeto:** un tipo o conjunto.
* **Morfismo:** una función pura entre tipos.
* **Composición:** combinación de morfismos (funciones).

## PF y diseño modular

* **Modularidad funcional:** cada módulo es un conjunto de funciones puras relacionadas.
* **Reutilización por composición:** funciones genéricas se combinan para crear lógica compleja.
* **Aislamiento de efectos:** las dependencias impuras (I/O, API) se mantienen en capas externas.
* **Facilidad para testing y paralelismo:** cada unidad funcional es independiente y determinista.

## PF en contextos modernos

* **Serverless Functions:** cada función se comporta como una unidad pura de cómputo.
* **Data Transformation Pipelines:** PF como motor lógico en ETL y streaming.
* **Functional Reactive Programming (FRP):** base de librerías como RxJS o Cycle.js.
* **Functional Core, Imperative Shell:** patrón arquitectónico que separa pureza y efectos.
* **Declarative UI:** paradigma de React, SwiftUI o Jetpack Compose basado en funciones puras que renderizan vistas.

## Glosario extendido

* **Monad Transformer Stack:** combinación jerárquica de mónadas para manejar múltiples contextos.
* **Functor Laws:** identidad y composición.
* **Kleisli composition:** composición de funciones monádicas.
* **Semigroup / Monoid:** estructuras algebraicas para combinar valores.
* **Algebraic Data Types (ADT):** definición de tipos compuestos de forma declarativa.
* **Catamorfismo / Anamorfismo:** plegado y despliegue funcional de estructuras de datos.
* **Point-Free Style:** estilo donde las funciones se definen sin parámetros explícitos.
* **Referential Transparency:** capacidad de sustituir una expresión por su valor sin alterar el resultado.
* **Higher-Order Function:** función que recibe o retorna otra función.
* **Purity Boundary:** frontera entre código puro e impuro.

## Referencias cruzadas

* Cálculo lambda
* Category Theory
* Reactive Programming
* Functional Core Imperative Shell
* Declarative Programming
* Monoid y Semigroup
* Teoría de tipos funcional
* Lazy Evaluation
* Arquitectura funcional moderna
* Functional Reactive Programming

# PF Programación Funcional (Ampliación final completa)

Esta nota **complementa y cierra** el tema de Programación Funcional, incorporando conceptos de **optimización, implementación práctica, tipado, patrones, verificación formal** y su relación con otros paradigmas y ecosistemas actuales. No repite contenido previo, sino que amplía el panorama hacia el uso profesional y teórico avanzado.

---

## Tipado y seguridad en PF

### Tipos algebraicos (ADT)
Los **Algebraic Data Types (ADT)** permiten modelar información compleja mediante **composición de tipos**:
- **Suma (Union Type):** una cosa u otra (`Either`, `Option`).
- **Producto (Record):** una cosa con otra (`tuplas`, `structs`).

Ejemplo en TypeScript:

{% raw %}
```ts
type Resultado = 
	| { tipo: "ok"; valor: number }
	| { tipo: "error"; mensaje: string };

function dividir(a: number, b: number): Resultado {
	return b === 0
		? { tipo: "error", mensaje: "División por cero" }
		: { tipo: "ok", valor: a / b };
}
```
{% endraw %}`

### Type Inference y Polimorfismo paramétrico

La inferencia de tipos permite determinar automáticamente el tipo de cada expresión sin anotaciones explícitas.
El **polimorfismo paramétrico** permite escribir funciones genéricas seguras por tipo.

{% raw %}
```haskell
-- Ejemplo en Haskell
map :: (a -> b) -> [a] -> [b]
```
{% endraw %}

### Tipos dependientes

Extienden la relación entre tipos y valores, permitiendo que el **tipo dependa del valor**, reforzando la seguridad lógica.

Ejemplo conceptual (Idris):

{% raw %}
```idris
data Vector : Nat -> Type -> Type where
	Nil  : Vector 0 a
	Cons : a -> Vector n a -> Vector (S n) a
```
{% endraw %}

---

## Evaluación y ejecución

### Modelos de evaluación

* **Eager (estricta):** evalúa inmediatamente las expresiones (Python, JS).
* **Lazy (perezosa):** evalúa solo cuando es necesario (Haskell).
* **Normal form:** evalúa desde fuera hacia adentro, preservando la pureza.

### Tail Call Optimization (TCO)

Optimización que permite **reemplazar llamadas recursivas** por saltos directos, evitando desbordamientos de pila.

{% raw %}
```js
function factorial(n, acc = 1) {
	return n <= 1 ? acc : factorial(n - 1, acc * n);
}
```
{% endraw %}

---

## PF aplicada a arquitectura y diseño

### Functional Composition Pipelines

Las transformaciones se organizan en **pipelines funcionales** de pasos puros.

{% raw %}
```js
const pipeline = x => [f1, f2, f3].reduce((acc, fn) => fn(acc), x);
```
{% endraw %}

### Functional Core + Imperative Shell

Estructura donde la lógica central es **totalmente funcional**, mientras que la periferia (UI, red, E/S) gestiona efectos.

### Event Sourcing funcional

Cada cambio del sistema se representa como una **transformación inmutable del estado**.

{% raw %}
```js
const aplicarEvento = (estado, evento) => {
	switch (evento.tipo) {
		case "CREAR": return { ...estado, creado: true };
		case "ACTUALIZAR": return { ...estado, ...evento.datos };
		default: return estado;
	}
};
```
{% endraw %}

---

## Patrones funcionales

### Functor y Monad Transformers

Permiten **componer estructuras funcionales complejas** (como `Maybe` dentro de `IO`).

{% raw %}
```js
const Maybe = x => ({
	map: f => (x == null ? Maybe(null) : Maybe(f(x))),
	flatMap: f => (x == null ? Maybe(null) : f(x)),
	value: x
});
```
{% endraw %}

### Catamorfismos y Anamorfismos

* **Catamorfismo:** reduce una estructura (como `reduce` en listas).
* **Anamorfismo:** genera una estructura (como `unfold`).

{% raw %}
```js
const unfold = (fn, seed) => {
	const res = [];
	let [done, value] = fn(seed);
	while (!done) {
		res.push(value);
		[done, value] = fn(value);
	}
	return res;
};
```
{% endraw %}

### Lenses y Optics

Permiten acceder y modificar **estructuras inmutables anidadas** de forma declarativa.

{% raw %}
```js
const view = (lens, obj) => lens.get(obj);
const set = (lens, val, obj) => lens.set(val, obj);
```
{% endraw %}

---

## PF y concurrencia

### Concurrencia funcional

Gracias a la inmutabilidad, múltiples procesos pueden trabajar sobre datos sin conflictos.
Ejemplo: **map-reduce** funcional.

{% raw %}
```js
const mapReduce = (mapFn, reduceFn, data) =>
	data.map(mapFn).reduce(reduceFn);
```
{% endraw %}

### Actor Model y PF

Modelo basado en actores que comunican mensajes inmutables (como en Erlang o Elixir).

{% raw %}
```elixir
defmodule Contador do
	def loop(contador) do
		receive do
			{:sumar, n} -> loop(contador + n)
			{:mostrar, pid} -> send(pid, contador); loop(contador)
		end
	end
end
```
{% endraw %}

---

## Verificación formal y PF

### Pruebas de propiedades (Property-based testing)

En lugar de probar casos concretos, se definen **propiedades que siempre deben cumplirse**.

Ejemplo (JavaScript con fast-check):

{% raw %}
```js
fc.assert(
	fc.property(fc.integer(), fc.integer(), (a, b) => a + b === b + a)
);
```
{% endraw %}

### Razonamiento ecuacional

Basado en la **transparencia referencial**, permite reescribir funciones como ecuaciones matemáticas equivalentes, garantizando la corrección.

---

## PF en la ingeniería de software moderna

### Microservicios funcionales

Cada servicio puede modelarse como una **función pura de entrada/salida**, con efectos externos controlados.

### PF en la nube

El enfoque serverless encaja con PF:

* Cada función es independiente, pura y sin estado.
* Escalabilidad automática sin compartir contexto mutable.
* Despliegues reproducibles y deterministas.

### PF en análisis de datos

Uso de pipelines de transformación funcional en ETL, Spark, Pandas o DataFrames.

---

## Lenguajes y ecosistemas destacados

| Lenguaje             | Naturaleza            | Características funcionales principales     |
| -------------------- | --------------------- | ------------------------------------------- |
| **Haskell**          | Puro                  | Evaluación perezosa, tipos fuertes, monadas |
| **Scala**            | Híbrido               | FP + POO, interoperable con JVM             |
| **F#**               | Híbrido               | Integrado con .NET, expresividad funcional  |
| **Elixir**           | Funcional concurrente | Modelo de actores, tolerancia a fallos      |
| **Clojure**          | Funcional sobre JVM   | Inmutabilidad, macros, secuencias perezosas |
| **OCaml / ReasonML** | Funcional imperativo  | Tipado estático, algebraic types            |
| **PureScript**       | Puro                  | Compila a JavaScript, inspirado en Haskell  |
| **Erlang**           | Funcional concurrente | Modelo de actores, resiliencia distribuida  |

---

## PF y filosofía de diseño

* **Declaratividad absoluta:** expresar intención, no secuencia.
* **Determinismo:** mismas entradas → mismas salidas.
* **Composición antes que herencia.**
* **Pureza por defecto:** los efectos deben justificarse.
* **Transparencia en el flujo de datos.**

---

## Ramas teóricas y matemáticas

### Lógica constructiva

Base de muchos lenguajes funcionales, donde los programas son **pruebas ejecutables** de proposiciones.

### Cálculo categórico y morfismos

Define las operaciones funcionales como **composiciones entre morfismos**, sentando la base de monadas, funtores y compositores.

---

## PF en la educación y la industria

* Enseñanza universitaria: base teórica en Haskell y Scheme.
* Industria: integración en frameworks modernos, pipelines, y sistemas distribuidos.
* Impacto directo en React, Redux, Spark, Kafka Streams, y sistemas event-driven.

---

## Glosario final (síntesis completa)

* **ADT:** tipo algebraico que combina suma y producto.
* **Curryficación:** conversión de función multiargumento en funciones unarias.
* **Catamorfismo:** plegado estructural.
* **Anamorfismo:** expansión estructural.
* **Lente (Lens):** abstracción para modificar estructuras inmutables.
* **Monad Transformer:** combinación jerárquica de mónadas.
* **Functor Laws:** identidad y composición.
* **Eager/Lazy Evaluation:** evaluación estricta o diferida.
* **Property-based testing:** validación de propiedades invariantes.
* **TCO:** optimización de llamada en cola.
* **FRP:** programación reactiva funcional.
* **Referential Transparency:** intercambiabilidad de expresiones.
* **Point-Free:** estilo sin parámetros explícitos.
* **Pure Core:** núcleo funcional sin efectos.
* **Actor Model:** concurrencia basada en paso de mensajes.
* **Declaratividad:** expresar qué, no cómo.
* **Determinismo:** predecibilidad total de salida.

---

## Referencias cruzadas

* Paradigmas de programación
* POO vs PF
* Category Theory
* Monad y Functor
* Lazy Evaluation
* Arquitectura funcional moderna
* Functional Core Imperative Shell
* Reactive Programming
* Declarative Programming
* Event Sourcing funcional
* Testing funcional
* Functional Design Patterns

# PF Programación Funcional (Anexo experto y temas avanzados)

Esta extensión aborda los **temas más avanzados, contemporáneos y experimentales** de la Programación Funcional —aquellos que la conectan con la teoría de tipos, la verificación formal, el paralelismo moderno, la semántica de lenguajes, la inteligencia artificial declarativa y el diseño de sistemas complejos.

---

## Semántica formal y fundamentos teóricos

### Semántica denotacional
La **semántica denotacional** describe programas funcionales mediante **funciones matemáticas puras**, garantizando que cada expresión tiene un significado exacto e independiente del entorno.

Ejemplo conceptual:
{% raw %}
```

⟦ λx. x + 1 ⟧ = f donde f(n) = n + 1

```
{% endraw %}`

Esto permite **razonamiento formal**, equivalencia y refactorización segura entre expresiones.

### Semántica operacional
Define cómo se **evalúan paso a paso** las expresiones de un lenguaje. En PF, el enfoque se centra en:
- **Evaluación de expresiones** (no de instrucciones).  
- **Reducción de expresiones lambda** (β-reducción).  
- **Ausencia de estado mutable global.**

### Cálculo lambda tipado
Base lógica de los lenguajes funcionales modernos:
- Lambda no tipado → base pura.  
- Lambda simplemente tipado → control de tipos.  
- Sistema de tipos dependientes → verificación lógica.

---

## Programación funcional cuantitativa y probabilística

### Programación funcional probabilística
Extiende la PF clásica para manejar **incertidumbre y distribuciones**.

{% raw %}
```python
# Ejemplo en Pyro (Python)
import pyro.distributions as dist

def modelo():
    x = dist.Normal(0, 1).sample()
    y = dist.Normal(x, 1).sample()
    return y
```
{% endraw %}`

Se usa en inferencia bayesiana, aprendizaje automático y modelado estocástico.

### Programación funcional cuantitativa

Investiga **costes computacionales como efectos**, integrando PF con **análisis de rendimiento**:

* Coste como función monádica (monada de recursos).
* Control funcional del uso de memoria o energía.
* Base teórica de optimizaciones perezosas y memoización adaptativa.

---

## PF y paralelismo moderno

### Paralelismo declarativo

La PF permite expresar **computación paralela sin condiciones de carrera**, gracias a la ausencia de estado mutable.

{% raw %}
```js
const procesar = datos => datos.map(async d => await transformar(d));
Promise.all(procesar(entrada));
```
{% endraw %}

### Data Parallelism y Functional Streams

Uso de **flujos funcionales** (streams) para procesar grandes volúmenes de datos de manera paralela e incremental.

Ejemplo: Apache Spark o Flink aplican PF para distribuir transformaciones inmutables.

### STM (Software Transactional Memory)

Modelo inspirado en PF para **controlar concurrencia** mediante transacciones atómicas sobre memoria mutable aislada.

Ejemplo conceptual (Haskell):

{% raw %}
```haskell
atomically $ do
  x <- readTVar var
  writeTVar var (x + 1)
```
{% endraw %}

---

## PF y aprendizaje automático funcional

### Modelado funcional de redes neuronales

Frameworks modernos (JAX, Haiku, Flax) tratan las redes como **funciones puras**:

* Entradas → Transformaciones → Salidas.
* Entrenamiento → transformación funcional de parámetros.

{% raw %}
```python
def modelo(params, x):
    return x @ params["w"] + params["b"]
```
{% endraw %}

### Derivación automática funcional

La **diferenciación automática** (autodiff) se implementa de forma funcional mediante composición de derivadas.

{% raw %}
```python
from jax import grad

def f(x): return x ** 2 + 3 * x
df = grad(f)
print(df(2))  # 7
```
{% endraw %}

---

## PF en sistemas distribuidos y blockchain

### Funciones deterministas en blockchain

Los contratos inteligentes deben ser **puros y deterministas**, para que su ejecución sea reproducible en todos los nodos.

Ejemplo: **Cardano** usa **Plutus**, basado en Haskell.

{% raw %}
```haskell
validate :: Tx -> Bool
validate tx = (sum (inputs tx)) >= (sum (outputs tx))
```
{% endraw %}

### Modelos funcionales de consenso

Los algoritmos de consenso (Raft, Paxos) se pueden representar como **transformaciones puras** del estado global + log de eventos.

---

## PF y metaprogramación

### Funciones como metaprogramas

La PF facilita la **generación de código declarativo** mediante funciones que producen funciones o ASTs.

Ejemplo con macros funcionales (Clojure):

{% raw %}
```clojure
(defmacro unless [pred a b]
  `(if (not ~pred) ~a ~b))
```
{% endraw %}

### MetaPF y DSLs

Los **Domain Specific Languages (DSLs)** funcionales definen lenguajes internos declarativos, usando composición y tipos algebraicos.

Ejemplo (DSL para operaciones de base de datos):

{% raw %}
```haskell
data Query = Select [Field] | Where Condition | Join Query Query
```
{% endraw %}

---

## PF y razonamiento formal asistido por máquina

### Pruebas formales en PF

Lenguajes como **Coq**, **Agda** e **Idris** integran pruebas dentro del propio código.
Una función no compila si no se demuestra que cumple sus invariantes.

Ejemplo conceptual (Agda):

{% raw %}
```agda
plus-zero : (n : ℕ) → n + 0 ≡ n
plus-zero zero = refl
plus-zero (suc n) = cong suc (plus-zero n)
```
{% endraw %}

### Programación como demostración

Basado en el principio de **Curry–Howard**:

> “Los programas son pruebas y los tipos son proposiciones.”

Esto garantiza **corrección verificable** del código funcional.

---

## PF aplicada a sistemas operativos y compiladores

### Compiladores funcionales

Los compiladores de PF usan transformación de programas basada en **reescritura lambda** y **optimización semántica** (β, η-reducción, inlining, fusionado de map/reduce).

### Sistemas operativos funcionales

Investigación experimental en **kernels inmutables** donde los procesos y estados son estructuras funcionales persistentes (ej. MirageOS en OCaml).

---

## PF y ecosistema cuántico

### Programación funcional cuántica

Lenguajes como **Quipper** o **Q#** usan PF para modelar **circuitos cuánticos como funciones puras**:

* Los qubits son inmutables.
* Las operaciones se componen funcionalmente.
* Se representan transformaciones unitarias como funciones.

Ejemplo conceptual:

{% raw %}
```haskell
hadamardChain :: Qubit -> Circ Qubit
hadamardChain q = hadamard q >>= hadamard
```
{% endraw %}

---

## PF y diseño de interfaces declarativas

### Functional UI

Interfaces descritas como **funciones puras del estado**.
React, SwiftUI, Jetpack Compose siguen este modelo.

{% raw %}
```jsx
function Componente({ nombre }) {
	return <h1>Hola {nombre}</h1>;
}
```
{% endraw %}

### State as a function of time

PF aplicada a interfaces reactivas: la UI es una **proyección funcional del estado** a lo largo del tiempo.

---

## PF y computación simbólica

### Manipulación funcional de expresiones simbólicas

Lenguajes como **Lisp**, **Clojure** o **Wolfram Language** modelan código como **estructuras funcionales que pueden evaluarse o transformarse dinámicamente.**

{% raw %}
```clojure
(def expr '(* (+ x 1) 3))
(eval expr)
```
{% endraw %}

### Transformaciones algebraicas automáticas

PF se usa para derivar ecuaciones, simplificar expresiones o generar código optimizado.

---

## Glosario técnico adicional

* **Semántica denotacional:** asigna significado matemático a programas.
* **β/η-reducción:** reglas del cálculo lambda.
* **Monad de probabilidad:** estructura para cálculos probabilísticos.
* **STM:** memoria transaccional de software.
* **Autodiff:** diferenciación automática funcional.
* **Curry–Howard Isomorphism:** equivalencia entre programas y pruebas.
* **Monad de recursos:** controla coste o consumo computacional.
* **Functor cuántico:** estructura funcional para transformaciones unitarias.
* **MetaPF:** metaprogramación funcional.
* **Persistent Kernel:** sistema operativo con estado funcional inmutable.

---

## Referencias cruzadas finales

* Cálculo lambda tipado
* Probabilistic Functional Programming
* Functional Reactive Programming
* Type Systems avanzados
* Monad de efectos y recursos
* Functional Compilation
* Functional Metaprogramming
* Functional Quantum Computing
* Functional User Interfaces
* Programación declarativa simbólica
* Coq y Agda en PF

# PF Programación Funcional (Extensión final: fronteras y paradigmas híbridos)

Esta nota amplía los límites teóricos y prácticos de la Programación Funcional, abarcando **nuevas intersecciones con otros paradigmas, enfoques híbridos, metodologías de desarrollo y tendencias en investigación aplicada**, sin repetir conceptos previos.

---

## Paradigmas híbridos y evolución práctica

### Programación funcional híbrida
Combinación de PF con otros paradigmas para aprovechar sus ventajas:
- **PF + OOP:** permite encapsular efectos dentro de objetos inmutables. Ejemplo: Scala o Kotlin.  
- **PF + Reactiva:** modelos como FRP (Functional Reactive Programming) integran PF con programación orientada a eventos.  
- **PF + Imperativa controlada:** uso de efectos localizados mediante mónadas o efectos algebraicos.  

Ejemplo en Scala:
{% raw %}
```scala
trait Repositorio {
	def guardar(dato: Dato): IO[Unit]
}
```
{% endraw %}`

### PF en lenguajes multiparadigma

Lenguajes como **Python**, **JavaScript**, **Rust** o **C#** adoptan conceptos funcionales:

* Funciones de orden superior.
* Inmutabilidad.
* Map/filter/reduce.
* Expresiones lambda puras.
* Pattern matching (Rust, Swift, C# 9+).

---

## Efectos algebraicos y manejo avanzado de efectos

Los **efectos algebraicos** son una evolución de las mónadas:
permiten **declarar efectos** (estado, IO, excepciones) sin comprometer pureza ni modularidad.

{% raw %}
```ocaml
effect Choose : int list -> int

let ejemplo () =
	match perform (Choose [1;2;3]) with
	| x -> x + 1
```
{% endraw %}

Ventajas:

* Más componibles que las mónadas.
* Mejor control de la inferencia de tipos.
* Permiten semántica pura con efectos explícitos.

---

## PF y optimización del compilador

### Fusionado funcional (deforestación)

Técnica que elimina estructuras intermedias innecesarias en funciones compuestas (`map`, `filter`, `fold`), aumentando rendimiento sin perder pureza.

Ejemplo conceptual:

{% raw %}
```haskell
sum (map (+1) [1..n])  →  foldl' (\acc x -> acc + (x+1)) 0 [1..n]
```
{% endraw %}

### Evaluación mixta

Algunos compiladores funcionales modernos (como GHC) combinan **evaluación perezosa y estricta adaptativa**, decidiendo dinámicamente la estrategia de evaluación óptima.

---

## PF en ingeniería de software moderna

### Diseño funcional de arquitecturas

Principios de diseño aplicados a sistemas reales:

* **Inmutabilidad estructural.**
* **Separación de efectos.**
* **Composición funcional de capas.**
* **Transformaciones puras sobre modelos de dominio.**

Ejemplo: Arquitectura **Functional Hexagonal** (Domain-driven + PF):

{% raw %}
```text
Dominio puro → Adaptadores funcionales → Efectos controlados (IO)
```
{% endraw %}

### Testing funcional avanzado

* **Property-based testing (QuickCheck, Hypothesis).**
* **Model-based testing:** genera modelos funcionales del sistema para validar propiedades.
* **Shrinking:** reducción automática de casos fallidos al mínimo contraejemplo.

Ejemplo en Haskell:

{% raw %}
```haskell
prop_reverso :: [Int] -> Bool
prop_reverso xs = reverse (reverse xs) == xs
```
{% endraw %}

---

## PF y DevOps / Infraestructura

### Infraestructura inmutable y declarativa

Inspirada en PF: la infraestructura se **describe como funciones puras del estado deseado**.

* Ejemplo: Terraform, NixOS, Pulumi (en FP).
* Garantiza reproducibilidad, trazabilidad y rollback seguro.

{% raw %}
```nix
services.nginx.enable = true;
```
{% endraw %}

### Pipelines funcionales

CI/CD declarativo donde cada paso es una **función pura** transformando artefactos de software.
Ejemplo: GitHub Actions como flujo funcional.

---

## PF y bases de datos funcionales

### Consultas puras y composables

Modelos funcionales sobre bases de datos inmutables:

* Datomic y XTDB usan principios PF para mantener **historial inmutable de datos**.
* Las consultas son **expresiones puras** (Datalog, lógica funcional).

Ejemplo:

{% raw %}
```clojure
[:find ?e :where [?e :user/name "Alice"]]
```
{% endraw %}

### Transformaciones inmutables

Cada transacción genera un nuevo estado derivado sin modificar el anterior, facilitando auditoría y rollback funcional.

---

## PF aplicada a arquitectura de microservicios

### Diseño funcional de servicios

Cada microservicio actúa como una **función pura sobre su input**, con entradas y salidas bien tipadas:

{% raw %}
```text
Servicio: Input JSON → Transformación → Output JSON
```
{% endraw %}

* Efectos aislados (llamadas externas) manejados por contenedores monádicos o pipelines declarativos.
* Facilita **observabilidad funcional** y **reproceso determinista**.

### Event Sourcing funcional

Modelo donde los eventos son **inmutables y procesados funcionalmente**:

* Cada evento = entrada de una función.
* Estado = `fold` de todos los eventos.

{% raw %}
```haskell
foldEvents :: State -> [Event] -> State
```
{% endraw %}

---

## PF y seguridad formal

### Tipos dependientes para seguridad

Garantizan propiedades de seguridad en tiempo de compilación:

* No-null guarantees.
* Protocolos seguros como tipos.
* Autorización como función del tipo de usuario.

Ejemplo (Idris):

{% raw %}
```idris
login : (u : Usuario) -> {auto prf : PuedeLogin u} -> Sesion
```
{% endraw %}

### Políticas funcionales

Las reglas de seguridad se expresan como **funciones puras sobre el contexto**:

{% raw %}
```haskell
puedeAcceder :: Usuario -> Recurso -> Bool
```
{% endraw %}

---

## PF y inteligencia artificial simbólico-funcional

### Aprendizaje funcional declarativo

Integración de PF con IA simbólica y Lógica de primer orden:

* Representación funcional de reglas.
* Inferencia mediante funciones puras de transformación.
* Integración con ML mediante *functional embeddings*.

### Modelos explicables (XAI)

PF facilita la **explicabilidad funcional** de modelos al poder rastrear las transformaciones exactas de datos → resultados.

---

## PF en investigación y lenguajes emergentes

### Lenguajes modernos inspirados en PF

* **Futhark:** paralelismo funcional de alto rendimiento.
* **Elm:** UIs puras seguras en el navegador.
* **Idris 2:** tipos dependientes y totalidad.
* **Unison:** código distribuido inmutable identificado por hash.
* **Rescript / Reason:** PF tipada sobre ecosistema JS.

### Lenguajes experimentales

* **Links:** programación web end-to-end funcional.
* **Eff / Koka:** efectos algebraicos.
* **Luna / Enso:** visualización funcional.
* **Glow:** PF para contratos inteligentes.

---

## PF y sostenibilidad del software

### Software funcional verde

La PF contribuye a la **eficiencia energética y sostenibilidad**:

* Reducción de cálculos redundantes.
* Facilita optimización paralela y lazy evaluation.
* Promueve sistemas deterministas y reproducibles (menos gasto computacional).

---

## Glosario extendido

* **Efectos algebraicos:** representación formal de efectos sin pérdida de pureza.
* **Deforestación:** eliminación de estructuras intermedias en funciones compuestas.
* **Property-based testing:** validación mediante propiedades generales, no casos concretos.
* **Infraestructura declarativa:** definición inmutable del entorno como función.
* **Event Sourcing:** reconstrucción de estado mediante reducción funcional de eventos.
* **Functional Security:** control de acceso mediante funciones puras y tipos dependientes.
* **Functional Embedding:** representación funcional de modelos simbólicos.
* **Totalidad:** garantía de que toda función termina y cubre todos los casos posibles.
* **Functional Hash Identity:** identificación inmutable de código por hash (Unison).

---

## Referencias cruzadas finales

* Functional Reactive Programming
* Efectos algebraicos
* Property-Based Testing
* Infraestructura declarativa
* Functional Event Sourcing
* Functional Security
* Lenguajes funcionales modernos
* Sostenibilidad del software
* Functional Hybrid Paradigms

{% raw %}
```
```
{% endraw %}





