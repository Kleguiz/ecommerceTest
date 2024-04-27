const express = require("express");
const server = express();
const routerProductos = require("./src/routes/index");
// const data = require("./data.json");

//Rutas que vamos a tener en la app
server.get("/", (req, res) => {
  res.send("API TIENDA");
});

server.use("/api", routerProductos);

//escucha el puerto 3000
server.listen(3000, () => {
  console.log("server running in http://localhost:3000");
});
