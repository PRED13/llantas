// Configuración de API para Vercel
// Esto detecta automáticamente el ambiente y usa la URL correcta

const isDevelopment = !process.env.VITE_API_URL;

export const API_URL = process.env.VITE_API_URL || (() => {
    if (typeof window !== 'undefined') {
        // En Vercel, la API será relativa
        return window.location.origin.includes('localhost')
            ? 'http://localhost:8000'
            : '/api';
    }
    return '/api';
})();

export default API_URL;
