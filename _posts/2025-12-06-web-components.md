---
date: 2025-12-06 18:15
title: Web Components
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Frontend
tags:
  - webcomponents
  - frontend
  - webdevelopment
---
# Web Components  

- Web Components manuales  
- [solid.js](/frontend/solid-js/)  
- [lit](/frontend/lit/)  
- [microfrontend](/frontend/microfrontend/)
## Recursos y documentación
- [MDN - Web Components](https://developer.mozilla.org/es/docs/Web/API/Web_components)
- [webcomponents.org](https://www.webcomponents.org/introduction)
- [Angular Elements & Web Components](https://rafaelneto.dev/blog/introduccion-angular-elements-web-components/)
- [¿Qué son los WebComponents?](https://lenguajejs.com/webcomponents/componentes/que-son-webcomponents/)
- [Web Components – 2. Tu primer Web Component - YouTube](https://youtu.be/Y8Xuxp3cm04)
- [Introducción sin frameworks](https://youtu.be/cdJnn4LloR0)
- [Learn Web Components In 25 Minutes](https://youtu.be/2I7uX8m0Ta0)
- [100DaysAsAFrontendDev](https://github.com/powerhdeleon/100DaysAsAFrontendDev/tree/master)

## Conceptos clave
- **Shadow DOM**: encapsulación de estilos y estructura.
- **Custom Elements**: definición de elementos propios.
- **Templates & Slots**: composición dinámica de contenido.
- **Polyfills**: soporte para navegadores antiguos.
- **`:host` selector**: estilos del contenedor.
- **`inherit`**: propagación de estilos según reglas CSS.
- **Ciclo de vida del Custom Element**:
	- `connectedCallback`
	- `disconnectedCallback`
	- `attributeChangedCallback`
- **Integración con Frameworks**:
	- Solid.js, React, Vue o Angular Elements.
	- Capas de interoperabilidad mediante eventos y props.
## Conceptos clave de Web Components
- **Encapsulación nativa** mediante Shadow DOM.  
- **Custom Elements** para definir etiquetas HTML personalizadas.  
- **Templates & Slots** para estructuras reutilizables.  
- **Reutilización agnóstica** del framework: funcionan en cualquier entorno (React, Vue, Svelte, etc.).  
- **Ciclo de vida propio**: `connectedCallback`, `disconnectedCallback`, `attributeChangedCallback`.  
- **Estilos encapsulados** que evitan colisiones de CSS.  
- **Compatibilidad actual**: soporte moderno estable; algunos polyfills opcionales para navegadores antiguos.

## Ventajas y desventajas
### Ventajas
- Encapsulación robusta y libre de dependencias.
- Carga rápida y eficaz en aplicaciones grandes.
- Alto grado de interoperabilidad.
- Facilita crear design systems compartidos.

### Desventajas
- Curva de aprendizaje mayor sin framework.
- Requiere diseño cuidadoso de API pública.
- Integración con SSR aún más manual según entorno.

## Nuevos conceptos añadidos (2025)
- **Declarative Shadow DOM (DSD)**: permite renderizar Shadow DOM desde HTML estático, útil para SSR.  
- **Constructable Stylesheets**: hojas de estilo que pueden compartirse entre múltiples componentes.  
- **Scoped Custom Element Registries**: define registros locales de componentes evitando colisiones de nombres.  
- **Import Maps**: más usados para cargar componentes sin bundlers.  
- **Adopción en Design Systems** de grandes empresas para neutralidad de framework.

## Arquitectura recomendada para proyectos Web Components
- Carpeta `/components` con un archivo por componente.  
- API pública clara: atributos, propiedades, eventos.  
- Uso de estilos constructables para rendimiento.  
- Documentación con ejemplos mínimos ejecutables.  
- Testing con Web Test Runner o Playwright.

## Patrones comunes
- **Event-driven**: emitir eventos personalizados.  
- **Slots avanzados**: composición flexible.  
- **Pattern Host → Shadow → Light DOM** para delimitar responsabilidades.  
- **Pure component pattern**: componentes con mínima lógica y externos con control del estado.

## Ecosistema relacionado
### Web Components manuales
Explicaciones paso a paso para crear componentes sin frameworks:
- Definición de Custom Elements.  
- Uso de DSD y Shadow DOM.  
- Comunicación entre componentes mediante Custom Events.

### Frameworks que potencian Web Components
Estos frameworks generan Web Components o trabajan bien con ellos.

#### [solid.js](/frontend/solid-js/)
- Solid puede interoperar con Web Components mediante bindings finos.  
- Patrón recomendado: usar Web Components para UI estable y Solid para estado reactivo.  
- Documentación: [SolidJS](https://www.solidjs.com)

#### [lit](/frontend/lit/)
- Lit abstrae la complejidad del Shadow DOM.  
- Ofrece renderizado eficiente y APIs concisas.  
- Documentación: [Lit](https://lit.dev)
-  What is Lit – Lit-
	- Explica la filosofía de Lit, sus ventajas y sus utilidades para construir componentes declarativos, rápidos y con estructura clara.

## Código: Ejemplos esenciales

### Ejemplo: Custom Element básico
{% raw %}
```javascript
class MiElemento extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<p>Hola desde mi componente</p>`;
	}
}
customElements.define('mi-elemento', MiElemento);
```
{% endraw %}`

### Ejemplo: Shadow DOM + estilos encapsulados

{% raw %}
```javascript
class CajaInfo extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<style>
				.box { padding: 1rem; border-radius: 8px; }
			</style>
			<div class="box">
				<slot></slot>
			</div>
		`;
	}
}
customElements.define('caja-info', CajaInfo);
```
{% endraw %}

### Ejemplo: Declarative Shadow DOM (SSR friendly)

{% raw %}
```html
<div>
	<template shadowrootmode="open">
		<style>
			p { color: blue; }
		</style>
		<p>Texto SSR con Shadow DOM</p>
	</template>
</div>
```
{% endraw %}

### Ejemplo: Constructable Stylesheets

{% raw %}
```javascript
const styles = new CSSStyleSheet();
styles.replaceSync(`:host { display: block; color: red; }`);

class BotonRojo extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [styles];
		this.shadowRoot.innerHTML = `<button><slot></slot></button>`;
	}
}
customElements.define('boton-rojo', BotonRojo);
```
{% endraw %}

# Web Components — Expansión de conceptos pendientes  

## Áreas aún no cubiertas (nuevos conceptos sin repetir)
A continuación se amplían **temas avanzados** que no estaban en la nota anterior y que son relevantes para 2025, evitando repetir contenido ya dado.

## Integración con frameworks modernos (2025)
### React 19 y Web Components
- React 19 facilita el manejo de **eventos personalizados** sin wrappers.  
- Los Web Components se recomiendan para **UI estática reutilizable**, mientras React gestiona lógica de estado.  
- Uso de props → atributos: estandarizar nombres en kebab-case.

### Vue 3.5+
- Compatibilidad madura con componentes personalizados.  
- Recomiendan usar **v-model** solo en componentes Vue; para Web Components usar eventos estándar como `input`, `change`.  
- Integración ideal para Design Systems usados en varios proyectos.

### Svelte 5 Runes
- Svelte compila a DOM minimalista: convive perfectamente con Web Components.  
- Se usa `bind:this` para instanciar componentes personalizados.  
- Patrón recomendado: **Svelte maneja el estado, Web Components la representación final compartible**.

## Distribución y empaquetado moderno
### Sin bundlers (2025)
- Uso de **import maps** para gestionar rutas limpias.  
- Publicación con módulos ES nativos → evita builds pesados.  
- Servidores recomendados:  
	- **esm.sh** como CDN  
	- **JSPM Generator** para import maps automáticos.

### Con bundlers modernos
- **Vite 6**: soporte nativo optimizado para Web Components.  
- **esbuild**: compila muy rápido estilos y JS modular.  
- Recomendación: mantener cada componente en un archivo independiente con exportaciones limpias.

## Testing avanzado
### Estrategias recomendadas
- **Unit tests aislados** con Web Test Runner.  
- **Snapshots del Shadow DOM** para validar la estructura encapsulada.  
- **Playwright** para test de interacción real con slots y eventos.  
- Asegurar accesibilidad con **axe-core** sobre el árbol renderizado.

### Ejemplo: test mínimo recomendado
{% raw %}
```javascript
import { expect, fixture } from '@open-wc/testing';

it('renderiza contenido en el slot', async () => {
	const el = await fixture(`<caja-info>Hola</caja-info>`);
	expect(el.shadowRoot.textContent).to.contain('Hola');
});
```
{% endraw %}`

## Accesibilidad aplicada a Web Components

- **Role y ARIA explícitos**, ya que el Shadow DOM no hereda semántica externa.
- Usar `delegatesFocus` para mejorar teclado en componentes interactivos.
- Evitar estilos que oculten el foco.
- Incluir descripciones por defecto en slots cuando el usuario no provee contenido.

## Patrones de comunicación avanzados (sin repetir los básicos)

### EventChannel interno

- Canal de eventos encapsulados para comunicar múltiples instancias del mismo componente.
- Ideal para dashboards o widgets simultáneos.

### Reactive Props Pattern

- Propiedades observadas internamente con setters reactivos.
- Útil cuando un componente tiene API rica y dependencias internas.

### Data Down, Events Up (aplicado a Web Components)

- Flujo recomendado:
    - **Propiedades/atributos** → entrada de datos.
    - **Eventos personalizados** → salida de datos y comunicación hacia fuera.

## Performance profundo

### Técnicas recomendadas 2025

- Reutilización de **Constructable Stylesheets compartidas** para cientos de instancias.
- Uso estratégico del atributo `loading="lazy"` en imágenes internas.
- Reducción del número de nodos en Shadow DOM → preferir estilos globales cuando no sea crítico encapsular.
- Preconexión a recursos externos con `<link rel="preconnect">`.

## SSR + Web Components (visión moderna)

- Mezcla ideal: **Declarative Shadow DOM + import maps + Lit SSR**.
- Render estático del esqueleto HTML → hidratación mínima del componente.
- Útil para SEO y tiempos de First Paint rápidos.

### Ejemplo de estructura SSR

{% raw %}
```html
<card-info>
	<template shadowrootmode="open">
		<style>
			/* estilos críticos */
		</style>
		<section><slot></slot></section>
	</template>
	Contenido inicial del componente
</card-info>
```
{% endraw %}

## Design Systems con Web Components (expansión)

- Estandarizar tokens: colores, tipografías, espaciados, radios.
- Definir un **registro de componentes** y versionado semántico.
- Documentar cada componente con:
    - Atributos
    - Propiedades
    - Eventos
    - Slots
    - Compatibilidad con frameworks

## Internacionalización (i18n)

- No depende del framework → requiere solución manual o librería adicional.
- En 2025, patrón más usado: **atributos de locale + mensajes externos vía JSON**.
- Reemplazo reactivo interno con setters o `MutationObserver`.

## Seguridad aplicada

- Evitar `innerHTML` directo en componentes.
- Usar plantillas con `template` o librerías como Lit que sanitizan por defecto.
- Bloquear estilos externos que puedan romper el Shadow DOM.

## Qué falta por cubrir o expandir

Para completar un conocimiento experto, aún se podría crear notas específicas sobre:

- **Scoped Custom Element Registries** con ejemplos complejos.
- **Microfrontends con Web Components**.
- **Integración avanzada con Lit + SSR**.
- **Performance budgets en Design Systems con componentes nativos**.
- **Comparativa 2025 con frameworks UI (React, Vue, Svelte, Angular)** enfocada en interoperabilidad.

# Fundamentos y Arquitectura de Web Components  

## Objetivo de esta nota  
Fundamentos esenciales y arquitectura recomendada para crear, mantener y escalar sistemas basados en Web Components, evitando repeticiones previas y añadiendo nuevas capas de entendimiento.

## Fundamentos esenciales (2025)
### 1. Custom Elements  
Elementos personalizados registrados en el navegador mediante `customElements.define()`.  
Principios clave:  
- Nombre en **kebab-case**.  
- API clara: atributos, propiedades y eventos.  
- Ciclo de vida completo:  
	- `connectedCallback()`  
	- `disconnectedCallback()`  
	- `attributeChangedCallback()`  
	- `adoptedCallback()`  

### 2. Shadow DOM  
Encapsulación del DOM y estilos.  
Funciones fundamentales:  
- Aislamiento de estilos.  
- Árbol DOM privado.  
- Renderizado predecible.  
- Modo `open` o `closed`.

### 3. Templates & Slots  
Permiten componer estructuras reutilizables.  
Tipos de slots:  
- **Default slot**  
- **Named slot**  
- **Slotting reactivo** mediante actualizaciones del light DOM.

### 4. Declarative Shadow DOM (DSD)  
Evolución clave para SSR y prerender: Shadow DOM definido directamente en HTML estático.  
Permite hidratar componentes sin JavaScript inicial.

### 5. Constructable Stylesheets  
Hojas de estilo reutilizables entre componentes sin duplicación.  
Beneficios:  
- Mejor rendimiento.  
- Actualizaciones centralizadas.  
- Perfecto para Design Systems grandes.

## Arquitectura recomendada para sistemas con Web Components
### 1. Organización de archivos  
Estructura base escalable:  
- `/components/`  
	- `button/`  
		- `button.js`  
		- `button.css.js` (opcional con Constructable Stylesheets)  
		- `button.test.js`  
	- `card/`  
	- `modal/`  
- `/utils/`  
- `/styles/` (tokens, variables globales)  

### 2. API del componente  
Cada componente debe definir:  
- **Atributos** → configuración declarativa.  
- **Propiedades** → estado controlado desde JavaScript.  
- **Eventos personalizados** → comunicación con el exterior.  
- **Slots** → composición flexible.  
- **Métodos públicos** opcionales → API avanzada.

### 3. Capas internas del componente
Recomendación de arquitectura interna:

#### Capa 1: Host Element  
- Representa la instancia del componente.  
- Expone atributos y propiedades.

#### Capa 2: Shadow DOM  
- Lógica visual encapsulada.  
- Estructura interna estable.

#### Capa 3: Controlador interno  
- Métodos privados para manejar estado, eventos, efectos.  
- Evita mezclar render con lógica.

#### Capa 4: Estilos  
- Preferencia por Constructable Stylesheets.  
- Tematización adaptada a design tokens.

### 4. Arquitectura de estado
Patrones para manejar datos dentro de Web Components:  
- **Propiedades reactivas** mediante setters.  
- **Observadores de atributos** para sincronización HTML.  
- **Stores externos** (Redux, Zustand, Signals) → Web Components solo renderizan.  
- **Event-driven** para notificar cambios hacia arriba.

### 5. Comunicación entre componentes
Patrones sin repetir los anteriores:  
- **Canal de eventos** para coordinar grupos de componentes.  
- **DOM traversal** para encontrar contenedores lógicos (`closest()`, `querySelector()`).  
- **Context providers externos** (ej. signals del framework host).  

### 6. SSR + Web Components  
Arquitectura moderna:  
- HTML prerenderizado con DSD.  
- Import maps para resolver módulos sin bundler.  
- Inicialización progresiva: solo hidratar componentes interactivos.

### 7. Accesibilidad como parte de la arquitectura  
Buenas prácticas:  
- Roles semánticos explícitos dentro del shadow.  
- Etiquetas ARIA en light DOM cuando se necesite referencia externa.  
- Delegación del foco (`delegatesFocus`).  
- Teclado accesible como parte de la API del componente.

## Arquitecturas de escala
### 1. Design Systems corporativos  
Principios:  
- Web Components como núcleo neutral entre equipos.  
- Tokens centralizados en JSON + Constructable Stylesheets.  
- Versionado semántico para cada elemento.  
- Documentación automatizada con Storybook / VitePress / Zeroheight.

### 2. Microfrontends con Web Components  
Ventajas de esta arquitectura:  
- Aislamiento natural entre equipos.  
- Despliegue independiente.  
- Integración simple con frameworks distintos.  
Piezas clave:  
- Registro de componentes por micro-frontend.  
- Scoped Custom Element Registries para evitar colisiones.  
- Canal de eventos global o store compartido.

### 3. Arquitectura híbrida (framework + Web Components)  
Patrón recomendado:  
- El framework maneja estado.  
- Web Components ofrecen UI estable y reusable.  
- Comunicación mediante eventos personalizados.  
- Evitar crear Web Components que dependan internamente del framework.

## Ejemplos de patrones arquitectónicos

### Patrón: Render Stateless  
{% raw %}
```javascript
class XTag extends HTMLElement {
	set data(value) {
		this._data = value;
		this.render();
	}
	render() {
		this.shadowRoot.innerHTML = `
			<p>${this._data}</p>
		`;
	}
}
```
{% endraw %}`

### Patrón: Componente con Controller interno

{% raw %}
```javascript
class ModalBox extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this._controller = new ModalController(this);
	}
}
```
{% endraw %}

### Patrón: Hoja de estilos compartida

{% raw %}
```javascript
export const sharedStyles = new CSSStyleSheet();
sharedStyles.replaceSync(`:host { display: block; }`);
```
{% endraw %}

## Qué podrías añadir como siguientes notas

* Notas independientes sobre **patrones de diseño**, **SSR avanzado** o **arquitectura para microfrontends**.
* Una nota únicamente de **testing arquitectónico**.
* Una nota sobre **optimización extrema y budgets de performance**.

