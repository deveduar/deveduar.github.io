---
date: 2025-05-21 17:44
title: ENS Esquema Nacional de Seguridad
keywords:
source:
status: 🌟
Parent: "[[Area-Sistemas]]"
public_note: "true"
category: infraestructura IT
tags:
  - TI
  - ITIL
  - regulaciones
  - normativas
---
# ENS Esquema Nacional de Seguridad
`$= dv.current().file.tags.join(" ")` 

- El **Esquema Nacional de Seguridad (ENS)** es la normativa española que establece los principios y requisitos de seguridad que deben cumplir los sistemas de información en la Administración Pública y en aquellos proveedores que gestionen información relacionada con ésta.  
- Su objetivo es garantizar la **confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad** de la información y servicios electrónicos.  
- [Esquema Nacional de Seguridad - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/Esquema_Nacional_de_Seguridad)  
- [430v2 Esquema Nacional de Seguridad V2 ENS 2022 RD 311/2022 - YouTube](https://youtu.be/jQJU-UB4sAQ)  
- [Centro Criptológico Nacional - ENS](https://www.ccn.cni.es/seguridad-ens)  

## Marco Legal

- Basado en el **Real Decreto 311/2022**, que actualiza y reemplaza la versión anterior de 2010, adaptando el ENS a las nuevas tecnologías y desafíos en ciberseguridad.  
- Establece obligaciones para:  
	Tipo de información y sistemas a proteger  
	Niveles de seguridad (Básico, Medio y Alto)  
	Medidas de protección mínimas según el nivel de seguridad  
- Permite la integración con otras normas como **ISO/IEC 27001**, garantizando compatibilidad con estándares internacionales.  

## Principios del ENS

- **Seguridad Integral:** Protección de sistemas y datos, considerando tanto aspectos técnicos como organizativos.  
- **Prevención y Gestión de Riesgos:** Identificación, evaluación y tratamiento de riesgos.  
- **Seguridad por Defecto y por Diseño:** Implementación de medidas de seguridad desde el inicio del ciclo de vida de los sistemas.  
- **Responsabilidad y Rendición de Cuentas:** Cada responsable de un sistema debe garantizar el cumplimiento de los requisitos del ENS.  
- **Transparencia:** Registro y trazabilidad de acciones y eventos relevantes.  

## Niveles de Seguridad

- **Básico:** Para sistemas con información de carácter público o de bajo riesgo.  
- **Medio:** Para sistemas con información sensible que requiere protección contra accesos no autorizados.  
- **Alto:** Para sistemas que manejan información crítica o confidencial, con riesgo elevado de impacto en caso de incidentes de seguridad.  

## Medidas de Seguridad

- **Organizativas:** Políticas internas, gestión de incidentes, roles y responsabilidades, formación y concienciación.  
- **Técnicas:** Control de accesos, cifrado, autenticación robusta, protección de comunicaciones, registro de eventos y auditoría.  
- **Físicas:** Seguridad en instalaciones, control de accesos físicos y protección frente a desastres.  

## Certificación y Cumplimiento

- La **certificación ENS** acredita que un sistema o entidad cumple con los requisitos del ENS según su nivel de seguridad.  
- Evaluada por **entidades certificadoras acreditadas** según criterios establecidos por el CCN (Centro Criptológico Nacional).  
- Permite a las organizaciones:  
	- Garantizar confianza a usuarios y ciudadanos  
	- Cumplir con obligaciones legales y contractuales  
	- Integrar la seguridad en la estrategia organizativa  


# ENS Esquema Nacional de Seguridad - Guía Completa

## Roles y Responsabilidades

- **Responsable del Sistema:** Garantiza cumplimiento del ENS en el ciclo de vida del sistema.  
- **Responsable de Seguridad:** Supervisa medidas, gestión de incidentes y reportes.  
- **Usuarios:** Cumplen políticas de seguridad y reportan incidentes.  
- **Proveedor Externo:** Garantiza que servicios contratados respeten el nivel de seguridad ENS.  

## Gestión de Riesgos

- Identificación de activos críticos y su clasificación.  
- Detección de amenazas y vulnerabilidades.  
- Evaluación de impacto y probabilidad de riesgos.  
- Estrategias de tratamiento: mitigación, aceptación, transferencia o eliminación.  
- Revisión periódica según cambios tecnológicos o de procesos.  

## Niveles de Seguridad y Medidas Recomendadas

| Nivel  | Medidas Organizativas                                                                    | Medidas Técnicas                                                                                                 | Medidas Físicas                                                                            |
| ------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Básico | Políticas de uso de sistemas, roles definidos, formación básica                          | Autenticación mínima, antivirus, backup regular, control de accesos básicos                                      | Control de acceso a salas de servidores, protección contra desastres menores               |
| Medio  | Procedimientos de gestión de incidentes, revisión periódica de roles, formación avanzada | Autenticación fuerte, cifrado de datos sensibles, firewall, registro de eventos, auditorías                      | Acceso restringido a servidores, redundancia en infraestructura crítica, control ambiental |
| Alto   | Planes de continuidad, simulacros de incidentes, controles internos estrictos            | Cifrado extremo, autenticación multifactor, monitorización continua, segmentación de red, pruebas de penetración | Centros de datos seguros, redundancia total, contingencia ante desastres graves            |

## Checklist de Auditoría ENS

- ¿Se han identificado todos los activos críticos del sistema?  
- ¿Se han clasificado correctamente los datos según su sensibilidad?  
- ¿Existen políticas de seguridad documentadas y actualizadas?  
- ¿Se aplican controles de acceso adecuados según el nivel de seguridad?  
- ¿Se registran y auditan eventos relevantes?  
- ¿Se revisan periódicamente las medidas técnicas y organizativas?  
- ¿Se realizan pruebas de continuidad y recuperación ante incidentes?  
- ¿Los proveedores externos cumplen con el ENS?  
- ¿Existen planes de concienciación y formación para usuarios y responsables?  
- ¿Se gestionan y documentan todos los incidentes de seguridad?  

## Mapa de Riesgos Típico en Sistemas Públicos

| Activo | Amenaza | Vulnerabilidad | Impacto | Nivel de Riesgo |
|--------|---------|----------------|--------|----------------|
| Portal de administración electrónica | Acceso no autorizado | Autenticación débil | Alto | Medio-Alto |
| Base de datos de ciudadanos | Robo de datos personales | Falta de cifrado en reposo | Alto | Alto |
| Servicios de salud | Pérdida de disponibilidad | Backup insuficiente, ransomware | Crítico | Alto |
| Sistemas tributarios | Fraude o manipulación de datos | Controles internos insuficientes | Crítico | Alto |
| Infraestructura de red | Ataques DDoS | Segmentación y monitorización insuficiente | Medio | Medio |
| Aplicaciones móviles | Vulnerabilidades de software | Falta de actualizaciones | Medio | Medio |

## Integración con Estándares y Frameworks

- **ISO/IEC 27001:** Alinea políticas y controles con estándares internacionales.  
- **ISO/IEC 27005:** Gestión de riesgos sistemática.  
- **NIST CSF:** Complementa la madurez y gestión de ciberseguridad.  

## Procedimientos de Auditoría y Control

- Registro y trazabilidad de eventos de seguridad.  
- Auditorías internas y externas periódicas.  
- Informes con indicadores clave (KPI) de seguridad.  
- Pruebas de penetración y revisiones técnicas regulares.  

## Ejemplos de Implementación en Sistemas Públicos

- Portales de administración electrónica: Protección de datos y trámites digitales.  
- Sistemas de salud y educación: Confidencialidad y disponibilidad de información crítica.  
- Servicios de gestión tributaria o seguridad social: Aplicación de niveles Medio o Alto según sensibilidad.  

## Buenas Prácticas

- Seguridad por defecto y por diseño en todos los sistemas.  
- Formación continua y concienciación de usuarios.  
- Integración coherente de medidas técnicas, organizativas y físicas.  
- Monitorización constante y respuesta rápida a incidentes.  
- Revisión periódica de políticas y controles frente a nuevas amenazas.  

# Recursos y estado del ENS (2025–2026)

## Normativa Oficial y Documentos

- **Real Decreto 311/2022 (ENS vigente)**  
  Texto regulador del ENS que define principios, requisitos y medidas de seguridad aplicables a la Administración Pública y proveedores tecnológicos asociados.  
  Incluye contenido navegable con Instrucciones Técnicas de Seguridad (ITS), guías STIC y abstracts.  
  [ens.ccn.cni.es](https://ens.ccn.cni.es/es/normativa?utm_source=chatgpt.com)
- **BOE – Esquema Nacional de Seguridad (2025)**  
  Publicaciones de fiscalizaciones y asistencia a entidades locales sobre cumplimiento del ENS (incluyendo dificultades y propuestas de marcos de certificación específicos para ayuntamientos).  
  [boe.es](https://www.boe.es/boe/dias/2025/03/31/pdfs/BOE-A-2025-6456.pdf?utm_source=chatgpt.com)
- **Orden CNU/1383/2025 (1 dic 2025)**  
  Aprobación de la **Política de Seguridad de la Información (PSI)** para la Administración Digital del Ministerio de Ciencia, Innovación y Universidades, como desarrollo del ENS.  
  [boe.es](https://www.boe.es/eli/es/o/2025/12/01/cnu1383?utm_source=chatgpt.com)

## Guías y Materiales Técnicos

- **Guía de Auditorías de Cumplimiento ENS (CCN-STIC 802)**  
  Versión actualizada del CCN que detalla métodos de auditoría internos y externos, composición de equipos, criterios de calidad e imparcialidad, alineada con RD 311/2022.  
  [arpa.es](https://www.arpa.es/actualidad-de-nuevas-tecnologias-y-cumplimiento-normativo-n-o-6-2025/?utm_source=chatgpt.com)
- **Listado de Guías STIC y Contenidos Formativos**  
  Incluye glosario, responsabilidades, implantación de medidas y catálogo de productos/servicios de seguridad aplicables al ENS, utilizado en materiales de formación y sesiones educativas de 2025.  
  [fundacioncomplutense.es](https://fundacioncomplutense.es/intranet/wp-content/uploads/sites/6/2025/03/fgucm.ens_formacion.pdf?utm_source=chatgpt.com)

## Estado de Cumplimiento y Ejecución

- **Cumplimiento en ayuntamientos españoles (2025)**  
  Informes periodísticos señalan que la mayoría de ayuntamientos incumplen las obligaciones de auditoría y certificación periódica del ENS, con menos de 50 municipios con esquemas validados frente a más de 1.000 obligados legalmente. Esto refleja brechas relevantes entre normativa y práctica.  
  [cadenaser.com](https://cadenaser.com/cataluna/2025/04/13/el-99-de-los-ayuntamientos-espanoles-incumplen-la-ley-de-ciberseguridad-sercat/?utm_source=chatgpt.com)

## Integraciones Normativas Relevantes

- **Alineación con la Directiva NIS2 (UE)**  
  En octubre de 2025 España expuso ante la UE cómo el ENS se alinea con los requisitos de la Directiva NIS2, reforzando coherencia entre normativa nacional y la ciberseguridad europea para sectores críticos y administración pública.  
  [ccn-cert.cni.es](https://www.ccn-cert.cni.es/es/seguridad-al-dia/actualidad-ccn/13101-espana-expone-ante-la-union-europea-la-alineacion-del-esquema-nacional-de-seguridad-con-los-requisitos-de-la-directiva-nis2.html?utm_source=chatgpt.com)
- **Transposición de NIS2 en España**  
  La implementación de la Directiva NIS2 sigue en proceso, con discusión legislativa y anteproyectos aprobados en 2025 para adaptar la legislación española a los requisitos de continuidad de negocio, análisis de riesgos y seguridad en la cadena de suministro.  
  [cyberupgrade.net](https://cyberupgrade.net/blog/compliance-regulations/nis2-directive-regulations-and-implementation-in-spain/?utm_source=chatgpt.com)

## Formación, Certificación y Estadísticas

- **Certificación ENS – Datos de 2025/2026**  
  La plataforma oficial muestra cifras de entidades y empresas certificadas bajo ENS, así como opciones de formación especializadas a través de programas oficiales como la plataforma ÁNGELES.  
  [ens.ccn.cni.es](https://ens.ccn.cni.es/es/?utm_source=chatgpt.com)
- **Índice Global de Ciberseguridad (NCSI)**  
  España se sitúa con indicadores de política y desarrollo en ciberseguridad altos a nivel internacional, lo que refleja esfuerzos estratégicos combinados con el ENS y otras políticas nacionales.  
  [ncsi.ega.ee](https://www.ncsi.ega.ee/country/es/?utm_source=chatgpt.com)

## Recursos Web Útiles (2025–2026)

- **Sitio oficial ENS (CCN-CERT):** Marco normativo, guías, certificación y formación.  
  [ens.ccn.cni.es](https://ens.ccn.cni.es/es/?utm_source=chatgpt.com)
- **Portal de normativa ENS:** Acceso directo al RD 311/2022 y a Instrucciones Técnicas de Seguridad (ITS).  
  [ens.ccn.cni.es](https://ens.ccn.cni.es/es/normativa?utm_source=chatgpt.com)
- **Guías STIC Serie 800:** Documentos técnicos de referencia para implantación y auditoría del ENS.  
  [fundacioncomplutense.es](https://fundacioncomplutense.es/intranet/wp-content/uploads/sites/6/2025/03/fgucm.ens_formacion.pdf?utm_source=chatgpt.com)

# Recursos ENS 2026 — Guías, Plantillas de Auditoría y Calendarios

## Repositorios Oficiales de Guías y Documentación Técnica

- **Repositorio oficial ENS – CCN‑CERT (normativa, ITS y guías STIC)**  
  Portal del Centro Criptológico Nacional con el marco legal, Instrucciones Técnicas de Seguridad (ITS) y guías CCN‑STIC para implementación y auditoría del ENS (incluye CCN‑STIC 802, 804, 808).  
  [https://ens.ccn.cni.es/es/](https://ens.ccn.cni.es/es/)

- **Guía de Auditoría ENS — CCN‑STIC 802 (PDF)**  
  Documento oficial que explica el proceso de auditoría de conformidad con el ENS, criterios, evidencia y metodología de verificación para sistemas de niveles Medio y Alto.  
  [https://www.ccn-cert.cni.es/es/800-guia-esquema-nacional-de-seguridad/502-ccn-stic-802-auditoria-del-ens/file.html](https://www.ccn-cert.cni.es/es/800-guia-esquema-nacional-de-seguridad/502-ccn-stic-802-auditoria-del-ens/file.html)

- **Guía de Declaración y Certificación ENS — CCN‑STIC 809 (PDF)**  
  Incluye modelos de declaración de conformidad y de certificación con la norma, útiles como plantillas base para documentación de cumplimiento.  
  (Documento CCN‑STIC 809 — búsqueda disponible)

## Recursos Complementarios y Plantillas de Soporte

- **CCN‑STIC‑599A18 — Guía de seguridad TIC (Anexo A)**  
  Guía práctica con ejemplos de implementación de controles (p. ej., configuración de seguridad en Windows) que puede servir como referencia para evidencias de auditoría.  
  (Enlace a PDF externo — requiere acceso)

- **CSA CCM v4.0 Addendum para ENS**  
  Mapeo entre controles de la CSA Cloud Controls Matrix y ENS, útil para organizaciones que combinan cumplimiento ENS con frameworks internacionales.  
  (Descarga desde Cloud Security Alliance — posible previo registro)

## Plantillas y Checklists de Auditoría Recomendadas

*(Notas: muchos de estos recursos no están en formato “oficial” pero sirven como base para construir plantillas en Obsidian/Markdown)*

- **Checklist básico ENS (estructura sugerida)**  
  - Políticas documentadas y aprobadas  
  - Análisis y tratamiento de riesgos actualizado  
  - Evidencias de controles técnicos y organizativos  
  - Registros de auditoría y trazabilidad  
  - Pruebas de restauración y continuidad  
  - Evidencias de formación y concienciación  
  - Controles de acceso y autenticación multifactor

- **Modelos de evidencia para auditoría**  
  - Política de seguridad de la información  
  - Plan de tratamiento de riesgos  
  - Actas de pruebas de control técnico  
  - Informes de vulnerabilidades y resolución  
  - Registros de incidentes y respuesta

*(Estas plantillas puedes convertirlas a notas de Obsidian con casillas ✓ y enlaces a tus propios documentos de evidencia.)*

## Calendarios y Fechas Claves 2026

- **Ciclos de auditoría ENS (según ENS/Anexo III del RD 311/2022)**  
  Auditorías periódicas para sistemas en niveles **Medio** y **Alto** deben realizarse **al menos cada 2 años**, y extraordinarias cuando haya cambios sustanciales.  
  [https://www.ccn-cert.cni.es/es/800-guia-esquema-nacional-de-seguridad/502-ccn-stic-802-auditoria-del-ens/file.html](https://www.ccn-cert.cni.es/es/800-guia-esquema-nacional-de-seguridad/502-ccn-stic-802-auditoria-del-ens/file.html)

- **Obtención y mantenimiento de certificación ENS**  
  - **Aplicación y documentación** — típicamente 1‑2 meses antes del inicio de auditoría.  
  - **Auditoría documental (Etapa 1)** — 2‑4 semanas.  
  - **Auditoría en sitio (Etapa 2)** — 1‑2 semanas.  
  - **Decisión de certificación y emisión** — 1‑2 semanas.  
  *(Proceso estándar para 2025/2026 según prácticas de certificación y guías de auditoría.)*  
  [https://lazarusalliance.com/services/audit-compliance/ens/?utm_source=chatgpt.com](https://lazarusalliance.com/services/audit-compliance/ens/?utm_source=chatgpt.com)

- **Renovación de certificación ENS**  
  Las certificaciones obtenidas en 2024‑2025 deben planificar su **renovación en 2026‑2027** para mantener soporte continuo (recordatorio de vencimiento 24‑36 meses desde la emisión).

## Enlaces Útiles Adicionales

- **Implementación ENS y servicios asociados** (consultoría y apoyo técnico)  
  [https://www.sqs.es/ens-implementation-and-audit/?lang=en](https://www.sqs.es/ens-implementation-and-audit/?lang=en)

- **ENS en contexto de cumplimiento cloud (ej. Microsoft, AWS)**  
  - Microsoft ENS compliance overview  
    [https://learn.microsoft.com/en-us/compliance/regulatory/offering-ens-spain](https://learn.microsoft.com/en-us/compliance/regulatory/offering-ens-spain)  
  - AWS ENS certification high level (caso práctico)  
    [https://aws.amazon.com/compliance/esquema-nacional-de-seguridad/](https://aws.amazon.com/compliance/esquema-nacional-de-seguridad/)
