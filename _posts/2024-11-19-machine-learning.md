---
date: 2024-11-19 23:34
title: Machine Learning
keywords:
source:
status: 🌟
Parent: "[[Area-Prog]]"
category: Data Science
tags:
  - IA
  - machine-learning
  - data-science
  - ML
---
# Machine Learning


## Recursos y Referencias
- [mates](/uncategorized/mates/)
- [Data Science](/data%20science/data-science/)
- [Deep Learning](/data%20science/deep-learning/)
- pandas
- [python](/software%20engineering/python/)
- [TensorFlow](/data%20science/tensorflow/)
- pytorch
- [Que debes saber para machine learning (Roadmap) - YouTube](https://youtu.be/8nSGUb9zCco)

## Librerías y Herramientas
- **numpy**: Manipulación de arrays y operaciones matemáticas.
- **matplotlib**: Visualización de datos estática.
- **seaborn**: Visualización estadística basada en matplotlib.

## Conceptos Fundamentales
- **Regresión vs Redes Neuronales**:  
	- La regresión lineal y logística es adecuada para problemas simples y lineales.  
	- Las redes neuronales permiten modelar relaciones no lineales complejas, siendo útiles en problemas de visión, lenguaje y series temporales.
- **LLM (Large Language Models)**: Modelos de lenguaje de gran escala capaces de generar texto, resumir, traducir y responder preguntas complejas.

## Procesos en Machine Learning
- **Preparación de Datos**: Limpieza, normalización, transformación y división en conjuntos de entrenamiento y prueba.  
- **Selección de Modelo**: Elegir entre modelos supervisados, no supervisados o de refuerzo según el problema.  
- **Entrenamiento**: Ajuste de los parámetros del modelo mediante algoritmos de optimización.  
- **Evaluación**: Medición del desempeño usando métricas adecuadas (precisión, recall, F1, RMSE).  
- **Despliegue**: Integración del modelo en entornos productivos para inferencia en tiempo real o batch.

## Tipos de Modelos ML
- **Supervisado**: Modelos entrenados con datos etiquetados.  
	- **Ejemplos**: Regresión lineal, regresión logística, árboles de decisión, SVM.
- **No Supervisado**: Modelos que buscan patrones sin etiquetas.  
	- **Ejemplos**: K-means, PCA, clustering jerárquico.
- **Aprendizaje por Refuerzo**: El modelo aprende mediante interacción con el entorno y recompensas.
- **Modelos de ML Supervisados de Alta Precisión (mp supervisado)**: Modelos optimizados con técnicas de regularización, ensambles y validación cruzada.

## Redes Neuronales
- **Arquitecturas Básicas**: Perceptrón, MLP (Multi-Layer Perceptron).  
- **Redes Convolucionales (CNN)**: Para visión por computadora.  
- **Redes Recurrentes (RNN/LSTM/GRU)**: Para secuencias y series temporales.  
- **Transformers**: Base de LLM y tareas de NLP modernas.

## Ensemble Learning
- **Bagging**: Promedia o vota múltiples modelos independientes (Ej. Random Forest).  
- **Boosting**: Entrena modelos secuenciales corrigiendo errores previos (Ej. XGBoost, AdaBoost).  
- **Stacking**: Combina diferentes tipos de modelos para mejorar la predicción final.

## Buenas Prácticas
- Normalizar y escalar los datos cuando sea necesario.  
- Evitar overfitting usando regularización y validación cruzada.  
- Evaluar el modelo con métricas adecuadas según el tipo de problema.  
- Documentar el flujo completo de datos y experimentos para reproducibilidad.

# Machine Learning Avanzado

## Conceptos Teóricos Clave
- **Overfitting y Underfitting**:  
	- Overfitting: Modelo se ajusta demasiado a los datos de entrenamiento, perdiendo capacidad de generalización.  
	- Underfitting: Modelo demasiado simple que no captura patrones relevantes de los datos.
- **Bias y Variance**:  
	- Bias: Error por suposiciones del modelo, conduce a underfitting.  
	- Variance: Sensibilidad del modelo a cambios en los datos, conduce a overfitting.  
	- Trade-off bias-variance: Balance necesario para un modelo generalizable.
- **Funciones de Pérdida**:  
	- Regresión: MSE, MAE.  
	- Clasificación: Cross-Entropy, Hinge Loss.  
- **Optimización y Algoritmos de Aprendizaje**:  
	- Gradiente descendente y variantes: SGD, Adam, RMSProp.  
	- Regularización: L1, L2, Dropout, Early Stopping.

## Pipeline de Machine Learning
- **Extracción de Características (Feature Engineering)**: Transformar datos crudos en variables útiles.  
- **Selección de Características (Feature Selection)**: Reducir dimensionalidad y eliminar variables irrelevantes.  
- **Escalado y Normalización**: Min-Max, StandardScaler, RobustScaler.  
- **Validación Cruzada**: K-Fold, Stratified K-Fold para medir desempeño de forma robusta.  
- **Tuning de Hiperparámetros**: Grid Search, Random Search, Bayesian Optimization.

## Modelos Avanzados y Técnicas
- **Redes Profundas (Deep Learning)**:  
	- Arquitecturas: CNN, RNN, LSTM, GRU, Transformers.  
	- Técnicas de regularización: Dropout, Batch Normalization.  
	- Transfer Learning: Reutilización de modelos preentrenados.
- **Modelos Probabilísticos**:  
	- Naive Bayes, Gaussian Mixture Models, HMM.  
- **Aprendizaje No Supervisado Avanzado**:  
	- Clustering jerárquico, DBSCAN, t-SNE y UMAP para reducción de dimensionalidad.  
- **Ensemble Learning Avanzado**:  
	- Bagging, Boosting, Stacking, Blending.

## Interpretabilidad y Explicabilidad
- **SHAP y LIME**: Técnicas para explicar predicciones de modelos complejos.  
- **Feature Importance**: Evaluación de la relevancia de cada característica en la predicción.  
- **Modelos Transparentes**: Árboles de decisión y regresión lineal como referencia para entender patrones.

## Herramientas y Ecosistema
- **Frameworks ML/DL**: TensorFlow, PyTorch, Keras, Scikit-Learn, XGBoost, LightGBM.  
- **Data Handling**: Pandas, Numpy, Dask (para grandes volúmenes de datos).  
- **Visualización**: Matplotlib, Seaborn, Plotly, Altair.  
- **ML Ops y Producción**: MLflow, Kubeflow, Airflow, TFX para pipelines de producción.

## Aplicaciones Comunes
- Predicción de series temporales: finanzas, clima, demanda de productos.  
- Clasificación de imágenes: diagnóstico médico, reconocimiento facial.  
- Procesamiento de lenguaje natural: chatbots, análisis de sentimientos, traducción automática.  
- Recomendaciones: sistemas de recomendación de productos o contenidos.  
- Modelos generativos: generación de texto, imágenes, audio con LLM o GANs.

## Buenas Prácticas y Recomendaciones
- Documentar el flujo completo de datos y modelos para reproducibilidad.  
- Mantener control de versiones de datos y modelos (Data Versioning).  
- Monitoreo continuo de modelos en producción para detectar drift.  
- Experimentación controlada con métricas claras y comparables.
