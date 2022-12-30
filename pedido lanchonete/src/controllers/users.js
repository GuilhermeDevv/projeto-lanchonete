const bcrypt = require("bcryptjs");
const ModelCriarUser = require("../models/criarUser");
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
}

async function createUser(user) {
    const novoUsuario = new ModelCriarUser(user);
    await novoUsuario.save();
    return novoUsuario;
}
module.exports = { cadastrarUsuario }