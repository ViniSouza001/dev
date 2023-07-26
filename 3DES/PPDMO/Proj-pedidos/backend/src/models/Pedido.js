const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pedido = new Schema({
    idCliente: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    }
})

mongoose.model('pedidos', Pedido)