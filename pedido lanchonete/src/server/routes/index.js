const express = require("express");
const { cadastrarUsuario } = require("../../controllers/users");
const route = require("express").Router();
route.get("/", cadastrarUsuario)

module.exports = route