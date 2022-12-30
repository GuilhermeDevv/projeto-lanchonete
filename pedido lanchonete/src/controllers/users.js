const bcrypt = require("bcryptjs");

async function cadastrarUsuario(req, res) {
    try {
        // validar input novamente@
        const { nome, email, senha } = req.body;
        if (!nome || !email || !senha) {
            return res.status(400).json({ error: "Dados inválidos" });
        }

        // Criptografia da senha do usuario
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(senha, salt);

        // Criar usuario
        const novoUsuario = await createUser({ nome, email, senha: hash });

        // Return response
        return res.json({ nome, email });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Falha ao criar usuário" });
    }
}

async function createUser(user) {
    const ModelCriarUser = require("../models/criarUser");
    const novoUsuario = new ModelCriarUser(user);
    await novoUsuario.save();
    return novoUsuario;
}
module.exports = { cadastrarUsuario }