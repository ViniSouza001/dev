const con = require('../dao/connect')

const infoArea = (req, res) => {
    // n° da área, modelo e preço dos carros + botão de comprar
    const { numArea } = req.body
    const string = `SELECT a.modelo, a.preco
    FROM automoveis a
    INNER JOIN alocacao al ON a.id = al.automovelId
    WHERE al.area = ${numArea};`

    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).json({ 'success': result }).end()
        } else {
            res.status(404).json(err).end()
        }
    })
}
