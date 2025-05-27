---
title: readme como fuente de verdad en mi portafolio
date: 2025-04-20
tags:
  - portfolio
  - Project
status: 📌
public_notes: true
public_note: true
public_note1: true
---

# 🚀 README.md como fuente de verdad en mi portafolio



Últimamente estuve trabajando en algo que quería compartirles: conectar mis repositorios de GitHub con mi portfolio personal de forma dinámica y automatizada.

🛠️ El resultado:  
Cada proyecto en mi portfolio obtiene su información directamente desde su propio `README.md`, manteniéndolo siempre sincronizado y evitando duplicar contenido.

💡 ¿Cómo lo hice? Desarrollé una herramienta llamada README to Object Converter que hace lo siguiente:

1. 🔗 Usa los enlaces raw.githubusercontent.com (en lugar de la API de GitHub) para descargar los `README.md` directamente.

⚠️ Importante: Los repositorios deben ser públicos para acceder a estos enlaces. Si trabajas con repositorios privados, necesitarías utilizar la API de GitHub, lo cual implicaría lidiar con límites de tasa y autenticación.
    
2. - 📑 Extrae secciones clave como títulos, párrafos, listas y bloques de código.
    
3. - 🔄 Convierte todo en un objeto `.ts` estructurado, fácilmente integrable en un frontend en TypeScript.
    
4. - 🔍 También genera vistas HTML por si quiero inspeccionar los resultados manualmente.
    

📄 Además, incorporé una estructura YAML en la parte superior del README para definir metadatos como:

- title
- description
- imageSrc
- technologies
- links 

Esto me permite mantener una separación limpia entre la presentación y el contenido, y facilita la visualización uniforme de los proyectos en el portfolio.
    
⚙️ En producción, significa:
- 📊 Un portfolio que siempre refleja la información más actual de cada proyecto, directamente desde su README.
- 🔄 Datos actualizados y estructurados automáticamente, evitando la duplicación y asegurando consistencia en todo momento.
    

📦 Tech stack: Next.js 14, TypeScript, Tailwind CSS, Node.js, Vercel, remark, YAML, GitHub Raw.
    

🔗 Proyectos:
- 🖼️ Portfolio: https://deveduar-portfolio.vercel.app
- 📦 Conversor: https://github.com/deveduar/readme-to-obj

Este tipo de integración me permite mantener la documentación y el portfolio alineados sin duplicar contenido. Me encantaría explorar más formas de automatizar procesos de desarrollo personal y profesional.

👉 ¿Qué otras ideas se te ocurren para automatizar tu portfolio o documentación?

Estoy abierto a sugerencias y futuras mejoras.

#webdevelopment #nextjs #typescript #opensource #portfolio #automation #devtools #tailwindcss #developerexperience #readme #github #frontend

