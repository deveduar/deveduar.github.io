---
date: 2025-09-06 21:01
title: probabilidad
tags:
keywords:
source:
status: 🌟
Parent: "[[Area-IA]]"
cssclasses:
public_note: "true"
category: probabilidad
categories:
  - probabilidad
  - mates
  - hide-embedded-header1
---
# probabilidad
`$= dv.current().file.tags.join(" ")`

- [mates](/uncategorized/mates/)
- [Data Science](/uncategorized/data-science/)
- [Teoría de la probabilidad y teoría de la información](/mates/teor-a-de-la-probabilidad-y-teor-a-de-la-informaci-n/)

## Predicción de estado
La predicción de estado es el problema de inferir el estado futuro de un sistema a partir de observaciones pasadas y un modelo probabilístico. Es central en estadística, física, ciencia de datos, IA y sistemas complejos, donde el estado puede ser explícito (variables definidas) o implícito (latente).

- [LLM](/uncategorized/llm/)
- Cadenas de Markov
	- Definición: modelos probabilísticos donde el siguiente estado depende únicamente del estado actual (propiedad de Markov).
	- Estados discretos o continuos según el dominio.
	- Aplicación clásica en modelado secuencial y sistemas estocásticos.
	- Tokens
		- Representación discreta del estado en modelos de lenguaje.
		- Cada token actúa como un estado observable del sistema.
		- Permiten aproximar procesos complejos mediante secuencias finitas.
	- Uso de la atención para la predicción
		- Extensión no-Markoviana: el modelo accede a múltiples estados pasados.
		- La atención relaja la hipótesis de memoria limitada.
		- Permite capturar dependencias de largo alcance.
	- Bucle de retroalimentación
		- El estado futuro influye en las observaciones que alimentan el modelo.
		- Modelado difícil por efectos no lineales.
		- Ejemplo: calentamiento global (predicción ↔ comportamiento humano ↔ nuevas condiciones).
	- Rastreo
		- Estimación continua del estado oculto.
		- Relacionado con filtros de Kalman y filtros de partículas.
	- Observación
		- Información parcial y ruidosa del estado real.
		- Sin memoria: cada observación se considera independiente.
		- Simplificación necesaria para modelos tractables.
	- Estado vs pasos
		- Estado: configuración completa relevante del sistema.
		- Pasos: transiciones temporales entre estados.
		- Confundirlos lleva a errores de modelado.
	- Aleatoriedad
		- Transiciones probabilísticas, no deterministas.
		- Incertidumbre inherente vs incertidumbre por falta de información.
	- Cadenas vs redes neuronales
		- Cadenas de Markov: interpretables, simples, analíticas.
		- Redes neuronales: aproximadores universales, estados latentes complejos.
		- LLMs como modelos de transición probabilística de tokens con memoria extendida.
	- Predicción de estado
		- Estimar el estado futuro más probable.
		- Calcular distribuciones completas, no solo valores puntuales.
		- Uso en planificación, simulación y toma de decisiones.

## Solución de problemas
La probabilidad aplicada permite resolver problemas complejos mediante inferencia, estimación y optimización bajo incertidumbre.

- Cómo Google predice las búsquedas y el orden de relevancia
	- Modelado probabilístico del comportamiento del usuario.
	- Cadenas de Markov para navegación entre páginas.
	- PageRank como distribución estacionaria de una cadena.
	- Inferencia bayesiana para intención de búsqueda.
- Recursos explicativos
	- [La Extraña Matemática Que Predice (Casi) Todo - YouTube](https://www.youtube.com/watch?v=6pO6Mm2qJaE)
	- Estudios de Shannon
		- Teoría de la información aplicada al lenguaje.
		- Considerar palabras como símbolos con probabilidades.
		- Entropía como medida de incertidumbre.
		- Relación directa con modelos predictivos y compresión.

## Relación con otros campos
- [Data Science](/uncategorized/data-science/)
	- Modelos predictivos y series temporales.
	- Inferencia estadística y validación.
- [LLM](/uncategorized/llm/)
	- Predicción del siguiente token como problema probabilístico.
	- Estados latentes y aproximación de distribuciones complejas.
- Física y sistemas complejos
	- Modelos estocásticos.
	- Estados macroscópicos emergentes.
- Economía y ciencias sociales
	- Modelos de decisión bajo incertidumbre.
	- Dinámica de sistemas y expectativas.

## Tareas
- [ ] Generar informes con ChatGPT
- [ ] Crear cheatsheet de probabilidad aplicada
- [ ] Elaborar guía básica estructurada
- [ ] Construir PKM de conceptos en forma de lista
- [ ] Explorar otros ámbitos de estudio relacionados (IA, física, economía, biología)
# probabilidad — extensiones y conceptos no cubiertos

## Inferencia bayesiana
Marco fundamental para actualizar creencias ante nueva evidencia.

- Priors
	- Representan conocimiento previo o supuestos iniciales.
	- Pueden ser informativos o no informativos.
- Likelihood
	- Modelo de cómo los datos se generan dado un estado.
	- Clave para conectar teoría con observaciones reales.
- Posterior
	- Distribución actualizada del estado.
	- Base para predicción, decisión y aprendizaje.
- Actualización secuencial
	- Cada nueva observación refina el estado estimado.
	- Relación directa con predicción de estado en tiempo real.

## Estados ocultos y modelos probabilísticos avanzados
Extensión natural de las cadenas de Markov cuando el estado no es observable directamente.

- Modelos ocultos de Markov (HMM)
	- Estados latentes no observables.
	- Observaciones condicionadas al estado.
	- Uso en lenguaje, bioinformática y reconocimiento de patrones.
- Filtros probabilísticos
	- Filtro de Kalman
		- Sistemas lineales con ruido gaussiano.
		- Seguimiento óptimo bajo supuestos fuertes.
	- Filtros de partículas
		- Aproximación por muestreo.
		- Aplicables a sistemas no lineales y no gaussianos.
- Suavizado y predicción
	- Predicción: estado futuro dado el presente.
	- Suavizado: estimación del pasado usando datos futuros.

## Teoría de la información aplicada
Complementa la probabilidad al medir estructura e incertidumbre.

- Entropía
	- Incertidumbre promedio de una variable.
	- Límite teórico de compresión.
- Entropía condicional
	- Incertidumbre restante dado un estado conocido.
	- Relación con memoria y dependencia temporal.
- Información mutua
	- Cuánta información comparte una variable con otra.
	- Medida de dependencia no lineal.
- Cross-entropy y perplexity
	- Métricas prácticas para evaluar modelos predictivos.
	- Uso estándar en [LLM](/uncategorized/llm/) y modelos de lenguaje.

## Dependencia temporal y series temporales
Cuando el orden y el tiempo son críticos.

- Procesos estocásticos
	- Definición formal de evolución probabilística en el tiempo.
- Autocorrelación
	- Dependencia del estado consigo mismo en distintos tiempos.
- Modelos AR, MA, ARIMA
	- Predicción basada en estructura temporal explícita.
	- Puente entre estadística clásica y ML.
- No estacionariedad
	- Distribuciones que cambian con el tiempo.
	- Problema central en sistemas reales.

## Causalidad vs correlación
Límite de la predicción puramente probabilística.

- Correlación
	- Relación estadística sin dirección causal.
- Causalidad
	- Cambios en una variable producen cambios en otra.
- Modelos causales
	- Grafos causales y do-calculus.
	- Intervenciones vs observaciones.
- Importancia
	- Predicción sin causalidad falla ante cambios de régimen.
	- Clave en políticas públicas, clima y economía.

## Decisión bajo incertidumbre
Conectar predicción con acción.

- Funciones de pérdida
	- Coste asociado a errores de predicción.
- Utilidad esperada
	- Selección de acciones óptimas bajo incertidumbre.
- Trade-off exploración vs explotación
	- Aprender el estado vs aprovechar conocimiento actual.
- Teoría de decisiones bayesiana
	- Marco unificado para inferencia y acción.

## Evaluación y validación de modelos
Garantizar que la predicción sea significativa.

- Overfitting
	- Modelo aprende ruido en lugar de estructura.
- Generalización
	- Capacidad de predecir estados no observados.
- Validación temporal
	- Separación correcta de pasado y futuro.
- Incertidumbre del modelo
	- Diferenciar error del modelo y ruido del sistema.

## Escalabilidad y complejidad
Límites prácticos de la predicción de estado.

- Explosión del espacio de estados
	- Crecimiento exponencial con la complejidad del sistema.
- Aproximaciones
	- Reducción de dimensionalidad.
	- Estados latentes compactos.
- Modelos híbridos
	- Reglas explícitas + aprendizaje estadístico.
	- Uso frecuente en sistemas reales.

## Sistemas adaptativos y emergentes
Cuando el modelo influye en el sistema observado.

- Sistemas reflexivos
	- Las predicciones cambian el comportamiento.
- Equilibrios dinámicos
	- Estados estables que emergen de interacciones.
- Predicción limitada
	- Horizonte de predictibilidad finito.
	- Sensibilidad a condiciones iniciales.

## Conexión con aprendizaje automático moderno
- Modelos generativos
	- Aprenden distribuciones completas.
- Aprendizaje auto-supervisado
	- Predicción como tarea base.
- Estados latentes continuos
	- Representaciones internas no interpretables directamente.
- [LLM](/uncategorized/llm/)
	- Predicción probabilística condicionada a contexto largo.
	- Aproximación práctica a modelos de estado complejos.

## Límites epistemológicos
- Incertidumbre irreducible
	- Aleatoriedad fundamental.
- Incertidumbre epistémica
	- Falta de conocimiento o datos.
- Imposibilidad de predicción perfecta
	- Sistemas caóticos y adaptativos.
- Valor del modelo
	- No predecir exactamente, sino reducir incertidumbre útil.
# Recursos y tools (2025-2026) — Probabilidad, Predicción y Ciencia de Datos

## 🧠 Librerías y frameworks para modelado probabilístico y predicción
- **PyMC** – Biblioteca de *probabilistic programming* en Python para modelos bayesianos e inferencia con MCMC y variational inference. Muy usada en epidemiología, ciencia de datos y ML probabilístico.  
	- [PyMC — sitio oficial](https://www.pymc.io/)
	- [Repositorio GitHub](https://github.com/pymc-devs/pymc)
- **ArviZ** – Herramientas de análisis exploratorio, visualización y diagnóstico para modelos bayesianos (*InferenceData*, gráficas, estadísticas) que integra con PyMC, Stan y NumPyro.  
	- [ArviZ — documentación](https://www.arviz.org/)
	- [Repositorio GitHub](https://github.com/arviz-devs/arviz)
- **Bambi** – Interfaz de alto nivel para construir modelos bayesianos multivariados y multinivel sobre PyMC, con sintaxis estilo R.  
	- [Bambi — documentación](https://bambinos.github.io/bambi/)
	- [Repositorio GitHub](https://github.com/bambinos/bambi)
- **Infer.NET** – Framework .NET para inferencia bayesiana y *probabilistic programming* basado en modelos gráficos.  
	- [Infer.NET — Microsoft Research](https://dotnet.github.io/infer/)
- **PRISM model checker** – Herramienta para modelado y verificación de sistemas estocásticos (cadenas de Markov, MDPs, lógica temporal probabilística).  
	- [PRISM — sitio oficial](https://www.prismmodelchecker.org/)
- **gemlib** – Biblioteca para definir, simular y calibrar modelos estocásticos de transición de estados, orientada a simulación científica y sistemas complejos.  
	- [Artículo arXiv](https://arxiv.org/abs/2511.08124)

## 📊 Librerías de Data Science y Machine Learning
- **NumPy, Pandas, SciPy** – Fundamentos del cálculo numérico, manipulación de datos y estadística científica en Python.  
	- [NumPy](https://numpy.org/)
	- [Pandas](https://pandas.pydata.org/)
	- [SciPy](https://scipy.org/)
- **Scikit-learn** – Algoritmos clásicos de ML (clasificación, regresión, clustering, reducción de dimensionalidad) y métricas de evaluación.  
	- [Scikit-learn — documentación](https://scikit-learn.org/)
- **TensorFlow + Keras** – Framework de deep learning para modelos predictivos avanzados, secuenciales y probabilísticos.  
	- [TensorFlow](https://www.tensorflow.org/)
	- [Keras](https://keras.io/)
- **XGBoost / randomForest** – Algoritmos ensemble de alto rendimiento para predicción y clasificación.  
	- [XGBoost](https://xgboost.ai/)
	- [randomForest (CRAN)](https://cran.r-project.org/web/packages/randomForest/index.html)

## 📘 Herramientas de visualización y evaluación
- **Matplotlib / Seaborn / Bokeh** – Visualización científica y exploratoria de datos y resultados probabilísticos.  
	- [Matplotlib](https://matplotlib.org/)
	- [Seaborn](https://seaborn.pydata.org/)
	- [Bokeh](https://bokeh.org/)
- **MLflow** – Seguimiento de experimentos, métricas, artefactos y ciclo de vida de modelos predictivos.  
	- [MLflow — sitio oficial](https://mlflow.org/)

## 📚 Cursos, guías y formación actualizada
- **Curso de probabilidad para Data Science (Platzi)** – Fundamentos de probabilidad, teorema de Bayes y aplicaciones prácticas en ML.  
	- [Curso Platzi](https://platzi.com/cursos/ds-probabilidad/)
- **Roadmap de Data Science 2026** – Guía progresiva desde fundamentos hasta nivel avanzado en ciencia de datos y ML.  
	- [Roadmap Data Science 2026](https://medium.com/@gladyschoqueulloa20/roadmap-de-ciencia-de-datos-2026-tu-gu%C3%ADa-definitiva-del-b%C3%A1sico-al-experto-d734e2a3dc01)
- **Bayesian Machine Learning (LSE 2025-26)** – Syllabus universitario con inferencia bayesiana, modelos gráficos, MCMC y procesos gaussianos.  
	- [LSE — ST451](https://www.lse.ac.uk/resources/calendar2025-2026/courseGuides/ST/2025_ST451.htm)
- **Cursos del INE (2025)** – Aplicaciones de ML en producción estadística oficial usando R y técnicas predictivas.  
	- [INE — formación](https://www.ine.es/ine/eeaapp/3T25_cur02.pdf)
- **Programas de Data Science 2025-26 (DATAI School)** – Formación intensiva en ciencia de datos aplicada a negocio y predicción.  
	- [DATAI School](https://dataischool.com/programa/master-en-ds-2025/)

## 🧪 Bibliografía y materiales recomendados (vigentes)
- Libros clásicos de probabilidad y estadística (Walpole, Miller & Freund) como base teórica sólida.  
	- [Guía académica de referencia](https://www.ui1.es/sites/default/files/page_guides/files/gd_grado_ade_estadistica.pdf)
- Guías docentes universitarias con temarios estructurados en probabilidad y estadística.  
	- [Guía docente U. Valladolid](https://apps.stic.uva.es/guias_docentes/uploads/2025/512/46637/1/Documento.pdf)

## 🔧 Plataformas y entornos útiles
- **Databricks Data Intelligence Platform** – Plataforma integral para análisis de datos, ML y pipelines productivos.  
	- [Databricks](https://www.databricks.com/)
- **Cloud notebooks**
	- [Google Colab](https://colab.research.google.com/)
	- [Kaggle Notebooks](https://www.kaggle.com/code)

## 📌 Repositorios y papers recientes
- **MOOSE ProbML (2025)** – Arquitectura para *probabilistic machine learning* paralelo y cuantificación de incertidumbre.  
	- [Artículo arXiv](https://arxiv.org/abs/2504.17101)

## 🧠 Comunidades y curación de recursos
- Comunidades técnicas en Reddit y foros especializados para seguimiento de herramientas y tendencias.  
	- [r/MachineLearning](https://www.reddit.com/r/MachineLearning/)
	- [r/datascience](https://www.reddit.com/r/datascience/)

## 🧩 Buenas prácticas de uso
- Combinar *probabilistic programming* (PyMC, Stan) con visualización diagnóstica (ArviZ).
- Integrar modelos probabilísticos con pipelines clásicos de ML para cubrir inferencia, predicción y decisión.
- Priorizar métricas probabilísticas (incertidumbre, intervalos creíbles) frente a predicción puntual.
# Tools open source (GitHub) — Probabilidad, Predicción y Ciencia de Datos (2025-2026)

## 🧠 Probabilistic Programming y modelos bayesianos
- **PyMC**
	- Programación probabilística en Python, MCMC, VI, modelos jerárquicos.
	- https://github.com/pymc-devs/pymc
- **NumPyro**
	- Programación probabilística sobre JAX, alto rendimiento y escalabilidad.
	- https://github.com/pyro-ppl/numpyro
- **Pyro**
	- Framework probabilístico basado en PyTorch.
	- https://github.com/pyro-ppl/pyro
- **Stan**
	- Lenguaje y motor de inferencia bayesiana de alto rendimiento.
	- https://github.com/stan-dev/stan
- **Turing.jl**
	- Programación probabilística en Julia.
	- https://github.com/TuringLang/Turing.jl

## 🔁 Cadenas de Markov, HMM y modelos de estado
- **hmmlearn**
	- Implementación clásica de Hidden Markov Models en Python.
	- https://github.com/hmmlearn/hmmlearn
- **pomegranate**
	- Modelos probabilísticos rápidos: HMM, Bayes nets, Markov chains.
	- https://github.com/jmschrei/pomegranate
- **pykalman**
	- Filtro de Kalman y modelos lineales dinámicos.
	- https://github.com/pykalman/pykalman
- **filterpy**
	- Filtros de Kalman, partículas y tracking.
	- https://github.com/rlabbe/filterpy

## 📈 Series temporales y procesos estocásticos
- **statsmodels**
	- Modelos estadísticos clásicos: ARIMA, VAR, HMM simples.
	- https://github.com/statsmodels/statsmodels
- **sktime**
	- Framework unificado para series temporales en Python.
	- https://github.com/sktime/sktime
- **darts**
	- Predicción de series temporales con modelos clásicos y deep learning.
	- https://github.com/unit8co/darts
- **gluonts**
	- Modelos probabilísticos de series temporales (Amazon).
	- https://github.com/awslabs/gluonts

## 🧮 Teoría de la información y métricas probabilísticas
- **dit**
	- Librería para entropía, información mutua y medidas avanzadas.
	- https://github.com/dit/dit
- **pyitlib**
	- Métricas de información para análisis de dependencia.
	- https://github.com/pafoster/pyitlib

## 🤖 Machine Learning probabilístico
- **scikit-learn**
	- Algoritmos clásicos y pipelines reproducibles.
	- https://github.com/scikit-learn/scikit-learn
- **XGBoost**
	- Boosting eficiente para predicción tabular.
	- https://github.com/dmlc/xgboost
- **LightGBM**
	- Boosting rápido y escalable.
	- https://github.com/microsoft/LightGBM
- **CatBoost**
	- Boosting con buen manejo de variables categóricas.
	- https://github.com/catboost/catboost

## 🧠 Deep Learning y predicción secuencial
- **PyTorch**
	- Base para modelos probabilísticos y secuenciales modernos.
	- https://github.com/pytorch/pytorch
- **TensorFlow Probability**
	- Extensión probabilística de TensorFlow.
	- https://github.com/tensorflow/probability
- **JAX**
	- Computación numérica acelerada y diferenciable.
	- https://github.com/jax-ml/jax
- **Flax**
	- Redes neuronales sobre JAX.
	- https://github.com/google/flax

## 🧪 Evaluación, incertidumbre y explicabilidad
- **ArviZ**
	- Diagnóstico y visualización de inferencia bayesiana.
	- https://github.com/arviz-devs/arviz
- **uncertainty-toolbox**
	- Métricas y evaluación de incertidumbre predictiva.
	- https://github.com/uncertainty-toolbox/uncertainty-toolbox
- **SHAP**
	- Explicabilidad de modelos predictivos.
	- https://github.com/shap/shap

## 🔧 [simulaciones](/desarrollo%20multiplataforma/simulaciones/) y sistemas complejos
- **mesa**
	- Simulación basada en agentes.
	- https://github.com/projectmesa/mesa
- **simpy**
	- Simulación de eventos discretos.
	- https://github.com/simpx/simpy
- **networkx**
	- Grafos, procesos estocásticos en redes.
	- https://github.com/networkx/networkx

## 🧩 MDP, RL y decisión bajo incertidumbre
- **OpenAI Gymnasium**
	- Entornos estándar para MDP y RL.
	- https://github.com/Farama-Foundation/Gymnasium
- **stable-baselines3**
	- Algoritmos RL listos para producción.
	- https://github.com/DLR-RM/stable-baselines3
- **pymdptoolbox**
	- Herramientas clásicas para MDP.
	- https://github.com/sawcordwell/pymdptoolbox

## 📚 Repositorios curados (awesome lists)
- **awesome-probabilistic-machine-learning**
	- https://github.com/altosaar/awesome-probabilistic-machine-learning
- **awesome-time-series**
	- https://github.com/MaxBenChrist/awesome-time-series
- **awesome-bayesian**
	- https://github.com/josephmisiti/awesome-machine-learning#bayesian

## 🧠 Relación directa con [LLM](/uncategorized/llm/)
- Modelado de tokens como estados probabilísticos.
- Atención como memoria extendida no-Markoviana.
- Evaluación mediante entropía, cross-entropy y perplexity.
- Simulación y predicción de secuencias largas bajo incertidumbre.

# Fundamentos de la probabilidad

- [mates](/uncategorized/mates/)
- [Data Science](/uncategorized/data-science/)

## Definición y objetivo
La probabilidad es la rama de las matemáticas que estudia fenómenos aleatorios y cuantifica la incertidumbre asociada a ellos. Su objetivo principal es modelar, analizar y predecir resultados cuando no es posible un determinismo completo.

- Fenómenos deterministas vs aleatorios
- Incertidumbre como objeto matemático
- Predicción como reducción de incertidumbre, no certeza

## Experimentos aleatorios
Un experimento aleatorio es aquel cuyo resultado no puede predecirse con certeza antes de realizarse, aunque se conozcan todas sus condiciones iniciales.

- Ejemplos
	- Lanzar un dado
	- Medir ruido en un sensor
	- Próximo token en un [LLM](/uncategorized/llm/)
- Repetibilidad bajo mismas condiciones
- Resultados impredecibles individualmente

## Espacio muestral
Conjunto de todos los resultados posibles de un experimento aleatorio.

- Espacio finito
	- Dado: {1,2,3,4,5,6}
- Espacio infinito numerable
	- Número de lanzamientos hasta un éxito
- Espacio continuo
	- Tiempo, temperatura, posición
- Importancia del modelado correcto del espacio

## Eventos
Un evento es un subconjunto del espacio muestral.

- Evento simple
	- Un único resultado
- Evento compuesto
	- Varios resultados posibles
- Eventos imposibles y seguros
- Operaciones entre eventos
	- Unión
	- Intersección
	- Complemento

## Axiomas de la probabilidad (Kolmogórov)
Base formal que define qué es una probabilidad válida.

- No negatividad
	- P(A) ≥ 0
- Normalización
	- P(Ω) = 1
- Aditividad
	- Si A y B son disjuntos: P(A ∪ B) = P(A) + P(B)
- Consecuencias
	- P(Aᶜ) = 1 − P(A)
	- Monotonía de eventos

## Interpretaciones de la probabilidad
Diferentes formas de entender qué significa una probabilidad.

- Clásica
	- Casos favorables / casos posibles
	- Supone equiprobabilidad
- Frecuentista
	- Límite de frecuencias relativas
	- Probabilidad como propiedad del experimento
- Bayesiana
	- Grado de creencia racional
	- Probabilidad como estado de conocimiento
- Computacional
	- Aproximación mediante simulación y muestreo

## Variables aleatorias
Funciones que asignan valores numéricos a resultados aleatorios.

- Discretas
	- Valores contables
	- Ejemplo: número de éxitos
- Continuas
	- Valores en intervalos reales
	- Ejemplo: tiempo, energía
- Variables observables vs latentes
- Estados probabilísticos del sistema

## Distribuciones de probabilidad
Describen cómo se reparte la probabilidad entre los valores de una variable aleatoria.

- Distribuciones discretas
	- Bernoulli
	- Binomial
	- Poisson
- Distribuciones continuas
	- Uniforme
	- Normal (gaussiana)
	- Exponencial
- Función de masa vs densidad
- Función de distribución acumulada

## Medidas fundamentales
Parámetros que resumen el comportamiento de una distribución.

- Esperanza matemática
	- Valor medio esperado
- Varianza
	- Medida de dispersión
- Desviación típica
	- Raíz de la varianza
- Momentos
	- Descripción más rica de la distribución

## Probabilidad condicional
Probabilidad de un evento dado que otro ha ocurrido.

- Definición
	- P(A | B) = P(A ∩ B) / P(B)
- Actualización de información
- Dependencia entre eventos
- Base de la inferencia estadística

## Independencia
Dos eventos son independientes si uno no aporta información sobre el otro.

- Definición formal
	- P(A ∩ B) = P(A)·P(B)
- Independencia vs no correlación
- Supuesto fuerte en muchos modelos
- Ruptura frecuente en sistemas reales

## Teorema de Bayes
Herramienta central para actualizar creencias.

- Relación entre probabilidad inversa y directa
- Priori, verosimilitud y posterior
- Fundamento de la inferencia bayesiana
- Base conceptual de modelos predictivos modernos

## Ley de los grandes números
Conecta probabilidad teórica con observación empírica.

- Convergencia de la frecuencia relativa
- Justificación del enfoque frecuentista
- Importancia en simulación y muestreo

## Teorema central del límite
Resultado clave para la estadística y el modelado.

- Suma de variables aleatorias
- Convergencia a distribución normal
- Independencia de la distribución original
- Base de aproximaciones gaussianas

## Simulación y muestreo
Herramientas prácticas para trabajar con probabilidad.

- Muestreo aleatorio
- Métodos Monte Carlo
- Aproximación numérica de distribuciones
- Uso extensivo en [Data Science](/uncategorized/data-science/) y ML

## Probabilidad y predicción
La probabilidad no predice valores exactos, sino distribuciones de posibles estados.

- Predicción como inferencia
- Incertidumbre cuantificada
- Relación con cadenas de Markov
- Base conceptual de [LLM](/uncategorized/llm/) y modelos secuenciales

## Errores comunes
- Confundir probabilidad con certeza
- Ignorar el espacio muestral real
- Asumir independencia sin justificar
- Interpretar mal probabilidades condicionadas

## Conexión con otros temas
- Estadística inferencial
- Teoría de la información
- Aprendizaje automático
- Sistemas complejos y físicos
- Toma de decisiones bajo incertidumbre
# Laboratorios de probabilidad y predicción

- [mates](/uncategorized/mates/)
- [Data Science](/uncategorized/data-science/)
- [LLM](/uncategorized/llm/)

## Laboratorios introductorios
Enfocados en construir intuición probabilística y comprensión básica.

- Experimentos aleatorios básicos
	- Simulación de lanzamientos de moneda y dados.
	- Comparación entre probabilidad teórica y frecuencia observada.
	- Análisis del error para distintos tamaños de muestra.
- Espacio muestral y eventos
	- Definición explícita del espacio muestral.
	- Construcción de eventos simples y compuestos.
	- Operaciones entre eventos y visualización con diagramas.
- Interpretaciones de la probabilidad
	- Comparación clásica vs frecuentista vs bayesiana.
	- Ejemplos donde cada interpretación produce conclusiones distintas.

## Laboratorios de variables aleatorias y distribuciones
Orientados a comprender cómo se modela la incertidumbre numéricamente.

- Variables aleatorias discretas
	- Simulación de Bernoulli y Binomial.
	- Relación entre parámetros y forma de la distribución.
- Variables aleatorias continuas
	- Muestreo de distribuciones Uniforme y Normal.
	- Visualización de densidad y acumulada.
- Medidas estadísticas
	- Cálculo experimental de esperanza y varianza.
	- Comparación entre valores teóricos y empíricos.
- Teorema central del límite
	- Simulación de sumas de variables no gaussianas.
	- Observación de la convergencia a la normal.

## Laboratorios de probabilidad condicional y Bayes
Centrados en actualización de creencias e inferencia.

- Probabilidad condicional
	- Ejemplos de dependencia e independencia.
	- Casos contraintuitivos (falacia del fiscal, Monty Hall).
- Teorema de Bayes
	- Diagnóstico médico simulado.
	- Influencia de la prevalencia (prior).
- Inferencia bayesiana básica
	- Actualización secuencial del posterior.
	- Comparación con enfoque frecuentista.

## Laboratorios de simulación y Monte Carlo
Uso de muestreo para resolver problemas complejos.

- Estimación de probabilidades por simulación
	- Eventos raros.
	- Aproximación de integrales.
- Monte Carlo clásico
	- Estimación de π.
	- Evaluación de error y convergencia.
- Bootstrap
	- Estimación de incertidumbre de estadísticos.
	- Intervalos de confianza empíricos.

## Laboratorios de cadenas de Markov
Introducción a modelos de estado y predicción secuencial.

- Cadenas de Markov discretas
	- Definición de estados y matriz de transición.
	- Simulación de trayectorias.
- Distribución estacionaria
	- Convergencia a largo plazo.
	- Interpretación probabilística.
- Comparación con procesos no-Markovianos
	- Efecto de memoria limitada.
	- Casos donde la hipótesis de Markov falla.

## Laboratorios de modelos de estado oculto
Extensión a estados no observables directamente.

- Hidden Markov Models
	- Estados ocultos y observaciones.
	- Decodificación de secuencias.
- Seguimiento de estado
	- Estimación del estado más probable.
	- Comparación entre predicción y filtrado.
- Aplicaciones
	- Texto simple.
	- Series temporales ruidosas.

## Laboratorios de series temporales
Predicción bajo dependencia temporal.

- Autocorrelación
	- Análisis de dependencia en el tiempo.
- Modelos clásicos
	- AR, MA, ARIMA.
	- Evaluación de supuestos.
- No estacionariedad
	- Cambios de régimen.
	- Impacto en la predicción.

## Laboratorios de decisión bajo incertidumbre
Conectar probabilidad con acción.

- Funciones de pérdida
	- Costes asimétricos.
	- Decisiones óptimas.
- Utilidad esperada
	- Selección de acciones probabilísticas.
- Exploración vs explotación
	- Dilema del aprendizaje secuencial.

## Laboratorios de evaluación de modelos
Medir calidad predictiva e incertidumbre.

- Overfitting
	- Simulación de modelos sobreajustados.
- Validación temporal
	- Separación correcta de pasado y futuro.
- Incertidumbre predictiva
	- Intervalos creíbles.
	- Comparación con predicción puntual.

## Laboratorios avanzados
Para integrar conceptos en sistemas complejos.

- Sistemas adaptativos
	- Predicciones que influyen en el sistema.
- Modelos híbridos
	- Reglas + probabilidad + aprendizaje.
- Límite de la predicción
	- Sensibilidad a condiciones iniciales.
	- Horizonte de predictibilidad.

## Laboratorios aplicados
- [Data Science](/uncategorized/data-science/)
	- Predicción de demanda.
	- Detección de anomalías.
- [LLM](/uncategorized/llm/)
	- Predicción de tokens como proceso probabilístico.
	- Análisis de entropía y perplexity.
- Ciencias naturales
	- Modelos estocásticos en física y biología.

## Resultados esperados
- Intuición sólida sobre incertidumbre.
- Capacidad de modelar estados probabilísticos.
- Comprensión de límites de la predicción.
- Base práctica para modelos predictivos modernos.

# Temarios de asignaturas de probabilidad (universidades 2025-2026)

## ⭐ Temario general de **Probability / Probabilidad** (estructura común universitaria)
La mayoría de los cursos introductorios y de grado comparten una estructura similar, con variaciones en rigor matemático y aplicaciones.

### Fundamentos
- Introducción a espacios de probabilidad
- Axiomas de la probabilidad (Kolmogórov)
- Operaciones con eventos: unión, intersección y complementos
- Reglas básicas de probabilidad
- Análisis combinatorio
	- Principio de multiplicación
	- Permutaciones
	- Combinaciones
- Probabilidad condicional
- Independencia de eventos
- Teorema de Bayes

### Variables aleatorias
- Definición formal de variable aleatoria
- Variables aleatorias discretas
	- Función de masa de probabilidad
- Variables aleatorias continuas
	- Función de densidad
	- Función de distribución acumulada
- Esperanza matemática
- Varianza y desviación típica
- Momentos y funciones generadoras de momentos

### Distribuciones de probabilidad
- Distribuciones discretas
	- Bernoulli
	- Binomial
	- Poisson
- Distribuciones continuas
	- Uniforme
	- Normal
	- Exponencial
- Distribuciones adicionales según nivel
	- Gamma
	- Beta
	- Chi-cuadrado

### Distribuciones conjuntas
- Vectores aleatorios
- Distribuciones conjuntas
- Distribuciones marginales
- Distribuciones condicionales
- Independencia de variables aleatorias
- Covarianza
- Correlación

### Teoremas límite
- Ley de los grandes números
- Teorema central del límite
- Interpretación probabilística
- Aplicaciones y aproximaciones prácticas

### Análisis de propiedades
- Linealidad de la esperanza
- Propiedades de la varianza
- Esperanza condicional
- Momentos condicionales y marginales

## 📍 Temario detallado — **Universidad de Granada**  
Grado en Matemáticas / Estadística — Guía docente 2025-2026  
[Guía docente oficial](https://estadistica.ugr.es/docencia/grados/grado-matematicas-y-fisica/probabilidad/guia-docente)

### Teórico
- Variables aleatorias continuas y sus modelos
- Vectores aleatorios y distribuciones multidimensionales
- Independencia de variables aleatorias
- Distribuciones condicionadas
- Regresión y correlación
- Modelos probabilísticos multidimensionales
- Introducción a la ley de los grandes números
- Introducción al teorema central del límite

### Práctico
- Cálculo de probabilidades en modelos discretos y continuos
- Obtención de distribuciones marginales y condicionales
- Cálculo de esperanza, varianza y momentos
- Funciones generatrices de momentos
- Aplicación de independencia y propiedades de reproductividad
- Regresión mínima-cuadrática y análisis de correlación

## 📍 Temario típico — **Universidades USA**
Curso tipo **Intro to Probability / MA-485**  
[Syllabus ejemplo (University of Alabama at Birmingham)](https://www.uab.edu/cas/mathematics/images/Documents/syllabi/spring-2025/MA-485-1D-Spring-2025-Keren%20Li.pdf)

- Análisis combinatorio
- Axiomas y propiedades de la probabilidad
- Probabilidad condicional
- Independencia
- Variables aleatorias discretas y continuas
- Función de distribución acumulada (CDF)
- Esperanza y varianza
- Distribuciones comunes
- Distribuciones conjuntas
- Propiedades de la esperanza
- Ley de los grandes números
- Teorema central del límite

## 🧩 Temas adicionales frecuentes según universidad

### Temas introductorios / complementarios
- Diagramas de árbol
- Tablas de contingencia
- Análisis de eventos conjuntos
- Interpretaciones de la probabilidad (clásica, frecuentista, bayesiana)

### Profundización
- Transformaciones de variables aleatorias
- Funciones generadoras de probabilidad
- Aproximaciones entre distribuciones
- Introducción a procesos estocásticos
- Modelado probabilístico aplicado

## 🧠 Conexión con otras disciplinas
- Estadística inferencial
- Procesos estocásticos
- Simulación y métodos Monte Carlo
- [Data Science](/uncategorized/data-science/)
- Aprendizaje automático
- Modelos predictivos y sistemas probabilísticos

## 📌 Recursos académicos abiertos
- **MIT OpenCourseWare — 18.05 Introduction to Probability and Statistics**  
	- https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics/
- Guías docentes universitarias en PDF como referencia estructural y de profundidad teórica
# Laboratorios de Probabilidad y Predicción con Tecnología y Tools (2025-2026)

- [mates](/uncategorized/mates/)
- [Data Science](/uncategorized/data-science/)
- [LLM](/uncategorized/llm/)

## 1. Laboratorio de simulación básica con Python
- Herramientas: **NumPy, SciPy, Matplotlib**
- Simulación de lanzamientos de monedas y dados
- Estimación empírica de probabilidades
- Visualización de distribuciones discretas y continuas
- Comparación entre resultados teóricos y simulados

## 2. Laboratorio de variables aleatorias y distribuciones
- Herramientas: **PyMC, NumPyro, Pyro**
- Definición de variables aleatorias discretas y continuas
- Cálculo de esperanza, varianza y momentos
- Generación de muestras con distribuciones como Binomial, Poisson, Normal
- Visualización y análisis probabilístico con **ArviZ**

## 3. Laboratorio de probabilidad condicional y Bayes
- Herramientas: **PyMC, Bambi, Stan**
- Ejercicios de actualización de creencias con teorema de Bayes
- Modelos simples de diagnóstico médico o series temporales
- Comparación entre enfoques bayesianos y frecuentistas
- Análisis de incertidumbre con **ArviZ**

## 4. Laboratorio de cadenas de Markov y HMM
- Herramientas: **hmmlearn, pomegranate, pykalman**
- Implementación de cadenas de Markov discretas
- Simulación de trayectorias y cálculo de distribución estacionaria
- Modelos de estados ocultos (Hidden Markov Models)
- Aplicaciones a predicción secuencial y generación de texto

## 5. Laboratorio de series temporales y procesos estocásticos
- Herramientas: **statsmodels, sktime, darts, gluonts**
- Modelado de series temporales discretas y continuas
- Ajuste de modelos AR, MA, ARIMA
- Evaluación de autocorrelación y dependencias temporales
- Predicción probabilística de pasos futuros

## 6. Laboratorio de simulación Monte Carlo
- Herramientas: **NumPy, SciPy, PyMC**
- Estimación de probabilidades complejas mediante muestreo
- Cálculo de integrales y expectativas matemáticas
- Bootstrap para evaluación de incertidumbre
- Visualización de convergencia de estimaciones

## 7. Laboratorio de Machine Learning probabilístico
- Herramientas: **scikit-learn, TensorFlow Probability, PyTorch**
- Implementación de modelos predictivos con incertidumbre
- Comparación de predicciones puntuales vs distribucionales
- Integración de variables aleatorias y features predictivos
- Evaluación con métricas probabilísticas (cross-entropy, log-likelihood)

## 8. Laboratorio de Deep Learning secuencial
- Herramientas: **PyTorch, TensorFlow, JAX, Flax**
- Modelos recurrentes y transformers simples
- Predicción de secuencias como cadenas de estados probabilísticos
- Análisis de entropía y perplexity en predicción de tokens
- Comparación entre memoria limitada (Markov) y atención global

## 9. Laboratorio de evaluación y visualización de modelos
- Herramientas: **ArviZ, Matplotlib, Seaborn, Bokeh, Mlflow**
- Seguimiento de experimentos y métricas
- Visualización de distribuciones predichas vs observadas
- Comparación de incertidumbre predictiva
- Integración con pipelines de ML clásico

## 10. Laboratorio integrador avanzado
- Herramientas: combinación de **PyMC, pomegranate, sktime, PyTorch**
- Modelado de sistemas complejos con múltiples variables aleatorias
- Predicción probabilística y análisis de escenarios
- Aplicación a problemas reales de [Data Science](/uncategorized/data-science/) y [LLM](/uncategorized/llm/)
- Interpretación de resultados y análisis de limitaciones

## 11. Laboratorio aplicado a proyectos de LLM
- Simulación de tokens como variables aleatorias discretas
- Cálculo de probabilidad condicional de secuencias
- Evaluación de entropía, perplexity y distribución de predicciones
- Comparación de técnicas Markov vs Transformers con atención
- Integración con herramientas de visualización de resultados
