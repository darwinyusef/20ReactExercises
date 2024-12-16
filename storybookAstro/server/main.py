import markdown
import re
  
# Función para leer el archivo .md
def leer_md(archivo_md):
    with open(archivo_md, 'r', encoding='utf-8') as f:
        contenido = f.read()
        # Usamos una expresión regular para eliminar el bloque que empieza y termina con '---'
    contenido_modificado = re.sub(r'^---\n.*?---\n', '', contenido, flags=re.DOTALL)
    return contenido_modificado

# Función para escribir en el archivo .mdx
def escribir_mdx(archivo_mdx, contenido_md):
    with open(archivo_mdx, 'w', encoding='utf-8') as f:
        f.write('import { Meta } from "@storybook/blocks";\n\n')
        f.write('<Meta title="markdown/Contenido de pruebas MDX" />\n')

        #f.write('---\n')
        #f.write('title: "Mi archivo MDX"\n')
        #f.write('---\n\n')
        f.write(contenido_md)  # Insertamos el contenido del .md

# Leer el archivo .md y convertirlo en texto
contenido_md = leer_md('../src/pages/content-prueba.md')

# Escribir el contenido en un archivo .mdx
escribir_mdx('../src/stories/content-prueba.mdx', contenido_md)