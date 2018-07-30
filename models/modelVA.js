const Mongoose = require('mongoose');

let valorSchemaVa = Mongoose.Schema ({
  tipoRegistro:String,
    isin: String,
  nombre: String,
  divisa: String,
  renta: String
});

let valorVa = Mongoose.model('valorVa',valorSchemaVa);
module.exports = valorVa;
