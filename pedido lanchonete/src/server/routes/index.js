const { Router } = require("express");
const express = require("express");
//publico
const { verificarAcesso, cadastrarUsuario, pegarDados, recuperarConta, verificarUrl } = require("../../controllers/users")

//admin
const { cadastrarFuncionario, listarFuncionario } = require("../../controllers/funcionario")
const { listarVendas } = require('../../controllers/vendas')


//middleware
const route = require("express").Router();


//publico
route.get("/user", pegarDados)
route.post("/criarUsuario", cadastrarUsuario)
route.post("/inicio", verificarAcesso)
route.post("/recuperar", recuperarConta)
route.post("/novaSenha", verificarUrl)



//admin
route.post("/cadastrarFuncionario", cadastrarFuncionario)
route.get("/listarFuncionario", listarFuncionario)
route.get("/listarVendas", listarVendas)

module.exports = route