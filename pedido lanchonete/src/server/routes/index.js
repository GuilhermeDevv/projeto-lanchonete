const express = require("express");
const { cadastrarUsuario } = require("../../controllers/users");
const route = require("express").Router();

route.post("/criarUsuario", cadastrarUsuario)



module.exports = route