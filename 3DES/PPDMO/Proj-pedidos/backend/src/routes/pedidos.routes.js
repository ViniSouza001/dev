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
        res.render('pedidos/cardapio', { itens: itens })
    }).catch(err => {
        console.log("Não foi possível pesquisar os itens do cardapio: " + err);
        res.redirect('/')
    })
})



router.post('/addPedido/:id', (req, res) => {
    const idPedido = req.params.id
    const { quantidade, preco } = req.body
    var erros = []

    if (!req.user) {
        erros.push({ "texto": "Você deve estar logado para fazer pedidos" })
    }

    if (!idPedido || typeof idPedido == undefined || idPedido == undefined) {
        erros.push({ "texto": "Este item do cardápio não existe" })
    }

    if (quantidade == 0) {
        erros.push({ "texto": "A quantidade do item pedido deve ser no mínimo 1" })
    }

    if (erros.length > 0) {
        const mensagensErros = erros.map(erro => erro.texto)
        req.flash("error_msg", mensagensErros)
        res.redirect('/menu')
    } else {
        const novoPedido = {
            idProduto: idPedido,
            quantidade: quantidade,
            valor: preco * quantidade
        }

        new Item(novoPedido).save().then(() => {
            req.flash("success_msg", "Item salvo com sucesso")
            res.redirect("/menu")
        }).catch(err => {
            req.flash('error_msg', 'Não foi possivel salvar este item')
            res.redirect('/menu')
        })
    }
})

module.exports = router