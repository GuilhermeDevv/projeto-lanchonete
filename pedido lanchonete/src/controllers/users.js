function cadastrarUsuario(req, res) {

    const { nome, email, senha } = req.body

    return req.json({ nome, email, senha })
}