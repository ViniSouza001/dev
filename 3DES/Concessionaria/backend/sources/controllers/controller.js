const con = require('../dao/connect')

const infoArea = (req, res) => {
    // n° da área, modelo e preço dos carros + botão de comprar
    const { area } = req.params
    const string = `SELECT a.modelo, a.preco
    FROM automoveis a
    INNER JOIN alocacao al ON a.id = al.automovelId
    WHERE al.area = ${area};`

    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(404).json(err).end()
        }
    })
}

const testar = (req, res) => {
    const string = `SELECT * from automoveis;`
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).send(result).end()
        } else {
            res.status(404).json(err).end()
        }
    })
}

const clientes = (req, res) => {
    const str = "Select * from clientes;"
    con.query(str, (err, result) => {
        if (err) {
            res.status(404).json({ error: err }).end()
        } else {
            res.json(result).status(200).end()
        }
    })
}

const concessionarias = (req, res) => {
    const str = "Select * from concessionarias;"
    con.query(str, (err, result) => {
        if (err) {
            res.status(400).json({ error: err }).end()
        } else {
            res.status(200).json(result).end()
        }
    })
}

module.exports = {
    infoArea,
    testar,
    clientes,
    concessionarias
}