---
date: 2024-11-19 23:32
title: Deep Learning
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Data Science
tags:
  - IA
  - datascience
  - deep-learning
---
# Deep Learning


- [Data Science](/data%20science/data-science/)
- [Machine Learning](/data%20science/machine-learning/)
- [Regresión Lineal y Mínimos Cuadrados Ordinarios](/data%20science/regresi-n-lineal-y-m-nimos-cuadrados-ordinarios/)

## NLP (Natural Language Processing)
- Conceptos fundamentales: tokenización, embeddings, transformers
- Modelos populares: BERT, GPT, T5
- Aplicaciones: análisis de sentimiento, traducción automática, chatbots
- Librerías: Hugging Face Transformers, SpaCy, NLTK

## Computer Vision
- Tareas principales: clasificación de imágenes, detección de objetos, segmentación semántica
- Modelos populares: CNN, ResNet, YOLO, EfficientNet
- Técnicas: data augmentation, transfer learning, fine-tuning
- Librerías: OpenCV, TensorFlow, PyTorch, Keras

## Plataformas y Herramientas
- Google Colab: entorno colaborativo en la nube para ejecutar notebooks de Python
- GitHub Codespaces: desarrollo remoto basado en contenedores con VS Code
- [Azure](/cloud/azure/): servicios en la nube para despliegue y entrenamiento de modelos de IA

## Proyectos y Aplicaciones
- Paridad humana: modelos para simular comportamiento humano o predecir resultados similares a los humanos
- Ejemplos: asistentes virtuales, sistemas de recomendación, generación de texto o imagen

## Bloques de Código

### Ejemplo de Regresión Lineal en Python
{% raw %}
```python
import numpy as np
from sklearn.linear_model import LinearRegression

# Datos de ejemplo
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Crear y entrenar modelo
model = LinearRegression()
model.fit(X, y)

# Predicción
pred = model.predict(np.array(6))
print(pred)
```
{% endraw %}`

### Ejemplo Básico de NLP con Hugging Face

{% raw %}
```python
from transformers import pipeline

# Crear pipeline de análisis de sentimiento
classifier = pipeline("sentiment-analysis")

# Analizar texto
result = classifier("Me encanta aprender Deep Learning!")
print(result)
```
{% endraw %}

### Ejemplo de Computer Vision con PyTorch

{% raw %}
```python
import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image

# Cargar modelo preentrenado
model = models.resnet18(pretrained=True)
model.eval()

# Preparar imagen
img = Image.open("imagen.jpg")
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor()
])
img_t = transform(img).unsqueeze(0)

# Predicción
out = model(img_t)
_, pred = torch.max(out, 1)
print(pred)
```
{% endraw %}

# Deep Learning Intro

## Procesamiento de Lenguaje Natural (PLN)
- Objetivo: que las máquinas comprendan, procesen y generen lenguaje humano.
- Aplicaciones: traducción automática, chatbots, análisis de sentimiento, generación de texto.

## Redes Neuronales Recurrentes (RNN)
- Diseñadas para manejar secuencias de datos donde el orden importa.
- Capturan dependencias temporales entre palabras o elementos de la secuencia.
- Limitaciones:
	- Dificultad con secuencias muy largas (problema de desvanecimiento del gradiente).
	- Memoria limitada sobre estados anteriores.

## Transformers
- Manejan todas las palabras de la secuencia a la vez, eliminando dependencia estricta del orden temporal.
- Conceptos clave:
	- **Tokens**: divisiones de texto en unidades que el modelo procesa (palabras, subpalabras o caracteres).
	- **Embeddings**: vectores numéricos que representan tokens.
	- **Positional Encoding**: agrega información sobre la posición de cada token para mantener el orden dentro de la secuencia.
- Ventajas:
	- Mejor manejo de secuencias largas.
	- Paralelización más eficiente durante el entrenamiento.
	- Facilita la captura de relaciones globales en el texto.

## Arquitectura Transformers
- Componentes principales:
	- Encoder: procesa la secuencia de entrada y genera representaciones contextuales.
	- Decoder: genera la secuencia de salida a partir de la información codificada.
- Funciona sumando embeddings de los tokens con su información posicional.
- Cambios de estado representados mediante vectores que capturan la atención sobre toda la secuencia.
- Base de modelos modernos de PLN como GPT, BERT, T5.

## Tokens y API Keys
- **Tokens**: unidades mínimas de texto que los transformers usan para procesar y generar lenguaje.
- **API Keys**: credenciales necesarias para interactuar con servicios de modelos de lenguaje en la nube.

# Qué es el Machine Learning y Deep Learning: Un mapa conceptual DotCSV
[¿Qué es el Machine Learning?¿Y Deep Learning? Un mapa conceptual | DotCSV](https://www.youtube.com/watch?v=KytW151dpqU)

## Tipos de Aprendizaje

### Supervisado
- Relación entre variables de entrada y salida.
- Objetivo: aprender a predecir resultados a partir de muchos ejemplos.
- Ejemplos:
	- Regla matemática: si la relación existente es multiplicar por 2 → la red aprende esa regla.
	- Clasificación de correos electrónicos como SPAM mediante patrones.
	- Predicción de depresión a partir de interacciones en Instagram.
- Concepto clave: aprender relaciones entre datos y generalizar a valores desconocidos.

### No supervisado
- No se proporciona información previa sobre la salida.
- Objetivo: reconocer patrones, estructuras o clusters en los datos.
- Ejemplos:
	- Agrupamiento de símbolos en lenguaje poligonal o lineal.
	- Identificación de diferentes tipos de estructuras sin etiquetas.
- Problemas:
	- No hay respuesta conocida para evaluar el algoritmo.
	- Determinar cuántas categorías o lenguajes existen.
- Ventajas:
	- Datasets más fáciles y baratos de obtener, ya que no requieren etiquetado manual.
- Conceptos:
	- Patrones de similitud en datos de entrada → descubrimiento de estructura interna.
	- Reconocer caras, similitudes entre objetos, espacios latentes o estructuras conceptuales.
	- Permite analizar cómo interactúa el sistema con la información de entrada y salida (Black Box).

### Reforzado
- Aprendizaje basado en recompensas y castigos según las acciones del agente.
- Objetivo: maximizar la recompensa acumulada aprendiendo a interactuar con el entorno.
- Ejemplos: juegos, robots, optimización de procesos.

## Modelos de Machine Learning
- Representación: mapas, ecuaciones, relaciones matemáticas o diagramas.
- Tipos de modelos:
	- Modelos probabilísticos: describen incertidumbre y relaciones estadísticas.
	- Modelos físicos o geométricos: por ejemplo, modelos geocéntricos para predecir posición de Marte.
- Componentes de un modelo:
	- Datos observacionales: puntos en un espacio multidimensional.
	- Parámetros variables: ej. radios de órbitas, pesos de una red neuronal.
	- Restricciones: ej. Tierra en el centro, órbitas circulares.
- Objetivo del modelo:
	- Ajustar la representación matemática para minimizar el error entre predicciones y datos reales.
	- Construir modelos aproximados a la realidad.
	- Permitir predicciones futuras y comprender fenómenos.
- Manejo de dimensiones: los datos pueden ser multidimensionales, cada punto representa una instancia (persona, objeto, medición).

## Parámetros y Función de Error
- Parámetros del modelo: valores que el algoritmo ajusta para mejorar su desempeño.
- Función de error:
	- Mide la diferencia entre predicciones y valores reales.
	- Supervisado: se calcula a partir de los datos de salida suministrados.
	- No supervisado: se calcula a partir de la estructura de los datos de entrada.
- Señal de error:
	- Utilizada para reajustar parámetros.
	- El proceso de optimización se denomina **entrenamiento** o **ajuste del modelo**.
- Consideraciones:
	- No siempre más flexibilidad es mejor; puede causar sobreajuste.
	- El objetivo es encontrar algoritmos capaces de aprender los valores óptimos de los parámetros a partir de los datos.

## Conceptos clave
- Aprendizaje a partir de datos.
- Generalización a casos desconocidos.
- Estructuras internas y espacios latentes.
- Optimización mediante señal de error.
- Equilibrio entre flexibilidad del modelo y capacidad de generalizar.

# Deep Learning: Arquitectura y Fundamentos

- [Data Science](/data%20science/data-science/)
- [Machine Learning](/data%20science/machine-learning/)
## Fundamentos de Deep Learning
- **Neuronas artificiales**: unidades básicas que simulan el comportamiento de las neuronas biológicas.
- **Funciones de activación**: introducen no linealidad en la red.
	- Ejemplos: ReLU, Sigmoid, Tanh, Softmax
- **Propagación hacia adelante (Forward Propagation)**: cálculo de la salida de la red a partir de las entradas.
- **Función de pérdida (Loss Function)**: mide el error entre la predicción y la salida real.
	- Ejemplos: MSE, Cross-Entropy, Huber Loss
- **Retropropagación (Backpropagation)**: algoritmo para ajustar los pesos de la red usando gradientes.
- **Optimización**: métodos para minimizar la función de pérdida.
	- Ejemplos: SGD, Adam, RMSProp
- **Regularización**: técnicas para evitar sobreajuste.
	- Dropout, L1/L2, Data Augmentation
- **Batching**: procesar múltiples muestras a la vez para eficiencia computacional.
- **Epochs**: número de pasadas completas por el dataset durante el entrenamiento.

## Arquitectura de Redes Neuronales
- **Redes Feedforward (FFNN)**:
	- Conexión unidireccional de la entrada a la salida.
	- Ideal para regresión y clasificación básica.
- **Redes Convolucionales (CNN)**:
	- Especializadas en procesamiento de imágenes.
	- Capas: Convolución, Pooling, Fully Connected.
- **Redes Recurrentes (RNN)**:
	- Diseñadas para datos secuenciales (texto, series temporales).
	- Variantes: LSTM, GRU.
- **Transformers**:
	- Basadas en mecanismos de atención.
	- Uso principal en NLP y cada vez más en visión computacional.
	- Ejemplos: BERT, GPT, T5.
- **Redes Generativas (GANs)**:
	- Generan datos nuevos a partir de un conjunto de entrenamiento.
	- Componentes: Generador y Discriminador.
- **Redes Autoencoder**:
	- Aprendizaje no supervisado.
	- Útiles para reducción de dimensionalidad y denoising.

## Consideraciones de Diseño
- Número de capas y neuronas por capa.
- Selección de función de activación y pérdida.
- Elección de optimizador y tasa de aprendizaje.
- Estrategias de regularización para mejorar generalización.
- Selección de tamaño de batch y número de epochs.
- Preprocesamiento de datos y normalización.

## Plataformas y Herramientas
- Google Colab: ejecutar notebooks y entrenar modelos en la nube.
- GitHub Codespaces: desarrollo remoto de modelos.
- [Azure](/cloud/azure/): despliegue de modelos, entrenamiento a gran escala y servicios de IA.

## Ejemplo: Arquitectura Simple de Red Neuronal con Keras
{% raw %}
```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout

# Crear modelo
model = Sequential([
    Dense(64, activation='relu', input_shape=(100,)),
    Dropout(0.5),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])

# Compilar modelo
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.summary()
```
{% endraw %}`

## Ejemplo: Red Convolucional Básica

{% raw %}
```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

model = Sequential([
    Conv2D(32, (3,3), activation='relu', input_shape=(64,64,3)),
    MaxPooling2D((2,2)),
    Conv2D(64, (3,3), activation='relu'),
    MaxPooling2D((2,2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dense(10, activation='softmax')
])

model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model.summary()
```
{% endraw %}