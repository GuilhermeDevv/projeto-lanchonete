const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    nome: String,
    senha: String,
    email: String,
    temp: [String],
})

const ModelCriarUser = mongoose.model("usuario", schema)

module.exports = ModelCriarUser


