public_note: "true"
# Guía Práctica Completa de Celery

## Configuración Inicial

### Instalación y Setup Básico
{% raw %}
```bash
# Instalación
pip install celery redis

# Verificar servicios
redis-server --version
celery --version
```
{% endraw %}

### Aplicación Básica
{% raw %}
```python
# celery_app.py
from celery import Celery
import time

# Configuración de la app
app = Celery(
    'mi_proyecto',
    broker='redis://localhost:6379/0',
    backend='redis://localhost:6379/0',
    include=['proyecto.tareas']
)

# Configuración general
app.conf.update(
    task_serializer='json',
    accept_content=['json'],
    result_serializer='json',
    timezone='Europe/Madrid',
    enable_utc=True,
)

# Tarea de ejemplo
@app.task(bind=True)
def tarea_larga(self, segundos):
    """Tarea que simula procesamiento largo"""
    self.update_state(state='PROGRESS', meta={'porcentaje': 0})
    for i in range(segundos):
        time.sleep(1)
        porcentaje = ((i + 1) / segundos) * 100
        self.update_state(
            state='PROGRESS', 
            meta={'porcentaje': round(porcentaje, 2)}
        )
    return f'Tarea completada después de {segundos} segundos'
```
{% endraw %}

## Ejemplos Completos por Categoría

### 1. Sistema de Notificaciones por Email
{% raw %}
```python
# tareas/emails.py
from celery_app import app
from smtplib import SMTP
from email.mime.text import MIMEText
import jinja2

@app.task(bind=True, max_retries=3, default_retry_delay=60)
def enviar_email_bienvenida(self, usuario_email, usuario_nombre):
    """Envía email de bienvenida con reintentos automáticos"""
    try:
        # Plantilla del email
        template = f"""
        <h1>Bienvenido {usuario_nombre}!</h1>
        <p>Gracias por registrarte en nuestro servicio.</p>
        """
        # Configurar mensaje
        mensaje = MIMEText(template, 'html')
        mensaje['Subject'] = 'Bienvenida a Nuestra Plataforma'
        mensaje['From'] = 'noreply@empresa.com'
        mensaje['To'] = usuario_email
        # Enviar email
        with SMTP('smtp.empresa.com', 587) as servidor:
            servidor.starttls()
            servidor.login('usuario', 'password')
            servidor.send_message(mensaje)
        return f'Email enviado a {usuario_email}'
    except Exception as exc:
        # Reintento automático en caso de error
        raise self.retry(exc=exc)

@app.task
def enviar_newsletter_masiva(lista_emails, contenido):
    """Envía newsletter a lista masiva de emails"""
    resultados = []
    for email in lista_emails:
        # Encadenar envíos individuales
        resultado = enviar_email_bienvenida.delay(email, 'Cliente')
        resultados.append(resultado.id)
    return f'Newsletter programada para {len(resulta)} destinatarios'
```
{% endraw %}

### 2. Procesamiento de Archivos
{% raw %}
```python
# tareas/archivos.py
from celery_app import app
from PIL import Image
import pandas as pd
import os

@app.task(bind=True)
def procesar_imagen(self, ruta_imagen, operaciones):
    """Procesa imagen con múltiples operaciones"""
    try:
        with Image.open(ruta_imagen) as img:
            self.update_state(state='PROGRESS', meta={'etapa': 'Abriendo imagen'})
            # Aplicar operaciones
            for i, operacion in enumerate(operaciones):
                self.update_state(
                    state='PROGRESS', 
                    meta={'etapa': f'Procesando: {operacion}', 'progreso': (i/len(operaciones))*100}
                )
                if operacion['tipo'] == 'redimensionar':
                    img = img.resize(operacion['dimensiones'])
                elif operacion['tipo'] == 'convertir':
                    img = img.convert(operacion['formato'])
                elif operacion['tipo'] == 'filtro':
                    img = img.filter(operacion['filtro'])
            # Guardar resultado
            nombre_base = os.path.splitext(ruta_imagen)[0]
            ruta_salida = f"{nombre_base}_procesada.jpg"
            img.save(ruta_salida, quality=85)
            return {
                'estado': 'completado',
                'archivo_salida': ruta_salida,
                'tamaño_original': os.path.getsize(ruta_imagen),
                'tamaño_final': os.path.getsize(ruta_salida)
            }
    except Exception as e:
        return {'estado': 'error', 'mensaje': str(e)}

@app.task
def procesar_csv_masivo(ruta_csv, operaciones):
    """Procesa archivo CSV grande en chunks"""
    chunksize = 10000
    resultados = []
    for i, chunk in enumerate(pd.read_csv(ruta_csv, chunksize=chunksize)):
        # Procesar cada chunk en paralelo
        resultado = procesar_chunk_csv.delay(chunk.to_dict(), operaciones, i)
        resultados.append(resultado)
    return {
        'total_chunks': len(resultados),
        'chunk_ids': [r.id for r in resultados]
    }

@app.task
def procesar_chunk_csv(chunk_data, operaciones, chunk_num):
    """Procesa un chunk individual de CSV"""
    df = pd.DataFrame(chunk_data)
    # Aplicar operaciones
    for op in operaciones:
        if op['tipo'] == 'filtro':
            df = df.query(op['condicion'])
        elif op['tipo'] == 'transformacion':
            df[op['columna']] = df[op['columna']].apply(op['funcion'])
    return {
        'chunk_num': chunk_num,
        'filas_procesadas': len(df),
        'columnas': list(df.columns)
    }
```
{% endraw %}

### 3. Web Scraping Distribuido
{% raw %}
```python
# tareas/scraping.py
from celery_app import app
import requests
from bs4 import BeautifulSoup
import json

@app.task(bind=True, rate_limit='10/m')
def scrapear_pagina(self, url, selectores):
    """Scraping de página individual con rate limiting"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        respuesta = requests.get(url, headers=headers, timeout=10)
        respuesta.raise_for_status()
        soup = BeautifulSoup(respuesta.content, 'html.parser')
        datos = {}
        for clave, selector in selectores.items():
            elementos = soup.select(selector)
            datos[clave] = [elem.get_text(strip=True) for elem in elementos]
        return {
            'url': url,
            'estado': 'éxito',
            'datos': datos,
            'timestamp': str(app.now())
        }
    except Exception as e:
        return {
            'url': url,
            'estado': 'error',
            'error': str(e)
        }

@app.task
def scrapear_sitio_completo(urls_config):
    """Coordina scraping de múltiples URLs"""
    resultados = []
    for config in urls_config:
        resultado = scrapear_pagina.delay(
            config['url'], 
            config['selectores']
        )
        resultados.append(resultado)
    # Esperar y recopilar todos los resultados
    datos_completos = []
    for resultado in resultados:
        try:
            datos = resultado.get(timeout=30)
            datos_completos.append(datos)
        except Exception as e:
            datos_completos.append({'error': str(e)})
    return datos_completos
```
{% endraw %}

### 4. Sistema de Reportes
{% raw %}
```python
# tareas/reportes.py
from celery_app import app
import pandas as pd
import matplotlib.pyplot as plt
import io
import base64

@app.task(bind=True)
def generar_reporte_ventas(self, fecha_inicio, fecha_fin, formato='pdf'):
    """Genera reporte de ventas con gráficos"""
    self.update_state(state='PROGRESS', meta={'etapa': 'Obteniendo datos'})
    # Simular obtención de datos
    datos_ventas = obtener_ventas_periodo(fecha_inicio, fecha_fin)
    df = pd.DataFrame(datos_ventas)
    self.update_state(state='PROGRESS', meta={'etapa': 'Procesando datos'})
    # Análisis de datos
    ventas_por_dia = df.groupby('fecha')['monto'].sum()
    productos_populares = df['producto'].value_counts().head(10)
    self.update_state(state='PROGRESS', meta={'etapa': 'Generando gráficos'})
    # Crear visualizaciones
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 12))
    # Gráfico de ventas por día
    ventas_por_dia.plot(ax=ax1, kind='line', title='Ventas por Día')
    ax1.set_ylabel('Monto de Ventas')
    # Gráfico de productos populares
    productos_populares.plot(ax=ax2, kind='bar', title='Productos Más Vendidos')
    ax2.set_ylabel('Cantidad Vendida')
    plt.tight_layout()
    # Convertir a base64 para enviar
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png', dpi=150)
    buffer.seek(0)
    imagen_base64 = base64.b64encode(buffer.getvalue()).decode()
    # Métricas del reporte
    metricas = {
        'total_ventas': df['monto'].sum(),
        'transacciones': len(df),
        'promedio_venta': df['monto'].mean(),
        'periodo': f'{fecha_inicio} a {fecha_fin}'
    }
    return {
        'metricas': metricas,
        'grafico': imagen_base64,
        'formato': formato
    }

def obtener_ventas_periodo(fecha_inicio, fecha_fin):
    """Función simulada para obtener datos de ventas"""
    # En implementación real, conectaría a base de datos
    return [
        {'fecha': '2024-01-01', 'producto': 'A', 'monto': 100},
        {'fecha': '2024-01-01', 'producto': 'B', 'monto': 150},
        # ... más datos
    ]
```
{% endraw %}

## Configuración de Producción

### Docker Compose para Desarrollo
{% raw %}
```yaml
# docker-compose.yml
version: '3.8'

services:
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  worker:
    build: .
    command: celery -A celery_app worker --loglevel=info --concurrency=4
    volumes:
      - .:/app
    depends_on:
      - redis
    environment:
      - CELERY_BROKER_URL=redis://redis:6379/0
      - CELERY_RESULT_BACKEND=redis://redis:6379/0

  beat:
    build: .
    command: celery -A celery_app beat --loglevel=info
    volumes:
      - .:/app
    depends_on:
      - redis
    environment:
      - CELERY_BROKER_URL=redis://redis:6379/0

  flower:
    build: .
    command: celery -A celery_app flower --port=5555
    ports:
      - "5555:5555"
    depends_on:
      - redis
      - worker

volumes:
  redis_data:
```
{% endraw %}

### Configuración Avanzada de Worker
{% raw %}
```python
# config/production.py
class ProductionConfig:
    # Optimización para producción
    worker_prefetch_multiplier = 1
    worker_max_tasks_per_child = 1000
    task_acks_late = True
    task_reject_on_worker_lost = True
    # Queue routing
    task_routes = {
        'tareas.emails.*': {'queue': 'emails'},
        'tareas.archivos.*': {'queue': 'procesamiento'},
        'tareas.scraping.*': {'queue': 'scraping'},
        'tareas.reportes.*': {'queue': 'reportes'},
    }
    # Rate limiting
    task_annotations = {
        'tareas.scraping.scrapear_pagina': {'rate_limit': '10/m'},
        'tareas.emails.*': {'rate_limit': '100/m'},
    }

# Aplicar configuración
app.config_from_object(ProductionConfig)
```
{% endraw %}

## Monitoreo y Management

### Script de Monitoreo
{% raw %}
```python
# monitoreo.py
from celery_app import app
from celery.result import AsyncResult

def verificar_estado_tarea(task_id):
    """Verifica el estado de una tarea específica"""
    resultado = AsyncResult(task_id, app=app)
    return {
        'id': task_id,
        'estado': resultado.state,
        'resultado': resultado.result if resultado.ready() else None,
        'exito': resultado.successful(),
        'info': resultado.info if hasattr(resultado, 'info') else None
    }

def estadisticas_colas():
    """Obtiene estadísticas de las colas"""
    inspector = app.control.inspect()
    return {
        'tareas_activas': inspector.active(),
        'tareas_pendientes': inspector.reserved(),
        'workers_activos': inspector.stats(),
        'colas_registradas': inspector.registered_queues()
    }

# Ejemplo de uso
if __name__ == '__main__':
    # Ejecutar tarea de ejemplo
    tarea = app.send_task('tarea_larga', args=[5])
    print(f"Tarea enviada: {tarea.id}")
    # Verificar estado
    import time
    time.sleep(2)
    estado = verificar_estado_tarea(tarea.id)
    print(f"Estado: {estado}")
```
{% endraw %}

### Comandos Útiles de Terminal
{% raw %}
```bash
# Iniciar worker con múltiples colas
celery -A celery_app worker --loglevel=info --queues=emails,procesamiento,scraping

# Worker específico para emails
celery -A celery_app worker --loglevel=info --queues=emails --concurrency=2

# Monitoreo con Flower
celery -A celery_app flower --port=5555

# Inspeccionar colas
celery -A celery_app inspect active
celery -A celery_app inspect stats

# Purgar colas (cuidado!)
celery -A celery_app purge
```
{% endraw %}

## Patrones Comunes Resueltos

### Chain (Ejecución Secuencial)
{% raw %}
```python
from celery import chain

# Tareas que se ejecutan en secuencia
flujo = chain(
    obtener_datos.s(),
    procesar_datos.s(),
    guardar_resultados.s()
)

resultado = flujo.delay()
```
{% endraw %}

### Group (Ejecución Paralela)
{% raw %}
```python
from celery import group

# Múltiples tareas en paralelo
tareas_paralelas = group(
    procesar_archivo.s(archivo) for archivo in lista_archivos
)

resultado = tareas_paralelas.delay()
```
{% endraw %}

### Chord (Paralelo + Callback)
{% raw %}
```python
from celery import chord

# Procesamiento paralelo seguido de agregación
header = [procesar_item.s(item) for item in items]
callback = agregar_resultados.s()

resultado = chord(header)(callback)
```
{% endraw %}

### Retry con Exponential Backoff
{% raw %}
```python
@app.task(bind=True, max_retries=5)
def tarea_con_reintentos(self, url):
    try:
        response = requests.get(url, timeout=10)
        return response.json()
    except requests.exceptions.RequestException as exc:
        # Exponential backoff: 2^retry segundos
        countdown = 2 ** self.request.retries
        raise self.retry(countdown=countdown, exc=exc)
```
{% endraw %}

