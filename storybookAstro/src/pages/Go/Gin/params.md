---
layout: "../../../layouts/Layout_md.astro"
title: "Gin Params"
---

¡Bienvenido a Aquicreamos! A continuación, te proporcionaré instrucciones sobre cómo leer parámetros de consulta (`query params`) y de ruta (`path params`) en Golang usando el framework Gin.

### Instrucciones para leer parámetros con Gin

1. **Instalación de Gin:**
   Primero, asegúrate de tener instalado Gin. Si no lo tienes, puedes instalarlo usando el siguiente comando:

   ```bash
   go get -u github.com/gin-gonic/gin
   ```

    ```mermaid
    graph TD;
        A-->B;
        A-->C;
        B-->D;
        C-->D;
    ```

2. **Leer Parámetros de Ruta (Path Params):**
   Los parámetros de ruta son variables que se definen en la ruta de la URL. Por ejemplo, en la ruta `/user/:id`, `:id` es un parámetro de ruta.

   ```go
   package main

   import (
       "github.com/gin-gonic/gin"
       "net/http"
   )

   func main() {
       r := gin.Default()

       r.GET("/user/:id", func(c *gin.Context) {
           id := c.Param("id") // Leer el parámetro de ruta
           c.JSON(http.StatusOK, gin.H{
               "user_id": id,
           })
       })

       r.Run() // Ejecutar el servidor en el puerto 8080
   }
   ```

3. **Leer Parámetros de Consulta (Query Params):**
   Los parámetros de consulta se pueden pasar en la URL después de un signo de interrogación (`?`). Por ejemplo, en la URL `/search?query=golang`, `query` es un parámetro de consulta.

   ```go
   package main

   import (
       "github.com/gin-gonic/gin"
       "net/http"
   )

   func main() {
       r := gin.Default()

       r.GET("/search", func(c *gin.Context) {
           query := c.Query("query") // Leer el parámetro de consulta
           c.JSON(http.StatusOK, gin.H{
               "search_query": query,
           })
       })

       r.Run() // Ejecutar el servidor en el puerto 8080
   }
   ```

4. **Ejemplo combinado:**
   Puedes combinar ambos tipos de parámetros en una sola ruta.

   ```go
   package main

   import (
       "github.com/gin-gonic/gin"
       "net/http"
   )

   func main() {
       r := gin.Default()

       r.GET("/user/:id/search", func(c *gin.Context) {
           id := c.Param("id")          // Leer el parámetro de ruta
           query := c.Query("query")    // Leer el parámetro de consulta
           c.JSON(http.StatusOK, gin.H{
               "user_id":      id,
               "search_query": query,
           })
       })

       r.Run() // Ejecutar el servidor en el puerto 8080
   }
   ```

### Ejecución

Para ejecutar tu aplicación, guarda el código en un archivo llamado `main.go` y luego ejecuta:

```bash
go run main.go
```

Ahora puedes probar las diferentes rutas usando un navegador o herramientas como `curl` o Postman.

Si tienes alguna duda adicional o necesitas más ejemplos, no dudes en preguntar. ¡Feliz programación con Golang!
