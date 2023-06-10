const express = require('express')
const router = express.Router()
const Usuario = require('../controllers/users.control')

router.get('/', Usuario.teste);
router.post('/listar', Usuario.listarInfo)
router.put('/alterar/:id', Usuario.alterar)
router.get('/telefones/:id', Usuario.listarTel)
router.get('/enderecos/:id', Usuario.listarEndereco)

module.exports = router;