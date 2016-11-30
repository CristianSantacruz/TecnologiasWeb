var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hola Mundo');
});


app.get('/TecnologiasWeb', function (req, res) {
  res.send('con JavaScript');
});


app.post('/TecnologiasWeb', function (req, res) {
  res.send('con JavaScript');
});



app.listen(5050, function () {
  console.log('Escuchando en puerto5050');
});