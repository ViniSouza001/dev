const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
require('../models/Pedido') // model de pedidos
const Pedido = mongoose.model('pedidos')

router.get('/usuarios/registro', (req, res) => {
    res.render('usuarios/')
})

router.post

module.exports = router