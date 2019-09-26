//Metodos http para modificar y leer el dispositivos de la base de datos
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Descripcion de datos
const DeviceSchema = new Schema({
  idDispositivo: { type: String },
  topic1: { type: String },
  topic2: { type: String }
});

module.exports = mongoose.model("Device", DeviceSchema);
