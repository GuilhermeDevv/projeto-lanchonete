const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    nome: string,
    senha: string,
    senha: string
})

const ModelCriarUser = mongoose.model("usuario", schema)

module.exports = ModelCriarUser


