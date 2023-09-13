const con = require('../connect')

const listar = (req, res) => {
    con.query("Select * from livros", (err, result) => {
        if (err === null) {
            res.json(result).status(200).end()
        } else {
            res.json(err).status(404).end()
        }
    })
}

module.exports = { listar }