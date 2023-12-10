const mongoose = require('mongoose');

// here we are getting access to Schema class from mongoose
const Schema = mongoose.Schema;

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
const jugadorSchema = new Schema({
  Nom: String,
  Primer_Cognom: String,
  Segon_Cognom: String,
  DNI: String,
  Any_de_naixement: Number,
  Adreça: String,
  Número: Number,
  Pis: Number,
  Porta: Number,
  Població: String,
  Codi_Postal: Number,
  Nom_del_Pare: String,
  Nom_de_la_Mare: String,
  Telèfon_del_Pare: Number,
  Telèfon_de_la_Mare: Number,
  Data_reconeixement_mèdic: Date,
  Correu_electrònic: String,
});

// Jugador is our mongoose model class
// all jugadors in jugadors collection will share these properties
// Mongoose turns models name to a collection name (Student --> students)
module.exports = mongoose.model("Jugador", jugadorSchema);