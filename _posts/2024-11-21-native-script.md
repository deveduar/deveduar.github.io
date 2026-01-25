---
date: 2024-11-21 19:30
title: native script
tags:
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
cssclasses:
public_note: "true"
category: mobile-apps
categories:
  - mobile-apps
  - NativeScript
  - angular
  - hide-embedded-header1
  - wide
  - Desarrollo multiplataforma
---
# NativeScript
`$= dv.current().file.tags.join(" ")`

- [Desarrollo multiplataforma](/uncategorized/desarrollo-multiplataforma/)
- android
- [angular](/frontend/angular/)
- [Software engineering](/uncategorized/software-engineering/)
- Build a master-detail app with Angular - NativeScript

## Descripción general
NativeScript es un framework de **desarrollo multiplataforma** que permite crear aplicaciones móviles **nativas reales** para Android e iOS usando **JavaScript, TypeScript o frameworks web** como Angular y Vue.  
A diferencia de enfoques híbridos basados en WebView, NativeScript accede directamente a las **APIs nativas** del sistema operativo.

## Arquitectura
- Runtime nativo  
	- Motor que traduce llamadas JavaScript/TypeScript directamente a APIs nativas (Java/Kotlin en Android, Objective-C/Swift en iOS).
- UI nativa declarativa  
	- Cada componente visual se mapea 1:1 a un widget nativo.
- Capa de lógica compartida  
	- La mayor parte del código es común entre plataformas.
- Integración con frameworks web  
	- Soporte oficial para Angular y Vue.
- Acceso directo a APIs del sistema  
	- No requiere plugins para la mayoría de funcionalidades nativas.

## Diferencias frente a otras soluciones
- Versus Cordova / Ionic  
	- Sin WebView, mejor rendimiento y experiencia nativa.
- Versus React Native  
	- Acceso completo a APIs sin escribir bridges manuales.
- Versus Flutter  
	- Usa tecnologías web estándar en lugar de un motor gráfico propio.

## Casos de uso comunes
- Aplicaciones empresariales internas  
	- ERP móviles, CRM, apps de inventario.
- Apps con fuerte integración nativa  
	- Uso intensivo de sensores, almacenamiento local, APIs del sistema.
- Equipos con experiencia en Angular  
	- Reutilización de conocimientos y patrones.
- Prototipos nativos rápidos  
	- Desarrollo ágil con hot reload.

## Integración con Angular
- Arquitectura basada en módulos  
	- Uso de NgModules, componentes y servicios.
- Templates declarativos  
	- XML específico de NativeScript en lugar de HTML estándar.
- Data binding  
	- Two-way binding y observables.
- Inyección de dependencias  
	- Mismo sistema que Angular web.
- Reutilización de lógica  
	- Servicios y modelos compartidos entre web y móvil.

## Ejemplo de componente Angular
### Componente básico
{% raw %}
```ts
import { Component } from "@angular/core";

@Component({
	selector: "ns-home",
	template: `
	<StackLayout>
		<Label text="Hola NativeScript con Angular"></Label>
		<Button text="Pulsar" (tap)="onTap()"></Button>
	</StackLayout>
	`
})
export class HomeComponent {
	onTap() {
		console.log("Botón pulsado");
	}
}
```
{% endraw %}`

## Sistema de UI

* Layouts principales
	* StackLayout
	* GridLayout
	* FlexboxLayout
* Componentes comunes
* Button, Label, TextField, ListView.
* Estilos
* CSS similar al estándar web.
* Theming
* Personalización por plataforma (Android / iOS).

## Acceso a APIs nativas

* Llamadas directas
	* Uso de clases nativas desde TypeScript.
* Sin necesidad de wrappers
	* APIs disponibles automáticamente.
* Ejemplos
	* Cámara
	* GPS
	* Sensores
	* Almacenamiento

## Ejemplo de acceso a API nativa

### Acceso a dispositivo

{% raw %}
```ts
import { Device } from "@nativescript/core";

console.log(Device.model);
console.log(Device.osVersion);
```
{% endraw %}

## Build y herramientas

* CLI oficial
	* nativescript / ns.
* Hot Reload
	* Cambios en tiempo real sin recompilar.
* Debugging
	* Chrome DevTools
	* Android Studio / Xcode.
* Empaquetado
	* APK, AAB, IPA.

## Plugins y ecosistema

* Plugins oficiales
	* Cámara
	* Geolocalización
	* Acceso a archivos.
* Plugins comunitarios
	* Integraciones con servicios externos.
	* Marketplace
	* [NativeScript Plugins](https://market.nativescript.org)

## Ventajas principales

* Rendimiento nativo real
* Acceso completo al sistema
* Código compartido alto
* Ideal para equipos web

## Limitaciones

* Ecosistema más pequeño que Flutter o React Native
* Curva de aprendizaje en UI XML
* Menor adopción en proyectos nuevos

## Relación con ingeniería de software

* Arquitectura limpia
	* Separación de UI, lógica y datos.
* Testing
	* Pruebas unitarias en TypeScript.
* Escalabilidad
	* Adecuado para aplicaciones medianas y grandes.
* Mantenibilidad
	* Código compartido y tipado fuerte con TypeScript

# NativeScript — Temas avanzados y conceptos no cubiertos

## Rendimiento y optimización
- Gestión del ciclo de vida  
	- Control explícito de creación y destrucción de vistas.
	- Prevención de fugas de memoria en bindings y observables.
- Optimización de ListView y CollectionView  
	- Uso de virtualización.
	- Evitar cálculos pesados en templates.
- Carga diferida  
	- Lazy loading de módulos y vistas.
- Separación de lógica y UI  
	- Servicios y helpers para minimizar trabajo en el hilo principal.

## Seguridad
- Almacenamiento seguro  
	- Uso de APIs nativas para Keychain (iOS) y Keystore (Android).
- Protección de datos locales  
	- Cifrado de bases de datos y archivos.
- Permisos  
	- Gestión explícita y contextual de permisos.
- Endurecimiento de builds  
	- Ofuscación en Android.
	- Configuración de entitlements en iOS.
- Comunicación segura  
	- HTTPS obligatorio.
	- Pinning de certificados cuando sea necesario.

## Internacionalización (i18n) y localización
- Soporte multilenguaje  
	- Archivos de traducción por idioma.
- Detección automática de idioma  
	- Uso de configuración regional del sistema.
- Formatos regionales  
	- Fechas, números y monedas.
- Cambios dinámicos de idioma  
	- Actualización de UI sin reinstalar la app.

## Accesibilidad
- Compatibilidad con lectores de pantalla  
	- Labels accesibles y roles correctos.
- Navegación por teclado y gestos  
	- Especialmente relevante en tablets.
- Tamaños de texto dinámicos  
	- Respeto a configuraciones del sistema.
- Contraste y colores  
	- Diseño accesible por defecto.

## Testing
- Pruebas unitarias  
	- Servicios, lógica de negocio y utilidades.
- Pruebas de integración  
	- Interacción entre componentes y servicios.
- Pruebas end-to-end  
	- Automatización de flujos de usuario.
- Mocking de APIs nativas  
	- Simulación de sensores y servicios del sistema.
- Integración con pipelines  
	- Ejecución automática en CI.

## CI/CD y automatización
- Builds automatizados  
	- Android (APK / AAB).
	- iOS (IPA).
- Integración continua  
	- Validación de código en cada commit.
- Distribución  
	- Canales internos de testing.
	- Publicación en stores.
- Gestión de versiones  
	- Versionado semántico.
- Firma y certificados  
	- Manejo seguro de claves y perfiles.

## Migración y mantenimiento
- Migración desde apps nativas  
	- Reescritura progresiva de módulos.
- Migración desde Cordova / Ionic  
	- Sustitución de WebView por UI nativa.
- Actualizaciones de NativeScript  
	- Adaptación a cambios de runtime y plugins.
- Refactorización continua  
	- Reducción de deuda técnica.
- Soporte a largo plazo  
	- Evaluación de estabilidad del ecosistema.

## Arquitecturas avanzadas
- MVVM  
	- Patrón común en aplicaciones NativeScript.
- Clean Architecture  
	- Separación por capas: dominio, aplicación e infraestructura.
- Gestión de estado  
	- Servicios reactivos.
	- Patrones inspirados en Redux.
- Modularización  
	- Apps grandes divididas por dominios funcionales.

## Integración con backend
- REST y GraphQL  
	- Consumo de APIs modernas.
- Autenticación  
	- JWT, OAuth2.
- Sincronización offline  
	- Estrategias online/offline.
- Caché  
	- Persistencia local inteligente.

## Escenarios avanzados de uso
- Aplicaciones offline-first  
	- Trabajo sin conectividad constante.
- Apps industriales  
	- Uso intensivo de hardware.
- Apps gubernamentales o reguladas  
	- Cumplimiento de normativas.
- Apps internas corporativas  
	- Distribución privada y controlada.

## Comparación estratégica
- Cuándo elegir NativeScript  
	- Necesidad de APIs nativas completas.
	- Equipo con fuerte base web.
- Cuándo no elegirlo  
	- Requerimientos de UI altamente personalizada con animaciones complejas.
	- Dependencia de un ecosistema masivo de plugins.

## Futuro y viabilidad
- Evolución del runtime  
	- Mejora continua de rendimiento.
- Convergencia con TypeScript moderno  
	- Tipado más estricto.
- Rol en el ecosistema multiplataforma  
	- Alternativa sólida para casos nativos específicos.
- Mantenimiento comunitario  
	- Importancia de la comunidad y contribuciones

# NativeScript — Guía práctica con ejemplos y casos de uso

## Estructura básica de un proyecto
- App raíz  
	- Punto de entrada de la aplicación.
- Módulos  
	- Separación por funcionalidades.
- Componentes  
	- UI y lógica asociada.
- Servicios  
	- Lógica de negocio y acceso a datos.
- Recursos nativos  
	- Android: `App_Resources/Android`  
	- iOS: `App_Resources/iOS`

## Caso de uso: Aplicación empresarial CRUD
- Gestión de clientes, productos o incidencias.
- Comunicación con backend REST.
- Persistencia local para modo offline.

### Servicio de datos REST
{% raw %}
```ts
import { Http } from "@nativescript/core";

export class ApiService {
	private baseUrl = "https://api.ejemplo.com";

	getClientes() {
		return Http.request({
			url: `${this.baseUrl}/clientes`,
			method: "GET",
			headers: { "Content-Type": "application/json" }
		});
	}
}
```
{% endraw %}`

### Componente con listado

{% raw %}
```ts
import { Component, OnInit } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
	selector: "ns-clientes",
	template: `
	<ListView [items]="clientes">
		<ng-template let-item="item">
			<Label [text]="item.nombre"></Label>
		</ng-template>
	</ListView>
	`
})
export class ClientesComponent implements OnInit {
	clientes = [];

	constructor(private api: ApiService) {}

	ngOnInit() {
		this.api.getClientes().then(r => {
			this.clientes = r.content.toJSON();
		});
	}
}
```
{% endraw %}

## Caso de uso: Acceso a hardware del dispositivo

* Lectura de información del dispositivo.
* Uso de sensores y características nativas.

### Información del dispositivo

{% raw %}
```ts
import { Device } from "@nativescript/core";

console.log(Device.model);
console.log(Device.os);
console.log(Device.manufacturer);
```
{% endraw %}

### Uso de geolocalización

{% raw %}
```ts
import { getCurrentLocation } from "@nativescript/geolocation";

getCurrentLocation({
	desiredAccuracy: 3,
	maximumAge: 5000,
	timeout: 20000
}).then(location => {
	console.log(location.latitude, location.longitude);
});
```
{% endraw %}

## Caso de uso: Autenticación de usuarios

* Login contra backend.
* Manejo de tokens.
* Protección de rutas.

### Servicio de autenticación

{% raw %}
```ts
import { Http, ApplicationSettings } from "@nativescript/core";

export class AuthService {
	login(usuario: string, password: string) {
		return Http.request({
			url: "https://api.ejemplo.com/login",
			method: "POST",
			content: JSON.stringify({ usuario, password })
		}).then(r => {
			const data = r.content.toJSON();
			ApplicationSettings.setString("token", data.token);
		});
	}

	getToken() {
		return ApplicationSettings.getString("token");
	}
}
```
{% endraw %}

## Caso de uso: Almacenamiento local y modo offline

* Persistencia de datos.
* Sincronización posterior.

### Uso de ApplicationSettings

{% raw %}
```ts
import { ApplicationSettings } from "@nativescript/core";

ApplicationSettings.setString("usuario", "admin");
const usuario = ApplicationSettings.getString("usuario");
```
{% endraw %}

### Estrategia offline-first

* Guardar respuestas del backend.
* Mostrar datos locales si no hay conexión.
* Sincronizar cambios al recuperar conectividad.

## Caso de uso: Navegación entre vistas

* Navegación basada en stack.
* Paso de parámetros.

### Navegación simple

{% raw %}
```ts
import { RouterExtensions } from "@nativescript/angular";

constructor(private router: RouterExtensions) {}

irADetalle(id: number) {
	this.router.navigate(["/detalle", id]);
}
```
{% endraw %}

## Caso de uso: Notificaciones locales

* Recordatorios.
* Alertas internas.

### Notificación local

{% raw %}
```ts
import { LocalNotifications } from "@nativescript/local-notifications";

LocalNotifications.schedule([{
	id: 1,
	title: "Aviso",
	body: "Tarea pendiente",
	at: new Date(new Date().getTime() + 60000)
}]);
```
{% endraw %}

## Caso de uso: Diseño adaptable por plataforma

* Diferencias visuales Android / iOS.
* Comportamiento específico.

### Detección de plataforma

{% raw %}
```ts
import { isAndroid, isIOS } from "@nativescript/core";

if (isAndroid) {
	console.log("Android específico");
}

if (isIOS) {
	console.log("iOS específico");
}
```
{% endraw %}

## Caso de uso: Estilos y tematización

* CSS compartido.
* Overrides por plataforma.

### Estilos básicos

{% raw %}
```css
Button {
	background-color: #3f51b5;
	color: white;
	border-radius: 4;
}
```
{% endraw %}

### Estilos por plataforma

{% raw %}
```css
Button.android {
	font-size: 14;
}

Button.ios {
	font-size: 16;
}
```
{% endraw %}

## Caso de uso: Arquitectura escalable

* Separación clara de responsabilidades.
* Facilita testing y mantenimiento.

### Estructura recomendada

* core
	* Servicios compartidos.
* features
	* Módulos funcionales.
* shared
	* Componentes reutilizables.
* models
	* Interfaces y tipos.

## Caso de uso: Automatización y build

* Builds reproducibles.
* Entornos diferenciados.

### Build Android

{% raw %}
```bash
ns build android --release
```
{% endraw %}

### Build iOS

{% raw %}
```bash
ns build ios --release
```
{% endraw %}

## Caso de uso: Integración con ingeniería de software

* Control de versiones
* Git y flujos colaborativos.
* Testing automatizado
* Reducción de errores.
* CI/CD
* Entrega continua de aplicaciones.
* Mantenibilidad
* Código tipado y modular

# Recursos y Tools para NativeScript (estado 2025-2026)
`$= dv.current().file.tags.join(" ")`

## Documentación oficial y guías
- **Docs NativeScript** — Documentación completa, actualizada y mantenida directamente por el proyecto.  
	Incluye **Guía de inicio, APIs, templates y ejemplos**.  
	[NativeScript Docs](https://docs.nativescript.org/)
- **Repositorio GitHub de docs** — Fuente de la documentación, útil si quieres clonar, mejorar o leer offline.  
	[NativeScript Docs Repo](https://github.com/NativeScript/docs)
- **Repositorio principal de NativeScript** — Código fuente del framework, plugins internos, tipos y utilidades.  
	[NativeScript Framework](https://github.com/NativeScript/NativeScript)

## CLI y herramientas de desarrollo
- **NativeScript CLI (`ns`)**  
	- Comandos para crear, compilar, ejecutar, depurar y empaquetar apps nativas.
	- Instalación estándar: `npm install -g nativescript`
- **Paquetes `@nativescript/*`**  
	- Módulos oficiales como `@nativescript/core`, `@nativescript/types`, etc., con APIs nativas tipadas.  
	[NativeScript npm scope](https://www.npmjs.com/~nativescript)
- **Nx para NativeScript** — Integración con monorepositorios y generación de librerías y apps con estructura escalable.  
	[Nx NativeScript](https://github.com/NativeScript/nx)

## Marketplace de plugins y extensiones
- **NativeScript Marketplace** — Portal oficial para descubrir plugins, templates y herramientas de terceros, con categorías y plugins verificados.  
	[NativeScript Marketplace](https://market.nativescript.org/plugins)
- **Plugin destacado**
	- `@nativescript-community/ui-webview` — WebView extendido con captura de URLs y ejecución de JavaScript.  
		[UI WebView Plugin](https://github.com/nativescript-community/ui-webview)
- **Plantillas de plugin / seeds**  
	- Seeds oficiales y comunitarios para crear plugins reutilizables y publicarlos en npm.

## Formaciones, cursos y aprendizaje
- **Talleres y cursos online**
	- Curso de NativeScript con Angular — desarrollo completo de aplicaciones móviles.
	- Talleres prácticos de componentes nativos: cámara, GPS, Bluetooth.
- **Cursos profesionales**
	- Formación estructurada orientada a entornos corporativos.
	- NativeScript + Angular + Redux para aplicaciones móviles avanzadas.

## Comunidad, soporte y eventos
- **Slack / Discord de la comunidad** — Espacios activos para soporte técnico y discusión del ecosistema.  
	[NativeScript Community](https://nativescript.org/community)
- **Redes sociales oficiales** — Noticias, lanzamientos y anuncios.  
	[NativeScript en X](https://x.com/nativescript)
- **NativeScript Developer Day Workshop** — Taller interactivo con material práctico y ejercicios guiados.  
	[Developer Day Workshop](https://nativescript.github.io/developer-day-workshop/)

## Versiones y estado del proyecto (2025)
- **NativeScript 8.9+**  
	- Mejoras de rendimiento y estabilidad.
	- Evolución del runtime.
	- Integración más madura con Angular moderno.
	- Soporte continuo de la comunidad y mantenimiento activo.

## Integraciones por framework
- **Angular (`@nativescript/angular`)** — Integración oficial para usar Angular como framework principal.  
	[NativeScript Angular](https://docs.nativescript.org/angular/start/introduction)
- **Vue (NativeScript-Vue)** — Integración comunitaria para Vue 3 con Composition API.  
	[NativeScript Vue](https://nativescript-vue.org)

## Repositorios auxiliares útiles
- **Runtimes y tooling**
	- CLI y herramientas oficiales.  
		[NativeScript GitHub Org](https://github.com/NativeScript)
	- Runtime Android e iOS — Implementación de la capa nativa.

## Recursos de productividad y aprendizaje
- **Plantillas y ejemplos de proyectos** — Estructuras base para apps con Angular y Vue.  
	[NativeScript Examples](https://github.com/NativeScript/examples)
- **Stack Overflow** — Preguntas frecuentes y soluciones prácticas.  
	[NativeScript en Stack Overflow](https://stackoverflow.com/questions/tagged/nativescript)
- **Blogs técnicos**  
	- Artículos sobre rendimiento, arquitectura y casos de uso reales.

