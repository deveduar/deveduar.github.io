---
title: Guía completa de tablas en Markdown
date: 2025-04-15
categories: 
  - Technology
tags:
  - Markdown
  
---

# Guía completa de tablas en Markdown

Este documento está dedicado exclusivamente a mostrar todos los tipos y variantes de tablas disponibles en Markdown y HTML embebido.

## Tablas básicas en Markdown

Una tabla básica en Markdown consiste en al menos una fila de encabezados, una fila de separadores y filas de datos:

| Encabezado 1 | Encabezado 2 | Encabezado 3 |
|--------------|--------------|--------------|
| Celda 1,1    | Celda 1,2    | Celda 1,3    |
| Celda 2,1    | Celda 2,2    | Celda 2,3    |

## Tablas con alineación

Puedes alinear el contenido de las columnas usando dos puntos `:` en la fila de separadores:

| Alineado a la izquierda | Centrado | Alineado a la derecha |
|:------------------------|:--------:|----------------------:|
| Este texto              | Este     |              Este texto |
| está alineado           | texto    |       está alineado |
| a la izquierda          | está     |        a la derecha |
|                         | centrado |                     |

## Tablas con columnas de diferentes anchos

Las tablas de Markdown pueden tener columnas de diferentes anchos visuales:

| Encabezado corto | Encabezado medio | Encabezado muy largo que ocupará mucho espacio horizontal |
|------------------|------------------|-----------------------------------------------------------|
| Dato 1           | Información 1    | Contenido extenso que debería ocupar más espacio          |
| Dato 2           | Información 2    | Más contenido extenso para mostrar el comportamiento      |

## Tablas con celdas vacías

Las tablas pueden contener celdas vacías:

| Producto | Precio | Disponibilidad |
|----------|--------|----------------|
| Manzana  | $1.00  | Sí             |
| Naranja  |        | No             |
| Plátano  | $0.50  |                |
|          | $2.00  | Sí             |

## Tablas con formato de texto en celdas

Las celdas pueden contener texto con formato:

| Formato          | Ejemplo                      | Descripción                |
|------------------|------------------------------|----------------------------|
| **Negrita**      | `**texto en negrita**`       | Aplicar énfasis fuerte     |
| *Cursiva*        | `*texto en cursiva*`         | Aplicar énfasis ligero     |
| ~~Tachado~~      | `~~texto tachado~~`          | Marcar texto como obsoleto |
| `Código`         | ``` `código` ```             | Representar código         |
| [Enlace](https://ejemplo.com) | `[texto](URL)`  | Crear un hipervínculo     |

## Tablas con listas en celdas

| Categoría   | Elementos                                    |
|-------------|----------------------------------------------|
| Frutas      | - Manzana<br>- Plátano<br>- Naranja          |
| Verduras    | - Zanahoria<br>- Brócoli<br>- Espinaca       |
| Lácteos     | - Leche<br>- Queso<br>- Yogur                |

## Tablas con código en celdas

| Lenguaje | Ejemplo                             |
|----------|-------------------------------------|
| Python   | `print("Hola mundo")`               |
| JavaScript | `console.log("Hola mundo");`      |
| HTML     | `<h1>Hola mundo</h1>`               |

## Tablas con varias líneas en celdas

| Nombre      | Descripción                                                                          |
|-------------|--------------------------------------------------------------------------------------|
| Producto A  | Este es el producto A.<br>Tiene múltiples características.<br>Es muy popular.        |
| Producto B  | Este es el producto B.<br>Es más económico que el A.<br>Tiene menos características. |

## Tablas de datos numéricos

| Año  | Ingresos ($) | Gastos ($) | Beneficio ($) |
|------|------------:|----------:|-------------:|
| 2020 |     100,000 |     80,000 |        20,000 |
| 2021 |     120,000 |     90,000 |        30,000 |
| 2022 |     150,000 |    100,000 |        50,000 |
| 2023 |     180,000 |    120,000 |        60,000 |
| Total |    550,000 |    390,000 |       160,000 |

## Tablas con emojis y símbolos

| Estado     | Símbolo | Descripción             |
|------------|:-------:|-------------------------|
| Completado | ✅      | Tarea finalizada        |
| En proceso | ⏳      | Trabajo en curso        |
| Pendiente  | ⏱️      | No iniciado aún         |
| Bloqueado  | 🚫      | Imposible continuar     |
| Aprobado   | 👍      | Revisión positiva       |
| Rechazado  | 👎      | No cumple requisitos    |

## Tablas con colores usando HTML inline

<table>
  <thead>
    <tr>
      <th>Color</th>
      <th>Código</th>
      <th>Muestra</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rojo</td>
      <td>#FF0000</td>
      <td style="background-color:#FF0000; color:white;">#FF0000</td>
    </tr>
    <tr>
      <td>Verde</td>
      <td>#00FF00</td>
      <td style="background-color:#00FF00;">#00FF00</td>
    </tr>
    <tr>
      <td>Azul</td>
      <td>#0000FF</td>
      <td style="background-color:#0000FF; color:white;">#0000FF</td>
    </tr>
    <tr>
      <td>Amarillo</td>
      <td>#FFFF00</td>
      <td style="background-color:#FFFF00;">#FFFF00</td>
    </tr>
  </tbody>
</table>

## Tablas HTML con celdas combinadas

<table>
  <thead>
    <tr>
      <th colspan="2">Información Personal</th>
      <th colspan="2">Contacto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Nombre</strong></td>
      <td>Juan Pérez</td>
      <td><strong>Email</strong></td>
      <td>juan@ejemplo.com</td>
    </tr>
    <tr>
      <td><strong>Edad</strong></td>
      <td>30</td>
      <td><strong>Teléfono</strong></td>
      <td>123-456-7890</td>
    </tr>
    <tr>
      <td rowspan="2"><strong>Dirección</strong></td>
      <td rowspan="2">Calle Principal 123<br>Ciudad Ejemplo</td>
      <td><strong>LinkedIn</strong></td>
      <td>linkedin.com/in/juanperez</td>
    </tr>
    <tr>
      <td><strong>Twitter</strong></td>
      <td>@juanperez</td>
    </tr>
  </tbody>
</table>

## Tablas HTML con formato avanzado

<table style="border-collapse: collapse; width: 100%; border: 2px solid #5B9BD5;">
  <thead>
    <tr style="background-color: #5B9BD5; color: white;">
      <th style="border: 1px solid #5B9BD5; padding: 8px; text-align: center;">Nivel</th>
      <th style="border: 1px solid #5B9BD5; padding: 8px; text-align: center;">Descripción</th>
      <th style="border: 1px solid #5B9BD5; padding: 8px; text-align: center;">Requisitos</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #D9E1F2;">
      <td style="border: 1px solid #5B9BD5; padding: 8px; text-align: center;"><strong>Principiante</strong></td>
      <td style="border: 1px solid #5B9BD5; padding: 8px;">Conocimientos básicos</td>
      <td style="border: 1px solid #5B9BD5; padding: 8px;">Ninguno</td>
    </tr>
    <tr>
      <td style="border: 1px solid #5B9BD5; padding: 8px; text-align: center;"><strong>Intermedio</strong></td>
      <td style="border: 1px solid #5B9BD5; padding: 8px;">Experiencia práctica</td>
      <td style="border: 1px solid #5B9BD5; padding: 8px;">1-2 años de experiencia</td>
    </tr>
    <tr style="background-color: #D9E1F2;">
      <td style="border: 1px solid #5B9BD5; padding: 8px; text-align: center;"><strong>Avanzado</strong></td>
      <td style="border: 1px solid #5B9BD5; padding: 8px;">Conocimiento profundo</td>
      <td style="border: 1px solid #5B9BD5; padding: 8px;">3+ años de experiencia</td>
    </tr>
    <tr>
      <td style="border: 1px solid #5B9BD5; padding: 8px; text-align: center;"><strong>Experto</strong></td>
      <td style="border: 1px solid #5B9BD5; padding: 8px;">Dominio completo</td>
      <td style="border: 1px solid #5B9BD5; padding: 8px;">5+ años y contribuciones</td>
    </tr>
  </tbody>
  <tfoot>
    <tr style="background-color: #BDD7EE;">
      <td colspan="3" style="border: 1px solid #5B9BD5; padding: 8px; text-align: center;">
        <em>Los niveles son orientativos y pueden variar según el contexto</em>
      </td>
    </tr>
  </tfoot>
</table>

## Tabla con bordes redondeados

```html
<table style="border-collapse: separate; border-spacing: 0; width: 100%; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
  <thead>
    <tr style="background-color: #f5f5f5;">
      <th style="padding: 12px; border-bottom: 1px solid #ddd;">Producto</th>
      <th style="padding: 12px; border-bottom: 1px solid #ddd;">Categoría</th>
      <th style="padding: 12px; border-bottom: 1px solid #ddd;">Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">iPhone 15</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">Electrónica</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">$999</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">MacBook Pro</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">Informática</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">$1,999</td>
    </tr>
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">AirPods Pro</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">Audio</td>
      <td style="padding: 12px; border-bottom: 1px solid #ddd;">$249</td>
    </tr>
  </tbody>
</table>
```

## Tabla con indicadores visuales

| Métrica | Valor | Tendencia | Estado |
|---------|-------|:---------:|:------:|
| Ventas  | $10,000 | ↑ | 🟢 |
| Costos  | $7,500 | ↓ | 🟢 |
| Retención | 85% | → | 🟡 |
| Conversión | 2.3% | ↓ | 🔴 |
| Satisfacción | 4.5/5 | ↑ | 🟢 |

## Tabla con barras de progreso visual

| Proyecto | Progreso | Completado |
|----------|----------|:----------:|
| Proyecto A | <progress value="80" max="100"></progress> | 80% |
| Proyecto B | <progress value="45" max="100"></progress> | 45% |
| Proyecto C | <progress value="100" max="100"></progress> | 100% |
| Proyecto D | <progress value="10" max="100"></progress> | 10% |
| Proyecto E | <progress value="60" max="100"></progress> | 60% |

## Tabla con iconos de nivel

| Habilidad | Nivel | Representación |
|-----------|-------|:--------------:|
| HTML      | Experto | ★★★★★ |
| CSS       | Avanzado | ★★★★☆ |
| JavaScript | Intermedio | ★★★☆☆ |
| Python    | Principiante | ★★☆☆☆ |
| Java      | Novato | ★☆☆☆☆ |

## Tabla de comparación con checks

| Característica | Plan Básico | Plan Pro | Plan Enterprise |
|----------------|:-----------:|:-------:|:---------------:|
| Usuarios       | 1           | 10      | Ilimitados      |
| Almacenamiento | 5 GB        | 100 GB  | 1 TB            |
| Soporte email  | ✓           | ✓       | ✓               |
| Soporte 24/7   | ✗           | ✓       | ✓               |
| API acceso     | ✗           | ✗       | ✓               |
| Personalización| ✗           | Limitada| Completa        |
| Precio mensual | $9.99       | $29.99  | $99.99          |

## Tabla con códigos de color semánticos

| Tipo de error | Código | Impacto | Acción recomendada |
|---------------|:------:|:-------:|-------------------|
| <span style="color:red">**Crítico**</span> | E01 | <span style="color:red">Alto</span> | Intervención inmediata requerida |
| <span style="color:orange">**Mayor**</span> | E02 | <span style="color:orange">Medio</span> | Resolver en 24 horas |
| <span style="color:gold">**Menor**</span> | E03 | <span style="color:gold">Bajo</span> | Programar resolución |
| <span style="color:green">**Info**</span> | E04 | <span style="color:green">Ninguno</span> | Sólo informativo |

## Tabla responsive usando HTML

<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr >
      <th style="padding: 12px; text-align: left; border-bottom: 2px solid #ddd;">Característica</th>
      <th style="padding: 12px; text-align: center; border-bottom: 2px solid #ddd;">Descripción</th>
      <th style="padding: 12px; text-align: center; border-bottom: 2px solid #ddd;">Disponibilidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Característica" style="padding: 12px; border-bottom: 1px solid #ddd; display: block; font-weight: bold;">Responsive Design</td>
      <td data-label="Descripción" style="padding: 12px; border-bottom: 1px solid #ddd;">Se adapta a diferentes tamaños de pantalla</td>
      <td data-label="Disponibilidad" style="padding: 12px; border-bottom: 1px solid #ddd; text-align: center;">Todas las versiones</td>
    </tr>
    <tr style="background-color: #f8f8f8;">
      <td data-label="Característica" style="padding: 12px; border-bottom: 1px solid #ddd; display: block; font-weight: bold;">Dark Mode</td>
      <td data-label="Descripción" style="padding: 12px; border-bottom: 1px solid #ddd;">Tema oscuro para uso nocturno</td>
      <td data-label="Disponibilidad" style="padding: 12px; border-bottom: 1px solid #ddd; text-align: center;">Pro y Enterprise</td>
    </tr>
    <tr>
      <td data-label="Característica" style="padding: 12px; border-bottom: 1px solid #ddd; display: block; font-weight: bold;">Exportación avanzada</td>
      <td data-label="Descripción" style="padding: 12px; border-bottom: 1px solid #ddd;">Permite exportar en múltiples formatos</td>
      <td data-label="Disponibilidad" style="padding: 12px; border-bottom: 1px solid #ddd; text-align: center;">Solo Enterprise</td>
    </tr>
  </tbody>
</table>

## Tabla con pie de tabla explicativo

| Abreviatura | Significado | Uso común |
|-------------|-------------|-----------|
| HTML        | HyperText Markup Language | Estructura web |
| CSS         | Cascading Style Sheets | Estilo web |
| JS          | JavaScript | Interactividad web |
| SQL         | Structured Query Language | Bases de datos |
| API         | Application Programming Interface | Integración |

<caption style="caption-side: bottom; text-align: center; margin-top: 10px; font-style: italic;">
  Tabla 1: Abreviaturas comunes en desarrollo web
</caption>

---

Espero que esta guía exhaustiva de tablas te ayude a probar cómo se visualizan los diferentes tipos y estilos de tablas en tu plataforma.

Este post explora todo lo relacionado con database y cómo puede mejorar tus habilidades de desarrollo.

## ¿Por qué database es importante?

Database se ha convertido en una herramienta esencial para desarrolladores modernos. Permite crear soluciones más eficientes y mantenibles.

## Ejemplo práctico

Aquí hay un ejemplo de código que muestra cómo puedes usar database:

```ruby
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
```

## Conclusión

Dominar database puede abrir muchas oportunidades en tu carrera como desarrollador. Espero que este post te haya dado una buena introducción al tema.

¡No dudes en dejar tus comentarios y preguntas abajo!