# 🚀 Banco Digital Bankaool - Plataforma Strapi

✨ **Bienvenidos al repositorio oficial de la API de contenidos de Bankaool** ✨

---

## 🛠️ Configuración Inicial

### 📋 Requisitos Previos
- Node.js v18.x
- PostgreSQL 12+ 
- Nginx 1.18+
- 8 GB RAM mínimo (16 GB RAM Recomendado)
- 4 vCPU

🔧 **Archivos de configuración:**
- `.env.example`: Plantilla de referencia con las variables necesarias
- `.env`: Archivo real con valores sensibles (NUNCA se sube al repositorio)

⚠️ **Importante:** 
1. **Nunca** compartas el archivo `.env`
2. Usa `.env.example` como guía para crear tu propio `.env`
3. Las variables marcadas como 'REQUERIDO' son críticas para el funcionamiento

---

## 🚢 Despliegue en Producción

### 🔄 Flujo de Implementación
```bash
# Clonar repositorio
git clone https://[url-del-repositorio]
cd strapi_bankaool_v1

# Instalar dependencias
npm install --production

# Configurar ambiente
cp .env.example .env  # ¡Completar con valores reales!

# Construir y lanzar
npm run build
npm run start
```

### 🌐 Configuración Nginx
```nginx
server {
    listen 80;
    server_name cms.bankaool.com;

    location / {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

🔒 **Configuración SSL Recomendada:**
```bash
certbot --nginx -d api.bankaool.com
```

---

## 🚨 Mantenimiento y Soporte

### 🔄 Actualizaciones Seguras
```bash
git pull origin main
npm run build
pm2 restart strapi
```

📊 **Monitoreo Recomendado:**
- Uso de memoria
- Logs de errores
- Estado de conexión a BD

---

## 📚 Documentación de Strapi

🔗 **Enlaces oficiales:**
- [Documentación Oficial](https://docs.strapi.io/)
- [Guías de Implementación](https://docs.strapi.io/dev-docs/deployment)
- [API Reference](https://docs.strapi.io/dev-docs/api/rest)

📖 **Recursos técnicos:**
- [Gestión de Roles y Permisos](https://docs.strapi.io/dev-docs/users-roles-permissions)
- [Customización de Content-Types](https://docs.strapi.io/dev-docs/content-types)
- [Configuración de Seguridad](https://docs.strapi.io/dev-docs/security)

🚀 **Guías rápidas para Bankaool:**
```bash
# Crear nuevo content-type
npm run strapi generate

# Iniciar modo desarrollo
npm run develop

# Generar documentación API
npm run strapi install documentation
```

---

## 📞 Contacto

¿Necesitas soporte técnico especializado?

✉️ **Equipo Borea Studio:**
administracion@borea.studio

---

🔐 **Política de Seguridad:**
- Todas las credenciales se rotan cada 90 días
- Accesos limitados por IP
- Auditorías mensuales de seguridad

💡 **Tips para Desarrollo:**
- Usa siempre la rama `dev` para pruebas
- Verifica los hooks de pre-commit
- Mantén actualizadas las dependencias
