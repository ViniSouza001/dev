const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Motoboy')
const Motoboy = mongoose.model('motoboy')
router.get('/motoboys', (req, res) => {
    Motoboy.find().lean().then(todos => {
        todos.forEach(motoboy => {
            res.send(motoboy)

        })
    })
})

module.exports = router