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
    const usuario = await ModelCriarUser.findOne({ email });
    if (usuario) {
        //verificar se a senha digitada da match com a criptografada
        const match = await bcrypt.compare(senha, usuario.senha)
        // Usuário encontrado
        if (match) {
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
    const urlRandom = await CryptoJS.lib.WordArray.random(30).toString();
    const usuario = await ModelCriarUser.find({ email })
    if (usuario.length != 0) {
        await ModelCriarUser.updateOne({ email }, { $set: { temp: [urlRandom, horaDaChamada] } })
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
                        message: `Aqui está o link para você recuperar sua conta, ele tem prazo de 5 minutos. http://localhost:5173/novaSenha/${urlRandom}`,
                    }
                };
                axios.post('https://api.emailjs.com/api/v1.0/email/send', data).then(() => {
                    return res.status(200).json({ message: "E-mail enviado", success: true })
                }).catch((error) => {
                    return res.status(500).json({ message: "Problema no servidor", erro: error, success: false })
                });
            }).catch(err => { return res.json({ erro: err }) })
    } else {
        return res.status(404).json({ message: "usuário não localizado.", success: false })
    }
}

async function verificarUrl(req, res) {
    const { senha, url } = req.body;

    // Verifica se a senha e a URL foram enviadas no corpo da requisição.
    if (!senha || !url) {
        return res.json({ status: "erro", success: false, message: "Você não tem acesso." });
    }

    // Procura pelo documento com o campo "temp" igual a `url`.
    const dados = await ModelCriarUser.find({ temp: url });

    if (dados.length > 0) {
        const { temp, email } = dados[0];

        // Obtém a hora atual em milissegundos.
        const horaAtual = new Date().getTime();

        // Obtém a hora armazenada em milissegundos.
        const horaBanco = temp[1];
        const dataArmazenada = new Date();
        dataArmazenada.setHours(horaBanco.split(":")[0]);
        dataArmazenada.setMinutes(horaBanco.split(":")[1]);
        dataArmazenada.setSeconds(horaBanco.split(":")[2]);
        const horaArmazenada = dataArmazenada.getTime();

        // Calcula a diferença em minutos entre as duas horas.
        const diferencaMin = (horaAtual - horaArmazenada) / 1000 / 60;
        const minArredondado = Math.floor(diferencaMin);

        // Esvazia os arquivos temporários
        await ModelCriarUser.updateOne({ email }, { $set: { temp: [] } });
        // Verifica se já se passaram 5 minutos ou mais desde o armazenamento da hora.
        if (minArredondado >= 5) {
            return res.status(422).json({ status: "Erro", message: "Link expirou.", success: false });
        }
        const salt = bcrypt.genSaltSync(10);
        const novaSenha = bcrypt.hashSync(senha, salt);
        await ModelCriarUser.updateOne({ email }, { $set: { senha: novaSenha } });
        return res.json({ status: "Concluido!", message: "Tudo certo!", success: true });
    }

    return res.status(404).json({ status: "erro", success: false, message: "Você não tem acesso." });
}
module.exports = { verificarAcesso, cadastrarUsuario, pegarDados, recuperarConta, verificarUrl }