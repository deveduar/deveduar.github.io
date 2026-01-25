---
date: 2024-11-21 19:31
title: react native
tags:
keywords:
source:
status: 🚀
Parent: "[[Area-Prog]]"
cssclasses:
public_note: "true"
category: react
categories:
  - react
  - reactnative
  - mobile-apps
  - hide-embedded-header1
  - wide
  - Desarrollo multiplataforma
---
# react native
`$= dv.current().file.tags.join(" ")`

- [react](/frontend/react/)
- [Desarrollo multiplataforma](/uncategorized/desarrollo-multiplataforma/)
- android
## Qué es React Native
- Framework para construir **aplicaciones móviles nativas** usando JavaScript/TypeScript y el paradigma de [react](/frontend/react/).
- Permite compartir gran parte de la lógica entre plataformas (iOS y Android) manteniendo rendimiento cercano al nativo.
- No utiliza WebView: los componentes se traducen a **vistas nativas reales**.

## Fundamentos Clave
- Componentes
	- Funcionales y basados en hooks.
	- Cada componente representa una unidad reutilizable de UI.
- JSX
	- Sintaxis declarativa para describir la interfaz.
	- Se transpila a llamadas internas del renderer nativo.
- Props y estado
	- Props: datos inmutables que fluyen de padre a hijo.
	- Estado: datos mutables que controlan el render.
- Flujo de renderizado
	- Un cambio en estado o props dispara un nuevo render.
	- El reconciliador decide qué vistas nativas actualizar.

## Arquitectura Interna de React Native
- Runtime JavaScript
	- Ejecuta la lógica de la app (Hermes o JavaScriptCore).
- Bridge (arquitectura clásica)
	- Comunicación asíncrona JS ↔ Nativo.
	- Penaliza el rendimiento si se abusa de llamadas frecuentes.
- Nueva Arquitectura
	- Fabric como nuevo renderer.
	- TurboModules para llamadas nativas más eficientes.
	- Menor latencia y mejor uso de memoria.

## Arquitectura de Aplicación
- Separación por capas
	- UI: componentes visuales sin lógica de negocio.
	- Dominio: hooks y reglas de negocio.
	- Datos: acceso a APIs, persistencia y sincronización.
- Organización por features
	- Cada feature agrupa UI, hooks y servicios relacionados.
	- Facilita escalabilidad y mantenimiento.

## Gestión de Estado
- Estado local
	- useState para lógica simple.
	- useReducer para flujos complejos.
- Estado global
	- Context API para datos compartidos.
	- Librerías externas cuando la app crece.
- Estado remoto
	- Separar estado del servidor del estado de UI.
	- Cache, invalidación y sincronización.

## Navegación
- Conceptos
	- Stack, Tabs y Drawer.
	- Navegación basada en estado.
- Buenas prácticas
	- Tipar rutas y parámetros.
	- Evitar jerarquías excesivamente profundas.

## Estilos y Layout
- Sistema de estilos
	- StyleSheet para mejor rendimiento.
	- Flexbox como base del layout.
- Diseño adaptativo
	- Soporte para diferentes tamaños de pantalla.
	- Modo oscuro y accesibilidad.

## Acceso a APIs Nativas
- Hardware y sensores
	- Cámara, geolocalización, biometría.
- Permisos
	- Gestión explícita por plataforma.
- Módulos nativos
	- Uso cuando no existe alternativa en JavaScript.

## Rendimiento
- Renderizado
	- memo y useCallback para evitar renders innecesarios.
	- Keys estables en listas.
- Listas grandes
	- FlatList y SectionList correctamente configuradas.
- Comunicación JS ↔ Nativo
	- Reducir el número de llamadas al mínimo necesario.

## Testing
- Tipos de pruebas
	- Unitarias para lógica.
	- Integración para flujos.
	- End-to-end para comportamiento real.

## Build y Distribución
- Android
	- Generación de APK y AAB.
- iOS
	- IPA y perfiles de firma.
- Versionado
	- Gestión de entornos y releases.

## Expo en el Ecosistema
- expo
	- Capa de abstracción sobre React Native.
	- [Create a project - Expo Documentation](https://docs.expo.dev/get-started/create-a-project/)
	- APIs listas para usar sin escribir código nativo.
	- Posibilidad de migrar a Bare Workflow.

## Recursos y Documentación
- [react](/frontend/react/)
- docs
	- Get Started with React Native · React Native-environment-setup
	- [senior developer](https://youtu.be/RELWFGJnKE0)
	- [GitHub - Philchoi17/react-native-burner](https://github.com/Philchoi17/react-native-burner)
# react native — conceptos avanzados 

## Plataforma y Diferencias iOS / Android
- Comportamiento nativo distinto
	- Gestos, navegación y animaciones no son idénticas entre plataformas.
	- Componentes como ScrollView o Text pueden renderizar distinto.
- Código específico por plataforma
	- Archivos `.ios.tsx` y `.android.tsx`.
	- Condicionales con Platform API.
- Guidelines nativas
	- iOS: Human Interface Guidelines.
	- Android: Material Design.

## Sistema de Gestos
- Gestos nativos
	- Pan, Tap, LongPress y combinaciones.
	- Mayor rendimiento que los eventos JS puros.
- Conflictos de gestos
	- Coordinación entre scrolls, swipes y navegación.
	- Priorización y cancelación de gestos.

## Animaciones
- Animaciones JS
	- Simples pero costosas si hay muchos frames.
- Animaciones nativas
	- Ejecutadas en el thread nativo.
	- Mucho más fluidas.
- Casos de uso
	- Transiciones de navegación.
	- Microinteracciones y feedback visual.

## Threads y Concurrencia
- JS Thread
	- Ejecuta lógica, estado y render.
- UI Thread
	- Renderiza vistas y animaciones nativas.
- Problemas comunes
	- Bloqueos de UI por lógica pesada en JS.
	- Necesidad de mover cálculos fuera del render.

## Manejo de Errores
- Errores de render
	- Uso de Error Boundaries.
- Errores nativos
	- Crashes específicos por plataforma.
- Logging
	- Registro de errores en producción.
	- Diferenciación entre errores JS y nativos.

## Seguridad
- Almacenamiento seguro
	- Evitar AsyncStorage para datos sensibles.
	- Uso de almacenamiento cifrado.
- Comunicación con backend
	- HTTPS obligatorio.
	- Validación de certificados.
- Código
	- Ofuscación y protección básica en builds de producción.

## Accesibilidad (a11y)
- Componentes accesibles
	- Labels, roles y hints.
- Navegación por lector de pantalla
	- VoiceOver y TalkBack.
- Buenas prácticas
	- Contraste de color.
	- Tamaños de texto dinámicos.

## Internacionalización (i18n)
- Idiomas
	- Soporte multi-idioma.
	- Carga dinámica de textos.
- Formatos regionales
	- Fechas, números y monedas.
- Layout
	- Soporte para RTL (Right-to-Left).

## Persistencia y Offline
- Persistencia local
	- Caché de datos.
	- Sincronización diferida.
- Modo offline
	- Experiencia usable sin conexión.
	- Resolución de conflictos al reconectar.

## Actualizaciones Over-The-Air
- Concepto
	- Actualizar JS sin pasar por stores.
- Limitaciones
	- No permite cambios en código nativo.
- Estrategia
	- Versionado y rollback controlado.

## Migraciones y Mantenimiento
- Actualización de React Native
	- Breaking changes frecuentes.
	- Revisión de librerías incompatibles.
- Deuda técnica
	- Refactor continuo.
	- Eliminación de dependencias obsoletas.

## Casos de Uso Reales
- Apps de contenido
	- Listas grandes y scroll infinito.
- Apps empresariales
	- Formularios complejos y flujos largos.
- Apps con alto rendimiento
	- Uso intensivo de animaciones y gestos.

## Límites de React Native
- Cuándo no usarlo
	- Apps con gráficos 3D complejos.
	- Casos con uso extremo de APIs nativas no expuestas.
- Alternativas
	- Desarrollo nativo puro.
	- Soluciones híbridas según el contexto.

# react native — guía práctica con casos de uso y ejemplos
`$= dv.current().file.tags.join(" ")`

## Caso de Uso: App CRUD con API REST
- Escenario
	- App móvil que lista, crea, edita y elimina recursos desde un backend.
- Arquitectura recomendada
	- UI desacoplada de acceso a datos.
	- Servicios reutilizables.
	- Estado del servidor separado del estado de UI.

### Servicio de API
{% raw %}
```ts
export async function getUsers() {
	const response = await fetch('https://api.example.com/users');
	if (!response.ok) throw new Error('Error fetching users');
	return response.json();
}
```
{% endraw %}`

### Uso en componente

{% raw %}
```tsx
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getUsers } from './api';

export function UserList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then(setUsers).catch(console.error);
	}, []);

	return (
		<View>
			{users.map(user => (
				<Text key={user.id}>{user.name}</Text>
			))}
		</View>
	);
}
```
{% endraw %}

## Caso de Uso: Formularios Complejos

* Escenario
	* Registro de usuario con validaciones.
* Buenas prácticas
	* Estado controlado.
	* Validación desacoplada.
	* Feedback inmediato al usuario.

### Formulario controlado

{% raw %}
```tsx
import { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export function RegisterForm() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	function submit() {
		if (!email.includes('@')) {
			setError('Email inválido');
			return;
		}
		setError('');
	}

	return (
		<View>
			<TextInput value={email} onChangeText={setEmail} />
			{error ? <Text>{error}</Text> : null}
			<Button title="Enviar" onPress={submit} />
		</View>
	);
}
```
{% endraw %}

## Caso de Uso: Navegación entre Pantallas

* Escenario
	* Flujo de pantallas jerárquico.
* Recomendación
	* Navegación basada en estado.
	* Parámetros tipados.

### Navegación básica

{% raw %}
```tsx
function HomeScreen({ navigation }) {
	return (
		<Button
			title="Ver perfil"
			onPress={() => navigation.navigate('Profile', { id: 1 })}
		/>
	);
}

function ProfileScreen({ route }) {
	return <Text>User ID: {route.params.id}</Text>;
}
```
{% endraw %}

## Caso de Uso: Listas Grandes y Rendimiento

* Escenario
	* Feed de contenido infinito.
* Claves
	* Renderizado virtualizado.
	* Claves estables.
	* Paginación.

### FlatList optimizada

{% raw %}
```tsx
import { FlatList, Text } from 'react-native';

export function Feed({ data }) {
	return (
		<FlatList
			data={data}
			keyExtractor={item => item.id}
			renderItem={({ item }) => <Text>{item.title}</Text>}
		/>
	);
}
```
{% endraw %}

## Caso de Uso: Gestión de Estado Global

* Escenario
	* Usuario autenticado disponible en toda la app.
* Estrategia
	* Context API.
	* Provider en raíz.

### Contexto global

{% raw %}
```tsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
```
{% endraw %}

## Caso de Uso: Acceso a APIs Nativas

* Escenario
	* Obtener ubicación del usuario.
* Consideraciones
	* Permisos.
	* Manejo de errores.

### Uso de geolocalización

{% raw %}
```ts
export async function getLocation() {
	const permission = await requestLocationPermission();
	if (!permission) throw new Error('Permiso denegado');

	return getCurrentPosition();
}
```
{% endraw %}

## Caso de Uso: Persistencia y Offline

* Escenario
	* App usable sin conexión.
* Estrategia
	* Cache local.
	* Sincronización posterior.

### Persistencia simple

{% raw %}
```ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData(key, value) {
	await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function loadData(key) {
	const data = await AsyncStorage.getItem(key);
	return data ? JSON.parse(data) : null;
}
```
{% endraw %}

## Caso de Uso: Animaciones de UI

* Escenario
	* Feedback visual al interactuar.
* Recomendación
	* Animaciones nativas para fluidez.

### Animación básica

{% raw %}
```tsx
import { Animated, Button } from 'react-native';
import { useRef } from 'react';

export function FadeIn() {
	const opacity = useRef(new Animated.Value(0)).current;

	function animate() {
		Animated.timing(opacity, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true
		}).start();
	}

	return (
		<>
			<Animated.View style={{ opacity }}>
				<Text>Hola</Text>
			</Animated.View>
			<Button title="Mostrar" onPress={animate} />
		</>
	);
}
```
{% endraw %}

## Caso de Uso: Actualizaciones OTA

* Escenario
	* Corregir bugs sin pasar por stores.
* Estrategia
	* Versionado claro.
	* Rollback seguro.

## Caso de Uso: App Empresarial Escalable

* Características
	* Múltiples módulos.
	* Control de permisos.
	* Alta mantenibilidad.
* Arquitectura
	* Feature-based.
	* Dominio desacoplado.
	* Tests obligatorios.

## Caso de Uso: Cuándo React Native NO es Ideal

* Juegos complejos.
* Gráficos 3D avanzados.
* Dependencia extrema de APIs nativas específicas.


# react native — cheatsheet
`$= dv.current().file.tags.join(" ")`

## Estructura Básica
- Entrada de la app
	- `App.tsx` como root component.
	- Providers globales en el nivel superior.
- Componentes
	- Funcionales por defecto.
	- Un componente = una responsabilidad.

## Componentes Nativos Comunes
- View
	- Contenedor base (equivalente a div).
- Text
	- Todo texto debe ir dentro de Text.
- Image
	- Soporta assets locales y URLs remotas.
- ScrollView
	- Scroll simple (no optimizada).
- FlatList
	- Listas grandes y virtualizadas.
- Pressable / Touchable
	- Interacción del usuario.

## Hooks Esenciales
- useState
	- Estado local simple.
- useEffect
	- Side effects y ciclo de vida.
- useRef
	- Valores mutables sin re-render.
- useMemo
	- Memoización de cálculos.
- useCallback
	- Memoización de funciones.
- Custom Hooks
	- Reutilizar lógica de negocio.

## Estilos
- StyleSheet
	- Mejor rendimiento.
- Flexbox
	- Layout por defecto.
- Unidades
	- No existen px, em o rem.
	- Todo es numérico.
- Colores
	- Hex, rgb, rgba.

## Layout Flexbox (rápido)
- flexDirection
	- row | column (default).
- justifyContent
	- Alineación eje principal.
- alignItems
	- Alineación eje secundario.
- flex
	- Distribución proporcional del espacio.

## Navegación
- Stack
	- Flujo jerárquico.
- Tabs
	- Navegación principal.
- Drawer
	- Menú lateral.
- Parámetros
	- `navigation.navigate('Screen', params)`.

## Estado
- Local
	- useState / useReducer.
- Global
	- Context API.
- Remoto
	- Estado del servidor separado del UI.

## Listas (FlatList)
- Props clave
	- data
	- renderItem
	- keyExtractor
- Optimización
	- Evitar funciones inline.
	- getItemLayout si aplica.

## Inputs y Formularios
- TextInput
	- Controlado con estado.
- KeyboardAvoidingView
	- Evita solapamiento del teclado.
- Validación
	- Separada del componente visual.

## Platform API
- Platform.OS
	- ios | android.
- Archivos por plataforma
	- `.ios.tsx` / `.android.tsx`.

## Permisos
- Solicitud explícita
	- Diferente por plataforma.
- Flujo
	- Request → Check → Fallback.

## Acceso a APIs Nativas
- Sensores
	- Cámara, ubicación, biometría.
- Módulos nativos
	- Cuando JS no es suficiente.

## Rendimiento
- Evitar renders
	- memo
	- useCallback
- Listas grandes
	- FlatList siempre.
- Animaciones
	- Ejecutarlas en thread nativo.

## Animaciones
- Animated
	- Básico y estable.
- Native Driver
	- `useNativeDriver: true`.
- Casos comunes
	- Opacity, translate, scale.

## Threads
- JS Thread
	- Lógica y render.
- UI Thread
	- Dibujo y animaciones.
- Regla
	- No bloquear JS Thread.

## Debugging
- console.log
	- Solo en desarrollo.
- Flipper
	- Debug visual y plugins.
- Errores
	- Diferenciar JS vs nativos.

## Testing
- Unitarios
	- Lógica y hooks.
- Integración
	- Componentes.
- E2E
	- Flujos reales.

## Build
- Android
	- APK / AAB.
- iOS
	- IPA.
- Entornos
	- dev | staging | prod.

## Expo
- expo
	- Setup rápido.
	- APIs listas.
	- OTA updates.
	- Eject posible a Bare Workflow.

## OTA Updates
- Qué permite
	- Actualizar JS.
- Qué no
	- Cambios nativos.
- Estrategia
	- Versionado + rollback.

## Accesibilidad
- Props
	- accessibilityLabel
	- accessible
- Lectores
	- VoiceOver
	- TalkBack.

## Internacionalización
- i18n
	- Textos dinámicos.
- RTL
	- Soporte para idiomas RTL.

## Cuándo usar React Native
- Apps CRUD.
- Apps empresariales.
- Apps de contenido.

## Cuándo NO usarlo
- Juegos 3D.
- Gráficos complejos.
- Uso extremo de APIs nativas específicas.

# react native — recursos actualizados 2025
`$= dv.current().file.tags.join(" ")`

## 🌐 Documentación y guías oficiales
- **[React Native Docs (official)](https://reactnative.dev/)**  
	Documentación principal con guías, setup, ejemplos, API y secciones de *More Resources* para las versiones actuales **0.82 / 0.83**.
- **[React Native Archive / More Resources](https://archive.reactnative.dev/docs/next/more-resources)**  
	Listado de recursos oficiales, plantillas, apps de ejemplo y guías para crear *Native Modules*.

## 📘 Cursos y tutoriales actualizados 2025
- **[React Native Full Course 2025 (YouTube)](https://www.reactlibraries.com/courses/react-native-full-course-2025-is1j73)**  
	Curso completo actualizado con setup, componentes, APIs, navegación y proyectos reales.
- **[React Native Tutorial for Beginners 2025 (YouTube)](https://www.reactlibraries.com/courses/react-native-tutorial-for-beginners-2025-full-course-step-by-step)**  
	Guía paso a paso desde cero hasta apps funcionales.
- **[React Native Tutorial Hindi 2025 (YouTube)](https://www.reactlibraries.com/courses/react-native-tutorial-hindi-2025-94o69m)**  
	Curso largo y gratuito con proyectos completos.
- **[Aprende React Native — Tutorial en español](https://imaginaformacion.com/tutoriales/aprende-react-native-tutorial-de-primeros-pasos)**  
	Introducción y primeros pasos en React Native (actualizado).

## 📚 Librerías y ecosistema
- **[React Native Directory](https://reactnative.directory)**  
	Directorio oficial comunitario de librerías compatibles, filtradas por funcionalidad y arquitectura.
- **[This Week in React Native (Reddit)](https://www.reddit.com/r/reactnative/)**  
	Actualizaciones semanales de librerías populares como *Reanimated*, *Gesture Handler* y tooling.

## 🛠 Herramientas, starter kits y plantillas
- **[Ignite CLI](https://github.com/infinitered/ignite)**  
	Boilerplates profesionales (*state management*, navegación, UI, testing).
- **[Expo](https://expo.dev/)**  
	Framework de desarrollo acelerado con APIs listas, OTA updates y workflows simplificados.

## 📅 Eventos y comunidad
- **[React Native Connection 2025](https://2025.reactnativeconnection.io/)**  
	Conferencia internacional dedicada a React Native (París).
- **Comunidades activas**
	- [Stack Overflow — react-native](https://stackoverflow.com/questions/tagged/react-native)
	- [Reactiflux Discord](https://www.reactiflux.com/)
	- [Expo Discord](https://chat.expo.dev/)
	- [Reddit r/reactnative](https://www.reddit.com/r/reactnative/)

## 📊 Datos y encuestas del ecosistema
- **[State of React Native 2025](https://results.stateofreactnative.com/en-US/resources/)**  
	Encuesta sobre herramientas, recursos, librerías y tendencias del ecosistema.

## 🔄 Versiones y novedades en 2025
- **[React Native 0.82](https://reactnative.dev/blog)**  
	Arquitectura nueva más estable, mejoras de rendimiento y tooling.
- **[React Native 0.83](https://reactnative.dev/blog)**  
	Mejoras en DevTools, compatibilidad con React 19 y upgrades más seguros.

## 🧠 Comunidades, ideas y tendencias
- **[JSI / Fabric discussions](https://www.reddit.com/r/reactnative/search/?q=JSI&restrict_sr=1)**  
	Recursos y debates sobre la nueva arquitectura y módulos nativos.
- **[React Native Weekly](https://reactnativeweekly.com/)**  
	Newsletter con noticias, librerías y artículos técnicos.

## 📌 Resumen de recursos clave
- 📄 [React Native Docs](https://reactnative.dev/)
- 🌐 [React Native Directory](https://reactnative.directory)
- ▶️ [React Native Full Course 2025](https://www.reactlibraries.com/courses/react-native-full-course-2025-is1j73)
- ▶️ [React Native Tutorial for Beginners 2025](https://www.reactlibraries.com/courses/react-native-tutorial-for-beginners-2025-full-course-step-by-step)
- 📘 [Tutorial en español — Aprende React Native](https://imaginaformacion.com/tutoriales/aprende-react-native-tutorial-de-primeros-pasos)

# react native — guía de preparación para entrevistas

## Cómo se evalúa React Native en entrevistas
- Niveles habituales
	- Junior: fundamentos, componentes, estado, listas.
	- Mid: arquitectura, rendimiento, navegación, APIs nativas.
	- Senior: decisiones técnicas, trade-offs, escalabilidad, debugging complejo.
- Tipos de entrevista
	- Teórica (conceptos).
	- Práctica (live coding / take-home).
	- Arquitectura y system design.
	- Behavioral con foco técnico.

## Fundamentos que DEBES dominar
- Diferencia entre React y React Native
	- DOM vs vistas nativas.
	- Impacto en rendimiento y layout.
- Renderizado
	- Qué dispara un render.
	- Reconciliación y actualización de vistas.
- Props vs estado
	- Flujo unidireccional de datos.
	- Estado controlado.
- Hooks clave
	- useState, useEffect, useMemo, useCallback, useRef.
	- Cuándo usarlos y cuándo NO.

## Preguntas típicas de fundamentos
- ¿Por qué todo texto debe ir dentro de `Text`?
- ¿Qué problema resuelve `FlatList` frente a `ScrollView`?
- ¿Qué es un re-render innecesario?
- ¿Qué diferencia hay entre `useEffect` y `useLayoutEffect`?
- ¿Qué ocurre si bloqueas el JS Thread?

## Arquitectura de React Native
- Arquitectura clásica
	- JS Thread + Bridge + UI Thread.
	- Coste de serialización.
- Nueva arquitectura
	- Fabric como renderer.
	- TurboModules.
	- Comunicación más directa y eficiente.
- Preguntas típicas
	- ¿Qué problemas soluciona Fabric?
	- ¿Cuándo importa realmente la nueva arquitectura?

## Arquitectura de aplicación (muy preguntado)
- Separación de responsabilidades
	- UI: componentes puros.
	- Dominio: hooks y lógica.
	- Datos: servicios, APIs, persistencia.
- Organización por features
	- Mejor escalabilidad.
	- Mejor testing.
- Trade-offs
	- Simplicidad vs escalabilidad.
	- Overengineering en apps pequeñas.

## Caso típico de diseño
- Diseña una app con:
	- Login.
	- Lista paginada.
	- Detalle editable.
- Se espera que menciones
	- Estado global vs local.
	- Manejo de errores.
	- Loading y empty states.
	- Persistencia básica.

## Gestión de Estado (preguntas clave)
- Estado local
	- Cuándo usar useState vs useReducer.
- Estado global
	- Context API.
	- Cuándo escala mal.
- Estado remoto
	- Cache.
	- Sincronización.
	- Invalidación.
- Pregunta clásica
	- Diferencia entre estado del servidor y estado de UI.

## Navegación
- Conceptos base
	- Stack, Tabs, Drawer.
- Deep linking
	- Casos de uso reales.
- Errores comunes
	- Pasar demasiados parámetros.
	- Navegación muy anidada.
- Preguntas típicas
	- ¿Dónde pondrías la navegación?
	- ¿Cómo tiparías rutas?

## Rendimiento (clave para senior)
- Re-renderizado
	- memo, useCallback, keys estables.
- Listas
	- FlatList vs ScrollView.
	- getItemLayout.
- Comunicación JS ↔ Nativo
	- Minimizar llamadas frecuentes.
- Preguntas típicas
	- ¿Por qué una lista va lenta?
	- ¿Cómo detectarías un cuello de botella?

## Animaciones y gestos
- Animated
	- Cuándo es suficiente.
- Animaciones nativas
	- Ventajas.
- Gestos
	- Conflictos entre scroll y swipe.
- Preguntas frecuentes
	- ¿Por qué una animación se ve a trompicones?

## Acceso a APIs Nativas
- Permisos
	- Flujo correcto.
	- Diferencias por plataforma.
- Casos reales
	- Cámara.
	- Geolocalización.
- Pregunta típica
	- ¿Cuándo escribirías un módulo nativo?

## Testing (cada vez más preguntado)
- Tipos
	- Unitarios.
	- Integración.
	- E2E.
- Qué testear
	- Lógica antes que UI.
- Preguntas típicas
	- ¿Qué NO testearías?
	- ¿Cómo testearías un hook?

## Debugging
- Problemas comunes
	- Pantalla en blanco.
	- Crashes solo en producción.
- Herramientas
	- Logs.
	- DevTools.
- Preguntas
	- ¿Cómo depuras un bug que solo pasa en Android?

## Expo en entrevistas
- Qué aporta
	- Setup rápido.
	- APIs listas.
- Limitaciones
	- Dependencia del ecosistema.
	- Código nativo limitado.
- Pregunta típica
	- ¿Cuándo NO usarías Expo?

## Builds y publicación
- Android
	- APK vs AAB.
- iOS
	- Certificados y perfiles.
- OTA updates
	- Qué permiten.
	- Qué no.
- Pregunta típica
	- ¿Puedes cambiar lógica de negocio sin subir a la store?

## Preguntas de senior / lead
- Decisiones técnicas
	- ¿Por qué React Native y no nativo?
- Escalabilidad
	- App con múltiples equipos.
- Mantenimiento
	- Actualizaciones de versión.
	- Deuda técnica.
- Comunicación
	- Explicar trade-offs a perfiles no técnicos.

## Live Coding: qué suelen pedir
- Lista con búsqueda.
- Formulario con validación.
- Pequeño CRUD.
- Qué evalúan
	- Claridad.
	- Organización.
	- Manejo de errores.
	- Performance básica.

## Red Flags en entrevistas
- Abusar de estado global.
- No considerar rendimiento.
- Mezclar lógica y UI.
- No saber explicar decisiones.

## Checklist antes de la entrevista
- Repasar hooks y renderizado.
- Tener clara una arquitectura base.
- Saber explicar un proyecto propio.
- Poder justificar decisiones técnicas.
- Pensar en trade-offs, no en respuestas absolutas.

# react native — respuestas esperadas en entrevistas

## ¿Cuál es la diferencia entre React y React Native?
- React
	- Renderiza al DOM.
	- Pensado para web.
- React Native
	- Renderiza a **vistas nativas reales** (UIView, Android View).
	- No usa HTML ni CSS.
- Punto clave esperado
	- Mismo paradigma, distinto renderer.
	- Impacto directo en layout, estilos y rendimiento.

## ¿Qué es un re-render y cuándo ocurre?
- Ocurre cuando
	- Cambia el estado.
	- Cambian las props.
	- Cambia el contexto consumido.
- Qué se espera oír
	- Render ≠ pintar en pantalla.
	- React recalcula el árbol y decide qué actualizar.
- Error común
	- Pensar que cada render es costoso por sí mismo.

## ¿Por qué todo texto debe ir dentro de `Text`?
- Porque
	- El layout nativo necesita un contenedor de texto explícito.
- Qué evalúan
	- Conocimiento del renderer nativo.
- Respuesta corta
	- Las vistas nativas no pueden renderizar texto suelto.

## ¿FlatList vs ScrollView?
- ScrollView
	- Renderiza todos los hijos.
	- Malo para listas grandes.
- FlatList
	- Renderizado virtualizado.
	- Solo pinta lo visible.
- Respuesta esperada
	- FlatList siempre para listas medianas/grandes.

## ¿Qué es el JS Thread?
- Es donde
	- Se ejecuta la lógica.
	- Se maneja el estado.
	- Se calcula el render.
- Problema clave
	- Si se bloquea, la UI se congela.
- Buen insight
	- Animaciones deben salir del JS Thread.

## ¿Cómo funciona la arquitectura clásica de React Native?
- Componentes
	- JS Thread.
	- Bridge.
	- UI Thread.
- Limitación
	- Comunicación serializada y asíncrona.
- Qué quieren oír
	- El bridge es un cuello de botella.

## ¿Qué aporta la nueva arquitectura?
- Fabric
	- Nuevo renderer.
- TurboModules
	- Comunicación más directa.
- Beneficio
	- Menor latencia.
	- Mejor rendimiento.
- Respuesta madura
	- No siempre es crítica, depende del caso.

## ¿Cómo organizarías una app escalable?
- Por features
	- Cada feature con su UI, hooks y servicios.
- Capas
	- UI.
	- Dominio.
	- Datos.
- Red flag
	- Carpetas gigantes solo por tipo de archivo.

## ¿Cuándo usar `useState` vs `useReducer`?
- useState
	- Estado simple.
- useReducer
	- Lógica compleja.
	- Múltiples transiciones.
- Qué evalúan
	- Claridad de intención.

## ¿Context API escala?
- Sí
	- Para datos poco cambiantes.
- No
	- Para estado altamente dinámico.
- Respuesta correcta
	- Depende del patrón de uso, no del tamaño de la app.

## ¿Estado del servidor vs estado de UI?
- Estado del servidor
	- Datos remotos.
	- Cacheables.
- Estado de UI
	- Modales, loaders, inputs.
- Insight clave
	- No mezclar ambos conceptos.

## ¿Cómo optimizar rendimiento?
- Evitar renders innecesarios
	- memo.
	- useCallback.
- Listas
	- FlatList.
	- keyExtractor estable.
- Comunicación
	- Reducir llamadas JS ↔ Nativo.

## ¿Por qué una animación va a trompicones?
- Posibles causas
	- Corre en JS Thread.
	- JS Thread bloqueado.
- Respuesta esperada
	- Moverla al thread nativo.

## ¿Cuándo escribirías un módulo nativo?
- Cuando
	- No existe API en JS.
	- Requisitos de rendimiento alto.
- Qué no decir
	- “Siempre que algo no funcione”.

## ¿Cómo manejar permisos?
- Flujo correcto
	- Solicitar.
	- Comprobar.
	- Fallback.
- Diferencias
	- iOS vs Android.
- Error típico
	- Asumir permisos concedidos.

## ¿Qué testearías y qué no?
- Sí
	- Lógica.
	- Hooks.
- No
	- Detalles visuales irrelevantes.
- Insight senior
	- Testear comportamiento, no implementación.

## ¿Cómo debuggearías un bug solo en Android?
- Pasos
	- Logs específicos.
	- Revisar permisos.
	- Probar build de release.
- Qué buscan
	- Método, no magia.

## ¿Expo es buena idea?
- Sí
	- Proyectos rápidos.
	- Equipos pequeños.
- No
	- Dependencia fuerte de APIs nativas específicas.
- Respuesta madura
	- Elegir por contexto, no por dogma.

## ¿Puedes actualizar la app sin pasar por la store?
- Sí
	- Código JS con OTA.
- No
	- Cambios nativos.
- Punto clave
	- Versionado y rollback.

## ¿Cuándo NO usar React Native?
- Juegos 3D.
- Gráficos intensivos.
- Uso extremo de APIs nativas.
- Respuesta correcta
	- React Native no es una bala de plata.

## Pregunta final típica: ¿por qué React Native?
- Porque
	- Compartes lógica.
	- Tiempo de desarrollo menor.
- Pero
	- Aceptas trade-offs.
- Lo que quieren oír
	- Decisiones conscientes, no fanatismo.

# react native — guía de preparación para pair programming y ejemplos de código

## Objetivo
- Practicar **flujo de pensamiento en vivo**.
- Demostrar **claridad, comunicación y buenas prácticas**.
- Ser capaz de resolver problemas con **React Native** bajo supervisión.

## Antes del pair programming
- Tener tu entorno listo
	- Node.js y npm/yarn actualizados.
	- React Native CLI o Expo CLI funcionando.
	- Emulador o dispositivo real.
- Documentación a mano
	- [React Native Docs](https://reactnative.dev/)
	- [React Native Directory](https://reactnative.directory)
- Conocer tu proyecto
	- Estructura de carpetas.
	- Arquitectura base.
	- Hooks y servicios reutilizables.
- Estrategia mental
	- Leer el problema.
	- Pensar en componentes, estado y flujo de datos.
	- Explicar decisiones en voz alta.

## Flujo recomendado en pair programming
1. **Comprender el requerimiento**
	- Clarificar inputs y outputs.
	- Preguntar restricciones.
2. **Diseñar rápido la solución**
	- Sketch mental de componentes.
	- Decidir estado local/global.
3. **Implementación paso a paso**
	- Crear componente base.
	- Añadir estado y props.
	- Conectar API si aplica.
4. **Testing y validación**
	- Verificar en simulador/emulador.
	- Revisar errores comunes (JS Thread, permisos, keys).
5. **Refactor y optimización**
	- Uso de memo, FlatList, callbacks.
	- Limpieza de código y comentarios.

## Ejemplo 1 — Contador básico
{% raw %}
```tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<View style={{ padding: 20 }}>
			<Text style={{ fontSize: 24 }}>Count: {count}</Text>
			<Button title="+1" onPress={() => setCount(count + 1)} />
			<Button title="-1" onPress={() => setCount(count - 1)} />
		</View>
	);
}
```
{% endraw %}`

## Ejemplo 2 — Lista con FlatList

{% raw %}
```tsx
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const DATA = Array.from({ length: 50 }, (_, i) => ({ id: i.toString(), title: `Item ${i}` }));

export default function ItemList() {
	return (
		<FlatList
			data={DATA}
			keyExtractor={item => item.id}
			renderItem={({ item }) => (
				<View style={{ padding: 10 }}>
					<Text>{item.title}</Text>
				</View>
			)}
		/>
	);
}
```
{% endraw %}

## Ejemplo 3 — Formulario simple con validación

{% raw %}
```tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = () => {
		if (!email.includes('@')) {
			setError('Email inválido');
		} else {
			setError('');
			alert(`Email enviado: ${email}`);
		}
	};

	return (
		<View style={{ padding: 20 }}>
			<TextInput
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
			/>
			{error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
			<Button title="Enviar" onPress={handleSubmit} />
		</View>
	);
}
```
{% endraw %}

## Ejemplo 4 — Navegación básica

{% raw %}
```tsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
	return (
		<View style={{ padding: 20 }}>
			<Text>Home</Text>
			<Button title="Ir a Perfil" onPress={() => navigation.navigate('Profile', { userId: 42 })} />
		</View>
	);
}

function ProfileScreen({ route }) {
	return (
		<View style={{ padding: 20 }}>
			<Text>Perfil de usuario: {route.params.userId}</Text>
		</View>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
```
{% endraw %}

## Buenas prácticas durante pair programming

- Explica **cada paso** que das.
- Haz commits pequeños si se pide.
- Pregunta antes de asumir funcionalidades.
- Mantén el código limpio y legible.
- Prioriza **funcionalidad antes que optimización prematura**.
- Usa hooks y componentes funcionales, no clases.
- Evita hardcodear valores; usa props o estado.

## Tips finales

- Mantén la calma y comunica tu flujo de pensamiento.
- Si te trabas, describe **qué harías**.
- Haz preguntas sobre requisitos y expectativas.
- Recuerda trade-offs entre rendimiento, escalabilidad y simplicidad.
- Demuestra conocimiento de arquitectura, testing y performance.

# react native — librerías y dependencias populares (2025)

## 🧭 Navegación
- **[React Navigation](https://reactnavigation.org/docs/getting-started/)** — Navegación declarativa con stacks, tabs y drawers.

## 📦 Estado y datos
- **[Redux + Redux Toolkit](https://redux.js.org/)** — Estado global predecible y sin tanto boilerplate.
- **[React Query / TanStack Query](https://tanstack.com/query/v5)** — Gestión de caché y sincronización de datos remotos.
- **[Zustand](https://github.com/pmndrs/zustand)** — Estado global ligero y minimalista.

## 🖼 UI y componentes visuales
- **[React Native Elements](https://reactnativeelements.com/)** — Kit de UI completo y personalizable.
- **[React Native Paper](https://callstack.github.io/react-native-paper/)** — UI con Material Design.
- **[React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons)** — Colección de íconos para barras, botones y más.
- **[Tamagui](https://tamagui.dev/)** — UI y sistema de estilos con enfoque en performance.
- **[Gluestack UI](https://gluestack.dev/)** — Sistema de componentes UI con estilo tipo Tailwind.
- **[React Native UI Lib](https://github.com/wix/react-native-ui-lib/)** — Biblioteca de componentes con enfoque en usabilidad y animaciones.

## 📱 Componentes y funciones específicas
- **[React Native Maps](https://github.com/react-native-maps/react-native-maps)** — Integración con Google / Apple Maps.
- **[React Native Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)** — Chat con UI lista para usar.
- **[React Native Image Picker](https://www.npmjs.com/package/react-native-image-picker)** — Selección de fotos / cámara.
- **[React Native Snap Carousel](https://www.npmjs.com/package/react-native-snap-carousel)** — Carruseles y sliders de contenido.

## 🧠 Datos, lógica y utilidades
- **[Axios](https://axios-http.com/)** — Cliente HTTP para consumo de APIs.
- **[React Hook Form](https://react-hook-form.com/)** — Formularios controlados y validación.
- **[Yup](https://github.com/jquense/yup) / Zod** — Esquemas de validación.

## 📲 Almacenamiento y persistencia
- **[@react-native-async-storage/async-storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)** — Persistencia local asíncrona.
- **[react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)** — Almacenamiento rápido y eficiente.

## 🔄 Animaciones y gestos
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** — Animaciones avanzadas y fluidas en thread nativo.
- **[React Native Gesture Handler](https://github.com/software-mansion/react-native-gesture-handler)** — Mejor manejo de gestos nativos.
- **[Lottie for React Native](https://github.com/lottie-react-native/lottie-react-native)** — Animaciones vectoriales (JSON).

## 🔐 Integraciones de backend y notificaciones
- **[React Native Firebase](https://rnfirebase.io/)** — Integración completa con Firebase (Auth, DB, analytics).

## 📊 Testing y calidad
- **[Jest](https://jestjs.io/)** — Testing unitario y de lógica.
- **[Detox](https://github.com/wix/Detox/)** — E2E testing para apps nativas.

## 🧠 Otros recursos útiles
- **[Awesome React Native](https://github.com/jondot/awesome-react-native)** — Lista curada de librerías útiles.
- **[React Native Topic (GitHub)](https://github.com/topics/react-native)** — Navega repositorios y ordena por popularidad.
