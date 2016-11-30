var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Tecnologias Web con "GET"');
});

app.listen(5050, function () {
  console.log('Escuchando en puerto5050');
});