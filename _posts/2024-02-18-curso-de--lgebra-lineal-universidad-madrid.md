---
date: 2024-02-18 16:14
title: Curso de Álgebra Lineal universidad madrid
Hecho: false
tags:
  - Mates
keywords:
source:
status: 🌟
Parent: "[[Area-IA]]"
cssclasses:
  - hide-embedded-header1
categories:
  - mates
public_note: "true"
category: mates
---
# Curso de Álgebra Lineal universidad madrid
`$= dv.current().file.tags.join(" ")`

- [http://ocw.uc3m.es/matematicas/algebra-lineal/presentacion-del-curso](http://ocw.uc3m.es/matematicas/algebra-lineal/presentacion-del-curso)
- [algebra lineal](/mates/algebra-lineal/)
- [mates](/uncategorized/mates/)

## Objetivos: Conocimientos y Capacidades

El curso tiene como finalidad desarrollar tanto conocimientos teóricos como habilidades prácticas en álgebra lineal. Los objetivos específicos son:

### Conocimientos Teóricos
- Conocer y comprender el concepto de **espacio vectorial** y sus aplicaciones.  
- Entender las **transformaciones lineales**, sus propiedades y su representación mediante matrices.  
- Comprender el concepto de **valores y vectores propios** de una transformación lineal, saber cómo calcularlos y conocer sus aplicaciones.  
- Conocer y aplicar el concepto de **espacio vectorial con producto escalar**, incluyendo aplicaciones como **mínimos cuadrados** y **valores singulares**.  
- Incrementar el **grado de abstracción** en la comprensión y análisis de problemas matemáticos.

### Habilidades Prácticas
- Resolver problemas prácticos usando técnicas propias del álgebra lineal.  
- Comunicarse de manera clara, oral y escrita, utilizando correctamente los signos y el lenguaje matemático.  
- Modelizar situaciones reales descritas en palabras mediante conceptos matemáticos.  
- Interpretar la solución matemática de un problema, evaluando su **fiabilidad** y **limitaciones**.

---

## Programa del Curso

1. **Matrices**  
2. **Sistemas de ecuaciones lineales**  
3. **Espacios vectoriales**  
4. **Base y dimensión**  
5. **Transformaciones lineales**  
6. **Transformaciones lineales y matrices**  
7. **Forma normal de una transformación**  
8. **Valores y vectores propios**  
9. **Producto interno y ortogonalidad en espacios vectoriales sobre ℝ**  
10. **Bases ortogonales**  
11. **El teorema espectral en ℝ**  
12. **Geometría de las transformaciones lineales en ℝ**  
13. **Mínimos cuadrados**  
14. **Pseudoinversa y descomposición en valores singulares**

## Matrices

Una **matriz** es una disposición rectangular de números, símbolos o expresiones organizada en filas y columnas. Se utiliza para representar sistemas de ecuaciones, transformaciones lineales, datos y operaciones algebraicas en el álgebra lineal y el cálculo numérico.

### Notació
n y definición

Una matriz de tamaño $m \times n$ (m filas y n columnas) se representa como:

$$
A = 
\begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{bmatrix}
$$

Donde:
- $a_{ij}$ es el elemento en la fila $i$ y columna $j$.
- El **orden** de la matriz es $m \times n$.

### Tipos de matrices

- **Matriz fila**: tiene una sola fila.  
  $1 \times n$

- **Matriz columna**: tiene una sola columna.  
  $m \times 1$

- **Matriz cuadrada**: tiene igual número de filas y columnas.  
  $n \times n$

- **Matriz diagonal**: matriz cuadrada con elementos distintos de cero solo en la diagonal principal.

- **Matriz identidad** $I_n$: diagonal con todos los elementos de la diagonal principal iguales a 1.

- **Matriz nula**: todos sus elementos son cero.

- **Matriz simétrica**: $A = A^T$.

- **Matriz antisimétrica o skew-simétrica**: $A = -A^T$.

- **Matriz triangular superior**: todos los elementos debajo de la diagonal son cero.

- **Matriz triangular inferior**: todos los elementos encima de la diagonal son cero.

- **Matriz ortogonal**: $A^T A = I$.

- **Matriz hermítica (en números complejos)**: $A = \overline{A}^T$.

- **Matriz unitaria**: $A^* A = I$, donde $A^*$ es el conjugado transpuesto.

### Operaciones con matrices

1. **Suma y resta**

   Dos matrices $A$ y $B$ del mismo orden se pueden sumar o restar elemento a elemento:

   $$
   (A + B)_{ij} = a_{ij} + b_{ij}
   $$

   Requiere que ambas tengan el mismo tamaño.

2. **Multiplicación por un escalar**

   Cada elemento de la matriz se multiplica por el escalar $k$:

   $$
   (kA)_{ij} = k \cdot a_{ij}
   $$

3. **Multiplicación de matrices**

   La multiplicación $A_{m \times n} B_{n \times p}$ está definida si el número de columnas de $A$ coincide con el número de filas de $B$.  
   El resultado es una matriz $C_{m \times p}$ con:

   $$
   c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}
   $$

   Esta operación no es conmutativa en general: $AB \neq BA$.

4. **Transposición**

   La matriz transpuesta $A^T$ se obtiene intercambiando filas por columnas:

   $$
   (A^T)_{ij} = a_{ji}
   $$

5. **Inversa**

   Si $A$ es cuadrada y no singular (determinante distinto de cero), existe una matriz $A^{-1}$ tal que:

   $$
   A A^{-1} = A^{-1} A = I
   $$

6. **Determinante**

   El determinante de una matriz cuadrada $A$ se denota como $|A|$ o $\det(A)$.  
   Es un valor escalar que indica si la matriz es invertible y la escala de la transformación lineal asociada.

7. **Traza**

   La traza de una matriz cuadrada es la suma de los elementos de su diagonal principal:

   $$
   \operatorname{tr}(A) = \sum_{i=1}^{n} a_{ii}
   $$

### Propiedades importantes

- $(A + B)^T = A^T + B^T$
- $(AB)^T = B^T A^T$
- $(A^{-1})^T = (A^T)^{-1}$
- $\det(AB) = \det(A)\det(B)$
- $\det(A^T) = \det(A)$
- $\operatorname{tr}(AB) = \operatorname{tr}(BA)$

### Representación matricial de sistemas lineales

Un sistema lineal puede expresarse como:

$$
A\mathbf{x} = \mathbf{b}
$$

Donde:
- $A$: matriz de coeficientes.
- $\mathbf{x}$: vector de incógnitas.
- $\mathbf{b}$: vector de términos independientes.

### Transformaciones lineales y matrices

Cada matriz representa una transformación lineal entre espacios vectoriales.  
Por ejemplo, si $T: \mathbb{R}^n \to \mathbb{R}^m$ es una transformación lineal, existe una matriz $A$ tal que:

$$
T(\mathbf{x}) = A\mathbf{x}
$$

La matriz $A$ depende de la base elegida en los espacios de partida y llegada.

### Descomposición matricial

Existen varias formas de descomponer matrices en factores que simplifican el análisis y el cálculo numérico:

- **LU**: $A = LU$
- **QR**: $A = QR$
- **SVD (Singular Value Decomposition)**: $A = U \Sigma V^T$
- **Cholesky**: $A = LL^T$ (si $A$ es simétrica y definida positiva)

### Aplicaciones de las matrices

- Resolver sistemas de ecuaciones lineales.
- Modelar transformaciones geométricas.
- Representar grafos y redes.
- Procesamiento de señales e imágenes.
- Métodos numéricos para optimización y simulación.

## Sistemas de ecuaciones lineales

Un **sistema de ecuaciones lineales** (SEL) es un conjunto de ecuaciones en las que las incógnitas aparecen solo con exponente uno y no se multiplican entre sí.  
Se representa generalmente de la forma:

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\
\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m
\end{cases}
$$

donde:
- $a_{ij}$ son los **coeficientes** del sistema.  
- $x_j$ son las **incógnitas**.  
- $b_i$ son los **términos independientes**.

### Representación matricial

Un sistema puede escribirse de forma compacta como:

$$
A\mathbf{x} = \mathbf{b}
$$

donde:
- $A \in \mathbb{R}^{m \times n}$ es la **matriz de coeficientes**.  
- $\mathbf{x} = [x_1, x_2, \dots, x_n]^T$ es el **vector de incógnitas**.  
- $\mathbf{b} = [b_1, b_2, \dots, b_m]^T$ es el **vector de resultados**.

### Tipos de sistemas

- **Sistema compatible**: tiene al menos una solución.
  - **Compatible determinado**: una única solución.
  - **Compatible indeterminado**: infinitas soluciones.
- **Sistema incompatible**: no tiene solución.

El análisis de la existencia y unicidad de solución depende del **rango** de la matriz $A$ y del **rango** de la matriz ampliada $[A | \mathbf{b}]$.

### Condiciones de existencia y unicidad (Teorema de Rouché-Frobenius)

Sea $A$ la matriz de coeficientes y $[A | \mathbf{b}]$ la matriz ampliada, entonces:
- El sistema es **compatible** si y solo si:
  
  $$
  \operatorname{rango}(A) = \operatorname{rango}([A | \mathbf{b}])
  $$
- Es **determinado** si además:

  $$
  \operatorname{rango}(A) = n
  $$
  donde $n$ es el número de incógnitas.

### Métodos de resolución

#### 1. Método de eliminación de Gauss

Consiste en transformar el sistema original en uno equivalente escalonado superior mediante operaciones elementales sobre las filas.  
Se obtienen los valores de las incógnitas mediante **sustitución regresiva**.

#### 2. Método de Gauss-Jordan

Extiende el método de Gauss hasta obtener una **matriz identidad** en los coeficientes, dejando las soluciones directamente en la matriz ampliada.

#### 3. Método de Cramer

Aplica solo a sistemas **cuadrados** ($n \times n$) con determinante distinto de cero.  
Cada incógnita se obtiene mediante:

$$
x_i = \frac{\det(A_i)}{\det(A)}
$$

donde $A_i$ es la matriz $A$ con su columna $i$ reemplazada por el vector $\mathbf{b}$.

#### 4. Método de la matriz inversa

Si $A$ es cuadrada e invertible:

$$
A\mathbf{x} = \mathbf{b} \implies \mathbf{x} = A^{-1}\mathbf{b}
$$

Requiere el cálculo de la **matriz inversa**, lo cual puede ser costoso para grandes dimensiones.

#### 5. Métodos iterativos

Usados en sistemas grandes o dispersos, donde los métodos directos son ineficientes:
- **Método de Jacobi**
- **Método de Gauss-Seidel**
- **Método del gradiente conjugado**

Estos métodos parten de una estimación inicial y mejoran la solución en cada iteración.

### Interpretación geométrica

Un sistema de ecuaciones lineales representa la intersección de **hiperplanos** en un espacio n-dimensional.  
- Si las rectas o planos se cruzan en un único punto → solución única.  
- Si coinciden parcialmente → infinitas soluciones.  
- Si son paralelos → sin solución.

### Clasificación según el número de ecuaciones e incógnitas

- **Sistema sobredeterminado**: más ecuaciones que incógnitas ($m > n$).  
  Suele no tener solución exacta; se aproxima mediante **mínimos cuadrados**:

  $$
  \min_{\mathbf{x&#125;&#125; \|A\mathbf{x} - \mathbf{b}\|_2^2
  $$

- **Sistema cuadrado**: mismo número de ecuaciones e incógnitas ($m = n$).  
  Puede tener solución única si $\det(A) \neq 0$.

- **Sistema subdeterminado**: menos ecuaciones que incógnitas ($m < n$).  
  Tiene infinitas soluciones; se elige la de **mínima norma** usando la **pseudoinversa**:

  $$
  \mathbf{x} = A^+ \mathbf{b}
  $$

donde la pseudoinversa $A^+$ se calcula mediante la descomposición SVD:

$$
A^+ = V \Sigma^+ U^T
$$

### Propiedades relevantes

- Si $A$ es simétrica y definida positiva, los métodos iterativos convergen más rápido.  
- En sistemas grandes, es preferible factorizar $A$ (LU, Cholesky, QR) antes que invertirla directamente.  
- El **número de condición** $\kappa(A)$ mide la sensibilidad de la solución a errores numéricos:

  $$
  \kappa(A) = \|A\| \cdot \|A^{-1}\|
  $$

  Un número de condición alto implica inestabilidad numérica.

### Resolución numérica de sistemas lineales

En [Cálculo numérico](/mates/c-lculo-num-rico/), los sistemas lineales son el núcleo de muchos algoritmos.  
Se estudian aspectos como:
- **Estabilidad numérica**
- **Error de redondeo**
- **Métodos iterativos vs. directos**
- **Matrices dispersas y optimización de memoria**

### Aplicaciones

- Modelado físico y simulaciones.  
- Ajuste de curvas por mínimos cuadrados.  
- Cálculo de corrientes en circuitos eléctricos.  
- Equilibrio químico y reacciones.  
- Resolución de problemas en métodos numéricos para ingeniería.


## Espacios vectoriales

Un **espacio vectorial** (o espacio lineal) es una estructura algebraica formada por un conjunto de **vectores** que pueden **sumarse** y **multiplicarse por escalares**, cumpliendo ciertas propiedades o axiomas.  
Los escalares pertenecen a un **cuerpo** $\mathbb{K}$ (usualmente $\mathbb{R}$ o $\mathbb{C}$).

### Definición formal

Un conjunto $V$ es un **espacio vectorial sobre** $\mathbb{K}$ si cumple:

1. Existe una operación de **suma vectorial**:  
   $+ : V \times V \to V$, tal que para todo $\mathbf{u}, \mathbf{v} \in V$, se tiene $\mathbf{u} + \mathbf{v} \in V$.
2. Existe una operación de **multiplicación escalar**:  
   $\cdot : \mathbb{K} \times V \to V$, tal que para todo $a \in \mathbb{K}$ y $\mathbf{v} \in V$, se tiene $a\mathbf{v} \in V$.

### Axiomas de espacio vectorial

Para todo $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$ y $a, b \in \mathbb{K}$:

1. **Asociatividad de la suma:**  
   $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$
2. **Conmutatividad de la suma:**  
   $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
3. **Elemento neutro aditivo:**  
   Existe un vector $\mathbf{0} \in V$ tal que $\mathbf{v} + \mathbf{0} = \mathbf{v}$
4. **Elemento opuesto:**  
   Para cada $\mathbf{v} \in V$, existe $-\mathbf{v}$ tal que $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$
5. **Compatibilidad del producto escalar:**  
   $a(b\mathbf{v}) = (ab)\mathbf{v}$
6. **Elemento neutro escalar:**  
   $1\mathbf{v} = \mathbf{v}$
7. **Distributividad del escalar respecto a la suma de vectores:**  
   $a(\mathbf{u} + \mathbf{v}) = a\mathbf{u} + a\mathbf{v}$
8. **Distributividad del escalar respecto a la suma de escalares:**  
   $(a + b)\mathbf{v} = a\mathbf{v} + b\mathbf{v}$

### Ejemplos de espacios vectoriales

- $\mathbb{R}^n$: todos los vectores reales de $n$ componentes.  
- $\mathbb{C}^n$: vectores con componentes complejas.  
- $\mathbb{R}^{m \times n}$: matrices reales de tamaño $m \times n$.  
- Conjunto de polinomios de grado ≤ $n$: $P_n(\mathbb{R})$.  
- Conjunto de funciones reales continuas: $C[a,b]$.

### Subespacios vectoriales

Un **subespacio** $W \subseteq V$ es un subconjunto que también es un espacio vectorial bajo las mismas operaciones de $V$.  
Cumple:

1. $\mathbf{0} \in W$
2. Si $\mathbf{u}, \mathbf{v} \in W$, entonces $\mathbf{u} + \mathbf{v} \in W$
3. Si $\mathbf{v} \in W$ y $a \in \mathbb{K}$, entonces $a\mathbf{v} \in W$

Ejemplo: el conjunto de todos los vectores de la forma $(x, 2x)$ en $\mathbb{R}^2$ es un subespacio de $\mathbb{R}^2$.

### Combinación lineal, independencia y base

- **Combinación lineal:**  
  Dado un conjunto de vectores $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$, una combinación lineal es toda expresión del tipo:
  $$
  \mathbf{u} = a_1\mathbf{v}_1 + a_2\mathbf{v}_2 + \dots + a_n\mathbf{v}_n
  $$
  con $a_i \in \mathbb{K}$.

- **Independencia lineal:**  
  Los vectores son **linealmente independientes** si la ecuación:
  $$
  a_1\mathbf{v}_1 + a_2\mathbf{v}_2 + \dots + a_n\mathbf{v}_n = \mathbf{0}
  $$
  solo se cumple cuando $a_1 = a_2 = \dots = a_n = 0$.

- **Base:**  
  Un conjunto de vectores $\mathcal{B} = \{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ es una **base** de $V$ si:
  1. Son linealmente independientes.
  2. Generan todo el espacio $V$.

- **Dimensión:**  
  El número de vectores de una base se llama **dimensión** del espacio, denotado $\dim(V)$.

### Cambio de base

Dadas dos bases $\mathcal{B}$ y $\mathcal{B}'$ de $V$, el cambio de coordenadas entre ambas se realiza mediante una **matriz de cambio de base** $P$:

$$
[\mathbf{v}]_{\mathcal{B}'} = P^{-1}[\mathbf{v}]_{\mathcal{B&#125;&#125;
$$

### Espacio generado y rango

- El **espacio generado** por un conjunto de vectores $S = \{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ es el conjunto de todas sus combinaciones lineales:

  $$
  \operatorname{span}(S) = \{a_1\mathbf{v}_1 + \dots + a_k\mathbf{v}_k \,|\, a_i \in \mathbb{K}\}
  $$

- El **rango** de una matriz es la dimensión del espacio generado por sus columnas (o filas).  
  Es fundamental en el análisis de sistemas de ecuaciones lineales.

### Espacio nulo y espacio columna

Sea $A \in \mathbb{R}^{m \times n}$:

- **Espacio columna (col(A))**:  
  Conjunto de todas las combinaciones lineales de las columnas de $A$.

- **Espacio nulo (null(A))**:  
  Conjunto de soluciones de $A\mathbf{x} = \mathbf{0}$.

  $$
  \operatorname{null}(A) = \{\mathbf{x} \in \mathbb{R}^n \,|\, A\mathbf{x} = \mathbf{0}\}
  $$

El teorema fundamental de la álgebra lineal establece que:

$$
\dim(\operatorname{col}(A)) + \dim(\operatorname{null}(A)) = n
$$

### Espacios producto y suma directa

- **Suma de subespacios:**  
  Si $W_1, W_2 \subseteq V$,
  $$
  W_1 + W_2 = \{\mathbf{w}_1 + \mathbf{w}_2 \,|\, \mathbf{w}_1 \in W_1, \mathbf{w}_2 \in W_2\}
  $$

- **Suma directa:**  
  Si $W_1 \cap W_2 = \{\mathbf{0}\}$, entonces:
  $$
  V = W_1 \oplus W_2
  $$

### Transformaciones lineales y espacios vectoriales

Una **transformación lineal** $T: V \to W$ es una aplicación entre espacios vectoriales que preserva la suma y la multiplicación escalar:

$$
T(a\mathbf{u} + b\mathbf{v}) = aT(\mathbf{u}) + bT(\mathbf{v})
$$

Su **imagen** es un subespacio de $W$ y su **núcleo** un subespacio de $V$.  
La relación entre ambos está dada por el **teorema del rango y la nulidad**:

$$
\dim(\operatorname{Im}(T)) + \dim(\ker(T)) = \dim(V)
$$

### Aplicaciones

- Representación de datos y señales como vectores.  
- Análisis de transformaciones lineales y rotaciones.  
- Compresión de información (PCA, SVD).  
- Cálculo de soluciones en sistemas de ecuaciones lineales.  
- Modelado geométrico y proyecciones en espacios multidimensionales.


## Base y dimensión

Los conceptos de **base** y **dimensión** son fundamentales en el estudio de los espacios vectoriales, ya que describen su estructura y la forma de representar cualquier vector del espacio.

### Base

Una **base** de un espacio vectorial $V$ sobre un cuerpo $\mathbb{K}$ es un conjunto ordenado de vectores  
$\mathcal{B} = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$ que cumple dos condiciones:

1. **Genera el espacio:**  
   Todo vector $\mathbf{v} \in V$ puede expresarse como una combinación lineal de los vectores de la base:
   $$
   \mathbf{v} = a_1\mathbf{v}_1 + a_2\mathbf{v}_2 + \dots + a_n\mathbf{v}_n, \quad a_i \in \mathbb{K}
   $$

2. **Independencia lineal:**  
   Los vectores de la base son linealmente independientes:
   $$
   a_1\mathbf{v}_1 + a_2\mathbf{v}_2 + \dots + a_n\mathbf{v}_n = \mathbf{0}
   \implies a_1 = a_2 = \dots = a_n = 0
   $$

Cuando estas condiciones se cumplen, cada vector del espacio tiene una **representación única** en términos de los vectores de la base.

### Ejemplos

- En $\mathbb{R}^2$, la base canónica es:
  $$
  \mathcal{B} = \{(1,0), (0,1)\}
  $$
  Cualquier vector $(x,y)$ puede escribirse como:
  $$
  (x,y) = x(1,0) + y(0,1)
  $$

- En $\mathbb{R}^3$, la base canónica es:
  $$
  \mathcal{B} = \{(1,0,0), (0,1,0), (0,0,1)\}
  $$

- En el espacio de polinomios de grado ≤ 2:
  $$
  P_2 = \{a_0 + a_1x + a_2x^2 \,|\, a_i \in \mathbb{R}\}
  $$
  una base natural es:
  $$
  \mathcal{B} = \{1, x, x^2\}
  $$

### Cambio de base

Dadas dos bases $\mathcal{B} = \{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ y $\mathcal{B}' = \{\mathbf{v}_1', \dots, \mathbf{v}_n'\}$ del mismo espacio $V$, existe una **matriz de cambio de base** $P$ tal que:

$$
[\mathbf{v}]_{\mathcal{B}'} = P^{-1} [\mathbf{v}]_{\mathcal{B&#125;&#125;
$$

y recíprocamente:

$$
[\mathbf{v}]_{\mathcal{B&#125;&#125; = P [\mathbf{v}]_{\mathcal{B}'}
$$

donde las columnas de $P$ son las coordenadas de los vectores de $\mathcal{B}'$ expresados en la base $\mathcal{B}$.

El cambio de base permite expresar una transformación lineal o un vector en distintos sistemas de referencia dentro del mismo espacio vectorial.

### Dimensión

La **dimensión** de un espacio vectorial $V$, denotada $\dim(V)$, es el número de vectores de una base de $V$.  
Equivale al número mínimo de vectores necesarios para generar todo el espacio.

#### Ejemplos
- $\dim(\mathbb{R}^n) = n$
- $\dim(P_m) = m + 1$
- Si $A \in \mathbb{R}^{m \times n}$, entonces:
  - $\dim(\operatorname{col}(A)) = \operatorname{rango}(A)$
  - $\dim(\operatorname{null}(A)) = n - \operatorname{rango}(A)$

### Relación entre base y dimensión

- Todos los conjuntos base de un mismo espacio tienen el **mismo número de elementos**, es decir, la dimensión es única.  
- Si un conjunto de vectores **independientes** tiene tantos elementos como la dimensión del espacio, es una base.  
- Si un conjunto de vectores **genera** el espacio y tiene el mismo número de vectores que la dimensión, también es una base.

### Cálculo de la dimensión mediante matrices

Sea un conjunto de vectores $S = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ en $\mathbb{R}^n$.  
Se puede formar una matriz $A = [\mathbf{v}_1 \, \mathbf{v}_2 \, \dots \, \mathbf{v}_k]$.  
Entonces:

$$
\dim(\operatorname{span}(S)) = \operatorname{rango}(A)
$$

El rango se obtiene reduciendo $A$ a su **forma escalonada** mediante el método de Gauss.

### Subespacios y dimensión

Si $W \subseteq V$ es un subespacio de un espacio vectorial de dimensión $n$, entonces:

$$
0 \leq \dim(W) \leq n
$$

Además, para dos subespacios $W_1, W_2 \subseteq V$:

$$
\dim(W_1 + W_2) = \dim(W_1) + \dim(W_2) - \dim(W_1 \cap W_2)
$$

### Espacio nulo, rango y teorema del rango-nulidad

Para una transformación lineal $T: V \to W$ con matriz asociada $A$:

- **Espacio nulo (ker(T))**: conjunto de vectores que se envían al vector nulo.  
- **Espacio imagen (Im(T))**: conjunto de vectores alcanzables mediante $T$.

El **teorema del rango y la nulidad** establece:

$$
\dim(\ker(T)) + \dim(\operatorname{Im}(T)) = \dim(V)
$$

o equivalentemente para una matriz $A \in \mathbb{R}^{m \times n}$:

$$
\operatorname{rango}(A) + \dim(\operatorname{null}(A)) = n
$$

### Aplicaciones

- Determinar el número de grados de libertad en un sistema físico o algebraico.  
- Representación de datos en espacios reducidos (análisis de componentes principales).  
- Cálculo del rango de una matriz y de soluciones de sistemas de ecuaciones lineales.  
- Diseño de algoritmos de compresión y reconstrucción de información.  
- Estudio de transformaciones lineales y sus invariantes.


## Transformaciones lineales

Una **transformación lineal** (o aplicación lineal) es una función entre dos espacios vectoriales que preserva las operaciones de suma y multiplicación escalar.  
Constituyen el núcleo del álgebra lineal y del [Cálculo numérico](/mates/c-lculo-num-rico/), ya que describen cómo los vectores y las estructuras lineales se transforman bajo cambios o proyecciones.

### Definición formal

Sea $T: V \to W$ una aplicación entre dos espacios vectoriales sobre el mismo cuerpo $\mathbb{K}$.  
Decimos que $T$ es **lineal** si para todo $\mathbf{u}, \mathbf{v} \in V$ y $a, b \in \mathbb{K}$:

$$
T(a\mathbf{u} + b\mathbf{v}) = aT(\mathbf{u}) + bT(\mathbf{v})
$$

Esto implica que $T$ conserva:
- La **suma vectorial**
- La **multiplicación por escalar**

### Ejemplos de transformaciones lineales

1. **Identidad:**  
   $T(\mathbf{v}) = \mathbf{v}$
2. **Cero:**  
   $T(\mathbf{v}) = \mathbf{0}$
3. **Proyección sobre un eje:**  
   $T(x,y) = (x,0)$
4. **Rotación en el plano:**  
   $$
   T(x,y) = 
   \begin{bmatrix}
   \cos\theta & -\sin\theta \\
   \sin\theta & \cos\theta
   \end{bmatrix}
   \begin{bmatrix}x \\ y\end{bmatrix}
   $$
5. **Derivación:**  
   En el espacio de funciones $P_n$, $T(f) = f'$
6. **Multiplicación matricial:**  
   $T(\mathbf{x}) = A\mathbf{x}$, donde $A$ es una matriz.

### Matriz asociada a una transformación lineal

Toda transformación lineal $T: V \to W$ puede representarse mediante una matriz $A$ si se eligen bases $\mathcal{B}_V$ y $\mathcal{B}_W$ para ambos espacios:

$$
[T]_{\mathcal{B}_W, \mathcal{B}_V} = A
$$

tal que:

$$
[T(\mathbf{v})]_{\mathcal{B}_W} = A [\mathbf{v}]_{\mathcal{B}_V}
$$

En el caso particular $V = W = \mathbb{R}^n$ con las bases canónicas, $T(\mathbf{x}) = A\mathbf{x}$.

### Composición de transformaciones

Si $T_1: V \to W$ y $T_2: W \to U$ son transformaciones lineales, su composición $T_2 \circ T_1: V \to U$ también es lineal, y su matriz asociada es:

$$
[T_2 \circ T_1] = [T_2] [T_1]
$$

### Núcleo e imagen

- **Núcleo (o espacio nulo)** de $T$:
  $$
  \ker(T) = \{\mathbf{v} \in V \,|\, T(\mathbf{v}) = \mathbf{0}\}
  $$

- **Imagen (o rango)** de $T$:
  $$
  \operatorname{Im}(T) = \{T(\mathbf{v}) \,|\, \mathbf{v} \in V\}
  $$

Ambos son **subespacios vectoriales** de $V$ y $W$, respectivamente.

### Teorema del rango y la nulidad

Sea $T: V \to W$ una transformación lineal, entonces:

$$
\dim(\ker(T)) + \dim(\operatorname{Im}(T)) = \dim(V)
$$

Este resultado permite calcular la **dimensión del espacio imagen** o **rango** a partir de la **dimensión del núcleo** y viceversa.

### Inyectividad, sobreyectividad y biyectividad

- **Inyectiva:**  
  $T(\mathbf{u}) = T(\mathbf{v}) \implies \mathbf{u} = \mathbf{v}$  
  ⇔ $\ker(T) = \{\mathbf{0}\}$

- **Sobreyectiva:**  
  La imagen de $T$ es todo $W$:  
  $\operatorname{Im}(T) = W$

- **Biyectiva:**  
  Es inyectiva y sobreyectiva a la vez.  
  En este caso, $T$ tiene **inversa lineal** $T^{-1}: W \to V$, con:
  $$
  T^{-1}(T(\mathbf{v})) = \mathbf{v}
  $$

### Operaciones con transformaciones lineales

- **Suma:**  
  $(T_1 + T_2)(\mathbf{v}) = T_1(\mathbf{v}) + T_2(\mathbf{v})$
- **Multiplicación escalar:**  
  $(aT)(\mathbf{v}) = a \, T(\mathbf{v})$
- **Composición:**  
  $(T_2 \circ T_1)(\mathbf{v}) = T_2(T_1(\mathbf{v}))$

Estas operaciones convierten el conjunto de todas las transformaciones lineales de $V$ en sí mismo, $\operatorname{End}(V)$, en un **espacio vectorial**.

### Propiedades matriciales importantes

Si $T(\mathbf{x}) = A\mathbf{x}$ con $A \in \mathbb{R}^{m \times n}$:

- $\operatorname{Im}(T) = \operatorname{col}(A)$
- $\ker(T) = \operatorname{null}(A)$
- $\operatorname{rango}(T) = \operatorname{rango}(A)$
- $\dim(\ker(T)) + \operatorname{rango}(A) = n$

### Transformaciones lineales en geometría

En el plano o el espacio, las transformaciones lineales modelan operaciones geométricas:

- **Escalado:** cambia la magnitud (tamaño).
- **Rotación:** cambia la dirección.
- **Reflexión:** invierte la orientación.
- **Proyección:** reduce la dimensión (por ejemplo, proyectar sobre un eje).
- **Cizalla (shear):** deforma un objeto manteniendo áreas o volúmenes.

Ejemplo de rotación en $\mathbb{R}^2$:

$$
A = 
\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
$$

Ejemplo de proyección sobre el eje $x$:

$$
A = 
\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}
$$

### Transformaciones lineales y matrices

Cada matriz $A \in \mathbb{R}^{m \times n}$ define una transformación lineal $T_A: \mathbb{R}^n \to \mathbb{R}^m$ dada por:

$$
T_A(\mathbf{x}) = A\mathbf{x}
$$

Por tanto, el estudio de las transformaciones lineales y las matrices es equivalente:
- El rango de $T_A$ coincide con el rango de $A$.
- La composición de transformaciones se traduce en la multiplicación de matrices.
- El cambio de base en $V$ o $W$ se traduce en una transformación de semejanza sobre $A$.

### Diagonalización y autovalores

Una transformación lineal $T: V \to V$ es **diagonalizable** si existe una base de vectores propios $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ tal que su matriz asociada es diagonal:

$$
[T]_{\mathcal{B&#125;&#125; = 
\begin{bmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n
\end{bmatrix}
$$

donde $\lambda_i$ son los **autovalores** (o valores propios) y los vectores correspondientes son los **autovectores**.

Esto permite interpretar $T$ como un escalado independiente en cada dirección propia.

### Aplicaciones

- Representación y análisis de transformaciones geométricas.  
- Modelado de sistemas de ecuaciones lineales y [Cálculo numérico](/mates/c-lculo-num-rico/).  
- Cálculo de autovalores y autovectores para estudiar estabilidad o modos propios.  
- Procesamiento de señales e imágenes (rotación, proyección, compresión).  
- Reducción de dimensionalidad (SVD, PCA).  
- Análisis de sistemas dinámicos lineales.

## Transformaciones lineales y matrices

Las **transformaciones lineales** y las **matrices** están íntimamente relacionadas.  
Toda transformación lineal entre espacios vectoriales de dimensión finita puede representarse mediante una matriz, y toda matriz define una transformación lineal.  
Esta relación permite traducir problemas algebraicos en problemas matriciales y viceversa, lo cual es fundamental en el [Cálculo numérico](/mates/c-lculo-num-rico/) y el álgebra lineal computacional.

---

### Correspondencia entre transformaciones y matrices

Sea $T: \mathbb{R}^n \to \mathbb{R}^m$ una transformación lineal.  
Por definición, se cumple:

$$
T(a\mathbf{u} + b\mathbf{v}) = aT(\mathbf{u}) + bT(\mathbf{v})
$$

Dado que $T$ está completamente determinado por su acción sobre una **base canónica** de $\mathbb{R}^n$:

$$
T(\mathbf{e}_i) = \mathbf{a}_i \quad \text{para } i = 1, 2, \dots, n
$$

podemos construir una **matriz asociada** $A \in \mathbb{R}^{m \times n}$ cuyas columnas son las imágenes de los vectores base:

$$
A = 
\begin{bmatrix}
| & | & & | \\
T(\mathbf{e}_1) & T(\mathbf{e}_2) & \cdots & T(\mathbf{e}_n) \\
| & | & & |
\end{bmatrix}
$$

De este modo, para cualquier vector $\mathbf{x} \in \mathbb{R}^n$:

$$
T(\mathbf{x}) = A\mathbf{x}
$$

---

### Interpretación geométrica

Cada matriz $A$ define una transformación lineal que:
- **Escala**, **rota**, **refleja**, **proyecta** o **cizalla** el espacio vectorial.  
- Modifica la **longitud**, **orientación** o **dimensión efectiva** de los vectores.

Ejemplos:

1. **Rotación en el plano:**
   $$
   A = 
   \begin{bmatrix}
   \cos\theta & -\sin\theta \\
   \sin\theta & \cos\theta
   \end{bmatrix}
   $$
   $T(\mathbf{x}) = A\mathbf{x}$ rota los vectores un ángulo $\theta$.

2. **Proyección sobre el eje $x$:**
   $$
   A = 
   \begin{bmatrix}
   1 & 0 \\
   0 & 0
   \end{bmatrix}
   $$
   $T(x, y) = (x, 0)$

3. **Reflexión respecto al eje $y$:**
   $$
   A = 
   \begin{bmatrix}
   -1 & 0 \\
   0 & 1
   \end{bmatrix}
   $$

---

### Matriz asociada en distintas bases

Si se eligen bases $\mathcal{B}_V = \{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ para $V$ y  
$\mathcal{B}_W = \{\mathbf{w}_1, \dots, \mathbf{w}_m\}$ para $W$, la matriz asociada a $T$ depende de dichas bases.

Se define:

$$
[T]_{\mathcal{B}_W, \mathcal{B}_V} = 
\begin{bmatrix}
| & | & & | \\
[T(\mathbf{v}_1)]_{\mathcal{B}_W} & [T(\mathbf{v}_2)]_{\mathcal{B}_W} & \cdots & [T(\mathbf{v}_n)]_{\mathcal{B}_W} \\
| & | & & |
\end{bmatrix}
$$

De manera que para todo $\mathbf{x} \in V$:

$$
[T(\mathbf{x})]_{\mathcal{B}_W} = [T]_{\mathcal{B}_W, \mathcal{B}_V} [\mathbf{x}]_{\mathcal{B}_V}
$$

---

### Cambio de base y semejanza matricial

Cuando se cambia la base en $V$, la matriz asociada a $T$ se transforma según:

$$
[T]_{\mathcal{B}'} = P^{-1} [T]_{\mathcal{B&#125;&#125; P
$$

donde $P$ es la **matriz de cambio de base** entre $\mathcal{B}$ y $\mathcal{B}'$.

Dos matrices $A$ y $B$ son **semejantes** si existe una matriz invertible $P$ tal que:

$$
B = P^{-1} A P
$$

Esto significa que ambas representan la **misma transformación lineal** pero en **bases diferentes**.

---

### Composición y producto matricial

Si $T_1: \mathbb{R}^n \to \mathbb{R}^m$ y $T_2: \mathbb{R}^m \to \mathbb{R}^p$ son transformaciones lineales con matrices asociadas $A$ y $B$:

$$
T_1(\mathbf{x}) = A\mathbf{x}, \quad T_2(\mathbf{y}) = B\mathbf{y}
$$

entonces la composición $T_2 \circ T_1$ tiene como matriz:

$$
[B A]
$$

Por tanto:

$$
(T_2 \circ T_1)(\mathbf{x}) = B(A\mathbf{x}) = (BA)\mathbf{x}
$$

La **composición de transformaciones** corresponde al **producto de matrices**, preservando el orden.

---

### Núcleo e imagen a través de la matriz

Dada $T(\mathbf{x}) = A\mathbf{x}$:

- **Núcleo:**
  $$
  \ker(T) = \{\mathbf{x} \in \mathbb{R}^n \,|\, A\mathbf{x} = \mathbf{0}\}
  $$

- **Imagen:**
  $$
  \operatorname{Im}(T) = \{A\mathbf{x} \,|\, \mathbf{x} \in \mathbb{R}^n\} = \operatorname{col}(A)
  $$

- **Dimensiones:**
  $$
  \dim(\ker(T)) + \dim(\operatorname{Im}(T)) = n
  $$

Este es el **teorema del rango y la nulidad**, que vincula las propiedades estructurales de la transformación con las de su matriz.

---

### Inversa de una transformación lineal

Una transformación $T: \mathbb{R}^n \to \mathbb{R}^n$ tiene **inversa** si y solo si su matriz $A$ es **invertible**, es decir:

$$
\det(A) \neq 0
$$

y

$$
A^{-1}A = AA^{-1} = I
$$

En este caso, la transformación inversa está dada por:

$$
T^{-1}(\mathbf{x}) = A^{-1}\mathbf{x}
$$

---

### Transformaciones diagonales y autovalores

Cuando existe una base de autovectores de $T$, la matriz asociada es **diagonalizable**:

$$
[T]_{\mathcal{B&#125;&#125; = P D P^{-1}
$$

donde:
- $D$ es una matriz **diagonal** con los **autovalores** $\lambda_i$ de $T$.
- Las columnas de $P$ son los **autovectores** correspondientes.

Esto permite interpretar $T$ como un escalado independiente en cada dirección propia.

---

### Resumen conceptual

| Concepto | Transformación lineal | Matriz asociada |
|-----------|----------------------|-----------------|
| Definición | $T: V \to W$, lineal | $A \in \mathbb{R}^{m \times n}$ |
| Aplicación | $T(\mathbf{x})$ | $A\mathbf{x}$ |
| Composición | $T_2 \circ T_1$ | $B A$ |
| Núcleo | $\ker(T)$ | $\{\mathbf{x} : A\mathbf{x} = 0\}$ |
| Imagen | $\operatorname{Im}(T)$ | $\operatorname{col}(A)$ |
| Inversa | $T^{-1}$ | $A^{-1}$ |
| Cambio de base | $P^{-1} A P$ | Matrices semejantes |

---

### Aplicaciones

- Representación de transformaciones geométricas y físicas.  
- Resolución de sistemas de ecuaciones lineales.  
- Diagonalización y autovalores para análisis de estabilidad y modos propios.  
- Descomposición en valores singulares (SVD) para reducción de dimensionalidad.  
- Implementación numérica en cálculo matricial y métodos numéricos.

## Forma normal de una transformación lineal

La **forma normal** de una transformación lineal es una representación simplificada de su matriz asociada, obtenida mediante un cambio de base apropiado.  
Su objetivo es expresar la transformación de la manera **más sencilla posible**, conservando sus propiedades estructurales (autovalores, rango, nulidad, etc.).

Esta forma permite analizar la naturaleza de la transformación y facilita el cálculo de potencias, inversas, exponentiales y otras operaciones matriciales.

---

### Idea general

Si $T: V \to V$ es una transformación lineal, su representación matricial depende de la base elegida:

$$
[T]_{\mathcal{B}'} = P^{-1} [T]_{\mathcal{B&#125;&#125; P
$$

donde $P$ es la matriz de cambio de base.  
Encontrar una **forma normal** consiste en hallar una base que transforme la matriz de $T$ en una forma canónica más simple, como **diagonal**, **triangular**, o **canónica de Jordan**.

---

### Tipos principales de formas normales

#### 1. Forma diagonal

Una transformación $T$ es **diagonalizable** si existe una base de autovectores $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ tal que su matriz asociada es diagonal:

$$
[T]_{\mathcal{B&#125;&#125; =
\begin{bmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n
\end{bmatrix}
$$

donde los $\lambda_i$ son los **autovalores** de $T$.

**Condición de diagonalización:**
$T$ es diagonalizable ⇔ el número total de autovectores linealmente independientes = dimensión de $V$.

**Interpretación:**
Cada autovector $\mathbf{v}_i$ es escalado por $\lambda_i$:
$$
T(\mathbf{v}_i) = \lambda_i \mathbf{v}_i
$$

---

#### 2. Forma triangular superior (Forma de Schur o de Jordan)

Si no es posible diagonalizar $T$, se puede representar mediante una matriz **triangular superior**.  
Existen dos versiones principales:

##### a) Forma de Schur (para matrices normales o complejas)

Para cualquier matriz cuadrada $A \in \mathbb{C}^{n \times n}$, existe una base ortonormal tal que:

$$
Q^{-1} A Q = R
$$

donde $R$ es **triangular superior**, con los autovalores de $A$ en la diagonal.  
Si $A$ es **normal** (es decir, $AA^* = A^*A$), entonces $R$ es diagonal.

##### b) Forma canónica de Jordan

Toda transformación lineal $T$ sobre $\mathbb{C}$ puede representarse en una base especial donde su matriz tiene la forma:

$$
J =
\begin{bmatrix}
J_{1} & 0 & \cdots & 0 \\
0 & J_{2} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & J_{k}
\end{bmatrix}
$$

donde cada $J_i$ es un **bloque de Jordan** asociado a un autovalor $\lambda_i$:

$$
J_i =
\begin{bmatrix}
\lambda_i & 1 & 0 & \cdots & 0 \\
0 & \lambda_i & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_i & 1 \\
0 & 0 & \cdots & 0 & \lambda_i
\end{bmatrix}
$$

Cada bloque representa un **subespacio generalizado** donde $T$ no puede diagonalizarse pero sigue teniendo una estructura repetitiva.

---

### 3. Forma canónica por semejanza

Dos transformaciones $T_1$ y $T_2$ son **semejantes** si existen matrices invertibles $P$ tales que:

$$
[T_2] = P^{-1} [T_1] P
$$

Ambas representan la **misma transformación lineal** en diferentes bases.  
La **forma normal** busca un representante canónico dentro de esta clase de semejanza.

---

### 4. Forma canónica racional (o de Frobenius)

Cuando se trabaja sobre cuerpos que no son algebraicamente cerrados (por ejemplo $\mathbb{R}$), no siempre es posible obtener la forma de Jordan.  
En este caso se utiliza la **forma racional**, basada en los **polinomios invariantes** de la matriz.

Para una matriz $A$, existe una matriz invertible $P$ tal que:

$$
P^{-1} A P = 
\begin{bmatrix}
C(p_1(x)) & 0 & \cdots & 0 \\
0 & C(p_2(x)) & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & C(p_k(x))
\end{bmatrix}
$$

donde cada $C(p_i(x))$ es la **matriz compañera** de un polinomio invariante $p_i(x)$.

---

### Propiedades conservadas en la forma normal

Al aplicar un cambio de base, ciertas propiedades fundamentales de la transformación **no cambian**:

- Autovalores  
- Multiplicidad algebraica y geométrica  
- Determinante  
- Traza  
- Rango  
- Dimensión del núcleo  
- Polinomio característico

Por eso, la forma normal permite estudiar $T$ sin alterar su comportamiento esencial.

---

### Resumen comparativo

| Tipo de forma            | Condiciones                          | Estructura               | Campo necesario             |
| ------------------------ | ------------------------------------ | ------------------------ | --------------------------- |
| **Diagonal**             | $n$ autovectores independientes      | Diagonal con autovalores | $\mathbb{R}$ o $\mathbb{C}$ |
| **Schur**                | Siempre posible (sobre $\mathbb{C}$) | Triangular superior      | $\mathbb{C}$                |
| **Jordan**               | Siempre posible (sobre $\mathbb{C}$) | Bloques Jordan           | $\mathbb{C}$                |
| **Racional (Frobenius)** | Siempre posible                      | Bloques compañera        | Cualquier cuerpo            |

---

### Interpretación geométrica

- La **forma diagonal** representa transformaciones donde cada dirección base es un **autoeje independiente**.  
- La **forma de Jordan** muestra cómo la transformación **mezcla** o **acopla** subespacios que comparten autovalores.  
- La **forma racional** codifica el comportamiento algebraico mediante polinomios, sin necesidad de autovectores reales.

---

### Aplicaciones

- Estudio del comportamiento dinámico de sistemas lineales.  
- Cálculo de $T^k$, $e^{Tt}$ o funciones matriciales.  
- Análisis de estabilidad en ecuaciones diferenciales lineales.  
- Compresión de información estructural en transformaciones de gran dimensión.  
- Implementación eficiente de algoritmos en [Cálculo numérico](/mates/c-lculo-num-rico/).

## Valores y vectores propios

Los **valores propios** (o **autovalores**) y **vectores propios** (o **autovectores**) son conceptos fundamentales en el estudio de las transformaciones lineales y las matrices.  
Permiten comprender cómo una transformación actúa sobre ciertas direcciones del espacio que permanecen invariantes, excepto por un factor de escala.

---

### Definición

Sea $T: V \to V$ una transformación lineal sobre un espacio vectorial $V$.  
Un **valor propio** $\lambda \in \mathbb{K}$ y un **vector propio** no nulo $\mathbf{v} \in V$ satisfacen:

$$
T(\mathbf{v}) = \lambda \mathbf{v}
$$

En términos matriciales, si $A$ representa a $T$:

$$
A\mathbf{v} = \lambda \mathbf{v}
$$

Esto significa que la acción de $A$ sobre $\mathbf{v}$ **no cambia su dirección**, solo su magnitud (escalada por $\lambda$).

---

### Ecuación característica

Reordenando la ecuación anterior:

$$
(A - \lambda I)\mathbf{v} = 0
$$

Para que exista un vector no nulo $\mathbf{v}$, el sistema debe ser **singular**, es decir:

$$
\det(A - \lambda I) = 0
$$

Esta ecuación se denomina **ecuación característica**, y su solución en $\lambda$ proporciona los **valores propios** de $A$.

---

### Polinomio característico

El **polinomio característico** de una matriz cuadrada $A \in \mathbb{K}^{n \times n}$ se define como:

$$
p_A(\lambda) = \det(A - \lambda I)
$$

Es un polinomio de grado $n$ cuyos ceros son los autovalores de $A$.

Ejemplo:

Si
$$
A = 
\begin{bmatrix}
2 & 1 \\
1 & 2
\end{bmatrix}
$$
entonces
$$
p_A(\lambda) = \det
\begin{bmatrix}
2 - \lambda & 1 \\
1 & 2 - \lambda
\end{bmatrix}
= (2 - \lambda)^2 - 1 = \lambda^2 - 4\lambda + 3
$$
y sus autovalores son $\lambda_1 = 3$, $\lambda_2 = 1$.

---

### Cálculo de los vectores propios

Una vez hallados los valores propios, se determinan los **vectores propios** resolviendo:

$$
(A - \lambda I)\mathbf{v} = 0
$$

El conjunto de todas las soluciones (junto con el vector nulo) forma el **espacio propio** asociado a $\lambda$:

$$
E_\lambda = \ker(A - \lambda I)
$$

donde

$$
\dim(E_\lambda) = \text{multiplicidad geométrica de } \lambda
$$

---

### Multiplicidades

- **Multiplicidad algebraica** ($m_a$): número de veces que $\lambda$ aparece como raíz del polinomio característico.  
- **Multiplicidad geométrica** ($m_g$): dimensión del espacio propio $E_\lambda$.

Siempre se cumple:
$$
1 \leq m_g \leq m_a
$$

Una matriz es **diagonalizable** si y solo si para cada autovalor $\lambda$:
$$
m_g = m_a
$$

---

### Propiedades fundamentales

1. La **traza** de $A$ es la suma de sus autovalores (contando multiplicidades):
   $$
   \operatorname{tr}(A) = \sum_{i=1}^n \lambda_i
   $$

2. El **determinante** de $A$ es el producto de sus autovalores:
   $$
   \det(A) = \prod_{i=1}^n \lambda_i
   $$

3. Los **autovalores de $A^T$** son los mismos que los de $A$.

4. Si $A$ es **simétrica**, todos sus autovalores son **reales** y los autovectores correspondientes pueden elegirse **ortonormales**.

---

### Diagonalización

Una matriz $A$ es **diagonalizable** si existe una matriz invertible $P$ y una matriz diagonal $D$ tales que:

$$
A = P D P^{-1}
$$

donde:
- Las **columnas de $P$** son los **autovectores** de $A$.
- La **diagonal de $D$** contiene los **autovalores** correspondientes.

En esta forma:

$$
D =
\begin{bmatrix}
\lambda_1 & 0 & \cdots & 0 \\
0 & \lambda_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_n
\end{bmatrix}
$$

**Interpretación:**  
Cada autovector $\mathbf{v}_i$ es una dirección en la que la transformación $A$ actúa como una **escala** $\lambda_i$.

---

### Autovalores y autovectores complejos

Aunque $A$ tenga entradas reales, sus autovalores pueden ser **complejos**.  
Por ejemplo, una rotación en el plano tiene autovalores $e^{\pm i\theta}$.  
En estos casos, el análisis se realiza en $\mathbb{C}^n$.

---

### Ejemplo numérico

Sea
$$
A =
\begin{bmatrix}
4 & -2 \\
1 & 1
\end{bmatrix}
$$

1. Ecuación característica:
   $$
   \det(A - \lambda I) = 
   \begin{vmatrix}
   4 - \lambda & -2 \\
   1 & 1 - \lambda
   \end{vmatrix}
   = (4 - \lambda)(1 - \lambda) + 2 = \lambda^2 - 5\lambda + 6 = 0
   $$
   Autovalores: $\lambda_1 = 2, \lambda_2 = 3$

2. Para $\lambda_1 = 2$:
   $$
   (A - 2I)\mathbf{v} =
   \begin{bmatrix}
   2 & -2 \\
   1 & -1
   \end{bmatrix}
   \mathbf{v} = 0
   \Rightarrow \mathbf{v}_1 = 
   \begin{bmatrix}1 \\ 1\end{bmatrix}
   $$

3. Para $\lambda_2 = 3$:
   $$
   (A - 3I)\mathbf{v} =
   \begin{bmatrix}
   1 & -2 \\
   1 & -2
   \end{bmatrix}
   \mathbf{v} = 0
   \Rightarrow \mathbf{v}_2 = 
   \begin{bmatrix}2 \\ 1\end{bmatrix}
   $$

4. Matriz de autovectores:
   $$
   P =
   \begin{bmatrix}
   1 & 2 \\
   1 & 1
   \end{bmatrix}, \quad
   D =
   \begin{bmatrix}
   2 & 0 \\
   0 & 3
   \end{bmatrix}
   $$

   Verificación:
   $$
   A = P D P^{-1}
   $$

---

### Interpretación geométrica

Los **autovectores** representan direcciones que no cambian bajo la acción de $A$.  
Los **autovalores** indican cuánto se **escala** o **invierte** esa dirección.

- Si $\lambda > 1$: el vector se alarga.  
- Si $0 < \lambda < 1$: el vector se acorta.  
- Si $\lambda < 0$: el vector invierte su dirección.  
- Si $|\lambda| = 1$: el vector conserva su magnitud (rotación o reflexión).

---

### Aplicaciones

- Análisis de estabilidad en sistemas dinámicos.  
- Compresión y reducción de dimensiones (PCA, SVD).  
- Resolución de ecuaciones diferenciales lineales.  
- Estudio de vibraciones, modos normales y oscilaciones.  
- Diagonalización y formas normales de matrices.  
- Análisis espectral en [Cálculo numérico](/mates/c-lculo-num-rico/) y física matemática.

## Producto interno y ortogonalidad en espacios vectoriales sobre ℝ

El **producto interno** es una herramienta que extiende el concepto de **multiplicación escalar** y **ángulo** entre vectores a espacios vectoriales más generales.  
Permite definir nociones de **longitud**, **ángulo**, **proyección** y **ortogonalidad**, fundamentales en el análisis de espacios vectoriales, transformaciones lineales y álgebra lineal aplicada.

---

### Definición de producto interno

Sea $V$ un espacio vectorial sobre $\mathbb{R}$.  
Un **producto interno** en $V$ es una aplicación

$$
\langle \cdot , \cdot \rangle : V \times V \to \mathbb{R}
$$

que cumple, para todo $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$ y $\alpha \in \mathbb{R}$:

1. **Linealidad en el primer argumento**  
   $$
   \langle \alpha \mathbf{u} + \mathbf{v}, \mathbf{w} \rangle = \alpha \langle \mathbf{u}, \mathbf{w} \rangle + \langle \mathbf{v}, \mathbf{w} \rangle
   $$

2. **Simetría**  
   $$
   \langle \mathbf{u}, \mathbf{v} \rangle = \langle \mathbf{v}, \mathbf{u} \rangle
   $$

3. **Positividad definida**  
   $$
   \langle \mathbf{v}, \mathbf{v} \rangle \ge 0 \quad \text{y} \quad \langle \mathbf{v}, \mathbf{v} \rangle = 0 \iff \mathbf{v} = \mathbf{0}
   $$

---

### Ejemplo en $\mathbb{R}^n$

El producto interno canónico (o **producto punto**) se define como:

$$
\langle \mathbf{u}, \mathbf{v} \rangle = \sum_{i=1}^{n} u_i v_i = \mathbf{u}^T \mathbf{v}
$$

Para vectores en $\mathbb{R}^2$:
$$
\langle (x_1, y_1), (x_2, y_2) \rangle = x_1x_2 + y_1y_2
$$

---

### Norma inducida por el producto interno

El producto interno induce una **norma** en $V$:

$$
\|\mathbf{v}\| = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}
$$

que representa la **longitud** o **magnitud** del vector $\mathbf{v}$.

---

### Ángulo entre vectores

El **ángulo** $\theta$ entre dos vectores no nulos $\mathbf{u}, \mathbf{v} \in V$ se define mediante:

$$
\cos(\theta) = \frac{\langle \mathbf{u}, \mathbf{v} \rangle}{\|\mathbf{u}\| \, \|\mathbf{v}\|}
$$

Por tanto:

$$
\langle \mathbf{u}, \mathbf{v} \rangle = \|\mathbf{u}\| \, \|\mathbf{v}\| \cos(\theta)
$$

---

### Ortogonalidad

Dos vectores $\mathbf{u}, \mathbf{v} \in V$ son **ortogonales** si:

$$
\langle \mathbf{u}, \mathbf{v} \rangle = 0
$$

Si además $\|\mathbf{u}\| = \|\mathbf{v}\| = 1$, se dice que son **ortonormales**.

Un conjunto de vectores $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ es:
- **Ortogonal** si $\langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0$ para todo $i \neq j$.
- **Ortonormal** si además cada vector tiene norma 1.

---

### Propiedades de la ortogonalidad

1. Si $\mathbf{u}, \mathbf{v}$ son ortogonales, entonces:
   $$
   \|\mathbf{u} + \mathbf{v}\|^2 = \|\mathbf{u}\|^2 + \|\mathbf{v}\|^2
   $$
   (Teorema de Pitágoras)

2. En un conjunto ortogonal no nulo, los vectores son linealmente independientes.

3. En $\mathbb{R}^n$, cualquier conjunto ortogonal puede ser normalizado para formar una **base ortonormal**.

---

### Proyección ortogonal

La **proyección ortogonal** de un vector $\mathbf{v}$ sobre otro $\mathbf{u} \neq 0$ se define como:

$$
\operatorname{proj}_{\mathbf{u&#125;&#125;(\mathbf{v}) = 
\frac{\langle \mathbf{v}, \mathbf{u} \rangle}{\langle \mathbf{u}, \mathbf{u} \rangle} \, \mathbf{u}
$$

El **componente ortogonal** de $\mathbf{v}$ respecto a $\mathbf{u}$ es:

$$
\mathbf{v}_\perp = \mathbf{v} - \operatorname{proj}_{\mathbf{u&#125;&#125;(\mathbf{v})
$$

y satisface:
$$
\langle \mathbf{v}_\perp, \mathbf{u} \rangle = 0
$$

---

### Ortogonalización de Gram-Schmidt

Dado un conjunto linealmente independiente $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\}$, el **proceso de Gram-Schmidt** construye un conjunto **ortonormal** $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_n\}$ como:

1. $\mathbf{u}_1 = \frac{\mathbf{v}_1}{\|\mathbf{v}_1\|}$
2. Para $k \ge 2$:
   $$
   \mathbf{w}_k = \mathbf{v}_k - \sum_{i=1}^{k-1} \langle \mathbf{v}_k, \mathbf{u}_i \rangle \mathbf{u}_i
   $$
   $$
   \mathbf{u}_k = \frac{\mathbf{w}_k}{\|\mathbf{w}_k\|}
   $$

El conjunto $\{\mathbf{u}_i\}$ es una **base ortonormal** del subespacio generado por $\{\mathbf{v}_i\}$.

---

### Subespacios ortogonales

Sea $W \subseteq V$ un subespacio.  
El **complemento ortogonal** de $W$ se define como:

$$
W^\perp = \{\mathbf{v} \in V \mid \langle \mathbf{v}, \mathbf{w} \rangle = 0 \ \forall \mathbf{w} \in W\}
$$

Propiedades:

1. $W \cap W^\perp = \{\mathbf{0}\}$
2. Si $V$ es de dimensión finita:
   $$
   V = W \oplus W^\perp
   $$
3. Si $B = \{\mathbf{u}_1, \dots, \mathbf{u}_k\}$ es una base ortonormal de $W$:
   $$
   \operatorname{proj}_W(\mathbf{v}) = \sum_{i=1}^{k} \langle \mathbf{v}, \mathbf{u}_i \rangle \mathbf{u}_i
   $$

---

### Matrices ortogonales

Una matriz cuadrada $Q \in \mathbb{R}^{n \times n}$ es **ortogonal** si:

$$
Q^T Q = QQ^T = I
$$

Propiedades:

- Las columnas (y filas) de $Q$ son **ortonormales**.
- $Q^{-1} = Q^T$
- La multiplicación por $Q$ **preserva longitudes y ángulos**:
  $$
  \|Q\mathbf{v}\| = \|\mathbf{v}\|, \quad \langle Q\mathbf{u}, Q\mathbf{v} \rangle = \langle \mathbf{u}, \mathbf{v} \rangle
  $$

---

### Aplicaciones

- Construcción de **bases ortonormales** en espacios vectoriales.  
- **Proyecciones** en subespacios y **mínimos cuadrados**.  
- Análisis geométrico y álgebra matricial (rotaciones, reflexiones, simetrías).  
- Descomposición QR y métodos numéricos.  
- Fundamento para la Transformada de Fourier y la SVD.

## Bases ortogonales

Una **base ortogonal** en un espacio vectorial real con producto interno es un conjunto de vectores mutuamente ortogonales que generan el espacio.  
Si además cada vector tiene norma unitaria, se denomina **base ortonormal**.  
Estas bases simplifican enormemente los cálculos y son esenciales en álgebra lineal, análisis numérico y geometría vectorial.

---

### Definición

Sea $V$ un espacio vectorial sobre $\mathbb{R}$ con producto interno $\langle \cdot , \cdot \rangle$.  
Un conjunto de vectores $B = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_n\} \subset V$ es una **base ortogonal** si:

1. $B$ es una **base** de $V$, es decir, los vectores son linealmente independientes y generan $V$.  
2. Los vectores son **ortogonales** entre sí:
   $$
   \langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0 \quad \text{para todo } i \neq j
   $$

Si además:
$$
\|\mathbf{v}_i\| = 1 \quad \forall i
$$
entonces $B$ es una **base ortonormal**.

---

### Propiedades fundamentales

1. Si $B = \{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ es ortogonal, todo vector $\mathbf{x} \in V$ puede escribirse como:
   $$
   \mathbf{x} = \sum_{i=1}^n c_i \mathbf{v}_i
   $$

   donde los coeficientes se calculan fácilmente por:
   $$
   c_i = \frac{\langle \mathbf{x}, \mathbf{v}_i \rangle}{\langle \mathbf{v}_i, \mathbf{v}_i \rangle}
   $$

2. Si $B$ es ortonormal:
   $$
   c_i = \langle \mathbf{x}, \mathbf{v}_i \rangle
   $$

   En este caso, las coordenadas de $\mathbf{x}$ respecto a $B$ son directamente sus **proyecciones** sobre los vectores de la base.

3. El cálculo de la norma se simplifica:
   $$
   \|\mathbf{x}\|^2 = \sum_{i=1}^n |c_i|^2
   $$

---

### Construcción de una base ortogonal

Dado un conjunto linealmente independiente $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$, puede construirse una base ortogonal aplicando el **proceso de Gram-Schmidt**:

1. $\mathbf{u}_1 = \mathbf{v}_1$
2. Para $k \ge 2$:
   $$
   \mathbf{u}_k = \mathbf{v}_k - \sum_{i=1}^{k-1} 
   \frac{\langle \mathbf{v}_k, \mathbf{u}_i \rangle}{\langle \mathbf{u}_i, \mathbf{u}_i \rangle}
   \mathbf{u}_i
   $$

El conjunto $\{\mathbf{u}_1, \dots, \mathbf{u}_n\}$ es ortogonal.  
Si además se normaliza cada vector:
$$
\mathbf{e}_i = \frac{\mathbf{u}_i}{\|\mathbf{u}_i\|}
$$
se obtiene una **base ortonormal**.

---

### Ejemplo

Sea el conjunto de vectores en $\mathbb{R}^3$:

$$
\mathbf{v}_1 = (1, 1, 0), \quad
\mathbf{v}_2 = (1, 0, 1)
$$

1. Primer vector:
   $$
   \mathbf{u}_1 = \mathbf{v}_1 = (1, 1, 0)
   $$

2. Segundo vector:
   $$
   \mathbf{u}_2 = \mathbf{v}_2 - 
   \frac{\langle \mathbf{v}_2, \mathbf{u}_1 \rangle}{\langle \mathbf{u}_1, \mathbf{u}_1 \rangle}
   \mathbf{u}_1
   $$

   Calculamos:
   $$
   \langle \mathbf{v}_2, \mathbf{u}_1 \rangle = 1(1) + 0(1) + 1(0) = 1, \quad
   \langle \mathbf{u}_1, \mathbf{u}_1 \rangle = 1^2 + 1^2 + 0^2 = 2
   $$

   Entonces:
   $$
   \mathbf{u}_2 = (1, 0, 1) - \frac{1}{2}(1, 1, 0) = \left(\frac{1}{2}, -\frac{1}{2}, 1\right)
   $$

3. Normalizamos:
   $$
   \mathbf{e}_1 = \frac{1}{\sqrt{2&#125;&#125;(1, 1, 0), \quad
   \mathbf{e}_2 = \frac{1}{\sqrt{\frac{3}{2&#125;&#125;&#125;\left(\frac{1}{2}, -\frac{1}{2}, 1\right) = \frac{1}{\sqrt{6&#125;&#125;(1, -1, 2)
   $$

Por tanto, la base ortonormal es:
$$
B = \left\{ \frac{1}{\sqrt{2&#125;&#125;(1, 1, 0), \, \frac{1}{\sqrt{6&#125;&#125;(1, -1, 2) \right\}
$$

---

### Ventajas del uso de bases ortogonales

- Simplifican el cálculo de **proyecciones** y **coordenadas**.  
- Hacen más eficiente el **cálculo numérico** (reducción de errores de redondeo).  
- Facilitan la **diagonalización** de matrices simétricas.  
- Permiten representar subespacios mediante **proyecciones ortogonales**.  
- Son base para algoritmos como la Descomposición QR o la Transformada de Fourier.

---

### Propiedades adicionales

1. Si $\{\mathbf{u}_1, \dots, \mathbf{u}_n\}$ es ortonormal, entonces:
   $$
   I = [\mathbf{u}_1 \ \mathbf{u}_2 \ \dots \ \mathbf{u}_n]^T [\mathbf{u}_1 \ \mathbf{u}_2 \ \dots \ \mathbf{u}_n]
   $$

   lo que implica que la matriz formada por las columnas de la base es **ortogonal**:
   $$
   Q^T Q = I
   $$

2. Si $Q$ es ortogonal, sus columnas forman una **base ortonormal** de $\mathbb{R}^n$.

3. Toda **rotación** o **reflexión** en $\mathbb{R}^n$ puede representarse como una transformación lineal cuya matriz es ortogonal respecto a la base canónica.

---

### Aplicaciones

- Análisis numérico: métodos QR y SVD.  
- Geometría analítica: descomposición en componentes ortogonales.  
- Procesamiento de señales: bases ortogonales (Fourier, wavelets).  
- Física: descomposición de movimientos y campos vectoriales.  
- Álgebra lineal computacional: estabilidad numérica y reducción de matrices.

## Teorema espectral en ℝ

El **teorema espectral** es uno de los resultados más importantes del álgebra lineal y del estudio de las transformaciones lineales y matrices simétricas en espacios vectoriales reales con producto interno.  
Establece que **toda matriz simétrica real es diagonalizable mediante una matriz ortogonal**, lo que implica que sus autovalores son reales y sus autovectores pueden elegirse ortogonales.

---

### Enunciado del teorema espectral

Sea $A \in \mathbb{R}^{n \times n}$ una **matriz simétrica**, es decir:

$$
A^T = A
$$

Entonces existen:

- una **matriz ortogonal** $Q$ ($Q^T Q = I$), y  
- una **matriz diagonal** $D$,

tales que:

$$
A = Q D Q^T
$$

donde:

- Las **columnas de $Q$** son **autovectores ortonormales** de $A$.  
- Los **elementos de la diagonal de $D$** son los **autovalores reales** de $A$.

---

### Consecuencias directas

1. **Los autovalores de una matriz simétrica son reales**:  
   Si $A\mathbf{v} = \lambda \mathbf{v}$ con $\mathbf{v} \neq 0$, entonces
   $$
   \lambda = \frac{\langle A\mathbf{v}, \mathbf{v} \rangle}{\langle \mathbf{v}, \mathbf{v} \rangle} \in \mathbb{R}
   $$

2. **Los autovectores asociados a autovalores distintos son ortogonales**:  
   Si $A\mathbf{v}_i = \lambda_i \mathbf{v}_i$ y $A\mathbf{v}_j = \lambda_j \mathbf{v}_j$ con $\lambda_i \neq \lambda_j$, entonces
   $$
   \langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0
   $$

3. **Existe una base ortonormal de autovectores** de $\mathbb{R}^n$.  
   Esto permite expresar $A$ como una combinación simple de proyecciones ortogonales.

---

### Interpretación geométrica

El teorema espectral indica que toda transformación lineal simétrica en $\mathbb{R}^n$:

- **Preserva la ortogonalidad**,  
- **Escala** los vectores en ciertas direcciones (los **autovectores**),  
- y esas direcciones forman una **base ortonormal** del espacio.

En otras palabras, $A$ actúa como una “**dilatación direccional**”: cada autovector se estira o comprime por su autovalor correspondiente.

---

### Forma diagonal de una matriz simétrica

Si $A = Q D Q^T$, entonces:

$$
D = Q^T A Q
$$

donde $D = \operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_n)$.

Cada autovalor $\lambda_i$ corresponde al autovector $\mathbf{q}_i$, columna de $Q$, y se cumple:

$$
A\mathbf{q}_i = \lambda_i \mathbf{q}_i, \quad \langle \mathbf{q}_i, \mathbf{q}_j \rangle = \delta_{ij}
$$

---

### Descomposición espectral

El teorema puede expresarse también como una **suma ponderada de proyecciones ortogonales**:

$$
A = \sum_{i=1}^{n} \lambda_i \, \mathbf{q}_i \mathbf{q}_i^T
$$

donde $\mathbf{q}_i \mathbf{q}_i^T$ es la **proyección ortogonal** sobre el subespacio generado por $\mathbf{q}_i$.

Esta forma muestra explícitamente cómo $A$ actúa escalando cada dirección propia por su autovalor.

---

### Ejemplo

Sea
$$
A = 
\begin{bmatrix}
4 & 1 \\
1 & 3
\end{bmatrix}
$$
(verificamos que $A^T = A$).

1. **Ecuación característica**:
   $$
   \det(A - \lambda I) = 
   \begin{vmatrix}
   4 - \lambda & 1 \\
   1 & 3 - \lambda
   \end{vmatrix}
   = \lambda^2 - 7\lambda + 11 = 0
   $$
   Autovalores: $\lambda_1 = 5.618, \; \lambda_2 = 1.382$

2. **Autovectores** (normalizados):
   $$
   \mathbf{q}_1 \approx \frac{1}{\sqrt{2&#125;&#125;(0.850, 0.526), \quad
   \mathbf{q}_2 \approx \frac{1}{\sqrt{2&#125;&#125;(-0.526, 0.850)
   $$

3. **Descomposición ortogonal**:
   $$
   Q = 
   \begin{bmatrix}
   0.850 & -0.526 \\
   0.526 & 0.850
   \end{bmatrix}, \quad
   D =
   \begin{bmatrix}
   5.618 & 0 \\
   0 & 1.382
   \end{bmatrix}
   $$

   Comprobamos:
   $$
   A = Q D Q^T
   $$

---

### Generalización a subespacios y operadores

En espacios vectoriales reales de dimensión finita con producto interno, toda **transformación lineal autoadjunta**  
(es decir, $T = T^*$) cumple una versión equivalente del teorema espectral:

$$
T(\mathbf{v}_i) = \lambda_i \mathbf{v}_i, \quad \{\mathbf{v}_i\} \text{ base ortonormal}
$$

y puede escribirse como:
$$
T = \sum_{i=1}^{n} \lambda_i \, P_{E_{\lambda_i&#125;&#125;
$$
donde $P_{E_{\lambda_i&#125;&#125;$ es la proyección ortogonal sobre el espacio propio asociado al autovalor $\lambda_i$.

---

### Propiedades adicionales

1. Si $A$ es simétrica, entonces:
   $$
   A = Q D Q^T = (Q D^{1/2})(Q D^{1/2})^T
   $$
   lo que implica que $A$ es **semidefinida positiva** si y solo si todos los $\lambda_i \ge 0$.

2. La diagonalización ortogonal permite simplificar funciones de matrices:
   $$
   f(A) = Q f(D) Q^T
   $$
   donde $f(D)$ se obtiene aplicando $f$ a cada autovalor.

3. Si $A$ es una matriz de **covarianza**, su descomposición espectral conduce al análisis de **componentes principales (PCA)**.

---

### Aplicaciones

- Diagonalización de matrices simétricas reales.  
- Descomposición espectral en estadística y análisis de datos (PCA).  
- Sistemas de ecuaciones diferenciales lineales con coeficientes simétricos.  
- Análisis numérico: estabilidad y reducción ortogonal.  
- Mecánica cuántica y operadores autoadjuntos.  
- Análisis funcional y formas cuadráticas.

## Geometría de las transformaciones lineales en ℝ

Las **transformaciones lineales** en el espacio real $\mathbb{R}^n$ no solo son expresiones algebraicas, sino que también tienen una **interpretación geométrica** muy clara.  
Cada transformación lineal $T: \mathbb{R}^n \to \mathbb{R}^n$ puede representarse mediante una **matriz** $A$ tal que:

$$
T(\mathbf{x}) = A\mathbf{x}
$$

Esta representación nos permite entender cómo la transformación **modifica la geometría** del espacio: distancias, direcciones, áreas, volúmenes y ángulos.

---

### Transformaciones elementales en ℝ² y ℝ³

Las transformaciones lineales pueden visualizarse mediante sus efectos sobre vectores, figuras o bases.  
Algunos casos fundamentales:

#### 1. **Escalamiento**
Multiplica los vectores por un escalar $k$:

$$
T(\mathbf{x}) = k\mathbf{x}
$$

- Geométricamente: expande ($|k| > 1$) o contrae ($0 < |k| < 1$) el espacio.  
- Si $k < 0$, también invierte la orientación.

Ejemplo:
$$
A = 
\begin{bmatrix}
2 & 0 \\
0 & 2
\end{bmatrix}
$$
duplica todas las longitudes.

---

#### 2. **Reflexión**
Refleja los puntos respecto a un eje, plano o hipersuperficie.

Ejemplo en $\mathbb{R}^2$: reflexión respecto al eje $x$

$$
A = 
\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}
$$

- Geométricamente: cambia el signo de la coordenada $y$.  
- Preserva distancias y ángulos (es una **isometría**).

---

#### 3. **Rotación**
Gira el espacio en torno al origen sin modificar distancias.

En $\mathbb{R}^2$, una rotación por un ángulo $\theta$:

$$
A = 
\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
$$

- Preserva la norma: $\|A\mathbf{x}\| = \|\mathbf{x}\|$.  
- Determinante: $\det(A) = 1$.

En $\mathbb{R}^3$, las rotaciones se representan respecto a un eje (por ejemplo, usando matrices de rotación o cuaterniones).

---

#### 4. **Cizalla (shear)**
Desplaza una dirección proporcionalmente a otra, deformando el espacio sin cambiar áreas (si $\det(A) = 1$).

Ejemplo en $\mathbb{R}^2$:

$$
A = 
\begin{bmatrix}
1 & k \\
0 & 1
\end{bmatrix}
$$

- Las líneas horizontales se mantienen, pero las verticales se inclinan.  
- Ángulos y longitudes no se conservan.

---

#### 5. **Proyección**
Reduce la dimensión del espacio proyectando sobre un subespacio.

Por ejemplo, proyección ortogonal sobre el eje $x$:

$$
A = 
\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}
$$

- Es **idempotente**: $A^2 = A$.  
- Reduce la norma (a menos que el vector ya esté en el subespacio).

---

### Interpretación general en términos de autovalores y autovectores

Sea $A$ la matriz que representa $T$.  
Los **autovalores** y **autovectores** de $A$ describen direcciones y factores de escalado fundamentales:

$$
A\mathbf{v}_i = \lambda_i \mathbf{v}_i
$$

- Cada **autovector** $\mathbf{v}_i$ indica una **dirección invariante** (la transformación no cambia su dirección).  
- El **autovalor** $\lambda_i$ mide cuánto se **alarga o comprime** esa dirección.

Geometría según el valor de $\lambda_i$:

| Tipo de autovalor | Interpretación geométrica |
|:------------------|:--------------------------|
| $\lambda > 1$ | Expansión en esa dirección |
| $0 < \lambda < 1$ | Contracción |
| $\lambda = 1$ | Dirección invariante |
| $\lambda = 0$ | Proyección sobre un subespacio |
| $\lambda < 0$ | Reflexión y posible inversión de orientación |

---

### Caso particular: transformaciones simétricas

Cuando $A = A^T$, la transformación:

- Tiene **autovectores ortogonales**.  
- No rota el espacio: solo **escala** en direcciones mutuamente ortogonales.  
- Puede representarse como una combinación de **proyecciones y escalados**.

Esto se conecta directamente con el Teorema espectral en ℝ:

$$
A = Q D Q^T
$$

donde $D$ contiene los autovalores (escalas) y $Q$ las direcciones ortogonales.

---

### Determinante y orientación

El **determinante** de una matriz $A$ mide el **factor de cambio de volumen** y la **orientación** del espacio bajo $T$:

- $|\det(A)|$: factor por el que se multiplica el área o volumen.  
- $\det(A) > 0$: preserva la orientación.  
- $\det(A) < 0$: invierte la orientación (como un espejo).

Ejemplo:
- Si $\det(A) = 2$, el área se duplica.  
- Si $\det(A) = -1$, el espacio se refleja.

---

### Núcleo e imagen: efectos geométricos

- **Núcleo** $\ker(A)$: conjunto de vectores que se transforman en $0$.  
  → Son las direcciones **aplastadas** o **colapsadas**.

- **Imagen** $\text{Im}(A)$: conjunto de vectores alcanzables como $A\mathbf{x}$.  
  → Es el **subespacio donde se proyecta el espacio original**.

Por el **teorema del rango-nulidad**:
$$
\dim(\ker(A)) + \dim(\text{Im}(A)) = n
$$

---

### Transformaciones ortogonales

Una **transformación ortogonal** preserva el producto interno, es decir:
$$
\langle A\mathbf{x}, A\mathbf{y} \rangle = \langle \mathbf{x}, \mathbf{y} \rangle
$$

Esto implica:
$$
A^T A = I
$$

Por tanto, las transformaciones ortogonales son **isometrías**:  
preservan longitudes y ángulos (rotaciones, reflexiones, simetrías).

---

### Interpretación en términos de deformación

Toda transformación lineal $T$ puede descomponerse como una combinación de:

1. **Rotación/reflexión ortogonal** $Q$  
2. **Escalado direccional** $D$  
3. **Otra rotación/reflexión** $P$

$$
A = Q D P^T
$$

Esta descomposición se conoce como la **Descomposición en Valores Singulares (SVD)** y describe cómo una transformación lineal:

- **Rota el espacio**,  
- **Deforma (escala)** en direcciones particulares,  
- y **vuelve a rotar**.

Geométricamente, cualquier elipse o elipsoide generado por $A$ proviene de aplicar $A$ a una esfera o círculo unidad.

---

### Ejemplo geométrico completo

Sea
$$
A = 
\begin{bmatrix}
2 & 1 \\
1 & 2
\end{bmatrix}
$$

1. **Autovalores y autovectores:**
   $$
   \lambda_1 = 3, \quad \lambda_2 = 1
   $$
   $$
   \mathbf{v}_1 = \begin{bmatrix}1 \\ 1\end{bmatrix}, \quad
   \mathbf{v}_2 = \begin{bmatrix}1 \\ -1\end{bmatrix}
   $$

2. **Interpretación:**
   - La dirección $(1,1)$ se **expande** 3 veces.
   - La dirección $(1,-1)$ **se mantiene** (factor 1).
   - La figura resultante de transformar un círculo es una **elipse** con ejes principales alineados con los autovectores.

---

### Conceptos relacionados

- Transformaciones lineales y matrices  
- Autovalores y autovectores  
- Teorema espectral en ℝ  
- Producto interno y ortogonalidad en espacios vectoriales sobre ℝ  
- Bases ortogonales  
- Descomposición en valores singulares (SVD)  
- Determinante y cambio de volumen


## Mínimos cuadrados

El **método de los mínimos cuadrados** es una técnica fundamental en [Cálculo numérico](/mates/c-lculo-num-rico/) y álgebra lineal para aproximar soluciones de sistemas de ecuaciones lineales **sobredeterminados**, es decir, con más ecuaciones que incógnitas ($m > n$).

Dado un sistema:

$$
A\mathbf{x} \approx \mathbf{b}
$$

donde $A \in \mathbb{R}^{m \times n}$, $\mathbf{b} \in \mathbb{R}^m$, y el sistema puede no tener solución exacta, el objetivo es encontrar el vector $\mathbf{x}$ que **minimiza el error cuadrático**:

$$
\min_{\mathbf{x&#125;&#125; \|A\mathbf{x} - \mathbf{b}\|_2^2
$$

---

### Interpretación geométrica

- El vector $A\mathbf{x}$ pertenece al **subespacio columna** de $A$.  
- La solución de mínimos cuadrados proyecta $\mathbf{b}$ **ortogonalmente** sobre ese subespacio.  
- El **error** $\mathbf{r} = \mathbf{b} - A\mathbf{x}^*$ es **perpendicular** a todas las columnas de $A$:

$$
A^T (\mathbf{b} - A\mathbf{x}^*) = 0
$$

Esto significa que el error mínimo es **ortogonal al espacio generado por las columnas de $A$**.

---

### Ecuaciones normales

A partir de la condición de ortogonalidad anterior, obtenemos las **ecuaciones normales**:

$$
A^T A \mathbf{x} = A^T \mathbf{b}
$$

Si $A^T A$ es invertible (es decir, $A$ tiene rango completo), entonces la solución única es:

$$
\mathbf{x}^* = (A^T A)^{-1} A^T \mathbf{b}
$$

Esta expresión define la **solución de mínimos cuadrados ordinarios (OLS)**.

---

### Interpretación matricial

La matriz:

$$
A^+ = (A^T A)^{-1} A^T
$$

es la **pseudoinversa de Moore-Penrose** (cuando $A$ tiene rango completo en columnas).  
Por tanto, la solución se puede escribir como:

$$
\mathbf{x}^* = A^+ \mathbf{b}
$$

y la proyección del vector $\mathbf{b}$ sobre el subespacio generado por las columnas de $A$ es:

$$
\hat{\mathbf{b&#125;&#125; = A\mathbf{x}^* = A A^+ \mathbf{b}
$$

---

### Propiedades geométricas

1. $\hat{\mathbf{b&#125;&#125;$ es la **proyección ortogonal** de $\mathbf{b}$ sobre el subespacio columna de $A$.  
2. El vector de residuos $\mathbf{r} = \mathbf{b} - \hat{\mathbf{b&#125;&#125;$ es **ortogonal** a dicho subespacio:

   $$
   A^T \mathbf{r} = 0
   $$

3. La matriz $P = A A^+$ es una **matriz de proyección ortogonal**:

   $$
   P^2 = P, \quad P^T = P
   $$

---

### Condiciones de unicidad

- Si las columnas de $A$ son **linealmente independientes**, la solución de mínimos cuadrados es **única**.  
- Si no lo son, el sistema tiene **infinitas soluciones**, y la pseudoinversa $A^+$ devuelve la solución de **mínima norma**:

  $$
  \mathbf{x}^* = \arg\min_{\mathbf{x&#125;&#125; \| \mathbf{x} \|_2 \quad \text{sujeto a} \quad \min_{\mathbf{x&#125;&#125; \|A\mathbf{x} - \mathbf{b}\|_2
  $$

---

### Formulación general en espacios vectoriales

El método de mínimos cuadrados también puede expresarse como un problema de **proyección ortogonal** en un espacio vectorial con producto interno:

$$
\langle \mathbf{r}, A_i \rangle = 0, \quad \forall A_i \text{ columna de } A
$$

donde el producto interno es el usual en $\mathbb{R}^m$:

$$
\langle \mathbf{u}, \mathbf{v} \rangle = \mathbf{u}^T \mathbf{v}
$$

---

### Solución numérica eficiente

El cálculo directo de $(A^T A)^{-1}$ puede ser **numéricamente inestable** cuando $A$ es mal condicionada.  
Por eso, se prefieren métodos más estables:

#### 1. **Descomposición QR**

Si $A = QR$, con $Q$ ortogonal y $R$ triangular superior, entonces:

$$
\mathbf{x}^* = R^{-1} Q^T \mathbf{b}
$$

Este método evita formar explícitamente $A^T A$ y mejora la estabilidad numérica.

#### 2. **Descomposición SVD**

Usando la descomposición en valores singulares:

$$
A = U \Sigma V^T
$$

entonces:

$$
\mathbf{x}^* = V \Sigma^+ U^T \mathbf{b}
$$

donde $\Sigma^+$ es la pseudoinversa de $\Sigma$.  
Este método es el más **robusto numéricamente** y permite manejar casos donde $A$ no tiene rango completo.

---

### Error cuadrático mínimo

El valor mínimo del error (residuo) se obtiene sustituyendo $\mathbf{x}^*$ en la función objetivo:

$$
E_{\min} = \|\mathbf{b} - A\mathbf{x}^*\|_2^2
$$

La norma del error depende de cuán bien el subespacio generado por las columnas de $A$ aproxima al vector $\mathbf{b}$.

---

### Aplicaciones

- **Ajuste de curvas y regresión lineal**: estimar parámetros de un modelo $y = A\mathbf{x} + \varepsilon$.  
- **Filtrado y reconstrucción de señales** en procesamiento digital.  
- **Solución aproximada de sistemas inconsistentes** en sistemas de ecuaciones lineales.  
- **Reducción de ruido y compresión** en análisis de datos.  
- **Método de estimación estadística** por mínimos cuadrados ordinarios (OLS).

---

### Ejemplo práctico

Sea el sistema sobredeterminado:

$$
\begin{cases}
x + y = 2 \\
x - y = 0 \\
x + 2y = 3
\end{cases}
$$

En forma matricial:

$$
A = 
\begin{bmatrix}
1 & 1 \\
1 & -1 \\
1 & 2
\end{bmatrix}, \quad
\mathbf{b} =
\begin{bmatrix}
2 \\ 0 \\ 3
\end{bmatrix}
$$

Ecuaciones normales:

$$
A^T A =
\begin{bmatrix}
3 & 2 \\
2 & 6
\end{bmatrix}, \quad
A^T \mathbf{b} =
\begin{bmatrix}
5 \\ 8
\end{bmatrix}
$$

Resolviendo:

$$
\begin{bmatrix}
3 & 2 \\
2 & 6
\end{bmatrix}
\begin{bmatrix}
x \\ y
\end{bmatrix}
=
\begin{bmatrix}
5 \\ 8
\end{bmatrix}
\Rightarrow
\begin{bmatrix}
x \\ y
\end{bmatrix}
=
\begin{bmatrix}
1 \\ 1
\end{bmatrix}
$$

Por tanto, la solución de mínimos cuadrados es $x = 1, y = 1$.

---

### Conceptos relacionados

- Sistemas de ecuaciones lineales  
- Transformaciones lineales y matrices  
- Descomposición QR  
- Descomposición en valores singulares (SVD)  
- Pseudoinversa de Moore-Penrose  
- Error numérico y estabilidad en cálculo numérico  
- Regresión lineal y ajuste de datos

## Pseudoinversa y descomposición en valores singulares (SVD)

La **pseudoinversa** y la **descomposición en valores singulares (SVD)** son herramientas fundamentales en álgebra lineal y [Cálculo numérico](/mates/c-lculo-num-rico/) para resolver sistemas lineales, analizar transformaciones lineales y estudiar la estructura de matrices, especialmente cuando son **rectangulares** o **singulares**.

---

### Pseudoinversa de Moore-Penrose

Dada una matriz $A \in \mathbb{R}^{m \times n}$, la **pseudoinversa** $A^+$ es la matriz única que satisface las **condiciones de Moore-Penrose**:

1. $A A^+ A = A$  
2. $A^+ A A^+ = A^+$  
3. $(A A^+)^T = A A^+$  
4. $(A^+ A)^T = A^+ A$

**Interpretación geométrica:**

- $A^+ \mathbf{b}$ proporciona la **solución de mínima norma** al sistema $A\mathbf{x} = \mathbf{b}$ cuando no existe solución exacta.  
- Proyecta $\mathbf{b}$ sobre el **subespacio columna de $A$** para obtener la solución de **mínimos cuadrados**:

$$
\mathbf{x}^* = A^+ \mathbf{b}, \quad \hat{\mathbf{b&#125;&#125; = A A^+ \mathbf{b}
$$

**Casos especiales:**

- Si $A$ tiene **rango completo en columnas** ($\text{rank}(A) = n$):

$$
A^+ = (A^T A)^{-1} A^T
$$

- Si $A$ tiene **rango completo en filas** ($\text{rank}(A) = m$):

$$
A^+ = A^T (A A^T)^{-1}
$$

---

### Descomposición en valores singulares (SVD)

La **SVD** es una descomposición de cualquier matriz $A \in \mathbb{R}^{m \times n}$ en tres matrices:

$$
A = U \Sigma V^T
$$

donde:

- $U \in \mathbb{R}^{m \times m}$ es ortogonal ($U^T U = I_m$)  
- $V \in \mathbb{R}^{n \times n}$ es ortogonal ($V^T V = I_n$)  
- $\Sigma \in \mathbb{R}^{m \times n}$ es diagonal con entradas no negativas $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0$ (los **valores singulares**) y ceros si $r < \min(m,n)$

**Interpretación geométrica:**

- La SVD **descompone la transformación lineal** $\mathbf{x} \mapsto A\mathbf{x}$ en tres pasos:

1. $V^T$: rota o refleja el espacio de entrada $\mathbb{R}^n$  
2. $\Sigma$: escala en direcciones ortogonales  
3. $U$: rota o refleja el espacio de salida $\mathbb{R}^m$

- Cada **valor singular** $\sigma_i$ indica cuánto se **escala** la dirección correspondiente.

---

### Relación entre pseudoinversa y SVD

Si $A = U \Sigma V^T$, entonces la **pseudoinversa** se obtiene como:

$$
A^+ = V \Sigma^+ U^T
$$

donde $\Sigma^+$ se forma tomando la **inversa de cada valor singular no nulo** y transponiendo la matriz resultante para que tenga tamaño $n \times m$.

**Ventajas:**

- Funciona incluso si $A$ no tiene rango completo.  
- Proporciona una **solución estable y mínima norma** a sistemas sobredeterminados o subdeterminados.  
- Permite analizar la **condición numérica** de la matriz mediante el **ratio $\sigma_1 / \sigma_r$**.

---

### Propiedades importantes

1. **Solución de mínimos cuadrados:**
   $$
   \mathbf{x}^* = A^+ \mathbf{b}
   $$

2. **Proyección ortogonal:**
   $$
   \hat{\mathbf{b&#125;&#125; = A A^+ \mathbf{b} = U \begin{bmatrix} I_r & 0 \\ 0 & 0 \end{bmatrix} U^T \mathbf{b}
   $$

3. **Rango de $A$:**  
   Número de valores singulares no nulos $r = \text{rank}(A)$

4. **Norma de la matriz:**  
   La norma 2 de $A$ es $\|A\|_2 = \sigma_1$  
   La norma de Frobenius: $\|A\|_F^2 = \sum_i \sigma_i^2$

---

### Ejemplo

Sea:

$$
A =
\begin{bmatrix}
3 & 1 \\
0 & 2 \\
0 & 0
\end{bmatrix} \in \mathbb{R}^{3 \times 2}
$$

1. **SVD:**
   $$
   A = U \Sigma V^T
   $$
   con $\Sigma = \begin{bmatrix} \sigma_1 & 0 \\ 0 & \sigma_2 \\ 0 & 0 \end{bmatrix}$, $\sigma_1, \sigma_2 > 0$

2. **Pseudoinversa:**
   $$
   A^+ = V \Sigma^+ U^T
   $$

3. **Solución de mínimos cuadrados:**  
   Para $\mathbf{b} \in \mathbb{R}^3$:
   $$
   \mathbf{x}^* = A^+ \mathbf{b}, \quad \hat{\mathbf{b&#125;&#125; = A A^+ \mathbf{b}
   $$

Esto permite **resolver sistemas sobredeterminados o subdeterminados** y analizar la geometría de la transformación.

---

### Aplicaciones

- Resolución de sistemas de ecuaciones lineales inconsistentes.  
- Mínimos cuadrados y ajuste de datos.  
- Compresión de matrices y reducción de dimensión (**PCA**, **reducción de rangos**).  
- Procesamiento de señales e imágenes.  
- Estudio de estabilidad numérica y condición de matrices.

---

### Conceptos relacionados

- Matrices  
- Transformaciones lineales y matrices  
- Mínimos cuadrados  
- Bases ortogonales  
- Producto interno y ortogonalidad en espacios vectoriales sobre ℝ  
- Teorema espectral en ℝ  
- Descomposición QR  
- Regresión lineal y ajuste de datos
