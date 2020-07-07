const express = require('express');
const router = express.Router()
const UsuariosController= require('../controllers/usuarios/UsuarioRegister.controller') 
const passport = require('passport')

router.post('/signup',UsuariosController.postRegister)

router.post('/login',UsuariosController.postLogin)

module.exports = router