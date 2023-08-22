const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// model clientes
require('../models/Cliente')
const Cliente = mongoose.model('clientes')

module.exports = function (passport) {

   // qual campo queremos analisar (email)
   passport.use(new localStrategy({ usernameField: "email", passwordField: "senha" }, (email, senha, done) => {
      Cliente.findOne({ email: email }).then(cliente => {
         if (!cliente) {
            return done(null, false, { message: "Essa conta não existe" })
         }

         bcrypt.compare(senha, cliente.senha, (erro, batem) => {
            if (batem) {
               return done(null, cliente)
            } else {
               return done(null, false, { message: "Senha incorreta" })
            }
         })
      })
   }))

   passport.serializeUser((cliente, done) => {
      done(null, cliente.id)
   })

   passport.deserializeUser((id, done) => {
      Cliente.findById(id)
         .then(cliente => {
            done(null, cliente)
         }).catch(err => done(err))
   })
}