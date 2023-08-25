const express = require('express')
const cors = require('cors')
const router = require('./sources/routes/routes')

const app = express()
app.use(cors())
app.use('/', router)
app.use(express.json())

const PORT = 8081
app.listen(PORT, () => {
    console.log('Server runnnig on port: ' + PORT)
})