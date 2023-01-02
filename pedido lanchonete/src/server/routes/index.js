const { Router } = require("express");
const express = require("express");
const { verificarAcesso, cadastrarUsuario, pegarDados, recuperarConta } = require("../../controllers/users")
const route = require("express").Router();


route.get("/user", pegarDados)
route.post("/criarUsuario", cadastrarUsuario)
route.post("/inicio", verificarAcesso)
route.post("/recuperar", recuperarConta)



module.exports = route