const router = require('express').Router()

router.get('/teste', (req, res) => {
    res.send('servidor rodando')
})

module.exports = router