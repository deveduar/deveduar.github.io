---
date: 2025-05-22 17:22
title: Desarrollo web
keywords:
source:
status: 🚀
Parent: "[[Area-Prog]]"
public_note: true
category: Desarrollo web
tags:
  - desarrollo
  - programming
---
# Desarrollo web
``

## Áreas y disciplinas
- [Software engineering](/software%20engineering/software-engineering/)
- [Backend](/backend/backend/)
- [Frontend](/frontend/frontend/)
- [Motor de plantillas](/desarrollo%20web/motor-de-plantillas/)
- [CMS](/desarrollo%20web/cms/)
- [LMS](/desarrollo%20web/lms/)
- [ecomerce](/desarrollo%20web/ecomerce/)
- [Moodle](/desarrollo%20web/moodle/)
- [SEO](/frontend/seo/)
- [accesibilidad](/frontend/accesibilidad/)
- [git](/software%20engineering/git/)

## Frameworks y tecnologías por explorar
- lista con tecnologias web por ver
- [astro](/frontend/astro/)
- [qwick](/frontend/qwick/)
- [gatsby](/frontend/gatsby/)
- [sveltkit](/frontend/sveltkit/)
- [django](/backend/django/)
- Svelte
- [tanstack](/backend/tanstack/)

## Stacks web clásicos y modernos
- LAMP (Linux, Apache, MySQL, PHP)
- LEMP (Linux, Nginx, MySQL, PHP)
- MEAN (MongoDB, Express, Angular, Node.js)
- MERN (MongoDB, Express, React, Node.js)

## Librerías y herramientas
- [StackShare](https://stackshare.io/stacks)
- [Public APIs](https://publicapis.dev/)

### Ecosistema React
- [react](/frontend/react/)
	- Forms
		- [Formity](https://www.formity.app/docs)
		- [React Hook Form](https://github.com/react-hook-form/react-hook-form)
	- Escaneo y rendimiento
		- [React Scan](https://react-scan.com/?ref=producthunt)
	- Hooks reutilizables
		- [useHooks](https://usehooks.com)
	- Drag & Drop
		- [SortableJS](http://sortablejs.github.io/Sortable/)

### Validación y datos
- Validación de esquemas
	- zod
	- [Zod](https://zod.dev/?id=from-npm-nodebun)
- Fechas y calendarios
	- [DayPicker](https://daypicker.dev/)
- Charts y visualización
	- [react-chartjs-2](https://react-chartjs-2.js.org/examples/)
- Tablas, listas virtualizadas y rendimiento
	- [TanStack Virtual](https://tanstack.com/virtual/latest)

### Texto, markdown y diagramas
- [CodeMirror](https://codemirror.net/)
- [Mermaid.js](https://github.com/mermaid-js/mermaid)
- [Turndown](https://github.com/mixmark-io/turndown)
- [Prism.js](https://prismjs.com/#features-full)

### UI y plantillas
- Frameworks UI
	- [Bootstrap](https://getbootstrap.com/2.0.2/)
- Templates HTML base
	- [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate)

### Componentes avanzados
- Componentes para tablas
	- JavaScript Data Grid - Documentation  Handsontable-
	- Angular Grid Component
- Interfaces CLI
	- SBoudriasInquirer.js A collection of common interactive command line user interfaces.-Inquirer.js

## Chatbots y automatización
- Casos de uso
	- Atención al cliente 24/7
	- Calificación de leads
	- Automatización de FAQs
	- Integración con CRMs y herramientas internas
- Enfoques técnicos
	- Chatbots rule-based
	- Chatbots conversacionales con NLP
	- Automatización basada en eventos

- [Typebot](https://docs.typebot.io/get-started/introduction)
	- Constructor visual de flujos conversacionales
	- Ideal para formularios conversacionales y onboarding
	- Integración con APIs y webhooks
- [Bottender](https://bottender.js.org/docs/)
	- Framework JavaScript para bots multi-plataforma
	- Soporte para Messenger, Telegram, WhatsApp, Web
	- Orientado a desarrolladores (code-first)
- botpress
	- Plataforma completa para chatbots empresariales
	- Builder visual + lógica avanzada
	- Soporte NLP y despliegue on-premise o cloud
	- Integraciones
		- [Botpress Instagram](https://botpress.com/docs/instagram)
		- [Webhook](https://botpress.com/docs/webhook)
		- [webhooks](/backend/webhooks/)
		- Automatizacion

## Creación y gestión de formularios
- Objetivos habituales
	- Captura de leads
	- Encuestas y feedback
	- Formularios internos
	- Research de producto
- Áreas relacionadas
	- [Management](/management/management/)
	- marketing
- Plataformas SaaS
	- Typeform
		- Formularios conversacionales
		- Alta tasa de conversión
		- Integración con CRM y automatizaciones
- Open source y alternativas
	- [Formbricks](https://formbricks.com/docs/introduction/what-is-formbricks)
		- Experience Management open source
		- Control total de datos
	- [Super Easy Forms](https://supereasyforms.com/)
		- Formularios simples y rápidos
		- Enfoque minimalista
	- [OhMyForm](https://ohmyform.com/docs/install/)
		- Autohosted
		- Enfocado a privacidad y personalización

## Técnicas de desarrollo y rendimiento
- Lazy loading
	- Carga diferida de imágenes y componentes
	- Mejora del Time To Interactive (TTI)
- Code splitting
	- División del bundle por rutas o componentes
	- Reducción del JS inicial
	- Uso común en SPAs modernas
- SSR
	- Mejora SEO y First Contentful Paint
	- Renderizado en servidor
	- Base para SSG e ISR

## Compatibilidad y polyfills
- Babel
	- Transpilación de JavaScript moderno
	- Compatibilidad con navegadores legacy
	- Uso de polyfills según target
	- Integración con bundlers modernos

## Peticiones HTTP y datos
- 04-AJAX y JSON
	- Comunicación asíncrona cliente-servidor
	- Base de SPAs y apps dinámicas
- Jquery
	- Abstracción histórica de AJAX
	- Legacy y mantenimiento de proyectos antiguos
- Patrones comunes
	- REST
	- Manejo de errores
	- Estados de carga

## Documentación y testing
- [Testing](/testing/testing/)
	- Unitario
	- Integración
	- End-to-end
	- Testing como parte del CI
- [storybook](/frontend/storybook/)
	- Documentación viva de componentes
	- Desarrollo aislado de UI
	- Testing visual
	- Design systems

## Gestión de estado
- gestion de estado
	- Sincronización UI ↔ datos
	- Estado local vs global
- context api
	- Estado compartido simple
	- Ideal para temas, auth, settings
- zustand
	- Estado global minimalista
	- Sin boilerplate
	- Buen rendimiento
- [Redux](/frontend/redux/)
	- Estado predecible
	- Arquitectura explícita
	- Uso en apps grandes
	- Comparaciones
		- Estado en memoria vs cache o base de datos
	- Integración
		- Uso conjunto con [axios](/backend/axios/)


# Formularios y Validaciones en [react](/frontend/react/)
Integración con ecosistema de formularios modernos.
- gestion de estado
## Formik
- [Overview | Formik](https://formik.org/docs/overview)
- [Guía Formik - YouTube](https://youtu.be/2Xs1DAzYHXY)
- Manejo de estados sin `useState` manual.
- Validación basada en esquemas o funciones.
- Buen soporte para formularios complejos.

## [Redux](/frontend/redux/) + Formularios
- Reducción de boilerplate con slices.
- Separación estricta entre UI, Estado y Lógica.

## Yup vs Zod vs Joi
- **Esquemas** de comprobación de datos.
	- Declarativos, tipados, reutilizables.
- Enlaces:
	- [Yup](https://github.com/jquense/yup/tree/pre-v1)
	- [Zod](https://zod.dev/?id=basic-usage)
- **Yup**: muy extendido y flexible.
- **Zod**: basado en TypeScript, inferencia de tipos automática.
- **Joi**: sólido en backend y validaciones robustas.

# Desarrollo web — Arquitectura, prácticas y evolución

## Arquitectura de aplicaciones web
- Arquitectura en capas
	- Presentación (UI / Frontend)
	- Lógica de negocio
	- Acceso a datos
- Arquitectura hexagonal (Ports & Adapters)
	- Separación estricta entre dominio e infraestructura
	- Facilita testing y cambios tecnológicos
- Arquitectura basada en eventos
	- Comunicación async entre servicios
	- Uso de colas y streams
- Microservicios
- Monolito modular
- Serverless

## [Backend](/backend/backend/) moderno
- APIs
	- REST
	- [GraphQL](/backend/graphql/)
	- RPC
- Autenticación y autorización
	- JWT
	- OAuth2
	- OpenID Connect
- Gestión de sesiones
	- Cookies seguras
	- Tokens
- Background jobs
	- Colas
	- Workers
- Versionado de APIs
- Rate limiting y throttling

## Frontend avanzado
- Arquitecturas frontend
	- SPA
	- MPA
	- Islands architecture
- Rendering
	- CSR
	- SSR
	- SSG
	- ISR
- Comunicación con backend
	- Fetch API
	- [axios](/backend/axios/)
- Manejo de errores global
- Observabilidad frontend
	- Logs
	- Métricas
	- Performance budgets

## Accesibilidad y estándares
- WCAG
- ARIA
- Navegación por teclado
- Contraste y legibilidad
- Testing de accesibilidad automatizado
- Accesibilidad como requisito funcional

## SEO técnico
- Indexación
- Sitemap
- Robots.txt
- Metadata estructurada
- Open Graph
- Performance y Core Web Vitals
- SEO en SPAs y SSR

## Performance web
- Optimización de assets
	- Minificación
	- Compresión
- Estrategias de cache
	- HTTP cache
	- CDN
- Optimización de imágenes
- Carga progresiva
- Hydration y partial hydration

## Seguridad web
- OWASP Top 10
- Protección contra XSS
- Protección contra CSRF
- Content Security Policy (CSP)
- HTTPS y certificados
- Gestión de secretos
- Seguridad en formularios

## Testing y calidad
- Testing unitario
- Testing de integración
- Testing end-to-end
- Testing visual
- Testing de accesibilidad
- Test driven development (TDD)
- Continuous testing

## DevOps y ciclo de vida
- CI/CD
- Entornos
	- Desarrollo
	- Staging
	- Producción
- Feature flags
- Rollbacks
- Observabilidad
	- Logs
	- Traces
	- Metrics

## Infraestructura web
- Hosting tradicional
- Cloud
- Containers
- Orquestación
- CDN
- DNS
- Balanceadores de carga

## Gestión de contenido
- CMS tradicionales
- Headless CMS
- CMS como API
- Integración con frontend moderno
- Workflows editoriales

## Formularios y experiencia de usuario
- Validación cliente/servidor
- UX en formularios
- Accesibilidad en inputs
- Prevención de spam
- Almacenamiento y análisis de respuestas

## Automatización y flujos
- Webhooks
- Integraciones entre servicios
- Automatización de tareas
- Chatbots como capa de interacción
- Orquestación de flujos

## Documentación técnica
- Documentación de APIs
- Documentación de arquitectura
- Documentación viva
- Diagramas
- Onboarding técnico

## Evolución y tendencias
- Edge computing
- AI en desarrollo web
- Personalización dinámica
- Web components
- Progressive Web Apps
- Low-code / No-code

# Recursos actualizados 2025 para desarrollo web

## Plataformas de aprendizaje completas
- **freeCodeCamp** – Currículo gratuito con HTML, CSS, JS, APIs, bases de datos y certificaciones interactivas. Ideal desde nivel inicial hasta avanzado.  
	- [freeCodeCamp](https://www.freecodecamp.org/)
- **The Odin Project** – Formación full-stack guiada por proyectos reales y comunidad activa.  
	- [The Odin Project](https://www.theodinproject.com/)
- **MDN Web Docs** – Documentación oficial detallada sobre estándares web (HTML, CSS, JS, APIs, compatibilidad, accesibilidad).  
	- [MDN Web Docs](https://developer.mozilla.org/)
- **W3Schools** – Tutorías prácticas simples con editor de código integrado.  
	- [W3Schools](https://www.w3schools.com/)
- **Codecademy (Free Tier)** – Lecciones interactivas para aprender fundamentos web desde cero.  
	- [Codecademy](https://www.codecademy.com/)
- **30 recursos en español** – Recopilación de recursos gratuitos para empezar en programación web (plataformas, MOOCs y comunidades).  
	- [30 recursos en español](https://yeisonpx.com/es/desarrollo-de-software/30-recursos-gratuitos-en-espanol-para-dar-tu-primer-paso-en-programacion-web/)

## Documentación y referencias técnicas
- **DevDocs.io** – Documentación compilada de múltiples APIs y librerías con búsqueda rápida e interfaz offline.  
	- [DevDocs](https://devdocs.io/)
- **Documentación oficial de tecnologías clave**
	- PHP  
		- [PHP Manual](https://www.php.net/manual/es/)
	- MySQL  
		- [MySQL Docs](https://dev.mysql.com/doc/)
	- jQuery  
		- [jQuery Documentation](https://api.jquery.com/)
	- Bootstrap  
		- [Bootstrap Docs](https://getbootstrap.com/docs/)

## Herramientas y ambientes de desarrollo
- **Chrome DevTools** – Debugging, inspección de rendimiento y depuración en el navegador.  
	- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- **Postman** – Testing y desarrollo de APIs con gestión de requests y responses.  
	- [Postman Docs](https://learning.postman.com/docs/)
- **Git & GitHub** – Control de versiones y colaboración en proyectos.  
	- [Git](https://git-scm.com/doc)
	- [GitHub Docs](https://docs.github.com/)

## Frameworks y ecosistemas en 2025
- **React** – Ecosistema moderno orientado a componentes, SSR y performance.  
	- [React](https://react.dev/)
- **Vue y Nuxt.js** – Framework progresivo con soporte SSR y generación estática.  
	- [Vue](https://vuejs.org/)
	- [Nuxt](https://nuxt.com/)
- **Svelte & SvelteKit** – Compilador ligero con foco en simplicidad y rendimiento.  
	- [Svelte](https://svelte.dev/)
	- [SvelteKit](https://kit.svelte.dev/)
- **Next.js** – Framework React con SEO, SSR, SSG y edge computing.  
	- [Next.js](https://nextjs.org/)
- **GWT (Google Web Toolkit)** – Desarrollo web en Java, aún vigente en entornos enterprise.  
	- [GWT](https://www.gwtproject.org/)
- **Blazor** – Desarrollo web con C# y .NET como alternativa a JavaScript.  
	- [Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor)

## Arquitectura y tecnologías emergentes
- **Low-Code y No-Code** – Plataformas para prototipado rápido y creación de MVPs.  
	- [Retool](https://retool.com/)
	- [Bubble](https://bubble.io/)
- **WebAssembly** – Ejecución de código de alto rendimiento en el navegador.  
	- [WebAssembly](https://webassembly.org/)

## Papers, investigación y tendencias
- **ZjsComponent** – Componentes web modulares sin dependencias de build tools.  
	- [ZjsComponent (arXiv)](https://arxiv.org/abs/2506.11016)
- **WebVIA framework** – UI-to-Code interactivo basado en modelos visión-lenguaje.  
	- [WebVIA (arXiv)](https://arxiv.org/abs/2511.06251)
- **IDE plugin de accesibilidad con LLMs** – Extensiones inteligentes para mejorar accesibilidad desde el editor.  
	- [Accessibility IDE Plugin (arXiv)](https://arxiv.org/abs/2503.09673)

## Comunidades, foros y soporte
- **Stack Overflow** – Resolución de problemas reales y referencia práctica diaria.  
	- [Stack Overflow](https://stackoverflow.com/)
- **Subreddits de desarrollo web** – Recursos, tendencias y experiencias reales de la industria.  
	- [r/webdev](https://www.reddit.com/r/webdev/)
	- [r/frontend](https://www.reddit.com/r/frontend/)
	- [r/fullstack](https://www.reddit.com/r/fullstack/)
