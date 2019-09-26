//Modelado de datos para el esquema user-device de la base de datos
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Descripcion de datos
const UserDeviceSchema = new Schema({
  usuario: { type: String },
  idWeight: { type: String },
  itemType: { type: String },
  weightLimit: { type: String }
});

module.exports = mongoose.model("UserDevice", UserDeviceSchema);
