const express = require("express")
const route = require("express").Router();
route.get("/", (req, res) => {

    return res.json({ status: "okay" })

})

module.exports = route