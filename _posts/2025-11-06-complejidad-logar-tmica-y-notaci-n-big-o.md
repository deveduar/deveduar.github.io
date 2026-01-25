---
date: 2025-11-06 15:14
title: Complejidad Logarítmica y Notación Big O
tags:
  - CS
  - computer_Science
  - logaritmos
  - big_0
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
cssclasses:
  - hide-embedded-header1
categories:
  - Computer Science
public_note: "true"
category: Computer Science
---
# Complejidad Logarítmica y Notación Big O
`$= dv.current().file.tags.join(" ")`

- [Computer Science](/uncategorized/computer-science/)
- [mates](/uncategorized/mates/)
## 📈 INTRODUCCIÓN A LA COMPLEJIDAD

La **complejidad algorítmica** mide el crecimiento del tiempo o espacio que necesita un algoritmo en función del tamaño de la entrada (**n**).  
Sirve para comparar la **eficiencia** de distintos algoritmos de forma independiente del hardware o lenguaje de programación.

---

## 🧮 NOTACIÓN BIG O (O GRANDE)

### **Definición**
- Expresa el **límite superior** del crecimiento del tiempo de ejecución de un algoritmo.  
- Describe el **peor caso** posible.  

**Ejemplo:**
Si un algoritmo tarda aproximadamente `3n² + 5n + 7` operaciones, se dice que tiene **O(n²)**, ya que el término de mayor orden domina para grandes valores de *n*.

### **Interpretación**
| Notación | Nombre | Ejemplo de algoritmo | Escalado aproximado |
|-----------|---------|----------------------|---------------------|
| **O(1)** | Constante | Acceso a elemento en array | 🔹 Independiente de *n* |
| **O(log n)** | Logarítmica | Búsqueda binaria | 🔹 Crece lentamente |
| **O(n)** | Lineal | Recorrer lista completa | 🔹 Proporcional a *n* |
| **O(n log n)** | Quasilineal | MergeSort, QuickSort | 🔹 Eficiente en grandes datos |
| **O(n²)** | Cuadrática | Doble bucle anidado | 🔹 Muy costoso para grandes *n* |
| **O(2ⁿ)** | Exponencial | Fuerza bruta en combinaciones | 🔹 Crecimiento explosivo |
| **O(n!)** | Factorial | Permutaciones totales | 🔹 Inviable para *n > 10* |

---

## 🔹 COMPLEJIDAD LOGARÍTMICA: O(log n)

### **Concepto**
La complejidad logarítmica aparece cuando el tamaño del problema **se reduce por un factor constante** en cada paso.

**Ejemplo clásico:**  
En una **búsqueda binaria**, cada paso descarta la mitad del espacio de búsqueda:
```

n → n/2 → n/4 → n/8 → ... → 1

```
El número de pasos necesarios es `log₂(n)`.

### **Características**
- Muy eficiente incluso para entradas grandes.  
- Cada iteración reduce el problema **exponencialmente**.  
- Suele aparecer en estructuras de datos **balanceadas** (como BST, heaps, AVL, B-trees).

### **Ejemplo de comparación**
| n | O(n) pasos | O(log₂ n) pasos |
|---|-------------|----------------|
| 10 | 10 | 3.3 |
| 1000 | 1000 | 10 |
| 1.000.000 | 1.000.000 | 20 |

---

## 🔸 COMPLEJIDAD INVERSA: O(1/log n) o O(√n)

Aunque menos comunes, existen algoritmos cuya complejidad decrece o crece sublinealmente.

### **O(√n)**
- Típica en algoritmos de búsqueda como **Jump Search** o **Block Search**.  
- Divide el conjunto en bloques de tamaño `√n` y reduce el número de comparaciones.

### **O(1/log n)**
- Raramente aparece de forma directa; puede aparecer como **eficiencia incremental** en estructuras optimizadas o análisis teóricos.

---

## 🧠 OTRAS NOTACIONES ASOCIADAS

### **Θ (Theta Grande)**
- Representa el **caso promedio o crecimiento exacto**.
- Ejemplo: un algoritmo que siempre tarda entre `2n` y `4n` → **Θ(n)**.

### **Ω (Omega Grande)**
- Representa el **mejor caso posible** (límite inferior).
- Ejemplo: búsqueda en lista desordenada → **Ω(1)** (si el primer elemento es el correcto).

### **O Pequeña (o(n)) y Ω Pequeña (ω(n))**
- Describen límites **estrictos**:
	- **o(n):** crece más lentamente que *n* pero nunca igual.  
	- **ω(n):** crece más rápido que *n* sin llegar al siguiente orden.

Ejemplo:
- `log n = o(n)` → log n crece más lento que n.
- `n² = ω(n)` → n² crece más rápido que n.

---

## ⚙️ COMPLEJIDAD COMBINADA

Muchos algoritmos combinan distintas fases con diferentes complejidades:
```

O(n) + O(log n) = O(n)

```
El término dominante (de mayor orden) determina la complejidad final.

**Ejemplo:**
- Leer n elementos → `O(n)`
- Luego aplicar búsqueda binaria en cada uno → `O(n log n)`

---

## 📊 REPRESENTACIÓN GRÁFICA (Intuitiva)

```

Crecimiento (tiempo)
│
│                    O(n²)
│                /
│           /
│       /
│   /
│ / O(n)
│---- O(log n)
│__ O(1)
└───────────────────────────> Tamaño del input (n)

```

---

## 🧩 RELACIÓN CON ESTRUCTURAS DE DATOS

| Estructura | Operación | Complejidad | Descripción |
|-------------|------------|--------------|--------------|
| **Array** | Acceso | O(1) | Posición directa |
| **Linked List** | Búsqueda | O(n) | Recorrido secuencial |
| **BST Balanceado** | Búsqueda | O(log n) | Reducción del espacio por nivel |
| **Hash Table** | Acceso promedio | O(1) | Dispersión por clave |
| **Heap** | Inserción / extracción | O(log n) | Propiedad de orden parcial |
| **Graph (Dijkstra)** | Camino mínimo | O(E log V) | Logarítmico por cola de prioridad |

---

## 🧾 RESUMEN FINAL

| Tipo | Ejemplo | Interpretación |
|------|----------|----------------|
| **O(1)** | Hash lookup | Tiempo constante |
| **O(log n)** | Búsqueda binaria | Mitades sucesivas |
| **O(n)** | Recorrido secuencial | Escalado lineal |
| **O(n log n)** | Ordenamientos óptimos | División y conquista |
| **O(n²)** | Burbujas, combinaciones | Crecimiento cuadrático |
| **O(2ⁿ)** | Recursión total | Explosión combinatoria |
| **O(n!)** | Permutaciones | Inviable |

---

🔍 **Conclusión:**  
La **complejidad logarítmica (O(log n))** es una de las más deseables, ya que ofrece un equilibrio ideal entre velocidad y escalabilidad. Comprender la **notación Big O**, junto con **Theta (Θ)** y **Omega (Ω)**, permite analizar el rendimiento de estructuras y algoritmos con precisión teórica y práctica.


# Fundamentos Matemáticos para Entender la Complejidad Algorítmica
`$= dv.current().file.tags.join(" ")`

---

## 🧮 1. CRECIMIENTO DE FUNCIONES

La **complejidad algorítmica** describe cómo crece una función de tiempo o espacio a medida que aumenta el tamaño de la entrada (*n*).  
Por ello, entender **comparación de tasas de crecimiento** es esencial.

### **Conceptos Clave**
- **Orden de crecimiento:** cómo una función f(n) se comporta conforme *n → ∞*.  
- **Dominancia:** si `f(n) < g(n)` para grandes *n*, entonces `f(n)` crece más lentamente.  
- **Límites y asintótica:**  
	- Se usan para comparar funciones ignorando constantes y términos menores.  
	- Ejemplo:  
		`f(n) = 3n² + 2n + 1 → O(n²)` porque el término cuadrático domina.

**Matemáticamente:**  
\[
\lim_{n \to \infty} \frac{f(n)}{g(n)} =
\begin{cases}
0 & \Rightarrow f(n) = o(g(n)) \\
c \neq 0 & \Rightarrow f(n) = Θ(g(n)) \\
\infty & \Rightarrow f(n) = ω(g(n))
\end{cases}
\]

---

## 📈 2. LOGARITMOS Y EXPONENCIALES

El **logaritmo** es la función inversa de la exponencial, y está directamente relacionado con la complejidad **O(log n)**.

### **Definición**
\[
\log_b(a) = c \quad \text{si y solo si} \quad b^c = a
\]

Ejemplo:  
\[
\log_2(8) = 3 \quad \text{porque} \quad 2^3 = 8
\]

### **Propiedades útiles**
1. **Cambio de base:**  
   \[
   \log_a(b) = \frac{\log_c(b)}{\log_c(a)}
   \]
   → La base es irrelevante en Big O.

2. **Multiplicación a suma:**  
   \[
   \log(ab) = \log a + \log b
   \]

3. **Potencia a multiplicación:**  
   \[
   \log(a^k) = k \log a
   \]

**Implicación:**  
Si un algoritmo divide el problema entre 2 en cada paso → `O(log₂ n)`.  
Si divide entre 10 → `O(log₁₀ n)`, pero ambas son equivalentes en Big O.

---

## 🔁 3. SERIES, SUMAS Y PROGRESIONES

Muchos algoritmos implican bucles anidados o recursión.  
Comprender **series aritméticas y geométricas** es clave para calcular su coste total.

### **Series Aritméticas**
\[
1 + 2 + 3 + ... + n = \frac{n(n + 1)}{2} = O(n²)
\]
→ típica en bucles dobles.

### **Series Geométricas**
\[
1 + r + r^2 + ... + r^k = \frac{r^{k+1} - 1}{r - 1}
\]
→ si |r| < 1, converge a un valor constante.  
→ se usa en análisis de **división y conquista** (recursiones).

**Ejemplo:**
En *MergeSort*, la serie del coste por nivel es:
\[
O(n) + O(n) + ... + O(n) = O(n \log n)
\]
porque hay `log n` niveles de división.

---

## ♻️ 4. RECURSIVIDAD Y RELACIONES DE RECURRENCIA

Los algoritmos recursivos se analizan mediante **ecuaciones de recurrencia**, que describen el coste en función del tamaño del subproblema.

### **Ejemplo General**
\[
T(n) = a \cdot T\left(\frac{n}{b}\right) + f(n)
\]
donde:
- *a* = número de subproblemas generados.  
- *b* = factor de división.  
- *f(n)* = coste fuera de la recursión.

### **Teorema Maestro**
Permite resolver muchas recurrencias comunes sin cálculo manual.

| Caso | Condición | Complejidad |
|------|------------|-------------|
| 1️⃣ | \( f(n) = O(n^{\log_b a - ε}) \) | \( T(n) = Θ(n^{\log_b a}) \) |
| 2️⃣ | \( f(n) = Θ(n^{\log_b a}) \) | \( T(n) = Θ(n^{\log_b a} \log n) \) |
| 3️⃣ | \( f(n) = Ω(n^{\log_b a + ε}) \) | \( T(n) = Θ(f(n)) \) |

**Ejemplo:**  
MergeSort → \( T(n) = 2T(n/2) + O(n) = O(n \log n) \)

---

## 📊 5. ANÁLISIS ASINTÓTICO

### **Idea Principal**
El análisis asintótico ignora:
- Constantes de tiempo: `3n` y `n` son ambos `O(n)`.
- Términos menores: `n² + n` → `O(n²)`.

Se centra en el **comportamiento cuando n es muy grande**.

### **Tipos**
- **Peor caso:** límite superior → Big O.  
- **Mejor caso:** límite inferior → Ω.  
- **Promedio:** comportamiento esperado → Θ.

---

## 🔢 6. CONCEPTOS DE LÍMITE Y DERIVADA

Las derivadas permiten entender **crecimientos relativos** entre funciones.

### **Comparación de crecimiento:**
Si  
\[
\lim_{n→∞} \frac{f(n)}{g(n)} = 0
\]
→ *f* crece más lento que *g*.

**Ejemplo:**
\[
\lim_{n→∞} \frac{\log n}{n} = 0
\]
→ log n crece mucho más lentamente que n.

### **Jerarquía de crecimiento:**
\[
1 < \log n < n < n \log n < n^2 < 2^n < n! 
\]

---

## 🔢 7. ALGEBRA Y COMBINATORIA BÁSICA

Usadas para estimar operaciones o combinaciones posibles dentro de un algoritmo.

### **Combinatoria**
- **Permutaciones:** número de formas de ordenar → `n!`  
- **Combinaciones:** número de subconjuntos → `C(n, k) = n! / (k!(n−k)!)`  
- Uso: algoritmos de fuerza bruta, análisis exponencial.

### **Binomio de Newton**
\[
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
\]
→ base para análisis de ramas en árboles de recursión y probabilidades de casos.

---

## 📚 8. TEORÍA DE CONJUNTOS Y FUNCIONES

Comprender **dominios, rangos** y **mapeos** ayuda a modelar estructuras como tablas hash o grafos.

- **Inyección / Biyeción:** usada en análisis de colisiones de hash.  
- **Relaciones y pares ordenados:** base para representar aristas `(u, v)` en grafos.  
- **Cardinalidad:** mide tamaño de un conjunto; análogo al tamaño de entrada *n*.

---

## 🧠 9. PROBABILIDAD Y ESPERANZA MATEMÁTICA

Usada en análisis **promedio o esperado** (randomized algorithms).

### **Conceptos Clave**
- **Valor esperado (E[X]):** coste promedio de una operación.  
- **Varianza:** dispersión del tiempo de ejecución.  
- **Linealidad de la esperanza:** permite sumar esperanzas de suboperaciones.

**Ejemplo:**  
En una tabla hash con buena función dispersora, el tiempo promedio de búsqueda es **O(1)**, aunque el peor caso sea **O(n)**.

---

## ⚙️ 10. RESUMEN DE CONCEPTOS IMPRESCINDIBLES

| Área | Conceptos Fundamentales | Aplicación en Complejidad |
|------|--------------------------|----------------------------|
| **Álgebra y límites** | Crecimiento, dominancia, límites | Big O, comparaciones asintóticas |
| **Logaritmos / Exponenciales** | log₂, cambio de base, potencias | Búsquedas, árboles, recursión |
| **Series / Sumatorias** | aritméticas y geométricas | Análisis de bucles y divisiones |
| **Recurrencias** | Teorema maestro | Análisis recursivo |
| **Derivadas / Límites** | Crecimiento relativo | Jerarquía de funciones |
| **Combinatoria** | Permutaciones, combinaciones | Algoritmos exponenciales |
| **Probabilidad** | Esperanza, dispersión | Análisis promedio |
| **Teoría de conjuntos** | Cardinalidad, mapeos | Estructuras como hash o grafos |

---

🧩 **En resumen:**  
Para dominar la **complejidad algorítmica** es esencial entender cómo crecen las funciones, cómo se comportan los **logaritmos y sumatorias**, y cómo se modelan las **relaciones recursivas**.  
Estas herramientas matemáticas forman el lenguaje con el que se mide la eficiencia y la escalabilidad de los algoritmos.

# Complejidad Logarítmica y Notaciones — Conceptos Avanzados
`$= dv.current().file.tags.join(" ")`

---

## 📈 1. Escalas de crecimiento y jerarquía de complejidad

Comprender la relación entre diferentes órdenes de crecimiento permite comparar algoritmos con precisión.

| Orden de crecimiento | Ejemplo | Comportamiento |
|----------------------|----------|----------------|
| `O(1)` | Acceso directo a array | Constante |
| `O(log n)` | Búsqueda binaria | Crecimiento lento |
| `O(n)` | Recorrido lineal | Proporcional |
| `O(n log n)` | MergeSort, HeapSort | Casi lineal |
| `O(n²)` | Búsqueda doble | Cuadrático |
| `O(2ⁿ)` | Fuerza bruta combinatoria | Exponencial |
| `O(n!)` | Permutaciones totales | Factorial |

El **crecimiento logarítmico** aparece típicamente cuando **cada paso divide el problema a la mitad**.

---

## 🧮 2. Profundización matemática: bases y equivalencias del logaritmo

- La **base del logaritmo** en la complejidad (`log₂`, `log₁₀`, `ln`) es **irrelevante** asintóticamente:
	\[
	O(\log_a n) = O(\log_b n)
	\]
	porque las bases se relacionan por un factor constante:
	\[
	\log_a n = \frac{\log_b n}{\log_b a}
	\]

- En análisis algorítmico se usa casi siempre `log₂(n)`, por representar **divisiones binarias** (como en árboles o búsqueda binaria).

- Para estructuras jerárquicas que se dividen en *k* partes, la complejidad generaliza a:
	\[
	T(n) = O(\log_k n)
	\]
	donde k es el factor de división.

---

## 🧠 3. Complejidades fraccionales y sublogarítmicas

Existen algoritmos con **complejidades menores que logarítmicas**, aunque muy raros:

- **O(α(n))**, donde `α` es la **función inversa de Ackermann**, crece más lentamente que `log n`.
	- Ejemplo: Union-Find / Disjoint Set con *path compression*.
- **O(log log n)** aparece en estructuras avanzadas como **van Emde Boas Trees** o **skip lists**.

Estas funciones representan **eficiencia extrema** en acceso o búsqueda.

---

## 🧩 4. Notaciones complementarias a Big O

- **Θ (Theta):** acota *exactamente* la tasa de crecimiento.
	\[
	f(n) = Θ(g(n)) \Rightarrow f(n) \text{ crece igual que } g(n)
	\]

- **Ω (Omega):** cota inferior (mínimo tiempo posible).
	\[
	f(n) = Ω(g(n)) \Rightarrow f(n) \text{ no crece más lento que } g(n)
	\]

- **o (small-o):** crece *estrictamente más lento* que la función comparada.
	\[
	f(n) = o(g(n)) \Rightarrow \lim_{n→∞} \frac{f(n)}{g(n)} = 0
	\]

- **ω (small-omega):** crece *estrictamente más rápido*.
	\[
	f(n) = ω(g(n)) \Rightarrow \lim_{n→∞} \frac{f(n)}{g(n)} = ∞
	\]

Estas notaciones permiten expresar relaciones asintóticas **con mayor precisión** que `O(...)`.

---

## ⚗️ 5. Dominio de recurrencias y el Teorema Maestro

Muchos algoritmos logarítmicos o log-lineales surgen de **recurrencias** del tipo:
\[
T(n) = aT\left(\frac{n}{b}\right) + f(n)
\]

El **Teorema Maestro** ofrece una forma directa de obtener la complejidad:

1. Si `f(n) = O(n^{log_b a - ε})`, → `T(n) = Θ(n^{log_b a})`
2. Si `f(n) = Θ(n^{log_b a})`, → `T(n) = Θ(n^{log_b a} * log n)`
3. Si `f(n) = Ω(n^{log_b a + ε})`, → `T(n) = Θ(f(n))`

Ejemplo:  
- **MergeSort:** `T(n) = 2T(n/2) + O(n)` → `O(n log n)`
- **Binary Search:** `T(n) = T(n/2) + O(1)` → `O(log n)`

---

## 🔢 6. Aproximaciones y crecimiento real

Para observar la diferencia práctica entre escalas de complejidad:

| n | log₂(n) | n | n log n | n² |
|---|----------|---|----------|----|
| 10 | 3.32 | 10 | 33.2 | 100 |
| 100 | 6.64 | 100 | 664 | 10,000 |
| 1,000 | 9.97 | 1,000 | 9,970 | 1,000,000 |

El crecimiento logarítmico es **extremadamente eficiente**, incluso para tamaños de entrada enormes.

---

## 🧩 7. Conceptos matemáticos relacionados imprescindibles

- **Logaritmos y propiedades de cambio de base**
- **Límites y tasas de crecimiento (análisis asintótico)**
- **Series y sumatorias**
- **Derivadas y funciones monótonas** (para comparar crecimientos)
- **Recurrencias y su resolución**
- **Teoría de conjuntos infinitos y cardinalidad** (para razonamientos sobre "orden de magnitud")
- **Combinatoria básica y factoriales** (para contrastar crecimiento exponencial y factorial)
- **Teoría de complejidad computacional** (P, NP, EXP)

---

## 🔬 8. Interpretación geométrica e intuitiva

- En una gráfica logarítmica, `O(log n)` se **aplasta** lentamente con respecto a `O(n)`.  
- Es común en **procesos jerárquicos**, **divisiones recursivas**, o **estructuras balanceadas**.  
- Ejemplo intuitivo:  
	si duplicas el tamaño del problema, un algoritmo `O(log n)` **solo suma una operación adicional**.

---

## 📚 9. Aplicaciones donde aparece la complejidad logarítmica

- Búsqueda en árboles balanceados: AVL Trees, Red-Black Trees, B-Trees
- Búsqueda binaria en arrays ordenados
- Acceso a estructuras jerárquicas o índices
- Heaps para operaciones de prioridad
- Union-Find / Disjoint Set optimizado
- Skip Lists y Segment Trees

---

## 🧭 10. Complejidad compuesta y mixta

En la práctica, los algoritmos combinan diferentes órdenes:

- `O(n log n)` → mezcla lineal y logarítmica (división + combinación)
- `O(log² n)` → logarítmico anidado (doble división)
- `O(n log log n)` → búsqueda en estructuras muy optimizadas

Estas complejidades **intermedias** aparecen en algoritmos de compresión, búsqueda avanzada y análisis de datos.

---

## 🔗 11. Lecturas recomendadas

- Teorema Maestro
- Recurrencias
- Teoría de la Complejidad Computacional
- Árboles de Búsqueda Balanceados
- Análisis Asintótico
- Logaritmos y Crecimiento de Funciones

---
