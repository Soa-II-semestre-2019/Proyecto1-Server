const express = require("express");
const router = express.Router();
const UserDevice = require("../models/user-device.model");
const Dispositivo = require("../models/device.model");

router.post("/userDevice/findUser", async (req, res) => {
  const { user } = req.body;
  query = { usuario: user };
  const value = await UserDevice.findOne(query);
  res.json({ mensaje: value });
});

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

router.put("/userDevice", async (req, res) => {
  const { user, idWeight, itemType, weightLimit } = req.body;
  const doc = await UserDevice.findOne({ usuario: user });
  doc.idWeight = idWeight;
  doc.itemType = itemType;
  doc.weightLimit = weightLimit;
  await doc.save();
  res.json({ mensaje: "documento actualizado" });
});

router.get("/userDevice", async (req, res) => {
  const device = new Dispositivo();
  device.idDispositivo = "Caja1";
  device.topic1 = "pesa1";
  device.topic2 = "pesa2";
  await device.save();
  res.json({ mensaje: "OK" });
});

module.exports = router;
