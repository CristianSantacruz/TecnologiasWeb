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

#### 3. Carpeta config:
<p align="justify">
    Esta es una de las carpetas importantes. Sails está diseñado para ser flexible. Asume algunas convenciones estándar, sino que también permite al desarrollador cambiar la forma de que sails configura la aplicación creada para adaptarse a las necesidades del proyecto. La siguiente es una lista de los archivos de configuración presentes en la carpeta config:
</p>

* <p align="justify">**Carpeta env:** Aquí guardamos las llaves, claves y contraseñas que necesitamos (para conectarnos a las bases de datos), y APIs remotas. Se clasifican en:</p>
* <p align="justify">**Carpeta locales:** En esta sección guardamos archivos JSON que se usan como diccionario para internacionalizar nuestra aplicación, permitiendo agregar nuevos idiomas con menos esfuerzo y sin perder tiempo buscando e integrando una solución para nuestro proyecto.</p>
* <p align="justify">**local.js:** Los usamos para definir el puerto y el modo de desarrollo de nuestra aplicación (desarrollo o producción).</p>
* <p align="justify">**cors.js:** En esta determinamos la forma en que nuestro servidor manejará las solicitudes CORS; nos ofrece una forma moderna y segura de comunicarnos con datos externos y es más segura que JSONP pues nos permite especificar procedimientos para solicitudes GET, PUT, POST o DELETE.</p>
* <p align="justify">**csrf.js:** Con este controlamos la seguridad con tokens CSRF, que nos permiten confirmar que las solicitudes que no son de tipo GET provengan exclusivamente desde nuestro servidor, evitando que otros sitios consuman nuestros servicios.</p>
* <p align="justify">**blueprints.js:** Nos permite definir fácilmente APIs para interactuar con nuestros Modelos.</p>
* <p align="justify">**globals.js:** En este archivo definimos las variables globales de nuestra aplicación.</p>
* <p align="justify">**http.js:** Aquí especificamos detalles de nuestro servidor HTTP, especialmente el middleware y la administración de la caché.</p>
* <p align="justify">**i18n.js:** En este archivo ponemos la lista de idiomas que soporta nuestra aplicación.</p>
* <p align="justify">**bootstrap.js:** Este archivo se ejecuta justo antes de "levantar" nuestra aplicación con el comando lift, el cual nos sirve para definir tareas que necesitamos se ejecuten antes de levantar el servidor.</p>
* <p align="justify">**connections.js:** En este archivo especificamos los ajustes necesarios por nuestros adaptadores y básicamente son intermediarios entre nuestra aplicación y las bases de datos, esto nos facilita administrar las conexiones a distintas bases de datos.</p>
* <p align="justify">**log.js:** Aquí configuramos el nivel de logging de nuestra aplicación, en otras palabras, el nivel de detalle que deseamos registrar sobre los eventos en nuestra aplicación.</p>
* <p align="justify">**models.js:** Nos permite manejar las conexiones por default que serán incluidas en todos nuestros Modelos.</p>
* <p align="justify">**policies.js:** Esta nos permite definir políticas de seguridad para nuestros Controladores.</p>
* <p align="justify">**routes.js:** En este archivo configuramos la relación entre las rutas de nuestra aplicación y los recursos, esto se hace generalmente después de que se cumplan las políticas de seguridad para los recursos solicitados.</p>
* <p align="justify">**sessions.js:** Esta configuración nos permite guardar los datos de sesión de cada usuario y aplicarla en Express y en Socket.IO.</p>
* <p align="justify">**sockets.js:** Lo usamos para personalizar la forma en que nuestro backend se comunica con el usuario por medio de Socket.IO.</p>
* <p align="justify">**views.js:** En este podemos personalizar el motor que deseamos usar para definir los templates HTML que serán usados para la Visualización de nuestra aplicación, por ejemplo ejs, jade, underscore y muchos más.</p>

<br>

#### 4. Carpeta modules:
<p align="justify">
    Aquí se carga todas las dependencias que tengamos en el fichero package.json.
</p>

<br>

#### 5. Carpeta tasks:
<p align="justify">
    Se usa para guardar tareas y configuraciones de Grunt.
</p>

<br>

#### 6. Carpeta views:
<p align="justify">
    Las vistas de la aplicación se almacenan en esta carpeta. En cuanto a su contenido, nos damos cuenta de que las opiniones se generan por defecto como, JavaScript incrustado, EJS. Además, la carpeta contiene vistas para el manejo de errores (404 y 500) y también el archivo de diseño, layout.ejs, y los puntos de vista para el controlador de la casa, que se genera mediante Sails.
</p>

<br>


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
