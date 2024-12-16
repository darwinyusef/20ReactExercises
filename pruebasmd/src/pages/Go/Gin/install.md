---
layout: "../../../layouts/Layout_md.astro"
title: "Gin Install"
---

¡Bienvenido a Aquicreamos! Aquí tienes una guía paso a paso para configurar un servidor local utilizando Docker y Golang con el framework Gin. Esto te permitirá crear una aplicación web simple y ejecutar todo en un contenedor Docker.

### Paso 1: Instalar Docker

Asegúrate de que tienes Docker instalado en tu sistema. Puedes descargarlo desde [aquí](https://www.docker.com/get-started).

### Paso 2: Configurar tu proyecto de Golang

1. **Crear una carpeta para tu proyecto**:
   ```bash
   mkdir my-gin-app
   cd my-gin-app
   ```

2. **Inicializar un nuevo módulo de Go**:
   ```bash
   go mod init my-gin-app
   ```

3. **Instalar Gin**:
   ```bash
   go get -u github.com/gin-gonic/gin
   ```

4. **Crear un archivo `main.go`**:
   Crea un archivo llamado `main.go` y añade el siguiente código:
   ```go
   package main

   import "github.com/gin-gonic/gin"

   func main() {
       r := gin.Default()
       r.GET("/", func(c *gin.Context) {
           c.JSON(200, gin.H{
               "message": "Hello, World!",
           })
       })
       r.Run(":8080") // En el puerto 8080
   }
   ```

### Paso 3: Crear un Dockerfile

1. **Crear un archivo llamado `Dockerfile`** en la raíz de tu proyecto con el siguiente contenido:
   ```dockerfile
   # Usa una imagen base de Go
   FROM golang:1.20 AS builder

   # Establece el directorio de trabajo
   WORKDIR /app

   # Copia el módulo y el archivo go.sum
   COPY go.mod go.sum ./
   # Descarga dependencias
   RUN go mod download

   # Copia el código fuente
   COPY . .

   # Compila la aplicación
   RUN go build -o main .

   # Usa una imagen base más pequeña para la ejecución
   FROM alpine:latest

   WORKDIR /root/

   # Copia el binario de la etapa anterior
   COPY --from=builder /app/main .

   # Expon el puerto
   EXPOSE 8080

   # Comando para ejecutar la aplicación
   CMD ["./main"]
   ```

### Paso 4: Crear un archivo `.dockerignore`

1. **Crear un archivo llamado `.dockerignore`** en la raíz de tu proyecto con el siguiente contenido:
   ```
   # Ignorar archivos de compilación y directorios
   /bin
   /obj
   .git
   ```

### Paso 5: Construir y ejecutar el contenedor Docker

1. **Construir la imagen**:
   Desde la raíz de tu proyecto, ejecuta:
   ```bash
   docker build -t my-gin-app .
   ```

2. **Ejecutar el contenedor**:
   ```bash
   docker run -p 8080:8080 my-gin-app
   ```

### Paso 6: Probar la aplicación

Abre tu navegador y visita `http://localhost:8080`. Deberías ver un JSON que dice:
```json
{"message": "Hello, World!"}
```

### Conclusión

Has configurado con éxito un servidor local utilizando Docker y una aplicación de Golang con Gin. ¡Ahora puedes comenzar a desarrollar y expandir tu aplicación! Si tienes alguna pregunta o necesitas más ayuda, no dudes en preguntar.