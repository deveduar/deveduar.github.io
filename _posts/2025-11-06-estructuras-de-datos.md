---
date: 2025-11-06 12:08
title: estructuras de datos
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Computer Science
tags:
  - computer_Science
  - CS
---
# Estructuras de Datos

- [Computer Science](/computer%20science/computer-science/)
## Arrays
- Estructura lineal con elementos contiguos en memoria.
- Acceso por **índice**: lectura eficiente `O(1)`.
- Inserción/eliminación en medio:
	- Requiere mover posiciones de memoria.
	- Si la posición ya está ocupada, se hace **copia de elementos**.
- Muy eficiente para lectura secuencial.
- Uso común: listas de elementos conocidos, buffers.

## Linked List
- Lista enlazada: cada nodo apunta al siguiente mediante **punteros**.
- Acceso por posición es lento (`O(n)`), hay que recorrer desde inicio.
- Inserción/eliminación:
	- Rápida `O(1)` si se tiene referencia al nodo anterior.
- Tipos:
	- **Singly linked list**: puntero a siguiente.
	- **Doubly linked list**: puntero a siguiente y anterior.
- Uso: estructuras dinámicas donde se agregan/eliminan elementos frecuentemente.

## Hashmaps / Hash Tables
- Almacena datos en pares **clave-valor**.
- Acceso muy rápido `O(1)` promedio.
- Desordenada: el orden de los elementos no está garantizado.
- Resolución de colisiones: chaining, open addressing.
- Referencia: Tablas Hash (o Tabla de Dispersión) - Jarroba.
- Uso: caches, contadores, índices rápidos.

## Stacks (Pilas)
- Estructura **LIFO** (Last In, First Out).
- Operaciones principales:
	- `push`: agregar al tope.
	- `pop`: quitar del tope.
	- `peek/top`: ver el elemento del tope sin quitar.
- Uso: retroceso de navegación, llamadas recursivas, evaluadores de expresiones.

## Queues (Colas)
- Estructura **FIFO** (First In, First Out).
- Operaciones principales:
	- `enqueue`: agregar al final.
	- `dequeue`: quitar del frente.
- Ejemplo: playlists, gestión de tareas, colas de impresión.
- Variantes:
	- **Deque**: doble extremo, permite insertar/quitar en ambos extremos.

## Binary Search Tree (BST)
- Árbol binario donde:
	- Nodo izquierdo < nodo actual < nodo derecho.
- Operaciones:
	- Búsqueda, inserción, eliminación.
- Uso: índices, búsquedas rápidas.
- Conceptos relacionados:
	- Nodos, ramas, raíces.
	- Herencia de nodos para subárboles.
	- Ejemplo: en nodo derecho se almacenan números mayores.

## Árboles Balanceados
- AVL Trees: BST balanceado mediante rotaciones.
- B+ Trees: optimizado para bases de datos y sistemas de archivos.
- Mantienen altura mínima para eficiencia en búsqueda.

## Grafos
- [Grafos](/computer%20science/grafos/)
- Compuestos por **nodos** y **aristas**.
- Tipos:
	- Dirigidos / no dirigidos.
	- Con peso / sin peso.
	- Cíclicos / acíclicos.
- Aplicaciones: Google Maps, redes sociales, caminos mínimos.
- Estructuras relacionadas: BST, deques, hashmaps.
- Algoritmos:
	- Recursión vs punteros dobles para recorrer nodos.
	- BFS, DFS, Dijkstra, A*.

## Binary List
- Mezcla de conceptos de listas y árboles binarios.
- Representación interna eficiente para ciertos algoritmos de búsqueda.
- Uso en estructuras de prioridad y heaps.

# Estructuras de Datos - Expansión Avanzada

## Matrices / Arrays 2D
- Representación como arrays de arrays o bloques contiguos en memoria.
- Acceso mediante `[fila][columna]`.
- Operaciones: rotaciones, transposición, recorrido por filas o columnas.
- Uso: tableros de juegos, gráficos, mapas, transformaciones de datos.
## Heaps / Priority Queues
- **Heap máximo y mínimo**: árbol binario completo donde cada nodo cumple la propiedad de heap (padre ≥ hijos para max heap, padre ≤ hijos para min heap).
- Operaciones:
	- `insert`: agregar elemento, mantener propiedad de heap (`O(log n)`).
	- `extract-max` / `extract-min`: eliminar raíz y reordenar (`O(log n)`).
- Uso:
	- Colas de prioridad.
	- Algoritmos de grafos (Dijkstra, Prim).
	- Ordenación eficiente: **Heapsort**.

## Tries (Prefix Trees)
- Árbol especializado para almacenar cadenas de caracteres.
- Cada nodo representa un carácter; las rutas representan palabras o prefijos.
- Operaciones:
	- Inserción: `O(L)` donde L es longitud de la palabra.
	- Búsqueda de palabra o prefijo: `O(L)`.
- Uso:
	- Autocompletado.
	- Diccionarios de palabras.
	- Indexación rápida de textos.

## Sets
- Colección de elementos únicos, sin orden garantizado.
- Operaciones:
	- `add`, `remove`, `contains`.
	- Operaciones de conjuntos: unión, intersección, diferencia.
- Implementaciones comunes:
	- HashSet: rápido acceso `O(1)` promedio.
	- TreeSet: basado en BST, acceso `O(log n)`.
- Uso:
	- Eliminación de duplicados.
	- Búsquedas rápidas.
	- Operaciones matemáticas con conjuntos.

## Graphs Avanzados
- Representación:
	- **Matriz de adyacencia**: espacio `O(V^2)`, rápido acceso para verificar conexión.
	- **Lista de adyacencia**: espacio `O(V+E)`, eficiente para grafos dispersos.
- Tipos:
	- Dirigidos / no dirigidos.
	- Ponderados / no ponderados.
	- Cíclicos / acíclicos.
- Algoritmos avanzados:
	- Caminos mínimos: Dijkstra, Bellman-Ford, Floyd-Warshall.
	- Árboles de expansión mínima: Prim, Kruskal.
	- Recorridos: BFS, DFS, topological sort.
- Aplicaciones: mapas, redes sociales, rutas óptimas, planificación de tareas.

## Linked Structures Avanzadas
- **Skip Lists**:
	- Listas enlazadas con múltiples niveles para búsqueda rápida.
	- Complejidad promedio de búsqueda `O(log n)`.
- **XOR Linked List**:
	- Lista doble usando un solo puntero por nodo (almacena XOR de prev y next).
	- Ahorro de memoria, recorrido requiere manipulación de punteros.
- Uso:
	- Estructuras dinámicas con optimización de memoria y velocidad.

## Binary List / Heaps Binarios
- Mezcla de listas y árboles binarios para optimización de búsqueda.
- Representación interna eficiente: array para almacenar heap.
- Uso:
	- Colas de prioridad.
	- Algoritmos de ordenación y búsqueda de máximo/mínimo.

## Matrices Dispersas (Sparse Matrices)
- Matrices con mayoría de elementos nulos.
- Representación eficiente:
	- Lista de tripletas (fila, columna, valor).
	- Diccionario de pares (posición → valor).
- Uso:
	- Álgebra lineal, gráficos, almacenamiento de datos dispersos.

## Bloom Filters
- Estructura probabilística para verificar pertenencia a un conjunto.
- Operaciones:
	- `add`: agregar elemento.
	- `check`: verificar pertenencia (puede dar falsos positivos, nunca falsos negativos).
- Uso:
	- Filtros de correo, caches, detección rápida de duplicados.

## Union-Find / Disjoint Set
- Estructura para manejar conjuntos disjuntos.
- Operaciones:
	- `find`: identificar el conjunto de un elemento.
	- `union`: unir dos conjuntos.
- Optimización: path compression y union by rank.
- Uso:
	- Algoritmos de grafos: detección de ciclos, Kruskal.

# Estructuras de Datos - Conceptos Avanzados Nuevos

## Deque (Double-Ended Queue)
- Extensión de colas y pilas.
- Inserción y eliminación en **ambos extremos** (`O(1)`).
- Uso: buffers, undo/redo, sliding window problems.

## Circular / Ring Buffers
- Array o lista que conecta el final con el inicio.
- Manejo eficiente de colas de tamaño fijo.
- Uso: streaming de datos, colas de mensajes.

## Segment Trees
- Árbol para consultas de **rangos** y actualizaciones dinámicas.
- Operaciones: `O(log n)` para suma, mínimo, máximo en rangos.
- Uso: algoritmos competitivos, intervalos de datos.

## Fenwick Tree / Binary Indexed Tree (BIT)
- Similar a Segment Tree pero más compacto.
- Consultas y actualizaciones de sumas parciales `O(log n)`.
- Uso: procesamiento de rangos, estadísticas acumuladas.

## Grafos Avanzados
- Grafos dirigidos acíclicos (DAG):
	- Útiles para **scheduling** y dependencias.
- Algoritmos de flujo máximo:
	- Ford-Fulkerson, Edmonds-Karp.

## Advanced Hashing
- Técnicas para reducir colisiones:
	- Perfect hashing.
	- Cuckoo hashing.
- Uso: optimización de acceso y espacio.

## Persistent Data Structures
- Estructuras donde versiones anteriores permanecen accesibles tras modificaciones.
- Uso: undo/redo, programación funcional, control de versiones.

# Estructuras de Datos - Ejemplos de Código (Estructuras de Datos - Conceptos Avanzados Nuevos)

## Deque (Double-Ended Queue) - Python
{% raw %}
```python
from collections import deque

dq = deque()
dq.append(1)       # agregar al final
dq.appendleft(0)   # agregar al inicio
dq.pop()           # eliminar del final
dq.popleft()       # eliminar del inicio
print(dq)
```
{% endraw %}`

## Circular / Ring Buffer - Python

{% raw %}
```python
class CircularBuffer:
    def __init__(self, size):
        self.buffer = [None]*size
        self.start = 0
        self.end = 0
        self.size = size
        self.count = 0

    def enqueue(self, val):
        if self.count == self.size:
            raise Exception("Buffer lleno")
        self.buffer[self.end] = val
        self.end = (self.end + 1) % self.size
        self.count += 1

    def dequeue(self):
        if self.count == 0:
            raise Exception("Buffer vacío")
        val = self.buffer[self.start]
        self.start = (self.start + 1) % self.size
        self.count -= 1
        return val
```
{% endraw %}

## Segment Tree - Python

{% raw %}
```python
class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0]*(2*self.n)
        # construir árbol
        for i in range(self.n):
            self.tree[self.n + i] = arr[i]
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[i<<1] + self.tree[i<<1 | 1]

    def update(self, pos, val):
        pos += self.n
        self.tree[pos] = val
        while pos > 1:
            pos >>= 1
            self.tree[pos] = self.tree[pos<<1] + self.tree[pos<<1 | 1]

    def query(self, l, r):
        l += self.n
        r += self.n
        res = 0
        while l <= r:
            if l & 1:
                res += self.tree[l]
                l += 1
            if not r & 1:
                res += self.tree[r]
                r -= 1
            l >>= 1
            r >>= 1
        return res
```
{% endraw %}

## Fenwick Tree / Binary Indexed Tree - Python

{% raw %}
```python
class FenwickTree:
    def __init__(self, n):
        self.tree = [0]*(n+1)
        self.n = n

    def update(self, idx, val):
        idx += 1
        while idx <= self.n:
            self.tree[idx] += val
            idx += idx & -idx

    def query(self, idx):
        idx += 1
        res = 0
        while idx > 0:
            res += self.tree[idx]
            idx -= idx & -idx
        return res
```
{% endraw %}

## Grafos Dirigidos Acíclicos (DAG) - Python

{% raw %}
```python
from collections import defaultdict

class DAG:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def topological_sort(self):
        visited = set()
        stack = []

        def dfs(node):
            visited.add(node)
            for neighbor in self.graph[node]:
                if neighbor not in visited:
                    dfs(neighbor)
            stack.append(node)

        for node in self.graph:
            if node not in visited:
                dfs(node)
        return stack[::-1]

dag = DAG()
dag.add_edge(5, 2)
dag.add_edge(5, 0)
dag.add_edge(4, 0)
dag.add_edge(4, 1)
dag.add_edge(2, 3)
dag.add_edge(3, 1)
print(dag.topological_sort())
```
{% endraw %}

## Advanced Hashing - Python (Cuckoo Hash Simplificado)

{% raw %}
```python
class CuckooHash:
    def __init__(self, size):
        self.size = size
        self.table1 = [None]*size
        self.table2 = [None]*size

    def hash1(self, key): return key % self.size
    def hash2(self, key): return (key // self.size) % self.size

    def insert(self, key):
        for _ in range(self.size):
            if self.table1[self.hash1(key)] is None:
                self.table1[self.hash1(key)] = key
                return
            key, self.table1[self.hash1(key)] = self.table1[self.hash1(key)], key
            if self.table2[self.hash2(key)] is None:
                self.table2[self.hash2(key)] = key
                return
            key, self.table2[self.hash2(key)] = self.table2[self.hash2(key)], key
        raise Exception("Rehash necesario")
```
{% endraw %}

## Persistent Data Structure (Ejemplo simple: lista inmutable) - Python

{% raw %}
```python
class PersistentList:
    def __init__(self, data=None):
        self.data = data[:] if data else []

    def append(self, val):
        return PersistentList(self.data + [val])

    def __repr__(self):
        return str(self.data)

lst1 = PersistentList([1,2,3])
lst2 = lst1.append(4)
print(lst1)  # [1,2,3]
print(lst2)  # [1,2,3,4]
```
{% endraw %}


# Estructuras de Datos - Conceptos Complementarios Nuevos

## Sparse Sets / Sparse Arrays
- Array optimizado para grandes rangos con pocos elementos.
- Estructura:
	- Mantiene un array "denso" con elementos existentes.
	- Array "esparso" para mapear índices originales.
- Operaciones rápidas `O(1)` para inserción y búsqueda de elementos presentes.
- Uso: optimización de memoria, algoritmos de grafos densos, sistemas de simulación.

## Bloom Filters Avanzados / Counting Bloom Filters
- Extensión de Bloom Filter:
	- Permite **eliminación** de elementos mediante contadores.
	- Probabilidad controlada de falsos positivos.
- Uso: caches dinámicos, detección de duplicados, bases de datos distribuidas.

## K-D Trees / Octrees
- Árboles multidimensionales para datos espaciales.
- Operaciones:
	- Inserción, búsqueda de vecinos más cercanos (`O(log n)` promedio).
	- División recursiva por dimensiones.
- Uso: gráficos 2D/3D, colisiones en videojuegos, GIS (sistemas de información geográfica).

## Suffix Trees / Suffix Arrays
- Estructuras para manipulación y búsqueda de **subcadenas** en textos.
- Operaciones:
	- Búsqueda de patrones en `O(m)` para sufijos de longitud `m`.
	- Construcción de array o árbol de sufijos para procesamiento rápido.
- Uso: búsqueda de patrones, compresión de datos, bioinformática (genomas).

## Union-Find Avanzado
- Optimización de conjuntos disjuntos.
- Técnicas:
	- **Path Compression**: acorta rutas al encontrar el representante del conjunto.
	- **Union by Rank/Size**: unir conjuntos minimizando altura.
- Operaciones eficientes `O(α(n))` (función inversa de Ackermann, prácticamente constante).
- Uso: detección de ciclos en grafos, Kruskal, conectividad dinámica.

## Self-Balancing Trees Adicionales
- Variantes de BST balanceados para garantizar eficiencia.
- Tipos:
	- **Red-Black Trees**: mantiene propiedades de color y altura logarítmica.
	- **Treaps**: mezcla de BST y heap, balance probabilístico.
	- **Splay Trees**: autoajustables, traen nodos recientemente usados hacia la raíz.
- Uso: bases de datos, índices, caches dinámicas.

# Glosario Completo de Estructuras de Datos v1

---

## 🧩 ESTRUCTURAS LINEALES

### **Array**
Estructura lineal de tamaño fijo con elementos contiguos en memoria.  
- Acceso directo por índice `O(1)`.  
- Inserción y eliminación costosa en posiciones intermedias.  

### **Array Dinámico**
Variante de array que se expande automáticamente al llenarse.  
- Ejemplos: `ArrayList` (Java), `vector` (C++).  
- Inserción amortizada `O(1)`.

### **Matriz / Array 2D**
Estructura bidimensional para datos en filas y columnas.  
- Representación: arrays de arrays o bloques contiguos.  
- Uso: gráficos, tableros, transformaciones.

### **Sparse Array / Sparse Set / Sparse Matrix**
Versiones optimizadas para datos con muchos valores nulos.  
- Uso eficiente de memoria.  
- Representación mediante listas o diccionarios de coordenadas.

---

## 🔗 LISTAS ENLAZADAS

### **Singly Linked List**
Cada nodo apunta al siguiente.  
- Inserción y eliminación rápidas.  
- Acceso secuencial lento.

### **Doubly Linked List**
Cada nodo tiene punteros al anterior y al siguiente.  
- Facilita recorridos bidireccionales.  
- Mayor uso de memoria.

### **XOR Linked List**
Usa un solo puntero por nodo, guardando el XOR entre prev y next.  
- Ahorra memoria.  
- Requiere manipulación compleja de punteros.

### **Skip List**
Lista con múltiples niveles para acelerar búsqueda `O(log n)`.  
- Uso en bases de datos y sistemas distribuidos.

---

## 🧮 ESTRUCTURAS DE ACCESO DIRECTO

### **Hash Table / Hash Map**
Almacena pares clave-valor mediante funciones hash.  
- Acceso promedio `O(1)`.  
- Colisiones resueltas por chaining o open addressing.

### **Advanced Hashing**
Técnicas de mejora del hash:  
- *Perfect hashing*: sin colisiones.  
- *Cuckoo hashing*: reorganización entre dos tablas.  

### **Set**
Colección de elementos únicos.  
- Operaciones: unión, intersección, diferencia.  
- Implementaciones: `HashSet`, `TreeSet`.

---

## 📚 ESTRUCTURAS NO LINEALES

### **Binary Search Tree (BST)**
Árbol donde los nodos izquierdos < raíz < derechos.  
- Operaciones en `O(log n)` si está balanceado.

### **Árboles Balanceados**
Estructuras derivadas del BST para mantener eficiencia:
- **AVL Tree:** balance por rotaciones.  
- **Red-Black Tree:** balance por color.  
- **Splay Tree:** autoajustable según acceso reciente.  
- **Treap:** mezcla BST + heap (balance probabilístico).  

### **Heaps**
Árbol binario completo con propiedad de heap (padre ≥ hijos o ≤ hijos).  
- Tipos: *max heap* y *min heap*.  
- Uso: colas de prioridad, heapsort, Dijkstra.

### **Tries / Prefix Trees**
Árboles donde cada nodo representa un carácter.  
- Uso: autocompletado, búsquedas de prefijos.

### **Segment Tree**
Árbol para consultas y actualizaciones por rangos.  
- Operaciones `O(log n)`.  
- Uso: intervalos, sumas, mínimos, máximos.

### **Fenwick Tree / Binary Indexed Tree**
Estructura compacta para sumas acumuladas.  
- Alternativa más ligera que Segment Tree.  
- Consultas y actualizaciones `O(log n)`.

### **K-D Tree**
Árbol multidimensional para datos espaciales.  
- Uso: búsquedas 2D/3D, detección de colisiones, gráficos.

### **Octree**
Extensión del K-D Tree para dividir espacio 3D en ocho subregiones.  
- Uso: motores de videojuegos, renderizado, compresión espacial.

### **Suffix Tree / Suffix Array**
Estructuras para manipulación eficiente de cadenas y subcadenas.  
- Uso: búsqueda de patrones, compresión, bioinformática.

---

## 🔁 COLAS, PILAS Y DERIVADAS

### **Stack (Pila)**
Estructura LIFO (Last In, First Out).  
- Operaciones: `push`, `pop`, `peek`.  
- Uso: recursión, deshacer acciones, evaluación de expresiones.

### **Queue (Cola)**
Estructura FIFO (First In, First Out).  
- Operaciones: `enqueue`, `dequeue`.  
- Uso: colas de procesos, mensajes, tareas.

### **Deque (Double-Ended Queue)**
Cola doble con inserción y eliminación en ambos extremos.  
- Uso: buffers, ventanas deslizantes, estructuras híbridas.

### **Circular / Ring Buffer**
Array que conecta el final con el inicio.  
- Ideal para colas de tamaño fijo y streaming.

---

## 🌐 GRAFOS Y CONECTIVIDAD

### **Graph (Grafo)**
Conjunto de nodos (vértices) conectados por aristas.  
- Tipos: dirigidos, no dirigidos, ponderados, acíclicos.  
- Representaciones:
	- Matriz de adyacencia (`O(V²)`).
	- Lista de adyacencia (`O(V+E)`).

### **DAG (Directed Acyclic Graph)**
Grafo dirigido sin ciclos.  
- Uso: planificación, dependencias, compiladores.

### **Union-Find / Disjoint Set**
Estructura para manejar conjuntos disjuntos.  
- Operaciones: `find`, `union`.  
- Optimizaciones:
	- *Path compression*.
	- *Union by rank / size*.  
- Uso: Kruskal, conectividad dinámica.

---

## 🧠 ESTRUCTURAS PROBABILÍSTICAS Y PERSISTENTES

### **Bloom Filter**
Estructura probabilística para verificar pertenencia.  
- Posibles falsos positivos.  
- Uso: caches, detección rápida de duplicados.

### **Counting Bloom Filter**
Versión avanzada con contadores, permite eliminar elementos.

### **Persistent Data Structure**
Permite mantener versiones previas tras modificaciones.  
- Uso: undo/redo, programación funcional, control de versiones.

---

## ⚙️ COMPLEMENTOS Y VARIANTES

### **Sparse Set**
Estructura dual con arrays "densos" y "esparsos" para acceso `O(1)`.  
- Uso: motores de juegos, simulaciones.

### **Binary List / Heap Binario**
Implementación de heap usando arrays.  
- Uso: colas de prioridad, ordenaciones eficientes.

### **Advanced Hashing Techniques**
Estrategias para minimizar colisiones y optimizar espacio:
- Perfect hashing.
- Cuckoo hashing.
- Double hashing.

---

## 🧾 RESUMEN CATEGÓRICO

| Categoría | Ejemplos |
|------------|-----------|
| **Lineales** | Array, Lista Enlazada, Stack, Queue, Deque |
| **No Lineales** | BST, AVL, Heap, Trie, Segment Tree, Graph |
| **Probabilísticas** | Bloom Filter, Counting Bloom Filter |
| **Persistentes** | Persistent Structures |
| **Espaciales** | K-D Tree, Octree |
| **Texto** | Suffix Tree, Suffix Array |
| **Disjuntas** | Union-Find |
| **Avanzadas** | Fenwick Tree, Skip List, Sparse Set |

# Estructuras de Datos — Expansión y Conceptos Avanzados

---
## 🧠 CONCEPTOS AVANZADOS Y COMPLEMENTARIOS

### **Estructuras Persistentes vs Ephemerales**
- **Ephemeral:** solo conserva el estado actual (modificaciones destruyen el anterior).  
- **Persistent:** cada modificación crea una nueva versión sin perder las anteriores.  
	- Ejemplo: estructuras funcionales en lenguajes como Clojure o Haskell.  
	- Técnicas: *copy-on-write*, *path copying*, *structural sharing*.  
- Uso: sistemas de control de versiones, depuración histórica, algoritmos retroactivos.

---

### **Estructuras de Datos Inmutables**
- No se modifican tras su creación.  
- Permiten concurrencia segura y predicción del estado.  
- Implementadas mediante **estructuras persistentes** o **árboles compartidos**.  
- Ejemplo: `ImmutableList` (Java), `frozenset` (Python), `persistent vector` (Clojure).

---

### **Estructuras de Datos Concurrentes**
- Diseñadas para ejecución paralela sin conflictos.  
- Técnicas:
	- **Lock-free:** usan operaciones atómicas en lugar de bloqueos.
	- **Wait-free:** garantizan avance de todos los hilos.
	- **Concurrent queues**, **concurrent hash maps**.  
- Uso: sistemas distribuidos, procesamiento de eventos, motores de bases de datos.

---

### **Estructuras Autoajustables (Self-adjusting)**
- Modifican su forma según el patrón de acceso para optimizar el rendimiento futuro.  
- Ejemplos:
	- **Splay Tree:** mueve el nodo accedido a la raíz mediante rotaciones.
	- **Self-organizing list:** reordena según frecuencia de acceso.

---

### **Estructuras de Datos Amortizadas**
- Coste medio por operación se mantiene bajo aunque algunas sean costosas.  
- Ejemplo clásico: **Array dinámico** → redimensionamiento ocasional pero inserción promedio `O(1)`.  
- Otras: tablas hash con *rehashing*, *Fibonacci Heap* con consolidación diferida.

---

## 🌲 VARIANTES Y ESTRUCTURAS DERIVADAS DE ÁRBOLES

### **B-Trees y Derivados**
- Árboles balanceados multi-nivel diseñados para lectura desde disco.  
- **B-Tree:** cada nodo contiene múltiples claves y punteros.  
- **B+ Tree:** las claves repetidas solo en hojas, mejora recorridos secuenciales.  
- **B* Tree:** optimiza uso de espacio con redistribución entre nodos.  
- Uso: sistemas de archivos, bases de datos, índices de almacenamiento.

---

### **Trie Comprimido (Radix Tree / Patricia Tree)**
- Versión optimizada de Tries / Prefix Trees.  
- Compacta nodos con una sola rama.  
- Uso: tablas de enrutamiento, autocompletado, compresión de prefijos comunes.

---

### **Cartesian Tree**
- Combina propiedades de heap y árbol de búsqueda.  
- Cada nodo cumple: heap por clave y BST por índice.  
- Uso: construcción de estructuras en `O(n)` para RMQ (Range Minimum Query).

---

### **Fibonacci Heap**
- Heap con estructura en forma de lista de árboles.  
- Inserción y unión `O(1)`, extracción del mínimo `O(log n)` amortizado.  
- Uso: algoritmos de grafos como Dijkstra o Prim optimizados.

---

## 🔗 ESTRUCTURAS PARA GRAFOS Y REDES

### **Adjacency Matrix vs List**
- **Matriz:** más rápida para verificar existencia de arista, pero usa `O(V²)` espacio.  
- **Lista:** más eficiente en grafos dispersos (`O(V + E)`).  

### **Edge List**
- Representa cada conexión explícitamente como pares `(u, v, peso)`.  
- Ideal para grafos dinámicos o exportación.

### **Graph Representations Avanzadas**
- **Compressed Sparse Row (CSR):** optimiza almacenamiento de grafos grandes.  
- **Adjacency Map:** usa hash maps para accesos rápidos por nodo.  

### **Planar Graphs y Trees**
- Grafos que pueden representarse sin cruces entre aristas.  
- Uso: computación geométrica, topología, rutas.

### **Hypergraph**
- Generalización del grafo: una arista puede conectar más de dos nodos.  
- Uso: análisis de relaciones complejas, sistemas biológicos, bases de datos relacionales.

---

## ⚙️ ESTRUCTURAS FUNCIONALES Y GEOMÉTRICAS

### **Disjoint Set (Union-Find) Avanzado**
- Con optimizaciones: *path compression* + *union by rank*.  
- Variantes persistentes y paralelas.  
- Uso: detección de componentes, Kruskal, clusters dinámicos.

### **Spatial Partitioning Structures**
- Diseñadas para indexar datos espaciales multidimensionales:  
	- **QuadTree:** divide el espacio 2D en cuadrantes recursivos.  
	- **R-Tree:** estructura de árbol para objetos geométricos con áreas.  
	- **K-D Tree / Octree:** optimizan búsquedas por proximidad.  
- Uso: videojuegos, motores 3D, búsqueda de vecinos, GIS.

---

## 🔢 ESTRUCTURAS MATEMÁTICAS Y DE OPTIMIZACIÓN

### **Fenwick Tree (BIT)**
- Representa sumas acumuladas en árbol binario implícito.  
- Permite actualizaciones y consultas rápidas `O(log n)`.

### **Segment Tree Lazy Propagation**
- Optimización que aplaza actualizaciones masivas hasta ser necesarias.  
- Ideal para operaciones por rangos.

### **Sparse Table**
- Preprocesa datos para consultas inmutables en `O(1)` tras `O(n log n)` de preparación.  
- Uso: RMQ, mínimos/máximos de subarreglos.

---

## 🔍 ESTRUCTURAS PARA CADENAS Y TEXTO

### **Suffix Automaton**
- Representa todos los sufijos de una cadena de forma compacta.  
- Más eficiente que el *Suffix Tree* en memoria.  
- Uso: búsqueda de patrones, compresión, reconocimiento de substrings.

### **Aho-Corasick Automaton**
- Máquina finita que busca múltiples patrones simultáneamente.  
- Uso: detección de palabras clave, antivirus, analizadores léxicos.

### **KMP Table (Knuth-Morris-Pratt)**
- Tabla de prefijos usada para búsquedas lineales sin retrocesos.  
- Base de algoritmos de coincidencia de cadenas.

---

## 🧬 ESTRUCTURAS PROBABILÍSTICAS Y APROXIMADAS

### **Count-Min Sketch**
- Estructura para conteo aproximado de frecuencias.  
- Espacio sublineal, errores controlados.  
- Uso: detección de tendencias, analítica de streams.

### **HyperLogLog**
- Estima cardinalidad (número de elementos distintos) de un conjunto grande.  
- Uso: analítica web, sistemas distribuidos.

### **Skip Bloom Filter**
- Extiende el Bloom Filter con saltos jerárquicos para búsquedas más eficientes.

---

## 🧩 ESTRUCTURAS PERSONALIZADAS Y COMBINADAS

### **Composite Data Structures**
- Combinan múltiples estructuras para resolver problemas complejos:  
	- *HashMap + Heap:* cachés con prioridades (LRU, LFU).  
	- *Trie + Hash:* indexado de texto rápido.  
	- *Graph + Priority Queue:* rutas óptimas (Dijkstra, A*).  

### **Decorator Structures**
- Capas adicionales que extienden funcionalidad sin modificar la base.  
- Ejemplo: *ObservableList*, *SynchronizedMap*.

---

## 🧾 RESUMEN DE CONCEPTOS NUEVOS

| Categoría | Ejemplos Clave |
|------------|----------------|
| **Persistencia e Inmutabilidad** | Persistent structures, copy-on-write |
| **Concurrencia** | Lock-free structures, concurrent maps |
| **Autoajuste** | Splay trees, self-organizing lists |
| **Amortización** | Dynamic arrays, Fibonacci heap |
| **Árboles avanzados** | B+, B*, Radix, Cartesian |
| **Probabilísticas** | Count-Min Sketch, HyperLogLog |
| **Geométricas** | R-Tree, QuadTree, Spatial Indexes |
| **Cadenas** | Aho-Corasick, Suffix Automaton |
| **Combinadas** | Hash + Heap, Graph + Queue |

---

🧠 Esta nota amplía el glosario de [estructuras de datos](/computer%20science/estructuras-de-datos/) incluyendo estructuras **modernas, concurrentes, funcionales y probabilísticas**, abarcando enfoques teóricos y prácticos de nivel avanzado.

