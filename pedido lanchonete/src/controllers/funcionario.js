const { axios } = require("axios");
const modelFuncionario = require("../models/funcionarios")


async function cadastrarFuncionario(req, res) {
    const { nome, genero, cpf, cargo } = await req.body

    if (!nome || !genero || !cpf || !cargo) {
        return res.status(404).json({ messeger: "Erro, dados em branco", success: false })
    }
    const dados = {
        nome,
        genero,
        cpf,
        cargo
    }

    


    return res.json({ dados })
}


module.exports = { cadastrarFuncionario }

