const mongoose = require("mongoose");
const { Schema } = mongoose;

const DeviceSchema = new Schema({
  idDispositivo: { type: String },
  topic1: { type: String },
  topic2: { type: String }
});

module.exports = mongoose.model("Device", DeviceSchema);
