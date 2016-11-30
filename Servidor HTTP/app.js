var express = require('express');
var app = express();

var usuarios = [{ id:1, nombre: 'Pepe', cedula: '12345' },
                { id:2, nombre: 'Juan', cedula: '12345'},    
                { id:3, nombre: 'Pedro', cedula: '12345'}];

var contador = 3;


app.get('/', function (req, res) {
  res.send('Hola Mundo');
});


app.get('/TecnologiasWeb', function (req, res) {
  res.send(usuarios);
});


app.post('/TecnologiasWeb/:name', function (req, res) {
    
    var parametros = req.params.name;
    for(var i=0; i<usuarios.length; i++){
        if(parametros==usuarios[i].id){
            res.json(usuarios[i]);
        }
    } 
    
    res.send('No existe el Usuario');
});


app.get('/Usuarios', function (req, res) {
  
    if(!req.query.nombre){
        res.send('No envió nombre');
    }
    
    if(!req.query.cedula){
        res.send('No envió cédula');
    }
    
    var nuevoUsuario = { id:contador+1, nombre:req.query.nombre, cedula:req.query.cedula };
    usuarios.push(nuevoUsuario);
    contador = contador++;
    res.json(nuevoUsuario);
    
});

app.listen(5050, function () {
  console.log('Escuchando en puerto5050');
});