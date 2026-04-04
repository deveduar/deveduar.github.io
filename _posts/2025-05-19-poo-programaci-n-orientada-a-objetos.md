---
date: 2025-05-19 20:32
title: POO Programación Orientada a Objetos
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Computer Science
tags:
  - POO
  - arquitectura
  - CS
---
# POO Programación Orientada a Objetos


La **Programación Orientada a Objetos (POO)** es un paradigma que organiza el código en torno a *objetos*, entidades que combinan **datos (propiedades)** y **comportamientos (métodos)**. Su objetivo es mejorar la modularidad, reutilización y mantenibilidad del software.

---

## Fundamentos de la POO

La POO se basa en cuatro pilares esenciales:

1. **Encapsulación**  
	Consiste en agrupar datos y métodos relacionados dentro de una misma entidad (objeto), ocultando los detalles internos al exterior mediante modificadores de acceso (por ejemplo, `private`, `protected`, `public`).  
	Permite controlar la interacción y proteger la integridad de los datos.

	{% raw %}
```js
	class Usuario {
		#password;
		constructor(nombre, password) {
			this.nombre = nombre;
			this.#password = password;
		}
		validarPassword(pwd) {
			return this.#password === pwd;
		}
	}
	```
{% endraw %}

2. **Abstracción**  
	Reduce la complejidad del código mostrando solo lo necesario.  
	Se centra en lo *qué hace* un objeto, no en *cómo lo hace*.

	{% raw %}
```js
	class Envio {
		constructor(destinatario, paquete) {
			this.destinatario = destinatario;
			this.paquete = paquete;
		}
		procesar() {
			console.log(`Enviando paquete a ${this.destinatario}`);
		}
	}
	```
{% endraw %}

3. **Herencia**  
	Permite crear nuevas clases basadas en otras, heredando propiedades y métodos.  
	Favorece la reutilización del código y la extensión de comportamientos.

	{% raw %}
```js
	class Animal {
		constructor(nombre) {
			this.nombre = nombre;
		}
		hablar() {
			console.log(`${this.nombre} hace un sonido`);
		}
	}

	class Perro extends Animal {
		hablar() {
			console.log(`${this.nombre} ladra`);
		}
	}
	```
{% endraw %}

4. **Polimorfismo**  
	Facilita usar una misma interfaz o método con diferentes implementaciones.  
	El objeto decide su comportamiento en tiempo de ejecución.

	{% raw %}
```js
	const animales = [new Animal("Genérico"), new Perro("Rex")];
	animales.forEach(a => a.hablar());
	```
{% endraw %}

---

## POO en JavaScript

JavaScript implementa la POO mediante dos enfoques principales:

- 11-poo_prototipica  
	Usa prototipos como mecanismo base de herencia y delegación.  
	Los objetos pueden extender otros objetos directamente, sin necesidad de clases.

- 10-POO con clases  
	Introduce una sintaxis más clara con `class`, `constructor` y `extends`, facilitando la creación de jerarquías.  
	Internamente sigue siendo prototípico, pero más expresivo y legible.

- 01-POO intro y ES6  
	Explica cómo la introducción de ES6 formalizó el uso de clases, métodos estáticos y constructores, mejorando la estructuración del código.

---

## Mecanismos y aplicación práctica

1. **Composición sobre herencia**  
	Es preferible crear objetos que *contienen* otros objetos con funcionalidades específicas, en lugar de depender únicamente de jerarquías complejas.

	{% raw %}
```js
	function logger(obj) {
		obj.log = (msg) => console.log(`[${obj.nombre}] ${msg}`);
		return obj;
	}

	const usuario = logger({ nombre: "Eduardo" });
	usuario.log("Inició sesión");
	```
{% endraw %}

2. **Interfaces implícitas y contratos**  
	JavaScript no tiene interfaces nativas, pero se pueden definir contratos mediante documentación o patrones (por ejemplo, *duck typing*).

	{% raw %}
```js
	function ejecutar(objeto) {
		if (typeof objeto.ejecutar !== "function") {
			throw new Error("El objeto no cumple el contrato ejecutar()");
		}
		objeto.ejecutar();
	}
	```
{% endraw %}

3. **Encadenamiento de métodos (Fluent API)**  
	Permite construir interfaces expresivas retornando `this` en cada método.

	{% raw %}
```js
	class Consulta {
		constructor() {
			this.filtros = [];
		}
		filtrarPor(campo, valor) {
			this.filtros.push({ campo, valor });
			return this;
		}
		ejecutar() {
			console.log("Ejecutando consulta con filtros:", this.filtros);
		}
	}

	new Consulta().filtrarPor("nombre", "Eduardo").filtrarPor("activo", true).ejecutar();
	```
{% endraw %}

4. **Aplicaciones prácticas**
	- Modelado de entidades de negocio: usuarios, productos, pedidos.
	- Creación de sistemas modulares (plugins, componentes).
	- Desarrollo de juegos y simulaciones basadas en objetos.
	- APIs orientadas a objetos para SDKs o librerías.

---

## Referencias cruzadas

- 10-POO con clases: Sintaxis, ejemplos y patrones comunes.  
- 11-poo_prototipica: Delegación, prototipos y diferencias con clases.  
- 01-POO intro y ES6: Contexto histórico y evolución del modelo de objetos.  
- poo mecanimos y aplicacion: Casos reales de diseño y uso eficiente de la POO.

# POO avanzada y patrones aplicados


Esta nota amplía los conceptos fundamentales de la [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/) explorando temas avanzados, buenas prácticas, patrones de diseño y principios que fortalecen la arquitectura del software orientado a objetos.

---

## Principios SOLID

Los **principios SOLID** guían la escritura de código mantenible y escalable.  

1. **S — Single Responsibility Principle (SRP)**  
	Cada clase debe tener una única responsabilidad.  
	Evitar clases que mezclen lógica de negocio, almacenamiento y presentación.

2. **O — Open/Closed Principle (OCP)**  
	Las clases deben estar *abiertas a extensión* pero *cerradas a modificación*.  
	Se logra mediante la herencia o la inyección de dependencias.

3. **L — Liskov Substitution Principle (LSP)**  
	Las subclases deben poder reemplazar a sus clases base sin alterar el comportamiento esperado.

4. **I — Interface Segregation Principle (ISP)**  
	Es mejor tener interfaces pequeñas y específicas que una grande y generalista.

5. **D — Dependency Inversion Principle (DIP)**  
	El código de alto nivel no debe depender de implementaciones concretas, sino de abstracciones.

	{% raw %}
```js
	class Notificador {
		enviar(mensaje) {
			throw new Error("Método no implementado");
		}
	}

	class EmailNotificador extends Notificador {
		enviar(mensaje) {
			console.log("Enviando email:", mensaje);
		}
	}

	class Usuario {
		constructor(notificador) {
			this.notificador = notificador;
		}
		notificar(mensaje) {
			this.notificador.enviar(mensaje);
		}
	}

	const email = new EmailNotificador();
	const usuario = new Usuario(email);
	usuario.notificar("Bienvenido al sistema");
	```
{% endraw %}

---

## Patrones de diseño orientados a objetos

Los **patrones de diseño** son soluciones reutilizables a problemas comunes en el desarrollo orientado a objetos.

1. **Creacionales**
	- *Singleton*: garantiza una única instancia.  
	- *Factory Method*: delega la creación de objetos a subclases.  
	- *Builder*: facilita la creación de objetos complejos paso a paso.

	{% raw %}
```js
	class Configuracion {
		static instancia;
		constructor() {
			if (Configuracion.instancia) return Configuracion.instancia;
			this.parametros = {};
			Configuracion.instancia = this;
		}
		set(key, value) {
			this.parametros[key] = value;
		}
		get(key) {
			return this.parametros[key];
		}
	}

	const conf1 = new Configuracion();
	const conf2 = new Configuracion();
	console.log(conf1 === conf2); // true
	```
{% endraw %}

2. **Estructurales**
	- *Adapter*: adapta una interfaz existente a otra esperada.  
	- *Decorator*: añade funcionalidades sin modificar la clase original.  
	- *Facade*: simplifica el acceso a subsistemas complejos.  
	- *Proxy*: controla el acceso a otro objeto.

3. **De comportamiento**
	- *Observer*: notifica a múltiples objetos sobre un cambio.  
	- *Strategy*: selecciona un algoritmo en tiempo de ejecución.  
	- *Command*: encapsula una operación como objeto.  
	- *State*: cambia el comportamiento de un objeto según su estado interno.

	{% raw %}
```js
	class Observador {
		actualizar(mensaje) {
			console.log("Mensaje recibido:", mensaje);
		}
	}

	class Sujeto {
		constructor() {
			this.observadores = [];
		}
		suscribir(obs) {
			this.observadores.push(obs);
		}
		notificar(mensaje) {
			this.observadores.forEach(o => o.actualizar(mensaje));
		}
	}

	const s = new Sujeto();
	s.suscribir(new Observador());
	s.notificar("Nuevo evento");
	```
{% endraw %}

---

## Metaprogramación y POO dinámica en JavaScript

La **metaprogramación** permite modificar o extender el comportamiento de objetos y clases en tiempo de ejecución.

1. **Uso de `Proxy`**
	Permite interceptar operaciones sobre objetos (lectura, escritura, invocación, etc.).

	{% raw %}
```js
	const objeto = { nombre: "Eduardo" };
	const proxy = new Proxy(objeto, {
		get(target, prop) {
			console.log(`Accediendo a ${prop}`);
			return target[prop];
		}
	});

	console.log(proxy.nombre);
	```
{% endraw %}

2. **Reflexión (`Reflect`)**
	Permite manipular objetos de forma controlada, accediendo a propiedades y métodos internos del lenguaje.

	{% raw %}
```js
	const usuario = { nombre: "Ana" };
	Reflect.set(usuario, "rol", "admin");
	console.log(Reflect.get(usuario, "rol"));
	```
{% endraw %}

3. **Mixins**
	Combina comportamientos de múltiples fuentes sin herencia múltiple.

	{% raw %}
```js
	const Loggable = Base => class extends Base {
		log(msg) {
			console.log(`[LOG]: ${msg}`);
		}
	};

	class Servicio {}
	class ServicioLog extends Loggable(Servicio) {}

	const s1 = new ServicioLog();
	s1.log("Servicio iniciado");
	```
{% endraw %}

---

## Diseño y arquitectura orientada a objetos

1. **Agregación y composición**
	- **Agregación**: relación débil donde un objeto contiene referencias a otros (pero no los posee).  
	- **Composición**: relación fuerte donde el ciclo de vida de los objetos depende del contenedor.

2. **Delegación**
	Delegar responsabilidades a otros objetos mejora la cohesión y reduce el acoplamiento.

3. **Principio de sustitución de herencia por composición**
	Usar composición permite mayor flexibilidad y evita jerarquías profundas difíciles de mantener.

4. **Inyección de dependencias**
	Permite pasar los objetos requeridos desde el exterior, facilitando pruebas unitarias y modularidad.

---

## Ejemplo práctico: sistema modular de pagos

{% raw %}
```js
class MetodoPago {
	pagar(monto) {
		throw new Error("Debe implementarse en la subclase");
	}
}

class PagoTarjeta extends MetodoPago {
	pagar(monto) {
		console.log(`Pago de ${monto}€ con tarjeta`);
	}
}

class PagoPayPal extends MetodoPago {
	pagar(monto) {
		console.log(`Pago de ${monto}€ con PayPal`);
	}
}

class ProcesadorPagos {
	constructor(metodo) {
		this.metodo = metodo;
	}
	procesar(monto) {
		this.metodo.pagar(monto);
	}
}

const paypal = new PagoPayPal();
const procesador = new ProcesadorPagos(paypal);
procesador.procesar(100);
```
{% endraw %}`

Este ejemplo combina **polimorfismo**, **inyección de dependencias** y el **principio abierto/cerrado**, mostrando una POO aplicada y extensible.

---

## Referencias cruzadas

* [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/): fundamentos y sintaxis básica.
* poo mecanimos y aplicacion: mecanismos de encapsulación y herencia.
* 10-POO con clases: estructuras modernas basadas en `class`.
* 11-poo_prototipica: herencia basada en prototipos y funciones constructoras.
* 01-POO intro y ES6: evolución del paradigma orientado a objetos en ES6.

# POO aplicada: principios de diseño, pruebas y rendimiento


Esta nota amplía el enfoque práctico de la POO avanzada y patrones aplicados, abordando temas de **diseño orientado a objetos**, **testeo**, **optimización de rendimiento**, y **POO funcional** en JavaScript moderno.

---

## Diseño orientado a responsabilidades

Un diseño orientado a objetos eficaz surge cuando las clases y objetos reflejan claramente sus responsabilidades en el dominio.

1. **Diseño guiado por el dominio (DDD — Domain Driven Design)**  
	La estructura del código refleja el lenguaje del negocio.  
	- Las clases se basan en entidades del dominio: `Usuario`, `Pedido`, `Factura`.  
	- Se evita mezclar lógica de aplicación con lógica de infraestructura.  
	- Se promueve un **modelo rico**, donde los objetos contienen tanto datos como reglas.

2. **Análisis de responsabilidades (CRC Cards)**  
	El diseño inicial puede explorarse mediante tarjetas que describen:
	- **Clase**
	- **Responsabilidades**
	- **Colaboradores**

	Ejemplo:
	{% raw %}
```
	Clase: Pedido
	Responsabilidades:
	- Calcular total
	- Agregar productos
	Colaboradores:
	- Producto
	- Cliente
	```
{% endraw %}

3. **Modelado con objetos de valor (Value Objects)**  
	Representan conceptos inmutables y equivalentes por su valor, no por identidad.  
	Ejemplo: `Dinero`, `Email`, `Coordenada`.

	{% raw %}
```js
	class Dinero {
		constructor(cantidad, moneda) {
			Object.freeze(this);
			this.cantidad = cantidad;
			this.moneda = moneda;
		}
		esIgualA(otro) {
			return (
				this.cantidad === otro.cantidad &&
				this.moneda === otro.moneda
			);
		}
	}
	```
{% endraw %}

---

## Pruebas unitarias y POO

La POO facilita la **testabilidad** al aislar responsabilidades.

1. **Mocks y Stubs**
	Simulan dependencias externas para probar clases de forma independiente.

	{% raw %}
```js
	class EmailService {
		enviar() {
			return "email enviado";
		}
	}

	class Notificador {
		constructor(servicio) {
			this.servicio = servicio;
		}
		notificar() {
			return this.servicio.enviar();
		}
	}

	// Simulación (mock)
	const mockServicio = { enviar: () => "simulado" };
	const notificador = new Notificador(mockServicio);
	console.log(notificador.notificar()); // "simulado"
	```
{% endraw %}

2. **Inyección de dependencias para pruebas**
	Permite sustituir comportamientos sin modificar la clase.

3. **Testeo de herencia y polimorfismo**
	Cada subclase debe respetar las expectativas contractuales de su clase base.

---

## Rendimiento y optimización en POO

1. **Estructura de objetos eficiente**
	- Evita crear propiedades dinámicamente en instancias ya creadas.  
	- Define todas las propiedades en el constructor para optimizar el *hidden class* del motor JavaScript.

2. **Uso de `Object.create` para instancias ligeras**
	Cuando no se requieren clases completas, `Object.create` permite crear objetos con delegación directa.

	{% raw %}
```js
	const animal = { tipo: "genérico" };
	const perro = Object.create(animal);
	perro.tipo = "perro";
	```
{% endraw %}

3. **Evitar sobreuso de herencia**
	Las jerarquías profundas generan sobrecarga cognitiva y dificultan la optimización del motor de ejecución.

4. **Reutilización por composición**
	Favorece el reuso de comportamientos sin duplicar código ni sobrecargar relaciones jerárquicas.

---

## POO funcional

La **POO funcional** combina principios de orientación a objetos con programación funcional (FP).  
Busca objetos **inmutables**, métodos **puros**, y un flujo **predecible**.

1. **Objetos inmutables**
	Los estados no cambian, sino que se crean nuevas versiones del objeto.

	{% raw %}
```js
	const usuario = { nombre: "Ana", edad: 25 };
	const usuarioActualizado = { ...usuario, edad: 26 };
	```
{% endraw %}

2. **Métodos puros**
	Un método puro no modifica el estado del objeto ni depende de variables externas.

3. **Composición de comportamientos**
	Se pueden combinar funciones que operan sobre objetos, creando transformaciones encadenadas.

	{% raw %}
```js
	const aumentarEdad = (u) => ({ ...u, edad: u.edad + 1 });
	const cambiarNombre = (u, n) => ({ ...u, nombre: n });

	const procesarUsuario = (u) => cambiarNombre(aumentarEdad(u), "Carlos");
	```
{% endraw %}

4. **Objetos como flujos de datos**
	El objeto se convierte en una entidad procesada mediante funciones puras, facilitando la depuración y paralelización.

---

## Metodologías y patrones arquitectónicos

1. **Model-View-Controller (MVC)**  
	Divide el sistema en:
	- *Modelo*: lógica y datos.
	- *Vista*: representación visual.
	- *Controlador*: coordinación entre vista y modelo.

2. **Model-View-ViewModel (MVVM)**  
	Popular en frameworks como Vue y React.  
	El estado (modelo) y la vista se mantienen sincronizados automáticamente mediante *data binding*.

3. **Patrón Repositorio**
	Aísla la lógica de persistencia de la lógica de dominio.

	{% raw %}
```js
	class UsuarioRepositorio {
		constructor(db) {
			this.db = db;
		}
		obtenerPorId(id) {
			return this.db.find(u => u.id === id);
		}
	}
	```
{% endraw %}

4. **Entity-Component-System (ECS)**
	Usado en motores de videojuegos.  
	Los objetos se definen como combinaciones de componentes reutilizables y sistemas que los procesan.

---

## Reflexión sobre la evolución del paradigma

1. **De la POO clásica a la moderna**
	- La POO ya no es solo sobre clases y herencia.  
	- Se orienta a **modularidad, composición, interoperabilidad** y **abstracción funcional**.

2. **POO híbrida**
	El enfoque actual combina lo mejor de la POO, la FP y la arquitectura reactiva.

3. **Tendencias**
	- *Data-Oriented Design*: prioriza los datos sobre los objetos.  
	- *Component-driven design*: centrado en unidades funcionales reutilizables.  
	- *POO reactiva*: objetos que responden a flujos y eventos (ej. RxJS).

---

## Referencias cruzadas

- POO avanzada y patrones aplicados: principios SOLID, metaprogramación y ejemplos estructurales.  
- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/): base conceptual y fundamentos del paradigma.  
- poo mecanimos y aplicacion: ejemplos de encapsulación y aplicación práctica.  
- 10-POO con clases: uso de clases, herencia y métodos modernos en ES6.  
- 11-poo_prototipica: enfoque basado en prototipos y delegación.  
- 01-POO intro y ES6: contexto histórico y evolución del modelo de objetos en JavaScript.

# POO en contextos reales y diseño evolutivo


Esta nota extiende los principios de la POO aplicada: principios de diseño, pruebas y rendimiento hacia el **uso profesional en entornos reales**, abordando integración con otros paradigmas, patrones arquitectónicos modernos, y diseño evolutivo orientado al cambio continuo.

---

## POO en sistemas distribuidos y arquitecturas modernas

1. **POO en microservicios**  
	La POO sigue siendo útil en sistemas distribuidos cuando se aplica en el contexto correcto:  
	- Cada microservicio puede modelarse como un *agregado* de objetos del dominio.  
	- Se emplean **interfaces y contratos** para garantizar la comunicación entre servicios.  
	- Los objetos de dominio se serializan/deserializan en DTOs (*Data Transfer Objects*) para transportar datos entre procesos.

{% raw %}
```js
class PedidoDTO {
	constructor({ id, total, cliente }) {
		this.id = id;
		this.total = total;
		this.cliente = cliente;
	}
	toJSON() {
		return { id: this.id, total: this.total, cliente: this.cliente };
	}
}
```
{% endraw %}

2. **POO en APIs REST y GraphQL**  
	La POO ayuda a estructurar controladores, modelos y servicios.  
	Cada entidad del sistema puede representarse como un objeto con sus propias reglas de validación y formato.

3. **POO en arquitectura hexagonal (Ports & Adapters)**  
	Separa la lógica de negocio (núcleo) de las interfaces externas (bases de datos, APIs, UI).  
	Los **puertos** definen contratos, y los **adaptadores** implementan esos contratos.  
	Este enfoque aplica directamente el principio de inversión de dependencias (DIP).

---

## Persistencia y POO

1. **ORMs y mapeo objeto-relacional**  
	Los *Object Relational Mappers* (como Sequelize, TypeORM) conectan objetos con tablas.  
	- Facilitan la persistencia de objetos del dominio sin exponer SQL directamente.  
	- Requieren un diseño cuidadoso para no acoplar la lógica de dominio al modelo de datos.

2. **Patrón Active Record vs. Data Mapper**  
	- *Active Record*: los objetos gestionan su propia persistencia (`.save()`, `.delete()`).  
	- *Data Mapper*: separa los objetos de negocio del código que accede a la base de datos.  
	El segundo favorece la escalabilidad y el mantenimiento.

3. **Persistencia inmutable**  
	En sistemas concurrentes, los objetos inmutables reducen conflictos y simplifican sincronización entre hilos o procesos.

---

## Integración de POO con programación reactiva y asíncrona

1. **POO reactiva**
	Combina la orientación a objetos con flujos de datos y eventos.  
	Cada objeto puede ser una fuente de eventos o un observador.

{% raw %}
```js
import { Subject } from "rxjs";

class Sensor {
	constructor(nombre) {
		this.nombre = nombre;
		this.eventos = new Subject();
	}
	emitir(valor) {
		this.eventos.next({ nombre: this.nombre, valor });
	}
}

const temp = new Sensor("Temperatura");
temp.eventos.subscribe(d => console.log(`${d.nombre}: ${d.valor}°C`));
temp.emitir(22);
```
{% endraw %}

2. **Uso de objetos asíncronos**
	Los objetos pueden contener métodos `async`, y los patrones de diseño deben contemplar estados *pendientes* o *resueltos*.

	{% raw %}
```js
	class APICliente {
		async obtenerDatos() {
			const res = await fetch("https://api.ejemplo.com/data");
			return res.json();
		}
	}
	```
{% endraw %}

3. **Patrones reactivos con objetos**
	- *Observer* → suscripción a eventos.  
	- *Iterator / AsyncIterator* → lectura progresiva de datos.  
	- *Mediator* → coordinación entre objetos asíncronos.

---

## Diseño evolutivo y refactorización orientada a objetos

1. **Refactorización continua**  
	La POO promueve una evolución incremental del diseño:  
	- Extraer clases cuando una responsabilidad crece.  
	- Reemplazar herencia por composición cuando las dependencias se multiplican.  
	- Introducir patrones solo cuando hay repetición o acoplamiento evidente.

2. **Evolución del dominio**  
	Los modelos de objetos cambian junto al negocio.  
	- Se recomienda mantener **compatibilidad hacia atrás** en constructores y métodos.  
	- Usar *factories* para abstraer la creación y facilitar la migración de versiones.

	{% raw %}
```js
	class UsuarioFactory {
		static crearDesdeDatos(datos) {
			if (datos.version === 2) {
				return new UsuarioAvanzado(datos);
			}
			return new Usuario(datos);
		}
	}
	```
{% endraw %}

3. **Deuda técnica y diseño adaptable**
	El diseño orientado a objetos no debe ser rígido: las clases deben poder crecer o dividirse con facilidad sin romper el sistema.

---

## POO y concurrencia

1. **Objetos thread-safe**  
	Los objetos compartidos entre hilos o procesos deben proteger su estado mediante sincronización o inmutabilidad.

2. **Patrón Actor**
	- Cada actor es un objeto que procesa mensajes de forma aislada.  
	- No hay acceso directo al estado interno, solo comunicación asíncrona.  
	- Implementaciones como *Akka* o *RxJS* se basan en este modelo.

3. **Sincronización de estado**
	En sistemas distribuidos, los objetos pueden mantener consistencia eventual, aplicando versiones y eventos compensatorios.

---

## POO en entornos de frontend y frameworks modernos

1. **React y componentes como objetos**
	Aunque React se basa en funciones, los componentes de clase siguen siendo un ejemplo de POO aplicada al ciclo de vida y estado.

	{% raw %}
```jsx
	class Contador extends React.Component {
		state = { valor: 0 };
		incrementar = () => this.setState({ valor: this.state.valor + 1 });
		render() {
			return <button onClick={this.incrementar}>{this.state.valor}</button>;
		}
	}
	```
{% endraw %}

2. **Vue y composición orientada a objetos**
	Vue 3 permite organizar código con clases decoradas o patrones composables que encapsulan comportamientos similares a objetos.

3. **POO y Web Components**
	Los componentes personalizados (`Custom Elements`) son objetos extendidos del DOM, con métodos y propiedades encapsulados.

	{% raw %}
```js
	class MiBoton extends HTMLElement {
		connectedCallback() {
			this.innerHTML = "<button>Haz clic</button>";
		}
	}
	customElements.define("mi-boton", MiBoton);
	```
{% endraw %}

---

## POO en inteligencia artificial y simulaciones

1. **Modelado de agentes**
	La POO permite representar **agentes autónomos** con propiedades, objetivos y comportamientos.  
	Ejemplo: simulaciones de tráfico, ecosistemas, o sistemas multiagente.

2. **Encapsulación del estado en redes neuronales**
	Cada capa o modelo puede verse como un objeto que contiene pesos y métodos de entrenamiento (`forward`, `backward`).

3. **Integración con aprendizaje automático**
	Las clases pueden envolver modelos ML para mantener consistencia y reutilización del código, por ejemplo, en pipelines o procesamiento de datos.

---

## Referencias cruzadas

- POO aplicada: principios de diseño, pruebas y rendimiento: testeo, rendimiento y POO funcional.  
- POO avanzada y patrones aplicados: principios SOLID, metaprogramación, y patrones estructurales.  
- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/): fundamentos del paradigma orientado a objetos.  
- poo mecanimos y aplicacion: mecanismos y ejemplos concretos de uso.  
- 10-POO con clases y 11-poo_prototipica: diferencias sintácticas y conceptuales en JavaScript.  
- 01-POO intro y ES6: bases conceptuales y transición del modelo tradicional al moderno.

# POO extendida: interoperabilidad, diseño seguro y paradigmas complementarios


Esta nota complementa la serie de POO en contextos reales y diseño evolutivo abarcando temas avanzados de **interoperabilidad entre lenguajes**, **seguridad orientada a objetos**, **metadiseño**, y la relación entre la POO y otros paradigmas modernos como la programación funcional, reactiva y declarativa.

---

## Interoperabilidad y comunicación entre sistemas orientados a objetos

1. **Serialización y deserialización de objetos**
	Los objetos deben poder convertirse a formatos de intercambio (JSON, XML, BSON) para persistencia o transporte entre servicios.

	{% raw %}
```js
	class Producto {
		constructor(id, nombre, precio) {
			this.id = id;
			this.nombre = nombre;
			this.precio = precio;
		}
		toJSON() {
			return { id: this.id, nombre: this.nombre, precio: this.precio };
		}
		static fromJSON(json) {
			return new Producto(json.id, json.nombre, json.precio);
		}
	}
	```
{% endraw %}

2. **Interfaces entre lenguajes**
	- En sistemas poliglota (Java, Python, Node.js), se usa **IDL (Interface Definition Language)** o formatos como **Protocol Buffers** o **Avro**.  
	- Permiten mantener contratos entre objetos escritos en distintos lenguajes.

3. **RPC orientado a objetos**
	Patrones como *gRPC* usan clases y métodos remotos, conservando el enfoque orientado a objetos a través de la red.

---

## Seguridad en la programación orientada a objetos

1. **Encapsulación como barrera de seguridad**
	- Limita el acceso directo a los datos sensibles mediante propiedades privadas (`#` o `WeakMap`).  
	- Reduce la superficie de ataque interna del código.

2. **Objetos inmutables para integridad**
	Los objetos inmutables previenen modificaciones accidentales o maliciosas en el estado del sistema.

3. **Principio de mínimo privilegio**
	Cada objeto debe exponer solo lo necesario: métodos públicos mínimos, dependencias inyectadas, y sin estados globales.

4. **POO y sandboxing**
	En entornos como navegadores o motores embebidos, los objetos pueden restringirse mediante *realms* o *contextos seguros* (por ejemplo, en iframes o workers).

5. **Auditoría y trazabilidad**
	La POO permite integrar sistemas de registro (logging) y auditoría por objeto, con trazabilidad interna por cada acción o evento.

	{% raw %}
```js
	class Auditoria {
		static registrar(objeto, accion) {
			console.log(`[AUDITORÍA] ${objeto.constructor.name}: ${accion}`);
		}
	}
	```
{% endraw %}

---

## Metadiseño y reflexión orientada a objetos

1. **Anotaciones y metadatos**
	Los metadatos describen clases, métodos o propiedades. En JavaScript moderno, se pueden implementar usando *decoradores*.

	{% raw %}
```js
	function Log(target, key, descriptor) {
		const original = descriptor.value;
		descriptor.value = function (...args) {
			console.log(`Llamando a ${key} con`, args);
			return original.apply(this, args);
		};
		return descriptor;
	}

	class Servicio {
		@Log
		ejecutar(x) {
			return x * 2;
		}
	}
	```
{% endraw %}

2. **Reflexión estructural**
	Mediante `Reflect`, `Proxy` o `Object.getOwnPropertyDescriptors`, se pueden inspeccionar y modificar clases o instancias dinámicamente.

3. **Metaclases**
	Una metaclase define cómo se crean y comportan las clases mismas. Aunque JavaScript no tiene metaclases explícitas, se pueden simular usando funciones de fábrica o `Proxy` para interceptar la definición de clases.

4. **Auto-documentación**
	Los objetos pueden autodescribir su estructura y capacidades mediante introspección.

	{% raw %}
```js
	function describir(obj) {
		return Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
	}
	```
{% endraw %}

---

## Integración de la POO con paradigmas emergentes

1. **POO + Programación Declarativa**
	Los objetos se definen no tanto por *cómo actúan*, sino *qué representan*.  
	Ejemplo: en React, un componente describe un *estado deseado* del UI.

2. **POO + Programación Funcional**
	- Métodos puros dentro de objetos inmutables.  
	- Uso de funciones de orden superior como métodos (`map`, `reduce`, `filter`).  
	- Eliminación de efectos colaterales y dependencia del contexto global.

3. **POO + Programación Reactiva**
	Los objetos se convierten en flujos que emiten y responden a eventos.  
	Los métodos de observación (`subscribe`, `next`, `complete`) reemplazan al polling o callbacks tradicionales.

4. **POO + Arquitectura dirigida por eventos**
	Cada clase puede ser una unidad de emisión y reacción a eventos del sistema.  
	Facilita el desacoplamiento entre módulos.

---

## Adaptabilidad y evolución de modelos de objetos

1. **Reconfiguración dinámica**
	Los objetos pueden mutar su comportamiento en tiempo de ejecución al intercambiar sus métodos o delegados.  
	Útil en entornos experimentales, IA o sistemas modulares.

2. **Objetos híbridos**
	Combina propiedades de múltiples patrones:
	- Herencia parcial + composición funcional.  
	- Componentes inyectables y reemplazables.  
	- Modelos dinámicos (por ejemplo, plugins).

3. **Diseño auto-adaptativo**
	Los objetos pueden aprender o ajustar su comportamiento en función de la entrada o del entorno (por ejemplo, sistemas con IA embebida).

4. **POO y modelos de conocimiento**
	Se usa la POO para representar **ontologías** y **relaciones semánticas** (por ejemplo, en sistemas de razonamiento o gestión del conocimiento).

---

## Buenas prácticas y filosofía de diseño orientado a objetos

1. **Diseñar para el cambio**
	La flexibilidad importa más que la perfección inicial.  
	Un sistema OO debe evolucionar con el negocio y no limitarlo.

2. **Preferir la legibilidad sobre la abstracción**
	Abstraer en exceso puede volver el código ilegible. Se recomienda refactorizar solo cuando la repetición es clara.

3. **Equilibrio entre autonomía y colaboración**
	Cada objeto debe poder operar de manera independiente, pero colaborar con otros mediante interfaces bien definidas.

4. **Patrón de diseño emergente**
	No se fuerza un patrón desde el inicio; se deja que surja según las necesidades reales del dominio.

---

## Ejemplo: sistema extensible basado en plugins

{% raw %}
```js
class Plugin {
	constructor(nombre) {
		this.nombre = nombre;
	}
	ejecutar() {
		throw new Error("Debe implementarse en el plugin");
	}
}

class Sistema {
	constructor() {
		this.plugins = [];
	}
	registrar(plugin) {
		this.plugins.push(plugin);
	}
	ejecutarTodos() {
		this.plugins.forEach(p => p.ejecutar());
	}
}

class PluginSaludo extends Plugin {
	ejecutar() {
		console.log(`Hola desde ${this.nombre}`);
	}
}

const sistema = new Sistema();
sistema.registrar(new PluginSaludo("Plugin1"));
sistema.registrar(new PluginSaludo("Plugin2"));
sistema.ejecutarTodos();
```
{% endraw %}`

Este ejemplo muestra un diseño **modular**, **extensible**, y **orientado a objetos**, donde el sistema puede crecer sin modificarse directamente.

---

## Referencias cruzadas

* POO en contextos reales y diseño evolutivo: microservicios, asincronía, concurrencia y diseño modular.
* POO aplicada: principios de diseño, pruebas y rendimiento: POO funcional, rendimiento y pruebas unitarias.
* POO avanzada y patrones aplicados: principios SOLID y patrones creacionales/estructurales.
* [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/): fundamentos conceptuales.
* poo mecanimos y aplicacion: ejemplos de encapsulación y composición.
* 10-POO con clases y 11-poo_prototipica: herencia, delegación y clases modernas en ES6.
* 01-POO intro y ES6: transición del modelo clásico al moderno en JavaScript.

# POO en el ecosistema moderno y orientación arquitectónica


Esta nota completa la serie de [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/) abarcando su evolución en **arquitecturas modernas**, **lenguajes emergentes** y **nuevos contextos cognitivos e inteligentes**.  
El objetivo es entender cómo los principios clásicos de la orientación a objetos se adaptan al desarrollo contemporáneo, donde la modularidad, la escalabilidad y la expresividad del dominio son fundamentales.

---

## POO y Arquitectura de Software

La orientación a objetos sigue siendo la base de muchos estilos arquitectónicos actuales, especialmente cuando el diseño busca reflejar el **dominio del problema**.

### Domain-Driven Design (DDD)

DDD propone modelar el software a partir de los conceptos y reglas del dominio real, no de la tecnología.  
En este enfoque, los **objetos** no son simples estructuras de datos, sino **representaciones semánticas del negocio**.

1. **Entidades**
	- Tienen identidad propia (ID) y ciclo de vida definido.  
	- Su igualdad se basa en la identidad, no en sus atributos.  
	{% raw %}
```js
	class Pedido {
		constructor(id, cliente) {
			this.id = id;
			this.cliente = cliente;
			this.articulos = [];
		}
		agregarArticulo(articulo) {
			this.articulos.push(articulo);
		}
	}
	```
{% endraw %}

2. **Value Objects**
	- Son inmutables y definidos solo por sus atributos.  
	- Representan conceptos medibles o valores del dominio (ej. `Dinero`, `Distancia`).  
	{% raw %}
```js
	class Dinero {
		constructor(valor, moneda) {
			this.valor = valor;
			this.moneda = moneda;
			Object.freeze(this);
		}
		igualA(otro) {
			return this.valor === otro.valor && this.moneda === otro.moneda;
		}
	}
	```
{% endraw %}

3. **Agregados**
	- Agrupan entidades relacionadas que deben mantenerse consistentes.  
	- Un **Agregado Raíz** controla las operaciones sobre los demás objetos.  

4. **Repositorios**
	- Encapsulan la lógica de acceso a datos, devolviendo objetos del dominio.  
	- Permiten cambiar la infraestructura sin modificar la lógica de negocio.

5. **Servicios de Dominio**
	- Contienen lógica que no pertenece a ninguna entidad en particular pero afecta al dominio.  
	- Son funciones puras que operan sobre objetos.

---

### Arquitectura Limpia y Hexagonal

La **POO moderna** se orienta a la separación de responsabilidades mediante **capas independientes y testeables**.

1. **Capa de Dominio**
	- Contiene las clases del negocio: entidades, agregados, servicios.  
	- Totalmente independiente de frameworks o bases de datos.

2. **Capa de Aplicación**
	- Usa objetos para coordinar casos de uso (por ejemplo, `RegistrarPedido`).  
	- Puede incluir patrones como *Command*, *Use Case* o *Interactor*.

3. **Capa de Infraestructura**
	- Implementa adaptadores para persistencia, mensajería o APIs externas.  
	- Inyecta dependencias mediante interfaces definidas en el dominio.

> Este enfoque se apoya fuertemente en el principio **DIP (Dependency Inversion Principle)** de SOLID.

---

## POO en Lenguajes Emergentes

El paradigma OO sigue evolucionando en los lenguajes modernos, adaptándose a modelos más seguros, expresivos y funcionales.

### TypeScript

- Fusiona **POO clásica** con **sistemas de tipos estructurales**.  
- Usa *interfaces*, *decoradores* y *mixins* para composición flexible.  
- Soporta **inmutabilidad** y **tipado genérico**.

{% raw %}
```ts
interface Repositorio<T> {
	guardar(item: T): void;
	buscar(id: string): T | undefined;
}

class RepositorioMemoria<T extends { id: string }> implements Repositorio<T> {
	private items = new Map<string, T>();
	guardar(item: T) { this.items.set(item.id, item); }
	buscar(id: string) { return this.items.get(id); }
}
```
{% endraw %}`

### Kotlin

* POO combinada con **programación funcional** y **corutinas**.
* Usa *data classes* (objetos inmutables con comparación estructural).
* Implementa *sealed classes* para modelar jerarquías finitas y seguras.

### Swift

* Introduce el concepto de **protocol-oriented programming (POP)**.
* Los *protocols* reemplazan gran parte de la herencia clásica.
* La composición de comportamientos se logra implementando múltiples protocolos.

{% raw %}
```swift
protocol Movible {
	func mover(distancia: Int)
}

struct Coche: Movible {
	func mover(distancia: Int) {
		print("Avanzando \(distancia) metros")
	}
}
```
{% endraw %}

### Rust

* Evita herencia clásica, favoreciendo **composición y traits**.
* Los *traits* definen comportamiento compartido sin jerarquía rígida.
* Proporciona seguridad de memoria sin recolector de basura.

{% raw %}
```rust
trait Dibujable {
	fn dibujar(&self);
}

struct Circulo;
impl Dibujable for Circulo {
	fn dibujar(&self) {
		println!("Dibujando un círculo");
	}
}
```
{% endraw %}

---

## POO y Programación Cognitiva / Inteligente

En el contexto de IA, los objetos sirven como **unidades semánticas** que representan entidades cognitivas o simbólicas.

1. **Objetos como agentes inteligentes**

   * Cada objeto posee **estado, comportamiento y autonomía**.
   * Se comunican mediante mensajes, como en el *modelo de actores*.
   * Facilita la simulación de sistemas complejos (mercados, ecosistemas, tráfico).

2. **POO en ontologías y conocimiento semántico**

   * Los objetos pueden corresponder a **clases ontológicas** (conceptos del mundo real).
   * Ejemplo: `Persona`, `Vehículo`, `Contrato`, donde la jerarquía refleja relaciones semánticas.
   * Facilita la interoperabilidad con RDF, OWL o GraphQL.

3. **Integración con aprendizaje automático**

   * Los modelos ML se encapsulan en objetos que exponen interfaces de entrenamiento o predicción.
   * Permite desacoplar la lógica de IA del resto del sistema.

   {% raw %}
```python
   class Clasificador:
   	def __init__(self, modelo):
   		self.modelo = modelo
   	def entrenar(self, X, y):
   		self.modelo.fit(X, y)
   	def predecir(self, X):
   		return self.modelo.predict(X)
   ```
{% endraw %}

4. **Objetos simbólicos y aprendizaje híbrido**

   * Combinan estructuras simbólicas (reglas, clases) con aprendizaje estadístico.
   * Esta fusión se denomina **neuro-simbólica**, y la POO ofrece un marco natural para modelar ambos mundos.

---

## POO hacia el futuro

La evolución de la orientación a objetos muestra una tendencia clara:

* De **jerarquías rígidas** a **composición flexible**.
* De **herencia** a **interfaces, traits y mixins**.
* De **objetos pasivos** a **entidades reactivas e inteligentes**.
* De **modelo estático** a **modelos dinámicos y cognitivos**.

La POO no ha desaparecido: ha mutado para servir como la **capa conceptual unificadora** que permite conectar paradigmas, representar dominios complejos y mantener coherencia semántica en sistemas distribuidos e inteligentes.

---

## Referencias cruzadas

* POO aplicada: principios de diseño, pruebas y rendimiento
* POO extendida y diseño evolutivo
* poo mecanimos y aplicacion
* 10-POO con clases
* 11-poo_prototipica
* 01-POO intro y ES6
* POO avanzada y patrones aplicados

# Principios de diseño y buenas prácticas en POO


Esta nota aborda los **principios fundamentales de diseño y buenas prácticas** en la [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/), centrada en la creación de sistemas robustos, mantenibles y extensibles.  
Su objetivo es ofrecer una visión clara de cómo los principios teóricos (como SOLID o GRASP) se aplican en el diseño real de software orientado a objetos.

---

## Principios SOLID

Los principios **SOLID** definen una guía estructurada para lograr código flexible, escalable y fácil de mantener.

### 1. Single Responsibility Principle (SRP)
Cada clase debe tener **una única responsabilidad** o motivo para cambiar.

- Evita clases “Dios” que gestionan múltiples tareas.  
- Favorece la separación en componentes pequeños y cohesivos.

{% raw %}
```js
class Reporte {
	constructor(datos) { this.datos = datos; }
	generar() { /* lógica de creación */ }
}

class ReportePDF {
	exportar(reporte) { /* genera PDF */ }
}
```
{% endraw %}`

> Cada clase cumple una función clara: una genera datos, otra se encarga del formato.

---

### 2. Open/Closed Principle (OCP)

Las clases deben estar **abiertas a extensión pero cerradas a modificación**.

* Se logra mediante herencia, interfaces o composición.
* Permite agregar nuevas funcionalidades sin alterar el código existente.

{% raw %}
```js
class Envio {
	calcularCosto() { return 10; }
}

class EnvioExpress extends Envio {
	calcularCosto() { return 20; }
}
```
{% endraw %}

> Nuevos comportamientos se añaden extendiendo la clase base.

---

### 3. Liskov Substitution Principle (LSP)

Los objetos derivados deben poder sustituir a sus padres sin alterar el funcionamiento del sistema.

* Las subclases deben cumplir las expectativas del tipo base.
* Evita redefinir métodos que cambien el comportamiento esperado.

{% raw %}
```js
class Ave {
	volar() { console.log("Volando..."); }
}

class Pinguino extends Ave {
	volar() { throw new Error("Los pingüinos no vuelan"); }
}
```
{% endraw %}

> ❌ Viola LSP: el contrato del tipo base se rompe.
> ✅ Solución: redefinir la jerarquía o usar interfaces más específicas.

---

### 4. Interface Segregation Principle (ISP)

Una clase no debe depender de interfaces que no usa.

* Divide interfaces grandes en conjuntos más pequeños y específicos.
* Reduce la complejidad y el acoplamiento innecesario.

{% raw %}
```ts
interface Imprimible {
	imprimir(): void;
}

interface Escaneable {
	escanear(): void;
}

class Impresora implements Imprimible {
	imprimir() { console.log("Imprimiendo..."); }
}
```
{% endraw %}

---

### 5. Dependency Inversion Principle (DIP)

Los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de **abstracciones**.

* Usa interfaces o inyección de dependencias.
* Facilita el testeo y la flexibilidad de implementación.

{% raw %}
```js
class Notificador {
	constructor(servicio) { this.servicio = servicio; }
	enviar(mensaje) { this.servicio.enviar(mensaje); }
}

class EmailServicio {
	enviar(mensaje) { console.log(`Email: ${mensaje}`); }
}

const email = new Notificador(new EmailServicio());
email.enviar("Hola mundo");
```
{% endraw %}

---

## Principios GRASP

**GRASP (General Responsibility Assignment Software Patterns)** ofrece pautas para asignar responsabilidades dentro del diseño orientado a objetos.

1. **Information Expert**
   Asigna la responsabilidad al objeto que posee la información necesaria.

2. **Creator**
   Un objeto debe crear instancias de otros cuando:

   * Los contiene, los usa o tiene los datos necesarios.

3. **Controller**
   Define un objeto que coordina las solicitudes externas y las delega.

4. **Low Coupling**
   Favorece la independencia entre clases. Los cambios en una no deben afectar a otras.

5. **High Cohesion**
   Cada clase debe concentrarse en un conjunto de tareas estrechamente relacionadas.

6. **Polymorphism**
   Usa herencia o interfaces para seleccionar comportamientos dinámicamente.

7. **Pure Fabrication**
   Crea clases auxiliares cuando la responsabilidad no encaja en ninguna entidad del dominio (ej. *repositorios, adaptadores, servicios*).

8. **Indirection**
   Introduce un intermediario para reducir dependencias directas entre clases.

9. **Protected Variations**
   Aísla partes del sistema susceptibles al cambio detrás de interfaces estables.

---

## Buenas Prácticas de Diseño OO

### Cohesión y Acoplamiento

* **Alta cohesión:** cada clase debe tener un propósito claro.
* **Bajo acoplamiento:** evita dependencias directas entre componentes.
* **Interfaces claras:** la comunicación debe ser mínima y explícita.

{% raw %}
```js
class Motor {
	encender() { console.log("Motor encendido"); }
}

class Coche {
	constructor(motor) { this.motor = motor; }
	arrancar() { this.motor.encender(); }
}
```
{% endraw %}

---

### Composición sobre Herencia

* Prefiere **componer objetos** en lugar de extender clases cuando sea posible.
* La composición favorece la reutilización sin acoplar jerarquías rígidas.

{% raw %}
```js
class Volador {
	volar() { console.log("Volando"); }
}

class Ave {
	constructor() { this.volador = new Volador(); }
	mover() { this.volador.volar(); }
}
```
{% endraw %}

---

### Encapsulación y Abstracción

* Expón solo lo necesario (usa `private`, `protected` o convenciones).
* Separa el *qué* hace una clase del *cómo* lo hace.

{% raw %}
```js
class Cuenta {
	#saldo = 0;
	depositar(monto) { this.#saldo += monto; }
	obtenerSaldo() { return this.#saldo; }
}
```
{% endraw %}

---

### Inmutabilidad y Pureza

* Reduce efectos colaterales usando **objetos inmutables**.
* Aumenta la seguridad y previsibilidad en sistemas concurrentes.

{% raw %}
```js
class Punto {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		Object.freeze(this);
	}
}
```
{% endraw %}

---

### Principio de Diseño por Contrato

Define expectativas claras entre clases mediante **precondiciones**, **postcondiciones** e **invariantes**.

{% raw %}
```js
class Rectangulo {
	constructor(ancho, alto) {
		if (ancho <= 0 || alto <= 0)
			throw new Error("Valores inválidos");
		this.ancho = ancho;
		this.alto = alto;
	}
	area() {
		return this.ancho * this.alto;
	}
}
```
{% endraw %}

---

### Reutilización y Extensibilidad

* Usa **patrones de diseño** para extender comportamiento sin duplicar código.
* Aplica **interfaces y delegación** para aumentar flexibilidad.

---

## Anti-patrones comunes

1. **God Object** → Una clase concentra demasiadas responsabilidades.
2. **Spaghetti Code** → Lógica desorganizada y dependencias cíclicas.
3. **Refused Bequest** → Subclases que heredan métodos que no usan.
4. **Feature Envy** → Una clase accede constantemente a los datos de otra.
5. **Shotgun Surgery** → Un cambio obliga a modificar múltiples clases.

> La refactorización continua y el respeto a los principios SOLID ayudan a evitar estos errores.

---

## Pruebas y Diseño Orientado a Objetos

* Diseñar objetos pequeños y desacoplados facilita **unit testing**.
* Usa **mocking** e **interfaces** para simular dependencias.
* El diseño OO testable tiende a producir arquitecturas más limpias y mantenibles.

{% raw %}
```js
class Calculadora {
	sumar(a, b) { return a + b; }
}

test('suma dos números', () => {
	const calc = new Calculadora();
	expect(calc.sumar(2, 3)).toBe(5);
});
```
{% endraw %}

---

## Conclusión

Los principios de diseño OO no son reglas rígidas, sino **directrices evolutivas**.
Aplicados correctamente, permiten que el software crezca en complejidad sin perder claridad, garantizando **modularidad, adaptabilidad y calidad técnica**.

---

## Referencias cruzadas

* [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)
* POO avanzada y patrones aplicados
* POO aplicada: principios de diseño, pruebas y rendimiento
* poo mecanimos y aplicacion
* POO extendida y diseño evolutivo


# Glosario POO · Fundamentos y Conceptos Básicos


Este glosario reúne los **términos esenciales** de la [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/) (Programación Orientada a Objetos).  
Cada definición está optimizada para consulta rápida en Obsidian y enlazada con notas relacionadas cuando aplican.

---

## Conceptos Fundamentales

- **Paradigma de programación**  
	Modelo o enfoque conceptual para estructurar programas.  
	La POO es un paradigma basado en el modelado del mundo real mediante objetos.

- **Objeto**  
	Entidad que combina **estado**, **comportamiento** y **identidad**.  
	Es la unidad básica de la POO, creada a partir de una Clase.  
	Contiene atributos (datos) y métodos (funciones).  
	👉 Ver también: Instancia, Encapsulación.

- **Clase**  
	Plantilla o molde que define la estructura y el comportamiento de los objetos.  
	Especifica qué atributos y métodos tendrán sus instancias.  
	👉 Relacionado: Objeto, Herencia, Método.

- **Instancia**  
	Objeto concreto creado a partir de una clase.  
	Tiene valores propios para los atributos definidos en su clase.  
	Ejemplo: `const coche = new Coche();`

- **Atributo**  
	Propiedad o dato contenido dentro de un objeto.  
	Puede ser público, privado o protegido según el nivel de acceso.  
	👉 Ver Encapsulación.

- **Método**  
	Función asociada a una clase u objeto.  
	Define comportamientos o acciones que el objeto puede ejecutar.  
	👉 Ver Polimorfismo y Sobrecarga.

- **Estado**  
	Conjunto de valores actuales de los atributos de un objeto.  
	Cambia a través de métodos o eventos internos.

- **Comportamiento**  
	Conjunto de acciones que un objeto puede realizar.  
	Refleja la lógica que define su rol dentro del sistema.

- **Identidad**  
	Propiedad que permite distinguir un objeto de otro, aunque tengan los mismos valores.  
	En JavaScript, se compara por referencia (`===`).

---

## Mecanismos Clave de la POO

- **Encapsulación**  
	Mecanismo que oculta los detalles internos de un objeto y expone solo una interfaz pública.  
	Aumenta la seguridad, el control y la coherencia de los datos.

	{% raw %}
```js
	class Cuenta {
		#saldo = 0;
		depositar(monto) { this.#saldo += monto; }
		obtenerSaldo() { return this.#saldo; }
	}
	```
{% endraw %}

- **Abstracción**  
	Proceso de simplificar la realidad destacando los elementos esenciales y omitiendo los irrelevantes.  
	Permite modelar conceptos complejos mediante clases y métodos.

- **Herencia**  
	Mecanismo que permite a una clase derivada reutilizar atributos y métodos de una clase base.  
	Favorece la reutilización pero puede generar acoplamiento si se abusa de ella.  
	👉 Alternativa moderna: Composición sobre herencia.

- **Polimorfismo**  
	Capacidad de un método para comportarse de manera diferente según el tipo de objeto que lo invoque.  
	Puede lograrse mediante herencia, interfaces o composición.  
	Ejemplo: distintas clases con el mismo método `dibujar()`.

- **Sobrecarga**  
	Definir varios métodos con el mismo nombre pero diferentes parámetros.  
	No todos los lenguajes OO la admiten de forma nativa (Java sí, JavaScript no).

- **Sobrescritura (Override)**  
	Reemplazo de un método heredado en una subclase para modificar su comportamiento.

- **Composición**  
	Relación donde una clase contiene instancias de otras clases como parte de su implementación.  
	Favorece la flexibilidad frente a la herencia.

- **Asociación**  
	Relación entre clases que colaboran entre sí sin pertenencia jerárquica.  
	Puede ser uno a uno, uno a muchos, o muchos a muchos.

- **Agregación**  
	Tipo de asociación donde una clase contiene referencias a otras, sin poseerlas.  
	La vida de los objetos asociados es independiente.

- **Composición fuerte**  
	Una forma de agregación donde la clase contenedora gestiona completamente la vida de los objetos internos.  
	Cuando el contenedor se destruye, los componentes también.

---

## Elementos del Modelo de Objetos

- **Propiedad**  
	Variable asociada a un objeto, con control de acceso (getter/setter).

- **Campo**  
	Variable interna de una clase. A menudo es sinónimo de atributo, pero con menor visibilidad pública.

- **Método estático**  
	Método asociado a la clase, no a una instancia. Se invoca directamente sobre la clase.

- **Método de instancia**  
	Método que actúa sobre los datos de un objeto específico.

- **Constructor**  
	Método especial que se ejecuta al crear una instancia de clase. Inicializa sus valores.

	{% raw %}
```js
	class Usuario {
		constructor(nombre) {
			this.nombre = nombre;
		}
	}
	```
{% endraw %}

- **Destructor**  
	Método que se ejecuta cuando el objeto deja de usarse o se elimina (automático o controlado).

- **Interfaz**  
	Contrato que define los métodos que una clase debe implementar.  
	Usado para desacoplar código y favorecer la extensibilidad.  
	👉 Ver Principio de inversión de dependencias.

- **Clase abstracta**  
	Clase que no puede instanciarse directamente y sirve como base para otras.  
	Puede contener métodos abstractos (sin implementación).

- **Clase final / sellada**  
	Clase que no puede ser heredada. Protege la implementación de cambios.

---

## Relaciones y Comunicación

- **Mensaje**  
	Solicitud enviada de un objeto a otro para ejecutar un método.  
	Es la base de la interacción entre objetos.

- **Delegación**  
	Técnica donde un objeto transfiere la responsabilidad de una operación a otro.  
	Clave en [Patrones de diseño](/computer%20science/patrones-de-dise-o/) como *Strategy* o *State*.

- **Acoplamiento**  
	Nivel de dependencia entre clases.  
	El bajo acoplamiento mejora la flexibilidad y la mantenibilidad.

- **Cohesión**  
	Grado en que los métodos y atributos de una clase están relacionados entre sí.  
	La alta cohesión indica buena organización interna.

- **Contrato de interfaz**  
	Acuerdo formal que garantiza que las clases que lo implementen cumplan el mismo comportamiento.  
	👉 Ver Diseño por contrato.

---

## Tipos, Clases y Objetos

- **Tipo de objeto**  
	Define las operaciones y propiedades disponibles en una instancia.  
	Los tipos pueden inferirse o declararse explícitamente.

- **Tipo dinámico / estático**  
	En lenguajes dinámicos (JavaScript, Python), el tipo se determina en tiempo de ejecución.  
	En lenguajes estáticos (Java, C++), en tiempo de compilación.

- **Instanciación**  
	Proceso de crear un objeto a partir de una clase.  
	Ejemplo: `let a = new Animal();`

- **Reflexión**  
	Capacidad del programa de inspeccionar y modificar su propia estructura en tiempo de ejecución.

- **Metaclase**  
	Clase cuyos objetos son otras clases. Define cómo se comportan las clases mismas.

---

## POO Clásica vs Prototípica

- **POO clásica**  
	Basada en clases, jerarquías e instanciación.  
	Ejemplo: Java, C++, Python, Kotlin.

- **POO prototípica**  
	Los objetos heredan directamente de otros objetos sin necesidad de clases.  
	Ejemplo: JavaScript.  
	👉 Ver 11-poo_prototipica.

- **Prototype chain (Cadena de prototipos)**  
	Mecanismo de herencia en JavaScript donde los objetos se enlazan en una cadena de prototipos.  
	Permite reutilizar propiedades y métodos.

---

## Conceptos de Diseño Relacionados

- **Modularidad**  
	Organización del sistema en unidades independientes y reutilizables.

- **Reutilización de código**  
	Capacidad de aprovechar componentes existentes sin duplicarlos.

- **Extensibilidad**  
	Facilidad para agregar nuevas funcionalidades sin modificar las existentes.

- **Mantenibilidad**  
	Facilidad para corregir, adaptar o mejorar el código a lo largo del tiempo.

- **Inmutabilidad**  
	Propiedad de los objetos cuyos valores no pueden cambiar después de ser creados.  
	Fundamental para Programación funcional y sistemas concurrentes.

---

## Referencias cruzadas

- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)  
- 10-POO con clases  
- 11-poo_prototipica  
- 01-POO intro y ES6  
- poo mecanimos y aplicacion  
- Principios de diseño y buenas prácticas en POO  
- POO avanzada y patrones aplicados

# Glosario POO · Principios de Diseño y Buenas Prácticas


Esta sección del glosario aborda los **principios de diseño orientado a objetos**, junto con **buenas prácticas**, **metodologías** y **conceptos de calidad del software** que guían el uso eficaz de la [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/).

---

## Principios Fundamentales de Diseño

- **Principio de Responsabilidad Única (SRP)**  
	Cada clase debe tener **una sola razón para cambiar**.  
	Un componente debe encargarse de una única responsabilidad dentro del sistema.  
	👉 Favorece la Alta cohesión y reduce el Acoplamiento.

- **Principio Abierto/Cerrado (OCP)**  
	Las clases deben estar **abiertas a la extensión pero cerradas a la modificación**.  
	Permite agregar nuevas funcionalidades sin alterar el código existente.  
	Ejemplo: Uso de Polimorfismo o patrones como Strategy.

- **Principio de Sustitución de Liskov (LSP)**  
	Las subclases deben poder sustituir a sus clases base **sin alterar el comportamiento esperado**.  
	👉 Un principio esencial para la herencia segura.

- **Principio de Segregación de Interfaces (ISP)**  
	Es mejor tener **interfaces pequeñas y específicas** que una interfaz general que obligue a implementar métodos innecesarios.  
	👉 Relacionado: Interfaz, Diseño modular.

- **Principio de Inversión de Dependencias (DIP)**  
	Las clases deben depender de **abstracciones**, no de implementaciones concretas.  
	👉 Base de la Inyección de dependencias y la arquitectura desacoplada.

---

## Principios Complementarios y Derivados

- **DRY (Don't Repeat Yourself)**  
	Evitar la duplicación de lógica o estructuras.  
	Extraer comportamientos comunes a métodos o clases reutilizables.

- **KISS (Keep It Simple, Stupid)**  
	Diseñar soluciones simples, claras y directas.  
	La complejidad innecesaria reduce la mantenibilidad.

- **YAGNI (You Aren’t Gonna Need It)**  
	No implementar funcionalidades que **todavía no se necesitan**.  
	Previene el sobre-diseño.

- **SoC (Separation of Concerns)**  
	Cada módulo o componente debe abordar una única preocupación o función específica.  
	👉 Base de la Arquitectura en capas y los [Patrones de diseño](/computer%20science/patrones-de-dise-o/).

- **Law of Demeter (Principio del mínimo conocimiento)**  
	Un objeto debe conocer lo menos posible sobre otros objetos.  
	“Habla solo con tus amigos cercanos.”  
	👉 Reduce el acoplamiento estructural.

- **Tell, Don’t Ask (TDA)**  
	Los objetos deben **decirle** a otros qué hacer, no preguntarles por sus datos.  
	Promueve la encapsulación y el comportamiento autónomo.

- **Design by Contract (Diseño por contrato)**  
	Define **precondiciones**, **postcondiciones** e **invariantes** que las clases deben cumplir.  
	👉 Mejora la fiabilidad y el control del comportamiento.

---

## Buenas Prácticas de Modelado y Codificación

- **Alta cohesión**  
	Los métodos y atributos de una clase deben estar fuertemente relacionados con su propósito.  
	Una clase con alta cohesión es más predecible y fácil de mantener.

- **Bajo acoplamiento**  
	Las dependencias entre clases deben ser mínimas.  
	Permite cambiar o reutilizar componentes sin romper el sistema.

- **Principio de sustitución segura**  
	Al heredar, garantizar que la subclase respete las expectativas de la clase padre.  
	👉 Refuerzo práctico del LSP.

- **Favor composición sobre herencia**  
	Usar objetos dentro de objetos en lugar de jerarquías profundas.  
	Aumenta la flexibilidad, reduce los efectos colaterales y mejora el desacoplamiento.

	{% raw %}
```js
	class Motor {
		arrancar() { console.log("Motor en marcha"); }
	}

	class Coche {
		constructor() {
			this.motor = new Motor();
		}
		encender() { this.motor.arrancar(); }
	}
	```
{% endraw %}

- **Encapsular lo que varía**  
	Identificar las partes cambiantes del sistema y aislarlas.  
	Base del patrón Strategy.

- **Evitar la herencia múltiple**  
	Puede complicar las dependencias y generar conflictos.  
	Alternativa: Mixins o Composición.

- **Nombrado semántico**  
	Usar nombres claros que expresen intención (no solo estructura).  
	Ejemplo: `procesarPago()` > `func1()`.

- **Clases pequeñas y enfocadas**  
	Una clase debe hacer una cosa, y hacerla bien.  
	👉 Refuerza el SRP y facilita las pruebas unitarias.

---

## Diseño Orientado a Interfaces

- **Programar contra interfaces, no implementaciones**  
	Usar abstracciones en lugar de clases concretas.  
	Ejemplo en JavaScript:
	{% raw %}
```js
	class BaseDeDatos {
		conectar() {}
	}

	class ServicioUsuarios {
		constructor(db) { this.db = db; }
	}
	```
{% endraw %}

- **Inyección de dependencias**  
	Patrón que permite pasar las dependencias desde el exterior en lugar de crearlas internamente.  
	Fomenta el DIP y las pruebas más sencillas.

- **Interfaces contractuales**  
	Establecen expectativas claras sobre los métodos que deben implementarse.  
	Favorece la extensibilidad y la sustitución polimórfica.

---

## Calidad, Mantenibilidad y Refactorización

- **Refactorización**  
	Proceso de mejorar el diseño interno del código sin cambiar su comportamiento externo.  
	Objetivo: claridad, simplicidad, flexibilidad.

- **Code Smells**  
	Indicadores de posibles problemas de diseño o estructura.  
	Ejemplo: clases “Dios”, métodos largos, duplicación de lógica.

- **Anti-patrones**  
	Prácticas comunes que parecen útiles pero generan rigidez o deuda técnica.  
	👉 Ejemplo: herencia profunda, abuso de `instanceof`, dependencias circulares.

- **Pruebas unitarias orientadas a objetos**  
	Permiten validar el comportamiento de las clases de forma aislada.  
	Relacionadas con TDD (Test Driven Development).

- **Diseño evolutivo**  
	El código se mejora y adapta gradualmente, guiado por pruebas y refactorización.

- **SOLID**  
	Conjunto de los cinco principios de diseño más influyentes en la POO:  
	SRP, OCP, LSP, ISP, DIP.  
	👉 Base de la arquitectura orientada a objetos moderna.

---

## Enfoques de Diseño

- **Top-Down vs Bottom-Up**  
	Top-Down: partir de una visión general del sistema y descender a los detalles.  
	Bottom-Up: construir desde componentes básicos hacia estructuras complejas.

- **Domain-Driven Design (DDD)**  
	Diseño guiado por el dominio del problema.  
	Usa objetos que reflejan conceptos reales del negocio.  
	👉 Integra principios de [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/) y Arquitectura hexagonal.

- **Modelado UML (Unified Modeling Language)**  
	Lenguaje visual para representar clases, relaciones y comportamientos del sistema.  
	Uso común: diagramas de clases, secuencia y colaboración.

---

## Evaluación de Diseño

- **Reutilización**  
	Mide la capacidad de un componente para ser usado en diferentes contextos sin modificación.

- **Extensibilidad**  
	Facilidad con la que el sistema puede ser ampliado sin afectar su estructura base.

- **Mantenibilidad**  
	Facilidad para entender, modificar y corregir el código existente.

- **Robustez**  
	Capacidad de resistir errores o entradas inesperadas.

- **Escalabilidad**  
	Capacidad del sistema para crecer en complejidad o carga sin perder eficiencia.

---

## Referencias cruzadas

- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)  
- Glosario POO · Fundamentos y Conceptos Básicos  
- Patrones de diseño y arquitectura orientada a objetos  
- Principio SOLID  
- Diseño modular  
- Composición sobre herencia  
- Inyección de dependencias  
- Domain Driven Design

# Glosario POO · Patrones de Diseño y Arquitectura Orientada a Objetos


Esta sección del glosario recoge los **principales patrones de diseño** en el contexto de la [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/), así como los enfoques arquitectónicos que los sustentan.  
Se agrupan según las categorías clásicas de la GoF (Gang of Four): **creacionales**, **estructurales** y **de comportamiento**, junto con patrones arquitectónicos modernos.

---

## Patrones Creacionales

- **Patrón Singleton**  
	Garantiza que solo exista una instancia de una clase y proporciona un punto global de acceso.  
	👉 Útil para controladores de configuración, logs o recursos compartidos.  
	{% raw %}
```js
	class Config {
		static instancia;
		constructor() {
			if (Config.instancia) return Config.instancia;
			Config.instancia = this;
		}
	}
	```
{% endraw %}

- **Factory Method (Método fábrica)**  
	Define una interfaz para crear objetos, permitiendo que las subclases decidan qué clase instanciar.  
	Desacopla el código cliente de la creación concreta.  
	👉 Ver también Abstract Factory.

- **Abstract Factory (Fábrica abstracta)**  
	Proporciona una interfaz para crear **familias de objetos relacionados** sin especificar sus clases concretas.  
	👉 Útil para entornos con múltiples configuraciones o plataformas.

- **Builder (Constructor)**  
	Separa la construcción de un objeto complejo de su representación final.  
	Permite crear diferentes configuraciones del mismo tipo de objeto.

- **Prototype (Prototipo)**  
	Permite crear nuevos objetos copiando instancias existentes.  
	👉 Base del modelo 11-poo_prototipica en JavaScript.

---

## Patrones Estructurales

- **Adapter (Adaptador)**  
	Convierte la interfaz de una clase en otra que el cliente espera.  
	👉 Facilita la compatibilidad entre componentes incompatibles.  
	{% raw %}
```js
	class Adaptador {
		constructor(obj) { this.obj = obj; }
		request() { return this.obj.operacionEspecifica(); }
	}
	```
{% endraw %}

- **Bridge (Puente)**  
	Desacopla una abstracción de su implementación, permitiendo que ambas evolucionen por separado.  
	👉 Útil para interfaces multiplataforma o capas de abstracción.

- **Composite (Composición jerárquica)**  
	Permite tratar objetos individuales y compuestos de forma uniforme.  
	Ejemplo: árbol de componentes UI o estructura de archivos.  
	👉 Relacionado con Recursividad y Polimorfismo.

- **Decorator (Decorador)**  
	Añade responsabilidades adicionales a un objeto **dinámicamente**, sin modificar su clase.  
	👉 Excelente para extender comportamiento sin herencia.  
	{% raw %}
```js
	class Notificador {
		enviar(mensaje) { console.log("Enviando:", mensaje); }
	}
	class NotificadorEmail {
		constructor(base) { this.base = base; }
		enviar(mensaje) {
			this.base.enviar(mensaje);
			console.log("Enviado por Email:", mensaje);
		}
	}
	```
{% endraw %}

- **Facade (Fachada)**  
	Proporciona una interfaz simplificada a un subsistema complejo.  
	👉 Ideal para ocultar la complejidad de bibliotecas o módulos grandes.

- **Flyweight (Peso ligero)**  
	Minimiza el uso de memoria compartiendo objetos similares.  
	👉 Útil en sistemas con gran cantidad de objetos repetitivos (gráficos, juegos, texto).

- **Proxy (Apoderado)**  
	Proporciona un sustituto o intermediario para controlar el acceso a un objeto.  
	Usos comunes: control remoto, cache, lazy loading o validación.

---

## Patrones de Comportamiento

- **Strategy (Estrategia)**  
	Define una familia de algoritmos intercambiables que se pueden seleccionar dinámicamente.  
	👉 Basado en el principio “Encapsular lo que varía”.

	{% raw %}
```js
	class EstrategiaPagoTarjeta { pagar() { console.log("Pago con tarjeta"); } }
	class EstrategiaPagoPaypal { pagar() { console.log("Pago con PayPal"); } }
	class ContextoPago {
		constructor(estrategia) { this.estrategia = estrategia; }
		ejecutarPago() { this.estrategia.pagar(); }
	}
	```
{% endraw %}

- **Observer (Observador / Publicador-Suscriptor)**  
	Define una dependencia uno-a-muchos entre objetos para que, cuando uno cambie de estado, todos los demás sean notificados.  
	👉 Base de los sistemas reactivos y la programación de eventos.

- **Command (Comando)**  
	Encapsula una solicitud como un objeto, permitiendo deshacer, almacenar o registrar acciones.

- **State (Estado)**  
	Permite que un objeto cambie su comportamiento cuando cambia su estado interno.  
	👉 Similar al Strategy, pero el cambio lo controla el propio objeto.

- **Iterator (Iterador)**  
	Proporciona una forma de recorrer los elementos de una colección sin exponer su estructura interna.

- **Mediator (Mediador)**  
	Coordina la comunicación entre objetos sin que se refieran directamente entre sí.  
	👉 Reduce el acoplamiento en sistemas grandes.

- **Chain of Responsibility (Cadena de responsabilidad)**  
	Pasa una solicitud por una cadena de manejadores hasta que uno la procesa.  
	👉 Muy usado en validación o middleware.

- **Memento (Recuerdo)**  
	Guarda el estado interno de un objeto para restaurarlo después sin violar la encapsulación.

- **Template Method (Método plantilla)**  
	Define el esqueleto de un algoritmo en una clase base, delegando pasos específicos a subclases.

- **Visitor (Visitante)**  
	Permite definir nuevas operaciones sobre una estructura de objetos sin modificar sus clases.

- **Interpreter (Intérprete)**  
	Define una gramática y un intérprete para evaluar expresiones en ese lenguaje.  
	👉 Base conceptual de los lenguajes embebidos o DSLs.

---

## Patrones Arquitectónicos Orientados a Objetos

- **MVC (Model-View-Controller)**  
	Separa la lógica de negocio (Modelo), la presentación (Vista) y el control de flujo (Controlador).  
	👉 Patrón fundamental en Frameworks web como React, Angular o Laravel.

- **MVVM (Model-View-ViewModel)**  
	Extensión de MVC centrada en la vinculación bidireccional de datos (binding).  
	Usado en frameworks modernos como Vue.js.

- **MVP (Model-View-Presenter)**  
	Variante de MVC donde el presentador media entre vista y modelo.  
	Facilita pruebas y desacoplamiento.

- **Arquitectura en capas (Layered Architecture)**  
	Divide el sistema en niveles (presentación, dominio, persistencia).  
	👉 Fomenta la Separación de responsabilidades y el DIP.

- **Arquitectura Hexagonal (Ports and Adapters)**  
	Propone un núcleo de negocio independiente de los detalles técnicos.  
	Los puertos definen interfaces, y los adaptadores las implementan.  
	👉 Base del Domain Driven Design (DDD).

- **Clean Architecture (Arquitectura limpia)**  
	Organiza el sistema en anillos concéntricos: entidades → casos de uso → interfaces → frameworks.  
	👉 Promueve independencia de frameworks y testabilidad.

- **Microkernel Architecture**  
	Crea un núcleo estable y extensiones plugin para funcionalidad adicional.  
	Usado en sistemas modulares o con alta personalización.

- **Event-Driven Architecture (EDA)**  
	Arquitectura centrada en eventos. Los componentes reaccionan a cambios en lugar de llamar directamente.  
	👉 Inspirada en el Observer y la programación reactiva.

---

## Patrones Transversales y de Infraestructura

- **Dependency Injection (Inyección de dependencias)**  
	Delegar la creación de dependencias a un contenedor o framework.  
	👉 Implementa el DIP y facilita el testing.

- **Service Locator**  
	Alternativa al DI, donde las dependencias se obtienen de un registro central.  
	Considerado un anti-patrón si se abusa.

- **Repository Pattern**  
	Encapsula la lógica de acceso a datos, proporcionando una interfaz abstracta entre dominio y persistencia.

- **Unit of Work**  
	Mantiene un registro de cambios en un conjunto de objetos durante una transacción, para ejecutarlos de manera coordinada.

- **Active Record**  
	Cada objeto del modelo representa una fila de base de datos y sabe cómo persistirse.  
	👉 Muy usado en frameworks ORM como Rails o Laravel.

- **Data Mapper**  
	Separa completamente los objetos de negocio de la lógica de persistencia.  
	👉 Patrón más limpio pero más complejo que Active Record.

---

## Principios Asociados a los Patrones

- **Reutilización estructurada**  
	Los patrones permiten reutilizar ideas probadas, no solo código.  
	👉 Refuerza la mantenibilidad y el aprendizaje colectivo.

- **Abstracción de responsabilidad**  
	Cada patrón define un rol o responsabilidad clara, reduciendo la ambigüedad del diseño.

- **Desacoplamiento progresivo**  
	Los patrones fomentan independencia entre módulos y facilitan la evolución del sistema.

- **Evolución arquitectónica**  
	Los patrones pueden combinarse o adaptarse según las necesidades:  
	`MVC + Repository + Dependency Injection` es un ejemplo clásico.

---

## Referencias cruzadas

- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)  
- Glosario POO · Fundamentos y Conceptos Básicos  
- Glosario POO · Principios de Diseño y Buenas Prácticas  
- Patrones GoF  
- Arquitectura limpia  
- Domain Driven Design  
- Inyección de dependencias  
- Composición sobre herencia  
- Principios SOLID  
- poo mecanimos y aplicacion

# Glosario POO · Paradigmas Relacionados y Extensiones Modernas


Esta sección del glosario profundiza en los **paradigmas híbridos, extensiones modernas** y enfoques derivados de la [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/).  
Incluye la integración con la Programación funcional, la Programación reactiva, la Metaprogramación y las tendencias orientadas a datos, componentes y eventos.

---

## Evolución del Paradigma Orientado a Objetos

- **POO clásica**  
	Basada en clases, herencia, encapsulación y polimorfismo.  
	👉 Fundamenta lenguajes como Java, C++, C#, Python.

- **POO prototípica**  
	No utiliza clases, sino que los objetos heredan directamente de otros objetos.  
	👉 Modelo central de JavaScript.  
	Ver 11-poo_prototipica.

- **POO dinámica**  
	Los tipos, atributos y métodos pueden modificarse en tiempo de ejecución.  
	👉 Permite flexibilidad, pero puede reducir la seguridad de tipos.

- **POO funcional**  
	Integra conceptos de la Programación funcional dentro de estructuras orientadas a objetos.  
	👉 Favorece la inmutabilidad, las funciones puras y la composición.

- **POO reactiva**  
	Centrada en flujos de datos y eventos como entidades observables.  
	👉 Usa patrones como Observer o librerías como RxJS.

---

## Paradigmas Híbridos y Complementarios

- **Programación funcional**  
	Paradigma basado en funciones puras, sin estado compartido ni efectos secundarios.  
	👉 Compatible con la POO mediante Composición de funciones y Inmutabilidad.

- **Programación declarativa**  
	Describe *qué* debe hacerse en lugar de *cómo*.  
	👉 Influye en frameworks UI (React) y arquitecturas reactivas.

- **Programación imperativa**  
	Describe paso a paso las operaciones a ejecutar.  
	👉 Contrasta con la declarativa; POO combina ambos enfoques.

- **Programación basada en componentes (CBP)**  
	Organiza el software en componentes reutilizables e independientes.  
	👉 Evolución moderna del enfoque orientado a objetos, clave en sistemas UI y microservicios.

- **Programación orientada a aspectos (AOP)**  
	Separa las preocupaciones transversales (logs, seguridad, métricas) del código principal.  
	👉 Implementada mediante interceptores o decoradores.

- **Programación orientada a eventos (EOP)**  
	Los objetos reaccionan a eventos externos o internos.  
	👉 Base de interfaces gráficas, sistemas distribuidos y motores de juego.

- **Programación orientada a datos (DOP)**  
	El diseño se centra en los datos y su flujo, no en el comportamiento.  
	👉 Usado en motores de videojuegos y sistemas de alto rendimiento.

---

## Extensiones Avanzadas del Modelo OO

- **Metaprogramación**  
	Capacidad de escribir código que genera o modifica código.  
	👉 En JavaScript: uso de `Proxy`, `Reflect`, `eval` o decoradores.  
	{% raw %}
```js
	const proxy = new Proxy({}, {
		get(target, prop) { console.log(`Acceso a ${prop}`); return target[prop]; }
	});
	```
{% endraw %}

- **Reflexión (Reflection)**  
	Permite inspeccionar y manipular la estructura del programa en tiempo de ejecución.  
	👉 Base de la metaprogramación introspectiva.

- **Introspección**  
	Capacidad de un objeto para conocer sus propiedades, tipo o métodos disponibles.  
	Ejemplo: `Object.keys(obj)` en JavaScript o `dir(obj)` en Python.

- **Generics (Plantillas o genéricos)**  
	Permiten definir clases o métodos que trabajan con tipos desconocidos hasta el momento de uso.  
	👉 Mejora la reutilización y la seguridad de tipos.  
	{% raw %}
```ts
	function identidad<T>(valor: T): T { return valor; }
	```
{% endraw %}

- **Duck Typing (Tipado por comportamiento)**  
	Si un objeto “camina como un pato y suena como un pato”, se trata como un pato.  
	👉 Propio de lenguajes dinámicos como Python o JavaScript.

- **Mixins**  
	Mecanismo para combinar comportamientos de múltiples clases sin herencia múltiple.  
	👉 Permite modularidad y reutilización flexible.

	{% raw %}
```js
	const Volador = Base => class extends Base {
		volar() { console.log("Volando..."); }
	};
	class Ave {}
	class Gaviota extends Volador(Ave) {}
	```
{% endraw %}

- **Traits**  
	Similares a los mixins, pero con mayor control sobre conflictos de métodos.  
	👉 Implementados en lenguajes como PHP, Scala o Rust.

---

## Conceptos Relacionados con el Diseño Moderno

- **Composición funcional**  
	Unir funciones pequeñas para crear comportamientos complejos.  
	👉 Refuerza el principio de modularidad y reemplaza jerarquías de herencia.

- **Inmutabilidad en POO**  
	Objetos que no pueden cambiar tras ser creados.  
	👉 Previene errores de estado y facilita la concurrencia.

- **Flujos de datos reactivos**  
	Los objetos se modelan como flujos continuos de eventos o valores.  
	👉 Usado en arquitecturas reactivas (RxJS, ReactiveX).

- **Programación declarativa orientada a objetos**  
	Combina objetos y expresiones declarativas para describir comportamientos sin detallar pasos.  
	👉 Ejemplo: React, donde los componentes son objetos que declaran su UI.

- **POO asíncrona**  
	Integra conceptos de concurrencia, promesas y tareas en la estructura orientada a objetos.  
	👉 Patrón esencial en aplicaciones web modernas.

	{% raw %}
```js
	class Usuario {
		async cargarDatos() {
			this.datos = await fetch("/api/usuario").then(r => r.json());
		}
	}
	```
{% endraw %}

---

## Lenguajes y Ecosistemas Modernos Híbridos

- **JavaScript / TypeScript**  
	Híbrido entre POO prototípica y funcional.  
	Permite clases, herencia, mixins y programación reactiva.

- **Python**  
	POO dinámica, con introspección, metaclases y decoradores.  
	Soporta múltiples paradigmas de forma fluida.

- **Kotlin**  
	Sintaxis moderna, POO + funcional + nulos controlados.  
	👉 Fuerte enfoque en seguridad y legibilidad.

- **Swift**  
	POO con énfasis en inmutabilidad y funciones puras.  
	👉 Integración nativa de protocolos (interfaces avanzadas).

- **Rust**  
	No es POO pura, pero incluye traits y ownership, combinando eficiencia y seguridad.  
	👉 Influye en el diseño orientado a datos.

- **C#**  
	Incorpora LINQ, delegados, eventos y POO clásica.  
	👉 Soporta [AOP Programación Orientada a Aspectos](/computer%20science/aop-programaci-n-orientada-a-aspectos/) y paradigmas reactivos.

---

## Convergencias de Paradigmas

- **Multi-paradigma**  
	Los lenguajes modernos mezclan paradigmas (POO, funcional, reactivo, declarativo).  
	👉 Ejemplo: TypeScript combina clases con funciones puras.

- **POO declarativa-reactiva**  
	Modelo donde los objetos son fuentes de datos reactivos declarados con funciones puras.  
	👉 Aplicado en React y Vue.

- **Arquitectura híbrida OO-funcional**  
	Combina objetos para modelar entidades y funciones puras para procesar datos.  
	👉 Favorece escalabilidad y testabilidad.

- **Orientación moderna a la composición**  
	Reemplaza herencia profunda por ensamblaje de comportamientos y funciones reutilizables.  
	👉 Base de la programación modular moderna.

---

## Referencias cruzadas

- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)  
- Glosario POO · Fundamentos y Conceptos Básicos  
- Glosario POO · Principios de Diseño y Buenas Prácticas  
- Glosario POO · Patrones de Diseño y Arquitectura Orientada a Objetos  
- 10-POO con clases  
- 11-poo_prototipica  
- 01-POO intro y ES6  
- Programación funcional  
- Programación reactiva  
- Composición sobre herencia  
- Metaprogramación  
- Ecosistema y orientación moderna de POO

# Glosario POO · Aplicaciones Prácticas y Ejemplos


Esta sección recopila los **principales contextos de aplicación de la [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)**, mostrando cómo sus conceptos, principios y patrones se materializan en sistemas reales, frameworks, arquitecturas y entornos de desarrollo.

---

## Modelado de Objetos y Dominios

- **Modelado de dominio**  
	Proceso de representar entidades, relaciones y comportamientos de un sistema mediante clases y objetos.  
	👉 Base de la arquitectura DDD (Domain Driven Design).

- **Entidades (Entities)**  
	Objetos con identidad propia y ciclo de vida definido.  
	👉 Persisten a lo largo del tiempo, incluso si cambian sus atributos.

- **Value Objects (VO)**  
	Objetos que representan conceptos sin identidad (por ejemplo, una fecha o coordenada).  
	👉 Comparables por valor, inmutables.

- **Agregados (Aggregates)**  
	Conjuntos de objetos que se gestionan como una unidad lógica.  
	👉 Simplifican el manejo de relaciones complejas.

- **Servicios de dominio**  
	Encapsulan lógica que no pertenece a una sola entidad u objeto.  
	👉 Mantienen la cohesión del modelo OO.

- **Repositorios**  
	Abstracciones para gestionar el acceso a datos.  
	👉 Aíslan la persistencia del modelo de dominio.

---

## Aplicación en Arquitectura de Software

- **Arquitectura orientada a objetos**  
	Estructura basada en la interacción entre objetos que colaboran mediante Mensajes.  
	👉 Promueve modularidad, cohesión y extensibilidad.

- **Arquitectura en capas (Layered Architecture)**  
	Organiza el código en capas: presentación, negocio, persistencia.  
	👉 Basada en responsabilidades OO separadas.

- **Arquitectura hexagonal (Ports and Adapters)**  
	Separa la lógica de negocio (núcleo OO) de las interfaces externas.  
	👉 Favorece el testeo y la independencia tecnológica.

- **Clean Architecture**  
	Centrada en entidades OO puras con dependencias dirigidas hacia adentro.  
	👉 Implementa principios SOLID en la estructura general.

- **Microservicios orientados a objetos**  
	Cada servicio es una unidad independiente que encapsula objetos y lógica coherente.  
	👉 Fomenta la modularidad y escalabilidad.

- **Arquitectura MVC (Model-View-Controller)**  
	Divide la aplicación en tres tipos de objetos: modelo, vista y controlador.  
	👉 Patrón clásico en frameworks como Django, Spring, Laravel.

---

## Ejemplos Prácticos de Aplicación

- **Sistema de gestión de usuarios**  
	Define clases como `Usuario`, `Rol`, `Permiso`.  
	👉 Cada objeto gestiona su estado y comportamiento.

- **Simulación de entidades (juegos o sistemas físicos)**  
	Los objetos representan actores con propiedades y métodos.  
	👉 Ejemplo: `Personaje.mover()`, `Enemigo.atacar()`.

- **Gestión de inventarios o stock**  
	Clases como `Producto`, `Categoría`, `Proveedor`.  
	👉 Ejemplo: control de stock mediante encapsulación de cantidades.

- **Sistema de facturación**  
	Objetos `Factura`, `Cliente`, `Detalle`, `Pago`.  
	👉 Permite aislar la lógica de cálculo de impuestos o descuentos.

- **Aplicaciones web con POO**  
	Frameworks como Laravel (PHP), Django (Python) o Spring (Java) implementan patrones OO (MVC, Factory, DAO).  
	👉 Las clases encapsulan controladores, modelos y servicios.

- **Desarrollo móvil**  
	En Android o iOS, las vistas y controladores son objetos.  
	👉 La POO define la jerarquía de componentes visuales y su comportamiento.

---

## Aplicación de Principios OO

- **Aplicación de [SOLID](/computer%20science/solid/)**  
	Los principios se usan para estructurar módulos, clases y servicios de forma mantenible.

- **Aplicación de Encapsulación**  
	Se ocultan los detalles internos de los objetos, exponiendo solo lo necesario mediante interfaces.

- **Aplicación de Herencia y Polimorfismo**  
	Permiten generalizar comportamientos y definir variantes específicas.  
	👉 Clave en jerarquías de controladores o vistas.

- **Aplicación de Composición sobre herencia**  
	Favorece la modularidad al combinar comportamientos en lugar de extender clases.

- **Aplicación de Abstracción**  
	Define contratos (interfaces) sin exponer la implementación.  
	👉 Permite sustituir componentes fácilmente.

---

## POO en Patrones y Frameworks

- **Uso de [Patrones de diseño](/computer%20science/patrones-de-dise-o/)**  
	Los frameworks modernos implementan patrones OO para resolver problemas comunes:
	- Factory Method y Abstract Factory → creación de objetos.  
	- Singleton → gestión de instancias globales.  
	- Observer → eventos y reactividad.  
	- Decorator → extensibilidad de funciones.  
	- Strategy → algoritmos intercambiables.

- **POO en frameworks web**  
	Los controladores son clases, las vistas son objetos de presentación y los modelos son entidades OO.

- **POO en frameworks de UI**  
	Componentes (React, Angular, Flutter) funcionan como objetos con estado, propiedades y métodos.  
	👉 Reinterpretan la orientación a objetos hacia la reactividad.

- **POO en motores de juego**  
	Las entidades del mundo son objetos con atributos (posición, energía) y métodos (mover, colisionar).

---

## Testing y Calidad en POO

- **Tests unitarios orientados a objetos**  
	Validan el comportamiento de métodos y clases individuales.  
	👉 Usan frameworks como JUnit, PyTest, Mocha.

- **Mocks y Stubs**  
	Objetos simulados que reemplazan dependencias reales en pruebas.  
	👉 Permiten probar clases sin acoplamiento externo.

- **Inyección de dependencias (DI)**  
	Técnica OO que introduce objetos externos en lugar de crearlos internamente.  
	👉 Mejora el testeo y la flexibilidad.

- **Refactorización OO**  
	Mejora del diseño interno sin cambiar el comportamiento externo.  
	👉 Aplica principios [SOLID](/computer%20science/solid/) y patrones de diseño.

---

## Aplicación en Bases de Datos y Persistencia

- **ORM (Object Relational Mapping)**  
	Mapea clases OO con tablas relacionales.  
	👉 Ejemplo: Hibernate, Sequelize, Doctrine.

- **DAO (Data Access Object)**  
	Clase encargada del acceso a datos, aislando consultas del resto del sistema.

- **DTO (Data Transfer Object)**  
	Objetos simples usados para transferir datos entre capas o servicios.  
	👉 Evitan exponer la lógica interna.

---

## Integración con Ecosistemas Modernos

- **API orientadas a objetos**  
	Las interfaces REST y GraphQL exponen recursos representados como objetos.  
	👉 Ejemplo: `/api/usuarios` representa la clase `Usuario`.

- **POO en la nube**  
	Los objetos modelan recursos (instancias, buckets, funciones) y se gestionan mediante SDKs OO.

- **POO en sistemas distribuidos**  
	Los objetos pueden representar servicios remotos (RPC, gRPC, microservicios OO).

- **POO y DevOps**  
	Automatización de despliegues mediante clases de infraestructura o plantillas (IaC orientado a objetos).

---

## Referencias cruzadas

- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)  
- Glosario POO · Fundamentos y Conceptos Básicos  
- Glosario POO · Principios de Diseño y Buenas Prácticas  
- Glosario POO · Patrones de Diseño y Arquitectura Orientada a Objetos  
- Glosario POO · Paradigmas Relacionados y Extensiones Modernas  
- Composición sobre herencia  
- [SOLID](/computer%20science/solid/)  
- Encapsulación  
- Abstracción  
- [Patrones de diseño](/computer%20science/patrones-de-dise-o/)  
- 10-POO con clases  
- 11-poo_prototipica  
- Ecosistema y orientación moderna de POO

# Glosario POO · Lenguajes y Ecosistemas Modernos


Esta sección resume cómo distintos lenguajes y ecosistemas modernos implementan, extienden o reinterpretan la [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/), integrando paradigmas como el funcional, reactivo o declarativo.

---

## Java

- **Modelo OO clásico basado en clases y tipos estáticos.**  
	👉 Cada objeto es una instancia de una clase definida explícitamente.  
	👉 Soporta Herencia, Polimorfismo, Encapsulación y Abstracción.  
	👉 Utiliza interfaces para definir contratos y patrones como Factory y Singleton.  
	👉 Fortalece el principio [SOLID](/computer%20science/solid/) y el uso de Interfaces como separación de responsabilidades.  
	- Ecosistema: Spring, Hibernate, Jakarta EE.  
	- Paradigmas: OO + funcional (desde Java 8 con lambdas y streams).

---

## C#

- **Lenguaje orientado a objetos puro con soporte para paradigmas mixtos.**  
	👉 Inspirado en Java, con mejoras en tipos genéricos, Delegados, eventos y LINQ.  
	👉 Implementa Encapsulación mediante propiedades automáticas (`get` / `set`).  
	👉 Incluye POO asíncrona (`async/await`) y soporte nativo de Inyección de dependencias.  
	- Ecosistema: .NET, ASP.NET Core, Unity.  
	- Paradigmas: OO + funcional + reactivo.

---

## Python

- **POO dinámica, flexible y multiparadigma.**  
	👉 Todo es un objeto, incluidas clases y funciones.  
	👉 Soporta Herencia múltiple, Mixins y Metaprogramación mediante decoradores y metaclases.  
	👉 Permite Duck Typing y Polimorfismo por comportamiento.  
	👉 Facilita la Composición sobre herencia.  
	- Ecosistema: Django, Flask, FastAPI.  
	- Paradigmas: OO + funcional + procedural.

---

## JavaScript

- **POO prototípica basada en objetos y prototipos, no clases reales.**  
	👉 Los objetos heredan directamente de otros objetos (`Prototype`).  
	👉 Desde ES6, permite sintaxis de clases, pero sigue siendo prototípica internamente.  
	👉 Integra Programación funcional y Programación reactiva.  
	👉 Soporta Composición y Closures como alternativas a la herencia.  
	- Ecosistema: Node.js, React, Vue, Angular.  
	- Paradigmas: prototípico + funcional + declarativo.

---

## TypeScript

- **Superset tipado de JavaScript que formaliza la POO.**  
	👉 Añade tipos estáticos, Interfaces y Genéricos.  
	👉 Mejora la seguridad de tipos y el modelado OO.  
	👉 Mantiene compatibilidad con la POO prototípica subyacente.  
	- Ecosistema: Angular, NestJS, React con TypeScript.  
	- Paradigmas: OO + tipado estático + funcional.

---

## PHP

- **Lenguaje originalmente procedural que evolucionó hacia la POO.**  
	👉 A partir de PHP 5 introdujo clases, Interfaces, Traits y Namespaces.  
	👉 PHP 8 añadió Tipado más estricto y atributos (anotaciones modernas).  
	👉 Los frameworks modernos usan patrones MVC y Dependency Injection.  
	- Ecosistema: Laravel, Symfony.  
	- Paradigmas: OO + procedural + funcional (parcial).

---

## C++

- **Lenguaje multiparadigma con base OO y control total de memoria.**  
	👉 Implementa Herencia múltiple, Encapsulación y Polimorfismo en tiempo de compilación y ejecución.  
	👉 Usa Templates (genéricos) y Sobrecarga de operadores.  
	👉 Pionero en el modelo OO clásico.  
	- Ecosistema: Unreal Engine, Qt, sistemas embebidos.  
	- Paradigmas: OO + procedural + genérico.

---

## Kotlin

- **Lenguaje moderno diseñado para mejorar Java.**  
	👉 Enfocado en seguridad de tipos, inmutabilidad y expresividad.  
	👉 Soporta [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/) clásica, Programación funcional y Data Classes.  
	👉 Simplifica patrones como Singleton y Builder.  
	👉 Nulos seguros (`?.`, `!!`).  
	- Ecosistema: Android, Ktor, Spring Boot.  
	- Paradigmas: OO + funcional + declarativo.

---

## Swift

- **Lenguaje OO moderno para iOS y macOS.**  
	👉 Basado en clases, Structs y Protocols (interfaces avanzadas).  
	👉 Prefiere Composición sobre herencia.  
	👉 Adopta Inmutabilidad y programación funcional.  
	- Ecosistema: iOS, macOS, SwiftUI.  
	- Paradigmas: OO + funcional + declarativo.

---

## Ruby

- **Lenguaje 100% orientado a objetos.**  
	👉 Todo es un objeto, incluso los números y clases.  
	👉 Usa metaclases y mixins mediante Modules.  
	👉 Extremadamente dinámico, ideal para Metaprogramación.  
	- Ecosistema: Ruby on Rails.  
	- Paradigmas: OO + meta + dinámico.

---

## Rust

- **No es un lenguaje OO puro, pero implementa conceptos equivalentes.**  
	👉 Usa Traits para definir comportamientos reutilizables.  
	👉 No tiene herencia de clases, pero sí Composición y Polimorfismo implícito.  
	👉 Centrado en Seguridad de memoria y Inmutabilidad.  
	- Ecosistema: sistemas, CLI, WASM.  
	- Paradigmas: funcional + orientado a datos + orientado a traits.

---

## Go (Golang)

- **Lenguaje con orientación estructural y composicional, no OO clásica.**  
	👉 No hay clases ni herencia; se usa Composición y Interfaces implícitas.  
	👉 Tipado estático con estructuras (`struct`).  
	👉 Priorización de simplicidad y concurrencia.  
	- Ecosistema: microservicios, sistemas concurrentes.  
	- Paradigmas: estructurado + composicional.

---

## Scala

- **Lenguaje híbrido OO-funcional en la JVM.**  
	👉 Unifica objetos y funciones.  
	👉 Soporta Traits, Inmutabilidad y Composición.  
	👉 Implementa [Patrones de diseño](/computer%20science/patrones-de-dise-o/) con sintaxis concisa.  
	- Ecosistema: Apache Spark, Akka.  
	- Paradigmas: OO + funcional + reactivo.

---

## Dart

- **Lenguaje OO moderno con enfoque en aplicaciones multiplataforma.**  
	👉 Sintaxis similar a Java y C#.  
	👉 Basado en clases, Interfaces implícitas y Mixins.  
	👉 Nativo para Flutter (UI declarativa).  
	- Ecosistema: Flutter.  
	- Paradigmas: OO + declarativo + reactivo.

---

## Otros Ecosistemas

- **MATLAB / R / Julia**  
	👉 Soportan clases y objetos para modelado científico.  
	👉 OO orientada a datos y funciones numéricas.

- **Perl / Lua**  
	👉 Implementan OO de forma ligera y opcional mediante tablas o paquetes.

- **Smalltalk**  
	👉 Origen del paradigma OO puro.  
	👉 Todo es un objeto, incluidos los mensajes y clases.

- **Objective-C**  
	👉 Predecesor de Swift, combina C con [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/) mediante mensajes y Delegación.

---

## Referencias cruzadas

- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)  
- Glosario POO · Fundamentos y Conceptos Básicos  
- Glosario POO · Principios de Diseño y Buenas Prácticas  
- Glosario POO · Patrones de Diseño y Arquitectura Orientada a Objetos  
- Glosario POO · Paradigmas Relacionados y Extensiones Modernas  
- Glosario POO · Aplicaciones Prácticas y Ejemplos  
- Herencia  
- Composición sobre herencia  
- Programación funcional  
- Tipado  
- Inmutabilidad  
- Ecosistema y orientación moderna de POO

# Glosario POO · Síntesis de Modelos, Comparativas y Anti-Patrones

---

## Modelos de diseño orientado a objetos

### Modelo clásico
Basado en clases y objetos definidos por plantillas estructuradas.  
Usa herencia, encapsulación, polimorfismo y abstracción como pilares.  
Se aplica en lenguajes como Java, C++ y [[C#]].

### Modelo prototípico
No utiliza clases sino prototipos como base de herencia.  
Cada objeto puede servir de modelo para otros.  
Característico de JavaScript y algunos entornos dinámicos.

### Modelo basado en componentes
Reemplaza la herencia por la composición de componentes reutilizables.  
Favorece la independencia, el principio de composición sobre herencia y la modularidad.  
Usado en arquitecturas modernas (e.g., Unity, React).

### Modelo orientado a datos
Integra la [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/) con el paradigma declarativo para manipular estructuras de datos inmutables.  
Frecuente en lenguajes híbridos como [Scala](/data%20science/scala/), Kotlin y [Rust](/desarrollo%20multiplataforma/rust/).

---

## Comparativas entre enfoques

### Herencia vs Composición
- **Herencia**: relación jerárquica, favorece la reutilización de código pero puede generar acoplamiento.  
- **Composición**: combina objetos con responsabilidades específicas, más flexible y mantenible.  
→ Referencia: Principio de Composición sobre Herencia.

### Tipado estático vs dinámico
- **Estático**: tipos definidos en compilación (mayor seguridad, menor flexibilidad).  
- **Dinámico**: tipos en tiempo de ejecución (más adaptable, mayor riesgo de errores).  
→ Véase Polimorfismo y Abstracción.

### Orientación a objetos vs funcional
- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/) enfatiza el **estado mutable** y la **interacción entre objetos**.  
- Programación funcional prioriza **inmutabilidad** y **funciones puras**.  
Modelos híbridos combinan ambos paradigmas (ej. [Scala](/data%20science/scala/), Kotlin).

### Clases vs Prototipos
- **Clases**: definen estructuras estáticas; los objetos son instancias.  
- **Prototipos**: los objetos heredan directamente unos de otros.  
→ Véase 11-poo_prototipica.

---

## Anti-patrones comunes en POO

### God Object
Objeto que concentra demasiadas responsabilidades y dependencias.  
Viola el Principio de Responsabilidad Única y dificulta la mantenibilidad.

### Herencia profunda
Jerarquías excesivas que complican el diseño y reducen flexibilidad.  
→ Recomendado sustituir por Composición o Delegación.

### Repetición de lógica
Duplicar comportamiento en múltiples clases sin factorizarlo.  
Se resuelve con abstracciones o patrones como Template Method o Strategy.

### Acoplamiento excesivo
Dependencia fuerte entre clases o módulos.  
Contrario a los principios [SOLID](/computer%20science/solid/) y Inversión de Dependencias.

### Abstracciones innecesarias
Clases o interfaces que no aportan valor real al diseño.  
Generan complejidad accidental y disminuyen la claridad.

---

## Síntesis conceptual

- La [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/) moderna tiende a la **composición**, **inmutabilidad controlada** y **modularidad funcional**.  
- Los principios de diseño y los [Patrones de diseño](/computer%20science/patrones-de-dise-o/) son guías, no reglas rígidas.  
- Los modelos híbridos entre [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/) y funcional reflejan la evolución del software hacia la **claridad, testabilidad y bajo acoplamiento**.  
- Evitar los anti-patrones y priorizar la responsabilidad única y la abstracción correcta mantiene la escalabilidad del sistema.

---

## Véase también
- Principios de diseño y buenas prácticas POO  
- Patrones de diseño y arquitectura orientada a objetos  
- Ecosistema y orientación moderna de POO  
- Fundamentos y conceptos básicos de la POO
