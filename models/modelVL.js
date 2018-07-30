const Mongoose = require('mongoose');

let valorSchemaVl = Mongoose.Schema ({
    tipoRegistro:String,
  isin: String,
  fecha: String,
  precio: Number
 
});

let valorVl = Mongoose.model('valorVl',valorSchemaVl);
module.exports = valorVl;
