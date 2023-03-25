const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./network/routes');
const db = require('./bd');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/contact', contactRoutes);

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', function() {
  console.log('Conexión a la base de datos exitosa');
  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
});

module.exports = app;


