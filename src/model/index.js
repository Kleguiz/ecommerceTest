//const data = require("../../data.json");
const { connectToMongoDB, discconectToMongoDB } = require("../config/index");

class ProductosModel {
  static async getAll() {
    try {
      const clienteMongo = await connectToMongoDB();
      if (!clienteMongo) {
        throw Error("Error al conectar con la bdd");
      }
      const result = await clienteMongo
        .db("tienda")
        .collection("productos")
        .find()
        .toArray();
      await discconectToMongoDB();
      console.log(result);
      if (!result) return { data: null, error: true };
      return { data, error: false };
    } catch (error) {
      return error;
    }
  }
}

module.exports = ProductosModel;
