'use strick'

var app = require('./app');   
var sql = require("mssql");
var connect = require('./security/connection');

// connection to the database
connect.start()
.then(() => {
    app.listen(3000, ()=> {
      console.log('Servidor api escuchando en el puerto 3000');
    })
}).catch(err => console.log(err));