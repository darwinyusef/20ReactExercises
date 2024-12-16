---
layout: "../../../layouts/Layout_md.astro"
title: "Java Sprint Install"
---

¡Bienvenido a Aquicreamos! Aquí tienes una guía sencilla sobre cómo configurar un servidor local con Docker usando Java y Spring Boot. Para lograrlo, te mostraré los pasos necesarios:

### Paso 1: Crear un Proyecto Spring Boot

1. **Crear un nuevo proyecto Spring Boot**:
   Puedes utilizar [Spring Initializr](https://start.spring.io/) para generar un nuevo proyecto. Selecciona las dependencias que necesites, como `Spring Web`, `Spring Data JPA` y `H2 Database` (o la base de datos que prefieras).

2. **Descargar y descomprimir** el proyecto generado.

### Paso 2: Crear la Aplicación

1. **Navegar a la carpeta del proyecto** y abrirlo en un editor de código (como IntelliJ IDEA o Visual Studio Code).

2. **Modificar el archivo `application.properties`** para configurar la base de datos y otros parámetros. Ejemplo:
   ```properties
   spring.datasource.url=jdbc:h2:file:./data/testdb
   spring.datasource.driverClassName=org.h2.Driver
   spring.datasource.username=sa
   spring.datasource.password=
   spring.h2.console.enabled=true
   ```

3. **Crear las entidades, repositorios y controladores** necesarios para tu aplicación.

### Paso 3: Crear el Dockerfile

1. En la raíz de tu proyecto, crea un archivo llamado `Dockerfile` y agrega el siguiente contenido:
   ```dockerfile
   # Usa la imagen de Java
   FROM openjdk:17-jdk-slim

   # Establece el directorio de trabajo
   WORKDIR /app

   # Copia el archivo JAR de tu aplicación al contenedor
   COPY target/*.jar app.jar

   # Define el comando para ejecutar la aplicación
   CMD ["java", "-jar", "app.jar"]
   ```

### Paso 4: Crear un archivo .dockerignore

1. En la raíz de tu proyecto, crea un archivo llamado `.dockerignore` y agrega el siguiente contenido:
   ```
   target/
   .mvn/
   .git/
   .github/
   .idea/
   ```

### Paso 5: Construir el Archivo JAR

1. Abre una terminal en la raíz de tu proyecto y ejecuta:
   ```bash
   ./mvnw clean package
   ```
   Esto generará un archivo JAR en la carpeta `target`.

### Paso 6: Construir la Imagen de Docker

1. Aún en la terminal, construye la imagen de Docker ejecutando:
   ```bash
   docker build -t my-spring-boot-app .
   ```
   Cambia `my-spring-boot-app` por el nombre que quieras.

### Paso 7: Ejecutar el Contenedor de Docker

1. Finalmente, ejecuta tu aplicación en un contenedor con el siguiente comando:
   ```bash
   docker run -p 8080:8080 my-spring-boot-app
   ```

### Paso 8: Acceder a la Aplicación

Abre tu navegador y ve a `http://localhost:8080`. Deberías poder ver tu aplicación Spring Boot corriendo.

### Notas Finales

- Asegúrate de tener Docker instalado y en funcionamiento en tu máquina.
- Puedes modificar el número de puerto `8080` según sea necesario.
- Si utilizas una base de datos diferente, asegúrate de configurar adecuadamente el archivo `application.properties`.

Si tienes más preguntas o necesitas más detalles sobre algún paso específico, ¡no dudes en preguntar!