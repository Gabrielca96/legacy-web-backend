const Contact = require('../email/model');
const { sendMail } = require("../../network/mail");

exports.create = async (req, res) => {
  const { name, email, message } = req.body;
  
  // Validar los datos recibidos
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Por favor, completa todos los campos" });
  }

  try {
    // Enviar el correo
    await sendMail(name, email, message);
    
    // Guardar los datos en la base de datos
    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(200).json({ message: "Email enviado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar el email" });
  }
};

