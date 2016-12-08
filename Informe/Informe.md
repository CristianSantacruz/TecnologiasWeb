# NPM

#### Materia: Tecnologías Web con JavaScript
#### Tema: Introducción a la Web
#### Fecha: 2016-12-08
#### Estudiante: Cristian David Santacruz Guarquila
#### Profesor: Tania Calle - Adrian Eguez
#### Número de Informe: 04
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
### NPM
---

<a name="Objetivos"></a>
## Objetivos:
* Conocer acerca de NPM.
* Configurar un entorno de trabajo para desarrollar aplicaciones Express.
* Crear un aplicación Express.

---

<a name="Marco Teórico"></a>
## Marco Teórico:
### Node.js:
<p align="justify">
    Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web.2 Fue creado por Ryan Dahl en 2009 y su evolución está apadrinada por la empresa Joyent, que además tiene contratado a Dahl en plantilla.(Fuente: <a href="https://es.wikipedia.org/wiki/Node.js">Wikipedia</a>)
</p>

<p align="center">
    <img src="http://4.bp.blogspot.com/-7YAE04nN-3w/VMHUhvFSqAI/AAAAAAAAAVo/DmXknD3uqNw/s1600/node3.png" width="300" height="150">
</p>

<br>
### NPM:
<p align="justify">
    NPM es el manejador de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript. Desde la versión 0.6.3 de Node.js npm es instalado automáticamente con el entorno. NPM se ejecuta desde la linea de comandos y maneja las dependencias para una aplicación.1 2 Además, permite a los usuarios instalar aplicaciones Node.js que se encuentran en el repositorio. npm está escrito enteramente en JavaScript y fue desarrollado por Isaac Z. Schlueter. (Fuente: <a href="https://es.wikipedia.org/wiki/Npm">Wikipedia</a>)
</p>

<p align="center">
    <img src="http://vorba.ch/2012/nodejs-npm.png" width="200" height="150">
</p>

<br>
### Express:
<p align="justify">
    Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles. (Fuente: <a href="http://expressjs.com/es/">Express</a>)
</p>

<p align="center">
    <img src="https://raygun.com/blog/wp-content/uploads/2015/04/express1.png" width="400" height="150">
</p>

<br>

<a name="Desarrollo de la Práctica"></a>
## Desarrollo de la Práctica:
* **Después de instalar node.js se debe crear un directorio el cual contendrá la aplicación y lo convertimos en un directorio de trabajo.**

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/08-ExpressJS-Parte-2/Informe/Imagenes/Direcctorio%20de%20la%20aplicaci%C3%B3n.png?raw=true?raw=true">
</p>

* **Ejecutar el comando ```$npm init``` para crear un archivo package.json.**

* **Pulsar Enter hasta llegar a ```entry point: (index.js)``` y lo cambiamos por ```entry point: (app.js)``` ya que la aplicación será codificada en el archivo "app.js" .**

```
    entry point: (app.js)
```

* **Instalar Express en el directorio donde se encuentra el archivo principal ```app.js``` y se lo guarda en lista de dependencias con el siguiente comando.**
```
    $npm install express --save
```

* **Se observa que dentro del directorio de trabajo se ha creado el archivo ```package.json``` y el directorio que contiene los módulos de node.**

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/08-ExpressJS-Parte-2/Informe/Imagenes/Archivo%20package.png?raw=true?raw=true?raw=true">
</p>

* **Contenido del archivo ```package.json```.**

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/08-ExpressJS-Parte-2/Informe/Imagenes/package.png?raw=true?raw=true?raw=true">
</p>

* **Después de crear el ambiente de trabajo se procede a crear la aplicación editando el archivo ```app.js```.**

* **Crear un ```Hola Mundo```.**

```javascript
    var express = require('express');
    app.get('/', function (req, res) {
    res.send('Hola Mundo');
    });

    app.listen(5050, function () {
    console.log('Escuchando en puerto5050');
    });
```


<a name="Conclusiones y Recomendaciones"></a>
## Conclusiones y Recomendaciones:
* NPM sirve para menejar paquetes de node.js.
* Para crear el entorno de trabajo de la aplicación express se debe instalar Express en el directorio que contendrá a la aplicación.
* Cada que se modifique la aplicación se debe bajar el servidor y volverlo a subir para visualizar las nuevas funciones.
* Se recomienda llevar las clases con mayor detenimiento,