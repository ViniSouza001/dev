const Usuario = require('../models/users.model')
const con = require('../dao/connection')

const listarInfo = (req, res) => {
    let user = new Usuario(req.body)
    con.query(user.readInfo(), (err, result) => {
        if(err) {
            res.status(401).json(err).end()
        } else {
            if(response.length === 0) {
                res.status(401).json({'msg': 'Matricula ou senha inválidos'}).end()
            } else {
                let usuario = result[0]
                res.status(200).json(usuario).end();
            }
        }
    })
}

const listarTel = (req, res) => {
    let user = new Usuario(req.params)
    con.query(user.readTel(), (err, result) => {
        if(err){
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
    res.json('Home')
}

module.exports = {
    listarInfo,
    alterar,
    teste,
    listarTel
}