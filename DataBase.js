const mysql=require('mysql')
require('dotenv').config()
const { promisify }= require('util');
//conexion BBDD
const mysqlConnection = mysql.createPool({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DATABASE,
ssl: true
});

mysqlConnection.getConnection(function(err){
  if(err){
    console.error("No se pudo Connectar!", err);
   }
  else{
    console.log("BD Conectada!")
  }
})
mysqlConnection.query = promisify(mysqlConnection.query);
module.exports=mysqlConnection;