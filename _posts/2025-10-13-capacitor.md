---
date: 2025-10-13 14:45
title: capacitor
tags:
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
cssclasses:
public_note: "true"
category: desktop-apps
categories:
  - desktop-apps
  - Capacitor
  - android
  - native_runtime
  - hide-embedded-header1
  - Desarrollo multiplataforma
---
# Capacitor
``$= dv.current().file.tags.join(" ")``
## Recursos y documentación
- [Desarrollo multiplataforma](/uncategorized/desarrollo-multiplataforma/)
- [angular](/frontend/angular/)
- [Using Capacitor with Angular](https://capacitorjs.com/docs/frameworks/angular)
- [Capacitor - Cross-platform Native Runtime for Web Apps](https://capacitorjs.com/docs)
## Concepto
Capacitor es un **runtime nativo multiplataforma** que permite construir aplicaciones móviles, de escritorio y web usando tecnologías web modernas como **HTML, CSS y JavaScript**. Facilita la integración con **APIs nativas** de cada plataforma sin necesidad de escribir código nativo específico.

## Características principales
- **Multiplataforma:** Compatible con iOS, Android, web y escritorio.
- **Integración con frameworks web:** Funciona de forma nativa con [angular](/frontend/angular/), React y Vue.
- **Plugins nativos:** Permite usar funcionalidades del dispositivo (cámara, geolocalización, almacenamiento, etc.) mediante plugins o creando los propios.
- **Actualizaciones sencillas:** Las aplicaciones web se pueden actualizar sin pasar por la tienda de apps, manteniendo la lógica nativa intacta.
- **Interoperabilidad:** Se integra fácilmente con proyectos existentes de Cordova y otros frameworks.

## Instalación y configuración básica
### Instalación en un proyecto Angular
{% raw %}
```bash
npm install @capacitor/core @capacitor/cli
npx cap init [appName] [appId]
```
{% endraw %}`

### Añadir plataformas

{% raw %}
```bash
npx cap add android
npx cap add ios
```
{% endraw %}

### Sincronizar cambios del proyecto web

{% raw %}
```bash
npx cap sync
```
{% endraw %}

## Uso con Angular

- Se recomienda mantener la **lógica de negocio en Angular** y utilizar Capacitor para funcionalidades nativas.
- Integración con servicios y componentes Angular.
- Ejemplo de uso de un plugin de cámara:

{% raw %}
```typescript
import { Camera, CameraResultType } from '@capacitor/camera';

async function takePhoto() {
	const photo = await Camera.getPhoto({
		quality: 90,
		resultType: CameraResultType.Uri
	});
	console.log(photo.webPath);
}
```
{% endraw %}

## Plugins y extensiones

- Capacitor ofrece plugins oficiales y comunidad para:  
     Cámara, Geolocalización, Notificaciones, Haptics, Almacenamiento.
- Se pueden crear **plugins personalizados** si se necesita acceso a APIs nativas no cubiertas.

# capacitor mas conceptos

## Arquitectura interna
Capacitor se basa en una **WebView nativa** por plataforma:
- iOS: WKWebView
- Android: WebView del sistema
- Desktop: WebView integrada según runtime

La aplicación web se empaqueta y se comunica con el código nativo mediante un **bridge JavaScript ↔ Nativo**.

## Bridge y comunicación nativa
- El bridge permite llamar APIs nativas desde JavaScript.
- Comunicación asincrónica basada en Promises.
- Maneja serialización segura de datos entre capas.
- Reduce la dependencia directa de código nativo.

## Plugins
### Tipos de plugins
- **Plugins oficiales:** mantenidos por el equipo de Capacitor.
- **Plugins comunitarios:** creados por terceros.
- **Plugins personalizados:** desarrollados para necesidades específicas del proyecto.

### Estructura de un plugin
- Interfaz TypeScript.
- Implementación nativa por plataforma (Swift/Obj-C, Kotlin/Java).
- Registro automático mediante Capacitor.

## Capacitor vs Cordova
- Capacitor es el **sucesor moderno de Cordova**.
- Ventajas clave:
	tab	Acceso directo al proyecto nativo.
	tab	Mejor integración con herramientas modernas.
	tab	Arquitectura más simple y mantenible.
- Permite reutilizar plugins Cordova existentes.

## Gestión de plataformas
### Estructura del proyecto
- `/android` y `/ios` contienen proyectos nativos completos.
- Cambios nativos se mantienen incluso tras sincronizaciones.
- Separación clara entre frontend y nativo.

### Comandos clave
{% raw %}
```bash
npx cap open android
npx cap open ios
```
{% endraw %}`

## Ciclo de vida de la aplicación

* Eventos gestionados por Capacitor:
  tab	App activa
  tab	App en segundo plano
  tab	Reanudación
  tab	Cierre
* Acceso mediante el plugin `App`.

## Acceso a funcionalidades del dispositivo

* Sensores (acelerómetro, giroscopio).
* Almacenamiento seguro y preferencias.
* Sistema de archivos local.
* Estado de red y batería.
* Notificaciones push y locales.

## Seguridad

* Uso de HTTPS obligatorio en producción.
* Control de orígenes permitidos.
* Aislamiento del WebView.
* Integración con mecanismos de seguridad nativos.
* Soporte para autenticación biométrica mediante plugins.

## Build y despliegue

### Flujo de build

* Build web (Angular, React, etc.).
* Sincronización con plataformas nativas.
* Build nativo desde Android Studio o Xcode.

### Distribución

* Google Play Store.
* Apple App Store.
* Distribución interna o empresarial.

## Actualizaciones y mantenimiento

* Actualización del frontend sin tocar código nativo.
* Migraciones simples entre versiones.
* Bajo coste de mantenimiento comparado con apps nativas puras.

## Casos de uso ideales

* Aplicaciones empresariales.
* MVPs multiplataforma.
* Aplicaciones web que requieren acceso nativo.
* Proyectos que priorizan rapidez de desarrollo y reutilización de código.

## Integración con ecosistema Ionic

* Capacitor es el runtime recomendado por Ionic.
* Compatible con Ionic UI Components.
* No requiere usar Ionic para funcionar.

## Buenas prácticas

* Mantener el core de la app como **web-first**.
* Limitar lógica nativa al mínimo necesario.
* Versionar plugins personalizados.
* Probar en dispositivos reales regularmente.
* Separar claramente responsabilidades web y nativas.

# Capacitor – Ejemplos de código y configuración

## Inicialización del proyecto
### Inicializar Capacitor
{% raw %}
```bash
npx cap init myApp com.example.myapp
```
{% endraw %}`

### Estructura generada

* `capacitor.config.ts`
* `android/`
* `ios/`
* `www/` o `dist/` (build web)

## Archivo de configuración

### capacitor.config.ts

{% raw %}
```ts
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.myapp',
	appName: 'MyApp',
	webDir: 'dist',
	bundledWebRuntime: false,
	server: {
		androidScheme: 'https'
	}
};

export default config;
```
{% endraw %}

## Gestión de plataformas

### Añadir plataformas

{% raw %}
```bash
npx cap add android
npx cap add ios
```
{% endraw %}

### Sincronizar cambios

{% raw %}
```bash
npx cap sync
```
{% endraw %}

### Abrir proyectos nativos

{% raw %}
```bash
npx cap open android
npx cap open ios
```
{% endraw %}

## Plugins oficiales

### Cámara

{% raw %}
```ts
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const takePhoto = async () => {
	const image = await Camera.getPhoto({
		quality: 80,
		allowEditing: false,
		resultType: CameraResultType.Uri,
		source: CameraSource.Camera
	});
	console.log(image.webPath);
};
```
{% endraw %}

### Geolocalización

{% raw %}
```ts
import { Geolocation } from '@capacitor/geolocation';

const getPosition = async () => {
	const coordinates = await Geolocation.getCurrentPosition();
	console.log(coordinates.coords.latitude, coordinates.coords.longitude);
};
```
{% endraw %}

### Preferencias (almacenamiento clave-valor)

{% raw %}
```ts
import { Preferences } from '@capacitor/preferences';

await Preferences.set({
	key: 'token',
	value: 'abc123'
});

const { value } = await Preferences.get({ key: 'token' });
console.log(value);
```
{% endraw %}

## Ciclo de vida de la aplicación

### Eventos de App

{% raw %}
```ts
import { App } from '@capacitor/app';

App.addListener('appStateChange', state => {
	console.log('Is active:', state.isActive);
});

App.addListener('backButton', () => {
	console.log('Back button pressed');
});
```
{% endraw %}

## Estado de red

### Network

{% raw %}
```ts
import { Network } from '@capacitor/network';

const status = await Network.getStatus();
console.log(status.connected, status.connectionType);

Network.addListener('networkStatusChange', status => {
	console.log('Network status changed', status);
});
```
{% endraw %}

## Sistema de archivos

### Leer y escribir archivos

{% raw %}
```ts
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

await Filesystem.writeFile({
	path: 'example.txt',
	data: 'Hola Capacitor',
	directory: Directory.Documents,
	encoding: Encoding.UTF8
});

const content = await Filesystem.readFile({
	path: 'example.txt',
	directory: Directory.Documents,
	encoding: Encoding.UTF8
});

console.log(content.data);
```
{% endraw %}

## Notificaciones locales

### Programar notificación

{% raw %}
```ts
import { LocalNotifications } from '@capacitor/local-notifications';

await LocalNotifications.schedule({
	notifications: [
		{
			title: 'Recordatorio',
			body: 'Ejemplo con Capacitor',
			id: 1,
			schedule: { at: new Date(Date.now() + 10000) }
		}
	]
});
```
{% endraw %}

## Permisos

### Solicitar permisos

{% raw %}
```ts
import { Camera } from '@capacitor/camera';

await Camera.requestPermissions({
	permissions: ['camera', 'photos']
});
```
{% endraw %}

## Uso con Angular

### Servicio Angular para plugins

{% raw %}
```ts
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({ providedIn: 'root' })
export class LocationService {
	async getLocation() {
		return await Geolocation.getCurrentPosition();
	}
}
```
{% endraw %}

## Plugins personalizados

### Interfaz TypeScript

{% raw %}
```ts
export interface ExamplePlugin {
	echo(options: { value: string }): Promise<{ value: string }>;
}
```
{% endraw %}

### Uso desde la app

{% raw %}
```ts
import { registerPlugin } from '@capacitor/core';
import type { ExamplePlugin } from './definitions';

const Example = registerPlugin<ExamplePlugin>('Example');

const result = await Example.echo({ value: 'Hola' });
console.log(result.value);
```
{% endraw %}

## Build y despliegue

### Build web

{% raw %}
```bash
npm run build
```
{% endraw %}

### Flujo completo

{% raw %}
```bash
npm run build
npx cap sync
npx cap open android
```
{% endraw %}

## Debugging

* Android: Logcat desde Android Studio.
* iOS: Consola de Xcode.
* WebView: DevTools remotos.
* Uso de `console.log` visible en entornos nativos.

## Variables de entorno

### Uso con Angular

{% raw %}
```ts
export const environment = {
	production: true,
	apiUrl: 'https://api.example.com'
};
```
{% endraw %}

## Buenas prácticas técnicas

* Centralizar acceso a plugins en servicios.
* Evitar lógica pesada en plugins nativos.
* Probar permisos en dispositivos reales.
* Versionar cambios nativos junto al frontend.

# Recursos de Capacitor (estado **2025**)
$= dv.current().file.tags.join(" ")

## 📘 Documentación oficial 2025
- **[Capacitor Docs v5 – Plugins y APIs](https://capacitorjs.com/docs/v5/plugins)**  
	Documentación oficial de plugins mantenidos por el equipo de Capacitor; incluye APIs nativas y su uso desde JavaScript/TypeScript.
- **[Capacitor Community Plugins](https://capacitorjs.com/docs/plugins/community)**  
	Colección curada de plugins comunitarios compatibles con distintas versiones de Capacitor.
- **[Crear plugins en Capacitor (guía oficial v5)](https://capacitorjs.com/docs/plugins/creating-plugins)**  
	Guía práctica para desarrollar, estructurar y publicar plugins personalizados.
- **[Repositorio oficial de plugins (GitHub)](https://github.com/ionic-team/capacitor-plugins)**  
	Plugins oficiales con ejemplos, control de versiones y compatibilidad por plataforma.

## 📦 Plugins comunitarios y ecosistema
- **[Capacitor Community (GitHub)](https://github.com/capacitor-community)**  
	Organización con decenas de plugins útiles (Bluetooth, Safe Area, In-App Review, Auth, etc.).
- **[@capacitor-community/contacts](https://github.com/capacitor-community/contacts)**  
	Plugin para acceder a los contactos nativos en iOS y Android.
- **[Capgo Plugins](https://capgo.app/es/plugins/)**  
	Ecosistema de plugins listos para producción, con soporte comercial y documentación avanzada.

## 📚 Guías, talleres y contenidos de aprendizaje
- **[Bringing Your Web App to Native With Capacitor](https://gitnation.com/contents/llevando-tu-aplicacion-web-a-nativa-con-capacitor/es)**  
	Taller y guía práctica para migrar aplicaciones web a apps nativas con Capacitor.
- **[Reddit – r/capacitor](https://www.reddit.com/r/capacitor/)**  
	Comunidad activa con discusiones sobre problemas reales, plugins y mejores prácticas.
- **[Capgo Blog](https://capgo.app/es/blog/)**  
	Artículos sobre desarrollo móvil, seguridad, OTA updates, CI/CD y estrategias de despliegue (activo en 2025).

## 🛠 Herramientas y flujos de 2025
- **[Capacitor + VS Code](https://capacitorjs.com/docs/vscode)**  
	Soporte en VS Code para descubrimiento de plugins, snippets y flujos de desarrollo.
- **[Compatibilidad Capacitor 5+](https://capacitorjs.com/docs)**  
	Ecosistema adaptado a Capacitor v5, v6 y v7 con mantenimiento activo y soporte moderno.

## 📌 Estado del ecosistema (2025)
- Comunidad activa y en crecimiento.
- Plugins oficiales y comunitarios mantenidos regularmente.
- Enfoque fuerte en:
	- Seguridad
	- Actualizaciones OTA
	- Integraciones empresariales
	- CI/CD móvil
- Capacitor consolidado como runtime estándar para apps web → nativas.

## 📎 Enlaces rápidos
- [Capacitor Plugins Docs](https://capacitorjs.com/docs/v5/plugins)
- [Capacitor Community – GitHub](https://github.com/capacitor-community)
- [Capgo Plugin Library](https://capgo.app/es/plugins/)
- [Guía oficial de creación de plugins](https://capacitorjs.com/docs/plugins/creating-plugins)
