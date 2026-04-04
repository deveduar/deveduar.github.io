---
date: 2024-11-23 19:31
title: poketbase
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Backend
tags:
  - pocketbase
  - db
  - backend
---
# PocketBase

- [Databases](/databases/databases/)
- **Headless backend** orientado a proyectos MVP.
- Open source backend que consiste en una **base de datos embebida (SQLite)** con:
	- **Suscripciones en tiempo real**.
	- **Gestión de autenticación integrada** (usuarios, roles, permisos).
	- **Dashboard UI** intuitivo para administración.
	- **API estilo REST** simple y directa.
- Compatible con múltiples lenguajes y frameworks:
	- JavaScript
	- Dart
	- Go
- [Databases](/databases/databases/)
- [Backend](/backend/backend/)
- **Sass** para estilo y personalización de la UI.
- Recursos y ejemplos:
	- [PoketBase Docs](https://pocketbase.io/docs/)
	- [Next.js + PocketBase ejemplo en GitHub](https://github.com/ChristianSeelemann/nextjs-with-pocketbase/tree/main)

## Características principales
- **Base de datos embebida SQLite**: ligera, rápida y sin necesidad de instalación externa.
- **Realtime subscriptions**: notificaciones en tiempo real para cambios en la base de datos.
- **Autenticación y permisos**: soporta registro, login, recuperación de contraseña y control de acceso granular.
- **Dashboard UI**: interfaz web para administrar colecciones, usuarios, roles y datos en tiempo real.
- **API REST-ish**: endpoints sencillos para CRUD, autenticación y suscripciones.

## Ejemplo de uso en JavaScript
{% raw %}
```javascript
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// Autenticación de usuario
await pb.collection('users').authWithPassword('user@example.com', 'password123');

// Crear un registro en la colección "posts"
const record = await pb.collection('posts').create({
	title: 'Mi primer post',
	content: 'Contenido de ejemplo'
});

// Obtener registros
const posts = await pb.collection('posts').getFullList();
console.log(posts);
```
{% endraw %}`

## Ejemplo de uso en Dart / Flutter

{% raw %}
```dart
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('http://127.0.0.1:8090');

void main() async {
	await pb.collection('users').authWithPassword('user@example.com', 'password123');

	final record = await pb.collection('posts').create({
		'title': 'Mi primer post',
		'content': 'Contenido de ejemplo',
	});

	final posts = await pb.collection('posts').getFullList();
	print(posts);
}
```
{% endraw %}

## Integración con Next.js

* Uso recomendado con API routes para interactuar con PocketBase desde el frontend.
* Ejemplo en GitHub: [Next.js + PocketBase](https://github.com/ChristianSeelemann/nextjs-with-pocketbase/tree/main)

## Casos de uso

* MVPs y prototipos rápidos.
* Aplicaciones con datos en tiempo real.
* Apps móviles con Flutter o Dart.
* Web apps con Next.js o frameworks similares.
* Sistemas que requieren autenticación sencilla y control de roles.

# PocketBase - Expansión avanzada

- **Headless backend** ideal para MVPs y prototipos rápidos.
- **Open source** con base de datos embebida SQLite.
- **Realtime subscriptions** para actualizaciones instantáneas de datos.
- **Gestión de usuarios y roles** integrada: autenticación, permisos y recuperación de contraseña.
- **Dashboard UI**: administración visual de colecciones, datos y roles.
- **API REST-ish** simple para CRUD y autenticación.
- Compatible con JavaScript, Dart, Go y frameworks modernos.
- [Databases](/databases/databases/)
- [Backend](/backend/backend/)
- **Sass** para personalización del dashboard.
- Ejemplos y recursos:
	- [PoketBase Docs](https://pocketbase.io/docs/)
	- [Next.js + PocketBase](https://github.com/ChristianSeelemann/nextjs-with-pocketbase/tree/main)

## Arquitectura
- **Servidor embebido**: ejecutable único, sin dependencias externas.
- **Colecciones**: estructuras similares a tablas de SQL, pero flexibles.
- **Campos dinámicos**: soporta tipos como texto, número, booleano, fecha, archivo y relaciones entre colecciones.
- **Hooks y triggers**: eventos automáticos en cambios de datos (antes/después de crear, actualizar o eliminar registros).
- **Roles y permisos granulares**: control a nivel de colección, campo y operación (read, create, update, delete).
- **Suscripciones en tiempo real**: WebSocket nativo para sincronización instantánea.

## Seguridad
- **JWT tokens** para autenticación y autorización.
- **Hashing de contraseñas** con seguridad integrada.
- **Reglas basadas en roles** para proteger datos sensibles.
- **CORS y políticas de acceso** configurables para frontend y API externa.

## Funcionalidades avanzadas
- **Archivos y medios**: almacenamiento de archivos en el servidor con gestión automática de rutas y seguridad.
- **Filtros y queries complejas**: soporta filtros, ordenamiento, paginación y búsquedas full-text.
- **Exportación e importación de datos**: para respaldos o migraciones rápidas.
- **Extensible** mediante scripts y SDKs personalizados.
- **Integración con frameworks modernos**:
	- Next.js, Nuxt.js, SvelteKit
	- Flutter/Dart para apps móviles
	- Node.js y Go para servicios backend

## Ejemplo de triggers en JavaScript
{% raw %}
```javascript
pb.collection('posts').on('create', (record) => {
	console.log('Nuevo post creado:', record);
});
```
{% endraw %}`

## Ejemplo de reglas de permisos

{% raw %}
```json
{
	"roles": [
		{
			"name": "admin",
			"permissions": {
				"posts": {"read": true, "create": true, "update": true, "delete": true}
			}
		},
		{
			"name": "user",
			"permissions": {
				"posts": {"read": true, "create": true, "update": false, "delete": false}
			}
		}
	]
}
```
{% endraw %}

## Casos de uso ampliados

* **Aplicaciones colaborativas en tiempo real** (chats, dashboards, juegos multijugador).
* **Sistemas internos de empresas** con control granular de roles.
* **Prototipos rápidos** sin necesidad de infraestructura compleja.
* **Aplicaciones móviles y web** sincronizadas automáticamente.
* **Microservicios ligeros** integrados con otros sistemas via API REST o SDKs.

## Buenas prácticas

* Mantener colecciones y campos bien tipados para evitar errores.
* Configurar roles y permisos desde el inicio.
* Usar suscripciones solo cuando sea necesario para optimizar rendimiento.
* Respaldar periódicamente la base de datos SQLite.
* Mantener actualizado el servidor PocketBase y SDKs.

## Recursos adicionales

* [Documentación oficial](https://pocketbase.io/docs/)
* [Ejemplo Next.js + PocketBase](https://github.com/ChristianSeelemann/nextjs-with-pocketbase/tree/main)
* Comunidad y foros para dudas y soporte.

# PocketBase – Temas complementarios (2025)

## Versiones, migraciones y breaking‑changes
- La versión v0.29.0 fue publicada el 19 de julio de 2025. :contentReference[oaicite:1]{index=1}  
- Desde la v0.23.0 se introdujeron cambios importantes en la versión Go (y JSVM) incluyendo:
	- Cambios en el modelo de colecciones, campos tipados y API de migraciones. :contentReference[oaicite:2]{index=2}  
	- Nuevo sistema de routing en Go (Go 1.22 mux), cambio de sintaxis para parámetros `{param}` en lugar de `:param`. :contentReference[oaicite:3]{index=3}  
- Consejo: Antes de actualizar una versión mayor, hacer backup de la base de datos SQLite (`pb_data/data.db`) y probar la migración en entorno de desarrollo. :contentReference[oaicite:4]{index=4}  
- Verificar compatibilidad de SDKs clientes (JS, Dart) con la versión del backend.

## Ecosistema y herramientas auxiliares
- Existen librerías como pb‑query (builders de consulta tipados en TypeScript para PocketBase) que permiten construir filtros complejos con autocomplete y seguridad. :contentReference[oaicite:6]{index=6}  
- Frameworks de front-end “ligeros” para usar con PocketBase sin configuración pesada de build, por ejemplo la aproximación “No‑Build Client Islands” usando Preact+HTM con módulos ES. :contentReference[oaicite:7]{index=7}  
- Soluciones de hosting gestionado surgidas en la comunidad: por ejemplo PocketBaseCloud, que provee hosting, backups automáticos, dominio personalizado y escalabilidad sin tener que gestionar infraestructura tú mismo. :contentReference[oaicite:9]{index=9}  

## Buenas prácticas recientes
- Aunque PocketBase permite colecciones y campos muy libres, se recomienda **definir schemas lo más estrictamente posible**, controlar relaciones, roles, permisos y consolidar validaciones desde el inicio.  
- Evitar excesivo uso de suscripciones “live” salvo que sea necesario, porque cada suscripción abre WebSocket y puede impactar en recursos si el número de conexiones es alto.  
- Para producción: usar un ejecutable compilado para la plataforma destino, asegurar backups periódicos de la base SQLite, monitorizar salud del servidor y uso de memoria.  
- Si se usa con front‑end estático o simples “islands”, servir el front desde el propio PocketBase (carpeta `pb_public`) o desde un CDN, para simplificar el despliegue.  

## Consideraciones de escala y producción
- Aunque PocketBase es muy ligera y adecuada para MVPs o proyectos de tamaño medio, para cargas muy elevadas (millones de registros, muchas conexiones simultáneas) puede que requiera:
	- Distribuir la base de datos SQLite de forma “sharded” o replicada (no nativo, pero vía estrategia propia).  
	- Servidores dedicados para WebSocket y para API, con balanceo de carga.  
- Hay reports de usuarios con consumo de memoria elevado en el dashboard cuando gestionan muchos usuarios/colecciones en Firefox/Ubuntu. :contentReference[oaicite:10]{index=10}  
- En contextos corporativos se evalúa si cumple con requerimientos de alta disponibilidad, backup/restore, escalabilidad horizontal; dependiendo del caso puede evaluarse una arquitectura complementaria.

## Roadmap y próximas mejoras
- En el roadmap oficial aparecen mejoras como: gestión de usuarios y roles más avanzada, opciones auto‑hosting más fáciles (“deploy one‑command”), más métodos de autenticación (múltiples factores) y generación de APIs programáticas. :contentReference[oaicite:11]{index=11}  
- Es importante revisar periódicamente el CHANGELOG oficial para ver nuevas funciones y eventos de “breaking changes”.

## Integraciones destacadas 2025
- Integración con S3 para almacenamiento de archivos o medios; opción para usar almacenamiento local o en la nube. :contentReference[oaicite:12]{index=12}  
- Soporte de múltiples proveedores OAuth2 (Google, GitHub, etc) además de email/contraseña. :contentReference[oaicite:13]{index=13}  
- Uso en stack completo: backend con PocketBase + front end moderno como Next.js + Stripe/ pagos + autenticación avanzada. (Ejemplo de plantilla mencionada en la comunidad) :contentReference[oaicite:15]{index=15}  

## Áreas aún maduras o por explorar
- Soporte de funciones “serverless” o lógica de negocio extendida embebida: aunque existen hooks y scripts Go/JS, no es tan “serverless” como otras plataformas BaaS.  
- Mecanismos nativos de replicación y clustering de la base SQLite: actualmente se utilizan estrategias externas.  
- Métricas de uso, dashboards de operación y observabilidad avanzadas (logs, alertas, tracing) requieren componentes adicionales.  
- Gestión de migraciones de esquema orientadas a producción: sí están, pero requieren cuidado manual al actualizar.

# PocketBase – Nota ampliada  
## Visión general  
- **Backend sin cabeza (headless)**, empaquetado como un solo binario que incluye base de datos, API y panel de administración. :contentReference[oaicite:0]{index=0}  
- Orientado tanto a proyectos rápidos (MVP) como a aplicaciones autosuficientes de tamaño medio. :contentReference[oaicite:1]{index=1}  
- Ideal para stacks frontend ligeros (SPA, apps móviles) donde el backend puede ser mínimo y autogestionado.

## Temas clave adicionales  
### Deployment y producción  
- Permite desplegar en servidor Ubuntu u otros entornos Linux con certificado TLS automático de Let’s Encrypt. :contentReference[oaicite:3]{index=3}  
- Ejemplo de archivo de servicio `systemd` para mantener el proceso siempre activo. :contentReference[oaicite:4]{index=4}  
- Buenas prácticas de hosting: respaldos frecuentes de la base SQLite, considerar redundancia si la disponibilidad es crítica. :contentReference[oaicite:5]{index=5}  
- En producción cabe considerar volumen persistente, uso de contenedores (Docker), balanceo de cargas y estrategias de clustering si la carga lo requiere.

### Extensión, lógica de negocio y hooks  
- Puede usarse como **framework**: escribir código personalizado en Go o JavaScript (hooks) para añadir lógica de negocio sobre la base de datos. :contentReference[oaicite:6]{index=6}  
- Permite engancharse a los eventos de colección (crear, actualizar, eliminar) para ejecutar código personalizado, enviar notificaciones, controlar flujos.  
- Buena estrategia: combinar panel de administración + lógica ligera + front‑end especializado.

### Escalabilidad, límites y consideraciones  
- Aunque funciona muy bien para MVPs y apps de tamaño medio, tiene limitaciones para cargas masivas, alta concurrencia o escalabilidad horizontal compleja. :contentReference[oaicite:7]{index=7}  
- La base de datos está embebida (SQLite), lo cual simplifica el despliegue pero puede requerir estrategias adicionales (sharding, replicación manual, etc.) para cargas muy elevadas.  
- Latencias, rendimiento y concurrencia deben monitorizarse si la app escala a muchos usuarios o muchas operaciones en tiempo real.

### Integraciones, ecosistema y front‑end  
- SDKs oficiales para JavaScript (Browser/Node) y Dart (Web/Mobile) permiten integrar con facilidad. :contentReference[oaicite:8]{index=8}  
- Buen soporte para stacks modernos (por ejemplo, SPA con frameworks como SvelteKit + PocketBase). :contentReference[oaicite:10]{index=10}  
- Funcionalidades de archivo/medios: almacenar ficheros localmente o en S3, generar miniaturas, servir contenido multimedia. :contentReference[oaicite:11]{index=11}  
- Comunidad creciente con repositorios de recursos (“awesome‑PocketBase”). :contentReference[oaicite:12]{index=12}

### Comparativas y alternativas  
- En 2025 las principales alternativas open‑source incluyen Supabase, Appwrite, Directus, entre otras. :contentReference[oaicite:16]{index=16}  
- Elegir PocketBase frente a estas:  
	- Ventaja: ligereza, facilidad de despliegue, binario único, mínimo mantenimiento.  
	- Desventaja: menor escalabilidad nativa que algunos competidores, menor ecosistema para funciones serverless complejas.  
- Los debates en comunidad señalan preocupaciones sobre “lock‑in” de SQLite o necesidad de migrar más adelante. :contentReference[oaicite:17]{index=17}

### Plantillas, ejemplos reales y repositorios  
- Tutorial “Using PocketBase to build full‑stack application” en LogRocket Blog. :contentReference[oaicite:18]{index=18}  
- Repositorios con proyectos listos (apps de ejemplo, “To‑Do”, CMS ligeros). :contentReference[oaicite:19]{index=19}  
- Repositorio oficial en GitHub para ver issues, discusiones, roadmap. :contentReference[oaicite:20]{index=20}

## Estructura recomendada para tu proyecto  
- Definir primeras colecciones y campos desde panel de administración: estructurar el modelo de datos claramente.  
- Configurar roles y permisos desde el inicio — aunque sea MVP, crear roles básicos (“admin”, “usuario”) evita problemas futuros.  
- Desplegar en entorno de staging antes de producción, probar backups y restauraciones de la base SQLite.  
- Configurar lógica de negocio con hooks sólo cuando lo necesites — primero validar funcionalidad básica.  
- Monitorear métricas básicas de uso, latencia, conexiones WebSocket si usas suscripciones en tiempo real.  
- Establecer política de backups automáticos, y revisar plan de escalabilidad: ¿qué pasa si creces rápido?

## Conclusión  
La herramienta es muy potente para lo que propone: backend ágil, ligero, con autenticación, base de datos, archivos, suscripciones en tiempo real. Es ideal para iniciarse, para MVPs o proyectos donde quieres lanzar rápido y manejar tú mismo el backend. Para proyectos que anticipan gran escala, muchas operaciones en tiempo real, o requerimientos complejos de infraestructura, conviene evaluar también las alternativas y el plan de crecimiento.

