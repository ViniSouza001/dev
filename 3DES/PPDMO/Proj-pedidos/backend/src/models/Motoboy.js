const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MotoboySchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    }
})
const Motoboy = mongoose.model('motoboy', MotoboySchema)

// var novoItem = new Motoboy({
//     nome: 'Andre Izidro',
//     placa: 'ABC-1234',
//     modelo: 'Titan'
// })

// novoItem.save()
//     .then(() => {
//         console.log('item salvo com sucesso');
//     })
//     .catch(err => {
//         console.log('erro ao salvar o item: ' + err);
//     })