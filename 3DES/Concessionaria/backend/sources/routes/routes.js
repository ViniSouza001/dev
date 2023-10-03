const router = require('express').Router()
const control = require('../controllers/controller')
const con = require('../dao/connect')


router.get('/teste', control.testar)

router.get('/infoArea/:area', control.infoArea)
router.get('/clientes', control.clientes)
router.get('/concessionarias', control.concessionarias)
router.get('/areas', (req, res) => {

    const query = "SELECT * FROM alocacao group by area;"
    con.query(query, (error, response) => {
        if (!error) {
            return res.status(200).json({ success: true, response }).end()
        } else {
            return res.status(404).json({ success: false, error }).end()
        }
    })
})

module.exports = router