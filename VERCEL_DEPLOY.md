# INSTRUCCIONES PARA DEPLOYING EN VERCEL

## ✅ Proyecto listo para Vercel

Tu proyecto está completamente configurado para deployarse en Vercel. Solo sigue estos pasos:

---

## 📝 PASOS PARA DEPLOY EN VERCEL

### 1. Login en Vercel

Si ya tienes un proyecto "llantasasdf" en Vercel, sigue esta ruta:

```bash
# Instala Vercel CLI (si no lo tienes)
npm install -g vercel

# Login con tu cuenta
vercel login

# En la carpeta del proyecto, usa el proyecto existente
vercel link
```

Cuando te pregunte si quieres vincular a un proyecto existente, selecciona **SÍ** y elige "llantasasdf"

### 2. Hacer Push a GitHub

```bash
git add .
git commit -m "Configurado para Vercel - lista para deploy"
git push origin main
# (o master, según tu rama principal)
```

### 3. Ir a Dashboard de Vercel

https://vercel.com/dashboard

- Busca tu proyecto "llantasasdf"
- Asegúrate de que esté conectado a tu repositorio de GitHub

### 4. Configurar Variables de Entorno en Vercel

En tu proyecto Vercel:
1. **Settings** → **Environment Variables**
2. Agregar SOLO esta variable (opcional si usas backend local):
   ```
   VITE_API_URL=http://localhost:8000
   ```
   (En producción, puedes dejar esto vacío o poner tu URL backend)

### 5. Triggerear el Deploy

El deploy ocurre automáticamente cuando:
- Haces `push` a GitHub (recomendado)
- O ejecutas: `vercel --prod`

---

## 📁 Archivos Configurados

✅ `vercel.json` - Configuración de Vercel  
✅ `vite.config.js` - Build optimizado para Vercel  
✅ `.vercelignore` - Archivos a ignorar en Vercel  
✅ `frontend/.gitignore` - Archivos a ignorar en Git  
✅ `frontend/src/config.js` - Configuración de API  

---

## 🧪 Para Testear Localmente

```bash
cd frontend
npm install
npm run build
npm run preview
```

Luego abre http://localhost:4173

---

## 🔗 Conexión con Backend

Si tienes un backend en otra plataforma (Railway, Render, etc.):

1. Obtén tu URL del backend (ejemplo: https://tu-backend.railway.app)
2. En Vercel → Settings → Environment Variables
3. Agrega: `VITE_API_URL=https://tu-backend.railway.app`
4. El frontend usará esa URL para las llamadas API

---

## ⚡ Quick Deploy Command

```bash
# Desde la raíz del proyecto
vercel --prod
```

---

## ✨ Tu app estará en

```
https://tu-proyecto.vercel.app
```

¡Listo! 🚀
