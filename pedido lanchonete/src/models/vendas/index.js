const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    cliente: String,
    nPedido: Number,
    status: String,
    valor: String

})

const modelVendas = mongoose.model("vendas", schema)

module.exports = modelVendas