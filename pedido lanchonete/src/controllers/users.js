const axios = require("axios")
const CryptoJS = require("crypto-js")
const bcrypt = require("bcryptjs");
const { model } = require("mongoose");
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
    console.log('chamou a requisição')

    const usuario = await ModelCriarUser.findOne({ email });
    if (usuario) {
        // Usuário encontrado
        if (senha == usuario.senha) {
            return res.json({ success: true, message: "Usuário encontrado" });
        }
        return res.json({ success: false, message: "Senha incorreta" });

    } else {
        // Usuário não encontrado
        return res.status(403).json({ success: false, message: "Usuário não encontrado" });
    }
}

async function cadastrarUsuario(req, res) {

    try {
        // Validar input novamente por segurança!
        const { nome, email, senha } = req.body;
        const most = {}
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
        const novoUsuario = await createUser({ nome, email, senha: hash, temp: [""] });
        console.log(novoUsuario)
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


async function recuperarConta(req, res) {
    const { email } = req.body
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const horaDaChamada = `${hours}:${minutes}:${seconds}`
    const stringAleatoria = await CryptoJS.lib.WordArray.random(30).toString();
    const usuario = await ModelCriarUser.find({ email })
    if (usuario) {
        ModelCriarUser.updateOne({ email }, { $set: { temp: [stringAleatoria, horaDaChamada] } })
            .then(() => {
                const apiKey = 'Uipg6U1WQHVEuBTWs';
                const data = {
                    service_id: 'gmail',
                    template_id: 'tamplete',
                    user_id: apiKey,
                    accessToken: "2ZNA1D4ZimRYqQ9KSraaV",
                    template_params: {
                        destinatario: email,
                        nome: usuario[0].nome,
                        message: 'Aqui está o link para você recuperar sua conta, ele tem prazo de 5 minutos.',
                    }
                };
                axios.post('https://api.emailjs.com/api/v1.0/email/send', data).then((response) => {
                    return res.status(200).json({ message: "E-mail enviado", success: true })
                }).catch((error) => {
                    return res.status(500).json({ message: "Problema no servidor", erro: error, success: false })
                });
            }).catch(err => { return res.json("erroaodoad" + err) })
    }
    return res.status(404).json({ message: "usuário não localizado.", success: false })
}
module.exports = { verificarAcesso, cadastrarUsuario, pegarDados, recuperarConta }