const express = require('express');
const router = express.Router();
const Restaurante = require('../controller/restaurante');

router.get('/', Restaurante.listarRestaurante);

router.post('/login', Restaurante.autenticar);
router.post('/restaurante/:id', Restaurante.pesqRestaurante);

module.exports = router;