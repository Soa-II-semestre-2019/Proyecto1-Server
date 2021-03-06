//Metodos http para modificar y leer el esquema usuarios de la base de datos

const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/", async (req, res) => {
  res.json({ mensaje: "Bienvenido al servidor de IntelliWeight" });
  return;
});

//Registrar un nuevo usuario al sistema
router.post("/users/register", async (req, res) => {
  const { user, email, password } = req.body;
  const tempUser = await User.findOne({ usuario: user });
  const tempcorreoElectronico = await User.findOne({ email: email });
  if (tempUser !== null) {
    res.json({ mensaje: "Nombre de usuario no disponible" });
    return;
  }
  if (tempcorreoElectronico !== null) {
    res.json({ mensaje: "Correo electronico ya registrado por otro usuario" });
    return;
  }
  const usuario = new User();
  usuario.usuario = user;
  usuario.email = email;
  usuario.password = usuario.encryptPassword(password);

  try {
    await usuario.save();
    res.json({ mensaje: "Usuario registrado" });
  } catch (error) {
    res.json({ mensaje: "Error al insertar usuario en la base" });
  }
});

//Loguear a un usuario existente en el sistema
router.post("/users/login", async (req, res) => {
  const { user, password } = req.body;
  const tempUser = await User.findOne({ usuario: user });
  if (tempUser === null) {
    res.json({ mensaje: "Nombre de usuario no registrado" });
    return;
  }
  if (tempUser.comparePassword(password) === false) {
    res.json({ mensaje: "Contraseña incorrecta" });
  } else {
    res.json({ mensaje: "Login exitoso" });
    return;
  }
});

module.exports = router;
