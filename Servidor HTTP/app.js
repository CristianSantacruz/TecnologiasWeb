var express = require('express');
var app = express();

var fs = require('fs');

app.get('/', function (req, res) {
    
    console.log('1 Antes de leer');
    var archivoLeido;
    
    //Primer paramatro es el path de la pagina html y el segundo parametro es la codificación
    fs.readFile ('./Paginas/pagina.html', 'utf8', function(err, archivoLeido){ 
        fs.readFile ('./Paginas/usuario.html', 'utf8', function(err, archivoLeido){ }); });
    
    
    
});

    console.log('2 Parece que termino de leer');

app.listen(5050, function () {
  console.log('Escuchando en puerto5050');
});