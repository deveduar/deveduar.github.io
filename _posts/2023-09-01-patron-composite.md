---
date: 2023-09-01 15:50
title: Patron Composite
Hecho: false
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: "true"
category: Computer Science
tags:
  - GameDev
  - CS
  - computer_Science
  - patrones_diseo
---
# Patron Composite

- [Computer Science](/computer%20science/computer-science/)
- [Patrones de diseño](/computer%20science/patrones-de-dise-o/)
- GameDev

## Concepto General
El **Patrón Composite** es un patrón de diseño estructural que permite **tratar objetos individuales y composiciones de objetos de manera uniforme**.  
Este patrón es ideal para representar **estructuras jerárquicas** como árboles, gráficos de escena en videojuegos, sistemas de archivos o UI.

- Permite **anidar entidades** y manejar jerarquías complejas.
- Facilita la **recursividad** al procesar los elementos hijos de manera uniforme.
- Unifica el comportamiento de todos los elementos de la estructura.
- Se centra en **conjuntos de objetos** que comparten operaciones comunes.

### Ventajas
- Simplifica la manipulación de jerarquías de objetos.
- Permite **agregar o eliminar componentes** de forma dinámica sin modificar el código cliente.
- Reduce la complejidad de la lógica que necesita iterar sobre múltiples tipos de objetos.

### Uso Común en Videojuegos y UI
- Árboles de escena y entidades en motores como [unity](/gamedev/unity/).
- Elementos de interfaz de usuario (UI) que pueden contener otros elementos.
- Sistemas de enemigos o NPCs que se componen de varias partes funcionales.
- Renderizado recursivo de nodos.

## Ejemplo de Patron Composite en [unity](/gamedev/unity/)
[COMPOSITE (Así Es Como Funciona Unity) | PATRONES de DISEÑO](https://www.youtube.com/watch?v=ES3DnAPted0)

- Jerarquía de entidades: un enemigo grande compuesto por partes más pequeñas.
- Función general que delega el comportamiento a los hijos.
- Renderizado y lógica gestionados de forma recursiva.
- Abstracción que unifica el comportamiento de todas las entidades.
!patron-composite.png

### Código TypeScript / JavaScript
{% raw %}
````js
class BigOctopusEnemy implements Entity {
	enemyParts: Entity[];

	constructor() {
		this.enemyParts = [];
		this.enemyParts.push(new FireLeftLeg());
		this.enemyParts.push(new WaterRightLeg());
		this.enemyParts.push(new OctopusMainBody());
	}

	logic() {
		for (let part of this.enemyParts) {
			part.logic();
		}
	}
}

let mainOctopusEnemy = new BigOctopusEnemy();

function mainLogic() {
	// Procesa la lógica de todos los enemigos
	mainOctopusEnemy.logic();
}
```
{% endraw %}``

### Código C++ (cFireball.h)

{% raw %}
```c++
#pragma once
#include "cBicho.h"

class cFireBall : public cBicho {
public:
	cFireBall(int dist, float angle);
	~cFireBall();
	bool Collides(cRect *rc);
	void Draw(cData* data);
	int dist;
	int direc;
	float angle;
};
```
{% endraw %}

## Patrones Relacionados

- **Decorator:** Permite añadir comportamiento adicional a objetos individuales sin modificar la estructura.
- **Composite vs Flyweight:** Composite maneja jerarquías de objetos, Flyweight optimiza memoria compartiendo datos entre objetos similares.
- **Iterator:** Se puede combinar para recorrer estructuras de Composite fácilmente.

## Buenas Prácticas

- Definir una **interfaz común** (`Component`) que declare las operaciones que pueden ejecutarse tanto en hojas como en nodos compuestos.
- Evitar operaciones que solo tengan sentido para nodos hoja dentro de la interfaz general, para no romper el principio de sustitución de Liskov.
- Usar recursión cuidadosamente para no crear **dependencias circulares** o bucles infinitos.

## Ejemplo Conceptual de Jerarquía

{% raw %}
```
Enemy (Composite)
├─ FireLeftLeg (Leaf)
├─ WaterRightLeg (Leaf)
└─ OctopusMainBody (Leaf)
```
{% endraw %}

- Cada **Leaf** implementa la misma interfaz que el Composite.
- El **Composite** delega llamadas a todos sus hijos.
- Permite extender la jerarquía agregando nuevos tipos de enemigos sin modificar la lógica existente.