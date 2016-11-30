var express = require('express');
var app = express();


var usuario = {
    nombre:'Cristian',
    cedula:'1234567890'
}

app.get('/', function (req, res) {
  res.send('Hola Mundo');
});


app.get('/TecnologiasWeb', function (req, res) {
  res.send('con JavaScript');
});


app.post('/TecnologiasWeb', function (req, res) {
  
    console.log('Lo que tengo en el request es:');
   // console.log(req);
    
    console.log('Lo que tengo en el responsive es:');
   // console.log(res);
    
    console.log('Lo en la cabecera request es:');
   // console.log(req.getHeaders);
    
    console.log('Lo en la cabecera responsive es:');
   // console.log(res.getHeaders);
    
    
    //res.send('con JavaScript');
    res.json(usuario);
});



app.listen(5050, function () {
  console.log('Escuchando en puerto5050');
});