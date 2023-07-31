const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
require("../models/Cliente");
const bcrypt = require('bcrypt')
const passport = require('passport')
const Cliente = mongoose.model("clientes");
require('../models/Item')
const Item = mongoose.model('itens')


function isLogged(req, res) {
  if (req.user) {
    return {
      id: req.user._id,
      nome: req.user.nome,
      email: req.user.email,
      telefone: req.user.telefone,
      endereco: req.user.endereco
    }
  } else {
    return false
  }
}

async function theresItens(req, res, idCliente) {
  try {
    const itens = await Item.find({ idCliente: idCliente }).lean();
    console.log(itens)
    return itens;
  } catch (err) {
    return { erro: "Não foi possível pesquisar os itens: " + err };
  }
}

router.get('/', async (req, res) => {
  const logged = isLogged(req, res);
  var itens;
  if (logged) {
    itens = await theresItens(req, res, logged.id);
  }
  res.render('usuarios/home', { logged: logged, itens: itens });
});

router.get("/registro", (req, res) => {
  const logged = isLogged(req, res)
  if (logged) {
    req.flash('error_msg', "Você deve sair da sua conta para criar uma nova")
    res.redirect('/')
  } else {
    res.render("usuarios/registro")
  }
});

router.get('/aboutUs', (req, res) => {
  const logged = isLogged(req, res)
  res.render('usuarios/aboutUs', { logged: logged })
})

router.get('/login', (req, res) => {

  if (req.user) {
    req.flash('error_msg', "Você já está autenticado")
    res.redirect('/')
  } else {
    res.render('usuarios/login')
  }
})

router.post('/login', (req, res, next) => {

  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  }
  )(req, res, next)
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
