const express = require("express");
const server = express();
const dotenv = require("dotenv");
dotenv.config();
const routerProductos = require("./src/routes/index");

const PORT = process.env.PORT || 3000;

//Rutas que vamos a tener en la app
server.get("/", (req, res) => {
  res.send("API TIENDA");
});

server.use("/api", routerProductos);

//escucha el puerto 3000
server.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});
