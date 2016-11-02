# Diseño, calidad, WAI, Validación, Seo

#### Materia: Tecnologías Web con JavaScript
#### Tema: Introducción a la Web
#### Fecha: 2016-11-08
#### Estudiante: Cristian David Santacruz Guarquila
#### Profesor: Tania Calle - Adrian Eguez
#### Número de Informe: 03
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
### Diseño, calidad, WAI, Validación, Seo
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
### Bootstrap:
<p align="justify">
    Bootstrap, es un framework originalmente creado por Twitter, que permite crear interfaces web con CSS y JavaScript, cuya particularidad es la de adaptar la interfaz del sitio web al tamaño del dispositivo en que se visualice. Es decir, el sitio web se adapta automáticamente al tamaño de una PC, una Tablet u otro dispositivo. Esta técnica de diseño y desarrollo se conoce como “responsive design” o diseño adaptativo. (Fuente: <a href="http://www.arweb.com/chucherias/editorial/%C2%BFque-es-bootstrap-y-como-funciona-en-el-diseno-web.htm">ARWEB.com</a>)
</p>

<p align="center">
    <img src="data:image/jpeg;base64,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?raw=true" width="400" height="200">
</p>

<br>
### HTML:
<p align="justify">
    HTML, sigla en inglés de HyperText Markup Language (lenguaje de marcas de hipertexto), hace referencia al lenguaje de marcado para la elaboración de páginas web. Es un estándar que sirve de referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado código HTML) para la definición de contenido de una página web, como texto, imágenes, videos, juegos, entre otros. Es un estándar a cargo del World Wide Web Consortium (W3C) o Consorcio WWW, organización dedicada a la estandarización de casi todas las tecnologías ligadas a la web, sobre todo en lo referente a su escritura e interpretación. Se considera el lenguaje web más importante siendo su invención crucial en la aparición, desarrollo y expansión de la World Wide Web (WWW). Es el estándar que se ha impuesto en la visualización de páginas web y es el que todos los navegadores actuales han adoptado. (Fuente: <a href="https://es.wikipedia.org/wiki/HTML">Wikipedia</a>)
</p>

<p align="center">
    <img src="https://nanysman.files.wordpress.com/2012/11/html1.png" width="180" height="200">
</p>

<br>
### Algunos Elementos de HTML:
```
<!DOCTYPE>      --> Define el tipo de Documento
<html>          --> Define un Documento HTML
<title>         --> Define un título para el Documento
<body>          --> Define el cuerpo del Documento
<h1> a <h6>     --> Define los encabezados HTML
<p>             --> Define un párrafo
<br>            --> Inserta una línea en blanco
<!-- ... -->    --> Define un comentario
<table>         --> Tabla
<img>           --> Define una inagen
<ol>            --> Define una lista ordenada
<ul>            --> Define una lista desordenada
<li>            --> Define un ítem de una lista
<link>          --> Define información relacional para el Documento
<a>             --> Define un hipervínculo
<video>         --> Video
<audio>         --> Audio
```
(Fuente: <a href="http://www.htmlquick.com/es/reference/tags.html">Tutoriales y Referencias sobre HTML</a>)

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
