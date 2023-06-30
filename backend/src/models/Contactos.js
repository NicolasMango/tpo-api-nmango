const mongoose = require('mongoose');

const ContactosSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    subject:String,
    message:String,
    date:Date
});

const Contactos = mongoose.model('Contactos',ContactosSchema);

module.exports = Contactos;