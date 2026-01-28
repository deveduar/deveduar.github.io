---
date: 2025-05-19 01:12
title: DDD Domain-Driven Design
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: "true"
category: Computer Science
tags:
  - DDD
  - arquitectura
---
# DDD Domain-Driven Design

## Conceptos fundamentales

El **Domain-Driven Design (DDD)** es una metodología para diseñar software enfocada en el **dominio del problema**, es decir, en el conocimiento y las reglas que definen la actividad principal de la organización. Su objetivo es crear sistemas **modulares, mantenibles y alineados con el negocio**.

El corazón de DDD es el **modelo del dominio**, una representación conceptual del conocimiento que el software manipula. Este modelo se expresa en el **lenguaje ubicuo (ubiquitous language)**, compartido entre desarrolladores y expertos del dominio.

DDD propone una **arquitectura en capas o hexagonal**, que separa el dominio de las dependencias técnicas y facilita la evolución del sistema.

## Elementos principales del dominio

- **Entidad (Entity)**  
	Representa un objeto con identidad propia, que se mantiene a lo largo del tiempo.  
	Ejemplo: `Cliente`, `Pedido`, `Producto`.
- **Objeto de Valor (Value Object)**  
	Define un concepto que se identifica por sus atributos, no por una identidad única.  
	Ejemplo: `Dirección`, `Dinero`, `CoordenadasGPS`.
- **Agregado (Aggregate)**  
	Conjunto coherente de entidades y objetos de valor que se tratan como una unidad.  
	El **Aggregate Root** controla las modificaciones internas.  
	Ejemplo: `Pedido` como agregado con `LíneaDePedido`.
- **Repositorio (Repository)**  
	Proporciona una abstracción para acceder a los agregados.  
	Permite guardar y recuperar entidades del almacenamiento persistente.
- **Servicio de Dominio (Domain Service)**  
	Encapsula lógica del dominio que no pertenece a una entidad u objeto de valor específico.
- **Evento de Dominio (Domain Event)**  
	Representa algo que sucedió dentro del dominio que tiene relevancia para otros componentes.

## Arquitectura hexagonal

También llamada **puertos y adaptadores**, esta arquitectura separa la lógica del dominio (núcleo) de las dependencias externas (infraestructura).  
El dominio se comunica con el exterior a través de **puertos (interfaces)** y estos se implementan mediante **adaptadores**.

- **Núcleo del dominio (Core)**  
	Contiene entidades, agregados, objetos de valor, servicios y eventos.
- **Aplicación**  
	Coordina casos de uso y orquesta las interacciones entre el dominio y la infraestructura.
- **Infraestructura**  
	Implementa persistencia, API, mensajería, o cualquier dependencia técnica.
- **Adaptadores de entrada/salida**  
	Transforman las peticiones externas en llamadas a los casos de uso, y viceversa.

## Ejemplo de estructura de carpetas (TypeScript / Java)

{% raw %}
```bash
src/
├── app/
│	├── services/
│	└── use-cases/
├── domain/
│	├── model/
│	│	├── entities/
│	│	├── value-objects/
│	│	└── events/
│	├── repositories/
│	└── services/
├── infrastructure/
│	├── database/
│	├── http/
│	└── adapters/
└── shared/
	├── utils/
	└── config/
```
{% endraw %}`

Esta estructura se alinea con los proyectos de referencia de y facilita la aplicación de los patrones de DDD y arquitectura hexagonal.

## Ejemplo de código: Entidad y Objeto de Valor (TypeScript)

{% raw %}
```typescript
// domain/model/value-objects/Email.ts
export class Email {
	private readonly value: string;

	constructor(value: string) {
		if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			throw new Error("Email inválido");
		}
		this.value = value;
	}

	getValue(): string {
		return this.value;
	}
}

// domain/model/entities/User.ts
import { Email } from "../value-objects/Email";

export class User {
	constructor(
		private readonly id: string,
		private email: Email
	) {}

	changeEmail(newEmail: Email): void {
		this.email = newEmail;
	}

	getEmail(): Email {
		return this.email;
	}
}
```
{% endraw %}

## Ejemplo de código: Servicio de Aplicación

{% raw %}
```typescript
// app/use-cases/CreateUserService.ts
import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/model/entities/User";
import { Email } from "../../domain/model/value-objects/Email";

export class CreateUserService {
	constructor(private readonly repository: UserRepository) {}

	async execute(id: string, email: string): Promise<void> {
		const user = new User(id, new Email(email));
		await this.repository.save(user);
	}
}
```
{% endraw %}

## Beneficios de aplicar DDD

* Separa claramente **reglas de negocio** de la infraestructura.
* Favorece la **evolución del software** sin romper el dominio.
* Crea un **lenguaje compartido** entre desarrolladores y negocio.
* Facilita **testabilidad y mantenimiento**.
* Reduce el **acoplamiento** entre capas.

## Recursos recomendados

* Introducción a DDD y arquitectura hexagonal con un ejemplo de aplicación en Java
* [GitHub - CodelyTV/typescript-ddd-skeleton](https://github.com/CodelyTV/typescript-ddd-skeleton)
* [GitHub - CodelyTV/typescript-ddd-example](https://github.com/CodelyTV/typescript-ddd-example)

# DDD Avanzado y prácticas complementarias

## Bounded Context y Context Mapping

El **Bounded Context** es una frontera explícita donde un modelo de dominio es válido y coherente. Cada contexto puede tener su propio lenguaje ubicuo y reglas.  
La clave está en **evitar un modelo único para toda la organización**, ya que diferentes subdominios pueden requerir distintas estructuras o terminología.

- **Context Mapping** describe cómo se relacionan los distintos bounded contexts entre sí:
	- **Shared Kernel**: comparten un subconjunto de modelos y reglas comunes.
	- **Customer-Supplier**: un contexto depende de otro (proveedor) para obtener datos o servicios.
	- **Conformist**: el contexto consumidor se adapta completamente al modelo del proveedor.
	- **Anti-Corruption Layer (ACL)**: capa que traduce entre modelos para evitar contaminación de conceptos.
	- **Open Host Service / Published Language**: exponen APIs o protocolos estables para la integración.

Representar visualmente los contextos y sus relaciones facilita la **alineación organizativa y técnica**.

## Subdominios y clasificación del dominio

DDD distingue tres tipos de subdominios:
- **Core Domain**: donde reside el mayor valor de negocio; foco principal del diseño y esfuerzo.
- **Supporting Subdomain**: procesos que apoyan el core, pero no son diferenciadores.
- **Generic Subdomain**: funcionalidades comunes y genéricas (autenticación, facturación, etc.) que pueden externalizarse o reutilizarse.

Este análisis permite priorizar el diseño del dominio y definir qué partes merecen aplicar DDD en profundidad.

## DDD estratégico vs. táctico

- **DDD Estratégico**: define la estructura global del sistema, los bounded contexts y las relaciones entre ellos. Se centra en el **modelado organizativo y de alto nivel**.
- **DDD Táctico**: aborda la implementación detallada dentro de un contexto (entidades, agregados, repositorios, servicios, eventos). Se centra en el **modelado de código y componentes**.

Ambos niveles deben alinearse: la estrategia marca las fronteras y la táctica concreta cómo se modela dentro de ellas.

## CQRS y Event Sourcing

El **Command Query Responsibility Segregation (CQRS)** complementa DDD al separar la lectura y la escritura del dominio:
- **Command Side**: maneja acciones que cambian el estado (escritura).
- **Query Side**: maneja consultas y proyecciones optimizadas (lectura).

**Event Sourcing** almacena los cambios de estado como una secuencia de eventos en lugar de una instantánea. Cada evento representa una modificación del dominio, permitiendo reconstruir el estado actual.

Ventajas:
- Historial completo y auditable del sistema.
- Posibilidad de reproducir o reconstruir estados.
- Escalabilidad mediante suscripción a eventos.

## Domain Events y Event Bus

Los **eventos de dominio** capturan hechos relevantes que ocurren dentro del dominio.  
Se publican en un **Event Bus** que permite reaccionar a ellos de forma desacoplada, por ejemplo:
- Notificar otros agregados.
- Actualizar proyecciones (CQRS).
- Comunicar microservicios.

Ejemplo (simplificado):

{% raw %}
```typescript
export class UserCreatedEvent {
	constructor(public readonly userId: string, public readonly email: string) {}
}

// Infraestructura
eventBus.publish(new UserCreatedEvent("123", "user@example.com"));
```
{% endraw %}`

## Integración con microservicios

DDD encaja naturalmente con arquitecturas de microservicios:

* Cada **bounded context** puede evolucionar como un **microservicio independiente**.
* Se minimiza el acoplamiento mediante **ACLs** y **eventos de integración**.
* Los servicios mantienen su propio modelo y base de datos.

Principios clave:

* **Autonomía**: cada servicio controla su ciclo de vida y persistencia.
* **Comunicación por eventos o contratos explícitos**.
* **Consistencia eventual** en lugar de transacciones distribuidas.

## Implementación práctica

En proyectos reales:

* Se comienza con **mapas de contexto** y **descubrimiento de dominios** con expertos del negocio.
* Se refina el **lenguaje ubicuo** y los **modelos de entidades**.
* Se aplican **pruebas de aceptación orientadas al dominio (BDD)** para validar comportamientos.
* Se documenta cada contexto con **diagramas de flujo de eventos** y **casos de uso**.

## Herramientas y patrones complementarios

* **EventStorming**: técnica visual para descubrir eventos y flujos del dominio.
* **Hexagonal Testing**: pruebas que validan los puertos sin depender de adaptadores reales.
* **Domain-Driven File Structure**: organizar código por dominio, no por tipo de componente.
* **Factory Pattern**: crea entidades complejas asegurando invariantes del dominio.
* **Specification Pattern**: encapsula reglas de negocio reutilizables.

## Recursos adicionales

* *Domain-Driven Design: Tackling Complexity in the Heart of Software* – Eric Evans
* *Implementing Domain-Driven Design* – Vaughn Vernon
* *Domain Modeling Made Functional* – Scott Wlaschin
* Introducción a DDD y arquitectura hexagonal con un ejemplo de aplicación en Java
* [GitHub - CodelyTV/typescript-ddd-example](https://github.com/CodelyTV/typescript-ddd-example)
* [GitHub - CodelyTV/typescript-ddd-skeleton](https://github.com/CodelyTV/typescript-ddd-skeleton)

# DDD: temas avanzados y extensiones prácticas

## Invariantes del dominio

Las **invariantes** son reglas que deben mantenerse siempre válidas dentro del dominio. Se aplican principalmente dentro de los **agregados**, garantizando la consistencia interna.  
Ejemplo: un pedido no puede confirmarse si no tiene líneas de producto o si su total es negativo.

Formas de implementar invariantes:
- Validación dentro de métodos del agregado.
- Uso de **objetos de valor** que garantizan consistencia en su creación.
- **Eventos compensatorios** si una operación falla.

Las invariantes bien definidas ayudan a mantener un **modelo robusto**, resistente a estados inconsistentes o acciones inválidas.

## Factories y Builders en DDD

Cuando la creación de entidades es compleja o requiere validaciones múltiples, se recomienda usar:
- **Factory Method / Domain Factory**: encapsula la lógica de construcción y asegura que el objeto creado sea válido.
- **Builder Pattern**: facilita la creación de objetos complejos paso a paso sin violar las invariantes.

Esto evita que el dominio dependa de constructores extensos y mantiene la semántica clara.

## Patrón Specification

El **Specification Pattern** encapsula condiciones de negocio reutilizables y combinables, separando las reglas del código de aplicación.

Ejemplo (TypeScript):

{% raw %}
```typescript
export interface Specification<T> {
	isSatisfiedBy(candidate: T): boolean;
}

export class ActiveUserSpecification implements Specification<User> {
	isSatisfiedBy(user: User): boolean {
		return user.isActive() && user.getEmail().includes("@");
	}
}
```
{% endraw %}`

Permite combinar reglas: `activeUsers.and(hasValidEmail)`.

## Anti-Corruption Layer (ACL) detallado

La **ACL** protege el dominio de depender directamente de sistemas externos o modelos ajenos.
Actúa como un traductor que convierte datos, comandos o eventos entre contextos.

Estructura típica:

* **Translator** o **Mapper**: adapta objetos entre modelos.
* **Facade**: punto de entrada controlado a la capa externa.
* **Adapter**: implementa interfaces internas usando clientes externos.

Beneficios:

* Mantiene el dominio puro y coherente.
* Permite reemplazar integraciones sin modificar el núcleo.
* Evita el “modelo contaminado” por dependencias ajenas.

## Modular Monolith y DDD

No siempre es necesario usar microservicios. El **monolito modular** aplica principios de DDD dentro de una única aplicación:

* Cada bounded context se implementa como un **módulo aislado** con sus propias dependencias.
* Comunicación entre módulos mediante **interfaces públicas** o **eventos internos**.
* Requiere **disciplina arquitectónica** para evitar el acoplamiento accidental.

Ventaja: mantiene simplicidad operativa sin perder separación conceptual.

## Testing orientado al dominio

DDD impulsa pruebas enfocadas en comportamientos, no en implementación:

* **Pruebas de dominio (unitarias)**: validan reglas e invariantes del modelo.
* **Pruebas de aplicación (integración)**: validan la orquestación de casos de uso.
* **Pruebas de contrato**: aseguran compatibilidad entre bounded contexts o microservicios.
* **Test de aceptación (BDD)**: conectan lenguaje ubicuo con escenarios reales del negocio.

El énfasis está en verificar **qué hace el sistema** y **por qué**, no cómo lo hace.

## Event-Driven Architecture y DDD

El diseño dirigido por eventos se alinea con DDD cuando los **eventos de dominio** se convierten en **eventos de integración**.
El flujo típico:

1. Ocurre un evento dentro del dominio.
2. Se publica en un bus de eventos.
3. Otros contextos reaccionan asíncronamente.

Ventajas:

* Alta escalabilidad y desacoplamiento.
* Comunicación natural entre contextos.
* Implementación sencilla de patrones como **Saga** o **Process Manager**.

## Sagas y Process Managers

Las **Sagas** coordinan procesos de larga duración entre distintos contextos o servicios.
En lugar de usar transacciones distribuidas, cada paso se ejecuta de forma local y, si falla, se desencadenan **acciones compensatorias**.

Diferencias:

* **Saga**: enfoque más declarativo, usado en flujos de negocio.
* **Process Manager**: componente explícito que orquesta eventos y comandos.

Ambos aseguran **consistencia eventual** y trazabilidad del proceso completo.

## Domain Events vs. Integration Events

* **Domain Event**: interno al contexto; comunica hechos dentro del dominio.
* **Integration Event**: expone información relevante a otros contextos o sistemas externos.

Ejemplo:

* Domain Event: `OrderPaid`.
* Integration Event: `PaymentProcessed`.

La separación evita acoplar la lógica interna con la integración.

## Domain-Driven UI y Frontend orientado al dominio

El enfoque DDD también puede trasladarse al **frontend**:

* Los componentes UI se diseñan según el **lenguaje ubicuo**.
* La capa de presentación trabaja con **casos de uso**, no con APIs genéricas.
* Los **DTOs o ViewModels** se generan desde los **eventos del dominio** o **proyecciones CQRS**.

Esto favorece una interfaz coherente con el modelo de negocio.

## Migración progresiva a DDD

Adoptar DDD puede hacerse gradualmente:

1. Identificar áreas críticas del negocio.
2. Introducir **ubiquitous language** y **event storming**.
3. Refactorizar partes del código hacia **bounded contexts**.
4. Implementar **repositorios**, **eventos** y **servicios de dominio**.
5. Reorganizar carpetas y dependencias hacia una **estructura modular**.

Beneficio: se gana claridad y mantenibilidad sin una reescritura total del sistema.

## Métricas de calidad del dominio

Para evaluar la madurez del diseño DDD:

* **Complejidad ciclomática del dominio**: baja y controlada.
* **Número de invariantes violadas**: mínimo.
* **Aislamiento de contextos**: sin dependencias cruzadas directas.
* **Frecuencia de refactorización**: alta en el core, menor en subdominios.
* **Velocidad de evolución del modelo**: alineada con los cambios del negocio.

## Conclusión y síntesis práctica

DDD no es solo un patrón técnico, sino una forma de pensar el software **en torno al conocimiento del negocio**.
Su poder radica en modelar, comunicar y evolucionar sistemas complejos de forma sostenible.
Combinado con **arquitectura hexagonal**, **CQRS**, **eventos** y **estrategias de contexto**, proporciona una base sólida para sistemas escalables, mantenibles y centrados en el dominio real.

## Recursos complementarios

* *Patterns, Principles, and Practices of Domain-Driven Design* – Scott Millett
* *Learning Domain-Driven Design* – Vlad Khononov
* *Implementing Event-Driven Microservices Architecture* – Adam Bellemare
* [DDD-CQRS-ES Example by Kamil Grzybek](https://github.com/kgrzybek/modular-monolith-with-ddd)
* [EventStorming by Alberto Brandolini](https://www.eventstorming.com)

# DDD: Uso práctico, ejemplos de código y casos de uso

## Objetivo

Esta nota muestra cómo aplicar los principios de [DDD Domain-Driven Design](/computer%20science/ddd-domain-driven-design/) y Arquitectura Hexagonal en un entorno real. Incluye ejemplos de código, patrones tácticos y casos de uso completos, especialmente útiles para proyectos con separación clara entre **dominio**, **aplicación** e **infraestructura**.

---

## Caso de uso: Gestión de pedidos en un e-commerce

**Escenario:**  
Una aplicación debe permitir crear pedidos, añadir productos y confirmar el pedido.  
El dominio debe garantizar:
- No se puedan añadir productos duplicados.
- No se confirme un pedido vacío.
- El total se calcule automáticamente.
- Se emita un **evento de dominio** al confirmar el pedido.

---

## Estructura de proyecto

{% raw %}
```bash
src/
├── app/
│	└── use-cases/
├── domain/
│	├── model/
│	│	├── entities/
│	│	├── value-objects/
│	│	└── events/
│	├── repositories/
│	└── services/
├── infrastructure/
│	├── database/
│	└── adapters/
└── shared/
	└── utils/
```
{% endraw %}`

---

## Entidades y Objetos de Valor

### Value Object: ProductItem

{% raw %}
```typescript
// domain/model/value-objects/ProductItem.ts
export class ProductItem {
	constructor(
		private readonly id: string,
		private readonly name: string,
		private readonly price: number
	) {
		if (price <= 0) throw new Error("El precio debe ser positivo");
	}

	getId(): string {
		return this.id;
	}

	getPrice(): number {
		return this.price;
	}
}
```
{% endraw %}

### Entity: Order

{% raw %}
```typescript
// domain/model/entities/Order.ts
import { ProductItem } from "../value-objects/ProductItem";
import { OrderConfirmedEvent } from "../events/OrderConfirmedEvent";

export class Order {
	private items: ProductItem[] = [];
	private confirmed = false;

	constructor(private readonly id: string) {}

	addItem(item: ProductItem): void {
		if (this.items.some(i => i.getId() === item.getId())) {
			throw new Error("Producto ya añadido al pedido");
		}
		this.items.push(item);
	}

	getTotal(): number {
		return this.items.reduce((sum, item) => sum + item.getPrice(), 0);
	}

	confirm(): OrderConfirmedEvent {
		if (this.items.length === 0) throw new Error("No se puede confirmar un pedido vacío");
		this.confirmed = true;
		return new OrderConfirmedEvent(this.id, this.getTotal());
	}

	isConfirmed(): boolean {
		return this.confirmed;
	}
}
```
{% endraw %}

---

## Evento de Dominio

{% raw %}
```typescript
// domain/model/events/OrderConfirmedEvent.ts
export class OrderConfirmedEvent {
	constructor(
		public readonly orderId: string,
		public readonly total: number
	) {}
}
```
{% endraw %}

---

## Repositorio del Dominio

{% raw %}
```typescript
// domain/repositories/OrderRepository.ts
import { Order } from "../model/entities/Order";

export interface OrderRepository {
	save(order: Order): Promise<void>;
	findById(id: string): Promise<Order | null>;
}
```
{% endraw %}

---

## Caso de uso: Crear y confirmar pedido

{% raw %}
```typescript
// app/use-cases/CreateAndConfirmOrder.ts
import { OrderRepository } from "../../domain/repositories/OrderRepository";
import { ProductItem } from "../../domain/model/value-objects/ProductItem";
import { Order } from "../../domain/model/entities/Order";

export class CreateAndConfirmOrder {
	constructor(private readonly repository: OrderRepository) {}

	async execute(orderId: string, products: { id: string; name: string; price: number }[]) {
		const order = new Order(orderId);
		for (const product of products) {
			order.addItem(new ProductItem(product.id, product.name, product.price));
		}

		const event = order.confirm();
		await this.repository.save(order);

		return event;
	}
}
```
{% endraw %}

---

## Adaptador de Infraestructura (Ejemplo In-Memory)

{% raw %}
```typescript
// infrastructure/adapters/InMemoryOrderRepository.ts
import { OrderRepository } from "../../domain/repositories/OrderRepository";
import { Order } from "../../domain/model/entities/Order";

export class InMemoryOrderRepository implements OrderRepository {
	private orders = new Map<string, Order>();

	async save(order: Order): Promise<void> {
		this.orders.set(order["id"], order);
	}

	async findById(id: string): Promise<Order | null> {
		return this.orders.get(id) || null;
	}
}
```
{% endraw %}

---

## Ejecución de ejemplo

{% raw %}
```typescript
const repository = new InMemoryOrderRepository();
const useCase = new CreateAndConfirmOrder(repository);

(async () => {
	const event = await useCase.execute("order-123", [
		{ id: "p1", name: "Camiseta", price: 25 },
		{ id: "p2", name: "Pantalón", price: 40 },
	]);
	console.log(event); // => OrderConfirmedEvent { orderId: 'order-123', total: 65 }
})();
```
{% endraw %}

---

## Extensiones del caso de uso

1. **Integración con CQRS**
   Se puede emitir el evento `OrderConfirmedEvent` hacia una cola (Kafka, RabbitMQ, etc.) para actualizar una proyección de pedidos confirmados.

2. **Implementación de ACL**
   Si el servicio de facturación usa otro modelo, se introduce una **Anti-Corruption Layer** que traduzca entre el modelo `Order` y el formato requerido por el servicio externo.

3. **Aplicación de Sagas**
   Al confirmar el pedido, una **Saga** podría iniciar el flujo de envío y facturación, asegurando consistencia eventual.

---

## Casos de uso adicionales

* **Cancelación de pedido:**
  Implementar una regla que solo permita cancelar pedidos no enviados.
  Emitir un `OrderCancelledEvent`.

* **Aplicación de cupones:**
  Usar un Value Object `DiscountCoupon` que valide caducidad, tipo y valor.

* **Validación de stock:**
  Implementar un **Domain Service** que consulte disponibilidad antes de confirmar el pedido.

---

## Buenas prácticas

* Los **agregados** deben ser pequeños y con límites claros.
* Las **operaciones de dominio** deben ser atómicas y expresar una intención del negocio.
* Los **eventos de dominio** no deben contener lógica, solo información relevante.
* El **repositorio** no debe filtrar lógica de dominio, solo persistir agregados.
* Evita dependencias circulares entre `app` y `domain`.

---

## Posible integración con frameworks

* **NestJS (TypeScript):** módulos alineados con bounded contexts, usando `@Injectable()` para casos de uso y repositorios.
* **Spring Boot (Java):** uso de `@Service`, `@Repository`, `@DomainEvent` y arquitectura hexagonal mediante interfaces.
* **Symfony (PHP):** separación clara entre `Domain`, `Application` e `Infrastructure` mediante bundles.

---

## Ejemplo de mapeo a base de datos (ORM)

{% raw %}
```typescript
// infrastructure/database/OrderEntity.ts
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("orders")
export class OrderEntity {
	@PrimaryColumn()
	id!: string;

	@Column("jsonb")
	items!: { id: string; name: string; price: number }[];

	@Column()
	total!: number;

	@Column()
	confirmed!: boolean;
}
```
{% endraw %}

El repositorio implementaría la traducción entre `Order` (modelo de dominio) y `OrderEntity` (modelo de persistencia).

---

## Conclusión

Este ejemplo demuestra cómo aplicar DDD en un flujo de negocio real:

* **El dominio** contiene las reglas puras del negocio.
* **La aplicación** coordina los casos de uso.
* **La infraestructura** proporciona implementaciones técnicas.

DDD no se trata solo de estructura, sino de **representar el conocimiento del negocio de forma explícita y evolutiva**.

---

## Recursos relacionados

* [DDD Domain-Driven Design](/computer%20science/ddd-domain-driven-design/)
* Arquitectura Hexagonal
* [GitHub - CodelyTV/typescript-ddd-example](https://github.com/CodelyTV/typescript-ddd-example)
* [GitHub - Kamil Grzybek - Modular Monolith with DDD](https://github.com/kgrzybek/modular-monolith-with-ddd)



