---
date: 2024-11-21 18:20
title: handlebars
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Motor de plantillas
tags:
  - PHP
  - mustache
  - template-engine
---
# handlebars


## Relación con otros lenguajes y tecnologías
- [PHP](/backend/php/)  
- Handlebars es un **motor de plantillas logic-less** originalmente diseñado para JavaScript, pero con **implementaciones maduras en múltiples lenguajes**, lo que permite reutilizar conceptos y patrones entre frontend y backend.
- Se utiliza comúnmente para:
	- Renderizado de vistas en aplicaciones web
	- Generación de HTML, emails, documentos o configuraciones
	- Separación clara entre lógica de negocio y presentación

## Qué es Handlebars
- [Introduction | Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars)
- Handlebars es una extensión de Mustache que introduce:
	- Helpers personalizados
	- Bloques condicionales y de iteración más expresivos
	- Mayor control semántico sin romper el enfoque *logic-less*
- Principios clave:
	- Las plantillas **no contienen lógica de negocio**
	- Los datos se preparan previamente y solo se presentan
	- El HTML generado es predecible y fácil de auditar

## Conceptos fundamentales
### Plantillas
- Archivos de texto (normalmente HTML) con placeholders `{{ }}`.
- No ejecutan código arbitrario, solo interpolan datos.
- Favorecen seguridad y mantenibilidad.

### Contexto de datos
- Objeto o estructura pasada al motor de renderizado.
- Puede contener:
	- Valores simples
	- Objetos anidados
	- Arrays
- El diseño correcto del contexto reduce la complejidad de la plantilla.

### Expresiones
- `{{variable}}` para imprimir valores escapados.
- `{{{variable}}}` para imprimir HTML sin escape (uso controlado).
- Soporte para rutas profundas: `{{user.profile.name}}`.

### Helpers
- Funciones reutilizables que extienden la expresividad.
- Tipos:
	- Helpers simples (formato, transformación)
	- Helpers de bloque (control de flujo)
- Permiten mantener las plantillas limpias sin añadir lógica compleja.

## Control de flujo permitido
### Condicionales
- Uso de `if`, `unless` y helpers personalizados.
- Las condiciones deben basarse en datos ya calculados.
- Ejemplo conceptual:
	- Mostrar u ocultar bloques según estado o permisos.

### Iteraciones
- Uso de `each` para recorrer listas.
- Acceso a:
	- Índice
	- Elemento actual
	- Contexto padre
- Ideal para renderizar tablas, listas y menús.

## Implementaciones relevantes
### Implementación en PHP
- [GitHub - zordius/lightncandy: An extremely fast PHP implementation of handlebars ( http://handlebarsjs.com/ ) and mustache ( http://mustache.github.io/ ),](https://github.com/zordius/lightncandy)
- LightnCandy es una de las implementaciones más rápidas y completas en PHP.
- Características clave:
	- Compilación de plantillas a código PHP
	- Alto rendimiento en producción
	- Soporte de helpers personalizados
	- Integración sencilla en frameworks PHP
- Casos de uso comunes:
	- Renderizado de emails
	- Generación de vistas en APIs backend
	- Sistemas CMS y paneles administrativos

### Implementación en Java
- [GitHub - jknack/handlebars.java: Logic-less and semantic Mustache templates with Java](https://github.com/jknack/handlebars.java)
- Implementación robusta para entornos JVM.
- Ventajas:
	- Integración con frameworks Java (Spring, Micronaut)
	- Buen soporte de helpers y layouts
	- Enfoque en plantillas semánticas y mantenibles
- Usado frecuentemente en:
	- Aplicaciones empresariales
	- Generación de documentos y reportes
	- Renderizado server-side

## Ventajas clave
- Separación estricta entre lógica y presentación
- Curva de aprendizaje baja
- Multilenguaje y portable
- Mejora la seguridad al evitar ejecución directa de código
- Facilita el trabajo entre equipos frontend y backend

## Limitaciones y consideraciones
- No diseñado para lógica compleja
- Requiere una buena preparación de datos
- Uso incorrecto de `{{{ }}}` puede introducir riesgos XSS
- En proyectos muy dinámicos puede quedarse corto frente a frameworks reactivos

## Casos de uso recomendados
- Renderizado server-side clásico
- Generación de emails HTML
- Sistemas de plantillas para CMS
- Automatización de documentos y configuraciones
- Entornos donde la seguridad y previsibilidad son prioritarias

# handlebars — conceptos avanzados y temas no cubiertos

## Partials (plantillas reutilizables)
- Fragmentos de plantilla reutilizables que permiten:
	- Evitar duplicación de HTML
	- Mantener consistencia visual
- Se usan para:
	- Headers, footers, cards, componentes repetidos
- Pueden:
	- Recibir contexto propio
	- Heredar el contexto padre
- Clave en arquitecturas con diseño modular.

## Layouts y composición de vistas
- Extensión común en implementaciones backend (PHP, Java).
- Permiten definir:
	- Estructura base (layout)
	- Bloques dinámicos inyectables
- Beneficios:
	- Separación clara entre estructura global y contenido
	- Facilita cambios globales de UI
- No forma parte del core JS, pero es ampliamente soportado por implementaciones server-side.

## Precompilación de plantillas
- Conversión de plantillas a funciones ejecutables antes de producción.
- Ventajas:
	- Mejora significativa de rendimiento
	- Menor consumo de CPU en tiempo de ejecución
	- Ideal para alto tráfico
- Muy utilizada en:
	- PHP (LightnCandy)
	- Build pipelines frontend
- Reduce riesgo de errores en runtime.

## Escapado y seguridad avanzada
- Handlebars escapa HTML por defecto.
- Riesgos potenciales:
	- Uso excesivo de `{{{ }}}`
	- Datos no saneados desde backend
- Buenas prácticas:
	- Escapar siempre por defecto
	- Crear helpers específicos para HTML seguro
	- Validar y normalizar datos antes del renderizado
- Clave para prevenir XSS en renderizado server-side.

## Internacionalización (i18n)
- Handlebars no incluye i18n nativo.
- Integración habitual mediante:
	- Helpers de traducción
	- Diccionarios por idioma
- Patrón común:
	- Claves semánticas en la plantilla
	- Resolución de idioma en backend
- Permite:
	- Reutilizar plantillas
	- Soportar múltiples idiomas sin duplicar vistas.

## Helpers asíncronos (limitaciones)
- El core de Handlebars es síncrono.
- Implicaciones:
	- No se deben hacer llamadas a red o BD en helpers
- Solución recomendada:
	- Resolver toda la información antes del render
	- Pasar datos ya preparados al contexto
- Mantiene coherencia con el enfoque *logic-less*.

## Testing de plantillas
- Aspecto poco documentado pero crítico.
- Estrategias:
	- Tests de snapshot (HTML esperado)
	- Tests de helpers individuales
	- Validación de contextos de entrada
- Beneficios:
	- Prevención de regresiones visuales
	- Mayor confianza en refactors
- Especialmente útil en:
	- Emails
	- Documentos generados automáticamente

## Rendimiento y escalabilidad
- Factores clave:
	- Precompilación
	- Uso moderado de helpers
	- Contextos planos y bien diseñados
- Anti-patrones:
	- Helpers complejos
	- Lógica condicional excesiva
	- Contextos demasiado anidados
- Handlebars escala bien cuando se usa como motor de presentación puro.

## Integración en arquitecturas modernas
- Uso combinado con:
	- APIs REST
	- Microservicios
	- Renderizado híbrido (SSR + cliente)
- Patrón común:
	- Backend genera HTML inicial
	- Frontend añade interactividad
- Útil en sistemas donde no se requiere SPA completa.

## Comparativa conceptual con otros motores
- Frente a motores con lógica embebida:
	- Menor flexibilidad
	- Mayor mantenibilidad
- Frente a frameworks reactivos:
	- Menor dinamismo
	- Mayor simplicidad y previsibilidad
- Ideal cuando:
	- El HTML debe ser claro y auditable
	- El equipo prioriza separación de responsabilidades.

## Antipatrones frecuentes
- Usar Handlebars como lenguaje de programación
- Encadenar helpers para simular lógica compleja
- Mezclar responsabilidades de negocio en plantillas
- No documentar helpers personalizados

## Buenas prácticas avanzadas
- Diseñar primero el contexto de datos
- Limitar helpers a transformaciones simples
- Versionar plantillas críticas
- Revisar HTML generado como artefacto final
- Tratar las plantillas como código mantenible

## Casos donde NO es recomendable
- Interfaces altamente interactivas en tiempo real
- Lógica de presentación dependiente de eventos complejos
- Aplicaciones SPA con estado complejo en cliente
- Cuando se necesita computación en la vista
