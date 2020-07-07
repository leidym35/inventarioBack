const mySqlConnection = require('../../../DataBase');
const helpers = require('../../lib/helpers')
require('dotenv').config()
const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const controller = {} 

 controller.postRegister = async (req,res) => { 
        const {admin, nombre, contraseña} = req.body;
        const newUser = {
            admin,
            nombre,
            contraseña
        }
        const findUser = await mySqlConnection.query('SELECT count(nombre) as count FROM usuario WHERE nombre=?', [newUser.nombre]) 
    
        let countUser= findUser[0].count
        if(countUser==0){

        newUser.contraseña = await helpers.generate(contraseña)
        let token = jwt.sign(newUser,process.env.SECRET_KEY,{
            expiresIn:1140
        })
        const result = await mySqlConnection.query('INSERT INTO usuario set ?', [newUser])
        newUser.id = result.insertId 
        res.send(token) 
        }

        else{
            res.send('El nombre de usuario no se encuentra disponible')
        }  
    }
 

controller.postLogin=async(req,res)=>{

     mySqlConnection.query('SELECT nombre,contraseña FROM usuario WHERE nombre=?', [req.body.nombre],(err, rows) => {
        if(rows){
           result = rows[0].contraseña
           name = rows[0].nombre
           const newvalues ={
               result,
               name
           }

            if(helpers.verify(req.body.contraseña, result)){
                let token = jwt.sign(newvalues,process.env.SECRET_KEY,{
                    expiresIn:1140
                })
                res.json({token:token})
            }
            else{
                res.send('credenciales incorrectas')
            }
        }
        else{
            res.send(err)
        }
    })


}
module.exports =controller;
