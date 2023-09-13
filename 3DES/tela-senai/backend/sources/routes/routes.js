const express = require('express')
const router = express.Router()
const control = require('../controllers/control')


router.get('/livros', control.listar)

module.exports = router