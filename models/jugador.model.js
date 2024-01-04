const mongoose = require('mongoose');

// here we are getting access to Schema class from mongoose
const Schema = mongoose.Schema;

// Schema defines the STRUCTURE of documents in the collection
// this is the BLUEPRINT for all instances
const jugadorSchema = new Schema({
  Nom: {
    type: String,
    require: true,
    trim: true,
  },
  Primer_Cognom:  {
    type: String,
    require: true,
    trim: true,
  },
  Segon_Cognom: {
    type: String,
    require: true,
    trim: true,
  },
  DNI: {
    type: String,
    require: true,
    trim: true,
  },
  Any_de_naixement: {
    type: String,
    require: true,
    trim: true,
  },
  Adreça: {
    type: String,
    require: true,
    trim: true,
  },
  Número: {
    type: String,
    require: true,
    trim: true,
  },
  Pis: Number,
  Porta: Number,
  Població: {
    type: String,
    require: true,
    trim: true,
  },
  Codi_Postal: {
    type: String,
    require: true,
    trim: true,
  },
  Nom_del_Pare: {
    type: String,
    require: true,
    trim: true,
  },
  Nom_de_la_Mare: {
    type: String,
    require: true,
    trim: true,
  },
  Telèfon_del_Pare: {
    type: String,
    require: true,
    trim: true,
  },
  Telèfon_de_la_Mare: {
    type: String,
    require: true,
    trim: true,
  },
  Data_reconeixement_mèdic: Date,
  Correu_electrònic: {
    type: String,
    require: true,
    trim: true,
  },
  Imatge_DNI: String,
}, {
  timestamps: true
},
);

// Jugador is our mongoose model class
// all jugadors in jugadors collection will share these properties
// Mongoose turns models name to a collection name (Jugador --> jugadors)
module.exports = mongoose.model("Jugador", jugadorSchema);