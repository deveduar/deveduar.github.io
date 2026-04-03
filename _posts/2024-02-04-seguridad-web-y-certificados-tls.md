---
date: 2024-02-04 18:57
title: Seguridad Web y Certificados TLS
status: 🌟
Parent: "[[Area-Sistemas]]"
keywords:
source:
public_note: true
category: devops
tags:
  - Devops
---
# Seguridad Web y Certificados TLS


- [cron jobs](/backend/cron-jobs/)
- [devops](/devops/devops/)
- deploy
## INTRODUCCIÓN
- **PHP BCRYPT METHOD**
	- Implementa el algoritmo bcrypt para almacenar contraseñas de forma segura mediante hashing y sal aleatoria.
- **PHP SESSION VARIABLES**
	- Variables globales que mantienen el estado del usuario entre peticiones.
	- Importante configurar correctamente `session.cookie_secure` y `session.cookie_httponly` en entornos HTTPS.
- **PHP Mailer library**
	- Librería para enviar correos con autenticación SMTP segura.
	- Soporta TLS/SSL, autenticación por usuario y adjuntos.
- [embedresponsively.com](https://embedresponsively.com/)
	- Herramienta para generar código embebido adaptable (iframes) en sitios web responsivos.
- **Production server migration**
	- Involucra copiar código, base de datos y configuración del entorno a un servidor productivo.
	- Verificar rutas absolutas, variables de entorno y dependencias.
- **Upload web**
	- Subida de archivos mediante FTP, SCP o Git Deploy.
- **Import database**
	- Usar `mysqldump` o `phpMyAdmin` para exportar/importar datos entre entornos.

## GOOGLE APPS FOR WORKS
- **Setup an email server**
	- Configurar MX, SPF, DKIM y DMARC para autenticación y entrega confiable de correos.
- **External Mail service provider (Google)**
	- Redirigir el servicio de correo a los servidores de Google Workspace.
- **Email Alias @mydomain.com**
	- Permite gestionar múltiples cuentas bajo un mismo dominio.
- **Verification**
	- Añadir meta tag en `index.html` o crear un registro TXT en DNS para validar el dominio.

## MX RECORDS
- **DNS Manager (zone file)**
	- Administra registros DNS: A, CNAME, MX, TXT.
- **Add new MX records**
	- Definir servidor de correo con prioridad 1 y TTL 1h.
- **Ejemplo:**
	{% raw %}
```
	MX 1 ASPMX.L.GOOGLE.COM.
	MX 5 ALT1.ASPMX.L.GOOGLE.COM.
	MX 10 ALT2.ASPMX.L.GOOGLE.COM.
	```
{% endraw %}

## SSL Certificates (Secure Socket Layer)
- Permiten cifrar las comunicaciones entre cliente y servidor.
- Garantizan identidad, integridad y confidencialidad.

### Autoridades Certificadoras (CA)
- **GlobalSign**
- **VeriSign**
- **DigiCert**

### Claves y Firmas
- **Public Key:** clave pública usada para cifrar datos.
- **Private Key:** clave privada para descifrar datos.
- **Digital Signature:** verifica la autenticidad del emisor.

### Tipos de SSL
- **DV (Domain Validation):** valida solo la propiedad del dominio.
- **OV (Organizational Validation):** valida la empresa y dominio.
- **EV (Extended Validation):** incluye identidad legal completa, muestra el nombre de la empresa en el navegador.

## EXTENDED VALIDATION (EV)
- Requiere verificación legal, física y operacional.
- Confirma derechos sobre el dominio.
- Autoriza formalmente la emisión del certificado.

## ORGANIZATIONAL VALIDATION (OV)
- Menos estricto que EV, pero más confiable que DV.
- Incluye el nombre de la empresa en la dirección.
- CA valida la propiedad del dominio y de la empresa.

## DOMAIN VALIDATION (DV)
- Más popular y económica.
- Ejemplo: **Let’s Encrypt**.
- Proceso:
	- Se genera una solicitud (CSR) con clave privada.
	- La CA verifica el dominio.
	- Firma el certificado con su clave privada.
- **Hash y Firma Digital**
	- La firma es un hash encriptado del certificado original.
	- Solo puede verificarse con la clave pública de la CA.
	- Es un proceso unidireccional: no se puede derivar la clave privada.

## OBTENCIÓN DE CERTIFICADO
- **Proveedores:** DigiCert, GlobalSign, Sectigo.
- **Ejemplo de dominio:** [.xyz Domain Names | Join Generation XYZ](https://gen.xyz/)
- **Pasos:**
	1. Generar CSR con OpenSSL.
	2. Validar dominio.
	3. Instalar certificado emitido.

## LET’S ENCRYPT
- Servicio gratuito y automatizado para certificados SSL/TLS.
- Simplifica creación, validación, instalación y renovación.
- Integración con clientes como **Certbot** o **acme.sh**.

## TLS & SSL ENCRYPTION
- TLS es la evolución de SSL.
- Recomendado usar solo TLS 1.2 o superior.
- Aplicación típica: servidores en **Digital Ocean**, **AWS**, **Cloudflare**, etc.

## PREPARACIÓN
- Dominios configurados correctamente.
- Servidor con acceso SSH.
- Proveedores comunes: **HostGator**, **Namecheap**, **Digital Ocean**.
- Configurar **Name Servers** y **A Records**.

## PuTTY - SSH
- Cliente SSH para Windows.
- Configuración básica:
	- IP del servidor.
	- Usuario: `root`.
	- Puerto: 22.
- Permite administrar servidores y desplegar certificados SSL.

## LAMP STACK

### Instalación
{% raw %}
```
apt-get install lamp-server^
apt-get install apache2-utils
apt-get install phpmyadmin
ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-enabled/phpmyadmin.conf
service apache2 reload
```
{% endraw %}

- Verificar acceso en navegador: `http://<IP_DEL_SERVIDOR>`

## HTTPS ENCRYPTION
- **Configuración del dominio**
	- Crear registros `A` y `CNAME`.
	- TTL recomendado: 3600 (1 hora).
- **DNS Records**
	- A: IP pública del servidor.
	- CNAME: alias (www → @).
- **Prueba**
	- Verificar resolución DNS antes de emitir certificado.

## CRON-JOB
- Configurar zona horaria y host local:
	{% raw %}
```
	nano /etc/hosts
	# Añadir:
	<IP> dominio.com
	ctrl + x
	dpkg-reconfigure tzdata
	```
{% endraw %}

## INSTALACIÓN DEL CLIENTE DE CERTIFICADOS
{% raw %}
```
apt-get install python3-certbot-apache
certbot --apache -d yourdomain.com -d www.yourdomain.com
```
{% endraw %}
- Verificar estado SSL:
	- [Qualys SSL Labs](https://www.ssllabs.com/ssltest/)

## REDIRECCIÓN A HTTPS (.htaccess)
{% raw %}
```
cd /var/www/html
nano .htaccess
```
{% endraw %}

### Ejemplo de configuración:
{% raw %}
```
Options +FollowSymLinks
RewriteEngine on
RewriteCond %{HTTP_HOST} ^www\.yourdomain\.com$ [NC]
RewriteRule ^(.*)$ https://yourdomain.com/$1 [R=301,L]
RewriteCond %{HTTP_HOST} ^104\.131\.47\.211
RewriteRule (.*) https://yourdomain.com/$1 [R=301,L]
RewriteCond %{HTTP_USER_AGENT} libwww-perl.*
RewriteRule .* - [F,L]
```
{% endraw %}

### Apache Configuración
{% raw %}
```
nano /etc/apache2/apache2.conf
AllowOverride All
service apache2 restart
```
{% endraw %}

## AUTO RENOVACIÓN DE CERTIFICADOS
- Editar cron job:
{% raw %}
```
crontab -e
30 3 * * 1 /usr/bin/certbot renew >> /var/log/le-renew.log
ctrl + x
```
{% endraw %}
- Verificar logs en `/var/log/le-renew.log`.


# Seguridad Web y Certificados TLS (Actualización 2025)

## NUEVAS PRÁCTICAS Y ESTÁNDARES DE SEGURIDAD
- **Transición definitiva a TLS 1.3**
	- Desde 2024, la mayoría de navegadores y servidores han deshabilitado soporte para TLS 1.0/1.1 y pronto TLS 1.2.
	- TLS 1.3 mejora velocidad de handshake y elimina algoritmos inseguros (RSA key exchange, CBC).
	- Configuración recomendada:
		{% raw %}
```
		ssl_protocols TLSv1.3;
		ssl_prefer_server_ciphers off;
		```
{% endraw %}
- **Perfect Forward Secrecy (PFS)**
	- Obligatoria en servidores modernos. Usa suites basadas en ECDHE para garantizar que cada sesión tenga su propia clave efímera.
- **OCSP Stapling y Must-Staple**
	- Mejora la validación de certificados sin depender del servidor OCSP remoto.
	- Agrega la extensión `OCSP Must-Staple` al emitir certificados.

## AUTOMATIZACIÓN Y DEVSECOPS
- **Infraestructura como Código + SSL**
	- Terraform, Ansible y Dokploy soportan módulos de aprovisionamiento automático de certificados con Let’s Encrypt (ACME v2).
- **ACME Clients actualizados**
	- Clientes modernos: `Certbot`, `acme.sh`, `lego`, `Caddy` y `Traefik`.
	- Permiten emisión automática desde pipelines CI/CD o contenedores.
- **Zero-Downtime Renewals**
	- Servidores como Nginx 1.25+ y Caddy 2.8+ pueden recargar certificados en caliente sin reinicio.
- **Short-Lived Certificates**
	- Let’s Encrypt ofrece certificados de **6 días** de validez, ideales para despliegues efímeros, Kubernetes o IoT.
- **IP Certificates**
	- En fase estable desde 2025: Let’s Encrypt permite certificados emitidos directamente sobre direcciones IP públicas (sin dominio).
- **Sin avisos por email**
	- Desde junio 2025 Let’s Encrypt eliminó el servicio de avisos de expiración.  
	  Se recomienda usar monitores automáticos (`check_ssl_cert`, `ssl-expiry`) o alertas en CI/CD.

## DNS Y POLÍTICAS DE SEGURIDAD WEB
- **DNSSEC**
	- Recomendado para dominios críticos; asegura que los registros DNS no sean alterados.
- **CAA Records**
	- Nuevo requisito extendido por las CA en 2025.  
	  Define qué autoridades pueden emitir certificados para tu dominio.
		{% raw %}
```
		CAA 0 issue "letsencrypt.org"
		CAA 0 issuewild "digicert.com"
		```
{% endraw %}
- **HSTS y Preload**
	- Política obligatoria en Chrome 2025 para sitios que manejan datos personales.  
	  Se recomienda añadir:
		{% raw %}
```
		Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
		```
{% endraw %}

## OBSERVABILIDAD Y VALIDACIÓN DE CERTIFICADOS
- **Certificate Transparency (CT)**
	- Todos los certificados públicos se registran en logs CT.  
	  Puede verificarse con herramientas como [crt.sh](https://crt.sh/).
- **SSLLabs y Hardenize**
	- Usados para validar compatibilidad, fuerza del cifrado y políticas HSTS/OCSP.  
	  Ejemplo:
		{% raw %}
```
		https://www.ssllabs.com/ssltest/analyze.html?d=tu-dominio.com
		https://www.hardenize.com/report/tu-dominio.com
		```
{% endraw %}
- **Automated Renewal Monitoring**
	- Integración con Prometheus + Grafana para alertar certificados que vencen.  
	  Métrica: `ssl_certificate_expiry_seconds`.

## BUENAS PRÁCTICAS DE CONFIGURACIÓN TLS (2025)
- **Longitud de clave mínima:** RSA 3072 bits o ECDSA P-256.
- **Certificados multi-SAN:** incluir `www`, `api`, `cdn` y subdominios bajo un solo certificado.
- **No mezclar HTTP y HTTPS.**  
  Usar redirección 301 global desde el reverse proxy o `server block`.
- **Configuración moderna en Nginx:**
	{% raw %}
```nginx
	server {
		listen 443 ssl http2;
		server_name ejemplo.com www.ejemplo.com;
		ssl_certificate /etc/letsencrypt/live/ejemplo.com/fullchain.pem;
		ssl_certificate_key /etc/letsencrypt/live/ejemplo.com/privkey.pem;
		ssl_session_timeout 1d;
		ssl_session_cache shared:SSL:10m;
		ssl_session_tickets off;
		ssl_dhparam /etc/ssl/certs/dhparam.pem;
		add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
		ssl_stapling on;
		ssl_stapling_verify on;
	}
	```
{% endraw %}

## ENTORNOS CLOUD Y CONTENEDORES
- **Kubernetes + Cert-Manager**
	- Cert-Manager v1.15+ automatiza certificados Let’s Encrypt mediante recursos `ClusterIssuer` y `Certificate`.
- **Reverse Proxies y Edge SSL**
	- Cloudflare, Fly.io, AWS ALB y Google Cloud Load Balancer ofrecen SSL gestionado, pero en 2025 se recomienda **terminación TLS en el edge + re-cifrado interno**.
- **Docker**
	- Uso de `nginx-proxy` + `acme-companion` para gestionar certificados de forma automática en múltiples contenedores.
- **Zero Trust y ZTNA**
	- SSL/TLS ahora forma parte del perímetro de confianza.  
	  Recomendación: combinar autenticación mutua (mTLS) + certificados de cliente en redes internas.

## CAMBIOS RELEVANTES EN 2025
- **Fin de certificados de 2 años** (todos expiran ≤ 397 días).  
- **Let’s Encrypt introduce IP certs y revoca sistema de correos.**
- **TLS 1.3 obligatorio** en Chrome, Firefox, Edge, Safari.
- **Certificados de corta duración (rotación automática)** adoptados por Docker, Cloudflare y GitHub Actions.
- **Nueva práctica CA/B Forum 2025.06:** obliga a incluir extensión `SubjectKeyIdentifier` única en todos los certificados públicos.
- **Google Chrome** exige HSTS activo y CAA configurado para sitios con formularios de login o checkout.

---

### 🔐 Recomendaciones clave
- Migrar toda configuración a TLS 1.3.
- Automatizar renovación y emisión vía ACME.
- Monitorear expiración de certificados en pipelines CI/CD.
- Implementar CAA, DNSSEC, CT, HSTS y OCSP Stapling.
- Usar claves de curva P-256 o P-384 en lugar de RSA donde sea posible.
- Revisar periódicamente con SSLLabs y Hardenize para mantener A+.

---
📘 **Referencias oficiales 2025:**
- [Let’s Encrypt Blog (2025)](https://letsencrypt.org/)
- [CA/B Forum Baseline Requirements v2.0.2 (2025)](https://cabforum.org/)
- [Mozilla Server Side TLS Guide 2025](https://wiki.mozilla.org/Security/Server_Side_TLS)
- [OWASP Transport Layer Protection Cheat Sheet (2025)](https://cheatsheetseries.owasp.org/)
