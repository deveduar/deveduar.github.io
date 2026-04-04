---
date: 2024-02-15 16:37
title: DB-Fundamentos y documentos
status: 🌟
Parent: "[[Area-Prog]]"
keywords:
source:
category: Databases
tags:
  - DB
---
# DB-Fundamentos y documentos

- [Databases](/databases/databases/)

## Introducción
- Bases de datos permiten almacenar, consultar y actualizar información de manera eficiente.
- Permiten trabajo simultáneo de varios usuarios con control de seguridad.
- Reducen redundancia de datos y garantizan integridad.

## Ventajas
- Actualización y consulta rápidas.
- Manejo de grandes volúmenes de datos.
- Fácil acceso desde dispositivos y sistemas informáticos.
- Seguridad mediante restricción de usos.

## Control de Redundancia
- Evitar duplicidad de información, por ejemplo: Id de producto único.
- Pregunta → DB → Respuesta.

## Etapas de Desarrollo
1. Obtención y análisis de requerimientos.
2. Diseño del sistema.
3. Desarrollo e implementación.
4. Pruebas y mantenimiento.
5. Diseño de la BD dentro de la etapa de diseño del sistema.

## Tipos de Bases de Datos

### Dinámicas
- Pueden actualizarse frecuentemente.
- Ejemplo: registro de productos con cambios en descripción o precio.

### Estáticas
- Solo lectura, almacenan información sin cambios frecuentes.
- Ejemplo: movimientos de cuentas bancarias.

### Clasificación por Teorema de CAP
- BDs distribuidas en nodos.
- **Consistencia:** datos deben coincidir en todos los nodos.
- **Disponibilidad:** seguir consultando/almacenando aun si un nodo no está disponible.
- **Tolerancia a particiones:** información distribuida, ningún nodo tiene todo.

### Relacionales
- Plan preciso de desarrollo.
- Consistencia de datos importante.
- Estables, documentadas y ampliamente usadas.

### No Relacionales
- Sistema distribuido.
- Grandes cantidades de datos con estructuras variables.
- Orientadas a Big Data.
- Ejemplos: MongoDB, Cassandra.

## Sistema Gestor de Bases de Datos (SGBD)
- Herramientas para consultas y edición de datos.
- Interfaz gráfica.
- Mantener integridad y concurrencia.
- Control de acceso de usuarios.
- Sistemas especializados por área.

## Modelos de Bases de Datos Relacionales

### Niveles de Abstracción
- **Conceptual:** representación general y comprensible.
- **Lógico:** estructura de datos, tipos de información, relaciones.
- **Físico:** almacenamiento real de los datos, índices, restricciones.

### Modelos
- **Jerárquico:** árbol invertido, alto rendimiento, no garantiza duplicidad.
- **Red:** nodo con varios padres, grafos completos, soluciona redundancia.
- **Transaccional:** alta velocidad de envío/recepción, admite duplicación de datos.
- **Relacional:** uso de tablas y relaciones, IBM 1970, más usado en problemas reales.

### Modelo Relacional
- **Conceptos principales:** bases de datos → tablas → filas y columnas → registros.
- **Claves:** identificadores únicos de registros.
- **Tipos de claves:**
	- Primarias: identifican un registro de forma única.
	- Secundarias/foráneas: establecen relaciones entre tablas.
- Relaciones: uno a uno, uno a muchos, muchos a muchos.
- Favorece normalización y garantiza integridad referencial.


## Diseño y Modelado

### Primeros Pasos
- Evitar datos redundantes.
- Minimizar errores en producción.
- Maximizar rendimiento.
- Anticipar cambios en diseño posterior.

### Planificación Inicial
- Objetivo de la base de datos.
- Acciones y operaciones que realizará.
- Sistema al que estará enlazada.
- Cantidad de usuarios promedio.
- Material previo existente.

### Diseño Conceptual
- Definir entidades y relaciones de forma abstracta.
- Diagramas entidad-relación.
- Ejemplo: plataforma educativa (soporte web).

### Diseño Lógico
- Basado en el modelo entidad-relación.
- Contiene tablas, atributos, tipos de datos y relaciones.
- Asignar atributos y unir tablas según relaciones.

### Diseño Físico
- Esquema físico basado en SGBD.
- Definición de tablas, campos, índices y restricciones.
- Consideraciones de rendimiento y acceso.

## Índices
- Mejoran acceso a datos.
- Contienen valor de la key y dirección física del registro.
- Impactan en rendimiento de lecturas/escrituras.
- Mayor número de índices puede ralentizar actualizaciones.

## Restricciones de Integridad
- Mantener consistencia semántica.
- Tipos:
	- Llaves primarias: identifican registros únicos.
	- Llaves foráneas: establecen relaciones.
	- Cardinalidad: cantidad de elementos en origen y destino.
	- Restricción de dominio: valores posibles por atributo.

## Integridad Referencial
- Valores heredados de entidades deben existir previamente.
- Aplicable desde modelo físico a través de llaves y cardinalidades.
- Herramientas de modelado: ENTERPRISE ARCHITECT.
- Diagrama físico incluye: tablas, atributos, tipos de datos, PK y FK, índices, relaciones y cardinalidad.


## Contenidos Faltantes

### Bases de Datos No Relacionales (detalle adicional)
- **Otras BD No Relacionales**
	- *Ejemplo: Cassandra* (ya mencionada, pero faltaba explicar su naturaleza)
		- Orientada a columnas.
		- Muy eficiente para escritura masiva.
		- Alta disponibilidad mediante replicación entre nodos.
		- No garantiza consistencia fuerte en todos los casos (eventual consistency).

### Relaciones en una Base de Datos (faltaban detalles)
- Ejemplo contextual: Plataforma educativa
	- Tablas: estudiante, profesor, curso.
- Cómo establecer relaciones correctamente:
	- Analizar el caso de uso completo.
	- Determinar cardinalidades correctas.
	- Evitar asignar restricciones indebidas, por ejemplo:
		- **Un profesor puede impartir varios cursos**, por lo tanto su id **no debe ser único** en la tabla curso (solo FK).

### Tipos de Relaciones (faltan especificaciones)
- **Uno a uno (1:1)**
	- Un registro está vinculado exclusivamente a otro.
	- Útil para separar datos sensibles o poco utilizados.
- **Uno a muchos (1:N)**
	- Relación más común en sistemas reales.
	- Ejemplo: un profesor imparte varios cursos.
- **Muchos a muchos (M:N)**
	- Requiere tabla intermedia.
	- Ejemplo: estudiantes inscritos en múltiples cursos.
- Consideración adicional faltante:
	- Cómo el SGBD maneja la eliminación: `ON DELETE CASCADE`, `RESTRICT`, etc.

### Resumen del Modelo Relacional (faltaba completar)
- Atributo → dominio: conjunto de valores permitidos para un campo.
- Atributo particular declarado como clave primaria puede ser referenciado como FK en otras tablas.
- Una fila representa una instancia específica de una entidad.

### Desventajas de las BDs Relacionales (faltaba expandir)
- Poca flexibilidad ante datos altamente cambiantes o no estructurados.
- No óptimas para escalado horizontal masivo.
- Menor rendimiento en consultas distribuidas.
- Limitaciones con grandes cantidades de datos multimedia o no estructurados.

### Errores y Riesgos en el Diseño (conceptos faltantes)
- Subnormalización: demasiada duplicación.
- Sobrenormalización: exceso de tablas que dificulta consultas.
- Índices mal diseñados que reducen rendimiento.
- Modelado incorrecto de cardinalidades.
- Elección incorrecta del tipo de dato.

### Diseño Físico (faltaban algunos elementos)
- Ajuste del motor de almacenamiento (Ej: InnoDB vs MyISAM).
- Configuración de particionamiento de tablas.
- Distribución de archivos en disco (tablespaces).
- Parámetros de rendimiento del SGBD:
	- tamaño de buffer pool,
	- logging,
	- checkpointing.

### Diagrama Físico (faltaba cerrar ideas)
- Representación completa de todas las relaciones.
- Especificación de índices compuestos.
- Estrategias de normalización/desnormalización aplicadas.
- Inclusión del comportamiento ante borrado/actualización (`CASCADE`, `SET NULL`, etc.).

### Integridad Referencial (faltaba cubrir reglas adicionales)
- Reglas de actualización:
	- `ON UPDATE CASCADE`
	- `ON UPDATE SET NULL`
- Casos donde no conviene cascada:
	- Registros históricos.
	- Auditorías.

### Tipos de Restricciones (faltaba ampliar)
- **Restricciones de unicidad (UNIQUE)**
	- Garantizan que un valor no se repita sin ser clave primaria.
- **Restricciones de chequeo (CHECK)**
	- Validan formatos o rangos.
	- Ejemplo: edad > 0.
- **Restricciones de nulidad (NOT NULL)**
	- Evitan registros incompletos.
- **Restricciones de negocio**
	- Reglas específicas del dominio que limitan valores.

### Diseño Conceptual (faltaba expandir herramientas)
- Técnicas de modelado adicionales:
	- Identificar atributos compuestos.
	- Identificar atributos multivaluados.
	- Definir entidades débiles.
- Diagramación:
	- Notación Chen.
	- Notación Crow’s Foot.

### Diseño Lógico (faltaban detalles)
- Normalización:
	- 1FN: sin valores repetidos o atributos multivaluados.
	- 2FN: dependencia completa de la clave.
	- 3FN: sin dependencias transitivas.
	- BCNF: variación más estricta de la 3FN.
- Tipos de datos: elección según motor (NUMERIC, VARCHAR, TEXT…).
- Definición de vistas para simplificar consultas.

### Fase de Implementación (faltaba información)
- Importancia del versionado de esquemas mediante migraciones.
- Uso de herramientas:
	- Liquibase
	- Flyway
- Pruebas:
	- Pruebas de carga.
	- Pruebas de concurrencia.
	- Pruebas de integridad.

### Fase de Uso y Mantenimiento (faltaban conceptos)
- Optimización continua de queries basadas en EXPLAIN.
- Monitoreo de rendimiento del servidor.
- Rotación y gestión de logs.
- Políticas de backup:
	- Full
	- Incremental
	- Diferencial
- Estrategias de recuperación ante desastres (DRP).


## Modelos de Bases de Datos Relacionales — Conceptos Faltantes

### Modelos Adicionales
- **Modelo Entidad–Relación (ER):**  
	- Propuesto por Peter Chen (1976).  
	- Representa entidades, atributos y relaciones.  
	- Base para diseñar el modelo conceptual antes de traducirlo al modelo relacional.  
	- Incluye cardinalidades, claves candidatas y dependencias entre entidades.

- **Modelo Relacional Extendido (E-R Extendido / EER):**  
	- Añade abstracciones avanzadas: *herencia*, *especialización*, *generalización*, *agregación*.  
	- Útil para sistemas complejos o con jerarquías de objetos.

- **Modelo Orientado a Objetos:**  
	- Integra conceptos de programación orientada a objetos en la base de datos.  
	- Soporta clases, objetos, métodos, encapsulación y herencia.  
	- Útil cuando los datos tienen estructuras anidadas o comportamiento asociado.

- **Modelo Objeto–Relacional:**  
	- Híbrido entre relacional y orientado a objetos.  
	- Admite tipos de datos personalizados, arrays, JSON, estructuras y funciones complejas.  
	- Usado en PostgreSQL, Oracle y otros sistemas modernos.

- **Modelo Documental (baseline para comparación):**  
	- Organiza la información en documentos semiestructurados (JSON, BSON).  
	- Hace parte de los modelos NoSQL, pero es importante para completar el panorama.  
	- Útil para datos flexibles y jerárquicos sin esquema rígido.

---

### Conceptos Clave Faltantes

#### 1. Dependencias y Normalización (extensión)
- **Dependencias funcionales:**  
	Indican cómo ciertos atributos determinan otros. Son la base de la normalización.
- **Formas normales adicionales:**  
	- 2NF → elimina dependencias parciales.  
	- 3NF → elimina dependencias transitivas.  
	- BCNF → más estricta, elimina anomalías avanzadas.  
	- 4NF y 5NF → tratan dependencias multivaluadas y de unión.

#### 2. Integridad en el Modelo Relacional
- **Integridad de dominio:**  
	Los valores deben pertenecer al tipo de dato correcto.
- **Integridad de entidad:**  
	La clave primaria no puede ser nula.
- **Integridad referencial (extensión):**  
	Reglas de propagación:  
	- *Cascade*, *Set Null*, *Set Default*, *Restrict*.

#### 3. Operaciones Relacionales
- **Álgebra Relacional:**  
	- Selección (σ), proyección (π), uniones, intersecciones, producto cartesiano, joins.  
	- Base teórica del SQL.
- **Cálculo Relacional (tuplas y dominios):**  
	- Enfoque declarativo que inspiró el diseño del lenguaje SQL.

#### 4. Optimización de Consultas
- **Planificación y ejecución:**  
	- Árboles de consulta, reordenamiento de joins, selección de índices.  
- **Índices avanzados:**  
	- *B-Tree*, *Hash*, *GiST*, *GIN*, *R-Tree*.

#### 5. Concurrencia y Transacciones (extendido)
- **Aislamiento:**  
	Niveles: *Read Uncommitted, Read Committed, Repeatable Read, Serializable*.  
- **Problemas comunes:**  
	Dirty reads, phantom reads, non-repeatable reads.  
- **Control de concurrencia:**  
	Bloqueos (locks), timestamping, MVCC (versión usada por PostgreSQL).

#### 6. Arquitecturas de Bases de Datos
- **Monolítica:** instancia única, centralizada.  
- **Replicada:** lectura distribuida, copia de datos sincronizada.  
- **Sharding:** división horizontal en múltiples nodos.  
- **Distribuida:** nodos independientes que comparten lógica y reglas de consistencia.

#### 7. Extensiones Modernas Relacionadas
- **SQL sobre estructuras semiestructuradas:** JSON, XML y arrays.  
- **Funciones definidas por el usuario y triggers.**  
- **Materialized Views:** precálculo de resultados para optimizaciones.

---

### Diseño Conceptual Avanzado (faltante)
- **Cardinalidad exacta vs mínima/máxima.**  
- **Atributos derivados.**  
- **Relaciones recursivas.**  
- **Atributos multivaluados y compuestos.**

---

### Teoría de Conjuntos aplicada a lo Relacional
- El modelo relacional se fundamenta en operaciones de conjuntos.  
- Implicación:  
	- No hay orden inherente en filas o columnas.  
	- Las operaciones son cerradas y producen siempre nuevas relaciones.

---

### SQL y sus Extensiones (faltante)
- **DDL:** Create, Alter, Drop.  
- **DML:** Insert, Update, Delete, Select.  
- **DCL:** Grant, Revoke.  
- **TCL:** Commit, Rollback, Savepoint.  
- Extensiones modernas: ventanas, CTEs, recursion, funciones agregadas avanzadas.

---

### Seguridad y Control de Acceso
- **Roles, permisos y políticas de acceso a filas (RLS).**  
- **Encriptación en reposo y en tránsito.**  
- **Auditoría y trazabilidad.**

---

### Casos de Uso según el Modelo
- **Jerárquico:** archivos de sistemas, catálogos de hardware.  
- **Red:** logística compleja, redes industriales.  
- **Relacional:** sistemas empresariales, transaccionales, integridad estricta.  
- **Objeto–Relacional:** análisis, GIS, sistemas híbridos.  
- **Documental:** aplicaciones flexibles o con requisitos cambiantes.

## Conceptos Avanzados y Faltantes de Modelos de Bases de Datos Relacionales

### Teoría y Fundamentos Matemáticos Avanzados
- **Dependencias de Join:**  
	Explican cómo una relación puede descomponerse en varias y reconstruirse sin pérdida. Fundamentales para la 5NF.
- **Dependencias Multivaluadas (MVDs):**  
	Relacionadas con 4NF. Se dan cuando un atributo depende de una clave, pero independientemente de otros atributos.
- **Reglas de Codd (12 reglas):**  
	Conjunto de criterios para que una base de datos sea “verdaderamente relacional”.  
	Incluyen independencia física, lógica, representación uniforme y manejo consistente de nulls.

---

### Diseño Lógico Avanzado
- **Tablas desnormalizadas estratégicamente:**  
	Se emplean para mejorar rendimiento en sistemas OLAP o de reportes.
- **Subtipos y supertipos en modelos complejos:**  
	Representación lógica de jerarquías que provienen del diseño conceptual EER.
- **Esquemas en estrella y en copo de nieve:**  
	Útiles para bodegas de datos y análisis multidimensional.

---

### Modelos y Paradigmas de Almacenamiento Relacional Moderno
- **OLTP vs OLAP:**  
	Sistemas transaccionales vs analíticos. Diferencias en índices, particiones, concurrencia y normalización.
- **Columnar vs row-oriented:**  
	Los sistemas relacionales modernos combinan almacenamiento por filas (OLTP) y por columnas (OLAP).  
	Ejemplos: PostgreSQL + extensiones columnar, DuckDB.
- **In-Memory Databases:**  
	Almacenan datos en RAM para velocidad extrema.  
	Requieren control de persistencia mediante logs y snapshots.

---

### Particionamiento Avanzado
- **Particionamiento horizontal:** divide filas.  
- **Particionamiento vertical:** divide columnas.  
- **Subparticionamiento:** combinación de ambos.  
- **Rangos, listas y hash:** métodos para seleccionar particiones.  
- Beneficios: aislamiento de cargas, paralelización y optimización física.

---

### Motores Internos y Ejecución
- **Optimización basada en costos:**  
	El optimizador predice el plan más barato en disco, CPU y memoria.  
	Usa estadísticas, histogramas, correlaciones y cardinalidad estimada.
- **Ejecución vectorizada:**  
	Procesa lotes de datos a la vez, usado en sistemas analíticos modernos.
- **JIT Compilation:**  
	Algunos sistemas generan código nativo en tiempo real para ejecutar consultas.

---

### Tipos de Joins que faltaban
- **Semi-Join:** devuelve filas de A que tienen correspondencia en B, sin incluir los datos de B.  
- **Anti-Join:** devuelve filas de A que *no* tienen correspondencia en B.  
- **Lateral Join:** permite acceder a resultados fila por fila para generar nuevas filas dinámicamente.  
	Usado para JSON, arrays y funciones complejas.

---

### Carga de Trabajo y Rendimiento
- **Caching de páginas y buffers:**  
	Controla acceso a disco, crucial en rendimiento relacional.
- **Write-Ahead Logging (WAL):**  
	Registra cambios antes de escribirlos físicamente, garantizando durabilidad.
- **Vacuum / Garbage Collection:**  
	Importante en MVCC para limpiar versiones antiguas.

---

### Consistencia y Distribución Avanzada
- **CAP aplicado al mundo relacional:**  
	Los sistemas relacionales distribuidos tienden hacia CA o CP, no AP.  
- **Consistencia estricta vs eventual:**  
	En sistemas relacionales distribuidos se aplican técnicas como 2PC o consenso.
- **Protocolos de consenso (Raft/Paxos):**  
	Aseguran integridad de réplicas y tolerancia a fallos.

---

### Datos Semi-Estructurados y Híbridos
(Importante porque el modelo relacional moderno ya no es solo tablas)

- **JSON y JSONB:** tratamiento nativo, índices sobre campos internos.  
- **XML:** tipos y consultas vía XPath/XQuery.  
- **Arrays y tipos compuestos:** forman parte del modelo objeto-relacional avanzado.  
- **Tablas con columnas dinámicas / sparse:** optimizadas para nulls masivos.

---

### Herramientas y Ecosistema Profesional
- **Diagramas ER/EER avanzados:**  
	Herramientas: Draw.io, DBML, ERDCloud, DBeaver, pgModeler.
- **Migraciones:**  
	Flujos de versionado del esquema (Flyway, Liquibase).  
- **Pruebas de BD:**  
	Fixtures, entornos aislados, pruebas de integridad y regresión.

---

### Perspectivas y Tendencias Modernas
- **HTAP (Hybrid Transactional/Analytical Processing):**  
	Motores que combinan OLTP y OLAP en una sola arquitectura moderna.  
	Ejemplos: SingleStore, PostgreSQL con extensiones.
- **Federación de datos:**  
	Consultas SQL que integran múltiples fuentes heterogéneas (relacionales + NoSQL).
- **DBaaS y autoscaling:**  
	Servicios administrados que ajustan particiones, réplicas e índices automáticamente.

---

### Conceptos que cierran el marco teórico
- **Independencia lógica y física:**  
	El modelo relacional protege al usuario de cómo se almacenan físicamente los datos.
- **Idempotencia y determinismo:**  
	Fundamentales para consultas repetibles y reproducibilidad.
- **Modelo ACID extendido:**  
	Nuevos mecanismos como *atomicidad por grupos*, *transacciones distribuidas* y *transacciones lógicas*.



# curso DB Fundamentos old
- Introducción
- **Ventajas**:
	- Son mucho más rápidas de actualizar y consultar
	- Almacenar y acceder a grandes volúmenes de datos
	- Fácil acceso desde un sistema informático, dispositivo
	- Trabajo simultáneo por varios usuarios
	- Seguridad: restricción de usos
- **Control de redundancia:**
	- evitar duplicidad. EX: Id del producto unico
	- Pregunta →DB →Respuestas
- **Etapas de desarrollo**
	- Obtención y análisis de requerimientos
	- Diseño del sistema
	- Desarrollo e implementación del sistema
	- iPruebas y mantenimiento!
	- Diseño de la BD - Etapa de diseño del sistema
- **Tipos de DBs**
	- **Dinamicas:**
		- Pueden actualizarse, son mas frecuentes,cambios de registros
		- Ex:registro de productos de una tienda por ejemplo descripcion o precio
- **Estaticas:** 
	- Solo lectura, Almacenan info, consulta info
	- Ex: movimiento de cuenta bancaria
- **Clasificación por Teorema de CAP**
	- BDs Distribuidas en nodos
	- Consistencia - datos deben coincidir en todos los nodos
	- Disponibilidad / availability -seguir consultando/almacenando aunq no este el nodo disponible
	- Tolerancia a particiones - informacion entre nodos ninguno la tiene toda
- **BD Relacional**
- **BD No Relacional**
- *EX: Mongo DB*
- **Otras BD No Relacionales**
- *EX: Casandra*
- **BDs Relacionales**
	- plan preciso de desarrollo
	- consistencia de datos importante
	- años en el mercado
	- estables y documentadas
- **BDs No Relacionales**
	- sistema distribuido
	- grandes cantidades de datos
	- estructuras de datos variables
	- Big data
- **Sistema gestor de DBs**
	- Herramientas para consultas y edicion de datos
	- Interfaz grafica
	- Mantener la integridad de los datos y la concurrencia
	- Control de acceso a usuarios
	- Sistemas para cada área
- **DBs Relaccionales Modelos**
	- Modelos de Dbs 
	- forma, estructura y operaciones
	- Niveles de  abstracción
	- **Conceptual**
	- Fácil de entender, sin aspectos técnicos, representación general, terminología sencilla
	- **Lógico** 
	- Estructuras de datos, tipo de info, deriva del nivel lógico
	- **Físico**
	- Viene del modelo lógico, como se guardaran los datos, se considera el SGBD y se basa en el modelo lógico
- **Modelos**
	- **Jerárquico**
		- sinpadre: raiz - sinhijos: hoja (datos:arbol al reves)
		- Grandes vol de datos, estructuras estables , gran rendimiento
		- no garantiza redundancia de datos ni registros duplicados
	- **Red**
		- un nodo puede tener varios padres
		- Evolución del jerárquico, soluciona redundancia
		- entidades representadas en forma  de nodo y las relaciones entre entidades por medio de arcos o lineas, representación completa es un grafo
	- **Transaccional**
		- envió y recepción de datos a grandes velocidades, poco comunes, alta velocidad, redundancia y duplicación no es problema,permiten conectividad a bases de datos relaccionales
		- Transferencia entre cuentas bancarias
		- dos operaciones distinta decrementa el saldo origen y incrementa el saldo destino
		- Si falla se cancela la operación 
	- **Relacional**
		- Mas usado para problemas reales, administrar datos, uso de relaciones en forma de duplas(conjuntos de datos, forma lógica), IBM 1970
- **Modelo relacional**
	- Conceptos principales
		- DB - Tablas - unidad de almacenamiento principal - todos los datos están en las tablas.
		- Filas y columnas 
		- Registros
	- Otros conceptos
		- Duplicidad de registros
		- Ex: agregar campo matricula, id unico
		- Identificador :
		- Ex: id_estudiante puede ser autoincrementable
	- Claves:
		- identificar registros, evitan duplicación de registros
- **Tipos de claves:**
	- Primarias
		- identifican como único cada registro en una tabla
		- definen datos como únicos incluso cuando son coincidentes
	- Secundarias o foráneas
		- Proceden de otra tabla en la DB
		- Establecen relaciones entre dos tablas agregando la llave primaria de una tabla en la otra tabla, duplicamos el valor para establecer una referencia
	- Se recomienda agregar id aunque haya un campo identificatorio único permite mas control y es útil para la eficiencia de las querys
- **Relaciones en una DB**
	- EX: plataforma educativa - tablas: estudiante profesor y curso
	- Cómo establecer relaciones
		- Conocer el caso
		- un profesor imparte n cursos
		- id profesor debe ser unico en la tabla curso? 
		- No, estaríamos indicando un profesor solo puede dar un curso seria llave foranea, indicando que no esta restringido a ser unico
		- tabla curso:
		- Tipos de relaciones:
	- **Resumen**
		- DB relaccional conjunto de relaciones o tablas
		- atributo de relacion: dominio
		- atributo parcular o atributos como llave primaria - sepuede referenciar en otras como foreing key
		- fila - datos especifico para una instancia especifica de la entidad
	- Proporciona herramientas para garantizar que no se dupliquen registros.
	- Favorece la normalización por ser más comprensible y aplicable.
	- Garantiza la integridad referencial: al eliminar un registro elimina todos los registros relacionados dependientes.
	- **Desventajas**
		- No son adecuadas o presentan deficiencias al trabajar con datos gráficos, multimedia, o sistemas de información geográfica.
		- No permite manipular de forma eficiente los bloques de texto como tipo de dato.
- **Diseño y modelado**
	- Primeros pasos
		- Evitar datos redundantes
		- Errores en producción
		- Maximizar rendimiento
		- Cambios en el diseño posteriores
	1. Analisis de reequisitos
	2. Diseño Conceptual
	3. Eleccion de SGBD
	4. Diseño logico
	5. Diseño fisico
	6. Uso y mantenimiento
	- **Planificacion inicial**
		- Objetivo de la base de datos
		- Acciones que realizará la base de datos
		- Sistema al que estará enlazada
		- Cantidad de usuarios promedio
		- ¿Existe material anterior?
	- Recoleccion de información, decisiones de diseño
- **Diseño conceptual**
	- definir las entidades y relacciones de forma abstracta
	- diagrama entidad relación
	- EX: Plataforma educativa
	- tipo de soporte: web
- **Etapa del diseño lógico**
	- sistema gestor
	- diseño lógico - estructura de entidades y relaciones - Modelo entidad relacion
	- Modelo logico - contiene tablas: atributos y tipo de datos relacciones o tipo de relacion entre tablas 
	- pasar al logico para cada entidad - una relacion con mismo nombre y conjunto de atributos
	- agregamos atributo con su tipo de dato en cada entidad, y unimos las tablas
- Diseño fisico
	- Esquema fisico de la db basado en el modelo de datos del SGBD
	- definicion de  tablas y sus campos
	- imposicion de restricciones de integridad
	- definicion de indices
	- Modelo fisico de datos
	- Consideraciones:
- **Indices:** 
	- Acceso eficaz a los datos, secuencias de registros con dos campos : el valor de la Key y la direccion fisica del registro del archivo de datos donde se pude encontrar una tupla con cierto valor
	- Rendimiento de DB - tiempo de operación, operaciones de lectura y escritura en disco
	- determinar indices - se deben actualizar - menos rendimiento de actualizaciones con mas indices
- **Restricciones de integridad:**
	- mantener consistencia semantica, modificaciones no provoque inconsistencia
- **Tipos** :
	- llaves o claves, primarias(señala un campo como id no repetible ) y foraneas (relaccion entre tablas)
	- Cardinalidad en la relaccion - cantidad de elementos presentes en el origen y destino de la relacion EX: estudiante se inscribe a uno o mas cursos
	- Restriccion de dominiso - dominio de valores posibles por cada atributo
- Integridad referencial 
	- al traducir un tipo de relacion en cualquier instancia se debe cumplir que los valores de los atributos que hereda de una entidad deben aparecer previamente en el conjunto de entidades
	- Se pueden aplicar estas restriciones desde el modelo de datos fisicos- llaves o cardinalidades de las relacciones 
	- Restricciones de dominisos se aplican cuando se estan creando las entidades en el sistema gestor
	- ENTERPRISE ARCHITEC plataforma de modelado
	- Diagrama fisico:
		- se incluyen tablas atributos , tipo de dato, llaves PK y FK indices, relaciones y cardinalidad de cada relacion



# ------ Condensado
# Fundamentos de Bases de Datos

## **1. Introducción**

* Las bases de datos permiten almacenar, consultar y actualizar información de manera eficiente.
* Habilitan el trabajo simultáneo de múltiples usuarios manteniendo seguridad y control de accesos.
* Reducen redundancia y preservan integridad de los datos.

---

## **2. Ventajas Generales**

* Actualización y consulta rápida de información.
* Manejo de grandes volúmenes de datos.
* Acceso multiplataforma desde distintos sistemas.
* Seguridad mediante restricciones y permisos.

---

## **3. Control de Redundancia**

* Evita duplicidad de información (ej.: id de producto único).
* Flujo básico: **Pregunta → Base de Datos → Respuesta**.

---

## **4. Etapas del Desarrollo de una BD**

1. Obtención y análisis de requisitos.
2. Diseño del sistema.
3. Desarrollo e implementación.
4. Pruebas y mantenimiento.
5. Diseño específico de la BD dentro del diseño del sistema.

---

## **5. Tipos de Bases de Datos**

### **5.1 Dinámicas**

* Se actualizan frecuentemente.
  Ej.: registro de productos con cambios en precio o descripción.

### **5.2 Estáticas**

* De solo lectura. Cambian rara vez.
  Ej.: movimientos históricos de cuentas bancarias.

### **5.3 Según el Teorema CAP**

* Distribuidas entre varios nodos.
* **Consistencia:** datos iguales en todos los nodos.
* **Disponibilidad:** sistema operativo aunque fallen algunos nodos.
* **Tolerancia a particiones:** cada nodo tiene parte de la información.

### **5.4 Relacionales**

* Basadas en tablas y relaciones.
* Alta consistencia y documentación.
* Muy utilizadas en sistemas críticos y estables.

### **5.5 No Relacionales**

* Sistemas distribuidos y flexibles.
* Orientadas a Big Data, datos no estructurados o cambiantes.
* Ejemplos:

  * **MongoDB:** documentos JSON.
  * **Cassandra:** orientada a columnas, excelente escritura masiva y disponibilidad; consistencia eventual.

---

## **6. Sistema Gestor de Bases de Datos (SGBD)**

* Herramientas para consultar/editar datos.
* Interfaz gráfica y herramientas administrativas.
* Mantienen integridad, concurrencia y seguridad.
* Controles de acceso de usuarios.
* Pueden ser específicos por industria.

---

## **7. Modelos de Bases de Datos Relacionales**

### **7.1 Niveles de Abstracción**

* **Conceptual:** descripción general de datos y relaciones.
* **Lógico:** estructura detallada (tablas, atributos, relaciones).
* **Físico:** cómo se almacena realmente (índices, tipos, restricciones).

### **7.2 Modelos Clásicos**

* **Jerárquico:** árbol invertido; rápido pero propenso a duplicidad.
* **Red:** múltiples padres; reduce redundancia.
* **Transaccional:** muy rápido; permite duplicación.
* **Relacional:** tablas + relaciones; estándar desde 1970.

---

## **8. Modelo Relacional**

### **8.1 Conceptos Principales**

* BD → tablas → filas/columnas → registros.
* Las claves identifican y relacionan registros.

### **8.2 Tipos de Claves**

* **Primaria (PK):** identifica un registro de manera única.
* **Foránea (FK):** referencia a registros de otra tabla.
* **Única (UNIQUE):** evita duplicados sin ser PK.

### **8.3 Relaciones**

* **1:1** – un elemento corresponde solo a otro.
* **1:N** – relación más común.
* **M:N** – necesita tabla intermedia.

**Ejemplo educativo:**
Profesor → imparte varios cursos (1:N), por lo tanto su id no debe ser único en la tabla curso, sino una FK.

---

## **9. Diseño y Modelado de Bases de Datos**

### **9.1 Primeros Pasos**

* Evitar redundancia.
* Minimizar errores en producción.
* Mejorar rendimiento general.
* Prever cambios futuros.

### **9.2 Planificación Inicial**

* Objetivos de la BD.
* Acciones/opciones del sistema.
* Cantidad de usuarios.
* Material existente y requisitos.

### **9.3 Diseño Conceptual**

* Entidades, atributos y relaciones.
* Diagramas ER.
* Identificar:

  * atributos compuestos,
  * multivaluados,
  * entidades débiles.
* Notaciones: Chen, Crow’s Foot.

### **9.4 Diseño Lógico**

* Derivado del modelo ER.
* Definir tablas, atributos, tipos y relaciones.
* Aplicación de la normalización:

  * 1FN, 2FN, 3FN, BCNF.
* Definición de vistas.

### **9.5 Diseño Físico**

* Ajustado al SGBD específico.
* Tablas, índices, PK, FK, restricciones.
* Elección del motor (InnoDB, MyISAM).
* Particiones, tablespaces.
* Parametrización de rendimiento (buffer pool, logging, checkpointing).

---

## **10. Índices**

* Mejoran lectura.
* Se componen de valor de clave + referencia física.
* Afectan rendimiento de escritura.
* Demasiados índices → lentitud en actualizaciones.

---

## **11. Restricciones de Integridad**

### **11.1 Tipos**

* **PK:** valores únicos y no nulos.
* **FK:** garantizan relaciones válidas.
* **Dominio:** valores permitidos para un atributo.
* **Cardinalidad:** número permitido en relaciones.
* **UNIQUE:** evita duplicados.
* **CHECK:** valida rangos o formatos.
* **NOT NULL:** evita datos incompletos.
* **Restricciones de negocio:** reglas del dominio.

---

## **12. Integridad Referencial**

* Requiere que valores heredados existan antes de insertar o actualizar.
* Se implementa con PK, FK, cardinalidades y reglas como:

  * `ON DELETE CASCADE`
  * `ON DELETE SET NULL`
  * `ON UPDATE CASCADE`
  * `ON UPDATE SET NULL`

**Cuándo NO usar CASCADE:**

* Auditorías, registros históricos, trazabilidad.

---

## **13. Diagrama Físico**

Incluye:

* Tablas, atributos, tipos.
* PK, FK, restricciones.
* Índices compuestos.
* Relaciones y cardinalidad.
* Estrategias de normalización/desnormalización.
* Reglas de actualización/eliminación.

---

## **14. Errores y Riesgos Comunes**

* Subnormalización → duplicación excesiva.
* Sobrenormalización → demasiadas tablas, consultas lentas.
* ÍNDICES mal diseñados.
* Cardinalidades incorrectas.
* Tipos de datos inadecuados.

---

## **15. Implementación**

* Versionado del esquema mediante migraciones:

  * Flyway, Liquibase.
* Pruebas:

  * Carga.
  * Concurrencia.
  * Integridad.

---

## **16. Uso y Mantenimiento**

* Optimización mediante `EXPLAIN`.
* Monitoreo del servidor.
* Gestión de logs.
* Políticas de backup:

* Full, incremental, diferencial.
* Plan de recuperación ante desastres (DRP).


# Modelos de Bases de Datos Relacionales — Nota Avanzada Completa

## **1. Panorama General de Modelos de Datos**

Los modelos de bases de datos representan cómo se organiza, describe y manipula la información. El modelo relacional es el estándar dominante, pero convive con extensiones y alternativas que amplían su alcance.

### **1.1 Modelos Fundamentales**

* **Modelo Entidad–Relación (ER)** — Peter Chen (1976)

  * Representa entidades, atributos y relaciones.
  * Base del diseño conceptual antes de su traducción al modelo relacional.
  * Incluye cardinalidades, claves candidatas y dependencias.

* **Modelo Relacional (Codd, 1970)**

  * Usa tablas (relaciones) para representar conjuntos de datos.
  * Se fundamenta en la teoría de conjuntos y en el álgebra relacional.

### **1.2 Modelos Extendidos**

* **Modelo EER (Entidad–Relación Extendido)**

  * Añade: herencia, especialización, generalización, agregación.
  * Esencial para dominios complejos con jerarquías.

* **Modelo Orientado a Objetos**

  * Integra clases, objetos, métodos, encapsulación y herencia.
  * Adecuado para estructuras anidadas y comportamientos asociados.

* **Modelo Objeto–Relacional**

  * Híbrido relacional + orientado a objetos.
  * Permite tipos personalizados, arrays, JSON, funciones complejas.
  * Implementado principalmente en PostgreSQL y Oracle.

* **Modelo Documental (referencia NoSQL)**

  * Documentos semiestructurados (JSON/BSON).
  * Flexible, sin esquema rígido.

---

## **2. Fundamentos Teóricos Avanzados**

### **2.1 Teoría de Conjuntos**

* Las tablas representan **relaciones** matemáticas.
* Propiedades derivadas:

  * Las filas no tienen orden inherente.
  * Las columnas pertenecen a un dominio.
  * Las operaciones generan nuevas relaciones (clausura).

### **2.2 Dependencias y Normalización**

* **Dependencias funcionales:** determinan la normalización.
* **Formas Normales:**

  * 1NF → dominio atómico.
  * 2NF → sin dependencias parciales.
  * 3NF → sin dependencias transitivas.
  * **BCNF** → versión más estricta de 3NF.
  * **4NF** → elimina dependencias multivaluadas.
  * **5NF** → basada en dependencias de join.

### **2.3 Reglas de Codd**

* 12 reglas que definen cuándo un sistema es realmente relacional:
  Independencia lógica y física, representación uniforme, manejo consistente de nulls, vistas actualizables, etc.

---

## **3. Integridad y Restricciones**

### **3.1 Tipos de Integridad**

* **Dominio**: valores correctos según tipo de dato.
* **Entidad**: PK no puede ser nula.
* **Referencial**: relaciones válidas entre tablas.

### **3.2 Restricciones Avanzadas**

* **UNIQUE**, **NOT NULL**, **CHECK**, restricciones de negocio.
* **Reglas de propagación:**

  * `CASCADE`, `SET NULL`, `SET DEFAULT`, `RESTRICT`.

### **3.3 Integridad Referencial Avanzada**

* Aplicación en sistemas complejos.
* Consideraciones al evitar cascadas en auditorías o historiales.

---

## **4. Modelo Relacional — Operaciones, SQL y Manipulación**

### **4.1 Álgebra Relacional**

* Operaciones fundamentales: selección, proyección, unión, intersección, diferencia, producto cartesiano, joins.
* Base formal de SQL.

### **4.2 Cálculo Relacional**

* Basado en tuplas o dominios.
* Inspiración directa del SQL declarativo.

### **4.3 SQL**

* **DDL:** Create, Alter, Drop.
* **DML:** Select, Insert, Update, Delete.
* **DCL:** Grant, Revoke.
* **TCL:** Commit, Rollback, Savepoint.
* **Extensiones modernas:**

  * CTEs, recursión, funciones ventana, JSON, XML, arrays, lateral joins.

### **4.4 Tipos de Joins Avanzados**

* Semi-Join
* Anti-Join
* Lateral Join
* Natural Join (usado con moderación)

---

## **5. Concurrencia, Transacciones y Aislamiento**

### **5.1 Modelo ACID Extendido**

* Atomicidad, consistencia, aislamiento, durabilidad.
* Control de transacciones distribuidas: 2PC, 3PC.

### **5.2 Aislamiento (niveles)**

* Read Uncommitted
* Read Committed
* Repeatable Read
* Serializable

### **5.3 Anomalías**

* Dirty Reads
* Non-Repeatable Reads
* Phantom Reads

### **5.4 Técnicas de Concurrencia**

* Locks, timestamping, **MVCC** (PostgreSQL), control optimista/pesimista.

---

## **6. Arquitecturas y Almacenamiento**

### **6.1 Arquitecturas Generales**

* **Monolítica**
* **Replicada**
* **Sharding**
* **Distribuida**

### **6.2 OLTP vs OLAP**

* OLTP: transaccional, bajo tiempo de respuesta.
* OLAP: analítico, grandes agregaciones.
* Esquemas estrella y copo de nieve para bodegas de datos.

### **6.3 Almacenamiento Moderno**

* **Row-oriented** vs **Columnar**
* Bases de datos **in-memory**
* Motores híbridos y HTAP (SingleStore, extensiones en PostgreSQL)

---

## **7. Particionamiento y Rendimiento Físico**

### **7.1 Particionamiento**

* Horizontal, vertical, subparticionamiento.
* Partición por rangos, listas o hash.

### **7.2 Optimización Interna**

* Write-Ahead Logging (WAL)
* Caches de páginas y buffer pool
* Garbage collection / Vacuum

### **7.3 Motores y Ejecución**

* Optimización basada en costos.
* Estadísticas, histogramas, estimación de cardinalidad.
* Ejecución vectorizada.
* JIT compilation en motores modernos.

---

## **8. Modelado Conceptual, Lógico y Físico (Avanzado)**

### **8.1 Diseño Conceptual Avanzado**

* Cardinalidad mínima/máxima.
* Atributos derivados.
* Relaciones recursivas.
* Entidades débiles/superfuertes.

### **8.2 Diseño Lógico Avanzado**

* Herencia lógica (supertipo/subtipo).
* Desnormalización estratégica para OLAP.
* Tipos compuestos y arrays.
* Vistas materializadas.

### **8.3 Diseño Físico Avanzado**

* Índices avanzados: B-Tree, Hash, GiST, GIN, R-Tree.
* Tablespaces, particiones, configuración de motor.
* Ajustes de rendimiento: buffer pools, logging, paralelismo.

---

## **9. Datos Semi-Estructurados y Modelos Híbridos**

* JSON y JSONB con índices GIN/GiST.
* XML, XPath/XQuery.
* Tipos compuestos y columnas sparse.
* Integración relacional + documental + analítica.

---

## **10. Seguridad, Auditoría y Gobernanza**

* Roles y permisos, políticas RLS (Row Level Security).
* Encriptación en tránsito (TLS) y en reposo.
* Auditoría, trazabilidad y control de cambios.
* Máscaras de datos, políticas de cumplimiento (GDPR, PCI, etc.).

---

## **11. Herramientas y Ecosistema**

* Modelado: DBML, ERDCloud, DBeaver, pgModeler, Draw.io.
* Migraciones: Flyway, Liquibase.
* Testing: entornos aislados, ejecución determinista.
* Monitoreo: métricas de queries, EXPLAIN, planes reales.

---

## **12. Casos de Uso por Modelo**

* **Jerárquico:** sistemas legacy, catálogos simples.
* **Red:** logística, redes industriales complejas.
* **Relacional:** sistemas empresariales, banca, ERPs, CRMs.
* **Objeto–Relacional:** GIS, analítica, grandes estructuras anidadas.
* **Documental:** aplicaciones con requisitos cambiantes y estructuras flexibles.

---

## **13. Tendencias Modernas**

* HTAP (OLTP + OLAP en un mismo motor).
* DBaaS con autoscaling y autoindexación.
* Motores híbridos relacional/documental.
* Federaciones SQL hacia múltiples fuentes.
* Columnar en PostgreSQL y DuckDB en entornos mixtos.

---

## **14. Conceptos de Cierre**

* Independencia lógica vs física.
* Determinismo e idempotencia en consultas.
* Transacciones lógicas y replicación lógica.
* Papel del consenso en sistemas distribuidos (Raft, Paxos).



# RDBMS — Fundamentos, Arquitectura y Conceptos Clave

## Definición General
Un **RDBMS (Relational Database Management System)** es un sistema de gestión de bases de datos basado en el **modelo relacional** propuesto por Edgar F. Codd. Organiza los datos en **tablas** estructuradas en filas y columnas, mantiene **integridad**, permite **consultas declarativas (SQL)** y garantiza **consistencia transaccional** bajo ACID.

---

## Principios del Modelo Relacional
### Estructura Basada en Tablas
- **Tabla / Relación:** colección de filas (tuplas) con esquema fijo.
- **Fila / Tupla:** instancia de datos con un valor por columna.
- **Columna / Atributo:** elemento indivisible que representa una propiedad.

### Claves
- **Clave primaria (PK):** identifica de forma única a cada registro.
- **Clave ajena (FK):** mantiene referencia a registros de otras tablas.
- **Claves candidatas:** posibles claves primarias antes de elegir una.

### Integridad
- **Integridad de entidad:** PK no nulas y únicas.
- **Integridad referencial:** FK válidas o nulas según regla.
- **Integridad de dominio:** valores válidos según tipo y restricciones.

---

## Arquitectura de un RDBMS
### Componentes Internos
- **Parser SQL:** transforma declaraciones SQL en un árbol lógico.
- **Optimizador:** genera el plan de ejecución más eficiente.
- **Executor:** ejecuta el plan seleccionado.
- **Storage Engine:** gestiona archivos, páginas, índices y concurrencia.
- **Buffer Manager:** regula páginas en memoria RAM.
- **Write-Ahead Log (WAL):** asegura durabilidad y recuperación.

### Procesos del Servidor
- **Conexiones / sesiones:** manejadas mediante hilos o procesos.
- **Plan Cache:** almacena planes reutilizables para mejorar rendimiento.
- **Background workers:** tareas como checkpoints, vacuums, defragmentación.

---

## Lenguaje SQL (vista RDBMS)
### Manipulación
- **DML:** `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
- **DDL:** `CREATE`, `ALTER`, `DROP`.
- **DCL:** gestión de permisos.
- **TCL:** control transaccional (`BEGIN`, `COMMIT`, `ROLLBACK`).

### Operaciones Relacionales
- **Joins:** INNER, LEFT, RIGHT, FULL, CROSS.
- **Set operations:** UNION, INTERSECT, EXCEPT.
- **Agregaciones:** `GROUP BY`, `HAVING`.

---

## Índices y Optimización
### Tipos Comunes
- **B-Tree:** índice general para búsquedas, rangos y ordenación.
- **Hash:** acceso muy rápido por igualdad.
- **Bitmap:** útil en columnas con baja cardinalidad.
- **Índices compuestos:** múltiples columnas en un mismo índice.
- **Índices únicos:** refuerzan integridad de datos.

### Consideraciones de Rendimiento
- Elegir columna adecuada para clave primaria.
- Evitar sobreindexar (impacto en escritura).
- Mantener estadísticas actualizadas.
- Evitar funciones sobre columnas indexadas en filtros (`WHERE`).

---

## Transacciones y Concurrencia
### Modelo ACID
- **Atomicidad:** todo o nada.
- **Consistencia:** de un estado válido a otro válido.
- **Aislamiento:** transacciones independientes.
- **Durabilidad:** los datos persisten tras commit.

### Aislamiento
- **Lecturas sucias, no repetibles, phantoms:** anomalías que cada nivel previene.
- **Niveles:** Read Uncommitted, Read Committed, Repeatable Read, Serializable.

### Control de Concurrencia
- **Bloqueos (locking):** compartidos, exclusivos, por fila, por tabla.
- **MVCC:** versiones de filas para lecturas sin bloqueo (PostgreSQL, Oracle).

---

## Diseño de Esquemas
### Normalización
- **1FN a 3FN:** formas normales para eliminar redundancia.
- **BCNF:** forma más estricta cuando la dependencia funcional es compleja.
- **Beneficios:** minimizar duplicación, mejorar integridad.

### Desnormalización (cuando procede)
- Mejor rendimiento en consultas de analítica.
- Reducir joins en sistemas de alta lectura.

---

## Copias de Seguridad y Recuperación
### Técnicas
- **Backups completos, diferenciales e incrementales.**
- **Point-in-Time Recovery (PITR)** mediante WAL.
- **Replicación:** síncrona y asíncrona para alta disponibilidad.

### Alta Disponibilidad
- **Clustering:** varios nodos comparten o replican datos.
- **Failover automático.**
- **Sharding limitado:** no es natural en RDBMS tradicionales.

---

## Casos de Uso del Modelo Relacional
### Dónde Destaca
- Datos **estructurados** y coherentes.
- Fuertes **relaciones** entre entidades.
- **Transacciones financieras** o críticas.
- Sistemas donde **consistencia > disponibilidad** (CA en CAP).
- Aplicaciones OLTP: banca, e-commerce, ERPs.

### Casos Menos Adecuados
- Datos sin esquema fijo o semiestructurados.
- Escalado horizontal extremo.
- Consultas sobre grafos complejos.
- Ingesta masiva con schema evolucionando constantemente.

---

## Limitaciones Naturales
- Escalado horizontal más complejo que en NoSQL.
- Esquemas rígidos.
- Los JOINs pueden ser costosos si el diseño es defectuoso.
- Ajuste y mantenimiento más intensivo en sistemas enormes.

---

## Implementaciones Populares de RDBMS
- **PostgreSQL:** extendido, MVCC puro, gran ecosistema.
- **MySQL / MariaDB:** ampliamente usado, rápido en lectura.
- **SQL Server:** integración con ecosistema Microsoft, herramientas avanzadas.
- **Oracle:** orientado a grandes corporaciones, características enterprise.

