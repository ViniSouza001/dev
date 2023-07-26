const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
require("../models/Cliente");
const bcrypt = require('bcrypt')
const passport = require('passport')
const Cliente = mongoose.model("clientes");

router.get("/", (req, res) => {
  res.render("usuarios/home");
});

router.get("/usuarios/registro", (req, res) => {
  res.render("usuarios/registro");
});

router.get('/usuarios/login', (req, res) => {

  if(req.user) {
    req.flash('error_msg', "Você já está autenticado")
    res.redirect('/')
  } else {
    res.render('usuarios/login')
  }
})

router.post('/login', (req, res) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failure
  })
})

router.post("/registro", (req, res) => {
  const { nome, endereco, telefone, email, senha1, senha2 } = req.body;
  var erros = []

  if (!nome || typeof nome === undefined || nome == null) {
    erros.push({ "texto": "Nome inválido" })
  }

  if (!endereco || typeof endereco === undefined || endereco == null) {
    erros.push({ "texto": "Endereco inválido" })
  }

  if (!email || typeof email === undefined || email == null) {
    erros.push({ "texto": "Email inválido" })
  }

  if (senha1 != senha2) {
    erros.push({ "texto": "As senhas não conferem" })
  }

  if (senha1.length <= 3 || senha2.length <= 3) {
    erros.push({ "texto": "Senha deve ter no mínimo 4 caracteres" })
  }

  if (erros.length > 0) {
    res.render("usuarios/registro", { erros: erros })
  } else {

    Cliente.findOne({ email: email }).lean().then(cliente => {
      if (cliente) {

        req.flash("error_msg", "Já existe uma conta cadastrada com este email")
        res.redirect('/')

      } else {

        const novoCliente = new Cliente({
          nome: nome,
          endereco: endereco,
          telefone: telefone,
          email: email,
          senha: senha1
        })

        // encriptografar a senha com hash

        bcrypt.genSalt(10, (erro, salt) => {
          bcrypt.hash(novoCliente.senha, salt, (erro, hash) => {
            if (erro) {
              req.flash("error_msg", "Houve um erro interno ao salvar o cliente")
              res.redirect('/usuarios/registro')
            }

            novoCliente.senha = hash

            novoCliente.save().then(() => {
              req.flash("success_msg", "Cliente cadastrado com sucesso")
              res.redirect('/')
            }).catch((err) => {
              req.flash("error_msg", "Não foi possível salvar o cliente")
              res.redirect('/')
            })
          })
        })
      }
    })
  }
});

module.exports = router;
