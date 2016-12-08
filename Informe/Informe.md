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
* Conocer conceptos básicos sobre la Web.
* Aprender la estructura básica de una página HTML.
* Aprender el uso de estilos en HTML.
* Conocer herramientas de desarrolleres Web.
* Analizar la cabecera de una página HTML.

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
* **Con el siguiente código podemos crear un formulario en un documento HTML.**

```
<div class="container">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <div class="input-group">
                            <div class="input-group-addon">yo</div>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                            <div class="input-group-addon">aq</div>
                        </div>
                        
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
    
```

Ejemplo
<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/boostrap/Informe/Capturas/Forms.png?raw=true">
</p>

* **El tag ```<kdb> ... </kdb>``` nos permite dar un formato al texto.**

```
<p>No esta permitido por ejemplo el
        <kbd>
        <kbd>ctrl</kbd> +
        <kbd>c</kbd>
        </kbd>
        ni el
        <kbd>
    <kbd>ctrl</kbd> +
        <kbd>v</kbd>
        </kbd>
    </p>

```

Ejemplo

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/boostrap/Informe/Capturas/Inputs.png?raw=true">
</p>

* **Con el siguiente código podemos crar una tabla que se hace más pequeña cuando llega a los 690px**

```
<div class="row" style="background-color:#7979f3;">

            <h1>Fila2</h1>

            <div class="col-sm-3 borde">
                <h3>CSM3 - 1</h3>
            </div>
            <div class="col-sm-3 borde">
                <h3>CSM2 - 2</h3>
            </div>
            <div class="col-sm-3 borde">
                <h3>CSM2 - 3</h3>
            </div>
            <div class="col-sm-3 borde">
                <h3>CSM2 - 4</h3>
            </div>

        </div>

```

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/boostrap/Informe/Capturas/VentGrande.png?raw=true">
</p>

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/boostrap/Informe/Capturas/VentanaPeque%C3%B1a.png?raw=true">
</p>

* **Con el siguiente código podemos crear tablas que sus filas se coloreen de acuerdo a una alerta**

```
<table class="table table-condensed ">
        <!--   TABLE ROW    -->
        <tr class="active">
            <!--   TABLE HEADER    -->
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <!--   TABLE ROW    -->
        <tr class="warning">
            <!--   TABLE DETAIL    -->
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr class="success">
            <!--   TABLE DETAIL    -->
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr class="info">
            <!--   TABLE DETAIL    -->
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <!--   TABLE ROW    -->
        <tr class="danger">
            <!--   TABLE DETAIL    -->
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
</table>
    
```

Ejemplo

<p align="center">
    <img src="https://github.com/CristianSantacruz/TecnologiasWeb/blob/boostrap/Informe/Capturas/TablaAlertas.png?raw=true">
</p>

<a name="Conclusiones y Recomendaciones"></a>
## Conclusiones y Recomendaciones:
* WAI permite desarrollar aplicaciones Web para que puedan ser utilizadas por personas que tengan algún tipo de discapacidad o que recien esten introduciendose al uso de aplicaciones Web.
* SEO son técnicas que permiten posicionar nuestras marcas o productos en lo más arriba posible de los resultados de Google de manera gratuita.
* Bootstrap nos permiten mejorar el diseño de nuestra página Web.
* Se recomienda realizar las prácticas con mayor detenimiento y no ir tan rápido.