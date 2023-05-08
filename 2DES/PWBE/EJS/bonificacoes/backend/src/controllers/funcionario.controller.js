const Funcionario = require('../models/funcionario.model.js');
const con = require('../dao/connect.js');

const cadastrar = (req, res) => {
    let funcionario = new Funcionario(req.body);
    con.query(funcionario.create(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json({error: err}).status(400).end();
        }
    });
}

const listar = (req, res) => {

    let funcionario = new Funcionario(req.body);

    con.query(funcionario.read(), (err, result) => {
        if(err == null) {
            res.render('index', {titulo: "Lista de funcionarios", dados: result})
        } else{
            res.status(400).json(err).end()
        }
    });
}

const alterar = (req, res) => {
    let funcionario = new Funcionario((req.body));
    con.query(funcionario.update(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json({error: err}).status(400).end();
        }
    })
}

const excluir = (req, res) => {
    let funcionario = new Funcionario(req.params);
    con.query(funcionario.delete(), (err, result) => {
        if(err == null) {

            if(result.affectedRows == 0) {
                res.json({erro: "Não foi encontrado funcionario com a matricula pesquisada"}).status(404).end();
            } else {
                res.json({success: result}).status(200).end();
            }

            res.json({success: result}).status(200).end();
        } else {
            res.json({error: err}).status(400).end();
        }
    });
}

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir
}