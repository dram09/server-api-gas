'use strick'

var connect = require('../security/connection');

module.exports = class Login{

    params;

    constructor(data){
        this.params = data;
    }
   
    login(res){

        var data = this.params.body;
        
        connect.get(function(req){
    
            req.input('NombreUsuario',data.user);
            req.input('Password',data.password);
    
            req.execute("[IniciarSesion]",function(err,success){
                if(err){ 
                    return res.send({error: err.originalError});
                }
                else{
                    return res.send({user: success.recordset[0]});
                }
            });
        });
    }

    logger(res) {

        var data = this.params.body;

        connect.get(function(req){
        
            req.input('NombreUsuario',data.user);
            req.input('Password',data.password);
            req.input('UsuarioAlt',data.user_alt);
    
            req.execute("[RegistrarUsuario]",function(err,success){
                if(err){ 
                   return  res.send({error: err.originalError});
                }
                else{
                    return res.send(success.recordset);
                }
            });
        });
    }
};




