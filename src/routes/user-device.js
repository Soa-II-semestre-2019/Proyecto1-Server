const express = require("express");
const router = express.Router();
const UserDevice = require("../models/user-device.model");

router.post("/userDevice/findUser", async (req, res) => {
  const { user } = req.body;
  query = { usuario: user };
  const value = await UserDevice.findOne(query);
  res.json({ mensaje: value });
});

router.post("/userDevice", async (req, res) => {
  const { user, idWeight, itemType, weightLimit } = req.body;
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

module.exports = router;
