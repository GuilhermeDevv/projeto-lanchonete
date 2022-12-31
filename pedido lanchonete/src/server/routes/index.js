const { Router } = require("express");
const express = require("express");
const { verificarAcesso, cadastrarUsuario, pegarDados } = require("../../controllers/users")
const route = require("express").Router();


route.get("/user", pegarDados)
route.post("/criarUsuario", cadastrarUsuario)
route.post("/inicio", verificarAcesso)



module.exports = route