function cadastrarUsuario(req, res) {

    const { nome, email, senha } = req.body

    return res.json({ nome, email, senha })
}

module.exports = { cadastrarUsuario }