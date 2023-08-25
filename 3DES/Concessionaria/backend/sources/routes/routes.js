const router = require('express').Router()
const control = require('../controllers/controller')

router.get('/teste', control.testar)

router.get('/infoArea/:area', control.infoArea)

module.exports = router