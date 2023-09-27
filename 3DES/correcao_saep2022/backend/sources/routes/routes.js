const express = require('express')
const router = express.Router()
const alocacao = require("../controllers/alocacao")

router.get('/', alocacao.readAll)
router.get("/areas", alocacao.readArea)

module.exports = router