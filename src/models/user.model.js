//Modelado de datos para el esquema usuarios de la base de datos
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;

//Descripcion de datos
const UserSchema = new Schema({
  usuario: { type: String },
  email: { type: String },
  password: { type: String }
});

//Metodo para encriptar conttrase;a del usuario
UserSchema.methods.encryptPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

//Metodo para validar contrase;a del usuario al iniciar sesion
UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
