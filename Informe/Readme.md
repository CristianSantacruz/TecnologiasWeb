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
    <img src="data:image/png;base64,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?raw=true" width="400" height="200">
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
