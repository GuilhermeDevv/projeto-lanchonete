const modelVendas = require("../models/vendas/index")


async function listarVendas(req, res) {

    //desestruturando numero do pedido da requisição.
    const { nPedido } = await req.query
    if (!nPedido) {
        return res.status(404).json({ "status": "failed", mensagem: "erro, campo em branco.", success: false })
    }

    modelVendas.find({ nPedido }, (err, data) => {
        if (err) {
            return res.status(500).json({ "status": "failed", mensagem: "erro em nosso servidor", success: false })
        }
        if (!data.length) {
            return res.status(404).json({ "status": "false", mensagem: 'Pedido não encontrado', success: false })
        }
        return res.json({ "status": "success", mensagem: data, success: true })
    })
}

module.exports = { listarVendas }
