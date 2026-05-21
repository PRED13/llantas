# Deploy a Vercel

## Configuración para Vercel

Este proyecto está configurado para deployar en Vercel. El frontend (React + Vite) se despliega en Vercel, pero el backend (Django) debe deployarse en un servicio separado.

### Frontend - Vercel

#### Pasos para deployar:

1. **Crear cuenta en Vercel** (si no tienes)
   - Ve a https://vercel.com y crea una cuenta

2. **Conectar tu repositorio**
   - En Vercel, haz clic en "New Project"
   - Selecciona tu repositorio de GitHub

3. **Configurar variables de entorno**
   - En Settings → Environment Variables, agrega:
   ```
   VITE_API_URL=https://tu-backend-url.com
   ```

4. **Deploy**
   - Vercel automáticamente deployará cuando hagas push a tu rama principal

### Backend - Django (Opciones de deployment)

Elige una opción:

#### Opción 1: Railway.app (Recomendado)
```bash
# 1. Instalar Railway CLI
npm i -g @railway/cli

# 2. Conectar tu proyecto
railway link

# 3. Agregar variables de entorno
railway variables

# 4. Deploy
railway up
```

#### Opción 2: Render.com
1. Ve a https://render.com
2. Crea un nuevo "Web Service"
3. Conecta tu repositorio
4. Usa el comando: `gunicorn backend.wsgi:application`
5. Configura variables de entorno en Settings

#### Opción 3: PythonAnywhere
1. Ve a https://www.pythonanywhere.com
2. Crea una cuenta
3. Sube tu código
4. Configura el WSGI

### Configuración de variables de entorno (.env)

Crea un archivo `.env` basándote en `.env.example`:

```bash
SECRET_KEY=tu-secret-key-aqui-cambia-en-produccion
DEBUG=False
ALLOWED_HOSTS=tu-backend-domain.com,www.tu-backend-domain.com
CORS_ALLOWED_ORIGINS=https://tu-frontend-domain.vercel.app,https://www.tu-frontend-domain.vercel.app
```

### Base de datos

- **Desarrollo**: SQLite (db.sqlite3)
- **Producción**: Se recomienda PostgreSQL

Si usas PostgreSQL:
```bash
# requirements.txt ya incluye psycopg2
pip install psycopg2-binary

# En .env
DATABASE_URL=postgresql://user:password@host:port/dbname
```

### Middleware agregado

Se añadió `whitenoise` para servir archivos estáticos en producción.

### CORS Configuration

- **Desarrollo**: `http://localhost:5173` (Vite), `http://localhost:3000` (React)
- **Producción**: Tu URL de Vercel (ejemplo: `https://tu-proyecto.vercel.app`)

### Checklist antes de deployar

- [ ] Cambiar `SECRET_KEY` en producción
- [ ] Establecer `DEBUG=False`
- [ ] Actualizar `ALLOWED_HOSTS` con tu dominio
- [ ] Actualizar `CORS_ALLOWED_ORIGINS` con tu URL de Vercel
- [ ] Usar PostgreSQL en producción (no SQLite)
- [ ] Ejecutar migraciones en el servidor de producción
- [ ] Crear un superusuario de admin en producción

### Comandos útiles

```bash
# Instalar dependencias
pip install -r requirements.txt

# Ejecutar migraciones
python manage.py migrate

# Crear superusuario
python manage.py createsuperuser

# Recolectar archivos estáticos
python manage.py collectstatic

# Ejecutar en producción
gunicorn backend.wsgi:application --bind 0.0.0.0:8000
```
