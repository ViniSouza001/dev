const express = require('express')
const router = express.Router()
const Usuario = require('../controllers/users.control')

// rota de teste
router.get('/teste', Usuario.teste);

// validação
router.post('/listar', Usuario.listarInfo)

// consultas
router.get('/telefones/:id', Usuario.listarTel)
router.get('/enderecos/:id', Usuario.listarEndereco)
router.get('/atualizar/:id', Usuario.atualizarInfo)

// alterações
router.put('/alterar/', Usuario.alterar)
router.put('/endereco/alterar', Usuario.alterarEndereco)
router.put('/telefone/alterar', Usuario.alterarTelefone)

module.exports = router;