const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
require('../models/Pedido')
require('../models/Cardapio')
require('../models/Item')
const Pedido = mongoose.model('pedidos')
const Cardapio = mongoose.model('cardapio')
const Item = mongoose.model('itens')

function isLogged (req, res) {
    if (req.user) {
        return {
            nome: req.user.nome,
            email: req.user.email,
            telefone: req.user.telefone,
            endereco: req.user.endereco
        }
    } else {
        return false
    }
}

async function theresItens (req, res, idCliente) {
    try {
        const itens = await Item.find({ idCliente: idCliente }).populate("idProduto").lean();
        console.log(itens)
        return itens;
    } catch (err) {
        return { erro: "Não foi possível pesquisar os itens: " + err };
    }
}

router.get('/menu', async (req, res) => {
    const logged = isLogged(req, res)

    var itens;
    if (logged) {
        itens = await theresItens(req, res, logged.id);
    }

    Cardapio.find().lean().then(opcoes => {
        res.render('pedidos/cardapio', { opcoes: opcoes, logged: logged, itens: itens })
    }).catch(err => {
        console.log("Não foi possível pesquisar os itens do cardapio: " + err);
        res.redirect('/')
    })
})

router.post('/addPedido/:id', (req, res) => {
    const idPedido = req.params.id
    const { quantidade, preco, nome } = req.body
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
            idCliente: req.user._id,
            nome: nome,
            quantidade: quantidade,
            valor: preco * quantidade,
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

router.get('/pedidos', async (req, res) => {
    const logged = isLogged(req, res)
    var itens;
    if (logged) {
        itens = await theresItens(req, res, logged.id);
    }
    res.render('pedidos/pedidos', { logged: logged, itens: itens })
})

module.exports = router