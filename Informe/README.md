# MANEJO DE ESTILOS EN HTML

#### Materia: Tecnologías Web con JavaScript
#### Tema: Manejo de Estilos en HTML
#### Fecha: 2016-11-01
#### Estudiante: Cristian David Santacruz Guarquila
#### Profesor: Tania Calle - Adrian Eguez
#### Número de Informe: 02
---

## Índice de Contenidos:
* <a href="#Tema">**Tema**</a>
* <a href="#Objetivos">**Objetivos**</a>
* <a href="#Marco Teórico">**Marco Teórico**</a>
* <a href="#Desarrollo de la Práctica">**Desarrollo de la Práctica**</a>
* <a href="#Conclusiones y Recomendaciones">**Conclusiones y Recomendaciones**</a>

---
<a name="Tema"></a>
## Tema:
### Manejo de Estilos en HTML
---

<a name="Objetivos"></a>
## Objetivos:
* Aprender a crear archivos .css
* Aprender a crear clases dentro del documento HTML.
* Aprender el uso de estilos en HTML.
* Aprender a levantar un mini Servidor Web.
* Aprender el uso de Bootstrap.

---

<a name="Marco Teórico"></a>
## Marco Teórico:

### Servidor Web:
<p align="justify">
    Un servidor web o servidor HTTP es un programa informático que procesa una aplicación del lado del servidor, realizando conexiones bidireccionales y/o unidireccionales y síncronas o asíncronas con el cliente y generando o cediendo una respuesta en cualquier lenguaje o Aplicación del lado del cliente. El código recibido por el cliente suele ser compilado y ejecutado por un navegador web. Para la transmisión de todos estos datos suele utilizarse algún protocolo. Generalmente se usa el protocolo HTTP para estas comunicaciones, perteneciente a la capa de aplicación del modelo OSI. El término también se emplea para referirse al ordenador que ejecuta el programa. (Fuente: <a href="https://es.wikipedia.org/wiki/Servidor_web">Wikipedia</a>)
</p>

<p align="center">
    <img src="http://www.777icons.com/libs/net/http_server.jpg?raw=true" width="400" height="200">
</p>

<br>

### Hojas de Estilos:
<p align="justify">
    Las hojas de estilo representan un avance importante para los diseñadores de páginas web, al darles un mayor rango de posibilidades para mejorar la apariencia de sus páginas. En los entornos científicos en que la Web fue concebida, la gente estaba más preocupada por el contenido de sus páginas que por su presentación. A medida que la Web era descubierta por un espectro mayor de personas de distintas procedencias, las limitaciones del HTML se convirtieron en fuente de continua frustración, y los autores se vieron forzados a superar las limitaciones estilísticas del HTML.
    
</p>

<p align="justify">
    Con las hojas de estilo es más fácil especificar la cantidad de espacio entre líneas, el sangrado de las líneas, los colores a utilizar para el texto y el fondo, el tamaño y estilo de las fuentes, y otros muchos detalles. (Fuente: <a href="http://html.conclase.net/w3c/html401-es/present/styles.html#h-14.1">Hojas de Estilo</a>)
</p>

<p align="center">
    <img src="http://3con14.info/codigo_web/_config/pagina_web.png?raw=true" width="400" height="200">
</p>

<br>

### Bootstrap:
<p align="justify">
    Bootstrap, es un framework originalmente creado por Twitter, que permite crear interfaces web con CSS y JavaScript, cuya particularidad es la de adaptar la interfaz del sitio web al tamaño del dispositivo en que se visualice. Es decir, el sitio web se adapta automáticamente al tamaño de una PC, una Tablet u otro dispositivo. Esta técnica de diseño y desarrollo se conoce como “responsive design” o diseño adaptativo. (Fuente: <a href="http://www.arweb.com/chucherias/editorial/%C2%BFque-es-bootstrap-y-como-funciona-en-el-diseno-web.htm">ARWEB</a>)
</p>

<p align="center">
    <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/courses/3325491/14570025107476_illus_prenez-en-main-bootstrap.png?raw=true" width="300" height="200">
</p>

<br>


<a name="Desarrollo de la Práctica"></a>
## Desarrollo de la Práctica:
* **Levantar el servidor Web**
<br>
<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/02-CSS/Informe/Graficos/Servidor.png?raw=true" width="700" height="200">
</p>

* **Visualizar la página desde el localhost.**
<br>
<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/02-CSS/Informe/Graficos/Pagina.png?raw=true" width="700" height="300">
</p>

* **La hoja de estilos por lo general se la define con la siguiente estructura de código**

```
html{
    
    background-color: #687fd4;
}
    
    body{
        
        background-color: azure;
    }
        
    h1{
        background-color: #67327gd;
    }
    
    p{
        background-color: #12435bgfhb;
    }
        

```

<a name="Conclusiones y Recomendaciones"></a>
## Conclusiones y Recomendaciones:
* Bootstrap nos permite crear interfaces que son adaptables en tamaño para cualquier dispositivo en la que se vizualice.
* El uso de un archivo de estilos nos permite que el código HTML no sea tan extenso.
* Montar un mini servidor web local nos permite ver nuestra pagina HTML desde el localhost.
* Se recomienda llevar las practicas no tan rápido para mejorar la comprensión por parte de los estudiantes.