// dependências
const express = require('express')
const app = express()
const cors = require('cors')
const livrosRouter = require('./sources/routes/routes.js')

// Rotas
app.use(express.json())
app.use(cors())
app.use(livrosRouter)

const PORT = 8081
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})