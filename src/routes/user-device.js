//Metodos http para modificar y leer el esquema user-device de la base de datos
const express = require("express");
const router = express.Router();
const UserDevice = require("../models/user-device.model");
const Dispositivo = require("../models/device.model");

//Obtiene el documento a partir del nombre del usuario
router.post("/userDevice/findUser", async (req, res) => {
  const { user } = req.body;
  query = { usuario: user };
  const value = await UserDevice.findOne(query);
  res.json({ mensaje: value });
});

//Crea un nuevo documento con el nombre del usuario y la informacion del dispositivo
router.post("/userDevice", async (req, res) => {
  const { user, idWeight, itemType, weightLimit } = req.body;
  const dispositivo = await Dispositivo.findOne({ idDispositivo: idWeight });
  if (dispositivo !== null) {
    const userDevice = new UserDevice();
    userDevice.usuario = user;
    userDevice.idWeight = idWeight;
    userDevice.itemType = itemType;
    userDevice.weightLimit = weightLimit;
    try {
      await userDevice.save();
      res.json({ mensaje: "Dispositivo agregado" });
    } catch (error) {
      res.json({ mensaje: "Error al agregar el dispositivo" });
    }
    return;
  } else {
    res.json({
      mensaje:
        "El identificador de dispositivo no se encuentra en la base de datos"
    });
    return;
  }
});

//Actualiza la informacion de los dispositivos
router.put("/userDevice", async (req, res) => {
  const { user, idWeight, itemType, weightLimit } = req.body;
  const doc = await UserDevice.findOne({ usuario: user });
  doc.idWeight = idWeight;
  doc.itemType = itemType;
  doc.weightLimit = weightLimit;
  await doc.save();
  res.json({ mensaje: "documento actualizado" });
});

module.exports = router;
