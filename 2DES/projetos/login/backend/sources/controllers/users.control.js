const Usuario = require('../models/users.model')
const con = require('../dao/connection')

const listarInfo = (req, res) => {
    let user = new Usuario(req.params)
    con.query(user.readAll(), (err, result) => {
        if(err) {
            res.json(err).status(400).end()
        } else {
            res.json(result).status(200).end()
        }
    })
}

const alterar = (req, res) => {
    let user = new Usuario(req.body)
    con.query(user.alterar(), (err, result) => {
        if(err) {
            res.json(err).status(400).end()
        } else {
            res.json(result).status(200).end()
        }
    })
}

const teste = (req, res) => {
    res.json('respondendo com sucesso!!')
}

module.exports = {
    listarInfo,
    alterar,
    teste
}