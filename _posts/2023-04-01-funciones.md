---
date: 2023-04-01 18:06
title: Funciones
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
# Funciones

## Conceptos básicos
- Una función es una relación entre dos conjuntos numéricos.
	- Ejemplo:
		- Conjunto A: `1 2 3 4`
		- Conjunto B: `2 4 6 8 10`
		- Cada elemento de B es el doble de A → `y = 2x` o `f(x) = 2x`
	- Representación:
		- Algebraica: `y = 2x`
		- Conjuntos: X y Y (A y B)
		- Gráfica: Plano cartesiano, puntos correspondientes a pares (x, y)
		- Tabla de valores: mostrar cada x con su y
	- Función de primer grado:
		- A partir de la gráfica, se puede calcular y para un x dado sin conocer la expresión algebraica.
		- Ejemplo: encontrar `y` cuando `x = -3`.

## Dominio y recorrido
- **Dominio:** conjunto de valores que puede tomar `x`.
	- Determinado a partir de la gráfica.
	- Ejemplo: empieza en `-6` (punto cerrado) y termina en `8` (punto abierto)
	- Notación: `[-6, 8)`
- **Recorrido:** conjunto de valores que puede tomar `y`.
	- Ejemplo: de `-2` (cerrado) a `7` (abierto)
	- Notación: `[-2, 7)`

## Punto de corte con los ejes
- Punto donde la gráfica atraviesa los ejes.
	- Eje X: puede tener varios puntos de corte.
	- Eje Y: máximo un punto de corte; nunca más de uno.
- Coordenadas: `(x, y)`
- **Signo de la función:**
	- Intervalos donde la función es positiva o negativa.
	- Ejemplo: función positiva del `-4` al `-3`, negativa hasta `3`, positiva a partir de ahí.
	- Se indican intervalos de `x`, no de `y`.

## Simetría
- **Gráfica:**
	- Función par: simétrica respecto al eje Y
	- Función impar: simétrica respecto a la bisectriz del primer cuadrante
	- Función sin simetría: no cumple ninguna norma
- **Algebraica:**
	- Una función es par si `f(-x) = f(x)` para todo `x`.
	- Ejemplo: `(-x)^2 = x^2`
	- Para polinomios: todos los exponentes pares + término independiente → función par.

## Periodicidad
- Función que se repite en intervalos de longitud `T`.
- Se repite a lo largo del eje X.

## Monotonía
- **Crecimiento:** aumenta `x` → aumenta `y`
- **Decrecimiento:** aumenta `x` → disminuye `y`
- Se indica mediante intervalos abiertos, usando `∪` para unión de intervalos.

## Máximos y mínimos
- **Relativos:**
	- Máximo relativo: valor más alto de su entorno
	- Mínimo relativo: valor más bajo de su entorno
- **Absolutos:**
	- Máximo absoluto: valor más alto en todo el dominio
	- Mínimo absoluto: valor más bajo en todo el dominio

## Continuidad y discontinuidad
- Función continua: se puede dibujar sin levantar el lápiz.
- Tipos de discontinuidad:
	- Evitable: solo un punto interrumpe
	- Salto finito
	- Salto infinito
- **Asíntota vertical:** la función se aproxima a un valor pero no lo toca (tiende al infinito)

## Tipos de funciones según su expresión
- **Funciones polinómicas**
	- Grado 0: constante
	- Grado 1: lineal
	- Grado 2: cuadrática → forma: `ax^2 + bx + c`
	- Grado n: general
- **Funciones racionales**
	- Cociente de polinomios: `f(x) = P(x)/Q(x)`
	- Dominio: valores donde Q(x) ≠ 0
- **Funciones radicales**
	- Contienen raíces: `f(x) = √x` o `f(x) = √(x-3)`
	- Dominio: valores que no generan raíces negativas
- **Funciones exponenciales**
	- Forma: `f(x) = a^x`
	- Crecen/decrecen rápidamente según `a > 1` o `0 < a < 1`
- **Funciones logarítmicas**
	- Inversa de las exponenciales: `f(x) = log_a(x)`
	- Dominio: `x > 0`
- **Funciones trigonométricas**
	- `sen(x)`, `cos(x)`, `tan(x)` y sus transformaciones
	- Periodicidad, amplitud, fase, frecuencia

## Transformaciones de funciones
- Traslaciones horizontales y verticales
- Reflexiones respecto a los ejes
- Estiramiento y compresión (factor de escala)

## Composición de funciones
- Notación: `(f∘g)(x) = f(g(x))`
- Dominio de la composición: valores de x que cumplen con g(x) ∈ dominio de f

## Función inversa
- Existe si la función es biyectiva (inyectiva + sobreyectiva)
- Notación: `f⁻¹(x)`
- Gráfica: simétrica respecto a la bisectriz `y = x`

## Límites y comportamiento al infinito
- Límite cuando `x → ∞` o `x → -∞`
- Asíntotas horizontales: cuando la función se aproxima a un valor constante
- Asíntotas oblicuas: pendiente diferente de cero

## Funciones definidas por partes
- Una función puede definirse con distintas expresiones según el intervalo de `x`.
	- Ejemplo:
		- `f(x) = { x^2, si x < 0; 2x+1, si x ≥ 0 }`
- Útil para modelar fenómenos con comportamiento diferente en distintos rangos.
- Dominio y recorrido se analizan considerando cada parte.

## Funciones compuestas y encadenadas
- Composición de más de dos funciones: `(f∘g∘h)(x) = f(g(h(x)))`
- Evaluación paso a paso:
	- Primero `h(x)`
	- Luego `g(h(x))`
	- Finalmente `f(g(h(x)))`
- Dominio: intersección de dominios de cada función implicada.

## Funciones inyectivas, sobreyectivas y biyectivas
- **Inyectiva:** cada valor de `y` tiene a lo sumo un valor de `x`.
- **Sobreyectiva:** cada valor posible de `y` es alcanzado por algún `x`.
- **Biyectiva:** cumple ambas → garantiza existencia de inversa.

## Funciones crecientes y decrecientes estrictas
- Más estricta que la monotonía:
	- Creciente estricta: `x1 < x2 → f(x1) < f(x2)`
	- Decreciente estricta: `x1 < x2 → f(x1) > f(x2)`
- Útil para determinar inyectividad.

## Funciones continuas y derivables
- **Derivabilidad:** existe la derivada `f'(x)` en cada punto.
- Función derivable → continua, pero función continua → no siempre derivable.
- Relación con extremos locales:
	- `f'(x) = 0` → posibles máximos o mínimos relativos.

## Aplicaciones de funciones
- Física: posición, velocidad, aceleración
- Economía: costo, ingreso, beneficio
- Ingeniería: señales, sistemas de control
- Informática: algoritmos de crecimiento, complejidad temporal
# Operaciones con matrices

## Conceptos básicos
- Operaciones: suma, resta y producto de matrices
	- [Producto, suma y resta de matrices.](https://www.youtube.com/watch?v=M6VVitDamVI&list=PL8Ee8uJSAwYP_drilCwLWpsxJxluG9OzV)
- Matrices: n filas × n columnas
- Producto de matrices:
	- Número de columnas de la primera = número de filas de la segunda
	- Generalmente no conmutativo → `A * B ≠ B * A`
	- Resultado: matriz con n filas de la primera y n columnas de la segunda
	- Ejemplo: matriz `3×2` → calcular elemento fila 1, columna 1 → suma de productos
- Suma y resta:
	- Solo se pueden sumar/restar matrices de igual dimensión

## Matriz transpuesta
- Intercambiar filas por columnas: `A^T`
- Propiedades: `(A^T)^T = A`, `(A + B)^T = A^T + B^T`, `(AB)^T = B^T A^T`

## Matriz inversa
- Solo para matrices cuadradas
- `A * A⁻¹ = I` donde `I` es la identidad
- Método de cálculo: Gauss-Jordan, cofactores, adjunta

## Determinante
- Valor escalar asociado a matrices cuadradas
- Propiedades:
	- Determinante de matriz triangular: producto de la diagonal
	- Si se intercambian filas: cambia de signo
	- Determinante de producto: `det(AB) = det(A) * det(B)`

## Rango de una matriz
- Número máximo de filas/columnas linealmente independientes
- Relacionado con solución de sistemas lineales

## Operaciones especiales
- Matriz identidad: `I_n`
- Matriz nula: todos sus elementos son 0
- Matriz diagonal: elementos solo en la diagonal principal
- Matriz simétrica: `A = A^T`
- Matriz antisimétrica: `A = -A^T`

## Sistemas de ecuaciones lineales usando matrices
- Representación: `AX = B`
- Solución:
	- Si `det(A) ≠ 0` → solución única: `X = A⁻¹ * B`
	- Si `det(A) = 0` → ninguna o infinitas soluciones
- Método de Gauss, Gauss-Jordan, inversa, regla de Cramer

## Propiedades avanzadas de matrices
- **Matriz ortogonal:** `A^T = A⁻¹`
- **Matriz triangular:** superior o inferior
- **Matriz escalar:** diagonal con todos los elementos iguales
- **Matriz de permutación:** reordena filas o columnas

## Rango y nulidad
- **Rango (Rank):** número de filas o columnas linealmente independientes
- **Nulidad (Nullity):** dimensión del espacio de soluciones homogéneas (`AX = 0`)
- Teorema fundamental: `rango(A) + nulidad(A) = número de columnas`

## Determinantes especiales
- Determinante de matriz triangular: producto de la diagonal
- Determinante de matriz diagonal o escalar: producto de los elementos de la diagonal

## Matrices y sistemas lineales
- **Sistemas homogéneos:** `AX = 0` → soluciones triviales o infinitas
- **Sistemas no homogéneos:** `AX = B`
- Métodos de resolución:
	- Eliminación de Gauss
	- Inversa de la matriz
	- Regla de Cramer (solo si `det(A) ≠ 0`)

## Eigenvalores y eigenvectores (introducción)
- Para matriz cuadrada `A`, vector `v` y escalar `λ`:
	- `A*v = λ*v`
- `λ` → eigenvalor, `v` → eigenvector
- Aplicaciones:
	- Transformaciones lineales
	- Dinámica de sistemas
	- Compresión de datos (PCA)

## Matriz simétrica y diagonalización
- Matriz simétrica: `A = A^T`
- Puede diagonalizarse con matriz ortogonal `P`:
	- `A = P * D * P^T`
	- `D` diagonal con eigenvalores
- Útil para simplificar cálculos y resolver sistemas


# Cursos con imágenes

### curso-mates-Funciones básico

#### Relación entre dos conjuntos numéricos
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled.png)
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%201.png)
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%202.png)

**Tabla de valores**
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%203.png)

**Punto en la tabla cartesiana**
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%204.png)

**Función de primer grado**
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%205.png)

A partir de la gráfica, calcular qué valor de **x** corresponde a un valor de **y** sin conocer la expresión algebraica.

Ejemplo: hallar el punto **y** que corresponde a **x = -3**  
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%206.png)

---

#### Función - Dominio y recorrido
Calcular a partir de una gráfica de una función:

![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%207.png)

- Empieza en **-6** (punto cerrado → pertenece a la gráfica)
- Termina en **8** (punto abierto → no pertenece)
- El **dominio** son los valores de **x** donde la función existe  
	- Función no existe fuera de (-6, 8)
	- Dominio = \[-6, 8)
	- Intervalo cerrado en -6, abierto en 8

**Recorrido:**  
- Valores del eje **y**
- Va de -2 (cerrado) a 7 (abierto)
- Recorrido = \[-2, 7)

![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%208.png)
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%209.png)

---

#### Función - Punto de corte con los ejes
Puntos donde la gráfica cruza los ejes.

![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2010.png)

- **Eje X:** puede cortar en varios puntos  
	![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2011.png)
- **Eje Y:** como máximo en uno (no puede tener dos valores de y para el mismo x)  
	![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2012.png)

**Coordenadas de los cortes:**
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2013.png)

---

#### Signo de la función
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2014.png)

- **y > 0:** función positiva  
- **y = 0:** puntos de corte con el eje x  
- **y < 0:** función negativa  

Ejemplo:  
Función positiva entre -4 y -3 (vale 0 en -3), negativa hasta 3, luego vuelve a ser positiva.

Solo se consideran intervalos de **x**, no valores específicos de **y**.

![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2015.png)
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2016.png)
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2017.png)

---

#### Simetría gráficamente
- **Función par:** simétrica respecto al eje Y  
	![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2018.png)
- **Función impar:** simétrica respecto a la bisectriz del primer cuadrante  
	![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2019.png)
- **Sin simetría:** no cumple ninguna de las dos condiciones  
	![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2021.png)

---

#### Simetría algebraicamente
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2022.png)

- Si **f(-x) = f(x)** → función **par**
- Si **f(-x) = -f(x)** → función **impar**

Ejemplos:
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2023.png)

- Cuando un signo negativo está elevado a un exponente **par**, el resultado es positivo:  
	(-x)² = x²
- Función **par:** todos los exponentes pares y término independiente.

![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2024.png)
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2025.png)

- Función **impar:** todos los exponentes impares.  
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2026.png)

- Función **sin simetría:** combina exponentes pares e impares.  
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2027.png)

---

#### Periodicidad
Una función es **periódica** cuando se repite con un intervalo constante **T** en el eje X.  
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2028.png)

Ejemplo: funciones seno y coseno.

---

#### Monotonía (crecimiento y decrecimiento)
- Si al aumentar **x**, **y** también aumenta → **creciente**  
- Si al aumentar **x**, **y** disminuye → **decreciente**

![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2029.png)
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2030.png)
![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2031.png)

Los intervalos se expresan como abiertos y se pueden unir con ∪.

---

#### Máximos y mínimos (extremos)
- **Máximos relativos:** puntos más altos del entorno (picos)  
	![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2032.png)
- **Mínimos relativos:** puntos más bajos del entorno (valles)  
	![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2036.png)

- **Máximos y mínimos absolutos:** valores más altos o más bajos en todo el dominio.  
	![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2037.png)
	![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2038.png)

---

#### Continuidad y discontinuidad
Una función es **continua** si puede dibujarse sin levantar el lápiz.

Tipos de discontinuidad:
- **Evitable:** solo un punto falta.  
- **Salto finito:** salto entre dos valores próximos.  
- **Salto infinito:** la función tiende a ±∞ (asíntota vertical).  

![Untitled](Data/Data-IA/Data-Funciones%20basico/Untitled%2040.png)

---

### Producto, suma y resta de matrices
- Una matriz tiene **n filas** y **m columnas**.  
- Para multiplicar matrices, el número de **columnas de la primera** debe coincidir con el número de **filas de la segunda**.

![Untitled](Data/Data-IA/Data-Producto,%20suma%20y%20resta%20de%20matrices/Untitled.png)
![Untitled](Data/Data-IA/Data-Producto,%20suma%20y%20resta%20de%20matrices/Untitled%201.png)

- No siempre se puede multiplicar (B×A ≠ A×B) → **no conmutativo**.
- El resultado **A×B** tiene las **filas** de A y las **columnas** de B.

![Untitled](Data/Data-IA/Data-Producto,%20suma%20y%20resta%20de%20matrices/Untitled%203.png)

**Ejemplo:**
Producto entre una matriz 3×2 y una 2×3 → resultado 3×3.

![Untitled](Data/Data-IA/Data-Producto,%20suma%20y%20resta%20de%20matrices/Untitled%204.png)
![Untitled](Data/Data-IA/Data-Producto,%20suma%20y%20resta%20de%20matrices/Untitled%205.png)
![Untitled](Data/Data-IA/Data-Producto,%20suma%20y%20resta%20de%20matrices/Untitled%206.png)
![Untitled](Data/Data-IA/Data-Producto,%20suma%20y%20resta%20de%20matrices/Untitled%207.png)

---

#### Operaciones adicionales
- **Suma y resta:** solo entre matrices del mismo tamaño.
- **Transpuesta:** se intercambian filas por columnas.
- **Matriz identidad:** multiplicar por ella no altera el resultado.
- **Matriz inversa (A⁻¹):** solo existe si det(A) ≠ 0.

# Extensión: Conceptos avanzados de funciones y matrices

## Funciones

### Clasificación de funciones
Las funciones pueden clasificarse según la forma de su expresión o su comportamiento gráfico:

- **Polinómicas:** combinación lineal de potencias de x con coeficientes reales.  
	Ejemplo: f(x) = 2x³ - 4x + 1
- **Racionales:** cociente entre dos polinomios.  
	Ejemplo: f(x) = (x² + 1) / (x - 3)
- **Irracionales:** incluyen raíces con variables.  
	Ejemplo: f(x) = √(x + 2)
- **Exponenciales:** la variable está en el exponente.  
	Ejemplo: f(x) = 3ˣ
- **Logarítmicas:** inversas de las exponenciales.  
	Ejemplo: f(x) = log₂(x)
- **Trigonométricas:** basadas en seno, coseno, tangente, etc.
- **Por tramos:** definidas con diferentes expresiones según el intervalo de x.

---

### Transformaciones de funciones
Cualquier función puede desplazarse, reflejarse o escalarse:

- **Desplazamiento vertical:** f(x) + k (sube o baja)
- **Desplazamiento horizontal:** f(x - a) (se mueve a la derecha o izquierda)
- **Reflexión:**  
	- En eje X → -f(x)  
	- En eje Y → f(-x)
- **Escalado vertical:** a·f(x) (estira o comprime)
- **Escalado horizontal:** f(bx) (acorta o ensancha)

Estas transformaciones ayudan a deducir gráficas complejas a partir de funciones base.

---

### Composición de funciones
La composición combina dos funciones:  
(f ∘ g)(x) = f(g(x))

- Se evalúa primero **g(x)** y luego se aplica **f** al resultado.
- No siempre es conmutativa: f(g(x)) ≠ g(f(x))
- Se usa en modelado de procesos donde una salida depende de otra transformación.

---

### Función inversa
La **inversa** de una función f(x) es otra función f⁻¹(x) tal que:
f(f⁻¹(x)) = x

**Propiedades:**
- Solo existe si la función es **inyectiva** (cada y tiene una única x).
- Gráficamente, es simétrica respecto a la bisectriz y = x.

**Ejemplo:**
f(x) = 2x + 3 → f⁻¹(x) = (x - 3)/2

---

### Límites y continuidad avanzada
- Un **límite** describe el comportamiento de una función cerca de un punto.  
	Se escribe: lim(x→a) f(x)
- Si el límite por la derecha y la izquierda existen y son iguales → función **continua**.
- Si difieren o no existen → función **discontinua**.

**Tipos de discontinuidades avanzadas:**
- **Removible:** el límite existe, pero la función no está definida en el punto.
- **De salto:** el límite lateral derecho e izquierdo existen pero son distintos.
- **Infinita:** el límite tiende a ±∞.
- **Oscilatoria:** no existe por variaciones extremas (ejemplo: sin(1/x) en x→0).

---

### Derivadas y comportamiento local
La **derivada** mide el cambio instantáneo de una función:
f'(x) = lim(h→0) (f(x+h) - f(x)) / h

**Interpretaciones:**
- Geométrica: pendiente de la recta tangente.
- Física: velocidad instantánea (si y representa posición).

**Aplicaciones:**
- Identificar intervalos de crecimiento/decrecimiento.
- Determinar puntos críticos (f'(x)=0 → máximos o mínimos).
- Analizar concavidad y puntos de inflexión (segundas derivadas).

---

### Asintotas
Líneas a las que la función se aproxima sin alcanzarlas.

- **Verticales:** x = a (cuando f(x) → ±∞)
- **Horizontales:** y = b (cuando lim(x→∞) f(x) = b)
- **Oblicuas:** y = mx + n (cuando la función crece linealmente sin límite)

---

## Matrices

### Propiedades de las matrices
- **Asociativa:** (A·B)·C = A·(B·C)
- **Distributiva:** A·(B + C) = A·B + A·C
- **No conmutativa:** A·B ≠ B·A
- **Identidad:** A·I = I·A = A
- **Nula:** A·0 = 0

---

### Determinante de una matriz
El **determinante** (det(A) o |A|) indica propiedades geométricas y de invertibilidad.

- Si det(A) = 0 → matriz **singular**, sin inversa.
- Si det(A) ≠ 0 → matriz **invertible**.

**Para 2×2:**
det(A) = ad - bc  
Si A = [[a, b], [c, d]]

**Para 3×3:**
Usando la regla de Sarrus:
det(A) = aei + bfg + cdh - ceg - bdi - afh

---

### Inversa de una matriz
Solo existe si det(A) ≠ 0.  
A⁻¹ = (1 / det(A)) · adj(A)

**Propiedad:**  
A·A⁻¹ = I

---

### Sistemas de ecuaciones lineales
Los sistemas pueden expresarse como una multiplicación matricial:
A·X = B

- Si det(A) ≠ 0 → solución única: X = A⁻¹·B
- Si det(A) = 0 → puede tener infinitas o ninguna solución.

**Método de Cramer:**
xᵢ = det(Aᵢ) / det(A)

Donde Aᵢ es la matriz A sustituyendo la columna i por B.

---

### Aplicaciones de las matrices
- **Transformaciones lineales:** rotación, escalado, traslación en gráficos.
- **Grafos y redes:** representación de conexiones (matriz de adyacencia).
- **Programación y algoritmos:** manipulación de datos tabulares y cálculos numéricos.
- **Machine learning:** operaciones vectoriales en entrenamiento de modelos.
- **Criptografía:** codificación mediante matrices invertibles.
- **Simulaciones físicas:** representación de sistemas dinámicos.

---

### Extensión práctica
**Ejemplo de rotación 2D con matrices:**

```python
import numpy as np

# Punto original
p = np.array([2, 3])

# Ángulo de rotación (en radianes)
theta = np.pi / 4  # 45 grados

# Matriz de rotación
R = np.array([[np.cos(theta), -np.sin(theta)],
              [np.sin(theta),  np.cos(theta)]])

# Resultado
p_rotado = R @ p
print(p_rotado)
````

Este ejemplo muestra cómo usar una matriz para rotar un punto en el plano.

---

### Representación matricial en programación

En Python o NumPy:

* Los vectores y matrices se manejan como arrays multidimensionales.
* Operaciones como suma, producto o transposición están optimizadas.

**Ejemplo:**

```python
import numpy as np

A = np.array([[1, 2],
              [3, 4]])
B = np.array([[2, 0],
              [1, 3]])

# Producto matricial
C = np.dot(A, B)
print(C)
```

---

### Relación entre funciones y matrices

Ambos conceptos se cruzan en análisis y computación:

* Una **función lineal** puede representarse como **matriz de transformación**.
* En álgebra lineal, la evaluación de funciones sobre matrices (f(A)) permite calcular exponentes de matrices, resolviendo ecuaciones diferenciales.
* En [Machine Learning](/data%20science/machine-learning/), las **funciones de activación** actúan sobre matrices (tensores) de datos.

---

## Nota complementaria sugerida

Podría ampliarse en una futura nota:

* Derivadas y optimización
* Álgebra lineal aplicada a la IA
* Transformaciones de funciones
* Tipos de discontinuidades y límites especiales
* Matrices en programación científica

# Extensión avanzada: temas complementarios de funciones y matrices

## Funciones

### Funciones compuestas y operaciones
- **Suma, resta, multiplicación y división de funciones:**  
	(f ± g)(x) = f(x) ± g(x)  
	(f·g)(x) = f(x)·g(x)  
	(f / g)(x) = f(x)/g(x), g(x) ≠ 0

- **Funciones inversas en la práctica:**  
	- Composición con su inversa da la función identidad: f(f⁻¹(x)) = x  
	- Verificación rápida mediante sustitución

- **Funciones definidas por partes:**  
	- Utilizadas para modelar situaciones donde la relación cambia según el intervalo de x  
	- Ejemplo: función escalón, función valor absoluto

---

### Comportamiento asintótico avanzado
- **Asintotas horizontales y oblicuas para funciones racionales:**  
	- Comparar grados del numerador y denominador:
		- Grado numerador < denominador → y = 0  
		- Grados iguales → y = coef_num/coef_den  
		- Grado numerador = grado denominador + 1 → asintota oblicua
- **Asintotas verticales:** puntos donde el denominador se anula

- **Límites al infinito para funciones exponenciales y logarítmicas:**  
	- eˣ crece más rápido que cualquier polinomio  
	- log(x) crece lentamente y no tiene límite superior

---

### Funciones especiales
- **Valor absoluto:** f(x) = |x|, simétrica y definida por tramos  
- **Funciones escalón:** saltos discretos, utilizadas en sistemas digitales  
- **Funciones periódicas no trigonométricas:** patrones repetitivos en señalización y física  
- **Funciones implícitas:** relaciones F(x, y) = 0 donde y no está despejada  
- **Funciones paramétricas:** describen curvas mediante parámetro t: (x(t), y(t))  

---

### Optimización y análisis de funciones
- **Puntos críticos:** donde f'(x) = 0 o f'(x) no existe  
- **Concavidad:**  
	- f''(x) > 0 → función cóncava hacia arriba  
	- f''(x) < 0 → función cóncava hacia abajo  
- **Puntos de inflexión:** cambio de concavidad, f''(x) = 0 y cambio de signo  
- **Aplicaciones:** economía (max/min de ganancias), física (trayectorias), ingeniería (resistencia de materiales)

---

## Matrices

### Tipos especiales de matrices
- **Diagonal:** solo elementos no nulos en la diagonal principal  
- **Identidad (I):** diagonal con 1, resto 0  
- **Nula (0):** todos los elementos 0  
- **Triangular:** superior o inferior, útil para resolución de sistemas  
- **Simétrica:** A = Aᵀ, propiedades en autovalores y descomposición  
- **Ortogonal:** Aᵀ·A = I, preserva normas y ángulos  
- **Sparsa:** muchas entradas cero, optimización en cómputo

---

### Operaciones avanzadas
- **Autovalores y autovectores:**  
	- Para A·v = λ·v, λ es autovalor, v es autovector  
	- Usados en dinámica de sistemas, estabilidad y PCA

- **Descomposición de matrices:**  
	- LU: factoriza en triangular inferior y superior  
	- QR: factorización ortogonal, útil en mínimos cuadrados  
	- Eigen: descomposición en autovalores y autovectores  

- **Rango de la matriz:** número máximo de filas/columnas linealmente independientes  
- **Traza (trace):** suma de elementos de la diagonal, útil en propiedades de autovalores

---

### Sistemas lineales avanzados
- **Compatibilidad:**  
	- Sistema compatible determinado → única solución  
	- Sistema compatible indeterminado → infinitas soluciones  
	- Sistema incompatible → sin solución  

- **Métodos de resolución:**  
	- Sustitución y eliminación (manual)  
	- Cramer (determinantes)  
	- Inversa de matriz  
	- Factorización LU  
	- Métodos iterativos (Gauss-Seidel, Jacobi)

---

### Aplicaciones prácticas de matrices
- **Gráficas y grafos:** matrices de adyacencia y de incidencia  
- **Transformaciones geométricas:** rotación, traslación, escala y reflexión  
- **Modelado físico:** sistemas de ecuaciones en circuitos, fuerzas y movimiento  
- **Machine Learning:** tensores, propagación hacia adelante, backpropagation  
- **Criptografía:** cifrado de datos mediante matrices invertibles  
- **Simulación de Markov:** cadenas de estados con matrices estocásticas

---

### Representación en programación avanzada
- Uso de librerías para operaciones eficientes: NumPy, SciPy, [TensorFlow](/data%20science/tensorflow/), PyTorch  
- **Multiplicación matricial optimizada**: evita bucles explícitos y mejora rendimiento  
- **Broadcasting:** operaciones entre matrices de diferente tamaño compatibles  
- **Funciones vectorizadas:** aplicar funciones a todos los elementos simultáneamente

**Ejemplo: multiplicación vectorizada en NumPy**
```python
import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Multiplicación elemento a elemento
C = A * B

# Producto matricial
D = A @ B
````

---

### Conexión funciones y matrices en aplicaciones

* **Transformaciones lineales:** cualquier función lineal f(x) = Ax puede representarse como multiplicación matricial
* **Sistemas dinámicos:** xₖ₊₁ = A·xₖ → evolución de estados
* **Redes neuronales:** matrices representan pesos, funciones aplican activación no lineal
* **Procesamiento de señales e imágenes:** convoluciones y filtrado mediante matrices

---

### Temas sugeridos para futuras notas

* Funciones vectoriales y multivariables
* Optimización multivariable y derivadas parciales
* Matrices en análisis numérico y simulaciones físicas
* Transformaciones lineales en geometría y gráficos por computadora
* Cadenas de Markov y matrices estocásticas





