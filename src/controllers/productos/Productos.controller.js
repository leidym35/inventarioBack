const mySqlConnection = require('../../../DataBase')
const controller = {}
//obtener los datos
controller.post = async (req, res) => {
    const {categoria, nombreProducto,cantidad,precio} = req.body
    const newProducto = {
        categoria,
        nombreProducto,
        cantidad,
        precio
    };
    await mySqlConnection.query('INSERT INTO productosInventario set ?', [newProducto])
    
    res.send('datos recibidos')
}

controller.get = (req,res) => {
     mySqlConnection.query('SELECT*FROM productosInventario', (err, rows) => {
        if (!err) {
            res.json(rows)
        }
        else {
            console.log(err)
        }
    });
}


controller.editGet = (req,res) => {
    mySqlConnection.query('SELECT*FROM productosInventario WHERE idProducto =?',[req.params.id], (err, rows) => {
       if (!err) {
           res.json(rows)
       }
       else {
           console.log(err)
       }
   });
}

controller.delete =(req,res) => {
    mySqlConnection.query('DELETE FROM productosInventario WHERE idProducto=?',[req.params.id],(err, rows) => {
       if (!err) {
           res.json("Eliminado")
       }
       else {
           console.log(err)
       }
   }); 
}

controller.update =(req,res) => {
    const { id } = req.params;
    const {categoria, nombreProducto,cantidad,precio} = req.body
    const newProducto = {
        categoria,
        nombreProducto,
        cantidad,
        precio
    };

    mySqlConnection.query('UPDATE productosInventario SET ? WHERE idProducto=?',[newProducto, id],(err, rows) => {
       if (!err) {
           res.json("actualizado")
       }
       else {
           console.log(err)
       }
   }); 
}

module.exports = controller;