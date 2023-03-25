const db = require('../bd'); // importar la conexión a la base de datos

const contactSchema = new db.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const Contact = db.model('Contact', contactSchema); // utilizar la conexión para crear el modelo

module.exports = Contact;


