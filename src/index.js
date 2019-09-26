const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

//Configuracion y levantamiento del servidor
require("dotenv").config();
require("./database");
app.use(require("./routes/users"));
app.use(require("./routes/user-device"));
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
