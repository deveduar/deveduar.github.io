---
date: 2024-03-01 16:40
title: Expresiones regulares
modification date: Friday 1st March 2024 16:40:27
keywords:
aliases: []
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Computer Science
tags:
  - JS
  - CS
  - mates
---
# Expresiones regulares

- [Computer Science](/computer%20science/computer-science/)
- [mates](/uncategorized/mates/)

Herramienta útil: [RegEx Tool](https://regexr.com/)

Las **expresiones regulares (RegEx)** permiten buscar, validar, extraer o reemplazar patrones en cadenas de texto mediante reglas definidas. Son ampliamente usadas en validación de datos, limpieza de texto, análisis de logs y parsing de contenido.

---

## Validar una dirección de correo electrónico

### Descripción
Esta RegEx valida si una cadena cumple el formato básico de una dirección de correo electrónico:
- No permite espacios ni múltiples símbolos "@"
- Exige al menos un punto "." después del "@"
- Usa el método `.test()` para devolver `true` o `false`

### Código
{% raw %}
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = "usuario@example.com";
const isValidEmail = emailRegex.test(email);
console.log(isValidEmail); // true
```
{% endraw %}`

### Explicación del patrón

- `^` y `$` → delimitan inicio y fin de la cadena
- `[^\s@]+` → uno o más caracteres que no sean espacio ni "@"
- `@` → símbolo obligatorio
- `\.` → punto obligatorio (escapado)
- `[^\s@]+` → dominio o subdominio final

---

## Reemplazar un patrón de texto en una cadena

### Descripción

Permite reemplazar todas las coincidencias de un patrón usando el método `.replace()` con una función de reemplazo dinámica.  
En este ejemplo, convierte a mayúsculas las palabras "casa" o "calle" encontradas en el texto.

### Código

{% raw %}
```javascript
const text = "La casa está en la calle principal";
const replacedText = text.replace(/casa|calle/g, function(match) {
	return match.toUpperCase();
});
console.log(replacedText); // "La CASA está en la CALLE principal"
```
{% endraw %}

### Explicación del patrón

- `/casa|calle/g` → busca "casa" **o** "calle"
- `|` → operador OR lógico
- `g` → bandera global: reemplaza todas las ocurrencias
- La función recibe cada coincidencia (`match`) y la transforma en mayúsculas

---

## Extraer información de una cadena de texto

### Descripción

Extrae valores específicos mediante **grupos de captura** y el método `.exec()`.  
Se usa cuando queremos obtener múltiples datos dentro de una misma cadena, como medidas, unidades o porcentajes.

### Código

{% raw %}
```javascript
const text = "La temperatura es de 20°C y la humedad es del 75%";
const regex = /(\d+)[°%](C?)/g;
let match = regex.exec(text);
while (match != null) {
	console.log(`${match[1]} grados ${match[2]}`);
	match = regex.exec(text);
}
```
{% endraw %}

### Explicación del patrón

- `(\d+)` → grupo que captura uno o más dígitos (número)
- `[°%]` → coincide con los símbolos "°" o "%"
- `(C?)` → grupo opcional para capturar "C" si está presente
- `g` → bandera global para recorrer todas las coincidencias con `.exec()`

---

## Patrones y usos comunes

### Validaciones

- **Número de teléfono:** `/^\+?\d{1,3}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/`
- **URL básica:** `/https?:\/\/(www\.)?[a-zA-Z0-9\-]+\.[a-z]{2,}(\S*)?/`
- **Contraseña segura:** `/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/`

### Limpieza de texto

- Eliminar espacios duplicados: `/\s{2,}/g`
- Quitar etiquetas HTML: `/\<[^>]*\>/g`

### Extracción de datos

- Números: `/\d+/g`
- Palabras: `/\w+/g`
- Fechas (dd/mm/yyyy): `/\b\d{2}\/\d{2}\/\d{4}\b/`

---

## Buenas prácticas con RegEx

- **Escapa** caracteres especiales (`.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, `|`, `\`, `^`, `$`) cuando deban tratarse literalmente.
- **Prueba interactivamente** tus expresiones en herramientas como [regexr.com](https://regexr.com/).
- **Divide y documenta** las RegEx complejas con comentarios y uso de la bandera `x` (si el lenguaje lo soporta).
- **Evita sobreuso:** algunas tareas (como parsing de HTML o JSON) requieren soluciones estructurales, no RegEx.

---

## Referencias y notas relacionadas

- Validaciones de entrada
- Limpieza de datos
- Extracción de información
- Expresiones regulares avanzadas

# RegEx Avanzado

Complemento de la nota RegEx, centrado en aspectos avanzados, optimización, rendimiento y patrones complejos aplicados en entornos reales.

---

## Caracteres especiales y clases avanzadas

### Clases predefinidas
- `\d` → dígito (equivalente a `[0-9]`)
- `\D` → no dígito
- `\w` → carácter alfanumérico o guion bajo (`[A-Za-z0-9_]`)
- `\W` → carácter no alfanumérico
- `\s` → espacio en blanco (espacio, tabulación, salto de línea)
- `\S` → carácter no blanco

### Conjuntos y rangos personalizados
Permiten definir conjuntos de caracteres válidos:
- `[aeiou]` → cualquier vocal
- `[A-Z]` → letras mayúsculas
- `[^0-9]` → cualquier carácter que **no sea** un dígito

---

## Cuantificadores y control de repetición

- `*` → 0 o más repeticiones  
- `+` → 1 o más repeticiones  
- `?` → 0 o 1 repetición  
- `{n}` → exactamente n repeticiones  
- `{n,}` → al menos n repeticiones  
- `{n,m}` → entre n y m repeticiones  

### Cuantificadores codiciosos y no codiciosos
Por defecto, los cuantificadores son **codiciosos** (*greedy*): capturan la mayor cantidad posible.  
Se puede limitar su comportamiento agregando `?`:

{% raw %}
```javascript
const text = "<p>Uno</p><p>Dos</p>";
console.log(text.match(/<p>.*<\/p>/));   // Greedy → captura todo
console.log(text.match(/<p>.*?<\/p>/g)); // Lazy → captura cada par individual
```
{% endraw %}`

---

## Grupos, referencias y lookarounds

### Grupos de captura y no captura

* `( )` → captura el contenido dentro del grupo
* `(?: )` → agrupa sin capturar (útil en combinaciones complejas)
* `(name)` y `\k<name>` → grupos **nombrados** (en motores modernos)

### Lookaheads y lookbehinds

Permiten validar contexto **sin consumir caracteres**:

* `(?=...)` → *positive lookahead*: debe estar seguido de…
* `(?!...)` → *negative lookahead*: **no** debe estar seguido de…
* `(?<=...)` → *positive lookbehind*: debe estar precedido de…
* `(?<!...)` → *negative lookbehind*: **no** debe estar precedido de…

#### Ejemplo

{% raw %}
```javascript
// Buscar números que están seguidos de una palabra "USD"
const regex = /\d+(?=\sUSD)/g;
console.log("100 USD, 50 EUR".match(regex)); // ["100"]
```
{% endraw %}

---

## Uso en procesamiento de datos y logs

### Extracción de errores en logs

{% raw %}
```javascript
const logs = `
[ERROR] 2025-11-12: Disk full
[INFO] 2025-11-12: Backup started
[ERROR] 2025-11-13: Timeout
`;
const errors = logs.match(/^\[ERROR\].*$/gm);
console.log(errors); 
// ["[ERROR] 2025-11-12: Disk full", "[ERROR] 2025-11-13: Timeout"]
```
{% endraw %}

### Filtrado por fechas y formatos

{% raw %}
```javascript
const text = "Eventos: 2025-11-12, 12/11/2025, 11.11.2025";
const fechas = text.match(/\b\d{2,4}[-\/.]\d{2}[-\/.]\d{2,4}\b/g);
console.log(fechas);
```
{% endraw %}

---

## Optimización y rendimiento

* **Evita backtracking excesivo**: patrones mal diseñados pueden ralentizar enormemente el análisis (catastrophic backtracking).
* **Divide expresiones**: usa varias RegEx simples en lugar de una enorme si el rendimiento importa.
* **Ancla tus patrones** con `^` y `$` para evitar búsquedas innecesarias.
* **Usa test antes de exec** cuando solo necesites verificar existencia.

#### Ejemplo de backtracking costoso

{% raw %}
```javascript
// Evitar esto: demasiadas combinaciones posibles
/(a+)+$/;
```
{% endraw %}

---

## Aplicaciones prácticas comunes

* **Sanitización de entradas:** eliminar etiquetas, espacios o caracteres inseguros.
* **Parsing de archivos:** extraer información estructurada de logs, CSV, JSON plano.
* **Testing automatizado:** validar formatos (emails, contraseñas, tokens).
* **Sistemas ETL y scraping:** identificar patrones repetitivos en grandes volúmenes de datos.

---

## Herramientas y depuración

* Regex101 y Regexr permiten:

  * Explicar visualmente cada parte del patrón.
  * Probar con ejemplos reales.
  * Exportar la RegEx en distintos lenguajes.
* Extensiones útiles:

  * *VSCode RegEx Previewer*
  * *Regex Visualizer (JetBrains)*

---

## Buenas prácticas adicionales

* Documenta cada patrón complejo con comentarios y ejemplos.
* Versiona tus expresiones: cambios pequeños pueden alterar resultados drásticamente.
* Usa `x` (*extended mode*) si el motor lo soporta, para añadir espacios y comentarios dentro de la expresión.
* Evita dependencias del lenguaje: algunas sintaxis varían (por ejemplo, lookbehinds no soportados en versiones antiguas de JavaScript).

---

## Notas relacionadas

* RegEx
* Parsing y análisis de texto
* Validaciones avanzadas
* Optimización de rendimiento


# RegEx en la práctica profesional

Expansión de las notas sobre RegEx y RegEx Avanzado, centrada en **integración práctica**, **entornos de desarrollo**, **mantenimiento** y **casos de uso específicos en sistemas reales**.

---

## Integración en entornos y lenguajes

### En JavaScript
- Métodos más usados:
	- `.test()` → verifica coincidencias (booleano)
	- `.match()` → devuelve coincidencias
	- `.replace()` → reemplaza texto
	- `.split()` → divide texto usando patrones
	- `.exec()` → ejecuta RegEx con grupos de captura

#### Ejemplo de split
{% raw %}
```javascript
const texto = "uno, dos; tres | cuatro";
const partes = texto.split(/[;,|]\s*/);
console.log(partes); // ["uno", "dos", "tres", "cuatro"]
```
{% endraw %}`

### En Python

* Módulo estándar: `re`
* Funciones:

  * `re.search()` → primera coincidencia
  * `re.findall()` → todas las coincidencias
  * `re.sub()` → reemplazo de texto
  * `re.compile()` → compila la RegEx para uso repetido

#### Ejemplo

{% raw %}
```python
import re
pattern = re.compile(r"\d{4}-\d{2}-\d{2}")
fechas = pattern.findall("Fechas: 2025-11-12, 2024-10-10")
print(fechas)  # ['2025-11-12', '2024-10-10']
```
{% endraw %}

### En Bash y grep

* Se usa para filtrado rápido de texto:

  * `grep -E "ERROR|WARN" log.txt` → muestra líneas que contengan ERROR o WARN
  * `sed -E 's/[0-9]+/###/g' archivo.txt` → reemplaza números por ###

---

## RegEx en bases de datos

### SQL

Algunos motores (MySQL, PostgreSQL) soportan expresiones regulares:

{% raw %}
```sql
SELECT email FROM usuarios WHERE email REGEXP '^[^@]+@example\\.com$';
```
{% endraw %}

### PostgreSQL avanzado

{% raw %}
```sql
SELECT regexp_replace(nombre, '\s+', ' ', 'g') FROM clientes;
```
{% endraw %}

Permite limpieza y normalización de texto directamente en consultas.

---

## RegEx y seguridad

Las expresiones regulares pueden generar vulnerabilidades si no se controlan adecuadamente.

### Riesgos

* **ReDoS (Regular Expression Denial of Service):**
  patrones con backtracking excesivo pueden bloquear procesos al analizar entradas maliciosas.
* **Exposición de datos:** si una RegEx captura más información de la esperada (ej. tokens o contraseñas).
* **Validación insuficiente:** confiar únicamente en RegEx sin verificar límites ni contexto.

### Prevención

* Limita la longitud de la cadena de entrada.
* Usa patrones no ambiguos (evita `(.*)` en entornos críticos).
* Prueba RegEx en contextos controlados antes de producción.

---

## RegEx y rendimiento

### Compilación y reutilización

* Reutiliza expresiones compiladas (en Python o Java) para reducir coste de interpretación.
* Evita crear RegEx en bucles intensivos.
* Ancla los patrones (`^` y `$`) siempre que se pueda.

### Benchmarks y profiling

Utiliza herramientas para medir tiempos de ejecución en distintos patrones.
Ejemplo en Node.js:

{% raw %}
```javascript
console.time("regex");
const r = /^[A-Z][a-z]+$/;
for (let i = 0; i < 1000000; i++) r.test("Palabra");
console.timeEnd("regex");
```
{% endraw %}

---

## RegEx y Machine Learning

Aunque las RegEx son estáticas, pueden combinarse con modelos de ML:

* **Preprocesamiento de texto:** limpieza de símbolos, normalización de entidades.
* **Etiquetado de datos:** detección de patrones que sirven como *features* para entrenar modelos NLP.
* **Validación híbrida:** aplicar RegEx tras un modelo para refinar resultados (por ejemplo, filtrar direcciones detectadas por un modelo OCR).

---

## RegEx y analítica de logs

### Ejemplo práctico

Extracción de IPs, fechas y mensajes:

{% raw %}
```javascript
const log = `
192.168.1.1 - [2025-11-12 10:00] "GET /index.html"
10.0.0.5 - [2025-11-12 10:01] "POST /api/login"
`;
const pattern = /(\d{1,3}(?:\.\d{1,3}){3}) - \[(.*?)\] "(.*?)"/g;
let match;
while ((match = pattern.exec(log)) !== null) {
	console.log(`IP: ${match[1]} | Fecha: ${match[2]} | Acción: ${match[3]}`);
}
```
{% endraw %}

### Casos reales

* Detección de errores HTTP.
* Agrupación por IP en logs de acceso.
* Identificación de eventos en sistemas distribuidos.

---

## RegEx y desarrollo web

* Validaciones en formularios HTML5 (`pattern` en inputs).
* Sanitización de entradas de usuario antes del backend.
* Extracción de contenido estructural (ej. etiquetas Markdown, URLs, hashtags).

#### Ejemplo

{% raw %}
```javascript
const markdown = "Visita [OpenAI](https://openai.com)";
const enlaces = [...markdown.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
console.log(enlaces); // [["[OpenAI](https://openai.com)", "OpenAI", "https://openai.com"]]
```
{% endraw %}

---

## RegEx visual y herramientas interactivas

Herramientas recomendadas:

* **Regexr** → explicación visual y prueba interactiva
* **Regex101** → depuración, explicación por motor y generación de código
* **RegEx Pal** → comparación entre versiones o idiomas
* **Debuggex** → visualización tipo diagrama de flujo

Estas plataformas ayudan a **entender, depurar y compartir** expresiones de forma visual y colaborativa.

---

## Extensiones y bibliotecas complementarias

* **XRegExp (JS):** añade soporte extendido (comentarios, nombres, Unicode)
* **re2 (Google):** motor optimizado para evitar ReDoS
* **PyParsing / Lark (Python):** alternativas para parsing estructurado más seguro
* **PCRE2 (C/C++):** base de muchos motores modernos (Perl Compatible RegEx)

---

## Resumen conceptual

| Categoría       | Concepto                 | Ejemplo                                              |            |
| --------------- | ------------------------ | ---------------------------------------------------- | ---------- |
| Búsqueda simple | Coincidencia literal     | `/error/`                                            |            |
| Agrupación      | Grupos de captura        | `/(error                                             | warning)/` |
| Contexto        | Lookahead/behind         | `(?<=#)\w+`                                          |            |
| Validación      | Estructuras complejas    | `/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/` |            |
| Extracción      | Datos de texto           | `/\d+/g`                                             |            |
| Sustitución     | Limpieza y normalización | `.replace(/\s+/g, ' ')`                              |            |

---

## Notas relacionadas

* RegEx
* RegEx Avanzado
* Parsing y análisis de texto
* Validaciones de entrada
* Rendimiento y seguridad en expresiones regulares
* Herramientas y depuración visual

# Fundamentos matemáticos de las expresiones regulares

- [mates](/uncategorized/mates/)
Esta nota amplía el estudio de RegEx desde una perspectiva **teórica y formal**, basada en los fundamentos de la **teoría de lenguajes formales y autómatas finitos**. Explica la base matemática que sustenta las expresiones regulares, sus propiedades, límites y equivalencias con otros modelos computacionales.

---

## 1. Origen teórico

Las expresiones regulares fueron introducidas formalmente por **Stephen Kleene (1956)** dentro de la **teoría de autómatas** y los **lenguajes regulares**, una de las clases más simples dentro de la jerarquía de Chomsky.

Su propósito era describir conjuntos de cadenas (lenguajes) de forma algebraica y precisa.

---

## 2. Lenguajes formales

### Definición
Un **lenguaje formal** es un conjunto de cadenas sobre un alfabeto finito `Σ` (Sigma).  
Ejemplo:
- `Σ = {a, b}`
- `L = {a, ab, bba}`

Una **expresión regular** describe un lenguaje regular, es decir, un conjunto de cadenas que pueden ser generadas o reconocidas por un **autómata finito determinista (DFA)** o **no determinista (NFA)**.

---

## 3. Álgebra regular (Álgebra de Kleene)

El **álgebra regular** define tres operaciones básicas sobre lenguajes:

1. **Unión ( ∪ )**  
	Representa la elección o alternativa (`|` en RegEx).  
	`L₁ ∪ L₂` → el conjunto de cadenas que pertenecen a `L₁` o `L₂`.

2. **Concatenación ( · )**  
	Combina cadenas de dos lenguajes:  
	`L₁ · L₂ = { xy | x ∈ L₁, y ∈ L₂ }`

3. **Clausura de Kleene ( * )**  
	Repite el lenguaje cero o más veces.  
	`L* = { ε, w, ww, www, ... | w ∈ L }`

Donde `ε` es la **cadena vacía**.

Ejemplo formal:
{% raw %}
```

Si L = {ab}
→ L* = {ε, ab, abab, ababab, …}

```
{% endraw %}

---

## 4. Definición formal de una expresión regular

Dada un alfabeto finito `Σ`, el conjunto de expresiones regulares sobre `Σ` se define recursivamente:

1. **Casos base:**
	- `∅` es una RegEx (lenguaje vacío)
	- `ε` es una RegEx (cadena vacía)
	- `a` es una RegEx para cada símbolo `a ∈ Σ`

2. **Reglas de construcción:**
	- Si `r` y `s` son RegEx, entonces:
		- `(r)|(s)` → unión
		- `(r)(s)` → concatenación
		- `(r)*` → clausura de Kleene

3. **Nada más es una RegEx** si no se obtiene aplicando las reglas anteriores.

---

## 5. Autómatas finitos

Toda RegEx puede representarse como un **autómata finito no determinista (NFA)**, y viceversa.  
Un NFA puede transformarse en un **autómata finito determinista (DFA)** equivalente mediante el **algoritmo de subset construction**.

### Propiedades
- **Equivalencia:** RegEx ⇔ NFA ⇔ DFA  
- **Lenguajes regulares**: reconocibles por autómatas finitos  
- **Cierre:** cerrados bajo unión, concatenación y clausura de Kleene

#### Ejemplo visual
{% raw %}
```

Expresión: (a|b)*abb
→ acepta cualquier cadena que termine en "abb"

```
{% endraw %}

Representa el conjunto de todas las cadenas sobre {a,b} que finalizan en "abb".

---

## 6. Propiedades de los lenguajes regulares

1. **Cierre**
	Los lenguajes regulares son cerrados bajo:
	- Unión ( ∪ )
	- Intersección ( ∩ )
	- Complemento ( ¬ )
	- Concatenación ( · )
	- Clausura de Kleene ( * )
	- Diferencia y reverso

2. **Decidibilidad**
	Todas las siguientes operaciones son **decidibles**:
	- Pertenencia: ¿`w ∈ L`?
	- Vacuidad: ¿`L = ∅`?
	- Finitud: ¿`L` es finito?
	- Igualdad: ¿`L₁ = L₂`?

3. **Limitaciones**
	No pueden reconocer lenguajes **no regulares**, como:
	- Balanceo de paréntesis: `{ aⁿbⁿ | n ≥ 0 }`
	- Palíndromos
	- Estructuras anidadas (requieren memoria → autómatas con pila)

---

## 7. Expresiones regulares extendidas

En los lenguajes de programación modernos, se añaden operadores que **amplían** el modelo original:
- **`+`** → una o más repeticiones (`r+` ≡ `rr*`)
- **`?`** → opcional (`r?` ≡ `(r|ε)`)
- **`{n,m}`** → repetición acotada
- **Lookahead / Lookbehind** → condiciones de contexto (no formales en álgebra regular)
- **Grupos de captura** → extracción de subcadenas (no teóricos, son extensiones prácticas)

Estas extensiones hacen que las RegEx modernas **superen** el poder expresivo de los lenguajes regulares puros, aunque algunas (como lookbehind) rompen propiedades de cierre y determinismo.

---

## 8. Correspondencias algebraicas útiles

| Operación | Notación matemática | Notación RegEx | Descripción |
|------------|--------------------|----------------|--------------|
| Unión | A ∪ B | A\|B | Elección |
| Concatenación | AB | AB | Secuencia |
| Clausura | A* | A* | Repetición 0+ |
| Clausura positiva | A⁺ | A+ | Repetición 1+ |
| Opcional | A ∪ ε | A? | 0 o 1 vez |

---

## 9. Teoremas fundamentales

### Teorema de equivalencia
> Para todo lenguaje regular L, existe una RegEx que lo genera, y un autómata finito que lo reconoce.

### Teorema de Kleene
> Los conjuntos de lenguajes generados por expresiones regulares son exactamente los lenguajes reconocidos por autómatas finitos.

### Lema de bombeo (Pumping Lemma)
Proporciona un método para **probar que un lenguaje no es regular**.

Formalmente:
> Si L es regular, existe un entero p ≥ 1 (longitud de bombeo) tal que cualquier cadena `s ∈ L` con `|s| ≥ p` puede descomponerse como `s = xyz` cumpliendo:
> - `|xy| ≤ p`
> - `|y| ≥ 1`
> - `∀i ≥ 0, xyⁱz ∈ L`

---

## 10. Complejidad y límites computacionales

- **Evaluación:** la mayoría de motores modernos usan algoritmos de backtracking → potencialmente exponenciales en tiempo.
- **RegEx lineales:** si se basan en DFA precompilados, su evaluación es O(n).
- **Lenguajes no regulares:** requieren **autómatas con pila** o **gramáticas context-free** (p. ej., JSON, XML).

---

## 11. Aplicaciones teóricas

- **Compiladores:** análisis léxico mediante autómatas y RegEx.
- **Verificación formal:** modelado de secuencias válidas de eventos.
- **Modelos de concurrencia:** comparación de trazas regulares.
- **Criptografía y protocolos:** definición formal de secuencias de bits válidas.

---

## 12. Conclusión

Las expresiones regulares no son solo una herramienta práctica:  
son una **representación algebraica del comportamiento de autómatas finitos**, con propiedades bien definidas, límites claros y extensiones modernas que las hacen más poderosas pero menos formales.

---

## Notas relacionadas
- RegEx
- RegEx Avanzado
- Teoría de autómatas
- Lenguajes formales
- Álgebra de Kleene
- Pumping Lemma

# Aplicaciones y alternativas de las expresiones regulares

Esta nota explora los **principales usos prácticos** de las expresiones regulares en distintos contextos de la informática moderna, así como sus **limitaciones** y las **alternativas más adecuadas** cuando las RegEx no son la mejor herramienta.  

La idea central: **las RegEx son potentes para patrones locales y deterministas, pero ineficientes o inadecuadas para estructuras con dependencias o jerarquías.**

---

## 1. Aplicaciones prácticas

### 1.1 Procesamiento de texto
El uso más común de las RegEx es la manipulación y análisis de texto plano.

- **Búsqueda y reemplazo** en editores, IDEs o scripts.
- **Normalización** de formatos (fechas, números, emails, URLs).
- **Validación sintáctica rápida** (p. ej., verificar un formato de correo o un identificador).
- **Filtrado y extracción de datos** en logs, ficheros CSV o documentos.

Ejemplo:
{% raw %}
```regex
(?<=User: )\w+
```
{% endraw %}`

→ extrae el nombre de usuario tras la cadena `"User: "` en un log.

---

### 1.2 Programación y scripting

Integradas en múltiples lenguajes:

* Python (`re`), JavaScript (`RegExp`), Perl, Ruby, Java, C#, Go, etc.
* Comandos de shell (`grep`, `sed`, `awk`).
* Automatización de pipelines (ETL, CI/CD).

Uso típico:

{% raw %}
```bash
grep -E "error|fail|critical" logs.txt
```
{% endraw %}

→ filtra solo las líneas relevantes en registros de errores.

---

### 1.3 Análisis de datos

* Limpieza de datos y **transformaciones textuales** en pipelines de ETL.
* Extracción de entidades simples (números, códigos, identificadores).
* Preprocesamiento en **procesamiento de lenguaje natural (NLP)** antes de tokenizar.

Ejemplo: limpiar etiquetas HTML o caracteres especiales.

---

### 1.4 Seguridad y filtrado

* **Firewalls de aplicaciones web (WAF):** detectar patrones de ataque como SQLi o XSS.
* **Sistemas IDS/IPS:** buscar firmas en tráfico de red.
* **Filtrado de correo:** detección de spam mediante patrones textuales.

> ⚠️ Sin embargo, el abuso de RegEx en seguridad puede generar **vulnerabilidades ReDoS** (Regular Expression Denial of Service), si las expresiones no son seguras o deterministas.

---

### 1.5 Compiladores y analizadores léxicos

Las RegEx se usan formalmente para describir los **tokens** del lenguaje fuente:

* Identificadores, números, operadores, delimitadores, etc.
* El analizador léxico convierte expresiones regulares en **autómatas finitos deterministas (DFA)** para reconocerlos eficientemente.

Ejemplo:

{% raw %}
```
IDENTIFICADOR = [a-zA-Z_][a-zA-Z0-9_]*
NUMERO = [0-9]+(\.[0-9]+)?
```
{% endraw %}

---

### 1.6 DevOps, logs y observabilidad

* **Filtrado dinámico de logs**.
* **Parsing** de líneas con patrones estructurados.
* **Alertas automáticas** basadas en coincidencias.
* **Expresiones RegEx en PromQL, ELK, Grafana** para consultas complejas.

---

### 1.7 Testing y validaciones

* Comprobación de rutas, URLs, parámetros y nombres.
* **Asserts RegEx** en pruebas unitarias.
* Verificación de patrones esperados en la salida de comandos o APIs.

---

## 2. Limitaciones y malas prácticas

1. **Escalabilidad:** las RegEx complejas son difíciles de mantener, depurar o leer.
2. **Eficiencia:** las implementaciones basadas en *backtracking* pueden explotar en tiempo exponencial.
3. **Legibilidad:** expresiones extensas se vuelven crípticas e ininteligibles.
4. **Falsos positivos/negativos:** especialmente al validar estructuras complejas (JSON, XML, HTML).
5. **Falta de contexto:** no entienden jerarquías ni dependencias semánticas.

> Ejemplo clásico: intentar validar HTML o XML con RegEx es **un error conceptual**, ya que se requiere un analizador sintáctico jerárquico.

---

## 3. Alternativas y herramientas complementarias

### 3.1 Parsers estructurados

Cuando se necesita **comprensión de jerarquías o dependencias**, se usan herramientas de parsing formal:

* **ANTLR**, **PEG.js**, **Lex/Yacc**, **Bison**

  * Usan **gramáticas libres de contexto (CFG)**.
  * Permiten definir estructuras anidadas y dependencias.
* **Expresiones PEG (Parsing Expression Grammar):**

  * Más expresivas que las RegEx tradicionales.
  * Deterministas y sin backtracking ambiguo.

---

### 3.2 Lenguajes y formatos específicos

| Tipo de dato       | Mejor alternativa                                             |
| ------------------ | ------------------------------------------------------------- |
| HTML / XML         | Analizadores DOM o SAX (`BeautifulSoup`, `lxml`, `xml.etree`) |
| JSON               | `json` en Python, `JSON.parse()` en JS                        |
| CSV                | Módulos nativos (`csv`, `pandas`)                             |
| Logs estructurados | `jq`, `awk`, `pandas`, `fluent-bit`                           |

> Las RegEx sirven para limpieza superficial, pero no para comprensión estructural.

---

### 3.3 Motores de búsqueda y coincidencia semántica

Para tareas más avanzadas de coincidencia o recuperación de información:

* **Full-text search:** ElasticSearch, Lucene, Meilisearch.
* **Coincidencia difusa (fuzzy matching):** Levenshtein, Jaro-Winkler.
* **NLP y embeddings:** similitud semántica con modelos vectoriales.

---

### 3.4 Librerías declarativas y visuales

Herramientas que ofrecen **alternativas más legibles o seguras**:

* **`re2` (Google):** motor RegEx determinista, sin backtracking → evita ReDoS.
* **`regex101.com` / `RegExr`:** herramientas interactivas para test y explicación.
* **Librerías declarativas:** combinadores de patrones (`parse`, `lark`, `pyparsing`, `parsy`).

Ejemplo con `pyparsing`:

{% raw %}
```python
from pyparsing import Word, nums
number = Word(nums)
```
{% endraw %}

→ más legible que `\d+`

---

### 3.5 Machine learning y extracción inteligente

En contextos donde los patrones son ambiguos o dependen del significado:

* **NER (Named Entity Recognition)** para extracción de entidades.
* **Modelos de clasificación de texto** para reconocer patrones contextuales.
* **Regex híbridas + ML:** combinación práctica para reglas y aprendizaje.

---

## 4. Buenas prácticas

1. **Comentar y documentar** las expresiones largas usando sintaxis extendida (`(?x)`).
2. **Precompilar** las RegEx si se usan repetidamente.
3. **Limitar cuantificadores ambiguos** (`.*`, `.+` sin restricción).
4. **Preferir alternativas estructurales** cuando la semántica lo exija.
5. **Evitar RegEx para parsing de lenguajes formales** (HTML, XML, JSON).
6. **Usar motores deterministas** (`re2`, DFA-based) cuando la seguridad sea crítica.

---

## 5. Conclusión

Las expresiones regulares son una herramienta **potente y fundamental** para el manejo de patrones locales de texto, pero su simplicidad matemática implica límites claros:

* **Ideales:** detección de patrones simples, validaciones y transformaciones planas.
* **Inadecuadas:** estructuras anidadas, dependencias o semánticas.

Por ello, deben verse como **una parte del conjunto de herramientas** para el procesamiento de texto y datos, complementadas con parsers, analizadores o métodos semánticos más avanzados.

---

## Notas relacionadas

* Fundamentos matemáticos de las expresiones regulares
* RegEx
* Teoría de autómatas
* Parsing y gramáticas
* Expresiones PEG
* Validación de datos

