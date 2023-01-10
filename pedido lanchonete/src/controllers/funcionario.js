const { axios } = require("axios");
const modelFuncionario = require("../models/funcionarios")

async function cadastrarFuncionario(req, res) {
    // Destruturação dos dados do corpo da requisição
    const { nome, genero, cpf, cargo } = req.body;

    // Verifica se os campos obrigatórios estão presentes
    if (!nome || !genero || !cpf || !cargo) {
        return res.status(404).json({ mensagem: "Erro, dados em branco", sucesso: false });
    }

    // Cria uma nova instância do modelo Funcionario
    const funcionario = new modelFuncionario({ nome, genero, cpf, cargo });

    // Salva a nova instância do modelo Funcionario no banco de dados
    await funcionario.save();

    // Retorna uma resposta de sucesso
    return res.json({ mensagem: "Sucesso, funcionário cadastrado", sucesso: true });
}



module.exports = { cadastrarFuncionario }

