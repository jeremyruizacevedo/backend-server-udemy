// Requires
var express = require('express');
var mongoose = require('mongoose');

//Inicializando variables
var app = express();

// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
  if (err) throw err;
  console.log('Base de datos online');
});

// Escuchar peticiones

app.get('/', (req, res, next) => {
  res.status(200).json({
    ok: true,
    mensaje: 'Petición ejecutada correctamente'
  });
});

app.listen(3000, () => {
  console.log('Escuchando puerto 3000');
});