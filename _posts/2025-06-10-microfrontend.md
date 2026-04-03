---
date: 2025-06-10 02:42
title: microfrontend
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Frontend
tags:
  - microservicios
  - microfrontend
  - frontend
---
# microfrontend

- [Frontend](/frontend/frontend/)
## Introducción y conceptos clave
- Los **microfrontends** aplican la filosofía de los [microservicios](/backend/microservicios/) al frontend.
- Permiten dividir una aplicación grande en **fragmentos independientes**, cada uno con:
	- Su propio ciclo de despliegue.
	- Su propia arquitectura interna.
	- Su propio stack (si conviene y está justificado).
- Cada microfrontend se integra dinámicamente en una “shell”, “host” o aplicación contenedora.
- Tecnologías típicas:
	- [web services](/backend/web-services/) y contratos claros entre módulos.
	- [Web Components](/frontend/web-components/) como capa neutral entre frameworks.
	- Carga dinámica de builds usando [webpack](/automatizacion%20y%20build/webpack/) y su ecosistema.
	- Integraciones avanzadas con module federation.

---

## Beneficios
- **Escalabilidad organizacional**  
	- Equipos independientes con autonomía técnica.
- **Despliegues independientes**  
	- Sin bloquear a otros equipos, menor riesgo de regresiones globales.
- **Evolución tecnológica progresiva**  
	- Posibilidad de actualizar partes de la app sin migrar todo.
- **Performance optimizada por contexto**  
	- Cargar sólo lo necesario para cada sección.

---

## Desventajas y desafíos
- **Complejidad operativa**  
	- Orquestación, builds independientes, sincronización de versiones compartidas.
- **Duplicación de dependencias**  
	- Múltiples frameworks/libs cargándose en el navegador si no se controla.
- **Diseño UX inconsistente**  
	- Si no hay un sistema de diseño común o tokens compartidos.
- **Observabilidad distribuida**  
	- Requiere logs, métricas y tracing granular por microfrontend.

---

## Arquitecturas típicas
### 1. Integración en build-time
- Cada microfrontend se compila y se ensambla en un build final común.
	- Ventaja: bundle más optimizado.
	- Contra: pierde autonomía de despliegue.

### 2. Integración en runtime
- La shell carga microfrontends remotos (ej: Module Federation).
	- Ventaja: verdadero desac acoplamiento y despliegues independientes.
	- Contra: mayor complejidad de infraestructura.

### 3. Integración basada en Web Components
- Cada microfrontend expone un `<custom-element>` interoperable.
- Permite mezclar frameworks: React, Svelte, Solid, Vue, etc.

---

## Casos de uso
- Plataformas SaaS modulares (dashboard con apps independientes).
- E-commerce con equipos separados para catálogo, checkout, perfil.
- Productos que requieren **experimentos A/B** sin recompilar el resto.
- Migraciones tecnológicas graduales (React → Solid, Vue → Svelte, etc.).

---

## Cuándo usarlos
- Cuando el tamaño o la complejidad organizacional lo exige.
- Cuando varios equipos necesitan **roadmaps autónomos**.
- Cuando la app es susceptible a **despliegues frecuentes** y parciales.
- Cuando hay múltiples productos compartiendo la misma plataforma.

---

## Cuándo evitarlos
- Apps pequeñas o medianas donde añadir capas de orquestación es innecesario.
- Cuando el equipo es pequeño (<5–8 devs).
- Proyectos donde la consistencia visual es crítica y no hay diseño unificado.
- Situaciones de rendimiento extremo sin CDN ni arquitectura sólida.

---

## Microfrontends en producción (ejemplos)
Consulta la nota:  
- Ejemplos Reales y Detallados de Microfrontends

---

## Implementación con [nextjs](/frontend/nextjs/)
- Plantilla oficial:  
	- [Microfrontends next](https://vercel.com/templates/next.js/microfrontends)
- Integración común:
	- Cada microfrontend se despliega como un proyecto Next independiente.
	- La shell actúa como router y agregador de contenido remoto.
	- Se combinan rutas, componentes y APIs mediante fetch y runtime remotes.

---

## Integración con Webpack y Module Federation
### Module Federation (Webpack 5+)
- Solución estándar para microfrontends en runtime.
- Permite:
	- Importar módulos remotos a nivel de componente.
	- Compartir dependencias (React, libs, UI kits).
	- Hacer hot-swapping de builds en producción.

### Referencias internas
- module federation
- [webpack](/automatizacion%20y%20build/webpack/)
- Microfrontends con Module Federation-microfrontends-con-module-federation-1apg
- gpt minimo funcional module federation

---

## Diseño, comunicación y sincronización
### Contratos entre microfrontends
- API clara a través de eventos, props, stores, o servicios compartidos.
- Mantener comunicación mínima y documentada.

### Design system y tokens
- Para evitar inconsistencias:
	- Exportar tokens CSS o Web Components neutrales.
	- Mantener un repositorio centralizado de componentes base.

### Observabilidad distribuida
- Logs por microfrontend + correlación en la shell.
- Métricas por recurso cargado, errores, TTI y latencia de remotes.

---

## Patrones avanzados
### 1. Shell + Remotes
- La shell aloja navegación, layout principal y contextos globales.
- Cada remote provee páginas/segmentos completos.

### 2. Fragmentos UI independientes
- Microfrontends de tamaño mínimo (widget, card, panel).

### 3. Islas de Interactividad
- MFE como islas interactivas dentro de una app SSR/SSG.

### 4. Hybrid Rendering
- Algunos microfrontends SSR, otros SPA, coexistiendo sin conflictos.

---

## Buenas prácticas
- Versionado semántico estricto.
- Maximizar dependencias compartidas para evitar duplicados.
- Testing aislado por microfrontend + smoke tests en la shell.
- Documentación continua: endpoints, rutas, eventos, contratos.
- Cargar microfrontends on-demand siempre que se pueda (lazy).

---

## Código (ejemplo básico Module Federation)
### Configuración del host (webpack.config.js)
{% raw %}
```javascript
module.exports = {
	name: "host",
	remotes: {
		remoteApp: "remoteApp@https://remote-app.com/remoteEntry.js"
	},
	shared: ["react", "react-dom"]
};
```
{% endraw %}`

### Configuración del remote (webpack.config.js)

{% raw %}
```javascript
module.exports = {
	name: "remoteApp",
	exposes: {
		"./Widget": "./src/Widget.jsx"
	},
	shared: ["react", "react-dom"]
};
```
{% endraw %}

---

## Checklist rápido para decidir si necesitas microfrontends

- ¿La app es grande y modular?
- ¿Más de un equipo independiente trabaja en paralelo?
- ¿Se necesitan despliegues parciales frecuentes?
- ¿Existe riesgo de bloqueo entre equipos?
- ¿Hay requisitos de migración tecnológica gradual?
- ¿Puede la infraestructura soportar builds, CI/CD y orquestación avanzada?

Si la mayoría son **sí**, los microfrontends son adecuados.

# microfrontends — conceptos avanzados y temas restantes

## Nuevos enfoques arquitectónicos (2025)
### Edge-Side Microfrontends
- Renderizado parcial en el edge (Cloudflare, Vercel Edge Functions, Fastly).
- Permite componer microfrontends en tiempo real antes de llegar al navegador.
- Adecuado cuando:
	- Hay personalización por usuario.
	- Se mezclan remotes SSR y remotes CSR.
	- El TTFB es crítico.

### Microfrontends orientados a dominio (DDD aplicado al frontend)
- Cada microfrontend representa un **bounded context**.
- Se define un *ubiquitous language* propio y contratos estrictos entre dominios.
- Evita acoplamiento accidental entre equipos.
- Útil en sistemas extensos: e-commerce, banking, CRM multi-producto.

### Microfrontends dirigidos por capacidades (Capability-Driven)
- En vez de separar por páginas, se separa por *capacidades de negocio*:
	- Pago
	- Recomendaciones
	- Autenticación
	- Notificaciones
- Cada capacidad se entrega como paquete UI + lógica + servicios.

---

## Integración avanzada entre microfrontends
### Orquestación de estados globales
- Evitar *shared global stores*.
- Patrones modernos:
	- **Event Bus desacoplado** (basado en DOM, Web Workers o Broadcast Channel).
	- **State streaming** mediante señales reactivas expuestas como APIs (ej: Signals, Observables).
	- **Context providers federados**, cargados desde la shell.

### Aislamiento estricto
- `Shadow DOM` para evitar fuga de estilos.
- `Scoped Registries` (2024–2025) para evitar colisiones de customElements.
- Sandbox con:
	- iframes lite
	- WebContainers
	- import maps bloqueados por ámbito

### Sincronización de navegación entre remotes
- Router agnóstico que emite eventos estándar (`navigation-start`, `navigation-success`, `navigation-error`).
- Los microfrontends reaccionan sin conocer el router real usado por la shell.
- Evita que cada remote imponga su router (Next, Remix, React Router, etc.).

---

## Optimización de rendimiento (temas todavía no cubiertos)
### Split SSR/CSR inteligente
- Un remote puede tener:
	- SSR parcial (primer paint)
	- CSR incremental (interacciones)
	- Hydration aislada por islas
- Evita hidratar toda la página cuando sólo cambia una parte.

### Prefetch autónomo por microfrontend
- Cada remote puede publicar su archivo `remote-hints.json`:
	- Assets críticos
	- Rutas más usadas
	- Bundles secundarios
- La shell decide qué prefetch aplicar por usuario, idioma o dispositivo.

### Persistencia local segmentada
- Cada microfrontend gestiona su propio espacio en IndexedDB / Cache Storage.
- Regla: ningún remote accede al almacenamiento privado del otro.
- Reducción de colisiones, fugas y migraciones fallidas.

---

## Seguridad moderna (sin repetir lo anterior)
### Zero-trust entre microfrontends
- Los remotes se tratan como “no confiables”.
- Validación estricta de:
	- Eventos
	- Props
	- Mensajes entrantes
- Limitar exposición de APIs internas o tokens en tiempo de build.

### Content Security Policy segmentada
- Cada remote define su CSP, pero la shell aplica una composición final.
- Previene inyecciones entre microfrontends.

### Sandboxed remotes
- Uso de `iframe sandbox` para módulos de terceros.
- Adecuado para funcionalidades inseguras:
	- Procesamiento de archivos
	- Editores WYSIWYG avanzados
	- Integraciones externas

---

## Flujo de trabajo, CI/CD y DevOps
### Pipelines independientes
- Cada microfrontend:
	- Build → Test → Release → Publish remoto.
- La shell sólo actualiza **pointers** (URLs) en config:
	- Sin reconstruir el host.
	- Ideal para Module Federation o Import Maps dinámicos.

### Contract testing automático
- Pruebas que garantizan:
	- Eventos emitidos
	- APIs expuestas
	- Interfaces públicas estables
- Evitan rupturas cuando un microfrontend se actualiza sin coordinarse.

### Environments federados
- Dev, Staging, Preprod, Prod pueden tener **remotes mezclados**:
	- Ej: Remoto A en Staging + Remote B en Producción.
- Facilita pruebas reales sin desplegar todo.

---

## Gestión y evolución del diseño (sin repetir conceptos previos)
### Design tokens federados
- Cada remote importa tokens de un endpoint central:
	- `/design-tokens.json`
- Hot-reload automático cuando cambian.
- Evita duplicación incluso sin compartir frameworks UI.

### Micro-temado dinámico
- Remotes pueden aplicar temas diferentes según marca/tenant.
- La shell inyecta:
	- Paleta
	- Tipografías
	- Espaciados
- El remote adapta la UI sin cambiar código.

---

## Migraciones y coexistencia tecnológica
### Convivencia de frameworks (profundización)
- React + Vue + Svelte + Solid + Qwik en un mismo producto.
- La clave es:
	- Establecer un *interfaz mínimo común* (DOM events, atributos).
	- Evitar pasar objetos complejos.
	- Delegar la comunicación a la capa neutra.

### Microfrontends como estrategia de migración
- Casos:
	- Monolito React → Migración progresiva a Next.js 15.
	- Vue 2 legacy → Nuevo stack con SvelteKit.
	- Angular 12 legacy → Modern Angular + SSR.

---

## Testing avanzado para microfrontends
### Testing aislado por remote
- Contract tests
- Visual Regression Testing individual
- Performance Budgets internos

### Testing de integración en la shell
- Smoke tests que cargan remotes reales.
- Tests del router federado.
- Validación de fallbacks y degradación progresiva.

### Testing resiliente
- Simular remotes caídos, lentos o corruptos.
- Verificar:
	- Fallback UI
	- Error boundaries
	- Re-intentos de carga

---

## Observabilidad distribuida (ampliación)
### Telemetría por microfrontend
- Cada remote incluye:
	- Logger propio
	- Métricas propias
	- Trazas propias
- La shell actúa como *collector* federado.

### Session Stitching
- Unir trazas de varios remotes bajo un mismo `session-id`.
- Facilita debugging en sistemas extensos.

---

## Mantenimiento a largo plazo
### Políticas de deprecación
- Cada microfrontend debe:
	- Documentar APIs a deprecar.
	- Indicar versiones afectadas.
	- Exponer eventos de aviso a la shell.

### Propiedad clara (Ownership)
- Cada remote:
	- Dueño: equipo X  
	- Roadmap: público  
	- SLA / nivel de soporte  
	- Canal para incidencias  

---

## Checklist final de temas avanzados
- ¿Tenemos CSP segmentada?
- ¿Los remotes usan contratos formales?
- ¿Hay tracing distribuido?
- ¿Hay políticas de fallback si un remote falla?
- ¿Existe un endpoint de design-tokens central?
- ¿La shell carga remotes dinámicamente según contexto?
- ¿Hay estrategia de migración tecnológica por dominio?
- ¿El router federado está documentado?

# Glosario de Microfrontends (2025)

## Arquitectura y Enfoques
- **Microfrontend**: Fragmento independiente del frontend que se integra en una aplicación mayor.
- **Shell / Host**: Aplicación principal que orquesta, carga y compone los microfrontends.
- **Remote / Módulo remoto**: Microfrontend expuesto dinámicamente para ser consumido por la shell.
- **Bounded Context (DDD)**: Área de dominio claramente delimitada que define un microfrontend.
- **Edge-Side Microfrontends**: Composición de microfrontends en el edge antes de llegar al cliente.
- **Capability-Driven Microfrontends**: División basada en capacidades (autenticación, pago, notificaciones).
- **Hybrid Rendering**: Coexistencia de SSR, SSG, CSR y islas dentro del mismo producto federado.
- **Integración en Runtime**: Composición de microfrontends directamente en el navegador o edge.
- **Integración en Build-Time**: Ensamblado de los microfrontends antes del deploy final.

---

## Comunicación y Contratos
- **Event Bus Federado**: Sistema de eventos desacoplado compartido por microfrontends.
- **Contratos entre Microfrontends**: Definiciones estables de APIs, props, eventos y interfaces.
- **Context Providers Federados**: Contextos globales expuestos por la shell hacia los remotes.
- **State Streaming**: Compartición de estado mediante señales, observables o streams.
- **Synchronised Navigation**: Emisión de eventos estándar para coordinar navegaciones entre remotes.
- **Contract Testing**: Pruebas que validan que las interfaces públicas se mantienen estables.

---

## Integración Técnica
- **Module Federation**: Mecanismo de Webpack 5 para compartir módulos en runtime.
- **Import Maps Dinámicos**: Mapa de importaciones redefinido dinámicamente a nivel de shell.
- **Web Components como frontera**: Capa neutral entre frameworks para exponer microfrontends.
- **Scoped Registries**: Ámbitos aislados para registrar custom elements sin colisiones.
- **Shadow DOM**: Aislamiento de estilos y estructura interna de componentes.
- **Sandboxing (iframe / WebContainers)**: Aislamiento estricto para funcionalidades no confiables.

---

## Diseño, UI y Consistencia
- **Design Tokens Federados**: Esquema centralizado con colores, spacing, tipografías, etc.
- **Micro-Tema Dinámico**: Aplicación de temas por tenant/marca sin recompilar remotes.
- **UI Kit Neutral**: Componentes base agnósticos al framework utilizados por todos los remotes.
- **Aislamiento Visual**: Uso de Shadow DOM y tokens para evitar fugas de estilos.

---

## Performance y Optimización
- **Lazy Loading de Remotes**: Carga bajo demanda según rutas o interacción del usuario.
- **Prefetch Autónomo**: Archivo remoto (`remote-hints.json`) que indica qué recursos anticipar.
- **Split SSR/CSR Inteligente**: Renderizado parcial en servidor y rehidratación aislada.
- **Islas de Interactividad**: Secciones interactivas aisladas que reducen hidratación global.
- **Persistencia Segmentada**: Cada microfrontend usa sus propios espacios de IndexedDB o Cache.

---

## Seguridad y Aislamiento
- **Zero Trust Interno**: Cada remote se considera no confiable hasta que se validan sus límites.
- **CSP Segmentada**: Políticas de seguridad aplicadas por remote y compuestas por la shell.
- **Validación de Eventos**: Filtrado estricto de mensajes, props y canales de comunicación.
- **Firmas de Build / Integrity Checks**: Verificación de integridad al cargar remotes.

---

## DevOps, CI/CD y Entornos
- **Despliegues Independientes**: Cada microfrontend tiene su pipeline autónomo.
- **Environments Federados**: Mezcla de entornos (prod, staging, dev) por remote.
- **Versionado Semántico Estricto**: Control detallado de versiones para estabilidad de contratos.
- **Rollback Independiente**: Reversión de un remote sin afectar a otros.
- **URLs Dinámicas de Remotes**: La shell actualiza punteros sin necesidad de reconstruirse.

---

## Testing y Calidad
- **Testing Aislado**: Pruebas unitarias e integración por microfrontend.
- **Visual Regression Testing Federado**: Verificación visual modular.
- **Smoke Tests en Shell**: Comprobación de carga correcta de remotes reales.
- **Testing de Resiliencia**: Simulación de remotes lentos, caídos o corruptos.

---

## Observabilidad y Monitoreo Distribuido
- **Telemetría por Remote**: Logs, métricas y trazas generadas por cada microfrontend.
- **Tracing Distribuido**: Unión de trazas mediante session-id comunes.
- **Session Stitching**: Ensamblado de sesiones multi-remote en un solo timeline.
- **Metrics Budget por Remote**: Límites independientes de peso, tiempo de carga o errores.

---

## Mantenimiento y Gobernanza
- **Ownership por Microfrontend**: Equipo responsable, SLOs, soporte y roadmap.
- **Políticas de Deprecación**: Fases claras para eliminar APIs o eventos antiguos.
- **Documentación Federada**: Repositorio central de contratos, rutas, tokens y eventos.
- **Límites de Dominio**: Identificación clara de responsabilidades entre equipos.

---

# explicacion de uso de microfronteds para entrevistas

### 🎙️ **Respuesta en entrevista (ejemplo)**

> **¿Has trabajado con microfrontends o Module Federation? ¿Cómo lo implementarías?**

Sí, he estudiado y probado arquitecturas de microfrontends utilizando **Webpack Module Federation**, una técnica que permite compartir módulos entre aplicaciones en tiempo de ejecución. Aunque en mis proyectos en producción he seguido una arquitectura más monolítica optimizada (por ejemplo, en Next.js), he hecho pruebas y prototipos aplicando Module Federation para escalar aplicaciones frontend de forma desacoplada.

Por ejemplo, desarrollé un microfrontend que exponía un componente React desde una aplicación remota (`app2`) y lo consumía en otra aplicación host (`app1`). Ambos compartían dependencias como React y ReactDOM como singleton para evitar duplicación y errores en tiempo de ejecución.

Esto permite que equipos trabajen de forma independiente en distintos módulos (como dashboards, paneles de administración o visores de datos), que luego pueden integrarse dinámicamente sin necesidad de desplegar toda la aplicación central.

Además, aplicaría esta arquitectura en casos donde:

- Hay varios equipos independientes.
- Se necesita carga parcial de features (por ejemplo, "lazy load" por dominio funcional).
- Quiero publicar módulos reutilizables (como mis componentes UI o visualizadores de datos).

Este enfoque se complementa muy bien con mis conocimientos en **Next.js, Docker, arquitectura modular y CI/CD**, ya que puedo montar estos microfrontends como contenedores separados, versionarlos y desplegarlos de forma autónoma.

# Arquitectura y Fundamentos de los Microfrontends (2025)

## Introducción al paradigma
- Los **microfrontends** aplican la filosofía de los microservicios al frontend: dividir la interfaz en piezas independientes que evolucionan, se despliegan y se mantienen por separado.
- Cada microfrontend representa **una parte autónoma del producto**, con equipos, tecnología, pipelines y ciclos de release independientes.
- La aplicación completa se construye mediante **composición**, no mediante un único build monolítico.

---

## Fundamentos conceptuales
### División por dominios
- La separación no es técnica, sino **organizacional y de negocio**.
- Principio de **“lo mismo que separa el backend debería separar el frontend”**.
- Cada dominio define:
	- Lógica
	- UI
	- Eventos
	- Diseño derivado del Design System común

### Autonomía tecnológica
- Cada microfrontend puede usar:
	- Frameworks distintos (React, Vue, Svelte, Solid…)
	- Sistemas de estilos independientes
	- Sus propios pipelines CI/CD
- La autonomía debe equilibrarse con la coherencia visual y técnica.

### Aislamiento
- Cada microfrontend debe evitar afectar al resto.
- Niveles de aislamiento:
	- Aislamiento de estilos (`Shadow DOM`, scoping)
	- Aislamiento de JS (scopes, módulos)
	- Aislamiento de rutas
	- Aislamiento de datos locales (IndexedDB, Cache Storage)
	- Aislamiento de seguridad (CSP, sandbox)

---

## Principios arquitectónicos
### 1. Independencia de despliegue
- Las partes se despliegan sin reconstruir la aplicación completa.
- La shell sólo actualiza las referencias (URL/manifest/import).

### 2. Contratos estables
- Cada microfrontend expone APIs predecibles:
	- Eventos DOM
	- Propiedades o parámetros
	- Servicios/funciones públicas
- La rotura de un contrato implica rotura del sistema.

### 3. UI independiente pero coherente
- La arquitectura separa microfrontends, no la experiencia de usuario.
- El Design System actúa como frontera común:
	- Tokens federados
	- Componentes compartidos o neutralizados

### 4. Fallo aislado
- Un microfrontend que falla **no debe romper la aplicación**.
- Mecanismos:
	- Error boundaries
	- Fallback UI
	- Timeouts y reintentos para cargar remotos

---

## Componentes base de la arquitectura
### Shell / Host
- Orquesta y compone los microfrontends.
- Provee:
	- Router principal
	- Layout general
	- Carga remota de módulos
	- Contextos globales (usuario, idioma, permisos)
	- Observabilidad centralizada

### Microfrontends (Remotes)
- Pequeñas aplicaciones independientes.
- Cada una controla:
	- Su UI
	- Su lógica de datos
	- Su estilo
	- Su ciclo de vida completo

### Capa de Comunicación
- Debe ser mínima, estable y desacoplada.
- Patrones:
	- Event Bus
	- DOM Events
	- BroadcastChannel
	- Mensajería sandbox

---

## Patrones estructurales
### Microfrontends por página
- Cada ruta carga un microfrontend completo.
- Modelo usado en Next.js o arquitecturas SPA segmentadas.

### Microfrontends por fragmento
- Widgets, módulos, paneles independientes embebidos en la página.
- Mayor granularidad, más flexibilidad, más complejidad.

### Composición en servidor (Edge o backend)
- Los microfrontends se ensamblan antes de llegar al navegador.
- Útil para personalización y SSR escalado.

### Composición en cliente
- Los remotes se cargan dinámicamente cuando el usuario navega.
- Modelo común con Module Federation, import maps o Web Components.

---

## Tecnologías fundamentales
### Web Components
- Aseguran interoperabilidad entre frameworks.
- Aislamiento mediante Shadow DOM.
- Ideales como frontera neutral entre microfrontends.

### Module Federation (Webpack)
- El estándar de facto para composición en runtime.
- Permite compartir módulos y cargar builds remotos en caliente.

### Import Maps
- Controlan qué módulos deben cargarse y desde dónde.
- Permiten reconfigurar remotes sin reconstruir la shell.

---

## Comunicación y datos
### Comunicación mínima
- Los microfrontends deben evitar dependencia mutua.
- La shell actúa como orquestador cuando es necesario.

### Sincronización de estado
- El estado global debe ser:
	- Explicito
	- Documentado
	- Controlado por la shell, no por los remotes

### Sincronización de navegación
- Para evitar conflictos:
	- La shell controla el router
	- Los microfrontends emiten señales de navegación

---

## Seguridad en la arquitectura
- Zero Trust interno: cada remote se trata como no confiable.
- CSP segmentada: reglas específicas por dominio.
- Aislamiento de terceros mediante sandbox (iframe o WebContainer).
- Validación estricta de eventos, props y mensajes.

---

## DevOps y flujos de trabajo
### Pipelines independientes
- Cada microfrontend tiene:
	- Repositorio propio
	- CI/CD propio
	- Versionado propio

### Orquestación de releases
- La shell sólo cambia referencias a URLs remotas.
- Sin necesidad de rebuild global.

### Testing distribuido
- Unit tests por remote
- Contract tests entre dominios
- Smoke tests en la shell

---

## Observabilidad y mantenimiento
- Telemetría distribuida: cada microfrontend emite sus métricas.
- Session stitching: unificación de trazas por usuario.
- Presupuestos de rendimiento por microfrontend.
- Políticas de deprecación bien documentadas.

---

## Principios de diseño a largo plazo
- Minimizar dependencias compartidas.
- Reducir acoplamientos ocultos (estilos, stores, side effects).
- Mantener interfaces y contratos simples.
- Asegurar que la arquitectura permite evolucionar el producto por partes.
- Priorizar la coherencia visual mediante tokens federados, no mediante frameworks comunes.

---
