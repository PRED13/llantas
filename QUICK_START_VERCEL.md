# Guía Rápida de Deploy a Vercel

## ✅ Lo que ya está configurado:

1. **`vercel.json`** - Configuración principal de Vercel
2. **`vite.config.js`** - Configurado con proxy a API y build optimizado
3. **Variables de entorno** - `.env.example` y `.env.production`
4. **Backend settings.py** - Configurado para producción con env variables
5. **`requirements.txt`** - Actualizado con dependencias para producción
6. **API client** - `frontend/src/api.js` para llamadas a la API

## 📋 Pasos para deployar:

### 1. Frontend en Vercel

```bash
# Paso 1: Hacer push a GitHub (si usas GitHub)
git add .
git commit -m "Preparado para Vercel"
git push

# Paso 2: Ir a https://vercel.com
# - Haz click en "Add New..." → "Project"
# - Selecciona tu repositorio
# - Vercel detectará automáticamente que es un proyecto Vite
# - En Environment Variables, agrega:
#   VITE_API_URL=https://tu-backend-url.com
# - Click en "Deploy"
```

### 2. Backend en Railway (Recomendado)

```bash
# Paso 1: Instalar Railway
npm i -g @railway/cli

# Paso 2: Conectar proyecto
railway link

# Paso 3: Agregar variables de entorno
railway variables add SECRET_KEY "tu-secret-key-aqui"
railway variables add DEBUG "False"
railway variables add ALLOWED_HOSTS "tu-backend.railway.app"
railway variables add CORS_ALLOWED_ORIGINS "https://tu-frontend.vercel.app"

# Paso 4: Deploy
railway up
```

### 3. Configurar CORS entre servicios

**En Railway/backend `.env`:**
```
CORS_ALLOWED_ORIGINS=https://tu-frontend.vercel.app
```

**En Vercel/frontend `.env`:**
```
VITE_API_URL=https://tu-backend.railway.app
```

## 🔐 Seguridad - Antes de ir a producción:

- [ ] Cambiar `SECRET_KEY` en backend (generar una nueva)
- [ ] Set `DEBUG=False` en producción
- [ ] Usar HTTPS (automático en Vercel)
- [ ] Usar PostgreSQL en lugar de SQLite
- [ ] Revisar ALLOWED_HOSTS y CORS_ALLOWED_ORIGINS

## 📱 Para usar la API en tu aplicación:

```javascript
// Importar el cliente
import { apiClient } from './api.js';

// Usar en tu componente
useEffect(() => {
  apiClient.get('/api/endpoint/')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}, []);
```

## 🆘 Troubleshooting:

**CORS Error:** Verifica que `CORS_ALLOWED_ORIGINS` en el backend incluya tu URL de Vercel

**404 en API:** Verifica que `VITE_API_URL` sea correcto

**Variables de entorno no funcionan:** Asegúrate de que están configuradas en el dashboard de Vercel/Railway

---

¡Éxito con tu deploy! 🚀
