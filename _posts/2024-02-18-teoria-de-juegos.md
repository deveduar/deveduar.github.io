---
date: 2024-02-18 16:14
title: Teoria de juegos
Hecho: false
keywords:
source:
status: 🌟
Parent: "[[Area-IA]]"
category: mates
tags:
  - Mates
---
# Teoria de juegos

- [matematicas](/uncategorized/mates/)
- economia
La **teoría de juegos** es una rama de las [matemáticas](/uncategorized/mates/) aplicadas que analiza las **interacciones estratégicas** entre agentes racionales. Estudia cómo las decisiones de un individuo dependen de las decisiones de otros, buscando entender y predecir los resultados posibles en distintos contextos: economía, política, biología, algoritmos, etc.

## Recursos

- [¿Qué es la teoría de juegos? (game theory)](https://www.youtube.com/watch?v=fa5bcCyFR4s)
- [Teoría de los Juegos](https://www.youtube.com/watch?v=bGRAZyEZRoE)
- [Teoría de Juegos, Economía Experimental y Equilibrio de Nash](https://www.youtube.com/watch?v=yEbCBeIOdS0)

---

## Fundamentos Matemáticos

La teoría de juegos se basa en estructuras matemáticas y modelos que permiten formalizar decisiones estratégicas.

- **Matrices**: representan los pagos o utilidades de cada jugador según las combinaciones de estrategias posibles.  
  Ejemplo: en el Dilema del prisionero, cada celda de la matriz indica la recompensa o castigo según las elecciones de ambos jugadores.

- **Algoritmos**: permiten calcular estrategias óptimas o encontrar equilibrios de manera sistemática, como los algoritmos de minimax o los que exploran árboles de decisión.

- **Probabilidad**: usada para modelar juegos con información incompleta o incertidumbre sobre las acciones del rival.

---

## Conceptos Clave

### Estrategia

Una **estrategia** es el plan completo de acción de un jugador ante cualquier situación del juego.

- Puede ser **determinista** o **mixta** (con distribución de probabilidad).
- Las **estrategias óptimas** maximizan la utilidad esperada del jugador.
- En juegos repetidos, la **estrategia evoluciona** según la respuesta del oponente o el aprendizaje previo.

### Equilibrio de Nash

Un **equilibrio de Nash** se alcanza cuando **ningún jugador puede mejorar su resultado unilaterlamente**; es decir, cada uno está “obligado” a mantener su estrategia, dado lo que hacen los demás.

- Es una **solución estable**: si todos la siguen, nadie tiene incentivo para desviarse.
- No siempre es **eficiente de Pareto**, ya que puede existir una estrategia conjunta que mejore el bienestar de todos sin empeorar a nadie.

### Eficiencia de Pareto

La **eficiencia de Pareto** se da cuando **no se puede mejorar una variable sin empeorar otra**.  
Ejemplo: equilibrio entre **peso y velocidad** en diseño mecánico o entre **beneficio y riesgo** en economía.

La **frontera de Pareto** representa el conjunto de soluciones óptimas que logran el mejor equilibrio entre variables en conflicto.

---

## Tipos de Juegos

- **Simétricos / Asimétricos**:  
	Simétrico si las reglas y recompensas son iguales para todos los jugadores.  
	Asimétrico si los roles, información o beneficios difieren.

- **Cooperativos / No cooperativos**:  
	Los jugadores pueden o no formar coaliciones.

- **Con información completa o incompleta**:  
	Depende de si todos conocen las estrategias y pagos de los demás.

- **Juegos repetidos**:  
	El número de rondas influye en la cooperación. En el dilema del prisionero repetido, puede surgir confianza o castigo.

- **Metajuego (MetaGame)**:  
	Representa el contexto más amplio del juego: **tendencias, popularidad, normas o convenciones** que influyen en las estrategias reales.  
	Ejemplo: en los videojuegos competitivos o los mercados financieros, el metajuego determina qué tácticas se consideran “óptimas”.

---

## Estrategias Avanzadas

- **Estrategia superracional**:  
	Asume que los jugadores reconocen la simetría de su situación y eligen la acción que optimiza el resultado conjunto.

- **Predicciones y mejor respuesta**:  
	Cada jugador busca la **mejor respuesta** a las estrategias esperadas del oponente. Esto forma la base para calcular el equilibrio.

- **Iteración de niveles**:  
	Modelo cognitivo donde los jugadores piensan en niveles (“yo creo que él cree que yo haré…”), dando lugar a dinámicas complejas de anticipación.

---

## Aplicaciones

- **Economía**: análisis de mercados, subastas, precios, negociación y competencia.
- **Economía del comportamiento**: integración de sesgos psicológicos en decisiones estratégicas.
- **Política y relaciones internacionales**: equilibrio entre cooperación y conflicto.
- **Algoritmos evolutivos** y simulaciones: modelan cómo surgen estrategias estables.
- **Diseño de sistemas multiagente**: en IA, robótica y redes.
- **Econometría y experimentación**: se estudian mediante entornos controlados como los *ring games* o juegos de laboratorio (referencia a Kneeland).

---

## Figuras Relevantes

- **John Nash**: formuló el concepto de equilibrio que lleva su nombre.  
- **Richard Thaler**: pionero de la economía del comportamiento, estudia cómo la racionalidad limitada afecta los resultados de los juegos.  
- **Kneeland**: investigó la interacción en entornos experimentales y los efectos de información parcial.

---

## Enlaces Relacionados

- Dilema del prisionero
- Eficiencia de Pareto
- Equilibrio de Nash
- Economía del comportamiento
- Matrices
- Algoritmos
- [probabilidad](/mates/probabilidad/)
- Estrategia
- Metajuego

# Teoría de Juegos — Ejemplos Computacionales y Modelos

Esta nota amplía la teoría de juegos incorporando ejemplos prácticos en código y modelos computacionales. Permite explorar cómo se representan y resuelven distintos tipos de juegos, desde el dilema del prisionero hasta el cálculo del equilibrio de Nash mediante algoritmos.

---

## Representación de Juegos con Matrices

Un juego se puede representar mediante una **matriz de pagos**, donde las filas y columnas corresponden a las estrategias de los jugadores, y cada celda muestra sus recompensas (utilidades).

### Ejemplo en Python

{% raw %}
```python
# Matriz de pagos del Dilema del Prisionero
# Cada tupla es (pago_jugador_A, pago_jugador_B)

payoffs = {
	('Cooperar', 'Cooperar'): (3, 3),
	('Cooperar', 'Traicionar'): (0, 5),
	('Traicionar', 'Cooperar'): (5, 0),
	('Traicionar', 'Traicionar'): (1, 1)
}

def resultado(jugador_A, jugador_B):
	return payoffs[(jugador_A, jugador_B)]

print(resultado('Cooperar', 'Traicionar'))  # (0, 5)
```
{% endraw %}`

Este tipo de representación es la base para modelar y simular estrategias iterativas o probabilísticas.

---

## Cálculo del Equilibrio de Nash

Un **equilibrio de Nash** puede encontrarse comparando las mejores respuestas de cada jugador. En juegos finitos, puede hacerse de forma exhaustiva o usando librerías especializadas.

### Ejemplo usando `nashpy`

{% raw %}
```python
import nashpy as nash
import numpy as np

# Matrices de utilidad para A y B
A = np.array([[3, 0],
			  [5, 1]])

B = np.array([[3, 5],
			  [0, 1]])

# Crear el juego
juego = nash.Game(A, B)

# Calcular equilibrios de Nash
equilibrios = list(juego.support_enumeration())

for eq in equilibrios:
	print("Estrategias mixtas (A, B):", eq)
```
{% endraw %}

Este código utiliza la librería `nashpy` para buscar estrategias mixtas (probabilidades sobre acciones) que constituyen un equilibrio.

---

## Estrategias Óptimas y Juegos Repetidos

En juegos repetidos, los jugadores ajustan su comportamiento según los resultados anteriores. Esto introduce dinámicas de **aprendizaje**, **confianza** y **represalia**.

### Estrategia Tit-for-Tat (Ojo por ojo)

{% raw %}
```python
def tit_for_tat(historial_oponente):
	if not historial_oponente:
		return 'Cooperar'
	return historial_oponente[-1]

# Ejemplo de interacción
historial_B = ['Cooperar', 'Traicionar', 'Traicionar']
print(tit_for_tat(historial_B))  # Traicionar
```
{% endraw %}

**Tit-for-Tat** coopera al inicio y luego imita la jugada del oponente, fomentando la reciprocidad. Es una estrategia que suele estabilizar el equilibrio cooperativo en juegos iterados.

---

## Modelos de Simulación y Metajuego

En escenarios complejos, como mercados financieros o entornos de videojuegos, el **metajuego** influye en las decisiones estratégicas. Aquí pueden usarse simulaciones multiagente.

### Simulación de agentes adaptativos

{% raw %}
```python
import random

acciones = ['Cooperar', 'Traicionar']

def estrategia_aleatoria():
	return random.choice(acciones)

def juego(prisionero_A, prisionero_B):
	return resultado(prisionero_A, prisionero_B)

# Simular múltiples rondas
for ronda in range(5):
	A = estrategia_aleatoria()
	B = estrategia_aleatoria()
	pagos = juego(A, B)
	print(f"Ronda {ronda+1}: A={A}, B={B}, pagos={pagos}")
```
{% endraw %}

Esto permite estudiar **tendencias de comportamiento**, **equilibrios emergentes** y **estabilidad evolutiva** dentro de un sistema dinámico.

---

## Eficiencia de Pareto y Frontera Óptima

Para analizar la **eficiencia de Pareto**, se puede representar la frontera de soluciones donde ninguna mejora es posible sin perjudicar a otro jugador.

### Visualización en Python

{% raw %}
```python
import matplotlib.pyplot as plt

# Puntos de utilidad (Jugador A, Jugador B)
resultados = [(1, 6), (2, 5), (3, 3), (4, 2), (5, 1)]

# Frontera de Pareto (aproximada)
pareto = [(1, 6), (2, 5), (3, 3)]

x, y = zip(*resultados)
px, py = zip(*pareto)

plt.scatter(x, y, label="Resultados posibles")
plt.plot(px, py, 'r-', label="Frontera de Pareto")
plt.xlabel("Utilidad Jugador A")
plt.ylabel("Utilidad Jugador B")
plt.legend()
plt.show()
```
{% endraw %}

El gráfico muestra las combinaciones posibles de resultados y la **frontera de Pareto**, donde ambos obtienen resultados óptimos según sus intereses.

---

## Extensiones y Conceptos Avanzados

* **Juegos estocásticos**: los resultados dependen de variables aleatorias o estados del sistema.
* **Equilibrio correlacionado**: los jugadores pueden coordinar sus decisiones con señales comunes.
* **Juegos evolutivos**: estrategias que sobreviven en el tiempo se consideran **evolutivamente estables**.
* **Economía del comportamiento**: introduce la irracionalidad y sesgos cognitivos (ver Richard Thaler).
* **Econometría experimental**: validación empírica mediante juegos de laboratorio (e.g., *ring games*, Kneeland).

---

## Enlaces Relacionados

* Dilema del prisionero
* Equilibrio de Nash
* Eficiencia de Pareto
* Economía del comportamiento
* Estrategia óptima
* Metajuego
* Juegos repetidos
* Algoritmos evolutivos
* Modelos multiagente

# Aplicaciones de la Teoría de Juegos

La **teoría de juegos** tiene aplicaciones prácticas en múltiples campos del conocimiento, desde la economía y la política hasta la inteligencia artificial, la programación y el diseño de sistemas distribuidos. Esta nota reúne ejemplos concretos, modelos computacionales y usos reales en los que los conceptos de estrategia, equilibrio y cooperación se aplican de manera directa.

---

## Economía y Mercados

### Competencia y precios

Las empresas en un mercado actúan como jugadores en un juego no cooperativo, ajustando precios y estrategias para maximizar beneficios.

- **Ejemplo clásico**: competencia entre empresas tipo *Cournot* (cantidad) o *Bertrand* (precio).
- El **equilibrio de Nash** representa un punto donde ninguna empresa mejora su ganancia cambiando su estrategia de forma unilateral.
- Aplicación práctica: fijación de precios en plataformas de subastas o en algoritmos de precios dinámicos (*surge pricing*).

### Subastas y licitaciones

- Los modelos de **subastas de Vickrey**, **inglesas** o **holandesas** se estudian como juegos con información incompleta.
- Permiten diseñar **sistemas de asignación eficientes**, como los usados por Google Ads o eBay.

{% raw %}
```python
# Ejemplo simplificado de subasta de segundo precio (Vickrey)
ofertas = {'A': 50, 'B': 65, 'C': 60}
ganador = max(ofertas, key=ofertas.get)
precio = sorted(ofertas.values())[-2]  # Segundo precio más alto
print(f"Ganador: {ganador}, paga: {precio}")
```
{% endraw %}`

---

## Política y Relaciones Internacionales

* **Modelos de disuasión nuclear**, **negociación diplomática** o **acuerdos comerciales** se analizan como juegos estratégicos donde los países eligen entre cooperar o confrontar.
* Ejemplo: el **dilema del prisionero iterado** describe las dinámicas de confianza y traición entre estados.

{% raw %}
```python
# Ejemplo: simulación de estrategias diplomáticas
import random

estrategias = ['Cooperar', 'Traicionar']

def ronda(pais_A, pais_B):
	if pais_A == 'Cooperar' and pais_B == 'Cooperar':
		return (3, 3)
	elif pais_A == 'Traicionar' and pais_B == 'Cooperar':
		return (5, 0)
	elif pais_A == 'Cooperar' and pais_B == 'Traicionar':
		return (0, 5)
	else:
		return (1, 1)

for i in range(5):
	A = random.choice(estrategias)
	B = random.choice(estrategias)
	print(f"Ronda {i+1}: A={A}, B={B}, pago={ronda(A,B)}")
```
{% endraw %}

---

## Inteligencia Artificial y Aprendizaje Automático

### Aprendizaje por refuerzo (Reinforcement Learning)

* En entornos **multiagente**, cada agente aprende estrategias óptimas mediante interacción, compitiendo o cooperando con otros.
* La noción de **equilibrio de Nash** se usa para definir **políticas estables** de comportamiento.

Ejemplo: algoritmos como **Q-Learning** o **Deep Q-Networks** incorporan principios de teoría de juegos en entornos donde múltiples agentes aprenden simultáneamente.

{% raw %}
```python
# Ejemplo básico de agente con política epsilon-greedy
import random

acciones = ['A', 'B']
Q = {'A': 0, 'B': 0}
epsilon = 0.1

def elegir_accion():
	if random.random() < epsilon:
		return random.choice(acciones)
	return max(Q, key=Q.get)
```
{% endraw %}

### Generative Adversarial Networks (GANs)

* Las **GANs** se basan directamente en la teoría de juegos: un **generador** y un **discriminador** compiten entre sí.
* El equilibrio surge cuando el generador produce resultados indistinguibles del conjunto real.

---

## Ciberseguridad y Redes

* Los ataques y defensas pueden verse como estrategias opuestas en un juego.
* Modelos de **juegos de seguridad** predicen cómo asignar recursos de defensa de forma óptima.

Ejemplo: elección estratégica de nodos críticos para proteger en una red.

{% raw %}
```python
# Juego de seguridad simplificado
import random

nodos = ['A', 'B', 'C', 'D']
defensor = random.choice(nodos)
atacante = random.choice(nodos)
print(f"Defensor protege {defensor}, atacante ataca {atacante}")
print("Ataque exitoso:", defensor != atacante)
```
{% endraw %}

---

## Economía del Comportamiento

* Integración de la racionalidad limitada y los sesgos cognitivos en decisiones estratégicas (ver Richard Thaler).
* Modelos que explican comportamientos aparentemente “irracionales” como la cooperación o la aversión a la pérdida.
* Aplicaciones: diseño de políticas públicas, incentivos fiscales y estrategias de *nudging*.

---

## Ciencias de la Computación y Programación

### Algoritmos Distribuidos y Consenso

* En sistemas distribuidos (blockchain, consenso, P2P), los nodos deben cooperar para mantener la integridad del sistema.
* El **consenso de Nash** o **mecanismos de incentivos** garantizan que la estrategia racional sea colaborar honestamente.

Ejemplo: mecanismo de consenso inspirado en la teoría de juegos (similar a Proof-of-Stake).

{% raw %}
```python
# Ejemplo: selección probabilística de validador
import random

nodos = {'A': 100, 'B': 200, 'C': 700}  # Poder de participación
validador = random.choices(list(nodos.keys()), weights=nodos.values())[0]
print(f"Validador elegido: {validador}")
```
{% endraw %}

### Diseño de APIs Competitivas

* En servicios y plataformas, la **interacción entre desarrolladores y usuarios** puede modelarse como un juego de incentivos.
* Optimizar una API implica equilibrar coste, latencia y adopción (frontera de Pareto).

---

## Biología y Ecología

* **Juegos evolutivos** explican la supervivencia de estrategias cooperativas o agresivas.
* Ejemplo: el **juego del halcón y la paloma**, donde las especies ajustan comportamientos según costos de conflicto.
* La **estrategia evolutivamente estable (ESS)** se mantiene frente a mutaciones o desviaciones individuales.

---

## Videojuegos y Simulación de Estrategias

* Los videojuegos multijugador (MOBA, RTS, etc.) son laboratorios naturales de teoría de juegos.
* El **metajuego** define qué estrategias dominan en un entorno dado.
* Los diseñadores usan modelos de equilibrio para **balancear personajes o armas**, evitando ventajas sistemáticas.

{% raw %}
```python
# Ejemplo: ajuste de balance basado en tasa de victoria
personajes = {'Mago': 0.55, 'Guerrero': 0.48, 'Arquero': 0.60}
for p, winrate in personajes.items():
	if winrate > 0.55:
		print(f"Reducir poder de {p}")
	elif winrate < 0.45:
		print(f"Aumentar poder de {p}")
```
{% endraw %}

---

## Resumen de Aplicaciones

| Campo          | Ejemplo de Juego              | Aplicación                   |
| :------------- | :---------------------------- | :--------------------------- |
| Economía       | Subastas, competencia         | Fijación dinámica de precios |
| Política       | Dilema del prisionero         | Negociación y disuasión      |
| IA / ML        | GANs, aprendizaje multiagente | Entrenamiento competitivo    |
| Ciberseguridad | Juegos de ataque-defensa      | Asignación óptima de defensa |
| Programación   | Sistemas distribuidos         | Consenso e incentivos        |
| Biología       | Juego del halcón y la paloma  | Estrategias evolutivas       |
| Videojuegos    | Metajuego                     | Balance de mecánicas         |

---

## Enlaces Relacionados

* Teoría de juegos
* Equilibrio de Nash
* Eficiencia de Pareto
* Economía del comportamiento
* Juegos evolutivos
* Aprendizaje por refuerzo
* Metajuego
* Modelos multiagente
* Algoritmos distribuidos
* Ciberseguridad



