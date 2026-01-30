---
date: 2025-04-18 03:23
title: guias de estilos
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: "true"
category: Frontend
tags:
  - frontend
  - desing
  - CSS
  - design_tokens
  - design_systems
---
# guias de estilos

## Referencias principales
- [Frontend](/frontend/frontend/)
- [UX-UI](/frontend/ux-ui/)
- [CSS](/frontend/css/)
- [Motion – Material Design 3](https://m3.material.io/styles/motion/overview)
- **Fluent Design**
	- [Home - Fluent 2 Design System](https://fluent2.microsoft.design/)
- Diseño System vs Storybook
	- diferencias de propósito
	- cuándo usar cada uno
	- flujos de trabajo combinados

## Design Tokens
- design tokens
- Crear theme y dark mode
	- tokens semánticos por modo
	- estrategias de override y cascada
- Documentar tokens
	- semántica, key/value
	- estructura y convenciones de nombres
	- documentación generada automáticamente
		- integración con tailwind plugins conf init
- Recursos
	- Design Tokens qué son y qué ventajas tienen-
	- Design tokens – Material Design 3-how-to-use-tokens
	- Design Token Community Group (DTCG)
		- principios del estándar
		- [GitHub - design-tokens/community-group](https://github.com/design-tokens/community-group)

### Herramientas orientadas a tokens
- **Cobalt**
	- Getting Started  Cobalt-getting-started
	- alternativa a Style Dictionary
	- gestión de versiones integrada
	- integración con Figma y pipelines

- **Figma**
	- [Tokens Studio for Figma – Tokens Studio](https://docs.tokens.studio/)
	- sincronización de librerías
	- soporte de alias y referencias cruzadas

- **Diccionario de estilos (Style Dictionary)**
	- [Style Dictionary](https://amzn.github.io/style-dictionary/#/quick_start)
	- [Overview | Style Dictionary](https://styledictionary.com/getting-started/installation/)
	- exportar a múltiples plataformas
	- transformadores, filtros y formatos
	- utilidades:
		- [style-dictionary-utils](https://github.com/lukasoppermann/style-dictionary-utils)

### Ejemplo práctico con Style Dictionary
- [style-dictionary-tokens – ejemplo](https://github.com/mryechkin/style-dictionary-tokens)
	- inicializar proyecto npm (prettier, configs)
	- archivos tokens: colors.tokens.json, spacing, typography
	- uso vía CLI o scripts npm
	- configuración principal:
		- objetos platform
		- transformaciones agrupadas
		- salida en `dist/css/variables.css`
		- uso de alias `{color.rose}`
		- references activadas en config
		- `transform` vs `transformGroup`
			- arrays de transformaciones
			- px → rem
			- hex → rgb
	- posible integración con Tailwind lista de clases y conf inicial
	- plugin para convertir color a HSL

### Formato y especificaciones
- [Design Tokens Format Module](https://tr.designtokens.org/format/)
- reglas de estructura
- tipología de valores (color, espacio, tipografía, animación)
- normalización y exportabilidad

## Design System
- design system
- Design System La clave para adaptar tu marca al diseño digital - Product Hackers-design-system
- DesignSystems.com-

### Componentes esenciales de un Design System
- guía de estilo visual
- librería de componentes
- tokens sincronizados con UI
- arquitectura escalable
- versionado y documentación viva
- integración con Storybook + CI/CD

### Ejemplos y recursos en Figma
- [Airtable Apps UI Kit | Figma](https://www.figma.com/community/file/862805330899066752)
- [Primer Web | Figma](https://www.figma.com/community/file/854767373644076713)
- [UI Kit 1](https://www.figma.com/community/file/857042449394640587)
- [UI Kit 2](https://www.figma.com/community/file/1035203688168086460)

# guias de estilos — ampliación de conceptos no cubiertos

## Arquitectura de un Design System a gran escala
- Gobernanza del sistema
	- definición de responsables (core team, contribuyentes, revisores)
	- procesos de actualización y control de cambios
	- versionado semántico y etiquetado por impacto (visual, tokens, componentes)
- Modelos de adopción
	- centralizado (propiedad absoluta del equipo de diseño)
	- federado (equipos distribuidos con contribuciones reguladas)
	- híbrido (estructuras modulares con ownership compartido)
- Estrategias de escalabilidad
	- separación entre **base tokens** y **brand tokens**
	- capas independientes para web, mobile, desktop
	- plantillas de contribución para nuevos componentes

## Integración avanzada entre Figma y código
- Sincronización continua
	- pipelines automáticos: tokens → build system → repos de componentes
	- validación de cambios para evitar breaking styles
- Mapeo preciso entre Figma y front-end
	- naming mirror 1:1 (prop.key.value)
	- vinculación de tokens con variantes de componentes
	- refactor entre tokens obsoletos y nuevos standards
- Auditorías automatizadas
	- comprobación de consistencia entre Figma y producción
	- detección de componentes duplicados o desviados del sistema

## Motion & micro-interacciones en sistemas de diseño
- Principios clave
	- continuidad espacial
	- reducción de carga cognitiva
	- animaciones con significado (nunca decorativas)
- Tokens de motion
	- duración, delay, easing, curva personalizada
	- valores escalables para tamaños de UI
- Integración técnica
	- motion tokens exportados a CSS, JS o frameworks como Framer Motion
	- patrones de entrada/salida/morphing uniformes
- Testing del movimiento
	- accesibilidad (reduce motion)
	- ritmo, tiempo de reacción del usuario, reglas para no bloquear interacción

## Accesibilidad como parte del Design System
- Tokens de accesibilidad
	- contraste mínimo AA/AAA
	- espaciado mínimo táctil
	- tamaños de tipografía dinámicos
- Patrones accesibles
	- navegación por teclado
	- roles ARIA incluidos por defecto en los componentes
- Automatización
	- pipelines con validadores de accesibilidad
	- snapshots que verifican contrastes y estados focus

## Mantenimiento y evolución de tokens
- Estrategias de deprecación
	- marcar tokens como obsoletos con "deprecated"
	- publicar rutas alternativas y fecha de eliminación
- Documentación viva generada por build
	- preview de tokens
	- código de uso por framework (React, Vue, Svelte)
- Testing de tokens
	- validación de formatos (color, unit, tipo)
	- test de consistencia entre platforms

## Workflows avanzados con Storybook
- Documentación interactiva
	- states, variants y controls conectados a tokens
	- sincronización automática con cambios del Design System
- Addons recomendados
	- accesibilidad
	- theme switcher con tokens
	- visual regression
- Integración con CI/CD
	- desplegar automáticamente la librería de componentes
	- capturas de cambios visuales con Chromatic o Loki

## Métricas y auditorías del Design System
- Indicadores clave
	- uso real de los componentes
	- deuda visual y técnica
	- adopción por equipo y cobertura del sistema
- Herramientas de medición
	- trackeo en repos (component usage tracking)
	- análisis de UI reales para detectar incoherencias
- Informes de mantenimiento
	- roadmap trimestral
	- priorización según impacto de inconsistencias

## Guías para definir un lenguaje visual sólido
- Reglas de la marca
	- tono, voz visual, cadencia y ritmo de interacción
- Cohesión tipográfica
	- escalas modulares
	- sistema de pesos, alturas y variantes
- Cohesión cromática
	- estructura de roles de color (foreground, background, status)
	- sistemas de color multipaís/multimarca

