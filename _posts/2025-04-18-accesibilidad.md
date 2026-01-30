creation date: 2025-04-18 03:20
tags:
  - frontend
  - accesibilidad
keywords:
source:
status: 🌟
Parent: "Area-Prog"
cssclasses:
  - hide-embedded-header1
  - wide
categories: "[Frontend](/frontend/frontend/)"
public_note: "true"
# Accesibilidad
``

## Conceptos Base
- [Frontend](/frontend/frontend/)
- [SEO](/frontend/seo/)
- Sumario de WCAG 2-es
- Web Content Accessibility Guidelines - Wikipedia, la enciclopedia libre-Web_Content_Accessibility_Guidelines
- WCAG 3 Introduction-
- User Agent Accessibility Guidelines (UAAG) Overview-
	- Lector de pantalla: etiquetado, semántica correcta.
	- Navegación por voz: comandos, estructura clara.

## Estándares y Normativas
- wcag-vs-aria
	- **WCAG**: normas, criterios de éxito, niveles A/AA/AAA.
	- **ARIA**: roles, states, properties para describir propósito y estado.
- Directrices **ATAG** y creación de contenido accesible:
	- Alt text adecuado en imágenes.
	- Compatibilidad con lectores de pantalla.
	- Authoring Tool Accessibility Guidelines (ATAG) Overview-
- WAI-ARIA Overview-
	- Roles, propiedades, patrones de interacción.
	- Mejorar semántica cuando HTML no alcanza.

## Evaluación y Testing
- All ACT Rules-
	- **axe-core**
	- **Google Lighthouse**
- Evaluation and Report Language (EARL) Overview-
	- Describe resultados de pruebas de accesibilidad.
	- **RDF (Resource Description Framework)** para representar datos:
		- Web Semántica
		- Formatos: JSON, XML, Turtle
		- Grafo de información vinculado
		- rdf-accesibilidad

## Personalización y Adaptación
- WAI-Adapt Overview-
	- Módulos y especificaciones para adaptar la interfaz a distintas necesidades cognitivas, visuales o motoras.
	- WAI-Adapt Tools Module-module

## Guías Prácticas y Buenas Prácticas
- What the Heck is ARIA A Beginner's Guide to ARIA for Accessibility-what-heck-aria-beginners-guide-aria-accessibility
	- Uso correcto de ARIA sin sobrecargar.
	- Evitar roles que sustituyen etiquetas nativas.
	- ARIA como complemento, no reemplazo del HTML semántico.

## Bloques de Código

### Ejemplo: Componente con ARIA
{% raw %}
```html
<button aria-expanded="false" aria-controls="panel-info">
	Información
</button>

<div id="panel-info" role="region" hidden>
	Contenido accesible
</div>
```
{% endraw %}`

### Ejemplo: Imagen con texto alternativo

{% raw %}
```html
<img src="producto.jpg" alt="Zapato deportivo azul con suela blanca" />
```
{% endraw %}

### Ejemplo: Uso básico de landmarks

{% raw %}
```html
<header>
	<nav aria-label="Menú principal"></nav>
</header>

<main>
	<section aria-labelledby="titulo-seccion"></section>
</main>

<footer></footer>
```
{% endraw %}

# Accesibilidad (Extensión de conceptos no cubiertos)

## Patrones de Diseño Accesible
- Diseño primero semántico: estructura clara con encabezados `<h1–h6>`, listas y landmarks.
- Patrones inclusivos:
	- Formularios con etiquetas asociadas (`<label for="">`).
	- Componentes interactivos con foco visible.
	- Estados representados por algo más que color (formas, texto).
	- Jerarquía visual y de lectura coherente.
- Prevención de barreras:
	- Evitar contenido dependiente exclusivamente del mouse.
	- Evitar animaciones excesivas o automáticas sin control.

## Accesibilidad Cognitiva
- Lenguaje claro y directo.
- Minimizar carga cognitiva: menos pasos, menos distracciones.
- Contenido predecible: interacciones consistentes.
- Sugerencias de entrada y ejemplos visibles.
- Soporte a WAI-Adapt:
	- Simplificación del contenido.
	- Indicadores icónicos.
	- Textos expandibles/colapsables según necesidad.

## Accesibilidad Móvil
- Tamaños táctiles mínimos (~44px).
- Contraste en exteriores y pantallas pequeñas.
- Compatibilidad con lectores de pantalla móviles.
- Navegación por gestos compatible con alternativas (teclado virtual, switch devices).

## Accesibilidad en Componentes Dinámicos
- Contenido cargado dinámicamente debe:
	- Anunciarse a lectores de pantalla (live regions).
	- Mantener el foco controlado después de interacciones (modales, menús).
- Estados reactivos:
	- `aria-live="assertive"` vs `"polite"`.
	- Manejo adecuado de `aria-busy` durante cargas.
- Evitar “focus traps” en modales mal construidos.

## Accesibilidad en Multimedia
- Vídeo:
	- Subtítulos sincronizados.
	- Transcripción de diálogos y sonidos.
	- Audio-descripción para contenido visual relevante.
- Audio:
	- Pausa/stop accesibles.
	- Alternativas textuales para contenido informativo.
- Imágenes complejas:
	- Descripción larga con `longdesc`, enlaces u otra estructura contextual.

## Accesibilidad en Documentos y Contenido Extenso
- Uso de tablas accesibles:
	- `<th scope="col|row">`.
	- Relaciones complejas mediante `headers` e `id`.
- Navegación rápida:
	- Índices, TOC, landmarks.
	- Saltos (skip-links): `href="#main"`.

## Metodologías y Flujos de Trabajo Accesibles
- Integración continua:
	- Tests automáticos con **axe-core**, **Lighthouse**, Pa11y.
	- Revisión manual obligatoria.
- Accesibilidad en diseño:
	- Añadir criterios WCAG desde prototipos.
	- Validación de contrastes desde UI design tools.
- Accesibilidad en desarrollo:
	- Revisiones de PR con checklist accesible.
	- Reutilización de patrones accesibles en librerías internas.

## Accesibilidad en JavaScript y SPAs
- Estado del router:
	- Cambios de página deben anunciarse y permitir reenfoque en el contenido principal.
- Componentes:
	- Tabs, acordeones, tooltips, menús basados en patrones WAI-ARIA.
- Observaciones:
	- SPAs pueden romper navegación por teclado si no se manejan eventos y roles correctamente.

## Accesibilidad en SEO y Accesibilidad Técnica
- Accesibilidad mejora SEO:
	- Semántica → estructura comprensible por crawlers.
	- Alternativas textuales → contexto para imágenes indexables.
	- Encabezados bien organizados → mejor relevancia temática.
- Microdatos & RDFa:
	- Marcado accesible compatible con Web Semántica.
	- Conectar datos con modelos RDF:
		- rdf-accesibilidad

## Accesibilidad de Herramientas y Entornos (ATAG + UAAG)
- ATAG:
	- Interfaces de edición que generen código accesible por defecto.
	- Herramientas WYSIWYG con controles etiquetados.
- UAAG:
	- Expectativas para navegadores y agentes de usuario:
		- Lectores de pantalla.
		- Navegación por voz.
		- Magnificadores y herramientas de contraste.

## Accesibilidad Organizacional
- Políticas internas:
	- Checklist basado en WCAG 2.2 y futuro WCAG 3.
	- Responsabilidad distribuida: diseño, desarrollo, QA, contenido.
- Auditorías periódicas:
	- Informes EARL:
		- Estandarización de resultados y trazabilidad.
- Formación continua:
	- Capacitación en ARIA, testing, diseño inclusivo.

## Accesibilidad y Ética
- Igualdad de acceso como principio fundamental.
- Responsabilidad legal según país/sector.
- Beneficios indirectos:
	- Mejora UX general.
	- Aumenta adoptabilidad y alcance.

## Bloques de Código

### Live Region para contenido dinámico
{% raw %}
```html
<div aria-live="polite" id="status-message"></div>

<script>
	function updateMessage(text) {
		document.getElementById("status-message").textContent = text;
	}
</script>
```
{% endraw %}`

### Trap de foco correcto en un modal

{% raw %}
```js
const modal = document.getElementById("modal");
const focusable = modal.querySelectorAll("button, a, input");
let index = 0;

modal.addEventListener("keydown", e => {
	if (e.key === "Tab") {
		e.preventDefault();
		index = (index + (e.shiftKey ? -1 : 1) + focusable.length) % focusable.length;
		focusable[index].focus();
	}
});
```
{% endraw %}

### Control accesible para pausar animaciones

{% raw %}
```html
<button id="toggle-anim" aria-pressed="false">Pausar animaciones</button>

<script>
	const btn = document.getElementById("toggle-anim");
	btn.addEventListener("click", () => {
		const active = btn.getAttribute("aria-pressed") === "true";
		document.body.classList.toggle("no-anim", !active);
		btn.setAttribute("aria-pressed", !active);
	});
</script>
```
{% endraw %}

# Glosario de Accesibilidad Web

## WCAG y Normativas
- **WCAG (Web Content Accessibility Guidelines):** Conjunto de pautas internacionales para asegurar que el contenido web sea accesible.
- **Niveles de conformidad A/AA/AAA:** Grados de cumplimiento de WCAG; AA es el más usado en estándares legales.
- **WCAG 3:** Nueva generación de pautas con enfoque más holístico y flexible.
- **UAAG (User Agent Accessibility Guidelines):** Reglas para navegadores y agentes de usuario.
- **ATAG (Authoring Tool Accessibility Guidelines):** Directrices para herramientas de creación de contenido accesible.
- **ACT Rules:** Reglas estandarizadas para evaluar accesibilidad de forma automática.
- **EARL (Evaluation and Report Language):** Formato RDF para reportar resultados de pruebas de accesibilidad.

## ARIA y Semántica
- **ARIA (Accessible Rich Internet Applications):** Atributos que mejoran accesibilidad cuando HTML no es suficiente.
- **Roles ARIA:** Identifican el tipo o función de un elemento (button, dialog, navigation…).
- **ARIA States & Properties:** Describen estados dinámicos (`aria-expanded`, `aria-checked`, etc.).
- **Landmarks ARIA:** Zonas de navegación rápida (banner, main, navigation, contentinfo).
- **Live Regions:** Áreas que anuncian cambios dinámicos a lectores de pantalla.
- **ARIA Authoring Practices (APG):** Patrones recomendados para componentes accesibles.

## HTML Semántico
- **Landmarks HTML:** `<header>`, `<main>`, `<nav>`, `<footer>`.
- **Encabezados estructurados:** Jerarquía lógica usando `<h1–h6>`.
- **Tablas accesibles:** Uso de `<th>`, `scope`, `headers`, `id`.
- **Listas semánticas:** `<ul>`, `<ol>`, `<dl>` para estructura correcta.
- **Formularios accesibles:** `label`, `fieldset`, `legend`, `aria-describedby`.

## Navegación y Teclado
- **Focus management:** Control del foco en interacciones y navegaciones internas.
- **Focus visible:** Indicador visual claro del elemento activo.
- **Tab order:** Orden de tabulación lógico.
- **Skip-links:** Enlaces para saltar directamente al contenido principal.
- **Focus Trap:** Técnica para mantener el foco dentro de un modal accesible.

## Contenidos y Multimedia
- **Texto alternativo (alt):** Descripción textual para imágenes.
- **Subtítulos:** Texto sincronizado para contenido audiovisual.
- **Transcripciones:** Representación textual de audio o vídeo.
- **Audio-descripción:** Narración que describe elementos visuales relevantes.
- **Imágenes complejas:** Se describen con textos largos o estructuras alternativas.

## Accesibilidad Cognitiva
- **Lenguaje claro:** Frases simples, directas, sin jerga innecesaria.
- **Carga cognitiva mínima:** Eliminación de pasos superfluos.
- **Patrones predecibles:** Interacciones consistentes entre páginas y componentes.
- **WAI-Adapt:** Conjunto de módulos para adaptar contenido a necesidades cognitivas.

## Dispositivos de Asistencia
- **Lectores de pantalla:** Herramientas que vocalizan o convierten a braille la interfaz.
- **Navegación por voz:** Control de la interfaz mediante comandos hablados.
- **Switch Devices:** Dispositivos de entrada para usuarios con movilidad reducida.
- **Magnificadores de pantalla:** Herramientas para ampliar contenido.

## Testing y Evaluación
- **axe-core:** Motor de análisis automático de accesibilidad.
- **Google Lighthouse:** Auditoría de rendimiento, SEO y accesibilidad.
- **Pa11y:** Herramienta automatizada para pruebas accesibles.
- **Testing manual:** Validaciones humanas imprescindibles; teclado, lector de pantalla, contraste.
- **Contraste:** Relación mínima recomendada: 4.5:1 (texto normal) y 3:1 (grandes).

## Web Semántica y RDF
- **RDF (Resource Description Framework):** Modelo de datos en grafo para representar información accesible.
- **RDFa / JSON-LD:** Formatos para marcar contenido estructurado.
- **Web Semántica:** Ecosistema de datos enlazados accesibles para máquinas.
- **Turtle:** Sintaxis compacta para describir datos RDF.

## Experiencia de Usuario y Diseño Inclusivo
- **Diseño universal:** Interfaces usables para la mayoría sin necesidad de adaptaciones.
- **Perceptible:** El contenido debe ser presentado de forma comprensible para todos los sentidos.
- **Operable:** Navegable con teclado, voz, dispositivos alternativos.
- **Comprensible:** Interacción predecible y lenguaje claro.
- **Robusto:** Compatible con tecnologías actuales y futuras.

## Accesibilidad Móvil
- **Tamaño táctil mínimo:** 44×44 px recomendado.
- **Sensibilidad a gestos:** Alternativas accesibles cuando gestos no son posibles.
- **Compatibilidad con lectores móviles:** VoiceOver, TalkBack.
- **Reflow:** Contenido adaptable sin scroll horizontal.

## Organización y Políticas
- **Checklist de accesibilidad:** Listas basadas en WCAG para QA.
- **Accesibilidad continua:** Integración en desarrollo (CI/CD).
- **Auditorías internas:** Revisiones periódicas manuales y automáticas.
- **Accesibilidad legal:** Legislación como EN 301 549 o ADA dependiendo del país.

# Guía de Accesibilidad Web 2025 (Sin repeticiones)

## Enfoque 2025: Prioridades y Tendencias
- **Accesibilidad continua (Shift-Left):** Integrar requisitos desde diseño inicial, no como auditoría final.
- **Accesibilidad basada en resultados:** Evaluar experiencias reales de usuarios y no solo criterios técnicos.
- **Automatización inteligente:** Integración de validadores en CI/CD, con reglas actualizadas y adaptativas.
- **Accesibilidad cognitiva y personalizable:** Interfaces capaces de adaptarse dinámicamente (tema, densidad, complejidad).
- **Interoperabilidad con IA accesible:** Contenidos y controles compatibles con asistentes inteligentes y agentes conversacionales.
- **Cumplimiento orientado a datos:** Métricas continuas basadas en telemetría anónima sobre uso de teclado, foco, errores de lectura, etc.

## Cambios Relevantes en el Paisaje 2025
- **WCAG 2.2 consolidada como estándar base**, transición progresiva hacia conceptos de **WCAG 3** (más flexible y centrado en experiencia).
- Mayor adopción de **WAI-Adapt** en editores, LMS y apps empresariales.
- Navegadores ampliando soporte nativo para **preferencias del usuario**: reducción de animaciones, contraste aumentado, tipografía adaptable.
- Mayor presión legal para cumplir con accesibilidad en apps móviles y SaaS.

## Diseño Accesible en 2025
- **Diseño fluido adaptable a dispositivos variables:** TVs, coches, wearables, pantallas plegables.
- **Layout cognitivo estable:** evitar cambios bruscos de estructura entre vistas del mismo flujo.
- **Esquemas de color Auditados:** contraste dinámico según condiciones de luz o preferencias del usuario.
- **Iconografía reforzada:** iconos acompañados de texto visible por defecto (no solo tooltips).

## Interacción y Navegación Modernas
- **Compatibilidad gestual accesible:** ofrecer equivalentes táctiles, de teclado y voz para interacciones complejas.
- **Enfoque multimodal:** teclado + voz + mirada + switches conviviendo sin conflictos.
- **Navegación predictiva:** asistentes que anuncian el siguiente paso de forma no intrusiva.
- **Indicadores de estado enriquecidos:** feedback inmediato, claro y detectable por tecnología asistiva.

## Componentes 2025: Patrones Actualizados
- **Modales sin bloqueo:** permitir volver al contenido detrás si no hay riesgo funcional.
- **Componentes conversacionales:** formularios que permiten modo tradicional o interacción por voz.
- **Widgets adaptativos:** acordeones, tabs y menús que cambian según preferencias declaradas por el usuario.
- **Feedback accesible sin ARIA redundante:** usar HTML nativo + roles mínimos.

## Accesibilidad en IA y Automatización
- **Modelos explicables:** asistentes que verbalizan intención y pasos.
- **Generación de texto alternativo asistida:** IA como apoyo, con revisión humana obligatoria.
- **Reconocimiento de contenido sensible:** ayuda automatizada para describir imágenes complejas (gráficos, diagramas).

## Pruebas y Auditoría en 2025
- **Validación híbrida:** robots + validación humana experta + pruebas con usuarios reales.
- **Monitoreo continuo:** dashboards de accesibilidad en producción.
- **Alertas de regresión:** detectar cuando cambios de UI rompen foco, roles o navegación.

## Buenas Prácticas Avanzadas (2025)
- Integrar **contraste adaptativo** basado en entorno o preferencia.
- Proveer **modos de lectura** con densidad variable.
- Desplegar **capas de ayuda contextual** configurables (iconos, texto, voz).
- Mantener **interacciones sin tiempo límite** o con extensiones claras.

## Accesibilidad Organizacional 2025
- **Cultura transversal:** accesibilidad integrada en OKRs y KPIs.
- **Roles especializados:** Accessibility Engineers, Inclusive Designers, testers expertos.
- **Procesos repetibles:** repositorios de componentes accesibles y patrones certificados.

## Checklist Actualizada 2025
- Estructura y semántica clara.
- Navegación consistente entre dispositivos.
- Contraste adaptable según preferencia o entorno.
- Control total por teclado, voz y switches.
- Contenido multimedia con subtítulos y descripciones generadas + revisadas.
- Formularios con hints, validaciones accesibles y mensajes anunciados a lectores de pantalla.
- Componentes interactivos con foco visible y gestionado.
- Preferencias del usuario respetadas (reducir movimiento, fuente grande, modo lectura).
- Testing automatizado, manual y con usuarios.
