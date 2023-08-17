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

const Pedido = mongoose.model('pedidos', PedidoSchema)

// var novoPedido = new Pedido({
//     "idCliente": '_id: ObjectId("64cb915bcf75126f99c5105d")',
//     "valorPedido": 300,
//     "paraEntrega": true,
//     "cep": "13920-000",
//     'endereco': "alameda Cambuci",
//     "valorEntrega": "210",
//     "itens": ["Coca cola 300ml", "Frango a passarinho", "Mortadela defumada", "Marmita tamanho GG"]

// })

// novoPedido.save().then(() => console.log('pedido salvo com sucesso'))
//     .catch(err => console.log('erro ao salvar o pedido: ' + err))