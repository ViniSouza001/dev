require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require("./sources/routes/routes")

app.use(express.json())
app.use(cors())
app.use(router)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${ PORT }`)
})
