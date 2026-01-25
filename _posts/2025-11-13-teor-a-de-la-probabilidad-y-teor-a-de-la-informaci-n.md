---
date: 2025-11-13 10:56
title: Teoría de la probabilidad y teoría de la información
tags:
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
# 🧮 Teoría de la probabilidad y teoría de la información
`$= dv.current().file.tags.join(" ")`

- Teoría de la probabilidad y teoría de la información.
	- Variables aleatorias
	- Distribución de probabilidad
	- Probabilidad marginal
	- Probabilidad condicional
	- Independencia e independencia condicional
	- Expectativa, varianza y covarianza
	- Distribución de probabilidad común
	- Reglas bayesianas
	- Variable continua
	- Teoría de la información
	- Modelo estadístico estructurado

La **teoría de la probabilidad** proporciona un marco matemático para modelar la incertidumbre y cuantificar el azar.  
La **teoría de la información**, por otro lado, estudia la cuantificación, almacenamiento y transmisión de la información.  
Ambas teorías se conectan profundamente en campos como el Aprendizaje automático, Estadística bayesiana o la Codificación de datos.

---

## 🎲 Variables aleatorias

Una **variable aleatoria** (VA) es una función que asigna un número real a cada posible resultado de un experimento aleatorio.

- **Variable aleatoria discreta:** toma un número finito o numerable de valores (ej. lanzamiento de un dado).
- **Variable aleatoria continua:** puede tomar cualquier valor dentro de un intervalo real (ej. temperatura, tiempo).

En notación formal:

$$X : \Omega \rightarrow \mathbb{R}$$

donde $\Omega$ es el espacio muestral.

---

## 📊 Distribución de probabilidad

Describe cómo se distribuyen los valores posibles de una variable aleatoria.

- Para una **variable discreta**, se define por la **función de masa de probabilidad (pmf)**:
  
  $$P(X = x_i) = p_i, \quad \text{con} \quad \sum_i p_i = 1$$

- Para una **variable continua**, se define mediante la **función de densidad de probabilidad (pdf)** $f(x)$:
  
  $$P(a \le X \le b) = \int_a^b f(x)\,dx, \quad \text{con} \quad \int_{-\infty}^{\infty} f(x)\,dx = 1$$

---

## 🧩 Probabilidad marginal

La **probabilidad marginal** es la probabilidad de un evento considerando todas las posibles ocurrencias de otras variables.

$$P(X) = \sum_Y P(X, Y)$$
(en el caso discreto)  
o  
$$P(X) = \int P(X, Y)\,dY$$
(en el caso continuo).

Se obtiene integrando o sumando sobre las demás variables.

---

## 🔗 Probabilidad condicional

Es la probabilidad de que ocurra un evento $A$ dado que otro evento $B$ ha ocurrido:

$$P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0$$

Permite actualizar el conocimiento ante nueva información.

---

## ⚖️ Independencia e independencia condicional

- **Independencia:**  
  Dos variables son independientes si conocer una no cambia la probabilidad de la otra:

  $$P(A \cap B) = P(A) P(B)$$

- **Independencia condicional:**  
  Dos variables $A$ y $B$ son independientes **dado** $C$ si:

  $$P(A, B | C) = P(A | C) P(B | C)$$

Este concepto es fundamental en los Modelos gráficos probabilísticos.

---

## 📈 Expectativa, varianza y covarianza

- **Esperanza matemática (media):**

  $$\mathbb{E}[X] = 
  \begin{cases} 
  \sum_x x P(X = x) & \text{(discreta)} \\[5pt]
  \int_{-\infty}^{\infty} x f(x)\,dx & \text{(continua)}
  \end{cases}$$

- **Varianza:**

  $$\operatorname{Var}(X) = \mathbb{E}[(X - \mathbb{E}[X])^2]$$

  Mide la dispersión de la variable respecto a su media.

- **Covarianza:**

  $$\operatorname{Cov}(X, Y) = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])]$$

  Indica cómo varían conjuntamente dos variables.

---

## 📚 Distribuciones de probabilidad comunes

Algunas distribuciones fundamentales:

- **Bernoulli:** $P(X=1)=p, \, P(X=0)=1-p$
- **Binomial:** $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$
- **Poisson:** $P(X=k)=\frac{\lambda^k e^{-\lambda}}{k!}$
- **Uniforme continua:** $f(x)=\frac{1}{b-a}$ para $a \le x \le b$
- **Normal (Gaussiana):**
  $$f(x)=\frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
- **Exponencial:** $f(x)=\lambda e^{-\lambda x}, \, x \ge 0$

---

## 🧮 Reglas bayesianas

Basadas en el **teorema de Bayes**:

$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$

Permite actualizar creencias ante nueva evidencia, base del Aprendizaje bayesiano.

- **Probabilidad a priori:** $P(A)$
- **Verosimilitud:** $P(B|A)$
- **Evidencia:** $P(B) = \sum_A P(B|A)P(A)$
- **Probabilidad a posteriori:** $P(A|B)$

---

## 🌈 Variable continua

Para una variable continua $X$, la probabilidad de tomar un valor exacto es cero:

$$P(X = x) = 0$$

Las probabilidades se calculan sobre intervalos.  
Las funciones de densidad deben cumplir:

$$f(x) \ge 0, \quad \int_{-\infty}^{\infty} f(x)\,dx = 1$$

La **función de distribución acumulada (CDF)**:

$$F(x) = P(X \le x) = \int_{-\infty}^x f(t)\,dt$$

---

## 💡 Teoría de la información

La **información** se mide como reducción de incertidumbre.  
El concepto central es la **entropía de Shannon**:

$$H(X) = - \sum_i P(x_i) \log_2 P(x_i)$$

Cuantifica la incertidumbre promedio de una variable aleatoria.  
Otras medidas derivadas:

- **Información mutua:**
  $$I(X;Y) = \sum_{x,y} P(x,y) \log \frac{P(x,y)}{P(x)P(y)}$$
  mide la dependencia entre dos variables.

- **Entropía condicional:**
  $$H(X|Y) = -\sum_{x,y} P(x,y) \log P(x|y)$$

- **Entropía cruzada y divergencia KL:**
  $$D_{KL}(P||Q) = \sum_x P(x)\log\frac{P(x)}{Q(x)}$$
  utilizada en Aprendizaje profundo para medir la diferencia entre distribuciones.

---

## 🧠 Modelo estadístico estructurado

Un **modelo estadístico estructurado** combina relaciones probabilísticas entre variables, a menudo expresadas mediante grafos o ecuaciones latentes.

Ejemplos:

- Modelos gráficos bayesianos
- Redes neuronales probabilísticas
- Modelos de Markov ocultos (HMM)
- Modelos lineales generalizados (GLM)

Estos modelos permiten representar dependencias, inferir variables ocultas y realizar predicciones basadas en la estructura de la incertidumbre.

# 🧠 Problemas y soluciones en teoría de la probabilidad e información

Esta guía recopila **problemas frecuentes**, **métodos de resolución** y **estrategias prácticas** para aplicar los conceptos de [Teoría de la probabilidad y teoría de la información](/mates/teor-a-de-la-probabilidad-y-teor-a-de-la-informaci-n/).

---

## 🎯 Guía general de resolución

1. **Identificar el tipo de variable:**
	- Si toma valores contables → discreta.
	- Si toma valores en un intervalo → continua.

2. **Determinar la distribución:**
	- Bernoulli / Binomial → experimentos con éxito-fracaso.
	- Poisson → número de eventos en un intervalo.
	- Normal → fenómenos continuos con simetría.
	- Exponencial → tiempos entre eventos.

3. **Aplicar las fórmulas clave:**
	- Esperanza, varianza, covarianza.
	- Probabilidades marginales o condicionales.
	- Teorema de Bayes para actualización de creencias.

4. **Visualizar la estructura:**
	- Representar dependencias mediante grafos.
	- Identificar independencia o independencia condicional.

5. **Verificar unidades y sentido:**
	- Toda probabilidad debe estar entre 0 y 1.
	- Las densidades pueden ser mayores que 1, pero integran a 1.

---

## 🧩 Problema 1: Probabilidad condicional

**Enunciado:**  
En un test médico, el 1% de la población tiene una enfermedad. La prueba detecta correctamente la enfermedad el 99% de las veces, pero tiene un 2% de falsos positivos.  
Si una persona da positivo, ¿cuál es la probabilidad de que realmente esté enferma?

**Solución (Teorema de Bayes):**

$$
P(E|+) = \frac{P(+|E) P(E)}{P(+|E) P(E) + P(+|\neg E) P(\neg E)}
$$

Sustituyendo:

$$
P(E|+) = \frac{0.99 \cdot 0.01}{0.99 \cdot 0.01 + 0.02 \cdot 0.99} \approx 0.33
$$

**Interpretación:**  
A pesar del test fiable, la baja prevalencia reduce drásticamente la probabilidad real de estar enfermo.

**Conceptos usados:**  
Probabilidad condicional, Teorema de Bayes, Reglas bayesianas

---

## 📊 Problema 2: Probabilidad marginal

**Enunciado:**  
Una fábrica produce el 40% de sus piezas en la máquina A y el 60% en la máquina B. La probabilidad de defecto es 1% en A y 3% en B.  
¿Cuál es la probabilidad de que una pieza elegida al azar sea defectuosa?

**Solución:**

$$
P(D) = P(D|A) P(A) + P(D|B) P(B) = 0.01 \cdot 0.4 + 0.03 \cdot 0.6 = 0.022
$$

**Interpretación:**  
La probabilidad total se obtiene combinando las contribuciones de cada fuente.

**Conceptos usados:**  
Probabilidad marginal, Regla de la probabilidad total

---

## 🧮 Problema 3: Esperanza y varianza

**Enunciado:**  
Sea una variable aleatoria discreta $X$ con la siguiente distribución:

| x | 1 | 2 | 3 |
|---|---|---|---|
| P(X=x) | 0.2 | 0.5 | 0.3 |

Calcular $\mathbb{E}[X]$ y $\operatorname{Var}(X)$.

**Solución:**

$$
\mathbb{E}[X] = 1 \cdot 0.2 + 2 \cdot 0.5 + 3 \cdot 0.3 = 2.1
$$

$$
\operatorname{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = (1^2 \cdot 0.2 + 2^2 \cdot 0.5 + 3^2 \cdot 0.3) - (2.1)^2 = 0.49
$$

**Interpretación:**  
La varianza mide la dispersión respecto a la media esperada.

**Conceptos usados:**  
Expectativa, varianza y covarianza

---

## 🔗 Problema 4: Independencia condicional

**Enunciado:**  
En un sistema de diagnóstico, la variable $D$ indica enfermedad, $S$ síntomas y $T$ el resultado del test.  
Se sabe que $T$ depende solo de $D$, no directamente de $S$.  
Demuestra que $T$ y $S$ son independientes dado $D$.

**Solución:**

$$
P(T|S, D) = P(T|D)
$$

Esto cumple la definición de independencia condicional:

$$
T \perp S \mid D
$$

**Interpretación:**  
El conocimiento del síntoma no cambia la probabilidad del test una vez conocida la enfermedad.

**Conceptos usados:**  
Independencia e independencia condicional, Modelos gráficos probabilísticos

---

## 🧾 Problema 5: Entropía de Shannon

**Enunciado:**  
Una fuente emite símbolos con probabilidades:  
$P(A)=0.5, P(B)=0.25, P(C)=0.25$.  
Calcular la entropía $H(X)$.

**Solución:**

$$
H(X) = -\sum_i P(x_i) \log_2 P(x_i) = -[0.5 \log_2 0.5 + 0.25 \log_2 0.25 + 0.25 \log_2 0.25] = 1.5 \text{ bits}
$$

**Interpretación:**  
En promedio, cada símbolo transporta 1.5 bits de información.

**Conceptos usados:**  
Teoría de la información, Entropía de Shannon

---

## 📈 Problema 6: Información mutua

**Enunciado:**  
Dos variables binarias $X, Y$ tienen la siguiente distribución conjunta:

| X | Y | P(X,Y) |
|---|---|---------|
| 0 | 0 | 0.25 |
| 0 | 1 | 0.25 |
| 1 | 0 | 0.25 |
| 1 | 1 | 0.25 |

Calcular la información mutua $I(X;Y)$.

**Solución:**

$$
I(X;Y) = \sum_{x,y} P(x,y) \log_2 \frac{P(x,y)}{P(x)P(y)}
$$

Dado que $X$ y $Y$ son independientes, $P(x,y) = P(x)P(y) = 0.25$.  
Por tanto:

$$
I(X;Y) = 0
$$

**Interpretación:**  
No hay relación entre $X$ y $Y$: conocer una no reduce la incertidumbre de la otra.

**Conceptos usados:**  
Información mutua, Independencia

---

## 🧠 Estrategias de estudio y aplicación

1. **Practica derivaciones:** usa ejemplos con diferentes distribuciones.
2. **Aplica la regla de Bayes en contextos reales:** diagnóstico, predicción, clasificación.
3. **Analiza dependencias con grafos probabilísticos:** ayuda a visualizar independencia.
4. **Usa simulaciones:** genera datos con Python o R para comprobar resultados empíricos.
5. **Conecta con la teoría de la información:** mide incertidumbre y dependencia entre variables.

---

## 💻 Ejemplo de código (Python)

{% raw %}
```python
import numpy as np

# Simulación de una variable binomial
n, p = 10, 0.5
x = np.random.binomial(n, p, 10000)

# Cálculo empírico de esperanza y varianza
E = np.mean(x)
Var = np.var(x)

print(f"Esperanza: {E:.2f}, Varianza: {Var:.2f}")
```
{% endraw %}`

**Resultado esperado:**

$$  
\mathbb{E}[X] \approx np = 5, \quad \operatorname{Var}(X) \approx np(1-p) = 2.5  
$$

---

## 📘 Enlaces relacionados

- [Teoría de la probabilidad y teoría de la información](/mates/teor-a-de-la-probabilidad-y-teor-a-de-la-informaci-n/)
    
- Reglas bayesianas
    
- Modelos gráficos probabilísticos
    
- Expectativa, varianza y covarianza
    
- Teoría de la información





# 🧮 Lenguaje matemático en probabilidad y teoría de la información

El **lenguaje matemático** es esencial para expresar conceptos de probabilidad, estadísticas y teoría de la información de manera precisa.  
A continuación se presentan los símbolos, notaciones y estructuras más importantes usados en este campo, con sintaxis compatible con **LaTeX para Obsidian**.

---

## 🎲 Variables aleatorias

- **Variable aleatoria discreta:**  
  Toma valores contables $x_1, x_2, \dots, x_n$.  
  Función de masa de probabilidad (pmf):

$$
P(X = x_i) = p_i, \quad \sum_{i} p_i = 1
$$

- **Variable aleatoria continua:**  
  Toma valores en un intervalo real.  
  Función de densidad de probabilidad (pdf):

$$
f_X(x) \ge 0, \quad \int_{-\infty}^{\infty} f_X(x) \, dx = 1
$$

Función de distribución acumulada (CDF):

$$
F_X(x) = P(X \le x) = \int_{-\infty}^{x} f_X(t)\, dt
$$

---

## 📊 Probabilidades

- **Probabilidad de un evento:**  

$$
P(A) \in [0,1], \quad P(\Omega) = 1
$$

- **Probabilidad condicional:**  

$$
P(A|B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0
$$

- **Probabilidad conjunta:**  

$$
P(A \cap B) = P(A|B) P(B) = P(B|A) P(A)
$$

- **Probabilidad marginal:**  

$$
P(X) = \sum_Y P(X,Y) \quad \text{(discreta)}, \quad P(X) = \int P(X,Y)\, dY \quad \text{(continua)}
$$

---

## ⚖️ Independencia

- **Independencia de eventos:**

$$
A \perp B \quad \Leftrightarrow \quad P(A \cap B) = P(A) P(B)
$$

- **Independencia condicional:**

$$
A \perp B \mid C \quad \Leftrightarrow \quad P(A \cap B \mid C) = P(A \mid C) P(B \mid C)
$$

---

## 🧮 Estadísticos fundamentales

- **Esperanza matemática (media):**

$$
\mathbb{E}[X] = 
\begin{cases} 
\sum_i x_i P(X = x_i) & \text{discreta} \\[2mm]
\int_{-\infty}^{\infty} x f_X(x) \, dx & \text{continua} 
\end{cases}
$$

- **Varianza:**

$$
\operatorname{Var}(X) = \mathbb{E}[(X - \mathbb{E}[X])^2] = \mathbb{E}[X^2] - (\mathbb{E}[X])^2
$$

- **Covarianza:**

$$
\operatorname{Cov}(X,Y) = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])]
$$

- **Correlación:**

$$
\rho_{X,Y} = \frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}}
$$

---

## 📚 Distribuciones comunes

- **Bernoulli:**  

$$
P(X=1)=p, \quad P(X=0)=1-p
$$

- **Binomial:**  

$$
P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k=0,\dots,n
$$

- **Poisson:**  

$$
P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k=0,1,2,\dots
$$

- **Normal (Gaussiana):**  

$$
f_X(x) = \frac{1}{\sqrt{2 \pi \sigma^2}} \exp\Big(-\frac{(x-\mu)^2}{2\sigma^2}\Big)
$$

---

## 💡 Teoría de la información

- **Entropía de Shannon:**  

$$
H(X) = -\sum_i P(x_i) \log_2 P(x_i)
$$

- **Entropía condicional:**  

$$
H(X|Y) = - \sum_{x,y} P(x,y) \log_2 P(x|y)
$$

- **Información mutua:**  

$$
I(X;Y) = \sum_{x,y} P(x,y) \log_2 \frac{P(x,y)}{P(x)P(y)}
$$

- **Divergencia KL:**  

$$
D_{KL}(P\|Q) = \sum_x P(x) \log_2 \frac{P(x)}{Q(x)}
$$

---

## 🔗 Notación recomendada en LaTeX para Obsidian

- Para fórmulas en línea: `$ ... $`  
- Para bloques de ecuaciones: `$$ ... $$`  
- Funciones: `\mathbb{E}`, `\operatorname{Var}`, `\operatorname{Cov}`, `\log`, `\sum`, `\int`  
- Relaciones: `\perp`, `\cap`, `\cup`, `\subset`, `\Rightarrow`, `\Leftrightarrow`  

---

## 📘 Enlaces relacionados

- Variables aleatorias  
- Distribución de probabilidad  
- Probabilidad condicional  
- Expectativa, varianza y covarianza  
- Teoría de la información

