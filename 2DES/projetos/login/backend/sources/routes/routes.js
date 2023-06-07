const express = require('express')
const router = express.Router()
const Usuario = require('../controllers/users.control')

router.get('/', Usuario.teste);
router.post('/listar', Usuario.listarInfo)
router.post('/alterar', Usuario.alterar)
router.get('/telefones', Usuario.listarTel)

module.exports = router;