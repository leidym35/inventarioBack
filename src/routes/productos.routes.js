const express = require('express');
const router = express.Router()
const ProductosController= require('../controllers/productos/Productos.controller') 
//creacion de rutas
    router.post('/addProducto',ProductosController.post)
 
    router.get('/productos',ProductosController.get)

      router.get('/productosId/:id',ProductosController.editGet)

    router.get('/productosDelete/:id',ProductosController.delete)

    router.post('/productosUpdate/:id',ProductosController.update)
    
module.exports = router