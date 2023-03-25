const nodemailer = require('nodemailer');

async function sendMail(name, email, message) {
  try {
    // Configurar el transportador de correo
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'tu_correo@gmail.com', // Aquí debes colocar tu correo electrónico
        pass: 'tu_contraseña' // Aquí debes colocar tu contraseña
      }
    });

    // Definir el contenido del correo
    let mailOptions = {
      from: 'tu_correo@gmail.com',
      to: 'destinatario@ejemplo.com', // Aquí debes colocar el correo electrónico del destinatario
      subject: 'Correo de contacto',
      text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    console.log('Correo enviado correctamente');
  } catch (error) {
    console.log('Error al enviar el correo', error);
    throw error;
  }
}

module.exports = { sendMail };
