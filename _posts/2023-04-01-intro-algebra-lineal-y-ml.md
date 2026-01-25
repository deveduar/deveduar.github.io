---
date: 2023-04-01 17:39
title: Intro Algebra lineal y ML
tags:
  - Mates
status: 🌟
Parent: "[[Area-IA]]"
keywords:
source:
cssclasses:
  - hide-embedded-header1
categories:
  - mates
public_note: "true"
category: mates
---
# Intro Algebra lineal y ML
`$= dv.current().file.tags.join(" ")`

- [mates](/uncategorized/mates/)
- [Data Science](/uncategorized/data-science/)
- [algebra lineal](/mates/algebra-lineal/)

## Recursos
- [COMBINACIÓN LINEAL | #3 Curso: Introducción al Álgebra Lineal para Inteligencia Artificial](https://www.youtube.com/watch?v=jY38xQr-y7Y&list=PLJjOveEiVE4DVtl4w1NWwMgPO4XszgWXa&index=4)
- [INTRO AL ÁLGEBRA LINEAL | #1 Curso: Introducción al Álgebra Lineal para Machine Learning](https://www.youtube.com/watch?v=ad417ZGi_E4)
- [What is NumPy? - NumPy v1.21 Manual](https://numpy.org/doc/stable/user/whatisnumpy.html)

## Vectorización de Código y Programación de Matrices
- Ejemplo: Precio de casas dependiendo del tamaño
- Conocer el tamaño de varias casas y sus precios de venta
- **Proceso Manual:**
	- Crear un loop para iterar sobre los datos
	- Definir dos matrices:
		- Matriz de 5x2: primera columna de unos, segunda columna con m²
		- Matriz de 2x1: contiene los coeficientes de la ecuación
	- Producto de matrices genera los precios de las casas
	- En ML, especialmente en regresión lineal, los algoritmos utilizan este método para construir modelos
	- Terminología:
		- Matriz de entrada
		- Matriz de coeficientes
		- Matriz de salida
	- Para muchas entradas (por ejemplo, 10.000), el mismo proceso aplica sin importar el tamaño
	- Coeficientes permanecen constantes
	- Este enfoque se llama **vectorización**: calcular muchos valores simultáneamente usando álgebra lineal
	- Librerías como **NumPy** optimizan estas operaciones y aumentan la eficiencia computacional

## Reconocimiento de Imágenes
- Redes neuronales convolucionales (CNN) para clasificar fotos
- Álgebra lineal aplicada en el procesamiento de imágenes
- **Imágenes en escala de grises:**
	- Cada pixel tiene un valor entre 0 y 255
	- Matriz de tamaño igual al de la imagen (por ejemplo, 400x400)
- **Imágenes en color:**
	- RGB → añadir dimensión extra a la matriz: 3x400x400 → esto es un **tensor**

## Reducción de la Dimensionalidad
- Conjuntos de datos con varias dimensiones (x, y, z…)
- Cada punto representado por un vector con valores para cada variable
- Método:
	- Identificar planos aproximados de los datos
	- Reducir dimensiones sin perder información relevante
	- Por ejemplo, de 3D a 2D, de 50 variables a 40, 20 o 10
- Útil para eliminar ruido y mejorar modelos de ML

## Vectores
- Representación y distintas perspectivas
- Operaciones básicas:
	- Suma de vectores
	- Multiplicación por escalar
- Conceptos avanzados:
	- **Combinación lineal**
	- **Transformación lineal**

## Matrices
- Definición y operaciones:
	- Transposición
	- Multiplicación de matrices
	- Suma y resta
	- Multiplicación escalar
- Representación en álgebra lineal con Python
- Forma de las variables importante para operaciones correctas
- Producto punto para multiplicar matrices y vectores

## Álgebra Lineal con Python
### Sumar y Restar Matrices
```python
import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = A + B
D = A - B
````

### Transponer una Matriz

```python
A_T = A.T
```

### Transpuesta en un Vector

```python
v = np.array([1, 2, 3])
v_T = v.reshape(-1, 1)  # convierte en columna
```

### Multiplicación Escalar por un Vector

```python
v_scaled = 3 * v
```

### Multiplicar Dos Matrices (Producto Punto)

```python
result = np.dot(A, B)
```

# Álgebra Lineal y ML: Conceptos Avanzados

## Espacios Vectoriales
- Definición: Conjunto de vectores donde se pueden realizar suma y multiplicación por escalares
- Propiedades importantes:
	- Cierre bajo suma y multiplicación escalar
	- Existencia del vector cero
	- Existencia de inversos aditivos
- Ejemplo en ML: Representación de características como vectores en un espacio n-dimensional

## Base y Dimensión
- **Base:** Conjunto mínimo de vectores linealmente independientes que generan todo el espacio
- **Dimensión:** Número de vectores en la base
- Relación con reducción de dimensionalidad: escoger vectores base que capturen la mayor varianza de los datos (PCA)

## Producto Interno (Dot Product)
- Fórmula: \( \mathbf{u} \cdot \mathbf{v} = \sum u_i v_i \)
- Permite calcular:
	- Longitud (norma) de un vector: \( ||\mathbf{v}|| = \sqrt{\mathbf{v}\cdot\mathbf{v}} \)
	- Ángulo entre vectores: \( \cos(\theta) = \frac{\mathbf{u}\cdot\mathbf{v}}{||\mathbf{u}||\,||\mathbf{v}||} \)
- Aplicación en ML: Similitud entre vectores de características, embeddings de palabras o imágenes

## Norma de un Vector
- Medida de magnitud de un vector
- Comunes:
	- L1 (Manhattan): suma de valores absolutos
	- L2 (Euclidiana): raíz cuadrada de suma de cuadrados
- Uso en ML: Regularización (L1 y L2), distancia en clustering

## Matrices Especiales
- Matriz identidad: actúa como 1 en multiplicación de matrices
- Matriz diagonal: solo elementos en la diagonal no nulos
- Matriz ortogonal: \( Q^T Q = I \), preserva longitudes y ángulos
- Uso: simplificación de transformaciones lineales y rotaciones

## Determinante y Rango
- **Determinante:** Indica si una matriz es invertible
- **Rango:** Número de filas o columnas linealmente independientes
- Aplicación: Validación de sistemas de ecuaciones, estabilidad de modelos

## Inversa de una Matriz
- Permite resolver sistemas lineales \( Ax = b \) mediante \( x = A^{-1}b \)
- Importante en regresión lineal clásica y transformaciones lineales

## Valores y Vectores Propios
- **Vector propio:** vector que solo cambia de escala bajo transformación lineal \( Av = \lambda v \)
- **Valor propio (λ):** factor de escala
- Aplicación:
	- PCA: reducción de dimensionalidad usando vectores propios de la matriz de covarianza
	- Redes neuronales: análisis de estabilidad y dinámicas de optimización

## Transformaciones Lineales
- Representan cambios de coordenadas o proyecciones de datos
- Expresadas como multiplicación de matrices
- Aplicación:
	- Escalado, rotación, traslación de datos
	- Normalización y proyecciones en ML

## Tensors y Álgebra Multidimensional
- Extensión de matrices a más dimensiones
- Importancia en Deep Learning:
	- Imágenes, secuencias y datos tabulares multidimensionales
	- Operaciones vectorizadas con librerías como NumPy y PyTorch
- Operaciones:
	- Suma, producto punto, multiplicación elemento a elemento
	- Transposición y reshaping de tensores

## Aplicaciones Avanzadas en ML
- **Redes Neuronales:** Multiplicación de matrices para propagación hacia adelante y backward
- **Regresión y Clasificación:** Resolución eficiente de sistemas lineales
- **Reducción de Dimensionalidad:** PCA, LDA, embeddings
- **Procesamiento de Imágenes:** CNN, convoluciones como operaciones lineales
- **Similitud y Clustering:** Producto punto, normas y ángulos entre vectores


# curso de mates-Intro Algebra lineal ML con imagenes

### Vectorización de código y programación de matrices
- El precio de una casa depende del tamaño de esta:
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled.png)
- Si conocemos el tamaño de cinco casas, podemos usar esa ecuación para calcular su precio de venta.

#### Proceso manual
![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%201.png)

#### Creación de loop e iteraciones
- Aplicación directa de álgebra lineal para calcular múltiples resultados:
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%202.png)

#### Representación con matrices
- Dos matrices:
	- Matriz de 5x2: primera columna con 1 y segunda columna con los m².
	- Matriz de 2x1: contiene los valores de nuestra ecuación.
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%203.png)

#### Producto de matrices
- Multiplicando las matrices obtenemos los precios de las casas:
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%204.png)
- Conceptos clave:
	- Matriz de entrada
	- Coeficientes
	- Matriz de salida
- Incluso con 10.000 entradas, el proceso sigue siendo el mismo:
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%206.png)
- Este enfoque se conoce como **vectorización de código**, optimizado en librerías como **NumPy** para mejorar la eficiencia computacional.

### Reconocimiento de imágenes
- Redes neuronales convolucionales utilizan álgebra lineal para clasificar y procesar fotos:
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%207.png)
- Procesamiento de imágenes:
	- Foto de 400x400 píxeles
	- Escala de grises: 256 tonos (0 = blanco, 255 = negro)
	- Representación como matriz donde cada elemento tiene un valor entre 0 y 255
- Fotos a color:
	- Escala RGB requiere añadir una dimensión, convirtiendo la matriz en un **tensor** 3x400x400

### Reducción de la dimensionalidad
- Conjunto de datos con 3 ejes: x, y, z
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%208.png)
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%209.png)
- Cada punto representado por un vector `[x, y, z]`
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2010.png)
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2011.png)
- Aproximación a un plano bidimensional cercano a los datos:
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2012.png)
- Transformación de la matriz de tres variables a dos variables para reducir ruido en modelos de ML:
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2013.png)
- Permite reducir dimensiones de grandes conjuntos de variables (50 → 40, 20, 10), mejorando la eficiencia y desempeño del modelo.


## Vectores 1

### Distintas perspectivas
- **Física:** Representados como flechas en el espacio con dirección y magnitud. Pueden existir en planos bidimensionales o en el espacio tridimensional.
- **Ciencias de la computación:** Listas ordenadas de números.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2014.png)  
	- El orden de los elementos importa; cada lista representa un vector bidimensional.
	- Un vector es una lista con dos dimensiones o más.
- **Matemática:** Combina ambos puntos de vista; un vector es cualquier objeto donde se puedan definir operaciones de suma de vectores y multiplicación por un número.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2015.png)

- En álgebra lineal, los vectores casi siempre se representan comenzando en el **origen**.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2016.png)  
	- Se representan como flechas y como listas de números.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2017.png)

#### Coordenadas y dimensiones
- **2 dimensiones:**  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2018.png)  
	- El origen es el punto central del espacio.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2019.png)  
	- Cada par de números representa un vector único.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2020.png)
- **3 dimensiones:**  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2021.png)  
	- El eje z es perpendicular a x e y.  
	- Un vector está definido por un triple de números (x, y, z), cada número indica el desplazamiento a lo largo de cada eje.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2022.png)  
	- Cada vector en el espacio corresponde a un único triple de números.

### Suma de vectores
- **Método geométrico (punta a cola):**  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2023.png)  
	- Se mueve el segundo vector hasta la punta del primero.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2024.png)  
	- El vector resultante va desde la cola del primero hasta la punta del segundo.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2025.png)  
	- Representa un paso combinado en distancia y dirección.
- **Método numérico:**  
	- Suma elemento a elemento de los vectores:  
		![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2031.png)  
	- Ejemplo: 2+4 = 6  
		![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2026.png)  
	- Caminos alternativos producen el mismo vector resultante:  
		![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2028.png)  
		![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2030.png)

### Multiplicación escalar
- Multiplicar un vector por un número (escalar) altera su longitud y/o dirección:
	- Factor >1: estira el vector  
		![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2032.png)  
	- Factor <1: reduce el vector  
		![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2033.png)  
	- Factor negativo: invierte la dirección y escala la longitud  
		![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2034.png)
- Este proceso se llama **escalamiento**.  
	- El número multiplicador se denomina **escalar**.  
	- En álgebra lineal, multiplicar por un escalar significa multiplicar cada componente del vector por ese número.  
		![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2035.png)

### Operaciones fundamentales del álgebra lineal
- **Suma de vectores**
- **Multiplicación por un escalar**  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2036.png)



## Vectores 2

### Combinación Lineal
- La combinación lineal permite describir un vector usando escalares que multiplican vectores base y luego sumando los resultados.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2037.png)
- Cada coordenada del vector actúa como un escalar:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2038.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2039.png)
- Escalamiento de vectores:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2040.png)

#### Vectores base en 2D
- `i`: vector unitario en dirección x (longitud 1)  
- `j`: vector unitario en dirección y (longitud 1)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2041.png)
- Coordenadas escalares aplicadas a vectores base:  
	- x del vector escala `i`  
	- y del vector escala `j`  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2042.png)
- El vector resultante es la suma de los vectores escalados:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2043.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2044.png)
- Los vectores `i` y `j` son **vectores base del sistema de coordenadas XY**:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2045.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2046.png)

#### Sistemas de coordenadas alternativos
- Es posible definir diferentes vectores base, creando nuevos sistemas de coordenadas:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2047.png)  
- Todos los vectores posibles se obtienen escalando los vectores base y sumando:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2048.png)  
- Con escalares libres, la mayoría de los pares de vectores pueden generar cualquier vector en el plano:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2049.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2050.png)
- Cada elección de vectores base define cómo se representan los vectores numéricamente.
- La combinación lineal de dos vectores se obtiene escalando y sumando:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2051.png)
- **Espacio generado (span):** conjunto de todos los vectores posibles a partir de combinaciones lineales:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2052.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2053.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2054.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2055.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2056.png)
- Diferencia entre vector y punto: cada vector se representa como un punto en el espacio, con cola en el origen:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2057.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2058.png)  
	![todas](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2059.png)

### Transformación Lineal
- Relación con matrices y multiplicación matriz-vector:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2060.png)
- Una transformación lineal es una función que mapea vectores de entrada a vectores de salida:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2061.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2062.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2063.png)
- Propiedades de las transformaciones lineales: mantienen líneas rectas y el origen fijo.  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2064.png)  
- Ejemplos de transformaciones no lineales: líneas curvas o origen desplazado:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2065.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2066.png)
- Transformaciones lineales conservan la cuadrícula: paralela y uniformemente espaciada:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2067.png)
- Descripción numérica: registrar la ubicación de los vectores base `i` y `j` después de la transformación:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2068.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2069.png)
- Ejemplo con vector `v = 4i - 2j`:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2070.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2071.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2072.png)
- Resultado final: vector transformado = combinación lineal de los vectores base transformados:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2073.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2074.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2075.png)
- Determinación de vector resultado conociendo la transformación de `i` y `j`:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2076.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2077.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2078.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2079.png)
- Transformación lineal bidimensional se describe con 4 números (coordenadas finales de `i` y `j`)  
- Representación en matriz 2x2: columnas = vectores base transformados:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2080.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2081.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2082.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2083.png)
- Fórmula general:  
	- Matriz `[[a, b], [c, d]]`  
	- Vector `(x, y)` → `(ax + by, cx + dy)`  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2084.png)  
	![error en la matriz de salida es d no b al final](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2085.png)
- Las matrices permiten describir transformaciones lineales de forma compacta:  
	![opcion 2 y 3](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2086.png)

### Matrices
- Colección de números ordenados en filas y columnas:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2087.png)  
- Dimensiones: `m x n` (m filas, n columnas)  
- Contienen números, símbolos o expresiones:  
	![simbolos](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2088.png)  
	![expresiones](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2089.png)
- Elementos de la matriz: `a_ij` = elemento en fila i, columna j  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2091.png)  
	- Relleno: primera fila `a11 a12 ... a1n`  
	- Primera columna: `a11 a21 ... am1`  
	- Último elemento: `amn`
- Índices en programación suelen comenzar desde 0 (Python):  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2093.png)

#### Operaciones con matrices
- **Suma:** mismas dimensiones  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2094.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2095.png)
- **Resta:** mismas dimensiones, incluye enteros y decimales  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2096.png)


## Vectores 3

### Transposición de matrices
- Los vectores pueden ser de tipo fila o columna.  
	- Ejemplo: `x` vector columna `[1, 2, 3]`  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2097.png)
- Transposición: convertir un vector columna en fila y viceversa, denotado con `T`:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2098.png)  
	- Ejemplo: fila `[3,2,1]` → columna `[3,2,1]`  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%2099.png)
- Propiedades de la transposición:
	1. No se pierde información; solo cambia la posición.  
	2. Transponer dos veces devuelve el vector original.  
	3. Dimensiones: vector `3x1` → `1x3` al transponer.
- Transposición de matrices: convierte filas en columnas y viceversa:  
	![convierte todas sus filas en columnas y viceversa](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%20100.png)  
	- Matriz `m x n` → `n x m` al transponer
- Ejemplo de matriz transpuesta:  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%20101.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%20102.png)

### Multiplicación de matrices
- Tipos de multiplicación:
	- Producto punto (`*`)
	- Producto cruz (se verá en otro curso)
- Producto punto:
	- Multiplicar elementos correspondientes y sumar; resultado = escalar  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%20104.png)
- Condición de compatibilidad:
	- Matriz `m x n` * Matriz `n x k` → resultado `m x k`  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%20105.png)  
	![Untitled](Data/Data-IA/Data-Algebra%20lineal%20ML%20Completado/Untitled%20106.png)
- Producto punto entre vectores fila y columna determina las filas de la matriz resultado:  
	![Untitled](Untitled%20112.png)  
	![Untitled](Untitled%20113.png)  
	![Untitled](Untitled%20114.png)  
	![Untitled](Untitled%20115.png)  
	![Untitled](Untitled%20116.png)  
	![Opcion 3](Untitled%20117.png)
- Recordar:
	- Matrices = colección de vectores
	- Producto punto = multiplicación de vector fila por vector columna
- Video explicativo: [Producto punto en matrices](https://youtu.be/gBGCCIRcD30?list=PLJjOveEiVE4DVtl4w1NWwMgPO4XszgWXa&t=658)

### Álgebra lineal con Python
- Uso de `numpy` para vectores y matrices:  
	![Untitled](Untitled%20118.png) → ![Untitled](Untitled%20128.png)
- `numpy.ndarray` permite:
	- Variable `v`: matriz 1D  
	- Variable `m`: matriz 2D  
	![Untitled](Untitled%20129.png)  
	![Untitled](Untitled%20130.png)  
	![Untitled](Untitled%20131.png)
- Escalares en Python:  
	![Untitled](Untitled%20133.png)
- Forma de variables (`shape`):
	- Método para comprobar dimensionalidad  
	- Ejemplo matriz `2x3`  
	![Untitled](Untitled%20134.png) → ![Untitled](Untitled%20137.png)
- Reshape: crear vectores fila o columna:
	- `(1,3)` → fila  
	- `(3,1)` → columna  
	![Untitled](Untitled%20138.png)  
	![Untitled](Untitled%20139.png)
- Verificación de forma de arrays y manejo de errores:  
	![Untitled](Untitled%20140.png)  
	![Untitled](Untitled%20141.png)  
	![Untitled](Untitled%20142.png)  
	![Untitled](Untitled%20143.png)
- Con esto se pueden declarar escalares, vectores y matrices en Python.

## Vectores 4

### Sumar y restar matrices
- Suma de matrices:
	- Ambas matrices deben tener la misma forma.  
	![Untitled](Untitled%20144.png)  
	![Untitled](Untitled%20145.png)
- Resta de matrices:
	- Igual requisito de dimensiones.  
	![Untitled](Untitled%20146.png)  
	![Untitled](Untitled%20147.png)
- Compatibilidad:
	- Solo matrices de la misma forma pueden sumarse o restarse  
	![Untitled](Untitled%20148.png)  
	![Untitled](Untitled%20149.png)  
	- Ejemplo: `m1` 2x3 y `m3` 2x2 → no compatibles  
	![Untitled](Untitled%20150.png)
- Excepciones:
	- Algunas operaciones no son posibles matemáticamente, aunque NumPy permita ciertas sumas de forma automática.
- Sumar un escalar a una matriz:  
	![Untitled](Untitled%20151.png)  
	![Untitled](Untitled%20152.png)  
	![Untitled](Untitled%20153.png)

### Transponer una matriz
- Método: `variable.T` en NumPy  
	![Untitled](Untitled%20154.png)  
	![Untitled](Untitled%20155.png)
- Ejemplo adicional:  
	![Untitled](Untitled%20156.png)  
	- Resultado: matriz 2x2, filas ↔ columnas  
	![Untitled](Untitled%20157.png)

### Transpuesta en un vector
- Similar al proceso con matrices.  
	![Untitled](Untitled%20158.png)  
- Matrices NumPy de una sola dimensión no pueden transponerse directamente  
	![Untitled](Untitled%20159.png)  
	- Forma del vector: 3  
- Solución: usar **reshape** para cambiar forma y poder transponer  
	![Untitled](Untitled%20160.png)  
	![Untitled](Untitled%20161.png)

### Multiplicación de un escalar por un vector
- Definir vector `x` y multiplicar por escalar (ej. 10)  
	![Untitled](Untitled%20162.png)  
	![Untitled](Untitled%20163.png)  
	- Resultado: vector misma longitud con elementos escalados

### Producto punto entre vectores
- Multiplicación de dos vectores para obtener un escalar  
	![Untitled](Untitled%20164.png)  
- Ejemplo en Python:  
	- Vectores `x` y `y`  
	- Método: `np.dot(x, y)`  
	![Untitled](Untitled%20165.png)  
	- Resultado: escalar (-66)

### Multiplicación de matrices usando producto punto
- Definir matrices `m1` y `m5`  
- Método: `np.dot(m1, m5)`  
	![Untitled](Untitled%20166.png)  
	![Untitled](Untitled%20167.png)  
	![Untitled](Untitled%20168.png)

- Referencia NumPy: [What is NumPy? - NumPy v1.21 Manual](https://numpy.org/doc/stable/user/whatisnumpy.html)
