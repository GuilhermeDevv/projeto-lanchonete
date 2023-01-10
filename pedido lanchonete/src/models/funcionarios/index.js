const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    nome: String,
    genero: String,
    cpf: String,
    idade: String,
    cargo: String
})

const ModelFuncionario = mongoose.model("funcionario", schema)

module.exports = ModelFuncionario