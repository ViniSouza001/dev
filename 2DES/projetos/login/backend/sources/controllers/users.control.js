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
                res.status(202).json(response).end();
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
    con.query(user.alterarUser(), (err, response) => {
        if(err) {
            res.json(err).status(400).end()
        } else {
            res.json(response).status(200).end()
        }
    })
}

const alterarTelefone = (req, res) => {
    let telefone = new Usuario(req.body)
    con.query(telefone.alterarTelefone(), (err, result) => {
        if (err) {
            res.status(400).json({error: err}).end()
        } else {
            res.status(200).json(result).end()
        }
    })
}

const alterarEndereco = (req, res) => {
    let endereco = new Usuario(req.body)
    con.query(endereco.alterarEndereco(), (err, result) => {
        if(err) {
            res.status(400).json({error: err}).end()
        } else {
            res.json(result).status(200).end()
        }
    })
}

const atualizarInfo = (req, res) => {
    let info = new Usuario(req.params)
    con.query(info.atualizarInfo(), (err, result) => {
        if(err) {
            res.status(404).json({error: err}).end()
        } else {
            res.json(result).status(200).end()
        }
    })
}

const teste = (req, res) => {
    res.json('Servidor rodando!')
}

module.exports = {
    listarInfo,
    alterar,
    teste,
    listarTel,
    listarEndereco,
    alterarTelefone,
    alterarEndereco,
    atualizarInfo
}