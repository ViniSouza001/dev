const con = require('../dao/connect.js');

const autenticar = (req, res) => {
    const { email, senha } = req.body;
    let query = `SELECT * FROM cliente WHERE email = '${email}' AND senha = '${senha}'`;
    con.query(query, (err, response) => {
        if(err == null) {
            if(response.length == 0) {
                res.status(401).json({"msg": "Matricula ou senha inválidos"}).end();
            } else {
                let corretor = response[0];
                delete corretor.senha;

                res.status(200).json(corretor).end();
            }
        } else {
            res.status(401).json(err).end();
        }
    });
}

const listarRestaurante = (req,res) => {
    let query = `select * from vw_restaurante`;
    con.query(query, (err, response) => {
        if(err == null) {
            res.status(200).json(response).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const pesqRestaurante = (req, res) => {
    const { id } = req.params
    let query = `SELECT r.nome AS restaurante, r.endereco, a.nota AS avaliacao,
    GROUP_CONCAT(c.descricao SEPARATOR ', ') AS cardapio, a.descricao
    FROM restaurante r
    LEFT JOIN avaliacao a ON  a.restauranteId = r.id
    LEFT JOIN cardapio c ON c.restauranteId = r.id
    WHERE r.id = ${id};`

    con.query(query, (err, response) => {
        if(err){
            res.json(err).status(400).end();
            return;
        }

        if(response.restaurante == null) {
            res.json(response[0]).status(200).end();
        } else {
            res.json('Não foi encontrado esse ID do restaurante').status(400).end();
        }
    });
}

module.exports = {
    autenticar,
    listarRestaurante,
    pesqRestaurante
}