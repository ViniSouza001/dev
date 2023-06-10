const Usuario = require('../models/users.model')
const con = require('../dao/connection')

const listarInfo = (req, res) => {
    let user = new Usuario(req.body)
    con.query(user.readInfo(), (err, response) => {
        if(err) {
            res.status(404).json(err).end()
        } else {
            if(response.length === 0) {
                res.status(404).json({'msg': 'Matricula ou senha inválidos'}).end()
            } else {
                let usuario = response[0]
                res.status(200).json(response).end();
            }
        }
    })
}

const listarTel = (req, res) => {
    let user = new Usuario(req.params)
    con.query(user.readTel(), (err, response) => {
        if(err){
            res.json(err).status(400).end()
        } else {
            res.json(response).status(200).end()
        }
    })
}

const listarEndereco = (req, res) => {
    const user = new Usuario(req.params)
    con.query(user.readAddress(), (err, response) => {
        if(err) {
            res.json({error: err}).status(404).end()
        } else {
            res.json(response).status(200).end()
        }
    })
}

const alterar = (req, res) => {
    let user = new Usuario(req.body)
    con.query(user.alterar(), (err, response) => {
        if(err) {
            res.json(err).status(400).end()
        } else {
            res.json(response).status(200).end()
        }
    })
}

const teste = (req, res) => {
    res.json('Home')
}

module.exports = {
    listarInfo,
    alterar,
    teste,
    listarTel,
    listarEndereco
}