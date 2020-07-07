const express = require('express');
require('./src/lib/passport')
const app=express()
const cors= require('cors')
const passport = require('passport');

app.use(cors())
app.set('port',process.env.PORT||3000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
/* app.use(passport.initialize());
app.use(passport.session()) */
/* 
app.use((req,res,next)=>{
    next();
}) */
//modulos
app.use(require('./src/routes/productos.routes'))
app.use(require('./src/routes/UsuarioRegister.routes')) 
/* app.use(require('./src/routes/publicidad.routes'))  */
//Se levanta el servidor 
app.listen(app.get('port'),()=>{
    console.log("port listen ",app.get('port'))
})