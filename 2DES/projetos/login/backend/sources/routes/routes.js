const express = require('express')
const router = express.Router()
const Usuario = require('../controllers/users.control')

router.get('/', Usuario.teste);
router.get('/listar/:id', Usuario.listarInfo)
router.post('/alterar', Usuario.alterar)
router.get('/telefones/:id', Usuario.listarTel)

module.exports = router;