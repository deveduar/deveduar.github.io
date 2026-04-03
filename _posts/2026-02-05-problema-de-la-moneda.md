---
date: 2026-02-05 23:54
title: problema de la moneda
keywords:
source:
status: 📌
Parent: "[[Area-Prog]]"
public_note: true
category: mates
tags:
  - mates
  - computer_Science
---
#  Problema de la moneda

- [Computer Science](/computer%20science/computer-science/)
- [mates](/uncategorized/mates/)
- [criptografia](/autenticacion/criptografia/)

El **problema de la moneda** es un pilar fundamental en la teoría de la computación y las matemáticas aplicadas, que abarca desde la aritmética simple hasta la complejidad NP-Hard. Se divide principalmente en dos vertientes: la optimización de recursos (cambio de moneda) y el límite de representatividad (Frobenius).

## Clasificación y Complejidad
La dificultad de este problema no es estática; depende enteramente de las reglas del sistema monetario utilizado:
- **Sistemas Canónicos:** Son aquellos donde el uso de un **Algoritmo Voraz** (Greedy) garantiza la solución óptima. Los sistemas de monedas actuales (Euro, Dólar) son diseñados así para que el ser humano pueda dar cambio sin cálculos complejos.
- **Sistemas No Canónicos:** Cuando las denominaciones son arbitrarias (ej. {1, 3, 4}), el algoritmo voraz falla. Esto lo convierte en un problema **débilmente NP-Hard**, requiriendo técnicas avanzadas como la Programación Dinámica.

## Problema de Frobenius (Coin Problem)
Define la mayor cantidad que **no puede** formarse combinando monedas de denominaciones específicas. Su punto clave es el "umbral de omnipotencia": a partir de este número, cualquier cantidad superior puede ser pagada exactamente.
- **Condición de existencia:** Las denominaciones deben ser **coprimas** (MCD = 1). De lo contrario, habría infinitos números imposibles.
- **Fórmula de Sylvester:** Para dos monedas $a$ y $b$, el número de Frobenius es $g(a,b) = ab - a - b$.
- **Dificultad escalar:** Mientras que para dos monedas hay una fórmula simple, para tres o más denominaciones el cálculo se vuelve computacionalmente costoso y entra en el territorio de la complejidad algorítmica.

## El Cambio de Moneda y la Mochila
Este enfoque busca minimizar el número total de monedas para una suma $S$. Es una variante del [Problema de la Mochila (Knapsack Problem)](https://es.wikipedia.org).
- **Enfoque de Programación Dinámica:** En lugar de probar combinaciones aleatorias, se construye una tabla de soluciones desde $1$ hasta $S$.
- **Estructura:** A diferencia de funciones de dispersión como SHA-256, este problema tiene una estructura recursiva donde la solución óptima de un valor depende de las soluciones óptimas de valores menores.

## Comparativa de Seguridad y Complejidad
Es vital diferenciar entre problemas de optimización (monedas) y problemas criptográficos basados en bits:
- **SHA-256:** Es una función hash de un solo sentido. No tiene estructura matemática explotable; es caos puro. Su seguridad reside en que el espacio de búsqueda es de $2^{256}$ combinaciones (más que átomos en el universo).
- **RSA:** Se basa en la factorización de números primos. Aunque use 256 bits, es vulnerable porque tiene estructura matemática. Un sistema de 256 bits en RSA es "pequeño" y hackeable, mientras que en SHA-256 es invencible por ahora.

## Algoritmo de Solución (Python)
Para resolver el problema en sistemas no canónicos de forma eficiente, se utiliza el siguiente código que implementa programación dinámica:

{% raw %}
```python
def cambio_moneda(monedas, objetivo):
	# Tabla para guardar el mínimo de monedas por cada valor
	tabla = [float('inf')] * (objetivo + 1)
	tabla[0] = 0
	for i in range(1, objetivo + 1):
		for moneda in monedas:
			if moneda <= i:
				res = tabla[i - moneda]
				if res != float('inf') and res + 1 < tabla[i]:
					tabla[i] = res + 1
	return tabla[objetivo] if tabla[objetivo] != float('inf') else -1
	# Ejemplo: monedas {1, 3, 4} para cambio de 6
	# Resultado óptimo: 2 (monedas de 3+3)
```
{% endraw %}
# Comparativa: RSA vs SHA-256

Aunque ambos operan con bits y son fundamentales en criptografía, sus propósitos y fundamentos matemáticos son opuestos. Mientras que RSA es una herramienta de **comunicación**, SHA-256 es una herramienta de **integridad**.

## Diferencias Conceptuales y de Aplicación
La distinción principal radica en la "reversibilidad" y la función del algoritmo:
- **RSA (Cifrado Asimétrico):** Es una calle de dos sentidos. Se usa para cifrar un mensaje que el receptor debe descifrar, o para firmar digitalmente. Se basa en un par de claves (pública y privada).
- **SHA-256 (Hashing):** Es una calle de un solo sentido. No es para ocultar un mensaje, sino para crear una "huella digital" única. No se puede "descifrar" un hash para recuperar el archivo original.

## Seguridad y el Factor de los Bits
Es común confundir la seguridad basada en el número de bits. Sin embargo, la robustez depende de la naturaleza del problema matemático que protege:
- **En SHA-256:** Los 256 bits representan caos puro. Para romperlo, hay que probar $2^{256}$ combinaciones (Fuerza Bruta). Es una barrera física prácticamente infranqueable.
- **En RSA:** Los bits representan un número que es producto de dos primos. Aquí no se usa fuerza bruta, sino **atajos matemáticos** (factorización). Por eso, un RSA de 256 bits es extremadamente débil; se requiere un estándar de **2048 o 4096 bits** para ser seguro.

## Vulnerabilidad Cuántica
La llegada de la computación cuántica plantea escenarios distintos para cada uno:
- **RSA está en peligro:** El **Algoritmo de Shor** permite factorizar números grandes de forma eficiente, lo que haría que RSA quede obsoleto una vez existan computadoras cuánticas potentes.
- **SHA-256 es resistente:** El **Algoritmo de Grover** solo puede acelerar la búsqueda de hashes de forma cuadrática. Esto significa que SHA-256 pasaría a tener la seguridad de un hash de 128 bits, lo cual sigue siendo computacionalmente seguro hoy en día.

## Resumen Técnico Comparativo

| Característica | RSA | SHA-256 |
| :--- | :--- | :--- |
| **Función** | Cifrado y Firmas Digitales | Integridad y Verificación |
| **Tipo** | Asimétrico (Dos claves) | Hash (Sin claves) |
| **Entrada** | Datos de tamaño limitado | Cualquier tamaño de datos |
| **Salida** | Cifrado del mismo tamaño que la clave | Siempre 256 bits (64 caracteres hex) |
| **Problema Matemático** | Factorización de Primos (NP-Hard / Intermedio) | Confusión y Difusión (Efecto Avalancha) |
| **Punto débil** | Computación Cuántica / Matemáticas de factorización | Colisiones (teóricamente inexistentes en SHA-256) |

## Ejemplo de uso conjunto
En una firma digital, ambos algoritmos colaboran:
1. Se genera el **SHA-256** de un documento para obtener una huella única (rápido y seguro).
2. Se cifra esa huella con la clave privada de **RSA** (firmar).
3. El receptor verifica la huella con la clave pública, asegurando que el documento no fue alterado y que el autor es quien dice ser.

# Complejidad Logística y Algorítmica: El Rol de lo Logarítmico

La complejidad logarítmica, denotada como $O(\log n)$, representa el ideal de eficiencia en computación. En el contexto de los problemas de la moneda, RSA y SHA-256, el logaritmo actúa como la balanza que define qué es "fácil" para una máquina y qué es "imposible".

## El Concepto de Complejidad Logarítmica $O(\log n)$
Un algoritmo es logarítmico cuando en cada paso del proceso logra reducir el problema a la mitad. Es la operación inversa a la exponencial.
	- **Eficiencia:** Mientras que un problema exponencial crece de forma explosiva, uno logarítmico apenas crece. Si duplicas el tamaño de los datos, un algoritmo logarítmico solo añade **un paso más** de trabajo.
	- **Ejemplo clásico:** La búsqueda binaria. Encontrar un nombre en una agenda de un millón de contactos solo toma unos 20 pasos ($\log_2(1,000,000) \approx 20$).

## Relación con el Problema de la Moneda
La complejidad logarítmica es la meta cuando optimizamos el cambio de moneda:
	- **Sistemas Canónicos:** El algoritmo voraz para dar cambio opera en tiempo casi logarítmico respecto a la cantidad de dinero, ya que reduce drásticamente el resto en cada iteración usando las denominaciones más grandes.
	- **Programación Dinámica:** Aunque no es puramente logarítmica (suele ser $O(n \cdot w)$), busca evitar el crecimiento exponencial que define a los problemas NP-Hard mediante el almacenamiento de subproblemas.

## La Matemática de Bits: Logaritmos y Criptografía
La relación más profunda entre bits y logaritmos se encuentra en la base de SHA-256 y RSA:
	- **Definición de Bits:** El número de bits de una clave es, por definición, el logaritmo en base 2 del espacio de búsqueda. Si el espacio de búsqueda es $N$, los bits son $\log_2 N$.
	- **SHA-256:** Decir que tiene 256 bits significa que el esfuerzo para romperlo por fuerza bruta crece de forma exponencial ($2^{256}$). El logaritmo aquí nos sirve para cuantificar la seguridad: cada bit extra duplica la dificultad.
	- **Aritmética Modular en RSA:** Las operaciones clave en RSA, como la **Exponenciación Modular**, se realizan en tiempo logarítmico $O(\log n)$ mediante el método de "cuadrados sucesivos". Esto permite que cifrar sea muy rápido para el usuario legítimo, a pesar de usar números de miles de cifras.

## Comparativa de Crecimiento de Complejidad
Para entender por qué buscamos soluciones logarítmicas y tememos las exponenciales:

| Tamaño (n) | Logarítmico $O(\log n)$ | Lineal $O(n)$ | Exponencial $O(2^n)$ |
| :--- | :--- | :--- | :--- |
| **10** | 3.3 pasos | 10 pasos | 1,024 pasos |
| **100** | 6.6 pasos | 100 pasos | $1.26 \times 10^{30}$ pasos |
| **256** | 8 pasos | 256 pasos | **$2^{256}$ (Límite SHA)** |

## Punto Clave: El Logaritmo Discreto
Existe un problema específico llamado **Logaritmo Discreto**, que es el "hermano" de la factorización de RSA:
	- Es la base de muchos sistemas criptográficos (como Diffie-Hellman o Curva Elíptica).
	- **Su trampa:** Calcular $a^x = b \pmod n$ es fácil (logarítmico), pero encontrar $x$ sabiendo $a$ y $b$ es extremadamente difícil (exponencial). Esta asimetría es la que mantiene segura la comunicación en internet.

## Algoritmo de Exponenciación Rápida (Logarítmico)
Este código es el motor de RSA. Permite elevar números gigantes a potencias gigantes en milisegundos:

{% raw %}
```python
def exponenciacion_rapida(base, exp, mod):
	res = 1
	base = base % mod
	while exp > 0:
		# Si el exponente es impar, multiplicamos el resultado
		if exp % 2 == 1:
			res = (res * base) % mod
		# Dividimos el exponente a la mitad (logarítmico)
		exp = exp // 2
		# Elevamos la base al cuadrado
		base = (base * base) % mod
	return res

# Esta operación reduce un problema de billones de pasos a solo unos pocos cientos.
```
{% endraw %}
