const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserDeviceSchema = new Schema({
  usuario: { type: String },
  idWeight: { type: String },
  itemType: { type: String },
  weightLimit: { type: String }
});

module.exports = mongoose.model("UserDevice", UserDeviceSchema);
