const router = require('express').Router()
const control = require('../controllers/controller')

router.get('/teste', control.testar)

router.get('/infoArea/:area', control.infoArea)
router.get('/clientes', control.clientes)
router.get('/concessionarias', control.concessionarias)

module.exports = router