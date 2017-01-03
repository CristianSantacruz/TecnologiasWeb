# Sailsjs - Assets / Views / Pipeline / Controllers

#### Materia: Tecnologías Web con JavaScript
#### Tema: Sailsjs - Assets / Views / Pipeline / Controllers
#### Fecha: 2016-01-05
#### Estudiante: Cristian David Santacruz Guarquila
#### Profesor: Tania Calle - Adrian Eguez
#### Número de Informe: 05
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
### Sailsjs - Assets / Views / Pipeline / Controllers
---

<a name="Objetivos"></a>
## Objetivos:
* Conocer conceptos básicos sobre la Web.
* Aprender la estructura básica de una página HTML.
* Aprender el uso de estilos en HTML.
* Conocer herramientas de desarrolleres Web.
* Analizar la cabecera de una página HTML.

---

<a name="Marco Teórico"></a>
## Marco Teórico:
### Sails.js:
<p align="justify">
    Sails.js es un framework para Node.js. Está realizado bajo el framework Express, incluyendo varias capas de abstracción para hacer un desarrollo más fácil. Sails viene instalado con un potente ORM/ODM llamada waterline, una herramienta de almacén de datos agnóstico que simplifica drásticamente la interacción con una o más bases de datos. Proporciona una capa de abstracción en la parte superior de la base de datos subyacente, lo que le permite consultar fácilmente y manipular sus datos sin necesidad de escribir código de integración específica del proveedor. La última versión de Sails viene preparado para trabajar Postgres, Mongo, MySQL, Redis, y en disco. Entre otras cosas, nos facilita en gran medida el desarrollo de APIs REST, servidores de archivos, seguridad y websockets para menajar y realizar peticiones en tiempo real gracias a Socket.io.(Fuente: <a href="https://openwebinars.net/blog/tutorial-sailsjs-instalacion/">openwebinars</a>)
</p>

<p align="center">
    <img src="https://platzi.com/blog/content/images/2015/05/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67.png" width="300" height="100">
</p>

<br>
#### 1. Carpeta API:
<p align="justify">
    En esta sección almacenamos la mayor parte de la lógica de nuestro backend, el Modelo y el Controlador son definidos por los contenidos de esta carpeta y esta a su vez contiene la siguientes carpetas:
</p>

* <p align="justify">La carpeta controllers contiene los controladores de la aplicación. Estos son archivos de Javascript que contienen la lógica para interactuar con los Modelos y renderizar la Visualización de forma adecuada.</p>
* <p align="justify">En la carpeta models se almacenan los modelos de la aplicación. Estas son estructuras que almacenan los datos de tu aplicación.</p>
* <p align="justify">En la carpeta de policies se almacenan las reglas de acceso de usuario de aplicación. Esto es Middleware de Express, que se encarga de controlar la seguridad de los Controladores.</p>
* <p align="justify">En la carpeta de responses se almacenan la lógica que genera las respuestas del servidor.</p>
* <p align="justify">En la carpeta de services se almacenan los servicios api implementadas por la aplicación. Son archivos Javascript similares a los Controladores, pero no necesariamente generan una respuesta inmediata al cliente, o simplemente no tiene comunicación directa con él. Son muy útiles para crear tareas o servicios asíncronos, por ejemplo, procesos lentos cuya respuesta es enviada al cliente eventualmente via websocket o email.</p>

<br>
#### 2. Carpeta Assets:
<p align="justify">
    La carpeta de activos contiene subdirectorios para los archivos JavaScript y CSS que deben ser cargados en tiempo de ejecución. Este es el mejor lugar para almacenar bibliotecas auxiliares utilizados por la aplicación. Sección en la que vamos a colocar los archivos estáticos de nuestro proyecto; el favicon y el robots.txt los encontramos en la raíz del directorio y el resto los agrupamos en estas carpetas:
</p>

* <p align="justify">**images:** la usamos para almacenar nuestros assets visuales, por ejemplo transparencias .svg, .webp o .png, así como imágenes .jpg entre otras.</p>
* <p align="justify">**js:** en esta colocamos los archivos Javascript para el cliente, por ejemplo las librerías.</p>
* <p align="justify">**styles:** aquí puedes colocar tus archivos CSS. Para mejores resultados, te recomiendo usar un precompilador como stylus, de este modo puedes hacer modular tu código y crear automáticamente un CSS para producción con compresión y vendor prefixes.</p>
* <p align="justify">**templates:** para almacenar los HTML y JST de nuestra aplicación.</p>

<br>
### W3C:
<p align="justify">
    W3C son las siglas de World Wide Web Consortium , y es una comunidad internacional donde los estados miembros trabajan para poder desarrollar estándares para el desarrollo web y asi ayudar a un mejor desarrollo de el Internet a nivel mundial.
W3C es reconocido a nivel mundial por ser la organización encargada de estandarizar El Lenguaje de Marcado de Hipertexto o mejor conocido como HTML , el cual es utilizado para el diseño y desarrollo de sitios web, dicho estándar inicio en el año de 1994 (es importante aclarar que antes de que W3C trabajara en HTML ya otras organizaciones habían desarrollado versiones previas).
Sin embargo los objetivos de W3C van mas allá de el desarrollo de HTML y trabajan en otros proyectos a fin de poder brindar nuevas opciones para la elaboración de sitios web, tanto es así que en los últimos años han concentrados sus esfuerzo en el desarrollo de XHTML, una versión avanzada de HTML que pretende en los próximos años sustituirlo. (Fuente: <a href="http://sistemasyinternet.blogspot.com/2011/06/que-es-w3c.html">Mundo Informático</a>)
</p>
<p align="center">
    <img src="http://2.bp.blogspot.com/-epjQpzrzca0/TewLvVF_ByI/AAAAAAAAAN8/gS4uaslEWfY/s1600/logo_w3c.jpg?raw=true" width="400" height="180">
</p>

<a name="Desarrollo de la Práctica"></a>
## Desarrollo de la Práctica:
* **Postman es una herramienta que nos permite revisar los códigos de estatutos de HTML.**

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/master/Informe.01/Capturas/Postman.png?raw=true">
</p>

* **Los TAGS ```<h1> a <h6>``` nos permiten poner encabezados al documento HTML.**

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/master/Informe.01/Capturas/Cabeceras.png?raw=true">
</p>

* **Los TAGS ```<p> ... </p>``` nos permiten crear p+arrafos en el documento HTML.**

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/master/Informe.01/Capturas/Parrafo.png?raw=true">
</p>

* **Los TAGS ```<!-- ... -->``` nos permiten comentar bloques de código en el documento HTML.**

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/master/Informe.01/Capturas/Comentarios.png?raw=true">
</p>

* **Se puede crear imagenes que nos redireccione a otras páginas Web:**

```
<a href="https://es.wikipedia.org/wiki/Saint_Seiya" target="blank">
        <img src="http://www.gratistodo.com/contenido/videos-gratis/series-de-tv/caballeros-del-zodiaco.jpg">
    </a>
    
```
<br>
<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/master/Informe.01/Capturas/Imagenes.Enlaces.png?raw=true">
</p>

Despúes de dar click en esta imagen nos redirecciona a la siguiente página Web.

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/master/Informe.01/Capturas/Redireccion.png?raw=true">
</p>

<a name="Conclusiones y Recomendaciones"></a>
## Conclusiones y Recomendaciones:
* Al igual que otros lenguajes de programación HTML tamnbién nos permite comentar bloques de código.
* HTML nos permite usar estilos para mejorar la presentación de las paginas Web.
* Mediante una imagen en el documento HTML podemos redireccionarnos a otra pagina Web.
* Se recomienda realizar las prácticas con mayor detenimiento y no ir tan rápido.
