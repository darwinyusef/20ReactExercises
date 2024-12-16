# Usa la imagen oficial de Nginx
FROM nginx:latest

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos HTML y CSS al directorio de Nginx
COPY html/ /usr/share/nginx/html/

# Exponer el puerto 80 para el servidor
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
