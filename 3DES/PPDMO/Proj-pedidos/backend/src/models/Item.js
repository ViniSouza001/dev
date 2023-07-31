const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Item = new Schema({
    idProduto: {
        type: Schema.Types.ObjectId,
        ref: "cardapio",
        required: true
    },
    idCliente: {
        type: Schema.Types.ObjectId,
        ref: "clientes",
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
})

mongoose.model('itens', Item)