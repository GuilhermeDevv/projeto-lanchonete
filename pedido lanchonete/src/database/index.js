const mongoose = require("mongoose")

function connect() {
    mongoose.set('strictQuery', false)
    mongoose.connect("mongodb://127.0.0.1:27017/lanchonete")
    const db = mongoose.connection


}
module.exports = { connect }