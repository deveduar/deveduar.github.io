---
date: 2024-02-15 17:14
title: Visual Basic y C
status: 🌟
Parent: "[[Area-Prog]]"
keywords:
source:
public_note: "true"
category: CS
tags:
  - CS
  - visual_basic
  - cpp
  - excel
  - Software engineering
---
# C y Visual Basic
`$= dv.current().file.tags.join(" ")`
- [visual basic VBA](/software%20engineering/visual-basic-vba/)
- [cpp](/software%20engineering/cpp/)
- [net](/software%20engineering/net/)
- [excel](/software%20engineering/excel/)
# curso-C-VISUAL-BASIC

- [INTRODUCCIÓN – INSTALACIÓN – TUTORIAL VISUAL BASIC 2022 1](https://www.youtube.com/watch?v=zIrQomF_5uQ&list=PLILw_UuW19gq3nef9z2BxdvWqgFo2wUje&index=1)
- Componentes de Visual Studio a instalar:
	- Desarrollo de escritorio .NET
	- Desarrollo de plataforma universal
	- Almacenamiento y procesamiento de datos

# curso-C-Visual-Basic-Net-intro

## Conceptos de C

- Principios de POO: encapsulación, herencia y polimorfismo
- Orientado a componentes y objetos
- Definición de propiedades sin crear métodos o eventos
- Punteros a funciones
- Programación multihilo
- Programación asíncrona y distribuida
- Un único tipo de objeto raíz
- Namespaces, por ejemplo `Console` en `System`

## Conceptos de Visual Basic

- Visual Studio 2012 y posteriores
- Lenguaje basado en **eventos**
- Multiparadigma: POO, funcional, genérico, reflexivo, estructurado, imperativo
- Sintaxis básica: definición de métodos, `MsgBox`, sentencia `Dim`
- Automatización de tareas y desarrollo de aplicaciones con bases de datos para escritorio
- Lenguaje orientado a eventos y API de Windows
- Alto nivel, integrado con .NET Framework
- Soporte para entornos distribuidos y aplicaciones multihilo
- Interacción con API de Windows para tareas específicas

## .NET Framework

- CLR (Common Language Runtime)
- Biblioteca de clases estándar
- Compiladores para varios lenguajes (.NET)
- Lenguajes compatibles:
	- C#
	- Visual Basic
	- F#
- Plataformas y estándares relacionados:
	- .NET Core
	- .NET Framework
	- Xamarin / Mono
	- .NET Standard
- Recursos y manuales oficiales de Microsoft

# curso-C-visual-basic - Aplicación de consola

- Proyecto ejemplo: `ConsoleApp1`
- Ruta de proyecto: ``C:\Users\Admin\source\repos``

{% raw %}
```visual-basic
Imports System

Module Program
	Sub Main(args As String())
		Console.WriteLine("Hello World!")
	End Sub
End Module
```
{% endraw %}`

* Permite comprender la estructura básica de un programa en Visual Basic
* Uso de `Module` como contenedor de funciones y procedimientos
* `Sub Main` como punto de entrada de la aplicación
* `Console.WriteLine` para mostrar información en consola


# C y Visual Basic - Ampliación de conceptos

## Lenguajes C y Visual Basic en .NET

## Tipos de datos y variables

- Tipos primitivos en C# y Visual Basic:
	- Numéricos: `Integer`, `Long`, `Double`, `Decimal`
	- Booleanos: `Boolean`
	- Caracteres y cadenas: `Char`, `String`
	- Tipos especiales: `Object`, `Dynamic`, `Variant` (VB)
- Conversión de tipos (casting) y manejo de errores en conversión
- Declaración de variables con inferencia de tipo (`var` en C#, `Dim` en VB)

## Estructuras de control

- Condicionales: `If...Then...Else`, `Select Case`
- Bucles: `For`, `For Each`, `While`, `Do While`
- Manejo de interrupciones de bucles: `Exit For`, `Exit While`, `Continue For`
- Expresiones lógicas y operadores (`And`, `Or`, `Not`)

## Funciones y procedimientos

- Definición de `Sub` y `Function` en Visual Basic
- Parámetros por valor (`ByVal`) y por referencia (`ByRef`)
- Funciones anónimas y expresiones lambda
- Sobrecarga de métodos
- Recursión y llamadas entre módulos

## Clases y objetos

- Definición de clases y creación de instancias
- Propiedades automáticas y personalizadas
- Métodos, eventos y delegados
- Constructores y destructores
- Herencia: `Inherits` (VB), `: base` (C#)
- Interfaces e implementación
- Modificadores de acceso: `Public`, `Private`, `Protected`, `Friend`

## Programación avanzada

- Manejo de excepciones (`Try...Catch...Finally`)
- Archivos y flujo de datos (`StreamReader`, `StreamWriter`)
- Multihilo y `Task` en Visual Basic
- Eventos y delegados para comunicación entre objetos
- LINQ (Language Integrated Query) para consultas a colecciones
- Serialización y deserialización de objetos (JSON, XML)
- Acceso a bases de datos: ADO.NET, Entity Framework
- Conexión con APIs externas (REST, SOAP)

## Herramientas y depuración

- Uso del depurador de Visual Studio
- Breakpoints, inspección de variables y pilas de ejecución
- Tests unitarios con MSTest, NUnit o xUnit
- Análisis de código y refactorización
- Documentación con XML comments

## Aplicaciones prácticas

- Aplicaciones de escritorio (WinForms, WPF)
- Aplicaciones de consola
- Aplicaciones web con ASP.NET
- Automatización de procesos de oficina (Office Interop)
- Integración con servicios web y APIs externas
- Desarrollo multiplataforma con .NET MAUI

## Ejemplo avanzado de Visual Basic - Multihilo y eventos

{% raw %}
```visual-basic
Imports System.Threading

Module Program
	Sub Main()
		Dim thread1 As New Thread(AddressOf DoWork)
		thread1.Start()
		Console.WriteLine("Hilo principal continua...")
	End Sub

	Sub DoWork()
		For i As Integer = 1 To 5
			Console.WriteLine("Hilo secundario: " & i)
			Thread.Sleep(1000)
		Next
	End Sub
End Module
```
{% endraw %}`

- Muestra cómo crear y ejecutar hilos en paralelo
- Demuestra el concepto de programación orientada a eventos y concurrencia
- Permite interacción entre hilo principal y secundario

## Recursos adicionales

- [Documentación oficial Visual Basic](https://learn.microsoft.com/en-us/dotnet/visual-basic/)
- [Guía de C# y .NET](https://learn.microsoft.com/en-us/dotnet/csharp/)
- [Ejemplos de aplicaciones .NET](https://github.com/dotnet/samples)

# Arquitectura y Fundamentos de Visual Basic

# Fundamentos de Visual Basic

## Paradigmas y enfoque

- Lenguaje multiparadigma:
	- Orientado a objetos (POO)
	- Funcional
	- Estructurado
	- Imperativo
	- Basado en eventos
- Orientación a componentes: permite desarrollar aplicaciones modulares y reutilizables
- Alto nivel: integrado con .NET Framework, lo que facilita manejo de memoria, tipos y seguridad
- Lenguaje gestionado: corre sobre CLR (Common Language Runtime) evitando errores de memoria típicos de C/C++

## Sintaxis y estructuras básicas

- Declaración de variables: `Dim nombre As Tipo`
- Tipos de datos: `Integer`, `Double`, `Boolean`, `String`, `Object`
- Estructuras de control:
	- Condicionales: `If...Then...Else`, `Select Case`
	- Bucles: `For`, `For Each`, `While`, `Do While`
- Funciones y procedimientos:
	- `Sub` y `Function`
	- Parámetros por valor (`ByVal`) y por referencia (`ByRef`)
- Manejo de errores: `Try...Catch...Finally`
- Eventos y delegados: permiten programar acciones basadas en la interacción del usuario o del sistema

## Principios de POO en VB

- Encapsulación: protege datos dentro de clases
- Herencia: permite crear jerarquías de clases
- Polimorfismo: sobrecarga de métodos y utilización de interfaces
- Objetos y clases:
	- `Class`, `Module`, `Structure`
	- Propiedades automáticas y personalizadas
	- Métodos y eventos
- Modificadores de acceso: `Public`, `Private`, `Protected`, `Friend`

# Arquitectura de aplicaciones en Visual Basic

## Componentes principales

- **Aplicación de escritorio**: WinForms, WPF
	- Interfaz de usuario (UI)
	- Lógica de negocio
	- Acceso a datos (ADO.NET, Entity Framework)
- **Aplicación de consola**
	- Puntos de entrada simples (`Sub Main`)
	- Ideal para utilidades y scripts
- **Aplicación web**
	- ASP.NET con VB.NET
	- Patrón MVC o WebForms

## Fundamentos de .NET Framework

- **CLR (Common Language Runtime)**: ejecuta el código, maneja memoria y seguridad
- **Biblioteca de clases (BCL)**: clases listas para uso en colecciones, IO, XML, red, etc.
- **Compiladores y lenguajes soportados**: C#, VB, F#
- **Plataformas relacionadas**:
	- .NET Framework (Windows)
	- .NET Core / .NET 5+ (multiplataforma)
	- Xamarin / MAUI (multiplataforma móvil)
	- .NET Standard (bibliotecas compartidas)

## Arquitectura de ejecución

- Código fuente VB → Compilador VB.NET → Código IL (Intermediate Language) → CLR → Código máquina
- Integración con Windows API para tareas avanzadas
- Manejo de aplicaciones multihilo y asíncronas
- Uso de eventos y delegados como patrón de comunicación entre componentes

## Patrones y buenas prácticas

- Separación de capas:
	- Presentación (UI)
	- Lógica de negocio
	- Acceso a datos
- Uso de módulos y clases para organizar el código
- Delegados y eventos para comunicación entre componentes sin acoplamiento fuerte
- LINQ para consultas integradas a colecciones
- Manejo de excepciones centralizado
- Documentación mediante XML comments y comentarios claros

# Ejemplo de arquitectura básica de aplicación en VB

{% raw %}
```visual-basic
Imports System

' Capa de negocio
Public Class Calculadora
	Public Function Sumar(a As Integer, b As Integer) As Integer
		Return a + b
	End Function
End Class

' Capa de presentación
Module Program
	Sub Main()
		Dim calc As New Calculadora()
		Console.WriteLine("Resultado: " & calc.Sumar(5, 3))
	End Sub
End Module
```
{% endraw %}`

* Ejemplo simple de separación de capas
* `Calculadora` representa la capa de negocio
* `Program` representa la capa de presentación
* Uso de objetos y métodos para encapsular funcionalidad

# Recursos adicionales

* [Arquitectura de aplicaciones .NET](https://learn.microsoft.com/en-us/dotnet/architecture/)
* [Fundamentos de Visual Basic](https://learn.microsoft.com/en-us/dotnet/visual-basic/)
* [Ejemplos y patrones de diseño en VB.NET](https://github.com/dotnet/samples)




