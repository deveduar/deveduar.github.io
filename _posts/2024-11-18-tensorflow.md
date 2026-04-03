---
date: 2024-11-18 19:35
title: TensorFlow
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
public_note: true
category: Data Science
tags:
  - datascience
  - data-science
  - IA
  - tensorflow
---
# TensorFlow

- [Data Science](/data%20science/data-science/)
- [Deep Learning](/data%20science/deep-learning/)
- [Machine Learning](/data%20science/machine-learning/)
- keras

# Python: Red Neuronal con TensorFlow
- [python](/software%20engineering/python/)
- Snippet en **MassCode**
- [Tu primera red neuronal en Python y TensorFlow](https://www.youtube.com/watch?v=iX_on3VxZzk)
- [Google Colab](https://colab.research.google.com/notebooks/intro.ipynb?utm_source=scs-index)  
- [Keras Framework](https://keras.io/)
- [Tu primera red neuronal en Python y TensorFlow código Google Colab](https://colab.research.google.com/drive/1ehETBOVtCqe7G6HOvm84hfXba8Gd9ILW?usp=sharing#scrollTo=FVDejrBgcokc)

### Conceptos Clave
- Capas de tipo densa: neuronas de entrada, ocultas y de salida.
- Modelo secuencial: estructura de capas apiladas.
- Pesos y sesgos: parámetros internos de la red.
- Optimizador Adam: ajusta pesos y sesgos durante el entrenamiento.
- Tasa de aprendizaje: controla la magnitud de los ajustes en pesos y sesgos.
- Función de pérdida: mide el error entre predicciones y valores reales; penaliza errores grandes y pequeños.
- Compilar modelo: define optimizador, función de pérdida y métricas.
- Entrenamiento del modelo:
	- Función `fit()`: recibe datos de entrada y resultados esperados.
	- Epochs: número de iteraciones sobre los datos.
	- Verbose: controla la visualización de progreso.
- Conversión de unidades: por ejemplo, Celsius a Fahrenheit.
- Visualización de resultados: gráficas de entrenamiento y validación.
- Estructura interna de la red: variables internas, pesos, activaciones.
- Flujo de la red: cómo los datos atraviesan las capas y se procesan.

### Ejemplo de Código: Red Neuronal Simple

{% raw %}
```python
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np

# Datos de ejemplo: Celsius a Fahrenheit
celsius = np.array([-40, -10, 0, 8, 15, 22, 38], dtype=float)
fahrenheit = np.array([-40, 14, 32, 46, 59, 72, 100], dtype=float)

# Crear modelo secuencial
model = keras.Sequential([
	layers.Dense(units=1, input_shape=[1])
])

# Compilar modelo
model.compile(optimizer='adam', loss='mean_squared_error')

# Entrenar modelo
history = model.fit(celsius, fahrenheit, epochs=500, verbose=0)

# Predicciones
print(model.predict([100.0]))
```
{% endraw %}`

### Visualización del Entrenamiento

{% raw %}
```python
import matplotlib.pyplot as plt

plt.plot(history.history['loss'])
plt.title('Pérdida durante el entrenamiento')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.show()
```
{% endraw %}

### Expansión de Conceptos

- **Activaciones:** funciones que determinan la salida de cada neurona.
- **Overfitting y underfitting:** ajustar modelo para que generalice sin memorizar datos.
- **Regularización:** técnicas como `Dropout` para evitar overfitting.
- **Batch size:** número de muestras procesadas antes de actualizar pesos.
- **Callback:** funciones que permiten monitorizar o modificar el entrenamiento en tiempo real.
- **Pipeline de datos:** normalización, escalado y preprocesamiento de los datos antes de entrar a la red.
- **Visualización de la arquitectura:** herramientas como `plot_model()` para inspeccionar la estructura de la red.

# TensorFlow Avanzado

## Tipos de Capas Avanzadas
- **Convolucionales (Conv2D, Conv1D):**  
	- Ideales para procesamiento de imágenes o secuencias con patrones espaciales.  
	- Extraen características locales mediante filtros (kernels).  
	- Combinadas con capas de pooling para reducción de dimensionalidad.
- **Recurrentes (LSTM, GRU):**  
	- Diseñadas para secuencias temporales o datos dependientes del orden.  
	- Mantienen un "estado" interno que permite recordar información pasada.  
	- GRU (Gated Recurrent Unit) es más ligera que LSTM pero con comportamiento similar.
- **Embeddings:**  
	- Transforman datos categóricos o palabras en vectores densos de dimensión fija.  
	- Usadas principalmente en NLP y recomendaciones.  
	- Permiten capturar relaciones semánticas entre elementos.

## Funciones de Activación y su Impacto
- **ReLU (Rectified Linear Unit):** activa la neurona solo si la entrada > 0, evita saturación y acelera el entrenamiento.  
- **Sigmoid:** convierte valores a rango [0,1], útil en salidas binarias, pero propenso a gradientes pequeños.  
- **Tanh:** rango [-1,1], centrado en cero, útil para normalización de activaciones internas.  
- **Softmax:** convierte un vector en probabilidades que suman 1, usado en clasificación multiclase.

## Métricas de Evaluación
- **MAE (Mean Absolute Error):** error promedio absoluto, menos sensible a outliers.  
- **MSE (Mean Squared Error):** penaliza más errores grandes, útil para regresión.  
- **Accuracy:** porcentaje de predicciones correctas, ideal para clasificación balanceada.  
- **Precision:** proporción de predicciones positivas correctas, importante en clasificación desequilibrada.  
- **Recall:** proporción de positivos reales detectados, mide sensibilidad del modelo.

## Técnicas de Optimización Avanzadas
- **Learning Rate Scheduling:** ajuste dinámico de la tasa de aprendizaje según epochs o performance.  
- **Gradient Clipping:** limita el tamaño máximo del gradiente para evitar explosión de gradientes en redes profundas o recurrentes.

## Guardado y Carga de Modelos
- **model.save('ruta_modelo.h5')**: guarda arquitectura, pesos y optimizador en un archivo.  
- **keras.models.load_model('ruta_modelo.h5')**: carga un modelo completo listo para inferencia o reentrenamiento.

## Transfer Learning
- Uso de modelos preentrenados en tareas similares.  
- Permite ahorrar tiempo y mejorar precisión con menos datos.  
- Ejemplo: usar `ResNet50` para clasificación de imágenes y ajustar solo las capas finales.

## Deploy de Modelos
- Exportación a producción:
	- **Web:** TensorFlow.js.  
	- **Móvil:** TensorFlow Lite (Android/iOS).  
	- **Servidor:** APIs REST usando Flask, FastAPI o TensorFlow Serving.  
- Consideraciones: tamaño del modelo, latencia y compatibilidad de hardware.

## Visualización Avanzada
- **TensorBoard:** monitorización de métricas, pérdidas, histogramas de pesos y activaciones.  
- Gráficas en tiempo real durante entrenamiento, útil para detectar overfitting o underfitting.  
- Permite comparar múltiples entrenamientos y ajustar hiperparámetros.

## Conceptos de Arquitectura
- Número de capas ocultas: más capas permiten aprender representaciones complejas, pero aumentan riesgo de overfitting.  
- Neuronas por capa: más neuronas capturan más información, pero incrementan costo computacional.  
- Conexiones: densas, convolucionales o recurrentes según la tarea.  
- Pesos iniciales: inicialización correcta (He, Glorot) mejora la convergencia del entrenamiento.

## Tipos de Problemas
- **Regresión:** predicción de valores continuos (ej. temperatura, precios).  
- **Clasificación:** asignación de categorías discretas (binaria o multiclase).  
- **Series temporales:** predicción de secuencias en el tiempo (ej. stock, demanda).  
- **NLP (Natural Language Processing):** análisis de texto, traducción, clasificación de sentimientos, generación de texto.

# Fundamentos de TensorFlow

## Qué es TensorFlow
- Framework de código abierto desarrollado por Google para computación numérica y machine learning.  
- Permite construir, entrenar y desplegar modelos de aprendizaje automático y deep learning.  
- Basado en grafos de flujo de datos donde los nodos representan operaciones y los bordes representan tensores.

## Tensores
- Estructuras de datos multidimensionales (arrays) que transportan información en TensorFlow.  
- Tipos: `tf.constant`, `tf.Variable`, `tf.Tensor`.  
- Operaciones básicas: suma, multiplicación, reshape, slicing, concatenación.  
- Ejemplo:

{% raw %}
```python
import tensorflow as tf

a = tf.constant([[1, 2], [3, 4]])
b = tf.Variable([[5, 6], [7, 8]])
c = tf.add(a, b)
print(c)
```
{% endraw %}`

## Computación con Grafos

- **Grafos estáticos:** definición de operaciones antes de la ejecución (TensorFlow 1.x).
- **Eager Execution:** evaluación inmediata de operaciones (TensorFlow 2.x, modo por defecto).
- Ventajas: optimización de operaciones, paralelización, compatibilidad con GPU/TPU.

## Variables y Constantes

- **Constantes:** valores fijos que no cambian durante el entrenamiento (`tf.constant`).
- **Variables:** parámetros que se actualizan durante el entrenamiento (`tf.Variable`).
- Importancia: pesos, sesgos y parámetros ajustables.

## Operaciones Matemáticas

- Aritmética: suma, resta, multiplicación, división.
- Funciones lineales y no lineales: `tf.matmul`, `tf.reduce_sum`, `tf.square`.
- Funciones de activación: `tf.nn.relu`, `tf.nn.sigmoid`, `tf.nn.tanh`.

## TensorFlow y Keras

- **Keras:** API de alto nivel integrada en TensorFlow para construir modelos de manera sencilla.
- Permite crear modelos secuenciales y funcionales.
- Simplifica compilación, entrenamiento y evaluación de modelos.

{% raw %}
```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
	Dense(10, activation='relu', input_shape=(5,)),
	Dense(1)
])
model.compile(optimizer='adam', loss='mse')
```
{% endraw %}

## Entrenamiento de Modelos

- Función `fit()`: realiza forward pass, calcula pérdida y backpropagation para actualizar pesos.
- Parámetros clave: `epochs`, `batch_size`, `verbose`.
- Función de pérdida: mide qué tan lejos están las predicciones de los valores reales.
- Optimizadores: ajustan pesos y sesgos (ej. Adam, SGD, RMSProp).

## Evaluación y Predicción

- Función `evaluate()`: calcula la pérdida y métricas en datos de validación o prueba.
- Función `predict()`: genera predicciones sobre nuevos datos.

## GPU y TPU

- TensorFlow detecta automáticamente GPUs disponibles para acelerar cálculos.
- TPU (Tensor Processing Unit) optimizado para operaciones de deep learning a gran escala.

## Flujo de Trabajo Básico

1. Preparar datos: normalización, escalado, batch.
2. Definir modelo: capas, activaciones, arquitectura.
3. Compilar modelo: elegir optimizador, función de pérdida y métricas.
4. Entrenar modelo: `fit()`.
5. Evaluar modelo: `evaluate()`.
6. Guardar y desplegar: `model.save()`, exportación a producción o dispositivos móviles.

# Laboratorios y Casos de Uso con TensorFlow

## Laboratorios Sugeridos

- **Lab 1: Red Neuronal Simple**
	- Crear un modelo secuencial con capas densas.
	- Problema: predicción de temperatura Celsius a Fahrenheit.
	- Objetivos: entender tensores, capas densas, función de pérdida, optimizador y entrenamiento básico.

- **Lab 2: Clasificación de Imágenes con CNN**
	- Usar capas convolucionales, pooling y fully connected.
	- Dataset: MNIST o CIFAR-10.
	- Objetivos: extracción de características, overfitting/underfitting, visualización de filtros.

- **Lab 3: Predicción de Series Temporales**
	- Modelo LSTM o GRU.
	- Dataset: precios de acciones o demanda energética.
	- Objetivos: secuencias temporales, estado interno, backpropagation a través del tiempo.

- **Lab 4: NLP Básico con Embeddings**
	- Clasificación de sentimientos o análisis de texto.
	- Usar embeddings preentrenados o propios.
	- Objetivos: vectorización de palabras, capas recurrentes, tokenización.

- **Lab 5: Transfer Learning**
	- Usar un modelo preentrenado como ResNet50 o MobileNet.
	- Problema: clasificación de imágenes específica (ej. frutas, animales).
	- Objetivos: congelar capas, reentrenar solo las capas finales.

- **Lab 6: Regularización y Optimización Avanzada**
	- Implementar Dropout, batch normalization y learning rate scheduling.
	- Dataset: cualquier problema de clasificación o regresión.
	- Objetivos: mejorar generalización y estabilidad del entrenamiento.

- **Lab 7: Deploy de Modelos**
	- Convertir un modelo entrenado a TensorFlow Lite o TensorFlow.js.
	- Objetivos: probar inferencia en móviles, web o API REST.

- **Lab 8: Visualización con TensorBoard**
	- Monitorizar métricas, pérdidas, histogramas de pesos.
	- Objetivos: entender comportamiento del entrenamiento y detectar problemas de convergencia.

## Casos de Uso Reales

- **Visión por Computadora**
	- Detección de objetos en imágenes y video.
	- Clasificación médica (radiografías, resonancias).
	- Reconocimiento facial o gestos.

- **Procesamiento de Lenguaje Natural (NLP)**
	- Chatbots, asistentes virtuales.
	- Traducción automática.
	- Clasificación de sentimientos o análisis de opiniones.

- **Series Temporales y Predicción**
	- Pronóstico de ventas, demanda energética o precios de acciones.
	- Detección de anomalías en sensores industriales.
	- Predicción del clima y patrones meteorológicos.

- **Sistemas de Recomendación**
	- Recomendación de productos, películas o música.
	- Uso de embeddings para representar usuarios y items.

- **Automatización y Robótica**
	- Control de robots con aprendizaje reforzado.
	- Vehículos autónomos: percepción y planificación de rutas.

- **Optimización de Procesos**
	- Modelos de predicción para logística y supply chain.
	- Mantenimiento predictivo de maquinaria industrial.
# Recursos TensorFlow (Estado a 2025‑2026)

## Cursos y Formación Actualizada
- **[Tensorflow 2: Deep Learning & Artificial Intelligence (2026)](https://www.udemy.com/course/deep-learning-tensorflow-2/)** – Curso completo con visión, series temporales, NLP, GANs, Reinforcement Learning, transfer learning, despliegue con TensorFlow Serving y TensorFlow Lite. Última actualización en 1/2026.
- **[TensorFlow - Hands‑on Machine Learning with TensorFlow 2026](https://www.udemy.com/course/tensorflow-hands-on-machine-learning-with-tensorflow/)** – Enfoque práctico con regresión lineal y logística usando TensorFlow.
- **[Curso de Deep Learning con TensorFlow y Keras (OpenWebinars)](https://openwebinars.net/cursos/deep-learning-tensorflow-keras/)** – Formación práctica y ejemplos para redes neuronales con TensorFlow y Keras en español.
- **[DEEP LEARNING: DOMINA LAS REDES NEURONALES CON TENSORFLOW Y PYTHON (AIN)](https://www.ain.es/formacion/curso/deep-learning-rede-neuronales-tensorflow-python/)** – Curso online con redes convolucionales, recurrentes y no supervisado.

## Documentación Oficial y Tutoriales
- **[Tutorials | TensorFlow Core](https://www.tensorflow.org/tutorials)** – Repositorio oficial de tutoriales de TensorFlow con ejemplos y guías para diversos casos de uso (visión, texto, etc.).
- **[Machine learning education | TensorFlow](https://www.tensorflow.org/resources/learn-ml)** – Recursos agrupados por la propia comunidad oficial, con cursos, libros y guías para producción, móvil y web.

## Rutas de Aprendizaje y Guías Recomendadas
- **[TensorFlow Resources Roadmap](https://tensorflow-world-resources.readthedocs.io/en/latest/content/books.html)** – Compilación de libros, cursos, tutoriales y proyectos para estructurar tu aprendizaje completo de TensorFlow.
- **[Ruta de aprendizaje en Hackr.io (2025)](https://hackr.io/tutorials/learn-tensorflow)** – Listado curado de cursos y tutoriales sugeridos por la comunidad con opciones gratuitas y de pago.

## Libros y Referencias Destacadas
- **[Hands‑On Machine Learning with TensorFlow 2.0 (Géron)](https://umatechnology.org/11-best-tensorflow-books-2025-update/)** – Guía práctica actualizada para implementar proyectos reales con TensorFlow.
- **[Deep Learning with TensorFlow 2 and Keras](https://umatechnology.org/11-best-tensorflow-books-2025-update/)** – Recurso intermedio/avanzado para construir y comprender redes profundas.
- **[Introduction to Computer Vision with TensorFlow (Thompson Carter)](https://bookauthority.org/books/new-tensorflow-books)** – Libro enfocado en visión artificial con casos prácticos de CNNs y GANs.
- Libros recomendados por TensorFlow.org como *AI and Machine Learning for Coders*, *Deep Learning with Python*, y otros títulos clásicos de fundamentos ML y DL. ([TensorFlow Resources](https://www.tensorflow.org/resources/learn-ml))

## Recursos Complementarios
- **[Recursos técnicos de Deep Learning (NVIDIA)](https://www.nvidia.com/es-es/training/resources/)** – Web con materiales para ampliar habilidades en Deep Learning con TensorFlow y otros frameworks.
- **[Materiales de cursos académicos y guías docentes 2025‑26](https://apps.stic.uva.es/guias_docentes/uploads/2025/512/46633/1/Documento.pdf)** – Bibliografías universitarias que incluyen textos clásicos y modernos sobre redes neuronales y TensorFlow.

## Recursos para Especialización y Producción
- **[TensorFlow Learning Paths (oficial)](https://www.tensorflow.org/resources/learn-ml)** – Rutas específicas para despliegue móvil (TensorFlow Lite / LiteRT), web (TensorFlow.js), y producción usando TFX.
- **[TensorBoard y producción ML](https://www.tensorflow.org/resources/learn-ml)** – Documentación oficial incluye herramientas para monitorización y MLOps que facilitan llevar modelos de entrenamiento a producción.

## Consejos de la Comunidad (Opiniones y Tendencias)
- En 2025 la comunidad de desarrolladores ML discute sobre evolución del ecosistema y comparación de frameworks (ej. TensorFlow vs PyTorch), lo cual puede ser útil para posicionar tus habilidades según la demanda actual. ([Reddit r/MachineLearning](https://www.reddit.com/r/MachineLearningJobs/comments/1nssvef))
