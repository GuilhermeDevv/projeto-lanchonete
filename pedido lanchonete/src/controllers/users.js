const bcrypt = require("bcryptjs");

const ModelCriarUser = require("../models/criarUser");

function pegarDados(req, res) {
    // Extrair o email da query da requisição
    const { email } = req.query;
    // Procure por um usuário com o email especificado
    ModelCriarUser.find({ email }, (err, user) => {
        // Verifique se houve um erro durante a busca
        if (err) {
            // Retorne um erro 500 (Erro interno do servidor) e o erro
            return res.status(500).json({ error: err });
        }

        // Se o usuário não foi encontrado, retorne um erro 404 (Não encontrado)
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        // Se o usuário foi encontrado, retorne um status 200 (OK) e o usuário
        return res.status(200).json(user);
    });
}

async function verificarAcesso(req, res) {
    const { email, senha } = req.body;
    //verifica se o campo está vazio
    if (!email || !senha) {
        throw new Error("Email e senha são obrigatórios");
    }

    const usuario = await ModelCriarUser.findOne({ email });
    if (usuario) {
        // Usuário encontrado
        return res.json({ success: true, message: "Usuário encontrado" });
    } else {
        // Usuário não encontrado
        return res.json({ success: false, message: "Usuário não encontrado" });
    }
}

async function cadastrarUsuario(req, res) {

    try {
        // Validar input novamente por segurança!
        const { nome, email, senha } = req.body;
        if (!nome || !email || !senha) {
            return res.status(400).json({ error: "Dados inválidos" });
        }

        // Verificar se o email está em uso
        const emailEstaEmUso = await ModelCriarUser.findOne({ email });
        if (emailEstaEmUso) {
            return res.status(400).json({ error: "Email já está em uso" });
        }

        // Criptografando senha
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(senha, salt);

        // Criar user
        const novoUsuario = await createUser({ nome, email, senha: hash });

        //Resposta
        return res.json({ nome, email });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Falha ao criar usuário" });
    }
    async function createUser(user) {
        const novoUsuario = new ModelCriarUser(user);
        await novoUsuario.save();
        return novoUsuario;
    }
}

module.exports = { verificarAcesso, cadastrarUsuario, pegarDados }