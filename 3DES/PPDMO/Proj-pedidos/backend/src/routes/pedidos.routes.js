const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
require('../models/Pedido') // model de pedidos
require('../models/Cardapio')
require('../models/Item')
const Pedido = mongoose.model('pedidos')
const Cardapio = mongoose.model('cardapio')
const Item = mongoose.model('itens')

router.get('/menu', (req, res) => {
    Cardapio.find().lean().then(itens => {
        res.render('pedidos/cardapio', {itens: itens})
    }).catch(err => {
        console.log("Não foi possível pesquisar os itens do cardapio: " + err);
        res.redirect('/')
    })
})



router.post('/addPedido/:id', (req, res) => {
    const idPedido = req.params.id
    var erros = []
    if (!idPedido || typeof idPedido == undefined || idPedido == undefined) {
        erros.push({ "texto": "Este item do cardápio não existe"  })
    }

    if(erros.length > 1) {
        req.flash("error_msg", erros[0])
        return res.redirect('/menu')
    } else {
        const novoPedido = {
            idProduto: idProduto,
            quantidade: 1
        }
    }
})

module.exports = router