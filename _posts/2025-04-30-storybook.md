---
date: 2025-04-30 21:05
title: storybook
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Frontend
tags:
  - storybook
  - CSS
  - components
  - testing
  - documentacion
---
# Storybook


## 📚 Enlaces Relacionados
- [Testing](/testing/testing/)
- [Frontend](/frontend/frontend/)
- Storybook for React & Vite  Storybook docs-react-viterenderer=react
- [Storybook: Frontend workshop for UI development](https://storybook.js.org/)

---

## 🎯 Propósito de Storybook

Storybook es una herramienta enfocada en el **desarrollo aislado de componentes UI**, permitiendo documentar, visualizar y testear cada componente sin depender del backend ni de la aplicación completa.  
Se convierte en un entorno visual donde diseñadores, desarrolladores y testers pueden **probar iteraciones rápidas, revisar estados y validar comportamientos** antes de integrarlos en producción.

---

## 🧱 Ventajas y Casos de Uso

- **Desarrollo en aislamiento:** crear componentes sin necesidad de levantar todo el entorno del frontend.
- **Documentación viva:** cada historia sirve como ejemplo ejecutable y documentación del componente.
- **Testing visual:** detectar cambios inesperados mediante pruebas visuales y snapshots.
- **Integración en pipelines CI/CD:** automatiza validaciones visuales y genera documentación estática.
- **Consistencia de diseño:** facilita la colaboración entre diseño y desarrollo asegurando la coherencia del sistema visual.

---

## ⚙️ Configuración Inicial (React + Vite)

1. Instalar dependencias:

	{% raw %}
```bash
	npm install storybook @storybook/react-vite --save-dev
	```
{% endraw %}

2. Inicializar configuración:

	{% raw %}
```bash
	npx storybook init
	```
{% endraw %}

3. Ejecutar Storybook:

	{% raw %}
```bash
	npm run storybook
	```
{% endraw %}

Esto generará la carpeta `.storybook/` con los archivos de configuración (`main.js`, `preview.js`) y abrirá la UI en el navegador.

---

## 🧩 Creación de Componentes y Stories

Cada componente debe ir acompañado de un archivo `*.stories.tsx` que describa sus variantes y estados.

### Ejemplo: `Button.tsx`

{% raw %}
```tsx
export const Button = ({ label, onClick }: { label: string; onClick?: () => void }) => {
	return <button onClick={onClick}>{label}</button>;
};
```
{% endraw %}`

### Ejemplo: `Button.stories.tsx`

{% raw %}
```tsx
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		label: 'Click me',
	},
};

export const WithAction: Story = {
	args: {
		label: 'Action Button',
		onClick: () => alert('Button clicked!'),
	},
};
```
{% endraw %}

---

## 🧪 Integración con [Testing](/testing/testing/)

Storybook permite **testear componentes UI** directamente en su entorno visual mediante:

* **Play functions:** para pruebas interactivas automáticas.
* **Jest + Storybook Testing Library:** reutilizando stories como fixtures de prueba.
* **Visual Regression Tests (Chromatic, Loki, etc.):** detectar cambios de UI entre commits.

### Ejemplo de prueba con `@storybook/test-runner`

{% raw %}
```bash
npm install @storybook/test-runner --save-dev
```
{% endraw %}

{% raw %}
```bash
npx storybook test
```
{% endraw %}

Esto ejecuta las historias en un entorno headless, validando que los componentes se rendericen correctamente.

---

## 🧭 Buenas Prácticas

* Mantener las stories **simples y declarativas**.
* Usar `args` para controlar propiedades de los componentes.
* Documentar **casos límite y estados visuales** (errores, loading, disabled).
* Integrar con **addons** como:

  * `@storybook/addon-actions`: para visualizar eventos.
  * `@storybook/addon-controls`: para manipular props en tiempo real.
  * `@storybook/addon-a11y`: para verificar accesibilidad.
* Exportar la documentación final como **sitio estático**:

  {% raw %}
```bash
  npm run build-storybook
  ```
{% endraw %}

---

## 🧩 Extensiones y Ecosistema

Storybook cuenta con un amplio ecosistema que se integra con frameworks y herramientas modernas:

* Vite – soporte de bundling rápido.
* React / Vue / Angular / Svelte.
* Chromatic para revisiones visuales en CI/CD.
* Jest y Testing Library para pruebas unitarias.
* Design System para documentar librerías de componentes reutilizables.

---

## 🧭 Conclusión

Storybook es una herramienta clave en entornos frontend modernos para **crear, documentar y testear componentes UI** de forma independiente al backend.
Su integración fluida con Vite, React y herramientas de testing lo convierte en un estándar para **equipos de desarrollo orientados a la calidad, consistencia visual y escalabilidad del diseño**.

# Storybook Avanzado Ecosistema, Testing Visual y Automatización


## 📚 Enlaces Relacionados
- Storybook
- [Testing](/testing/testing/)
- [Frontend](/frontend/frontend/)
- Design System
- CI/CD
- Chromatic
- Visual Regression Testing

---

## 🧭 Visión General

Habiendo cubierto los fundamentos —instalación, configuración, creación de stories, testing básico y addons—, esta nota amplía los **conceptos avanzados** de Storybook:  
cómo integrarlo en pipelines CI/CD, automatizar pruebas visuales, conectar con APIs o sistemas de diseño, y aprovecharlo como **fuente única de verdad del frontend**.

---

## 🧱 Arquitectura de Documentación y Componentes

Storybook no es solo una herramienta de preview, sino una **infraestructura de documentación y validación** de UI.  
Permite estructurar un *Design System viviente*:

- **Composición jerárquica:** agrupa stories por dominios o feature areas.
- **Meta-descripciones tipadas:** gracias a TypeScript y `Meta` de Storybook 7+.
- **Reutilización de stories:** como fixtures o mocks en [Testing](/testing/testing/) y Cypress.

### Ejemplo: Jerarquía de historias

{% raw %}
```

Components/
Inputs/
Button.stories.tsx
Checkbox.stories.tsx
Forms/
LoginForm.stories.tsx
RegistrationForm.stories.tsx
Layouts/
AppShell.stories.tsx

```
{% endraw %}`

---

## ⚙️ Integración con Vite y Next.js

Storybook 7+ soporta renderizado híbrido con Vite y frameworks como Next.js, permitiendo compartir loaders, resolvers y rutas.

### Configuración en `.storybook/main.ts`

{% raw %}
```ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
	stories: ['../src/**/*.stories.@(ts|tsx)'],
};
export default config;
```
{% endraw %}`

### Integración con rutas y hooks de Next.js

Puedes envolver tus componentes en el decorador `NextRouter` mockeado para simular navegación:

{% raw %}
```tsx
import { RouterContext } from 'next/dist/shared/lib/router-context';

export const decorators = [
	(Story) => (
		<RouterContext.Provider value={{ push: console.log }}>
			<Story />
		</RouterContext.Provider>
	),
];
```
{% endraw %}

---

## 🧪 Testing Visual y Automatización CI/CD

### 📸 Revisión Visual con Chromatic

Chromatic permite subir automáticamente las stories a un entorno remoto, ejecutando comparaciones visuales por commit y generando documentación pública.

{% raw %}
```bash
npx chromatic --project-token=<tu_token>
```
{% endraw %}

Beneficios:

* **Snapshots visuales automáticos**.
* **Revisión colaborativa** con comentarios en PRs.
* **Historial de cambios visuales** versionado.

### ⚙️ Ejecución en [GitHub Actions](/devops/github-actions/)

{% raw %}
```yaml
name: Storybook CI
on: [push, pull_request]
jobs:
	build:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v3
			- uses: actions/setup-node@v3
			  with:
			  	node-version: 18
			- run: npm ci
			- run: npm run build-storybook
			- run: npx chromatic --project-token=$CHROMATIC_TOKEN
```
{% endraw %}

---

## 🧩 Integración con Cypress y Testing End-to-End

Storybook puede actuar como **mock de frontend** en pipelines de E2E, eliminando dependencias del backend.

* Se usa el servidor de Storybook como entorno de pruebas.
* Permite montar componentes con **mocks de infraestructura** (APIs, DBs, colas, servicios externos).

### Ejemplo con Cypress:

{% raw %}
```ts
describe('Storybook Components', () => {
	it('renders Button correctly', () => {
		cy.visit('http://localhost:6006/iframe.html?id=components-button--default');
		cy.get('button').contains('Click me').click();
	});
});
```
{% endraw %}

Esto facilita pruebas visuales automatizadas sin levantar la app completa.

---

## 🧰 Mocks, Contextos y Providers

Para componentes dependientes de APIs o stores globales, Storybook puede mockear proveedores:

{% raw %}
```tsx
export const decorators = [
	(Story) => (
		<QueryClientProvider client={queryClientMock}>
			<Story />
		</QueryClientProvider>
	),
];
```
{% endraw %}

También puede integrar herramientas como:

* `msw` (Mock Service Worker) para interceptar peticiones HTTP.
* `faker.js` o `@faker-js/faker` para generar datos sintéticos.
* `zustand` o `redux` con estados iniciales personalizados.

---

## 🧠 Estrategias Avanzadas

* **Storybook como entorno de documentación interna:** integrando MDX, docs personalizados y enlaces entre stories.

* **Monorepos:** cada paquete puede tener su propio Storybook federado o compartido en una raíz.

* **Snapshot Testing con Jest:** importar stories como fixtures para validar props renderizadas.

  {% raw %}
```ts
  import { render } from '@testing-library/react';
  import { Default } from './Button.stories';

  test('renders Button snapshot', () => {
  	const { asFragment } = render(<Default {...Default.args} />);
  	expect(asFragment()).toMatchSnapshot();
  });
  ```
{% endraw %}

* **Mock visual de estados dinámicos:** loading, error, empty, success — documentados explícitamente como stories.

---

## 🌐 Exportación y Hosting

* Generar la documentación estática:

  {% raw %}
```bash
  npm run build-storybook
  ```
{% endraw %}
* Publicar en servicios como:

  * GitHub Pages
  * [Vercel](/cloud/vercel/)
  * Netlify
  * Chromatic

Esto convierte Storybook en un **catálogo visual compartido** para todo el equipo.

---

## 🚀 Conclusión

Storybook no solo es una herramienta de UI, sino una **infraestructura de diseño, pruebas y documentación visual**.
Integrado con testing, mocks y CI/CD, se convierte en un sistema central para equipos frontend modernos, asegurando consistencia, accesibilidad y escalabilidad visual.

> En conjunto con Cypress, Chromatic, Jest, Vite y Design System, Storybook consolida el flujo de trabajo **UI-Driven Development**, permitiendo validar interfaces antes incluso de que existan los endpoints o el backend.


# Storybook Ecosistema Extendido, Performance y Uso en Escenarios Complejos


## 📚 Enlaces Relacionados
- Storybook Avanzado: Ecosistema, Testing Visual y Automatización
- [Testing](/testing/testing/)
- [Frontend](/frontend/frontend/)
- UI-Driven Development
- Design System
- Cypress
- Microfrontends
- Accessibility (a11y)

---

## ⚡ Performance y Optimización en Storybook

Storybook puede volverse pesado a medida que crecen los componentes y addons. Optimizar su rendimiento es esencial en equipos grandes o monorepos.

### Estrategias de Optimización

- **Uso de lazy loading en stories:**  
	Cargar solo las stories requeridas con `import()` dinámico.
- **Exclusión de stories obsoletas:**  
	Definir `stories` en `main.ts` con expresiones controladas (`../src/**/*.stories.@(tsx|mdx)`).
- **División de builds:**  
	Utilizar `--docs` y `--ui` por separado para pipelines más ligeros.
- **Cache persistente de Vite/Webpack:**  
	Acelera recargas en modo desarrollo.
- **StoryStoreV7:**  
	El nuevo formato de almacenamiento que mejora la carga incremental de historias.

---

## 🧬 Integración con Microfrontends y Monorepos

Storybook puede servir como **portal de diseño unificado** en entornos distribuidos.

### Estrategias

- **Storybook Composition:**  
	Permite combinar múltiples Storybooks en uno central, ideal para proyectos con varios repos o equipos.

	{% raw %}
```js
	module.exports = {
		stories: [],
		refs: {
			'core-ui': { url: 'https://core-ui-storybook.vercel.app' },
			'marketing': { url: 'https://marketing-storybook.netlify.app' },
		},
	};
	```
{% endraw %}

- **Nx / Turborepo:**  
	Storybook puede correr en paralelo por paquete, compartiendo configuraciones base.
- **Design Tokens compartidos:**  
	Exponer variables de estilo (colores, tipografía, espaciado) como stories documentadas.

---

## 🧩 Documentación Extendida con MDX y DocsPage

Storybook soporta formato **MDX (Markdown + JSX)** para documentar componentes, flujos y casos de uso directamente en la interfaz.

### Ejemplo básico

{% raw %}
```mdx
import { Button } from './Button';

# Botón
El componente `Button` se usa para acciones primarias en formularios.

<Button label="Guardar" />
```
{% endraw %}`

Esto genera documentación navegable, enriquecida con ejemplos interactivos y notas técnicas.

### Ventajas

* Reemplaza wikis estáticas con documentación visual viva.
* Permite incluir tablas de props, snippets de código y previews inline.
* Se puede sincronizar con fuentes externas (Figma, Confluence, Notion).

---

## 🎨 Integración con Design System y Herramientas de Diseño

Storybook se integra fácilmente con herramientas de diseño para sincronizar los componentes de código con su contraparte visual.

* **Figma Plugin (Design Token Sync):**
  Enlaza stories con componentes de Figma para trazabilidad visual.
* **Zeplin / Zeroheight:**
  Permiten importar stories como documentación viva.
* **Tokens Studio:**
  Automatiza la sincronización de variables de diseño (tokens) entre diseño y código.

### Ejemplo de uso con tokens globales

{% raw %}
```ts
export const parameters = {
	designToken: {
		defaultTab: 'Colors',
		files: ['./src/tokens/colors.json', './src/tokens/spacing.json'],
	},
};
```
{% endraw %}

---

## 🧠 Storybook como Entorno de Prototipado de Interacción

Además de documentar componentes, Storybook puede servir como **sandbox de flujos interactivos**:

* Simulación de **pasos de usuario** (onboarding, formularios, wizard).
* Visualización de **estados globales** (auth, dark mode, error boundaries).
* Validación UX sin depender de un backend real.

### Ejemplo de flujo mockeado

{% raw %}
```tsx
export const WizardFlow = () => {
	const [step, setStep] = useState(1);
	return (
		<div>
			{step === 1 && <StepOne onNext={() => setStep(2)} />}
			{step === 2 && <StepTwo onNext={() => setStep(3)} />}
			{step === 3 && <FinalStep />}
		</div>
	);
};
```
{% endraw %}

---

## 🧰 Integración con Accessibility (a11y)

Storybook es excelente para evaluar **accesibilidad** en etapas tempranas del desarrollo.

### Addons útiles

* `@storybook/addon-a11y`: analiza roles, labels, contraste, estructura semántica.
* `@storybook/addon-interactions`: prueba flujos de teclado, focus, navegación.

### Ejemplo de test visual accesible

{% raw %}
```ts
import { within, userEvent } from '@storybook/testing-library';

export const AccessibleStory = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		await userEvent.tab(); // simula navegación por teclado
		await userEvent.click(canvas.getByRole('button'));
	},
};
```
{% endraw %}

---

## 🧮 Integración con Analítica y Telemetría de UI

Storybook puede registrar **interacciones y métricas visuales** para detectar problemas de UX o degradaciones en el rendimiento de renderizado.

* **Web Vitals** (`CLS`, `LCP`, `FID`) dentro de stories.
* **Addons de rendimiento:** medir FPS, tiempo de render, tamaño del bundle.
* Integración con herramientas como Datadog, Sentry, o New Relic en entornos de testeo visual.

---

## 🧰 Addons Avanzados y Personalizados

Los addons extienden la funcionalidad nativa de Storybook. Se pueden crear personalizados para casos específicos:

* **Addons de data mocking** (GraphQL, REST, sockets).
* **Addons de estado visual dinámico** (Dark mode, RTL).
* **Addons de validación automática de props.**

### Ejemplo: addon personalizado

{% raw %}
```ts
import { addons, types } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';

addons.register('my/custom-addon', () => {
	addons.add('custom/panel', {
		type: types.PANEL,
		title: 'QA Notes',
		render: ({ active, key }) => (
			<AddonPanel active={active} key={key}>
				<div>Notas de QA y validaciones visuales</div>
			</AddonPanel>
		),
	});
});
```
{% endraw %}

---

## 🧩 Storybook + API Mocking + [GraphQL](/backend/graphql/)

Storybook puede emular APIs complejas para testear UI sin backend real:

* Con `msw` (Mock Service Worker) interceptando `fetch` o `axios`.
* Integrando esquemas `GraphQL` mockeados con `graphql-tools`.

### Ejemplo:

{% raw %}
```ts
import { graphql, HttpResponse } from 'msw';

export const handlers = [
	graphql.query('GetUser', () => {
		return HttpResponse.json({ data: { user: { id: '1', name: 'Eduardo' } } });
	}),
];
```
{% endraw %}

Permite probar flujos completos (loading, error, success) directamente en Storybook.

---

## 🌐 Distribución como Librería Interna

Storybook puede actuar como **catálogo de componentes exportable**, generando un **portal compartido** dentro de empresas o equipos:

* Generar documentación estática y publicarla en un dominio interno.
* Integrar autenticación para documentación privada.
* Versionar stories según release del producto.

---

## 🚀 Conclusión Extendida

Storybook ha evolucionado más allá del simple desarrollo UI:
es un **centro de control de calidad visual, diseño y documentación** que integra testing, prototipado, accesibilidad, performance y CI/CD.

> En entornos modernos, Storybook actúa como un **frontend sandbox universal**, conectando el código con el diseño, el testeo y la automatización — un eje central del desarrollo **UI-driven**, escalable y colaborativo.

# Guía de Uso Práctico de Storybook


## 📚 Enlaces Relacionados
- Storybook Avanzado: Ecosistema, Testing Visual y Automatización
- Storybook: Ecosistema Extendido, Performance y Uso en Escenarios Complejos
- [Testing](/testing/testing/)
- [Frontend](/frontend/frontend/)
- UI-Driven Development
- Cypress
- Design System
- Chromatic
- Vite

---

## 🎯 Objetivo

Esta guía práctica te mostrará cómo **instalar, configurar y usar Storybook** paso a paso con ejemplos funcionales, integrando addons, testing visual, documentación en MDX, y mocks de datos.  
Ideal para flujos de desarrollo **UI-driven**, donde los componentes se crean y validan antes de conectar con el backend.

---

## 🚀 1. Instalación y Configuración Inicial

### Paso 1 — Instalar Storybook

{% raw %}
```bash
npm install @storybook/react-vite --save-dev
npx storybook init
```
{% endraw %}`

Esto genera la carpeta `.storybook/` con los archivos principales:

- `main.ts` → configuración del framework y addons.
- `preview.ts` → decoradores globales, estilos, parámetros.

### Paso 2 — Configurar para Vite

`.storybook/main.ts`:

{% raw %}
```ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	stories: ['../src/**/*.stories.@(tsx|mdx)'],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'@storybook/addon-interactions',
	],
};
export default config;
```
{% endraw %}

### Paso 3 — Iniciar el entorno

{% raw %}
```bash
npm run storybook
```
{% endraw %}

Abrirá `http://localhost:6006` con la interfaz interactiva.

---

## 🧱 2. Creación de un Componente UI y su Story

### Ejemplo: Componente `Button.tsx`

{% raw %}
```tsx
type ButtonProps = {
	label: string;
	variant?: 'primary' | 'secondary';
	onClick?: () => void;
	disabled?: boolean;
};

export const Button = ({ label, variant = 'primary', disabled, onClick }: ButtonProps) => {
	const base = 'px-4 py-2 rounded text-white font-medium transition-colors';
	const styles = variant === 'primary'
		? 'bg-blue-600 hover:bg-blue-700'
		: 'bg-gray-600 hover:bg-gray-700';
	return (
		<button className={`${base} ${styles}`} onClick={onClick} disabled={disabled}>
			{label}
		</button>
	);
};
```
{% endraw %}

### Story asociada: `Button.stories.tsx`

{% raw %}
```tsx
import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		label: 'Guardar',
		variant: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		label: 'Cancelar',
		variant: 'secondary',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Deshabilitado',
		disabled: true,
	},
};
```
{% endraw %}

📌 **Resultado:**  
Cada variante del botón puede verse, probarse y modificarse en tiempo real desde el panel de Storybook.

---

## 🧩 3. Documentación Interactiva con MDX

### Ejemplo: `Button.docs.mdx`

{% raw %}
```mdx
import { Meta, Canvas, Story } from '@storybook/blocks';
import { Button } from './Button';

<Meta title="UI/Button Docs" component={Button} />

# Botón — Documentación

El botón es el componente básico para ejecutar acciones.

## Ejemplo Interactivo

<Canvas>
	<Story args={{ label: 'Enviar', variant: 'primary' }} />
</Canvas>

## Variantes

- **Primario:** Acción principal.
- **Secundario:** Acción alternativa.
- **Deshabilitado:** No interactivo, mantiene consistencia visual.
```
{% endraw %}

📘 Permite incluir texto, previews y props en la misma página.

---

## 🧪 4. Testing Visual y Funcional

Storybook integra herramientas de testing visual y automatizado.

### a) Prueba interactiva con `play` function

{% raw %}
```tsx
import { within, userEvent } from '@storybook/testing-library';

export const Interactive: Story = {
	args: { label: 'Click me' },
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		await userEvent.click(button);
	},
};
```
{% endraw %}

💡 Ideal para testear flujos UI sin levantar toda la app.

### b) Integración con Chromatic

{% raw %}
```bash
npm install chromatic --save-dev
npx chromatic --project-token=<tu_token>
```
{% endraw %}

Sube tus stories para revisión visual automática y control de versiones UI.

---

## 🔧 5. Uso de Decoradores Globales y Theming

### Decoradores en `.storybook/preview.ts`

{% raw %}
```tsx
import '../src/styles/globals.css';
import { ThemeProvider } from '../src/context/ThemeContext';

export const decorators = [
	(Story) => (
		<ThemeProvider>
			<div className="p-4 bg-gray-100 min-h-screen">
				<Story />
			</div>
		</ThemeProvider>
	),
];
```
{% endraw %}

📌 Permite aplicar temas, estilos globales o providers a todas las stories.

---

## 🧠 6. Mock de APIs y Estados con `msw`

Instalar y configurar **Mock Service Worker**:

{% raw %}
```bash
npm install msw --save-dev
```
{% endraw %}

{% raw %}
```ts
// .storybook/preview.ts
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { graphql, HttpResponse } from 'msw';

initialize();

export const decorators = [mswDecorator];

export const parameters = {
	msw: {
		handlers: [
			graphql.query('GetUser', () => {
				return HttpResponse.json({
					data: { user: { id: '1', name: 'Eduardo' } },
				});
			}),
		],
	},
};
```
{% endraw %}

🎯 Resultado: tus componentes pueden simular respuestas API sin backend real.

---

## 🧩 7. Casos Reales: Formularios y Listas

### Ejemplo: `LoginForm.tsx`

{% raw %}
```tsx
export const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert(`Login: ${email}`);
	};
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2">
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="border p-2 rounded"
			/>
			<input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className="border p-2 rounded"
			/>
			<Button label="Iniciar sesión" />
		</form>
	);
};
```
{% endraw %}

### `LoginForm.stories.tsx`

{% raw %}
```tsx
import { LoginForm } from './LoginForm';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LoginForm> = {
	title: 'Forms/LoginForm',
	component: LoginForm,
};
export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
```
{% endraw %}

✅ Permite probar interactividad, validaciones y diseño sin backend.

---

## 🧩 8. Integración con Cypress para Testing E2E de Stories

### Ejemplo: `cypress/e2e/storybook.cy.ts`

{% raw %}
```ts
describe('Storybook Component Testing', () => {
	it('renders the Primary Button story', () => {
		cy.visit('http://localhost:6006/iframe.html?id=ui-button--primary');
		cy.get('button').contains('Guardar').should('be.visible');
	});
});
```
{% endraw %}

📦 Usa el entorno Storybook como sandbox para testear UI sin dependencia del resto de la app.

---

## 🧮 9. Build y Deploy de Storybook

### Generar versión estática

{% raw %}
```bash
npm run build-storybook
```
{% endraw %}

### Desplegar en [Vercel](/cloud/vercel/) o Netlify

{% raw %}
```bash
npx vercel deploy storybook-static
```
{% endraw %}

También puede integrarse a CI/CD (e.g. GitHub Actions + Chromatic).

---

## 🌟 10. Buenas Prácticas

- Agrupa stories por dominio (UI/, Forms/, Layouts/).
- Documenta props importantes y casos límite.
- Usa `args` para mantener stories dinámicas y reusables.
- Añade stories para todos los estados: _loading, empty, error, success_.
- Integra addons clave:
    - `addon-a11y` (accesibilidad)
    - `addon-controls` (prop testing)
    - `addon-actions` (eventos)
    - `addon-interactions` (testing UI)

---

## 🧭 Conclusión

Storybook permite un desarrollo **modular, visual y colaborativo** del frontend.  
Combinado con Vite, Chromatic, Cypress y [MSW Mocks service worker](/testing/msw-mocks-service-worker/), se convierte en una herramienta completa para diseñar, documentar, testear y mantener componentes de UI escalables.

> 🔹 _Desarrollar interfaces ya no depende de endpoints o backend: con Storybook, cada componente puede vivir, probarse y documentarse en aislamiento, acelerando el desarrollo y asegurando consistencia visual en todo el producto._

# Glosario de Conceptos Storybook

## 🧩 Conceptos Fundamentales

- **Storybook**  
	Entorno de desarrollo aislado para componentes UI. Permite documentar, visualizar y probar componentes sin necesidad de ejecutar toda la aplicación.

- **Historia (Story)**  
	Representa un estado o variación de un componente. Cada historia muestra una configuración distinta (props, estilos, etc.).

- **CSF (Component Story Format)**  
	Formato estándar basado en ES Modules para definir historias de forma legible y compatible con el ecosistema de Storybook.

- **Canvas**  
	Zona principal de visualización donde se renderizan los componentes interactivos dentro de Storybook.

- **Docs tab**  
	Sección generada automáticamente o personalizada que muestra documentación, ejemplos y controles de un componente.

- **MDX (Markdown + JSX)**  
	Formato que permite mezclar documentación escrita en Markdown con componentes React, ideal para crear documentación viva.

- **Addon**  
	Plugins que amplían las capacidades de Storybook (por ejemplo: controles, accesibilidad, testing, viewport, etc.).

- **Controls**  
	Addon que permite manipular dinámicamente las props del componente desde la interfaz de Storybook.

- **Decorators**  
	Funciones que envuelven las historias para aplicar contextos, estilos, providers o configuraciones globales.

- **Parameters**  
	Configuraciones globales o por historia que modifican el comportamiento de Storybook (fondo, acciones, layout, viewport...).

- **Preview.js / preview.ts**  
	Archivo donde se configuran decoradores, parámetros y estilos globales aplicados a todas las historias.

- **Manager.js / manager.ts**  
	Configura la interfaz del panel lateral, temas y branding del entorno Storybook.

- **Storybook DocsPage**  
	Genera automáticamente una página de documentación para cada componente basada en sus historias y metadatos.

---

## ⚙️ Integraciones Clave

- **React + Vite**  
	Storybook puede integrarse con entornos React renderizados por Vite para desarrollo rápido, hot-reload y compatibilidad con TypeScript.

- **Testing y Mocking**  
	Integración con frameworks como Jest, Vitest o Playwright para pruebas visuales, unitarias y de regresión visual (con herramientas como Chromatic o Loki).

- **Integración CI/CD**  
	Permite generar y desplegar el Storybook como documentación viva en servidores o CDNs (por ejemplo, GitHub Pages, Netlify o Vercel).

- **Docs automáticos**  
	Storybook puede extraer automáticamente la documentación de props y tipos desde TypeScript y JSDoc, sincronizando la documentación con el código fuente.

---

## 🧠 Conceptos Avanzados

- **Visual Regression Testing**  
	Comparación automática de capturas de pantalla de componentes para detectar diferencias visuales entre versiones.

- **Interactions Testing**  
	Permite simular eventos de usuario (click, input, hover) directamente dentro de Storybook con herramientas como `@storybook/test-runner`.

- **Mock de Datos y API**  
	Simulación de datos con herramientas como `MSW (Mock Service Worker)` para reproducir estados del backend sin depender de servidores reales.

- **Theming y Custom UI**  
	Personalización del panel de Storybook mediante configuración de temas, tipografías y colores corporativos.

- **Storybook Composition**  
	Permite combinar múltiples Storybooks (por ejemplo, de distintos microfrontends) en una sola vista unificada.

- **DocsPage personalizada**  
	Creación de documentación específica usando MDX, mezclando componentes interactivos, diagramas y ejemplos de código.

---

## 🧰 Ejemplo Práctico

### 📁 Estructura básica de historias

{% raw %}
```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		label: 'Primary Button',
		variant: 'primary',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled',
		variant: 'primary',
		disabled: true,
	},
};
```
{% endraw %}`

---

### 🧠 Ejemplo con Decorators y Mock de Contexto

{% raw %}
```tsx
// UserCard.stories.tsx
import { UserCard } from './UserCard';
import { UserContext } from '../context/UserContext';

export default {
	title: 'Components/UserCard',
	component: UserCard,
	decorators: [
		(Story) => (
			<UserContext.Provider value={{ name: 'Eduardo', role: 'Admin' }}>
				<Story />
			</UserContext.Provider>
		),
	],
};
```
{% endraw %}

---

### 🧩 Ejemplo con Testing Integrado

{% raw %}
```tsx
// Button.test.ts
import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';
import { render, screen } from '@testing-library/react';

const { Primary } = composeStories(stories);

test('Renderiza el botón con texto correcto', () => {
	render(<Primary />);
	expect(screen.getByText('Primary Button')).toBeInTheDocument();
});
```
{% endraw %}

---

## 🪄 Buenas Prácticas

- Mantén cada componente con su historia en el mismo directorio.
- Usa nombres coherentes en `title` (por ejemplo, `Components/Buttons/Primary`).
- Aprovecha los `args` para generar variaciones dinámicas sin duplicar código.
- Usa `CSF3` y `StoryObj` para tipado seguro en TypeScript.
- Documenta con MDX las dependencias, props y ejemplos reales.
- Integra Storybook en tu pipeline para garantizar consistencia visual.

---

## 🧭 Recursos Recomendados

- [Storybook Docs oficiales](https://storybook.js.org/docs)
- [Integración con Vite y React](https://storybook.js.org/docs/react/get-started/vite)
- [Addon Interactions](https://storybook.js.org/docs/react/writing-tests/interaction-testing)
- [Visual Testing con Chromatic](https://www.chromatic.com/)
- [Mocking con MSW](https://mswjs.io/)

---