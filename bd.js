const mongoose = require('mongoose');

const dbName = 'nombre_de_tu_base_de_datos';
const dbUrl = `mongodb://localhost/${dbName}`;

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión a la base de datos exitosa');
}).catch(err => {
  console.error('Error al conectar a la base de datos:', err);
});

module.exports = mongoose.connection;
