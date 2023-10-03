const express = require('express');
const router = express.Router();

const Alocacao = require('./controllers/alocacao');

router.get('/', (req, res) => { res.json('API em execução') });
router.get('/alocacao', Alocacao.readAll);
router.get('/alocacao/area', Alocacao.readArea);

module.exports = router;