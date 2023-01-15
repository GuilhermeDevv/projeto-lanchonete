const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    cliente: String,
    nPedido: Number,
    status: String,
    valor: String

})

const modelVendas = mongoose.model("produtos", schema)

module.exports = modelVendas