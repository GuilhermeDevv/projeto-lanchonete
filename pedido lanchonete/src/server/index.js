const express = require("express")
const cors = require("cors")
const app = express()
const route = require("./routes")
const db = require("../database")

app.use(express.json())
app.use(cors())
db.connect()
app.use("/", route)




const port = process.env.PORT || 8080
app.listen(port)