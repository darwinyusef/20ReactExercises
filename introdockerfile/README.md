# Ver las etiquetas

```cmd
docker ps
```

# Constuir la imagen

```cmd
docker build -t html-css-app .
```

# Construir una imagen con etiqueta

```cmd
docker build -t html-css-app:v1.0 .
```

# Ejecutar contenedor

```cmd
docker run -d -p 8080:80 html-css-app:v1.0
```

> docker run -d -p <puerto_local>:<puerto_contenedor> <nombre_de_imagen>:\<etiqueta>

# Re ejecutar la build sin Cache

```cmd
docker build --no-cache -t html-css-app:v1.0 .
```

# Agregar con una etiqueta

- esto permite buildear una imagen con una version en especifico

```cmd
  docker build -t html-css-app:v1.0 .
```

# Detener la imagen

```cmd
docker stop 46e68871119b
```

> Asisgna el codigo de id de docker visible en ps <id_contenedor>

# Listar todas las imagenes

```cmd
docker images
```

# Eliminar un container

```cmd
docker rm 3a55a5db4982
```

# Restart un container

```cmd
docker restart 3a55a5db4982
```
