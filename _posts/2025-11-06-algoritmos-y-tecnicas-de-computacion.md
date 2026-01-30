---
date: 2025-11-06 19:04
title: algoritmos y tecnicas de computacion
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: "true"
category: Computer Science
tags:
  - computer_Science
  - CS
---
# algoritmos y tecnicas de computacion

- [Computer Science](/computer%20science/computer-science/)
- diagramas UML
## Sort
- Técnicas de ordenación comunes:
	- **Bubble Sort**: intercambios sucesivos de elementos adyacentes.
	- **Selection Sort**: selecciona el mínimo (o máximo) en cada iteración.
	- **Insertion Sort**: inserta cada elemento en su posición ordenada.
	- **Merge Sort**: divide y conquista, combina sublistas ordenadas.
	- **Quick Sort**: usa pivote para dividir y ordenar recursivamente.
	- **Heap Sort**: utiliza un heap para ordenar de forma eficiente.
- Conceptos:
	- **Estabilidad**: si mantiene el orden relativo de elementos iguales.
	- **In-place**: si no necesita memoria adicional significativa.
	- **Complejidad esperada**:  
		- O(n²) para métodos simples.  
		- O(n log n) para métodos eficientes (Merge, Quick, Heap).

---

## Search

### BFF vs DFS
- **Breadth-First Search (BFS)**:  
	- Explora por niveles (amplitud).  
	- Usa una **cola (queue)**.  
	- Garantiza la distancia mínima en grafos no ponderados.  
	- Ideal para encontrar caminos cortos o nodos cercanos.
- **Depth-First Search (DFS)**:  
	- Explora en profundidad antes de retroceder.  
	- Usa una **pila (stack)** o recursión.  
	- Consume menos memoria pero puede desviarse en grafos grandes.
- Comparación:
	- BFS -> mejor para **rutas más cortas**.  
	- DFS -> mejor para **detección de ciclos**, **componentes conexos** o **búsquedas profundas**.

#### Recursos
- Breadth-first search - Wikipedia-Breadth-first_search
- Difference between Binary Tree and Binary Search Tree-difference-between-binary-tree-and-binary-search-tree

---

## backtracking
- Técnica de **exploración sistemática** que construye soluciones parciales y retrocede cuando no cumplen restricciones.
- Ejemplos clásicos:
	- N-Reinas, Sudoku, laberintos, combinaciones y permutaciones.
- Clave:
	- Retrocede al último punto de decisión cuando no hay solución parcial válida.
- **Valores repetidos**:  
	Evitar duplicados filtrando o aplicando poda en ramas iguales.

#### Recursos
- Vuelta atrás - Wikipedia, la enciclopedia libre-Vuelta_atr%C3%A1s
- 2.4 Backtracking  Programación, refactoriza tu mente-backtracking

---

## programacion paralela
- Ejecución de múltiples tareas simultáneamente.  
- Modelos:
	- **Multithreading**: varios hilos en el mismo proceso.
	- **Multiprocessing**: procesos separados, mejor aislamiento.
	- **GPU computing**: paralelismo masivo orientado a datos.
- Conceptos:
	- **Race Conditions**, **Deadlocks**, **Locks**, **Semáforos**.
	- **MapReduce**, **Fork/Join**, **Actor Model**.
	- Coordinación con **futuros**, **promesas** y **async/await**.
- Relación con Recursion: tareas recursivas paralelizables (divide & conquer paralelos).

---

## Recursion
- Función que se llama a sí misma hasta alcanzar una **condición base**.
- Tipos:
	- **Directa** o **indirecta** (a través de otra función).
	- **Tail recursion** optimizable en algunos lenguajes.
- Comparación:
	- Recursión → legibilidad.
	- Iteración → eficiencia (en tiempo y memoria).
- Ejemplo:
{% raw %}
```python
def factorial(n):
	if n == 0:
		return 1
	return n * factorial(n-1)
```
{% endraw %}`

---

## Paso por referencia o paso por valor

* **Paso por valor**: se copia el valor original → no se modifica el argumento fuera del ámbito.
* **Paso por referencia**: se pasa la **dirección en memoria** → los cambios afectan al original.
* **Copia superficial (shallow copy)**: copia referencias, no objetos anidados.
* **Copia profunda (deep copy)**: crea duplicados completos.

---

## UML y diagramas

* **UML** (Unified Modeling Language) incluye:
  * **Diagrama de clases**: relaciones y jerarquías.
  * **Diagrama de secuencia**: flujo de mensajes/llamadas.
  * **Diagrama de estados**: transiciones según eventos.
* Diferencias:
  * UML → conjunto de notaciones.
  * Diagramas → instancias específicas de vista del sistema.

---

## Interfaces, clases abstractas y herencia múltiple

* **Interfaz**: define contratos sin implementación.
* **Clase abstracta**: puede contener implementación parcial.
* **Herencia múltiple**: una clase puede heredar de varias (no siempre recomendable).
* Recomendación:
  * Usar **interfaces + composición** antes que herencia múltiple.

---

## Acoplamiento y cohesión

* **Cohesión**: qué tan bien las partes de un módulo trabajan juntas.
  → Alta cohesión = diseño claro y mantenible.
* **Acoplamiento**: dependencia entre módulos.
  → Bajo acoplamiento = mayor independencia.
* Comparación:
  * Alta cohesión + bajo acoplamiento → diseño ideal.

---

## Previsión de cambios y efectos

* Capacidad del sistema para **anticipar modificaciones sin romper dependencias**.
* Principios:

  * **Open/Closed**: abierto a extensión, cerrado a modificación.
  * **Liskov**: sustitución de subtipos.
  * **DI/IoC** facilitan extensibilidad.

---

## DI e IoC (Inversión de Control)

* **IoC**: delegar la creación y control de objetos a un contenedor externo.
* **DI (Dependency Injection)**: forma específica de IoC donde las dependencias se inyectan.
* Ventajas:

  * Menor acoplamiento, mayor testabilidad.
  * Facilita **mocking** y **módulos intercambiables**.
* Tipos:

  * Constructor, setter o interface injection.

---

## Composición vs herencia

* **Composición**: objetos que contienen otros para delegar comportamiento.
* **Herencia**: especialización de una clase base.
* Diferencias:

  * Composición → flexible, dinámica.
  * Herencia → rígida, jerárquica.
* Principio: *"Prefer composition over inheritance."*

---

## Idempotencia

* Operación que puede repetirse sin alterar el resultado final.
* Ejemplo:

  * HTTP PUT y DELETE deben ser idempotentes.
* Útil en sistemas distribuidos, transacciones y APIs.

---

## Callbacks y funciones acumuladoras

* **Callback**: función pasada como argumento que se ejecuta tras cierto evento.
* **Función acumuladora**: aplica operaciones sucesivas sobre una colección (reduce, fold).
* Ejemplo en [javascript](/desarrollo%20web/javascript/):

{% raw %}
```javascript
const sum = arr => arr.reduce((acc, val) => acc + val, 0);
```
{% endraw %}

* Riesgos: *callback hell* → mitigado por promesas y `async/await`.

---

## HOF (Higher Order Functions)

* Funciones que **reciben o retornan otras funciones**.
* Ejemplos: `map`, `filter`, `reduce`.
* Ventajas:

  * Composición funcional.
  * Reutilización de lógica.
* Base de [PF Programación Funcional](/computer%20science/pf-programaci-n-funcional/) junto a **inmutabilidad** y **funciones puras**.

---

## NPI (Notación Polaca Inversa) [mates](/uncategorized/mates/)

* Notación en la que los operadores se colocan **después** de los operandos.

  * Ejemplo: `3 4 +` en lugar de `3 + 4`.
* Evaluación mediante **pila (stack)**.
* Algoritmo típico:

{% raw %}
```python
def eval_rpn(tokens):
	stack = []
	for token in tokens:
		if token.isdigit():
			stack.append(float(token))
		else:
			b = stack.pop()
			a = stack.pop()
			if token == '+': stack.append(a + b)
			elif token == '-': stack.append(a - b)
			elif token == '*': stack.append(a * b)
			elif token == '/': stack.append(a / b)
	return stack[0]
```
{% endraw %}

* Usos:
  * Evaluación de expresiones.
  * Compiladores, intérpretes y calculadoras.

# algoritmos y tecnicas de computacion (expansión avanzada)

## Complejidad y eficiencia algorítmica
- **Notaciones de complejidad**:
	- O(1): constante  
	- O(log n): logarítmica (búsqueda binaria)  
	- O(n): lineal (recorridos simples)  
	- O(n log n): eficiente (ordenamientos óptimos)  
	- O(n²) o peor: cuadrática (anidación excesiva)
- **Análisis de tiempo vs espacio**: equilibrio entre rendimiento y consumo de memoria.
- **Trade-offs**: usar estructuras o técnicas más costosas en memoria para mejorar la velocidad (ej: tablas hash).
- Conceptos complementarios:
	- **Amortized complexity**  
	- **Big-Omega (Ω)**: límite inferior.  
	- **Big-Theta (Θ)**: comportamiento promedio.  
	- **Big-O (O)**: límite superior.

---

## Estructuras y técnicas complementarias de búsqueda y ordenación

### Búsqueda binaria
- Requiere lista ordenada. Divide el espacio de búsqueda a la mitad en cada iteración.
- Complejidad: **O(log n)**.
{% raw %}
```python
def binary_search(arr, target):
	left, right = 0, len(arr) - 1
	while left <= right:
		mid = (left + right) // 2
		if arr[mid] == target:
			return mid
		elif arr[mid] < target:
			left = mid + 1
		else:
			right = mid - 1
	return -1
```
{% endraw %}`

### Hashing

* Mapeo de claves a posiciones mediante una función hash.
* Ideal para búsquedas O(1) promedio.
* Colisiones:

  * **Encadenamiento (chaining)** o **dirección abierta (open addressing)**.
* Base de Tablas hash y caches.

### Ordenación híbrida

* Algoritmos modernos (como **Timsort**) combinan **Merge Sort + Insertion Sort** según el tamaño de las sublistas.
* Mejora el rendimiento en datos parcialmente ordenados.

---

## Técnicas avanzadas de exploración y optimización

### Branch and Bound

* Extiende backtracking con **función de coste** para podar ramas ineficientes.
* Usado en problemas de optimización (viajante, knapsack, scheduling).

### Programación dinámica

* Divide el problema en subproblemas superpuestos y almacena resultados parciales.
* Requiere **estructura recursiva + subproblemas repetidos**.
* Ejemplo clásico: Fibonacci con memoización.

{% raw %}
```python
def fib(n, memo={}):
	if n in memo: return memo[n]
	if n <= 1: return n
	memo[n] = fib(n-1, memo) + fib(n-2, memo)
	return memo[n]
```
{% endraw %}

* Claves:

  * **Top-down (memoization)**
  * **Bottom-up (tabulation)**
  * Optimización de espacio mediante reutilización de estados.

---

## Grafos y algoritmos asociados

* Representaciones:

  * Matriz de adyacencia.
  * Lista de adyacencia.
* Algoritmos fundamentales:

  * **Dijkstra** (caminos mínimos, sin pesos negativos).
  * **Bellman-Ford** (con pesos negativos).
  * **A*** (búsqueda heurística con función `f = g + h`).
  * **Kruskal / Prim** (árbol de expansión mínima).
  * **Topological Sort** (ordenación de tareas con dependencias).
* Aplicaciones:

  * Ruteo, planificación, análisis de dependencias, redes.

---

## Concurrencia, paralelismo y asincronía

* Diferencias:

  * **Concurrencia**: múltiples tareas *en progreso* (no necesariamente simultáneas).
  * **Paralelismo**: ejecución *real* en simultáneo (múltiples núcleos).
  * **Asincronía**: no bloqueante, orientada a eventos (ej: [javascript](/desarrollo%20web/javascript/) y su event loop).
* Patrones:

  * **Fork-Join** (división recursiva de tareas).
  * **MapReduce** (paralelismo distribuido).
  * **Pipelines** y **futuros/promesas**.
* Conceptos avanzados:

  * **Lock-free structures**, **atomics**, **CAS (compare-and-swap)**.
  * **Thread pools** y **work stealing** (asignación dinámica de hilos).

---

## Diseño y arquitectura orientada a cambios

### Principios SOLID (extensión de previsión de cambios)

* **S**ingle Responsibility
* **O**pen/Closed
* **L**iskov Substitution
* **I**nterface Segregation
* **D**ependency Inversion
* Beneficios:

  * Diseño modular, mantenible, extensible.
  * Reduce efectos colaterales y acoplamiento.

### Patrón Strategy + Factory

* Combina flexibilidad (Strategy) con control centralizado (Factory).
* Permite seleccionar e instanciar comportamientos dinámicamente.

{% raw %}
```python
class Strategy:
	def execute(self, a, b): pass

class Add(Strategy):
	def execute(self, a, b): return a + b

class Multiply(Strategy):
	def execute(self, a, b): return a * b

class StrategyFactory:
	@staticmethod
	def get_strategy(op):
		return {"add": Add(), "mul": Multiply()}.get(op)

s = StrategyFactory.get_strategy("add")
print(s.execute(3, 4))  # 7
```
{% endraw %}

---

## Arquitectura y patrones de control

* **Inversión de control (IoC)** → separación del flujo principal del detalle.
* **Dependency Injection (DI)** → facilita la sustitución de dependencias.
* **AOP (Programación orientada a aspectos)** → permite añadir comportamientos transversales (logs, seguridad) sin modificar código principal.
* **Idempotencia** y **side-effects** controlados en sistemas distribuidos y APIs.

---

## Evaluación funcional y transformación de datos

### Currying y composición funcional

* **Currying**: convertir una función de N parámetros en una secuencia de funciones unarias.

{% raw %}
```javascript
const add = x => y => x + y;
console.log(add(2)(3)); // 5
```
{% endraw %}

* **Composición**: combinar funciones para crear pipelines (`f∘g(x) = f(g(x))`).
* Beneficios:

  * Código modular, predecible, testable.

### Evaluación perezosa (lazy evaluation)

* Cálculo diferido hasta que el valor es necesario.
* Reduce consumo de recursos y permite flujos infinitos.
* Ejemplo: generadores en Python (`yield`).

---

## Pilas, colas y NPI

* NPI notacion polaca inversa utiliza **pila (stack)**.
* **Colas**: útiles para BFS o sistemas reactivos.
* Extensiones:

  * **Deque (double-ended queue)** → inserción y eliminación en ambos extremos.
  * **Priority Queue / Heap** → prioriza elementos según peso o coste.

---

## Conceptos de seguridad y consistencia en algoritmos

* **Idempotencia** → estabilidad frente a repetición.
* **Atomicidad** → operaciones indivisibles (importante en concurrencia).
* **Determinismo** → misma entrada = mismo resultado (clave para reproducibilidad).
* **Consistencia eventual** → sistemas distribuidos que convergen con el tiempo (en contraste con consistencia fuerte).

---

## Tendencias actuales y paradigmas emergentes

* **Algoritmos probabilísticos**:

  * Sacrifican exactitud por eficiencia (ej. Bloom filters, Monte Carlo).
* **Metaheurísticas**:

  * Algoritmos genéticos, recocido simulado, enjambre de partículas.
* **Aprendizaje automático como optimización**:

  * Muchos modelos usan descenso de gradiente como algoritmo base.
* **Quantum algorithms**:

  * Grover (búsqueda O(√n)), Shor (factorización en tiempo polinómico).

---

## Conclusión

Esta nota amplía el panorama desde fundamentos (ordenación, búsqueda, recursión) hasta patrones avanzados (composición, DI, concurrencia, metaheurísticas).
Integra conceptos de rendimiento, diseño, optimización y arquitectura para formar una visión completa de las **técnicas algorítmicas y computacionales modernas**.

# algoritmos y tecnicas de computacion (expansión complementaria)

## Paradigmas de programación y su relación con los algoritmos
- **Imperativo**: describe *cómo* ejecutar paso a paso (C, Python).
- **Declarativo**: describe *qué* lograr (SQL, Prolog, Haskell).
- **Funcional**: evita efectos secundarios, promueve pureza e inmutabilidad.
- **Orientado a objetos**: organiza en clases e instancias, basada en abstracción y encapsulación.
- **Reactivo**: modela flujos de datos asíncronos y propagación de cambios (Rx, Streams).
- **Lógico**: basada en reglas y predicados (backtracking automático).
- Relación con algoritmos:
	- Paradigma condiciona **cómo se expresan y optimizan** los algoritmos.
	- Ej: Dijkstra en funcional → recursion + listas inmutables; en imperativo → estructuras mutables + bucles.

---

## Técnicas de optimización de algoritmos
- **Memoización avanzada**:
	- Uso de decoradores o tablas hash para cachear resultados costosos.
- **Poda heurística**:
	- Aplicada en backtracking o búsqueda A*, evita explorar ramas improbables.
- **Dividir y conquistar (Divide & Conquer)**:
	- Fragmenta el problema → resuelve subproblemas → combina soluciones.
	- Ej: MergeSort, QuickSort, FFT.
- **Dynamic pruning**:
	- En aprendizaje automático o IA, descarta rutas con baja ganancia.
- **Optimización incremental**:
	- Evitar recomputaciones totales ante pequeñas variaciones en la entrada (ej. algoritmos de streaming).

---

## Técnicas de evaluación y pruebas de algoritmos
- **Testing determinístico**:
	- Pruebas reproducibles con entradas fijas.
- **Fuzzing**:
	- Generación automática de inputs aleatorios para detectar errores.
- **Benchmarking**:
	- Comparación empírica entre algoritmos con datasets reales.
- **Profiling**:
	- Análisis de tiempo, CPU y memoria por función.
- **Test de regresión algorítmica**:
	- Asegura que las optimizaciones no alteran el resultado esperado.
- Herramientas:
	- Python: `timeit`, `cProfile`, `pytest-benchmark`.
	- C/C++: `gprof`, `perf`, `valgrind`.

---

## Estructuras de datos avanzadas y sus implicaciones algorítmicas
- **Árboles autoequilibrados**:
	- AVL, Red-Black Tree, B-Tree.
	- Mantienen equilibrio O(log n) en búsqueda e inserción.
- **Tries (prefix trees)**:
	- Para búsquedas de cadenas o autocompletado.
- **Segment Trees / Fenwick Trees**:
	- Operaciones por rango (sumas, mínimos) en O(log n).
- **Disjoint Set (Union-Find)**:
	- Detección de componentes conectadas (usado en Kruskal).
- **Bloom Filter**:
	- Estructura probabilística: espacio reducido, falsos positivos posibles.
- **Graph embeddings**:
	- Representaciones vectoriales de grafos para aprendizaje o predicción.

---

## Paradigmas de resolución de problemas
- **Greedy (voraces)**:
	- Toman decisiones locales óptimas esperando resultado global óptimo.
	- Ej: Huffman, Kruskal, Dijkstra.
- **Divide and Conquer**:
	- Resuelve recursivamente dividiendo en subproblemas.
- **Dynamic Programming**:
	- Reutiliza soluciones a subproblemas.
- **Backtracking / Branch & Bound**:
	- Explora soluciones combinatorias.
- **Heurísticas y metaheurísticas**:
	- Aproximaciones cuando el coste exacto es demasiado alto.
	- Ej: recocido simulado, algoritmos genéticos, búsqueda tabú.
- **Algoritmos estocásticos**:
	- Incorporan aleatoriedad controlada (Monte Carlo, Las Vegas).

---

## Algoritmos distribuidos y consistencia
- **Modelos de comunicación**:
	- Mensajería asíncrona (colas, topics).
	- Memoria compartida distribuida.
- **Algoritmos de consenso**:
	- Paxos, Raft, 2PC, 3PC (Two/Three-Phase Commit).
	- Garantizan consistencia entre nodos.
- **Relojes lógicos**:
	- Lamport y Vector clocks → orden parcial de eventos.
- **Compensaciones (Sagas)**:
	- Mecanismos de rollback en transacciones distribuidas.
- **Replicación e idempotencia**:
	- Reintentos seguros frente a fallos de red.
- **Patrones de consistencia eventual**:
	- CRDTs, gossip protocols, leader election.

---

## Análisis de grafos avanzado
- **Centralidad y métricas estructurales**:
	- Grado, intermediación (betweenness), cercanía.
- **Flujos máximos y cortes mínimos**:
	- Ford-Fulkerson, Edmonds-Karp.
- **Matching y cubrimientos**:
	- Emparejamientos bipartitos, algoritmos de Hopcroft-Karp.
- **Algoritmos espectrales**:
	- Basados en descomposición de matrices de adyacencia o Laplacianas.
- **Detección de comunidades**:
	- Modularity maximization, Girvan–Newman.
- Aplicaciones:
	- Redes sociales, biología computacional, sistemas de recomendación.

---

## Teoría de autómatas y algoritmos formales
- **Autómatas finitos**:
	- Deterministas (DFA) y no deterministas (NFA).
	- Base de [Expresiones regulares](/computer%20science/expresiones-regulares/).
- **Autómatas de pila (PDA)**:
	- Para lenguajes libres de contexto (parsers).
- **Máquinas de Turing**:
	- Modelo general de cómputo; base de la teoría de complejidad.
- **Gramáticas formales (Chomsky)**:
	- Tipo 0–3 → jerarquía de potencia expresiva.
- **Lenguajes decidibles vs indecidibles**:
	- Ejemplo: problema de la parada (Halting Problem).

---

## Complejidad computacional y teoría de clases
- **P, NP, NP-completo, NP-hard**:
	- Clasificación según tiempo de resolución y verificación.
- **Reducciones polinómicas**:
	- Transformar un problema en otro para probar su dificultad.
- **Problemas clásicos NP**:
	- SAT, viajante, clique, subset-sum.
- **Aproximación**:
	- Algoritmos que garantizan soluciones cercanas al óptimo en tiempo polinómico.
- **Randomized algorithms**:
	- Reducen complejidad esperada mediante aleatoriedad (QuickSelect, Bloom filters).

---

## Algoritmos en inteligencia artificial
- **Búsqueda informada**:
	- A*, IDA*, Greedy Best-First.
- **Optimización evolutiva**:
	- Algoritmos genéticos, meméticos, de enjambre.
- **Aprendizaje por refuerzo**:
	- Q-Learning, SARSA → balance entre exploración/explotación.
- **Redes neuronales**:
	- Entrenamiento basado en backpropagation (descenso de gradiente).
- **Algoritmos de clustering y clasificación**:
	- K-Means, DBSCAN, Decision Trees.
- **Teoría de juegos algorítmica**:
	- Equilibrio de Nash, subasta de Vickrey, estrategias adaptativas.

---

## Algoritmos cuánticos
- **Principios**:
	- Superposición y entrelazamiento.
- **Grover**:
	- Búsqueda en O(√n).
- **Shor**:
	- Factorización de enteros en tiempo polinómico.
- **Quantum Fourier Transform (QFT)**:
	- Base de muchos algoritmos cuánticos.
- **Limitaciones actuales**:
	- Decoherencia, ruido cuántico, tamaño de qubits.
- Aplicaciones futuras:
	- Criptografía post-cuántica, simulación molecular, optimización.

---

## Criptografía y algoritmos de seguridad
- **Criptografía simétrica**: AES, DES → misma clave para cifrar/descifrar.
- **Criptografía asimétrica**: RSA, ECC → par de claves pública/privada.
- **Hashing criptográfico**: SHA, BLAKE, Argon2 → inmutabilidad de datos.
- **Firmas digitales**:
	- Garantizan autenticidad y no repudio.
- **Pruebas de conocimiento cero (ZKP)**:
	- Demostrar que algo es cierto sin revelar la información.
- **Cifrado homomórfico**:
	- Permite operar sobre datos cifrados sin desencriptar.

---

## Algoritmos en sistemas y redes
- **Algoritmos de planificación de CPU**:
	- Round Robin, SJF, Prioridades.
- **Gestión de memoria**:
	- FIFO, LRU, LFU.
- **Ruteo en redes**:
	- Dijkstra, Bellman-Ford, OSPF, BGP.
- **Compresión de datos**:
	- Huffman, LZ77, Arithmetic Coding.
- **Sistemas de archivos y estructuras persistentes**:
	- B+ Trees, Log-Structured Merge Trees (LSM).

---

## Visualización, geometría y gráficos computacionales
- **Algoritmos geométricos**:
	- Convex Hull (Graham, Jarvis).
	- Intersección de segmentos.
- **Rasterización y renderizado**:
	- Bresenham, Ray tracing.
- **Compresión de imágenes y señales**:
	- DCT, Wavelets, Fourier.
- **Simulación física y optimización**:
	- Verlet integration, RK4, colisiones.
- **Computación visual e IA gráfica**:
	- Algoritmos de segmentación, detección de bordes, flujo óptico.

---

## Conclusión
Esta expansión complementaria cubre ámbitos **formales, distribuidos, probabilísticos, de IA y de sistemas**, ampliando los enfoques algorítmicos hacia paradigmas modernos (cuántico, reactivo, evolutivo, criptográfico).  
Integra teoría, práctica y arquitectura, completando un panorama **total y transversal de la computación algorítmica contemporánea**.

