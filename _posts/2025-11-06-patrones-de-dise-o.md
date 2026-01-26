---
date: 2025-11-06 15:45
title: Patrones de diseño
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: "true"
category: Computer Science
tags:
  - computer_Science
  - CS
  - patrones_diseo
---
# Patrones de diseño
`$= dv.current().file.tags.join(" ")`

- [Computer Science](/uncategorized/computer-science/)
- Patrones de diseño - Design patterns de refactoring guru
- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)
- diagramas UML
- [SOLID](/computer%20science/solid/)
- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)
- [Backend](/uncategorized/backend/)

---

## Clasificación general

### Creational Patterns
Patrones que facilitan la creación de objetos sin acoplar el código a clases concretas.

- **Factory**
	- [Patrón FACTORY | ✅ (Ejemplo en Typescript) - YouTube](https://youtu.be/JBV_ZOxBWpo)
	- Define una interfaz común para la creación de objetos, delegando a las subclases la decisión de qué clase instanciar.
	- Evita el uso directo de `new` en el código cliente, moviendo la lógica de creación a un método especializado.
	- Permite tener **métodos de creación distintos en las clases hijas**, adaptándose al contexto.
- **Abstract Factory**
	- Permite crear familias de objetos relacionados sin especificar sus clases concretas.
	- Se usa para mantener la consistencia entre objetos que deben coexistir (por ejemplo, componentes de una misma interfaz gráfica).
- **Builder**
	- Separa la construcción compleja de un objeto de su representación final.
	- Útil cuando un objeto tiene muchos parámetros opcionales o configuraciones.
- **Prototype**
	- Crea nuevos objetos copiando instancias existentes (clonación).
	- Ideal para casos donde la creación desde cero es costosa (por ejemplo, estructuras preconfiguradas o pesadas).

---

### Structural Patterns
Patrones que facilitan la **composición y organización de clases y objetos** para formar estructuras flexibles y escalables.

- **Adapter**
	- Convierte la interfaz de una clase existente en otra que el cliente espera.
	- Ejemplo: adaptar diferentes clientes HTTP con una interfaz unificada.
- **Bridge**
	- Desacopla una abstracción de su implementación, permitiendo que ambas evolucionen de forma independiente.
- **Composite**
	- Permite tratar objetos individuales y compuestos de forma uniforme (por ejemplo, jerarquías de menús o nodos).
- **Decorator**
	- Añade dinámicamente responsabilidades o comportamientos a un objeto sin modificar su estructura original.
- **Facade**
	- Proporciona una interfaz simplificada a un conjunto complejo de clases o subsistemas.
	- Ejemplo: un punto de acceso único a múltiples APIs.
- **Flyweight**
	- Optimiza el uso de memoria compartiendo instancias de objetos similares.
	- Separa el estado intrínseco (compartido) del extrínseco (único).
- **Proxy**
	- Proporciona un objeto sustituto o intermediario que controla el acceso a otro.
	- Se usa para control de acceso, carga diferida, logging, o conexiones remotas.

---

### Behavioral Patterns
Patrones que se centran en la **comunicación y responsabilidad entre objetos**.

- **Strategy**
	- Define una familia de algoritmos, encapsula cada uno y los hace intercambiables.
	- Permite variar el comportamiento del programa sin modificar el código cliente.
- **Observer**
	- [Patrón OBSERVER 🔎 | ✅ TYPESCRIPT - YouTube](https://youtu.be/pwMoZKZQBhc)
	- Establece una relación uno-a-muchos entre objetos.
	- Componentes:
		- **Subject**: mantiene una lista de observadores.
		- **Observer**: define la interfaz para recibir actualizaciones.
		- **Notify**: método que comunica los cambios.
	- Ejemplo: sistemas de eventos, interfaces reactivas, o data-binding.

---

## Patrones arquitectónicos

- **BFF (Backend For Frontend)**
	- [Patrón BFF: Backend For Frontend | Patrones de Arquitectura y Diseño - YouTube](https://www.youtube.com/watch?v=UcGaicwNKVA)
	- Crea un backend específico para cada tipo de frontend (web, móvil, etc.).
	- Permite optimizar la respuesta y estructura de datos para las necesidades de cada cliente.
	- Mejora la mantenibilidad y desacopla la lógica de negocio del cliente.

---

### MVC, MVP, MVVM, MVVM-C y VIPER

- **MVC (Model-View-Controller)**
	- Divide la aplicación en tres componentes: **Modelo** (datos), **Vista** (interfaz) y **Controlador** (lógica).
	- Favorece la separación de responsabilidades y la escalabilidad.
- **MVP (Model-View-Presenter)**
	- Variante de MVC donde el **Presenter** actúa como mediador directo entre vista y modelo.
	- Facilita testeo unitario al aislar la lógica de presentación.
- **MVVM (Model-View-ViewModel)**
	- Introduce el **ViewModel**, que expone datos y comandos a la vista a través de binding.
	- Común en frameworks como Angular, React (con Hooks) o SwiftUI.
- **MVVM-C (Model-View-ViewModel-Coordinator)**
	- Añade el **Coordinator** para manejar la navegación y el flujo entre pantallas.
	- Mejora la modularidad y la reutilización.
- **VIPER**
	- **View**, **Interactor**, **Presenter**, **Entity**, **Router**.
	- Arquitectura usada en iOS que promueve la separación estricta de responsabilidades.
	- El **Interactor** maneja la lógica de negocio, el **Router** la navegación, y el **Presenter** comunica vista y lógica.

---

## Patrón Criteria

- Define una **interfaz de criterios** para aplicar filtros sobre colecciones de objetos.
- Se relaciona con principios [SOLID](/computer%20science/solid/), especialmente **Open/Closed**.
- Ideal para **carga en memoria con filtrado dinámico**.
- Estructura:
	- **Clase abstracta** o interfaz con métodos `and`, `or`, etc.
	- **Modelado de filtros** reutilizables.
- Ventajas:
	- Simplifica consultas en memoria o bases de datos con **bajo volumen de datos**.
	- Puede actuar como un **DTO (Data Transfer Object)**.
	- Permite construir un DSL (Domain Specific Language) para filtros.
- Implementación:
	- **Clase con filtros definidos.**
	- **Convertidores** para transformar filtros en consultas reales (SQL, ORM, etc.).
	- Soporte para **paginación**, ordenación y combinaciones lógicas de criterios.

---

## Patrones de concurrencia

- **Thread Pool**
	- Gestiona un conjunto de hilos reutilizables para ejecutar tareas en paralelo sin crear nuevos hilos constantemente.
- **Future**
	- Representa el resultado de una tarea asíncrona que se completará en el futuro.
- **Reactor**
	- Maneja múltiples flujos de eventos concurrentes de forma no bloqueante.
	- Utilizado en servidores de alto rendimiento y sistemas reactivos.

---

## Código de ejemplo

### Factory Pattern (TypeScript)
{% raw %}
```typescript
interface Product {
	operation(): string;
}

class ConcreteProductA implements Product {
	operation(): string {
		return "Resultado del producto A";
	}
}

class ConcreteProductB implements Product {
	operation(): string {
		return "Resultado del producto B";
	}
}

abstract class Creator {
	abstract factoryMethod(): Product;

	someOperation(): string {
		const product = this.factoryMethod();
		return `Creador: el mismo código ha trabajado con ${product.operation()}`;
	}
}

class ConcreteCreatorA extends Creator {
	factoryMethod(): Product {
		return new ConcreteProductA();
	}
}

class ConcreteCreatorB extends Creator {
	factoryMethod(): Product {
		return new ConcreteProductB();
	}
}

function clientCode(creator: Creator) {
	console.log("Cliente: No conozco la clase del creador, pero aún funciona.");
	console.log(creator.someOperation());
}

clientCode(new ConcreteCreatorA());
clientCode(new ConcreteCreatorB());
```
{% endraw %}`

---

### Observer Pattern (TypeScript)

{% raw %}
```typescript
interface Observer {
	update(subject: Subject): void;
}

class Subject {
	private observers: Observer[] = [];
	private state: number = 0;

	public attach(observer: Observer): void {
		this.observers.push(observer);
	}

	public detach(observer: Observer): void {
		this.observers = this.observers.filter(o => o !== observer);
	}

	public notify(): void {
		for (const observer of this.observers) {
			observer.update(this);
		}
	}

	public setState(state: number): void {
		this.state = state;
		this.notify();
	}

	public getState(): number {
		return this.state;
	}
}

class ConcreteObserver implements Observer {
	public update(subject: Subject): void {
		console.log(`Observador notificado. Nuevo estado: ${subject.getState()}`);
	}
}

// Ejemplo de uso
const subject = new Subject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.attach(observer1);
subject.attach(observer2);

subject.setState(5);
```
{% endraw %}

# Patrones de diseño — Expansión y conceptos avanzados
`$= dv.current().file.tags.join(" ")`
## Patrones de diseño avanzados

### Dependency Injection (DI)
- **Propósito:** desacoplar los componentes evitando dependencias directas entre clases.
- Se logra inyectando las dependencias desde fuera (por constructor, setters o contenedores).
- **Ventajas:**
	- Facilita testeo unitario y mocking.
	- Mejora la mantenibilidad y adherencia a Inversión de Dependencias (principio SOLID).
- **Ejemplo de uso:** frameworks como Angular, Spring o NestJS.

---

### Inversion of Control (IoC)
- Principio que cede el control de la creación y gestión de objetos a un contenedor o framework.
- **Relación con DI:** la inyección de dependencias es una implementación concreta de IoC.
- **Beneficios:**
	- Desacopla la aplicación del ciclo de vida de sus componentes.
	- Facilita la configuración declarativa (por ejemplo, mediante archivos YAML o JSON).

---

### Event Sourcing
- Los cambios en el estado del sistema se almacenan como una **secuencia de eventos inmutables**.
- En lugar de guardar solo el estado final, se conserva todo el historial.
- **Ventajas:**
	- Auditoría completa y trazabilidad de acciones.
	- Posibilidad de reconstruir el estado en cualquier momento.
- **Usos comunes:**
	- Sistemas financieros, blockchain, CQRS.
- **Desafíos:**
	- Complejidad en la rehidratación de estado.
	- Necesidad de manejar versiones de eventos.

---

### CQRS (Command Query Responsibility Segregation)
- Separa las operaciones de **lectura (Query)** y **escritura (Command)** en modelos distintos.
- **Objetivo:** optimizar rendimiento, escalabilidad y claridad conceptual.
- **Ventajas:**
	- Permite distintas estrategias de almacenamiento para lectura y escritura.
	- Escalable en [microservicios](/backend/microservicios/).
- **Relación con Event Sourcing:**
	- A menudo se combinan, donde los comandos generan eventos y las consultas leen proyecciones derivadas de ellos.
- [websockets](/backend/websockets/)
- registro de eventos
---

### Repository Pattern
- Abstracción que actúa como intermediario entre la capa de dominio y la capa de datos.
- **Propósito:** encapsular la lógica de acceso a datos y mantener una interfaz limpia.
- **Ventajas:**
	- Simplifica pruebas unitarias.
	- Oculta la complejidad de ORMs o SQL.
- **Ejemplo:**
{% raw %}
```typescript
interface UserRepository {
	findByEmail(email: string): User | null;
	save(user: User): void;
}
```
{% endraw %}

---

### Unit of Work
- Coordina las operaciones sobre múltiples repositorios como una única transacción.
- **Objetivo:** garantizar consistencia y evitar estados intermedios corruptos.
- Se usa en combinación con **Repository Pattern** y ORMs (como Hibernate o TypeORM).

---

## Patrones estructurales avanzados

### Dependency Inversion con Facade
- Combina principios SOLID con el patrón **Facade** para unificar interfaces externas.
- El **Facade** actúa como punto de entrada único, mientras que el **DI Container** administra la inyección de dependencias.
- Ejemplo: en sistemas grandes, la fachada puede encapsular APIs, bases de datos y servicios externos.

---

### Microkernel (Plugin Architecture)
- Núcleo mínimo que ofrece la infraestructura base, mientras los módulos o plugins añaden funcionalidades.
- **Ventajas:**
	- Extensible y modular.
	- Facilita el mantenimiento y personalización.
- **Ejemplo:** sistemas de IDEs, navegadores, o plataformas de videojuegos.

---

### Proxy avanzado: Lazy Loading y Caching
- **Lazy Loading:** retrasa la carga de recursos hasta que son necesarios.
- **Caching Proxy:** almacena respuestas de un objeto costoso para acelerar las subsiguientes peticiones.
- **Ejemplo:** ORM que retrasa la carga de relaciones (`lazy relationships`).

---

## Patrones de comportamiento avanzados

### Command Pattern
- Encapsula una petición como un objeto, permitiendo deshacer operaciones, registrar o encolar comandos.
- **Componentes:**
	- `Command`: interfaz común con `execute()`.
	- `Invoker`: ejecuta comandos.
	- `Receiver`: contiene la lógica de negocio real.
- **Ejemplo de uso:** implementaciones de `undo/redo`, colas de tareas.

---

### State Pattern
- Permite que un objeto altere su comportamiento cuando cambia su estado interno.
- **Diferencia con Strategy:** en `State`, los estados pueden transicionar entre sí; en `Strategy`, las estrategias son seleccionadas externamente.
- **Ejemplo:** una máquina de estados para el ciclo de vida de una orden o sesión.

---

### Chain of Responsibility
- Permite pasar una solicitud a través de una cadena de manejadores hasta que uno la procese.
- **Ventajas:**
	- Desacopla el emisor del receptor.
	- Permite añadir nuevos manejadores sin alterar el código existente.
- **Ejemplo:** middleware en frameworks web (Express, Django, etc.).

---

### Mediator Pattern
- Centraliza la comunicación entre múltiples objetos (colegas), evitando dependencias directas.
- **Aplicación:** sistemas de UI, chatrooms, o flujos coordinados.
- **Ejemplo:** un componente UI notifica al Mediator en lugar de comunicarse con otros directamente.

---

## Patrones arquitectónicos complementarios

### Event-Driven Architecture (EDA)
- Arquitectura basada en eventos asíncronos que disparan reacciones en diferentes componentes.
- **Elementos:**
	- Emisores (producers)
	- Consumidores (listeners)
	- Bus de eventos
- **Ventajas:**
	- Escalabilidad y desacoplamiento.
	- Ideal para sistemas distribuidos y microservicios.

---

### Layered Architecture
- Divide el sistema en capas con responsabilidades claras:
	- **Presentación**
	- **Aplicación**
	- **Dominio**
	- **Infraestructura**
- **Beneficios:**
	- Aislamiento entre lógica de negocio y detalles técnicos.
	- Combinable con otros patrones (Repository, Service, Facade).

---

### Hexagonal Architecture (Ports and Adapters)
- También llamada **Arquitectura Limpia** o **Clean Architecture**.
- Los componentes externos se conectan mediante **puertos (interfaces)** y **adaptadores (implementaciones)**.
- **Ventajas:**
	- Pruebas unitarias simples (mockeo de adaptadores).
	- Independencia de frameworks o bases de datos.
- **Relación:** extensión conceptual de los patrones **Adapter** y **Dependency Inversion**.

---

## Patrones de concurrencia y reactividad

### Producer-Consumer
- Divide el trabajo entre **productores** (generan datos/tareas) y **consumidores** (procesan).
- Sincronización mediante colas o buffers.
- **Ejemplo:** sistemas de mensajería o streaming (Kafka, RabbitMQ).

### Actor Model
- Los actores son unidades independientes con su propio estado y buzón de mensajes.
- **Ventajas:**
	- Elimina condiciones de carrera.
	- Escalabilidad horizontal.
- **Usado en:** Akka, Erlang, Elixir.

### Scheduler Pattern
- Coordina tareas periódicas o planificadas.
- Se usa en combinación con colas o cron jobs.
- **Ejemplo:** actualización de cachés o limpieza de logs.

---

## Patrones emergentes y modernos

### Saga Pattern
- Maneja transacciones distribuidas en microservicios.
- Divide una operación global en múltiples pasos locales, cada uno con su compensación.
- **Tipos:**
	- *Choreography*: cada servicio reacciona a eventos.
	- *Orchestration*: un coordinador central dirige el flujo.
- **Uso común:** sistemas de pagos o reservas.

### Circuit Breaker
- Previene fallos en cascada cuando un servicio externo falla repetidamente.
- **Estados:**
	- *Closed*: peticiones normales.
	- *Open*: bloquea peticiones tras múltiples fallos.
	- *Half-open*: permite intentos de recuperación.
- Implementado en librerías como Resilience4j, Hystrix.

### Bulkhead Pattern
- Aísla componentes para evitar que el fallo de uno afecte a otros.
- Inspirado en los compartimentos estancos de los barcos.
- **Ejemplo:** separar hilos o conexiones por servicio.

---

## Recursos y vínculos útiles
- Refactoring Guru - Design Patterns
- Arquitectura Limpia
- Microservicios y patrones de resiliencia
- Event Driven Systems
- CQRS y Event Sourcing
- SOLID y principios de diseño

# Patrones de diseño — Ejemplos de código
`$= dv.current().file.tags.join(" ")`

- [Patrones de diseño](/computer%20science/patrones-de-dise-o/)
- Arquitectura de Software
- [POO Programación Orientada a Objetos](/computer%20science/poo-programaci-n-orientada-a-objetos/)
- [SOLID](/computer%20science/solid/)

---

## 🧱 PATRONES CREACIONALES

### Factory Pattern (TypeScript)
{% raw %}
```typescript
interface Product {
  getDescription(): string;
}

class ConcreteProductA implements Product {
  getDescription() {
    return "Soy el producto A";
  }
}

class ConcreteProductB implements Product {
  getDescription() {
    return "Soy el producto B";
  }
}

abstract class Creator {
  abstract createProduct(): Product;

  deliver(): void {
    const product = this.createProduct();
    console.log("Entregando producto:", product.getDescription());
  }
}

class ConcreteCreatorA extends Creator {
  createProduct(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  createProduct(): Product {
    return new ConcreteProductB();
  }
}

// Uso realista
const creators: Creator[] = [new ConcreteCreatorA(), new ConcreteCreatorB()];
creators.forEach(c => c.deliver());
```
{% endraw %}`

---

### Abstract Factory (Java)

{% raw %}
```java
interface Button {
  void render();
}

interface Checkbox {
  void render();
}

interface GUIFactory {
  Button createButton();
  Checkbox createCheckbox();
}

class MacButton implements Button {
  public void render() { System.out.println("Render Mac Button"); }
}

class WindowsButton implements Button {
  public void render() { System.out.println("Render Windows Button"); }
}

class MacFactory implements GUIFactory {
  public Button createButton() { return new MacButton(); }
  public Checkbox createCheckbox() { return () -> System.out.println("Render Mac Checkbox"); }
}

class WindowsFactory implements GUIFactory {
  public Button createButton() { return new WindowsButton(); }
  public Checkbox createCheckbox() { return () -> System.out.println("Render Windows Checkbox"); }
}

// Cliente
public class App {
  public static void main(String[] args) {
    GUIFactory factory = System.getProperty("os.name").contains("Mac")
        ? new MacFactory()
        : new WindowsFactory();
    Button button = factory.createButton();
    button.render();
  }
}
```
{% endraw %}

---

### Builder Pattern (Python)

{% raw %}
```python
class House:
    def __init__(self):
        self.foundation = None
        self.walls = []
        self.roof = None

    def __repr__(self):
        return f"House(foundation={self.foundation}, walls={self.walls}, roof={self.roof})"

class HouseBuilder:
    def __init__(self):
        self.house = House()

    def build_foundation(self, material):
        self.house.foundation = material
        return self

    def build_walls(self, walls):
        self.house.walls.extend(walls)
        return self

    def build_roof(self, roof_type):
        self.house.roof = roof_type
        return self

    def get_result(self):
        return self.house

# Uso realista
builder = HouseBuilder()
house = (builder
    .build_foundation("Hormigón armado")
    .build_walls(["Ladrillo", "Aislante térmico"])
    .build_roof("Tejas cerámicas")
    .get_result())

print(house)
```
{% endraw %}

---

### Prototype Pattern (JavaScript)

{% raw %}
```javascript
class Document {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  clone() {
    return new Document(this.title, { ...this.content });
  }
}

// Uso realista
const doc1 = new Document("Manual", { pages: 10, lang: "es" });
const doc2 = doc1.clone();
doc2.content.pages = 12;

console.log(doc1, doc2);
```
{% endraw %}

---

## 🧩 PATRONES ESTRUCTURALES

### Adapter Pattern (TypeScript)

{% raw %}
```typescript
class OldPaymentGateway {
  makePayment(amount: number) {
    console.log(`Pagando €${amount} con API antigua`);
  }
}

interface ModernGateway {
  pay(amount: number): void;
}

class PaymentAdapter implements ModernGateway {
  constructor(private oldGateway: OldPaymentGateway) {}

  pay(amount: number): void {
    this.oldGateway.makePayment(amount);
  }
}

// Uso realista
const oldSystem = new OldPaymentGateway();
const newSystem: ModernGateway = new PaymentAdapter(oldSystem);
newSystem.pay(250);
```
{% endraw %}

---

### Decorator Pattern (Python)

{% raw %}
```python
class Notifier:
    def send(self, message):
        print(f"Enviando notificación base: {message}")

class EmailDecorator(Notifier):
    def __init__(self, wrappee):
        self.wrappee = wrappee

    def send(self, message):
        self.wrappee.send(message)
        print(f"Enviando correo: {message}")

class SlackDecorator(Notifier):
    def __init__(self, wrappee):
        self.wrappee = wrappee

    def send(self, message):
        self.wrappee.send(message)
        print(f"Enviando mensaje Slack: {message}")

# Uso realista
notifier = SlackDecorator(EmailDecorator(Notifier()))
notifier.send("Actualización del sistema completada ✅")
```
{% endraw %}

---

### Proxy Pattern (Python)

{% raw %}
```python
class ExpensiveService:
    def request(self):
        print("Ejecutando operación costosa...")

class ProxyService:
    def __init__(self):
        self._real_service = None

    def request(self):
        if not self._real_service:
            print("Inicializando servicio real...")
            self._real_service = ExpensiveService()
        print("Llamando a servicio real a través del proxy...")
        self._real_service.request()

# Uso
service = ProxyService()
service.request()
service.request()
```
{% endraw %}

---

## ⚙️ PATRONES DE COMPORTAMIENTO

### Strategy Pattern (TypeScript)

{% raw %}
```typescript
interface SortingStrategy {
  sort(data: number[]): number[];
}

class QuickSort implements SortingStrategy {
  sort(data: number[]): number[] {
    console.log("Usando QuickSort");
    return data.sort((a, b) => a - b);
  }
}

class BubbleSort implements SortingStrategy {
  sort(data: number[]): number[] {
    console.log("Usando BubbleSort");
    for (let i = 0; i < data.length; i++)
      for (let j = 0; j < data.length - i - 1; j++)
        if (data[j] > data[j + 1])
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
    return data;
  }
}

class Context {
  constructor(private strategy: SortingStrategy) {}
  execute(data: number[]) {
    return this.strategy.sort(data);
  }
}

const dataset = [5, 2, 9, 1];
new Context(new QuickSort()).execute(dataset);
new Context(new BubbleSort()).execute(dataset);
```
{% endraw %}

---

### Observer Pattern (TypeScript)

{% raw %}
```typescript
interface Observer {
  update(stock: string, price: number): void;
}

class StockMarket {
  private observers: Observer[] = [];
  private prices = new Map<string, number>();

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  setPrice(stock: string, price: number) {
    this.prices.set(stock, price);
    this.notify(stock, price);
  }

  notify(stock: string, price: number) {
    for (const obs of this.observers) {
      obs.update(stock, price);
    }
  }
}

class Trader implements Observer {
  constructor(private name: string) {}
  update(stock: string, price: number): void {
    console.log(`${this.name} notificado: ${stock} = €${price}`);
  }
}

// Uso realista
const market = new StockMarket();
const trader1 = new Trader("Eduardo");
const trader2 = new Trader("Sofía");

market.attach(trader1);
market.attach(trader2);

market.setPrice("AAPL", 175.5);
```
{% endraw %}

---

### Command Pattern (Python)

{% raw %}
```python
class Light:
    def on(self):
        print("💡 Luz encendida")

    def off(self):
        print("💡 Luz apagada")

class Command:
    def execute(self): pass

class TurnOnCommand(Command):
    def __init__(self, light):
        self.light = light
    def execute(self):
        self.light.on()

class TurnOffCommand(Command):
    def __init__(self, light):
        self.light = light
    def execute(self):
        self.light.off()

class RemoteControl:
    def __init__(self):
        self.commands = {}
    def set_command(self, name, command):
        self.commands[name] = command
    def press(self, name):
        if name in self.commands:
            self.commands[name].execute()

# Uso realista
light = Light()
remote = RemoteControl()
remote.set_command("on", TurnOnCommand(light))
remote.set_command("off", TurnOffCommand(light))

remote.press("on")
remote.press("off")
```
{% endraw %}

---

### State Pattern (JavaScript)

{% raw %}
```javascript
class Context {
  constructor(state) {
    this.transitionTo(state);
  }

  transitionTo(state) {
    this.state = state;
    this.state.context = this;
  }

  request() {
    this.state.handle();
  }
}

class State {
  handle() {}
}

class ConcreteStateA extends State {
  handle() {
    console.log("Estado A manejando la solicitud. → Cambiando a B");
    this.context.transitionTo(new ConcreteStateB());
  }
}

class ConcreteStateB extends State {
  handle() {
    console.log("Estado B manejando la solicitud. → Cambiando a A");
    this.context.transitionTo(new ConcreteStateA());
  }
}

// Uso
const context = new Context(new ConcreteStateA());
context.request();
context.request();
```
{% endraw %}

---

## 🏗️ PATRONES ARQUITECTÓNICOS

### Repository Pattern (TypeScript)

{% raw %}
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

class UserRepository {
  private users: User[] = [];

  save(user: User): void {
    this.users.push(user);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(u => u.email === email);
  }

  all(): User[] {
    return [...this.users];
  }
}

// Uso
const repo = new UserRepository();
repo.save({ id: 1, name: "Eduardo", email: "edu@domain.com" });
console.log(repo.findByEmail("edu@domain.com"));
```
{% endraw %}

---

### Event Sourcing + CQRS (Python simplificado)

{% raw %}
```python
class Event:
    def __init__(self, type, data):
        self.type = type
        self.data = data

class Account:
    def __init__(self):
        self.balance = 0
        self.events = []

    def deposit(self, amount):
        self.events.append(Event("Deposit", amount))
        self.balance += amount

    def withdraw(self, amount):
        self.events.append(Event("Withdraw", amount))
        self.balance -= amount

    def replay(self, events):
        for e in events:
            if e.type == "Deposit":
                self.balance += e.data
            elif e.type == "Withdraw":
                self.balance -= e.data

# Uso realista
acc = Account()
acc.deposit(100)
acc.withdraw(30)
print("Saldo actual:", acc.balance)
```
{% endraw %}

---

## ⚡ PATRONES DE CONCURRENCIA

### Thread Pool (Python)

{% raw %}
```python
import concurrent.futures
import time

def worker(n):
    time.sleep(1)
    return f"Tarea {n} completada"

with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
    results = executor.map(worker, range(5))
    for r in results:
        print(r)
```
{% endraw %}

---

### Reactor Pattern (Node.js)

{% raw %}
```javascript
const net = require("net");

const server = net.createServer(socket => {
  socket.on("data", data => {
    console.log("Recibido:", data.toString());
    socket.write("Respuesta del servidor");
  });
});

server.listen(4000, () => console.log("Servidor Reactor en puerto 4000"));
```
{% endraw %}

---

## 🔗 Recursos relacionados

* Patrones de diseño - Design patterns de refactoring guru
* Arquitectura Limpia
* Microservicios y patrones de resiliencia
* Event Driven Systems
* CQRS y Event Sourcing
* SOLID y principios de diseño

---

# Patrones de diseño — Tests y escenarios de integración
`$= dv.current().file.tags.join(" ")`

- [Patrones de diseño](/computer%20science/patrones-de-dise-o/)
- Arquitectura de Software
- [SOLID](/computer%20science/solid/)

---

## ✅ Escenario 1 — Factory + Strategy + Observer (Sistema de pagos modular)

### Contexto
Un sistema de pagos:
- **Factory** decide qué pasarela de pago crear (Stripe, PayPal, etc.).
- **Strategy** define cómo calcular las comisiones según tipo de pago.
- **Observer** notifica a los clientes cuando un pago cambia de estado.

### Código del sistema (TypeScript)
{% raw %}
```typescript
// 1. OBSERVER ---------------------------------------------------
interface Observer {
  update(event: string, data: any): void;
}

class NotificationService implements Observer {
  constructor(private userEmail: string) {}

  update(event: string, data: any) {
    console.log(`[NOTIFY ${this.userEmail}] Evento: ${event}`, data);
  }
}

class PaymentEventBus {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  publish(event: string, data: any) {
    this.observers.forEach(o => o.update(event, data));
  }
}


// 2. STRATEGY ---------------------------------------------------
interface FeeStrategy {
  calculate(amount: number): number;
}

class StandardFee implements FeeStrategy {
  calculate(amount: number): number {
    return amount * 0.03; // 3%
  }
}

class PremiumFee implements FeeStrategy {
  calculate(amount: number): number {
    return amount * 0.015; // 1.5%
  }
}


// 3. FACTORY -----------------------------------------------------
interface PaymentGateway {
  pay(amount: number): Promise<string>;
}

class StripeGateway implements PaymentGateway {
  async pay(amount: number): Promise<string> {
    return `Stripe OK: ${amount}`;
  }
}

class PayPalGateway implements PaymentGateway {
  async pay(amount: number): Promise<string> {
    return `PayPal OK: ${amount}`;
  }
}

class PaymentGatewayFactory {
  static create(gateway: string): PaymentGateway {
    if (gateway === "stripe") return new StripeGateway();
    if (gateway === "paypal") return new PayPalGateway();
    throw new Error("Unknown Gateway");
  }
}


// 4. FUSIÓN DE PATRONES: PaymentService ---------------------------
class PaymentService {
  constructor(
    private strategy: FeeStrategy,
    private eventBus: PaymentEventBus
  ) {}

  async process(amount: number, gatewayName: string) {
    const commission = this.strategy.calculate(amount);
    const total = amount + commission;

    const gateway = PaymentGatewayFactory.create(gatewayName);

    const result = await gateway.pay(total);

    this.eventBus.publish("payment_completed", {
      amount,
      commission,
      total,
      gateway: gatewayName,
      result
    });

    return result;
  }
}
```
{% endraw %}`

### Test realista

{% raw %}
```typescript
// TEST DE INTEGRACIÓN COMPLETA -------------------------

const eventBus = new PaymentEventBus();
eventBus.subscribe(new NotificationService("eduardo@domain.com"));
eventBus.subscribe(new NotificationService("sofia@domain.com"));

const standardPayment = new PaymentService(new StandardFee(), eventBus);
const premiumPayment = new PaymentService(new PremiumFee(), eventBus);

(async () => {
  console.log(await standardPayment.process(100, "stripe"));
  console.log(await premiumPayment.process(200, "paypal"));
})();
```
{% endraw %}

---

## ✅ Escenario 2 — Builder + Repository + Unit of Work (Sistema de pedidos)

### Contexto

Un sistema de pedidos:

* **Builder** crea pedidos complejos.
* **Repository Pattern** gestiona persistencia.
* **Unit of Work** asegura consistencia transaccional.

### Código (Python)

{% raw %}
```python
# 1. BUILDER ------------------------------------------------------
class Order:
    def __init__(self):
        self.items = []
        self.coupon = None
        self.address = None

    def __repr__(self):
        return f"Order(items={self.items}, coupon={self.coupon}, address={self.address})"


class OrderBuilder:
    def __init__(self):
        self.order = Order()

    def add_item(self, name, price):
        self.order.items.append((name, price))
        return self

    def set_coupon(self, coupon):
        self.order.coupon = coupon
        return self

    def deliver_to(self, address):
        self.order.address = address
        return self

    def build(self):
        return self.order


# 2. REPOSITORY ----------------------------------------------------
class OrderRepository:
    def __init__(self):
        self._store = {}

    def save(self, order):
        order_id = len(self._store) + 1
        self._store[order_id] = order
        return order_id


# 3. UNIT OF WORK --------------------------------------------------
class UnitOfWork:
    def __init__(self, order_repo):
        self.order_repo = order_repo
        self._pending_orders = []

    def register_new(self, order):
        self._pending_orders.append(order)

    def commit(self):
        ids = []
        for order in self._pending_orders:
            ids.append(self.order_repo.save(order))
        self._pending_orders.clear()
        return ids
```
{% endraw %}

### Test realista

{% raw %}
```python
repo = OrderRepository()
uow = UnitOfWork(repo)

order = (OrderBuilder()
         .add_item("Teclado", 50)
         .add_item("Monitor", 250)
         .set_coupon("SUMMER20")
         .deliver_to("Calle Gran Vía 123")
         .build())

uow.register_new(order)
ids = uow.commit()

print("Pedidos guardados:", ids)
```
{% endraw %}

---

## ✅ Escenario 3 — Adapter + Facade + Strategy (Sistema de envío logístico)

### Contexto

* **Adapter** adapta APIs externas de empresas de envío.
* **Strategy** calcula coste del envío.
* **Facade** crea una interfaz única para clientes.

### Código (TypeScript)

{% raw %}
```typescript
// 1. ADAPTERS -----------------------------------------------------
class DHLApi {
  sendPackage(pkg: any) {
    return `DHL enviado → ${pkg.id}`;
  }
}

class FedexApi {
  deliver(pkg: any) {
    return `FEDEX enviado → ${pkg.id}`;
  }
}

interface ShippingProvider {
  ship(pkg: any): string;
}

class DHLAdapter implements ShippingProvider {
  constructor(private api = new DHLApi()) {}
  ship(pkg: any): string {
    return this.api.sendPackage(pkg);
  }
}

class FedexAdapter implements ShippingProvider {
  constructor(private api = new FedexApi()) {}
  ship(pkg: any): string {
    return this.api.deliver(pkg);
  }
}


// 2. STRATEGY ------------------------------------------------------
interface ShippingCostStrategy {
  calculate(weight: number): number;
}

class StandardShipping implements ShippingCostStrategy {
  calculate(weight: number) {
    return weight * 1.2;
  }
}

class AirShipping implements ShippingCostStrategy {
  calculate(weight: number) {
    return weight * 3.5;
  }
}


// 3. FACADE --------------------------------------------------------
class ShippingFacade {
  constructor(
    private provider: ShippingProvider,
    private costStrategy: ShippingCostStrategy
  ) {}

  processShipment(pkg: any) {
    const cost = this.costStrategy.calculate(pkg.weight);
    const response = this.provider.ship(pkg);

    return { ...pkg, cost, response };
  }
}
```
{% endraw %}

### Test realista

{% raw %}
```typescript
const pkg = { id: "PKG-777", weight: 5 };

const facade1 = new ShippingFacade(
  new DHLAdapter(),
  new StandardShipping()
);

console.log(facade1.processShipment(pkg));

const facade2 = new ShippingFacade(
  new FedexAdapter(),
  new AirShipping()
);

console.log(facade2.processShipment(pkg));
```
{% endraw %}

---

## ✅ Escenario 4 — Chain of Responsibility + Command + Observer (Procesador de operaciones financieras)

### Código (Python)

{% raw %}
```python
# 1. OBSERVER ------------------------------------------------------
class EventBus:
    def __init__(self):
        self.listeners = []

    def subscribe(self, cb):
        self.listeners.append(cb)

    def publish(self, event, data):
        for cb in self.listeners:
            cb(event, data)


# 2. COMMAND --------------------------------------------------------
class Command:
    def execute(self, ctx): pass

class ValidateFunds(Command):
    def execute(self, ctx):
        if ctx["balance"] < ctx["amount"]:
            raise Exception("Fondos insuficientes")
        return ctx

class ApplyTransaction(Command):
    def execute(self, ctx):
        ctx["balance"] -= ctx["amount"]
        return ctx


# 3. CHAIN OF RESPONSIBILITY ----------------------------------------
class Handler:
    def __init__(self):
        self.next = None

    def set_next(self, handler):
        self.next = handler
        return handler

    def handle(self, ctx):
        ctx = self.process(ctx)
        if self.next:
            return self.next.handle(ctx)
        return ctx

    def process(self, ctx): pass


class ValidateHandler(Handler):
    def __init__(self, command):
        super().__init__()
        self.command = command

    def process(self, ctx):
        return self.command.execute(ctx)


class ApplyHandler(Handler):
    def __init__(self, command):
        super().__init__()
        self.command = command

    def process(self, ctx):
        return self.command.execute(ctx)
```
{% endraw %}

### Test realista

{% raw %}
```python
eventbus = EventBus()
eventbus.subscribe(lambda e, d: print("[LOG EVENT]", e, d))

ctx = {"amount": 40, "balance": 100}

pipeline = ValidateHandler(ValidateFunds())
pipeline.set_next(ApplyHandler(ApplyTransaction()))

result = pipeline.handle(ctx)

eventbus.publish("transaction_completed", result)

print(result)
```
{% endraw %}

---

## ✅ Escenario 5 — Microkernel + Plugin Architecture

### Código (JavaScript)

{% raw %}
```javascript
class Kernel {
  constructor() {
    this.plugins = [];
  }

  register(plugin) {
    this.plugins.push(plugin);
  }

  execute(event, payload) {
    for (const plugin of this.plugins) {
      if (plugin.supports(event)) {
        plugin.run(payload);
      }
    }
  }
}

// Plugins
class LoggingPlugin {
  supports(event) { return true; }
  run(payload) { console.log("[LOG]", payload); }
}

class MetricsPlugin {
  supports(event) { return event === "request"; }
  run(payload) { console.log("[METRICS] +1 request", payload.url); }
}

// Test
const kernel = new Kernel();
kernel.register(new LoggingPlugin());
kernel.register(new MetricsPlugin());

kernel.execute("request", { url: "/home" });
```
{% endraw %}

---



# Patrones de diseño — Integraciones avanzadas
`$= dv.current().file.tags.join(" ")`

- [Patrones de diseño](/computer%20science/patrones-de-dise-o/)
- Arquitectura de Software
- DDD Domain Driven Design
- CQRS
- Event Sourcing
- MVVM
- Saga Pattern
- Circuit Breaker Pattern
- Repository Pattern

---

## 🧠 Escenario 1 — CQRS + Event Sourcing + Factory + Strategy

### Contexto
Un sistema de **pedidos distribuidos**:
- **CQRS:** separa lectura/escritura con modelos diferentes.  
- **Event Sourcing:** guarda los cambios como eventos en vez del estado final.  
- **Factory:** crea comandos y eventos.  
- **Strategy:** define cómo aplicar descuentos según tipo de cliente.

### Código (Python)
{% raw %}
```python
from abc import ABC, abstractmethod
from datetime import datetime
import uuid

# 1. EVENT SOURCING -------------------------------------------------
class Event(ABC):
    @abstractmethod
    def apply(self, aggregate): pass


class OrderCreated(Event):
    def __init__(self, order_id, customer_type, amount):
        self.order_id = order_id
        self.customer_type = customer_type
        self.amount = amount

    def apply(self, aggregate):
        aggregate.id = self.order_id
        aggregate.customer_type = self.customer_type
        aggregate.amount = self.amount
        aggregate.status = "CREATED"
        aggregate.events.append(self)


class OrderPaid(Event):
    def __init__(self, order_id):
        self.order_id = order_id

    def apply(self, aggregate):
        aggregate.status = "PAID"
        aggregate.events.append(self)


# 2. STRATEGY -------------------------------------------------------
class DiscountStrategy(ABC):
    @abstractmethod
    def calculate(self, amount): pass


class RegularDiscount(DiscountStrategy):
    def calculate(self, amount): return amount * 0.95


class VIPDiscount(DiscountStrategy):
    def calculate(self, amount): return amount * 0.85


# 3. FACTORY --------------------------------------------------------
class EventFactory:
    @staticmethod
    def create_event(event_type, **kwargs):
        mapping = {
            "OrderCreated": OrderCreated,
            "OrderPaid": OrderPaid
        }
        return mapping[event_type](**kwargs)


# 4. CQRS — COMMAND SIDE -------------------------------------------
class OrderAggregate:
    def __init__(self):
        self.id = None
        self.customer_type = None
        self.amount = 0
        self.status = "NEW"
        self.events = []

    def create_order(self, customer_type, amount, discount_strategy):
        order_id = str(uuid.uuid4())
        final_amount = discount_strategy.calculate(amount)
        event = EventFactory.create_event("OrderCreated",
                                          order_id=order_id,
                                          customer_type=customer_type,
                                          amount=final_amount)
        event.apply(self)

    def pay_order(self):
        event = EventFactory.create_event("OrderPaid", order_id=self.id)
        event.apply(self)


# 5. CQRS — QUERY SIDE ---------------------------------------------
class OrderReadModel:
    def __init__(self):
        self.orders = {}

    def project(self, event):
        if isinstance(event, OrderCreated):
            self.orders[event.order_id] = {
                "type": event.customer_type,
                "amount": event.amount,
                "status": "CREATED"
            }
        elif isinstance(event, OrderPaid):
            self.orders[event.order_id]["status"] = "PAID"
```
{% endraw %}`

### Test de integración

{% raw %}
```python
order = OrderAggregate()
strategy = VIPDiscount()
order.create_order("vip", 200, strategy)
order.pay_order()

read_model = OrderReadModel()
for e in order.events:
    read_model.project(e)

print(read_model.orders)
```
{% endraw %}

---

## ⚙️ Escenario 2 — Decorator + Proxy + Adapter (Sistema de caché y logging para API externa)

### Contexto

* **Adapter:** conecta a un servicio HTTP externo.
* **Proxy:** controla el acceso (cachea y limita).
* **Decorator:** añade logging sin modificar el código base.

### Código (TypeScript)

{% raw %}
```typescript
// 1. ADAPTER -------------------------------------------------------
interface HttpService {
  get(url: string): Promise<any>;
}

class ExternalApiAdapter implements HttpService {
  async get(url: string) {
    console.log("Real HTTP request:", url);
    return { data: "Response from " + url };
  }
}


// 2. PROXY ---------------------------------------------------------
class CachedApiProxy implements HttpService {
  private cache = new Map<string, any>();

  constructor(private api: HttpService) {}

  async get(url: string) {
    if (this.cache.has(url)) {
      console.log("Returning from cache:", url);
      return this.cache.get(url);
    }
    const res = await this.api.get(url);
    this.cache.set(url, res);
    return res;
  }
}


// 3. DECORATOR -----------------------------------------------------
class LoggingDecorator implements HttpService {
  constructor(private api: HttpService) {}

  async get(url: string) {
    console.log(`[LOG] Fetching: ${url}`);
    const res = await this.api.get(url);
    console.log(`[LOG] Done: ${url}`);
    return res;
  }
}
```
{% endraw %}

### Test realista

{% raw %}
```typescript
const baseApi = new ExternalApiAdapter();
const cachedApi = new CachedApiProxy(baseApi);
const loggedApi = new LoggingDecorator(cachedApi);

(async () => {
  await loggedApi.get("https://service/api/users");
  await loggedApi.get("https://service/api/users"); // viene del cache
})();
```
{% endraw %}

---

## 🧩 Escenario 3 — MVVM + Observer + Command (Aplicación de tareas Reactiva)

### Contexto

* **MVVM:** separa lógica (ViewModel), vista y modelo.
* **Observer:** sincroniza la vista con el modelo.
* **Command:** encapsula acciones (añadir tarea, marcar completada).

### Código (TypeScript)

{% raw %}
```typescript
// 1. OBSERVER ------------------------------------------------------
type ObserverFn = () => void;

class Observable<T> {
  private observers: ObserverFn[] = [];
  constructor(public value: T) {}

  subscribe(fn: ObserverFn) { this.observers.push(fn); }
  set(newValue: T) {
    this.value = newValue;
    this.observers.forEach(fn => fn());
  }
}


// 2. MODEL ----------------------------------------------------------
interface Task {
  id: number;
  title: string;
  done: boolean;
}


// 3. VIEWMODEL ------------------------------------------------------
class TaskViewModel {
  tasks = new Observable<Task[]>([]);
  private nextId = 1;

  addTask(title: string) {
    const newTask = { id: this.nextId++, title, done: false };
    this.tasks.set([...this.tasks.value, newTask]);
  }

  toggleTask(id: number) {
    this.tasks.set(
      this.tasks.value.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  }
}


// 4. COMMANDS -------------------------------------------------------
class AddTaskCommand {
  constructor(private vm: TaskViewModel, private title: string) {}
  execute() { this.vm.addTask(this.title); }
}

class ToggleTaskCommand {
  constructor(private vm: TaskViewModel, private id: number) {}
  execute() { this.vm.toggleTask(this.id); }
}
```
{% endraw %}

### Test realista (simulación)

{% raw %}
```typescript
const vm = new TaskViewModel();
vm.tasks.subscribe(() => console.log("UI Update:", vm.tasks.value));

const add1 = new AddTaskCommand(vm, "Aprender patrones de diseño");
add1.execute();

const add2 = new AddTaskCommand(vm, "Implementar MVVM");
add2.execute();

const toggle = new ToggleTaskCommand(vm, 1);
toggle.execute();
```
{% endraw %}

---

## 🔁 Escenario 4 — Saga + Circuit Breaker + Repository (Orquestación distribuida)

### Contexto

Simula un flujo de reserva de viaje:

* **Saga:** coordina pasos distribuidos (vuelo, hotel, pago).
* **Circuit Breaker:** evita repetir llamadas fallidas.
* **Repository:** persiste el estado de las sagas.

### Código (Python)

{% raw %}
```python
import random, time

# 1. CIRCUIT BREAKER -----------------------------------------------
class CircuitBreaker:
    def __init__(self, failure_threshold=3, reset_time=5):
        self.failure_count = 0
        self.failure_threshold = failure_threshold
        self.reset_time = reset_time
        self.last_failure = 0
        self.state = "CLOSED"

    def call(self, func, *args, **kwargs):
        if self.state == "OPEN" and time.time() - self.last_failure < self.reset_time:
            raise Exception("Circuit is open — skipping call")
        try:
            result = func(*args, **kwargs)
            self.failure_count = 0
            self.state = "CLOSED"
            return result
        except Exception as e:
            self.failure_count += 1
            self.last_failure = time.time()
            if self.failure_count >= self.failure_threshold:
                self.state = "OPEN"
            raise e


# 2. REPOSITORY -----------------------------------------------------
class SagaRepository:
    def __init__(self):
        self.data = {}

    def save(self, saga_id, state):
        self.data[saga_id] = state

    def get(self, saga_id):
        return self.data.get(saga_id, {})
    

# 3. SAGA ------------------------------------------------------------
class TravelBookingSaga:
    def __init__(self, repo, circuit):
        self.repo = repo
        self.circuit = circuit
        self.id = str(uuid.uuid4())
        self.state = "STARTED"

    def book_flight(self):
        if random.random() < 0.2:
            raise Exception("Flight booking failed")
        return "FLIGHT_OK"

    def book_hotel(self):
        if random.random() < 0.3:
            raise Exception("Hotel booking failed")
        return "HOTEL_OK"

    def charge_payment(self):
        if random.random() < 0.2:
            raise Exception("Payment failed")
        return "PAYMENT_OK"

    def execute(self):
        try:
            flight = self.circuit.call(self.book_flight)
            hotel = self.circuit.call(self.book_hotel)
            payment = self.circuit.call(self.charge_payment)
            self.state = "COMPLETED"
        except Exception as e:
            self.state = "FAILED"
            print("Rollback triggered:", e)
        finally:
            self.repo.save(self.id, {"state": self.state})
```
{% endraw %}

### Test realista

{% raw %}
```python
repo = SagaRepository()
circuit = CircuitBreaker(failure_threshold=2, reset_time=3)

for i in range(5):
    saga = TravelBookingSaga(repo, circuit)
    saga.execute()
    print(f"Saga {saga.id} → {saga.state}")
```
{% endraw %}

---

## 🧩 Notas adicionales

* Cada escenario representa un **caso real de integración de patrones en arquitecturas complejas**.
* Se pueden combinar aún más capas:

  * CQRS + Event Sourcing + Saga
  * Circuit Breaker + Retry Pattern
  * Repository + Unit of Work + Specification


# 🏢 Enterprise Patterns – Integraciones Distribuidas
`$= dv.current().file.tags.join(" ")`

- Arquitectura de Software
- [Patrones de diseño](/computer%20science/patrones-de-dise-o/)
- Microservicios
- Event Driven Architecture
- CQRS
- Saga Pattern
- Repository Pattern
- Circuit Breaker Pattern
- Adapter Pattern
- API Gateway
- Event Bus
- Message Broker
- Domain Driven Design

---

## 🌐 Escenario 1 — API Gateway + Proxy + Adapter (Orquestación de microservicios REST)

### Contexto
Un **API Gateway** centraliza las peticiones desde el cliente y delega las llamadas a distintos microservicios.  
- **Proxy Pattern:** intercepta y redirige solicitudes.  
- **Adapter Pattern:** adapta respuestas heterogéneas.  
- **Facade Pattern:** expone una interfaz única y consistente al cliente.

### Código (TypeScript)
{% raw %}
```typescript
// Simulación de microservicios
class UserService {
  async getUser(id: string) {
    return { id, name: "Eduardo", email: "edu@domain.com" };
  }
}

class OrdersService {
  async getOrders(userId: string) {
    return [
      { id: 1, total: 100 },
      { id: 2, total: 250 }
    ];
  }
}


// ADAPTER: Unifica formato de respuesta
class ResponseAdapter {
  adapt(user: any, orders: any[]) {
    return {
      userId: user.id,
      name: user.name,
      email: user.email,
      ordersCount: orders.length,
      totalSpent: orders.reduce((acc, o) => acc + o.total, 0)
    };
  }
}


// PROXY + FACADE (Gateway)
class ApiGateway {
  private userService = new UserService();
  private ordersService = new OrdersService();
  private adapter = new ResponseAdapter();

  async handleRequest(userId: string) {
    const [user, orders] = await Promise.all([
      this.userService.getUser(userId),
      this.ordersService.getOrders(userId)
    ]);

    return this.adapter.adapt(user, orders);
  }
}
```
{% endraw %}`

### Test realista

{% raw %}
```typescript
(async () => {
  const gateway = new ApiGateway();
  console.log(await gateway.handleRequest("user-123"));
})();
```
{% endraw %}

---

## 🧩 Escenario 2 — CQRS + Event Bus + Saga Orchestrator

### Contexto

Una arquitectura distribuida en la que:

* **CQRS** separa los modelos de lectura y escritura.
* **Event Bus** publica y escucha eventos entre microservicios.
* **Saga** coordina la ejecución distribuida de pedidos.

### Código (Python)

{% raw %}
```python
import uuid

# EVENT BUS --------------------------------------------------------
class EventBus:
    def __init__(self):
        self.subscribers = {}

    def subscribe(self, event_type, handler):
        self.subscribers.setdefault(event_type, []).append(handler)

    def publish(self, event_type, data):
        for handler in self.subscribers.get(event_type, []):
            handler(data)


# COMMAND SIDE ------------------------------------------------------
class OrderCommandService:
    def __init__(self, event_bus):
        self.event_bus = event_bus

    def create_order(self, customer_id, amount):
        order_id = str(uuid.uuid4())
        print(f"[Command] Order created {order_id}")
        self.event_bus.publish("OrderCreated", {"id": order_id, "amount": amount})
        return order_id


# QUERY SIDE --------------------------------------------------------
class OrderReadModel:
    def __init__(self):
        self.data = {}

    def project_order_created(self, event):
        self.data[event["id"]] = {"amount": event["amount"], "status": "PENDING"}

    def project_payment_done(self, event):
        self.data[event["id"]]["status"] = "PAID"


# SAGA ORCHESTRATOR -------------------------------------------------
class PaymentService:
    def __init__(self, event_bus):
        self.event_bus = event_bus

    def handle_order_created(self, event):
        print("[Saga] Processing payment for order:", event["id"])
        self.event_bus.publish("PaymentDone", event)


# REGISTRO DE EVENTOS -----------------------------------------------
event_bus = EventBus()
read_model = OrderReadModel()
payment_service = PaymentService(event_bus)

event_bus.subscribe("OrderCreated", payment_service.handle_order_created)
event_bus.subscribe("OrderCreated", read_model.project_order_created)
event_bus.subscribe("PaymentDone", read_model.project_payment_done)
```
{% endraw %}

### Test de flujo completo

{% raw %}
```python
command_service = OrderCommandService(event_bus)
order_id = command_service.create_order("cust-001", 300)

print("[READ MODEL]", read_model.data)
```
{% endraw %}

---

## 🧱 Escenario 3 — Repository + Unit of Work + Circuit Breaker + Retry

### Contexto

Un servicio que guarda pedidos en base de datos remota.

* **Repository Pattern:** abstrae el acceso a datos.
* **Unit of Work:** agrupa transacciones.
* **Circuit Breaker + Retry:** manejan errores de red con resiliencia.

### Código (Python)

{% raw %}
```python
import time, random

# CIRCUIT BREAKER --------------------------------------------------
class CircuitBreaker:
    def __init__(self, failure_threshold=3, reset_timeout=5):
        self.failures = 0
        self.failure_threshold = failure_threshold
        self.reset_timeout = reset_timeout
        self.last_failure = 0
        self.open = False

    def call(self, func, *args, **kwargs):
        if self.open and (time.time() - self.last_failure < self.reset_timeout):
            raise Exception("Circuit is OPEN — skipping call")
        try:
            result = func(*args, **kwargs)
            self.failures = 0
            self.open = False
            return result
        except Exception as e:
            self.failures += 1
            self.last_failure = time.time()
            if self.failures >= self.failure_threshold:
                self.open = True
            raise e


# REPOSITORY --------------------------------------------------------
class OrderRepository:
    def __init__(self):
        self._store = {}

    def save(self, order):
        if random.random() < 0.3:
            raise Exception("DB connection failed")
        self._store[order["id"]] = order
        print("[Repo] Order saved:", order)
        return True


# UNIT OF WORK ------------------------------------------------------
class UnitOfWork:
    def __init__(self, repo, circuit):
        self.repo = repo
        self.circuit = circuit
        self.pending = []

    def register(self, order):
        self.pending.append(order)

    def commit(self):
        for order in self.pending:
            retries = 3
            while retries:
                try:
                    self.circuit.call(self.repo.save, order)
                    break
                except Exception as e:
                    retries -= 1
                    print("Retrying...", retries, e)
            else:
                print("Failed permanently:", order["id"])
        self.pending.clear()
```
{% endraw %}

### Test realista

{% raw %}
```python
repo = OrderRepository()
breaker = CircuitBreaker()
uow = UnitOfWork(repo, breaker)

for i in range(5):
    order = {"id": str(uuid.uuid4()), "amount": random.randint(50, 300)}
    uow.register(order)

uow.commit()
```
{% endraw %}

---

## 🧠 Escenario 4 — Event Store + CQRS + Kafka Mock

### Contexto

Un sistema **event-driven** donde:

* Todos los cambios se registran en un **Event Store**.
* Un **Event Consumer** replica estados para queries (CQRS).
* Se simula un **Kafka broker** básico para comunicación asíncrona.

### Código (Python)

{% raw %}
```python
from collections import defaultdict

# KAFKA MOCK --------------------------------------------------------
class KafkaBroker:
    def __init__(self):
        self.topics = defaultdict(list)

    def publish(self, topic, event):
        for handler in self.topics[topic]:
            handler(event)

    def subscribe(self, topic, handler):
        self.topics[topic].append(handler)


# EVENT STORE -------------------------------------------------------
class EventStore:
    def __init__(self):
        self.events = []

    def append(self, event):
        print("[EventStore] Recorded event:", event)
        self.events.append(event)


# COMMAND SIDE ------------------------------------------------------
class ProductCommandService:
    def __init__(self, store, broker):
        self.store = store
        self.broker = broker

    def create_product(self, name, price):
        event = {"type": "ProductCreated", "name": name, "price": price}
        self.store.append(event)
        self.broker.publish("products", event)


# QUERY SIDE --------------------------------------------------------
class ProductQueryModel:
    def __init__(self):
        self.products = []

    def on_product_created(self, event):
        self.products.append({"name": event["name"], "price": event["price"]})
```
{% endraw %}

### Test de integración

{% raw %}
```python
broker = KafkaBroker()
store = EventStore()
query = ProductQueryModel()
command = ProductCommandService(store, broker)

broker.subscribe("products", query.on_product_created)

command.create_product("Laptop", 1200)
command.create_product("Tablet", 700)

print("Productos (Query Model):", query.products)
```
{% endraw %}

---

## 🧩 Extensiones sugeridas

* **Implementar un Event Sourcing real con snapshots**
* **Incluir un Message Bus persistente (RabbitMQ, NATS o Redis Streams)**
* **Agregar patrones de resiliencia: Retry, Timeout, Fallback**
* **Simular integración entre microservicios con AsyncAPI**

---

## 📚 Referencias útiles

* Patrones de Microservicios - Chris Richardson
* Enterprise Integration Patterns (Hohpe & Woolf)
* Event Driven Architecture
* Domain Driven Design
* CQRS y Event Sourcing - Greg Young

# Distributed Transactions & Message Patterns — Tests distribuidos (incompleta?)
`$= dv.current().file.tags.join(" ")`

* Microservicios
* Saga Pattern
* Event Driven Architecture
* Distributed Transactions
* Outbox Pattern
* Dead Letter Queue

## Objetivo
Nota con **tests distribuidos** que simulan comunicación entre microservicios mediante colas internas (mock), implementando **sagas**, **compensaciones**, **outbox**, **idempotencia**, **dead-letter queues** y **retries**. Todo ejecutable con `pytest` + `pytest-asyncio` (simulado con `asyncio`).

## Estructura de la nota
* Escenario A — Orquestación de Saga (Orchestrator)
* Escenario B — Coreografía de Saga (Choreography)
* Escenario C — Outbox + Poller (garantía de publicación atomizada)
* Escenario D — Dead Letter Queue y Retries

Cada escenario incluye:
* Implementación de componentes (broker mock, repositorios en memoria)
* Servicios simulados (Order, Payment, Inventory, Notification)
* Tests de integración usando `pytest-asyncio`

## Dependencias de prueba

* Python 3.8+
* pytest
* pytest-asyncio

Instalación sugerida (virtualenv):

{% raw %}
```bash
pip install pytest pytest-asyncio
```
{% endraw %}

---

## Escenario A — Orquestación de Saga (Orchestrator)

### Descripción

Un *OrderService* crea un pedido y pide al *Saga Orchestrator* que coordine:

* Reservar inventario (InventoryService)
* Cobrar al cliente (PaymentService)
* Confirmar pedido y notificar (NotificationService)

Si cualquiera de los pasos falla, el Orchestrator ejecuta **compensaciones** en orden inverso (p.ej. liberar inventario, reembolsar).

### Código (tests/escenario_a.py)

{% raw %}
```python
import asyncio
import uuid
import pytest

# Mock Message Broker (async)
class AsyncEventBus:
	def __init__(self):
		self.subscribers = {}

	async def publish(self, topic, event):
		for handler in list(self.subscribers.get(topic, [])):
			# schedule handlers concurrently but don't wait here
			asyncio.create_task(handler(event))

	def subscribe(self, topic, handler):
		self.subscribers.setdefault(topic, []).append(handler)


# In-memory saga repository
class SagaRepository:
	def __init__(self):
		self.store = {}

	def save(self, saga_id, state):
		self.store[saga_id] = state

	def get(self, saga_id):
		return self.store.get(saga_id)


# Services
class InventoryService:
	async def reserve(self, order_id, sku, qty):
		# Simulate latency
		await asyncio.sleep(0.05)
		if sku == "SKU-FAIL":
			raise Exception("Inventory reservation failed")
		return {"status": "reserved"}

	async def release(self, order_id, sku, qty):
		await asyncio.sleep(0.02)
		return {"status": "released"}


class PaymentService:
	async def charge(self, order_id, amount):
		await asyncio.sleep(0.05)
		if amount > 1000:
			raise Exception("Payment declined")
		return {"status": "charged"}

	async def refund(self, order_id, amount):
		await asyncio.sleep(0.02)
		return {"status": "refunded"}


class NotificationService:
	async def notify(self, user_id, message):
		await asyncio.sleep(0.01)
		return True


# Orchestrator
class OrderOrchestrator:
	def __init__(self, bus, repo, inventory, payment, notification):
		self.bus = bus
		self.repo = repo
		self.inventory = inventory
		self.payment = payment
		self.notification = notification

	async def start(self, order):
		saga_id = str(uuid.uuid4())
		self.repo.save(saga_id, {"state": "STARTED", "order": order})
		try:
			# Step 1: reserve inventory
			await self.inventory.reserve(order["id"], order["sku"], order["qty"])
			self.repo.save(saga_id, {"state": "INVENTORY_RESERVED"})

			# Step 2: charge payment
			await self.payment.charge(order["id"], order["amount"])
			self.repo.save(saga_id, {"state": "PAYMENT_CHARGED"})

			# Step 3: confirm
			self.repo.save(saga_id, {"state": "COMPLETED"})
			await self.notification.notify(order["user_id"], "Order completed")
			return {"saga_id": saga_id, "status": "COMPLETED"}
		except Exception as e:
			# Compensation in reverse order
			state = self.repo.get(saga_id)
			if state and state.get("state") == "PAYMENT_CHARGED":
				await self.payment.refund(order["id"], order["amount"])
			if state and state.get("state") in ("PAYMENT_CHARGED", "INVENTORY_RESERVED"):
				await self.inventory.release(order["id"], order["sku"], order["qty"])
			self.repo.save(saga_id, {"state": "COMPENSATED", "error": str(e)})
			await self.notification.notify(order["user_id"], f"Order failed: {e}")
			return {"saga_id": saga_id, "status": "FAILED", "error": str(e)}


# Tests
@pytest.mark.asyncio
async def test_orchestrator_success():
	bus = AsyncEventBus()
	repo = SagaRepository()
	inv = InventoryService()
	pay = PaymentService()
	notif = NotificationService()
	orch = OrderOrchestrator(bus, repo, inv, pay, notif)

	order = {"id": "ORD-1", "user_id": "U1", "sku": "SKU-1", "qty": 1, "amount": 100}
	res = await orch.start(order)
	assert res["status"] == "COMPLETED"
	assert repo.get(res["saga_id"])  # persisted state


@pytest.mark.asyncio
async def test_orchestrator_inventory_failure_triggers_compensation():
	bus = AsyncEventBus()
	repo = SagaRepository()
	inv = InventoryService()
	pay = PaymentService()
	notif = NotificationService()
	orch = OrderOrchestrator(bus, repo, inv, pay, notif)

	order = {"id": "ORD-2", "user_id": "U2", "sku": "SKU-FAIL", "qty": 1, "amount": 50}
	res = await orch.start(order)
	assert res["status"] == "FAILED"
	state = repo.get(res["saga_id"])
	assert state["state"] == "COMPENSATED"
```
{% endraw %}


## Escenario B — Coreografía de Saga (Choreography)

### Descripción
En lugar de un Orchestrator central, cada servicio reacciona a eventos y publica nuevos eventos. El flujo emerge de la interacción (choreography). Incluye idempotencia y deduplicación simple.

### Código (tests/escenario_b.py)
{% raw %}
```python
import asyncio
import uuid
import pytest

class AsyncBroker:
	def __init__(self):
		self.topics = {}

	async def publish(self, topic, event):
		for h in list(self.topics.get(topic, [])):
			asyncio.create_task(h(event))

	def subscribe(self, topic, handler):
		self.topics.setdefault(topic, []).append(handler)


# Simple dedup store
class DedupStore:
	def __init__(self):
		self.processed = set()

	def seen(self, id):
		if id in self.processed:
			return True
		self.processed.add(id)
		return False


# Services reacting to events
class OrderService:
	def __init__(self, broker):
		self.broker = broker

	async def create_order(self, payload):
		# Persist order locally (omitted) and emit event
		await self.broker.publish("OrderCreated", payload)


class InventoryService:
	def __init__(self, broker, dedup):
		self.broker = broker
		self.dedup = dedup
		self.broker.subscribe("OrderCreated", self.on_order_created)

	async def on_order_created(self, event):
		if self.dedup.seen(event["id"]):
			return
		# reserve
		if event.get("sku") == "SKU-FAIL":
			await self.broker.publish("InventoryFailed", event)
		else:
			await self.broker.publish("InventoryReserved", event)


class PaymentService:
	def __init__(self, broker, dedup):
		self.broker = broker
		self.dedup = dedup
		self.broker.subscribe("InventoryReserved", self.on_inventory_reserved)

	async def on_inventory_reserved(self, event):
		if self.dedup.seen(event["id"]):
			return
		if event.get("amount", 0) > 1000:
			await self.broker.publish("PaymentFailed", event)
		else:
			await self.broker.publish("PaymentDone", event)


class NotificationService:
	def __init__(self, broker):
		self.broker = broker
		self.events = []
		self.broker.subscribe("PaymentDone", self.on_payment_done)
		self.broker.subscribe("PaymentFailed", self.on_payment_failed)

	async def on_payment_done(self, event):
		self.events.append((event["id"], "COMPLETED"))

	async def on_payment_failed(self, event):
		self.events.append((event["id"], "FAILED"))


# Tests
@pytest.mark.asyncio
async def test_choreography_success():
	broker = AsyncBroker()

dedup = DedupStore()
	order_svc = OrderService(broker)
	inv = InventoryService(broker, dedup)
	pay = PaymentService(broker, dedup)
	notif = NotificationService(broker)

	order = {"id": "C-1", "sku": "SKU-1", "amount": 100}
	await order_svc.create_order(order)
	# small sleep to let tasks run
	await asyncio.sleep(0.2)
	assert ("C-1", "COMPLETED") in notif.events


@pytest.mark.asyncio
async def test_choreography_inventory_failure():
	broker = AsyncBroker()

dedup = DedupStore()
	order_svc = OrderService(broker)
	inv = InventoryService(broker, dedup)
	pay = PaymentService(broker, dedup)
	notif = NotificationService(broker)

	order = {"id": "C-2", "sku": "SKU-FAIL", "amount": 50}
	await order_svc.create_order(order)
	await asyncio.sleep(0.2)
	assert ("C-2", "FAILED") in notif.events
```
{% endraw %}`


## Escenario C — Outbox Pattern + Poller (garantía atómica entre DB y broker)

### Descripción
El Outbox Pattern asegura que la escritura de estado y la emisión de eventos se comporten de forma atómica: la aplicación escribe el estado y el evento en la misma transacción (outbox table). Un poller lee la tabla outbox y publica los eventos al broker.

### Código (tests/escenario_c.py)
{% raw %}
```python
import asyncio
import uuid
import pytest

# Simulated DB + Outbox
class InMemoryDB:
	def __init__(self):
		self.orders = {}
		self.outbox = []

	def save_order_and_outbox(self, order, event):
		# atomic by design in this mock
		self.orders[order["id"]] = order
		self.outbox.append(event)

	def fetch_outbox(self):
		items = list(self.outbox)
		return items

	def remove_outbox(self, event):
		self.outbox.remove(event)


class Poller:
	def __init__(self, db, broker):
		self.db = db
		self.broker = broker
		self.running = False

	async def run_once(self):
		items = self.db.fetch_outbox()
		for e in items:
			await self.broker.publish(e["topic"], e["payload"])
			self.db.remove_outbox(e)


class OrderServiceOutbox:
	def __init__(self, db):
		self.db = db

	def create_order(self, user_id, sku, amount):
		order = {"id": str(uuid.uuid4()), "user": user_id, "sku": sku, "amount": amount}
		event = {"topic": "OrderCreated", "payload": order}
		self.db.save_order_and_outbox(order, event)
		return order


class FakeBroker:
	def __init__(self):
		self.received = []

	async def publish(self, topic, payload):
		self.received.append((topic, payload))


# Tests
@pytest.mark.asyncio
async def test_outbox_poller_publishes():
	db = InMemoryDB()
	broker = FakeBroker()
	service = OrderServiceOutbox(db)
	poller = Poller(db, broker)

	order = service.create_order("U1", "SKU-1", 120)
	# Nothing published yet
	assert broker.received == []

	# Run poller
	await poller.run_once()
	assert broker.received[0][0] == "OrderCreated"
	assert broker.received[0][1]["id"] == order["id"]
	# Outbox emptied
	assert db.fetch_outbox() == []
```
{% endraw %}`

## Escenario D — Dead Letter Queue (DLQ) y Retries

### Descripción
Mensajes que fallan repetidamente acaban en una DLQ para inspección manual o re-procesado con lógica específica. Implementamos un broker que soporta reintentos configurables y DLQ.

### Código (tests/escenario_d.py)
{% raw %}
```python
import asyncio
import pytest

class BrokerWithDLQ:
	def __init__(self, retries=3):
		self.handlers = {}
		self.retries = retries
		self.dlq = []

	async def publish(self, topic, event):
		for h in list(self.handlers.get(topic, [])):
			asyncio.create_task(self._invoke_with_retries(h, event))

	async def _invoke_with_retries(self, handler, event):
		attempts = 0
		while attempts < self.retries:
			try:
				await handler(event)
				return
			except Exception:
				attempts += 1
				await asyncio.sleep(0.01)
		# push to DLQ
		self.dlq.append((handler, event))

	def subscribe(self, topic, handler):
		self.handlers.setdefault(topic, []).append(handler)


# Handler that fails deterministically
async def flaky_handler(event):
	raise Exception("boom")


@pytest.mark.asyncio
async def test_dlq_after_retries():
	broker = BrokerWithDLQ(retries=2)
	broker.subscribe("T", flaky_handler)
	await broker.publish("T", {"x": 1})
	# wait for tasks
	await asyncio.sleep(0.1)
	assert len(broker.dlq) == 1


# Handler that succeeds on second attempt (idempotent)
state = {"count": 0}
async def sometimes_success(event):
	state["count"] += 1
	if state["count"] < 2:
		raise Exception("temporary")
	return True


@pytest.mark.asyncio
async def test_retry_succeeds():
	broker = BrokerWithDLQ(retries=3)
	broker.subscribe("S", sometimes_success)
	await broker.publish("S", {"x": 1})
	await asyncio.sleep(0.1)
	assert len(broker.dlq) == 0
```
{% endraw %}`

## Buenas prácticas incluidas en los tests
- Idempotencia: deduplicadores y keys en eventos.
- Outbox Pattern para evitar pérdidas entre DB y Broker.
- Retries con backoff (simplificado) y DLQ.
- Compensaciones reversibles para sagas orquestadas.
- Pruebas asíncronas con `pytest-asyncio` para simular concurrencia real.

---

## Extensiones sugeridas
- Añadir simulación de latencias de red y particionamientos (chaos testing).
- Integrar con brokers reales (RabbitMQ, Kafka) y usar Docker Compose para pruebas de integración.
- Añadir métricas y observabilidad (traces, logs estructurados, prometheus mock).
- Generar diagramas de secuencia para cada test utilizando PlantUML.

---

## Referencias
- Enterprise Integration Patterns (Hohpe & Woolf)
- Saga Pattern
- Outbox Pattern
- Event Driven Architecture

