---
date: 2025-11-13 10:54
title: Cálculo numérico
keywords:
source:
status: 🌟
Parent: "[[Area-IA]]"
public_note: "true"
category: mates
---
# 🧮 Cálculo numérico
`$= dv.current().file.tags.join(" ")`
- Cálculo numérico
	- Desbordamiento y desbordamiento
	- Mal estado
	- Método de optimización basado en gradiente
	- Optimización de restricciones
	- Ejemplo: mínimos cuadrados lineales

El **cálculo numérico** estudia los métodos y algoritmos que permiten obtener soluciones aproximadas a problemas matemáticos, especialmente cuando no existen soluciones analíticas exactas o su cálculo es impracticable.  
Su objetivo es minimizar los errores de aproximación y controlar la estabilidad de los métodos.

### 🔹 Fuentes de error en cálculo numérico
1. **Error de redondeo:** ocurre al representar números reales con precisión finita en el ordenador.  
2. **Error de truncamiento:** proviene de aproximar un proceso infinito (como una serie o derivada) por una expresión finita.  
3. **Error de propagación:** se acumula a lo largo de los pasos de un algoritmo debido a errores previos.

### 🔹 Precisión y estabilidad
- Un **método preciso** produce resultados cercanos al valor real.  
- Un **método estable** no amplifica los errores durante el proceso numérico.  
- Un **algoritmo mal condicionado** o **mal estado** amplifica los errores iniciales en los datos de entrada.

---

## ⚠️ Desbordamiento y subdesbordamiento

En los cálculos computacionales, los números se representan con un número limitado de bits, lo que provoca limitaciones:

- **Desbordamiento (Overflow):** ocurre cuando el resultado de una operación excede el máximo representable.  
  Ejemplo:  
  $$ x = 10^{308} \Rightarrow x^2 = 10^{616} \text{ (no representable en IEEE 754 double)} $$

- **Subdesbordamiento (Underflow):** sucede cuando el resultado es tan pequeño que se aproxima a cero dentro de la precisión de máquina.  
  Ejemplo:  
  $$ x = 10^{-308} \Rightarrow x^2 = 10^{-616} \approx 0 $$

El **manejo del desbordamiento** implica escalar los datos, usar logaritmos o representar magnitudes en formato normalizado.

---

## 🧩 Mal estado (condicionamiento de un problema)

El **estado** o **condicionamiento** de un problema mide cómo las pequeñas variaciones en los datos de entrada afectan al resultado.

Sea una función $f(x)$. Si un pequeño cambio $\Delta x$ produce un gran cambio en $f(x)$, el problema está **mal condicionado**.

### 🔹 Número de condición
Se define como:

$$
\kappa(f, x) = \left| \frac{x}{f(x)} \frac{df(x)}{dx} \right|
$$

- Si $\kappa$ es grande, el problema es **mal condicionado**.  
- Si $\kappa$ es pequeño, el problema es **bien condicionado**.

En el caso de sistemas lineales $A\mathbf{x} = \mathbf{b}$:

$$
\kappa(A) = \|A\| \cdot \|A^{-1}\|
$$

Cuanto mayor sea $\kappa(A)$, más sensible será la solución a errores en $\mathbf{b}$ o en $A$.

---

## 🔺 Método de optimización basado en gradiente

Los **métodos de optimización por gradiente** buscan minimizar una función $f(\mathbf{x})$ ajustando iterativamente $\mathbf{x}$ en la dirección opuesta a su gradiente.

### 🔹 Principio básico
$$
\mathbf{x}_{k+1} = \mathbf{x}_k - \alpha_k \nabla f(\mathbf{x}_k)
$$

donde:
- $\nabla f(\mathbf{x}_k)$ es el gradiente en el punto actual,  
- $\alpha_k$ es la **tasa de aprendizaje** o **paso de actualización**.

### 🔹 Propiedades
- Si $\alpha_k$ es demasiado grande → el algoritmo puede divergir.  
- Si $\alpha_k$ es demasiado pequeño → converge muy lentamente.  
- El gradiente indica la **dirección de mayor aumento**, por lo que se desciende en la dirección opuesta.

### 🔹 Ejemplo (Código)
{% raw %}
```python
# Método de descenso del gradiente
import numpy as np

def gradiente(f_grad, x0, alpha=0.01, tol=1e-6, max_iter=1000):
	for _ in range(max_iter):
		grad = f_grad(x0)
		if np.linalg.norm(grad) < tol:
			break
		x0 = x0 - alpha * grad
	return x0
```
{% endraw %}`

---

## 🧱 Optimización de restricciones

En muchos problemas se desea minimizar una función ( f(\mathbf{x}) ) sujeta a **restricciones**.

### 🔹 Tipos de restricciones

* **Igualdad:**
  $$ g_i(\mathbf{x}) = 0 $$
* **Desigualdad:**
  $$ h_j(\mathbf{x}) \le 0 $$

### 🔹 Métodos principales

1. **Multiplicadores de Lagrange:**
   Se introduce un conjunto de variables ( \lambda_i ) (multiplicadores) y se define:
   $$
   \mathcal{L}(\mathbf{x}, \lambda) = f(\mathbf{x}) + \sum_i \lambda_i g_i(\mathbf{x})
   $$
   El óptimo cumple:
   $$
   \nabla_{\mathbf{x&#125;&#125; \mathcal{L} = 0, \quad g_i(\mathbf{x}) = 0
   $$

2. **Métodos de penalización:**
   Transforman el problema restringido en uno no restringido añadiendo penalizaciones:
   $$
   F(\mathbf{x}) = f(\mathbf{x}) + \mu \sum_i g_i(\mathbf{x})^2
   $$
   donde ( \mu > 0 ) controla el peso de la penalización.

3. **Método de barrera interior:**
   Para restricciones de desigualdad:
   $$
   F(\mathbf{x}) = f(\mathbf{x}) - \frac{1}{t} \sum_j \ln(-h_j(\mathbf{x}))
   $$
   con ( t ) que crece progresivamente para aproximarse al límite factible.

---

## 📉 Ejemplo: mínimos cuadrados lineales

El problema de **mínimos cuadrados** busca una solución ( \mathbf{x} ) que minimice el error cuadrático entre un modelo lineal ( A\mathbf{x} ) y los datos observados ( \mathbf{b} ):

$$
\min_{\mathbf{x&#125;&#125; |A\mathbf{x} - \mathbf{b}|^2
$$

### 🔹 Solución analítica

Si ( A ) tiene rango completo:

$$
A^T A \mathbf{x} = A^T \mathbf{b}
$$

y por tanto:

$$
\mathbf{x} = (A^T A)^{-1} A^T \mathbf{b}
$$

### 🔹 Solución mediante Descomposición SVD

Usando la descomposición en valores singulares ( A = U \Sigma V^T ):

$$
A^+ = V \Sigma^+ U^T
$$

y por tanto:

$$
\mathbf{x} = A^+ \mathbf{b}
$$

donde ( A^+ ) es la **pseudoinversa de Moore–Penrose**, que cumple:

$$
AA^+A = A, \quad A^+AA^+ = A^+, \quad (AA^+)^T = AA^+, \quad (A^+A)^T = A^+A
$$

### 🔹 Interpretación geométrica

El vector ( A\mathbf{x} ) es la **proyección ortogonal** de ( \mathbf{b} ) sobre el subespacio generado por las columnas de ( A ).
La solución ( \mathbf{x} ) minimiza la distancia entre ( A\mathbf{x} ) y ( \mathbf{b} ).

# 🧮 Fundamentos del cálculo numérico

El **cálculo numérico** es una disciplina que estudia los métodos y algoritmos para obtener soluciones aproximadas a problemas matemáticos, especialmente cuando las soluciones exactas son imposibles o difíciles de calcular.  
Su propósito principal es **encontrar soluciones estables, precisas y eficientes** en presencia de limitaciones computacionales y errores inevitables.

---

## 🔹 Naturaleza del cálculo numérico

1. **Aproximación:**  
	El cálculo numérico no busca el valor exacto, sino una **aproximación controlada** al valor real, cuyo error puede ser medido o acotado.

2. **Error y estabilidad:**  
	El análisis del error permite determinar si un método es confiable.  
	Un algoritmo **estable** no amplifica los errores de redondeo o truncamiento durante el proceso.

3. **Algoritmos y eficiencia:**  
	La resolución de problemas en computadora requiere métodos **rápidos y precisos**, diseñados para operar dentro de los límites de la aritmética de máquina.

---

## ⚙️ Conceptos fundamentales

### Representación numérica y aritmética de punto flotante

Los ordenadores representan números reales mediante un **formato de punto flotante**, definido por una base $\beta$, una mantisa $m$ y un exponente $e$:

$$
x = \pm m \times \beta^e
$$

El número de dígitos en la mantisa limita la **precisión**, y el rango de exponentes define los **límites de representación**.

---

### Tipos de error

1. **Error absoluto:**  
	$$ E_a = |x - \tilde{x}| $$
	donde $x$ es el valor exacto y $\tilde{x}$ el valor aproximado.

2. **Error relativo:**  
	$$ E_r = \frac{|x - \tilde{x}|}{|x|} $$

3. **Error de redondeo:**  
	Proviene de la imposibilidad de representar ciertos números en la máquina.

4. **Error de truncamiento:**  
	Surge al reemplazar procesos infinitos (como derivadas, integrales o series) por aproximaciones finitas.

5. **Propagación del error:**  
	En cálculos iterativos o secuenciales, los errores se acumulan y pueden amplificarse si el método no es estable.

---

### Condicionamiento de un problema

El **condicionamiento** mide la sensibilidad del resultado ante pequeñas perturbaciones en los datos de entrada.  
Sea una función $f(x)$:

$$
\kappa(f, x) = \left| \frac{x}{f(x)} \frac{df(x)}{dx} \right|
$$

- Si $\kappa$ es pequeño → el problema está **bien condicionado**.  
- Si $\kappa$ es grande → el problema está **mal condicionado**.

Un problema mal condicionado puede producir resultados poco confiables incluso con métodos numéricamente estables.

---

### Estabilidad numérica

Un **método estable** controla la propagación de los errores durante el proceso.  
Incluso si el problema está bien condicionado, un método **inestable** puede producir resultados erróneos.

Ejemplo de inestabilidad:
- Restar dos números casi iguales puede provocar **pérdida de significancia**.
- Cálculos iterativos mal diseñados pueden amplificar los errores de redondeo.

---

### Desbordamiento y subdesbordamiento

En aritmética de punto flotante:
- **Desbordamiento (overflow):** el número excede el máximo representable → resultado infinito.  
- **Subdesbordamiento (underflow):** el número es demasiado pequeño → se aproxima a cero.

Estrategias para evitarlo:
- Escalar los datos o usar logaritmos.  
- Normalizar magnitudes durante los cálculos.  
- Utilizar tipos de datos con mayor rango (por ejemplo, `float64`).

---

### Convergencia

En métodos iterativos, como los de optimización o resolución de ecuaciones, la **convergencia** indica que la secuencia de aproximaciones $x_k$ se acerca al valor verdadero $x^*$:

$$
\lim_{k \to \infty} x_k = x^*
$$

Tipos de convergencia:
1. **Lineal:** $|x_{k+1} - x^*| \approx C |x_k - x^*|$
2. **Cuadrática:** $|x_{k+1} - x^*| \approx C |x_k - x^*|^2$
3. **Superlineal:** velocidad intermedia entre lineal y cuadrática.

---

### Evaluación de métodos numéricos

Un buen método numérico debe cumplir:

1. **Consistencia:** el error de truncamiento tiende a cero al refinar el método.  
2. **Estabilidad:** los errores no se amplifican durante el cálculo.  
3. **Convergencia:** las aproximaciones tienden al valor exacto.  
4. **Eficiencia:** bajo costo computacional y buena precisión.  

---

## 🧩 Ejemplo clásico: mínimos cuadrados

Problema:
$$
\min_{\mathbf{x&#125;&#125; \|A\mathbf{x} - \mathbf{b}\|^2
$$

Solución:
$$
A^T A \mathbf{x} = A^T \mathbf{b}
\Rightarrow
\mathbf{x} = (A^T A)^{-1} A^T \mathbf{b}
$$

Si $A$ no es cuadrada o no tiene rango completo, se usa la **pseudoinversa** $A^+$:

$$
A^+ = V \Sigma^+ U^T
\quad \Rightarrow \quad
\mathbf{x} = A^+ \mathbf{b}
$$

---

## 🧠 Conclusión conceptual

El cálculo numérico combina el rigor matemático con la realidad computacional.  
Sus fundamentos —representación, error, estabilidad, condicionamiento y convergencia— son esenciales para diseñar algoritmos robustos capaces de resolver problemas reales con precisión controlada.


# 🧩 Lenguaje matemático del cálculo numérico

El **lenguaje matemático del cálculo numérico** proporciona la notación, símbolos y convenciones que permiten expresar los algoritmos, errores y métodos de manera rigurosa y comprensible.  
Este lenguaje une el pensamiento matemático abstracto con la implementación computacional precisa.

---

## 🔹 Números y notación

1. **Números reales y aproximados:**  
	Un número real $x$ se representa de forma aproximada por $\tilde{x}$, donde:
	$$
	\tilde{x} = x + e, \quad e = \text{error de aproximación}
	$$

2. **Error absoluto y relativo:**  
	$$
	E_a = |x - \tilde{x}|, \quad E_r = \frac{|x - \tilde{x}|}{|x|}
	$$

3. **Notación científica (punto flotante):**  
	$$
	x = \pm m \times \beta^e
	$$
	donde $\beta$ es la base (normalmente 2 o 10), $m$ la mantisa, y $e$ el exponente.

---

## 🔹 Expresiones y operadores comunes

1. **Normas (magnitud de un vector o matriz):**
	- Vector:
	  $$
	  \|\mathbf{x}\|_2 = \sqrt{\sum_i x_i^2}
	  $$
	- Matriz:
	  $$
	  \|A\|_2 = \max_{\mathbf{x} \ne 0} \frac{\|A\mathbf{x}\|_2}{\|\mathbf{x}\|_2}
	  $$

2. **Producto interno:**
	$$
	\langle \mathbf{x}, \mathbf{y} \rangle = \sum_i x_i y_i
	$$

3. **Producto matricial:**
	$$
	C = AB, \quad c_{ij} = \sum_k a_{ik} b_{kj}
	$$

4. **Transpuesta y simetría:**
	$$
	A^T = (a_{ji}), \quad \text{si } A^T = A \text{ entonces } A \text{ es simétrica.}
	$$

5. **Derivada y gradiente:**
	- Derivada (una variable): $f'(x) = \frac{df}{dx}$
	- Gradiente (varias variables):  
	  $$
	  \nabla f(\mathbf{x}) =
	  \begin{bmatrix}
	  \frac{\partial f}{\partial x_1} \\[4pt]
	  \frac{\partial f}{\partial x_2} \\[4pt]
	  \vdots \\[4pt]
	  \frac{\partial f}{\partial x_n}
	  \end{bmatrix}
	  $$

6. **Jacobiano (matriz de derivadas parciales):**
	$$
	J_{ij} = \frac{\partial f_i}{\partial x_j}
	$$

7. **Norma del error (en vectores o funciones):**
	$$
	\| \mathbf{e} \| = \| \mathbf{x} - \tilde{\mathbf{x&#125;&#125; \|
	$$

---

## 🔹 Operaciones numéricas y símbolos útiles

| Símbolo | Significado | Ejemplo |
|----------|--------------|----------|
| $\approx$ | Aproximadamente igual | $\pi \approx 3.1416$ |
| $\sim$ | Comportamiento asintótico | $f(x) \sim x^2$ |
| $\simeq$ | Igualdad numérica aproximada | $0.333... \simeq \frac{1}{3}$ |
| $\Rightarrow$ | Implica o conduce a | $A\mathbf{x}=\mathbf{b} \Rightarrow \mathbf{x}=A^{-1}\mathbf{b}$ |
| $\Longleftrightarrow$ | Equivalencia | $a=b \Longleftrightarrow a-b=0$ |
| $\propto$ | Proporcionalidad | $f(x) \propto x^2$ |
| $\mathbb{R}^n$ | Espacio euclídeo n-dimensional | $\mathbf{x} \in \mathbb{R}^n$ |

---

## 🔹 Relaciones entre funciones y errores

1. **Desarrollo de Taylor (aproximación local):**
	$$
	f(x+h) = f(x) + h f'(x) + \frac{h^2}{2} f''(x) + \mathcal{O}(h^3)
	$$
	Se utiliza para analizar errores de truncamiento y diseñar métodos numéricos.

2. **Orden de error:**
	Un método tiene **orden $p$** si:
	$$
	E(h) = C h^p + \mathcal{O}(h^{p+1})
	$$
	Cuanto mayor es $p$, más rápido decrece el error al refinar el paso $h$.

3. **Análisis de estabilidad:**
	En un método iterativo:
	$$
	\mathbf{x}_{k+1} = G \mathbf{x}_k + \mathbf{c}
	$$
	El método es estable si el **radio espectral** $\rho(G) < 1$.

---

## 🔹 Expresiones matriciales clave en cálculo numérico

1. **Sistema lineal:**
	$$
	A\mathbf{x} = \mathbf{b}
	$$

2. **Descomposiciones numéricas:**
	- LU: $A = LU$
	- QR: $A = QR$
	- SVD: $A = U \Sigma V^T$

3. **Pseudoinversa de Moore–Penrose:**
	$$
	A^+ = V \Sigma^+ U^T
	$$

4. **Número de condición:**
	$$
	\kappa(A) = \|A\| \cdot \|A^{-1}\|
	$$
	Mide la sensibilidad del resultado respecto a los errores en los datos.

---

## 🔹 Notación algorítmica y computacional

- **Iteración:**  
	$$
	x_{k+1} = x_k - \alpha \nabla f(x_k)
	$$
	indica un proceso repetitivo, típico de métodos de optimización o búsqueda de raíces.

- **Criterio de parada:**  
	$$
	\|x_{k+1} - x_k\| < \varepsilon
	$$
	para una tolerancia $\varepsilon$ pequeña.

- **Complejidad algorítmica:**  
	$\mathcal{O}(n^3)$ indica el crecimiento del coste computacional con el tamaño del problema.

---

## 🧠 Interpretación conceptual

El lenguaje del cálculo numérico traduce la abstracción matemática al contexto computacional.  
Los símbolos expresan relaciones exactas, mientras que las aproximaciones reflejan limitaciones prácticas.  
Comprender este lenguaje permite:
- Analizar errores y estabilidad,  
- Formular algoritmos precisos,  
- Comunicar resultados con rigor y claridad matemática.
