---
date: 2025-05-21 18:33
title: EDI Intercambio Electrónico de datos
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: "true"
category: edi
tags:
  - edi
  - IT
  - Gestion de Negocio
---
# EDI Intercambio Electrónico de Datos
`$= dv.current().file.tags.join(" ")`

## Recursos y referencias
- [Intercambio Electrónico de datos (EDI) | 26/38 | UPV - YouTube](https://www.youtube.com/watch?v=u68XQYqFm5U)  
- [¿Qué es EDI: intercambio electrónico de datos? | IBM](https://www.ibm.com/es-es/topics/edi-electronic-data-interchange)  

## Conceptos clave
- **Info empresarial**: datos relacionados con operaciones internas de la empresa, incluyendo inventarios, facturación y contabilidad.
- **Pedidos e ingresos**: automatización de órdenes de compra, confirmaciones y facturación mediante EDI.
- **RFQ (Request for Quotation / Solicitud de Cotización)**: proceso de solicitud de precios y condiciones de proveedores.
- **Independencia de métodos de transmisión**: EDI no depende de un protocolo específico; puede usar AS2, FTP, SFTP, VANs, etc.
- **Varios estándares y regulaciones**: 
	- **EDIFACT**: estándar internacional para intercambio electrónico de datos.
	- **ANSI ASC X12**: estándar norteamericano ampliamente utilizado.
	- **HL7**: estándar para datos de salud y hospitales.
	- Otros estándares específicos por industria, como RosettaNet (suministro), ODETTE (automotriz), SWIFT (finanzas).

## Integración con sistemas empresariales
- [ERP](/management/erp/) (Enterprise Resource Planning)
	- [Management](/uncategorized/management/): control y supervisión de procesos empresariales.
	- Automatizacion: integración de EDI para reducir intervención manual y errores.
- [Redes](/uncategorized/redes/): EDI requiere infraestructura de red segura y confiable para la transmisión de datos.
- Posibilidad de integración con CRM, SCM, WMS y otros sistemas corporativos para flujo de información automatizado.

## Beneficios de EDI
- Reducción de errores humanos en la entrada de datos.
- Aceleración del flujo de información entre socios comerciales.
- Mejora en el cumplimiento normativo y trazabilidad.
- Optimización de inventarios y procesos logísticos.
- Reducción de costos operativos por automatización.

## Casos de uso comunes
- Envío automático de órdenes de compra y facturas.
- Confirmaciones de entrega y avisos de expedición.
- Solicitudes de cotización y recepción de propuestas.
- Intercambio de información entre proveedores, clientes y socios logísticos.
- Procesos de integración internacional cumpliendo regulaciones específicas de cada país.

## Consideraciones técnicas
- Validación de documentos: cada estándar EDI define reglas estrictas de formato.
- Seguridad: cifrado y autenticación en la transmisión de datos.
- Monitoreo y trazabilidad: logs de transmisión y recepción para auditoría.
- Adaptadores y middleware: software que traduce entre formatos internos de ERP/CRM y los estándares EDI.

## Ejemplo de flujo EDI simplificado
1. **Creación del documento** en ERP (por ejemplo, una orden de compra).
2. **Conversión a formato EDI** usando un traductor o middleware.
3. **Transmisión** al socio comercial vía protocolo seguro.
4. **Recepción y validación** del documento por el destinatario.
5. **Actualización automática** en su ERP/CRM/WMS.

# EDI Intercambio Electrónico de Datos – Estado y recursos 2025-2026

## Panorama del mercado EDI 2025-2026
### Tamaño y crecimiento
- El **mercado global de software EDI** superó los **3.110 millones USD en 2025** y se estima en **3.380 millones USD para 2026**, con proyección de crecimiento constante impulsado por digitalización y automatización empresarial.  
	- [Electronic Data Interchange (EDI) Software Market – Research Nester](https://www.researchnester.com/es/reports/electronic-data-interchange-edi-software-market/6762)
- Las soluciones EDI están integrándose cada vez más con tecnologías emergentes como **IA para automatización de mapeo de datos** y **blockchain para trazabilidad y seguridad**.  
	- [Future of EDI Solutions – Research Nester](https://www.researchnester.com/es/reports/electronic-data-interchange-edi-software-market/6762)
- El crecimiento de EDI está ligado a la transformación digital de las cadenas de suministro globales, cumplimiento regulatorio y expansión de comercio B2B.  
	- [EDI Software Market – Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/electronic-data-interchange-software-market)

### Tendencias tecnológicas clave
- **Computación en la nube y EDI cloud-native**: migración acelerada hacia plataformas EDI en la nube por escalabilidad, disponibilidad y menor complejidad de infraestructura.  
	- [Cloud-Based EDI Software Market](https://pmarketresearch.com/it/electronic-data-interchange-software-market/)
- **Integración API y EDI híbrido**: combinación de EDI tradicional con APIs para intercambio casi en tiempo real e integración con ERP/CRM modernos.  
	- [EDI Market – API & Hybrid Models](https://www.marketgrowthreports.com/market-reports/electronic-data-interchange-edi-market-112717)
- **IA / ML embebidos**: uso de IA para **detección de anomalías, corrección automática y análisis predictivo** en flujos EDI.  
	- [EDI Software Market Trends – Strategic Market Research](https://www.strategicmarketresearch.com/market-report/electronic-data-interchange-software-market)
- **Visibilidad en tiempo real**: aumento de dashboards y monitoreo activo de transacciones y excepciones.  
	- [Real-Time Visibility in EDI](https://pmarketresearch.com/it/electronic-data-interchange-software-market/)
- **Blockchain y seguridad**: uso de blockchain para auditoría, integridad de documentos y trazabilidad.  
	- [Blockchain in EDI – Research Nester](https://www.researchnester.com/es/reports/electronic-data-interchange-edi-software-market/6762)
- **Convergencia con IoT**: activación automática de transacciones EDI a partir de eventos IoT en logística y manufactura.  
	- [The Future of EDI Solutions](https://www.cogentialit.com/blog/the-future-of-edi-solutions.cshtml)

### Adopción y segmentos de mercado
- **Migración desde sistemas on-premises** a modelos cloud e híbridos, especialmente entre 2024-2025.  
	- [EDI Market Adoption – Market Growth Reports](https://www.marketgrowthreports.com/market-reports/electronic-data-interchange-edi-market-112717)
- Las **PYMEs** adoptan EDI mediante soluciones web y gestionadas con menor barrera de entrada.  
	- [EDI Adoption by SMEs](https://www.marketgrowthreports.com/es/market-reports/electronic-data-interchange-edi-market-112717)
- **Retail, manufactura, logística, salud y finanzas** lideran la adopción por cumplimiento normativo y automatización operativa.  
	- [EDI Software Market by Industry](https://www.mordorintelligence.com/industry-reports/electronic-data-interchange-software-market)

## Proveedores, plataformas y desarrollos recientes
### Proveedores y alianzas (2024-2025)
- **Cleo Fusion Cloud 2025**: EDI cloud con **IA asistida para mapeo** y soporte multi-cloud.  
	- [Cleo Fusion Cloud](https://www.cleo.com/products/cleo-fusion)
- **SPS Commerce + Microsoft Azure**: EDI cloud-native integrado con **Dynamics 365**.  
	- [SPS Commerce for Microsoft Dynamics](https://www.spscommerce.com/solutions/microsoft-dynamics/)
- **TrueCommerce + SAP S/4HANA Cloud**: integración EDI nativa para ecosistema SAP.  
	- [TrueCommerce SAP Integration](https://www.truecommerce.com/solutions/sap/)
- **Oracle Cloud SCM**: capacidades EDI avanzadas para onboarding rápido y cumplimiento global.  
	- [Oracle Cloud SCM – B2B & EDI](https://www.oracle.com/scm/)
- **MuleSoft**: enfoque API-driven para modernizar integraciones EDI.  
	- [MuleSoft B2B & EDI](https://www.mulesoft.com/solutions/b2b-integration)

### Otros actores relevantes
- Proveedores consolidados: **SAP, IBM, Oracle, SPS Commerce, TrueCommerce, DiCentral, B2BGateway** con soluciones híbridas y cloud.  
	- [DiCentral EDI Solutions](https://www.dicentral.com/)  
	- [B2BGateway EDI](https://www.b2bgateway.net/)

## Tendencias de adopción y casos de uso avanzados
- Uso de **analítica predictiva** y control proactivo de transacciones EDI.  
	- [EDI Analytics & Monitoring](https://www.marketgrowthreports.com/es/market-reports/electronic-data-interchange-edi-market-112717)
- **Alta disponibilidad y auto-escalado** en EDI cloud para picos de volumen.  
	- [Scalable Cloud EDI](https://pmarketresearch.com/it/electronic-data-interchange-software-market/)
- **Cumplimiento regulatorio global** (e-invoicing, fiscalidad electrónica, normativas regionales) como requisito crítico en 2025-2026.  
	- [Global E-Invoicing & EDI Compliance](https://www.truecommerce.com/blog/global-e-invoicing-compliance/)

## Recursos útiles 2025-2026
### Estudios de mercado y análisis
- **Electronic Data Interchange Software Market – Research Nester**  
	- https://www.researchnester.com/es/reports/electronic-data-interchange-edi-software-market/6762
- **Market Research Future – EDI Trends & Forecasts**  
	- https://www.marketresearchfuture.com/reports/electronic-data-interchange-edi-software-market
- **Mordor Intelligence – EDI Market Insights**  
	- https://www.mordorintelligence.com/industry-reports/electronic-data-interchange-software-market

### Tendencias y predicciones
- **Edifact Formatter – Future of EDI Trends 2025**  
	- https://www.edifactformatter.com/future-of-edi-trends
- **Market Growth Reports – EDI Market Size & Tech Trends**  
	- https://www.marketgrowthreports.com/market-reports/electronic-data-interchange-edi-market-112717
# Herramientas de GitHub para EDI (Electronic Data Interchange)

## Listas y recursos generales
- [Stedi/awesome-edi](https://github.com/Stedi/awesome-edi)  
	Lista curada de herramientas, bibliotecas, productos y recursos EDI (parsers, editores, documentación).
- [michaelachrisco/Electronic-Interchange-Github-Resources](https://github.com/michaelachrisco/Electronic-Interchange-Github-Resources)  
	Repositorio con **recursos EDI por lenguaje y propósito** (Java, herramientas, librerías y ejemplos).

## Parsers y librerías específicas
- [copyleftdev/x12-edi-tools](https://github.com/copyleftdev/x12-edi-tools)  
	**Librería en Python** para trabajar con archivos EDI X12: parseo, lectura y manipulación de segmentos.
- [BerryWorksSoftware/edi-json](https://github.com/BerryWorksSoftware/edi-json)  
	**Serializador EDI ↔ JSON** en Java, útil para integración con APIs y sistemas modernos.

## Lenguajes y formatos EDI
### X12
- **Repositorios X12 en GitHub**  
	Colección de proyectos etiquetados con el topic `x12`, que incluyen parsers, validadores y generadores EDI.  
	- `omniparser` – Framework ETL con soporte para EDI.  
	- Parser en C# con soporte EDIFACT / X12 / TRADACOMS.  
	- API en Ruby para procesamiento de EDI X12.  
	- `StAEDI` – API Java en streaming para parsear, generar y validar mensajes EDI.  
	- Enlace general: [GitHub topic: x12](https://github.com/topics/x12)

### EDIFACT
- **Repositorios EDIFACT en GitHub**  
	Proyectos enfocados en el estándar **UN/EDIFACT**, cubriendo distintos lenguajes y herramientas.  
	- Librerías Python para procesamiento EDIFACT.  
	- Utilidades y parsers EDIFACT en PHP.  
	- Extensiones de Visual Studio Code para edición y validación EDIFACT.  
	- Conversores de EDI a XML.  
	- Enlace general: [GitHub topic: edifact](https://github.com/topics/edifact)

## Proyectos y ejemplos comunitarios
- [php-edifact/edifact](https://github.com/php-edifact/edifact)  
	Conjunto de **herramientas PHP** para procesar mensajes EDIFACT: parseo, lectura estructurada y manejo de segmentos.
- `JEDI` (Go)  
	Proyecto comunitario en GitHub que implementa una **CLI básica en Go** para validar y transformar mensajes EDI a JSON.  
	- Búsqueda recomendada: [GitHub search: JEDI EDI Go](https://github.com/search?q=EDI+Go+CLI&type=repositories)

## Consideraciones de uso
- La mayoría de proyectos en GitHub son **librerías, parsers o ejemplos**, no plataformas EDI completas listas para producción.
- Suelen integrarse con:
	- Pipelines ETL.
	- Microservicios y APIs.
	- Sistemas [ERP](/management/erp/) y plataformas de integración.
	- Editores como VS Code mediante extensiones específicas de EDI.
- Son especialmente útiles para **aprendizaje, prototipos, validación de mensajes y personalización avanzada** de flujos EDI.
# Ejemplo práctico de implementación EDI

## Escenario
- Empresa **compradora** envía una **Orden de Compra (PO)** en formato **X12 850**.
- Empresa **proveedora** recibe el mensaje, lo valida y lo transforma a **JSON** para integrarlo en su [ERP](/management/erp/).
- Implementación sencilla usando **Python** y una librería open source de GitHub.

## Arquitectura del flujo
- ERP comprador genera orden de compra.
- Traductor EDI convierte datos internos a **X12 850**.
- Transmisión vía **AS2 / SFTP / API** (independiente del transporte).
- Parser EDI en el proveedor:
	- Valida sintaxis.
	- Convierte a JSON.
	- Inserta datos en ERP.

## Estructura del proyecto
- `/edi-input/` → mensajes EDI entrantes
- `/edi-output/` → mensajes transformados
- `/schemas/` → definiciones X12
- `parse_edi.py` → script principal

## Ejemplo de mensaje EDI X12 850
### Archivo: `purchase_order.edi`
{% raw %}
```edi
ISA*00*          *00*          *ZZ*BUYERID       *ZZ*SUPPLIERID    *250101*1200*U*00401*000000001*0*P*>~
GS*PO*BUYER*SUPPLIER*20250101*1200*1*X*004010~
ST*850*0001~
BEG*00*NE*PO12345**20250101~
REF*DP*001~
N1*ST*Empresa Compradora~
PO1*1*10*EA*25.00**IN*ABC123~
CTT*1~
SE*8*0001~
GE*1*1~
IEA*1*000000001~
```
{% endraw %}`

## Implementación del parser EDI en Python

### Script: `parse_edi.py`

{% raw %}
```python
from x12_edi_tools import X12Reader
import json
from pathlib import Path

input_file = Path("edi-input/purchase_order.edi")
output_file = Path("edi-output/purchase_order.json")

with open(input_file, "r") as edi_file:
	reader = X12Reader(edi_file.read())
	transactions = reader.parse()

purchase_orders = []

for tx in transactions:
	po = {
		"order_number": tx.get("BEG", {}).get("BEG03"),
		"order_date": tx.get("BEG", {}).get("BEG05"),
		"items": []
	}
	for item in tx.get_segments("PO1"):
		po["items"].append({
			"line": item["PO101"],
			"quantity": item["PO102"],
			"price": item["PO104"],
			"sku": item["PO107"]
		})
	purchase_orders.append(po)

with open(output_file, "w") as json_file:
	json.dump(purchase_orders, json_file, indent=2)

print("EDI procesado y convertido a JSON")
```
{% endraw %}

## Resultado transformado a JSON

### Archivo: `purchase_order.json`

{% raw %}
```json
[
	{
		"order_number": "PO12345",
		"order_date": "20250101",
		"items": [
			{
				"line": "1",
				"quantity": "10",
				"price": "25.00",
				"sku": "ABC123"
			}
		]
	}
]
```
{% endraw %}

## Integración con ERP

* El JSON generado puede:
  * Insertarse directamente en base de datos del [ERP](/management/erp/).
  * Consumirse vía API REST.
  * Activar flujos de Automatizacion (stock, facturación, logística).
* Normalmente se usa un **middleware EDI** para:
  * Manejo de errores.
  * Retransmisión.
  * Auditoría y trazabilidad.

## Validaciones y controles habituales

* Validación de estructura X12 (segmentos obligatorios).
* Control de duplicados (ISA/GS/ST).
* Logs de recepción y estado de procesamiento.
* Alertas ante errores sintácticos o de negocio.

## Extensión del ejemplo

* Añadir **997 Functional Acknowledgment** automático.
* Soporte para **EDIFACT ORDERS**.
* Uso de **EDI híbrido (EDI + API)**.
* Monitorización con dashboards operativos.
* Cumplimiento regulatorio y archivado legal.
# Caso de uso avanzado EDI usando un tool (EDI + API + IA)

## Escenario
- Empresa **retail internacional** con alto volumen de pedidos.
- Uso de **EDI X12 / EDIFACT** combinado con **APIs REST**.
- Objetivo:
	- Automatizar pedidos.
	- Detectar errores y anomalías antes de impactar en operaciones.
	- Integrar con [ERP](/management/erp/) y sistemas de [Management](/uncategorized/management/) y Automatizacion.

## Tool utilizado
- **MuleSoft Anypoint Platform (B2B/EDI + API Manager)**  
	- Funciones clave:
		- Traductor EDI (X12 / EDIFACT).
		- Exposición de flujos como APIs.
		- Orquestación y validación avanzada.
- Complemento:
	- Motor de **IA/ML** para detección de anomalías (por ejemplo, modelo propio o servicio externo).

## Arquitectura avanzada
- Proveedores envían pedidos vía:
	- AS2.
	- SFTP.
	- VAN.
- MuleSoft:
	- Recibe EDI.
	- Valida estructura y reglas de negocio.
	- Convierte a JSON.
	- Enruta a:
		- ERP.
		- Motor de IA.
		- API interna de logística.
- ERP responde con:
	- Confirmación.
	- Stock.
	- Fecha estimada.
- MuleSoft genera:
	- Respuesta EDI (855 / ORDRSP).
	- API response para sistemas modernos.

## Flujo detallado del proceso
1. **Recepción EDI**
	- Pedido X12 850 / EDIFACT ORDERS.
	- Validación sintáctica (segmentos, longitudes, obligatoriedad).
2. **Transformación**
	- Conversión EDI → JSON normalizado.
3. **Validación avanzada**
	- Reglas de negocio:
		- Cantidades fuera de rango.
		- Precios no contractuales.
		- Productos descatalogados.
4. **Análisis con IA**
	- Tool de IA analiza:
		- Históricos de pedidos.
		- Patrones anómalos (fraude, errores humanos, integraciones defectuosas).
5. **Decisión automática**
	- Pedido válido → ERP.
	- Pedido sospechoso → cola de revisión humana.
6. **Respuesta automática**
	- Generación de:
		- 997 Functional Acknowledgment.
		- 855 Purchase Order Acknowledgment.

## Ejemplo de transformación EDI → JSON en MuleSoft
### DataWeave (transformación)
{% raw %}
```dw
%dw 2.0
output application/json
---
{
	orderNumber: payload.BEG.BEG03,
	orderDate: payload.BEG.BEG05,
	buyer: payload.N1 filter ($.N101 == "BY"),
	items: payload.PO1 map {
		line: $.PO101,
		quantity: $.PO102,
		price: $.PO104,
		sku: $.PO107
	}
}
```
{% endraw %}`

## Ejemplo de regla avanzada (validación)

### Regla de negocio

{% raw %}
```yaml
rule: quantity_threshold
condition: item.quantity > 1000
action:
	type: flag
	reason: "Cantidad fuera de patrón histórico"
```
{% endraw %}

## Respuesta EDI automática

### X12 997 (fragmento)

{% raw %}
```edi
ST*997*0001~
AK1*PO*1~
AK2*850*0001~
AK5*A~
AK9*A*1*1*1~
SE*6*0001~
```
{% endraw %}

## Beneficios del enfoque avanzado

* Reducción drástica de errores operativos.
* Prevención de pedidos fraudulentos o inconsistentes.
* Integración fluida entre EDI tradicional y ecosistemas API.
* Escalabilidad cloud y alta disponibilidad.
* Visibilidad en tiempo real del estado de pedidos.

## Métricas monitorizadas

* Tiempo medio de procesamiento EDI.
* Ratio de errores por socio comercial.
* Pedidos bloqueados por IA.
* Cumplimiento SLA por proveedor.

## Extensiones posibles

* Integración con **blockchain** para trazabilidad legal.
* Activación automática de flujos IoT (almacén, transporte).
* Aprendizaje continuo del modelo de IA con feedback humano.
* Soporte multi-estándar dinámico (X12 ↔ EDIFACT ↔ JSON).

# EDI – Parsers y formatos

## Formatos EDI
- **EDI** define **cómo se estructuran y codifican los datos**, no cómo se transportan.
- Cada formato EDI especifica:
	- Segmentos.
	- Elementos de datos.
	- Separadores.
	- Reglas de obligatoriedad y repetición.
	- Versionado.

## Formato X12 (ANSI ASC X12)
- Predominante en **Norteamérica**.
- Basado en:
	- Segmentos separados por `~`.
	- Elementos separados por `*`.
- Identificación por **Transaction Sets**:
	- `850` – Purchase Order.
	- `855` – Purchase Order Acknowledgment.
	- `810` – Invoice.
	- `856` – ASN (Advanced Shipping Notice).
- Estructura típica:
	- `ISA` → Interchange Header.
	- `GS` → Functional Group.
	- `ST` → Transaction Set.
	- Segmentos de negocio (`BEG`, `PO1`, `N1`, etc.).

## Formato EDIFACT (UN/EDIFACT)
- Predominante en **Europa e internacional**.
- Definido por Naciones Unidas.
- Usa:
	- `'` como terminador de segmento.
	- `+` como separador de elementos.
	- `:` como separador de componentes.
- Mensajes comunes:
	- `ORDERS` – Pedido.
	- `INVOIC` – Factura.
	- `DESADV` – Aviso de expedición.
- Estructura típica:
	- `UNB` → Interchange Header.
	- `UNH` → Message Header.
	- Segmentos de negocio (`BGM`, `LIN`, `QTY`, etc.).

## Otros formatos relevantes
- **HL7**: sector salud (hospitales, laboratorios).
- **TRADACOMS**: retail en Reino Unido.
- **ODETTE**: industria automotriz.
- **SWIFT**: sector financiero.
- **XML/JSON EDI-like**:
	- Representaciones modernas usadas en EDI híbrido y APIs.

## ¿Qué es un parser EDI?
- Un **parser EDI** es el componente que:
	- Lee un mensaje EDI en bruto.
	- Interpreta su estructura según el estándar.
	- Convierte el contenido a una representación estructurada (objetos, XML, JSON).
- Es la base para integrar EDI con:
	- [ERP](/management/erp/)
	- APIs
	- Bases de datos
	- Sistemas de Automatizacion

## Funciones principales de un parser
- **Tokenización**:
	- Identifica segmentos, elementos y componentes.
- **Validación sintáctica**:
	- Orden correcto de segmentos.
	- Longitud y tipo de datos.
- **Validación semántica**:
	- Reglas de negocio.
	- Campos obligatorios según versión.
- **Normalización**:
	- Conversión a modelos internos (JSON, XML, objetos).
- **Gestión de versiones**:
	- Soporte para múltiples releases del estándar.

## Tipos de parsers EDI
### Parsers secuenciales (streaming)
- Procesan el archivo línea a línea.
- Ideales para:
	- Archivos grandes.
	- Alto volumen.
- Ejemplo:
	- APIs streaming en Java o Go.

### Parsers basados en DOM
- Cargan todo el mensaje en memoria.
- Más fáciles de programar.
- Menos eficientes para grandes volúmenes.

### Parsers genéricos vs específicos
- **Genéricos**:
	- Soportan múltiples estándares (X12, EDIFACT).
	- Requieren configuración.
- **Específicos**:
	- Optimizados para un tipo de mensaje concreto (por ejemplo, solo 850).

## Transformación de formato
- Flujo típico:
	- EDI plano → Parser → Modelo intermedio → JSON / XML.
- Usos:
	- Integración con APIs REST.
	- Persistencia en bases de datos.
	- Visualización y analítica.

## Parsers EDI y validación
- Validaciones técnicas:
	- Separadores correctos.
	- Segmentos obligatorios.
- Validaciones funcionales:
	- Precios válidos.
	- Cantidades permitidas.
	- Códigos maestros existentes.
- Generación de respuestas:
	- `997` (X12).
	- `CONTRL` (EDIFACT).

## Parsers en arquitecturas modernas
- Integrados en:
	- Middleware EDI.
	- Plataformas iPaaS.
	- Microservicios.
- Combinados con:
	- APIs.
	- Eventos.
	- Mensajería asíncrona.
- Base del enfoque **EDI híbrido (EDI + API)**.

## Buenas prácticas
- Separar:
	- Parsing.
	- Validación.
	- Lógica de negocio.
- Versionar esquemas EDI.
- Registrar errores con trazabilidad completa.
- Mantener pruebas con mensajes reales.
- Documentar mappings EDI ↔ modelo interno.

## Relación con otros conceptos
- [Redes](/uncategorized/redes/): transporte seguro del mensaje.
- [ERP](/management/erp/): destino/origen del dato procesado.
- Automatizacion: ejecución automática tras parsing.
- [Management](/uncategorized/management/): control y supervisión de flujos EDI.

