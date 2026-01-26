---
date: 2024-11-16 17:44
title: web services
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: "true"
category: Backend
tags:
  - webservices
  - devops
  - backend
  - microservicios
---
# Web Services
`$= dv.current().file.tags.join(" ")`

## Enlaces
- [microservicios](/backend/microservicios/)
- [Backend](/uncategorized/backend/)
- [Data Science](/uncategorized/data-science/)
- [Springboot](/backend/springboot/)
- [Protocolos](/redes/protocolos/)
- [JAX-WS](/backend/jax-ws/)

## Concepto General
Los **web services** son aplicaciones diseñadas para intercambiar datos entre sistemas heterogéneos mediante protocolos estándar. Permiten la comunicación desacoplada entre aplicaciones distribuidas, sin importar el lenguaje, plataforma o ubicación.

Un web service actúa como un **proveedor** de funcionalidades accesibles por un **cliente**, a través de un **broker** o directamente mediante HTTP/S.

### Características
- Independencia de plataforma y lenguaje.
- Comunicación mediante protocolos estandarizados (HTTP, SOAP, REST, MIME).
- Formatos estructurados: XML, JSON, CSV.
- Acceso a recursos remotos mediante URIs.
- Capacidad de ser catalogados, descubiertos y versionados.

### Relación con plataformas en la nube
- GCP, AWS, Azure, Supabase, Firebase, Cloudflare, Vercel → ofrecen APIs, gateways, funciones, colas, bases de datos y servicios integrados para crear, desplegar y consumir web services.

---

## Tipos de Web Services

### REST
- Basado en HTTP y recursos identificados por URI.
- Operaciones estándar: GET, POST, PUT, DELETE, PATCH.
- Datos usualmente en JSON.
- Más simple y rápido que SOAP.
- Facilita escalabilidad y diseño orientado a recursos.

### SOAP
- Usa mensajes XML estructurados y estrictos.
- Validación mediante esquemas.
- Protocolo formal → binding, contratos, tipos, seguridad WS-Security.
- Adecuado para ambientes corporativos, financieros, bancarios o de misión crítica.

### [GraphQL](/backend/graphql/)
- Un único endpoint capaz de responder múltiples consultas.
- El cliente especifica qué datos necesita.
- Minimiza el overfetching.

---

## WSDL (Web Services Description Language)

### Conceptos principales
- Describe formalmente un servicio SOAP.
- Define operaciones, puertos, bindings y tipos de datos.
- Actúa como contrato entre proveedor y consumidor.
- Permite generar código automáticamente (stubs, skeletons).

### Elementos
- **definitions** → raíz del documento.
- **types** → define los tipos de datos con XML Schema.
- **message** → solicitudes y respuestas.
- **portType** → conjunto de operaciones.
- **binding** → protocolo y formato (SOAP).
- **service** → dirección del endpoint.

### Relacionados
- SOAP
- [WSDL - Documentación de IBM](https://www.ibm.com/docs/es/was-nd/8.5.5?topic=services-wsdl)
- UDDI → registro de servicios disponibles.
- Conceptos clave: colecciones, métodos y parámetros, retorno, descriptor de servicio, cliente/consumer, servlet receptor.

---

## XML en Web Services
[XML](/databases/xml/)

### Estructura
- Árbol, nodos, atributos.
- Validación estricta para servicios SOAP.

### Validación
- XML Schema (XSD)
	- `xs:element`, `xs:complexType`

### Recursos
- [Python for Everybody - Web Services: XML Schema | Learn | freeCodeCamp.org](https://www.freecodecamp.org/learn/python-for-everybody/python-for-everybody/web-services-xml-schema)

---

## Arquitectura y Roles
- **Provider** → expone el servicio.
- **Requestor/Client** → consume el servicio.
- **Broker/UDDI** → catálogo (opcional).
- Comunicación mediante protocolos estándar: HTTP/S, SOAP, REST, MIME.

---

## Errores y Excepciones
- Errores HTTP (400, 401, 403, 404, 500…)
- Faults SOAP
- Errores de esquema o validación XML
- Timeouts, throttling, rate limits
- Errores de serialización o transformación de datos

---

## Métodos RESTful
- GET → lectura
- POST → creación
- PUT → actualización total
- PATCH → actualización parcial
- DELETE → eliminación
- OPTIONS → metadatos sobre el endpoint

---

## Casos de Uso y Ejemplos
- API REST que devuelve JSON.
- Servicio SOAP para bancos o seguros.
- GraphQL para consultas complejas con agregaciones.
- Integración con servicios externos (marketing, pagos, CRMs).
- Conexiones a bases de datos, sockets o sistemas legacy.

---

## Videos y Recursos

### Introducción y Conceptos
- [▷ ¿Qué es un web service y cómo funciona? (2024)](https://www.crehana.com/blog/transformacion-digital/que-es-web-service/)
- [Web Services. Introducción - YouTube](https://youtu.be/ViSDptzLrQY)

### Roles, Arquitectura, Perfiles
- [10/37 WEB SERVICES - ROLES Y PERFILES - YouTube](https://www.youtube.com/watch?v=nkBcqvpo7lE&list=PLBBoc2l3GGf3L3Oz_NtrYaP1pdTYOO_Iq)

### SOAP y XML
- [Generalidades de los Web Services SOAP - YouTube](https://youtu.be/wT6w9BPapQg)
	- Java: interfaces, clases, constructor, endpoints, ID `@WebService`
	- Protocolo, direccionamiento

### Consumo y Ejemplos Prácticos
- [Ejemplo para el consumo de servicios web - YouTube](https://youtu.be/eSqW0XV257A)  
	- Request/Response SOAP  
	- SoapUI → [Getting Started with API Testing | SoapUI](https://www.soapui.org/getting-started/)
	- Conexión a DB SAP mediante socket  
	- Ej catastro  
	- Firma [XML](/databases/xml/)  
	- Ej E-goi mail marketing (diccionarios SOAP, URL)

### En otros lenguajes
- [.NET]  
	- [¿Qué diablos es un web service SOAP? | creación en C# .Net WCF - YouTube](https://youtu.be/ZeRiqOFXzZo)  
	- [Como CREAR y CONSUMIR un WEB SERVICE en ASP.NET (C#) - YouTube](https://youtu.be/dl1xfgMxpbU)

- **Node.js / Express**
	- [Node Js Express | web services | Creación api rest](https://luisjordan.net/node-js/web-services-con-node-js-express-creacion-de-api-rest/)

---

## Código de Ejemplo: SOAP (Java – JAX-WS)

### Servicio
{% raw %}
```java
import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class HolaService {

	@WebMethod
	public String saludar(String nombre) {
		return "Hola " + nombre;
	}
}
```
{% endraw %}`

### Cliente

{% raw %}
```java
URL url = new URL("http://localhost:8080/hola?wsdl");
QName qname = new QName("http://servicio/", "HolaService");
Service service = Service.create(url, qname);
HolaService hola = service.getPort(HolaService.class);
System.out.println(hola.saludar("Eduardo"));
```
{% endraw %}

# Web Services — Conceptos Avanzados y Temas Faltantes

## Versionado y Ciclo de Vida
### Versionado de APIs
- Estrategias:
	- Versionado por **URL** (`/v1/`, `/v2/`).
	- Versionado por **cabeceras** (content negotiation).
	- Versionado por **media type** (`application/vnd.miapi.v3+json`).
- Buenas prácticas:
	- Mantener compatibilidad hacia atrás el mayor tiempo posible.
	- Deprecación documentada y progresiva.

### Ciclo de Vida de un Web Service
- Diseño → implementación → pruebas → despliegue → monitoreo → deprecación.
- Documentación continua (OpenAPI, Postman Collections, WSDL autogenerado).

---

## Seguridad en Web Services
### Seguridad REST
- Autenticación:
	- API Keys.
	- JWT.
	- OAuth2 + OpenID Connect.
- Autorización basada en roles (RBAC) o políticas (ABAC).
- Filtrado de entrada, sanitización y validación de payloads.

### Seguridad SOAP
- WS-Security:
	- Firmas XML digitales.
	- Cifrado de mensajes.
	- Tokens SAML.
- Política de mensajes (WS-Policy).
- Integrity & confidentiality al nivel de mensaje, no solo del transporte.

---

## Estándares y Especificaciones Modernas
### OpenAPI / Swagger
- Describe APIs REST con formato YAML/JSON.
- Permite:
	- Autogeneración de clientes y SDKs.
	- Documentación interactiva.
	- Pruebas desde el navegador.

### AsyncAPI
- Especificación para servicios basados en eventos.
- Compatible con Kafka, MQTT, WebSockets y colas.

### WADL
- Alternativa XML para describir servicios REST (menos usada hoy).

---

## Patrones de Integración entre Servicios
### Sincronía vs Asincronía
- **Sincrónico** → REST, SOAP.
- **Asincrónico** → colas, brokers, WebHooks, Event-Driven Architecture.

### Patrones
- Request/Response.
- Pub/Sub.
- Fire-and-forget.
- Event-sourcing.
- CQRS aplicado a APIs.

---

## Infraestructura y Deploy de Web Services
### API Gateways
- Funciones:
	- Routing y load balancing.
	- Autenticación centralizada.
	- Rate limiting y cuotas.
	- Transformación de requests/responses.
- Ejemplos:
	- AWS API Gateway, Kong, Apigee, NGINX, Traefik.

### Service Mesh
- Malla de servicios para microservicios (Istio, Linkerd).
- Beneficios:
	- Telemetría.
	- Retries.
	- Circuit-breakers.
	- Seguridad mTLS entre servicios.

---

## Rendimiento y Optimización
### Compresión y Cache
- Cache-Control, ETags.
- Compresión GZIP/Brotli.
- Caching distribuido (Redis) para respuestas costosas.

### Optimización de Payloads
- Minimizar campos.
- Paginación.
- Filtros de consulta.
- Formatos alternativos (Avro, Protobuf).

---

## Testing en Web Services
### Tipos de Pruebas
- Unitarias sobre lógica del servicio.
- Integración entre servicios.
- Contratos (Consumer-Driven Contracts).
- Carga y estrés (JMeter, k6).
- Mock de servicios externos (WireMock, Postman Mock Servers).

### Herramientas
- REST: Postman, Hoppscotch, Insomnia.
- SOAP: SoapUI.
- Integración continua: GitHub Actions, GitLab CI, Jenkins.

---

## Observabilidad
### Logs
- JSON Logs estructurados.
- Correlation IDs para seguimiento distributed tracing.

### Tracing
- OpenTelemetry.
- Zipkin, Jaeger.

### Métricas
- Prometheus.
- Grafana.

---

## Estilos de API Alternativos
### RPC (Remote Procedure Call)
- JSON-RPC y XML-RPC.
- Simple y directo, pero débil en estructura y descubrimiento.

### Falcor & OData
- OData → consultas tipo SQL sobre HTTP.
- Falcor (Netflix) → modelo unificado de datos.

---

## Comunicaciones en Tiempo Real
### WebSockets
- Canales bidireccionales persistentes.
- Útil para notificaciones, chats, dashboards en vivo.

### Server-Sent Events (SSE)
- Comunicación unidireccional servidor → cliente.
- Menos impacto que WebSockets en muchos casos.

---

## Buenas Prácticas de Diseño
- Contratos claros y estables.
- Código generable → minimizar errores humanos.
- Evitar endpoints demasiado generales y demasiado acoplados.
- Nombres estandarizados y semánticos.
- Reglas de validación explícitas.

---

## Errores y Mecanismos de Resiliencia
### Resiliencia en APIs
- Retries con backoff exponencial.
- Circuit breakers.
- Timeouts y bulkheads.
- Rate limiting.

### Estándares de errores
- REST:
	- RFC 7807 → Problem Details JSON.
- SOAP:
	- Faults tipados.

---

## Herramientas de Monitoreo y Gestión
- API Analytics.
- Gateways con paneles integrados.
- Health checks con `/health`, `/ready`, `/live`.

---

## Ejemplos Adicionales
- Un servicio basado en colas (RabbitMQ/Kafka) que procesa pedidos asincrónicamente.
- Un webhook que notifica a un CRM sobre el estado de un pago.
- Un servicio OData que permite consultar datos con filtros avanzados.
