const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Counter = require('./Counter')

const PedidoSchema = new Schema({
    idCliente: { type: String, required: true },
    idPedido: { type: Number, unique: true },
    valorPedido: { type: Number, required: true },
    paraEntrega: { type: Boolean, default: false },
    cep: { type: String, required: false },
    endereco: { type: String, required: false },
    valorEntrega: { type: Number, required: false },
    dataPedido: { type: Date, default: Date.now() },
    dataCozinha: { type: Date, required: false },
    dataEntrega: { type: Date, required: false },
    status: { type: String, required: false },
    itens: { type: Array, required: true }
})

PedidoSchema.pre('save', async function (next) {
    const doc = this
    if (doc.isNew) {
        const counter = await Counter.findByIdAndUpdate(
            'pedidoId',
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        )
        doc.idPedido = counter.seq
    }
    return next()
})

mongoose.model('pedidos', PedidoSchema)