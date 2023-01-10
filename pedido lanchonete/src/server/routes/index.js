const { Router } = require("express");
const express = require("express");
//publico
const { verificarAcesso, cadastrarUsuario, pegarDados, recuperarConta, verificarUrl } = require("../../controllers/users")

//admin
const { cadastrarFuncionario } = require("../../controllers/funcionario")

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


module.exports = route