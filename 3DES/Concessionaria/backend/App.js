const express = require('express')
const cors = require('cors')
const router = require('./sources/routes/router')

const app = express()
app.use('/', router)
app.use(cors)
app.use(express.json())

const PORT = 3000
app.listen(PORT, () => {
    console.log('Server runnnig on port: ' + PORT)
})