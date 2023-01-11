const { axios } = require("axios");
const modelFuncionario = require("../models/funcionarios")

async function cadastrarFuncionario(req, res) {
    // Destruturação dos dados do corpo da requisição
    const { nome, genero, cpf, cargo, email } = req.body;

    // Verifica se os campos obrigatórios estão presentes
    if (!nome || !genero || !cpf || !cargo || !email) {
        return res.status(404).json({ mensagem: "Erro, dados em branco", sucesso: false });
    }

    const dados = await modelFuncionario.find({ email })
    if (dados.length !== 0) {
        return res.status(404).json({ mensagem: "Erro, Funcionário existente.", sucesso: false })
    }

    // Cria uma nova instância do modelo Funcionario
    const funcionario = new modelFuncionario({ nome, genero, cpf, cargo, email });

    // Salva a nova instância do modelo Funcionario no banco de dados
    funcionario.save();

    // Retorna uma resposta de sucesso
    return res.json({ mensagem: "Sucesso, funcionário cadastrado", sucesso: true });
}



module.exports = { cadastrarFuncionario }

