const router = require('express').Router();
const Funcionario = require('../controllers/funcionario.controller.js');

router.get('/funcionarios', Funcionario.listar);
router.get('/funcionarios/:matricula', Funcionario.listar);
router.post('/funcionario/cadastrar', Funcionario.cadastrar);
router.put('/funcionario/alterar', Funcionario.alterar);
router.delete('/funcionario/excluir/:matricula', Funcionario.excluir);

module.exports = router;