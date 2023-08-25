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

module.exports = {
    infoArea,
    testar

}