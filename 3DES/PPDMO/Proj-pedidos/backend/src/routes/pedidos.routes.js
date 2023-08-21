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
            id: req.user._id,
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
        const itens = await Item.find({ idCliente: idCliente }).lean();
        return itens;
    } catch (err) {
        return { erro: "Não foi possível pesquisar os itens: " + err };
    }
}

router.get('/menu', async (req, res) => {
    const logged = isLogged(req, res)
    var itensCardapio
    var itensCarrinho
    if (logged) {
        itensCarrinho = await theresItens(req, res, logged.id);
    }

    itensCardapio = await Cardapio.find().lean()

    res.render('pedidos/cardapio', { logged: logged, opcoes: itensCardapio, itensCarrinho: itensCarrinho })
})

router.post('/addCarrinho/:id', (req, res) => {
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
        const novoCarrinho = {
            idProduto: idPedido,
            idCliente: req.user._id,
            nome: nome,
            quantidade: quantidade,
            valor: preco * quantidade,
        }

        new Item(novoCarrinho).save().then(() => {
            req.flash("success_msg", "Item salvo com sucesso")
            res.redirect("/menu")
        }).catch(err => {
            req.flash('error_msg', 'Não foi possivel salvar este item')
            res.redirect('/menu')
        })
    }
})

router.post('/excluirItem/:id', (req, res) => {
    Item.deleteOne({ _id: req.params.id }).then(() => {
        req.flash('success_msg', "Item deletado do carrinho com sucesso")
        res.redirect('/menu')
    }).catch(error => {
        req.flash('error_msg', "Item não encontrado")
        res.redirect('/menu')
    })
})

router.post('/addPedido', (req, res) => {
    const logged = isLogged(req, res)
    const { paraEntregar, cep, endereco } = req.body
    var valEntrega = 0
    var valor = 0
    var array = []
    var erros = []


    if (paraEntregar === 'on' && !cep || typeof cep == undefined || cep == null) {
        erros.push({ "texto": "Você deve informar o CEP para a entrega" })
    }

    if (paraEntregar === 'on' && !endereco || typeof endereco == undefined || endereco == null) {
        erros.push({ "texto": "Você deve informar o número para a entrega" })
    }

    if (erros.length != 0) {
        const mensagensErros = erros.map(erro => erro.texto)
        req.flash("error_msg", mensagensErros)
        res.redirect('/')
    } else {
        Item.find({ idCliente: logged.id }).lean().then(item => {
            item.forEach(element => {
                var itens = {}
                valor += element.valor
                itens.nome = element.nome
                itens.quantidade = element.quantidade
                array.push(itens)
            })

            const novoPedido = {
                "idCliente": logged.id,
                "valorPedido": valor,

                "itens": array
            }

            if (paraEntregar == 'on') {
                novoPedido.paraEntrega = true
                novoPedido.cep = cep
                novoPedido.endereco = endereco
                novoPedido.valorEntrega = 5
            }

            new Pedido(novoPedido).save().then(() => {
                Item.deleteMany({ idCliente: logged.id }).then(() => {
                    req.flash("success_msg", "Pedido salvo com sucesso")
                    res.redirect('/pedidos')
                }).catch(err => {
                    console.error('Erro ao excluir itens do carrinho: ' + err)
                    req.flash('error_msg', "Erro ao salvar o pedido")
                    res.redirect('/')

                })
            }).catch(err => {
                req.flash("error_msg", "Não foi possivel salvar o pedido")
                console.log(err)
                res.redirect('/')
            })
        }).catch(err => {
            req.flash("error_msg", "Este cliente não existe")
            res.redirect('/')
        })
    }


})

router.get('/pedidos', async (req, res) => {
    const logged = isLogged(req, res);

    if (logged) {
        const itens = await theresItens(req, res, logged.id);
        const pedidos = await Pedido.find({ idCliente: logged.id }).lean();

        pedidos.forEach(pedido => {
            var array = []; // Nova declaração aqui
            pedido.itens.forEach(itemPedido => {
                array.push({ nome: itemPedido.nome, quantidade: itemPedido.quantidade });
            });
            pedido.array = array; // Adiciona o array ao pedido
        });
        res.render('pedidos/pedidos', { itensCarrinho: itens, logged: logged, pedidos: pedidos });
    } else {
        req.flash('error_msg', "Você precisa estar logado para acessar esta página");
        res.redirect('/');
    }
});

router.get('/listarPedidos', (req, res) => {
    var vetor = []
    Pedido.find({ 'paraEntrega': true }).lean().then(pedidos => {
        pedidos.forEach(pedido => {
            vetor.push(pedido)
        })
        res.send(vetor)
    })
})

router.post('/entregaPronta', (req, res) => {
    const { dataEntrega, idPedido } = req.body


    Pedido.findOne({ _id: idPedido }).then(pedido => {

        console.log(pedido)

        pedido.dataEntrega = dataEntrega

        pedido.save().then(() => {
            return res.status(202).json({ "Sucesso": "Pedido foi entregue com sucesso!" }).end()
        }).catch(error => {
            return res.status(400).json({ "Erro": "Não foi possível remover o pedido: " + error }).end()
        })
    }).catch(err => {
        console.log("Não foi possível encontrar o pedido: " + err)
    })
})



module.exports = router