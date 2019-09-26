//Conexion con la base de datos en MongoAtlas
const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("Data Base connected");
} catch (error) {
  console.error(error);
}
module.exports = mongoose;
