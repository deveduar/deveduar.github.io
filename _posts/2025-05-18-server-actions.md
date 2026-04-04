---
date: 2025-05-18 04:01
title: server actions
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Backend
tags:
  - backend
  - server
  - server_actions
---
# Server Actions

## Conceptos Clave Relacionados
- [Backend](/backend/backend/)
- [api](/backend/api/)
- [GraphQL](/backend/graphql/)
- [react](/frontend/react/)
	- React Hook Form
- [nextjs](/frontend/nextjs/)
- Server Components
- Slug

---

## Qué son las Server Actions
Las **Server Actions** son funciones ejecutadas **únicamente en el servidor** dentro de aplicaciones basadas en [nextjs](/frontend/nextjs/). Permiten manejar lógica de negocio, validación, inserciones o consultas a bases de datos sin exponer endpoints REST/[api](/backend/api/) explícitos.  
Su propósito principal es unir de forma directa la interfaz (componentes de [react](/frontend/react/)) con la capa de servidor, eliminando llamadas adicionales y reduciendo complejidad.

### Ventajas Principales
- Evitan escribir rutas de [api](/backend/api/) innecesarias.
- Reducen la superficie de ataque al no exponer endpoints.
- Acceden directamente a recursos de servidor (DB, archivos, tokens privados).
- Se integran de forma nativa con Server Components.
- Permiten streaming, revalidación y actualización selectiva de UI.
- Mejoran la DX simplificando el manejo de formularios (especialmente con React Hook Form).

---

## Integración con Server Components
Las Server Actions funcionan mejor cuando se combinan con **Server Components**:
- El componente se renderiza en el servidor.
- La acción se ejecuta también en el servidor.
- No se añade JS innecesario al cliente.
- El estado visible en el cliente se refresca de manera coherente mediante técnicas como `revalidatePath` o `revalidateTag`.

**Beneficios:**
- Menos viajes cliente-servidor.
- Mejor rendimiento por SSR nativo y cero bundle adicional.
- Encapsulación estricta de la lógica del [Backend](/backend/backend/) dentro de UI declarativa.

---

## Uso con Slugs
Un **slug** es un identificador legible incluido en la URL para localizar recursos (ej. `/producto/camiseta-algodon`).  
En el contexto de Server Actions:
- Sirve para identificar dinámicamente qué datos cargar o modificar.
- Encaja con los segmentos dinámicos de [nextjs](/frontend/nextjs/) (`[slug]/page.js`).
- Una acción puede recibir el slug como parámetro para procesar lógica específica basada en rutas.

Ejemplos de usos habituales:
- Buscar un artículo mediante `slug`.
- Editar un post asociado a ese `slug`.
- Validar rutas o permisos en base a identificadores semánticos.

---

## Integración con GraphQL
Cuando utilizas [GraphQL](/backend/graphql/) junto a Server Actions:
- La acción puede ejecutar queries/mutations sin exponer claves ni endpoints públicos.
- Se mantiene la tipificación fuerte del esquema GraphQL.
- Permite desacoplar el fetch desde el cliente y mantenerlo en el servidor.
- Reduce carga del bundle eliminando clientes GraphQL en el navegador.

Patrones comunes:
- `serverAction -> graphqlMutation -> revalidatePath`
- `serverAction -> graphqlQuery -> hydrate server component`

---

## Integración con React y React Hook Form
### Con React
- Una Server Action puede ser llamada directamente desde formularios HTML o mediante función `formAction`.
- Reduce el uso de `useEffect`, `fetch`, `axios` o estados para networking.
- Simplifica la arquitectura reduciendo el número de componentes cliente necesarios.

### Con React Hook Form
Combinar Server Actions con **React Hook Form** permite:
- Validación previa en cliente + validación final en servidor.
- Submit sin endpoints REST.
- Generación de formularios con tipado inferido (Zod, Yup, TypeScript).
- Renderer híbrido: UI en cliente, procesamiento seguro en servidor.

Patrones típicos:
- RHF gestiona la validación y recoge datos.
- La Server Action procesa la mutación.
- UI se refresca con revalidación del árbol.

---

## Integración con Next.js
Las Server Actions son parte del ecosistema de [nextjs](/frontend/nextjs/) App Router desde las versiones más recientes.

### Características principales en Next.js
- Se declaran con `"use server"`.
- No viajan al cliente ni se exponen como API.
- Compatible con streaming, `Suspense`, layouts anidados.
- Se integran con:
	- Rutas dinámicas (`[id]`, `[slug]`)
	- Actions en formularios (`<form action={miAccion}>`)
	- Optimización automática del árbol de componentes.

### Comparación con API Routes
| Aspecto | Server Actions | API Route ([api](/backend/api/)) |
|--------|----------------|----------------------|
| Seguridad | Muy alta (no expone endpoint) | Necesita endurecimiento |
| Bundle | 0KB en cliente | Normalmente usa `fetch` en cliente |
| Complejidad | Menor | Mayor |
| Uso | Lógica acoplada a UI | Lógica desacoplada de UI |
| Ideal para | Formularios, mutaciones pequeñas | Integraciones externas, webhooks |

---

## Ejemplos de Código (cada uno bajo su heading)

### Declaración básica de Server Action
{% raw %}
```javascript
"use server"

export async function crearItem(data) {
	// Lógica de servidor
}
```
{% endraw %}`

### Uso en formulario Next.js

{% raw %}
```jsx
<form action={crearItem}>
	<input name="titulo" />
	<button type="submit">Guardar</button>
</form>
```
{% endraw %}

### Con revalidación automática

{% raw %}
```javascript
"use server"
import { revalidatePath } from "next/cache"

export async function crearPost(data) {
	await db.post.create({ data })
	revalidatePath("/blog")
}
```
{% endraw %}

### Pasando parámetros dinámicos (slug)

{% raw %}
```javascript
"use server"

export async function actualizarPorSlug(slug, data) {
	return db.product.update({
		where: { slug },
		data
	})
}
```
{% endraw %}

### Integrando GraphQL dentro de Server Action

{% raw %}
```javascript
"use server"
import { client } from "@/lib/graphql"

export async function actualizarProfile(input) {
	return client.mutation(`
		mutation Update($input: ProfileInput!) {
			updateProfile(input: $input) {
				id
				name
			}
		}
	`, { input })
}
```
{% endraw %}

### Llamada desde React Hook Form

{% raw %}
```javascript
const onSubmit = handleSubmit(async (values) => {
	await actualizarProfile(values)
})
```
{% endraw %}

---

## Cuándo Usarlas y Cuándo Evitarlas

### Úsalas cuando:

- La lógica está ligada a UI.
- La operación es segura y requiere ambiente servidor.
- Formularios directos que no necesitan endpoints REST.
- No quieres exponer claves ni tokens en cliente.

### Evítalas cuando:

- Necesitas Webhooks o integración externa (mejor [api](/backend/api/)).
- Debes reproducir un endpoint estándar (REST, GraphQL).
- Requieres alto desacoplamiento entre frontend y backend.
- Estás fuera del ecosistema [nextjs](/frontend/nextjs/).

---

## Patrones Arquitectónicos Recomendados

- **Action-Driven UI:** la UI se vuelve reactiva al resultado de acciones del servidor.
- **Thin Client, Heavy Server:** minimiza JS del cliente y refuerza SSR.
- **Acciones segmentadas por dominio:** `/actions/user.js`, `/actions/post.js`, etc.
- **Revalidación estratégica:** solo refrescar rutas afectadas.
- **Integración con GraphQL interna:** evita exponer GraphQL en cliente.

---

## Anti-Patrones Comunes

- Colocar lógica compleja dentro del componente cliente.
- Replicar una [api](/backend/api/) REST sin necesidad.
- Hacer fetch desde cliente a acciones (no funciona).
- Usar Server Actions para procesos largos (streaming o colas mejor).
- Revalidar demasiado (afecta rendimiento).


# Server Actions: Profundización, Arquitectura y Casos Avanzados

## Arquitectura Interna y Flujo de Ejecución
### Cómo se procesan realmente
- Next.js serializa el *call* desde el formulario o cliente, lo envía al servidor mediante un canal interno (no público), ejecuta la función marcada con `"use server"` y devuelve una respuesta serializada.
- El compilador identifica las referencias a Server Actions y crea *entrypoints* independientes optimizados.
- Se aplican cuotas automáticas de seguridad:
	- Eliminación de variables no serializables.
	- No se envían closures ni dependencias sensibles al cliente.
- La respuesta se hidrata nuevamente en el árbol de Server Components, permitiendo refrescar secciones específicas.

### Flujo recomendado
1. Server Component prepara UI + edita props.
2. Form llama a Server Action.
3. Acción muta datos, llama a `revalidatePath` o `revalidateTag`.
4. Nuevo render del componente afectado.
5. El cliente recibe el árbol actualizado sin fetch manual.

---

## Patrones de Dominios y Modularidad
### Separación por dominios funcionales
Para escalabilidad, estructura las acciones en módulos autónomos:
- `/actions/userActions.js`
- `/actions/orderActions.js`
- `/actions/contentActions.js`

### Ventajas del modelo modular
- Mejor mantenibilidad.
- Reutilización en múltiples componentes.
- Tipado más preciso por dominio.
- Reducen colisiones o duplicación de lógica.

---

## Server Actions + Data Layer
### Capas de datos recomendadas
Integración con:
- ORMs (Prisma, Drizzle, Sequelize).
- Drivers directos SQL.
- SDKs privados.
- Librerías de colas (Resend, BullMQ, Upstash).

### Conceptos clave
- Las Server Actions permiten mantener toda la capa de acceso a datos **dentro del servidor**, evitando clientes expuestos.
- Pagination, sorting y búsqueda se manejan desde componentes server-side sin round-trips explícitos.

---

## Acciones Compuestas (Macro-Actions)
### Qué son
Son acciones que orquestan otras acciones internas.  
Ejemplo: actualizar un perfil, enviar email, guardar logs y refrescar un `tag`.

### Beneficios
- Centralizas la lógica empresarial en un único punto de entrada.
- Garantizas consistencia transaccional.
- Evitas exponer múltiples puntos vulnerables.

---

## Server Actions + Autenticación y Autorización
### Uso correcto
- Integración con middlewares (`middleware.js`) o utilidades de sesión.
- Validación en servidor sin exponer tokens.
- Roles y capacidades aplicados dentro de las mutaciones.

### Escenarios típicos
- Acciones protegidas por sesión (`getServerSession`).
- Mutaciones condicionadas por permisos.
- Auditoría interna de llamadas.

---

## Revalidación Avanzada
### Revalidate Granular
- `revalidatePath("/ruta")`: refresca solo esa vista.
- `revalidateTag("producto")`: refresca todos los fetch que dependen del *tag*.

### Estrategias recomendadas
- Revalidación por dominio (“posts”, “users”).
- Revalidación condicional basada en lógica de negocio.
- Combinación con fetch cacheado y deduplicación.

---

## Integración con APIs Externas (sin repetir lo anterior)
### Casos de uso
- Consumir APIs privadas/externas con claves seguras.
- Orquestar pipelines de datos sin exponer endpoints públicos.
- Manejar webhooks internos: una Server Action puede actuar como *dispatcher* hacia otros módulos.

### Ejemplos útiles
- Guardar datos en DB tras consumir API externa.
- Normalizar datos antes de enviar a cliente.
- Enriquecimiento de datos previo a revalidación.

---

## Server Actions + GraphQL Avanzado
### Nuevas capacidades sin repetir lo previo
- Construcción de “mini resolvers internos” dentro de las acciones.
- Caching selectivo por query GraphQL usando `revalidateTag`.
- Combinación de GraphQL fragmentado a nivel dominio.
- Acciones híbridas: REST interno → GraphQL externo → UI.

### Beneficios
- Fuerte tipado end-to-end.
- Sin fuga de tokens en cliente.
- Eliminación del cliente GraphQL del bundle.

---

## Server Actions + React Server Components Avanzado
### Técnicas sin solapar lo anterior
- Pre-carga de datos usando *progressive rendering* con Suspense.
- Patrones de *segmented rendering*: cada sección del layout depende de una acción distinta.
- Reemplazo de `useEffect` por rehidratación server-driven.

### Resultados
- Menor JS.
- Menos estado duplicado.
- Arquitectura más declarativa.

---

## Integración con Formularios Avanzados (RHF y +)
### Formas complejas
- Formularios multipaso con acciones encadenadas.
- Validación híbrida Zod en cliente y servidor.
- Serialización de archivos (file uploads) usando acciones server-side.

### Mejoras de arquitectura
- UI cliente mínima.
- Validación unificada.
- Estado garantizado en servidor.

---

## Server Actions + Optimización de Rendimiento
### Caching interno
- Un fetch ejecutado en una Server Action puede reutilizarse entre renders dentro del mismo request gracias a la deduplicación automática de Next.js.
- Combinación con `cache()` para datos inmutables.
- Patrones “pre-hidratados” para datos globales.

### Minimización del JS cliente
- Evitar componentes cliente salvo necesidad.
- Delegar side-effects de datos al servidor.
- Reducir dependencias del bundle.

---

## Casos Reales Avanzados (sin repetir nada previo)
### 1. Comercio electrónico
- Crear producto → emitir evento → actualizar inventario → revalidar categoría.
- Actualizar carrito sin exponer endpoints.

### 2. SaaS B2B
- Edición de ajustes empresariales sin API pública.
- Generación de reportes server-side y descarga directa desde acción.

### 3. Sistemas de contenido
- Panel de administración completo sin rutas API.
- Previsualización instantánea usando rutas dinámicas y slug.

### 4. Integración con colas
- Acción crea una entrada → la cola procesa → `revalidateTag`.

---

## Errores Avanzados a Evitar (Anti-Patrones)
### Nuevos sin repetir los base
- Acciones con demasiadas dependencias no serializables.
- Mutaciones paralelas que requieren transacciones pero no las usan.
- Revalidar todo el sitio en vez de usar tags.
- Tratar Server Actions como microservicios (no lo son).
- Reutilizar acciones dentro de componentes cliente (no funcionará).

---

## Checklist Final de Buenas Prácticas Avanzadas
- Componentes server por defecto, cliente solo cuando sea obligatorio.
- Acciones separadas por dominios y responsabilidad única.
- Validación estricta en servidor.
- Revalidación granular orientada a rendimiento.
- Capa de datos completamente encapsulada.
- Integración con GraphQL sin exponer cliente público.
- Uso estratégico de slugs, rutas dinámicas y layouts.
- Evitar duplicar lógica entre cliente y servidor.
- Aprovechar la “thin client architecture”.

