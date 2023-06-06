const express = require('express')
const router = express.Router()
const Usuario = require('../controllers/users.control')

router.get('/', Usuario.teste);
router.get('/lisar:id', Usuario.listarInfo)
router.post('/alterar', Usuario.alterar);


module.exports = router