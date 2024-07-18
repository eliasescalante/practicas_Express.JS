const express = require('express');
const app = express();
const port = 8080;

// Endpoint para la ruta '/bienvenida'
app.get('/bienvenida', (req, res) => {
  res.send('<html><body style="background: blue";>Bienvenido a nuestro servidor Express!</body></html>');
});

// Endpoint para la ruta '/usuario'
app.get('/usuario', (req, res) => {
  const usuario = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 30,
    correo: 'juan.perez@example.com'
  };
  res.json(usuario);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${8080}`);
});
