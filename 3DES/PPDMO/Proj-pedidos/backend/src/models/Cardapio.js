const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CardapioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    entrada: {
        type: String,
        required: true
    },
    principal: {
        type: String,
        required: true
    },
    sobremesa: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    }
})

const Cardapio = mongoose.model('cardapio', CardapioSchema)

// var novoItem = new Cardapio({
//     nome: "Aromas Asiáticos",
//     entrada: "Gyoza de Porco ao Molho Ponzu",
//     principal: "Pad Thai Tradicional",
//     sobremesa: "Temperatura de Sorvete com Calda de Gengibre",
//     preco: 55
// })

// novoItem.save()
//     .then(() => {
//         console.log('item salvo com sucesso');
//     })
//     .catch(err => {
//         console.log('erro ao salvar o item: ' + err);
//     })

// novoItem = new Cardapio({
//     nome: "Aromas do Mar",
//     entrada: "Ceviche de Peixe Branco",
//     principal: "Risoto de Frutos do Mar",
//     sobremesa: "Pavlova com Frutas Exóticas",
//     preco: 75
// })

// novoItem.save()
//     .then(() => {
//         console.log('item salvo com sucesso');
//     })
//     .catch(err => {
//         console.log('erro ao salvar o item: ' + err);
//     })

// novoItem = new Cardapio({
//     nome: "Clássicos do Velho Oeste",
//     entrada: "Bolinhos de Caranguejo com Aioli de Limão",
//     principal: "Bife Ancho com Molho de Vinho Tinto",
//     sobremesa: "Torta de Maçã Clássica",
//     preco: 50
// })

// novoItem.save()
//     .then(() => {
//         console.log('item salvo com sucesso');
//     })
//     .catch(err => {
//         console.log('erro ao salvar o item: ' + err);
//     })