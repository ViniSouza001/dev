const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cliente = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
})

mongoose.model('clientes', Cliente)