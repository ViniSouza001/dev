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
    return itens;
  } catch (err) {
    return { erro: "Não foi possível pesquisar os itens: " + err };
  }
}

router.get('/', async (req, res) => {
  const logged = isLogged(req, res);
  var itensCarrinho;
  if (logged) {
    itensCarrinho = await theresItens(req, res, logged.id);
  }
  res.render('usuarios/home', { logged: logged, itensCarrinho: itensCarrinho });
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

router.get('/aboutUs', async (req, res) => {
  const logged = isLogged(req, res)
  var itensCarrinho;
  if (logged) {
    itensCarrinho = await theresItens(req, res, logged.id);
  }
  res.render('usuarios/aboutUs', { logged: logged, itensCarrinho: itensCarrinho })
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

router.get('/perfil', async (req, res) => {
  const logged = isLogged(req, res)
  var itensCarrinho;
  if (logged) {
    itensCarrinho = await theresItens(req, res, logged.id);
  } else {
    req.flash('error_msg', "Você deve estar logado para entrar nessa página")
    res.redirect('/login')
  }
  res.render('usuarios/perfil', { logged: logged, itensCarrinho: itensCarrinho })
})

function emailUsed(req, res, email) {
  return new Promise((resolve, reject) => {
    Cliente.findOne({ email: email }).lean().then(encontrado => {
      if (encontrado) {
        // Email repetido encontrado
        reject(true)
      } else {
        // Email não encontrado
        resolve(false);
      }
    }).catch(err => {
      req.flash('error_msg', "Houve um erro interno ao verificar o e-mail")
      reject(true);
    });
  });
}

router.post('/atualizarPerfil', async (req, res) => {
  const logged = isLogged(req, res)
  const { nome, email, telefone, endereco } = req.body
  var erros = []
  if (!nome || typeof nome == undefined || nome == null || nome.length == 0) {
    erros.push({ "texto": "O campo de nome não pode estar vazio" })
  }

  if (!email || typeof email == undefined || email == null || email.length == 0) {
    erros.push({ "texto": "O campo de e-mail não pode estar vazio" })
  }

  if (!endereco || typeof endereco == undefined || endereco == null || endereco.length == 0) {
    erros.push({ "texto": "O campo de endereço não pode estar vazio" })
  }

  if (erros.length > 0) {
    res.render('usuarios/perfil', { erros: erros })
  }

  await Cliente.findOne({ _id: logged.id }).then(async cliente => {
    if (email != logged.email) { // caso o cliente tenha mudado o email
      try {
        const emailIsUsed = await emailUsed(req, res, email)
        if (!emailIsUsed) {
          console.log(telefone)
          atualizarPerfil(req, res, nome, endereco, telefone, email, cliente)
        } else {
          req.flash("error_msg", "Este email já está em uso")
          res.redirect("/perfil")
        }
      } catch (error) {
        req.flash('error_msg', "Já existe uma conta com este email")
        res.redirect('/perfil')
      }
    } else {
      console.log(telefone);
      atualizarPerfil(req, res, nome, endereco, telefone, email, cliente)
    }
  }).catch(err => {
    console.log(err);
    req.flash('error_msg', "Este usuário não existe")
    res.redirect('/perfil')
  })
})

function atualizarPerfil(req, res, nome, endereco, telefone, email, cliente) {
  cliente.nome = nome
  cliente.endereco = endereco
  cliente.telefone = telefone
  cliente.email = email

  cliente.save().then(() => {
    req.flash('success_msg', 'Dados atualizados com sucesso')
    return res.redirect('/perfil')
  }).catch(err => {
    console.log(err)
    req.flash("error_msg", "Erro ao salvar os dados")
    return res.redirect("/perfil")
  })
}

router.get('/logout', (req, res, next) => {
  const logged = isLogged(req, res)
  if (logged) {
    req.logout(function (err) {
      if (err) { return next(err); }
      req.flash("success_msg", "Deslogado com sucesso")
      res.redirect('/')
    })
  } else {
    req.flash('error_msg', "Não é possível acessar essa página deslogado")
    res.redirect('/')
  }
})

module.exports = router;
